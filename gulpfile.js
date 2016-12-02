'use strict';

var gulp = require('gulp'),
	csstime = require('../csstime-fork/index.js');

var config = {
	// Recolor svg assets
	recolorSvgComponents: {
		burger: {
			initialColor: '#FFFF00',
			targetColors: [
				{
					color: 'green',
					suffix: '--green'
				}
			]
		},
		camera: {
			initialColor: '#000000',
			targetColors: [
				{
					color: 'red',
					suffix: '--red'
				}, {
					color: '#2E6BE6',
					suffix: '--azul'
				}
			]
		}
	}
};

csstime.loadGulpTasks(gulp, config);