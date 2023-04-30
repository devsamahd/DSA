//list data structure

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value){
       const newNode = new Node(value)
        if(!this.head) {
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
       const iterate = this.length-2

        if(this.length == 0){
            return undefined
        }
        if(this.head == this.tail){
            this.head = null
            this.tail = null
            this.length--
            return this
        }
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }
        const pre = this
        this.head = newNode
        this.head.next = pre
        this.length++
        return this
    }
    shift(){
        if(!this.head){
            return undefined
        }
        if(this.length == 1){
            temp = this.head
            this.head = null
            this.tail = null
            this.length--
        }
        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        return temp
    }
    get(index){
        let temp = this.head
        if(index < 0 || index >= this.length){
            return undefined
        }
        for(let i=0; i<index; i++){
            temp = temp.next 
        }
        return temp
    }
    set(index, value){
        const temp = this.get(index)
        temp.value = value
        return temp
    }
    insert(index, value){
        const nN = new Node(value)
        let temp= this.head;
        let pre
        for(let i=0; i<index; i++){
            pre = temp
            temp = temp.next
        }
        nN.next = temp
        pre.next = nN
        return pre
    }
}

const mylist = new LinkedList(0)
mylist.push(1)
mylist.push(2)
mylist.push(3)
console.log(mylist.insert(2,4))