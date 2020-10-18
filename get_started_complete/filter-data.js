let words = document.body.innerHTML; 
let res = words.replace(/hackathon|login|run|/, function (x) { //find ints
  return '<mark>' + x + '</mark>';
});
document.body.innerHTML = res;

// let res2 = res.replace(/hackathon|login|run|papa's/gi, function (x) { //global, case insensitive
//   return '<mark>' + x + '</mark>';
// });
// document.body.innerHTML = res2;
  

