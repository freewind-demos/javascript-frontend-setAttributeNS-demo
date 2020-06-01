const main = document.getElementById('main');

const xlinkTitle = main.getAttributeNS('http://www.w3.org/1999/xlink', 'title');
console.log('### xlinkTitle', xlinkTitle);

const xlinkAaa = main.getAttributeNS('http://www.w3.org/1999/xlink', 'aaa');
console.log('### xlinkAaa', xlinkAaa);

const xlinkAaa2 = main.getAttribute('xlink:aaa');
console.log('### xlinkAaa2', xlinkAaa2);

main.setAttributeNS('http://www.w3.org/1999/xlink', 'ccc', '333');
const xlinkCcc = main.getAttributeNS('http://www.w3.org/1999/xlink', 'ccc');
console.log('### xlinkCcc', xlinkCcc);

// show custom svg
main.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'sample.svg#Layer_1');