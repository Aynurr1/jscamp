import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log('User component yüklendi')

let logger1 = new MongoLogger()

let userService = new UserService(logger1)

let user1 = new User('Aynur','Erkalayci','İstanbul',22,'12356','customer')
let user2 = new User(2,'Burcu','Baş','İstanbul',24, '12356','customer')
// userService.add(user1)
// userService.add(user2)


//console.log(userService.list())
//console.log(userService.getById(2))







let customer = {id:1,firstName:'Aynur'}
//sonradan derğ ekleme = prototyping
customer.lastName = 'Erkalaycı'

console.log(customer.lastName)

console.log('---------------')
userService.load()

let customerToAdd = new Customer(1,'Aslı','Erk','İstanbul',12)
customerToAdd.type = 'customerr'

userService.add(customerToAdd)
// console.log(userService.customers)
// console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())