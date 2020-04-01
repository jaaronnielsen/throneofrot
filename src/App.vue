<template>
  <div id="app">
    <!-- <h1>testing</h1> -->
    <game_board/>
  </div>
</template>

<script>
import game_board from './components/game_board.vue'
window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: 'app',
  components: {
    game_board
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
