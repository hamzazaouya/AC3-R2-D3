/*global console*/

/*
* This Function Is Take the last Number And Make Recursion
* To See if this number is Odd or Even.
*/

function isEven(a) {

  let num = a.toString()
  let lastnum = num[num.length - 1];
  return test(lastnum);

  function test(b) {

    let c = Number(b);

    if(c === 0) {
      return "Even";
    }else if(c === 1) {
      return "Odd";
    }else {
      return test(b - 2);
    }
  }
}
console.log(`This number is ${isEven(15487936549)}`);
