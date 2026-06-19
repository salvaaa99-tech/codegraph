(function () {
  "use strict";

  /* ---- Año en el footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Menú móvil ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Render de propiedades ---- */
  var grid = document.getElementById("propertyGrid");
  var emptyMsg = document.getElementById("gridEmpty");
  var props = window.PROPERTIES || [];

  function featureHtml(p) {
    var parts = [];
    if (p.beds > 0) parts.push('<span>🛏️ ' + p.beds + " dorm.</span>");
    if (p.baths > 0) parts.push('<span>🛁 ' + p.baths + " baño" + (p.baths > 1 ? "s" : "") + "</span>");
    if (p.area > 0) parts.push('<span>📐 ' + p.area + " m²</span>");
    return parts.join("");
  }

  function cardHtml(p) {
    var opLabel = p.op === "venta" ? "Venta" : "Arriendo";
    return (
      '<article class="property" data-op="' + p.op + '" data-tipo="' + p.tipo + '">' +
        '<div class="property-media">' +
          '<span class="property-tag">' + opLabel + "</span>" +
          '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy" />' +
        "</div>" +
        '<div class="property-body">' +
          '<div class="property-price">' + p.price + "</div>" +
          '<h3 class="property-title">' + p.title + "</h3>" +
          '<p class="property-loc">📍 ' + p.comuna + "</p>" +
          '<div class="property-features">' + featureHtml(p) + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function render(list) {
    if (!grid) return;
    grid.innerHTML = list.map(cardHtml).join("");
    if (emptyMsg) emptyMsg.hidden = list.length !== 0;
  }

  render(props);

  /* ---- Filtros (chips) ---- */
  var filters = document.getElementById("filters");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      filters.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      btn.classList.add("is-active");

      var f = btn.getAttribute("data-filter");
      var filtered = props.filter(function (p) {
        if (f === "all") return true;
        return p.op === f || p.tipo === f;
      });
      render(filtered);
    });
  }

  /* ---- Buscador del hero ---- */
  var searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var op = document.getElementById("op").value;
      var tipo = document.getElementById("tipo").value;
      var comuna = document.getElementById("comuna").value;

      var filtered = props.filter(function (p) {
        return (!op || p.op === op) && (!tipo || p.tipo === tipo) && (!comuna || p.comuna === comuna);
      });
      render(filtered);

      // sincroniza chips a "Todas" y baja a resultados
      if (filters) {
        filters.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        var all = filters.querySelector('[data-filter="all"]');
        if (all) all.classList.add("is-active");
      }
      document.getElementById("propiedades").scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---- Formulario de contacto (abre WhatsApp con el mensaje) ---- */
  var contactForm = document.getElementById("contactForm");
  var feedback = document.getElementById("formFeedback");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("email").value;
      var telefono = document.getElementById("telefono").value;
      var interes = document.getElementById("interes").value;
      var mensaje = document.getElementById("mensaje").value;

      var texto =
        "Hola Dueñas Propiedades, soy " + nombre + "." +
        "%0AInterés: " + interes +
        "%0AEmail: " + email +
        (telefono ? "%0ATeléfono: " + telefono : "") +
        (mensaje ? "%0AMensaje: " + mensaje : "");

      // Reemplaza el número por el real de la corredora.
      var wa = "https://wa.me/56900000000?text=" + texto;

      if (feedback) {
        feedback.hidden = false;
        feedback.textContent = "¡Gracias " + nombre + "! Te redirigimos a WhatsApp para enviar tu consulta.";
      }
      window.open(wa, "_blank", "noopener");
      contactForm.reset();
    });
  }
})();
