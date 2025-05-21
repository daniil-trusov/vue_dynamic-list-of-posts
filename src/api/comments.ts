import { Comment } from '../utils/types'
import { client } from '../utils/fetchClient'

export const getComments = async (postId): Promise<Comment> => {
  const response = await client.get<Comment>(`/comments?postId=${postId}`)

  return response.data
}

export const addComment = async (postId, name, email, body): Promise<Comment> => {
  const response = await client.post<Comment>(`/comments`, {
    postId,
    name,
    email,
    body,
  })

  return response.data
}

export const deleteComment = async (id) => {
  const response = await client.delete(`/comments/${id}`)

  return response.data
}
