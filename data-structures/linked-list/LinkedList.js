import Node from '../list-node/Node';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;

        var current = this.head;
        var previous = current;
        while(current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length--;

        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head; 
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        var newHead = new Node(val);
        var oldHead = this.head;

        if(!oldHead) {
            this.tail = newHead;
        }

        newHead.next = oldHead;
        this.head = newHead;
        this.length++;
        return this;
    }

    get(i) {
        let count = 0;
        var current = this.head;
        if(i < 0 || i >= this.length) return null;

        while(count < i) {
            count++;
            current = current.next;
        }

        return current;
    }

    set(i, val) {
        var current = this.head;
        var item = this.get(i);

        if(item) {
            item.val = val;
            return true
        }
        return current;
    }

    insert(i, val) {
        if(i < 0 || i >= this.length) return false;
        else if(i == 0) {
            this.unshift(val);
        } 
        else if(i == this.length){
            this.push(val);
        } else {
            let prev = this.get(i-1);
            let next = prev.next;
            const newNode = new Node(val);
            newNode.next = next;
            prev.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(i) {
        if(i < 0 || i >= this.length) return false;
        else if(i == 0) return this.shift();
        else if (i == this.length -1) return this.pop();
        
        let node = this.get(i-1);
        node.next = node.next.next;
        
        this.length--;
        return true;
    }

    reverse() {
        var node = this.head;
        var prev = null;
        var next;

        this.head = this.tail;

        while(node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        var current = this.head;
        var arr = [];
        while(current) {
            arr.push(current.val);
            current = current.next;
        }

        var list = arr.join(' -> ');
        console.log(list)
        return list;
    }
}

export default LinkedList;