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
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT:4,
    UNBALANCED_LEFT: 5
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
                return BalanceFactor.UNBALANCED_RIGTH
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED
        }
    }
}