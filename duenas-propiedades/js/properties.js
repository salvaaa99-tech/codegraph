/*
 * Propiedades reales de Dueñas Propiedades (tomadas de su Facebook/Instagram).
 * Las IMÁGENES son de referencia (stock) — reemplázalas por las fotos reales de
 * cada propiedad subiéndolas a img/ y apuntando "img" al archivo.
 *
 * status: "disponible" | "vendido" | "arrendado"
 * op:     "venta" | "arriendo"
 * tipo:   "departamento" | "casa" | "oficina" | "local" | "terreno"
 */
window.PROPERTIES = [
  {
    id: 1,
    title: "Lujoso penthouse a pasos de Av. San Martín",
    op: "venta", tipo: "departamento", status: "disponible",
    comuna: "Viña del Mar", sector: "Av. San Martín",
    price: "Consultar", beds: 3, baths: 3, area: 200,
    desc: "Penthouse de gran categoría en una de las mejores ubicaciones de Viña.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Departamento con preciosa vista al mar",
    op: "venta", tipo: "departamento", status: "disponible",
    comuna: "Viña del Mar", sector: "Avenida Perú",
    price: "Consultar", beds: 2, baths: 1, area: 85,
    desc: "Frente a la costa, con vista panorámica a la playa y al borde costero.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Departamento frente al mar en Av. Coraceros",
    op: "venta", tipo: "departamento", status: "disponible",
    comuna: "Viña del Mar", sector: "Av. Coraceros",
    price: "Consultar", beds: 3, baths: 2, area: 120,
    desc: "Amplio living comedor con terraza y vista directa al océano.",
    img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Departamento Bezanilla, 7 Norte a pasos del mar",
    op: "venta", tipo: "departamento", status: "disponible",
    comuna: "Viña del Mar", sector: "7 Norte",
    price: "Consultar", beds: 3, baths: 2, area: 110,
    desc: "Excelente ubicación a pasos del mar, luminoso y bien conservado.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Departamento frente al Sporting Club",
    op: "venta", tipo: "departamento", status: "disponible",
    comuna: "Viña del Mar", sector: "Sporting",
    price: "Consultar", beds: 2, baths: 2, area: 78,
    desc: "Vista despejada a la ciudad y el sporting, ideal primera vivienda o inversión.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Impecable local comercial en 6 Norte",
    op: "arriendo", tipo: "local", status: "disponible",
    comuna: "Viña del Mar", sector: "6 Norte inmediato a Libertad",
    price: "Consultar", beds: 0, baths: 1, area: 120,
    desc: "Local comercial en sector de alto flujo, listo para habilitar.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Departamento en exclusivo San Alfonso del Mar",
    op: "venta", tipo: "departamento", status: "disponible",
    comuna: "Algarrobo", sector: "San Alfonso del Mar",
    price: "Consultar", beds: 3, baths: 2, area: 95,
    desc: "En el resort con la piscina más grande del mundo, vista a la laguna.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Espectacular parcela camino a Algarrobo",
    op: "venta", tipo: "terreno", status: "disponible",
    comuna: "Algarrobo", sector: "Media Luna, San José",
    price: "Consultar", beds: 0, baths: 0, area: 5000,
    desc: "Oportunidad única para proyecto o casa de campo cerca del litoral.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Departamento 1 Norte con 4 Poniente",
    op: "venta", tipo: "departamento", status: "vendido",
    comuna: "Viña del Mar", sector: "4 Poniente",
    price: "$130.000.000", beds: 3, baths: 2, area: 100,
    desc: "100 m², 3 dormitorios + servicio, ventanas termopanel. Vendido por Dueñas.",
    img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Departamento de lujo frente al Casino (Enjoy)",
    op: "venta", tipo: "departamento", status: "vendido",
    comuna: "Viña del Mar", sector: "Frente a Enjoy",
    price: "Vendido", beds: 3, baths: 3, area: 160,
    desc: "Cocina equipada y vista al mar. Operación cerrada por nuestra corredora.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Departamento a pasos de Estación Miramar",
    op: "arriendo", tipo: "departamento", status: "arrendado",
    comuna: "Viña del Mar", sector: "Miramar",
    price: "Arrendado", beds: 2, baths: 1, area: 70,
    desc: "Terraza con vista a Valparaíso. Arrendado a través de Dueñas Propiedades.",
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Departamento amoblado en calle Viana, centro",
    op: "arriendo", tipo: "departamento", status: "arrendado",
    comuna: "Viña del Mar", sector: "Centro / Viana",
    price: "Arrendado", beds: 1, baths: 1, area: 50,
    desc: "Totalmente equipado en pleno centro. Arrendado por nuestra corredora.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
  }
];
