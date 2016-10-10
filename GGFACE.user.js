// ==UserScript==
// @name         GGFACE
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://itunes.apple.com/ru/album
// @grant        none
// @include     http://*
// @include     https://*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
    console.log($);
    $(document).ready(function(){
        $('div.padder').prepend($('<div>').addClass('gg-itunes-cut'));
        $('.gg-itunes-cut').append($('<table>').append($('<tbody>').addClass('node-gg-itunes-cut-table')));
        var root = $('.node-gg-itunes-cut-table');

        var value = $('div#title.intro > div.left > h1').text();
        var nodeInput = $('<input>').addClass('etSelectable').attr('type', 'text').val(value);
        var nodeLine = $('<tr>').append($('<td>').html('ALBUM'),$('<td>').append(nodeInput));
        root.append(nodeLine);
        
        value = $('div#title.intro > div.left > span > a > h2').text();
        nodeInput = $('<input>').addClass('etSelectable').attr('type', 'text').val(value);
        nodeLine = $('<tr>').append($('<td>').html('ALBUM ARTIST'),$('<td>').append(nodeInput));
        root.append(nodeLine);
        
        value = $('#left-stack').find('img.artwork').attr('src-swap-high-dpi');
        nodeInput = $('<input>').addClass('etSelectable').attr('type', 'text').val(value);
        nodeLine = $('<tr>').append($('<td>').html('COVER'),$('<td>').append(nodeInput));
        root.append(nodeLine);
        
        value = $('tr.song.music.selected > td.artist').attr('sort-value');
        nodeInput = $('<input>').addClass('etSelectable').attr('type', 'text').val(value);
        nodeLine = $('<tr>').append($('<td>').html('TRACK ARTIST'),$('<td>').append(nodeInput));
        root.append(nodeLine);
        
        value = $('tr.song.music.selected').find('span.index').find('span').text();
        nodeInput = $('<input>').addClass('etSelectable').attr('type', 'text').val(value);
        nodeLine = $('<tr>').append($('<td>').html('TRACK NUM'),$('<td>').append(nodeInput));
        root.append(nodeLine);
        
        value = $('tr.song.music.selected').find('td.name').attr('sort-value');
        nodeInput = $('<input>').addClass('etSelectable').attr('type', 'text').val(value);
        nodeLine = $('<tr>').append($('<td>').html('TITLE'),$('<td>').append(nodeInput));
        root.append(nodeLine);
        
        
        $(".etSelectable").focus(function() { $(this).select(); } ).css('width', '200px');
    });
