var request= XMLHttpRequest();
request.open("Get", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);
    console.log("Hello");
}
