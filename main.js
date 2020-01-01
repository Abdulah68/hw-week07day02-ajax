let res = {};

let baseURL = "https://api.imgflip.com/get_memes"

function getMem(){
axios.get(baseURL).then(function(result){

res = result.data
  console.log(res)

 res.data.memes.forEach(element => { 

 document.getElementById("outputmems").innerHTML +=` <img src= ${element.url} width=${element.width} height=${element.height} ><h2>${element.name}</h2>  <br>`

});
})


}