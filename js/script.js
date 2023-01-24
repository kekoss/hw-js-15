/*
1. рекурсія це тоді коли функція викликає саму себе до того часу як умова функції не буде істиною,
використовується тому що, цей код більш читабельний, і його легше підтримувати
*/
let n = prompt("random number"); 
while(!n || isNaN(n)|| !n.trim()){
  n = prompt("random number", `${n}`)
}
const factorial = function(n) {
    if (n == 0) {
      return 1;
   }
    return n * factorial(n-1);
}
console.log(factorial(n))
