var albums = null;
var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var checkJson = function(){
  if (this.status !== 200) return;
  var json = JSON.parse(this.responseText);
  albums = json.albums.items;
  for (album of albums){
    console.log(album.name);
  }
  writeAlbums();
}

var writeAlbums = function(){
  var albumDiv = document.querySelector('#albums');
  for (album of albums){
    console.log(album.name);
    var albumName = document.createElement('p');
    albumName.innerText = album.name;
    albumDiv.appendChild(albumName);
  } 
}

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  makeRequest(url, checkJson);
}

window.onload = app;