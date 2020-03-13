import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Users from './UsersTable'
import Modal from './Modal'

class App extends React.Component {
  state = {
    isLoggedIn: false,
    modalVisible: false
  }

  triggerModal = (e, record = null) => {
    this.setState({
      userData: record
    });
  };

  blockUser = (content) => {
    alert(`Пользователь с ID = ${content.id} заблокирован`)
  }

  render() {

    return (
      <div className="App">
        <Modal />
        <Users blockedUsers={this.state.blockedUsers} />
      </div>
    );
  }
}

export default App;
