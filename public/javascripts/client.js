(function(){
	"use strict";
	var main = function(){
		$.ajax({
		   	type: 'GET',
		    url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=891e6af463425c99964a6e944944bea3&callback=cb',
		    //async: true,
		    jsonpCallback: 'cb',
		    contentType: "application/json",
		    dataType: 'jsonp',
		    success: function(data) {
				console.log(data);
				data.results.forEach(function(name){
				var title = $('<h2>').text(name.title);
				console.log(name.title);
				$('#movies').append(title);
				var posterPath = "http://image.tmdb.org/t/p/w185/" + name.poster_path;
				var poster = $('<img>').attr('src', posterPath);
				$('#movies').append(poster);
				var release_date = $('<h3>').text(name.release_date);
				console.log(name.release_date);
				$('#movies').append(release_date);
				var overview = $('<p>').text(name.overview);
				console.log(name.overview);
				$('#movies').append(overview);
	    		});
			}
		});
	};
main();
})();