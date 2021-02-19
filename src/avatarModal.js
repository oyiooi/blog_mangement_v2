import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

const AvatarModal = props => {
	const [atrSrc, setatrSrc] = useState(props.atrSrc)

	return <Modal>
        
	</Modal>
}

AvatarModal.propTypes = {
	atrSrc: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
}

export default AvatarModal