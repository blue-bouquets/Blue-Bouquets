// productos-data.js
// Guardá acá tu lista unificada. Podés poner varias fotos en "img" usando corchetes.
const productos = [
{
  id:"vclassic",
  sku:"MUL Vedetinas MyL x12 11700",
  cat:"bombachas",
  name:"Vedetinas M y L",
  img:["🌿", "images/vedetina_otra_foto.jpg"], // Podés sumar más imágenes acá
  desc: "Confeccionadas en algodón elástico de alta calidad con costuras reforzadas e invisibles. Pack ideal para uso diario. Ajuste perfecto que no marca la piel.",
  tipo:"multi",
  talle:"Regular",
  precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],
  colores:[{c:"Negra L",s:1},{c:"Blanca L",s:1},{c:"Verde L",s:1},{c:"Roja L",s:1},{c:"Gris L",s:1},{c:"Crema L",s:1},{c:"Negra M",s:1},{c:"Blanca M",s:1},{c:"Verde M",s:1},{c:"Roja M",s:1},{c:"Gris M",s:1},{c:"Crema M",s:1}]
},
{
  id:"vmorley",
  sku:"RI Vedetinas classic estampadas 13500",
  cat:"bombachas",
  name:"Vedetinas de Morley Estampadas", 
  img:["images/vedetinaestampadamorley.jpeg"], // Agrega más rutas separadas por coma cuando tengas fotos
  desc: "Hermosas vedetinas de morley ultra suave con estampados delicados en tendencia (cerezas y moños). Posee puntilla fina perimetral elástica.",
  tipo:"multi",
  talle:"Regular",
  precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],
  colores:[{c:"Piel Cerezas",s:3},{c:"Blanca Moños",s:3},{c:"Rosa Cerezas",s:3},{c:"Negra",s:0}]
},
{
  id:"lessanchas",
  sku:"RI: Less Anchas Morley 15900",
  cat:"bombachas",
  name:"Less Anchas Morley",
  img: ["images/lessancahmorley.jpeg"],
  desc: "Diseño tiro medio-alto con banda ancha regulable en morley de algodón. No aprieta los laterales y acentúa las curvas de forma natural.",
  tipo:"multi",
  talle:"Regular",
  precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],
  colores:[{c:"Roja",s:1},{c:"Beige",s:1},{c:"Negra",s:0},{c:"Blanca",s:0}]
},
{id:"lessred",sku:"RI Less Anchas Red 15900",cat:"bombachas",name:"Less Anchas de Red",img:["🌿"],desc:"Material premium texturizado tipo red. Elástica y cómoda.",tipo:"multi",talle:"Regular",precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],colores:[{c:"Negra",s:5},{c:"Blanca",s:4},{c:"Negra",s:0}]},
{id:"lessencaje",sku:"RI Less Regu Encaje 13900",cat:"bombachas",name:"Less Regulables de Encaje",img:["🌿"],desc:"Encaje floral importado transparente con breteles laterales regulables.",tipo:"multi",talle:"Regular",precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],colores:[{c:"Blanca",s:4},{c:"Crema",s:1},{c:"Roja",s:0}]},
{id:"lessclassic",sku:"RI Less Classic 12900",cat:"bombachas",name:"Colaless Classic",img:["🌿"],desc:"Algodón con lycra clásico. Básico infaltable.",tipo:"multi",talle:"Regular",precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],colores:[{c:"Negra",s:1},{c:"Blanca",s:4},{c:"Beige",s:4}]},
{id:"colalessfrente",sku:"MUL Colaless Frente Puntilla x12 13140",cat:"bombachas",name:"Colaless de Puntilla",img:["🌿"],desc:"Frente cubierto en encaje de puntilla sutil y espalda lisa.",tipo:"multi",talle:"Regular",precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],colores:[{c:"Negra",s:3},{c:"Blanca",s:3},{c:"Gris",s:3},{c:"Beige",s:3}]},
{id:"coquette",sku:"MUL Regulables Coquette 12600",cat:"bombachas",name:"Regulables Coquette",img:["🌿"],desc:"Estilo romántico con lazos satinados ajustables.",tipo:"multi",talle:"Regular",precios:[{qty:1,px:3000},{qty:2,px:5500},{qty:3,px:7000}],colores:[{c:"Blanco",s:4},{c:"Negro",s:4},{c:"Beige",s:4}]},
{id:"lessxl",sku:"MUL Colaless XL BELLA MARIE X12 16200",cat:"bombachas",name:"Less XL",img:["🌿"],desc:"Corte ergonómico especial talles grandes. Máximo confort.",tipo:"multi",talle:"XL",precios:[{qty:1,px:4000},{qty:2,px:7500},{qty:3,px:10000}],colores:[{c:"Rojo",s:6},{c:"Negra",s:6},{c:"Blanco",s:4},{c:"Beige",s:4},{c:"Gris",s:4}]},
{id:"lessxxlencaje",sku:"MUL Less XXL Luna c/puntilla x12 24800",cat:"bombachas",name:"Less XXL con Encaje",img:["🌿"],desc:"Talle especial Luna. Combinación de algodón modelador y puntillas laterales.",tipo:"multi",talle:"XXL",precios:[{qty:1,px:4000},{qty:2,px:7500},{qty:3,px:10000}],colores:[{c:"Gris",s:1},{c:"Negra",s:2},{c:"Roja",s:2},{c:"Beige",s:2},{c:"Blanca",s:2},{c:"Marrón",s:2}]},
{id:"lessxxl",sku:"MUL Less Especiales Luna x12 17740",cat:"bombachas",name:"Less XXL",img:["🌿"],desc:"Línea clásica en talles grandes, tiro alto confortable.",tipo:"multi",talle:"XXL",precios:[{qty:1,px:4000},{qty:2,px:7500},{qty:3,px:10000}],colores:[{c:"Gris",s:4},{c:"Negro",s:4},{c:"Crema",s:2},{c:"Rojo",s:2},{c:"Blanco",s:2}]},
{id:"mediasmd",sku:"RI Medias MD 3DOC 14500",cat:"medias",name:"Medias MD (3 pares)",img:["🧦"],desc:"Súper abrigadas, puño elástico que no estrangula la circulación.",tipo:"simple",px:3500,s:12},
{id:"mediasplush",sku:"RI Medias Plush basicas 11500",cat:"medias",name:"Medias Plush (2 pares)",img:["🧦"],desc:"Textura extrasuave tipo peluche, ideales para invierno u hogar.",tipo:"simple",px:3000,s:6},
{id:"alice",sku:"RI Alice 23500",cat:"conjuntos",name:"Alice",img:["🩱"],desc:"Conjunto de taza soft armada con aro, breteles rasados regulables.",tipo:"var",px:9990,var:[{id:"a85b",l:"T.85 · Blanco",s:1},{id:"a85n",l:"T.85 · Negro",s:1},{id:"a100b",l:"T.100 · Blanco",s:1}]},
{id:"coral",sku:"RI Marie Reg 22500",cat:"conjuntos",name:"Coral",img:["🌸"],desc:"Microfibra satinada premium y detalles de encaje elastizado.",tipo:"var",px:9990,var:[{id:"m90b",l:"T.90 · Beige",s:1}]},
{id:"lavanda",sku:"RI Agatha 23500",cat:"conjuntos",name:"Lavanda",img:["🌸"],desc:"Conjunto bralette romántico sin aro, máxima naturalidad.",tipo:"var",px:9990,var:[{id:"ag95n",l:"T.95 · Negro",s:1},{id:"ag100b",l:"T.100 · Blanco",s:1}]},
{id:"cala",sku:"RI Pia 25400",cat:"conjuntos",name:"Cala",img:["🌸"],desc:"Encaje forrado para evitar picazón. Incluye colaless regulable.",tipo:"var",px:9990,var:[{id:"p90b",l:"T.90 · Blanco",s:1},{id:"p85be",l:"T.85 · Beige",s:1},{id:"p95n",l:"T.95 · Negro",s:2}]},
{id:"verbena",sku:"RI Diana 41500",cat:"conjuntos",name:"Verbena",img:["🌸"],desc:"Conjunto armado de lujo, breteles anchos para excelente soporte.",tipo:"var",px:11990,var:[{id:"d85b",l:"T.85 · Blanco",s:1}]},
{id:"alyssum",sku:"RI Vilma 23500",cat:"conjuntos",name:"Alyssum",img:["🌸"],desc:"Corte balconette con base reforzada, realce elegante.",tipo:"var",px:9990,var:[{id:"v85n1",l:"T.85 · Negro",s:1},{id:"v85n2",l:"T.85 · Negro (2)",s:1},{id:"v95g",l:"T.95 · Gris",s:1}]},
{id:"gardenia",sku:"RI Kim 35400",cat:"conjuntos",name:"Gardenia",img:["🌸"],desc:"Tupido encaje geométrico premium, breteles desmontables.",tipo:"var",px:11490,var:[{id:"k85n",l:"T.85 · Negro",s:1},{id:"k90n",l:"T.90 · Negro",s:1},{id:"k90b",l:"T.90 · Blanca",s:1},{id:"k95r",l:"T.95 · Rojo",s:1},{id:"k100r",l:"T.100 · Rojo",s:1},{id:"k100b",l:"T.100 · Blanco",s:1}]},
{id:"fressia",sku:"RI Andy reg 23500",cat:"conjuntos",name:"Fressia",img:["🌸"],desc:"Línea juvenil, tasa soft ligera y bombacha colaless.",tipo:"var",px:9990,var:[{id:"an90n",l:"T.90 · Negro",s:1},{id:"an90b",l:"T.90 · Blanco",s:1}]},
{id:"clavel",sku:"RI Grecia 31500",cat:"conjuntos",name:"Clavel",img:["👑"],desc:"Edición especial de encaje bordado con hilos brillantes de alta calidad.",tipo:"var",px:11490,var:[{id:"gr85b",l:"T.85 · Blanco",s:1},{id:"gr85n",l:"T.85 · Negro",s:1}]},
{id:"dahlia",sku:"RI Valentina Vedetina 31500",cat:"conjuntos",name:"Dahlia",img:["👑"],desc:"Corpiño reductor sin copa armada + vedetina tiro alto.",tipo:"var",px:11990,var:[{id:"val110r",l:"T.110 · Marron",s:0},{id:"val115r",l:"T.115 · Rosa",s:1},{id:"val120b",l:"T.120 · Blanco",s:1}]},
{id:"camelia",sku:"MUL Theodora x6 32300",cat:"conjuntos",name:"Camelia",img:["👑"],desc:"Encaje bicolor importado suave al tacto con microfibra.",tipo:"var",px:11490,var:[{id:"th85bo",l:"T.85 · Bordo",s:1},{id:"th85be",l:"T.85 · Beige",s:1},{id:"th90r",l:"T.90 · Rosa",s:1},{id:"th90b",l:"T.90 · Blanco",s:1},{id:"th95n",l:"T.95 · Negro",s:1},{id:"th95be",l:"T.95 · Beige",s:1}]},
{id:"anemona",sku:"MUL fay x6 25400",cat:"conjuntos",name:"Anemona",img:["✨"],desc:"Conjunto de algodón deportivo cómodo y elástico con estampa.",tipo:"var",px:11490,var:[{id:"f90a",l:"T.90 · Amarillo",s:1},{id:"f95v",l:"T.95 · Violeta",s:1},{id:"f95c",l:"T.95 · Celeste",s:1},{id:"f100a",l:"T.100 · Amarillo",s:1},{id:"f100v",l:"T.100 · Violeta",s:1}]},
{id:"boxertommy",cat:"conjuntos",name:"Boxer Tommy",img:["🩳"],desc:"Bóxer clásico de algodón premium con elástico personalizado Tommy.",tipo:"var",px:7500,var:[{id:"bt1",l:"Azul",s:3},{id:"bt2",l:"Blanco",s:4},{id:"bt3",l:"Gris",s:5}]}
];
