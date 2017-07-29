const fetch = require('node-fetch')

const hoo = async (log, username) => {
  const user = await userInfo(username)
  const starred = await starredInfo(username)
  log(Object.assign(user, starred))
}

const userInfo = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const json = await response.json()
  return {
    login: json.login,
    name: json.name,
    location: json.location,
    bio: json.bio,
    company: json.company,
    followers: json.followers,
    following: json.following,
    gists: json.public_gists,
    repos: json.public_repos,
    profileUrl: json.html_url,
    gistsUrl: `https://gist.github.com/${username}`,
  }
}

const starredInfo = async username => {
  const response = await fetch(
    `https://api.github.com/users/${username}/starred`
  )
  const json = await response.json()
  return {
    lastStarred: json.filter((_, i) => i < 4).map(star => star.full_name),
  }
}

module.exports = {
  hoo,
}
