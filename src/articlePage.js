import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Breadcrumb,Input, DatePicker, Select, Row, Col, InputNumber, Button } from 'antd'
import Editor from './component/editor/' // 编辑器

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
const ArticlePage = props => {
	return <>
		<Breadcrumb>
			<Breadcrumb.Item><Link>Home</Link></Breadcrumb.Item>
			<Breadcrumb.Item>
				Application Center
			</Breadcrumb.Item>
		</Breadcrumb>
		<Form layout= 'horizontal'
			colon={false}
			style={{
				marginTop: '20px'
			}}>
			
			<Row gutter={16}>
				<Col span={24}>
					<Form.Item name='title' label='标题' labelCol={{span: 2,push: 6}} wrapperCol={{span: 10,push: 6}}>
						<Input placeholder='title'></Input>             
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item name='author' label='作者' labelCol={{span: 4,push: 6}} wrapperCol={{span: 14,push: 6}}>
						<Input placeholder='author'></Input>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='日期' name='date' labelAlign='left'  labelCol={{span: 4,push: 18}} wrapperCol={{span: 14}}>
						<DatePicker style={{width: '100%'}}></DatePicker>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='关键词' name='keywords' labelCol={{span: 4,push: 6}} wrapperCol={{span: 14,push: 6}}>
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
				<Col span={12}>
					<Form.Item label='分类' name='classification' labelAlign='left' labelCol={{span: 4,push: 18}} wrapperCol={{span: 14}}>
						<Select>
							{
								classification.map(item=><Option  key={item.value} value={item.value}>{item.label}</Option>)
							}
						</Select>                           
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item name='like' label='赞' labelCol={{span: 1,push: 11}} wrapperCol={{span: 1,push: 11}}>
						<InputNumber disabled={true}></InputNumber>
					</Form.Item>
				</Col>				
			</Row>
			<Row>
				<Col span={24}>
					<Editor />
				</Col>
			</Row>
			<Form.Item style={{textAlign: 'center'}}>
				<Button type='primary' style={{marginBottom: '20px'}} htmlType='submit'>保存</Button>
			</Form.Item>
		</Form>
	</>
}

export default ArticlePage