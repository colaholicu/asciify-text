// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as dictionary from './dictionary';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('asciify-text.convertSelection', () => {
		// The code you place here will be executed every time your command is executed
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const converter = new dictionary.Dictionary();

			// Get the word within the selection
			const selectedText = document.getText(selection);
			if (selectedText.length === 0) {
				vscode.window.showInformationMessage("No text selected.");
				return;
			}

			const result = converter.convert(selectedText);			
			const ignoredCharacters = result.ignoredCharacters;
			if ((ignoredCharacters > 0) && !result.isValidOutput) {
				vscode.window.showErrorMessage("Text couldn't be converted! It contains only unsupported characters.");
				return;
			}
			else if (ignoredCharacters > 0) {
				vscode.window.showWarningMessage("Unsupported characters were removed.");
			}

			editor.edit(editBuilder => {
				editBuilder.replace(selection, result.output);
			});
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
