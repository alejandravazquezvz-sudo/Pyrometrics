/* Datos de las investigaciones. Más adelante se reemplaza por la base de datos. */
window.DATOS = [
 {
  "id": "PSI-117",
  "area": "Combustion Science / Droplet",
  "tipo": "Ground Investigation",
  "objetivo": "The objective of this ground investigation was to use flight data obtained from PSI through NASA’s Flame Extinguishment Experiment (FLEX) to quantify how externally imposed thermal and convective perturbations regulated the dynamics and ultimate fate of already established droplet cool flames, and to explain run-to-run variability by isolating the roles of deliberate heating and unintentional drift-induced convection. Focusing on both small and large droplets, the work mapped stability windows for ignition, sustained oscillation, transitions to hot ignition and warm-flame behavior, and extinction under microgravity. By leveraging and extending the FLEX data in the PSI, this study produced reusable models and sensitivity analyses that coupled low-temperature chemistry with transport and radiative effects.",
  "enfoque": "OpenFOAM was used to develop a 3-D CFD model of n-alkane droplet cool flames in microgravity, coupling variable-density Navier–Stokes flow with low-temperature combustion chemistry, coupled heat and mass transfer, and radiation. Model fidelity was established against ISS FLEX measurements, after which controlled simulations examined three forcing modes (i) convection alone to mimic droplet drift, (ii) imposed heat flux, and (iii) combined convection plus heating applied to both large (1–4 mm) and sub-millimeter (~0.5 mm) droplets.\n\nTo accelerate progress, the study began with simplified chemistry and transitioned to reduced mechanisms for parameter sweeps over forcing amplitude and frequency, ambient composition (including ozone-assisted cases), and pressure. From each case, predictive observables were extracted (ignition delay, oscillation frequency and amplitude, stand-off and extinction diameters), and were used to construct stability maps that delineated conditions for cool-flame onset, persistence, and quenching. These maps were reconciled with FLEX observations and were used to guide next-generation test matrices for both large- and small-droplet experiments.",
  "titulo": "Effect of External Thermo-Convective Perturbation on Cool Flame Dynamics: A Multidimensional Multi-Physics CFD Analysis",
  "cuando": "Del 15-feb-2017 al 14-feb-2022 · envío 18-sep-2024 · liberación pública 10-jun-2026",
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
    "nombre": "Financiamiento NNX17AF97A",
    "rol": "",
    "institucion": "Glenn Research Center (GRC)"
   }
  ],
  "biografia": "Effect of External Thermo-Convective Perturbation on Cool Flame Dynamics: A Multidimensional Multi-Physics CFD Analysis\nCentro: Glenn Research Center (GRC) · Programa: National Aeronautics and Space Administration (NASA), PSI grant\nDOI: 10.60555/gz0q-b577",
  "mision": "Space Benefits: Potential to improve spacecraft fire-safety modeling by resolving cool-flame/extinction behavior in microgravity; leverages FLEX to define safer operating envelopes/materials.\nEarth Benefits: Advances low-temperature combustion understanding relevant to engine knock, efficiency, and emissions; delivers validated CFD tools transferrable to practical combustors.",
  "sinopsis": "QUÉ SE HIZO\nSegún los metadatos, PSI-117 usa datos de vuelo de FLEX (ISS) para estudiar, con un modelo CFD 3-D, cómo perturbaciones térmicas y convectivas externas afectan llamas frías de gotas de n-alcanos. Las presentaciones y los capítulos 6 y 7 de la tesis del paquete muestran trabajo relacionado con gotas de n-heptano, n-decano y n-dodecano.\n\nENFOQUE Y RESULTADOS\nEnfoque (metadatos): modelo en OpenFOAM validado con FLEX; primero química simplificada y luego mecanismos reducidos para barridos de forzamiento (convección, flujo de calor, ambos), composición (incluido ozono) y presión, en gotas de 1–4 mm y ~0.5 mm. De cada caso se extrajeron retardo de ignición, frecuencia y amplitud de oscilación, y diámetros de separación y de extinción, para construir mapas de estabilidad que guían futuras pruebas.\nResultados documentados en las presentaciones y la tesis:\n• Radiación y balance de calor: la pérdida radiativa lleva de la llama caliente a la fría; el equilibrio calor generado/perdido la sostiene. La transición ocurrió a ~1200 K de temperatura máxima en los tres combustibles.\n• Con helio a 3 atm aparece una tercera etapa (~950 K → ~770 K); hay dos modos cuasi-estables: «tibia» (NTC) y «fría».\n• Extinción: la de la llama caliente es parecida entre combustibles; la de la llama fría depende del peso molecular (alcanos más largos: llama más caliente, menor diámetro de extinción). Con la presión: ≤1 atm dos etapas, 1.25 atm ciclos repetidos, 3 atm llama tibia estable.\n• Gotas de 0.5 mm: por simulación, el ozono permite llama fría directa entre una concentración mínima y una máxima; cerca del límite la llama oscila.\nAportes (metadatos): seguridad contra incendios en naves y comprensión de la combustión a baja temperatura (detonación, eficiencia, emisiones).\nNo encontré en los documentos leídos los resultados específicos del forzamiento 3-D.\n\nHALLAZGOS SOBRE EL FUEGO EN MICROGRAVEDAD\n• FLEX (ISS, 2011): primera observación de llamas frías en gotas de n-heptano; combustión en dos etapas (caliente → fría).\n• n-dodecano a 2.75 atm con helio: acuerdo cualitativo con la predicción de tres etapas.\n\nPROBLEMAS Y SOLUCIONES\n• Llama fría directa en gotas pequeñas sin llama caliente: difícil sin ozono; con ozono, posible por simulación (falta prueba experimental).\n• Cerca del límite la llama no se estabiliza y oscila; se atribuye a la cinética de QOOH y a la fuga de combustible. No se resuelve.\n• Los modelos 1D no capturan la flotabilidad en 1 g; se usó un modelo 2D.",
  "arbol": [
   {
    "titulo": "1. Qué es una llama fría",
    "url": "datos/PSI-117/interpretado/libro.html#c1",
    "hijos": [
     {
      "titulo": "Presentación general, diap. 3",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=3"
     },
     {
      "titulo": "Presentación general, diap. 4",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=4"
     },
     {
      "titulo": "Presentación oscilatoria, diap. 2 (motivación)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf#page=2"
     }
    ]
   },
   {
    "titulo": "2. FLEX y la combustión «anómala»",
    "url": "datos/PSI-117/interpretado/libro.html#c2",
    "hijos": [
     {
      "titulo": "Presentación de tres etapas, diap. 2 (FLEX)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf#page=2"
     },
     {
      "titulo": "Presentación general, diap. 32",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=32"
     }
    ]
   },
   {
    "titulo": "3. Qué sostiene la llama fría",
    "url": "datos/PSI-117/interpretado/libro.html#c3",
    "hijos": [
     {
      "titulo": "Presentación general, diap. 7",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=7"
     },
     {
      "titulo": "Presentación de extinción, resumen (diap. 16)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=16"
     }
    ]
   },
   {
    "titulo": "4. Tres etapas con helio y presión",
    "url": "datos/PSI-117/interpretado/libro.html#c4",
    "hijos": [
     {
      "titulo": "Presentación general, diap. 13 (helio)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=13"
     },
     {
      "titulo": "Presentación de tres etapas, resumen (diap. 17)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf#page=17"
     },
     {
      "titulo": "Presentación de tres etapas, diap. 21 (FLEX 1256)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf#page=21"
     }
    ]
   },
   {
    "titulo": "5. Extinción: combustible y presión",
    "url": "datos/PSI-117/interpretado/libro.html#c5",
    "hijos": [
     {
      "titulo": "Presentación de extinción, diap. 12 (presión)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=12"
     },
     {
      "titulo": "Presentación de extinción, diap. 13 (multiciclo)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=13"
     },
     {
      "titulo": "Presentación de extinción, diap. 15",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=15"
     },
     {
      "titulo": "Presentación de extinción, resumen (diap. 16)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf#page=16"
     }
    ]
   },
   {
    "titulo": "6. Gotas pequeñas y ozono",
    "url": "datos/PSI-117/interpretado/libro.html#c6",
    "hijos": [
     {
      "titulo": "Tesis, cap. 6 (ozono), p. 154",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Tesis, 6.5 conclusiones, p. 184",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Presentación general, diap. 23 (ozono)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=23"
     },
     {
      "titulo": "Presentación oscilatoria, diap. 5",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf#page=5"
     }
    ]
   },
   {
    "titulo": "7. Llamas oscilatorias",
    "url": "datos/PSI-117/interpretado/libro.html#c7",
    "hijos": [
     {
      "titulo": "Presentación oscilatoria, resumen (diap. 13)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf#page=13"
     },
     {
      "titulo": "Tesis, cap. 7 (oscilatorias), p. 193",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Tesis, 7.5 conclusiones, p. 210",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     }
    ]
   },
   {
    "titulo": "8. Simulación en 1 g: contraflujo y flotabilidad",
    "url": "datos/PSI-117/interpretado/libro.html#c8",
    "hijos": [
     {
      "titulo": "Presentación general, diap. 26 (contraflujo)",
      "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf#page=26"
     }
    ]
   },
   {
    "titulo": "9. Límites y lo no resuelto",
    "url": "datos/PSI-117/interpretado/libro.html#c9",
    "hijos": [
     {
      "titulo": "Tesis, 6.5 conclusiones, p. 184",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Tesis, 7.5 conclusiones, p. 210",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Tesis, 8.2 contribuciones, p. 220",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     }
    ]
   },
   {
    "titulo": "Presentaciones (4)",
    "url": "",
    "hijos": [
     {
      "titulo": "Llamas frías en el espacio — Seminario PSI 2026",
      "url": "interpretados/seminario-2026.html",
      "hijos": [
       {
        "titulo": "Qué es una llama fría",
        "url": "interpretados/seminario-2026.html#que-es"
       },
       {
        "titulo": "El hallazgo en la ISS (FLEX, 2011)",
        "url": "interpretados/seminario-2026.html#descubrimiento"
       },
       {
        "titulo": "Por qué aparece la llama fría",
        "url": "interpretados/seminario-2026.html#mecanismo"
       },
       {
        "titulo": "Sensibilidad cinética y modelo revisado",
        "url": "interpretados/seminario-2026.html#cinetica"
       },
       {
        "titulo": "Llamas oscilatorias multi-estadio y presión",
        "url": "interpretados/seminario-2026.html#oscilatoria-presion"
       },
       {
        "titulo": "Tres estadios con intercambio de helio (3 atm)",
        "url": "interpretados/seminario-2026.html#helio"
       },
       {
        "titulo": "Gotas pequeñas y ozono",
        "url": "interpretados/seminario-2026.html#ozono"
       },
       {
        "titulo": "Experimentos en tierra: llama difusiva a contraflujo",
        "url": "interpretados/seminario-2026.html#terrestre"
       },
       {
        "titulo": "Resumen y estado actual",
        "url": "interpretados/seminario-2026.html#resumen"
       }
      ]
     },
     {
      "titulo": "Quema en tres estadios: caliente, tibia y fría",
      "url": "interpretados/tres-estadios.html",
      "hijos": [
       {
        "titulo": "Llamas frías disparadas por pérdidas radiativas",
        "url": "interpretados/tres-estadios.html#radiacion"
       },
       {
        "titulo": "La pregunta: más pérdidas difusivas",
        "url": "interpretados/tres-estadios.html#hipotesis"
       },
       {
        "titulo": "Tres estadios con helio a 3 y 5 atm",
        "url": "interpretados/tres-estadios.html#helio"
       },
       {
        "titulo": "Cinética y especies",
        "url": "interpretados/tres-estadios.html#cinetica"
       },
       {
        "titulo": "Confirmación experimental en FLEX",
        "url": "interpretados/tres-estadios.html#experimento"
       },
       {
        "titulo": "Conclusiones",
        "url": "interpretados/tres-estadios.html#conclusion"
       }
      ]
     },
     {
      "titulo": "Características de extinción de gotas de n-alcanos",
      "url": "interpretados/extincion.html",
      "hijos": [
       {
        "titulo": "Modos de quema de tres combustibles",
        "url": "interpretados/extincion.html#modos"
       },
       {
        "titulo": "Modelo y validación",
        "url": "interpretados/extincion.html#modelo"
       },
       {
        "titulo": "Comportamiento a 1 atm en aire",
        "url": "interpretados/extincion.html#1atm"
       },
       {
        "titulo": "Efecto de la presión",
        "url": "interpretados/extincion.html#presion"
       },
       {
        "titulo": "Conclusiones",
        "url": "interpretados/extincion.html#conclusion"
       }
      ]
     },
     {
      "titulo": "Llama fría oscilatoria en gotas submilimétricas",
      "url": "interpretados/oscilatoria.html",
      "hijos": [
       {
        "titulo": "Motivación",
        "url": "interpretados/oscilatoria.html#motivacion"
       },
       {
        "titulo": "Condición simulada",
        "url": "interpretados/oscilatoria.html#condicion"
       },
       {
        "titulo": "Comportamiento observado",
        "url": "interpretados/oscilatoria.html#observacion"
       },
       {
        "titulo": "Cómo empieza la oscilación",
        "url": "interpretados/oscilatoria.html#inicio"
       },
       {
        "titulo": "Papel de la química de baja temperatura",
        "url": "interpretados/oscilatoria.html#quimica"
       },
       {
        "titulo": "Fuga de combustible y conclusión",
        "url": "interpretados/oscilatoria.html#fuga"
       }
      ]
     }
    ]
   },
   {
    "titulo": "Tesis doctoral (M. F. Alam, 2018)",
    "url": "interpretados/tesis.html",
    "hijos": [
     {
      "titulo": "Resumen de la tesis",
      "url": "interpretados/tesis.html#resumen"
     },
     {
      "titulo": "Cap. 2 — Modelo de combustión de gotas en microgravedad",
      "url": "interpretados/tesis.html#modelo"
     },
     {
      "titulo": "Cap. 3 — Xenón como supresor de fuego (contexto)",
      "url": "interpretados/tesis.html#xenon"
     },
     {
      "titulo": "Caps. 4 y 5 — Butanol y sus isómeros (contexto)",
      "url": "interpretados/tesis.html#butanol"
     },
     {
      "titulo": "Cap. 6 — Llama fría asistida por ozono",
      "url": "interpretados/tesis.html#ozono"
     },
     {
      "titulo": "Cap. 7 — Llama fría oscilatoria cerca del límite",
      "url": "interpretados/tesis.html#oscilatoria"
     },
     {
      "titulo": "Cap. 8 — Conclusión",
      "url": "interpretados/tesis.html#conclusion"
     }
    ]
   },
   {
    "titulo": "Datos: gráficas de los CSV",
    "url": "interpretados/datos.html",
    "hijos": [
     {
      "titulo": "d² frente al tiempo",
      "url": "interpretados/datos.html#d2"
     },
     {
      "titulo": "Diámetro de llama",
      "url": "interpretados/datos.html#llama"
     },
     {
      "titulo": "Potencia radiante Q",
      "url": "interpretados/datos.html#q"
     }
    ]
   },
   {
    "titulo": "Publicaciones (10)",
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
    "titulo": "DOI del estudio",
    "url": "https://doi.org/10.60555/gz0q-b577"
   },
   {
    "titulo": "Archivos originales (PDF y CSV)",
    "url": "",
    "hijos": [
     {
      "titulo": "Presentaciones (4 PDF)",
      "url": "",
      "hijos": [
       {
        "titulo": "Extinction Characteristics",
        "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Extinction_Characteristics_TFarouk.pdf"
       },
       {
        "titulo": "Oscillatory Cool Flame",
        "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Oscillatory_Cool_Flame_TFarouk.pdf"
       },
       {
        "titulo": "PSI Users Group — Cool Flames in Space (26-mar-2026)",
        "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_PSI_Users_Group_Cool_Flames_in_Space_03302026.pdf"
       },
       {
        "titulo": "Three Stage Cool Flame",
        "url": "datos/PSI-117/02_presentaciones/PSI-117_Presentations_Three_Stage_Cool_Flame_TFarouk.pdf"
       }
      ]
     },
     {
      "titulo": "Tesis doctoral (PDF)",
      "url": "https://scholarcommons.sc.edu/etd/4737"
     },
     {
      "titulo": "Datos originales (1 CSV)",
      "url": "datos/PSI-117/04_datos_originales/PSI-117_Analyzed_Data_MST_2024_Burning_history_Flame_diameter.csv"
     },
     {
      "titulo": "Datos separados (7 CSV)",
      "url": "",
      "hijos": [
       {
        "titulo": "exp_Q_serie_A.csv",
        "url": "datos/PSI-117/05_datos_separados/exp_Q_serie_A.csv"
       },
       {
        "titulo": "exp_Q_serie_B.csv",
        "url": "datos/PSI-117/05_datos_separados/exp_Q_serie_B.csv"
       },
       {
        "titulo": "exp_diametro2_vs_tiempo.csv",
        "url": "datos/PSI-117/05_datos_separados/exp_diametro2_vs_tiempo.csv"
       },
       {
        "titulo": "exp_diametro_llama_vs_tiempo.csv",
        "url": "datos/PSI-117/05_datos_separados/exp_diametro_llama_vs_tiempo.csv"
       },
       {
        "titulo": "modelo_1atm_do4mm_diametro2.csv",
        "url": "datos/PSI-117/05_datos_separados/modelo_1atm_do4mm_diametro2.csv"
       },
       {
        "titulo": "modelo_1atm_do4mm_diametro_llama.csv",
        "url": "datos/PSI-117/05_datos_separados/modelo_1atm_do4mm_diametro_llama.csv"
       },
       {
        "titulo": "modelo_1atm_do4mm_radiancia_Q.csv",
        "url": "datos/PSI-117/05_datos_separados/modelo_1atm_do4mm_radiancia_Q.csv"
       }
      ]
     },
     {
      "titulo": "Metadatos ISA-Tab",
      "url": "datos/PSI-117/01_metadata/i_Investigation.txt"
     }
    ]
   }
  ],
  "enfoquePuntos": [
   "Modelo CFD 3-D en OpenFOAM de llamas frías de n-alcanos en microgravedad (flujo, química de baja temperatura, calor, masa y radiación), validado con FLEX.",
   "Tres tipos de forzamiento: solo convección, flujo de calor impuesto, y ambos; en gotas de 1–4 mm y de ~0.5 mm.",
   "Barridos de amplitud, frecuencia, composición (con ozono) y presión → mapas de estabilidad que guían futuros experimentos."
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
  "cuando": "Del 01-nov-2021 al 30-jun-2024",
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
    "nombre": "Subvención NASA 80NSSC22K0083",
    "rol": "",
    "institucion": "Marshall Space Flight Center (MSFC)"
   },
   {
    "nombre": "Colaboradores no financiados: Aleksandra Radlińska, Peter Collins, Simon Delattre, Brett A. Bednarcyk, Evan J. Pineda, Ibrahim Kaleel",
    "rol": "",
    "institucion": ""
   }
  ],
  "biografia": "Micromechanics-based Modeling of Cement Solidified in the Microgravity\nCentro: Marshall Space Flight Center (MSFC)\nAgencia: NASA, PSI grant",
  "mision": "This research provides the first reference simulation data and a practical route to predict how cement (including regolith‑based mixes) behaves when fabricated in space, which can inform Artemis‑aligned or other space-based habitat concepts and construction logistics where transporting bulk materials is prohibitive.\nOn Earth, the deep-learning-assisted reconstruction and micromechanics workflow developed can be applied to other multiphase materials, enabling materials-by-design even when only a limited samples are available. By clarifying how processing conditions in microgravity affect cement structure and performance, such as the ~70% porosity and plate-like portlandite observed in ISS samples, this work improves predictive models for optimizing mix designs and curing conditions in constrained environments. These advances also benefit low-resource or extreme-environment construction on Earth and contribute more broadly to the ICME community.",
  "sinopsis": "QUÉ SE HIZO\nCon datos de cemento hidratado en microgravedad de la base PSI (imágenes SEM/BSE de la investigación MICS, PSI-84), se reconstruyeron microestructuras 3D con aprendizaje profundo, se compararon con datos de micro-CT y se introdujeron en NASMAT para predecir propiedades mecánicas del cemento hidratado en la ISS frente al de tierra.\n\nENFOQUE Y RESULTADOS\nEnfoque (metadatos e informe final): el código MAC/GMC y NASMAT (HFGMC) calcularon propiedades homogeneizadas a partir de volúmenes 3D reconstruidos; un script en Python automatizó el flujo y los análisis se hicieron en servidores del NAS. El micro-CT se midió con un Zeiss Xradia 620 Versa (muestras de ~10 × 6 × 6 mm, ~999 millones de vóxeles, resolución ~2 μm).\nResultados del informe final:\n• La porosidad medida por MIP fue 48.4 % (1g) y 69.4 % (μg).\n• El módulo de Young del cemento hidratado en microgravedad se predijo 42 % menor que el de tierra; el informe lo describe como la primera vez que se predice.\n• Se desarrolló un flujo de trabajo que integra los subvolúmenes reconstruidos en NASMAT como RVE.\nResultados de la tesis de DiPerna (cap. 3 y 4): en los volúmenes 3D reconstruidos y en el micro-CT, las muestras de microgravedad mostraron poros de distribución más ancha que las de tierra. Los poros del micro-CT salieron mayores (~100s de micras) que los de la reconstrucción (~10s de micras), diferencia que la tesis atribuye a la baja resolución del micro-CT.\n\nHALLAZGOS EN MICROGRAVEDAD\n• Más porosidad en las muestras de la ISS que en las de tierra (48.4 % vs 69.4 % por MIP).\n• Menor módulo de Young predicho en microgravedad (−42 %).\n• Poros de distribución más ancha en las muestras de microgravedad (tesis).\n\nPROBLEMAS Y SOLUCIONES\n• El análisis 2D no fue viable por la alta porosidad → se usaron RVE 3D.\n• NASMAT tenía límites de memoria para un RVE de 512 × 512 × 512 vóxeles → se dividió en subvolúmenes.\n• Tesis: no se logró una comparación cuantitativa directa entre la reconstrucción 3D y el micro-CT por la baja resolución de este; propone mejorar la segmentación o usar otro método de comparación.\n• La sección «Cambios/Problemas» del informe final dice N/A en todos sus rubros.",
  "arbol": [
   {
    "titulo": "Informe final de la subvención (PDF, 27 págs.)",
    "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf",
    "hijos": [
     {
      "titulo": "Objetivo del proyecto (pág. 1)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=1"
     },
     {
      "titulo": "Logros frente a los objetivos (pág. 2)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=2"
     },
     {
      "titulo": "Reconstrucción 3D con aprendizaje profundo (pág. 14)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=14"
     },
     {
      "titulo": "Integración en NASMAT y límite de memoria (pág. 20)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=20"
     },
     {
      "titulo": "Módulo de Young predicho (pág. 21)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=21"
     },
     {
      "titulo": "Productos: publicaciones y presentaciones (pág. 23)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=23"
     },
     {
      "titulo": "Participantes y colaboradores (pág. 24)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=24"
     },
     {
      "titulo": "Cambios/Problemas (pág. 25)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=25"
     },
     {
      "titulo": "Impacto (pág. 25)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=25"
     },
     {
      "titulo": "Referencias (pág. 26)",
      "url": "datos/PSI-174_paquete/02_informe_final/PSI-174_Reports_FinalReport_2024_80NSSC22K0083.pdf#page=26"
     }
    ]
   },
   {
    "titulo": "Tesis de Claire DiPerna (PDF, 43 págs.)",
    "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf",
    "hijos": [
     {
      "titulo": "Resumen (pág. 2)",
      "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=2"
     },
     {
      "titulo": "Cap. 1 — Introduction (pág. 9)",
      "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=9"
     },
     {
      "titulo": "Cap. 2 — Background (pág. 11)",
      "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=11"
     },
     {
      "titulo": "Cap. 3 — Validación de la reconstrucción 3D por distribución de poros (pág. 16)",
      "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=16"
     },
     {
      "titulo": "Cap. 4 — Conclusiones y trabajo futuro (pág. 36)",
      "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=36"
     },
     {
      "titulo": "Apéndice A — Código MATLAB (pág. 41)",
      "url": "datos/PSI-174_paquete/03_tesis/PSI-174_Reports_DiPerna_Thesis.pdf#page=41"
     }
    ]
   },
   {
    "titulo": "Metadatos (texto)",
    "url": "datos/PSI-174_paquete/01_metadata/PSI-174_metadata.txt"
   }
  ]
 }
];
