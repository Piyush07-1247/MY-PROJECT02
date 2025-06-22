import useSWR from 'swr';
import localRoles from './rolesLocal';

const REMOTE_URL = 'https://raw.githubusercontent.com/YourUserName/career-data/main/roles.json';

const fetcher = url => fetch(url).then(r => {
  if (!r.ok) {
    throw new Error('net err');
  }
  return r.json();
});

export default function useRoles() {
  const { data } = useSWR(REMOTE_URL, fetcher, {
    refreshInterval: 24 * 60 * 60 * 1000,
    fallbackData: localRoles
  });
  return data ?? localRoles;
}
