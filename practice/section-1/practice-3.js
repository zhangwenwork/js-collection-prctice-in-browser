'use strict';

function collectSameElements(collectionA, objectB) {
  let arr = [];
  for(let i = 0; i < collectionA.length; i++) {
    if ( objectB.value.includes(collectionA[i])) {
      arr.push(collectionA[i])
    }

  }
  return arr;
}
