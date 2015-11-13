angular.module('NoteWrangler')
.controller('NotesIndexController',function($http){
  var ctrl = this;
  $http({method: "GET", url: "https://gist.githubusercontent.com/zhulinpinyu/90b4b0d5405ade8c0dde/raw/ff667754383382e8dc574c10abdc96b63fbff416/notes"}).success(function(data){
    ctrl.notes = data
  })
});
