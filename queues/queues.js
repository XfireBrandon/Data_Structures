class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        
        if (!this.first) {
            return null
        }

        return this.first
    }

    enqueue(data) {

        const node = new Node(data)

        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.length++
        return this
    }

    dequeue() {

        if(this.first === this.last) {
            const trackingNode = this.first
            this.first = null
            this.last = null
            this.length--
            return trackingNode
        } else {
            const trackingNode = this.first
            this.first = this.first.next
            this.length--
            return trackingNode
        }

    }
}


const que = new Queue()
que.enqueue("first in que")
que.enqueue('2nd')
que.enqueue('3rd')
que.enqueue('4th')
que.enqueue('5th')
que.dequeue()
que.dequeue()
console.log(que)