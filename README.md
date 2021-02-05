# Create Version File Action

A GitHub action which generates a static version file with environment, version, and last commit properties at the given output directory.

## Inputs
### `environment`
**REQUIRED** The name of the deployment environment.

### `version`
**REQUIRED** The version number of the current release.

## Outputs
None.

## Example usage:

```
uses: switcherstudio/create-version-file@master
with:
  environment: 'dev'
  version: '1.0'
```
