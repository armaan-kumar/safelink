function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const dynamicContent = getParameterByName('data');
const uri = window.location.toString();
const queryString = window.location.search;
const Urlparams = new URLSearchParams(queryString);
const hello = Urlparams.get('data');

$(document).ready(function() {
  if (dynamicContent.length >= 4) {
    document.getElementById('verify').classList.remove('hidden');
    sessionStorage.setItem('id', hello)
    var clean_uri = uri.substring(0, uri.indexOf("?data="));
    window.history.replaceState({}, document.title, clean_uri);
  }
});

var openSite = function() {
  var randIdx = Math.random() * links.length;
  randIdx = parseInt(randIdx, 10);
  var link = links[randIdx];
  var manglink = link;
  var win = window.open(manglink, '_self');
  win.focus();
  document.getElementById('verify').classList.add('hidden');
};