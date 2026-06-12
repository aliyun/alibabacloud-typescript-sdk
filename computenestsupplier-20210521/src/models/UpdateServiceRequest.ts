// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestCommodityComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * This parameter is not publicly available.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * This parameter is not publicly available.
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

export class UpdateServiceRequestCommodityMeteringEntityExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The metering item ID.
   * 
   * @example
   * cmgj0006xxxx-Memory-1
   */
  entityId?: string;
  /**
   * @remarks
   * The metric name. This parameter is required when Type is set to ComputeNestBill or ComputeNestPrometheus.
   * 
   * @example
   * VirtualCpu/ecs.InstanceType
   */
  metricName?: string;
  /**
   * @remarks
   * The Prometheus statement.
   * 
   * @example
   * avg_over_time(sum(rate(container_cpu_usage_seconds_total{namespace=~"ALIYUN::StackName"}[2m]))[1h:10s])
   */
  promql?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - **Custom**
   * 
   * - **ComputeNestBill**
   * 
   * - **ComputeNestPrometheus**
   * 
   * - **ComputeNestTime**
   * 
   * @example
   * Custom
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

export class UpdateServiceRequestCommodityMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The metering item ID.
   */
  entityIds?: string[];
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * 低配版
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
      entityIds: { 'type': 'array', 'itemType': 'string' },
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityIds)) {
      $dara.Model.validateArray(this.entityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommoditySpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The specification code.
   * 
   * @example
   * yuncode5767800001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Basic edition
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

export class UpdateServiceRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available.
   */
  componentsMappings?: UpdateServiceRequestCommodityComponentsMappings[];
  /**
   * @remarks
   * The configuration information of the metering item. This parameter is used in the pay-as-you-go scenario of Alibaba Cloud Marketplace.
   */
  meteringEntityExtraInfos?: UpdateServiceRequestCommodityMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The mapping between templates or packages and metering dimensions. This parameter is used in the pay-as-you-go scenario of Alibaba Cloud Marketplace.
   */
  meteringEntityMappings?: UpdateServiceRequestCommodityMeteringEntityMappings[];
  /**
   * @remarks
   * The configuration of Software as a Service (SaaS) Boost.
   * 
   * @example
   * {}
   */
  saasBoostConfig?: string;
  /**
   * @remarks
   * The mapping between commodity specifications and templates or packages. This parameter is used in the subscription scenario of Alibaba Cloud Marketplace.
   */
  specificationMappings?: UpdateServiceRequestCommoditySpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      saasBoostConfig: 'SaasBoostConfig',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityMeteringEntityMappings },
      saasBoostConfig: 'string',
      specificationMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommoditySpecificationMappings },
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
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestComplianceMetadata extends $dara.Model {
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

export class UpdateServiceRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * The name of the agreement document.
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

export class UpdateServiceRequestServiceInfoSoftwares extends $dara.Model {
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

export class UpdateServiceRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the service agreements.
   */
  agreements?: UpdateServiceRequestServiceInfoAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
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
   * http://description.tidb.oss.url
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
   * The description of the service.
   * 
   * @example
   * B is an open-source distributed relational database independently designed and developed by Company A.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The information about the software used in the service.
   */
  softwares?: UpdateServiceRequestServiceInfoSoftwares[];
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
      agreements: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfoSoftwares },
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

export class UpdateServiceRequestServiceLocaleConfigs extends $dara.Model {
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
   * The raw data value of the business information.
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

export class UpdateServiceRequestUpdateOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to update the deployment file.
   * 
   * @example
   * true
   */
  updateArtifact?: boolean;
  /**
   * @remarks
   * The update option. Valid values:
   * 
   * - CODE: code.
   * 
   * - PARAMETERS: parameters.
   * 
   * @example
   * PARAMETERS
   */
  updateFrom?: string;
  static names(): { [key: string]: string } {
    return {
      updateArtifact: 'UpdateArtifact',
      updateFrom: 'UpdateFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateArtifact: 'boolean',
      updateFrom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations for the service.
   * 
   * > This configuration takes effect only after you configure an alert-related access policy for **PolicyNames**.
   * 
   * @example
   * {\\"CmsTemplateId\\":1162921,\\"TemplateUrl\\":\\"https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1760465342xxxxxx/template/c072ef50-6c03-4d9c-8f0e-d1c440xxxxxx.json\\"}
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The approval type for service usage requests. Valid values:
   * 
   * - Manual: The request is manually approved.
   * 
   * - AutoPass: The request is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
  /**
   * @remarks
   * The parameters for building the service.
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * A client token to ensure that the request is idempotent. You can use a client to generate the token. Make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity information.
   */
  commodity?: UpdateServiceRequestCommodity;
  /**
   * @remarks
   * The compliance check metadata.
   */
  complianceMetadata?: UpdateServiceRequestComplianceMetadata;
  /**
   * @remarks
   * The information about the service deployment configuration. The data format varies based on the deployment type. The value is a JSON string.
   * 
   * @example
   * {\\"EstimateTime\\":null,\\"SupplierDeployMetadata\\":{\\"DeployTimeout\\":7200},\\"EnableVnc\\":false}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - ros: The service is deployed using ROS.
   * 
   * - terraform: The service is deployed using Terraform.
   * 
   * - spi: The service is deployed by calling an SPI.
   * 
   * - operation: The service is an O\\&M service.
   * 
   * - container: The service is deployed using containers.
   * 
   * - pkg: The service is a package service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for the request. A dry run checks the permissions and the instance status. Valid values:
   * 
   * - true: sends the request but does not update the service.
   * 
   * - false: sends the request. If the check is successful, the service is updated.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The O\\&M duration. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  isDefault?: boolean;
  /**
   * @remarks
   * Specifies whether to enable O\\&M. Default value: false. Valid values:
   * 
   * - true: enables O\\&M.
   * 
   * - false: disables O\\&M.
   * 
   * > This parameter is required when **ServiceType** is set to **private**.
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
   * The O\\&M configuration.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"Custom_Image_Ecs\\":{\\"EnablePrometheus\\":false}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The policy name. The name of a single policy can be up to 128 characters in length. If you specify multiple policies, separate them with commas (,). Only O\\&M-related policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable distribution. Valid values:
   * 
   * - false: Distribution is not enabled.
   * 
   * - true: Distribution is enabled.
   * 
   * @example
   * false
   */
  resellable?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-1dda29c3eca648xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: UpdateServiceRequestServiceInfo[];
  /**
   * @remarks
   * The multilingual configurations of the service.
   */
  serviceLocaleConfigs?: UpdateServiceRequestServiceLocaleConfigs[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - private: The service instance is deployed in the user account.
   * 
   * - managed: The service instance is deployed in the service provider account.
   * 
   * - operation: The service instance is an O\\&M instance.
   * 
   * - poc: The service instance is a trial instance.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The sharing type. Valid values:
   * 
   * - Public: The service is public. Formal and trial deployments are not restricted.
   * 
   * - Restricted: The service is restricted. Formal and trial deployments are restricted.
   * 
   * - OnlyFormalRestricted: Only formal deployments are restricted.
   * 
   * - OnlyTrailRestricted: Only trial deployments are restricted.
   * 
   * - Hidden: The service is hidden. You cannot view the service or request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The tenant type. Valid values:
   * 
   * - SingleTenant: The service is single-tenant.
   * 
   * - MultiTenant: The service is multi-tenant.
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: days. The maximum trial duration is 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The update options.
   */
  updateOption?: UpdateServiceRequestUpdateOption;
  /**
   * @remarks
   * The upgrade metadata.
   * 
   * @example
   * {\\"Description\\":\\"xxx\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\"]}
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * Draft
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      approvalType: 'ApprovalType',
      buildParameters: 'BuildParameters',
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      complianceMetadata: 'ComplianceMetadata',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      dryRun: 'DryRun',
      duration: 'Duration',
      isDefault: 'IsDefault',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceLocaleConfigs: 'ServiceLocaleConfigs',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
      shareType: 'ShareType',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      updateOption: 'UpdateOption',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      buildParameters: 'string',
      clientToken: 'string',
      commodity: UpdateServiceRequestCommodity,
      complianceMetadata: UpdateServiceRequestComplianceMetadata,
      deployMetadata: 'string',
      deployType: 'string',
      dryRun: 'boolean',
      duration: 'number',
      isDefault: 'boolean',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfo },
      serviceLocaleConfigs: { 'type': 'array', 'itemType': UpdateServiceRequestServiceLocaleConfigs },
      serviceType: 'string',
      serviceVersion: 'string',
      shareType: 'string',
      tenantType: 'string',
      trialDuration: 'number',
      updateOption: UpdateServiceRequestUpdateOption,
      upgradeMetadata: 'string',
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
    if(Array.isArray(this.serviceInfo)) {
      $dara.Model.validateArray(this.serviceInfo);
    }
    if(Array.isArray(this.serviceLocaleConfigs)) {
      $dara.Model.validateArray(this.serviceLocaleConfigs);
    }
    if(this.updateOption && typeof (this.updateOption as any).validate === 'function') {
      (this.updateOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

