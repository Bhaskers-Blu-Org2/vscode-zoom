# Persistent Zoom for Visual Studio Code

The Persistent Zoom extension will set the Zoom level at startup.

# Installation and Usage
The Persistent Zoom extension will load automatically after VS Code
initializes.  

# Configuring Persistent Zoom

Enable or disable the Persistent Zoom extension
``` json
"vscodeZoom.enable": boolean
```

The Zoom level, from 0 (none, the default) to 5 (XXL!)
``` json				
"vscodeZoom.level": number
```
#Development
The Persistent Zoom extension is a great way to learn how to create extensions for VS Code. 

``` bash
git clone https://github.com/microsoft/vscode-zoom
cd vscode-zoom
npm install
code .
```
Enjoy!

# License
[MIT](LICENSE)