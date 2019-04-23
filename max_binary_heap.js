/*
    -- Time Complexity --

    Insertion - O(log(n))
    Removal   - O(log(n))
    Search    - O(n)

       O
      / \   For 16 elements it'll take 4 comparisons      
     O  O   log(16) = 4 
    /\  /\  
   O O O O
     ...
*/

class MaxBinaryHeap16 {
    constructor() {
        this.values = [41,39,33,18,27];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        var index   = this.values.length - 1;
        const element = this.values[index];
      
        while(index > 0) {

            var parentIndex = Math.floor((index-1)/2);
            var parent = this.values[parentIndex]; 
            
            if(element > parent) { 
                this.values[parentIndex] = element;
                this.values[index] = parent; 
                index = parentIndex;
            } else {
                break;
            }
        }       
    }

    extractMax() {
        const max = this.values[0];     //gives the largest element
        const end = this.values.pop();  //gives the last element
        
        if(this.values.length > 0) {
            this.values[0] = end;       //Inserts the last element into the first position
            this.bubbleDown();          //re-organizing the heap 
        }
        return max;
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
                if(leftChildValue > element) {  //Check if the left child is greater than the first element in the list
                    swap = leftChildIndex;
                }
            }  
            if(rightChildIndex < length) { //Check if the right child is in bounds
                rightChildValue = this.values[rightChildIndex];
                                           // Check if the swap has been set and the right child is greater than the first element in the list OR
                if(                        // Check if the swap has not been set and the right child is greater than the first element in the list
                    (swap === null && rightChildValue > element) ||
                    (swap !== null && rightChildValue > leftChildValue)
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

var heap = new MaxBinaryHeap16();




