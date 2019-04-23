class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('Hi')
// first.next = new Node(' There!')

class SignlyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {

        var newNode = new Node(val)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //     traverse() {

    //         var current = this.head;
    //         while(current) {
    //             console.log(current.val);
    //             current = current.next;
    //         }
    //     }

    pop() {
        if (!this.head) {
            return undefined;
        }

        var current = this.head;
        var newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head)
            return undefined;

        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        } else {

            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

}

//Stopped at lecture 11

var list = new SignlyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");

list.pop();
console.log(list);
list.pop();
console.log(list);
list.pop();
console.log(list);
