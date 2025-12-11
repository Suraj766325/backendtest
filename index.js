require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port=process.env.PORT
const gitData={
  "login": "Suraj766325",
  "id": 155295926,
  "node_id": "U_kgDOCUGgtg",
  "avatar_url": "https://avatars.githubusercontent.com/u/155295926?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Suraj766325",
  "html_url": "https://github.com/Suraj766325",
  "followers_url": "https://api.github.com/users/Suraj766325/followers",
  "following_url": "https://api.github.com/users/Suraj766325/following{/other_user}",
  "gists_url": "https://api.github.com/users/Suraj766325/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Suraj766325/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Suraj766325/subscriptions",
  "organizations_url": "https://api.github.com/users/Suraj766325/orgs",
  "repos_url": "https://api.github.com/users/Suraj766325/repos",
  "events_url": "https://api.github.com/users/Suraj766325/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Suraj766325/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Suraj Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I am still a learner.",
  "twitter_username": null,
  "public_repos": 78,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2023-12-31T09:34:28Z",
  "updated_at": "2025-12-03T14:58:13Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/gitdata',(req,res)=>{
    res.json(gitData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
