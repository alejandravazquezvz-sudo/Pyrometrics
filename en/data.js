/* Research data. Later replaced by the database. */
window.DATOS = [
 {
  "id": "PSI-117",
  "area": "Combustion Science / Droplet",
  "tipo": "Ground Investigation",
  "objetivo": "The objective of this ground investigation was to use flight data obtained from PSI through NASA’s Flame Extinguishment Experiment (FLEX) to quantify how externally imposed thermal and convective perturbations regulated the dynamics and ultimate fate of already established droplet cool flames, and to explain run-to-run variability by isolating the roles of deliberate heating and unintentional drift-induced convection. Focusing on both small and large droplets, the work mapped stability windows for ignition, sustained oscillation, transitions to hot ignition and warm-flame behavior, and extinction under microgravity. By leveraging and extending the FLEX data in the PSI, this study produced reusable models and sensitivity analyses that coupled low-temperature chemistry with transport and radiative effects.",
  "enfoque": "OpenFOAM was used to develop a 3-D CFD model of n-alkane droplet cool flames in microgravity, coupling variable-density Navier–Stokes flow with low-temperature combustion chemistry, coupled heat and mass transfer, and radiation. Model fidelity was established against ISS FLEX measurements, after which controlled simulations examined three forcing modes (i) convection alone to mimic droplet drift, (ii) imposed heat flux, and (iii) combined convection plus heating applied to both large (1–4 mm) and sub-millimeter (~0.5 mm) droplets.\n\nTo accelerate progress, the study began with simplified chemistry and transitioned to reduced mechanisms for parameter sweeps over forcing amplitude and frequency, ambient composition (including ozone-assisted cases), and pressure. From each case, predictive observables were extracted (ignition delay, oscillation frequency and amplitude, stand-off and extinction diameters), and were used to construct stability maps that delineated conditions for cool-flame onset, persistence, and quenching. These maps were reconciled with FLEX observations and were used to guide next-generation test matrices for both large- and small-droplet experiments.",
  "titulo": "Effect of External Thermo-Convective Perturbation on Cool Flame Dynamics: A Multidimensional Multi-Physics CFD Analysis",
  "cuando": "From 15 Feb 2017 to 14 Feb 2022 · submitted 18 Sep 2024 · public release 10 Jun 2026",
  "creditos": [
   {
    "nombre": "Tanvir Farouk",
    "rol": "Principal Investigator (PI)",
    "institucion": "University of South Carolina"
   },
   {
    "nombre": "Mike Hicks",
    "rol": "Project Scientist",
    "institucion": "NASA GRC"
   },
   {
    "nombre": "Funding NNX17AF97A",
    "rol": "",
    "institucion": "Glenn Research Center (GRC)"
   }
  ],
  "biografia": "Effect of External Thermo-Convective Perturbation on Cool Flame Dynamics: A Multidimensional Multi-Physics CFD Analysis\nCenter: Glenn Research Center (GRC) · Program: National Aeronautics and Space Administration (NASA), PSI grant\nDOI: 10.60555/gz0q-b577",
  "mision": "Space Benefits: Potential to improve spacecraft fire-safety modeling by resolving cool-flame/extinction behavior in microgravity; leverages FLEX to define safer operating envelopes/materials.\nEarth Benefits: Advances low-temperature combustion understanding relevant to engine knock, efficiency, and emissions; delivers validated CFD tools transferrable to practical combustors.",
  "sinopsis": "WHAT WAS DONE\nAccording to the metadata, PSI-117 uses FLEX (ISS) flight data to study, with a 3-D CFD model, how external thermal and convective perturbations affect cool flames of n-alkane droplets. The presentations and chapters 6 and 7 of the thesis in the package show related work on n-heptane, n-decane and n-dodecane droplets.\n\nAPPROACH AND RESULTS\nApproach (metadata): an OpenFOAM model validated against FLEX; first simplified chemistry and then reduced mechanisms for sweeps of forcing (convection, heat flux, both), composition (including ozone) and pressure, in droplets of 1–4 mm and ~0.5 mm. For each case, ignition delay, oscillation frequency and amplitude, and separation and extinction diameters were extracted to build stability maps that guide future tests.\nResults documented in the presentations and the thesis:\n• Radiation and heat balance: radiative loss takes the flame from hot to cool; the balance between heat generated and lost sustains it. The transition occurred at a peak temperature of ~1200 K in all three fuels.\n• With helium at 3 atm a third stage appears (~950 K → ~770 K); there are two quasi-steady modes: “warm” (NTC) and “cool.”\n• Extinction: hot-flame extinction is similar across fuels; cool-flame extinction depends on molecular weight (longer alkanes: hotter flame, smaller extinction diameter). With pressure: ≤1 atm two stages, 1.25 atm repeated cycles, 3 atm stable warm flame.\n• 0.5 mm droplets: in simulation, ozone enables a direct cool flame between a minimum and a maximum concentration; near the limit the flame oscillates.\nContributions (metadata): fire safety on spacecraft and understanding of low-temperature combustion (knock, efficiency, emissions).\nI did not find the specific results of the 3-D forcing in the documents I read.\n\nFINDINGS ON FIRE IN MICROGRAVITY\n• FLEX (ISS, 2011): first observation of cool flames in n-heptane droplets; two-stage combustion (hot → cool).\n• n-dodecane at 2.75 atm with helium: qualitative agreement with the three-stage prediction.\n\nPROBLEMS AND SOLUTIONS\n• Direct cool flame in small droplets without a hot flame: difficult without ozone; with ozone, possible in simulation (experimental proof is lacking).\n• Near the limit the flame does not stabilize and oscillates; this is attributed to QOOH kinetics and fuel leakage. Unresolved.\n• 1D models do not capture buoyancy at 1 g; a 2D model was used.",
  "arbol": [
   {
    "titulo": "1. What a cool flame is",
    "url": "interpretados/libro.html#c1",
    "hijos": [
     {
      "titulo": "General presentation, slide 3",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=3"
     },
     {
      "titulo": "General presentation, slide 4",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=4"
     },
     {
      "titulo": "Oscillatory presentation, slide 2 (motivation)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf#page=2"
     }
    ]
   },
   {
    "titulo": "2. FLEX and “anomalous” combustion",
    "url": "interpretados/libro.html#c2",
    "hijos": [
     {
      "titulo": "Three-stage presentation, slide 2 (FLEX)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf#page=2"
     },
     {
      "titulo": "General presentation, slide 32",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=32"
     }
    ]
   },
   {
    "titulo": "3. What sustains the cool flame",
    "url": "interpretados/libro.html#c3",
    "hijos": [
     {
      "titulo": "General presentation, slide 7",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=7"
     },
     {
      "titulo": "Extinction presentation, summary (slide 16)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=16"
     }
    ]
   },
   {
    "titulo": "4. Three stages with helium and pressure",
    "url": "interpretados/libro.html#c4",
    "hijos": [
     {
      "titulo": "General presentation, slide 13 (helium)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=13"
     },
     {
      "titulo": "Three-stage presentation, summary (slide 17)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf#page=17"
     },
     {
      "titulo": "Three-stage presentation, slide 21 (FLEX 1256)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf#page=21"
     }
    ]
   },
   {
    "titulo": "5. Extinction: fuel and pressure",
    "url": "interpretados/libro.html#c5",
    "hijos": [
     {
      "titulo": "Extinction presentation, slide 12 (pressure)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=12"
     },
     {
      "titulo": "Extinction presentation, slide 13 (multicycle)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=13"
     },
     {
      "titulo": "Extinction presentation, slide 15",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=15"
     },
     {
      "titulo": "Extinction presentation, summary (slide 16)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=16"
     }
    ]
   },
   {
    "titulo": "6. Small droplets and ozone",
    "url": "interpretados/libro.html#c6",
    "hijos": [
     {
      "titulo": "Thesis, ch. 6 (ozone), p. 154",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Thesis, 6.5 conclusions, p. 184",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "General presentation, slide 23 (ozone)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=23"
     },
     {
      "titulo": "Oscillatory presentation, slide 5",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf#page=5"
     }
    ]
   },
   {
    "titulo": "7. Oscillatory flames",
    "url": "interpretados/libro.html#c7",
    "hijos": [
     {
      "titulo": "Oscillatory presentation, summary (slide 13)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf#page=13"
     },
     {
      "titulo": "Thesis, ch. 7 (oscillatory), p. 193",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Thesis, 7.5 conclusions, p. 210",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     }
    ]
   },
   {
    "titulo": "8. 1 g simulation: counterflow and buoyancy",
    "url": "interpretados/libro.html#c8",
    "hijos": [
     {
      "titulo": "General presentation, slide 26 (counterflow)",
      "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=26"
     }
    ]
   },
   {
    "titulo": "9. Limits and open questions",
    "url": "interpretados/libro.html#c9",
    "hijos": [
     {
      "titulo": "Thesis, 6.5 conclusions, p. 184",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Thesis, 7.5 conclusions, p. 210",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Thesis, 8.2 contributions, p. 220",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     }
    ]
   },
   {
    "titulo": "Presentations (4)",
    "url": "",
    "hijos": [
     {
      "titulo": "Cool Flames in Space — PSI Seminar 2026",
      "url": "interpretados/seminario-2026.html",
      "hijos": [
       {
        "titulo": "What a cool flame is",
        "url": "interpretados/seminario-2026.html#que-es"
       },
       {
        "titulo": "The discovery on the ISS (FLEX, 2011)",
        "url": "interpretados/seminario-2026.html#descubrimiento"
       },
       {
        "titulo": "Why the cool flame appears",
        "url": "interpretados/seminario-2026.html#mecanismo"
       },
       {
        "titulo": "Kinetic sensitivity and revised model",
        "url": "interpretados/seminario-2026.html#cinetica"
       },
       {
        "titulo": "Multi-stage oscillatory flames and pressure",
        "url": "interpretados/seminario-2026.html#oscilatoria-presion"
       },
       {
        "titulo": "Three stages with helium exchange (3 atm)",
        "url": "interpretados/seminario-2026.html#helio"
       },
       {
        "titulo": "Small droplets and ozone",
        "url": "interpretados/seminario-2026.html#ozono"
       },
       {
        "titulo": "Ground experiments: counterflow diffusion flame",
        "url": "interpretados/seminario-2026.html#terrestre"
       },
       {
        "titulo": "Summary and current status",
        "url": "interpretados/seminario-2026.html#resumen"
       }
      ]
     },
     {
      "titulo": "Three-stage burning: hot, warm and cool",
      "url": "interpretados/tres-estadios.html",
      "hijos": [
       {
        "titulo": "Cool flames triggered by radiative losses",
        "url": "interpretados/tres-estadios.html#radiacion"
       },
       {
        "titulo": "The question: greater diffusive losses",
        "url": "interpretados/tres-estadios.html#hipotesis"
       },
       {
        "titulo": "Three stages with helium at 3 and 5 atm",
        "url": "interpretados/tres-estadios.html#helio"
       },
       {
        "titulo": "Kinetics and species",
        "url": "interpretados/tres-estadios.html#cinetica"
       },
       {
        "titulo": "Experimental confirmation in FLEX",
        "url": "interpretados/tres-estadios.html#experimento"
       },
       {
        "titulo": "Conclusions",
        "url": "interpretados/tres-estadios.html#conclusion"
       }
      ]
     },
     {
      "titulo": "Extinction characteristics of n-alkane droplets",
      "url": "interpretados/extincion.html",
      "hijos": [
       {
        "titulo": "Burning modes of three fuels",
        "url": "interpretados/extincion.html#modos"
       },
       {
        "titulo": "Model and validation",
        "url": "interpretados/extincion.html#modelo"
       },
       {
        "titulo": "Behavior at 1 atm in air",
        "url": "interpretados/extincion.html#1atm"
       },
       {
        "titulo": "Effect of pressure",
        "url": "interpretados/extincion.html#presion"
       },
       {
        "titulo": "Conclusions",
        "url": "interpretados/extincion.html#conclusion"
       }
      ]
     },
     {
      "titulo": "Oscillatory cool flame in sub-millimeter droplets",
      "url": "interpretados/oscilatoria.html",
      "hijos": [
       {
        "titulo": "Motivation",
        "url": "interpretados/oscilatoria.html#motivacion"
       },
       {
        "titulo": "Simulated condition",
        "url": "interpretados/oscilatoria.html#condicion"
       },
       {
        "titulo": "Observed behavior",
        "url": "interpretados/oscilatoria.html#observacion"
       },
       {
        "titulo": "How the oscillation starts",
        "url": "interpretados/oscilatoria.html#inicio"
       },
       {
        "titulo": "Role of low-temperature chemistry",
        "url": "interpretados/oscilatoria.html#quimica"
       },
       {
        "titulo": "Fuel leakage and conclusion",
        "url": "interpretados/oscilatoria.html#fuga"
       }
      ]
     }
    ]
   },
   {
    "titulo": "Doctoral thesis (M. F. Alam, 2018)",
    "url": "interpretados/tesis.html",
    "hijos": [
     {
      "titulo": "Thesis summary",
      "url": "interpretados/tesis.html#resumen"
     },
     {
      "titulo": "Ch. 2 — Droplet combustion model in microgravity",
      "url": "interpretados/tesis.html#modelo"
     },
     {
      "titulo": "Ch. 3 — Xenon as a fire suppressant (context)",
      "url": "interpretados/tesis.html#xenon"
     },
     {
      "titulo": "Chs. 4 and 5 — Butanol and its isomers (context)",
      "url": "interpretados/tesis.html#butanol"
     },
     {
      "titulo": "Ch. 6 — Ozone-assisted cool flame",
      "url": "interpretados/tesis.html#ozono"
     },
     {
      "titulo": "Ch. 7 — Oscillatory cool flame near the limit",
      "url": "interpretados/tesis.html#oscilatoria"
     },
     {
      "titulo": "Ch. 8 — Conclusion",
      "url": "interpretados/tesis.html#conclusion"
     }
    ]
   },
   {
    "titulo": "Data: plots from the CSV files",
    "url": "interpretados/datos.html",
    "hijos": [
     {
      "titulo": "d² versus time",
      "url": "interpretados/datos.html#d2"
     },
     {
      "titulo": "Flame diameter",
      "url": "interpretados/datos.html#llama"
     },
     {
      "titulo": "Radiant power Q",
      "url": "interpretados/datos.html#q"
     }
    ]
   },
   {
    "titulo": "Publications (10)",
    "url": "",
    "hijos": [
     {
      "titulo": "Extinction characteristics of isolated n-alkane fuel droplets during low temperature cool flame burning in air (2023)",
      "url": "https://doi.org/10.1016/j.proci.2022.07.094"
     },
     {
      "titulo": "Sub-millimeter sized multi-component jet fuel surrogate droplet combustion: Physicochemical preferential vaporization effects (2021)",
      "url": "https://doi.org/10.1016/j.proci.2020.06.200"
     },
     {
      "titulo": "Initial diameter effects on combustion of unsupported equi-volume n-heptane/iso-octane mixture droplets and the transition to cool flame behavior: Experimental observations and detailed numerical modeling (2020)",
      "url": "https://doi.org/10.1016/j.combustflame.2020.06.012"
     },
     {
      "titulo": "Oscillatory cool flame combustion behavior of submillimeter sized n-alkane droplet under near limit conditions (2019)",
      "url": "https://doi.org/10.1016/j.proci.2018.05.151"
     },
     {
      "titulo": "Investigating the role of preferential vaporization during submillimeter sized multicomponent jet fuel surrogate droplet combustion (2019)",
      "url": ""
     },
     {
      "titulo": "Multi-component jet fuel surrogate droplet combustion: Preferential vaporization behaviors under spray relevant conditions and effects on combustion behaviors (2019)",
      "url": ""
     },
     {
      "titulo": "Cool Flame Combustion of Sub-Millimeter Sized Higher n-Alkane Droplets at Atmospheric Condition (2017)",
      "url": ""
     },
     {
      "titulo": "Non-Premixed - Partially Premixed to Diffusive Burning: Initial Transient of Direct Cool Flame Burn (2017)",
      "url": ""
     },
     {
      "titulo": "Oscillatory Cool Flame Combustion Behavior of Submillimeter Sized n-Alkane Droplet under Near Limit Conditions (2018)",
      "url": ""
     },
     {
      "titulo": "Dynamics of cool flames (2019)",
      "url": "https://doi.org/10.1016/j.pecs.2019.100787"
     }
    ]
   },
   {
    "titulo": "Study DOI",
    "url": "https://doi.org/10.60555/gz0q-b577"
   },
   {
    "titulo": "Original files (PDF and CSV)",
    "url": "",
    "hijos": [
     {
      "titulo": "Presentations (4 PDFs)",
      "url": "",
      "hijos": [
       {
        "titulo": "Extinction Characteristics",
        "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf"
       },
       {
        "titulo": "Oscillatory Cool Flame",
        "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf"
       },
       {
        "titulo": "PSI Users Group — Cool Flames in Space (26 Mar 2026)",
        "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf"
       },
       {
        "titulo": "Three Stage Cool Flame",
        "url": "../datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf"
       }
      ]
     },
     {
      "titulo": "Doctoral thesis (PDF)",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Original data (1 CSV)",
      "url": "../datos/PSI-117/04_datos_originales/PSI-117_Analyzed_Data_MST_2024_Burning_history_Flame_diameter.csv"
     },
     {
      "titulo": "Separated data (7 CSVs)",
      "url": "",
      "hijos": [
       {
        "titulo": "exp_Q_serie_A.csv",
        "url": "../datos/PSI-117/05_datos_separados/exp_Q_serie_A.csv"
       },
       {
        "titulo": "exp_Q_serie_B.csv",
        "url": "../datos/PSI-117/05_datos_separados/exp_Q_serie_B.csv"
       },
       {
        "titulo": "exp_diametro2_vs_tiempo.csv",
        "url": "../datos/PSI-117/05_datos_separados/exp_diametro2_vs_tiempo.csv"
       },
       {
        "titulo": "exp_diametro_llama_vs_tiempo.csv",
        "url": "../datos/PSI-117/05_datos_separados/exp_diametro_llama_vs_tiempo.csv"
       },
       {
        "titulo": "modelo_1atm_do4mm_diametro2.csv",
        "url": "../datos/PSI-117/05_datos_separados/modelo_1atm_do4mm_diametro2.csv"
       },
       {
        "titulo": "modelo_1atm_do4mm_diametro_llama.csv",
        "url": "../datos/PSI-117/05_datos_separados/modelo_1atm_do4mm_diametro_llama.csv"
       },
       {
        "titulo": "modelo_1atm_do4mm_radiancia_Q.csv",
        "url": "../datos/PSI-117/05_datos_separados/modelo_1atm_do4mm_radiancia_Q.csv"
       }
      ]
     },
     {
      "titulo": "ISA-Tab metadata",
      "url": "../datos/PSI-117/01_metadata/i_Investigation.txt"
     }
    ]
   }
  ],
  "enfoquePuntos": [
   "3-D CFD model in OpenFOAM of n-alkane cool flames in microgravity (flow, low-temperature chemistry, heat, mass and radiation), validated against FLEX.",
   "Three types of forcing: convection only, imposed heat flux, and both; in droplets of 1–4 mm and ~0.5 mm.",
   "Sweeps of amplitude, frequency, composition (with ozone) and pressure → stability maps that guide future experiments."
  ],
  "impactos": "Space Benefits: Potential to improve spacecraft fire-safety modeling by resolving cool-flame/extinction behavior in microgravity; leverages FLEX to define safer operating envelopes/materials.\nEarth Benefits: Advances low-temperature combustion understanding relevant to engine knock, efficiency, and emissions; delivers validated CFD tools transferrable to practical combustors."
 },
 {
  "id": "PSI-174",
  "titulo": "Micromechanics-based Modeling of Cement Solidified in the Microgravity",
  "area": "",
  "tipo": "Ground Investigation",
  "objetivo": "Micromechanics‑Based Modeling of Cement Solidified in the Microgravity aimed to advance knowledge of the mechanical properties of cement binders formed in reduced gravity by leveraging microgravity materials data, such as SEM/BSE micrographs, available in the PSI database.\nThis project sought to connect microstructure (e.g., porosity, phase morphology such as portlandite) observed in ISS‑cured tricalcium silicate (C3S) pastes to bulk mechanical/transport behavior through modeling, thereby informing design and engineering of cementitious materials for extraterrestrial construction and providing validated simulation data that scale sparse flight samples to application‑relevant sizes.",
  "enfoque": "In this work, the micromechanics analysis code with generalized method of cells (MAC/GMC) was used to predict the structure-property relationship of these unique cement samples.\nFirst, the sparse data of cement hydrated in microgravity environment was converted to high-fidelity 3D microstructure with the aid of a deep learning-based microstructure methodology. The reconstructed sub-volumes were compared against micro-CT data using statistical descriptors. Second, the sub-volumes (partitioned based on individual constituents) of such reconstructed 3D structures were fed into the NASA Multiscale Analysis Tool (NASMAT) to obtain homogenized properties of the cement. A semi-automated Python script was developed to complete the workflow. Owing to the high computational demand, the analyses were carried out in NASA Advanced Supercomputing (NAS) servers.\n\nPhase‑discerned ISS and ground BSE/SEM images were segmented and reconstructed into 3D volumes using a deep learning microstructure framework; these Representative Volume Elements (RVEs) were then analyzed with NASA’s Multiscale Analysis Tool (NASMAT) to homogenize and predict effective properties. Reconstruction quality was validated against statistical descriptors and micro‑CT data, and the modeling spans length‑scale partitioning to capture porous, multiphase behavior.\nThe experimental basis originated from the MICS investigation (PSI‑84 in the database), which conducted controlled ISS/ground hydration in sealed Burst Pouches, keeping temperature/pressure/humidity constant so gravity is the sole variable, followed by porosimetry, TGA, XRD, EDS/EMPA, and image analysis to quantify phase fractions and pore structures that feed the modeling pipeline.",
  "impactos": "This research provides the first reference simulation data and a practical route to predict how cement (including regolith‑based mixes) behaves when fabricated in space, which can inform Artemis‑aligned or other space-based habitat concepts and construction logistics where transporting bulk materials is prohibitive.\nOn Earth, the deep-learning-assisted reconstruction and micromechanics workflow developed can be applied to other multiphase materials, enabling materials-by-design even when only a limited samples are available. By clarifying how processing conditions in microgravity affect cement structure and performance, such as the ~70% porosity and plate-like portlandite observed in ISS samples, this work improves predictive models for optimizing mix designs and curing conditions in constrained environments. These advances also benefit low-resource or extreme-environment construction on Earth and contribute more broadly to the ICME community.",
  "cuando": "From 01 Nov 2021 to 30 Jun 2024",
  "creditos": [
   {
    "nombre": "Namiko Yamamoto",
    "rol": "PI (Associate Professor of Aerospace Engineering)",
    "institucion": "The Pennsylvania State University"
   },
   {
    "nombre": "Vishnu Saseendran",
    "rol": "Co-PI (Assistant Research Professor of Aerospace Engineering)",
    "institucion": "The Pennsylvania State University"
   },
   {
    "nombre": "Enrique Jackson",
    "rol": "Program Manager",
    "institucion": "NASA Marshall Space Flight Center"
   },
   {
    "nombre": "NASA grant 80NSSC22K0083",
    "rol": "",
    "institucion": "Marshall Space Flight Center (MSFC)"
   },
   {
    "nombre": "Unfunded collaborators: Aleksandra Radlińska, Peter Collins, Simon Delattre, Brett A. Bednarcyk, Evan J. Pineda, Ibrahim Kaleel",
    "rol": "",
    "institucion": ""
   }
  ],
  "biografia": "Micromechanics-based Modeling of Cement Solidified in the Microgravity\nCenter: Marshall Space Flight Center (MSFC)\nAgency: NASA, PSI grant",
  "mision": "This research provides the first reference simulation data and a practical route to predict how cement (including regolith‑based mixes) behaves when fabricated in space, which can inform Artemis‑aligned or other space-based habitat concepts and construction logistics where transporting bulk materials is prohibitive.\nOn Earth, the deep-learning-assisted reconstruction and micromechanics workflow developed can be applied to other multiphase materials, enabling materials-by-design even when only a limited samples are available. By clarifying how processing conditions in microgravity affect cement structure and performance, such as the ~70% porosity and plate-like portlandite observed in ISS samples, this work improves predictive models for optimizing mix designs and curing conditions in constrained environments. These advances also benefit low-resource or extreme-environment construction on Earth and contribute more broadly to the ICME community.",
  "sinopsis": "WHAT WAS DONE\nUsing data on cement hydrated in microgravity from the PSI database (SEM/BSE images from the MICS investigation, PSI-84), 3D microstructures were reconstructed with deep learning, compared with micro-CT data, and fed into NASMAT to predict the mechanical properties of cement hydrated on the ISS versus on the ground.\n\nAPPROACH AND RESULTS\nApproach (metadata and final report): the MAC/GMC code and NASMAT (HFGMC) computed homogenized properties from reconstructed 3D volumes; a Python script automated the workflow and the analyses were run on NAS servers. Micro-CT was measured with a Zeiss Xradia 620 Versa (samples of ~10 × 6 × 6 mm, ~999 million voxels, ~2 μm resolution).\nResults from the final report:\n• Porosity measured by MIP was 48.4 % (1g) and 69.4 % (μg).\n• The Young's modulus of cement hydrated in microgravity was predicted to be 42 % lower than that of ground cement; the report describes this as the first time it has been predicted.\n• A workflow was developed that integrates the reconstructed subvolumes into NASMAT as RVEs.\nResults from DiPerna's thesis (ch. 3 and 4): in the reconstructed 3D volumes and in the micro-CT, the microgravity samples showed wider pore distributions than the ground samples. The micro-CT pores came out larger (~100s of microns) than those of the reconstruction (~10s of microns), a difference the thesis attributes to the low resolution of the micro-CT.\n\nFINDINGS IN MICROGRAVITY\n• More porosity in the ISS samples than in the ground samples (48.4 % vs 69.4 % by MIP).\n• Lower predicted Young's modulus in microgravity (−42 %).\n• Wider pore distribution in the microgravity samples (thesis).\n\nPROBLEMS AND SOLUTIONS\n• 2D analysis was not feasible because of the high porosity → 3D RVEs were used.\n• NASMAT had memory limits for a 512 × 512 × 512 voxel RVE → it was split into subvolumes.\n• Thesis: a direct quantitative comparison between the 3D reconstruction and the micro-CT was not achieved because of the latter's low resolution; it proposes improving the segmentation or using another comparison method.\n• The “Changes/Problems” section of the final report says N/A in all its items.",
  "arbol": [
   {
    "titulo": "Grant final report (PDF, 27 pp.)",
    "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf",
    "hijos": [
     {
      "titulo": "Project objective (p. 1)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=1"
     },
     {
      "titulo": "Accomplishments against objectives (p. 2)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=2"
     },
     {
      "titulo": "3D reconstruction with deep learning (p. 14)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=14"
     },
     {
      "titulo": "Integration into NASMAT and memory limit (p. 20)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=20"
     },
     {
      "titulo": "Predicted Young's modulus (p. 21)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=21"
     },
     {
      "titulo": "Products: publications and presentations (p. 23)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=23"
     },
     {
      "titulo": "Participants and collaborators (p. 24)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=24"
     },
     {
      "titulo": "Changes/Problems (p. 25)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=25"
     },
     {
      "titulo": "Impact (p. 25)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=25"
     },
     {
      "titulo": "References (p. 26)",
      "url": "../datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=26"
     }
    ]
   },
   {
    "titulo": "Claire DiPerna's thesis (PDF, 43 pp.)",
    "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf",
    "hijos": [
     {
      "titulo": "Abstract (p. 2)",
      "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=2"
     },
     {
      "titulo": "Ch. 1 — Introduction (p. 9)",
      "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=9"
     },
     {
      "titulo": "Ch. 2 — Background (p. 11)",
      "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=11"
     },
     {
      "titulo": "Ch. 3 — Validation of the 3D reconstruction by pore distribution (p. 16)",
      "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=16"
     },
     {
      "titulo": "Ch. 4 — Conclusions and future work (p. 36)",
      "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=36"
     },
     {
      "titulo": "Appendix A — MATLAB code (p. 41)",
      "url": "../datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=41"
     }
    ]
   },
   {
    "titulo": "Metadata (text)",
    "url": "../datos/PSI-174_paquete/01_metadata/PSI-174_metadata.txt"
   }
  ]
 }
];
