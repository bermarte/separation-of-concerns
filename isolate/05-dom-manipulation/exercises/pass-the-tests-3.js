'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---

const tr_1 = divEl.children[0].children[0].children[0];
const td_1 = document.createElement('td');
td_1.innerHTML = 'a';
tr_1.appendChild(td_1);

const td_2 = document.createElement('td');
td_2.innerHTML = 'b';
tr_1.appendChild(td_2);

const tr_2 = divEl.children[0].children[0].children[1];
const td_3 = document.createElement('td');
td_3.innerHTML = 'c';
tr_2.appendChild(td_3);

const td_4 = document.createElement('td');
td_4.innerHTML = 'd';
tr_2.appendChild(td_4);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
