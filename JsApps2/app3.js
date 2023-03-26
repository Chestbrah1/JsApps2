const str = 'hello world';
const replacedStr = str
  .replace(/l/g, '1')
  .replace(/e/g, '3')
  .replace(/t/g, '7');

console.log(replacedStr);