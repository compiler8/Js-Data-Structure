class Node7 {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}


class PriorityQueue7 {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node7(value, priority); //Make an object containing the value and the priority
        this.values.push(newNode);
        this.bubbleUp();  //Re-arrange the heap
    }

    bubbleUp() {
        var index     = this.values.length - 1;
        const element = this.values[index];
      
        while(index > 0) {

            var parentIndex = Math.floor((index-1)/2);
            var parent = this.values[parentIndex]; 
            
            if(element.priority <= parent.priority) { 
                this.values[parentIndex] = element;
                this.values[index] = parent; 
                index = parentIndex;
            } else {
                break;
            }
        }       
    }

    dequeue() {
        const min = this.values[0];     //gives the largest element
        const end = this.values.pop();  //gives the last element
        
        if(this.values.length > 0) {
            this.values[0] = end;       //Inserts the last element into the first position
            this.bubbleDown();          //re-organizing the heap 
        }
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length  = this.values.length; //length of the list
        const element = this.values[0];     //first element in the heap
        
        while(true) {
            let leftChildIndex  = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChildValue, rightChildValue;
            let swap = null;

            if(leftChildIndex < length) {   //Check if the left child is in bounds
                leftChildValue = this.values[leftChildIndex];
                if(leftChildValue.priority < element.priority) {  //Check if the left child is greater than the first element in the list
                    swap = leftChildIndex;
                }
            }  
            if(rightChildIndex < length) { //Check if the right child is in bounds
                rightChildValue = this.values[rightChildIndex];
                                           // Check if the swap has been set and the right child is greater than the first element in the list OR
                if(                        // Check if the swap has not been set and the right child is greater than the first element in the list
                    (swap === null && rightChildValue.priority < element.priority) ||
                    (swap !== null && rightChildValue.priority < leftChildValue.priority)
                ) {
                    swap = rightChildIndex;
                }
            } 
            if(swap === null) {     //Which case either the heap is empty OR a swap did not happen
                break;
            }
            this.values[index] = this.values[swap];
            this.values[swap]  = element;
            index = swap;
        }
    }
}

let ER7 = new PriorityQueue7();
ER7.enqueue("common cold", 5);
ER7.enqueue("gunshot wound", 1);
ER7.enqueue("high fewer", 4);
ER7.enqueue("Broken Arm", 2);
ER7.enqueue("Glass in Foot", 3);


