"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[3611],{84279:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const a={},o="CX-0030 Aspect Model BoM As Specified v2.0.0",r={id:"standards/CX-0030-DataModelBoMAsSpecified/CX-0030-DataModelBoMAsSpecified",title:"CX-0030 Aspect Model BoM As Specified v2.0.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/docs/standards/CX-0030-DataModelBoMAsSpecified/CX-0030-DataModelBoMAsSpecified.md",sourceDirName:"standards/CX-0030-DataModelBoMAsSpecified",slug:"/standards/CX-0030-DataModelBoMAsSpecified/",permalink:"/docs/next/standards/CX-0030-DataModelBoMAsSpecified/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0029 Product Carbon Footprint Rulebook v2.0.0",permalink:"/docs/next/standards/CX-0029-ProductCarbonFootprintRulebook/"},next:{title:"CX-0031 Data Model: Material For Homologation v1.1.1",permalink:"/docs/next/standards/CX-0031-DataModelMaterialForHomologation/"}},l={},d=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL &quot;Single Level BoM As Specified&quot;",id:"2-aspect-model-single-level-bom-as-specified",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF TURTLE",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON SCHEMA",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0030-aspect-model-bom-as-specified-v200",children:"CX-0030 Aspect Model BoM As Specified v2.0.0"}),"\n",(0,t.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,t.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Relevant only for existing standards. At the new standard, please delete"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"A core problem of the circular economy is making the right decisions. These strategies include Rethink, Refuse, Reduce, Reuse, Refurbish, Redesign, Recycle, Recover and Rot.\nIn particular, the end of life (EoL) decisions are a challenge. In order for a circular economy to scale, however, these must be supported in a standardized way. The present data model is used for this purpose. This supports the products R-Strategy Assistant & Circularity Dashboard to provide decision support for its users. In this first scope, the model should support the EoL decisions in particular.\nThe data provided by the data provider allows relevant decisions to be derived. This leads to higher reuse and recycling rates, an economically and ecologically balanced decision-making process and a scaled circular economy."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The SingleLevelBoMAsSpecified defines the view of the OEM or producer of the whole product, e.g. the OEM of a vehicle. It is free of any supplier-related information and specifies the promised and guaranteed content of the whole product to the end customer.\nThis \u201ctop-down\u201d view contrasts with the \u201cbottom-up\u201d view of the SingleLevelBoMAsPlanned, though several sub-aspects are shared. The SingleLevelBoMAsSpecified is merely one aspect, which is attached to the twin of the whole product and itself does neither introduce further twins nor reference them. Instead, it merely comprises all functional information required by dismantlers, workshops, or requestors for used parts to search for and to make a match on the marketplace."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this document is the description of the Asset Administration Shell submodel bill of material (BoM) as specified. It defines the view of the producing company of the produced product. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.\nThis chapter serves to situate the given reference implementation, to outline its prerequisites and to point out its limitations."}),"\n",(0,t.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'There are several parties needing information about the product, be it dismantlers, workshops or the owners. With the aspect model "as Planned" there is already a model which contains interesting information for these groups. However, this model also reveals sensitive information about the manufacturer, for example supplier relationships. This creates a conflict between the need for information of the exploiting/using parties and the data sovereignty of the manufacturer. This conflict is solved by the given aspect model "BoMAsSpecified" by providing a top-down view of the product and its components. Together with the aspect model "PartAsSpecified", "BomAsSpecified" provides an abstraction layer for other Catena-X members to obtain relevant information about the product while protecting sensitive information of the manufacturer.'}),"\n",(0,t.jsx)(n.p,{children:"Standarts which are not required but may be interesting to the use case:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0032 Part As Specified"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"}),"\nand ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "manufacturerId": "BPNL1234567890LR",\n  "assetId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",\n  "childItems": [\n    {\n      "childItemCategory": "e.g. vehicle, winter wheels, bicycle rack",\n      "item": [\n        {\n          "itemClassification": [\n            {\n              "value": "STEEWHL",\n              "key": "BMW:PartFamily"\n            }\n          ],\n          "itemQuantity": {\n            "quantityNumber": 350.0,\n            "measurementUnit": "unit:kW"\n          },\n          "ownerItemId": "urn:uuid:b4741433-92bb-4027-9a02-bbc64a58d193",\n          "itemVersion": "05",\n          "itemDescription": "The steering wheel is nice and round",\n          "createdOn": "2022-02-03T14:48:54.709Z",\n          "itemPositioning": "left",\n          "lastModifiedOn": "2022-02-03T14:48:54.709Z"\n        }\n      ],\n      "childassetId": "urn:uuid:218b26f4-4a0b-4a7f-b2c1-d248927718bf "\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following terms are especially relevant for the understanding of the standard:"}),"\n",(0,t.jsx)(n.p,{children:"Business Partner Number (BPN)\n: A BPN is the unique identifier of a partner within Catena-x"}),"\n",(0,t.jsx)(n.p,{children:"End of life vehicle (EoL vehicle)\n: 'End-of life vehicle' means a vehicle which is waste within the meaning of Article 1(a) of Directive 75/442/EEC on waste (waste means any substance or object which the holder disposes of or is required to dispose of pursuant to the provisions of national law in force)."}),"\n",(0,t.jsxs)(n.p,{children:["Original Equipment Manufacturer (OEM)\n",":An"," original equipment manufacturer (OEM) is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer."]}),"\n",(0,t.jsxs)(n.p,{children:["Bill of material (BOM)\n",":A"," bill of material is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product."]}),"\n",(0,t.jsxs)(n.p,{children:["Eclipse Dataspace Connector (EDC)\n",":The"," Eclipse Dataspace Connector provides a framework for sovereign, inter-organizational data exchange."]}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-single-level-bom-as-specified",children:'2 ASPECT MODEL "Single Level BoM As Specified"'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this document is the description of the Asset Administration Shell submodel SingleLevelBoMAsSpecified. It defines Bill of Material and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,t.jsxs)(n.p,{children:["Every data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," provide the data\nconformant to the semantic model specified in this document."]}),"\n",(0,t.jsxs)(n.p,{children:["The unique identifier of the semantic model specified in this document\n",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data\nbeing transferred."]}),"\n",(0,t.jsxs)(n.p,{children:["Every certified business application using the Single Level BoM As Specified data ",(0,t.jsx)(n.strong,{children:"MUST"}),"\nbe able to consume data conformant to the semantic model specified in\nthis document."]}),"\n",(0,t.jsxs)(n.p,{children:["This semantic model ",(0,t.jsx)(n.strong,{children:"MUST"})," be made available in the central Semantic Hub."]}),"\n",(0,t.jsxs)(n.p,{children:["Data consumers and data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," comply with the license of the\nsemantic model."]}),"\n",(0,t.jsxs)(n.p,{children:["In the Catena-X data space Single Level BoM As Specified data ",(0,t.jsx)(n.strong,{children:"MUST"})," be requested and\nexchanged via Eclipse Dataspace Connector (EDC) conformant to ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0018"}),"\nand ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0002"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The JSON Payload of data providers MUST be conformant to the JSON Schema\nas specified in this document."}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modelling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003 as input for the semantic deriven workflow."}),"\n",(0,t.jsx)(n.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to CX-0003."}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is an outcome of Catena-X use case group Digital Product Pass (DPP).This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"urn:samm:io.catenax.single_level_bom_as_specified:2.0.0##SingleLevelBomAsSpecified\n"})}),"\n",(0,t.jsx)(n.p,{children:"This identifier MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"All different formats of the semantic model can be found in the github repository."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_specified/2.0.0",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_specified/2.0.0"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF TURTLE"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_specified/2.0.0/SingleLevelBomAsSpecified.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_specified/2.0.0/SingleLevelBomAsSpecified.ttl"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_specified/2.0.0/gen",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_specified/2.0.0/gen"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON SCHEMA"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_specified/2.0.0/gen/SingleLevelBomAsSpecified.json",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_specified/2.0.0/gen/SingleLevelBomAsSpecified.json"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,t.jsxs)(n.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(n.p,{children:"Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available\nan update will be provided."}),"\n",(0,t.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The data model is described in SAMM . A html documentation can be generated from the rdf turtle\nfile."}),"\n",(0,t.jsx)(n.p,{children:"So far no .md documentation can be generated. So it is recommended to not"}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0003 BAMM Aspect Meta Model v1.0.2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002 Digital Twins in Catena - X v2.0.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0018 Sovereign Data Exchange (EDC) v2.0.1"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    [Optional] \u2013 Links to further documentation that may help to understand the\n    standard but isn\u2019t relevant for conformity assessment\n"})}),"\n",(0,t.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,t.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"This section is non-normative"}),"\n",(0,t.jsx)(n.img,{alt:"SingleLevelBoMAsSpecified_2.0.0",src:i(37519).A+"",width:"3284",height:"2684"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},37519:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/SingleLevelBomAsSpecified_2_0_0-892f1cce3710931e8da7ae653071bbb5.svg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);