# nativescript-swift-example
Simple example that uses a swift library in a NativeScript project

To setup :

1. Add iOS platform
2. Add podfile under platforms/ios with the followin content
```
    source 'https://github.com/CocoaPods/Specs.git'
    use_frameworks!  
    platform :ios, '8.1'
    pod 'Charts'
```
