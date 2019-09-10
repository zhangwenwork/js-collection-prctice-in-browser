'use strict';

function collectSameElements(collectionA, objectB) {
  let arrayA = collectionA.map(x => x.key);
  return arrayA.filter(x => objectB.value.includes(x));
}
