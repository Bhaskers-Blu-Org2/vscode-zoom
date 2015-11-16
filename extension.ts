// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("vscodeZoom");

	if (config) {
		if (config.get("enable", false)) {
			let lvl = config.get("level", 0);
			if (lvl > 10) lvl = 10;
			if (lvl < 0) lvl = 0;
			for (let i = 0; i < lvl; i++) {
				vscode.commands.executeCommand("workbench.action.zoomIn");
			}
		}
	}
}