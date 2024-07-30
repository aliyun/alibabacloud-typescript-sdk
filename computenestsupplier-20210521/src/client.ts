// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddServiceSharedAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-63b8a060e9d54cxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The shared account and permissions of the service.
   * 
   * This parameter is required.
   */
  sharedAccounts?: AddServiceSharedAccountsRequestSharedAccounts[];
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sharedAccounts: 'SharedAccounts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      sharedAccounts: { 'type': 'array', 'itemType': AddServiceSharedAccountsRequestSharedAccounts },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2815213-EA4F-5759-8EA1-56DD051BB3FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddServiceSharedAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddServiceSharedAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveServiceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Approval comments.
   * 
   * @example
   * Welcome to TuGraph. Your application has been approved. Should you have any questions, please feel free to email us at tugraph@service.alipay.com or call our contact number 400-903-0809. Contact person: Yuansu.
   */
  comments?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * ServiceSharedAccountType，
   * 
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * User ali uid.
   * 
   * This parameter is required.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      comments: 'Comments',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'number',
      userAliUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveServiceUsageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveServiceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveServiceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: string;
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
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      parameters: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: ContinueDeployServiceInstanceResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82DF27ED-E538-5AC0-A11C-39334A873189
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: ContinueDeployServiceInstanceResponseBodyDryRunResult,
      requestId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueDeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContinueDeployServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment object.
   */
  artifactProperty?: CreateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   EcsImage: Elastic Compute Service (ECS) image.
   * *   AcrImage: container image.
   * *   File: Object Storage Service (OSS) object.
   * *   Script: script.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The supported regions.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactRequestTag[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: CreateArtifactRequestArtifactProperty,
      artifactType: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactRequestTag },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment object.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   EcsImage: Elastic Compute Service (ECS) image.
   * *   AcrImage: container image.
   * *   File: Object Storage Service (OSS) object.
   * *   Script: script.
   * 
   * This parameter is required.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The supported regions.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateArtifactShrinkRequestTag[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      supportRegionIds: 'SupportRegionIds',
      tag: 'Tag',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      artifactType: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateArtifactShrinkRequestTag },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment object.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Test artifact
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-11-11T12:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 1
   */
  maxVersion?: number;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
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
   * The status of the deployment package. Valid values:
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * [
   * 			"cn-beijing",
   * 			"cn-hangzhou",
   * 			"cn-shanghai"
   * 		]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      requestId: 'string',
      status: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
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
   * The parameters for building the service
   * 
   * @example
   * { "ServiceTemplateId": "st-xxxxx"}
   */
  buildParameters?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * This parameter is required.
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
   * 0
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
   * {\\"RetentionDays\\":3}
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
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
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
   * Whether resell is supported.
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
  serviceInfo?: CreateServiceRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
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
   * The source service ID for resell。
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The source service version for resell。
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceRequestTag[];
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
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
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
      deployMetadata: 'string',
      deployType: 'string',
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
      serviceInfo: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfo },
      serviceType: 'string',
      shareType: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceRequestTag },
      tenantType: 'string',
      trialDuration: 'number',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
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
   * The status of the service.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the service instance was released.
   * 
   * >  This parameter is available only for the service instances that are managed by service providers.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-12T03:13:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are specified for service instance deployment.
   * 
   * >  If you want to specify the region in which the service instance is deployed, you must specify the information in Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   ap-southeast-1: Singapore
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
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
   * The name of the package specification.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceRequestTag[];
  /**
   * @remarks
   * The template name. You must specify a template name if the service supports multiple templates.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the service instance was released.
   * 
   * >  This parameter is available only for the service instances that are managed by service providers.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-12T03:13:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are specified for service instance deployment.
   * 
   * >  If you want to specify the region in which the service instance is deployed, you must specify the information in Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   ap-southeast-1: Singapore
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
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
   * The name of the package specification.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The template name. You must specify a template name if the service supports multiple templates.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-c2d118c9193e49xxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The IDs of the service instances.
   * 
   * This parameter is required.
   */
  serviceInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB140E67-D75F-5585-946E-41D8DC8F4E00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8A6AEA6-0D8F-589A-A7FF-B44FD842456E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * gpu-test
   */
  artifactName?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 1
   */
  artifactVersion?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactName: 'ArtifactName',
      artifactVersion: 'ArtifactVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactName: 'string',
      artifactVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 2
   */
  maxVersion?: number;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The distribution progress of the deployment package.
   * 
   * @example
   * 100
   */
  progress?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * ["cn-hangzhou","cn-beijing"]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The tags of the deployment package.
   */
  tags?: GetArtifactResponseBodyTags[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      progress: 'Progress',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      tags: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'number',
      name: 'string',
      progress: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      supportRegionIds: 'string',
      tags: { 'type': 'array', 'itemType': GetArtifactResponseBodyTags },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   File: Object Storage Service (OSS) object.
   * *   AcrImage: container image.
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      deployRegionId: 'DeployRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      deployRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the resources that can be uploaded.
   */
  availableResources?: GetArtifactRepositoryCredentialsResponseBodyAvailableResources[];
  /**
   * @remarks
   * The credentials.
   */
  credentials?: GetArtifactRepositoryCredentialsResponseBodyCredentials;
  /**
   * @remarks
   * The time when the credentials expired.
   * 
   * @example
   * 1526549792000
   */
  expireDate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E89857-B994-44B6-9C4F-DBD200E9XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      credentials: 'Credentials',
      expireDate: 'ExpireDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': GetArtifactRepositoryCredentialsResponseBodyAvailableResources },
      credentials: GetArtifactRepositoryCredentialsResponseBodyCredentials,
      expireDate: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactRepositoryCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactRepositoryCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to filter information based on Alibaba Cloud account IDs.
   * 
   * @example
   * false
   */
  filterAliUid?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-4ee86df83fd948******
   */
  serviceId?: string;
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
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Resell: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  sharedAccountType?: string;
  /**
   * @remarks
   * The information that you want to query.
   */
  showDetail?: string[];
  static names(): { [key: string]: string } {
    return {
      filterAliUid: 'FilterAliUid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      sharedAccountType: 'SharedAccountType',
      showDetail: 'ShowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterAliUid: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      sharedAccountType: 'string',
      showDetail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
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
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
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
   * The validity period of the default license. Unit: day. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  defaultLicenseDays?: number;
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
   * The billing method of the service. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Permanent
   */
  payType?: string;
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
   * The URL of the service documentation.
   * 
   * @example
   * http://example1.com
   */
  serviceDocUrl?: string;
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
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      crossRegionConnectionStatus: 'CrossRegionConnectionStatus',
      defaultLicenseDays: 'DefaultLicenseDays',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      entitySource: 'EntitySource',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      payFromType: 'PayFromType',
      payType: 'PayType',
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
      serviceDocUrl: 'ServiceDocUrl',
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
      categories: 'string',
      commodity: GetServiceResponseBodyCommodity,
      commodityCode: 'string',
      createTime: 'string',
      crossRegionConnectionStatus: 'string',
      defaultLicenseDays: 'number',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      entitySource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      payFromType: 'string',
      payType: 'string',
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
      serviceDocUrl: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   */
  commodity?: GetServiceEstimateCostRequestCommodity;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"PayType\\":\\"PostPaid\\",\\"InstancePassword\\":\\"xxxxxxxxxx\\",\\"EcsInstanceType\\":\\"ecs.g6.large\\",\\"VSwitchId\\":\\"vsw-0jlueyydpuekoxxxxxxxx\\",\\"VpcId\\":\\"vpc-0jlps6mjbgvpqxxxxxxxx\\",\\"ZoneId\\":\\"cn-wulanchabu-a\\",\\"Enable\\":false,\\"RegionId\\":\\"cn-wulanchabu\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-16fbd358d75e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Custom_Image_Ecs
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: GetServiceEstimateCostRequestCommodity,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * mRdxWuW2ts
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   */
  commodityShrink?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {\\"PayType\\":\\"PostPaid\\",\\"InstancePassword\\":\\"xxxxxxxxxx\\",\\"EcsInstanceType\\":\\"ecs.g6.large\\",\\"VSwitchId\\":\\"vsw-0jlueyydpuekoxxxxxxxx\\",\\"VpcId\\":\\"vpc-0jlps6mjbgvpqxxxxxxxx\\",\\"ZoneId\\":\\"cn-wulanchabu-a\\",\\"Enable\\":false,\\"RegionId\\":\\"cn-wulanchabu\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-16fbd358d75e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Custom_Image_Ecs
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityShrink: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponseBody extends $tea.Model {
  /**
   * @remarks
   * The subscription duration information about the purchase order of Alibaba Cloud Marketplace.
   * 
   * @example
   * {\\"PayPeriodUnit\\":Month,\\"PayPeriod\\":1}
   */
  commodity?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * @example
   * {
   *       "ECSInstances":{
   *         "Type":"ALIYUN::ECS::InstanceGroup",
   *         "Success":true,
   *         "Result":{
   *           "Order":{
   *             "Currency":"CNY",
   *             "RuleIds":[
   *               1752723
   *             ],
   *             "DetailInfos":{
   *               "ResourcePriceModel":[
   *                 {
   *                   "Resource":"bandwidth",
   *                   "TradeAmount":0.0,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.0,
   *                   "DiscountAmount":0.0
   *                 },
   *                 {
   *                   "Resource":"image",
   *                   "TradeAmount":0.0,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.0,
   *                   "DiscountAmount":0.0
   *                 },
   *                 {
   *                   "Resource":"instanceType",
   *                   "TradeAmount":0.006966,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.45,
   *                   "DiscountAmount":0.443034
   *                 },
   *                 {
   *                   "Resource":"systemDisk",
   *                   "TradeAmount":0.000867,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.056,
   *                   "DiscountAmount":0.055133
   *                 },
   *                 {
   *                   "Resource":"dataDisk",
   *                   "TradeAmount":0.002167,
   *                   "SubRuleIds":[],
   *                   "OriginalAmount":0.14,
   *                   "DiscountAmount":0.137833
   *                 }
   *               ]
   *             }
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceEstimateCostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceEstimateCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceRequest extends $tea.Model {
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
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * *   Normal: The service instance is normal.
   * *   Renewing: The service instance is being renewed.
   * *   RenewFailed: The service instance failed to be renewed.
   * *   Expired: The service instance expired.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Indicates whether the Prometheus monitoring feature is enabled on the user side.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * https://g.xxxxxx.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxxxx-quickstart-and-dashboard?orgId=355401&refresh=10s
   */
  grafanaDashBoardUrl?: string;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
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
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The network configurations.
   * 
   * >  This parameter is discontinued.
   */
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  /**
   * @remarks
   * The ID of the service instance that is used to implement hosted O\\&M.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  operationExtraInfo?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The outputs returned from creating the service instance.
   * 
   * *   If the service is deployed by using a ROS template, all output fields of the template are returned.
   * *   If the service is deployed by calling an SPI operation, the output fields of the service provider and for the Compute Nest additional features are returned.
   * 
   * @example
   * {
   *       "InstanceIds": [
   *             "i-hp38ofxl0dsyfi7z****"
   *       ]
   * }
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  predefinedParameterName?: string;
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
   * The logon URL for the accounts in the resource directory corresponding to the service instance.
   * 
   * @example
   * https://signin.aliyun.com/switchRole.htm?parentAlias=1307782318217247.onaliyun.com&roleName=ResourceDirectoryAccountAccessRole
   */
  rdAccountLoginUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * @example
   * [
   *       {
   *             "StackId": "stack-xxx"
   *       }
   * ]
   */
  resources?: string;
  /**
   * @remarks
   * The information about the service to which the service instance belongs.
   */
  service?: GetServiceInstanceResponseBodyService;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source of the service instance. Valid values:
   * 
   * *   User: Compute Nest customer
   * *   Market: Alibaba Cloud Marketplace
   * *   Supplier: Compute Nest service provider
   * 
   * @example
   * User
   */
  source?: string;
  /**
   * @remarks
   * The deployment state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment state of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 1964460391538545
   */
  supplierUid?: number;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: GetServiceInstanceResponseBodyTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 1234567
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      isOperated: 'IsOperated',
      licenseMetadata: 'LicenseMetadata',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationExtraInfo: 'OperationExtraInfo',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
      rdAccountLoginUrl: 'RdAccountLoginUrl',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierUid: 'SupplierUid',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      isOperated: 'boolean',
      licenseMetadata: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationExtraInfo: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
      rdAccountLoginUrl: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supplierUid: 'number',
      tags: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the region in which the service instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  deployRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the private connection feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enablePrivateVpcConnection?: boolean;
  /**
   * @remarks
   * The parameters in the template.
   */
  parameters?: GetServiceTemplateParameterConstraintsRequestParameters[];
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-1c11f365190c44xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deployRegionId: 'DeployRegionId',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deployRegionId: 'string',
      enablePrivateVpcConnection: 'boolean',
      parameters: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsRequestParameters },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The constraint families.
   */
  familyConstraints?: string[];
  /**
   * @remarks
   * The parameters in the template.
   */
  parameterConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C81C0732-DEBC-559C-B563-7EB2BEB21088
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      familyConstraints: 'FamilyConstraints',
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyConstraints: { 'type': 'array', 'itemType': 'string' },
      parameterConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceTemplateParameterConstraintsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceTemplateParameterConstraintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsRequest extends $tea.Model {
  /**
   * @remarks
   * The file name to upload.
   * 
   * This parameter is required.
   * 
   * @example
   * template.yaml
   */
  fileName?: string;
  /**
   * @remarks
   * Specifies whether the file is publicly accessible. Valid values: **public** or **private**. The default value is **private**.
   * 
   * @example
   * public
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetUploadCredentialsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCC3321E-D518-1BC4-861E-588E9D4DAFB7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates the request was successful. A value of false indicates the request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUploadCredentialsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the artifact. Default value: AcrImage. Valid values:
   * 
   * *   HelmChart: Helm chart image.
   * *   AcrImage: container image.
   * 
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The images.
   */
  repositories?: ListAcrImageRepositoriesResponseBodyRepositories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4A145D8-6F6C-532A-9001-9730CDA27578
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      repositories: { 'type': 'array', 'itemType': ListAcrImageRepositoriesResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcrImageRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAcrImageRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the deployment package. Default value: AcrImage. Valid values:
   * 
   * *   HelmChart: Helm chart image.
   * *   AcrImage: container image.
   * 
   * @example
   * AcrImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of images.
   */
  images?: ListAcrImageTagsResponseBodyImages[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ey14..
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEF343B9-1A15-5789-BE88-7B36190F5BF6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListAcrImageTagsResponseBodyImages },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcrImageTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAcrImageTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The version information about the deployment package.
   */
  artifacts?: ListArtifactVersionsResponseBodyArtifacts[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactVersionsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequest extends $tea.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListArtifactsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25yfxxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListArtifactsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListArtifactsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListArtifactsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about deployment packages.
   */
  artifacts?: ListArtifactsResponseBodyArtifacts[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifacts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceCategoriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The category list of the service.
   */
  categories?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9AC8E73E-88DE-52C2-A29B-531FC130000
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceCategoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstancesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to display the information that the service instance is deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  showDeleted?: boolean;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showDeleted: 'ShowDeleted',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showDeleted: 'boolean',
      tag: { 'type': 'array', 'itemType': ListServiceInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50287CB-AABF-4877-92C0-289B339A1546
   */
  requestId?: string;
  /**
   * @remarks
   * The information about service instances.
   */
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstances: 'ServiceInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceSharedAccountsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAR130adlM4fHHVSWpTca/t4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permission: 'Permission',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceSharedAccountsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      permission: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA3AE512-6D30-549A-B52D-B9042CA8D515
   */
  requestId?: string;
  shareAccount?: ListServiceSharedAccountsResponseBodyShareAccount[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      shareAccount: 'ShareAccount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      shareAccount: { 'type': 'array', 'itemType': ListServiceSharedAccountsResponseBodyShareAccount },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceSharedAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceSharedAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequest extends $tea.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceUsagesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The role of the service provider.
   * 
   * @example
   * Supplier
   */
  supplierRole?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      supplierRole: 'SupplierRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceUsagesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      supplierRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18AD0960-A9FE-1AC8-ADF8-22131Fxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The service applications.
   */
  serviceUsages?: ListServiceUsagesResponseBodyServiceUsages[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceUsages: 'ServiceUsages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceUsages: { 'type': 'array', 'itemType': ListServiceUsagesResponseBodyServiceUsages },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceUsagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceUsagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return all versions of a service. Default value: false, which specifies that only the default version of a service is returned.
   * 
   * @example
   * false
   */
  allVersions?: boolean;
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServicesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServicesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      allVersions: 'AllVersions',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allVersions: 'boolean',
      filter: { 'type': 'array', 'itemType': ListServicesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListServicesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The imported resources.
   * 
   * @example
   * {
   *   "RegionId": "cn-hangzhou",
   *   "Type": "ResourceIds",
   *   "ResourceIds": {
   *     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],
   *     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],
   *     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],
   *     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]
   *   }
   * }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d8a0cc2a1ee04dce****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of operation performed on the service instance resource. Valid values:
   * 
   * *   Import: The resource is imported.
   * *   UnImport: The resource import is canceled.
   * 
   * @example
   * Import
   */
  serviceInstanceResourcesAction?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourcesAction: 'ServiceInstanceResourcesAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      serviceInstanceId: 'string',
      serviceInstanceResourcesAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46577928-3162-15A6-9084-69820EB9xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInstanceResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyServiceInstanceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyServiceInstanceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataRequest extends $tea.Model {
  /**
   * @remarks
   * The metering data. Parameters in the example value:
   * 
   * *   InstanceId: the ID of an instance in Alibaba Cloud Marketplace. Parameter type: STRING.
   * 
   * *   StartTime: the time when the metering operation started. Set the parameter to a UNIX timestamp. Unit: seconds. Parameter type: LONG.
   * 
   * *   EndTime: the time when the metering operation ended. Set the parameter to a UNIX timestamp. Unit: seconds. Parameter type: LONG.
   * 
   * *   Entities: the metering entities. Parameter type: LIST.
   * 
   *     *   Key: the name of the metering item. Parameter type: STRING.
   * 
   *         *   Frequency: the number of times the instance was used.
   *         *   Period: the usage duration of the instance. Unit: seconds.
   * 
   *     Note: The metering unit is second, whereas the billing unit is hour. Therefore, when bills are generated, seconds are converted to hours. For example, the usage metered from 19:00 to 20:00 is 1800 seconds and the price is USD 1 per hour. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 1800/3600 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.
   * 
   *           - Storage: The used storage space. Unit: bytes.   
   *            Note: The metering unit is byte, whereas the billing unit is MB. Therefore, when bills are generated, bytes are converted to megabytes. For example, the usage metered from 19:00 to 20:00 is 524,288 bytes and the price is USD 1 per MB. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 524288/1024/1024 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.  - NetworkOut: the upstream traffic consumed. Unit: bit.  
   *            Note: The metering unit is bit, whereas the billing unit is Mbit. Therefore, when bills are generated, bits are converted to megabits. For example, the usage metered from 19:00 to 20:00 is 524,288 bits and the price is USD 1 per Mbit. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 524288/1024/1024 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.  - NetworkIn: the downstream traffic consumed. Unit: bit.  
   *            Note: The metering unit is bit, whereas the billing unit is Mbit. Therefore, when bills are generated, bits are converted to megabits. For example, the usage metered from 19:00 to 20:00 is 524,288 bits and the price is USD 1 per Mbit. In this case, the hourly bill for 19:00 to 20:00 is calculated by using the following formula: 524288/1024/1024 x 1 = 0.5. If the result is a decimal, only the first two decimal places are retained.  - Character: the number of characters.
   *           - DailyActiveUser: the number of daily active users (DAU).
   *           - PeriodMin: the usage duration of the instance. Unit: minutes.  - VirtualCpu: the number of virtual CPU cores.
   * 
   *     *   Value: the value of the metering item. The value is equal to or greater than 0. Parameter type: INTEGER.
   * 
   * **Note**:
   * 
   * *   If bills are generated for the commodity in real time, the difference between the values of StartTime and EndTime is not limited. However, the time specified by EndTime must be later than that specified by StartTime.
   * *   If bills are generated for the commodity by billing cycle, such as by hour, by day, or by month, the difference between the values of StartTime and EndTime must be greater than 5 minutes.
   * *   In a request for pushing multiple metering data records, the values of InstanceId must indicate instances of the same commodity. You cannot push metering data of instances of multiple commodities at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"StartTime\\":1681264800,\\"EndTime\\":1681268400,\\"Entities\\":[{\\"Key\\":\\"Unit\\",\\"Value\\":\\"0\\"}]}]
   */
  metering?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      metering: 'Metering',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metering: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E89857-B994-44B6-9C4F-DBD200E9XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMeteringDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushMeteringDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-f7024a22ea5149xxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * sr-72dd5071e90c40xxxxxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-2713-52C8-AFFC-C26E5180456E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectServiceUsageRequest extends $tea.Model {
  /**
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  comments?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service-2117508c874c41xxxxxx
   */
  serviceId?: string;
  /**
   * @example
   * SharedAccount
   */
  type?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      comments: 'Comments',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comments: 'string',
      serviceId: 'string',
      type: 'number',
      userAliUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectServiceUsageResponseBody extends $tea.Model {
  /**
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectServiceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RejectServiceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-9feded91880e4c78xxxx
   */
  artifactId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * artifact-9feded91880e4c78xxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The content of the artifact.
   * 
   * @example
   * "{\\"Url\\":\\"https://computenest-artifacts-draft-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/130920852836xxxx/cn-hangzhou/service-8072a04e5a134382xxxx/165095355xxxx/changes.txt\\",\\"ConfigurationMetadata\\":\\"{\\\\\\"WorkDir\\\\\\":\\\\\\"/root\\\\\\",\\\\\\"Platform\\\\\\":\\\\\\"Linux\\\\\\",\\\\\\"CommandType\\\\\\":\\\\\\"RunShellScript\\\\\\",\\\\\\"UpgradeScript\\\\\\":\\\\\\"cd /root\\\\\\\\ncp changes.txt cpchanges.txt\\\\\\\\nmv changes.txt mvchangge.txt\\\\\\"}\\"}"
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the artifact.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the artifact.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the artifact was modified.
   * 
   * @example
   * 1650954178000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3818BA7D-3F50-1A44-9FF3-04A52A59XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the artifact. Valid values:
   * 
   * *   Created: The artifact is created.
   * *   Scanning: The artifact is being scanned.
   * *   ScanFailed: The artifact failed to be scanned.
   * *   Delivering: The artifact is being distributed.
   * *   Available: The artifact is available.
   * *   Deleted: The artifact is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The version name of the artifact.
   * 
   * @example
   * V1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServiceSharedAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Reseller: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userAliUids?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
      userAliUids: 'UserAliUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      type: 'string',
      userAliUids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServiceSharedAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServiceSharedAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveServiceSharedAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveServiceSharedAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2E91D771-0183-52CE-86CB-882D99B2CB77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region id where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-c39ed4779cec449f****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49A369EF-A302-5006-B0CE-94CED47C38CF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * This parameter is required.
   */
  artifactProperty?: UpdateArtifactRequestArtifactProperty;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the regions that support the deployment package.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      description: 'Description',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: UpdateArtifactRequestArtifactProperty,
      description: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * This parameter is required.
   */
  artifactPropertyShrink?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the regions that support the deployment package.
   */
  supportRegionIds?: string[];
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactPropertyShrink: 'ArtifactProperty',
      description: 'Description',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactPropertyShrink: 'string',
      description: 'string',
      supportRegionIds: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
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
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * [
   * 			"cn-beijing",
   * 			"cn-hangzhou",
   * 			"cn-shanghai"
   * 		]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateArtifactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
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
   * - Manual: The application is manually approved.
   * - AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
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
   * Bind Commodity Information
   */
  commodity?: UpdateServiceRequestCommodity;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"EstimateTime\\":null,\\"SupplierDeployMetadata\\":{\\"DeployTimeout\\":7200},\\"EnableVnc\\":false}
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
   * {\\"RetentionDays\\":3}
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
   * Specifies whether to support distribution. Valid values:
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
   * *   poc: The service is a trial service.
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
   * - Public: All users can go to the URL to create a service instance or a trial service instance.
   * - Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * - OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * - OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * - Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
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
   * The options for update the service.
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
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
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
      clientToken: 'string',
      commodity: UpdateServiceRequestCommodity,
      deployMetadata: 'string',
      deployType: 'string',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequest extends $tea.Model {
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
   * - Manual: The application is manually approved.
   * - AutoPass: The application is automatically approved.
   * 
   * @example
   * Manual
   */
  approvalType?: string;
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
   * Bind Commodity Information
   */
  commodityShrink?: string;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"EstimateTime\\":null,\\"SupplierDeployMetadata\\":{\\"DeployTimeout\\":7200},\\"EnableVnc\\":false}
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
   * {\\"RetentionDays\\":3}
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
   * Specifies whether to support distribution. Valid values:
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
  serviceInfo?: UpdateServiceShrinkRequestServiceInfo[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
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
   * - Public: All users can go to the URL to create a service instance or a trial service instance.
   * - Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * - OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * - OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * - Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
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
   * The options for update the service.
   */
  updateOptionShrink?: string;
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
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
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
      updateOptionShrink: 'UpdateOption',
      upgradeMetadata: 'UpgradeMetadata',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      approvalType: 'string',
      clientToken: 'string',
      commodityShrink: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      policyNames: 'string',
      regionId: 'string',
      resellable: 'boolean',
      serviceId: 'string',
      serviceInfo: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfo },
      serviceType: 'string',
      serviceVersion: 'string',
      shareType: 'string',
      tenantType: 'string',
      trialDuration: 'number',
      updateOptionShrink: 'string',
      upgradeMetadata: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-25T02:28:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The License Data
   */
  licenseData?: UpdateServiceInstanceAttributeRequestLicenseData;
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
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-3df88e962cdexxxxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      licenseData: 'LicenseData',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      licenseData: UpdateServiceInstanceAttributeRequestLicenseData,
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-25T02:28:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The License Data
   */
  licenseDataShrink?: string;
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
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-3df88e962cdexxxxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      licenseDataShrink: 'LicenseData',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      licenseDataShrink: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CB2E0A9-B4DF-5C16-86AD-C511C483144B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable Prometheus on the customer side. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration update operation.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {\\"EcsInstanceParameter\\":\\"4vCPU 8GiB\\",\\"ZoneId\\":\\"cn-heyuan-a\\",\\"SystemDiskSize\\":50,\\"DataDiskSize\\":150,\\"InternetMaxBandwidthOut\\":2,\\"RegionId\\":\\"cn-heyuan\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * package one
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parameters: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable Prometheus on the customer side. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration update operation.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {\\"EcsInstanceParameter\\":\\"4vCPU 8GiB\\",\\"ZoneId\\":\\"cn-heyuan-a\\",\\"SystemDiskSize\\":50,\\"DataDiskSize\\":150,\\"InternetMaxBandwidthOut\\":2,\\"RegionId\\":\\"cn-heyuan\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * package one
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parametersShrink: 'string',
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2306175xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F224E002-AB0E-5FD9-A87E-54AEE56F6CAE
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The deployment state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The parameters required for the upgrade.
   */
  upgradeRequiredParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
      upgradeRequiredParameters: 'UpgradeRequiredParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
      upgradeRequiredParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSharedAccountsRequestSharedAccounts extends $tea.Model {
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * This parameter is required.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      userAliUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBodyDryRunResult extends $tea.Model {
  /**
   * @remarks
   * The parameters that can be modified. The operation that is performed to modify the parameters does not cause a validation error.
   * 
   * >  This parameter is returned only if DryRun is set to true.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions. The new values of the parameters determine whether the operation that is performed to modify the parameters causes a validation error.
   * 
   * >  This parameter is returned only if DryRun is set to true.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified. The operation that is performed to modify the parameters causes a validation error.
   * 
   * >  This parameter is returned only if DryRun is set to true.
   */
  parametersNotAllowedToBeModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestArtifactProperty extends $tea.Model {
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity version of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The script metadata.
   * 
   * @example
   * {\\"WorkDir\\":\\"/root\\",\\"CommandType\\":\\"RunShellScript\\",\\"Platform\\":\\"Linux\\",\\"Script\\":\\"echo hello\\"}
   */
  fileScriptMetadata?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * m-0xij191j9cuev6xxxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * crr-d8o1nponyc2t1gcg
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The script content.
   * 
   * >  This parameter is available only if the deployment package is a script.
   * 
   * @example
   * {"ScriptMetadata":"{\\"CommandType\\":\\"RunShellScript\\",\\"Platform\\":\\"Linux\\",\\"Script\\":\\"ls\\"}"}
   */
  scriptMetadata?: string;
  /**
   * @remarks
   * The version tag of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The object URL of the deployment package.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      fileScriptMetadata: 'FileScriptMetadata',
      imageId: 'ImageId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      scriptMetadata: 'ScriptMetadata',
      tag: 'Tag',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      fileScriptMetadata: 'string',
      imageId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      scriptMetadata: 'string',
      tag: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactShrinkRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfoAgreements extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceInfo extends $tea.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: CreateServiceRequestServiceInfoAgreements[];
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
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * TiDB Database
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * TiDB是A公司自主设计、研发的开源分布式关系型数据库。
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': CreateServiceRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the deployment package.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the deployment package.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBodyAvailableResources extends $tea.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * "/xxx/"
   */
  path?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * oss-cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * computenest-artifacts-draft-cn-hangzhou
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      regionId: 'RegionId',
      repositoryName: 'RepositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      regionId: 'string',
      repositoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactRepositoryCredentialsResponseBodyCredentials extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.xxx
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * eyJ0aW1lIjoiMTUyNjU0OTc5:0705733****
   */
  password?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token.
   * 
   * @example
   * xxx
   */
  securityToken?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      password: 'string',
      securityToken: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataComponentsMappings extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadata extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMeteringEntities extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommoditySpecifications extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodity extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosAgreements extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfos extends $tea.Model {
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
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyStatistic extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequestCommodity extends $tea.Model {
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Year
   * *   Month
   * *   Day
   * 
   * @example
   * Month
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs extends $tea.Model {
  /**
   * @remarks
   * The bandwidth limit for the private connection established based on the private network interconnection mode of Compute Nest.
   * 
   * @example
   * 1536Mbps
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of the endpoints for private connections.
   */
  endpointIps?: string[];
  /**
   * @remarks
   * The status of the Ingress endpoint. Valid values:
   * 
   * *   Ready: The Ingress endpoint is connected.
   * *   Pending: The Ingress endpoint is being connected.
   * *   Failed: The Ingress endpoint fails to be connected.
   * *   Deleted: The Ingress endpoint is deleted.
   * *   Deleting: The Ingress endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  ingressEndpointStatus?: string;
  /**
   * @remarks
   * The status of the network service. Valid values:
   * 
   * *   Ready: The network service is connected.
   * *   Pending: The network service is being connected.
   * *   Failed: The network service fails to be connected.
   * *   Deleted: The network service is deleted.
   * *   Deleting: The network service is being deleted.
   * 
   * @example
   * Ready
   */
  networkServiceStatus?: string;
  /**
   * @remarks
   * The names of the security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The names of the vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectBandwidth: 'ConnectBandwidth',
      domainName: 'DomainName',
      endpointIps: 'EndpointIps',
      ingressEndpointStatus: 'IngressEndpointStatus',
      networkServiceStatus: 'NetworkServiceStatus',
      securityGroups: 'SecurityGroups',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectBandwidth: 'number',
      domainName: 'string',
      endpointIps: { 'type': 'array', 'itemType': 'string' },
      ingressEndpointStatus: 'string',
      networkServiceStatus: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $tea.Model {
  /**
   * @remarks
   * The network configurations, which are mainly used for the private connection.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the private connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateZoneName: 'PrivateZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      endpointServiceId: 'string',
      privateZoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $tea.Model {
  /**
   * @remarks
   * The ID of the endpoint for the reverse private connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the reverse private connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfig extends $tea.Model {
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The information about private connections.
   */
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  /**
   * @remarks
   * The information about the reverse private connection.
   */
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateVpcConnections: 'PrivateVpcConnections',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      reversePrivateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceServiceInfos extends $tea.Model {
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
   * The language of the service instance.
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
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyService extends $tea.Model {
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
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
   * The URL of the service documentation.
   * 
   * @example
   * http://example.com
   */
  serviceDocUrl?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-9c8a3522528b4fe8****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com
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
   * The status of the service. Valid values:
   * 
   * Draft: The registration request of the service is pending to be submitted.
   * 
   * Submitted: The registration request of the service is submitted.
   * 
   * Approved: The registration request of the service is approved.
   * 
   * Online: The service is published.
   * 
   * Offline: The service is unpublished.
   * 
   * Deleted: The service is deleted.
   * 
   * Launching: The service is being published.
   * 
   * @example
   * Online
   */
  status?: string;
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
   * The service versions that can be updated.
   */
  upgradableServiceVersions?: string[];
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 20231127020225
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceDocUrl: 'ServiceDocUrl',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      upgradableServiceVersions: 'UpgradableServiceVersions',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      publishTime: 'string',
      serviceDocUrl: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      upgradableServiceVersions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * PayType
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * PostPaid
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $tea.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * lnch_Source
   */
  propertyName?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * i-8vb0smn1lf6g77md****
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * serviceinstance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      propertyName: 'PropertyName',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      propertyName: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints extends $tea.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The names of the associated parameters.
   */
  associationParameterNames?: string[];
  /**
   * @remarks
   * The behavior of the parameter. Valid values:
   * 
   * *   NoLimit: The value of this parameter is not limited.
   * *   NotSupport: The value of this parameter cannot be queried.
   * *   QueryError: The query failed.
   * 
   * >  If AllowedValues is not returned, Behavior and BehaviorReason are returned.
   * 
   * @example
   * NoLimit
   */
  behavior?: string;
  /**
   * @remarks
   * The reason why the behavior of the parameter is returned.
   * 
   * @example
   * none
   */
  behaviorReason?: string;
  /**
   * @remarks
   * The original constraint information.
   */
  originalConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * PayType
   */
  parameterKey?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      originalConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadCredentialsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUCe19W1FKaHAYAhe********
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * 8LQGp59mY23pcXeTdcvSA1cUQZBeD92sFrXi********
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * service-info-private
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the AccessKey pair expires.
   * 
   * @example
   * 2023-05-18T12:27:59Z
   */
  expireDate?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * 221514575922756034/cn-hangzhou/d57c62fbd508xxxxxxxx.json
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * CAISzQN1q6Ft5B2yfSjIr5b2LouNuu5n/KOjQ3/wjGUHYdlagYGdmzz2IH1Le3NrBO8esfgymGFU6v8dlo1dYLQeHhadQI5cs80HtFqLSNaE65LswPlZ2M2ISETPJzfV9pCK
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expireDate: 'ExpireDate',
      key: 'Key',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expireDate: 'string',
      key: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBodyRepositories extends $tea.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The image repo ID.
   * 
   * @example
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  /**
   * @remarks
   * The image repo name.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      repoId: 'string',
      repoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageTagsResponseBodyImages extends $tea.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The image size. Unit: bytes.
   * 
   * @example
   * 188394616
   */
  imageSize?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 5.7.2
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageSize: 'ImageSize',
      modifiedTime: 'ModifiedTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageSize: 'string',
      modifiedTime: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactVersionsResponseBodyArtifacts extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The properties of the deployment package.
   * 
   * @example
   * {\\"CommodityCode\\":\\"cmjj0005xxxx\\",\\"CommodityVersion\\":\\"V2022xxxx\\"}
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 2
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2022-10-20T02:19:53Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The distribution result of the image.
   */
  imageDelivery?: { [key: string]: string };
  /**
   * @remarks
   * The distribution progress of the deployment package.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The result file of the security scan.
   * 
   * @example
   * https://compute-nest-security-audit-bucket-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/51416747xxxx/xxxx
   */
  resultFile?: string;
  /**
   * @remarks
   * The result of the security scan. Valid values:
   * 
   * *   Normal: No risks exist on the deployment package.
   * *   AtRisk: Risks exist on the deployment package.
   * *   Processing: The deployment package is being scanned.
   * 
   * @example
   * Normal
   */
  securityAuditResult?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the region that supports the deployment package.
   * 
   * @example
   * [
   * 					"cn-beijing",
   * 					"cn-hangzhou",
   * 					"cn-shanghai"
   * 				]
   */
  supportRegionIds?: string;
  /**
   * @remarks
   * The version name of the deployment package.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageDelivery: 'ImageDelivery',
      progress: 'Progress',
      resultFile: 'ResultFile',
      securityAuditResult: 'SecurityAuditResult',
      status: 'Status',
      supportRegionIds: 'SupportRegionIds',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageDelivery: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      progress: 'string',
      resultFile: 'string',
      securityAuditResult: 'string',
      status: 'string',
      supportRegionIds: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   *Name*: The name of the deployment package. Fuzzy match is used.
   * *   ArtifactId: The ID of the deployment package.
   * *   ArtifactType: The type of the deployment package.
   * 
   * @example
   * ArtifactType
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyArtifactsTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBodyArtifacts extends $tea.Model {
  /**
   * @remarks
   * The ID of the deployment package.
   * 
   * @example
   * artifact-eea08d1e2d3a43aexxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The type of the deployment package.
   * 
   * @example
   * EcsImage
   */
  artifactType?: string;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the deployment package was modified.
   * 
   * @example
   * 2022-10-20T02:19:55Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version of the deployment package.
   * 
   * @example
   * 2
   */
  maxVersion?: string;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek25rexxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the deployment package. Valid values:
   * 
   * *   Created: The deployment package is created.
   * *   Scanning: The deployment package is being scanned.
   * *   ScanFailed: The deployment package failed to be scanned.
   * *   Delivering: The deployment package is being distributed.
   * *   Available: The deployment package is available.
   * *   Deleted: The deployment package is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListArtifactsResponseBodyArtifactsTags[];
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactType: 'ArtifactType',
      description: 'Description',
      gmtModified: 'GmtModified',
      maxVersion: 'MaxVersion',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactType: 'string',
      description: 'string',
      gmtModified: 'string',
      maxVersion: 'string',
      name: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListArtifactsResponseBodyArtifactsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   Name: The service name. If you want to perform a fuzzy match, specify the service name in the *xxx* format. For example, if the service name is My Service, you can set the filter value to *My* or *Service*.
   * *   ServiceInstanceId: The ID of the service instance.
   * *   ServiceId: The service ID.
   * *   UserId: The user ID.
   * *   Version: The service version.
   * *   Status: The status of the service instance.
   * *   DeployType: The deployment type of the service.
   * *   ServiceType: The service type.
   * *   OperationStartTimeBefore: The time before the hosted O\\&M starts.
   * *   OperationStartTimeAfter: The time after the hosted O\\&M starts.
   * *   OperationEndTimeBefore: The time before the hosted O\\&M ends.
   * *   OperationEndTimeAfter: The time after the hosted O\\&M ends.
   * *   OperatedServiceInstanceId: The ID of the hosted O\\&M instance that belongs to a private service.
   * *   OperationServiceInstanceId: The ID of the hosted O\\&M service instance that belongs to a hosted O\\&M service.
   * *   EnableInstanceOps: Whether the hosted O\\&M feature is enabled for service instances.
   * 
   * @example
   * ServiceInstanceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $tea.Model {
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
   * The language of the service instance.
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
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesService extends $tea.Model {
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether the private connection feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enablePrivateVpcConnection?: boolean;
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
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the distribution source service provider.
   * 
   * @example
   * Company A
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Online
   */
  status?: string;
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
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 版本A
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      enablePrivateVpcConnection: 'boolean',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstances extends $tea.Model {
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * *   Normal: The service instance is normal.
   * *   Renewing: The service instance is being renewed.
   * *   RenewFailed: The service instance failed to be renewed.
   * *   Expired: The service instance expired.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the service instance that is used to implement hosted O\\&M.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The parameters of the service instance.
   * 
   * @example
   * {"param":"value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * si-d6ab3a63ccxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source from which the service instance is created.
   * 
   * @example
   * Supplier
   */
  source?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 1234567
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      isOperated: 'IsOperated',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      parameters: 'Parameters',
      payType: 'PayType',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      isOperated: 'boolean',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      parameters: 'string',
      payType: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   Name: the name of the service.
   * 
   * @example
   * UserAliUid
   */
  name?: string;
  /**
   * @remarks
   * The parameter value N of the filter. Valid values of N: 1 to 10.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSharedAccountsResponseBodyShareAccount extends $tea.Model {
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-12-28T02:47:46.000
   */
  createTime?: string;
  /**
   * @remarks
   * Service logo.
   * 
   * @example
   * logo
   */
  logo?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * name
   */
  name?: string;
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
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The time when the service was updated.
   * 
   * @example
   * 2023-02-13T02:16:03.756Z
   */
  updateTime?: string;
  /**
   * @example
   * 127383705xxxxxx
   */
  userAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      logo: 'Logo',
      name: 'Name',
      permission: 'Permission',
      serviceId: 'ServiceId',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      logo: 'string',
      name: 'string',
      permission: 'string',
      serviceId: 'string',
      updateTime: 'string',
      userAliUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   ServiceName: the service name.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter value N of the filter. Valid values of N: 1 to 10.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBodyServiceUsages extends $tea.Model {
  /**
   * @remarks
   * The comment on the approval.
   * 
   * @example
   * Reject
   */
  comments?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c9f36ec6d19b4exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * ServiceTest
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the service application. Valid values:
   * 
   * *   Submitted: The application is submitted or is to be approved.
   * *   Approved: The application is approved.
   * *   Rejected: The application is rejected.
   * *   Canceled: The application is canceled.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * SupplierAAA
   */
  supplierName?: string;
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  /**
   * @remarks
   * The user information.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      supplierName: 'SupplierName',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createTime: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      supplierName: 'string',
      updateTime: 'string',
      userAliUid: 'number',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   Name: the name of the service.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesCommodity extends $tea.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * { // Specifies whether to associate the service with the SaaS Boost commodity. Default value: false. "Enabled":true/false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The platform type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * *   SaasBoost: Saas Boost.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      saasBoostMetadata: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesServiceInfos extends $tea.Model {
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
   * *   zh-CN: Chinese.
   * *   en-US: English.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * SpringBoot-ECS容器版
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
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServices extends $tea.Model {
  /**
   * @remarks
   * The approval type for applications for using the service. Valid values:
   * 
   * *   Manual: The applications are manual reviewed.
   * *   AutoPass: The applications are automatically approved.
   * 
   * @example
   * AutoPass
   */
  approvalType?: string;
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * artifact-21ca53ac16a643xxxxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The informathon for build service.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * OpenSource
   */
  categories?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: ListServicesResponseBodyServicesCommodity;
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
   * The time when the service was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   spi: The service is deployed by calling the Service Provider Interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * *   container: The service is deployed by using a container.
   * *
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether the service has a beta version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasBeta?: boolean;
  /**
   * @remarks
   * Indicates whether the service has a draft version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * The latest version of the distribution source service.
   * 
   * @example
   * 1
   */
  latestResellSourceServiceVersion?: string;
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
   * The purpose of the artifact. Valid values:
   * 
   * *   ServiceDeployment: The artifact is used to create service instances.
   * *   ServiceUpgrade: The artifact is used to upgrade service instances.
   * 
   * @example
   * ServiceDeployment
   */
  relationType?: string;
  /**
   * @remarks
   * The state of distribution authorization of the service. Valid values:
   * 
   * *   CanApply: Distributors can apply for distribution permissions.
   * *   Applied: The application for distribution permissions is submitted.
   * *   Approved: The application for distribution permissions is approved.
   * 
   * @example
   * CanApply
   */
  resellApplyStatus?: string;
  /**
   * @remarks
   * The ID of the distribution service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  resellServiceId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz5b555xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the service is visible. Valid values:
   * 
   * *   INVISIBLE
   * *   DISCOVERABLE
   * 
   * @example
   * INVISIBLE
   */
  serviceDiscoverable?: string;
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
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
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
   * *   Public: All users can go to the URL to create a formal service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a formal service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a formal service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The source image.
   * 
   * @example
   * centos_7
   */
  sourceImage?: string;
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
   * The state of the service. Valid values:
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
   * The service tags.
   */
  tags?: ListServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * The tenant type of the managed service. Valid values:
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
   * The time when the service was modified.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * v2.0.0
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
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      buildInfo: 'BuildInfo',
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      defaultVersion: 'DefaultVersion',
      deployType: 'DeployType',
      hasBeta: 'HasBeta',
      hasDraft: 'HasDraft',
      latestResellSourceServiceVersion: 'LatestResellSourceServiceVersion',
      publishTime: 'PublishTime',
      relationType: 'RelationType',
      resellApplyStatus: 'ResellApplyStatus',
      resellServiceId: 'ResellServiceId',
      resourceGroupId: 'ResourceGroupId',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceImage: 'SourceImage',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      artifactId: 'string',
      artifactVersion: 'string',
      buildInfo: 'string',
      categories: 'string',
      commodity: ListServicesResponseBodyServicesCommodity,
      commodityCode: 'string',
      createTime: 'string',
      defaultVersion: 'boolean',
      deployType: 'string',
      hasBeta: 'boolean',
      hasDraft: 'boolean',
      latestResellSourceServiceVersion: 'string',
      publishTime: 'string',
      relationType: 'string',
      resellApplyStatus: 'string',
      resellServiceId: 'string',
      resourceGroupId: 'string',
      serviceDiscoverable: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      serviceType: 'string',
      shareType: 'string',
      sourceImage: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesTags },
      tenantType: 'string',
      trialType: 'string',
      updateTime: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactRequestArtifactProperty extends $tea.Model {
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity version of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The metadata of the Object Storage Service (OSS) object.
   * 
   * >  This parameter is available only if the deployment package is an OSS object.
   * 
   * @example
   * {\\"WorkDir\\":\\"/root\\",\\"CommandType\\":\\"RunShellScript\\",\\"Platform\\":\\"Linux\\",\\"Script\\":\\"echo hello\\"}
   */
  fileScriptMetadata?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * m-0xij191j9cuev6ucxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The script content of the deployment package.
   * 
   * >  This parameter is available only if the deployment package is a script.
   * 
   * @example
   * {"ScriptMetadata":"{\\"CommandType\\":\\"RunShellScript\\",\\"Platform\\":\\"Linux\\",\\"Script\\":\\"ls\\"}"}
   */
  scriptMetadata?: string;
  /**
   * @remarks
   * The URL of the deployment package object.
   * 
   * 
   * > Note This parameter is available only if the deployment package is an file.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      fileScriptMetadata: 'FileScriptMetadata',
      imageId: 'ImageId',
      regionId: 'RegionId',
      scriptMetadata: 'ScriptMetadata',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      fileScriptMetadata: 'string',
      imageId: 'string',
      regionId: 'string',
      scriptMetadata: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodityComponentsMappings extends $tea.Model {
  /**
   * @remarks
   * This parameter is not publicly accessible.
   * 
   * @example
   * This parameter is not publicly accessible.
   */
  mappings?: string;
  /**
   * @remarks
   * This parameter is not publicly accessible.
   * 
   * @example
   * This parameter is not publicly accessible.
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
      mappings: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodityMeteringEntityExtraInfos extends $tea.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0006xxxx-Memory-1
   */
  entityId?: string;
  /**
   * @remarks
   * Metric Name, filled in when Type is ComputeNestBill or ComputeNestPrometheus
   * 
   * @example
   * VirtualCpu/ecs.InstanceType
   */
  metricName?: string;
  /**
   * @remarks
   * Custom prometheus query
   * 
   * @example
   * avg_over_time(sum(rate(container_cpu_usage_seconds_total{namespace=~"ALIYUN::StackName"}[2m]))[1h:10s])
   */
  promql?: string;
  /**
   * @remarks
   * Type, value：
   * 
   * * **Custom**
   * * **ComputeNestBill**
   * * **ComputeNestPrometheus**
   * * **ComputeNestTime**
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodityMeteringEntityMappings extends $tea.Model {
  /**
   * @remarks
   * The ID of the entity.
   */
  entityIds?: string[];
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * packageOne
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * TemplaceName
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommoditySpecificationMappings extends $tea.Model {
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
   * The package name.
   * 
   * @example
   * packageOne
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * TemplaceName
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestCommodity extends $tea.Model {
  /**
   * @remarks
   * This parameter is not publicly accessible.
   */
  componentsMappings?: UpdateServiceRequestCommodityComponentsMappings[];
  /**
   * @remarks
   * Metering Item Configuration Information (Cloud Marketplace - Pay-As-You-Go Use)
   */
  meteringEntityExtraInfos?: UpdateServiceRequestCommodityMeteringEntityExtraInfos[];
  /**
   * @remarks
   * Product Specifications and Template/specification mapping Relationships (Cloud Marketplace - Pay-As-You-Go Use)
   */
  meteringEntityMappings?: UpdateServiceRequestCommodityMeteringEntityMappings[];
  /**
   * @remarks
   * Saas boost config information
   * 
   * @example
   * {}
   */
  saasBoostConfig?: string;
  /**
   * @remarks
   * Product Specifications and Template/specification mapping Relationships (Cloud Marketplace - Subscription/Permanent Use)
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfoAgreements extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestServiceInfo extends $tea.Model {
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
   * kodbox-fc
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
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestUpdateOption extends $tea.Model {
  updateArtifact?: boolean;
  /**
   * @remarks
   * The options for update the service. Valid values:
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfoAgreements extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceShrinkRequestServiceInfo extends $tea.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: UpdateServiceShrinkRequestServiceInfoAgreements[];
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
   * kodbox-fc
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
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequestLicenseData extends $tea.Model {
  /**
   * @remarks
   * The Custom Data
   * 
   * @example
   * {"Test"}
   */
  customData?: string;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("computenestsupplier", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds a shared account of a service.
   * 
   * @param request - AddServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccountsWithOptions(request: AddServiceSharedAccountsRequest, runtime: $Util.RuntimeOptions): Promise<AddServiceSharedAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.sharedAccounts)) {
      query["SharedAccounts"] = request.sharedAccounts;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new AddServiceSharedAccountsResponse({}));
  }

  /**
   * Adds a shared account of a service.
   * 
   * @param request - AddServiceSharedAccountsRequest
   * @returns AddServiceSharedAccountsResponse
   */
  async addServiceSharedAccounts(request: AddServiceSharedAccountsRequest): Promise<AddServiceSharedAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * 商家通过服务使用请求
   * 
   * @param request - ApproveServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveServiceUsageResponse
   */
  async approveServiceUsageWithOptions(request: ApproveServiceUsageRequest, runtime: $Util.RuntimeOptions): Promise<ApproveServiceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApproveServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveServiceUsageResponse>(await this.callApi(params, req, runtime), new ApproveServiceUsageResponse({}));
  }

  /**
   * 商家通过服务使用请求
   * 
   * @param request - ApproveServiceUsageRequest
   * @returns ApproveServiceUsageResponse
   */
  async approveServiceUsage(request: ApproveServiceUsageRequest): Promise<ApproveServiceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveServiceUsageWithOptions(request, runtime);
  }

  /**
   * Redeploys a service instance after the service instance failed to be deployed.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstanceWithOptions(request: ContinueDeployServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ContinueDeployServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinueDeployServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueDeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new ContinueDeployServiceInstanceResponse({}));
  }

  /**
   * Redeploys a service instance after the service instance failed to be deployed.
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a deployment package.
   * 
   * @param tmpReq - CreateArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactResponse
   */
  async createArtifactWithOptions(tmpReq: CreateArtifactRequest, runtime: $Util.RuntimeOptions): Promise<CreateArtifactResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateArtifactResponse>(await this.callApi(params, req, runtime), new CreateArtifactResponse({}));
  }

  /**
   * Creates a deployment package.
   * 
   * @param request - CreateArtifactRequest
   * @returns CreateArtifactResponse
   */
  async createArtifact(request: CreateArtifactRequest): Promise<CreateArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createArtifactWithOptions(request, runtime);
  }

  /**
   * Creates a service.
   * 
   * @param request - CreateServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!Util.isUnset(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!Util.isUnset(request.buildParameters)) {
      query["BuildParameters"] = request.buildParameters;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!Util.isUnset(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!Util.isUnset(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!Util.isUnset(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sourceServiceId)) {
      query["SourceServiceId"] = request.sourceServiceId;
    }

    if (!Util.isUnset(request.sourceServiceVersion)) {
      query["SourceServiceVersion"] = request.sourceServiceVersion;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!Util.isUnset(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!Util.isUnset(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  /**
   * Creates a service.
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  /**
   * Creates and deploys a service instance.
   * 
   * @param tmpReq - CreateServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstanceWithOptions(tmpReq: CreateServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceInstanceResponse>(await this.callApi(params, req, runtime), new CreateServiceInstanceResponse({}));
  }

  /**
   * Creates and deploys a service instance.
   * 
   * @param request - CreateServiceInstanceRequest
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstance(request: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Create  Service resell application.
   * 
   * @param request - CreateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsageWithOptions(request: CreateServiceUsageRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceUsageResponse>(await this.callApi(params, req, runtime), new CreateServiceUsageResponse({}));
  }

  /**
   * Create  Service resell application.
   * 
   * @param request - CreateServiceUsageRequest
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsage(request: CreateServiceUsageRequest): Promise<CreateServiceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceUsageWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact.
   * 
   * @param request - DeleteArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactResponse
   */
  async deleteArtifactWithOptions(request: DeleteArtifactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteArtifactResponse>(await this.callApi(params, req, runtime), new DeleteArtifactResponse({}));
  }

  /**
   * Deletes an artifact.
   * 
   * @param request - DeleteArtifactRequest
   * @returns DeleteArtifactResponse
   */
  async deleteArtifact(request: DeleteArtifactRequest): Promise<DeleteArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteArtifactWithOptions(request, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param request - DeleteServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  /**
   * Deletes a service.
   * 
   * @param request - DeleteServiceRequest
   * @returns DeleteServiceResponse
   */
  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a service instance.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(request: DeleteServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceInstances",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
  }

  /**
   * Deletes a service instance.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Deploys a service instance.
   * 
   * @param request - DeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstanceWithOptions(request: DeployServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeployServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new DeployServiceInstanceResponse({}));
  }

  /**
   * Deploys a service instance.
   * 
   * @param request - DeployServiceInstanceRequest
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstance(request: DeployServiceInstanceRequest): Promise<DeployServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactResponse
   */
  async getArtifactWithOptions(request: GetArtifactRequest, runtime: $Util.RuntimeOptions): Promise<GetArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactName)) {
      query["ArtifactName"] = request.artifactName;
    }

    if (!Util.isUnset(request.artifactVersion)) {
      query["ArtifactVersion"] = request.artifactVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetArtifactResponse>(await this.callApi(params, req, runtime), new GetArtifactResponse({}));
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetArtifactRequest
   * @returns GetArtifactResponse
   */
  async getArtifact(request: GetArtifactRequest): Promise<GetArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArtifactWithOptions(request, runtime);
  }

  /**
   * Queries the credentials that are required to upload a deployment package.
   * 
   * @param request - GetArtifactRepositoryCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentialsWithOptions(request: GetArtifactRepositoryCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetArtifactRepositoryCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifactRepositoryCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetArtifactRepositoryCredentialsResponse>(await this.callApi(params, req, runtime), new GetArtifactRepositoryCredentialsResponse({}));
  }

  /**
   * Queries the credentials that are required to upload a deployment package.
   * 
   * @param request - GetArtifactRepositoryCredentialsRequest
   * @returns GetArtifactRepositoryCredentialsResponse
   */
  async getArtifactRepositoryCredentials(request: GetArtifactRepositoryCredentialsRequest): Promise<GetArtifactRepositoryCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArtifactRepositoryCredentialsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(request: GetServiceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterAliUid)) {
      query["FilterAliUid"] = request.filterAliUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.sharedAccountType)) {
      query["SharedAccountType"] = request.sharedAccountType;
    }

    if (!Util.isUnset(request.showDetail)) {
      query["ShowDetail"] = request.showDetail;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  /**
   * Queries the estimated price for creating a service instance.
   * 
   * @param tmpReq - GetServiceEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCostWithOptions(tmpReq: GetServiceEstimateCostRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceEstimateCostResponse> {
    Util.validateModel(tmpReq);
    let request = new GetServiceEstimateCostShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceEstimateCost",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceEstimateCostResponse>(await this.callApi(params, req, runtime), new GetServiceEstimateCostResponse({}));
  }

  /**
   * Queries the estimated price for creating a service instance.
   * 
   * @param request - GetServiceEstimateCostRequest
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCost(request: GetServiceEstimateCostRequest): Promise<GetServiceEstimateCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service instance.
   * 
   * @param request - GetServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceInstanceResponse>(await this.callApi(params, req, runtime), new GetServiceInstanceResponse({}));
  }

  /**
   * Queries the information about a service instance.
   * 
   * @param request - GetServiceInstanceRequest
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the valid values of parameters in a Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraintsWithOptions(request: GetServiceTemplateParameterConstraintsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceTemplateParameterConstraintsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!Util.isUnset(request.enablePrivateVpcConnection)) {
      query["EnablePrivateVpcConnection"] = request.enablePrivateVpcConnection;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new GetServiceTemplateParameterConstraintsResponse({}));
  }

  /**
   * Queries the valid values of parameters in a Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Obtain the AccessKey pair of uploaded files.
   * 
   * @param request - GetUploadCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadCredentialsResponse
   */
  async getUploadCredentialsWithOptions(request: GetUploadCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadCredentials",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadCredentialsResponse>(await this.callApi(params, req, runtime), new GetUploadCredentialsResponse({}));
  }

  /**
   * Obtain the AccessKey pair of uploaded files.
   * 
   * @param request - GetUploadCredentialsRequest
   * @returns GetUploadCredentialsResponse
   */
  async getUploadCredentials(request: GetUploadCredentialsRequest): Promise<GetUploadCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadCredentialsWithOptions(request, runtime);
  }

  /**
   * Queries a list of images uploaded to Container Registry.
   * 
   * @param request - ListAcrImageRepositoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositoriesWithOptions(request: ListAcrImageRepositoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAcrImageRepositoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAcrImageRepositories",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAcrImageRepositoriesResponse>(await this.callApi(params, req, runtime), new ListAcrImageRepositoriesResponse({}));
  }

  /**
   * Queries a list of images uploaded to Container Registry.
   * 
   * @param request - ListAcrImageRepositoriesRequest
   * @returns ListAcrImageRepositoriesResponse
   */
  async listAcrImageRepositories(request: ListAcrImageRepositoriesRequest): Promise<ListAcrImageRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcrImageRepositoriesWithOptions(request, runtime);
  }

  /**
   * Queries the versions of images that are uploaded to the image repository.
   * 
   * @param request - ListAcrImageTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAcrImageTagsResponse
   */
  async listAcrImageTagsWithOptions(request: ListAcrImageTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListAcrImageTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAcrImageTags",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAcrImageTagsResponse>(await this.callApi(params, req, runtime), new ListAcrImageTagsResponse({}));
  }

  /**
   * Queries the versions of images that are uploaded to the image repository.
   * 
   * @param request - ListAcrImageTagsRequest
   * @returns ListAcrImageTagsResponse
   */
  async listAcrImageTags(request: ListAcrImageTagsRequest): Promise<ListAcrImageTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcrImageTagsWithOptions(request, runtime);
  }

  /**
   * Queries the version information about a deployment package.
   * 
   * @param request - ListArtifactVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactVersionsResponse
   */
  async listArtifactVersionsWithOptions(request: ListArtifactVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListArtifactVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListArtifactVersions",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListArtifactVersionsResponse>(await this.callApi(params, req, runtime), new ListArtifactVersionsResponse({}));
  }

  /**
   * Queries the version information about a deployment package.
   * 
   * @param request - ListArtifactVersionsRequest
   * @returns ListArtifactVersionsResponse
   */
  async listArtifactVersions(request: ListArtifactVersionsRequest): Promise<ListArtifactVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArtifactVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of deployment packages.
   * 
   * @param request - ListArtifactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactsResponse
   */
  async listArtifactsWithOptions(request: ListArtifactsRequest, runtime: $Util.RuntimeOptions): Promise<ListArtifactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListArtifacts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListArtifactsResponse>(await this.callApi(params, req, runtime), new ListArtifactsResponse({}));
  }

  /**
   * Queries a list of deployment packages.
   * 
   * @param request - ListArtifactsRequest
   * @returns ListArtifactsResponse
   */
  async listArtifacts(request: ListArtifactsRequest): Promise<ListArtifactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArtifactsWithOptions(request, runtime);
  }

  /**
   * 查询服务分类
   * 
   * @param request - ListServiceCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategoriesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListServiceCategoriesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListServiceCategories",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceCategoriesResponse>(await this.callApi(params, req, runtime), new ListServiceCategoriesResponse({}));
  }

  /**
   * 查询服务分类
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategories(): Promise<ListServiceCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceCategoriesWithOptions(runtime);
  }

  /**
   * Queries a list of service instances.
   * 
   * @param request - ListServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(request: ListServiceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.showDeleted)) {
      query["ShowDeleted"] = request.showDeleted;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceInstances",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
  }

  /**
   * Queries a list of service instances.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceSharedAccountsResponse
   */
  async listServiceSharedAccountsWithOptions(request: ListServiceSharedAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceSharedAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new ListServiceSharedAccountsResponse({}));
  }

  /**
   * @param request - ListServiceSharedAccountsRequest
   * @returns ListServiceSharedAccountsResponse
   */
  async listServiceSharedAccounts(request: ListServiceSharedAccountsRequest): Promise<ListServiceSharedAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsagesWithOptions(request: ListServiceUsagesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceUsagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.supplierRole)) {
      query["SupplierRole"] = request.supplierRole;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceUsages",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceUsagesResponse>(await this.callApi(params, req, runtime), new ListServiceUsagesResponse({}));
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsages(request: ListServiceUsagesRequest): Promise<ListServiceUsagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceUsagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allVersions)) {
      query["AllVersions"] = request.allVersions;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * Modifies the resource information about a service instance.
   * 
   * @param request - ModifyServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResourcesWithOptions(request: ModifyServiceInstanceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyServiceInstanceResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceInstanceResourcesAction)) {
      query["ServiceInstanceResourcesAction"] = request.serviceInstanceResourcesAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyServiceInstanceResources",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ModifyServiceInstanceResourcesResponse({}));
  }

  /**
   * Modifies the resource information about a service instance.
   * 
   * @param request - ModifyServiceInstanceResourcesRequest
   * @returns ModifyServiceInstanceResourcesResponse
   */
  async modifyServiceInstanceResources(request: ModifyServiceInstanceResourcesRequest): Promise<ModifyServiceInstanceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * Pushes metering data of an Alibaba Cloud Marketplace commodity.
   * 
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: PushMeteringDataRequest, runtime: $Util.RuntimeOptions): Promise<PushMeteringDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metering)) {
      query["Metering"] = request.metering;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushMeteringData",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushMeteringDataResponse>(await this.callApi(params, req, runtime), new PushMeteringDataResponse({}));
  }

  /**
   * Pushes metering data of an Alibaba Cloud Marketplace commodity.
   * 
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: PushMeteringDataRequest): Promise<PushMeteringDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  /**
   * Registers an artifact.
   * 
   * @param request - RegisterServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterServiceResponse
   */
  async registerServiceWithOptions(request: RegisterServiceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterServiceResponse>(await this.callApi(params, req, runtime), new RegisterServiceResponse({}));
  }

  /**
   * Registers an artifact.
   * 
   * @param request - RegisterServiceRequest
   * @returns RegisterServiceResponse
   */
  async registerService(request: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerServiceWithOptions(request, runtime);
  }

  /**
   * 商家拒绝服务使用请求
   * 
   * @param request - RejectServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectServiceUsageResponse
   */
  async rejectServiceUsageWithOptions(request: RejectServiceUsageRequest, runtime: $Util.RuntimeOptions): Promise<RejectServiceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userAliUid)) {
      query["UserAliUid"] = request.userAliUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RejectServiceUsage",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectServiceUsageResponse>(await this.callApi(params, req, runtime), new RejectServiceUsageResponse({}));
  }

  /**
   * 商家拒绝服务使用请求
   * 
   * @param request - RejectServiceUsageRequest
   * @returns RejectServiceUsageResponse
   */
  async rejectServiceUsage(request: RejectServiceUsageRequest): Promise<RejectServiceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectServiceUsageWithOptions(request, runtime);
  }

  /**
   * Publishes an artifact.
   * 
   * @param request - ReleaseArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseArtifactResponse
   */
  async releaseArtifactWithOptions(request: ReleaseArtifactRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseArtifactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseArtifactResponse>(await this.callApi(params, req, runtime), new ReleaseArtifactResponse({}));
  }

  /**
   * Publishes an artifact.
   * 
   * @param request - ReleaseArtifactRequest
   * @returns ReleaseArtifactResponse
   */
  async releaseArtifact(request: ReleaseArtifactRequest): Promise<ReleaseArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseArtifactWithOptions(request, runtime);
  }

  /**
   * Remove  service shared account.
   * 
   * @param request - RemoveServiceSharedAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveServiceSharedAccountsResponse
   */
  async removeServiceSharedAccountsWithOptions(request: RemoveServiceSharedAccountsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveServiceSharedAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userAliUids)) {
      query["UserAliUids"] = request.userAliUids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveServiceSharedAccounts",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveServiceSharedAccountsResponse>(await this.callApi(params, req, runtime), new RemoveServiceSharedAccountsResponse({}));
  }

  /**
   * Remove  service shared account.
   * 
   * @param request - RemoveServiceSharedAccountsRequest
   * @returns RemoveServiceSharedAccountsResponse
   */
  async removeServiceSharedAccounts(request: RemoveServiceSharedAccountsRequest): Promise<RemoveServiceSharedAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeServiceSharedAccountsWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstanceWithOptions(request: RestartServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartServiceInstanceResponse>(await this.callApi(params, req, runtime), new RestartServiceInstanceResponse({}));
  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstance(request: RestartServiceInstanceRequest): Promise<RestartServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstanceWithOptions(request: StartServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartServiceInstanceResponse>(await this.callApi(params, req, runtime), new StartServiceInstanceResponse({}));
  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstance(request: StartServiceInstanceRequest): Promise<StartServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstanceWithOptions(request: StopServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopServiceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopServiceInstanceResponse>(await this.callApi(params, req, runtime), new StopServiceInstanceResponse({}));
  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstance(request: StopServiceInstanceRequest): Promise<StopServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Updates a deployment package.
   * 
   * @param tmpReq - UpdateArtifactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactResponse
   */
  async updateArtifactWithOptions(tmpReq: UpdateArtifactRequest, runtime: $Util.RuntimeOptions): Promise<UpdateArtifactResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateArtifactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.artifactProperty)) {
      request.artifactPropertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.artifactProperty, "ArtifactProperty", "json");
    }

    let query = { };
    if (!Util.isUnset(request.artifactId)) {
      query["ArtifactId"] = request.artifactId;
    }

    if (!Util.isUnset(request.artifactPropertyShrink)) {
      query["ArtifactProperty"] = request.artifactPropertyShrink;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.supportRegionIds)) {
      query["SupportRegionIds"] = request.supportRegionIds;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateArtifact",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateArtifactResponse>(await this.callApi(params, req, runtime), new UpdateArtifactResponse({}));
  }

  /**
   * Updates a deployment package.
   * 
   * @param request - UpdateArtifactRequest
   * @returns UpdateArtifactResponse
   */
  async updateArtifact(request: UpdateArtifactRequest): Promise<UpdateArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateArtifactWithOptions(request, runtime);
  }

  /**
   * Upgrades a service.
   * 
   * @param tmpReq - UpdateServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(tmpReq: UpdateServiceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!Util.isUnset(tmpReq.updateOption)) {
      request.updateOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateOption, "UpdateOption", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alarmMetadata)) {
      query["AlarmMetadata"] = request.alarmMetadata;
    }

    if (!Util.isUnset(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!Util.isUnset(request.deployMetadata)) {
      query["DeployMetadata"] = request.deployMetadata;
    }

    if (!Util.isUnset(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.isSupportOperated)) {
      query["IsSupportOperated"] = request.isSupportOperated;
    }

    if (!Util.isUnset(request.licenseMetadata)) {
      query["LicenseMetadata"] = request.licenseMetadata;
    }

    if (!Util.isUnset(request.logMetadata)) {
      query["LogMetadata"] = request.logMetadata;
    }

    if (!Util.isUnset(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resellable)) {
      query["Resellable"] = request.resellable;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceInfo)) {
      query["ServiceInfo"] = request.serviceInfo;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.tenantType)) {
      query["TenantType"] = request.tenantType;
    }

    if (!Util.isUnset(request.trialDuration)) {
      query["TrialDuration"] = request.trialDuration;
    }

    if (!Util.isUnset(request.updateOptionShrink)) {
      query["UpdateOption"] = request.updateOptionShrink;
    }

    if (!Util.isUnset(request.upgradeMetadata)) {
      query["UpgradeMetadata"] = request.upgradeMetadata;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  /**
   * Upgrades a service.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceWithOptions(request, runtime);
  }

  /**
   * Updates the properties of a service instance.
   * 
   * @param tmpReq - UpdateServiceInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttributeWithOptions(tmpReq: UpdateServiceInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceInstanceAttributeResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceInstanceAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.licenseData)) {
      request.licenseDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.licenseData, "LicenseData", "json");
    }

    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.licenseDataShrink)) {
      query["LicenseData"] = request.licenseDataShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceInstanceAttribute",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceAttributeResponse({}));
  }

  /**
   * Updates the properties of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributeRequest
   * @returns UpdateServiceInstanceAttributeResponse
   */
  async updateServiceInstanceAttribute(request: UpdateServiceInstanceAttributeRequest): Promise<UpdateServiceInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a service instance.
   * 
   * @param tmpReq - UpdateServiceInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpecWithOptions(tmpReq: UpdateServiceInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceInstanceSpecResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!Util.isUnset(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.predefinedParametersName)) {
      query["PredefinedParametersName"] = request.predefinedParametersName;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceInstanceSpec",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceInstanceSpecResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceSpecResponse({}));
  }

  /**
   * Updates the configurations of a service instance.
   * 
   * @param request - UpdateServiceInstanceSpecRequest
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Upgrades a service instance.
   * 
   * @param tmpReq - UpgradeServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstanceWithOptions(tmpReq: UpgradeServiceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeServiceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpgradeServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeServiceInstance",
      version: "2021-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeServiceInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeServiceInstanceResponse({}));
  }

  /**
   * Upgrades a service instance.
   * 
   * @param request - UpgradeServiceInstanceRequest
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: UpgradeServiceInstanceRequest): Promise<UpgradeServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

}
