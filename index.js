const autoprefixer = require('autoprefixer')
const sugarss = require('sugarss')
const sorting = require('postcss-sorting')
const cssortie = require('cssortie')
const size = require('postcss-size')
const extend = require('postcss-extend')
const reset = require('postcss-css-reset')
const postcssImport = require('postcss-import')
const coloralpha = require('postcss-color-alpha')
const propertylookup = require('postcss-property-lookup')
const nested = require('postcss-nested')

exports.autoprefixer = autoprefixer
exports.sugarss = sugarss
exports.sorting = sorting
exports.cssortie = cssortie
exports.size = size
exports.extend = extend
exports.reset = reset
exports.import = postcssImport
exports.coloralpha = exports.colorAlpha = coloralpha
exports.propertylookup = exports.propertyLookup = propertylookup
exports.nested = nested

exports.preset = [
  postcssImport,
  coloralpha,
  extend,
  size,
  reset,
  propertylookup,
  autoprefixer,
  nested,
  sorting({ 'sort-order': cssortie })
]
