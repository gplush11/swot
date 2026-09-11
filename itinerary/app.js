const DAYS = [
  {
    id: "nov11",
    num: "11",
    dow: "Wed",
    month: "Nov",
    title: "Veterans Day — leave Indianapolis",
    where: "IND → overnight to Europe",
    chips: [{ t: "Travel day", k: "fly" }],
    beats: [
      ["Afternoon", "No nonstop IND–CPH. Typical one-stops: Toronto (Air Canada), Detroit/Atlanta (Delta), Chicago or Newark (United), or Amsterdam (KLM). Block 12–17 hours door to door."],
      ["Evening", "You will not sleep near Tivoli tonight. Copenhagen is six hours ahead, and the Atlantic crossing lands the next morning. Pack the DSB/metro app and a layer for a dark 4pm arrival tomorrow."],
      ["Book", "Search Google Flights IND → CPH, departing 11 Nov, one adult, 1 stop. Prefer a connection that lands CPH before noon on Thursday so the first hotel night is usable."]
    ]
  },
  {
    id: "nov12",
    num: "12",
    dow: "Thu",
    month: "Nov",
    title: "Land in Copenhagen, sleep beside Tivoli",
    where: "CPH Airport → København H → Vesterbro",
    chips: [{ t: "Tivoli gardens shut", k: "shut" }, { t: "Food Hall open", k: "open" }],
    beats: [
      ["Morning", "Metro M2 or the regional train from CPH to København H is about 15 minutes, trains every ~10 minutes, ~36 DKK. Hotel is a short walk from the station."],
      ["Check-in", "Andersen Boutique Hotel, Helgolandsgade 12 (or Absalon across the street / Villa Copenhagen if you want the building that faces Tivoli)."],
      ["Afternoon", "The gardens are closed between Halloween (ended 1 Nov) and Christmas (opens tomorrow). Do Glyptoteket next door, Tivoli Food Hall from the street, and a Vesterbro walk through Kødbyen."],
      ["Night", "Early night. Tomorrow is opening night of Christmas in Tivoli and you move into Nimb."]
    ],
    note: "This is the “near Tivoli that evening” night, shifted one calendar day because the Indianapolis departure is an overnight transatlantic."
  },
  {
    id: "nov13",
    num: "13",
    dow: "Fri",
    month: "Nov",
    title: "Christmas in Tivoli — sleep on the grounds",
    where: "Nimb Hotel, inside Tivoli Gardens",
    chips: [{ t: "Tivoli Christmas opens", k: "open" }],
    beats: [
      ["12:00", "Checkout from Andersen. Store bags at Nimb if check-in is after 15:00."],
      ["Afternoon", "Tivoli Christmas season is 13 Nov 2026 – 3 Jan 2027. Gløgg, æbleskiver, stalls, and the lights coming on around 16:30. Nimb stays include garden entry and ride tickets while the park is open."],
      ["Evening", "Stay on the grounds: Nimb, Bernstorffsgade 5. If Nimb is sold out, Tivoli Hotel & Congress Center is the branded backup — not inside the fence, 10–15 minutes on foot."],
      ["Night", "You are sleeping in the palace that faces the gardens on opening night. That is the Friday you asked for."]
    ]
  },
  {
    id: "nov14",
    num: "14",
    dow: "Sat",
    month: "Nov",
    title: "West to Billund, stay at LEGOLAND",
    where: "København H → Vejle → Hotel LEGOLAND",
    chips: [{ t: "Park closed", k: "shut" }, { t: "LEGO House 10–17", k: "open" }],
    beats: [
      ["Morning", "Checkout Nimb by noon. InterCity from København H to Vejle (~2h15), then bus 43 / 912X to Billund (~35–40 min). FlixBus CPH–Billund is ~3h20 if you want one ticket. Rejseplanen.dk for live connections."],
      ["Afternoon", "Check in at Hotel LEGOLAND, Aastvej 10. LEGOLAND park itself is closed until Christmas (28 Nov–31 Dec). Walk to LEGO House (Ole Kirks Plads 1) — Saturday hours 10:00–17:00, store until 18:00."],
      ["Evening", "Dinner at the hotel or in Billund town. Confirm the hotel is actually receiving guests this weekend; Christmas stay packages are advertised from 26 November. Lalandia is the year-round fallback."]
    ]
  },
  {
    id: "nov15",
    num: "15",
    dow: "Sun",
    month: "Nov",
    title: "LEGO day, then west to Skjern",
    where: "Billund → Skjern St.",
    chips: [{ t: "LEGOLAND shut", k: "shut" }, { t: "LEGO House 10–16", k: "open" }],
    beats: [
      ["10:00", "LEGO House Experience Zones 10:00–16:00. Book MINI CHEF if you want the brick-built restaurant (tables from 11:00). This is the Sunday park day, adjusted for the winter close."],
      ["15:00", "Billund to Skjern is ~50 km / 45–55 minutes by car or taxi — the sane hop. Public: bus from LEGOLAND toward Vejle or Give, then train via Herning to Skjern St. (closer to 1½–2½ hours). Rejseplanen.dk for the day’s connections."],
      ["Evening", "Four nights start at Hotel Skjern, Bredgade 58, across from the station. Book online for 24/7 self check-in — Sunday reception is only 10:00–12:00."]
    ],
    note: "If the outdoor park is the whole point, do not come this week. Christmas at LEGOLAND Billund is 28 Nov–31 Dec 2026."
  },
  {
    id: "nov16",
    num: "16",
    dow: "Mon",
    month: "Nov",
    title: "Skjern — the river delta",
    where: "Skjern Enge · Ringkøbing Fjord",
    chips: [{ t: "Base", k: "open" }],
    beats: [
      ["Morning", "Skjern Enge is Denmark’s only river delta, ten minutes out of town. November is the bird month: ducks, geese, swans, and a real chance of white-tailed eagle from the towers at Hestholm and Pumpestation Nord."],
      ["Afternoon", "Trails can be wet. Waterproof boots, short daylight (sunset ~16:20). Bus 69 toward Lønborg if you are not driving; a taxi for the towers is simpler."],
      ["Night", "Back at Hotel Skjern. November west Jutland is wind and early dark — plan indoor evenings."]
    ]
  },
  {
    id: "nov17",
    num: "17",
    dow: "Tue",
    month: "Nov",
    title: "Skjern — whisky or the North Sea",
    where: "Stauning or Hvide Sande",
    chips: [{ t: "Base", k: "open" }],
    beats: [
      ["Day", "Stauning Whisky is the local distillery (peat, west-coast barley). Hotel Skjern flags their tours. Book ahead."],
      ["Alt", "Hvide Sande and the North Sea dunes are ~35 minutes west, on Ringkøbing Fjord. Wind, harbour, and a long beach walk if the weather allows."],
      ["Town", "Skjern itself is small: Bredgade, the Holger Danske statue, and the river. A four-night stay here is for the landscape, not nightlife."]
    ]
  },
  {
    id: "nov18",
    num: "18",
    dow: "Wed",
    month: "Nov",
    title: "Last full day in Skjern",
    where: "Skjern",
    chips: [{ t: "Base", k: "open" }],
    beats: [
      ["Day", "Whatever you skipped — Enge, Ringkøbing town, or a slow café day. Pack tonight. Thursday is a long rail day."],
      ["Night", "Fourth and final night in Skjern. Checkout Thursday morning; first useful trains toward Copenhagen leave Skjern St. from about 05:17."]
    ]
  },
  {
    id: "nov19",
    num: "19",
    dow: "Thu",
    month: "Nov",
    title: "Skjern to CPH, fly to Austria",
    where: "Skjern St. → København H → CPH → VIE (or SZG / INN)",
    chips: [{ t: "Travel day", k: "fly" }],
    beats: [
      ["Morning", "No direct train. Typical: Skjern St. → Esbjerg (or Herning) → København H. Fastest about 4h35, often 5h+. Hotel is opposite the station, so leave with the train, not a taxi buffer."],
      ["Airport", "Metro from København H to CPH, ~15 minutes. You asked to fly out of Copenhagen Airport, not Billund — even though BLL is closer to Skjern."],
      ["Air", "Vienna (VIE) is the default: nonstop ~1h40, several daily on Austrian (typical banks around 09:40, 17:45, 20:00), plus SAS and Ryanair. Salzburg and Innsbruck are one-stop alternatives if that is the Austria you mean."],
      ["Aim", "A 17:45-ish CPH departure needs you on a Skjern train by ~09:00. A morning Vienna flight means the 05:17. Do not book a 09:40 CPH takeoff unless you like that alarm."]
    ]
  }
];

const CHECKS = [
  "IND → CPH flight, 11 Nov, land CPH 12 Nov before noon if possible",
  "Andersen / Absalon / Villa Copenhagen — 1 night, 12 Nov",
  "Nimb (or Tivoli Hotel) — 1 night, 13 Nov",
  "Tivoli Christmas tickets if not staying at Nimb",
  "Hotel LEGOLAND — 1 night, 14 Nov (or Lalandia if the hotel is closed)",
  "LEGO House tickets, 15 Nov (and 14 Nov if you arrive in time)",
  "Hotel Skjern — 4 nights, 15–19 Nov (opposite the station)",
  "DSB / Rejseplanen: CPH → Billund 14 Nov, Billund → Skjern 15 Nov, Skjern → CPH 19 Nov",
  "CPH → Austria flight, 19 Nov (VIE unless you name another city)"
];

function chipClass(k) {
  if (k === "open") return "chip chip--open";
  if (k === "shut") return "chip chip--shut";
  return "chip chip--fly";
}

function renderDays() {
  const nav = document.getElementById("day-nav");
  const main = document.getElementById("days");
  nav.innerHTML = DAYS.map((d) => `
    <li><a href="#${d.id}" data-day="${d.id}">
      <small>${d.dow}</small>
      <strong>${d.num}</strong>
    </a></li>
  `).join("");
  main.innerHTML = DAYS.map((d) => `
    <article class="day" id="${d.id}">
      <div class="day__date">
        <span class="num">${d.num}</span>
        <span class="dow">${d.dow} ${d.month}</span>
        <div class="day__chips">${d.chips.map((c) => `<span class="${chipClass(c.k)}">${c.t}</span>`).join("")}</div>
      </div>
      <div>
        <h3>${d.title}</h3>
        <p class="where">${d.where}</p>
        <ul class="beats">
          ${d.beats.map(([when, text]) => `<li><time>${when}</time><span>${text}</span></li>`).join("")}
        </ul>
        ${d.note ? `<p class="note">${d.note}</p>` : ""}
      </div>
    </article>
  `).join("");
}

function renderChecks() {
  const saved = JSON.parse(localStorage.getItem("denmark-folio-checks-v2") || "{}");
  const ul = document.getElementById("checks");
  ul.innerHTML = CHECKS.map((label, i) => `
    <li>
      <label>
        <input type="checkbox" data-i="${i}" ${saved[i] ? "checked" : ""} />
        <span>${label}</span>
      </label>
    </li>
  `).join("");
  ul.addEventListener("change", (e) => {
    const box = e.target.closest("input");
    if (!box) return;
    const next = JSON.parse(localStorage.getItem("denmark-folio-checks-v2") || "{}");
    next[box.dataset.i] = box.checked;
    localStorage.setItem("denmark-folio-checks-v2", JSON.stringify(next));
  });
}

function tickCountdown() {
  const el = document.getElementById("countdown");
  const start = new Date("2026-11-11T12:00:00-05:00");
  const now = new Date();
  const ms = start - now;
  if (ms <= 0) {
    el.textContent = "In motion";
    return;
  }
  const days = Math.floor(ms / 86400000);
  el.textContent = days === 1 ? "1 day" : `${days} days`;
}

function nextDate(yyyymmdd) {
  const d = new Date(Date.UTC(+yyyymmdd.slice(0, 4), +yyyymmdd.slice(4, 6) - 1, +yyyymmdd.slice(6, 8) + 1));
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

function ics() {
  const events = [
    ["20261111", "Leave Indianapolis for Copenhagen"],
    ["20261112", "Arrive CPH · Andersen Boutique near Tivoli"],
    ["20261113", "Nimb Hotel · Tivoli Christmas opens"],
    ["20261114", "Travel to Billund · Hotel LEGOLAND"],
    ["20261115", "LEGO House · move to Skjern"],
    ["20261116", "Skjern Enge / Ringkøbing Fjord"],
    ["20261117", "Skjern · Stauning or Hvide Sande"],
    ["20261118", "Last full day Skjern"],
    ["20261119", "Skjern → CPH → Austria"]
  ];
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const body = events.map(([day, summary], i) => [
    "BEGIN:VEVENT",
    `UID:denmark-folio-${day}-${i}@itinerary`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${day}`,
    `DTEND;VALUE=DATE:${nextDate(day)}`,
    `SUMMARY:${summary}`,
    "END:VEVENT"
  ].join("\r\n")).join("\r\n");
  const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Denmark Folio//EN\r\nCALSCALE:GREGORIAN\r\n${body}\r\nEND:VCALENDAR`;
  const blob = new Blob([ics], { type: "text/calendar" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "denmark-folio-2026.ics";
  a.click();
  URL.revokeObjectURL(a.href);
}

function spy() {
  const links = [...document.querySelectorAll(".day-nav a")];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-active", a.dataset.day === entry.target.id));
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 });
  DAYS.forEach((d) => io.observe(document.getElementById(d.id)));
  links[0]?.classList.add("is-active");
}

renderDays();
renderChecks();
tickCountdown();
spy();
document.getElementById("ics-btn").addEventListener("click", ics);
document.getElementById("print-btn").addEventListener("click", () => window.print());
