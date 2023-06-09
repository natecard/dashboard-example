module.exports = {
	trailingComma: 'es5',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	printWidth: 80,
	useTabs: true,
	bracketSpacing: false,
	jsxBracketSameLine: false,
	arrowParens: 'avoid',
	overrides: [
		{
			files: '.prettierrc',
			options: {parser: 'js'},
		},
	],
};
