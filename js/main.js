var altura_navegador = window.innerHeight;
$("document").ready(inicio);

function inicio() {
    window.onresize = recolocar;
    $("#nube").css("top", altura_navegador + "px").css("right", "40px");
    $("#montanya").css("top", altura_navegador + "px").css("left", "0px");
    $("#sol").css("top", altura_navegador + "px").css("left", "100px").animate({ "top": "40px" }, 1500, "easeOutElastic", salir_nube);
    $("body").click(plantar);

}
function recolocar() {
    altura_navegador = window.innerHeight;
    formula = altura_navegador - $("#montanya img").height() - 15;
    $("#montanya").css("top", formula + "px");
    temp = altura_navegador - $(".semilla").height();
    $("semillas").css("top", temp);
}

function salir_nube() {
    $("#nube").animate({ "top": "30px" }, 1600, "easeOutElastic", salir_montanya);
}

function salir_montanya() {
    var formula = altura_navegador - $("#montanya img").height() - 15;
    $("#montanya").animate({ "top": formula + "px" }, 1200, "easeOutBounce");
}

function plantar(e) {
    x = e.clientX - 40;
    y = e.clientY - 15;
    $("body").append("<div class='semilla'><img src='img/semilla.png' width='80px'></div>");
    ultima = $(".semilla").length - 1;
    $(".semilla").eq(ultima).css("left", x + "px").css("top", y + "px");// semilla en el centro

    var distancia_recorrida = altura_navegador - $(".semilla").height();
    $(".semilla").eq(ultima).animate({ "top": distancia_recorrida }, 1000, "easeOutBounce", crear_planta);
}

function crear_planta() {
    document.getElementById("audio2").play();
    r = Math.ceil(Math.random() * 4);
    $(".semilla").eq(ultima).find("img").attr("src", "img/planta" + r + ".png");
}