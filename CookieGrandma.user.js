// ==UserScript==
// @name        make cookies
// @namespace   cursor.cookies
// @description make cookies
// @include     http://orteil.dashnet.org/cookieclicker/
// @version     1
// ==/UserScript==

function repeat(func, arg, time){
	func(arg);
	setTimeout(repeat, time, func, arg, time);
}

function buy(element){
	var childlen = element.childNodes;
	var length = childlen.length;
	
	for(var i=0; i<length; ++i){
		var enabled = childlen[i].className.match(/enabled/);
		if(enabled != null){
			childlen[i].click();
		}
	}
}

function clickElement(element){
    element.click();
}

function getAndClickElement(elemName){
	var golden = document.getElementById(elemName);
	if(golden != null){
		golden.click();
	}
}

var upgrades = document.getElementById('upgrades');
var products = document.getElementById('products');
var cookie = document.getElementById('bigCookie');
var golden = 'goldenCookie';

repeat(buy, upgrades, 6000);
repeat(buy, products, 6000);
repeat(getAndClickElement, golden, 1000);
repeat(clickElement, cookie, 1);
