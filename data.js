// Sitedeki tüm içerik burada. Düzenlemek için sadece bu dosyayı değiştir.
window.SITE = {
  name: "Ege Arda Çörekci",
  title: "Electrical & Electronics Engineering Student",
  photo: "assets/img/profile.jpg", // Fotoğrafını bu isimle koy; yoksa baş harfler gösterilir
  cv: "assets/cv/Ege_Arda_Corekci_CV.pdf",
  contact: {
    email: "egearda@outlook.com",
    phone: "+90 552 348 74 98",
    location: "İzmir, Turkey",
    linkedin: "https://www.linkedin.com/in/ege-arda-%C3%A7%C3%B6rekci-7b7286126/",
    github: "https://github.com/egeardac"
  },
  summary:
    "Electrical and Electronics Engineering student at Yasar University specializing in telecommunications, signal processing, and wireless communication systems. I build simulations in MATLAB, Simulink, and Unity, write Python, C++, and C# for automation and data processing, and recently completed a cybersecurity internship.",

  education: [
    {
      school: "Yasar University",
      degree: "B.Sc. in Electrical and Electronics Engineering",
      date: "Oct 2023 – Present",
      location: "İzmir, Turkey",
      bullets: [
        "Junior year, English-medium instruction",
        "50% Merit-Based Scholarship Recipient",
        "GPA: 2.82 / 4.00",
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
      role: "Digital Media Expert",
      org: "Xoxo The Mag - Co Production",
      date: "Sep 2021 – Jul 2023",
      location: "İstanbul, Turkey",
      bullets: [
        "Managed end-to-end project coordination from strategic planning to final delivery.",
        "Ran and optimized Google Ads and Meta Ads campaigns, analyzing metrics to maximize ROI.",
        "Created visual content and marketing materials with Adobe Photoshop.",
        "Built structured digital archiving systems for visual asset management."
      ]
    },
    {
      role: "Volunteer, Kitchen Operations",
      org: "Turk Fatih Tutak (Michelin-Starred Fine Dining)",
      date: "Sep 2021 – Jan 2022",
      location: "İstanbul, Turkey",
      bullets: ["Supported culinary operations under world-class chefs in a high-pressure fine dining environment."]
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
      title: "QAM Modulation & BER Analysis (Sample)",
      date: "2026",
      description: "Simulated 16-QAM and 64-QAM over an AWGN channel and compared bit error rates with theoretical curves.",
      tags: ["MATLAB", "Simulink", "Communications"],
      images: ["assets/img/projects/sample-1.svg"],
      youtube: "",
      link: ""
    },
    {
      title: "Sensor Board PCB Design (Sample)",
      date: "2025",
      description: "Schematic and two-layer PCB for a microcontroller sensor board; analog front end verified in LTspice.",
      tags: ["KiCad", "LTspice"],
      images: ["assets/img/projects/sample-2.svg"],
      youtube: "",
      link: ""
    },
    {
      title: "Unity Simulation (Sample)",
      date: "2025",
      description: "Interactive Unity simulation with C# scripting to visualize engineering concepts.",
      tags: ["Unity", "C#", "Blender"],
      images: ["assets/img/projects/sample-3.svg"],
      youtube: "",
      link: ""
    }
  ],

  certifications: [
    "Core MATLAB Skills (Learning Path) – MathWorks, 2026",
    "Core Signal Processing Techniques in MATLAB – MathWorks, 2026",
    "Simulink Fundamentals – MathWorks, 2026",
    "Power Systems Simulation Onramp – MathWorks, 2026"
  ],
  languages: ["Turkish – Native", "English – Upper-Intermediate (B2)"]
};
