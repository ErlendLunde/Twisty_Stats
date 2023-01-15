const axios = require("axios");
function getData(url,callback){
    axios.get(url)
    .then((res) =>{
        callback(res)
    })
    .catch((err)=> {
        console.log(err);
  });
}

function postData(url, data){
    axios.post(url, data)
    .then((res)=> {
    return "Data Added";
    })
    .catch((err)=> {
    console.log(err);
    });

}

function deleteData(url){
    axios.delete(url)
    .then(()=>{
        return "Data deleted"
    })
    .catch((err)=> {
        console.log(err);
    });
}

function putData(url, data){
    axios.put(url, data)
    .then(()=>{
        return "Data changed";
    })
    .catch((err)=> {
        console.log(err);
    });
}

function patchData(url, data){
    axios.patch(url, data)
    .then(()=>{
        return "Data Patched"
    })    
    .catch((err)=> {
        console.log(err);
    });
}

module.exports = {
    getData,
    postData,
    deleteData,
    putData,
    patchData
}