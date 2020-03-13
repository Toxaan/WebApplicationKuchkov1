import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { showModalAction, blockedUsers } from './redux/actions'

class Users extends React.Component {
    state = {
        columns: [
            {
                title: 'Ид юзера',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Имя пользователя',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'email',
                dataIndex: 'email',
                key: 'email'
            }
        ],
        data: []
    }

    onClick = (e, record) => {
        this.props.triggerModal(record)
    }

    async componentDidMount() {
        const response = await fetch('api/Users/GetUsersList');
        const users = await response.json();

        var arrBlUs = [];
        users.forEach((e, i) => {
            if (e.blocked) {
                arrBlUs.push(i);
            }
        });

        this.props.blockedUsers(arrBlUs);

        this.setState(() => {
            return {
                data: users
            }
        });
    }

    render() {
        const {
            columns,
            data
        } = this.state;

        return <div>
            <Table onRow={(record, rowIndex) => {
                return {
                    onClick: event => { this.onClick(event, record) }
                };
            }}
                rowClassName={(record, rowIndex) => {
                    if(this.props.blockUser.indexOf(rowIndex) !== -1)
                        {return 'blockUser'}
                }}
                columns={columns} dataSource={data} rowKey="id"/>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        blockUser: state.modal.blockUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerModal: (record) => {
            let action = showModalAction(record)
            dispatch(action)
        },
        blockedUsers: (arr) => {
            let action2 = blockedUsers(arr)
            dispatch(action2)
        }
    }
}

const ConnectedUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
export default ConnectedUsers
