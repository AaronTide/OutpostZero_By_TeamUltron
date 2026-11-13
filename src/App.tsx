import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ALL_ASSET_URLS, FRAME_ASSETS, FRAME_META } from "./framesData";

type FlowEdge = {
  prev?: string;
  next?: string;
  label: string;
  chapter: string;
};

const FLOW_GRAPH: Record<string, FlowEdge> = {
  // Chapter 1: Splash, Home & Mission Briefing
  Frame73: { next: "Frame72", label: "Splash Screen", chapter: "1. Briefing & Crew" },
  Frame72: {
    prev: "Frame73",
    next: "Frame65",
    label: "Home — Year 2045",
    chapter: "1. Briefing & Crew",
  },
  Frame65: {
    prev: "Frame72",
    next: "Frame109",
    label: "Houston — Welcome",
    chapter: "1. Briefing & Crew",
  },
  Frame109: {
    prev: "Frame65",
    next: "Frame64",
    label: "Houston — Long-Duration Experiment",
    chapter: "1. Briefing & Crew",
  },
  Frame64: {
    prev: "Frame109",
    next: "Frame66",
    label: "Mission Briefing — Crew & Supplies",
    chapter: "1. Briefing & Crew",
  },
  Frame66: {
    prev: "Frame64",
    next: "Frame69",
    label: "Mission Briefing — Survival",
    chapter: "1. Briefing & Crew",
  },
  Frame69: {
    prev: "Frame66",
    next: "Frame71",
    label: "Houston — Take Care of Crew",
    chapter: "1. Briefing & Crew",
  },

  // Chapter 2: Meet Your Crew & Launch Day
  Frame71: {
    prev: "Frame69",
    next: "Frame130",
    label: "Crew — Alex (Commander)",
    chapter: "1. Briefing & Crew",
  },
  Frame130: {
    prev: "Frame71",
    next: "Frame131",
    label: "Crew — Maya (Stats)",
    chapter: "1. Briefing & Crew",
  },
  Frame131: {
    prev: "Frame130",
    next: "Frame132",
    label: "Crew — Leo (Stats)",
    chapter: "1. Briefing & Crew",
  },
  Frame132: {
    prev: "Frame131",
    next: "Frame134",
    label: "Crew — Zara (Stats)",
    chapter: "1. Briefing & Crew",
  },
  Frame134: {
    prev: "Frame132",
    next: "Frame135",
    label: "Crew — Maya (Quote)",
    chapter: "1. Briefing & Crew",
  },
  Frame135: {
    prev: "Frame134",
    next: "Frame74",
    label: "Crew — Leo (Quote)",
    chapter: "1. Briefing & Crew",
  },
  Frame74: {
    prev: "Frame135",
    next: "Frame98",
    label: "Crew — Zara (Quote)",
    chapter: "1. Briefing & Crew",
  },
  Frame98: {
    prev: "Frame74",
    next: "Frame99",
    label: "Houston — Launch Day",
    chapter: "2. Launch & Landing Site",
  },
  Frame99: {
    prev: "Frame98",
    next: "Frame100",
    label: "Houston — Kennedy Space Center",
    chapter: "2. Launch & Landing Site",
  },
  Frame100: {
    prev: "Frame99",
    next: "Frame70",
    label: "Journey to the Launch Site",
    chapter: "2. Launch & Landing Site",
  },

  // Chapter 3: Where Should We Land? (Shackleton Crater)
  Frame70: {
    prev: "Frame100",
    next: "Frame75",
    label: "Where Should We Land? (Lunar Tilt)",
    chapter: "2. Launch & Landing Site",
  },
  Frame75: {
    prev: "Frame70",
    next: "Frame76",
    label: "Where Should We Land? (Shackleton)",
    chapter: "2. Launch & Landing Site",
  },
  Frame76: {
    prev: "Frame75",
    next: "Frame77",
    label: "Shackleton LOLA Altimeter",
    chapter: "2. Launch & Landing Site",
  },
  Frame77: {
    prev: "Frame76",
    next: "Frame78",
    label: "Shackleton Crater's Dark Side",
    chapter: "2. Launch & Landing Site",
  },
  Frame78: {
    prev: "Frame77",
    next: "Frame194",
    label: "Shackleton Crater's Lit Side",
    chapter: "2. Launch & Landing Site",
  },
  Frame194: {
    prev: "Frame78",
    label: "Choice — Build Base Location",
    chapter: "2. Launch & Landing Site",
  },
  Frame80: {
    prev: "Frame194",
    next: "Frame193",
    label: "Site A Chosen — Leo Reaction",
    chapter: "2. Launch & Landing Site",
  },
  Frame81: {
    prev: "Frame194",
    next: "Frame193",
    label: "Site B Chosen — Zara Reaction",
    chapter: "2. Launch & Landing Site",
  },

  // Chapter 4: Supplies Calculation, ECLSS & Radiation Trade-off
  Frame193: {
    prev: "Frame80",
    next: "Frame83",
    label: "Houston — Calculate Supplies",
    chapter: "3. Supplies & Shielding",
  },
  Frame83: {
    prev: "Frame193",
    next: "Frame84",
    label: "Houston — 30-Day Mission Supplies",
    chapter: "3. Supplies & Shielding",
  },
  Frame84: {
    prev: "Frame83",
    next: "Frame85",
    label: "Calculate Water Intake",
    chapter: "3. Supplies & Shielding",
  },
  Frame85: {
    prev: "Frame84",
    next: "Frame86",
    label: "Calculate Oxygen Supply",
    chapter: "3. Supplies & Shielding",
  },
  Frame86: {
    prev: "Frame85",
    next: "Frame189",
    label: "Calculate Food Supply",
    chapter: "3. Supplies & Shielding",
  },
  Frame189: {
    prev: "Frame86",
    next: "Frame88",
    label: "Houston — Open-Loop Consumables",
    chapter: "3. Supplies & Shielding",
  },
  Frame88: {
    prev: "Frame189",
    next: "Frame89",
    label: "Houston — Long-Term Supply Risk",
    chapter: "3. Supplies & Shielding",
  },
  Frame89: {
    prev: "Frame88",
    next: "Frame192",
    label: "Houston — Regenerative ECLSS",
    chapter: "3. Supplies & Shielding",
  },
  Frame192: {
    prev: "Frame89",
    next: "Frame101",
    label: "Regenerating Our Supplies (ECLSS)",
    chapter: "3. Supplies & Shielding",
  },
  Frame101: {
    prev: "Frame192",
    next: "Frame102",
    label: "Houston — Beyond Supplies",
    chapter: "3. Supplies & Shielding",
  },
  Frame102: {
    prev: "Frame101",
    next: "Frame103",
    label: "Houston — Space Radiation",
    chapter: "3. Supplies & Shielding",
  },
  Frame103: {
    prev: "Frame102",
    next: "Frame104",
    label: "Houston — Radiation Shielding",
    chapter: "3. Supplies & Shielding",
  },
  Frame104: {
    prev: "Frame103",
    next: "Frame105",
    label: "The Power-Mass Trade-off",
    chapter: "3. Supplies & Shielding",
  },
  Frame105: {
    prev: "Frame104",
    next: "Frame106",
    label: "Make Your Trade-off",
    chapter: "3. Supplies & Shielding",
  },
  Frame91: {
    prev: "Frame105",
    next: "Frame106",
    label: "Overlay Reference Frame 91",
    chapter: "3. Supplies & Shielding",
  },

  // Chapter 5: Lift-Off, Lunar Arrival & Outpost Setup
  Frame106: {
    prev: "Frame105",
    next: "Frame107",
    label: "Houston — Time for Lift-Off",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame107: {
    prev: "Frame106",
    next: "Frame110",
    label: "The Lift-Off",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame110: {
    prev: "Frame107",
    next: "Frame113",
    label: "Houston — Welcome Aboard",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame113: {
    prev: "Frame110",
    next: "Frame112",
    label: "Mission Dashboard — Day 0/30",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame112: {
    prev: "Frame113",
    next: "Frame111",
    label: "Zara — Approaching Shackleton",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame111: {
    prev: "Frame112",
    next: "Frame114",
    label: "Viewing the Moon",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame114: {
    prev: "Frame111",
    next: "Frame115",
    label: "Settling On The Moon (Part 1)",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame115: {
    prev: "Frame114",
    next: "Frame116",
    label: "Settling On The Moon (Part 2)",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame116: {
    prev: "Frame115",
    next: "Frame117",
    label: "Building the Lunar Outpost",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame117: {
    prev: "Frame116",
    next: "Frame118",
    label: "Power Systems — Stable",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame118: {
    prev: "Frame117",
    next: "Frame119",
    label: "Crew Health — Stable",
    chapter: "4. Lift-Off & Outpost Setup",
  },
  Frame119: {
    prev: "Frame118",
    next: "Frame120",
    label: "Greenhouse — Stable",
    chapter: "4. Lift-Off & Outpost Setup",
  },

  // Chapter 6: Day 8 — Greenhouse Alert & Decision
  Frame120: {
    prev: "Frame119",
    next: "Frame121",
    label: "ALERT! Dashboard — Day 8/30",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame121: {
    prev: "Frame120",
    next: "Frame122",
    label: "Greenhouse Alert Dialogue",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame122: {
    prev: "Frame121",
    next: "Frame128",
    label: "Choice — Greenhouse Power",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame128: {
    prev: "Frame122",
    next: "Frame126",
    label: "Picked: Increase Greenhouse Power",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame126: {
    prev: "Frame128",
    next: "Frame124",
    label: "Dashboard — Day 15 (Low Power)",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame124: {
    prev: "Frame126",
    next: "Frame137",
    label: "Houston — Greenhouse Successful",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame129: {
    prev: "Frame122",
    next: "Frame127",
    label: "Picked: Keep Current Allocation",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame127: {
    prev: "Frame129",
    next: "Frame125",
    label: "Dashboard — Day 15 (Food Limited)",
    chapter: "5. Day 8: Greenhouse Alert",
  },
  Frame125: {
    prev: "Frame127",
    next: "Frame137",
    label: "Houston — Slow Plant Growth",
    chapter: "5. Day 8: Greenhouse Alert",
  },

  // Chapter 7: Day 19 — Crew Health Alert & Decision
  Frame137: {
    prev: "Frame124",
    next: "Frame136",
    label: "ALERT! Dashboard — Day 19/30",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame136: {
    prev: "Frame137",
    next: "Frame138",
    label: "Crew Health Alert — Maya",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame138: {
    prev: "Frame136",
    next: "Frame139",
    label: "Crew Health Alert — Leo",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame139: {
    prev: "Frame138",
    label: "Choice — Handle Leo's Fatigue",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame143: {
    prev: "Frame139",
    next: "Frame144",
    label: "Picked: Let Leo Continue Working",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame144: {
    prev: "Frame143",
    next: "Frame140",
    label: "Crew Health Alert — Leo Continues",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame142: {
    prev: "Frame139",
    next: "Frame145",
    label: "Picked: Order Leo to Rest",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame145: {
    prev: "Frame142",
    next: "Frame140",
    label: "Crew Health Alert — Leo Rests",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame140: {
    prev: "Frame144",
    next: "Frame146",
    label: "About Crew Health (Circadian Rhythm)",
    chapter: "6. Day 19: Crew Health Alert",
  },
  Frame146: {
    prev: "Frame140",
    next: "Frame147",
    label: "About Crew Health (Stress & Sleep)",
    chapter: "6. Day 19: Crew Health Alert",
  },

  // Chapter 8: Gateway & Day 27 Solar Particle Event
  Frame147: {
    prev: "Frame146",
    next: "Frame150",
    label: "Communications Alert — Gateway Relay",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame150: {
    prev: "Frame147",
    next: "Frame148",
    label: "About NASA's Gateway (3D Model)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame148: {
    prev: "Frame150",
    next: "Frame149",
    label: "About NASA's Gateway (Overview)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame149: {
    prev: "Frame148",
    next: "Frame152",
    label: "About Gateway (Artist's Concept)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame152: {
    prev: "Frame149",
    next: "Frame153",
    label: "Houston — Solar Particle Event",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame153: {
    prev: "Frame152",
    next: "Frame154",
    label: "Houston — 1972 Solar Event",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame154: {
    prev: "Frame153",
    next: "Frame155",
    label: "Solar Particle Event — Crew Dialogue",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame155: {
    prev: "Frame154",
    label: "Choice — Shelter Protocol",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame157: {
    prev: "Frame155",
    next: "Frame163",
    label: "Picked: Full Shelter Protocol",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame160: {
    prev: "Frame157",
    next: "Frame161",
    label: "Full Shelter — Crew Safe (Variant A)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame163: {
    prev: "Frame157",
    next: "Frame161",
    label: "Full Shelter — Crew Safe",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame161: {
    prev: "Frame163",
    next: "Frame164",
    label: "ALERT! Dashboard — Day 27 (Protected)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame156: {
    prev: "Frame155",
    next: "Frame159",
    label: "Picked: Partial Shelter Protocol",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame159: {
    prev: "Frame156",
    next: "Frame162",
    label: "Partial Shelter — Leo Outside",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame162: {
    prev: "Frame159",
    next: "Frame164",
    label: "ALERT! Dashboard — Day 27 (Leo At Risk)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame164: {
    prev: "Frame162",
    next: "Frame165",
    label: "Solar Particle Event — Power Secured",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame165: {
    prev: "Frame164",
    next: "Frame166",
    label: "The Event Outside",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame166: {
    prev: "Frame165",
    next: "Frame167",
    label: "What Actually Happened? (NASA SDO)",
    chapter: "7. Gateway & Solar Storm",
  },
  Frame167: {
    prev: "Frame166",
    next: "Frame72",
    label: "Mission Summary — Solar Radiation",
    chapter: "7. Gateway & Solar Storm",
  },
};

const CREW_ORDER = [
  "Frame71",
  "Frame130",
  "Frame131",
  "Frame132",
  "Frame134",
  "Frame135",
  "Frame74",
];

const DECISION_FRAMES = new Set(["Frame194", "Frame122", "Frame139", "Frame155"]);

const CHAPTER_ORDER = Array.from(new Set(Object.values(FLOW_GRAPH).map((edge) => edge.chapter)));
const TRANSITION_MS = 260;

const decodedAssets = new Set<string>();

// Load and decode a screen's images before it is shown so it never appears half-drawn.
function ensureFrameAssets(frameKey: string, maxWaitMs = 450): Promise<void> {
  const pending = (FRAME_ASSETS[frameKey] ?? []).filter((url) => !decodedAssets.has(url));
  if (pending.length === 0) return Promise.resolve();
  const loads = pending.map((url) => {
    const img = new Image();
    img.src = url;
    return img
      .decode()
      .catch(() => undefined)
      .then(() => {
        decodedAssets.add(url);
      });
  });
  const timeout = new Promise<void>((resolve) => setTimeout(resolve, maxWaitMs));
  return Promise.race([Promise.all(loads).then(() => undefined), timeout]);
}

// Warm the browser cache with every frame asset so later screens render instantly.
function preloadAssets() {
  const queue = [...ALL_ASSET_URLS];
  const loadNext = () => {
    const url = queue.shift();
    if (!url) return;
    if (decodedAssets.has(url)) return loadNext();
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      decodedAssets.add(url);
      loadNext();
    };
    img.onerror = loadNext;
    img.src = url;
  };
  // A few parallel lanes keeps the network busy without starving the current screen.
  for (let i = 0; i < 4; i++) loadNext();
}

export default function App() {
  const [currentFrame, setCurrentFrame] = useState<string>(() => {
    // Dev-only deep link (?frame=Frame109) for reviewing individual screens.
    if (import.meta.env.DEV && typeof window !== "undefined") {
      const requested = new URLSearchParams(window.location.search).get("frame");
      if (requested && FRAME_META[requested]) return requested;
    }
    return "Frame73";
  });
  const [leavingFrame, setLeavingFrame] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const currentRef = useRef(currentFrame);
  currentRef.current = currentFrame;
  const navToken = useRef(0);
  const [viewportSize, setViewportSize] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 844,
    h: typeof window !== "undefined" ? window.innerHeight : 412,
  }));

  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(preloadAssets);
    else setTimeout(preloadAssets, 300);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setViewportSize({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Single entry point for screen changes: waits for the target's images, then crossfades.
  const transitionTo = useCallback(
    (targetFrame: string, updateHistory?: (from: string) => void) => {
      if (!FRAME_META[targetFrame] || targetFrame === currentRef.current) return;
      const token = ++navToken.current;
      void ensureFrameAssets(targetFrame).then(() => {
        if (token !== navToken.current) return;
        const from = currentRef.current;
        updateHistory?.(from);
        setLeavingFrame(from);
        setCurrentFrame(targetFrame);
      });
    },
    [],
  );

  useEffect(() => {
    if (!leavingFrame) return;
    const timer = setTimeout(() => setLeavingFrame(null), TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [leavingFrame, currentFrame]);

  const navigateTo = useCallback(
    (targetFrame: string) => {
      transitionTo(targetFrame, (from) => setHistory((prev) => [...prev, from]));
    },
    [transitionTo],
  );

  const goBack = useCallback(() => {
    if (history.length > 0) {
      const prevFrame = history[history.length - 1];
      transitionTo(prevFrame, () => setHistory((prev) => prev.slice(0, -1)));
      return;
    }
    const fallbackPrev = FLOW_GRAPH[currentFrame]?.prev;
    if (fallbackPrev && FRAME_META[fallbackPrev]) {
      transitionTo(fallbackPrev);
    }
  }, [currentFrame, history, transitionTo]);

  const goNext = useCallback(() => {
    const nextFrame = FLOW_GRAPH[currentFrame]?.next;
    if (nextFrame && FRAME_META[nextFrame]) {
      navigateTo(nextFrame);
    }
  }, [currentFrame, navigateTo]);

  // Keyboard shortcuts for smooth navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen((prev) => !prev);
        setArchiveOpen(false);
        return;
      }
      if (menuOpen || archiveOpen) return;
      if (e.key === "ArrowRight") {
        if (currentFrame === "Frame73") navigateTo("Frame72");
        else if (FLOW_GRAPH[currentFrame]?.next) goNext();
      } else if (e.key === "ArrowLeft") {
        goBack();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentFrame, goBack, goNext, menuOpen, archiveOpen, navigateTo]);

  const handleStageClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Allow external NASA links to open naturally
      const externalAnchor = target.closest('a[href^="http"]') as HTMLAnchorElement | null;
      if (externalAnchor) {
        return;
      }

      // Check if user clicked the button surface behind external links on Frame146, Frame148, Frame150
      if (target.closest('[data-name="Boss_Name_Table 5"]')) {
        if (currentFrame === "Frame146") {
          window.open(
            "https://www.nasa.gov/missions/station/iss-research/mental-well-being-in-space/",
            "_blank",
            "noopener,noreferrer",
          );
          return;
        }
        if (currentFrame === "Frame148" || currentFrame === "Frame150") {
          window.open(
            "https://science.nasa.gov/3d-resources/gateway-lunar-space-station/",
            "_blank",
            "noopener,noreferrer",
          );
          return;
        }
      }

      // 1. Menu button (top-right)
      if (target.closest('[data-name="Menu_BTN 1"]')) {
        e.preventDefault();
        setMenuOpen(true);
        return;
      }

      // 2. Back button (top-left)
      if (target.closest('[data-name="Backward_BTN 1"]')) {
        e.preventDefault();
        goBack();
        return;
      }

      // 3. Forward / Next button (bottom-right)
      const nextBtn = target.closest('[data-name="Backward_BTN 2"]');
      if (nextBtn) {
        e.preventDefault();
        goNext();
        return;
      }

      // 4. Splash Screen (Frame73)
      if (currentFrame === "Frame73") {
        if (
          target.closest('[data-name="Start_BTN 2"]') ||
          target.closest('[data-node-id="1:2062"]')
        ) {
          e.preventDefault();
          navigateTo("Frame72");
          return;
        }
      }

      // 5. Home Screen (Frame72)
      if (currentFrame === "Frame72") {
        if (target.closest('[data-node-id="1:2070"]')) {
          e.preventDefault();
          navigateTo("Frame65");
          return;
        }
        if (target.closest('[data-node-id="1:2073"]')) {
          e.preventDefault();
          setArchiveOpen(true);
          return;
        }
      }

      // 6. Crew Carousel Left / Right arrows
      const crewIdx = CREW_ORDER.indexOf(currentFrame);
      if (crewIdx !== -1) {
        const objEl = target.closest('[data-name="Object"]') as HTMLElement | null;
        if (objEl) {
          e.preventDefault();
          const stageRect = e.currentTarget.getBoundingClientRect();
          const objRect = objEl.getBoundingClientRect();
          const relX = (objRect.left - stageRect.left) / stageRect.width;
          if (relX < 0.2) {
            // Left arrow
            const prevCrew = CREW_ORDER[(crewIdx - 1 + CREW_ORDER.length) % CREW_ORDER.length];
            navigateTo(prevCrew);
          } else {
            // Right arrow
            if (crewIdx < CREW_ORDER.length - 1) {
              navigateTo(CREW_ORDER[crewIdx + 1]);
            } else {
              navigateTo("Frame98");
            }
          }
          return;
        }
      }

      // 7. Decision Screen 1: Frame194 (Where will you build your base, Commander?)
      if (currentFrame === "Frame194") {
        if (
          target.closest('[data-node-id="1:2340"]') ||
          target.closest('[data-node-id="1:2341"]') ||
          target.closest('[data-node-id="1:2336"]')
        ) {
          e.preventDefault();
          navigateTo("Frame80");
          return;
        }
        if (
          target.closest('[data-node-id="1:2338"]') ||
          target.closest('[data-node-id="1:2339"]') ||
          target.closest('[data-node-id="1:2337"]')
        ) {
          e.preventDefault();
          navigateTo("Frame81");
          return;
        }
      }

      // 8. Decision Screen 2: Frame122 (Day 8 Greenhouse Alert)
      if (currentFrame === "Frame122") {
        if (
          target.closest('[data-node-id="1:6218"]') ||
          target.closest('[data-name="Boss_Name_Table 1"]') ||
          target.closest('[data-node-id="1:6221"]')
        ) {
          e.preventDefault();
          navigateTo("Frame128");
          return;
        }
        if (
          target.closest('[data-node-id="1:6220"]') ||
          target.closest('[data-name="Boss_Name_Table 3"]') ||
          target.closest('[data-node-id="1:6223"]')
        ) {
          e.preventDefault();
          navigateTo("Frame129");
          return;
        }
      }

      // 9. Decision Screen 3: Frame139 (Day 19 Crew Health Alert)
      if (currentFrame === "Frame139") {
        if (
          target.closest('[data-node-id="1:2965"]') ||
          target.closest('[data-name="Boss_Name_Table 1"]') ||
          target.closest('[data-node-id="1:2968"]')
        ) {
          e.preventDefault();
          navigateTo("Frame143");
          return;
        }
        if (
          target.closest('[data-node-id="1:2967"]') ||
          target.closest('[data-name="Boss_Name_Table 3"]') ||
          target.closest('[data-node-id="1:2970"]')
        ) {
          e.preventDefault();
          navigateTo("Frame142");
          return;
        }
      }

      // 10. Decision Screen 4: Frame155 (Day 27 Solar Particle Event Alert)
      if (currentFrame === "Frame155") {
        if (
          target.closest('[data-node-id="1:3125"]') ||
          target.closest('[data-name="Boss_Name_Table 1"]') ||
          target.closest('[data-node-id="1:3128"]')
        ) {
          e.preventDefault();
          navigateTo("Frame157");
          return;
        }
        if (
          target.closest('[data-node-id="1:3127"]') ||
          target.closest('[data-name="Boss_Name_Table 3"]') ||
          target.closest('[data-node-id="1:3132"]')
        ) {
          e.preventDefault();
          navigateTo("Frame156");
          return;
        }
      }
    },
    [currentFrame, goBack, goNext, navigateTo],
  );

  const activeMeta = FRAME_META[currentFrame] ?? FRAME_META.Frame73;
  const ActiveFrameComponent = activeMeta.Component;
  const leavingMeta = leavingFrame ? FRAME_META[leavingFrame] : null;
  const LeavingFrameComponent = leavingMeta?.Component;

  const scale = useMemo(() => {
    const sx = viewportSize.w / activeMeta.width;
    const sy = viewportSize.h / activeMeta.height;
    return Math.min(sx, sy);
  }, [viewportSize.w, viewportSize.h, activeMeta.width, activeMeta.height]);

  const chapters = useMemo(() => {
    const grouped: Record<string, { key: string; label: string; frameName: string }[]> = {};
    for (const [key, edge] of Object.entries(FLOW_GRAPH)) {
      if (!grouped[edge.chapter]) grouped[edge.chapter] = [];
      grouped[edge.chapter].push({
        key,
        label: edge.label,
        frameName: FRAME_META[key]?.name ?? key,
      });
    }
    return grouped;
  }, []);

  const isCrewScreen = CREW_ORDER.includes(currentFrame);
  const isDecisionScreen = DECISION_FRAMES.has(currentFrame);
  const chapterIndex = CHAPTER_ORDER.indexOf(FLOW_GRAPH[currentFrame]?.chapter ?? "");
  const progress = chapterIndex < 0 ? 0 : ((chapterIndex + 1) / CHAPTER_ORDER.length) * 100;
  const closeOverlays = () => {
    setMenuOpen(false);
    setArchiveOpen(false);
  };

  return (
    <main className="app-viewport">
      <div
        className={`figma-stage-shell ${isCrewScreen ? "crew-screen" : ""} ${
          isDecisionScreen ? "decision-screen" : ""
        }`}
        style={{
          width: `${activeMeta.width}px`,
          height: `${activeMeta.height}px`,
          transform: `scale(${scale})`,
        }}
        onClick={handleStageClick}
      >
        {LeavingFrameComponent && leavingMeta && (
          <div
            key={`leaving-${leavingFrame}`}
            className="frame-layer frame-leaving"
            style={{ width: `${leavingMeta.width}px`, height: `${leavingMeta.height}px` }}
            aria-hidden
          >
            <LeavingFrameComponent />
          </div>
        )}
        <div key={currentFrame} className="frame-layer frame-enter">
          <ActiveFrameComponent />
        </div>
      </div>

      {(menuOpen || archiveOpen) && (
        <div className="mission-overlay" onClick={closeOverlays}>
          <div
            className="mission-panel"
            role="dialog"
            aria-modal="true"
            aria-label={archiveOpen ? "Mission archive" : "Mission menu"}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4 border-b border-[#05dbff]/25 pb-4">
              <div className="min-w-0">
                <p className="font-['Orbitron:Medium'] text-[10px] uppercase tracking-[0.24em] text-[#fb227b]">
                  Project Outpost Zero
                </p>
                <h2 className="mt-1 font-['Orbitron:Bold'] text-xl tracking-tight text-white">
                  {archiveOpen ? "MISSION ARCHIVE & SCREEN NAVIGATOR" : "MISSION MENU"}
                </h2>
                <p className="mt-1 truncate font-['Orbitron:Medium'] text-xs text-[#8adfff]">
                  Now: {FLOW_GRAPH[currentFrame]?.label ?? currentFrame}
                </p>
              </div>
              <button onClick={closeOverlays} className="mission-icon-btn" aria-label="Close modal">
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <div className="mb-1.5 flex justify-between font-['Orbitron:Medium'] text-[10px] uppercase tracking-[0.18em] text-white/60">
                <span>Mission progress</span>
                <span>
                  Chapter {Math.max(chapterIndex + 1, 1)} / {CHAPTER_ORDER.length}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#05dbff] to-[#fb227b] transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-3">
              <button onClick={closeOverlays} className="mission-btn">
                Resume Mission
              </button>
              <button
                onClick={() => {
                  closeOverlays();
                  navigateTo("Frame72");
                }}
                className="mission-btn"
              >
                Mission Home
              </button>
              <button
                onClick={() => {
                  closeOverlays();
                  transitionTo("Frame73", () => setHistory([]));
                }}
                className="mission-btn mission-btn--danger"
              >
                Restart Mission
              </button>
            </div>

            <div className="mission-scroll space-y-3 overflow-y-auto pr-1">
              {Object.entries(chapters).map(([chapterTitle, items]) => (
                <div
                  key={chapterTitle}
                  className="rounded-lg border border-[#05dbff]/15 bg-[#020736]/60 p-3"
                >
                  <h3 className="mb-2 font-['Orbitron:Bold'] text-xs uppercase tracking-wider text-[#fb227b]">
                    {chapterTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {items.map((item) => {
                      const isActive = item.key === currentFrame;
                      return (
                        <button
                          key={item.key}
                          onClick={() => {
                            closeOverlays();
                            navigateTo(item.key);
                          }}
                          className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs transition-colors duration-150 ${
                            isActive
                              ? "border border-[#05dbff] bg-[#05dbff]/20 font-['Orbitron:Bold'] text-white shadow-[0_0_12px_rgba(5,219,255,0.35)]"
                              : "border border-transparent bg-white/5 font-['Orbitron:Medium'] text-white/85 hover:border-[#05dbff]/40 hover:bg-[#05dbff]/10"
                          }`}
                        >
                          <span className="truncate pr-2">{item.label}</span>
                          <span className="shrink-0 text-[10px] text-[#8adfff]">
                            {item.frameName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
