const path = require("path")

console.log(path.basename(__filename)) //относительный путь до файла , где мы ведем разработку
//path_ref.js

console.log(path.dirname(__filename)) //папка, где файл, где мы ведем разработку
//E:\Card\nodejs\lessons\s4\refs


console.log(path.extname(__filename)) //расширение файла , где мы ведем разработку
//.js

console.log(path.parse(__filename)) //параметры файла, где мы ведем разработку , в объекте

/**{
  root: 'E:\\',
  dir: 'E:\\Card\\nodejs\\lessons\\s4\\refs',
  base: 'path_ref.js',
  ext: '.js',
  name: 'path_ref'
}
 */


console.log(path.join(__dirname,"test")) // объединяет несколько параметров в один путь
//E:\Card\nodejs\lessons\s4\refs\test


console.log(path.resolve(__dirname,'test','sec.html','fdfs'))