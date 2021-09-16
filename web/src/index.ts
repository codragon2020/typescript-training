// import axios from 'axios'

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// })

// axios.delete('http://localhost:3000/users/1')


import { User } from "./models/User";

const user = new User({ name: 'new record', age: 0 })

user.events.on('change', () => {
    console.log('change!')
})

user.events.trigger('change')

// user.on('change', () => {
//     console.log('Change #1')
// })
// user.on('change', () => {
//     console.log('Change #2')
// })
// user.on('save', () => {
//     console.log('Save was triggered')
// })

// user.trigger('change')