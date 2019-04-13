var jpmReady = $.Deferred();
var cordovaReady = $.Deferred();

window.addEventListener("deviceready", cordovaReady.resolve, false);
$(document).on("pagecreate", jpmReady.resolve);
$.when(cordovaReady, jpmReady).then(initApp());

function initApp() {

    var $candace = $("#Candace");
    var $doofenschmirtz = $("#Doofenshmirtz");
    var $isabella = $("#Isabella");
    var $phineus = $("#Phineaus");
    var $ferb = $("#Ferb");
    var $msfletcher = $("#MsFletcher");

    var $photo = $("#takePhoto");
    var $btnPlayers = $(".btn");
    var $formInputName = $("#inlineFormInput");

    $photo.on("click", takePhoto);
    $formInputName.on("click", saveName);


    $candace.on("click", placePlayer);

    $doofenschmirtz.on("click", placePlayer);

    $isabella.on("click", placePlayer);

    $phineus.on("click", placePlayer);

    $ferb.on("click", placePlayer);

    $msfletcher.on("click", placePlayer);


    var counter = (function () {
        var privateCounter = 0;

        function changeBy(val) {
            privateCounter += val;
        }

        return {
            increment: function () {
                changeBy(1);
            },

            value: function () {
                return privateCounter;
            }
        };
    })();

    function placePlayer(e) {
        //console.log(e.target.id);

        var name = e.target.id;

        if (name == "Candace") {
            console.log("candace clicked");
            counter.increment();

        } else if (name == "Doofenshmirtz") {

            console.log("nlong");
            counter.increment();

        } else if (name == "Isabella") {

            console.log("isabella clikck");
            counter.increment();

        } else if (name == "Phineaus") {

            console.log("Phin clicked");
            counter.increment();

        } else if (name == "Ferb") {

            console.log("ferb clikck");
            counter.increment();

        } else if (name == "MsFletcher") {
            console.log("Msflecher clikck");
            counter.increment();


        } else {
            console.log("No click?");
        }

        console.log(counter.value())

        var count = counter.value();

        if (count > 3) {


            $btnPlayers.hide();

        }


    }

    function saveName(e) {

        //console.log(e.target.id);
        e.preventDefault();

    }

    function dialogPrompt() {
        var message = "Please enter username: ";
        var title = "User Name Input Box";
        var buttonLabels = ["YES", "NO"];
        var defaultText = "PlayerName";
        navigator.notification.prompt(message, promptCallback,
            title, buttonLabels, defaultText);

    }

    function promptCallback(result) {
        navigator.notification.alert("prompt alert", null, "Prompt Alert", "Close");

    }


    function takePhoto() {
        var options = {
            quality: 25,
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


    function cameraSuccess(imageData) {
        // Uncomment the line below to see what you get as imageData:
        //navigator.notification.alert(imageData, null, "Photo Results", "Ok");

        var image = document.getElementById('img');
        // We must use Camera.DestinationType.FILE_URI  most of the time - see above!
        image.src = imageData;

        navigator.notification.alert("notify alert", null, "Test Alert", "Close");

        // Use this only if you need raw image data.
        // You also must activate Camera.DestinationType.DATA_URL option above.
        //image.src = "data:image/jpeg;base64," + imageData;
    }

    function cameraError(errorData) {
        navigator.notification.alert("Error: " + JSON.stringify(errorData), null, "Camera Error", "Ok");
    }


}