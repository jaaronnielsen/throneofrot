<template>
<main @click="checkHealth()">
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"> 
    <!-- Access-Control-Allow-Origin: localhost:8080/* -->
    <h1>The Throne of Rot</h1>
    <h2>Sent to a desolate kingdom, you've been tasked to take the throne.</h2>
    <div id="board">
        <!-- Column 1 -->
        <div class="a1" @click="move(0, 0)">
            <img class="tile_img" :src="map_grid[0][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][0]].src">
        </div>
        <div class="a2" @click="move(0, 1)">
            <img class="tile_img" :src="map_grid[0][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][1]].src">
        </div>
        <div class="a3" @click="move(0, 2)">
            <img class="tile_img" :src="map_grid[0][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][2]].src">
        </div>
        <div class="a4" @click="move(0, 3)">
            <img class="tile_img" :src="map_grid[0][3].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][3]].src">
        </div>
        <div class="a5" @click="move(0, 4)">
            <img class="tile_img" :src="map_grid[0][4].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][4]].src">
        </div>

        <!-- Column 2 -->
        <div class="b1" @click="move(1, 0)">
            <img class="tile_img" :src="map_grid[1][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][0]].src">
        </div>
        <div class="b2" @click="move(1, 1)">
            <img  class="tile_img" :src="map_grid[1][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][1]].src">
        </div>
        <div class="b3" @click="move(1, 2)">
            <img class="tile_img" :src="map_grid[1][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][2]].src">
        </div>
        <div class="b4" @click="move(1, 3)">
            <img class="tile_img" :src="map_grid[1][3].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][3]].src">
        </div>
        <div class="b5" @click="move(1, 4)">
            <img class="tile_img" :src="map_grid[1][4].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][4]].src">
        </div>
        
        <!-- Column 3 -->
        <div class="c1" @click="move(2, 0)">
            <img class="tile_img" :src="map_grid[2][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][0]].src">
        </div>
        <div class="c2" @click="move(2, 1)">
            <img class="tile_img" :src="map_grid[2][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][1]].src">
        </div>
        <div class="c3" @click="move(2, 2)">
            <img class="tile_img" :src="map_grid[2][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][2]].src">
        </div>
        <div class="c4" @click="move(2, 3)">
            <img class="tile_img" :src="map_grid[2][3].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][3]].src">
        </div>
        <div class="c5" @click="move(2, 4)">
            <img class="tile_img" :src="map_grid[2][4].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][4]].src">
        </div>

        <!-- Column 4 -->
        <div class="d1" @click="move(3, 0)">
            <img class="tile_img" :src="map_grid[3][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[3][0]].src">
        </div>
        <div class="d2" @click="move(3, 1)">
            <img class="tile_img" :src="map_grid[3][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[3][1]].src">
        </div>
        <div class="d3" @click="move(3, 2)">
            <img class="tile_img" :src="map_grid[3][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[3][2]].src">
        </div>
        <div class="d4" @click="move(3, 3)">
            <img class="tile_img" :src="map_grid[3][3].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[3][3]].src">
        </div>
        <div class="d5" @click="move(3, 4)">
            <img class="tile_img" :src="map_grid[3][4].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[3][4]].src">
        </div>

        <!-- Column 5 -->
        <div class="e1" @click="move(4, 0)">
            <img class="tile_img" :src="map_grid[4][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[4][0]].src">
        </div>
        <div class="e2" @click="move(4, 1)">
            <img class="tile_img" :src="map_grid[4][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[4][1]].src">
        </div>
        <div class="e3" @click="move(4, 2)">
            <img class="tile_img" :src="map_grid[4][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[4][2]].src">
        </div>
        <div class="e4" @click="move(4, 3)">
            <img class="tile_img" :src="map_grid[4][3].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[4][3]].src">
        </div>
        <div class="e5" @click="move(4, 4)">
            <img class="tile_img" :src="map_grid[4][4].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[4][4]].src">
        </div>


        <div class="map_hud">
            <h2>Map</h2>
            <div class="eventInfo">You've arrived in the far reaches of a foreign kingdom. There's no 
                turning back now.
            </div>
            <div class="playerattack"></div>
            <div class="enemyattack"></div>
            <div class="buttons"></div>
        </div> 
        <div class="player_hud">
            <h2>Player</h2>
            <p> {{ player.name }} </p>
            <p class="health">Health: {{ player.health }} </p>
            <p class="wealth">Wealth: {{ player.money }} gold</p>
            <p>Items: {{player.items}}</p>
            <p>Weapon: {{player.weapon.name}}</p>
            <p class="boy" style="color:blue"></p>
            <button onclick="save()">Save</button>
            <button onclick="load()">Load</button>
        </div>
    </div>
<footer>By Caleb Morales and Jaaron Nielsen</footer>
</main>
</template>

<script>

import game from '../data/tile';
import map_grid from '../data/game_map';
import fig_board from '../data/figure_board';
import player from '../data/player';

function eventCheck (x,y) {
        map_grid[x][y].event()
    }
window.save = function() {
        alert("you saved the game");
        // var corsAttr = new EnableCorsAttribute("*", "*", "*");
        // config.EnableCors(corsAttr);
        $.get("http://localhost:8080/rot/save");

    }
    
window.load = function(){
        alert("you loaded a saved game"); 
        // var corsAttr = new EnableCorsAttribute("*", "*", "*");
        // config.EnableCors(corsAttr);
        $.get("http://localhost:8080/rot/loads");
    }

export default {
    name: 'game_board',
        data () {
            return {
                map_grid,
                fig_board,
                game,
                player
               
            }
        },
    methods: {
        say: function (message) {
            alert(message)
        },
        move (x, y) {
            if (map_grid[x][y].tile_type.passable === true) {
                for (var i = 0; i < fig_board.length; i++) {
                    for (var j = 0; j < fig_board.length; j++) {
                        if (fig_board[i][j] === 1) {
                            var currentx = i
                            var currenty = j
                        }
                    }
                }
                var viablex1 = currentx + 1
                var viablex2 = currentx - 1
                var viabley1 = currenty + 1
                var viabley2 = currenty - 1

                if (((x === viablex1) && (y === currenty)) || ((x === viablex2) && (y === currenty))) {
                    //alert("This area is passable at: " + x + " " + y)
                    fig_board[x][y] = 1
                    fig_board[currentx][currenty] = 0
                    eventCheck(x,y)
                } else {
                    if (((x === currentx) && (y === viabley1)) || ((x === currentx) && (y === viabley2))) {
                        //alert("This area is passable at: " + x + " " + y)
                        fig_board[x][y] = 1
                        fig_board[currentx][currenty] = 0
                        eventCheck(x,y)
                    }
                }
            } else {
                //alert("This area is impassable")
            }
            this.$forceUpdate();
        },
        checkHealth () {
            if (player.health < 1) {
                alert(`You've been killed!`);
                location.reload(true);
            }
        },
        
    } 
}       
</script>

<style scoped>
    h1,h2 {
        font-family: 'Cinzel Decorative', cursive;
        padding: 0.5em;
    }
    div#board {
        display: grid;
        grid-template-columns: 10em 10em 10em 10em 10em 20em;
        grid-template-rows: 10em 10em 10em 10em 10em;
        grid-template-areas:
            'a1 a2 a3 a4 a5 mh'
            'b1 b2 b3 b4 b5 mh'
            'c1 c2 c3 c4 c5 mh'
            'd1 d2 d3 d4 d5 ph'
            'e1 e2 e3 e4 e5 ph'
            
        ;
        grid-gap: 10px;
        justify-content: center;
    }
    img {
        height: 100%;
        width: auto;
        /*height: 50%;*/
    }
    .fig_img {
        position: relative;
        top: -10.2em;
        z-index: 10;
    }
    .tile_img {
        z-index: -1;
    }
    span {
        font-family: 'Cinzel Decorative', cursive;
        font-size: 125%;
        position: relative;
        top: 6em;
        justify-content: center;
    }

    .map_hud {
        overflow: auto;
        background-color: whitesmoke;
        font-family: 'Cinzel Decorative', cursive;
        font-weight: bold;
        border: 2px solid black;
        margin-top: 1em;
        grid-area: mh;
    }
    .player_hud {
        background-color: whitesmoke;
        font-family: 'Cinzel Decorative', cursive;
        font-weight: bold;
        border: 2px solid black;
        margin-top: 1em;
        grid-area: ph;
    }

    .health {
        color: red;
    }
    
    .wealth {
        color: goldenrod;
    }

    .eventInfo, .playerattack, .enemyattack {
        font-family: 'Raleway', sans-serif;
        padding: 0.5em;
        text-align: left;
    }

    footer {
        color: lightgray;
        font-style: italic;
        padding: 1em;
    }

    .a1 { grid-area: a1; }
    .a2 { grid-area: a2; }
    .a3 { grid-area: a3; }
    .a4 { grid-area: a4; }
    .a5 { grid-area: a5; }

    .b1 { grid-area: b1; }
    .b2 { grid-area: b2; }
    .b3 { grid-area: b3; }
    .b4 { grid-area: b4; }
    .b5 { grid-area: b5; }

    .c1 { grid-area: c1; }
    .c2 { grid-area: c2; }
    .c3 { grid-area: c3; }
    .c4 { grid-area: c4; }
    .c5 { grid-area: c5; }

    .d1 { grid-area: d1; }
    .d2 { grid-area: d2; }
    .d3 { grid-area: d3; }
    .d4 { grid-area: d4; }
    .d5 { grid-area: d5; }

    .e1 { grid-area: e1; }
    .e2 { grid-area: e2; }
    .e3 { grid-area: e3; }
    .e4 { grid-area: e4; }
    .e5 { grid-area: e5; }
</style>