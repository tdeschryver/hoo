const listPrint = user =>
  Object.keys(user).reduce(
    (printout, key) => (printout += `${key}: ${user[key]}\n`),
    ''
  )

const prettyPrint = user => `
Info:
  name: ${user.name}
  location: ${user.location}
  company: ${user.company}
  bio: ${user.bio}

Activity:
  last starred: ${user.lastStarred.join(', ')}

Numbers:
  repositories: ${user.repos}
  followers: ${user.followers}
  following: ${user.following}
  gists: ${user.gists}
  
Links:
  profile: ${user.profileUrl}
  gists: ${user.gistsUrl}
`

module.exports = {
  listPrint,
  prettyPrint,
}
