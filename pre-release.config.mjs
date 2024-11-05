import config from 'semantic-release-preconfigured-conventional-commits'  with { type: "json" };

config.plugins.push(
    [
        "@semantic-release/exec",
        {
          "verifyReleaseCmd": "echo ${nextRelease.version} > .next-version",
        }
    ]
)

export default config;
