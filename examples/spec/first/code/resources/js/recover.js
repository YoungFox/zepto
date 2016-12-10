(function (){

	//利用html5最新验证，不支持ie10以下的低级浏览器
	var $allForms = $('.forms');
	var bgStep = $('.bg-step');
	$('.form-1').on('submit',function (e){
		e.preventDefault();
		$allForms.hide();
		$('.form-2').show();
		bgStep.eq(1).addClass('step-done');
	});
	$('.form-2').on('submit',function (e){
		e.preventDefault();
		$allForms.hide();
		$('.form-3').show();
		bgStep.eq(2).addClass('step-done');
	});
})();