const laptops = [
  {id:1,brand:'ASUS',name:'VivoBook 14 A1404Z',image:'assets/images/vivobooka14.jpg',price:7499000,oldPrice:8499000,processor:'Intel Core i5-1235U',ram:'8GB DDR4',ramValue:8,storage:'512GB SSD',display:'14" FHD IPS',rating:4.8,reviews:128,promo:true,badge:'TERLARIS',badgeClass:'best',use:['Kuliah/Kerja','Tugas Harian'],weight:'1,40 kg',battery:'hingga 8 jam',gpu:'Intel Iris Xe',priority:1},
  {id:2,brand:'Lenovo',name:'IdeaPad Slim 3i',image:'assets/images/ideapadslim3i.jpg',price:6299000,oldPrice:6799000,processor:'Intel Core i3-1215U',ram:'8GB DDR4',ramValue:8,storage:'256GB SSD',display:'15.6" FHD',rating:4.7,reviews:94,promo:true,badge:'HEMAT',badgeClass:'hemat',use:['Tugas Harian'],weight:'1,63 kg',battery:'hingga 7 jam',gpu:'Intel UHD Graphics',priority:3},
  {id:3,brand:'HP',name:'14s-dq5000TU',image:'assets/images/hp14s.jpg',price:5999000,oldPrice:6499000,processor:'Intel Core i5-1235U',ram:'8GB DDR4',ramValue:8,storage:'512GB SSD',display:'14" FHD IPS',rating:4.7,reviews:86,promo:true,badge:'HEMAT',badgeClass:'hemat',use:['Kuliah/Kerja'],weight:'1,46 kg',battery:'hingga 8 jam',gpu:'Intel Iris Xe',priority:2},
  {id:4,brand:'Acer',name:'Aspire 5 A515-57',image:'assets/images/aceraspire5.jpg',price:8499000,processor:'Intel Core i5-12450H',ram:'8GB DDR4',ramValue:8,storage:'512GB SSD',display:'15.6" FHD IPS',rating:4.8,reviews:76,promo:false,badge:'REKOMENDASI',badgeClass:'best',use:['Programming'],weight:'1,80 kg',battery:'hingga 6 jam',gpu:'Intel Iris Xe',priority:2},
  {id:5,brand:'Lenovo',name:'ThinkPad E14 Gen 4',image:'assets/images/thinkpade14.jpg',price:12499000,processor:'Ryzen 5 5625U',ram:'16GB DDR4',ramValue:16,storage:'512GB SSD',display:'14" FHD IPS',rating:4.9,reviews:142,promo:false,badge:'BISNIS',badgeClass:'bisnis',use:['Programming','Kuliah/Kerja'],weight:'1,59 kg',battery:'hingga 10 jam',gpu:'AMD Radeon Graphics',priority:1},
  {id:6,brand:'MSI',name:'Modern 14 C12MO',image:'assets/images/msimodern14.jpg',price:9299000,processor:'Intel Core i5-1235U',ram:'8GB DDR4',ramValue:8,storage:'512GB SSD',display:'14" FHD IPS',rating:4.7,reviews:62,promo:false,badge:'BARU',badgeClass:'baru',use:['Kuliah/Kerja','Programming'],weight:'1,40 kg',battery:'hingga 9 jam',gpu:'Intel Iris Xe',priority:2},
  {id:7,brand:'ASUS',name:'VivoBook Go 14',image:'assets/images/vivobookgo14.jpg',price:5499000,oldPrice:5999000,processor:'AMD Ryzen 3 7320U',ram:'8GB LPDDR5',ramValue:8,storage:'512GB SSD',display:'14" FHD',rating:4.6,reviews:118,promo:true,badge:'HEMAT',badgeClass:'hemat',use:['Tugas Harian','Kuliah/Kerja'],weight:'1,38 kg',battery:'hingga 10 jam',gpu:'AMD Radeon 610M',priority:2},
  {id:8,brand:'Acer',name:'Aspire Lite AL14',image:'assets/images/aspirelite14.jpg',price:5799000,oldPrice:6199000,processor:'Intel Core i3-N305',ram:'8GB DDR5',ramValue:8,storage:'512GB SSD',display:'14" FHD IPS',rating:4.6,reviews:71,promo:true,badge:'HEMAT',badgeClass:'hemat',use:['Tugas Harian'],weight:'1,30 kg',battery:'hingga 8 jam',gpu:'Intel UHD Graphics',priority:3},
  {id:9,brand:'Lenovo',name:'IdeaPad Slim 5',image:'assets/images/ideapadslim5.jpg',price:10999000,processor:'AMD Ryzen 7 7730U',ram:'16GB DDR4',ramValue:16,storage:'512GB SSD',display:'14" WUXGA IPS',rating:4.8,reviews:109,promo:false,badge:'BARU',badgeClass:'baru',use:['Programming','Kuliah/Kerja'],weight:'1,46 kg',battery:'hingga 9 jam',gpu:'AMD Radeon Graphics',priority:1},
  {id:10,brand:'HP',name:'Pavilion 14',image:'assets/images/HP Pavilion 14.jpg',price:11499000,processor:'Intel Core i5-1335U',ram:'16GB DDR4',ramValue:16,storage:'512GB SSD',display:'14" FHD IPS',rating:4.8,reviews:123,promo:false,badge:'TERLARIS',badgeClass:'best',use:['Programming','Kuliah/Kerja'],weight:'1,41 kg',battery:'hingga 9 jam',gpu:'Intel Iris Xe',priority:1},
  {id:11,brand:'Dell',name:'Inspiron 14 5430',image:'assets/images/Inspiron 14 5430.jpg',price:11999000,processor:'Intel Core i5-1340P',ram:'16GB DDR5',ramValue:16,storage:'512GB SSD',display:'14" FHD+',rating:4.8,reviews:88,promo:false,badge:'BISNIS',badgeClass:'bisnis',use:['Kuliah/Kerja','Programming'],weight:'1,53 kg',battery:'hingga 9 jam',gpu:'Intel Iris Xe',priority:2},
  {id:12,brand:'MSI',name:'GF63 Thin',image:'assets/images/GF63 Thin.jpg',price:12999000,oldPrice:13999000,processor:'Intel Core i5-12450H',ram:'16GB DDR4',ramValue:16,storage:'512GB SSD',display:'15.6" FHD 144Hz',rating:4.7,reviews:98,promo:true,badge:'TERLARIS',badgeClass:'best',use:['Gaming','Programming'],weight:'1,86 kg',battery:'hingga 6 jam',gpu:'NVIDIA GeForce RTX 2050',priority:2},
  {id:13,brand:'ASUS',name:'TUF Gaming F15',image:'assets/images/TUF Gaming F15.jpg',price:14999000,oldPrice:15999000,processor:'Intel Core i5-12500H',ram:'16GB DDR4',ramValue:16,storage:'512GB SSD',display:'15.6" FHD 144Hz',rating:4.9,reviews:157,promo:true,badge:'TERLARIS',badgeClass:'best',use:['Gaming','Desain/Video'],weight:'2,20 kg',battery:'hingga 7 jam',gpu:'NVIDIA GeForce RTX 3050',priority:1},
  {id:14,brand:'Acer',name:'Nitro V 15',image:'assets/images/Nitro V 15.jpg',price:13999000,oldPrice:14999000,processor:'Intel Core i5-13420H',ram:'16GB DDR5',ramValue:16,storage:'512GB SSD',display:'15.6" FHD 144Hz',rating:4.8,reviews:115,promo:true,badge:'BARU',badgeClass:'baru',use:['Gaming','Programming'],weight:'2,11 kg',battery:'hingga 7 jam',gpu:'NVIDIA GeForce RTX 2050',priority:2},
  {id:15,brand:'Lenovo',name:'LOQ 15IRH8',image:'assets/images/LOQ 15IRH8.jpg',price:15499000,oldPrice:16499000,processor:'Intel Core i5-12450H',ram:'16GB DDR5',ramValue:16,storage:'512GB SSD',display:'15.6" FHD 144Hz',rating:4.9,reviews:131,promo:true,badge:'TERLARIS',badgeClass:'best',use:['Gaming','Desain/Video'],weight:'2,38 kg',battery:'hingga 6 jam',gpu:'NVIDIA GeForce RTX 4050',priority:1},
  {id:16,brand:'ASUS',name:'Zenbook 14 OLED',image:'assets/images/Zenbook 14 OLED.jpg',price:16999000,processor:'Intel Core Ultra 5 125H',ram:'16GB LPDDR5X',ramValue:16,storage:'1TB SSD',display:'14" OLED 2.8K',rating:4.9,reviews:99,promo:false,badge:'PREMIUM',badgeClass:'premium',use:['Kuliah/Kerja','Desain/Video'],weight:'1,20 kg',battery:'hingga 12 jam',gpu:'Intel Arc Graphics',priority:1},
  {id:17,brand:'Lenovo',name:'Yoga Slim 7i Gen 9',image:'assets/images/Yoga Slim 7i Gen 9.jpg',price:18999000,processor:'Intel Core Ultra 7 155H',ram:'32GB LPDDR5X',ramValue:32,storage:'1TB SSD',display:'14" OLED 2.8K',rating:4.9,reviews:74,promo:false,badge:'FLAGSHIP',badgeClass:'premium',use:['Kuliah/Kerja','Multitasking','Desain/Video'],weight:'1,39 kg',battery:'hingga 13 jam',gpu:'Intel Arc Graphics',priority:1},
  {id:18,brand:'Acer',name:'Swift Go 14 OLED',image:'assets/images/Swift Go 14 OLED.jpg',price:13999000,oldPrice:14999000,processor:'Intel Core Ultra 5 125H',ram:'16GB LPDDR5',ramValue:16,storage:'512GB SSD',display:'14" OLED 2.8K',rating:4.8,reviews:91,promo:true,badge:'BEST VALUE',badgeClass:'best',use:['Kuliah/Kerja','Desain/Video'],weight:'1,32 kg',battery:'hingga 12 jam',gpu:'Intel Arc Graphics',priority:1}
];

const byId = id => document.getElementById(id);
const formatRupiah = value => `Rp ${Number(value).toLocaleString('id-ID')}`;
const formatShort = value => value >= 1000000 ? `Rp ${Math.round(value / 100000) / 10} jt` : formatRupiah(value);
const getLaptop = id => laptops.find(laptop => laptop.id === Number(id));
let filtered = [...laptops];
let maxBudget = 15000000;
let favoritesOnly = false;
let favorites = new Set(readStorage('findlap-favorites', []));
let compareItems = new Set(readStorage('findlap-compare', []));
let toastTimer;

function readStorage(key, fallback){
  try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch(error){return fallback}
}
function saveStorage(key, value){try{localStorage.setItem(key, JSON.stringify(value))}catch(error){/* storage is optional */}}
function showToast(message){
  const toast = byId('toast'); if(!toast) return;
  toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2700);
}
function getFilterState(){
  const text = (byId('searchInput')?.value || '').trim().toLowerCase();
  const brand = byId('brandFilter')?.value || '';
  const ram = Number(byId('ramFilter')?.value || 0);
  const badge = byId('promoOnly')?.checked || false;
  const uses = [...document.querySelectorAll('#useChips .chip.active')].map(chip => chip.dataset.value);
  const screens = [...document.querySelectorAll('#screenChips .chip.active')].map(chip => chip.dataset.value);
  return {text,brand,ram,promoOnly:badge,uses,screens};
}
function renderCards(){
  const grid = byId('laptopGrid'); if(!grid) return;
  const empty = byId('emptyset');
  if(!filtered.length){grid.innerHTML=''; empty.hidden=false;}
  else {empty.hidden=true; grid.innerHTML=filtered.map(cardTemplate).join('');}
  const result = byId('resultCount'); if(result) result.textContent = `Menampilkan ${filtered.length} laptop`;
  updateCounters();
}
function cardTemplate(laptop){
  const isFav = favorites.has(laptop.id), isCompared = compareItems.has(laptop.id);
  const sale = laptop.oldPrice ? `<del class="old-price">${formatRupiah(laptop.oldPrice)}</del>` : '';
  const tags = laptop.use.slice(0,2).map(tag => `<span class="use-tag">${tag}</span>`).join('');
  return `<article class="laptop-card">
    ${laptop.badge ? `<span class="card-badge ${laptop.badgeClass}">${laptop.badge}</span>` : ''}
    <div class="card-top-actions"><button type="button" class="card-action favorite-action ${isFav?'active':''}" data-favorite-id="${laptop.id}" aria-label="${isFav?'Hapus dari':'Simpan'} ${laptop.name}">${isFav?'♥':'♡'}</button><button type="button" class="card-action compare-action ${isCompared?'active':''}" data-compare-id="${laptop.id}" aria-label="${isCompared?'Hapus dari':'Tambahkan ke'} perbandingan">⇄</button></div>
    <div class="laptop-image"><img src="${laptop.image}" alt="${laptop.brand} ${laptop.name}" loading="lazy"></div>
    <div class="card-body"><span class="card-brand">${laptop.brand}</span><h3>${laptop.name}</h3><div class="price-row"><span class="price">${formatRupiah(laptop.price)}</span>${sale}</div><ul class="card-specs"><li><span>◉</span>${laptop.processor}</li><li><span>▣</span>${laptop.ram} · ${laptop.storage}</li><li><span>▤</span>${laptop.display}</li></ul><div class="rating-line"><span class="rating-star">★</span><strong>${laptop.rating}</strong><span>(${laptop.reviews} ulasan)</span></div><div class="card-footer"><div class="use-tags">${tags}</div><button type="button" class="detail-button" data-detail-id="${laptop.id}">Lihat detail →</button></div></div>
  </article>`;
}
function sortResults(list){
  const sort = byId('sortSelect')?.value || 'recommended';
  return [...list].sort((a,b)=>{
    if(sort==='price-low') return a.price-b.price;
    if(sort==='price-high') return b.price-a.price;
    if(sort==='rating') return b.rating-a.rating || b.reviews-a.reviews;
    if(sort==='name') return a.name.localeCompare(b.name);
    return a.priority-b.priority || b.rating-a.rating || a.price-b.price;
  });
}
function applyFilters(){
  const state = getFilterState(); maxBudget = Number(byId('budgetSlider')?.value || 15000000);
  const list = laptops.filter(laptop=>{
    const haystack = [laptop.brand,laptop.name,laptop.processor,laptop.ram,laptop.storage,laptop.display,laptop.gpu,...laptop.use].join(' ').toLowerCase();
    const textMatch = !state.text || haystack.includes(state.text);
    const brandMatch = !state.brand || laptop.brand === state.brand;
    const ramMatch = !state.ram || laptop.ramValue >= state.ram;
    const budgetMatch = laptop.price <= maxBudget;
    const useMatch = !state.uses.length || state.uses.some(use => laptop.use.includes(use));
    const screenMatch = !state.screens.length || state.screens.some(screen => laptop.display.includes(`${screen}\"`));
    const promoMatch = !state.promoOnly || laptop.promo;
    const favoriteMatch = !favoritesOnly || favorites.has(laptop.id);
    return textMatch && brandMatch && ramMatch && budgetMatch && useMatch && screenMatch && promoMatch && favoriteMatch;
  });
  filtered = sortResults(list); renderActiveTags(state); renderCards();
}
function renderActiveTags(state){
  const area = byId('activeTags'); if(!area) return;
  const tags=[];
  if(state.text) tags.push({label:`Cari: ${state.text}`,key:'search'});
  if(state.brand) tags.push({label:state.brand,key:'brand'});
  if(state.ram) tags.push({label:`RAM ≥ ${state.ram}GB`,key:'ram'});
  state.uses.forEach(value=>tags.push({label:value,key:`use:${value}`}));
  state.screens.forEach(value=>tags.push({label:`Layar ${value}"`,key:`screen:${value}`}));
  if(state.promoOnly) tags.push({label:'Promo mingguan',key:'promo'});
  if(favoritesOnly) tags.push({label:'Laptop tersimpan',key:'favorites'});
  area.innerHTML = tags.map(tag=>`<span class="active-tag">${tag.label}<button type="button" data-clear-filter="${tag.key}" aria-label="Hapus filter ${tag.label}">×</button></span>`).join('');
}
function updateCounters(){
  const favCount=byId('favoriteCount'), compareCount=byId('compareCount'), dock=byId('compareDock');
  if(favCount) favCount.textContent=favorites.size;
  if(compareCount) compareCount.textContent=compareItems.size;
  if(dock){dock.hidden=compareItems.size===0; const list=byId('compareMiniList'); list.innerHTML=[...compareItems].map(id=>{const l=getLaptop(id);return `<div class="compare-mini"><img src="${l.image}" alt="${l.name}"><button type="button" data-remove-compare="${id}" aria-label="Hapus ${l.name}">×</button></div>`}).join(''); byId('compareButton').disabled=compareItems.size<2; byId('compareHint').textContent=compareItems.size<2?' Pilih minimal 2 laptop':` ${compareItems.size}/3 laptop dipilih`}
}
function updateBudget(value){maxBudget=Number(value);if(byId('budgetDisplay')) byId('budgetDisplay').textContent=formatShort(value);applyFilters()}
function resetFilters(){
  if(byId('searchInput')) byId('searchInput').value=''; if(byId('brandFilter')) byId('brandFilter').value=''; if(byId('ramFilter')) byId('ramFilter').value=''; if(byId('promoOnly')) byId('promoOnly').checked=false; if(byId('sortSelect')) byId('sortSelect').value='recommended';
  if(byId('budgetSlider')) byId('budgetSlider').value=15000000; maxBudget=15000000; if(byId('budgetDisplay')) byId('budgetDisplay').textContent=formatShort(maxBudget);
  document.querySelectorAll('.chip.active').forEach(chip=>chip.classList.remove('active')); favoritesOnly=false; applyFilters();
}
function toggleFavorite(id){
  id=Number(id); if(favorites.has(id)){favorites.delete(id);showToast('Laptop dihapus dari tersimpan')}else{favorites.add(id);showToast('Laptop disimpan ✦')}
  saveStorage('findlap-favorites',[...favorites]); applyFilters();
}
function toggleCompare(id){
  id=Number(id); if(compareItems.has(id)){compareItems.delete(id);showToast('Laptop dihapus dari perbandingan')}else if(compareItems.size>=3){showToast('Maksimal 3 laptop untuk dibandingkan')}else{compareItems.add(id);showToast('Ditambahkan ke perbandingan')}
  saveStorage('findlap-compare',[...compareItems]); applyFilters();
}
function openModal(html){byId('modalContent').innerHTML=html;byId('modalOverlay').classList.add('open');document.body.classList.add('modal-open')}
function closeModal(){byId('modalOverlay')?.classList.remove('open');document.body.classList.remove('modal-open')}
function showDetail(id){
  const laptop=getLaptop(id); if(!laptop) return;
  const sale=laptop.oldPrice?`<del class="old-price">${formatRupiah(laptop.oldPrice)}</del>`:'';
  openModal(`<button type="button" class="modal-close" data-close-modal aria-label="Tutup">×</button><div class="detail-modal"><div class="detail-modal-image"><img src="${laptop.image}" alt="${laptop.brand} ${laptop.name}"></div><div class="detail-modal-body"><span class="card-brand">${laptop.brand} · ${laptop.badge||'REKOMENDASI'}</span><h2>${laptop.name}</h2><div class="modal-rating"><span class="rating-star">★</span> <strong>${laptop.rating}/5</strong> dari ${laptop.reviews} ulasan</div><div class="modal-price">${formatRupiah(laptop.price)} ${sale}</div><div class="detail-spec-grid"><div class="detail-spec"><small>Prosesor</small><strong>${laptop.processor}</strong></div><div class="detail-spec"><small>Memori</small><strong>${laptop.ram}</strong></div><div class="detail-spec"><small>Penyimpanan</small><strong>${laptop.storage}</strong></div><div class="detail-spec"><small>Layar</small><strong>${laptop.display}</strong></div><div class="detail-spec"><small>Bobot</small><strong>${laptop.weight}</strong></div><div class="detail-spec"><small>Baterai</small><strong>${laptop.battery}</strong></div><div class="detail-spec"><small>Grafis</small><strong>${laptop.gpu}</strong></div><div class="detail-spec"><small>Cocok untuk</small><strong>${laptop.use.slice(0,2).join(', ')}</strong></div></div><div class="modal-actions"><button type="button" class="button button-primary" data-modal-compare="${laptop.id}">⇄ Bandingkan</button><button type="button" class="outline-button" data-modal-favorite="${laptop.id}">${favorites.has(laptop.id)?'♥ Tersimpan':'♡ Simpan laptop'}</button></div></div></div>`);
}
function openCompare(){
  const selected=[...compareItems].map(getLaptop).filter(Boolean); if(selected.length<2){showToast('Pilih minimal 2 laptop untuk membandingkan');return}
  const rows=[['Harga',...selected.map(l=>`<strong>${formatRupiah(l.price)}</strong>`)],['Rating',...selected.map(l=>`★ ${l.rating}/5 (${l.reviews})`)],['Prosesor',...selected.map(l=>l.processor)],['RAM',...selected.map(l=>l.ram)],['Storage',...selected.map(l=>l.storage)],['Layar',...selected.map(l=>l.display)],['Grafis',...selected.map(l=>l.gpu)],['Bobot',...selected.map(l=>l.weight)],['Baterai',...selected.map(l=>l.battery)]];
  openModal(`<button type="button" class="modal-close" data-close-modal aria-label="Tutup">×</button><div class="compare-modal"><h2>Bandingkan pilihanmu</h2><p>Bandingkan spesifikasi penting sebelum memutuskan.</p><div class="compare-table-wrap"><table class="compare-table"><thead><tr><th></th>${selected.map(l=>`<th><span class="compare-product-name">${l.brand}<br>${l.name}</span></th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr><th>${row[0]}</th>${row.slice(1).map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`);
}
function removeFilter(key){
  if(key==='search'&&byId('searchInput')) byId('searchInput').value='';
  else if(key==='brand'&&byId('brandFilter')) byId('brandFilter').value='';
  else if(key==='ram'&&byId('ramFilter')) byId('ramFilter').value='';
  else if(key==='promo'&&byId('promoOnly')) byId('promoOnly').checked=false;
  else if(key==='favorites'){favoritesOnly=false}
  else if(key.startsWith('use:')) document.querySelector(`#useChips .chip[data-value="${CSS.escape(key.slice(4))}"]`)?.classList.remove('active');
  else if(key.startsWith('screen:')) document.querySelector(`#screenChips .chip[data-value="${CSS.escape(key.slice(7))}"]`)?.classList.remove('active');
  applyFilters();
}
function copyCoupon(code){
  const done=()=>showToast(`Kode ${code} siap digunakan ✦`);
  if(navigator.clipboard?.writeText) navigator.clipboard.writeText(code).then(done).catch(done); else done();
}
function setFinderChoice(container, value){container.querySelectorAll('button').forEach(button=>button.classList.toggle('active',button.dataset.value===String(value)))}
function runFinder(){
  const budget=Number(document.querySelector('#finderBudget button.active')?.dataset.value||0), use=document.querySelector('#finderUse button.active')?.dataset.value;
  if(!budget||!use){showToast('Pilih budget dan kebutuhanmu dulu');return}
  const candidates=laptops.filter(l=>l.price<=budget); const match=candidates.filter(l=>l.use.includes(use)); const best=sortResults(match.length?match:candidates)[0];
  if(!best){showToast('Belum ada rekomendasi untuk kombinasi ini');return}
  byId('finderResult').innerHTML=`<div class="finder-result-card"><span class="result-label">REKOMENDASI UNTUKMU</span><h3>${best.brand} ${best.name}</h3><p>Cocok untuk ${use.toLowerCase()} · di bawah ${formatShort(budget)}</p><div class="finder-result-product"><img src="${best.image}" alt="${best.name}"><div><strong>${formatRupiah(best.price)}</strong><small>★ ${best.rating} · ${best.ram} · ${best.storage}</small></div></div><button type="button" class="button button-light" data-detail-id="${best.id}">Lihat detail laptop <span>→</span></button></div>`;
}
function updateCountdown(){
  let deadline=Number(readStorage('findlap-promo-deadline',0));
  if(!deadline||deadline<Date.now()){deadline=Date.now()+6*24*60*60*1000+7*60*60*1000;try{localStorage.setItem('findlap-promo-deadline',String(deadline))}catch(error){}}
  const diff=Math.max(0,deadline-Date.now()); const h=String(Math.floor(diff/3600000)%24).padStart(2,'0'),m=String(Math.floor(diff/60000)%60).padStart(2,'0'),s=String(Math.floor(diff/1000)%60).padStart(2,'0');
  const countdown=byId('countdown'); if(countdown) countdown.innerHTML=`<b>${h}</b><span>:</span><b>${m}</b><span>:</span><b>${s}</b>`;
}
function initContactForm(){
  const form=byId('contactForm'); if(!form) return;
  form.addEventListener('submit',event=>{event.preventDefault();const name=byId('contactName').value.trim(),email=byId('contactEmail').value.trim(),message=byId('contactMessage').value.trim();if(!name||!email||!message){showToast('Lengkapi semua kolom terlebih dahulu');return}if(!/^\S+@\S+\.\S+$/.test(email)){showToast('Masukkan alamat email yang valid');return}const messages=readStorage('findlap-messages',[]);messages.push({name,email,message,date:new Date().toISOString()});saveStorage('findlap-messages',messages);form.reset();showToast('Pesan berhasil dikirim. Terima kasih!')});
}

// Event delegation keeps all dynamically rendered buttons functional.
document.addEventListener('click',event=>{
  const target=event.target;
  const favorite=target.closest('[data-favorite-id]'); if(favorite){toggleFavorite(favorite.dataset.favoriteId);return}
  const compare=target.closest('[data-compare-id]'); if(compare){toggleCompare(compare.dataset.compareId);return}
  const detail=target.closest('[data-detail-id]'); if(detail){showDetail(detail.dataset.detailId);return}
  const removeCompare=target.closest('[data-remove-compare]'); if(removeCompare){toggleCompare(removeCompare.dataset.removeCompare);return}
  const clearFilter=target.closest('[data-clear-filter]'); if(clearFilter){removeFilter(clearFilter.dataset.clearFilter);return}
  if(target.closest('[data-close-modal]')){closeModal();return}
  const modalFav=target.closest('[data-modal-favorite]'); if(modalFav){toggleFavorite(modalFav.dataset.modalFavorite);showDetail(modalFav.dataset.modalFavorite);return}
  const modalCompare=target.closest('[data-modal-compare]'); if(modalCompare){toggleCompare(modalCompare.dataset.modalCompare);return}
  const coupon=target.closest('[data-coupon]'); if(coupon){copyCoupon(coupon.dataset.coupon);return}
});

byId('modalOverlay')?.addEventListener('click',event=>{if(event.target.id==='modalOverlay')closeModal()});
byId('menuToggle')?.addEventListener('click',()=>{const nav=byId('mainNav'),button=byId('menuToggle');nav.classList.toggle('open');button.setAttribute('aria-expanded',nav.classList.contains('open'))});
byId('searchInput')?.addEventListener('input',applyFilters); byId('brandFilter')?.addEventListener('change',applyFilters); byId('ramFilter')?.addEventListener('change',applyFilters); byId('promoOnly')?.addEventListener('change',applyFilters); byId('sortSelect')?.addEventListener('change',applyFilters); byId('budgetSlider')?.addEventListener('input',event=>updateBudget(event.target.value));
byId('clearSearch')?.addEventListener('click',()=>{byId('searchInput').value='';applyFilters();byId('searchInput').focus()});
document.querySelectorAll('.chip').forEach(chip=>chip.addEventListener('click',()=>{chip.classList.toggle('active');applyFilters()}));
byId('resetFilters')?.addEventListener('click',resetFilters); byId('emptyReset')?.addEventListener('click',resetFilters); byId('applyFilterButton')?.addEventListener('click',()=>{applyFilters();byId('laptopGrid')?.scrollIntoView({behavior:'smooth',block:'start'})});
byId('favoritesButton')?.addEventListener('click',()=>{if(!favorites.size){showToast('Belum ada laptop tersimpan');return}favoritesOnly=!favoritesOnly;applyFilters();byId('katalog')?.scrollIntoView({behavior:'smooth',block:'start'});showToast(favoritesOnly?'Menampilkan laptop tersimpan':'Menampilkan semua laptop')});
byId('compareNavButton')?.addEventListener('click',openCompare); byId('compareButton')?.addEventListener('click',openCompare); byId('clearCompare')?.addEventListener('click',()=>{compareItems.clear();saveStorage('findlap-compare',[]);applyFilters()});
byId('showPromoProducts')?.addEventListener('click',()=>{if(byId('promoOnly'))byId('promoOnly').checked=true;applyFilters();byId('katalog')?.scrollIntoView({behavior:'smooth',block:'start'});showToast('Menampilkan laptop promo minggu ini')});
document.querySelectorAll('.finder-options button').forEach(button=>button.addEventListener('click',()=>setFinderChoice(button.parentElement,button.dataset.value))); byId('finderSubmit')?.addEventListener('click',runFinder);
byId('newsletterForm')?.addEventListener('submit',event=>{event.preventDefault();const input=byId('newsletterEmail');if(!input.value||!input.checkValidity()){input.reportValidity();return}saveStorage('findlap-newsletter',input.value);input.value='';showToast('Berhasil berlangganan update Findlap ✦')});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});

if(byId('budgetDisplay')) byId('budgetDisplay').textContent=formatShort(byId('budgetSlider').value); updateCountdown(); setInterval(updateCountdown,1000); applyFilters(); initContactForm();
