
var data = [
  {
      username:"gokul",
      password:"0023"    
  },
  {
      username:"antony",
      password:"0011"
  },
  {
      username:"arun",
      password:"0014"
  },
  {
      username:"pravin",
      password:"0041"
  }
  
]
function login(){
  var uname = document.getElementById("username").value
  var pass = document.getElementById("password").value

  for (i = 0; i<data.length; i++){
      if (uname == data[i].username && pass == data[i].password){
          window.location.replace("home.html")
          return false
      }
  }
  alert("incorrect password")
}
function register(){
  var runame = document.getElementById("username").value
  var rpass = document.getElementById("password").value
  var rpass1 = document.getElementById("password1").value
  if (rpass == rpass1){
      var rdata = {
          username: runame,
          password: rpass
      }
  }else{
      alert("password doesn't match")
      return
  }
  
  for (i = 0; i<data.length; i++){
      if (runame == data[i].username){
          alert("Username not available")
          return false
      }
  }
  data.push(rdata)
  window.location.replace("home.html")
}
