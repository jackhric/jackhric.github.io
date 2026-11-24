export interface Project {
  id: string;
  name: string;
  /** Short accent caption under the name. */
  kind: string;
  description: string;
  /** Silhouette in public/logos; only its shape is used, painted with `fill` through a CSS mask. */
  logo: string;
  /** Logo box aspect: wide wordmarks get more room than square marks. */
  logoShape: "wordmark" | "mark";
  /** Card accent: hover text, border, glow and link highlights. */
  accent: string;
  /** Logo paint; any CSS background, so a gradient works. Defaults to the accent. */
  fill?: string;
  repo: string;
  /** Project site under jackhric.github.io. Omit until the site is live; the card then links to the repo. */
  site?: string;
  stack: string[];
  license: string;
}

export const projects: Project[] = [
  {
    id: "r3cui",
    name: "r3cui",
    kind: "Remote 3 interface",
    description: "A simplified Unfolded Circle Remote 3 interface for a big home theater setup.",
    logo: "/logos/r3cui.svg",
    logoShape: "wordmark",
    accent: "#E8343A",
    repo: "https://github.com/jackhric/r3cui",
    site: "https://jackhric.github.io/r3cui/",
    stack: ["Rust", "Slint"],
    license: "GPL-3.0",
  },
  {
    id: "decky-toolkit",
    name: "Decky Toolkit",
    kind: "Decky Loader dev kit",
    description:
      "Build, deploy and live reload Decky Loader plugins on Steam Deck, SteamOS and Bazzite from VS Code or VSCodium. Includes an MCP server.",
    logo: "/logos/decky-toolkit.svg",
    logoShape: "mark",
    accent: "#5387F5",
    fill: "linear-gradient(135deg, #9C6AEC, #0AA5FF)",
    repo: "https://github.com/jackhric/decky-toolkit",
    site: "https://jackhric.github.io/decky-toolkit/",
    stack: ["TypeScript", "Python", "MCP"],
    license: "MIT",
  },
  {
    id: "boilerromm",
    name: "BoilerRomM",
    kind: "Decky Loader plugin",
    description:
      "Brings games from a RomM server into Steam's Big Picture UI: browse a storefront, download, and launch through RetroDECK.",
    logo: "/logos/boilerromm.svg",
    logoShape: "mark",
    accent: "#F97316",
    repo: "https://github.com/jackhric/boilerRomM",
    site: "https://jackhric.github.io/boilerRomM/",
    stack: ["TypeScript", "Python"],
    license: "AGPL-3.0",
  },
];
