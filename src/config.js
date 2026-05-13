require('dotenv').config();

const config = {
  // LINE
  line: {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  },

  // Gemini AI
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
  },

  // Supabase
  supabase: {
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY,
    table: 'transactions',
  },

  // Server
  port: process.env.PORT || 3000,
};

// ─── Validate required config ───────────────────────────
function validateConfig() {
  const required = [
    LINE_CHANNEL_ACCESS_TOKEN=Wfv6l2sMuHYDdq1UysmVKMLPcyPWc0J6IaZ4EWjwYfCIQSFA4nG8xAxVpDMcfCfa6K/iGgM6+fBEKYQWLmIee/ATzwM6boB8Z6jOlpDFsZjGSwb/Twn/Xk0u3df6ak01hJReQeD+5ksc40Uz0rRhvwdB04t89/1O/w1cDnyilFU=
    LINE_CHANNEL_SECRET=37c51d79fbfcc24de83dfa2987ac00c4
GEMINI_API_KEY=AIzaSyBPu4JOoS8twKSKG_UerpV6GABOr8-4uo4
GEMINI_MODEL=gemini-2.0-flash
SUPABASE_URL=https://dggvdzjosddtkrscgend.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZ3Zkempvc2RkdGtyc2NnZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NTQ3MTQsImV4cCI6MjA5NDIzMDcxNH0.R2RbaZ2UQqcpYeOqypH52eRAnjDkEHPfOnAax2VGNu8
PORT=3000
  ];

  const missing = required
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length > 0) {
    console.error('❌ Missing environment variables:');
    missing.forEach((name) => console.error(`   - ${name}`));
    console.error('\n📝 ดูตัวอย่างได้ที่ .env.example');
    process.exit(1);
  }
}

module.exports = { config, validateConfig };
