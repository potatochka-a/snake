const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var BLOCK_SIZE = 15
var mapSize = { 'x': 100, 'y': 50 }

//var BLOCK_SIZE = 5
//var mapSize = { 'x': 300, 'y': 150 }

canvas.width = mapSize.x * BLOCK_SIZE
canvas.height = mapSize.y * BLOCK_SIZE

window.game = new Game(mapSize, BLOCK_SIZE)

function physics() {
    game.physics()
}

function draw() {
    ctx.fillStyle = "#202020"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    game.draw()
    window.requestAnimationFrame(draw)
}

console.log('12312312')

window.physicsInterval = setInterval(physics, 100)
draw()

var qwerty = 'qwerty'