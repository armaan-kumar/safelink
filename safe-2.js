$(document).ready(function() {
  var getlink = $("#getLink"),
    gotolink = $("#gotolink"),
    timer = $('#timer');
  var version = sessionStorage.getItem('id')

  if (version != null) {
    timer.pietimer({
      timerSeconds: 17,
      color: '#3f51b5',
      fill: false,
      showPercentage: true,
      callback: function() {
        getlink.prop('disabled', false);
        getlink.removeClass('hidden');
        gotolink.removeClass('hidden');
        timer.addClass('hidden');
      }
    });

    setTimeout(function() {
      document.getElementById('ad-top').classList.remove('hidden');
    });

    setTimeout(function() {
      document.getElementById('pop-button').classList.remove('hidden');
    }, 17000);

    setTimeout(function() {
      document.getElementById('stickyadin1').style.display = "none";
    }, 17000);

    setTimeout(function() {
      document.getElementById('ad-below').classList.remove('hidden');
    });
  }

  var queryString = window.location.search;
  var Urlparams = new URLSearchParams(queryString);
  var link = Urlparams.get('token');

  gotolink.on("click", function() {
    var fucklink = fastlink + buss;
    $("#pop-button").addClass('hidden');
    window.location.replace(fucklink);
    sessionStorage.removeItem('id');
  });

  fuckAdBlock.on(true, function() {
    $("#adbs").html("Adblock Detected");
    $("#adb").removeClass('hidden');
  }).on(false, function() {});

});


var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function(e) {
    var t = "";
    var n, r, i, s, o, u, a;
    var f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = (n & 3) << 4 | r >> 4;
      u = (r & 15) << 2 | i >> 6;
      a = i & 63;
      if (isNaN(r)) {
        u = a = 64
      } else if (isNaN(i)) {
        a = 64
      }
      t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
    }
    return t
  },
  decode: function(e) {
    var t = "";
    var n, r, i;
    var s, o, u, a;
    var f = 0;
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = s << 2 | o >> 4;
      r = (o & 15) << 4 | u >> 2;
      i = (u & 3) << 6 | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
        t = t + String.fromCharCode(r)
      }
      if (a != 64) {
        t = t + String.fromCharCode(i)
      }
    }
    t = Base64._utf8_decode(t);
    return t
  },
  _utf8_encode: function(e) {
    e = e.replace(/\r\n/g, "\n");
    var t = "";
    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r)
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode(r >> 6 | 192);
        t += String.fromCharCode(r & 63 | 128)
      } else {
        t += String.fromCharCode(r >> 12 | 224);
        t += String.fromCharCode(r >> 6 & 63 | 128);
        t += String.fromCharCode(r & 63 | 128)
      }
    }
    return t
  },
  _utf8_decode: function(e) {
    var t = "";
    var n = 0;
    var r = c1 = c2 = 0;
    while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
        n++
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
        n += 2
      } else {
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        n += 3
      }
    }
    return t
  }
};

var buss = sessionStorage.getItem('id')
var fastlink = Base64.decode(buss);
console.log(fastlink);

function remove() {
  sessionStorage.removeItem('id')
};