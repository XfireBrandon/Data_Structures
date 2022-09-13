

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop() {
        //Pops off the next node
        if (!this.top) {
            return -1
        }
        if(this.length === 1) {
            let top = this.top
            this.top = null
            this.bottom = null
            this.length--
            return top
        } else {
            let top = this.top
            this.top = this.top.next
            this.length--
            return top
        }

    }

    push(data) {
        //Pushes a node into your stack
        const node = new Node(data)

        if(!this.top) {
            this.top = node
            this.bottom = node
        } else {
            let temp = this.top
            this.top = node
            this.top.next = temp
        }
        this.length++
    }

    peek() {
        //takes a look at the top nod
        if(this.top) {
            return this.next
        }
    }
}

const stack = new Stack()
stack.push('First Stack')
stack.push('second node')
stack.push('3rd node')
stack.push('4th node')
stack.push('5th node')
stack.push('6th node')
stack.pop()
stack.pop()
stack.pop()
console.log(stack)