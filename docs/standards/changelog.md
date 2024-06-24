---
position: 1
---

# Changelog

## Summary of Release Jupiter

- 13 new standards
- 34 updated standards
- 60 deprecated standards

### A) List of new and updated standards

> Note: Be aware that more information regarding the changes can be found within the standard documents within the section "***COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD***"

#### Sovereign Data Exchange & Semantics

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0002 |  Digital Twins in Catena-X | 2.2 | <ul><li> Remove all normative references to the EDC implementation.</li><li> Declare outdated typization mechanism (asset:prop:type) optional </li></ul> |
| CX-0018 |  Dataspace Connectivity | 3.0  |  <ul><li> Adopt pinned versions of IATP, DSP, policy definitions.</li><li> Specify HTTPS and AmazonS3 transfer processes </li></ul>  |
| CX-0067 |  Ontology Models in Catena-X | 1.1 |  <ul><li>New subchapters Digital Twin and Ontologies, Taxonomy, Asset Content Description, Modeling of the Functions have been added.</li><li>Text, images and code snippets have been modified to make them easier to understand.</li></ul>   |
| CX-0084 |  Federated Queries In Data Spaces | 1.2   |  <ul><li> External links have been changed to improve readability.</li><li>The examples have been updated to reflect recent developments.</li><li>The the Asset Content Description subsection has been added.</li><li>Code snippets and text updates in Agent-Related EDC Assets</li></ul>   |
| CX-0126 |  Industry Core: Part Type |  2.0   |  <ul> <li>Added new content in Section 2.1.3 <ul><li>New paragraph &quot;Conventions for Use Case Policy in context data exchange&quot; </li><li>Notes for versioning</li></ul></li><li>Changes in specific AssetIds of Digital Twins in **Section 2.1.4**:<ul><li>removed assetLifeCyclePhase</li><li>digitalTwinType is now mandatory (before it was optional)</li></ul></li><li>Replaced standardized aspect model in **Section 3.1**:<ul><li>removed PartAsPlanned 2.0.0 </li><li>replaced with newly standardized PartTypeInformation 1.0.0 (see link to changelog in section of the aspect model)</li></ul></li><li>New version of aspect model in **Section 3.2**:<ul><li>SingleLevelBomAsPlanned 3.0.0 (see link to changelog in section of the aspect model)</li></ul></li><li>Newly standardized aspect model in **Section 3.3**:<ul><li>SingleLevelUsageAsPlanned 2.0.0 (see link to changelog in section of the aspect model)</li></ul></li><li>Added Unique ID Push Notification API in **Section 4.1** as content of the industry core</li><li>deleted &quot;Every certified business application relying on aspects models of this standard <strong>MUST</strong> be able to consume data conformant to the semantic models specified in this document.&quot; from **Section 3**</li></ul>  |
| CX-0127 |  Industry Core: Part Instance |  2.0   |  <ul><li>New versions of aspect models in **Section 3**<ul><li>SerialPart 3.0.0 (see link to changelog in section of the aspect model)</li><li>Batch 3.0.0 (see link to changelog in section of the aspect model)</li><li>JustInSequencePart 3.0.0 (see link to changelog in section of the aspect model)</li><li>SingleLevelBomAsBuilt 3.0.0 (see link to changelog in section of the aspect model)</li></ul></li><li>Newly standardized aspect models in **Section 3**<ul><li>SingleLevelUsageAsBuilt 3.0.0 (see link to changelog in section of the aspect model)</li></ul></li><li>Aspect model JustInSequencePart now <strong>MUST</strong> be provided when creating a digital twin for a Just-In-Seuqence-Part (was optional before) in **Section 2.1.2**</li><li>Changes in specificAssetIds of Digital Twins in **Section 2.1.4**<ul><li>Removed assetLifeCyclePhase </li><li>DigitalTwinType is now mandatory (before it was optional)</li><li>Added intrinsicId specifically for Digital Twins for serialized parts, batches and just-in-sequence-parts</li><li>Removed partInstanceId from Digital Twins for batches and just-in-sequence-parts </li></ul></li><li>Added Unique ID Push Notification API in **Section 4.1** as content of industry core</li><li>New paragraph &quot;Conventions for Use Case Policy in context data exchange&quot; in **Section 2.1.3**</li><li>Added notes for versioning in **Section 2.1.3**</li><li>Deleted &quot;Every certified business application relying on aspects models of this standard **MUST** be able to consume data conformant to the semantic models specified in this document.&quot; from **Section 3**</li></ul>  |

#### Business Partner Data Management

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0012 | Business Partner Data Pool API |  4.0 |  <ul><li>changed and added the detailed asset structure</li><li>removed classification sub-object</li><li>added "is Catena-X Member data" attribute</li><li>removed "api/catena/" from the endpoint definitions</li><li> added data sovereignty chapters as additional requirements</li><li> fix changelog controller endpoint for business-partners to match the reference implementation </li></ul>  |
| CX-0074 | Business Partner Gate API  | 3.0 |  <ul><li> Changed and added the detailed asset structure </li><li> removed classification sub-object </li><li> removed business partner state and introduced separate states at representation classes </li><li> removed "api/catena/" from the endpoint definitions </li><li> added data sovereignty chapters as additional requirements </li></ul>  |
| CX-0076 | Golden Record End to End Requirements Standard  | 1.2  |  <ul><li>Adjustment of Table 2 in chapter 2.1.9 Golden Record Output Requirements].</li><li>Adding Tax Jurisdiction Code</li><li>Adjustment in chapter 2.1.11 Confidence Level </li><li>Adjust text for validation interval</li><li> District and Region is now mandatory for Romania as listed in Table 2 </li></ul>  |
| CX-0077 | Data Quality Dashboard  | 1.2   |  <ul><li> Corrected 2.3.3 - country list </li><li> Added chapter 3.5 Data Types and 3.6 Data Attributes</li><li> Added chapter 3.7 for data sovereignty as additional requirement </li></ul>  |
| CX-0078 |  Bank Data Verification Dashboard  | 1.2   |  <ul><li> Corrected 2.3. - country list</li><li>Added chapter 3.4 Data Types and 3.5 Data Attributes</li><li>Added chapter 3.6 for data sovereignty as additional requirement </li><li> Corrected 2.3. - Enhanced usage policies of BDV API </li></ul>  |
| CX-0079 | Natural Person Screening Dashboard  | 1.2   |  <ul><li>Natural Person Screening Dashboard v1.2  </li><li> Corrected 2.3 - country list</li><li> Added chapter 3.6 Data Types and 3.7 Data Attributes </li><li> Added chapter 3.8 for data sovereignty as additional requirement </li></ul>  |
| CX-0080 |  BPDM Fraud Prevention Service  | 1.1  | <ul><li> Added chapter 2.6 Data Types and 2.8 Data Attributes.</li><li>Added chapter 2.7 for data sovereignty as additional requirement.</li></ul> |
| CX-0081 | BPDM Country Risk  | 2.2   |  <ul><li> Update on data asset and added new context for Country Risk </li><li> Added new section for Additional Requirements </li><li>Affected chapters are 2.2.3 Data Asset Structure & 2.2.5 Additional Requirements</li></ul>  |
| CX-0116 | Sanction Watchlist Dashboard  | 1.2   |  <ul><li> Corrected 2.3 - country list </li><li> Added chapter 3.4 Data Types and 3.5 Data Attributes </li><li> Added chapter 3.6 for data sovereignty as additional requirement</li></ul>  |
| CX-0135 | Company Certificate Management |  2.0 |  <ul><li>Added a new attribute 'status' to the data model (1.5.11 Status)</li><li>Added new certificate types (1.5.2 TYPE)</li></ul>  |

#### Identity Management

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0013 | Identity of Member Companies |  2.0 |  Deprecation of the Summary Credential. |
| CX-0049 | DID Document Schema |  2.0   |  Re-definition of the structure of the did-document.  |
| CX-0050 | Framework Agreement Credential |  2.0   |  Re-definition of the Framework Agreement structure.  |
| CX-0149 | Verified Company Identity  | 1.0   | <ul><li>This document combines the previous standards `CX - 0016 Company Attribute Verification  v.1.1.0` and `CX - 0017 Company Role by the Connector v.1.0.1` including all needed information for the identification of a participant and the Dataspace clients acting on behalf of them</li><li>Introducing the *Identity and Trust Protocol (IATP)* used within the identity presentation flow</li><li> Introducing an API specification for the *Creation of Participants Wallet* as a foundation for the usage of multiple Wallet providers. </li></ul> |

#### Onboarding

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0006 | Registration and Initial Onboarding | 2.0   |  Updated following chapters:<ul><li>2.3.4 Company Data Validation</li><li>2.3.8 Gaia-X</li></ul> And added:<ul><li>2.3.5 Business Partner Number Creation</li><li>2.3.6 Wallet Tenant Creation</li><li> Credential Storage </li><li> Registration Approval and Dataspace Access </li></ul>  |
| CX-0009 | CX Registration API | 2.0   |  Update of the endpoint details which MUST/SHOULD get followed by the Core Service Provider and/or Onboarding service provider. Endpoint path as well as request/response body.  |

#### Data Chain Management

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0005 | Item Relationship Service API |  2.1     | <ul><li>Adoption of the industry core standards (CX-0126 and CX-0127)</li><li>Update of optional endpoints</li></ul>  |
| CX-0045 | Aspect Model Data Chain Template |  1.3   | <ul><li>Adoption of the industry core standards (CX-0126 and CX-0127)</li><li>Update of the template from BAMM to SAMM</li></ul>  |
| CX-0139 | Information as a Service – External Data Provider | 1.0    | The Scope of this Standard is to enable Third-Party Information Provider to deliver Data from outside Catena-X inside Catena-X. This Standard is generic to every Use Case and qualifies Information aaS Provider as a potential Data Provider for a Use Case defined Business Application. The Data can be delivered only to a specific Use Case within Catena-X, realised in an certified Business Application. By this way the Standard enables Third-Party Information Provider to deliver Data from outside Catena-X inside Catena-X and at the same time limits Data Delivery to existing Use Cases, avoiding Violations or Bypasses of existing Standards and Regulations within Catena-X.   |

#### Resiliency

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0115 | Manufacturing Capability Exchange |  1.0    | Manufacturing-as-a-Service (MaaS) scenarios focus on connecting buyers looking for manufacturers in possession of the available production know-how and resources to produce specific products. The standard makes use of the newly introduced all-in-one use-case template. The Manufacturing Capability data model is being expanded to include the entities Machine, Tool, and Material, along with their corresponding properties. Additionally, an API is defined, so that these Manufacturing Capabilities can be exchanged in a standardized way.  <br />*Note*: The CX-0115 standard obsoletes CX-0052 Manufacturing Capability Aspect Mode l v1.0.0 |
| CX-0118 | Delivery Information Exchange  |  2.0   | Changes: <ul><li>integration and usage of digital twins as defined in **CX-0002** Digital Twins in Catena-X</li><li>harmonization of aspect model in accordance with **CX-0126** Industry Core: Part Type</li><li>discontinuation of the proprietary API used in v1.0.0 of this standard</li><li>grammatical, spelling and semantic improvements</li></ul>New Content: <ul><li>added a note on the obligation of standard implementers to make aware that sensitive data is being handled, see Chapter 2.1.3.</li></ul> |
| CX-0120 | Short-Term Material Demand Exchange  | 2.0   | Changes: <ul><li>integration and usage of digital twins as defined in **CX-0002** Digital Twins in Catena-X</li><li>harmonization of aspect model in accordance with **CX-0126** Industry Core: Part Type</li><li>new specific submodel `io.catenax.short_term_material_demand:1.0.0:ShortTermMaterialDemand` from `io.catenax.material_demand:1.0.0:MaterialDemand`</li><li>discontinuation of the proprietary API used in v1.0.0 of this standard</li><li>grammatical, spelling and semantic improvements</li></ul>New Content: <ul><li>added a note on the obligation of standard implementers to make aware that sensitive data is being handled, see **Chapter 2.1.3**</li></ul>  |
| CX-0121 | Planned Production Output Exchange  | 2.0  | Changes: <ul><li>integration and usage of digital twins as defined in **CX-0002** Digital Twins in Catena-X</li><li>harmonization of aspect model in accordance with **CX-0126** Industry Core: Part Type</li><li>discontinuation of the proprietary API used in v1.0.0 of this standard</li><li>grammatical, spelling and semantic improvements</li></ul>New Content: <ul><li>added a note on the obligation of standard implementers to make aware that sensitive data is being handled, see **Chapter 2.1.3**</li></ul> |
| CX-0122 | Item Stock Exchange  | 2.0   | Changes: <ul><li>integration and usage of digital twins as defined in **CX-0002** Digital Twins in Catena-X</li><li>harmonization of aspect model in accordance with **CX-0126** Industry Core: Part Type</li><li>discontinuation of the proprietary API used in v1.0.0 of this standard</li><li>grammatical, spelling and semantic improvements</li></ul>New Content: <ul><li>added a note on the obligation of standard implementers to make aware that sensitive data is being handled, see **Chapter 2.1.3**</li></ul>  |
| CX-0128 | Demand and Capacity Management Data Exchange  | 2.0  | <ul> <li>Replaced `MaterialDemand` with `WeekBasedMaterialDemand` aspect model</li><li>Added deactivation of `WeekBasedCapacityGroup` to *Section 4.2.2.2*</li><li>Added deactivation of `WeekBasedMaterialDemand` to **Section 4.1.2.2**</li><li>Added **Chapter 2.3** Additional Requirements</li><li>Added **Chapter 5.10** Supply Chain Disruption Notifications</li><li>Added **Chapter 5.11** Demand Volatility Metrics</li><li>Added Agreed Capacity to **Section 5.6.1**</li><li>Added Repositories to **Annexes**</li><li>Updated References in **Chapter 7**</li><li>Updated `WeekBasedCapacityGroup` aspect model</li><li>Updated `WeekBasedMaterialDemand` aspect model</li><li>Updated `MessageHeaderAspect` version in **Chapter 4**</li><li>Updated Policies in **Chapter 6**</li><li>Updated choice of words and writing pattern throughout this standard</li></ul>  |
| CX-0129 | Request-for-Quotation Exchange  | 2.0     | In this version of the standard, the processes entity of the RequestForQuotation semantic model has been replaced by the "Bill of Process" data model (cf. **Chapter 3.2**)  |
| CX-0133 | Online Control and Simulation  | 2.1   | <ul><li>Updated references to new versions</li><li>Providers must ensure BPNL provisioning to OSim</li></ul>  |
| CX-0142 | Shop-Floor-Information-Service  | 1.0   |  The current version of the standard provides two different kinds of data: Production Forecasting, and Production Tracking data. To give an example of forecasting data, suppose a customer wants to know when production is expected to start. He can use the Shop-Floor-Information-Service in order to get the information either directly, via cyclic messages or via notifications when the calculated production dates change. As an example of production tracking, a customer can request certain production attributes collected during production, such as the torque of a particular process step. This data can then be used for both documentation and tracking. <br />*Note*: This standard <ul> <li>Merges CX-0068, CX-0069 and CX0075 by combining the different standards that describe the data model, the API and and the process into this combined standard.</li><li>Additional functionality added: production tracking aspects.</li><li>Update of Production Forecast Models due to update of CX-header.</li></ul>  |
| CX-0145 | Days of supply Exchange  | 1.0     | Days of Supply (DoS) in logistics is a critical metric used to estimate how long current inventory levels will last under normal consumption patterns. This calculation is essential in supply chain management as it assists in forecasting when stock replenishment is needed, thereby preventing stock shortages or overstocking. It plays a significant role in ensuring efficient inventory turnover, maintaining a balance between having enough stock to meet demand and avoiding excess inventory that ties up capital. To effectively address the challenges associated with manual calculation and estimation of Days of Supply, the standardization and interoperable exchange of this data among Catena-X business partners is essential. Establishing a standardized semantic definition to describe Days of Supply and a common API is a fundamental step to enable this exchange and foster compatibility. This approach maximizes the range of solutions available to mitigate potential supply shortages and supports precise inventory planning.   |
| CX-0146 | Supply Chain Disruption Notifications  | 1.0  | The Catena-X Supply Chain Disruption Notifications Standard is created for all members of the automotive supply chain. The aim is to have a functionality to easily and quickly inform the affected supply chain partners in case of supply chain disruptions at some point in the value chain. Having this information is key to be able to take the right countermeasures and make the whole value chain more resilient. Recent incidents (e.g. semi-conductor-crisis or COVID pandemic) have demonstrated the requirement for such a fast standardized process among all partners.  |

#### PLM and Quality

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0059 | Behavioral Twin Endurance Estimator Use Case | 2.0    | This standard upgrades the triangle (previously CX-0059:1.2) to an Use Case Standard and consolidates the contents of the previously independent standards CX-0056, CX-0057 and CX-0058 within a single comprehensive standard.  |
| CX-0105 | Asset Tracking Use Case | 1.1    | This standard upgrades the triangle (previously CX-0105:1.0) to an Use Case Standard and consolidates the contents of the previously independent standards CX-0070, CX-0083, CX-0004 and CX-0106 within a single comprehensive standard. Note: No content relevant to the certification has been changed.  |
| CX-0123 | Quality Use Case Standard  | 2.0   | <ul><li>Update semantic models `QualityTask`, `PartsAnalyses`, `ManufacturedPartsQualityInformation`, `Fleet.DiagnosticData`, `Fleet.ClaimData`</li><li>Update model Fleet.Vehicles and integrate model `Vehicle.ProductDescription`</li><li>New semantic models Early Warning Norification and Failure Pattern</li><li>Update 2.1 Data Sharing Rules</li><li>Define Notification Process and API</li></ul>  |
| CX-0125 | Traceability Use Case  | 2.0  | <ul><li>Redundancies to the standard CX-0127 in all relevant chapters removed: Submodel `SerialPart`, Submodel `Batch`, Submodel `SingleLevelBoMAsBuilt`</li><li>Adapted parts (introductions, examples) of the standard document contents to suit the use case specifications</li><li>Quality Alerts are set to mandatory</li><li>New paragraph &quot;Conventions for Use Case Policy in context data exchange&quot; in **Section 2.1.3**</li><li>Added notes for versioning in **Section 2.1.3**</li><li>Deleted &quot;Every certified business application relying on aspects models of this standard <strong>MUST</strong> be able to consume data conformant to the semantic models specified in this document.&quot; from **Section 3**</li><li>Deleted old references in **Section 6.1**</li></ul>  |
| CX-0138 | Use Case Behaviour Twin Endurance Estimator | 1.0    | The 1.0 version changed from a triangle (originally CX-0089) to an Use Case Standard and consolidates the contents of the previously independent standards CX-0057, CX-0088, CX-0090 within a single comprehensive standard.  |
| CX-0141 |  Health Indicator Use Case  | 1.0   | This standard focuses on the Health Indicator Use Case. The Health Indicator recieves dynamic input data, that has been recorded in the vehicle, through the Catena-X network. The input data, combined with additional product knowledge by the service provider, is used to calculate precise health indicator values for specific components  |

#### Sustainability

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0117 | Use Case Circular Economy - Secondary Marketplace | 1.0  | CX-0117 Use Case Circular Economy - Secondary Marketplace v1.0.0 is a new standard which is based on the deprecated CX-0100 Triangle for Secondary Marketplace v.1.0.0 standard. The data models from: <ul><li>CX-0033 Data Model ReturnRequest (deprecated)</li><li>CX-0034 Data Model Battery Pass (deprecated)</li><li>CX-0035 Data Model Marketplaceoffer (deprecated)have been included with their newest released versions to assure consistency between standards.</li></ul> |
| CX-0131 | Circularity Core | 1.1   | Adoption of the industry core standards (CX-0126 and CX-0127)<br />Additionally, CX-0131 merges (and, thus, obsoletes) the following aspect models: <ul><li>CX-0036: Aspect Model: QualityTask</li><li>CX-0037: Aspect Model: Vehicle.ProductionData</li><li>CX-0038: Aspect Model: Fleet.DiagnosticData  </li><li>CX-0039: Aspect Model: Fleet.ClaimData </li><li>CX-0040: Aspect Model: PartAnalyses  </li><li>CX-0041: Aspect Model: ManufacturedPartsQualityInformation</li><li>CX-0091: Aspect Model: Fleet.Vehicles </li><li>CX-0092: Aspect Model: QualityTaskAttachment  </li><li>CX-0107: Aspect Model: Reuse Certificate  </li><li>CX-0109: Aspect Model: Refrubishing Certificate  </li><li>CX-0111: Aspect Model: Remanufacturing Certificate  </li><li>CX-0147: Aspect Modelt Non-ReusableParts  </li><li>CX-0148: Aspect Model Repair Certificate  </li></ul>  |
| CX-0136 | Use Case PCF  | 1.0   | This standard focuses on the PCF (Product Carbon Footprint) exchange use case. This includes relevant requirements for: <ul><li>data provider, that want to provide PCF data through Catena-X, </li><li>data consumer, that are want to consume PCF values in Catena-X and </li> <li>application developer/ provider supporting the provisioning and consuming of PCF values.</li></ul> It will provide information about the used core components as well as the structure of the Digital Twin Registry entry, the data model exchanged and the EDC (Eclipse Dataspace Connector) data structure. |
| CX-0143 | Use Case Circular Economy - Digital Product Passport Standard | 1.0     | This standard focuses on the digital product passport use case. This includes relevant requirements for <ul><li>data provider, that want to provide different passports through Catena-X,</li><li>data consumer, that are searching for different passports in Catena-X, and</li><li>application developer / provider supporting the provisioning and consuming of passport data.</li></ul>Specific passports that shall be mentioned here are the battery passport and the transmission passport, which are first realizations of product passports in Catena-X.  |
| CX-0144 | ESS Use Case Standard | 1.0  | Catena-X aims to support supply chain due diligence obligations in a market environment that miss full up- and downstream transparency. This is argued to be relevant for Environmental and Social Standards (ESS) incident tracking, without compromising GAIA-X and Catena-X principles like data sovereignty, interoperability, standardization, and use of federated services.<br />In case a violation against these laws occurs, an ESS incident can be created and transmitted to the Catena-X network. The Catena-X network and the ESS use case standard support the Catena-X members in this process. <br />*Note:* The ESS incident aspect model, which was described in CX-0113, has been integrated into this document. |

### B) List of deprecated standards

| CX-Nr.  | Standard Name   |                                         Reason to depricate                                        |
|:--------------------|:-----------------------------------------------|:--------------------------------------------------------------------------------------------------|
| CX-0019            |  SerialPart                            |  Merged by CX-0127 Industry Core Part Instance                                                 |
| CX-0020            | Batch                             |  Merged by CX-0127 Industry Core Part Instance                                               |
| CX-0021            |  SingleLevelBoMAsBuilt                            |  Merged by CX-0127 Industry Core Part Instance                                               |
| CX-0042            |  Aspect Model - SinglelevelBomAsPlanned                              | Merged by CX-0126 Industry Core Part Type                                                  |
| CX-0043            | Aspect Model - PartAsPlanned                               |  Merged by CX-0126 Industry Core Part Type                                                 |
| CX-0022            | Notification API                               |  Merged by CX-0125 Traceability Use Case                                                 |
| CX-0023            | Notification Process                       |   Merged by CX-0125 Traceability Use Case                                                |
| CX-0060            |  Tracebility BomAsBuild Triangle   |  Merged by CX-0125 Traceability Use Case                                                 |
| CX-0036            |  Aspect Model: QualityTask                              | Merged by CX-0131 Circularity Core                                                  |
| CX-0037            |  Aspect Model: Vehicle.ProductionData                              | Merged by CX-0131 Circularity Core                                                  |
| CX-0038            |  Aspect Model: Fleet.DiagnosticData                              |  Merged by CX-0131 Circularity Core                                                 |
| CX-0039            |   Aspect Model: Fleet.ClaimData                           |  Merged by CX-0131 Circularity Core                                                 |
| CX-0040            |  Aspect Model: PartAnalyses                              |  Merged by CX-0131 Circularity Core                                                 |
| CX-0041            |  Aspect Model: ManufacturedPartsQualityInformation                              |  Merged by CX-0131 Circularity Core                                                 |
| CX-0091            |  Aspect Model: Fleet.Vehicles                              |   Merged by CX-0131 Circularity Core                                                |
| CX-0092            |   Aspect Model: QualityTaskAttachment                             |  Merged by CX-0131 Circularity Core                                                 |
| CX-0098            |  Aspect Model: Secondary Material Content                              |  Merged by CX-0131 Circularity Core                                                 |
| CX-0099            |  Data Model: Certificate of Decommissioning                              |  Merged by CX-0131 Circularity Core                                                 |
| CX-0107            |  Aspect Model: Reuse Certificate                               |  Merged by CX-0131 Circularity Core                                                 |
| CX-0108            |  Aspect Model: Waste Certificate                              |   Merged by CX-0131 Circularity Core                                                |
| CX-0109            |  Aspect Model: Refrubishing Certificate                              |  Merged by CX-0131 Circularity Core                                                 |
| CX-0111            |  Aspect Model: Remanufacturing Certificate                              |   Merged by CX-0131 Circularity Core                                                |
| CX-0112            |  Aspect Model: Material Recycling Certificate                              |   Merged by CX-0131 Circularity Core                                                |
| CX-0033            |  Data Model ReturnRequest                               |  Merged into  CX-0117 Use Case Circular Economy - Secondary Marketplace                                                |
| CX-0035            |  Data Model Marketplaceoffer                               | Merged into  CX-0117 Use Case Circular Economy - Secondary Marketplace                                                 |
| CX-0057            | Aspect Model for user estimated loading                                | Merged into CX-0059 and CX-0138 Use Case Behaviour Twin Endurance Estimator |
| CX-0056            | Semantic Model: Classified Load Spectrum                                 | Merged into CX-0059 Use Case Behaviour Twin Endurance Predictor |
| CX-0058            | API: Endurance Predictor                                | Merged into CX-0059 Use Case Behaviour Twin Endurance Predictor |
| CX-0088            |  Aspect Model for Remaining Useful Life data                               | Merged into CX-0138 Use Case Behaviour Twin Endurance Estimator Digital Product Pass                                                   |
| CX-0090            |  API Endurance Estimator                               |  Merged into CX-0138 Use Case Behaviour Twin Endurance Estimator                                                  |
| CX-0089            | Triangle Behavioral Twin Endurance Estimator Service                              | Merged into CX-0138 Use Case Behaviour Twin Endurance Estimator Digital Product Pass                                                    |
| CX-0026            |  PCF Data Model                            |  Merged into CX-0143 Use Case PCF                                                  |
| CX-0028            | PCF Request API                    |   Merged into CX-0143 Use Case PCF                                               |
| CX-0134            |  PCF Calculation Integration                               | Merged into CX-0143 Use Case PCF                                                   |
| CX-0063            | PCF Triangle                                 |  Merged into CX-0143 Use Case PCF                                                  |
| CX-0052            | Manufacturing Capability Aspect Model                                 |  Merged into CX-0115 Manufacturing Capability Exchange                                                  |
| CX-0100            | Triangle for Secondary Marketplace                                 |  Merged into CX-0117 Use Case Circular Economy - Secondary Marketplace                                                  |
| CX-0016            | Company Attribute Verification                                 |  Merged into CX-0149 Verified Company Identity                                                  |
| CX-0017            | Company Role by the Connector                                 |  Merged into CX-0149 Verified Company Identity                                                  |
| CX-0051            | Summary Credentials                                 |  Deprecated with the introduction of IATP (see CX-0018 and CX-0149)                                                  |
| CX-0061            | Triangle Traceability Data Provisioning Digital Twin As Planned                                 |  Merged into CX-0125 Traceability Use Case                                                  |
| CX-0062            | Traceability Notifications Triangle                                 |  Merged into CX-0125 Verified Company Identity                                                  |
| CX-0093            | Aspect Model Traction Battery Code                                 |  Merged into CX-0125 Verified Company Identity                                                  |
| CX-0070            | Asset Tracking Platform API Standardization                                 |  Merged into CX-105 Asset Tracking Use Case Identity                                                  |
| CX-0083            | Aspect Model IotSensorDeviceDefinition                                 |  Merged into CX-105 Asset Tracking Use Case Identity                                                  |
| CX-0104            | Aspect Model AssetTrackerLinks v1.0.0                                 |  Merged into CX-105 Asset Tracking Use Case Identity                                                  |
| CX-0106            | Aspect Model IotSensorData                                 |  Merged into CX-105 Asset Tracking Use Case Identity                                                  |
| CX-0096            | Triangle For Digital Product Pass                                 |  Merged into CX-0143 Use Case Circular Economy - Digital Product Passport Standard                                                  |
| CX-0034            | Data Model Battery Pass                                 |  Merged into CX-0143 Use Case Circular Economy - Digital Product Passport Standard                                                  |
| CX-0095            | Data Model: Transmission Pass                                 |  Merged into CX-0143 Use Case Circular Economy - Digital Product Passport Standard                                                  |
| CX-0103            | Aspect Model Digital Product Passport                                 |  Merged into CX-0143 Use Case Circular Economy - Digital Product Passport Standard                                                  |
| CX-0068            | MP Shop Floor Information Service API                                 |  Merged into CX-0142 Shop Floor Information Service                                                  |
| CX-0069            | Shop-Floor-Information-Service Aspect Model                                 |  Merged into CX-0142 Shop Floor Information Service                                                  |
| CX-0075            | Shop-Floor-Information-Service Process                                 |  Merged into CX-0142 Shop Floor Information Service                                                  |
| CX-0113            | Aspect Model ESS Incident Data Model                                 |  Merged into CX-0144 Shop Floor Information Service                                                  |
| CX-0072            | OSim Process & Core Business Logic                                 |  Merged into CX-0133 Online Control and Simulation                                                  |
| CX-0073            | OSim API                                 |  Merged into CX-0133 Online Control and Simulation                                                  |
| CX-0087            | OSim Data Model: Materialflow Simulation Result                                 |  Merged into CX-0133 Online Control and Simulation                                                  |
| CX-0085            | Product Stock Aspect Model                                 |  Merged into CX-0133 Online Control and Simulation                                                  |
| CX-0086            | Product Stock Exchange API                                 |  Merged into CX-0133 Online Control and Simulation                                                  |