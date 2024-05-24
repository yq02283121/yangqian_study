//querystring模块在Node.js中用于解析和格式化URL查询字符串。它提供了parse和stringify两个主要方法。
const querystring = require('querystring');
const str = 'foo=bar&abc=xyz&abc=123';
const obj = querystring.parse(str);
console.log(obj); // { foo: 'bar', abc: ['xyz', '123'] }

const querystring = require('querystring');
const obj1 = { foo: 'bar', abc: ['xyz', '123'] };
const str1 = querystring.stringify(obj1);
console.log(str1); // 'foo=bar&abc=xyz&abc=123'

const querystring = require('querystring');
const escapedStr = querystring.escape('你好世界');
const unescapedStr = querystring.unescape(escapedStr);
console.log(escapedStr); // '%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'
console.log(unescapedStr); // '你好世界'