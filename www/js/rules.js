var jpmReady = $.Deferred();
var cordovaReady = $.Deferred();

window.addEventListener("deviceready", cordovaReady.resolve,false);
$(document).on("pagecreate", jpmReady.resolve);
$.when(cordovaReady,jpmReady).then(initApp());

function initApp(){




}