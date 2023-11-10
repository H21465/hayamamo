document.addEventListener('DOMContentLoaded', (event) => {
	const commandLine = document.getElementById('command-line');
	const terminalHistory = document.getElementById('terminal-history');
	const history = JSON.parse(localStorage.getItem('terminalHistory')) || [];
	history.forEach(cmd => {
		const commandOutput = document.createElement('div');
		commandOutput.textContent = `> ${cmd}`;
		terminalHistory.appendChild(commandOutput);
	});
	commandLine.addEventListener('keydown', function (e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			const command = this.value.toLowerCase();
			const commandOutput = document.createElement('div');
			console.log(command);
			commandOutput.textContent = `> ${command}`;
			terminalHistory.appendChild(commandOutput);
			history.push(command);
			localStorage.setItem('terminalHistory', JSON.stringify(history));
			if (command === 'cd home') {
				window.location.href = 'index.html';
			} else if (command === 'cd about') {
				window.location.href = 'about.html';
			} else if (command === 'cd help') {
				window.location.href = 'help.html';
			} else {
				commandOutput.textContent = `Command not found: ${command}`;
			}
			console.log("yes");
			this.value = '';
		}
	});
	commandLine.focus();
});

document.addEventListener('DOMContentLoaded', (event) =>
{
	const navLinks = document.querySelectorAll('.global-nav a');
	const currentUrl = window.location.pathname.split('/').pop();

	navLinks.forEach(link =>
	{
		if (link.getAttribute('href') === currentUrl)
		{
			link.parentElement.classList.add('current');
		}
		else
		{
			link.parentElement.classList.remove('current');
		}
	});
});
