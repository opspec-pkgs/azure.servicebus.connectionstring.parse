[![Build Status](https://travis-ci.orgicebus.connectionstring.parse.svg?branch=master)](https://travis-ci.orgicebus.connectionstring.parse)

<img src="icon.svg" alt="icon" height="100px">

# Problem statement

parses an azure servicebus connectionstring

# Format

this version of the pkg is in [![opspec 0.1.5](https://img.shields.io/badge/opspec-0.1.5-brightgreen.svg?colorA=6b6b6b&colorB=fc16be)](https://opspec.io/0.1.5/packages.html) format

# Example usage

## Install

```shell
opctl pkg install azure.servicebus.connectionstring.parse#1.0.1
```

## Run

```
opctl run azure.servicebus.connectionstring.parse#1.0.1
```

## Compose

```yaml
op:
pkg: { ref: azure.servicebus.connectionstring.parse#1.0.1 }
inputs:
    connectionString:
outputs:
    endpoint:
    sharedAccessKey:
    sharedAccessKeyName:
```

# Support

join us on
[![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or
[open an issue](https://azure.servicebus.connectionstring.parse/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/master/CONTRIBUTING.md)
