rect(scrHome, C.primary, undefined, 0, 34, 34, 17, vx + vis.width - 66, vy + 294);

// --- SIGNUP (mirrors enterprise-signup.html) ---
rect(scrSign, C.white, C.slate200, 1, W, 64, 0, 0, 0);
txt(scrSign, 'Vizehelp Enterprise', 16, 'Bold', C.navy, pad, 20);
txt(scrSign, '← Back to Home', 12, 'Semi Bold', C.slate500, W - 190, 24);
hit(scrSign, 'proto-sign-back', 220, 40, W - 220, 10);
const stepY = 96;
const labs = ['Business', 'Services', 'Ops', 'Plan', 'Docs', 'Admin', 'Review'];
let sx = pad;
for (let i = 0; i < 7; i++) {
  const e = figma.createEllipse();
  e.resize(34, 34);
  e.x = sx;
  e.y = stepY;
  if (i === 0) e.fills = [{ type: 'SOLID', color: C.primary }];
  else {
    e.strokes = [{ type: 'SOLID', color: C.slate200 }];
    e.strokeWeight = 2;
    e.fills = [{ type: 'SOLID', color: C.white }];
  }
  scrSign.appendChild(e);
  txt(scrSign, String(i + 1), 12, 'Semi Bold', i === 0 ? C.white : C.slate400, sx + 11, stepY + 9);
  txt(scrSign, labs[i], 10, 'Semi Bold', i === 0 ? C.primary : C.slate400, sx - 4, stepY + 38);
  sx += 104;
}
const lw = Math.min(760, W - pad * 2);
const card = rect(scrSign, C.white, C.slate200, 1, lw, 640, 16, Math.floor((W - lw) / 2), stepY + 72);
card.effects = [ds({ r: 0, g: 0, b: 0, a: 0.06 }, 30, -8)];
txt(scrSign, 'Step 1: Business profile', 22, 'Bold', C.navy, card.x + 32, card.y + 28, lw - 64);
txt(scrSign, 'Provide KYB-aligned business details — same progression as enterprise-signup.html (7 steps).', 14, 'Regular', C.slate500, card.x + 32, card.y + 62, lw - 64);
const half = Math.floor((lw - 96) / 2);
const cL = card.x + 32;
const cR = card.x + 32 + half + 32;
const r1 = card.y + 120;
txt(scrSign, 'Company name *', 12, 'Semi Bold', C.navy, cL, r1);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cL, r1 + 18);
txt(scrSign, 'Legal business name *', 12, 'Semi Bold', C.navy, cR, r1);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cR, r1 + 18);
const r2 = card.y + 210;
txt(scrSign, 'Business type *', 12, 'Semi Bold', C.navy, cL, r2);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cL, r2 + 18);
txt(scrSign, 'Industry *', 12, 'Semi Bold', C.navy, cR, r2);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cR, r2 + 18);
const r3 = card.y + 300;
txt(scrSign, 'Website URL', 12, 'Semi Bold', C.navy, cL, r3);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cL, r3 + 18);
txt(scrSign, 'Registration # *', 12, 'Semi Bold', C.navy, cR, r3);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cR, r3 + 18);
const r4 = card.y + 390;
txt(scrSign, 'Tax ID / GST / EIN *', 12, 'Semi Bold', C.navy, cL, r4);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cL, r4 + 18);
txt(scrSign, '# Locations *', 12, 'Semi Bold', C.navy, cR, r4);
rect(scrSign, C.white, C.slate200, 1, half, 44, 8, cR, r4 + 18);
txt(scrSign, 'Operating area / city *', 12, 'Semi Bold', C.navy, card.x + 32, card.y + 480);
rect(scrSign, C.white, C.slate200, 1, lw - 64, 44, 8, card.x + 32, card.y + 498);
btn(scrSign, 'proto-sign-exit', 'Exit', card.x + 32, card.y + 564, 120, false);
btn(scrSign, 'proto-sign-continue', 'Save & continue', card.x + lw - 32 - 220, card.y + 564, 220, true);
return { chunkDone: 4 };
