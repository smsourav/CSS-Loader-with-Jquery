
$(function(){
    
    var box = $('.box');
    
    var b1 = $('.btn1');
    var b2 = $('.btn2');
    var b3 = $('.btn3');
    var b4 = $('.btn4');

    var b5 = $('.btn5');
    var b6 = $('.btn6');
    var b7 = $('.btn7');
    
    var p = $('#ause');
    var c = $('#ontinue');
    
    var stp = $('.grp');
    var w = $('.dot');
    var x = $('.b');
    var y = $('.l1');
    var z = $('.l2');
    
    var fir = $('.fir');
    var sec = $('.sec');
    var con1 = $('.prin1');
    var con2 = $('.prin2');
    
    var bar = $('.bar');
    var baar = $('.baar');
    var sab = $('.sab');
    
    var any = $('.any');

    b1.click(function(){
        b1.toggleClass('btnAdd');
        b2.removeClass('btnAdd');
        b3.removeClass('btnAdd');
        b4.removeClass('btnAdd');
        box.removeClass('bo');
        box.removeClass('bth');
        box.removeClass('anima2');
        box.toggleClass('anima1');
    });
    
    b2.click(function(){
        b1.removeClass('btnAdd');
        b2.toggleClass('btnAdd');
        b3.removeClass('btnAdd');
        b4.removeClass('btnAdd');
        box.removeClass('bo');
        box.removeClass('bth');
        box.removeClass('anima1');
        box.toggleClass('anima2');
    });
    
    b3.click(function(){
        b2.removeClass('btnAdd');
        b1.removeClass('btnAdd');
        b3.toggleClass('btnAdd');
        b4.removeClass('btnAdd');
        box.removeClass('bo');
        box.removeClass('anima1');
        box.removeClass('anima2');
        box.toggleClass('bth');
    });
    
    b4.click(function(){
        b2.removeClass('btnAdd');
        b3.removeClass('btnAdd');
        b1.removeClass('btnAdd');
        b4.toggleClass('btnAdd');
        box.removeClass('bth');
        box.removeClass('anima1');
        box.removeClass('anima2');
        box.toggleClass('bo');
    });
    /*p.click(function(){
        box.removeClass('continu');
        box.addClass('paus');
        c.removeClass('btnAdd');
        p.addClass('btnAdd');
    });
    c.click(function(){
        box.removeClass('paus');
        box.addClass('continu');
        p.removeClass('btnAdd');
        c.addClass('btnAdd');
    });*/
    
    stp.click(function(){
        w.toggleClass('act');
        x.toggleClass('bgRed');
        y.toggleClass('dn');
        z.toggleClass('db');
        box.toggleClass('paus');
        bar.toggleClass('paus');
        baar.toggleClass('paus');
        sab.toggleClass('paus');
        any.toggleClass('paus');
        $('.sha').toggleClass('shen');
    });
    
    b5.click(function(){
        b5.toggleClass('btnAdd');
        b6.removeClass('btnAdd');
        b7.removeClass('btnAdd');
        bar.removeClass('baar');
        bar.removeClass('sab');
        bar.toggleClass('bal');
        any.removeClass('lod2');
        any.toggleClass('lod');
    });
    
    b6.click(function(){
        b6.toggleClass('btnAdd');
        b5.removeClass('btnAdd');
        b7.removeClass('btnAdd');
        bar.removeClass('bal');
        bar.removeClass('sab');
        bar.toggleClass('baar');
        any.removeClass('lod');
        any.toggleClass('lod2');
    });
    
    b7.click(function(){
        b7.toggleClass('btnAdd');
        b6.removeClass('btnAdd');
        b5.removeClass('btnAdd');
        bar.removeClass('bal');
        bar.removeClass('baar');
        bar.toggleClass('sab');
        any.removeClass('lod');
        any.toggleClass('lod2');
    });
    
    fir.click(function(){
        fir.addClass('btnAdd2');
        sec.removeClass('btnAdd2');
        con1.removeClass('dn');
        con2.addClass('dn');
    });
    
    sec.click(function(){
        sec.addClass('btnAdd2');
        fir.removeClass('btnAdd2');
        con2.removeClass('dn');
        con1.addClass('dn');
    });
    
    
});
