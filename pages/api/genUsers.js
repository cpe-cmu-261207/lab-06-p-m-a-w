// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

export default async function handler(req, res) {
  if (req.query['count'] === undefined)
    return res.status(400).json({ error: 'no request parameters' });
  const resp = await axios.get(`https://randomuser.me/api/?results=${req.query['count']}`);
  const out = resp.data.results.map(result => {
    return {
      image: result.picture.large,
      name: `${result.name.first} ${result.name.last}`,
      email: result.email,
      address: `${result.location.city} ${result.location.state} ${result.location.country} ${result.location.postcode}`
    }
  })
  return res.status(200).json(out);
}
