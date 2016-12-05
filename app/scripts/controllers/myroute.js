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

    ////////////////////////////////Variables///////////////////////////////////////////
    var DOW =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var week = 7;
    var milliHour = 60 * 60 * 1000;
    var milliMin = 60 * 1000;
    var totalTime = 40 * milliHour;// this is total time in millisecond
    var days = [];

    this.calcType = "min";
    this.btnActive = {decimal:"",min:"active"};
    ///////////////////////////////////////////////////////////////////////////////////

    /**
     * this will populate the view using the ng-repeat directive
     */
    for (var i = 0; i < week; i++) {
      days.push({day: DOW[i], hModel: 0, mModel: 0, dModel: 0});
    }

    this.days = days;

    /**
     * calculate time based on calcType.
     */
    this.calcTime = function () {

      if(this.calcType === 'min'){
        totalTime = 40 * milliHour;

        for (var i = 0; i < week; i++) {
          totalTime -= days[i].hModel * milliHour;
          totalTime -= days[i].mModel * milliMin;
        }

        this.time = {
          hours: Math.floor(totalTime / milliHour),
          min: Math.floor((totalTime % milliHour) / milliMin)
        };
      } else if (this.calcType === 'decimal'){
        totalTime = 40;
        for (var d = 0; d < week; d++) {
          totalTime -= days[d].dModel;
        }
        this.time = {
          decimal:totalTime
        };
      }


    };

    this.time = {
      hours: 40,
      min: 0,
      decimal:40
    };

    /**
     * change the calculation method and then recalculate
     * @param newVal new calcType to use
     */
    this.changeCalc = function (newVal) {
      this.calcType = newVal;
      this.calcTime();

      //set btn active
      for(var prop in this.btnActive){
        if(this.btnActive.hasOwnProperty(prop))
        this.btnActive[prop] = "";
      }

      this.btnActive[newVal] = "active";
    }

  });
