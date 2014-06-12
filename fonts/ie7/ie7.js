/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mtc-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-mtc-radio': '&#xe600;',
		'icon-mtc-sunroof': '&#xe601;',
		'icon-mtc-bluetooth': '&#xe602;',
		'icon-mtc-wipers': '&#xe603;',
		'icon-mtc-keyless-entry': '&#xe604;',
		'icon-mtc-gps-navigation': '&#xe605;',
		'icon-mtc-music': '&#xe606;',
		'icon-mtc-heated-seats': '&#xe607;',
		'icon-mtc-cruise-control': '&#xe608;',
		'icon-mtc-thermometer': '&#xe609;',
		'icon-mtc-map-marker': '&#xe60a;',
		'icon-mtc-wrench': '&#xe60b;',
		'icon-mtc-key-fob': '&#xe60c;',
		'icon-mtc-search': '&#xe60d;',
		'icon-mtc-clock': '&#xe60e;',
		'icon-mtc-play-video': '&#xe60f;',
		'icon-mtc-chevron-right': '&#xe610;',
		'icon-mtc-chevron-left': '&#xe611;',
		'icon-mtc-chevron-down': '&#xe612;',
		'icon-mtc-chevron-up': '&#xe613;',
		'icon-mtc-car-right': '&#xe614;',
		'icon-mtc-car-left': '&#xe615;',
		'icon-mtc-car-front': '&#xe616;',
		'icon-mtc-car-one-dollar': '&#xe617;',
		'icon-mtc-car-two-dollar': '&#xe618;',
		'icon-mtc-car-three-dollar': '&#xe619;',
		'icon-mtc-car-top': '&#xe61a;',
		'icon-mtc-plus-sign': '&#xe61b;',
		'icon-mtc-calculator': '&#xe61c;',
		'icon-mtc-circle-car': '&#xe61d;',
		'icon-mtc-radio2': '&#xe61e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
