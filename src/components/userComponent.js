import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log('User component yüklendi')

let logger1 = new MongoLogger()

let userService = new UserService(logger1)

let user1 = new User(1,'Aynur','Erkalayci','İstanbul')
let user2 = new User(2,'Burcu','Baş','İstanbul')
userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(2))







let customer = {id:1,firstName:'Aynur'}
//sonradan derğ ekleme = prototyping
customer.lastName = 'Erkalaycı'

console.log(customer.lastName)