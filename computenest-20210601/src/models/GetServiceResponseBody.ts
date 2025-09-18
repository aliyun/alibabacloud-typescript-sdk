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
   * Template one.
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

export class GetServiceResponseBodyCommodityCssMetadata extends $dara.Model {
  /**
   * @remarks
   * The mapping information about the billing items.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
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
   * cmjj00****
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package one.
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
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

export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $dara.Model {
  /**
   * @remarks
   * The mappings between the service specifications and the template or package.
   */
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
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
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration metadata related to Lingxiao.
   */
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  /**
   * @remarks
   * The deploy page.
   * 
   * @example
   * Order： Order page
   * Detail： Detail page
   */
  deployPage?: string;
  /**
   * @remarks
   * The metadata of Alibaba Cloud Marketplace.
   */
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  /**
   * @remarks
   * The order time.
   */
  orderTime?: { [key: string]: string[] };
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * {
   *     "Enabled":false    "PublicAccessUrl":"https://example.com"
   * }
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
      cssMetadata: 'CssMetadata',
      deployPage: 'DeployPage',
      marketplaceMetadata: 'MarketplaceMetadata',
      orderTime: 'OrderTime',
      saasBoostMetadata: 'SaasBoostMetadata',
      specifications: 'Specifications',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      cssMetadata: GetServiceResponseBodyCommodityCssMetadata,
      deployPage: 'string',
      marketplaceMetadata: GetServiceResponseBodyCommodityMarketplaceMetadata,
      orderTime: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      saasBoostMetadata: 'string',
      specifications: { 'type': 'array', 'itemType': GetServiceResponseBodyCommoditySpecifications },
      type: 'string',
    };
  }

  validate() {
    if(this.cssMetadata && typeof (this.cssMetadata as any).validate === 'function') {
      (this.cssMetadata as any).validate();
    }
    if(this.marketplaceMetadata && typeof (this.marketplaceMetadata as any).validate === 'function') {
      (this.marketplaceMetadata as any).validate();
    }
    if(this.orderTime) {
      $dara.Model.validateMap(this.orderTime);
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
   * The compliance pack list.
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

export class GetServiceResponseBodyInstanceRoleInfos extends $dara.Model {
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The information of the RAM entity.
   */
  principals?: string[];
  /**
   * @remarks
   * The ram role name.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      principals: 'Principals',
      roleName: 'RoleName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      principals: { 'type': 'array', 'itemType': 'string' },
      roleName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
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
   * https://help.aliyun.com/zh/compute-nest/use-cases/deploy-an-sd-painting-service-instance?spm=a2c4g.11186623.0.i2
   */
  documentUrl?: string;
  /**
   * @remarks
   * The language that you use for the query. Valid values: zh-CN and en-US.
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
   * Template one.
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
   * User agreement
   */
  name?: string;
  /**
   * @remarks
   * The agreement URL.
   * 
   * @example
   * https://url
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
   * The name of the Software.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 6.0.1
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
   * The service name.
   * 
   * @example
   * Service document information.
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * Docker Community Edition (CE) is a free version of the Docker project, aimed at developers, enthusiasts, and individuals and organizations who want to use container technology.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: GetServiceResponseBodyServiceInfosSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
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

export class GetServiceResponseBodySupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of contact information.
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The value of contact information.
   * 
   * @example
   * supplier@example.com
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
   * { "TemplateUrl": "http://template.file.url", "ApplicationGroups": [ { "Name": "applicationGroup1", "TemplateUrl": "url1" }, { "Name": "applicationGroup2", "TemplateUrl": "url2" } ] }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The categories of the Flow.
   * 
   * @example
   * AI
   */
  categories?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace.
   */
  commodity?: GetServiceResponseBodyCommodity;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadata?: GetServiceResponseBodyComplianceMetadata;
  /**
   * @remarks
   * Service deployment approach, Valid values：
   * 
   * - NoWhere
   * - Marketplace
   * - ComputeNest
   * 
   * @example
   * Marketplace
   */
  deployFrom?: string;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"TemplateUrl\\": \\"http://tidbRosFile\\"}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
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
   * Information about the ram role created in the service template.
   */
  instanceRoleInfos?: GetServiceResponseBodyInstanceRoleInfos[];
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
   * {\\"PayType\\":\\"CustomFixTime\\",\\"DefaultLicenseDays\\":7,\\"CustomMetadata\\":[{\\"TemplateName\\":\\"ECS\\",\\"SpecificationName\\":\\"bandwith-0\\",\\"CustomData\\":\\"1\\"}]}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * {\\"Logstores\\":[]}
   */
  logMetadata?: string;
  /**
   * @remarks
   * The operation metadata.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
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
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
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
   * service-0e6fca6a51a544xxxxxx
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
   * http://example1.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - private: The service is a private service and is deployed within the account of a customer.
   * - managed: The service is a fully managed service and is deployed within the account of a service provider.
   * - operation: The service is a hosted O&M service.
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
   * The deploy status of the service. Valid values:
   * - Draft
   * - Beta
   * - Submitted
   * - Approved
   * - Launching
   * - Online
   * - Offline
   * - Creating
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The description of service provider.
   * 
   * @example
   * Computing Nest Community service
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The Logo of service provider.
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/xxx/service-image/xxx.png
   */
  supplierLogo?: string;
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
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 158927391332*****
   */
  supplierUid?: number;
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
   * Contact information of the service provider
   */
  supportContacts?: GetServiceResponseBodySupportContacts[];
  /**
   * @remarks
   * The tags.
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
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      categories: 'Categories',
      commodity: 'Commodity',
      complianceMetadata: 'ComplianceMetadata',
      deployFrom: 'DeployFrom',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      instanceRoleInfos: 'InstanceRoleInfos',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      permission: 'Permission',
      policyNames: 'PolicyNames',
      publishTime: 'PublishTime',
      requestId: 'RequestId',
      serviceDocumentInfos: 'ServiceDocumentInfos',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceLocaleConfigs: 'ServiceLocaleConfigs',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      status: 'Status',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
      supportContacts: 'SupportContacts',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      categories: 'string',
      commodity: GetServiceResponseBodyCommodity,
      complianceMetadata: GetServiceResponseBodyComplianceMetadata,
      deployFrom: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      instanceRoleInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyInstanceRoleInfos },
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      permission: 'string',
      policyNames: 'string',
      publishTime: 'string',
      requestId: 'string',
      serviceDocumentInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceDocumentInfos },
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
      serviceLocaleConfigs: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceLocaleConfigs },
      serviceProductUrl: 'string',
      serviceType: 'string',
      shareType: 'string',
      status: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierUid: 'number',
      supplierUrl: 'string',
      supportContacts: { 'type': 'array', 'itemType': GetServiceResponseBodySupportContacts },
      tags: { 'type': 'array', 'itemType': GetServiceResponseBodyTags },
      tenantType: 'string',
      trialDuration: 'number',
      trialType: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.complianceMetadata && typeof (this.complianceMetadata as any).validate === 'function') {
      (this.complianceMetadata as any).validate();
    }
    if(Array.isArray(this.instanceRoleInfos)) {
      $dara.Model.validateArray(this.instanceRoleInfos);
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

