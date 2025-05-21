import { User } from '../utils/types'
import { client } from '../utils/fetchClient'

export const getUser = async (email): Promise<User> => {
  const response = await client.get(`/users?email=${email}`)

  return response.data
}

export const createUser = async (email, name): Promise<User> => {
  const response = await client.post('/users', {
    email,
    name,
  })

  return response.data
}
