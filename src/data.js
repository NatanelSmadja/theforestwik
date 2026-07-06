export const categories = [
  { id: 'dashboard', name: 'Dashboard', icon: '🌲' },
  { id: 'adventure', name: 'Adventure Mode', icon: '🎮' },
  { id: 'smart', name: 'Smart Search', icon: '🧠' },
  { id: 'map', name: 'Map Hub', icon: '🗺️' },
  { id: 'crafts', name: 'Crafts', icon: '🧰' },
  { id: 'craft-tree', name: 'Craft Tree', icon: '🌳' },
  { id: 'inventory', name: 'Inventory', icon: '🎒' },
  { id: 'planner', name: 'Build Planner', icon: '🏗️' },
  { id: 'compare', name: 'Compare', icon: '⚖️' },
  { id: 'caves', name: 'מערות', icon: '🕳️' },
  { id: 'weapons', name: 'נשקים וציוד', icon: '🪓' },
  { id: 'enemies', name: 'אויבים', icon: '👹' },
  { id: 'items', name: 'פריטים', icon: '📦' },
  { id: 'tips', name: 'Tips', icon: '💡' },
  { id: 'timeline', name: 'Timeline', icon: '📅' },
  { id: 'walkthrough', name: 'איך מתקדמים', icon: '🏁' },
  { id: 'completion', name: '100% Tracker', icon: '🏆' },
  { id: 'profiles', name: 'Profiles', icon: '💾' },
  { id: 'notes', name: 'Notes', icon: '📝' },
  { id: 'settings', name: 'Themes', icon: '🎨' }
];

export const items = [
  { id:'sticks', name:'Sticks', icon:'🪵', type:'חומר בסיס', where:'ענפים קטנים, שיחים, יערות', uses:['Crafted Bow','Torch','Weak Spear','Fire Pit','Drying Rack'], tip:'תמיד תבנה Stick Holder ליד בסיס.' },
  { id:'cloth', name:'Cloth', icon:'🧻', type:'חומר בסיס', where:'מזוודות, מחנות, מערות', uses:['Molotov','Bow','Bone Armor','Torch'], tip:'בד הוא אחד הדברים הכי שימושיים במשחק.' },
  { id:'rope', name:'Rope', icon:'🪢', type:'חומר מתקדם', where:'מחנות קניבלים, סירות, מערות, crafting מבד', uses:['Bow','Crafted Axe','Bags','Waterskin'], tip:'חפש במחנות ובמערות, זה חוסך crafting מבד.' },
  { id:'feathers', name:'Feathers', icon:'🪶', type:'תחמושת', where:'ציפורים / Birdhouse', uses:['Arrows','Bone Arrows'], tip:'Birdhouse ליד בסיס = אספקת חצים קבועה.' },
  { id:'bones', name:'Bones', icon:'🦴', type:'שריון/חצים', where:'שריפת גופות, מערות', uses:['Bone Armor','Bone Arrows','Upgraded Spear'], tip:'אחרי קרב, להפוך גופות לעצמות בשביל שריון.' },
  { id:'booze', name:'Booze', icon:'🍾', type:'חומר נדיר', where:'מזוודות, מחנות, מערות', uses:['Molotov','Bomb'], tip:'שמור חלק ל־Molotovs למערות.' },
  { id:'coins', name:'Coins', icon:'🪙', type:'חומר', where:'מזוודות, מערות, חופים', uses:['Bomb'], tip:'נפוץ אבל קל לפספס כי הוא קטן.' },
  { id:'circuit-board', name:'Circuit Board', icon:'🔌', type:'חומר', where:'מחשבים, מזוודות, ציוד במפה', uses:['Bomb'], tip:'לשבור מחשבים באזורים מתאימים.' },
  { id:'wrist-watch', name:'Wrist Watch', icon:'⌚', type:'חומר', where:'מזוודות וגופות נוסעים', uses:['Bomb'], tip:'נאסף מהר אם פותחים הרבה מזוודות.' },
  { id:'tape', name:'Electrical Tape', icon:'🧷', type:'חומר', where:'מזוודות, מערות, מחנות', uses:['Bomb','Repair Tool'], tip:'שווה לאסוף תמיד.' },
  { id:'tree-sap', name:'Tree Sap', icon:'🟤', type:'שדרוג/תיקון', where:'כריתת עצים', uses:['Weapon Upgrades','Repair Tool','Sticky Bomb'], tip:'נאסף תוך כדי כריתת עצים.' },
  { id:'logs', name:'Logs', icon:'🪵', type:'בנייה', where:'כריתת עצים', uses:['Cabins','Walls','Platforms'], tip:'Log Sled חוסך המון זמן.' },
  { id:'rocks', name:'Rocks', icon:'🪨', type:'בנייה', where:'קרקע, חופים, יער', uses:['Fire Pit','Walls','Rock Holder'], tip:'Rock Bag משפר נשיאה.' },
  { id:'leaves', name:'Leaves', icon:'🍃', type:'בנייה', where:'שיחים ועצים', uses:['Temporary Shelter','Stealth Armor','מדורות'], tip:'נאגרות מהר מאוד בתחילת המשחק.' },
  { id:'rabbit-fur', name:'Rabbit Fur', icon:'🐇', type:'תיקים', where:'ציד ארנבים', uses:['Stick Bag','Rock Bag','Quiver','Pouch'], tip:'מלכודת ארנבים ליד בסיס עוזרת מאוד.' },
  { id:'deer-skin', name:'Deer Skin', icon:'🦌', type:'תיקים/ביגוד', where:'ציד איילים', uses:['Waterskin','Warm Suit'], tip:'צריך לסקינים מתקדמים.' }
  ,{ id:'arrows-item', name:'Arrows', icon:'➶', type:'תחמושת', where:'Crafting או מזוודות/מחנות', uses:['Fire Arrows','Bone Arrows','Bow'], tip:'תמיד לשמור מלאי חצים.' },
  { id:'bomb-item', name:'Bomb', icon:'💣', type:'מתקדם', where:'Crafting', uses:['Sticky Bomb','קרבות קשים במשחק'], tip:'יקר להכנה, להשתמש בחוכמה.' },
  { id:'skull', name:'Skull', icon:'💀', type:'חומר', where:'מערות, כפרים, מדורות', uses:['Crafted Club','Skull Lamp'], tip:'שימושי גם לדקורציה ובנייה.' },
  { id:'lizard-skin', name:'Lizard Skin', icon:'🦎', type:'שריון', where:'ציד לטאות', uses:['Stealth Armor'], tip:'קל להשיג באזורים חמים/יעריים.' }

];

export const recipes = [
  { id:'crafted-bow', name:'Crafted Bow', icon:'🏹', category:'נשק', result:'קשת התחלה', ingredients:{Sticks:1, Cloth:1, Rope:1}, location:'Crafting באינבנטורי', notes:'הנשק הכי חשוב להתחלה ולציד.' },
  { id:'arrows', name:'Arrows', icon:'➶', category:'תחמושת', result:'5 חצים', ingredients:{Sticks:1, Feathers:5}, location:'Crafting', notes:'מקור קבוע: Birdhouse ליד בסיס.' },
  { id:'bone-arrows', name:'Bone Arrows', icon:'🦴', category:'תחמושת', result:'5 חצי עצם', ingredients:{Sticks:1, Feathers:5, Bones:5}, location:'Crafting', notes:'חזקים יותר מחצים רגילים.' },
  { id:'fire-arrows', name:'Fire Arrows', icon:'🔥', category:'תחמושת', result:'חצי אש', ingredients:{Arrows:5, Cloth:1, Booze:1}, location:'Crafting', notes:'טובים נגד מוטנטים במשחק.' },
  { id:'weak-spear', name:'Weak Spear', icon:'🔱', category:'נשק', result:'חנית בסיסית', ingredients:{Sticks:2}, location:'Crafting', notes:'לדיג, ציד ופתיחה מוקדמת.' },
  { id:'upgraded-spear', name:'Upgraded Spear', icon:'🔱', category:'שדרוג', result:'חנית משופרת', ingredients:{'Weak Spear':1, Cloth:2, Bones:3}, location:'Crafting', notes:'זול וחזק יחסית להתחלה.' },
  { id:'torch', name:'Torch', icon:'🕯️', category:'כלי', result:'לפיד', ingredients:{Sticks:1, Cloth:1}, location:'Crafting', notes:'שימושי במערות עד שמוצאים פנס.' },
  { id:'molotov', name:'Molotov', icon:'🍾', category:'זריקה במשחק', result:'בקבוק תבערה במשחק', ingredients:{Booze:1, Cloth:1}, location:'Crafting', notes:'משחק בלבד; טוב לשליטה בקבוצות אויבים.' },
  { id:'bomb', name:'Bomb', icon:'💣', category:'זריקה במשחק', result:'פצצה במשחק', ingredients:{Booze:1, Coins:5, 'Circuit Board':1, 'Wrist Watch':1, 'Electrical Tape':1}, location:'Crafting במשחק', notes:'משחק בלבד; לפתיחת caches ולהתמודדות עם אויבים כבדים.' },
  { id:'bone-armor', name:'Bone Armor', icon:'🦴', category:'שריון', result:'שריון עצמות', ingredients:{Bones:6, Cloth:3}, location:'Crafting', notes:'השריון המשתלם ביותר לפני מערות.' },
  { id:'stealth-armor', name:'Stealth Armor', icon:'🦎', category:'שריון', result:'שריון התגנבות', ingredients:{'Lizard Skin':1, Leaves:15}, location:'Crafting', notes:'עוזר לציד ותנועה שקטה.' },
  { id:'repair-tool', name:'Repair Tool', icon:'🔧', category:'כלי', result:'כלי תיקון', ingredients:{Sticks:2, Rocks:1, Cloth:2, 'Tree Sap':10}, location:'Crafting', notes:'לתיקון מבנים אחרי תקיפות.' },
  { id:'stick-bag', name:'Stick Bag', icon:'🎒', category:'תיק', result:'נשיאת יותר מקלות', ingredients:{'Rabbit Fur':1, Rope:2, Cloth:3}, location:'Crafting', notes:'שדרוג איכות חיים לבנייה.' },
  { id:'rock-bag', name:'Rock Bag', icon:'🎒', category:'תיק', result:'נשיאת יותר אבנים', ingredients:{'Rabbit Fur':3, Rope:3, Cloth:1}, location:'Crafting', notes:'מעולה לבנייה וחומות.' },
  { id:'quiver', name:'Quiver', icon:'🏹', category:'תיק', result:'יותר מקום לחצים', ingredients:{'Rabbit Fur':3, Rope:1}, location:'Crafting', notes:'חובה לשחק עם קשת.' },
  { id:'waterskin', name:'Waterskin', icon:'💧', category:'הישרדות', result:'נשיאת מים', ingredients:{'Deer Skin':2, Rope:1}, location:'Crafting', notes:'טוב למסעות ומערות.' }
  ,{ id:'crafted-axe', name:'Crafted Axe', icon:'🪓', category:'נשק', result:'גרזן שנבנה ידנית', ingredients:{Sticks:1, Rocks:1, Rope:1}, location:'Crafting', notes:'נשק בסיסי שאפשר לשדרג עם Sap.' },
  { id:'crafted-club', name:'Crafted Club', icon:'🏏', category:'נשק', result:'אלה בנויה', ingredients:{Sticks:1, Skull:1}, location:'Crafting', notes:'איטית אבל יכולה לעזור בתחילת המשחק.' },
  { id:'molotov', name:'Molotov', icon:'🍾', category:'אש', result:'בקבוק תבערה במשחק', ingredients:{Cloth:1, Booze:1}, location:'Crafting', notes:'שימושי מאוד נגד קבוצות ומוטנטים במשחק.' },
  { id:'bomb', name:'Bomb', icon:'💣', category:'מתקדם', result:'Explosive במשחק', ingredients:{Booze:1, Coins:5, 'Circuit Board':1, 'Wrist Watch':1, 'Electrical Tape':1}, location:'Crafting', notes:'למצבים קשים, פתיחת מקומות וסכנות כבדות במשחק.' },
  { id:'sticky-bomb', name:'Sticky Bomb', icon:'🧲', category:'מתקדם', result:'Bomb + Tree Sap', ingredients:{Bomb:1, 'Tree Sap':1}, location:'Crafting', notes:'גרסה שנדבקת למטרה/משטח בתוך המשחק.' },
  { id:'bone-armor', name:'Bone Armor', icon:'🛡️', category:'שריון', result:'שריון עצמות', ingredients:{Bones:6, Cloth:3}, location:'Crafting', notes:'אחד הדברים הכי חשובים לפני מערות.' },
  { id:'stealth-armor', name:'Stealth Armor', icon:'🍃', category:'שריון', result:'שריון התגנבות', ingredients:{Leaves:15, 'Lizard Skin':1}, location:'Crafting', notes:'טוב להתגנבות וציד, פחות לקרבות כבדים.' },
  { id:'snowshoes', name:'Snowshoes', icon:'🥾', category:'ביגוד', result:'נעלי שלג', ingredients:{Sticks:5, Rope:2}, location:'Crafting', notes:'עוזר באזורים מושלגים.' },
  { id:'waterskin', name:'Waterskin', icon:'💧', category:'ציוד', result:'נאד מים', ingredients:{'Deer Skin':2, Rope:1}, location:'Crafting', notes:'מאפשר לקחת מים למסעות.' },
  { id:'pouch', name:'Pouch', icon:'👝', category:'תיק', result:'Pouch לצמחים/זרעים', ingredients:{'Rabbit Fur':2}, location:'Crafting', notes:'חשוב לאיסוף berries וצמחים.' },
  { id:'quiver', name:'Quiver', icon:'🏹', category:'תיק', result:'יותר מקום לחצים', ingredients:{'Rabbit Fur':3, Rope:1}, location:'Crafting', notes:'שדרוג חובה למי שמשחק עם קשת.' },
  { id:'stick-bag', name:'Stick Bag', icon:'🪵', category:'תיק', result:'יותר מקום למקלות', ingredients:{'Rabbit Fur':1, Rope:2, Cloth:3}, location:'Crafting', notes:'שדרוג איכות חיים מעולה לבנייה.' },
  { id:'rock-bag', name:'Rock Bag', icon:'🪨', category:'תיק', result:'יותר מקום לאבנים', ingredients:{'Rabbit Fur':1, Rope:1, Cloth:1}, location:'Crafting', notes:'מעולה לבנייה ומלכודות.' },
  { id:'repair-tool', name:'Repair Tool', icon:'🔨', category:'כלי', result:'כלי תיקון', ingredients:{Sticks:2, Rocks:1, Cloth:2, 'Tree Sap':10}, location:'Crafting', notes:'מתקן מבנים שנפגעו.' },
  { id:'crafted-bag', name:'Crafted Bag', icon:'🎒', category:'תיק', result:'תיק נשיאה', ingredients:{'Rabbit Fur':2, Rope:2}, location:'Crafting', notes:'שימושי לאחסון ונשיאה בהתאם לגרסת המשחק.' }

];

export const buildings = [
  { id:'temp-shelter', name:'Temporary Shelter', icon:'⛺', group:'מחסה', materials:{Leaves:26, Sticks:14}, why:'שינה ושמירה חד פעמית, מעולה ליום הראשון.' },
  { id:'hunting-shelter', name:'Hunting Shelter', icon:'🏚️', group:'מחסה', materials:{Logs:7, Sticks:6, Rocks:7}, why:'מחסה קבוע קטן לשמירה.' },
  { id:'small-cabin', name:'Small Cabin', icon:'🏠', group:'בסיס', materials:{Logs:13}, why:'בית קטן וקבוע, לא יקר מדי.' },
  { id:'log-cabin', name:'Log Cabin', icon:'🏡', group:'בסיס', materials:{Logs:82}, why:'בסיס גדול ומרשים אבל דורש המון עבודה.' },
  { id:'fire-pit', name:'Fire Pit', icon:'🔥', group:'אש', materials:{Sticks:4, Rocks:7, Leaves:7}, why:'בישול, אור וחימום לאורך זמן.' },
  { id:'drying-rack', name:'Drying Rack', icon:'🥩', group:'אוכל', materials:{Sticks:5}, why:'הדרך הכי נוחה לשמור אוכל.' },
  { id:'water-collector', name:'Water Collector', icon:'💧', group:'מים', materials:{Sticks:4, 'Turtle Shell':1}, why:'חובה לבסיס יציב, עדיף כמה כאלה.' },
  { id:'stick-holder', name:'Stick Holder', icon:'🪵', group:'אחסון', materials:{Sticks:6}, why:'מקל על בנייה ו־crafting.' },
  { id:'rock-holder', name:'Rock Holder', icon:'🪨', group:'אחסון', materials:{Sticks:8}, why:'מעולה לבנייה וחומות.' },
  { id:'log-holder', name:'Log Holder', icon:'🪵', group:'אחסון', materials:{Sticks:16}, why:'מסדר בסיס ומקל על פרויקטים גדולים.' },
  { id:'defensive-wall', name:'Defensive Wall', icon:'🧱', group:'הגנה', materials:{Logs:5}, why:'קו הגנה בסיסי נגד קניבלים ומוטנטים.' },
  { id:'happy-birthday', name:'Happy Birthday Trap', icon:'🪤', group:'מלכודות', materials:{Sticks:10, Rocks:6, Logs:2}, why:'מלכודת חזקה להגנה על כניסות לבסיס.' }
];

export const weapons = [
  { id:'plane-axe', name:'Plane Axe', icon:'🪓', type:'כלי התחלתי', location:'במטוס בתחילת המשחק', stats:{damage:4, speed:5, block:4}, related:['Sticks','Logs'], tip:'טוב להתחלה, אבל כדאי להשיג Modern Axe.' },
  { id:'modern-axe', name:'Modern Axe', icon:'🪓', type:'גרזן חזק', location:'Cave 2 / Hanging Cave, בחדר ציוד', stats:{damage:7, speed:5, block:9}, related:['Cave 2','Tree Sap'], tip:'אחד הכלים הכי טובים במשחק לכריתה ולקרב.' },
  { id:'katana', name:'Katana', icon:'⚔️', type:'נשק מהיר', location:'Cave 1 / Dead Cave route', stats:{damage:5, speed:9, block:0}, related:['Cave 1'], tip:'מהיר מאוד נגד קניבלים, פחות טוב נגד מוטנטים כבדים.' },
  { id:'crafted-bow', name:'Crafted Bow', icon:'🏹', type:'נשק Crafting', location:'Crafting: Stick + Cloth + Rope', stats:{damage:4, speed:6, block:0}, related:['Arrows','Feathers'], tip:'הכי חשוב להישרדות חכמה.' },
  { id:'modern-bow', name:'Modern Bow', icon:'🏹', type:'קשת מתקדמת', location:'Cave 7 / Chasm Cave, אזור מתקדם', stats:{damage:8, speed:6, block:0}, related:['Rebreather','Cave 7'], tip:'מעולה לסוף המשחק, דורש ציוד מתקדם.' },
  { id:'rebreather', name:'Rebreather', icon:'🤿', type:'ציוד חובה', location:'Cave 5 / Submerged Cave', stats:{damage:0, speed:0, block:0}, related:['Cave 5','Air Canister'], tip:'פותח מסלולים תת־מימיים וסוף משחק.' },
  { id:'climbing-axe', name:'Climbing Axe', icon:'⛏️', type:'ציוד התקדמות', location:'Cave 9 / Ledge Cave', stats:{damage:3, speed:4, block:2}, related:['Cave 9'], tip:'צריך לטיפוס במסלולים מסוימים.' },
  { id:'chainsaw', name:'Chainsaw', icon:'🪚', type:'כלי מתקדם', location:'Cave 3 / Wet Cave', stats:{damage:6, speed:8, block:0}, related:['Fuel','Cave 3'], tip:'כריתת עצים מהירה מאוד, דורש דלק.' },
  { id:'keycard', name:'Keycard', icon:'💳', type:'סיפור', location:'Cave 6 / Lawyer Cave', stats:{damage:0, speed:0, block:0}, related:['Final Lab'], tip:'חובה למסלול הסוף.' }
];

export const enemies = [
  { id:'regular-cannibal', name:'Regular Cannibal', icon:'🧍', danger:2, habitat:'כפרים, יערות, סיורים', behavior:'מגיעים בקבוצות, בודקים את השחקן, לפעמים נסוגים.', counter:'קשת, חנית, מלכודות, לא להיכנס לקרב מול קבוצה בלי שריון.', weak:'Headshots, Fire, Traps' },
  { id:'skinny-cannibal', name:'Skinny Cannibal', icon:'🏃', danger:2, habitat:'מערות ושטח פתוח', behavior:'מהירים ומציקים, קופצים ונעים הרבה.', counter:'להרחיק עם חנית או לפגוע מרחוק.', weak:'Bow, Spear' },
  { id:'pale-cannibal', name:'Pale Cannibal', icon:'👤', danger:3, habitat:'מערות בעיקר', behavior:'חזקים יותר ומופיעים בחושך.', counter:'לא להילחם בחושך, להשתמש בלפיד/פנס וקשת.', weak:'Fire, Bone Arrows' },
  { id:'armsy', name:'Armsy', icon:'🦾', danger:5, habitat:'מערות ובהמשך גם מעל הקרקע', behavior:'מוטנט כבד ששובר מבנים ויכול להעניש מקרוב.', counter:'אש, חצים מרחוק, פצצות במשחק, לא לעמוד מולו.', weak:'Fire, Explosives in-game, Distance' },
  { id:'virginia', name:'Virginia', icon:'🕷️', danger:5, habitat:'מערות ובהמשך מעל הקרקע', behavior:'מהירה, קפיצות והתקפות פתאומיות.', counter:'לשמור מרחק, להשתמש באש, לא להילחם במקום צפוף.', weak:'Fire, Arrows, Open space' },
  { id:'cowman', name:'Cowman', icon:'🐂', danger:5, habitat:'מופיע בהמשך המשחק', behavior:'ריצה חזקה ודריסה.', counter:'לזוז לצדדים, להשתמש בקשת ומלכודות.', weak:'Distance, Traps' },
  { id:'mutant-baby', name:'Mutant Baby', icon:'👶', danger:3, habitat:'מערות וסוף משחק', behavior:'קטנים, קופצים בקבוצות.', counter:'לא לזלזל בהם, לפנות מרחב.', weak:'Spear, Bow' }
];

export const caves = [
  { id:'cave-1', name:'Cave 1 / Dead Cave', icon:'🕳️', difficulty:3, biome:'אזור מזרח/יער', keyItems:['Katana','Flashlight','Cash','Meds'], enemies:['Cannibals','Pale Cannibals'], dangers:['חושך','מעברים צרים'], recommended:['Bow','Torch','Bone Armor'], route:'כניסה יחסית נגישה. להתקדם בזהירות בחדרים ולהשתמש באור.', notes:'אחת המערות הכי משתלמות מוקדם בגלל Katana.' },
  { id:'cave-2', name:'Cave 2 / Hanging Cave', icon:'🕳️', difficulty:3, biome:'דרום/אגם/כפר', keyItems:['Map','Compass','Modern Axe','Paint'], enemies:['Cannibals'], dangers:['אפשר ללכת לאיבוד','ירידות חבל'], recommended:['Torch','Bow'], route:'חפש חדר ציוד/Hidden Stash. Modern Axe נמצא באזור ארגזים.', notes:'מערה חובה כי היא פותחת ניווט אמיתי במשחק.' },
  { id:'cave-3', name:'Cave 3 / Wet Cave', icon:'💧', difficulty:4, biome:'מערב/נהר', keyItems:['Chainsaw','Climbing Axe route','Fuel'], enemies:['Cannibals','Mutants'], dangers:['מים','חושך','עומק'], recommended:['Rebreather later','Bone Armor','Fire Arrows'], route:'להיכנס עם אוכל, תרופות ואור. לא להמשיך עמוק מדי בלי ציוד.', notes:'טובה להשגת Chainsaw וציוד מתקדם.' },
  { id:'cave-5', name:'Cave 5 / Submerged Cave', icon:'🤿', difficulty:4, biome:'דרום/חוף', keyItems:['Rebreather','Flashlight','Air Canisters'], enemies:['Cannibals','Mutants'], dangers:['צלילה','חושך'], recommended:['Bone Armor','Meds','Torch'], route:'למצוא את אזור הצלילה ולקחת Rebreather לפני מסלולים עמוקים.', notes:'חובה להתקדמות לסוף ול־Modern Bow.' },
  { id:'cave-6', name:'Cave 6 / Lawyer Cave', icon:'💳', difficulty:4, biome:'מערב/פנים האי', keyItems:['Keycard','Camcorder','Tapes'], enemies:['Babies','Mutants','Cannibals'], dangers:['אויבים כבדים','מערכת מסועפת'], recommended:['Rebreather','Modern Axe','Armor'], route:'להגיע מוכנים, לסרוק חדרים ולחפש אזור עם גופה/משרד.', notes:'Keycard הוא פריט סיפור קריטי.' },
  { id:'cave-7', name:'Cave 7 / Chasm Cave', icon:'🏹', difficulty:5, biome:'Sinkhole / אזור מתקדם', keyItems:['Modern Bow','Tennis Racket','Pedometer'], enemies:['Mutants','Babies','Cannibals'], dangers:['נפילות','צלילות','קרבות צפופים'], recommended:['Rebreather','Climbing Axe','Modern Axe','Full Armor'], route:'לא למתחילים. להגיע אחרי Rebreather וציוד מלא.', notes:'מערה מתקדמת מאוד, אבל Modern Bow שווה את זה.' },
  { id:'cave-9', name:'Cave 9 / Ledge Cave', icon:'⛏️', difficulty:4, biome:'צפון/מרכז', keyItems:['Climbing Axe'], enemies:['Cannibals','Mutants'], dangers:['טיפוס','נפילות'], recommended:['Armor','Bow','Meds'], route:'חפש קירות טיפוס ומעבר לעומק המערה.', notes:'Climbing Axe פותח תנועה באזורים מסוימים.' }
];

export const mapMarkers = [
  { id:'plane', title:'Crash Site', icon:'✈️', type:'poi', x:46, y:62, danger:1, loot:['Plane Axe','Food','Meds','Suitcases'], description:'נקודת ההתחלה. לפתוח מזוודות, לאסוף בד, תרופות ואוכל.' },
  { id:'yacht', title:'Yacht', icon:'⛵', type:'poi', x:18, y:72, danger:1, loot:['Rope','Photos','Cassette','Safe spot'], description:'נקודת Loot טובה ליד חוף. שימושי למסעות ראשונים.' },
  { id:'main-village', title:'Main Cannibal Village', icon:'🏚️', type:'danger', x:54, y:48, danger:4, loot:['Rope','Cloth','Supplies'], description:'כפר גדול ומסוכן, אבל מלא חומרים.' },
  { id:'fertile-lands', title:'Fertile Lands', icon:'🌿', type:'safe', x:76, y:54, danger:1, loot:['Animals','Plants','Flat build area'], description:'אזור נוח לבסיס יחסית בטוח, הרבה אוכל ושטח בנייה.' },
  { id:'sinkhole', title:'Sinkhole', icon:'🕳️', type:'story', x:55, y:59, danger:5, loot:['Endgame route'], description:'אזור סוף משחק. לא לקפוץ בלי תכנון וציוד.' },
  { id:'snow', title:'Snow Mountain', icon:'🏔️', type:'poi', x:66, y:18, danger:3, loot:['Boar','Raccoon','Flare Gun area'], description:'קר ודורש הכנה. Warm Suit עוזר מאוד.' },
  { id:'cave-1-m', title:'Cave 1 - Katana', icon:'⚔️', type:'cave', x:69, y:45, danger:3, loot:['Katana','Flashlight','Cash'], description:'מערה משתלמת מוקדם להשגת Katana.' },
  { id:'cave-2-m', title:'Cave 2 - Map / Modern Axe', icon:'🪓', type:'cave', x:45, y:52, danger:3, loot:['Map','Compass','Modern Axe'], description:'אחת המערות הכי חשובות במשחק.' },
  { id:'cave-3-m', title:'Cave 3 - Chainsaw', icon:'🪚', type:'cave', x:31, y:47, danger:4, loot:['Chainsaw','Fuel'], description:'מסלול מתקדם יותר עם אויבים וסכנות.' },
  { id:'cave-5-m', title:'Cave 5 - Rebreather', icon:'🤿', type:'cave', x:27, y:78, danger:4, loot:['Rebreather','Air Canisters'], description:'חובה להתקדמות במערות מים.' },
  { id:'cave-6-m', title:'Cave 6 - Keycard', icon:'💳', type:'cave', x:39, y:38, danger:4, loot:['Keycard','Camcorder'], description:'מערה חשובה למסלול הסיפור.' },
  { id:'cave-7-m', title:'Cave 7 - Modern Bow', icon:'🏹', type:'cave', x:57, y:66, danger:5, loot:['Modern Bow'], description:'מסלול מתקדם, מומלץ להגיע מוכנים.' },
  { id:'cave-9-m', title:'Cave 9 - Climbing Axe', icon:'⛏️', type:'cave', x:58, y:32, danger:4, loot:['Climbing Axe'], description:'פותח אזורי טיפוס חשובים.' }
];

export const walkthrough = [
  { step:1, title:'יום 1: לא להסתבך', text:'לאסוף מזוודות, לבנות מחסה קטן, מדורה, חנית וקשת. לא לבנות בסיס ענק.' },
  { step:2, title:'מים ואוכל', text:'להשיג Turtle Shell ל־Water Collector, לבנות Drying Rack ולצוד חיות.' },
  { step:3, title:'מערה ראשונה', text:'להיכנס ל־Cave 2 בשביל Map + Compass ואחר כך Modern Axe.' },
  { step:4, title:'ציוד לחימה', text:'Bone Armor, Crafted Bow, חצי עצם ו־Molotovs במשחק לפני מערות קשות.' },
  { step:5, title:'Rebreather', text:'להשיג Rebreather כדי לפתוח אזורי מים ומסלולים מתקדמים.' },
  { step:6, title:'Keycard', text:'להיכנס ל־Lawyer Cave ולהשיג Keycard למסלול הסוף.' },
  { step:7, title:'Modern Bow וציוד מתקדם', text:'לא חובה לכולם, אבל מאוד משדרג קרבות וסוף משחק.' },
  { step:8, title:'סוף המשחק', text:'להגיע ל־Sinkhole/מעבדה עם ציוד מלא, אוכל, תרופות, שריון ונשקים טובים.' }
];

export const quickInventory = ['Sticks','Cloth','Rope','Feathers','Bones','Booze','Coins','Circuit Board','Wrist Watch','Electrical Tape','Tree Sap','Rocks','Leaves','Rabbit Fur','Deer Skin'];


// V9 content expansion - intentionally kept as data so it is easy to maintain later.
items.push(
  { id:'meds', name:'Meds', icon:'💊', type:'ריפוי', where:'מזוודות, מטוס, מחנות, מערות', uses:['ריפוי מהיר','מערות','קרבות בוס'], tip:'לא לבזבז על פציעות קטנות אם יש אוכל/מנוחה.' },
  { id:'snack', name:'Snack', icon:'🍫', type:'אוכל', where:'מזוודות, מערות, מחנות', uses:['אנרגיה מהירה','מסעות במערות'], tip:'שמור כמה למערות ארוכות.' },
  { id:'soda', name:'Soda', icon:'🥤', type:'שתייה', where:'מזוודות, מטוס, מערות', uses:['צמא','אנרגיה'], tip:'טוב לקחת למערות לפני שיש Waterskin.' },
  { id:'meat', name:'Fresh Meat', icon:'🥩', type:'אוכל', where:'ציד חיות', uses:['Drying Rack','בישול','הישרדות'], tip:'Drying Rack הופך בשר לפתרון אוכל קבוע.' },
  { id:'fish', name:'Fish', icon:'🐟', type:'אוכל', where:'אגמים, נהרות, חוף', uses:['בישול','Drying Rack'], tip:'Weak Spear מאפשר דיג קל ומהיר.' },
  { id:'aloe', name:'Aloe Vera', icon:'🌿', type:'צמח', where:'יער/אזורים ירוקים', uses:['Herbal Medicine'], tip:'שווה לגדל בגינה אם מוצאים זרעים.' },
  { id:'marigold', name:'Marigold', icon:'🌼', type:'צמח', where:'יער/שטחים פתוחים', uses:['Herbal Medicine'], tip:'חומר קבוע לתרופות טבעיות.' },
  { id:'chicory', name:'Chicory', icon:'🌱', type:'צמח', where:'אזורי יער', uses:['Energy Mix'], tip:'טוב לשילוב עם Coneflower.' },
  { id:'coneflower', name:'Coneflower', icon:'🌺', type:'צמח', where:'אזורים ירוקים', uses:['Energy Mix','Health Mix+'], tip:'אחד הצמחים הכי שימושיים למסעות.' },
  { id:'berries', name:'Berries', icon:'🫐', type:'צמח/אוכל', where:'שיחים ברחבי האי', uses:['אוכל','זרעים עם Pouch'], tip:'לא כל berry בטוח לאכילה. עדיף לבדוק לפני שמסתמכים עליו.' },
  { id:'turtle-shell', name:'Turtle Shell', icon:'🐢', type:'כלי/בנייה', where:'חופים עם צבים', uses:['Water Collector','מגלשה'], tip:'Water Collector בבסיס הוא שדרוג הישרדות חשוב.' },
  { id:'old-pot', name:'Old Pot', icon:'🍲', type:'כלי', where:'מחנות/אזורים נטושים', uses:['הרתחת מים','בישול'], tip:'מאפשר מים בטוחים יותר בלי להסתמך רק על סודה.' },
  { id:'flashlight-battery', name:'Batteries', icon:'🔋', type:'תחזוקה', where:'מזוודות, מערות, מחנות', uses:['Flashlight'], tip:'פנס חזק, אבל בלי סוללות הוא הופך לבעיה.' }
);

recipes.push(
  { id:'health-mix', name:'Health Mix', icon:'🧪', category:'ריפוי', result:'תרופה טבעית', ingredients:{Aloe:1, Marigold:1}, location:'Crafting', notes:'שימושי כשלא רוצים לבזבז Meds.' },
  { id:'health-mix-plus', name:'Health Mix+', icon:'🧪', category:'ריפוי', result:'תרופה חזקה יותר', ingredients:{Aloe:1, Marigold:1, Coneflower:1}, location:'Crafting', notes:'מעולה לפני מערות וקרבות קשים.' },
  { id:'energy-mix', name:'Energy Mix', icon:'⚡', category:'הישרדות', result:'בוסט אנרגיה טבעי', ingredients:{Chicory:1, Coneflower:1}, location:'Crafting', notes:'טוב לריצות ארוכות ולחציבה/בנייה.' },
  { id:'energy-mix-plus', name:'Energy Mix+', icon:'⚡', category:'הישרדות', result:'בוסט אנרגיה משופר', ingredients:{Chicory:1, Coneflower:1, Aloe:1}, location:'Crafting', notes:'נוח למסעות ארוכים.' },
  { id:'fire-upgrade', name:'Fire Weapon Upgrade', icon:'🔥', category:'שדרוג נשק', result:'נשק עם אש זמנית', ingredients:{Cloth:1, Booze:1}, location:'Combine עם נשק מתאים', notes:'במשחק בלבד: מתאים לאויבים מסוכנים.' },
  { id:'damage-upgrade', name:'Damage Upgrade', icon:'🦷', category:'שדרוג נשק', result:'יותר נזק לנשק', ingredients:{Teeth:1, 'Tree Sap':1}, location:'Combine עם נשק מתאים', notes:'שדרוגים עם Teeth/Sap מחזקים נשקים מסוימים.' },
  { id:'speed-upgrade', name:'Speed Upgrade', icon:'🪶', category:'שדרוג נשק', result:'יותר מהירות לנשק', ingredients:{Feathers:1, 'Tree Sap':1}, location:'Combine עם נשק מתאים', notes:'טוב לנשקים כבדים יותר.' },
  { id:'water-collector', name:'Water Collector', icon:'💧', category:'בנייה', result:'איסוף מי גשם', ingredients:{Sticks:4, 'Turtle Shell':1}, location:'Survival Book', notes:'חובה לבסיס קבוע.' },
  { id:'drying-rack-craft', name:'Drying Rack', icon:'🥩', category:'בנייה', result:'ייבוש בשר', ingredients:{Sticks:5}, location:'Survival Book', notes:'אחד המבנים הכי חשובים לאוכל קבוע.' },
  { id:'garden-craft', name:'Garden', icon:'🌱', category:'בנייה', result:'גידול צמחים', ingredients:{Logs:2}, location:'Survival Book', notes:'מעולה אם יש Pouch וזרעים.' }
);

buildings.push(
  { id:'water-collector-b', name:'Water Collector', icon:'💧', group:'Food & Water', materials:{Sticks:4, 'Turtle Shell':1}, why:'אוסף מי גשם, בסיסי להישרדות ממושכת.' },
  { id:'drying-rack-b', name:'Drying Rack', icon:'🥩', group:'Food & Water', materials:{Sticks:5}, why:'מייבש בשר כדי שלא יתקלקל מהר.' },
  { id:'garden-b', name:'Garden', icon:'🌱', group:'Food & Water', materials:{Logs:2}, why:'מאפשר לגדל צמחים ו־berries.' },
  { id:'log-sled-b', name:'Log Sled', icon:'🛷', group:'Utility', materials:{Sticks:21}, why:'חוסך המון זמן בבניית בסיס.' },
  { id:'stick-holder-b', name:'Stick Holder', icon:'🪵', group:'Storage', materials:{Sticks:6}, why:'אחסון מקלות ליד בסיס/מלכודות.' },
  { id:'rock-holder-b', name:'Rock Holder', icon:'🪨', group:'Storage', materials:{Sticks:7}, why:'אחסון אבנים לבנייה וחומות.' },
  { id:'bone-basket-b', name:'Bone Basket', icon:'🦴', group:'Storage', materials:{Sticks:21}, why:'שומר עצמות ל־Bone Armor.' },
  { id:'deadfall-trap-b', name:'Deadfall Trap', icon:'🪤', group:'Defense', materials:{Logs:3, Sticks:3}, why:'מלכודת יעילה וזולה יחסית נגד אויבים.' },
  { id:'happy-birthday-trap-b', name:'Happy Birthday Trap', icon:'🎂', group:'Defense', materials:{Logs:2, Sticks:10, Rocks:6}, why:'חזקה להגנת בסיס כשהאויבים מגיעים בגלים.' }
);

weapons.push(
  { id:'plane-axe', name:'Plane Axe', icon:'🪓', type:'Tool / Weapon', location:'נמצא מיד אחרי ההתרסקות', stats:{damage:4,speed:6,block:4}, related:['Start','Basic survival'], tip:'מספיק להתחלה אבל כדאי לשדרג ל־Modern Axe מהר.' },
  { id:'weak-spear-w', name:'Weak Spear', icon:'🔱', type:'Crafted Weapon', location:'Crafting מ־2 Sticks', stats:{damage:3,speed:7,block:1}, related:['Fish','Hunting'], tip:'מעולה לדיג ולציד בתחילת המשחק.' },
  { id:'upgraded-spear-w', name:'Upgraded Spear', icon:'🔱', type:'Crafted Weapon', location:'שדרוג Weak Spear', stats:{damage:6,speed:6,block:2}, related:['Bones','Cloth'], tip:'כלי זול וחזק יחסית לפני נשקים מתקדמים.' },
  { id:'flare-gun', name:'Flare Gun', icon:'🔫', type:'Ranged / Fire', location:'באזור מושלג/מטוס קדמי לפי מסלול', stats:{damage:5,speed:3,block:0}, related:['Flares','Snow area'], tip:'שימושי להבערת אויבים מרחוק במשחק.' },
  { id:'chainsaw', name:'Chainsaw', icon:'🪚', type:'Tool / Weapon', location:'מערה עם loot מתקדם', stats:{damage:5,speed:8,block:1}, related:['Fuel','Caves'], tip:'מטורף לכריתת עצים, רועש לקרבות.' },
  { id:'climbing-axe', name:'Climbing Axe', icon:'⛏️', type:'Traversal Tool', location:'מערות מתקדמות', stats:{damage:2,speed:5,block:2}, related:['Caves','Progression'], tip:'חשוב למסלולים אנכיים במערות.' }
);

enemies.push(
  { id:'skinny-cannibal', name:'Skinny Cannibal', icon:'🧟', danger:2, habitat:'יער, כפרים, סיורים', behavior:'מהיר, חלש יחסית, מגיע בקבוצות', counter:'קשת/חנית, לא להיכנס לפאניקה', weak:'Arrows, Spear, Fire' },
  { id:'regular-cannibal', name:'Regular Cannibal', icon:'👹', danger:3, habitat:'כפרים ויער', behavior:'תוקף, בורח, קורא לעזרה', counter:'Block, קשת, Molotov במשחק לקבוצה', weak:'Bow, Axe, Traps' },
  { id:'fireman', name:'Fire Cannibal', icon:'🔥', danger:4, habitat:'לילה/קבוצות מתקדמות', behavior:'זורק אש ויוצר לחץ מרחוק', counter:'לתפוס מרחק ולהוריד ראשון', weak:'Bow, Modern Axe, Armor' },
  { id:'cowman', name:'Cowman', icon:'🐂', danger:5, habitat:'שלבים מתקדמים, מערות/שטח פתוח', behavior:'ריצה חזקה ופגיעה כבדה', counter:'להתחמק הצידה, להשתמש בקשת/אש במשחק', weak:'Fire, Arrows, Distance' },
  { id:'worm', name:'Worm', icon:'🪱', danger:5, habitat:'מאוחר במשחק', behavior:'יכול להתחבר לצורות מסוכנות', counter:'להגיב מהר ולפזר נזק לפני שהוא גדל', weak:'Explosives in game, Fire, Distance' }
);

caves.push(
  { id:'cave-wet', name:'Wet Cave / Rebreather Route', icon:'🌊', difficulty:4, biome:'מערות מים', keyItems:['Rebreather','Air Canisters','Loot'], enemies:['Cannibals','Mutants'], recommended:['Armor','Food','Light','Bow'], notes:'נקודת התקדמות חשובה כי Rebreather פותח אזורים ומסלול לסוף.' },
  { id:'cave-lawyer', name:'Lawyer Cave / Keycard Route', icon:'💳', difficulty:4, biome:'מערה סיפורית', keyItems:['Keycard','Camcorder','Story items'], enemies:['Cannibals','Mutants'], recommended:['Modern Axe','Bone Armor','Meds'], notes:'אחת המערות החשובות לקידום הסיפור.' },
  { id:'cave-chainsaw', name:'Chainsaw Cave', icon:'🪚', difficulty:3, biome:'מערה עם ציוד', keyItems:['Chainsaw','Fuel','Loot'], enemies:['Cannibals'], recommended:['Bow','Armor','Light'], notes:'שווה מאוד לבנייה גדולה בגלל מהירות כריתת עצים.' },
  { id:'cave-climbing', name:'Climbing Axe Cave', icon:'⛏️', difficulty:4, biome:'מערה אנכית', keyItems:['Climbing Axe','Ropes','Loot'], enemies:['Cannibals','Mutants'], recommended:['Rebreather','Armor','Food'], notes:'חשובה למסלולים מאוחרים יותר ולחקירה עמוקה.' }
);

mapMarkers.push(
  {id:'rebreather-route', title:'Rebreather Route', type:'cave', x:18, y:66, danger:4, icon:'🌊', loot:['Rebreather','Air Canisters','Story route'], description:'מסלול מערה חשוב שמאפשר התקדמות במים ובאזורים מאוחרים.'},
  {id:'keycard-route', title:'Keycard Route', type:'story', x:54, y:58, danger:4, icon:'💳', loot:['Keycard','Camcorder','Story items'], description:'נקודת מפתח להתקדמות לסוף המשחק.'},
  {id:'chainsaw-route', title:'Chainsaw Area', type:'poi', x:43, y:46, danger:3, icon:'🪚', loot:['Chainsaw','Fuel','Loot'], description:'שווה להגיע לפני בנייה גדולה.'},
  {id:'fertile-lands', title:'Fertile Lands Base Spot', type:'safe', x:78, y:38, danger:1, icon:'🌿', loot:['Animals','Water nearby','Open building space'], description:'אזור נוח יחסית לבסיס, מתאים למשחק עם חבר.'},
  {id:'main-village', title:'Main Cannibal Village', type:'danger', x:49, y:50, danger:4, icon:'🏚️', loot:['Rope','Cloth','Suitcases','Enemies'], description:'Loot טוב אבל הרבה פעילות אויבים.'},
  {id:'yacht', title:'Yacht / Coast', type:'poi', x:16, y:20, danger:2, icon:'⛵', loot:['Supplies','Story hints','Safe-ish coast'], description:'נקודת חוף שימושית למנוחה ואיסוף.'}
);

walkthrough.length = 0;
walkthrough.push(
  {step:1,title:'Crash Site - 10 דקות ראשונות',text:'קח Plane Axe, פתח מזוודות, אסוף Meds/Snacks/Soda/Cloth. אל תישאר יותר מדי זמן אם יש אויבים.'},
  {step:2,title:'מים ואוכל',text:'מצא מקור מים, צד Fish/Rabbit/Deer, בנה Fire ו־Drying Rack. Turtle Shell מאפשר Water Collector.'},
  {step:3,title:'בסיס קטן וחכם',text:'בחר מקום עם מים, עצים ובריחה קלה. בנה Shelter, Holders, Drying Rack, Fire Pit ומלכודות בסיסיות.'},
  {step:4,title:'ציוד התחלה',text:'Crafted Bow, Arrows, Weak/Upgraded Spear, Bone Armor, Stick Bag, Rock Bag ו־Quiver.'},
  {step:5,title:'Modern Axe ו־Katana',text:'צא למערות הראשונות עם אור, אוכל ושריון. Modern Axe טוב גם לקרבות וגם לכריתה. Katana מהירה ונוחה.'},
  {step:6,title:'Rebreather',text:'יעד חובה להתקדמות. היכנס למערת מים עם אוכל, Meds, שריון ואור. אחרי זה נפתחים מסלולים חדשים.'},
  {step:7,title:'Keycard',text:'אחרי שיש ציוד טוב ו־Rebreather, לך למסלול Keycard. זה אחד השלבים החשובים לסוף.'},
  {step:8,title:'Modern Bow / ציוד מתקדם',text:'אסוף נשקים וציוד משלים: Modern Bow, Chainsaw, Climbing Axe, Flashlight, Warm Suit לפי צורך.'},
  {step:9,title:'הכנה לסוף',text:'לפני Sinkhole/מעבדה: Bone/Creepy Armor, אוכל, מים, Meds, חצים, Molotovs במשחק, סוללות ופנס.'},
  {step:10,title:'Final Route',text:'השתמש ב־Rebreather ו־Keycard כדי להתקדם לאזור הסופי. אל תיכנס בלי מלאי ושריון.'}
);

export const completionGroups = [
  { id:'starter', title:'Starter Essentials', ids:['plane-axe','crafted-bow','weak-spear','drying-rack-b','water-collector-b'] },
  { id:'core', title:'Core Progression', ids:['modern-axe','katana','rebreather','keycard','modern-bow'] },
  { id:'caves', title:'Important Caves', ids:['cave-2','cave-wet','cave-lawyer','cave-chainsaw','cave-climbing'] },
  { id:'survival', title:'Survival Setup', ids:['stick-bag','rock-bag','quiver','waterskin','bone-armor'] }
];

quickInventory.push('Aloe','Marigold','Chicory','Coneflower','Turtle Shell','Teeth','Bomb','Arrows','Lizard Skin');
