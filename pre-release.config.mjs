const baseConfigFile = process.env.baseConfigFile

import baseReleaseConfig from baseConfigFile

baseReleaseConfig.plugins.push(
    [
        "@semantic-release/exec",
        {
          "verifyReleaseCmd": "echo ${nextRelease.version} > .next-version",
        }
    ]
)

export default baseReleaseConfig;
