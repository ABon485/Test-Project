<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login Page</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="max-h-screen">
    <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl">
            <div class="w-5/6 md:block hidden ">
                <img src="https://p1.liveauctioneers.com/dist/images/SignupLadySmall.png"  class="rounded-l-lg" alt="page img">
            </div>

            <div class="w-screen p-5 px-10">
                <h2 class="text-xl flex flex-col items-center font-bold text-[#002D74]">Welcome to Auctioneers!</h2>
                <form class="mt-6" action="#" method="POST">
                    <div>
                        <label class="block text-gray-700">EMAIL ADDRESS / USSERNAME</label>
                        <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">PASSWORD</label>
                        <input type="email" name="" id="" placeholder="Enter Password" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                    </div>

                    <button type="submit" class="w-full block bg-red-600 hover:bg-red-900 focus:bg-red-900 text-white font-semibold rounded-lg
                        px-4 py-3 mt-6">LOG IN</button>
                </form>

                <div class="text-sm flex flex-col items-center mt-3 space-y-4">
                    <a href="#" class="text-sm font-semibold text-blue-700"><u>Forgot Password?</u></a>
                    <p class="text-center">Don't have an account?
                        <a href="#" class="text-sm font-semibold text-blue-700"><u>Join</u></a>
                    </p>
                </div>
            </div>
        </div>
    </section>
<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>

</html>