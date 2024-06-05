// ==UserScript==
// @name         PMT Sidebar remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removes the side bar with ads to allow for a full screen view
// @author       You
// @match        *://www.physicsandmathstutor.com/pdf-pages/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function findAndOpenPdf() {
        var iframe = document.querySelector('iframe');
        if (iframe && iframe.src.endsWith('.pdf')) {
            window.location.href = iframe.src;
            return;
        }
        var anchor = document.querySelector('a[href$=".pdf"]');
        if (anchor) {
            window.location.href = anchor.href;
            return;
        }
        console.log('No PDF link found on this page.');
    }
    window.addEventListener('load', findAndOpenPdf);
})();
