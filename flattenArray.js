//
// A script that takes an array as terminal input, and print the flatten
// version of the input array.
//

const flatten = (arr, flattenArrayResult=[]) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element, flattenArrayResult)
    } else {
      // Element
      flattenArrayResult.push(element);
    }
  });

  return flattenArrayResult;
}

//
// Start
//

// Check if there is any argument or not
if (process.argv.length < 3) {
  console.warn('No input has been passed to this script!');
  return;
}

// Check if the passed argument is an array
let inputArray = [];
try {
  inputArray = JSON.parse(process.argv[2]);
  if (! Array.isArray(inputArray)) {
    console.warn('Your input should be an array!');
    return;
  }
} catch(e) {
  console.warn('Your input should be an array!');
  return;
}

const result = flatten(inputArray);
console.log('Your input: ', inputArray);
console.log('Flattened array; ', result);
