import config from 'semantic-release-preconfigured-conventional-commits'

config.plugins.push(
    [
        "@semantic-release/exec",
        {
          "verifyReleaseCmd": "echo ${nextRelease.version} > .next-version",
        }
    ]
)

export default config;
