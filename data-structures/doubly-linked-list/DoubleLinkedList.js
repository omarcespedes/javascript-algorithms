import Node from "../list-node/Node";

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        var poppedNode = this.tail;
        if(!this.length) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if(!this.length) return undefined;
        if(this.length === 1) return this.pop();        
        var shiftedItem = this.head;
        this.head = shiftedItem.next;
        this.head.prev = null;
        shiftedItem.next = null;
        this.length--;
        return shiftedItem;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.length) return this.push(val);
        var oldHead = this.head;
        newNode.next = oldHead;
        oldHead.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        var count;
        var current;
        if( index < 0 || index >= this.length) return undefined;
        if(index <= this.length / 2) {
            count = 0;
            current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count != index) {
                current = current.prev;
                count--;
            }
        }
        
        return current;
    }

    set(index, val) {
        var node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if( index < 0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        var newNode = new Node(val);
        var node = this.get(index - 1);
        var nextNode = node.next;

        node.next = newNode;
        newNode.prev = node;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if( index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return true;
    }

    reverse() {
        var node = this.head;
        var prev = null;

        while (node) { 
            prev = node.prev; 
            node.prev = node.next; 
            node.next = prev; 
            node = node.prev; 
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

export default DoublyLinkedList;