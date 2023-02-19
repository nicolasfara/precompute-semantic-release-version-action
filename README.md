# Pre-compute the next version with semantic-release

A composite action that pre-computes the next version of a project using [`semantic-release`](https://github.com/semantic-release/semantic-release).  
This action **must** be used in a repository with semantic-release configured.

> Due to a limitation in semantic-release configuration, this action only works if the semantic-release config file is in the format `release.config.js`.
Other formats like `json`, `yaml`, etc. are not compatible with the use of this action.

## Rationale

In some projects, it might be useful to compute the next release version before publishing a release. With semantic-release this operation is not possible out-of-the-box,
and for this reason, this action will do it for you!

## Action usage

| **Inputs** | Description |
|------------|-------------|
| `working-directory` | The path in which the action should runs |
| `github-token` | The token needed by _semantic-release_ to run |

| **Outputs** | Description |
|-------------|-------------|
| `will-release` | Set to `true` if a new release will be triggered. Set to `false` if no release will be triggered. |
| `next-version` | Contains the next version if `will-release` is `true`. Contains an empty string if `will-release` is set to `false`. |

## Example

The following example shows how to use the action.

```yaml
jobs:
  test:
    - name: Checkout repo
      uses: actions/checkout@v3.3.0
    - name: Pre-compute the next version
      id: compute-next-version
      uses: nicolasfara/precompute-semantic-release-version-action@1.0.0
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
    - name: Use the next version
      run: |
        echo "Will release: ${{ steps.compute-next-version.outputs.will-release }}"
        echo "The next version is ${{ steps.compute-next-version.outputs.next-version }}"
```
