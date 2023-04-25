const num = parseInt(prompt("Some number"));
const sum = sumOfNums();
function sumOfNums() {
  let sum = 0;
  return function (number) {
    sum += number;
    return sum;
  };
}
console.log(sum(num));
