function baidu_map(){
	var map=new BMap.Map("map_canvas");
	var point=new BMap.Point(116.404, 39.915);
	var marker=new BMap.Marker(point);
	marker.addEventListener("click",function(){
		alert("you clicked marker");
	});
	
	map.centerAndZoom(point, 15);
	map.enableScrollWheelZoom();
	map.addControl(new BMap.NavigationControl());
	map.addControl(new BMap.ScaleControl());
	map.addControl(new BMap.OverviewMapControl());
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("北京");
	map.addOverlay(marker);
}

function google_map(){
	var latlng=new google.maps.LatLng(39.915, 116.404);
	var myOptions={
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map=new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function soso_map(){

	var latlng=new soso.maps.LatLng(39.915, 116.404);
	var myOptions={
		zoom: 10,
		center: latlng,
		mapTypeId: soso.maps.MapTypeId.ROADMAP
	}
	
	var map=new soso.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function load_html(){
	$("#content").load("./parts/first.html");
}