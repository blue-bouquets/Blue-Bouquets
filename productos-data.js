// productos-data.js
const productos = [
  // --- BOMBACHAS ---
  {
    id: "vedetinasdealgodon",
    sku: "Vedetinas de Algodon",
    cat: "bombachas",
    name: "Vedetinas de Algodón",
    img: ["images/vedetinasdealgodon1.jpeg", "images/vedetinasdealgodon2.jpeg"],
    desc: "Confeccionadas en algodón elástico de alta calidad, ideales para el uso diario aportando máxima comodidad.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Blanca M", s: 1 }, { c: "Roja M", s: 1 }, { c: "Gris M", s: 1 }, { c: "Crema M", s: 1 }, { c: "Negra M", s: 1 }
    ]
  },
  {
    id: "vedetinasmorleyestampadas",
    sku: "Vedetinas morley estampadas",
    cat: "bombachas",
    name: "Vedetinas de Morley Estampadas",
    img: ["images/vedetinasestampadasmorley1.jpeg", "images/vedetinasestampadasmorley2.jpeg", "images/vedetinasestampadasmorley3.jpeg", "images/vedetinasestampadasmorley4.jpeg"],
    desc: "Hermosas vedetinas de morley suave con estampados delicados en tendencia.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Piel", s: 2 }, { c: "Blanca", s: 2 }, { c: "Rosa", s: 1 }
    ]
  },
  {
    id: "lessanchasmorley",
    sku: "Less anchas morley",
    cat: "bombachas",
    name: "Less Anchas de Morley",
    img: ["images/lessanchamorley1.jpeg", "images/lessanchamorley2.jpeg", "images/lessanchamorley3.jpeg", "images/lessanchamorley4.jpeg"],
    desc: "Diseño tiro medio-alto con banda ancha regulable en morley. Comodidad absoluta.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Beige", s: 1 }, { c: "Rojo", s: 0 }, { c: "Blanco", s: 0 }
    ]
  },
  {
    id: "lessanchasred",
    sku: "Less anchas red",
    cat: "bombachas",
    name: "Less Anchas de Red",
    img: ["images/lessred1.jpeg", "images/lessred2.jpeg", "mages/lessred3.jpeg"],
    desc: "Material texturizado tipo red, elástica y de excelente calce.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Negro", s: 3 }, { c: "Blanco", s: 2 }, { c: "Rojo", s: 0 }
    ]
  },
  {
    id: "less_regulable_encaje",
    cat: "bombachas",
    tipo: "multi",
    name: "Less Regulable de Encaje",
    talle: "Único (Regulable)",
    img: ["images/lessencaje1.jpeg", "images/lessencaje2.jpeg", "images/lessencaje3.jpeg"],
    precios: [{ qty: 1, px: 3200 }, { qty: 2, px: 5500 }, { qty: 3, px: 7800 }],
    colores: [
      { c: "Blanca", s: 3 }, { c: "Roja", s: 0 }, { c: "Negra", s: 0 }, { c: "Crema", s: 0 }
    ]
  },
  {
    id: "colalessdealgodon",
    sku: "Colaless de algodon",
    cat: "bombachas",
    name: "Colaless de Algodón",
    img: ["images/colalessdealgodon1.jpeg"],
    desc: "Algodón clásico con lycra. Un básico infaltable y súper cómodo.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Blanca", s: 2 }, { c: "Negro", s: 0 }, { c: "Beige", s: 0 }
    ]
  },
  {
    id: "colalessconpuntilla",
    sku: "Colaless con puntilla",
    cat: "bombachas",
    name: "Colaless con Puntilla",
    img: ["images/colalessconpuntilla1.jpeg"],
    desc: "Detalle de puntilla sutil combinado con la suavidad del algodón.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Negra", s: 1 }, { c: "Blanca", s: 3 }, { c: "Gris", s: 1 }, { c: "Beige", s: 0 }
    ]
  },
  {
    id: "lessfrufru",
    sku: "Less fru fru",
    cat: "bombachas",
    name: "Less Fru Fru",
    img: ["images/lessfrufru1.jpeg"],
    desc: "Diseño romántico con terminaciones elásticas fruncidas delicadas.",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Blanca", s: 3 }, { c: "Roja", s: 2 }, { c: "Negra", s: 5 }
    ]
  },
  {
    id: "lessxl",
    sku: "Less XL",
    cat: "bombachas",
    name: "Less XL",
    img: ["images/lessxl1.jpeg"],
    desc: "Corte ergonómico especial en talle grande que garantiza confort total.",
    tipo: "multi",
    talle: "XL",
    precios: [{ qty: 1, px: 4000 }, { qty: 2, px: 7500 }, { qty: 3, px: 10000 }],
    colores: [
      { c: "Rojo", s: 3 }, { c: "Negra", s: 2 }, { c: "Blanco", s: 4 }, { c: "Beige", s: 3 }, { c: "Gris", s: 3 }
    ]
  },
  {
    id: "lessxxlconencaje",
    sku: "Less XXL con encaje",
    cat: "bombachas",
    name: "Less XXL con Encaje",
    img: ["images/lessxxlconencaje1.jpeg"],
    desc: "Talle especial con excelente soporte y delicados detalles de encaje lateral.",
    tipo: "multi",
    talle: "XXL",
    precios: [{ qty: 1, px: 4000 }, { qty: 2, px: 7500 }, { qty: 3, px: 10000 }],
    colores: [
      { c: "Negra", s: 1 }, { c: "Roja", s: 2 }, { c: "Beige", s: 2 }, { c: "Blanca", s: 2 }, { c: "Crema", s: 1 }
    ]
  },
  {
    id: "lessxxldealgodon",
    sku: "Less XXL de algodon",
    cat: "bombachas",
    name: "Less XXL de Algodón",
    img: ["images/lessxxldealgodon1.jpeg"],
    desc: "Línea clásica de algodón modelador en talles grandes, tiro alto confortable.",
    tipo: "multi",
    talle: "XXL",
    precios: [{ qty: 1, px: 4000 }, { qty: 2, px: 7500 }, { qty: 3, px: 10000 }],
    colores: [
      { c: "Blanca", s: 4 }, { c: "Beige", s: 6 }, { c: "Negra", s: 4 }, { c: "Crema", s: 2 }, { c: "Rojo", s: 4 }, { c: "Gris", s: 4 }
    ]
  },

  // --- MEDIAS ---
  {
    id: "mediasmd",
    sku: "Medias MD",
    cat: "medias",
    name: "Medias MD (Pack x3 pares)",
    img: ["🧦"],
    desc: "Súper abrigadas con puño elástico suave que no aprieta.",
    tipo: "simple",
    px: 3000,
    s: 11
  },
  {
    id: "mediasdeplush",
    sku: "Medias de plush",
    cat: "medias",
    name: "Medias de Plush (Pack x2 pares)",
    img: ["🧦"],
    desc: "Textura extrasuave tipo peluche, ideales para el frío en el hogar.",
    tipo: "var",
    px: 3000,
    var: [
      { id: "mpn", l: "Pack Negro", s: 2 },
      { id: "mpb", l: "Pack Beige", s: 1 },
      { id: "mpc", l: "Pack Combinado", s: 1 }
    ]
  },

  // --- CONJUNTOS ---
  {
    id: "begonia",
    sku: "Begonia",
    cat: "conjuntos",
    name: "Begonia",
    img: ["images/begonia.jpeg"],
    desc: "Conjunto de taza soft armada con aro y breteles regulables.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "bg85b", l: "T.85 · Blanco", s: 1 },
      { id: "bg85n", l: "T.85 · Negro", s: 2 },
      { id: "bg100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "coral",
    sku: "Coral",
    cat: "conjuntos",
    name: "Coral",
    img: ["images/coral.jpeg"],
    desc: "Microfibra satinada premium con detalles finos de encaje.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "cr90be", l: "T.90 · Beige", s: 1 }
    ]
  },
  {
    id: "lavanda",
    sku: "Lavanda",
    cat: "conjuntos",
    name: "Lavanda",
    img: ["🌸"],
    desc: "Diseño elegante y cómodo que se adapta de forma natural.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "lv95n", l: "T.95 · Negro", s: 1 },
      { id: "lv100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "cala",
    sku: "Cala",
    cat: "conjuntos",
    name: "Cala",
    img: ["🌸"],
    desc: "Detalles románticos y calce delicado para destacar todos los días.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "cl85be", l: "T.85 · Beige", s: 1 },
      { id: "cl100be", l: "T.100 · Beige", s: 1 },
      { id: "cl95n", l: "T.95 · Negro", s: 1 }
    ]
  },
  {
    id: "alyssum",
    sku: "Alyssum",
    cat: "conjuntos",
    name: "Alyssum",
    img: ["🌸"],
    desc: "Confección premium con texturas suaves y breteles reforzados.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "al85n1", l: "T.85 · Negro (Unidad 1)", s: 1 },
      { id: "al85n2", l: "T.85 · Negro (Unidad 2)", s: 1 },
      { id: "al95g", l: "T.95 · Gris", s: 1 }
    ]
  },
  {
    id: "gardenia",
    sku: "Gardenia",
    cat: "conjuntos",
    name: "Gardenia",
    img: ["🌸"],
    desc: "Línea exclusiva armada que brinda excelente soporte y elegancia.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "gd85n", l: "T.85 · Negro", s: 1 },
      { id: "gd95r", l: "T.95 · Rojo", s: 1 },
      { id: "gd100r", l: "T.100 · Rojo", s: 1 },
      { id: "gd100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "fresia",
    sku: "Fresia",
    cat: "conjuntos",
    name: "Fresia",
    img: ["🌸"],
    desc: "Estilo juvenil y fresco en taza soft ligera.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "fr90n", l: "T.90 · Negro", s: 1 },
      { id: "fr90b", l: "T.90 · Blanco", s: 1 }
    ]
  },
  {
    id: "loto",
    sku: "Loto",
    cat: "conjuntos",
    name: "Loto",
    img: ["✨"],
    desc: "Diseño sofisticado con finas terminaciones elásticas.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "lt85b", l: "T.85 · Blanco", s: 1 },
      { id: "lt85n", l: "T.85 · Negro", s: 1 }
    ]
  },
  {
    id: "dahlia",
    sku: "Dahlia",
    cat: "conjuntos",
    name: "Dahlia",
    img: ["👑"],
    desc: "Modelo reductor sin copa armada para un calce perfecto y natural.",
    tipo: "var",
    px: 11990,
    var: [
      { id: "dh115r", l: "T.115 · Rosa", s: 1 }
    ]
  },
  {
    id: "camelia",
    sku: "Camelia",
    cat: "conjuntos",
    name: "Camelia",
    img: ["👑"],
    desc: "Hermosa combinación con microfibra y detalles importados suaves al tacto.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "cm90b", l: "T.90 · Blanco", s: 1 },
      { id: "cm95be", l: "T.95 · Beige", s: 1 }
    ]
  },
  {
    id: "anemona",
    sku: "Anemona",
    cat: "conjuntos",
    name: "Anemona",
    img: ["✨"],
    desc: "Línea deportiva de algodón sumamente cómodo y elástico.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "an95v", l: "T.95 · Violeta", s: 1 },
      { id: "an100a", l: "T.100 · Amarillo", s: 1 },
      { id: "an100v", l: "T.100 · Violeta", s: 1 }
    ]
  },
  {
    id: "clavel",
    sku: "Clavel",
    cat: "conjuntos",
    name: "Clavel",
    img: ["👑"],
    desc: "Edición especial confeccionada en delicado encaje bordado de alta calidad.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "cv90b", l: "T.90 · Blanco", s: 1 }
    ]
  },
  {
    id: "lirio",
    sku: "Lirio",
    cat: "conjuntos",
    name: "Lirio",
    img: ["🌿"],
    desc: "Artículo juvenil que abarca hasta el talle 4. Excelente calce elástico.",
    tipo: "var",
    px: 9990, // Conserva precio base general de conjuntos comunes
    var: [
      { id: "lr4m", l: "Talle 4 · Marrón", s: 1 },
      { id: "lr4b", l: "Talle 4 · Blanco", s: 1 },
      { id: "lr4r", l: "Talle 4 · Rosa", s: 2 },
      { id: "lr4a", l: "Talle 4 · Amarillo", s: 2 }
    ]
  },
  {
    id: "calvinklein",
    sku: "Calvin Klein",
    cat: "conjuntos",
    name: "Calvin Klein",
    img: ["✨"],
    desc: "Conjunto clásico deportivo de algodón con elástico icónico de la marca.",
    tipo: "var",
    px: 9900,
    var: [
      { id: "ck95n", l: "T.95 · Negro", s: 1 },
      { id: "ck95g", l: "T.95 · Gris", s: 1 },
      { id: "ck100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "violeta",
    sku: "Violeta",
    cat: "conjuntos",
    name: "Violeta",
    img: ["✨"],
    desc: "Estilo sofisticado con excelente base de soporte y colores vivos.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "vl85b", l: "T.85 · Blanco", s: 1 },
      { id: "vl95r", l: "T.95 · Rojo", s: 1 },
      { id: "vl100r", l: "T.100 · Rojo", s: 1 },
      { id: "vl100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "azucena",
    sku: "Azucena",
    cat: "conjuntos",
    name: "Azucena",
    img: ["🌸"],
    desc: "Diseño romántico en tonos pasteles en tendencia.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "az85l", l: "T.85 · Lila", s: 1 },
      { id: "az95c", l: "T.95 · Celeste", s: 1 },
      { id: "az95l", l: "T.95 · Lila", s: 1 },
      { id: "az100s", l: "T.100 · Salmón", s: 1 },
      { id: "az100c", l: "T.100 · Celeste", s: 1 }
    ]
  },
  {
    id: "peonia",
    sku: "Peonia",
    cat: "conjuntos",
    name: "Peonía",
    img: ["🌸"],
    desc: "Encaje delicado y taza suave ideal para destacar tu figura.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "pn85b", l: "T.85 · Blanco", s: 1 },
      { id: "pn90b", l: "T.90 · Blanco", s: 1 },
      { id: "pn100r", l: "T.100 · Rosa", s: 1 }
    ]
  },
  {
    id: "girasol",
    sku: "Girasol",
    cat: "conjuntos",
    name: "Girasol",
    img: ["✨"],
    desc: "Línea premium con detalles traslúcidos exclusivos.",
    tipo: "var",
    px: 11990,
    var: [
      { id: "gs85r", l: "T.85 · Rosa", s: 1 },
      { id: "gs90b", l: "T.90 · Blanco", s: 1 },
      { id: "gs100r", l: "T.100 · Rosa", s: 1 }
    ]
  },
  {
    id: "rosa",
    sku: "Rosa",
    cat: "conjuntos",
    name: "Rosa",
    img: ["images/rosa.jpeg"],
    desc: "Conjunto de algodón cómodo y elástico de uso diario.",
    tipo: "var",
    px: 9990,
    var: [
      { id: "rs85r", l: "T.85 · Rojo", s: 1 },
      { id: "rs90b", l: "T.90 · Blanco", s: 1 },
      { id: "rs90r", l: "T.90 · Rojo", s: 1 },
      { id: "rs95n", l: "T.95 · Negro", s: 1 }
    ]
  },
  {
    id: "malva",
    sku: "Malva",
    cat: "conjuntos",
    name: "Malva",
    img: ["🌸"],
    desc: "Microfibra elástica ultrafina con hermosos detalles de puntilla.",
    tipo: "var",
    px: 11490,
    var: [
      { id: "mv90v", l: "T.90 · Verde", s: 1 },
      { id: "mv95r", l: "T.95 · Rosa", s: 1 },
      { id: "mv95c", l: "T.95 · Crema", s: 1 },
      { id: "mv100v", l: "T.100 · Verde", s: 1 },
      { id: "mv100c", l: "T.100 · Crema", s: 1 }
    ]
  },

  // --- BOXERS ---
  {
    id: "boxertommy",
    sku: "Boxer Tommy",
    cat: "boxers",
    name: "Bóxer Tommy",
    img: ["images/boxertommy.jpeg"],
    desc: "Bóxer clásico de algodón premium con elástico personalizado de la marca.",
    tipo: "var",
    px: 7490,
    var: [
      { id: "bt4b", l: "Talle 4 · Blanco", s: 1 }
    ]
  },

  // --- ROPA ---
  {
    id: "calzastermicas",
    sku: "Calzas termicas",
    cat: "ropa",
    name: "Calzas Térmicas",
    img: ["images/calzatermica1.jpeg"],
    desc: "Calzas con frisa interior premium, ideales para mantener el calor corporal con total comodidad.",
    tipo: "simple",
    px: 7490,
    s: 3
  }
];
