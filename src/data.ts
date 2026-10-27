export const REPO = 'https://github.com/ChrystianLozano/ChiakiUCR';
export const RELEASES = `${REPO}/releases/latest`;
export const DONATE = 'https://www.paypal.com/donate/?hosted_button_id=2J23ZH6FKZDN2';
export const CHIAKI_NG = 'https://github.com/streetpea/chiaki-ng';
export const SITE = 'https://chiaki-ucr.chrystian.dev';

export type Lang = 'es' | 'en';

export interface Feature {
  title: string;
  body: string;
  tag: string;
}

export interface MappingItem {
  pad: string;
  does: string;
  keys: string;
  note: string;
}

export interface StepItem {
  title: string;
  body: string;
  code?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Translation {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
    ogImageAlt: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImageAlt: string;
    jsonLdDescription: string;
  };
  nav: {
    modules: string;
    keys: string;
    install: string;
    download: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    lede: string;
    downloadBtn: string;
    githubBtn: string;
    specSilicon: string;
    specOs: string;
    specLicense: string;
    badgeAlt: string;
    badgeLeft: string;
    badgeRight: string;
  };
  ticker: string[];
  modules: {
    title: string;
    desc: string;
    items: Feature[];
  };
  showcase: {
    title: string;
    desc: string;
    imgAlt: string;
    hint: string;
    callout1Title: string;
    callout1Body: string;
    callout2Title: string;
    callout2Body: string;
    callout3Title: string;
    callout3Body: string;
  };
  profiles: {
    sectionTag: string;
    items: Array<{
      id: string;
      tag: string;
      title: string;
      desc: string;
      imgAlt: string;
      imgSrc: string;
      theme: 'orange' | 'cyan';
    }>;
  };
  raider: {
    tag: string;
    title: string;
    desc: string;
    imgAlt: string;
  };
  mapping: {
    title: string;
    desc: string;
    caption: string;
    colPad: string;
    colAction: string;
    colKey: string;
    items: MappingItem[];
    hotkeys: {
      title: string;
      desc: string;
    }[];
  };
  install: {
    title: string;
    desc: string;
    downloadBtn: string;
    getChiakiBtn: string;
    noticeTag: string;
    noticeBody: string;
    steps: StepItem[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  footer: {
    note: string;
    donateBtn: string;
    githubBtn: string;
    email: string;
    bot1: string;
    bot2: string;
    bot3: string;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    meta: {
      title: 'Chiaki-UCR · Ratón y teclado como DualSense en macOS',
      description: 'Mapeador nativo de ratón y teclado a DualSense virtual para chiaki-ng en Apple Silicon. 125 Hz, anti-deadzone, modo vehículo y telemetría en vivo.',
      ogTitle: 'Chiaki-UCR para macOS · Tu ratón, tu DualSense',
      ogDescription: 'Tu ratón y tu teclado, convertidos en un DualSense virtual para jugar a tu PlayStation con chiaki-ng en tu Mac.',
      ogLocale: 'es_ES',
      ogImageAlt: 'Chiaki-UCR para macOS: un mando DualSense fusionado con teclado y ratón, con el lema «Tu ratón, tu DualSense»',
      twitterTitle: 'Chiaki-UCR para macOS · Tu ratón, tu DualSense',
      twitterDescription: 'Ratón y teclado como DualSense virtual para chiaki-ng en Apple Silicon.',
      twitterImageAlt: 'Chiaki-UCR para macOS: un mando DualSense fusionado con teclado y ratón',
      jsonLdDescription: 'Mapeador nativo de ratón y teclado a DualSense virtual para chiaki-ng en macOS (Apple Silicon).',
    },
    nav: {
      modules: 'Módulos',
      keys: 'Teclas',
      install: 'Instalar',
      download: 'Descargar',
    },
    hero: {
      titleLine1: 'Tu ratón,',
      titleLine2: 'tu DualSense',
      lede: 'Chiaki-UCR convierte ratón y teclado en un mando DualSense virtual para jugar a tu PS5 o PS4 con chiaki-ng en tu Mac. Nativo, a 125 Hz y sin drivers de kernel.',
      downloadBtn: 'Descargar para macOS',
      githubBtn: 'Ver en GitHub',
      specSilicon: 'Apple Silicon',
      specOs: 'macOS Ventura',
      specLicense: 'código abierto',
      badgeAlt: 'Mando con teclas WASD y un ratón fusionados, en colores de espectro',
      badgeLeft: 'DualSense virtual',
      badgeRight: '125 Hz',
    },
    ticker: [
      'DualSense virtual · 125 Hz',
      'Ratón y teclado',
      'Apple Silicon',
      'chiaki-ng',
      'PS5 y PS4',
      'Licencia MIT',
      'Latencia imperceptible',
    ],
    modules: {
      title: 'Todo para apuntar',
      desc: 'Un plugin C++ y Objective-C++ inyectado con DYLD_INSERT_LIBRARIES, más una app de control en SwiftUI. Chiaki cree que hay un mando real conectado.',
      items: [
        {
          title: 'DualSense a 125 Hz',
          body: 'Chiaki detecta un mando PlayStation real gracias a SDL_VirtualJoystickDesc. Sin drivers de kernel ni emuladores externos.',
          tag: 'SDL2',
        },
        {
          title: 'Motor anti-deadzone',
          body: 'Compensa la zona muerta interna de los juegos de PS5 de 0 a 100%. Sensibilidad X e Y por separado, curva lineal o exponencial y suavizado.',
          tag: 'APUNTADO',
        },
        {
          title: 'Multiplicador ADS',
          body: 'Mantén clic derecho y la mira se frena sola para apuntar con precisión. Tú eliges cuánto.',
          tag: 'L2',
        },
        {
          title: 'Modo vehículo (F6)',
          body: 'W pasa a ser el acelerador analógico (R2) y S el freno o reversa (L2). Pensado para GTA y juegos de mundo abierto.',
          tag: 'GTA',
        },
        {
          title: 'Telemetría en vivo',
          body: 'La app SwiftUI lee el plugin por memoria compartida POSIX (/tmp/chiaki_ucr_state.shm). Ves los sticks y los gatillos moverse en tiempo real.',
          tag: 'SHM',
        },
        {
          title: 'Rueda de armas asistida',
          body: 'Con L1 pulsado el ratón mueve un cursor virtual y el stick derecho se queda apuntando al arma elegida.',
          tag: 'L1',
        },
      ],
    },
    showcase: {
      title: 'El panel, a la vista',
      desc: 'Telemetría de ambos sticks y gatillos, perfiles rápidos y todos los sliders del motor de ratón. Cambios en tiempo real, sin reiniciar.',
      imgAlt: 'Captura de Chiaki-UCR para macOS: telemetría del DualSense virtual, perfiles rápidos y ajustes del motor de ratón',
      hint: 'Desliza para ver el panel completo →',
      callout1Title: 'Perfiles rápidos',
      callout1Body: 'Arc Raiders, GTA V y modo vehículo en un clic.',
      callout2Title: 'Telemetría 125 Hz',
      callout2Body: 'Sticks y gatillos sincronizados por memoria compartida.',
      callout3Title: 'Mapeo completo',
      callout3Body: 'Cada botón del DualSense con su tecla, editable.',
    },
    profiles: {
      sectionTag: 'Perfiles Rápidos',
      items: [
        {
          id: 'arc-raiders',
          tag: 'Perfil activo: Arc Raiders',
          title: 'Teclado y ratón en consola',
          desc: 'Un perfil de shooter listo para Arc Raiders: apuntado fino, ADS con clic derecho y rueda de armas con Q.',
          imgAlt: 'Jugadora con casco y gafas jugando con teclado y ratón junto a una PS5 en una cabaña de madera',
          imgSrc: '/img/raider.png',
          theme: 'orange',
        },
        {
          id: 'gta-6',
          tag: 'Perfil activo: GTA VI',
          title: 'Precisión en Vice City',
          desc: 'Perfil optimizado para GTA VI: apuntado instantáneo a pie, control analógico para vehículos y acceso rápido al dial de armas.',
          imgAlt: 'Jugador jugando GTA VI con teclado y ratón frente a su PS5 en un salón soleado',
          imgSrc: '/img/gta6.png',
          theme: 'cyan',
        },
      ],
    },
    raider: {
      tag: 'Perfil activo: Arc Raiders',
      title: 'Teclado y ratón en consola',
      desc: 'Un perfil de shooter listo para Arc Raiders: apuntado fino, ADS con clic derecho y rueda de armas con Q.',
      imgAlt: 'Jugadora con casco y gafas jugando con teclado y ratón junto a una PS5 en una cabaña de madera',
    },
    mapping: {
      title: 'Cada botón, una tecla',
      desc: 'Estos son los valores por defecto. Todos se cambian desde el panel de la app.',
      caption: 'Mapeo por defecto de DualSense a teclado y ratón',
      colPad: 'DualSense',
      colAction: 'Acción',
      colKey: 'Tecla',
      items: [
        { pad: 'Stick izquierdo', does: 'Movimiento', keys: 'W A S D', note: 'Ctrl izq = caminar lento' },
        { pad: 'Stick derecho', does: 'Cámara y mirilla', keys: 'Ratón', note: '' },
        { pad: 'L2', does: 'Apuntar', keys: 'Clic derecho', note: '' },
        { pad: 'R2', does: 'Disparar', keys: 'Clic izquierdo', note: '' },
        { pad: 'Cruz', does: 'Saltar / correr', keys: 'Espacio', note: '' },
        { pad: 'Círculo', does: 'Agacharse / rodar', keys: 'C', note: '' },
        { pad: 'Cuadrado', does: 'Recargar / interactuar', keys: 'R', note: 'Alternativa: F' },
        { pad: 'Triángulo', does: 'Cambiar arma', keys: 'E', note: 'O rueda arriba' },
        { pad: 'L1', does: 'Habilidad / rueda de armas', keys: 'Q', note: '' },
        { pad: 'R1', does: 'Granada / cubrirse', keys: 'G', note: '' },
        { pad: 'L3', does: 'Sprint', keys: 'Shift izq', note: '' },
        { pad: 'R3', does: 'Cuerpo a cuerpo', keys: 'Clic central', note: '' },
        { pad: 'D-Pad', does: 'Cruceta', keys: '1 2 3 4', note: 'Y flechas' },
        { pad: 'Touchpad', does: 'Mapa / inventario', keys: 'Tab', note: '' },
        { pad: 'Options', does: 'Pausa', keys: 'M', note: 'O Enter' },
      ],
      hotkeys: [
        {
          title: 'F8 · Option + M',
          desc: 'Bloquea o libera el ratón. Al bloquear se activa el DualSense; al soltar, usas tu Mac con normalidad.',
        },
        {
          title: 'F6 · Modo vehículo',
          desc: 'W acelera con R2 analógico y S frena o va en reversa con L2.',
        },
        {
          title: 'L1 · Rueda de armas',
          desc: 'Mantén L1 y mueve el ratón: el stick derecho se queda apuntando al arma elegida, sin volver al centro.',
        },
      ],
    },
    install: {
      title: 'Instala en cinco pasos',
      desc: 'Necesitas un Mac con Apple Silicon, macOS 13 o superior y chiaki-ng instalado.',
      downloadBtn: 'Chiaki-UCR-macOS-arm64.zip',
      getChiakiBtn: 'Obtener chiaki-ng',
      noticeTag: 'Aviso // Online competitivo',
      noticeBody: 'Chiaki-UCR emula un mando DualSense. En modos competitivos online, algunas desarrolladoras consideran el uso de teclado y ratón como ventaja no permitida o infracción de sus normas, con riesgo de sanciones o baneo. Juega con cabeza y bajo tu propia responsabilidad.',
      steps: [
        {
          title: 'Instala chiaki-ng',
          body: 'Descarga chiaki-ng y déjalo en /Applications/chiaki-ng.app. Necesitas un Mac con Apple Silicon (M1 a M4) y macOS 13 o superior.',
        },
        {
          title: 'Descarga Chiaki-UCR',
          body: 'Baja Chiaki-UCR-macOS-arm64.zip desde Releases, descomprímelo y arrastra Chiaki-UCR.app a /Applications.',
        },
        {
          title: 'Quita la cuarentena',
          body: 'La app no tiene firma de pago de Apple. Si macOS dice que está dañada, ejecuta el comando de abajo en la Terminal.',
          code: 'xattr -cr /Applications/Chiaki-UCR.app',
        },
        {
          title: 'Abre chiaki-ng con UCR',
          body: 'En Chiaki-UCR pulsa el botón azul «Abrir chiaki-ng con UCR». Se abre chiaki-ng con el plugin inyectado. Inicia tu stream de PS5 o PS4.',
        },
        {
          title: 'Pulsa F8 y juega',
          body: 'F8 (u Option + M) bloquea el ratón y activa el DualSense. Pulsa otra vez para soltar el cursor. F6 alterna el modo vehículo.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Funciona con PS4 y PS5?',
          a: 'Sí. Chiaki-UCR actúa sobre chiaki-ng, que ya hace Remote Play con las dos consolas.',
        },
        {
          q: '¿Funciona en Intel o en Windows?',
          a: 'No. Está hecho para Mac con Apple Silicon y macOS 13 o posterior.',
        },
        {
          q: '¿Por qué macOS me pide permisos?',
          a: 'Al bloquear el ratón por primera vez macOS pide Accesibilidad o Monitorización de entrada, en Ajustes del Sistema > Privacidad y Seguridad. Acéptalos para capturar el cursor y las teclas.',
        },
        {
          q: '¿Puedo cambiar las teclas?',
          a: 'Sí. Todos los controles y sensibilidades se ajustan en tiempo real desde el panel de la app, y hay perfiles rápidos para Arc Raiders y GTA V.',
        },
        {
          q: '¿Es baneable en competitivo online?',
          a: 'Chiaki-UCR emula un mando DualSense legítimo a través de chiaki-ng, por lo que el sistema recibe entradas de mando estándar. Sin embargo, en partidas competitivas o multijugador online, ciertas desarrolladoras consideran la emulación de teclado y ratón como una ventaja indebida o una infracción de sus términos de servicio, con riesgo potencial de sanción o baneo. Te recomendamos consultar las políticas de cada juego y usar la herramienta con prudencia y bajo tu propia responsabilidad.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Nada. Es código abierto con licencia MIT. Si te sirve, puedes apoyarlo con una donación en PayPal.',
        },
      ],
    },
    footer: {
      note: 'Hecho por Chrystian Lozano. Si Chiaki-UCR te ahorra un reinicio de sesión o dos, puedes apoyarlo con un café.',
      donateBtn: 'Donar con PayPal',
      githubBtn: 'GitHub',
      email: 'hola@chrystian.dev',
      bot1: 'Licencia MIT · Código abierto',
      bot2: 'Aviso: uso en online competitivo bajo tu propia responsabilidad',
      bot3: 'Proyecto no oficial, no afiliado a Sony, Embark Studios ni a chiaki-ng',
    },
  },
  en: {
    meta: {
      title: 'Chiaki-UCR · Mouse and keyboard as DualSense on macOS',
      description: 'Native mouse and keyboard to virtual DualSense mapper for chiaki-ng on Apple Silicon. 125 Hz, anti-deadzone, vehicle mode, and live telemetry.',
      ogTitle: 'Chiaki-UCR for macOS · Your mouse, your DualSense',
      ogDescription: 'Your mouse and keyboard converted into a virtual DualSense controller to play your PlayStation with chiaki-ng on your Mac.',
      ogLocale: 'en_US',
      ogImageAlt: 'Chiaki-UCR for macOS: a DualSense controller fused with mouse and keyboard, with the tagline "Your mouse, your DualSense"',
      twitterTitle: 'Chiaki-UCR for macOS · Your mouse, your DualSense',
      twitterDescription: 'Mouse and keyboard as a virtual DualSense controller for chiaki-ng on Apple Silicon.',
      twitterImageAlt: 'Chiaki-UCR for macOS: a DualSense controller fused with keyboard and mouse',
      jsonLdDescription: 'Native mouse and keyboard to virtual DualSense mapper for chiaki-ng on macOS (Apple Silicon).',
    },
    nav: {
      modules: 'Modules',
      keys: 'Controls',
      install: 'Install',
      download: 'Download',
    },
    hero: {
      titleLine1: 'Your mouse,',
      titleLine2: 'your DualSense',
      lede: 'Chiaki-UCR turns your mouse and keyboard into a virtual DualSense controller to play your PS5 or PS4 via chiaki-ng on your Mac. Native, 125 Hz, and zero kernel drivers.',
      downloadBtn: 'Download for macOS',
      githubBtn: 'View on GitHub',
      specSilicon: 'Apple Silicon',
      specOs: 'macOS Ventura',
      specLicense: 'open source',
      badgeAlt: 'Controller fused with WASD keys and a mouse, in spectrum colors',
      badgeLeft: 'Virtual DualSense',
      badgeRight: '125 Hz',
    },
    ticker: [
      'Virtual DualSense · 125 Hz',
      'Mouse & keyboard',
      'Apple Silicon',
      'chiaki-ng',
      'PS5 & PS4',
      'MIT License',
      'Imperceptible latency',
    ],
    modules: {
      title: 'Built for precision aiming',
      desc: 'A C++ and Objective-C++ plugin injected via DYLD_INSERT_LIBRARIES, paired with a SwiftUI control app. Chiaki sees an authentic controller connected.',
      items: [
        {
          title: '125 Hz DualSense',
          body: 'Chiaki detects a genuine PlayStation controller via SDL_VirtualJoystickDesc. No kernel drivers or external emulators required.',
          tag: 'SDL2',
        },
        {
          title: 'Anti-deadzone engine',
          body: 'Compensates for in-game deadzones on PS5 from 0 to 100%. Independent X/Y sensitivity, linear or exponential curves, and smoothing.',
          tag: 'AIMING',
        },
        {
          title: 'ADS multiplier',
          body: 'Hold right-click and your crosshair automatically decelerates for pinpoint accuracy. You configure how much.',
          tag: 'L2',
        },
        {
          title: 'Vehicle mode (F6)',
          body: 'W acts as analog throttle (R2) and S as brake or reverse (L2). Tailored for GTA and open-world games.',
          tag: 'GTA',
        },
        {
          title: 'Live telemetry',
          body: 'The SwiftUI companion app reads plugin state via POSIX shared memory (/tmp/chiaki_ucr_state.shm). Watch sticks and triggers update in real time.',
          tag: 'SHM',
        },
        {
          title: 'Assisted weapon wheel',
          body: 'Holding L1 lets mouse movement steer a virtual selector; the right stick locks directly onto your chosen weapon.',
          tag: 'L1',
        },
      ],
    },
    showcase: {
      title: 'Full control at a glance',
      desc: 'Telemetry for both sticks and triggers, quick profiles, and full mouse engine sliders. Real-time tuning, zero restarts.',
      imgAlt: 'Chiaki-UCR macOS screenshot: virtual DualSense telemetry, quick profiles, and mouse engine tuning',
      hint: 'Scroll to view full panel →',
      callout1Title: 'Quick profiles',
      callout1Body: 'Arc Raiders, GTA V, and vehicle mode in one click.',
      callout2Title: '125 Hz Telemetry',
      callout2Body: 'Sticks and triggers synchronized via POSIX shared memory.',
      callout3Title: 'Full Mapping',
      callout3Body: 'Every DualSense button bound to a key, fully customizable.',
    },
    profiles: {
      sectionTag: 'Quick Profiles',
      items: [
        {
          id: 'arc-raiders',
          tag: 'Active Profile: Arc Raiders',
          title: 'Keyboard and mouse on console',
          desc: 'A shooter profile ready for Arc Raiders: fine-tuned aiming, right-click ADS, and Q weapon wheel.',
          imgAlt: 'Gamer wearing helmet and goggles playing with keyboard and mouse next to a PS5 in a cabin',
          imgSrc: '/img/raider.png',
          theme: 'orange',
        },
        {
          id: 'gta-6',
          tag: 'Active Profile: GTA VI',
          title: 'Precision in Vice City',
          desc: 'Optimized profile for GTA VI: snap aiming on foot, analog vehicle control, and instant weapon wheel access.',
          imgAlt: 'Gamer playing GTA VI with keyboard and mouse next to a PS5 in a sunlit room',
          imgSrc: '/img/gta6.png',
          theme: 'cyan',
        },
      ],
    },
    raider: {
      tag: 'Active Profile: Arc Raiders',
      title: 'Keyboard and mouse on console',
      desc: 'A shooter profile ready for Arc Raiders: fine-tuned aiming, right-click ADS, and Q weapon wheel.',
      imgAlt: 'Gamer wearing helmet and goggles playing with keyboard and mouse next to a PS5 in a cabin',
    },
    mapping: {
      title: 'Every button, a key',
      desc: 'These are the default bindings. Everything can be customized in the app panel.',
      caption: 'Default DualSense to keyboard and mouse mapping',
      colPad: 'DualSense',
      colAction: 'Action',
      colKey: 'Key',
      items: [
        { pad: 'Left Stick', does: 'Movement', keys: 'W A S D', note: 'Left Ctrl = slow walk' },
        { pad: 'Right Stick', does: 'Camera & Aim', keys: 'Mouse', note: '' },
        { pad: 'L2', does: 'Aim', keys: 'Right click', note: '' },
        { pad: 'R2', does: 'Fire', keys: 'Left click', note: '' },
        { pad: 'Cross', does: 'Jump / Run', keys: 'Space', note: '' },
        { pad: 'Circle', does: 'Crouch / Roll', keys: 'C', note: '' },
        { pad: 'Square', does: 'Reload / Interact', keys: 'R', note: 'Alternative: F' },
        { pad: 'Triangle', does: 'Switch weapon', keys: 'E', note: 'Or scroll up' },
        { pad: 'L1', does: 'Ability / Weapon wheel', keys: 'Q', note: '' },
        { pad: 'R1', does: 'Grenade / Cover', keys: 'G', note: '' },
        { pad: 'L3', does: 'Sprint', keys: 'Left Shift', note: '' },
        { pad: 'R3', does: 'Melee', keys: 'Middle click', note: '' },
        { pad: 'D-Pad', does: 'D-Pad', keys: '1 2 3 4', note: '& Arrow keys' },
        { pad: 'Touchpad', does: 'Map / Inventory', keys: 'Tab', note: '' },
        { pad: 'Options', does: 'Pause', keys: 'M', note: 'Or Enter' },
      ],
      hotkeys: [
        {
          title: 'F8 · Option + M',
          desc: 'Locks or unlocks the mouse. Locking activates DualSense input; releasing lets you use your Mac normally.',
        },
        {
          title: 'F6 · Vehicle mode',
          desc: 'W accelerates with analog R2 and S brakes or reverses with L2.',
        },
        {
          title: 'L1 · Weapon wheel',
          desc: 'Hold L1 and move the mouse: the right stick holds the chosen weapon angle without snapping back.',
        },
      ],
    },
    install: {
      title: 'Install in five steps',
      desc: 'You need an Apple Silicon Mac, macOS 13 or later, and chiaki-ng installed.',
      downloadBtn: 'Chiaki-UCR-macOS-arm64.zip',
      getChiakiBtn: 'Get chiaki-ng',
      noticeTag: 'Notice // Competitive Online',
      noticeBody: 'Chiaki-UCR emulates a DualSense controller. In competitive online games, some developers consider keyboard and mouse emulation an unfair advantage or a violation of their terms of service, with potential risk of sanctions or bans. Play wisely and at your own risk.',
      steps: [
        {
          title: 'Install chiaki-ng',
          body: 'Download chiaki-ng and place it in /Applications/chiaki-ng.app. Requires an Apple Silicon Mac (M1 to M4) and macOS 13 or later.',
        },
        {
          title: 'Download Chiaki-UCR',
          body: 'Download Chiaki-UCR-macOS-arm64.zip from Releases, unzip it, and drag Chiaki-UCR.app into /Applications.',
        },
        {
          title: 'Remove quarantine',
          body: 'The app is not signed with an Apple developer certificate. If macOS says the app is damaged, run the command below in Terminal.',
          code: 'xattr -cr /Applications/Chiaki-UCR.app',
        },
        {
          title: 'Launch chiaki-ng with UCR',
          body: 'In Chiaki-UCR, click the blue button «Open chiaki-ng with UCR». This opens chiaki-ng with the injected plugin. Start your PS5 or PS4 stream.',
        },
        {
          title: 'Press F8 and play',
          body: 'F8 (or Option + M) locks the mouse and activates the DualSense. Press again to release the cursor. F6 toggles vehicle mode.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Does it work with PS4 and PS5?',
          a: 'Yes. Chiaki-UCR works on top of chiaki-ng, which already handles Remote Play with both consoles.',
        },
        {
          q: 'Does it work on Intel Macs or Windows?',
          a: 'No. It is built specifically for Apple Silicon Macs running macOS 13 or later.',
        },
        {
          q: 'Why does macOS ask for permissions?',
          a: 'When locking the mouse for the first time, macOS requests Accessibility or Input Monitoring permissions in System Settings > Privacy & Security. Grant them so it can capture the cursor and keystrokes.',
        },
        {
          q: 'Can I customize the keybindings?',
          a: 'Yes. All controls and sensitivity curves can be adjusted in real time from the app panel, and quick profiles are included for Arc Raiders and GTA V.',
        },
        {
          q: 'Can you get banned in competitive online games?',
          a: 'Chiaki-UCR emulates a legitimate DualSense controller through chiaki-ng, so the system receives standard controller input. However, in competitive or multiplayer online matches, some developers consider keyboard and mouse emulation an unfair advantage or a violation of their terms of service, carrying a potential risk of penalties or bans. We recommend reviewing each game\'s policy and using the tool prudently at your own discretion.',
        },
        {
          q: 'How much does it cost?',
          a: 'Zero. It is open source under the MIT license. If you find it helpful, you can support development with a PayPal donation.',
        },
      ],
    },
    footer: {
      note: 'Built by Chrystian Lozano. If Chiaki-UCR saves you a session restart or two, consider supporting development with a coffee.',
      donateBtn: 'Donate via PayPal',
      githubBtn: 'GitHub',
      email: 'hola@chrystian.dev',
      bot1: 'MIT License · Open Source',
      bot2: 'Notice: use in competitive online modes is at your own risk',
      bot3: 'Unofficial project, not affiliated with Sony, Embark Studios, or chiaki-ng',
    },
  },
};

// Backward compatibility exports
export const features = translations.es.modules.items;
export const mapping = translations.es.mapping.items;
export const steps = translations.es.install.steps;
export const faq = translations.es.faq.items;
