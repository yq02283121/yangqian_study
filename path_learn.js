// https://www.jb51.net/article/262631.htm
//https://baijiahao.baidu.com/s?id=1775708745706137308&wfr=spider&for=pc
//路径拼接path.join()
const path4 = require('path');
let pathStr = path4.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(pathStr); // 输出: \foo\bar\baz\asdf


//获取路径名path.dirname()
const path1 = path.dirname('D:/node/02/hello.js')
console.log(path1);//打印出了目录名D:/node/02


//获取路径中 文件名path.basename()
const fpath = "/a/b/c/index.html"
const fullpath = path.basename(fpath)  // index.html
const nameWithout = path.basename(fpath,'.html') // index
console.log(fullpath)
console.log(nameWithout)

//获取路径中文件扩展名path.extname()
// 使用 path.extname() 方法，返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。
// 如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串
// 这个方法与上边的方法不同的在于提取了后缀名！
const path2='/a/b/c/index.html'
const fext = path.extname(path2)
console.log(fext) // .html

// 解析为绝对路径path.resolve(),path.resolve拼接规范的绝对路径
// path.resolve() 该方法将一些的 路径/路径段 解析为绝对路径,语法格式如下:
// path.resolve( [from…],to ) 注 ：将参数to位置的字符解析到一个绝对路径里，[from … ]为选填项，路径源；
// from : 源路径  to : 将被解析到绝对路径的字符串

path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', '/baz')   // returns '/baz'
path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home', 'foo', 'build','aaaa','aadada','../../..', 'asset') //return '/home/foo/asset'
// 从后向前，若字符以 / 开头，不会拼接到前面的路径；若以../开头，拼接前面的路径，且不含最后一节路径；
// 若连续出现多个../../..或者../..则忽略前方n(这个n代表的是出现了几个..)个..路径名进行拼接；
// 若以./开头 或者没有符号 则拼接前面路径；


//返回相对路径path.relative(from, to)
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');// 返回: '../../impl/bbb'