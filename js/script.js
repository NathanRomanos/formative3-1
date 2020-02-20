console.log('working');

$(document).ready(function(){

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  document.getElementById('go').addEventListener('click', function(){
    var endpoint = document.getElementById('endpoints').value;
    console.log(endpoint);
    $.ajax({
      url:'http://newsapi.org/v2/top-headlines?country='+endpoint+'&apiKey=6f9585ad9b044a95bd8060af0cce9781',
      type:'GET',
      data:'json',
      success: function(data){
        console.log(data);
        for (var i = 0; i < data.articles.length; i++) {

          var author;

          if (data.articles[i].author === null) {
            author = "";
          } else {
            author = "By " +  data.articles[i].author;
          }

          document.getElementById('results').innerHTML +=
          '<div class="myCard">' +
            '<div class="myCard-photoContainer">' +
              '<div class="myCard-photo" style="background-image: url('+data.articles[i].urlToImage+')">' + '</div>' +
                '<h2 class="myCard-title">' + data.articles[i].title + '</h2>' +
              '<div class="photoShadow"></div>' +
              '</div>' +
            '<div class="myCard-text">' +
              '<p>' + data.articles[i].description + '</p>' +
              '<h4>' + author + '</h4>' +
            '</div>' +
          '</div>';

        //   document.getElementById('results').innerHTML += '<img alt="Image" src="' +  data.articles[i].urlToImage + '">' +
        // '</div>';
        }

      }
    });
  });






});
