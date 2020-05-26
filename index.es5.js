"use strict";

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
  var i = 0,
    length = this.length;

  for (i; i < length; i++) {
    var element = this[i];

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


window.each = function (object, callback) {
  var key, value;

  for (key in object) {
    if (!object.hasOwnProperty(key)) continue;
    value = object[key];

    if (callback(value, key) === true) {
      break;
    }
  }
};
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


window.ael = function (event, callback) {
  document.addEventListener(event, callback);
};
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
  this.each(function (element, i) {
    element.ael(event, function (event) {
      return callback(event, element, i);
    });
  });
  return this;
};
/**
 *
 * @param {string} name
 * @param {string|null} value
 * @returns {string|<HTMLElementTagNameMap[*]>|null}
 */


Element.prototype.attr = function (name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (value === undefined) {
    var _value = this.getAttribute(name);

    return _value === undefined ? null : _value;
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


NodeList.prototype.attr = function (name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var result = [];
  this.each(function (element, i) {
    result.push(element.attr(name, value));
  });
  if (value === undefined) return result;
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


Element.prototype.toggleAttr = function (name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var value2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

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
  this.each(function (element, i) {
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
  this.each(function (element, i) {
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


Element.prototype.toggleClass = function (value) {
  var value2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

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