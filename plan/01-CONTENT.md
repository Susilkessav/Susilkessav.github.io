# Content — Single Source of Truth

Every fact below is copied from `RESUME_RULES.md` and `RESUME_TOOL_STACK.md`. **Do not invent, relabel, or round.** If something needs to change, change it here first, then in the HTML.

---

## 1. Identity & contact

| Field | Value |
|-------|-------|
| Name | **Susilkessav Seshadri Bhuvaneswari** |
| Location | Boston, MA |
| Phone | +1 (617) 396-1430 |
| Email (primary) | seshadribhuvaneswa.s@northeastern.edu |
| Email (secondary) | susilkessavsb@gmail.com |

*Both emails are shown on the site (confirmed).*
| LinkedIn | https://linkedin.com/in/susilkessav |
| GitHub | https://github.com/Susilkessav |

---

## 2. Hero

- **Name:** Susilkessav Seshadri Bhuvaneswari
- **Tagline (pick one, both truthful & pool-backed):**
  - A) `Data & AI Engineer — pipelines, RAG systems, and agents that ship.`
  - B) `Data Engineer | AI/LLM Engineer — PySpark, Airflow, RAG, and local-first agents`
- **Sub-line:** Boston, MA · MS in Data Analytics Engineering @ Northeastern
- **CTAs:** `View Projects` · `Download Résumé` · `Email Me`
- **Social icons:** GitHub, LinkedIn, Email

---

## 3. About (short bio — drafted from pools, no new claims)

> I'm a data and AI engineer finishing an MS in Data Analytics Engineering at Northeastern. I've built production data platforms (15+ pipelines moving 50M+ daily records at 99.9% SLA at Getinge), NLP/security analytics services (CISAI), and ML model-serving pipelines on AWS (EasyCrop). Lately I focus on retrieval-augmented and agentic AI — local-first LLM agents, RAG systems with observability, and real-time streaming applications.

*This is a portfolio "About," not a resume Summary — the resume no-summary rule doesn't apply to the website. Still keep it to verified claims only.*

---

## 4. Skills (grouped — from RESUME_TOOL_STACK.md Tab 2)

- **Languages:** Python, SQL, JavaScript, TypeScript, Node.js, Java, R, Bash
- **Data Engineering:** Spark, PySpark, Spark SQL, Apache Beam, Airflow, dbt, ETL/ELT, Delta Lake, Parquet, medallion architecture, data contracts, schema drift detection, Great Expectations, star schema
- **Cloud & Platforms:** AWS (S3, Lambda, SageMaker), Azure (Synapse, Databricks, Fabric), GCP (GKE, Compute Engine), Vercel
- **Databases:** PostgreSQL, MySQL, MongoDB, Redis, SQLite, ChromaDB, SAP HANA, SQL Server, Alembic
- **ML & Analytics:** TensorFlow, PyTorch, CNNs, XGBoost, Random Forest, MLflow, ONNX, NLP, computer vision, anomaly detection, feature engineering, model quantization
- **GenAI & Agents:** LangChain, RAG, LLM agents, OpenAI API, GPT-4o, Anthropic API, Ollama, Hugging Face, SentenceTransformers, embeddings, vector search, prompt engineering, Langfuse, RAGAS, PEFT, LoRA
- **Backend & APIs:** FastAPI, Flask, Express.js, REST APIs, GraphQL, WebSockets, gRPC, JWT, RBAC, OAuth
- **Frontend & BI:** React, Next.js, HTML, CSS, Streamlit, Power BI, Tableau, D3
- **DevOps & Testing:** Docker, Docker Hub, Kubernetes, GitHub Actions, CI/CD, Terraform, Caddy, pytest, monitoring/alerting

---

## 5. Experience (titles, dates, locations are LOCKED — do not relabel)

### Getinge — Data Engineer Intern
*Wayne, United States · Jul 2024 – Sep 2025*
- Designed 15+ Python data pipelines on Azure Synapse and Databricks, ingesting 50M+ daily records from REST APIs at 99.9% SLA.
- Architected a medallion Bronze–Silver–Gold pipeline with data contracts and schema-validated Parquet, stopping schema drift across 100+ ML tables.
- Integrated Microsoft Fabric and Databricks Metastore for governance, enabling cross-workspace data lineage across 100+ tables.
- Developed integration workflows from 8 source systems into schema-validated Bronze datasets using Python and SSMS with retry handling.
- Deployed Great Expectations schema-drift detection across 100+ tables, cutting data triage 20% and enforcing compliance before model retraining.
- Reduced service failure rates 40% across 12 production workflows via idempotent retries, contract checks, and automated alerting.

### CISAI — Software Developer Intern
*Amritapuri, India · Aug 2022 – Feb 2023*
- Fine-tuned LLM embedding models using LoRA and PEFT on domain data, boosting NLP classification accuracy 10%.
- Modeled anomaly detection over streaming security logs, improving early outlier identification 25% and cutting false-positive SIEM alerts.
- Built an automated Python service streaming 10,000+ posts daily into Airflow ELT, powering NLP classification and SIEM enrichment.
- Engineered log-parsing/scoring services turning raw telemetry into structured event records, cutting incident triage time 30%.

### EasyCrop Tech — AI Engineer Intern
*Hyderabad, India · Dec 2021 – Jun 2022*
- Configured GitHub Actions CI/CD with Docker and pytest, achieving 88% test coverage across unit, integration, and e2e tests.
- Automated model releases via S3 event triggers, Lambda, and SageMaker pipelines, saving 8+ engineering hours per deployment cycle.
- Built an AWS SageMaker serving pipeline processing 1,000+ images daily at sub-150ms P95 latency via Dockerized REST endpoints.
- Trained TensorFlow CNNs across 10,000+ labeled images with augmentation pipelines versioned in Docker, reaching 95% precision.

---

## 6. Projects

**Card fields:** name · one-line description · tech tags · GitHub link · (live demo if any) · cover image.
Project names are LOCKED to their real repo names.

### 1. Valorant_CLI — Local-first AI Coaching Agent
- **Repo:** https://github.com/Susilkessav/Valorant_CLI
- **Desc:** Local-first Valorant coaching CLI: a local Ollama LLM grounded in a RAG knowledge base (342 docs across 22 agents, 14 maps, 8 meta entries), a 9-class intent router, a 10-analyzer post-game evaluation harness, and a deterministic fact-checker that blocks fabricated ability claims.
- **Tech:** Python · Ollama (qwen3:8b) · ChromaDB · SQLite · Alembic · prompt_toolkit · RAG · GitHub Actions · pytest

### 2. AI Sports Commentary Engine — Real-time LLM Commentary
- **Repo:** https://github.com/Susilkessav/AI-Sports-Commentary-Engine
- **Desc:** Real-time sports broadcasting system with a 4-service microarchitecture (ingestion producer, streaming enricher, LLM commentator, FastAPI dashboard) wired through Kafka/Redpanda, computing live win-probability and per-play hype scores to set commentary tone.
- **Tech:** Python · Kafka · Redpanda · FastAPI · WebSockets · LLMs · Docker · Caddy · pytest

### 3. Atlas — Full-Stack Task & Workflow Platform
- **Repo:** https://github.com/Susilkessav/Atlas
- **Desc:** Full-stack SaaS platform: FastAPI + React, 20+ REST endpoints with JWT auth and RBAC isolation, PostgreSQL + Redis caching (35% lower latency), Dockerized with GitHub Actions CI/CD and 88% test coverage.
- **Tech:** Python · FastAPI · React · PostgreSQL · Redis · JWT · RBAC · Docker · GitHub Actions · pytest

### 4. Amazon Automotive MLOps — RAG + Observability
- **Repo:** https://github.com/Susilkessav/amazon-automotive-mlops
- **Desc:** End-to-end MLOps RAG pipeline over Amazon automotive reviews: Airflow ingestion, ChromaDB vector retrieval, a Flask serving layer, OpenAI moderation guardrails, and Langfuse observability on every call, with a Dockerized GKE/Compute Engine deployment blueprint.
- **Tech:** Python · LangChain · ChromaDB · SentenceTransformers · Airflow · Langfuse · Flask · Docker · GCP

### 5. Voice Scheduling Agent — Conversational Calendar Agent
- **Repo:** https://github.com/Susilkessav/Voice-Scheduling-Agent
- **Live demo:** *deployed on Vercel — add URL if available (decision)*
- **Desc:** Real-time voice agent (Vapi + GPT-4o) that books real Google Calendar events through natural conversation, with live transcript display and a volume-reactive voice orb. OAuth calendar integration handled end-to-end; deployed on Vercel.
- **Tech:** TypeScript · Next.js · Vapi · GPT-4o · Google Calendar API · OAuth · Vercel

### 6. MSD Continuous Manufacturing — Process Analytics
- **Repo:** https://github.com/Susilkessav/msd-continuous-manufacturing
- **Desc:** End-to-end analytics for continuous pharma manufacturing: resamples multi-sensor feeder/blender/tablet-press streams into a unified 1 Hz table, fits RTD FIR kernels across 3 stages, and forecasts tablet content-uniformity quality with lag-search + linear baselines.
- **Tech:** Python · pandas · NumPy · scikit-learn · Parquet (pyarrow) · matplotlib

---

## 7. Publications

- **Peer-to-Peer Energy Trading Using Blockchain in Microgrid** — IEEE (2023)
  - *Add DOI / IEEE Xplore link if available (optional).*

---

## 8. Education

| School | Degree | Location | Dates |
|--------|--------|----------|-------|
| Northeastern University | M.S. in Data Analytics Engineering | Boston, MA | Sep 2023 – Dec 2025 |
| Amrita Vishwa Vidyapeetham | B.Tech in Electrical & Computer Engineering | Kerala, India | Aug 2019 – May 2023 |

---

## 9. Footer / Contact

- Headline: "Let's build something." (or similar)
- Buttons: Email · LinkedIn · GitHub · Download Résumé
- Copyright line: © 2026 Susilkessav Seshadri Bhuvaneswari
