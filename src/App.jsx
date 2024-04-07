//style
import './App.css'
import { useState } from 'react'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'
import NewUserFrom from './components/newuser/NewUserFrom'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState ([])

  //delete users
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Navbar usersLength={users.length}/>
        <main>
          <div className='no-users'>
            {users.length === 0 && <h2>No Users</h2>}
          </div>
          <UserList users={users} deleteUser={deleteUser}/>
        </main>
        {showModal && <NewUserFrom/>}
        <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      <Footer/>
    </div>
  )
}

export default App


//   id: 1,
//   image: 'https://picsum.photos/400?random=1',
//   firstName: 'Jasur',
//   lastName: 'Haydarov',
//   age: 18,
//   from: 'Uzbekistan',
//   job: 'Front End Developer',
//   gender: 'Male',