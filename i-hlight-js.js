with( HLight ) lang.js= FPipe( FConcurentLang( new function(){

	var wrapRemark= TagWrapper( 'i:hlight-js-remark' )
	this[ '\\/\\*([\\s\\S]*?)\\*\\/' ]= function( content ){
		content= lang.text( content )
		return wrapRemark( '/*' + content + '*/' )
	}
	this[ '\\/\\/([\\s\\S]*?)(?=\\n|$)' ]= function( content ){
		content= lang.text( content )
		return wrapRemark( '//' + content )
	}

	var wrapString= TagWrapper( 'i:hlight-js-string' )
	this[ '"([^\\n]*?)"' ]= function( content ){
		content= lang.text( content )
		return wrapString( '"' + content + '"' )
	}

	var wrapKeyword= TagWrapper( 'i:hlight-js-keyword' )
	this[ '\\b(this|function|new|var|if|else|switch|case|default|for|in|while|do|with|boolean|continue|break|throw|true|false|try|catch|null|typeof|instanceof|return|delete)\\b' ]= function( content ){
		content= content || ''
		return wrapKeyword( content )
	}
}), TagWrapper( 'i:hlight-js' ) )