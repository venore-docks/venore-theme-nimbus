import type { ThemeManifest } from "@venore/theme-sdk";

export const nimbusManifest: ThemeManifest = {
  key: "nimbus",
  name: "Nimbus",
  version: "0.1.0",
  themeContractVersion: "7.0.0",
  // logoUrl real vem de contexts/settings (upload em /admin/settings/brand) — isto só declara os
  // valores padrão de exibição. Cor aproxima o terracota (clay) de --primary.
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 88, position: "left", color: "oklch(0.55 0.11 45)" },
  colorModes: ["light", "dark"],
};
