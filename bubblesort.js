function bubbleSort(arreglo) {
  for (var i = 0; i < arreglo.length; i++) {
    for (var j = 1; j < arreglo.length; j++) {
      if (arreglo[j - 1] > arreglo[j]) {
        swap(arreglo, j - 1, j);
      }
    }
  }
  console.log(arreglo);
  return arreglo;
}

function swap(arr, i, j) {
  var temporal = arr[i];
  arr[i] = arr[j];
  arr[j] = temporal;
}
