window.qs = function (selector) {
  return document.querySelector(selector);
};

window.qsa = function (selector) {
  return document.querySelectorAll(selector);
};

Element.prototype.qs = function (selector) {
  return this.querySelector(selector);
};

Element.prototype.qsa = function (selector) {
  return this.querySelectorAll(selector);
};

Element.prototype.ael = function (event, callback) {
  this.addEventListener(event, callback);
};

NodeList.prototype.ael = function (event, callback) {
  let i = 0, length = this.length;

  for (i; i < length; i++) {
    let el = this[i];
    el.ael(event, (e) => callback(e, el));
  }

};

NodeList.prototype.each = function (callback) {

  let i = 0, length = this.length;

  for (i; i < length; i++) callback(this[i], i);

};

Element.prototype.attr = function (name, value = undefined) {

  if (value === undefined)
    return this.getAttribute(name);

  if (value === null)
    this.removeAttribute(name);
  else
    this.setAttribute(name, value);

};

Element.prototype.hasAttr = function(name) {
  return this.hasAttribute(name);
};

Element.prototype.toggleAttr = function(name, value) {
  if (this.hasAttr(name)) {
    this.attr(name, null);
  } else {
    this.attr(name, value);
  }
};