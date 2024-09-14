import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xywcfjxbqbjwxdnokvap.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5d2NmanhicWJqd3hkbm9rdmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNzc1MzAsImV4cCI6MjAzNzg1MzUzMH0.kxhcmwSZTDnC0M4Vxe3t50hIwjxNSqdg2GNdzgPIpeE'

export const supabase = createClient(supabaseUrl, supabaseKey)
