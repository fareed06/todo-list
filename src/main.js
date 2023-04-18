import { createApp } from 'vue'
import App from './App.vue'
var Dolly = window.Dolly;

var interactiveName = jQuery('.dolly-lti').attr('data-name');
Dolly.checkReady(jQuery('.dolly-lti'), function () {
  
  var dataUrl = Dolly.api_url + '/api/v2/interactives/' + interactiveName + '/data';
  jQuery(document).ready(function () {
    //console.log(Dolly.lti_user_info);
    var DollyUserInfo = Dolly.lti_user_info;
    //dollyInit(dataUrl);
    createApp(App).mount('#app')
  });
});


