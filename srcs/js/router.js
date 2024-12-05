async function loadTemplate(path, context = {})
{
	const app = document.getElementById("app");
	try {
		const res = await fetch(`srcs/templates${path}.handlebars`);
		// protection de fetch en cas de problem 
		if (!res.ok)
			throw new Error(`Erreur ${response.status} : ${url}`);
			
		const source = await res.text();

		const template = Handlebars.compile(source);
		const html = template(context);

		app.innerHTML = html;
	} catch (e) {
		console.error("Erreur lors du chargement du template :", error);
		app.innerHTML = "<h1>Erreur 404 : Template introuvable</h1>";
	}
}