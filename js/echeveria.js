class producto {
    constructor(id, nombre, imagen, descripcion, sol, agua, floracion) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.cantidad = descripcion;
        this.descripcion = sol;
        this.precio = agua;
        this.precioTotal = floracion;
    };
};

const producto1 = new producto (1, "Crassula Buddha Temple", "no Foto", "Tiene una amplia distribución, pero la mayoría de las especies disponibles se cultivan a partir de las que crecen en Sudáfrica. Cuenta con buena tolerancia al calor, necesita sol y soporta temperaturas de 5ºC.", "Necesita bastantes horas de luz, pero es recomendable tenerla en semisombra y evitar la luz muy directa.", "La planta se pudre rápidamete con un exceso de humedad, sobre todo en epocas de frío. El sustrato siempre debe estar seco completamente antede de regar.", "se reproduce fácilmente a través de esquejes de tallo, es recomendable obtener el esqueje usando unas tijeras o cuchillo afilado y cortando a ras. ");
const producto2 = new producto (2, "Echeveria Gibbiflora Purple Pearl", "no Foto", "La forma silvestre es originaria de Guatemala y México. tolera temperaturas cálidas y secas, entre los 18-26° C. Evita las temperaturas por debajo de los 10° C.", "Necesita luz brillante pero indirecta. Colócala en un lugar donde se reciben varias horas de luz solar directa pero protegida de los rayos del sol más fuertes.", "Riego moderado, dejando que la tierra se seque completamente entre riegos. El exceso de agua puede provocar la pudrición de las raíces.", "Se puede propagar fácilmente a través de esquejes de hojas o de tallos. Asegúrese de que el corte se seque al aire libre durante uno o dos días antes de plantarlo en un sustrato adecuado.")
const producto3 = new producto (3, "Haworthia cymbiformis", "haworthiaCymbiformis.jpg", "Las plantas son pequeñas, con una roseta. Las hojas son gruesas, de color verde claro. La principal característica de esta especie es que el final de las hojas es transparente. Es Originaria de Sudáfrica.", "Aprecia una exposición moderada al sol, adaptándose a lugares a pleno sol o a la sombra. Asegúrese de que recibe suficiente luz solar para un crecimiento sano, pero evite la luz solar abrumadora, especialmente a través de un cristal.", "Riego cada 2 semanas, necesita un excelente drenaje en macetas.", "La floración se da principalmente en verano y se la puede reproducir a través de esquejes o hijuelos que nacen de la base");

