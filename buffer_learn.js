//Buffer 对象类似于数组，但它存储的是原始的二进制数据。它可以分配固定大小的内存块来存储数据，从而避免了频繁的内存分配和垃圾回收，这在处理大量数据时非常有用。
//我们可以把 Buffer 看成是一个整数数组，这个数组对应着 V8 堆内存中的一段。Node 使用 Buffer 来显示二进制数据，比如图像、文件等。

// 常用的 Buffer 操作方法包括：

// buffer.length：获取 Buffer 的长度（字节数）。
// buffer.write(string[, offset[, length]][, encoding])：将字符串写入 Buffer。
// buffer.toString([encoding[, start[, end]]])：将 Buffer 转换为字符串。
// buffer.slice([start[, end]])：截取 Buffer 的一部分。
// Buffer.concat(list[, totalLength])：将多个 Buffer 拼接成一个。



//创建buffer,可以使用多种方式创建 Buffer 对象，其中最常用的是使用构造函数来分配指定大小的内存块：
const buf = Buffer.alloc(10);// 创建一个大小为 10 字节的 Buffer
const bufferFromData = Buffer.from("Hello,node.js")  // 从字符串创建 Buffer

//操作buffer,一旦创建了 Buffer 对象，你可以通过索引访问其中的数据，也可以使用各种方法来修改、拼接和截取数据。
buf.write('hello')  //可以使用 write() 方法向 Buffer 写入数据:
console.log(buf.toString())

const buf1 = Buffer.from("hello world")  //可以使用方法如 toString() 将 Buffer 转换为字符串，或者使用 slice() 方法提取其中的一段。
console.log(buf1.toString())
console.log(buf1.slice(0, 5).toString())

const buf2 =Buffer.from([0x1, 0x2, 0x3]) //可以使用 toJSON() 方法将 Buffer 转换为 JSON 对象
const json1 = buf2.toJSON()
console.log(json1)


// 在处理网络流和文件时，Buffer 可以帮助你高效地读取和写入数据。
// 当从文件或网络中读取数据时，注意控制读取的缓冲区大小，以避免一次性读取过多数据导致内存溢出。
// Buffer 的默认编码是 utf-8，但是在某些情况下你可能需要指定其他编码。
// 虽然 Buffer 可以直接操作内存，但要小心避免访问超出分配范围的内存区域，以防止安全问题。



