// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceShrinkRequestServiceInfoAgreements extends $dara.Model {
  /**
   * @remarks
   * The name of the agreement.
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

export class CreateServiceShrinkRequestServiceInfoSoftwares extends $dara.Model {
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

export class CreateServiceShrinkRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the service agreements.
   */
  agreements?: CreateServiceShrinkRequestServiceInfoAgreements[];
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
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The detailed description of the service.
   * 
   * @example
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * TiDB Database
   */
  name?: string;
  /**
   * @remarks
   * A brief description of the service.
   * 
   * @example
   * TiDB is an open-source distributed relational database designed and developed by Company A.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The information about the software used in the service.
   */
  softwares?: CreateServiceShrinkRequestServiceInfoSoftwares[];
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
      agreements: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfoSoftwares },
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

export class CreateServiceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Web
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

export class CreateServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations for the service.
   * 
   * > This configuration takes effect only after an alert-related access policy is configured in \\`PolicyNames\\`.
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
   * The approval type for service usage requests. Valid values:
   * 
   * - Manual: The request requires manual approval.
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
   * A client token used to ensure the idempotence of the request. Generate a unique value for this parameter from your client. \\`ClientToken\\` supports only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The compliance check metadata.
   */
  complianceMetadataShrink?: string;
  /**
   * @remarks
   * The deployment configuration of the service. The information stored varies by deployment type. Different deployment types have different data formats. The data is stored in a JSON string.
   * 
   * @example
   * {"TemplateConfigs":[{"Name":"Template 1","Url":"oss://computenest-test/template.json?RegionId=cn-beijing","PredefinedParameters":[{"Name":"Basic","Parameters":{"InstanceType":"ecs.g5.large","DataDiskSize":40}},{"Name":"Advanced","Parameters":{"InstanceType":"ecs.g5.large","DataDiskSize":200}}]}]}
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
   * - ack: The service is deployed using ACK.
   * 
   * - spi: The service is deployed by invoking an SPI.
   * 
   * - operation: The service is an O\\&M service.
   * 
   * This parameter is required.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check the request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The O\\&M duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable O\\&M. Default value: false. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * > This parameter is required when \\`ServiceType\\` is set to \\`private\\`.
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
   * The application log configuration.
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
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The policy name. The name of a single policy can be up to 128 characters in length. Separate multiple names with commas (,). Only policies related to O\\&M parameters are supported.
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
   * Specifies whether the service can be distributed. Valid values:
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
   * rg-aek25refu7r3opq
   */
  resourceGroupId?: string;
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
   * The service details.
   */
  serviceInfo?: CreateServiceShrinkRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - private: The service instance is deployed in the user\\"s account.
   * 
   * - managed: The service instance is managed in the service provider\\"s account.
   * 
   * - operation: An O\\&M service instance.
   * 
   * - poc: A trial service instance.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The sharing type. Valid values:
   * 
   * - Public: The service is public. Full and trial deployments are not restricted.
   * 
   * - Restricted: The service is restricted. Full and trial deployments are restricted.
   * 
   * - OnlyFormalRestricted: Only full deployments are restricted.
   * 
   * - OnlyTrailRestricted: Only trial deployments are restricted.
   * 
   * - Hidden: The service is hidden. It is not visible and you cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The ID of the source service for distribution.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
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
   * The custom tags.
   */
  tag?: CreateServiceShrinkRequestTag[];
  /**
   * @remarks
   * The tenant type. Valid values:
   * 
   * - SingleTenant: Single-tenant.
   * 
   * - MultiTenant: Multitenant.
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
      complianceMetadataShrink: 'ComplianceMetadata',
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
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      tag: 'Tag',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
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
      complianceMetadataShrink: 'string',
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
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfo },
      serviceType: 'string',
      shareType: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceShrinkRequestTag },
      tenantType: 'string',
      trialDuration: 'number',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfo)) {
      $dara.Model.validateArray(this.serviceInfo);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

