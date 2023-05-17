function mayorArray(array) {
    if (array.length === 0) {
      return null;
    } else if (array.length === 1) {
      return array[0];
    }
  
    let numeroMayor = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > numeroMayor) {
        numeroMayor = array[i];
      }
    }
  
    let index = 0;
    while (index < array.length) {
      console.log(array[index]);
      index++;
    }
  
    let cantidadImpares = 0;
    let j = 0;
    do {
      if (array[j] % 2 !== 0) {
        cantidadImpares++;
      }
      j++;
    } while (j < array.length);
  
    return numeroMayor;
  }
  
  const numeros = [3, 5, 2, 7, 10, 21, 4, 15];
  console.log(mayorArray(numeros))

