var jpmReady = $.Deferred();
var cordovaReady = $.Deferred();

window.addEventListener("deviceready", cordovaReady.resolve,false);
$(document).on("pagecreate", jpmReady.resolve);
$.when(cordovaReady,jpmReady).then(initApp());

function initApp(){


    var $prompt = $("#alertPrompt");
    var $photo1 = $("#placePic1");
    var $photo2 = $("#placePic2");
    var $photo = $("#takePhoto");


    $photo.on("click", takePhoto);
    $prompt.on("click", dialogPrompt);


    $photo1.on("click", function(e) {

        //var $imgPlayer2 = $("#imgPlayer2");
       // $imgPlayer2.src = "../img/candace.png";

        var imgtag = "<img alt=\"phineus\" height=\"50\" width=\"50\" src=\"../img/phineaus.png\" >";
        console.log(imgtag);
        $('#imgPhoto1').prepend(imgtag);
        navigator.notification.alert("photo1 alert",null,"photo2 Alert", "Close");
        e.preventDefault();
    });




    $photo2.on("click", function(e) {

        //var $imgPlayer3 = $("#imgPlayer3");
        //$imgPlayer3.src = "../img/phineaus.png";

        var $img = $('#imgPhoto2');
        var imgtag = "<img id=\"my_img2\" alt=\"candace\" height=\"50\" width=\"50\"   src=\"../img/candace.png\" /> ";
        $img.prepend(imgtag);
        navigator.notification.alert("photo2 alert",null,"photo2 Alert", "Close");
        e.preventDefault();
    });



    function dialogPrompt() {
        var message = "Please enter username: ";
        var title = "User Name Input Box";
        var buttonLabels = ["YES","NO"];
        var defaultText = "PlayerName";
        navigator.notification.prompt(message, promptCallback,
            title, buttonLabels, defaultText);

    }

    function promptCallback(result) {
        navigator.notification.alert("prompt alert",null,"Prompt Alert", "Close");

    }

    function placePhoto1(){

        navigator.notification.alert("photo1 alert",null,"photo1 Alert", "Close");

        img.src = "../img/phineaus.png"

    }

    function placePhoto2(){

        navigator.notification.alert("photo2 alert",null,"photo2 Alert", "Close");


        img.src = "../img/candace.png"

    }

    function takePhoto() {
        var options = { quality: 25,
            //destinationType: Camera.DestinationType.DATA_URL,
            destinationType: Camera.DestinationType.FILE_URI,
            cameraDirection: Camera.Direction.FRONT,
            encodingType: Camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100
        };
        navigator.camera.getPicture(cameraSuccess, cameraError, options);
    }


    function cameraSuccess(imageData){
        // Uncomment the line below to see what you get as imageData:
        //navigator.notification.alert(imageData, null, "Photo Results", "Ok");

        var image = document.getElementById('img');
        // We must use Camera.DestinationType.FILE_URI  most of the time - see above!
        image.src = imageData;

        navigator.notification.alert("notify alert",null,"Test Alert", "Close");

        // Use this only if you need raw image data.
        // You also must activate Camera.DestinationType.DATA_URL option above.
        //image.src = "data:image/jpeg;base64," + imageData;
    }

    function cameraError(errorData){
        navigator.notification.alert("Error: " + JSON.stringify(errorData), null, "Camera Error", "Ok");
    }





}