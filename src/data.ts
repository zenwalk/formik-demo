export type TCounty = "Bratislava" | "Žilina";

export type TCity = { county: TCounty; name: string };

const cities: TCity[] = [
  { county: "Bratislava", name: "Bratislava I" },
  { county: "Bratislava", name: "Bratislava II" },
  { county: "Bratislava", name: "Bratislava III" },
  { county: "Bratislava", name: "Bratislava IV" },
  { county: "Bratislava", name: "Bratislava V" },
  { county: "Bratislava", name: "Malacky" },
  { county: "Bratislava", name: "Pezinok" },
  { county: "Bratislava", name: "Senec" },
  { county: "Žilina", name: "Bytča" },
  { county: "Žilina", name: "Čadca" },
  { county: "Žilina", name: "Dolný Kubín" },
  { county: "Žilina", name: "Kysucké Nové Mesto" },
  { county: "Žilina", name: "Liptovský Mikuláš" },
  { county: "Žilina", name: "Martin" },
  { county: "Žilina", name: "Námestovo" },
  { county: "Žilina", name: "Ružomberok" },
  { county: "Žilina", name: "Turčianske Teplice" },
  { county: "Žilina", name: "Tvrdošín" }
];

export function getCounties(): TCounty[] {
  return ["Bratislava", "Žilina"];
}

export function getCitiesForCounty(county: TCounty): TCity[] {
  return cities.filter(city => city.county === county);
}
