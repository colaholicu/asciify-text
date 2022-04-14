const a: any[] = [
	'   ###    ', 
	'  ## ##   ', 
	' ##   ##  ', 
	'##     ## ', 
	'######### ', 
	'##     ## ', 
	'##     ## '
];

const b: any[] = [
	'########  ',
	'##     ## ',
	'##     ## ',
	'########  ',
	'##     ## ',
	'##     ## ',
	'########  ',
];

const c: any[] = [
	' ######  ',
	'##    ## ',
	'##       ',
	'##       ',
	'##       ',
	'##    ## ',
	' ######  ',
];

const d: any[] = [
	'########  ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'########  ',
];

const e: any[] = [
	'######## ',
	'##       ',
	'##       ',
	'######   ',
	'##       ',
	'##       ',
	'######## ',
];

const f: any[] = [
	'######## ',
	'##       ',
	'##       ',
	'######   ',
	'##       ',
	'##       ',
	'##       ',
];

const g: any[] = [
	' ######   ',
	'##    ##  ',
	'##        ',
	'##   #### ',
	'##    ##  ',
	'##    ##  ',
	' ######   ',
];

const h: any[] = [
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'######### ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
];

const i: any[] = [
	'#### ',
	' ##  ',
	' ##  ',
	' ##  ',
	' ##  ',
	' ##  ',
	'#### ',
];

const j: any[] = [
	'      ## ',
	'      ## ',
	'      ## ',
	'      ## ',
	'##    ## ',
	'##    ## ',
	' ######  ',
];

const k: any[] = [
	'##     ## ',
	'##    ##  ',
	'##   ##   ',
	'#####     ',
	'##   ##   ',
	'##    ##  ',
	'##     ## ',
];

const l: any[] = [
	'##       ',
	'##       ',
	'##       ',
	'##       ',
	'##       ',
	'##       ',
	'######## ',
];

const m: any[] = [
	'##     ## ',
	'###   ### ',
	'#### #### ',
	'## ### ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
];

const n: any[] = [
	'##    ## ',
	'###   ## ',
	'####  ## ',
	'## ## ## ',
	'##  #### ',
	'##   ### ',
	'##    ## ',
];

const o: any[] = [
	' #######  ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	' #######  ',
];

const p: any[] = [
	'########  ',
	'##     ## ',
	'##     ## ',
	'########  ',
	'##        ',
	'##        ',
	'##        ',
];

const q: any[] = [
	' #######   ',
	'##     ##  ',
	'##     ##  ',
	'##     ##  ',
	'##  ## ##  ',
	'##    ###  ',
	' ###### ## ',
];

const r: any[] = [
	'########  ',
	'##     ## ',
	'##     ## ',
	'########  ',
	'##   ##   ',
	'##    ##  ',
	'##     ## ',
];

const s: any[] = [
	' ######  ', 
	'##    ## ', 
	'##       ', 
	' ######  ', 
	'      ## ', 
	'##    ## ', 
	' ######  '
];

const t: any[] = [
	'######## ',
	'   ##    ',
	'   ##    ',
	'   ##    ',
	'   ##    ',
	'   ##    ',
	'   ##    ',
];

const u: any[] = [
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	' #######  ',
];

const v: any[] = [
	'##     ## ',
	'##     ## ',
	'##     ## ',
	'##     ## ',
	' ##   ##  ',
	'  ## ##   ',
	'   ###    ',
];

const w: any[] = [
	'##      ## ',
	'##  ##  ## ',
	'##  ##  ## ',
	'##  ##  ## ',
	'##  ##  ## ',
	'##  ##  ## ',
	' ###  ###  ',
];

const x: any[] = [
	'##      ## ',
	' ##    ##  ',
	'  ##  ##   ',
	'   ####    ',
	'  ##  ##   ',
	' ##    ##  ',
	'##      ## ',
];

const y: any[] = [
	'##    ## ',
	' ##  ##  ',
	'  ####   ',
	'   ##    ',
	'   ##    ',
	'   ##    ',
	'   ##    ',
];

const z: any[] = [
	'######### ',
	'       ## ',
	'     ##   ',
	'   ##     ',
	'  ##      ',
	'##        ',
	'######### ',
];

const space: any[] = [
	'     ',
	'     ',
	'     ',
	'     ',
	'     ',
	'     ',
	'     ',
];

const dot: any[] = [
	'     ',
	'     ',
	'     ',
	'     ',
	'     ',
	'###  ',
	'###  ',
];

const comma: any[] = [
	'     ',
	'     ',
	'     ',
	'     ',
	'     ',
	'###  ',
	' ##  ',
];

const newLine: any[] = [
	' ',
	' ',
	' ',
	' ',
	' ',
	' ',
	'\n\n',
];

export class Dictionary {
	letters:Map<string, any>;

	constructor() {
		this.letters = new Map<string, any>();
		this.letters.set('a', a);
		this.letters.set('b', b);
		this.letters.set('c', c);
		this.letters.set('d', d);
		this.letters.set('e', e);
		this.letters.set('f', f);
		this.letters.set('g', g);
		this.letters.set('h', h);
		this.letters.set('i', i);
		this.letters.set('j', j);
		this.letters.set('k', k);
		this.letters.set('l', l);
		this.letters.set('m', m);
		this.letters.set('n', n);
		this.letters.set('o', o);
		this.letters.set('p', p);
		this.letters.set('q', q);
		this.letters.set('r', r);
		this.letters.set('s', s);
		this.letters.set('t', t);
		this.letters.set('u', u);
		this.letters.set('v', v);
		this.letters.set('w', w);
		this.letters.set('x', x);
		this.letters.set('y', y);
		this.letters.set('z', z);
		this.letters.set(' ', space);
		this.letters.set('.', dot);
		this.letters.set(',', comma);
		this.letters.set('\r', newLine);
	  }

	  convert(text: string) {
		let output:string = '';
		text = text.toLowerCase();
		let textRows = text.split('\n');
		textRows.forEach(textRow => {
			let row = 0;
			// letters are 7 rows tall
			while (row < 7) {
				for (let letter of textRow) {
					output += this.letters.get(letter)[row];
				};
				output += '\n';
				++row;
			}
		});
		
		return output;
	  }
}