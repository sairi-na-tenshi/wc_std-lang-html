with( HLight ) lang.bb= FPipe( FConcurentLang( new function(){

	var wrapGhost= TagWrapper( 'i:hlight-bb-ghost' )

	this[ '(\\[(b)\\])([\\s\\S]*?)(\\[\\/b\\])' ]=
	this[ '(\\[(i)\\])([\\s\\S]*?)(\\[\\/i\\])' ]=
	this[ '(\\[(u)\\])([\\s\\S]*?)(\\[\\/u\\])' ]=
	function( prefix, mode, content, postfix ){
		var tagMod=
		{	b: 'bold'
		,	i: 'italic'
		,	u: 'underline'
		}[ mode ]
		content= TagWrapper( 'i:hlight-bb-' + tagMod )( lang.bb( content ) )
		prefix= wrapGhost( prefix )
		postfix= wrapGhost( postfix )
		return prefix + content + postfix
	}

}), TagWrapper( 'i:hlight-bb' ))