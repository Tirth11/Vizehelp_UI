
// --- VERIFICATION ---
const vcard = rect(scrVer, C.white, C.slate200, 1, 560, 360, 20, Math.floor((W - 560) / 2), Math.floor((H - 360) / 2));
vcard.effects = [ds({ r: 0, g: 0, b: 0, a: 0.08 }, 36, -10)];
const vIcon = figma.createEllipse();
vIcon.resize(72, 72);
vIcon.x = vcard.x + vcard.width / 2 - 36;
vIcon.y = vcard.y + 36;
vIcon.fills = [{ type: 'SOLID', color: C.warnBg }];
scrVer.appendChild(vIcon);
txt(scrVer, '…', 32, 'Bold', C.warn, vIcon.x + 26, vIcon.y + 18);
txt(scrVer, 'Enterprise account under review', 22, 'Bold', C.navy, vcard.x + 48, vcard.y + 132, vcard.width - 96);
txt(
  scrVer,
  'Status wall replaces dashboard until KYB completes. Email + in-app notices for pending, resubmission, approval, suspension.',
  14,
  'Regular',
  C.slate500,
  vcard.x + 48,
  vcard.y + 176,
  vcard.width - 96
);
btn(scrVer, 'proto-verify-dashboard', 'Open dashboard (approved demo)', vcard.x + 48, vcard.y + 258, 300, true);
btn(scrVer, 'proto-verify-support', 'Contact support', vcard.x + 360, vcard.y + 258, 170, false);

// --- ENTERPRISE DASHBOARD (mirrors enterprise-dashboard.html) ---
return { chunkDone: 5 };
