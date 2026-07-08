const laptops = [
  {
    id: 1,
    brand: "ASUS",
    name: "VivoBook 14 A1404Z",
    image: "assets/images/vivobooka14.jpg",
    price: 7499000,
    processor: "Intel Core i5-1235U",
    ram: "8GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    badgeClass: "best",
    badge: "TERLARIS",
    use: ["Kuliah/Kerja", "Tugas Harian"],
  },
  {
    id: 2,
    brand: "Lenovo",
    name: "IdeaPad Slim 3i",
    image: "assets/images/ideapadslim3i.jpg",
    price: 6299000,
    processor: "Intel Core i3-1215U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '15.6" FHD',
    badge: "HEMAT",
    badgeClass:"hemat",
    use: ["Tugas Harian"],
  },
  {
    id: 3,
    brand: "HP",
    name: "14s-dq5000TU",
    image: "assets/images/hp14s.jpg",
    price: 5999000,
    processor: "Intel Core i5-1235U",
    ram: "8GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    badge: "HEMAT",
    badgeClass:"hemat",
    use: ["Kuliah/Kerja"],
  },
  {
    id: 4,
    brand: "Acer",
    name: "Aspire 5 A515-57",
    image: "assets/images/aceraspire5.jpg",
    price: 8499000,
    processor: "Intel Core i5-12450H",
    ram: "8GB DDR4",
    storage: "512GB SSD",
    display: '15.6" FHD IPS',
    badge: "REKOMENDASI",
    badgeClass: "best",
    use: ["Programming"],
},
  {
    id: 5,
    brand: "Lenovo",
    name: "ThinkPad E14 Gen 4",
    image: "assets/images/thinkpade14.jpg",
    price: 12499000,
    processor: "Ryzen 5 5625U",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    badge: "BISNIS",
    use: ["Programming", "Kuliah/Kerja"],
  },
  {
    id: 6,
    brand: "MSI",
    name: "Modern 14 C12MO",
    image: "assets/images/msimodern14.jpg",
    price: 9299000,
    processor: "Intel Core i5-1235U",
    ram: "8GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    badge: "BARU",
    use: ["Desain/Video"],
  },
  {
    id: 7,
    brand: "ASUS",
    name: "ASUS VivoBook Go 14",
    image: "assets/images/vivobookgo14.jpg",
    price: 5499000,
    processor: "AMD Ryzen 3 7320U",
    ram: "8GB LPDDR5",
    storage: "512GB SSD",
    display: '14" FHD',
    badge: "HEMAT",
    badgeClass: "hemat",
    use: ["Tugas Harian","Kuliah/Kerja"]
},
{
    id: 8,
    brand: "Acer",
    name: "Aspire Lite AL14",
    image: "assets/images/aspirelite14.jpg",
    price: 5799000,
    processor: "Intel Core i3-N305",
    ram: "8GB DDR5",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    badge: "HEMAT",
    badgeClass: "hemat",
    use: ["Tugas Harian"]
},
{
    id: 9,
    brand: "Lenovo",
    name: "IdeaPad Slim 5",
    image: "assets/images/ideapadslim5.jpg",
    price: 10999000,
    processor: "AMD Ryzen 7 7730U",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: '14" WUXGA IPS',
    badge: "BARU",
    badgeClass: "baru",
    use: ["Programming","Kuliah/Kerja"]
},
{
    id: 10,
    brand: "HP",
    name: "HP Pavilion 14",
    image: "assets/images/hppavilion14.jpg",
    price: 11499000,
    processor: "Intel Core i5-1335U",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    badge: "TERLARIS",
    badgeClass: "best",
    use: ["Programming","Kuliah/Kerja"]
},
{
    id: 11,
    brand: "Dell",
    name: "Inspiron 14 5430",
    image: "assets/images/inspiron14.jpg",
    price: 11999000,
    processor: "Intel Core i5-1340P",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    display: '14" FHD+',
    badge: "BISNIS",
    badgeClass: "bisnis",
    use: ["Kuliah/Kerja","Programming"]
},
{
    id: 12,
    brand: "MSI",
    name: "GF63 Thin",
    image: "assets/images/gf63thin.jpg",
    price: 12999000,
    processor: "Intel Core i5-12450H",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: '15.6" FHD 144Hz',
    badge: "TERLARIS",
    badgeClass: "best",
    use: ["Gaming","Programming"]
},
{
    id: 13,
    brand: "ASUS",
    name: "TUF Gaming F15",
    image: "assets/images/tuff15.jpg",
    price: 14999000,
    processor: "Intel Core i5-12500H",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: '15.6" FHD 144Hz',
    badge: "TERLARIS",
    badgeClass: "best",
    use: ["Gaming","Desain/Video"]
},
{
    id: 14,
    brand: "Acer",
    name: "Nitro V15",
    image: "assets/images/nitrov15.jpg",
    price: 13999000,
    processor: "Intel Core i5-13420H",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    display: '15.6" FHD 144Hz',
    badge: "BARU",
    badgeClass: "baru",
    use: ["Gaming","Programming"]
},
{
    id: 15,
    brand: "Lenovo",
    name: "LOQ 15IRH8",
    image: "assets/images/loq15.jpg",
    price: 15499000,
    processor: "Intel Core i5-12450H",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    display: '15.6" FHD 144Hz',
    badge: "TERLARIS",
    badgeClass: "best",
    use: ["Gaming","Desain/Video"]
},
{
    id: 16,
    brand: "ASUS",
    name: "Zenbook 14 OLED",
    image: "assets/images/zenbook14.jpg",
    price: 16999000,
    processor: "Intel Core Ultra 5 125H",
    ram: "16GB LPDDR5X",
    storage: "1TB SSD",
    display: '14" OLED 2.8K',
    badge: "PREMIUM",
    badgeClass: "premium",
    use: ["Kuliah/Kerja","Desain/Video"]
}
];

let filtered = [...laptops];
let maxBudget = 30000000;

function rupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function renderCards() {
//   const badgeClass =
//     laptop.badge === "TERLARIS"
//       ? "best"
//       : laptop.badge === "HEMAT"
//         ? "hemat"
//         : laptop.badge === "BISNIS"
//           ? "bisnis"
//           : laptop.badge === "BARU"
//             ? "baru"
//             : "";
  const grid = document.getElementById("laptopGrid");

  document.getElementById("resultCount").textContent =
    `Menampilkan ${filtered.length} laptop`;

  grid.innerHTML = filtered
    .map(
      (laptop) => `
        <div class="laptop-card">

            ${
              laptop.badge
                ? `<span class="badge ${laptop.badgeClass}">${laptop.badge}</span>`
                : ""
            }

            <div class="laptop-image">
                <img src="${laptop.image}" alt="${laptop.name}">
            </div>

            <div class="card-body">

                <small>${laptop.brand}</small>

                <h3>${laptop.name}</h3>

                <div class="price">
                    ${rupiah(laptop.price)}
                </div>

                <ul>
                    <li>${laptop.processor}</li>
                    <li>${laptop.ram} • ${laptop.storage}</li>
                    <li>${laptop.display}</li>
                </ul>

                <div class="card-tags">
                    ${laptop.use.map((tag) => `<span>${tag}</span>`).join("")}
                </div>

                <button onclick="showDetail(${laptop.id})">
                    Detail Selengkapnya →
                </button>

            </div>

        </div>
    `,
    )
    .join("");
}

function applyFilters() {
  const search = document.getElementById("searchInput").value.toLowerCase();

  const brand = document.getElementById("brandFilter").value;

  const activeChips = [...document.querySelectorAll(".chip.active")].map(
    (chip) => chip.textContent.trim(),
  );
  const activeScreens = [
    ...document.querySelectorAll(".screen-chip.active"),
  ].map((chip) => chip.textContent.trim());
  filtered = laptops.filter((laptop) => {
    const matchSearch =
      laptop.name.toLowerCase().includes(search) ||
      laptop.brand.toLowerCase().includes(search);

    const matchBrand = brand === "" || laptop.brand === brand;

    const matchBudget = laptop.price <= maxBudget;
    const matchUse =
      activeChips.length === 0 ||
      activeChips.some((chip) => laptop.use.includes(chip));
    const matchScreen =
      activeScreens.length === 0 ||
      activeScreens.some((screen) => laptop.display.includes(screen));

    return (
      matchSearch &&
      matchBrand &&
      matchBudget &&
      matchUse &&
      matchScreen
    );
  });
  renderCards();
}
function updateBudget(value) {
  console.log("Budget:", value);
  maxBudget = parseInt(value);

  document.getElementById("budgetDisplay").textContent = rupiah(maxBudget);

  applyFilters();
}

function toggleChip(el) {
  el.classList.toggle("active");

  applyFilters();
}

function showDetail(id) {
  const laptop = laptops.find((item) => item.id === id);

  document.getElementById("modalContent").innerHTML = `
        <div style="padding:30px">

            <h2>${laptop.name}</h2>

            <p><b>Merk:</b> ${laptop.brand}</p>
            <p><b>Prosesor:</b> ${laptop.processor}</p>
            <p><b>RAM:</b> ${laptop.ram}</p>
            <p><b>Storage:</b> ${laptop.storage}</p>
            <p><b>Layar:</b> ${laptop.display}</p>
            <p><b>Harga:</b> ${rupiah(laptop.price)}</p>

        </div>
    `;

  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal(event) {
  if (event.target.id === "modalOverlay") {
    document.getElementById("modalOverlay").classList.remove("open");
  }
}
function toggleScreen(el) {
  el.classList.toggle("active");

  applyFilters();
}
renderCards();
