import React from 'react'
import { Link } from 'react-router-dom'
import { Form,Card, Breadcrumb,Input, DatePicker, Select, Row, Col, InputNumber, Button } from 'antd'
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
const gridStyle={width: '100%'}
// eslint-disable-next-line no-unused-vars
const ArticlePage = props => {
	return <>
		<Breadcrumb>
			<Breadcrumb.Item><Link>Home</Link></Breadcrumb.Item>
			<Breadcrumb.Item>
				Application Center
			</Breadcrumb.Item>
		</Breadcrumb>
		<Form layout= 'horizontal'
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
							<QuillEditor />
						</Col>
					</Row>
				</Card.Grid>
				<Card.Grid style={gridStyle} hoverable={false}>		
					<div style={{textAlign: 'center'}}>
						<Button type='primary' htmlType='submit'>保存</Button>
					</div>
				</Card.Grid>	
			</Card>
		</Form>
	</>
}

export default ArticlePage