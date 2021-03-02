import React, { Component } from 'react'
import Quill from 'quill'
import './quill.snow.css'

class QuillEditor extends Component {
	constructor(props){
		super(props)
		this.state = {}
		this.quill = null
	}

	componentDidMount(){
		const toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],        // 切换按钮
			['blockquote', 'code-block'],
          
			[{ 'header': 1 }, { 'header': 2 }],               // 用户自定义按钮值
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],      // 上标/下标
			[{ 'indent': '-1'}, { 'indent': '+1' }],          // 减少缩进/缩进
			[{ 'direction': 'rtl' }],                         // 文本下划线
          
			[{ 'size': ['small', false, 'large', 'huge'] }],  // 用户自定义下拉
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
			[{ 'color': [] }, { 'background': [] }],          // 主题默认下拉，使用主题提供的值
			[{ 'font': [] }],
			[{ 'align': [] }],
          
			['clean']                                         // 清除格式
		]
          
		// eslint-disable-next-line no-unused-vars
		this.quill = new Quill('#quill-editor', {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow'
		})
	}
    
	render(){
		return <div id='quill-editor'></div>
	}
    
}

export default QuillEditor