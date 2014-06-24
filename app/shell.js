define(function (require) {
  var router = require('plugins/router');
 
  return {
     router: router,
     activate: function () {
       router.map([
         { route:'', title:'Code metrics', moduleId:'metrics', nav:true },
         { route:'detail/:id', title:'Code metrics details', moduleId:'detail', hash:'#detail', nav:false }
       ]).buildNavigationModel();
 
       return router.activate();
     }
   };
});