'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { removeLocaleFromPath } from '@/shared/lib/pathUtils';

const Banner = () => {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);
  const isKanaRoute = pathWithoutLocale.startsWith('/kana');
  const isKanjiRoute = pathWithoutLocale.startsWith('/kanji');
  const isVocabRoute = pathWithoutLocale.startsWith('/vocabulary');
  const isPreferencesRoute = pathWithoutLocale === '/preferences';

  const title = isKanaRoute
    ? 'Kana あ'
    : isKanjiRoute
      ? 'Kanji 字'
      : isVocabRoute
        ? 'Vocabulary 語'
        : isPreferencesRoute
          ? 'Preferences'
          : '';

  return (
    <h2 className={clsx('pt-3 text-3xl lg:pt-6', 'overflow-visible')}>
      {title}
    </h2>
  );
};

export default Banner;
