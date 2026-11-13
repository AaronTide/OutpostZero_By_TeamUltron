import React from "react";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;

// Shared navigation buttons (transparent artwork) used at the same spot on every screen.
const uiNavArrow = `${assetPathPrefix}/ui/nav-arrow.png`;
const uiMenu = `${assetPathPrefix}/ui/menu.png`;

function ArtemisLaunchSiteVisual() {
  return (
    <div className="relative size-full overflow-hidden bg-[#0c0d0e]">
      <svg viewBox="0 0 412 232" className="size-full block" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="dawnSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b0e14" />
            <stop offset="52%" stopColor="#17191c" />
            <stop offset="76%" stopColor="#261b12" />
            <stop offset="100%" stopColor="#090a07" />
          </linearGradient>
          <radialGradient id="dawnGlow" cx="56%" cy="68%" r="42%">
            <stop offset="0%" stopColor="rgba(180, 110, 48, 0.36)" />
            <stop offset="60%" stopColor="rgba(90, 52, 24, 0.14)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>
        <rect width="412" height="232" fill="url(#dawnSky)" />
        <rect width="412" height="232" fill="url(#dawnGlow)" />
        <g opacity="0.28" fill="#2c3038">
          <ellipse cx="210" cy="62" rx="140" ry="18" />
          <ellipse cx="165" cy="92" rx="120" ry="14" />
          <ellipse cx="260" cy="112" rx="110" ry="12" />
        </g>
        <path d="M0 164 L412 156 L412 232 L0 232 Z" fill="#080a06" />
        <g fill="#050604">
          <rect x="268" y="96" width="5" height="62" />
          <path d="M270 96 C255 86 244 92 238 101 C248 96 258 96 268 100 Z" />
          <path d="M270 96 C254 78 240 80 232 88 C245 86 257 89 268 97 Z" />
          <path d="M271 96 C284 80 298 83 306 92 C294 88 282 90 272 98 Z" />
          <path d="M271 96 C286 90 298 96 304 106 C293 100 282 99 272 101 Z" />
        </g>
        <path d="M0 0 L68 0 L18 232 L0 232 Z" fill="#040506" opacity="0.88" />
        <path d="M392 0 L412 0 L412 232 L384 232 Z" fill="#040506" opacity="0.85" />
      </svg>
    </div>
  );
}

function SolarParticleSpiralVisual() {
  return (
    <div className="relative size-full overflow-hidden bg-[#120d09]">
      <svg viewBox="0 0 462 260" className="size-full block" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="spaceBg" cx="50%" cy="54%" r="65%">
            <stop offset="0%" stopColor="#2b1808" />
            <stop offset="45%" stopColor="#140d08" />
            <stop offset="100%" stopColor="#090706" />
          </radialGradient>
          <radialGradient id="sunCorona" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff4b8" />
            <stop offset="35%" stopColor="#ff9900" />
            <stop offset="68%" stopColor="rgba(255, 82, 0, 0.45)" />
            <stop offset="100%" stopColor="rgba(255, 60, 0, 0)" />
          </radialGradient>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffae19" />
            <stop offset="75%" stopColor="#f54e00" />
            <stop offset="100%" stopColor="#ffb733" />
          </radialGradient>
        </defs>
        <rect width="462" height="260" fill="url(#spaceBg)" />
        <g fill="rgba(255,255,255,0.45)">
          <circle cx="48" cy="38" r="0.8" />
          <circle cx="92" cy="82" r="1" />
          <circle cx="144" cy="28" r="0.7" />
          <circle cx="332" cy="44" r="0.9" />
          <circle cx="395" cy="112" r="0.8" />
          <circle cx="412" cy="190" r="1" />
          <circle cx="76" cy="204" r="0.8" />
          <circle cx="290" cy="218" r="0.7" />
        </g>
        <g fill="none" stroke="rgba(220, 215, 210, 0.48)" strokeWidth="0.9">
          <path d="M 231 142 C 245 102, 295 88, 336 135 C 368 172, 355 232, 332 265" />
          <path d="M 231 142 C 266 156, 282 208, 232 246 C 178 286, 82 245, 24 148" />
          <path d="M 231 142 C 204 176, 152 178, 128 124 C 105 72, 124 18, 146 -10" />
          <path d="M 231 142 C 196 118, 182 62, 236 26 C 296 -14, 398 22, 468 120" />
        </g>
        <circle cx="288" cy="100" r="4.2" fill="#8fa3b0" />
        <path d="M 288 95.8 A 4.2 4.2 0 0 1 288 104.2 Z" fill="#2c353d" />
        <circle cx="231" cy="142" r="28" fill="url(#sunCorona)" />
        <circle
          cx="231"
          cy="142"
          r="13.5"
          fill="url(#sunCore)"
          stroke="#ffd266"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export function Frame64() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage11 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:2099">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-1/2 w-[629.688px]"
        data-node-id="1:2100"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[605.266px] items-center justify-center left-[calc(50%-36.35px)] top-[calc(50%-30.37px)] w-[937.292px]"
        data-node-id="1:2101"
      >
        <div className="flex-none rotate-[-0.56deg]">
          <div className="h-[596.15px] relative w-[931.484px]" data-name="Background">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute max-w-none object-cover size-full"
                src={imgBackground}
              />
              <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2102"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2103"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2104"
      >
        <p className="leading-[1.2]">{`Mission Briefing `}</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%+31px)] top-[96px] w-[622px]"
        data-node-id="1:2105"
        data-name="Boss_Name_Table 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable2}
          />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2106"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+26px)] text-[18px] text-center text-white top-[calc(50%-74px)] tracking-[-0.27px] w-[444px] whitespace-pre-wrap"
        data-node-id="1:2107"
      >
        <p className="leading-[1.5] mb-0">{`Your crew has four people. `}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">{`Your supplies are limited. `}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">{`Your systems are designed to keep you alive, but they won't run themselves.`}</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-77px] size-[355px] top-[152px]"
        data-node-id="1:2108"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 11">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-[-0.56%]"
                src={imgImage11}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame65() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage13 = `${assetPathPrefix}/c759c.png`;
  return (
    <div className="relative size-full" data-node-id="1:2080">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[811px] left-[calc(50%+55.5px)] top-[calc(50%-169.5px)] w-[1267px]"
        data-node-id="1:2081"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2082"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2083"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2084"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%+26px)] top-[92px] w-[622px]"
        data-node-id="1:2085"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[158px] leading-[0] left-[calc(50%+26px)] text-[24px] text-center text-white top-[calc(50%-53px)] tracking-[-0.36px] w-[462px] whitespace-pre-wrap"
        data-node-id="1:2086"
      >
        <p className="leading-[1.22] mb-0">{`Commander, `}</p>
        <p className="leading-[1.22] mb-0">{`welcome to Outpost Zero. `}</p>
        <p className="leading-[1.22] mb-0">I’m Tim, from the Control Room in Houston</p>
        <p className="leading-[1.22] mb-0">​</p>
        <p className="leading-[1.22]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2087"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-91px] size-[355px] top-[113px]"
        data-node-id="1:2088"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 13">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage13}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame66() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/17ca7.png`;
  return (
    <div className="relative size-full" data-node-id="1:2227">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[717px] left-[calc(50%-55px)] top-[calc(50%-105.5px)] w-[1120px]"
        data-node-id="1:2228"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2229"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2230"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2231"
      >
        <p className="leading-[1.2]">{`Mission Briefing `}</p>
      </div>
      <div
        className="absolute h-[194px] left-[calc(50%+10px)] top-[calc(50%-8px)] transform-[translateX(-50%)_translateY(-50%)] w-[580px]"
        data-node-id="1:2232"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%) translateY(-50%)",
          } as React.CSSProperties
        }
      >
        <div
          className="-translate-x-1/2 absolute h-[234px] left-[calc(50%-20.5px)] top-0 w-[581px]"
          data-node-id="1:2233"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-21px)] text-[18px] text-center text-white top-[calc(50%-49px)] tracking-[-0.27px] w-[444px]"
          data-node-id="1:2234"
        >
          <p className="leading-[1.57] mb-0">
            Your mission is to prove humanity can survive on the Moon.
          </p>
          <p className="leading-[1.57]">
            We can support you from Earth, but some decisions will be yours alone.
          </p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-77px] size-[355px] top-[185px]"
        data-node-id="1:2235"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage12}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2236"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Frame69() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:2262">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[593px] left-[calc(50%-19.5px)] top-[calc(50%-58.5px)] w-[927px]"
        data-node-id="1:2263"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2264"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2265"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2266"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="absolute h-[135.49px] left-1/2 top-[calc(50%+9.75px)] transform-[translateX(-50%)_translateY(-50%)] w-[624px]"
        data-node-id="1:2267"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%) translateY(-50%)",
          } as React.CSSProperties
        }
      >
        <div
          className="-translate-x-1/2 absolute h-[135.49px] left-1/2 top-0 w-[621.514px]"
          data-node-id="1:2268"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-1/2 text-[18px] text-center text-white top-[calc(50%-27.75px)] tracking-[-0.27px] w-[444px] whitespace-pre-wrap"
          data-node-id="1:2269"
        >
          <p className="leading-[1.57] mb-0">{`Take care of your crew, Commander. `}</p>
          <p className="leading-[1.57]">{`They're counting on you.`}</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2270"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-61px] size-[355px] top-[148px]"
        data-node-id="1:2271"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame70() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable3 = `${assetPathPrefix}/b6be3.png`;
  const imgImage13 = `${assetPathPrefix}/cb0c7.png`;
  return (
    <div className="relative size-full" data-node-id="1:2272">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:2273"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2274"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2275"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2276"
      >
        <p className="leading-[1.2]">Where Should We Land?</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2277"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%-11px)] top-[80px] w-[622px]"
        data-node-id="1:2278"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-91.44%] w-full"
            src={imgBossNameTable3}
          />
        </div>
      </div>
      <div
        className="absolute left-[-91px] size-[355px] top-[194px]"
        data-node-id="1:2279"
        data-name="image 13"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage13}
        />
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-1/2 text-[16px] text-center text-white top-[calc(50%-70px)] tracking-[-0.24px] w-[522px] whitespace-pre-wrap"
        data-node-id="1:2280"
      >
        <p className="leading-[1.57] mb-0">{`The Moon is covered in millions of craters and tilts on its axis by only 1.5 degrees, much less than Earth’s  23.5 degrees tilt.`}</p>
        <p className="leading-[1.57] mb-0">So, “seasons” don’t really exist on the Moon!</p>
        <p className="leading-[1.57]">{` The Lunar poles get almost constant sunlight, while the pits may stay in constant shade.`}</p>
      </div>
    </div>
  );
}

export function Frame71() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/52eee.png`;
  return (
    <div className="relative size-full" data-node-id="1:2342">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:2343"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[622px] left-[calc(50%-32px)] top-[calc(50%-67px)] w-[972px]"
        data-node-id="1:2344"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2345"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2346"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2347"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2348"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:2349"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:2350"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[390px] overflow-clip top-[105px] w-[356px]"
        data-node-id="1:2351"
      >
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[19px] items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:2352"
        >
          <div
            className="content-stretch flex flex-col gap-[7px] items-start leading-[1.75] relative shrink-0 w-full"
            data-node-id="1:2353"
          >
            <p
              className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:2354"
            >
              Alex (YOU)
            </p>
            <div
              className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:2355"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[115px]"
                data-node-id="1:2356"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:2357"
                >
                  Role
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:2358"
                >
                  Commander
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]"
                data-node-id="1:2359"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:2360"
                >
                  Personality
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:2361"
                >{`Responsible `}</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col font-['Orbitron:Medium'] font-medium gap-[7px] items-start relative shrink-0 w-[98px]"
            data-node-id="1:2362"
          >
            <p
              className="leading-[1.75] relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
              data-node-id="1:2363"
            >
              Stats
            </p>
            <div
              className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-[#fb227b] text-[16px] text-center tracking-[-0.24px] w-full"
              data-node-id="1:2364"
            >
              <p className="relative shrink-0 w-full" data-node-id="1:2365">
                <span className="leading-[1.75]">Health</span>
                <span className="leading-[1.75] text-white">: 9</span>
                <span className="leading-[1.75] text-white">0</span>
              </p>
              <div className="h-[28px] relative shrink-0 w-full" data-node-id="1:2366">
                <p className="mb-0">
                  <span className="leading-[1.75]">{`Fatigue: `}</span>
                  <span className="leading-[1.75] text-[#f2f2f7]">3</span>
                  <span className="leading-[1.75] text-white">0</span>
                </p>
                <p className="leading-[1.75]">​</p>
              </div>
              <p className="relative shrink-0 w-full" data-node-id="1:2367">
                <span className="leading-[1.75]">{`Morale: `}</span>
                <span className="leading-[1.75] text-[#f2f2f7]">9</span>
                <span className="leading-[1.75] text-white">5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[267px] left-[34px] top-[107px] w-[274px]"
        data-node-id="1:2368"
        data-name="Male astronaut — Pilot"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautPilot}
        />
      </div>
    </div>
  );
}

export function Frame72() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgObject = `${assetPathPrefix}/da240.png`;
  const imgCloud021 = `${assetPathPrefix}/62426.png`;
  const imgGlossyBlueRoundedButtonSurface = `${assetPathPrefix}/11a87.svg`;
  const imgGlossyBlueRoundedButtonSurface1 = `${assetPathPrefix}/82f39.svg`;
  return (
    <div className="relative size-full" data-node-id="1:2065">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[903px] left-[calc(50%+68px)] top-[calc(50%-146.5px)] w-[1412px]"
        data-node-id="1:2066"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2067"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2068"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute aspect-[638/125] bottom-[83.71%] left-1/2 top-[5.83%] transform-[translateX(-50%)]"
        data-node-id="1:2069"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%)",
          } as React.CSSProperties
        }
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[98.75%] left-[0.12%] max-w-none top-[0.56%] w-[99.8%]"
            src={imgObject}
          />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer h-[44px] left-[100px] top-[344px] w-[149px]"
        data-node-id="1:2070"
      >
        <div
          className="absolute h-[41px] left-[1.5px] top-[1.5px] w-[146px]"
          data-node-id="1:2071"
          data-name="Glossy blue rounded button surface"
        >
          <div className="absolute inset-[-9.76%_-2.74%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgGlossyBlueRoundedButtonSurface}
            />
          </div>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] left-[calc(50%-61.5px)] text-[16px] text-left text-white top-1/2 tracking-[0.16px] whitespace-nowrap"
          data-node-id="1:2072"
        >
          <p className="leading-[26px]">Begin Mission</p>
        </div>
      </a>
      <div className="absolute h-[44px] left-[591px] top-[344px] w-[140px]" data-node-id="1:2073">
        <div
          className="absolute h-[41px] left-[1.5px] top-[1.5px] w-[137px]"
          data-node-id="1:2074"
          data-name="Glossy blue rounded button surface"
        >
          <div className="absolute inset-[-9.76%_-2.92%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgGlossyBlueRoundedButtonSurface1}
            />
          </div>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] left-[calc(50%-36px)] text-[16px] text-white top-1/2 tracking-[0.16px] whitespace-nowrap"
          data-node-id="1:2075"
        >
          <p className="leading-[26px]">Archive</p>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[228px] left-[calc(50%+0.5px)] top-[92px] w-[631px]"
        data-node-id="1:2076"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[228px] left-1/2 top-1/2 w-[631px]"
          data-node-id="1:2077"
          data-name="Cloud_02 1"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[117.26%] left-0 max-w-none top-[0.02%] w-[100.05%]"
              src={imgCloud021}
            />
          </div>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-1/2 w-[393px]"
          data-node-id="1:2078"
        >
          <div
            className="[word-break:break-word] font-['Orbitron:Medium'] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-0.6px] w-[585px]"
            data-node-id="1:2079"
          >
            <p className="leading-[1.95] mb-0 text-[32px] tracking-[-0.96px]">Year 2045</p>
            <p className="leading-[1.95] mb-0 text-[20px]">
              The Moon is no longer just a destination.
            </p>
            <p className="leading-[1.95] text-[20px]">{`It's our next home.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame73() {
  const imgImage1 = `${assetPathPrefix}/21a84.png`;
  const imgStartBtn2 = `${assetPathPrefix}/4001b.png`;
  return (
    <div className="relative size-full" data-node-id="1:2062">
      <div
        className="absolute h-[412px] left-0 top-0 w-[917px]"
        data-node-id="1:2063"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="image 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[142.45%] left-[-0.05%] max-w-none top-[-15.16%] w-full"
            src={imgImage1}
          />
        </div>
      </div>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[59.762px] left-[calc(50%-5.25px)] top-[287px] w-[202.5px]"
        data-node-id="1:2064"
        data-name="Start_BTN 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgStartBtn2}
        />
      </a>
    </div>
  );
}

export function Frame74() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  const imgFemaleAstronautExplorer = `${assetPathPrefix}/ba8b5.png`;
  return (
    <div className="relative size-full" data-node-id="1:5934">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:5935"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[927px] left-[calc(50%+95px)] top-[calc(50%+60.5px)] w-[1448px]"
        data-node-id="1:5936"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5937"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5938"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5939"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5940"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col items-start left-[422px] top-[105px] w-[324px]"
        data-node-id="1:5941"
      >
        <div
          className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full"
          data-node-id="1:5942"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
            data-node-id="1:5943"
          >
            Zara
          </p>
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-node-id="1:5944"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.75] relative shrink-0 w-[115px]"
              data-node-id="1:5945"
            >
              <p
                className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                data-node-id="1:5946"
              >
                Role
              </p>
              <p
                className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                data-node-id="1:5947"
              >
                Biologist
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:5948"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:5949"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] h-[101px] left-[calc(50%+177px)] rounded-[5.156px] top-[231px] w-[360px]"
        data-node-id="1:5950"
      />
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold h-[108px] justify-center leading-[0] left-[425px] text-[18px] text-white top-[285px] w-[321px]"
        data-node-id="1:5951"
      >
        <p className="leading-[normal] mb-0">{`"One day, we'll grow an entire meal on the Moon.Let’s be the first to make that happen."`}</p>
        <p className="leading-[normal]">​</p>
      </div>
      <div
        className="absolute h-[274px] left-[71px] top-[105px] w-[238px]"
        data-node-id="1:5952"
        data-name="Female astronaut — Explorer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautExplorer}
        />
      </div>
    </div>
  );
}

export function Frame75() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable3 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/667bb.png`;
  return (
    <div className="relative size-full" data-node-id="1:2281">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[844px]"
        data-node-id="1:2282"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2283"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2284"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2285"
      >
        <p className="leading-[1.2]">Where Should We Land?</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2286"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[258px] left-[calc(50%-138px)] top-[78px] w-[388px]"
        data-node-id="1:2287"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-91.44%] w-full"
            src={imgBossNameTable3}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-140px)] text-[16px] text-center text-white top-[calc(50%-69px)] tracking-[-0.24px] w-[312px]"
        data-node-id="1:2288"
      >
        <p className="leading-[1.57] mb-0">
          Our outpost will be near Shackleton Crater, a 21-km diameter crater on the South Pole.
        </p>
        <p className="leading-[1.57]">
          Its rims are almost permanently lit, while its deep interior has not seen Sun Rays in
          billions of years!
        </p>
      </div>
      <div
        className="absolute h-[181px] left-[498px] top-[115px] w-[293px]"
        data-node-id="1:2289"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
    </div>
  );
}

export function Frame76() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable3 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/667bb.png`;
  return (
    <div className="relative size-full" data-node-id="1:2290">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2291"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[844px]"
        data-node-id="1:2292"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2293"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2294"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2295"
      >
        <p className="leading-[1.2]">Where Should We Land?</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2296"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[258px] left-[calc(50%-129px)] top-[78px] w-[400px]"
        data-node-id="1:2297"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-91.44%] w-full"
            src={imgBossNameTable3}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-128px)] text-[15px] text-center text-white top-[calc(50%-79px)] tracking-[-0.225px] w-[352px] whitespace-pre-wrap"
        data-node-id="1:2298"
      >
        <p className="leading-[1.57] mb-0">{`Shackleton is about  4km deep, twice as deep as the Grand Canyon. The LOLA Laser Altimeter shows the shape of the Crater, with red being higher and blue being lower.`}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57] mb-0">You can explore Shackleton below!</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute bg-[#fb227b] content-stretch flex h-[57px] items-center justify-center left-[calc(50%-129.5px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[307px] transform-[translateX(-50%)] w-[347px]"
        data-node-id="1:2299"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%)",
          } as React.CSSProperties
        }
      >
        <a
          className="[word-break:break-word] block font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-white tracking-[-0.225px] w-[334px]"
          href="https://trek.nasa.gov/moon/#v=0.1&x=12307.80761718739&y=-1404.6954345702688&z=7&p=urn%3Aogc%3Adef%3Acrs%3AIAU2000%3A%3A30120&d=&locale=&b=moon&e=-51906.840820312515%2C-31873.208312988194%2C76522.4560546873%2C29063.817443847656&sfz=&w="
          data-node-id="1:2300"
          target="_blank"
        >
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.75] underline">{`Explore Shackleton On NASA Moon Trek `}</p>
        </a>
      </div>
      <div
        className="absolute h-[181px] left-[507px] top-[115px] w-[284px]"
        data-node-id="1:2301"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
    </div>
  );
}

export function Frame77() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/7ed7a.png`;
  return (
    <div className="relative size-full" data-node-id="1:2302">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2303"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2304"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[844px]"
        data-node-id="1:2305"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2306"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2307"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2308"
      >
        <p className="leading-[1.2]">Shackleton Crater’s Dark Side</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2309"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[217px] left-[497px] top-[101px] w-[262px]"
        data-node-id="1:2310"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
      <div
        className="absolute bg-[#fb227b] content-stretch flex h-[261px] items-center justify-center left-[calc(50%-133.5px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[101px] transform-[translateX(-50%)] w-[373px]"
        data-node-id="1:2311"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%)",
          } as React.CSSProperties
        }
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[336px] whitespace-pre-wrap"
          data-node-id="1:2312"
        >
          <p className="leading-[1.57] mb-0">
            The inside of the crater is of great scientific interest:
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">
            At -173°C, it is one of the coldest places in the solar system.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57]">
            It holds billions of tons of ancient ice, imagine if we find a way to use it for daily
            needs!
          </p>
        </div>
      </div>
      <div
        className="absolute bg-[#08f] content-stretch flex h-[38px] items-center justify-center left-[calc(50%+192.5px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[329px] transform-[translateX(-50%)] w-[235px]"
        data-node-id="1:2313"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%)",
          } as React.CSSProperties
        }
      >
        <p
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[1.75] relative shrink-0 text-[15px] text-white tracking-[-0.225px] w-[202px]"
          data-node-id="1:2314"
        >{`Photo from NASA’s SVG `}</p>
      </div>
    </div>
  );
}

export function Frame78() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/f1f93.png`;
  return (
    <div className="relative size-full" data-node-id="1:2315">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2316"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2317"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-[calc(50%-4.5px)] w-[844px]"
        data-node-id="1:2318"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2319"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2320"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2321"
      >
        <p className="leading-[1.2]">Shackleton Crater’s Lit Side</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2322"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[217px] left-[515px] top-[101px] w-[262px]"
        data-node-id="1:2323"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
      <div
        className="absolute bg-[#08f] content-stretch flex h-[38px] items-center justify-center left-[calc(50%+210.5px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[330px] transform-[translateX(-50%)] w-[235px]"
        data-node-id="1:2324"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translateX(-50%)",
          } as React.CSSProperties
        }
      >
        <p
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[1.75] relative shrink-0 text-[15px] text-white tracking-[-0.225px] w-[224px]"
          data-node-id="1:2325"
        >
          Shackleton by NASA’s LRO
        </p>
      </div>
      <div
        className="absolute bg-[#fb227b] content-stretch flex h-[261px] items-center justify-center left-[110px] pb-[50px] pl-[11px] pr-[10px] pt-[43px] rounded-[5.156px] top-[101px] w-[373px]"
        data-node-id="1:2326"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[352px] whitespace-pre-wrap"
          data-node-id="1:2327"
        >
          <p className="leading-[1.57] mb-0">
            The high mountain ridges on the rim receive continous Sunlight almost 90% of the year.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57]">
            This would give us an ideal area for Solar Power generation and growing crops in our
            Outpost’s greenhouse!
          </p>
        </div>
      </div>
    </div>
  );
}

export function Frame80() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:5991">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:5992"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-[calc(50%-0.5px)] w-[844px]"
        data-node-id="1:5993"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5994"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5995"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5996"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col items-start left-[422px] top-[105px] w-[324px]"
        data-node-id="1:5997"
      >
        <div
          className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full"
          data-node-id="1:5998"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
            data-node-id="1:5999"
          >
            Leo
          </p>
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-node-id="1:6000"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.75] relative shrink-0 w-[115px]"
              data-node-id="1:6001"
            >
              <p
                className="font-['Orbitron:SemiBold'] font-semibold min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-[min-content]"
                data-node-id="1:6002"
              >
                Role
              </p>
              <p
                className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] text-center tracking-[-0.225px] w-[157px]"
                data-node-id="1:6003"
              >
                Systems Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] h-[109px] left-[calc(50%+190.5px)] rounded-[5.156px] top-[228px] w-[381px]"
        data-node-id="1:6004"
      />
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold h-[108px] justify-center leading-[0] left-[444px] text-[16px] text-white top-[281px] w-[321px]"
        data-node-id="1:6005"
      >
        <p className="leading-[normal]">{`"Good choice, Commander. We'll have a better chance of keeping the solar arrays charged in the sunlit ridge."`}</p>
      </div>
      <div
        className="absolute h-[281px] left-[64px] top-[105px] w-[301px]"
        data-node-id="1:6006"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame81() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautExplorer = `${assetPathPrefix}/ba8b5.png`;
  return (
    <div className="relative size-full" data-node-id="1:6007">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:6008"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-[calc(50%-0.5px)] w-[844px]"
        data-node-id="1:6009"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6010"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6011"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6012"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col items-start left-[422px] top-[105px] w-[324px]"
        data-node-id="1:6013"
      >
        <div
          className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full"
          data-node-id="1:6014"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
            data-node-id="1:6015"
          >
            Zara
          </p>
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-node-id="1:6016"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.75] relative shrink-0 w-[115px]"
              data-node-id="1:6017"
            >
              <p
                className="font-['Orbitron:SemiBold'] font-semibold min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-[min-content]"
                data-node-id="1:6018"
              >
                Role
              </p>
              <p
                className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] text-center tracking-[-0.225px] w-[75px]"
                data-node-id="1:6019"
              >
                Biologist
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[109px] items-center justify-center left-[calc(50%+190.5px)] px-[12.891px] py-[10.313px] rounded-[5.156px] top-[228px] w-[381px]"
        data-node-id="1:6020"
      >
        <div
          className="[word-break:break-word] flex flex-col font-['Orbitron:Bold'] font-bold h-[84px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[324px]"
          data-node-id="1:6021"
        >
          <p className="leading-[normal] mb-0">{`"We could learn so much from those shadowed regions. I hope we're ready for the challenges."`}</p>
          <p className="leading-[normal]">​</p>
        </div>
      </div>
      <div
        className="absolute h-[321px] left-[42px] top-[65px] w-[294px]"
        data-node-id="1:6022"
        data-name="Female astronaut — Explorer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautExplorer}
        />
      </div>
    </div>
  );
}

export function Frame83() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage16 = `${assetPathPrefix}/ada9f.png`;
  return (
    <div className="relative size-full" data-node-id="1:5592">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5593"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5594"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5595"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5596"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%+54px)] top-[91px] w-[622px]"
        data-node-id="1:5597"
        data-name="Boss_Name_Table 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable2}
          />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5598"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+64px)] text-[18px] text-center text-white top-[calc(50%-54px)] tracking-[-0.27px] w-[516px] whitespace-pre-wrap"
        data-node-id="1:5599"
      >
        <p className="leading-[1.5] mb-0">{`Your crew has four people. `}</p>
        <p className="leading-[1.5] mb-0">Your mission lasts 30 days.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">
          You must calculate and keep track of all your supplies.
        </p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div
        className="absolute left-[-35px] size-[377px] top-[91px]"
        data-node-id="1:5600"
        data-name="image 16"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={imgImage16}
          />
        </div>
      </div>
    </div>
  );
}

export function Frame84() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage11 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:5673">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[570px] left-[calc(50%+23.5px)] top-[calc(50%+79px)] w-[891px]"
        data-node-id="1:5674"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5675"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5676"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5677"
      >
        <p className="leading-[1.2]">Calculate Water Intake</p>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[261px] items-center justify-center left-[calc(50%+58px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[92px] w-[584px]"
        data-node-id="1:5678"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold h-[202px] leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-0.225px] w-[527px] whitespace-pre-wrap"
          data-node-id="1:5679"
        >
          <p className="leading-[1.57] mb-0 text-[20px]">{`An average astronaut needs ~3.54 kg per day for drinking and hygiene. `}</p>
          <p className="leading-[1.57] mb-0 text-[15px]">​</p>
          <p className="leading-[1.57] mb-0 text-[15px]">Water Intake calculator:</p>
          <p className="leading-[1.57] text-[15px]">​</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5680"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-12px] size-[355px] top-[142px]"
        data-node-id="1:5681"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 11">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-[-0.56%]"
                src={imgImage11}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-white h-[46px] left-[188px] top-[353px] w-[216px]"
        data-node-id="1:5682"
      />
      <p
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[45px] leading-[1.75] left-[194px] text-[#0b3aa8] text-[13px] top-[353px] tracking-[-0.195px] w-[210px]"
        data-node-id="1:5683"
      >{`NASA’s Human Integration Design Handbook `}</p>
    </div>
  );
}

export function Frame85() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage13 = `${assetPathPrefix}/17ca7.png`;
  return (
    <div className="relative size-full" data-node-id="1:5684">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-[calc(50%-5px)] top-[calc(50%+4.5px)] w-[844px]"
        data-node-id="1:5685"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5686"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5687"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5688"
      >
        <p className="leading-[1.2] whitespace-pre">{`Calculate Oxygen  Supply`}</p>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[261px] items-center justify-center left-[calc(50%+58px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[92px] w-[584px]"
        data-node-id="1:5689"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold h-[202px] leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-0.225px] w-[527px] whitespace-pre-wrap"
          data-node-id="1:5690"
        >
          <p className="leading-[1.57] mb-0 text-[20px]">
            An average astronaut needs about 0.89 kg/day of liquid Oxygen.
          </p>
          <p className="leading-[1.57] mb-0 text-[15px]">​</p>
          <p className="leading-[1.57] mb-0 text-[15px]">Oxygen Intake Calculator:</p>
          <p className="leading-[1.57] text-[15px]">​</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5691"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-100px] size-[355px] top-[118px]"
        data-node-id="1:5692"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 13">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[-19.72%] max-w-none size-full top-0"
                src={imgImage13}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-white h-[46px] left-[188px] top-[353px] w-[216px]"
        data-node-id="1:5693"
      />
      <p
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.75] left-[194px] text-[#0b3aa8] text-[13px] top-[353px] tracking-[-0.195px] w-[210px]"
        data-node-id="1:5694"
      >{`NASA’s Human Integration Design Handbook `}</p>
      <p
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[45px] leading-[1.75] left-[194px] text-[#0b3aa8] text-[13px] top-[353px] tracking-[-0.195px] w-[210px]"
        data-node-id="1:5695"
      >{`NASA’s Human Integration Design Handbook `}</p>
    </div>
  );
}

export function Frame86() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage13 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:5696">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5697"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5698"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5699"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5700"
      >
        <p className="leading-[1.2] whitespace-pre">{`Calculate Food  Supply`}</p>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[261px] items-center justify-center left-[calc(50%+58px)] pb-[17px] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[92px] w-[584px]"
        data-node-id="1:5701"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold h-[202px] leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-0.225px] w-[527px] whitespace-pre-wrap"
          data-node-id="1:5702"
        >
          <p className="leading-[1.57] mb-0 text-[20px]">
            For food, an average astronaut needs about 0.62 kg per day (dry weight)
          </p>
          <p className="leading-[1.57] mb-0 text-[20px]">​</p>
          <p className="leading-[1.57] mb-0 text-[15px]">Food Supply Calculator:</p>
          <p className="leading-[1.57] text-[15px]">​</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5703"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-92px] size-[355px] top-[112px]"
        data-node-id="1:5704"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 13">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-[-0.56%]"
                src={imgImage13}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[47px] left-[198px] top-[335px] w-[210px]" data-node-id="1:5705">
        <div className="absolute bg-white h-[47px] left-0 top-0 w-[210px]" data-node-id="1:5706" />
        <p
          className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[46px] leading-[1.75] left-[calc(50%-101px)] text-[#071f6e] text-[13px] top-[calc(50%-22.5px)] tracking-[-0.195px] w-[203px]"
          data-node-id="1:5707"
        >{`NASA’s Human Integration Design Handbook `}</p>
      </div>
    </div>
  );
}

export function Frame88() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage14 = `${assetPathPrefix}/cb0c7.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:5610">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5611"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5612"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5613"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5614"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5615"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute left-[-85px] size-[389px] top-[93px]"
        data-node-id="1:5616"
        data-name="image 14"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage14}
        />
      </div>
      <div
        className="-translate-x-1/2 absolute h-[201px] left-[calc(50%+57px)] top-[153px] w-[560px]"
        data-node-id="1:5617"
        data-name="Boss_Name_Table 1"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[205.4%] left-[59.64%] max-w-none top-[220.08%] w-full"
              src={imgBossNameTable1}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[192px] left-[calc(50%+82.5px)] top-[110px] w-[553px]"
        data-node-id="1:5618"
        data-name="Boss_Name_Table 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+82.5px)] text-[18px] text-center text-white top-[calc(50%-53px)] tracking-[-0.27px] w-[441px]"
        data-node-id="1:5619"
      >
        <p className="leading-[1.5] mb-0">
          For long-term missions, a huge amount of supplies would be needed aboard .
        </p>
        <p className="leading-[1.5] mb-0">
          What if the astronauts ran out of supplies and couldn’t get a re-stock in time?
        </p>
        <p className="leading-[1.5]">​</p>
      </div>
    </div>
  );
}

export function Frame89() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/4cd23.png`;
  return (
    <div className="relative size-full" data-node-id="1:5664">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5665"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5666"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5667"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5668"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%+54px)] top-[91px] w-[622px]"
        data-node-id="1:5669"
        data-name="Boss_Name_Table 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable2}
          />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5670"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+59.5px)] text-[18px] text-center text-white top-[calc(50%-58px)] tracking-[-0.27px] w-[555px] whitespace-pre-wrap"
        data-node-id="1:5671"
      >
        <p className="leading-[1.5] mb-0">{`Lucky for us, Commander. `}</p>
        <p className="leading-[1.5] mb-0">
          We are using Regenerative Systems called Environmental Control and Life Support Systems
          (ECLSS) developed by NASA’s Marshall Space Flight Center.
        </p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-51px] size-[325px] top-[93px]"
        data-node-id="1:5672"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[325px]" data-name="image 12">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame91() {
  return (
    <div className="relative size-full" data-node-id="1:6024">
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6025"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6026"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Frame98() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:6079">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[684px] left-[calc(50%-39.5px)] top-[calc(50%-105px)] w-[1069px]"
        data-node-id="1:6080"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6081"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6082"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6083"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[135.49px] left-1/2 top-[calc(50%+9.75px)] w-[624px]"
        data-node-id="1:6084"
      >
        <div
          className="-translate-x-1/2 absolute h-[135.49px] left-1/2 top-0 w-[621.514px]"
          data-node-id="1:6085"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[calc(50%+28px)] text-[18px] text-center text-white top-[calc(50%-27.75px)] tracking-[-0.27px] w-[444px]"
          data-node-id="1:6086"
        >
          The day you all have been training for has finally arrived. It’s mission launch day!
        </p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6087"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-61px] size-[355px] top-[148px]"
        data-node-id="1:6088"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame99() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:6256">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6257"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6258"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6259"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6260"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[135.49px] left-1/2 top-[calc(50%+9.75px)] w-[624px]"
        data-node-id="1:6261"
      >
        <div
          className="-translate-x-1/2 absolute h-[135.49px] left-1/2 top-0 w-[621.514px]"
          data-node-id="1:6262"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[calc(50%+28px)] text-[18px] text-center text-white top-[calc(50%-27.75px)] tracking-[-0.27px] w-[444px]"
          data-node-id="1:6263"
        >
          Your final checks are done. Let’s head over to NASA’s Kennedy Space Center in Florida
        </p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6264"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-61px] size-[355px] top-[148px]"
        data-node-id="1:6265"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame100() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  return (
    <div className="relative size-full" data-node-id="1:6089">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[412px] left-1/2 overflow-clip top-1/2 w-[844px]"
        data-node-id="1:6090"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
          data-node-id="1:6091"
          data-name="Background"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img
              alt=""
              className="absolute max-w-none object-cover size-full"
              src={imgBackground}
            />
            <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
          </div>
        </div>
        <div
          className="absolute size-[44px] left-[42px] top-[34px]"
          data-node-id="1:6092"
          data-name="Backward_BTN 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={uiNavArrow}
          />
        </div>
        <div
          className="absolute size-[44px] left-[759px] top-[34px]"
          data-node-id="1:6093"
          data-name="Menu_BTN 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={uiMenu}
          />
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
          data-node-id="1:6094"
        >
          <p className="leading-[1.2]">Journey to the Launch Site</p>
        </div>
        <div
          className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
          data-node-id="1:6095"
        >
          <div className="-scale-x-100 flex-none">
            <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={uiNavArrow}
              />
            </a>
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[61px] items-center justify-center left-[calc(50%-274px)] pl-[12.891px] py-[10.313px] rounded-[5.156px] top-[336px] w-[232px]"
          data-node-id="1:6096"
        >
          <div
            className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[242px]"
            data-node-id="1:6097"
          >
            <p className="leading-[1.57] mb-0">NASA’s Artemis ||</p>
            <p className="leading-[1.57]">Mission Footage</p>
          </div>
        </div>
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[231.957px] left-1/2 overflow-clip rounded-[7.732px] top-[calc(50%-0.02px)] w-[412px]"
          data-node-id="1:6098"
        >
          <div
            className="absolute h-[231.854px] left-0 top-0 w-[412.184px]"
            data-node-id="1:6099"
            data-name="WhatsApp Video 2026-11-13 at 2.09.26 AM (1) 1"
          >
            <ArtemisLaunchSiteVisual />
          </div>
        </div>
      </div>
      <a
        className="absolute block cursor-pointer left-[42px] size-[44px] top-[34px]"
        data-node-id="1:6100"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute left-[759px] size-[44px] top-[34px]"
        data-node-id="1:6101"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6102"
      >
        <p className="leading-[1.2]">Journey to the Launch Site</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6103"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[61px] items-center justify-center left-[calc(50%-274px)] pl-[12.891px] py-[10.313px] rounded-[5.156px] top-[336px] w-[232px]"
        data-node-id="1:6104"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[242px]"
          data-node-id="1:6105"
        >
          <p className="leading-[1.57] mb-0">NASA’s Artemis ||</p>
          <p className="leading-[1.57]">Mission Footage</p>
        </div>
      </div>
    </div>
  );
}

export function Frame101() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage14 = `${assetPathPrefix}/ada9f.png`;
  return (
    <div className="relative size-full" data-node-id="1:5620">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5621"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5622"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5623"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5624"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5625"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[201px] left-[calc(50%+79px)] top-[149px] w-[560px]"
        data-node-id="1:5626"
        data-name="Boss_Name_Table 1"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[205.4%] left-[59.64%] max-w-none top-[220.08%] w-full"
              src={imgBossNameTable1}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[220px] left-[calc(50%+48px)] top-[100px] w-[578px]"
        data-node-id="1:5627"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[1.5] left-[calc(50%+48px)] text-[18px] text-center text-white top-[calc(50%-43px)] tracking-[-0.27px] w-[450px]"
        data-node-id="1:5628"
      >
        But running out of Oxygen, Food Or Water supplies are not the only problems that your crew
        needs to worry about.
      </p>
      <div
        className="absolute left-[-47px] size-[377px] top-[78px]"
        data-node-id="1:5629"
        data-name="image 14"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={imgImage14}
          />
        </div>
      </div>
    </div>
  );
}

export function Frame102() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage14 = `${assetPathPrefix}/cb0c7.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:5630">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5631"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5632"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5633"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5634"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5635"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute left-[-85px] size-[389px] top-[93px]"
        data-node-id="1:5636"
        data-name="image 14"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage14}
        />
      </div>
      <div
        className="-translate-x-1/2 absolute h-[201px] left-[calc(50%+79px)] top-[149px] w-[560px]"
        data-node-id="1:5637"
        data-name="Boss_Name_Table 1"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[205.4%] left-[59.64%] max-w-none top-[220.08%] w-full"
              src={imgBossNameTable1}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[220px] left-[calc(50%+48px)] top-[100px] w-[578px]"
        data-node-id="1:5638"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[0] left-[calc(50%+45px)] text-[18px] text-center text-white top-[calc(50%-91px)] tracking-[-0.27px] w-[450px] whitespace-pre-wrap"
        data-node-id="1:5639"
      >
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[0] left-[calc(50%+51.5px)] text-[18px] text-center text-white top-[calc(50%-64px)] tracking-[-0.27px] w-[483px]"
        data-node-id="1:5640"
      >
        <p className="leading-[1.5] mb-0">
          Deep space is full of invisible, high-speed particles called space radiation
        </p>
        <p className="leading-[1.5] mb-0">—kind of like tiny cosmic bullets.</p>
        <p className="leading-[1.5]">These slow down if they get absorbed by matter.</p>
      </div>
    </div>
  );
}

export function Frame103() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage14 = `${assetPathPrefix}/cb0c7.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:5641">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5642"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5643"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5644"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5645"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5646"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute left-[-85px] size-[389px] top-[93px]"
        data-node-id="1:5647"
        data-name="image 14"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage14}
        />
      </div>
      <div
        className="-translate-x-1/2 absolute h-[201px] left-[calc(50%+79px)] top-[149px] w-[560px]"
        data-node-id="1:5648"
        data-name="Boss_Name_Table 1"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[205.4%] left-[59.64%] max-w-none top-[220.08%] w-full"
              src={imgBossNameTable1}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[220px] left-[calc(50%+48px)] top-[100px] w-[578px]"
        data-node-id="1:5649"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[0] left-[calc(50%+45px)] text-[18px] text-center text-white top-[calc(50%-91px)] tracking-[-0.27px] w-[450px] whitespace-pre-wrap"
        data-node-id="1:5650"
      >
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[1.5] left-[calc(50%+63px)] text-[18px] text-center text-white top-[calc(50%-47px)] tracking-[-0.27px] w-[450px]"
        data-node-id="1:5651"
      >
        To keep your astronauts safe, your ship needs heavy radiation shielding (like thick walls of
        water and special plastic).
      </p>
    </div>
  );
}

export function Frame104() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage15 = `${assetPathPrefix}/ada9f.png`;
  return (
    <div className="relative size-full" data-node-id="1:5652">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5653"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5654"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5655"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5656"
      >
        <p className="leading-[1.2]">The Power-Mass tradeoff</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5657"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[201px] left-[calc(50%+79px)] top-[149px] w-[560px]"
        data-node-id="1:5658"
        data-name="Boss_Name_Table 1"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[205.4%] left-[59.64%] max-w-none top-[220.08%] w-full"
              src={imgBossNameTable1}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[220px] left-[calc(50%+48px)] top-[100px] w-[578px]"
        data-node-id="1:5659"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[0] left-[calc(50%+45px)] text-[18px] text-center text-white top-[calc(50%-91px)] tracking-[-0.27px] w-[450px] whitespace-pre-wrap"
        data-node-id="1:5660"
      >
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div
        className="absolute left-[-9px] size-[377px] top-[75px]"
        data-node-id="1:5661"
        data-name="image 15"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={imgImage15}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[135px] leading-[0] left-[calc(50%+60px)] text-[18px] text-center text-white top-[calc(50%-62px)] tracking-[-0.27px] w-[450px]"
        data-node-id="1:5662"
      >
        <p className="leading-[1.5] mb-0">But here is the trade-off.</p>
        <p className="leading-[1.5] mb-0">{`Every kilogram of heavy shielding you add makes your spaceship harder to push and drains power from your engines & machines!`}</p>
        <p className="leading-[1.5]">​</p>
      </div>
    </div>
  );
}

export function Frame105() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgCloud021 = `${assetPathPrefix}/62426.png`;
  const imgFrame93 = `${assetPathPrefix}/5a967.svg`;
  const imgFrame94 = `${assetPathPrefix}/b88e4.svg`;
  return (
    <div className="relative size-full" data-node-id="1:6027">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-[calc(50%+5px)] top-[calc(50%+41px)] w-[844px]"
        data-node-id="1:6028"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6029"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6030"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6031"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6032"
      >
        <p className="leading-[1.2]">Make Your Trade-off</p>
      </div>
      <div
        className="absolute h-[22.768px] left-[395.05px] top-[108.84px] w-[270.482px]"
        data-node-id="1:6033"
      />
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] h-[62px] left-[calc(50%+17.5px)] rounded-[5.156px] top-[88px] w-[707px]"
        data-node-id="1:6034"
      >
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[39px] leading-[2] left-1/2 text-[20px] text-center text-white top-[calc(50%-20px)] tracking-[-0.3px] w-[687px]"
          data-node-id="1:6035"
        >
          Slide the bar below to balance your Shielding and Power needs!
        </p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[188px] left-[calc(50%+4.5px)] top-[calc(50%+64px)] w-[603px]"
        data-node-id="1:6036"
        data-name="Cloud_02 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[117.26%] left-0 max-w-none top-[0.02%] w-[100.05%]"
            src={imgCloud021}
          />
        </div>
      </div>
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold h-[20px] justify-center leading-[0] left-[183px] text-[17.304px] text-white top-[236px] tracking-[-0.2596px] w-[164px]"
        data-node-id="1:6037"
      >
        <p className="leading-[1.2]">Power Systems</p>
      </div>
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold h-[20px] justify-center leading-[0] left-[172px] text-[17.304px] text-white top-[303px] tracking-[-0.2596px] w-[208px]"
        data-node-id="1:6038"
      >
        <p className="leading-[1.2]">{`Radiation Shielding `}</p>
      </div>
      <div className="absolute h-[22px] left-[390px] top-[226px] w-[291px]" data-node-id="1:6039">
        <div className="absolute inset-[-20.7%_0_-24.19%_0]">
          <img alt="" className="block max-w-none size-full" src={imgFrame93} />
        </div>
      </div>
      <div className="absolute h-[22px] left-[390px] top-[293px] w-[291px]" data-node-id="1:6042">
        <div className="absolute inset-[-16.56%_0_-28.33%_0]">
          <img alt="" className="block max-w-none size-full" src={imgFrame94} />
        </div>
      </div>
    </div>
  );
}

export function Frame106() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:6266">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6267"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6268"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6269"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6270"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[135.49px] left-1/2 top-[calc(50%+9.75px)] w-[624px]"
        data-node-id="1:6271"
      >
        <div
          className="-translate-x-1/2 absolute h-[135.49px] left-1/2 top-0 w-[621.514px]"
          data-node-id="1:6272"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+38.5px)] text-[18px] text-center text-white top-[calc(50%-27.75px)] tracking-[-0.27px] w-[465px] whitespace-pre-wrap"
          data-node-id="1:6273"
        >
          <p className="leading-[1.57] mb-0">{`Good Job, now its finally time for life-off. `}</p>
          <p className="leading-[1.57]">Buckle up, Commander!</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6274"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-61px] size-[355px] top-[148px]"
        data-node-id="1:6275"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame107() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  return (
    <div className="relative size-full" data-node-id="1:6106">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6107"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6108"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6109"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6110"
      >
        <p className="leading-[1.2]">{`The Lift-Off `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6111"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[61px] items-center justify-center left-[calc(50%-274px)] pl-[12.891px] py-[10.313px] rounded-[5.156px] top-[336px] w-[232px]"
        data-node-id="1:6112"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[182px]"
          data-node-id="1:6113"
        >
          <p className="leading-[1.57] mb-0">NASA’s Artemis ||</p>
          <p className="leading-[1.57]">Mission Footage</p>
        </div>
      </div>
    </div>
  );
}

export function Frame109() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage13 = `${assetPathPrefix}/c759c.png`;
  return (
    <div className="relative size-full" data-node-id="1:2089">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[744px] left-[calc(50%+134.5px)] top-[calc(50%-138px)] w-[1163px]"
        data-node-id="1:2090"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2091"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2092"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2093"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%+26px)] top-[92px] w-[622px]"
        data-node-id="1:2094"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[158px] leading-[0] left-[calc(50%+40.5px)] text-[24px] text-center text-white top-[calc(50%-82px)] tracking-[-0.36px] w-[521px] whitespace-pre-wrap"
        data-node-id="1:2095"
      >
        <p className="leading-[1.22] mb-0">​</p>
        <p className="leading-[1.22] mb-0">​</p>
        <p className="leading-[1.22]">{`You're about to lead humanity's first long-duration experiment on the Moon.`}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2096"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-91px] size-[355px] top-[113px]"
        data-node-id="1:2097"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 13">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage13}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame110() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:6276">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6277"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6278"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6279"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6280"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[135.49px] left-[calc(50%+12px)] top-[calc(50%+6.75px)] w-[624px]"
        data-node-id="1:6281"
      >
        <div
          className="-translate-x-1/2 absolute h-[135.49px] left-1/2 top-0 w-[621.514px]"
          data-node-id="1:6282"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+29.5px)] text-[18px] text-center text-white top-[calc(50%-48.75px)] tracking-[-0.27px] w-[439px]"
          data-node-id="1:6283"
        >
          <p className="leading-[1.57] mb-0">Welcome aboard, Commander.</p>
          <p className="leading-[1.57]">{`Make sure to keep track of your Mission from your dashboard! `}</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6284"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-50px] size-[355px] top-[111px]"
        data-node-id="1:6285"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame111() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  return (
    <div className="relative size-full" data-node-id="1:6114">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6115"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6116"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6117"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6118"
      >
        <p className="leading-[1.2]">Viewing the Moon</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6119"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[61px] items-center justify-center left-[calc(50%-274px)] pl-[12.891px] py-[10.313px] rounded-[5.156px] top-[336px] w-[232px]"
        data-node-id="1:6120"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[242px]"
          data-node-id="1:6121"
        >
          <p className="leading-[1.57] mb-0">NASA’s Artemis ||</p>
          <p className="leading-[1.57]">Mission Footage</p>
        </div>
      </div>
    </div>
  );
}

export function Frame112() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautExplorer = `${assetPathPrefix}/ba8b5.png`;
  return (
    <div className="relative size-full" data-node-id="1:6286">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6287"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6288"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6289"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 absolute h-[135.49px] left-[calc(50%+25.76px)] top-[121px] w-[621.514px]"
        data-node-id="1:6290"
        data-name="Boss_Name_Table 1"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable1}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[61px] items-center justify-center left-[calc(50%-116px)] pl-[12.891px] py-[10.313px] rounded-[5.156px] top-[303px] w-[232px]"
        data-node-id="1:6291"
      >
        <div
          className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[15px] text-center text-white tracking-[-0.225px] w-[242px]"
          data-node-id="1:6292"
        >
          <p className="leading-[1.57] mb-0">Zara</p>
          <p className="leading-[1.57]">(Biologist)</p>
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[calc(50%+48px)] text-[18px] text-center text-white top-[calc(50%-56px)] tracking-[-0.27px] w-[480px]"
        data-node-id="1:6293"
      >
        Commander, look! We’ve come so close that we can see Shackleton Crater from here!
      </p>
      <div
        className="absolute h-[321px] left-0 top-[78px] w-[294px]"
        data-node-id="1:6294"
        data-name="Female astronaut — Explorer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautExplorer}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6295"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Frame113() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/eaccd.svg`;
  return (
    <div className="relative size-full" data-node-id="1:6049">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[564px] left-1/2 top-[calc(50%+82px)] w-[882px]"
        data-node-id="1:6050"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6051"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6052"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6053"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6054"
      >
        <p className="leading-[1.2]">Mission Dashboard</p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:6055"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:6056"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:6057"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:6058"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6059"
        >
          <span className="leading-[1.75]">{`Day: `}</span>
          <span className="leading-[1.75] text-[#fb227b]">0/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6060"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:6061"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  95`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  90`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  `}</span>
            <span className="leading-[1.75] text-[#fb227b]">70/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[38px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:6062"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6063"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6064"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6065">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6066"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6067"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6068">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:6069"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6070"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6071">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[38px] items-start left-[654px] top-[113px]"
        data-node-id="1:6072"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6073"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6074"
          >
            Normal
          </p>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6075"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6076"
          >
            No Alerts
          </p>
        </div>
        <div
          className="content-stretch flex items-center relative shrink-0 w-full"
          data-node-id="1:6077"
        >
          <div
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6078"
          >
            <p className="leading-[1.75] mb-0">Survive</p>
            <p className="leading-[1.75]">For 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame114() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/52eee.png`;
  return (
    <div className="relative size-full" data-node-id="1:6122">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6123"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6124"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6125"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6126"
      >
        <p className="leading-[1.2]">Settling On The Moon</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6127"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[195px] left-[calc(50%+38px)] top-[126px] w-[538px]"
        data-node-id="1:6128"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[435.5px] text-[15px] text-center text-white top-[158px] tracking-[-0.225px] w-[489px]"
        data-node-id="1:6129"
      >
        <p className="leading-[1.57] mb-0">Crew,</p>
        <p className="leading-[1.57] mb-0">
          After years of training and hard work, we have finally landed on the Moon.
        </p>
        <p className="leading-[1.57]">{`But our journey has just started....... `}</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[210px] top-[99px] w-[212px]"
        data-node-id="1:6130"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[315.5px] text-[15px] text-center text-white top-[114px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:6131"
      >
        Commander (YOU)
      </p>
      <div
        className="absolute h-[267px] left-[24px] top-[78px] w-[274px]"
        data-node-id="1:6132"
        data-name="Male astronaut — Pilot"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[102.62%] left-0 max-w-none top-[5.43%] w-full"
            src={imgMaleAstronautPilot}
          />
        </div>
      </div>
    </div>
  );
}

export function Frame115() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/52eee.png`;
  return (
    <div className="relative size-full" data-node-id="1:6133">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6134"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6135"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6136"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6137"
      >
        <p className="leading-[1.2]">Settling On The Moon</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6138"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[195px] left-[calc(50%+38px)] top-[126px] w-[538px]"
        data-node-id="1:6139"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[459.5px] text-[0px] text-center text-white top-[182px] tracking-[-0.225px] w-[489px]"
        data-node-id="1:6140"
      >
        <p className="leading-[1.57] mb-0 text-[15px]">
          We will spend the next few days settling down here.
        </p>
        <p className="leading-[1.57] mb-0 text-[15px]">Remember our mission:</p>
        <p className="leading-[1.57] text-[16px]">Prove that humanity can live on the Moon!</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[194px] top-[88px] w-[212px]"
        data-node-id="1:6141"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[299.5px] text-[15px] text-center text-white top-[102px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:6142"
      >
        Commander (YOU)
      </p>
      <div
        className="absolute h-[267px] left-[26px] top-[115px] w-[274px]"
        data-node-id="1:6143"
        data-name="Male astronaut — Pilot"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautPilot}
        />
      </div>
    </div>
  );
}

export function Frame116() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/9ebe1.png`;
  const imgRectangle5 = `${assetPathPrefix}/eb544.svg`;
  return (
    <div className="relative size-full" data-node-id="1:6246">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-[calc(50%+1px)] w-[844px]"
        data-node-id="1:6247"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6248"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6249"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6250"
      >
        <p className="leading-[1.2]">Building the Lunar Outpost</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6251"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[244px] left-[19px] top-[98px] w-[460px]"
        data-node-id="1:6252"
        data-name="Male astronaut — Pilot"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[4.88%] max-w-none top-0 w-[90.24%]"
            src={imgMaleAstronautPilot}
          />
        </div>
      </div>
      <div className="absolute h-[202px] left-[472px] top-[105px] w-[316px]" data-node-id="1:6253">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle5} />
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[139px] leading-[0] left-[625.5px] text-[15px] text-center text-white top-[136px] tracking-[-0.225px] w-[263px] whitespace-pre-wrap"
        data-node-id="1:6254"
      >
        <p className="leading-[1.57] mb-0">
          Over the next few days, the Crew spent their time setting up the Greenhouse and Power
          Systems on their Lunar Outpost.
        </p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">{` `}</p>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[45px] leading-[0] left-[160.5px] text-[15px] text-center text-white top-[352px] tracking-[-0.225px] w-[277px] whitespace-pre-wrap"
        data-node-id="1:6255"
      >
        <p className="leading-[1.57] mb-0">Image from NASA Moon Base</p>
        <p className="leading-[1.57]">{` `}</p>
      </div>
    </div>
  );
}

export function Frame117() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:6144">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6145"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6146"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6147"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6148"
      >
        <p className="leading-[1.2]">Power Systems - Stable</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6149"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+20px)] top-[137px] w-[524px]"
        data-node-id="1:6150"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[452.5px] text-[15px] text-center text-white top-[177px] tracking-[-0.225px] w-[443px]"
        data-node-id="1:6151"
      >
        <p className="leading-[1.57] mb-0">{`"Power systems are stable. I recommend keeping some battery reserve for emergencies."`}</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[194px] top-[88px] w-[212px]"
        data-node-id="1:6152"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[299.5px] text-[15px] text-center text-white top-[102px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:6153"
      >
        Leo (System Engineer)
      </p>
      <div
        className="absolute left-0 size-[301px] top-[78px]"
        data-node-id="1:6154"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame118() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  return (
    <div className="relative size-full" data-node-id="1:6155">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6156"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6157"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6158"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6159"
      >
        <p className="leading-[1.2]">Crew Health - Stable</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6160"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+20px)] top-[137px] w-[524px]"
        data-node-id="1:6161"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[452.5px] text-[15px] text-center text-white top-[177px] tracking-[-0.225px] w-[443px] whitespace-pre-wrap"
        data-node-id="1:6162"
      >
        <p className="leading-[1.57] mb-0">{`Everyone is settling in well, Commander. `}</p>
        <p className="leading-[1.57] mb-0">No health issues have shown so far.</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[194px] top-[88px] w-[212px]"
        data-node-id="1:6163"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[299px] text-[15px] text-center text-white top-[102px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:6164"
      >
        Maya (Medical Officer)
      </p>
      <div
        className="absolute flex h-[304.292px] items-center justify-center left-[10px] top-[78px] w-[288.87px]"
        data-node-id="1:6165"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[303.106px] relative w-[287.62px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame119() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautExplorer = `${assetPathPrefix}/ba8b5.png`;
  return (
    <div className="relative size-full" data-node-id="1:6166">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:6167"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6168"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6169"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6170"
      >
        <p className="leading-[1.2]">Greenhouse - Stable</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6171"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+20px)] top-[137px] w-[524px]"
        data-node-id="1:6172"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[452.5px] text-[15px] text-center text-white top-[177px] tracking-[-0.225px] w-[443px] whitespace-pre-wrap"
        data-node-id="1:6173"
      >
        <p className="leading-[1.57] mb-0">The greenhouse is getting ready.</p>
        <p className="leading-[1.57] mb-0">{`Looks like we’ll be the  first to grow food on the Moon!!`}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[194px] top-[88px] w-[212px]"
        data-node-id="1:6174"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[299.5px] text-[15px] text-center text-white top-[102px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:6175"
      >
        Zara (Biologist)
      </p>
      <div
        className="absolute h-[274px] left-[42px] top-[88px] w-[238px]"
        data-node-id="1:6176"
        data-name="Female astronaut — Explorer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautExplorer}
        />
      </div>
    </div>
  );
}

export function Frame120() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/82b38.svg`;
  return (
    <div className="relative size-full" data-node-id="1:6297">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[564px] left-1/2 top-[calc(50%+82px)] w-[882px]"
        data-node-id="1:6298"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6299"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6300"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6301"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[#ff383c] text-[32px] tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6302"
      >
        <p>
          <span className="leading-[1.2]">{`ALERT! `}</span>
          <span className="leading-[1.2] text-white">Mission Dashboard</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:6303"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:6304"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:6305"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:6306"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6307"
        >
          <span className="leading-[1.75]">Day: 8</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6308"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:6309"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  95`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  90`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  `}</span>
            <span className="leading-[1.75] text-[#fb227b]">70/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[38px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:6310"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6311"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6312"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6313">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6314"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6315"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6316">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:6317"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6318"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6319">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#ff2d55] h-[76px] left-[637px] top-[175px] w-[185px]"
        data-node-id="1:6320"
      />
      <div
        className="absolute flex h-[220.468px] items-center justify-center left-[653.48px] top-[112.67px] w-[149.693px]"
        data-node-id="1:6321"
      >
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative">
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:6322"
            >
              <p
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6323"
              >
                Normal
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:6324"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6325"
              >
                <p className="leading-[1.75] mb-0 whitespace-pre">{`GREENHOUSE `}</p>
                <p className="leading-[1.75] whitespace-pre">ALERT!</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="1:6326"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6327"
              >
                <p className="leading-[1.75] mb-0">Survive</p>
                <p className="leading-[1.75]">For 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame121() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautExplorer = `${assetPathPrefix}/ba8b5.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:6196">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:6197"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6198"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6199"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6200"
      >
        <p className="leading-[1.2]">Greenhouse Alert</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6201"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:6202"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:6203"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px]"
        data-node-id="1:6204"
      >{`Commander, the seedlings are growing, but we need more power than expected. `}</p>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[127px] top-[93px] w-[170px]"
        data-node-id="1:6205"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[221.5px] text-[15px] text-center text-white top-[108px] tracking-[-0.225px] w-[131px]"
        data-node-id="1:6206"
      >
        Zara (Biologist)
      </p>
      <div
        className="absolute h-[241px] left-[25px] top-[120px] w-[204px]"
        data-node-id="1:6207"
        data-name="Female astronaut — Explorer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautExplorer}
        />
      </div>
      <div
        className="absolute h-[247px] left-[627px] top-[99px] w-[217px]"
        data-node-id="1:6208"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
      <div
        className="absolute bg-[#fb227b] h-[42px] left-[450px] top-[325px] w-[227px]"
        data-node-id="1:6209"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[562.5px] text-[15px] text-center text-white top-[334px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:6210"
      >
        Leo (Systems Engineer)
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px]"
        data-node-id="1:6211"
      >
        We can redirect power by running other systems at lower capacity
      </p>
    </div>
  );
}

export function Frame122() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:6212">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[735px] left-[calc(50%+34.5px)] top-[calc(50%-49.5px)] w-[1149px]"
        data-node-id="1:6213"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6214"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6215"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6216"
      >
        <p className="leading-[1.2]">What Do We Do, Commander?</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6217"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[90px] left-[calc(50%-155.5px)] top-[116px] w-[449px]"
        data-node-id="1:6218"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-129px)] list-decimal text-[22px] text-center text-white top-[calc(50%+56px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:6219"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[90px] left-[calc(50%-155.5px)] top-[231px] w-[449px]"
        data-node-id="1:6220"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <a
        className="-translate-x-1/2 [word-break:break-word] absolute block cursor-pointer font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-173px)] text-[22px] text-center text-white top-[calc(50%-61px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:6221"
      >
        <ol className="list-decimal" start={1}>
          <li className="ms-[33px]">
            <span className="leading-[normal]">Increase greenhouse power</span>
          </li>
        </ol>
      </a>
      <div
        className="absolute bg-[#fb227b] h-[227px] left-[502px] top-[103px] w-[279px]"
        data-node-id="1:6222"
      />
      <a
        className="-translate-x-1/2 [word-break:break-word] absolute block cursor-pointer font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-155.5px)] text-[22px] text-center text-white top-[calc(50%+50px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:6223"
      >
        <ol className="list-decimal" start={2}>
          <li className="ms-[33px]">
            <span className="leading-[normal]">Keep current power allocation</span>
          </li>
        </ol>
      </a>
      <div
        className="[word-break:break-word] absolute font-['Orienta:Regular'] h-[223px] leading-[0] left-[516px] not-italic text-[20px] text-white top-[116px] tracking-[-0.26px] w-[254px] whitespace-pre-wrap"
        data-node-id="1:6224"
      >
        <p className="leading-[normal] mb-0">
          If you keep current allocation, your greenhouse may fail to produce food.....
        </p>
        <p className="leading-[normal] mb-0">{`but, increasing greenhouse power will decrease  `}</p>
        <p className="leading-[normal] mb-0">emergency power reserves.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">I</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

export function Frame124() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage17 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:6177">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:6178"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6179"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6180"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6181"
      >
        <p className="leading-[1.2]">{`Mission Control- Houston `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6182"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[169px] left-[calc(50%+25.5px)] top-[121px] w-[535px]"
        data-node-id="1:6183"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[452.5px] text-[15px] text-center text-white top-[157px] tracking-[-0.225px] w-[443px] whitespace-pre-wrap"
        data-node-id="1:6184"
      >
        <p className="leading-[1.57] mb-0">
          Commander, your power reserves have decreased but it looks like the greenhouse will be
          successful!
        </p>
        <p className="leading-[1.57] mb-0">
          Be careful of how much power you’ll be using from here onwards!
        </p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-6px] size-[296px] top-[99px]"
        data-node-id="1:6185"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[296px]" data-name="image 17">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage17}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame125() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage17 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:2703">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[644px] left-[calc(50%+75px)] top-[calc(50%-53px)] w-[1006px]"
        data-node-id="1:2704"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2705"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2706"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2707"
      >
        <p className="leading-[1.2]">{`Mission Control- Houston `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2708"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[169px] left-[calc(50%+25.5px)] top-[121px] w-[535px]"
        data-node-id="1:2709"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[160px] leading-[0] left-[249px] text-[15px] text-white top-[140px] tracking-[-0.225px] w-[439px] whitespace-pre-wrap"
        data-node-id="1:2710"
      >
        <p className="leading-[1.57] mb-0">{`Commander,  the plants in your greenhouse are growing very slowly. But your power reserves are strong for now.`}</p>
        <p className="leading-[1.57] mb-0">
          Just be careful of how much food the full crew is consuming....
        </p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-6px] size-[296px] top-[99px]"
        data-node-id="1:2711"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[296px]" data-name="image 17">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
                src={imgImage17}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame126() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/82b38.svg`;
  const imgRectangle6 = `${assetPathPrefix}/57dd5.svg`;
  return (
    <div className="relative size-full" data-node-id="1:6328">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[669px] left-1/2 top-[calc(50%+0.5px)] w-[1046px]"
        data-node-id="1:6329"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6330"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6331"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6332"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[#ff383c] text-[32px] tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6333"
      >
        <p>
          <span className="leading-[1.2] text-white">Mission Dashboard</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:6334"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:6335"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:6336"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:6337"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6338"
        >
          <span className="leading-[1.75]">Day: 15</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6339"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:6340"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  80`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75] text-[#ff383c]">Power</span>
            <span className="leading-[1.75]">{`  70`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  `}</span>
            <span className="leading-[1.75] text-[#fb227b]">70/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[46px] h-[229px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:6341"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6342"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6343"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6344">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6345"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6346"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6347">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:6348"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6349"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6350">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div className="absolute h-[76px] left-[637px] top-[165px] w-[177px]" data-node-id="1:6351">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle6} />
      </div>
      <div
        className="absolute flex h-[228.914px] items-center justify-center left-[645.94px] top-[111.71px] w-[197.913px]"
        data-node-id="1:6352"
      >
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[25px] h-[228.294px] items-start relative">
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:6353"
            >
              <p
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6354"
              >
                Normal
              </p>
            </div>
            <div
              className="content-stretch flex items-end justify-between relative shrink-0 w-full"
              data-node-id="1:6355"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] w-[197.195px]"
                data-node-id="1:6356"
              >
                <p className="leading-[1.75] mb-0">Low Power</p>
                <p className="leading-[1.75]">Reserves</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="1:6357"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6358"
              >
                <p className="leading-[1.75] mb-0">Survive</p>
                <p className="leading-[1.75]">For 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame127() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/82b38.svg`;
  const imgRectangle6 = `${assetPathPrefix}/57dd5.svg`;
  return (
    <div className="relative size-full" data-node-id="1:6359">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[763px] left-[calc(50%-155px)] top-[calc(50%-16.5px)] w-[1192px]"
        data-node-id="1:6360"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6361"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6362"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6363"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[#ff383c] text-[32px] tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6364"
      >
        <p>
          <span className="leading-[1.2] text-white">Mission Dashboard</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:6365"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:6366"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:6367"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:6368"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6369"
        >
          <span className="leading-[1.75]">Day: 15</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:6370"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:6371"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  80`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  80`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  `}</span>
            <span className="leading-[1.75] text-[#fb227b]">70/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[46px] h-[229px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:6372"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6373"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6374"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6375">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:6376"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6377"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6378">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:6379"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:6380"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:6381">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div className="absolute h-[76px] left-[637px] top-[165px] w-[177px]" data-node-id="1:6382">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle6} />
      </div>
      <div
        className="absolute flex h-[228.914px] items-center justify-center left-[645.94px] top-[111.71px] w-[197.913px]"
        data-node-id="1:6383"
      >
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[25px] h-[228.294px] items-start relative">
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:6384"
            >
              <p
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6385"
              >
                Normal
              </p>
            </div>
            <div
              className="content-stretch flex items-end justify-between relative shrink-0 w-full"
              data-node-id="1:6386"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] w-[197.195px]"
                data-node-id="1:6387"
              >
                <p className="leading-[1.75] mb-0">Food Stocks</p>
                <p className="leading-[1.75]">Limited</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="1:6388"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:6389"
              >
                <p className="leading-[1.75] mb-0">Survive</p>
                <p className="leading-[1.75]">For 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame128() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:6236">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[633px] left-[calc(50%-0.5px)] top-[calc(50%-73.5px)] w-[989px]"
        data-node-id="1:6237"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6238"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6239"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6240"
      >
        <p className="leading-[1.2]">You Picked:</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6241"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[90px] left-[calc(50%-155.5px)] top-[116px] w-[449px]"
        data-node-id="1:6242"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-173px)] list-decimal text-[22px] text-center text-white top-[calc(50%-61px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:6243"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <div
        className="absolute bg-[#fb227b] h-[95px] left-[508px] top-[173px] w-[229px]"
        data-node-id="1:6244"
      />
      <p
        className="[word-break:break-word] absolute font-['Orienta:Regular'] h-[90px] leading-[normal] left-[533px] not-italic text-[20px] text-white top-[178px] tracking-[-0.26px] w-[221px]"
        data-node-id="1:6245"
      >
        Check Your Mission Dashboard for any future alerts
      </p>
    </div>
  );
}

export function Frame129() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable3 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:6225">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[685px] left-[calc(50%+49.5px)] top-[calc(50%-128.5px)] w-[1071px]"
        data-node-id="1:6226"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:6227"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:6228"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:6229"
      >
        <p className="leading-[1.2]">You Picked:</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:6230"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-129px)] list-decimal text-[22px] text-center text-white top-[calc(50%+56px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:6231"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <div
        className="-translate-x-1/2 absolute h-[90px] left-[calc(50%-155.5px)] top-[231px] w-[449px]"
        data-node-id="1:6232"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable3}
          />
        </div>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[95px] left-[530px] top-[161px] w-[229px]"
        data-node-id="1:6233"
      />
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-155.5px)] list-decimal text-[22px] text-center text-white top-[calc(50%+50px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:6234"
        start={2}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Keep current power allocation</span>
        </li>
      </ol>
      <p
        className="[word-break:break-word] absolute font-['Orienta:Regular'] h-[90px] leading-[normal] left-[551px] not-italic text-[20px] text-white top-[172px] tracking-[-0.26px] w-[221px]"
        data-node-id="1:6235"
      >
        Check Your Mission Dashboard for any future alerts
      </p>
    </div>
  );
}

export function Frame130() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  return (
    <div className="relative size-full" data-node-id="1:5852">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:5853"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[602px] left-[calc(50%+5.5px)] top-[calc(50%-101px)] w-[941px]"
        data-node-id="1:5854"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5855"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5856"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5857"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5858"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[262px] left-[95px] top-[111px] w-[181px]"
        data-node-id="1:5859"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:5860"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:5861"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[390px] overflow-clip top-[105px] w-[356px]"
        data-node-id="1:5862"
      >
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[19px] items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:5863"
        >
          <div
            className="content-stretch flex flex-col gap-[7px] items-start leading-[1.75] relative shrink-0 w-full"
            data-node-id="1:5864"
          >
            <p
              className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:5865"
            >
              Maya
            </p>
            <div
              className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:5866"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[115px]"
                data-node-id="1:5867"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:5868"
                >
                  Role
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] text-center tracking-[-0.225px] w-full"
                  data-node-id="1:5869"
                >
                  Medical Oficer
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]"
                data-node-id="1:5870"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:5871"
                >
                  Personality
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:5872"
                >
                  Observant and kind
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col font-['Orbitron:Medium'] font-medium gap-[7px] items-start relative shrink-0 w-[98px]"
            data-node-id="1:5873"
          >
            <p
              className="leading-[1.75] relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
              data-node-id="1:5874"
            >
              Stats
            </p>
            <div
              className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-[#fb227b] text-[16px] text-center tracking-[-0.24px] w-full"
              data-node-id="1:5875"
            >
              <p className="relative shrink-0 w-full" data-node-id="1:5876">
                <span className="leading-[1.75]">{`Health: `}</span>
                <span className="leading-[1.75] text-white">100</span>
              </p>
              <div className="h-[28px] relative shrink-0 w-full" data-node-id="1:5877">
                <p className="mb-0">
                  <span className="leading-[1.75]">{`Fatigue: `}</span>
                  <span className="leading-[1.75] text-white">20</span>
                </p>
                <p className="leading-[1.75]">​</p>
              </div>
              <p className="relative shrink-0 w-full" data-node-id="1:5878">
                <span className="leading-[1.75]">{`Morale: `}</span>
                <span className="leading-[1.75] text-white">85</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame131() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:5907">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:5908"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[603px] left-[calc(50%-8px)] top-[calc(50%-100.5px)] w-[942px]"
        data-node-id="1:5909"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5910"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5911"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5912"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5913"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:5914"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:5915"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[295px] left-[390px] overflow-clip top-[105px] w-[356px]"
        data-node-id="1:5916"
      >
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[19px] items-start left-[10px] top-[-8px] w-[324px]"
          data-node-id="1:5917"
        >
          <div
            className="content-stretch flex flex-col gap-[7px] items-start leading-[1.75] relative shrink-0 w-full"
            data-node-id="1:5918"
          >
            <p
              className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:5919"
            >
              Leo
            </p>
            <div
              className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:5920"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[115px]"
                data-node-id="1:5921"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:5922"
                >
                  Role
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:5923"
                >
                  Systems Engineer
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]"
                data-node-id="1:5924"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:5925"
                >
                  Personality
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:5926"
                >{`Analytical `}</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col font-['Orbitron:Medium'] font-medium gap-[7px] items-start relative shrink-0 w-[98px]"
            data-node-id="1:5927"
          >
            <p
              className="leading-[1.75] relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
              data-node-id="1:5928"
            >
              Stats
            </p>
            <div
              className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-[#fb227b] text-[16px] text-center tracking-[-0.24px] w-full"
              data-node-id="1:5929"
            >
              <p className="relative shrink-0 w-full" data-node-id="1:5930">
                <span className="leading-[1.75]">{`Health: `}</span>
                <span className="leading-[1.75] text-[#ccc]">9</span>
                <span className="leading-[1.75] text-white">0</span>
              </p>
              <div className="h-[28px] relative shrink-0 w-full" data-node-id="1:5931">
                <p className="mb-0">
                  <span className="leading-[1.75]">Fatigue:</span>
                  <span className="leading-[1.75] text-[#ccc]">{` 3`}</span>
                  <span className="leading-[1.75] text-white">0</span>
                </p>
                <p className="leading-[1.75]">​</p>
              </div>
              <p className="relative shrink-0 w-full" data-node-id="1:5932">
                <span className="leading-[1.75]">{`Morale: `}</span>
                <span className="leading-[1.75] text-white">80</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-[42px] size-[301px] top-[88px]"
        data-node-id="1:5933"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame132() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  const imgFemaleAstronautExplorer = `${assetPathPrefix}/ba8b5.png`;
  return (
    <div className="relative size-full" data-node-id="1:5879">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[694px] left-[calc(50%+9.5px)] top-[calc(50%+5px)] w-[1085px]"
        data-node-id="1:5880"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[208px] items-center justify-center left-[calc(50%-695.5px)] top-[calc(50%-361px)] w-[325px]"
        data-node-id="1:5881"
      >
        <div className="flex-none rotate-180">
          <div className="h-[208px] relative w-[325px]" data-name="Background">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute max-w-none object-cover size-full"
                src={imgBackground}
              />
              <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
            </div>
          </div>
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5882"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5883"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5884"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5885"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[262px] left-[95px] top-[111px] w-[181px]"
        data-node-id="1:5886"
        data-name="Female astronaut — Navigator"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[90.88%] max-w-none top-[-179.01%] w-[144.75%]"
            src={imgFemaleAstronautNavigator}
          />
        </div>
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:5887"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:5888"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[390px] overflow-clip top-[105px] w-[356px]"
        data-node-id="1:5889"
      >
        <div
          className="[word-break:break-word] absolute content-stretch flex flex-col gap-[19px] items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:5890"
        >
          <div
            className="content-stretch flex flex-col gap-[7px] items-start leading-[1.75] relative shrink-0 w-full"
            data-node-id="1:5891"
          >
            <p
              className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:5892"
            >
              Zara
            </p>
            <div
              className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:5893"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[115px]"
                data-node-id="1:5894"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:5895"
                >
                  Role
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:5896"
                >
                  Biologist
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]"
                data-node-id="1:5897"
              >
                <p
                  className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                  data-node-id="1:5898"
                >
                  Personality
                </p>
                <p
                  className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-full"
                  data-node-id="1:5899"
                >{`Co-operative `}</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col font-['Orbitron:Medium'] font-medium gap-[7px] items-start relative shrink-0 w-[98px]"
            data-node-id="1:5900"
          >
            <p
              className="leading-[1.75] relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
              data-node-id="1:5901"
            >
              Stats
            </p>
            <div
              className="content-stretch flex flex-col gap-[5px] items-start leading-[0] relative shrink-0 text-[#fb227b] text-[16px] text-center tracking-[-0.24px] w-full"
              data-node-id="1:5902"
            >
              <p className="relative shrink-0 w-full" data-node-id="1:5903">
                <span className="leading-[1.75]">Health:</span>
                <span className="leading-[1.75] text-white">{` 8`}</span>
                <span className="leading-[1.75] text-white">0</span>
              </p>
              <div className="h-[28px] relative shrink-0 w-full" data-node-id="1:5904">
                <p className="mb-0">
                  <span className="leading-[1.75]">{`Fatigue: `}</span>
                  <span className="leading-[1.75] text-white">4</span>
                  <span className="leading-[1.75] text-white">0</span>
                </p>
                <p className="leading-[1.75]">​</p>
              </div>
              <p className="relative shrink-0 w-full" data-node-id="1:5905">
                <span className="leading-[1.75]">Morale:</span>
                <span className="leading-[1.75] text-[#f2f2f7]">100</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[274px] left-[67px] top-[112px] w-[238px]"
        data-node-id="1:5906"
        data-name="Female astronaut — Explorer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautExplorer}
        />
      </div>
    </div>
  );
}

export function Frame134() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  return (
    <div className="relative size-full" data-node-id="1:5953">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%+0.5px)] top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:5954"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[753px] left-[calc(50%-48.5px)] top-[calc(50%+0.5px)] w-[1176px]"
        data-node-id="1:5955"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5956"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5957"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5958"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5959"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[262px] left-[95px] top-[111px] w-[181px]"
        data-node-id="1:5960"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
      <div
        className="absolute content-stretch flex flex-col items-start left-[422px] top-[105px] w-[324px]"
        data-node-id="1:5961"
      >
        <div
          className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full"
          data-node-id="1:5962"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
            data-node-id="1:5963"
          >
            Maya
          </p>
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-node-id="1:5964"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.75] relative shrink-0 w-[115px]"
              data-node-id="1:5965"
            >
              <p
                className="font-['Orbitron:SemiBold'] font-semibold relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-full"
                data-node-id="1:5966"
              >
                Role
              </p>
              <p
                className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] text-center tracking-[-0.225px] w-full"
                data-node-id="1:5967"
              >
                Medical Oficer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:5968"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:5969"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] h-[101px] left-[calc(50%+177.5px)] rounded-[5.156px] top-[231px] w-[360px]"
        data-node-id="1:5970"
      />
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold h-[108px] justify-center leading-[0] left-[439px] text-[18px] text-white top-[288px] w-[321px]"
        data-node-id="1:5971"
      >
        <p className="leading-[normal] mb-0">{`"I'll keep an eye on everyone's health. Don't forget to look after yourself, too, Commander"`}</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

export function Frame135() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgObject = `${assetPathPrefix}/496b3.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:5972">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[629.688px]"
        data-node-id="1:5973"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[712px] left-[calc(50%-61px)] top-[calc(50%-82px)] w-[1112px]"
        data-node-id="1:5974"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5975"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5976"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5977"
      >
        <p className="leading-[1.2]">Meet Your Crew</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5978"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col items-start left-[422px] top-[105px] w-[324px]"
        data-node-id="1:5979"
      >
        <div
          className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full"
          data-node-id="1:5980"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
            data-node-id="1:5981"
          >
            Leo
          </p>
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-node-id="1:5982"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.75] relative shrink-0 w-[115px]"
              data-node-id="1:5983"
            >
              <p
                className="font-['Orbitron:SemiBold'] font-semibold min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.3px] w-[min-content]"
                data-node-id="1:5984"
              >
                Role
              </p>
              <p
                className="font-['Orbitron:Medium'] font-medium relative shrink-0 text-[#fb227b] text-[15px] tracking-[-0.225px] w-[230px]"
                data-node-id="1:5985"
              >
                Systems Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex inset-[53.16%_63.51%_41.26%_34.48%] items-center justify-center"
        data-node-id="1:5986"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Object">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
                src={imgObject}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[53.16%_91.59%_41.26%_6.4%]"
        data-node-id="1:5987"
        data-name="Object"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[99.01%] left-[2.64%] max-w-none top-[0.61%] w-[92.76%]"
            src={imgObject}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] h-[101px] left-[calc(50%+177px)] rounded-[5.156px] top-[231px] w-[360px]"
        data-node-id="1:5988"
      />
      <div
        className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold h-[108px] justify-center leading-[0] left-[439px] text-[18px] text-white top-[288px] w-[321px] whitespace-pre-wrap"
        data-node-id="1:5989"
      >
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`"Give me a broken machine and a toolbox. I'll figure it out."`}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">​</p>
      </div>
      <div
        className="absolute left-[54px] size-[301px] top-[80px]"
        data-node-id="1:5990"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame136() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  return (
    <div className="relative size-full" data-node-id="1:2907">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[779px] left-1/2 top-1/2 w-[1218px]"
        data-node-id="1:2908"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2909"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2910"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2911"
      >
        <p className="leading-[1.2]">Crew Health - Alert</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2912"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+20px)] top-[137px] w-[524px]"
        data-node-id="1:2913"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[450.5px] text-[15px] text-center text-white top-[170px] tracking-[-0.225px] w-[481px] whitespace-pre-wrap"
        data-node-id="1:2914"
      >
        <p className="leading-[1.57] mb-0">
          Commander, Leo has been working on the Power System for 2 days without rest.....
        </p>
        <p className="leading-[1.57] mb-0">
          his work is important, but I’m worried about his condition.
        </p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[194px] top-[88px] w-[212px]"
        data-node-id="1:2915"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[299px] text-[15px] text-center text-white top-[102px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:2916"
      >
        Maya (Medical Officer)
      </p>
      <div
        className="absolute flex h-[304.292px] items-center justify-center left-[10px] top-[78px] w-[288.87px]"
        data-node-id="1:2917"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[303.106px] relative w-[287.62px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame137() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/82b38.svg`;
  return (
    <div className="relative size-full" data-node-id="1:2929">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[564px] left-1/2 top-1/2 w-[882px]"
        data-node-id="1:2930"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2931"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2932"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2933"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[#ff383c] text-[32px] tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2934"
      >
        <p>
          <span className="leading-[1.2]">{`ALERT! `}</span>
          <span className="leading-[1.2] text-white">Mission Dashboard</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:2935"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:2936"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:2937"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:2938"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:2939"
        >
          <span className="leading-[1.75]">Day: 19</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:2940"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:2941"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  70`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  70`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  `}</span>
            <span className="leading-[1.75] text-[#fb227b]">70/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[38px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:2942"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:2943"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:2944"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:2945">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:2946"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:2947"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:2948">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:2949"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:2950"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:2951">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#ff2d55] h-[76px] left-[637px] top-[175px] w-[185px]"
        data-node-id="1:2952"
      />
      <div
        className="absolute flex h-[220.557px] items-center justify-center left-[653.48px] top-[112.67px] w-[177.692px]"
        data-node-id="1:2953"
      >
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative">
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:2954"
            >
              <p
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:2955"
              >
                Leo - High Fatigue
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:2956"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:2957"
              >
                <p className="leading-[1.75] mb-0">Crew Health</p>
                <p className="leading-[1.75]">Alert!</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="1:2958"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:2959"
              >
                <p className="leading-[1.75] mb-0">Survive</p>
                <p className="leading-[1.75]">For 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame138() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:2918">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[779px] left-1/2 top-1/2 w-[1218px]"
        data-node-id="1:2919"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2920"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2921"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2922"
      >
        <p className="leading-[1.2]">Crew Health - Alert</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2923"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+20px)] top-[137px] w-[524px]"
        data-node-id="1:2924"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[450.5px] text-[15px] text-center text-white top-[170px] tracking-[-0.225px] w-[481px]"
        data-node-id="1:2925"
      >
        <p className="leading-[1.57] mb-0">{`I'm fine, Commander`}</p>
        <p className="leading-[1.57]">. Just give me another day. I can finish this.</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[46px] left-[202px] top-[95px] w-[226px]"
        data-node-id="1:2926"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[322.5px] text-[15px] text-center text-white top-[102px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:2927"
      >
        Leo (Systems Engineer)
      </p>
      <div
        className="absolute h-[262px] left-[42px] top-[87px] w-[246px]"
        data-node-id="1:2928"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame139() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:2960">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[735px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[1149px]"
        data-node-id="1:2961"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2962"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2963"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2964"
      >
        <p className="leading-[1.2]">How do you handle this, Commander?</p>
      </div>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[90px] left-[calc(50%-155.5px)] top-[116px] w-[449px]"
        data-node-id="1:2965"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-129px)] list-decimal text-[22px] text-center text-white top-[calc(50%+56px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:2966"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[90px] left-[calc(50%-155.5px)] top-[231px] w-[449px]"
        data-node-id="1:2967"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-173px)] list-decimal text-[22px] text-center text-white top-[calc(50%-61px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:2968"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Let Leo continue working</span>
        </li>
      </ol>
      <div
        className="absolute bg-[#fb227b] h-[227px] left-[502px] top-[103px] w-[279px]"
        data-node-id="1:2969"
      />
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-156px)] list-decimal text-[22px] text-center text-white top-[calc(50%+50px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:2970"
        start={2}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Order Leo to rest</span>
        </li>
      </ol>
      <div
        className="[word-break:break-word] absolute font-['Orienta:Regular'] h-[223px] leading-[0] left-[516px] not-italic text-[20px] text-white top-[116px] tracking-[-0.26px] w-[254px] whitespace-pre-wrap"
        data-node-id="1:2971"
      >
        <p className="leading-[normal] mb-0">
          If you let Leo continue working, he will feel proud that you believe in him, but his
          health might suffer later.
        </p>
        <p className="leading-[normal] mb-0">
          But if you order him to rest, the power repairs may be delayed by a day.
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">I</p>
        <p className="leading-[normal]">​</p>
      </div>
    </div>
  );
}

export function Frame140() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  return (
    <div className="relative size-full" data-node-id="1:2972">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:2973"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2974"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2975"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2976"
      >
        <p className="leading-[1.2]">{`About Crew Health `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2977"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div className="absolute h-[228px] left-[119px] top-[114px] w-[574px]" data-node-id="1:2978">
        <div
          className="absolute bg-[#fb227b] h-[228px] left-0 top-0 w-[574px]"
          data-node-id="1:2979"
        />
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+0.5px)] text-[15px] text-center text-white top-[calc(50%-84px)] tracking-[-0.225px] w-[443px] whitespace-pre-wrap"
          data-node-id="1:2980"
        >
          <p className="leading-[1.57] mb-0">
            Crew members living in space spend most of their time in a confined space and experience
            multiple sunrises and sunsets a day.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">{`This can affect their Circadian rhythm -  which is the pattern our bodies follow based on a 24-hour day....`}</p>
          <p className="leading-[1.57]">​</p>
        </div>
      </div>
    </div>
  );
}

export function Frame142() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable3 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:3025">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[685px] left-[calc(50%+49.5px)] top-[calc(50%-128.5px)] w-[1071px]"
        data-node-id="1:3026"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3027"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3028"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3029"
      >
        <p className="leading-[1.2]">You Picked:</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3030"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-129px)] list-decimal text-[22px] text-center text-white top-[calc(50%+56px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3031"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <div
        className="-translate-x-1/2 absolute h-[90px] left-[calc(50%-155.5px)] top-[231px] w-[449px]"
        data-node-id="1:3032"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable3}
          />
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-156px)] list-decimal text-[22px] text-center text-white top-[calc(50%+50px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3033"
        start={2}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Order Leo to rest</span>
        </li>
      </ol>
    </div>
  );
}

export function Frame143() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:3034">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[633px] left-[calc(50%-0.5px)] top-[calc(50%-73.5px)] w-[989px]"
        data-node-id="1:3035"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3036"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3037"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3038"
      >
        <p className="leading-[1.2]">You Picked:</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3039"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[90px] left-[calc(50%-155.5px)] top-[116px] w-[449px]"
        data-node-id="1:3040"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-173px)] list-decimal text-[22px] text-center text-white top-[calc(50%-61px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3041"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Let Leo continue working</span>
        </li>
      </ol>
    </div>
  );
}

export function Frame144() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3042">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3043"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3044"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3045"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3046"
      >
        <p className="leading-[1.2]">Crew Health Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3047"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3048"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px] whitespace-pre-wrap"
        data-node-id="1:3049"
      >
        <p className="leading-[1.57] mb-0">Thank you Commander.</p>
        <p className="leading-[1.57]">{` I’ll get the repairs done by today`}</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[127px] top-[93px] w-[225px]"
        data-node-id="1:3050"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[244.5px] text-[15px] text-center text-white top-[108px] tracking-[-0.225px] w-[215px]"
        data-node-id="1:3051"
      >
        Leo (Systems Engineer)
      </p>
      <div
        className="absolute bg-[#fb227b] h-[42px] left-[450px] top-[325px] w-[227px]"
        data-node-id="1:3052"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[562px] text-[15px] text-center text-white top-[334px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3053"
      >
        Maya (Medical Officer)
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px]"
        data-node-id="1:3054"
      >{`I hope we don't regret pushing him this hard.....`}</p>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[590px] top-[130px] w-[250.999px]"
        data-node-id="1:3055"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3056"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[3px] top-[117px] w-[248px]"
        data-node-id="1:3057"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame145() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3058">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3059"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3060"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3061"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3062"
      >
        <p className="leading-[1.2]">Crew Health Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3063"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3064"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px]"
        data-node-id="1:3065"
      >
        <p className="leading-[1.57] mb-0">Alright, Commander.</p>
        <p className="leading-[1.57]">I guess health comes first.</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[127px] top-[93px] w-[225px]"
        data-node-id="1:3066"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[244.5px] text-[15px] text-center text-white top-[108px] tracking-[-0.225px] w-[215px]"
        data-node-id="1:3067"
      >
        Leo (Systems Engineer)
      </p>
      <div
        className="absolute bg-[#fb227b] h-[42px] left-[450px] top-[325px] w-[227px]"
        data-node-id="1:3068"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[562px] text-[15px] text-center text-white top-[334px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3069"
      >
        Maya (Medical Officer)
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px]"
        data-node-id="1:3070"
      >
        Good call. A rested crew is a safer crew
      </p>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[590px] top-[130px] w-[250.999px]"
        data-node-id="1:3071"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3072"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[3px] top-[117px] w-[248px]"
        data-node-id="1:3073"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame146() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable5 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:2981">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:2982"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2983"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2984"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2985"
      >
        <p className="leading-[1.2]">{`About Crew Health `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2986"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div className="absolute h-[246px] left-[119px] top-[96px] w-[570px]" data-node-id="1:2987">
        <div
          className="absolute bg-[#fb227b] h-[246px] left-0 top-0 w-[570px]"
          data-node-id="1:2988"
        />
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+0.5px)] text-[15px] text-center text-white top-[calc(50%-102px)] tracking-[-0.225px] w-[443px] whitespace-pre-wrap"
          data-node-id="1:2989"
        >
          <p className="leading-[1.57] mb-0">
            The Crew members can suffer from a high stress and a lack of sleep., especially after
            handling medical and other emergencies.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57]">
            Hence, proper rest and Team Co-ordination is very important to support Crew health.
          </p>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-31.5px)] top-[287px] w-[479px]"
        data-node-id="1:2990"
        data-name="Boss_Name_Table 5"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable5}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <a
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[390.5px] text-[15px] text-center text-white top-[317px] tracking-[-0.225px] w-[443px]"
        href="https://www.nasa.gov/missions/station/iss-research/mental-well-being-in-space/"
        data-node-id="1:2991"
        target="_blank"
      >
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.57] underline">
          Explore how NASA’s handling crew mental health
        </p>
      </a>
    </div>
  );
}

export function Frame147() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/52eee.png`;
  return (
    <div className="relative size-full" data-node-id="1:3074">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[779px] left-[calc(50%+102px)] top-[calc(50%-104px)] w-[1218px]"
        data-node-id="1:3075"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3076"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3077"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3078"
      >
        <p className="leading-[1.2]">Communications Alert</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3079"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[138px] left-[calc(50%+20px)] top-[137px] w-[524px]"
        data-node-id="1:3080"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <p
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[249px] text-[15px] text-white top-[164px] tracking-[-0.225px] w-[446px]"
        data-node-id="1:3081"
      >
        Crew, we’ve been having problems communicating with Mission Control. But dont worry, we can
        use Gateway as our communication relay.....
      </p>
      <div className="absolute h-[46px] left-[202px] top-[95px] w-[226px]" data-node-id="1:3082">
        <div
          className="absolute bg-[#fb227b] h-[46px] left-0 top-0 w-[226px]"
          data-node-id="1:3083"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[calc(50%+0.5px)] text-[15px] text-center text-white top-[calc(50%-12px)] tracking-[-0.225px] whitespace-nowrap"
          data-node-id="1:3084"
        >
          Commander (YOU)
        </p>
      </div>
      <div
        className="absolute h-[267px] left-[18px] top-[102px] w-[274px]"
        data-node-id="1:3085"
        data-name="Male astronaut — Pilot"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautPilot}
        />
      </div>
    </div>
  );
}

export function Frame148() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable5 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:2992">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:2993"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2994"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2995"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2996"
      >
        <p className="leading-[1.2]">About NASA’s Gateway</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:2997"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div className="absolute contents left-[119px] top-[96px]" data-node-id="1:2998">
        <div
          className="absolute bg-[#fb227b] h-[246px] left-[119px] top-[96px] w-[570px]"
          data-node-id="1:2999"
        />
      </div>
      <div
        className="-translate-x-1/2 absolute h-[77px] left-[calc(50%-31px)] top-[297px] w-[420px]"
        data-node-id="1:3000"
        data-name="Boss_Name_Table 5"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable5}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <a
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbit:Regular'] leading-[0] left-[390.5px] not-italic text-[15px] text-center text-white top-[317px] tracking-[-0.225px] w-[443px]"
        href="https://science.nasa.gov/3d-resources/gateway-lunar-space-station/"
        data-node-id="1:3001"
        target="_blank"
      >
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.57] underline">
          Interact With Gateway’s 3D Model
        </p>
      </a>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[411.5px] text-[15px] text-center text-white top-[110px] tracking-[-0.225px] w-[503px] whitespace-pre-wrap"
        data-node-id="1:3002"
      >
        <p className="leading-[1.57] mb-0">{`Gateway is humanity’s first space station to orbit the Moon. `}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57] mb-0">{`It will be the first permanent infrastructure on the moon to  serve as a “home away from home” for future astronauts.`}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57] mb-0">{`With a range of research, habitation and communications facility, it aims to send the first crew on Mars! `}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">I</p>
      </div>
    </div>
  );
}

export function Frame149() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/65d2f.png`;
  return (
    <div className="relative size-full" data-node-id="1:3012">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:3013"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3014"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3015"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3016"
      >
        <p className="leading-[1.2]">About Gateway</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3017"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div className="absolute h-[250px] left-[42px] top-[96px] w-[367px]" data-node-id="1:3018">
        <div
          className="absolute bg-[#fb227b] h-[250px] left-0 top-0 w-[367px]"
          data-node-id="1:3019"
        />
        <div
          className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-164.5px)] text-[15px] text-white top-[calc(50%-84px)] tracking-[-0.225px] w-[329px] whitespace-pre-wrap"
          data-node-id="1:3020"
        >
          <p className="leading-[1.57] mb-0">{`Imagine staying on the Moon for months and visiting a “vacation home” where you can conduct research, restock yopur supplies,  and also meet up with other Astronauts on space missions.`}</p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57]">That’s what Gateway aims to become!</p>
        </div>
      </div>
      <div
        className="absolute h-[280px] left-[409px] top-[96px] w-[348px]"
        data-node-id="1:3021"
        data-name="Male astronaut — Pilot"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[70.08%] left-[1.39%] max-w-none top-0 w-[98.68%]"
            src={imgMaleAstronautPilot}
          />
        </div>
      </div>
      <div className="absolute contents left-[413px] top-[306px]" data-node-id="1:3022">
        <div
          className="absolute bg-[#08f] h-[40px] left-[413px] top-[306px] w-[254px]"
          data-node-id="1:3023"
        />
      </div>
      <p
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[429px] text-[15px] text-white top-[314px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3024"
      >
        Artist’s Concept from NASA
      </p>
    </div>
  );
}

export function Frame150() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgMaleAstronautPilot = `${assetPathPrefix}/e7030.png`;
  const imgBossNameTable5 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:3003">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:3004"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3005"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3006"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3007"
      >
        <p className="leading-[1.2]">About NASA’s Gateway</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3008"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[249px] left-[142px] top-[78px] w-[518px]"
        data-node-id="1:3009"
        data-name="Male astronaut — Pilot"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[102.5%] left-[-0.06%] max-w-none top-[0.03%] w-[96.67%]"
            src={imgMaleAstronautPilot}
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[65px] left-[calc(50%-61px)] top-[327px] w-[358px]"
        data-node-id="1:3010"
        data-name="Boss_Name_Table 5"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable5}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <a
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbit:Regular'] leading-[0] left-[363.5px] not-italic text-[15px] text-center text-white top-[344px] tracking-[-0.225px] w-[443px]"
        href="https://science.nasa.gov/3d-resources/gateway-lunar-space-station/"
        data-node-id="1:3011"
        target="_blank"
      >
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.57] underline">
          Interact With Gateway’s 3D Model
        </p>
      </a>
    </div>
  );
}

export function Frame152() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage17 = `${assetPathPrefix}/ada9f.png`;
  return (
    <div className="relative size-full" data-node-id="1:3086">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:3087"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3088"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3089"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3090"
      >
        <p className="leading-[1.2]">{`Mission Control- Houstonh `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3091"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[169px] left-[calc(50%+25.5px)] top-[121px] w-[535px]"
        data-node-id="1:3092"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[452.5px] text-[15px] text-center text-white top-[157px] tracking-[-0.225px] w-[443px] whitespace-pre-wrap"
        data-node-id="1:3093"
      >
        <p className="leading-[1.57] mb-0">{`Outpost Zero, this is Houston. `}</p>
        <p className="leading-[1.57] mb-0">We’ve been trying to contact you for a while.....</p>
        <p className="leading-[1.57] mb-0">{`We've identified an upcoming major solar parhticle event. Particle activity is increasing.....`}</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute left-[42px] size-[287px] top-[103px]"
        data-node-id="1:3094"
        data-name="image 17"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={imgImage17}
          />
        </div>
      </div>
    </div>
  );
}

export function Frame153() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage17 = `${assetPathPrefix}/ada9f.png`;
  return (
    <div className="relative size-full" data-node-id="1:3095">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:3096"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3097"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3098"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3099"
      >
        <p className="leading-[1.2]">{`Mission Control- Houstonh `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3100"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[169px] left-[calc(50%+25.5px)] top-[121px] w-[535px]"
        data-node-id="1:3101"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[280px] text-[15px] text-white top-[127px] tracking-[-0.225px] w-[392px]"
        data-node-id="1:3102"
      >
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57] mb-0">
          We’ve found it to be similar to the 1972 Solar Particle event.
        </p>
        <p className="leading-[1.57] mb-0">{`You must protect the crew & reconsider outdoor operations....`}</p>
        <p className="leading-[1.57]">​</p>
      </div>
      <div
        className="absolute left-[42px] size-[287px] top-[103px]"
        data-node-id="1:3103"
        data-name="image 17"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={imgImage17}
          />
        </div>
      </div>
    </div>
  );
}

export function Frame154() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3104">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3105"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3106"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3107"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3108"
      >
        <p className="leading-[1.2]">Solar Particle Event Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3109"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3110"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px] whitespace-pre-wrap"
        data-node-id="1:3111"
      >
        <p className="leading-[1.57] mb-0">{`There seems to a problem in our power system. `}</p>
        <p className="leading-[1.57]">I’ll fix it and come back as soon as I can</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[127px] top-[93px] w-[225px]"
        data-node-id="1:3112"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[244.5px] text-[15px] text-center text-white top-[108px] tracking-[-0.225px] w-[215px]"
        data-node-id="1:3113"
      >
        Leo (Systems Engineer)
      </p>
      <div
        className="absolute bg-[#fb227b] h-[42px] left-[450px] top-[325px] w-[227px]"
        data-node-id="1:3114"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[562px] text-[15px] text-center text-white top-[334px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3115"
      >
        Maya (Medical Officer)
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px]"
        data-node-id="1:3116"
      >{`Everyone needs to get into the shelter. We can't afford to take risks here `}</p>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[590px] top-[130px] w-[250.999px]"
        data-node-id="1:3117"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3118"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[3px] top-[117px] w-[248px]"
        data-node-id="1:3119"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame155() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:3120">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[735px] left-[calc(50%+34.5px)] top-[calc(50%-49.5px)] w-[1149px]"
        data-node-id="1:3121"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3122"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3123"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[75px] items-center text-center"
        data-node-id="1:3124"
      >
        <p className="leading-[1.2] mb-0">What is your response, Commander?</p>
        <p className="leading-[1.2]">​</p>
      </div>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[90px] left-[calc(50%-155.5px)] top-[116px] w-[449px]"
        data-node-id="1:3125"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-129px)] list-decimal text-[22px] text-center text-white top-[calc(50%+56px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3126"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[90px] left-[calc(50%-155.5px)] top-[231px] w-[449px]"
        data-node-id="1:3127"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-173px)] list-decimal text-[22px] text-center text-white top-[calc(50%-61px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3128"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Full shelter protocol</span>
        </li>
      </ol>
      <div className="absolute h-[227px] left-[502px] top-[105px] w-[279px]" data-node-id="1:3129">
        <div
          className="absolute bg-[#fb227b] h-[227px] left-0 top-0 w-[279px]"
          data-node-id="1:3130"
        />
        <div
          className="[word-break:break-word] absolute font-['Orienta:Regular'] h-[170px] leading-[0] left-[calc(50%-126.5px)] not-italic text-[16px] text-white top-[calc(50%-84.5px)] tracking-[-0.208px] w-[254px] whitespace-pre-wrap"
          data-node-id="1:3131"
        >
          <p className="leading-[normal] mb-0">
            For full shelter, all Crew members will move into the Storm Shelter.
          </p>
          <p className="leading-[normal] mb-0">{`All outdoor operations will be `}</p>
          <p className="leading-[normal] mb-0">paused immediately.</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal] mb-0">
            For partial shelter, the crew moves to the Storm Shelter
          </p>
          <p className="leading-[normal] mb-0">
            while Leo remains briefly outside to secure the Power System.
          </p>
          <p className="leading-[normal]">​</p>
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-155.5px)] list-decimal text-[22px] text-center text-white top-[calc(50%+50px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3132"
        start={2}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Partial shelter protocol</span>
        </li>
      </ol>
    </div>
  );
}

export function Frame156() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable3 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:3133">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[685px] left-[calc(50%+49.5px)] top-[calc(50%-128.5px)] w-[1071px]"
        data-node-id="1:3134"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3135"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3136"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3137"
      >
        <p className="leading-[1.2]">You Picked:</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3138"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-129px)] list-decimal text-[22px] text-center text-white top-[calc(50%+56px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3139"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Increase greenhouse power</span>
        </li>
      </ol>
      <div
        className="-translate-x-1/2 absolute h-[90px] left-[calc(50%-155.5px)] top-[231px] w-[449px]"
        data-node-id="1:3140"
        data-name="Boss_Name_Table 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable3}
          />
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-155.5px)] list-decimal text-[22px] text-center text-white top-[calc(50%+50px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3141"
        start={2}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Partial shelter protocol</span>
        </li>
      </ol>
    </div>
  );
}

export function Frame157() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:3142">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[633px] left-[calc(50%-0.5px)] top-[calc(50%-73.5px)] w-[989px]"
        data-node-id="1:3143"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3144"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3145"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3146"
      >
        <p className="leading-[1.2]">You Picked:</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3147"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[90px] left-[calc(50%-155.5px)] top-[116px] w-[449px]"
        data-node-id="1:3148"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </div>
      <ol
        className="-translate-x-1/2 [word-break:break-word] absolute block font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-174px)] list-decimal text-[22px] text-center text-white top-[calc(50%-59px)] tracking-[-0.286px] whitespace-nowrap"
        data-node-id="1:3149"
        start={1}
      >
        <li className="ms-[33px]">
          <span className="leading-[normal]">Full shelter protocol</span>
        </li>
      </ol>
    </div>
  );
}

export function Frame159() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3150">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3151"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3152"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3153"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3154"
      >
        <p className="leading-[1.2]">Solar Particle Event Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3155"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3156"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[400.5px] text-[15px] text-center text-white top-[161px] tracking-[-0.225px] w-[415px]"
        data-node-id="1:3157"
      >
        Leo, please get back inside as soon as you can!
      </p>
      <div className="absolute h-[54px] left-[127px] top-[93px] w-[225px]" data-node-id="1:3158">
        <div
          className="absolute bg-[#fb227b] h-[54px] left-0 top-0 w-[225px]"
          data-node-id="1:3159"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[calc(50%+0.5px)] text-[15px] text-center text-white top-[calc(50%-12px)] tracking-[-0.225px] whitespace-nowrap"
          data-node-id="1:3160"
        >
          Maya (Medical Officer)
        </p>
      </div>
      <div className="absolute h-[42px] left-[450px] top-[325px] w-[227px]" data-node-id="1:3161">
        <div
          className="absolute bg-[#fb227b] h-[42px] left-0 top-0 w-[227px]"
          data-node-id="1:3162"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-1/2 text-[15px] text-center text-white top-[calc(50%-12px)] tracking-[-0.225px] w-[215px]"
          data-node-id="1:3163"
        >
          Leo (Systems Engineer)
        </p>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px]"
        data-node-id="1:3164"
      >{`Understood. I'll be quick`}</p>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[-21px] top-[90px] w-[250.999px]"
        data-node-id="1:3165"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[608px] top-[126px] w-[248px]"
        data-node-id="1:3166"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3167"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Frame160() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3168">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3169"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3170"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3171"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3172"
      >
        <p className="leading-[1.2]">Solar Particle Event Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3173"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3174"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px] whitespace-pre-wrap"
        data-node-id="1:3175"
      >
        <p className="leading-[1.57] mb-0">{`Everyone is safe inside. `}</p>
        <p className="leading-[1.57]">{`That's what matters right now`}</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[127px] top-[93px] w-[225px]"
        data-node-id="1:3176"
      />
      <div
        className="absolute bg-[#fb227b] h-[42px] left-[450px] top-[325px] w-[227px]"
        data-node-id="1:3177"
      />
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px] whitespace-pre-wrap"
        data-node-id="1:3178"
      >
        <p className="leading-[1.57] mb-0">{`The external systems can wait. `}</p>
        <p className="leading-[1.57]">The crew comes first</p>
      </div>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[-21px] top-[90px] w-[250.999px]"
        data-node-id="1:3179"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[608px] top-[126px] w-[248px]"
        data-node-id="1:3180"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3181"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[569.5px] text-[15px] text-center text-white top-[334px] tracking-[-0.225px] w-[215px]"
        data-node-id="1:3182"
      >
        Leo (Systems Engineer)
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[245px] text-[15px] text-center text-white top-[108px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3183"
      >
        Maya (Medical Officer)
      </p>
    </div>
  );
}

export function Frame161() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/82b38.svg`;
  return (
    <div className="relative size-full" data-node-id="1:3219">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[564px] left-1/2 top-[calc(50%+82px)] w-[882px]"
        data-node-id="1:3220"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3221"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3222"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3223"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[#ff383c] text-[32px] tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3224"
      >
        <p>
          <span className="leading-[1.2]">{`ALERT! `}</span>
          <span className="leading-[1.2] text-white">Mission Dashboard</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:3225"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:3226"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:3227"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:3228"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:3229"
        >
          <span className="leading-[1.75]">Day: 27</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:3230"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:3231"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  40`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  40`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  60`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[38px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:3232"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:3233"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:3234"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:3235">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:3236"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:3237"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:3238">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:3239"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:3240"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:3241">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#ff2d55] h-[76px] left-[637px] top-[175px] w-[185px]"
        data-node-id="1:3242"
      />
      <div
        className="absolute flex h-[220.459px] items-center justify-center left-[653.48px] top-[112.67px] w-[146.693px]"
        data-node-id="1:3243"
      >
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative">
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:3244"
            >
              <p
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:3245"
              >
                Protected
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:3246"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:3247"
              >
                <p className="leading-[1.75] mb-0">Power System</p>
                <p className="leading-[1.75]">Exposed</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="1:3248"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:3249"
              >
                <p className="leading-[1.75] mb-0">Survive</p>
                <p className="leading-[1.75]">For 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame162() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgEllipse7 = `${assetPathPrefix}/f57d8.svg`;
  const imgEllipse8 = `${assetPathPrefix}/2a867.svg`;
  const imgEllipse9 = `${assetPathPrefix}/82b38.svg`;
  return (
    <div className="relative size-full" data-node-id="1:3250">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[564px] left-1/2 top-[calc(50%+82px)] w-[882px]"
        data-node-id="1:3251"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3252"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3253"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3254"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[#ff383c] text-[32px] tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3255"
      >
        <p>
          <span className="leading-[1.2]">{`ALERT! `}</span>
          <span className="leading-[1.2] text-white">Mission Dashboard</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </div>
      <div
        className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]"
        data-node-id="1:3256"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[31px] top-0 w-[324px]"
          data-node-id="1:3257"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            data-node-id="1:3258"
          >
            <p
              className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[26px] text-white tracking-[-0.39px] w-full"
              data-node-id="1:3259"
            >
              Outpost Zero:
            </p>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:3260"
        >
          <span className="leading-[1.75]">Day: 27</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap"
          data-node-id="1:3261"
        >
          Resource panel:
        </p>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap"
          data-node-id="1:3262"
        >
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  40`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  40`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  60`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
        </div>
      </div>
      <div
        className="absolute content-stretch flex flex-col gap-[38px] items-start left-[385px] top-[113px] w-[242px]"
        data-node-id="1:3263"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:3264"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:3265"
          >
            Crew status.
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:3266">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:3267"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:3268"
          >
            Current Alerts
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:3269">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div
          className="content-stretch flex gap-[45px] items-center relative shrink-0 w-full"
          data-node-id="1:3270"
        >
          <p
            className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
            data-node-id="1:3271"
          >
            Mission Objectives
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="1:3272">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#ff2d55] h-[76px] left-[637px] top-[175px] w-[185px]"
        data-node-id="1:3273"
      />
      <div
        className="absolute flex h-[220.399px] items-center justify-center left-[653.48px] top-[112.67px] w-[127.693px]"
        data-node-id="1:3274"
      >
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative">
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:3275"
            >
              <p
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:3276"
              >
                Leo - At Risk
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="1:3277"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:3278"
              >
                <p className="leading-[1.75] mb-0">Crew Health</p>
                <p className="leading-[1.75]">Alert!</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="1:3279"
            >
              <div
                className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap"
                data-node-id="1:3280"
              >
                <p className="leading-[1.75] mb-0">Survive</p>
                <p className="leading-[1.75]">For 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame163() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3184">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3185"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3186"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3187"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3188"
      >
        <p className="leading-[1.2]">Solar Particle Event Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3189"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3190"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px] whitespace-pre-wrap"
        data-node-id="1:3191"
      >
        <p className="leading-[1.57] mb-0">{`Everyone is safe inside. `}</p>
        <p className="leading-[1.57]">{`That's what matters right now`}</p>
      </div>
      <div
        className="absolute bg-[#fb227b] h-[54px] left-[127px] top-[93px] w-[225px]"
        data-node-id="1:3192"
      />
      <div
        className="absolute bg-[#fb227b] h-[42px] left-[450px] top-[325px] w-[227px]"
        data-node-id="1:3193"
      />
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px] whitespace-pre-wrap"
        data-node-id="1:3194"
      >
        <p className="leading-[1.57] mb-0">{`The external systems can wait. `}</p>
        <p className="leading-[1.57]">The crew comes first</p>
      </div>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[-21px] top-[90px] w-[250.999px]"
        data-node-id="1:3195"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[608px] top-[126px] w-[248px]"
        data-node-id="1:3196"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3197"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[569.5px] text-[15px] text-center text-white top-[334px] tracking-[-0.225px] w-[215px]"
        data-node-id="1:3198"
      >
        Leo (Systems Engineer)
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[245px] text-[15px] text-center text-white top-[108px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3199"
      >
        Maya (Medical Officer)
      </p>
    </div>
  );
}

export function Frame164() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/700cc.png`;
  const imgMaleAstronautEngineer = `${assetPathPrefix}/1fda0.png`;
  return (
    <div className="relative size-full" data-node-id="1:3200">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[700px] left-[calc(50%+112.5px)] top-[calc(50%-60px)] w-[1093px]"
        data-node-id="1:3201"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3202"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3203"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3204"
      >
        <p className="leading-[1.2]">Solar Particle Event Alert</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%-27px)] top-[126px] w-[478px]"
        data-node-id="1:3205"
        data-name="Boss_Name_Table 2"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[95px] left-[calc(50%+56.5px)] top-[247px] w-[517px]"
        data-node-id="1:3206"
        data-name="Boss_Name_Table 3"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
              src={imgBossNameTable2}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[400.5px] text-[15px] text-center text-white top-[149px] tracking-[-0.225px] w-[415px] whitespace-pre-wrap"
        data-node-id="1:3207"
      >
        <p className="leading-[1.57] mb-0">The external Power system is secured.</p>
        <p className="leading-[1.57]">{` I'm heading back inside`}</p>
      </div>
      <div className="absolute h-[52px] left-[127px] top-[95px] w-[241px]" data-node-id="1:3208">
        <div
          className="absolute bg-[#fb227b] h-[52px] left-0 top-0 w-[241px]"
          data-node-id="1:3209"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-1/2 text-[15px] text-center text-white top-[calc(50%-12px)] tracking-[-0.225px] w-[215px]"
          data-node-id="1:3210"
        >
          Leo (Systems Engineer)
        </p>
      </div>
      <div className="absolute h-[42px] left-[450px] top-[325px] w-[227px]" data-node-id="1:3211">
        <div
          className="absolute bg-[#fb227b] h-[42px] left-0 top-0 w-[227px]"
          data-node-id="1:3212"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[1.57] left-[calc(50%+0.5px)] text-[15px] text-center text-white top-[calc(50%-12px)] tracking-[-0.225px] whitespace-nowrap"
          data-node-id="1:3213"
        >
          Maya (Medical Officer)
        </p>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[468px] text-[15px] text-center text-white top-[271px] tracking-[-0.225px] w-[418px] whitespace-pre-wrap"
        data-node-id="1:3214"
      >
        <p className="leading-[1.57] mb-0">{`We got lucky this time. `}</p>
        <p className="leading-[1.57]">{`Next time, let's not take that chance.`}</p>
      </div>
      <div
        className="absolute flex h-[256.169px] items-center justify-center left-[594px] top-[131px] w-[250.999px]"
        data-node-id="1:3215"
      >
        <div className="flex-none rotate-[0.24deg]">
          <div
            className="h-[255.138px] relative w-[249.946px]"
            data-name="Female astronaut — Navigator"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFemaleAstronautNavigator}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3216"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="absolute h-[247px] left-[3px] top-[111px] w-[248px]"
        data-node-id="1:3217"
        data-name="Male astronaut — Engineer"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMaleAstronautEngineer}
        />
      </div>
    </div>
  );
}

export function Frame165() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  return (
    <div className="relative size-full" data-node-id="1:3281">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[633px] left-[calc(50%-0.5px)] top-[calc(50%-73.5px)] w-[989px]"
        data-node-id="1:3282"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="absolute size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3283"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </div>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3284"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:3285"
      >
        <p className="leading-[1.2]">The Event Outside</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3286"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[257px] left-[calc(50%+0.5px)] overflow-clip rounded-[5px] top-[calc(50%+29.5px)] w-[461px]"
        data-node-id="1:3287"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[260px] left-[calc(50%+0.5px)] top-[calc(50%-0.5px)] w-[462px]"
          data-node-id="1:3288"
          data-name="WhatsApp Video 2026-11-13 at 2.09.23 AM 1"
        >
          <SolarParticleSpiralVisual />
        </div>
      </div>
    </div>
  );
}

export function Frame166() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgNasaSdo1 = `${assetPathPrefix}/d6e8f.png`;
  return (
    <div className="relative size-full" data-node-id="1:3289">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:3290"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3291"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3292"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Regular'] font-normal justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-1/2 top-[75px] items-center text-center"
        data-node-id="1:3293"
      >
        <p className="leading-[1.2] mb-0">What actually happened?</p>
        <p className="leading-[1.2]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3294"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div className="absolute h-[285px] left-[104px] top-[94px] w-[367px]" data-node-id="1:3295">
        <div className="absolute contents left-0 top-0" data-node-id="1:3296">
          <div
            className="absolute bg-[#fb227b] h-[285px] left-0 top-0 w-[367px]"
            data-node-id="1:3297"
          />
        </div>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[239px] leading-[0] left-[calc(50%-164.5px)] text-[15px] text-white top-[calc(50%-119.5px)] tracking-[-0.225px] w-[329px] whitespace-pre-wrap"
          data-node-id="1:3298"
        >
          <p className="leading-[1.57] mb-0">{`The Sun sometimes releases huge amounts of energetic particles into space. `}</p>
          <p className="leading-[1.57] mb-0">
            These particles can pass through human tissue, and can pose radiation risks to
            Astronauts in space.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">
            A specially designed storm shelter can help protect Astronauts during these events.
          </p>
          <p className="leading-[1.57]">​</p>
        </div>
      </div>
      <div className="absolute contents left-[484px] top-[320px]" data-node-id="1:3299">
        <div
          className="absolute bg-[#08f] h-[40px] left-[484px] top-[320px] w-[231px]"
          data-node-id="1:3300"
        />
      </div>
      <p
        className="[word-break:break-word] absolute font-['Orelega_One:Regular'] leading-[1.57] left-[567px] not-italic text-[15px] text-white top-[328px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3301"
      >{`Image: NASA/ SDO `}</p>
      <div
        className="absolute h-[236px] left-[484px] top-[84px] w-[275px]"
        data-node-id="1:3302"
        data-name="NASA-SDO 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgNasaSdo1}
        />
      </div>
    </div>
  );
}

export function Frame167() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgNasaSdo1 = `${assetPathPrefix}/d6e8f.png`;
  return (
    <div className="relative size-full" data-node-id="1:3303">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]"
        data-node-id="1:3304"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:3305"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:3306"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Regular'] font-normal justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-1/2 top-[75px] items-center text-center"
        data-node-id="1:3307"
      >
        <p className="leading-[1.2] mb-0">What actually happened?</p>
        <p className="leading-[1.2]">​</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:3308"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div className="absolute h-[285px] left-[104px] top-[94px] w-[367px]" data-node-id="1:3309">
        <div className="absolute contents left-0 top-0" data-node-id="1:3310">
          <div
            className="absolute bg-[#fb227b] h-[285px] left-0 top-0 w-[367px]"
            data-node-id="1:3311"
          />
        </div>
        <div
          className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[239px] leading-[0] left-[calc(50%-164.5px)] text-[15px] text-white top-[calc(50%-119.5px)] tracking-[-0.225px] w-[329px] whitespace-pre-wrap"
          data-node-id="1:3312"
        >
          <p className="leading-[1.57] mb-0">{`The Sun sometimes releases huge amounts of energetic particles into space. `}</p>
          <p className="leading-[1.57] mb-0">
            These particles can pass through human tissue, and can pose radiation risks to
            Astronauts in space.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">
            A specially designed storm shelter can help protect Astronauts during these events.
          </p>
          <p className="leading-[1.57]">​</p>
        </div>
      </div>
      <div className="absolute contents left-[484px] top-[320px]" data-node-id="1:3313">
        <div
          className="absolute bg-[#08f] h-[40px] left-[484px] top-[320px] w-[231px]"
          data-node-id="1:3314"
        />
      </div>
      <p
        className="[word-break:break-word] absolute font-['Orelega_One:Regular'] leading-[1.57] left-[567px] not-italic text-[15px] text-white top-[328px] tracking-[-0.225px] whitespace-nowrap"
        data-node-id="1:3315"
      >{`Image: NASA/ SDO `}</p>
      <div
        className="absolute h-[236px] left-[484px] top-[84px] w-[275px]"
        data-node-id="1:3316"
        data-name="NASA-SDO 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgNasaSdo1}
        />
      </div>
    </div>
  );
}

export function Frame189() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable2 = `${assetPathPrefix}/b6be3.png`;
  const imgImage15 = `${assetPathPrefix}/ada9f.png`;
  return (
    <div className="relative size-full" data-node-id="1:5601">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5602"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5603"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5604"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5605"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 absolute h-[262px] left-[calc(50%+54px)] top-[91px] w-[622px]"
        data-node-id="1:5606"
        data-name="Boss_Name_Table 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable2}
          />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5607"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+63px)] text-[18px] text-center text-white top-[calc(50%-58px)] tracking-[-0.27px] w-[516px] whitespace-pre-wrap"
        data-node-id="1:5608"
      >
        <p className="leading-[1.5] mb-0">
          Older, short-duration NASA missions used disposable, open-loop consumables
        </p>
        <p className="leading-[1.5] mb-0">{` (such as stored tanks of oxygen and water).`}</p>
        <p className="leading-[1.5] mb-0">{` Resupply was not often possible, so every gram of food, water, and gas had to be packed from Earth.`}</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div
        className="absolute left-[-61px] size-[377px] top-[110px]"
        data-node-id="1:5609"
        data-name="image 15"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={imgImage15}
          />
        </div>
      </div>
    </div>
  );
}

export function Frame192() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgImage14 = `${assetPathPrefix}/7591f.png`;
  const imgImage11 = `${assetPathPrefix}/2eb14.png`;
  return (
    <div className="relative size-full" data-node-id="1:5720">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-1/2 w-[629.688px]"
        data-node-id="1:5721"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5722"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5723"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5724"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5725"
      >
        <p className="leading-[1.2]">Regenerating Our Supplies</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[86px] size-[262px] top-[102px]"
        data-node-id="1:5726"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[262px]" data-name="image 14">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[-0.56%] max-w-none size-full top-[3.94%]"
                src={imgImage14}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-29px] size-[186px] top-[249px]"
        data-node-id="1:5727"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[186px]" data-name="image 11">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-[5.63%] max-w-none size-full top-[-1.69%]"
                src={imgImage11}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] h-[251px] left-[calc(50%+145.5px)] rounded-[5.156px] top-[113px] w-[433px]"
        data-node-id="1:5728"
      >
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[217px] leading-[0] left-1/2 text-[18px] text-center text-white top-[calc(50%-108.5px)] tracking-[-0.27px] w-[361px] whitespace-pre-wrap"
          data-node-id="1:5729"
        >
          <p className="leading-[1.5] mb-0">​</p>
          <p className="leading-[1.5] mb-0">
            The ECLSS recycles roughly 90% of water from sweat and urine, and generates oxygen
            through the electrolysis of water using solar power.
          </p>
          <p className="leading-[1.5] mb-0">
            It also cleans cabin air by removing contaminants like Carbon Dioxide
          </p>
          <p className="leading-[1.5] mb-0">​</p>
          <p className="leading-[1.5] mb-0">​</p>
          <p className="leading-[1.5]">​</p>
        </div>
      </div>
      <div className="absolute h-[47px] left-[94px] top-[340px] w-[123px]" data-node-id="1:5730">
        <div
          className="absolute bg-white h-[26px] left-0 top-[8px] w-[135px]"
          data-node-id="1:5731"
        />
        <p
          className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[46px] leading-[1.75] left-[calc(50%-41.5px)] text-[#071f6e] text-[13px] top-[calc(50%-15.5px)] tracking-[-0.195px] w-[164px]"
          data-node-id="1:5732"
        >{`Credit: NASA `}</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5733"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Frame193() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  const imgImage12 = `${assetPathPrefix}/17ca7.png`;
  return (
    <div className="relative size-full" data-node-id="1:5734">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-1/2 top-1/2 w-[629.688px]"
        data-node-id="1:5735"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-1/2 top-1/2 w-[844px]"
        data-node-id="1:5736"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:5737"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:5738"
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[32px] text-white tracking-[-0.48px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:5739"
      >
        <p className="leading-[1.2]">MISSION CONTROL — HOUSTON</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[135.49px] left-[calc(50%-10px)] top-[calc(50%+8.75px)] w-[624px]"
        data-node-id="1:5740"
      >
        <div
          className="-translate-x-1/2 absolute h-[135.49px] left-1/2 top-0 w-[621.514px]"
          data-node-id="1:5741"
          data-name="Boss_Name_Table 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
                src={imgBossNameTable1}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
          </div>
        </div>
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%+6.5px)] text-[18px] text-center text-white top-[calc(50%-44.75px)] tracking-[-0.27px] w-[527px] whitespace-pre-wrap"
          data-node-id="1:5742"
        >
          <p className="leading-[1.57] mb-0">{`Great job picking your landing site, Commander. `}</p>
          <p className="leading-[1.57] mb-0">
            Now you must calculate the quantity of essential supplies your crew will be needing
          </p>
          <p className="leading-[1.57]">​</p>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-77px] size-[355px] top-[185px]"
        data-node-id="1:5743"
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[355px]" data-name="image 12">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage12}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]"
        data-node-id="1:5744"
      >
        <div className="-scale-x-100 flex-none">
          <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={uiNavArrow}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Frame194() {
  const imgBackground = `${assetPathPrefix}/0ea1b.png`;
  const imgFemaleAstronautNavigator = `${assetPathPrefix}/f1f93.png`;
  const imgFemaleAstronautNavigator1 = `${assetPathPrefix}/7ed7a.png`;
  const imgBossNameTable1 = `${assetPathPrefix}/b6be3.png`;
  return (
    <div className="relative size-full" data-node-id="1:2328">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2329"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2330"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[403px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[629.688px]"
        data-node-id="1:2331"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-full left-[12.69%] max-w-none top-[0.25%] w-[74.61%]"
              src={imgBackground}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[540px] left-[calc(50%-8px)] top-[calc(50%-4.5px)] w-[844px]"
        data-node-id="1:2332"
        data-name="Background"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
          <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        </div>
      </div>
      <a
        className="absolute block cursor-pointer size-[44px] left-[42px] top-[34px]"
        data-node-id="1:2333"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div
        className="absolute size-[44px] left-[759px] top-[34px]"
        data-node-id="1:2334"
        style={
          {
            "--motion-design-transform": "initial",
            "--motion-design-transform-inverse": "initial",
            "--motion-layout-transform": "translate(0px)",
          } as React.CSSProperties
        }
        data-name="Menu_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[24px] text-white tracking-[-0.36px] whitespace-nowrap left-[50%] top-[56px] items-center text-center"
        data-node-id="1:2335"
      >
        <p className="leading-[1.2]">Where will you build your base, Commander?</p>
      </div>
      <div
        className="absolute h-[176px] left-[86px] top-[87px] w-[247px]"
        data-node-id="1:2336"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator}
        />
      </div>
      <div
        className="absolute h-[176px] left-[397px] top-[87px] w-[254px]"
        data-node-id="1:2337"
        data-name="Female astronaut — Navigator"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFemaleAstronautNavigator1}
        />
      </div>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[94px] left-[calc(50%+105.5px)] top-[287px] w-[253px]"
        data-node-id="1:2338"
        data-name="Boss_Name_Table 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[531px] text-[0px] text-center text-white top-[308px] tracking-[-0.225px] w-[352px]"
        data-node-id="1:2339"
      >
        <p className="leading-[1.57] mb-0 text-[15px]">Site B: The Dark Interior</p>
        <p className="leading-[1.57] mb-0 text-[13px]">High Scientific Interest</p>
        <p className="leading-[1.57] text-[15px]">​</p>
      </div>
      <a
        className="-translate-x-1/2 absolute block cursor-pointer h-[94px] left-[calc(50%-220.5px)] top-[287px] w-[253px]"
        data-node-id="1:2340"
        data-name="Boss_Name_Table 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={imgBossNameTable1}
          />
        </div>
      </a>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[210px] text-[0px] text-center text-white top-[312px] tracking-[-0.225px] w-[352px]"
        data-node-id="1:2341"
      >
        <p className="leading-[1.57] mb-0 text-[15px]">Site A: The Sunlit Ridge</p>
        <p className="leading-[1.57] mb-0 text-[13px]">More Solar Energy</p>
        <p className="leading-[1.57] text-[15px]">​</p>
      </div>
    </div>
  );
}
// ---- Mission debrief screens (Figma Section 1, frames 199–209) ----

const TITLE_BASE =
  "-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col justify-center items-center text-center leading-[0] left-1/2 text-[32px] tracking-[-0.48px] whitespace-nowrap";

function DebriefBackground({
  className,
  overlay = "bg-[rgba(0,0,0,0.3)]",
}: {
  className: string;
  overlay?: string;
}) {
  return (
    <div
      className={`-translate-x-1/2 -translate-y-1/2 absolute ${className}`}
      data-name="Background"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src={`${assetPathPrefix}/0ea1b.png`}
        />
        <div className={`absolute ${overlay} inset-0`} />
      </div>
    </div>
  );
}

function DebriefNav({ next = true }: { next?: boolean }) {
  return (
    <>
      <a
        className="absolute block cursor-pointer left-[42px] size-[44px] top-[34px]"
        data-name="Backward_BTN 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiNavArrow}
        />
      </a>
      <div className="absolute left-[759px] size-[44px] top-[34px]" data-name="Menu_BTN 1">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={uiMenu}
        />
      </div>
      {next && (
        <div className="absolute flex items-center justify-center left-[759px] size-[44px] top-[334px]">
          <div className="-scale-x-100 flex-none">
            <a className="block cursor-pointer relative size-[44px]" data-name="Backward_BTN 2">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={uiNavArrow}
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function HoustonPanel({ className }: { className: string }) {
  return (
    <div className={`-translate-x-1/2 absolute ${className}`} data-name="Boss_Name_Table 2">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-[305.81%] left-0 max-w-none top-[-96.02%] w-full"
            src={`${assetPathPrefix}/b6be3.png`}
          />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0" />
      </div>
    </div>
  );
}

function SdoImage() {
  return (
    <div className="absolute h-[236px] left-[484px] top-[84px] w-[275px]" data-name="NASA-SDO 1">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={`${assetPathPrefix}/d6e8f.png`}
      />
    </div>
  );
}

function SdoCaption() {
  return (
    <>
      <div className="absolute bg-[#08f] h-[40px] left-[484px] top-[320px] w-[231px]" />
      <p className="[word-break:break-word] absolute font-['Orelega_One:Regular'] leading-[1.57] left-[567px] not-italic text-[15px] text-white top-[328px] tracking-[-0.225px] whitespace-nowrap">{`Image: NASA/ SDO `}</p>
    </>
  );
}

function Year1972Title() {
  return (
    <div className={`${TITLE_BASE} font-['Orbitron:Regular'] font-normal text-white top-[75px]`}>
      <p className="leading-[1.2] mb-0">What actually happened in 1972?</p>
      <p className="leading-[1.2]">​</p>
    </div>
  );
}

function PinkCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={`absolute h-[285px] w-[367px] ${className}`}>
      <div className="absolute bg-[#fb227b] h-[285px] left-0 top-0 w-[367px]" />
      {children}
    </div>
  );
}

export function Frame199() {
  return (
    <div className="relative size-full" data-node-id="21:2410">
      <DebriefBackground className="h-[534px] left-[calc(50%+5px)] top-[calc(50%+41px)] w-[834px]" />
      <DebriefNav />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Bold'] font-bold text-white top-[56px]`}
        data-node-id="21:2415"
      >
        <p className="leading-[1.2]">The 1972 Solar Particle Event</p>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex h-[225px] items-center justify-center left-[calc(50%+2.5px)] pt-[10.313px] px-[12.891px] rounded-[5.156px] top-[109px] w-[765px]"
        data-node-id="21:2417"
      >
        <div className="[word-break:break-word] font-['Orbitron:Bold'] font-bold leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.24px] w-[774px] whitespace-pre-wrap">
          <p className="leading-[2] mb-0">{`NASA sets an astronaut's lifetime radiation limit at 600 mSv. `}</p>
          <p className="leading-[2] mb-0">​</p>
          <p className="leading-[2] mb-0">{`But the event that you just survived is inspired from the 1972 Solar Particle Event, where radiation doses could have reached 1,000 to 4,000 millisieverts — enough to cause sever illness or even  death.`}</p>
          <p className="leading-[2]">​</p>
        </div>
      </div>
    </div>
  );
}

export function Frame200() {
  return (
    <div className="relative size-full" data-node-id="21:2419">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <Year1972Title />
      <PinkCard className="left-[104px] top-[94px]">
        <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[calc(50%-164.5px)] text-[15px] text-white top-[calc(50%-107.5px)] tracking-[-0.225px] w-[329px] whitespace-pre-wrap">
          <p className="leading-[1.57] mb-0">Historical date: 4 August 1972.</p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">{`NASA's historical radiation review identifies the August 1972 event as an exceptionally significant event that could have changed lunar exploration forever`}</p>
        </div>
      </PinkCard>
      <SdoCaption />
      <SdoImage />
    </div>
  );
}

export function Frame201() {
  return (
    <div className="relative size-full" data-node-id="21:2433">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <Year1972Title />
      <PinkCard className="left-[99px] top-[104px]">
        <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[248px] leading-[0] left-[calc(50%-164.5px)] text-[15px] text-white top-[calc(50%-123.5px)] tracking-[-0.225px] w-[329px] whitespace-pre-wrap">
          <p className="leading-[1.57] mb-0">{` On 2 Aug 1972, the Sun shot out billions of tons of high-speed, charged particles towards Earth.`}</p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">
            Two days later, another particle event, called a CME, reached the Earth in 14.6 hour.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57]">
            Typical CMEs take around 2-3 days to reach Earth. This one was a bullet
          </p>
        </div>
      </PinkCard>
      <SdoCaption />
      <SdoImage />
    </div>
  );
}

export function Frame202() {
  return (
    <div className="relative size-full" data-node-id="21:2447">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <Year1972Title />
      <PinkCard className="left-[99px] top-[104px]">
        <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[228px] leading-[0] left-[calc(50%-174.5px)] text-[15px] text-white top-[calc(50%-113.5px)] tracking-[-0.225px] w-[350px] whitespace-pre-wrap">
          <p className="leading-[1.57] mb-0">{`This occured just between Apollo 16 & 17. `}</p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">
            If any Astronauts had been in space at that time, they would be getting an estimated 600
            rem of radiation to their skin.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57]">
            This would be enough to cause severe radiation sickness or even death!
          </p>
        </div>
      </PinkCard>
      <div className="absolute bg-[#08f] h-[40px] left-[350px] top-[349px] w-[231px]" />
      <p className="[word-break:break-word] absolute font-['Orelega_One:Regular'] leading-[1.57] left-[371px] not-italic text-[15px] text-white top-[357px] tracking-[-0.225px] whitespace-nowrap">{`NASA Radiation Environment `}</p>
      <SdoImage />
    </div>
  );
}

export function Frame203() {
  return (
    <div className="relative size-full" data-node-id="21:2465">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <Year1972Title />
      <PinkCard className="left-[104px] top-[95px]">
        <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold h-[151px] leading-[0] left-[calc(50%-164.5px)] text-[15px] text-white top-[calc(50%-75.5px)] tracking-[-0.225px] w-[329px] whitespace-pre-wrap">
          <p className="leading-[1.57] mb-0">
            The 1972 Space Storms are now a case study for space weather protection.
          </p>
          <p className="leading-[1.57] mb-0">​</p>
          <p className="leading-[1.57] mb-0">{`Modern spacecrafts are built with `}</p>
          <p className="leading-[1.57]">{`radiation shelters and real-time solar monitoring systems. `}</p>
        </div>
      </PinkCard>
      <SdoCaption />
      <SdoImage />
    </div>
  );
}

export function Frame204() {
  return (
    <div className="relative size-full" data-node-id="21:2479">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Bold'] font-bold text-white top-[56px]`}
        data-node-id="21:2483"
      >
        <p className="leading-[1.2]">{`Mission Control- Houstonh `}</p>
      </div>
      <HoustonPanel className="h-[169px] left-[calc(50%+25.5px)] top-[121px] w-[535px]" />
      <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[261px] text-[15px] text-white top-[138px] tracking-[-0.225px] w-[392px] whitespace-pre-wrap">
        <p className="leading-[1.57] mb-0">{`The real mission between Apollo 16 and 17 didn't have a lunar crew present during this event. `}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">But future astronauts may one day face similar challenges.</p>
      </div>
      <div className="absolute left-[42px] size-[287px] top-[103px]" data-name="image 17">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.64%] left-[-5.71%] max-w-none top-[-1.65%] w-full"
            src={`${assetPathPrefix}/ada9f.png`}
          />
        </div>
      </div>
    </div>
  );
}

function HoustonWave() {
  return (
    <div className="absolute flex items-center justify-center left-[12px] size-[296px] top-[99px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[296px]" data-name="image 17">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute left-[1.97%] max-w-none size-full top-[-0.56%]"
              src={`${assetPathPrefix}/2eb14.png`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Frame205() {
  return (
    <div className="relative size-full" data-node-id="21:2488">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Bold'] font-bold text-white top-[56px]`}
        data-node-id="21:2492"
      >
        <p className="leading-[1.2]">{`Mission Control- Houston `}</p>
      </div>
      <HoustonPanel className="h-[207px] left-[calc(50%+33px)] top-[113px] w-[520px]" />
      <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[274px] text-[15px] text-white top-[150px] tracking-[-0.225px] w-[392px] whitespace-pre-wrap">
        <p className="leading-[1.57] mb-0">
          Commander, Outpost Zero has successfully completed its first mission.
        </p>
        <p className="leading-[1.57]">{`"Your crew faced unexpected challenges, but you kept them safe, adapted to changing conditions, and continued exploring`}</p>
      </div>
      <HoustonWave />
    </div>
  );
}

export function Frame206() {
  return (
    <div className="relative size-full" data-node-id="21:2497">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav next={false} />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Bold'] font-bold text-white top-[56px]`}
        data-node-id="21:2501"
      >
        <p className="leading-[1.2]">{`Mission Control- Houston `}</p>
      </div>
      <HoustonPanel className="h-[167px] left-[calc(50%+33px)] top-[122px] w-[520px]" />
      <div className="[word-break:break-word] absolute font-['Orbitron:Bold'] font-bold leading-[0] left-[274px] text-[15px] text-white top-[150px] tracking-[-0.225px] w-[392px] whitespace-pre-wrap">
        <p className="leading-[1.57] mb-0">{`Humanity has taken another step toward living beyond Earth. `}</p>
        <p className="leading-[1.57] mb-0">​</p>
        <p className="leading-[1.57]">Mission complete, Commander.</p>
      </div>
      <HoustonWave />
    </div>
  );
}

export function Frame207() {
  return (
    <div className="relative size-full" data-node-id="21:2505">
      <DebriefBackground className="h-[582px] left-[calc(50%-16.5px)] top-[calc(50%+41px)] w-[909.375px]" />
      <DebriefNav />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Bold'] font-bold text-white top-[56px]`}
        data-node-id="21:2509"
      >
        <p className="leading-[1.2]">{`Mission Post Mortem `}</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#fb227b] content-stretch flex items-center justify-center left-[calc(50%-10.76px)] px-[12.891px] py-[10.313px] rounded-[5.156px] top-[158px] w-[172.486px]">
        <div className="[word-break:break-word] flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[21.734px] text-white whitespace-nowrap">
          <p className="leading-[normal]">SURVIVED</p>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[normal] left-[calc(50%-15.83px)] text-[25.324px] text-center text-white top-[113px] tracking-[-0.5065px] w-[110.341px]">
        Status
      </p>
      <div className="-translate-x-1/2 absolute h-[165.756px] left-[calc(50%-15.55px)] top-[247px] w-[404.906px]">
        <div
          className="-translate-x-1/2 absolute h-[147.883px] left-[calc(50%+0.17px)] top-[-20px] w-[361.247px]"
          data-name="Table_02 1"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[162.85%] left-0 max-w-none top-[-28.94%] w-full"
              src={`${assetPathPrefix}/32cde.png`}
            />
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[normal] left-[203.36px] text-[13.903px] text-center text-white top-[17px] tracking-[0.0695px] w-[272.855px]">
          Crew Health: Medium
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[normal] left-[203.35px] text-[13.903px] text-center text-white top-[45.77px] tracking-[0.0695px] w-[231.145px]">
          Science Objectives: 82%
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[normal] left-[203.36px] text-[13.903px] text-center text-white top-[74.54px] tracking-[0.0695px] w-[272.855px]">
          Power Reserves: 31%
        </p>
      </div>
    </div>
  );
}

function ReportLine({ top }: { top: string }) {
  return (
    <div
      className={`absolute flex h-[1.016px] items-center justify-center left-[13px] w-[622px] ${top}`}
    >
      <div className="flex-none rotate-[-0.09deg]">
        <div className="h-0 relative w-[622.001px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={`${assetPathPrefix}/00b3b.svg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportText({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Orbitron:Bold'] font-bold justify-center leading-[0] text-[17.304px] text-white tracking-[-0.2596px] ${className}`}
    >
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

export function Frame208() {
  return (
    <div className="relative size-full" data-node-id="21:2520">
      <DebriefBackground
        className="h-[403px] left-1/2 top-[calc(50%-0.5px)] w-[844px]"
        overlay="bg-[rgba(0,0,0,0.5)]"
      />
      <DebriefNav />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Regular'] font-normal text-white top-[56px]`}
        data-node-id="21:2525"
      >
        <p className="leading-[1.2]">Your Complete Mission Report</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[281px] left-1/2 top-[calc(50%+25.5px)] w-[648px]">
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[281px] left-[calc(50%-0.5px)] top-[calc(50%+1px)] w-[649px]"
          data-name="Cloud_02 1"
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute h-[117.26%] left-0 max-w-none top-[0.02%] w-[100.05%]"
                src={`${assetPathPrefix}/62426.png`}
              />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.06)] inset-0" />
          </div>
        </div>
        <ReportLine top="top-[59px]" />
        <ReportLine top="top-[131px]" />
        <ReportLine top="top-[203px]" />
        <div className="-translate-x-1/2 absolute flex h-[257px] items-center justify-center left-1/2 top-[10px] w-[2.008px]">
          <div className="flex-none rotate-[89.55deg]">
            <div className="h-0 relative w-[257.008px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={`${assetPathPrefix}/f7597.svg`}
                />
              </div>
            </div>
          </div>
        </div>
        <ReportText className="left-[110px] top-[29.5px] whitespace-nowrap">{`Evaluation `}</ReportText>
        <ReportText className="left-[350px] top-[31.5px] whitespace-nowrap">Your Report</ReportText>
        <ReportText className="left-[350px] top-[101.5px] whitespace-nowrap">
          You kept your crew safe
        </ReportText>
        <ReportText className="left-[350px] top-[168px] w-[231px]">
          You managed your resources properly
        </ReportText>
        <ReportText className="left-[100px] top-[101.5px] whitespace-nowrap">
          Crew Safety
        </ReportText>
        <ReportText className="left-[100px] top-[167.5px] whitespace-nowrap">
          Resource Efficiency
        </ReportText>
        <ReportText className="left-[100px] top-[231.5px] whitespace-nowrap">
          Scientific Progress
        </ReportText>
        <ReportText className="left-[350px] top-[236px] w-[239px]">
          Your team grew plants on the Moon
        </ReportText>
      </div>
    </div>
  );
}

function StatusRow({ label, dot, gap }: { label: string; dot: string; gap?: boolean }) {
  return (
    <div
      className={`content-stretch flex items-center relative shrink-0 w-full ${gap ? "gap-[45px]" : "justify-between"}`}
    >
      <p className="[word-break:break-word] font-['Orbitron:SemiBold'] font-semibold leading-[1.75] relative shrink-0 text-[18px] text-white tracking-[-0.27px] whitespace-nowrap">
        {label}
      </p>
      <div className="relative shrink-0 size-[16px]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={`${assetPathPrefix}/${dot}`}
        />
      </div>
    </div>
  );
}

export function Frame209() {
  return (
    <div className="relative size-full" data-node-id="21:2540">
      <DebriefBackground
        className="h-[564px] left-1/2 top-[calc(50%+82px)] w-[882px]"
        overlay="bg-[rgba(0,0,0,0.5)]"
      />
      <DebriefNav />
      <div
        className={`${TITLE_BASE} font-['Orbitron:Bold'] font-bold text-[#ff383c] top-[56px]`}
        data-node-id="21:2545"
      >
        <p className="leading-[1.2]">Mission Complete!</p>
      </div>
      <div className="absolute bg-[rgba(93,93,93,0.09)] border border-[#fff9f9] border-solid h-[281px] left-[42px] overflow-clip top-[96px] w-[294px]">
        <p className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[26px] text-white top-0 tracking-[-0.39px] w-[324px]">
          Outpost Zero:
        </p>
        <p className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[20px] text-white top-[53px] tracking-[-0.3px] whitespace-nowrap">
          <span className="leading-[1.75]">Day: 30</span>
          <span className="leading-[1.75] text-[#fb227b]">/30</span>
        </p>
        <p className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[1.75] left-[31px] text-[20px] text-white top-[95px] tracking-[-0.3px] whitespace-nowrap">
          Resource panel:
        </p>
        <div className="[word-break:break-word] absolute font-['Orbitron:SemiBold'] font-semibold leading-[0] left-[31px] text-[18px] text-white top-[140px] tracking-[-0.27px] whitespace-nowrap">
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Life Support  20`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="mb-0 whitespace-pre">
            <span className="leading-[1.75]">{`Power  20`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
          <p className="whitespace-pre">
            <span className="leading-[1.75]">{`Protection  60`}</span>
            <span className="leading-[1.75] text-[#fb227b]">/100</span>
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[38px] items-start left-[385px] top-[113px] w-[242px]">
        <StatusRow label="Crew status." dot="f57d8.svg" />
        <StatusRow label="Current Alerts" dot="2a867.svg" />
        <StatusRow label="Mission Objectives" dot="82b38.svg" gap />
      </div>
      <div className="absolute flex h-[188.384px] items-center justify-center left-[653.48px] top-[112.67px] w-[122.592px]">
        <div className="flex-none rotate-[-0.18deg]">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative font-['Orbitron:SemiBold'] font-semibold text-[18px] text-white tracking-[-0.27px] whitespace-nowrap">
            <p className="leading-[1.75]">Protected</p>
            <p className="leading-[1.75]">None</p>
            <div className="leading-[0]">
              <p className="leading-[1.75] mb-0">Survive</p>
              <p className="leading-[1.75]">For 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const FRAME_META: Record<
  string,
  {
    nodeId: string;
    name: string;
    key: string;
    width: number;
    height: number;
    Component: React.ComponentType;
  }
> = {
  Frame64: {
    nodeId: "1:2099",
    name: "Frame 64",
    key: "Frame64",
    width: 844,
    height: 412,
    Component: Frame64,
  },
  Frame65: {
    nodeId: "1:2080",
    name: "Frame 65",
    key: "Frame65",
    width: 844,
    height: 412,
    Component: Frame65,
  },
  Frame66: {
    nodeId: "1:2227",
    name: "Frame 66",
    key: "Frame66",
    width: 844,
    height: 412,
    Component: Frame66,
  },
  Frame69: {
    nodeId: "1:2262",
    name: "Frame 69",
    key: "Frame69",
    width: 844,
    height: 412,
    Component: Frame69,
  },
  Frame70: {
    nodeId: "1:2272",
    name: "Frame 70",
    key: "Frame70",
    width: 844,
    height: 412,
    Component: Frame70,
  },
  Frame71: {
    nodeId: "1:2342",
    name: "Frame 71",
    key: "Frame71",
    width: 844,
    height: 412,
    Component: Frame71,
  },
  Frame72: {
    nodeId: "1:2065",
    name: "Frame 72",
    key: "Frame72",
    width: 844,
    height: 412,
    Component: Frame72,
  },
  Frame73: {
    nodeId: "1:2062",
    name: "Frame 73",
    key: "Frame73",
    width: 917,
    height: 412,
    Component: Frame73,
  },
  Frame74: {
    nodeId: "1:2451",
    name: "Frame 74",
    key: "Frame74",
    width: 844,
    height: 412,
    Component: Frame74,
  },
  Frame75: {
    nodeId: "1:2281",
    name: "Frame 75",
    key: "Frame75",
    width: 844,
    height: 412,
    Component: Frame75,
  },
  Frame76: {
    nodeId: "1:2290",
    name: "Frame 76",
    key: "Frame76",
    width: 844,
    height: 412,
    Component: Frame76,
  },
  Frame77: {
    nodeId: "1:2302",
    name: "Frame 77",
    key: "Frame77",
    width: 844,
    height: 412,
    Component: Frame77,
  },
  Frame78: {
    nodeId: "1:2315",
    name: "Frame 78",
    key: "Frame78",
    width: 844,
    height: 412,
    Component: Frame78,
  },
  Frame80: {
    nodeId: "1:2508",
    name: "Frame 80",
    key: "Frame80",
    width: 844,
    height: 412,
    Component: Frame80,
  },
  Frame81: {
    nodeId: "1:2524",
    name: "Frame 81",
    key: "Frame81",
    width: 844,
    height: 412,
    Component: Frame81,
  },
  Frame83: {
    nodeId: "1:2109",
    name: "Frame 83",
    key: "Frame83",
    width: 844,
    height: 412,
    Component: Frame83,
  },
  Frame84: {
    nodeId: "1:2190",
    name: "Frame 84",
    key: "Frame84",
    width: 844,
    height: 412,
    Component: Frame84,
  },
  Frame85: {
    nodeId: "1:2201",
    name: "Frame 85",
    key: "Frame85",
    width: 844,
    height: 412,
    Component: Frame85,
  },
  Frame86: {
    nodeId: "1:2213",
    name: "Frame 86",
    key: "Frame86",
    width: 844,
    height: 412,
    Component: Frame86,
  },
  Frame88: {
    nodeId: "1:2127",
    name: "Frame 88",
    key: "Frame88",
    width: 844,
    height: 412,
    Component: Frame88,
  },
  Frame89: {
    nodeId: "1:2181",
    name: "Frame 89",
    key: "Frame89",
    width: 844,
    height: 412,
    Component: Frame89,
  },
  Frame91: {
    nodeId: "1:2541",
    name: "Frame 91",
    key: "Frame91",
    width: 844,
    height: 412,
    Component: Frame91,
  },
  Frame98: {
    nodeId: "1:2596",
    name: "Frame 98",
    key: "Frame98",
    width: 844,
    height: 412,
    Component: Frame98,
  },
  Frame99: {
    nodeId: "1:2773",
    name: "Frame 99",
    key: "Frame99",
    width: 844,
    height: 412,
    Component: Frame99,
  },
  Frame100: {
    nodeId: "1:2606",
    name: "Frame 100",
    key: "Frame100",
    width: 844,
    height: 412,
    Component: Frame100,
  },
  Frame101: {
    nodeId: "1:2137",
    name: "Frame 101",
    key: "Frame101",
    width: 844,
    height: 412,
    Component: Frame101,
  },
  Frame102: {
    nodeId: "1:2147",
    name: "Frame 102",
    key: "Frame102",
    width: 844,
    height: 412,
    Component: Frame102,
  },
  Frame103: {
    nodeId: "1:2158",
    name: "Frame 103",
    key: "Frame103",
    width: 844,
    height: 412,
    Component: Frame103,
  },
  Frame104: {
    nodeId: "1:2169",
    name: "Frame 104",
    key: "Frame104",
    width: 844,
    height: 412,
    Component: Frame104,
  },
  Frame105: {
    nodeId: "1:2544",
    name: "Frame 105",
    key: "Frame105",
    width: 844,
    height: 412,
    Component: Frame105,
  },
  Frame106: {
    nodeId: "1:2783",
    name: "Frame 106",
    key: "Frame106",
    width: 844,
    height: 412,
    Component: Frame106,
  },
  Frame107: {
    nodeId: "1:2623",
    name: "Frame 107",
    key: "Frame107",
    width: 844,
    height: 412,
    Component: Frame107,
  },
  Frame109: {
    nodeId: "1:2089",
    name: "Frame 109",
    key: "Frame109",
    width: 844,
    height: 412,
    Component: Frame109,
  },
  Frame110: {
    nodeId: "1:2793",
    name: "Frame 110",
    key: "Frame110",
    width: 844,
    height: 412,
    Component: Frame110,
  },
  Frame111: {
    nodeId: "1:2631",
    name: "Frame 111",
    key: "Frame111",
    width: 844,
    height: 412,
    Component: Frame111,
  },
  Frame112: {
    nodeId: "1:2803",
    name: "Frame 112",
    key: "Frame112",
    width: 844,
    height: 412,
    Component: Frame112,
  },
  Frame113: {
    nodeId: "1:2566",
    name: "Frame 113",
    key: "Frame113",
    width: 844,
    height: 412,
    Component: Frame113,
  },
  Frame114: {
    nodeId: "1:2639",
    name: "Frame 114",
    key: "Frame114",
    width: 844,
    height: 412,
    Component: Frame114,
  },
  Frame115: {
    nodeId: "1:2650",
    name: "Frame 115",
    key: "Frame115",
    width: 844,
    height: 412,
    Component: Frame115,
  },
  Frame116: {
    nodeId: "1:2763",
    name: "Frame 116",
    key: "Frame116",
    width: 844,
    height: 412,
    Component: Frame116,
  },
  Frame117: {
    nodeId: "1:2661",
    name: "Frame 117",
    key: "Frame117",
    width: 844,
    height: 412,
    Component: Frame117,
  },
  Frame118: {
    nodeId: "1:2672",
    name: "Frame 118",
    key: "Frame118",
    width: 844,
    height: 412,
    Component: Frame118,
  },
  Frame119: {
    nodeId: "1:2683",
    name: "Frame 119",
    key: "Frame119",
    width: 844,
    height: 412,
    Component: Frame119,
  },
  Frame120: {
    nodeId: "1:2814",
    name: "Frame 120",
    key: "Frame120",
    width: 844,
    height: 412,
    Component: Frame120,
  },
  Frame121: {
    nodeId: "1:2713",
    name: "Frame 121",
    key: "Frame121",
    width: 844,
    height: 412,
    Component: Frame121,
  },
  Frame122: {
    nodeId: "1:2729",
    name: "Frame 122",
    key: "Frame122",
    width: 844,
    height: 412,
    Component: Frame122,
  },
  Frame124: {
    nodeId: "1:2694",
    name: "Frame 124",
    key: "Frame124",
    width: 844,
    height: 412,
    Component: Frame124,
  },
  Frame125: {
    nodeId: "1:2703",
    name: "Frame 125",
    key: "Frame125",
    width: 844,
    height: 412,
    Component: Frame125,
  },
  Frame126: {
    nodeId: "1:2845",
    name: "Frame 126",
    key: "Frame126",
    width: 844,
    height: 412,
    Component: Frame126,
  },
  Frame127: {
    nodeId: "1:2876",
    name: "Frame 127",
    key: "Frame127",
    width: 844,
    height: 412,
    Component: Frame127,
  },
  Frame128: {
    nodeId: "1:2753",
    name: "Frame 128",
    key: "Frame128",
    width: 844,
    height: 412,
    Component: Frame128,
  },
  Frame129: {
    nodeId: "1:2742",
    name: "Frame 129",
    key: "Frame129",
    width: 844,
    height: 412,
    Component: Frame129,
  },
  Frame130: {
    nodeId: "1:2369",
    name: "Frame 130",
    key: "Frame130",
    width: 844,
    height: 412,
    Component: Frame130,
  },
  Frame131: {
    nodeId: "1:2424",
    name: "Frame 131",
    key: "Frame131",
    width: 844,
    height: 412,
    Component: Frame131,
  },
  Frame132: {
    nodeId: "1:2396",
    name: "Frame 132",
    key: "Frame132",
    width: 844,
    height: 412,
    Component: Frame132,
  },
  Frame134: {
    nodeId: "1:2470",
    name: "Frame 134",
    key: "Frame134",
    width: 823,
    height: 384,
    Component: Frame134,
  },
  Frame135: {
    nodeId: "1:2489",
    name: "Frame 135",
    key: "Frame135",
    width: 844,
    height: 412,
    Component: Frame135,
  },
  Frame136: {
    nodeId: "1:2907",
    name: "Frame 136",
    key: "Frame136",
    width: 844,
    height: 435,
    Component: Frame136,
  },
  Frame137: {
    nodeId: "1:2929",
    name: "Frame 137",
    key: "Frame137",
    width: 844,
    height: 412,
    Component: Frame137,
  },
  Frame138: {
    nodeId: "1:2918",
    name: "Frame 138",
    key: "Frame138",
    width: 844,
    height: 435,
    Component: Frame138,
  },
  Frame139: {
    nodeId: "1:2960",
    name: "Frame 139",
    key: "Frame139",
    width: 844,
    height: 412,
    Component: Frame139,
  },
  Frame140: {
    nodeId: "1:2972",
    name: "Frame 140",
    key: "Frame140",
    width: 844,
    height: 412,
    Component: Frame140,
  },
  Frame142: {
    nodeId: "1:3025",
    name: "Frame 142",
    key: "Frame142",
    width: 844,
    height: 412,
    Component: Frame142,
  },
  Frame143: {
    nodeId: "1:3034",
    name: "Frame 143",
    key: "Frame143",
    width: 844,
    height: 412,
    Component: Frame143,
  },
  Frame144: {
    nodeId: "1:3042",
    name: "Frame 144",
    key: "Frame144",
    width: 844,
    height: 412,
    Component: Frame144,
  },
  Frame145: {
    nodeId: "1:3058",
    name: "Frame 145",
    key: "Frame145",
    width: 844,
    height: 412,
    Component: Frame145,
  },
  Frame146: {
    nodeId: "1:2981",
    name: "Frame 146",
    key: "Frame146",
    width: 844,
    height: 412,
    Component: Frame146,
  },
  Frame147: {
    nodeId: "1:3074",
    name: "Frame 147",
    key: "Frame147",
    width: 844,
    height: 435,
    Component: Frame147,
  },
  Frame148: {
    nodeId: "1:2992",
    name: "Frame 148",
    key: "Frame148",
    width: 844,
    height: 412,
    Component: Frame148,
  },
  Frame149: {
    nodeId: "1:3012",
    name: "Frame 149",
    key: "Frame149",
    width: 844,
    height: 412,
    Component: Frame149,
  },
  Frame150: {
    nodeId: "1:3003",
    name: "Frame 150",
    key: "Frame150",
    width: 844,
    height: 412,
    Component: Frame150,
  },
  Frame152: {
    nodeId: "1:3086",
    name: "Frame 152",
    key: "Frame152",
    width: 844,
    height: 412,
    Component: Frame152,
  },
  Frame153: {
    nodeId: "1:3095",
    name: "Frame 153",
    key: "Frame153",
    width: 844,
    height: 412,
    Component: Frame153,
  },
  Frame154: {
    nodeId: "1:3104",
    name: "Frame 154",
    key: "Frame154",
    width: 844,
    height: 412,
    Component: Frame154,
  },
  Frame155: {
    nodeId: "1:3120",
    name: "Frame 155",
    key: "Frame155",
    width: 844,
    height: 412,
    Component: Frame155,
  },
  Frame156: {
    nodeId: "1:3133",
    name: "Frame 156",
    key: "Frame156",
    width: 844,
    height: 412,
    Component: Frame156,
  },
  Frame157: {
    nodeId: "1:3142",
    name: "Frame 157",
    key: "Frame157",
    width: 844,
    height: 412,
    Component: Frame157,
  },
  Frame159: {
    nodeId: "1:3150",
    name: "Frame 159",
    key: "Frame159",
    width: 844,
    height: 412,
    Component: Frame159,
  },
  Frame160: {
    nodeId: "1:3168",
    name: "Frame 160",
    key: "Frame160",
    width: 844,
    height: 412,
    Component: Frame160,
  },
  Frame161: {
    nodeId: "1:3219",
    name: "Frame 161",
    key: "Frame161",
    width: 844,
    height: 412,
    Component: Frame161,
  },
  Frame162: {
    nodeId: "1:3250",
    name: "Frame 162",
    key: "Frame162",
    width: 844,
    height: 412,
    Component: Frame162,
  },
  Frame163: {
    nodeId: "1:3184",
    name: "Frame 163",
    key: "Frame163",
    width: 844,
    height: 412,
    Component: Frame163,
  },
  Frame164: {
    nodeId: "1:3200",
    name: "Frame 164",
    key: "Frame164",
    width: 844,
    height: 412,
    Component: Frame164,
  },
  Frame165: {
    nodeId: "1:3281",
    name: "Frame 165",
    key: "Frame165",
    width: 844,
    height: 412,
    Component: Frame165,
  },
  Frame166: {
    nodeId: "1:3289",
    name: "Frame 166",
    key: "Frame166",
    width: 844,
    height: 412,
    Component: Frame166,
  },
  Frame167: {
    nodeId: "1:3303",
    name: "Frame 167",
    key: "Frame167",
    width: 844,
    height: 412,
    Component: Frame167,
  },
  Frame189: {
    nodeId: "1:2118",
    name: "Frame 189",
    key: "Frame189",
    width: 844,
    height: 412,
    Component: Frame189,
  },
  Frame192: {
    nodeId: "1:2237",
    name: "Frame 192",
    key: "Frame192",
    width: 844,
    height: 412,
    Component: Frame192,
  },
  Frame193: {
    nodeId: "1:2251",
    name: "Frame 193",
    key: "Frame193",
    width: 844,
    height: 412,
    Component: Frame193,
  },
  Frame194: {
    nodeId: "1:2328",
    name: "Frame 194",
    key: "Frame194",
    width: 844,
    height: 412,
    Component: Frame194,
  },
  Frame199: {
    nodeId: "21:2410",
    name: "Frame 199",
    key: "Frame199",
    width: 844,
    height: 412,
    Component: Frame199,
  },
  Frame200: {
    nodeId: "21:2419",
    name: "Frame 200",
    key: "Frame200",
    width: 844,
    height: 412,
    Component: Frame200,
  },
  Frame201: {
    nodeId: "21:2433",
    name: "Frame 201",
    key: "Frame201",
    width: 844,
    height: 412,
    Component: Frame201,
  },
  Frame202: {
    nodeId: "21:2447",
    name: "Frame 202",
    key: "Frame202",
    width: 844,
    height: 412,
    Component: Frame202,
  },
  Frame203: {
    nodeId: "21:2465",
    name: "Frame 203",
    key: "Frame203",
    width: 844,
    height: 412,
    Component: Frame203,
  },
  Frame204: {
    nodeId: "21:2479",
    name: "Frame 204",
    key: "Frame204",
    width: 844,
    height: 412,
    Component: Frame204,
  },
  Frame205: {
    nodeId: "21:2488",
    name: "Frame 205",
    key: "Frame205",
    width: 844,
    height: 412,
    Component: Frame205,
  },
  Frame206: {
    nodeId: "21:2497",
    name: "Frame 206",
    key: "Frame206",
    width: 844,
    height: 412,
    Component: Frame206,
  },
  Frame207: {
    nodeId: "21:2505",
    name: "Frame 207",
    key: "Frame207",
    width: 844,
    height: 412,
    Component: Frame207,
  },
  Frame208: {
    nodeId: "21:2520",
    name: "Frame 208",
    key: "Frame208",
    width: 844,
    height: 412,
    Component: Frame208,
  },
  Frame209: {
    nodeId: "21:2540",
    name: "Frame 209",
    key: "Frame209",
    width: 844,
    height: 412,
    Component: Frame209,
  },
};

// Every local asset used by the frames, preloaded in the background for smooth navigation.
export const ALL_ASSET_URLS: string[] = [
  `${assetPathPrefix}/00b3b.svg`,
  `${assetPathPrefix}/0ea1b.png`,
  `${assetPathPrefix}/11a87.svg`,
  `${assetPathPrefix}/17ca7.png`,
  `${assetPathPrefix}/1fda0.png`,
  `${assetPathPrefix}/21a84.png`,
  `${assetPathPrefix}/2a867.svg`,
  `${assetPathPrefix}/2eb14.png`,
  `${assetPathPrefix}/32cde.png`,
  `${assetPathPrefix}/4001b.png`,
  `${assetPathPrefix}/496b3.png`,
  `${assetPathPrefix}/4cd23.png`,
  `${assetPathPrefix}/52eee.png`,
  `${assetPathPrefix}/57dd5.svg`,
  `${assetPathPrefix}/5a967.svg`,
  `${assetPathPrefix}/62426.png`,
  `${assetPathPrefix}/65d2f.png`,
  `${assetPathPrefix}/667bb.png`,
  `${assetPathPrefix}/700cc.png`,
  `${assetPathPrefix}/7591f.png`,
  `${assetPathPrefix}/7ed7a.png`,
  `${assetPathPrefix}/82b38.svg`,
  `${assetPathPrefix}/82f39.svg`,
  `${assetPathPrefix}/9ebe1.png`,
  `${assetPathPrefix}/ada9f.png`,
  `${assetPathPrefix}/b6be3.png`,
  `${assetPathPrefix}/b88e4.svg`,
  `${assetPathPrefix}/ba8b5.png`,
  `${assetPathPrefix}/c759c.png`,
  `${assetPathPrefix}/cb0c7.png`,
  `${assetPathPrefix}/d6e8f.png`,
  `${assetPathPrefix}/da240.png`,
  `${assetPathPrefix}/e7030.png`,
  `${assetPathPrefix}/eaccd.svg`,
  `${assetPathPrefix}/eb544.svg`,
  `${assetPathPrefix}/f1f93.png`,
  `${assetPathPrefix}/f57d8.svg`,
  `${assetPathPrefix}/f7597.svg`,
  `${assetPathPrefix}/ui/menu.png`,
  `${assetPathPrefix}/ui/nav-arrow.png`,
];

// Assets used by each frame, so navigation can decode them before showing the screen.
export const FRAME_ASSETS: Record<string, string[]> = {
  Frame64: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame65: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/c759c.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame66: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/17ca7.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame69: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame70: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/cb0c7.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame71: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/52eee.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame72: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/11a87.svg`,
    `${assetPathPrefix}/62426.png`,
    `${assetPathPrefix}/82f39.svg`,
    `${assetPathPrefix}/da240.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame73: [`${assetPathPrefix}/21a84.png`, `${assetPathPrefix}/4001b.png`],
  Frame74: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/ba8b5.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame75: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/667bb.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame76: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/667bb.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame77: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/7ed7a.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame78: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/f1f93.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame80: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame81: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ba8b5.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame83: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame84: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame85: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/17ca7.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame86: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame88: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/cb0c7.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame89: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/4cd23.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame91: [`${assetPathPrefix}/ui/menu.png`, `${assetPathPrefix}/ui/nav-arrow.png`],
  Frame98: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame99: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame100: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame101: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame102: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/cb0c7.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame103: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/cb0c7.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame104: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame105: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/5a967.svg`,
    `${assetPathPrefix}/62426.png`,
    `${assetPathPrefix}/b88e4.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame106: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame107: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame109: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/c759c.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame110: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame111: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame112: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ba8b5.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame113: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/eaccd.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame114: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/52eee.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame115: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/52eee.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame116: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/9ebe1.png`,
    `${assetPathPrefix}/eb544.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame117: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame118: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame119: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ba8b5.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame120: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame121: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ba8b5.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame122: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame124: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame125: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame126: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/57dd5.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame127: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/57dd5.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame128: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame129: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame130: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame131: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame132: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/ba8b5.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame134: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame135: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/496b3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame136: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame137: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame138: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame139: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame140: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame142: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame143: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame144: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame145: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame146: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame147: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/52eee.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame148: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame149: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/65d2f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame150: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/e7030.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame152: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame153: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame154: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame155: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame156: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame157: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame159: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame160: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame161: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame162: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame163: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame164: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/1fda0.png`,
    `${assetPathPrefix}/700cc.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame165: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame166: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/d6e8f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame167: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/d6e8f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame189: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame192: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/7591f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame193: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/17ca7.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame194: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/7ed7a.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/f1f93.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame199: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame200: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/d6e8f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame201: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/d6e8f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame202: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/d6e8f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame203: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/d6e8f.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame204: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/ada9f.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame205: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame206: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2eb14.png`,
    `${assetPathPrefix}/b6be3.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame207: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/32cde.png`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame208: [
    `${assetPathPrefix}/00b3b.svg`,
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/62426.png`,
    `${assetPathPrefix}/f7597.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
  Frame209: [
    `${assetPathPrefix}/0ea1b.png`,
    `${assetPathPrefix}/2a867.svg`,
    `${assetPathPrefix}/82b38.svg`,
    `${assetPathPrefix}/f57d8.svg`,
    `${assetPathPrefix}/ui/menu.png`,
    `${assetPathPrefix}/ui/nav-arrow.png`,
  ],
};
