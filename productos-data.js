// productos-data.js
const productos = [
  
 // --- Vedetinas ---
  {
    id: "vedetinasdealgodon",
    sku: "Vedetinas de Algodon",
    cat: "bombachas",
    subcat: "vedetina",
    name: "Vedetinas de Algodón",
    img: ["images/vedetinasalgodon1.jpeg", "images/vedetinasalgodon2.jpeg", "images/vedetinasalgodon3.jpeg", "images/vedetinasalgodon4.jpeg", "images/vedetinasalgodon5.jpeg", "images/vedetinasalgodon6.jpeg", "images/vedetinasalgodon7.jpeg"],
    desc: "Tela de algodón. Talles M y L.",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Blanca M", s: 2 },
      { c: "Beige M", s: 2 },
      { c: "Crema M", s: 1 },
      { c: "Negra M", s: 1 },
      { c: "Beige L", s: 2 },
      { c: "Negra L", s: 1 },
      { c: "Blanca L", s: 2 },
      { c: "Crema L", s: 1 }
    ]
  },
  {
    id: "vedetinas-m-encaje",
    sku: "Vedetinas de Encaje talle M",
    cat: "bombachas",
    subcat: "vedetina",
    name: "Vedetinas M de Encaje",
    img: ["images/vedetinamencaje1.jpeg", "images/vedetinasmencaje2.jpeg"],
    desc: "Vedetinas Talle M de Algodon con aleta de puntilla",
    tipo: "multi",
    talle: "M",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "T.M · Beige", s: 3 },
      { c: "T.M · Negra", s: 3 },
      { c: "T.M · Roja", s: 4 },
      { c: "T.M · Blanca", s: 2 }
    ]
  },
  {
    id: "vedetinas-morley-estampadas",
    sku: "Vedetinas Morley Estampadas",
    cat: "bombachas",
    subcat: "vedetina",
    name: "Vedetinas Morley Estampadas",
    img: ["images/vedetinasestampadasmorley1.jpeg", "images/vedetinasestampadasmorley2.jpeg", "images/vedetinasestampadasmorley3.jpeg", "images/vedetinasestampadasmorley4.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Piel Cerezas", s: 2 },
      { c: "Blanca con moños", s: 1 }
    ]
  },
  {
    id: "vedetinas-xl",
    sku: "Vedetinas XL",
    cat: "bombachas",
    subcat: "vedetina",
    name: "Vedetinas XL",
    img: ["images/vedetinasxl1.jpeg", "images/vedetinasxl2.jpeg", "images/vedetinasxl3.jpeg"],
    tipo: "multi",
    talle: "XL",
    precios: [
      { qty: 1, px: 4000 },
      { qty: 2, px: 7500 },
      { qty: 3, px: 10000 }
    ],
    colores: [
      { c: "T.XL · Negro", s: 2 },
      { c: "T.XL · Beige", s: 2 },
      { c: "T.XL · Gris", s: 2 },
      { c: "T.XL · Blanco", s: 2 },
      { c: "T.XL · Rojo", s: 2 },
      { c: "T.XL · Crema", s: 2 }
    ]
  },
  {
    id: "culot-con-encaje",
    sku: "Culot con encaje",
    cat: "bombachas",
    subcat: "culotte",
    name: "Culot con encaje",
    img: ["images/culotencaje1.jpeg", "images/culotencaje2.jpeg", "images/culotencaje2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 4000 },
      { qty: 2, px: 7500 },
      { qty: 3, px: 10000 }
    ],
    colores: [
      { c: "Roja", s: 1 },
      { c: "Beige", s: 2 }
    ]
  },

  // --- Regulables ---
  {
    id: "less-doble-tira",
    sku: "Less Doble Tira",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Doble Tira",
    img: ["images/dobletira1.jpeg", "images/dobletira2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Crema", s: 2 },
      { c: "Blanca", s: 2 },
      { c: "Roja", s: 2 },
      { c: "Negra", s: 2 },
      { c: "Beige", s: 1 },
      { c: "Verde", s: 1 },
      { c: "Gris", s: 1 }
    ]
  },
  {
    id: "less-regulable-clasicas-art30",
    sku: "Less Regulable Clasicas (Art. 30)",
    cat: "bombachas",
    subcat: "regulable",
    name: ["Less Regulable Clasicas"] ,
    img: ["images/regulableclasicas1.jpeg", "images/regulableclasicas2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Roja", s: 3 },
      { c: "Negra", s: 3 },
      { c: "Blanca", s: 3 },
      { c: "Gris", s: 3 }
    ]
  },
  {
    id: "less-regulables-anchas-de-red",
    sku: "Less Regulables Anchas de Red",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Regulables Anchas de Red",
    img: ["images/lessred1.jpeg", "images/lessred2.jpeg", "images/lessred3.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Negra", s: 3 },
      { c: "Blanca", s: 2 }
    ]
  },
  {
    id: "less-regulables-encaje",
    sku: "Less Regulables Encaje",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Regulables Encaje",
    img: ["images/lessencaje4.jpeg", "images/lessencaje1.jpeg", "images/lessencaje2.jpeg", "images/lessencaje3.jpeg", "images/lessencaje4.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Negro", s: 4 },
      { c: "Crema", s: 1 },
      { c: "Blanca", s: 6 }
    ]
  },
  {
    id: "less-jacinto-regulable-art238",
    sku: "Less Jacinto Regulable",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Jacinto Regulable",
    img: ["images/lessjacinto1.jpeg", "images/lessjacinto2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Beige", s: 4 },
      { c: "Rosa", s: 4 },
      { c: "Negra", s: 4 }
    ]
  },
  {
    id: "less-peonia-regulable-art253",
    sku: "Less Peonía Regulable",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Peonía Regulable",
    img: ["images/lesspeonia1.jpeg", "images/lesspeonia2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Gris", s: 4 },
      { c: "Rosa", s: 4 },
      { c: "Violeta", s: 4 }
    ]
  },
  {
    id: "less-regulables-margarita-coquette",
    sku: "Less Regulables Margarita",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Regulables Margarita (Regulables Coquette)",
    img: ["images/regulablescoquette1.jpeg", "images/regulablescoquette2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Beige", s: 3 },
      { c: "Negra", s: 1 }
    ]
  },
  {
    id: "less-regulables-argentina",
    sku: "Less Regulables Argentina",
    cat: "bombachas",
    subcat: "regulable",
    name: "Less Regulables Argentina",
    img: "👙",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Blanca", s: 7 },
      { c: "Celeste", s: 4 }
    ]
  },

  // --- Colaless ---
  {
    id: "colaless-algodon-m-y-l",
    sku: "Colaless algodon M y L",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless algodon M y L",
    img: ["images/less1.jpeg", "images/less2.jpeg"],
    tipo: "multi",
    talle: "M y L",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "T.M · Verde", s: 1 },
      { c: "T.M · Beige", s: 1 },
      { c: "T.M · Negra", s: 2 },
      { c: "T.M · Crema", s: 1 },
      { c: "T.M · Blanca", s: 1 },
      { c: "T.L · Verde", s: 1 },
      { c: "T.L · Beige", s: 1 },
      { c: "T.L · Crema", s: 1 },
      { c: "T.L · Blanco", s: 1 }
    ]
  },
  {
    id: "colaless-algodon",
    sku: "Colaless algodon",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless algodon",
    img: ["images/lessalgodon1.jpeg", "images/lessalgodon2.jpeg", "images/lessalgodon3.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Blanca", s: 4 },
      { c: "Gris", s: 4 },
      { c: "Negra", s: 4 }
    ]
  },
  {
    id: "colaless-jacinto-art246",
    sku: "Colaless Jacinto",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless Jacinto",
    img: ["images/colalessjacinto1.jpeg", "images/colalessjacinto2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Negra", s: 4 },
      { c: "Beige", s: 3 },
      { c: "Rosa", s: 4 }
    ]
  },
  {
    id: "colaless-peonia-art242",
    sku: "Colaless Peonía",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless Peonía",
    img: ["images/colalesspeonia1.jpeg", "images/colalesspeonia2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Gris", s: 4 },
      { c: "Rosa", s: 4 },
      { c: "Violeta", s: 4 }
    ]
  },
  {
    id: "colaless-de-algodon-con-puntos",
    sku: "Colaless con Puntos",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless de algodon con Puntos",
    img: ["images/colalesspuntos1.jpeg", "images/colalesspuntos2.jpeg"],
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Roja", s: 2 },
      { c: "Blanca", s: 2 },
      { c: "Negra", s: 2 },
      { c: "Beige", s: 2 },
      { c: "Gris", s: 2 },
      { c: "Crema", s: 2 }
    ]
  },
  {
    id: "colaless-xl",
    sku: "Colaless XL",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless XL",
    img: ["images/lessxl4.jpeg", "images/lessxl5.jpeg", "images/lessxl6.jpeg"],
    tipo: "multi",
    talle: "XL",
    precios: [
      { qty: 1, px: 4000 },
      { qty: 2, px: 7500 },
      { qty: 3, px: 10000 }
    ],
    colores: [
      { c: "Negra", s: 3 },
      { c: "Crema", s: 4 },
      { c: "Blanca", s: 2 },
      { c: "Roja", s: 2 },
      { c: "Gris", s: 1 }
    ]
  },
  {
    id: "colaless-xxl",
    sku: "Colaless XXL",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless XXL Algodon",
    img: ["images/lessxxl1.jpeg", "images/lessxxl2.jpeg"],
    tipo: "multi",
    talle: "XXL",
    precios: [
      { qty: 1, px: 4000 },
      { qty: 2, px: 7500 },
      { qty: 3, px: 10000 }
    ],
    colores: [
      { c: "Blanca", s: 8 },
      { c: "Beige", s: 11 },
      { c: "Crema", s: 4 },
      { c: "Rojo", s: 6 },
      { c: "Gris", s: 5 },
      { c: "Negra", s: 5 }
    ]
  },
  {
    id: "colaless-xxl-con-encaje",
    sku: "Colaless XXL con encaje",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless XXL con encaje",
    img: ["images/lessxxlencaje3.jpeg", "images/lessxxlencaje4.jpeg", "images/lessxxlencaje5.jpeg"],
    desc: "Colaless XXL con encaje.",
    tipo: "multi",
    talle: "XXL",
    precios: [
      { qty: 1, px: 4000 },
      { qty: 2, px: 7500 },
      { qty: 3, px: 10000 }
    ],
    colores: [
      { c: "Roja", s: 2 },
      { c: "Beige", s: 2 },
      { c: "Blanca", s: 2 },
      { c: "Crema", s: 2 },
      { c: "Gris", s: 2 }
    ]
  },
  {
    id: "colalessconpuntilla",
    sku: "Colaless de Puntilla y Algodon",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless De Puntilla y Algodon",
    img: ["images/lesspuntilla4.jpeg", "images/lesspuntilla1.jpeg", "images/lesspuntilla3.jpeg", "images/lesspuntilla2.jpeg"],
    desc: "Frente de encaje, trasero de algodon. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Blanca", s: 3 },
      { c: "Gris", s: 3 }
    ]
  },
  {
    id: "lessfrufru",
    sku: "Colaless Fru Fru",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless Fru Fru",
    img: ["images/frufruestampada1.jpeg", "images/frufruestampada2.jpeg", "images/frufruestampada3.jpeg"],
    desc: "Tela sintética y brillosa. Talle 34-42",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Leopardo", s: 2 },
      { c: "Rosa", s: 2 },
      { c: "Dolar", s: 2 },
      { c: "Corazon Negro", s: 2 },
      { c: "Negra con Flor", s: 2 },
      { c: "Blanca con flor", s: 2 }
    ]
  },
  {
    id: "colaless-begonia",
    sku: "Colaless Begonia",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless Begonia (Vedetinas morley)",
    img: ["images/colalesscoquette1.jpeg", "images/colalesscoquette2.jpeg"],
    desc: "Tela de Morley. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Blanca", s: 1 },
      { c: "Beige", s: 2 },
      { c: "Rosa", s: 1 }
    ]
  },
  {
    id: "less_lovely",
    sku: "Less Lovely",
    cat: "bombachas",
    subcat: "colaless",
    name: "Less Lovely",
    img: ["images/lesslovely1.jpeg", "images/lesslovely2.jpeg"],
    desc: "Tela con poliéster. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Beige", s: 1 },
      { c: "Blanca", s: 3 },
      { c: "Rosa", s: 4 }
    ]
  },
  {
    id: "less_rosa",
    sku: "Less Rosa",
    cat: "bombachas",
    subcat: "colaless",
    name: "Less Rosa",
    img: ["images/lessrosa1.jpeg", "images/lessrosa2.jpeg"],
    desc: "Tela de morley. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Violeta", s: 3 },
      { c: "Roja", s: 0 },
      { c: "Negra", s: 0 }
    ]
  },
  {
    id: "colalessazalea",
    sku: "Colaless Azalea art 227 Clara",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless Azalea (Art. 227 Clara)",
    img: ["images/lessazalea1.jpeg", "images/lessazalea2.jpeg"],
    desc: "Tela de algodón con puntilla. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Gris", s: 0 },
      { c: "Rojo", s: 0 },
      { c: "Negro", s: 0 },
      { c: "Blanco", s: 3 }
    ]
  },
  {
    id: "colalesslavanda",
    sku: "Colaless Lavanda art 228 Clara",
    cat: "bombachas",
    subcat: "colaless",
    name: "Colaless Lavanda (Art. 228 Clara)",
    img: ["images/lesslavanda1.jpeg", "images/lesslavanda2.jpeg"],
    desc: "Tela de algodón. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3000 },
      { qty: 2, px: 5500 },
      { qty: 3, px: 7000 }
    ],
    colores: [
      { c: "Gris", s: 1 },
      { c: "Rosa", s: 1 },
      { c: "Negra", s: 1 }
    ]
  },
  // --- Hilo ---
  {
    id: "lesshilo",
    sku: "Less de Hilo",
    cat: "bombachas",
    subcat: "hilo",
    name: "Less de Hilo",
    img: ["images/hilo1.jpeg", "images/hilo2.jpeg", "images/hilo3.jpeg"],
    desc: "Less Hilo, frente encaje. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3500 },
      { qty: 2, px: 6000 }
    ],
    colores: [
      { c: "Blanca", s: 1 },
      { c: "Beige", s: 2 }
    ]
  },
  {
    id: "less-hilo-con-mono",
    sku: "Less de Hilo con Moño",
    cat: "bombachas",
    subcat: "hilo",
    name: "Less de Hilo con Moño",
    img: ["images/lesshilomoño1.jpeg", "images/lesshilomoño2.jpeg"],
    desc: "Less de hilo con detalle de moño. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [
      { qty: 1, px: 3500 },
      { qty: 2, px: 6000 }
    ],
    colores: [
      { c: "Blanca", s: 2 },
      { c: "Negra", s: 2 },
      { c: "Roja", s: 2 }
    ]
  },
// --- Medias ---
  {
    id: "mediasmd",
    sku: "Medias MD",
    cat: "medias",
    name: "Medias MD (Pack x3 pares)",
    img: ["images/mediasmd1.jpeg"],
    desc: "Talle 34-40. De Damas.",
    tipo: "simple",
    px: 3000,
    s: 3
  },
  {
    id: "mediasdeplush",
    sku: "Medias de plush",
    cat: "medias",
    name: "Medias de Plush (Pack x2 pares)",
    img: ["images/mediasplush1.jpeg", "images/mediasplush2.jpeg", "images/mediasplush3.jpeg", "images/mediasplush4.jpeg", "images/mediasplush5.jpeg", "images/mediasplush6.jpeg", "images/mediasplush7.jpeg"],
    desc: "Talle único, elastizadas, de morley con polar interior.",
    tipo: "simple",
    px: 3500,
    s: 13
  },
  {
    id: "soquetesclasicos",
    sku: "Soquetes Clasicos",
    cat: "medias",
    name: "Soquetes Clásicos (Pack x3 pares)",
    img: ["images/soquetes1.jpeg", "images/soquete2.jpeg", "images/soquete3.jpeg"],
    desc: "Soquetes clásicos. Pack x3 pares.",
    tipo: "simple",
    px: 3000,
    s: 4
  },
  {
    id: "mediascapibaraceleste",
    sku: "Medias Capibara Celeste",
    cat: "medias",
    name: "Medias Capibara Celeste",
    img: ["images/mediascapibara1.jpeg", "images/mediascapibara2.jpeg", "images/mediascapibara3.jpeg"],
    desc: "Medias estampadas diseño Capibara Celeste.",
    tipo: "simple",
    px: 3500,
    s: 9
  },

  // --- CONJUNTOS ---
// --- Triángulo Soft ---
  {
    id: "cala",
    sku: "Cala Pia",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Cala",
    img: ["images/cala1.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "cl100be", l: "T.100 · Beige", s: 1 }
    ]
  },
  {
    id: "anemona",
    sku: "Anemona Fay",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Anemona",
    img: ["images/anemona1.jpeg", "images/anemona2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "an100a", l: "T.100 · Amarillo", s: 1 },
      { id: "an100v", l: "T.100 · Violeta", s: 1 }
    ]
  },
  {
    id: "lunaria",
    sku: "Lunaria Star",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Lunaria",
    img: ["images/lunaria1.jpeg", "images/lunaria2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "ln85b", l: "T.85 · Blanco", s: 1 },
      { id: "ln90g", l: "T.90 · Gris", s: 1 },
      { id: "ln95b", l: "T.95 · Blanco", s: 1 },
      { id: "ln95g", l: "T.95 · Gris", s: 1 },
      { id: "ln100n", l: "T.100 · Negro", s: 1 }
    ]
  },
  {
    id: "jacinto",
    sku: "Jacinto Ximena",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Jacinto",
    img: ["images/jacinto1.jpeg", "images/jacinto2.jpeg", "images/jacinto3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 10990,
    var: [
      { id: "jc90b", l: "T.90 · Blanco", s: 1 }
    ]
  },
  {
    id: "conjuntocrisantemo",
    sku: "Crisantemo Alessandra",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Crisantemo",
    img: ["images/crisantemo1.jpeg", "images/crisantemo2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "crisantemo_100_celeste", l: "T.100 · Celeste", s: 1 },
      { id: "cr85n", l: "T.85 · Negro", s: 0 },
      { id: "cr85be", l: "T.85 · Beige", s: 1 },
      { id: "cr90c", l: "T.90 · Celeste", s: 1 },
      { id: "cr95n", l: "T.95 · Negro", s: 1 },
      { id: "cr100b", l: "T.100 · Blanco", s: 1 },
      { id: "cr100be", l: "T.100 · Beige", s: 1 }
    ]
  },
  {
    id: "magnolia",
    sku: "Magnolia Candy Minerva",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Magnolia",
    img: ["images/magnolia1.jpeg", "images/magnolia2.jpeg", "images/magnolia3.jpeg", "images/magnolia4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11990,
    var: [
      { id: "mg85r", l: "T.85 · Rosa", s: 1 },
      { id: "mg90v", l: "T.90 · Violeta", s: 2 },
      { id: "mg90b", l: "T.90 · Blanco", s: 1 },
      { id: "mg90r", l: "T.90 · Rosa", s: 1 },
      { id: "mg95n", l: "T.95 · Negro", s: 2 },
      { id: "mg100v", l: "T.100 · Violeta", s: 1 },
      { id: "mg100r", l: "T.100 · Rosa", s: 2 },
      { id: "mg100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "anturio",
    sku: "Anturio Cherry Minerva",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Anturio",
    img: ["images/anturio1.jpeg", "images/anturio2.jpeg", "images/anturio3.jpeg", "images/anturio4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11990,
    var: [
      { id: "an85n", l: "T.85 · Negro", s: 1 },
      { id: "an85rc", l: "T.85 · Rojo con crema", s: 1 },
      { id: "an90rr", l: "T.90 · Rojo con rosa", s: 1 },
      { id: "an95rr", l: "T.95 · Rojo con rosa", s: 1 },
      { id: "an100rc", l: "T.100 · Rojo con crema", s: 2 }
    ]
  },
  {
    id: "amaranto",
    sku: "Amaranto Art 337 Clara",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Amaranto",
    img: ["images/amaranto1.jpeg", "images/amaranto2.jpeg", "images/amaranto3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11490,
    var: [
      { id: "am85n", l: "T.85 · Negro", s: 1 },
      { id: "am85b", l: "T.85 · Blanco", s: 1 },
      { id: "am90be", l: "T.90 · Beige", s: 1 },
      { id: "am95n", l: "T.95 · Negro", s: 1 },
      { id: "am95b", l: "T.95 · Blanco", s: 1 },
      { id: "am100be", l: "T.100 · Beige", s: 1 }
    ]
  },
  {
    id: "primula",
    sku: "Primula Anne",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Primula",
    img: ["images/primula1.jpeg", "images/primula2.jpeg", "images/primula3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "pr85g", l: "T.85 · Gris", s: 1 },
      { id: "pr85n", l: "T.85 · Negro", s: 1 },
      { id: "pr90be", l: "T.90 · Beige", s: 1 },
      { id: "pr90g", l: "T.90 · Gris", s: 1 },
      { id: "pr95n", l: "T.95 · Negro", s: 1 },
      { id: "pr100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "campanilla",
    sku: "Campanilla Zinnia",
    cat: "conjuntos",
    subcat: "triangulo-soft",
    name: "Campanilla",
    img: ["images/campanilla1.jpeg", "images/campanilla2.jpeg", "images/campanilla3.jpeg", "images/campanilla4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "cmp85be", l: "T.85 · Beige", s: 1 },
      { id: "cmp85v", l: "T.85 · Violeta", s: 1 },
      { id: "cmp90b", l: "T.90 · Blanco", s: 1 },
      { id: "cmp95r", l: "T.95 · Rosa", s: 1 },
      { id: "cmp100v", l: "T.100 · Violeta", s: 1 },
      { id: "cmp100n", l: "T.100 · Negro", s: 1 }
    ]
  },
  // --- Armados ---
  {
    id: "gardenia",
    sku: "Gardenia Kim",
    cat: "conjuntos",
    subcat: "armados",
    name: "Gardenia",
    img: ["images/gardenia1.jpeg", "images/gardenia2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "gd100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "camelia",
    sku: "Camelia Theodora",
    cat: "conjuntos",
    subcat: "armados",
    name: "Camelia",
    img: ["images/camelia1.jpeg", "images/camelia2.jpeg", "images/camelia3.jpeg", "images/camelia4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "cm95be", l: "T.95 · Beige", s: 1 }
    ]
  },
  {
    id: "azalea",
    sku: "Azalea Penny",
    cat: "conjuntos",
    subcat: "armados",
    name: "Azalea",
    img: ["images/azalea1.jpeg", "images/azalea2.jpeg", "images/azalea3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12990,
    var: [
      { id: "az85n", l: "T.85 · Negro", s: 1 },
      { id: "az90b", l: "T.90 · Blanco", s: 1 },
      { id: "az90n", l: "T.90 · Negro", s: 1 },
      { id: "az95bo", l: "T.95 · Bordo", s: 1 },
      { id: "az95be", l: "T.95 · Beige", s: 1 },
      { id: "az100r", l: "T.100 · Rosa", s: 1 }
    ]
  },
  {
    id: "iris",
    sku: "Iris Corina",
    cat: "conjuntos",
    subcat: "armados",
    name: "Iris",
    img: ["images/iris1.jpeg", "images/iris2.jpeg", "images/iris3.jpeg", "images/iris4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "ir100n", l: "T.100 · Negro", s: 1 }
    ]
  },
  {
    id: "mimosa",
    sku: "Mimosa Beatriz",
    cat: "conjuntos",
    subcat: "armados",
    name: "Mimosa",
    img: ["images/mimosa1.jpeg", "images/mimosa2.jpeg"], // Reemplazá por tus imágenes reales
    desc: "...",
    tipo: "var",
    px: 12490,
    var: [
      { id: "mm95r", l: "T.95 · Rosa", s: 1 }
    ]
  },
  {
    id: "hortensia",
    sku: "Hortensia Art 317 Clara",
    cat: "conjuntos",
    subcat: "armados",
    name: "Hortensia",
    img: ["images/hortensia1.jpeg", "images/hortensia2.jpeg", "images/hortensia3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12990,
    var: [
      { id: "ht85rj", l: "T.85 · Rojo", s: 1 },
      { id: "ht90n", l: "T.90 · Negro", s: 1 },
      { id: "ht90b", l: "T.90 · Blanco", s: 1 },
      { id: "ht95rj", l: "T.95 · Rojo", s: 1 },
      { id: "ht100b", l: "T.100 · Blanco", s: 1 },
      { id: "ht100n", l: "T.100 · Negro", s: 1 }
    ]
  },
  {
    id: "madreselva",
    sku: "Madreselva Art 334 Clara",
    cat: "conjuntos",
    subcat: "armados",
    name: "Madreselva",
    img: ["images/madreselva1.jpeg", "images/madreselva2.jpeg", "images/madreselva3.jpeg", "images/madreselva4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12990,
    var: [
      { id: "ms85be", l: "T.85 · Beige", s: 1 },
      { id: "ms90n", l: "T.90 · Negro", s: 1 },
      { id: "ms90c", l: "T.90 · Celeste", s: 0 },
      { id: "ms95be", l: "T.95 · Beige", s: 1 },
      { id: "ms100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  // --- Bralette ---
  {
    id: "begonia",
    sku: "Begonia Alice",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Begonia",
    img: ["images/alice1.jpeg", "images/alice2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "bg85b", l: "T.85 · Blanco", s: 1 }
    ]
  },
  {
    id: "coral",
    sku: "Coral Marie",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Coral",
    img: ["images/coral1.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "cr90be", l: "T.90 · Beige", s: 1 }
    ]
  },
  {
    id: "lavanda",
    sku: "Lavanda Agatha",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Lavanda",
    img: ["images/lavanda1.jpeg", "images/lavanda2.jpeg", "images/lavanda3.jpeg", "images/lavanda4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "lv100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "alyssum",
    sku: "Alyssum Vilma",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Alyssum",
    img: ["images/alyssum.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "al85n1", l: "T.85 · Negro", s: 1 },
      { id: "al85n2", l: "T.85 · Negro", s: 1 },
      { id: "al90g", l: "T.90 · Gris", s: 1 }
    ]
  },
  {
    id: "fressia",
    sku: "Fressia Andy",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Fressia",
    img: ["images/fressia1.jpeg", "images/fressia2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "fr90n", l: "T.90 · Negro", s: 1 }
    ]
  },
  {
    id: "dahlia",
    sku: "Dahlia Valentina",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Dahlia",
    img: ["images/dahlia1.jpeg", "images/dahlia2.jpeg", "images/dahlia3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 12990,
    var: [
      { id: "dh115r", l: "T.115 · Rosa", s: 1 }
    ]
  },
  {
    id: "lirio",
    sku: "Lirio Aylin Juvenil",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Lirio",
    img: ["images/lirio1.jpeg", "images/lirio2.jpeg", "images/lirio3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9490,
    var: [
      { id: "lrT4b", l: "T.4 · Blanco", s: 1 },
      { id: "lrT4a", l: "T.4 · Amarillo", s: 2 }
    ]
  },
  {
    id: "calvin-klein",
    sku: "Calvin Klein",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Calvin Klein",
    img: ["images/ck1.jpeg","images/ck2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "ck95g", l: "T.95 · Gris", s: 1 },
      { id: "ck100b", l: "T.100 · Blanco", s: 1 }
    ]
  },
  {
    id: "azucena",
    sku: "Azucena Lucille",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Azucena",
    img: ["images/azucena1.jpeg", "images/azucena2.jpeg", "images/azucena3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 10990,
    var: [
      { id: "azc95c", l: "T.95 · Celeste", s: 1 },
      { id: "azc100s", l: "T.100 · Salmon", s: 1 },
      { id: "azc100c", l: "T.100 · Celeste", s: 1 }
    ]
  },
  {
    id: "rosa",
    sku: "Rosa Rosetta",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Rosa",
    img: ["images/rosa1.jpeg", "images/rosa2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9990,
    var: [
      { id: "rs85rj", l: "T.85 · Rojo", s: 1 },
      { id: "rs90rj", l: "T.90 · Rojo", s: 1 }
    ]
  },
  {
    id: "malva",
    sku: "Malva Idara",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Malva",
    img: ["images/malva1.jpeg", "images/malva2.jpeg", "images/malva3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 10990,
    var: [
      { id: "mv90v", l: "T.90 · Verde", s: 1 },
      { id: "mv95r", l: "T.95 · Rosa", s: 1 },
      { id: "mv95cr", l: "T.95 · Crema", s: 1 },
      { id: "mv100v", l: "T.100 · Verde", s: 1 },
      { id: "mv100cr", l: "T.100 · Crema", s: 1 }
    ]
  },
  {
    id: "amapola",
    sku: "Amapola Loretta",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Amapola",
    img: ["images/amapola1.jpeg", "images/amapola2.jpeg", "images/amapola3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 10990,
    var: [
      { id: "amp85m", l: "T.85 · Marron", s: 1 },
      { id: "amp85n", l: "T.85 · Negro", s: 1 }
    ]
  },
  {
    id: "orquidea",
    sku: "Orquidea Lupi Minerva",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Orquidea",
    img: ["images/orquidea1.jpeg", "images/orquidea2.jpeg", "images/orquidea3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11990,
    var: [
      { id: "orq85n", l: "T.85 · Negro", s: 1 },
      { id: "orq85ro", l: "T.85 · Rosa oscuro", s: 1 },
      { id: "orq90b", l: "T.90 · Blanco", s: 1 },
      { id: "orq95r", l: "T.95 · Rosa", s: 1 },
      { id: "orq100ro", l: "T.100 · Rosa oscuro", s: 1 },
      { id: "orq100r", l: "T.100 · Rosa", s: 1 }
    ]
  },
  {
    id: "nenufar",
    sku: "Nenufar Mavis",
    cat: "conjuntos",
    subcat: "bralette",
    name: "Nenufar",
    img: ["images/nenufar1.jpeg", "images/nenufar2.jpeg", "images/nenufar3.jpeg", "images/nenufar4.jpeg", "images/nenufar5.jpeg", "images/nenufar6.jpeg"],
    desc: "...",
    tipo: "var",
    px: 9900,
    var: [
      { id: "nn90cr", l: "T.90 · Crema", s: 1 },
      { id: "nn90n", l: "T.90 · Negro", s: 0 },
      { id: "nn95rj", l: "T.95 · Rojo", s: 1 },
      { id: "nn95b", l: "T.95 · Blanco", s: 1 },
      { id: "nn100n", l: "T.100 · Negro", s: 1 },
      { id: "nn100cr", l: "T.100 · Crema", s: 1 }
    ]
  },
  // --- Bralette con Aro ---
  {
    id: "loto",
    sku: "Loto Grecia 6",
    cat: "conjuntos",
    subcat: "bralette-con-aro",
    name: "Loto",
    img: ["images/loto1.jpeg", "images/loto2.jpeg", "images/loto3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11490,
    var: [
      { id: "lt85b", l: "T.85 · Blanco", s: 1 },
      { id: "lt85n", l: "T.85 · Negro", s: 1 }
    ]
  },
  {
    id: "violeta",
    sku: "Violeta Alessia",
    cat: "conjuntos",
    subcat: "bralette-con-aro",
    name: "Violeta",
    img: ["images/violeta1.jpeg", "images/violeta2.jpeg", "images/violeta3.jpeg", "images/violeta4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11490,
    var: [
      { id: "vt85b", l: "T.85 · Blanco", s: 1 },
      { id: "vt95rj", l: "T.95 · Rojo", s: 1 },
      { id: "vt100rj", l: "T.100 · Rojo", s: 1 }
    ]
  },
  {
    id: "peonia",
    sku: "Peonia Linette",
    cat: "conjuntos",
    subcat: "bralette-con-aro",
    name: "Peonia",
    img: ["images/peonia1.jpeg", "images/peonia2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11490,
    var: [
      { id: "pn85b", l: "T.85 · Blanco", s: 1 },
      { id: "pn100r", l: "T.100 · Rosa", s: 1 }
    ]
  },
  {
    id: "belladona",
    sku: "Belladona Martha",
    cat: "conjuntos",
    subcat: "bralette-con-aro",
    name: "Belladona",
    img: ["images/belladona1.jpeg", "images/belladona2.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11490,
    var: [
      { id: "bd85be", l: "T.85 · Beige", s: 1 },
      { id: "bd85b", l: "T.85 · Blanco", s: 1 }
    ]
  },
  {
    id: "diente-de-leon",
    sku: "Diente de Leon Conj aro de morley",
    cat: "conjuntos",
    subcat: "bralette-con-aro",
    name: "Diente de Leon",
    img: ["images/leon1.jpeg", "images/leon2.jpeg", "images/leon3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 10990,
    var: [
      { id: "dl85r", l: "T.85 · Rosa", s: 1 },
      { id: "dl90n", l: "T.90 · Negro", s: 1 },
      { id: "dl90c", l: "T.90 · Celeste", s: 1 },
      { id: "dl95r", l: "T.95 · Rosa", s: 1 },
      { id: "dl95be", l: "T.95 · Beige", s: 1 },
      { id: "dl100n", l: "T.100 · Negro", s: 1 }
    ]
  },
  // --- Boxers ---
  {
    id: "boxerck",
    sku: "Boxer CK",
    cat: "boxers",
    name: "Bóxer CK",
    img: ["images/boxerck1.jpeg"],
    desc: "...",
    tipo: "var",
    px: 7990,
    var: [
      { id: "ckmb", l: "Talle M · Blanco", s: 1 },
      { id: "ckmn", l: "Talle M · Negro", s: 1 },
      { id: "cklaz", l: "Talle L · Azul", s: 1 },
      { id: "ckxlg", l: "Talle XL · Gris", s: 1 },
      { id: "ckxlaz", l: "Talle XL · Azul", s: 1 },
      { id: "ckxxln", l: "Talle XXL · Negro", s: 1 }
    ]
  },
  {
    id: "boxerdufour",
    sku: "Boxer Dufour de Poliester",
    cat: "boxers",
    name: "Bóxer Dufour de Poliester",
    img: ["images/boxerdufour1.jpeg"],
    desc: "...",
    tipo: "var",
    px: 6990,
    var: [
      { id: "dfmr", l: "Talle M · Rojo", s: 1 },
      { id: "dfmg", l: "Talle M · Gris", s: 1 },
      { id: "dflg", l: "Talle L · Gris", s: 1 }
    ]
  },
  {
    id: "boxerdufouralgodon",
    sku: "Boxer Dufour de Algodon",
    cat: "boxers",
    name: "Bóxer Dufour Algodón",
    img: ["images/dufouralgodon1.jpeg", "images/dufouralgodon2.jpeg", "images/dufouralgodon3.jpeg"],
    desc: "75% algodón",
    tipo: "var",
    px: 7990,
    var: [
      { id: "dfamn", l: "Talle M · Negro", s: 1 },
      { id: "dfaln", l: "Talle L · Negro", s: 1 },
      { id: "dfaxlg", l: "Talle XL · Gris", s: 1 },
      { id: "dfaxxld", l: "Talle XXL · Bordo", s: 1 },
      { id: "dfaxxlaz", l: "Talle XXL · Azul", s: 1 },
      { id: "dfaxxln", l: "Talle XXL · Negro", s: 1 }
    ]
  },
  // --- Prendas ---
  {
    id: "pijama2piezas",
    sku: "Pijama 2 piezas",
    cat: "prendas",
    name: "Pijama 2 Piezas",
    img: ["images/pijama1.jpeg", "images/pijama2.jpeg", "images/pijama3.jpeg", "images/pijama4.jpeg", "images/pijama5.jpeg", "images/pijama6.jpeg", "images/pijama7.jpeg"], // Reemplazá por las rutas de tus fotos reales
    desc: "Hermoso pijama de 2 piezas, súper cómodo.",
    tipo: "var",
    var: [
      { id: "pijama_95_rojo", l: "T.95 — Rojo", s: 1 },
      { id: "pijama_100_celeste", l: "T.100 — Celeste", s: 1 },
      { id: "pijama_100_marron", l: "T.100 — Marrón", s: 1 }
    ],
    px: 13490
  },
  {
    id: "calzasefectopiel",
    sku: "Calzas efecto piel",
    cat: "prendas",
    name: "Calzas Efecto Piel",
    img: ["images/pantys1.jpeg", "images/pantys2.jpeg", "images/pantys3.jpeg", "images/pantys4.jpeg"],
    desc: "Calzas con efecto piel, ideales para el invierno.",
    tipo: "var",
    var: [
      { id: "calza_piel_m", l: "M/L", s: 5 },
      { id: "calza_piel_l", l: "XL/XXL", s: 10 }
    ],
    px: 13990
  },
    {
    id: "lessanchasmorley",
    sku: "Less anchas morley",
    cat: "bombachas",
    name: "Less Anchas de Morley",
    img: ["images/lessanchamorley1.jpeg", "images/lessanchamorley2.jpeg", "images/lessanchamorley3.jpeg", "images/lessanchamorley4.jpeg"],
    desc: "Tela de Morley y elastico ancho. Talle 36-44",
    tipo: "multi",
    talle: "Regular",
    precios: [{ qty: 1, px: 3000 }, { qty: 2, px: 5500 }, { qty: 3, px: 7000 }],
    colores: [
      { c: "Beige", s: 0 }, 
    ]
  },
   {
    id: "clavel",
    sku: "Clavel",
    cat: "conjuntos",
    name: "Clavel",
    img: ["images/clavel1.jpeg", "images/clavel2.jpeg", "images/clavel3.jpeg", "images/clavel4.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11490,
    var: [
    ]
  },
   {
    id: "girasol",
    sku: "Girasol",
    cat: "conjuntos",
    name: "Girasol",
    img: ["images/girasol1.jpeg", "images/girasol2.jpeg", "images/girasol3.jpeg"],
    desc: "...",
    tipo: "var",
    px: 11990,
    var: [
      { id: "girasol85n", l: "T.85 • Negro", s: 0 },
    ]
  },
  {
    id: "calzastermicas",
    sku: "Calzas termicas",
    cat: "prendas",
    name: "Calzas Térmicas",
    img: ["images/termica1.jpeg", "images/termica2.jpeg", "images/termica3.jpeg"],
    desc: "...",
    tipo: "simple",
    px: 7490,
    s: 0
  },
   {
    id: "boxertommy",
    sku: "Boxer Tommy",
    cat: "boxers",
    name: "Bóxer Tommy",
    img: ["images/boxertommy.jpeg"],
    desc: "...",
    tipo: "var",
    px: 6990,
    var: [
    ]
  },
];
