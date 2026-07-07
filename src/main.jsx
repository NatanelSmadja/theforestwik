import React, { useMemo, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Search,
  Menu,
  X,
  Star,
  CheckCircle2,
  Plus,
  Minus,
  RotateCcw,
  MapPin,
  Filter,
  Backpack,
  Hammer,
  Target,
  Shield,
  BookOpen,
  Eye,
  StickyNote,
  Route,
  Boxes,
  Grid3X3,
  ListChecks,
  Smartphone,
} from "lucide-react";
import "./style.css";
import {
  categories,
  items,
  recipes,
  buildings,
  weapons,
  enemies,
  caves,
  mapMarkers,
  walkthrough,
  quickInventory,
  completionGroups,
} from "./data.js";

const useLocal = (key, initial) => {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? initial;
    } catch {
      return initial;
    }
  });
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [key, value],
  );
  return [value, setValue];
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const missingFor = (ingredients, inventory) =>
  Object.entries(ingredients)
    .filter(([name, qty]) => (inventory[name] || 0) < qty)
    .map(([name, qty]) => ({
      name,
      qty,
      have: inventory[name] || 0,
      missing: qty - (inventory[name] || 0),
    }));
const isCraftable = (ingredients, inventory) =>
  missingFor(ingredients, inventory).length === 0;

function App() {
  const [active, setActive] = useState("dashboard");
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useLocal("tf-v7-favorites", []);
  const [done, setDone] = useLocal("tf-v7-done", []);
  const [notes, setNotes] = useLocal("tf-v7-notes", {});
  const [theme, setTheme] = useLocal("tf-v10-theme", "forest");
  const [profile, setProfile] = useLocal("tf-v10-profile", "Solo");
  const all = useMemo(
    () => [
      ...recipes.map((x) => ({
        ...x,
        kind: "Craft",
        search: [
          x.name,
          x.result,
          x.location,
          x.notes,
          Object.keys(x.ingredients).join(" "),
        ],
      })),
      ...buildings.map((x) => ({
        ...x,
        kind: "Building",
        search: [x.name, x.group, x.why, Object.keys(x.materials).join(" ")],
      })),
      ...weapons.map((x) => ({
        ...x,
        kind: "Weapon",
        search: [x.name, x.type, x.location, x.tip, x.related?.join(" ")],
      })),
      ...caves.map((x) => ({
        ...x,
        kind: "Cave",
        search: [
          x.name,
          x.biome,
          x.keyItems.join(" "),
          x.enemies.join(" "),
          x.notes,
        ],
      })),
      ...enemies.map((x) => ({
        ...x,
        kind: "Enemy",
        search: [x.name, x.habitat, x.behavior, x.counter, x.weak],
      })),
      ...items.map((x) => ({
        ...x,
        kind: "Item",
        search: [x.name, x.type, x.where, x.uses.join(" "), x.tip],
      })),
    ],
    [],
  );
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return all
      .filter((x) =>
        [x.name, x.kind, ...x.search].join(" ").toLowerCase().includes(q),
      )
      .slice(0, 42);
  }, [query, all]);
  const toggle = (arr, setter, id) =>
    setter(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]);
  const openSection = (id) => {
    setActive(id);
    setMenu(false);
    setQuery("");
  };
  const completion = Math.round(
    (done.length /
      Math.max(1, recipes.length + caves.length + weapons.length)) *
      100,
  );

  return (
    <div className={`app theme-${theme}`} dir="rtl">
      <aside className={menu ? "open" : ""}>
        <div className="brand">
          <span className="brandLogo">🌲</span>
          <div>
            <b>The Forest Wikipadia</b>
            <small>V10 • companion app</small>
          </div>
        </div>
        <nav>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => openSection(c.id)}
              className={active === c.id ? "active" : ""}
            >
              <span>{c.icon}</span>
              {c.name}
            </button>
          ))}
        </nav>
        <div className="sideBox">
          <b>{completion}% Progress</b>
          <p>
            {done.length} פריטים סומנו • {favorites.length} מועדפים
          </p>
          <div className="bar">
            <i style={{ width: `${clamp(completion, 0, 100)}%` }} />
          </div>
        </div>
      </aside>
      <main>
        <header className="hero">
          <button className="mobileMenu" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
          <div className="heroBg">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="heroContent">
            <p className="eyebrow">
              Survival Companion • Map • Inventory • Caves
            </p>
            <h1>המדריך החכם ל־The Forest</h1>
            <p>
              לא סתם רשימות. זה Companion App קטן לך ולחבר: חיפוש חכם, מפה
              משודרגת, סימון התקדמות, Inventory Simulator, Build Planner, מערות,
              אויבים ונשקים.
            </p>
            <div className="search">
              <Search size={20} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="חפש Katana, Rope, Rebreather, Cave 2, Armsy, Bone Armor..."
              />
            </div>
          </div>
          <div className="heroStats">
            <Stat label="Crafts" value={recipes.length} />
            <Stat label="Caves" value={caves.length} />
            <Stat label="Items" value={items.length} />
            <Stat label="Enemies" value={enemies.length} />
          </div>
        </header>

        {query ? (
          <SearchResults
            results={results}
            favorites={favorites}
            done={done}
            onFav={(id) => toggle(favorites, setFavorites, id)}
            onDone={(id) => toggle(done, setDone, id)}
          />
        ) : (
          <Content
            active={active}
            favorites={favorites}
            done={done}
            notes={notes}
            setNotes={setNotes}
            theme={theme}
            setTheme={setTheme}
            profile={profile}
            setProfile={setProfile}
            toggle={(id, type) =>
              type === "fav"
                ? toggle(favorites, setFavorites, id)
                : toggle(done, setDone, id)
            }
          />
        )}
      </main>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}
function SectionTitle({ icon, title, subtitle, action }) {
  return (
    <div className="sectionTitle">
      <span className="sectionIcon">{icon}</span>
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action && <div className="sectionAction">{action}</div>}
    </div>
  );
}
function Content(props) {
  const {
    active,
    favorites,
    done,
    toggle,
    notes,
    setNotes,
    theme,
    setTheme,
    profile,
    setProfile,
  } = props;
  if (active === "dashboard")
    return <Dashboard favorites={favorites} done={done} toggle={toggle} />;
  if (active === "adventure")
    return <AdventureMode done={done} toggle={toggle} profile={profile} />;
  if (active === "smart") return <SmartSearch />;
  if (active === "craft-tree") return <CraftTree />;
  if (active === "compare") return <CompareLab />;
  if (active === "tips") return <TipsHub />;
  if (active === "timeline") return <SurvivalTimeline />;
  if (active === "profiles")
    return <ProfilesManager profile={profile} setProfile={setProfile} />;
  if (active === "settings")
    return <ThemeSettings theme={theme} setTheme={setTheme} />;
  if (active === "map") return <MapSection />;
  if (active === "crafts") return <CraftsPage />;
  if (active === "inventory") return <InventorySimulator />;
  if (active === "planner") return <BuildPlanner />;
  if (active === "caves")
    return (
      <CardsPage
        title="מערות"
        subtitle="מה יש בכל מערה, ציוד מומלץ, אויבים וסכנות"
        icon={<Route />}
        items={caves}
        render={(x) => (
          <CaveCard
            item={x}
            done={done.includes(x.id)}
            fav={favorites.includes(x.id)}
            onDone={() => toggle(x.id, "done")}
            onFav={() => toggle(x.id, "fav")}
          />
        )}
      />
    );
  if (active === "weapons")
    return (
      <CardsPage
        title="נשקים וציוד"
        subtitle="איפה מוצאים ומה שווה לקחת קודם"
        icon={<Target />}
        items={weapons}
        render={(x) => (
          <WeaponCard
            item={x}
            done={done.includes(x.id)}
            fav={favorites.includes(x.id)}
            onDone={() => toggle(x.id, "done")}
            onFav={() => toggle(x.id, "fav")}
          />
        )}
      />
    );
  if (active === "enemies")
    return (
      <CardsPage
        title="אויבים"
        subtitle="איך לזהות, ממה להיזהר ואיך להתמודד"
        icon={<Shield />}
        items={enemies}
        render={(x) => <EnemyCard item={x} />}
      />
    );
  if (active === "items")
    return (
      <CardsPage
        title="פריטים ומשאבים"
        subtitle="איפה מוצאים ולמה הם משמשים"
        icon={<Boxes />}
        items={items}
        render={(x) => <ItemCard item={x} />}
      />
    );
  if (active === "walkthrough") return <Walkthrough />;
  if (active === "completion")
    return <CompletionTracker done={done} toggle={toggle} />;
  if (active === "notes") return <Notes notes={notes} setNotes={setNotes} />;
}

function Dashboard({ favorites, done, toggle }) {
  const mustHave = weapons.filter((w) =>
    ["modern-axe", "katana", "rebreather", "keycard", "modern-bow"].includes(
      w.id,
    ),
  );
  return (
    <section className="panel">
      <SectionTitle
        icon={<BookOpen />}
        title="Dashboard"
        subtitle="מה כדאי לעשות עכשיו ומה שווה לעקוב אחריו"
      />
      <div className="dashGrid">
        <div className="missionCard">
          <span>🎯</span>
          <h3>המסלול המומלץ</h3>
          <p>
            Modern Axe → Rebreather → Keycard → Modern Bow → Sinkhole. אל תמהר
            לסוף לפני שיש שריון, אוכל וציוד.
          </p>
        </div>
        <div className="missionCard">
          <span>🏕️</span>
          <h3>בסיס טוב</h3>
          <p>
            מים, Drying Rack, Stick/Rock Holders, מלכודות ו־Bone Armor. בסיס קטן
            וחכם עדיף על ארמון לא מוגן.
          </p>
        </div>
        <div className="missionCard">
          <span>🕳️</span>
          <h3>מערות</h3>
          <p>
            להיכנס עם אור, אוכל, תרופות, שריון וקשת. לסמן מה סיימתם כדי לא לחזור
            סתם.
          </p>
        </div>
      </div>
      <div className="mobileHint">
        <Smartphone />
        <div>
          <b>טיפ למובייל</b>
          <p>
            פתחו את האתר בטלפון ליד המשחק: חיפוש למעלה, תפריט צד, סימון התקדמות
            והערות נשמרים בדפדפן.
          </p>
        </div>
      </div>
      <SectionTitle icon={<Star />} title="ציוד חובה" subtitle="סמן מה מצאתם" />
      <div className="grid cards3">
        {mustHave.map((x) => (
          <WeaponCard
            key={x.id}
            item={x}
            done={done.includes(x.id)}
            fav={favorites.includes(x.id)}
            onDone={() => toggle(x.id, "done")}
            onFav={() => toggle(x.id, "fav")}
          />
        ))}
      </div>
    </section>
  );
}

function SearchResults({ results, favorites, done, onFav, onDone }) {
  return (
    <section className="panel">
      <SectionTitle
        icon={<Search />}
        title="תוצאות חיפוש"
        subtitle={`${results.length} תוצאות`}
      />
      <div className="grid cards3">
        {results.length ? (
          results.map((x) => (
            <GenericCard
              key={x.kind + x.id}
              item={x}
              fav={favorites.includes(x.id)}
              done={done.includes(x.id)}
              onFav={() => onFav(x.id)}
              onDone={() => onDone(x.id)}
            />
          ))
        ) : (
          <Empty text="לא מצאתי. נסה מילה באנגלית או שם אחר." />
        )}
      </div>
    </section>
  );
}

function CardsPage({ title, subtitle, icon, items, render }) {
  return (
    <section className="panel">
      <SectionTitle icon={icon} title={title} subtitle={subtitle} />
      <div className="grid cards3">{items.map(render)}</div>
    </section>
  );
}
function Actions({ fav, done, onFav, onDone }) {
  return (
    <div className="actions">
      <button onClick={onFav} className={fav ? "active" : ""}>
        <Star size={16} /> מועדף
      </button>
      <button onClick={onDone} className={done ? "active done" : ""}>
        <CheckCircle2 size={16} /> סיימתי
      </button>
    </div>
  );
}
function Visual({ icon, label }) {
  return (
    <div className="visualFrame">
      <div className="visualNoise"></div>
      <span>{icon}</span>
      <small>{label || "Game visual"}</small>
    </div>
  );
}
function GenericCard({ item, fav, done, onFav, onDone }) {
  return (
    <article className="card">
      <Visual icon={item.icon || "🌲"} label={item.kind} />
      <span className="badge">{item.kind}</span>
      <h3>{item.name}</h3>
      <p>
        {item.notes ||
          item.tip ||
          item.where ||
          item.location ||
          item.behavior ||
          item.why}
      </p>
      <Actions fav={fav} done={done} onFav={onFav} onDone={onDone} />
    </article>
  );
}
function ItemCard({ item }) {
  return (
    <article className="card">
      <Visual icon={item.icon} label={item.type} />
      <h3>{item.name}</h3>
      <p>
        <b>איפה:</b> {item.where}
      </p>
      <p>
        <b>שימושים:</b> {item.uses.join(", ")}
      </p>
      <p className="tip">{item.tip}</p>
    </article>
  );
}
function WeaponCard({ item, fav, done, onFav, onDone }) {
  return (
    <article className="card">
      <Visual icon={item.icon} label={item.type} />
      <span className="badge">{item.type}</span>
      <h3>{item.name}</h3>
      <p>
        <b>איפה:</b> {item.location}
      </p>
      <div className="statBars">
        <Meter label="Damage" value={item.stats.damage} />
        <Meter label="Speed" value={item.stats.speed} />
        <Meter label="Block" value={item.stats.block} />
      </div>
      <p className="tip">{item.tip}</p>
      {onFav && <Actions fav={fav} done={done} onFav={onFav} onDone={onDone} />}
    </article>
  );
}
function Meter({ label, value }) {
  return (
    <div className="meter">
      <span>{label}</span>
      <i>
        <b style={{ width: `${value * 10}%` }} />
      </i>
      <em>{value}/10</em>
    </div>
  );
}
function EnemyCard({ item }) {
  return (
    <article className="card enemy">
      <Visual icon={item.icon} label="Enemy" />
      <span className="badge danger">Danger {item.danger}/5</span>
      <h3>{item.name}</h3>
      <p>
        <b>איפה:</b> {item.habitat}
      </p>
      <p>
        <b>התנהגות:</b> {item.behavior}
      </p>
      <p>
        <b>איך להתמודד:</b> {item.counter}
      </p>
      <div className="chips">
        {item.weak.split(", ").map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
    </article>
  );
}
function CaveCard({ item, fav, done, onFav, onDone }) {
  return (
    <article className="card cave">
      <Visual icon={item.icon} label={`Difficulty ${item.difficulty}/5`} />
      <span className="badge">קושי {item.difficulty}/5</span>
      <h3>{item.name}</h3>
      <p>
        <b>אזור:</b> {item.biome}
      </p>
      <p>
        <b>Loot:</b> {item.keyItems.join(", ")}
      </p>
      <p>
        <b>אויבים:</b> {item.enemies.join(", ")}
      </p>
      <p>
        <b>ציוד מומלץ:</b> {item.recommended.join(", ")}
      </p>
      <p className="tip">{item.notes}</p>
      <Actions fav={fav} done={done} onFav={onFav} onDone={onDone} />
    </article>
  );
}

function CraftsPage() {
  const [text, setText] = useState("");
  const [cat, setCat] = useState("all");
  const [view, setView] = useLocal("tf-v8-craft-view", "grid");
  const cats = ["all", ...Array.from(new Set(recipes.map((r) => r.category)))];
  const visible = recipes.filter(
    (r) =>
      (cat === "all" || r.category === cat) &&
      (!text ||
        [
          r.name,
          r.result,
          r.category,
          r.location,
          r.notes,
          Object.keys(r.ingredients).join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(text.toLowerCase())),
  );
  return (
    <section className="panel craftsPanel">
      <SectionTitle
        icon={<Grid3X3 />}
        title="Crafts Library"
        subtitle="כל הדברים שאפשר להכין, בלי קשר ל־Build Planner או Inventory Simulator"
        action={
          <div className="viewToggle">
            <button
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
            >
              קוביות
            </button>
            <button
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              רשימה
            </button>
          </div>
        }
      />
      <div className="craftTop">
        <div className="search compact">
          <Search size={18} />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="חפש לפי שם, חומר או תוצאה: Rope, Bow, Armor..."
          />
        </div>
        <div className="pillFilters">
          {cats.map((c) => (
            <button
              key={c}
              className={cat === c ? "active" : ""}
              onClick={() => setCat(c)}
            >
              {c === "all" ? "הכל" : c}
            </button>
          ))}
        </div>
      </div>
      <div className={view === "grid" ? "grid cards3" : "craftList"}>
        {visible.map((r) =>
          view === "grid" ? (
            <CraftCard key={r.id} recipe={r} />
          ) : (
            <CraftRow key={r.id} recipe={r} />
          ),
        )}
      </div>
    </section>
  );
}
function CraftCard({ recipe }) {
  return (
    <article className="card craftCard">
      <Visual icon={recipe.icon} label={recipe.category} />
      <span className="badge">{recipe.category}</span>
      <h3>{recipe.name}</h3>
      <p>
        <b>יוצר:</b> {recipe.result}
      </p>
      <div className="recipeLine">
        {Object.entries(recipe.ingredients).map(([n, q]) => (
          <span key={n}>
            {q}× {n}
          </span>
        ))}
      </div>
      <p className="tip">{recipe.notes}</p>
    </article>
  );
}
function CraftRow({ recipe }) {
  return (
    <article className="craftRow">
      <span className="rowIcon">{recipe.icon}</span>
      <div>
        <b>{recipe.name}</b>
        <small>
          {recipe.category} • {recipe.result}
        </small>
      </div>
      <div className="recipeLine">
        {Object.entries(recipe.ingredients).map(([n, q]) => (
          <span key={n}>
            {q}× {n}
          </span>
        ))}
      </div>
    </article>
  );
}

function InventorySimulator() {
  const [inv, setInv] = useLocal("tf-v7-inventory", {});
  const [filter, setFilter] = useState("");
  const craftable = recipes.filter((r) => isCraftable(r.ingredients, inv));
  const visible = recipes.filter(
    (r) =>
      !filter ||
      [r.name, r.category, Object.keys(r.ingredients).join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(filter.toLowerCase()),
  );
  const add = (name, delta) =>
    setInv((v) => ({ ...v, [name]: Math.max(0, (v[name] || 0) + delta) }));
  const reset = () => setInv({});
  return (
    <section className="panel">
      <SectionTitle
        icon={<Backpack />}
        title="Inventory Simulator"
        subtitle="הכנס מה יש לך בתיק והאתר יגיד מה אפשר להכין ומה חסר"
        action={
          <button className="ghost" onClick={reset}>
            <RotateCcw size={16} /> איפוס
          </button>
        }
      />
      <div className="simLayout">
        <div className="inventoryBox">
          <h3>מה יש לך?</h3>
          <div className="invGrid">
            {quickInventory.map((name) => (
              <div className="counter" key={name}>
                <span>{name}</span>
                <div>
                  <button onClick={() => add(name, -1)}>
                    <Minus size={14} />
                  </button>
                  <b>{inv[name] || 0}</b>
                  <button onClick={() => add(name, 1)}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="craftableBox">
          <h3>אפשר להכין עכשיו</h3>
          {craftable.length ? (
            craftable.map((r) => <MiniRecipe key={r.id} r={r} ok />)
          ) : (
            <Empty text="עדיין אין מספיק חומרים. נסה להוסיף Sticks, Cloth, Rope או Feathers." />
          )}
        </div>
      </div>
      <SectionTitle
        icon={<Search />}
        title="בדיקת מתכונים"
        subtitle="ראה לכל מתכון בדיוק מה חסר"
        action={
          <input
            className="smallInput"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="חפש מתכון/חומר"
          />
        }
      />
      <div className="grid cards3">
        {visible.map((r) => (
          <RecipeCheck key={r.id} recipe={r} inv={inv} />
        ))}
      </div>
    </section>
  );
}
function MiniRecipe({ r }) {
  return (
    <div className="miniRecipe">
      <span>{r.icon}</span>
      <div>
        <b>{r.name}</b>
        <small>{r.result}</small>
      </div>
      <i>Ready</i>
    </div>
  );
}
function RecipeCheck({ recipe, inv }) {
  const miss = missingFor(recipe.ingredients, inv);
  return (
    <article className={`card recipe ${miss.length ? "" : "ready"}`}>
      <Visual icon={recipe.icon} label={recipe.category} />
      <h3>{recipe.name}</h3>
      <div className="chips">
        {Object.entries(recipe.ingredients).map(([n, q]) => (
          <span key={n} className={(inv[n] || 0) >= q ? "has" : "miss"}>
            {n}: {inv[n] || 0}/{q}
          </span>
        ))}
      </div>
      {miss.length ? (
        <p>
          <b>חסר:</b> {miss.map((m) => `${m.missing} ${m.name}`).join(", ")}
        </p>
      ) : (
        <p>
          <b>מוכן:</b> יש לך את כל החומרים.
        </p>
      )}
      <p className="tip">{recipe.notes}</p>
    </article>
  );
}

function BuildPlanner() {
  const [selected, setSelected] = useState(buildings[0].id);
  const [collected, setCollected] = useLocal("tf-v7-build-progress", {});
  const building = buildings.find((b) => b.id === selected) || buildings[0];
  const setAmount = (name, delta) =>
    setCollected((v) => ({
      ...v,
      [building.id]: {
        ...(v[building.id] || {}),
        [name]: Math.max(0, ((v[building.id] || {})[name] || 0) + delta),
      },
    }));
  const progress = Object.entries(building.materials).reduce(
    (acc, [n, q]) => acc + Math.min(q, (collected[building.id] || {})[n] || 0),
    0,
  );
  const total = Object.values(building.materials).reduce((a, b) => a + b, 0);
  return (
    <section className="panel">
      <SectionTitle
        icon={<Hammer />}
        title="Build Planner"
        subtitle="בחר מבנה וסמן כמה חומרים כבר אספת"
      />
      <div className="plannerLayout">
        <div className="buildList">
          {buildings.map((b) => (
            <button
              key={b.id}
              className={selected === b.id ? "active" : ""}
              onClick={() => setSelected(b.id)}
            >
              <span>{b.icon}</span>
              <div>
                <b>{b.name}</b>
                <small>{b.group}</small>
              </div>
            </button>
          ))}
        </div>
        <div className="plannerCard">
          <Visual icon={building.icon} label={building.group} />
          <h2>{building.name}</h2>
          <p>{building.why}</p>
          <div className="bar big">
            <i style={{ width: `${Math.round((progress / total) * 100)}%` }} />
          </div>
          <p>
            {progress}/{total} חומרים נאספו
          </p>
          <div className="materials">
            {Object.entries(building.materials).map(([n, q]) => (
              <div className="counter material" key={n}>
                <span>{n}</span>
                <div>
                  <button onClick={() => setAmount(n, -1)}>
                    <Minus size={14} />
                  </button>
                  <b>
                    {(collected[building.id] || {})[n] || 0}/{q}
                  </b>
                  <button onClick={() => setAmount(n, 1)}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(mapMarkers[0]);
  const [q, setQ] = useState("");
  const [customMap, setCustomMap] = useLocal("tf-v9-custom-map", "");
  const types = ["all", "cave", "poi", "danger", "safe", "story"];
  const visible = mapMarkers.filter(
    (m) =>
      (filter === "all" || m.type === filter) &&
      (!q ||
        [m.title, m.description, m.loot.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())),
  );
  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCustomMap(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <section className="panel mapPanel v9map">
      <SectionTitle
        icon={<MapPin />}
        title="Map Hub"
        subtitle="המפה הכי נכונה כרגע: אפשר להעלות תמונת מפה משלך, והסימונים יופיעו עליה. בלי תמונה — יש Map Hub שימושי ונקי."
        action={
          <label className="uploadMap">
            <input type="file" accept="image/*" onChange={onFile} /> העלה תמונת
            מפה
          </label>
        }
      />
      <div className="mapToolbar improved">
        <div className="pillFilters">
          {types.map((t) => (
            <button
              key={t}
              className={filter === t ? "active" : ""}
              onClick={() => setFilter(t)}
            >
              {t === "all" ? "הכל" : labelType(t)}
            </button>
          ))}
        </div>
        <div className="mapControls wide">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="חפש Katana / Keycard / Rebreather / Cave"
          />
        </div>
        {customMap && (
          <button className="ghost" onClick={() => setCustomMap("")}>
            נקה תמונה
          </button>
        )}
      </div>
      <div className="mapLayout improved">
        <div className="realMapShell">
          <div
            className={customMap ? "realMap hasImage" : "realMap"}
            style={
              customMap ? { backgroundImage: `url(${customMap})` } : undefined
            }
          >
            {!customMap && (
              <div className="mapFallback">
                <b>אין תמונת מפה עדיין</b>
                <p>
                  כדי שזה יראה באמת טוב, שמור תמונת מפה חוקית/אישית והעלה אותה
                  כאן. הסימונים יישמרו מקומית בדפדפן.
                </p>
              </div>
            )}
            {visible.map((m) => (
              <button
                key={m.id}
                className={`marker improved ${m.type} ${selected.id === m.id ? "active" : ""}`}
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
                onClick={() => setSelected(m)}
                title={m.title}
              >
                <span>{m.icon}</span>
                <em>{m.title.replace("Cave ", "C")}</em>
              </button>
            ))}
          </div>
        </div>
        <div className="mapInfo improved">
          <h3>
            {selected.icon} {selected.title}
          </h3>
          <span className={`badge ${selected.type}`}>
            {labelType(selected.type)} • סכנה {selected.danger}/5
          </span>
          <p>{selected.description}</p>
          <div className="dangerMeter">
            <span>רמת סכנה</span>
            <i>
              <b style={{ width: `${selected.danger * 20}%` }}></b>
            </i>
          </div>
          <h4>מה יש שם</h4>
          <div className="chips">
            {selected.loot.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <h4>מיקומים</h4>
          <div className="markerList improved">
            {visible.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m)}
                className={selected.id === m.id ? "active" : ""}
              >
                <span>{m.icon}</span>
                <div>
                  <b>{m.title}</b>
                  <small>
                    {labelType(m.type)} • {m.loot.slice(0, 3).join(", ")}
                  </small>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function labelType(t) {
  return (
    {
      cave: "מערות",
      poi: "נקודות עניין",
      danger: "סכנות",
      safe: "אזורים נוחים",
      story: "סיפור",
      all: "הכל",
    }[t] || t
  );
}
function typeIcon(t) {
  return (
    { cave: "🕳️", poi: "📍", danger: "⚠️", safe: "🌿", story: "🏁" }[t] || "🗺️"
  );
}
function LayersIcon() {
  return <ListChecks size={16} />;
}

function Walkthrough() {
  return (
    <section className="panel">
      <SectionTitle
        icon={<Route />}
        title="Walkthrough"
        subtitle="מסלול התקדמות פשוט לך ולחבר"
      />
      <div className="timeline">
        {walkthrough.map((w) => (
          <div className="step" key={w.step}>
            <span>{w.step}</span>
            <div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Notes({ notes, setNotes }) {
  const targets = [...caves, ...weapons].slice(0, 20);
  return (
    <section className="panel">
      <SectionTitle
        icon={<StickyNote />}
        title="Notes"
        subtitle="הערות אישיות שנשמרות בדפדפן"
      />
      <div className="grid cards2">
        {targets.map((t) => (
          <article className="card" key={t.id}>
            <h3>
              {t.icon} {t.name}
            </h3>
            <textarea
              value={notes[t.id] || ""}
              onChange={(e) => setNotes({ ...notes, [t.id]: e.target.value })}
              placeholder="כתוב הערה אישית... למשל: הגענו עם דניאל, נשאר loot, מסוכן פה"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
function CompletionTracker({ done, toggle }) {
  const allIds = new Set([
    ...recipes.map((x) => x.id),
    ...weapons.map((x) => x.id),
    ...caves.map((x) => x.id),
    ...buildings.map((x) => x.id),
  ]);
  const percent = Math.round(
    (done.filter((id) => allIds.has(id)).length / Math.max(1, allIds.size)) *
      100,
  );
  return (
    <section className="panel">
      <SectionTitle
        icon={<Target />}
        title="100% Tracker"
        subtitle="רשימת התקדמות אישית לך ולחבר. הכל נשמר לוקאלית."
      />
      <div className="completionHero">
        <b>{percent}%</b>
        <div>
          <h3>Game Companion Progress</h3>
          <p>
            סמן ציוד, מערות ובניות. זה לא חייב להיות Achievement רשמי — זה מדד
            שימושי להתקדמות שלכם.
          </p>
          <div className="bar big">
            <i style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
      <div className="grid cards2">
        {completionGroups.map((g) => {
          const hit = g.ids.filter((id) => done.includes(id)).length;
          return (
            <article className="card" key={g.id}>
              <h3>🏆 {g.title}</h3>
              <p>
                {hit}/{g.ids.length} הושלמו
              </p>
              <div className="checkGrid">
                {g.ids.map((id) => (
                  <button
                    key={id}
                    className={done.includes(id) ? "checked" : ""}
                    onClick={() => toggle(id, "done")}
                  >
                    {done.includes(id) ? "✓" : "○"} {labelById(id)}
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
function labelById(id) {
  const src = [...recipes, ...weapons, ...caves, ...buildings].find(
    (x) => x.id === id,
  );
  return src?.name || id;
}

const adventureSteps = [
  {
    id: "start",
    title: "Crash & Loot",
    goal: "פתח מזוודות, קח Cloth, Sticks, Rocks, אוכל ותרופות.",
    needs: ["Cloth", "Sticks", "Rocks"],
    unlock: "בסיס ראשוני",
  },
  {
    id: "base",
    title: "Safe Mini Base",
    goal: "בנה Shelter, Fire, Water Collector, Drying Rack ו־Holders.",
    needs: ["Logs", "Sticks", "Rocks"],
    unlock: "יכולת לשרוד כמה ימים",
  },
  {
    id: "bow",
    title: "Bow & Armor",
    goal: "הכן Crafted Bow, חצים ו־Bone Armor לפני כניסה למערות.",
    needs: ["Crafted Bow", "Bone Armor", "Arrows"],
    unlock: "קרבות בטוחים יותר",
  },
  {
    id: "axe",
    title: "Modern Axe Run",
    goal: "להגיע ל־Cave 2/אזור הגרזן, לקחת Modern Axe ו־Loot.",
    needs: ["Torch", "Armor", "Food"],
    unlock: "כריתת עצים וקרבות טובים יותר",
  },
  {
    id: "rebreather",
    title: "Rebreather",
    goal: "להשיג Rebreather כדי לפתוח מסלולים תת־מימיים.",
    needs: ["Light", "Armor", "Meds"],
    unlock: "מעברים חשובים במשחק",
  },
  {
    id: "keycard",
    title: "Keycard & Story Items",
    goal: "לאסוף Keycard וציוד סיפור לפני ירידה לסוף.",
    needs: ["Rebreather", "Modern Axe", "Armor"],
    unlock: "פתיחת המסלול לסיום",
  },
  {
    id: "final",
    title: "Sinkhole / Endgame",
    goal: "להגיע מוכנים עם אוכל, Armor, נשק טוב ו־save.",
    needs: ["Keycard", "Rebreather", "Armor"],
    unlock: "סיום המשחק",
  },
];
const tips = [
  {
    level: "Beginner",
    title: "לא לבנות ענק ביום הראשון",
    text: "בסיס קטן עם מים, אוכל ואחסון עדיף על מבצר לא מוגן.",
  },
  {
    level: "Beginner",
    title: "Birdhouse מוקדם",
    text: "נותן Feathers קבועים לחצים, וזה משנה את כל ההתחלה.",
  },
  {
    level: "Intermediate",
    title: "שרוף גופות לעצמות",
    text: "Bone Armor הוא אחד השדרוגים הכי משתלמים לפני מערות.",
  },
  {
    level: "Intermediate",
    title: "אל תיכנס למערה בלי יציאה",
    text: "שמור לפני, קח אוכל, meds, אור, שריון וחצים.",
  },
  {
    level: "Advanced",
    title: "תכנן מסלול Loot",
    text: "Katana/Modern Axe/Rebreather/Keycard הם צמתים חשובים, לא סתם פריטים.",
  },
  {
    level: "Expert",
    title: "אל תבזבז פצצות",
    text: "פצצות במשחק יקרות להכנה; שמור אותן לפתיחת מקומות/קרבות קשים.",
  },
];
const timelineData = [
  {
    day: "Day 1",
    title: "מים, אש, מחסה",
    text: "Loot מהמטוס, מזוודות, מחסה זמני, Fire, אוכל ו־Sticks/Cloth.",
  },
  {
    day: "Days 2-3",
    title: "בסיס קטן",
    text: "Water Collector, Drying Rack, holders, קשת וחצים.",
  },
  {
    day: "Days 4-7",
    title: "ציוד קרב",
    text: "Bone Armor, Molotovs במשחק, Repair Tool, מלכודות בסיסיות.",
  },
  {
    day: "Week 2",
    title: "מערות ראשונות",
    text: "Modern Axe, Katana, Flashlight ו־Loot שימושי.",
  },
  {
    day: "Mid Game",
    title: "Story Gear",
    text: "Rebreather, Keycard, Modern Bow, Chainsaw לפי הצורך.",
  },
  {
    day: "Endgame",
    title: "סיום",
    text: "Sinkhole/מעבדה עם ציוד, שריון, אוכל, תרופות ו־save.",
  },
];

function AdventureMode({ done, toggle, profile }) {
  const current =
    adventureSteps.find((s) => !done.includes("adv-" + s.id)) ||
    adventureSteps[adventureSteps.length - 1];
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<Route />}
        title="Adventure Mode"
        subtitle={`מסלול מלווה משחק עבור ${profile}. מסמנים שלבים והאתר אומר מה הבא.`}
      />
      <div className="adventureHero">
        <div>
          <span className="bigIcon">🎮</span>
          <h2>השלב הבא: {current.title}</h2>
          <p>{current.goal}</p>
          <div className="chips">
            {current.needs.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
        <button
          className="primary"
          onClick={() => toggle("adv-" + current.id, "done")}
        >
          סמן שהושלם
        </button>
      </div>
      <div className="adventureRail">
        {adventureSteps.map((s, i) => (
          <article
            key={s.id}
            className={done.includes("adv-" + s.id) ? "complete" : ""}
          >
            <span>{done.includes("adv-" + s.id) ? "✓" : i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.goal}</p>
              <small>פותח: {s.unlock}</small>
            </div>
            <button onClick={() => toggle("adv-" + s.id, "done")}>
              {done.includes("adv-" + s.id) ? "בטל" : "סמן"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
function SmartSearch() {
  const [q, setQ] = useState("");
  const pool = [
    ...items.map((x) => ({ ...x, kind: "Item" })),
    ...recipes.map((x) => ({
      ...x,
      kind: "Craft",
      where: x.location,
      tip: x.notes,
      uses: Object.keys(x.ingredients),
    })),
    ...weapons.map((x) => ({
      ...x,
      kind: "Weapon",
      where: x.location,
      tip: x.tip,
      uses: x.related || [],
    })),
    ...caves.map((x) => ({
      ...x,
      kind: "Cave",
      where: x.biome,
      tip: x.notes,
      uses: x.keyItems,
    })),
    ...enemies.map((x) => ({
      ...x,
      kind: "Enemy",
      where: x.habitat,
      tip: x.counter,
      uses: [x.weak],
    })),
  ];
  const res = q
    ? pool
        .filter((x) =>
          JSON.stringify(x).toLowerCase().includes(q.toLowerCase()),
        )
        .slice(0, 24)
    : [];
  const suggestions = [
    "rope",
    "katana",
    "water",
    "rebreather",
    "bone armor",
    "Virginia",
    "keycard",
    "modern axe",
  ];
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<Search />}
        title="Smart Search"
        subtitle="חיפוש שמחזיר פריטים, מתכונים, מערות, אויבים ונשקים ביחד"
      />
      <div className="smartBox">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="כתוב למשל: I need water / rope / katana / cave"
        />
        <div className="chips">
          {suggestions.map((s) => (
            <button key={s} onClick={() => setQ(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>
      {!q && (
        <div className="aiHint">
          <h3>דוגמאות</h3>
          <p>
            <b>I need water</b> → Water Collector, Waterskin, טיפים לבסיס.
          </p>
          <p>
            <b>Katana</b> → נשק, מערה קשורה, אויבים וציוד מומלץ.
          </p>
        </div>
      )}
      <div className="grid cards3">
        {res.map((x, i) => (
          <article className="card" key={x.kind + x.id + i}>
            <Visual icon={x.icon || "🌲"} label={x.kind} />
            <span className="badge">{x.kind}</span>
            <h3>{x.name}</h3>
            <p>
              <b>איפה:</b> {x.where || x.location || "לפי קטגוריה"}
            </p>
            <p>{x.tip || x.notes || x.behavior}</p>
            <div className="chips">
              {(x.uses || []).slice(0, 6).map((u) => (
                <span key={u}>{u}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function CraftTree() {
  const materials = [
    "Cloth",
    "Rope",
    "Sticks",
    "Bones",
    "Booze",
    "Rabbit Fur",
    "Feathers",
  ];
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<Grid3X3 />}
        title="Craft Tree"
        subtitle="עץ קשרים: חומר → מה אפשר להכין ממנו"
      />
      <div className="treeGrid">
        {materials.map((m) => {
          const rs = recipes.filter((r) =>
            Object.keys(r.ingredients).includes(m),
          );
          return (
            <article className="treeCard" key={m}>
              <h3>{m}</h3>
              {rs.map((r) => (
                <div className="branch" key={r.id}>
                  <span>{r.icon}</span>
                  <div>
                    <b>{r.name}</b>
                    <small>
                      {Object.entries(r.ingredients)
                        .map(([n, q]) => `${q}× ${n}`)
                        .join(" • ")}
                    </small>
                  </div>
                </div>
              ))}
            </article>
          );
        })}
      </div>
    </section>
  );
}
function CompareLab() {
  const [a, setA] = useState(weapons[0]?.id);
  const [b, setB] = useState(weapons[1]?.id);
  const wa = weapons.find((w) => w.id === a) || weapons[0],
    wb = weapons.find((w) => w.id === b) || weapons[1] || weapons[0];
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<Target />}
        title="Compare Lab"
        subtitle="השוואה מהירה בין נשקים וציוד"
      />
      <div className="comparePick">
        <select value={a} onChange={(e) => setA(e.target.value)}>
          {weapons.map((w) => (
            <option key={w.id} value={w.id}>
              {w.name}
            </option>
          ))}
        </select>
        <select value={b} onChange={(e) => setB(e.target.value)}>
          {weapons.map((w) => (
            <option key={w.id} value={w.id}>
              {w.name}
            </option>
          ))}
        </select>
      </div>
      <div className="compareGrid">
        <WeaponCompare item={wa} />
        <WeaponCompare item={wb} />
      </div>
    </section>
  );
}
function WeaponCompare({ item }) {
  return (
    <article className="card compareCard">
      <Visual icon={item.icon} label={item.type} />
      <h3>{item.name}</h3>
      <p>{item.location}</p>
      <Meter label="Damage" value={item.stats.damage} />
      <Meter label="Speed" value={item.stats.speed} />
      <Meter label="Block" value={item.stats.block} />
      <p className="tip">{item.tip}</p>
    </article>
  );
}
function TipsHub() {
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<BookOpen />}
        title="Tips Hub"
        subtitle="טיפים לפי רמה, כדי שלא תחפש כל פעם מחדש"
      />
      <div className="grid cards3">
        {tips.map((t) => (
          <article className="card tipCard" key={t.title}>
            <span className="badge">{t.level}</span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
function SurvivalTimeline() {
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<Route />}
        title="Survival Timeline"
        subtitle="מה לעשות בכל שלב במשחק"
      />
      <div className="timeline pro">
        {timelineData.map((t, i) => (
          <div className="step" key={t.day}>
            <span>{i + 1}</span>
            <div>
              <h3>
                {t.day}: {t.title}
              </h3>
              <p>{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function ProfilesManager({ profile, setProfile }) {
  const profiles = ["Solo", "Friends", "Hard Mode", "Creative"];
  return (
    <section className="panel v10Page">
      <SectionTitle
        icon={<StickyNote />}
        title="Save Profiles"
        subtitle="בחירת פרופיל משחק. כרגע זה מחליף הקשר לתצוגה; בהמשך אפשר להפריד שמירות מלאות."
      />
      <div className="profileGrid">
        {profiles.map((p) => (
          <button
            className={profile === p ? "active" : ""}
            key={p}
            onClick={() => setProfile(p)}
          >
            <span>
              {p === "Solo"
                ? "🧍"
                : p === "Friends"
                  ? "👥"
                  : p === "Hard Mode"
                    ? "💀"
                    : "🛠️"}
            </span>
            <b>{p}</b>
            <small>{profile === p ? "פעיל" : "לחץ להפעלה"}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
function ThemeSettings({ theme, setTheme }) {
  const themes = [
    ["forest", "Forest"],
    ["night", "Night"],
    ["blood", "Blood"],
    ["winter", "Winter"],
    ["minimal", "Minimal"],
  ];
  return (
    <section className="panel v10Page">
      <SectionTitle icon={<Eye />} title="Themes" subtitle="בחר אווירה לאתר" />
      <div className="themeGrid">
        {themes.map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTheme(id)}
            className={`themeTile ${id} ${theme === id ? "active" : ""}`}
          >
            <span>{label}</span>
            <small>{theme === id ? "Selected" : "Apply"}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function Empty({ text }) {
  return (
    <div className="empty">
      <Eye />
      <p>{text}</p>
    </div>
  );
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("/sw.js").catch(() => {}),
  );
}
createRoot(document.getElementById("root")).render(<App />);
