export interface Language {
  code: string
  name: string
}

export type LanguageCode = 'en' | 'hi' 

const languages: Language[] = [
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'hi',
    name: 'Hindi'
  }
]

export default languages
