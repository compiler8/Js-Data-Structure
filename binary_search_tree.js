class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        var newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }   
                } // END - ELSE 
            } //END - WHILE
        } // END - ELSE
    } //END - INSERT

//     find(value) {
//         var current = this.root;
//         var elementFound = false;
//         //return undefined if the tree is empty
//         if(this.root === null) return false;
        
//         while(!elementFound) {
//             if(current.value === value) {
//                 return true;
//             } else if(value < current.value) {
//                 if(current.left === null) {
//                     return false;
//                 } else {
//                   current = current.left  
//                 }      
//             } else if(value > current.value) {
//                 if(current.right === null) {
//                     return false;
//                 } else {
//                    current = current.right;   
//                 }
//             } 
//         }// END_WHILE

//     }// END_FIND

       find(value) {
           if(this.root === null) return false;
           var current = this.root,
               found = false;

           while(current && !found) {
              if(value < current.value) {
                  current = current.left;
              } else if(value > current.value) {
                  current = current.right;
              } else {
                  found = true;
              }
           }
           if(!found) return undefined; 
           return current;
       }

       BFS() {
       
           var node  = this.root,
               queue = [],
               data  = [];
            
           if (node !== null) queue.push(node);

           while(queue.length) {
               node = queue.shift();
               data.push(node);

               if(node.left) queue.push(node.left)
               if(node.right) queue.push(node.right)
           }
           return data;
       }

       DFSPreOrder() {
           var data = [];

           function traverse(node) {
               data.push(node);

               if(node.left)  traverse(node.left);
               if(node.right) traverse(node.right); 
           }
           traverse(this.root);
           return data;
       }

       DFSPostOrder() {
           var data = [];

           function traverse(node) {
               if(node.left)  traverse(node.left);
               if(node.right) traverse(node.right); 

               data.push(node);
           }
           traverse(this.root);
           return data;
       }

       DFSInOrder() {
           var data = [];

           function traverse(node) {
               if(node.left)  traverse(node.left);
               data.push(node);
               if(node.right) traverse(node.right); 
           }
           traverse(this.root);
           return data;
       }
}

var tree = new BinarySearchTree();
tree.insert(10);
console.log(tree);
tree.insert(6);
console.log(tree);
tree.insert(15);
console.log(tree);
tree.insert(3);
console.log(tree);
tree.insert(8);
console.log(tree);
tree.insert(15);
console.log(tree);

console.log(tree.find(3));