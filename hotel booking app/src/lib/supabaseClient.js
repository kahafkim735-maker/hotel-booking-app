import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export function createSupabaseClientFromConfig(url, key) {
  const normalizedUrl = (url || '').trim();
  const normalizedKey = (key || '').trim();

  if (!normalizedUrl || !normalizedKey || normalizedUrl.includes('your-project') || normalizedKey.includes('your-anon-key')) {
    return null;
  }

  return createClient(normalizedUrl, normalizedKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function getSupabaseClient() {
  return createSupabaseClientFromConfig(supabaseUrl, supabaseAnonKey);
}

export function isSupabaseConfigured() {
  return Boolean(getSupabaseClient());
}
