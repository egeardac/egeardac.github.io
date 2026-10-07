// Sitedeki tüm içerik burada. Düzenlemek için sadece bu dosyayı değiştir.
window.SITE = {
  name: "Ege Arda Çörekci",
  title: "Electrical & Electronics Engineering Student",
  contact: {
    email: "egearda@outlook.com",
    phone: "+90 552 348 74 98",
    location: "İzmir, Turkey",
    linkedin: "https://www.linkedin.com/in/ege-arda-%C3%A7%C3%B6rekci-7b7286126/",
    github: "https://github.com/egeardac"
  },
  summary:
    "Electrical and Electronics Engineering student at Yasar University specializing in telecommunications, signal processing, and wireless communication systems. I build simulations in MATLAB, Simulink, and Unity, write Python, C++, and C# for automation and data processing, and recently completed a cybersecurity internship. I am especially interested in cybersecurity and AI applications, and I take part in bug bounty programs on Bugcrowd and HackerOne, with a focus on AI pentesting.",

  education: [
    {
      school: "Yasar University",
      degree: "B.Sc. in Electrical and Electronics Engineering",
      date: "Oct 2023 – Present",
      location: "İzmir, Turkey",
      bullets: [
        "Coursework: Signals and Systems, Electromagnetic Theory, Digital Communications, Circuit Analysis"
      ]
    }
  ],

  experience: [
    {
      role: "Cybersecurity Intern",
      org: "Yaşar Bilgi İşlem ve Ticaret A.Ş.",
      date: "Jul 2026 – Aug 2026",
      location: "İzmir, Turkey",
      bullets: ["Completed a cybersecurity internship within the company's IT department, gaining hands-on exposure to corporate information security practices."]
    },
    {
      role: "Digital Media",
      org: "Xoxo The Mag - Co Production",
      date: "Sep 2021 – Jul 2023",
      location: "İstanbul, Turkey",
      bullets: [
        "Managed end-to-end project coordination from strategic planning to final delivery.",
        "Ran and optimized Google Ads and Meta Ads campaigns, analyzing metrics to maximize ROI.",
        "Created visual content and marketing materials with Adobe Photoshop.",
        "Built structured digital archiving systems for visual asset management."
      ]
    }
  ],

  skills: [
    { group: "Simulation & Analysis", items: ["MATLAB", "Simulink", "LTspice", "Proteus", "KiCad"] },
    { group: "Programming", items: ["Python", "C++", "C#", "Java"] },
    { group: "AI & Automation", items: ["AI-assisted workflows", "Prompt engineering", "Data analysis"] },
    { group: "CAD & 3D", items: ["AutoCAD", "Blender", "Unity"] },
    { group: "Tools", items: ["Microsoft Project", "MS Office", "Photoshop", "Google Ads", "Meta Ads"] }
  ],

  // PROJELER — örnekleri kendi projelerinle değiştir.
  // images: assets/img/projects/ altındaki resimler (ilki kapak olur)
  // youtube: video ID'si, ör. https://www.youtube.com/watch?v=dQw4w9WgXcQ → "dQw4w9WgXcQ"
  projects: [
    {
      title: "Li-Fi PLC Transmitter & Receiver",
      date: "2026",
      description: "Visible-light communication (Li-Fi) link between PLCs: the transmitter modulates an LED to send PLC data, and a photodiode receiver demodulates the light signal and feeds it back to a PLC input. Covers modulation, signal conditioning, and noise handling in an industrial-control context.",
      tags: ["Li-Fi", "PLC", "Optical Communication", "Signal Processing"],
      images: ["assets/img/projects/lifi.svg"],
      youtube: "",
      link: ""
    },
    {
      title: "Unity Simulation",
      date: "2025",
      description: "Interactive Unity simulation with C# scripting to visualize engineering concepts.",
      tags: ["Unity", "C#", "Blender"],
      images: ["assets/img/projects/unity.webp"],
      youtube: "",
      link: ""
    }
  ],

  // Hack The Box Academy transcript (07-10-2026)
  htb: {
    stats: ["Targets compromised: 106", "Ranking: Top 1%"],
    modules: [
      { name: "Network Enumeration with Nmap", tag: "Offensive", progress: 100 },
      { name: "Getting Started", tag: "Offensive", progress: 100 },
      { name: "Penetration Testing Process", tag: "General", progress: 100 },
      { name: "Introduction to Networking", tag: "General", progress: 100 },
      { name: "Learning Process", tag: "General", progress: 100 },
      { name: "Intro to Academy", tag: "General", progress: 100 },
      { name: "Network Foundations", tag: "General", progress: 50 },
      { name: "Linux Fundamentals", tag: "General", progress: 33 },
      { name: "Introduction to Information Security", tag: "General", progress: 29 },
      { name: "Using the Metasploit Framework", tag: "Offensive", progress: 27 },
      { name: "Introduction to Python 3", tag: "General", progress: 21 },
      { name: "Domain Name System Fundamentals", tag: "General", progress: 17 },
      { name: "Footprinting", tag: "Offensive", progress: 10 },
      { name: "Introduction to Penetration Testing", tag: "Offensive", progress: 10 },
      { name: "Pentest in a Nutshell", tag: "Offensive", progress: 4 }
    ]
  },

  certifications: [
    "HTB Certified Penetration Testing Specialist (HTB CPTS) – Hack The Box, 2026",
    "Junior Programmer – Unity, 2026",
    "Core MATLAB Skills (Learning Path) – MathWorks, 2026",
    "Core Signal Processing Techniques in MATLAB – MathWorks, 2026",
    "Simulink Fundamentals – MathWorks, 2026",
    "Power Systems Simulation Onramp – MathWorks, 2026"
  ],
  languages: ["Turkish – Native", "English – Upper-Intermediate (B2)"]
};
