import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "TU_URL_AQUI";
const SUPABASE_KEY = "TU_ANON_KEY_AQUI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);