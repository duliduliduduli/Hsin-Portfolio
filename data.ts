import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'helix-terminal',
    title: 'Helix Terminal',
    category: 'DeFi Trading Platform',
    year: '2023',
    description: 'A high-frequency institutional trading interface for decentralized derivatives.',
    client: 'Helix Protocol',
    challenge: 'Professional traders in DeFi lacked the granular data visualization and execution speed tools found in CeFi (Centralized Finance) platforms like Bloomberg Terminal. The challenge was to aggregate on-chain data with sub-second latency while maintaining a clean, non-overwhelming UI.',
    solution: 'Designed a modular, grid-based dashboard allowing users to customize their workspace. Implemented WebGL-powered order book visualizations to handle high-throughput data without DOM lag. Created a "Focus Mode" that strips away noise during high-volatility events.',
    impact: 'Increased daily active professional traders by 140% within 3 months. Reduced trade execution time by 45% through UX optimizations.',
    role: ['Lead Product Designer', 'UX Researcher'],
    techStack: ['React', 'D3.js', 'WebSockets', 'Tailwind'],
    // PLEASE REPLACE THE URL BELOW WITH THE URL OF THE IMAGE YOU UPLOADED
    coverImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200',
    images: [
      { url: 'https://picsum.photos/id/20/1600/900', caption: 'Customizable workspace grid', fullWidth: true },
      { url: 'https://picsum.photos/id/48/1200/800', caption: 'Depth chart and order flow visualization' },
      { url: 'https://picsum.photos/id/60/1200/800', caption: 'Mobile responsive trade execution' },
    ]
  },
  {
    id: 'fluid-stake',
    title: 'Fluid Stake',
    category: 'Liquid Staking Dashboard',
    year: '2024',
    description: 'Simplifying complex staking yields and governance participation for retail investors.',
    client: 'Fluid DAO',
    challenge: 'Liquid staking concepts are abstract and intimidating for new crypto users. Users struggled to understand where their yield came from and the risks involved with "slashing".',
    solution: 'Developed a "Yield Pipeline" visual metaphor that traces the user\'s token journey from wallet to validator to reward generation. Simplified the governance voting process into a Tinder-like "Swipe to Delegate" interface for rapid sentiment gathering.',
    impact: 'Onboarded $50M TVL (Total Value Locked) in the first week. User comprehension scores improved by 80% in usability testing.',
    role: ['UI Designer', 'Interaction Design'],
    techStack: ['Figma', 'Protopie', 'React'],
    coverImage: 'https://picsum.photos/id/96/1200/800',
    images: [
      { url: 'https://picsum.photos/id/119/1600/900', caption: 'Staking overview dashboard', fullWidth: true },
      { url: 'https://picsum.photos/id/160/1200/800', caption: 'Yield breakdown calculator' },
      { url: 'https://picsum.photos/id/180/1200/800', caption: 'Validator selection process' },
    ]
  },
  {
    id: 'nexus-pay',
    title: 'Nexus Pay',
    category: 'Cross-Border Payments',
    year: '2022',
    description: 'Seamless fiat-to-crypto bridging for enterprise payroll and invoicing.',
    client: 'Nexus Global',
    challenge: 'Enterprises wanted to pay global contractors in crypto but feared the volatility and accounting nightmares. The existing tools were too "crypto-native" and lacked traditional ERP integration.',
    solution: 'Built a bridge interface that looks and feels like a traditional bank transfer. Added an automated "volatility shield" feature that auto-converts to stablecoins immediately upon receipt. Designed the accounting export tools to match Quickbooks standards.',
    impact: 'Adopted by 15 mid-sized tech companies for global payroll. Processed $12M in volume in year one.',
    role: ['Product Strategy', 'UX/UI Design'],
    techStack: ['Next.js', 'Solidity Integration', 'Stripe API'],
    coverImage: 'https://picsum.photos/id/1/1200/800',
    images: [
      { url: 'https://picsum.photos/id/6/1600/900', caption: 'Payroll management dashboard', fullWidth: true },
      { url: 'https://picsum.photos/id/26/1200/800', caption: 'Transaction history with tax export' },
    ]
  },
  {
    id: 'vault-guard',
    title: 'Vault Guard',
    category: 'Multi-Sig Wallet',
    year: '2023',
    description: 'Institutional-grade security visualization for multi-signature treasury management.',
    client: 'Internal Project',
    challenge: 'Multi-sig wallets often have opaque signing processes. Users never know "who is left to sign" or "what exactly interacts with the contract".',
    solution: 'Created a visual "Key Ceremony" interface where signers are represented as nodes around a central vault. Pending transactions show clear visual cues on required signatures versus optional ones.',
    impact: 'Conceptual design award winner at ETHGlobal. Open-sourced the UI kit for the community.',
    role: ['Lead Designer'],
    techStack: ['Figma', 'React'],
    coverImage: 'https://picsum.photos/id/45/1200/800',
    images: [
      { url: 'https://picsum.photos/id/68/1600/900', caption: 'Signing ceremony visualization', fullWidth: true },
      { url: 'https://picsum.photos/id/88/1200/800', caption: 'Transaction details view' },
    ]
  }
];