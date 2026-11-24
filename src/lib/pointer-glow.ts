// Lights the border of the [data-glow] surface under the pointer, as on jackhric.com.
const GLOW = "[data-glow]";

export function mountPointerGlow(root: HTMLElement) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  let lit: HTMLElement | null = null;
  let x = 0;
  let y = 0;
  let frame = 0;

  function paint() {
    frame = 0;
    if (!lit) return;
    const box = lit.getBoundingClientRect();
    lit.style.setProperty("--gx", `${(x - box.left).toFixed(1)}px`);
    lit.style.setProperty("--gy", `${(y - box.top).toFixed(1)}px`);
    lit.dataset.glowOn = "";
  }

  function dim() {
    if (!lit) return;
    delete lit.dataset.glowOn;
    lit = null;
  }

  function follow(e: PointerEvent) {
    const el = (e.target as Element).closest<HTMLElement>(GLOW);
    if (el !== lit) {
      dim();
      lit = el;
    }
    if (!el) return;
    x = e.clientX;
    y = e.clientY;
    frame ||= requestAnimationFrame(paint);
  }

  root.addEventListener("pointerdown", follow, { passive: true });
  root.addEventListener("pointermove", follow, { passive: true });
  root.addEventListener("pointerup", (e) => e.pointerType !== "mouse" && dim(), { passive: true });
  root.addEventListener("pointercancel", dim, { passive: true });
  root.addEventListener("pointerleave", dim, { passive: true });
}
