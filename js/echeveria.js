//Class para armar productos
class producto {
    constructor(id, nombre, cactus, imagen, descripcion, sol, agua, floracion) {
        this.id = id;
        this.nombre = nombre;
        this.cactus = cactus
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.sol = sol;
        this.agua = agua;
        this.floracion = floracion;
    };
};
// productos definidos y sumados a un array - Faltan datos y productos
const producto1 = new producto (1, "Crassula Buddha Temple", false, "buddhaTemple.jpg", "Tiene una amplia distribución, pero la mayoría de las especies disponibles se cultivan a partir de las que crecen en Sudáfrica. Cuenta con buena tolerancia al calor, necesita sol y soporta temperaturas de 5ºC.", "Necesita bastantes horas de luz, pero es recomendable tenerla en semisombra y evitar la luz muy directa.", "La planta se pudre rápidamete con un exceso de humedad, sobre todo en epocas de frío. El sustrato siempre debe estar seco completamente antede de regar.", "se reproduce fácilmente a través de esquejes de tallo, es recomendable obtener el esqueje usando unas tijeras o cuchillo afilado y cortando a ras. ");
const producto2 = new producto (2, "Echeveria Gibbiflora Purple Pearl", false, "purplePearl.jpg", "La forma silvestre es originaria de Guatemala y México. tolera temperaturas cálidas y secas, entre los 18-26° C. Evita las temperaturas por debajo de los 10° C.", "Necesita luz brillante pero indirecta. Colócala en un lugar donde se reciben varias horas de luz solar directa pero protegida de los rayos del sol más fuertes.", "Riego moderado, dejando que la tierra se seque completamente entre riegos. El exceso de agua puede provocar la pudrición de las raíces.", "Se puede propagar fácilmente a través de esquejes de hojas o de tallos. Asegúrese de que el corte se seque al aire libre durante uno o dos días antes de plantarlo en un sustrato adecuado.")
const producto3 = new producto (3, "Haworthia cymbiformis", false, "haworthiaCymbiformis.jpg", "Las plantas son pequeñas, con una roseta. Las hojas son gruesas, de color verde claro. La principal característica de esta especie es que el final de las hojas es transparente. Es Originaria de Sudáfrica.", "Aprecia una exposición moderada al sol, adaptándose a lugares a pleno sol o a la sombra. Asegúrese de que recibe suficiente luz solar para un crecimiento sano, pero evite la luz solar abrumadora, especialmente a través de un cristal.", "Riego cada 2 semanas, necesita un excelente drenaje en macetas.", "La floración se da principalmente en verano y se la puede reproducir a través de esquejes o hijuelos que nacen de la base");
const producto4 = new producto (4, "Sedum morganianum", false, "sedumMorganianum.jpg", "También recibe los nombres de cola de borrego o cola de burro. En Argentina se la suele llamar Trenza de gitana o Trenza de india. Nativa del sur de México.", "Se desarrolla bien tanto en el exterior o como planta de interior, en suelo, macetas o jardineras, en un sitio muy iluminado o a pleno sol pero que no sea extremo.", "Requiere riego regular y moderado todo el año, menos en invierno que casi no se riega. El exceso de agua puede llegar a pudrirla en poco tiempo.", "Su periodo de floración es al final de la primavera o inicio del verano. Es común reproducirla por esquejes o a través de sus hojas");
const producto5 = new producto (5, "Crassula Ovata Gollum", false, "crassulaOvatagollum.jpg", "Conocida también como 'orejas de Shrek', trompeta o trompa de elefante, la Crassula Ovata 'Gollum' es una de las suculentas más apreciadas por la singular forma de sus hojas, en forma de trompeta. Esta crasa es de la familia de las Crassulaceae, procedente de Sudáfrica", "Necesita sol directo en clima clima templado o indirecto muy iluminado, con algunas horas de sol directo.", "El riego se realiza cada 7 días. Invierno 1 vez al mes", "La reproducción se realiza por hoja o esqueje de tallo. Florece en invierno y da una florcita blanca pequeña.");
const producto6 = new producto (6, "Aeonium Haworthii", false, "aeoniumHaworthii.jpg", "Nativa de las Islas Canarias. También se ha introducido recientemente en zonas con climas similares como el sur de California.", "Sol directo (clima templado) o Indirecto muy iluminado con algunas horas de sol directo", "El Riego se realiza cada 7 días y en invierno cada 15 días","Florece hacia finales de la primavera y se reproduce separando hijuelos que nacen de la roseta principal y por hoja.");
const producto7 = new producto (7, "Graptosedum Bronze", false, "graptosedumBronze.jpg","La Graptopetalum Bronze, también conocida como Crepúsculo Graptosedum VeraHiggins o Graptosedum Alpenglow es una especie que no tiene un origen natural. Esto se debe a que es un híbrido entre la Graptopelatum Paraguayense y la Sedum Stahii.", "Exterior: lo ideal es que estén a pleno sol, o como mínimo en una zona muy luminosa. Interior: necesita mucha luz. Si dispones de una habitación ventanas que den a una zona despejada del exterior, colócala ahí, cerca (nunca justo delante, pues también se podría quemar).", "Escaso. Durante el verano sí que habrá que regar algo más seguido, pero siempre hay que procurar dejar el sustrato entre riegos. En caso de tenerla en maceta, lo ideal es intentar no mojar sus hojas", "Florece en primavera. La reproducción se hace mediante esquejes de hojas, de forma asexual. ");
const producto8 = new producto (8, "Echeveria Elegans", false, "Echeveria-Elegans-rose.jpg", "Es una planta suculenta que emerge de rosetas sin tallo, formando densas alfombras con los estolones; alcanza hasta 10 cm de diámetro. Es nativa del estado de Hidalgo y la subregión de la Sierra en Tabasco, en el centro de México.", "Exterior: lo ideal es que estén a pleno sol, o como mínimo en una zona muy luminosa. Interior: necesita mucha luz. Si dispones de una habitación ventanas que den a una zona despejada del exterior, colócala ahí, cerca (nunca justo delante, pues también se podría quemar).", "Escaso. Durante el verano sí que habrá que regar algo más seguido, pero siempre hay que procurar dejar el sustrato entre riegos. En caso de tenerla en maceta, lo ideal es intentar no mojar sus hojas", "Florece en primavera. La reproducción se hace mediante esquejes de hojas, de forma asexual. ")
const producto9 = new producto (9, "Melocatus matazanus", true, "melocatusMatazanus.jpg", "Originaria de los estados norteños de Cuba. Es una especie común en todo el mundo como planta ornamental. No puede soportar temperaturas frías, por lo que es indispensable mantenerlas por encima de 8-12 ° C en todo momento. Aunque podría resistir hasta los 4 ° C por períodos cortos de tiempo, evitar las bajas temperaturas", "Frío: No tolera heladas (salvo que se adapte)", "Permiten que el suelo se seque un poco antes de volver a regar. Exigen un muy buen drenaje, ya que su sistema de raíces es débil y puede pudrirse, además tienden a ser ineficientes para absorber el agua del suelo húmedo.", "La reproduccion se realiza a través de semillas y florece entre septiembre y noviembre.");
const producto10 = new producto (10, "Echinopsis pachanoi", true, "flor-del-san-pedro.jpg", "Es llamado comúnmente cactus de San Pedro o Huachuma. Nativo de los Andes. Crece de forma silvestre en altitudes entre los 1000 a 3000 m s.n.m.4​ Se encuentra en la cordillera andina abarcando desde Ecuador y el norte del Perú hasta el norte de Chile y Argentina", "Este cactus necesita de pleno sol,", "Empapar bien la tierra y dejar que se seque antes de volver a regarla.", "Florece entre mayo y julio y es posible reproducirlo a través de esquejes.");
const producto11 = new producto (11, "Opuntia microdasys", true, "cactusOpuntiaMicrodasys.jpg", "nativa de México central y septentrional. Es conocida con los nombres de cegador, nopal cegador o nopalillo cegador, en referencia a que las glóquidas que se les clavan en los ojos a los animales que pastan pueden causarles ceguera.", "Es una planta amante del sol que absolutamente necesita luz solar para su desarrollo y floración. Se puede colocar en el balcón exterior o en un jardín sin sombra.", "Es una planta tolerante a la sequía que no requiere riegos frecuentes. Riegue a fondo cuando la tierra esté completamente seca.", "Florece en verano. Los frutos son rojos, oscuros y de pequeño tamaño. Se reproducen mayoritariamente a través de esquejes. ");
const producto12 = new producto (12, "Mammillaria hahniana (Viejita)", true, "laViejita.jpg", "La viejita es un popular cactus para el cultivo ornamental, de fácil cuidado,  es endémico de Guanajuato, Querétaro, Tamaulipas en México. Su hábitat natural son los áridos desiertos.", "Amante del sol que absolutamente necesita luz solar para su desarrollo y floración. Se puede colocar en el balcón exterior o en un jardín sin sombra. Evitar dejar durante largos períodos de tiempo a la luz del sol abrasador del verano.", "Es una planta tolerante a la sequía que no requiere riegos frecuentes. Riegue a fondo cuando la tierra esté completamente seca.", "Florece desde fines del invierno hasta pasada la primavera. Además de las semillas, los principales métodos de propagación incluyen la división y el injerto .");

let arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]
localStorage.setItem("productos_ofrecidos,", JSON.stringify(arrayProductos));
console.table(arrayProductos)
// Acá se arman las tarjetas 
var tarjetas = "";
var i = 1;
for (let producto of arrayProductos) {
    tarjetas += "<div class='card'>";
    tarjetas += "<div class='face face1'>";
    tarjetas += '<div class="content">';
    tarjetas += '<img src="../media/' + producto.imagen + '" alt="' + producto.nombre + '">';
    tarjetas += '<h3>' + producto.nombre + '</h3>';
    tarjetas += '</div>';
    tarjetas += '</div>';
    tarjetas += '<div class="face face2">';
    tarjetas += '<div class="content">';
    tarjetas += '<p>'+ producto.descripcion +'</p>';
/*     tarjetas += '<a href="#">Read More</a>' */
    tarjetas += '</div>';
    tarjetas += '</div>';
    tarjetas += '<div class= "face face3">';
    tarjetas += '<div class= "content">';
    tarjetas += '<p><img class="logoSpec" src="../media/sun.png" alt="Icono de sol">' + producto.sol + '</p>';
    tarjetas += '<p><img class="logoSpec" src="../media/watering-can.png" alt="Icono de regadora">' + producto.agua + '</p>';
    tarjetas += '<p><img class="logoSpec" src="../media/tulip.png" alt= "Icono de tulipan">' + producto.floracion + '</p>';
    tarjetas += '</div>';
    tarjetas += '</div>';
    tarjetas += '</div>';
    i++;
}

$("#prods").append(tarjetas);

function enviarConsulta() {
    console.log("Se llama enviarconsulta")
    var nombre = $("#nombre_formulario").val();
    var apellido = $("#apellido_formulario").val();
    var email = $("#email_formulario").val();

    if ((nombre == "") || (nombre.length < 3)) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu nombre!</p>");
        return false;
    }
    if ((apellido == "") || (apellido.length < 3)) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu apellido!</p>");
        return false;
    }
    if ((email == "") || (!email.includes("@"))) {
        $("#respuesta").html("<p class= 'bg-danger p-3 m-3 fs-5'> ¡Hey, por favor ingresa tu mail!</p>"); 
        return false;
    }
    console.log(nombre, apellido, email)
}

$(document).ready(function() {
    $("#enviarDatos").on("click", function() {
        enviarConsulta();
    });
});