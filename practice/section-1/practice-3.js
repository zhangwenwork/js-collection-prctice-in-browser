'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(x => objectB.value.includes(x));
}
