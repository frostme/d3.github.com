// https://d3js.org/d3-fetch/ Version 0.0.1. Copyright 2016 Mike Bostock.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dsv')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-dsv'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, (function (exports,d3Dsv) { 'use strict';

function responseText(response) {
  return response.text();
}

var text = function(url) {
  return fetch(url).then(responseText);
};

var json = function(url) {
  return text(url).then(function(response) {
    return JSON.parse(response);
  });
};

var csv = function(url, row) {
  return text(url).then(function(response) {
    return d3Dsv.csvParse(response, row);
  });
};

var tsv = function(url, row) {
  return text(url).then(function(response) {
    return d3Dsv.tsvParse(response, row);
  });
};

exports.json = json;
exports.text = text;
exports.csv = csv;
exports.tsv = tsv;

Object.defineProperty(exports, '__esModule', { value: true });

})));
