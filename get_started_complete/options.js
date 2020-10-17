// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);



let text = document.getElementById('textStatement');

console.log(text);

function mouseMove() {
//  text.addEventListener('click', function() {
//    text.style.color = 'red';
//  })
 text.addEventListener('mouseover', function() {
  text.style.color = 'red';
})  

text.addEventListener('mouseout', function() {
  text.style.color = 'black';
})  
};

function onLoad() {
  let words = text.innerHTML;
  let highlightedWords = applyHighlights(words);
  document.getElementById('textStatement').innerHTML = highlightedWords; 
};

function applyHighlights(words) {
  var res = words.replace(/hackathon|love/gi, function (x) { //global, case insensitive
    return '<mark>' + x + '</mark>'
  });
  return res; 
}
onLoad(); 
mouseMove();
