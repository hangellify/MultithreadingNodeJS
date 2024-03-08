import bcrypt from "bcrypt";

import { PASSWORD, SALT_ROUNDS } from '../constants.js'

export const getAsyncEncryptData = async() => {
    const hashedData = await Promise.all([
        bcrypt.hash(PASSWORD + `${new Date().getTime()}_0`, SALT_ROUNDS),
        bcrypt.hash(PASSWORD + `${new Date().getTime()}_1`, SALT_ROUNDS),
        bcrypt.hash(PASSWORD + `${new Date().getTime()}_2`, SALT_ROUNDS),
        bcrypt.hash(PASSWORD + `${new Date().getTime()}_3`, SALT_ROUNDS),
        bcrypt.hash(PASSWORD + `${new Date().getTime()}_4`, SALT_ROUNDS),
        bcrypt.hash(PASSWORD + `${new Date().getTime()}_5`, SALT_ROUNDS),
    ])
   
    return hashedData
}

export const getSyncEncryptData = () => {
     const hashedData = [
        bcrypt.hashSync(PASSWORD + `${new Date().getTime()}_0`, SALT_ROUNDS),
        bcrypt.hashSync(PASSWORD + `${new Date().getTime()}_1`, SALT_ROUNDS),
        bcrypt.hashSync(PASSWORD + `${new Date().getTime()}_2`, SALT_ROUNDS),
        bcrypt.hashSync(PASSWORD + `${new Date().getTime()}_3`, SALT_ROUNDS),
        bcrypt.hashSync(PASSWORD + `${new Date().getTime()}_4`, SALT_ROUNDS),
        bcrypt.hashSync(PASSWORD + `${new Date().getTime()}_5`, SALT_ROUNDS),
    ]

    return hashedData
}