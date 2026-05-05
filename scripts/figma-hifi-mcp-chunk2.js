const W = 1440;
const H = 900;
const pad = 56;
let xCursor = 40;
const colGap = 64;

function addScreen(title) {
  const f = figma.createFrame();
  f.name = title;
  f.resize(W, H);
  f.x = xCursor;
  f.y = 40;
  f.cornerRadius = 12;
  f.clipsContent = true;
  page.appendChild(f);
  xCursor += W + colGap;
  return f;
}

const scrHome = addScreen('SCR — Marketing / Home');
scrHome.fills = [{ type: 'SOLID', color: C.slate50 }];
scrHome.strokes = [{ type: 'SOLID', color: C.slate200 }];
const scrSign = addScreen('SCR — Auth / Enterprise Signup');
scrSign.fills = [{ type: 'SOLID', color: C.slate50 }];
scrSign.strokes = [{ type: 'SOLID', color: C.slate200 }];
const scrVer = addScreen('SCR — Auth / Verification');
scrVer.fills = [{ type: 'SOLID', color: C.slate50 }];
scrVer.strokes = [{ type: 'SOLID', color: C.slate200 }];
const scrEnt = addScreen('SCR — Enterprise / Dashboard');
scrEnt.fills = [{ type: 'SOLID', color: C.slate50 }];
scrEnt.strokes = [{ type: 'SOLID', color: C.slate200 }];
const scrAdm = addScreen('SCR — Super Admin / Dashboard');
scrAdm.fills = [{ type: 'SOLID', color: C.darkBg }];
scrAdm.strokes = [{ type: 'SOLID', color: C.darkBr }];
return { chunkDone: 2 };
