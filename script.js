{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww29200\viewh17840\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("semanticFilterTest").addEventListener("submit", function(event) \{\
  event.preventDefault();\
\
  // Get user answers\
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;\
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;\
\
  // Add more questions here\
\
  // Scoring Logic (simplified for this mockup)\
  let filterType = "";\
\
  if ((q1 === "A" || q1 === "C") && q2 === "A") \{\
    filterType = "Heuristic Filter: You rely on quick judgments and mental shortcuts to make sense of social situations.";\
  \} else if (q1 === "B" && q2 === "D") \{\
    filterType = "Contextual Filter: You take time to understand situations and don\'92t rely on first impressions.";\
  \} else \{\
    filterType = "Balanced Filter: You are flexible in interpreting social interactions and adjust your understanding.";\
  \}\
\
  // Display result\
  document.getElementById("filterResult").textContent = filterType;\
  document.getElementById("result").classList.remove("hidden");\
\});\
}