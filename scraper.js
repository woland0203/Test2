var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .open('https://nana34weere.blogspot.com/')
  .text()
  .log();
