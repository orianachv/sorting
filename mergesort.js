function split(wholeArray) {
  firstHalf = [];
  secondHalf = [];
  var len = wholeArray.length;
  if (wholeArray.length % 2 === 0) {
    for (var i = 0; i < len / 2; i++) {
      firstHalf.push(wholeArray[i]);
      secondHalf.push(wholeArray[len / 2 + i]);
    }
    // for (var i = len / 2; i < len; i++) {
    //   secondHalf.push(wholeArray[i]);
    // }
  } else {
    for (var i = 0; i < Math.round(len / 2); i++) {
      firstHalf.push(wholeArray[i]);
      secondHalf.push(wholeArray[Math.round(len / 2) + i]);
    }
    secondHalf.pop();
    // for (var i = Math.round(len / 2); i < len; i++) {
    //   secondHalf.push(wholeArray[i]);
    // }
  }
  console.log(firstHalf, secondHalf);
  return [firstHalf, secondHalf];
}

// split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, -1]);

function merge(arr1, arr2) {
  var newArr = [];
  console.log(arr1[0]);
  console.log(arr2[0]);

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] < arr2[0] || !arr2.length) {
      newArr.push(arr1[0]);
      arr1.shift();
    } else if (arr2[0] < arr1[0] || !arr1.length) {
      newArr.push(arr2[0]);
      arr2.shift();
    }
  }

  //   console.log(arr1, arr2);
  console.log(newArr);
  return newArr;
  //   newArr = arr1.concat(arr2);
  //   bubbleSort(newArr);
  //   return newArr;
}

// merge([1, 4, 10], [2, 3, 8, 9]);

function mergeSort(arreglo) {
  var arr = [];
  if (arreglo.length === 1) {
    return arreglo;
  }
  var spl = split(arreglo);
  var arr1 = mergeSort(spl[0]);
  var arr2 = mergeSort(spl[1]);
  arr = arr.concat(merge(arr1, arr2));
  console.log(arr);
  return arr;
}

mergeSort([4, 2, 3, 6, 9, 5]);
