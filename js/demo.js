//touchstart开始触摸
var num=0,
	startY=0,
	endY=0,
	moveY=0,
    len=$(".page_slide").length;
$("#page_box").on("touchstart",".page_slide",function(e){
//	alert()
	//touches位于屏幕上的所有手指的列表
	//e.touches[0];获取第一个触点
	startY=e.touches[0].clientY;
	console.log("startY"+startY);
//touchmove移动
}).on("touchmove",".page_slide",function(e){
	endY=e.touches[0].clientY;
	console.log("endY"+endY);
//touchend结束触摸
}).on("touchend",".page_slide",function(){
	moveY=endY-startY;
	console.log("moveY"+moveY);
	//Math.abs()绝对值
	if(Math.abs(moveY)>60&&endY!=0){
		if(moveY>0){
			console.log("下");
			num--;
			if(num<0){
//				console.log("ok")
				num=0;
				return;
			}
			//prev() 获得匹配元素集合中每个元素紧邻的前一个同胞元素
			$(this).addClass("tobottom").removeClass("show").prev(".page_slide").removeClass("hide").addClass("prevtobottom");
			console.log($(this).prev(".page_slide"));
		//	$(this).addClass("toleft").removeClass("show").prev(".page_slide").removeClass("hide").addClass("show").addClass("neYttoleft")
		//	console.log($(this));
//			console.log($(this).prev(".page_slide"));
			$(this).on("webkitAnimationEnd",function(){
				$(this).removeClass("tobottom").addClass("hide").prev(".page_slide").removeClass("prevtobottom").addClass("show");
				$(this).off("webkitAnimationEnd");
			})
		}else if(moveY<0){
			console.log("上");
			num++;
			if(num>len-1){
				num=len-1;
				return;
			}
			$(this).addClass("totop").removeClass("show").next(".page_slide").removeClass("hide").addClass("nexttotop");
			$(this).on("webkitAnimationEnd",function(){
				$(this).removeClass("totop").addClass("hide").next(".page_slide").removeClass("nexttotop").addClass("show");
				$(this).off("webkitAnimationEnd");
			});
		}
		
	}
	endY=0;
})
