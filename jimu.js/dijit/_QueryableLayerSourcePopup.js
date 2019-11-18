// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/declare jimu/dijit/Popup jimu/dijit/QueryableLayerSource jimu/dijit/LoadingIndicator esri/request".split(" "),function(e,f,b,g,h,k,l,m,n){return h([k,f],{width:830,height:560,titleLabel:"",dijitArgs:null,postCreate:function(){this.inherited(arguments);g.addClass(this.domNode,"jimu-queryable-layer-source-popup");this._initFls();this._initLoading()},getSelectedRadioType:function(){return this.sourceDijit.getSelectedRadioType()},
_initFls:function(){this.sourceDijit=new l(this.dijitArgs);this.sourceDijit.placeAt(this.contentContainerNode);this.sourceDijit.startup();this.own(e(this.sourceDijit,"ok",b.hitch(this,function(c){if(0!==c.length){var a=c[0];if(a.definition)try{a.definition.name=a.name,a.definition.url=a.url,this.emit("ok",a)}catch(d){console.error(d)}else this.loading.show(),n({url:a.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(b.hitch(this,function(d){if(this.domNode){this.loading.hide();
a.definition=d;try{a.definition.name=a.name,a.definition.url=a.url,this.emit("ok",a)}catch(p){console.error(p)}}}),b.hitch(this,function(a){console.error(a);this.domNode&&this.loading.hide()}))}})));this.own(e(this.sourceDijit,"cancel",b.hitch(this,function(){try{this.emit("cancel")}catch(c){console.error(c)}})))},_initLoading:function(){this.loading=new m({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()}})});