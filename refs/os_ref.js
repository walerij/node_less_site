const os = require("os")

//платформа
// win32
console.log(os.platform())

//архитектура
// x64
console.log(os.arch())

//Информация о процессорах
// 
//console.log(os.cpus())

//свободная память
// 13579988992
console.log(os.freemem())

//всего памяти
//17179004928
console.log(os.totalmem())

//корневая (домашняя) директория
//C:\Users\Валера
console.log(os.homedir())

//Сколько система работает
//43411
console.log(os.uptime())

