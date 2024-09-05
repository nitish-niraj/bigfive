export interface Language {
  code: LanguageCode
  name: string;
}

export type LanguageCode =
  | "en"
  | "hi";

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
];

export default languages;
