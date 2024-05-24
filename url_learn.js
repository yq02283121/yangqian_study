// https://blog.csdn.net/MRlaochen/article/details/132582571
const { URL } = require('url');

const myUrl = new URL('https://www.example.com/path/?query=value');
console.log(myUrl);

// Output: URL {
//   href: 'https://www.example.com/path/?query=value',
//   origin: 'https://www.example.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.example.com',
//   hostname: 'www.example.com',
//   port: '',
//   pathname: '/path/',
//   search: '?query=value',
//   searchParams: URLSearchParams { 'query' => 'value' },
//   hash: ''
// }
console.log(myUrl.protocol); // return: 'https:'
console.log(myUrl.host); // return: 'www.example.com'
console.log(myUrl.pathname); // return: '/path/'
console.log(myUrl.search); // return: '?query=value'
console.log(myUrl.hash); // return: ''

myUrl.hash = 'section1';
console.log(myUrl.href); // return: 'https://www.example.com/path/?query=value#section1'

const params = new URLSearchParams('?name=Lucy&age=18');
console.log(params.has('name')); // true
console.log(params.get('age')); // 18
console.log(params.toString()); // 'name=Lucy&age=18'

params.set('gender', 'female');
console.log(params.toString()); // 'name=Lucy&age=18&gender=female'

