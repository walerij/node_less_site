const fs = require("fs")

const path = require('path') //подключим путь

// File System - fs


/** создание папки */
/* fs.mkdir(path.join(__dirname,"notes"),(err) =>{
    if(err) throw new Error(err)

    console.log("папка создана")
}) */

/**Создание файла */
/* fs.writeFile(path.join(__dirname,"notes","my.txt"),'Hello world ',(err)=>{
    if(err) throw err

    console.log("file created")

    //добавление записи
    fs.appendFile(path.join(__dirname,"notes","my.txt"),'Hello Walera',(err)=>{
        if(err) throw err
    
        console.log("note append")
            }
        )
}) */

//чтение из файла
/* fs.readFile(path.join(__dirname,"notes","my.txt"),(err, data)=>{
    if(err) throw err

    console.log(Buffer.from(data).toString())
}) */


fs.rename(
    path.join(__dirname,"notes","my.txt"),
    path.join(__dirname,"notes","notes.txt"),

    (err)=>{
        if(err) throw err
    
        console.log("renamed")
            }


)