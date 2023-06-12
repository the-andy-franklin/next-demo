import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ 
    id: "pizza",
    toppings: ["pizza toppings", "cheese"],
    image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"
  })
}
