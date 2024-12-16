function myFunction() {
  let arr = [1, 2, 3, 4, 5];
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
  //Alternative solution to handle empty array
  function myFunction2() {
    let arr = [];
    let i = 0;
    if(arr.length > 0){
      while (i < arr.length) {
        console.log(arr[i]);
        i++;
      }
    } else {
        console.log("Array is empty");
    }
  } 