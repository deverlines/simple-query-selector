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
  let i = 0,
    length = this.length;

  for (i; i < length; i++) {
    let el = this[i];
    el.ael(event, (e) => callback(e, el));
  }

};

NodeList.prototype.each = function (callback) {

  let i = 0,
    length = this.length;

  for (i; i < length; i++) callback(this[i], i);

};

Element.prototype.attr = function (name, value = undefined) {

  if (value === undefined)
    return this.getAttribute(name);

  if (value === null) {
    this.removeAttribute(name);
    return null;
  }

  this.setAttribute(name, value);
  return value;

};

Element.prototype.hasAttr = function (name) {
  return this.hasAttribute(name);
};

Element.prototype.toggleAttr = function (name, value = null, value2 = undefined) {

  if (value2 === undefined) {

    if (this.hasAttr(name)) {
      this.attr(name, null);
      return null;
    }

    if (value === null) {
      this.attr(name, name);
      return name;
    }

    this.attr(name, value);
    return value;

  }

  if (!this.hasAttr(name)) {
    this.attr(name, value);
    return value;
  } else {

    if (this.attr(name) === value) {
      this.attr(name, value2);
      return value2;
    }

    this.attr(name, value);
    return value;

  }

};

Element.prototype.addClass = function (value) {
  return this.classList.add(value);
};

Element.prototype.removeClass = function (value) {
  return this.classList.remove(value);
};

Element.prototype.hasClass = function (value) {
  return this.classList.contains(value);
};

Element.prototype.toggleClass = function (value, value2 = undefined) {

  if (value2 === undefined) {

    if (this.classList.contains(value)) {
      this.classList.remove(value);
      return null;
    }

    this.classList.add(value);
    return value;

  }

  if (this.classList.contains(value)) {
    this.classList.remove(value);
    this.classList.add(value2);
    return value2;
  }

  this.classList.remove(value2);
  this.classList.add(value);

};
