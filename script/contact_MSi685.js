function validate(form){
    let validName = validateName(form);
    let validNumber = validateNumber(form);
    let validSubject = validateSubject(form);
    let validQuery = validateQuery(form);
    let valid = validName  && validNumber && validSubject && validQuery;
    return valid;

}

function validateName(form){
    let data = document.getElementById("name");
    if(data.validity.valueMissing){
        data.setCustomValidity("Please enter your name!!!");
        return false;
    }
    else{
        data.setCustomValidity("");
        return true;
    }
}



function validateNumber(form){
    let data2 = document.getElementById("phonenumber");
if(data2.validity.valueMissing){
    data2.setCustomValidity("Please enter your phone number!!!");
    return false;
}
    else if(data2.validity.patternMismatch){
        data2.setCustomValidity("Phone Number should be +1 followed by 10 digits...");
        return false;
    }
    else{
        data2.setCustomValidity("");
        return true;
    }
}

function validateSubject(form){
    let sub = form.elements["subject"];
    if(sub.value == ""){
        sub.setCustomValidity("Please select your subject/reason from the list...");
        return false;
    }
    else{
        subject.setCustomValidity("");
        return true;
    }
}

function validateQuery(form){
    let data3 = document.getElementById("query");
    if(data3.validity.valueMissing){
        data3.setCustomValidity("Please explain your reason for contacting us...");
        return false;
    }
    else{
     data3.setCustomValidity("");
     return true;
    }
}



function displayvalues(form){
    if(validate(form)){
        let v1 = document.getElementById("name").value;
        let v2 = form.elements["subject"].value;
        let v3 = document.getElementById("phonenumber").value;
        let v4 = document.getElementById("query").value;

        let target = document.getElementById("outputvalues");
        let result = "<strong>Following details were received by us:</strong></br></br>" +
                     "Customer Name: " + v1 + "</br>" + 
                      
                     "PhoneNumber: " + v3 + "</br>" + 
                     "Subject: " +   v2  + "</br>" + 
                     "Explanation: " + v4 + "</br></br>" +
                    "<strong>We will reply back shortly😊</strong></br>"+
                     "<input type='button' value='Submit Another Form' onclick='location.reload()' id='submitAnother'>";
        
        target.innerHTML = result;
        target.style.border = "4px solid crimson";
        target.style.width = "fit-content";
        target.style.margin = "0 auto";
        target.style.borderRadius= "22px";
        form.reset();
        return false;
    }
}