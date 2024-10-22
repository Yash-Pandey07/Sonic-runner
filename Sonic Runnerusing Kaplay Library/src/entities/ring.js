import k from "../kaplayCtx";

export function makeRing(pos) {
  return k.add([
    k.sprite("ring", { anims: "spin" }),
    k.area(),
    k.scale(4),
    k.anchor("center"),
    k.pos(pos),
    k.offscreen(),
    "ring",
  ]);
}