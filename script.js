document.getElementById('command-line').addEventListener('keypress', function (e)
{
	if (e.key === 'Enter')
	{
		e.preventDefault();
		var command = this.value.trim();
		switch (command)
		{
			case 'cd portfolio':
				window.location.href = '/portfolio.html';
				break;
			default:
				break;
		}
		this.value = ''; // コマンドラインをクリア
	}
});
