// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL https://jvocbzliwbkndfpkbfdp.supabase.co,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b2Niemxpd2JrbmRmcGtiZmRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NzQwNzMsImV4cCI6MjA4MzA1MDA3M30.164fDmLp1qDWKPUSbdGoQPl945IG9i8jwZxInhQat5Y
);
