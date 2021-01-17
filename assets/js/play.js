var queued = [];
var videoElements = document.getElementsByClassName('main__video');
var videos = [];
var userID = document.getElementById('userID').value;
var goose = '&goose=' + userID;

function getVideos() {
	for (count = 0; count < videoElements.length; count++) {
		var id = videoElements[count].getAttribute('data-url');
		videos.push(id);
	}
}

function checkElement() {
	var element = event.target;

	if (element.classList.contains('main__overlay')) {
		if (userID) {
			var videoWrapper = element.closest('.main__video')
			var videoID = videoWrapper.getAttribute('data-url');

			play(goose, videoID);
		} else {
			alert('Please enter your user ID');
		}
	}

	if (element.classList.contains('surprise-button')) {
		shuffle();
	}
}

async function play(goose, videoID) {
	var fullUrl = 'https://www.youtube.com/watch?v=' + videoID;
	fetch("https://bigelow.io/play-bookmarklet/?gander=" + fullUrl + goose);
}

function shuffle () {
	if (videos.length < 1) {
		console.log('Resetting Videos');
		getVideos();
	}

	var shuffledVideo = Math.floor(Math.random() * videos.length); 
	var video = videos[shuffledVideo];
	console.log(video);

	
	videos.splice(video, 1);
	play(goose, video);
	

	console.log(videos);
	console.log(shuffledVideo);
	videos.splice(video, 1);
	console.log("playing: " + video);
	console.log('........');
}









getVideos();
document.body.addEventListener('click', checkElement);



// Liam's Script

// javascript:(async function(){
// 	document.body.insertAdjacentHTML( 'afterBegin', "<h1 id='gooser' style='position:fixed;top: 0;left: 0;z-index:9999999999994;height: 100px;width:100%;background-color:white;align-items:center;justify-content:center;border-bottom: solid 3px blue;display:flex;'>Trying to play</h1>" );
// 	var hi_tate = window.location.toString().match(/=(.{11})/)[1];
// 	var hi_ross = await fetch("https://www.youtube.com/get_video_info?video_id="+hi_tate);
// 	var hi_nathan = await hi_ross.text();
// 	document.querySelector("#gooser").remove();
// 	if (!hi_nathan.match(/Music/)) {
// 		var garbo = confirm("It doesn't look like this is in the music category! Press OK to try play anyway I guess");
// 		if (!garbo) {
// 			return
// 		}
// 	}
// 	fetch("https://bigelow.io/play-bookmarklet/?gander="+escape(window.location)+"&goose=YOURKEY")
// })()