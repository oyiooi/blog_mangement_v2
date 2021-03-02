import React,{useState} from 'react'
import { Card } from 'antd'

const ChartPage = props => {
	const [s,setS] = useState(true)
	return <div 
		style={{
			width: '100%',
			height: '300px',
			backgroundColor: 'gray'
		}}
		onDrop={e => {
			e.preventDefault()
			console.log('dddrops')
			setS(true)
		}}
		onDragOver={e => e.preventDefault()}
	><div
			onDragStart={e => {e.dataTransfer.dropEffect = 'copy'}}
			draggable='true'
		>SJAFLSDFKASKDF</div>
	</div>
}

export default ChartPage