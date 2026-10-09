import { getSupabaseClient } from '../lib/supabaseClient';

export async function fetchHotels() {
  const client = getSupabaseClient();
  if (!client) {
    return { data: [], error: 'Supabase is not configured yet.' };
  }

  const { data, error } = await client.from('hotels').select('*').order('id', { ascending: true });
  return { data: data ?? [], error };
}

export async function fetchBookings() {
  const client = getSupabaseClient();
  if (!client) {
    return { data: [], error: 'Supabase is not configured yet.' };
  }

  const { data, error } = await client.from('bookings').select('*').order('created_at', { ascending: false });
  return { data: data ?? [], error };
}

export async function testSupabaseConnection() {
  const client = getSupabaseClient();
  if (!client) {
    return { ok: false, error: 'Missing Supabase URL or anon key.' };
  }

  const { data, error } = await client.from('hotels').select('id').limit(1);

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true, count: data?.length ?? 0 };
}

export async function saveBooking(booking) {
  const client = getSupabaseClient();
  if (!client) {
    return { ok: false, error: 'Supabase is not configured yet.' };
  }

  const { data, error } = await client.from('bookings').insert([booking]).select();

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true, data: data ?? [] };
}
