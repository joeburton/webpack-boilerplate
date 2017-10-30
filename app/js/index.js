window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

import '../css/index.scss'

console.log("hello world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
