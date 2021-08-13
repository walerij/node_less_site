const http = require('http')

const fs = require('fs')
const path = require('path')
const { RSA_NO_PADDING } = require('constants')

const server = http.createServer((req, res)=>{
  if(req.method==='GET')
  {
    res.writeHead(200,{
      'Content-type':'text/html; charset=utf-8'
    })

    if (req.url==="/")
    {
      console.log(path.join(__dirname,'views','index.html'))
      fs.readFile(
        path.join(__dirname,'views','index.html'),
        'utf-8',
        (err, content)=>{
          if(err) {throw err}
          res.end(content)
        }
        )
    }
    else if (req.url==='/about') {
      fs.readFile(
        path.join(__dirname,'views','about.html'),
        'utf-8',
        (err, content)=>{
          if(err) throw err
          res.end(content)
        }
        )
    }
    else  if(req.url==="/api/users")
    {
      res.writeHead(200,{'Content-Type':'text/json'})
      let users=[
        {name:"Valera", age:41},
        {name:"Irina", age:35}
      ]
      res.end(JSON.stringify(users))
    }
   
  }
  else if(req.method==="POST")
  {
    let body =[]
    res.writeHead(
      200,{'Content-type':'text/html; charset=utf-8'
      })
    req.on('data',data=>{
      body.push(Buffer.from(data))
    })
    req.on('end',()=>{
    
     const message=body.toString().split('=')[1]
     res.end(`<h2>Ваше сообщение: ${message}</h2>`)
    })
    
  }

})

server.listen(3000, ()=>{
    console.log('server started')
})