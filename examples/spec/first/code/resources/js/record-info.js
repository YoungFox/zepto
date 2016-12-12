(function (){
	$("#uploadFileX").on("change",function(){
	    var files=this.files;
	    var $filesNameList = $('.files-name-list');
	    var list = '';
	    for(var i = 0;i < files.length; i++){
	    	list += '<span>' + files[i].name + '</span>';
	    };
	   	$filesNameList.html(list);
	})
})();