function apiCallss() {
  var see = $('#see');
  // Here we construct our URL
  var queryURL = "https://www.eventbriteapi.com/v3/events/search/?categories=115&subcategories=15006&location.address=new%20york&token=S6QQEW7L4B5Z4NSM6VOC";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    for (var i = 0; i < response.events.length; i++) {
      console.log(response.events[i].name.text);
      var html = "<div class ='card_container'>"
          html += "<div class ='title'>"
          html += response.events[i].name.text
          html += "</div>"
          html += "<div class ='description'>"
          html += response.events[i].name.description
          html += "</div>"
          html += "<div class = 'image_container'>"
          html += "<img src = "+response.events[i].logo.original.url+">"
          html += "</div>"
          html += "<div class = 'image_url'>"
          html += "<href = "+response.events[i].url+">"

          html += "</div>"
          html += "</div>"


      see.append(html)

    }
  });
}


window.onload = apiCallss;
