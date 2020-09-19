import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'

class Editor extends Component {
	render() {
		return (
			<div className="x5_Editor">
				<CKEditor
					editor={ BalloonEditor }
					data="<p>Hello ,Let's go!</p>"
					config={{
						balloonToolbar: [ 'bold', 'italic', 'undo', 'redo' ]
					}}
					onInit={ editor => {
						// You can store the "editor" and use when it is needed.
						console.log( 'Editor is ready to use!', editor )
					} }
					onChange={ ( event, editor ) => {
						const data = editor.getData()
						console.log( { event, editor, data } )
					} }
					onBlur={ ( event, editor ) => {
						console.log( 'Blur.', editor )
					} }
					onFocus={ ( event, editor ) => {
						console.log( 'Focus.', editor )
					} }
				/>
			</div>
		)
	}
}

export default Editor