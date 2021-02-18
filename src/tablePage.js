/* eslint-disable no-unused-vars */
import React from 'react'
import { Table, Space, Input, Button } from 'antd'

const { Search } = Input
const TablePage = props => {

	const columns=[
		{
			title: 'id',
			dataIndex: 'id',
			key:'id'
		},{
			title: '标题',
			dataIndex: 'title',
			key:'title'
		},{
			title: '日期',
			dataIndex: 'date',
			key:'date'
		},{
			title: ' 操作',
			// eslint-disable-next-line react/display-name
			render : ()=>(<Space size="middle">
				<a>修改</a>
				<a>删除</a>
			</Space>)
		}
	]
	const dataSource=[]

	return <div>
		<div style={{
			marginBottom: '20px'
		}}>
			<Search
				placeholder="按标题搜索"
				enterButton="搜索"
				size="large"
				onSearch={value => console.log(value)}
				style={{
					width: '400px'
				}}
			/>
			<Button type='primary' style={{marginLeft: '20px',width: '68px',height: '40px'}}>增加</Button>
		</div>
		<Table columns={columns} dataSource={dataSource}></Table>
	</div>
}

export default TablePage