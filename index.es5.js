"use strict";

var events = {
  'abort': 'abort',
  'animationcancel': 'animationcancel',
  'animationend': 'animationend',
  'animationiteration': 'animationiteration',
  'animationstart': 'animationstart',
  'auxclick': 'auxclick',
  'blur': 'blur',
  'cancel': 'cancel',
  'canplay': 'canplay',
  'canplaythrough': 'canplaythrough',
  'change': 'change',
  'click': 'click',
  'close': 'close',
  'contextmenu': 'contextmenu',
  'cuechange': 'cuechange',
  'dblclick': 'dblclick',
  'drag': 'drag',
  'dragend': 'dragend',
  'dragenter': 'dragenter',
  'dragexit': 'dragexit',
  'dragleave': 'dragleave',
  'dragover': 'dragover',
  'dragstart': 'dragstart',
  'drop': 'drop',
  'durationchange': 'durationchange',
  'emptied': 'emptied',
  'ended': 'ended',
  'error': 'error',
  'focus': 'focus',
  'focusin': 'focusin',
  'focusout': 'focusout',
  'gotpointercapture': 'gotpointercapture',
  'input': 'input',
  'invalid': 'invalid',
  'keydown': 'keydown',
  'keypress': 'keypress',
  'keyup': 'keyup',
  'load': 'load',
  'loadeddata': 'loadeddata',
  'loadedmetadata': 'loadedmetadata',
  'loadstart': 'loadstart',
  'lostpointercapture': 'lostpointercapture',
  'mousedown': 'mousedown',
  'mouseenter': 'mouseenter',
  'mouseleave': 'mouseleave',
  'mousemove': 'mousemove',
  'mouseout': 'mouseout',
  'mouseover': 'mouseover',
  'mouseup': 'mouseup',
  'pause': 'pause',
  'play': 'play',
  'playing': 'playing',
  'pointercancel': 'pointercancel',
  'pointerdown': 'pointerdown',
  'pointerenter': 'pointerenter',
  'pointerleave': 'pointerleave',
  'pointermove': 'pointermove',
  'pointerout': 'pointerout',
  'pointerover': 'pointerover',
  'pointerup': 'pointerup',
  'progress': 'progress',
  'ratechange': 'ratechange',
  'reset': 'reset',
  'resize': 'resize',
  'scroll': 'scroll',
  'securitypolicyviolation': 'securitypolicyviolation',
  'seeked': 'seeked',
  'seeking': 'seeking',
  'select': 'select',
  'selectionchange': 'selectionchange',
  'selectstart': 'selectstart',
  'stalled': 'stalled',
  'submit': 'submit',
  'suspend': 'suspend',
  'timeupdate': 'timeupdate',
  'toggle': 'toggle',
  'touchcancel': 'touchcancel',
  'touchend': 'touchend',
  'touchmove': 'touchmove',
  'touchstart': 'touchstart',
  'transitioncancel': 'transitioncancel',
  'transitionend': 'transitionend',
  'transitionrun': 'transitionrun',
  'transitionstart': 'transitionstart',
  'volumechange': 'volumechange',
  'waiting': 'waiting',
  'wheel': 'wheel'
};
/**
 * typedef {{string: events}} elementEvent
 * @typedef {string} elementEvent
 * @type {events.<string, *>}
 */

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

Object.prototype.each = function (callback) {
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
 * @param {elementEvent} event
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
 * @param  event
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
  if (value === undefined) return this.getAttribute(name) === undefined ? null : this.getAttribute(name);

  if (value === null) {
    this.removeAttribute(name);
    return this;
  }

  this.setAttribute(name, value);
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

    if (value === null) {
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
 * @returns HTMLElementTagNameMap[*]
 */


Element.prototype.removeClass = function (value) {
  this.classList.remove(value);
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
    if (this.classList.contains(value)) {
      this.classList.remove(value);
      return this;
    }

    this.classList.add(value);
    return this;
  }

  if (this.classList.contains(value)) {
    this.classList.remove(value);
    this.classList.add(value2);
    return this;
  }

  this.classList.remove(value2);
  this.classList.add(value);
  return this;
};