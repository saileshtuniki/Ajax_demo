//1. Create an Object of XMLHttpRequest --> JavaSCript
//2. prepare the request
//3. send request
//4.

// 2. open the portal of communication b/w client and the server
// 3. establish the connection with the server
// 4. check for readyState & status
// 5. send the request

function getuserdata(){
    let nameref = document.getElementById("name")
    let cityref = document.getElementById("city")
    let namecitydisplay = document.getElementById("namecityref")
    let userdata;
        // logic to send the request to server and get response//

    // Step 1 - Create an Object of XMLHttpRequest --> JavaSCript
    let xhrobj = new XMLHttpRequest()
    // console.log(xhr);

    //Prepare the request
    xhrobj.open('get','https://jsonplaceholder.typicode.com/users') //server side people gives the info

    // send the request
    xhrobj.send()

    //For handling the success response
    xhrobj.onload = function(){



        // property responseText returns the text received from a server following a request being sent.
        userdata = xhrobj.responseText
        //JSON.parse is a pre-defined func which converts the stringified data into array format
        userdata = JSON.parse(userdata)
        namecitydisplay.style.display = "block"
        nameref.innerText = "User name :" + userdata[0].name
        nameref.style.color = "orange"
        cityref.innerText = "City :" + userdata[0].address.city
        console.log(userdata)
    }

    // handling failure response
    xhrobj.onerror = function () {
        alert("Error while gettion the data")
    }

}
