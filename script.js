
//validate form submitting data
function validateForm () {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var address = document.getElementById("address").value
    var email = document.getElementById("email").value

    if(name == ""){
        alert("name is required");
        return false;
    }

    if(age == ""){
        alert("age is required");
        return false;
    }else if(age < 1 ){
        alert('age must not be zero or less than zero')
        return false;
    }
    if(address == ""){
        alert("address is required");
        return false;
    }

    if(email == ""){
        alert("email is required");
        return false;;
    }else if (!email.includes("@")){
        alert('invalid email address');
        return false;
    }

    return true
}






//function to show data 
function showData (){
    var  peopleList;
    if(localStorage.getItem(peopleList) == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += 
        '<td> <button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">delete</button> <button onclick="updateData(' + 
        index +
        ')" class="btn btn-warning m-2">edit</button></td>';
        
        
        html += "</tr>"
    });

    document.querySelector("#crudTable tbody").innerHTML = html;

}



//load all data when document or page loaded 
    document.onload = showData();

//function to add data to local storage
function addData (){
    // if form is validate
    if(validateForm() == true){
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var address = document.getElementById('address').value;
        var email = document.getElementById('email').value;

        var  peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = []; 
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }

        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email
        })

        localStorage.setItem("peopleList", JSON.stringify(peopleList))
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
       
    }   
    console.log(showData);
}