export const REPO = 'https://github.com/ChrystianLozano/ChiakiUCR';
export const RELEASES = `${REPO}/releases/latest`;
export const DONATE = 'https://www.paypal.com/donate/?hosted_button_id=2J23ZH6FKZDN2';
export const CHIAKI_NG = 'https://github.com/streetpea/chiaki-ng';

export const features = [
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
];

export const mapping = [
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
];

export const steps = [
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
];

export const faq = [
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
    q: '¿Cuánto cuesta?',
    a: 'Nada. Es código abierto con licencia MIT. Si te sirve, puedes apoyarlo con una donación en PayPal.',
  },
];
