// 轮播图 图片随网页大小变化

$(function (){
	$(window).on("resize",function(){
		//1.获取窗口宽度
		let clientW = $(window).width();
		// console.log(clientW);
		
		//2.设置临界值
		let isShowBigImage = clientW >=768;
		
		// 3.获取item
		let $allItems =$("#index_carousel .item");
		//console.log($allItems);
		
		//4.遍历
		$allItems.each(function(index,item){
			let src;
			if(isShowBigImage){
				src=$(item).data("lg-img");
			}else{
				src=$(item).data("sm-img");
			}
			//let src=isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
			let imgUrl = "url('" + src + "')";
			
			$(item).css({
				backgroundImage: imgUrl
			});
			
			if(!isShowBigImage){
				let $img = "<img src='" + src + "'>";
				$(item).empty().append($img);
			}else{
				$(item).empty();
			}
		});
	});
	$(window).trigger("resize");
});
