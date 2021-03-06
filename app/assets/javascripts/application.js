// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '864187560267679',
    cookie     : true,  // enable cookies to allow the server to access 
             oauth  : true,
      frictionlessRequests : true,                 // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
        var oauth_url = 'https://www.facebook.com/dialog/oauth/';
        oauth_url += '?client_id=864187560267679'; //Your Client ID
        oauth_url += '&redirect_uri=' + 'https://apps.facebook.com/stupiddcupidd/'; //Send them here if they're not logged in
        oauth_url += '&scope=user_about_me,public_profile,email,publish_actions,manage_notifications,user_friends';
    
        window.top.location = oauth_url;


    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.

       window.top.location ='https://www.facebook.com/index.php';
    }
  }



  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Hello, Mr. ' + response.name + '!';

        document.getElementById('facebook_name').value =response.name;
        document.getElementById('username').value=response.id;

        });
     FB.api('/me/friends', function(response) {
   var container = document.getElementById('mfs');
   var mfsForm = document.createElement('div');
   mfsForm.id = 'mfsForm';

   // Iterate through the array of friends object and create a checkbox for each one.
   for(var i = 0; i < Math.min(response.data.length); i++) {
     var friendItem = document.createElement('div');
     friendItem.id = 'friend_' + response.data[i].id;
     friendItem.innerHTML = '<input type="radio" name="facebook[friend]" value="'
       + response.data[i].id
       + '" />' + response.data[i].name;
       mfsForm.appendChild(friendItem);
     }
     container.appendChild(mfsForm);

     // Create a button to send the Request(s)
     var sendButton = document.createElement('input');
     sendButton.type = 'button';
     sendButton.value = 'Send Request';
     sendButton.onclick = sendRequest;
     mfsForm.appendChild(sendButton);
   });


        FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('mail').value =response.email + '';
        });



  }

function requestToFriends() {
  FB.ui({
      method: 'apprequests',
      title: 'View Source Request',
      message: 'Join Me & Find Out My Valentine From You!'
  }); // Call to FB.ui
} // messageToFriend





