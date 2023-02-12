const BinarySearchTree = require('./binarySearchTree')

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a,b){
   if(a === b){
    return 0;
   } 
   return a < b ? Compare.LESS_THAN: Compare.BIGGER_THAN;
}

class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }   
}

const BalanceFactor = {
    UNBALANCED_RIGTH: 1,    
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    
}

class AVLThree extends BinarySearchTree{
    constructor (compareFn = defaultCompare){
        super(compareFn)
        this.compareFn = compareFn;
        this.root = null
    }

    getNodeHeight(node){
        if (node == null){
            return -1
        }
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        )+1;
    }

    getBalanceFactor(node){
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(this.right)
        switch(heightDifference){
            case -2:
                return this.getBalanceFactor
        }
    }
}