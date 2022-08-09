// https://developer.mozilla.org/de/docs/Web/API/Document
//Verschiedene Methoden des Document Objektes

let doc = document
console.log("cum")
console.log(document);
console.log(document.all);
console.log(document.head);
console.log(document.body);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);
console.log(document.links);
//console.log(document.links[0].classList);
//console.log(document.links[0].className);
console.log(document.images);
console.log(document.scripts);
let scripts = document.scripts
let scriptsArray = Array.from(scripts)
scriptsArray.forEach(function (script, index){
    console.log(index + script.getAttribute('src'))
})
