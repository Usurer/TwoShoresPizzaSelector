
function pizza() {
var collection = $(".b-catalog-item:visible");
var list = [];
while(list.length < 5) {
	var a = Math.floor((Math.random()*collection.length));
	if ($(collection[a]).find('.isHotBottom:visible').length == 0)
		list.push(a);
}
console.info(list);
i = 0;
var myElements = [];
for (i = 0; i <collection.length; i++ ){
	var flag= false;
var k = 0;
	for(k = 0; k < 4; k++) {
		if(list[k] === i) {flag = true; break;}
	}
	
	if(!flag) {
		//console.log('removing '+ i);		
		//$(collection[i]).remove();
	} else { 
		console.log('leaving ' + i);
		myElements.push($(collection[i]));
	}
}
var s = 0;
var s1 = 0;
$(myElements).each(function(){
	s= s + parseInt($(this).find('.b-catalog-item-price').find('em')[0].innerHTML);
});
console.log(s);
return [s, myElements];}
var c=1000;
while(c > 0) {
c--;
	var r= pizza();
	if (r[0] <= 2000 && r[1].length === 4) {
		console.info(r[1]);
		for(var z = 0; z < r[1].length; z++){$(r[1][z]).toggleClass('MyClass');}

	
/*		$(r[1]).each(
                    function(){
                      $(this).toggleClass('MyClass')
                    });*/

		var collection = $(".b-catalog-item:visible");
		collection.hide();
		$('.MyClass').show();
		$(".b-catalog-item:hidden").each(function(){$(this).parent().remove();});
		collection
console.info();
		/*for (var i = 0; i < collection.length; i++) {
			if(!$(collection[i]).hide()) {
				$(this).remove();
			}
		
		}*/
		break;
	}
	
}
