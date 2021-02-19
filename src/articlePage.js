import React, {createRef,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Form,Card, Breadcrumb,Input,Spin, DatePicker, Select, Row, Col, InputNumber, Button } from 'antd'
import 	QuillEditor from './component/editor/' // 编辑器

const { Option } = Select
const keywords = [
	{
		value: 'React',
		label: 'React'
	},{
		value: 'ES',
		label: 'ES'
	},{
		value: 'CSS',
		label: 'CSS'
	},{
		value: 'webpack',
		label: 'webpack'
	},{
		value: 'Express',
		label: 'Express'
	},{
		value: 'mongoDB',
		label: 'mongoDB'
	},{
		value: 'Web API',
		label: 'Web API'
	}
]
const classification = [
	{
		value: 'Html',
		label: 'Html'
	},{
		value: 'CSS',
		label: 'CSS'
	},{
		value: 'ES',
		label: 'ES'
	},{
		value: 'backend',
		label: 'backend'
	},{
		value: 'automatization',
		label: '自动化'
	},{
		value: 'frame',
		label: '框架'
	}
]
const quillref = createRef()
const formref = createRef()
const gridStyle={width: '100%'}

const ArticlePage = props =>{
	const { type } = props
	const [spinning, setSpinning] = useState(false)

	// 提交
	const submit = ()=>{
		const { validateFields } = formref.current
		const { getContents } = quillref.current.quill
		validateFields()
			.then(values=>{
				const text = getContents()
				values.article = text
				fetch('',{
					method: type==='edit'?'POST':'PUT',
					body: JSON.stringify(values)
				})
			})
		
	}

	// componentDidMount
	useEffect(()=>{
		if(type==='edit'){
			setSpinning(true)
			fetch('/',{
				method: 'GET',
			}).then(res=>{
				if(res.ok){
					return res.json()
				}else{
					throw new Error(res.status)
				}
			},() =>new Error('reject'))
				.then(res=>{
					setSpinning(false)
					console.log(res)
				}).catch(error=>{
					console.log(error.message)
					setSpinning(false)
				})
		}
	},[])
	return <Spin spinning={spinning}>
		<Breadcrumb>
			<Breadcrumb.Item><Link to='/mangement'>Home</Link></Breadcrumb.Item>
			<Breadcrumb.Item>
				Application Center
			</Breadcrumb.Item>
		</Breadcrumb>
		<Form layout= 'horizontal'
			ref={formref}
			style={{
				marginTop: '20px'
			}}>
			<Card title='增加'>
				<Card.Grid style={gridStyle}>
					<Row gutter={16}>
						<Col flex='300px'>
							<Form.Item name='title' label={<div style={{width: '56px',display: 'flex',flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}><span>标</span><span>题</span></div>} >
								<Input placeholder='title'></Input>             
							</Form.Item>
						</Col>
						<Col flex='300px'>
							<Form.Item name='author' label={<div style={{width: '56px',display: 'flex',flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}><span>作</span><span>者</span></div>}>
								<Input placeholder='author'></Input>
							</Form.Item>
						</Col>
						<Col flex='300px'>
							<Form.Item label={<div style={{width: '56px',display: 'flex',flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}><span>日</span><span>期</span></div>} name='date' >
								<DatePicker style={{width: '100%'}}></DatePicker>
							</Form.Item>
						</Col>
						<Col flex='300px'>
							<Form.Item label={<div style={{width: '56px',display: 'flex',flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}><span>关</span><span>键</span><span>词</span></div>} name='keywords' >
								<Select 
									mode='multiple'
									placeholder='select key words'
									optionLabelProp='label'
								>
									{
										keywords.map(item=><Option  key={item.value} value={item.value}>{item.label}</Option>)
									}	
								</Select>             
							</Form.Item>
						</Col>
						<Col flex='300px'>
							<Form.Item label={<div style={{width: '56px',display: 'flex',flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}><span>分</span><span>类</span></div>} name='classification' >
								<Select>
									{
										classification.map(item=><Option  key={item.value} value={item.value}>{item.label}</Option>)
									}
								</Select>                           
							</Form.Item>
						</Col>
						<Col flex='300px'>
							<Form.Item name='like' label={<div style={{width: '56px',display: 'flex',flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}><span>赞</span></div>}>
								<InputNumber disabled={true} style={{width: '50px'}}></InputNumber>
							</Form.Item>
						</Col>				
					</Row>
				</Card.Grid>
				<Card.Grid style={gridStyle}>
					<Row>
						<Col span={24}>
							<div style={{paddingBottom: '2px'}}>
								<QuillEditor ref={quillref}/>
							</div>
						</Col>
					</Row>
				</Card.Grid>
				<Card.Grid style={gridStyle} hoverable={false}>		
					<div style={{textAlign: 'center'}}>
						<Button type='primary' htmlType='submit' onClick={()=>{
							console.log(quillref.current.quill.getContents())
						}}>保存</Button>
					</div>
				</Card.Grid>	
			</Card>
		</Form>
	</Spin>
}

ArticlePage.propTypes = {
	type: PropTypes.string.isRequired
}

export default ArticlePage