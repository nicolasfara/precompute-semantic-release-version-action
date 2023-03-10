const baseConfigFile = process.env.baseConfigFile

const baseReleaseConfig = require(baseConfigFile)

module.exports = {
    ...baseReleaseConfig,
    skipTag: true,
    plugins: [
        ...baseReleaseConfig.plugins,
        [
            "@semantic-release/exec",
            {
              "verifyReleaseCmd": "echo ${nextRelease.version} > .next-version",
            }
        ]
    ]
}