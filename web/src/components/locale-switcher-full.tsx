'use client'; // Indicates that this component is a client-side component in Next.js

// Import necessary hooks and components
import { ChangeEvent } from 'react'; // Importing the ChangeEvent type from React for typing event handlers
import { useLocale } from 'next-intl'; // Hook to get the current locale from Next.js internationalization (i18n)
import { languages, type Language } from '../config/site'; // Importing the available languages and the Language type from the site configuration
import { Select, SelectItem } from '@nextui-org/select'; // Importing Select and SelectItem components from NextUI for dropdown functionality
import { Avatar } from '@nextui-org/avatar'; // Importing Avatar component from NextUI for displaying country flags or initials
import { useRouter, usePathname } from '../navigation'; // Importing custom hooks for navigating and getting the current pathname

// Main functional component for locale/language switching
export default function LocaleSwitcher() {
  const locale = useLocale(); // Get the current locale using the useLocale hook

  const router = useRouter(); // Get the router object to navigate between locales
  const pathname = usePathname(); // Get the current pathname to retain the page when switching languages

  // Event handler for when the user selects a different language
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value; // Get the new locale selected by the user
    router.replace(pathname, { locale: nextLocale }); // Replace the current route with the same pathname but with the new locale
  }

  // Find the current language object based on the current locale
  const usedLocale = languages.find((lang) => lang.code === locale) || {
    name: 'English',
    code: 'en',
    countryCode: 'us'
  };

  // Function to return the Avatar component for each language
  // It displays either the country flag or the language initials
  const countryAvatar = (lang: Language) =>
    lang.countryCode ? (
      <Avatar
        alt={lang.name} // Alternative text for accessibility
        className='w-6 h-6' // Set width and height of the avatar
        src={`/flags/${lang.countryCode}.svg`} // Path to the country flag image
      />
    ) : (
      <Avatar
        alt={lang.name} // Alternative text for accessibility
        className='w-6 h-6' // Set width and height of the avatar
        name={lang.code.toUpperCase()} // Display the language code in uppercase as fallback
      />
    );

  // Render the Select component for language switching
  return (
    <div className='w-40'> {/* Container with fixed width */}
      <Select
        name='localeSelect' // Name attribute for the select input
        selectedKeys={[locale]} // The currently selected locale
        onChange={onSelectChange} // Handler for changing the locale
        aria-label='Select language' // Accessibility label for screen readers
        startContent={countryAvatar(usedLocale)} // Display the avatar of the currently selected language
      >
        {/* Map through the available languages and create a SelectItem for each */}
        {languages.map((lang) => (
          <SelectItem
            key={lang.code} // Unique key for each item in the list
            value={lang.code} // Value of the select item (language code)
            textValue={lang.name} // Text to be displayed in the dropdown
            startContent={countryAvatar(lang)} // Display the avatar of each language
          >
            {lang.name} {/* Display the name of the language */}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
