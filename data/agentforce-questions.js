// ============================================================
// Agentforce Specialist — Question Bank
// Parsed from agentforce_questions.md by scripts/parse_agentforce.py
// 131 questions across 4 sections (explanations intentionally blank)
// ============================================================

const AGENTFORCE_CATEGORIES = {
  AGENTFORCE_CONCEPTS: "Agentforce Concepts",
  PROMPT_ENGINEERING: "Prompt Engineering",
  AGENTFORCE_AND_DATA_360: "Agentforce and Data 360",
  AGENT_DEPLOYMENT_AND_TESTING: "Agent Deployment and Testing"
};

const AGENTFORCE_SECTIONS = [
  { name: "Agentforce Concepts", weight: 33 },
  { name: "Prompt Engineering", weight: 21 },
  { name: "Agentforce and Data 360", weight: 19 },
  { name: "Agent Deployment and Testing", weight: 27 }
];

const AGENTFORCE_QUESTIONS = [
  {
    "id": 1,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers needs to create Data Cloud reports to understand agent behavior. Which data lake object (DLO) represents an overarching container capturing contiguous interactions with one or more AI agents?",
    "options": [
      {
        "letter": "A",
        "text": "AIAgentSession"
      },
      {
        "letter": "B",
        "text": "AIAgentInteraction"
      },
      {
        "letter": "C",
        "text": "AIAgentInteractionMessage"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 2,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) has registered an external service and created a template-triggered prompt flow that invokes the external service to fetch data from a REST API. UC now needs to make the response data from the external service usable inside a prompt template as a merge field when the template runs. How should UC meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use the 'Add Prompt Instructions' flow element."
      },
      {
        "letter": "B",
        "text": "Use External Service Record merge fields."
      },
      {
        "letter": "C",
        "text": "Convert the JSON to an XML merge field."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 3,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers (UC) wants to deploy an Agentforce Service Agent to support customers via a web experience. UC uses a Digital Experience site and wants to enable messaging for logged in users. The customer needs to pass the membership number to the agent for which a pre chat variable is available. What is a required step to connect the agent to the Digital Experience site using Messaging for In-App and Web?",
    "options": [
      {
        "letter": "A",
        "text": "Configure MuleSoft to establish a secure API tunnel between the agent and the Digital Experience site."
      },
      {
        "letter": "B",
        "text": "Configure a messaging Lightning web component using standard or custom Lightning Type for Agentforce."
      },
      {
        "letter": "C",
        "text": "Create an Omni-Channel flow that routes messages to the agent."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 4,
    "category": "Agentforce Concepts",
    "text": "Global Finance Corp (GFC) is expanding its Agentforce rollout from a basic customer service agent to a suite of specialized agents handling Fraud Detection, Loan Origination, and Billing. GFC operates entirely within a single, global Salesforce instance. The CIO wants to ensure that as the number of specialized agents scales, the company maintains strict, centralized control over security guardrails and user context, ensuring customers do not have to repeat themselves when their request spans multiple departments. What is a reasonable architectural approach to achieve this level of scalability and control?",
    "options": [
      {
        "letter": "A",
        "text": "Implement a Multi-Org, Multi-Agent (MOMA) architecture connected via the Agent- to-Agent (A2A) protocol to safely isolate each department's agent."
      },
      {
        "letter": "B",
        "text": "Deploy a Single-Org, Multi-Agent (SOMA) architecture using a primary Orchestrator agent to manage shared context natively and route sub-tasks to specialized agents."
      },
      {
        "letter": "C",
        "text": "Use the Model Context Protocol (MCP) to federate multiple external, third-party agents directly into the existing Agentforce Service console."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 5,
    "category": "Agentforce Concepts",
    "text": "Universal Containers (UC) uses an agent to handle customer service inquiries. UC recently partnered with an external logistics provider that operates its own autonomous AI agent. When a customer requests a complex international shipping reroute, the UC Agent needs to securely communicate, negotiate routing terms, and delegate execution of the reroute directly to the logistics provider's AI agent. Which open standard multi-agent protocol is specifically designed to facilitate this autonomous task delegation and negotiation between independent AI agents?",
    "options": [
      {
        "letter": "A",
        "text": "Agent-to-Agent (A2A) Protocol"
      },
      {
        "letter": "B",
        "text": "Model Context Protocol (MCP)"
      },
      {
        "letter": "C",
        "text": "OpenAPI Specification (OAS)"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 6,
    "category": "Agentforce Concepts",
    "text": "Cloud Kicks wants to integrate its agent with its custom website. The goal is for customers to interact with the custom agent chat interface. Which approach provides the framework for the custom web application to communicate with the agent?",
    "options": [
      {
        "letter": "A",
        "text": "Agent API"
      },
      {
        "letter": "B",
        "text": "Agent-to-Agent (A2A)"
      },
      {
        "letter": "C",
        "text": "Model Context Protocol (MCP)"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 7,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is building an Agentforce Service Agent to handle order cancellations. The Specialist needs to ensure that a critical \"Check Cancellation Eligibility\" action is executed deterministically on every relevant turn, without relying on the reasoning engine's discretion to choose the tool. During a code review, a junior developer asks why the Specialist called the action using the run @actions.name command instead of simply listing the action under the reasoning actions: block. What must the Specialist explain regarding the difference between these two invocation methods?",
    "options": [
      {
        "letter": "A",
        "text": "Both patterns execute the action on every turn automatically; the difference is purely syntactic, as the run command is simply the newer notation for Agent Script."
      },
      {
        "letter": "B",
        "text": "The run command is only valid when nested inside reasoning actions: blocks to pass parameters; the Specialist must list it under reasoning actions: for the LLM to access it."
      },
      {
        "letter": "C",
        "text": "Listing an action under reasoning actions: makes it a subjective tool that the LLM decides whether to call; calling it with the run command forces guaranteed execution every time."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 8,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers (UC) wants to deploy an Agentforce Service Agent to support customers via a web experience. UC uses a Digital Experience site and wants to enable messaging for logged-in users. The customer needs to pass the membership number to the agent for which a pre-chat variable is available. What is a required step to connect the agent to the Digital Experience site using Enhanced chat?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a messaging Lightning web component using standard or custom Lightning Type for Agentforce."
      },
      {
        "letter": "B",
        "text": "Configure MuleSoft to establish a secure API tunnel between the agent and the Digital Experience site."
      },
      {
        "letter": "C",
        "text": "Create an Omni-Channel flow that routes messages to the agent."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 9,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers (UC) is implementing an Agentforce Service Agent to assist customers. The agent must be able to retrieve information from proprietary policy documents stored as PDFs and ensure its responses are grounded exclusively in this approved company data, rather than generic LLM knowledge. The project team requires the fastest and least complex setup possible, minimizing manual configuration of backend data components. Which approach should the Agentforce Specialist take to satisfy these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Upload the PDFs to Salesforce Files and configure the agent's Topic Instructions to dynamically read the files at runtime."
      },
      {
        "letter": "B",
        "text": "Manually upload the PDFs into Data 360 as Unstructured Data Model Object (UDMO) type and select \"create a new Agentforce Data Library mapping\" option."
      },
      {
        "letter": "C",
        "text": "Create an Agentforce Data Library (ADL) and upload the PDF policy documents directly to the library."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 10,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) needs to create a sales email with a custom prompt template. UC needs to ground on the following data: Opportunity Products Events near the customer Tone and voice examples How should UC obtain related items?",
    "options": [
      {
        "letter": "A",
        "text": "Utilize a standard email template and manually insert the required data fields."
      },
      {
        "letter": "B",
        "text": "Create a Flex template that takes the records in question as inputs."
      },
      {
        "letter": "C",
        "text": "Call a prompt-initiated flow to fetch and ground the required data."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 11,
    "category": "Agentforce Concepts",
    "text": "An Agentforce Specialist is building a multi-step onboarding workflow using agent actions. The workflow includes four sequential steps: account creation, profile setup, settings configuration, and finalization. After the create_account action executes successfully, the system must immediately send a verification email without requiring an additional user interaction. Which approach should the specialist use to ensure the verification email is automatically triggered after account creation?",
    "options": [
      {
        "letter": "A",
        "text": "Add the send_verification logic inside the procedural instructions so it executes before profile setup finishes."
      },
      {
        "letter": "B",
        "text": "Configure the send_verification action to be available when account_created = True and wait for the agent to call it in the next step."
      },
      {
        "letter": "C",
        "text": "Use the keyword 'run' within the create_account action to chain the send_verification action as a follow-up."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 12,
    "category": "Agentforce Concepts",
    "text": "An Agentforce Specialist is creating a custom action in Agentforce. Which option is available for the Agentforce Specialist to choose for the custom agent action?",
    "options": [
      {
        "letter": "A",
        "text": "Flows"
      },
      {
        "letter": "B",
        "text": "Apex trigger"
      },
      {
        "letter": "C",
        "text": "SOQL"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 13,
    "category": "Agentforce Concepts",
    "text": "Pinnacle Healthcare is enhancing its agent and Agent Script implementation to improve patient scheduling and care coordination. The head of compliance has identified a need to ensure deterministic behavior for agents when verifying patient information before scheduling appointments. The process must enforce compliance by gating downstream actions (for example, scheduling) until patient verification is complete. What is the most appropriate approach the Agentforce Specialist should recommend while adhering to standard configuration guidelines?",
    "options": [
      {
        "letter": "A",
        "text": "Use template expressions in the action descriptions to dynamically display instructions based on the verification status."
      },
      {
        "letter": "B",
        "text": "Use '@utils.setVariables' to update a mutable session variable for patient verification status and gate scheduling actions with 'available when'."
      },
      {
        "letter": "C",
        "text": "Call a custom Apex '@InvocableMethod' to enforce the verification logic and dynamically update the scheduling action availability."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 14,
    "category": "Agent Deployment and Testing",
    "text": "Which useful metrics does Agentforce Observability provide to a customer service team related to a Customer Service Agent?",
    "options": [
      {
        "letter": "A",
        "text": "Call deflection rates, cost per interaction, and memory consumption"
      },
      {
        "letter": "B",
        "text": "Call deflection rates, productivity, and abandoned session rates"
      },
      {
        "letter": "C",
        "text": "Call deflection rates, abandoned session rates, and user intent ratings"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 15,
    "category": "Agent Deployment and Testing",
    "text": "Cloud Kicks (CK) is developing a prompt template in a sandbox and has created multiple saved versions during testing. CK is now preparing to move the template to production. What is a consideration when deploying the template to production?",
    "options": [
      {
        "letter": "A",
        "text": "Deploying a template requires all previous versions to be manually activated before deployment can succeed."
      },
      {
        "letter": "B",
        "text": "Deploying a template automatically removes all prior versions and replaces them with the deployed version in production."
      },
      {
        "letter": "C",
        "text": "Deploying a prompt template includes all versions of the prompt template that are in the source org to the target org."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 16,
    "category": "Agentforce Concepts",
    "text": "Universal Containers wants to assign agents to improve department efficiency. Which configuration ensures the right tasks are handled by the right agents?",
    "options": [
      {
        "letter": "A",
        "text": "Sales Coach Agent for lead and Service Agent for HR requests, and Support tickets to ensure cases are available"
      },
      {
        "letter": "B",
        "text": "Lead Nurturing Agent for lead qualification, Service Agent for support tickets, Employee Agent for HR requests"
      },
      {
        "letter": "C",
        "text": "One Service Agent to efficiently handle each of these scenarios, which reduces the number of agent types needed for support"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 17,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers' Service Agent executes a flow action to retrieve Opportunity records. The Opportunity object has an organization-wide default (OWD) of Private. The agent returns no results despite matching records existing and the flow logic being correctly configured. Which resolution strictly adheres to the principle of least privilege?",
    "options": [
      {
        "letter": "A",
        "text": "Add the required object permissions to the Einstein Service Agent User's permission set and configure appropriate sharing rules."
      },
      {
        "letter": "B",
        "text": "Set the agent action flow to run in System Mode - without sharing."
      },
      {
        "letter": "C",
        "text": "Change the Opportunity object's OWD to Public Read Only so the Einstein Service Agent User can access records."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 18,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) is using related list merge fields in a prompt template associated with an Account object in Prompt Builder. What should UC consider?",
    "options": [
      {
        "letter": "A",
        "text": "Prompt generation will yield no response when there is no related list associated with an Account in runtime."
      },
      {
        "letter": "B",
        "text": "The Activities related list on the Account object is not supported because it is a polymorphic relationship."
      },
      {
        "letter": "C",
        "text": "If person accounts have been enabled, merge fields will not be available for the Account object."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 19,
    "category": "Agent Deployment and Testing",
    "text": "Which part of the Einstein Trust Layer architecture leverages an organization's own data within a large language model (LLM) prompt to confidently return relevant and accurate responses?",
    "options": [
      {
        "letter": "A",
        "text": "Dynamic Grounding"
      },
      {
        "letter": "B",
        "text": "Prompt Defense"
      },
      {
        "letter": "C",
        "text": "Data Masking"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 20,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has configured an agent to handle customer return requests. When a customer initiates a return, the agent must calculate a specific restocking fee. The agent needs to quote this exact fee to the customer and then reuse that same fee amount when summarizing the final refund. The Agentforce Specialist needs to ensure the agent uses deterministic logic to calculate the fee and consistently reuses the exact same value without guessing or hallucinating. How should the specialist configure the agent to achieve this behavior?",
    "options": [
      {
        "letter": "A",
        "text": "Execute a flow as an agent action to calculate the fee, and make the flow's output directly available to the agent response. The agent will be able to continue to use this value from memory."
      },
      {
        "letter": "B",
        "text": "Define a context variable for the fee. Execute a flow as an agent action to calculate the fee, and assign the flow's output to that context variable, and have the agent reference that variable in its responses."
      },
      {
        "letter": "C",
        "text": "Provide the mathematical formula for the restocking fee in the agent's system instructions and instruct it to remember the result for reuse."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 21,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) wants to create a prompt template that consistently extracts a customer's specific product model number and quantity from an email inquiry to draft a response back to the customer. Which best practice should UC implement to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Incorporate open-ended questions to encourage detailed responses."
      },
      {
        "letter": "B",
        "text": "Provide clear, positive instructions and use few-shot examples."
      },
      {
        "letter": "C",
        "text": "Use a high temperature setting to increase creative output."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 22,
    "category": "Agentforce and Data 360",
    "text": "When configuring a file upload-based data library, what are the maximum allowed file sizes for text/HTML files and PDF files, respectively?",
    "options": [
      {
        "letter": "A",
        "text": "Up to 100 MB for text/HTML files and up to 4 MB for PDF files"
      },
      {
        "letter": "B",
        "text": "Up to 50 MB for both text/HTML files and PDF files"
      },
      {
        "letter": "C",
        "text": "Up to 4 MB for text/HTML files and up to 100 MB for PDF files"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 23,
    "category": "Agent Deployment and Testing",
    "text": "Cloud Kicks (CK) recently finished the development of a new prompt template that uses its own large language model (LLM). When trying to deploy the change set, CK is getting an error related to the LLM used in the prompt template. What should the Agentforce Specialist consider?",
    "options": [
      {
        "letter": "A",
        "text": "The prompt should specify that it is a custom LLM."
      },
      {
        "letter": "B",
        "text": "LLM API name should match in sandbox and production."
      },
      {
        "letter": "C",
        "text": "The prompt template should be deactivated before deployment."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 24,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is implementing a customer verification process for its service agent where sensitive account information can only be accessed after the customer passes identity verification. The Agentforce Specialist needs to ensure this security rule is enforced deterministically, preventing the large language model (LLM) from bypassing the verification requirement to execute the account lookup action. What should the specialist configure to manage this deterministic behavior?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a Prompt Defense policy in the Einstein Trust Layer to mask the sensitive account data from the reasoning engine until the user successfully completes the verification process."
      },
      {
        "letter": "B",
        "text": "Store the user's verification status in a custom variable and apply an available \"when\" filter condition to the account lookup action, making the action invisible to the reasoning engine until the variable evaluates to true."
      },
      {
        "letter": "C",
        "text": "Add explicit natural language instructions within the subagent (formerly known as a topic) definition instructing the large language model (LLM) to always prioritize the customer verification action before proceeding to the account lookup action."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 25,
    "category": "Agentforce Concepts",
    "text": "Cloud Kicks (CK) is launching a new partner portal on Experience Cloud. CK wants to provide partners with an agent that can answer questions about product specifications from the knowledge base and allow them to submit a new Lead for a potential customer they've identified. The agent must be accessible only to authenticated partner users on the portal. Which agent type is required to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Service Agent"
      },
      {
        "letter": "B",
        "text": "Sales Agent"
      },
      {
        "letter": "C",
        "text": "Commerce Agent"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 26,
    "category": "Agentforce Concepts",
    "text": "A company built a custom Apex action invoked by an Employee Agent to fetch data from an external API. The callout method uses the current user's Salesforce session ID to authenticate the callout. The external callout works perfectly in the UI, but silently fails when the agent triggers it. What is the architectural best practice to fix this?",
    "options": [
      {
        "letter": "A",
        "text": "Explicitly extend the Apex class security to the logged-in user's profile."
      },
      {
        "letter": "B",
        "text": "Ensure the Employee Agent is assigned the AgentforceServiceAgentUserPsg."
      },
      {
        "letter": "C",
        "text": "Replace the session ID retrieval with a Named Credential."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 27,
    "category": "Prompt Engineering",
    "text": "An Agentforce Specialist at Universal Containers (UC) is building with no-code tools only. They have many small accounts that are only touched periodically by a specialized sales team, and UC wants to maximize the sales operations team's time. UC wants to help prep the sales team for calls by: Summarizing past purchases Displaying products the contact has shown interest in (with data captured via Data 360) Providing a recap of past email and phone conversations that have transcripts Which approach should the Agentforce Specialist recommend to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Use a prompt template grounded on CRM and Data 360 data using standard foundation models."
      },
      {
        "letter": "B",
        "text": "Fine-tune the standard foundational model due to the complexity of the data."
      },
      {
        "letter": "C",
        "text": "Deploy UC's own custom foundational model on this data first."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 28,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers needs to create Data 360 reports to understand agent behavior. Which data lake object (DLO) represents a container capturing contiguous interactions with one or more AI agents?",
    "options": [
      {
        "letter": "A",
        "text": "AIAgentInteraction"
      },
      {
        "letter": "B",
        "text": "AIAgentSession"
      },
      {
        "letter": "C",
        "text": "AIAgentInteractionMessage"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 29,
    "category": "Agentforce Concepts",
    "text": "Universal Containers (UC) needs to ensure that its agent can immediately process customer returns by validating order eligibility before proceeding with the return process. UC wants to maintain a natural conversational flow for customers while ensuring that the order validation step is strictly followed. What should the Agentforce Specialist do to achieve the desired outcome?",
    "options": [
      {
        "letter": "A",
        "text": "Use Salesforce Flow to guide the large language model (LLM) in handling order validation and the return process."
      },
      {
        "letter": "B",
        "text": "Use a custom Apex @Invocable Method to handle the entire return process."
      },
      {
        "letter": "C",
        "text": "Use procedural instructions in the Agent Script to enforce the order validation step."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 30,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has developed an agent for loan origination workflows that must handle both non-determinism and strict regulatory compliance requirements The agent needs to ensure that identity verification and credit check steps execute in a precise sequence without deviation. Which statement correctly differentiates these two instruction patters in Agent Script's hybrid reasoning approach?",
    "options": [
      {
        "letter": "A",
        "text": "Declarative instructions require Flow execution for business logic, while procedural instructions are native to Agent Script but cannot access external systems or APIs."
      },
      {
        "letter": "B",
        "text": "Declarative instructions provide conversational flexibility through large language model (LLM) interpretation, while procedural instructions use the '->' prefix to enforce guaranteed execution order with run, if, and transitions."
      },
      {
        "letter": "C",
        "text": "Declarative instructions only work in Canvas View for visual editing, while procedural instructions require Script View and cannot be represented in the visual interface."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 31,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) has a Flex prompt template that has been used for the last 3 months to answer questions based on user input. Now, UC wants to give a PDF as a second input. What is the best approach for the Agentforce Specialist to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Reindex in order to add a new resource to an existing template."
      },
      {
        "letter": "B",
        "text": "Add a Resource anytime by navigating to the Resources section and configuring inputs."
      },
      {
        "letter": "C",
        "text": "Discard the current Flex template and create a new one with a resource."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 32,
    "category": "Agent Deployment and Testing",
    "text": "An Agentforce Specialist deployed a Service Agent to an Experience Cloud site and enabled Credential Based User Verification. The specialist notices that all DML record updates are showing the \"LastModifiedUser\" as the authenticated Community User instead of the Agent User. What should the specialist explain to the business about the effect on audit fields?",
    "options": [
      {
        "letter": "A",
        "text": "Credential-Based User Verification has been enabled which in turn respects all Sharing and field-level security."
      },
      {
        "letter": "B",
        "text": "The Flow execution mode for the agent is set to System Context Without Sharing."
      },
      {
        "letter": "C",
        "text": "Token-Based User Verification has been enabled which in turn respects all sharing and field-level security."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 33,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers is deploying two agents simultaneously: an internal Sales Productivity Agent for employees and a customer-facing Service Agent on its Experience Cloud site. An Agentforce Specialist is configuring permissions and needs to understand the correct security context for each. Which statement accurately describes the execution model?",
    "options": [
      {
        "letter": "A",
        "text": "The customer-facing Service Agent inherits the security context of the Experience Cloud site's guest user profile by default, requiring guest profile object permissions for all actions the agent executes."
      },
      {
        "letter": "B",
        "text": "The internal Sales Productivity Agent executes actions using the authenticated Salesforce employee's own permissions, while the customer-facing Service Agent executes actions as a dedicated Einstein Service Agent User with its own permission set."
      },
      {
        "letter": "C",
        "text": "Both agents execute actions as a dedicated Einstein Service Agent User with its own permission set that is configured as required for the agent."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 34,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has configured an agent to handle customer return requests. When a customer initiates a return, the agent must calculate a specific restocking fee. The agent needs to quote this exact fee to the customer and then reuse that same fee amount when summarizing the final refund. The Specialist needs to ensure the agent uses deterministic logic to calculate the fee and consistently reuses the exact same value without guessing or hallucinating. How should the specialist configure the agent to achieve this behavior?",
    "options": [
      {
        "letter": "A",
        "text": "Define a context variable for the fee. Execute a flow as an agent action to calculate the fee, assign the flow's output to that context variable, and have the agent reference that variable in its responses."
      },
      {
        "letter": "B",
        "text": "Execute a flow as an agent action to calculate the fee, and make the flow's output directly available to the agent response. The agent will be able to continue to use this value from memory."
      },
      {
        "letter": "C",
        "text": "Provide the mathematical formula for the restocking fee in the agent's system instructions and instruct it to remember the result for reuse."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 35,
    "category": "Prompt Engineering",
    "text": "The support team at Coral Cloud Resorts needs to create a Flex prompt template that summarizes complex case histories for agent handoffs. The goal is to ensure summaries are concise and follow a specific three-part structure: Issue, Steps Taken, and Next Action. What should an Agentforce Specialist recommend to ensure consistent data output?",
    "options": [
      {
        "letter": "A",
        "text": "Use chain-of-thought reasoning."
      },
      {
        "letter": "B",
        "text": "Define the desired output structure with explicit headings in the instruction."
      },
      {
        "letter": "C",
        "text": "Use a prompt template-triggered flow to format responses."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 36,
    "category": "Agent Deployment and Testing",
    "text": "Northern Trail Outfitters is testing an agent connected to an Agentforce Data Library. The agent successfully retrieves the correct data from the library, but delivers the response to the user as raw JSON structures instead of grammatically correct conversational language. Which quality evaluation scores poorly in this scenario?",
    "options": [
      {
        "letter": "A",
        "text": "Coherence"
      },
      {
        "letter": "B",
        "text": "Conciseness"
      },
      {
        "letter": "C",
        "text": "Completeness"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 37,
    "category": "Prompt Engineering",
    "text": "An Agentforce Specialist wants to troubleshoot an agent that is hallucinating weblinks. The agent has an action that uses a prompt template, which is using a knowledge retriever, to generate the output text that the agent will use. What is an appropriate step to find the root cause of the hallucination behavior?",
    "options": [
      {
        "letter": "A",
        "text": "Examine the subagent (formerly known as a topic) name and classification description for hallucination guardrails."
      },
      {
        "letter": "B",
        "text": "Examine the prompt instructions and contents of the chunks shown in the resolved prompt output."
      },
      {
        "letter": "C",
        "text": "Examine the subagent instructions (formerly known as a topic instructions) and ensure the word \"ALWAYS\" is used in the hallucination guardrails."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 38,
    "category": "Prompt Engineering",
    "text": "An Agentforce Specialist at Universal Containers is trying to set up a new Field Generation prompt template. They take the following steps. 1. Create a new Field Generation prompt template. 2. Choose Case as the object type. 3. Select the custom field AI_Analysis__c as the target field. After creating the prompt template, the Agentforce Specialist saves, tests, and activates it. However, when they go to a case record, the AI Analysis field does not show the (Sparkle) icon on the Edit pencil. When the Agentforce Specialist was editing the field, it was behaving as a normal field. Which critical step did the Agentforce Specialist miss?",
    "options": [
      {
        "letter": "A",
        "text": "They forgot to edit the Lightning page layout and associate the field to a prompt template."
      },
      {
        "letter": "B",
        "text": "They forgot to reactivate the Lightning page layout for the Case object after activating their Field Generation prompt template."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 39,
    "category": "Agentforce and Data 360",
    "text": "In a knowledge-based data library configuration, what is the primary difference between the identifying fields and the content fields?",
    "options": [
      {
        "letter": "A",
        "text": "Identifying fields help locate the correct knowledge article, while content fields enrich AI responses with detailed information."
      },
      {
        "letter": "B",
        "text": "Identifying fields categorize articles for indexing purposes, while content fields provide a brief summary for display."
      },
      {
        "letter": "C",
        "text": "Identifying fields highlight key terms for relevance scoring, while content fields store the full text of the article for retrieval."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 40,
    "category": "Agentforce and Data 360",
    "text": "Before deploying a Retrieval Augmented Generation (RAG) solution into production, an Agentforce Specialist wants to evaluate whether their individual custom retrievers are surfacing the most relevant chunks for specific queries without writing any code. Which tool should the specialist use to test the retriever?",
    "options": [
      {
        "letter": "A",
        "text": "The Retriever Playground"
      },
      {
        "letter": "B",
        "text": "Agentforce Testing Center"
      },
      {
        "letter": "C",
        "text": "Data 360 Query Editor"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 41,
    "category": "Agentforce Concepts",
    "text": "Universal Containers uses Agentforce to manage its customer service operations. However, the company uses a completely separate, third-party AI agent system to manage its warehouse logistics. UC wants the Agentforce customer service agent to be able to seamlessly request shipping reroutes and collaborate autonomously with the warehouse agent. Which open standard protocol is specifically designed to facilitate this exact type of cross-platform collaboration?",
    "options": [
      {
        "letter": "A",
        "text": "Model Context Protocol (MCP)"
      },
      {
        "letter": "B",
        "text": "Advanced Data Retrieval (ADR) standard"
      },
      {
        "letter": "C",
        "text": "Agent-to-Agent (A2A) protocol"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 42,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is building an Agentforce Service Agent to handle password resets. The agent must first verify the customer's identity using an email verification code, then once identity is confirmed the agent must execute the organization's existing password reset Flow. The identity verification subagent is already configured. Which implementation approach should the Agentforce Specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Create an agent action referencing the password reset Flow, assign it to the identity verification subagent, and call it deterministically from the subagent's reasoning block using Agent Script conditional logic."
      },
      {
        "letter": "B",
        "text": "Create a separate subagent named Password Reset, configure it with an action that invokes the Flow, and pass the identity verification variable as context so the subagent's instructions can reference the verified status before proceeding."
      },
      {
        "letter": "C",
        "text": "Add an instruction to the identity verification subagent directing the agent to trigger the password reset Flow once identity is confirmed, and store the customer's reset intent in a conversation variable so the reasoning engine can reference it when deciding whether to proceed."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 43,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) has a new AI project. What should UC consider when adding a related list on the Account page to be used in the prompt template?",
    "options": [
      {
        "letter": "A",
        "text": "Prompt Builder must be used to assign the fields from the related list as a JSON format."
      },
      {
        "letter": "B",
        "text": "After selecting a related list from the Account, use the field picker to choose merge fields in Prompt Builder."
      },
      {
        "letter": "C",
        "text": "The fields for the related list are based on the default page layout of the Account for the current user."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 44,
    "category": "Agentforce and Data 360",
    "text": "Pacific Distribution Co. is implementing a system to manage partner order support and inventory inquiries. The company needs to ensure that large documents are processed effectively to improve retrieval accuracy when agents respond to partner queries. Understanding how documents are broken down and indexed is crucial for this implementation. What is a key characteristic of the chunking process?",
    "options": [
      {
        "letter": "A",
        "text": "Chunking breaks large documents into smaller units called passages."
      },
      {
        "letter": "B",
        "text": "The chunking process returns entire documents to the large language model (LLM) for processing."
      },
      {
        "letter": "C",
        "text": "Chunking strategies are interchangeable and do not affect the retrieval process."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 45,
    "category": "Agentforce Concepts",
    "text": "An Agentforce Specialist at Universal Containers observes that the agent frequently directs customers with clear billing inquiries to the general troubleshooting subagent (formerly known as a topic). This misrouting is causing a spike in average handle time and missing service-level agreement (SLA) targets. The contact center manager requires a solution that is quick to implement but preserves the agent's ability to handle complex, non-linear conversations. What is the most appropriate approach to resolve this?",
    "options": [
      {
        "letter": "A",
        "text": "Update the agent's global 'System Instructions' to include a list of forbidden keywords for each subagent."
      },
      {
        "letter": "B",
        "text": "Audit subagent instructions for semantic competition and implement deterministic filters to guide the planner's selection."
      },
      {
        "letter": "C",
        "text": "Create a 'Router' sub-flow that uses a Decision element to manually assign every incoming request to a specific subagent."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 46,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is building an Agentforce Service Agent to help customers track their purchases. To store the customer's order number during the conversation, the Agentforce Specialist creates and initializes a variable in Agent Script using the declaration order_id: string = '', omitting the mutable keyword. During testing, the agent attempts to update this variable with the user's order number via the @utils.setVariables utility. What is the result of this variable declaration at runtime?",
    "options": [
      {
        "letter": "A",
        "text": "The variable defaults to mutable; the mutable keyword is optional and has no effect, allowing the agent to successfully update the variable."
      },
      {
        "letter": "B",
        "text": "The declaration is a syntax error and the agent will fail to deploy."
      },
      {
        "letter": "C",
        "text": "The variable is treated as read-only; it cannot be updated by actions or @utils.setVariables at runtime because it lacks the mutable keyword."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 47,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers has deployed a Service Agent to production that handles billing, returns, and technical support across 12 subagents (formerly known as topics). Following a business process change, the Agentforce Specialist updates the Billing subagent instructions to include a new refund escalation path. Within days, the customer experience team reports that billing interactions are intermittently routing to the General FAQ subagent instead. Which approach is most effective in helping to diagnose the cause and confirm the full extent of the impact?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Utterance Analysis in the production org to review conversation logs for misrouted interactions, then iteratively adjust the Billing subagent instructions in Agent Builder until the misrouting rate falls below an acceptable threshold."
      },
      {
        "letter": "B",
        "text": "Replicate each suspected failure scenario manually in Agentforce Builder's Conversation Preview, document the subagent selection results, and update the Billing subagent instructions before redeploying the agent."
      },
      {
        "letter": "C",
        "text": "Re-run the stored test suite in Agentforce Testing Center against the modified agent, review Subagent Pass % and Action Pass % metrics to isolate regressions, then extend the suite to cover the refund escalation path"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 48,
    "category": "Agent Deployment and Testing",
    "text": "What is a valid option for Omni-Channel routing for a messaging channel?",
    "options": [
      {
        "letter": "A",
        "text": "Agentforce Service Agent"
      },
      {
        "letter": "B",
        "text": "Autolaunched flow"
      },
      {
        "letter": "C",
        "text": "Agentforce Employee Agent"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 49,
    "category": "Agentforce and Data 360",
    "text": "In a knowledge-based data library, which capability does enabling the \"Filter by Knowledge Data Categories\" option provide?",
    "options": [
      {
        "letter": "A",
        "text": "It applies custom metadata from the selected data categories to the knowledge articles, aiming to enhance search relevance."
      },
      {
        "letter": "B",
        "text": "It organizes the indexed knowledge articles into separate sections based on their assigned data categories."
      },
      {
        "letter": "C",
        "text": "It limits the indexed articles to only those belonging to selected data categories, thereby improving indexing precision."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 50,
    "category": "Agent Deployment and Testing",
    "text": "Which element should an Agentforce Specialist use in an Omni-Flow to route conversations to an agent?",
    "options": [
      {
        "letter": "A",
        "text": "Route Conversation"
      },
      {
        "letter": "B",
        "text": "Route Work"
      },
      {
        "letter": "C",
        "text": "Route to Agent"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 51,
    "category": "Agentforce and Data 360",
    "text": "A company needs to ensure customers always receive answers based on the most current version of support documentation. What should an Agentforce Specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Use a file-based Agentforce Data Library (ADL) and enable the version management setting to ensure the agent always retrieves the latest document."
      },
      {
        "letter": "B",
        "text": "Use a knowledge-based Agentforce Data Library (ADL); knowledge articles have native versioning built in, so agents automatically retrieve the current published version."
      },
      {
        "letter": "C",
        "text": "Use either Agentforce Data Library (ADL) type; both automatically serve the most recent content once the search index rebuilds."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 52,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers' Agentforce Service Agent has been live for 4 weeks. Agent Optimization in Agentforce Observability shows the main support intent cluster scoring low quality, with score reasons citing ambiguous subagent match. The Session Trace confirms the reasoning engine is consistently selecting the wrong subagent on most turns. What is the most viable solution to resolve the issue?",
    "options": [
      {
        "letter": "A",
        "text": "Refine the classification descriptions and scope of the competing subagents to eliminate the semantic overlap that is causing the reasoning engine to misroute."
      },
      {
        "letter": "B",
        "text": "Use the intent cluster data from Agent Optimization to identify the most frequently misrouted intents and add new subagents with tightly scoped classification descriptions for each."
      },
      {
        "letter": "C",
        "text": "Extend the agent's data library with additional knowledge articles covering the misrouted intent scenarios identified in Agent Optimization."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 53,
    "category": "Prompt Engineering",
    "text": "A service manager wants to use Salesforce Prompt Builder to help agents summarize customer case notes after a support call. The summary should: \u2022 Capture the customer's issue, troubleshooting steps taken, and next actions. \u2022 Be no longer than five sentences. \u2022 Use plain language (no technical jargon). \u2022 If no next action is identified, the summary should explicitly state \"No next action required.\" Which key prompt constructs meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Role, Task, LLM Clarity Score, and Format"
      },
      {
        "letter": "B",
        "text": "Role, Task, Token Size Limit, and Format"
      },
      {
        "letter": "C",
        "text": "Task, Context, Constraints, and Format"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 54,
    "category": "Agentforce and Data 360",
    "text": "What happens when a chunk of text is vectorized?",
    "options": [
      {
        "letter": "A",
        "text": "It creates numerical representations of chunk content to enable meaning-based retrieval."
      },
      {
        "letter": "B",
        "text": "It encrypts the content so it can be stored securely within Data 360 data spaces."
      },
      {
        "letter": "C",
        "text": "It reduces the file size of the original document to reduce Data 360 costs."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 55,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers needs to ground a new Agentforce agent with structured data stored in an external system without duplicating it in Data 360. This approach is necessary to ensure real-time data accuracy and minimize storage costs. Which Data 360 concept should the team use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Establish a semantic index for external content."
      },
      {
        "letter": "B",
        "text": "Utilize Zero Copy to access external data without ingestion."
      },
      {
        "letter": "C",
        "text": "Configure a data stream to import the data into Data 360."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 56,
    "category": "Agentforce Concepts",
    "text": "Universal Containers (UC) has deployed several specialized Agentforce Employee Agents such as IT Support, HR Assistant, and Procurement to assist with internal tasks. Recently, UC's help desk has reported a high volume of failed interactions because employees are frequently selecting the incorrect agent to handle their requests (for example, asking the HR Assistant agent to reset a network password). UC wants to improve the user experience, scale their deployment, and centralize control without requiring employees to guess which agent to use. Which architectural approach should the Agentforce Specialist recommend to resolve this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Create a custom validation rule on the Agent Session object to prevent users from submitting prompts that do not match the selected agent's system instructions."
      },
      {
        "letter": "B",
        "text": "Implement a Single Org Multi-Agent (SOMA) to act as a unified, central entry point that interprets user intent and routes the request to the appropriate specialized capabilities."
      },
      {
        "letter": "C",
        "text": "Deploy a standalone Multi-Agent architecture where each specialized agent prompts the user to verify their specific department and role before proceeding with the conversation."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 57,
    "category": "Prompt Engineering",
    "text": "The support team at Coral Cloud Resorts needs to create a Flex prompt template that summarizes complex case histories for agent handoffs. The goal is to ensure summaries are concise and follow a specific three-part structure: Issue, Steps Taken, and Next Action. What should an Agentforce Specialist recommend to ensure consistent data output?",
    "options": [
      {
        "letter": "A",
        "text": "Use chain-of-thought reasoning."
      },
      {
        "letter": "B",
        "text": "Define the desired output structure with explicit headings in the instruction."
      },
      {
        "letter": "C",
        "text": "Use a prompt template-triggered flow to format responses."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 58,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers operates a customer self-service portal supported by an Agentforce Service Agent. The compliance team maintains a Salesforce Knowledge base of published product compliance guidelines, service terms, and regulatory procedures, updated regularly by subject matter experts. What is the most efficient approach to ensure the agent retrieves only current published content using semantic understanding of customer questions, and that outdated articles are never surfaced?",
    "options": [
      {
        "letter": "A",
        "text": "Build a subagent action (formerly known as a topic action) using a Salesforce flow to query the Knowledge articles data model object (DMO) at runtime and return matching content to the agent, ensuring the agent always retrieves live article data directly from the Knowledge object when responding to customer questions."
      },
      {
        "letter": "B",
        "text": "Create an Agentforce Data Library connected to the Salesforce Knowledge base, filtered to published articles only, enabling the agent to ground responses using retrieval-augmented generation (RAG) powered semantic retrieval that automatically reflects Knowledge updates without requiring agent reconfiguration."
      },
      {
        "letter": "C",
        "text": "Configure a custom retriever in Einstein Studio connected to a Data 360 search index, applying filters to restrict"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 59,
    "category": "Agentforce and Data 360",
    "text": "An Agentforce Specialist is preparing to upload several PDF policy documents to a new file-based Agentforce Data Library. To leverage advanced processing with Intelligent Context, how should the Agentforce Specialist proceed?",
    "options": [
      {
        "letter": "A",
        "text": "Upload up to five PDFs that are 100 MB or less to allow the system to evaluate the optimal indexing configuration."
      },
      {
        "letter": "B",
        "text": "Upload up to five PDFs that are 10 MB or less to allow the system to evaluate the optimal indexing configuration."
      },
      {
        "letter": "C",
        "text": "Manually enable Intelligent Context in Data 360 prior to uploading the PDF files."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 60,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is building a custom agent and creating a new Apex action that accepts a collection of text values (such as a list of product names) as an input parameter. The Agentforce Specialist is configuring the action's metadata in Agentforce Assets and needs to properly map this input so the reasoning engine can pass the list of strings correctly. When defining this input, which complex_data_type_name should the Agentforce Specialist use?",
    "options": [
      {
        "letter": "A",
        "text": "lightning_string Type"
      },
      {
        "letter": "B",
        "text": "apex_String"
      },
      {
        "letter": "C",
        "text": "lightning_textType"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 61,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has been building an agent using Canvas. It has created an \"Issue Refund\" action. Business rules dictate that refunds can only be issued if the customer's Account_Tier is \"Platinum\". Currently, the agent relies on its system instructions to check the tier, but it occasionally hallucinates authorization and attempts to call the refund action for Standard customers, resulting in backend errors. How should the Agentforce Specialist use filters to deterministically ensure the agent cannot process the \"Issue Refund\" action unless the customer meets the criteria?",
    "options": [
      {
        "letter": "A",
        "text": "Update the agent's system instructions with a strict rule to manually filter out any refund requests if the customer's account tier is not Platinum."
      },
      {
        "letter": "B",
        "text": "Apply a text filter to the Agent Session that automatically blocks the word \"refund\" from the user's prompt unless they are a Platinum customer."
      },
      {
        "letter": "C",
        "text": "Configure an Action Condition filter on the \"Issue Refund\" action so that it is only available to the agent when Account_Tier equals \"Platinum\"."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 62,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers wants to systematically validate agent responses before deployment using a scalable testing process. Which Testing Center approach should the company implement?",
    "options": [
      {
        "letter": "A",
        "text": "Upload a structured CSV test file and run batch test cases in Testing Center."
      },
      {
        "letter": "B",
        "text": "Manually interact with the agent in Builder until responses seem correct."
      },
      {
        "letter": "C",
        "text": "Use pilot users in production to flag incorrect responses post-launch."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 63,
    "category": "Agentforce Concepts",
    "text": "Cloud Kicks uses a third-party agent for research and an Agentforce agent for customer service. Which purpose-built protocol allows cross-vendor agents to communicate?",
    "options": [
      {
        "letter": "A",
        "text": "Model Context Protocol (MCP)"
      },
      {
        "letter": "B",
        "text": "Application Programming Interface (API)"
      },
      {
        "letter": "C",
        "text": "Agent-to-Agent (A2A)"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 64,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) is deploying several prompt templates to assist its support agents using Salesforce's standard foundation models. Leadership requires the generated responses to consistently reflect an empathetic and highly professional tone. UC only permits the use of standard foundational large language models (LLMs). What is the most effective prompt engineering technique the Agentforce Specialist should implement in Prompt Builder to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Configure the prompt template tone with a dataset of past interactions using different writing styles, intensifiers, and punctuation to permanently alter the LLM default tone."
      },
      {
        "letter": "B",
        "text": "Include a direct instruction asking the LLM to role-play as a specific character (for example, \"Act as an empathetic customer support agent\") to provide context and establish the tone."
      },
      {
        "letter": "C",
        "text": "Include multiple-choice picklist questions within the prompt template to systematically test and correct the LLM's understanding of the desired context before generating the output."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 65,
    "category": "Prompt Engineering",
    "text": "An Agentforce Specialist turned on Einstein Generative AI in Setup. Now, the Agentforce Specialist would like to create custom prompt templates in Prompt Builder. However, they cannot access Prompt Builder in the Setup menu. What is causing the problem?",
    "options": [
      {
        "letter": "A",
        "text": "The Prompt Template User permission set was not assigned correctly."
      },
      {
        "letter": "B",
        "text": "The Prompt Template Manager permission set was not assigned correctly."
      },
      {
        "letter": "C",
        "text": "The large language model (LLM) was not configured correctly in Data 360."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 66,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers has successfully chunked and vectorized its unstructured meeting notes into a Data 360 search index. An Agentforce Specialist needs to connect this data to a prompt template to dynamically refine search criteria and retrieve the most relevant information. How should the specialist achieve this?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Flex template referencing a data lake object (DLO)."
      },
      {
        "letter": "B",
        "text": "Create a Flex template referencing a retriever in the prompt template."
      },
      {
        "letter": "C",
        "text": "Create a Flex template referencing the data model object (DMO)."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 67,
    "category": "Prompt Engineering",
    "text": "Which business requirement best presents a good use case for using Prompt Builder?",
    "options": [
      {
        "letter": "A",
        "text": "Forecast future sales trends based on historical data."
      },
      {
        "letter": "B",
        "text": "Send a quote proposal in reply to a request for a quote."
      },
      {
        "letter": "C",
        "text": "Identify potential high-value leads based on lead score."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 68,
    "category": "Agentforce Concepts",
    "text": "An Agentforce Specialist is creating a custom agent action. The subagent (formerly known as a topic) is selected correctly, but the action is not. Which component of Action structure in Agent Script helps the large language model (LLM) decide when to use the action?",
    "options": [
      {
        "letter": "A",
        "text": "target"
      },
      {
        "letter": "B",
        "text": "label"
      },
      {
        "letter": "C",
        "text": "description"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 69,
    "category": "Agent Deployment and Testing",
    "text": "An Agentforce Specialist is evaluating an agent conversation. What is the reason why intents and session metrics within Observability are important to consider?",
    "options": [
      {
        "letter": "A",
        "text": "To evaluate the agent's overall performance"
      },
      {
        "letter": "B",
        "text": "To evaluate why the agent was unable to answer a user's question"
      },
      {
        "letter": "C",
        "text": "To evaluate the deflection rate of the agent"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 70,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers (UC) is implementing Agentforce Service Agent on Email. UC made an email template and now needs to connect it to a Service Agent. What should an Agentforce Specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Create a classic email template that defines the structure of all emails sent by the Agentforce Service Agent."
      },
      {
        "letter": "B",
        "text": "Use the standard Draft Email Template action."
      },
      {
        "letter": "C",
        "text": "Create a Lightning email template that defines the structure of all emails sent by the Agentforce Service Agent."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 71,
    "category": "Agentforce Concepts",
    "text": "A company's support agent is inconsistently executing a mandatory fraud check action before processing refunds. In some conversations the fraud-check fires, but in others the agent skips directly to issuing the refund. Upon review, an Agentforce Specialist recommends placing the instruction guideline with 'run @actions.fraud_check' followed by 'run @actions.process_refund'. What is the effect of this configuration change?",
    "options": [
      {
        "letter": "A",
        "text": "The fraud-check action will be more strongly suggested to the LLM, but it may still be skipped if the LLM determines it is not relevant."
      },
      {
        "letter": "B",
        "text": "The fraud-check action will execute after the LLM check if it missed it, but the agent will lose its ability to use an empathetic tone."
      },
      {
        "letter": "C",
        "text": "The fraud-check action will be forced to execute before the refund action in every conversation, because procedural instructions provide deterministic control over execution order."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 72,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers is configuring its Agentforce Testing Center to evaluate an agent handling customer complaints. The company wants to assess if the agent successfully demonstrates empathy and follows a proprietary \"De-escalation Framework\" before offering a resolution. Where should the Agentforce Specialist utilize an LLM-as-judge to achieve an appropriate evaluation?",
    "options": [
      {
        "letter": "A",
        "text": "Adjust the fixed criteria of the standard Coherence quality evaluation."
      },
      {
        "letter": "B",
        "text": "Enable the default Instruction Adherence evaluation which natively uses LLM-as- judge."
      },
      {
        "letter": "C",
        "text": "Create a custom evaluation with a tailored prompt outlining the framework's criteria."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 73,
    "category": "Agentforce Concepts",
    "text": "Universal Containers' agent must always look up the customer's account tier and open cases from Salesforce before deciding how to respond. Based on Agent Script flow of control, what is true about executing deterministic actions at the very start of a subagent?",
    "options": [
      {
        "letter": "A",
        "text": "Actions can only be guaranteed to run by placing them in the config block."
      },
      {
        "letter": "B",
        "text": "Only before_reasoning can guarantee the LLM is invoked before an action runs."
      },
      {
        "letter": "C",
        "text": "The first instruction in reasoning always runs before the LLM is invoked."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 74,
    "category": "Agent Deployment and Testing",
    "text": "An Agentforce Specialist is testing an agent with Testing Center. The test results show that an agent correctly identifies the right subagent to handle an utterance, but it fails to select all necessary actions within that subagent. Which evaluation metric specifically identifies this failure?",
    "options": [
      {
        "letter": "A",
        "text": "Action Assertion"
      },
      {
        "letter": "B",
        "text": "Response Evaluation"
      },
      {
        "letter": "C",
        "text": "Subagent Assertion"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 75,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers (UC) has configured a data library and wants to restrict indexing of knowledge articles to articles that are only publicly available. UC also wants the agent to link sources that the LLM grounded its response on. Which settings should help UC with this?",
    "options": [
      {
        "letter": "A",
        "text": "Use Data Categories to categorize publicly available articles to index. Sources are automatically displayed when articles are categorized as Public."
      },
      {
        "letter": "B",
        "text": "In the data library setting window, under Knowledge Settings, enable Use Public Knowledge Article. It is not possible to display sources."
      },
      {
        "letter": "C",
        "text": "In the data library setting window, under Knowledge Settings, enable Use Public Knowledge Article and select Show sources."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 76,
    "category": "Agent Deployment and Testing",
    "text": "The compliance team at Universal Containers has determined that a specific customer service prompt must only process data through a secure, self-hosted Amazon Bedrock model and must be prevented from accessing the default OpenAI models. How should the Agentforce Specialist configure this specific model routing?",
    "options": [
      {
        "letter": "A",
        "text": "Assign a permission set to the dedicated Agent User that restricts Read access to default LLM metadata records."
      },
      {
        "letter": "B",
        "text": "Configure a Data 360 Private Connect endpoint that reroutes all Agentforce requests away from the default LLM Gateway."
      },
      {
        "letter": "C",
        "text": "Register the model as a BYOLLM in Einstein Studio, then explicitly select this model when configuring the prompt template."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 77,
    "category": "Agentforce Concepts",
    "text": "Cloud Kicks wants its Agentforce Service Agent to retrieve up-to-date factual data from the internet. Which step must an Agentforce Specialist take to ensure the agent uses web search capability properly?",
    "options": [
      {
        "letter": "A",
        "text": "Enable the Answer Questions with Knowledge standard action specifically on the General FAQ subagent."
      },
      {
        "letter": "B",
        "text": "Map the web search retriever to a custom search index in Data 360 before activating the agent."
      },
      {
        "letter": "C",
        "text": "Remove the default General FAQ subagent and replace its function with a new General Web Search topic."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 78,
    "category": "Agentforce Concepts",
    "text": "Universal Containers (UC) is scaling its Agentforce deployment and needs to securely connect its AI agents to a growing number of external enterprise data systems and local developer environments. Instead of building custom integration logic for each new data source, the Specialist recommends leveraging the Model Context Protocol (MCP). What is the primary purpose of using an open standard like MCP in this scenario?",
    "options": [
      {
        "letter": "A",
        "text": "To standardize the secure connection and delivery of context between AI models and various local or remote data sources"
      },
      {
        "letter": "B",
        "text": "To replace RAG by storing all external data natively within the LLM's weights"
      },
      {
        "letter": "C",
        "text": "To allow the agent to autonomously negotiate task delegation with third-party agents"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 79,
    "category": "Agentforce and Data 360",
    "text": "An Agentforce Specialist at Universal Containers previously recommended removing superseded mortgage policy documents ingested into Data 360 to prevent retrieval of outdated terms. Legal has now confirmed that all historical versions must remain, as each version remains contractually binding for customers who signed under it. Which revised recommendation should the specialist make?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a custom retriever with a dynamic filter on policy version metadata, populated at runtime from the customer's Contract record, ensuring retrieval is scoped to the correct version before similarity ranking."
      },
      {
        "letter": "B",
        "text": "Add the policy version identifier as a prepend field in the search index so every chunk is tagged, enabling the LLM to select the correct version during response generation."
      },
      {
        "letter": "C",
        "text": "Create a separate data stream for each policy version and configure the agent to query the appropriate UDMO corresponding to the customer's contract date."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 80,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) wants to incorporate the current order fulfillment status into a prompt for an LLM. The order status is stored in an external ERP system. What is the most appropriate data grounding technique?",
    "options": [
      {
        "letter": "A",
        "text": "External Object Record merge fields"
      },
      {
        "letter": "B",
        "text": "Apex merge fields"
      },
      {
        "letter": "C",
        "text": "External Services merge fields"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 81,
    "category": "Agent Deployment and Testing",
    "text": "Before activating a custom agent action, an Agentforce Specialist wants to evaluate multiple real-world user utterances to ensure the action is being selected appropriately. Which tool should the Specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Agentforce Builder"
      },
      {
        "letter": "B",
        "text": "Testing Center"
      },
      {
        "letter": "C",
        "text": "Prompt Builder"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 82,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has deployed Agentforce to handle customer order tracking, returns, and loyalty support. The agent needs to balance conversational flexibility with guaranteed execution of identity verification steps before accessing account information. Which statement correctly describes hybrid reasoning in Agentforce Agent Script?",
    "options": [
      {
        "letter": "A",
        "text": "Hybrid reasoning uses multiple LLMs simultaneously, with one handling conversation and another executing deterministic logic through Flow integration"
      },
      {
        "letter": "B",
        "text": "Hybrid reasoning requires Canvas View for declarative instructions and Script View for procedural instructions."
      },
      {
        "letter": "C",
        "text": "Hybrid reasoning combines declarative natural language instructions that allow LLM interpretation with procedural instructions using the run prefix that enforce guaranteed execution order."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 83,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers has built a Service Agent grounded on a knowledge data library containing 200 FAQ articles. The team estimates manually authoring test cases for adequate coverage would take 3 weeks. Which step should the Specialist take to generate a comprehensive initial test suite without manual authoring?",
    "options": [
      {
        "letter": "A",
        "text": "Upload test cases."
      },
      {
        "letter": "B",
        "text": "Generate test cases based on the knowledge available to the agent."
      },
      {
        "letter": "C",
        "text": "Generate test cases based on subagents and actions."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 84,
    "category": "Agent Deployment and Testing",
    "text": "An Agentforce Specialist is working declaratively on version 4 of a prompt template. A bug is identified in version 3 and requires a hotfix to be deployed to production immediately. The team will deploy this change as a new version. What should the specialist do to ensure their work on version 4 is not lost and does not conflict with the new version?",
    "options": [
      {
        "letter": "A",
        "text": "Create a new prompt template with the bug fix, update all references, and delete the old template."
      },
      {
        "letter": "B",
        "text": "Save their work in version 4, and allow the template to be deployed with a new version 5 containing the fix."
      },
      {
        "letter": "C",
        "text": "Copy and paste version 4 into a backup file, and allow the other team to overwrite version 4 with the bug-fixed version."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 85,
    "category": "Agentforce and Data 360",
    "text": "Cloud Kicks has long, complex legal agreements. An agent must retrieve specific clauses often nested within larger sections. Standard chunking fails to capture full context. Which chunking strategy should be used to preserve document structure?",
    "options": [
      {
        "letter": "A",
        "text": "Implement a smaller chunk size."
      },
      {
        "letter": "B",
        "text": "Implement a larger chunk size."
      },
      {
        "letter": "C",
        "text": "Implement a keyword-based chunking strategy."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 86,
    "category": "Agentforce and Data 360",
    "text": "An Agentforce Specialist is setting up Salesforce Knowledge as a data source for a Data Library and must select \"Identifying Fields\" to help Agentforce locate the right information. The Knowledge article contents are rich, detailed, and quite long. What should the Specialist use as Identifying Fields?",
    "options": [
      {
        "letter": "A",
        "text": "The main contents of the article to ensure the most relevant article is used"
      },
      {
        "letter": "B",
        "text": "Any text or text area fields that provide a concise summary of the article"
      },
      {
        "letter": "C",
        "text": "Any standard or custom formula field that contains a suitable concatenated key"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 87,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers (UC) has built a custom retriever in AI Models (formerly Einstein Studio) to ground AI responses with technical documentation. UC now requires that a summary field from the search index be included in the output to provide a brief overview of each retrieved document. What is the recommended course of action for UC?",
    "options": [
      {
        "letter": "A",
        "text": "Create a completely new custom retriever with an entirely revised configuration that incorporates the summary field, and delete the current retriever. Editing the existing retriever is not possible."
      },
      {
        "letter": "B",
        "text": "Edit the existing retriever version to add the summary field to the list of fields returned by the retriever, save the changes, and activate the new version so that prompt templates use the updated configuration."
      },
      {
        "letter": "C",
        "text": "Use only the default retriever, which will automatically include all available fields from the search index, including the summary field, without any need to create or manage custom retrievers."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 88,
    "category": "Agent Deployment and Testing",
    "text": "An Agentforce Specialist is trying to troubleshoot a reported issue from an end user and they do not see the session in the Processed Sessions tab of Agentforce Observability. What should the specialist take into consideration?",
    "options": [
      {
        "letter": "A",
        "text": "The agent has not yet been registered in the Observability app so no sessions are processed."
      },
      {
        "letter": "B",
        "text": "The session is queued to be processed and can be viewed on the Unprocessed Sessions tab."
      },
      {
        "letter": "C",
        "text": "Sessions are batched on a 24-hour rolling process and the logs must be checked again the next day."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 89,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is designing an agent to assist with order management and dealer support automation. The agent must verify a dealer's credentials before granting access to order details. The team has already: Declared a variable is_verified to track verification status Configured an action that verifies the dealer's credentials Plans to restrict access to the order details subagent using a guard condition based on is_verified What must the team do to ensure the order details subagent becomes available only after a dealer is successfully verified?",
    "options": [
      {
        "letter": "A",
        "text": "Add an available when: @variables.is_verified = true condition to the order details subagent."
      },
      {
        "letter": "B",
        "text": "Declare the is_verified variable as immutable so it cannot be modified during the session."
      },
      {
        "letter": "C",
        "text": "Update the is_verified variable to true after the verification action succeeds using @utils.setVariables."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 90,
    "category": "Agentforce and Data 360",
    "text": "Universal Containers is implementing a Retrieval Augmented Generation (RAG) solution where the knowledge store contains Spanish articles, but users will query the agent in French and English. The Agentforce Specialist needs to ensure the retriever can accurately find relevant articles despite the language differences. What should the specialist do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use the multilingual e5-large embedding model for French and Spanish language users."
      },
      {
        "letter": "B",
        "text": "Use the multilingual e5-large embedding model for French and English language users."
      },
      {
        "letter": "C",
        "text": "Use the multilingual e5-large embedding model to handle all languages."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 91,
    "category": "Agentforce Concepts",
    "text": "Universal Containers (UC) recently attended a major trade show and received thousands of new leads from event badge scans. UC is struggling to follow up with each lead in a timely, personalized way. Leadership wants to: Qualify and nurture leads 24/7 Provide accurate answers to prospect questions Automatically book meetings with qualified prospects Free up reps to focus on building relationships and closing deals Which Agentforce capability should UC implement to meet these goals?",
    "options": [
      {
        "letter": "A",
        "text": "Marketing Agent"
      },
      {
        "letter": "B",
        "text": "Pipeline Management"
      },
      {
        "letter": "C",
        "text": "Lead Nurturing Agent"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 92,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) wants to create a prompt template that consistently extracts a customer's specific product model number and quantity from an email inquiry to draft a response back to the customer. Which best practice should UC implement to achieve this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Provide clear, positive instructions and use few-shot examples."
      },
      {
        "letter": "B",
        "text": "Incorporate open-ended questions to encourage detailed responses."
      },
      {
        "letter": "C",
        "text": "Use a high temperature setting to increase creative output."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 93,
    "category": "Prompt Engineering",
    "text": "An Agentforce Specialist is creating a prompt template to assist service reps in drafting responses to customer complaints. To ensure the responses are empathetic and helpful, what is a key element to include in the prompt template?",
    "options": [
      {
        "letter": "A",
        "text": "A list of keywords related to customer complaints"
      },
      {
        "letter": "B",
        "text": "A direct instruction to the LLM to role-play as a character"
      },
      {
        "letter": "C",
        "text": "The entire history of the customer's previous interactions with the company"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 94,
    "category": "Agent Deployment and Testing",
    "text": "A customer wants to analyze complete agent interactions, from the initial user request through to the final resolution, to better understand agent behavior and response quality. Which Agentforce feature should an Agentforce Specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Agent Inspection"
      },
      {
        "letter": "B",
        "text": "Agent Insights"
      },
      {
        "letter": "C",
        "text": "Agent Optimization"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 95,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has been building an agent using Canvas. It has created an \"Issue Refund\" action. Business rules dictate that refunds can only be issued if the customer's Account_Tier is \"Platinum\", Currently, the agent relies on its system instructions to check the tier, but it occasionally hallucinates authorization and attempts to call the refund action for Standard customers, resulting in backend errors. How should the Agentforce Specialist use filters to deterministically ensure the agent cannot process the \"Issue Refund\" action unless the customer meets the criteria?",
    "options": [
      {
        "letter": "A",
        "text": "Update the agent's system instructions with a strict rule to manually filter out any refund requests if the customer's account tier is not Platinum."
      },
      {
        "letter": "B",
        "text": "Apply a text filter to the Agent Session that automatically blocks the word \"refund\" from the user's prompt unless they are a Platinum customer."
      },
      {
        "letter": "C",
        "text": "Configure an Action Condition filter on the \"Issue Refund\" action so that it is only available to the agent when Account_Tier equals \"Platinum\"."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 96,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) is tracking web activities in Data 360 for a unified contact. It wants to use that information in a prompt template to help extract insights from the data. Assuming that the Contact object is one of the objects associated with the prompt template, what is a valid way for UC to do this?",
    "options": [
      {
        "letter": "A",
        "text": "Call the prompt directly from Data 360 with a web tracking activity included in the prompt definition."
      },
      {
        "letter": "B",
        "text": "Add the activity records as an enrichment related list to the Contact, then pass the Contact into a prompt template workspace using related list grounding."
      },
      {
        "letter": "C",
        "text": "Create a prompt template that takes a list of all Data 360 activity records as input to pass to the LLM."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 97,
    "category": "Agentforce and Data 360",
    "text": "When configuring a file upload based data library, what are the maximum allowed file sizes for text/HTML files and PDF files, respectively?",
    "options": [
      {
        "letter": "A",
        "text": "Up to 4 MB for text/HTML files and up to 100 MB for PDF files"
      },
      {
        "letter": "B",
        "text": "Up to 50 MB for both text/HTML files and PDF files"
      },
      {
        "letter": "C",
        "text": "Up to 100 MB for text/HTML files and up to 4 MB for PDF files"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 98,
    "category": "Agentforce Concepts",
    "text": "A customer is authenticated and identified as being either bronze, silver, or gold membership level. Those levels define which subagents or actions are available to perform specific tasks as per level-based entitlements. What is the best way to ensure the agent responds appropriately?",
    "options": [
      {
        "letter": "A",
        "text": "Use before_reasoning to set custom variables that will be used in filters and flow logic."
      },
      {
        "letter": "B",
        "text": "Use after_reasoning to set custom variables that will be used in filters and flow logic."
      },
      {
        "letter": "C",
        "text": "Use Agent Router to set custom variables that will be used in filters and flow logic."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 99,
    "category": "Agent Deployment and Testing",
    "text": "Which feature in the Trust Layer helps to minimize the risks of jailbreaking and prompt injection attacks?",
    "options": [
      {
        "letter": "A",
        "text": "Data Masking"
      },
      {
        "letter": "B",
        "text": "Prompt Defense"
      },
      {
        "letter": "C",
        "text": "Secure Data Retrieval and Grounding"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 100,
    "category": "Agentforce and Data 360",
    "text": "An Agentforce Specialist at Cloud Kicks wants to build a RAG-powered agent grounded in text-based PDF documents. The specialist wants a quick-start approach that automatically generates all underlying components, including the vector data store, search index, retriever, and standard action. Which feature should the specialist use?",
    "options": [
      {
        "letter": "A",
        "text": "Ensemble Retriever"
      },
      {
        "letter": "B",
        "text": "Agentforce Data Library"
      },
      {
        "letter": "C",
        "text": "Search Index"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 101,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers operates in a regulated industry and must maintain a complete, turn-by-turn audit trail of every agent interaction. Which Agentforce feature provides full visibility into reasoning engine executions, actions, inputs, outputs, and error messages across an entire agent conversation?",
    "options": [
      {
        "letter": "A",
        "text": "Agentforce Session Tracing"
      },
      {
        "letter": "B",
        "text": "Agentforce Optimization"
      },
      {
        "letter": "C",
        "text": "Utterance Analysis"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 102,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers operates in a regulated industry and has deployed an Agentforce customer service agent handling thousands of interactions per week. The operations team notices that a significant number of conversations result in unexpected escalations, but cannot identify which subagents or actions are consistently underperforming or misconfigured. Which Agentforce feature allows the team to cluster interaction patterns, identify performance gaps across sessions, and apply quality scoring to pinpoint where the agent's configuration needs improvement?",
    "options": [
      {
        "letter": "A",
        "text": "Agentforce Optimization"
      },
      {
        "letter": "B",
        "text": "Agentforce Health Monitoring"
      },
      {
        "letter": "C",
        "text": "Agentforce Session Tracing"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 103,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) wants to ground a new prompt template with the User related list. What should UC consider?",
    "options": [
      {
        "letter": "A",
        "text": "The User related list is not supported in prompt templates."
      },
      {
        "letter": "B",
        "text": "The User related list should have View All access."
      },
      {
        "letter": "C",
        "text": "The User related list needs to be included on the record page."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 104,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is developing an Agentforce Service Agent to handle a complex, multi-step customer onboarding process. To better organize the conversational logic, the Specialist splits the process across two distinct subagents and places the setup configuration for the second step inside the before_reasoning block of the new subagent. During testing, when the agent transitions to this new subagent mid conversation, the conversation occasionally stalls or behaves unexpectedly. What is the risk the Specialist must consider regarding the execution timing of before_reasoning?",
    "options": [
      {
        "letter": "A",
        "text": "The before_reasoning block will only run once and sets immutable variables."
      },
      {
        "letter": "B",
        "text": "The before_reasoning block runs at the start of the next turn after a transition."
      },
      {
        "letter": "C",
        "text": "The before_reasoning block only runs on the very first turn after the agent launches."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 105,
    "category": "Agentforce Concepts",
    "text": "When a verified customer in a help center says. \"I want to upgrade my service plan.\" an AI agent needs to complete the following tasks: Verify identity and entitlement Create a new quote Calculate a prorated upgrade amount Escalate to an Account Executive (AE) only if the reorder exceeds US$25,000 Which type of agent should an Agentforce Specialist build to support this use case?",
    "options": [
      {
        "letter": "A",
        "text": "Service Agent to resolve the case end-to-end and create a new opportunity for the sales team"
      },
      {
        "letter": "B",
        "text": "Employee Agent to orchestrate internal logistics and finance"
      },
      {
        "letter": "C",
        "text": "Sales Agent to handle the upsell and large deal escalation"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 106,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) wants users to populate the Description field on the Account record by clicking a button on the record page, with the option to preview, regenerate, or manually edit the output before it is saved. The solution must use declarative tools only. Which type of prompt template should UC use?",
    "options": [
      {
        "letter": "A",
        "text": "Field Generation"
      },
      {
        "letter": "B",
        "text": "Flex"
      },
      {
        "letter": "C",
        "text": "Sales Email"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 107,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers recently deployed a customer service agent to handle common inquiries. After a month of usage, the support manager wants to analyze the agent's performance. They need to view aggregated metrics such as escalation rate to human agents, average session duration, and which topics have the lowest resolution scores so they can prioritize which agent actions need optimization. Which native Salesforce capability should the Specialist use to provide these insights and guide the optimization strategy?",
    "options": [
      {
        "letter": "A",
        "text": "Agentforce Observability, leveraging Agent Analytics dashboards and the Session Tracing Data Model to review aggregate performance and drill into specific underperforming interactions"
      },
      {
        "letter": "B",
        "text": "The Einstein Trust Layer Audit Trail, exporting raw JSON logs to measure token usage and temperature settings of every user session"
      },
      {
        "letter": "C",
        "text": "The Salesforce Optimization report, scheduling a monthly scan to identify deprecated subagents and unused agent actions across the org"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 108,
    "category": "Agent Deployment and Testing",
    "text": "Coral Cloud Resorts wants to cover a broad range of user phrasing when testing its FAQ agent. Which Testing Center functionality supports this need?",
    "options": [
      {
        "letter": "A",
        "text": "Uploading only a small set of manually written prompts"
      },
      {
        "letter": "B",
        "text": "AI-generated synthetic test utterances based on natural language variations"
      },
      {
        "letter": "C",
        "text": "Relying on live customer logs to capture phrasing diversity after deployment"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 109,
    "category": "Agentforce and Data 360",
    "text": "During RAG quality testing, an Agentforce Specialist notices that tabular information from a custom Data 360 Document Ingestion Pipeline is losing its context because the data is scattered across multiple separate chunks. What is the most appropriate approach to resolve this?",
    "options": [
      {
        "letter": "A",
        "text": "Change the search index's parser from the default to Docking."
      },
      {
        "letter": "B",
        "text": "Use an ensemble retriever to stitch multiple chunks back together dynamically."
      },
      {
        "letter": "C",
        "text": "Switch the search index configuration to use only keyword search scoring."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 110,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is configuring a customer service agent and needs to restrict a specific \"Process Refund\" action so that it is only visible to the reasoning engine when a customer's account is flagged as active. An Agentforce Specialist is writing the available when clause in Agent Script to evaluate the @variables.IsActive variable. Which operator should the Agentforce Specialist use for this condition?",
    "options": [
      {
        "letter": "A",
        "text": "The Specialist must use the = operator; Agent Script uses = strictly for comparison in conditionals."
      },
      {
        "letter": "B",
        "text": "Both = and == are valid and interchangeable; the Specialist can use either operator."
      },
      {
        "letter": "C",
        "text": "The Specialist must use the == operator, Agent Script uses == for both variable assignment and condition comparison."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 111,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is deploying a new customer service agent using Agent Script. The Specialist needs to update conversational state, navigate between different subagents, and hand off conversations to a human agent when necessary. To minimize technical debt, the Specialist wants to implement these capabilities without building any custom backend code. Which statement correctly describes how the Specialist can implement these specific requirements?",
    "options": [
      {
        "letter": "A",
        "text": "The Specialist can use @utils.setVariables, @utils.transition, and @utils.escalate directly."
      },
      {
        "letter": "B",
        "text": "The Specialist can use most utilities directly, but @utils.escalate requires a custom Apex class to define the escalation queue."
      },
      {
        "letter": "C",
        "text": "The Specialist can use most utilities out of the box, but @utils.transition requires a flow to define the target subagent at runtime."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 112,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) wants users to populate the Description field on the Account record by clicking a button on the record page, with the option to preview, regenerate, or manually edit the output before it is saved. The solution must use declarative tools only. Which type of prompt template should UC use?",
    "options": [
      {
        "letter": "A",
        "text": "Field Generation"
      },
      {
        "letter": "B",
        "text": "Flex"
      },
      {
        "letter": "C",
        "text": "Sales Email"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 113,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers is auditing its AI architecture and needs to ensure that its developers are restricted to using only specifically approved large language models (LLMs). How should an Agentforce Specialist manage and prevent unapproved models from being accessed across the organization?",
    "options": [
      {
        "letter": "A",
        "text": "Apply an Attribute-Based Access Control (ABAC) policy within the Einstein Trust Layer to block prompts from routing to unapproved LLMs."
      },
      {
        "letter": "B",
        "text": "Write a strict system instruction within the Agent Builder stating, \"Never use external models for reasoning\"."
      },
      {
        "letter": "C",
        "text": "Ensure only approved LLMs are enabled in Model Provider section under Einstein setup."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 114,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers' Agentforce Specialist suspects the Service Agent is systematically misclassifying billing dispute intents under a general enquiry topic, causing incorrect actions to execute. The administrator needs to identify this pattern across production sessions without reviewing individual transcripts. What should the specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Session Tracing in Agentforce Observability and query the Data 360 Session Tracing Data Model directly, grouping moments by topic classification API name to surface billing dispute intents routed to the incorrect topic at scale."
      },
      {
        "letter": "B",
        "text": "Use Agent Optimization in Agentforce Studio, which segments production sessions into moments and generates system intent clusters weekly from cross- session analysis."
      },
      {
        "letter": "C",
        "text": "Upload a representative set of billing dispute utterances to the Agentforce Testing Center and run a batch test comparing expected versus actual topic classifications to identify the scope of the misclassification pattern across production intents."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 115,
    "category": "Agent Deployment and Testing",
    "text": "Universal Containers wants to ensure that its AI agent's responses consistently reflect the company's unique brand voice and specific quality standards beyond simple pass or fail checks. How should the Agentforce Specialist configure the Testing Center to evaluate this specific criteria?",
    "options": [
      {
        "letter": "A",
        "text": "Enable the Coherence quality evaluation."
      },
      {
        "letter": "B",
        "text": "Use the default Response Evaluation metric."
      },
      {
        "letter": "C",
        "text": "Create a custom evaluation using an large language model (LLM) judge."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 116,
    "category": "Agentforce Concepts",
    "text": "Universal Containers has multiple Salesforce orgs, each with a unique customer service agent where a verification agent must pass customer identity data to downstream agents handling account modifications. The customer ID must remain secure and persistent across agent handoffs without exposure to large language model (LLM) modification. What is the most appropriate configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Use the Agent API to start the downstream agent's session and pass the verified customer ID as a read-only context variable, ensuring security and preventing LLM alteration."
      },
      {
        "letter": "B",
        "text": "Store customer identity information in messaging session variables created by the first agent and have other agents read those same variables."
      },
      {
        "letter": "C",
        "text": "Implement a custom object to temporarily store verification status and have each agent query it via SOQL actions during execution."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 117,
    "category": "Prompt Engineering",
    "text": "The sales team at a hotel resort would like to generate a guest summary about each guest's interests and provide recommendations based on the activity preferences captured in each guest profile. They want the summary to be available only on the Contact record page. Which AI capability should the team use?",
    "options": [
      {
        "letter": "A",
        "text": "Prompt Builder"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Agentforce Builder"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 118,
    "category": "Agentforce Concepts",
    "text": "Universal Containers wants to allow its service agents to query the current fulfillment status of an order with natural language. There is an existing autolaunched flow to query the information from Oracle ERP, which is the system of record for the order fulfillment process. How should an Agentforce Specialist apply the power of conversational AI to this use case?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Flex prompt template in Prompt Builder."
      },
      {
        "letter": "B",
        "text": "Create a custom agent action which calls a flow."
      },
      {
        "letter": "C",
        "text": "Configure the Integration Flow standard action in Agentforce Builder."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 119,
    "category": "Prompt Engineering",
    "text": "Universal Containers (UC) needs to create a sales email with a custom prompt template. UC needs to ground on the following data. Opportunity Products Events near the customer Tone and voice examples How should UC obtain related items?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Flex template that takes the records in question as inputs."
      },
      {
        "letter": "B",
        "text": "Utilize a standard email template and manually insert the required data fields."
      },
      {
        "letter": "C",
        "text": "Call a prompt-initiated flow to fetch and ground the required data."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 120,
    "category": "Agent Deployment and Testing",
    "text": "The VP of Service at Universal Containers (UC) requires a report showing weekly deflection rate trends and escalation volumes for the Agentforce Service Agent over the past 90 days. Which approach should the Agentforce Specialist recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Agentforce Health Monitoring to configure escalation rate alert thresholds and export the resulting trend data into a Tableau dashboard aligned with the VP of Service's reporting requirements."
      },
      {
        "letter": "B",
        "text": "Use Agent Analytics within Agentforce Observability, which provides Tableau- powered dashboards with prebuilt deflection rate, escalation volume, and abandonment metrics calculated from agent session data stored in Data 360."
      },
      {
        "letter": "C",
        "text": "Query the OTEL-compliant Session Tracing Data Model in Data 360 using CRM Analytics to build a custom dashboard with deflection rate calculations and week- over-week escalation comparisons tailored to UC's reporting standards."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 121,
    "category": "Agentforce Concepts",
    "text": "The Agentforce Specialist for Coral Cloud Resorts wants to create an agent that will automate the resolution of a large portion of guest complaints related to their vacation experiences. The agent will be able to offer upgrades, hotel credit, and other complimentary options. The agent will also be in charge of escalating the case to a human when a guest has suffered a major disruption (such as cancellation). Following Salesforce best practices, which type of agent should the Agentforce Specialist create?",
    "options": [
      {
        "letter": "A",
        "text": "Employee Agent with a Flex prompt template"
      },
      {
        "letter": "B",
        "text": "Sales Agent with a Flex prompt template"
      },
      {
        "letter": "C",
        "text": "Service Agent with a Flex prompt template"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 122,
    "category": "Agentforce Concepts",
    "text": "Universal Containers is testing an agent with a \"Reset Password\" action restricted by the guard available when @variables.isVerified = True. During a single conversation turn, the large language model (LLM) successfully sets the isVerified flag to true using @utils.setVariables, but fails to invoke the \"Reset Password\" action immediately afterward. What must the Agentforce Specialist consider regarding how the reasoning engine evaluates action availability?",
    "options": [
      {
        "letter": "A",
        "text": "The action is available from the start; the reasoning engine's intent to solve the user's issue automatically overrides the available when guard."
      },
      {
        "letter": "B",
        "text": "The action becomes available immediately; available when conditions dynamically re-evaluate after every variable change within a single turn."
      },
      {
        "letter": "C",
        "text": "The action remains unavailable for that turn; available when conditions control action visibility to the LLM and evaluate before the reasoning cycle begins, so the action won't be callable until the next turn."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 123,
    "category": "Agentforce Concepts",
    "text": "At Horizon Insurance, the customer service team is reporting that the agent consistently routes claims intake conversations to the Policy Inquiry subagent (formerly known as a topic), even though user intent clearly indicates a claims- related issue. This misrouting persists despite the user clearly expressing the intent to discuss a claim. The Agentforce Specialist added guard conditions but the problem persists. What is most likely causing this incorrect routing in Horizon Insurance's agent?",
    "options": [
      {
        "letter": "A",
        "text": "Procedural instructions requiring Salesforce Flows to route to the correct subagent"
      },
      {
        "letter": "B",
        "text": "Use of global instructions to define subagent routing for agents in compliance- regulated environments"
      },
      {
        "letter": "C",
        "text": "Overlap in subagent descriptions and entry conditions between 'Claims Intake' and 'Policy Inquiry' subagents"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 124,
    "category": "Agentforce and Data 360",
    "text": "Ursa Major Solar is developing a help agent that must answer customer questions by grounding prompts in data from both internal knowledge articles and an external partner portal. The Agentforce Specialist configures the agent to use a Data 360 search index. During testing in the Agentforce Builder, the agent occasionally provides conflicting answers, and the specialist needs to differentiate between these two grounding sources to troubleshoot the responses. Which Data 360 process should the specialist review to ensure the origin of the information is accurately identified and made available?",
    "options": [
      {
        "letter": "A",
        "text": "The data harmonization process, where raw data is mapped to data model objects (DMOs) and source metadata is standardized to be queried specifically by hybrid retrieves"
      },
      {
        "letter": "B",
        "text": "The Retrieval-Augmented Generation (RAG) synthesis phase, where the large language model (LLM) automatically uses a semantic retrieve to append the source system tag to the final generated output"
      },
      {
        "letter": "C",
        "text": "The Data 360 retriever function process, where retrieved content can be filtered based on source metadata (such as document type or author) to refine results before they are ranked using semantic or hybrid search"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 125,
    "category": "Agent Deployment and Testing",
    "text": "An Agentforce Specialist builds a new Service Agent that uses a custom action built on a flow. The agent has been tested in a sandbox and is now ready to deploy. What is a key consideration regarding the activation status of the agent in the production environment?",
    "options": [
      {
        "letter": "A",
        "text": "The agent must be manually activated in production, regardless of its status in the sandbox."
      },
      {
        "letter": "B",
        "text": "The agent will automatically be activated upon successful deployment."
      },
      {
        "letter": "C",
        "text": "The agent will be activated automatically only if the flow is also active."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 126,
    "category": "Agentforce and Data 360",
    "text": "An insurance company needs a Service Agent to ground its responses based on company-specific PDFs and a comprehensive knowledge base. Which type of retriever should the Agentforce Specialist use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Dynamic retriever"
      },
      {
        "letter": "B",
        "text": "Individual retriever"
      },
      {
        "letter": "C",
        "text": "Ensemble retriever"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 127,
    "category": "Prompt Engineering",
    "text": "Universal Containers has seen a high adoption rate of a new feature that uses generative AI to populate a summary field of a custom object, Competitor Analysis. All sales users have the same profile, but one user can't see the generative AI- enabled field icon next to the summary field. What is the most likely cause of the issue?",
    "options": [
      {
        "letter": "A",
        "text": "The prompt template associated with the summary field is not activated for that user."
      },
      {
        "letter": "B",
        "text": "The user does not have the Prompt Template User permission set assigned."
      },
      {
        "letter": "C",
        "text": "The user does not have the Generative AI User permission set assigned."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 128,
    "category": "Prompt Engineering",
    "text": "What is the correct process to leverage Prompt Builder in a Salesforce org?",
    "options": [
      {
        "letter": "A",
        "text": "Select the appropriate prompt template type, develop the prompt within the prompt workspace, select resources to dynamically insert CRM-derived grounding data, pick the model to use, and test and validate the generated responses."
      },
      {
        "letter": "B",
        "text": "Enable the target object for generative prompting, develop the prompt within the prompt workspace, select records to fine-tune and ground the response, enable the Trust Layer, and associate the prompt to an action."
      },
      {
        "letter": "C",
        "text": "Select the appropriate prompt template type, select a Salesforce standard prompt, determine the object to associate the prompt, select a record to validate against, and associate the prompt to an action."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 129,
    "category": "Agent Deployment and Testing",
    "text": "An administrator at Universal Containers has successfully deployed a new Service Agent from a sandbox to production using a change set. The Service Agent uses a prompt template that invokes a Salesforce flow to perform a complex calculation. In production, when users interact with the Service Agent, it fails with an error message every time the flow is supposed to run. The flow was included in the change set and is present in production. What is the most likely cause of this issue?",
    "options": [
      {
        "letter": "A",
        "text": "The user in production does not have permission to run the flow."
      },
      {
        "letter": "B",
        "text": "The change set did not include the dependent Apex classes for the flow."
      },
      {
        "letter": "C",
        "text": "The flow was not manually activated in the production org after deployment."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 130,
    "category": "Prompt Engineering",
    "text": "What is the correct process to leverage Prompt Builder in a Salesforce org?",
    "options": [
      {
        "letter": "A",
        "text": "Select the appropriate prompt template type, develop the prompt within the prompt workspace, select resources to dynamically insert CRM-derived grounding data, pick the model to use, and test and validate the generated responses."
      },
      {
        "letter": "B",
        "text": "Enable the target object for generative prompting, develop the prompt within the prompt workspace, select records to fine-tune and ground the response, enable the Trust Layer, and associate the prompt to an action."
      },
      {
        "letter": "C",
        "text": "Select the appropriate prompt template type, select a Salesforce standard prompt, determine the object to associate the prompt, select a record to validate against, and associate the prompt to an action."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  },
  {
    "id": 131,
    "category": "Agentforce Concepts",
    "text": "Cloud Kicks wants to integrate its agent with its custom website. The goal is for customers to interact with the custom agent chat interface. Which approach provides the framework for the custom web application to communicate with the agent?",
    "options": [
      {
        "letter": "A",
        "text": "Agent API"
      },
      {
        "letter": "B",
        "text": "Model Context Protocol (MCP)"
      },
      {
        "letter": "C",
        "text": "Agent to Agent (A2A)"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": ""
  }
];
