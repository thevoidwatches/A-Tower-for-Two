setup.settingTheme = function () {
	$("html").removeClass("library digsite parchment");
	switch (settings.theme) {
		case "Light Library":
			$("html").addClass("library");
			break;
		case "Dark Digsite":
			$("html").addClass("digsite");
			break;
		case "Ancient Parchment":
			$("html").addClass("parchment");
			break;
	}
};
Setting.addToggle("hints", {
	label : "Show Hints?",
	default : false
})
Setting.addList("theme", {
	label : "Choose a Theme:",
	list : ["Light Library", "Dark Digsite", "Ancient Parchment"],
	default : "Ancient Parchment",
	onInit   : setup.settingTheme,
	onChange : setup.settingTheme
})

Setting.addToggle("images", {
	label : "Display images?",
	default : true
})