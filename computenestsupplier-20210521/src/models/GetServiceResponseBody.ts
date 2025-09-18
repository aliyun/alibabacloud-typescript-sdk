// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityCssMetadataComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * The mappings.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      mappings: 'Mappings',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.mappings) {
      $dara.Model.validateMap(this.mappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0048****-Frequency-1
   */
  entityId?: string;
  /**
   * @remarks
   * Name of a measurement indicator.
   * 
   * @example
   * AvgMemory
   */
  metricName?: string;
  /**
   * @remarks
   * Custom PromQL.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * Measurement indicators.
   * 
   * @example
   * ComputeNestPrometheus
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0015****-Frequency-1
   */
  entityIds?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Pay-as-you-go package
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadata extends $dara.Model {
  /**
   * @remarks
   * The mapping information about the billing items.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  /**
   * @remarks
   * Metering item configuration information.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The binding relationship between package and measurement dimension.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut-2
   */
  entityId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * NetworkLantency
   */
  metricName?: string;
  /**
   * @remarks
   * The custom prometheus statement.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * The metric.
   * 
   * @example
   * AvgPod
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      metricName: 'MetricName',
      promql: 'Promql',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      metricName: 'string',
      promql: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut-2
   */
  entityIds?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Pay-as-you-go Package
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The specification code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Pay-as-you-go
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $dara.Model {
  /**
   * @remarks
   * The configurations of the billable items.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The billable items that are associated with the package.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings[];
  /**
   * @remarks
   * The mappings between the service specifications and the template or package.
   */
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings },
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMeteringEntities extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the billable item.
   * 
   * @example
   * spring-boot-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommoditySpecifications extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00xxxx
   */
  code?: string;
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * specifications1
   */
  name?: string;
  /**
   * @remarks
   * The subscription duration. Unit: week or year.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodity extends $dara.Model {
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   **PREPAY** (default): subscription.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity modules.
   */
  components?: string[];
  /**
   * @remarks
   * The configuration metadata related to Lingxiao.
   */
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  /**
   * @remarks
   * The metadata of Alibaba Cloud Marketplace.
   */
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  /**
   * @remarks
   * The information about the billable item.
   */
  meteringEntities?: GetServiceResponseBodyCommodityMeteringEntities[];
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * { "Enabled":false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The specification details of the service in Alibaba Cloud Marketplace.
   */
  specifications?: GetServiceResponseBodyCommoditySpecifications[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      components: 'Components',
      cssMetadata: 'CssMetadata',
      marketplaceMetadata: 'MarketplaceMetadata',
      meteringEntities: 'MeteringEntities',
      saasBoostMetadata: 'SaasBoostMetadata',
      specifications: 'Specifications',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': 'string' },
      cssMetadata: GetServiceResponseBodyCommodityCssMetadata,
      marketplaceMetadata: GetServiceResponseBodyCommodityMarketplaceMetadata,
      meteringEntities: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMeteringEntities },
      saasBoostMetadata: 'string',
      specifications: { 'type': 'array', 'itemType': GetServiceResponseBodyCommoditySpecifications },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.cssMetadata && typeof (this.cssMetadata as any).validate === 'function') {
      (this.cssMetadata as any).validate();
    }
    if(this.marketplaceMetadata && typeof (this.marketplaceMetadata as any).validate === 'function') {
      (this.marketplaceMetadata as any).validate();
    }
    if(Array.isArray(this.meteringEntities)) {
      $dara.Model.validateArray(this.meteringEntities);
    }
    if(Array.isArray(this.specifications)) {
      $dara.Model.validateArray(this.specifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyComplianceMetadata extends $dara.Model {
  /**
   * @remarks
   * The compliance package is selected.
   */
  compliancePacks?: string[];
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceDocumentInfos extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to access the document.
   * 
   * @example
   * http://docurl
   */
  documentUrl?: string;
  /**
   * @remarks
   * The language of the return data. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Default Template.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      documentUrl: 'DocumentUrl',
      locale: 'Locale',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentUrl: 'string',
      locale: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosAgreements extends $dara.Model {
  /**
   * @remarks
   * The agreement name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The agreement URL.
   * 
   * @example
   * https://aliyun.com/xxxxxxxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the software
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 5.7
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The agreement information about the service.
   */
  agreements?: GetServiceResponseBodyServiceInfosAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * https://example.com
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WordPress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the information about the software in the service.
   */
  softwares?: GetServiceResponseBodyServiceInfosSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceLocaleConfigs extends $dara.Model {
  enValue?: string;
  originalValue?: string;
  zhValue?: string;
  static names(): { [key: string]: string } {
    return {
      enValue: 'EnValue',
      originalValue: 'OriginalValue',
      zhValue: 'ZhValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enValue: 'string',
      originalValue: 'string',
      zhValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyStatistic extends $dara.Model {
  /**
   * @remarks
   * The total number of service instances that belong to the service. The service instances that are deleted are counted.
   * 
   * @example
   * 75
   */
  accumulativeInstanceCount?: number;
  /**
   * @remarks
   * The total amount consumed for trial service instances. Unit: CNY.
   * 
   * @example
   * 80.35
   */
  accumulativePocAmount?: number;
  /**
   * @remarks
   * The total number of users who use the service. The historical users are counted.
   * 
   * @example
   * 60
   */
  accumulativeUserCount?: number;
  /**
   * @remarks
   * The average amount consumed for trial service instances per instance. Unit: CNY.
   * 
   * @example
   * 40.17
   */
  averagePocAmount?: number;
  /**
   * @remarks
   * The average duration for which trial service instances are in use. Unit: Hour.
   * 
   * @example
   * 1
   */
  averagePocDuration?: number;
  /**
   * @remarks
   * The average amount consumed for trial service instances per a period of time. Unit: CNY.
   * 
   * @example
   * 167.9
   */
  averagePocUnitAmount?: number;
  /**
   * @remarks
   * The number of online service instances. It means the number of service instances that are successfully deployed.
   * 
   * @example
   * 20
   */
  deployedServiceInstanceCount?: number;
  /**
   * @remarks
   * The number of online users. It means the number of users who successfully deployed the service instances.
   * 
   * @example
   * 10
   */
  deployedUserCount?: number;
  /**
   * @remarks
   * The number of service applications that are in the Submitted state.
   * 
   * @example
   * 10
   */
  submittedUsageCount?: number;
  static names(): { [key: string]: string } {
    return {
      accumulativeInstanceCount: 'AccumulativeInstanceCount',
      accumulativePocAmount: 'AccumulativePocAmount',
      accumulativeUserCount: 'AccumulativeUserCount',
      averagePocAmount: 'AveragePocAmount',
      averagePocDuration: 'AveragePocDuration',
      averagePocUnitAmount: 'AveragePocUnitAmount',
      deployedServiceInstanceCount: 'DeployedServiceInstanceCount',
      deployedUserCount: 'DeployedUserCount',
      submittedUsageCount: 'SubmittedUsageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeInstanceCount: 'number',
      accumulativePocAmount: 'number',
      accumulativeUserCount: 'number',
      averagePocAmount: 'number',
      averagePocDuration: 'number',
      averagePocUnitAmount: 'number',
      deployedServiceInstanceCount: 'number',
      deployedUserCount: 'number',
      submittedUsageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodySupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of Contact information.
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The value of Contact information.
   * 
   * @example
   * supplier@test.com
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {
   *   "TemplateUrl": "http://template.file.url",
   *   // 应用分组级别告警元数据
   *   "ApplicationGroups": [
   *     {
   *       "Name": "applicationGroup1",
   *       "TemplateUrl": "url1"
   *     },
   *     {
   *       "Name": "applicationGroup2",
   *       "TemplateUrl": "url2"
   *     }
   *   ]
   * }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application. Valid values:
   * 
   * *   Manual: The application is manually approved.
   * *   AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The information of build service information.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The parameters for building the service
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * DevOps
   */
  categories?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: GetServiceResponseBodyCommodity;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadata?: GetServiceResponseBodyComplianceMetadata;
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The binding configurations of the commodity module.
   * 
   * @example
   * componesConfigs
   */
  crossRegionConnectionStatus?: string;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"TemplateConfigs\\":[{\\"Name\\":\\"模板1\\",\\"Url\\":\\"oss://computenest-test/template" 
   *             + ".json?RegionId=cn-beijing\\",\\"PredefinedParameters\\":[{\\"Name\\":\\"低配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":40}},{\\"Name\\":\\"高配版\\"," 
   *             + "\\"Parameters\\":{\\"InstanceType\\":\\"ecs.g5.large\\",\\"DataDiskSize\\":200}}]}]}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * *   container: The service is deployed by using a container.
   * *   pkg: The service is deployed by using a package.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  /**
   * @remarks
   * The report source.
   */
  entitySource?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is returned if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {"renewType":"MONTHLY"}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * { "Logstores": [ { "LogstoreName": "access-log", "LogPath": "/home/admin/app/logs", # This parameter is not required for containers. Configure the parameter in the YAML file. "FilePattern": "access.log\\*" # This parameter is not required for containers. Configure the parameter in the YAML file. } ] }
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The source for which fees are generated. Valid values:
   * 
   * *   None: No fees are generated.
   * *   Marketplace: Fees are generated for Alibaba Cloud Marketplace.
   * *   Custom: The custom fees.
   * 
   * @example
   * None
   */
  payFromType?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * sr-04056c2ab4b94bxxxxxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the distribution is supported. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzuqyxxxxxx
   */
  resourceGroupId?: string;
  secretKey?: string;
  /**
   * @remarks
   * The URL of the service audit file.
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/1690707531xxxxxx/service-document/be3382cd-xxxx-xxxx-xxxx-f8707ec12879.docx
   */
  serviceAuditDocumentUrl?: string;
  /**
   * @remarks
   * Indicates whether the service is visible. Valid values:
   * 
   * *   INVISIBLE
   * *   DISCOVERABLE
   * 
   * @example
   * DISCOVERABLE
   */
  serviceDiscoverable?: string;
  /**
   * @remarks
   * Service document information.
   */
  serviceDocumentInfos?: GetServiceResponseBodyServiceDocumentInfos[];
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceResponseBodyServiceInfos[];
  serviceLocaleConfigs?: GetServiceResponseBodyServiceLocaleConfigs[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * http://example2.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The share status of the instance.
   * 
   * > This parameter is discontinued.
   * 
   * @example
   * This parameter is discontinued.
   */
  shareTypeStatus?: string;
  /**
   * @remarks
   * The ID of the distribution source service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The version of the distribution source service.
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The name of the distribution source service provider.
   * 
   * @example
   * SourceSupplier
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The statistics.
   */
  statistic?: GetServiceResponseBodyStatistic;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Draft: The service is a draft.
   * *   Submitted: The service is submitted for review. You cannot modify services in this state.
   * *   Approved: The service is approved. You cannot modify services in this state. You can publish services in this state.
   * *   Launching: The service is being published.
   * *   Online: The service is published.
   * *   Offline: The service is unpublished.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The description of the service status.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * Contact information of the service provider.
   */
  supportContacts?: GetServiceResponseBodySupportContacts[];
  /**
   * @remarks
   * The service tags.
   */
  tags?: GetServiceResponseBodyTags[];
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The status of the test. Valid values:
   * 
   * *   `CONFIG_IS_NULL`: No test configurations exist.
   * *   `SERVICE_TEST_SUCCEED`: The service passed the test.
   * *   `SERVICE_TSET_DOING`: The service does not pass the test.
   * 
   * @example
   * SERVICE_TEST_SUCCEED
   */
  testStatus?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The time when the service was updated.
   * 
   * @example
   * 2021-05-22T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether the service is a virtual Internet service. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  virtualInternetService?: string;
  /**
   * @remarks
   * The ID of the virtual Internet service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  virtualInternetServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildInfo: 'BuildInfo',
      buildParameters: 'BuildParameters',
      categories: 'Categories',
      commodity: 'Commodity',
      complianceMetadata: 'ComplianceMetadata',
      createTime: 'CreateTime',
      crossRegionConnectionStatus: 'CrossRegionConnectionStatus',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      entitySource: 'EntitySource',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      payFromType: 'PayFromType',
      permission: 'Permission',
      policyNames: 'PolicyNames',
      progress: 'Progress',
      publishTime: 'PublishTime',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      resellable: 'Resellable',
      resourceGroupId: 'ResourceGroupId',
      secretKey: 'SecretKey',
      serviceAuditDocumentUrl: 'ServiceAuditDocumentUrl',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceDocumentInfos: 'ServiceDocumentInfos',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceLocaleConfigs: 'ServiceLocaleConfigs',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      shareTypeStatus: 'ShareTypeStatus',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      statistic: 'Statistic',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      supportContacts: 'SupportContacts',
      tags: 'Tags',
      tenantType: 'TenantType',
      testStatus: 'TestStatus',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      upgradeMetadata: 'UpgradeMetadata',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
      virtualInternetServiceId: 'VirtualInternetServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildInfo: 'string',
      buildParameters: 'string',
      categories: 'string',
      commodity: GetServiceResponseBodyCommodity,
      complianceMetadata: GetServiceResponseBodyComplianceMetadata,
      createTime: 'string',
      crossRegionConnectionStatus: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      entitySource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      payFromType: 'string',
      permission: 'string',
      policyNames: 'string',
      progress: 'number',
      publishTime: 'string',
      registrationId: 'string',
      requestId: 'string',
      resellable: 'boolean',
      resourceGroupId: 'string',
      secretKey: 'string',
      serviceAuditDocumentUrl: 'string',
      serviceDiscoverable: 'string',
      serviceDocumentInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceDocumentInfos },
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
      serviceLocaleConfigs: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceLocaleConfigs },
      serviceProductUrl: 'string',
      serviceType: 'string',
      shareType: 'string',
      shareTypeStatus: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      statistic: GetServiceResponseBodyStatistic,
      status: 'string',
      statusDetail: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      supportContacts: { 'type': 'array', 'itemType': GetServiceResponseBodySupportContacts },
      tags: { 'type': 'array', 'itemType': GetServiceResponseBodyTags },
      tenantType: 'string',
      testStatus: 'string',
      trialDuration: 'number',
      trialType: 'string',
      updateTime: 'string',
      upgradeMetadata: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
      virtualInternetServiceId: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.complianceMetadata && typeof (this.complianceMetadata as any).validate === 'function') {
      (this.complianceMetadata as any).validate();
    }
    if(this.entitySource) {
      $dara.Model.validateMap(this.entitySource);
    }
    if(Array.isArray(this.serviceDocumentInfos)) {
      $dara.Model.validateArray(this.serviceDocumentInfos);
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.serviceLocaleConfigs)) {
      $dara.Model.validateArray(this.serviceLocaleConfigs);
    }
    if(this.statistic && typeof (this.statistic as any).validate === 'function') {
      (this.statistic as any).validate();
    }
    if(Array.isArray(this.supportContacts)) {
      $dara.Model.validateArray(this.supportContacts);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

