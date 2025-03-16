var d = Object.defineProperty;
var h = (r, t, n) => (t in r ? d(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (r[t] = n));
var i = (r, t, n) => h(r, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const s of e) if (s.type === 'childList') for (const a of s.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const s = {};
    return e.integrity && (s.integrity = e.integrity), e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy), e.crossOrigin === 'use-credentials' ? (s.credentials = 'include') : e.crossOrigin === 'anonymous' ? (s.credentials = 'omit') : (s.credentials = 'same-origin'), s;
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = n(e);
    fetch(e.href, s);
  }
})();
class p {
  constructor(t) {
    i(this, 'container');
    (this.container = document.createElement('div')), this.container.classList.add('sn-container'), (this.container.style.visibility = 'hidden'), t.appendChild(this.container);
  }
  turnOn() {
    this.container && this.container.parentElement && (this.container.style.visibility = '');
  }
  turnOff() {
    this.container && this.container.parentElement && (this.container.style.visibility = 'hidden');
  }
  destroy() {
    this.container && this.container.parentElement && this.container.parentElement.removeChild(this.container), (this.Container = null);
  }
}
class u {
  constructor(t) {
    i(this, 'container');
    i(this, 'images');
    i(this, 'starCount');
    i(this, 'lifetime');
    i(this, 'animationDuration');
    i(this, 'spawnInterval');
    i(this, 'starWidth');
    i(this, 'starHeight');
    i(this, 'timerId', null);
    i(this, 'spawnedCount', 0);
    const { parent: n, images: o, starCount: e = 50, lifetime: s = 5e3, animationDuration: a = 1e3, spawnInterval: l = 1e3 } = t;
    (this.container = document.createElement('div')),
      this.container.classList.add('sg-container'),
      n.appendChild(this.container),
      (this.images = o),
      (this.starCount = e),
      (this.lifetime = s),
      (this.animationDuration = a),
      (this.spawnInterval = l),
      (this.starWidth = '50px'),
      (this.starHeight = '50px');
  }
  spawnStar() {
    if (this.starCount !== void 0 && this.spawnedCount >= this.starCount) return;
    const t = document.createElement('div');
    t.classList.add('star'), (t.style.position = 'absolute');
    const n = Math.random() * window.innerWidth,
      o = Math.random() * window.innerHeight;
    (t.style.left = `${n}px`), (t.style.top = `${o}px`);
    const e = Math.floor(Math.random() * this.images.length),
      s = this.images[e];
    (t.style.backgroundImage = `url('${s}')`), (t.style.backgroundSize = 'contain'), (t.style.backgroundRepeat = 'no-repeat'), (t.style.width = this.starWidth), (t.style.height = this.starHeight);
    const a = Math.random() * 360;
    (t.style.transform = `rotate(${a}deg)`),
      this.container.appendChild(t),
      this.spawnedCount++,
      setTimeout(() => {
        t.classList.add('destroy'),
          setTimeout(() => {
            t.remove(), this.spawnedCount--;
          }, this.animationDuration);
      }, this.lifetime);
  }
  start() {
    this.timerId = window.setInterval(() => this.spawnStar(), this.spawnInterval);
  }
  stop() {
    this.timerId !== null && (clearInterval(this.timerId), (this.timerId = null));
  }
}
const c = document.querySelector('#app');
document.querySelectorAll('.social-icon-img').forEach((r) => {
  const t = r,
    n = Number(t.getAttribute('data-scale'));
  isNaN(n) || t.style.setProperty('height', `${90 * n}%`);
});
const m = new u({
  parent: c,
  images: [
    './stars/star_1.png',
    './stars/star_2.png',
    './stars/star_3.png',
    './stars/star_4.png',
    './stars/star_5.png',
    './stars/star_6.png',
    './stars/star_7.png',
    './stars/star_8.png',
    './stars/star_9.png',
    './stars/star_10.png',
    './stars/star_11.png',
    './stars/star_12.png',
    './stars/star_13.png',
    './stars/star_14.png',
    './stars/star_15.png',
    './stars/star_16.png',
    './stars/star_17.png',
    './stars/star_18.png',
  ],
  starCount: 15,
  lifetime: 1500,
  animationDuration: 1e3,
  spawnInterval: 100,
});
m.start();
const g = new p(c);
g.turnOn();
c.classList.add('loaded');
