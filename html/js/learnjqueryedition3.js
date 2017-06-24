$(document).ready(function() {
	//按钮增加字体缩放
	var speech = $("div.speech");
	var defaultsize = speech.css("font-size");
	$("#switcher button").click(function() {
		var num = parseFloat(speech.css("font-size"));
		switch(this.id) {
		case 'switcher-large':
			num *= 1.4;
			break;
		case 'switcher-small':
			num /= 1.4;
			break;
		default:
			num = parseFloat(defaultsize);
		}
		speech.css("font-size", num + 'px');
	});

	//read more的实现
	var p = $("p").eq(1);
	p.hide();
	$("a.more").click(function(){
		p.slideToggle('slow');
		if($(this).text() == "read more"){
			$(this).text("read less");
		}else{
			$(this).text("read more");
		}
		return false;
	});

	//值回调
	$('div.chapter a[href*="wikipedia"]').attr({
		rel: 'external',
		title: function(){
			return 'learn more about ' + $(this).text() + 'at wikipedia.';
		},
		id: function(index, oldValue){
			return "wikipedia-" + index;
		}
	}); 

	//每个段落后面加苗链接
	$('<a href=#top>back to top</a>').insertAfter('div.chapter p');
	$('<a id=top></a>').prependTo('body');

	//包装方法
	$('span.footnote').insertBefore("#footer").wrapAll('<ol id=notes></ol>').wrap('<li></li>');
});