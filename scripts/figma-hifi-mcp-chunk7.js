
// --- SUPER ADMIN (mirrors super-admin.html dark shell) ---
const sw = 276;
rect(scrAdm, C.darkCard, C.darkBr, 1, sw, H, 0, 0, 0);
txt(scrAdm, 'Vizehelp', 15, 'Bold', C.white, 18, 22);
txt(scrAdm, 'Super Admin', 15, 'Semi Bold', C.primary, 92, 22);
let ay = 62;
function ah(t) {
  txt(scrAdm, t, 10, 'Semi Bold', C.slate400, 20, ay);
  ay += 20;
}
function ai(l) {
  txt(scrAdm, l, 12, 'Semi Bold', C.slate400, 16, ay);
  ay += 34;
}
ah('MONITORING');
ai('Platform dashboard');
ai('Global order monitoring');
ai('SLA & fraud alerts');
ah('GOVERNANCE');
ai('Enterprise management');
ai('Worker verification queue');
ai('Maker-checker queue');
ah('COMMERCIALS');
ai('Pricing plan management');
ai('Payments & reconciliation');
const ax = sw + 40;
txt(scrAdm, 'Platform dashboard', 24, 'Bold', C.white, ax, 36);
txt(scrAdm, 'Enterprises • orders • workers • claims • revenue…', 13, 'Regular', C.darkMuted, ax, 76);
rect(scrAdm, C.ok, undefined, 0, 168, 32, 999, W - pad - 168, 42);
scrAdm.children[scrAdm.children.length - 1].opacity = 0.2;
txt(scrAdm, 'System operational', 12, 'Semi Bold', C.ok, W - pad - 152, 48);
const stY = 108;
const sk = Math.floor((W - ax - pad - 48) / 4);
const st = [
  ['Active enterprises', '186'],
  ['Orders (MTD)', '24.2k'],
  ['Open claims', '74'],
  ['Platform revenue', '$142k']
];
for (let j = 0; j < 4; j++) {
  const sx0 = ax + j * (sk + 16);
  rect(scrAdm, C.darkCard, C.darkBr, 1, sk, 92, 12, sx0, stY);
  txt(scrAdm, st[j][0], 10, 'Semi Bold', C.slate400, sx0 + 16, stY + 12);
  txt(scrAdm, st[j][1], 26, 'Bold', C.primary, sx0 + 16, st[j][1].includes('$') ? stY + 34 : stY + 34);
}
const rowY = stY + 124;
const colW = Math.floor((W - ax - pad - 24) / 2);
rect(scrAdm, C.darkCard, C.darkBr, 1, colW, 268, 12, ax, rowY);
rect(scrAdm, C.darkCard, C.darkBr, 1, colW, 268, 12, ax + colW + 24, rowY);
txt(scrAdm, 'Action required', 14, 'Bold', C.white, ax + 18, rowY + 16);
txt(scrAdm, 'Enterprise review · EcoFleet NYC', 12, 'Regular', C.slate400, ax + 18, rowY + 48);
txt(scrAdm, 'Maker-checker · plan entitlement change', 12, 'Regular', C.slate400, ax + 18, rowY + 74);
txt(scrAdm, 'High-risk order intervention', 12, 'Regular', C.slate400, ax + 18, rowY + 100);
txt(scrAdm, 'Platform revenue mix', 14, 'Bold', C.white, ax + colW + 24 + 18, rowY + 16);
rect(scrAdm, C.darkBg, C.darkBr, 1, colW - 36, 208, 10, ax + colW + 24 + 18, rowY + 48);
txt(scrAdm, 'Chart placeholder · fees · commission · top-ups', 12, 'Regular', C.slate400, ax + colW + 24 + 70, rowY + 140);
txt(scrAdm, '← Enterprise portal preview', 12, 'Semi Bold', C.primary, ax, H - 44);
hit(scrAdm, 'proto-adm-enterprise', 300, 32, ax, H - 52);

return {
  phase: 'build',
  pageId: page.id,
  createdNodeIds: [scrHome.id, scrSign.id, scrVer.id, scrEnt.id, scrAdm.id],
  note: 'Wire prototype: paste scripts/figma-hifi-wire.js in a second use_figma invocation.'
