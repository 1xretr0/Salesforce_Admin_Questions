// ============================================================
// Platform App Builder — Question Bank
// Parsed from app_builder_practice_questions.md by scripts/parse_appbuilder.py
// 351 questions across 5 sections
// ============================================================

const APPBUILDER_CATEGORIES = {
  SALESFORCE_FUNDAMENTALS: "Salesforce Fundamentals",
  DATA_MODELING_AND_MANAGEMENT: "Data Modeling and Management",
  BUSINESS_LOGIC_AND_PROCESS_AUTOMATION: "Business Logic and Process Automation",
  USER_INTERFACE: "User Interface",
  APP_DEPLOYMENT: "App Deployment"
};

const APPBUILDER_SECTIONS = [
  { name: "Salesforce Fundamentals", weight: 18 },
  { name: "Data Modeling and Management", weight: 20 },
  { name: "Business Logic and Process Automation", weight: 32 },
  { name: "User Interface", weight: 17 },
  { name: "App Deployment", weight: 13 }
];

const APPBUILDER_QUESTIONS = [
  {
    "id": 1,
    "category": "Salesforce Fundamentals",
    "text": "UC manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department. Which two options will meet these requirements assuming the organization-wide default for Projects is set to private? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets."
      },
      {
        "letter": "B",
        "text": "Create a criteria-based sharing rule using the Project's department that grants access to users by roles."
      },
      {
        "letter": "C",
        "text": "Create a criteria-based sharing rule using the Project's department that grants access to users by profile."
      },
      {
        "letter": "D",
        "text": "Create a criteria-based sharing rule using the Project's department that grants access to users by public groups."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "Roles and Public Groups: In Salesforce, sharing rules are used to open up record access. When configuring which records are \"Shared with\" in a sharing rule, you can only grant that access to Roles, Public Groups, or Territories. Profiles and Permission Sets: You cannot directly share records with profiles or permission sets via sharing rules. Profiles and permission sets are used to control object-level and field-level security, not for granting record-level sharing access."
  },
  {
    "id": 2,
    "category": "Salesforce Fundamentals",
    "text": "A manager built out a new Account report and wants to add a chart of the data to the account records. An app builder tried to use the Report Chart component but was unable to find the manager's report. What are two reasons the app builder is unable to see the report? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "The report has no data in it."
      },
      {
        "letter": "B",
        "text": "The app builder did not create the report."
      },
      {
        "letter": "C",
        "text": "The report is in the manager's Private Reports folder."
      },
      {
        "letter": "D",
        "text": "The report does not have a chart."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "c. The report is in the manager's Private Reports folder: Reports, dashboards, or email templates in a user's Private folder cannot be shared, meaning other users (even admins) cannot select them for components. d. The report does not have a chart: To display a chart within a Report Chart component on a Lightning Page, the source report must contain a chart, which requires the report to be a Summary, Matrix, or Joined format."
  },
  {
    "id": 3,
    "category": "Salesforce Fundamentals",
    "text": "AW Computing uses a private sharing model for opportunities. Whenever an opportunity with a type of Service Agreement is created, all users in the Service Manager role should be able to view the opportunity. Which tool should AW Computing use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Criteria-based sharing rules"
      },
      {
        "letter": "B",
        "text": "Apex sharing rules"
      },
      {
        "letter": "C",
        "text": "Manual sharing"
      },
      {
        "letter": "D",
        "text": "Owner-based sharing rules"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=platform.security_sharing_rule_types.ht m&type=5"
  },
  {
    "id": 4,
    "category": "Salesforce Fundamentals",
    "text": "NTO wants the field sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The inside sales team needs to see all accounts in Salesforce. How can this be accomplished?",
    "options": [
      {
        "letter": "A",
        "text": "Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each marketing team, and create an Inside Sales Team permission set with the \"View All\" setting for accounts."
      },
      {
        "letter": "B",
        "text": "Set the Organization-Wide Default to Public for accounts. Create profiles for each marketing team, and create an Inside Sales Team role that is at the top of the Role Hierarchy."
      },
      {
        "letter": "C",
        "text": "Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each marketing team, and create an Inside Sales Team profile with the \"View All\" setting for accounts."
      },
      {
        "letter": "D",
        "text": "Set the Organization-Wide Default to Private for accounts. Create permission sets for each marketing team, and create an Inside Sales Team profile with the \"View All\" setting for accounts."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://salesforcehandle.com/data-security-and-sharing-models/"
  },
  {
    "id": 5,
    "category": "Salesforce Fundamentals",
    "text": "UMS uses a public sharing model for accounts. UMS would like to move to a more restrictive sharing model but wants the Sales team to continue to have access to all account records with the sales record type. Which two actions should an app builder complete to implement this change? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Update the Sales profile."
      },
      {
        "letter": "B",
        "text": "Update the organization-wide defaults."
      },
      {
        "letter": "C",
        "text": "Create a criteria-based sharing rule."
      },
      {
        "letter": "D",
        "text": "Create an owner-based sharing rule."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "https://salesforcehandle.com/data-security-and-sharing-models/"
  },
  {
    "id": 6,
    "category": "Salesforce Fundamentals",
    "text": "UC uses a custom object called Reviews to capture information generated by interviewers during the candidate process. The Review records are visible to any user that has access to the related custom Candidate record. The VP of Human Resources wants the comment field on the Review to be private to anyone outside of the HR department. How should the app builder meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a page layout with the field and use field-level security to hide the field from all other users."
      },
      {
        "letter": "B",
        "text": "Create an Apex sharing rule to share the field with users that have \"HR\" in their role."
      },
      {
        "letter": "C",
        "text": "Create a sharing rule to share the field with the VP of HR with Role and Subordinates."
      },
      {
        "letter": "D",
        "text": "Create a page layout with the field for HR users and another page layout without the field for all other users."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm&type=5"
  },
  {
    "id": 7,
    "category": "Salesforce Fundamentals",
    "text": "At UC, all US Sales Reps should be able to view the US Team Dashboard. However, only the US Sales Directors should be able to see the data in the component and view its source report. How should an app builder ensure the proper access is granted?",
    "options": [
      {
        "letter": "A",
        "text": "Share the dashboard folder with the roles and subordinates of the US Sales Director, and share the report folder with the role of the US Sales Director."
      },
      {
        "letter": "B",
        "text": "Make the dashboard dynamic and give US Sales Reps the View My Team's Dashboard permission."
      },
      {
        "letter": "C",
        "text": "Share the dashboard with Public Group US Sales Reps and share the dashboard source reports folder with the US Sales Director profile."
      },
      {
        "letter": "D",
        "text": "Make the US Sales Director the running user and share the dashboard folder with the role US Sales Rep."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.rd_folders_share_enhanced.htm&type= 5"
  },
  {
    "id": 8,
    "category": "Salesforce Fundamentals",
    "text": "The app builder at CK has created a custom object named Delivery__c to track the details of products shipped to customers. Which two actions should the app builder take to prevent users in the shipping department from deleting delivery records? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Remove the Delete permission from the Shipper profile."
      },
      {
        "letter": "B",
        "text": "Change the organization-wide default of deliveries to Private."
      },
      {
        "letter": "C",
        "text": "Remove the delete button from the Delivery page layout."
      },
      {
        "letter": "D",
        "text": "Use a permission set to remove the Delete permission."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "A. Remove the Delete permission from the Shipper profile: Object-level permissions are controlled by profiles and permission sets. Removing the Delete permission here prevents the shippers from deleting records altogether. C. Remove the delete button from the Delivery page layout: Page layout configurations dictate the user interface. Removing the button prevents users from easily deleting records from the record view screen. Option D is incorrect because permission sets are used to grant additional permissions, not remove them. Option B is incorrect because Private organization-wide defaults affect record visibility/sharing, not the ability to delete records"
  },
  {
    "id": 9,
    "category": "Salesforce Fundamentals",
    "text": "After UC converts qualified leads, sales reps need to be able to report on converted leads. How should an app builder support this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Ensure the representative has Read access to the original lead records."
      },
      {
        "letter": "B",
        "text": "Assign the representative View and Edit Converted permission."
      },
      {
        "letter": "C",
        "text": "Enable Preserve Lead Status in the lead conversion settings."
      },
      {
        "letter": "D",
        "text": "Create a custom report type with Converted Leads as the primary object."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Standard Lead reports do not include converted leads. To let sales reps report on converted leads, create a custom report type with Converted Leads as the primary object. The View and Edit Converted Leads permission only allows editing, deleting, or transferring converted lead records; it does not make them reportable."
  },
  {
    "id": 10,
    "category": "Salesforce Fundamentals",
    "text": "A custom field on an account is used to track finance information about a customer. Only members of the finance team have access to this field. However, the business wants to allow one customer service agent, who is assigned the Customer Service profile, read- only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
    "options": [
      {
        "letter": "A",
        "text": "Update the custom field's field level security in setup to allow the agent read-only access to the field."
      },
      {
        "letter": "B",
        "text": "Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via field level security."
      },
      {
        "letter": "C",
        "text": "Create a new profile to allow for read-only access to the field via field-level security and assign it to the agent."
      },
      {
        "letter": "D",
        "text": "Create a permission set that allows read-only access to the field via field level security and assign it to the agent."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Granularity & Principle of Least Privilege: Permission sets are designed to grant additional access to specific users without changing their entire profile. Since only one agent needs this access for \"special circumstances,\" a permission set is the most efficient and scalable way to provide that specific exception. Best Practice: In Salesforce, profiles should define the \"base\" permissions for a group of users, while permission sets are used to extend those permissions for individuals or small groups."
  },
  {
    "id": 11,
    "category": "Salesforce Fundamentals",
    "text": "CK has three types of customer support processes: Platinum, Diamond, and Bronze. The app builder created separate record types for each process on the Case object. The customer support team should be unable to create new cases with the Bronze record type. How should this requirement be met?",
    "options": [
      {
        "letter": "A",
        "text": "Update the organization-wide defaults to private for Case."
      },
      {
        "letter": "B",
        "text": "Update the support team profile to remove the Bronze record type."
      },
      {
        "letter": "C",
        "text": "Create a permission set group for Case that includes Platinum and Diamond record types."
      },
      {
        "letter": "D",
        "text": "Make the record type hidden to support users; update sharing rules to private."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "In Salesforce, a user's ability to create a record of a specific record type is entirely controlled by their Profile or Permission Sets. By deselecting the Bronze record type from the support team's profile, users on that profile will no longer be able to select or create cases using the Bronze layout/process. Why the others are wrong: A: Organization-Wide Defaults (OWD) manage baseline record visibility and access, not the ability to create new records of a specific type. C: Permission Sets/Groups can be used to grant access to custom record types, but they cannot be used to restrict standard access that has already been granted elsewhere. D: Hiding a record type from users (via page layouts or list views) does not actually prevent users from manually choosing or creating it if it is still assigned to their profile. Furthermore, Sharing Rules are used to grant broader access, not to restrict creation."
  },
  {
    "id": 12,
    "category": "Salesforce Fundamentals",
    "text": "CK has a custom object with a private sharing setting. The business wants to share individual records with specific people or departments on a case-by-case basis. Which three options does the business user have to manually share individual records? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Roles and Subordinates"
      },
      {
        "letter": "B",
        "text": "Public Groups"
      },
      {
        "letter": "C",
        "text": "Private Groups"
      },
      {
        "letter": "D",
        "text": "Permission Set Groups"
      },
      {
        "letter": "E",
        "text": "Users"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.granting_access_to_records_lex.htm &type=5"
  },
  {
    "id": 13,
    "category": "Salesforce Fundamentals",
    "text": "A sales rep at AW Computing is unable to find what they are looking for while scrolling through their Chatter feed. How can a filter be utilized to show only posts from their key account and opportunity records?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Chatter group."
      },
      {
        "letter": "B",
        "text": "Create Chatter bookmarks."
      },
      {
        "letter": "C",
        "text": "Create a Chatter stream."
      },
      {
        "letter": "D",
        "text": "Create a Chatter notification."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.collab_chatter_streams_overview.ht m&type=5"
  },
  {
    "id": 14,
    "category": "Salesforce Fundamentals",
    "text": "CK conducts an evaluation of sales reps with a custom object that houses a scorecard. The company wants to ensure that only the sales reps, their managers, and their manager's executives can view the rep's scorecard, but also prevent the reps from being able to view the executive comment fields on their review. How should these requirements be met?",
    "options": [
      {
        "letter": "A",
        "text": "Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security."
      },
      {
        "letter": "B",
        "text": "Use a private sharing model granting record access using custom settings; manage field access with record types and page layouts."
      },
      {
        "letter": "C",
        "text": "Use a private sharing model granting record access using custom settings; manage field access with page layouts and field-level security."
      },
      {
        "letter": "D",
        "text": "Use a private sharing model granting record access using hierarchy; manage field access with field-level security."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "This solution addresses both the record-level visibility and field-level restriction requirements: Record Access (Hierarchy): Setting the Organization-Wide Default (OWD) to Private ensures that records are not visible to everyone by default. Enabling Grant Access Using Hierarchies allows managers and their executives (those higher in the Role Hierarchy) to automatically view the records owned by the sales reps. Field Access (Field-Level Security): Even if a user has access to a record, Field-Level Security (FLS) can be used to hide specific fields. By restricting \"Read\" access to the executive comment fields for the sales rep's profile, the reps can view their scorecard without seeing the restricted comments."
  },
  {
    "id": 15,
    "category": "Salesforce Fundamentals",
    "text": "UC has Public Read/Write as the Account organization-wide default (OWD) setting. Visitors to the customer community site report that they can see all of the company's account records. How should an app builder configure Account sharing so that community users only see their own Account?",
    "options": [
      {
        "letter": "A",
        "text": "Define a permission set for external accounts."
      },
      {
        "letter": "B",
        "text": "Set the account external OWD to private."
      },
      {
        "letter": "C",
        "text": "Define an owner-based sharing rule for external accounts."
      },
      {
        "letter": "D",
        "text": "Create an account record type for external accounts."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "In Salesforce, External Organization-Wide Defaults (OWD) allow you to set a different level of access for external users (like community members) than for internal users. Restricting Access: By changing the External OWD to Private, you ensure that community users cannot see any records they do not own by default. Internal vs. External: This allows Universal Containers to keep their internal setting as Public Read/Write for employees while strictly limiting visibility for external visitors."
  },
  {
    "id": 16,
    "category": "Salesforce Fundamentals",
    "text": "UC uses a private sharing model on Accounts. User A and User B both own Accounts of their own and have both been sent a new account record in an email owned by user C to take a look at. User A is able to open and view the record but user B receives an insufficient privileges error. User A and user B have the same role in the role hierarchy as User C. What are the three reasons user A has access but user B is unable to access the record? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "User A is on the same account team as user C."
      },
      {
        "letter": "B",
        "text": "User A and user B have different profiles."
      },
      {
        "letter": "C",
        "text": "User A is in a public group that has access via a sharing rule."
      },
      {
        "letter": "D",
        "text": "User A was granted an additional permission set."
      },
      {
        "letter": "E",
        "text": "User C has manually shared the record with user A."
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "multi": true,
    "explanation": "Because the organization-wide defaults are set to Private and User A/User B have identical roles to User C, User B can only receive an insufficient privileges error if they lack the specific exceptions that grant User A access. The three valid reasons for this access discrepancy are: A. User A is on the same account team as user C. (Account teams grant specific record- level access to members). C. User A is in a public group that has access via a sharing rule. (Sharing rules open up access to specific records based on group membership). E. User C has manually shared the record with user A. (Manual sharing allows a record owner to share individual records with specific users)."
  },
  {
    "id": 17,
    "category": "Salesforce Fundamentals",
    "text": "UC wants to collaborate with its customers within Salesforce, and has decided to enable the \"Allow Customer Invitation\" Chatter Setting? Which permission is granted to Customer when invited to a Chatter Group? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "The ability to @mention accounts of which they are a contact."
      },
      {
        "letter": "B",
        "text": "The ability to interact with members of their groups."
      },
      {
        "letter": "C",
        "text": "The ability to invite members to groups of which they are a member."
      },
      {
        "letter": "D",
        "text": "The ability to request access to public groups."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.collab_external_enabling.htm&type=5"
  },
  {
    "id": 18,
    "category": "Salesforce Fundamentals",
    "text": "A new field has been added to the Applicant object. A recruiter ran the Position with or without Applicants report and noticed that the new field was missing as an option to add as a column. How should an app builder trouble shoot this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Add the field to the custom report type field layout."
      },
      {
        "letter": "B",
        "text": "Adjust the field level security to include in the report type."
      },
      {
        "letter": "C",
        "text": "Update the profile with the Manage Pubic Reports permission."
      },
      {
        "letter": "D",
        "text": "Check \"Allows Reports\" for the position and applicant objects."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=reports_report_type_layouts.htm&type=5"
  },
  {
    "id": 19,
    "category": "Salesforce Fundamentals",
    "text": "An app builder received a request to extend record access beyond the organization- wide defaults configured. Which two features satisfy this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Public Groups"
      },
      {
        "letter": "B",
        "text": "Permission Set Groups"
      },
      {
        "letter": "C",
        "text": "Sharing Rules"
      },
      {
        "letter": "D",
        "text": "Manual Sharing Rules"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "To extend record access beyond the org-wide defaults, use sharing rules to automatically grant broader access to sets of users, and manual sharing to let record owners share individual records with specific users. Public groups and permission set groups do not grant record access by themselves - public groups are only used as recipients of sharing rules."
  },
  {
    "id": 20,
    "category": "Salesforce Fundamentals",
    "text": "Universal Containers (UC) has implemented multi-currency. There are several products that UC sells exclusively in Europe and the UK. Opportunities for these products need to be written in euros (EUR) or British pounds (GBP). Which solution should an app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Create a new record type for these products and include only the EUR and GBP currencies from the Opportunity Currency Picklist."
      },
      {
        "letter": "B",
        "text": "Create a new sales process that includes only the EUR and GBP currencies for these products."
      },
      {
        "letter": "C",
        "text": "Create a new validation rule that allows only EUR or GBP to be selected from all active currencies when an opportunity is created for these products."
      },
      {
        "letter": "D",
        "text": "Create a new page layout for these products that shows only the EUR and GBP currencies in the Opportunity Currency Picklist."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Option A is correct because Salesforce allows you to restrict the available values for picklist fields based on Record Types. When Multi-Currency is enabled, the Currency field on the Opportunity object behaves like a picklist. By creating a specific record type for European/UK products, an app builder can configure that record type to only display and allow the selection of EUR and GBP in the currency picklist. Option B is incorrect because a Sales Process is used to determine which Stage values are available for an opportunity. It does not control currency visibility or availability. Option C is incorrect because while a Validation Rule could theoretically enforce this, it is not the \"best\" recommendation. Salesforce best practices favor using native configuration like Record Types to guide user behavior (preventing errors before they happen) rather than throwing an error message after the user makes a selection. Option D is incorrect because Page Layouts control the visibility and positioning of fields, but they cannot filter the internal values of a picklist field like Currency; that functionality is specifically handled by Record Types"
  },
  {
    "id": 21,
    "category": "Salesforce Fundamentals",
    "text": "An app builder has created a new report type but users are unable to select it from the Report Type list when making a new report for records they own. What could be causing this issue?",
    "options": [
      {
        "letter": "A",
        "text": "The report type is in a status of Deployed."
      },
      {
        "letter": "B",
        "text": "Access to the necessary object is unavailable."
      },
      {
        "letter": "C",
        "text": "Access to Create and Customize Reports is disabled."
      },
      {
        "letter": "D",
        "text": "The report type is in a status of In Development."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?language=en_US&id=sf.reports_defining_r eport_types.htm&type=5"
  },
  {
    "id": 22,
    "category": "Salesforce Fundamentals",
    "text": "Sales reps at UC should be restricted to viewing Cases associated to Accounts in their territory. UC's data model sharing for Accounts is private and an admin owns all of the Accounts in the UC org. Which two options should an app builder use to fulfill these requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Set sharing for Cases to Private."
      },
      {
        "letter": "B",
        "text": "In the Territory Model, set Case Access to 'View'."
      },
      {
        "letter": "C",
        "text": "Create a sharing set to share Cases with the internal sales reps."
      },
      {
        "letter": "D",
        "text": "Add sales reps to the Account Team for Accounts, with Read Only access to Cases."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.accountteam_fields.htm&type=5"
  },
  {
    "id": 23,
    "category": "Salesforce Fundamentals",
    "text": "UC assigns system access via permission sets and permission set groups to ensure each user has proper access. One department with varying levels of support staff has five consistent permission sets they require in order to complete their duties. Some higher- level staff have additional permission sets that are only required for them. How should an app builder recommend assigning permission sets to users? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Utilize the Data Import Wizard to mass update the desired users with their full list of permission sets and permission set groups."
      },
      {
        "letter": "B",
        "text": "Utilize the Data Loader to mass update the desired users with their full list of permission sets and permission set groups."
      },
      {
        "letter": "C",
        "text": "Utilize the manage assignments button to assign each user with the same set of permission set groups and permission sets."
      },
      {
        "letter": "D",
        "text": "Utilize the manage assignments button to assign a permission set group and add individual permission sets to each user."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "The Manage Assignments button on a permission set group lets an app builder assign the permission set group (which bundles the five common permission sets) plus any additional individual permission sets to each user in one place. This keeps the common assignments centralized while still supporting user-specific additions, and is far less error-prone than mass-updating permission set assignments with Data Loader."
  },
  {
    "id": 24,
    "category": "Salesforce Fundamentals",
    "text": "UC wants to create a report to show job applications with or without resumes. What considerations should the app builder be aware of when creating the custom report type?",
    "options": [
      {
        "letter": "A",
        "text": "A primary object selection is locked once the custom report type has been saved."
      },
      {
        "letter": "B",
        "text": "Once the report type has been deployed it is unable to be deleted."
      },
      {
        "letter": "C",
        "text": "When a custom or external object is deleted the report type and reports remain but cause an error when the report is run."
      },
      {
        "letter": "D",
        "text": "An app builder is unable to create custom report types for objects they do NOT have permissions for."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.reports_defining_report_types.htm&t ype=5"
  },
  {
    "id": 25,
    "category": "Salesforce Fundamentals",
    "text": "An app builder at DreamHouse Realty created a custom object which has fields containing data from two different objects via related lookups. What is needed to create \"with\" or \"without\" reports on the new custom object? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Report Filters"
      },
      {
        "letter": "B",
        "text": "Report Bucket Field"
      },
      {
        "letter": "C",
        "text": "Row-Level Formula"
      },
      {
        "letter": "D",
        "text": "Custom Report Type"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "To create a \"with\" or \"without\" report (also known as a Cross Filter or a report showing records with or without related child records), you often need to define a Custom Report Type. In Salesforce, custom report types allow you to specify the relationships between objects (e.g., \"A records with B records\" or \"A records with or without B records\") and ensure that fields from related lookup objects are available for reporting."
  },
  {
    "id": 26,
    "category": "Salesforce Fundamentals",
    "text": "An app builder has been tasked with creating separate Opportunity views for three different teams. Each team follows a different sales process and should see different values for the same fields. Which three declarative options should they use to accomplish this? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Page Layouts"
      },
      {
        "letter": "B",
        "text": "Profiles"
      },
      {
        "letter": "C",
        "text": "Apex Trigger"
      },
      {
        "letter": "D",
        "text": "Path"
      },
      {
        "letter": "E",
        "text": "Schema Builder"
      }
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.path_overview.htm&type=5 https://help.salesforce.com/s/articleView?id=sfdo.SFDO_Edit_Page_Layouts.htm&type= 5"
  },
  {
    "id": 27,
    "category": "Salesforce Fundamentals",
    "text": "CK switched to Lightning Experience and started using Chatter across its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with gathering feedback from core team members, including understanding who is available to respond. Which two ways could CK use Chatter to solve this problem? Choose 2 answers.",
    "options": [
      {
        "letter": "A",
        "text": "Topics"
      },
      {
        "letter": "B",
        "text": "Streams"
      },
      {
        "letter": "C",
        "text": "Out of Office"
      },
      {
        "letter": "D",
        "text": "Polls"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.collab_profile_out_of_office.htm&type= 5 https://help.salesforce.com/s/articleView?id=sf.collab_feed_polls.htm&type=5"
  },
  {
    "id": 28,
    "category": "Salesforce Fundamentals",
    "text": "At USM, only users with the Outer Planets profile need to see the Jupiter field on the Solar System object. How would the app builder satisfy this requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Sharing Rule"
      },
      {
        "letter": "B",
        "text": "Field-Level Security"
      },
      {
        "letter": "C",
        "text": "Classic Encryption"
      },
      {
        "letter": "D",
        "text": "Defer Calculations"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm&language=en_US&type= 5"
  },
  {
    "id": 29,
    "category": "Salesforce Fundamentals",
    "text": "An app builder wants to create a report to compare the number of support cases in each status (New, In-progress, or Closed) and by priority (Critical, High, Medium, or Low). What solution should be used for the report? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Filters"
      },
      {
        "letter": "B",
        "text": "Grouping"
      },
      {
        "letter": "C",
        "text": "Bucket Columns"
      },
      {
        "letter": "D",
        "text": "Custom Report Type"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "To compare and summarize data across two different dimensions (e.g., Status and Priority), you need to group the report by both row and column groupings. This allows you to view the data in a matrix format and visualize it using charts like stacked bar or matrix charts. Bucket Columns are used to group values within a single field, not across multiple fields like Status and Priority. Custom Report Types dictate which objects and fields are available in a report, not how the data is summarized. Filters are used to narrow down the data shown in the report, not to summarize or compare it."
  },
  {
    "id": 30,
    "category": "Salesforce Fundamentals",
    "text": "Which three field types could be included when building a Custom Report Type? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Custom fields that have been added to the report types page layout."
      },
      {
        "letter": "B",
        "text": "Renamed fields from standard objects in their original state."
      },
      {
        "letter": "C",
        "text": "Lookup fields through four levels of lookup relationships."
      },
      {
        "letter": "D",
        "text": "Custom metadata field values."
      },
      {
        "letter": "E",
        "text": "Standard age fields on cases and opportunities."
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/articleView?id=sf.reports_report_type_guidelines.htm&ty pe=5 https://help.salesforce.com/articleView?id=sf.reports_report_type_layouts.htm&type= 5"
  },
  {
    "id": 31,
    "category": "Salesforce Fundamentals",
    "text": "UC has the Account object's Org Wide Default set to Private. The Marketing team owns Accounts; however, they also need to be able to see the Sales team's Accounts. Both the Sales and Marketing teams are in completely different branches of the role hierarchy. What feature should be used to enable Marketing to see Sales-owned accounts?",
    "options": [
      {
        "letter": "A",
        "text": "Sharing Rules"
      },
      {
        "letter": "B",
        "text": "Flow"
      },
      {
        "letter": "C",
        "text": "Workflow"
      },
      {
        "letter": "D",
        "text": "Public Group"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.security_about_sharing_rules.htm&la nguage=en_US&type=5"
  },
  {
    "id": 32,
    "category": "Salesforce Fundamentals",
    "text": "DreamHouse Realty requires that field value changes for certain fields such as Asking_Price__c and Real_Estate_Agent__c on their House__c custom object show up prominently on Chatter. What Chatter feature should the app builder utilize?",
    "options": [
      {
        "letter": "A",
        "text": "Publisher Actions"
      },
      {
        "letter": "B",
        "text": "Feed Tracking"
      },
      {
        "letter": "C",
        "text": "Thanks"
      },
      {
        "letter": "D",
        "text": "Topics"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.collab_feed_tracking_overview.htm&type =5"
  },
  {
    "id": 33,
    "category": "Salesforce Fundamentals",
    "text": "The app builder at Northern Trail Outfitters created a report type for opportunities with or without shipments. The operations team wants to see the account rating information on the report. What should the app builder do to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "Change the primary object of the custom report type to the Account object."
      },
      {
        "letter": "B",
        "text": "Add the Account Rating field to the opportunity record page."
      },
      {
        "letter": "C",
        "text": "Change the account/opportunity relationship to a master/detail relationship."
      },
      {
        "letter": "D",
        "text": "Use add fields related via lookup with the view set to opportunities."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "The app builder should use \"add fields related via lookup with the view set to opportunities\" to fulfill this request. This allows the inclusion of fields from the Account object, such as the Account Rating, in the report for Opportunities. This is done by editing the custom report type and adding the related fields from the Account object that are accessible via the lookup relationship on the Opportunity object."
  },
  {
    "id": 34,
    "category": "Salesforce Fundamentals",
    "text": "An app builder wants to create a new field using Schema Builder. Who will get access to the new field by default? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Standard profiles"
      },
      {
        "letter": "B",
        "text": "No profiles"
      },
      {
        "letter": "C",
        "text": "Internal profiles"
      },
      {
        "letter": "D",
        "text": "All profiles"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.schema_builder_elements_fields.htm &type=5"
  },
  {
    "id": 35,
    "category": "Salesforce Fundamentals",
    "text": "An app builder at CK created a custom object and related fields in the schema builder. What next steps should the app builder take to ensure users can access the new object and fields? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Add the fields to the page layout on the object."
      },
      {
        "letter": "B",
        "text": "Assign data types to the fields on the object"
      },
      {
        "letter": "C",
        "text": "Allow reporting for the object and fields."
      },
      {
        "letter": "D",
        "text": "Create a permission set for access to the object and fields."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?language=en_US&id=sf.schema_builder_el ements_fields.htm&type=5"
  },
  {
    "id": 36,
    "category": "Salesforce Fundamentals",
    "text": "UC has two types of applicants, hourly and salary. There are separate record types for each. While all members of the human resource department need to be able to view all applicant records, only the hiring manager and VP of HR should be able to create salary applicant records. What should the app builder recommend to meet this requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Update the org-wide default to private and create a sharing rule for the role of recruiting manager."
      },
      {
        "letter": "B",
        "text": "Remove \"create\" permission for the salary applicant object for everyone except the manager and VP."
      },
      {
        "letter": "C",
        "text": "Configure the hourly record type as the default and instruct Non-management users to accept the default record type."
      },
      {
        "letter": "D",
        "text": "Create a permission set containing the salary record type and assign it to the appropriate users."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=perm_sets_overview.htm&type=5"
  },
  {
    "id": 37,
    "category": "Salesforce Fundamentals",
    "text": "CK wants to track orders against inventory, ensuring its ability to fulfill order requests. CK created a junction object called Request_Inventory__c to enable many-to-many relationships with the Inventory__c and Order__c objects. What does the app builder need to provide to ensure users can view Request_Inventory__c records? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Read access to the first master object."
      },
      {
        "letter": "B",
        "text": "Read access to both master objects."
      },
      {
        "letter": "C",
        "text": "Sharing rules on Request_Inventory__c object."
      },
      {
        "letter": "D",
        "text": "Apex-based sharing on the first master object."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.relationships_manytomany.htm&type=5"
  },
  {
    "id": 38,
    "category": "Salesforce Fundamentals",
    "text": "UC has a private sharing model for Accounts and Opportunities and uses Territory Management to grant access to records. \u2022 Sales rep A manually shares an opportunity record with sales rep B. \u2022 Sales rep B has access to the Account even though the Account is NOT in sales rep B's territory. \u2022 Sales rep C CANNOT see either record. Based on the information given, why can sales rep B see the Account related to the Opportunity? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Sales rep B was added to the Account team."
      },
      {
        "letter": "B",
        "text": "Sharing set is grating access to the Account."
      },
      {
        "letter": "C",
        "text": "Implicit access to the Account."
      },
      {
        "letter": "D",
        "text": "Account was also manually shared."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://developer.salesforce.com/docs/atlas.en- us.draes.meta/draes/draes_object_relationships_implicit_sharing.htm"
  },
  {
    "id": 39,
    "category": "Salesforce Fundamentals",
    "text": "A Service Coordinator (SC) for Ursa Major Solar (UMS) does a final review of work orders owned by a technician for a specific region before the records are submitted for an invoice. Before closing out the work order, the SC needs to modify data or remove attachments that were added by mistake. The SC also needs access to any other related records owned by the technician. What solution would provide the required access, given a private data model? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Give the SC a permission set with the Modify All Data system permission."
      },
      {
        "letter": "B",
        "text": "Change work order access on the SC's profile to 'Modify All'."
      },
      {
        "letter": "C",
        "text": "Put the SC in the Role Hierarchy above the technicians whose work orders they review."
      },
      {
        "letter": "D",
        "text": "Create a workflow rule that updates records owned by technicians in that region with the SC."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.security_controlling_access_using_hi erarchies.htm&type=5"
  },
  {
    "id": 40,
    "category": "Salesforce Fundamentals",
    "text": "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Matrix format"
      },
      {
        "letter": "B",
        "text": "Tabular format"
      },
      {
        "letter": "C",
        "text": "Summary format"
      },
      {
        "letter": "D",
        "text": "Joined format"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "You can choose any custom tabular or summary report as the source report. https://help.salesforce.com/s/articleView?id=sf.data_setting_up_analytic_snap.htm&t ype=5"
  },
  {
    "id": 41,
    "category": "Salesforce Fundamentals",
    "text": "Accounts at UC are currently readable by all users but editable only by their owners. Management wants to designate some Accounts as VIP Accounts. Only Account owners should have read access to these VIP accounts. What two actions should an app builder take to meet the requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Configure a permission set."
      },
      {
        "letter": "B",
        "text": "Set up an Account Team."
      },
      {
        "letter": "C",
        "text": "Change organization-wide Defaults."
      },
      {
        "letter": "D",
        "text": "Implement a sharing rule."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.admin_sharing.htm&type=5"
  },
  {
    "id": 42,
    "category": "Salesforce Fundamentals",
    "text": "UC uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure. A new sales operation team has been created. This team needs to perform analysis on Opportunity data, and should have read and write access to all Opportunities. What are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Add a permission set with \"View All\" and \"Modify All\" opportunity permission enabled."
      },
      {
        "letter": "B",
        "text": "Add a manual share for all opportunities with each user on the sales operations team."
      },
      {
        "letter": "C",
        "text": "Create a criteria-based sharing rule to share all opportunities with the sales operations public group."
      },
      {
        "letter": "D",
        "text": "Create a criteria-based sharing rule to share all opportunities with the sales operations private group."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "Add a permission set with \"View All\" and \"Modify All\" opportunity permission enabled. Why it's correct: Permission sets allow an administrator to grant additional object-level permissions (like \"View All\" and \"Modify All\") to specific users regardless of the Org- Wide Defaults (OWD). This gives the operations team the required read/write access to all records without changing the private sharing model for everyone else. Create a criteria-based sharing rule to share all opportunities with the sales operations public group. Why it's correct: Sharing rules can be used to extend access to specific groups of users. By creating a criteria-based rule (e.g., criteria that match all records, such as \"Amount greater than 0\") and sharing it with a Public Group containing the operations team, you provide the necessary access while maintaining the regional private structure."
  },
  {
    "id": 43,
    "category": "Salesforce Fundamentals",
    "text": "UC allows all employees to submit reviews for leadership using a custom object. These reviews should only be visible to the HR department and the employee who submitted the review. Which three steps should an app builder take to properly control access to review records? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Add a Master-Detail(User) field on the Review object."
      },
      {
        "letter": "B",
        "text": "Create a criteria-based Sharing Rule for the HR Department."
      },
      {
        "letter": "C",
        "text": "Remove review read permission from non-HR Department user Profiles."
      },
      {
        "letter": "D",
        "text": "Disable Grant Access Using Hierarchies."
      },
      {
        "letter": "E",
        "text": "Set Org Wide Default to Private."
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.security_controlling_access_using_hi erarchies.htm&type=5"
  },
  {
    "id": 44,
    "category": "Salesforce Fundamentals",
    "text": "UC has created two custom objects called Seminars and Attendees. Organization-wide defaults for these objects have been set to Private. UC wants to set up a new junction object between these custom objects. A select group of users should be able to edit records in the junction object. Which two steps should an app builder take to configure the proper security? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Set Sharing Settings to Read Only on both Master-Detail relationship fields."
      },
      {
        "letter": "B",
        "text": "Create an owner-based sharing rule that gives Read access to the junction object."
      },
      {
        "letter": "C",
        "text": "Set lookup filters on both junction object relationship fields."
      },
      {
        "letter": "D",
        "text": "Create owner-based sharing rules that give Read access to the master objects."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.security_sharing_rule_types.htm&type= 5"
  },
  {
    "id": 45,
    "category": "Salesforce Fundamentals",
    "text": "Ck has a sales rep who is stating that their Contact is unavailable for other users to see within Salesforce. In which three ways can an app builder troubleshoot this issue? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Review the Contact record and ensure it is linked to an Account."
      },
      {
        "letter": "B",
        "text": "Confirm whether Default Organization-Wide Sharing Settings provide access to the Account."
      },
      {
        "letter": "C",
        "text": "Verify the users with the issue have access to the Contact object."
      },
      {
        "letter": "D",
        "text": "Create a new Contact and have the users try again."
      },
      {
        "letter": "E",
        "text": "Create an Account Sharing Rule to give the users access to all records."
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/articleView?id=000328069&language=en_US&mode=1&t ype=1"
  },
  {
    "id": 46,
    "category": "Salesforce Fundamentals",
    "text": "UC sales reps can modify fields on an opportunity until it is closed. The sales operations team has access to modify the Post-Close Follow-up Date and Post-Close Follow-up Comments fields after the opportunity is closed. After the opportunity is closed, the rest of the fields are read-only. How should these requirements be met?",
    "options": [
      {
        "letter": "A",
        "text": "Use field-level security to mark fields as read-only on the Sales profile."
      },
      {
        "letter": "B",
        "text": "Use record types with field sets and restrict editing fields using field-level security."
      },
      {
        "letter": "C",
        "text": "Use field-level security on page layouts to restrict editing fields."
      },
      {
        "letter": "D",
        "text": "Use multiple record types, page layouts, validation rules and profiles."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "This requirement involves changing the behavior of a record (making it read-only) based on its status (Closed) and the user's role (Sales vs. Sales Operations). This is a multi-step solution in Salesforce: Record Types & Page Layouts: You need a \"Closed\" record type that is assigned to a page layout where most fields are marked as read-only. Profiles: This allows you to assign different page layouts to different teams. While the Sales Rep's profile would see the read-only version, the Sales Operations profile could still have access to edit specific fields. Validation Rules: These provide a final layer of security to ensure that fields cannot be modified via other means (like the API or bulk uploads) once the opportunity is closed."
  },
  {
    "id": 47,
    "category": "Salesforce Fundamentals",
    "text": "UC wants customers to be able to open cases from public-facing website. What should the app builder use to enable visitors to the website?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound message"
      },
      {
        "letter": "B",
        "text": "Web-to-case"
      },
      {
        "letter": "C",
        "text": "Screen flow"
      },
      {
        "letter": "D",
        "text": "Email-to-case"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?language=en_US&id=sf.setting_up_web- to- case.htm&type=5"
  },
  {
    "id": 48,
    "category": "Salesforce Fundamentals",
    "text": "CK created a Locked__c custom field to identify Account records that should restrict modifications for all users except the system administrator. What validation rule will enforce this requirement on locked Account records?",
    "options": [
      {
        "letter": "A",
        "text": "AND(Locked__c = TRUE, $Profile.Name = \"System Administrator\")"
      },
      {
        "letter": "B",
        "text": "AND(Locked__c = TRUE, $Profile.Name != \"System Administrator\")"
      },
      {
        "letter": "C",
        "text": "AND(Locked__c = TRUE, Stage = \"Closed Won\", $UserRole.Name != \"System Administrator\")"
      },
      {
        "letter": "D",
        "text": "AND(Locked__c = TRUE, $UserRole.Name != \"System Administrator\")"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Validation rules in Salesforce return a value of TRUE to block the save and display an error. To ensure that an account record cannot be modified if Locked__c is TRUE, we want the rule to evaluate to TRUE. The function AND(Locked__c = TRUE, $Profile.Name != \"System Administrator\") does the following: Checks if the record is locked (Locked__c = TRUE). Ensures this restriction applies to every user whose profile name is not \"System Administrator\" (!=).Because we use !=, System Administrators bypass this rule and retain the ability to edit the record, while standard users are blocked."
  },
  {
    "id": 49,
    "category": "Salesforce Fundamentals",
    "text": "An app builder wants to limit the number of fields users are required to fill out when creating a new Opportunity. Once they fill out the required fields and save, the full record page with additional fields relevant to the Opportunity type becomes available. How could this be accomplished?",
    "options": [
      {
        "letter": "A",
        "text": "Once the required fields are populated, use a sharing rule to share the new fields with the user."
      },
      {
        "letter": "B",
        "text": "Use different page layouts for Opportunity types based on the user profile."
      },
      {
        "letter": "C",
        "text": "Make the Opportunity type a required field on the initial Opportunity page layout and use automation to fill in the type field for a record type."
      },
      {
        "letter": "D",
        "text": "Hide additional sections on the page layout and show the users how to manually expand them when they want to fill in the fields in the hidden sections."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.permissions_record_type_access.htm &type=5"
  },
  {
    "id": 50,
    "category": "Salesforce Fundamentals",
    "text": "UC wants to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should an app builder create to add to the Account page layout?",
    "options": [
      {
        "letter": "A",
        "text": "A summary report on the Account object"
      },
      {
        "letter": "B",
        "text": "A summary report on the Opportunity object"
      },
      {
        "letter": "C",
        "text": "A tabular report on the Opportunity object"
      },
      {
        "letter": "D",
        "text": "A tabular report on the Account object"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "A summary report on the Opportunity object: To embed a chart in a Salesforce page layout, the source report must be a Summary or Matrix report because these formats allow for data grouping, which is required to generate a chart. Since the requirement is to show \"all related Opportunities, by stage,\" the report must be built on the Opportunity object and grouped by the Stage field."
  },
  {
    "id": 51,
    "category": "Salesforce Fundamentals",
    "text": "UC wants to understand return on investment for the latest advertising buy. They currently use a private security model for all objects. What should an app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Configure Campaign Hierarchies and Campaign statistics"
      },
      {
        "letter": "B",
        "text": "Change to a public security model"
      },
      {
        "letter": "C",
        "text": "Run an opportunities pipeline report"
      },
      {
        "letter": "D",
        "text": "Utilize Account Hierarchies and Roll-Up Summary fields"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.reports_campaign.htm&type=5"
  },
  {
    "id": 52,
    "category": "Salesforce Fundamentals",
    "text": "CK wants to begin socializing and collaborating within Salesforce around customer accounts to discuss various topics. CK would like all company employees to see these conversations. Which two features of Chatter would meet CK's business needs? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Use post action on the Account object."
      },
      {
        "letter": "B",
        "text": "Set up new private Chatter groups."
      },
      {
        "letter": "C",
        "text": "Use Chatter actions to create tasks to complete."
      },
      {
        "letter": "D",
        "text": "Set up new public Chatter groups."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.collab_group_about.htm&type=5 https://help.salesforce.com/s/articleView?id=sf.collab_admin_feed_item_actions.htm &type=5"
  },
  {
    "id": 53,
    "category": "Salesforce Fundamentals",
    "text": "NTO wants to broadcast an email to 7000 contacts in Salesforce on a regular basis but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day. What action should the app builder take?",
    "options": [
      {
        "letter": "A",
        "text": "Request Salesforce increase the number of maximum daily emails."
      },
      {
        "letter": "B",
        "text": "Develop Apex code and Lightning web component to send daily emails."
      },
      {
        "letter": "C",
        "text": "Research and evaluate products available on AppExchange to send mass emails."
      },
      {
        "letter": "D",
        "text": "Export Contacts to a CSV file and use an email client to send the emails."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://appexchange.salesforce.com/mktcollections/curated/whatisappexchange"
  },
  {
    "id": 54,
    "category": "Salesforce Fundamentals",
    "text": "UMS wants to automate a welcome email to new clients and include a customized survey about their buying experience. An app builder is tasked with this project and has very little time to build the solution from scratch. What should the app builder do to meet the deadline and custom requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Work with a developer to create custom apex code and a Visualforce survey to meet criteria."
      },
      {
        "letter": "B",
        "text": "Build the survey declaratively and use a workflow rule to send it to the customer as an external message to meet criteria."
      },
      {
        "letter": "C",
        "text": "Choose a managed package from AppExchange that closely meets the requirements of the project and restricts programmatic development."
      },
      {
        "letter": "D",
        "text": "Select an unmanaged package from AppExchange that closely meets the requirements of the project that allows programmatic development."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Unmanaged Packages: These are typically used for sharing open-source foundational building blocks or templates. Because they allow full access to the source code, they give the app builder the flexibility to customize the survey exactly to the business needs. Programmatic Development: The requirement implies a need to potentially alter, tweak, or add customized elements quickly without hitting the locking restrictions of a managed package. Time constraint: Using an unmanaged package from Salesforce AppExchange saves the builder from building the solution entirely from scratch."
  },
  {
    "id": 55,
    "category": "Salesforce Fundamentals",
    "text": "A sales manager at CK wants the team to spend more time in the field and less time manually entering the information found on the business cards they collect. What should an app builder do to help achieve this goal without sacrificing data quality?",
    "options": [
      {
        "letter": "A",
        "text": "Use Flow to create a data entry wizard to automate data entry."
      },
      {
        "letter": "B",
        "text": "Post daily to the Chatter feed any relevant fields that need to be populated."
      },
      {
        "letter": "C",
        "text": "Research and evaluate data enrichment products on the AppExchange to automate data entry."
      },
      {
        "letter": "D",
        "text": "Use a combination of workflow rules and formula fields to populate key fields for the sales user."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://trailhead.salesforce.com/content/learn/modules/appexchange- solutions/discover-appexchange-solutions?trail_id=meet-your-business-needs-with- appexchange"
  },
  {
    "id": 56,
    "category": "Salesforce Fundamentals",
    "text": "UC has a time-sensitive need for a custom component to be built in 4 weeks. UC developers require additional enablement to complete the work and are backlogged by several months. What option should an app builder suggest to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Build a screen flow page."
      },
      {
        "letter": "B",
        "text": "Use an AppExchange solution."
      },
      {
        "letter": "C",
        "text": "Use a Bolt solution."
      },
      {
        "letter": "D",
        "text": "Build a Lightning record page."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://trailhead.salesforce.com/content/learn/modules/appexchange- solutions/discover-appexchange-solutions?trail_id=meet-your-business-needs-with- appexchange"
  },
  {
    "id": 57,
    "category": "Salesforce Fundamentals",
    "text": "Sales reps want the ability to see who can view their account records and how the people have access. Which button should the app builder add to the Account page layout to enable this?",
    "options": [
      {
        "letter": "A",
        "text": "Sharing Hierarchy"
      },
      {
        "letter": "B",
        "text": "New Task"
      },
      {
        "letter": "C",
        "text": "Sharing"
      },
      {
        "letter": "D",
        "text": "Feed"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "The \"Sharing\" button should be added to the Account page layout to allow sales reps to view the sharing details of an account record. This button enables users to see how access to the record is granted via roles, groups, and manual sharing. A: Sharing Hierarchy provides a view of the role hierarchy but does not specifically detail record access. B: New Task is unrelated to sharing visibility. D: \"Fait\" is not recognized in Salesforce context as a valid component or feature. Reference: Sharing an Account in Salesforce Help Documentation"
  },
  {
    "id": 58,
    "category": "Salesforce Fundamentals",
    "text": "An app builder just added a lookup field to Account from the existing custom object, Box. Which report type is automatically created?",
    "options": [
      {
        "letter": "A",
        "text": "Boxes with or without Accounts"
      },
      {
        "letter": "B",
        "text": "Accounts with or without Boxes"
      },
      {
        "letter": "C",
        "text": "Boxes with Accounts"
      },
      {
        "letter": "D",
        "text": "Accounts with Boxes"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Upon adding a lookup field to Account from a custom object, Box: D. Accounts with Boxes. Salesforce automatically creates a new report type that reflects the relationship from the perspective of the parent object, in this case, Accounts, showing related Box records. This new report type enables users to create reports that list Accounts along with their associated Boxes, if any. For further understanding of report types and relationships, Salesforce's guide on Report Types provides comprehensive information on how these are structured following modifications to object relationships."
  },
  {
    "id": 59,
    "category": "Salesforce Fundamentals",
    "text": "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case-by-case basis. What options does the business user have to manually share individual records? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Public Groups"
      },
      {
        "letter": "B",
        "text": "Permission Sets"
      },
      {
        "letter": "C",
        "text": "Roles"
      },
      {
        "letter": "D",
        "text": "Profiles"
      },
      {
        "letter": "E",
        "text": "Users"
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "multi": true,
    "explanation": "To manually share individual records with specific people or group of people on a case by case basis, users can use public groups, roles, or users. Public groups are collections of users, roles, or other groups that can be used to share access to records. Roles define the level of access that users have to their organization's data based on their position in the hierarchy. Users are individual people who log in to Salesforce and have access to records based on their profile, role, and sharing settings."
  },
  {
    "id": 60,
    "category": "Salesforce Fundamentals",
    "text": "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
    "options": [
      {
        "letter": "A",
        "text": "Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security"
      },
      {
        "letter": "B",
        "text": "Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security"
      },
      {
        "letter": "C",
        "text": "Use a private sharing model granting record access using hierarchy; manage field access with field- level security"
      },
      {
        "letter": "D",
        "text": "Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "To ensure that only the sales reps and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review, a private sharing model granting record access using hierarchy and field-level security should be used. A private sharing model means that only the owner of a record and users above them in the role hierarchy can view the record by default. Record access can be granted to other users using manual sharing, sharing rules, or Apex sharing. Field-level security controls which fields are visible or editable for different profiles or permission sets."
  },
  {
    "id": 61,
    "category": "Salesforce Fundamentals",
    "text": "Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the \"Allow Customer Invitations\" Chatter setting. What permission is granted to Customers when invited to Chatter Group?",
    "options": [
      {
        "letter": "A",
        "text": "The ability to invite members to groups of which they are a member"
      },
      {
        "letter": "B",
        "text": "The ability to @mention accounts of which they are a contact."
      },
      {
        "letter": "C",
        "text": "The ability to request access to public groups"
      },
      {
        "letter": "D",
        "text": "The ability to interact with members of their groups"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Customers who are invited to Chatter groups can only interact with members of their groups. They cannot invite other members, @mention accounts, or request access to public groups"
  },
  {
    "id": 62,
    "category": "Salesforce Fundamentals",
    "text": "Which opportunity standard field is available to be configured directly? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Forecast category"
      },
      {
        "letter": "B",
        "text": "Stage"
      },
      {
        "letter": "C",
        "text": "Lead source"
      },
      {
        "letter": "D",
        "text": "Type"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "The opportunity standard fields that are available to be configured directly are Stage, Lead Source, and Type. These fields can be modified by editing their picklist values, adding or removing values, or changing their default values. Option A is incorrect because Forecast Category is not a standard field on the opportunity object, but rather a system field that is automatically derived from the Stage field."
  },
  {
    "id": 63,
    "category": "Salesforce Fundamentals",
    "text": "A new field is being created on a custom object. However, the app builder does not want the field to show up on pre-existing custom report types. What should the app builder do on the custom field setup to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Remove the new field from all page layouts."
      },
      {
        "letter": "B",
        "text": "Remove visibility to all report profiles."
      },
      {
        "letter": "C",
        "text": "Grant read-only access to all report profiles."
      },
      {
        "letter": "D",
        "text": "Deselect auto add to custom report type."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "When creating a new field, if an app builder does not want the field to be automatically added to pre-existing custom report types, the step to take is: Deselect 'Add Field to Custom Report Types' (D). This option is available when creating or editing a custom field and ensures that the field is not automatically included in report types where 'Automatically add new custom fields to report type layouts' is enabled. Removing the field from page layouts (A) affects the visibility on record pages but not reports. Adjusting visibility (B) or setting read-only access (C) for report profiles affects user permissions to see the field in reports, but does not remove the field from report types if it was previously added. Reference for managing fields in custom report types: Custom Report Types and Fields: https://help.salesforce.com/articleView? id=reports_report_type_layouts.htm&type=5"
  },
  {
    "id": 64,
    "category": "Data Modeling and Management",
    "text": "UMS uses Cases to track customer complaints, an Issue__c object to represent known problems with its solar panels, and a Case_Issue__c junction object to relate known problems to customer complaints. Periodically, UMS conducts audits which require the auditing users to view Case_Issue__c records. Which access levels must be configured to allow UMS users to access Case_Issue__c records?",
    "options": [
      {
        "letter": "A",
        "text": "Read-Only access on Case and Case_Issue__c"
      },
      {
        "letter": "B",
        "text": "Read-Only access on Case and Issue__c"
      },
      {
        "letter": "C",
        "text": "Read-Only access on Issue__c and Case_Issue__c"
      },
      {
        "letter": "D",
        "text": "Read-Only access on Case_Issue__c"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "In Salesforce, a junction object is a custom object with two master-detail relationships. The security and sharing for a junction object record are determined by the user's access to its parent records. To view a record in a junction object (like Case_Issue__c), a user must have at least Read access to both parent objects. In this scenario, since the junction object relates Case and Issue__c, the auditing users require Read-Only access on Case and Issue__c to see the related Case_Issue__c records."
  },
  {
    "id": 65,
    "category": "Data Modeling and Management",
    "text": "UC generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead. What should an app builder configure to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Create a lead object on the partner community and a record type for web and trade show leads."
      },
      {
        "letter": "B",
        "text": "Create custom objects for each type of lead with each page layout only containing the relevant fields."
      },
      {
        "letter": "C",
        "text": "Create three sections on the lead layout and instruct users to collapse the non- relevant fields."
      },
      {
        "letter": "D",
        "text": "Create three lead record types each with its own page layout containing the relevant fields."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Tailored Layouts: Record types in Salesforce allow you to associate different page layouts. This enables you to display shared information while adding/hiding specific fields relevant only to web, trade show, or partner leads. Why others are incorrect: Options A and C do not allow for capturing unique data fields cleanly, and Option B is incorrect because leads should remain on the unified Lead object to leverage standard lead conversion processes rather than separating them into individual custom objects."
  },
  {
    "id": 66,
    "category": "Data Modeling and Management",
    "text": "UC has created a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object. Which feature would an app builder use?",
    "options": [
      {
        "letter": "A",
        "text": "Dependent Picklist"
      },
      {
        "letter": "B",
        "text": "Global Picklist Value Set"
      },
      {
        "letter": "C",
        "text": "Dynamic Action"
      },
      {
        "letter": "D",
        "text": "Field Update"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_creating_global_picklists.htm& type=5"
  },
  {
    "id": 67,
    "category": "Data Modeling and Management",
    "text": "The app builder at UMS has just created a master-detail relationship between a parent object Galaxy__c and child object Star__c. What would be the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
    "options": [
      {
        "letter": "A",
        "text": "A Star__c report type with Galaxy__c as a field will be automatically created."
      },
      {
        "letter": "B",
        "text": "A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c."
      },
      {
        "letter": "C",
        "text": "A Galaxy__c with Star__c report type will be automatically created."
      },
      {
        "letter": "D",
        "text": "A new custom report type will need to be created for Galaxy__c with Star__c."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Automatic Generation: When a master-detail relationship is created between two objects in Salesforce, the system automatically generates a standard report type for the parent and child objects together. Relationship Hierarchy: Because Galaxy__c is the parent (master) and Star__c is the child (detail), the automatically created report type follows the format \"Primary Object with Related Object\" (e.g., Galaxy with Star). Immediate Availability: This report type appears in the \"New Report\" selection screen without requiring the administrator to manually configure a custom report type."
  },
  {
    "id": 68,
    "category": "Data Modeling and Management",
    "text": "What are the two capabilities of Schema Builder? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Viewing page layouts in a new window"
      },
      {
        "letter": "B",
        "text": "Showing selected object on a page"
      },
      {
        "letter": "C",
        "text": "Creating a new record type"
      },
      {
        "letter": "D",
        "text": "Editing custom settings."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm&type=5"
  },
  {
    "id": 69,
    "category": "Data Modeling and Management",
    "text": "UC has created a picklist field called Country on three separate custom objects. UC has a requirement to maintain a consistent list of values for this field on each object. Which feature would an app builder use?",
    "options": [
      {
        "letter": "A",
        "text": "Global Picklist Value Set"
      },
      {
        "letter": "B",
        "text": "Next Best Action"
      },
      {
        "letter": "C",
        "text": "State and Country Picklist"
      },
      {
        "letter": "D",
        "text": "Field Update"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_creating_global_picklists.htm& type=5"
  },
  {
    "id": 70,
    "category": "Data Modeling and Management",
    "text": "The previous administrator of the CK Salesforce Org always utilized text as the field type when creating new custom fields. Ck's current road map requires a project that will clean up this Org during Lightning migration. Which three field types should be considered to keep better track of contact information in fields? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Date"
      },
      {
        "letter": "B",
        "text": "Phone"
      },
      {
        "letter": "C",
        "text": "Email"
      },
      {
        "letter": "D",
        "text": "Number"
      },
      {
        "letter": "E",
        "text": "Time"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "A. Date: Ideal for accurately tracking calendar-based contact information like Date of Birth or anniversary dates. B. Phone: Formats numbers specifically as telephone numbers, allowing for easy click- to-dial functionality. C. Email: Automatically validates standard email formats and enables direct emailing from the field."
  },
  {
    "id": 71,
    "category": "Data Modeling and Management",
    "text": "An app builder wants to create a custom object and 10 fields. What should they use to create the object, fields, and relationships quickly from one place? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Schema Builder"
      },
      {
        "letter": "B",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "C",
        "text": "Developer Console"
      },
      {
        "letter": "D",
        "text": "Manage Field Permissions"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Schema Builder lets an app builder create the custom object, its fields, and the relationships quickly from one place by dragging and dropping elements on a single canvas. Lightning Object Creator builds objects and fields by importing a CSV file, which is not part of this requirement."
  },
  {
    "id": 72,
    "category": "Data Modeling and Management",
    "text": "NTO wants to initiate a daily backup of its Salesforce org. Which tool should an app builder recommend for this task?",
    "options": [
      {
        "letter": "A",
        "text": "Refresh full copy sandbox"
      },
      {
        "letter": "B",
        "text": "AppExchange package"
      },
      {
        "letter": "C",
        "text": "Data Export Service"
      },
      {
        "letter": "D",
        "text": "Report export"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.admin_exportdata.htm&type=5"
  },
  {
    "id": 73,
    "category": "Data Modeling and Management",
    "text": "Shipments at CK are created and updated by the warehouse staff in a shipping application. The information needs to be pushed into Salesforce on a regular basis. CK's app builder creates a custom object called Delivery__c to track the information. How can the app builder prevent creating duplicate delivery records and update the correct existing records when migrating data from the shipping application? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Use the Import Wizard and match on the tracking number."
      },
      {
        "letter": "B",
        "text": "Create a unique External ID field and use Dataloader."
      },
      {
        "letter": "C",
        "text": "Use the Import Wizard and match on the Salesforce ID."
      },
      {
        "letter": "D",
        "text": "Create a duplicate/match rule and use Dataloader. This answer is incorrect. The correct answer is 'B'"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "External ID: By flagging a field in Salesforce (like a Tracking Number) as an External ID, it enables \"Upsert\" capabilities. Upsert means the system will check for existing records matching that External ID. No Duplicates/Updates correctly: If the record exists, it updates it; if it doesn't, it creates a new one, entirely preventing duplicate records. Dataloader: Data Loader is the tool capable of performing the upsert operation using an External ID, whereas the standard Import Wizard only allows matching by Salesforce ID or Name."
  },
  {
    "id": 74,
    "category": "Data Modeling and Management",
    "text": "The app builder at AW Computing needs to capture information about sales rep help requests for sales engineering. Some Opportunities are more complex and require many different requests for help. Additionally, the date of the most recent request should be displayed on the Opportunity page. What should the app builder at AW Computing use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Opportunity with Master-detail field to custom object"
      },
      {
        "letter": "B",
        "text": "Custom object with Lookup field to Opportunity"
      },
      {
        "letter": "C",
        "text": "Custom object with Master-detail field to Opportunity"
      },
      {
        "letter": "D",
        "text": "Opportunity with Lookup field to custom object"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Many-to-One Relationship: A custom object (Help Request) requires a relationship to the Opportunity. Because multiple help requests can be linked to a single, complex opportunity, the child custom object must hold the relationship. Roll-Up Summaries: To display the date of the most recent request on the parent Opportunity page, you can use a Roll-Up Summary field on the Opportunity object. A roll-up summary can pull the maximum (newest) date from the custom object records, but it requires a Master-Detail relationship to do so. (Lookup fields do not support roll- up summary fields)."
  },
  {
    "id": 75,
    "category": "Data Modeling and Management",
    "text": "A new app builder on the CK team is getting familiar with the data model. They want to see how standard objects and custom objects relate. Which functionality should the app builder use to view these relationships? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Schema Builder"
      },
      {
        "letter": "B",
        "text": "Object Manager"
      },
      {
        "letter": "C",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "D",
        "text": "Lightning App Builder"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm&type=5"
  },
  {
    "id": 76,
    "category": "Data Modeling and Management",
    "text": "UC requires that all users specify that a contract is sent on each Opportunity prior to making it \"Closed Won\". UC wants to be able to report on how many Opportunities have sent Contracts compared to how many have a missing contract when the Opportunities closed. Which field type should an app builder configure to fulfill this requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Checkbox"
      },
      {
        "letter": "B",
        "text": "Picklist"
      },
      {
        "letter": "C",
        "text": "Text"
      },
      {
        "letter": "D",
        "text": "Text Area"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "A Checkbox field is the best choice because it natively tracks true/false (contract sent vs. missing) data. This makes it straightforward for users to check before closing the deal and easily allows you to group, filter, and report on sent versus missing contracts."
  },
  {
    "id": 77,
    "category": "Data Modeling and Management",
    "text": "UMS wants to create a relationship between the standard Contact object and a custom Solar Project object. Contacts can potentially be related to multiple Solar Project objects, and a Solar Project can have multiple Contacts associated with it. How should an app builder configure the data model? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "One Master-detail relationship on Contact and one Master-detail relationship on Solar Project"
      },
      {
        "letter": "B",
        "text": "Two Lookup relationships on a new custom object"
      },
      {
        "letter": "C",
        "text": "One Lookup relationship on Contact and one Lookup relationship on Solar Project"
      },
      {
        "letter": "D",
        "text": "Two Master-detail relationships on a new custom object"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.relationships_manytomany.htm&type =5"
  },
  {
    "id": 78,
    "category": "Data Modeling and Management",
    "text": "NTO has two custom objects that are part of a master-detail relationship. What determines the ownership and sharing access of the detail record? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "The default owner is set in the parent object's settings"
      },
      {
        "letter": "B",
        "text": "The Owner field on the Detail record."
      },
      {
        "letter": "C",
        "text": "The Owner field on the Master record."
      },
      {
        "letter": "D",
        "text": "The owner is set independently on the detail object's settings."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 79,
    "category": "Data Modeling and Management",
    "text": "An app builder at NTO needs to change the data type of some custom fields. The org has already met the field limit on the object and would like to limit recreating fields. What data type change limitations should the app builder consider? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Changing the data type of a field used in a report from text to an encrypted field"
      },
      {
        "letter": "B",
        "text": "Changing the data type of a field used as an External ID from number to text"
      },
      {
        "letter": "C",
        "text": "Changing the data type of a field used in lead conversion from number to text"
      },
      {
        "letter": "D",
        "text": "Changing the data type of a field used in Apex class from number to text"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.notes_on_changing_custom_field_ty pes.htm&type=5"
  },
  {
    "id": 80,
    "category": "Data Modeling and Management",
    "text": "CK asked the app builder to insert a list of 25,000 records using deduplication for the Delivery custom object. Which tool should be used? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Schema Builder"
      },
      {
        "letter": "B",
        "text": "Import Wizard"
      },
      {
        "letter": "C",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "D",
        "text": "Data Loader"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5"
  },
  {
    "id": 81,
    "category": "Data Modeling and Management",
    "text": "UC has a new custom object for Invoices that includes an Invoice Number field. Before the Invoice object can be used, invoices will be migrated from an external system maintaining their current Invoice Number. After the migration, each new Invoice created in Salesforce must have a unique Invoice Number. How should the app builder configure the Invoice Number field? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create an AutoNumber field and migrate the Invoices in Invoice Number order."
      },
      {
        "letter": "B",
        "text": "Create a Text field and mark it as a unique external ID field."
      },
      {
        "letter": "C",
        "text": "Create a Text field, then change it to AutoNumber after the migration."
      },
      {
        "letter": "D",
        "text": "Create a Text field for the original Invoice Number and an AutoNumber field for the Salesforce Invoice Number."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "A Text field marked as unique and as an external ID preserves the original Invoice Numbers during the migration (external ID enables efficient upsert/matching on import) and enforces uniqueness for every Invoice Number created going forward (unique constraint). An AutoNumber field cannot store the pre-existing numbers from the external system."
  },
  {
    "id": 82,
    "category": "Data Modeling and Management",
    "text": "NTO wants to change a master-detail relationship on Account to a lookup relationship with a custom object Park. The app builder tries to reconfigure this but is unable to do so. What could be causing this? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "The Account record includes Parks roll-up summary fields."
      },
      {
        "letter": "B",
        "text": "The park records have existing formulas on the Account."
      },
      {
        "letter": "C",
        "text": "The Park object needs at least one Master-Detail field for reporting."
      },
      {
        "letter": "D",
        "text": "The Account is included in a flow process on the Park object."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.relationships_considerations.htm&type= 5"
  },
  {
    "id": 83,
    "category": "Data Modeling and Management",
    "text": "At UMS there is a requirement for a new field called Planet Details on the Planet object where users can write detailed descriptions that can include pictures and links. What field type should the app builder utilize to fulfill this requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Multi-Select Picklist"
      },
      {
        "letter": "B",
        "text": "URL"
      },
      {
        "letter": "C",
        "text": "Rich Text Area"
      },
      {
        "letter": "D",
        "text": "Long Text Area"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.custom_field_types.htm&type=5"
  },
  {
    "id": 84,
    "category": "Data Modeling and Management",
    "text": "UC maintains information for over 2 million assets in an external system. UC needs to access these assets in real-time data in Salesforce and is nearing the data storage limits. What feature could an app builder recommend UC use? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Data Loader"
      },
      {
        "letter": "B",
        "text": "Data Export Wizard"
      },
      {
        "letter": "C",
        "text": "Salesforce Connect"
      },
      {
        "letter": "D",
        "text": "Salesforce to Salesforce"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.platform_connect_about.htm&type=5"
  },
  {
    "id": 85,
    "category": "Data Modeling and Management",
    "text": "An app builder wants to create a formula field on an Account to include data from related Contacts but is unable to find the relationship in the formula editor. What is a limitation of formulas that could be causing the issue? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Unable to reference the child records."
      },
      {
        "letter": "B",
        "text": "A master-detail relationship should be created."
      },
      {
        "letter": "C",
        "text": "Formula field limit reached on the Account object."
      },
      {
        "letter": "D",
        "text": "More than 5,000 characters in the formula."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_cross_object.htm&type=5"
  },
  {
    "id": 86,
    "category": "Data Modeling and Management",
    "text": "UC wants to deliver purchased containers to remote construction sites. These locations are missing a traditional street address. In these cases the customer will supply UC with the coordinates to the location. What type of field should the app builder use to capture this information? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "External Lookup"
      },
      {
        "letter": "B",
        "text": "Text"
      },
      {
        "letter": "C",
        "text": "Geolocation"
      },
      {
        "letter": "D",
        "text": "Number"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=custom_field_geolocate_overview.htm&ty pe=5"
  },
  {
    "id": 87,
    "category": "Data Modeling and Management",
    "text": "UC has several large customers that sell their products through dealers. UC identifies and works with a single individual at each customer and at each dealer. Separate bills are sent to each customer and each dealer. These details need to be stored in a format that clearly displays the business entities and their appropriate representatives. How should an app builder implement these requirements? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record."
      },
      {
        "letter": "B",
        "text": "Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account."
      },
      {
        "letter": "C",
        "text": "Create a single account record, add each rep as a contact and create a custom dealer object."
      },
      {
        "letter": "D",
        "text": "Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Business Entities: Creating both the customers and the dealers as separate Accounts allows for separate billing and independent tracking for each business. Appropriate Representatives: By adding each representative as a Contact on their respective Account (the customer rep on the customer account, and the dealer rep on the dealer account), you clearly associate the individual with the correct organization. Relationships: Establishing an Account Hierarchy links the dealer account as a child or related account to the customer account, making it easy to track how the entities work together."
  },
  {
    "id": 88,
    "category": "Data Modeling and Management",
    "text": "CK wants to quickly insert a list of over 60,000 net new Accounts. The template based on CK's data model was used to populate the list. Which tool should be used? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Data Loader"
      },
      {
        "letter": "B",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "C",
        "text": "Import Wizard"
      },
      {
        "letter": "D",
        "text": "Schema Builder"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_loader.htm&type=5"
  },
  {
    "id": 89,
    "category": "Data Modeling and Management",
    "text": "An app builder is creating a custom object called Testimonial__c and wants to connect Testimonial__c records with both the submiter's Contact record and Account record. If the Account Is deleted, the Testimonial__c should also be deleted. If the Contact is deleted, but the Account remains, the Testimonial__c should remain. How should this be accomplished? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Make Testimonial__c a junction object between Account and Contact using master-detail relationships."
      },
      {
        "letter": "B",
        "text": "Create a master-detail relationship from Testimonial__c to Account and a lookup relationship from Testimonial__c to Contact."
      },
      {
        "letter": "C",
        "text": "Make both the Contact and Account fields required on the Testimonial__c object and create lookup relationships from Testimonial__c to Contact and to Account."
      },
      {
        "letter": "D",
        "text": "Create a lookup relationship from Testimonial__c to Account and a master-detail relationship from Testimonial__c to Contact"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Account relationship (Master-Detail): Because the Testimonial__c records need to be deleted when the parent Account is deleted, a master-detail relationship must be used. In a master-detail relationship, the detail record automatically inherits the security and deletion behaviors of the master record. Contact relationship (Lookup): Because the Testimonial__c records should remain if the Contact is deleted, a lookup relationship is required. Lookup relationships are used to create loose associations where deleting the parent record does not delete the child record."
  },
  {
    "id": 90,
    "category": "Data Modeling and Management",
    "text": "UC wants to track installation information once a container has been purchased on a custom object. Sales reps should have visibility of all the installations associated with their opportunities. What kind of relationship should this new object have to the Opportunity? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Lookup"
      },
      {
        "letter": "B",
        "text": "Many to Many"
      },
      {
        "letter": "C",
        "text": "Master-Detail"
      },
      {
        "letter": "D",
        "text": "Hierarchical"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.ht m&type=5"
  },
  {
    "id": 91,
    "category": "Data Modeling and Management",
    "text": "UC implemented an application process that uses custom objects Internships and Applications. The organization-wide default for Internships has been set to private and is the master in the master-detail relationship with Applications. The VP of HR wants to allow edit access to Applications to recruiters. How should an app builder configure the proper access? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create a queue for the web applications and assign access to the users who will be editing the records."
      },
      {
        "letter": "B",
        "text": "Set the organization-wide default on the Applications object to Read/Write."
      },
      {
        "letter": "C",
        "text": "Add a sharing rule that grants the users Read/Write access to the Internship records."
      },
      {
        "letter": "D",
        "text": "Create a Sharing Rule that grants the users Read/Write access to the Application records."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "The Owner field on the detail and subdetail records is not available and is automatically set to the owner of the master record. Custom objects on the \"detail\" side of a master- detail relationship can't have sharing rules, manual sharing, or queues, as these require the Owner field."
  },
  {
    "id": 92,
    "category": "Data Modeling and Management",
    "text": "UC created a custom object called Component to capture details about products sold. What approach should an app builder take to show Component as a related list on Product? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create a master-detail relationship on Product to Component. Add the Component related list to the Product page layout."
      },
      {
        "letter": "B",
        "text": "Create a roll-up on Product. Add the Component related list to the Product page layout."
      },
      {
        "letter": "C",
        "text": "Create a junction object to relate Component and Product. Add the Component related list to the Product page layout."
      },
      {
        "letter": "D",
        "text": "Create a lookup relationship on Component to Product. Add the Component related list to the Product page layout."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.ht m&type=5"
  },
  {
    "id": 93,
    "category": "Data Modeling and Management",
    "text": "A new app builder on the Cloud Kicks team is getting familiar with relationships in the data model. What functionality would present the app builder with a comprehensive view of all relationships in one place? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Lightning Record Page"
      },
      {
        "letter": "B",
        "text": "Schema Builder"
      },
      {
        "letter": "C",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "D",
        "text": "Object Manager"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm&type=5"
  },
  {
    "id": 94,
    "category": "Data Modeling and Management",
    "text": "CK wants to efficiently increase the company's adoption of Salesforce while simultaneously moving away from its reliance on spreadsheets. An app builder is given a spreadsheet that everyone is sharing that needs to be added to Salesforce. The object with fields needs to be created and the data inserted simultaneously. What tool should be used? Choose only ONE best answer",
    "options": [
      {
        "letter": "A",
        "text": "Schema Builder"
      },
      {
        "letter": "B",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "C",
        "text": "Data Loader"
      },
      {
        "letter": "D",
        "text": "Import Wizard"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://www.salesforceben.com/lightning-object-creator-turn- spreadsheets-into- salesforce-objects/"
  },
  {
    "id": 95,
    "category": "Data Modeling and Management",
    "text": "CK has created a custom object called Interests__c which is joined to Accounts by way of a junction object called Account_Interest__c. What is the impact to users attempting to view an Account and the associated Account_Interest__c records if they are without read access the Interest__c object? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Users will be unable to view the Account_Interest__c records or the Interest__c records."
      },
      {
        "letter": "B",
        "text": "Users will be unable to view Account records that have a related Account_Interest__c record."
      },
      {
        "letter": "C",
        "text": "Users will be able to view the Account_Interest__c record, but unable to view the field or any information relating back to the Interest__c record."
      },
      {
        "letter": "D",
        "text": "Users will be able to view the Account_Interest__c records and will have read- only access to the Interest__c records."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type= 5"
  },
  {
    "id": 96,
    "category": "Data Modeling and Management",
    "text": "DreamHouse Realty has a mentorship program that pairs experienced Realtors with new Realtors. Each experienced Realtor can mentor one or several new Realtors, and each new Realtor is required to work with a single experienced Realtor they report to for a probationary period. What type of relationship would an app builder set up to meet this specification? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Many-to-many"
      },
      {
        "letter": "B",
        "text": "Lookup"
      },
      {
        "letter": "C",
        "text": "Indirect lookup"
      },
      {
        "letter": "D",
        "text": "Master-detail"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 97,
    "category": "Data Modeling and Management",
    "text": "CK wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once they are created. On the gift card object, what type of field should be created to support this requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Lookup relationship"
      },
      {
        "letter": "B",
        "text": "Formula"
      },
      {
        "letter": "C",
        "text": "Master-detail relationship"
      },
      {
        "letter": "D",
        "text": "Roll-up summary"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 98,
    "category": "Data Modeling and Management",
    "text": "UMS is looking to hire some new employees. UMS wants to allow the same applicant to apply for multiple open positions using a single application. What should an app builder recommend to meet these requirements? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create a master-detail relationship field on Application__c to Applicant__c"
      },
      {
        "letter": "B",
        "text": "Create a master-detail relationship field on Applicant__c to Application__c"
      },
      {
        "letter": "C",
        "text": "Create a master-detail relationship field on Application__c to Open_Position__c"
      },
      {
        "letter": "D",
        "text": "Create a master-detail relationship field on Open_Position__c to Application__c"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 99,
    "category": "Data Modeling and Management",
    "text": "CK has a shipment date for each shipment that is sent out. Dispatchers need more details on the day and time the shipment was sent out. The app builder needs to change the current field type that is used from Date to Date/Time. What should the app builder be aware of when it comes to data already in the system? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "The change will be instant."
      },
      {
        "letter": "B",
        "text": "The field name will change."
      },
      {
        "letter": "C",
        "text": "Data loss will be experienced."
      },
      {
        "letter": "D",
        "text": "Historical data will be updated to 12:00 timestamp."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.notes_on_changing_custom_field_type s.htm&type=5"
  },
  {
    "id": 100,
    "category": "Data Modeling and Management",
    "text": "After a deal is closed, CK wants to assign a user as a customer service manager (CSM) in addition to the account owner and would like a new field to easily track and report which CSM is assigned to the Account. What solution should an app builder use for this request? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Picklist field"
      },
      {
        "letter": "B",
        "text": "Multi-select picklist field"
      },
      {
        "letter": "C",
        "text": "Text field"
      },
      {
        "letter": "D",
        "text": "Lookup field"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=ind.os_configure_a_lookup_field_18037 5.htm&type=5"
  },
  {
    "id": 101,
    "category": "Data Modeling and Management",
    "text": "CK is redefining its entire business process to convert the Manager Notes field from a Long Text Area field. The goal is to encourage managers to be more concise in their comments and stay at 255 characters or less. There is preexisting information in the Manager Notes field that often is well beyond the character limit. What would happen to any existing information if the app builder tries to convert to preexisting Long Text Area field to Text Area? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Preexisting information in the field will be completely lost."
      },
      {
        "letter": "B",
        "text": "Preexisting information will remain even if it was over 255 characters."
      },
      {
        "letter": "C",
        "text": "Preexisting information will truncate to the first 255 characters."
      },
      {
        "letter": "D",
        "text": "Preexisting information will cause an error message to pop up."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.notes_on_changing_custom_field_type s.htm&type=5"
  },
  {
    "id": 102,
    "category": "Data Modeling and Management",
    "text": "After discovering a second sun in the solar system, UMS wants to change the field relationship between Sun__c and Planet__c to a lookup rather than a master-detail. What should an app builder consider about the effect on reporting before making this change? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Existing reports created under the Sun__c with Planet__c report type made by Salesforce will be unusable, but not deleted."
      },
      {
        "letter": "B",
        "text": "Existing roll-up summary fields will remain on the Sun__c object and available for reporting, but will no longer update."
      },
      {
        "letter": "C",
        "text": "Existing roll-up summary fields will be deleted from the Sun__c object and from any reports where they were added."
      },
      {
        "letter": "D",
        "text": "Existing reports created under the Sun__c with Planet__c report type made by Salesforce will be deleted."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.relationships_considerations.htm&type= 5"
  },
  {
    "id": 103,
    "category": "Data Modeling and Management",
    "text": "CK wants to simultaneously delete a Supplier__c record and all Supplier_Item__c records if a partnership ends with a supplier. What solution could an app builder use to meet the requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Master-detail"
      },
      {
        "letter": "B",
        "text": "Many-to-many"
      },
      {
        "letter": "C",
        "text": "Indirect lookup"
      },
      {
        "letter": "D",
        "text": "Hierarchical"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 104,
    "category": "Data Modeling and Management",
    "text": "What are the limitations of Schema Builder when creating a custom object? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Custom fields can be added to any custom objects, excluding formula field types."
      },
      {
        "letter": "B",
        "text": "Fields and relationships can be created, but they will be unable to add the fields to the page layout from the canvas."
      },
      {
        "letter": "C",
        "text": "Save should be clicked each time a new object, field, or relationship is created."
      },
      {
        "letter": "D",
        "text": "Relationships can be made to any custom objects, but any relationships to standard objects should be built in Lightning Object Manager."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.schema_builder_considerations.htm& type=5"
  },
  {
    "id": 105,
    "category": "Data Modeling and Management",
    "text": "UC wants to match Opportunity data from Salesforce to the records in a financial database. What is required to configure an indirect lookup relationship in Salesforce between the Salesforce Opportunity records and those in a financial database? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "TEXT(Id)"
      },
      {
        "letter": "B",
        "text": "CASESAFE(Id)"
      },
      {
        "letter": "C",
        "text": "External ID"
      },
      {
        "letter": "D",
        "text": "Salesforce Record ID"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.external_object_indirect_lookup_relat ionships.htm&type=5"
  },
  {
    "id": 106,
    "category": "Data Modeling and Management",
    "text": "The training team at NTO uses a custom Training object to track customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record. Which two behaviors should an app builder take into consideration? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "On Student record, users can set up Roll-up summary field on Training records."
      },
      {
        "letter": "B",
        "text": "Cross-object field updates between Training and Student records are not supported."
      },
      {
        "letter": "C",
        "text": "On Training record, the Student Lookup field can be made optional."
      },
      {
        "letter": "D",
        "text": "On Training record, users can only delete Students, if they have access to it."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "Cross-object field updates between Training and Student records are not supported. In Salesforce, cross-object field updates via Workflow Rules only support updating the \"parent\" record from a \"child\" record in a Master-Detail relationship. Since this scenario describes a Lookup relationship (standard for relating custom objects like these unless otherwise specified), cross-object field updates are not natively supported through simple workflow rules. On Training record, the Student Lookup field can be made optional. Unlike Master- Detail relationships where the relationship field is always required, a Lookup field can be configured as optional, allowing a Training record to exist without a related Student record."
  },
  {
    "id": 107,
    "category": "Data Modeling and Management",
    "text": "An app builder is loading data into Salesforce. To link the new records back to the legacy system, a field will be used to track the legacy ID on the Account object. For future data loads this ID will be used when upserting records. Which two field attributes should be selected? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Required"
      },
      {
        "letter": "B",
        "text": "Text(encrypted)"
      },
      {
        "letter": "C",
        "text": "Unique"
      },
      {
        "letter": "D",
        "text": "External ID"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "Unique: This ensures that each record's legacy ID is unique and prevents duplicates. External ID: This facilitates the identification of records during data import operations, such as upserts, where records can be matched based on this external ID."
  },
  {
    "id": 108,
    "category": "Data Modeling and Management",
    "text": "A Manager at UC has requested that a custom text field be converted to a picklist in order to promote better data hygiene. Which two actions should be considered before changing the field type? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Field references will be removed in Visualforce pages."
      },
      {
        "letter": "B",
        "text": "All data should be backed up before converting a text field."
      },
      {
        "letter": "C",
        "text": "Existing list views that reference the field may be deleted."
      },
      {
        "letter": "D",
        "text": "Changing a field type will remove existing field history."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.notes_on_changing_custom_field_ty pes.htm&type=5"
  },
  {
    "id": 109,
    "category": "Data Modeling and Management",
    "text": "DHR wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system. Which two details should the app builder know when using external ID fields? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "An external ID field can be a number field."
      },
      {
        "letter": "B",
        "text": "An external ID field can be URL field."
      },
      {
        "letter": "C",
        "text": "An external ID field can be a phone field."
      },
      {
        "letter": "D",
        "text": "An external ID field can be a text field."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "Salesforce allows us mark only custom fields with data type text, number or email as External IDs."
  },
  {
    "id": 110,
    "category": "Data Modeling and Management",
    "text": "UC wants to streamline its data capture process by linking fields together. UC wants to do this so that the available values on dependent fields are driven by values selected on controlling fields. Which three considerations support the requirements? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "The data import wizards only allow values to be imported into a dependent picklist if they match the appropriate controlling field."
      },
      {
        "letter": "B",
        "text": "Custom picklist fields can be either controlling or dependent fields."
      },
      {
        "letter": "C",
        "text": "Checkbox fields can be controlling fields but not dependent fields."
      },
      {
        "letter": "D",
        "text": "Standard and custom picklist fields can be dependent fields."
      },
      {
        "letter": "E",
        "text": "Multi-select picklists can be dependent picklists but NOT controlling fields."
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/articleView?id=fields_dependent_field_considerations.ht m&type=5"
  },
  {
    "id": 111,
    "category": "Data Modeling and Management",
    "text": "Universal Containers (UC) wants to delete data in several fields for 5,000 Lead records. UC exported the selected Record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Select Insert Null Values in Settings."
      },
      {
        "letter": "B",
        "text": "Use Data Loader to update leads using the CSV file."
      },
      {
        "letter": "C",
        "text": "Select the correct record type."
      },
      {
        "letter": "D",
        "text": "Use Import Wizard to update leads using the CSV file."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=000385542&type=1"
  },
  {
    "id": 112,
    "category": "Data Modeling and Management",
    "text": "UMS wants to convert the relationship between Galaxy__c and Star__c from a lookup relationship to a master-detail relationship so each Galaxy__c record can be equipped with a roll-up summary count of Star__c records. Which two considerations should be made? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "The Star__c records are all required to have an existing value in their Galaxy__c field."
      },
      {
        "letter": "B",
        "text": "The Galaxy__c object is required to contain existing roll-up summary fields."
      },
      {
        "letter": "C",
        "text": "The Star__c object has fewer than two existing master-detail relationships."
      },
      {
        "letter": "D",
        "text": "The Galaxy__c object has fewer than two existing master-detail relationships."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type= 5"
  },
  {
    "id": 113,
    "category": "Data Modeling and Management",
    "text": "UC has a custom Invoice__c object and a custom Invoice_Line_Item__c object. The Invoice_Line_Item__c object has a lookup relationship to the Invoice__c. UC would like to convert the lookup relationship to a master-detail relationship but is unable to do so. Which two reasons could be preventing this relationship conversion? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Invoice_Line_Item__c records exist without having the Invoice__c lookup field populated."
      },
      {
        "letter": "B",
        "text": "There is a roll-up summary field on the Invoice__c object."
      },
      {
        "letter": "C",
        "text": "Custom objects are unable to be on the detail side of a master-detail relationship."
      },
      {
        "letter": "D",
        "text": "There are already two master-detail relationships on the Invoice_Line_Item__c."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/articleView?id=relationships_considerations.htm&type=0"
  },
  {
    "id": 114,
    "category": "Data Modeling and Management",
    "text": "The events manager at CK hosted a launch party and wants to add a CSV file of attendees into a Campaign as Campaign Members so CK can track any future purchases the guests make. Which three considerations should be made prior to using the Data Import Wizard for importing Campaign Members? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "When importing Campaign Members to a Campaign, a status does not need to be selected because the default member status is 'Planned'."
      },
      {
        "letter": "B",
        "text": "Related Lead, Contact, and Campaign records for the Campaign Members should exist prior to import."
      },
      {
        "letter": "C",
        "text": "Inserting new Campaign Members prohibits workflow rules and processes for any records that meet automation criteria."
      },
      {
        "letter": "D",
        "text": "The Data Import Wizard should be accessed from the object home page or from personal settings since they are not System Administrator."
      },
      {
        "letter": "E",
        "text": "The CSV should be properly formatted and deduplicated prior to insertion via the Data Import Wizard to maintain data cleanliness."
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.for_campaign_members.htm&type=5"
  },
  {
    "id": 115,
    "category": "Data Modeling and Management",
    "text": "UC has large data volumes and is nearing data storage limits. The planned solution is to archive historical data to reduce data storage in Salesforce; however, UC would still like to use reports, queries, and lookups on the archived information. Which two options could meet this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "External objects"
      },
      {
        "letter": "B",
        "text": "Custom objects"
      },
      {
        "letter": "C",
        "text": "Related objects"
      },
      {
        "letter": "D",
        "text": "Big objects"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.custom_index.htm&type=5 https://help.salesforce.com/s/articleView?id=sf.external_object_define.htm&type=5"
  },
  {
    "id": 116,
    "category": "Data Modeling and Management",
    "text": "UC is migrating its sales operations from a legacy system that was used in Europe. Opportunities need to be imported with the proper country currency. Which two steps should an app builder configure to meet these requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Include the Currency ISO Code Column in the import file."
      },
      {
        "letter": "B",
        "text": "Use Import Wizard to import the records."
      },
      {
        "letter": "C",
        "text": "Include the Currency ISO code in all currency fields in the import file."
      },
      {
        "letter": "D",
        "text": "Use Data Loader to import the records."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.import_currency.htm&type=5 https://help.salesforce.com/s/articleView?id=sf.records_gen_info.htm&type=5 https://help.salesforce.com/s/articleView?language=en_US&id=sf.when_to_use_the_ data_loader.htm&type=5"
  },
  {
    "id": 117,
    "category": "Data Modeling and Management",
    "text": "The marketing team at UC has a list of 400 leads it wants to upload to Salesforce. The team needs to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers.",
    "options": [
      {
        "letter": "A",
        "text": "Upload the lead list using the Import Wizard and select a Matching Type to prevent duplicate lead creation."
      },
      {
        "letter": "B",
        "text": "Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to-Lead scenario."
      },
      {
        "letter": "C",
        "text": "Use Data Loader's update function to import leads and match to the existing records based on e-mail address."
      },
      {
        "letter": "D",
        "text": "Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created leads."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.matching_rules_standard_rules.htm& type=5 https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5"
  },
  {
    "id": 118,
    "category": "Data Modeling and Management",
    "text": "To increase adoption, UC is proposing changes to its Salesforce data model to allow easier visibility for sales reps into key metrics. The proposal has three custom objects related to the Account object, one with a master-detail, and two that are not. Each of these objects has 15 fields that they would like to summarize on the Account object. What are two considerations for this proposal? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Roll-up summaries are limited to master-detail relationships."
      },
      {
        "letter": "B",
        "text": "Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG."
      },
      {
        "letter": "C",
        "text": "An object can have 25 roll-up summaries."
      },
      {
        "letter": "D",
        "text": "An object can have 20 object references."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 119,
    "category": "Data Modeling and Management",
    "text": "UC uses the Asset object to track products that are installed at customer locations. A new object, Asset_Inventory__c, has been created to capture details about the asset. Which approach should the app builder take to show Asset_Inventory__c as a related list on Asset?",
    "options": [
      {
        "letter": "A",
        "text": "Create a lookup relatonship on Asset_Inventory__c to Asset. Add the Asset_Inventory__c related list to the Asset page layout."
      },
      {
        "letter": "B",
        "text": "Create a roll-up on Asset. Add the Asset_Inventory__c related list to the Asset page layout."
      },
      {
        "letter": "C",
        "text": "Create a junction object to relate Asset_Inventory__c and Asset. Add the Asset_Inventory__c related list to the Asset page layout."
      },
      {
        "letter": "D",
        "text": "Create a master-detail relationship on Asset to Asset_Inventory__c Add the Asset_Inventory__c related list to the Asset page layout."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 120,
    "category": "Data Modeling and Management",
    "text": "Duplicate management for Leads has been implemented at Universal Containers but it seems duplicate leads are still being created. The Org Wide Default (OWD) is set to \"Private\" for Leads. Which two actions help prevent duplicate Leads from being created? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Change the Lead Duplicate Rule details to Bypass Sharing Rules."
      },
      {
        "letter": "B",
        "text": "Change the Lead Assignment Rule to check for duplicates."
      },
      {
        "letter": "C",
        "text": "Change the Lead Matching Rule to Block on Create."
      },
      {
        "letter": "D",
        "text": "Change OWD for Leads to Public Read."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.duplicate_rules_standard_lead_rule.h tm&type=5"
  },
  {
    "id": 121,
    "category": "Data Modeling and Management",
    "text": "DreamHouse Realty (DR) is expanding into subsidized housing by partnering with local government entities. DR uses Sales Cloud and has enabled field history tracking on the Opportunity object. Due to increased information requirements, the App Dev team is changing Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better descriptions. Which two considerations should be made by the team? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Rich text field values of all lengths are displayed fully in reports."
      },
      {
        "letter": "B",
        "text": "Audit Trail is available through REST API extracts."
      },
      {
        "letter": "C",
        "text": "Data loss may occur when changing custom field types."
      },
      {
        "letter": "D",
        "text": "Field History Tracking records value changes of 255 characters or less."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "When changing custom field types - for example converting a Text Area (Long) field to a Rich Text field - data loss may occur, so data should be backed up first. Also, field history tracking only records value changes of 255 characters or less, so longer rich text values are not fully tracked. The Setup Audit Trail is not available through REST API extracts."
  },
  {
    "id": 122,
    "category": "Data Modeling and Management",
    "text": "An app builder needs to change the data type of some custom fields. Which two limitations should the app builder be aware of when changing the data type of a custom field? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "It is not possible to change the data type of a formula field to any data type."
      },
      {
        "letter": "B",
        "text": "It is not possible to change the data type of field referenced by Apex code,"
      },
      {
        "letter": "C",
        "text": "It is not possible to change the data type of a field used as an External ID from number to text."
      },
      {
        "letter": "D",
        "text": "It is not possible to change the data type of a Text Area (Long) field to Text."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "Changing the data type of custom fields in Salesforce has specific limitations that need to be considered to ensure system integrity and prevent errors: A. It is not possible to change the data type of a formula field to any data type. Formula fields are calculated based on other field values and cannot be converted into a storage data type because they do not store data themselves. D. It is not possible to change the data type of a Text Area (Long) field to Text. Text Area (Long) fields support up to 131,072 characters, which far exceeds the 255 character limit of standard Text fields. Converting such a field to a smaller capacity field would potentially lead to data truncation or loss. For official guidance on data type changes, refer to Salesforce's Custom Field Considerations."
  },
  {
    "id": 123,
    "category": "Data Modeling and Management",
    "text": "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object. The App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
    "options": [
      {
        "letter": "A",
        "text": "The invoice must have at least one Master-Detail field for reporting."
      },
      {
        "letter": "B",
        "text": "The Account record includes Invoice roll-up summary fields."
      },
      {
        "letter": "C",
        "text": "The Invoice records have existing values in the Account."
      },
      {
        "letter": "D",
        "text": "The Account is included in the workflow on the Invoice object."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "The Account record includes Invoice roll-up summary fields. This is correct because roll-up summary fields are only available on the master object in a master- detail relationship, and changing the field type to lookup would delete the roll-up summary fields"
  },
  {
    "id": 124,
    "category": "Data Modeling and Management",
    "text": "The sales team receives a list of approximately 800 leads each morning from the marketing team. The marketing team does not know if any of the leads are currently in the pipeline and sends the entire list each morning. Which tool should be used to import these leads into Salesforce while preventing the duplicates from being inserted?",
    "options": [
      {
        "letter": "A",
        "text": "Dataloader.io"
      },
      {
        "letter": "B",
        "text": "Data Import Wizard"
      },
      {
        "letter": "C",
        "text": "Data Loader"
      },
      {
        "letter": "D",
        "text": "Manual entry"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "To import leads while preventing duplicates: B. Data Import Wizard is the appropriate tool. The Data Import Wizard in Salesforce includes functionality to check for duplicates based on matching records by certain criteria (like email or lead ID) during the import process, thus preventing duplicate lead records from being created. More details on using the Data Import Wizard can be found in the Salesforce Data Import Wizard guide."
  },
  {
    "id": 125,
    "category": "Data Modeling and Management",
    "text": "Universal Containers (UC) needs a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object.",
    "options": [
      {
        "letter": "A",
        "text": "Related Picklist"
      },
      {
        "letter": "B",
        "text": "Shared Custom Field"
      },
      {
        "letter": "C",
        "text": "Global Picklist Value Set"
      },
      {
        "letter": "D",
        "text": "Dependent Picklist"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "When multiple objects require the same picklist values, the correct approach is to create a Global Picklist Value Set (also called a Global Value Set). This allows an organization to maintain one centralized list of picklist values that can be reused across multiple picklist fields on different objects. Why C is correct:Exact Extract:\"Global value sets let you share the same picklist values with more than one picklist field. A global value set is a set of shared values that you define once and use in multiple custom picklist fields.\" \u2014 Salesforce Help | Global Value SetsThis ensures consistent data values, simplifies maintenance, and makes changes automatically available wherever the global picklist is used. Why C is correct:Exact Extract:\"Global value sets let you share the same picklist values with more than one picklist field. A global value set is a set of shared values that you define once and use in multiple custom picklist fields.\" \u2014 Salesforce Help | Global Value SetsThis ensures consistent data values, simplifies maintenance, and makes changes automatically available wherever the global picklist is used. Why not A (Related Picklist):\"Related Picklist\" is not a valid Salesforce feature. Why not B (Shared Custom Field):Salesforce does not provide a \"Shared Custom Field\" functionality. Each field belongs to a specific object. Why not D (Dependent Picklist):Dependent picklists control available values based on another field's value. They do not allow reuse of a single value list across multiple objects. References (Salesforce Platform App Builder documentation / Study Guide topics): Salesforce Help | Global Value Sets Salesforce Help | Picklist Fields Salesforce Platform App Builder Exam Guide | Data Modeling and Management"
  },
  {
    "id": 126,
    "category": "Data Modeling and Management",
    "text": "Universal Containers wants to track installation information once a container has been purchased on a custom object. Sales reps should have visibility of all the installations associated with their opportunities. What kind of relationship should this new object have to the Opportunity?",
    "options": [
      {
        "letter": "A",
        "text": "Lookup"
      },
      {
        "letter": "B",
        "text": "Hierarchical"
      },
      {
        "letter": "C",
        "text": "Master-Detail"
      },
      {
        "letter": "D",
        "text": "Many to Many"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "The new object should have a lookup relationship to the Opportunity object. A lookup relationship creates a link between two objects and allows related records to be viewed in a related list. This can be used to track installation information for each opportunity and give sales reps visibility of all the installations associated with their opportunities. Option B, C, and D are not appropriate for this requirement."
  },
  {
    "id": 127,
    "category": "Data Modeling and Management",
    "text": "AW Computing has a custom object for service plans. A service plan needs to be associated to one and only one contact. The support manager noticed if the wrong contact is associated, the reps are unable to change the contact. The app builder already confirmed the user has correct access to the field and there are no validations associated with the service plans. What could be causing the issue?",
    "options": [
      {
        "letter": "A",
        "text": "The Read Only radio button, Allows users with at least Read access to the Master record to create, edit, or delete related Detail records, is selected."
      },
      {
        "letter": "B",
        "text": "The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is unchecked."
      },
      {
        "letter": "C",
        "text": "The Read/Write radio button, Allows users with at least Read/Write access to the Master record to create, edit, or delete related Detail records, is selected."
      },
      {
        "letter": "D",
        "text": "The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is checked."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "The issue described occurs due to the settings in the master-detail relationship. Specifically: The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is unchecked (B). This setting prevents changing the parent record (contact) of a child record (service plan) once it has been set. If 'Allow reparenting' is unchecked, it restricts the ability to change the associated contact, leading to the issue observed. The other options do not directly address the inability to change the associated contact on a service plan record. The 'Read Only' and 'Read/Write' settings (A and C) pertain to access rights to the detail records based on the master record's access but do not affect the ability to reparent a record. For a detailed understanding of master-detail relationships and their settings, including reparenting, see the Salesforce documentation on relationships: Master-Detail Relationships: https://help.salesforce.com/articleView?id=relationships_considerations. htm&type=5"
  },
  {
    "id": 128,
    "category": "Data Modeling and Management",
    "text": "Universal Containers (UC) delivers purchased containers to remote construction sites. Customers supply UC with crossroads or location markers. Which field type should the app builder use to capture this information?",
    "options": [
      {
        "letter": "A",
        "text": "Number"
      },
      {
        "letter": "B",
        "text": "Geolocation"
      },
      {
        "letter": "C",
        "text": "Reference"
      },
      {
        "letter": "D",
        "text": "External Lookup"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "The best choice for capturing geographic location data, such as crossroads or location markers provided by customers, is the Geolocation field type. This field type stores latitude and longitude data, allowing accurate pinpointing of locations on a map. Geolocation fields are suitable for any application that needs to handle coordinates for mapping and proximity calculations. A: Number field is not specific enough for geographical coordinates. C: Reference fields link to other records, not geographical data. Reference: Geolocation Custom Fields on Salesforce Help"
  },
  {
    "id": 129,
    "category": "Data Modeling and Management",
    "text": "Universal Containers (UC) has several picklist fields on the Account object whose values are routinely modified to meet changing business requirements. Due to these revolving changes, UC has a high number of inactive picklist values that are impacting system performance and user experience. What can the app builder do to alleviate this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Establish upper bound on existing picklists in Picklist Settings."
      },
      {
        "letter": "B",
        "text": "Set up Global Values in Picklist Value Sets."
      },
      {
        "letter": "C",
        "text": "Remove upper bound on inactive picklist values in Picklist Settings."
      },
      {
        "letter": "D",
        "text": "Convert the picklist fields to a different field type that will still meet the business requirements."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "To manage frequently changing picklist values effectively: B. Set up Global Values in Picklist Value Sets. This approach allows for centralized management of picklist values that can be reused across multiple fields and objects. By using global value sets, inactive values can be efficiently managed and deactivated without impacting fields that use these sets. For further information on managing picklists, check Salesforce's Picklist Management guide."
  },
  {
    "id": 130,
    "category": "Data Modeling and Management",
    "text": "The app builder needs to change the data types of new custom fields. The app builder is not able to delete and recreate any of the fields, nor modify any apex code. Which data type change will require the app builder to perform the additional steps in order to retain existing functionalities?",
    "options": [
      {
        "letter": "A",
        "text": "Changing the data type of a field used in an apex class from number to text."
      },
      {
        "letter": "B",
        "text": "Changing the data type of a field used in a report from a text to an encrypted field"
      },
      {
        "letter": "C",
        "text": "Changing the data type of a field used as an external id from number to text."
      },
      {
        "letter": "D",
        "text": "Changing the data type of a field used in lead conversion from number to text"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Per Salesforce documentation, changing the data type of a custom field that is mapped for lead conversion deletes the field mapping - the app builder must recreate the mapping afterwards, which is the additional step required to retain existing functionality. Text cannot be converted to an encrypted field at all, and the other conversions do not require additional setup steps."
  },
  {
    "id": 131,
    "category": "Data Modeling and Management",
    "text": "What is one limitation of using schema builder when creating a field?",
    "options": [
      {
        "letter": "A",
        "text": "Cannot create formula fields."
      },
      {
        "letter": "B",
        "text": "Cannot see existing relationships between objects."
      },
      {
        "letter": "C",
        "text": "Cannot add fields to page layouts."
      },
      {
        "letter": "D",
        "text": "Cannot create lookup relationships."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "One of the limitations when using the Schema Builder for creating fields is: C. Cannot add fields to page layouts. While Schema Builder allows for easy visualization and creation of fields and objects, it does not support placing these fields onto specific page layouts directly from the Schema Builder interface. To place fields on page layouts, you need to: Navigate to Setup # Object Manager # select your object. Click on Page Layouts, choose the appropriate layout, and manually add the newly created fields. This step is necessary to ensure fields are visible and properly arranged on user interfaces. For more details, Salesforce's Schema Builder documentation outlines its capabilities and limitations."
  },
  {
    "id": 132,
    "category": "Data Modeling and Management",
    "text": "The app builder at Ursa Major Solar created a master-detail relationship between a parent object Galaxy__c and child object Star__c. What is the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
    "options": [
      {
        "letter": "A",
        "text": "A Galaxy__c with Star__c report type will be automatically created."
      },
      {
        "letter": "B",
        "text": "A Star__c report type with Galaxy__c as a field will be automatically created."
      },
      {
        "letter": "C",
        "text": "A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c."
      },
      {
        "letter": "D",
        "text": "A new custom report type will need to be created for Galaxy__c with Star__c."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "When a master-detail relationship is created between two objects, Salesforce automatically creates a standard report type that allows users to report on the parent and child together. Why A (Galaxy__c with Star__c) is correct:Exact Extract:\"When you create a master-detail relationship, Salesforce automatically creates a primary report type that includes records from both the master and its detail.\" \u2014 Salesforce Help | Standard Report TypesTherefore, a \"Galaxy__c with Star__c\" report type is automatically generated, allowing users to create reports showing all child records (Star__c) related to each parent (Galaxy__c). Why A (Galaxy__c with Star__c) is correct:Exact Extract:\"When you create a master-detail relationship, Salesforce automatically creates a primary report type that includes records from both the master and its detail.\" \u2014 Salesforce Help | Standard Report TypesTherefore, a \"Galaxy__c with Star__c\" report type is automatically generated, allowing users to create reports showing all child records (Star__c) related to each parent (Galaxy__c). Why not B:The parent-to- child relationship drives the report type. A \"Star__c with Galaxy__c\" type is not automatically created. Why not C or D:Custom report types are only needed if you want to include additional related objects or modify relationships; Salesforce automatically provides one for master-detail pairs. References: Salesforce Help | Standard Report Types Salesforce Platform App Builder Exam Guide | Data Modeling and Management"
  },
  {
    "id": 133,
    "category": "Data Modeling and Management",
    "text": "Universal Containers has several large customers that sell their products through dealers. Each customer and dealer have an individual rep who works directly with uc and each is billed separately. How can an app builder implement these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Create a single account record, add each rep as a contact and create a custom dealer object"
      },
      {
        "letter": "B",
        "text": "Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy."
      },
      {
        "letter": "C",
        "text": "Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record"
      },
      {
        "letter": "D",
        "text": "Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Creating both the customer and the dealer as accounts, adding each rep as a contact on the corresponding account, and building an account hierarchy lets UC track and bill each party separately while keeping the dealer relationships visible under the customer account. Account teams are used to grant internal users working access to a single account - they do not model separately billed entities."
  },
  {
    "id": 134,
    "category": "Data Modeling and Management",
    "text": "Cloud Kicks is redefining its entire business process to convert the Manager Notes field from a long text area field. The goal is to encourage managers to be more concise in their comments and stay at 255 characters or less. There is preexisting information in the Manager Notes field that often is well beyond the character limit. What would happen to any existing information if the app builder tries to convert a preexisting long text area field to text area?",
    "options": [
      {
        "letter": "A",
        "text": "Preexisting information will truncate to the first 255 characters."
      },
      {
        "letter": "B",
        "text": "Preexisting information will remain even if it was over 255 characters."
      },
      {
        "letter": "C",
        "text": "Preexisting information will cause an error message to pop up."
      },
      {
        "letter": "D",
        "text": "Preexisting information in the field will be completely lost."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "If the app builder tries to convert a preexisting long text area field to text area, preexisting information will truncate to the first 255 characters. This means that any information beyond 255 characters will be lost. Option B is incorrect because preexisting information will not remain if it was over 255 characters. Option C is incorrect because preexisting information will not cause an error message to pop up. Option D is incorrect because preexisting information in the field will not be completely lost, only truncated."
  },
  {
    "id": 135,
    "category": "Data Modeling and Management",
    "text": "Ursa Major Solar (UMS) is planning to hire some new employees. UMS wants to allow a job candidate (Job_Candidate__c) to apply for multiple open positions (Open_Position__c) and then be able to view the applications (Application__c) on the job candidate record. UMS also wants to view all the applications for a specific open position.",
    "options": [
      {
        "letter": "A",
        "text": "Create a master-detail relationship on Open_Position__c to Application__c."
      },
      {
        "letter": "B",
        "text": "Create a master-detail relationship field on Job_Candidate__c to Application__c."
      },
      {
        "letter": "C",
        "text": "Create a master-detail relationship field on Application__c to Job_Candidate__c."
      },
      {
        "letter": "D",
        "text": "Create a master-detail relationship field on Application__c to Open_Position__c."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "UMS wants each Application to connect both to a Job Candidate and an Open Position, where: One Job Candidate can apply for multiple Open Positions. One Open Position can receive multiple Applications.This is a many-to-many relationship, which in Salesforce is implemented by using a junction object. In this case, Application__c serves as the junction object between Job_Candidate__c and Open_Position__c. Exact Extract: \"To create a many-to-many relationship, create two master-detail relationships on the junction object. Each master-detail relationship links the junction object to one of the objects you want to relate.\" \u2014 Salesforce Help | Create a Many-to-Many Relationship Step 1: On Application__c, create a Master-Detail relationship to Job_Candidate__c (Answer C). Step 2: On Application__c, create a Master-Detail relationship to Open_Position__c (Answer D). This setup allows: Viewing all Applications related to a given Job Candidate. Viewing all Applications related to a given Open Position. Exact Extract: \"A junction object is a custom object with two master-detail relationships, and it is the key to building many- to-many relationships between two objects.\" \u2014 Salesforce Help | Junction Object Concepts References (Salesforce Platform App Builder documentation / Study Guide topics): Salesforce Help | Create a Many-to- Many Relationship Salesforce Help | Junction Object Concepts Salesforce Platform App Builder Exam Guide | Data Modeling and Management"
  },
  {
    "id": 136,
    "category": "Data Modeling and Management",
    "text": "DreamHouse Realty wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system. Which two field types are allowed as an external ID?",
    "options": [
      {
        "letter": "A",
        "text": "Number field"
      },
      {
        "letter": "B",
        "text": "URL field"
      },
      {
        "letter": "C",
        "text": "Text field"
      },
      {
        "letter": "D",
        "text": "Phone field"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "Correct answer: A, C. (No explanation provided in source.)"
  },
  {
    "id": 137,
    "category": "Business Logic and Process Automation",
    "text": "UC wants to give sales managers the ability to quickly provide sign off on an Opportunity via the Opportunity record page when a sales rep has discounted a deal by 20% to 30%. Which two features should be used for this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Approval Process"
      },
      {
        "letter": "B",
        "text": "Dynamic Actions"
      },
      {
        "letter": "C",
        "text": "Validation Rule"
      },
      {
        "letter": "D",
        "text": "Schema Builder"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "Approval Process: This provides the structured workflow and formal oversight needed to track and manage sign-offs for deals with a 20% to 30% discount. Dynamic Actions: This allows you to conditionally display the approval action button directly on the Opportunity record page specifically when the deal meets your discount criteria."
  },
  {
    "id": 138,
    "category": "Business Logic and Process Automation",
    "text": "An app builder uses Process Builder to create a Chatter post. Which two items should be avoided to ensure a post is successfully created? Choose 2 answers.",
    "options": [
      {
        "letter": "A",
        "text": "Message is posting to a private Chatter group"
      },
      {
        "letter": "B",
        "text": "Message starts with a field reference"
      },
      {
        "letter": "C",
        "text": "Message has a space at the beginning"
      },
      {
        "letter": "D",
        "text": "Message is posting to a Community user or group"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_considerations_chatter.htm& type=5"
  },
  {
    "id": 139,
    "category": "Business Logic and Process Automation",
    "text": "UC expects impacts to operations due to increased demand. The executive team will reach out to current customers and wants to see the number of open cases for the account and parent account. What should an app builder use to display the number of open cases on the account page?",
    "options": [
      {
        "letter": "A",
        "text": "Custom object"
      },
      {
        "letter": "B",
        "text": "Roll-up summary"
      },
      {
        "letter": "C",
        "text": "Flow"
      },
      {
        "letter": "D",
        "text": "Approval Process"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Roll-up summary fields are designed to calculate and display aggregate values from related child records (like Cases) on a master record (like an Account). An app builder can use this feature to automatically count the number of open cases on the account as well as the parent account."
  },
  {
    "id": 140,
    "category": "Business Logic and Process Automation",
    "text": "CK has a formula field Specialty__c on Opportunity that gets its value from the Specialty__c field on the related Account. CK has changed its processes to allow opportunities to have different values for Specialty__c than their Account. How can sales reps enter values for the Specialty__c field on Opportunity, while preserving the values on existing opportunities? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Export the data, convert the field to a text field, and import the data."
      },
      {
        "letter": "B",
        "text": "Convert the field to a text field and the values will be in it."
      },
      {
        "letter": "C",
        "text": "Create a new text field and keep using the existing formula field."
      },
      {
        "letter": "D",
        "text": "Create a new text field and import the formula field values in it."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Preserving existing values: You cannot directly convert a formula field into a text field. Exporting and importing overwrites or loses the historical logic unless you store the evaluated data. The correct migration process: By creating a new editable text field, you safely preserve the existing data by exporting the current formula values and importing them into this new text field. Process change support: Once the historical data is safely mapped to the new text field, sales reps can freely update this new field on existing or new opportunities, while the original formula field can be removed or kept as a historical reference."
  },
  {
    "id": 141,
    "category": "Business Logic and Process Automation",
    "text": "DHR has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record. What solution should the app builder use to meet DHR's needs? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Multi-select Picklist"
      },
      {
        "letter": "B",
        "text": "Lookup Object"
      },
      {
        "letter": "C",
        "text": "Text Area (Long)"
      },
      {
        "letter": "D",
        "text": "Master-Detail Child Object"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "A Master-Detail relationship allows you to create Roll-Up Summary fields on the parent record. By using a Roll-Up Summary field configured with the MAX function, the system will automatically calculate and display the highest value among all related Offer__c records on the corresponding Property__c record."
  },
  {
    "id": 142,
    "category": "Business Logic and Process Automation",
    "text": "CK wants to know the total value of all won Opportunities for Accounts and display it on the record. What type of summary should the app builder use in the roll-up summary field? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Count"
      },
      {
        "letter": "B",
        "text": "Max"
      },
      {
        "letter": "C",
        "text": "Sum"
      },
      {
        "letter": "D",
        "text": "Min"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Sum: Totals the values in the field you select in the Field to Aggregate option. Only number, currency, and percent fields are available. Count: Totals the number of related records. Max: Displays the highest value of the field you select in the Field to Aggregate option for all directly related records. Only number, currency, percent, date, and date/time fields are available. Min: Displays the lowest value of the field you select in the Field to Aggregate option for all directly related records. Only number, currency, percent, date, and date/time fields are available."
  },
  {
    "id": 143,
    "category": "Business Logic and Process Automation",
    "text": "An app builder is tasked with adding key performance indicators to client pages. They want to see a summary of the number of open Opportunities and the number of won Opportunities for each Account. Where should the app builder go to build these new rollups? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Lightning App Builder"
      },
      {
        "letter": "B",
        "text": "Account Object"
      },
      {
        "letter": "C",
        "text": "Lightning Object Creator"
      },
      {
        "letter": "D",
        "text": "Opportunity Object"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "In Salesforce, roll-up summary fields calculate values (such as counts or sums) from related detail records on a master-detail relationship. Since Opportunities are the child (detail) records of an Account (master), the app builder must create these roll- up summary fields directly on the Account Object."
  },
  {
    "id": 144,
    "category": "Business Logic and Process Automation",
    "text": "An app builder has been asked to display an Overdue Date that is two months after a Task's Due Date. Which approach should the app builder take? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Use Process Builder and set Overdue Date equal to DueDate + ((365/12)* 2)."
      },
      {
        "letter": "B",
        "text": "Create a formula field using DueDate + 60."
      },
      {
        "letter": "C",
        "text": "Use Process Builder and set Overdue Date equal to DueDate+ 60."
      },
      {
        "letter": "D",
        "text": "Create a formula field using the ADDMONTHS() function."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_addmonths.htm &type=5"
  },
  {
    "id": 145,
    "category": "Business Logic and Process Automation",
    "text": "The Service Manager provided the app builder with color code requirements for case age on open cases. New cases populate a green circle; day-old cases populate a yellow circle; three-day-old cases populate a red circle How should an app builder implement this requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Formula Field"
      },
      {
        "letter": "B",
        "text": "Lightning Web Component"
      },
      {
        "letter": "C",
        "text": "Custom Button"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://www.marksgroup.net/blog/3-useful-case-management- formulas/"
  },
  {
    "id": 146,
    "category": "Business Logic and Process Automation",
    "text": "UC utilizes opportunities and a custom object called Detailed_Sales__c. The company would like to roll sales metrics up to an opportunity for only Detailed_Sales__c records that have their picklist status set to Active. What is the recommended method for the app builder to achieve this request? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create a master-detail relationship between the parent and child object with a roll- up summary field that filters on the status field."
      },
      {
        "letter": "B",
        "text": "Create a lookup relationship between the parent and child object with a roll-up summary field that filters on the status field."
      },
      {
        "letter": "C",
        "text": "Utilize the AppExchange to download a third-party application that can roll up the sales dollars with the appropriate filter."
      },
      {
        "letter": "D",
        "text": "Utilize Apex code to roll up the desired amounts."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relations hips.htm&type=5"
  },
  {
    "id": 147,
    "category": "Business Logic and Process Automation",
    "text": "UMS has a lookup relationship between a custom Galaxy__c object and a custom Star__c object. An app builder wants to create a roll-up summary field that counts the total number of Star__c records related to each Galaxy__c record. How would the current configuration impact the ability to achieve the desired result? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "The lookup relationship will need to be converted to a master-detail relationship before a roll-up summary field can be created."
      },
      {
        "letter": "B",
        "text": "The roll-up summary can be achieved by creating a formula field on the Galaxy__c object."
      },
      {
        "letter": "C",
        "text": "A roll-up summary field will need to be created on the Galaxy__c object with a field filter that selects all related Star__c records."
      },
      {
        "letter": "D",
        "text": "The roll-up summary can be achieved by creating a formula field on the Star__c object."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 148,
    "category": "Business Logic and Process Automation",
    "text": "UC has several new fields they've requested for the Opportunity Product object. What should an app builder be able to configure using a formula field? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "A Rich Text area field that uses HTML to bold certain characters."
      },
      {
        "letter": "B",
        "text": "A hyperlink to the parent Account of the parent Opportunity."
      },
      {
        "letter": "C",
        "text": "A mix of functions and concatenation of 10 Account fields and 10 Opportunity fields."
      },
      {
        "letter": "D",
        "text": "A combination of the Opportunity's Text and a Description fields."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "A cross-object formula field can only span one relationship level. A formula field on Opportunity Product can reference fields on its parent Opportunity (a combination of the Opportunity's Text and Description fields), but it cannot traverse a second level to reach the parent Account, and it cannot mix fields from both the Account and the Opportunity."
  },
  {
    "id": 149,
    "category": "Business Logic and Process Automation",
    "text": "UC tracks Account locations in Zip_Code__c, a custom text field with a validation rule to enforce proper formatting of the US ZIP+4 code for UC's orders. What formula should the app builder create on Order to display only the first five digits of Zip_Code__c from the parent Account? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "BEGINS(Account.Zip_Code__c, 5)"
      },
      {
        "letter": "B",
        "text": "TEXT(Account.Zip_Code__c, 5)"
      },
      {
        "letter": "C",
        "text": "LEFT(Account.Zip_Code__c, 5)"
      },
      {
        "letter": "D",
        "text": "LPAD(Account.Zip_Code__c, 5)"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_left.htm&type=5"
  },
  {
    "id": 150,
    "category": "Business Logic and Process Automation",
    "text": "CK wants to start tracking how many shoe subscriptions have been sold for each shoe catalog. A master-detail relationship exists between the Subscription__c and the Shoe__c objects. What type of field should an app builder create? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Roll-up summary field"
      },
      {
        "letter": "B",
        "text": "Lookup field"
      },
      {
        "letter": "C",
        "text": "Master-detail relationship field"
      },
      {
        "letter": "D",
        "text": "Number field"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 151,
    "category": "Business Logic and Process Automation",
    "text": "CK has 5 years of sales data and would like to track when customers made their first purchase. How should an app builder use a rollup summary to meet the requirements? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Create a new date field called First_Order_Date__c, then create a roll-up summary to update the field using Type MIN."
      },
      {
        "letter": "B",
        "text": "Create a new roll-up summary field called First_Order_Date__c, using Type MIN on the Opportunity Close Date with a filter where IsWon = TRUE."
      },
      {
        "letter": "C",
        "text": "Create a new roll-up summary field called First_Order_Date__c, using Type SUM on Opportunity Close Date."
      },
      {
        "letter": "D",
        "text": "Create a new date field called First_Order_Date__c, create a new Workflow to set the date, and roll up the value with a filter where IsWon = TRUE."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_defining_summary_fields.htm& type=5"
  },
  {
    "id": 152,
    "category": "Business Logic and Process Automation",
    "text": "NTO has created the custom objects Trail and Park in Salesforce to track parks and trails respectively. NTO wants to track the total number of trails a park has on the park record without writing any code. Which two actions should an app builder take to accomplish this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Use a formula field on the Park record to show the total number of trails."
      },
      {
        "letter": "B",
        "text": "Use a roll-up summary field on the Park record to show the total number of Trails."
      },
      {
        "letter": "C",
        "text": "Use a lookup relationship between the Park and Trail objects."
      },
      {
        "letter": "D",
        "text": "Use a master-detail relationship between the Park and Trail objects."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 153,
    "category": "Business Logic and Process Automation",
    "text": "An app builder wants to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which three field types can be used in roll-up summary fields to accomplish this? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Date"
      },
      {
        "letter": "B",
        "text": "Percent"
      },
      {
        "letter": "C",
        "text": "Time"
      },
      {
        "letter": "D",
        "text": "Checkbox"
      },
      {
        "letter": "E",
        "text": "Currency"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 154,
    "category": "Business Logic and Process Automation",
    "text": "Which two solutions prevent a formula field from being referenced by roll-up summary field? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "A cross-object field reference in the formula field"
      },
      {
        "letter": "B",
        "text": "The CASE() function in the formula field"
      },
      {
        "letter": "C",
        "text": "The NOW() function in the formula field"
      },
      {
        "letter": "D",
        "text": "Across object workflow updating a field referenced by the formula field"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/articleView?id=fields_about_roll_up_summary_fields.htm &type=5"
  },
  {
    "id": 155,
    "category": "Business Logic and Process Automation",
    "text": "CK received a new requirement to calculate summaries from child objects of a standard object. The team would prefer to solve this declaratively. What are two considerations an app builder should evaluate? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "An object can have up to two master-detail relationships."
      },
      {
        "letter": "B",
        "text": "An app builder is unable to change a lookup to a master-detail relationship."
      },
      {
        "letter": "C",
        "text": "A value is required in all records of the lookup field prior to converting to a master- detail relationship."
      },
      {
        "letter": "D",
        "text": "A trigger on save or update can kick off calculations."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type= 5"
  },
  {
    "id": 156,
    "category": "Business Logic and Process Automation",
    "text": "The app builder at AW Computing has been asked to track the number of times a case has been reopened. Which solution should the app builder utilize to help with this request?",
    "options": [
      {
        "letter": "A",
        "text": "Apex Trigger"
      },
      {
        "letter": "B",
        "text": "Scheduled Triggered flow"
      },
      {
        "letter": "C",
        "text": "Screen Flow"
      },
      {
        "letter": "D",
        "text": "Process Builder"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Scheduled trigger flow is not suitable for keeping count of how many times a case is reopened. A screen flow needs user interaction. The process builder allows for incrementing a value on a record to show the number of times it has been reopened, but the question doesn't mention such a value. An Apex trigger however is capable of incrementing a global value."
  },
  {
    "id": 157,
    "category": "Business Logic and Process Automation",
    "text": "UC utilizes two custom picklist fields called Sales_Organization__c and Pricing_Tier__c. What validation rule should an app builder use to ensure Pricing_Tier__c is required for customers with a Sales_Organization__c value of Canada?",
    "options": [
      {
        "letter": "A",
        "text": "OR(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)))"
      },
      {
        "letter": "B",
        "text": "IF(ISNULL(Sales_Organization__c='Canada', ISBLANK(TEXT(Pricing_Tier__c)), TRUE)"
      },
      {
        "letter": "C",
        "text": "AND(ISPICKVAL(Sales_Organization__c, 'Canada'), ISBLANK(TEXT(Pricing_Tier__c)))"
      },
      {
        "letter": "D",
        "text": "ISPICKVAL(Sales_Organization__c, 'Canada') && ISNULL(Pricing_Tier__c)"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Validation rules in Salesforce return TRUE when an error should be triggered. AND ensures both conditions are met: The Sales_Organization__c picklist is Canada (using ISPICKVAL). The Pricing_Tier__c field is left blank (using ISBLANK and TEXT since it is a picklist field). This forces the user to populate a pricing tier if they select Canada."
  },
  {
    "id": 158,
    "category": "Business Logic and Process Automation",
    "text": "UC asked the app builder to ensure that when an account type changes to 'Past- Customer' the contacts directly related to that account get an updated status of 'Re- Market'. What automation should the app builder use to accomplish this task?",
    "options": [
      {
        "letter": "A",
        "text": "Record-triggered flow"
      },
      {
        "letter": "B",
        "text": "Lightning component"
      },
      {
        "letter": "C",
        "text": "Screen flow"
      },
      {
        "letter": "D",
        "text": "Validation rule"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "A record-triggered flow is designed to monitor specific changes on a record (such as an Account Type changing to \"Past-Customer\") and can then automatically traverse the relationships to update related records (like updating the Contacts' status to \"Re-Market\") without requiring any code."
  },
  {
    "id": 159,
    "category": "Business Logic and Process Automation",
    "text": "UC manages leads in a Lead qualification queue where sales reps can accept ownership of the Lead. Campaign members are required to have a sales owner. What validation rule should an app builder configure?",
    "options": [
      {
        "letter": "A",
        "text": "AND(ISBLANK(Lead.Owner.Id))"
      },
      {
        "letter": "B",
        "text": "NOT(ISNEW() && ISBLANK(Lead.Owner:Queue.Id))"
      },
      {
        "letter": "C",
        "text": "AND(ISNEW(), ISBLANK(Lead.Owner:User.Id))"
      },
      {
        "letter": "D",
        "text": "NOT(ISBLANK(Lead.Owner:Queue.Id))"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Campaign member leads are required to have a sales owner (a user, not a queue). The rule checks newly created records with ISNEW() and uses ISBLANK(Lead.Owner:User.Id), which is true when the record is still owned by a queue rather than a user, so the validation fires when a new lead has no user owner."
  },
  {
    "id": 160,
    "category": "Business Logic and Process Automation",
    "text": "DR asks for some improvements in case management. They want to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met. Which solution should an app builder implement to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Create dependent picklist fields and set them as required."
      },
      {
        "letter": "B",
        "text": "Configure validation rules with help text."
      },
      {
        "letter": "C",
        "text": "Make the fields required on the page layout."
      },
      {
        "letter": "D",
        "text": "Use an approval process to check field criteria are met."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Validation rules can prevent a case from being saved when it doesn't meet the specified criteria, such as preventing the reversion to an earlier case status. Help text can guide users on the rules being enforced."
  },
  {
    "id": 161,
    "category": "Business Logic and Process Automation",
    "text": "The VP of sales at AW Computing would like a Roll-Up Summary field on the Account object to aggregate the number of opportunities related to an Account. The app builder is unable to implement this change. Why is the app builder unable to fulfill the request?",
    "options": [
      {
        "letter": "A",
        "text": "The default currency is not an active currency in the organization."
      },
      {
        "letter": "B",
        "text": "Currency fields are unable to be referenced in Roll-Up Summary fields."
      },
      {
        "letter": "C",
        "text": "The organization has Advanced Currency Management enabled."
      },
      {
        "letter": "D",
        "text": "Roll-Up Summary fields are unavailable on the Account object."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "If your org has advanced currency management enabled, currency roll-up summary fields are invalid if they're on accounts and summarizing opportunity values, or on opportunities and summarizing custom object values. https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 162,
    "category": "Business Logic and Process Automation",
    "text": "The CEO of CK needs a way for new vendors to accept terms on agreements for any new major retail store lease before the opportunity can be closed. Which feature should be used to handle this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Validation Rule"
      },
      {
        "letter": "B",
        "text": "Dynamic Action"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Email Alert"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Approval Process: This feature is designed to automate the way records are approved in Salesforce. It allows you to specify a sequence of steps required to approve a record, ensuring that necessary actions (like a vendor accepting terms) are completed and verified before a record is \"closed\" or moves to the next stage. It can effectively block an opportunity from being closed until the \"Accept Terms\" status is confirmed by an authorized party."
  },
  {
    "id": 163,
    "category": "Business Logic and Process Automation",
    "text": "The Sales Operations team at AW Computing deletes accounts for a variety of reasons. The sales ops director is worried that the Sales team may delete accounts that sales reps are actively selling into. How should the app builder keep accounts with open opportunities from being deleted? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Remove the delete button on the account layout."
      },
      {
        "letter": "B",
        "text": "Remove the Delete permission from the Sales Rep profile."
      },
      {
        "letter": "C",
        "text": "Create an Apex Trigger on the Account object."
      },
      {
        "letter": "D",
        "text": "Create a validation rule on the Account object."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Cant be A as it says delete from Sales rep profile when its the Sales Team deleting Cant be B as from the question it sounds like the need to delete is still needed Cant be D as VD rules only work on the SObject that they're defined on"
  },
  {
    "id": 164,
    "category": "Business Logic and Process Automation",
    "text": "UC uses a custom object called Projects. When managers assign projects they set a custom field on the Project record called Estimated Hours. Once set, users should be able to decrease but not increase the value. How can an app builder meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a formula default value for the custom field."
      },
      {
        "letter": "B",
        "text": "Create a formula field that uses the PREVGROUPVAL function."
      },
      {
        "letter": "C",
        "text": "Create a validation rule that uses the ISCHANGED function."
      },
      {
        "letter": "D",
        "text": "Create a validation rule that uses the PRIORVALUE function."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_priorvalue.htm& type=5"
  },
  {
    "id": 165,
    "category": "Business Logic and Process Automation",
    "text": "The Recruiting team at AW Computing captures the job acceptance and date of hire of a candidate on the Job Application custom object. Once the candidate accepts the recruiter's job offer, the date of hire should be entered and not be changed on subsequent record edits. Which validation formula should the app builder use?",
    "options": [
      {
        "letter": "A",
        "text": "NOT(ISBLANK(Job_Accepted__c)) && ISCHANGED(Hire_Date__c)"
      },
      {
        "letter": "B",
        "text": "ISBLANK(Job_Accepted__c) || NOT(ISCHANGED(Hire_Date__c))"
      },
      {
        "letter": "C",
        "text": "NOT(ISBLANK(Job_Accepted__c)) || ISCHANGED(Hire_Date__c)"
      },
      {
        "letter": "D",
        "text": "ISBLANK(Job_Accepted__c) && NOT(ISCHANGED(Hire_Date__c))"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "NOT(ISBLANK(Job_Accepted__c)): Ensures that the validation rule only triggers after the candidate has accepted the job offer. ISCHANGED(Hire_Date__c): Prevents edits to the date field once it has been populated, catching any changes made during subsequent edits."
  },
  {
    "id": 166,
    "category": "Business Logic and Process Automation",
    "text": "The Director of Marketing at NTO wants the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units. Which function should be used to return a date for calculating the difference?",
    "options": [
      {
        "letter": "A",
        "text": "DATETIMEVALUE()"
      },
      {
        "letter": "B",
        "text": "TODAY()"
      },
      {
        "letter": "C",
        "text": "DATEVALUE()"
      },
      {
        "letter": "D",
        "text": "NOW()"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_today.htm&type =5"
  },
  {
    "id": 167,
    "category": "Business Logic and Process Automation",
    "text": "A customer service representative at a call center wants to be able to collect information from customers using a series of question prompts. What should an app builder use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Path"
      },
      {
        "letter": "C",
        "text": "Workflow Rules"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "A screen flow is a flow type that requires user interaction as it includes screens, local actions, steps, choices, or dynamic choices. Your users can invoke a screen flow from many distribution methods, such as Lightning pages, Experience Builder pages, Lightning web components, Aura components, custom buttons, actions or links, and Flow Orchestration, just to name a few. You can use a screen flow to collect data or display data to users."
  },
  {
    "id": 168,
    "category": "Business Logic and Process Automation",
    "text": "CK captures all shipping information in a custom object called Shipments__c. CK's app builder is tasked with creating an approval process to ensure department members can approve all overnight shipments. Where should the app builder route the approval request?",
    "options": [
      {
        "letter": "A",
        "text": "Hierarchy field."
      },
      {
        "letter": "B",
        "text": "Role"
      },
      {
        "letter": "C",
        "text": "Public group"
      },
      {
        "letter": "D",
        "text": "Queue"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.approvals_step_approver.htm&type=5 Next"
  },
  {
    "id": 169,
    "category": "Business Logic and Process Automation",
    "text": "UC wants to ensure that they are accepting clean data from their users verifying that important fields are entered. What should an app builder recommend to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a validation to require a field for a specific record type."
      },
      {
        "letter": "B",
        "text": "Update the important fields to be required on the page layout."
      },
      {
        "letter": "C",
        "text": "Make a formula field to check the format of the important fields."
      },
      {
        "letter": "D",
        "text": "Create a workflow rule to check that the fields are formatted correctly."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Validation rules are the only native tool in Salesforce that enforces data entry formats across all data entry methods (such as the Data Loader or APIs, not just the user interface), ensuring the data meets specific standards before it is ever saved to the database."
  },
  {
    "id": 170,
    "category": "Business Logic and Process Automation",
    "text": "UC has 20 different workflows on the Opportunity object. To ensure that updates are processed properly for all field updates; UC has the \"Re-evaluate Workflow Rules After Field Change\" checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should an app builder review to address this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Time-dependent actions that are reevaluated after save"
      },
      {
        "letter": "B",
        "text": "Number of workflows per object limit"
      },
      {
        "letter": "C",
        "text": "Workflows that cause each other to fire recursively"
      },
      {
        "letter": "D",
        "text": "Cross-object workflows that are being re-triggered"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.workflow_field_update_consideration s.htm&type=5"
  },
  {
    "id": 171,
    "category": "Business Logic and Process Automation",
    "text": "CK works on an annual subscription model. When a sales rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of Salesforce but also needs to be notified about closed deals in order to initiate the contract process with the customer. Which automation solution would meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Approval Process"
      },
      {
        "letter": "B",
        "text": "Outbound Message"
      },
      {
        "letter": "C",
        "text": "Validation Rule"
      },
      {
        "letter": "D",
        "text": "Record-triggered flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.flow_considerations_trigger_record.h tm&type=5"
  },
  {
    "id": 172,
    "category": "Business Logic and Process Automation",
    "text": "CK keeps track of its shoe inventory in Salesforce. When an order's status is changed to Activated, the inventory for the ordered shoe is reduced. At that point, a SOAP web service on the CK website must be called so that the website is updated to display the correct inventory amount for the shoe. What should an app builder use to communicate to the CK web service when a shoe's inventory has changed?",
    "options": [
      {
        "letter": "A",
        "text": "After-Save Record-Triggered flow"
      },
      {
        "letter": "B",
        "text": "Before-Save Record-Triggered flow"
      },
      {
        "letter": "C",
        "text": "Process Builder"
      },
      {
        "letter": "D",
        "text": "Workflow rule"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=release- notes.rn_forcecom_flow_fbuilder_after-save_trigger.htm&release=226&type=5"
  },
  {
    "id": 173,
    "category": "Business Logic and Process Automation",
    "text": "When an opportunity has a closed date that is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process. How can an app builder ensure that these opportunities are submitted to the approval process?",
    "options": [
      {
        "letter": "A",
        "text": "Submit the record for approval from an automated process."
      },
      {
        "letter": "B",
        "text": "Give the manager the \"API Enabled\" permission to permit approval responses by email."
      },
      {
        "letter": "C",
        "text": "Use a validation rule and an email alert to the manager requesting approval."
      },
      {
        "letter": "D",
        "text": "Change the entry criteria on the approval process to criteria are met and lock the record on initial submission."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Automating the submission (e.g., using a Record-Triggered Flow or Process Builder) eliminates the human error of reps forgetting to start the approval. Whenever the Closed Date is pushed by more than 30 days, the automation will automatically trigger and move the record into the existing approval process."
  },
  {
    "id": 174,
    "category": "Business Logic and Process Automation",
    "text": "UC uses a custom picklist called Account_Region__c on the Account object. The vice president of sales has asked that the value of this field be visible on Opportunities. How should an app builder create this solution?",
    "options": [
      {
        "letter": "A",
        "text": "Cross-object formula field"
      },
      {
        "letter": "B",
        "text": "Field history tacking"
      },
      {
        "letter": "C",
        "text": "Field-level security"
      },
      {
        "letter": "D",
        "text": "Lookup field"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "A cross-object formula field references data from a parent object (Account) and displays it on a child object (Opportunity). By wrapping the custom picklist field in the TEXT() function (e.g., TEXT(Account.Account_Region__c)), the dynamic value will automatically appear on Opportunity records."
  },
  {
    "id": 175,
    "category": "Business Logic and Process Automation",
    "text": "NTO uses a custom object to track travel requests. Rangers want to have automatic posts on a record whenever a travel request has been approved. Which feature should be used to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Feed tracking"
      },
      {
        "letter": "B",
        "text": "Workflow rule"
      },
      {
        "letter": "C",
        "text": "Auto-response rule"
      },
      {
        "letter": "D",
        "text": "Feed quick action"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.collab_feed_tracking_overview.htm&t ype=5"
  },
  {
    "id": 176,
    "category": "Business Logic and Process Automation",
    "text": "CK has leads owned by users and queues. The sales manager wants the status to change to working when a user takes ownership. What does an app builder need to have in the criteria to ensure the process runs without error?",
    "options": [
      {
        "letter": "A",
        "text": "[Lead].Owner:Queue.OwnerId Is Null = True"
      },
      {
        "letter": "B",
        "text": "[Lead].Owner:User.Role Is Null = False"
      },
      {
        "letter": "C",
        "text": "NOT(ISBLANK([Lead].OwnerId))"
      },
      {
        "letter": "D",
        "text": "BEGINS([Lead].OwnerId, \"005\")"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "For all user IDs that start with 005, the BEGINS formula checks if the start of the userid of the owner on the lead record begins with 005."
  },
  {
    "id": 177,
    "category": "Business Logic and Process Automation",
    "text": "The convert button on Lead should be unavailable until the Lead Status picklist is set to Qualified. What should an app builder suggest to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Custom Button, validation rule, record types"
      },
      {
        "letter": "B",
        "text": "Process Builder field update, quick action, record type"
      },
      {
        "letter": "C",
        "text": "Page layouts, record types, Process Builder field update"
      },
      {
        "letter": "D",
        "text": "Picklist dependency, page layouts, record types"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "There will be a process invoked when status is set to qualified, which updates the record type field to the one associated with the page layout, including the button."
  },
  {
    "id": 178,
    "category": "Business Logic and Process Automation",
    "text": "Service Agents are required to confirm a user's identity before providing support information over the phone. What feature can an app builder use to help agents meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Case Validation Rules."
      },
      {
        "letter": "B",
        "text": "Add Path to the top of the Case layout."
      },
      {
        "letter": "C",
        "text": "Guided Action Flows on the record page."
      },
      {
        "letter": "D",
        "text": "Include Surveys as a Case related list."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "An App Builder can embed a Screen Flow as a guided action on a Lightning record page. This walks service agents through a step-by-step, mandatory process (such as asking identity-verifying security questions) right where they are working, ensuring the requirement is met before they can proceed."
  },
  {
    "id": 179,
    "category": "Business Logic and Process Automation",
    "text": "The DR service manager has asked for some improvements in case management to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met. What solution should an app builder implement to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Process Builder"
      },
      {
        "letter": "C",
        "text": "Validation Rule"
      },
      {
        "letter": "D",
        "text": "Activities Component"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_field_validation.htm&type= 5"
  },
  {
    "id": 180,
    "category": "Business Logic and Process Automation",
    "text": "UC has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should NOT change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
    "options": [
      {
        "letter": "A",
        "text": "Apex"
      },
      {
        "letter": "B",
        "text": "Roll-up summary field"
      },
      {
        "letter": "C",
        "text": "Workflow"
      },
      {
        "letter": "D",
        "text": "Formula field"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_wf.htm&type=5"
  },
  {
    "id": 181,
    "category": "Business Logic and Process Automation",
    "text": "Sales reps at UC create multiple quotes per opportunity. What automation tool should an app builder recommend to delete rejected quotes?",
    "options": [
      {
        "letter": "A",
        "text": "Approval process"
      },
      {
        "letter": "B",
        "text": "Validation rule"
      },
      {
        "letter": "C",
        "text": "Workflow rule"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_data_delete.htm& type=5"
  },
  {
    "id": 182,
    "category": "Business Logic and Process Automation",
    "text": "The marketing director is concerned that too many car parts were given away for free last year. What functionality should be used to ensure all free parts receive the marketing director's sign-off?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Chatter feed"
      },
      {
        "letter": "C",
        "text": "Workflow"
      },
      {
        "letter": "D",
        "text": "Approval process"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.what_are_approvals.htm&type=5"
  },
  {
    "id": 183,
    "category": "Business Logic and Process Automation",
    "text": "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than six characters. Another app builder creates a workflow rule with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco. What will happen the next time a sales rep saves an Account with the Billing City of San Francisco?",
    "options": [
      {
        "letter": "A",
        "text": "The record will not save and the validation rule's error message will be displayed."
      },
      {
        "letter": "B",
        "text": "The record will save but the Industry field will not change to Technology."
      },
      {
        "letter": "C",
        "text": "The record will save and the Industry field will change to Technology."
      },
      {
        "letter": "D",
        "text": "The record will not save and no error message will be displayed."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "In Salesforce's standard Order of Execution, workflow rule field updates execute after initial system and custom validations. Because \"Technology\" is only 10 characters and does not run afoul of the 6-character limit, the workflow update sails right through the rule checks without triggering validation blocks."
  },
  {
    "id": 184,
    "category": "Business Logic and Process Automation",
    "text": "Universal Containers has a custom picklist called Support Level on the Account object. They would like to show the real-time value of Support Level on all case records. How should an app builder implement this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a formula field on the Case object using the TEXT function."
      },
      {
        "letter": "B",
        "text": "Create a formula field on the Account object using the ISPICKVAL function."
      },
      {
        "letter": "C",
        "text": "Create a Process Builder and use a field update on the Case object."
      },
      {
        "letter": "D",
        "text": "Create a roll-up summary field using Support Level on the Account object."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_text.htm&type= 5"
  },
  {
    "id": 185,
    "category": "Business Logic and Process Automation",
    "text": "DreamHouse Realty wants a message to be seen in a Chatter group actively monitored by account managers every time a customer's home is published on the web. How should messages be posted for this group? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Write a Flow to have it modify a record owned by a group"
      },
      {
        "letter": "B",
        "text": "Write an Apex Trigger to have it modify a record owned by a group."
      },
      {
        "letter": "C",
        "text": "Configure a Workflow Rule with a field update to post to Chatter."
      },
      {
        "letter": "D",
        "text": "Create a Process Builder with an Immediate action of post to Chatter."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Why it fits: Process Builder features an out-of-the-box \"Post to Chatter\" immediate action, making it the most declarative and efficient tool to automate messages directly to specific groups. Why others are incorrect: Workflow rules cannot post to Chatter. Flow and Apex would work, but modifying a record is not the intent; directly posting to the feed is."
  },
  {
    "id": 186,
    "category": "Business Logic and Process Automation",
    "text": "When a sales rep submits an account for approval, UC wants the user to answer additional questions via a pop-up window to populate additional record fields. What should an app builder use to achieve the desired result?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder and Flow"
      },
      {
        "letter": "B",
        "text": "Lightning component and Process Builder"
      },
      {
        "letter": "C",
        "text": "Custom button and Flow"
      },
      {
        "letter": "D",
        "text": "Custom picklist field and Process Builder"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://trailhead.salesforce.com/content/learn/projects/flow_calculate/flow_calcul ate_implement"
  },
  {
    "id": 187,
    "category": "Business Logic and Process Automation",
    "text": "DreamHouse Realty wants to make sure an Opportunity has a field Expected_Close_Date__c populated before it is allowed to enter the qualified stage. How should an app builder solve this request?",
    "options": [
      {
        "letter": "A",
        "text": "Page Layout"
      },
      {
        "letter": "B",
        "text": "Activity History"
      },
      {
        "letter": "C",
        "text": "Record Type"
      },
      {
        "letter": "D",
        "text": "Validation Rule"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_field_validation.htm&type= 5"
  },
  {
    "id": 188,
    "category": "Business Logic and Process Automation",
    "text": "UC needs the 18-digit record ID from Opportunity records when exporting data to Excel in order to ensure each record is treated uniquely. What formula should an app builder use to create this new field?",
    "options": [
      {
        "letter": "A",
        "text": "TEXT(Id"
      },
      {
        "letter": "B",
        "text": "ISNUMBER(Id)"
      },
      {
        "letter": "C",
        "text": "CASESAFEID(Id)"
      },
      {
        "letter": "D",
        "text": "VALUE(Id)"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_casesafeid.htm &type=5"
  },
  {
    "id": 189,
    "category": "Business Logic and Process Automation",
    "text": "Nickname__c is a custom text field on a contact record that is utilized to override the contact name appearing on an email template. This field is not required and is not always filled in. What formula should an app builder use to select the contact's preferred name for email communications?",
    "options": [
      {
        "letter": "A",
        "text": "IF(NOT(ISBLANK(Nickname__c)),Nickname__c,FirstName)"
      },
      {
        "letter": "B",
        "text": "IF(NOT(BLANKVALUE(Nickname__c)),Nickname__c, FirstName)"
      },
      {
        "letter": "C",
        "text": "IF(ISNULL(Nickname__c),Nickname__c,FirstName)"
      },
      {
        "letter": "D",
        "text": "IF(TEXT(Nickname__c),Nickname__c,FirstName)"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "ISBLANK / NOT: The ISBLANK function specifically checks if a text field is empty, while NOT reverses that logic. This effectively checks if the Nickname__c field actually contains a value. Selection Logic: The formula states: IF Nickname__c is not blank, output Nickname__c. If it IS blank, fall back to FirstName."
  },
  {
    "id": 190,
    "category": "Business Logic and Process Automation",
    "text": "CK wants to make sure that users without the Marketing role are unable to update the Contact Retail_Opt_In__c picklist field to Yes. What validation rule would an app builder use to prevent other users from making this update?",
    "options": [
      {
        "letter": "A",
        "text": "AND($UserRole.Name = 'Marketing', Retail_Opt_In__c=\"Yes\")"
      },
      {
        "letter": "B",
        "text": "AND($UserRole.Name != 'Marketing', ISCHANGED(Retail_Opt_In__c), ISPICKVAL(Retail_Opt_In__c, \"Yes\")"
      },
      {
        "letter": "C",
        "text": "AND($UserRole.Name != 'Marketing', Retail_Opt_In__c=\"Yes\")"
      },
      {
        "letter": "D",
        "text": "AND($UserRole.Name = 'Marketing', ISPICKVAL(Retail_Opt_In__c, \"Yes\")"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "$UserRole.Name != 'Marketing': Ensures the rule triggers for any user who is not in the Marketing role. ISCHANGED(Retail_Opt_In__c): Prevents the rule from blocking other unrelated edits on the Contact record; it ensures the validation only fires when this specific field is modified. ISPICKVAL(Retail_Opt_In__c, \"Yes\"): Specifies that the update is blocked specifically when someone tries to change the value to \"Yes\"."
  },
  {
    "id": 191,
    "category": "Business Logic and Process Automation",
    "text": "UMS wants to see the Type__c field from the parent object Galaxy__c listed on the child record Star__c. Unfortunately, the app builder is receiving an error stating \"Picklist values are only supported in certain functions\". What formula should an app builder use to achieve the desired result? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "VALUE(Galaxy__r.Type__c)"
      },
      {
        "letter": "B",
        "text": "TEXT(Galaxy__r.Type__c)"
      },
      {
        "letter": "C",
        "text": "ISPICKVAL(Galaxy__r.Type__c)"
      },
      {
        "letter": "D",
        "text": "FIND(Galaxy__r.Type__c)"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_text.htm&type= 5"
  },
  {
    "id": 192,
    "category": "Business Logic and Process Automation",
    "text": "When a deal is closed-won, it has to be approved by the owner's manager prior to being added to the leaderboard for a quarterly sales competition. An opportunity is won on the last day of the quarter and the manager is on vacation. What is recommended to ensure all of the appropriate deals are reviewed and the leaderboard is up to date?",
    "options": [
      {
        "letter": "A",
        "text": "Have the manager log on and reassign the approval request."
      },
      {
        "letter": "B",
        "text": "Use Process Builder to assign a delegated approver."
      },
      {
        "letter": "C",
        "text": "Set up a delegated approver for the manager."
      },
      {
        "letter": "D",
        "text": "Forward the approval request to the manager's assistant."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.cpq_aa_delegate_approvers_task.ht m&type=5"
  },
  {
    "id": 193,
    "category": "Business Logic and Process Automation",
    "text": "UC asked the app builder to ensure when an account type changes to 'Past-Customer' the contacts directly related to that account get an updated status of 'Re-Market'. What automation should the app builder use to accomplish this task?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow rule"
      },
      {
        "letter": "B",
        "text": "Lightning component"
      },
      {
        "letter": "C",
        "text": "Process Builder"
      },
      {
        "letter": "D",
        "text": "Screen flow"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_overview.htm&type=5"
  },
  {
    "id": 194,
    "category": "Business Logic and Process Automation",
    "text": "DreamHouse Realty (DR) employees started using company-owned airplanes for work travel after Ursa Major Solar was acquired. DR executives want to automate the submission of travel request forms to enforce the internal policy. How should an app builder automate travel requests based on these criteria?",
    "options": [
      {
        "letter": "A",
        "text": "Approval process"
      },
      {
        "letter": "B",
        "text": "Process Builder"
      },
      {
        "letter": "C",
        "text": "Apex"
      },
      {
        "letter": "D",
        "text": "Workflow rule"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Automating the submission of travel request forms to enforce an internal policy is a classic use case for an approval process: it routes each travel request to the right approvers based on criteria and tracks the approval history. Process Builder, workflow rules, and Apex do not provide a submission/approval workflow out of the box."
  },
  {
    "id": 195,
    "category": "Business Logic and Process Automation",
    "text": "CK wants to display the number of Opportunity records associated with each Account. What solution should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Roll-up summary field"
      },
      {
        "letter": "B",
        "text": "AppExchange offering"
      },
      {
        "letter": "C",
        "text": "Lookup field"
      },
      {
        "letter": "D",
        "text": "Process builder"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.ht m&type=5"
  },
  {
    "id": 196,
    "category": "Business Logic and Process Automation",
    "text": "UMS's service department gets requests for several types of services, such as installation, repair, and maintenance. Service managers need to be able to tell when maintenance was last done on an asset to help determine if they are meeting contract agreements, but the last maintenance date can be difficult to determine when there are many work orders related to the asset. They think it would be helpful to have a field auto-populated on the Asset record when a maintenance work order gets closed. What tool should an app builder recommend to help meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Roll-up Summary"
      },
      {
        "letter": "B",
        "text": "Apex Trigger"
      },
      {
        "letter": "C",
        "text": "Flow"
      },
      {
        "letter": "D",
        "text": "Visualforce"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5"
  },
  {
    "id": 197,
    "category": "Business Logic and Process Automation",
    "text": "DreamHouse Realty wants to track how many lifts are being installed into customer garages. The To_Be_Installed__c checkbox field on the Lift__c object should be checked and an external system should be notified via an outbound message the next day when a lift is sold. What automation tool should be used to complete this task?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Validation Rule"
      },
      {
        "letter": "C",
        "text": "Approval process"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5"
  },
  {
    "id": 198,
    "category": "Business Logic and Process Automation",
    "text": "DreamHouse Realty (DR) has a policy that requires the phone number on Contact to be deleted when the DoNotCall checkbox is checked. What automation tool should the app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Quick action"
      },
      {
        "letter": "B",
        "text": "Validation rule"
      },
      {
        "letter": "C",
        "text": "Approval process"
      },
      {
        "letter": "D",
        "text": "Workflow rule"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_wf.htm&type=5"
  },
  {
    "id": 199,
    "category": "Business Logic and Process Automation",
    "text": "CK is finding sales people are inconsistent in data entry when deals are won. CK requires that custom shoes are shipped within 2 weeks after the close date. A custom field called Scheduled_Ship_Date__c on the Opportunity records the ship date. How should the app builder ensure this field is properly filled out before setting the Opportunity to closed won?",
    "options": [
      {
        "letter": "A",
        "text": "OR(ISPICKVAL(StageName =\"Closed Won\")&& (Scheduled_Ship_Date__c - CloseDate)> 14, ISBLANK(Scheduled_Ship_Date__c))"
      },
      {
        "letter": "B",
        "text": "OR(ISPICKVAL(StageName,\"Closed Won\")&& (Scheduled_Ship_Date__c - CloseDate)> 14, ISBLANK(Scheduled_Ship_Date__c))"
      },
      {
        "letter": "C",
        "text": "ISPICKVAL(StageName,\"Closed Won\")&& (Scheduled_Ship_Date__c - CloseDate)> 14"
      },
      {
        "letter": "D",
        "text": "ISPICKVAL(StageName =\"Closed Won\")&& (CloseDate - Scheduled_Ship_Date__c - CloseDate)> 14"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Validation rules in Salesforce execute when a record is saved, and a rule triggers an error when the formula evaluates to TRUE. Option B uses the OR function to catch when the stage is changed to Closed Won but data is missing or out of bounds. Here is exactly why Option B works: ISBLANK(Scheduled_Ship_Date__c): Returns true if the rep leaves the ship date empty.(Scheduled_Ship_Date__c - CloseDate) > 14: Returns true if the ship date is more than two weeks after the close date. ISPICKVAL(StageName,\"Closed Won\"): Identifies when the deal is marked as won."
  },
  {
    "id": 200,
    "category": "Business Logic and Process Automation",
    "text": "An app builder notices several Accounts converted from Leads are missing information they expected to be caught via Account validation rules. What could be the source of this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Lead validation rules fail to validate on records when they are being converted."
      },
      {
        "letter": "B",
        "text": "The lead settings are allowing users to intentionally bypass validation rules."
      },
      {
        "letter": "C",
        "text": "Account validation rules fail to validate on records converted from a lead."
      },
      {
        "letter": "D",
        "text": "The lead settings are unchecked to require validation for converted leads."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sfdo.EDA_Configure_Leads_Settings.ht m&type=5"
  },
  {
    "id": 201,
    "category": "Business Logic and Process Automation",
    "text": "A CK employee submitted an opportunity for approval by their manager. What would happen if the employee attempts to edit the description field after submission?",
    "options": [
      {
        "letter": "A",
        "text": "User will be able to edit the name, but unable to edit the description."
      },
      {
        "letter": "B",
        "text": "User will be presented with a 'Record Lock' notification."
      },
      {
        "letter": "C",
        "text": "User will be able to edit the description field only."
      },
      {
        "letter": "D",
        "text": "User will see the record is now owned by their manager."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.approvals_create_recordeditability.ht m&type=5"
  },
  {
    "id": 202,
    "category": "Business Logic and Process Automation",
    "text": "CK's management team frequently travels and wants to approve requests from their team on the go via Chatter. Where would an app builder enable this ability?",
    "options": [
      {
        "letter": "A",
        "text": "Object Settings"
      },
      {
        "letter": "B",
        "text": "Approval Process Settings"
      },
      {
        "letter": "C",
        "text": "Chatter Feed Tracking"
      },
      {
        "letter": "D",
        "text": "Chatter Settings"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=approvals_for_chatter_enabling.htm&type =0"
  },
  {
    "id": 203,
    "category": "Business Logic and Process Automation",
    "text": "An app builder wants to update a field on the parent record when a child record connected via lookup is deleted. What automation should the app builder use?",
    "options": [
      {
        "letter": "A",
        "text": "Validation Rule"
      },
      {
        "letter": "B",
        "text": "Screen flow"
      },
      {
        "letter": "C",
        "text": "Record-triggered flow"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://admin.salesforce.com/blog/2023/what-is-a-record-triggered-flow"
  },
  {
    "id": 204,
    "category": "Business Logic and Process Automation",
    "text": "The CFO of CK needs to sign off on any major shoe retail deal that has a discount of more than 30% before the deal can be closed. What feature would be used to handle this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Email Alert"
      },
      {
        "letter": "B",
        "text": "Approval Process"
      },
      {
        "letter": "C",
        "text": "Field Update"
      },
      {
        "letter": "D",
        "text": "Workflow Rule"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.what_are_approvals.htm&type=5"
  },
  {
    "id": 205,
    "category": "Business Logic and Process Automation",
    "text": "The finance manager at UC wants to receive a new business notification email each time a new client is won. The sales manager wants to receive a task letting them know to onboard the new client unless it is a top-tier client. Which automation tool should an app builder use to best address all these requests?",
    "options": [
      {
        "letter": "A",
        "text": "Ape"
      },
      {
        "letter": "B",
        "text": "Screen flow"
      },
      {
        "letter": "C",
        "text": "Record-triggered flow"
      },
      {
        "letter": "D",
        "text": "Approval process"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5"
  },
  {
    "id": 206,
    "category": "Business Logic and Process Automation",
    "text": "UC uses a custom picklist field Account_Region__c on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account. How should an app builder meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c)."
      },
      {
        "letter": "B",
        "text": "Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c)"
      },
      {
        "letter": "C",
        "text": "Create a text field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed."
      },
      {
        "letter": "D",
        "text": "Create a picklist field called 'Account Region' on Contact object > Create a workfiow rule to update this picklist field if the Account Region field on the Account is changed."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_formulas.htm&type=5 https://help.salesforce.com/s/articleView?id=sf.tips_for_using_text_formula_fields.ht m&type=5"
  },
  {
    "id": 207,
    "category": "Business Logic and Process Automation",
    "text": "An app builder needs to create new automation on an object. What best practice should the app builder follow when building out automation?",
    "options": [
      {
        "letter": "A",
        "text": "One Workflow rule per object"
      },
      {
        "letter": "B",
        "text": "One Flow per object."
      },
      {
        "letter": "C",
        "text": "One invocable process per object."
      },
      {
        "letter": "D",
        "text": "One record change process per object."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.process_considerations_design_bestpr actices.htm&type=5"
  },
  {
    "id": 208,
    "category": "Business Logic and Process Automation",
    "text": "CK built a process that is supposed to update record ownership based on several different criteria. Some users report that they are not getting the expected level of access to accounts and contacts. Which two considerations should an app builder be aware of that could be causing the issue? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Processes that update record owners do not transfer child records."
      },
      {
        "letter": "B",
        "text": "Processes use the first value if the Owner field is updated multiple times."
      },
      {
        "letter": "C",
        "text": "Processes will fail on records owned by inactive users."
      },
      {
        "letter": "D",
        "text": "Processes will only run if the most current version is active."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "Processes that update record owners do not transfer child records: When a process updates an Account or Contact owner, it only changes ownership of the parent record. Related child records (like a child contact or an opportunity) do not automatically transfer with it. This leaves them with the old owner, denying the new parent owner the expected level of access. Processes will fail on records owned by inactive users: If an Account or Contact is assigned to an inactive user and the process attempts to re- evaluate and update that record, the transaction will fail. This often blocks ownership updates entirely."
  },
  {
    "id": 209,
    "category": "Business Logic and Process Automation",
    "text": "The Director of Customer Service wants to receive a notification when a case stays in the new status for more than four business hours. Which two automation processes should be used to accomplish this? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Validation Rule"
      },
      {
        "letter": "B",
        "text": "Scheduled Apex"
      },
      {
        "letter": "C",
        "text": "Flow Builder"
      },
      {
        "letter": "D",
        "text": "Escalation rules"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "Flow Builder: This robust automation tool can use scheduled paths to wait for a specified time (e.g., 4 business hours) after a case is created and then automatically send an email notification to the Director if the criteria are still met. Escalation rules: This standard case automation feature natively tracks business hours and can automatically trigger email alerts if a case remains in a specific status (like \"New\") past a set time."
  },
  {
    "id": 210,
    "category": "Business Logic and Process Automation",
    "text": "Which two features can be used to allow users to access Flows? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Quick Action"
      },
      {
        "letter": "B",
        "text": "Flow Launcher"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Invoked by a Process"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "Users can access and run flows through a Quick Action (a flow-triggered quick action added to page layouts or buttons) and the Flow Launcher Lightning component, which lets users launch flows from Lightning pages. 'Invoked by a Process' is an automated trigger, not a mechanism for users to access flows."
  },
  {
    "id": 211,
    "category": "Business Logic and Process Automation",
    "text": "Sales reps at CK forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit opportunities into the Secure Commitment Stage to eliminate manual submission. Which two features could meet the business requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Custom object"
      },
      {
        "letter": "B",
        "text": "Approval Process"
      },
      {
        "letter": "C",
        "text": "Apex"
      },
      {
        "letter": "D",
        "text": "Custom button and Flow"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "Standard point-and-click automation cannot submit a record for approval by itself, so automatically moving opportunities into the approval stage requires either Apex code (a trigger that submits the record for approval) or a custom button that launches a flow which submits the record. The approval process itself defines the approval steps, but reps still have to submit records unless one of these approaches is used."
  },
  {
    "id": 212,
    "category": "Business Logic and Process Automation",
    "text": "Sales Managers want to be automatically notified any time there is a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity. Which two configurations should an app builder recommend? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create an Opportunity outbound message"
      },
      {
        "letter": "B",
        "text": "Use Process Builder on Opportunities and a Chatter post action."
      },
      {
        "letter": "C",
        "text": "Activate Historical Trending for Opportunities"
      },
      {
        "letter": "D",
        "text": "Enable Feed Tracking on Opportunities."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.collab_feed_tracking_overview.htm&t ype=5"
  },
  {
    "id": 213,
    "category": "Business Logic and Process Automation",
    "text": "An app builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an opportunity is won. What are two ways to satisfy this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Use an outbound message."
      },
      {
        "letter": "B",
        "text": "Use a Validation Rule and Apex code."
      },
      {
        "letter": "C",
        "text": "Use a record-triggered flow and an outbound message."
      },
      {
        "letter": "D",
        "text": "Use a Screen Flow with an outbound message."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "A and C are correct because Outbound Messaging is a standard Salesforce feature designed specifically to send information to an external web service when a record is created or updated. While older exam versions focused on Workflow Rules, modern Salesforce best practices\u2014and current exam questions\u2014include Record- Triggered Flows as a primary way to launch these outbound messages."
  },
  {
    "id": 214,
    "category": "Business Logic and Process Automation",
    "text": "Which three Salesforce functionalities are ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Decimal places and character limits"
      },
      {
        "letter": "B",
        "text": "Field-level security"
      },
      {
        "letter": "C",
        "text": "Multiple currencies"
      },
      {
        "letter": "D",
        "text": "Record type picklist value assignments"
      },
      {
        "letter": "E",
        "text": "Validation Rules"
      }
    ],
    "answer": [
      "B",
      "C",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.workflow_field_update_consideration s.htm&type=5"
  },
  {
    "id": 215,
    "category": "Business Logic and Process Automation",
    "text": "At UC, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority case should be flagged green. Which two formulas will accomplish this requirement? Choose 2 answers.",
    "options": [
      {
        "letter": "A",
        "text": "IMAGE(CASE(Priority, \"Low\", \"/img/samples/flag_green.gif\", \"Medium\", \"/img/samples/flag_yellow.gif\", \"High\", \"/img/samples/flag_red.gif\", \"/s.gif\"), \"Priority Flag\")"
      },
      {
        "letter": "B",
        "text": "CASE(Priority, \"Low\", \"/img/samples/flag_green.gif\", \"Medium\", \"/img/samples/flag_yellow.gif\", \"High\", \"/img/samples/flag_red.gif\", \"/s.gif\")"
      },
      {
        "letter": "C",
        "text": "IMAGE(IF(ISPICKVAL(Priority, \"Low\"), \"/img/samples/flag_green.gif\", IF(ISPICKVAL(Priority, \"Medium\"), \"/img/samples/flag_yellow.gif\", IF(ISPICKVAL(Priority, \"High\"), \"/img/samples/flag_red.gif\", \"/s.gif\"))), \"Priority Flag\")"
      },
      {
        "letter": "D",
        "text": "IF(ISPICKVAL(Priority, \"Low\"), \"/img/samples/flag_green.gif\", IF(ISPICKVAL(Priority, \"Medium\"), \"/img/samples/flag_yellow.gif\", IF(ISPICKVAL(Priority, \"High\"), \"/img/samples/flag_red.gif\", \"/s.gif\")))"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_functions_image.htm&type= 5"
  },
  {
    "id": 216,
    "category": "Business Logic and Process Automation",
    "text": "The CFO wants to make sure that a deal with more than a 40% discount gets approved by the VP of Finance before a quote is sent to the customer. In which two ways can this be accomplished? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create a new process with a submit for approval action to automatically submit deals for approval."
      },
      {
        "letter": "B",
        "text": "Launch a flow that uses a submit for approval action to submit deals for approval."
      },
      {
        "letter": "C",
        "text": "Launch a new approval process that has automatic submission enabled as an initial submission action."
      },
      {
        "letter": "D",
        "text": "Create a new approval process that has automatic submission enabled in the entry criteria."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_actions_approval. htm&type=5"
  },
  {
    "id": 217,
    "category": "Business Logic and Process Automation",
    "text": "At CK when an opportunity close date is delayed by more than 60 days, the manager and the VP of sales want to review the change. Which two solutions will meet the requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create a flow that submits the record for an approval process"
      },
      {
        "letter": "B",
        "text": "Build a validation rule that does NOT allow a user to save the opportunity record."
      },
      {
        "letter": "C",
        "text": "Build an approval process that requires unanimous approval from the manager and VP of Sales."
      },
      {
        "letter": "D",
        "text": "Create a workflow rule that checks for close date less than 60 days and add an email alert."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=000392569&type=1 https://help.salesforce.com/s/articleView?id=sf.approvals_step_approver.htm&type=5"
  },
  {
    "id": 218,
    "category": "Business Logic and Process Automation",
    "text": "UC wants to automatically assign a specific permission set to new users. Which two actions can be completed to meet the requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create a Flow on the User object to assign a permission set"
      },
      {
        "letter": "B",
        "text": "Create a workflow rule on the User object to assign a permission set."
      },
      {
        "letter": "C",
        "text": "Create an Approval process on the User object to assign a permission set."
      },
      {
        "letter": "D",
        "text": "Create a Process on the User object to launch a flow."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "Option A (Correct): Salesforce Flow Builder is the modern, recommended way to handle this. A Record-Triggered Flow can fire when a new User record is created and immediately create the necessary Permission Set Assignment record. Option D (Correct): While Process Builder is being retired, it is still a valid answer for many certification questions. A Process can detect a new user and launch an Autolaunched Flow to handle the record creation. Option B (Incorrect): Standard Workflow Rules are limited to four actions: field updates, email alerts, outbound messages, and task creation. They cannot create records in other objects like Permission Set Assignments. Option C (Incorrect): Approval Processes are designed for record locking and sequential human sign-offs, not for background record-creation tasks based on a new user's arrival."
  },
  {
    "id": 219,
    "category": "Business Logic and Process Automation",
    "text": "The VP of Sales wants a Chatter post to the All Sales private group when an Opportunity goes to the closed won stage. What two tools should the app builder use to automate this process? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Workflow"
      },
      {
        "letter": "B",
        "text": "Process Builder"
      },
      {
        "letter": "C",
        "text": "Big Deal Alert"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "Flow: https://help.salesforce.com/articleView?id=flow.htm&type=5 Process Builder: https://help.salesforce.com/articleView?id=process_overview.htm&type=5"
  },
  {
    "id": 220,
    "category": "Business Logic and Process Automation",
    "text": "UC requires a custom field on the Case object to be automatically updated every time there is an Owner change on the Case. Which two features can be used for this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Schema Builder"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Workflow"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customize_wf.htm&type=5"
  },
  {
    "id": 221,
    "category": "Business Logic and Process Automation",
    "text": "CK wants to summarize the number of open Cases related to an Account, as well as the number of closed Cases to indicate whether customer support utilization is high, medium, or low. Two number fields have been created: NUM_Open_Cases__c and NUM_Closed_Cases__c. Which two automation solutions would meet these business requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Workflow"
      },
      {
        "letter": "C",
        "text": "Apex"
      },
      {
        "letter": "D",
        "text": "AppExchange"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "Roll-up summary fields only work on master-detail relationships. To keep open and closed Case counts on an Account across the standard lookup relationship, use an Apex trigger (increment/decrement the number fields) or an AppExchange roll- up tool such as Rollup Helper or DLRS. Process Builder and workflow rules cannot create roll-up summaries on lookup relationships."
  },
  {
    "id": 222,
    "category": "Business Logic and Process Automation",
    "text": "CK wants to set up a new opportunity approval process and execute various action items based on the initial submission. Which three action types should an app builder use in the approval process? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Invocable Process Builder"
      },
      {
        "letter": "B",
        "text": "Email Alert"
      },
      {
        "letter": "C",
        "text": "Task"
      },
      {
        "letter": "D",
        "text": "Outbound Message"
      },
      {
        "letter": "E",
        "text": "Invocable Flow"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.approvals_automated_actions.htm&t ype=5"
  },
  {
    "id": 223,
    "category": "Business Logic and Process Automation",
    "text": "An app builder wants to use Process Builder to automate some of the work being done by the sales team. What are three capabilities of Process Builder that can improve productivity? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Send an outbound message."
      },
      {
        "letter": "B",
        "text": "Send an email alert."
      },
      {
        "letter": "C",
        "text": "Create a child record."
      },
      {
        "letter": "D",
        "text": "Update a related record."
      },
      {
        "letter": "E",
        "text": "Delete a related record."
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "Send an email alert: Process Builder can trigger standard email alerts to notify users or customers. Create a child record: Unlike Workflow Rules, Process Builder allows for the creation of new records, such as creating a child contact from an account. Update a related record: Process Builder has the capability to update fields on any related record, not just the one that triggered the process."
  },
  {
    "id": 224,
    "category": "Business Logic and Process Automation",
    "text": "Sales reps at CK forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit Opportunities that go into the Secure Commitment Stage to eliminate manual submission. Which three features would meet the business requirements? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Apex"
      },
      {
        "letter": "B",
        "text": "Flow"
      },
      {
        "letter": "C",
        "text": "Workflow"
      },
      {
        "letter": "D",
        "text": "Chatter action"
      },
      {
        "letter": "E",
        "text": "Process Builder"
      }
    ],
    "answer": [
      "A",
      "B",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_action_submit.htm&type=5 https://help.salesforce.com/s/articleView?id=000392569&type=1"
  },
  {
    "id": 225,
    "category": "Business Logic and Process Automation",
    "text": "UC uses Contracts for agreements with customers. A sales manager is required to provide approval for contracts and director approval for any contract over $10,000. Which two options should an app builder use to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create an approval process on the Contract object and set the field for 'Next Automated Approver Determined By' as 'Manager'."
      },
      {
        "letter": "B",
        "text": "Create an approval process on the Contract object with one step for each sales manager that sets the approver as the director."
      },
      {
        "letter": "C",
        "text": "Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed."
      },
      {
        "letter": "D",
        "text": "Create an approval process on the Contract object with criteria set on a second approval step set as 'Amount__c > 10,000' and set the approver as director."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.what_are_approvals.htm&type=5"
  },
  {
    "id": 226,
    "category": "Business Logic and Process Automation",
    "text": "UC is expecting impacts to operations due to increased demand. The executive team will be reaching out to current customers and wants to see the number of open cases for the account and parent account. Which two tools could an app builder combine to display the number of open cases on the account page? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Approval Process"
      },
      {
        "letter": "C",
        "text": "Flow"
      },
      {
        "letter": "D",
        "text": "Workflow"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.process_overview.htm&type=5 https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5"
  },
  {
    "id": 227,
    "category": "Business Logic and Process Automation",
    "text": "UC's app builder has been tasked with replacing workflow rules and Apex triggers with Process Builders where possible. What are two important considerations an app builder should know before the project is started? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Avoid generating infinite loops."
      },
      {
        "letter": "B",
        "text": "Combine actions when possible."
      },
      {
        "letter": "C",
        "text": "Create a process for each workflow rule."
      },
      {
        "letter": "D",
        "text": "Apex has a different SOQL query limit than Flow."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/articleView?id=sf.process_considerations_design_bestpr actices.htm&type=5"
  },
  {
    "id": 228,
    "category": "Business Logic and Process Automation",
    "text": "Service Agents are required to confirm a user's identity before providing support information over the phone. Which feature can an app builder use to help agents meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Guided Action Flows on the record page"
      },
      {
        "letter": "B",
        "text": "Add Path to the top of the Case layout"
      },
      {
        "letter": "C",
        "text": "Include Surveys as a Case related list"
      },
      {
        "letter": "D",
        "text": "Case Validation Rules"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Guided Action Flows (Screen Flows embedded in Lightning record pages) can walk agents through required steps \u2014 such as verifying identity \u2014 before proceeding. Why A (Guided Action Flows) is correct:Exact Extract:\"Use Guided Action Flows in Lightning App Builder to help agents complete processes in a step-by-step format directly on a record page.\" \u2014 Salesforce Help | Guided Action FlowsThe app builder can embed a Screen Flow that prompts the agent to verify identity (e.g., asking security questions), then allows access or marks verification complete. Why A (Guided Action Flows) is correct:Exact Extract:\"Use Guided Action Flows in Lightning App Builder to help agents complete processes in a step-by-step format directly on a record page.\" \u2014 Salesforce Help | Guided Action FlowsThe app builder can embed a Screen Flow that prompts the agent to verify identity (e.g., asking security questions), then allows access or marks verification complete. Why not B:Path helps users track record stages, not enforce procedural steps. Why not C:Surveys are used for feedback collection after cases, not real-time identity verification. Why not D:Validation Rules enforce data quality on record save, not process guidance. References: Salesforce Help | Guided Action Flows Salesforce Platform App Builder Exam Guide | Business Logic and Process Automation"
  },
  {
    "id": 229,
    "category": "Business Logic and Process Automation",
    "text": "Sales reps at Universal Containers create multiple quotes per opportunity. Which automation tool should an app builder recommend to delete rejected quotes?",
    "options": [
      {
        "letter": "A",
        "text": "Validation rule"
      },
      {
        "letter": "B",
        "text": "Einstein Next Best Action"
      },
      {
        "letter": "C",
        "text": "Approval process"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "The goal is to automatically delete rejected quotes, which requires an automation tool capable of performing record deletion actions. Only Flow can perform this function declaratively. Why D (Flow) is correct:Exact Extract:\"Use Flow Builder to automate complex business processes by collecting data and performing actions such as creating, updating, or deleting records.\" \u2014 Salesforce Help | Flow Builder OverviewA Record-Triggered Flow can be configured to delete a quote automatically when its status is updated to \"Rejected.\" Why D (Flow) is correct:Exact Extract:\"Use Flow Builder to automate complex business processes by collecting data and performing actions such as creating, updating, or deleting records.\" \u2014 Salesforce Help | Flow Builder OverviewA Record-Triggered Flow can be configured to delete a quote automatically when its status is updated to \"Rejected.\" Why not A (Validation Rule):Validation rules prevent record saving; they don't perform deletions. Why not B (Einstein Next Best Action):NBA recommends actions but does not execute deletions automatically. Why not C (Approval Process):Approval processes manage approvals but don't delete records after rejection. References: Salesforce Help | Flow Builder Overview Salesforce Platform App Builder Exam Guide | Business Logic and Process Automation"
  },
  {
    "id": 230,
    "category": "Business Logic and Process Automation",
    "text": "Universal Containers wants to create a custom checkbox formula field on the Opportunity object. This formula should evaluate to TRUE if the following conditions are met: Stage is set to Negotiation/Review Close Date is less than 1 week away Which formula meets these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - 7 < TODAY())"
      },
      {
        "letter": "B",
        "text": "AND(StageName = \"Negotiation/Review\", CloseDate - 7 < TODAY())"
      },
      {
        "letter": "C",
        "text": "AND(StageName = 'Negotiation/Review', CloseDate - DAY(7) < TODAY())"
      },
      {
        "letter": "D",
        "text": "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - DAY(7) < TODAY())"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "To test a picklist field in a formula, ISPICKVAL must be used. To check if the CloseDate is within 7 days of the current date, you can use simple date arithmetic (CloseDate - 7 < TODAY()). Why A is correct:Exact Extract:\"Use ISPICKVAL to determine if a picklist field has a specific value.\" \u2014 Salesforce Help | ISPICKVAL Function\"Date formulas can use arithmetic to compare a date to TODAY(). For example, CloseDate - 7 < TODAY() returns TRUE if CloseDate is within the next week.\" \u2014 Salesforce Help | Date Functions and Operators Why not B:Picklist fields cannot be compared with =; this formula would fail to compile. Why not C or D:The function DAY() returns the day of the month from a date \u2014 not a duration. DAY (7) is invalid in this context. References: Salesforce Help | ISPICKVAL Function Salesforce Help | Formula Operators and Functions Salesforce Platform App Builder Exam Guide | Business Logic and Process Automation"
  },
  {
    "id": 231,
    "category": "Business Logic and Process Automation",
    "text": "The case handling process at Universal Containers includes multiple steps including approvals, notifications, and fields updates. To manage and evaluate all of these changes in a single save operation, an app builder wants to use Process Builder and the Advanced option to let the process evaluate a record multiple times has been selected. Which two options should the app builder avoid to prevent recursion? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "IF statements"
      },
      {
        "letter": "B",
        "text": "Setting a criteria node to No criteria - just execute the actions!"
      },
      {
        "letter": "C",
        "text": "Invocable processes"
      },
      {
        "letter": "D",
        "text": "The ISCHANGED function"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "When a process is configured with the advanced option to evaluate a record multiple times, avoid invocable processes - they can call the original process again and cause an infinite loop. Also avoid the ISCHANGED function: per Salesforce documentation, ISCHANGED (like ISNEW and PRIORVALUE) should not be used together with the advanced option, because the field values have already been updated when the record is re-evaluated. IF statements are formula functions, not recursion risks."
  },
  {
    "id": 232,
    "category": "Business Logic and Process Automation",
    "text": "Universal Containers has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should be static after the opportunity has been created.",
    "options": [
      {
        "letter": "A",
        "text": "Roll-up summary field"
      },
      {
        "letter": "B",
        "text": "Formula field"
      },
      {
        "letter": "C",
        "text": "Flow"
      },
      {
        "letter": "D",
        "text": "Apex"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "The requirement is to copy the parent Account's Billing State onto a custom field on Opportunity at the moment the Opportunity is created, and keep that value static thereafter. Why not Formula (B): A formula would always recalculate, so the value would change if the Account's Billing State later changes.Exact Extract: \"Formula fields are read-only fields that automatically recalculate their values when any referenced fields change.\" \u2014 Salesforce Help | Formula Fields Why not Roll-Up Summary (A): Roll-up summary fields only summarize child records onto a master (parent) record; they do not copy values from a parent (Account) down to a child (Opportunity), and they can't summarize a text/state value.Exact Extract: \"A roll-up summary field calculates values from related records, such as those in a related list, on a master record.\" \u2014 Salesforce Help | Roll-Up Summary Fields Why Flow (C) is correct: A Record-Triggered Flow on Opportunity (when a record is created) can set a field value by referencing the related Account (e.g., Opportunity.Account.BillingState) and writing it into a dedicated \"snapshot\" field (e.g., Billing State at Create__c). Because this is a one-time assignment on create, the value remains static unless intentionally updated by further automation.Exact Extract 1: \"Use Flow Builder to automate business processes by collecting data and performing actions in your Salesforce org.\" \u2014 Salesforce Help | Flow BuilderExact Extract 2: \"Record- triggered flows launch when a record is created, updated, or deleted, and can update fields on the triggering record.\" \u2014 Salesforce Help | Record-Triggered Flows Why Apex (D) is not preferred: While Apex could do the same copy-on-create, Salesforce's recommended approach is to use declarative automation (Flow) when possible.Exact Extract: \"Before considering Apex, evaluate whether your solution can be implemented with declarative tools such as Flow.\" \u2014 Salesforce Architect Guidance | Clicks, Not Code Implementation note (for clarity): Create a custom text field on Opportunity, e.g., Billing State at Create (Billing_State_at_Create__c). Build a Record-Triggered Flow: Trigger: Opportunity \u2014 \"A record is created\" Get or use the related Account from the $Record.AccountId relationship Update the new Opportunity field with Account.BillingState Do not run the flow on updates References (Salesforce Platform App Builder documents / Study Guide topics): Salesforce Help \u2014 Formula Fields Salesforce Help \u2014 Roll-Up Summary Fields Salesforce Help \u2014 Flow Builder Salesforce Help \u2014 Record-Triggered Flows Salesforce Architect Guidance \u2014 Clicks, Not Code Salesforce Platform App Builder Exam Guide \u2014 Business Logic and Process Automation"
  },
  {
    "id": 233,
    "category": "Business Logic and Process Automation",
    "text": "When an opportunity close date is delayed by more than 60 days, the manager and the VP sales must approve the change. How can this requirement be met? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Build an approval process that requires unanimous approval from the manager and VP of sales."
      },
      {
        "letter": "B",
        "text": "Create a workflow rule that checks for close date less than 60 days and add an email alert."
      },
      {
        "letter": "C",
        "text": "Create a lightning process builder flow that submits the record for an approval process"
      },
      {
        "letter": "D",
        "text": "Build a validation rule that does not allow a user to save the opportunity record."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "The requirement can be met by using a combination of process builder and approval process. The process builder can be used to trigger the approval process when the close date is delayed by more than 60 days. The approval process can be configured to require unanimous approval from the manager and VP of sales."
  },
  {
    "id": 234,
    "category": "Business Logic and Process Automation",
    "text": "The Universal Containers data manager has been complaining about the lack of data integrity on Contact records. Sales reps have not been filling out the Region field. The data manager wants the Region field filled out only for Contacts that are associated to Accounts that have been marked as 'High Priority' on the Customer Status field. What can the app builder do to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Make the Region field required on Contact."
      },
      {
        "letter": "B",
        "text": "Create a validation rule on Contact."
      },
      {
        "letter": "C",
        "text": "Create a validation rule on Account."
      },
      {
        "letter": "D",
        "text": "Make the Customer Status field required on Account."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "To ensure data integrity where the Region field on the Contact object needs to be filled out conditionally based on the parent Account's status, a validation rule on the Contact is the most effective method: B. Create a validation rule on Contact. This rule can enforce that the Region field must be filled out for Contacts related to Accounts marked as 'High Priority'. Steps to create this validation rule: Navigate to Setup # Object Manager # Contact # Validation Rules. Create a new validation rule. In the formula, use: AND(ISPICKVAL(Account.Customer_Status__c, 'High Priority'), ISBLANK(Region__c))) Provide an error message to display when the rule is violated. Save and activate the rule. This validation rule checks that if a Contact is associated with an Account marked 'High Priority', the Region field cannot be blank. For further detail, Salesforce's Validation Rule Considerations provides additional guidance."
  },
  {
    "id": 235,
    "category": "Business Logic and Process Automation",
    "text": "Northern Trail Outfitters (NTO) has created the custom objects Trail and Park in Salesforce to track trails and parks respectively. NTO wants to track the total number of trails a park has on the park record without writing any code. Which two actions should an app builder take to accomplish this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Use a formula field on the Park record to show the total number of trails."
      },
      {
        "letter": "B",
        "text": "Use a roll-up summary field on the Park record to show the total number of Trails."
      },
      {
        "letter": "C",
        "text": "Use a master-detail relationship between the Park and Trail objects."
      },
      {
        "letter": "D",
        "text": "Use a lookup relationship between the Park and Trail objects."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "To track the total number of trails associated with a park without writing code, the correct actions to take are: Use a roll-up summary field on the Park record to show the total number of Trails (B). Roll-up summary fields calculate and display a value in a master record based on the values of fields in a detail record. They are used to count, sum, average, or get the minimum/maximum of values in related detail records. Use a master-detail relationship between the Park and Trail objects (C). Master-detail relationships are necessary for roll-up summary fields as they allow the master object to control certain behaviors of the detail object and summarize data from those detail records. A formula field (A) cannot dynamically count related records unless those records are linked via a master- detail relationship, and it cannot alone handle counts across related records without such a relationship. A lookup relationship (D) does not support roll-up summaries unless combined with additional tools like triggers or third- party apps, which involve coding or extra configuration outside standard object setup. For more details, refer to the Salesforce Help documentation on master-detail relationships and roll-up summary fields: Master-Detail Relationship: https://help.salesforce.com/articleView?id=relationships_considerations. htm&type=5 Roll-Up Summary Fields: https://help.salesforce.com/articleView? id=fields_about_roll_up_summary_fields.htm&type=5"
  },
  {
    "id": 236,
    "category": "Business Logic and Process Automation",
    "text": "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission. Which three action types should an app builder use in the approval process? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Email Alert"
      },
      {
        "letter": "B",
        "text": "Outbound Message"
      },
      {
        "letter": "C",
        "text": "Task"
      },
      {
        "letter": "D",
        "text": "Invocable Flow"
      },
      {
        "letter": "E",
        "text": "Invocable Process Builder"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "The action types available in an approval process are Task, Email Alert, Field Update, and Outbound Message. Invocable Flow and Invocable Process Builder are not available as approval process actions, so Email Alert, Outbound Message, and Task are the three correct choices."
  },
  {
    "id": 237,
    "category": "Business Logic and Process Automation",
    "text": "The Director of customer service wants to receive a notification when a case stays in the 'New' status for more than four business hours. Which two automation processes should be used to accomplish this? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Escalation rules"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Process Builder"
      },
      {
        "letter": "D",
        "text": "Scheduled Apex"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "Escalation rules and Process Builder are two automation processes that can be used to send a notification when a case stays in the 'New' status for more than four business hours. Escalation rules can define criteria and actions for escalating cases based on time or other factors. Process Builder can create a time-based action that triggers an email alert when the case status is 'New' for more than four business hours. Flow Builder and Scheduled Apex are not necessary for this requirement."
  },
  {
    "id": 238,
    "category": "Business Logic and Process Automation",
    "text": "Sales Managers want to be automatically notified any time there is a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity. Which two configurations should an app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Feed Tracking on Opportunities."
      },
      {
        "letter": "B",
        "text": "Create an Opportunity outbound message."
      },
      {
        "letter": "C",
        "text": "Use a record-triggered flow on Opportunity and a Chatter post action."
      },
      {
        "letter": "D",
        "text": "Activate Historical Trending for Opportunities."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "Feed Tracking on Opportunities automatically posts field changes (like Close Date) to the record feed, tracking the change and notifying users who follow the record. A record-triggered flow with a Chatter post action can notify the Sales Managers directly when the Close Date changes. Outbound messages are for system-to-system integration rather than user notifications, and Historical Trending is for reporting on field values over time, not for notifications."
  },
  {
    "id": 239,
    "category": "Business Logic and Process Automation",
    "text": "When an opportunity close date is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process. How can an app builder ensure that these opportunities are submitted into the approval process?",
    "options": [
      {
        "letter": "A",
        "text": "Change the entry criteria on the approval process to criteria are met and lock the record on initial submission."
      },
      {
        "letter": "B",
        "text": "Use a validation rule and an email alert to the manager requesting approval."
      },
      {
        "letter": "C",
        "text": "Submit the record for approval from an automated process."
      },
      {
        "letter": "D",
        "text": "Give the manager the \"API Enabled\" permission to permit approval responses by email."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "To ensure that opportunities are submitted into the approval process when their close date is pushed more than 30 days, an app builder should use an automated process to submit the record for approval. An automated process can be created using tools such as Process Builder or Flow Builder, and it can define the criteria and actions for submitting a record for approval. [Source]"
  },
  {
    "id": 240,
    "category": "Business Logic and Process Automation",
    "text": "Ursa Major Solar (UMS) has a custom object where they track Galactic Vendors. The object has four custom fields for the Galactic Vendors' location: Street, City, Planet, and Galaxy. The UMS's leadership wants these fields to be concatenated into a single formula field on two lines. Which formula fulfills this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Street__c & BR() & City__c & \", \" & Planet__c & \" \" & Galaxy__c"
      },
      {
        "letter": "B",
        "text": "Street & (& City & \", \" & Planet & \" \" & Galaxy)"
      },
      {
        "letter": "C",
        "text": "Street & BR() & City & \", \" & Planet & \" \" & Galaxy"
      },
      {
        "letter": "D",
        "text": "Street__r & BR() & City__r & \", \" & Planet__r & \" \" & Galaxy__r"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Only option A uses the correct custom field API names (the __c suffix) together with the BR() function to insert a line break after the second field, producing the location on two lines. Options B and C reference the fields without the __c suffix, which is invalid for custom fields, and option D uses __r, the relationship syntax for fields on a related record."
  },
  {
    "id": 241,
    "category": "Business Logic and Process Automation",
    "text": "Universal Containers wants to create a custom checkbox formula field on the Opportunity object. This formula should evaluate to TRUE if the following conditions are met: Stage is set to Negotiation/Review, and Close Date is less than 1 week away. Which formula meets these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - 7 < TODAY())"
      },
      {
        "letter": "B",
        "text": "AND(StageName = \"Negotiation/Review\", CloseDate - 7 < TODAY())"
      },
      {
        "letter": "C",
        "text": "AND(StageName = 'Negotiation/Review', CloseDate - DAY(7) < TODAY())"
      },
      {
        "letter": "D",
        "text": "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - DAY(7) < TODAY())"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "To test a picklist field in a formula, ISPICKVAL must be used - picklist fields cannot be compared directly with the equals operator. To check whether the Close Date is less than one week away, simple date arithmetic works: CloseDate - 7 < TODAY(). DAY(7) is not valid date arithmetic for this purpose."
  },
  {
    "id": 242,
    "category": "Business Logic and Process Automation",
    "text": "Cloud Kicks wants to display the number of opportunities that are Closed Won with a Close Date within the last year on the Account detail page. Which tool should an app builder use to implement this?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Activity Timeline"
      },
      {
        "letter": "C",
        "text": "Roll-Up Summary Field"
      },
      {
        "letter": "D",
        "text": "Workflow Rule"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "A roll-up summary field is a field that calculates values from related records. A roll-up summary field can be used to display the number of opportunities that are closed won with a close date within the last year on the account detail page by using a filter criteria on the field."
  },
  {
    "id": 243,
    "category": "Business Logic and Process Automation",
    "text": "Cloud Kicks works on an annual subscription model. When a sales rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of salesforce but also needs to be notified about closed deals in order to initial the contract process with the customer. Which automation solution would meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Approval Process"
      },
      {
        "letter": "B",
        "text": "Outbound Message"
      },
      {
        "letter": "C",
        "text": "Validation Rule"
      },
      {
        "letter": "D",
        "text": "Record-triggered flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "A record-triggered flow can be used to automate actions when a record is created or updated. In this case, a record-triggered flow can be configured to create a new opportunity and send an email to the contracts team when an opportunity is marked as closed won."
  },
  {
    "id": 244,
    "category": "Business Logic and Process Automation",
    "text": "UVC's CFO has asked that all deals with more than a 40% discount get automatically sent to the VP of Finance. He will review these deals without the sales rep needing to take action. Which two ways can this be accomplished without building code? Choose two answers",
    "options": [
      {
        "letter": "A",
        "text": "Launch a new approval process that has automatic submission enabled as an initial submission action"
      },
      {
        "letter": "B",
        "text": "Create a new process with a submit for approval action to automatically submit deals for approval"
      },
      {
        "letter": "C",
        "text": "Create a new approval process that has automatic submission enabled in the entry criteria"
      },
      {
        "letter": "D",
        "text": "Launch a flow that uses the submit for approval action to submit deals for approval"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "The Submit for Approval action is available in both Process Builder and Flow. Either one can detect opportunities with more than a 40% discount and automatically submit them for approval, so the VP of Finance reviews the deals without any rep action. Approval processes have no 'automatic submission' entry criteria or initial submission action - they only define what happens after a record is submitted."
  },
  {
    "id": 245,
    "category": "Business Logic and Process Automation",
    "text": "DreamHouse Realty (DR) has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record. Which solution should the app builder use to meet DR's needs provided that there is a master-detail relationship between the objects?",
    "options": [
      {
        "letter": "A",
        "text": "Roll-up Summary"
      },
      {
        "letter": "B",
        "text": "Rich Text Area"
      },
      {
        "letter": "C",
        "text": "Text Area (Long)"
      },
      {
        "letter": "D",
        "text": "Multi-select Picklist"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Since there is a master-detail relationship between Property__c (master) and Offer__c (detail), Salesforce natively supports using Roll-up Summary fields on the master object to summarize values from the related child records. Why A (Roll-up Summary) is correct:Exact Extract:\"A roll-up summary field calculates values from related records, such as those in a related list, on a master record. You can count the number of related records, determine the sum, minimum, or maximum value of a field in the related records.\" \u2014 Salesforce Help | Roll-Up Summary FieldsTherefore, DR can create a Roll-up Summary field on Property__c that uses the MAX function on the \"Offer Value\" field from Offer__c. Why A (Roll-up Summary) is correct:Exact Extract:\"A roll-up summary field calculates values from related records, such as those in a related list, on a master record. You can count the number of related records, determine the sum, minimum, or maximum value of a field in the related records.\" \u2014 Salesforce Help | Roll- Up Summary FieldsTherefore, DR can create a Roll-up Summary field on Property__c that uses the MAX function on the \"Offer Value\" field from Offer__c. Why not B, C, or D: Rich Text Area and Text Area (Long) store text, not calculated numeric data. Multi-select Picklist is used for multiple selectable text options, not calculations. References: Salesforce Help | Roll-Up Summary Fields Salesforce Platform App Builder Exam Guide | Data Modeling and Management"
  },
  {
    "id": 246,
    "category": "Business Logic and Process Automation",
    "text": "A Cloud Kicks employee submitted an opportunity for approval by their manager. What will happen if the employee attempts to edit the description field after submission?",
    "options": [
      {
        "letter": "A",
        "text": "User will be presented with a 'Record Lock' notification."
      },
      {
        "letter": "B",
        "text": "User will be able to edit the description field only."
      },
      {
        "letter": "C",
        "text": "User will be able to edit the name, but unable to edit the description."
      },
      {
        "letter": "D",
        "text": "User will see the record is now owned by their manager."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "When a record is submitted for approval, Salesforce automatically locks it, preventing further edits until it is approved, rejected, or recalled. Why A (Record Lock) is correct:Exact Extract:\"When a record is submitted for approval, Salesforce automatically locks the record to prevent users from editing it unless they have 'Modify All Data' permission or are designated as an approver.\" \u2014 Salesforce Help | Approval Processes OverviewThus, the user will receive a message indicating that the record is locked and cannot be edited. Why A (Record Lock) is correct:Exact Extract:\"When a record is submitted for approval, Salesforce automatically locks the record to prevent users from editing it unless they have 'Modify All Data' permission or are designated as an approver.\" \u2014 Salesforce Help | Approval Processes OverviewThus, the user will receive a message indicating that the record is locked and cannot be edited. Why not B or C:Once locked, no field (including Description) is editable by the submitter. Why not D:Ownership does not change upon approval submission. References: Salesforce Help | Approval Processes Overview Salesforce Platform App Builder Exam Guide | Business Logic and Process Automation"
  },
  {
    "id": 247,
    "category": "Business Logic and Process Automation",
    "text": "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
    "options": [
      {
        "letter": "A",
        "text": "Create an approval process on the User object to assign a permission set"
      },
      {
        "letter": "B",
        "text": "Create a flow on the user object to assign a permission set."
      },
      {
        "letter": "C",
        "text": "Create a lightning process on the user object to launch a flow."
      },
      {
        "letter": "D",
        "text": "Create a workflow rule on the User object to assign a permission set."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "A flow or a process can be used to assign a permission set to new users. A flow can be triggered by a record change or an invocable action, while a process can launch a flow as an immediate or scheduled action"
  },
  {
    "id": 248,
    "category": "Business Logic and Process Automation",
    "text": "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder with Submit for Approval action."
      },
      {
        "letter": "B",
        "text": "Approval Process with a triggered Flow process."
      },
      {
        "letter": "C",
        "text": "Approval Process with Time-Dependent Workflow action."
      },
      {
        "letter": "D",
        "text": "Two-step Approval Process."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "A two-step approval process routes the sales rep's delete request to their manager for approval before the Opportunity can be deleted. Process Builder does not have a Submit for Approval action (option A), and approval processes cannot be combined with triggered flows (B) or time-dependent workflow actions (C) for this purpose."
  },
  {
    "id": 249,
    "category": "Business Logic and Process Automation",
    "text": "Ursa Major Solar's service department gets requests for several types of services, such as installation, repair, and maintenance. Service managers need to be able to tell when maintenance was last done on an asset to help determine if they are meeting contract agreements, but the last maintenance date can be difficult to determine when there are many work orders related to the asset. They think it would be helpful to have a field auto- populated on the Asset record when a maintenance work order gets closed. Which tool should an app builder recommend to help meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Einstein Next Best Action"
      },
      {
        "letter": "B",
        "text": "Roll-up Summary"
      },
      {
        "letter": "C",
        "text": "Apex Trigger"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "The requirement is to auto-populate the \"Last Maintenance Date\" field on the Asset record whenever a Maintenance-type Work Order is closed. This can be achieved declaratively using Flow \u2014 specifically, a Record-Triggered Flow that updates the parent record (Asset). Why D (Flow) is correct:Exact Extract:\"Record-triggered flows can update related records when specific changes occur, such as when a Work Order's status is updated to Closed.\" \u2014 Salesforce Help | Record-Triggered FlowsIn this scenario, the flow can: Why D (Flow) is correct:Exact Extract:\"Record-triggered flows can update related records when specific changes occur, such as when a Work Order's status is updated to Closed.\" \u2014 Salesforce Help | Record-Triggered FlowsIn this scenario, the flow can: Trigger when a Work Order is updated to \"Closed.\" Check if Type = \"Maintenance.\" Update the related Asset record's Last Maintenance Date field with the Work Order's Closed Date. Why not B (Roll-up Summary):Roll-up summary fields can only summarize numeric or date values using MIN, MAX, COUNT, or SUM, but only on Master-Detail relationships. Work Order # Asset is a Lookup relationship, so roll-up summaries are not supported natively. Why not A (Einstein Next Best Action):NBA provides recommendations, not field updates. Why not C (Apex Trigger):Apex could achieve this, but Salesforce recommends Flow first as a best practice. References: Salesforce Help | Record-Triggered Flows Salesforce Help | Flow Builder Overview Salesforce Platform App Builder Exam Guide | Business Logic and Process Automation"
  },
  {
    "id": 250,
    "category": "Business Logic and Process Automation",
    "text": "Cloud Kicks is implementing an approval process for opportunities that requires managers to approve all opportunities above $50,000 before they can be marked as Closed Won. Which two delivery methods can a manager utilize to respond to approval requests in the Salesforce mobile app? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Home Screen"
      },
      {
        "letter": "B",
        "text": "In-App Notification"
      },
      {
        "letter": "C",
        "text": "Record Detail"
      },
      {
        "letter": "D",
        "text": "Navigation Menu"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "For managers to respond to approval requests for opportunities above $50,000 in the Salesforce mobile app: B. In-App Notification: Managers receive notifications within the Salesforce mobile app when there is an approval request, allowing them to approve or reject directly from the notification. C. Record Detail: Managers can access the approval request directly from the Opportunity's detail page in the mobile app, where they can review and respond to the request. Steps to configure approval process notifications: Navigate to Setup # Approval Processes # select the relevant approval process. Ensure the process is active and configured to send notifications to approvers. Managers need to have the Salesforce mobile app configured to receive notifications. For best practices on managing approvals in Salesforce, see Approvals in Salesforce."
  },
  {
    "id": 251,
    "category": "User Interface",
    "text": "Sales reps at UC use Salesforce on their mobile devices. They want a way to add new contacts quickly and then follow up later to complete the additional information necessary. What mobile solution should an app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Build a global action to create Contacts."
      },
      {
        "letter": "B",
        "text": "Customize the mobile menu to move Contacts to the top."
      },
      {
        "letter": "C",
        "text": "Add a compact layout to Contacts."
      },
      {
        "letter": "D",
        "text": "Use Path and set pre-defined values."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.actions_overview_global.htm&type=5"
  },
  {
    "id": 252,
    "category": "User Interface",
    "text": "UC wants to display the real-time stock price for each Account on the Account record page. How should an app builder implement this request?",
    "options": [
      {
        "letter": "A",
        "text": "Install a solution from the AppExchange."
      },
      {
        "letter": "B",
        "text": "Add a Dynamic Report to the page layout."
      },
      {
        "letter": "C",
        "text": "Create a Lightning Web Component."
      },
      {
        "letter": "D",
        "text": "Build a Visual Flow that uses API calls."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "In the context of the Salesforce Platform App Builder exam, this question tests the principle of \"Clicks not Code\" and leveraging the ecosystem before custom development. Option A (Correct): Salesforce encourages app builders to look for existing solutions on the AppExchange to fulfill specific third-party data needs, such as real-time financial data, without writing custom code. Option B: Reports display data already stored within Salesforce objects. They cannot reach out to external sources in real-time to fetch live stock market data. Option C: While a Lightning Web Component (LWC) can technically achieve this via an API, it requires custom development (coding). From an \"App Builder\" perspective\u2014who primarily uses declarative tools\u2014this is usually a secondary choice if an AppExchange solution exists. Option D: Visual Flow (now simply Flows) is a declarative tool, but calling external APIs usually requires an Apex \"Action\" or \"External Service\" setup, making it more complex and less \"out-of-the-box\" for this specific use case than an AppExchange app."
  },
  {
    "id": 253,
    "category": "User Interface",
    "text": "CK wants a visual representation to track delivery status. What component should an app builder recommend? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Related record"
      },
      {
        "letter": "B",
        "text": "Path"
      },
      {
        "letter": "C",
        "text": "Related list"
      },
      {
        "letter": "D",
        "text": "Details"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.path_overview.htm&type=5"
  },
  {
    "id": 254,
    "category": "User Interface",
    "text": "An app builder wants to add the option to 'Send New Email' from Leads, Contacts, and Accounts for users on mobile. What is the benefit of using global actions to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "The global action's layout automatically clones the default page layout."
      },
      {
        "letter": "B",
        "text": "Global actions are record-specific and are available when searching that particular object."
      },
      {
        "letter": "C",
        "text": "Global actions can be accessed anywhere actions are available in mobile including record detail pages, feed, and Chatter groups."
      },
      {
        "letter": "D",
        "text": "Salesforce Lightning Component Library houses exiting global actions prebuilt for use."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.actions_overview_global.htm&type=5"
  },
  {
    "id": 255,
    "category": "User Interface",
    "text": "UC wants users to have access to the pricing guidelines document when viewing a Contract related to an Account. What feature should an app builder use to create easy access to the document?",
    "options": [
      {
        "letter": "A",
        "text": "Quick Action on the Account object"
      },
      {
        "letter": "B",
        "text": "A custom detail page link on the Contract object"
      },
      {
        "letter": "C",
        "text": "A custom detail page link on the Account object"
      },
      {
        "letter": "D",
        "text": "Quick Action on the Contracts object"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Since users need access to the pricing guidelines when viewing a Contract, adding a custom detail page link to the Contract page layout gives users direct access to the document contextually. While Contracts are related to Accounts, linking it directly on the Contract eliminates extra navigation."
  },
  {
    "id": 256,
    "category": "User Interface",
    "text": "UC requires different fields to be filled out at each stage of the Opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Set page layout required fields based on the current stage."
      },
      {
        "letter": "B",
        "text": "Create a Process Builder to prompt the User for field information."
      },
      {
        "letter": "C",
        "text": "Define record types and page layouts for each stage."
      },
      {
        "letter": "D",
        "text": "Add the Path component to the Lightning record page."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.path_considerations.htm&type=5"
  },
  {
    "id": 257,
    "category": "User Interface",
    "text": "Sales Managers at UC would like to standardize what information Sales Reps are gathering. Sales Reps want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. What feature should an app builder use to provide this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow"
      },
      {
        "letter": "B",
        "text": "Chatter Feed"
      },
      {
        "letter": "C",
        "text": "Path"
      },
      {
        "letter": "D",
        "text": "Global Action"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=path_overview.htm&type=5"
  },
  {
    "id": 258,
    "category": "User Interface",
    "text": "The services manager wants to make sure the team enters case priority consistently. What feature can an app builder use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Path"
      },
      {
        "letter": "B",
        "text": "Next Best Action"
      },
      {
        "letter": "C",
        "text": "Flow"
      },
      {
        "letter": "D",
        "text": "In-App Guidance"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "Path displays the key stages of a process (such as case statuses) at the top of the record page, with guidance for success and key fields at each stage, which helps the team enter values like case priority consistently. In-App Guidance provides contextual pop-up tips, and Next Best Action and Flow are not designed for stage-by- stage guidance."
  },
  {
    "id": 259,
    "category": "User Interface",
    "text": "UMS is ramping up the sales team to meet increased demand. As part of the short ramp- up for these new reps, the manager wants to provide a help guide to enable reps to easily get help where needed during the different sales processes. Which solution should an app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Flow"
      },
      {
        "letter": "B",
        "text": "Journey Builder"
      },
      {
        "letter": "C",
        "text": "Chatter Publisher"
      },
      {
        "letter": "D",
        "text": "Path"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.path_overview.htm&type=5"
  },
  {
    "id": 260,
    "category": "User Interface",
    "text": "DHR wants a weather map on listing records when a house is scheduled for a showing. How should the app builder meet the requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Field-level security"
      },
      {
        "letter": "B",
        "text": "Formula field"
      },
      {
        "letter": "C",
        "text": "Component visibility"
      },
      {
        "letter": "D",
        "text": "Sharing rules"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_visibility.h tm&language=en_US&type=5"
  },
  {
    "id": 261,
    "category": "User Interface",
    "text": "The brokers at DR are having an issue when using the Salesforce mobile app on their iPhones. There are several key fields on the contact record that they need access to at a glance. Because of the small screen, they currently have to scroll down the page to view the information. What should the app builder at DR use to configure the Salesforce mobile app to show these key fields at the top of the screen?",
    "options": [
      {
        "letter": "A",
        "text": "Record Detail component"
      },
      {
        "letter": "B",
        "text": "Compact layout"
      },
      {
        "letter": "C",
        "text": "Mobile navigation"
      },
      {
        "letter": "D",
        "text": "Object specific action"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.compact_layout_overview.htm&langu age=en_US&type=5"
  },
  {
    "id": 262,
    "category": "User Interface",
    "text": "At AW Computing, the Candidate object has a checkbox field for Previous Experience and a number field for Years of Previous Experience. The Recruiting team would like the number field to display only if the Previous Experience field is checked. Which functionality should the app builder use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a dependency between the Previous Experience and Years of Previous Experience fields."
      },
      {
        "letter": "B",
        "text": "Use Dynamic Forms to display the Years of Previous Experience field if Previous Experience is checked."
      },
      {
        "letter": "C",
        "text": "Use a Visualforce component on the candidate page layout to conditionally display the fields."
      },
      {
        "letter": "D",
        "text": "Create two different page layouts and a process to change the layout if Previous Experience is checked."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Dynamic Forms: This feature allows you to control the visibility of fields on a record page based on specific criteria or field values (e.g., showing a number field only when a checkbox is selected) without creating multiple page layouts"
  },
  {
    "id": 263,
    "category": "User Interface",
    "text": "UMS has received complaints about inconsistent customer service experiences and wants to provide its agents with a checklist of items that must be accomplished when servicing a case. What should an app builder use to implement this?",
    "options": [
      {
        "letter": "A",
        "text": "Actions & Recommendations component"
      },
      {
        "letter": "B",
        "text": "Assistant component"
      },
      {
        "letter": "C",
        "text": "Highlights Panel component"
      },
      {
        "letter": "D",
        "text": "Activity Timeline component"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.console_lex_guided_action_deploym ent.htm&type=5"
  },
  {
    "id": 264,
    "category": "User Interface",
    "text": "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on mobile. Which two solutions should be recommended in order to meet this requirement? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Create an object-specific action on Account."
      },
      {
        "letter": "B",
        "text": "Create a feedback object as a parent of Account."
      },
      {
        "letter": "C",
        "text": "Create a global action on Account."
      },
      {
        "letter": "D",
        "text": "Create predefined values for most of the fields."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.creating_object_specific_actions.htm &type=5 https://help.salesforce.com/s/articleView?id=sf.predefined_field_values.htm&type=5"
  },
  {
    "id": 265,
    "category": "User Interface",
    "text": "UC has purchased a Lightning component on the AppExchange. In which two areas can these components be used? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Lightning App Builder"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Validation Rule"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "Lightning components purchased from the AppExchange can be used in: Lightning App Builder: To customize the UI of Lightning pages by adding custom components. Flow Builder: To enhance flows with custom Lightning components."
  },
  {
    "id": 266,
    "category": "User Interface",
    "text": "UC wants to improve the process to create Opportunity records related to an Account. Many fields can be populated based on the Account record. Some fields require input from the user. What should an app builder configure to meet the requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment rule triggered from Opportunity update"
      },
      {
        "letter": "B",
        "text": "Quick Action on the Opportunity object"
      },
      {
        "letter": "C",
        "text": "Quick Action on the Account object"
      },
      {
        "letter": "D",
        "text": "Assignment rule triggered from Account update."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sfdo.OFM_Create_Quick_Actions.htm&t ype=5"
  },
  {
    "id": 267,
    "category": "User Interface",
    "text": "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce Mobile App. What should be used to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Custom button"
      },
      {
        "letter": "B",
        "text": "Custom URL formula field"
      },
      {
        "letter": "C",
        "text": "Custom quick access link"
      },
      {
        "letter": "D",
        "text": "Custom action"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.cpq_custom_actions.htm&type=5"
  },
  {
    "id": 268,
    "category": "User Interface",
    "text": "An app builder at UC has been asked to add the Chatter feed to a custom object record page. Which approach should the app builder use?",
    "options": [
      {
        "letter": "A",
        "text": "Add the standard Chatter feed component."
      },
      {
        "letter": "B",
        "text": "Add the standard related list component."
      },
      {
        "letter": "C",
        "text": "Add a custom Chatter feed component."
      },
      {
        "letter": "D",
        "text": "Add the Chatter feed component from the AppExchange."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.actions_chatter_actions.htm&type=5"
  },
  {
    "id": 269,
    "category": "User Interface",
    "text": "On the Account Lightning record page, users need to see ten fields and the ability to sort and wrap text on their Related Lists. What Related List type would the app builder select for the Related List Lightning component?",
    "options": [
      {
        "letter": "A",
        "text": "Basic List"
      },
      {
        "letter": "B",
        "text": "List View"
      },
      {
        "letter": "C",
        "text": "Enhanced List"
      },
      {
        "letter": "D",
        "text": "List Class"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customizing_related_lists.htm&type=5"
  },
  {
    "id": 270,
    "category": "User Interface",
    "text": "An app builder wants to create a custom Sync button on Account that will call a Lightning Web Component that connects with an external system. This action should only be available if the custom Status field is set to Ready to Sync. What should an app builder use to add this functionality to an Account record page?",
    "options": [
      {
        "letter": "A",
        "text": "Formula field"
      },
      {
        "letter": "B",
        "text": "Dynamic action"
      },
      {
        "letter": "C",
        "text": "AppExchange product"
      },
      {
        "letter": "D",
        "text": "Custom link"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_create_dynam ic_action.htm&type=5"
  },
  {
    "id": 271,
    "category": "User Interface",
    "text": "The VP of Sales at UC has asked the app builder to let sales reps create opportunity records directly from the account, with a number of fields pre-populated. Which feature should the app builder use to allow users to create the opportunity?",
    "options": [
      {
        "letter": "A",
        "text": "A quick action"
      },
      {
        "letter": "B",
        "text": "A default action"
      },
      {
        "letter": "C",
        "text": "A custom button"
      },
      {
        "letter": "D",
        "text": "A custom link"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.actions_overview.htm&type=5"
  },
  {
    "id": 272,
    "category": "User Interface",
    "text": "UC has a single Contact Lightning record page. A component takes up a lot of room on the page and is NOT needed by users with a Marketing profile. What should the app builder use to solve this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Detail page layouts"
      },
      {
        "letter": "B",
        "text": "Component visibility filter"
      },
      {
        "letter": "C",
        "text": "Field-level security"
      },
      {
        "letter": "D",
        "text": "AppExchange"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_visibility.h tm&type=5"
  },
  {
    "id": 273,
    "category": "User Interface",
    "text": "Which three options are available when activating a lightning page from the Lightning App Builder? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Assign the page to a combination of apps and profiles."
      },
      {
        "letter": "B",
        "text": "Assign the page to a combination of apps and permission sets."
      },
      {
        "letter": "C",
        "text": "Make the page the org default"
      },
      {
        "letter": "D",
        "text": "Make the page the default homepage for specific roles."
      },
      {
        "letter": "E",
        "text": "Make the page the default homepage for specific apps."
      }
    ],
    "answer": [
      "A",
      "C",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_customize_lex _pages_activate.htm&type=5"
  },
  {
    "id": 274,
    "category": "User Interface",
    "text": "CK wants to display 10 key fields at once in a separate section at the top of opportunity records on the desktop. Which component should an app builder add to the record page to enable this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "Path"
      },
      {
        "letter": "B",
        "text": "Highlights Panel"
      },
      {
        "letter": "C",
        "text": "Custom Lightning Web Component"
      },
      {
        "letter": "D",
        "text": "Accordion"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components.htm&type= 5"
  },
  {
    "id": 275,
    "category": "User Interface",
    "text": "How should an app builder configure access to contact's Twitter profile for Salesforce mobile app users?",
    "options": [
      {
        "letter": "A",
        "text": "Add an AppExchange Lightning Component to the mobile app."
      },
      {
        "letter": "B",
        "text": "Add the Twitter component to mobile view Lightning pages."
      },
      {
        "letter": "C",
        "text": "Add a formula field to the Contact page layout."
      },
      {
        "letter": "D",
        "text": "Add a Twitter Quick Action to the mobile navigation."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.social_networks_enable.htm&type=5"
  },
  {
    "id": 276,
    "category": "User Interface",
    "text": "Which two options are available to an app builder when defining an object-specific create record custom action? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Pre-defining field values on the target object."
      },
      {
        "letter": "B",
        "text": "Redirecting the end user to the detail page of the target object."
      },
      {
        "letter": "C",
        "text": "Specifying the fields and layout of the action."
      },
      {
        "letter": "D",
        "text": "Allowing the end user to choose the record type."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.actions_overview_object_specific.ht m&type=5"
  },
  {
    "id": 277,
    "category": "User Interface",
    "text": "Managers at UC want a quick way to create additional accounts to form a hierarchy from a parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly. What should the app builder recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Custom Action on Account"
      },
      {
        "letter": "B",
        "text": "Custom Button on Account"
      },
      {
        "letter": "C",
        "text": "Custom Global Quick Action"
      },
      {
        "letter": "D",
        "text": "Custom Link on Account"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=actions_overview.htm&type=5"
  },
  {
    "id": 278,
    "category": "User Interface",
    "text": "UC is setting up Salesforce for the first time. Management wants the sales and marketing teams to have different navigation menu in the Salesforce Mobile App. Which option is available to an app builder to satisfy this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create mobile navigation menus for both the sales and marketing profiles."
      },
      {
        "letter": "B",
        "text": "Create public groups for sales and marketing and create mobile navigation menus for each group."
      },
      {
        "letter": "C",
        "text": "Create roles for sales and marketing and assign a custom homepage layout for each role."
      },
      {
        "letter": "D",
        "text": "Create sales and marketing apps and assign the respective profiles to each app."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "In modern Salesforce Lightning Experience, the Salesforce Mobile App mirrors the navigation items defined in Lightning Apps. By creating two distinct Lightning Apps (one for Sales and one for Marketing) and assigning them to their respective user profiles, the app builder ensures that each team sees a navigation menu tailored specifically to their needs."
  },
  {
    "id": 279,
    "category": "User Interface",
    "text": "An app builder at UC wants to prevent users from creating new records on an Account related list by overriding standard buttons. Which two aspects should the app builder consider before overriding standard buttons? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Standard buttons can be overridden with a Lightning component."
      },
      {
        "letter": "B",
        "text": "Standard buttons can be overridden, relocated on the detail page, and relabeled."
      },
      {
        "letter": "C",
        "text": "Standard buttons can be changed on lookup dialogs, list views, and search result layout."
      },
      {
        "letter": "D",
        "text": "Standard buttons that are NOT available for overrides can still be hidden on page layouts."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.links_override_considerations.htm&ty pe=5"
  },
  {
    "id": 280,
    "category": "User Interface",
    "text": "An app builder has a custom component they want to make available on the utility bar, but the component is unavailable. How should the component be tagged?",
    "options": [
      {
        "letter": "A",
        "text": "For use on the utility bar."
      },
      {
        "letter": "B",
        "text": "For use in Lightning App Builder."
      },
      {
        "letter": "C",
        "text": "For use in App Manager."
      },
      {
        "letter": "D",
        "text": "For use on record pages."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://developer.salesforce.com/docs/platform/lwc/guide/use-config- for-utility- bar.html"
  },
  {
    "id": 281,
    "category": "User Interface",
    "text": "UC has a customer base where many customers have the same or similar company names. Which functionality should be configured to improve an end user's search experience? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Update the account search layouts search results columns displayed."
      },
      {
        "letter": "B",
        "text": "Update the account search layouts list view filter setting."
      },
      {
        "letter": "C",
        "text": "Update the account search layouts accounts tab columns displayed."
      },
      {
        "letter": "D",
        "text": "Update the account search layouts search filter fields."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "To improve the search experience when many accounts share the same or similar company names, update the account search layouts: configure which columns display in the search results (so users can distinguish records at a glance) and which fields are available as search filter fields (so users can narrow results with additional criteria)."
  },
  {
    "id": 282,
    "category": "User Interface",
    "text": "An app builder wants to show Groups as the last navigation menu item on the Salesforce Mobile App. However, the app builder is unable to select Groups as one of the items on the drop-down menu. What could cause this? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Groups are included in the Smart Search items but NOT on the navigation menu."
      },
      {
        "letter": "B",
        "text": "Groups are showing up in the recent section and NOT in the navigation menu."
      },
      {
        "letter": "C",
        "text": "Groups are NOT included in the selected list for the navigation menu."
      },
      {
        "letter": "D",
        "text": "Groups CANNOT be the last item in the navigation menu."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.user_userdisplay_tabs_lex_considera tions.htm&type=5"
  },
  {
    "id": 283,
    "category": "User Interface",
    "text": "An app builder has created a custom Lightning App and wants to make it available to the internal users at UC. Which two steps are necessary to accomplish this task? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Build a Custom Tab for the app."
      },
      {
        "letter": "B",
        "text": "Assign app to profiles."
      },
      {
        "letter": "C",
        "text": "Upload the app to Static Resources."
      },
      {
        "letter": "D",
        "text": "Add the app to a Visualforce page."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "To make a custom Lightning app available to internal users, build a Custom Tab for the app and assign the app to the appropriate profiles (or permission sets) so that it is visible in the App Launcher. Static Resources and Visualforce pages are not required to expose a Lightning app."
  },
  {
    "id": 284,
    "category": "User Interface",
    "text": "A user is unable to use inline editing on a list view. A quick check verifies the user should be able to perform inline editing as they have been assigned the appropriate permissions. Which two conditions should the app builder review? Choose 2 answers.",
    "options": [
      {
        "letter": "A",
        "text": "If the list view contains more than one record type"
      },
      {
        "letter": "B",
        "text": "If the list view contains a chart created by the user"
      },
      {
        "letter": "C",
        "text": "If the list view restricts sharing for the user"
      },
      {
        "letter": "D",
        "text": "If the list view selected is the recently viewed list view"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "Inline editing is not available in a list view when the list view contains more than one record type, or when the selected list view is the 'Recently Viewed' list view. Charts and sharing settings do not affect inline editing availability."
  },
  {
    "id": 285,
    "category": "User Interface",
    "text": "An app builder has downloaded a component from the AppExchange successfully; however, they are unable to add it to the Lightning home page. Which two reasons can prevent the app builder from being able to add the custom component? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "My Domain must be deployed to add custom components to the page with the App Builder."
      },
      {
        "letter": "B",
        "text": "A custom tab must be created to add custom components to the page with the App Builder."
      },
      {
        "letter": "C",
        "text": "The component is tagged for record pages instead of home pages and is not showing up in the App Builder."
      },
      {
        "letter": "D",
        "text": "The component requires a developer permission to add it to the page with the App Builder."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "In Salesforce, you must have My Domain deployed to your users before you can use custom Lightning components in the Lightning App Builder. Without My Domain, custom components will not appear in the available components list. Lightning components must be configured to be compatible with specific page types. If a component's metadata or tags (such as flexipage:availableForRecordHome versus flexipage:availableForAllPageTypes) are only set for record pages, it will not appear as an option when editing a Home page."
  },
  {
    "id": 286,
    "category": "User Interface",
    "text": "A business user at UC wants to update an Account directly from an Opportunity record. What should the app builder create to allow the business user to make these edits?",
    "options": [
      {
        "letter": "A",
        "text": "An update record action with a details component."
      },
      {
        "letter": "B",
        "text": "Opportunity fields updated by a process."
      },
      {
        "letter": "C",
        "text": "Formula fields displaying the Account fields."
      },
      {
        "letter": "D",
        "text": "An update record action with a related record component."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Actionability: In Salesforce, an Update Record quick action can be created for the Account object. Direct Editing: By adding the Related Record component to the Opportunity Lightning Record Page and associating it with that Update Record action, users can view and edit the parent Account's fields without leaving the Opportunity record. Standard Practice: This is a standard Salesforce App Builder solution for streamlining data entry for related records."
  },
  {
    "id": 287,
    "category": "User Interface",
    "text": "UC wants the sales reps to clean up its Salesforce customer contacts using the Contacts tab. Which two solutions can be used to support and simplify this process using a list view? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Filter the list view by customer record type and enable inline edit functionality."
      },
      {
        "letter": "B",
        "text": "Make the list view dynamic so only \"My Contacts\" are visible to the user."
      },
      {
        "letter": "C",
        "text": "Add a chart to the list view to show the percentage of contacts that have already been cleaned up."
      },
      {
        "letter": "D",
        "text": "Clone a master list view for each user on the team so they can view their customers."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.customviews_listview_chart_edit_lex. htm&type=5 https://help.salesforce.com/s/articleView?language=en_US&id=sf.customviews_edit_ filters_parent.htm&type=5"
  },
  {
    "id": 288,
    "category": "User Interface",
    "text": "Which two places can an app builder go to see a list of available Custom Lightning components in their org? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Lightning App Builder"
      },
      {
        "letter": "B",
        "text": "Lightning components in Setup"
      },
      {
        "letter": "C",
        "text": "Lightning component Generator"
      },
      {
        "letter": "D",
        "text": "Visualforce components in Setup"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_custom. htm&type=5 https://developer.salesforce.com/docs/platform/lwc/guide/use- setup.html"
  },
  {
    "id": 289,
    "category": "User Interface",
    "text": "UC wants some enhancements on its Opportunity page layout to improve efficiency and collaboration. Which two solutions should an app builder suggest to help meet these requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Add a Path component with fields and instructions aligning to stages on the Opportunity."
      },
      {
        "letter": "B",
        "text": "Use two Tabs components to separate record information from activities."
      },
      {
        "letter": "C",
        "text": "Mark stage dependent fields as required on the Opportunity page layout."
      },
      {
        "letter": "D",
        "text": "Set up an approval process requiring manager consent at each stage of the Opportunity."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_performance.htm&ty pe=5"
  },
  {
    "id": 290,
    "category": "User Interface",
    "text": "What should an app builder consider when choosing a template for a new Lightning record page?",
    "options": [
      {
        "letter": "A",
        "text": "To view the record page, users need \"View All Data\" permissions for the object."
      },
      {
        "letter": "B",
        "text": "Page structure will automatically adapt to the device being used to view the record page."
      },
      {
        "letter": "C",
        "text": "Select a new template for each type of device users use to view the record page."
      },
      {
        "letter": "D",
        "text": "The template can be changed at any time after the initial save by clicking Edit Page."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Lightning record page templates are responsive - the page structure automatically adapts to the device (desktop, tablet, or phone) used to view the record page, so a separate template per device is not needed. Templates can also be changed after the initial save, but the automatic adaptation is the key consideration."
  },
  {
    "id": 291,
    "category": "User Interface",
    "text": "The CK sales team is currently using a sales app in Lightning Experience. CK is planning a Salesforce mobile app rollout next month to increase productivity for reps while out in the field. After reviewing the mobile app, the sales operations manager asks about ways to create an enhanced user experience. Which two solutions could an app builder suggest? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Set up different mobile menu configurations for different types of users."
      },
      {
        "letter": "B",
        "text": "Create a custom App Page and assign to the mobile menu."
      },
      {
        "letter": "C",
        "text": "Include Today as a navigation item in the app."
      },
      {
        "letter": "D",
        "text": "Allow mobile users to switch between Lightning and Classic."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "Create a custom App Page and assign to the mobile menu: You can use the Lightning App Builder to build custom mobile app pages (using components and global actions) and add them directly to the Salesforce mobile app navigation menu. Include Today as a navigation item in the app: Adding the \"Today\" page gives mobile sales reps a customized view of their daily tasks, meetings, and key updates, which significantly enhances productivity while in the field."
  },
  {
    "id": 292,
    "category": "User Interface",
    "text": "CK tracks the support level of its customers on the account record page. CK wants to show a text notification on a case record page when the related account is a platinum- level customer. How could an app builder meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Add a rich text area to the Case Lighting page > Set the component visibility of the rich text area to show when the account support level is platinum."
      },
      {
        "letter": "B",
        "text": "Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce component into the page, and assign the layout to platinum cases."
      },
      {
        "letter": "C",
        "text": "Create a text-only Visualforce page > Drag the Visualforce component into the Case page layout > Set its visibility to show when the account support level is platinum."
      },
      {
        "letter": "D",
        "text": "Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to platinum accounts."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_visibility.h tm&type=5"
  },
  {
    "id": 293,
    "category": "User Interface",
    "text": "An app builder has modified a Lightning record page for a case and has added an email button item to the page layout; however, users are NOT seeing the new item on the layout. What are two potential reasons why users are unable to view the item on the Case Lightning record page? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "The page layout includes the case feed component."
      },
      {
        "letter": "B",
        "text": "The email button contains JavaScript."
      },
      {
        "letter": "C",
        "text": "The case page layout also contains custom buttons."
      },
      {
        "letter": "D",
        "text": "The page layout excludes the case feed component."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "multi": true,
    "explanation": "The page layout includes the case feed component: Case Feed alters the standard layout of Case records and replaces standard buttons with feed-based actions. The button won't appear if this layout is active. The email button contains JavaScript: Custom JavaScript buttons or items are not supported in the Lightning Experience, preventing the item from rendering"
  },
  {
    "id": 294,
    "category": "User Interface",
    "text": "An app builder has created a custom object that should be populated in the Global Search results. What step should the app builder take to ensure the results are generated in the Global Search?",
    "options": [
      {
        "letter": "A",
        "text": "Create a custom tab set to Default Off."
      },
      {
        "letter": "B",
        "text": "Create a search layout."
      },
      {
        "letter": "C",
        "text": "Create a custom tab set to Hidden."
      },
      {
        "letter": "D",
        "text": "Create a search filter."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=000314078&type=1&mode=1"
  },
  {
    "id": 295,
    "category": "User Interface",
    "text": "UC created a 'New Task' custom action on the Opportunity object. The action was added to all page layouts in the Mobile & Lightning Actions section. Which Lightning component should the app builder add to the layout to display the action?",
    "options": [
      {
        "letter": "A",
        "text": "Highlights panel"
      },
      {
        "letter": "B",
        "text": "Related record"
      },
      {
        "letter": "C",
        "text": "Related lists"
      },
      {
        "letter": "D",
        "text": "Activities"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components.htm&type= 5"
  },
  {
    "id": 296,
    "category": "User Interface",
    "text": "Service agents at UMS want a more condensed case view. Service agents also want to be able to modify the associated contact and account records from the case page layout on the Lightning record page. Which two components should an app builder use to meet these requirements? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Path"
      },
      {
        "letter": "B",
        "text": "Tabs"
      },
      {
        "letter": "C",
        "text": "Related record"
      },
      {
        "letter": "D",
        "text": "Rich text"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components.htm&type= 5"
  },
  {
    "id": 297,
    "category": "User Interface",
    "text": "An app builder is creating a Lightning record page and has added Mobile & Lightning Actions to the page layout. What two components could be included on the layout to display the actions? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Chatter"
      },
      {
        "letter": "B",
        "text": "Activities"
      },
      {
        "letter": "C",
        "text": "Highlights panel"
      },
      {
        "letter": "D",
        "text": "Path"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "Highlights panel: This component is the primary place to display actions on a Lightning record page. It can show up to 10 actions from the Mobile & Lightning Actions section of the page layout as buttons in the record's header. Activities: In Lightning Experience, the Activities component displays actions related to tasks and events, such as Log a Call, New Task, and New Event. These are also pulled from the Mobile & Lightning Actions section of the page layout."
  },
  {
    "id": 298,
    "category": "User Interface",
    "text": "The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app. What are three things an app builder should do to optimize mobile experience? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Minimize the amount of formula fields and lookup fields to reduce page load time."
      },
      {
        "letter": "B",
        "text": "Create individual customized layouts for different phone operating systems."
      },
      {
        "letter": "C",
        "text": "Use Global Actions to make it easy to perform vital functionality on mobile."
      },
      {
        "letter": "D",
        "text": "Put the most important fields in the compact layout so they are easy to find."
      },
      {
        "letter": "E",
        "text": "Avoid using default field values so that the user is required to fill in all fields on the screen."
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.layouts_optimizing_for_mobile_tips.ht m&type=5"
  },
  {
    "id": 299,
    "category": "User Interface",
    "text": "UMS wants to provide sales console users with an incredible experience, with the most- used components easily accessible at all times. What solution can enable reps to see and access these components from anywhere within the app without leaving the page where the team is working?",
    "options": [
      {
        "letter": "A",
        "text": "Global actions"
      },
      {
        "letter": "B",
        "text": "Utility bar"
      },
      {
        "letter": "C",
        "text": "Favorites"
      },
      {
        "letter": "D",
        "text": "Home page"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.dev_apps_lightning_utilities.htm&type= 5"
  },
  {
    "id": 300,
    "category": "User Interface",
    "text": "On the Account Lightning record page, users need to see 10 fields and the ability to sort and wrap text on their Related Lists. What Related List type would the app builder select for the Related List Lightning component?",
    "options": [
      {
        "letter": "A",
        "text": "Basic List"
      },
      {
        "letter": "B",
        "text": "List View"
      },
      {
        "letter": "C",
        "text": "List Class"
      },
      {
        "letter": "D",
        "text": "Enhanced List"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=release- notes.rn_lex_enhanced_related_lists.htm&release=224&type=5"
  },
  {
    "id": 301,
    "category": "User Interface",
    "text": "At UMS, there is a single Lightning record page for the Celestial Bodies custom object; however, there is a Lightning component the app builder wants to restrict to mobile app users. What feature in the Lightning app builder should be utilized?",
    "options": [
      {
        "letter": "A",
        "text": "Highlights panel"
      },
      {
        "letter": "B",
        "text": "Component visibility filter"
      },
      {
        "letter": "C",
        "text": "Related list quick links"
      },
      {
        "letter": "D",
        "text": "Chatter feed"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_visibility.h tm&type=5"
  },
  {
    "id": 302,
    "category": "User Interface",
    "text": "UMS's sales team has been struggling to enter data on mobile since rollout; the team dislikes scrolling through all of the fields to input only the necessary data. How could the app builder solve this with minimal impact on desktop users?",
    "options": [
      {
        "letter": "A",
        "text": "Update the training documentation with better screenshots."
      },
      {
        "letter": "B",
        "text": "Deselect the phone radio button on the Lightning record page assignment."
      },
      {
        "letter": "C",
        "text": "Filter components by device using Form Factor."
      },
      {
        "letter": "D",
        "text": "Reorder the fields to make sense for the reps when in the field."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_visibility.h tm&type=5"
  },
  {
    "id": 303,
    "category": "User Interface",
    "text": "UC wants to dynamically display a component on a Lightning record page for an account based on criteria about the related contact. What solution should an app builder use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Hide the component behind a tab on the page layout."
      },
      {
        "letter": "B",
        "text": "Set the component visibility to display based on an advanced filter type, using the contact field(s) to define the dynamic criteria."
      },
      {
        "letter": "C",
        "text": "Set the filter type on the component visibility to display based on user permissions, using custom permission to define the dynamic criteria."
      },
      {
        "letter": "D",
        "text": "Add a related record component to the page layout."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components_visibility.h tm&type=5"
  },
  {
    "id": 304,
    "category": "User Interface",
    "text": "UC wants to provide users with a process to create Opportunity records related to an Account. Many fields can be populated based on the Account record. Some fields require input from the user. What should an app builder configure to meet the requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Quick Action on the Opportunity object"
      },
      {
        "letter": "B",
        "text": "Quick Action on the Account object"
      },
      {
        "letter": "C",
        "text": "Process Builder triggered from Account update"
      },
      {
        "letter": "D",
        "text": "Process Builder triggered from Opportunity update"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.actions_overview_object_specific.ht m&type=5"
  },
  {
    "id": 305,
    "category": "User Interface",
    "text": "An app builder installed a custom Lightning component from AppExchange and has deployed My Domain. What should be done next in order to configure the component for use in a record page?",
    "options": [
      {
        "letter": "A",
        "text": "Edit a record page using App Manager > Drag the component onto the page."
      },
      {
        "letter": "B",
        "text": "Edit a record page using the Page Layout editor > Drag the Visualforce component onto the page."
      },
      {
        "letter": "C",
        "text": "Edit a record page using the Page Layout editor > Drag the component onto the page."
      },
      {
        "letter": "D",
        "text": "Edit a record page using Lightning App Builder > Drag the component onto the page."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_overview.htm& type=5"
  },
  {
    "id": 306,
    "category": "User Interface",
    "text": "After utilizing the Lightning Object Creator to create a new object, its fields, and to insert all of the data, an app builder now needs to set up the Lightning Record Page. Which component should the app builder have on their Lightning Record Page to see all of the fields from the page layout?",
    "options": [
      {
        "letter": "A",
        "text": "Record Detail"
      },
      {
        "letter": "B",
        "text": "Path"
      },
      {
        "letter": "C",
        "text": "Quip"
      },
      {
        "letter": "D",
        "text": "Recommendations"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.lightning_page_components.htm&type= 5"
  },
  {
    "id": 307,
    "category": "User Interface",
    "text": "DreamHouse Realty is building a custom Lightning app to track its expanding solar water collection business. The Lightning app currently contains a custom Lightning record page with standard components. From which two resources should an app builder get custom components to bring into the new Lightning app? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "AppExchange"
      },
      {
        "letter": "B",
        "text": "Visualforce"
      },
      {
        "letter": "C",
        "text": "Import Wizard"
      },
      {
        "letter": "D",
        "text": "Apex Code"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "Custom Lightning components for a Lightning app can come from the AppExchange (pre-built managed or unmanaged component packages) or be built in- house with Apex Code (Lightning component framework / LWC). Visualforce and the Import Wizard are not sources of Lightning components."
  },
  {
    "id": 308,
    "category": "User Interface",
    "text": "UC has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices. What can be the issue?",
    "options": [
      {
        "letter": "A",
        "text": "The record page template is unable to support mobile devices."
      },
      {
        "letter": "B",
        "text": "The component has been developed for Desktop Pages."
      },
      {
        "letter": "C",
        "text": "The record page needs to be activated."
      },
      {
        "letter": "D",
        "text": "The component needs to be activated."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "Desktop-Only Design: Custom Lightning components from the AppExchange are often built to be supported exclusively on desktop interfaces, meaning they simply will not render when accessed via the Salesforce mobile app. Not Page Activation: Since the Lightning page itself successfully displays on mobile, the page and template are already activated and fully supported."
  },
  {
    "id": 309,
    "category": "User Interface",
    "text": "Where can an app builder add components to the utility bar?",
    "options": [
      {
        "letter": "A",
        "text": "Lightning Record Page"
      },
      {
        "letter": "B",
        "text": "Lightning App Builder"
      },
      {
        "letter": "C",
        "text": "App Manager"
      },
      {
        "letter": "D",
        "text": "Developer Console"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "An app builder can add components to the utility bar through the App Manager. This is done by editing the Lightning App in the App Manager and then configuring the utility bar to add the desired components. https://help.salesforce.com/s/articleView?id=sf.apps_lightning_utilities.htm&type=5"
  },
  {
    "id": 310,
    "category": "User Interface",
    "text": "DreamHouse Realty (DHR) recently acquired CK, a company that is still on Salesforce Classic. DHR is keeping the CK Salesforce org; however, it will migrate this org to Lightning Experience. Where should the app builder find prebuilt resources to help with this project and overall adoption?",
    "options": [
      {
        "letter": "A",
        "text": "Import Wizard"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "AppExchange"
      },
      {
        "letter": "D",
        "text": "Lightning Object Creator"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "The Salesforce AppExchange is the premier marketplace where app builders can discover prebuilt solutions, apps, and Lightning components. It is the ideal place to find resources that specifically assist with migrating your organization to Lightning Experience and driving overall adoption."
  },
  {
    "id": 311,
    "category": "User Interface",
    "text": "Managers at Universal Containers want a quick way to create additional accounts to form a hierarchy from a parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.",
    "options": [
      {
        "letter": "A",
        "text": "Custom Global Quick Action"
      },
      {
        "letter": "B",
        "text": "Custom Button on Account"
      },
      {
        "letter": "C",
        "text": "Custom action on Account"
      },
      {
        "letter": "D",
        "text": "Custom link on Account"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "A custom action on Account can be used to create additional accounts from a parent account record. A custom action can have predefined values for certain fields based on the parent record. A custom global action can be used to create records that do not have any relationship with other objects. A custom link on Account can be used to execute JavaScript or link to an external URL."
  },
  {
    "id": 312,
    "category": "User Interface",
    "text": "Universal containers wants to display the real time stock price for each account on the account record page. How should an app builder implement this request?",
    "options": [
      {
        "letter": "A",
        "text": "Add a dynamic report to the page layout"
      },
      {
        "letter": "B",
        "text": "Create a Lightning web component"
      },
      {
        "letter": "C",
        "text": "Install a solution from the appexchange"
      },
      {
        "letter": "D",
        "text": "Build a visual flow that uses API calls"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "One of the easiest ways to display real-time stock price for each account is to install a solution from the AppExchange, such as Stock Price Lightning Component3. This component can be added to any record page using the Lightning App Builder."
  },
  {
    "id": 313,
    "category": "User Interface",
    "text": "A sales manager has noticed that reps continue to input contacts directly in their phone instead of adding them to Salesforce. What should an app builder recommend to ensure the data makes it into Salesforce?",
    "options": [
      {
        "letter": "A",
        "text": "Enable in-app notifications every time a contact is created."
      },
      {
        "letter": "B",
        "text": "Allow Salesforce to import Contacts from mobile device Contact lists."
      },
      {
        "letter": "C",
        "text": "Enable offline create, edit, and delete in Salesforce for Android and iOS."
      },
      {
        "letter": "D",
        "text": "Allow users to relate a contact to multiple accounts."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "To ensure sales reps input contacts into Salesforce rather than their personal devices: C. Enable offline create, edit, and delete in Salesforce for Android and iOS. This feature allows sales reps to enter contact information directly into the Salesforce Mobile App even when they are offline, which syncs back to Salesforce once connectivity is restored. Steps to enable offline capabilities: Navigate to Setup # Mobile Administration # Salesforce Mobile App # Offline Settings. Configure offline settings to allow for creating, editing, and deleting records. Ensure that the Contact object is available for offline access. This functionality encourages reps to use Salesforce directly by mitigating connectivity constraints. For implementation details, refer to Salesforce Mobile App Offline."
  },
  {
    "id": 314,
    "category": "User Interface",
    "text": "Cloud Kicks wants to display 12 key fields at once in a separate section at the top of opportunity records on the desktop. Which component should an app builder add to the record page to enable this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "Highlights Panel"
      },
      {
        "letter": "B",
        "text": "Path"
      },
      {
        "letter": "C",
        "text": "Custom Lightning Web Component"
      },
      {
        "letter": "D",
        "text": "Accordion"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "The Highlights Panel in the Lightning Record Page displays key fields and record actions prominently at the top of the page, exactly as described in the requirement. Why A (Highlights Panel) is correct:Exact Extract:\"The highlights panel displays important fields and key record actions at the top of the record page in Lightning Experience.\" \u2014 Salesforce Help | Highlights Panel Why not B:Path is used to visualize progress through stages (e.g., Opportunity Stage), not display multiple fields. Why not C:A custom component is unnecessary since the standard Highlights Panel fulfills the requirement. Why not D:Accordion is used to organize information in collapsible sections, not display key fields at the top. References: Salesforce Help | Highlights Panel Salesforce Platform App Builder Exam Guide | User Interface"
  },
  {
    "id": 315,
    "category": "User Interface",
    "text": "Universal Containers has a custom object that holds over 100 fields. The app builder wants to break up the fields into separate tabs on the lightning page. Which Lightning component is most appropriate to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Highlights panel"
      },
      {
        "letter": "B",
        "text": "Record detail"
      },
      {
        "letter": "C",
        "text": "Field section"
      },
      {
        "letter": "D",
        "text": "Accordion"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "The \"Accordion\" Lightning component is designed to break up content into collapsible sections. This component would be suitable for managing the visibility of large numbers of fields by grouping them into separate tabs or sections that can expand and collapse. This makes navigation easier and declutters the interface. A: Highlights panel is used for displaying key record information at the top of the page and is not designed for managing multiple fields. B: Record detail displays all fields on a single layout, which does not suit the requirement to break up the fields. C: Field section does not exist as a standard Lightning component. Reference: Accordion Component in the Lightning Component Library"
  },
  {
    "id": 316,
    "category": "User Interface",
    "text": "Universal Containers uses the Salesforce mobile app. Because of the small screen, users currently have to scroll down the page to view the information for an account record based on criteria about the related contact. Which solution should an app builder use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Set the filter type on the component visibility to display based on user permissions, using custom permissions to define the dynamic criteria."
      },
      {
        "letter": "B",
        "text": "Add a related record component to the page layout."
      },
      {
        "letter": "C",
        "text": "Set the component visibility to display based on an advanced filter type, using the contact fields to define the dynamic criteria."
      },
      {
        "letter": "D",
        "text": "Hide the component behind a tab on the page layout."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "Component visibility filters can use fields on a related record only with the Advanced filter type in the Lightning App Builder. Setting component visibility with an advanced filter based on the related contact's fields displays the component only when the criteria are met, so users do not have to scroll. Standard filters only work on fields of the record itself, and permission-based filters or tabs do not address criteria on the related contact."
  },
  {
    "id": 317,
    "category": "User Interface",
    "text": "Which three standard component types are available in the Lightning App Builder? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Plain text"
      },
      {
        "letter": "B",
        "text": "Rich text"
      },
      {
        "letter": "C",
        "text": "Filter list"
      },
      {
        "letter": "D",
        "text": "Report details"
      },
      {
        "letter": "E",
        "text": "Recent items"
      }
    ],
    "answer": [
      "B",
      "D",
      "E"
    ],
    "multi": true,
    "explanation": "In the Lightning App Builder, the following standard components can be used to enhance the functionality of Lightning pages: B. Rich text: Allows the inclusion of formatted text, links, and images on a page. D. Report details: Enables embedding of specific report details directly on a page. E. Recent items: Displays a list of recently accessed items relevant to the user. Steps to add these components: Open the Lightning App Builder via Setup # Edit Page or when creating a new Lightning page. Drag and drop the Rich text, Report details, and Recent items components from the standard components section onto the page layout. Configure each component as needed (e.g., selecting a specific report for the Report details component). For more on using these components, refer to Salesforce's guide on Standard Lightning Components."
  },
  {
    "id": 318,
    "category": "App Deployment",
    "text": "UC is piloting new features in an existing sandbox and wants to prevent outbound email sends during testing. What should the app builder do to meet the requirement? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Email relay to the configured host enabled."
      },
      {
        "letter": "B",
        "text": "Email deliverability set to system email only."
      },
      {
        "letter": "C",
        "text": "Email deliverability set to no access."
      },
      {
        "letter": "D",
        "text": "Email configured for SMTP authentication."
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.data_sandbox_email_deliverability.htm &type=5"
  },
  {
    "id": 319,
    "category": "App Deployment",
    "text": "An app builder created multiple custom fields, page layouts, and reports in the sandbox and added them to a change set. After the change set was deployed to production, the reports were NOT deployed. What should the app builder do? Choose only ONE best answer.",
    "options": [
      {
        "letter": "A",
        "text": "Move the reports from the Unfiled Public Reports folder and add them to a new change set."
      },
      {
        "letter": "B",
        "text": "Move the reports to the Unfiled Public Reports folder and add them to a new change set."
      },
      {
        "letter": "C",
        "text": "Add the reports to an unmanaged package and install the unmanaged package into production."
      },
      {
        "letter": "D",
        "text": "Recreate the reports in production. Reports are not supported in change sets."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.changesets_about_components.htm&ty pe=5"
  },
  {
    "id": 320,
    "category": "App Deployment",
    "text": "An app builder wants to configure a sandbox environment for users to perform user acceptance testing of the latest features from developers. The sandbox should include about 500MB worth of data configured via a template. Also, the sandbox should be refreshed weekly. Which sandbox meets the requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Full sandbox"
      },
      {
        "letter": "B",
        "text": "Developer Pro sandbox"
      },
      {
        "letter": "C",
        "text": "Developer sandbox"
      },
      {
        "letter": "D",
        "text": "Partial Copy sandbox"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&lan guage=en_US&type=5"
  },
  {
    "id": 321,
    "category": "App Deployment",
    "text": "Which two are key considerations when using unmanaged packages? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "A namespace is required to create an Unmanaged package."
      },
      {
        "letter": "B",
        "text": "The person who created the Unmanaged package has no control over the installed components."
      },
      {
        "letter": "C",
        "text": "A namespace is not required to create an Unmanaged package."
      },
      {
        "letter": "D",
        "text": "The person who created the Unmanaged package can change or upgrade installed components."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "multi": true,
    "explanation": "A namespace is not required to create an Unmanaged package. The person who created the Unmanaged package has no control over the installed components. Unmanaged packages are typically used to distribute open-source projects or application templates to provide developers with the basic building blocks to get started. Once installed in an org, the components can be edited and customized to suit the needs of the recipient org, and the original developer does not retain any control over these components."
  },
  {
    "id": 322,
    "category": "App Deployment",
    "text": "UC wants to test code against a subset of production data that is under 5GB. Additionally, UC wants to refresh this sandbox every weekend. Which type of sandbox should be used to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Partial Copy"
      },
      {
        "letter": "B",
        "text": "Developer"
      },
      {
        "letter": "C",
        "text": "Developer Pro"
      },
      {
        "letter": "D",
        "text": "Full Copy"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&lan guage=en_US&type=5"
  },
  {
    "id": 323,
    "category": "App Deployment",
    "text": "CK increased its Salesforce development efforts so that it now has multiple custom development efforts happening in parallel. CK's developers and admins perform the customizations and have complained that working in one sandbox has led to many problems. They requested a solution in which they can work in at least 20 different sandboxes at once, all starting with the same base configuration and data. What should an app builder use to solve the problem?",
    "options": [
      {
        "letter": "A",
        "text": "Partial copy sandboxes"
      },
      {
        "letter": "B",
        "text": "Sandbox refreshes"
      },
      {
        "letter": "C",
        "text": "Sandbox cloning"
      },
      {
        "letter": "D",
        "text": "Full copy sandboxes"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_clone.htm&type=5"
  },
  {
    "id": 324,
    "category": "App Deployment",
    "text": "An app builder at CK has been working on changes to a custom Shoe Sales app in a sandbox and is ready to deploy their changes to production with a change set. Part of the work included updates to a permission set. What should the app builder take into consideration when deploying the change set to production?",
    "options": [
      {
        "letter": "A",
        "text": "Changes to field-level security in the permission set will not be applied."
      },
      {
        "letter": "B",
        "text": "The existing permission set will be completely overwritten."
      },
      {
        "letter": "C",
        "text": "The deployed permission set will only contain changes related to the change set."
      },
      {
        "letter": "D",
        "text": "The deployed permission set will merge with the existing permission set."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "When a permission set is deployed via a change set (API version 40.0 and later), the permission set in the destination org is completely overwritten by the incoming version. Any settings that were added to the permission set only in production will be lost, so the app builder should review and reapply them if needed."
  },
  {
    "id": 325,
    "category": "App Deployment",
    "text": "An app builder is asked to create a sandbox for a developer. The developer will be testing robust sample data sets and will need to store up to 250 MB of data. The sandbox will be refreshed each day. Which type of sandbox should the app builder create?",
    "options": [
      {
        "letter": "A",
        "text": "Partial copy sandbox"
      },
      {
        "letter": "B",
        "text": "Full sandbox"
      },
      {
        "letter": "C",
        "text": "Developer pro sandbox"
      },
      {
        "letter": "D",
        "text": "Developer sandbox"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&ty pe=5"
  },
  {
    "id": 326,
    "category": "App Deployment",
    "text": "What should an app builder do to upgrade an unmanaged package that has been installed into production?",
    "options": [
      {
        "letter": "A",
        "text": "Uninstall the current version and install the new version."
      },
      {
        "letter": "B",
        "text": "Install the new version to a Developer org then deploy to production."
      },
      {
        "letter": "C",
        "text": "Click the update link on the Installed Package page."
      },
      {
        "letter": "D",
        "text": "Install the new version in a sandbox then deploy to production."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "In Salesforce, unmanaged packages are not upgradeable in the same way managed packages are. When you install an unmanaged package, the components are essentially \"unpacked\" into your organization and become independent of the original package. Therefore, to \"upgrade\" to a newer version, you must first uninstall the existing version to clear out the old components and then install the new package version."
  },
  {
    "id": 327,
    "category": "App Deployment",
    "text": "UC deployed an app in a large change set from a Developer Sandbox to a Developer Pro Sandbox used for testing. After testing, changes had to be made to several of the components in the change set. How should an app builder move the new changes to the Developer Pro Sandbox?",
    "options": [
      {
        "letter": "A",
        "text": "Refresh the test sandbox and re-deploy the change set."
      },
      {
        "letter": "B",
        "text": "Clone the change set and re-deploy."
      },
      {
        "letter": "C",
        "text": "Rename the change set, add the changes and re-deploy."
      },
      {
        "letter": "D",
        "text": "Update the change set and re-deploy."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "The app builder should update the change set and re-deploy. This allows for the inclusion of the new changes made to the components after testing in the Developer Sandbox before they are moved to the Developer Pro Sandbox."
  },
  {
    "id": 328,
    "category": "App Deployment",
    "text": "An app builder at NTO created a sandbox template for Accounts, Projects, and Project Milestones to reconfigure some flows for the project management app. Which type of testing environment should the app builder create?",
    "options": [
      {
        "letter": "A",
        "text": "Developer"
      },
      {
        "letter": "B",
        "text": "Partial Copy"
      },
      {
        "letter": "C",
        "text": "Developer Pro"
      },
      {
        "letter": "D",
        "text": "Scratch Org"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&ty pe=5"
  },
  {
    "id": 329,
    "category": "App Deployment",
    "text": "An app builder installs an unmanaged package in a full copy sandbox that is an exact match for production, and now they are ready to install it in production. When the app builder attempts to install the package in production, it fails. Why did the package fail to install?",
    "options": [
      {
        "letter": "A",
        "text": "Incorrect license types"
      },
      {
        "letter": "B",
        "text": "Package features not compatible"
      },
      {
        "letter": "C",
        "text": "Object limits exceeded"
      },
      {
        "letter": "D",
        "text": "Apex unit test failures"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "When an unmanaged package containing Apex code is installed into production, the Apex unit tests run against production data and the installation fails if they fail. Even though the full copy sandbox matched production, differences in live data can cause test failures in production, which is the most likely reason the installation fails."
  },
  {
    "id": 330,
    "category": "App Deployment",
    "text": "An app builder at UMS has been working on a new custom app in a sandbox that has been upgraded to the next major Salesforce version, and their production instance is still on the current Salesforce version. The development is complete and they are ready to deploy a change set. What should the app builder consider when planning the deployment?",
    "options": [
      {
        "letter": "A",
        "text": "It will fail if there is a feature only available in the next version."
      },
      {
        "letter": "B",
        "text": "The change set components will be upgraded to the next version in production."
      },
      {
        "letter": "C",
        "text": "The change set will be automatically deployed when production is upgraded."
      },
      {
        "letter": "D",
        "text": "The deployment is not possible due to different versions."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "A change set deployed from a sandbox on a newer Salesforce version to an org on an older version will fail if it contains any component or feature that is only available in the newer version. Deployments are still possible between orgs on different versions as long as no new-version-only features are included."
  },
  {
    "id": 331,
    "category": "App Deployment",
    "text": "At UC, each admin and developer use a separate developer pro sandbox. Configuration and code are then migrated to a partial data sandbox for combination and initial testing. Once approved the configuration and code are then migrated to a full copy sandbox for final load and regression testing before going to production. When should the full copy sandbox be refreshed?",
    "options": [
      {
        "letter": "A",
        "text": "After each major release to production."
      },
      {
        "letter": "B",
        "text": "After each push from the partial data sandbox."
      },
      {
        "letter": "C",
        "text": "After a new user is added to production."
      },
      {
        "letter": "D",
        "text": "After user acceptance testing is complete."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.create_test_instance.htm&type=5"
  },
  {
    "id": 332,
    "category": "App Deployment",
    "text": "A production org includes custom objects containing confidential information. A sandbox is needed that includes data records, excludes all of the confidential objects, and can be refreshed weekly. What steps should an app builder take to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Full Copy Sandbox and use a sandbox template."
      },
      {
        "letter": "B",
        "text": "Create a Developer Pro Sandbox and schedule Data Loader to download selected object data weekly."
      },
      {
        "letter": "C",
        "text": "Create a Developer Sandbox and schedule Data Loader to download selected object data weekly."
      },
      {
        "letter": "D",
        "text": "Create a Partial Copy Sandbox and use a sandbox template."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&ty pe=5"
  },
  {
    "id": 333,
    "category": "App Deployment",
    "text": "UC is adding drone delivery to service offerings, and the developer has written and tested code prior to deployment to production. The change set is ready to go. The development window will occur when the developer is on vacation. What can the app builder do to ensure a smooth deployment to production?",
    "options": [
      {
        "letter": "A",
        "text": "Remove Apex classes from inbound change set."
      },
      {
        "letter": "B",
        "text": "Validate the inbound change set."
      },
      {
        "letter": "C",
        "text": "Use a metadata package set."
      },
      {
        "letter": "D",
        "text": "Validate the outbound change set."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.changesets_inbound_test_deploy.ht m&type=5"
  },
  {
    "id": 334,
    "category": "App Deployment",
    "text": "An app builder has created a change set and deployed a report from their development sandbox to a partial sandbox for User Acceptance Testing. When the app builder runs the report, no data is returned. What can be a reason for this?",
    "options": [
      {
        "letter": "A",
        "text": "Reports have to be deployed with Salesforce DX."
      },
      {
        "letter": "B",
        "text": "Reports have to be manually re-created in each environment."
      },
      {
        "letter": "C",
        "text": "Data is deployed when added to a change sets."
      },
      {
        "letter": "D",
        "text": "Data is unable to be deployed with change sets."
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.changesets.htm&type=5"
  },
  {
    "id": 335,
    "category": "App Deployment",
    "text": "The developer at UC wants to test code in a sandbox environment. In order to ensure the code works properly, the sandbox needs to have at least half a gigabyte of data. The sandbox will need to be refreshed after each three-day sprint. What type of sandbox should the App Builder provision to the developer?",
    "options": [
      {
        "letter": "A",
        "text": "Partial Data"
      },
      {
        "letter": "B",
        "text": "Full Copy"
      },
      {
        "letter": "C",
        "text": "Developer Pro"
      },
      {
        "letter": "D",
        "text": "Developer"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&ty pe=5"
  },
  {
    "id": 336,
    "category": "App Deployment",
    "text": "What are two reasons to create an unmanaged package? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Publishing an application for sale on the AppExchange"
      },
      {
        "letter": "B",
        "text": "Distributing open-source projects on the AppExchange"
      },
      {
        "letter": "C",
        "text": "Distributing upgradeable components to other Salesforce orgs"
      },
      {
        "letter": "D",
        "text": "Deploying from a Developer Edition environment"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "multi": true,
    "explanation": "https://www.crmscience.com/single-post/benefits-of-creating- unmanaged- packages"
  },
  {
    "id": 337,
    "category": "App Deployment",
    "text": "An app builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality is immediately available to users. What should the app builder take into consideration when planning the deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Verify there is an Apex test that provides test coverage for the Flow."
      },
      {
        "letter": "B",
        "text": "Verify there is a static resource that provides test coverage for the Flow."
      },
      {
        "letter": "C",
        "text": "Include the Process Builder calling the Flow in the deployment."
      },
      {
        "letter": "D",
        "text": "Include the profiles that access the flow in the deployment."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=flow_distribute_deploy_active.htm&type= 5"
  },
  {
    "id": 338,
    "category": "App Deployment",
    "text": "Properly installing managed packages helps prevent conflicts with customizations made by customers and partners. What functionality should be used to set up packages?",
    "options": [
      {
        "letter": "A",
        "text": "Namespace"
      },
      {
        "letter": "B",
        "text": "Help setting"
      },
      {
        "letter": "C",
        "text": "Description"
      },
      {
        "letter": "D",
        "text": "Allow sharing"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://developer.salesforce.com/docs/atlas.en- us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_plan_namespaces.htm"
  },
  {
    "id": 339,
    "category": "App Deployment",
    "text": "UC has deployed custom tabs to production via change sets, without including the profile settings. What is true about the visibility of custom tabs in Enterprise Edition?",
    "options": [
      {
        "letter": "A",
        "text": "Custom tabs are default off for all users."
      },
      {
        "letter": "B",
        "text": "Custom tabs are default on for all users."
      },
      {
        "letter": "C",
        "text": "Custom tabs are NOT deployed."
      },
      {
        "letter": "D",
        "text": "Custom tabs are hidden for all users."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "When custom tabs are deployed without profile settings, the tab visibility defaults to 'Default Off' for all users - the tabs are deployed successfully, but no users can see them until an administrator sets the tabs to Default On for the relevant profiles."
  },
  {
    "id": 340,
    "category": "App Deployment",
    "text": "UMS has made a great app that leadership wants to share with the world for free via AppExchange. What should an app builder consider about the type of package when uploading to AppExchange?",
    "options": [
      {
        "letter": "A",
        "text": "Managed packages provide intellectual property protection on Apex code."
      },
      {
        "letter": "B",
        "text": "Managed packages need a per-user charge on AppExchange."
      },
      {
        "letter": "C",
        "text": "Unmanaged packages can be set up to prevent user customizations."
      },
      {
        "letter": "D",
        "text": "Unmanaged packages allow for patches on programmatic changes but not Apex."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://developer.salesforce.com/docs/atlas.en- us.pkg1_dev.meta/pkg1_dev/packaging_protect_ip.htm"
  },
  {
    "id": 341,
    "category": "App Deployment",
    "text": "Due to the complexity of the UC sandbox release schedule and requirements, it is advised that change sets are used as often as possible to migrate from one environment to another. Which three common items can an app builder move when using a change set? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Web-to-lead"
      },
      {
        "letter": "B",
        "text": "Standard fields"
      },
      {
        "letter": "C",
        "text": "Custom object"
      },
      {
        "letter": "D",
        "text": "Apex class"
      },
      {
        "letter": "E",
        "text": "Custom field"
      }
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.changesets_about_components.htm &type=5"
  },
  {
    "id": 342,
    "category": "App Deployment",
    "text": "An app builder is preparing to deploy a new app from the sandbox to production using change sets. What two considerations should an app builder keep in mind during this process? Choose 2 answers",
    "options": [
      {
        "letter": "A",
        "text": "Change sets do not include all components and may have to perform some changes manually."
      },
      {
        "letter": "B",
        "text": "Users should be logged out of production when receiving inbound change sets."
      },
      {
        "letter": "C",
        "text": "Salesforce Connect automatically establishes a link between environments."
      },
      {
        "letter": "D",
        "text": "Transactions will revert if the deployment errors."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.changesets_about_components.htm &type=5 https://help.salesforce.com/s/articleView?id=sf.changesets_best_practices.htm&type =5"
  },
  {
    "id": 343,
    "category": "App Deployment",
    "text": "UC have changes that need to be deployed from Sandbox to Production. Where should an app builder look to verify that a Change Set can be deployed?",
    "options": [
      {
        "letter": "A",
        "text": "Inbound Change Sets"
      },
      {
        "letter": "B",
        "text": "Outbound Change Sets"
      },
      {
        "letter": "C",
        "text": "Deployment Settings"
      },
      {
        "letter": "D",
        "text": "Deployment Status"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.changesets_about_inbound.htm&type= 5"
  },
  {
    "id": 344,
    "category": "App Deployment",
    "text": "CK recently implemented the application lifecycle management process to its release management strategy. Which category handles bug fixes and simple changes?",
    "options": [
      {
        "letter": "A",
        "text": "Rollback"
      },
      {
        "letter": "B",
        "text": "Major"
      },
      {
        "letter": "C",
        "text": "Patch"
      },
      {
        "letter": "D",
        "text": "Minor"
      }
    ],
    "answer": [
      "C"
    ],
    "multi": false,
    "explanation": "https://trailhead.salesforce.com/en/content/learn/modules/application- lifecycle- and-development-models/learn-the-basics-of-release-management"
  },
  {
    "id": 345,
    "category": "App Deployment",
    "text": "An app builder needs to deploy a new account detail page layout from sandbox to production. Which three components should an app builder include in the Change Set to ensure it deploys successfully and visually as expected? Choose 3 answers",
    "options": [
      {
        "letter": "A",
        "text": "Custom fields"
      },
      {
        "letter": "B",
        "text": "Lightning App Builder"
      },
      {
        "letter": "C",
        "text": "System administrator profile"
      },
      {
        "letter": "D",
        "text": "Custom actions"
      },
      {
        "letter": "E",
        "text": "Detail page layout"
      }
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "multi": true,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.changesets_about_components.htm &type=5"
  },
  {
    "id": 346,
    "category": "App Deployment",
    "text": "An app builder has deployed a change set from a sandbox to production. There is a long delay in the deployment. What can be causing the delay?",
    "options": [
      {
        "letter": "A",
        "text": "Profiles are included in the change set."
      },
      {
        "letter": "B",
        "text": "A field type change is included in the change set."
      },
      {
        "letter": "C",
        "text": "Roles are included in the change set."
      },
      {
        "letter": "D",
        "text": "Dependent fields are included in the change set."
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/articleView?id=sf.changesets_best_practices.htm&type=5"
  },
  {
    "id": 347,
    "category": "App Deployment",
    "text": "An app builder needs a custom solution and is considering using either AppExchange or their local developer community. Ease of updates is the primary consideration. What should the app builder consider?",
    "options": [
      {
        "letter": "A",
        "text": "A managed package from AppExchange"
      },
      {
        "letter": "B",
        "text": "An open-source unmanaged package"
      },
      {
        "letter": "C",
        "text": "An open-source custom development"
      },
      {
        "letter": "D",
        "text": "An unmanaged package from AppExchange"
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.distribution_upgrading_packages.ht m&type=5"
  },
  {
    "id": 348,
    "category": "App Deployment",
    "text": "DreamHouse Realty is rethinking its sandbox utilization strategy after acquiring CK. The Salesforce COE already utilizes a partial and a full sandbox, which it refreshes on its own regular schedules. Teams are expanding and have to begin each of their small projects in a sandbox before committing to the larger pool for collaborative testing while still keeping costs down. What type of sandbox should each team member use?",
    "options": [
      {
        "letter": "A",
        "text": "Full sandbox"
      },
      {
        "letter": "B",
        "text": "Partial sandbox"
      },
      {
        "letter": "C",
        "text": "Developer pro sandbox"
      },
      {
        "letter": "D",
        "text": "Developer sandbox"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&ty pe=5"
  },
  {
    "id": 349,
    "category": "App Deployment",
    "text": "A recently refreshed partial sandbox at CK has no data in the custom object Fresh_Kicks__c. Checking in production, there are two million rows of data in the object. What can be a reason the data is missing?",
    "options": [
      {
        "letter": "A",
        "text": "The selected objects in the sandbox template."
      },
      {
        "letter": "B",
        "text": "The sandbox is still populating data."
      },
      {
        "letter": "C",
        "text": "The sandbox was refreshed too early."
      },
      {
        "letter": "D",
        "text": "The partial sandbox is at capacity."
      }
    ],
    "answer": [
      "A"
    ],
    "multi": false,
    "explanation": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_templates.htm&type=5"
  },
  {
    "id": 350,
    "category": "App Deployment",
    "text": "An app builder needs a custom solution and is considering using either AppExchange or their local developer community. The app builder wants to minimize the need for manual maintenance. What should the app builder consider?",
    "options": [
      {
        "letter": "A",
        "text": "An open-source custom development"
      },
      {
        "letter": "B",
        "text": "An unmanaged package from AppExchange"
      },
      {
        "letter": "C",
        "text": "An open-source unmanaged package"
      },
      {
        "letter": "D",
        "text": "A managed package from AppExchange"
      }
    ],
    "answer": [
      "D"
    ],
    "multi": false,
    "explanation": "Managed packages from the AppExchange are designed to provide automatic updates, upgrades, and vendor support, minimizing the need for ongoing manual maintenance by the customer. Why D (Managed Package from AppExchange) is correct:Exact Extract:\"Managed packages are maintained by the provider and can be automatically upgraded. They're ideal for apps distributed and maintained through AppExchange.\" \u2014 Salesforce Help | Managed and Unmanaged Packages OverviewManaged packages allow publishers to push automatic updates and ensure compatibility with future Salesforce releases \u2014 minimizing maintenance effort. Why D (Managed Package from AppExchange) is correct:Exact Extract:\"Managed packages are maintained by the provider and can be automatically upgraded. They're ideal for apps distributed and maintained through AppExchange.\" \u2014 Salesforce Help | Managed and Unmanaged Packages OverviewManaged packages allow publishers to push automatic updates and ensure compatibility with future Salesforce releases \u2014 minimizing maintenance effort. Why not A (Open-source custom development):Open-source code must be maintained internally by developers. Why not B (Unmanaged package):Unmanaged packages are customer-controlled and do not receive automatic updates. Why not C:Open-source unmanaged packages combine the same issue \u2014 no automated support or maintenance. References: Salesforce Help | Managed and Unmanaged Packages Overview Salesforce Platform App Builder Exam Guide | App Deployment"
  },
  {
    "id": 351,
    "category": "App Deployment",
    "text": "An app builder at Northern Trail Outfitters created a sandbox template for Accounts, Projects, and Project Milestones to reconfigure some flows for the project management app. Which type of testing environment should the app builder create?",
    "options": [
      {
        "letter": "A",
        "text": "Developer Pro"
      },
      {
        "letter": "B",
        "text": "Partial Copy"
      },
      {
        "letter": "C",
        "text": "Developer"
      },
      {
        "letter": "D",
        "text": "Scratch Org"
      }
    ],
    "answer": [
      "B"
    ],
    "multi": false,
    "explanation": "A Partial Copy Sandbox is designed for testing and development with a subset of production data based on a sandbox template. Since the question mentions that a sandbox template was created for certain objects (Accounts, Projects, Project Milestones), the environment must support template-based sampling, which only Partial Copy and Full sandboxes do. Why B (Partial Copy) is correct:Exact Extract:\"A Partial Copy sandbox includes your organization's metadata and a sample of your production data as defined by a sandbox template. Use it for quality assurance tasks, integration testing, and user training.\" \u2014 Salesforce Help | Sandbox Types and TemplatesDeveloper and Developer Pro sandboxes do not support sandbox templates. Why B (Partial Copy) is correct:Exact Extract:\"A Partial Copy sandbox includes your organization's metadata and a sample of your production data as defined by a sandbox template. Use it for quality assurance tasks, integration testing, and user training.\" \u2014 Salesforce Help | Sandbox Types and TemplatesDeveloper and Developer Pro sandboxes do not support sandbox templates. Why not A or C:Developer and Developer Pro contain metadata only \u2014 no data templates or sample data. Why not D:Scratch Orgs are for source-driven development and are not created from sandbox templates. References: Salesforce Help | Sandbox Types and Templates Salesforce Platform App Builder Exam Guide | App Deployment"
  }
];
