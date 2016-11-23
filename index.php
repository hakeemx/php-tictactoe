<?php

//this will store their information as they refresh the page
session_start();

//if they haven't started a game yet let's load one
/*if (!isset($_SESSION['game']['tictactoe']))
	$_SESSION['game']['tictactoe'] = new tictactoe();
*/
?>
<html>
	<head>
		<title>Tic Tac Toe</title>
		<link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.3/css/tachyons.min.css"/>
		<link rel="stylesheet" href="inc/style.css"/>
		<script
		  src="https://code.jquery.com/jquery-3.1.1.min.js"
		  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
		  crossorigin="anonymous"></script>
	</head>
	<body class="washed-blue bg-dark-blue">
		<div id="content" class="fl w-100 pa2">
			<form class="dt w-30-l w-50-m w-100-ns h-75 center" method="POST">
				<div id="board" class="dtc v-mid center">
					<div id="cell-1-1" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-1-2" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-1-3" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-2-1" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-2-2" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-2-3" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-3-1" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-3-2" class="board_cell h-33 pa3 fl w-third tc"></div>
					<div id="cell-3-3" class="board_cell h-33 pa3 fl w-third tc"></div>
				</div>
			</form>
			<div class="w-30-l w-50-m w-100-ns center">
				<div class="fl w-third">
					<ul class="list tc pl0 ma0">
						<li class="f3 b">Player (x)</li>
						<li id="playerScore" class="f2">
							0
						</li>
					</ul>
				</div>
				<div class="fl w-third">
					<ul class="list tc pl0 ma0">
						<li class="f3 b">Ties</li>
						<li id="tieScore" class="f2">
							0
						</li>
					</ul>
				</div>
				<div class="fl w-third">
					<ul class="list tc pl0 ma0">
						<a href="#" id="oppBtn" class="f3 link dim white b">Computer(O)</a>
						<li id="oppScore" class="f2">
							0
						</li>
					</ul>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="script.js"></script>
	</body>
</html>