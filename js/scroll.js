"use strict";$(function(){var v=0;function e(e){var i;try{i=$(e)}catch(t){i=$(decodeURI(e))}i.velocity("stop").velocity("scroll",{duration:500,easing:"easeInOutQuart"})}$(".toc-child").hide(),$(window).scroll(throttle(function(t){var e,i,o,a,s,n,c,r=$(this).scrollTop();isMobile()||(e=r,i=$("#content-outer").height(),o=$(window).height(),a=o<i?i-o:$(document).height()-o,s=e/a,n=Math.round(100*s),c=100<n?100:n<=0?0:n,$(".progress-num").text(c),$(".sidebar-toc__progress-bar").velocity("stop").velocity({width:c+"%"},{duration:100,easing:"easeInOutQuart"}),function(e){if(0===$(".toc-link").length)return;var t=$("#post-content").find("h1,h2,h3,h4,h5,h6"),i="";t.each(function(){var t=$(this);e>t.offset().top-25&&(i="#"+$(this).attr("id"))}),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());"5"===GLOBAL_CONFIG.hexoVersion[0]&&(i=encodeURI(i));var o=$(".toc-link.active");if(i&&o.attr("href")!==i){c=i,window.history.replaceState&&c!==window.location.hash&&window.history.replaceState(void 0,void 0,c),$(".toc-link").removeClass("active");var a=$('.toc-link[href="'+i+'"]');a.addClass("active");var s=a.parents(".toc-child"),n=0<s.length?s.last():a;!function(t){if(t.is(":visible"))return;t.velocity("stop").velocity("transition.fadeIn",{duration:500,easing:"easeInQuart"})}(n.closest(".toc-item").find(".toc-child")),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}var c}(r));var l,h,d=(h=v<(l=r),v=l,h);56<r?(d?$("#page-header").hasClass("visible")?$("#page-header").removeClass("visible"):console.log():$("#page-header").hasClass("visible")?console.log():$("#page-header").addClass("visible"),$("#page-header").addClass("fixed"),"0"===$("#go-up").css("opacity")&&$("#go-up").velocity("stop").velocity({translateX:-30,rotateZ:360,opacity:1},{easing:"easeOutQuart",duration:200})):(0===r&&$("#page-header").removeClass("fixed").removeClass("visible"),$("#go-up").velocity("stop").velocity({translateX:0,rotateZ:180,opacity:0},{easing:"linear",duration:200}))},50,100)),$("#go-up").on("click",function(){$("body").velocity("stop").velocity("scroll",{duration:500,easing:"easeOutQuart"})}),$("#post-content").find("h1,h2,h3,h4,h5,h6").on("click",function(t){e("#"+$(this).attr("id"))}),$(".toc-link").on("click",function(t){t.preventDefault(),e($(this).attr("href"))})});