document.get = document.getElementById;
document.classList = document.getElementsByClassName;
document.tagList = document.getElementsByTagName;
document.classGet = function (className) {
  return document.getElementsByClassName(className)[0];
};
