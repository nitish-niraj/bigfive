import { Avatar } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { languages, Language } from '@/config/site';

export const Translated = () => {
  const CountryAvatar = ({ lang }: { lang: Language }) =>
    lang.countryCode ? (
      <Avatar
        alt={lang.name}
        className='w-12 h-12'
        aria-label={lang.name}
        src={`/flags/${lang.countryCode}.svg`}
      />
    ) : (
      <Avatar
        alt={lang.name}
        aria-label={lang.name}
        className='w-12 h-12'
        name={lang.code.toUpperCase()}
      />
    );

  return (
    <section className='border-t border-b border-divider px-8 mt-10 text-center'>
      <div className='my-8'>
        <h3 className={title()}>Translated in English and Hindi languages</h3>
        <div className='w-full inline-flex flex-nowrap justify-center gap-x-8'>
          <ul className='flex gap-x-8 mt-8 items-center justify-center'>
            {languages.map((lang) => (
              <li key={lang.code}>
                <CountryAvatar lang={lang} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
