class Snake {
    constructor(mapSize, BLOCK_SIZE) {
        const canvas = document.getElementById("canvas")
        this.ctx = canvas.getContext("2d")
        this.mapSize = mapSize
        this.BOARD = 0.9
        this.BLOCK_SIZE = BLOCK_SIZE
        this.direct = { 'x': 1, 'y': 0 }
        var head = {
            'x': Math.floor(mapSize.x / 2),
            'y': Math.floor(mapSize.y / 2)
        }
        this.pos = [
            { 'x': head.x, 'y': head.y },
            { 'x': head.x - 1, 'y': head.y },
            { 'x': head.x - 2, 'y': head.y },
            { 'x': head.x - 3, 'y': head.y }
        ]
        this.keyMap = {
            'KeyW': this.moveUp,
            'KeyD': this.moveRight,
            'KeyS': this.moveDown,
            'KeyA': this.moveLeft
        }
        this.setControl()
    }

    setControl() {
        document.addEventListener('keydown', (e) => {
            this.keyMap[e.code](this)
        })
    }

    move() {
        var next = Object.assign({}, this.pos[0])
        var prev = {}
        this.pos[0].x += this.direct.x
        this.pos[0].y += this.direct.y
        for (var i = 1; i < this.pos.length; i++) {
            prev = this.pos[i]
            this.pos[i] = next
            next = prev
        }
    }

    moveUp(snake) {
        if (snake.direct.y == 1 || snake.direct.y == -1) { return }
        snake.direct = { 'x': 0, 'y': -1 }
    }

    moveRight(snake) {
        if (snake.direct.x == 1 || snake.direct.x == -1) { return }
        snake.direct = { 'x': 1, 'y': 0 }
    }

    moveDown(snake) {
        if (snake.direct.y == 1 || snake.direct.y == -1) { return }
        snake.direct = { 'x': 0, 'y': 1 }
    }

    moveLeft(snake) {
        if (snake.direct.x == 1 || snake.direct.x == -1) { return }
        snake.direct = { 'x': -1, 'y': 0 }
    }

    draw() {
        for (var i = 0; i < this.pos.length; i++) {
            var size = this.BLOCK_SIZE * this.BOARD
            var point = {
                'x': (this.pos[i].x * this.BLOCK_SIZE) + this.BLOCK_SIZE * (1 - this.BOARD) / 2,
                'y': (this.pos[i].y * this.BLOCK_SIZE) + this.BLOCK_SIZE * (1 - this.BOARD) / 2
            }
            this.ctx.fillStyle = '#00f000'
            this.ctx.fillRect(point.x, point.y, size, size)
        }
    }
}
