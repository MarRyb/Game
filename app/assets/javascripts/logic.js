$(function(){
	var mas = [[null, null, null], 
			   [null, null, null],
			   [null, null, null]];
	var winner = false;

	$(".brdr-xo div").on("click", function(){
		var xo = $(this).closest(".brdr-xo");
		$("div", xo).addClass("hidden");
		$(this).removeClass("hidden");
		xo.addClass("brdr-xo-effect");
		var row = xo.data("row");
		var col = xo.data("col");

		var masSave = null;
		if ($(this).hasClass("stl-x") == true){
			masSave = "x"
		} else {
			masSave = "0"
		}
		mas[row][col] = masSave; 

		

		if((mas[0][0] == mas[0][1] && mas[0][1] == mas[0][2]) & mas[0][1] != null) {
			$("[data-row=0][data-col=0]").addClass("brdr-xo-edit");
			$("[data-row=0][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=0][data-col=2]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[0][1]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[1][0] == mas[1][1] && mas[1][1] == mas[1][2]) & mas[1][1] != null) {
			$("[data-row=1][data-col=0]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=2]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[1][1]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[2][0] == mas[2][1] && mas[2][1] == mas[2][2]) & mas[2][1] != null) {
			$("[data-row=2][data-col=0]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=2]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[2][2]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[0][0] == mas[1][0] && mas[1][0] == mas[2][0]) & mas[0][0] != null) {
			$("[data-row=0][data-col=0]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=0]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=0]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[1][0]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[0][1] == mas[1][1] && mas[1][1] == mas[2][1]) & mas[2][1] != null) {
			$("[data-row=0][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=1]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[1][1]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[0][2] == mas[1][2] && mas[1][2] == mas[2][2]) & mas[0][2] != null) {
			$("[data-row=0][data-col=2]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=2]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=2]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[1][2]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[0][0] == mas[1][1] && mas[1][1] == mas[2][2]) & mas[0][0] != null) {
			$("[data-row=0][data-col=0]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=2]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[1][1]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}
		if((mas[0][2] == mas[1][1] && mas[1][1] == mas[2][0]) & mas[1][1] != null) {
			$("[data-row=0][data-col=2]").addClass("brdr-xo-edit");
			$("[data-row=1][data-col=1]").addClass("brdr-xo-edit");
			$("[data-row=2][data-col=0]").addClass("brdr-xo-edit");
			$(".finish").removeClass("hidden");
			$(".finish").html(mas[1][1]);
			var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
			winner = true;
		}

		var kol_vo = 0;
			for (var i = 0; i <= 2; i++) {
				for (var j = 0; j <= 2; j++) {
					if(mas[i][j] == null) {
						kol_vo=kol_vo+1;
					}
				};	
			};
		if (kol_vo == 0 && winner == false) {
			$(".finish").removeClass("hidden").html("=(");
		};

	})
	

	$(".finish").on("click", function(){
		$(".brdr-xo").removeClass("brdr-xo-edit").removeClass("brdr-xo-effect");
		$(".brdr-xo div").removeClass("hidden");
		mas = [[null, null, null], 
			   [null, null, null],
			   [null, null, null]];
		$(".finish").addClass("hidden");
		winner = false;
	})
}) 