// ============================================================
// D'ETERNITY - Flores & Detalles — Lógica de la tienda premium
// ============================================================

/* ---------- Catálogo de productos ---------- */
const productShortDescriptions = {
    1: "Un detalle compacto con rosa eterna azul y temática Hot Wheels.",
    2: "Ramo de tres rosas eternas pensado para sorprender con estilo racing.",
    3: "Ramo con rosa eterna azul y un Hot Wheels, ideal para un detalle especial.",
    4: "Ramo de cinco rosas eternas con acabados racing y presentación premium.",
    5: "Ramo de siete rosas con trofeo y fotografías para un regalo más completo.",
    6: "Ramo de seis rosas con fotografía y detalles racing personalizados.",
    7: "Propuesta de ocho rosas con fotografías, trofeo y luces LED.",
    8: "Ramo premium de diez rosas con fotos, trofeo, luces y chocolate.",
    9: "Ramo de gran formato para parejas, con fotos, peluche y temática racing.",
    10: "Ramo premium de diez rosas con temática Spiderman y racing.",
    11: "Box premium de rosas eternas con fotos, trofeo y detalles personalizados.",
    12: "Box compacto con un Hot Wheels y un detalle dulce para regalar.",
    13: "Box Hot Wheels con fotografías, snack y presentación especial.",
    14: "Box con fotografías, corazón metálico y detalles dulces para sorprender.",
    15: "Box personalizado con trofeo, globo, chocolates y cerveza.",
    16: "Box Hot Wheels con fotografías, trofeo, chocolate y snack.",
    17: "Box con rosas eternas, fotografías, trofeo y detalles para celebrar.",
    18: "Box premium con rosas, trofeo, peluche y cerveza.",
    19: "Box personalizado de gran formato con auto, peluche y luces LED.",
    20: "Box premium transparente con Hot Wheels, peluche y luces LED.",
    21: "Box súper especial con autos Camaro, peluche, bebidas y luces LED.",
    22: "Box Hot Wheels compacto con fotografías y chocolates para regalar."
};

const products = [
    {
        id: 1,
        name: "BLUE RACER",
        category: "ramos",
        price: 29.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 1 rosa eterna azul, 1 carrito tipo Hot Wheels, Lazo decorativo, Papel coreano, Tarjeta dedicatoria, Bandera de carreras, Mensaje en tarjeta.",
        contents: ["1 rosa eterna azul", "1 carrito tipo Hot Wheels", "Lazo decorativo", "Papel coreano", "Tarjeta dedicatoria", "Bandera de carreras", "Mensaje en tarjeta"],
        image: "images/BLUE%20RACER.png"
    },
    {
        id: 2,
        name: "TURBO LOVE",
        category: "ramos",
        price: 49.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 3 rosas eternas azules, 1 carrito tipo Hot Wheels, Lazo, Papel coreano premium, Tarjeta dedicatoria, 1 topper temática Hot Wheels, Bandera de carreras, Mensaje en tarjeta.",
        contents: ["3 rosas eternas azules", "1 carrito tipo Hot Wheels", "Lazo", "Papel coreano premium", "Tarjeta dedicatoria", "1 topper temática Hot Wheels", "Bandera de carreras", "Mensaje en tarjeta"],
        image: "images/TURBO%20LOVE.png"
    },
    {
        id: 3,
        name: "BLUE SPEED",
        category: "ramos",
        price: 39.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 1 rosa eterna azul, 1 carrito tipo Hot Wheels, Lazo decorativo, Papel coreano, Tarjeta dedicatoria, Bandera de carreras, Mensaje en tarjeta.",
        contents: ["1 rosa eterna azul", "1 carrito tipo Hot Wheels", "Lazo decorativo", "Papel coreano", "Tarjeta dedicatoria", "Bandera de carreras", "Mensaje en tarjeta"],
        image: "images/BLUE%20SPEED.png"
    },
    {
        id: 4,
        name: "SPEED HEART",
        category: "ramos",
        price: 59.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 5 rosas eternas azules, 1 carrito Hot Wheels en acrílico, Lazo satinado, Papel coreano, 1 topper temática Hot Wheels, Tarjeta dedicatoria, Perlitas, Bandera de carreras, Mensaje en tarjeta.",
        contents: ["5 rosas eternas azules", "1 carrito Hot Wheels en acrílico", "Lazo satinado", "Papel coreano", "1 topper temática Hot Wheels", "Tarjeta dedicatoria", "Perlitas", "Bandera de carreras", "Mensaje en tarjeta"],
        image: "images/SPEED%20HEART.png"
    },
    {
        id: 5,
        name: "RACING LOVE",
        category: "ramos",
        price: 79.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 7 rosas eternas azules, 2 carritos Hot Wheels en acrílico, 1 mini trofeo, 2 fotografías, Lazo personalizado, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Toppers, Bandera de carreras.",
        contents: ["7 rosas eternas azules", "2 carritos Hot Wheels en acrílico", "1 mini trofeo", "2 fotografías", "Lazo personalizado", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Toppers", "Bandera de carreras"],
        image: "images/RACING%20LOVE.png"
    },
    {
        id: 6,
        name: "BLUE DRIVER",
        category: "ramos",
        price: 69.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 6 rosas eternas azules, 1 carrito Hot Wheels en acrílico, 1 fotografía, Lazo grande, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Bandera de carreras, Mensaje en tarjeta.",
        contents: ["6 rosas eternas azules", "1 carrito Hot Wheels en acrílico", "1 fotografía", "Lazo grande", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Bandera de carreras", "Mensaje en tarjeta"],
        image: "images/BLUE%20DRIVER.png"
    },
    {
        id: 7,
        name: "BLUE RACING",
        category: "ramos",
        price: 89.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 8 rosas eternas azules, 2 carritos Hot Wheels en acrílico, 3 fotografías, 1 mini trofeo, Lazo grande, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Topper, Decoración de carrera, Luces LED.",
        contents: ["8 rosas eternas azules", "2 carritos Hot Wheels en acrílico", "3 fotografías", "1 mini trofeo", "Lazo grande", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Topper", "Decoración de carrera", "Luces LED"],
        image: "images/BLUE%20RACING.png"
    },
    {
        id: 8,
        name: "TURBO HEART",
        category: "ramos",
        price: 99.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 10 rosas eternas azules, 2 carritos Hot Wheels en acrílico, 4 fotografías, 1 mini trofeo, Lazo satinado, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Luces LED, Temática racing, Nombre y mensaje en tarjeta, 1 Chocolate Vizzio.",
        contents: ["10 rosas eternas azules", "2 carritos Hot Wheels en acrílico", "4 fotografías", "1 mini trofeo", "Lazo satinado", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Luces LED", "Temática racing", "Nombre y mensaje en tarjeta", "1 Chocolate Vizzio"],
        image: "images/TURBO%20HEART.png"
    },
    {
        id: 9,
        name: "RACING COUPLE",
        category: "ramos",
        price: 149.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 12 rosas eternas azules, 3 carritos Hot Wheels en acrílico, 5 fotografías, 1 mini trofeo, Lazo satinado, Cinta decorativa, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Ganchitos, Luces LED, Temática Spiderman & racing, Nombre y mensaje en tarjeta, 2 Chocolate Vizzio, 1 peluche de Spiderman.",
        contents: ["12 rosas eternas azules", "3 carritos Hot Wheels en acrílico", "5 fotografías", "1 mini trofeo", "Lazo satinado", "Cinta decorativa", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Ganchitos", "Luces LED", "Temática Spiderman & racing", "Nombre y mensaje en tarjeta", "2 Chocolate Vizzio", "1 peluche de Spiderman"],
        image: "images/RACING%20COUPLE.png"
    },
    {
        id: 10,
        name: "BLUE CHAMPION",
        category: "ramos",
        price: 129.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 10 rosas eternas azules, 2 carritos Hot Wheels en acrílico, 4 fotografías, 1 mini trofeo, Lazo satinado, Cinta decorativa, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Ganchitos, Luces LED, Temática Spiderman & racing, Nombre y mensaje en tarjeta, 2 Chocolate Vizzio, 1 peluche de Spiderman.",
        contents: ["10 rosas eternas azules", "2 carritos Hot Wheels en acrílico", "4 fotografías", "1 mini trofeo", "Lazo satinado", "Cinta decorativa", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Ganchitos", "Luces LED", "Temática Spiderman & racing", "Nombre y mensaje en tarjeta", "2 Chocolate Vizzio", "1 peluche de Spiderman"],
        image: "images/BLUE%20CHAMPION.png"
    },
    {
        id: 11,
        name: "BLUE SPEED BOX",
        category: "boxes",
        price: 169.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 15 rosas eternas azules escarchadas, 3 carritos Hot Wheels en acrílico, 5 fotografías, 1 globo metálico corazón, Base caja corazón, 1 mini trofeo, Lazo satinado, Cinta decorativa, Papel coreano premium, Tarjeta dedicatoria, Perlitas, Ganchitos, Luces LED, Temática Spiderman & racing, Nombre y mensaje en tarjeta, 2 Chocolate Vizzio, 1 peluche de Spiderman.",
        contents: ["15 rosas eternas azules escarchadas", "3 carritos Hot Wheels en acrílico", "5 fotografías", "1 globo metálico corazón", "Base caja corazón", "1 mini trofeo", "Lazo satinado", "Cinta decorativa", "Papel coreano premium", "Tarjeta dedicatoria", "Perlitas", "Ganchitos", "Luces LED", "Temática Spiderman & racing", "Nombre y mensaje en tarjeta", "2 Chocolate Vizzio", "1 peluche de Spiderman"],
        image: "images/BLUE-SPEED-BOX.png"
    },
    {
        id: 22,
        name: "BLUE SPEED BOX",
        category: "boxes",
        price: 39.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 2 fotografías, 1 carrito Hot Wheels en acrílico, Caja temática Hot Wheels, 2 Bon o Bon, Tarjeta dedicatoria, Lazo satinado.",
        contents: ["2 fotografías", "1 carrito Hot Wheels en acrílico", "Caja temática Hot Wheels", "2 Bon o Bon", "Tarjeta dedicatoria", "Lazo satinado"],
        image: "images/BLUE%20SPEED%20BOX.png"
    },
    {
        id: 12,
        name: "BLUE RACER BOX",
        category: "boxes",
        price: 29.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 1 carrito Hot Wheels en acrílico, Caja temática Hot Wheels, 1 Bon o Bon, Tarjeta dedicatoria, Lazo satinado.",
        contents: ["1 carrito Hot Wheels en acrílico", "Caja temática Hot Wheels", "1 Bon o Bon", "Tarjeta dedicatoria", "Lazo satinado"],
        image: "images/BLUE%20RACER%20BOX.png"
    },
    {
        id: 13,
        name: "TURBO LOVE BOX",
        category: "boxes",
        price: 49.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 3 fotografías, 1 carrito Hot Wheels en acrílico, Caja temática Hot Wheels, 1 Bon o Bon, 1 Papa Inka Chips, Tarjeta dedicatoria, Lazo satinado.",
        contents: ["3 fotografías", "1 carrito Hot Wheels en acrílico", "Caja temática Hot Wheels", "1 Bon o Bon", "1 Papa Inka Chips", "Tarjeta dedicatoria", "Lazo satinado"],
        image: "images/TURBO%20LOVE%20BOX.png"
    },
    {
        id: 14,
        name: "SPEED HEART BOX",
        category: "boxes",
        price: 59.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 3 fotografías, 1 carrito Hot Wheels en acrílico, Caja temática Hot Wheels, 1 globo metálico corazón, 1 Bon o Bon, 1 Papa Inka Chips, Ganchitos, Tarjeta dedicatoria, Lazo satinado.",
        contents: ["3 fotografías", "1 carrito Hot Wheels en acrílico", "Caja temática Hot Wheels", "1 globo metálico corazón", "1 Bon o Bon", "1 Papa Inka Chips", "Ganchitos", "Tarjeta dedicatoria", "Lazo satinado"],
        image: "images/SPEED%20HEART%20BOX.png"
    },
    {
        id: 15,
        name: "RACING LOVE BOX",
        category: "boxes",
        price: 79.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 4 fotografías, 1 carrito Hot Wheels en acrílico, 1 mini trofeo, 1 globo metálico corazón, Caja personalizada, 1 mini Chocolate Vizzio, 1 mini Sublime, 1 Cerveza Coronita Extra, Ganchitos, Tarjeta dedicatoria, Lazo decorativo.",
        contents: ["4 fotografías", "1 carrito Hot Wheels en acrílico", "1 mini trofeo", "1 globo metálico corazón", "Caja personalizada", "1 mini Chocolate Vizzio", "1 mini Sublime", "1 Cerveza Coronita Extra", "Ganchitos", "Tarjeta dedicatoria", "Lazo decorativo"],
        image: "images/RACING%20LOVE%20BOX.png"
    },
    {
        id: 16,
        name: "BLUE DRIVER BOX",
        category: "boxes",
        price: 69.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 3 fotografías, 1 carrito Hot Wheels en acrílico, 1 globo metálico corazón, 1 mini trofeo, Caja temática Hot Wheels, 1 Chocolate Vizzio, 1 Papa Inka Chips, Ganchitos, Tarjeta dedicatoria, Lazo satinado.",
        contents: ["3 fotografías", "1 carrito Hot Wheels en acrílico", "1 globo metálico corazón", "1 mini trofeo", "Caja temática Hot Wheels", "1 Chocolate Vizzio", "1 Papa Inka Chips", "Ganchitos", "Tarjeta dedicatoria", "Lazo satinado"],
        image: "images/BLUE%20DRIVER%20BOX.png"
    },
    {
        id: 17,
        name: "BLUE RACING BOX",
        category: "boxes",
        price: 89.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 4 fotografías, 1 carrito Hot Wheels en acrílico, 1 mini trofeo, 1 globo metálico corazón, 3 rosas eternas, Caja personalizada, 1 Cerveza Coronita Extra, 1 Papa Inka Chips, Ganchitos, Tarjeta dedicatoria, Lazo decorativo.",
        contents: ["4 fotografías", "1 carrito Hot Wheels en acrílico", "1 mini trofeo", "1 globo metálico corazón", "3 rosas eternas", "Caja personalizada", "1 Cerveza Coronita Extra", "1 Papa Inka Chips", "Ganchitos", "Tarjeta dedicatoria", "Lazo decorativo"],
        image: "images/BLUE%20RACING%20BOX.png"
    },
    {
        id: 18,
        name: "TURBO HEART BOX",
        category: "boxes",
        price: 99.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 4 fotografías, 1 carrito Hot Wheels en acrílico, 1 mini trofeo, 1 peluche, 3 rosas eternas, Caja personalizada, 1 Cerveza Coronita Extra, Ganchitos, Relleno de papel, Tarjeta dedicatoria, 2 lazos decorativos.",
        contents: ["4 fotografías", "1 carrito Hot Wheels en acrílico", "1 mini trofeo", "1 peluche", "3 rosas eternas", "Caja personalizada", "1 Cerveza Coronita Extra", "Ganchitos", "Relleno de papel", "Tarjeta dedicatoria", "2 lazos decorativos"],
        image: "images/TURBO%20HEART%20BOX.png"
    },
    {
        id: 19,
        name: "RACING COUPLE BOX",
        category: "boxes",
        price: 149.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 4 fotografías, 1 Auto Camaro realista, 1 mini trofeo, 1 peluche, Caja personalizada transparente, 1 Cerveza Coronita Extra, 1 Red Bull, Ganchitos, Relleno de papel, Tarjeta dedicatoria, 1 lazo decorativo, 1 licencia Hot Wheels, Luces LED.",
        contents: ["4 fotografías", "1 Auto Camaro realista", "1 mini trofeo", "1 peluche", "Caja personalizada transparente", "1 Cerveza Coronita Extra", "1 Red Bull", "Ganchitos", "Relleno de papel", "Tarjeta dedicatoria", "1 lazo decorativo", "1 licencia Hot Wheels", "Luces LED"],
        image: "images/RACING%20COUPLE%20BOX.png"
    },
    {
        id: 20,
        name: "BLUE CHAMPION BOX",
        category: "boxes",
        price: 129.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 4 fotografías, 1 carrito Hot Wheels en acrílico, 1 mini trofeo, 1 peluche, Caja personalizada transparente, 1 Cerveza Coronita Extra, Ganchitos, Relleno de papel, Tarjeta dedicatoria, 1 lazo decorativo, 1 licencia Hot Wheels, Luces LED.",
        contents: ["4 fotografías", "1 carrito Hot Wheels en acrílico", "1 mini trofeo", "1 peluche", "Caja personalizada transparente", "1 Cerveza Coronita Extra", "Ganchitos", "Relleno de papel", "Tarjeta dedicatoria", "1 lazo decorativo", "1 licencia Hot Wheels", "Luces LED"],
        image: "images/BLUE%20CHAMPION%20BOX.png"
    },
    {
        id: 21,
        name: "BLUE SPEED SUPER BOX",
        category: "boxes",
        price: 169.90,
        oldPrice: null,
        tag: "Hot Wheels",
        description: "Incluye: 4 fotografías, 3 Auto Camaro realista, 1 mini trofeo, 1 peluche, Caja personalizada transparente, 2 Red Bull, Ganchitos, Tarjeta dedicatoria, 1 lazo decorativo, 1 licencia Hot Wheels, Luces LED.",
        contents: ["4 fotografías", "3 Auto Camaro realista", "1 mini trofeo", "1 peluche", "Caja personalizada transparente", "2 Red Bull", "Ganchitos", "Tarjeta dedicatoria", "1 lazo decorativo", "1 licencia Hot Wheels", "Luces LED"],
        image: "images/BLUE%20SPEED%20SUPER%20BOX.png"
    }
];

// Agregar categoría para búsquedas (boxed en lugar de boxes según el nav)
// Nota: el filtro usa 'boxed' para Cajas & Boxes

/* Personalización por defecto para todos los productos */
const defaultAddons = [
    { id: 'chocolate', label: '🍫 Chocolate', price: 5.00 },
    { id: 'globo_pequeno', label: '🎈 Globo pequeño', price: 8.00 },
    { id: 'mini_peluche', label: '🧸 Mini peluche', price: 20.00 },
    { id: 'foto_personalizada', label: '📸 Foto personalizada', price: 5.00 },
    { id: 'luces_led', label: '💡 Luces LED', price: 10.00 },
    { id: 'carrito_adicional', label: '🏎️ Carrito adicional', price: 15.00 },
    { id: 'rosa_adicional', label: '🌹 Rosa adicional', price: 7.00 }
];

/* ---------- Estado global ---------- */
let cart = JSON.parse(localStorage.getItem('deternity_cart')) || [];
let currentCategory = 'all';
let currentSearchTerm = '';
let isCartPage = false;

const WHATSAPP_NUMBER = '51956044662';

/* ---------- Helpers ---------- */
const formatPrice = (val) => `S/ ${Number(val).toFixed(2)}`;

const getCartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);
const getCartTotal = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

const saveCart = () => localStorage.setItem('deternity_cart', JSON.stringify(cart));

function getCategoryDisplay(cat) {
    const map = {
        ramos: 'Ramos',
        boxes: 'Boxes'
    };
    return map[cat] || cat;
}

/* ============================================================
   HEADER — Sombra al hacer scroll
   ============================================================ */
function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ============================================================
   BÚSQUEDA
   ============================================================ */
function initSearch() {
    const toggle = document.getElementById('searchToggle');
    const overlay = document.getElementById('searchOverlay');
    const closeBtn = document.getElementById('closeSearch');
    const input = document.getElementById('search-input');

    if (!toggle || !overlay) return;

    toggle.addEventListener('click', () => {
        overlay.classList.add('open');
        setTimeout(() => input && input.focus(), 220);
    });

    closeBtn && closeBtn.addEventListener('click', () => overlay.classList.remove('open'));

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
    });

    input && input.addEventListener('input', () => {
        currentSearchTerm = input.value.trim();
        // Si la búsqueda está activa, llevamos al usuario al catálogo
        const catalog = document.getElementById('catalogo');
        if (catalog && !isElementInViewport(catalog)) {
            catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        renderProducts();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('open');
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

/* ============================================================
   CATEGORÍAS (chips)
   ============================================================ */
function initCategoryFilters() {
    const container = document.getElementById('category-filters');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        currentCategory = chip.dataset.category;

        document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));

        if (currentSearchTerm) {
            const input = document.getElementById('search-input');
            if (input) input.value = '';
            currentSearchTerm = '';
        }

        renderProducts();
    });
}

// Desde footer
function filterFromFooter(category) {
    const catalog = document.getElementById('catalogo');
    if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        currentCategory = category;
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === category));
        const input = document.getElementById('search-input');
        if (input) input.value = '';
        currentSearchTerm = '';
        renderProducts();
    }, 400);
}

function clearFilters() {
    currentCategory = 'all';
    currentSearchTerm = '';
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
    renderProducts();
}

/* ============================================================
   RENDER DE PRODUCTOS
   ============================================================ */
function getFilteredProducts() {
    let result = [...products];

    if (currentCategory !== 'all') {
        result = result.filter(p => p.category === currentCategory);
    }

    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        result = result.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            getCategoryDisplay(p.category).toLowerCase().includes(term)
        );
    }

    // Orden: primero arreglos (ramos) y luego boxes; dentro de cada grupo, de menor a mayor precio.
    const categoryOrder = { ramos: 0, boxes: 1 };
    result.sort((a, b) => {
        const groupA = categoryOrder[a.category] ?? 99;
        const groupB = categoryOrder[b.category] ?? 99;
        if (groupA !== groupB) return groupA - groupB;
        return a.price - b.price;
    });

    return result;
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = getFilteredProducts();

    const countEl = document.getElementById('product-count');
    if (countEl) {
        countEl.textContent = filtered.length === 1 ? '1 arreglo' : `${filtered.length} arreglos`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-leaf"></i>
                <h3>No encontramos flores para tu búsqueda</h3>
                <p>Prueba con otras palabras o explora nuestro catálogo completo.</p>
                <br>
                <button class="btn btn-outline" onclick="clearFilters()"><i class="fa-solid fa-rotate-left"></i> Ver todo</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <article class="product-card" data-card-id="${product.id}">
            ${product.tag ? `<span class="product-tag ${product.tag === 'Favorito' || product.tag === 'Premium' ? 'hot' : ''}">${product.tag}</span>` : ''}
            <div class="product-media">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="quick-view" onclick="openProductModal(${product.id})">
                    <i class="fa-solid fa-eye"></i> Vista rápida
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryDisplay(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-meta">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" onclick="openProductModal(${product.id})" title="Ver y personalizar" aria-label="Ver ${product.name}">
                        <i class="fa-solid fa-plus"></i><span> Agregar</span>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

/* ============================================================
   MODAL (VISTA RÁPIDA CON PERSONALIZACIÓN)
   ============================================================ */
let modalProduct = null;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalProduct = product;

    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');
    if (!modal || !body) return;

    const addonsHtml = defaultAddons.map(addon => `
        <label class="addon-option">
            <span style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" data-addon-id="${addon.id}" data-addon-price="${addon.price}">
                ${addon.label}
            </span>
            <span>+ ${formatPrice(addon.price)}</span>
        </label>
    `).join('');

    body.innerHTML = `
        <div class="modal-layout">
            <div class="modal-img-side">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-info-side">
                <span class="product-category">${getCategoryDisplay(product.category)}</span>
                <h3 id="modal-title">${product.name}</h3>
                <p class="modal-desc">${productShortDescriptions[product.id] || "Un detalle especial de D'ETERNITY, preparado para sorprender."}</p>

                <div class="modal-includes">
                    <div class="modal-includes-title"><i class="fa-solid fa-gift"></i> ¿Qué incluye?</div>
                    <ul class="modal-includes-list">
                        ${product.contents.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                </div>

                <div class="product-meta" style="align-items:baseline;">
                    <span class="modal-price" id="modal-base-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span style="color:var(--text-muted);text-decoration:line-through;font-size:0.9rem;">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>

                <div>
                    <p class="option-group-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Agrega un extra</p><p class="extras-note" style="text-align:left;margin:0 0 10px;">Precios referenciales; ajustables según costos reales.</p>
                    <div id="modal-addons">${addonsHtml}</div>
                </div>

                <div class="card-message-field">
                    <label for="modal-card-message"><i class="fa-regular fa-envelope"></i> Dedicatoria para la tarjeta (gratis)</label>
                    <textarea id="modal-card-message" maxlength="160" placeholder="Escribe un mensaje especial…"></textarea>
                </div>

                <button class="add-to-cart-modal" id="modal-add-btn">
                    <i class="fa-solid fa-bag-shopping"></i> Añadir por <span id="modal-total-price">${formatPrice(product.price)}</span>
                </button>
            </div>
        </div>
    `;

    // Recalcular precio dinámico
    const addonsContainer = document.getElementById('modal-addons');
    addonsContainer.addEventListener('change', updateModalTotalPrice);

    const addBtn = document.getElementById('modal-add-btn');
    addBtn.addEventListener('click', () => addProductFromModal(product));

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function updateModalTotalPrice() {
    if (!modalProduct) return;
    const checked = document.querySelectorAll('#modal-addons input[data-addon-id]:checked');
    let addonTotal = 0;
    checked.forEach(cb => addonTotal += parseFloat(cb.dataset.addonPrice));

    const totalPrice = modalProduct.price + addonTotal;
    const totalEl = document.getElementById('modal-total-price');
    const baseEl = document.getElementById('modal-base-price');
    if (totalEl) totalEl.textContent = formatPrice(totalPrice);

    // Actualizar precio base visible con la base (sin crujir informacion)
    if (baseEl) baseEl.textContent = formatPrice(modalProduct.price);
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalProduct = null;
}

/* ============================================================
   AÑADIR PRODUCTO DESDE EL MODAL
   ============================================================ */
function addProductFromModal(product) {
    const selectedAddons = [];
    let unitPrice = product.price;

    const checkedAddons = document.querySelectorAll('#modal-addons input[data-addon-id]:checked');
    checkedAddons.forEach(cb => {
        const addon = defaultAddons.find(a => a.id === cb.dataset.addonId);
        if (addon) {
            selectedAddons.push(addon.label);
            unitPrice += addon.price;
        }
    });

    const cardMessage = document.getElementById('modal-card-message')?.value.trim() || '';

    // key único por producto + personalización
    const itemKey = JSON.stringify({ id: product.id, addons: selectedAddons, cardMessage });

    const existing = cart.find(item => item.key === itemKey);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            key: itemKey,
            id: product.id,
            name: product.name,
            image: product.image,
            category: product.category,
            price: unitPrice,          // precio incluye addons seleccionados
            oldPrice: product.oldPrice,
            addons: selectedAddons,
            cardMessage,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`✓ "${product.name}" añadido`);
    closeProductModal();
}

/* ============================================================
   CARRITO — UI Y ACCIONES
   ============================================================ */
function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const fcCount = document.getElementById('fc-count');
    const fcTotal = document.getElementById('fc-total');

    const count = getCartCount();
    const total = getCartTotal();

    if (badge) badge.textContent = count;
    if (fcCount) fcCount.textContent = count;
    if (fcTotal) fcTotal.textContent = total.toFixed(2);

    // Barra flotante visible solo si hay artículos
    const floating = document.getElementById('floating-cart');
    if (floating) floating.classList.toggle('show', count > 0);
}

function goToCart() {
    window.location.href = 'carrito.html';
}

/* Toast */
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const textSpan = toast.querySelector('span, .toast-text');
    if (toast.querySelector('.toast-text')) {
        toast.querySelector('.toast-text').textContent = message;
    }

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ============================================================
   CARRITO — PÁGINA (carrito.html)
   ============================================================ */
function renderCartPage() {
    const container = document.getElementById('cart-items-page');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:50px 20px;">
                <i class="fa-solid fa-basket-shopping" style="font-size:3rem; color:var(--primary-light); margin-bottom:16px;"></i>
                <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--green-dark);">Tu carrito está vacío</h3>
                <p style="color:var(--text-muted); margin:10px 0 20px;">Sorprende a alguien especial hoy.</p>
                <a href="index.html" class="btn btn-primary"><i class="fa-solid fa-arrow-left"></i> Explorar arreglos</a>
            </div>
        `;
        updateCartSummary();
        return;
    }

    const itemsHtml = cart.map(item => {
        const addonsText = item.addons && item.addons.length
            ? `<p class="cart-item-addons"><i class="fa-solid fa-gift"></i> ${item.addons.join(' · ')}</p>`
            : '';
        const cardText = item.cardMessage
            ? `<p class="cart-item-addons card-message"><i class="fa-solid fa-envelope"></i> "${escapeHtml(item.cardMessage)}"</p>`
            : '';

        // Nota: pasamos índice como referencia, no key para evitar problemas de caracteres
        const idx = cart.indexOf(item);

        return `
            <div class="cart-page-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                <div class="cart-item-main">
                    <h4 class="cart-page-title">${escapeHtml(item.name)}</h4>
                    ${addonsText}
                    ${cardText}
                    <div class="price-per-unit">
                        <span class="cart-page-price">${formatPrice(item.price)}</span>
                        <small>c/u</small>
                        ${item.oldPrice ? `<span class="cart-old-price">${formatPrice(item.oldPrice)}</span>` : ''}
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="qty-control">
                        <button class="qty-btn" onclick="changeCartItemQty(${idx}, -1)" aria-label="Disminuir cantidad"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-num">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeCartItemQty(${idx}, 1)" aria-label="Aumentar cantidad"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <span class="item-line-total">${formatPrice(item.price * item.quantity)}</span>
                    <button class="cart-remove-btn btn-icon-only" onclick="removeCartItem(${idx})" title="Eliminar" aria-label="Eliminar producto">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = itemsHtml;
    updateCartSummary();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function changeCartItemQty(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    updateCartUI();
    renderCartPage();
}

function removeCartItem(index) {
    if (cart[index]) cart.splice(index, 1);
    saveCart();
    updateCartUI();
    renderCartPage();
}

/* ============================================================
   RESUMEN DE PAGO — carrito.html
   ============================================================ */
function updateCartSummary() {
    const subtotalEl = document.getElementById('summary-subtotal');
    const totalEl = document.getElementById('cart-total-page');
    const countBadge = document.getElementById('cart-items-count-badge');

    const total = getCartTotal();
    const count = getCartCount();

    if (subtotalEl) subtotalEl.textContent = total.toFixed(2);
    if (totalEl) totalEl.textContent = total.toFixed(2);
    if (countBadge) countBadge.textContent = `${count} ${count === 1 ? 'ítem' : 'ítems'}`;
}

/* ============================================================
   ENTREGA — SOLO DELIVERY
   ============================================================ */
let deliveryMode = 'delivery';

function setDeliveryMode() {
    deliveryMode = 'delivery';
    const addressFields = document.getElementById('address-fields');
    const deliveryCostText = document.getElementById('delivery-cost-text');
    if (addressFields) addressFields.style.display = 'block';
    if (deliveryCostText) deliveryCostText.textContent = 'Por coordinar';
}

/* ============================================================
   ENVÍO POR WHATSAPP
   ============================================================ */
function sendOrderWhatsApp() {
    if (cart.length === 0) {
        showToast('Tu carrito está vacío');
        return;
    }

    const name = document.getElementById('client-name')?.value.trim();
    const phone = document.getElementById('client-phone')?.value.trim();
    const address = document.getElementById('client-address')?.value.trim();
    const reference = document.getElementById('client-reference')?.value.trim();

    if (!name || !phone) {
        showToast('Completa tu nombre y teléfono');
        if (!name && document.getElementById('client-name')) document.getElementById('client-name').focus();
        else if (document.getElementById('client-phone')) document.getElementById('client-phone').focus();
        return;
    }

    if (deliveryMode === 'delivery' && !address) {
        showToast('Ingresa tu dirección de entrega');
        document.getElementById('client-address')?.focus();
        return;
    }

    /*
     * WhatsApp: usamos únicamente emojis ampliamente compatibles y los
     * generamos por Unicode para evitar caracteres de reemplazo (�).
     * También evitamos los asteriscos de Markdown para que todo el texto
     * conserve un aspecto uniforme en WhatsApp.
     */
    const check = String.fromCodePoint(0x2705);       // ✅
    const flower = String.fromCodePoint(0x1F338);     // 🌸
    const clipboard = String.fromCodePoint(0x1F4CB);  // 📋
    const cartIcon = String.fromCodePoint(0x1F6D2);   // 🛒
    const money = String.fromCodePoint(0x1F4B0);      // 💰

    let msg = `${flower} D'ETERNITY - FLORES & DETALLES\n`;
    msg += `${clipboard} NUEVO PEDIDO\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `${check} DATOS DEL CLIENTE\n`;
    msg += `${check} Cliente: ${name}\n`;
    msg += `${check} Teléfono: ${phone}\n`;
    msg += `${check} Tipo: Delivery a domicilio\n`;

    if (deliveryMode === 'delivery') {
        msg += `${check} Dirección: ${address}\n`;
        if (reference) msg += `${check} Referencia: ${reference}\n`;
    }

    msg += `\n${cartIcon} DETALLE DEL PEDIDO\n`;
    cart.forEach((item, i) => {
        msg += `${check} ${i + 1}. ${item.quantity} x ${item.name}\n`;
        if (item.addons && item.addons.length) {
            msg += `   ${check} Extras: ${item.addons.join(', ')}\n`;
        }
        msg += `   ${check} Precio: S/ ${(item.price * item.quantity).toFixed(2)}\n`;
        if (item.cardMessage) {
            msg += `   ${check} Dedicatoria: ${item.cardMessage}\n`;
        }
    });

    msg += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `${money} TOTAL: S/ ${getCartTotal().toFixed(2)}\n`;
    msg += `${check} Pago: Anticipado (Yape / Plin)\n`;
    msg += `\n${check} ¿Me confirman disponibilidad y coordinamos la entrega?`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;

    // Al confirmar el pedido, consideramos que el pedido fue enviado a WhatsApp
    // y limpiamos el carrito para que no vuelva a aparecer al regresar a la web.
    localStorage.removeItem('deternity_cart');
    cart = [];
    updateCartUI();
    renderCartPage();

    window.location.href = url;
}

/* ============================================================
   PUNTOS ANIMADOS (data-animate)
   ============================================================ */
function initScrollAnimation() {
    const animatedEls = document.querySelectorAll('[data-animate]');
    if (!animatedEls.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedEls.forEach(el => io.observe(el));
}

/* ============================================================
   INICIALIZACIÓN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    isCartPage = !!document.getElementById('cart-items-page');

    // index.html
    const grid = document.getElementById('product-grid');
    if (grid) {
        renderProducts();
        initCategoryFilters();
    }

    initHeaderScroll();
    initSearch();
    setDeliveryMode();
    initScrollAnimation();

    // Modal cerrar
    const modal = document.getElementById('product-modal');
    const closeBtn = document.getElementById('closeModal');
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProductModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeProductModal();
        });
    }

    // Carrito
    updateCartUI();
    if (isCartPage) {
        setDeliveryMode();
        renderCartPage();

        // WhatsApp
        const wspBtn = document.getElementById('send-wsp-btn') || document.querySelector('.wsp-checkout-btn');
        if (wspBtn) wspBtn.addEventListener('click', sendOrderWhatsApp);
    }
});

// Exponer funciones para inline onclick
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.clearFilters = clearFilters;
window.filterFromFooter = filterFromFooter;
window.changeCartItemQty = changeCartItemQty;
window.removeCartItem = removeCartItem;
window.setDeliveryMode = setDeliveryMode;
window.goToCart = goToCart;
