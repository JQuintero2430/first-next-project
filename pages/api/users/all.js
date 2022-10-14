export default function users(req, res) {
    return res.status(200).json([{ name: 'John' }, { name: 'Jane' }])
  }