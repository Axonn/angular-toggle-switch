angular.module('toggle-switch', ['ng']).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      disabled: '@',
      onLabel: '@',
      offLabel: '@',
      knobLabel: '@'
    },
    template: '<div class="ag-switch" ng-click="toggle()" ng-class="{ \'ag-disabled\': disabled }"><div class="ag-switch-animate" ng-class="{\'ag-switch-off\': !model, \'ag-switch-on\': model}"><span class="ag-switch-left" ng-bind="onLabel"></span><span class="ag-knob" ng-bind="knobLabel"></span><span class="ag-switch-right" ng-bind="offLabel"></span></div></div>',
    controller: function($scope) {
      $scope.toggle = function toggle() {
        if(!$scope.disabled) {
          $scope.model = !$scope.model;
        }
      };
    },
    compile: function(element, attrs) {
      if (!attrs.onLabel) { attrs.onLabel = 'On'; }
      if (!attrs.offLabel) { attrs.offLabel = 'Off'; }
      if (!attrs.knobLabel) { attrs.knobLabel = '\u00a0'; }
      if (!attrs.disabled) { attrs.disabled = false; }
    },
  };
});
