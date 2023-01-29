const _items = Symbol('stackItems');

class Stack{
    constructor(){
        this[_items] = []
    }

    push(element){
        this[_items] .push(element);
    }

    pop(){
        return this[_items].pop();
    }

    peek(){
        return this[_items][this[_items].length-1];
    }

    isEmpty(){
        return this[_items].length === 0;
    }

    size(){
        return this[_items].length;
    }

    clear(){
        this[_items] = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.peek());

stack.pop()

console.log(stack.size());

stack.push(10);

console.log(stack.peek());

stack.clear()
console.log(stack.size());




