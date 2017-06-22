//Diseña tu buzo, por Boris Coalova ;)


function crudo() {
$(".coloreable").css({"fill": "#fff8d4",
					 "fill-opacity": "1",
					 "opacity": "1",
					 });

}
function beige() {
$(".coloreable").css({"fill": "#e8e3c8",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function topo() {
 $(".coloreable").css({"fill": "#424245",
					 "fill-opacity": "1",
					 "opacity": "1",
 					});
}
function perla() {
 $(".coloreable").css({"fill": "#bdc3c3",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function fucsia() {
 $(".coloreable").css({"fill": "#d4305e",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function uva() {
 $(".coloreable").css({"fill": "#511024",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function violeta() {
 $(".coloreable").css({"fill": "#5a2a5e",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function coral() {
 $(".coloreable").css({"fill": "#f78b86",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function bordo() {
 $(".coloreable").css({"fill": "#b81c3e",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function rojo() {
 $(".coloreable").css({"fill": "#ed2c2d",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function salmon() {
 $(".coloreable").css({"fill": "#d3543c",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function azulpetroleo() {
 $(".coloreable").css({"fill": "#134474",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function marino() {
 $(".coloreable").css({"fill": "#120c3b",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function turquesa() {
 $(".coloreable").css({"fill": "#009ccf",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function turquesaclaro() {
 $(".coloreable").css({"fill": "#bee1e5",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function celeste() {
 $(".coloreable").css({"fill": "#7ab8db",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function atlantis() {
 $(".coloreable").css({"fill": "#1c9191",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function verdepetroleo() {
 $(".coloreable").css({"fill": "#006b59",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function marea() {
 $(".coloreable").css({"fill": "#7ddbc9",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function ingles() {
 $(".coloreable").css({"fill": "#005b31",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function militar() {
 $(".coloreable").css({"fill": "#535f2a",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function manzana() {
 $(".coloreable").css({"fill": "#92b175",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function brasil() {
 $(".coloreable").css({"fill": "#00a631",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function negro() {
 $(".coloreable").css({"fill": "#000",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function blanco() {
 $(".coloreable").css({"fill": "#FFFFFF",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function amarillo() {
 $(".coloreable").css({"fill": "#fee277",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function naranja() {
 $(".coloreable").css({"fill": "#f5b120",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function naranjaoscuro() {
 $(".coloreable").css({"fill": "#e6592e",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function marron() {
 $(".coloreable").css({"fill": "#361d09",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
function verde() {
 $(".coloreable").css({"fill": "#007b3f",
					"fill-opacity": "1",
					 "opacity": "1",
 					});
}
$(function() {
    $("path.path").on("click", function(e) {
	$("path.coloreable").removeClass("coloreable");
	$(this).addClass('coloreable');

    });
})

function resetall() {
 $(".path").css({"opacity": "0.001",
 				"fill-opacity": "0.001",
				});
}


