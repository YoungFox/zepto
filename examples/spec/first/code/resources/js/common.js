(function (){
	// 此处验证码切换只是示意，后期开发请替换为后台图片验证码接口
	var ind = 1;
	$('.code-img').on('click',function (){
		if(ind >  4){
			ind = 0;
		}
		$(this).attr('src','../resources/img/code-img' + ind + '.jpg');
		ind++;
	});
})();