const items = new WeakMap();

class Stack{
    constructor(){
        items.set(this, []);
    }

    push(element){
        const temp = items.get(this);
        temp.push(element);
    }

    pop(){
        const temp = items.get(this);
        const poppedValue = temp.pop();
        return poppedValue;
    }

    // private fields but cant extends
}