document.getElementById("mainPage").innerHTML = `

<div id="main">
			<div id="box">
				<h3 class="bfl"></h3>
				<div id="console">
					<div id="typingConsole"></div>
				</div>
			</div>

			<div id="page2">
				<h2>
					<span style="color: orange">${team_name_1} </span>
					<span style="color: white">${team_name_2} </span>
					<span style="color: lime">${team_name_3}</span>
				</h2>
				<img id="team_logo_url" src="${team_logo_url}" alt="Our Team Logo" />
				<p class="time">Time : &nbsp;<span id="time">00:00:00 XX</span></p>

				<div id="ourMsg">
					<h3>Our Message :</h3>
					<p id="your_message">${your_message}</p>
				</div>
				<div class="scrlc1">
					<div class="scrlc2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 74" preserveAspectRatio="none"
							class="scrlc3">
							<g style="transform: translate(2px, 2px)">
								<g>
									<path data-type="shape" d="M1,1 L1,69 L219,69 L219,1" class="scrlc4"></path>
								</g>
								<path data-type="polyline" d="M0,0 L0,10" class="scrlStroke"></path>
								<path data-type="polyline" d="M0,0 L10,0" class="scrlStroke"></path>
								<path data-type="polyline" d="M220,0 L210,0" class="scrlStroke"></path>
								<path data-type="polyline" d="M220,0 L220,10" class="scrlStroke"></path>
								<path data-type="polyline" d="M220,70 L210,70" class="scrlStroke"></path>
								<path data-type="polyline" d="M220,70 L220,60" class="scrlStroke"></path>
								<path data-type="polyline" d="M0,70 L0,60" class="scrlStroke"></path>
								<path data-type="polyline" d="M0,70 L10,70" class="scrlStroke"></path>
							</g>
						</svg>
					</div>
					<div class="scrlc5">
						<p id="weAre"></p>
					</div>
				</div>

				<div class="jayhind">
					<p style="color: orange; text-shadow: 2px 2px 6px orange">
						Jay Hind
					</p>
					<p style="color: white; text-shadow: 2px 2px 6px white">
						Jay Bharat
					</p>
					<p style="color: lime; text-shadow: 2px 2px 6px lime">
						VandeMatram
					</p>
				</div>
			</div>
		</div>

		<div id="alertSuccess">
			<div class="container">
				<h2>Access Granted!</h2>
				<button class="btnc1" onclick="hideSuccess()">
					<div class="btnc2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 38" preserveAspectRatio="none"
							class="btnc3">
							<g style="transform: translate(2px, 2px)">
								<g>
									<path data-type="shape" d="M0,34 L168,34 L183,19 L183,0 L15,0 L0,15"></path>
								</g>
								<path data-type="polyline" d="M0,34 L168,34 L183,19 L183,0"></path>
								<path data-type="polyline" d="M183,0 L15,0 L0,15 L0,34"></path>
							</g>
						</svg>
					</div>
					<div>
						<span class="btnc4"><span class="btnc5">Continue</span></span>
					</div>
				</button>
			</div>
		</div>

		<div id="alertError">
			<div class="container">
				<h2>Something went wront!</h2>
				<button class="btnc1" onclick="window.location.reload()">
					<div class="btnc2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 38" preserveAspectRatio="none"
							class="btnc3">
							<g style="transform: translate(2px, 2px)">
								<g>
									<path data-type="shape" d="M0,34 L168,34 L183,19 L183,0 L15,0 L0,15"></path>
								</g>
								<path data-type="polyline" d="M0,34 L168,34 L183,19 L183,0"></path>
								<path data-type="polyline" d="M183,0 L15,0 L0,15 L0,34"></path>
							</g>
						</svg>
					</div>
					<div>
						<span class="btnc4"><span class="btnc5">Try Again</span></span>
					</div>
				</button>
			</div>
		</div>

		<div id="alertVPN">
			<div class="container">
				<h2>VPN Detected !</h2>
				<p>Please Turn off your VPN and then try again.</p>
				<button class="btnc1" onclick="window.location.reload()">
					<div class="btnc2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 38" preserveAspectRatio="none"
							class="btnc3">
							<g style="transform: translate(2px, 2px)">
								<g>
									<path data-type="shape" d="M0,34 L168,34 L183,19 L183,0 L15,0 L0,15"></path>
								</g>
								<path data-type="polyline" d="M0,34 L168,34 L183,19 L183,0"></path>
								<path data-type="polyline" d="M183,0 L15,0 L0,15 L0,34"></path>
							</g>
						</svg>
					</div>

					<div>
						<span class="btnc4"><span class="btnc5">Try Again</span></span>
					</div>
				</button>
			</div>
		</div>
		<div id="overlap"></div>
		<audio id="audio"></audio>

`;