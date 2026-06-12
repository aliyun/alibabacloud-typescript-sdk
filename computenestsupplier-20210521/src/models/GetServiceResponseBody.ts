// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityCssMetadataComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * The mapping.
   */
  mappings?: { [key: string]: string };
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
   * The metering item ID.
   * 
   * @example
   * cmgj0048****-Frequency-1
   */
  entityId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * AvgMemory
   */
  metricName?: string;
  /**
   * @remarks
   * The custom Prometheus statement.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * The metering metric.
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
   * The metering item ID.
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
   * 按量付费套餐
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
   * The billing item mapping.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  /**
   * @remarks
   * The configuration information of the metering item.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The binding relationship between the package and the metering dimension.
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
   * The metering item ID.
   * 
   * @example
   * cmgj1596****-NetworkOut-2
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the metering metric.
   * 
   * @example
   * NetworkLantency
   */
  metricName?: string;
  /**
   * @remarks
   * The custom Prometheus statement.
   * 
   * @example
   * avg_over_time(count(kube_pod_info{namespace=\\"default\\"})[1h:1m])
   */
  promql?: string;
  /**
   * @remarks
   * The metering metric.
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
   * The metering item ID.
   * 
   * @example
   * cmgj1596****-NetworkOut-2
   */
  entityIds?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Pay-as-you-go plan
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

export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The commodity specification code of Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
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
   * The trial type.
   * 
   * Valid values:
   * 
   * - Trial: Trial is supported.
   * 
   * - NotTrial: Trial is not supported.
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
   * The configuration information of the metering item.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The binding relationship between the package and the metering dimension.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings[];
  /**
   * @remarks
   * The relationship between commodity specifications and templates or packages.
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
   * The metering item ID.
   * 
   * @example
   * cmgj5682****-NetworkOut
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the metering item property.
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
   * cmjj00****
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
   * The purchasable duration. Unit: week or year.
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
   * The billing method.
   * 
   * Valid values:
   * 
   * - **PREPAY** (default): subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of Alibaba Cloud Marketplace.
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
   * The configuration metadata of Lingxiao.
   */
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  /**
   * @remarks
   * The metadata of Alibaba Cloud Marketplace.
   */
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  /**
   * @remarks
   * The metering information.
   */
  meteringEntities?: GetServiceResponseBodyCommodityMeteringEntities[];
  /**
   * @remarks
   * The configuration metadata of SaaS Boost.
   * 
   * @example
   * {
   *     "Enabled":false
   *     //Public access URL
   *     "PublicAccessUrl":"https://example.com"
   * }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The details of the Alibaba Cloud Marketplace specifications.
   */
  specifications?: GetServiceResponseBodyCommoditySpecifications[];
  /**
   * @remarks
   * The type.
   * 
   * Valid values:
   * 
   * - Marketplace: Alibaba Cloud Marketplace.
   * 
   * - Css: Lingxiao.
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
   * The selected compliance package.
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
   * The URL of the document.
   * 
   * @example
   * http://doc.com
   */
  documentUrl?: string;
  /**
   * @remarks
   * The language of the service configuration. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English.
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
   * 模板1
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
   * The URL of the agreement.
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
   * The software name.
   * 
   * @example
   * MySQL
   */
  name?: string;
  /**
   * @remarks
   * The software version.
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
   * The information about the service agreement.
   */
  agreements?: GetServiceResponseBodyServiceInfosAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f35660****.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service configuration.
   * 
   * Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English.
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
   * Database B
   */
  name?: string;
  /**
   * @remarks
   * The summary of the service.
   * 
   * @example
   * B is an open-source distributed relational database independently designed and developed by Company A.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The information about the software used in the service.
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
  /**
   * @remarks
   * The English value of the business information.
   * 
   * @example
   * Service Name
   */
  enValue?: string;
  /**
   * @remarks
   * The original value of the business information.
   * 
   * @example
   * Service Name
   */
  originalValue?: string;
  /**
   * @remarks
   * The Chinese value of the business information.
   * 
   * @example
   * 服务名称
   */
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
   * The total number of service instances. This includes deleted instances.
   * 
   * @example
   * 75
   */
  accumulativeInstanceCount?: number;
  /**
   * @remarks
   * The total consumption amount of the trial service. Unit: CNY.
   * 
   * @example
   * 80.35
   */
  accumulativePocAmount?: number;
  /**
   * @remarks
   * The total number of users. This includes historical users.
   * 
   * @example
   * 60
   */
  accumulativeUserCount?: number;
  /**
   * @remarks
   * The average consumption amount of a trial service instance. Unit: CNY.
   * 
   * @example
   * 40.17
   */
  averagePocAmount?: number;
  /**
   * @remarks
   * The average trial duration of a service instance. Unit: hours.
   * 
   * @example
   * 1
   */
  averagePocDuration?: number;
  /**
   * @remarks
   * The average consumption amount of a trial service instance per unit of time. Unit: CNY.
   * 
   * @example
   * 167.9
   */
  averagePocUnitAmount?: number;
  /**
   * @remarks
   * The number of online service instances. This indicates the number of service instances that are successfully deployed.
   * 
   * @example
   * 20
   */
  deployedServiceInstanceCount?: number;
  /**
   * @remarks
   * The number of online users. This indicates the number of users who have successfully deployed service instances.
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
   * The type of the contact information.
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The contact information.
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
   * @example
   * {
   *   "TemplateUrl": "http://template.file.url",
   *   // Application group level alarm metadata
   *   "ApplicationGroups": [
   *     {
   *       "Name": "applicationGroup1",
   *       "TemplateUrl": "url1"
   *     },
   *     {
   *       "Name": "applicationGroup2",
   *       "TemplateUrl": "url2"
   *     }
   *   ]
   * }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type of the service usage application.
   * 
   * Valid values:
   * 
   * - Manual: The application is manually approved.
   * 
   * - AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The information about the build service.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The parameters of the build service.
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * The service category.
   * 
   * @example
   * DevOps
   */
  categories?: string;
  /**
   * @remarks
   * The commodity specifications.
   */
  commodity?: GetServiceResponseBodyCommodity;
  /**
   * @remarks
   * The compliance check metadata.
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
   * The binding relationship of the commodity module.
   * 
   * @example
   * componesConfigs
   */
  crossRegionConnectionStatus?: string;
  /**
   * @remarks
   * The information about the service deployment configuration.
   * 
   * The information varies based on the deployment type. Different deployment types use different data formats. Therefore, the information is stored as a JSON string.
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
   * The deployment type.
   * 
   * Valid values:
   * 
   * - ros: The service is deployed using ROS.
   * 
   * - terraform: The service is deployed using Terraform.
   * 
   * - spi: The service is deployed by calling SPI.
   * 
   * - operation: The service is deployed using Alibaba Cloud Managed Services.
   * 
   * - container: The service is deployed using containers.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The duration of the Alibaba Cloud Managed Services. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  /**
   * @remarks
   * The source of the reported data.
   */
  entitySource?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether Alibaba Cloud Managed Services is enabled.
   * 
   * Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
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
   * {\\"PayType\\":\\"CustomFixTime\\",\\"DefaultLicenseDays\\":7,\\"CustomMetadata\\":[{\\"TemplateName\\":\\" template1\\",\\"SpecificationName\\":\\"bandwith-0\\",\\"CustomData\\":\\"1\\"}]}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The application log configurations.
   * 
   * @example
   * {
   *   "Logstores": [
   *     {
   *     "LogstoreName": "access-log",
   *   "LogPath": "/home/admin/app/logs", # Not required for containers. Configure in YAML
   *   "FilePattern": "access.log*" # Not required for containers. Configure in YAML
   *     }
   *   ]
   * }
   */
  logMetadata?: string;
  /**
   * @remarks
   * The configurations of Alibaba Cloud Managed Services.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The payment source.
   * 
   * Valid values:
   * 
   * - None: The service is free of charge.
   * 
   * - Marketplace: The service is paid on Alibaba Cloud Marketplace.
   * 
   * - Custom: The service is paid using a custom payment method.
   * 
   * @example
   * None
   */
  payFromType?: string;
  /**
   * @remarks
   * The permission type.
   * 
   * Valid values:
   * 
   * - Deployable: The service can be deployed.
   * 
   * - Accessible: The service can be accessed.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The policy names.
   * 
   * A policy name can be up to 128 characters in length. Multiple policy names are separated by commas (,). Only policies related to Alibaba Cloud Managed Services are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: %.
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
   * sr-1b4aabc1c9eb4109****
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AC8E73E-88DE-52C2-A29B-531FC13A5604
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the service can be distributed.
   * 
   * Valid values:
   * 
   * - false: The service cannot be distributed.
   * 
   * - true: The service can be distributed.
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2jfvb7b****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service key. It is used for digital signature encryption.
   * 
   * @example
   * 6cfc5d4649c54216****
   */
  secretKey?: string;
  /**
   * @remarks
   * The URL of the service review file.
   */
  serviceAuditDocumentUrl?: string;
  /**
   * @remarks
   * Indicates whether the service is discoverable.
   * 
   * Valid values:
   * 
   * - INVISIBLE: The service is not discoverable.
   * 
   * - DISCOVERABLE: The service is discoverable.
   * 
   * @example
   * DISCOVERABLE
   */
  serviceDiscoverable?: string;
  /**
   * @remarks
   * The service document information.
   */
  serviceDocumentInfos?: GetServiceResponseBodyServiceDocumentInfos[];
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-ca83ff3cb6b14dbc****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service information.
   */
  serviceInfos?: GetServiceResponseBodyServiceInfos[];
  /**
   * @remarks
   * The multi-language configurations of the service.
   */
  serviceLocaleConfigs?: GetServiceResponseBodyServiceLocaleConfigs[];
  /**
   * @remarks
   * The URL of the product page.
   * 
   * @example
   * http://example2.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The service type.
   * 
   * Valid values:
   * 
   * - private: The service is deployed in the user\\"s account.
   * 
   * - managed: The service is deployed in the service provider\\"s account.
   * 
   * - operation: The service is an Alibaba Cloud Managed Service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The sharing type.
   * 
   * Valid values:
   * 
   * - Public: The service is public. Formal and trial deployments are not restricted.
   * 
   * - Restricted: The service is restricted. Formal and trial deployments are restricted.
   * 
   * - OnlyFormalRestricted: Only formal deployments are restricted.
   * 
   * - OnlyTrailRestricted: Only trial deployments are restricted.
   * 
   * - Hidden: The service is hidden. It is not visible and you cannot apply for deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The sharing status of the service. >Notice: This parameter is deprecated.
   * 
   * @example
   * This parameter is deprecated.
   */
  shareTypeStatus?: string;
  /**
   * @remarks
   * The ID of the source service for distribution.
   * 
   * @example
   * service-70a3b15bb6264315****
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The version of the source service for distribution.
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The name of the service provider of the source service for distribution.
   * 
   * @example
   * SourceSupplier
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The statistics information.
   */
  statistic?: GetServiceResponseBodyStatistic;
  /**
   * @remarks
   * The service status.
   * 
   * Valid values:
   * 
   * - Draft: The service is in the draft state.
   * 
   * - Submitted: The service is submitted for review. You cannot modify the service.
   * 
   * - Approved: The service is approved. You cannot modify the service, but you can publish the service.
   * 
   * - Launching: The service is being published.
   * 
   * - Online: The service is published.
   * 
   * - Offline: The service is unpublished.
   * 
   * - Beta: The service is in beta.
   * 
   * - Creating: The service is being created.
   * 
   * - CreateFailed: The service failed to be created.
   * 
   * - Updating: The service is being updated.
   * 
   * - UpdateFailed: The service failed to be updated.
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
   * Company A
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
   * The contact information of the service provider.
   */
  supportContacts?: GetServiceResponseBodySupportContacts[];
  /**
   * @remarks
   * The service tags.
   */
  tags?: GetServiceResponseBodyTags[];
  /**
   * @remarks
   * The tenant type.
   * 
   * Valid values:
   * 
   * - SingleTenant: single-tenant.
   * 
   * - MultiTenant: multitenancy.
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The test status.
   * 
   * Valid values:
   * 
   * - CONFIG_IS_NULL: The test configuration does not exist.
   * 
   * - SERVICE_TEST_SUCCEED: The service passed the test.
   * 
   * - SERVICE_TSET_DOING: The service has not passed the test.
   * 
   * @example
   * SERVICE_TEST_SUCCEED
   */
  testStatus?: string;
  /**
   * @remarks
   * The trial duration. Unit: days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The trial type.
   * 
   * Valid values:
   * 
   * - Trial: The service supports trial.
   * 
   * - NotTrial: The service does not support trial.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The time when the service was last updated.
   * 
   * @example
   * 2021-05-22T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The upgrade metadata.
   * 
   * @example
   * {\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
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
   * Indicates whether the service is a virtual Internet service.
   * 
   * Valid values:
   * 
   * - false: No.
   * 
   * - true: Yes.
   * 
   * @example
   * false
   */
  virtualInternetService?: string;
  /**
   * @remarks
   * The virtual Internet service ID.
   * 
   * @example
   * service-70a3b15bb6264345****
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

