// https://blog.csdn.net/lxllxl211/article/details/129898033
// Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架.

// 创建一个基本的express web服务器

const express1=require("express")
const app = express1();
// app.listen(80,()=>{
//     console.log("express sever running at http://127.0.0.1:80");
// })

//监听get请求
app.get('/get', function (req, res) {
    console.log('客户端发起了get请求！');
    console.log("res.url:" + res.url);

    // 注意：不能同时写2个send，会报错！
    // req.send('李旭亮');
    // 也可以给客户端响应一个对象，例如：
    res.send({ name: 'lxl', age: 23, address: '河南省' })
});

// 参数1：客户端请求的url地址
// 参数2：请求对应的处理函数
// req：请求对象（包含了与请求相关的属性和方法）
// res：响应对象（包含了与响应相关的属性和方法）
