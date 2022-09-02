const header = document.getElementById('header1');

window.addEventListener("scroll",() =>{
	console.log(window.scrollY);
	if (window.scrollY > 100)
	{
		header.classList="header2";
	}
	else
	{
		header.classList ="header";
	}
});

