'use strict';

/**
 * @ngdoc function
 * @name calcApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the calcApp
 */
angular.module('calcApp')
  .controller('MyrouteCtrl', function () {

    var DOW =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var week = 7;
    var milliHour = 60 * 60 * 1000;
    var milliMin = 60 * 1000;
    this.calcType = "min";

    var totalTime = 40 * milliHour;// this is total time in millisecond
    var days = [];

    for (var i = 0; i < week; i++) {
      days.push({day: DOW[i], hModel: 0, mModel: 0,forH:"h"+i,forM:"m"+i});
    }

    this.days = days;

    this.calcTime = function () {
      totalTime = 40 * milliHour;

      for (var i = 0; i < week; i++) {
        totalTime -= days[i].hModel * milliHour;
        totalTime -= days[i].mModel * milliMin;
      }

      this.time = {
        hours: Math.floor(totalTime / milliHour),
        min: Math.floor((totalTime % milliHour) / milliMin)
      };
    };

    this.time = {
      hours: 40,
      min: 0
    };

    this.changeCalc = function (newVal) {

    }

  });
