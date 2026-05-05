// Paste into use_figma `code` — build five Hi-Fi screens (no prototype wiring).
// File: Vizehelp — UX Blueprint · fileKey: DSCJffFtqgEbYHnNXt2AZJ
// Run scripts/figma-hifi-wire.js in a second use_figma call for ON_CLICK navigation.

await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });

function rgb(r, g, b) {
  return { r: r / 255, g: g / 255, b: b / 255 };
}

const C = {
  navy: rgb(15, 23, 42),
  navyLt: rgb(30, 41, 59),
  primary: rgb(59, 130, 246),
  primaryLight: rgb(219, 234, 254),
  slate50: rgb(248, 250, 252),
  slate100: rgb(241, 245, 249),
  slate200: rgb(226, 232, 240),
  slate400: rgb(148, 163, 184),
  slate500: rgb(100, 116, 139),
  slate700: rgb(51, 65, 85),
  white: rgb(255, 255, 255),
  ok: rgb(16, 185, 129),
  okBg: rgb(209, 250, 229),
  warn: rgb(245, 158, 11),
  warnBg: rgb(254, 243, 199),
  warnTxt: rgb(146, 64, 14),
  danger: rgb(239, 68, 68),
  dangerBg: rgb(254, 226, 226),
  darkBg: rgb(2, 6, 23),
  darkCard: rgb(15, 23, 42),
  darkBr: rgb(30, 41, 59),
  darkMuted: rgb(148, 163, 184)
};

function ds(col, radius, spread) {
  return {
    type: 'DROP_SHADOW',
    color: col,
    offset: { x: 0, y: 8 },
    radius,
    spread: spread ?? 0,
    visible: true,
    blendMode: 'NORMAL'
  };
}

function txt(parent, s, px, wt, color, xx, yy, ww) {
  const t = figma.createText();
  t.fontName = { family: 'Inter', style: wt };
  t.fontSize = px;
  t.characters = s;
  t.fills = [{ type: 'SOLID', color }];
  t.x = xx;
  t.y = yy;
  if (ww) {
    t.resize(ww, px + 6);
    t.textAutoResize = 'HEIGHT';
  }
  parent.appendChild(t);
  return t;
}

function rect(parent, fill, stroke, sw, w, h, rad, xx, yy) {
  const r = figma.createRectangle();
  r.resize(w, h);
  r.x = xx;
  r.y = yy;
  r.cornerRadius = rad || 0;
  r.fills = fill ? [{ type: 'SOLID', color: fill }] : [];
  if (stroke) {
    r.strokes = [{ type: 'SOLID', color: stroke }];
    r.strokeWeight = sw || 1;
  }
  parent.appendChild(r);
  return r;
}

function btn(parent, name, label, xx, yy, w, prim) {
  const fb = figma.createFrame();
  fb.name = name;
  fb.resize(w, 42);
  fb.x = xx;
  fb.y = yy;
  fb.cornerRadius = 8;
  fb.layoutMode = 'HORIZONTAL';
  fb.primaryAxisAlignItems = 'CENTER';
  fb.counterAxisAlignItems = 'CENTER';
  if (prim) {
    fb.fills = [{ type: 'SOLID', color: C.primary }];
    fb.effects = [ds({ r: C.primary.r, g: C.primary.g, b: C.primary.b, a: 0.34 }, 16, -2)];
  } else {
    fb.fills = [{ type: 'SOLID', color: C.white }];
    fb.strokes = [{ type: 'SOLID', color: C.slate200 }];
    fb.strokeWeight = 1.5;
  }
  const tl = figma.createText();
  tl.fontName = { family: 'Inter', style: 'Semi Bold' };
  tl.fontSize = 13;
  tl.characters = label;
  tl.fills = [{ type: 'SOLID', color: prim ? C.white : C.slate700 }];
  fb.appendChild(tl);
  parent.appendChild(fb);
  return fb;
}

function hit(parent, name, w, h, xx, yy) {
  const r = figma.createRectangle();
  r.name = name;
  r.resize(w, h);
  r.x = xx;
  r.y = yy;
  r.fills = [{ type: 'SOLID', color: { r: C.primary.r, g: C.primary.g, b: C.primary.b, a: 0.06 } }];
  parent.appendChild(r);
  return r;
}

let page = figma.root.children.find((p) => p.name === 'Prototype — Hi-Fi Desktop');
if (!page) {
  page = figma.createPage();
  page.name = 'Prototype — Hi-Fi Desktop';
}
await figma.setCurrentPageAsync(page);
for (const n of [...page.children]) n.remove();
page.backgrounds = [{ type: 'SOLID', color: C.slate100 }];

return { chunkDone: 1 };
