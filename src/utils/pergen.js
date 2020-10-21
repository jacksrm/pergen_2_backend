// função para trocar a posição de 2 elementos
const swap = (array, indexA, indexB) =>{
  const aux = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = aux;
}

// encontra o "teto" do nosso elemento "first"
const findSecond = (array, first, nextElementIndex, lastElementIndex) => {
  let ceillIndex = nextElementIndex;

  for (let i = ceillIndex + 1; i <= lastElementIndex; i++) {
    if (array[i] > first && array[i] < array[ceillIndex]) ceillIndex = i;
  }

  return ceillIndex;
}

// executa as permutações
const perm = (array) => {
  const size = array.length;
  let permutations = [];
  let isFinished = false;

  while (!isFinished) {
    permutations.push(array.toString());

    let firstIndex;

    for (firstIndex = size - 2; firstIndex >= 0; firstIndex--) {
      if (array[firstIndex] < array[firstIndex + 1]) break;
    }

    if (firstIndex === -1) {
      isFinished = true;
    } else {
      let ceillIndex = findSecond(
        array,
        array[firstIndex],
        firstIndex + 1,
        size - 1
      );

      swap(array, firstIndex, ceillIndex);

      let aux = array.splice(firstIndex + 1);

      aux.sort();

      array.splice(firstIndex + 1, 0, ...aux);
    }
  }
  return permutations;
}

module.exports = perm;