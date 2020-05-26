/**
 * @callback aelCallback
 * @param {Event} event
 */

/**
 * @callback eachCallback
 * @param HTMLElementTagNameMap[*] element
 * @param {int} i
 */

/**
 * @callback eachObjectCallback
 * @param value
 * @param key
 */


/**
 *
 * @callback elementAelCallback
 * @param {Event} event
 */

/**
 *
 */

/**
 *
 * @param {eachCallback} callback
 * @returns {Object}
 */
NodeList.prototype.each = function (callback) {

  let i = 0,
    length = this.length;

  for (i; i < length; i++) {

    let element = this[i];

    if (callback(element, i) === true) {
      break;
    }

  }

  return this;

};

/**
 *
 * @param {Object} object
 * @param {eachObjectCallback} callback
 */
window.each = function(object, callback) {

  let key, value;

  for (key in object) {

    if (!object.hasOwnProperty(key))
      continue;

    value = object[key];

    if (callback(value, key) === true) {
      break;
    }

  }

}

/**
 *
 * @param {string} selector
 * @returns HTMLElementTagNameMap[*]
 */
window.qs = function (selector) {
  return document.querySelector(selector);
};

/**
 *
 * @param {string} selector
 * @returns {NodeListOf<HTMLElementTagNameMap[*]>}
 */
window.qsa = function (selector) {
  return document.querySelectorAll(selector);
};

/**
 *
 * @param {GlobalEventHandlersEventMap.} event
 * @param {aelCallback} callback
 */
window.ael = function(event, callback) {
  document.addEventListener(event, callback);
}

/**
 *
 * @param {string} selector
 * @returns HTMLElementTagNameMap[*]
 */
Element.prototype.qs = function (selector) {
  return this.querySelector(selector);
};

/**
 *
 * @param {string} selector
 * @returns {NodeListOf<HTMLElementTagNameMap[*]>}
 */
Element.prototype.qsa = function (selector) {
  return this.querySelectorAll(selector);
};

/**
 *
 * @param {string} event
 * @param {elementAelCallback} callback
 * @returns HTMLElementTagNameMap[*]
 */
Element.prototype.ael = function (event, callback) {
  this.addEventListener(event, callback);
  return this;
};

/**
 *
 * @callback nodeListAelCallback
 * @param  event
 * @param HTMLElementTagNameMap[*] element
 * @param {int} i
 */

/**
 *
 * @param {string} event
 * @param {nodeListAelCallback} callback
 * @returns NodeList
 */

NodeList.prototype.ael = function (event, callback) {

  this.each((element, i) => {
    element.ael(event, (event) => callback(event, element, i))
  });

  return this;

};

/**
 *
 * @param {string} name
 * @param {string|null} value
 * @returns {string|<HTMLElementTagNameMap[*]>|null}
 */
Element.prototype.attr = function (name, value = undefined) {

  if (value === undefined) {
    let value = this.getAttribute(name);
    return value === undefined ? null : value;
  }

  if (value == null) {
    this.removeAttribute(name);
    return this;
  }

  this.setAttribute(name, value);
  return this;

};

/**
 *
 * @param {string} name
 * @param {string|null} value
 * @returns {NodeList|Array}
 */
NodeList.prototype.attr = function (name, value = undefined) {

  let result = [];

  this.each((element) => {
    result.push(element.attr(name, value));
  });

  if (value === undefined)
    return result;

  return this;

};

/**
 *
 * @param {string} name
 * @returns {boolean}
 */
Element.prototype.hasAttr = function (name) {
  return this.hasAttribute(name);
};

/**
 *
 * @param {string} name
 * @param {string|null} value
 * @param {string} value2
 * @returns {string|null}
 */
Element.prototype.toggleAttr = function (name, value = null, value2 = undefined) {

  if (value2 === undefined) {

    if (this.hasAttr(name)) {
      this.attr(name, null);
      return this;
    }

    if (value == null) {
      this.attr(name, name);
      return this;
    }

    this.attr(name, value);
    return this;

  }

  if (!this.hasAttr(name)) {
    this.attr(name, value);
    return this;
  }

  if (this.attr(name) === value) {
    this.attr(name, value2);
    return this;
  }

  this.attr(name, value);
  return this;

};

/**
 *
 * @param {string} value
 * @returns HTMLElementTagNameMap[*]
 */
Element.prototype.addClass = function (value) {
  this.classList.add(value);
  return this;
};

/**
 *
 * @param {string} value
 * @returns NodeList
 */
NodeList.prototype.addClass = function (value) {

  this.each((element) => {
    element.addClass(value);
  });

  return this;

};

/**
 *
 * @param {string} value
 * @returns HTMLElementTagNameMap[*]
 */
Element.prototype.removeClass = function (value) {
  this.classList.remove(value);
  return this;
};

/**
 *
 * @param {string} value
 * @returns NodeList
 */
NodeList.prototype.removeClass = function (value) {

  this.each((element) => {
    element.removeClass(value);
  });

  return this;

};

/**
 *
 * @param {string} value
 * @returns HTMLElementTagNameMap[*]
 */
Element.prototype.hasClass = function (value) {
  this.classList.contains(value);
  return this;
};

/**
 *
 * @param {string} value
 * @param {string} value2
 * @returns HTMLElementTagNameMap[*]
 */
Element.prototype.toggleClass = function (value, value2 = undefined) {

  if (value2 === undefined) {

    if (this.hasClass(value)) {
      this.removeClass(value);
      return this;
    }

    this.addClass(value);
    return this;

  }

  if (this.classList.contains(value)) {
    this.removeClass(value);
    this.addClass(value2);
    return this;
  }

  this.removeClass(value2);
  this.addClass(value);
  return this;

};
