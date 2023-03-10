const express = require('express');
const path = require('path')
const { nextTick } = require('process');
const methodOverride = require('method-override');

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))