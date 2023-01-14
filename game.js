class Game {
    constructor(mapSize, BLOCK_SIZE) {
        this.mapSize = mapSize
        this.BLOCK_SIZE = BLOCK_SIZE
        this.snake = new Snake(this.mapSize, this.BLOCK_SIZE)
        this.apple = new Apple(this.mapSize, this.BLOCK_SIZE)
        this.apple.spawn(this.snake.pos)
        this.end = false
    }

    physics() {
        this.snake.move()
        var headPos = this.snake.pos[0]
        for (var i = 1; i < this.snake.pos.length; i++) {
            var pos = this.snake.pos[i]
            if (headPos.x == pos.x && headPos.y == pos.y) {
                this.end = true
            }
        }

        if (headPos.x < 0 ||
            headPos.x > this.mapSize.x - 1 ||
            headPos.y < 0 ||
            headPos.y > this.mapSize.y - 1 ||
            this.end == true)
        {
            clearInterval(window.physicsInterval)
            window.alert('You lose (')
        }

        var tailPos = this.snake.pos[this.snake.pos.length - 1]
        if (headPos.x == this.apple.pos.x && headPos.y == this.apple.pos.y) {
            this.snake.pos.push(tailPos)
            this.apple.spawn(this.snake.pos)
        }
    }

    draw() {
        this.apple.draw()
        this.snake.draw()
    }
}
