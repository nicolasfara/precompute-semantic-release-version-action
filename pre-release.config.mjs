import baseReleaseConfig from 'baseReleaseConfig'

baseReleaseConfig.plugins.push(
    [
        "@semantic-release/exec",
        {
          "verifyReleaseCmd": "echo ${nextRelease.version} > .next-version",
        }
    ]
)

export default baseReleaseConfig;
