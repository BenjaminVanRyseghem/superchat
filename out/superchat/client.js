// Compiled by ClojureScript 0.0-2356
goog.provide('superchat.client');
goog.require('cljs.core');
goog.require('bc.dom_helpers');
goog.require('goog.events.KeyCodes');
goog.require('bc.dom_helpers');
goog.require('goog.net.BrowserChannel');
goog.require('goog.net.BrowserChannel');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('goog.events.KeyHandler');
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
superchat.client.channel = (new goog.net.BrowserChannel());
superchat.client.say = (function say(text){return superchat.client.channel.sendMap((function (){var G__4874 = (function (){var obj4876 = {};return obj4876;
})();(G__4874["msg"] = text);
return G__4874;
})());
});
superchat.client.enable_chat = (function enable_chat(){var msg_input = bc.dom_helpers.get_element.call(null,"msg-input");var send_button = bc.dom_helpers.get_element.call(null,"send-button");var handler = ((function (msg_input,send_button){
return (function (e){superchat.client.say.call(null,bc.dom_helpers.value.call(null,msg_input));
return bc.dom_helpers.set_value.call(null,msg_input,"");
});})(msg_input,send_button))
;bc.dom_helpers.set_disabled.call(null,msg_input,false);
bc.dom_helpers.set_disabled.call(null,send_button,false);
goog.events.listen((new goog.events.KeyHandler(msg_input)),"key",((function (msg_input,send_button,handler){
return (function (e){if(cljs.core._EQ_.call(null,e.keyCode,goog.events.KeyCodes.ENTER))
{return handler.call(null,e);
} else
{return null;
}
});})(msg_input,send_button,handler))
);
return goog.events.listen(send_button,"click",handler);
});
superchat.client.handler = (function handler(){var h = (new goog.net.BrowserChannel.Handler());h.channelOpened = ((function (h){
return (function (channel){return superchat.client.enable_chat.call(null);
});})(h))
;
h.channelHandleArray = ((function (h){
return (function (x,data){var msg = (data["msg"]);return bc.dom_helpers.append.call(null,bc.dom_helpers.get_element.call(null,"room"),bc.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),("MSG::"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))));
});})(h))
;
return h;
});
superchat.client.run = (function run(){goog.events.listen(window,"unload",(function (){superchat.client.channel.disconnect(cljs.core.List.EMPTY);
return goog.events.removeAll();
}));
var G__4879_4881 = superchat.client.channel.getChannelDebug().getLogger();G__4879_4881.setLevel(goog.debug.Logger.Level.OFF);
var G__4880 = superchat.client.channel;G__4880.setHandler(superchat.client.handler.call(null));
G__4880.connect("/channel/test","/channel/bind");
return G__4880;
});
goog.exportSymbol('superchat.client.run', superchat.client.run);
