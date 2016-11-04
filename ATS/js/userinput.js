//script validates search in Alberta Township System (min-max check, eleminating zeroes on the left)

var mer, error1=false, error2=false, error3=false, error4=false, error5=false, xqsec=0, xsec=0,xtwp=0, xrge=0, xwm=0, searchResult;

//validating values (QSEC, SEC, TWP, RGE, WM)
function Check() {
    
//QSEC value check
    //getting value from QSEC dropdown
    var q = document.getElementById("qsecs");
    xqsec = String(q.options[q.selectedIndex].value);
    if (xqsec=='NW' | xqsec=='NE' | xqsec=='SE' | xqsec=='SW' ){
    	error1 = false;
    } else {
    	error1 = true;
    }
//SEC value check    
    // Get the value of the input field with id="sec"
    xsec = parseInt(document.getElementById("sec").value);
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(xsec) | xsec < 1 | xsec > 36) {
        error2=true;
    } else {
    	xsec = SimplyfyTheNumber(xsec);
    	error2 = false;
    }
    
//TWP value check    
    // Get the value of the input field with id="twp"
    xtwp = parseInt(document.getElementById("twp").value);
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(xtwp) | xtwp < 1 | xtwp > 127) {
        error3=true;
    } else {
    	xtwp = SimplyfyTheNumber(xtwp);
    	error3=false;
    }
    
//RGE value check    
    // Get the value of the input field with id="rge"
    xrge = parseInt(document.getElementById("rge").value);
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(xrge) | xrge < 1 | xrge > 30) {
        error4 = true;
    } else {
    	xrge = SimplyfyTheNumber(xrge);
    	error4 = false;
    }

//WM value check
    //getting value from W.M> dropdown
    var m = document.getElementById("meridians");
    xwm = parseInt(m.options[m.selectedIndex].value);
    if (isNaN(xwm) | xwm < 4 | xwm > 6 ){
    	error5 = true
    } else {
    	error5 = false;
    }

//final validation    
    if (error1 == false && error2==false && error3==false && error4==false && error5 ==false) {
    	ResultOutput();
    } else {
    	InvalidInput();
    }
    //reseting values
    xqsec=0;
    xsec=0;
    xtwp=0;
    xrge=0;
    xwm=0;
    error1=false;
    error2=false;
    error3=false;
    error4=false;
    error5=false;
}
// End of number validation

function ResultOutput() {
//function concatinating to get proper output from widget

    var searchResult = xqsec+"-"+String(xsec)+"-"+String(xtwp)+"-"+String(xrge)+"-"+String(xwm);
    document.getElementById("output").innerHTML = searchResult;
	}

function SimplyfyTheNumber(prm){
//function eleminates zeroes on the left side
    nprm=String(prm);
    if (nprm.length>1){
    	for (i = 0; i<nprm.length; i++){
    		if (nprm.substring(i,i+1) == '0'){
    			cprm = nprm.substring(i+1,nprm.length);
    		} else {
    			return prm;
    		}
    	prm=0; nprm="";
    	return cprm;
    	}
    } else {
    	return prm;
    }        
}

function InvalidInput() {
//function shows pop-up with error message
    var alertMessage = "";
    if (error1==true){
    	alertMessage += "\nInvalid Quater Section value entered";
    } if (error2==true){
    	alertMessage += "\nInvalid Section value entered";
    } if (error3==true){
    	alertMessage += "\nInvalid Township value entered";
    } if (error4==true){
    	alertMessage += "\nInvalid Range value entered";
    }  if (error5==true){
    	alertMessage += "\nInvalid W.M. value entered";
    } 
    alert(alertMessage);
}