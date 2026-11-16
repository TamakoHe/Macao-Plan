const itinerary = [
  {
    title: '上午 · 新口岸到新马路',
    stops: [
      {
        id: 'lotus', time: '09:30–09:50', name: '金莲花广场', address: '高美士街，综艺馆前',
        destination: '金蓮花廣場, 澳門',
        shots: [
          ['wide', '「盛世莲花」连同底座和综艺馆的全景'],
          ['plaque', '底座铭文近照'],
          ['petals', '侧面的花瓣与雕塑轮廓'],
        ],
      },
      {
        id: 'centre', time: '10:00–10:25', name: '澳门文化中心广场', address: '冼星海大马路',
        destination: '澳門文化中心廣場, 澳門',
        note: '交接仪式的临时场馆已经拆除。可先存一张旧照，到现场找相近的方向。',
        source: ['交接场馆旧照', 'https://www.gcs.gov.mo/news/detail/zh-hans/M24LEWHe15'],
        shots: [
          ['wide', '文化中心与广场同框，保留场馆原址的空间关系'],
          ['capsule', '回归时间囊所在位置及周边细节'],
          ['match', '按交接会场旧照的方向拍一张今昔对照'],
        ],
      },
      {
        id: 'gifts', time: '10:25–11:00', name: '澳门回归贺礼陈列馆', address: '澳门文化中心旁',
        destination: '澳門回歸賀禮陳列館, 澳門',
        note: '选两三件贺礼拍成组，馆内以现场拍摄标识为准。',
        shots: [
          ['building', '馆外全貌与馆名'],
          ['gifts', '贺礼全貌和纹样、材质等工艺细节'],
          ['labels', '对应展签，拍清名称、赠送方和材质'],
        ],
      },
      {
        id: 'government', time: '11:20–11:40', name: '政府总部（原澳督府）', address: '南湾大马路 131 号',
        destination: '澳門特別行政區政府總部, 澳門',
        note: '从南湾湖畔一侧拍建筑外观。1999 年 12 月 19 日，末任澳门总督在这里举行降旗仪式。',
        shots: [
          ['wide', '隔街拍正门、旗杆和粉色立面同框'],
          ['door', '大门、门柱和栏杆细节'],
        ],
      },
      {
        id: 'senado', time: '11:55–12:30', name: '议事亭前地 · 邮政总局', address: '新马路旧城区',
        destination: '議事亭前地, 澳門',
        shots: [
          ['wide', '从新马路一侧朝喷水池拍广场全景'],
          ['street', '波浪石路、双语街牌和沿街店面'],
          ['post', '邮政总局外立面与钟楼'],
        ],
      },
    ],
  },
  {
    title: '下午 · 内港到关闸',
    breakNote: '12:30–13:15 在新马路附近午饭。从议事亭前地步行接下午路线。',
    stops: [
      {
        id: 'felicidade', time: '13:15–13:40', name: '福隆新街', address: '新马路以南，内港旧街区',
        destination: '福隆新街, 澳門',
        shots: [
          ['wide', '从街口拍两侧旧式楼房的连续立面'],
          ['details', '旧式门窗、招牌和店面细节'],
        ],
      },
      {
        id: 'praca', time: '13:45–14:00', name: '司打口（柯邦迪前地）', address: '靠近火船头街',
        destination: '柯邦迪前地, 澳門',
        shots: [
          ['wide', '广场和相邻街口同框'],
          ['fronts', '广场边临街建筑及底层店面'],
        ],
      },
      {
        id: 'lorchas', time: '14:00–14:20', name: '火船头街', address: '内港沿线，往十六浦方向',
        destination: '火船頭街, 澳門',
        shots: [
          ['view', '沿街建筑与道路纵深'],
          ['signs', '路牌、临港店面及骑楼细节'],
        ],
      },
      {
        id: 'pier', time: '14:25–14:45', name: '十六浦附近', address: '内港十六号码头一带',
        destination: '澳門十六浦, 澳門',
        shots: [
          ['wide', '从公共路段拍码头周边和临港建筑全貌'],
          ['port', '能看见水面的位置，补一张沿岸开阔视角'],
        ],
      },
      {
        id: 'tap-seac', time: '15:15–16:15', name: '塔石广场 · 澳门档案馆', address: '档案馆位于荷兰园大马路 91–93 号',
        destination: '澳門檔案館, 澳門',
        note: '若要查 1999 年的交接会场、街头庆祝或关闸照片，先向阅览室确认。',
        shots: [
          ['wide', '从广场对面拍一整排历史建筑'],
          ['arches', '拱廊、档案馆门牌和入口'],
        ],
      },
      {
        id: 'border', time: '16:45–17:30', name: '关闸拱门', address: '关闸广场',
        destination: '關閘拱門, 澳門',
        note: '长段转场可打车。关闸附近有轻轨施工，到场按现场通道找角度。',
        shots: [
          ['wide', '旧拱门和今天的口岸大楼同框'],
          ['front', '关闸拱门的正面全貌和门楣刻字'],
          ['side', '从广场另一侧拍拱门与口岸的相对位置'],
        ],
      },
    ],
  },
];

const storageKey = 'macau-field-checklist-v1';
const storageNote = document.querySelector('#storage-note');
const progressBar = document.querySelector('#progress-bar');
const progress = document.querySelector('#progress');
const progressLabel = document.querySelector('#progress-label');
const nextButton = document.querySelector('#next-item');
const route = document.querySelector('#itinerary');
const checkboxes = [];
const stationStatus = [];

function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content) node.textContent = content;
  return node;
}

function externalLink(text, url, className) {
  const link = element('a', className, text);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function navigationLink(stop) {
  const url = new URL('https://www.google.com/maps/dir/');
  url.search = new URLSearchParams({ api: '1', destination: stop.destination });
  const link = externalLink('导航 ↗', url, 'map-link');
  link.setAttribute('aria-label', `导航至${stop.name}（Google 地图）`);
  return link;
}

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function updateProgress() {
  const completed = checkboxes.filter((box) => box.checked).length;
  progress.max = checkboxes.length;
  progress.value = completed;
  progressLabel.textContent = `已拍 ${completed} / ${checkboxes.length}`;
  nextButton.disabled = completed === checkboxes.length;
  for (const { card, count, items } of stationStatus) {
    const done = items.filter((box) => box.checked).length;
    count.textContent = `${done}/${items.length} 项`;
    card.classList.toggle('complete', done === items.length);
  }
}

function renderStation(stop, number, saved) {
  const card = element('article', 'station');
  const heading = element('h3', 'station-name', stop.name);
  heading.id = `station-${stop.id}`;
  card.setAttribute('aria-labelledby', heading.id);
  const top = element('div', 'station-top');
  const sequence = element('span', 'sequence', String(number).padStart(2, '0'));
  sequence.setAttribute('aria-hidden', 'true');
  const info = element('div', 'station-info');
  const count = element('span', 'station-count');
  const meta = element('p', 'station-meta');
  meta.append(element('span', '', stop.time), count);
  info.append(meta, heading, element('p', 'address', stop.address));
  top.append(sequence, info, navigationLink(stop));
  card.append(top);
  if (stop.note) {
    const note = element('p', 'station-note', stop.note);
    if (stop.source) note.append(' ', externalLink(stop.source[0], stop.source[1], 'source-link'));
    card.append(note);
  }

  const list = element('ul', 'shots');
  const items = stop.shots.map(([id, text]) => {
    const checkbox = element('input');
    checkbox.type = 'checkbox';
    checkbox.value = `${stop.id}:${id}`;
    checkbox.checked = saved.has(checkbox.value);
    const row = element('label', 'shot');
    row.append(checkbox, element('span', '', text));
    const item = element('li');
    item.append(row);
    list.append(item);
    return checkbox;
  });
  card.append(list);
  checkboxes.push(...items);
  stationStatus.push({ card, count, items });
  return card;
}

const saved = readProgress();
let stopNumber = 0;
for (const part of itinerary) {
  const section = element('section', 'route-section');
  section.append(element('h2', 'section-title', part.title));
  if (part.breakNote) section.append(element('p', 'break-note', part.breakNote));
  const stations = element('div', 'stations');
  for (const stop of part.stops) stations.append(renderStation(stop, ++stopNumber, saved));
  section.append(stations);
  route.append(section);
}
document.querySelector('#stop-count').textContent = `${stopNumber} 站`;
progressBar.hidden = false;
updateProgress();

route.addEventListener('change', (event) => {
  if (!checkboxes.includes(event.target)) return;
  try {
    const selected = checkboxes.filter((box) => box.checked).map((box) => box.value);
    localStorage.setItem(storageKey, JSON.stringify(selected));
  } catch {
    storageNote.hidden = false;
  }
  updateProgress();
});

nextButton.addEventListener('click', () => {
  const next = checkboxes.find((box) => !box.checked);
  if (!next) return;
  next.focus({ preventScroll: true });
  next.closest('.station').scrollIntoView({ block: 'start' });
});
