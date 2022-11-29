function sum(...args) {
    let sum = 0
    args.forEach((el) => {
        sum += el
    })
    return sum
}

//console.log(sum(1,2,3,4))

function sumTwo() {
    
    let sum = 0;
    

    for (let i = 0; i < arguments.length; i++) {
        
        sum += arguments[i]
        
    }
    
    return sum
}

// console.log(sumTwo(1,2,3,4))


// Function.prototype.myBind = function (context){
//     let that = this
//     let bindArgs = [...arguments].slice(1);
//     return function () {
//         let callArgs = [...arguments];
//         return that.apply(context,bindArgs.concat(callArgs));
//     }
// }

Function.prototype.myBind = function(context,...bindArgs) {
    let that = this;
    return function(...callArgs) {
        return that.apply(context,[...bindArgs,...callArgs]);
    }
}

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true

function curriedSum(numArgs) {
    let numbers = [];
    return function _curriedSum(arg) {
        numbers.push(arg);
        if (numbers.length >= numArgs) {
            // let total = 0;
            // for (let i = 0; i < numbers.length; i++) {
            //     total += numbers[i];
            // }
            // return total;
            return sum(...numbers);
        } else {
            return _curriedSum;
        }
    }

    // return _curriedSum;
}
// console.log(sum([5,30,20,1]))
const sums = curriedSum(4);
console.log(sums(5)(30)(20)(1)); // => 56

//console.log(curriedSum(4)(1,2,3,4));
// const sumCurry = curriedSum(4);
// console.log(sumCurry(3)(30)(20)(1)); // => 56

//console.log(curriedSum(2))


Function.prototype.curry = function(numArgs){
    let num = []
    let func = this

    return function _curry(arg) {
        num.push(arg)
        if(num.length < numArgs){
            return _curry
        }else {
            return func(...num)
        }
    }
}

Function.prototype.curry = function(numArgs){
    let num = []
    let func = this 

    return function _curry(arg) {
        num.push(arg)
        if(num.length < numArgs){
            return _curry
        }else {
            return func.apply(num)
        }
    }
}