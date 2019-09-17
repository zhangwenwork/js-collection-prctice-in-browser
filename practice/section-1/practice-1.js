'use strict';

function collectSameElements(collectionA, collectionB) {
  let arr = [];
  for(let i = 0; i < collectionA.length; i++) {
    if ( collectionB.includes(collectionA[i])) {
      arr.push(collectionA[i])
    }

  }
  return arr;
}
