/**
 * Created by Timothy on 12/1/2016.
 */
var app = angular.module('timeCalc', []);

app.controller('MainCtrl', function ($scope) {

    var week = 7;
    var milliHour = 60 * 60 * 1000;
    var milliMin = 60 * 1000;

    var totalTime = 40 * milliHour;// this is total time in millisecond
    var days = [];

    for (var i = 0; i < week; i++) {
        days.push({day: i + 1, hModel: 0, mModel: 0});
    }

    $scope.days = days;

    $scope.calcTime = function () {
        totalTime = 40 * milliHour;

        for (var i = 0; i < week; i++) {
            totalTime -= days[i].hModel * milliHour;
            totalTime -= days[i].mModel * milliMin;
        }

        $scope.time = {
            hours: Math.floor(totalTime / milliHour),
            min: Math.floor((totalTime % milliHour) / milliMin)
        };
    };

    $scope.time = {
        hours: totalTime / milliHour,
        min: totalTime % milliHour
    };

});
