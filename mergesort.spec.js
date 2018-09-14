describe('split', function() {
  it('deberia dividir un arreglo en dos', function() {
    expect(split([2, 4, 5, 6])).toEqual([[2, 4], [5, 6]]);
  });
  it('deberia manejar arreglos con legth impar', function() {
    expect(split([2, 3, 4, 6, 7])).toEqual([[2, 3, 4], [6, 7]]);
  });
});

describe('merge', function() {
  it('recibe dos arreglos ordenados y los concatena en orden', function() {
    expect(merge([4, 11], [2, 7, 10])).toEqual([2, 4, 7, 10, 11]);
  });
});

describe('mergeSort', function() {
  it('recibe un arreglo desordenado y lo devuelve ordenado', function() {
    expect(mergeSort([2, 1, 5, 3, 8, 7])).toEqual([1, 2, 3, 5, 7, 8]);
  });
});
