/*
* Dark mode toggle — ora vive come coppia di radio button nel menu Settings.
*
* In its current state, it will cause a minor FOIT.
* Basically, the background behind the panels will
* briefly flash white before turning dark. It's
* better than before, but not perfect.
*/
/*
* localStorage will only store strings
* This means that if it has the value 'false',
* It will be truey and incorrectly cause the
* dark theme to load.
*/
var prefersDarkTheme = localStorage.getItem('darkTheme') ? localStorage.getItem('darkTheme') === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
var darkStyles = document.getElementById('dark-theme-styles');
var themeDarkInput = document.getElementById('themeDark');
var themeLightInput = document.getElementById('themeLight');

if (prefersDarkTheme) {
	if (darkStyles.disabled) {
		darkStyles.disabled = false;
	}
	themeDarkInput.checked = true;
} else {
	themeLightInput.checked = true;
}

function setTheme(isDark) {
	prefersDarkTheme = isDark;
	darkStyles.disabled = !isDark;
	localStorage.setItem('darkTheme', isDark);
}

themeDarkInput.addEventListener('change', function () {
	if (themeDarkInput.checked) setTheme(true);
});
themeLightInput.addEventListener('change', function () {
	if (themeLightInput.checked) setTheme(false);
});
