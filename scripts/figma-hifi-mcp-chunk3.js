
// --- HOME (mirrors enterprise-landing.html structure) ---
rect(scrHome, C.white, C.slate200, 1, W, 64, 0, 0, 0);
txt(scrHome, 'Vizehelp', 17, 'Bold', C.navy, pad, 20);
txt(scrHome, 'Enterprise', 17, 'Semi Bold', C.primary, pad + 86, 20);
let nx = 440;
for (const l of ['How it works', 'Services', 'Safety', 'Pricing']) {
  txt(scrHome, l, 13, 'Semi Bold', C.slate700, nx, 22);
  nx += 114;
}
btn(scrHome, 'proto-home-login', 'Enterprise Login', W - 340, 12, 154, false);
btn(scrHome, 'proto-home-register-nav', 'Register Enterprise', W - 176, 12, 168, true);
txt(
  scrHome,
  'Run EV charging, laundry, maid, parking,\nand on-demand services from one platform.',
  34,
  'Bold',
  C.navy,
  pad,
  118,
  640
);
txt(
  scrHome,
  'One operations layer for offices, hotels, malls, residential societies, fleets, and parking operators — matching your marketing HTML.',
  17,
  'Regular',
  C.slate500,
  pad,
  232,
  580
);
btn(scrHome, 'proto-home-register-hero', 'Register Enterprise', pad, 310, 220, true);
btn(scrHome, 'proto-home-pricing', 'View Pricing', pad + 236, 310, 160, false);
let cx = pad;
const cy = 386;
const chips = ['Verified workers', 'OTP handover', 'Vehicle photos', 'Live tracking', 'Audit logs'];
for (const ch of chips) {
  const wf = figma.createFrame();
  wf.resize(162, 32);
  wf.x = cx;
  wf.y = cy;
  wf.cornerRadius = 999;
  wf.layoutMode = 'HORIZONTAL';
  wf.primaryAxisAlignItems = 'CENTER';
  wf.counterAxisAlignItems = 'CENTER';
  wf.itemSpacing = 8;
  wf.paddingLeft = 12;
  wf.paddingRight = 12;
  wf.fills = [{ type: 'SOLID', color: C.white }];
  wf.strokes = [{ type: 'SOLID', color: C.slate200 }];
  wf.strokeWeight = 1;
  const d = figma.createEllipse();
  d.resize(8, 8);
  d.fills = [{ type: 'SOLID', color: C.ok }];
  const tt = figma.createText();
  tt.fontName = { family: 'Inter', style: 'Semi Bold' };
  tt.fontSize = 11;
  tt.characters = ch;
  tt.fills = [{ type: 'SOLID', color: C.slate500 }];
  wf.appendChild(d);
  wf.appendChild(tt);
  scrHome.appendChild(wf);
  cx += wf.width + 10;
}
const vx = W - pad - 520;
const vy = 118;
const vis = rect(scrHome, C.white, C.slate200, 1, 520, 440, 20, vx, vy);
vis.effects = [ds({ r: 0, g: 0, b: 0, a: 0.1 }, 40, -12)];
rect(scrHome, C.slate100, undefined, 0, 240, 10, 5, vx + 28, vy + 28);
rect(scrHome, C.white, C.slate200, 1, vis.width - 56, 130, 12, vx + 28, vy + 52);
txt(scrHome, 'ORDER #VH-9042 • EVHelpBuddy • Downtown Hub', 13, 'Semi Bold', C.navy, vx + 44, vy + 70);
txt(scrHome, 'Charging • Live SLA trace • Evidence capture', 12, 'Regular', C.slate500, vx + 44, vy + 92, 440);
rect(scrHome, C.slate100, undefined, 0, vis.width - 88, 8, 4, vx + 44, vy + 138);
rect(scrHome, C.primary, undefined, 0, Math.floor((vis.width - 88) * 0.65), 8, 4, vx + 44, vy + 138);
rect(scrHome, C.navyLt, C.slate700, 1, vis.width - 56, 144, 12, vx + 28, vy + 240);
txt(scrHome, 'Customer return OTP', 11, 'Regular', C.slate400, vx + 44, vy + 268);
txt(scrHome, '4  0  2  9', 22, 'Bold', C.white, vx + 44, vy + 290);
return { chunkDone: 3 };
