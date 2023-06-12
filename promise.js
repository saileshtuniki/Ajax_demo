// Promise is a obj which contains success or failure information//
// promise obj casn be handled using then() function
// promise obj will be created server side developers//
// promise has 3 states 
// 1. pending state
// 2. success state
// 3. rejected state-- ( failure)

let ol = document.createElement('ol')
function getdata(){
    //method type -- get
    //url  https://jsonplaceholder.typicode.com/users

// let response =    fetch("https://jsonplaceholder.typicode.com/users")
//  response.then()

fetch("https://randomuser.me/api/?results=10").then(function(res){
    console.log(res.json); //data will be in binary format
    return res.json()
}).then(function (results){
    results.results.forEach(function(ele,index){
    let img = document.createElement('img')    
    let li = document.createElement('li')
    img.src = ele.picture.medium
        li.innerText = ele.name + " <------> " + ele.email + " <------> " + ele.phone
        ol.appendChild(li)
        ol.appendChild(img)
    })
document.getElementById("list1").appendChild(ol)




    // console.log(result);
//    let h2refarray = document.getElementsByTagName('h2')
//     console.log(h2refarray);
//     // h2refarray[0].innerText = "sailesh"
//     // h2refarray[1].innerText = "vamshi"

//     h2refarray[0].innerText = result[0].name
//     h2refarray[1].innerText = result[9].company.name
})

}