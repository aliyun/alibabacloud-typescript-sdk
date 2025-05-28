// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodity } from "./GetServiceResponseBodyCommodity";
import { GetServiceResponseBodyComplianceMetadata } from "./GetServiceResponseBodyComplianceMetadata";
import { GetServiceResponseBodyInstanceRoleInfos } from "./GetServiceResponseBodyInstanceRoleInfos";
import { GetServiceResponseBodyServiceDocumentInfos } from "./GetServiceResponseBodyServiceDocumentInfos";
import { GetServiceResponseBodyServiceInfos } from "./GetServiceResponseBodyServiceInfos";
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

