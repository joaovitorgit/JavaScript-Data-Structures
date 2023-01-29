class Stack{
    constructor(){
        this.count = 0; // it'll be the object key
        this.items = {};
    }

    push(element){
        this.items[this.count]=element;
        this.count++;
    }

    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count -1 ];
    }

    isEmpty(){
        return this.count === 0;
    }

    size(){
        return this.count;
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.items[0]}`;
        for(let i = 1; 1<this.count;i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }

}