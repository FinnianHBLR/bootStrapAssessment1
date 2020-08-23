
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

function getXML(){
    //Users CORS API (PROXY IS API!!) website as proxy to retrice xml file.

    var proxy = 'https://cors-anywhere.herokuapp.com/';

    //Where is the xml file stored?

    var url = "https://www.nasa.gov/rss/dyn/mission_pages/kepler/news/kepler-newsandfeatures-RSS.rss";

    // XMLhttp request object to send request to server.

    var xhtml = new XMLHttpRequest();
    //Use this object to send request.

    xhtml.open("GET", proxy + url, true);
    //True = async
    
    xhtml.send();//send reuest to server where it is stored
    //Check the response from server

    xhtml.onreadystatechange = function() {
        //FROM: https://www.w3schools.com/xml/tryit.asp?filename=tryxml_app
        if(this.readyState == 4 && this.status == 200) {
            //If everyhting is ok we will now load the xml file
            
            //document.getElementById("xmlTable").innerHTML = this.responseText;
            
            var xmlDocument =  this.responseXML;
            var table ="";
        
            var x = xmlDocument.getElementsByTagName("item");
            for (i = 0; i <x.length; i++) { 
            table += "<div class=\"col-sm-4 mt-4\"><div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">" +
    
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</h5><p class=\"card-text\">" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "</p><p class=\"card-text\">Date Published: " + 
            x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue +
            "</p><a href=\"" +
            x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
            "\">Link</a></div></div></div>";
            }
            document.getElementById("xmlTable").innerHTML = table;
            /*This creates a template of 
            <div class="col-sm-4 mt-4">
                <div class="card">
                    <div class=card-body>
                    <h5 class class=card-title>TITLE</h5>
                    <p class="card-text">DESCRIPTION</p>
                    <p class="card-text">date published: + pubDate</p>
                    <a href="link">LINK</a>
                    </div>
                </div>
            </div>
            */
        }
    }    
}
    

function toggleImg() {
    var togImg = document.getElementById("imgid");

    if(togImg.style.visibility == "hidden") {
        togImg.style.visibility = "visible";
    } else {
        togImg.style.visibility = "hidden";
    }
}


function checkVowel() {
    var enteredText = document.getElementById("vowelInput").value.toUpperCase();

    if (enteredText.length == 1) {
        var vowelList = "AEIOUY";

        var position = vowelList.indexOf(enteredText)
        //This indexOf() methid returns -1 if the the substring has not occured in the other sting. 
        //IF true it will giv ethe position.
        if (position >= 0) {
            document.getElementById("vowelOutput").innerHTML = enteredText + " Is A Vowel"
        } else {
            
            document.getElementById("vowelOutput").innerHTML = enteredText + " Is NOT Vowel"

        }

    } else {
    
        outputVowels.innerHTML = "INVALID ONLY 1 CHARACTER";
    }
}

function checkGST() {
    var input = document.getElementById("gstInput").value;
    var output = document.getElementById("gstOutput");

    output.innerHTML = input*0.15;
}


function checkDate() {
    //I know this probably looks bad, but I challanged myself to put this in one line.... so here it is...
    document.getElementById("dateOutput").innerHTML = newVar = new Date(document.getElementById("dateInput").value).toDateString().substring(3);
}