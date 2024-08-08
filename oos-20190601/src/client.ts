// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
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

export class CancelExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelExecutionResponseBody;
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
      body: CancelExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group to which the cloud resource is to be moved. You can use resource groups to manage resources owned by your Alibaba Cloud account. Resource groups simplify the resource and permission management of your Alibaba Cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud resource that you want to move to another resource group.
   * 
   * *   If the ResourceType parameter is set to template, set the ResourceId parameter to the name of the template.
   * *   If the ResourceType parameter is set to parameter, set the ResourceId parameter to the name of the parameter.
   * *   If the ResourceType parameter is set to secretparameter, set the ResourceId parameter to the name of the encryption parameter.
   * *   If the ResourceType parameter is set to stateconfiguration, set the ResourceId parameter to the ID of the desired-state configuration.
   * *   If the ResourceType parameter is set to application, set the ResourceId parameter to the name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * TemplateName
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the cloud resource. Valid values:
   * 
   * *   template: template
   * *   parameter: parameter
   * *   secretparameter: encryption parameter
   * *   stateconfiguration: desired-state configuration
   * *   application: application
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0620E49F-B884-5F98-A834-69D72922E5CF
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployApplicationGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The deployment information about the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * {       "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",       "Parameters": {         "ZoneId": "cn-hangzhou-k",         "ProjectName": "test",         "SystemDiskSize": 40,         "InstanceChargeType": "PostPaid",         "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",         "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",         "SystemDiskCategory": "cloud_essd",         "InstancePassword": "******",         "InternetChargeType": "PayByTraffic",         "InstanceCount": 1,         "InternetMaxBandwidthOut": 0,         "VpcId": "vpc-bp1i99boyas8i8m9t3skp",         "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",         "DataDiskSize": 100,         "EcsInstanceType": "ecs.s6-c1m4.small",         "DataDiskCategory": "cloud_efficiency",         "EnvironmentCommandId": "c-hz028fc3g031gcg"       }
   */
  deployParameters?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployParameters: 'DeployParameters',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployParameters: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployApplicationGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AF4800A-A316-589A-90C4-313B1FEEB084
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

export class ContinueDeployApplicationGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueDeployApplicationGroupResponseBody;
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
      body: ContinueDeployApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfig?: CreateApplicationRequestAlarmConfig;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
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
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * service-79538e30e44541b699d8
   */
  serviceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: CreateApplicationRequestAlarmConfig,
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfigShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * TF-CreateApplication-1647587475-84104b89-eba5-47a8-b2fd-807b8b7d
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
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
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * service-79538e30e44541b699d8
   */
  serviceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigShrink: 'AlarmConfig',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigShrink: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: CreateApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 274917E8-8E74-5928-A82F-4940F52F7ACB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: CreateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationResponseBody;
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
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 218026174
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The ID of the region in which the related sources reside.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The key of the tag. You must set both the ImportTagKey and the ImportTagValue parameters, or leave both of them empty. If you do not set the ImportTagKey and ImportTagValue parameters, the application name is used for this parameter by default.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The value of the tag. You must set both the ImportTagKey and the ImportTagValue parameters, or leave both of them empty. If you do not set the ImportTagKey and ImportTagValue parameters, the application group name is used for this parameter by default.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clientToken: 'ClientToken',
      cmsGroupId: 'CmsGroupId',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clientToken: 'string',
      cmsGroupId: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: CreateApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0E6BEBD3-7F9E-5878-834B-097633AB5F33
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: CreateApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationGroupResponseBody;
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
      body: CreateApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemRequest extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * Valid values:
   * 
   * *   Availability
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Performance
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Security
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cost
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Recovery
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e56767-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The string to be deduplicated.
   * 
   * @example
   * ecs_instance_Sys
   */
  dedupString?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * OpsItem
   */
  description?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 5. 1 indicates the highest priority.
   * 
   * @example
   * 4
   */
  priority?: number;
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Names (ARNs) of the associated resources.
   * 
   * @example
   * [\\"acs:oos:cn-hangzhou:1563457855438522:application/test-33333/applicationgroup/default-cn-hangzhou-1\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * Valid values:
   * 
   * *   High
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Low
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Medium
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Critical
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"SingleAZEcs\\\\",\\n \\\\"url\\\\":\\\\"http://ecs.consle.aliyuncs.com\\\\",\\n \\\\"description\\\\":\\\\"Create Elastic Compute Service (ECS) instances in different zones and import them to an application group.\\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business.
   * 
   * This parameter is required.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS reboot is scheduled
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * Valid values:
   * 
   * *   Availability
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Performance
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Security
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cost
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Recovery
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e56767-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The string to be deduplicated.
   * 
   * @example
   * ecs_instance_Sys
   */
  dedupString?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * OpsItem
   */
  description?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 5. 1 indicates the highest priority.
   * 
   * @example
   * 4
   */
  priority?: number;
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Names (ARNs) of the associated resources.
   * 
   * @example
   * [\\"acs:oos:cn-hangzhou:1563457855438522:application/test-33333/applicationgroup/default-cn-hangzhou-1\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * Valid values:
   * 
   * *   High
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Low
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Medium
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Critical
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"SingleAZEcs\\\\",\\n \\\\"url\\\\":\\\\"http://ecs.consle.aliyuncs.com\\\\",\\n \\\\"description\\\\":\\\\"Create Elastic Compute Service (ECS) instances in different zones and import them to an application group.\\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business.
   * 
   * This parameter is required.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS reboot is scheduled
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      tagsShrink: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      tagsShrink: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: CreateOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA4F08D4-DA54-5407-84B9-108C71D75B17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: CreateOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOpsItemResponseBody;
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
      body: CreateOpsItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The constraints of the common parameter. By default, this parameter is null. Valid values:
   * 
   * *   AllowedValues: The value that is allowed for the common parameter. It must be an array string.
   * *   AllowedPattern: The pattern that is allowed for the common parameter. It must be a regular expression.
   * *   MinLength: The minimum length of the common parameter.
   * *   MaxLength: The maximum length of the common parameter.
   * 
   * @example
   * {
   *     "AllowedValues": [
   *         "parameter"
   *     ],
   *     "AllowedPattern": "parameter",
   *     "MinLength": 0,
   *     "MaxLength": 20
   * }
   */
  constraints?: string;
  /**
   * @remarks
   * The description of the common parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the parameter. Valid values: String and StringList.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The value of the common parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * parameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The constraints of the common parameter. By default, this parameter is null. Valid values:
   * 
   * *   AllowedValues: The value that is allowed for the common parameter. It must be an array string.
   * *   AllowedPattern: The pattern that is allowed for the common parameter. It must be a regular expression.
   * *   MinLength: The minimum length of the common parameter.
   * *   MaxLength: The maximum length of the common parameter.
   * 
   * @example
   * {
   *     "AllowedValues": [
   *         "parameter"
   *     ],
   *     "AllowedPattern": "parameter",
   *     "MinLength": 0,
   *     "MaxLength": 20
   * }
   */
  constraints?: string;
  /**
   * @remarks
   * The description of the common parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The data type of the parameter. Valid values: String and StringList.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The value of the common parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * parameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameter?: CreateParameterResponseBodyParameter;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B419FF3-ABC6-4DF0-95E5-636DC8CBB8AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreateParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateParameterResponseBody;
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
      body: CreateParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * This parameter is required.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Specifies whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * PatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   Windows
   * *   Ubuntu
   * *   CentOS
   * *   Debian
   * *   AliyunLinux
   * *   RedhatEnterpriseLinux
   * *   Anolis
   * *   AlmaLinux
   * 
   * This parameter is required.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the region in which you want to create a patch baseline.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatches?: string[];
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: CreatePatchBaselineRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreatePatchBaselineRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * This parameter is required.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatchesShrink?: string;
  /**
   * @remarks
   * Specifies whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * PatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   Windows
   * *   Ubuntu
   * *   CentOS
   * *   Debian
   * *   AliyunLinux
   * *   RedhatEnterpriseLinux
   * *   Anolis
   * *   AlmaLinux
   * 
   * This parameter is required.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the region in which you want to create a patch baseline.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatchesShrink?: string;
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      rejectedPatchesShrink: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
      rejectedPatchesShrink: 'string',
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: CreatePatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5173FF6-D10D-5E8C-8F71-943C2A3E25C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: CreatePatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePatchBaselineResponseBody;
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
      body: CreatePatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The constraints of the encryption parameter. By default, this parameter is null. Valid values:
   * 
   * *   AllowedValues: The value that is allowed for the encryption parameter. It must be an array string.
   * *   AllowedPattern: The pattern that is allowed for the encryption parameter. It must be a regular expression.
   * *   MinLength: The minimum length of the encryption parameter.
   * *   MaxLength: The maximum length of the encryption parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":"secretparameter","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-hzz****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the encryption parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The key ID of Key Management Service (KMS) that is used to encrypt the parameter.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the parameter. Set the value to Secret.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The value of the encryption parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      keyId: 'KeyId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      keyId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The constraints of the encryption parameter. By default, this parameter is null. Valid values:
   * 
   * *   AllowedValues: The value that is allowed for the encryption parameter. It must be an array string.
   * *   AllowedPattern: The pattern that is allowed for the encryption parameter. It must be a regular expression.
   * *   MinLength: The minimum length of the encryption parameter.
   * *   MaxLength: The maximum length of the encryption parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":"secretparameter","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-hzz****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the encryption parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The key ID of Key Management Service (KMS) that is used to encrypt the parameter.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the parameter. Set the value to Secret.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The value of the encryption parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      keyId: 'KeyId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      keyId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the encryption parameter.
   */
  parameter?: CreateSecretParameterResponseBodyParameter;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B419FF3-ABC6-4DF0-95E5-636DC8CBB8AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreateSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecretParameterResponseBody;
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
      body: CreateSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
   * 
   * @example
   * ApplyOnce
   */
  configureMode?: string;
  /**
   * @remarks
   * The description of the desired-state configuration.
   * 
   * @example
   * The region ID.
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {     "policy": {       "ACS:Application": {         "Collection": "Enabled"       },       "ACS:Network": {         "Collection": "Enabled"       }     }   }
   */
  parameters?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * The ID of the resource group.
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type. Set the value to rate.
   * 
   * This parameter is required.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The resources to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * {     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }
   */
  targets?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the latest version of the template is used.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      tags: 'Tags',
      targets: 'Targets',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
   * 
   * @example
   * ApplyOnce
   */
  configureMode?: string;
  /**
   * @remarks
   * The description of the desired-state configuration.
   * 
   * @example
   * The region ID.
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {     "policy": {       "ACS:Application": {         "Collection": "Enabled"       },       "ACS:Network": {         "Collection": "Enabled"       }     }   }
   */
  parameters?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * The ID of the resource group.
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type. Set the value to rate.
   * 
   * This parameter is required.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The resources to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * {     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }
   */
  targets?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the latest version of the template is used.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      tagsShrink: 'Tags',
      targets: 'Targets',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      tagsShrink: 'string',
      targets: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-DA13E8B00BE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the desired-state configuration.
   */
  stateConfiguration?: CreateStateConfigurationResponseBodyStateConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: CreateStateConfigurationResponseBodyStateConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStateConfigurationResponseBody;
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
      body: CreateStateConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the template. The content must be in the JSON or YAML format, and its maximum size is 64 KB.
   * 
   * This parameter is required.
   * 
   * @example
   * {"FormatVersion": "OOS-2019-06-01", "Description": "Describe instances of given status", "Parameters": {"Status": {"Type": "String", "Description": "(Required) The status of the Ecs instance."}}, "Tasks": [{"Properties": {"Parameters": {"Status": "{{ Status }}"}, "API": "DescribeInstances", "Service": "Ecs"}, "Name": "foo", "Action": "ACS::ExecuteApi"}]}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag keys and tag values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The name of the template. The name can be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The name cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the version of the template.
   * 
   * @example
   * v2
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the template. The content must be in the JSON or YAML format, and its maximum size is 64 KB.
   * 
   * This parameter is required.
   * 
   * @example
   * {"FormatVersion": "OOS-2019-06-01", "Description": "Describe instances of given status", "Parameters": {"Status": {"Type": "String", "Description": "(Required) The status of the Ecs instance."}}, "Tasks": [{"Properties": {"Parameters": {"Status": "{{ Status }}"}, "API": "DescribeInstances", "Service": "Ecs"}, "Name": "foo", "Action": "ACS::ExecuteApi"}]}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag keys and tag values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The name of the template. The name can be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The name cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the version of the template.
   * 
   * @example
   * v2
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the template.
   */
  template?: CreateTemplateResponseBodyTemplate;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * Private
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: CreateTemplateResponseBodyTemplate,
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateResponseBody;
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
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * False
   */
  force?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to retain resources created by application manager when deleting the application. Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  retainResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      name: 'Name',
      regionId: 'RegionId',
      retainResource: 'RetainResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      name: 'string',
      regionId: 'string',
      retainResource: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 37A9F0FD-51D0-58D5-B91F-DF570281556B
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

export class DeleteApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationResponseBody;
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
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to retain resources created by application manager when deleting the application. Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  retainResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      regionId: 'RegionId',
      retainResource: 'RetainResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      regionId: 'string',
      retainResource: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E011F98-4EE5-5E3A-8FA3-D38F2C531C1F
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

export class DeleteApplicationGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationGroupResponseBody;
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
      body: DeleteApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionsRequest extends $tea.Model {
  /**
   * @remarks
   * The execution IDs.
   * 
   * You can specify multiple execution IDs in a JSON array in the format of `["xxxxxxxxx", "yyyyyyyyy", ... "zzzzzzzzz"]`. You can specify up to 100 execution IDs at a time. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["exec-xxx"]
   */
  executionIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionIds: 'ExecutionIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 491DF8C2-34C9-4679-9DB3-4C0F49B129AC
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

export class DeleteExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExecutionsResponseBody;
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
      body: DeleteExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the common parameter. The name can be up to 180 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). It cannot start with aliyun, acs, alibaba, alicloud, or oos.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0D02BDF-77F6-49F2-95C9-8E87121D2979
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

export class DeleteParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteParameterResponseBody;
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
      body: DeleteParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePatchBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePatchBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85197066-0209-5775-BBED-99DF9DA44E48
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

export class DeletePatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePatchBaselineResponseBody;
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
      body: DeletePatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the encryption parameter. The name must be 1 to 180 characters in length and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0D02BDF-77F6-49F2-95C9-8E87121D1944
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

export class DeleteSecretParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecretParameterResponseBody;
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
      body: DeleteSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStateConfigurationsRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * abcde3OARpx77No54nv6
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
   * The IDs of desired-state configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * ["sc-asfgdhj12345"]
   */
  stateConfigurationIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      stateConfigurationIds: 'StateConfigurationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      stateConfigurationIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStateConfigurationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345B731-0FCE-48BA-8D42-605abcde
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

export class DeleteStateConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStateConfigurationsResponseBody;
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
      body: DeleteStateConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to delete the related executions when a template is deleted.
   * 
   * @example
   * false
   */
  autoDeleteExecutions?: boolean;
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
   * The name of the template. The name can be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteExecutions: 'AutoDeleteExecutions',
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteExecutions: 'boolean',
      regionId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2075899A-585D-4A41-A9B2-28DA8534F
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

export class DeleteTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateResponseBody;
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
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to delete the related executions when a template is deleted.
   * 
   * @example
   * false
   */
  autoDeleteExecutions?: boolean;
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
   * The names of the templates to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * ["t1","t2"]
   */
  templateNames?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteExecutions: 'AutoDeleteExecutions',
      regionId: 'RegionId',
      templateNames: 'TemplateNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteExecutions: 'boolean',
      regionId: 'string',
      templateNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2075899A-585D-4A41-A9B2-28DA8534
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

export class DeleteTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplatesResponseBody;
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
      body: DeleteTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The deployment information about the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * {       "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",       "Parameters": {         "ZoneId": "cn-hangzhou-k",         "ProjectName": "test",         "SystemDiskSize": 40,         "InstanceChargeType": "PostPaid",         "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",         "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",         "SystemDiskCategory": "cloud_essd",         "InstancePassword": "******",         "InternetChargeType": "PayByTraffic",         "InstanceCount": 1,         "InternetMaxBandwidthOut": 0,         "VpcId": "vpc-bp1i99boyas8i8m9t3skp",         "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",         "DataDiskSize": 100,         "EcsInstanceType": "ecs.s6-c1m4.small",         "DataDiskCategory": "cloud_efficiency",         "EnvironmentCommandId": "c-hz028fc3g031gcg"       }
   */
  deployParameters?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region in which you want to deploy the application group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployParameters: 'DeployParameters',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployParameters: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AF4800A-A316-589A-90C4-313B1FEEB084
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

export class DeployApplicationGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployApplicationGroupResponseBody;
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
      body: DeployApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_application
   */
  applicationName?: string;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-06
   */
  billingCycle?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The application group name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_application_group
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      billingCycle: 'BillingCycle',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      billingCycle: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The consume of application group.
   */
  applicationGroupConsume?: DescribeApplicationGroupBillResponseBodyApplicationGroupConsume[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E897A1AB-4701-5B71-93AD-38FD703763A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroupConsume: 'ApplicationGroupConsume',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroupConsume: { 'type': 'array', 'itemType': DescribeApplicationGroupBillResponseBodyApplicationGroupConsume },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationGroupBillResponseBody;
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
      body: DescribeApplicationGroupBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The supported natural language. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 469E79B1-90A3-4A57-B7C4-2FE0C8B5175E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The content of the template in the JSON or YAML format. This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * {   "Description": "Example template, describe instances in some status",   "FormatVersion": "OOS-2019-06-01",   "Parameters": {},   "Tasks": [     {       "Name": "describeInstances",       "Action": "ACS::ExecuteAPI",       "Description": "desc-en",       "Properties": {         "Service": "ECS",         "API": "DescribeInstances",         "Parameters": {           "Status": "Running"         }       }     }   ] }
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * vmeixme
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. The default value is the latest version of the template.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ramRole: 'RamRole',
      regionId: 'RegionId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramRole: 'string',
      regionId: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The policies that are missing.
   * 
   * @example
   * [{\\"Action\\": [\\"ecs:DescribeInvocationResults\\", \\"ecs:DescribeInstances\\", \\"ecs:RunCommand\\", \\"ecs:DescribeInvocations\\"], \\"ServiceName\\": \\"ecs\\", \\"Resources\\": \\"*\\"}]
   */
  missingPolicy?: string;
  /**
   * @remarks
   * The RAM policy.
   * 
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: 'string',
      policy: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateExecutionPolicyResponseBody;
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
      body: GenerateExecutionPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 51004B8A-6D9A-5ACB-9158-6C6794496AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationResponseBody;
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
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the application group.
   */
  applicationGroup?: GetApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 92EA60ED-544D-55E9-93D9-237BE9976C0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: GetApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationGroupResponseBody;
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
      body: GetApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-046490ff88f242
   */
  executionId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * "{\\n \\"FormatVersion\\": \\"OOS-2019-06-01\\",\\n \\"Parameters\\": {\\n \\"Status\\": {\\n \\"Type\\": \\"String\\",\\n \\"Description\\": \\"(Required) The ID of the ECS instance.\\"\\n }\\n },\\n \\"Tasks\\": [\\n {\\n \\"Name\\": \\"bar\\",\\n \\"Properties\\": {\\n \\"Parameters\\": {\\n \\"Status\\": \\"{{ Status }}\\"\\n },\\n \\"API\\": \\"DescribeInstances\\",\\n \\"Service\\": \\"Ecs\\"\\n },\\n \\"Action\\": \\"acs::ExecuteAPI\\",\\n \\"Outputs\\": {\\n \\"InstanceIds\\", {\\n \\"ValueSelector\\": \\".Instances.Instance[].InstanceId\\",\\n \\"Type\\": \\"List\\"\\n }\\n }\\n }\\n ],\\n \\"Outputs\\": {\\n \\"InstanceIds\\": {\\n \\"Value\\": \\" {{ bar.InstanceIds }} \\",\\n \\"Type\\": \\"List\\"\\n }\\n }\\n}\\n"
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A60-EBE7-47CA-9757-12C1D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the template.
   */
  template?: GetExecutionTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetExecutionTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExecutionTemplateResponseBody;
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
      body: GetExecutionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return only properties that support the aggregate feature in the configuration list. Valid values:
   * 
   * *   true: only returns properties that support the aggregate feature in the configuration list.
   * *   false: returns all properties in the configuration list.
   * 
   * @example
   * false
   */
  aggregator?: boolean;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfh8MVLQI9AuKGACLgjbsXbWs-Mna47IDM6tr6wK7TZ1
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
   * The configuration list type name. Valid values:
   * 
   * *   ACS:InstanceInformation
   * *   ACS:Application
   * *   ACS:File
   * *   ACS:Network
   * *   ACS:WindowsRole
   * *   ACS:Service
   * *   ACS:WindowsUpdate
   * *   ACS:WindowsRegistry
   * 
   * @example
   * ACS:Application
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfh8MVLQI9AuKGACLgjbsXbWs-Mna47IDM6tr6wK7TZ1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89117642-7167-4F4D-B7F1-876582279E3E
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed configurations of the configuration list.
   */
  schemas?: GetInventorySchemaResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInventorySchemaResponseBody;
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
      body: GetInventorySchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemRequest extends $tea.Model {
  /**
   * @remarks
   * The O\\&M item ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oi-d52b08695e2b46ae8413
   */
  opsItemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItemId: 'OpsItemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItemId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: GetOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BED4C16-BD30-5E27-94D4-7EBCCECF70C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: GetOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOpsItemResponseBody;
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
      body: GetOpsItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the common parameter. The name can be up to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameter?: GetParameterResponseBodyParameter;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA326372-2A10-4C3B-BE3E-6439DB7557CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParameterResponseBody;
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
      body: GetParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The names of the common parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * ["parameter1","parameter2"]
   */
  names?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * Invalid parameters.
   */
  invalidParameters?: string[];
  /**
   * @remarks
   * The information about the common parameters.
   */
  parameters?: GetParametersResponseBodyParameters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2597E94B-5346-42D1-BB58-D3333EDD0975
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidParameters: 'InvalidParameters',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GetParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParametersResponseBody;
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
      body: GetParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the parameter. For example, if the name of a parameter is /path/path1/Myparameter, the path of the parameter is /path/path1/.
   * 
   * This parameter is required.
   * 
   * @example
   * /parameter
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to recursively query encryption parameters from all levels of directories in the specified path. Valid values: true and false. For example, if you want to query the /secretParameter/mySecretParameter and /secretParameter/secretParameter 1/mySecretParameter parameters, the valid values specify the parameters to be returned.
   * 
   * *   true: returns both of the /secretParameter/mySecretParameter and /secretParameter/secretParameter1/mySecretParameter parameters.
   * *   false: returns only the /secretParameter/mySecretParameter parameter.
   * 
   * @example
   * false
   */
  recursive?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the common parameters.
   */
  parameters?: GetParametersByPathResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25156E99-7437-4590-AA58-2ACA17DE405C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetParametersByPathResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParametersByPathResponseBody;
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
      body: GetParametersByPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region in which the patch baseline whose details you want to query resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: GetPatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2C630E64-7273-57AC-A598-1B2B8B35CEA5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: GetPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPatchBaselineResponseBody;
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
      body: GetPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. The decrypted parameter value is returned only if this parameter is set to true. Otherwise, null is returned.
   * 
   * @example
   * false
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the encryption parameter.
   */
  parameter?: GetSecretParameterResponseBodyParameter;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7F14FB7C-C9BE-44AE-92ED-21ACC02FBFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretParameterResponseBody;
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
      body: GetSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the encryption parameter. Multiple encryption parameters can form a JSON array in the format of ["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"]. Each JSON array can contain a maximum of 10 encryption parameters. Multiple encryption parameters in the array are separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["secretParameter","secretParameter1"]
   */
  names?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * Invalid encryption parameter.
   */
  invalidParameters?: string[];
  /**
   * @remarks
   * The information about the encryption parameter.
   */
  parameters?: GetSecretParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5320F1D-92D9-44BB-A416-5FC525ED6D57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidParameters: 'InvalidParameters',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GetSecretParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretParametersResponseBody;
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
      body: GetSecretParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the encryption parameter. The path must be 1 to 200 characters in length. For example, if the name of an encryption parameter is /secretParameter/mySecretParameter, the path of the encryption parameter is /secretParameter.
   * 
   * This parameter is required.
   * 
   * @example
   * /secretParameter
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to recursively query encryption parameters from all levels of directories in the specified path. Valid values: true and false. For example, if you want to query the /secretParameter/mySecretParameter and /secretParameter/secretParameter 1/mySecretParameter parameters, the valid values specify the parameters to be returned.
   * 
   * *   true: returns both of the /secretParameter/mySecretParameter and /secretParameter/secretParameter1/mySecretParameter parameters.
   * *   false: returns only the /secretParameter/mySecretParameter parameter.
   * 
   * @example
   * false
   */
  recursive?: boolean;
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
   * Specifies whether to decrypt the parameter value. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the encryption parameters.
   */
  parameters?: GetSecretParametersByPathResponseBodyParameters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25156E99-7437-4590-AA58-2ACA17DE405C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetSecretParametersByPathResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretParametersByPathResponseBody;
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
      body: GetSecretParametersByPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F755DC9-C0CF-4598-B2E3-2CC763F18CB2
   */
  requestId?: string;
  /**
   * @remarks
   * The information of service settings.
   */
  serviceSettings?: GetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': GetServiceSettingsResponseBodyServiceSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceSettingsResponseBody;
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
      body: GetServiceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
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
   * The name of the template. The name can be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The name cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. The default value is the latest version of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * "FormatVersion: OOS-2019-06-01\\nDescription:\\n  en:  Creates an ECS image\\n  zh-cn: 创建一个ECS镜像\\n  name-en: Create Image\\n  name-zh-cn: 创建镜像\\n  categories:\\n    - image_manage\\n    - application_manage\\nParameters:\\n  regionId:\\n    Type: String\\n    Label:\\n      en: RegionId\\n      zh-cn: 地域ID\\n    AssociationProperty: RegionId\\n    Default: \\"{{ ACS::RegionId }}\\"\\n  instanceId:\\n    Label:\\n      en: InstanceId\\n      zh-cn: ECS实例ID\\n    Type: String\\n    AssociationProperty: ALIYUN::ECS::Instance::InstanceId\\n    AssociationPropertyMetadata:\\n      RegionId: regionId\\n  imageName:\\n    Label:\\n      en: ImageName\\n      zh-cn: 新镜像的名称\\n    Type: String\\n    Description:\\n      en: <p class=\\"p\\">Note:</p> <ul class=\\"ul\\"> <li class=\\"li\\">Length is 2~128 English or Chinese characters</li> <li class=\\"li\\"><font color=\\"red\\">must start with big or small letters or Chinese, not http:// and https://. </font></li> <li class=\\"li\\">Can contain numbers, colons (:), underscores (_), or dashes (-). </li> </ul>\\n      zh-cn: <p class=\\"p\\">注意：</p> <ul class=\\"ul\\"> <li class=\\"li\\">长度为2~128个英文或中文字符</li> <li class=\\"li\\"><font color=\\"red\\">必须以大小字母或中文开头，不能以http://和https://开头。</font></li> <li class=\\"li\\">可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。</li> </ul>\\n  tags:\\n    Label:\\n      en: Tags\\n      zh-cn: 镜像标签\\n    Type: Json\\n    AssociationProperty: Tags\\n    AssociationPropertyMetadata:\\n      ShowSystem: false\\n    Default: []\\n  OOSAssumeRole:\\n    Label:\\n      en: OOSAssumeRole\\n      zh-cn: OOS扮演的RAM角色\\n    Type: String\\n    Default: OOSServiceRole\\nRamRole: \\"{{ OOSAssumeRole }}\\"\\nTasks:\\n- Name: createImage\\n  Action: ACS::ECS::CreateImage\\n  Description:\\n    en: Create new image with the specified image name and instance ID\\n    zh-cn: 通过指定实例ID和镜像名称创建新的镜像\\n  Properties:\\n    regionId: \\"{{ regionId }}\\"\\n    imageName: \\"{{ imageName }}__on_{{ ACS::ExecutionId }}_at_{{ Acs::CurrentDate }}\\"\\n    instanceId: \\"{{ instanceId }}\\"\\n    tags: \\"{{tags}}\\"\\n  Outputs:\\n    imageId:\\n      ValueSelector: imageId\\n      Type: String\\nOutputs:\\n  imageId:\\n    Type: String\\n    Value: \\"{{ createImage.imageId }}\\"\\nMetadata:\\n  ALIYUN::OOS::Interface:\\n    ParameterGroups:\\n      - Parameters:\\n          - regionId\\n          - instanceId\\n        Label:\\n          default:\\n            zh-cn: 选择实例\\n            en: Select Ecs Instances\\n      - Parameters:\\n          - imageName\\n          - tags\\n        Label:\\n          default:\\n            zh-cn: 镜像设置\\n            en: Image Configure\\n      - Parameters:\\n          - OOSAssumeRole\\n        Label:\\n          default:\\n            zh-cn: 高级选项\\n            en: Control Options"
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BBE2663-A18E-5261-9BBB-F4832F5294D9
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the template.
   */
  template?: GetTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateResponseBody;
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
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 20 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the action. All actions whose names contain the specified action name are returned.
   * 
   * @example
   * MyTemplate
   */
  OOSActionName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OOSActionName: 'OOSActionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OOSActionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the actions.
   */
  actions?: ListActionsResponseBodyActions[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F9154C02-F847-4563-BB6A-6DD01A4F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListActionsResponseBody;
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
      body: ListActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the region in which the related resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud resource.
   * 
   * @example
   * i-2vcj9raxrhxb48zz3whw
   */
  resourceId?: string;
  /**
   * @remarks
   * The code of the product to which the cloud resource belongs.
   * 
   * @example
   * ecs
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The type of the cloud resource.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployRegionId: 'DeployRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceProduct: 'ResourceProduct',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployRegionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceProduct: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the application group.
   */
  applicationGroups?: ListApplicationGroupsResponseBodyApplicationGroups[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69D97BF2-5DF2-544C-A650-36A474E17BC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroups: 'ApplicationGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroups: { 'type': 'array', 'itemType': ListApplicationGroupsResponseBodyApplicationGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationGroupsResponseBody;
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
      body: ListApplicationGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the application.
   * 
   * Valid values:
   * 
   * *   ComputeNest
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Custom
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DingTalk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * "MyApplications"
   */
  name?: string;
  /**
   * @remarks
   * The names of the applications.
   * 
   * @example
   * ["MyApplication"]
   */
  names?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1","k2": "v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      maxResults: 'MaxResults',
      name: 'Name',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      maxResults: 'number',
      name: 'string',
      names: 'string',
      nextToken: 'string',
      regionId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the application.
   * 
   * Valid values:
   * 
   * *   ComputeNest
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Custom
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DingTalk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * "MyApplications"
   */
  name?: string;
  /**
   * @remarks
   * The names of the applications.
   * 
   * @example
   * ["MyApplication"]
   */
  names?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1","k2": "v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      maxResults: 'MaxResults',
      name: 'Name',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      maxResults: 'number',
      name: 'string',
      names: 'string',
      nextToken: 'string',
      regionId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the application.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12067D53-56A9-561B-ADD6-61429D207117
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsResponseBody;
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
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The type of the log.
   * 
   * @example
   * System
   */
  logType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which you want to query the logs of the execution.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * exec-1234567zxcvb.t0010
   */
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The logs of the execution.
   */
  executionLogs?: ListExecutionLogsResponseBodyExecutionLogs[];
  /**
   * @remarks
   * Indicates whether the log is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABdpsGWjX8dJ-a6dl_pvoS7AFxNHSNJKHLCAJJ0ylgA53nWW5V4HTEZKCYTaEPNOrxFir4z43UTOjE150cFr8AGTifA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionLogs: 'ExecutionLogs',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLogs: { 'type': 'array', 'itemType': ListExecutionLogsResponseBodyExecutionLogs },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutionLogsResponseBody;
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
      body: ListExecutionLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * myTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C04B668D-D2DD-4B40-B6E9-0E3C4F53D5B5
   */
  requestId?: string;
  /**
   * @remarks
   * The information about high-risk tasks.
   */
  riskyTasks?: ListExecutionRiskyTasksResponseBodyRiskyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskyTasks: 'RiskyTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskyTasks: { 'type': 'array', 'itemType': ListExecutionRiskyTasksResponseBodyRiskyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutionRiskyTasksResponseBody;
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
      body: ListExecutionRiskyTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsRequest extends $tea.Model {
  /**
   * @remarks
   * The types of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger. You can specify only one of the Categories and Category parameters. We recommend that you specify Categories.
   * 
   * @example
   * ["TimerTrigger"、"EventTrigger"]
   */
  categories?: string;
  /**
   * @remarks
   * The type of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger.
   * 
   * @example
   * Other
   */
  category?: string;
  /**
   * @remarks
   * The depth of execution. Valid values: RootDepth and FirstChildDepth. If you set this parameter to RootDepth, only the parent execution is returned. If you set this parameter to FirstChildDepth, only the child executions at the first level are returned. You can specify only one of the Depth and IncludeChildExecution parameters. We recommend that you specify Depth.
   * 
   * @example
   * RootDepth
   */
  depth?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * MyDescription
   */
  description?: string;
  /**
   * @remarks
   * The earliest end time. The executions that stop running at or later than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateAfter?: string;
  /**
   * @remarks
   * The latest end time. The executions that stop running at or earlier than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateBefore?: string;
  /**
   * @remarks
   * The executor.
   * 
   * @example
   * vme
   */
  executedBy?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * Specifies whether to include child executions. Default value: False.
   * 
   * @example
   * true
   */
  includeChildExecution?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   **Automatic**
   * *   **Debug**
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) resource.
   * 
   * @example
   * i-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource template.
   * 
   * @example
   * ACS-ECS-TEST
   */
  resourceTemplateName?: string;
  /**
   * @remarks
   * The field that is used to sort the executions to query. Valid values:
   * 
   * *   **StartDate**: specifies that the executions are sorted based on the time when they are created. This is the default value.
   * *   **EndDate**: specifies that the executions are sorted based on the time when they stop running.
   * *   **Status**: specifies that the executions are sorted based on their states.
   * 
   * @example
   * StartDate
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The earliest start time. The executions that start to run at or later than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateAfter?: string;
  /**
   * @remarks
   * The latest start time. The executions that start to run at or earlier than the specified point in time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateBefore?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Running, Started, Success, Failed, Waiting, Cancelled, Pending, and Skipped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags for the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The name of the template. All templates whose names contain the specified template name are queried.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      category: 'Category',
      depth: 'Depth',
      description: 'Description',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      tags: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      category: 'string',
      depth: 'string',
      description: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The types of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger. You can specify only one of the Categories and Category parameters. We recommend that you specify Categories.
   * 
   * @example
   * ["TimerTrigger"、"EventTrigger"]
   */
  categories?: string;
  /**
   * @remarks
   * The type of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger.
   * 
   * @example
   * Other
   */
  category?: string;
  /**
   * @remarks
   * The depth of execution. Valid values: RootDepth and FirstChildDepth. If you set this parameter to RootDepth, only the parent execution is returned. If you set this parameter to FirstChildDepth, only the child executions at the first level are returned. You can specify only one of the Depth and IncludeChildExecution parameters. We recommend that you specify Depth.
   * 
   * @example
   * RootDepth
   */
  depth?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * MyDescription
   */
  description?: string;
  /**
   * @remarks
   * The earliest end time. The executions that stop running at or later than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateAfter?: string;
  /**
   * @remarks
   * The latest end time. The executions that stop running at or earlier than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateBefore?: string;
  /**
   * @remarks
   * The executor.
   * 
   * @example
   * vme
   */
  executedBy?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * Specifies whether to include child executions. Default value: False.
   * 
   * @example
   * true
   */
  includeChildExecution?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   **Automatic**
   * *   **Debug**
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) resource.
   * 
   * @example
   * i-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource template.
   * 
   * @example
   * ACS-ECS-TEST
   */
  resourceTemplateName?: string;
  /**
   * @remarks
   * The field that is used to sort the executions to query. Valid values:
   * 
   * *   **StartDate**: specifies that the executions are sorted based on the time when they are created. This is the default value.
   * *   **EndDate**: specifies that the executions are sorted based on the time when they stop running.
   * *   **Status**: specifies that the executions are sorted based on their states.
   * 
   * @example
   * StartDate
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The earliest start time. The executions that start to run at or later than the specified time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateAfter?: string;
  /**
   * @remarks
   * The latest start time. The executions that start to run at or earlier than the specified point in time are queried.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateBefore?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Running, Started, Success, Failed, Waiting, Cancelled, Pending, and Skipped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags for the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The name of the template. All templates whose names contain the specified template name are queried.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      category: 'Category',
      depth: 'Depth',
      description: 'Description',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      category: 'string',
      depth: 'string',
      description: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      tagsShrink: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the task executions.
   */
  executions?: ListExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A074-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExecutionsResponseBody;
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
      body: ListExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitRepositoriesRequest extends $tea.Model {
  clientToken?: string;
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  platform?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      orgName: 'OrgName',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platform: 'Platform',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      orgName: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitRepositoriesResponseBody extends $tea.Model {
  count?: number;
  gitRepos?: ListGitRepositoriesResponseBodyGitRepos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      gitRepos: 'GitRepos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      gitRepos: { 'type': 'array', 'itemType': ListGitRepositoriesResponseBodyGitRepos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitRepositoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGitRepositoriesResponseBody;
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
      body: ListGitRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePackageStatesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp1cpoxxxwxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctzxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ["template1","template2"]
   */
  templateNames?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      templateNames: 'TemplateNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      templateNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePackageStatesResponseBody extends $tea.Model {
  /**
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctzxxxxxxx
   */
  nextToken?: string;
  packageStates?: ListInstancePackageStatesResponseBodyPackageStates[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-XXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packageStates: 'PackageStates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      packageStates: { 'type': 'array', 'itemType': ListInstancePackageStatesResponseBodyPackageStates },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePackageStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancePackageStatesResponseBody;
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
      body: ListInstancePackageStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) instance. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
   * 
   * @example
   * ["i-bp1jaxa2bs4bps7*****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the instance whose patches you want to query resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of patches of the instance.
   */
  instancePatchStates?: ListInstancePatchStatesResponseBodyInstancePatchStates[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9A47C086-E64D-52EE-8B2C-EFD23877C55E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePatchStates: 'InstancePatchStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePatchStates: { 'type': 'array', 'itemType': ListInstancePatchStatesResponseBodyInstancePatchStates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancePatchStatesResponseBody;
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
      body: ListInstancePatchStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the patches that you want to query. If you do not set this parameter, patches are not filtered.
   * 
   * @example
   * Installed
   */
  patchStatuses?: string;
  /**
   * @remarks
   * The ID of the region in which the instance whose patches you want to query resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchStatuses: 'PatchStatuses',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      patchStatuses: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the patch.
   */
  patches?: ListInstancePatchesResponseBodyPatches[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A615755-9C86-5EA6-BF9E-6E8F1AFF9403
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patches: 'Patches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patches: { 'type': 'array', 'itemType': ListInstancePatchesResponseBodyPatches },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancePatchesResponseBody;
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
      body: ListInstancePatchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesRequest extends $tea.Model {
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: ListInventoryEntriesRequestFilter[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1cpoxxxwxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the component. Valid values:
   * 
   * *   ACS:InstanceInformation
   * *   ACS:Application
   * *   ACS:File
   * *   ACS:Network
   * *   ACS:WindowsRole
   * *   ACS:Service
   * *   ACS:WindowsRegistry
   * *   ACS:WindowsUpdate
   * 
   * This parameter is required.
   * 
   * @example
   * ACS:InstanceInformation
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListInventoryEntriesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the request was sent.
   * 
   * @example
   * 2020-09-17T12:28:13Z
   */
  captureTime?: string;
  /**
   * @remarks
   * The configurations of the component.
   */
  entries?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1cpoxxxwxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A81E4B2E-6B33-4BAE-9856-55DB7C893E01
   */
  requestId?: string;
  /**
   * @remarks
   * The version number of the component.
   * 
   * @example
   * 1.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * ACS:InstanceInformation
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      captureTime: 'CaptureTime',
      entries: 'Entries',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemaVersion: 'SchemaVersion',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureTime: 'string',
      entries: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInventoryEntriesResponseBody;
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
      body: ListInventoryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsRequest extends $tea.Model {
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: ListOpsItemsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
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
   * The information about resource tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTags: 'ResourceTags',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsItemsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: ListOpsItemsShrinkRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
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
   * The information about resource tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  resourceTagsShrink?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTagsShrink: 'ResourceTags',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsItemsShrinkRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceTagsShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of O\\&M items.
   */
  opsItems?: ListOpsItemsResponseBodyOpsItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 113DD533-389C-5F83-9C69-F64D5BAB10B2
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      opsItems: 'OpsItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      opsItems: { 'type': 'array', 'itemType': ListOpsItemsResponseBodyOpsItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOpsItemsResponseBody;
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
      body: ListOpsItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
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
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-09-07T11:37:29Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter-description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-a483b520e0axxxxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the version of the common parameter.
   */
  parameterVersions?: ListParameterVersionsResponseBodyParameterVersions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD08D89D-B6C8-4AA2-A2B4-521D3F4A39FA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterVersions: 'ParameterVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterVersions: { 'type': 'array', 'itemType': ListParameterVersionsResponseBodyParameterVersions },
      requestId: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListParameterVersionsResponseBody;
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
      body: ListParameterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the parameter. For example, if the name of a parameter is /path/path1/Myparameter, the path of the parameter is /path/path1/.
   * 
   * @example
   * /path1/path2/
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to query parameters from all levels of directories in the specified path. Default value: false.
   * 
   * @example
   * false
   */
  recursive?: boolean;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter. Valid values:
   * 
   * *   Public
   * *   Private
   * 
   * Default value: Private.
   * 
   * @example
   * ‘Private’
   */
  shareType?: string;
  /**
   * @remarks
   * The field used to sort the query results. Valid values:
   * 
   * *   Name
   * *   CreatedDate
   * 
   * @example
   * Name
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   Ascending
   * *   Descending (Default)
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the parameter. For example, if the name of a parameter is /path/path1/Myparameter, the path of the parameter is /path/path1/.
   * 
   * @example
   * /path1/path2/
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to query parameters from all levels of directories in the specified path. Default value: false.
   * 
   * @example
   * false
   */
  recursive?: boolean;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter. Valid values:
   * 
   * *   Public
   * *   Private
   * 
   * Default value: Private.
   * 
   * @example
   * ‘Private’
   */
  shareType?: string;
  /**
   * @remarks
   * The field used to sort the query results. Valid values:
   * 
   * *   Name
   * *   CreatedDate
   * 
   * @example
   * Name
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   Ascending
   * *   Descending (Default)
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameters?: ListParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A81E4B2E-6B33-4BAE-9856-55DB7C893E01
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListParametersResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListParametersResponseBody;
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
      body: ListParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesRequest extends $tea.Model {
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Specifies whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   Windows
   * *   Ubuntu
   * *   CentOS
   * *   Debian
   * *   AliyunLinux
   * *   RedhatEnterpriseLinux
   * *   Anolis
   * *   AlmaLinux
   * 
   * @example
   * AliyunLinux
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: ListPatchBaselinesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListPatchBaselinesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatchesShrink?: string;
  /**
   * @remarks
   * Specifies whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   Windows
   * *   Ubuntu
   * *   CentOS
   * *   Debian
   * *   AliyunLinux
   * *   RedhatEnterpriseLinux
   * *   Anolis
   * *   AlmaLinux
   * 
   * @example
   * AliyunLinux
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * The number of entries returned on each page.
   */
  nextToken?: string;
  /**
   * @remarks
   * The patch baselines.
   */
  patchBaselines?: ListPatchBaselinesResponseBodyPatchBaselines[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 432996A1-03C0-5C4C-A8E6-66C4110765B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchBaselines: 'PatchBaselines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patchBaselines: { 'type': 'array', 'itemType': ListPatchBaselinesResponseBodyPatchBaselines },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPatchBaselinesResponseBody;
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
      body: ListPatchBaselinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxxxxxxxxxxx
   */
  executionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ED571CBD-9F96-419D-B919-CF340BBCA157
   */
  requestId?: string;
  /**
   * @remarks
   * The execution information of the resource.
   */
  resourceExecutionStatus?: ListResourceExecutionStatusResponseBodyResourceExecutionStatus[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceExecutionStatus: 'ResourceExecutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceExecutionStatus: { 'type': 'array', 'itemType': ListResourceExecutionStatusResponseBodyResourceExecutionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceExecutionStatusResponseBody;
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
      body: ListResourceExecutionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. The decrypted parameter value is returned only if this parameter is set to true. Otherwise, null is returned.
   * 
   * @example
   * false
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The user who created the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was created.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the version of the encryption parameter.
   */
  parameterVersions?: ListSecretParameterVersionsResponseBodyParameterVersions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DBA6E6C8-F75D-41DE-AFF5-1FA03F551CA3
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
  /**
   * @remarks
   * The type of the encryption parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterVersions: 'ParameterVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterVersions: { 'type': 'array', 'itemType': ListSecretParameterVersionsResponseBodyParameterVersions },
      requestId: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretParameterVersionsResponseBody;
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
      body: ListSecretParameterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the parameter. **You can enter a keyword to query parameter names in fuzzy match mode.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * sPH90GZOVGC6KPDUL0FIIbEtMQHq_19S6_4O_XqA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the parameter. For example, if the name of a parameter is /path/path1/Myparameter, the path of the parameter is /path/path1/.
   * 
   * @example
   * /path1/path2/
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to query parameters from all levels of directories in the specified path. Default value: false.
   * 
   * @example
   * false
   */
  recursive?: boolean;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The field used to sort the query results. Valid values:
   * 
   * *   Name
   * *   CreatedDate
   * 
   * @example
   * Name
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   Ascending
   * *   Descending (Default)
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the parameter. **You can enter a keyword to query parameter names in fuzzy match mode.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * sPH90GZOVGC6KPDUL0FIIbEtMQHq_19S6_4O_XqA
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the parameter. For example, if the name of a parameter is /path/path1/Myparameter, the path of the parameter is /path/path1/.
   * 
   * @example
   * /path1/path2/
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to query parameters from all levels of directories in the specified path. Default value: false.
   * 
   * @example
   * false
   */
  recursive?: boolean;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The field used to sort the query results. Valid values:
   * 
   * *   Name
   * *   CreatedDate
   * 
   * @example
   * Name
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which the entries are sorted. Valid values:
   * 
   * *   Ascending
   * *   Descending (Default)
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * sPH90GZOVGC6KPDUL0FIIbEtMQHq_19S6_4O_XqA
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the parameters.
   */
  parameters?: ListSecretParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA9C6248-AF2A-4AE9-A166-88FD901BBB90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListSecretParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretParametersResponseBody;
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
      body: ListSecretParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AHJKH-AHKJHDJK-AKHDIOWJL
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * ["sc-asfgdhj12345"]
   */
  stateConfigurationIds?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the latest version of the template is used.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stateConfigurationIds: 'StateConfigurationIds',
      tags: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stateConfigurationIds: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AHJKH-AHKJHDJK-AKHDIOWJL
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * ["sc-asfgdhj12345"]
   */
  stateConfigurationIds?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the latest version of the template is used.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stateConfigurationIds: 'StateConfigurationIds',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stateConfigurationIds: 'string',
      tagsShrink: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAASO3cL82+b5iji7bfPNpMh8=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-DA13E8B00BE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the desired-state configurations.
   */
  stateConfigurations?: ListStateConfigurationsResponseBodyStateConfigurations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      stateConfigurations: 'StateConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      stateConfigurations: { 'type': 'array', 'itemType': ListStateConfigurationsResponseBodyStateConfigurations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStateConfigurationsResponseBody;
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
      body: ListStateConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid value: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page.
   * 
   * @example
   * djsdlkasd
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource to which the tag is added.
   * 
   * @example
   * template
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The tag keys.
   */
  keys?: string[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page.
   * 
   * @example
   * 87y29h80h20h3f2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36210B73-8262-4D08-9D3A-7F96789733C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of resources. The number of resource IDs ranges from 1 to 50.
   * 
   * @example
   * ["templateNam1","templateName2"]
   */
  resourceIds?: { [key: string]: any };
  /**
   * @remarks
   * The type of the resource. Valid values: template execution
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of resources. The number of resource IDs ranges from 1 to 50.
   * 
   * @example
   * ["templateNam1","templateName2"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of the resource. Valid values: template execution
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. If the return value of the NextToken parameter is empty, the next page does not exist.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EF78C1-67FC-4E36-A6A8-7DF9C51726DF
   */
  requestId?: string;
  /**
   * @remarks
   * The set of resources and the tags that are added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  /**
   * @remarks
   * The tag key to query.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of results on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * 3272h923879hsaksad
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the tagged resource.
   * 
   * @example
   * template
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The maximum number of results on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 83u29j2dj3dskds
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 65591133-1188-4935-B78F-20F72
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values returned.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsRequest extends $tea.Model {
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateAfter?: string;
  /**
   * @remarks
   * Specifies to query task executions that stop running at or later than the specified time.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateBefore?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Running, Started, Success, Failed, Waiting, Cancelled, Pending, and Skipped.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 20 to 100. Default value: 50.
   * 
   * @example
   * false
   */
  includeChildTaskExecution?: boolean;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Sorts the task executions to query. Valid values:
   * 
   * *   **StartDate**: specifies that the task executions are sorted based on the time when they are created. This is the default value.
   * *   **EndDate**: specifies that the task executions are sorted based on the time when the time when they stop running.
   * *   **Status**: specifies that the task executions are sorted based on their statuses.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to show the child nodes in the loop task. Default value: False.
   * 
   * @example
   * task-exec-xxx
   */
  parentTaskExecutionId?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The order in which you want to sort the task executions to query. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * StartDate
   */
  sortField?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * Specifies to query task executions that stop running at or before the specified time.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateAfter?: string;
  /**
   * @remarks
   * Specifies to query task executions that start to run at or later than the specified time.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateBefore?: string;
  /**
   * @remarks
   * Specifies to query task executions that start to run at or before the specified time.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The execution ID of the parent node. In a loop task, set this parameter to the execution ID of the parent node.
   * 
   * @example
   * ACS::Sleep
   */
  taskAction?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * task-exec-xxx
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The action of the task.
   * 
   * @example
   * describeInstance
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executionId: 'ExecutionId',
      includeChildTaskExecution: 'IncludeChildTaskExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDateAfter: 'string',
      endDateBefore: 'string',
      executionId: 'string',
      includeChildTaskExecution: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      parentTaskExecutionId: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the task executions.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * CDABABABAB-FC28-4D9C-8FB5-68DC6F0486FC
   */
  requestId?: string;
  /**
   * @remarks
   * The execution ID of the child node.
   */
  taskExecutions?: ListTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskExecutions: { 'type': 'array', 'itemType': ListTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskExecutionsResponseBody;
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
      body: ListTaskExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * H8xj9c-398djs9-39ajd9asdjjJ
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
   * The type of the template. Valid values: Private and Public.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * describeinstances
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * NJSNDKLJS-SJKJDO090k30-JSDK232
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6CD612B-5889-4F1A-823F-8A4029E46
   */
  requestId?: string;
  /**
   * @remarks
   * The versions of the template.
   */
  templateVersions?: ListTemplateVersionsResponseBodyTemplateVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templateVersions: 'TemplateVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templateVersions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyTemplateVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTemplateVersionsResponseBody;
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
      body: ListTemplateVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
   * 
   * @example
   * TimerTrigger
   */
  category?: string;
  /**
   * @remarks
   * The creator of the template.
   * 
   * *   To query the template provided by Alibaba Cloud, set this parameter to **ACS**.
   * *   To query the template created by a user, set this parameter to the **ID** of the template or the **name of the user** who creates the template.
   * 
   * @example
   * ACS
   */
  createdBy?: string;
  /**
   * @remarks
   * Specifies to query the template that is created at or later than the specified time.
   * 
   * The value must be in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDateAfter?: string;
  /**
   * @remarks
   * Specifies to query the template that is created at or before the specified time.
   * 
   * The value must be in the YYYY-MM-DDThh:mm::ssZ format.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDateBefore?: string;
  /**
   * @remarks
   * Specifies whether to query the template that is configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * Specifies whether the template is an example template
   * 
   * @example
   * false
   */
  isExample?: boolean;
  /**
   * @remarks
   * Specifies whether the template is added to favorites.
   * 
   * @example
   * true
   */
  isFavorite?: boolean;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which you want to query templates.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The field that is used to sort the templates to be queried. Valid values:
   * 
   * *   **TotalExecutionCount** (default): The system sorts the returned templates based on the total number of times that the templates are used.
   * *   **Popularity**: The system sorts the returned templates based on the popularity of the templates.
   * *   **TemplateName**: The system sorts the returned templates based on the names of the templates.
   * *   **CreatedDate**: The system sorts the returned templates based on the points in time when the templates are created.
   * *   **UpdatedDate**: The system sorts the returned templates based on the points in time when the templates are updated.
   * 
   * @example
   * Popularity
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. Valid values:
   * 
   * *   **JSON**
   * *   **YAML**
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The name of the template. All templates whose names contain the specified template name are to be returned.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * *   Automation: the template for automated tasks.
   * *   State: the template for configuration inventories.
   * *   Package: the template for software packages.
   * 
   * @example
   * private
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      hasTrigger: 'HasTrigger',
      isExample: 'IsExample',
      isFavorite: 'IsFavorite',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      hasTrigger: 'boolean',
      isExample: 'boolean',
      isFavorite: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
   * 
   * @example
   * TimerTrigger
   */
  category?: string;
  /**
   * @remarks
   * The creator of the template.
   * 
   * *   To query the template provided by Alibaba Cloud, set this parameter to **ACS**.
   * *   To query the template created by a user, set this parameter to the **ID** of the template or the **name of the user** who creates the template.
   * 
   * @example
   * ACS
   */
  createdBy?: string;
  /**
   * @remarks
   * Specifies to query the template that is created at or later than the specified time.
   * 
   * The value must be in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDateAfter?: string;
  /**
   * @remarks
   * Specifies to query the template that is created at or before the specified time.
   * 
   * The value must be in the YYYY-MM-DDThh:mm::ssZ format.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDateBefore?: string;
  /**
   * @remarks
   * Specifies whether to query the template that is configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * Specifies whether the template is an example template
   * 
   * @example
   * false
   */
  isExample?: boolean;
  /**
   * @remarks
   * Specifies whether the template is added to favorites.
   * 
   * @example
   * true
   */
  isFavorite?: boolean;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which you want to query templates.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The field that is used to sort the templates to be queried. Valid values:
   * 
   * *   **TotalExecutionCount** (default): The system sorts the returned templates based on the total number of times that the templates are used.
   * *   **Popularity**: The system sorts the returned templates based on the popularity of the templates.
   * *   **TemplateName**: The system sorts the returned templates based on the names of the templates.
   * *   **CreatedDate**: The system sorts the returned templates based on the points in time when the templates are created.
   * *   **UpdatedDate**: The system sorts the returned templates based on the points in time when the templates are updated.
   * 
   * @example
   * Popularity
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * Descending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The format of the template. Valid values:
   * 
   * *   **JSON**
   * *   **YAML**
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The name of the template. All templates whose names contain the specified template name are to be returned.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * *   Automation: the template for automated tasks.
   * *   State: the template for configuration inventories.
   * *   Package: the template for software packages.
   * 
   * @example
   * private
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      hasTrigger: 'HasTrigger',
      isExample: 'IsExample',
      isFavorite: 'IsFavorite',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      hasTrigger: 'boolean',
      isExample: 'boolean',
      isFavorite: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEF54BA-17B6-449F-A219-49ACB157E3
   */
  requestId?: string;
  /**
   * @remarks
   * The template metadata.
   */
  templates?: ListTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTemplatesResponseBody;
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
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The state of the terminated execution. This parameter is valid if you set the NotifyType parameter to CompleteExecution.
   * 
   * @example
   * Success
   */
  executionStatus?: string;
  /**
   * @remarks
   * The items of the child node in the loop task.
   * 
   * @example
   * i-xxx
   */
  loopItem?: string;
  /**
   * @remarks
   * The description for the notification.
   * 
   * @example
   * Note
   */
  notifyNote?: string;
  /**
   * @remarks
   * The type of the notification. Valid values:
   * 
   * *   **ExecuteTask**: starts to run a specific task. This value is used if you perform debugging in the Debug mode. If you set this parameter to ExecuteTask, you also need to set the Parameters parameter.
   * *   **CancelTask**: cancels a current task. This value is used if you perform debugging in the Debug mode.
   * *   **CompleteExecution**: manually terminates an execution if you perform debugging in the Debug mode. You can specify the state of the terminated execution by using the **ExecutionStatus** parameter.
   * *   **Approve**: approves an execution. For example, you are aware of the risks of an operation task and agree to approve the execution.
   * *   **Reject**: rejects an execution. For example, you want to reject the execution of a high-risk operation task.
   * *   **RetryTask**: retries a failed task whose execution mode is Suspend upon Failure.
   * *   **SkipTask**: skips a failed task whose execution mode is Suspend upon Failure.
   * 
   * This parameter is required.
   * 
   * @example
   * Approve
   */
  notifyType?: string;
  /**
   * @remarks
   * The parameters of the subsequent task. This parameter is valid if you set the NotifyType parameter to ExecuteTask.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the region in which the execution resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * task-exec-xxx
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The execution IDs of the tasks.
   * 
   * @example
   * ["exec-79c321c11003a97c","exec-79c321c11003aqw97cz"]
   */
  taskExecutionIds?: string;
  /**
   * @remarks
   * The name of the subsequent task.
   * 
   * @example
   * describeInstance
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionStatus: 'ExecutionStatus',
      loopItem: 'LoopItem',
      notifyNote: 'NotifyNote',
      notifyType: 'NotifyType',
      parameters: 'Parameters',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
      taskExecutionIds: 'TaskExecutionIds',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionStatus: 'string',
      loopItem: 'string',
      notifyNote: 'string',
      notifyType: 'string',
      parameters: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
      taskExecutionIds: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 491DF8C2-34C9-4679-9DB3-4C0F49B129AC
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

export class NotifyExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: NotifyExecutionResponseBody;
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
      body: NotifyExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: RegisterDefaultPatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6850689-348D-59FC-AE13-BB0EDB7C4BE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: RegisterDefaultPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDefaultPatchBaselineResponseBody;
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
      body: RegisterDefaultPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequest extends $tea.Model {
  /**
   * @remarks
   * The information about aggregators. You can use one or more aggregators to query the aggregate information of an instance. Valid values:
   * 
   * *   ACS:Application.Name
   * *   ACS:Application.Version
   * 
   * @example
   * ACS:Application.Name
   */
  aggregator?: string[];
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: SearchInventoryRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': SearchInventoryRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryResponseBody extends $tea.Model {
  entities?: { [key: string]: any }[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A81E4B2E-6B33-4BAE-9856-55DB7C893E01
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchInventoryResponseBody;
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
      body: SearchInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of OSS bucket to deliver.
   * 
   * @example
   * OssBucketName
   */
  deliveryOssBucketName?: string;
  /**
   * @remarks
   * Whether to enable OSS delivery.
   * 
   * @example
   * false
   */
  deliveryOssEnabled?: boolean;
  /**
   * @remarks
   * The key prefix of OSS to deliver.
   * 
   * @example
   * oos/execution
   */
  deliveryOssKeyPrefix?: string;
  /**
   * @remarks
   * Whether to enable SLS delivery.
   * 
   * @example
   * false
   */
  deliverySlsEnabled?: boolean;
  /**
   * @remarks
   * The name of SLS project to deliver.
   * 
   * @example
   * SlsProjectName
   */
  deliverySlsProjectName?: string;
  /**
   * @remarks
   * The id of RDC Enterprise.
   * 
   * @example
   * RdcEnterpriseId
   */
  rdcEnterpriseId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBEC8072-BEC2-478E-8EAE-E723BA79CF19
   */
  requestId?: string;
  /**
   * @remarks
   * The information of service settings.
   */
  serviceSettings?: SetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': SetServiceSettingsResponseBodyServiceSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetServiceSettingsResponseBody;
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
      body: SetServiceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 123e56767-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * test execution.
   */
  description?: string;
  /**
   * @remarks
   * The loop mode. Valid values:
   * 
   * *   Automatic: does not suspend the execution of the template. This is the default value.
   * *   FirstBatchPause: suspends the execution of the template after the first batch is complete.
   * *   EveryBatchPause: suspends the execution of the template after each batch is complete.
   * 
   * @example
   * Automatic
   */
  loopMode?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Automatic: automatically starts the execution of the template. This is the default value.
   * *   FailurePause: suspends the execution of the template upon a failure.
   * *   Debug: manually starts the execution of the template.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The JSON string that consists of a set of parameters. Default value: {}.
   * 
   * @example
   * {"Status":"Running"}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The ID of the region in which the execution resides.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security check mode. Valid values:
   * 
   * *   Skip: specifies that you are aware of the risks. The system performs all actions in the execution without manual confirmation, regardless of the risk level. This parameter is valid only if the `Mode` parameter is set to Automatic.
   * *   ConfirmEveryHighRiskAction: requires you to confirm each high-risk action. This is the default value. You can call the **NotifyExecution** operation to confirm or cancel an action.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The tags for the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The content of the template in the JSON or YAML format. This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * {   "Description": "Example template, describe instances in some status",   "FormatVersion": "OOS-2019-06-01",   "Parameters": {},   "Tasks": [     {       "Name": "describeInstances",       "Action": "ACS::ExecuteAPI",       "Description": "desc-en",       "Properties": {         "Service": "ECS",         "API": "DescribeInstances",         "Parameters": {           "Status": "Running"         }       }     }   ] }
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * vmeixme
   */
  templateName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template. The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * http://oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-test-template.json
   */
  templateURL?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the system uses the latest version.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      loopMode: 'LoopMode',
      mode: 'Mode',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      tags: 'Tags',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      loopMode: 'string',
      mode: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateContent: 'string',
      templateName: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 123e56767-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * test execution.
   */
  description?: string;
  /**
   * @remarks
   * The loop mode. Valid values:
   * 
   * *   Automatic: does not suspend the execution of the template. This is the default value.
   * *   FirstBatchPause: suspends the execution of the template after the first batch is complete.
   * *   EveryBatchPause: suspends the execution of the template after each batch is complete.
   * 
   * @example
   * Automatic
   */
  loopMode?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Automatic: automatically starts the execution of the template. This is the default value.
   * *   FailurePause: suspends the execution of the template upon a failure.
   * *   Debug: manually starts the execution of the template.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The JSON string that consists of a set of parameters. Default value: {}.
   * 
   * @example
   * {"Status":"Running"}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The ID of the region in which the execution resides.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security check mode. Valid values:
   * 
   * *   Skip: specifies that you are aware of the risks. The system performs all actions in the execution without manual confirmation, regardless of the risk level. This parameter is valid only if the `Mode` parameter is set to Automatic.
   * *   ConfirmEveryHighRiskAction: requires you to confirm each high-risk action. This is the default value. You can call the **NotifyExecution** operation to confirm or cancel an action.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The tags for the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The content of the template in the JSON or YAML format. This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * {   "Description": "Example template, describe instances in some status",   "FormatVersion": "OOS-2019-06-01",   "Parameters": {},   "Tasks": [     {       "Name": "describeInstances",       "Action": "ACS::ExecuteAPI",       "Description": "desc-en",       "Properties": {         "Service": "ECS",         "API": "DescribeInstances",         "Parameters": {           "Status": "Running"         }       }     }   ] }
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * vmeixme
   */
  templateName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template. The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * http://oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-test-template.json
   */
  templateURL?: string;
  /**
   * @remarks
   * The version number of the template. If you do not specify this parameter, the system uses the latest version.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      loopMode: 'LoopMode',
      mode: 'Mode',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      tagsShrink: 'Tags',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      loopMode: 'string',
      mode: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      tagsShrink: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the execution.
   */
  execution?: StartExecutionResponseBodyExecution;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      execution: 'Execution',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execution: StartExecutionResponseBodyExecution,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartExecutionResponseBody;
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
      body: StartExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
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
   * The IDs of the resources for which you want to modify the resource group. The number of resource IDs is 1 to 50.
   * 
   * *   If you set ResourceType to template, specify ResourceIds in the ["TemplateName1","TemplateName2"] format.
   * *   If you set ResourceType to parameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to secretparameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to stateconfiguration, specify ResourceIds in the ["StateConfigurationId 1","StateConfigurationId 2"] format.
   * *   If you set ResourceType to application, specify ResourceIds in the ["Name1","Name2"] format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["templateName1","templateName2"]
   */
  resourceIds?: { [key: string]: any };
  /**
   * @remarks
   * The type of the resource for which you want to modify the resource group. Valid values:
   * 
   * *   template: template.
   * *   parameter: parameter.
   * *   secretparameter: encryption parameter.
   * *   stateconfiguration: desired-state configuration.
   * *   application: application.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesShrinkRequest extends $tea.Model {
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
   * The IDs of the resources for which you want to modify the resource group. The number of resource IDs is 1 to 50.
   * 
   * *   If you set ResourceType to template, specify ResourceIds in the ["TemplateName1","TemplateName2"] format.
   * *   If you set ResourceType to parameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to secretparameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to stateconfiguration, specify ResourceIds in the ["StateConfigurationId 1","StateConfigurationId 2"] format.
   * *   If you set ResourceType to application, specify ResourceIds in the ["Name1","Name2"] format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["templateName1","templateName2"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of the resource for which you want to modify the resource group. Valid values:
   * 
   * *   template: template.
   * *   parameter: parameter.
   * *   secretparameter: encryption parameter.
   * *   stateconfiguration: desired-state configuration.
   * *   application: application.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B19AE203-FD99-49C7-9253-FAAACAD46F4A
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * dswe2-3i0-029
   */
  clientToken?: string;
  /**
   * @remarks
   * The message body to be sent to the trigger task.
   * 
   * @example
   * {"eventTime": "20181226T220114.058+0800", "id": "9435EAD6-3CF6-4494-8F7A-3A********77","level": "INFO","name": "Instance:StateChange","product": "ECS","regionId":"cn-hangzhou","resourceId": "acs:ecs:cn-hangzhou:169070********30:instance/i-bp1ecr********5go2go","userId": "169070********30","ver": "1.0","content": {"resourceId": "i-bp1ecr********5go2go", "resourceType": "ALIYUN::ECS::Instance","state": "Stopping"} }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the event-, alert-, or timer-triggered execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-sadw3f23rsad
   */
  executionId?: string;
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
   * The type of the trigger. Valid values:
   * 
   * *   Event
   * *   Alarm
   * *   Timer
   * 
   * This parameter is required.
   * 
   * @example
   * Event
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      executionId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
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

export class TriggerExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerExecutionResponseBody;
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
      body: TriggerExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter takes effect only if TagKeys is left empty. Valid values: true and false. Default value: false. TagKeys is required if this parameter is set to false.
   * 
   * @example
   * false
   */
  all?: boolean;
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
   * The IDs of the resources for which you want to modify the resource group. The number of resource IDs is 1 to 50.
   * 
   * *   If you set ResourceType to template, specify ResourceIds in the ["TemplateName1","TemplateName2"] format.
   * *   If you set ResourceType to parameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to secretparameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to stateconfiguration, specify ResourceIds in the ["StateConfigurationId 1","StateConfigurationId 2"] format.
   * *   If you set ResourceType to application, specify ResourceIds in the ["Name1","Name2"] format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["templateName1","templateName2"]
   */
  resourceIds?: { [key: string]: any };
  /**
   * @remarks
   * The type of the resource for which you want to modify the resource group. Valid values:
   * 
   * *   template: template.
   * *   parameter: parameter.
   * *   secretparameter: encryption parameter.
   * *   stateconfiguration: desired-state configuration.
   * *   application: application.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. The number of keys ranges from 1 to 20.
   * 
   * @example
   * ["k1","k2"]
   */
  tagKeys?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tagKeys: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter takes effect only if TagKeys is left empty. Valid values: true and false. Default value: false. TagKeys is required if this parameter is set to false.
   * 
   * @example
   * false
   */
  all?: boolean;
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
   * The IDs of the resources for which you want to modify the resource group. The number of resource IDs is 1 to 50.
   * 
   * *   If you set ResourceType to template, specify ResourceIds in the ["TemplateName1","TemplateName2"] format.
   * *   If you set ResourceType to parameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to secretparameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to stateconfiguration, specify ResourceIds in the ["StateConfigurationId 1","StateConfigurationId 2"] format.
   * *   If you set ResourceType to application, specify ResourceIds in the ["Name1","Name2"] format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["templateName1","templateName2"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of the resource for which you want to modify the resource group. Valid values:
   * 
   * *   template: template.
   * *   parameter: parameter.
   * *   secretparameter: encryption parameter.
   * *   stateconfiguration: desired-state configuration.
   * *   application: application.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. The number of keys ranges from 1 to 20.
   * 
   * @example
   * ["k1","k2"]
   */
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagKeysShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 491DF8C2-34C9-4679-9DB3-4C0F49B129AC
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfig?: UpdateApplicationRequestAlarmConfig;
  /**
   * @remarks
   * Specifies whether to delete existing alert rules before applying the alert template. Default value: false.
   * 
   * @example
   * false
   */
  deleteAlarmRulesBeforeUpdate?: boolean;
  /**
   * @remarks
   * The description to be updated for the application.
   * 
   * @example
   * test application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * My-Application
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      deleteAlarmRulesBeforeUpdate: 'DeleteAlarmRulesBeforeUpdate',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: UpdateApplicationRequestAlarmConfig,
      deleteAlarmRulesBeforeUpdate: 'boolean',
      description: 'string',
      name: 'string',
      regionId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether to delete existing alert rules before applying the alert template. Default value: false.
   * 
   * @example
   * false
   */
  deleteAlarmRulesBeforeUpdate?: boolean;
  /**
   * @remarks
   * The description to be updated for the application.
   * 
   * @example
   * test application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * My-Application
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigShrink: 'AlarmConfig',
      deleteAlarmRulesBeforeUpdate: 'DeleteAlarmRulesBeforeUpdate',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigShrink: 'string',
      deleteAlarmRulesBeforeUpdate: 'boolean',
      description: 'string',
      name: 'string',
      regionId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: UpdateApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1F00F41-D24C-5377-831B-C97F739CE1AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: UpdateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationResponseBody;
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
      body: UpdateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The new name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  newName?: string;
  operationName?: string;
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      newName: 'NewName',
      operationName: 'OperationName',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      newName: 'string',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The new name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  newName?: string;
  operationName?: string;
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      newName: 'NewName',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      newName: 'string',
      operationName: 'string',
      parametersShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: UpdateApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA9FA778-AE4B-55EC-81CC-C46BAF08A166
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: UpdateApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationGroupResponseBody;
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
      body: UpdateApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExecutionRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * Execution description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-c223xxxxxxxxxxxxxxxx
   */
  executionId?: string;
  /**
   * @remarks
   * The information about the parameters.
   * 
   * @example
   * {"Status":"Running"}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the execution.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionId: 'ExecutionId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionId: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExecutionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C8345E88-5334-469E-901D-F912C8CB9C55
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

export class UpdateExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExecutionResponseBody;
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
      body: UpdateExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePackageStateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * install
   */
  configureAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @example
   * {"username": "xx"}
   */
  parameters?: { [key: string]: any };
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configureAction: 'ConfigureAction',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureAction: 'string',
      instanceId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePackageStateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * install
   */
  configureAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @example
   * {"username": "xx"}
   */
  parametersShrink?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configureAction: 'ConfigureAction',
      instanceId: 'InstanceId',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureAction: 'string',
      instanceId: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstancePackageStateResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2597E94B-5346-42D1-BB58-XXXXXXXXXXX
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

export class UpdateInstancePackageStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstancePackageStateResponseBody;
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
      body: UpdateInstancePackageStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemRequest extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The string to be deduplicated.
   * 
   * @example
   * ecs_instance_SystemMaintenance.Reboot
   */
  dedupString?: string;
  /**
   * @remarks
   * The description of the O\\&M item.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-e2264dcf040c472598e9
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 2
   */
  priority?: number;
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Resource Names (ARNs) of the associated resources.
   * 
   * @example
   * [\\"arn:acs:ecs:cn-heyuan:1139354755361920:instance/i-f8z928h7aqotd3o65032\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"url\\\\",\\n \\\\"url\\\\":\\\\"https://example.com\\\\",\\n \\\\"description\\\\":\\\\"Specify a cross-zone high availability cluster. \\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * Test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      opsItemId: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The string to be deduplicated.
   * 
   * @example
   * ecs_instance_SystemMaintenance.Reboot
   */
  dedupString?: string;
  /**
   * @remarks
   * The description of the O\\&M item.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-e2264dcf040c472598e9
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 2
   */
  priority?: number;
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Resource Names (ARNs) of the associated resources.
   * 
   * @example
   * [\\"arn:acs:ecs:cn-heyuan:1139354755361920:instance/i-f8z928h7aqotd3o65032\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"url\\\\",\\n \\\\"url\\\\":\\\\"https://example.com\\\\",\\n \\\\"description\\\\":\\\\"Specify a cross-zone high availability cluster. \\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * Test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tagsShrink: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      opsItemId: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tagsShrink: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: UpdateOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C996DECB-3D2B-5321-B359-BE7031B6399E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: UpdateOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOpsItemResponseBody;
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
      body: UpdateOpsItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the common parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * update
   */
  description?: string;
  /**
   * @remarks
   * The name of the common parameter. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to be added to common parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: string;
  /**
   * @remarks
   * The value of the common parameter. The value must be 1 to 4,096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * update
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameter?: UpdateParameterResponseBodyParameter;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF1AE6DE-61C4-435E-8687-072CFACCCEC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdateParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateParameterResponseBody;
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
      body: UpdateParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * UpdatePatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatches?: string[];
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdatePatchBaselineRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': UpdatePatchBaselineRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatchesShrink?: string;
  /**
   * @remarks
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * -
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * UpdatePatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * This parameter is required.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatchesShrink?: string;
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      rejectedPatchesShrink: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      rejectedPatchesShrink: 'string',
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: UpdatePatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1457F46C-7AAE-59FA-BD12-0BDB3751E6F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: UpdatePatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePatchBaselineResponseBody;
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
      body: UpdatePatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The value of the parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * update
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The value of the parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * update
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the parameter.
   */
  parameter?: UpdateSecretParameterResponseBodyParameter;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B419FF3-ABC6-4DF0-95E5-636DC8CBB8AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdateSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretParameterResponseBody;
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
      body: UpdateSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
   * 
   * @example
   * ApplyOnce
   */
  configureMode?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * { "policy": { "ACS:Application": { "Collection": "Enabled" }, "ACS:Network": { "Collection": "Enabled" } } }
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule expression.
   * 
   * @example
   * 1 hour
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * sc-asfgdhj12345
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "sc"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The resources to be queried.
   * 
   * @example
   * { "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }
   */
  targets?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
   * 
   * @example
   * ApplyOnce
   */
  configureMode?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * { "policy": { "ACS:Application": { "Collection": "Enabled" }, "ACS:Network": { "Collection": "Enabled" } } }
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule expression.
   * 
   * @example
   * 1 hour
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * sc-asfgdhj12345
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags to be added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "sc"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The resources to be queried.
   * 
   * @example
   * { "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }
   */
  targets?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tagsShrink: 'Tags',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tagsShrink: 'string',
      targets: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-DA13E8B00BE9
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the configuration.
   */
  stateConfiguration?: UpdateStateConfigurationResponseBodyStateConfiguration[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: { 'type': 'array', 'itemType': UpdateStateConfigurationResponseBodyStateConfiguration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStateConfigurationResponseBody;
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
      body: UpdateStateConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the template. The content must be in the JSON or YAML format, and its maximum size is 64 KB.
   * 
   * This parameter is required.
   * 
   * @example
   * { "FormatVersion": "OOS-2019-06-01", "Description": { "en": "Bulky starts the ECS instances", "name-en": "Bulky Start Instances", }, "Parameters": { "regionId": { "Type": "String", "Label": { "en": "RegionId", }, "AssociationProperty": "RegionId", "Default": "{{ ACS::RegionId }}" }, "targets": { "Type": "Json", "Label": { "en": "TargetInstance", }, "AssociationProperty": "Targets", "AssociationPropertyMetadata": { "ResourceType": "ALIYUN::ECS::Instance", "RegionId": "regionId" } }, "rateControl": { "Label": { "en": "RateControl", }, "Type": "Json", "AssociationProperty": "RateControl", "Default": { "Mode": "Concurrency", "MaxErrors": 0, "Concurrency": 10 } }, "OOSAssumeRole": { "Label": { "en": "OOSAssumeRole", }, "Type": "String", "Default": "OOSServiceRole" } }, "RamRole": "{{ OOSAssumeRole }}", "Tasks": [ { "Name": "getInstance", "Description": { "en": "Views the ECS instances", }, "Action": "ACS::SelectTargets", "Properties": { "ResourceType": "ALIYUN::ECS::Instance", "RegionId": "{{ regionId }}", "Filters": [ "{{ targets }}" ] }, "Outputs": { "instanceIds": { "Type": "List", "ValueSelector": "Instances.Instance[].InstanceId" } } }, { "Name": "startInstance", "Action": "ACS::ECS::StartInstance", "Description": { "en": "Starts the ECS instances", }, "Properties": { "regionId": "{{ regionId }}", "instanceId": "{{ ACS::TaskLoopItem }}" }, "Loop": { "RateControl": "{{ rateControl }}", "Items": "{{ getInstance.instanceIds }}" } } ], "Outputs": { "instanceIds": { "Type": "List", "Value": "{{ getInstance.instanceIds }}" } } }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The name of the template. The name can be up to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The name cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the template version.
   * 
   * @example
   * v2
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the template. The content must be in the JSON or YAML format, and its maximum size is 64 KB.
   * 
   * This parameter is required.
   * 
   * @example
   * { "FormatVersion": "OOS-2019-06-01", "Description": { "en": "Bulky starts the ECS instances", "name-en": "Bulky Start Instances", }, "Parameters": { "regionId": { "Type": "String", "Label": { "en": "RegionId", }, "AssociationProperty": "RegionId", "Default": "{{ ACS::RegionId }}" }, "targets": { "Type": "Json", "Label": { "en": "TargetInstance", }, "AssociationProperty": "Targets", "AssociationPropertyMetadata": { "ResourceType": "ALIYUN::ECS::Instance", "RegionId": "regionId" } }, "rateControl": { "Label": { "en": "RateControl", }, "Type": "Json", "AssociationProperty": "RateControl", "Default": { "Mode": "Concurrency", "MaxErrors": 0, "Concurrency": 10 } }, "OOSAssumeRole": { "Label": { "en": "OOSAssumeRole", }, "Type": "String", "Default": "OOSServiceRole" } }, "RamRole": "{{ OOSAssumeRole }}", "Tasks": [ { "Name": "getInstance", "Description": { "en": "Views the ECS instances", }, "Action": "ACS::SelectTargets", "Properties": { "ResourceType": "ALIYUN::ECS::Instance", "RegionId": "{{ regionId }}", "Filters": [ "{{ targets }}" ] }, "Outputs": { "instanceIds": { "Type": "List", "ValueSelector": "Instances.Instance[].InstanceId" } } }, { "Name": "startInstance", "Action": "ACS::ECS::StartInstance", "Description": { "en": "Starts the ECS instances", }, "Properties": { "regionId": "{{ regionId }}", "instanceId": "{{ ACS::TaskLoopItem }}" }, "Loop": { "RateControl": "{{ rateControl }}", "Items": "{{ getInstance.instanceIds }}" } } ], "Outputs": { "instanceIds": { "Type": "List", "Value": "{{ getInstance.instanceIds }}" } } }
   */
  content?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The name of the template. The name can be up to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The name cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the template version.
   * 
   * @example
   * v2
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2075899A-585D-4A41-A9B2-28DF4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the template.
   */
  template?: UpdateTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdateTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTemplateResponseBody;
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
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * {"FormatVersion": "OOS-2019-06-01", "Description": "Describe instances of given status", "Parameters": {"Status": {"Type": "String", "Description": "(Required) The status of the Ecs instance."}}, "Tasks": [{"Properties": {"Parameters": {"Status": "{{ Status }}"}, "API": "DescribeInstances", "Service": "Ecs"}, "Name": "foo", "Action": "ACS::ExecuteApi"}]}
   */
  content?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The URL that is used to store the content of the Operation Orchestration Service (OOS) template in the Alibaba Cloud Object Storage Service (OSS). Only the public-read URL is supported. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * http:/oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-template.json
   */
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The outputs of the template.
   * 
   * @example
   * {}
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters of the template.
   * 
   * @example
   * { "Status": { "Description": "(Required) The status of the Ecs instance.", "Type": "String" } }
   */
  parameters?: string;
  /**
   * @remarks
   * The RAM role.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D5EE9591-1F2D-573E-8751-7F08BBB388D4
   */
  requestId?: string;
  /**
   * @remarks
   * The task defined in the template.
   */
  tasks?: ValidateTemplateContentResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      parameters: 'Parameters',
      ramRole: 'RamRole',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      parameters: 'string',
      ramRole: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ValidateTemplateContentResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateTemplateContentResponseBody;
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
      body: ValidateTemplateContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestAlarmConfig extends $tea.Model {
  /**
   * @remarks
   * The alert contact groups.
   */
  contactGroups?: string[];
  /**
   * @remarks
   * The health check URL of the application.
   * 
   * @example
   * /healthcheck/tcp50122
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The alert templates.
   */
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplication extends $tea.Model {
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Myapplication
   */
  name?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      description: 'string',
      name: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupResponseBodyApplicationGroup extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 1245768
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the region in which the related sources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The time when the application group was updated.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemResponseBodyOpsItem extends $tea.Model {
  /**
   * @remarks
   * The attributes of the O\\&M item.
   * 
   * @example
   * {\\"regionId\\":\\"cn-zhangjiakou\\",\\"appId\\":\\"992BKO1X75GRQ4E8\\",\\"instanceId\\":\\"i-8vbcymxagqsyyyjppbr4\\",\\"instance_name\\":\\"cdae\\"}
   */
  attributes?: string;
  /**
   * @remarks
   * The category of the O\\&M item.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-03-24T03:55Z
   */
  createDate?: string;
  /**
   * @remarks
   * The user who created the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The description of the O\\&M item.
   * 
   * @example
   * OpsItem
   */
  description?: string;
  /**
   * @remarks
   * The user who last modified the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  lastModifiedBy?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-dba9c6eec9254a4d87c1
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority of the O\\&M item.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ARNs of the associated resources.
   * 
   * @example
   * [\\"acs:oos:cn-hangzhou:1563457855438522:application/dingTest/applicationgroup/fltest\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level of the O\\&M item.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"url\\\\",\\n \\\\"url\\\\":\\\\"https://example..com\\\\",\\n \\\\"description\\\\":\\\\"Specify a cross-zone high availability cluster. \\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business of the O\\&M item.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The state of the O\\&M item.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the O\\&M item.
   * 
   * @example
   * {"k1": "v1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * ECS reboot is scheduled
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-03-24T03:55Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createDate: 'CreateDate',
      createdBy: 'CreatedBy',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      createDate: 'string',
      createdBy: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponseBodyParameter extends $tea.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * "{\\"AllowedValues\\":[\\"parameter\\"],\\"AllowedPattern\\":\\"parameter\\",\\"MinLength\\":0,\\"MaxLength\\":20}"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was updated.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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

export class CreatePatchBaselineResponseBodyPatchBaselineTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The creator of the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was created.
   * 
   * @example
   * 2021-09-08T06:25:41Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * PatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-0a0aeda72ed147eb97ea
   */
  id?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatches?: string[];
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * "ALLOW_AS_DEPENDENCY"
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3comlufxpva
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the patch baseline.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: CreatePatchBaselineResponseBodyPatchBaselineTags[];
  /**
   * @remarks
   * The Alibaba Cloud account that last modified the information about the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the information about the patch baseline was last modified.
   * 
   * @example
   * 2021-09-08T06:25:41Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreatePatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponseBodyParameter extends $tea.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * \\"{ 	"AllowedValues": ["secretparameter"], 	"AllowedPattern": "secretparameter", 	"MinLength": 0, 	"MaxLength": 20 }\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was created.
   * 
   * @example
   * 2020-09-01T09:30:36Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-hzz****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-0b0fff9919c946xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The key ID of KMS that is used to encrypt the parameter.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-09-01T09:30:36Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponseBodyStateConfiguration extends $tea.Model {
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * @example
   * ApplyAndAutoCorrect
   */
  configureMode?: string;
  /**
   * @remarks
   * The time when the desired-state configuration was created.
   * 
   * @example
   * 2021-03-22T03:13:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * collect inventory data
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {"policy": {"ACS:Network": {"Collection": "Enabled"}, "ACS:Application": {"Collection": "Enabled"}}}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule expression.
   * 
   * @example
   * 1 hour
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * sc-a538febe18fabcdef
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The queried resources.
   * 
   * @example
   * {     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }
   */
  targets?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * t-1234asadf
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the template version.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBodyTemplate extends $tea.Model {
  /**
   * @remarks
   * The creator of the template.
   * 
   * @example
   * root(13090000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Describe instances of given status
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template was configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * The SHA-256 value of the template content.
   * 
   * @example
   * 4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4
   */
  hash?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. The share type of the template that you create is Private.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags of the resources.
   * 
   * @example
   * {     "k1":"v1",     "k2":"v2" }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. The system automatically determines whether the format is JSON or YAML.
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-94753d38
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. The name of the version consists of the letter v and a number. The number starts from 1.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that last modified the information about the template.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillResponseBodyApplicationGroupConsume extends $tea.Model {
  /**
   * @remarks
   * The amount consumed by the instance.
   * 
   * @example
   * 18.88
   */
  amount?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-06-10T06:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-0jl781czrhqey0s5zpsj
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test-
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  instanceType?: string;
  /**
   * @remarks
   * Optimization suggestions.
   * 
   * @example
   * 1
   */
  optimization?: string;
  /**
   * @remarks
   * The peak type.
   * 
   * @example
   * WHITE
   */
  peakType?: string;
  /**
   * @remarks
   * The performance of the data synchronization instance.
   * 
   * @example
   * "{\\"mem\\":\\"6.82\\",\\"cpu\\":\\"0.55\\"}"
   */
  performance?: string;
  /**
   * @remarks
   * The status of instance.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      creationTime: 'CreationTime',
      currency: 'Currency',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      optimization: 'Optimization',
      peakType: 'PeakType',
      performance: 'Performance',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      creationTime: 'string',
      currency: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      optimization: 'string',
      peakType: 'string',
      performance: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Shenzhen)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * oos.cn-shenzhen.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationAlarmConfig extends $tea.Model {
  /**
   * @remarks
   * The alert contact list.
   */
  contactGroups?: string[];
  /**
   * @remarks
   * The health check URL of the application.
   * 
   * @example
   * /api/health/
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The ID of the alert template.
   */
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  /**
   * @remarks
   * The configurations of application alerts.
   */
  alarmConfig?: GetApplicationResponseBodyApplicationAlarmConfig;
  /**
   * @remarks
   * The type of the application.
   * 
   * Valid values:
   * 
   * *   ComputeNest
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Custom
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DingTalk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * service-79538e30e44541b699d8
   */
  serviceId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: GetApplicationResponseBodyApplicationAlarmConfig,
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponseBodyApplicationGroup extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 12345678
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createDate?: string;
  /**
   * @remarks
   * The output of the deployment result.
   * 
   * @example
   * {       "Outputs": [         {           "Description": "No description given",           "OutputKey": "InstanceIds"         }       ],       "StackId": "6ef4b860-f6e7-4145-8d22-f4a2a32363e1"     }   }
   */
  deployOutputs?: string;
  /**
   * @remarks
   * The configuration information of the application group.
   * 
   * @example
   * {       "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",       "Parameters": {         "ZoneId": "cn-hangzhou-k",         "ProjectName": "test",         "SystemDiskSize": 40,         "InstanceChargeType": "PostPaid",         "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",         "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",         "SystemDiskCategory": "cloud_essd",         "InstancePassword": "******",         "InternetChargeType": "PayByTraffic",         "InstanceCount": 1,         "InternetMaxBandwidthOut": 0,         "VpcId": "vpc-bp1i99boyas8i8m9t3skp",         "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",         "DataDiskSize": 100,         "EcsInstanceType": "ecs.s6-c1m4.small",         "DataDiskCategory": "cloud_efficiency",         "EnvironmentCommandId": "c-hz028fc3g031gcg"       }
   */
  deployParameters?: string;
  /**
   * @remarks
   * The ID of the region in which you deploy the application group.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  operationMetadata?: string;
  /**
   * @remarks
   * The creation progress of the application instance.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The state of the application group.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The state information of the application group.
   * 
   * @example
   * Stack CREATE completed successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the application group was last modified.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployOutputs: 'DeployOutputs',
      deployParameters: 'DeployParameters',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      progress: 'Progress',
      status: 'Status',
      statusReason: 'StatusReason',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployOutputs: 'string',
      deployParameters: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      operationMetadata: 'string',
      progress: 'string',
      status: 'string',
      statusReason: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponseBodyTemplate extends $tea.Model {
  /**
   * @remarks
   * The creator of the template.
   * 
   * @example
   * root(13090000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Get status of instances
   */
  description?: string;
  /**
   * @remarks
   * The SHA-256 value of the template content.
   * 
   * @example
   * 4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4
   */
  hash?: string;
  /**
   * @remarks
   * The share type of the template. The share type of a user-created template is **Private**.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. The system automatically determines whether the format is JSON or YAML.
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-94753d4d828d38
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. The name of the version consists of the letter v and a number. The number starts from 1.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the template.
   * 
   * @example
   * root(13090000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBodySchemasAttributes extends $tea.Model {
  /**
   * @remarks
   * The data type of the property.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * ApplicationType
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBodySchemas extends $tea.Model {
  /**
   * @remarks
   * The properties of the configuration list.
   */
  attributes?: GetInventorySchemaResponseBodySchemasAttributes[];
  /**
   * @remarks
   * The name of the configuration list.
   * 
   * @example
   * ACS:Application
   */
  typeName?: string;
  /**
   * @remarks
   * The version of the configuration list.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      typeName: 'TypeName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemasAttributes },
      typeName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemResponseBodyOpsItem extends $tea.Model {
  /**
   * @remarks
   * The information about the attributes of the O\\&M item.
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The category of the O\\&M item.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The user who created the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  createBy?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-04-10T06:15Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * The user who last modified the O\\&M item.
   * 
   * @example
   * modifiedBy
   */
  lastModifiedBy?: string;
  /**
   * @remarks
   * The O\\&M item ID.
   * 
   * @example
   * oi-d52b08695e2b46ae8413
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority of the O\\&M item.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzxkofnlxtn2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Names (ARNs) of the associated resources.
   */
  resources?: string[];
  /**
   * @remarks
   * The severity level of the O\\&M item.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions to the O\\&M item.
   */
  solutions?: { [key: string]: any }[];
  /**
   * @remarks
   * The source business of the O\\&M item.
   * 
   * @example
   * /aliyun/appManager
   */
  source?: string;
  /**
   * @remarks
   * The status of the O\\&M item.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags attached to the O\\&M item.
   * 
   * @example
   * {"K1":"V1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-04-10T06:15Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createBy: 'CreateBy',
      createDate: 'CreateDate',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      createBy: 'string',
      createDate: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBodyParameter extends $tea.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["parameter"],"AllowedPattern":"parameter","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags added to the common parameter.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was updated.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * parameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * {\\"MaxLength\\": 2}
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-10-22T03:30:45Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-7cdc0000000000000000
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * StringList
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the parameter was updated.
   * 
   * @example
   * 2020-10-22T03:30:45Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * parameter,parameter1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * {\\"MaxLength\\": 2}
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-10-21T04:03:12Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the common parameter.
   * 
   * @example
   * p-7cdc0000000000000000
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * myParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags added to the common parameters.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the common parameter.
   * 
   * @example
   * StringList
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was last updated.
   * 
   * @example
   * 2020-10-21T04:03:12Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * "parameter1,parameter2"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponseBodyPatchBaselineTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The creator of the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was created.
   * 
   * @example
   * 2021-09-07T03:42:56Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * UpdatePatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-445340b5c6504a85a300
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the patch baseline is set as the default patch baseline.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MypatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatches?: string[];
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzmhzoaad5oq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the patch baseline.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: GetPatchBaselineResponseBodyPatchBaselineTags[];
  /**
   * @remarks
   * The user who last modified the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was last modified.
   * 
   * @example
   * 2021-09-08T07:26:38Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetPatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponseBodyParameter extends $tea.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":".*","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was created.
   * 
   * @example
   * 2020-09-01T09:28:47Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The instance ID of the KMS instance.
   * 
   * @example
   * kst-hzz****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-14ed150fdcd048xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of the key of Key Management Service (KMS) that is used for encryption.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-09-01T09:35:17Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * {\\"AllowedValues\\": [\\"test\\"]}
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was created.
   * 
   * @example
   * 2020-10-22T03:11:13Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the encryption parameter.
   * 
   * @example
   * secretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-7cdc0000000000000000
   */
  id?: string;
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * ssh-bp67acfmxazb4p****
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the encryption parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-10-22T03:11:13Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * secretParameter,secretParameter1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The constraints of the encryption parameter.
   * 
   * @example
   * {\\"AllowedPattern\\": \\"^[a-g]*$\\"}
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-10-21T06:22:48Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the encryption parameter.
   * 
   * @example
   * secretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the encryption parameter.
   * 
   * @example
   * p-7cdc0000000000000000
   */
  id?: string;
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * 090xxbex-xexx-xxxx-axfc-ddxxcxxxxcex
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the encryption parameter.
   * 
   * @example
   * mySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The share type of the encryption parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The data type of the encryption parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-10-21T06:22:48Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * secretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponseBodyServiceSettings extends $tea.Model {
  /**
   * @remarks
   * The name of OSS bucket to deliver.
   * 
   * @example
   * OssBucketName
   */
  deliveryOssBucketName?: string;
  /**
   * @remarks
   * Whether to enable OSS delivery.
   * 
   * @example
   * false
   */
  deliveryOssEnabled?: boolean;
  /**
   * @remarks
   * The key prefix of OSS to deliver.
   * 
   * @example
   * oos/execution
   */
  deliveryOssKeyPrefix?: string;
  /**
   * @remarks
   * Whether to enable SLS delivery.
   * 
   * @example
   * false
   */
  deliverySlsEnabled?: boolean;
  /**
   * @remarks
   * The name of SLS project to deliver.
   * 
   * @example
   * SlsProjectName
   */
  deliverySlsProjectName?: string;
  /**
   * @remarks
   * The id of RDC Enterprise.
   * 
   * @example
   * RdcEnterpriseId
   */
  rdcEnterpriseId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTemplate extends $tea.Model {
  /**
   * @remarks
   * The creator of the template.
   * 
   * @example
   * ACS
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * "{\\"en\\": \\"Creates an ECS image\\", \\"zh-cn\\": \\"创建一个ECS镜像\\", \\"name-en\\": \\"Create Image\\", \\"name-zh-cn\\": \\"创建镜像\\", \\"categories\\": [\\"image_manage\\", \\"application_manage\\"]}"
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template was configured with a trigger.
   * 
   * @example
   * false
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * The SHA-256 value of the template content.
   * 
   * @example
   * 40fb5e3e08ef6c8a499ff7cd8441194f518028ad08338a84cb70c023a64576f1
   */
  hash?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. The share type of a user-created template is **Private**.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. The system automatically determines whether the format is JSON or YAML.
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-4bdb1745c171401883a2
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ACS-ECS-CreateImage
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * Automation
   */
  templateType?: string;
  /**
   * @remarks
   * The version of the template. The name of the version consists of the letter v and a number. The number starts from 1.
   * 
   * @example
   * v15
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the template.
   * 
   * @example
   * ACS
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2022-04-26T08:37:07Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The name of the version of the template.
   * 
   * @example
   * version15
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBodyActions extends $tea.Model {
  /**
   * @remarks
   * The type of the action.
   * 
   * 1.  Atomic actions
   * 
   *     *   Atomic.API
   *     *   Atomic.Trigger
   *     *   Atomic.Control
   *     *   Atomic.Embedded
   * 
   * 2.  Cloud product actions
   * 
   *     *   Product.ECS
   *     *   Product.RDS
   *     *   Product.VPC
   *     *   Product.FC
   *     *   ...
   * 
   * @example
   * ACS::Template
   */
  actionType?: string;
  /**
   * @remarks
   * The time when the action was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the action.
   * 
   * @example
   * ReplaceSystemDisk
   */
  description?: string;
  /**
   * @remarks
   * The name of the action.
   * 
   * @example
   * ACS::ECS::ReplaceSystemDisk
   */
  OOSActionName?: string;
  /**
   * @remarks
   * The number of times that the action is used.
   * 
   * @example
   * 5
   */
  popularity?: number;
  /**
   * @remarks
   * The parameters of the action.
   * 
   * @example
   * { "ImageId": { "Description": "The mirror ID you will use when resetting the system", "Type": "String" }, "InstanceId": { "Description": "the instance id that you will handle .", "Type": "String" } }
   */
  properties?: string;
  /**
   * @remarks
   * The version of the template that corresponds to the action.
   * 
   * >  For atomic actions, this parameter is not returned.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      OOSActionName: 'OOSActionName',
      popularity: 'Popularity',
      properties: 'Properties',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      OOSActionName: 'string',
      popularity: 'number',
      properties: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsResponseBodyApplicationGroups extends $tea.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The ID of the application group in CloudMonitor.
   * 
   * @example
   * 12345678
   */
  cmsGroupId?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createDate?: string;
  /**
   * @remarks
   * The configuration information of the application group.
   * 
   * @example
   * {   "TemplateURL": "https://ros-template.oss-cn-zhangjiakou.aliyuncs.com/App_Management_Existing_Vpc_Ecs_Instance.json",   "Parameters": {     "ZoneId": "cn-hangzhou-k",     "ProjectName": "test",     "SystemDiskSize": 40,     "InstanceChargeType": "PostPaid",     "SecurityGroupId": "sg-bp1a4374akk63jl8tddy",     "VSwitchId": "vsw-bp1fcvc3zn0jrag86rrlm",     "SystemDiskCategory": "cloud_essd",     "InstancePassword": "******",     "InternetChargeType": "PayByTraffic",     "InstanceCount": 1,     "InternetMaxBandwidthOut": 0,     "VpcId": "vpc-bp1i99boyas8i8m9t3skp",     "EcsImageId": "centos_8_5_x64_20G_alibase_20211228.vhd",     "DataDiskSize": 100,     "EcsInstanceType": "ecs.s6-c1m4.small",     "DataDiskCategory": "cloud_efficiency",     "EnvironmentCommandId": "c-hz028fc3g031gcg"   },   "RegionId": "cn-hangzhou",   "StackName": "stack-1645688523068-3no_AKhOJ",   "DisableRollback": true }
   */
  deployParameters?: string;
  /**
   * @remarks
   * The ID of the region in which the related resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The state of the application group.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The state information of the application group.
   * 
   * @example
   * ApplicationGroup is Created.
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the application group was updated.
   * 
   * @example
   * 2021-09-08T03:01:53Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployParameters: 'DeployParameters',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      status: 'Status',
      statusReason: 'StatusReason',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployParameters: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      status: 'string',
      statusReason: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  /**
   * @remarks
   * The type of the application.
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:09:59Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Application
   */
  description?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the application.
   * 
   * @example
   * {"k1": "v1","k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:09:59Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBodyExecutionLogs extends $tea.Model {
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * System
   */
  logType?: string;
  /**
   * @remarks
   * The details of the task execution.
   * 
   * @example
   * The task CheckDiskCategory completed.
   */
  message?: string;
  /**
   * @remarks
   * The task execution ID.
   * 
   * @example
   * exec-1234567zxcvb.t0010
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The timestamp when the task was run.
   * 
   * @example
   * 2019-05-24T:02:29:07Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      message: 'Message',
      taskExecutionId: 'TaskExecutionId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      message: 'string',
      taskExecutionId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponseBodyRiskyTasks extends $tea.Model {
  /**
   * @remarks
   * The name of the operation that the high-risk task calls.
   * 
   * @example
   * DeleteInstance
   */
  API?: string;
  /**
   * @remarks
   * The cloud service in which the high-risk task runs.
   * 
   * @example
   * ECS
   */
  service?: string;
  /**
   * @remarks
   * The details of the high-risk task.
   */
  task?: string[];
  /**
   * @remarks
   * The details of templates to which the high-risk task belongs.
   */
  template?: string[];
  static names(): { [key: string]: string } {
    return {
      API: 'API',
      service: 'Service',
      task: 'Task',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      API: 'string',
      service: 'string',
      task: { 'type': 'array', 'itemType': 'string' },
      template: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutionsCurrentTasks extends $tea.Model {
  /**
   * @remarks
   * The execution template of the task.
   * 
   * @example
   * acs::Template
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the task execution.
   * 
   * @example
   * task-exec-44d32b45d2a49899#1
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * installSLSILogtail
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutions extends $tea.Model {
  /**
   * @remarks
   * The type of the execution template. Valid values: Other, TimerTrigger, EventTrigger, and AlarmTrigger.
   * 
   * @example
   * Other
   */
  category?: string;
  /**
   * @remarks
   * The number of tasks that are counted by execution status.
   * 
   * @example
   * {"Failed": 0,"Success": 1,"Total": 2}
   */
  counters?: { [key: string]: any };
  /**
   * @remarks
   * The time when the execution was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the tasks that are running.
   */
  currentTasks?: ListExecutionsResponseBodyExecutionsCurrentTasks[];
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * test execution.
   */
  description?: string;
  /**
   * @remarks
   * The time when the execution stops running.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDate?: string;
  /**
   * @remarks
   * The account ID of the user who started the execution of the template.
   * 
   * @example
   * 1309252800
   */
  executedBy?: string;
  /**
   * @remarks
   * The unique ID of the execution.
   * 
   * @example
   * exec-44d32b45d2a449e
   */
  executionId?: string;
  /**
   * @remarks
   * Indicates whether the execution contains child executions.
   * 
   * @example
   * false
   */
  isParent?: boolean;
  /**
   * @remarks
   * The time when the template was last successfully triggered.
   * 
   * @example
   * 2019-05-27T09:29:18Z
   */
  lastSuccessfulTriggerTime?: string;
  /**
   * @remarks
   * The outputs of last trigger.
   * 
   * @example
   * {
   *       "InstanceId": "i-xxx"
   * }
   */
  lastTriggerOutputs?: string;
  /**
   * @remarks
   * The status of the execution after the template was last triggered.
   * 
   * @example
   * Success
   */
  lastTriggerStatus?: string;
  /**
   * @remarks
   * The status message of last trigger.
   * 
   * @example
   * ""
   */
  lastTriggerStatusMessage?: string;
  /**
   * @remarks
   * The time when the template was last successfully triggered.
   * 
   * @example
   * 2019-05-27T09:29:18Z
   */
  lastTriggerTime?: string;
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The output of the execution.
   * 
   * @example
   * { "InstanceId":"i-xxx" }
   */
  outputs?: string;
  /**
   * @remarks
   * The input parameters of the execution.
   * 
   * @example
   * { "Status":"Running" }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The role that started the execution of the template.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * { 			"Success": 1 		}
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The security check mode. Valid values: Skip, and ConfirmEveryHighRiskAction.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The time when the execution was started.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Started, Queued, Running, Waiting, Success, Failed, and Cancelled.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The status of the task execution.
   * 
   * @example
   * “”
   */
  statusMessage?: string;
  /**
   * @remarks
   * The reason for which the status occurs.
   * 
   * @example
   * ""
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the execution.
   * 
   * @example
   * {}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The target resource.
   * 
   * @example
   * "{"ResourceType": "ALIYUN::ECS::Instance", "Filters": [{"ResourceIds": ["i-bp14z07dg3464980x72o"], "RegionId": "cn-hangzhou", "Type": "ResourceIds"}]}"
   */
  targets?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 123
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the execution was updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The Waiting state.
   * 
   * @example
   * ""
   */
  waitingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      lastSuccessfulTriggerTime: 'LastSuccessfulTriggerTime',
      lastTriggerOutputs: 'LastTriggerOutputs',
      lastTriggerStatus: 'LastTriggerStatus',
      lastTriggerStatusMessage: 'LastTriggerStatusMessage',
      lastTriggerTime: 'LastTriggerTime',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      resourceStatus: 'ResourceStatus',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      statusReason: 'StatusReason',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
      waitingStatus: 'WaitingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutionsCurrentTasks },
      description: 'string',
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      lastSuccessfulTriggerTime: 'string',
      lastTriggerOutputs: 'string',
      lastTriggerStatus: 'string',
      lastTriggerStatusMessage: 'string',
      lastTriggerTime: 'string',
      mode: 'string',
      outputs: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentExecutionId: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      resourceStatus: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      statusReason: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
      waitingStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitRepositoriesResponseBodyGitRepos extends $tea.Model {
  description?: string;
  fullName?: string;
  htmlUrl?: string;
  isPrivate?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fullName: 'FullName',
      htmlUrl: 'HtmlUrl',
      isPrivate: 'IsPrivate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fullName: 'string',
      htmlUrl: 'string',
      isPrivate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePackageStatesResponseBodyPackageStates extends $tea.Model {
  /**
   * @example
   * template description
   */
  description?: string;
  /**
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @example
   * Alibaba Cloud
   */
  publisher?: string;
  /**
   * @example
   * Package
   */
  templateCategory?: string;
  /**
   * @example
   * 087b1e11072a40259f6fxxxxxxxxx
   */
  templateId?: string;
  /**
   * @example
   * ACS-ECS-Docker
   */
  templateName?: string;
  /**
   * @example
   * v3
   */
  templateVersion?: string;
  /**
   * @example
   * fix bug
   */
  templateVersionName?: string;
  /**
   * @example
   * 2024-05-04T11:17:28
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameters: 'Parameters',
      publisher: 'Publisher',
      templateCategory: 'TemplateCategory',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateVersionName: 'TemplateVersionName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameters: 'string',
      publisher: 'string',
      templateCategory: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      templateVersionName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponseBodyInstancePatchStates extends $tea.Model {
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-f9393021b7a049e1b34e
   */
  baselineId?: string;
  /**
   * @remarks
   * The number of patches that failed to be installed.
   * 
   * @example
   * 0
   */
  failedCount?: string;
  /**
   * @remarks
   * The number of installed patches.
   * 
   * @example
   * 0
   */
  installedCount?: string;
  /**
   * @remarks
   * The number of patches that do not meet the baseline.
   * 
   * @example
   * 0
   */
  installedOtherCount?: string;
  /**
   * @remarks
   * The number of patches that have been installed but require a restart to take effect.
   * 
   * @example
   * 0
   */
  installedPendingRebootCount?: string;
  /**
   * @remarks
   * The number of patches that are rejected by the user.
   * 
   * @example
   * 0
   */
  installedRejectedCount?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of patches that are not installed.
   * 
   * @example
   * 0
   */
  missingCount?: string;
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 2021-09-10T11:42:22Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The time when the operation was initiated.
   * 
   * @example
   * 2021-09-10T11:42:22Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * scan
   */
  operationType?: string;
  /**
   * @remarks
   * The information about the user.
   * 
   * @example
   * “”
   */
  ownerInformation?: string;
  /**
   * @remarks
   * The patch group.
   * 
   * @example
   * null
   */
  patchGroup?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      failedCount: 'FailedCount',
      installedCount: 'InstalledCount',
      installedOtherCount: 'InstalledOtherCount',
      installedPendingRebootCount: 'InstalledPendingRebootCount',
      installedRejectedCount: 'InstalledRejectedCount',
      instanceId: 'InstanceId',
      missingCount: 'MissingCount',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      operationType: 'OperationType',
      ownerInformation: 'OwnerInformation',
      patchGroup: 'PatchGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      failedCount: 'string',
      installedCount: 'string',
      installedOtherCount: 'string',
      installedPendingRebootCount: 'string',
      installedRejectedCount: 'string',
      instanceId: 'string',
      missingCount: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      operationType: 'string',
      ownerInformation: 'string',
      patchGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesResponseBodyPatches extends $tea.Model {
  /**
   * @remarks
   * The classification of the patch.
   * 
   * @example
   * “”
   */
  classification?: string;
  /**
   * @remarks
   * The time when the patch was installed.
   * 
   * @example
   * 2021-01-28T07:07:20Z
   */
  installedTime?: string;
  /**
   * @remarks
   * The Id of KBId.
   * 
   * @example
   * apt-utils.amd64
   */
  KBId?: string;
  /**
   * @remarks
   * The level of the severity.
   * 
   * @example
   * important
   */
  severity?: string;
  /**
   * @remarks
   * The status of the installation.
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * The name of the patch.
   * 
   * @example
   * isc-dhcp-common.amd64:4.3.5-3ubuntu7.3
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      installedTime: 'InstalledTime',
      KBId: 'KBId',
      severity: 'Severity',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      installedTime: 'string',
      KBId: 'string',
      severity: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The name of the component property. Valid values of N: 1 to 5.
   * 
   * @example
   * PlatformName
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values. Valid values of N: 1 to 5. Valid values:
   * 
   * *   Equal
   * *   NotEqual
   * *   BeginWith
   * *   LessThan
   * *   GreaterThan
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The values of properties. Valid values of the first N: 1 to 5. Valid values of the second N: 1 to 20.
   * 
   * @example
   * test
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsShrinkRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The parameter name of the filter.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponseBodyOpsItems extends $tea.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-07-09T10:01Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-d52b08695e2b46ae8413
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The Alibaba Resource Names (ARNs) of the associated resources.
   */
  resources?: string[];
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The source business.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The status of the O\\&M item.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * Test
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-07-09T10:01Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createDate: 'CreateDate',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resources: 'Resources',
      severity: 'Severity',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createDate: 'string',
      opsItemId: 'string',
      priority: 'number',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponseBodyParameterVersions extends $tea.Model {
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was last updated.
   * 
   * @example
   * 2020-09-07T11:37:29Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * MyParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      parameterVersion: 'ParameterVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterVersion: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The common parameter ID.
   * 
   * @example
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags added to the common parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was updated.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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

export class ListPatchBaselinesResponseBodyPatchBaselinesTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesResponseBodyPatchBaselines extends $tea.Model {
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The user who created the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was created.
   * 
   * @example
   * 2021-09-08T03:41:23Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * ListPatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-c2838b5d89b540e19ee6
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the patch baseline is set as the default patch baseline.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * AliyunLinux
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek256ia6vhsndy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the patch baseline.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The configurations of patch sources.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags of the patch baseline.
   */
  tags?: ListPatchBaselinesResponseBodyPatchBaselinesTags[];
  /**
   * @remarks
   * The user who last updated the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was updated.
   * 
   * @example
   * 2021-09-08T03:44:34Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListPatchBaselinesResponseBodyPatchBaselinesTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponseBodyResourceExecutionStatus extends $tea.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * exec-6be6d6ff805349d9ac13
   */
  executionId?: string;
  /**
   * @remarks
   * The time when the execution started running.
   * 
   * @example
   * 2020-11-13T08:48:34Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The output of the template.
   * 
   * @example
   * { 				"commandOutput": "hello\\n" 			}
   */
  outputs?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-bp1e1bxxxxxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionTime: 'ExecutionTime',
      outputs: 'Outputs',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionTime: 'string',
      outputs: 'string',
      resourceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponseBodyParameterVersions extends $tea.Model {
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      parameterVersion: 'ParameterVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterVersion: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The user who created the parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the parameter was created.
   * 
   * @example
   * 2020-09-01T09:28:47Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parameter.
   * 
   * @example
   * p-14ed150fdcd048xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of the KMS customer master key (CMK) that is used for encryption.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the parameter was updated.
   * 
   * @example
   * 2020-09-01T09:35:17Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsResponseBodyStateConfigurations extends $tea.Model {
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * @example
   * ApplyAndAutoCorrect
   */
  configureMode?: string;
  /**
   * @remarks
   * The time when the desired-state configuration was created.
   * 
   * @example
   * 2021-03-22T03:13:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Collect inventory data
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {"policy": {"ACS:Network": {"Collection": "Enabled"}, "ACS:Application": {"Collection": "Enabled"}}}
   */
  parameters?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule expression.
   * 
   * @example
   * 1 hour
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * sc-a538febe18fabcdef
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The queried resources.
   * 
   * @example
   * { "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }
   */
  targets?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * t-ajshjalscfhjk2214
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the configuration was updated.
   * 
   * @example
   * 2021-04-22T03:13:32Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * TagTest2
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponseBodyTaskExecutions extends $tea.Model {
  /**
   * @remarks
   * The output of the execution.
   * 
   * @example
   * exec-xxx
   */
  childExecutionId?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createDate?: string;
  /**
   * @remarks
   * The execution ID of the parent node.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDate?: string;
  /**
   * @remarks
   * The action of the task.
   * 
   * @example
   * exec-44d32b45d2a449e49899
   */
  executionId?: string;
  /**
   * @remarks
   * The Input parameters of the task execution.
   * 
   * @example
   * {                     "NotifyNote":""                 }
   */
  extraData?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * {}
   */
  loop?: { [key: string]: any };
  /**
   * @remarks
   * The status information of the task execution.
   * 
   * @example
   * 2
   */
  loopBatchNumber?: number;
  /**
   * @remarks
   * The time when the execution was created.
   * 
   * @example
   * i-1234566zxcvvb
   */
  loopItem?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * { "InstanceId":"i-xxx" }
   */
  outputs?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * task-exec-xxx
   */
  parentTaskExecutionId?: string;
  /**
   * @remarks
   * Queries task executions. Multiple methods are supported to filter task executions.
   * 
   * @example
   * { "Status":"Running" }
   */
  properties?: string;
  /**
   * @remarks
   * The elements in the loop task.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDate?: string;
  /**
   * @remarks
   * The time when the task execution stopped running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * ACS::Sleep
   */
  taskAction?: string;
  /**
   * @remarks
   * The time when the execution was last updated.
   * 
   * @example
   * task-exec-xxx
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The time when the execution started.
   * 
   * @example
   * describeInstance
   */
  taskName?: string;
  /**
   * @remarks
   * The number of times for which the loop task is run.
   * 
   * @example
   * xxx
   */
  templateId?: string;
  /**
   * @remarks
   * The configuration and statistics information of the loop task. This parameter is returned only for the parent node of the loop task.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      childExecutionId: 'ChildExecutionId',
      createDate: 'CreateDate',
      endDate: 'EndDate',
      executionId: 'ExecutionId',
      extraData: 'ExtraData',
      loop: 'Loop',
      loopBatchNumber: 'LoopBatchNumber',
      loopItem: 'LoopItem',
      outputs: 'Outputs',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      properties: 'Properties',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childExecutionId: 'string',
      createDate: 'string',
      endDate: 'string',
      executionId: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      loop: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      loopBatchNumber: 'number',
      loopItem: 'string',
      outputs: 'string',
      parentTaskExecutionId: 'string',
      properties: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
      templateId: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBodyTemplateVersions extends $tea.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * Detach the eip from the special instance.
   */
  description?: string;
  /**
   * @remarks
   * The format of the template content. Valid values: YAML and JSON.
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The number of the version.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the version.
   * 
   * @example
   * foo
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the version was last updated.
   * 
   * @example
   * 2020-05-19T06:05:41Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The name of the version.
   * 
   * @example
   * baz
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateFormat: 'TemplateFormat',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateFormat: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * TimerTrigger
   */
  category?: string;
  /**
   * @remarks
   * The template constraints.
   * 
   * @example
   * {
   *   "InstanceTypeFamilies": ["ecs.g8y", "ecs.c8y"],
   *   "ImageTypes": ["system"],
   *   "OSPlatforms": ["CentOS", "Ubuntu"],
   *   "OSVersions": ["CentOS7.9 64bit"]
   * }
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the template.
   * 
   * @example
   * root(1309200)
   */
  createdBy?: string;
  /**
   * @remarks
   * The creation time of the template.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Describe instances of given status
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template was configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * The SHA256 value of the template content.
   * 
   * @example
   * 4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4
   */
  hash?: string;
  /**
   * @remarks
   * Indicates whether the template is added to favorites.
   * 
   * @example
   * true
   */
  isFavorite?: boolean;
  /**
   * @remarks
   * The popularity of the public template. Valid values: **1-10**. A greater value indicates higher popularity. If **ShareType** is set to **Private**, the value of this parameter is `-1`.
   * 
   * >  This parameter is valid only if **ShareType** is set to **Public**.
   * 
   * @example
   * 8
   */
  popularity?: number;
  /**
   * @remarks
   * The user who published the template.
   * 
   * @example
   * aliyun
   */
  publisher?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. The share type of a template created by a user is **Private**. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The template format. The system automatically determines whether the format of the template is JSON or YAML.
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * t-94753deed38
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * private
   */
  templateType?: string;
  /**
   * @remarks
   * The template version. The version contains the letter v and a number. The number starts from 1.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The number of times for which the private template is executed. If **ShareType** is set to **Public**, the value of this parameter is `-1`.
   * 
   * >  This parameter is valid only if **ShareType** is set to **Private**.
   * 
   * @example
   * 5
   */
  totalExecutionCount?: number;
  /**
   * @remarks
   * The user who last updated the template.
   * 
   * @example
   * root(13092000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      isFavorite: 'IsFavorite',
      popularity: 'Popularity',
      publisher: 'Publisher',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      isFavorite: 'boolean',
      popularity: 'number',
      publisher: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The user who created the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was created.
   * 
   * @example
   * 2021-09-07T03:42:56Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * RegisterPatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-445340b5c6504a85a300
   */
  id?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4dpaq2yox6q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the patch baseline.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The user who last updated the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was last updated.
   * 
   * @example
   * 2021-09-07T03:42:56Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequestFilter extends $tea.Model {
  /**
   * @remarks
   * The name of the component property. Valid values of N: 1 to 5. Different components have different property names. You can call the [GetInventorySchema](https://api.aliyun.com/#/?product=oos\\&version=2019-06-01\\&api=GetInventorySchema) operation to query the property names of different components. For example, the ACS:InstanceInformation component has the InstanceId property. Therefore, you can set this parameter to ACS:InstanceInformation.InstanceId.
   * 
   * @example
   * ACS:InstanceInformation.InstanceId
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values. Valid values of N: 1 to 5. Valid values:
   * 
   * *   Equal
   * *   NotEqual
   * *   BeginWith
   * *   LessThan
   * *   GreaterThan
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The property values to query.
   * 
   * @example
   * i-bp1cpoxxxxxxxxxxxxxx
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponseBodyServiceSettings extends $tea.Model {
  /**
   * @remarks
   * The name of OSS bucket to deliver.
   * 
   * @example
   * OssBucketName
   */
  deliveryOssBucketName?: string;
  /**
   * @remarks
   * Whether to enable OSS delivery.
   * 
   * @example
   * true
   */
  deliveryOssEnabled?: boolean;
  /**
   * @remarks
   * The key prefix of OSS to deliver.
   * 
   * @example
   * oos/execution
   */
  deliveryOssKeyPrefix?: string;
  /**
   * @remarks
   * Whether to enable SLS delivery.
   * 
   * @example
   * false
   */
  deliverySlsEnabled?: boolean;
  /**
   * @remarks
   * The name of SLS project to deliver.
   * 
   * @example
   * SlsProjectName
   */
  deliverySlsProjectName?: string;
  /**
   * @remarks
   * The id of RDC Enterprise.
   * 
   * @example
   * RdcEnterpriseId
   */
  rdcEnterpriseId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBodyExecutionCurrentTasks extends $tea.Model {
  /**
   * @remarks
   * The action of the task.
   * 
   * @example
   * ACS::TimerTrigger
   */
  taskAction?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * exec-dsadasdawq
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * testTask
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBodyExecution extends $tea.Model {
  /**
   * @remarks
   * The number of executions.
   * 
   * @example
   * 1
   */
  counters?: { [key: string]: any };
  /**
   * @remarks
   * The time when the execution was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about in-progress tasks.
   */
  currentTasks?: StartExecutionResponseBodyExecutionCurrentTasks[];
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * test execution.
   */
  description?: string;
  /**
   * @remarks
   * The time when the execution stopped.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDate?: string;
  /**
   * @remarks
   * The account ID of the user who started the execution of the template.
   * 
   * @example
   * root(13092080xx12344)
   */
  executedBy?: string;
  /**
   * @remarks
   * The GUID of the execution.
   * 
   * @example
   * exec-xxxyyy
   */
  executionId?: string;
  /**
   * @remarks
   * Indicates whether the execution is a parent execution.
   * 
   * @example
   * false
   */
  isParent?: boolean;
  /**
   * @remarks
   * The loop mode.
   * 
   * @example
   * Automatic
   */
  loopMode?: string;
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * Automatic
   */
  mode?: string;
  /**
   * @remarks
   * The output of the execution.
   * 
   * @example
   * { "InstanceId":"i-xxx" }
   */
  outputs?: string;
  /**
   * @remarks
   * The input parameters of the execution.
   * 
   * @example
   * { "Status":"Running" }
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the parent execution.
   * 
   * @example
   * exec-xxxx
   */
  parentExecutionId?: string;
  /**
   * @remarks
   * The role that started the execution of the template.
   * 
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security check mode.
   * 
   * @example
   * Skip
   */
  safetyCheck?: string;
  /**
   * @remarks
   * The time when the execution was started.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The status information of the execution.
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  /**
   * @remarks
   * The tags of the execution.
   * 
   * @example
   * {"k1":"v2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-1bd341007f
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version number of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the execution was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      loopMode: 'LoopMode',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': StartExecutionResponseBodyExecutionCurrentTasks },
      description: 'string',
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      loopMode: 'string',
      mode: 'string',
      outputs: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationRequestAlarmConfig extends $tea.Model {
  /**
   * @remarks
   * The alert contact groups.
   */
  contactGroups?: string[];
  /**
   * @remarks
   * The health check URL of the application.
   * 
   * @example
   * /healthcheck/tcp50122
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The alert templates.
   */
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplication extends $tea.Model {
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:17:46Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * My-Application
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T10:17:46Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdDate: 'CreatedDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponseBodyApplicationGroup extends $tea.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The time when the application group was created.
   * 
   * @example
   * 2021-09-07T10:28:25Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The ID of the region in which the related resources reside.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * The description of the application group.
   * 
   * @example
   * ApplicationGroup
   */
  description?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  importTagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
   */
  importTagValue?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The time when the application group was updated.
   * 
   * @example
   * 2021-09-08T03:01:53Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      createdDate: 'CreatedDate',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      createdDate: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemResponseBodyOpsItem extends $tea.Model {
  /**
   * @remarks
   * The attributes of the O\\&M item.
   * 
   * @example
   * [{\\"Attribute\\": {\\"Weight\\": 100}, \\"RealServer\\": \\"uaejc8hnqzqz5valyh8dibolpvza48ik.yundunwaf5.com\\"}]
   */
  attributes?: string;
  /**
   * @remarks
   * The category.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-03-16T07:04Z
   */
  createDate?: string;
  /**
   * @remarks
   * The user who created the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * The user who modified the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  lastModifiedBy?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-e2264dcf040c472598e9
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ARNs of the associated resources.
   */
  resources?: string[];
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   */
  solutions?: string[];
  /**
   * @remarks
   * The source business.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * Test
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-03-16T08:04Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createDate: 'CreateDate',
      createdBy: 'CreatedBy',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      createDate: 'string',
      createdBy: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponseBodyParameter extends $tea.Model {
  /**
   * @remarks
   * The constraints of the common parameter.
   * 
   * @example
   * "{\\"AllowedValues\\":[\\"parameter\\"],\\"AllowedPattern\\":\\"parameter\\",\\"MinLength\\":0,\\"MaxLength\\":20}"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the common parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the common parameter was created.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the common parameter.
   * 
   * @example
   * update
   */
  description?: string;
  /**
   * @remarks
   * The parameter ID.
   * 
   * @example
   * p-4c4b401cab6747xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the common parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 2
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the common parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tag added to the common parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: string;
  /**
   * @remarks
   * The data type of the common parameter.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was updated.
   * 
   * @example
   * 2020-09-01T08:04:23Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
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

export class UpdatePatchBaselineResponseBodyPatchBaselineTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  /**
   * @remarks
   * The rules of scanning and installing patches for the specified operating system.
   * 
   * @example
   * {"PatchRules":[{"PatchFilterGroup":[{"Key":"PatchSet","Values":["OS"]},{"Key":"ProductFamily","Values":["Windows"]},{"Key":"Product","Values":["Windows 10","Windows 7"]},{"Key":"Classification","Values":["Security Updates","Updates","Update Rollups","Critical Updates"]},{"Key":"Severity","Values":["Critical","Important","Moderate"]}],"ApproveAfterDays":7,"ApproveUntilDate":"","EnableNonSecurity":true,"ComplianceLevel":"Medium"}]}
   */
  approvalRules?: string;
  /**
   * @remarks
   * The approved patches.
   */
  approvedPatches?: string[];
  /**
   * @remarks
   * Indicates whether the approved patch involves updates other than security-related updates.
   * 
   * @example
   * true
   */
  approvedPatchesEnableNonSecurity?: boolean;
  /**
   * @remarks
   * The creator of the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was created.
   * 
   * @example
   * 2021-09-07T03:42:56Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the patch baseline.
   * 
   * @example
   * UpdatePatchBaseline
   */
  description?: string;
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-445340b5c6504a85a300
   */
  id?: string;
  /**
   * @remarks
   * The name of the patch baseline.
   * 
   * @example
   * MyPatchBaseline
   */
  name?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * Windows
   */
  operationSystem?: string;
  /**
   * @remarks
   * The rejected patches.
   */
  rejectedPatches?: string[];
  /**
   * @remarks
   * The action of the rejected patch.
   * 
   * @example
   * ALLOW_AS_DEPENDENCY
   */
  rejectedPatchesAction?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy2zdbbjplii
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the patch baseline.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The patch source configurations.
   */
  sources?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdatePatchBaselineResponseBodyPatchBaselineTags[];
  /**
   * @remarks
   * The user who updated the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the patch baseline was updated.
   * 
   * @example
   * 2021-09-08T07:26:37Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': UpdatePatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponseBodyParameter extends $tea.Model {
  /**
   * @remarks
   * The constraints of the parameter.
   * 
   * @example
   * \\"{\\"\\"AllowedValues":["secretparameter"],"AllowedPattern":".*","MinLength":0,"MaxLength":20}\\"
   */
  constraints?: string;
  /**
   * @remarks
   * The user who created the parameter.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the parameter was created.
   * 
   * @example
   * 2020-09-01T09:30:36Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parameter.
   * 
   * @example
   * p-0b0fff9919c946xxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The ID of customer master key (CMK) of Key Management Service (KMS) that is used for encryption.
   * 
   * @example
   * 80e9409f-78fa-42ab-84bd-83f40c******
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the parameter.
   * 
   * @example
   * 2
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the parameter.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * Secret
   */
  type?: string;
  /**
   * @remarks
   * The user who updated the parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the parameter was updated.
   * 
   * @example
   * 2020-09-01T09:33:11Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationResponseBodyStateConfiguration extends $tea.Model {
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * @example
   * ApplyAndAutoCorrect
   */
  configureMode?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2021-03-22T03:13:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the desired-state configuration.
   * 
   * @example
   * collect inventory data
   */
  description?: string;
  /**
   * @remarks
   * The parameters.
   * 
   * @example
   * {"policy": {"ACS:Network": {"Collection": "Enabled"}, "ACS:Application": {"Collection": "Enabled"}}}
   */
  parameters?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 1 hour
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * The ID of the desired-state configuration.
   * 
   * @example
   * StateConfigurationId
   */
  stateConfigurationId?: string;
  /**
   * @remarks
   * The tags added to the configuration.
   * 
   * @example
   * {"Key": "oos", "Value": "inventory"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The queried resources.
   * 
   * @example
   * { "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }
   */
  targets?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * t-1234asadf
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ACS-ECS-InventoryDataCollection
   */
  templateName?: string;
  /**
   * @remarks
   * The name of the template version.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the configuration was updated.
   * 
   * @example
   * 2021-03-22T03:13:32Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplate extends $tea.Model {
  /**
   * @remarks
   * The user who created the template.
   * 
   * @example
   * root(130920000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Describe instances of given status
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template is configured with a trigger.
   * 
   * @example
   * true
   */
  hasTrigger?: boolean;
  /**
   * @remarks
   * The SHA-256 value of the template content.
   * 
   * @example
   * 4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4
   */
  hash?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The share type of the template. The share type of a user-created template is **Private**.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. The system automatically determines whether the format is JSON or YAML.
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-94753deed38
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. The name of the version consists of the letter v and a number. The number starts from 1.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last modified the information about the template.
   * 
   * @example
   * root(1309000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the information about the template was last modified.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponseBodyTasks extends $tea.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * (Required) The status of the Ecs instance.
   */
  description?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * foo
   */
  name?: string;
  /**
   * @remarks
   * The outputs of the task.
   * 
   * @example
   * .instanceId
   */
  outputs?: string;
  /**
   * @remarks
   * The properties of the task.
   * 
   * @example
   * {"API": "DescribeInstances","Parameters": {"Status": "{{ Status }}"},"Service": "Ecs"}
   */
  properties?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * ACS::ExecuteAPI
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      outputs: 'Outputs',
      properties: 'Properties',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      outputs: 'string',
      properties: 'string',
      type: 'string',
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
    this._endpoint = this.getEndpoint("oos", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels an execution.
   * 
   * @param request - CancelExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelExecutionResponse
   */
  async cancelExecutionWithOptions(request: CancelExecutionRequest, runtime: $Util.RuntimeOptions): Promise<CancelExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelExecutionResponse>(await this.callApi(params, req, runtime), new CancelExecutionResponse({}));
  }

  /**
   * Cancels an execution.
   * 
   * @param request - CancelExecutionRequest
   * @returns CancelExecutionResponse
   */
  async cancelExecution(request: CancelExecutionRequest): Promise<CancelExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelExecutionWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * Modifies the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Continues deploying an application group when an error occurs for calling the DeployApplicationGroup operation. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ContinueDeployApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeployApplicationGroupResponse
   */
  async continueDeployApplicationGroupWithOptions(request: ContinueDeployApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<ContinueDeployApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.deployParameters)) {
      query["DeployParameters"] = request.deployParameters;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinueDeployApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueDeployApplicationGroupResponse>(await this.callApi(params, req, runtime), new ContinueDeployApplicationGroupResponse({}));
  }

  /**
   * Continues deploying an application group when an error occurs for calling the DeployApplicationGroup operation. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ContinueDeployApplicationGroupRequest
   * @returns ContinueDeployApplicationGroupResponse
   */
  async continueDeployApplicationGroup(request: ContinueDeployApplicationGroupRequest): Promise<ContinueDeployApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueDeployApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Creates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(tmpReq: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarmConfig)) {
      request.alarmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmConfig, "AlarmConfig", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alarmConfigShrink)) {
      query["AlarmConfig"] = request.alarmConfigShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  /**
   * Creates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - CreateApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationGroupResponse
   */
  async createApplicationGroupWithOptions(request: CreateApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cmsGroupId)) {
      query["CmsGroupId"] = request.cmsGroupId;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.importTagKey)) {
      query["ImportTagKey"] = request.importTagKey;
    }

    if (!Util.isUnset(request.importTagValue)) {
      query["ImportTagValue"] = request.importTagValue;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationGroupResponse>(await this.callApi(params, req, runtime), new CreateApplicationGroupResponse({}));
  }

  /**
   * Creates an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - CreateApplicationGroupRequest
   * @returns CreateApplicationGroupResponse
   */
  async createApplicationGroup(request: CreateApplicationGroupRequest): Promise<CreateApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Creates an O\\\\\\\\\\\\&M Item.
   * 
   * @param tmpReq - CreateOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOpsItemResponse
   */
  async createOpsItemWithOptions(tmpReq: CreateOpsItemRequest, runtime: $Util.RuntimeOptions): Promise<CreateOpsItemResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOpsItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedupString)) {
      query["DedupString"] = request.dedupString;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.solutions)) {
      query["Solutions"] = request.solutions;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOpsItemResponse>(await this.callApi(params, req, runtime), new CreateOpsItemResponse({}));
  }

  /**
   * Creates an O\\\\\\\\\\\\&M Item.
   * 
   * @param request - CreateOpsItemRequest
   * @returns CreateOpsItemResponse
   */
  async createOpsItem(request: CreateOpsItemRequest): Promise<CreateOpsItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOpsItemWithOptions(request, runtime);
  }

  /**
   * Creates a common parameter.
   * 
   * @param tmpReq - CreateParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterResponse
   */
  async createParameterWithOptions(tmpReq: CreateParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreateParameterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateParameterResponse>(await this.callApi(params, req, runtime), new CreateParameterResponse({}));
  }

  /**
   * Creates a common parameter.
   * 
   * @param request - CreateParameterRequest
   * @returns CreateParameterResponse
   */
  async createParameter(request: CreateParameterRequest): Promise<CreateParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParameterWithOptions(request, runtime);
  }

  /**
   * Creates a patch baseline.
   * 
   * @param tmpReq - CreatePatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePatchBaselineResponse
   */
  async createPatchBaselineWithOptions(tmpReq: CreatePatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<CreatePatchBaselineResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePatchBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.rejectedPatches)) {
      request.rejectedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rejectedPatches, "RejectedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!Util.isUnset(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!Util.isUnset(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rejectedPatchesShrink)) {
      query["RejectedPatches"] = request.rejectedPatchesShrink;
    }

    if (!Util.isUnset(request.rejectedPatchesAction)) {
      query["RejectedPatchesAction"] = request.rejectedPatchesAction;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePatchBaselineResponse>(await this.callApi(params, req, runtime), new CreatePatchBaselineResponse({}));
  }

  /**
   * Creates a patch baseline.
   * 
   * @param request - CreatePatchBaselineRequest
   * @returns CreatePatchBaselineResponse
   */
  async createPatchBaseline(request: CreatePatchBaselineRequest): Promise<CreatePatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPatchBaselineWithOptions(request, runtime);
  }

  /**
   * Creates an encryption parameter. Make sure that you have the permissions to call this operation.
   * 
   * @param tmpReq - CreateSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretParameterResponse
   */
  async createSecretParameterWithOptions(tmpReq: CreateSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretParameterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSecretParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!Util.isUnset(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecretParameterResponse>(await this.callApi(params, req, runtime), new CreateSecretParameterResponse({}));
  }

  /**
   * Creates an encryption parameter. Make sure that you have the permissions to call this operation.
   * 
   * @param request - CreateSecretParameterRequest
   * @returns CreateSecretParameterResponse
   */
  async createSecretParameter(request: CreateSecretParameterRequest): Promise<CreateSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecretParameterWithOptions(request, runtime);
  }

  /**
   * Creates a desired-state configuration.
   * 
   * @param tmpReq - CreateStateConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStateConfigurationResponse
   */
  async createStateConfigurationWithOptions(tmpReq: CreateStateConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateStateConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStateConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configureMode)) {
      query["ConfigureMode"] = request.configureMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduleExpression)) {
      query["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!Util.isUnset(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStateConfiguration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStateConfigurationResponse>(await this.callApi(params, req, runtime), new CreateStateConfigurationResponse({}));
  }

  /**
   * Creates a desired-state configuration.
   * 
   * @param request - CreateStateConfigurationRequest
   * @returns CreateStateConfigurationResponse
   */
  async createStateConfiguration(request: CreateStateConfigurationRequest): Promise<CreateStateConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStateConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates a template.
   * 
   * @param tmpReq - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(tmpReq: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  /**
   * Creates a template.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainResource)) {
      query["RetainResource"] = request.retainResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  /**
   * Deletes an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes an application group. You can call this operation only for the application groups which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationGroupResponse
   */
  async deleteApplicationGroupWithOptions(request: DeleteApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainResource)) {
      query["RetainResource"] = request.retainResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationGroupResponse>(await this.callApi(params, req, runtime), new DeleteApplicationGroupResponse({}));
  }

  /**
   * Deletes an application group. You can call this operation only for the application groups which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationGroupRequest
   * @returns DeleteApplicationGroupResponse
   */
  async deleteApplicationGroup(request: DeleteApplicationGroupRequest): Promise<DeleteApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Deletes multiple executions.
   * 
   * @param request - DeleteExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExecutionsResponse
   */
  async deleteExecutionsWithOptions(request: DeleteExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionIds)) {
      query["ExecutionIds"] = request.executionIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExecutionsResponse>(await this.callApi(params, req, runtime), new DeleteExecutionsResponse({}));
  }

  /**
   * Deletes multiple executions.
   * 
   * @param request - DeleteExecutionsRequest
   * @returns DeleteExecutionsResponse
   */
  async deleteExecutions(request: DeleteExecutionsRequest): Promise<DeleteExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExecutionsWithOptions(request, runtime);
  }

  /**
   * Deletes a common parameter.
   * 
   * @param request - DeleteParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterResponse
   */
  async deleteParameterWithOptions(request: DeleteParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteParameterResponse>(await this.callApi(params, req, runtime), new DeleteParameterResponse({}));
  }

  /**
   * Deletes a common parameter.
   * 
   * @param request - DeleteParameterRequest
   * @returns DeleteParameterResponse
   */
  async deleteParameter(request: DeleteParameterRequest): Promise<DeleteParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParameterWithOptions(request, runtime);
  }

  /**
   * Deletes a patch baseline.
   * 
   * @param request - DeletePatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePatchBaselineResponse
   */
  async deletePatchBaselineWithOptions(request: DeletePatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<DeletePatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePatchBaselineResponse>(await this.callApi(params, req, runtime), new DeletePatchBaselineResponse({}));
  }

  /**
   * Deletes a patch baseline.
   * 
   * @param request - DeletePatchBaselineRequest
   * @returns DeletePatchBaselineResponse
   */
  async deletePatchBaseline(request: DeletePatchBaselineRequest): Promise<DeletePatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePatchBaselineWithOptions(request, runtime);
  }

  /**
   * Deletes an encryption parameter. Make sure that you have the permissions to call the DeleteSecret operation before you call this operation.
   * 
   * @param request - DeleteSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretParameterResponse
   */
  async deleteSecretParameterWithOptions(request: DeleteSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretParameterResponse>(await this.callApi(params, req, runtime), new DeleteSecretParameterResponse({}));
  }

  /**
   * Deletes an encryption parameter. Make sure that you have the permissions to call the DeleteSecret operation before you call this operation.
   * 
   * @param request - DeleteSecretParameterRequest
   * @returns DeleteSecretParameterResponse
   */
  async deleteSecretParameter(request: DeleteSecretParameterRequest): Promise<DeleteSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretParameterWithOptions(request, runtime);
  }

  /**
   * Deletes multiple desired-state configurations at a time.
   * 
   * @param request - DeleteStateConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStateConfigurationsResponse
   */
  async deleteStateConfigurationsWithOptions(request: DeleteStateConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStateConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stateConfigurationIds)) {
      query["StateConfigurationIds"] = request.stateConfigurationIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStateConfigurations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStateConfigurationsResponse>(await this.callApi(params, req, runtime), new DeleteStateConfigurationsResponse({}));
  }

  /**
   * Deletes multiple desired-state configurations at a time.
   * 
   * @param request - DeleteStateConfigurationsRequest
   * @returns DeleteStateConfigurationsResponse
   */
  async deleteStateConfigurations(request: DeleteStateConfigurationsRequest): Promise<DeleteStateConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStateConfigurationsWithOptions(request, runtime);
  }

  /**
   * Deletes a template.
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoDeleteExecutions)) {
      query["AutoDeleteExecutions"] = request.autoDeleteExecutions;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
   * Deletes a template.
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes multiple templates.
   * 
   * @param request - DeleteTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplatesResponse
   */
  async deleteTemplatesWithOptions(request: DeleteTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoDeleteExecutions)) {
      query["AutoDeleteExecutions"] = request.autoDeleteExecutions;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateNames)) {
      query["TemplateNames"] = request.templateNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteTemplatesResponse({}));
  }

  /**
   * Deletes multiple templates.
   * 
   * @param request - DeleteTemplatesRequest
   * @returns DeleteTemplatesResponse
   */
  async deleteTemplates(request: DeleteTemplatesRequest): Promise<DeleteTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplatesWithOptions(request, runtime);
  }

  /**
   * Deploys an application group. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeployApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApplicationGroupResponse
   */
  async deployApplicationGroupWithOptions(request: DeployApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeployApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.deployParameters)) {
      query["DeployParameters"] = request.deployParameters;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApplicationGroupResponse>(await this.callApi(params, req, runtime), new DeployApplicationGroupResponse({}));
  }

  /**
   * Deploys an application group. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeployApplicationGroupRequest
   * @returns DeployApplicationGroupResponse
   */
  async deployApplicationGroup(request: DeployApplicationGroupRequest): Promise<DeployApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApplicationGroupWithOptions(request, runtime);
  }

  /**
   * 查询应用分组资源成本
   * 
   * @param request - DescribeApplicationGroupBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationGroupBillResponse
   */
  async describeApplicationGroupBillWithOptions(request: DescribeApplicationGroupBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationGroupBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationGroupBill",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationGroupBillResponse>(await this.callApi(params, req, runtime), new DescribeApplicationGroupBillResponse({}));
  }

  /**
   * 查询应用分组资源成本
   * 
   * @param request - DescribeApplicationGroupBillRequest
   * @returns DescribeApplicationGroupBillResponse
   */
  async describeApplicationGroupBill(request: DescribeApplicationGroupBillRequest): Promise<DescribeApplicationGroupBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationGroupBillWithOptions(request, runtime);
  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the Resource Access Management (RAM) policy required for template execution.
   * 
   * @param request - GenerateExecutionPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateExecutionPolicyResponse
   */
  async generateExecutionPolicyWithOptions(request: GenerateExecutionPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateExecutionPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateExecutionPolicy",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateExecutionPolicyResponse>(await this.callApi(params, req, runtime), new GenerateExecutionPolicyResponse({}));
  }

  /**
   * Queries the Resource Access Management (RAM) policy required for template execution.
   * 
   * @param request - GenerateExecutionPolicyRequest
   * @returns GenerateExecutionPolicyResponse
   */
  async generateExecutionPolicy(request: GenerateExecutionPolicyRequest): Promise<GenerateExecutionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateExecutionPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information of an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  /**
   * Queries the information of an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationGroupResponse
   */
  async getApplicationGroupWithOptions(request: GetApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationGroupResponse>(await this.callApi(params, req, runtime), new GetApplicationGroupResponse({}));
  }

  /**
   * Queries the information about an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationGroupRequest
   * @returns GetApplicationGroupResponse
   */
  async getApplicationGroup(request: GetApplicationGroupRequest): Promise<GetApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about the template of an execution, including the content of the template.
   * 
   * @param request - GetExecutionTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecutionTemplateResponse
   */
  async getExecutionTemplateWithOptions(request: GetExecutionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetExecutionTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExecutionTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExecutionTemplateResponse>(await this.callApi(params, req, runtime), new GetExecutionTemplateResponse({}));
  }

  /**
   * Queries the information about the template of an execution, including the content of the template.
   * 
   * @param request - GetExecutionTemplateRequest
   * @returns GetExecutionTemplateResponse
   */
  async getExecutionTemplate(request: GetExecutionTemplateRequest): Promise<GetExecutionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecutionTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the properties of a configuration list.
   * 
   * @param request - GetInventorySchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInventorySchemaResponse
   */
  async getInventorySchemaWithOptions(request: GetInventorySchemaRequest, runtime: $Util.RuntimeOptions): Promise<GetInventorySchemaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
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

    if (!Util.isUnset(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInventorySchema",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInventorySchemaResponse>(await this.callApi(params, req, runtime), new GetInventorySchemaResponse({}));
  }

  /**
   * Queries the properties of a configuration list.
   * 
   * @param request - GetInventorySchemaRequest
   * @returns GetInventorySchemaResponse
   */
  async getInventorySchema(request: GetInventorySchemaRequest): Promise<GetInventorySchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInventorySchemaWithOptions(request, runtime);
  }

  /**
   * Queries the details of an O\\\\\\\\\\\\&M item.
   * 
   * @param request - GetOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpsItemResponse
   */
  async getOpsItemWithOptions(request: GetOpsItemRequest, runtime: $Util.RuntimeOptions): Promise<GetOpsItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opsItemId)) {
      query["OpsItemId"] = request.opsItemId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpsItemResponse>(await this.callApi(params, req, runtime), new GetOpsItemResponse({}));
  }

  /**
   * Queries the details of an O\\\\\\\\\\\\&M item.
   * 
   * @param request - GetOpsItemRequest
   * @returns GetOpsItemResponse
   */
  async getOpsItem(request: GetOpsItemRequest): Promise<GetOpsItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpsItemWithOptions(request, runtime);
  }

  /**
   * Queries a common parameter and its value.
   * 
   * @param request - GetParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParameterResponse
   */
  async getParameterWithOptions(request: GetParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetParameterResponse>(await this.callApi(params, req, runtime), new GetParameterResponse({}));
  }

  /**
   * Queries a common parameter and its value.
   * 
   * @param request - GetParameterRequest
   * @returns GetParameterResponse
   */
  async getParameter(request: GetParameterRequest): Promise<GetParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParameterWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more parameters.
   * 
   * @param request - GetParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParametersResponse
   */
  async getParametersWithOptions(request: GetParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetParametersResponse>(await this.callApi(params, req, runtime), new GetParametersResponse({}));
  }

  /**
   * Queries the information about one or more parameters.
   * 
   * @param request - GetParametersRequest
   * @returns GetParametersResponse
   */
  async getParameters(request: GetParametersRequest): Promise<GetParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersWithOptions(request, runtime);
  }

  /**
   * Queries one or more parameters by path.
   * 
   * @param request - GetParametersByPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParametersByPathResponse
   */
  async getParametersByPathWithOptions(request: GetParametersByPathRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersByPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParametersByPath",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetParametersByPathResponse>(await this.callApi(params, req, runtime), new GetParametersByPathResponse({}));
  }

  /**
   * Queries one or more parameters by path.
   * 
   * @param request - GetParametersByPathRequest
   * @returns GetParametersByPathResponse
   */
  async getParametersByPath(request: GetParametersByPathRequest): Promise<GetParametersByPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersByPathWithOptions(request, runtime);
  }

  /**
   * Queries the information of a patch baseline.
   * 
   * @param request - GetPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPatchBaselineResponse
   */
  async getPatchBaselineWithOptions(request: GetPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatchBaselineResponse>(await this.callApi(params, req, runtime), new GetPatchBaselineResponse({}));
  }

  /**
   * Queries the information of a patch baseline.
   * 
   * @param request - GetPatchBaselineRequest
   * @returns GetPatchBaselineResponse
   */
  async getPatchBaseline(request: GetPatchBaselineRequest): Promise<GetPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatchBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the information about an encryption parameter, including the parameter value. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretParameterResponse
   */
  async getSecretParameterWithOptions(request: GetSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretParameterResponse>(await this.callApi(params, req, runtime), new GetSecretParameterResponse({}));
  }

  /**
   * Queries the information about an encryption parameter, including the parameter value. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParameterRequest
   * @returns GetSecretParameterResponse
   */
  async getSecretParameter(request: GetSecretParameterRequest): Promise<GetSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParameterWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more encryption parameters. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretParametersResponse
   */
  async getSecretParametersWithOptions(request: GetSecretParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretParametersResponse>(await this.callApi(params, req, runtime), new GetSecretParametersResponse({}));
  }

  /**
   * Queries the information about one or more encryption parameters. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersRequest
   * @returns GetSecretParametersResponse
   */
  async getSecretParameters(request: GetSecretParametersRequest): Promise<GetSecretParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParametersWithOptions(request, runtime);
  }

  /**
   * Queries encryption parameters by path. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersByPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretParametersByPathResponse
   */
  async getSecretParametersByPathWithOptions(request: GetSecretParametersByPathRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParametersByPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretParametersByPath",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretParametersByPathResponse>(await this.callApi(params, req, runtime), new GetSecretParametersByPathResponse({}));
  }

  /**
   * Queries encryption parameters by path. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersByPathRequest
   * @returns GetSecretParametersByPathResponse
   */
  async getSecretParametersByPath(request: GetSecretParametersByPathRequest): Promise<GetSecretParametersByPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParametersByPathWithOptions(request, runtime);
  }

  /**
   * Queries the settings of the delivery feature.
   * 
   * @param request - GetServiceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceSettingsResponse
   */
  async getServiceSettingsWithOptions(request: GetServiceSettingsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceSettings",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceSettingsResponse>(await this.callApi(params, req, runtime), new GetServiceSettingsResponse({}));
  }

  /**
   * Queries the settings of the delivery feature.
   * 
   * @param request - GetServiceSettingsRequest
   * @returns GetServiceSettingsResponse
   */
  async getServiceSettings(request: GetServiceSettingsRequest): Promise<GetServiceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceSettingsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a template, including the content of the template.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  /**
   * Queries the information about a template, including the content of the template.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the available actions, including atomic actions and cloud product actions.
   * 
   * @param request - ListActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionsResponse
   */
  async listActionsWithOptions(request: ListActionsRequest, runtime: $Util.RuntimeOptions): Promise<ListActionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OOSActionName)) {
      query["OOSActionName"] = request.OOSActionName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListActions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListActionsResponse>(await this.callApi(params, req, runtime), new ListActionsResponse({}));
  }

  /**
   * Queries the available actions, including atomic actions and cloud product actions.
   * 
   * @param request - ListActionsRequest
   * @returns ListActionsResponse
   */
  async listActions(request: ListActionsRequest): Promise<ListActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of application groups. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ListApplicationGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationGroupsResponse
   */
  async listApplicationGroupsWithOptions(request: ListApplicationGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
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

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationGroups",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationGroupsResponse>(await this.callApi(params, req, runtime), new ListApplicationGroupsResponse({}));
  }

  /**
   * Queries a list of application groups. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ListApplicationGroupsRequest
   * @returns ListApplicationGroupsResponse
   */
  async listApplicationGroups(request: ListApplicationGroupsRequest): Promise<ListApplicationGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of applications. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(tmpReq: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListApplicationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  /**
   * Queries a list of applications. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the logs of an execution.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListExecutionLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionLogsResponse
   */
  async listExecutionLogsWithOptions(request: ListExecutionLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
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

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutionLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionLogsResponse>(await this.callApi(params, req, runtime), new ListExecutionLogsResponse({}));
  }

  /**
   * Queries the logs of an execution.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListExecutionLogsRequest
   * @returns ListExecutionLogsResponse
   */
  async listExecutionLogs(request: ListExecutionLogsRequest): Promise<ListExecutionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionLogsWithOptions(request, runtime);
  }

  /**
   * Queries high-risk tasks in the execution of a template.
   * 
   * @param request - ListExecutionRiskyTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionRiskyTasksResponse
   */
  async listExecutionRiskyTasksWithOptions(request: ListExecutionRiskyTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionRiskyTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutionRiskyTasks",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionRiskyTasksResponse>(await this.callApi(params, req, runtime), new ListExecutionRiskyTasksResponse({}));
  }

  /**
   * Queries high-risk tasks in the execution of a template.
   * 
   * @param request - ListExecutionRiskyTasksRequest
   * @returns ListExecutionRiskyTasksResponse
   */
  async listExecutionRiskyTasks(request: ListExecutionRiskyTasksRequest): Promise<ListExecutionRiskyTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionRiskyTasksWithOptions(request, runtime);
  }

  /**
   * Queries executions. Multiple methods are supported to filter executions.
   * 
   * @param tmpReq - ListExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionsResponse
   */
  async listExecutionsWithOptions(tmpReq: ListExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListExecutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.categories)) {
      query["Categories"] = request.categories;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!Util.isUnset(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!Util.isUnset(request.executedBy)) {
      query["ExecutedBy"] = request.executedBy;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.includeChildExecution)) {
      query["IncludeChildExecution"] = request.includeChildExecution;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!Util.isUnset(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceTemplateName)) {
      query["ResourceTemplateName"] = request.resourceTemplateName;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!Util.isUnset(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionsResponse>(await this.callApi(params, req, runtime), new ListExecutionsResponse({}));
  }

  /**
   * Queries executions. Multiple methods are supported to filter executions.
   * 
   * @param request - ListExecutionsRequest
   * @returns ListExecutionsResponse
   */
  async listExecutions(request: ListExecutionsRequest): Promise<ListExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  /**
   * 获取仓库信息
   * 
   * @param request - ListGitRepositoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGitRepositoriesResponse
   */
  async listGitRepositoriesWithOptions(request: ListGitRepositoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListGitRepositoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGitRepositories",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGitRepositoriesResponse>(await this.callApi(params, req, runtime), new ListGitRepositoriesResponse({}));
  }

  /**
   * 获取仓库信息
   * 
   * @param request - ListGitRepositoriesRequest
   * @returns ListGitRepositoriesResponse
   */
  async listGitRepositories(request: ListGitRepositoriesRequest): Promise<ListGitRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGitRepositoriesWithOptions(request, runtime);
  }

  /**
   * 列出实例软件包状态
   * 
   * @param request - ListInstancePackageStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePackageStatesResponse
   */
  async listInstancePackageStatesWithOptions(request: ListInstancePackageStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancePackageStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!Util.isUnset(request.templateNames)) {
      query["TemplateNames"] = request.templateNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancePackageStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancePackageStatesResponse>(await this.callApi(params, req, runtime), new ListInstancePackageStatesResponse({}));
  }

  /**
   * 列出实例软件包状态
   * 
   * @param request - ListInstancePackageStatesRequest
   * @returns ListInstancePackageStatesResponse
   */
  async listInstancePackageStates(request: ListInstancePackageStatesRequest): Promise<ListInstancePackageStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancePackageStatesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePatchStatesResponse
   */
  async listInstancePatchStatesWithOptions(request: ListInstancePatchStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancePatchStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancePatchStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancePatchStatesResponse>(await this.callApi(params, req, runtime), new ListInstancePatchStatesResponse({}));
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchStatesRequest
   * @returns ListInstancePatchStatesResponse
   */
  async listInstancePatchStates(request: ListInstancePatchStatesRequest): Promise<ListInstancePatchStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancePatchStatesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePatchesResponse
   */
  async listInstancePatchesWithOptions(request: ListInstancePatchesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancePatchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.patchStatuses)) {
      query["PatchStatuses"] = request.patchStatuses;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancePatches",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancePatchesResponse>(await this.callApi(params, req, runtime), new ListInstancePatchesResponse({}));
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchesRequest
   * @returns ListInstancePatchesResponse
   */
  async listInstancePatches(request: ListInstancePatchesRequest): Promise<ListInstancePatchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancePatchesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an Elastic Compute Service (ECS) instance.
   * 
   * @param request - ListInventoryEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInventoryEntriesResponse
   */
  async listInventoryEntriesWithOptions(request: ListInventoryEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListInventoryEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!Util.isUnset(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInventoryEntries",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInventoryEntriesResponse>(await this.callApi(params, req, runtime), new ListInventoryEntriesResponse({}));
  }

  /**
   * Queries the configurations of an Elastic Compute Service (ECS) instance.
   * 
   * @param request - ListInventoryEntriesRequest
   * @returns ListInventoryEntriesResponse
   */
  async listInventoryEntries(request: ListInventoryEntriesRequest): Promise<ListInventoryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInventoryEntriesWithOptions(request, runtime);
  }

  /**
   * Queries O\\&M items.
   * 
   * @param tmpReq - ListOpsItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOpsItemsResponse
   */
  async listOpsItemsWithOptions(tmpReq: ListOpsItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListOpsItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListOpsItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceTags)) {
      request.resourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTags, "ResourceTags", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

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

    if (!Util.isUnset(request.resourceTagsShrink)) {
      query["ResourceTags"] = request.resourceTagsShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOpsItems",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOpsItemsResponse>(await this.callApi(params, req, runtime), new ListOpsItemsResponse({}));
  }

  /**
   * Queries O\\&M items.
   * 
   * @param request - ListOpsItemsRequest
   * @returns ListOpsItemsResponse
   */
  async listOpsItems(request: ListOpsItemsRequest): Promise<ListOpsItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpsItemsWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a common parameter.
   * 
   * @param request - ListParameterVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParameterVersionsResponse
   */
  async listParameterVersionsWithOptions(request: ListParameterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListParameterVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParameterVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListParameterVersionsResponse>(await this.callApi(params, req, runtime), new ListParameterVersionsResponse({}));
  }

  /**
   * Queries the versions of a common parameter.
   * 
   * @param request - ListParameterVersionsRequest
   * @returns ListParameterVersionsResponse
   */
  async listParameterVersions(request: ListParameterVersionsRequest): Promise<ListParameterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParameterVersionsWithOptions(request, runtime);
  }

  /**
   * Queries common parameters. Multiple methods are supported to filter common parameters.
   * 
   * @param tmpReq - ListParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParametersResponse
   */
  async listParametersWithOptions(tmpReq: ListParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListParametersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListParametersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListParametersResponse>(await this.callApi(params, req, runtime), new ListParametersResponse({}));
  }

  /**
   * Queries common parameters. Multiple methods are supported to filter common parameters.
   * 
   * @param request - ListParametersRequest
   * @returns ListParametersResponse
   */
  async listParameters(request: ListParametersRequest): Promise<ListParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParametersWithOptions(request, runtime);
  }

  /**
   * Queries a list of patch baselines.
   * 
   * @param tmpReq - ListPatchBaselinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPatchBaselinesResponse
   */
  async listPatchBaselinesWithOptions(tmpReq: ListPatchBaselinesRequest, runtime: $Util.RuntimeOptions): Promise<ListPatchBaselinesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPatchBaselinesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!Util.isUnset(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPatchBaselines",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPatchBaselinesResponse>(await this.callApi(params, req, runtime), new ListPatchBaselinesResponse({}));
  }

  /**
   * Queries a list of patch baselines.
   * 
   * @param request - ListPatchBaselinesRequest
   * @returns ListPatchBaselinesResponse
   */
  async listPatchBaselines(request: ListPatchBaselinesRequest): Promise<ListPatchBaselinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPatchBaselinesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a scheduled execution that involves O&M operations on Elastic Compute Service (ECS) instances.
   * 
   * @param request - ListResourceExecutionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExecutionStatusResponse
   */
  async listResourceExecutionStatusWithOptions(request: ListResourceExecutionStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceExecutionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceExecutionStatus",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceExecutionStatusResponse>(await this.callApi(params, req, runtime), new ListResourceExecutionStatusResponse({}));
  }

  /**
   * Queries the information about a scheduled execution that involves O&M operations on Elastic Compute Service (ECS) instances.
   * 
   * @param request - ListResourceExecutionStatusRequest
   * @returns ListResourceExecutionStatusResponse
   */
  async listResourceExecutionStatus(request: ListResourceExecutionStatusRequest): Promise<ListResourceExecutionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceExecutionStatusWithOptions(request, runtime);
  }

  /**
   * Queries versions of an encryption parameter.
   * 
   * @param request - ListSecretParameterVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretParameterVersionsResponse
   */
  async listSecretParameterVersionsWithOptions(request: ListSecretParameterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretParameterVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecretParameterVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecretParameterVersionsResponse>(await this.callApi(params, req, runtime), new ListSecretParameterVersionsResponse({}));
  }

  /**
   * Queries versions of an encryption parameter.
   * 
   * @param request - ListSecretParameterVersionsRequest
   * @returns ListSecretParameterVersionsResponse
   */
  async listSecretParameterVersions(request: ListSecretParameterVersionsRequest): Promise<ListSecretParameterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretParameterVersionsWithOptions(request, runtime);
  }

  /**
   * Queries common parameters. Multiple types of queries are supported.
   * 
   * @remarks
   * Before you call this operation, make sure that you have the permission to manage Key Management Service (KMS) secrets.
   * 
   * @param tmpReq - ListSecretParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretParametersResponse
   */
  async listSecretParametersWithOptions(tmpReq: ListSecretParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretParametersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSecretParametersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecretParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecretParametersResponse>(await this.callApi(params, req, runtime), new ListSecretParametersResponse({}));
  }

  /**
   * Queries common parameters. Multiple types of queries are supported.
   * 
   * @remarks
   * Before you call this operation, make sure that you have the permission to manage Key Management Service (KMS) secrets.
   * 
   * @param request - ListSecretParametersRequest
   * @returns ListSecretParametersResponse
   */
  async listSecretParameters(request: ListSecretParametersRequest): Promise<ListSecretParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretParametersWithOptions(request, runtime);
  }

  /**
   * Queries desired-state configurations.
   * 
   * @param tmpReq - ListStateConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStateConfigurationsResponse
   */
  async listStateConfigurationsWithOptions(tmpReq: ListStateConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<ListStateConfigurationsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListStateConfigurationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
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

    if (!Util.isUnset(request.stateConfigurationIds)) {
      query["StateConfigurationIds"] = request.stateConfigurationIds;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStateConfigurations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStateConfigurationsResponse>(await this.callApi(params, req, runtime), new ListStateConfigurationsResponse({}));
  }

  /**
   * Queries desired-state configurations.
   * 
   * @param request - ListStateConfigurationsRequest
   * @returns ListStateConfigurationsResponse
   */
  async listStateConfigurations(request: ListStateConfigurationsRequest): Promise<ListStateConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStateConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries the tags.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * Queries the tags.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to one or more resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to one or more resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the values of created tags.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
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

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * Queries the values of created tags.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries task executions. Multiple methods are supported to filter task executions.
   * 
   * @param request - ListTaskExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskExecutionsResponse
   */
  async listTaskExecutionsWithOptions(request: ListTaskExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!Util.isUnset(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.includeChildTaskExecution)) {
      query["IncludeChildTaskExecution"] = request.includeChildTaskExecution;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentTaskExecutionId)) {
      query["ParentTaskExecutionId"] = request.parentTaskExecutionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!Util.isUnset(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskExecutionsResponse>(await this.callApi(params, req, runtime), new ListTaskExecutionsResponse({}));
  }

  /**
   * Queries task executions. Multiple methods are supported to filter task executions.
   * 
   * @param request - ListTaskExecutionsRequest
   * @returns ListTaskExecutionsResponse
   */
  async listTaskExecutions(request: ListTaskExecutionsRequest): Promise<ListTaskExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersionsWithOptions(request: ListTemplateVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplateVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplateVersionsResponse>(await this.callApi(params, req, runtime), new ListTemplateVersionsResponse({}));
  }

  /**
   * Queries a list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersions(request: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  /**
   * Queries templates. Multiple methods are supported to filter templates.
   * 
   * @param tmpReq - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(tmpReq: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!Util.isUnset(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!Util.isUnset(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!Util.isUnset(request.hasTrigger)) {
      query["HasTrigger"] = request.hasTrigger;
    }

    if (!Util.isUnset(request.isExample)) {
      query["IsExample"] = request.isExample;
    }

    if (!Util.isUnset(request.isFavorite)) {
      query["IsFavorite"] = request.isFavorite;
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

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  /**
   * Queries templates. Multiple methods are supported to filter templates.
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * Notifies an execution in the Waiting state of the subsequent operations.
   * 
   * @remarks
   * You can call this operation to notify an execution in the following scenarios:
   * *   If a template contains a special task, such as an approval task, the Operation Orchestration Service (OOS) execution engine sets the execution state to Waiting when the approval task is being run. You can call this operation to specify whether to continue the execution.
   * *   If you perform debugging in the debug mode, you can call this operation to notify the execution of the subsequent operations after the execution is created or a task is complete.
   * *   If a high-risk operation task waits for approval, you can call this operation to specify whether to continue the execution.
   * 
   * @param request - NotifyExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NotifyExecutionResponse
   */
  async notifyExecutionWithOptions(request: NotifyExecutionRequest, runtime: $Util.RuntimeOptions): Promise<NotifyExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!Util.isUnset(request.loopItem)) {
      query["LoopItem"] = request.loopItem;
    }

    if (!Util.isUnset(request.notifyNote)) {
      query["NotifyNote"] = request.notifyNote;
    }

    if (!Util.isUnset(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!Util.isUnset(request.taskExecutionIds)) {
      query["TaskExecutionIds"] = request.taskExecutionIds;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NotifyExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NotifyExecutionResponse>(await this.callApi(params, req, runtime), new NotifyExecutionResponse({}));
  }

  /**
   * Notifies an execution in the Waiting state of the subsequent operations.
   * 
   * @remarks
   * You can call this operation to notify an execution in the following scenarios:
   * *   If a template contains a special task, such as an approval task, the Operation Orchestration Service (OOS) execution engine sets the execution state to Waiting when the approval task is being run. You can call this operation to specify whether to continue the execution.
   * *   If you perform debugging in the debug mode, you can call this operation to notify the execution of the subsequent operations after the execution is created or a task is complete.
   * *   If a high-risk operation task waits for approval, you can call this operation to specify whether to continue the execution.
   * 
   * @param request - NotifyExecutionRequest
   * @returns NotifyExecutionResponse
   */
  async notifyExecution(request: NotifyExecutionRequest): Promise<NotifyExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyExecutionWithOptions(request, runtime);
  }

  /**
   * Registers the default patch baseline.
   * 
   * @param request - RegisterDefaultPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDefaultPatchBaselineResponse
   */
  async registerDefaultPatchBaselineWithOptions(request: RegisterDefaultPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDefaultPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDefaultPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDefaultPatchBaselineResponse>(await this.callApi(params, req, runtime), new RegisterDefaultPatchBaselineResponse({}));
  }

  /**
   * Registers the default patch baseline.
   * 
   * @param request - RegisterDefaultPatchBaselineRequest
   * @returns RegisterDefaultPatchBaselineResponse
   */
  async registerDefaultPatchBaseline(request: RegisterDefaultPatchBaselineRequest): Promise<RegisterDefaultPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDefaultPatchBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the details or aggregate information of a configuration inventory.
   * 
   * @param request - SearchInventoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchInventoryResponse
   */
  async searchInventoryWithOptions(request: SearchInventoryRequest, runtime: $Util.RuntimeOptions): Promise<SearchInventoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchInventory",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchInventoryResponse>(await this.callApi(params, req, runtime), new SearchInventoryResponse({}));
  }

  /**
   * Queries the details or aggregate information of a configuration inventory.
   * 
   * @param request - SearchInventoryRequest
   * @returns SearchInventoryResponse
   */
  async searchInventory(request: SearchInventoryRequest): Promise<SearchInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchInventoryWithOptions(request, runtime);
  }

  /**
   * Enables or disables the feature of delivering template execution records and sets the storage location.
   * 
   * @param request - SetServiceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetServiceSettingsResponse
   */
  async setServiceSettingsWithOptions(request: SetServiceSettingsRequest, runtime: $Util.RuntimeOptions): Promise<SetServiceSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliveryOssBucketName)) {
      query["DeliveryOssBucketName"] = request.deliveryOssBucketName;
    }

    if (!Util.isUnset(request.deliveryOssEnabled)) {
      query["DeliveryOssEnabled"] = request.deliveryOssEnabled;
    }

    if (!Util.isUnset(request.deliveryOssKeyPrefix)) {
      query["DeliveryOssKeyPrefix"] = request.deliveryOssKeyPrefix;
    }

    if (!Util.isUnset(request.deliverySlsEnabled)) {
      query["DeliverySlsEnabled"] = request.deliverySlsEnabled;
    }

    if (!Util.isUnset(request.deliverySlsProjectName)) {
      query["DeliverySlsProjectName"] = request.deliverySlsProjectName;
    }

    if (!Util.isUnset(request.rdcEnterpriseId)) {
      query["RdcEnterpriseId"] = request.rdcEnterpriseId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetServiceSettings",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetServiceSettingsResponse>(await this.callApi(params, req, runtime), new SetServiceSettingsResponse({}));
  }

  /**
   * Enables or disables the feature of delivering template execution records and sets the storage location.
   * 
   * @param request - SetServiceSettingsRequest
   * @returns SetServiceSettingsResponse
   */
  async setServiceSettings(request: SetServiceSettingsRequest): Promise<SetServiceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServiceSettingsWithOptions(request, runtime);
  }

  /**
   * Starts an execution.
   * 
   * @param tmpReq - StartExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartExecutionResponse
   */
  async startExecutionWithOptions(tmpReq: StartExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartExecutionResponse> {
    Util.validateModel(tmpReq);
    let request = new StartExecutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.loopMode)) {
      query["LoopMode"] = request.loopMode;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.safetyCheck)) {
      query["SafetyCheck"] = request.safetyCheck;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartExecutionResponse>(await this.callApi(params, req, runtime), new StartExecutionResponse({}));
  }

  /**
   * Starts an execution.
   * 
   * @param request - StartExecutionRequest
   * @returns StartExecutionResponse
   */
  async startExecution(request: StartExecutionRequest): Promise<StartExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  /**
   * Adds tags to one or more resources.
   * 
   * @param tmpReq - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(tmpReq: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new TagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to one or more resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Debugs a started execution that contains an event trigger task or alert trigger task. If the operation is called, a message body is sent to the event trigger task or alert trigger task. After the trigger task receives the message body, the trigger task generates a new child execution.
   * 
   * @param request - TriggerExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerExecutionResponse
   */
  async triggerExecutionWithOptions(request: TriggerExecutionRequest, runtime: $Util.RuntimeOptions): Promise<TriggerExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerExecutionResponse>(await this.callApi(params, req, runtime), new TriggerExecutionResponse({}));
  }

  /**
   * Debugs a started execution that contains an event trigger task or alert trigger task. If the operation is called, a message body is sent to the event trigger task or alert trigger task. After the trigger task receives the message body, the trigger task generates a new child execution.
   * 
   * @param request - TriggerExecutionRequest
   * @returns TriggerExecutionResponse
   */
  async triggerExecution(request: TriggerExecutionRequest): Promise<TriggerExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerExecutionWithOptions(request, runtime);
  }

  /**
   * Removes tags from one or more resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!Util.isUnset(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from one or more resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - UpdateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationResponse
   */
  async updateApplicationWithOptions(tmpReq: UpdateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarmConfig)) {
      request.alarmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmConfig, "AlarmConfig", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alarmConfigShrink)) {
      query["AlarmConfig"] = request.alarmConfigShrink;
    }

    if (!Util.isUnset(request.deleteAlarmRulesBeforeUpdate)) {
      query["DeleteAlarmRulesBeforeUpdate"] = request.deleteAlarmRulesBeforeUpdate;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationResponse>(await this.callApi(params, req, runtime), new UpdateApplicationResponse({}));
  }

  /**
   * Updates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - UpdateApplicationRequest
   * @returns UpdateApplicationResponse
   */
  async updateApplication(request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  /**
   * Updates the information of an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - UpdateApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationGroupResponse
   */
  async updateApplicationGroupWithOptions(tmpReq: UpdateApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateApplicationGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newName)) {
      query["NewName"] = request.newName;
    }

    if (!Util.isUnset(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationGroupResponse>(await this.callApi(params, req, runtime), new UpdateApplicationGroupResponse({}));
  }

  /**
   * Updates the information of an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - UpdateApplicationGroupRequest
   * @returns UpdateApplicationGroupResponse
   */
  async updateApplicationGroup(request: UpdateApplicationGroupRequest): Promise<UpdateApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Updates an execution.
   * 
   * @param request - UpdateExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExecutionResponse
   */
  async updateExecutionWithOptions(request: UpdateExecutionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateExecutionResponse>(await this.callApi(params, req, runtime), new UpdateExecutionResponse({}));
  }

  /**
   * Updates an execution.
   * 
   * @param request - UpdateExecutionRequest
   * @returns UpdateExecutionResponse
   */
  async updateExecution(request: UpdateExecutionRequest): Promise<UpdateExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExecutionWithOptions(request, runtime);
  }

  /**
   * 更新实例软件包状态
   * 
   * @param tmpReq - UpdateInstancePackageStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstancePackageStateResponse
   */
  async updateInstancePackageStateWithOptions(tmpReq: UpdateInstancePackageStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstancePackageStateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateInstancePackageStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.configureAction)) {
      query["ConfigureAction"] = request.configureAction;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstancePackageState",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstancePackageStateResponse>(await this.callApi(params, req, runtime), new UpdateInstancePackageStateResponse({}));
  }

  /**
   * 更新实例软件包状态
   * 
   * @param request - UpdateInstancePackageStateRequest
   * @returns UpdateInstancePackageStateResponse
   */
  async updateInstancePackageState(request: UpdateInstancePackageStateRequest): Promise<UpdateInstancePackageStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstancePackageStateWithOptions(request, runtime);
  }

  /**
   * Modifies an O\\\\\\\\\\\\&M item.
   * 
   * @param tmpReq - UpdateOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOpsItemResponse
   */
  async updateOpsItemWithOptions(tmpReq: UpdateOpsItemRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOpsItemResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateOpsItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedupString)) {
      query["DedupString"] = request.dedupString;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.opsItemId)) {
      query["OpsItemId"] = request.opsItemId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.solutions)) {
      query["Solutions"] = request.solutions;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOpsItemResponse>(await this.callApi(params, req, runtime), new UpdateOpsItemResponse({}));
  }

  /**
   * Modifies an O\\\\\\\\\\\\&M item.
   * 
   * @param request - UpdateOpsItemRequest
   * @returns UpdateOpsItemResponse
   */
  async updateOpsItem(request: UpdateOpsItemRequest): Promise<UpdateOpsItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOpsItemWithOptions(request, runtime);
  }

  /**
   * Updates a common parameter.
   * 
   * @param request - UpdateParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateParameterResponse
   */
  async updateParameterWithOptions(request: UpdateParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateParameterResponse>(await this.callApi(params, req, runtime), new UpdateParameterResponse({}));
  }

  /**
   * Updates a common parameter.
   * 
   * @param request - UpdateParameterRequest
   * @returns UpdateParameterResponse
   */
  async updateParameter(request: UpdateParameterRequest): Promise<UpdateParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateParameterWithOptions(request, runtime);
  }

  /**
   * Updates a patch baseline.
   * 
   * @param tmpReq - UpdatePatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePatchBaselineResponse
   */
  async updatePatchBaselineWithOptions(tmpReq: UpdatePatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePatchBaselineResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdatePatchBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.rejectedPatches)) {
      request.rejectedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rejectedPatches, "RejectedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!Util.isUnset(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!Util.isUnset(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rejectedPatchesShrink)) {
      query["RejectedPatches"] = request.rejectedPatchesShrink;
    }

    if (!Util.isUnset(request.rejectedPatchesAction)) {
      query["RejectedPatchesAction"] = request.rejectedPatchesAction;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePatchBaselineResponse>(await this.callApi(params, req, runtime), new UpdatePatchBaselineResponse({}));
  }

  /**
   * Updates a patch baseline.
   * 
   * @param request - UpdatePatchBaselineRequest
   * @returns UpdatePatchBaselineResponse
   */
  async updatePatchBaseline(request: UpdatePatchBaselineRequest): Promise<UpdatePatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePatchBaselineWithOptions(request, runtime);
  }

  /**
   * Updates an encryption parameter.
   * 
   * @param tmpReq - UpdateSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretParameterResponse
   */
  async updateSecretParameterWithOptions(tmpReq: UpdateSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretParameterResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSecretParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSecretParameterResponse>(await this.callApi(params, req, runtime), new UpdateSecretParameterResponse({}));
  }

  /**
   * Updates an encryption parameter.
   * 
   * @param request - UpdateSecretParameterRequest
   * @returns UpdateSecretParameterResponse
   */
  async updateSecretParameter(request: UpdateSecretParameterRequest): Promise<UpdateSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretParameterWithOptions(request, runtime);
  }

  /**
   * Updates a desired-state configuration.
   * 
   * @param tmpReq - UpdateStateConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStateConfigurationResponse
   */
  async updateStateConfigurationWithOptions(tmpReq: UpdateStateConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStateConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStateConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configureMode)) {
      query["ConfigureMode"] = request.configureMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
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

    if (!Util.isUnset(request.scheduleExpression)) {
      query["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!Util.isUnset(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!Util.isUnset(request.stateConfigurationId)) {
      query["StateConfigurationId"] = request.stateConfigurationId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStateConfiguration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStateConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateStateConfigurationResponse({}));
  }

  /**
   * Updates a desired-state configuration.
   * 
   * @param request - UpdateStateConfigurationRequest
   * @returns UpdateStateConfigurationResponse
   */
  async updateStateConfiguration(request: UpdateStateConfigurationRequest): Promise<UpdateStateConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStateConfigurationWithOptions(request, runtime);
  }

  /**
   * Updates the information about an existing template.
   * 
   * @param tmpReq - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(tmpReq: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTemplateResponse({}));
  }

  /**
   * Updates the information about an existing template.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * Check whether a template is valid.
   * 
   * @param request - ValidateTemplateContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateTemplateContentResponse
   */
  async validateTemplateContentWithOptions(request: ValidateTemplateContentRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTemplateContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateTemplateContent",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateTemplateContentResponse>(await this.callApi(params, req, runtime), new ValidateTemplateContentResponse({}));
  }

  /**
   * Check whether a template is valid.
   * 
   * @param request - ValidateTemplateContentRequest
   * @returns ValidateTemplateContentResponse
   */
  async validateTemplateContent(request: ValidateTemplateContentRequest): Promise<ValidateTemplateContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTemplateContentWithOptions(request, runtime);
  }

}
