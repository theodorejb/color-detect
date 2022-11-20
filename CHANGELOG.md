# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [2.0.0] - 2022-11-20
### Added
- `colorLuminance()` function which implements the W3C algorithm to determine a color's relative luminance.

### Changed
- Renamed `colorToRgbaArray()` to simply `colorToRgba()`.

### Fixed
- `isLightColor()` now correctly follows W3C algorithm for comparing color contrast.


## [1.0.1] - 2022-04-03
### Changed
- Updated dev dependencies and switched to Chai for native testing of ES module.


## [1.0.0] - 2018-03-15
- Initial release

[Unreleased]: https://github.com/theodorejb/color-detect/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/theodorejb/color-detect/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/theodorejb/color-detect/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/theodorejb/color-detect/tree/v1.0.0
