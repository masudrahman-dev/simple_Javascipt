
const add = document.getElementById("add");
add.addEventListener("click", Addition);
function Addition() {
  function sum(a, b) {
    let totalValue = a + b;
    return totalValue;
  }
  const a = parseInt(prompt("A value"));
  const b = parseInt(prompt("B value"));
  const result = sum(a, b);
  document.getElementById("addValue").innerHTML = result;
}

// assignment
// +
// -
// *
// /
// %
// class 3,4,5,6,7,8 books math solve

