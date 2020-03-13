/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Popconfirm, Button } from 'antd';
import { connect } from 'react-redux';
import { unlockUser } from './redux/actions'

class UnlockUser extends React.Component {
    render() {
        var raz = {
            marginLeft: '5px'
        };

        const {
            content = {},
            unlockUser,
            blockuser
        } = this.props

        if (blockuser.indexOf(content.id - 1) != -1) {
            return (
                <Popconfirm
                    title="Вы уверены что хотите разблокировать пользователя?"
                    onConfirm={() => unlockUser(content.id - 1)}
                    okText="Да"
                    cancelText="Нет"
                >
                    <Button type='primary' style={raz} > Разблокировать пользователя </Button>
                </Popconfirm>
            )
        } else {
            return (
                <Popconfirm
                    title="Вы уверены что хотите разблокировать пользователя?"
                    onConfirm={() => unlockUser(content.id - 1)}
                    okText="Да"
                    cancelText="Нет"
                >
                    <Button type='primary' style={raz} disabled> Разблокировать пользователя </Button>
                </Popconfirm>
            )
        }       
    }

};

const mapStateToProps = state => {
    return {
        visible: state.modal.visible,
        content: state.modal.content,
        blockuser: state.modal.blockUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unlockUser: (record) => {
            let action = unlockUser(record)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnlockUser)
