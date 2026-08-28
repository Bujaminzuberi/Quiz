const QUIZZES = [
  {
    id: "hr",
    title: "HR",
    description: "Human Resources – Grundlagen",
    active: true,
    questions: [
      {
        question: "Was ist das Hauptziel von Recruiting?",
        type: "single",
        options: [
          {id:"A",text:"Geeignete Mitarbeitende zu gewinnen"},
          {id:"B",text:"Produkte zu verkaufen"},
          {id:"C",text:"Die Buchhaltung zu führen"},
          {id:"D",text:"IT-Systeme zu warten"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Bereiche können zu HR gehören?",
        type: "multi",
        options: [
          {id:"A",text:"Recruiting"},
          {id:"B",text:"Personalentwicklung"},
          {id:"C",text:"Payroll"},
          {id:"D",text:"Produktionsmaschinen-Wartung"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Was bezeichnet Onboarding?",
        type: "single",
        options: [
          {id:"A",text:"Die Einarbeitung neuer Mitarbeitender"},
          {id:"B",text:"Die Kündigung aller Mitarbeitenden"},
          {id:"C",text:"Eine Werbekampagne"},
          {id:"D",text:"Eine Jahresabschlussprüfung"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Ziele kann eine Weiterbildung haben?",
        type: "multi",
        options: [
          {id:"A",text:"Kompetenzen erweitern"},
          {id:"B",text:"Fachwissen aktualisieren"},
          {id:"C",text:"Entwicklung fördern"},
          {id:"D",text:"Jede Mitarbeitendenbeurteilung abschaffen"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Was ist eine Stellenbeschreibung?",
        type: "single",
        options: [
          {id:"A",text:"Eine Beschreibung von Aufgaben und Anforderungen einer Stelle"},
          {id:"B",text:"Eine private Chatnachricht"},
          {id:"C",text:"Ein Marketingbudget"},
          {id:"D",text:"Eine Kundenrechnung"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Themen können Teil eines Mitarbeitergesprächs sein?",
        type: "multi",
        options: [
          {id:"A",text:"Ziele"},
          {id:"B",text:"Entwicklung"},
          {id:"C",text:"Feedback"},
          {id:"D",text:"Wettervorhersage als einziges Thema"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Was bedeutet Personalentwicklung?",
        type: "single",
        options: [
          {id:"A",text:"Gezielte Förderung und Weiterentwicklung von Mitarbeitenden"},
          {id:"B",text:"Nur die Verwaltung von Parkplätzen"},
          {id:"C",text:"Nur die Erstellung von Rechnungen"},
          {id:"D",text:"Ausschließlich externe Werbung"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Faktoren können bei einer Personalauswahl relevant sein?",
        type: "multi",
        options: [
          {id:"A",text:"Qualifikation"},
          {id:"B",text:"Erfahrung"},
          {id:"C",text:"Anforderungsprofil"},
          {id:"D",text:"Zufällige Auswahl ohne Kriterien"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Was ist ein Arbeitszeugnis?",
        type: "single",
        options: [
          {id:"A",text:"Ein Dokument über das Arbeitsverhältnis und die Leistung"},
          {id:"B",text:"Ein Produktkatalog"},
          {id:"C",text:"Ein Werbeplakat"},
          {id:"D",text:"Ein Stundenplan der Schule"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Aufgaben können zur Personaladministration gehören?",
        type: "multi",
        options: [
          {id:"A",text:"Pflege von Personaldaten"},
          {id:"B",text:"Verwaltung von Ein- und Austritten"},
          {id:"C",text:"Dokumentation von Arbeitsverhältnissen"},
          {id:"D",text:"Entwicklung einer neuen Produktverpackung"}
        ],
        correct:["A","B","C"], points:2
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Marketing – Grundlagen",
    active: true,
    questions: [
      {
        question: "Was ist eine Zielgruppe?",
        type: "single",
        options: [
          {id:"A",text:"Eine definierte Gruppe potenzieller Kundinnen und Kunden"},
          {id:"B",text:"Eine Liste aller Mitarbeitenden"},
          {id:"C",text:"Ein interner Finanzbericht"},
          {id:"D",text:"Eine Produktionsmaschine"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche können Marketingkanäle sein?",
        type: "multi",
        options: [
          {id:"A",text:"Social Media"},
          {id:"B",text:"E-Mail-Marketing"},
          {id:"C",text:"Suchmaschinenwerbung"},
          {id:"D",text:"Lohnabrechnung"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Wofür steht der Begriff Marke?",
        type: "single",
        options: [
          {id:"A",text:"Eine erkennbare Identität eines Angebots oder Unternehmens"},
          {id:"B",text:"Nur eine interne Excel-Datei"},
          {id:"C",text:"Eine Steuererklärung"},
          {id:"D",text:"Ein Arbeitsvertrag"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Was kann Teil einer Marketingstrategie sein?",
        type: "multi",
        options: [
          {id:"A",text:"Zielgruppenanalyse"},
          {id:"B",text:"Positionierung"},
          {id:"C",text:"Kommunikationsplanung"},
          {id:"D",text:"Zufällige Preisänderungen ohne Ziel"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Was bedeutet Conversion im Online-Marketing häufig?",
        type: "single",
        options: [
          {id:"A",text:"Eine gewünschte Nutzeraktion, z. B. ein Kauf"},
          {id:"B",text:"Das Löschen einer Website"},
          {id:"C",text:"Das Drucken eines Dokuments"},
          {id:"D",text:"Das Ausschalten eines Servers"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Elemente können zu einem Marketing-Mix gehören?",
        type: "multi",
        options: [
          {id:"A",text:"Produkt"},
          {id:"B",text:"Preis"},
          {id:"C",text:"Distribution"},
          {id:"D",text:"Promotion"}
        ],
        correct:["A","B","C","D"], points:2
      },
      {
        question: "Was ist eine Wettbewerbsanalyse?",
        type: "single",
        options: [
          {id:"A",text:"Die systematische Untersuchung von Wettbewerbern"},
          {id:"B",text:"Eine Lohnabrechnung"},
          {id:"C",text:"Ein Bewerbungsgespräch"},
          {id:"D",text:"Eine Inventur ohne Marktbezug"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Daten können für Marketingentscheidungen hilfreich sein?",
        type: "multi",
        options: [
          {id:"A",text:"Kundenverhalten"},
          {id:"B",text:"Kampagnenkennzahlen"},
          {id:"C",text:"Marktdaten"},
          {id:"D",text:"Zufällige Vermutungen ohne Datenbasis"}
        ],
        correct:["A","B","C"], points:2
      },
      {
        question: "Was ist ein Call-to-Action?",
        type: "single",
        options: [
          {id:"A",text:"Eine Aufforderung zu einer bestimmten Handlung"},
          {id:"B",text:"Eine Steuerabrechnung"},
          {id:"C",text:"Eine Personalakte"},
          {id:"D",text:"Ein Lagerbestand"}
        ],
        correct:["A"], points:1
      },
      {
        question: "Welche Ziele kann Marketing verfolgen?",
        type: "multi",
        options: [
          {id:"A",text:"Bekanntheit erhöhen"},
          {id:"B",text:"Nachfrage fördern"},
          {id:"C",text:"Kundenbindung stärken"},
          {id:"D",text:"Alle Geschäftsdaten ohne Zweck veröffentlichen"}
        ],
        correct:["A","B","C"], points:2
      }
    ]
  }
];