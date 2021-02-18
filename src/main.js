import React,{ useState } from 'react'
import { Layout, Menu, Avatar, Modal} from 'antd'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	MailOutlined,
} from '@ant-design/icons'
import TablePage from './tablePage'
import ChartPage from './chartPage'
import ArticlePage from './articlePage'
import 'antd/dist/antd.css'

const { Header, Sider, Content} = Layout 
const { SubMenu } = Menu

const Main = ()=> {
	const [collapsed,setCollapsed] = useState(true)
	const []
	const toggle = ()=>{
		setCollapsed(!collapsed)
	}
	return <Router basename='/mangement'>
		<Layout style={{minHeight: '100vh'}}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div style={{
					height: '80px',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems:'center'
				}}>
					<Avatar size={58} icon={<UserOutlined />} style={{cursor: 'pointer'}}/>
				</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<SubMenu
						key="sub1"
						title={
							<span>
								<MailOutlined />
								<span>管理</span>
							</span>
						}
					>
						<Menu.Item key="1">
							<Link to='/'>表格</Link>
						</Menu.Item>
					</SubMenu>
					<SubMenu
						key="sub2"
						title={
							<span>
								<MailOutlined />
								<span>统计</span>
							</span>
						}
					>
						<Menu.Item key="2">
							<Link to='/chart'>图表</Link>
						</Menu.Item>
					</SubMenu>
					<SubMenu
						key="sub3"
						title={
							<span>
								<MailOutlined />
								<span>设置</span>
							</span>
						}
					>
						<Menu.Item key="3">
							<Link to='/article'>文章</Link>
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ height:'80px',padding: 0 }}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: toggle,
						style: {
							fontSize: '24px',
							lineHeight: '80px',
							padding:'0 24px',
							cursor: 'pointer',
							transition: 'color 0.3s',
							color: 'white'
						}
					})}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}
				>
					<Switch>
						<Route path='/' exact><TablePage/></Route>
						<Route path='/article' type='add'><ArticlePage/></Route>
						<Route path='/chart'><ChartPage/></Route>
					</Switch>
				</Content>
			</Layout>
		</Layout>
	</Router>
}

export default Main
