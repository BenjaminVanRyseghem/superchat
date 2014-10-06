// Compiled by ClojureScript 0.0-2356
goog.provide('bc.dom_helpers');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.fx');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.Timer');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
/**
* Return the element with the passed id.
*/
bc.dom_helpers.get_element = (function get_element(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
bc.dom_helpers.show_element = (function show_element(e,b){return goog.style.showElement(e,b);
});
bc.dom_helpers.add_remove_class = (function add_remove_class(e,add_classes,remove_classes){return goog.dom.classes.addRemove(e,remove_classes,add_classes);
});
bc.dom_helpers.get_radio_value = (function get_radio_value(form_name,name){return goog.dom.forms.getValueByName(bc.dom_helpers.get_element.call(null,form_name),name);
});
bc.dom_helpers.value = (function value(element){return goog.dom.forms.getValue(element);
});
bc.dom_helpers.set_value = (function set_value(element){return goog.dom.forms.setValue(element);
});
bc.dom_helpers.set_disabled = (function set_disabled(element,disabled){return goog.dom.forms.setDisabled(element,disabled);
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
bc.dom_helpers.append = (function() { 
var append__delegate = function (parent,children){var seq__4827_4831 = cljs.core.seq.call(null,children);var chunk__4828_4832 = null;var count__4829_4833 = (0);var i__4830_4834 = (0);while(true){
if((i__4830_4834 < count__4829_4833))
{var child_4835 = cljs.core._nth.call(null,chunk__4828_4832,i__4830_4834);goog.dom.appendChild(parent,child_4835);
{
var G__4836 = seq__4827_4831;
var G__4837 = chunk__4828_4832;
var G__4838 = count__4829_4833;
var G__4839 = (i__4830_4834 + (1));
seq__4827_4831 = G__4836;
chunk__4828_4832 = G__4837;
count__4829_4833 = G__4838;
i__4830_4834 = G__4839;
continue;
}
} else
{var temp__4126__auto___4840 = cljs.core.seq.call(null,seq__4827_4831);if(temp__4126__auto___4840)
{var seq__4827_4841__$1 = temp__4126__auto___4840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4827_4841__$1))
{var c__4145__auto___4842 = cljs.core.chunk_first.call(null,seq__4827_4841__$1);{
var G__4843 = cljs.core.chunk_rest.call(null,seq__4827_4841__$1);
var G__4844 = c__4145__auto___4842;
var G__4845 = cljs.core.count.call(null,c__4145__auto___4842);
var G__4846 = (0);
seq__4827_4831 = G__4843;
chunk__4828_4832 = G__4844;
count__4829_4833 = G__4845;
i__4830_4834 = G__4846;
continue;
}
} else
{var child_4847 = cljs.core.first.call(null,seq__4827_4841__$1);goog.dom.appendChild(parent,child_4847);
{
var G__4848 = cljs.core.next.call(null,seq__4827_4841__$1);
var G__4849 = null;
var G__4850 = (0);
var G__4851 = (0);
seq__4827_4831 = G__4848;
chunk__4828_4832 = G__4849;
count__4829_4833 = G__4850;
i__4830_4834 = G__4851;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var append = function (parent,var_args){
var children = null;if (arguments.length > 1) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return append__delegate.call(this,parent,children);};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__4852){
var parent = cljs.core.first(arglist__4852);
var children = cljs.core.rest(arglist__4852);
return append__delegate(parent,children);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
bc.dom_helpers.set_text = (function set_text(e,s){var e__$1 = ((((e instanceof cljs.core.Keyword)) || (typeof e === 'string'))?bc.dom_helpers.get_element.call(null,e):e);var G__4854 = e__$1;goog.dom.setTextContent(G__4854,s);
return G__4854;
});
bc.dom_helpers.normalize_args = (function normalize_args(tag,args){var parts = clojure.string.split.call(null,tag,/(\.|#)/);var vec__4857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,((function (parts){
return (function (p1__4855_SHARP_){if(cljs.core._EQ_.call(null,p1__4855_SHARP_,"."))
{return new cljs.core.Keyword(null,"class","class",-2030961996);
} else
{if(cljs.core._EQ_.call(null,p1__4855_SHARP_,"#"))
{return new cljs.core.Keyword(null,"id","id",-1388402092);
} else
{return p1__4855_SHARP_;

}
}
});})(parts))
,cljs.core.rest.call(null,parts)))], null);var tag__$1 = cljs.core.nth.call(null,vec__4857,(0),null);var attrs = cljs.core.nth.call(null,vec__4857,(1),null);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,attrs,cljs.core.first.call(null,args)),cljs.core.rest.call(null,args)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,attrs,args], null);
}
});
/**
* Create a dom element using a keyword for the element name and a map
* for the attributes. Append all children to parent. If the first
* child is a string then the string will be set as the text content of
* the parent and all remaining children will be appended.
* @param {...*} var_args
*/
bc.dom_helpers.element = (function() { 
var element__delegate = function (tag,args){var vec__4864 = bc.dom_helpers.normalize_args.call(null,tag,args);var tag__$1 = cljs.core.nth.call(null,vec__4864,(0),null);var attrs = cljs.core.nth.call(null,vec__4864,(1),null);var children = cljs.core.nth.call(null,vec__4864,(2),null);var parent = goog.dom.createDom(cljs.core.subs.call(null,tag__$1,(1)),cljs.core.reduce.call(null,((function (vec__4864,tag__$1,attrs,children){
return (function (m,p__4866){var vec__4867 = p__4866;var k = cljs.core.nth.call(null,vec__4867,(0),null);var v = cljs.core.nth.call(null,vec__4867,(1),null);return cljs.core.assoc.call(null,m,k,v);
});})(vec__4864,tag__$1,attrs,children))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__4864,tag__$1,attrs,children){
return (function (p1__4858_SHARP_,p2__4859_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,p1__4858_SHARP_),p2__4859_SHARP_],null));
});})(vec__4864,tag__$1,attrs,children))
,cljs.core.keys.call(null,attrs),cljs.core.vals.call(null,attrs))).strobj);var vec__4865 = ((typeof cljs.core.first.call(null,children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc.dom_helpers.set_text.call(null,element.call(null,tag__$1,attrs),cljs.core.first.call(null,children)),cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,children], null));var parent__$1 = cljs.core.nth.call(null,vec__4865,(0),null);var children__$1 = cljs.core.nth.call(null,vec__4865,(1),null);return cljs.core.apply.call(null,bc.dom_helpers.append,parent__$1,children__$1);
};
var element = function (tag,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return element__delegate.call(this,tag,args);};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = (function (arglist__4868){
var tag = cljs.core.first(arglist__4868);
var args = cljs.core.rest(arglist__4868);
return element__delegate(tag,args);
});
element.cljs$core$IFn$_invoke$arity$variadic = element__delegate;
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
bc.dom_helpers.remove_children = (function remove_children(parent_el){return goog.dom.removeChildren(parent_el);
});
/**
* Create a dom element from an html string.
*/
bc.dom_helpers.html = (function html(s){return goog.dom.htmlToDocumentFragment(s);
});
bc.dom_helpers.element_arg_QMARK_ = (function element_arg_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string');
});
/**
* Build up a dom element from nested vectors.
*/
bc.dom_helpers.build = (function build(x){if(cljs.core.vector_QMARK_.call(null,x))
{var vec__4870 = (((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,bc.dom_helpers.element,cljs.core.take_while.call(null,bc.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,bc.dom_helpers.element_arg_QMARK_,x)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x),cljs.core.rest.call(null,x)], null));var parent = cljs.core.nth.call(null,vec__4870,(0),null);var children = cljs.core.nth.call(null,vec__4870,(1),null);var children__$1 = cljs.core.map.call(null,build,children);return cljs.core.apply.call(null,bc.dom_helpers.append,parent,children__$1);
} else
{return x;
}
});
/**
* Insert a child element at a specific location.
*/
bc.dom_helpers.insert_at = (function insert_at(parent,child,index){return goog.dom.insertChildAt(parent,child,index);
});
bc.dom_helpers.set_timeout = (function set_timeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
bc.dom_helpers.set_position = (function set_position(e,x,y){return goog.style.setPosition(e,x,y);
});
bc.dom_helpers.get_position = (function get_position(e){return goog.style.getPosition(e);
});
bc.dom_helpers.toggle_class = (function toggle_class(el,classname){return goog.dom.classes.toggle(el,classname);
});
bc.dom_helpers.add_class = (function add_class(el,classname){return goog.dom.classes.add(el,classname);
});
bc.dom_helpers.remove_class = (function remove_class(el,classname){return goog.dom.classes.remove(el,classname);
});
