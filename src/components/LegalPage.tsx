import { motion } from "motion/react";
import { ArrowLeft, Shield, Scale, FileText } from "lucide-react";

interface LegalPageProps {
  type: string;
}

export default function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === "privacy";

  return (
    <div className="min-h-screen bg-midnight text-gray-300 font-sans antialiased selection:bg-brand-gold/30 selection:text-white pb-20">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => window.close()}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Close Tab
          </button>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                {isPrivacy ? <Shield className="w-4 h-4 text-brand-gold" /> : <Scale className="w-4 h-4 text-brand-gold" />}
             </div>
             <span className="font-display font-bold text-white tracking-widest text-xs uppercase">
                {isPrivacy ? "Privacy Policy" : "Terms of Use"}
             </span>
          </div>
        </div>
      </header>

      <main className="pt-40 px-6 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display text-white">LEGAL NOTICES</h1>
            <p className="text-brand-gold font-display font-medium tracking-wide uppercase text-sm">
              Terms of Use & Privacy Policy for Digital Guides
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-red-500/10 bg-red-500/[0.02] space-y-4">
             <h3 className="text-red-400 font-bold flex items-center gap-2 uppercase tracking-tighter">
                <FileText className="w-4 h-4" />
                IMPORTANT DISCLAIMER
             </h3>
             <p className="text-sm leading-relaxed text-gray-400">
                The information contained in this document and the accompanying guide is for educational and informational purposes only. 
                The publisher is not a law firm, and this document does not constitute legal, financial, or professional advice. 
                You should consult with an attorney to ensure your specific legal requirements and local jurisdictional laws are met.
             </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Section 1: Terms of Use */}
            <section className="space-y-6">
              <h2 className="text-2xl font-display text-white font-bold border-l-2 border-brand-gold pl-4">Section 1: Terms of Use</h2>
              <p className="leading-relaxed">
                By accessing, downloading, or using this guide (the "Content"), you agree to be bound by the following Terms of Use. 
                If you do not agree with these terms, you must immediately cease use of the Content.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">1.1 Intellectual Property & License</h4>
                  <p className="text-sm leading-relaxed">All materials contained within this guide are protected by intellectual property laws. You are granted a revocable, non-exclusive, non-transferable, limited license to download, view, and use the guide solely for your personal or internal business purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any part of this guide without prior written consent from the publisher.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">1.2 Earnings & Results Disclaimer</h4>
                  <p className="text-sm leading-relaxed">Any statements, strategies, or methodologies outlined in this guide represent opinions and potential outcomes based on past experience. There is no guarantee that you will earn any money or achieve any specific results using the techniques or ideas provided. Your level of success depends on various factors, including your skill, knowledge, dedication, and market conditions.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">1.3 Disclaimer of Warranties ("As Is")</h4>
                  <p className="text-sm leading-relaxed">The guide is provided on an "AS IS" and "AS AVAILABLE" basis. To the fullest extent permitted by law, the publisher disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">1.4 Limitation of Liability</h4>
                  <p className="text-sm leading-relaxed">Under no circumstances, including negligence, shall the publisher, its affiliates, agents, or employees be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use, misuse, or inability to use the information provided in this guide.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Privacy Policy */}
            <section className="space-y-6 border-t border-white/5 pt-10">
              <h2 className="text-2xl font-display text-white font-bold border-l-2 border-brand-gold pl-4">Section 2: Privacy Policy</h2>
              <p className="leading-relaxed">
                We respect your privacy and are committed to protecting any personal information you may share with us when accessing this guide.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-2">2.1 Information We Collect</h4>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, and other contact details provided voluntarily by you.</li>
                    <li><strong>Usage Data:</strong> IP addresses, browser types, and download timestamps, primarily for analytics and system administration.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">2.2 How We Use Your Information</h4>
                  <ul className="list-decimal pl-5 text-sm space-y-2">
                    <li>To deliver requested content and provide customer support.</li>
                    <li>To send periodic emails regarding updates or related products (if explicitly opted in).</li>
                    <li>To improve our digital products and user experience.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">2.3 Data Sharing & Third-Party Disclosure</h4>
                  <p className="text-sm leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted third-party service providers (such as email marketing platforms or payment processors) who assist us in operating our business.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">2.4 Data Security</h4>
                  <p className="text-sm leading-relaxed">We implement a variety of standard security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet is 100% secure.</p>
                </div>
              </div>
            </section>
          </div>

          <footer className="pt-20 border-t border-white/5 text-center space-y-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">© 2026 Vault Media. All Rights Reserved.</p>
            <p className="text-[10px] text-gray-600 uppercase tracking-tighter">Support: support@aimarketingvault.com</p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}
