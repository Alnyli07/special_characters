var buf = new Buffer('ali\t');
var outBuf = [];

console.log(buf[3] === 9);
outBuf.push("{TAB}");
outBuf.push('asdasd');
outBuf.push('asdasd');
outBuf.push('{LF}');

console.log(outBuf.join(''));