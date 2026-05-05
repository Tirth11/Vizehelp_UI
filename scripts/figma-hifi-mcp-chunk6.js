const sideW = 258;
rect(scrEnt, C.white, C.slate200, 1, sideW, H, 0, 0, 0);
txt(scrEnt, 'Vizehelp', 15, 'Bold', C.navy, 20, 22);
txt(scrEnt, 'Enterprise', 15, 'Semi Bold', C.primary, 92, 22);
let sy = 66;
function navHead(t) {
  txt(scrEnt, t, 10, 'Semi Bold', C.slate400, 20, sy);
  sy += 22;
}
function navRow(label, active) {
  const row = rect(scrEnt, active ? C.primaryLight : C.white, undefined, 0, sideW - 16, 36, 8, 8, sy);
  if (!active) row.fills = [{ type: 'SOLID', color: C.white }];
  txt(scrEnt, label, 12, 'Semi Bold', active ? C.primary : C.slate500, 18, sy + 9);
  sy += 44;
}
navHead('CORE');
navRow('Dashboard', true);
navRow('Live orders & SLA', false);
navHead('OPERATIONS');
navRow('Locations', false);
navRow('Workers & verification', false);
navRow('Customer access', false);
navRow('All orders', false);
navHead('BUSINESS');
navRow('Payment & rules', false);
navRow('Claims', false);
navRow('Support', false);
navRow('Reports', false);
navHead('ADMIN');
navRow('Subscription & billing', false);
navRow('Users & roles', false);
const mx = sideW + 48;
txt(scrEnt, 'Operations dashboard', 24, 'Bold', C.navy, mx, 36);
txt(scrEnt, 'All services • locations • workers • claims • SLA health', 13, 'Regular', C.slate500, mx, 74);
const pill = figma.createFrame();
pill.resize(130, 30);
pill.x = W - pad - pill.width;
pill.y = 38;
pill.cornerRadius = 999;
pill.fills = [{ type: 'SOLID', color: C.primaryLight }];
pill.layoutMode = 'HORIZONTAL';
pill.primaryAxisAlignItems = 'CENTER';
pill.counterAxisAlignItems = 'CENTER';
const pt = figma.createText();
pt.fontName = { family: 'Inter', style: 'Semi Bold' };
pt.fontSize = 11;
pt.characters = 'Standard Plan';
pt.fills = [{ type: 'SOLID', color: C.primary }];
pill.appendChild(pt);
scrEnt.appendChild(pill);
const av = figma.createEllipse();
av.resize(32, 32);
av.x = pill.x - 44;
av.y = pill.y - 2;
av.fills = [{ type: 'SOLID', color: C.primary }];
scrEnt.appendChild(av);
txt(scrEnt, 'T', 12, 'Bold', C.white, av.x + 10, av.y + 7);
txt(scrEnt, 'Admin', 13, 'Semi Bold', C.slate700, av.x + 40, pill.y + 6);
rect(scrEnt, C.warnBg, C.warn, 1, W - mx - pad, 54, 10, mx, 108);
txt(
  scrEnt,
  'Plan usage alert · 80% worker slots · Buy top-up',
  13,
  'Semi Bold',
  C.warnTxt,
  mx + 14,
  126,
  W - mx - pad - 24
);
const kpy = 182;
const kw = Math.floor((W - mx - pad - 48) / 4);
const kp = [
  ['Total orders', '412'],
  ['Active orders', '27'],
  ['Active workers', '18'],
  ['Claims needing action', '3']
];
for (let i = 0; i < 4; i++) {
  const kx = mx + i * (kw + 16);
  rect(scrEnt, C.white, C.slate200, 1, kw, 94, 12, kx, kpy);
  txt(scrEnt, kp[i][0], 10, 'Semi Bold', C.slate400, kx + 16, kpy + 12);
  txt(scrEnt, kp[i][1], 26, 'Bold', C.navy, kx + 16, kpy + 34);
}
const secY = kpy + 122;
rect(scrEnt, C.white, C.slate200, 1, W - mx - pad, 196, 12, mx, secY);
txt(scrEnt, 'Live SLA status', 15, 'Bold', C.navy, mx + 20, secY + 16);
const bw = Math.floor((W - mx - pad - 80) / 3);
rect(scrEnt, C.okBg, C.ok, 1, bw, 116, 10, mx + 20, secY + 52);
rect(scrEnt, C.warnBg, C.warn, 1, bw, 116, 10, mx + 20 + bw + 20, secY + 52);
rect(scrEnt, C.dangerBg, C.danger, 1, bw, 116, 10, mx + 20 + (bw + 20) * 2, secY + 52);
txt(scrEnt, '8', 28, 'Bold', C.ok, mx + 36, secY + 78);
txt(scrEnt, 'ON TIME', 11, 'Semi Bold', C.ok, mx + 26, secY + 132);
txt(scrEnt, '3', 28, 'Bold', C.warnTxt, mx + 20 + bw + 20 + 28, secY + 78);
txt(scrEnt, 'AT RISK', 11, 'Semi Bold', C.warnTxt, mx + 20 + bw + 20 + 20, secY + 132);
txt(scrEnt, '1', 28, 'Bold', C.danger, mx + 20 + (bw + 20) * 2 + 36, secY + 78);
txt(scrEnt, 'DELAYED', 11, 'Semi Bold', C.danger, mx + 20 + (bw + 20) * 2 + 18, secY + 132);
txt(scrEnt, 'Platform governance preview →', 12, 'Semi Bold', C.primary, mx, H - 44);
hit(scrEnt, 'proto-ent-governance', 360, 32, mx, H - 52);
return { chunkDone: 6 };
