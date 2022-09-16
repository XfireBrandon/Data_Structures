class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    addHead(data) {
        const node = new Node(data)
        if(!this.head) {
            this.head = node
            this.tail = node
            this.length++
        }else{
            node.next = this.head
            this.head = node
            this.length++
        }
    }

    addTail(data) {
        const node = new Node(data)
        if(!this.next) {
            this.tail = node
            this.length++
        }
    }

    traverse() {
        let arr = [];

        let current = this.head
        while(current) {
            arr.push(current.data)
            current = current.next
        }
        return arr;
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const list = new LinkedList
list.addHead('1st')
list.addHead('2nd')
list.addHead('3rd')
list.addHead('4th')
list.addTail('New tail')
list.addTail('Another new tail')

console.log(list.traverse())