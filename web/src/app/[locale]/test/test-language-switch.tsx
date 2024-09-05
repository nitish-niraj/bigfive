'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { ChangeEvent } from 'react';
import { Language } from '@bigfive-org/questions';
import { useRouter } from '@/navigation';

interface TestLanguageSwitchProps {
  availableLanguages: Language[];
  language: string;
}

export const TestLanguageSwitch = ({
  availableLanguages,
  language
}: TestLanguageSwitchProps) => {
  const router = useRouter();

  // Filter available languages to include only Hindi and English
  const filteredLanguages = availableLanguages.filter(
    (lang) => lang.id === 'en' || lang.id === 'hi'
  );

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = event.target.value;
    router.push(`?lang=${selectedLanguage}`);
    router.refresh();
  }

  return (
    <div className='w-30'>
      <Select
        defaultSelectedKeys={[language]}
        onChange={onSelectChange}
        aria-label='Select survey language'
        size='sm'
        name='localeSelectSmall'
        className='w-48'
        label='Survey language'
        items={filteredLanguages} // Use the filtered languages here
      >
        {(language) => (
          <SelectItem key={language.id} value={language.id}>
            {language.text}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};
