/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Popconfirm, Button } from 'antd';
import { connect } from 'react-redux';
import { blockUser } from './redux/actions'

class BlockUser extends React.Component {
    render () {
        const {
            content = {},
            blockUser,
            zablockuser
        } = this.props

        if (zablockuser.indexOf(content.id - 1) != -1) {
            return (
                <Popconfirm
                    title="Вы уверены что хотите заблокировать пользователя?"
                    onConfirm={() => blockUser(content.id - 1)}
                    okText="Да"
                    cancelText="Нет"
                >
                    <Button type='danger' disabled> Заблокировать пользователя </Button>
                </Popconfirm>
            )
        } else {
            return (
                <Popconfirm
                    title="Вы уверены что хотите заблокировать пользователя?"
                    onConfirm={() => blockUser(content.id - 1)}
                    okText="Да"
                    cancelText="Нет"
                >
                    <Button type='danger' > Заблокировать пользователя </Button>
                </Popconfirm>
            )
        }
    }
    
};

const mapStateToProps = state => {
    return {
        visible: state.modal.visible,
        content: state.modal.content,
        zablockuser: state.modal.blockUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        blockUser: (record) => {
            let action = blockUser(record)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockUser)
