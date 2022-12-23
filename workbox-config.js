module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,png,html,webmanifest,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};