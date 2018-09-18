describe('bubbleSort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('Debe devolver el arreglo ordenado', function() {
    expect(bubbleSort([4, 8, 3, 9, 1, 2])).toEqual([1, 2, 3, 4, 8, 9]);
  });
  it('La funcion maneja arreglos con numeros negativos', function() {
    expect(bubbleSort([4, 2, 8, -1, -5])).toEqual([-5, -1, 2, 4, 8]);
  });
  it('La funcion maneja arreglos con 0', function() {
    expect(bubbleSort([1, 0, -1, -5, 10])).toEqual([-5, -1, 0, 1, 10]);
  });
});
describe('swap', function() {
  it('Devuelve correctamente cuantas veces fue llamado', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([5, 1, 2, 4]);
    expect(window.swap.calls.count()).toEqual(3);
  });
});
