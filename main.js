
function mailToAddrs() {

    var firstName = document.getElementById("inputFirstName1").value;
    var lastName = document.getElementById("inputLastName2").value;
    var addressL1 = document.getElementById("inputAddressL13").value;
    var addressL2 = document.getElementById("inputAddressL24").value;
    var cityTown = document.getElementById("inputTownCity5").value;

    var gender1 = document.getElementById("maleCheckRadio6").checked;
    var gender2 = document.getElementById("femaleCheckRadio7").checked;
    var gender3 = document.getElementById("otherCheckRadio8").checked;
    
    var mobileTypeWin = document.getElementById("windowsCheck9").checked;
    var mobileTypeApp = document.getElementById("appleCheck10").checked;
    var mobileTypeAnd = document.getElementById("andriodCheck11").checked;
    var mobileTypeOth = document.getElementById("othercheck12").checked;

    //uses an index to get the selected value https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    var mobileProvider = document.getElementById("inlineFormMobile");
    var strUser = mobileProvider.options[mobileProvider.selectedIndex].text;


    var forStudy = document.getElementById("textArea13").value;

    var subject = "Finnian LR Assessment Mail"
    //Referenced from here

    window.location.href = "mailto:" + "daniel.dang.nz@gmail.com" + "?subject=" + subject + "&body=" + "Here is your Data!" + "%0A" + "•" + "First Name: "
     + firstName + "%0A" + "•" + "Last Name: " + lastName + "%0A" + "•" +"Address Line 1: " + addressL1 + "%0A" + "•" + "Address Line 2: " + addressL2 
     + "%0A" + "•" + "City/Town: "+ cityTown + "%0A" + "•" + "Male: " + gender1 + "%0A" + "•" + "Female: " + 
     gender2 + "%0A" + "•" + "Other: " + gender3 + "%0A" + "•" + "Windows Phone: "+ mobileTypeWin + "%0A" + "•" + "Apple Phone: " + mobileTypeApp + "%0A" +
     "•" + "Andriod Phone: " + mobileTypeAnd + "%0A" + "•" + "Other Phone: " + mobileTypeOth + "%0A" + "•" + "Mobile Provider: " + strUser + "%0A" 
     + "•" + "Using Your Phone For Study: " + forStudy;

}

function resetMail(){


}
