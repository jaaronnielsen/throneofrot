package main

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/mattn/go-sqlite3"
)

func enableCORS(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func save(w http.ResponseWriter, req *http.Request) {
	//enableCORS(&w)
	fmt.Fprintf(w, "Saving Game...\n")

	database, err := sql.Open("sqlite3", "./gamesaves.db")
	check(err)
	defer database.Close()

	statement, _ := database.Prepare("create table IF NOT EXISTS savefile(pin TEXT, playerstate BLOB, gamestate BLOB)")
	statement.Exec()
	statement, _ := database.Prepare("insert into savefile(pin, playerstate, gamestate) values (?,?,?)")
	statement.Exec(pin, playerstate, gamestate)
}

func load(w http.ResponseWriter, req *http.Request) {
	//enableCORS(&w)
	fmt.Fprintf(w, "Loading Game...\n")

	rows, _ := database.Query("SELECT * FROM savefile WHERE pin = `pin`")
	var id string
	var player byte
	var game byte
	for rows.Next() {
		rows.Scan(&id, &player, &game)
	}
	return id, player, game
}

func main() {
	http.HandleFunc("/save", pin, playerstate, gamestate)
	http.HandleFunc("/load", pin)

	fs := http.FileServer(http.Dir("dist/"))
	http.Handle("/rot/", http.StripPrefix("/rot/", fs))
	http.ListenAndServe(":8080", nil)
}
