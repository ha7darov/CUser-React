//style
import './App.css'
import { useState } from 'react'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'

function App() {
  const [users, setUsers] = useState ([{
    id: 1,
    image: 'https://picsum.photos/400?random=1',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  },
  {
    id: 2,
    image: 'https://picsum.photos/400?random=2',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  },
  {
    id: 3,
    image: 'https://picsum.photos/400?random=3',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  },
  {
    id: 4,
    image: 'https://picsum.photos/400?random=4',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  },
  {
    id: 5,
    image: 'https://picsum.photos/400?random=5',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  }
  ,{
    id: 6,
    image: 'https://picsum.photos/400?random=6',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  }
  ,{
    id: 7,
    image: 'https://picsum.photos/400?random=7',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  },{
    id: 8,
    image: 'https://picsum.photos/400?random=8',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  },{
    id: 9,
    image: 'https://picsum.photos/400?random=9',
    firstName: 'Jasur',
    lastName: 'Haydarov',
    age: 18,
    from: 'Uzbekistan',
    job: 'Front End Developer',
    gender: 'Male',
  }
])
  return (
    <div className="App">
      <Navbar usersLength={users.length}/>
        <main>
          <div className='no-users'>
            {users.length === 0 && <h2>No Users</h2>}
          </div>
          <UserList users={users}/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
