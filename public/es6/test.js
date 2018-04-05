'use strict';
//es6 feature block:scoped "let" declaration
const sentences = [
{subject: 'ruby', verb: 'is', object: 'great'},
{subject: 'koalas', verb: 'are', object: 'cudly'},

];

//es6 feature: object destructuring
function say({ subject, verb, object }) {
	//ES6 feature: template strings
	//note that quotes below are backticsk not single quotes
	console.log(`${subject} ${verb} ${object}`);
}

//ES6 for... of
for(let s of sentences) {
	say(s);
}