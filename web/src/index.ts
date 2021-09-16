// import axios from 'axios'

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// })

// axios.delete('http://localhost:3000/users/1')


import { User } from "./models/User";

const user = new User({ name: 'no record', age: 10 })

user.save()

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