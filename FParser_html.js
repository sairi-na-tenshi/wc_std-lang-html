with( FParser ){

	wrapTag= FWrapper( 'std:lang-html-tag' )
	wrapTagName= FWrapper( 'std:lang-html-tag-name' )
	wrapAttrs= FWrapper( 'std:lang-html-attrs' )
	wrapAttrName= FWrapper( 'std:lang-html-attr-name' )
	wrapAttrValue= FWrapper( 'std:lang-html-attr-value' )
	wrapComment= FWrapper( 'std:lang-html-comment' )
	wrapSGML= FWrapper( 'std:lang-html-sgml' )

	lang.html_content= FParser( new function(){
		
		this.comment=
		{	regexp: /(<!--[\s\S]*?-->)/
		,	handler: function( content ){
				return wrapComment( content )
			}
		}
		
		this.sgml=
		{	regexp: /(<![\s\S]*?>)/
		,	handler: function( content ){
				return wrapSGML( content )
			}
		}
		
		this.tag=
		{	regexp: /(<\/?)([a-zA-Z][\w:-]*)([\s\S]*?)(>)/
		,	handler: function( prefix, tagName, attrs, postfix ){
				tagName= wrapTagName( tagName )
				attrs= wrapAttrs( lang.html_attrs( attrs ) )
				return wrapTag([ prefix, tagName, attrs, postfix ])
			}
		}

	})

	lang.html_attrs= FParser( new function(){
		
		this.attr=
		{	regexp: / ([a-zA-Z][\w:-]+)(=")([\s\S]*?)(")/
		,	handler: function( name, sep, value, postfix ){
				name= wrapAttrName( name )
				value= wrapAttrValue( value )
				return [ ' ', name, sep, value, postfix ]
			}
		}

	})

	lang.html= FPipe( lang.html_content, FWrapper( 'std:lang-html' ) )

}
