console.log("hello", __dirname)

console.log( __dirname)  //папка, в которой ведем разработку

console.log( __filename)  //абсолютный путь и файл, где мы ведем разработку

const { getHello } = require('./user')
const UserObj=require('./user')

console.log(UserObj.user)

console.log(getHello())