with( HLight ) lang.js= FConcurentLang( new function(){
	this[ '/\\*([\\s\\S]*?)\\*/' ]= function( content ){
		content= lang.text( content )
		return '<hl:js-remark>/*' + content + '*/</hl:js-remark>'
	}
	this[ '((?:\\n|^)[\\s\\S]*)//([\\s\\S]*?)(?=\\n|$)' ]= function( prefix, content ){
		prefix= lang.js( prefix )
		content= lang.text( content )
		return prefix + '<hl:js-remark>//' + content + '</hl:js-remark>'
	}
	this[ '"([^\\n]*?)"' ]= function( content ){
		content= lang.text( content )
		return '<hl:js-string>"' + content + '"</hl:js-string>'
	}
	this[ '\\b(this|function|new|var|if|else|switch|case|default|for|in|while|do|with|boolean|continue|break|throw|true|false|try|catch|null|typeof|instanceof|return|delete)\\b' ]= function( content ){
		content= content || ''
		return '<hl:js-keyword>' + content + '</hl:js-keyword>'
	}
})
