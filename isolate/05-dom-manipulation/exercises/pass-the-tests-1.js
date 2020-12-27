'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
//  insert something before the <section>
//  remove the <h1>
//  append something to the end


//replace the <p> with <nav>
const pEl = divEl.children[0];
const navEl = document.createElement('nav');
divEl.replaceChild(navEl, pEl);

//insert <h2> before <section>
const sectionEl = divEl.children[1];
const h2El = document.createElement('h2');
divEl.insertBefore(h2El, sectionEl);

//remove <h1>
const h1RemEl = divEl.children[3];
divEl.removeChild(h1RemEl);

//append <p>
const pEndEl = document.createElement('p');
divEl.appendChild(pEndEl);


// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4,
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2',
  'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P',
  'Test: 4th child');
