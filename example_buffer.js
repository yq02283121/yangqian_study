const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 读取data.txt文件
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    if (err) throw err;
    
    // 设置HTTP头信息
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // 直接将data Buffer写入响应
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log('Server listening on port 8000'); 
});

// 要测试这个例子，你需要将上述代码保存为 example.js，在同一目录下创建 data.txt 文件，内容为"Hello, Node.js Buffer!"，最后执行node server.js。
// 打开浏览器访问:http://localhost:8000，你应该可以看到"Hello, Node.js Buffer!"被输出。

// 这样就利用 Buffer 从文件读取内容，并直接写入 HTTP 响应中。Buffer 允许我们操作底层数据，避免多余的拷贝
