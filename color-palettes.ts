import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o terracota (clay) do bloco base de theme.css — presets alternativos
// que o admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const NIMBUS_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.55 0.11 45)",
      primaryForeground: "oklch(0.98 0.01 45)",
      accent: "oklch(0.85 0.05 130)",
      accentForeground: "oklch(0.28 0.03 130)",
      ring: "oklch(0.55 0.09 45)",
    },
    dark: {
      primary: "oklch(0.68 0.12 48)",
      primaryForeground: "oklch(0.18 0.02 45)",
      accent: "oklch(0.38 0.05 130)",
      accentForeground: "oklch(0.92 0.02 130)",
      ring: "oklch(0.66 0.11 48)",
    },
  },
  THEME_HUE_PRESETS,
);
