class Apple {
    constructor(mapSize, BLOCK_SIZE) {
        const canvas = document.getElementById("canvas")
        this.ctx = canvas.getContext("2d")
        this.mapSize = mapSize
        this.BLOCK_SIZE = BLOCK_SIZE
        this.BOARD = 0.9
    }

    spawn(snakePos) {
        var emptySpace = []
        for (var x = 0; x < this.mapSize.x; x++) {
            for (var y = 0; y < this.mapSize.y; y++) {
                var empty = true
                snakePos.forEach((pos) => {
                    if (pos.x == x && pos.y == y) {
                        empty = false
                    }
                })
                if (empty == true) {
                    emptySpace.push({ 'x': x, 'y': y })
                }
            }
        }
        if (emptySpace.length == 0) {
            window.alert('You win!')
        }
        var i = Math.floor(Math.random() * emptySpace.length)
        this.pos = emptySpace[i]
    }

    draw() {
        var size = this.BLOCK_SIZE * this.BOARD
        var point = {
            'x': (this.pos.x * this.BLOCK_SIZE) + this.BLOCK_SIZE * (1 - this.BOARD) / 2,
            'y': (this.pos.y * this.BLOCK_SIZE) + this.BLOCK_SIZE * (1 - this.BOARD) / 2
        }
        this.ctx.fillStyle = '#f00000'
        this.ctx.fillRect(point.x, point.y, size, size)
    }
}