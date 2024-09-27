// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AppFailBackRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 61ZW1DY5Y3FSAOO2
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppFailBackResponseBody extends $tea.Model {
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
   * The disaster recovery switchback task ID.
   * 
   * @example
   * 3309
   */
  data?: number;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * OKITHEVRQCN6ULQG
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7036DDBE-0ABA-52D7-A39D-75E511970F07
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppFailBackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppFailBackResponseBody;
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
      body: AppFailBackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppFailOverRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  /**
   * @remarks
   * The destination zone to which you want to switch the disaster recovery application.
   * 
   * @example
   * cn-hangzhou-g
   */
  failZone?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      failZone: 'FailZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      failZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppFailOverResponseBody extends $tea.Model {
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
   * The disaster recovery switchover task ID.
   * 
   * @example
   * 7441
   */
  data?: number;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9656C816-1E9A-58D2-86D5-710678D61AF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppFailOverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AppFailOverResponseBody;
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
      body: AppFailOverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2ajbjoloa23q
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * P7RMVSVM9LOVYQOM
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource for which you want to change the resource group. Valid values: APPLICATION and TEMPLATE.
   * 
   * This parameter is required.
   * 
   * @example
   * APPLICATION
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
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
   * The HTTP status code. A value of 200 indicates that the request is successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * No business data is returned for this parameter.
   * 
   * @example
   * No business data is returned for this parameter.
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3488F1D-C444-17D0-BA4F-5374BA0F3562
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

export class CreateApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters that are used to configure the application you want to create. For example, enableMonitor specifies whether to automatically create a CloudMonitor task for the application, and enableReport specifies whether to generate reports.
   * 
   * @example
   * {"enableMonitor":"0", "enableReport":"1"}
   */
  configuration?: { [key: string]: string };
  /**
   * @remarks
   * The instances in which you want to create the application. You can create applications in an existing virtual private cloud (VPC).
   */
  instances?: CreateApplicationRequestInstances[];
  /**
   * @remarks
   * The name of the application.
   * 
   * *   The application name must be unique. You can call the [ListApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-listapplication) operation to query the existing applications.
   * *   The application name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http:// or https://`. The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * cadt-application
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application you want to create belongs.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 0KSHPM6SJU03TNZP
   */
  templateId?: string;
  /**
   * @remarks
   * The parameter values that are contained in the template. If the template contains no parameter values, the default values are used.
   * 
   * @example
   * {"variable1":"1"}
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      configuration: 'Configuration',
      instances: 'Instances',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instances: { 'type': 'array', 'itemType': CreateApplicationRequestInstances },
      name: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters that are used to configure the application you want to create. For example, enableMonitor specifies whether to automatically create a CloudMonitor task for the application, and enableReport specifies whether to generate reports.
   * 
   * @example
   * {"enableMonitor":"0", "enableReport":"1"}
   */
  configurationShrink?: string;
  /**
   * @remarks
   * The instances in which you want to create the application. You can create applications in an existing virtual private cloud (VPC).
   */
  instancesShrink?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * *   The application name must be unique. You can call the [ListApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-listapplication) operation to query the existing applications.
   * *   The application name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http:// or https://`. The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * cadt-application
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application you want to create belongs.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 0KSHPM6SJU03TNZP
   */
  templateId?: string;
  /**
   * @remarks
   * The parameter values that are contained in the template. If the template contains no parameter values, the default values are used.
   * 
   * @example
   * {"variable1":"1"}
   */
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      configurationShrink: 'Configuration',
      instancesShrink: 'Instances',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      configurationShrink: 'string',
      instancesShrink: 'string',
      name: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variablesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  data?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

export class DeleteApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

export class DeployApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * VVK605ZH00OA4MRT
   */
  applicationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the application.
   * 
   * @example
   * 123
   */
  data?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployApplicationResponseBody;
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
      body: DeployApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationASyncRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Cloud Architect Design Tools (CADT) application.
   * 
   * @example
   * BG**********UQ
   */
  applicationId?: string;
  /**
   * @remarks
   * The parameters related to the action. Specify the parameters based on the value of Operation. The parameters are passed in the map format. The following examples show how to specify the parameters if you want to change the specifications of an Elastic Compute Service (ECS) instance:
   * 
   * *   The following common parameters are required: change_type, regionId, instanceId, appId
   * *   Example values for changing the instance type of the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_instance_type","instance_type":"ecs.hfr7.2xlarge","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for stopping the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Stopped","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for starting the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Running","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for restarting the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Restart","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * 
   * Example of enumerating more than one set of parameters:
   * 
   * *   { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{\\\\"change_type\\\\":\\\\"modify_instance_type\\\\",\\\\"instance_type\\\\":\\\\"ecs.hfr7.2xlarge\\\\",\\\\"instanceId\\\\":\\\\"i-xxxxxxxxx\\\\",\\\\"regionId\\\\":\\\\"cn-beijing\\\\",\\\\"appId\\\\":\\\\"xxxxxxxxxxxxx\\\\"}" }
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{\\\\"change_type\\\\":\\\\"modify_instance_type\\\\",\\\\"instance_type\\\\":\\\\"ecs.hfr7.2xlarge\\\\",\\\\"instanceId\\\\":\\\\"i-xxxxxxxxx\\\\",\\\\"regionId\\\\":\\\\"cn-beijing\\\\",\\\\"appId\\\\":\\\\"xxxxxxxxxxxxx\\\\"}" }
   * 
   *     <!-- -->
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * This operation type is the operation type of modifying the product, some operation types are generic, and some are used alone. The following is an example of ECS deployment:
   * - The name of the ECS: rename
   * - Specificationof ecs: modifyInstanceType
   * - Startup of ecs: modifyInstanceType
   * - Stop of ecs: modifyInstanceType
   * - Restart of ecs: modifyInstanceType
   * - Ecs Tag: addTags
   * - Deletion of ecs: ecsDelete
   * - Paid type for ecs: modifyPayType
   * 
   * This parameter is required.
   * 
   * @example
   * queryTopo
   */
  operation?: string;
  /**
   * @remarks
   * Resource group ID, which is used to verify the permissions of the resource group
   * 
   * @example
   * ceshi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the service. If you want to perform operations on an Elastic Compute Service (ECS) instance, set ServiceType to ecs.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      attributes: 'Attributes',
      clientToken: 'ClientToken',
      operation: 'Operation',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      operation: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationASyncShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Cloud Architect Design Tools (CADT) application.
   * 
   * @example
   * BG**********UQ
   */
  applicationId?: string;
  /**
   * @remarks
   * The parameters related to the action. Specify the parameters based on the value of Operation. The parameters are passed in the map format. The following examples show how to specify the parameters if you want to change the specifications of an Elastic Compute Service (ECS) instance:
   * 
   * *   The following common parameters are required: change_type, regionId, instanceId, appId
   * *   Example values for changing the instance type of the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_instance_type","instance_type":"ecs.hfr7.2xlarge","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for stopping the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Stopped","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for starting the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Running","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * *   Example values for restarting the ECS instance: { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{"change_type":"modify_status","status":"Restart","instanceId":"i-xxxxxxxxx","regionId":"cn-beijing","appId":"xxxxxxxxxxxxx"}" }
   * 
   * Example of enumerating more than one set of parameters:
   * 
   * *   { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{\\\\"change_type\\\\":\\\\"modify_instance_type\\\\",\\\\"instance_type\\\\":\\\\"ecs.hfr7.2xlarge\\\\",\\\\"instanceId\\\\":\\\\"i-xxxxxxxxx\\\\",\\\\"regionId\\\\":\\\\"cn-beijing\\\\",\\\\"appId\\\\":\\\\"xxxxxxxxxxxxx\\\\"}" }
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     { "ServiceType": "ecs", "Operation": "modifyInstanceType", "Attributes": "{\\\\"change_type\\\\":\\\\"modify_instance_type\\\\",\\\\"instance_type\\\\":\\\\"ecs.hfr7.2xlarge\\\\",\\\\"instanceId\\\\":\\\\"i-xxxxxxxxx\\\\",\\\\"regionId\\\\":\\\\"cn-beijing\\\\",\\\\"appId\\\\":\\\\"xxxxxxxxxxxxx\\\\"}" }
   * 
   *     <!-- -->
   */
  attributesShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * This operation type is the operation type of modifying the product, some operation types are generic, and some are used alone. The following is an example of ECS deployment:
   * - The name of the ECS: rename
   * - Specificationof ecs: modifyInstanceType
   * - Startup of ecs: modifyInstanceType
   * - Stop of ecs: modifyInstanceType
   * - Restart of ecs: modifyInstanceType
   * - Ecs Tag: addTags
   * - Deletion of ecs: ecsDelete
   * - Paid type for ecs: modifyPayType
   * 
   * This parameter is required.
   * 
   * @example
   * queryTopo
   */
  operation?: string;
  /**
   * @remarks
   * Resource group ID, which is used to verify the permissions of the resource group
   * 
   * @example
   * ceshi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the service. If you want to perform operations on an Elastic Compute Service (ECS) instance, set ServiceType to ecs.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      attributesShrink: 'Attributes',
      clientToken: 'ClientToken',
      operation: 'Operation',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      attributesShrink: 'string',
      clientToken: 'string',
      operation: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationASyncResponseBody extends $tea.Model {
  /**
   * @remarks
   * Result code, 200 for success; Other representatives fail.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * op_xxxxxxxxxxxxxxxxxx_ecs_modifyInstanceType_BYSOQGWUV6PME412_ERMEZLXNN3K9N3OL
   */
  data?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * " "
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * SD-WEF-DSW-32ED-323DDSD-2332D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationASyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteOperationASyncResponseBody;
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
      body: ExecuteOperationASyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationSyncRequest extends $tea.Model {
  /**
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  attributes?: { [key: string]: any };
  /**
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rename
   */
  operation?: string;
  /**
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      attributes: 'Attributes',
      clientToken: 'ClientToken',
      operation: 'Operation',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      operation: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationSyncShrinkRequest extends $tea.Model {
  /**
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  attributesShrink?: string;
  /**
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rename
   */
  operation?: string;
  /**
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      attributesShrink: 'Attributes',
      clientToken: 'ClientToken',
      operation: 'Operation',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      attributesShrink: 'string',
      clientToken: 'string',
      operation: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationSyncResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * op_xxxxxxxxxxxxxxxxxx_dds_modifyInstanceType_BYSOQGWUV6PME412_ERMEZLXNN3K9N3OL
   */
  data?: ExecuteOperationSyncResponseBodyData;
  /**
   * @example
   * Access key ID cannot be null.
   */
  message?: string;
  /**
   * @example
   * FDC73B05-5331-57AA-BA93-4C9882792FF5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ExecuteOperationSyncResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteOperationSyncResponseBody;
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
      body: ExecuteOperationSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * VVK605ZH00OA4MRT
   */
  applicationId?: string;
  /**
   * @remarks
   * Queries the basic information, verification results, billing results, and deployment results of an application.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
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
   * The details of the application.
   */
  data?: GetApplicationResponseBodyData;
  /**
   * @remarks
   * Reason for the request failure
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApplicationResponseBodyData,
      message: 'string',
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

export class GetApplicationVariablesRequest extends $tea.Model {
  /**
   * @example
   * Q2P4O9YSOKCQ35L9
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariablesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetApplicationVariablesResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7036DDBE-0ABA-52D7-A39D-75E511970F07
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetApplicationVariablesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationVariablesResponseBody;
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
      body: GetApplicationVariablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariables4FailRequest extends $tea.Model {
  /**
   * @example
   * Q2P4O9YSOKCT35L9
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariables4FailResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetApplicationVariables4FailResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetApplicationVariables4FailResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariables4FailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationVariables4FailResponseBody;
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
      body: GetApplicationVariables4FailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecuteOperationResultRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * op_xxxxxxxxxxxxxxxxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is specified to verify the permissions on the resource group.
   * 
   * @example
   * testResourceId
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecuteOperationResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The detailed result of the queried operation.
   */
  data?: GetExecuteOperationResultResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * " "
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetExecuteOperationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecuteOperationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExecuteOperationResultResponseBody;
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
      body: GetExecuteOperationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoTaskStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The disaster recovery switchover task ID.
   * 
   * @example
   * 2615
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoTaskStatusResponseBody extends $tea.Model {
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
   * The status of the switchover task.
   * 
   * @example
   * Running
   */
  data?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * OKITHEVRQCN6ULQG
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 923692F0-A15B-58B4-BAF4-2AFA4AF46240
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFoTaskStatusResponseBody;
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
      body: GetFoTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPotentialFailZonesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the value of this parameter is the ID of a disaster recovery set.
   * 
   * @example
   * true
   */
  isPlanId?: boolean;
  /**
   * @remarks
   * If you set IsPlanId to false, specify the ID of a disaster recovery application. If you set IsPlanId to true, specify the ID of a disaster recovery set.
   * 
   * @example
   * FS3ATPTOSC4SE1GG
   */
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      isPlanId: 'IsPlanId',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPlanId: 'boolean',
      objectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPotentialFailZonesResponseBody extends $tea.Model {
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
   * The zones where the current disaster recovery service can be switched.
   */
  data?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified ResourceIds are not found in our records.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPotentialFailZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPotentialFailZonesResponseBody;
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
      body: GetPotentialFailZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResource4ModifyRecordRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      maxResults: 'number',
      nextToken: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResource4ModifyRecordResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResource4ModifyRecordResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetResource4ModifyRecordResponseBodyData },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResource4ModifyRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResource4ModifyRecordResponseBody;
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
      body: GetResource4ModifyRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyRequest extends $tea.Model {
  /**
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 58d5d8c5b5489150417a7cd6caa614bb
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResult4QueryInstancePrice4ModifyResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetResult4QueryInstancePrice4ModifyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResult4QueryInstancePrice4ModifyResponseBody;
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
      body: GetResult4QueryInstancePrice4ModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * Template Area
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * ResourceGroup ID
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * XFKR6WYRVS24S07R
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the template.
   */
  data?: GetTemplateResponseBodyData;
  /**
   * @remarks
   * The interface returns information
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetTokenRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the token.
   */
  data?: GetTokenResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
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
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitAppFailOverRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitAppFailOverResponseBody extends $tea.Model {
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
   * The switchover task ID.
   * 
   * @example
   * 7250
   */
  data?: number;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Unsupported Operation PrepareEvent->FailOverPrepareSuccess FoApp_DDLJK2WM8ETU9JAC
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitAppFailOverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitAppFailOverResponseBody;
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
      body: InitAppFailOverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * Keywords in the app name
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The pagination size of the resulting value cannot be less than the minimum value of 1 and cannot be greater than the maximum value of 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination page number of the resulting value cannot be less than the minimum value of 1 and cannot be greater than the maximum value of 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @remarks
   * 1 update time,<br>2 creation time
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource Id
   * 
   * @example
   * vsw-xxxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the applications to be returned.
   * 
   * @example
   * The following values are "success" and "release".
   * If the input value is "success", the returned application list includes all applications in the Deployed_Success state of successful deployment.
   * If the input value is release, the returned application list includes all applications in the release success (Destroyed_Success) and release failure (Destroyed_Failure) status.
   * If this parameter is left blank, the returned app list includes apps in all states.
   */
  status?: string;
  /**
   * @remarks
   * Template Id
   * 
   * @example
   * 0KSXXX6SJU03TXXX
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'number',
      orderType: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
      status: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * App listing information
   */
  data?: ListApplicationResponseBodyData[];
  /**
   * @remarks
   * The interface returns information
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * 2
   */
  nextToken?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListApplicationResponseBodyData },
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationResponseBody;
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
      body: ListApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoCreatedAppsResponseBody extends $tea.Model {
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
   * The information about disaster recovery plans.
   */
  data?: ListFoCreatedAppsResponseBodyData[];
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Cannot find region according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40F63F07-3AB6-53B3-8825-0580C130E3EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFoCreatedAppsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoCreatedAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFoCreatedAppsResponseBody;
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
      body: ListFoCreatedAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 1
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
   * The resource IDs. You can specify a maximum number of 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * Application
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. A maximum of 20 tags are supported.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * bp.java.nopowerContact
   */
  message?: string;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. If the NextToken parameter is empty, no next page exists.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847C9D0A-BABD-589C-8A9C-6464409EDED9
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
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

export class ListTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword that is used to search for templates.
   * 
   * @example
   * cadt
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @remarks
   * The criterion by which the returned templates are sorted. Valid values:
   * 
   * *   1: The templates are sorted by the time when they are updated.
   * *   2: The templates are sorted by the time when they are created.
   * *   3: The templates are sorted by the system.
   * *   4: The templates are sorted by the number of times that they are used.
   * *   If you specify an integer other than 1, 2, 3, and 4 or do not specify any value, the templates are sorted by the system.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag that you want to use to query templates.
   * 
   * @example
   * 1
   */
  tagList?: number;
  /**
   * @remarks
   * The type of the templates to be returned. Valid values: public and private
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      tagList: 'TagList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'number',
      orderType: 'number',
      resourceGroupId: 'string',
      tagList: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details about templates.
   */
  data?: ListTemplateResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListTemplateResponseBodyData },
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTemplateResponseBody;
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
      body: ListTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationSpecRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  instanceSpec?: ModifyApplicationSpecRequestInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceSpec: { 'type': 'array', 'itemType': ModifyApplicationSpecRequestInstanceSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationSpecShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  instanceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceSpecShrink: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationSpecResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * -1
   */
  data?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * A3488F1D-xxxx-xxxx-xxxx-5374BA0F3562
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApplicationSpecResponseBody;
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
      body: ModifyApplicationSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePrice4ModifyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  applicationId?: string;
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-uf66k9143r2ch*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      configuration: 'Configuration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePrice4ModifyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  applicationId?: string;
  configurationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-uf66k9143r2ch*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      configurationShrink: 'Configuration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      configurationShrink: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePrice4ModifyResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * taskId
   */
  data?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 9656C816-1E9A-58D2-86D5-710678D61AF1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancePrice4ModifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstancePrice4ModifyResponseBody;
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
      body: QueryInstancePrice4ModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-uf66k9143r2ch*****
   */
  instanceId?: string;
  methodName?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      methodName: 'MethodName',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      methodName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-uf66k9143r2ch*****
   */
  instanceId?: string;
  methodName?: string;
  parametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      methodName: 'MethodName',
      parametersShrink: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      methodName: 'string',
      parametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryInstanceSpec4ModifyResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 847C9D0A-BABD-589C-8A9C-6464409EDED9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryInstanceSpec4ModifyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstanceSpec4ModifyResponseBody;
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
      body: QueryInstanceSpec4ModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReConfigApplicationRequest extends $tea.Model {
  /**
   * @example
   * Q2P4O9YSOKCT35L9
   */
  appId?: string;
  /**
   * @example
   * {"${instance_type}":"ecs.c6.3xlarge"}
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReConfigApplicationResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9656C816-1E9A-58D2-86D5-710678D61AF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReConfigApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReConfigApplicationResponseBody;
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
      body: ReConfigApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 7QSXFQW46ZNGOUDM
   */
  applicationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The resource does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseApplicationResponseBody;
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
      body: ReleaseApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the application.
   * 
   * @example
   * 123
   */
  data?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateApplicationResponseBody;
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
      body: ValidateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to ValuateApplication.
   * 
   * This parameter is required.
   * 
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application you want to query belongs.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The code of the query task.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123
   */
  data?: number;
  /**
   * @remarks
   * Idempotent notation
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValuateApplicationResponseBody;
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
      body: ValuateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The instances to be replaced.
   */
  instances?: ValuateTemplateRequestInstances[];
  /**
   * @remarks
   * The ID of the resource group to which the application belongs.
   * 
   * @example
   * rg-acfmyjt3c5om3fi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0KSHPM6SJU03TNZP
   */
  templateId?: string;
  /**
   * @remarks
   * The parameter values that are contained in the template. If the template contains no parameter values, the default values are used.
   */
  variables?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      instances: 'Instances',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      instances: { 'type': 'array', 'itemType': ValuateTemplateRequestInstances },
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The instances to be replaced.
   */
  instancesShrink?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application belongs.
   * 
   * @example
   * rg-acfmyjt3c5om3fi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0KSHPM6SJU03TNZP
   */
  templateId?: string;
  /**
   * @remarks
   * The parameter values that are contained in the template. If the template contains no parameter values, the default values are used.
   */
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      instancesShrink: 'Instances',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      instancesShrink: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variablesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the inquiry.
   */
  data?: ValuateTemplateResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847C9D0A-BABD-589C-8A9C-6464409EDED9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ValuateTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValuateTemplateResponseBody;
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
      body: ValuateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestInstances extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * vpc-bp1q56trhtaq40vlq5ojm
   */
  id?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * vpc
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * vpc
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteOperationSyncResponseBodyData extends $tea.Model {
  arguments?: string;
  message?: string;
  operationId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      message: 'Message',
      operationId: 'OperationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      message: 'string',
      operationId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataChecklist extends $tea.Model {
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The message returned for verification.
   * 
   * @example
   * The ID of the region.
   */
  remark?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * vpc
   */
  resourceCode?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * vpc
   */
  resourceName?: string;
  /**
   * @remarks
   * The verification result.
   * 
   * @example
   * Finish
   */
  result?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 192.168.0.0/16
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycle: 'Lifecycle',
      region: 'Region',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      resourceName: 'ResourceName',
      result: 'Result',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycle: 'string',
      region: 'string',
      remark: 'string',
      resourceCode: 'string',
      resourceName: 'string',
      result: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataPriceList extends $tea.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs
   */
  instanceName?: string;
  /**
   * @remarks
   * Resource Fill Labels.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  /**
   * @remarks
   * The unit price of the instance.
   * 
   * @example
   * 0.01
   */
  onePrice?: number;
  /**
   * @remarks
   * The original price of the instance.
   * 
   * @example
   * 3.570
   */
  originalPrice?: number;
  /**
   * @remarks
   * The service duration.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The total price.
   * 
   * @example
   * 0.01
   */
  price?: number;
  /**
   * @remarks
   * Unit: USD per hour
   * 
   * @example
   * The service duration.
   */
  priceUnit?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The error message that is returned when a price query fails.
   * 
   * @example
   * ecs.e3.large
   */
  remark?: string;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * ecs
   */
  resourceCode?: string;
  /**
   * @remarks
   * The instance type. This parameter indicates the information about the instance type. For example, 192.168.0.0/16 may be returned for a Virtual Private Cloud (VPC) instance, ecs.g5.large may be returned for an Elastic Compute Service (ECS) instance, and slb.s1.small may be returned for a Server Load Balancer (SLB) instance. If the resource does not have a specific type, an empty value is returned.
   * 
   * @example
   * The billing method.
   */
  specification?: string;
  /**
   * @remarks
   * The creation mode. Valid values:\\
   * 1: creates a new instance.\\
   * 2: imports an instance.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      count: 'Count',
      instanceName: 'InstanceName',
      lifecycle: 'Lifecycle',
      onePrice: 'OnePrice',
      originalPrice: 'OriginalPrice',
      period: 'Period',
      price: 'Price',
      priceUnit: 'PriceUnit',
      region: 'Region',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      specification: 'Specification',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      count: 'number',
      instanceName: 'string',
      lifecycle: 'string',
      onePrice: 'number',
      originalPrice: 'number',
      period: 'number',
      price: 'number',
      priceUnit: 'string',
      region: 'string',
      remark: 'string',
      resourceCode: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataResourceList extends $tea.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  nodeLabel?: string;
  /**
   * @remarks
   * The deployment result.
   * 
   * @example
   * {"hostName":"iZ2zehnzxqixu1pywsfbx1Z","memory":32768.0,"creationTime":"2021-09-28T11:23:46Z","instanceName":"ecs","internetMaxBandwidthOut":0.0,"description":"","clusterId":"","private_ip":"192.168.0.247","instanceId":"i-2zehnzxqixu1pywsfbx1","requestId":"F1C64344-3723-51A0-855B-5F08B5634323","zoneId":"cn-beijing-b","ioOptimized":"optimized","id":"i-2zehnzxqixu1pywsfbx1","instanceNetworkType":"vpc","instanceChargeType":"PostPaid","imageId":"centos_8_4_x64_20G_alibase_20210824.vhd","serialNumber":"cee246c4-38f3-4bf3-950b-c17e88ff6527","vlanId":"","instanceType":"ecs.e3.large","cpu":4.0,"creditSpecification":"","internetMaxBandwidthIn":-1.0,"expiredTime":"2099-12-31T15:59Z","internetChargeType":"PayByTraffic","regionId":"cn-beijing","refId":"79224644_0","stoppedMode":"Not-applicable","status":"Running"}
   */
  remark?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * ecs
   */
  resourceCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2zehnzxqixu1pywsfbx1
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ecs
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource deployment result.
   * 
   * @example
   * Finish
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      lifecycle: 'Lifecycle',
      nodeLabel: 'NodeLabel',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      lifecycle: 'string',
      nodeLabel: 'string',
      remark: 'string',
      resourceCode: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * App ID
   * 
   * @example
   * VVK605ZH00OA4MRT
   */
  applicationId?: string;
  /**
   * @remarks
   * The resource tag.
   */
  checklist?: GetApplicationResponseBodyDataChecklist[];
  /**
   * @remarks
   * The time when the app was created
   * 
   * @example
   * 2021-08-09 14:37:16
   */
  createTime?: string;
  deployPercent?: number;
  /**
   * @remarks
   * Application description
   * 
   * @example
   * remark
   */
  description?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Success
   */
  error?: string;
  /**
   * @remarks
   * The URL of the image in the database.
   * 
   * @example
   * The details of the application.
   */
  imageURL?: string;
  /**
   * @remarks
   * App name
   * 
   * @example
   * 1411182597819805/sr-8DWU4RUS49NIDII0.png
   */
  name?: string;
  /**
   * @remarks
   * The billing results.
   */
  priceList?: GetApplicationResponseBodyDataPriceList[];
  /**
   * @remarks
   * The ID of the resource group to which the app belongs
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specification.
   */
  resourceList?: GetApplicationResponseBodyDataResourceList[];
  /**
   * @remarks
   * Verification passed
   * 
   * @example
   * Deployed_Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template associated with the application
   * 
   * @example
   * FYS9VZ535U20V7HT
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      checklist: 'Checklist',
      createTime: 'CreateTime',
      deployPercent: 'DeployPercent',
      description: 'Description',
      error: 'Error',
      imageURL: 'ImageURL',
      name: 'Name',
      priceList: 'PriceList',
      resourceGroupId: 'ResourceGroupId',
      resourceList: 'ResourceList',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      checklist: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataChecklist },
      createTime: 'string',
      deployPercent: 'number',
      description: 'string',
      error: 'string',
      imageURL: 'string',
      name: 'string',
      priceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPriceList },
      resourceGroupId: 'string',
      resourceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataResourceList },
      status: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariablesResponseBodyDataVariableList extends $tea.Model {
  /**
   * @example
   * ecs.c6.4xlarge
   */
  value?: string;
  /**
   * @example
   * ${instance_type}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      variable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariablesResponseBodyData extends $tea.Model {
  /**
   * @example
   * ob5epf79uv****
   */
  instanceId?: string;
  variableList?: GetApplicationVariablesResponseBodyDataVariableList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      variableList: 'VariableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      variableList: { 'type': 'array', 'itemType': GetApplicationVariablesResponseBodyDataVariableList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariables4FailResponseBodyData extends $tea.Model {
  /**
   * @example
   * instance_name
   */
  attribute?: string;
  /**
   * @example
   * cadt-app-01
   */
  defaultValue?: string;
  /**
   * @example
   * ${name}
   */
  placeHolder?: string;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * cadt-app-01
   */
  value?: string;
  /**
   * @example
   * ${name}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      defaultValue: 'DefaultValue',
      placeHolder: 'PlaceHolder',
      region: 'Region',
      value: 'Value',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      defaultValue: 'string',
      placeHolder: 'string',
      region: 'string',
      value: 'string',
      variable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecuteOperationResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The output of the operation.
   * 
   * @example
   * " "
   */
  arguments?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * “ ”
   */
  message?: string;
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * op_xxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The status of the operation.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      message: 'Message',
      operationId: 'OperationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      message: 'string',
      operationId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResource4ModifyRecordResponseBodyData extends $tea.Model {
  /**
   * @example
   * {\\"InstanceId\\": \\"\\", \\"AttributeName\\": \\"drmCommand\\", \\"Id\\": 16800, \\"Desc\\": \\"test\\"}
   */
  attribute?: string;
  /**
   * @example
   * 1726645341000
   */
  modifyTime?: string;
  /**
   * @example
   * rm-uf6308dyal1*****
   */
  resourceId?: string;
  /**
   * @example
   * Finish
   */
  status?: string;
  /**
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      modifyTime: 'ModifyTime',
      resourceId: 'ResourceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      modifyTime: 'string',
      resourceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList extends $tea.Model {
  /**
   * @example
   * 2
   */
  discountAmount?: number;
  error?: string;
  /**
   * @example
   * vpc
   */
  nodeType?: string;
  /**
   * @example
   * 3
   */
  originalAmount?: number;
  priceUnit?: string;
  promotionName?: string;
  /**
   * @example
   * 1
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalAmount: 'OriginalAmount',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalAmount: 'number',
      priceUnit: 'string',
      promotionName: 'string',
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResult4QueryInstancePrice4ModifyResponseBodyData extends $tea.Model {
  priceList?: GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList[];
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * d9a3e99b-6954-4a16-ad51-954db4a528b7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      priceList: 'PriceList',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceList: { 'type': 'array', 'itemType': GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList },
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyDataVariables extends $tea.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * instance_name
   */
  attribute?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the variable.
   * 
   * @example
   * cadt-app-01
   */
  defaultValue?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * ${name}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      dataType: 'string',
      defaultValue: 'string',
      variable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-09-22 17:08:31
   */
  createTime?: string;
  /**
   * @remarks
   * Template DescriptionD
   * 
   * @example
   * 无
   */
  description?: string;
  /**
   * @remarks
   * The path to the template schema image file
   * 
   * @example
   * bp-studio-template/sr-U37UD2YQCRJ75X5V.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the template
   * 
   * @example
   * cadt-template
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * XFKR6WYRVS24S07R
   */
  templateId?: string;
  /**
   * @remarks
   * The details of the template variables.
   */
  variables?: GetTemplateResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'array', 'itemType': GetTemplateResponseBodyDataVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to access OSS.
   * 
   * @example
   * STS.NTm*****8tu
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret used to access OSS.
   * 
   * @example
   * 9NG*****K4X
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The OSS bucket that is used to store the architecture image.
   * 
   * @example
   * bucket-1
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * https://oss-cn-beijing.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The token that is used to access the Object Storage Service (OSS) bucket that stores the architecture image.
   * 
   * @example
   * ABCD
   */
  securityToken?: string;
  /**
   * @remarks
   * The OSS bucket that is used to save data snapshots.
   * 
   * @example
   * bucket-2
   */
  snapshotBucket?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      securityToken: 'SecurityToken',
      snapshotBucket: 'SnapshotBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      securityToken: 'string',
      snapshotBucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * JIX9NEZUALGS46UI
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-15  08:30:00
   */
  createTime?: string;
  /**
   * @remarks
   * The URL of the application architecture image.
   * 
   * @example
   * https://bp-studio-daily.oss-cn-beijing.aliyuncs.com/1411182597819805/sr-Y3KR7ZSQZR2F0YX3.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * cadt-appName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application belongs.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * @example
   * Deployed_Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoCreatedAppsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * 应用ID
   * 
   * @example
   * JIX9NEZUALGS46UI
   */
  applicationId?: string;
  /**
   * @remarks
   * The URL of an error report.
   * 
   * @example
   * https://api.aliyun.com/troubleshoot?q=ServiceUnavailable&product=BPStudio&requestId=4CDA03A3-C652-1408-8ABD-7E652A7CBFB6
   */
  reportUrl?: string;
  /**
   * @remarks
   * The status of the disaster recovery plan.
   * 
   * @example
   * Deployed_Success
   * Destroyed_Success
   */
  status?: string;
  /**
   * @remarks
   * The title.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      reportUrl: 'ReportUrl',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      reportUrl: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Label 1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Label value 1
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * MW7T1820ACJX9BI7
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values: application and template.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Value
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

export class ListTemplateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2021-03-18 16:41:31
   */
  createTime?: string;
  /**
   * @remarks
   * The URL of the architecture image.
   * 
   * @example
   * bp-studio-template/sr-U37UD2YQCRJ75X5V.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * cadt-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tag that is added to the template.
   * 
   * @example
   * 1
   */
  tagId?: number;
  /**
   * @remarks
   * The name of the tag that is added to the template.
   * 
   * @example
   * Official template
   */
  tagName?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * CJQ6H0XUEQ20IYJQ
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tagId: 'TagId',
      tagName: 'TagName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tagId: 'number',
      tagName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationSpecRequestInstanceSpec extends $tea.Model {
  configuration?: { [key: string]: any };
  /**
   * @example
   * rm-2ze8f4ah378a*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyResponseBodyDataOptionalValues extends $tea.Model {
  label?: string;
  max?: number;
  min?: number;
  step?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      max: 'Max',
      min: 'Min',
      step: 'Step',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      max: 'number',
      min: 'number',
      step: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyResponseBodyData extends $tea.Model {
  optionalValues?: QueryInstanceSpec4ModifyResponseBodyDataOptionalValues[];
  static names(): { [key: string]: string } {
    return {
      optionalValues: 'OptionalValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionalValues: { 'type': 'array', 'itemType': QueryInstanceSpec4ModifyResponseBodyDataOptionalValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateRequestInstances extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpc-bp1q56trhtaq40vlq5oj
   */
  id?: string;
  /**
   * @remarks
   * The name of the application instance that is displayed on the diagram.
   * 
   * @example
   * ecs
   */
  nodeName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponseBodyDataResourceListPriceList extends $tea.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 82.99
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * ServiceUnavailable : The request has failed due to a temporary failure of the server.\\r\\nRequestId : 4AA302DB-3286-5589-8637-FF6D8507B7A9.
   */
  error?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * eip
   */
  nodeType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 83.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * USD
   */
  priceUnit?: string;
  /**
   * @remarks
   * The discount information.
   * 
   * @example
   * The discount information.
   */
  promotionName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 1687225092
   */
  resourceId?: string;
  /**
   * @remarks
   * The price at which the transaction is made.
   * 
   * @example
   * 0.01
   */
  tradePrice?: number;
  /**
   * @remarks
   * Indicates whether the instance is newly created. Valid values:\\
   * 1: The instance is newly created.\\
   * 2: The instance already exists.\\
   * 0: The price of the instance is not included.
   * 
   * @example
   * "1"
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      resourceId: 'ResourceId',
      tradePrice: 'TradePrice',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      promotionName: 'string',
      resourceId: 'string',
      tradePrice: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponseBodyDataResourceList extends $tea.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 73
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * InvalidSaleComponentFault : The request not refer to the correct order sale component.
   */
  error?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ecs
   */
  nodeType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 83.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The information about the price.
   */
  priceList?: ValuateTemplateResponseBodyDataResourceListPriceList[];
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * USD
   */
  priceUnit?: string;
  /**
   * @remarks
   * The discount information.
   * 
   * @example
   * The discount information.
   */
  promotionName?: string;
  /**
   * @remarks
   * The price at which the transaction is made.
   * 
   * @example
   * 10.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      priceList: 'PriceList',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      priceList: { 'type': 'array', 'itemType': ValuateTemplateResponseBodyDataResourceListPriceList },
      priceUnit: 'string',
      promotionName: 'string',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The result set of the inquiry.
   */
  resourceList?: ValuateTemplateResponseBodyDataResourceList[];
  static names(): { [key: string]: string } {
    return {
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceList: { 'type': 'array', 'itemType': ValuateTemplateResponseBodyDataResourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bpstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Switches a disaster recovery application back to the primary zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application back to the primary zone.
   * 
   * @param request - AppFailBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppFailBackResponse
   */
  async appFailBackWithOptions(request: AppFailBackRequest, runtime: $Util.RuntimeOptions): Promise<AppFailBackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppFailBack",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppFailBackResponse>(await this.callApi(params, req, runtime), new AppFailBackResponse({}));
  }

  /**
   * Switches a disaster recovery application back to the primary zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application back to the primary zone.
   * 
   * @param request - AppFailBackRequest
   * @returns AppFailBackResponse
   */
  async appFailBack(request: AppFailBackRequest): Promise<AppFailBackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appFailBackWithOptions(request, runtime);
  }

  /**
   * Switches a disaster recovery application to another supported zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application to another supported zone.
   * 
   * @param request - AppFailOverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppFailOverResponse
   */
  async appFailOverWithOptions(request: AppFailOverRequest, runtime: $Util.RuntimeOptions): Promise<AppFailOverResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.failZone)) {
      body["FailZone"] = request.failZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AppFailOver",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AppFailOverResponse>(await this.callApi(params, req, runtime), new AppFailOverResponse({}));
  }

  /**
   * Switches a disaster recovery application to another supported zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application to another supported zone.
   * 
   * @param request - AppFailOverRequest
   * @returns AppFailOverResponse
   */
  async appFailOver(request: AppFailOverRequest): Promise<AppFailOverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appFailOverWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which an application or template belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2021-09-31",
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
   * Changes the resource group to which an application or template belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates an application based on an official template or private template in Cloud Architect Design Tool (CADT). Before you call this operation, make sure that you understand the billing methods and prices of Alibaba Cloud services to be used in the application.
   * 
   * @param tmpReq - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(tmpReq: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    if (!Util.isUnset(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    if (!Util.isUnset(tmpReq.variables)) {
      request.variablesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.variables, "Variables", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.areaId)) {
      body["AreaId"] = request.areaId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    if (!Util.isUnset(request.instancesShrink)) {
      body["Instances"] = request.instancesShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.variablesShrink)) {
      body["Variables"] = request.variablesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2021-09-31",
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
   * Creates an application based on an official template or private template in Cloud Architect Design Tool (CADT). Before you call this operation, make sure that you understand the billing methods and prices of Alibaba Cloud services to be used in the application.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   * Before you call this operation to delete an application, make sure that the application is in the `Destroyed_Success` state. Otherwise, the application fails to be deleted.`` You can call the [GetApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-getapplication) operation to query the status of an application.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2021-09-31",
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
   * Deletes an application.
   * 
   * @remarks
   * Before you call this operation to delete an application, make sure that the application is in the `Destroyed_Success` state. Otherwise, the application fails to be deleted.`` You can call the [GetApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-getapplication) operation to query the status of an application.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deploys an application after the payment.
   * 
   * @param request - DeployApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApplicationResponse
   */
  async deployApplicationWithOptions(request: DeployApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeployApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApplicationResponse>(await this.callApi(params, req, runtime), new DeployApplicationResponse({}));
  }

  /**
   * Deploys an application after the payment.
   * 
   * @param request - DeployApplicationRequest
   * @returns DeployApplicationResponse
   */
  async deployApplication(request: DeployApplicationRequest): Promise<DeployApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApplicationWithOptions(request, runtime);
  }

  /**
   * Asynchronous execution of product operation functions.
   * 
   * @param tmpReq - ExecuteOperationASyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteOperationASyncResponse
   */
  async executeOperationASyncWithOptions(tmpReq: ExecuteOperationASyncRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteOperationASyncResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteOperationASyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.attributesShrink)) {
      body["Attributes"] = request.attributesShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteOperationASync",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteOperationASyncResponse>(await this.callApi(params, req, runtime), new ExecuteOperationASyncResponse({}));
  }

  /**
   * Asynchronous execution of product operation functions.
   * 
   * @param request - ExecuteOperationASyncRequest
   * @returns ExecuteOperationASyncResponse
   */
  async executeOperationASync(request: ExecuteOperationASyncRequest): Promise<ExecuteOperationASyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeOperationASyncWithOptions(request, runtime);
  }

  /**
   * 维护应用下资源API（同步操作）
   * 
   * @param tmpReq - ExecuteOperationSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteOperationSyncResponse
   */
  async executeOperationSyncWithOptions(tmpReq: ExecuteOperationSyncRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteOperationSyncResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteOperationSyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.attributesShrink)) {
      body["Attributes"] = request.attributesShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteOperationSync",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteOperationSyncResponse>(await this.callApi(params, req, runtime), new ExecuteOperationSyncResponse({}));
  }

  /**
   * 维护应用下资源API（同步操作）
   * 
   * @param request - ExecuteOperationSyncRequest
   * @returns ExecuteOperationSyncResponse
   */
  async executeOperationSync(request: ExecuteOperationSyncRequest): Promise<ExecuteOperationSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeOperationSyncWithOptions(request, runtime);
  }

  /**
   * The URL of the application topology image.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2021-09-31",
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
   * The URL of the application topology image.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * 获取应用输入参数
   * 
   * @param request - GetApplicationVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationVariablesResponse
   */
  async getApplicationVariablesWithOptions(request: GetApplicationVariablesRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationVariablesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationVariables",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationVariablesResponse>(await this.callApi(params, req, runtime), new GetApplicationVariablesResponse({}));
  }

  /**
   * 获取应用输入参数
   * 
   * @param request - GetApplicationVariablesRequest
   * @returns GetApplicationVariablesResponse
   */
  async getApplicationVariables(request: GetApplicationVariablesRequest): Promise<GetApplicationVariablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationVariablesWithOptions(request, runtime);
  }

  /**
   * 获取需要重新配置的变量列表
   * 
   * @param request - GetApplicationVariables4FailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationVariables4FailResponse
   */
  async getApplicationVariables4FailWithOptions(request: GetApplicationVariables4FailRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationVariables4FailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationVariables4Fail",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationVariables4FailResponse>(await this.callApi(params, req, runtime), new GetApplicationVariables4FailResponse({}));
  }

  /**
   * 获取需要重新配置的变量列表
   * 
   * @param request - GetApplicationVariables4FailRequest
   * @returns GetApplicationVariables4FailResponse
   */
  async getApplicationVariables4Fail(request: GetApplicationVariables4FailRequest): Promise<GetApplicationVariables4FailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationVariables4FailWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries the result of an operation that is performed on a service instance.
   * 
   * @param request - GetExecuteOperationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteOperationResultResponse
   */
  async getExecuteOperationResultWithOptions(request: GetExecuteOperationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetExecuteOperationResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operationId)) {
      body["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetExecuteOperationResult",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExecuteOperationResultResponse>(await this.callApi(params, req, runtime), new GetExecuteOperationResultResponse({}));
  }

  /**
   * Asynchronously queries the result of an operation that is performed on a service instance.
   * 
   * @param request - GetExecuteOperationResultRequest
   * @returns GetExecuteOperationResultResponse
   */
  async getExecuteOperationResult(request: GetExecuteOperationResultRequest): Promise<GetExecuteOperationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecuteOperationResultWithOptions(request, runtime);
  }

  /**
   * Queries the status of a disaster recovery switchover task by task ID.
   * 
   * @remarks
   * You can call this operation to query the status of a disaster recovery switchover task by task ID.
   * 
   * @param request - GetFoTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFoTaskStatusResponse
   */
  async getFoTaskStatusWithOptions(request: GetFoTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetFoTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFoTaskStatus",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFoTaskStatusResponse>(await this.callApi(params, req, runtime), new GetFoTaskStatusResponse({}));
  }

  /**
   * Queries the status of a disaster recovery switchover task by task ID.
   * 
   * @remarks
   * You can call this operation to query the status of a disaster recovery switchover task by task ID.
   * 
   * @param request - GetFoTaskStatusRequest
   * @returns GetFoTaskStatusResponse
   */
  async getFoTaskStatus(request: GetFoTaskStatusRequest): Promise<GetFoTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFoTaskStatusWithOptions(request, runtime);
  }

  /**
   * Queries the zones where the specified disaster recovery service can be switched.
   * 
   * @remarks
   * You can call this operation to query the zones where the specified disaster recovery service can be switched.
   * 
   * @param request - GetPotentialFailZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPotentialFailZonesResponse
   */
  async getPotentialFailZonesWithOptions(request: GetPotentialFailZonesRequest, runtime: $Util.RuntimeOptions): Promise<GetPotentialFailZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isPlanId)) {
      body["IsPlanId"] = request.isPlanId;
    }

    if (!Util.isUnset(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPotentialFailZones",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPotentialFailZonesResponse>(await this.callApi(params, req, runtime), new GetPotentialFailZonesResponse({}));
  }

  /**
   * Queries the zones where the specified disaster recovery service can be switched.
   * 
   * @remarks
   * You can call this operation to query the zones where the specified disaster recovery service can be switched.
   * 
   * @param request - GetPotentialFailZonesRequest
   * @returns GetPotentialFailZonesResponse
   */
  async getPotentialFailZones(request: GetPotentialFailZonesRequest): Promise<GetPotentialFailZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPotentialFailZonesWithOptions(request, runtime);
  }

  /**
   * 获取询价应用变配记录
   * 
   * @param request - GetResource4ModifyRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResource4ModifyRecordResponse
   */
  async getResource4ModifyRecordWithOptions(request: GetResource4ModifyRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetResource4ModifyRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetResource4ModifyRecord",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResource4ModifyRecordResponse>(await this.callApi(params, req, runtime), new GetResource4ModifyRecordResponse({}));
  }

  /**
   * 获取询价应用变配记录
   * 
   * @param request - GetResource4ModifyRecordRequest
   * @returns GetResource4ModifyRecordResponse
   */
  async getResource4ModifyRecord(request: GetResource4ModifyRecordRequest): Promise<GetResource4ModifyRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResource4ModifyRecordWithOptions(request, runtime);
  }

  /**
   * 获取询价结果
   * 
   * @param request - GetResult4QueryInstancePrice4ModifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResult4QueryInstancePrice4ModifyResponse
   */
  async getResult4QueryInstancePrice4ModifyWithOptions(request: GetResult4QueryInstancePrice4ModifyRequest, runtime: $Util.RuntimeOptions): Promise<GetResult4QueryInstancePrice4ModifyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetResult4QueryInstancePrice4Modify",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResult4QueryInstancePrice4ModifyResponse>(await this.callApi(params, req, runtime), new GetResult4QueryInstancePrice4ModifyResponse({}));
  }

  /**
   * 获取询价结果
   * 
   * @param request - GetResult4QueryInstancePrice4ModifyRequest
   * @returns GetResult4QueryInstancePrice4ModifyResponse
   */
  async getResult4QueryInstancePrice4Modify(request: GetResult4QueryInstancePrice4ModifyRequest): Promise<GetResult4QueryInstancePrice4ModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResult4QueryInstancePrice4ModifyWithOptions(request, runtime);
  }

  /**
   * Get template images and information about architecture diagrams.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      body["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2021-09-31",
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
   * Get template images and information about architecture diagrams.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Obtains a temporary token that is used to read the architecture diagram. The validity period of the token is 30 minutes.
   * 
   * @remarks
   * >Danger:  This API is no longer recommended, and the image related to the Application has included access authorization in the GetApplication property.
   * 
   * @deprecated OpenAPI GetToken is deprecated, please use BPStudio::2021-09-31::GetApplication instead.
   * 
   * @param request - GetTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  // Deprecated
  async getTokenWithOptions(request: GetTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * Obtains a temporary token that is used to read the architecture diagram. The validity period of the token is 30 minutes.
   * 
   * @remarks
   * >Danger:  This API is no longer recommended, and the image related to the Application has included access authorization in the GetApplication property.
   * 
   * @deprecated OpenAPI GetToken is deprecated, please use BPStudio::2021-09-31::GetApplication instead.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  // Deprecated
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  /**
   * Prepares for application switchover and initiates a switchover task.
   * 
   * @remarks
   * You can call this operation to prepare for application switchover and initiate a switchover task.
   * 
   * @param request - InitAppFailOverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitAppFailOverResponse
   */
  async initAppFailOverWithOptions(request: InitAppFailOverRequest, runtime: $Util.RuntimeOptions): Promise<InitAppFailOverResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitAppFailOver",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitAppFailOverResponse>(await this.callApi(params, req, runtime), new InitAppFailOverResponse({}));
  }

  /**
   * Prepares for application switchover and initiates a switchover task.
   * 
   * @remarks
   * You can call this operation to prepare for application switchover and initiate a switchover task.
   * 
   * @param request - InitAppFailOverRequest
   * @returns InitAppFailOverResponse
   */
  async initAppFailOver(request: InitAppFailOverRequest): Promise<InitAppFailOverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initAppFailOverWithOptions(request, runtime);
  }

  /**
   * This API provides a list of all applications under the current user. The optional keyword parameter defines the keywords contained in the application name.
   * 
   * @param request - ListApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationResponse
   */
  async listApplicationWithOptions(request: ListApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationResponse>(await this.callApi(params, req, runtime), new ListApplicationResponse({}));
  }

  /**
   * This API provides a list of all applications under the current user. The optional keyword parameter defines the keywords contained in the application name.
   * 
   * @param request - ListApplicationRequest
   * @returns ListApplicationResponse
   */
  async listApplication(request: ListApplicationRequest): Promise<ListApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationWithOptions(request, runtime);
  }

  /**
   * Queries disaster recovery plans.
   * 
   * @remarks
   * You can call this operation to query all disaster recovery plans.
   * 
   * @param request - ListFoCreatedAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFoCreatedAppsResponse
   */
  async listFoCreatedAppsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListFoCreatedAppsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListFoCreatedApps",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFoCreatedAppsResponse>(await this.callApi(params, req, runtime), new ListFoCreatedAppsResponse({}));
  }

  /**
   * Queries disaster recovery plans.
   * 
   * @remarks
   * You can call this operation to query all disaster recovery plans.
   * @returns ListFoCreatedAppsResponse
   */
  async listFoCreatedApps(): Promise<ListFoCreatedAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoCreatedAppsWithOptions(runtime);
  }

  /**
   * Queries the tags of one or more applications or templates.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2021-09-31",
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
   * Queries the tags of one or more applications or templates.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries templates, including information such as the template name, architecture image URL, and URL of the serialized architecture image file.
   * 
   * @param request - ListTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateResponse
   */
  async listTemplateWithOptions(request: ListTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagList)) {
      body["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplate",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplateResponse>(await this.callApi(params, req, runtime), new ListTemplateResponse({}));
  }

  /**
   * Queries templates, including information such as the template name, architecture image URL, and URL of the serialized architecture image file.
   * 
   * @param request - ListTemplateRequest
   * @returns ListTemplateResponse
   */
  async listTemplate(request: ListTemplateRequest): Promise<ListTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateWithOptions(request, runtime);
  }

  /**
   * 提交应用变配
   * 
   * @param tmpReq - ModifyApplicationSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApplicationSpecResponse
   */
  async modifyApplicationSpecWithOptions(tmpReq: ModifyApplicationSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApplicationSpecResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyApplicationSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceSpec)) {
      request.instanceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceSpec, "InstanceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceSpecShrink)) {
      body["InstanceSpec"] = request.instanceSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyApplicationSpec",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyApplicationSpecResponse>(await this.callApi(params, req, runtime), new ModifyApplicationSpecResponse({}));
  }

  /**
   * 提交应用变配
   * 
   * @param request - ModifyApplicationSpecRequest
   * @returns ModifyApplicationSpecResponse
   */
  async modifyApplicationSpec(request: ModifyApplicationSpecRequest): Promise<ModifyApplicationSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApplicationSpecWithOptions(request, runtime);
  }

  /**
   * 查询变配价格
   * 
   * @param tmpReq - QueryInstancePrice4ModifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstancePrice4ModifyResponse
   */
  async queryInstancePrice4ModifyWithOptions(tmpReq: QueryInstancePrice4ModifyRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstancePrice4ModifyResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryInstancePrice4ModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstancePrice4Modify",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstancePrice4ModifyResponse>(await this.callApi(params, req, runtime), new QueryInstancePrice4ModifyResponse({}));
  }

  /**
   * 查询变配价格
   * 
   * @param request - QueryInstancePrice4ModifyRequest
   * @returns QueryInstancePrice4ModifyResponse
   */
  async queryInstancePrice4Modify(request: QueryInstancePrice4ModifyRequest): Promise<QueryInstancePrice4ModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstancePrice4ModifyWithOptions(request, runtime);
  }

  /**
   * 查询变配规格列表
   * 
   * @param tmpReq - QueryInstanceSpec4ModifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceSpec4ModifyResponse
   */
  async queryInstanceSpec4ModifyWithOptions(tmpReq: QueryInstanceSpec4ModifyRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceSpec4ModifyResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryInstanceSpec4ModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.methodName)) {
      body["MethodName"] = request.methodName;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceSpec4Modify",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceSpec4ModifyResponse>(await this.callApi(params, req, runtime), new QueryInstanceSpec4ModifyResponse({}));
  }

  /**
   * 查询变配规格列表
   * 
   * @param request - QueryInstanceSpec4ModifyRequest
   * @returns QueryInstanceSpec4ModifyResponse
   */
  async queryInstanceSpec4Modify(request: QueryInstanceSpec4ModifyRequest): Promise<QueryInstanceSpec4ModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceSpec4ModifyWithOptions(request, runtime);
  }

  /**
   * 重新配置应用
   * 
   * @param request - ReConfigApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReConfigApplicationResponse
   */
  async reConfigApplicationWithOptions(request: ReConfigApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ReConfigApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.variables)) {
      body["Variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReConfigApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReConfigApplicationResponse>(await this.callApi(params, req, runtime), new ReConfigApplicationResponse({}));
  }

  /**
   * 重新配置应用
   * 
   * @param request - ReConfigApplicationRequest
   * @returns ReConfigApplicationResponse
   */
  async reConfigApplication(request: ReConfigApplicationRequest): Promise<ReConfigApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reConfigApplicationWithOptions(request, runtime);
  }

  /**
   * Releases the resources of an application.
   * 
   * @param request - ReleaseApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseApplicationResponse
   */
  async releaseApplicationWithOptions(request: ReleaseApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseApplicationResponse>(await this.callApi(params, req, runtime), new ReleaseApplicationResponse({}));
  }

  /**
   * Releases the resources of an application.
   * 
   * @param request - ReleaseApplicationRequest
   * @returns ReleaseApplicationResponse
   */
  async releaseApplication(request: ReleaseApplicationRequest): Promise<ReleaseApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseApplicationWithOptions(request, runtime);
  }

  /**
   * Verifies the resources of an application. ValidateApplication is an asynchronous operation. You can call the GetApplication operation to query the verification result.
   * 
   * @param request - ValidateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateApplicationResponse
   */
  async validateApplicationWithOptions(request: ValidateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ValidateApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateApplicationResponse>(await this.callApi(params, req, runtime), new ValidateApplicationResponse({}));
  }

  /**
   * Verifies the resources of an application. ValidateApplication is an asynchronous operation. You can call the GetApplication operation to query the verification result.
   * 
   * @param request - ValidateApplicationRequest
   * @returns ValidateApplicationResponse
   */
  async validateApplication(request: ValidateApplicationRequest): Promise<ValidateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the prices of resources of an application. You can call the GetApplication operation to obtain the query results.
   * 
   * @param request - ValuateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValuateApplicationResponse
   */
  async valuateApplicationWithOptions(request: ValuateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ValuateApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValuateApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValuateApplicationResponse>(await this.callApi(params, req, runtime), new ValuateApplicationResponse({}));
  }

  /**
   * Queries the prices of resources of an application. You can call the GetApplication operation to obtain the query results.
   * 
   * @param request - ValuateApplicationRequest
   * @returns ValuateApplicationResponse
   */
  async valuateApplication(request: ValuateApplicationRequest): Promise<ValuateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.valuateApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the price of a template.
   * 
   * @param tmpReq - ValuateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValuateTemplateResponse
   */
  async valuateTemplateWithOptions(tmpReq: ValuateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ValuateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new ValuateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    if (!Util.isUnset(tmpReq.variables)) {
      request.variablesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.variables, "Variables", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.areaId)) {
      body["AreaId"] = request.areaId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instancesShrink)) {
      body["Instances"] = request.instancesShrink;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.variablesShrink)) {
      body["Variables"] = request.variablesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValuateTemplate",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValuateTemplateResponse>(await this.callApi(params, req, runtime), new ValuateTemplateResponse({}));
  }

  /**
   * Queries the price of a template.
   * 
   * @param request - ValuateTemplateRequest
   * @returns ValuateTemplateResponse
   */
  async valuateTemplate(request: ValuateTemplateRequest): Promise<ValuateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.valuateTemplateWithOptions(request, runtime);
  }

}
