jQuery(function () {
	let slideIndex = 1;
	$(".carousel button").on("click", function () {
		const slideCount = $(".carousel li").length;
		let action = $(this).hasClass("prev") ? "prev" : "next";
		$(".carousel li").addClass("disabled");
		slideIndex += action == "prev" ? -1 : 1;
		slideIndex = slideIndex > slideCount ? 1 : slideIndex < 1 ? slideCount : slideIndex;
		$(`.carousel li:nth-child(${slideIndex})`).removeClass("disabled");
	});
});
