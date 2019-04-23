// Original Hash Function

// function hash(key, arrayLen) {
//     let total = 0;
//     for(let char of key) {
//         //map "a" to 1, "b" to 2, "c" to 3, etc.
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }


// Slight Improvement of the Hash function

// function hash(key, arrayLen) {
//     let total = 0;
//     let PRIME_NUMBER = 31;

//     for(let i  = 0; i < Math.min(key.length, 100); i++) {
//         let value = key.charCodeAt(i) - 96;
//         total = (total * PRIME_NUMBER + value) % arrayLen; 
//     }

//     return  total;
// }

class HashTable3 {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let PRIME_NUMBER = 31;

        for(let i = 0; i < Math.min(key.length, 100); i++) {      
            let value = key.charCodeAt(i) - 96;
            total = (total * PRIME_NUMBER + value) % this.keyMap.length; 
        }
        return total;
    }

    //Set the key, value pair in the hash table using separate chaining
    set(key,value) {
        let index = this._hash(key);
        
        //Check if there is any element at the selected index
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
            this.keyMap[index].push([key, value]);
        } else {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] !== key) {
                    this.keyMap[index].push([key, value]);
                    break;
                } else {
                    this.keyMap[index][i][1] = value;
                }
            }
        }
    }

    get(key) {
        let index = this._hash(key);

        if(this.keyMap[index]) {
            
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }    
        }

        return undefined;
    }

    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}
let ht3 = new HashTable3(17);
ht3.set("purple", "#DDA0DD");


/*  Time Complexity
    

    Average Case:
    o insert   : O(1)
    o Deletion : O(1)
    o Access   : O(1)
   



*/