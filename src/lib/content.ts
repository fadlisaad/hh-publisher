import { getEmDashCollection } from 'emdash';
import type { CollectionFilter } from 'emdash';

type LocalizedCollectionOptions = Pick<CollectionFilter, 'status' | 'limit' | 'where'>;

export async function getLocalizedCollection<T extends string>(
  collection: T,
  locale: string,
  opts: LocalizedCollectionOptions = {},
) {
  const query = (requestedLocale: string) =>
    getEmDashCollection(collection, {
      ...opts,
      locale: requestedLocale,
      orderBy: { sort_order: 'asc' },
    });

  let result = await query(locale);
  if (!result.error && result.entries.length === 0 && locale !== 'en') {
    result = await query('en');
  }

  return result;
}
