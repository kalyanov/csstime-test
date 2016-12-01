'use strict';

var gulp = require('gulp'),
	csstime = require('../csstime-fork/index.js');

var config = {
	useSvgSymbols: true, // custom configuration
	themedStylesFileNames: ['mobile'] // separated themes
};

csstime.loadGulpTasks(gulp, config);