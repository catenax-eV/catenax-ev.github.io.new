"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[8879],{65908:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(74848),s=t(28453);const a={},r="CX-0060 Triangle Traceability Digital Twin Built v1.0.0",o={id:"standards/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt",title:"CX-0060 Triangle Traceability Digital Twin Built v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt.md",sourceDirName:"standards/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt",slug:"/standards/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt/",permalink:"/docs/standards/CX-0060-TriangleTraceabilityDigitalTwinAsBuilt/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0059 Use Case Behavioral Twin Endurance Predictor v.1.2.0",permalink:"/docs/standards/CX-0059-TriangleBehavioralTwinEndurancePredictorService/"},next:{title:"CX-0061 Triangle Traceability Data Provisioning Digital Twin As Planned v1.1.0",permalink:"/docs/standards/CX-0061-TriangleTraceabilityDataProvisioningDigitalTwinAsPlanned/"}},l={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2. STANDARDS FOR Digital Twin As-Built Set of Standards",id:"2-standards-for-digital-twin-as-built-set-of-standards",level:2},{value:"2.1 LIST OF STANDALONE STANDARDS",id:"21-list-of-standalone-standards",level:3},{value:"2.2 ADDITIONAL REQUIREMENTS",id:"22-additional-requirements",level:3},{value:"2.3.1 Digital Twins and specific Asset IDs",id:"231-digital-twins-and-specific-asset-ids",level:4},{value:"Authorization: Visbility of Specific Asset IDs in the DTR",id:"authorization-visbility-of-specific-asset-ids-in-the-dtr",level:5},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cx-0060-triangle-traceability-digital-twin-built-v100",children:"CX-0060 Triangle Traceability Digital Twin Built v1.0.0"}),"\n",(0,n.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,n.jsxs)(i.p,{children:["The Digital Twin (DT) As-Built Set of Standards enables the traceability of vehicles, parts and materials throughout Catena-X network in a decentralized manner. Prerequisite for the DT As-Built is the identification by unique identifiers of cars, parts and materials such as a VAN (anonymized Vehicle Identification number), serial number or batch-number. The goal is the availability of relationships knowledge of parts and their subparts (Bill of Material) throughout the whole network, without the necessity to store this information in a central repository or without preliminary sharing of data without a specific purpose or reasoning. This way ",(0,n.jsx)(i.em,{children:"data chains"})," will be built to track and trace serialized parts and batches from its origin to its dismantling to enable further data driven use cases throughout the Catena-X network."]}),"\n",(0,n.jsx)(i.p,{children:"This Set of Standards-document defines which aspect models are to be supported by underlying applications or data provisioning pipelines in order to support this use-case.\nIt also defines which Catena-X platform capabilities have to be used in order to enable the other participants to discover, request and leverage data."}),"\n",(0,n.jsx)(i.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,n.jsx)(i.p,{children:"This document summarizes standards to be supported by a network participants IT infrastructure to participate for the Traceability Digital Twin As-Built Use Case. This involves protocols, semantic models and platform capabilities to be used."}),"\n",(0,n.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This document is targeting subsets of the following roles:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Data Provider / Consumer"}),"\n",(0,n.jsx)(i.li,{children:"Business Application Provider"}),"\n",(0,n.jsx)(i.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning / Consumption without a certified app for the use-case."}),"\n",(0,n.jsx)(i.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The aim of Traceability is to trace parts and materials across the entire value chain to enable data driven use cases over all n-tier levels without compromising data sovereignty. This Set of Standards enables data and app providers to deliver solutions for building data chains for serialized parts and batches in all industries. This is done via the standardized creation of digital twins of vehicles and parts as well as the logical linking to their sub-components (Bill of Material, BoM). The default visibility of digital twins and their respective semantic models follows the one-up/one-down principle."}),"\n",(0,n.jsx)(i.p,{children:"The Traceability of parts and materials is crucial in the automotive industry to enable e.g. quality management and circular economy. By tracking and tracing back the sourcing of serialized parts or batches, manufactures can quickly identify the source of any quality issue and take corrective actions to address them. Robust traceability networks enable the automotive and further industries to quickly respond to any quality issues in their supply chain. Furthermore, this data chain will be the foundation for further use cases like circular economy or the battery passport."}),"\n",(0,n.jsx)(i.p,{children:"The Digital Twin As-Built Set of Standards is not intended as a storage location for other types of data such as the PCF (product carbon footprint) or social standard certificates. Instead, the Digital Twin As-Built allows the establishment of a value driven data chain and serves as the basis for discovery and navigation for further data driven use cases. It allows the data owner to provide all necessary data with individual access rights and usage restrictions (access and usage policies) to ensure privacy and security. Additional information might be shared by utilizing the Asset Administration Shell through additional aspects or submodels."}),"\n",(0,n.jsx)(i.p,{children:"The Digital Twin As-Built Set of Standards is supporting the availability of data of vehicles, parts and materials and the connection to their sub parts (BoM).\nIt describes the concrete digital reflection of a produced vehicle or part and its provisioning towards Catena-X including Interoperability and Data Sovereignty standards and components by the participants willing to share such data. This Set of Standards also defines which components (e.g. Digital Twin Registry, IDS compliant Connector) must be used in order to be interoperable and sovereign in the data exchange as defined in Catena-X."}),"\n",(0,n.jsx)(i.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The following pictures shows a high level architecture overview focusing on Catena-X plattform capabilities being used."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"architecture overview.png",src:t(9848).A+"",width:"1181",height:"1201"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"Figure 1: Architecture Overview"})}),"\n",(0,n.jsx)(i.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,n.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,n.jsxs)(i.p,{children:["The key words ",(0,n.jsx)(i.strong,{children:"MAY"}),", ",(0,n.jsx)(i.strong,{children:"MUST"}),", ",(0,n.jsx)(i.strong,{children:"MUST NOT"}),", ",(0,n.jsx)(i.strong,{children:"OPTIONAL"}),", ",(0,n.jsx)(i.strong,{children:"RECOMMENDED"}),", ",(0,n.jsx)(i.strong,{children:"REQUIRED"}),", ",(0,n.jsx)(i.strong,{children:"SHOULD"}),"\nand ",(0,n.jsx)(i.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,n.jsx)(i.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["All participants* and their solutions will need to proof, that they are conform with the Catena-X standards.\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).\nPlease refer to: ",(0,n.jsx)(i.a,{href:"https://catena-x.net/en/catena-x-introduce-implement/certification",children:"https://catena-x.net/en/catena-x-introduce-implement/certification"})," for the process of conformity assessment and certification."]}),"\n",(0,n.jsx)(i.p,{children:"Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document."}),"\n",(0,n.jsx)(i.p,{children:"The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components."}),"\n",(0,n.jsxs)(i.p,{children:["*",(0,n.jsx)(i.em,{children:"Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."})]}),"\n",(0,n.jsx)(i.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,n.jsx)(i.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Business Partner Number (BPN)"}),"\nA BPN is the unique identifier of a partner within Catena-x."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"International Data Space (IDS)"}),"\nInternational Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiations before each data transfer and defines a general architecture for data exchange."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Eclipse Dataspace Connector (EDC)"}),"\nThe EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Vehicle Anonymised Number (VAN)"}),"\nA number mapped 1:1 to VIN, but pseudonomised."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Vehicle Identification Number (VIN)"}),"\nThe VIN number is a 17-character code assigned by the manufacturer to every vehicle, providing specific information about its make, model, year of manufacture, and other key features. It is a unique identifier that allows the vehicle to be easily tracked and identified throughout its lifespan."]}),"\n",(0,n.jsx)(i.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,n.jsx)(i.h2,{id:"2-standards-for-digital-twin-as-built-set-of-standards",children:"2. STANDARDS FOR Digital Twin As-Built Set of Standards"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"21-list-of-standalone-standards",children:"2.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"To participate in Data Provisioning in the Traceability - Digital Twin As-Built use-case, the following single standards MUST mostly be fulfilled by all participants for which the standard is relevant:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"CX-0002 Digital Twins in Catena \u2013 X (Data Provider)"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130018 Eclipse Dataspace Connector (EDC)"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130019 SerialPart"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130020 SingleLevelBoMAsBuilt"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130021 Batch"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"A digital twin MUST be created for each serialized part or batch of materials produced by the manufacturer.\nThe digital twin MUST be provisioned via an Asset Administration Shell as per CX-0002 and registered in the decentral Digital Twin Registry hosted by each CX member as described in CX-0002."}),"\n",(0,n.jsx)(i.p,{children:'The aspect model "Serial Part" MUST be linked to the Asset Administration Shell of a serialized part.\nThe aspect model "Batch" MUST be linked to the Asset Administration Shell of a Batch.\nThe aspect model "SingleLevelBoMAsBuilt" MUST be linked to the Asset Administration Shell of each serialized component or part and each batch holding the information on relationship of serialized items and batches.'}),"\n",(0,n.jsx)(i.p,{children:'Parts and materials without any further subparts MAY be excepted from the "SingleLevelBoMAsBuilt" obligation.'}),"\n",(0,n.jsx)(i.p,{children:"The submodel data MUST be transferred using the IDS Protocol as described in CX-0018.\nThe Eclipse Dataspace Connector as a reference implementation is RECOMMENDED to be used as an IDS compliant connector."}),"\n",(0,n.jsx)(i.h3,{id:"22-additional-requirements",children:"2.2 ADDITIONAL REQUIREMENTS"}),"\n",(0,n.jsx)(i.p,{children:"As the IDS protocol is being used, data MUST NOT be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.\nThe required data offers MUST be discoverable through the Digital Twin Registry as submodel endpoints."}),"\n",(0,n.jsx)(i.h4,{id:"231-digital-twins-and-specific-asset-ids",children:"2.3.1 Digital Twins and specific Asset IDs"}),"\n",(0,n.jsx)(i.p,{children:"The globalAssetId of the twins being referenced MUST correspond to the unique ID being used in Catena-X."}),"\n",(0,n.jsx)(i.p,{children:"The following specific asset IDs not marked as optional MUST be available when registering a digital twin or when adding the above mentioned submodels to an existing twin for a serialized part in order to allow discovery. (see  CX-0002 that provides additional information). The specific asset IDs marked as optional MAY be used in addtion:\nThe following conventions for specific Asset Ids apply to all digital twins:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:" Key "}),(0,n.jsx)("th",{children:" Availability "}),(0,n.jsx)("th",{children:" Description "}),(0,n.jsx)("th",{children:" Type "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:" manufacturerId "}),(0,n.jsx)("td",{children:" Mandatory "}),(0,n.jsx)("td",{children:" The Business Partner Number (BPNL) of the manufacturer of the part. "}),(0,n.jsx)("td",{children:" BPNL "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:" manufacturerPartId "}),(0,n.jsx)("td",{children:" Mandatory "}),(0,n.jsxs)("td",{children:[" The ID of the type/catalog part from the ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"manufacturer"})}),". "]}),(0,n.jsx)("td",{children:" String "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:" customerPartId "}),(0,n.jsx)("td",{children:" Optional "}),(0,n.jsxs)("td",{children:[" The ID of the type/catalog part from the ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"customer"})}),".",(0,n.jsx)("br",{}),"The main reason why this propertiy is optional is that it cannot be guaranteed that every manufacturer knows the customerPartId for their parts. If known, it is ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"recommended"})})," to always add the customerPartId for easier lookup."]}),(0,n.jsx)("td",{children:" String "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:" assetLifecyclePhase "}),(0,n.jsxs)("td",{children:[" Optional (for DT As-Built)",(0,n.jsx)("br",{}),"Mandatory (for DT As-Planned)"]}),(0,n.jsxs)("td",{children:[" The lifecycle phase of the asset.",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:'For serialized parts, batches, and JIS parts, use the value "AsBuilt".'}),(0,n.jsx)("li",{children:'For catalog parts, use the value "AsPlanned".'})]})]}),(0,n.jsx)("td",{children:" Enum "})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"For serialized parts, additionally the following conventions apply:"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Key"}),(0,n.jsx)(i.th,{children:"Availability"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Type"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"partInstanceId"}),(0,n.jsx)(i.td,{children:"Mandatory"}),(0,n.jsx)(i.td,{children:"The serial number of the part from the manufacturer."}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"van"}),(0,n.jsx)(i.td,{children:"Optional"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.strong,{children:"Only for vehicles:"})," The pseudonymized vehicle identification number (VIN) of the vehicle."]}),(0,n.jsx)(i.td,{children:"String"})]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"For batches, additionally the following conventions apply:"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Key"}),(0,n.jsx)(i.th,{children:"Availability"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Type"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"batchId"}),(0,n.jsx)(i.td,{children:"Optional"}),(0,n.jsx)(i.td,{children:"The number of the batch from the manufacturer."}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"partInstanceId"}),(0,n.jsx)(i.td,{children:"Mandatory"}),(0,n.jsx)(i.td,{children:"Also the number of the batch from the manufacturer. For the time being we also use the batch number as partInstanceId. This makes looking up digital twins for serialized parts and batches easier as a data consumer only has to specify the partInstanceId no matter if they are looking up a serialized part or a batch. Otherwise, the data consumer would need to know for what type of digital twin it is looking for or it would have to look for both until a match is found."}),(0,n.jsx)(i.td,{children:"String"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"A digital twin is required for each single instance of a serialized part or vehicle and each batch to be traced."}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{})]})]})]}),"\n",(0,n.jsx)(i.h5,{id:"authorization-visbility-of-specific-asset-ids-in-the-dtr",children:"Authorization: Visbility of Specific Asset IDs in the DTR"}),"\n",(0,n.jsxs)(i.p,{children:["To enforce a strict need-to-know (and prevent data from being exposed to non-authorized parties), the visibility of entries in the attribute ",(0,n.jsx)(i.code,{children:"specificAssetIds"})," must be protected, i.e.,their visibility must be restricted to only the manufacturer of the part (which is represented by the digital twin) and the customers of the part. For that, the attribute ",(0,n.jsx)(i.code,{children:"externalSubjectId"})," must be used."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Every entry"})," in the attribute ",(0,n.jsx)(i.code,{children:"specificAssetIds"})," (e.g., for ",(0,n.jsx)(i.code,{children:"customerPartId"}),", ",(0,n.jsx)(i.code,{children:"manufacturerId"})," or ",(0,n.jsx)(i.code,{children:"manufacturerPartId"}),") must contain a ",(0,n.jsx)(i.code,{children:"externalSubjectId"})," attribute that defines which company (identified by a BPN) is allowed to see the entry."]}),"\n",(0,n.jsxs)(i.li,{children:["If a key-value pair should be visible to multiple companies, e.g., for batches or catalog parts, multiple entries with the same key-value pair, but different BPNs in the ",(0,n.jsx)(i.code,{children:"externalSubjectId"})," attribute must be specified."]}),"\n",(0,n.jsxs)(i.li,{children:["The owner (creator) of a digital twin will always see all specific asset IDs. So, it's not necessary to add an ",(0,n.jsx)(i.code,{children:"externalSubjectId"})," for the owner itself. This also means that only the owner of a digital twin will be able to see the entry if no ",(0,n.jsx)(i.code,{children:"externalSubjectId"})," is specified."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,n.jsx)(i.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"CX-0002 Digital Twins in Catena \u2013 X (Data Provider)"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130018 Eclipse Dataspace Connector (EDC)"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130019 SerialPart"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130020 SingleLevelBoMAsBuilt"}),"\n",(0,n.jsx)(i.li,{children:"CX\u20130021 Batch"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The traceability KIT and sub-KITs will include further information on EDC data asset structures, Digital Twin Submodel examples and API calls to be made."}),"\n",(0,n.jsx)(i.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"figures",children:"FIGURES"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tables",children:"TABLES"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9848:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/architecture-overview-a1b1b4885632f7a70f37519800af97af.png"},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);