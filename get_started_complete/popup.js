// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {

  let color = element.target.value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    chrome.tabs.insertCSS(
      tabs[0].id,
      {
      file: "highlight.css"
    });

    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "highlight.js"
    });

    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 
        `var div=document.createElement("div");
        document.body.appendChild(div);
        div.innerText='test123';
        document.body.style.backgroundColor = \"orange\"`
  });
    
})

};


