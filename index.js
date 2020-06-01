const svg = document.getElementById('test'), use = svg.lastElementChild;

console.log(use.getAttributeNS(null, 'x'));
// "200"

console.log(use.getAttributeNS('http://www.w3.org/1999/xlink', 'href'));
// "#shape"

console.log(use.getAttributeNS('http://foo.io/bar', 'foo'));
// "null", why?