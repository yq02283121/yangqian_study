//https://www.nodeapp.cn/assert.html
// 为了提高代码的可靠性，我们经常会利用断言工具来进行代码校验。Node.js 内建的断言库，即 assert 模块，充当了自动化测试和异常检测中的关键角色。
// 断言是指一种预期表达式应始终为真的测试方法。如果遇到断言为假的情况，就会引发错误，这有助于开发者迅速识别问题所在。使用 assert 模块的技术要领
// 要在您的项目中使用 assert 功能，首先需要将其引入您的脚本：
// const assert = require('assert');
// assert.ok(value, [message]): 要求 value 为真。如果为假，将抛出一个附有 message 的错误。
// assert.strictEqual(actual, expected, [message]): 验证 actual 和 expected 的值是否严格相等，不进行类型转换。
// assert.deepEqual(actual, expected, [message]): 验证 actual 和 expected 是否在值上相等，即使它们是不同类型的数据，也会尝试类型转换。
// assert.throws(block, [error], [message]): 验证 block 函数是否会引发错误，并可以指定期待错误类型的 error 。
// assert.doesNotThrow(block, [error], [message]): 验证 block 函数是否不会引发错误。
// 设想我们维护一个处理 GET 请求的简易 Node.js 服务器，它会返回一条问候消息。为确保服务器运转正常，我们利用 assert 模块来制定测试案例。

// 在创建 server.js 模块并编写所需代码后，我们可以使用以下的测试用例来确认服务器响应：

const assert = require('assert');
const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello, Node.js assert!');
});
 
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
 
// 测试用例
assert.ok(server !== undefined, 'Server should be defined');
assert.strictEqual(2 + 2, 4, '2 + 2 should be equal to 4');
 
console.log('All tests passed');


// Cannot find module 'express' 这个错误表示 Node.js 运行时无法找到名为 'express' 的模块。
// 通常是因为你的项目中没有安装 'express' 模块，或者 'node_modules' 文件夹被删除或损坏。

// 解决方法：确认你的项目目录中是否有 package.json 文件。如果没有，你需要初始化一个 npm 项目：

// npm init -y

// 在项目根目录打开终端，运行以下命令来安装 'express' 模块：

// npm install express