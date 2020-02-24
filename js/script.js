console.log('working');

function disablePicker(search){
  console.log(search.value);
  if (search.value == 0) {
    $('#countries, #categories').show();
    $('#countriesOff, #categoriesOff').hide();
  } else {
    $('#countries, #categories').hide();
    $('#countriesOff, #categoriesOff').show();
  }
}

function disableSearch(picker){
  console.log(picker.value);
  if (picker.value == 0) {
    $('#search').show();
    $('#searchOff').hide();
  } else {
    $('#search').hide();
    $('#searchOff').show();
  }
}

$(document).ready(function(){

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  var cnt,cat,and,sea;


  $('.mySpinner').hide();




  document.getElementById('go').addEventListener('click', function(){
    document.getElementById('results').innerHTML = "";
    cnt = document.getElementById('countries').value;
    cat = document.getElementById('categories').value;
    sea = document.getElementById('search').value;
    if (cnt != 0 && cat != 0) {
      and = "&";
    } else {
      and = "";
    }
    if (cnt == 0 ) {
      cnt = "";
    } else {
      cnt = 'country=' + document.getElementById('countries').value;
    }
    if (cat == 0 ) {
      cat = "";
    } else {
      cat = 'category=' + document.getElementById('categories').value;
    }
    if (sea == 0) {
      sea = "";
    } else {
      sea = 'q=' + document.getElementById('search').value;
    }
    console.log(cnt);
    console.log(cat);
    console.log(and);
    console.log(sea);
    $.ajax({
      url:'http://newsapi.org/v2/top-headlines?'+cnt+''+and+''+cat+''+sea+'&apiKey=6f9585ad9b044a95bd8060af0cce9781',
      type:'GET',
      data:'json',
      // Reveal spinner when getting article information
      beforeSend : function(){
				$('.mySpinner').show();
			},
			// Once the articles have loaded, hides the spinner indicating loading
			complete : function(){
				$('.mySpinner').hide();
			},
      success: function(data){
        console.log(data);
        for (var i = 0; i < data.articles.length; i++) {

          var author;

          if (data.articles[i].author === null) {
            author = "";
          } else {
            author = "By " +  data.articles[i].author;
          }

          if (data.articles[i].urlToImage === null) {
            document.getElementById('results').innerHTML += "";
          } else {
            document.getElementById('results').innerHTML +=
            '<div class="myCard">' +
              '<div class="col">' +
                '<img class="card-img-top" alt="Artice image" src="' +  data.articles[i].urlToImage + '">' +
                  '<h2 class="myCard-title">' + data.articles[i].title + '</h2>' +
                '<div class="photoShadow"></div>' +
                '</div>' +
              '<div class="myCard-text">' +
                '<p>' + data.articles[i].description + '</p>' +
                '<h4>' + author + '</h4>' +
              '</div>' +
            '</div>';
          }



        //   document.getElementById('results').innerHTML += '<img alt="Image" src="' +  data.articles[i].urlToImage + '">' +
        // '</div>';
        }

      }
    });
  });






});
