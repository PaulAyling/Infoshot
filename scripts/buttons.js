
function setDisplay(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i=0; i < items.length; i++) {
    items[i].style.display = displayValue;
    }
}
function showActionBar() {
  var elements = document.getElementsByClassName("all-tools");
  Array.prototype.forEach.call(elements, function(el) {
    if (el.style.display === "none") {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
  });
}




function setDisplay(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i=0; i < items.length; i++) {
    items[i].style.display = displayValue;
    }
}
function showIcons() {
  var elements = document.getElementsByClassName("siteIcon");
  Array.prototype.forEach.call(elements, function(el) {
    if (el.style.display === "flex") {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
  });
}





function setDisplay(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i=0; i < items.length; i++) {
    items[i].style.display = displayValue;
    }
    }
    function showUserBar() {
    var elements = document.getElementsByClassName("userBar");
    Array.prototype.forEach.call(elements, function(el) {
    if (el.style.display === "none") {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
    });
    }




    

function setDisplay(className, displayValue) {
var items = document.getElementsByClassName(className);
for (var i=0; i < items.length; i++) {
items[i].style.display = displayValue;
}
}
function showsiteContainer() {
var elements = document.getElementsByClassName("siteContainer");
Array.prototype.forEach.call(elements, function(el) {
if (el.style.display === "none") {
  el.style.display = "flex";
} else {
  el.style.display = "none";
}
});
}







function showResponsive () {
    var elements = document.getElementsByClassName("main");
    Array.prototype.forEach.call(elements, function(el) {
      if (el.style.flexDirection === "column") {
          el.style.flexDirection = "row";
      } else {
          el.style.flexDirection = "column";
      }
    });
}







function setDisplay(className, displayValue) {
var items = document.getElementsByClassName(className);
for (var i=0; i < items.length; i++) {
items[i].style.display = displayValue;
}
}
function showsShareBox() {
var elements = document.getElementsByClassName("embed");
Array.prototype.forEach.call(elements, function(el) {
if (el.style.display === "block") {
  el.style.display = "none";
} else {
  el.style.display = "block";
}
});
}



