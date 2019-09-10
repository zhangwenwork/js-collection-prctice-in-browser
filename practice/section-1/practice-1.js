'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(x => collectionB.includes(x));
}
