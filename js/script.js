console.log('working');

$(document).ready(function(){

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  document.getElementById('go').addEventListener('click', function(){
    console.log(endpoints.value);
  });


  $.ajax({
    url:'http://newsapi.org/v2/top-headlines?country=us&apiKey=6f9585ad9b044a95bd8060af0cce9781',
    type:'GET',
    data:'json',
    success: function(data){
      console.log(data);
    //   document.getElementById('result').innerHTML += '<img alt="Image" src="' +  data.articles[0].urlToImage + '">' +
    // '</div>';
    }
  });



});
