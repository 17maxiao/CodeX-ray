

var replaceWords = document.body.innerHTML; 


var highlightedWords = replaceWords.replace(/popular|playlists|hackathon/gi, function(x) { 

return `<span class=${"tooltip"} id=${"highlight"} >
        <span class=${"tooltiptext"} id=${"myPopup"}>
        This is a string! Strings are computer's ways of representing non-numerical values,
        (like words).
        A couple examples of strings in Java are: <q>cat</q>, <q>red</q>, and <q>aslkjale</q>.
        </span>
        <mark id=${"stringMark"}> ${x} </mark> 
        </span>`
});

var boolReplacedWords = highlightedWords.replace(/Log In|sign in/i, function(x) {
    return `<span class=${"tooltip"} id=${"bool"} >
    <span class=${"tooltiptext"} id=${"boolpopup"}>
    This is a boolean! Booleans are either TRUE or FALSE - no in between. This
    site has detected that your "is logged in?" value is FALSE - and is asking you to log in.
    </span>
    <mark id=${"boolMark"}> ${x} </mark> 
    </span>`
})

var intReplacedWords = boolReplacedWords.replace(/ 24/g, function(x) {
    return `<span class=${"tooltip"} id=${"int"} >
    <span class=${"tooltiptext"} id=${"intpopup"}>
    This is an integer! Computers use integers to represent whole number numerical values
    (not fractions or decimals). A few examples of integers are 1, 20, and -2000.
    </span>
    <mark id=${"intMark"}>&nbsp;${x}</mark> 
    </span>`
})

document.body.innerHTML = intReplacedWords;



