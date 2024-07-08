import config from 'semantic-release-preconfigured-conventional-commits';
config.plugins.push(
  "@semantic-release/github",
  "@semantic-release/git",
)

export default config;
