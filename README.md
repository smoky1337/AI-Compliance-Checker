# AI Decision Tree Compliance Checker

This repository contains a web-based decision tree prototype for early-stage compliance assessment of AI use cases in financial organizations. It translates EU AI Act and DORA considerations into a guided, deterministic assessment flow with traceable decision paths, obligation checks, and PDF export.

The prototype accompanies the paper *A Design Science Research Approach to AI Compliance in Finance: Building and Evaluating a Decision Tree Compliance Checker*. (LINK)

### Abstract
'''markdown
Artificial intelligence (AI) is increasingly adopted in financial services, but its integration is shaped by intersecting regulatory requirements under the EU AI Act and the Digital Operational Resilience Act (DORA). Existing research and tools remain fragmented: AI-Act-oriented solutions mainly support initial classification, whereas DORA-oriented tools focus on providing operational workflow and evidence management capabilities but rarely integrate AI-specific governance logic. This paper addresses this gap by designing, implementing, and evaluating a decision-tree-based compliance checker for AI use cases in financial organizations. Following a design science research approach, we derived ten design requirements from four expert interviews and complementary literature, consolidated them into four design principles, and instantiated them in a web-based prototype. The artifact combines AI Act classification logic with DORA-related resilience, third-party, and lifecycle considerations in one integrated assessment flow. The artifact was evaluated through a formative demonstration with four domain experts and a summative field evaluation with ten participants using realistic financial-sector scenarios. The results show that the artifact is particularly useful for structuring regulatory complexity, making decision paths traceable, and generating governance-oriented outputs for documentation and review. At the same time, the findings point to remaining limits regarding accessibility without prior regulatory knowledge and the handling of specialized edge cases. Overall, the study contributes both a usable compliance artifact and transferable design knowledge for governance- oriented decision support in highly regulated environments.

'''
## Purpose

The tool helps project teams, compliance functions, auditors, information security, and data protection stakeholders structure an initial assessment of AI use cases. It is designed to:

- identify whether an AI use case falls within EU AI Act scope;
- flag potentially prohibited practices and high-risk indicators;
- derive concrete obligation packages from classification outcomes;
- assess DORA relevance for financial-sector deployment contexts;
- consider operational resilience, third-party ICT dependencies, external AI services, and incident-related requirements;
- produce an auditable decision path and a PDF summary for governance handover.

This is a decision-support prototype, not legal advice.

## Features

- Guided binary decision tree for EU AI Act and DORA assessment.
- Separate but integrated AI Act and DORA branches.
- Contextual hints, examples, and links to legal references.
- Obligation packages with requirement-level checks.
- Deduplication of repeated requirements across paths.
- Consistency checks for contradictory paths and governance locks.
- German and English localization.
- Local assessment metadata and revision versioning.
- PDF export with assessment metadata, decision path, and missing requirements grouped by regulation and article.

## Research Background

The artifact follows a design science research approach. The solution was derived from expert interviews and literature, resulting in ten design requirements:

- early-stage scoping;
- deterministic decision logic;
- auditability and accountability;
- obligation mapping;
- evidence guidance;
- reasoning traceability;
- ambiguity handling;
- governance handover;
- maintainability and versioning;
- usability and consistency.

These requirements were consolidated into four design principles:

- deterministic and explainable decision logic;
- actionable compliance outcomes with evidence guidance;
- organizational embedding and governance handover;
- sustainable and trustworthy operation under regulatory change.

The implementation reflects these principles through a modular wizard architecture that separates decision logic, obligation packages, localization, and PDF export.

## Tech Stack

- React 19
- Vite 7
- `@xyflow/react`
- `jspdf`
- `jspdf-autotable`
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx                  Main wizard UI, navigation, path handling, export trigger
  decisionTreeModel.js     Decision tree, obligation catalog, legal references, validation helpers
  i18n.js                  Locale loading and translation helper
  pdfExport.js             PDF generation logic
  locales/
    de/                    German UI and model text
    en/                    English UI and model text
```

## Assessment Flow

The assessment starts with basic metadata and language selection. Users then move through the EU AI Act branch, covering AI-system scope, prohibited practices, high-risk classification, transparency, governance, and related obligations. The DORA branch then checks financial-sector applicability, critical or important functions, operational resilience, ICT third-party dependencies, external AI services, business continuity, incident handling, and communications.

Leaf nodes trigger obligation packages. These packages are converted into sequential requirement checks, so the tool does not merely classify a use case and then wander off smugly. It asks whether required controls, documents, approvals, or evidence items are already in place and records missing requirements for export.

## Output

The PDF export includes:

- assessment metadata;
- creator or team name;
- assessment revision;
- timestamp;
- reconstructed decision path;
- answers given during the walkthrough;
- missing requirements grouped by regulation and article;
- responsibility columns for governance follow-up.

The export is intended as a governance and audit handover artifact.

## Limitations

The prototype supports structured first-line assessment, documentation, and review preparation. It does not guarantee legal compliance, cover every specialized edge case, or replace expert judgment. In particular, scenarios involving general-purpose AI, systemic-risk models, complex provider/deployer constellations, or unusual financial-sector workflows may require additional review.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
