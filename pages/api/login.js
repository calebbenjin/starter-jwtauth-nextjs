import { API_URL} from '../config/index'

export default async (req, res) => {
  // checking if is a post request
  if(req.method === 'POST') {
    // destructure email, and password
    const { email, password } = req.body

    // Making a post request to hit our backend api-endpoint
    const apiRes = await fetch(`${API_URL}/your url of choice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await apiRes.json()

    if(apiRes.ok) {
      // @todo - Set Cookie

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', String(apiRes.data.token), {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/'
        })
      )

      res.status(200).json({user: data.user})
    } else {
      res.status(data.statusCode).json({message: data.message})
    }

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}