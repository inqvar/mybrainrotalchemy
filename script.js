"use strict";

/* =========================================================================
   GAME DATA
   ========================================================================= */
const ELEMENTS = {
  // base / starter elements
  raw_milk:   { name:"Raw Milk",   emoji:"🥛", base:true },
  healthy:    { name:"Healthy",    emoji:"🥗", base:true },
  cp:         { name:"CP",         emoji:"🪙", base:true },
  cash25:     { name:"25$",        emoji:"💵", base:true },
  ball:       { name:"Ball",       emoji:"🏀", base:true },
  stacy:      { name:"Stacy",      emoji:"💁‍♀️", base:true },

  // tier 1
  holy_height:    { name:"Holy Height",       emoji:"📈" },
  hullo:          { name:"Hullo",             emoji:"👋" },
  holy_stacy:     { name:"Holy Stacy w/ ball Knowledge", emoji:"✨" },
  gym_milk:       { name:"Gym Milk",          emoji:"💪" },
  sigma_grindset: { name:"Sigma Grindset",    emoji:"🗿" },
  sugar_stacy:    { name:"Sugar Stacy",       emoji:"🍬" },
  clout_stacy:    { name:"Clout Stacy",       emoji:"📸" },
  milk_dunk:      { name:"Milk Dunk",         emoji:"🥤" },
  grindset_cash:  { name:"Grindset Cash",     emoji:"📊" },
  mewing_stacy:   { name:"Mewing Stacy",      emoji:"😤" },
  sigma_ball:     { name:"Sigma Ball",        emoji:"🔮" },
  baller:         { name:"Baller",            emoji:"🤑" },

  // tier 2
  skibidi_sigma:  { name:"Skibidi Sigma",     emoji:"🚽" },
  rizz_god:       { name:"Rizz God",          emoji:"😎" },
  npc_energy:     { name:"NPC Energy",        emoji:"🤖" },
  ohio_gains:     { name:"Ohio Gains",        emoji:"🌽" },
  sussy_baka:     { name:"Sussy Baka",        emoji:"📮" },
  fanum_tax:      { name:"Fanum Tax",         emoji:"🍔" },
  aura_farmer:    { name:"Aura Farmer",       emoji:"🌾" },
  griddy_king:    { name:"Griddy King",       emoji:"👑" },

  // tier 3
  gigachad_skibidi: { name:"Gigachad Skibidi", emoji:"🏆" },
  max_aura:         { name:"Max Aura 9000",    emoji:"🌟" },

  // more base elements
  rank:       { name:"Rank",       emoji:"🏅", base:true },
  over:       { name:"Over",       emoji:"🚀", base:true },
  genetics:   { name:"Genetics",   emoji:"🧬", base:true },
  cookie:     { name:"Cookie",     emoji:"🍪", base:true },
  king:       { name:"King",       emoji:"🤴", base:true },
  tall:       { name:"Tall",       emoji:"📏", base:true },
  muscular:   { name:"Muscular",   emoji:"🏋️", base:true },
  rich:       { name:"Rich",       emoji:"💰", base:true },

  // more tier 1
  milk_money:   { name:"Milk Money",   emoji:"🫙" },
  milky_stacy:  { name:"Milky Stacy",  emoji:"💅" },
  blackpill:    { name:"Blackpill",    emoji:"💊" },
  cookieking:   { name:"Cookieking",   emoji:"🫅" },

  // more tier 2 / crossovers
  nd:               { name:"ND",              emoji:"🌀" },
  doomer:           { name:"Doomer",          emoji:"😔" },
  rich_aura:        { name:"Rich Aura",       emoji:"💸" },
  stacy_supremacy:  { name:"Stacy Supremacy", emoji:"👑" },

  // 3-ingredient result
  chopped_ahh_foid: { name:"Chopped Ahh Foid", emoji:"🔪" },
  tall_and_muscular: { name:"Tall and Muscular", emoji:"🦍" },

  // new base elements
  democracy: { name:"Democracy", emoji:"🗳️", base:true },
  sleep:     { name:"Sleep",     emoji:"😴", base:true },
  larp:      { name:"Larp",      emoji:"🎭", base:true },
  evil:      { name:"Evil",      emoji:"😈", base:true },
  man:       { name:"Man",       emoji:"🧍", base:true },
  israel:    { name:"Israel",    emoji:"🇮🇱", base:true },
  europe:    { name:"Europe",    emoji:"🌍", base:true },

  // new crafted elements
  sinister:            { name:"Sinister",             emoji:"🕴️" },
  "333_iq":             { name:"333 IQ",               emoji:"🧠" },
  computer:             { name:"Computer",             emoji:"💻" },
  sleep_server_closed:  { name:"Sleep Server Closed",  emoji:"📴" },
  big_yahu:             { name:"Big Yahu",             emoji:"🎩" },
  eu:                   { name:"EU",                   emoji:"🇪🇺" },
  chat_surveillance:    { name:"Chat Surveillance",    emoji:"👁️" },

  // Clavicular / ASU Frat Leader chain — new bases
  bone:   { name:"Bone",  emoji:"🦴", base:true },
  pc:     { name:"PC",    emoji:"🖥️", base:true },
  frame:  { name:"Frame", emoji:"🖼️", base:true },

  // Clavicular / ASU Frat Leader chain — crafted
  clavicular:          { name:"Clavicular",          emoji:"🩻" },
  clav_created_org:     { name:"Clav Created .org",   emoji:"🌐" },
  asu_frat_leader:      { name:"ASU Frat Leader",     emoji:"🍺" },
  holy_framemog:        { name:"Holy Framemog",       emoji:"🪞" },

  // brainrot meme figures — new bases
  sneaker:   { name:"Sneaker",   emoji:"👟", base:true },
  shark:     { name:"Shark",     emoji:"🦈", base:true },
  wood:      { name:"Wood",      emoji:"🪵", base:true },
  bat:       { name:"Bat",       emoji:"🏏", base:true },
  monkey:    { name:"Monkey",    emoji:"🐒", base:true },
  banana:    { name:"Banana",    emoji:"🍌", base:true },
  crocodile: { name:"Crocodile", emoji:"🐊", base:true },
  plane:     { name:"Plane",     emoji:"✈️", base:true },
  elephant:  { name:"Elephant",  emoji:"🐘", base:true },
  palm_tree: { name:"Palm Tree", emoji:"🌴", base:true },

  // brainrot meme figures — crafted
  tralalero_tralala:     { name:"Tralalero Tralala",     emoji:"🦈" },
  tung_tung_tung_sahur:   { name:"Tung Tung Tung Sahur",  emoji:"🥁" },
  chimpanzini_bananini:   { name:"Chimpanzini Bananini",  emoji:"🐵" },
  bombardiro_crocodilo:   { name:"Bombardiro Crocodilo",  emoji:"💣" },
  lirili_larila:          { name:"Lirili Larila",         emoji:"🏝️" },
};

// [ingredientA, ingredientB, result]
const RECIPES = [
  ["raw_milk","healthy","holy_height"],
  ["cp","cash25","hullo"],
  ["ball","stacy","holy_stacy"],

  ["raw_milk","cp","gym_milk"],
  ["healthy","ball","sigma_grindset"],
  ["cash25","stacy","sugar_stacy"],
  ["cp","stacy","clout_stacy"],
  ["raw_milk","ball","milk_dunk"],
  ["healthy","cash25","grindset_cash"],
  ["healthy","stacy","mewing_stacy"],
  ["cp","ball","sigma_ball"],
  ["cash25","ball","baller"],

  ["holy_height","sigma_grindset","skibidi_sigma"],
  ["hullo","sugar_stacy","rizz_god"],
  ["holy_stacy","baller","npc_energy"],
  ["gym_milk","grindset_cash","ohio_gains"],
  ["clout_stacy","rizz_god","sussy_baka"],
  ["milk_dunk","sigma_ball","fanum_tax"],
  ["mewing_stacy","skibidi_sigma","aura_farmer"],
  ["ohio_gains","fanum_tax","griddy_king"],

  ["skibidi_sigma","rizz_god","gigachad_skibidi"],
  ["aura_farmer","griddy_king","max_aura"],

  ["raw_milk","cash25","milk_money"],
  ["raw_milk","stacy","milky_stacy"],
  ["over","genetics","blackpill"],
  ["blackpill","rank","nd"],
  ["cookie","king","cookieking"],
  ["blackpill","npc_energy","doomer"],
  ["milk_money","baller","rich_aura"],
  ["milky_stacy","rizz_god","stacy_supremacy"],
  ["tall","muscular","tall_and_muscular"],
  ["tall_and_muscular","rich","chopped_ahh_foid"],

  ["larp","evil","sinister"],
  ["sinister","larp","333_iq"],
  ["333_iq","rich","computer"],
  ["sleep","computer","sleep_server_closed"],
  ["man","israel","big_yahu"],
  ["big_yahu","europe","eu"],
  ["eu","democracy","chat_surveillance"],

  ["bone","blackpill","clavicular"],
  ["clavicular","pc","clav_created_org"],
  ["man","frame","asu_frat_leader"],
  ["clavicular","asu_frat_leader","holy_framemog"],

  ["sneaker","shark","tralalero_tralala"],
  ["wood","bat","tung_tung_tung_sahur"],
  ["monkey","banana","chimpanzini_bananini"],
  ["crocodile","plane","bombardiro_crocodilo"],
  ["elephant","palm_tree","lirili_larila"],
];

const BASE_IDS = Object.keys(ELEMENTS).filter(id => ELEMENTS[id].base);
const TOTAL_ELEMENTS = Object.keys(ELEMENTS).length;

// pairKey -> result   AND   result -> [{have, get}, ...] for extraction
const comboMap = {};
const extractMap = {};
RECIPES.forEach(([a,b,r])=>{
  const key = [a,b].sort().join("|");
  comboMap[key] = r;
  (extractMap[r] = extractMap[r] || []).push({have:a, get:b});
  extractMap[r].push({have:b, get:a});
});


/* =========================================================================
   SOUND EFFECTS
   Generated with the Web Audio API — no audio files, no music, just short
   sound effects for feedback (combine, discover, fail, delete, achievement).
   ========================================================================= */
let audioCtx = null;
function getAudioCtx(){
  if(!audioCtx){
    const AC = window.AudioContext || window.webkitAudioContext;
    if(AC) audioCtx = new AC();
  }
  if(audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playTone(freq, startTime, duration, type, peakGain){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(peakGain || 0.15, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
}

function playCombineSound(){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const t = ctx.currentTime;
  playTone(420, t, 0.09, "triangle", 0.14);
  playTone(640, t + 0.05, 0.12, "triangle", 0.14);
}

function playDiscoverySound(){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const t = ctx.currentTime;
  playTone(520, t, 0.11, "square", 0.12);
  playTone(660, t + 0.09, 0.11, "square", 0.12);
  playTone(880, t + 0.18, 0.22, "square", 0.14);
}

function playDeleteSound(){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const t = ctx.currentTime;
  playTone(500, t, 0.12, "sine", 0.1);
  playTone(220, t + 0.04, 0.14, "sine", 0.08);
}

function playAchievementSound(){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const t = ctx.currentTime;
  [520, 660, 780, 1040].forEach((freq, i)=>{
    playTone(freq, t + i*0.09, 0.2, "square", 0.13);
  });
}

function playUIClickSound(){
  const ctx = getAudioCtx();
  if(!ctx) return;
  const t = ctx.currentTime;
  playTone(760, t, 0.045, "sine", 0.045);
}


/* =========================================================================
   BACKGROUND MUSIC
   Plays a looping track quietly in the background. The volume slider and
   track picker (☰) are always visible. Redeeming the "strawberry" code adds
   a second, secret track (niche_bg_music.mp3) to the picker — it's simply
   invisible in the list until unlocked. Browsers block autoplay-with-sound
   until the user has interacted with the page at least once, so we try to
   play immediately and, if that's blocked, start on the first click/keydown
   anywhere.
   ========================================================================= */
const MUSIC_VOLUME_KEY = "brainrotAlchemyMusicVolume";
const MUSIC_TRACK_KEY = "brainrotAlchemyMusicTrack";
const UNLOCKED_TRACKS_KEY = "brainrotAlchemyUnlockedMusicTracks";

const MUSIC_TRACKS = [
  { id:"default", name:"Default", file:"bg_music.mp3", emoji:"🎵", secret:false },
  { id:"niche",   name:"DJ Niche Mix", file:"niche_bg_music.mp3", emoji:"🍓", secret:true },
];

const bgMusic = document.getElementById("bgMusic");
const musicVolumeSlider = document.getElementById("musicVolumeSlider");
const musicTracksBtn = document.getElementById("musicTracksBtn");
const tracksModal = document.getElementById("tracks-modal");
const tracksList = document.getElementById("tracks-list");

let musicVolume = 35;
let selectedTrackId = "default";
let unlockedTracks = [];

function loadMusicState(){
  try{
    const savedVolume = parseInt(localStorage.getItem(MUSIC_VOLUME_KEY), 10);
    musicVolume = Number.isFinite(savedVolume) ? savedVolume : 35;
    const savedUnlocked = JSON.parse(localStorage.getItem(UNLOCKED_TRACKS_KEY) || "[]");
    unlockedTracks = Array.isArray(savedUnlocked) ? savedUnlocked : [];
    const savedTrack = localStorage.getItem(MUSIC_TRACK_KEY) || "default";
    const track = MUSIC_TRACKS.find(t => t.id === savedTrack);
    selectedTrackId = (track && (!track.secret || unlockedTracks.includes(track.id))) ? savedTrack : "default";
  }catch(e){
    musicVolume = 35; unlockedTracks = []; selectedTrackId = "default";
  }

  if(bgMusic){
    const track = MUSIC_TRACKS.find(t => t.id === selectedTrackId) || MUSIC_TRACKS[0];
    bgMusic.src = track.file;
    bgMusic.volume = musicVolume / 100;
  }
  if(musicVolumeSlider) musicVolumeSlider.value = musicVolume;
}

function tryStartMusic(){
  if(!bgMusic) return;
  getAudioCtx(); // always retries resume() here, since resume() needs a real user gesture
  bgMusic.volume = musicVolume / 100;
  const p = bgMusic.play();
  if(p && p.catch){
    p.catch(()=>{ /* blocked until a user gesture happens — kickoff listener retries */ });
  }
  connectVisualizer();
}

function setMusicTrack(trackId){
  const track = MUSIC_TRACKS.find(t => t.id === trackId);
  if(!track) return;
  if(track.secret && !unlockedTracks.includes(track.id)) return;
  selectedTrackId = trackId;
  try{ localStorage.setItem(MUSIC_TRACK_KEY, trackId); }catch(e){}
  if(bgMusic){
    bgMusic.src = track.file;
    bgMusic.load();
    tryStartMusic();
  }
}

function initMusic(){
  if(!bgMusic) return;
  buildVisualizerBars();
  loadMusicState();
  tryStartMusic();
  // browsers block autoplay-with-sound until the first user interaction
  const kickoff = () => { tryStartMusic(); };
  document.addEventListener("pointerdown", kickoff, { once:true });
  document.addEventListener("keydown", kickoff, { once:true });
}

if(musicVolumeSlider){
  musicVolumeSlider.addEventListener("input", ()=>{
    musicVolume = parseInt(musicVolumeSlider.value, 10);
    try{ localStorage.setItem(MUSIC_VOLUME_KEY, String(musicVolume)); }catch(e){}
    if(bgMusic) bgMusic.volume = musicVolume / 100;
    tryStartMusic();
  });
}

if(musicTracksBtn){
  musicTracksBtn.addEventListener("click", ()=>{
    playUIClickSound();
    renderTracksList();
    tracksModal.classList.add("open");
  });
}
const closeTracksBtn = document.getElementById("close-tracks");
if(closeTracksBtn) closeTracksBtn.addEventListener("click", ()=> tracksModal.classList.remove("open"));
if(tracksModal){
  tracksModal.addEventListener("click", (e)=>{ if(e.target === tracksModal) tracksModal.classList.remove("open"); });
}

function renderTracksList(){
  if(!tracksList) return;
  tracksList.innerHTML = "";
  MUSIC_TRACKS.forEach(t=>{
    if(t.secret && !unlockedTracks.includes(t.id)) return;
    const row = document.createElement("div");
    row.className = "track-row" + (selectedTrackId === t.id ? " active" : "");
    row.innerHTML = `
      <div class="track-emoji">${t.emoji}</div>
      <div class="track-name">${t.name}</div>
      <div class="track-check">${selectedTrackId === t.id ? "✅" : ""}</div>
    `;
    row.addEventListener("click", ()=>{
      playUIClickSound();
      setMusicTrack(t.id);
      renderTracksList();
    });
    tracksList.appendChild(row);
  });
}


/* =========================================================================
   MUSIC VISUALIZER
   A small AnalyserNode-driven bar visualizer that sits in the header. Bars
   only grow upward from a flat baseline; color follows the active theme
   automatically via the --magenta CSS variable.
   ========================================================================= */
const VIZ_BAR_COUNT = 24;
const musicVisualizerEl = document.getElementById("musicVisualizer");
let vizBars = [];
let vizAnalyser = null;
let vizDataArray = null;
let vizConnected = false;
let vizAnimHandle = null;

function buildVisualizerBars(){
  if(!musicVisualizerEl || vizBars.length) return;
  for(let i=0;i<VIZ_BAR_COUNT;i++){
    const bar = document.createElement("div");
    bar.className = "viz-bar";
    musicVisualizerEl.appendChild(bar);
    vizBars.push(bar);
  }
}

function connectVisualizer(){
  if(vizConnected || !bgMusic) return;
  // file:// treats every local file as its own origin, so createMediaElementSource
  // would silently mute the audio. Skip the visualizer there — music still plays
  // normally through the plain <audio> element. Works fully once hosted (http/https).
  if(location.protocol === "file:"){
    vizConnected = true;
    return;
  }
  const ctx = getAudioCtx();
  if(!ctx) return;
  try{
    const source = ctx.createMediaElementSource(bgMusic);
    const analyser = ctx.createAnalyser();
    source.connect(analyser);
    analyser.connect(ctx.destination); // restore the audio path to speakers first
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = 0.75;
    vizAnalyser = analyser;
    vizDataArray = new Uint8Array(analyser.frequencyBinCount);
    vizConnected = true;
    startVizLoop();
  }catch(e){
    vizConnected = true; // don't keep retrying and risk breaking the audio graph further
    console.warn("Visualizer couldn't attach:", e);
  }
}

function startVizLoop(){
  if(vizAnimHandle) return;
  function frame(){
    if(vizAnalyser && vizDataArray && vizBars.length){
      vizAnalyser.getByteFrequencyData(vizDataArray);
      const step = Math.max(1, Math.floor(vizDataArray.length / vizBars.length));
      vizBars.forEach((bar, i)=>{
        const v = vizDataArray[i * step] || 0;
        const pct = Math.max(6, Math.min(100, (v / 255) * 100));
        bar.style.height = pct + "%";
      });
    }
    vizAnimHandle = requestAnimationFrame(frame);
  }
  vizAnimHandle = requestAnimationFrame(frame);
}


/* =========================================================================
   "DATABASE" LAYER
   Simulates users.json using the browser's localStorage, but always reads
   and writes the exact same JSON shape you'd find in users.json:
   { "users": { "<username>": { "discovered": [...], "discoveryOrder": [...], "createdAt": "..." } } }
   ========================================================================= */
const DB_STORAGE_KEY = "brainrotAlchemyDB";
const SESSION_STORAGE_KEY = "brainrotAlchemyCurrentUser";

function loadDB(){
  try{
    const raw = localStorage.getItem(DB_STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(parsed && typeof parsed.users === "object") return parsed;
    }
  }catch(e){ console.warn("Could not read local database, starting fresh.", e); }
  return { users:{} };
}

function saveDB(db){
  try{
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
  }catch(e){ console.error("Could not save to local database.", e); }
}

let DB = loadDB();
let currentUsername = null;

function normalizeUsername(raw){
  return raw.trim().slice(0, 20);
}

function registerOrLogin(rawUsername){
  const username = normalizeUsername(rawUsername);
  if(!username){
    return { ok:false, error:"Please enter a username." };
  }
  if(!/^[a-zA-Z0-9_\-\s]{2,20}$/.test(username)){
    return { ok:false, error:"Use 2-20 letters, numbers, spaces, - or _." };
  }
  const key = username.toLowerCase();

  if(!DB.users[key]){
    DB.users[key] = {
      displayName: username,
      discovered: [...BASE_IDS],
      discoveryOrder: [],
      achievements: [],
      createdAt: new Date().toISOString(),
    };
    saveDB(DB);
  }

  currentUsername = key;
  try{ localStorage.setItem(SESSION_STORAGE_KEY, key); }catch(e){}
  return { ok:true, username: DB.users[key].displayName };
}

function logout(){
  currentUsername = null;
  try{ localStorage.removeItem(SESSION_STORAGE_KEY); }catch(e){}
}

function getCurrentUserRecord(){
  if(!currentUsername) return null;
  return DB.users[currentUsername] || null;
}

function persistCurrentUser(discoveredSet, discoveryOrderArr){
  if(!currentUsername) return;
  DB.users[currentUsername].discovered = [...discoveredSet];
  DB.users[currentUsername].discoveryOrder = discoveryOrderArr;
  DB.users[currentUsername].achievements = [...earnedAchievements];
  saveDB(DB);
}

function tryResumeSession(){
  try{
    const saved = localStorage.getItem(SESSION_STORAGE_KEY);
    if(saved && DB.users[saved]){
      currentUsername = saved;
      return true;
    }
  }catch(e){}
  return false;
}

function exportDatabaseFile(){
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type:"application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "users.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importDatabaseFile(file, onDone){
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(reader.result);
      if(!parsed || typeof parsed.users !== "object") throw new Error("Invalid format");
      DB = parsed;
      saveDB(DB);
      onDone(true);
    }catch(e){
      console.error("Import failed:", e);
      onDone(false);
    }
  };
  reader.onerror = () => onDone(false);
  reader.readAsText(file);
}


/* =========================================================================
   DOM REFERENCES
   ========================================================================= */
const $ = sel => document.querySelector(sel);

const authScreen = $("#auth-screen");
const gameScreen = $("#game-screen");
const usernameInput = $("#usernameInput");
const enterBtn = $("#enterBtn");
const authError = $("#authError");

const currentUserLabel = $("#currentUserLabel");
const exportBtn = $("#exportBtn");
const importFile = $("#importFile");
const resetBtn = $("#resetBtn");
const logoutBtn = $("#logoutBtn");

const workspace = $("#workspace");
const workspaceWrap = $("#workspace-wrap");
const trashZone = $("#trash-zone");
const inventoryEl = $("#inventory");
const emptyHint = $("#empty-hint");
const countEl = $("#count");
const searchEl = $("#search");

$("#total").textContent = TOTAL_ELEMENTS;


/* =========================================================================
   IN-MEMORY GAME STATE (for the logged-in user)
   ========================================================================= */
let discovered = new Set(BASE_IDS);
let discoveryOrder = [];
let earnedAchievements = new Set();
let mode = "plus";
let zCounter = 10;
let uidCounter = 1;


/* =========================================================================
   AUTH SCREEN WIRING
   ========================================================================= */
function showAuthScreen(){
  authScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  usernameInput.value = "";
  authError.textContent = "";
  usernameInput.focus();
}

function showGameScreen(){
  authScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  const record = getCurrentUserRecord();
  currentUserLabel.textContent = record.displayName;

  discovered = new Set(record.discovered && record.discovered.length ? record.discovered : BASE_IDS);
  discoveryOrder = Array.isArray(record.discoveryOrder) ? [...record.discoveryOrder] : [];
  earnedAchievements = new Set(Array.isArray(record.achievements) ? record.achievements : []);

  workspace.querySelectorAll(".token").forEach(t => t.remove());
  emptyHint.style.display = "block";

  renderInventory();
  updateCount();
  checkAchievements();
}

function attemptLogin(){
  const result = registerOrLogin(usernameInput.value);
  if(!result.ok){
    authError.textContent = result.error;
    return;
  }
  showGameScreen();
}

enterBtn.addEventListener("click", attemptLogin);
usernameInput.addEventListener("keydown", (e)=>{ if(e.key === "Enter") attemptLogin(); });

logoutBtn.addEventListener("click", ()=>{
  logout();
  showAuthScreen();
});

exportBtn.addEventListener("click", exportDatabaseFile);

importFile.addEventListener("change", (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  importDatabaseFile(file, (success)=>{
    if(success){
      alert("Save file imported! Log in with a username from that file to load it.");
      logout();
      showAuthScreen();
    }else{
      alert("That file doesn't look like a valid users.json save.");
    }
    importFile.value = "";
  });
});

resetBtn.addEventListener("click", ()=>{
  if(!confirm("Reset this account's progress? This can't be undone.")) return;
  discovered = new Set(BASE_IDS);
  discoveryOrder = [];
  earnedAchievements = new Set();
  workspace.querySelectorAll(".token").forEach(t=>t.remove());
  emptyHint.style.display = "block";
  renderInventory();
  updateCount();
  persistCurrentUser(discovered, discoveryOrder);
});


/* =========================================================================
   INVENTORY RENDER
   ========================================================================= */
function renderInventory(){
  const filter = searchEl.value.trim().toLowerCase();
  inventoryEl.innerHTML = "";
  [...discovered]
    .sort((a,b)=> ELEMENTS[a].name.localeCompare(ELEMENTS[b].name))
    .forEach(id=>{
      const el = ELEMENTS[id];
      if(filter && !el.name.toLowerCase().includes(filter)) return;
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.dataset.id = id;
      chip.innerHTML = `<div class="emoji">${el.emoji}</div><div class="name">${el.name}</div>`;
      chip.addEventListener("pointerdown", onChipPointerDown);
      inventoryEl.appendChild(chip);
    });
}
searchEl.addEventListener("input", renderInventory);

function updateCount(){
  countEl.textContent = discovered.size;
}


/* =========================================================================
   MODE SWITCH
   ========================================================================= */
$("#modeSwitch").addEventListener("click", (e)=>{
  const opt = e.target.closest(".opt");
  if(!opt) return;
  mode = opt.dataset.mode;
  document.querySelectorAll(".mode-switch .opt").forEach(o=>o.classList.remove("active"));
  opt.classList.add("active");
  workspaceWrap.classList.toggle("mode-plus", mode==="plus");
  workspaceWrap.classList.toggle("mode-minus", mode==="minus");
});


/* =========================================================================
   DRAG: sidebar -> workspace (creates a new token)
   ========================================================================= */
let ghost = null;

function onChipPointerDown(e){
  e.preventDefault();
  const id = e.currentTarget.dataset.id;
  const el = ELEMENTS[id];
  ghost = document.createElement("div");
  ghost.className = "token";
  ghost.style.position = "fixed";
  ghost.style.zIndex = 9999;
  ghost.style.pointerEvents = "none";
  ghost.innerHTML = `<div class="emoji">${el.emoji}</div><div class="name">${el.name}</div>`;
  document.body.appendChild(ghost);
  moveGhost(e.clientX, e.clientY);

  function onMove(ev){ moveGhost(ev.clientX, ev.clientY); }
  function onUp(ev){
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    const wsRect = workspace.getBoundingClientRect();
    if(ev.clientX >= wsRect.left && ev.clientX <= wsRect.right && ev.clientY >= wsRect.top && ev.clientY <= wsRect.bottom){
      const x = ev.clientX - wsRect.left - 43;
      const y = ev.clientY - wsRect.top - 40;
      createToken(id, x, y, true);
    }
    ghost.remove();
    ghost = null;
  }
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", onUp);
}

function moveGhost(x,y){
  if(!ghost) return;
  ghost.style.left = (x-43)+"px";
  ghost.style.top = (y-40)+"px";
}


/* =========================================================================
   TOKENS IN WORKSPACE
   ========================================================================= */
function createToken(id, x, y, animate){
  emptyHint.style.display = "none";
  const wsRect = workspace.getBoundingClientRect();
  x = Math.max(4, Math.min(x, wsRect.width - 90));
  y = Math.max(4, Math.min(y, wsRect.height - 84));

  const el = ELEMENTS[id];
  const token = document.createElement("div");
  token.className = "token" + (animate ? " pop" : "");
  token.dataset.id = id;
  token.dataset.uid = uidCounter++;
  token.style.left = x+"px";
  token.style.top = y+"px";
  token.style.zIndex = ++zCounter;
  token.innerHTML = `<div class="emoji">${el.emoji}</div><div class="name">${el.name}</div>`;
  workspace.appendChild(token);
  token.addEventListener("pointerdown", onTokenPointerDown);
  return token;
}

function onTokenPointerDown(e){
  e.preventDefault();
  e.stopPropagation();
  const token = e.currentTarget;
  token.classList.add("dragging");
  token.style.zIndex = ++zCounter;
  const wsRect = workspace.getBoundingClientRect();
  const startRect = token.getBoundingClientRect();
  const offX = e.clientX - startRect.left;
  const offY = e.clientY - startRect.top;

  function onMove(ev){
    let x = ev.clientX - wsRect.left - offX;
    let y = ev.clientY - wsRect.top - offY;
    token.style.left = x+"px";
    token.style.top = y+"px";

    const tr = trashZone.getBoundingClientRect();
    const overTrashNow = ev.clientX>=tr.left && ev.clientX<=tr.right && ev.clientY>=tr.top && ev.clientY<=tr.bottom;
    trashZone.classList.toggle("drag-over", overTrashNow);
  }
  function onUp(ev){
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    token.classList.remove("dragging");
    trashZone.classList.remove("drag-over");

    // dropped on the trash icon -> delete just this token
    const tr = trashZone.getBoundingClientRect();
    const overTrash = ev.clientX>=tr.left && ev.clientX<=tr.right && ev.clientY>=tr.top && ev.clientY<=tr.bottom;
    if(overTrash){
      deleteTokenWithAnimation(token);
      return;
    }

    // dropped outside workspace -> delete (trash)
    if(ev.clientX < wsRect.left || ev.clientX > wsRect.right || ev.clientY < wsRect.top || ev.clientY > wsRect.bottom){
      token.remove();
      maybeShowHint();
      return;
    }

    const target = findOverlap(token);
    if(target){
      tryCombine(token, target);
    }
  }
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", onUp);
}

function deleteTokenWithAnimation(token){
  playDeleteSound();
  token.classList.add("deleting");
  setTimeout(()=>{ token.remove(); maybeShowHint(); }, 250);
}

function findOverlap(token){
  const a = token.getBoundingClientRect();
  const centerA = { x:a.left+a.width/2, y:a.top+a.height/2 };
  let best = null, bestDist = 9999;
  workspace.querySelectorAll(".token").forEach(other=>{
    if(other === token) return;
    const b = other.getBoundingClientRect();
    const centerB = { x:b.left+b.width/2, y:b.top+b.height/2 };
    const dist = Math.hypot(centerA.x-centerB.x, centerA.y-centerB.y);
    if(dist < 78 && dist < bestDist){ bestDist = dist; best = other; }
  });
  return best;
}

function tryCombine(tokenA, tokenB){
  const idA = tokenA.dataset.id;
  const idB = tokenB.dataset.id;

  let resultId = null;
  let newlyDiscovered = false;

  if(mode === "plus"){
    const key = [idA, idB].sort().join("|");
    resultId = comboMap[key] || null;
  } else {
    const optionsForA = extractMap[idA] || [];
    const match1 = optionsForA.find(o => o.have === idB);
    if(match1){ resultId = match1.get; }
    if(!resultId){
      const optionsForB = extractMap[idB] || [];
      const match2 = optionsForB.find(o => o.have === idA);
      if(match2){ resultId = match2.get; }
    }
  }

  if(!resultId){
    tokenA.classList.add("shake");
    tokenB.classList.add("shake");
    setTimeout(()=>{ tokenA.classList.remove("shake"); tokenB.classList.remove("shake"); }, 360);
    return;
  }

  const x = (parseFloat(tokenA.style.left) + parseFloat(tokenB.style.left)) / 2;
  const y = (parseFloat(tokenA.style.top) + parseFloat(tokenB.style.top)) / 2;

  if(!discovered.has(resultId)){
    discovered.add(resultId);
    discoveryOrder.push(resultId);
    newlyDiscovered = true;
  }

  tokenA.remove();
  tokenB.remove();
  const resultToken = createToken(resultId, x, y, true);

  if(newlyDiscovered){
    playDiscoverySound();
    spawnBadgeAndConfetti(resultToken);
    renderInventory();
    updateCount();
  } else {
    playCombineSound();
  }
  persistCurrentUser(discovered, discoveryOrder);
  checkAchievements();
}

function maybeShowHint(){
  if(workspace.querySelectorAll(".token").length === 0){
    emptyHint.style.display = "block";
  }
}

function spawnBadgeAndConfetti(token){
  const badge = document.createElement("div");
  badge.className = "new-badge display";
  badge.textContent = "NEW!";
  token.appendChild(badge);
  setTimeout(()=>{ badge.remove(); }, 1800);

  const colors = ["var(--magenta)","var(--lime)","var(--cyan)","var(--yellow)"];
  for(let i=0;i<10;i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.background = colors[i % colors.length];
    c.style.left = (40 + Math.random()*20-10) + "px";
    c.style.top = "6px";
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    c.style.animation = `confettiFall ${0.6+Math.random()*0.4}s ease forwards`;
    c.style.animationDelay = (Math.random()*0.1)+"s";
    token.appendChild(c);
    setTimeout(()=>c.remove(), 1200);
  }
}


/* =========================================================================
   LEXICON (Recipes tab + Index tab)
   ========================================================================= */
const bookModal = $("#book-modal");
const bookList = $("#book-list");
const indexList = $("#index-list");
const bookHint = $("#book-hint");

$("#book-btn").addEventListener("click", ()=>{
  playUIClickSound();
  renderBook();
  renderIndex();
  bookModal.classList.add("open");
});
$("#close-book").addEventListener("click", ()=> bookModal.classList.remove("open"));
bookModal.addEventListener("click", (e)=>{ if(e.target === bookModal) bookModal.classList.remove("open"); });

document.querySelectorAll("#book-card .tab-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const tab = btn.dataset.tab;
    document.querySelectorAll("#book-card .tab-btn").forEach(b => b.classList.toggle("active", b === btn));
    bookList.classList.toggle("hidden", tab !== "recipes");
    indexList.classList.toggle("hidden", tab !== "index");
    bookHint.classList.toggle("hidden", tab !== "recipes");
  });
});

function renderBook(){
  bookList.innerHTML = "";
  if(discoveryOrder.length === 0){
    bookList.innerHTML = `<div id="book-empty">Nothing discovered yet. Start mixing! 🧪</div>`;
    return;
  }
  discoveryOrder.forEach(resultId=>{
    const recipe = RECIPES.find(r => r[2] === resultId);
    if(!recipe) return;
    const [a,b,r] = recipe;
    const row = document.createElement("div");
    row.className = "recipe-row";
    row.innerHTML = `
      <span>${ELEMENTS[a].emoji} ${ELEMENTS[a].name}</span>
      <span class="plus">+</span>
      <span>${ELEMENTS[b].emoji} ${ELEMENTS[b].name}</span>
      <span class="eq">=</span>
      <span>${ELEMENTS[r].emoji} <b>${ELEMENTS[r].name}</b></span>
    `;
    bookList.appendChild(row);
  });
}

// Shows every element that exists in the game — greyed out if you don't
// have it yet. Doesn't reveal how to craft anything.
function renderIndex(){
  indexList.innerHTML = "";
  const allIds = Object.keys(ELEMENTS).sort((a,b)=> ELEMENTS[a].name.localeCompare(ELEMENTS[b].name));
  allIds.forEach(id=>{
    const el = ELEMENTS[id];
    const has = discovered.has(id);
    const item = document.createElement("div");
    item.className = "index-item" + (has ? "" : " locked");
    item.innerHTML = `<div class="emoji">${el.emoji}</div><div class="name">${el.name}</div>`;
    indexList.appendChild(item);
  });
}


/* =========================================================================
   ACHIEVEMENTS
   ========================================================================= */
const ACHIEVEMENTS = [
  {
    id: "completionist",
    emoji: "🏆",
    name: "Completionist",
    desc: `Discover all ${TOTAL_ELEMENTS} elements in the game.`,
    check: () => discovered.size >= TOTAL_ELEMENTS,
  },
];

const achievementsModal = $("#achievements-modal");
const achievementsList = $("#achievements-list");
const achievementsBtn = $("#achievements-btn");

achievementsBtn.addEventListener("click", ()=>{
  playUIClickSound();
  renderAchievements();
  achievementsModal.classList.add("open");
  achievementsBtn.classList.remove("has-new");
});
$("#close-achievements").addEventListener("click", ()=> achievementsModal.classList.remove("open"));
achievementsModal.addEventListener("click", (e)=>{ if(e.target === achievementsModal) achievementsModal.classList.remove("open"); });

function renderAchievements(){
  achievementsList.innerHTML = "";
  ACHIEVEMENTS.forEach(a=>{
    const unlocked = earnedAchievements.has(a.id);
    const row = document.createElement("div");
    row.className = "achievement-row " + (unlocked ? "unlocked" : "locked");
    row.innerHTML = `
      <div class="ach-emoji">${unlocked ? a.emoji : "🔒"}</div>
      <div class="ach-text">
        <div class="ach-name">${a.name}</div>
        <div class="ach-desc">${a.desc}</div>
      </div>
    `;
    achievementsList.appendChild(row);
  });
}

function checkAchievements(){
  let gotNew = false;
  ACHIEVEMENTS.forEach(a=>{
    if(!earnedAchievements.has(a.id) && a.check()){
      earnedAchievements.add(a.id);
      gotNew = true;
    }
  });
  if(gotNew){
    playAchievementSound();
    achievementsBtn.classList.add("has-new");
    persistCurrentUser(discovered, discoveryOrder);
  }
}


/* =========================================================================
   THEMES
   ========================================================================= */
const THEME_STORAGE_KEY = "brainrotAlchemyTheme";
const UNLOCKED_THEMES_KEY = "brainrotAlchemyUnlockedThemes";

const THEMES = [
  { id:"purple", name:"Purple",    swatch:"linear-gradient(135deg, #150a21, #ff2e9a)", secret:false },
  { id:"dark",   name:"Dark Grey", swatch:"linear-gradient(135deg, #17181b, #5ec8ff)", secret:false },
  { id:"white",  name:"White",     swatch:"linear-gradient(135deg, #ffffff, #e91e8c)", secret:false },
  { id:"mango",  name:"Mango",     swatch:"linear-gradient(135deg, #1f1004, #ff8a1e)", secret:true  },
];

let currentTheme = "purple";
let unlockedThemes = [];

function loadThemeState(){
  try{
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "purple";
    const savedUnlocked = JSON.parse(localStorage.getItem(UNLOCKED_THEMES_KEY) || "[]");
    unlockedThemes = Array.isArray(savedUnlocked) ? savedUnlocked : [];
    const theme = THEMES.find(t => t.id === savedTheme);
    const allowed = theme && (!theme.secret || unlockedThemes.includes(theme.id));
    applyTheme(allowed ? savedTheme : "purple");
  }catch(e){
    applyTheme("purple");
  }
}

function applyTheme(themeId){
  document.body.classList.remove("theme-dark", "theme-white", "theme-mango");
  if(themeId !== "purple") document.body.classList.add("theme-" + themeId);
  currentTheme = themeId;
  try{ localStorage.setItem(THEME_STORAGE_KEY, themeId); }catch(e){}
  toggleMangoRain(themeId === "mango");
}

const themeModal = $("#theme-modal");
const themeList = $("#theme-list");
const themeBtn = $("#theme-btn");

themeBtn.addEventListener("click", ()=>{
  playUIClickSound();
  renderThemeList();
  themeModal.classList.add("open");
});
$("#close-theme").addEventListener("click", ()=> themeModal.classList.remove("open"));
themeModal.addEventListener("click", (e)=>{ if(e.target === themeModal) themeModal.classList.remove("open"); });

function renderThemeList(){
  themeList.innerHTML = "";
  THEMES.forEach(t=>{
    if(t.secret && !unlockedThemes.includes(t.id)) return;
    const row = document.createElement("div");
    row.className = "theme-row" + (currentTheme === t.id ? " active" : "");
    row.innerHTML = `
      <div class="theme-swatch" style="background:${t.swatch}"></div>
      <div class="theme-name">${t.name}${t.secret ? " 🥭" : ""}</div>
      <div class="theme-check">${currentTheme === t.id ? "✅" : ""}</div>
    `;
    row.addEventListener("click", ()=>{
      playUIClickSound();
      applyTheme(t.id);
      renderThemeList();
    });
    themeList.appendChild(row);
  });
}


/* =========================================================================
   CODES (secret unlocks)
   ========================================================================= */
const codesModal = $("#codes-modal");
const codesBtn = $("#codes-btn");
const codeInput = $("#codeInput");
const redeemBtn = $("#redeemBtn");
const codesMessage = $("#codesMessage");

codesBtn.addEventListener("click", ()=>{
  playUIClickSound();
  codeInput.value = "";
  codesMessage.textContent = "";
  codesMessage.className = "codes-message";
  codesModal.classList.add("open");
  codeInput.focus();
});
$("#close-codes").addEventListener("click", ()=> codesModal.classList.remove("open"));
codesModal.addEventListener("click", (e)=>{ if(e.target === codesModal) codesModal.classList.remove("open"); });

function redeemCode(){
  const raw = codeInput.value.trim().toLowerCase();
  if(!raw){
    codesMessage.textContent = "Type a code first.";
    codesMessage.className = "codes-message error";
    return;
  }

  if(raw === "mango"){
    if(!unlockedThemes.includes("mango")){
      unlockedThemes.push("mango");
      try{ localStorage.setItem(UNLOCKED_THEMES_KEY, JSON.stringify(unlockedThemes)); }catch(e){}
    }
    playAchievementSound();
    applyTheme("mango");
    codesMessage.textContent = "🥭 Mango theme unlocked and applied!";
    codesMessage.className = "codes-message success";
  } else if(raw === "unlockall"){
    discovered = new Set(Object.keys(ELEMENTS));
    discoveryOrder = RECIPES.map(r => r[2]);
    ACHIEVEMENTS.forEach(a => earnedAchievements.add(a.id));
    renderInventory();
    updateCount();
    persistCurrentUser(discovered, discoveryOrder);
    playAchievementSound();
    codesMessage.textContent = "🔓 Everything unlocked — all elements and achievements!";
    codesMessage.className = "codes-message success";
  } else if(raw === "strawberry"){
    if(!unlockedTracks.includes("niche")){
      unlockedTracks.push("niche");
      try{ localStorage.setItem(UNLOCKED_TRACKS_KEY, JSON.stringify(unlockedTracks)); }catch(e){}
    }
    setMusicTrack("niche");
    playAchievementSound();
    codesMessage.textContent = "🍓 New track unlocked! Check the ☰ music picker.";
    codesMessage.className = "codes-message success";
  } else {
    codesMessage.textContent = "That code doesn't do anything... yet.";
    codesMessage.className = "codes-message error";
  }
  codeInput.value = "";
}

redeemBtn.addEventListener("click", redeemCode);
codeInput.addEventListener("keydown", (e)=>{ if(e.key === "Enter") redeemCode(); });


/* =========================================================================
   MANGO RAIN (mango theme background effect)
   ========================================================================= */
let mangoRainInterval = null;
let mangoRainContainer = null;

function ensureMangoContainer(){
  if(!mangoRainContainer){
    mangoRainContainer = document.createElement("div");
    mangoRainContainer.id = "mango-rain";
    document.body.appendChild(mangoRainContainer);
  }
}

function spawnMango(){
  if(!mangoRainContainer) return;
  const mango = document.createElement("span");
  mango.className = "mango-drop";
  mango.textContent = "🥭";
  const startSize = 30 + Math.random() * 34; // 30-64px
  const duration = 6 + Math.random() * 5;    // 6-11s
  const left = Math.random() * 96;           // vw
  mango.style.left = left + "vw";
  mango.style.fontSize = startSize + "px";
  mango.style.animationDuration = duration + "s";
  mangoRainContainer.appendChild(mango);
  setTimeout(()=> mango.remove(), duration * 1000 + 200);
}

function startMangoRain(){
  if(mangoRainInterval) return;
  ensureMangoContainer();
  mangoRainInterval = setInterval(spawnMango, 450);
  for(let i=0;i<6;i++) setTimeout(spawnMango, i * 150);
}

function stopMangoRain(){
  if(mangoRainInterval){ clearInterval(mangoRainInterval); mangoRainInterval = null; }
  if(mangoRainContainer){ mangoRainContainer.remove(); mangoRainContainer = null; }
}

function toggleMangoRain(on){
  if(on) startMangoRain(); else stopMangoRain();
}


/* =========================================================================
   TRASH: hold 2.5s to clear the whole board
   ========================================================================= */
let holdTimeout = null;

trashZone.addEventListener("pointerdown", (e)=>{
  e.preventDefault();
  trashZone.classList.add("holding");
  holdTimeout = setTimeout(clearBoard, 2500);
});

function cancelHold(){
  clearTimeout(holdTimeout);
  trashZone.classList.remove("holding");
}
trashZone.addEventListener("pointerup", cancelHold);
trashZone.addEventListener("pointerleave", cancelHold);
trashZone.addEventListener("pointercancel", cancelHold);

function clearBoard(){
  trashZone.classList.remove("holding");
  trashZone.classList.add("boom");
  setTimeout(()=> trashZone.classList.remove("boom"), 500);

  const tokens = [...workspace.querySelectorAll(".token")];
  tokens.forEach((t, i)=>{
    setTimeout(()=>{
      t.classList.add("deleting");
      setTimeout(()=> t.remove(), 250);
    }, i * 40);
  });
  setTimeout(maybeShowHint, tokens.length * 40 + 260);
}


/* =========================================================================
   INFO MODAL
   ========================================================================= */
const infoModal = $("#info-modal");
$("#info-btn").addEventListener("click", ()=>{ playUIClickSound(); infoModal.classList.add("open"); });
$("#close-info").addEventListener("click", ()=> infoModal.classList.remove("open"));
infoModal.addEventListener("click", (e)=>{ if(e.target === infoModal) infoModal.classList.remove("open"); });


/* =========================================================================
   INIT
   ========================================================================= */
(function init(){
  loadThemeState();
  initMusic();
  if(tryResumeSession()){
    showGameScreen();
  }else{
    showAuthScreen();
  }
})();