# Persistent Zoom for Visual Studio Code

> With Visual Studio Code v0.10.6 this extension is deprecated in favor of the built in [persisted zoom level setting](https://code.visualstudio.com/Updates#_persisted-zoom-level). 

>Simply replace `vscodeZoom.level` with `window.zoomLevel`!

---------------------------------------------------
The Persistent Zoom extension will set the Zoom level at startup.

## Installation and Usage
The Persistent Zoom extension will load automatically after VS Code initializes.  

## Configuring Persistent Zoom

The Zoom level, from 0 (none, the default) to 5 (XXL!)

``` javascript
"vscodeZoom.level": number
```

## Development
The Persistent Zoom extension is a great way to learn how to create extensions for VS Code. 

	git clone https://github.com/microsoft/vscode-zoom
	cd vscode-zoom
	npm install
	code .

Enjoy!

# License
[MIT](LICENSE)