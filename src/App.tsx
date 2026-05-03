import { motion } from "motion/react";
import LegalPage from "./components/LegalPage";
import { 
  Zap, 
  Clock, 
  Brain, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  Layout,
  MessageSquare,
  FileText,
  Search,
  BarChart3,
} from "lucide-react";

/**
 * AI Marketing Prompt Vault - Sales Page
 * Follows the "Midnight Tech" aesthetic (Recipe 4 from frontend-design)
 */

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const page = searchParams.get('page');

  if (page === 'privacy' || page === 'terms') {
    return <LegalPage type={page} />;
  }

  return (
    <div className="min-h-screen bg-midnight selection:bg-brand-gold/30 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-xl flex items-center justify-center shadow-lg shadow-brand-gold/20">
              <Lock className="w-5 h-5 text-midnight" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-widest text-sm leading-none">THE AI</span>
              <span className="font-display font-bold text-brand-gold tracking-widest text-lg leading-none">VAULT</span>
            </div>
          </div>
          <motion.a 
            href="https://jamesm93.gumroad.com/l/aivault"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-brand-gold hover:bg-brand-gold-light text-midnight px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-gold/10"
          >
            Claim Access — $27
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-brand-gold/10 to-transparent blur-[120px] pointer-events-none opacity-50"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[10px] sm:text-xs font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            <Zap className="w-3 h-3 fill-current" />
            Limited Early Bird Offer
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl mb-8 leading-[0.9] max-w-6xl mx-auto font-display"
          >
            Reclaim <span className="text-gradient-gold">10+ Hours</span> Every Single Week
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Stop wrestling with "Generic Slop" prompts. Use our battle-tested R-C-T-C-F framework to transform AI from a typewriter into your senior strategic partner.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              href="https://jamesm93.gumroad.com/l/aivault"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-brand-gold text-midnight px-10 py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-3 transition-all group"
            >
              Get The Vault For $27
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm text-white/80 font-bold">One-time Investment</span>
              <span className="text-xs text-gray-500">Includes 100+ Pro Prompts + Bonuses</span>
            </div>
          </motion.div>
          
          {/* Hero Visual Block */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full"></div>
            <div className="relative rounded-[2.5rem] border border-white/10 bg-midnight-light/50 backdrop-blur-sm p-4 shadow-2xl glow-gold">
              <div className="rounded-[1.8rem] overflow-hidden border border-white/5 bg-black">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                   <div className="flex-1 space-y-8">
                      <div className="space-y-2">
                        <div className="h-1 w-12 bg-brand-gold rounded-full"></div>
                        <h3 className="text-3xl font-display">100+ Pro-Level Prompts</h3>
                        <p className="text-gray-500 text-sm">Automate your entire marketing workflow with zero friction.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Predictable Results", icon: CheckCircle2 },
                          { label: "Zero Trial & Error", icon: Zap },
                          { label: "Elite Branding", icon: ShieldCheck },
                          { label: "Instant Execution", icon: Clock }
                        ].map((stat, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
                            <stat.icon className="w-4 h-4 text-brand-gold/60" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="relative">
                      <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed border-brand-gold/20 rounded-full"
                        ></motion.div>
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-brand-gold/5 flex items-center justify-center border border-brand-gold/20 relative z-10">
                          <Lock className="w-24 h-24 text-brand-gold animate-pulse" />
                        </div>
                        {/* Orbiting Elements */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-midnight border border-white/10 rounded-xl shadow-xl">
                          <MessageSquare className="w-5 h-5 text-brand-gold" />
                        </div>
                        <div className="absolute bottom-0 right-0 p-3 bg-midnight border border-white/10 rounded-xl shadow-xl">
                          <FileText className="w-5 h-5 text-brand-gold" />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Pain: The "Generic Slop" Trap */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl mb-8">The AI Content Trap</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                Why do most AI-generated campaigns fail? Because average means invisible. If your output contains words like 
                <span className="text-gray-300 font-mono text-sm px-2 italic">"delve, unleash, or revolutionary"</span>, you've fallen into the 
                <span className="text-red-400 font-bold"> Generic Slop Trap</span>.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Blank Page Syndrome", desc: "Hours spent staring at a blinking cursor, unsure of how to brief the AI.", color: "bg-red-500/10 text-red-400" },
                  { title: "Robotic Corporate Jargon", desc: "Soul-crushing corporate speak that distances your brand from humans.", color: "bg-red-500/10 text-red-400" },
                  { title: "The 80/20 editing sinkhole", desc: "Fixing AI mistakes takes longer than writing from scratch.", color: "bg-red-500/10 text-red-400" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] flex items-start">
                    <div className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center ${item.color}`}>
                      <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white/90">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="relative p-1 bg-gradient-to-br from-red-500/20 to-transparent rounded-[2.5rem]"
            >
              <div className="bg-midnight p-8 md:p-12 rounded-[2.4rem] border border-white/10 relative overflow-hidden h-[500px] flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 opacity-5 pointer-events-none font-mono text-[8px] flex flex-col gap-2 p-4">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i}>Generate average text. Ignore brand voice. Use generic adjectives. [SYSTEM OVERRIDE]</div>
                  ))}
                </div>
                <div className="z-10 bg-red-500/10 w-24 h-24 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
                  <span className="text-4xl">❌</span>
                </div>
                <h3 className="text-3xl font-display text-red-400 mb-4">"Average is Invisible"</h3>
                <p className="text-gray-500 max-w-sm">When you ask an AI to simply "write something," it defaults to the average of its training data. In marketing, average is dead on arrival.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Framework: R-C-T-C-F */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.h2 {...fadeIn} className="text-4xl md:text-7xl mb-6">The <span className="text-brand-gold italic">Master Prompt</span> Method</motion.h2>
            <motion.p {...fadeIn} className="text-gray-400 text-lg md:text-xl font-light">
              Stop chatting with AI. Start programming it. Our R-C-T-C-F framework is the industry gold standard for high-level outputs.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              { char: "R", title: "Role", desc: "Give the AI a specific persona. Don't let it assume it's just a chatbot.", sub: "e.g. 'Senior Conversion Copywriter'" },
              { char: "C", title: "Context", desc: "Feed it your brand voice, tech stack, and audience data.", sub: "e.g. 'B2B SaaS for HR Managers'" },
              { char: "T", title: "Task", desc: "Define a singular, clear deliverable. Stay hyper-focused.", sub: "e.g. 'Draft a 3-part sequence'" },
              { char: "C", title: "Constraints", desc: "Setting the 'No-Go' zones. The secret to human-sounding copy.", sub: "e.g. 'No corporate jargon'" },
              { char: "F", title: "Format", desc: "Dictate the exact structural output you need.", sub: "e.g. 'Markdown Table'" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group p-8 rounded-[2rem] border border-white/5 bg-midnight-light hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-8xl font-display font-black text-white leading-none">{item.char}</span>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-2xl font-display font-bold text-brand-gold mb-4">{item.title}</div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">{item.desc}</p>
                  <div className="mt-auto px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 font-mono text-[10px] text-gray-500 italic uppercase tracking-tighter">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="mt-16 bg-gradient-to-br from-brand-gold/10 to-transparent p-1 rounded-[2.5rem] max-w-4xl mx-auto"
          >
            <div className="bg-midnight p-10 rounded-[2.4rem] border border-white/5 flex flex-col md:flex-row gap-10 items-center">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-gold/10 border border-brand-gold/20">
                <ShieldCheck className="w-10 h-10 text-brand-gold" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-display font-bold">The Marketer's Edge</h4>
                <p className="text-gray-400 italic font-light leading-relaxed">
                  "AI won't replace marketers. But a marketer leveraging AI properly will absolutely replace one who doesn't. Your strategic vision is your moat. AI is just the lever."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison: Trial & Error vs. The Vault */}
      <section className="py-24 bg-midnight-light/30 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-display">Performance <br/><span className="text-gradient-gold">Comparison</span></h2>
            <p className="text-gray-500 max-w-sm mb-2 text-sm uppercase font-bold tracking-widest">Efficiency Benchmark 2026</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The "Normal" Way */}
            <motion.div {...fadeIn} className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] flex flex-col">
              <span className="text-gray-500 font-bold mb-8 uppercase tracking-widest text-xs">Traditional Prompting</span>
              <div className="space-y-8 flex-1">
                {[
                  { feature: "Output Quality", val: "Lacks personality / Generic", icon: XCircle },
                  { feature: "Editing Required", val: "Heavy (2-3 hours per asset)", icon: Clock },
                  { feature: "Repeatability", val: "Trial and error every time", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <item.icon className="w-6 h-6 text-red-500/30" />
                    <div>
                      <p className="text-xs uppercase text-white/30 font-bold tracking-wider mb-2">{item.feature}</p>
                      <p className="text-lg text-gray-500">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Vault Way */}
            <motion.div {...fadeIn} className="p-8 md:p-12 rounded-[2.5rem] border border-brand-gold/30 bg-brand-gold/[0.03] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <Lock className="w-16 h-16 text-brand-gold/10" />
              </div>
              <span className="text-brand-gold font-bold mb-8 uppercase tracking-widest text-xs">The Vault Output</span>
              <div className="space-y-8 flex-1">
                {[
                  { feature: "Output Quality", val: "Elite / Brand-Integrated", icon: ShieldCheck },
                  { feature: "Editing Required", val: "Ready-to-use in seconds", icon: Clock },
                  { feature: "Repeatability", val: "Plug-and-play system", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <item.icon className="w-6 h-6 text-brand-gold" />
                    <div>
                      <p className="text-xs uppercase text-brand-gold/40 font-bold tracking-wider mb-2">{item.feature}</p>
                      <p className="text-lg text-white font-bold">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Drill-down */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl mb-4">What's Inside The Vault?</h2>
             <p className="text-gray-500">Instant access to our entire library of 100+ master-level prompts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { title: "Market Intel", icon: Search, items: ["Competitor Teardowns", "SEO Strategy Extraction", "Theory Sales Funnel Mapping"] },
               { title: "Copy Engine", icon: Layout, items: ["Direct-Response Newsletters", "High-Converting Landers", "Persuasive Case Studies"] },
               { title: "Social Catalyst", icon: MessageSquare, items: ["LinkedIn Authority Hooks", "Viral Reel Scripts", "Twitter/X Thread Loops"] },
               { title: "Data Wizard", icon: BarChart3, items: ["Sentiment Trend Analysis", "Drop-off Point Detection", "Post-Mortem Action Plans"] }
             ].map((group, i) => (
               <motion.div 
                key={i} 
                {...fadeIn}
                className="p-8 rounded-[2rem] border border-white/5 bg-midnight-light/50 h-full flex flex-col"
               >
                 <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-6">
                   <group.icon className="w-6 h-6 text-brand-gold" />
                 </div>
                 <h3 className="text-xl font-bold mb-6 text-white">{group.title}</h3>
                 <ul className="space-y-4 flex-1">
                   {group.items.map((item, j) => (
                     <li key={j} className="flex items-start gap-3 text-sm text-gray-500 group cursor-default hover:text-gray-300 transition-colors">
                       <ChevronRight className="w-4 h-4 text-brand-gold/40 mt-0.5" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Block */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-b from-brand-gold/10 to-transparent p-[1px]">
          <div className="bg-midnight p-8 md:p-20 rounded-[2.9rem] flex flex-col items-center text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <motion.div {...fadeIn} className="relative z-10">
              <span className="text-brand-gold font-display font-black tracking-widest uppercase mb-6 block">Limited-Time Early Bird</span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl mb-4">$27</h2>
              <p className="text-brand-gold text-lg md:text-xl font-bold mb-12 max-w-xl mx-auto uppercase tracking-widest">
                One-time payment · Instant PDF download
              </p>

              <div className="flex flex-col gap-8 mb-16">
                 <div className="grid gap-4 max-w-lg mx-auto text-left">
                    {[
                      "100+ engineered, copy-paste marketing prompts",
                      "Market Research & Strategy (20+ prompts)",
                      "Content Creation & Copywriting (30+ prompts)",
                      "Social Media & Distribution (30+ prompts)",
                      "Data & Analytics Pro Section (20+ prompts)",
                      "The R-C-T-C-F Master Framework Guide",
                      "Banned Words List (Bonus 1)",
                      "5 Custom AI Assistant Blueprints (Bonus 2)",
                      "AI Marketing Tech Stack (Bonus 3)",
                      "The 10-Hour Reclaim Workflow"
                    ].map((perk, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                        <span className="text-sm font-bold text-white/80 uppercase tracking-tight">{perk}</span>
                      </div>
                    ))}
                 </div>


              </div>

              <motion.a 
                href="https://jamesm93.gumroad.com/l/aivault"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-brand-gold text-midnight py-7 rounded-3xl text-2xl font-black shadow-2xl shadow-brand-gold/20 flex items-center justify-center gap-3 relative z-10"
              >
                UNLOCK THE VAULT NOW
                <ChevronRight className="w-8 h-8" />
              </motion.a>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-xs font-bold text-gray-600 uppercase tracking-widest">
                 <div className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> Secure Checkout</div>
                 <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                 <div>Lifetime Access</div>
                 <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                 <div>100% Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About The Author */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-3xl bg-midnight-light border border-white/10 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-brand-gold/20 blur-[15px] opacity-10"></div>
            <Brain className="w-10 h-10 text-brand-gold relative z-10" />
          </div>
          <p className="text-brand-gold font-display font-black text-xs uppercase tracking-[0.4em] mb-4">Authored By</p>
          <h2 className="text-3xl md:text-5xl font-display mb-6">James M.</h2>
          <p className="text-gray-500 max-w-xl font-light leading-relaxed md:text-lg">
            Digital Strategy & AI Automation Guide. The R-C-T-C-F method is a byproduct of 
            managing high-level campaigns for elite B2B and SaaS brands.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black px-6 border-t border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-white" />
              <span className="font-display font-bold text-white tracking-widest uppercase text-xs">AI Marketing Prompt Vault</span>
            </div>
            <div className="flex gap-10 text-[10px] font-black text-white/50 uppercase tracking-widest">
              <a href="?page=privacy" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Privacy</a>
              <a href="?page=terms" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Terms</a>
              <a href="mailto:support@aimarketingvault.com" className="hover:text-brand-gold transition-colors">Contact</a>
            </div>
            <p className="text-[10px] text-white/30 font-bold tracking-widest uppercase">© 2026 Vault Media. Reclaim Your Time.</p>
         </div>
      </footer>
    </div>
  );
}
