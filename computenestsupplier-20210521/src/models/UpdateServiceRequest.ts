// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestCommodityComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available to the public.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is not available to the public.
   * 
   * @example
   * This parameter is not available to the public.
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
   * Metering entity ID.
   * 
   * @example
   * cmgj0006xxxx-Memory-1
   */
  entityId?: string;
  /**
   * @remarks
   * Metric name, required when type is ComputeNestBill or ComputeNestPrometheus.
   * 
   * @example
   * VirtualCpu/ecs.InstanceType
   */
  metricName?: string;
  /**
   * @remarks
   * Promql statement.
   * 
   * @example
   * avg_over_time(sum(rate(container_cpu_usage_seconds_total{namespace=~"ALIYUN::StackName"}[2m]))[1h:10s])
   */
  promql?: string;
  /**
   * @remarks
   * Type. Valid values:
   * 
   * - Custom
   * - ComputeNestBill
   * - ComputeNestPrometheus
   * - ComputeNestTime
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
   * Metering entity IDs.
   */
  entityIds?: string[];
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * This parameter is not publicly accessible.
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * The service ID.
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
   * Specification code.
   * 
   * @example
   * yuncode5767800001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * Type, value：
   * 
   * * **Custom**
   * * **ComputeNestBill**
   * * **ComputeNestPrometheus**
   * * **ComputeNestTime**
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Product Specifications and Template/specification mapping Relationships (Cloud Marketplace - Subscription/Permanent Use)
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
   * This parameter is not available to the public.
   */
  componentsMappings?: UpdateServiceRequestCommodityComponentsMappings[];
  /**
   * @remarks
   * Metering entity extra information.
   */
  meteringEntityExtraInfos?: UpdateServiceRequestCommodityMeteringEntityExtraInfos[];
  /**
   * @remarks
   * Binding relationship between templates/specifications and metering dimensions (marketplace - PayAsYouGo)
   */
  meteringEntityMappings?: UpdateServiceRequestCommodityMeteringEntityMappings[];
  /**
   * @remarks
   * SaaS Boost configuration.
   * 
   * @example
   * {}
   */
  saasBoostConfig?: string;
  /**
   * @remarks
   * Product specifications and template/package mappings (Used in marketplace - subscription scenario)
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
   * The compliance pack.
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
   * Protocol name.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Protocol url.
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
   * The name of the software.
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

export class UpdateServiceRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
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
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Metric Name, filled in when Type is ComputeNestBill or ComputeNestPrometheus
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * The URL of the detailed description of the service.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
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

export class UpdateServiceRequestUpdateOption extends $dara.Model {
  /**
   * @remarks
   * Whether to update artifact.
   * 
   * @example
   * true
   */
  updateArtifact?: boolean;
  /**
   * @remarks
   * Update from. Valid values:
   * 
   * - CODE
   * - PARAMETERS
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
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * {\\"CmsTemplateId\\":1162921,\\"TemplateUrl\\":\\"https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1760465342xxxxxx/template/c072ef50-6c03-4d9c-8f0e-d1c440xxxxxx.json\\"}
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
   * The Parameters to build service parameters.
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: UpdateServiceRequestCommodity;
  /**
   * @remarks
   * Compliance check metadata.
   */
  complianceMetadata?: UpdateServiceRequestComplianceMetadata;
  /**
   * @remarks
   * The deployment configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"EstimateTime\\":null,\\"SupplierDeployMetadata\\":{\\"DeployTimeout\\":7200},\\"EnableVnc\\":false}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * ros: The service is deployed by using Resource Orchestration Service (ROS).
   * terraform: The service is deployed by using Terraform.
   * ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * spi: The service is deployed by calling a service provider interface (SPI).
   * operation: The service is deployed by using a hosted O&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not update a service.
   * *   false: performs a dry run for the request, and update a service if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * Specifies whether to enable the hosted O\\&M feature for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is required if you set **ServiceType** to **private**.
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
   * Metering Item Configuration Information (Cloud Marketplace - Pay-As-You-Go Use)
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * Specifies whether to support distribution. Valid values:
   * 
   * *   false
   * *   true
   */
  logMetadata?: string;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"Custom_Image_Ecs\\":{\\"EnablePrometheus\\":false}}}
   */
  operationMetadata?: string;
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
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Whether resell is supported.
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
   * The service type. Valid values:
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
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
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
   * The update option.
   */
  updateOption?: UpdateServiceRequestUpdateOption;
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
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resellable: 'Resellable',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
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
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceRequestServiceInfo },
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
    if(this.updateOption && typeof (this.updateOption as any).validate === 'function') {
      (this.updateOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

