let score = "33abc"
// why impt? bcz of front end developer send data which can be other type
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
let isLoggedIn=1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "hitesh" => true

let someNumber  = 33
let stringNumber = String(someNumber)
console.log(stringNumber);         // 33
console.log(typeof(stringNumber)); // string