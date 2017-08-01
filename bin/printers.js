'use strict'
const chalk = require('chalk')

const list = user =>
  Object.keys(user).reduce(
    (printout, key) => (printout += `${key}: ${user[key]}\n`),
    '',
  )

const pretty = user => `
${chalk.underline.bold('Info')}:
  name: ${user.name}
  location: ${user.location}
  company: ${user.company}
  bio: ${user.bio}

${chalk.underline.bold('Activity:')}
  last starred: ${user.lastStarred.join(', ')}

${chalk.underline.bold('Numbers:')}
  repositories: ${user.repos}
  followers: ${user.followers}
  following: ${user.following}
  gists: ${user.gists}

${chalk.underline.bold('Links:')}
  profile: ${user.profileUrl}
  gists: ${user.gistsUrl}
`

module.exports = {
  list,
  pretty,
}
