"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[4822],{81230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=t(74848),r=t(28453);const s={},a="CX-0085 PURIS Aspect Model: Product Stock v1.0.0",d={id:"standards/CX-0085-PurisAspectModelProductStock/CX-0085-PurisAspectModelProductStock",title:"CX-0085 PURIS Aspect Model: Product Stock v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0085-PurisAspectModelProductStock/CX-0085-PurisAspectModelProductStock.md",sourceDirName:"standards/CX-0085-PurisAspectModelProductStock",slug:"/standards/CX-0085-PurisAspectModelProductStock/",permalink:"/docs/standards/CX-0085-PurisAspectModelProductStock/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0084 Federated Queries in Data Spaces v1.1.0",permalink:"/docs/standards/CX-0084-FederatedQueriesInDataSpaces/"},next:{title:"CX-0086 PURIS Product Stock Exchange API v1.0.0",permalink:"/docs/standards/CX-0086-PurisProductStockExchangeAPI/"}},o={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 PROOF OF CONFORMITY",id:"14-proof-of-conformity",level:3},{value:"1.5 EXAMPLES",id:"15-examples",level:3},{value:"1.6 TERMINOLOGY",id:"16-terminology",level:3},{value:"2 Aspect Model &quot;ProductStock&quot;",id:"2-aspect-model-productstock",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"2.5.3 aasx",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cx-0085-puris-aspect-model-product-stock-v100",children:"CX-0085 PURIS Aspect Model: Product Stock v1.0.0"}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"Information about the products in stock allocated to a specific customer at a given supplier's facility\nis key to early detect and evaluate supply shortage issues. However, collecting this information manually\ne.g. by phone or e-mail communication is error prone and slow."}),"\n",(0,i.jsxs)(n.p,{children:["A possible countermeasure to those challenges is the exchange of ",(0,i.jsx)(n.em,{children:"product stock"})," information between\nCatena-X participants in an interoperable manner."]}),"\n",(0,i.jsxs)(n.p,{children:["A common description of the ",(0,i.jsx)(n.em,{children:"product stock"})," based on a standardized semantic definition is fundamental\nfor facilitating such an exchange in a timely fashion, thus ensuring that the possible solution space\nfor mitigating the supply shortage issues is as large as possible."]}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,i.jsx)(n.p,{children:'This document describes the "ProductStock" semantic model used in the Catena-X network.'}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(n.p,{children:["This standard is relevant for the following roles defined in ",(0,i.jsx)(n.a,{href:"#32-non-normative-references",children:"[CX-OMW]"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Providers"})," willing to provide ",(0,i.jsx)(n.em,{children:"product stock"})," data"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Consumers"})," interested in requesting and receiving ",(0,i.jsx)(n.em,{children:"product stock"})," data"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Business Application Providers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Consulting Services Providers"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The scope of this standard is only the "ProductStock" aspect model.'}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A typical order-based procurement process includes a customer that places an order and a supplier\nfulfilling it. During the fulfillment process the manufactured products are temporarily stored at the\nsupplier's facility waiting to be shipped to the customer. This kind of inventory is referred to as\n",(0,i.jsx)(n.em,{children:"allocated"})," or ",(0,i.jsx)(n.em,{children:"product"})," stock. Information about it is key to early detect and evaluate short-term\nsupply shortages on the customer side. Also, due to the instant availability of the product stock,\nit can help solve such shortages."]}),"\n",(0,i.jsxs)(n.p,{children:["This standard defines the ",(0,i.jsx)(n.code,{children:"ProductStock"})," aspect model to be used in the Catena-X network. It ensures\nthat the ",(0,i.jsx)(n.code,{children:"ProductStock"})," information will be interpreted and handled in an identical manner by all\ninterested parties."]}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,i.jsx)(n.p,{children:"Sections marked as non-normative, as well as all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words ",(0,i.jsx)(n.strong,{children:"MAY"}),", ",(0,i.jsx)(n.strong,{children:"MUST"}),", ",(0,i.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,i.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,i.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,i.jsx)(n.strong,{children:"REQUIRED"}),",\n",(0,i.jsx)(n.strong,{children:"SHOULD"})," and ",(0,i.jsx)(n.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14\n[RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 PROOF OF CONFORMITY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X\nstandards. To validate that the standards are applied correctly, Catena-X employs Conformity\nAssessment Bodies (CABs)."}),"\n",(0,i.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for\nproving the conformity of data provided to a semantic model or the ability to consume the\ncorresponding data."}),"\n",(0,i.jsx)(n.h3,{id:"15-examples",children:"1.5 EXAMPLES"}),"\n",(0,i.jsx)(n.p,{children:'\xa0The following JSON provides an example for the value-only serialization of the "ProductStock"\n\xa0aspect model.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\xa0 "materialNumberCatenaX" : "48878d48-6f1d-47f5-8ded-a441d0d879df",\n\xa0 "materialNumberCustomer" : "MNR-7307-AU340474.002",\n\xa0 "materialNumberSupplier" : "MNR-8101-ID146955.001",\n\xa0 "positions" : [ {\n\xa0 \xa0 "lastUpdatedOnDate" : "2023-04-01T14:23:00.66372+01:00",\n\xa0 \xa0 "orderPositionReference" : {\n\xa0 \xa0 \xa0 "supplierOrderId" : "M-Nbr-4711",\n\xa0 \xa0 \xa0 "customerOrderId" : "C-Nbr-4711",\n\xa0 \xa0 \xa0 "customerOrderPositionId" : "PositionId-01"\n\xa0 \xa0 },\n\xa0 \xa0 "allocatedStocks" : [ {\n\xa0 \xa0 \xa0 "quantityOnAllocatedStock" : {\n\xa0 \xa0 \xa0 \xa0 "quantityNumber" : 2.5,\n\xa0 \xa0 \xa0 \xa0 "measurementUnit" : "unit:litre"\n\xa0 \xa0 \xa0 },\n\xa0 \xa0 \xa0 "supplierStockLocation" : {\n\xa0 \xa0 \xa0 \xa0 "locationKeyType" : "BPNS",\n\xa0 \xa0 \xa0 \xa0 "locationKeyValue" : "BPNS0123456789ZZ"\n\xa0 \xa0 \xa0 }\n\xa0 \xa0 } ]\n\xa0 } ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"16-terminology",children:"1.6 TERMINOLOGY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Aspect Model\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data\naccessible from an Aspect."}),"\n",(0,i.jsxs)(n.p,{children:[": ",(0,i.jsx)(n.em,{children:"Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it\nutilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the\n\xa0 validity rules defined by the Semantic Aspect Meta Model."})]}),"\n",(0,i.jsxs)(n.p,{children:[": ",(0,i.jsx)(n.em,{children:"Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual\n\xa0 model in order to describe the semantics of runtime data related to a concept. Further, elements of\n\xa0 an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."})]}),"\n",(0,i.jsxs)(n.p,{children:[": ",(0,i.jsx)(n.em,{children:"[Source: Catena-X, CX-0002, note 3 removed]"})]}),"\n",(0,i.jsxs)(n.p,{children:["Business Partner Number (BPN)\n: \xa0A BPN is the unique identifier of a partner within Catena-X as defined in ",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"[CX-0010]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"International Data Space (IDS)\n: International Data Space and its protocol for data exchange\nforesees an compliant connector handling contract negotiation before each data transfer and defines\na general architecture for data exchange."}),"\n",(0,i.jsx)(n.p,{children:"Eclipse Dataspace Connector (EDC)\n: The EDC is a reference implementation for an IDS compliant\nconnector currently acting as a de-facto standard and/or reference implementation within Catena-X."}),"\n",(0,i.jsx)(n.p,{children:"Allocated Stock\n: The already manufactured and ready to be shipped products available at a supplier's facility. They\nare allocated to a specific customer based on the orders made by the latter."}),"\n",(0,i.jsxs)(n.p,{children:["Stock Location\n: The physical location of a stock specified by its type (BPNS or BPNA) and the corresponding BPN\nnumber. More information on BPN/S/A is provided in ",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"[CX-0010]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Supplier\n: The manufacturer of a product."}),"\n",(0,i.jsx)(n.p,{children:"Customer\n: The recipient of products manufactured by a supplier."}),"\n",(0,i.jsx)(n.p,{children:"Order\n: Request from a customer towards a supplier to manufacture / supply a given quantity of a specific\nproduct in a predefined time frame."}),"\n",(0,i.jsx)(n.p,{children:"Position\n: A position within an order defines the product and the quantity the supplier has to manufacture\nfor a customer. A single order may contain multiple positions for different products."}),"\n",(0,i.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association\nhomepage."}),"\n",(0,i.jsx)(n.h2,{id:"2-aspect-model-productstock",children:'2 Aspect Model "ProductStock"'}),"\n",(0,i.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"product stock"})," defines the available quantity of reserved (here called allocated) products\nfor a customer that have not yet been shipped. A prerequisite for building up a product stock\nand allocating it to a specific customer is an existing order / call-off."]}),"\n",(0,i.jsxs)(n.p,{children:["The following table provides an overview and a brief description of the fields defined in the\n",(0,i.jsx)(n.code,{children:"ProductStock"})," aspect model."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"REQUIRED"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data type"}),(0,i.jsx)(n.th,{children:"Example value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"materialNumberCustomer"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsxs)(n.td,{children:["Material identifier assigned by the customer.",(0,i.jsx)("br",{})," In case a customer does not have an own number for a given material (e.g. standard products like screws, washers, etc.), the value of this filed should be equal to the value of the ",(0,i.jsx)(n.code,{children:"materialNumberSupplier"})," field."]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"MNR-7307-AU340474.002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"materialNumberSupplier"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsxs)(n.td,{children:["Material identifier assigned by the supplier. ",(0,i.jsx)("br",{})," This material number is used to identify the material (as planned) on the supplier side."]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"MNR-8101-ID146955.001"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"materialNumberCatenaX"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{children:"Material identifier used to uniquely identify the material within a Data Space (e.g. PartAsPlanned in Catena-X)."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"lastUpdatedOnDateTime"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsxs)(n.td,{children:["Date and time at which the available ",(0,i.jsx)(n.em,{children:"product stock"})," had been updated by the supplier. Date and time are set according to a time zone."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"#32-non-normative-references",children:"[ISO8601]"})," with time zone"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2023-04-25T10:54:12+00:00"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"supplierOrderId"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{children:"The order number on the supplier side (e.g. generated by the supplier's enterprise resource planning system)."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"M-Nbr-4711"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"customerOrderId"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The order number on the customer side (e.g. generated by the customer's enterprise resource planning system)."}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"C-Nbr-4711"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"customerOrderPositionId"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsxs)(n.td,{children:["The identifier of a position within an order. Every order may contain multiple positions for different products.",(0,i.jsx)("br",{}),"The value of this field not a technical identifier, such as an UUID, but rather used within the business context when talking about the position."]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"PositionId-01"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"quantityOnAllocatedStock"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"The quantity of the material (product) within the position that is ready to be delivered. It is defined by the combination of a value (Number) and a measurement unit (e.g. pcs, litre, etc.)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"locationIdType"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{children:"Type of the location's ID. Either BPNS or BPNA."}),(0,i.jsx)(n.td,{children:"Enum"}),(0,i.jsx)(n.td,{children:"BPNS"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"locationId"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsxs)(n.td,{children:["The Business Partner Number (BPN) of the supplier's facility as defined in ",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"[CX-0010]"}),"."]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"BPNS0123456789ZZ"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The provided aspect model is automotive-agonistic, thus allowing for future integration and exchange\nwith non-automotive dataspaces."}),"\n",(0,i.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,i.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the\n"semantic driven workflow" to create a submodel template specification ',(0,i.jsx)(n.a,{href:"#32-non-normative-references",children:"[SMT]"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This aspect model is written in SAMM 2.0.0 as a modeling language conformant to ",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"[CX-0003]"}),"\nas input for the semantic driven workflow."]}),"\n",(0,i.jsxs)(n.p,{children:["Like all Catena-X data models, this model is available in a machine-readable format on GitHub\nconformant to ",(0,i.jsx)(n.a,{href:"#31-normative-references",children:"[CX-0003]"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,i.jsx)(n.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0\nInternational (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,i.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,i.jsx)(n.p,{children:"The semantic model has the unique identifier"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\xa0 urn:bamm:io.catenax.product_stock:1.0.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"This identifier MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,i.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,i.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,i.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating\nadditional file formats and serializations. It can be found under the following link:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.product_stock/1.0.0/ProductStock.ttl"})}),"\n",(0,i.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,i.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,i.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,i.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 aasx"}),"\n",(0,i.jsxs)(n.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,i.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,i.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,i.jsxs)(n.p,{children:["Not applicable. (See ",(0,i.jsx)(n.a,{href:"#251-rdf-turtle",children:"Chapter 2.5.1"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,i.jsx)(n.p,{children:"[CX-0003] SAMM Aspect Meta Model, Version 1.0.2"}),"\n",(0,i.jsx)(n.p,{children:"[CX-0010] Business Partner Number, Version 1.0.1"}),"\n",(0,i.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from:\n",(0,i.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,i.jsxs)(n.p,{children:["[CX-OMW] Catena-X Operating Model Whitepaper. Download from:\n",(0,i.jsx)(n.a,{href:"https://catena-x.net/fileadmin/user_upload/Publikationen_und_WhitePaper_des_Vereins/CX_Operating_Model_Whitepaper_02_12_22.pdf",children:"https://catena-x.net/fileadmin/user_upload/Publikationen_und_WhitePaper_des_Vereins/CX_Operating_Model_Whitepaper_02_12_22.pdf"})]}),"\n",(0,i.jsx)(n.p,{children:"[ISO8601] ISO 8601: Date and time format"}),"\n",(0,i.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not applicable."}),"\n",(0,i.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not applicable."}),"\n",(0,i.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not applicable."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);