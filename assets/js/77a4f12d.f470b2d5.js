"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[5503],{98556:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=n(74848),r=n(28453);const a={},s="CX-0016 Company Attribute Verification v1.1.0",o={id:"standards/CX-0016-CompanyAttributeVerification/CX-0016-CompanyAttributeVerification",title:"CX-0016 Company Attribute Verification v1.1.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0016-CompanyAttributeVerification/CX-0016-CompanyAttributeVerification.md",sourceDirName:"standards/CX-0016-CompanyAttributeVerification",slug:"/standards/CX-0016-CompanyAttributeVerification/",permalink:"/docs/standards/CX-0016-CompanyAttributeVerification/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0014 Employees and Technical Users v1.0.1",permalink:"/docs/standards/CX-0014-EmployeesAndTechnicalUsers/"},next:{title:"CX-0017 Company Role by the Connector v1.1.0",permalink:"/docs/standards/CX-0017-CompanyRoleByTheConnector/"}},c={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"2. VERIFIABLE CREDENTIALS",id:"2-verifiable-credentials",level:2},{value:"2.1 VERIFIABLE CREDENTIALS FOR COMPANY ATTRIBUTES",id:"21-verifiable-credentials-for-company-attributes",level:3},{value:"2.2 BUSINESS PARTNER NUMBER CREDENTIAL",id:"22-business-partner-number-credential",level:3},{value:"2.3 CATENA-X MEMBERSHIP CREDENTIAL",id:"23-catena-x-membership-credential",level:3},{value:"2.4 DISMANTLER CREDENTIALS",id:"24-dismantler-credentials",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"Legal",id:"legal",level:2}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"cx-0016-company-attribute-verification-v110",children:"CX-0016 Company Attribute Verification v1.1.0"}),"\n",(0,t.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(i.p,{children:"The Company Attribute Verification is the method handling company attributes in a verifiable way based on Verifiable Credentials. It also describes the format of specific verifiable credentials. The following represents the technical documentation for the Company Attributes in the Platform Capability Identity and Access Management. This standard documentation defines the structures of Company Attributes."}),"\n",(0,t.jsx)(i.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn\u2019t relevant."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Core Service Provider"}),"\n",(0,t.jsx)(i.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(i.li,{children:"Onboarding Service Provider"}),"\n",(0,t.jsx)(i.li,{children:"Consulting Services Provider"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This document focuses on the handling and format of verifiable credential for unified verifiable attribute description of participant."}),"\n",(0,t.jsx)(i.p,{children:"This document is relevant for core service providers who maintain the issuance of verifiable  credentials for specific company attributes."}),"\n",(0,t.jsx)(i.p,{children:"For Data Provider it is relevant in case they are providing data in the context of a use case for which a specific company attribute is the criteria for granting appropriate access rights to specific data."}),"\n",(0,t.jsx)(i.p,{children:"For the Data Consumer it is relevant to be able to present the according company attribute to be able to consume data based on the appropriate company attribute."}),"\n",(0,t.jsx)(i.p,{children:"For an Onboarding Service Provider this standard is relevant due to the fact, that verifiable credentials containing and approving specific company attributes need to be issued at the moment of onboarding."}),"\n",(0,t.jsx)(i.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"As mentioned in CX - 0014 Employees and Technical Users, the identity of any entity and actor (company, user, or technical client/connector is the summary of the describing attributes (e.g. company name, address, tax etc.). Considering the source of information depicted by an attribute, this source can be the actor itself, who claims to have a specific property, or a third party, which confirms a specific property of an actor. Being able as an actor to provide verifiable documentation about having a specific property strengthens the trust in that actor. In some cases of interaction there is the need to have certain attributes of an actor verified to accept the interaction. This document is meant to establish a unified verifiable attribute description for the following company attributes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Business Partner Number (BPN): The Business Partner Number of the participant's legal entity"}),"\n",(0,t.jsx)(i.li,{children:"Catena-X membership of a member company: The verification that the participant is a Catena-x member"}),"\n",(0,t.jsxs)(i.li,{children:["Dismantler Role: The verification that the participant is a dismantler and can act in that role based on verifiable credentials [W3C Verifiable Credential Data Model v1.1] (",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"https://www.w3.org/TR/vc-data-model/"}),")."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsx)(i.p,{children:"Not applicable for this standard in this version"}),"\n",(0,t.jsx)(i.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(i.p,{children:["The key words ",(0,t.jsx)(i.strong,{children:"MAY"}),", ",(0,t.jsx)(i.strong,{children:"MUST"}),", ",(0,t.jsx)(i.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(i.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(i.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(i.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(i.strong,{children:"SHOULD"})," and ",(0,t.jsx)(i.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(i.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["All participants MUST have an identity wallet described in the Standards ",(0,t.jsx)(i.strong,{children:"CX-0013 IDENTITY OF MEMBER COMPANIES"})," to receive the following credentials"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Business Partner Number (BPN) issued by the agency described in the standard ",(0,t.jsx)(i.strong,{children:"CX-0011  ISSUING AGENCY"})]}),"\n",(0,t.jsx)(i.li,{children:"A membership credential"}),"\n",(0,t.jsx)(i.li,{children:"A credential verifying that the participant is a dismantler, in case the participant is one."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The identity wallet MUST be able to present these credentials to other partners and verify credentials issued for other partners and provided by these other partners."}),"\n",(0,t.jsx)(i.p,{children:"A Core Service Provider MUST be able to issue:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The membership credential following the W3C Standard for Self Sovereign Identity (",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/",children:"Decentralized Identifiers (DIDs) v1.0 (w3.org)"}),") proving the Catena-X membership of the partner"]}),"\n",(0,t.jsxs)(i.li,{children:["The BPN credential which will be issued by the agency described in the standard ",(0,t.jsx)(i.strong,{children:"CX-0011 ISSUING AGENCY"})]}),"\n",(0,t.jsx)(i.li,{children:"The dismantler credential for participants that will take part in Catena-X in this role. For the issuance of the Dismantler credential, a check of this attribute must be done to ensure the validity of that information"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"To validate these criteria for an own wallet implementation please collect the following documents:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Arch42 Documentation explaining the architecture and process flows of the implementation Hand this documentation to the conformity assessment body"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"2-verifiable-credentials",children:"2. VERIFIABLE CREDENTIALS"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"*This section is normative_"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"As described in CX-0013 - Identity of Member Companies, verifiable credentials are part of the Self Sovereign Identity (SSI) standard defined by the W3C. Credentials are used to assert that an entity has a specific property or capability. Verifiable credentials provide a mechanism to express these properties or capabilities in a digital way which is cryptographically secure, privacy respecting and machine verifiable."}),"\n",(0,t.jsx)(i.p,{children:"In the issuance and verification, the following actors / roles are involved:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Holder"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A role or an entity might perform by possessing one or more verifiable credentials and generating verifiable presentations from them. Example holders include students, employees, and customers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Issuer"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A role or an entity performs by asserting claims about one or more subjects, creating a verifiable credential from these claims, and transmitting the verifiable credential to a holder. Example issuers include corporations, non-profit organizations, trade associations, governments, and individuals."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Subject"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"An entity about which claims are made. Example subjects include human beings, animals, and things. In many cases the holder of a verifiable credential is the subject, but in certain cases it is not. For example, a parent (the holder) might hold the verifiable credentials of a child (the subject), or a pet owner (the holder) might hold the verifiable credentials of their pet (the subject)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Verifier"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A role or an entity performs by receiving one or more verifiable credentials, optionally inside a verifiable presentation, for processing. Example verifiers include employers, security personnel, and websites."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Verifiable data registry"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A role or a system might perform by mediating the creation and verification of identifiers, keys, and other relevant data, such as verifiable credential schemas, revocation registries, issuer public keys, and so on, which might be required to use verifiable credentials. Some configurations might require co-relatable identifiers for subjects. Examples of verifiable data registries include trusted databases, ecentralized databases, government ID databases, and distributed ledgers. Often there is more than one type of verifiable data registry utilized in an ecosystem."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://www.w3.org/TR/vc-data-model/diagrams/ecosystem.svg",alt:"vc_roles_flows"})}),"\n",(0,t.jsxs)(i.p,{children:["More information can be found here: ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"https://www.w3.org/TR/vc-data-model/"})]}),"\n",(0,t.jsx)(i.h3,{id:"21-verifiable-credentials-for-company-attributes",children:"2.1 VERIFIABLE CREDENTIALS FOR COMPANY ATTRIBUTES"}),"\n",(0,t.jsx)(i.p,{children:"A basic need in data exchange is the common understanding of data content. For that a common terminology is created. A verifiable credential is a dataset containing information about the participant the VC is issued for. For a common understanding the meaning of a VC the DID Standard defines the context. In the course of the definition of a verifiable credentials containing a company attribute the according context is also defined."}),"\n",(0,t.jsx)(i.p,{children:"The context is a JSON Schema file defining the structure of the verifiable credential. The location of this JSON schema file offers"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Permissionless Accessibility","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Every participant in- or outside of the Catena-X must be able to access the JSON Schema"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Update management","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"There is a well defined management of the updates of the files containing the JSON Schemas"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"22-business-partner-number-credential",children:"2.2 BUSINESS PARTNER NUMBER CREDENTIAL"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This section is not aimed to standardize the content, structure, and the creation of the Business Partner Number. This is done by the standardization request CX-0010. The description here is about the issuance and the provision of the BPN as a verifiable attribute of the company."}),"\n",(0,t.jsx)(i.p,{children:"As described in CX-0013, CX-0016 & CX-0017, the BPN is issued to the company by the BPN issuer as a VC. The data model of the BPN-VC must contain"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The credential context"}),"\n",(0,t.jsx)(i.li,{children:"The credential type"}),"\n",(0,t.jsx)(i.li,{children:"The date of issuance"}),"\n",(0,t.jsx)(i.li,{children:"The credential subject"}),"\n",(0,t.jsx)(i.li,{children:"The identifier of the holder"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The schema and data model of the BPN Verifiable Credential is depicted as follows:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\r\n    "id": "UUID",\r\n    "@context": [\r\n        "https://www.w3.org/2018/credentials/v1",\r\n        "https://w3id.org/security/suites/jws-2020/v1",\r\n        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/businessPartnerData"\r\n    ],\r\n    "type": ["VerifiableCredential", "BpnCredential"],\r\n    "issuer": "<did>",\r\n    "issuanceDate": "2021-06-16T18:56:59Z",\r\n    "credentialSubject": {\r\n        "id":"<did>",\r\n        "type":"BpnCredential",\r\n        "bpn":"bpn"\r\n    }  \r\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"23-catena-x-membership-credential",children:"2.3 CATENA-X MEMBERSHIP CREDENTIAL"}),"\n",(0,t.jsx)(i.p,{children:"As described in CX-0013, CX-0016 & CX-0017, the membership credential, which confirms that the company is onboarded to Catena-X, is issued to the company by the portal as a VC. The data model of the BPN-VC must contain specific attributes. The corresponding schema and data model of the Catena-X Membership Verifiable Credential is depicted as follows:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\r\n    "id": "UUID",\r\n    "@context": [\r\n        "https://www.w3.org/2018/credentials/v1",\r\n        "https://w3id.org/security/suites/jws-2020/v1",\r\n         "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/businessPartnerData"\r\n    ],\r\n    "type": ["VerifiableCredential", "MembershipCredential",],\r\n    "issuanceDate": "2021-06-16T18:56:59Z",\r\n    "expirationDate": "2022-06-16T18:56:59Z",\r\n    "issuer": "did", \r\n    "credentialSubject": {\r\n        "id": "<did>",\r\n        "type":"MembershipCredential",\r\n        "holderIdentifier": "bpn",\r\n        "memberOf":"Catena-X",\r\n        "status":"Active",\r\n        "startTime":"2021-06-16T18:56:59Z"\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"24-dismantler-credentials",children:"2.4 DISMANTLER CREDENTIALS"}),"\n",(0,t.jsx)(i.p,{children:"Unlike the Business Partner Number and the Membership Credential, the Dismantler Credential is optional for specific participants beeing a dismantler. This credential is use case specific and issued to the participant by the Core Service Provider or Onboarding Service Provider after the according verification of the participant. It can be used to manage access to data based on the fact, that the consuming or providing participant is a dismantler. The schema of the Catena-X Dismantler Credential is depicted as follows:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\r\n    "@context": [\r\n        "https://www.w3.org/2018/credentials/v1",\r\n        "https://w3id.org/security/suites/jws-2020/v1",\r\n        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/businessPartnerData"\r\n    ],\r\n    "id": "UUID",\r\n    "issuer": "<did>",\r\n    "type": ["VerifiableCredential", "DismantlerCredential"],\r\n    "issuanceDate": "2021-06-16T18:56:59Z",\r\n    "expirationDate": "2022-06-16T18:56:59Z",\r\n    "credentialSubject": {\r\n        "id": "<did>",\r\n        "type": "DismantlerCredential", \r\n        "holderIdentifier": "<BPN>",\r\n        "allowedVehicleBrands": ["Alfa Romeo", "Alpina", "BMW"] \r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(i.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"CX-0011 ISSUING AGENCY"}),"\n",(0,t.jsx)(i.li,{children:"CX-0013 IDENTITY OF MEMBERS COMPANIES"}),"\n",(0,t.jsx)(i.li,{children:"CX-0014 IDENTITY OF EMPLOYEES AND TECHNICAL USERS"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(i.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(i.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(96540);const r={},a=t.createContext(r);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);