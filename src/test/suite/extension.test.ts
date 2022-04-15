import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as dictionary from '../../dictionary';

const allLettersInput:string = "abcdefghijklmnopqrstuvwxyz _.\\,/*#%<>!?\';\":-+=(){}[]1234567890";
//    ###    ########   ######  ########  ######## ########  ######   ##     ## ####       ## ##     ## ##       ##     ## ##    ##  #######  ########   #######   ########   ######  ######## ##     ## ##     ## ##      ## ##      ## ##    ## ######### 
//   ## ##   ##     ## ##    ## ##     ## ##       ##       ##    ##  ##     ##  ##        ## ##    ##  ##       ###   ### ###   ## ##     ## ##     ## ##     ##  ##     ## ##    ##    ##    ##     ## ##     ## ##  ##  ##  ##    ##   ##  ##         ## 
//  ##   ##  ##     ## ##       ##     ## ##       ##       ##        ##     ##  ##        ## ##   ##   ##       #### #### ####  ## ##     ## ##     ## ##     ##  ##     ## ##          ##    ##     ## ##     ## ##  ##  ##   ##  ##     ####        ##   
// ##     ## ########  ##       ##     ## ######   ######   ##   #### #########  ##        ## #####     ##       ## ### ## ## ## ## ##     ## ########  ##     ##  ########   ######     ##    ##     ## ##     ## ##  ##  ##    ####       ##       ##     
// ######### ##     ## ##       ##     ## ##       ##       ##    ##  ##     ##  ##  ##    ## ##   ##   ##       ##     ## ##  #### ##     ## ##        ##  ## ##  ##   ##         ##    ##    ##     ##  ##   ##  ##  ##  ##   ##  ##      ##      ##      
// ##     ## ##     ## ##    ## ##     ## ##       ##       ##    ##  ##     ##  ##  ##    ## ##    ##  ##       ##     ## ##   ### ##     ## ##        ##    ###  ##    ##  ##    ##    ##    ##     ##   ## ##   ##  ##  ##  ##    ##     ##    ##        
// ##     ## ########   ######  ########  ######## ##        ######   ##     ## ####  ######  ##     ## ######## ##     ## ##    ##  #######  ##         ###### ## ##     ##  ######     ##     #######     ###     ###  ###  ##      ##    ##    ######### 

//   ###    #####   ########      ####   #########  #######  #########  #######   #######   #######  
// ## ##  ##     ##        ##   ##  ##   ##        ##     ##        ## ##     ## ##     ## ###    ## 
//    ##         ##        ##  #    ##   ##        ##             ##   ##     ## ##     ## ## #   ## 
//    ##       ##    #######  ##    ##   ########  ## ### #     ##       #####    # ### ## ##  #  ## 
//    ##    ##             ## ##########        ## ##     ##   ##      ##     ##        ## ##   # ## 
//    ##  ##               ##       ##          ## ##     ##  ##       ##     ## ##     ## ##    ### 
//   #### ######### ########        ##   #######    #######  ##         #######   #######   #######  
//

//                    ##                  ## # ## #   ##     ##     ####      ##               ###   #######   ##      ## ##                     ##                  ### ###     #### ####   #### #### 
//                     ##                ##   ####    ##     ##     ####    ##       ## ##     ###  ##     ##  ## ###  ## ## ###                 ##                 ##     ##   ##       ##  ##     ## 
//                      ##              ##   # ## # #############         ##       ##     ##   ###         ##     ###        ###                 ##      ######### ##       ##   ##     ##   ##     ## 
//                       ##            ##             ##     ##         ##       ##         ## ###    #####                       ######### ############           ##       ## ##        ### ##     ## 
//                        ##          ##            #############      ##          ##     ##                                                     ##      ######### ##       ##   ##     ##   ##     ## 
//               ###       ##  ###   ##               ##     ##      ##     ####     ## ##     ###    ###         ###        ###                 ##                 ##     ##   ##       ##  ##     ## 
//     ######### ###        ## ##   ##                ##     ##    ##       ####               ###    ###         ##         ###                 ##                  ### ###     #### ####   #### #### 


suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Size Test', () => {
		const converter = new dictionary.Dictionary();
		assert.strictEqual(converter.letters.size, 64);
	});

	test('All Letters Test Row 1', () => {
		const converter = new dictionary.Dictionary();
		let converted = converter.convert(allLettersInput);
		assert.strictEqual(converted.ignoredCharacters, 0);
		assert.strictEqual(converted.isValidOutput, true);
		assert.notStrictEqual(converted.output.indexOf("   ###    ########   ######  ########  ######## ########  ######   ##     ## ####       ## ##     ## ##       ##     ## ##    ##  #######  ########   #######   ########   ######  ######## ##     ## ##     ## ##      ## ##      ## ##    ## ######### "), -1);
	});

	test('All Numbers Test Row 5', () => {
		const converter = new dictionary.Dictionary();
		let converted = converter.convert(allLettersInput);
		assert.strictEqual(converted.ignoredCharacters, 0);
		assert.strictEqual(converted.isValidOutput, true);
		assert.notStrictEqual(converted.output.indexOf("   ##    ##             ## ##########        ## ##     ##   ##      ##     ##        ## ##   # ## "), -1);
	});

	test('All Symbols Test Row 7', () => {
		const converter = new dictionary.Dictionary();
		let converted = converter.convert(allLettersInput);
		assert.strictEqual(converted.ignoredCharacters, 0);
		assert.strictEqual(converted.isValidOutput, true);
		assert.notStrictEqual(converted.output.indexOf("     ######### ###        ## ##   ##                ##     ##    ##       ####               ###    ###         ##         ###                 ##                  ### ###     #### ####   #### #### "), -1);
	});
});
