console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 2 != 0){
      console.log(i);
    }
    else{
      continue;
    }
  }



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0)
        console.log((i) + ", 3 & 5: FIZZBUZZ");
    else if (i % 3 == 0)
        console.log((i) + ", 3: FIZZ");
    else if (i % 5 == 0)
        console.log((i) + ", 5: BUZZ")
    else
        continue;
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// DO - WHILE ---------------------------

let i = 0;
do{
    i++;
    if (i % 3 == 0 && i % 5 == 0)
        console.log((i) + ", 3 & 5: FIZZBUZZ");
    else if (i % 3 == 0)
        console.log((i) + ", 3: FIZZ");
    else if (i % 5 == 0)
        console.log((i) + ", 5: BUZZ")
    else
        continue;
}while (i <= 100);
// WHILE -------------------------------- 

let i = 0;
while (i <= 100){
    i++;
    if (i % 3 == 0 && i % 5 == 0)
    console.log((i) + ", 3 & 5: FIZZBUZZ");
    else if (i % 3 == 0)
    console.log((i) + ", 3: FIZZ");
    else if (i % 5 == 0)
    console.log((i) + ", 5: BUZZ")
    else
        continue;
  }
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= value; i++){
    if (i == n){
        console.log("Search value: " + (value) + ", Search range: " + (n)); // Added for testing
        console.log("Found value!");
        break;
    }
    else if (i == n)
        continue;
    else break;
}

console.log("Search value: " + (value) + ", Search range: " + (n)); // Added for testing
console.log("Did not find value");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
console.log("fizzDivisor: "+ (fizzDivisor)); // Added for testing
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
console.log("buzzDivisor: "+ (buzzDivisor)); // Added for testing
let n = Math.round(Math.random() * (1000 - 1) + 1);
console.log("n: "+ (n)); // Added for testing
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log("start: "+ (start)); // Added for testing

for (let i = start; i <= n - 1; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
    console.log((i) + " FIZZBUZZ"); // Added (i) for testing
    else if (i % fizzDivisor == 0)
    console.log((i) + " FIZZ"); // Added (i) for testing
    else if (i % buzzDivisor == 0)
    console.log((i) + " BUZZ"); // Added (i) for testing
    else
        continue;
}


