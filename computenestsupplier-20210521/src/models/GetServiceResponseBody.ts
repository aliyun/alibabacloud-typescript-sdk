// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodity } from "./GetServiceResponseBodyCommodity";
import { GetServiceResponseBodyComplianceMetadata } from "./GetServiceResponseBodyComplianceMetadata";
import { GetServiceResponseBodyServiceDocumentInfos } from "./GetServiceResponseBodyServiceDocumentInfos";
import { GetServiceResponseBodyServiceInfos } from "./GetServiceResponseBodyServiceInfos";
import { GetServiceResponseBodyStatistic } from "./GetServiceResponseBodyStatistic";
import { GetServiceResponseBodySupportContacts } from "./GetServiceResponseBodySupportContacts";
import { GetServiceResponseBodyTags } from "./GetServiceResponseBodyTags";


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
      serviceAuditDocumentUrl: 'ServiceAuditDocumentUrl',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceDocumentInfos: 'ServiceDocumentInfos',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
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
      serviceAuditDocumentUrl: 'string',
      serviceDiscoverable: 'string',
      serviceDocumentInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceDocumentInfos },
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
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

