var sonnet = document.getElementById('sonnet').innerHTML;

console.log(sonnet);

// Finding starting postion of the word orphans
var n = sonnet.indexOf('orphans');
console.log('starting pos of orhpan:', n);

// The length of the entire sonnet
var total = sonnet.length;
console.log('sonnet length', total);

// Replace Winter with Yuletide
var newString = sonnet.replace('winter', 'yuletide');
console.log(newString);

// Replace all instances of the word the with a large
var replaceThe = sonnet.replace(/the /gi, 'a large ');
console.log(replaceThe);

// Change the html to reflect the changes made
document.getElementById('sonnet').innerHTML = replaceThe;
