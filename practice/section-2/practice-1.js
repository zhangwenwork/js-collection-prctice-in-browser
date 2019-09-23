'use strict';

function countSameElements(collection) {
  let counts = {};
  let results = [];
  collection.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

  for (let item in counts) {
    let result = {};
    result.key = item;
    result.count = counts[item];
    results.push(result);
  }
  return results;
}
