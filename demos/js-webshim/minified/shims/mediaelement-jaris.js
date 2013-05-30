webshims.register("mediaelement-jaris",function(e,t,n,i,a,r){"use strict";var o=t.mediaelement,s=n.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),c=0,d="ActiveXObject"in n&&u,p={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},f=Object.keys(p),m={currentTime:0,volume:1,muted:!1};Object.keys(m);var h=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},p,m),v=function(e){try{e.nodeName}catch(n){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},g=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,a,t)},y=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};o.jarisEvent={};var w,T={onPlayPause:function(e,t,n){var i,a;if(null==n)try{i=t.api.api_get("isPlaying")}catch(r){}else i=n;i==t.paused&&(t.paused=!i,a=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,a),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var n,i=t.duration;t.duration=e.duration,i==t.duration||isNaN(t.duration)||t._calledMeta&&2>(n=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},n>50?0:n>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,n){if(n.ended&&(n.ended=!1),n.duration&&!isNaN(n.duration)){var i=t.loaded/t.total;i>.02&&.2>i?b(3,n):i>.2&&(i>.99&&(n.networkState=1),b(4,n)),n._bufferedEnd&&n._bufferedEnd>i&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=i,n.buffered.length=1,e.event.trigger("progress",a,n._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(i,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,a):(o++,r.tryedReframeing++,n(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,N(r),x(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),a)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(w),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};T.onMute=T.onVolumeChange;var x=function(e){var n,i=e.actionQueue.length,a=0;if(i&&"third"==e.isActive)for(;e.actionQueue.length&&i>a;){a++,n=e.actionQueue.shift();try{e.api[n.fn].apply(e.api,n.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},N=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},E=e.noop;if(u){var A={play:1,playing:1},k=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],M=k.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(n){var i=t.data(n.target,"mediaelement");if(i){var a=n.originalEvent&&n.originalEvent.type===n.type;a==("third"==i.activating)&&(n.stopImmediatePropagation(),A[n.type]&&i.isActive!=i.activating&&e(n.target).pause())}};E=function(n){e(n).off(M).on(M,S),k.forEach(function(e){t.moveToFirstEvent(n,e)})},E(i)}o.setActive=function(n,i,a){if(a||(a=t.data(n,"mediaelement")),a&&a.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var r=t.data(n,"shadowData");a.activating=i,e(n).pause(),a.isActive=i,"third"==i?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var C=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(n){if(n){var i=t,a=n.networkState;for(b(0,n),clearTimeout(n._durationChangeTimer);--i>-1;)delete n[e[i]];n.actionQueue=[],n.buffered.length=0,a&&g(n._elem,"emptied")}}}(),D=function(t,n){var i,a=t._elem,r=t.shadowElem;e(a)[n?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||n?r.css({width:a.style.width||(i=e(a).attr("width"))&&i+"px"||e(a).width(),height:a.style.height||(i=e(a).attr("height"))&&i+"px"||e(a).height()}):r.css({width:0,height:0})},_=function(){var t={"":1,auto:1};return function(n){var i=e.attr(n,"preload");return null==i||"none"==i||e.prop(n,"autoplay")?!1:(i=e.prop(n,"preload"),!!(t[i]||"metadata"==i&&e(n).is(".preload-in-doubt, video:not([poster])")))}}(),P={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(P.A,"%26").replace(P.a,"%26").replace(P.e,"%3D").replace(P.q,"%3F"):e};o.createSWF=function(n,i,d){if(!l)return setTimeout(function(){e(n).mediaLoad()},1),a;1>c?c=1:c++,d||(d=t.data(n,"mediaelement")),(e.attr(n,"height")||e.attr(n,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var p,f="audio/rtmp"==i.type||"video/rtmp"==i.type,m=e.extend({},r.vars,{poster:F(e.attr(n,"poster")&&e.prop(n,"poster")||""),source:F(i.streamId||i.srcProp),server:F(i.server||"")}),v=e(n).data("vars")||{},g=e.prop(n,"controls"),b="jarisplayer-"+t.getID(n),x=e.extend({},r.params,e(n).data("params")),N=n.nodeName.toLowerCase(),A=e.extend({},r.attrs,{name:b,id:b},e(n).data("attrs")),k=function(){D(d,e.prop(n,"controls"))};d&&d.swfCreated?(o.setActive(n,"third",d),d.currentSrc=i.srcProp,d.shadowElem.html('<div id="'+b+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,C(d)):(p=e('<div class="polyfill-'+N+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(n,"mediaelement",t.objectCreate(h,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:N},_elem:{value:n},currentSrc:{value:i.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),D(d,g),p.insertBefore(n),u&&e.extend(d,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,p),E(n),o.setActive(n,"third",d),e(n).on({updatemediaelementdimensions:k}).onWSOff("updateshadowdom",k).on("remove",function(e){e.originalEvent||(o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==n&&(delete o.jarisEvent[d.id],clearTimeout(w),clearTimeout(d.flashBlock)),p.remove())})),o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==n||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(_(n)&&d.api.api_preload(),T.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&T.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||T.onPlayPause(e,d),T[e.type]&&T[e.type](e,d)),d.duration=e.duration},o.jarisEvent[d.id].elem=n),e.extend(m,{id:b,evtId:d.id,controls:""+g,autostart:"false",nodename:N},v),f?m.streamtype="rtmp":"audio/mpeg"==i.type||"audio/mp3"==i.type?(m.type="audio",m.streamtype="file"):"video/youtube"==i.type&&(m.streamtype="youtube"),r.changeSWF(m,n,i,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,m,x,A,function(i){if(i.success){var a=function(){(!i.ref.parentNode&&p[0].parentNode||"none"==i.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed")),e(i.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};d.api=i.ref,g||e(i.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(a,99),w||(clearTimeout(w),w=setTimeout(function(){a();var n=e(i.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>n[0].offsetWidth||2>n[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3))}})};var O=function(e,t,n,i){return i=i||v(e),i?(i.api&&i.api[t]?i.api[t].apply(i.api,n||[]):(i.actionQueue.push({fn:t,args:n}),i.actionQueue.length>10&&setTimeout(function(){i.actionQueue.length>5&&i.actionQueue.shift()},99)),i):!1};if(["audio","video"].forEach(function(n){var i,a={},r=function(e){("audio"!=n||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=v(this);return t?t[e]:u&&i[e].prop._supget?i[e].prop._supget.apply(this):h[e]},writeable:!1})},o=function(e,t){r(e),delete a[e].writeable,a[e].set=t};o("volume",function(e){var n=v(this);if(n)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),O(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,g(n._elem,"volumechange")),n=null);else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,O(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||O(this,"api_seek",[e],t);else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),O(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),f.forEach(r),t.onNodeNamesPropertyModify(n,"controls",function(t,i){var a=v(this);e(this)[i?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==n&&D(a,i),O(this,"api_controls",[i],a))}),t.onNodeNamesPropertyModify(n,"preload",function(){var n,i,a;_(this)&&(n=v(this),n?O(this,"api_preload",[],n):!d||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(a=this,i=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){e(a).mediaLoad()},9)))}),i=t.defineNodeNameProperties(n,a,"prop")}),l&&e.cleanData){var j=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,n;if(e&&(n=e.length)&&c)for(t=0;n>t;t++)if(I[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(i){}}return j.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});