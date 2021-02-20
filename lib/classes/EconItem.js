"use strict";

module.exports = function EconItem(item, classinfo) {
	this.assetid = (item.id || item.assetid).toString();
	this.appid = item.appid ? parseInt(item.appid, 10) : 0;
	this.classid = item.classid.toString();
	this.instanceid = (item.instanceid || 0).toString();
	this.amount = item.amount ? parseInt(item.amount, 10) : 1;
	this.contextid = item.contextid.toString();
	this.classinfo = classinfo || {};
}