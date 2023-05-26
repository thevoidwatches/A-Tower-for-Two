Config.saves.onSave = function (save, details) {
	if (details.type === "slot") {
		var title = prompt("Enter Save Title:", save.title);
		if (title !== null) {
			save.title = title;
		}
	}
};