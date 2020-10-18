

let replaceWords = document.body.innerHTML; 
let highlightedWords = replaceWords.replace(/hackathon|love/gi, function(x) { 

return `<span class=${"tooltip"} id=${"highlight"} >
        <span class=${"tooltiptext"} id=${"myPopup"}>
        This is a string! Strings are computer's ways of representing non-numerical values,
        (like words).
        A couple examples of strings in Java are: <q>cat</q>, <q>red</q>, and <q>aslkjale</q>.
        </span>
        <mark> ${x} </mark> 
        </span>`
}); 
document.body.innerHTML = highlightedWords;



