  function loadProvinces(){
    var provArray = ["Ontario", "British Columbia", "Quebec", "Alberta", "Saskatchewan", "Nova Scotia", "Newfoundland and Labrador", "Manitoba", "New Brunswick", "Prince Edward Island"];

var provinceOutput = "<option value=''> - Select - </option>";
    for(pIndex=0; pIndex<provArray.length; pIndex++) {
    provinceOutput += "<option name= 'cbo" + pIndex + "' value='" + provArray[pIndex] + "'>" +
    provArray[pIndex] + "</option>";

}
    document.getElementById("province").innerHTML = provinceOutput;


    }


function validateForm() {
  if(document.forms[0].elements[0].selectedIndex==0){
    alert("please select province")
    document.forms[0].elements[0].focus();
    return false;

}

else if (document.forms[0].elements[1].value==""){
  alert("please enter a name")
  document.forms[0].elements[1].style.backgroundColor='white';
  document.forms[0].elements[1].focus();
  return false;
}

else if (document.forms[0].elements[2].value==""){
  alert("please enter an e-mail")
  document.forms[0].elements[2].style.backgroundColor='white';
  document.forms[0].elements[2].focus();
  return false;
}
}
