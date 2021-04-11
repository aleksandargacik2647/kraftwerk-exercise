var xmlhttp = new XMLHttpRequest();
var url = "https://restcountries.eu/rest/v2/all";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "<option value=''>Choose your country</option>";
  var i;
  for (i = 0; i < arr.length; i++) {
    out += '<option value="' + arr[i].name + '">' +
      arr[i].name + '</option>';
  }
  document.getElementById("countrySelect").innerHTML = out;
}