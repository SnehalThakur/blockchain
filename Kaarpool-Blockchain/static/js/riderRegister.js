function riderSignupFunction(){
    var name = document.getElementById("name").value;
    var contactNo = document.getElementById("contactNo").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var e = document.getElementById("gender");
    var value = e.value;
    var gender = e.options[e.selectedIndex].text;
    console.log("name: -",name)
    if(name == "" ||contactNo == "" || password == "" || value == 0 || email == ""){
        alert("please fill all fields");
    }
    else{
        let payload = {
           "name":name,
           "contactNo":contactNo,
           "password":password,
           "gender":gender,
           "email":email
        }
        console.log("payload: - ",payload);
        // const userAction = async () => {
        //     const response = await fetch('http://example.com/movies.json', {
        //       method: 'POST',
        //       body: payload, // string or object
        //       headers: {
        //         'Content-Type': 'application/json'
        //       }
        //     });
        //     const myJson = await response.json(); //extract JSON from the http response
        //     // do something with myJson
        //     if(myJson.status){
        //         window.location.href = "./page1.html";
        //       }
        //       else{
        //           alert("Your password or username is wrong");
        //       }
        //   }
        console.log("JSON.stringify(payload): - ",JSON.stringify(payload));
        var payloadString = JSON.stringify(payload);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
        };
        xhttp.open("POST", "/riderRegister", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(payloadString);
        console.log("Event fire");
    }
}