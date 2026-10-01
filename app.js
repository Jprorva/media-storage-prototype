const data = [
  { id: 1, parent: 'root', kind: 'folder', name: 'Бренд и айдентика', type: 'Папка', modified: '2026-09-25T10:42:00', size: 0, count: 18, favorite: true, tone: 'violet' },
  { id: 2, parent: 'root', kind: 'folder', name: 'Контент для соцсетей', type: 'Папка', modified: '2026-09-24T18:10:00', size: 0, count: 42, favorite: false, tone: 'blue' },
  { id: 3, parent: 'root', kind: 'folder', name: 'Фото продуктов', type: 'Папка', modified: '2026-09-23T15:24:00', size: 0, count: 31, favorite: false, tone: 'pink' },
  { id: 4, parent: 'root', kind: 'file', name: 'Главный баннер.jpg', type: 'JPG', category: 'image', modified: '2026-09-25T09:16:00', size: 2840000, dimensions: '2400 × 1200 px', favorite: true, art: 'linear-gradient(135deg,#4257d6 0%,#8e61e8 48%,#f1a1bb 100%)' },
  { id: 5, parent: 'root', kind: 'file', name: 'Презентация продукта.pdf', type: 'PDF', category: 'document', modified: '2026-09-24T17:36:00', size: 12600000, pages: 24, favorite: false, tone: 'red' },
  { id: 6, parent: 'root', kind: 'file', name: 'Интервью с командой.mp4', type: 'MP4', category: 'video', modified: '2026-09-24T12:08:00', size: 184700000, duration: '04:18', favorite: false, art: 'linear-gradient(145deg,#2d203e,#976bb7 55%,#e6c8c5)' },
  { id: 7, parent: 'root', kind: 'file', name: 'Логотипы.zip', type: 'ZIP', category: 'archive', modified: '2026-09-22T11:48:00', size: 43200000, favorite: false, tone: 'yellow' },
  { id: 8, parent: 'root', kind: 'file', name: 'Команда на встрече.png', type: 'PNG', category: 'image', modified: '2026-09-21T16:02:00', size: 5180000, dimensions: '3200 × 2133 px', favorite: false, art: 'linear-gradient(135deg,#9eb8a7,#f1d3ae 48%,#b57669)' },
  { id: 9, parent: 'root', kind: 'file', name: 'Гайд по стилю.docx', type: 'DOCX', category: 'document', modified: '2026-09-20T13:45:00', size: 1420000, favorite: false, tone: 'blue' },
  { id: 10, parent: 1, kind: 'folder', name: 'Логотип', type: 'Папка', modified: '2026-09-25T10:42:00', size: 0, count: 8, favorite: false, tone: 'violet' },
  { id: 11, parent: 1, kind: 'file', name: 'Brandbook 2026.pdf', type: 'PDF', category: 'document', modified: '2026-09-25T10:31:00', size: 9460000, pages: 38, favorite: true, tone: 'red' },
  { id: 12, parent: 1, kind: 'file', name: 'Цветовая палитра.png', type: 'PNG', category: 'image', modified: '2026-09-24T14:28:00', size: 1720000, dimensions: '1600 × 900 px', favorite: false, art: 'linear-gradient(135deg,#5c35de 0 32%,#21b17c 32% 58%,#f2b84b 58% 78%,#ee6b84 78%)' },
  { id: 13, parent: 2, kind: 'file', name: 'Пост — запуск.jpg', type: 'JPG', category: 'image', modified: '2026-09-24T18:10:00', size: 2140000, dimensions: '1080 × 1080 px', favorite: false, art: 'linear-gradient(145deg,#201f29,#644be0 58%,#d8cdfa)' },
  { id: 14, parent: 2, kind: 'file', name: 'История — backstage.mp4', type: 'MP4', category: 'video', modified: '2026-09-23T09:14:00', size: 68700000, duration: '00:42', favorite: false, art: 'linear-gradient(135deg,#6e8b9b,#d7c7a6)' },
  { id: 15, parent: 10, kind: 'file', name: 'Логотип основной.svg', type: 'SVG', category: 'image', modified: '2026-09-25T10:18:00', size: 184000, dimensions: 'Вектор', favorite: true, art: 'linear-gradient(135deg,#eeeafd 0 48%,#6138e5 48% 54%,#ffffff 54%)' },
  { id: 16, parent: 10, kind: 'file', name: 'Логотип монохромный.svg', type: 'SVG', category: 'image', modified: '2026-09-24T16:03:00', size: 168000, dimensions: 'Вектор', favorite: false, art: 'linear-gradient(135deg,#23242a 0 48%,#ffffff 48% 54%,#e6e6ea 54%)' },
];

const state = {
  section: 'library',
  folder: 'root',
  search: '',
  filters: new Set(),
  uploadDateMode: 'any',
  uploadDateFrom: '',
  uploadDateTo: '',
  view: 'list',
  sortKey: 'modified',
  sortDir: 'desc',
  selected: new Set(),
  visibleColumns: new Set(['size', 'modified', 'access']),
  menuTarget: null,
  drawerTarget: null,
  previewVersionId: null,
  trash: [],
  lastDeleted: null,
  pendingUploads: [],
  activeUploadPlan: [],
  uploadTargetFolder: 'root',
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const els = {
  rows: $('#fileRows'), grid: $('#gridView'), list: $('#listView'), empty: $('#emptyState'),
  selectAll: $('#selectAll'), search: $('#searchInput'),
  defaultToolbar: $('#defaultToolbar'), bulkToolbar: $('#bulkToolbar'), selectedCount: $('#selectedCount'),
  bulkActions: $('#bulkActions'), menu: $('#actionMenu'), drawer: $('#detailsDrawer'), drawerContent: $('#drawerContent'),
  title: $('#pageTitle'), breadcrumbs: $('#breadcrumbs'), topActions: $('#topActions'),
  modal: $('#appModal'), modalForm: $('#modalForm'), modalTitle: $('#modalTitle'), modalSubtitle: $('#modalSubtitle'),
  modalBody: $('#modalBody'), modalActions: $('#modalActions'), modalToastStack: $('#modalToastStack'), trashCount: $('#trashCount'),
  inspectorPreview: $('#inspectorPreview'), inspectorFileName: $('#inspectorFileName'), inspectorStageMeta: $('#inspectorStageMeta'),
  drawerHeaderTitle: $('#drawerHeaderTitle'),
  sectionToggle: $('#sectionToggleButton'), newFolder: $('#newFolderButton'), upload: $('#uploadButton'),
  filterSettings: $('#filterSettingsButton'), columnSettings: $('#columnSettingsButton'), filterCount: $('#filterCount'),
  emptyFolder: $('#emptyFolderState'), folderDropZone: $('#folderDropZone'),
  directUpload: $('#directUploadInput'),
  workspaceDropZone: $('#workspaceDropZone'),
  accountButton: $('#accountMenuButton'), accountMenu: $('#accountMenu'),
  productLogo: $('#productLogoButton'),
};

let workspaceDragDepth = 0;
let uploadRunId = 0;
let uploadTimers = [];

const tones = {
  violet: ['#eeeafd', '#6342d8'], blue: ['#e8f2ff', '#2f73c8'], pink: ['#fdebf2', '#cf4d78'],
  red: ['#fff0ef', '#cf4946'], yellow: ['#fff6db', '#ac7b12'], green: ['#e5f7ef', '#16875e'],
};

function plural(number, forms) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}

function formatSize(bytes) {
  if (!bytes) return '—';
  if (bytes < 1e6) return `${Math.round(bytes / 1000)} КБ`;
  if (bytes < 1e9) return `${(bytes / 1e6).toFixed(bytes < 1e7 ? 1 : 0).replace('.', ',')} МБ`;
  return `${(bytes / 1e9).toFixed(1).replace('.', ',')} ГБ`;
}

function folderSize(folderId) {
  return data.filter(item => item.parent === folderId).reduce((total, item) => {
    return total + (item.kind === 'folder' ? folderSize(item.id) : item.size || 0);
  }, 0);
}

function itemSize(item) {
  if (item.kind !== 'folder') return formatSize(item.size);
  const bytes = folderSize(item.id);
  return bytes ? formatSize(bytes) : '0 Б';
}

function formatDate(value, long = false) {
  const date = new Date(value);
  if (long) return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date);
  const today = new Date('2026-09-25T15:00:00');
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  if (date.toDateString() === today.toDateString()) return `Сегодня, ${date.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'})}`;
  if (date.toDateString() === yesterday.toDateString()) return `Вчера, ${date.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'})}`;
  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
}

function displayName(item) {
  return item.kind === 'file' ? item.name.replace(/\.[^.]+$/, '') : item.name;
}

function itemCategory(item) {
  if (item.kind === 'folder') return 'folder';
  return item.category || 'document';
}

function iconFor(item) {
  if (item.kind === 'folder') return 'icon-folder';
  if (item.category === 'image') return 'icon-image';
  if (item.category === 'video') return 'icon-play';
  return 'icon-file';
}

function previewStyle(item) {
  if (item.art) return `--art:${item.art};--thumb:#e9e7ef;`;
  const [bg, ink] = tones[item.tone || 'violet'];
  return `--thumb:${bg};--thumb-ink:${ink};`;
}

function visibleItems() {
  let items;
  if (state.section === 'trash') items = state.trash;
  else if (state.section === 'recent') items = data.filter(x => x.kind === 'file').sort((a,b) => new Date(b.modified)-new Date(a.modified));
  else if (state.section === 'favorites') items = data.filter(x => x.favorite);
  else items = data.filter(x => x.parent === state.folder);

  if (state.search) {
    const query = state.search.toLocaleLowerCase('ru');
    items = items.filter(item => `${displayName(item)} ${item.type}`.toLocaleLowerCase('ru').includes(query));
  }
  if (state.filters.size) items = items.filter(item => state.filters.has(itemCategory(item)));
  if (hasUploadDateFilter()) items = items.filter(matchesUploadDate);

  const result = [...items].sort((a, b) => {
    if (a.kind === 'folder' && b.kind !== 'folder') return -1;
    if (b.kind === 'folder' && a.kind !== 'folder') return 1;
    let av = a[state.sortKey], bv = b[state.sortKey];
    if (state.sortKey === 'modified') { av = new Date(av); bv = new Date(bv); }
    if (typeof av === 'string') return av.localeCompare(bv, 'ru') * (state.sortDir === 'asc' ? 1 : -1);
    return (av - bv) * (state.sortDir === 'asc' ? 1 : -1);
  });
  return result;
}

function previewMarkup(item, className = '') {
  const artClass = item.category === 'image' ? 'image-preview' : item.category === 'video' ? 'video-preview' : '';
  const folderClass = item.kind === 'folder' ? 'folder-preview' : '';
  const previewIcon = item.kind === 'folder' ? 'icon-folder' : iconFor(item);
  return `<div class="preview ${artClass} ${folderClass} ${className}" style="${previewStyle(item)}">
    ${item.art ? '' : `<svg aria-hidden="true"><use href="#${previewIcon}"></use></svg>`}
  </div>`;
}

function folderObjectCount(folderId) {
  return data.filter(item => item.parent === folderId).length;
}

function secondaryLabel(item) {
  if (item.kind === 'folder') {
    const count = folderObjectCount(item.id);
    return `${count} ${plural(count, ['объект','объекта','объектов'])}`;
  }
  if (item.dimensions) return item.dimensions;
  if (item.duration) return item.duration;
  if (item.pages) return `${item.pages} ${plural(item.pages, ['страница','страницы','страниц'])}`;
  return 'Файл';
}

function nameMeta(item) {
  const detail = secondaryLabel(item);
  if (item.kind === 'folder') return detail;
  return detail === 'Файл' ? '' : detail;
}

function addedDate(item) {
  return new Date(item.added || item.modified);
}

function hasUploadDateFilter() {
  if (state.uploadDateMode === 'single') return Boolean(state.uploadDateFrom);
  if (state.uploadDateMode === 'period') return Boolean(state.uploadDateFrom && state.uploadDateTo);
  return false;
}

function matchesUploadDate(item) {
  if (!hasUploadDateFilter()) return true;
  const itemDate = addedDate(item);
  const start = new Date(`${state.uploadDateFrom}T00:00:00`);
  if (state.uploadDateMode === 'single') {
    const end = new Date(`${state.uploadDateFrom}T23:59:59.999`);
    return itemDate >= start && itemDate <= end;
  }
  const end = new Date(`${state.uploadDateTo}T23:59:59.999`);
  return itemDate >= start && itemDate <= end;
}

function rowMarkup(item) {
  return `<tr data-id="${item.id}" class="${state.selected.has(item.id) ? 'selected' : ''}">
    <td class="check-column"><input class="row-check" type="checkbox" aria-label="Выбрать ${escapeHtml(displayName(item))}" ${state.selected.has(item.id) ? 'checked' : ''}></td>
    <td class="name-cell"><button class="asset-name-button" data-open="${item.id}">${previewMarkup(item)}<span class="asset-name-copy"><span class="name-button">${escapeHtml(item.name)}</span>${nameMeta(item) ? `<small>${escapeHtml(nameMeta(item))}</small>` : ''}</span></button></td>
    <td data-column="size">${itemSize(item)}</td>
    <td data-column="modified">${formatDate(item.modified)}</td>
    <td data-column="access"><div class="access-actions"><button class="icon-button access-button" type="button" data-inline-access="copy" data-id="${item.id}" aria-label="Скопировать ссылку на ${escapeHtml(item.name)}" title="Скопировать ссылку"><svg aria-hidden="true"><use href="#icon-link"></use></svg></button><button class="icon-button access-button" type="button" data-inline-access="manage" data-id="${item.id}" aria-label="Открыть доступ к ${escapeHtml(item.name)}" title="Открыть доступ"><svg aria-hidden="true"><use href="#icon-users"></use></svg></button></div></td>
    <td class="menu-column"><button class="icon-button row-more" data-menu="${item.id}" aria-label="Действия с ${escapeHtml(displayName(item))}"><svg aria-hidden="true"><use href="#icon-more"></use></svg></button></td>
  </tr>`;
}

function renderRows(items) {
  els.rows.innerHTML = items.map(rowMarkup).join('');
}

function cardMarkup(item) {
  return `<article class="asset-card ${state.selected.has(item.id) ? 'selected' : ''}" data-id="${item.id}">
    <label class="card-check"><input class="row-check" type="checkbox" aria-label="Выбрать ${escapeHtml(displayName(item))}" ${state.selected.has(item.id) ? 'checked' : ''}></label>
    <button class="icon-button card-more" data-menu="${item.id}" aria-label="Действия с ${escapeHtml(displayName(item))}"><svg aria-hidden="true"><use href="#icon-more"></use></svg></button>
    <div class="asset-card-visual ${item.kind === 'folder' ? 'folder-card-visual' : ''}" style="${previewStyle(item)}" data-open="${item.id}"><svg aria-hidden="true"><use href="#${item.kind === 'folder' ? 'icon-folder' : iconFor(item)}"></use></svg></div>
    <div class="asset-card-copy"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.kind === 'folder' ? secondaryLabel(item) : formatSize(item.size))}</small></div>
  </article>`;
}

function renderGrid(items) {
  els.grid.innerHTML = items.map(cardMarkup).join('');
}

function renderHeader() {
  const folder = data.find(x => x.id === state.folder);
  const sectionNames = { library: folder ? folder.name : 'Все файлы', recent: 'Недавние', favorites: 'Избранное', trash: 'Корзина' };
  els.title.textContent = sectionNames[state.section];
  els.topActions.hidden = false;
  els.newFolder.hidden = state.section !== 'library';
  els.upload.hidden = state.section !== 'library';
  els.sectionToggle.innerHTML = state.section === 'trash'
    ? `<svg aria-hidden="true"><use href="#icon-library"></use></svg><span>Все файлы</span>`
    : `<svg aria-hidden="true"><use href="#icon-trash"></use></svg><span>Корзина${state.trash.length ? ` · ${state.trash.length}` : ''}</span>`;
  if (state.section === 'library') {
    const path = [];
    let cursor = folder;
    while (cursor) {
      path.unshift(cursor);
      cursor = cursor.parent === 'root' ? null : data.find(x => x.id === cursor.parent);
    }
    const crumbs = [{ id: 'root', name: 'Все файлы' }, ...path];
    const insideFolder = crumbs.length > 1;
    els.title.hidden = insideFolder;
    els.breadcrumbs.hidden = !insideFolder;
    els.breadcrumbs.innerHTML = crumbs.map((crumb, index) => index === crumbs.length - 1
      ? `<span class="breadcrumb-current" aria-current="page" title="${escapeHtml(crumb.name)}">${escapeHtml(crumb.name)}</span>`
      : `<button class="breadcrumb-button" data-folder="${crumb.id}" title="${escapeHtml(crumb.name)}">${escapeHtml(crumb.name)}</button><span class="breadcrumb-separator" aria-hidden="true">/</span>`).join('');
  } else {
    els.title.hidden = false;
    els.breadcrumbs.hidden = true;
    els.breadcrumbs.innerHTML = '';
  }
  $$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.section === state.section));
}

function renderBulk(items) {
  const totalSelected = state.selected.size;
  els.bulkToolbar.hidden = totalSelected === 0;
  els.selectedCount.textContent = `Выбрано ${totalSelected}`;
  els.selectAll.checked = items.length > 0 && items.every(item => state.selected.has(item.id));
  els.selectAll.indeterminate = totalSelected > 0 && !els.selectAll.checked;
  const isTrash = state.section === 'trash';
  els.bulkActions.innerHTML = isTrash ? `
    <button class="icon-button" data-bulk="restore" aria-label="Восстановить" title="Восстановить"><svg aria-hidden="true"><use href="#icon-undo"></use></svg></button>
    <button class="icon-button danger-icon" data-bulk="deleteForever" aria-label="Удалить навсегда" title="Удалить навсегда"><svg aria-hidden="true"><use href="#icon-trash"></use></svg></button>` : `
    <button class="icon-button" data-bulk="download" aria-label="Скачать" title="Скачать"><svg aria-hidden="true"><use href="#icon-download"></use></svg></button>
    <button class="icon-button" data-bulk="move" aria-label="Переместить" title="Переместить"><svg aria-hidden="true"><use href="#icon-move"></use></svg></button>
    <button class="icon-button danger-icon" data-bulk="delete" aria-label="Удалить" title="Удалить"><svg aria-hidden="true"><use href="#icon-trash"></use></svg></button>`;
}

function applyColumnVisibility() {
  ['size', 'modified', 'access'].forEach(column => {
    $$(`[data-column="${column}"]`).forEach(cell => { cell.hidden = !state.visibleColumns.has(column); });
  });
}

function render() {
  const items = visibleItems();
  const isEmptyFolder = items.length === 0 && state.section === 'library' && state.folder !== 'root' && !state.search && state.filters.size === 0 && !hasUploadDateFilter();
  renderHeader();
  renderRows(items);
  renderGrid(items);
  renderBulk(items);
  applyColumnVisibility();
  els.list.hidden = state.view !== 'list' || (items.length === 0 && !isEmptyFolder);
  els.grid.hidden = state.view !== 'grid' || items.length === 0;
  els.empty.hidden = items.length > 0 || isEmptyFolder;
  els.emptyFolder.hidden = !isEmptyFolder;
  els.trashCount.textContent = state.trash.length;
  const activeFilterCount = state.filters.size + (hasUploadDateFilter() ? 1 : 0);
  els.filterCount.textContent = activeFilterCount;
  els.filterCount.hidden = activeFilterCount === 0;
  els.filterSettings.classList.toggle('active', activeFilterCount > 0);
  $$('.view-switcher .icon-button').forEach(btn => btn.classList.toggle('active', btn.dataset.view === state.view));
  $$('.sort-button').forEach(btn => {
    btn.classList.toggle('sorted', btn.dataset.sort === state.sortKey);
    const marker = $('span', btn);
    marker.textContent = btn.dataset.sort === state.sortKey ? (state.sortDir === 'asc' ? '↑' : '↓') : '↕';
  });
}

function findItem(id) {
  return data.find(x => x.id === Number(id)) || state.trash.find(x => x.id === Number(id));
}

function selectItem(id, checked) {
  checked ? state.selected.add(Number(id)) : state.selected.delete(Number(id));
  render();
}

function openItem(item) {
  closeMenu();
  if (item.kind === 'folder' && state.section === 'library') {
    state.folder = item.id;
    state.selected.clear();
    render();
    return;
  }
  if (item.kind === 'file') openPreview(item);
}

function setInspectorPreview(item, meta = 'Предпросмотр файла') {
  els.inspectorFileName.textContent = item.name;
  els.inspectorStageMeta.textContent = meta;
  els.inspectorPreview.className = `inspector-preview ${item.art ? 'image-art' : ''}`;
  els.inspectorPreview.style.cssText = item.art ? `--art:${item.art}` : previewStyle(item);
  els.inspectorPreview.innerHTML = item.art ? '' : `<svg aria-hidden="true"><use href="#${iconFor(item)}"></use></svg>`;
}

function showInspector(item, { previewOnly = false, meta = 'Предпросмотр файла' } = {}) {
  state.drawerTarget = item.id;
  state.previewVersionId = null;
  els.drawer.classList.remove('version-history-mode');
  els.drawer.classList.remove('folder-information');
  els.drawer.classList.toggle('preview-only', previewOnly);
  setInspectorPreview(item, meta);
  els.drawer.classList.add('open');
  els.drawer.setAttribute('aria-hidden', 'false');
}

function openPreview(item) {
  if (item.kind !== 'file') return;
  showInspector(item, { previewOnly: true });
  els.drawerContent.replaceChildren();
}

function itemLocation(item) {
  if (item.parent === 'root') return 'Все файлы';
  return data.find(folder => folder.id === item.parent)?.name || 'Все файлы';
}

function openInformation(item) {
  showInspector(item, { meta: item.kind === 'folder' ? 'Информация о папке' : 'Предпросмотр файла' });
  els.drawer.classList.toggle('folder-information', item.kind === 'folder');
  els.drawerHeaderTitle.textContent = item.kind === 'folder' ? 'Информация о папке' : 'Информация о файле';
  const facts = item.kind === 'folder' ? `
    <div class="file-fact"><span>Тип</span><strong>Папка</strong></div>
    <div class="file-fact"><span>Содержимое</span><strong>${escapeHtml(secondaryLabel(item))}</strong></div>
    <div class="file-fact"><span>Размер</span><strong>${escapeHtml(itemSize(item))}</strong></div>` : `
    <div class="file-fact"><span>Тип файла</span><strong>${escapeHtml(item.type)}</strong></div>
    <div class="file-fact"><span>Размер</span><strong>${formatSize(item.size)}</strong></div>
    ${item.dimensions ? `<div class="file-fact"><span>Разрешение</span><strong>${escapeHtml(item.dimensions)}</strong></div>` : ''}
    ${item.duration ? `<div class="file-fact"><span>Длительность</span><strong>${escapeHtml(item.duration)}</strong></div>` : ''}
    ${item.pages ? `<div class="file-fact"><span>Страниц</span><strong>${item.pages}</strong></div>` : ''}`;
  els.drawerContent.innerHTML = `
    <div class="drawer-copy">
      <div class="settings-section">
        <div class="drawer-name-line">
          <h2>${escapeHtml(item.name)}</h2>
          <button class="icon-button favorite-button ${item.favorite ? 'active' : ''}" data-favorite="${item.id}" aria-label="${item.favorite ? 'Убрать из избранного' : 'Добавить в избранное'}"><svg aria-hidden="true"><use href="#icon-star"></use></svg></button>
        </div>
      </div>
      <div class="settings-section">
        <h3>Описание</h3>
        <p class="information-description">${escapeHtml(item.description || (item.kind === 'folder' ? 'Папка для хранения и организации материалов.' : 'Описание не добавлено.'))}</p>
      </div>
      <div class="settings-section">
        <h3>${item.kind === 'folder' ? 'О папке' : 'О файле'}</h3>
        <div class="file-facts">
          ${facts}
          <div class="file-fact"><span>Расположение</span><strong>${escapeHtml(itemLocation(item))}</strong></div>
          <div class="file-fact"><span>Дата изменения</span><strong>${formatDate(item.modified, true)}</strong></div>
          <div class="file-fact"><span>Автор изменений</span><strong>Юлия Мякишева</strong></div>
        </div>
      </div>
    </div>`;
}

function closeDrawer() {
  els.drawer.classList.remove('open');
  els.drawer.classList.remove('preview-only');
  els.drawer.classList.remove('folder-information');
  els.drawer.classList.remove('version-history-mode');
  els.drawer.setAttribute('aria-hidden', 'true');
  state.drawerTarget = null;
  state.previewVersionId = null;
}

function openMenu(item, button) {
  state.menuTarget = item.id;
  const isTrash = state.section === 'trash';
  els.menu.innerHTML = isTrash ? `
    <button class="menu-item" data-action="information"><svg><use href="#icon-info"></use></svg>Информация</button>
    <button class="menu-item" data-action="restore"><svg><use href="#icon-undo"></use></svg>Восстановить</button>
    <button class="menu-item danger" data-action="deleteForever"><svg><use href="#icon-trash"></use></svg>Удалить навсегда</button>` : `
    ${item.kind === 'folder' ? `<button class="menu-item" data-action="open"><svg><use href="#icon-folder"></use></svg>Открыть</button>` : ''}
    <button class="menu-item" data-action="download"><svg><use href="#icon-download"></use></svg>Скачать</button>
    <button class="menu-item" data-action="copyLink"><svg><use href="#icon-link"></use></svg>Копировать ссылку</button>
    <button class="menu-item" data-action="shareAccess"><svg><use href="#icon-users"></use></svg>Поделиться доступом</button>
    <button class="menu-item" data-action="move"><svg><use href="#icon-move"></use></svg>Переместить</button>
    <button class="menu-item" data-action="information"><svg><use href="#icon-info"></use></svg>Информация</button>
    ${item.kind === 'file' ? `<button class="menu-item" data-action="history"><svg><use href="#icon-clock"></use></svg>История версий</button>` : ''}
    ${item.kind === 'folder' ? `<button class="menu-item" data-action="rename"><svg><use href="#icon-file"></use></svg>Переименовать</button>` : ''}
    <div class="menu-separator"></div>
    <button class="menu-item danger" data-action="delete"><svg><use href="#icon-trash"></use></svg>Удалить</button>`;
  const rect = button.getBoundingClientRect();
  els.menu.hidden = false;
  const width = 205;
  const left = Math.min(rect.right - width, window.innerWidth - width - 12);
  const height = els.menu.offsetHeight;
  const top = Math.min(rect.bottom + 5, window.innerHeight - height - 12);
  els.menu.style.left = `${Math.max(12, left)}px`;
  els.menu.style.top = `${Math.max(12, top)}px`;
}

function closeMenu() { els.menu.hidden = true; state.menuTarget = null; }

function showModal({ title, subtitle = '', body, actions, wide = false, auth = false }) {
  els.modal.classList.toggle('modal-wide', wide);
  els.modal.classList.toggle('modal-auth', auth);
  els.modalTitle.textContent = title;
  els.modalSubtitle.textContent = subtitle;
  els.modalBody.innerHTML = body;
  els.modalActions.innerHTML = actions;
  if (!els.modal.open) els.modal.showModal();
}

function closeModal() {
  if (els.modal.open) els.modal.close();
  els.modalToastStack.replaceChildren();
}

function openAllFiles() {
  closeMenu();
  state.section = 'library';
  state.folder = 'root';
  state.selected.clear();
  state.search = '';
  els.search.value = '';
  closeDrawer();
  render();
}

function loginModal() {
  document.body.classList.add('signed-out');
  showModal({
    title: 'Вход в Медиахранилище',
    subtitle: 'Продолжите с помощью Сбер ID',
    auth: true,
    body: `<div class="sber-login">
      <span class="sber-login-mark" aria-hidden="true">✓</span>
      <div class="sber-login-copy">
        <strong>Один аккаунт для удобного входа</strong>
        <p>Войдите через Сбер ID, чтобы вернуться к файлам и папкам.</p>
      </div>
    </div>`,
    actions: `<button class="sber-id-button" type="button" id="sberIdLogin"><span class="sber-id-button-mark" aria-hidden="true">✓</span><span>Войти по Сбер ID</span></button>`,
  });
}

function filterSettingsModal() {
  const options = [
    ['folder', 'Папки'], ['image', 'Изображения'],
    ['video', 'Видео'], ['document', 'Документы'], ['archive', 'Архивы'],
  ];
  showModal({
    title: 'Настройка фильтров', subtitle: 'Выберите тип материалов и дату загрузки',
    body: `<section class="filter-settings-section">
      <div class="filter-settings-heading"><strong>Тип материалов</strong><small>Можно выбрать несколько</small></div>
      <div class="filter-option-grid">${options.map(([value, label]) => `<label class="filter-option ${state.filters.has(value) ? 'selected' : ''}"><input type="checkbox" name="assetType" value="${value}" ${state.filters.has(value) ? 'checked' : ''}><span>${label}</span></label>`).join('')}</div>
      <p class="filter-hint">Если ничего не выбрано, показываются все типы.</p>
    </section>
    <section class="filter-settings-section">
      <div class="filter-settings-heading"><strong>Дата загрузки</strong><small>День или период</small></div>
      <div class="date-filter-modes" role="radiogroup" aria-label="Режим фильтра по дате загрузки">
        <label class="date-filter-mode ${state.uploadDateMode === 'any' ? 'selected' : ''}"><input type="radio" name="uploadDateMode" value="any" ${state.uploadDateMode === 'any' ? 'checked' : ''}><span>Любая дата</span></label>
        <label class="date-filter-mode ${state.uploadDateMode === 'single' ? 'selected' : ''}"><input type="radio" name="uploadDateMode" value="single" ${state.uploadDateMode === 'single' ? 'checked' : ''}><span>Дата</span></label>
        <label class="date-filter-mode ${state.uploadDateMode === 'period' ? 'selected' : ''}"><input type="radio" name="uploadDateMode" value="period" ${state.uploadDateMode === 'period' ? 'checked' : ''}><span>Период</span></label>
      </div>
      <div class="date-filter-fields" data-date-fields="single" ${state.uploadDateMode === 'single' ? '' : 'hidden'}>
        <label class="date-filter-field"><span>Дата загрузки</span><input id="uploadDateSingle" type="date" value="${state.uploadDateMode === 'single' ? state.uploadDateFrom : ''}"></label>
      </div>
      <div class="date-filter-fields date-filter-range" data-date-fields="period" ${state.uploadDateMode === 'period' ? '' : 'hidden'}>
        <label class="date-filter-field"><span>С</span><input id="uploadDateFrom" type="date" value="${state.uploadDateMode === 'period' ? state.uploadDateFrom : ''}"></label>
        <label class="date-filter-field"><span>По</span><input id="uploadDateTo" type="date" value="${state.uploadDateMode === 'period' ? state.uploadDateTo : ''}"></label>
      </div>
    </section>`,
    actions: `<button class="button button-secondary" type="button" id="resetFilterSettings">Сбросить</button><button class="button button-primary" type="button" id="applyFilterSettings">Применить</button>`,
  });
}

function columnSettingsModal() {
  const columns = [['size', 'Размер'], ['modified', 'Дата изменения'], ['access', 'Доступ']];
  showModal({
    title: 'Настройка колонок', subtitle: 'Формат файла показывается рядом с названием',
    body: `<div class="column-option-list"><label class="column-option locked"><input type="checkbox" checked disabled><span>Название и тип</span><small>Обязательная колонка</small></label>${columns.map(([value, label]) => `<label class="column-option"><input type="checkbox" name="visibleColumn" value="${value}" ${state.visibleColumns.has(value) ? 'checked' : ''}><span>${label}</span></label>`).join('')}</div>`,
    actions: `<button class="button button-secondary" value="cancel">Отмена</button><button class="button button-primary" type="button" id="applyColumnSettings">Применить</button>`,
  });
}

async function copyText(value, successMessage) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
  toast(successMessage);
}

function copyItemLink(item) {
  const link = `${location.origin}${location.pathname}#asset-${item.id}`;
  copyText(link, `Ссылка на «${displayName(item)}» скопирована`);
}

function copySelectionLinks(ids) {
  const links = ids.map(id => `${location.origin}${location.pathname}#asset-${id}`).join('\n');
  copyText(links, `${ids.length} ${plural(ids.length, ['ссылка скопирована', 'ссылки скопированы', 'ссылок скопировано'])}`);
}

function accessRoleOptions(selected = 'view') {
  return [
    ['view', 'Просмотр'],
    ['comment', 'Комментирование'],
    ['edit', 'Редактирование'],
  ].map(([value, label]) => `<option value="${value}" ${value === selected ? 'selected' : ''}>${label}</option>`).join('');
}

function accessInitials(email) {
  return email.split('@')[0].replace(/[^a-zа-яё0-9]/gi, '').slice(0, 2).toUpperCase() || 'У';
}

function accessModal(item) {
  item.accessPeople ||= [];
  const objectLabel = item.kind === 'folder' ? 'папке' : 'файлу';
  const linkLabel = item.kind === 'folder' ? 'Ссылка на папку' : 'Ссылка на файл';
  showModal({
    title: `Доступ к ${objectLabel}`,
    subtitle: item.name,
    body: `<div class="access-panel">
      <section class="access-section">
        <label class="access-section-title" for="accessEmail">Электронная почта</label>
        <div class="access-invite-row">
          <input id="accessEmail" type="email" placeholder="name@company.ru" autocomplete="off">
          <button class="button button-primary" type="button" id="inviteByEmail" data-id="${item.id}">Пригласить</button>
        </div>
      </section>
      <section class="access-section">
        <div class="access-section-title">Участники</div>
        <div class="access-people-list">
          <div class="access-person"><span class="access-avatar">ЮМ</span><div><strong>Юлия Мякишева</strong><small>Владелец</small></div><span>Полный доступ</span></div>
          ${item.accessPeople.map(person => `<div class="access-person" data-access-email="${escapeHtml(person.email)}"><span class="access-avatar soft">${escapeHtml(accessInitials(person.email))}</span><div><strong>${escapeHtml(person.email)}</strong><small>Приглашён по почте</small></div><select class="participant-role-select" data-id="${item.id}" data-email="${escapeHtml(person.email)}" aria-label="Права для ${escapeHtml(person.email)}">${accessRoleOptions(person.role)}</select></div>`).join('')}
        </div>
      </section>
    </div>`,
    actions: `<button class="access-copy-link" type="button" id="copyAccessLink" data-id="${item.id}"><svg aria-hidden="true"><use href="#icon-link"></use></svg>${linkLabel}</button><span class="modal-action-spacer"></span><button class="button button-secondary" value="cancel">Отмена</button><button class="button button-primary" value="cancel">Готово</button>`,
  });
}

function newFolderModal() {
  showModal({
    title: 'Новая папка', subtitle: 'Папка появится в текущем разделе',
    body: `<label class="field-label">Название папки<input class="field-input" id="folderName" maxlength="80" placeholder="Например, Материалы кампании" autofocus></label><p class="field-help">Название должно быть уникальным внутри текущей папки.</p>`,
    actions: `<button class="button button-secondary" value="cancel">Отмена</button><button class="button button-primary" type="button" id="createFolder">Создать папку</button>`
  });
  setTimeout(() => $('#folderName')?.focus(), 50);
}

function uploadModal() {
  showModal({
    title: 'Загрузить файлы', subtitle: 'Поддерживаются изображения, видео, документы и архивы',
    body: `<div class="drop-zone" id="dropZone"><span class="drop-zone-icon"><svg><use href="#icon-upload"></use></svg></span><strong>Перетащите файлы сюда</strong><p>или выберите их на компьютере</p><button class="button button-secondary" type="button" id="chooseFiles">Выбрать файлы</button><input id="fileInput" type="file" multiple hidden><button class="demo-link" type="button" id="demoDuplicate">Показать сценарий с дубликатом</button></div>`,
    actions: `<button class="button button-secondary" value="cancel">Закрыть</button>`
  });
}

function processFiles(files) {
  if (!files.length) return;
  const duplicate = files.find(file => data.some(item => item.name.toLowerCase() === file.name.toLowerCase()));
  if (duplicate) return duplicateModal(duplicate.name);
  els.modalBody.innerHTML = files.map((file, i) => `<div class="history-item"><span class="history-dot"></span><div><strong>${escapeHtml(file.name)}</strong><small>Загрузка завершена</small></div><time>${formatSize(file.size)}</time></div>`).join('');
  els.modalActions.innerHTML = `<button class="button button-primary" type="button" id="finishUpload">Готово</button>`;
  files.forEach((file, index) => {
    const now = new Date().toISOString();
    data.push({ id: Date.now() + index, parent: state.folder, kind: 'file', name: file.name, type: file.name.split('.').pop().toUpperCase() || 'Файл', category: file.type.startsWith('image') ? 'image' : file.type.startsWith('video') ? 'video' : 'document', modified: now, added: now, size: file.size, favorite: false, tone: 'blue' });
  });
  render();
}

function queueUploadFiles(files, append = false, autoStart = false) {
  const validFiles = files.filter(file => file && typeof file.name === 'string' && file.name.trim());
  const rejectedCount = files.length - validFiles.length;
  if (rejectedCount) toast(`${rejectedCount} ${plural(rejectedCount, ['объект не удалось добавить', 'объекта не удалось добавить', 'объектов не удалось добавить'])}`, null, null, 'error');
  if (!validFiles.length) {
    toast('Не удалось распознать файлы. Попробуйте выбрать их через кнопку «Загрузить»', null, null, 'error');
    return;
  }
  if (!append) state.uploadTargetFolder = state.folder;
  const previous = append ? state.pendingUploads : [];
  const stamp = Date.now();
  const next = validFiles.map((file, index) => {
    const duplicate = data.find(item => item.parent === state.uploadTargetFolder && item.kind === 'file' && item.name.toLowerCase() === file.name.toLowerCase());
    return {
      id: `${stamp}-${index}`,
      file,
      name: file.name,
      size: file.size,
      selected: true,
      duplicateId: duplicate?.id || null,
      action: duplicate ? 'version' : 'new',
    };
  });
  state.pendingUploads = [...previous, ...next];
  els.directUpload.value = '';
  if (autoStart && !next.some(item => item.duplicateId)) startUploadProgress();
  else showUploadSelectionModal();
}

function uploadActionOptions(selected = 'version') {
  return [
    ['version', 'Загрузить новую версию'],
    ['separate', 'Сохранить как отдельный файл'],
    ['skip', 'Не загружать'],
  ].map(([value, label]) => `<option value="${value}" ${value === selected ? 'selected' : ''}>${label}</option>`).join('');
}

function uploadFileIcon(name) {
  const extension = name.includes('.') ? name.split('.').pop().toUpperCase() : 'FILE';
  return `<span class="upload-file-icon"><svg aria-hidden="true"><use href="#icon-file"></use></svg><small>${escapeHtml(extension.slice(0, 4))}</small></span>`;
}

function showUploadSelectionModal() {
  const selected = state.pendingUploads.filter(item => item.selected);
  const duplicates = selected.filter(item => item.duplicateId);
  const regularCount = selected.length - duplicates.length;
  const duplicateBlock = duplicates.length ? `
    <div class="duplicate-alert">
      <span class="duplicate-alert-icon">!</span>
      <div><strong>${duplicates.length} ${plural(duplicates.length, ['файл уже есть', 'файла уже есть', 'файлов уже есть'])} в этой папке</strong><p>Выберите, что с ними сделать. ${regularCount ? `Остальные ${regularCount} ${plural(regularCount, ['файл загрузится', 'файла загрузятся', 'файлов загрузятся'])} как обычно.` : ''}</p></div>
    </div>
    <label class="duplicate-global-action"><span>Для всех совпадений</span><select id="allDuplicateAction">${uploadActionOptions()}</select></label>` : '';
  showModal({
    title: 'Загрузка и публикация файлов',
    subtitle: `${selected.length} ${plural(selected.length, ['файл выбран', 'файла выбрано', 'файлов выбрано'])}`,
    wide: true,
    body: `${duplicateBlock}<div class="upload-selection-list" id="uploadSelectionList">${state.pendingUploads.map(item => {
      const existing = item.duplicateId ? findItem(item.duplicateId) : null;
      return `<div class="upload-selection-row ${item.duplicateId ? 'has-duplicate' : ''}" data-upload-id="${item.id}">
        <input class="pending-upload-check" type="checkbox" ${item.selected ? 'checked' : ''} aria-label="Добавить ${escapeHtml(item.name)} в загрузку">
        ${uploadFileIcon(item.name)}
        <div class="upload-file-copy"><strong>${escapeHtml(item.name)}</strong><small>${formatSize(item.size)}${existing ? ` · совпадает с файлом от ${formatDate(existing.modified)}` : ' · готов к загрузке'}</small></div>
        ${item.duplicateId ? `<select class="duplicate-action-select" aria-label="Действие для ${escapeHtml(item.name)}">${uploadActionOptions(item.action)}</select>` : '<span aria-hidden="true"></span>'}
        <button class="icon-button remove-upload" type="button" data-remove-upload="${item.id}" aria-label="Убрать ${escapeHtml(item.name)}"><svg aria-hidden="true"><use href="#icon-close"></use></svg></button>
      </div>`;
    }).join('')}</div>`,
    actions: `<button class="button button-secondary upload-add-more" type="button" id="addMoreUploads"><svg aria-hidden="true"><use href="#icon-upload"></use></svg>Добавить файлы</button><span class="modal-action-spacer"></span><button class="button button-secondary" value="cancel">Отмена</button><button class="button button-primary" type="button" id="continueUpload" ${selected.length ? '' : 'disabled'}>Продолжить</button>`,
  });
}

function uniqueUploadName(name, folderId = state.uploadTargetFolder) {
  const dot = name.lastIndexOf('.');
  const base = dot > 0 ? name.slice(0, dot) : name;
  const extension = dot > 0 ? name.slice(dot) : '';
  let index = 1;
  let candidate = `${base} (${index})${extension}`;
  while (data.some(item => item.parent === folderId && item.name.toLowerCase() === candidate.toLowerCase())) {
    index += 1;
    candidate = `${base} (${index})${extension}`;
  }
  return candidate;
}

function createUploadedItem(file, name = file.name, index = 0, folderId = state.uploadTargetFolder) {
  const now = new Date().toISOString();
  return {
    id: Date.now() + index,
    parent: folderId,
    kind: 'file',
    name,
    type: name.split('.').pop().toUpperCase() || 'Файл',
    category: file.type.startsWith('image') ? 'image' : file.type.startsWith('video') ? 'video' : 'document',
    modified: now,
    added: now,
    size: file.size,
    favorite: false,
    tone: 'blue',
  };
}

function startUploadProgress() {
  const plan = state.pendingUploads.filter(item => item.selected && item.action !== 'skip');
  if (!plan.length) { toast('Выберите хотя бы один файл для загрузки'); return; }
  clearUploadTimers();
  const currentRunId = ++uploadRunId;
  state.activeUploadPlan = plan;
  showModal({
    title: 'Очередь загрузки', subtitle: `${plan.length} ${plural(plan.length, ['файл загружается', 'файла загружаются', 'файлов загружаются'])} в текущую папку`, wide: true,
    body: `<div class="upload-progress-list">${plan.map(item => `<div class="upload-progress-row" data-progress-id="${item.id}">${uploadFileIcon(item.name)}<div class="upload-progress-copy"><strong>${escapeHtml(item.name)}</strong><div class="upload-progress-track"><span style="width:6%"></span></div></div><small class="upload-progress-status">Подготовка</small></div>`).join('')}</div>`,
    actions: `<button class="button button-secondary" value="cancel">Отменить</button>`,
  });
  const steps = [28, 61, 86, 100];
  steps.forEach((value, stepIndex) => uploadTimers.push(setTimeout(() => {
    if (currentRunId !== uploadRunId) return;
    $$('.upload-progress-row').forEach((row, rowIndex) => {
      const adjusted = Math.min(100, Math.max(8, value - rowIndex * 5));
      const bar = $('.upload-progress-track span', row);
      const status = $('.upload-progress-status', row);
      if (bar) bar.style.width = `${adjusted}%`;
      if (status) status.textContent = adjusted === 100 ? 'Готово' : `${adjusted}%`;
    });
  }, 260 * (stepIndex + 1))));
  uploadTimers.push(setTimeout(() => completeUploadPlan(currentRunId), 1400));
}

function clearUploadTimers() {
  uploadTimers.forEach(timer => clearTimeout(timer));
  uploadTimers = [];
}

function showUploadError(message = 'Не удалось завершить загрузку. Попробуйте ещё раз') {
  clearUploadTimers();
  uploadRunId += 1;
  state.activeUploadPlan = [];
  els.modalTitle.textContent = 'Ошибка загрузки';
  els.modalSubtitle.textContent = message;
  $$('.upload-progress-row').forEach(row => {
    const bar = $('.upload-progress-track span', row);
    const status = $('.upload-progress-status', row);
    if (bar) bar.style.background = 'var(--danger)';
    if (status) {
      status.textContent = 'Ошибка';
      status.classList.add('error');
    }
  });
  els.modalActions.innerHTML = `<button class="button button-secondary" value="cancel">Закрыть</button><button class="button button-primary" type="button" id="retryUpload">Повторить</button>`;
  toast(message, null, null, 'error');
}

function completeUploadPlan(currentRunId) {
  if (currentRunId !== uploadRunId) return;
  try {
    const targetFolder = state.uploadTargetFolder;
    const completed = state.activeUploadPlan.map((item, index) => {
      if (item.action === 'version' && item.duplicateId) {
        const existing = findItem(item.duplicateId);
        if (existing) {
          const versions = ensureVersions(existing);
          const now = new Date().toISOString();
          const uploadedVersion = { id: `${existing.id}-${Date.now()}-${index}`, uploadedAt: now, author: 'Юлия Мякишева', size: item.file.size, type: existing.type };
          versions.unshift(uploadedVersion);
          existing.currentVersionId = uploadedVersion.id;
          existing.modified = now;
          existing.size = item.file.size;
          return { ...item, result: 'Новая версия опубликована' };
        }
      }
      const name = item.action === 'separate' ? uniqueUploadName(item.name, targetFolder) : item.name;
      data.push(createUploadedItem(item.file, name, index, targetFolder));
      return { ...item, name, result: 'Файл опубликован' };
    });
    clearUploadTimers();
    state.pendingUploads = [];
    state.activeUploadPlan = [];
    render();
    closeModal();
    toast(`${completed.length} ${plural(completed.length, ['файл загружен', 'файла загружены', 'файлов загружено'])}`);
  } catch (error) {
    showUploadError();
  }
}

function duplicateModal(name = 'Главный баннер.jpg') {
  showModal({
    title: 'Найден похожий файл', subtitle: 'В этой папке уже есть файл с таким названием',
    body: `<div class="duplicate-card">${previewMarkup(data.find(x => x.name === 'Главный баннер.jpg') || data[3])}<div><strong>${escapeHtml(name)}</strong><span>Изменён сегодня · 2,8 МБ</span></div></div><p class="field-help">Замените существующий файл новой версией или сохраните оба файла.</p>`,
    actions: `<button class="button button-secondary" type="button" id="keepBoth">Сохранить оба</button><button class="button button-primary" type="button" id="replaceFile">Заменить файл</button>`
  });
}

function renameModal(item) {
  showModal({ title: 'Переименовать', body: `<label class="field-label">Новое название<input class="field-input" id="renameInput" value="${escapeHtml(displayName(item))}" maxlength="120"></label>`, actions: `<button class="button button-secondary" value="cancel">Отмена</button><button class="button button-primary" type="button" id="saveRename" data-id="${item.id}">Сохранить</button>` });
  $('#renameInput')?.select();
}

function moveModal(ids) {
  const folders = data.filter(x => x.kind === 'folder' && x.parent === 'root' && !ids.includes(x.id));
  showModal({ title: 'Переместить', subtitle: `${ids.length} ${plural(ids.length, ['объект','объекта','объектов'])}`, body: `<div class="folder-options">${folders.map((folder, i) => `<label class="folder-option ${i === 0 ? 'selected' : ''}"><input type="radio" name="moveFolder" value="${folder.id}" ${i === 0 ? 'checked' : ''} hidden><svg><use href="#icon-folder"></use></svg><span>${escapeHtml(folder.name)}</span></label>`).join('')}</div>`, actions: `<button class="button button-secondary" value="cancel">Отмена</button><button class="button button-primary" type="button" id="confirmMove" data-ids="${ids.join(',')}">Переместить</button>` });
}

function formatVersionDate(value) {
  const date = new Date(value);
  const today = new Date('2026-09-25T15:00:00');
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const time = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  if (date.toDateString() === today.toDateString()) return `Сегодня, ${time}`;
  if (date.toDateString() === yesterday.toDateString()) return `Вчера, ${time}`;
  return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(date);
}

function ensureVersions(item) {
  if (item.versions?.length) return item.versions;
  const currentDate = new Date(item.added || item.modified);
  const previousDate = new Date(currentDate); previousDate.setDate(currentDate.getDate() - 2); previousDate.setHours(14, 26);
  const firstDate = new Date(currentDate); firstDate.setDate(currentDate.getDate() - 9); firstDate.setHours(11, 8);
  item.versions = [
    { id: `${item.id}-current`, uploadedAt: item.modified, author: 'Юлия Мякишева', size: item.size, type: item.type },
    { id: `${item.id}-previous`, uploadedAt: previousDate.toISOString(), author: 'Алексей Воронов', size: Math.max(1000, Math.round(item.size * .94)), type: item.type },
    { id: `${item.id}-first`, uploadedAt: firstDate.toISOString(), author: 'Юлия Мякишева', size: Math.max(1000, Math.round(item.size * .88)), type: item.type },
  ];
  item.currentVersionId = item.versions[0].id;
  return item.versions;
}

function renderVersionHistory(item) {
  const versions = ensureVersions(item);
  const current = versions.find(version => version.id === item.currentVersionId) || versions[0];
  const previewed = versions.find(version => version.id === state.previewVersionId) || current;
  state.previewVersionId = previewed.id;
  setInspectorPreview(item, `${previewed.id === item.currentVersionId ? 'Текущая загрузка' : 'Предпросмотр'} · ${formatVersionDate(previewed.uploadedAt)}`);
  els.drawerContent.innerHTML = `<div class="version-history">
    <div class="version-history-intro">
      <strong>${escapeHtml(item.name)}</strong>
      <p>Все загрузки сохранены. Старую можно снова сделать текущей — нынешняя останется в истории.</p>
    </div>
    <div class="version-list">${versions.map(version => {
      const isCurrent = version.id === item.currentVersionId;
      const isPreviewed = version.id === state.previewVersionId;
      return `<article class="version-card ${isCurrent ? 'current' : ''} ${isPreviewed ? 'previewing' : ''}">
        <button class="version-thumb-button" type="button" data-preview-version="${version.id}" aria-label="Показать загрузку от ${escapeHtml(formatVersionDate(version.uploadedAt))}">${previewMarkup(item, 'version-preview')}</button>
        <div class="version-card-copy">
          <div class="version-card-heading"><strong>${escapeHtml(formatVersionDate(version.uploadedAt))}</strong>${isCurrent ? '<span class="current-version-badge">Текущая</span>' : ''}</div>
          <span>${escapeHtml(version.author)}</span>
          <small>${escapeHtml(version.type)} · ${formatSize(version.size)}</small>
          ${version.restoredFrom ? `<small class="restored-note">Восстановлено из загрузки от ${escapeHtml(formatVersionDate(version.restoredFrom))}</small>` : ''}
          ${isCurrent ? '' : `<button class="version-restore-button" type="button" data-make-current="${version.id}"><svg aria-hidden="true"><use href="#icon-undo"></use></svg>Сделать текущей</button>`}
        </div>
      </article>`;
    }).join('')}</div>
  </div>`;
}

function openVersionHistory(item) {
  if (item.kind !== 'file') return;
  state.drawerTarget = item.id;
  ensureVersions(item);
  state.previewVersionId = item.currentVersionId;
  els.drawer.classList.remove('preview-only');
  els.drawer.classList.add('version-history-mode');
  els.drawerHeaderTitle.textContent = 'История версий';
  renderVersionHistory(item);
  els.drawer.classList.add('open');
  els.drawer.setAttribute('aria-hidden', 'false');
}

function restoreVersion(item, versionId) {
  const versions = ensureVersions(item);
  const source = versions.find(version => version.id === versionId);
  if (!source || source.id === item.currentVersionId) return;
  const now = new Date().toISOString();
  const restored = {
    ...source,
    id: `${item.id}-${Date.now()}`,
    uploadedAt: now,
    author: 'Юлия Мякишева',
    restoredFrom: source.uploadedAt,
  };
  versions.unshift(restored);
  item.currentVersionId = restored.id;
  item.modified = now;
  item.size = restored.size;
  state.previewVersionId = restored.id;
  render();
  openVersionHistory(item);
  toast('Выбранная загрузка стала текущей. Предыдущая сохранена в истории');
}

function confirmDelete(ids, forever = false) {
  showModal({ title: forever ? 'Удалить навсегда?' : 'Переместить в корзину?', subtitle: forever ? 'Это действие нельзя отменить' : 'Объекты можно будет восстановить из корзины', body: `<p style="margin:0;font-size:13px;line-height:1.6">Будет удалено: <strong>${ids.length} ${plural(ids.length, ['объект','объекта','объектов'])}</strong>.</p>`, actions: `<button class="button button-secondary" value="cancel">Отмена</button><button class="button button-danger-quiet" type="button" id="confirmDelete" data-ids="${ids.join(',')}" data-forever="${forever}">${forever ? 'Удалить навсегда' : 'В корзину'}</button>` });
}

function deleteItems(ids) {
  const removed = [];
  ids.forEach(id => {
    const index = data.findIndex(x => x.id === id);
    if (index >= 0) removed.push(...data.splice(index, 1));
  });
  state.trash.push(...removed.map(item => ({ ...item, previousParent: item.parent, deletedAt: new Date().toISOString() })));
  state.lastDeleted = removed;
  state.selected.clear();
  closeDrawer();
  render();
  toast(`${removed.length} ${plural(removed.length, ['объект перемещён','объекта перемещены','объектов перемещено'])} в корзину`, 'Отменить', () => {
    const idsToRestore = removed.map(x => x.id);
    restoreItems(idsToRestore);
  });
}

function restoreItems(ids) {
  const restored = [];
  state.trash = state.trash.filter(item => {
    if (ids.includes(item.id)) { restored.push({ ...item, parent: item.previousParent || 'root' }); return false; }
    return true;
  });
  restored.forEach(item => { delete item.previousParent; delete item.deletedAt; data.push(item); });
  state.selected.clear(); render(); toast('Объекты восстановлены');
}

function deleteForever(ids) {
  state.trash = state.trash.filter(x => !ids.includes(x.id));
  state.selected.clear(); render(); toast('Объекты удалены навсегда');
}

function toast(message, actionText, action, variant = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${variant === 'error' ? 'toast-error' : ''}`;
  el.innerHTML = `<span class="toast-icon"><svg><use href="#${variant === 'error' ? 'icon-close' : 'icon-check'}"></use></svg></span><span>${escapeHtml(message)}</span>${actionText ? `<button type="button">${escapeHtml(actionText)}</button>` : ''}`;
  if (actionText) $('button', el).addEventListener('click', () => { action?.(); el.remove(); });
  (els.modal.open ? els.modalToastStack : $('#toastStack')).append(el);
  setTimeout(() => el.remove(), 4500);
}

document.addEventListener('click', event => {
  const accountButton = event.target.closest('#accountMenuButton');
  if (accountButton) {
    const willOpen = els.accountMenu.hidden;
    els.accountMenu.hidden = !willOpen;
    els.accountButton.setAttribute('aria-expanded', String(willOpen));
    return;
  }

  if (event.target.closest('#logoutButton')) {
    els.accountMenu.hidden = true;
    els.accountButton.setAttribute('aria-expanded', 'false');
    closeDrawer();
    loginModal();
    return;
  }

  if (!event.target.closest('.account-menu-wrap')) {
    els.accountMenu.hidden = true;
    els.accountButton.setAttribute('aria-expanded', 'false');
  }

  const nav = event.target.closest('[data-section]');
  if (nav) { closeMenu(); state.section = nav.dataset.section; state.folder = 'root'; state.selected.clear(); state.search = ''; els.search.value = ''; closeDrawer(); render(); return; }

  const folderCrumb = event.target.closest('[data-folder]');
  if (folderCrumb) { closeMenu(); state.folder = folderCrumb.dataset.folder === 'root' ? 'root' : Number(folderCrumb.dataset.folder); state.section = 'library'; state.selected.clear(); render(); return; }

  const inlineAccessButton = event.target.closest('[data-inline-access]');
  if (inlineAccessButton) {
    const item = findItem(inlineAccessButton.dataset.id); if (!item) return;
    if (inlineAccessButton.dataset.inlineAccess === 'copy') copyItemLink(item);
    if (inlineAccessButton.dataset.inlineAccess === 'manage') accessModal(item);
    return;
  }

  const viewButton = event.target.closest('[data-view]');
  if (viewButton) { state.view = viewButton.dataset.view; render(); return; }

  const openButton = event.target.closest('[data-open]');
  if (openButton) { const item = findItem(openButton.dataset.open); if (item) openItem(item); return; }

  const menuButton = event.target.closest('[data-menu]');
  if (menuButton) { event.stopPropagation(); const item = findItem(menuButton.dataset.menu); if (item) openMenu(item, menuButton); return; }

  const actionButton = event.target.closest('[data-action]');
  if (actionButton && els.menu.contains(actionButton)) {
    const item = findItem(state.menuTarget); const action = actionButton.dataset.action; closeMenu();
    if (!item) return;
    if (action === 'open') openItem(item);
    if (action === 'information') openInformation(item);
    if (action === 'copyLink') copyItemLink(item);
    if (action === 'shareAccess') accessModal(item);
    if (action === 'rename') renameModal(item);
    if (action === 'move') moveModal([item.id]);
    if (action === 'download') toast(`Скачивание «${displayName(item)}» начато`);
    if (action === 'history') openVersionHistory(item);
    if (action === 'delete') confirmDelete([item.id]);
    if (action === 'restore') restoreItems([item.id]);
    if (action === 'deleteForever') confirmDelete([item.id], true);
    return;
  }

  const sortButton = event.target.closest('[data-sort]');
  if (sortButton) { const key = sortButton.dataset.sort; state.sortDir = state.sortKey === key && state.sortDir === 'asc' ? 'desc' : 'asc'; state.sortKey = key; render(); return; }

  const favorite = event.target.closest('[data-favorite]');
  if (favorite) { const item = findItem(favorite.dataset.favorite); item.favorite = !item.favorite; openInformation(item); render(); toast(item.favorite ? 'Добавлено в избранное' : 'Удалено из избранного'); return; }

  const previewVersionButton = event.target.closest('[data-preview-version]');
  if (previewVersionButton) {
    const item = findItem(state.drawerTarget); if (!item) return;
    state.previewVersionId = previewVersionButton.dataset.previewVersion;
    renderVersionHistory(item);
    return;
  }

  const makeCurrentButton = event.target.closest('[data-make-current]');
  if (makeCurrentButton) {
    const item = findItem(state.drawerTarget); if (!item) return;
    restoreVersion(item, makeCurrentButton.dataset.makeCurrent);
    return;
  }

  const bulk = event.target.closest('[data-bulk]');
  if (bulk) { const ids = [...state.selected]; if (!ids.length) return; const action = bulk.dataset.bulk; if (action === 'copyLink') copySelectionLinks(ids); if (action === 'download') toast(`Подготовка ${ids.length} ${plural(ids.length, ['объекта', 'объектов', 'объектов'])} к скачиванию`); if (action === 'move') moveModal(ids); if (action === 'delete') confirmDelete(ids); if (action === 'restore') restoreItems(ids); if (action === 'deleteForever') confirmDelete(ids, true); return; }

  if (!event.target.closest('#actionMenu')) closeMenu();
});

document.addEventListener('change', event => {
  if (event.target.matches('.row-check')) {
    const holder = event.target.closest('[data-id]'); if (holder) selectItem(holder.dataset.id, event.target.checked);
  }
  if (event.target.name === 'moveFolder') $$('.folder-option').forEach(label => label.classList.toggle('selected', $('input', label).checked));
});

els.search.addEventListener('input', () => { state.search = els.search.value.trim(); state.selected.clear(); render(); });
els.selectAll.addEventListener('change', () => { visibleItems().forEach(item => els.selectAll.checked ? state.selected.add(item.id) : state.selected.delete(item.id)); render(); });
$('#clearSelection').addEventListener('click', () => { state.selected.clear(); render(); });
$('#newFolderButton').addEventListener('click', newFolderModal);
$('#uploadButton').addEventListener('click', () => els.directUpload.click());
els.productLogo.addEventListener('click', openAllFiles);
els.filterSettings.addEventListener('click', filterSettingsModal);
els.columnSettings.addEventListener('click', columnSettingsModal);
$('#sectionToggleButton').addEventListener('click', () => {
  closeMenu();
  state.section = state.section === 'trash' ? 'library' : 'trash';
  state.folder = 'root';
  state.selected.clear();
  closeDrawer();
  render();
});
$('#closeDrawer').addEventListener('click', closeDrawer);
$('#closePreview').addEventListener('click', closeDrawer);
$('#resetFilters').addEventListener('click', () => { state.search = ''; state.filters.clear(); state.uploadDateMode = 'any'; state.uploadDateFrom = ''; state.uploadDateTo = ''; els.search.value = ''; render(); });

els.modal.addEventListener('close', () => {
  els.modalToastStack.replaceChildren();
  if (state.activeUploadPlan.length) {
    clearUploadTimers();
    uploadRunId += 1;
    state.activeUploadPlan = [];
    toast('Загрузка отменена', null, null, 'error');
  }
});

els.modal.addEventListener('cancel', event => {
  if (els.modal.classList.contains('modal-auth')) event.preventDefault();
});

els.modal.addEventListener('click', event => {
  if (event.target === els.modal && !els.modal.classList.contains('modal-auth')) closeModal();
  const sberIdLoginButton = event.target.closest('#sberIdLogin');
  if (sberIdLoginButton) {
    document.body.classList.remove('signed-out');
    els.modal.classList.remove('modal-auth');
    closeModal();
    openAllFiles();
    toast('Вход через Сбер ID выполнен');
    return;
  }
  const copyAccessButton = event.target.closest('#copyAccessLink');
  if (copyAccessButton) {
    const item = findItem(copyAccessButton.dataset.id); if (item) copyItemLink(item);
    return;
  }
  const inviteButton = event.target.closest('#inviteByEmail');
  if (inviteButton) {
    const item = findItem(inviteButton.dataset.id); if (!item) return;
    const emailInput = $('#accessEmail');
    const email = emailInput.value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.classList.add('invalid');
      emailInput.focus();
      toast('Укажите корректный адрес электронной почты');
      return;
    }
    item.accessPeople ||= [];
    if (item.accessPeople.some(person => person.email === email)) {
      toast('Этот участник уже добавлен');
      return;
    }
    item.accessPeople.push({ email, role: 'view' });
    accessModal(item);
    toast(`Приглашение для ${email} добавлено`);
    return;
  }
  const removeUploadButton = event.target.closest('[data-remove-upload]');
  if (removeUploadButton) {
    state.pendingUploads = state.pendingUploads.filter(item => item.id !== removeUploadButton.dataset.removeUpload);
    showUploadSelectionModal();
    return;
  }
  if (event.target.closest('#addMoreUploads')) { els.directUpload.click(); return; }
  if (event.target.closest('#continueUpload')) { startUploadProgress(); return; }
  if (event.target.closest('#retryUpload')) { startUploadProgress(); return; }
  if (event.target.id === 'createFolder') {
    const name = $('#folderName').value.trim();
    if (!name) { $('#folderName').focus(); return; }
    if (data.some(x => x.parent === state.folder && x.name.toLowerCase() === name.toLowerCase())) { toast('Папка с таким названием уже существует'); return; }
    const now = new Date().toISOString();
    data.push({ id: Date.now(), parent: state.folder, kind: 'folder', name, type: 'Папка', modified: now, added: now, size: 0, count: 0, favorite: false, tone: 'violet' });
    closeModal(); render(); toast('Папка создана');
  }
  if (event.target.id === 'chooseFiles') $('#fileInput').click();
  if (event.target.id === 'demoDuplicate') duplicateModal();
  if (event.target.id === 'keepBoth') { const source = data[3]; const now = new Date().toISOString(); data.push({ ...source, id: Date.now(), name: 'Главный баннер (1).jpg', modified: now, added: now }); closeModal(); render(); toast('Оба файла сохранены'); }
  if (event.target.id === 'replaceFile') {
    const existing = data[3];
    const versions = ensureVersions(existing);
    const now = new Date().toISOString();
    const uploadedVersion = { id: `${existing.id}-${Date.now()}`, uploadedAt: now, author: 'Юлия Мякишева', size: existing.size, type: existing.type };
    versions.unshift(uploadedVersion);
    existing.currentVersionId = uploadedVersion.id;
    existing.modified = now;
    closeModal(); render(); toast('Файл заменён, версия сохранена в истории');
  }
  if (event.target.id === 'finishUpload') { closeModal(); toast('Файлы успешно загружены'); }
  if (event.target.id === 'saveRename') { const item = findItem(event.target.dataset.id); const name = $('#renameInput').value.trim(); if (item && name) { item.name = name; item.modified = new Date().toISOString(); closeModal(); render(); toast('Название изменено'); } }
  if (event.target.id === 'confirmMove') { const ids = event.target.dataset.ids.split(',').map(Number); const target = Number($('input[name="moveFolder"]:checked').value); ids.forEach(id => { const item = findItem(id); if (item) item.parent = target; }); state.selected.clear(); closeModal(); render(); toast('Объекты перемещены'); }
  if (event.target.id === 'confirmDelete') { const ids = event.target.dataset.ids.split(',').map(Number); const forever = event.target.dataset.forever === 'true'; closeModal(); forever ? deleteForever(ids) : deleteItems(ids); }
  if (event.target.id === 'resetFilterSettings') {
    state.filters.clear(); state.uploadDateMode = 'any'; state.uploadDateFrom = ''; state.uploadDateTo = ''; state.selected.clear(); closeModal(); render(); toast('Фильтры сброшены');
  }
  if (event.target.id === 'applyFilterSettings') {
    const uploadDateMode = $('input[name="uploadDateMode"]:checked')?.value || 'any';
    const singleDate = $('#uploadDateSingle')?.value || '';
    const periodFrom = $('#uploadDateFrom')?.value || '';
    const periodTo = $('#uploadDateTo')?.value || '';
    if (uploadDateMode === 'single' && !singleDate) { toast('Выберите дату загрузки'); return; }
    if (uploadDateMode === 'period' && (!periodFrom || !periodTo)) { toast('Укажите начало и конец периода'); return; }
    if (uploadDateMode === 'period' && periodFrom > periodTo) { toast('Начало периода должно быть раньше окончания'); return; }
    state.filters = new Set($$('input[name="assetType"]:checked').map(input => input.value));
    state.uploadDateMode = uploadDateMode;
    state.uploadDateFrom = uploadDateMode === 'single' ? singleDate : uploadDateMode === 'period' ? periodFrom : '';
    state.uploadDateTo = uploadDateMode === 'period' ? periodTo : '';
    state.selected.clear(); closeModal(); render(); toast('Настройки применены');
  }
  if (event.target.id === 'applyColumnSettings') {
    state.visibleColumns = new Set($$('input[name="visibleColumn"]:checked').map(input => input.value)); closeModal(); render(); toast('Колонки обновлены');
  }
});

els.modal.addEventListener('change', event => {
  if (event.target.id === 'fileInput') processFiles([...event.target.files]);
  if (event.target.id === 'linkAccessSelect') {
    const item = findItem(event.target.dataset.id);
    if (item) { item.linkAccess = event.target.value; toast('Доступ по ссылке обновлён'); }
  }
  if (event.target.matches('.participant-role-select')) {
    const item = findItem(event.target.dataset.id);
    const person = item?.accessPeople?.find(entry => entry.email === event.target.dataset.email);
    if (person) { person.role = event.target.value; toast('Права участника обновлены'); }
  }
  if (event.target.name === 'assetType') event.target.closest('.filter-option')?.classList.toggle('selected', event.target.checked);
  if (event.target.name === 'uploadDateMode') {
    $$('.date-filter-mode', els.modal).forEach(label => label.classList.toggle('selected', $('input', label).checked));
    $$('[data-date-fields]', els.modal).forEach(fields => { fields.hidden = fields.dataset.dateFields !== event.target.value; });
  }
  if (event.target.matches('.pending-upload-check')) {
    const row = event.target.closest('[data-upload-id]');
    const item = state.pendingUploads.find(upload => upload.id === row?.dataset.uploadId);
    if (item) item.selected = event.target.checked;
  }
  if (event.target.matches('.duplicate-action-select')) {
    const row = event.target.closest('[data-upload-id]');
    const item = state.pendingUploads.find(upload => upload.id === row?.dataset.uploadId);
    if (item) item.action = event.target.value;
  }
  if (event.target.id === 'allDuplicateAction') {
    state.pendingUploads.filter(item => item.duplicateId).forEach(item => { item.action = event.target.value; });
    $$('.duplicate-action-select').forEach(select => { select.value = event.target.value; });
  }
});

els.folderDropZone.addEventListener('click', () => els.directUpload.click());
els.folderDropZone.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    els.directUpload.click();
  }
});

function hasDraggedFiles(event) {
  return [...(event.dataTransfer?.types || [])].includes('Files');
}

function setWorkspaceDropZone(active) {
  els.workspaceDropZone.classList.toggle('active', active);
  els.workspaceDropZone.setAttribute('aria-hidden', String(!active));
}

function resetWorkspaceDrag() {
  workspaceDragDepth = 0;
  setWorkspaceDropZone(false);
}

document.addEventListener('dragenter', event => {
  if (!hasDraggedFiles(event)) return;
  event.preventDefault();
  workspaceDragDepth += 1;
  if (state.section === 'library' && !els.modal.open && !state.activeUploadPlan.length) setWorkspaceDropZone(true);
});

document.addEventListener('dragover', event => {
  if (!hasDraggedFiles(event)) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = state.section === 'library' && !state.activeUploadPlan.length ? 'copy' : 'none';
});

document.addEventListener('dragleave', event => {
  if (!workspaceDragDepth) return;
  workspaceDragDepth = Math.max(0, workspaceDragDepth - 1);
  if (workspaceDragDepth === 0) setWorkspaceDropZone(false);
});

document.addEventListener('drop', event => {
  if (!hasDraggedFiles(event) && !workspaceDragDepth) return;
  event.preventDefault();
  resetWorkspaceDrag();
  if (state.section !== 'library') {
    toast('Загрузка доступна только в разделе «Все файлы»', null, null, 'error');
    return;
  }
  if (state.activeUploadPlan.length) {
    toast('Дождитесь завершения текущей загрузки', null, null, 'error');
    return;
  }
  const append = els.modal.open && !!$('#uploadSelectionList');
  if (els.modal.open && !append) {
    toast('Закройте текущее окно перед загрузкой файлов', null, null, 'error');
    return;
  }
  queueUploadFiles([...(event.dataTransfer?.files || [])], append, !append);
});

window.addEventListener('blur', resetWorkspaceDrag);

els.directUpload.addEventListener('change', event => {
  const append = els.modal.open && !!$('#uploadSelectionList');
  queueUploadFiles([...event.target.files], append);
});

document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); els.search.focus(); }
  if (event.key === 'Escape') { closeMenu(); closeDrawer(); }
});

render();
