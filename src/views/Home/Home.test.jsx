import { render, screen } from '@testing-library/react'
import fetchUser from '../../services/user'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const { name, color, motto, likes } = user

  const pHeader = await screen.findByAltText('header')
  expect(pHeader).toBeInTheDocument()

  const userName = screen.getByText(/vonta/i)
  expect(userName).toBeInTheDocument()

  const userMotto = screen.getByText(motto)
  expect(userMotto).toBeInTheDocument()

  const interestHeading = screen.getByRole('heading', { name: /interests/i })
  expect(interestHeading).toBeInTheDocument()

  const userAvatar = screen.getByAltText(/avatar/i)
  expect(userAvatar).toBeInTheDocument()

  const userHeaderImage = screen.getByAltText(/header/i)
  expect(userHeaderImage).toBeInTheDocument()

  const userLikes = screen.getByRole('list')
  expect(userLikes.children.length).toEqual(user.likes.length)

  screen.debug()
})

test('checks the shape of the user object', async () => {
  render(<Home user={user} />)
  expect(user).toHaveProperty('id')
  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('avatar')
  expect(user).toHaveProperty('header')
  expect(user).toHaveProperty('likes')
  expect(user).toHaveProperty('motto')
  expect(user).toHaveProperty('color')
})
