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