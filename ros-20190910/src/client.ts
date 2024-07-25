// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelStackOperationRequest extends $tea.Model {
  /**
   * @remarks
   * The operations that you want to cancel on the stack.
   */
  allowedStackOperations?: string[];
  /**
   * @remarks
   * The method that you want to use to cancel the operations. Valid values:
   * 
   * *   Quick: cancels the operations on the stack at the earliest opportunity. In this case, Resource Orchestration Service (ROS) stops scheduling new resources and stops running resources at the earliest opportunity. If you use this method, the resource status may become invalid and subsequent stack operations may be affected.
   * *   Safe (default): cancels the operations on the stack in a secure manner. In this case, ROS stops scheduling new resources and waits for running resources to be stopped.
   * 
   * @example
   * Safe
   */
  cancelType?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      allowedStackOperations: 'AllowedStackOperations',
      cancelType: 'CancelType',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedStackOperations: { 'type': 'array', 'itemType': 'string' },
      cancelType: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelStackOperationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class CancelStackOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelStackOperationResponseBody;
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
      body: CancelStackOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUpdateStackRequest extends $tea.Model {
  /**
   * @remarks
   * The method to cancel the update operation. Valid values:
   * 
   * *   Quick: cancels the update of a stack as soon as possible.
   * *   Safe: cancels the update of a stack as safely as possible.
   * 
   * @example
   * Safe
   */
  cancelType?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelType: 'CancelType',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelType: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUpdateStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class CancelUpdateStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelUpdateStackResponseBody;
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
      body: CancelUpdateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether only to validate the stack in the request. Valid values:
   * 
   * *   true: only validates the stack.
   * *   false (default): validates and continues to create the stack.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The mode in which ROS continues to create the stack. Valid values:
   * 
   * *   Recreate (default)
   * 
   *     If you set this parameter to Recreate, ROS continues to create only the following types of resources:
   * 
   *     *   Resources that fail to be created
   *     *   Resources that you specify for RecreatingResources.N
   *     *   Dependencies of the resources that you specify for RecreatingResources.N
   *     *   Resources that you have not created
   * 
   * > RecreatingResources.N, TemplateBody, TemplateURL, and Parameters take effect only when Mode is set to Recreate.
   * 
   * *   Ignore
   * 
   *     *   ROS ignores and discards resources that fail to be created and you have not created, and considers that the stack is successfully created.
   *     *   The body of the template that you use to create the stack is changed.
   * 
   * > This mode is available only for ROS stacks.
   * 
   * @example
   * Recreate
   */
  mode?: string;
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources.
   * 
   * By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0.
   * 
   * > - If you set this parameter to an integer that is greater than 0, the integer is used.
   * > - If you set this parameter to 0, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * > - If you leave this parameter empty, the value that you specified for this parameter in the previous request is used. If you left this parameter empty in the previous request, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * > - If you set this parameter to a specific value, ROS associates the value with the stack. The value affects subsequent operations on the stack.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The template parameters that you want to use to override specific parameters.
   */
  parameters?: ContinueCreateStackRequestParameters[];
  /**
   * @remarks
   * The name of the RAM role. Resource Orchestration Service (ROS) assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the RAM role to perform operations on the stack. If you have permissions to perform operations on the stack but do not have permissions to use the RAM role, ROS still assumes the RAM role. You must make sure that the least privileges are granted to the RAM role.\\
   * If you do not specify this parameter, ROS assumes the existing role that is associated with the stack. If no roles are available, ROS uses a temporary credential that is generated from the credentials of your account.\\
   * The name of the RAM role can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The options that ROS adopts when ROS continues to create the stack.
   */
  recreatingOptions?: string[];
  /**
   * @remarks
   * The resources that ROS continues to create after the resources failed to be created. You can add new resources to the resources that ROS continues to create. ROS continues to create all dependencies of the new resources.
   * 
   * > This parameter is available only for ROS stacks.
   * 
   * @example
   * WebServer
   */
  recreatingResources?: string[];
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length.\\
   * If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * A ROS template is subject to the following limits:
   * 
   * *   You can modify only the following sections in the template: Description, Metadata, Resources, and Outputs.
   * 
   * *   You cannot add sections to or remove sections from the template.
   * 
   * *   The Resources section is subject to the following limits:
   * 
   *     *   You cannot delete the resources or change the template body for the resources that you do not want to continue to create.
   *     *   You can delete the resources or change the template body for the resources that you want to continue to create.
   *     *   You can add resources to this section.
   * 
   *  
   * 
   * > - This parameter takes effect only when Mode is set to Recreate.
   * > - You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId. If you do not specify the parameters, the existing template is used.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * > - This parameter takes effect when `Mode` is set to `Recreate`. When you specify TemplateId of a template, the template is subject to the limits that are described for `TemplateBody` in this topic.
   * > - You can specify only one of the following parameters: `TemplateBody`, `TemplateURL`, and `TemplateId`. If you do not specify the parameters, the existing template is used.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > - This parameter takes effect only when Mode is set to Recreate. When you specify TemplateURL of a template, the template is subject to the limits that are described for TemplateBody in this topic.
   * > - You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId. If you do not specify the parameters, the existing template is used.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      mode: 'Mode',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      recreatingOptions: 'RecreatingOptions',
      recreatingResources: 'RecreatingResources',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      mode: 'string',
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': ContinueCreateStackRequestParameters },
      ramRoleName: 'string',
      recreatingOptions: { 'type': 'array', 'itemType': 'string' },
      recreatingResources: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The validation result.
   */
  dryRunResult?: ContinueCreateStackResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: ContinueCreateStackResponseBodyDryRunResult,
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueCreateStackResponseBody;
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
      body: ContinueCreateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAITaskRequest extends $tea.Model {
  prompt?: string;
  /**
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  /**
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  template?: string;
  /**
   * @example
   * ROS
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      taskType: 'TaskType',
      template: 'Template',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      taskType: 'string',
      template: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAITaskResponseBody extends $tea.Model {
  /**
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * t-asas*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAITaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAITaskResponseBody;
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
      body: CreateAITaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the change set.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or a letter.
   * 
   * > Make sure that the name is unique among all names of change sets that are associated with the specified stack.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChangeSet
   */
  changeSetName?: string;
  /**
   * @remarks
   * The type of the change set. Valid values:
   * 
   * *   CREATE: creates a change set for a new stack.
   * *   UPDATE (default): creates a change set for an existing stack.
   * *   IMPORT: creates a change set for a new stack or an existing stack to import resources that are not managed by ROS.
   * 
   * If you set ChangeSetType to CREATE, ROS creates a stack. The stack remains in the `REVIEW_IN_PROGRESS` state until you execute the change set.
   * 
   * > 
   * 
   * *   You cannot set ChangeSetType to UPDATE when you create a change set for a new stack. You cannot set ChangeSetType to CREATE when you create a change set for an existing stack.
   * 
   * *   If you set ChangeSetType to Import, you cannot configure a stack policy. You can specify ChangeSetType only when you create or update a stack.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_) and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the change set. The description can be up to 1,024 bytes in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable rollback when the stack fails to be created.\\
   * Valid values:
   * 
   * *   true: disables rollback for the stack when the stack fails to be created.
   * *   false (default): enables rollback for the stack when the stack fails to be created.
   * 
   * > This parameter takes effect only if you set ChangeSetType to CREATE or IMPORT.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The callback URLs that are used to receive stack events.
   * 
   * @example
   * http://my-site.com/ros-notify
   */
  notificationURLs?: string[];
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources. By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0. If you set this parameter to a specific value, ROS associates the value with the stack. The value can affect subsequent operations on the stack.
   * 
   * This parameter takes effect only if you set ChangeSetType to CREATE or UPDATE.
   * 
   * *   Valid values for change sets of the CREATE type:
   * 
   *     *   If you set this parameter to an integer that is greater than 0, the integer is used.
   *     *   If you set this parameter to 0 or leave this parameter empty, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * 
   * *   Valid values for change sets of the UPDATE type:
   * 
   *     *   If you set this parameter to an integer that is greater than 0, the integer is used.
   *     *   If you set this parameter to 0, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   *     *   If you leave this parameter empty, the value that you specified for this parameter in the previous request is used. If you left this parameter empty in the previous request, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The parameters that are defined in the template.
   */
  parameters?: CreateChangeSetRequestParameters[];
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role. ROS assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the RAM role to perform operations on the stack. If you have permissions to perform operations on the stack, ROS assumes the RAM role even if you do not have permissions to use the RAM role. You must make sure that permissions are granted to the RAM role based on the principle of least privilege.\\
   * If you do not specify this parameter, ROS assumes the existing role of the stack. If no roles are available, ROS uses a temporary credential that is generated from the credentials of your account.\\
   * The RAM role name can be up to 64 characters in length.
   * 
   * For more information about RAM roles, see [Use a stack role](https://help.aliyun.com/document_detail/2568025.html).
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the change set.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable replacement update if a resource property is changed and you cannot modify the new resource property. For a change, the physical ID of the resource remains unchanged. For a replacement update, the existing resource is deleted, a new resource is created, and the physical ID of the resource is changed. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * > Operations that you perform to modify the resource properties for an update take precedence over operations you perform to replace the resource properties for an update. This parameter takes effect only if you set ChangeSetType to UPDATE.
   * 
   * @example
   * Disabled
   */
  replacementOption?: string;
  /**
   * @remarks
   * The resources that you want to import to the stack.
   */
  resourcesToImport?: CreateChangeSetRequestResourcesToImport[];
  /**
   * @remarks
   * The ID of the stack for which you want to create the change set. ROS compares the stack information with the information that you submit, such as an updated template or parameter value, to generate the change set.\\
   * You can call the [ListStacks](https://help.aliyun.com/document_detail/610818.html) operation to query the stack ID.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to UPDATE or IMPORT.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack for which you want to create the change set.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or a letter.
   * 
   * > This parameter takes effect only if you set ChangeSetType to CREATE or IMPORT.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The policy body must be 1 to 16,384 bytes in length.
   * 
   * If you set ChangeSetType to **CREATE**, you can specify StackPolicyBody or StackPolicyURL.
   * 
   * If you set ChangeSetType to **UPDATE**, you can specify only one of the following parameters:
   * 
   * *   StackPolicyBody
   * *   StackPolicyURL
   * *   StackPolicyDuringUpdateBody
   * *   StackPolicyDuringUpdateURL
   * 
   * @example
   * {"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The structure of the temporary overriding stack policy. The policy body must be 1 to 16,384 bytes in length.\\
   * If you need to update protected resources, specify a temporary overriding stack policy for the resources during the update. If you do not specify a temporary overriding stack policy, the existing stack policy that is associated with the stack is used.\\
   * This parameter takes effect only if you set ChangeSetType to UPDATE. You can specify only one of the following parameters:
   * 
   * *   StackPolicyBody
   * *   StackPolicyURL
   * *   StackPolicyDuringUpdateBody
   * *   StackPolicyDuringUpdateURL
   * 
   * @example
   * {"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}
   */
  stackPolicyDuringUpdateBody?: string;
  /**
   * @remarks
   * The URL of the stack policy based on which the stack is updated. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/stack-policy/demo and oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length.
   * 
   * > If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * The URL can be up to 1,350 bytes in length.\\
   * If you need to update protected resources, specify a temporary overriding stack policy for the resources during the update. If you do not specify a stack policy, the existing policy that is associated with the stack is used. This parameter takes effect only if you set ChangeSetType to UPDATE. You can specify only one of the following parameters:
   * 
   * *   StackPolicyBody
   * *   StackPolicyURL
   * *   StackPolicyDuringUpdateBody
   * *   StackPolicyDuringUpdateURL
   * 
   * @example
   * oss://ros/stack-policy/demo
   */
  stackPolicyDuringUpdateURL?: string;
  /**
   * @remarks
   * The URL of the file that contains the stack policy. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length.
   * 
   * The URL can be up to 1,350 bytes in length.
   * 
   * >  If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * If you set ChangeSetType to **CREATE**, you can specify StackPolicyBody or StackPolicyURL.
   * 
   * If you set ChangeSetType to **UPDATE**, you can specify only one of the following parameters:
   * 
   * *   StackPolicyBody
   * *   StackPolicyURL
   * *   StackPolicyDuringUpdateBody
   * *   StackPolicyDuringUpdateURL
   * 
   * @example
   * oss://ros/stack-policy/demo
   */
  stackPolicyURL?: string;
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared templates and private templates.
   * 
   * You can call the [ListTemplates](https://help.aliyun.com/document_detail/610842.html) operation to query the template ID.
   * 
   * >  You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the resource scenario. In this example, this parameter specifies the ID of a resource management scenario.
   * 
   * This parameter takes effect only when ChangeSetType is set to IMPORT. TemplateScratchId is supported only when you import resources to create a new stack.
   * 
   * If you want to use a resource management scenario to import resources, you can specify only TemplateScratchId rather than configuring parameters related to templates.
   * 
   * You can call the [ListTemplateScratches](https://help.aliyun.com/document_detail/610832.html) operation to query the ID of the resource management scenario.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * > If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template.
   * 
   * > This parameter takes effect only if you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The amount of time that can elapse before the stack enters the CREATE_FAILED or UPDATE_FAILED state.\\
   * If you set ChangeSetType to CREATE, this parameter is required. If you set ChangeSetType to UPDATE, this parameter is optional.
   * 
   * *   Unit: minutes.
   * *   Valid values: 10 to 1440.
   * *   Default value: 60.
   * 
   * @example
   * 12
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * Specifies whether to use the values that were passed last time for the parameters that you do not specify in the current request. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * > This parameter takes effect only if you set ChangeSetType to UPDATE or IMPORT.
   * 
   * @example
   * true
   */
  usePreviousParameters?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      clientToken: 'ClientToken',
      description: 'Description',
      disableRollback: 'DisableRollback',
      notificationURLs: 'NotificationURLs',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      replacementOption: 'ReplacementOption',
      resourcesToImport: 'ResourcesToImport',
      stackId: 'StackId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      stackPolicyURL: 'StackPolicyURL',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      usePreviousParameters: 'UsePreviousParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetName: 'string',
      changeSetType: 'string',
      clientToken: 'string',
      description: 'string',
      disableRollback: 'boolean',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': CreateChangeSetRequestParameters },
      ramRoleName: 'string',
      regionId: 'string',
      replacementOption: 'string',
      resourcesToImport: { 'type': 'array', 'itemType': CreateChangeSetRequestResourcesToImport },
      stackId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyDuringUpdateBody: 'string',
      stackPolicyDuringUpdateURL: 'string',
      stackPolicyURL: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      usePreviousParameters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * e85abe0c-6528-43fb-ae93-fdf8de22****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateChangeSetResponseBody;
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
      body: CreateChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * You can specify the ID of the stack that you want to diagnose.
   * 
   * @example
   * 37A5679B-8488-5A5D-8D5C-90E66A577A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The type of the item that is diagnosed. Set the value to Stack, which specifies that the stack is diagnosed.
   * 
   * @example
   * Stack
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The language of the diagnostic report to be generated. Only Chinese and English are supported.
   * 
   * Valid values:
   * 
   * *   zh-cn
   * *   en
   * 
   * @example
   * zh-cn
   */
  lang?: string;
  /**
   * @remarks
   * The name of the product that is diagonosed.
   * 
   * @example
   * ros
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticKey: 'DiagnosticKey',
      diagnosticType: 'DiagnosticType',
      lang: 'Lang',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticKey: 'string',
      diagnosticType: 'string',
      lang: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The type of the item that is diagnosed.
   * 
   * @example
   * Stack
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-e94e39a1274d44b6****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 943B24D7-1A67-55A4-B045-818F90693D3A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      diagnosticType: 'DiagnosticType',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportId: 'ReportId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      diagnosticType: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiagnosticResponseBody;
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
      body: CreateDiagnosticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The creation option for the stack. Valid values:
   * 
   * *   KeepStackOnCreationComplete (default): After the stack is created, the stack and its resources are retained. The quota for the maximum number of stacks that can be created in ROS is consumed.
   * *   AbandonStackOnCreationComplete: After the stack is created, the stack is deleted, but its resources are retained. The quota for the maximum number of stacks that can be created in ROS is not consumed. If the stack fails to be created, the stack is retained.
   * *   AbandonStackOnCreationRollbackComplete: When the resources of the stack are rolled back after the stack fails to be created, the stack is deleted. The quota for the maximum number of stacks that can be created in ROS is not consumed. In other rollback scenarios, the stack is retained.
   * *   ManuallyPay: When you create the stack, you must manually pay for the subscription resources that are used. The following resource types support manual payment: `ALIYUN::ECS::InstanceGroup`, `ALIYUN::RDS::DBInstance`, `ALIYUN::SLB::LoadBalancer`, `ALIYUN::VPC::EIP`, and `ALIYUN::VPC::VpnGateway`.
   * 
   * >  You can specify only one of CreateOption and CreateOptions.
   * 
   * @example
   * KeepStackOnCreationComplete
   */
  createOption?: string;
  /**
   * @remarks
   * The creation options for the stack.
   */
  createOptions?: string[];
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the stack. Valid values:
   * 
   * *   Enabled.
   * *   Disabled (default). If deletion protection is disabled, you can delete the stack by using the ROS console or by calling the DeleteStack operation.
   * 
   * > The value of DeletionProtection that you specify for the root stack applies to its nested stacks.
   * 
   * @example
   * Enabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * Specifies whether to disable rollback for the resources when the stack fails to be created.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The callback URLs that are used to receive stack events. Valid values:
   * 
   * *   HTTP POST URL
   * 
   * Each URL can be up to 1,024 bytes in length.
   * 
   * *   eventbridge
   * 
   * When the status of a stack changes, ROS sends notifications to the EventBridge service. You can view the event information in the [EventBridge](https://eventbridge.console.aliyun.com) console.
   * 
   * > This feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Hong Kong), and China (Zhangjiakou) regions.
   * 
   * Maximum value of N: 5. When the status of a stack changes, ROS sends a notification to the specified URL. When rollback is enabled for the stack, notifications are sent if the stack is in the CREATE_ROLLBACK or ROLLBACK state, but are not sent if the stack is in the CREATE_FAILED, UPDATE_FAILED, or IN_PROGRESS state.\\
   * ROS sends notifications regardless of whether you specify the Outputs section. The following sample code provides an example on the content of a notification:
   * 
   *     {
   *        "Outputs": [
   *            {
   *                "Description": "No description given",
   *                "OutputKey": "InstanceId",
   *                "OutputValue": "i-xxx"
   *            }
   *        ],
   *        "StackId": "80bd6b6c-e888-4573-ae3b-93d29113****",
   *        "StackName": "test-notification-url",
   *        "Status": "CREATE_COMPLETE"
   *     }
   * 
   * @example
   * http://my-site.com/ros-event
   */
  notificationURLs?: string[];
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources.
   * 
   * By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0.
   * 
   * 
   * 
   * > -  If you set this parameter to an integer that is greater than 0, the integer is used. If you set this parameter to 0 or leave this parameter empty, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * > -  If you set this parameter to a specific value, ROS associates the value with the stack. The value affects subsequent operations on the stack, such as an update operation.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The parameters that are defined in the template.
   */
  parameters?: CreateStackRequestParameters[];
  /**
   * @remarks
   * The name of the RAM role. ROS assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the RAM role to perform operations on the stack. If you have permissions to perform operations on the stack but do not have permissions to use the RAM role, ROS still assumes the RAM role. You must make sure that the least privileges are granted to the RAM role.
   * 
   * If you do not specify this parameter, ROS assumes the existing role that is associated with the stack. If no roles are available, ROS uses a temporary credential that is generated from the credentials of your account.
   * 
   * The RAM role name can be up to 64 characters in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you leave this parameter empty, the stack is added to the default resource group.
   * 
   * For more information about resource groups, see the "Resource group" section of the [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html) topic.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the stack.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The policy body must be 1 to 16,384 bytes in length.
   * 
   * > You can specify only one of StackPolicyBody and StackPolicyURL.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the stack policy. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You can specify only one of StackPolicyBody and StackPolicyURL.
   * 
   * The URL can be up to 1,350 bytes in length.
   * 
   * @example
   * oss://ros-stack-policy/demo
   */
  stackPolicyURL?: string;
  /**
   * @remarks
   * The tags that you want to add to the stack.
   */
  tags?: CreateStackRequestTags[];
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared templates and private templates.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * For more information about how to query the scenario ID, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of RegionId.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  templateScratchRegionId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period for creating the stack.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * *   Valid values: 10 to 1440.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createOption: 'CreateOption',
      createOptions: 'CreateOptions',
      deletionProtection: 'DeletionProtection',
      disableRollback: 'DisableRollback',
      notificationURLs: 'NotificationURLs',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createOption: 'string',
      createOptions: { 'type': 'array', 'itemType': 'string' },
      deletionProtection: 'string',
      disableRollback: 'boolean',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': CreateStackRequestParameters },
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
      tags: { 'type': 'array', 'itemType': CreateStackRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStackResponseBody;
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
      body: CreateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM role that you specify for the administrator account when you create a self-managed stack group. ROS assumes the administrator role to perform operations. If you do not specify this parameter, AliyunROSStackGroupAdministrationRole is used as the default value. ROS uses the administrator role to assume the execution role AliyunROSStackGroupExecutionRole to perform operations on the stacks in the stack group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The information about automatic deployment settings.
   * 
   * > You must specify this parameter if PermissionModel is set to SERVICE_MANAGED.
   * 
   * @example
   * {"Enabled": true, "RetainStacksOnAccountRemoval": true}
   */
  autoDeployment?: CreateStackGroupRequestAutoDeployment;
  /**
   * @remarks
   * The options for the stack group. You can specify up to one option.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, underscores (_), and hyphens (-) and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the stack group.\\
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * StackGroup Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the RAM role that you specify for the execution account when you create a self-managed stack group. The administrator role AliyunROSStackGroupAdministrationRole assumes the execution role to perform operations. If you do not specify this parameter, AliyunROSStackGroupExecutionRole is used as the default value. ROS assumes the execution role to perform operations on the stacks in the stack group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The parameters of the stack group.
   */
  parameters?: CreateStackGroupRequestParameters[];
  /**
   * @remarks
   * The permission model of the stack group.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED (default): the self-managed permission model. If you create a self-managed stack group, you must create RAM roles within the administrator and execution accounts and establish a trust relationship between the accounts. Then, you can deploy stacks within the execution account.
   * *   SERVICE_MANAGED: the service-managed permission model. If you create a service-managed stack group, ROS creates service-linked roles for the administrator and execution accounts, and the administrator account uses its role to deploy stacks within the execution account.
   * 
   * > If you want to use the service-managed permission model to deploy stacks, your account must be the management account or a delegated administrator account of your resource directory and the trusted access feature is enabled for the account. For more information, see [Manage a delegated administrator account](https://help.aliyun.com/document_detail/308253.html) and [Enable trusted access](https://help.aliyun.com/document_detail/298229.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, the stack group is added to the default resource group.\\
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The tags of the stack group.
   */
  tags?: CreateStackGroupRequestTags[];
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * > TemplateVersion takes effect only if you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      administrationRoleName: 'AdministrationRoleName',
      autoDeployment: 'AutoDeployment',
      capabilities: 'Capabilities',
      clientToken: 'ClientToken',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackGroupName: 'StackGroupName',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrationRoleName: 'string',
      autoDeployment: CreateStackGroupRequestAutoDeployment,
      capabilities: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      description: 'string',
      executionRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': CreateStackGroupRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackGroupName: 'string',
      tags: { 'type': 'array', 'itemType': CreateStackGroupRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM role that you specify for the administrator account when you create a self-managed stack group. ROS assumes the administrator role to perform operations. If you do not specify this parameter, AliyunROSStackGroupAdministrationRole is used as the default value. ROS uses the administrator role to assume the execution role AliyunROSStackGroupExecutionRole to perform operations on the stacks in the stack group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The information about automatic deployment settings.
   * 
   * > You must specify this parameter if PermissionModel is set to SERVICE_MANAGED.
   * 
   * @example
   * {"Enabled": true, "RetainStacksOnAccountRemoval": true}
   */
  autoDeploymentShrink?: string;
  /**
   * @remarks
   * The options for the stack group. You can specify up to one option.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, underscores (_), and hyphens (-) and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the stack group.\\
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * StackGroup Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the RAM role that you specify for the execution account when you create a self-managed stack group. The administrator role AliyunROSStackGroupAdministrationRole assumes the execution role to perform operations. If you do not specify this parameter, AliyunROSStackGroupExecutionRole is used as the default value. ROS assumes the execution role to perform operations on the stacks in the stack group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The parameters of the stack group.
   */
  parameters?: CreateStackGroupShrinkRequestParameters[];
  /**
   * @remarks
   * The permission model of the stack group.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED (default): the self-managed permission model. If you create a self-managed stack group, you must create RAM roles within the administrator and execution accounts and establish a trust relationship between the accounts. Then, you can deploy stacks within the execution account.
   * *   SERVICE_MANAGED: the service-managed permission model. If you create a service-managed stack group, ROS creates service-linked roles for the administrator and execution accounts, and the administrator account uses its role to deploy stacks within the execution account.
   * 
   * > If you want to use the service-managed permission model to deploy stacks, your account must be the management account or a delegated administrator account of your resource directory and the trusted access feature is enabled for the account. For more information, see [Manage a delegated administrator account](https://help.aliyun.com/document_detail/308253.html) and [Enable trusted access](https://help.aliyun.com/document_detail/298229.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, the stack group is added to the default resource group.\\
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The tags of the stack group.
   */
  tags?: CreateStackGroupShrinkRequestTags[];
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * > TemplateVersion takes effect only if you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      administrationRoleName: 'AdministrationRoleName',
      autoDeploymentShrink: 'AutoDeployment',
      capabilities: 'Capabilities',
      clientToken: 'ClientToken',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackGroupName: 'StackGroupName',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrationRoleName: 'string',
      autoDeploymentShrink: 'string',
      capabilities: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      description: 'string',
      executionRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': CreateStackGroupShrinkRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackGroupName: 'string',
      tags: { 'type': 'array', 'itemType': CreateStackGroupShrinkRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * 2c036e78-9e82-428e-afd6-177f5d04****
   */
  stackGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupId: 'StackGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStackGroupResponseBody;
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
      body: CreateStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * > You must specify one of the following parameters: `AccountIds` and `DeploymentTargets`.
   * 
   * @example
   * ["151266687691****","141261387191****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which ROS deploy stacks in service-managed permission model.
   * 
   * > You must specify one of the following parameters: `AccountIds` and `DeploymentTargets`.
   * 
   * @example
   * {"RdFolderId": "fd-4PvlVLOL8v"}
   */
  deploymentTargets?: CreateStackInstancesRequestDeploymentTargets;
  /**
   * @remarks
   * Specifies whether to disable rollback when the stack fails to be created.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The description of the stack creation operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Create stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the stack creation operation.
   * 
   * The following parameters are available:
   * 
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, Resource Orchestration Service (ROS) stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *    The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *    Valid values of N: 1 to 20.
   * 
   *    If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * -  {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which multiple stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the number down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * -  {"RegionConcurrencyType": N}\\
   *     The mode that you want to use to deploy stacks across regions. Valid values: 
   *    - SEQUENTIAL (default): deploys stacks in each specified region based on the specified sequence of regions. ROS deploys stacks in one region at a time. 
   *    - PARALLEL: deploys stacks in parallel across all specified regions.
   * 
   * Separate multiple parameters with commas (,).
   * 
   * >-  You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * >-  You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The parameters that are used to override specific parameters.
   */
  parameterOverrides?: CreateStackInstancesRequestParameterOverrides[];
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to create the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The timeout period within which you can create the stack.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      disableRollback: 'DisableRollback',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: CreateStackInstancesRequestDeploymentTargets,
      disableRollback: 'boolean',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesRequestParameterOverrides },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * > You must specify one of the following parameters: `AccountIds` and `DeploymentTargets`.
   * 
   * @example
   * ["151266687691****","141261387191****"]
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which ROS deploy stacks in service-managed permission model.
   * 
   * > You must specify one of the following parameters: `AccountIds` and `DeploymentTargets`.
   * 
   * @example
   * {"RdFolderId": "fd-4PvlVLOL8v"}
   */
  deploymentTargetsShrink?: string;
  /**
   * @remarks
   * Specifies whether to disable rollback when the stack fails to be created.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The description of the stack creation operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Create stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the stack creation operation.
   * 
   * The following parameters are available:
   * 
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, Resource Orchestration Service (ROS) stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *    The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *    Valid values of N: 1 to 20.
   * 
   *    If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * -  {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which multiple stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the number down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * -  {"RegionConcurrencyType": N}\\
   *     The mode that you want to use to deploy stacks across regions. Valid values: 
   *    - SEQUENTIAL (default): deploys stacks in each specified region based on the specified sequence of regions. ROS deploys stacks in one region at a time. 
   *    - PARALLEL: deploys stacks in parallel across all specified regions.
   * 
   * Separate multiple parameters with commas (,).
   * 
   * >-  You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * >-  You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferencesShrink?: string;
  /**
   * @remarks
   * The parameters that are used to override specific parameters.
   */
  parameterOverrides?: CreateStackInstancesShrinkRequestParameterOverrides[];
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to create the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIdsShrink?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The timeout period within which you can create the stack.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      disableRollback: 'DisableRollback',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      disableRollback: 'boolean',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesShrinkRequestParameterOverrides },
      regionId: 'string',
      regionIdsShrink: 'string',
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
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
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStackInstancesResponseBody;
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
      body: CreateStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the template. The description can be up to 256 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group.\\
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the template.
   */
  tags?: CreateTemplateRequestTags[];
  templateBody?: string;
  /**
   * @remarks
   * The name of the template.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body must be 1 to 1,024 bytes in length. If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * > You must specify TemplateBody or TemplateURL.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateTemplateRequestTags },
      templateBody: 'string',
      templateName: 'string',
      templateURL: 'string',
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
   * 8C5D90E1-66B6-496C-9371-3807F8DA80A8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
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

export class CreateTemplateScratchRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * Replicate a VPC.
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Async (default)
   * *   Sync
   * 
   * > If you have a wide scope of resources, Sync takes longer. If you set ExecutionMode to Sync, we recommend that you specify ClientToken to prevent the execution timeout.
   * 
   * @example
   * Sync
   */
  executionMode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix (default): long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParameters?: CreateTemplateScratchRequestPreferenceParameters[];
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroup?: CreateTemplateScratchRequestSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   * 
   * When you set TemplateScratchType to ArchitectureDetection, you can specify SourceResources to detect the architecture data of all resources associated with the specified source resources. For example, if you set SourceResources to the ID of a Classic Load Balancer (CLB) instance, the architecture data of all resources, such as the Elastic Compute Service (ECS) instance, vSwitch, and VPC, associated with the CLB instance is detected.
   * 
   * If you set TemplateScratchType to ArchitectureDetection, you can specify up to 20 source resources. In other cases, you can specify up to 200 source resources.
   */
  sourceResources?: CreateTemplateScratchRequestSourceResources[];
  /**
   * @remarks
   * The source tag.
   */
  sourceTag?: CreateTemplateScratchRequestSourceTag;
  /**
   * @remarks
   * The tags of the resource scenario.
   */
  tags?: CreateTemplateScratchRequestTags[];
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ArchitectureReplication: resource replication
   * *   ArchitectureDetection: resource detection
   * *   ResourceImport: resource management
   * *   ResourceMigration: resource migration
   * 
   * >  The valid values of the ParameterKey and ParameterValue request parameters vary based on the value of TemplateScratchType. For more information, see the "**Additional information about request parameters**" section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      tags: 'Tags',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': CreateTemplateScratchRequestPreferenceParameters },
      regionId: 'string',
      resourceGroupId: 'string',
      sourceResourceGroup: CreateTemplateScratchRequestSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': CreateTemplateScratchRequestSourceResources },
      sourceTag: CreateTemplateScratchRequestSourceTag,
      tags: { 'type': 'array', 'itemType': CreateTemplateScratchRequestTags },
      templateScratchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * Replicate a VPC.
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Async (default)
   * *   Sync
   * 
   * > If you have a wide scope of resources, Sync takes longer. If you set ExecutionMode to Sync, we recommend that you specify ClientToken to prevent the execution timeout.
   * 
   * @example
   * Sync
   */
  executionMode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix (default): long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParametersShrink?: string;
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroupShrink?: string;
  /**
   * @remarks
   * The source resources.
   * 
   * When you set TemplateScratchType to ArchitectureDetection, you can specify SourceResources to detect the architecture data of all resources associated with the specified source resources. For example, if you set SourceResources to the ID of a Classic Load Balancer (CLB) instance, the architecture data of all resources, such as the Elastic Compute Service (ECS) instance, vSwitch, and VPC, associated with the CLB instance is detected.
   * 
   * If you set TemplateScratchType to ArchitectureDetection, you can specify up to 20 source resources. In other cases, you can specify up to 200 source resources.
   */
  sourceResourcesShrink?: string;
  /**
   * @remarks
   * The source tag.
   */
  sourceTagShrink?: string;
  /**
   * @remarks
   * The tags of the resource scenario.
   */
  tags?: CreateTemplateScratchShrinkRequestTags[];
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ArchitectureReplication: resource replication
   * *   ArchitectureDetection: resource detection
   * *   ResourceImport: resource management
   * *   ResourceMigration: resource migration
   * 
   * >  The valid values of the ParameterKey and ParameterValue request parameters vary based on the value of TemplateScratchType. For more information, see the "**Additional information about request parameters**" section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParametersShrink: 'PreferenceParameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroupShrink: 'SourceResourceGroup',
      sourceResourcesShrink: 'SourceResources',
      sourceTagShrink: 'SourceTag',
      tags: 'Tags',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceResourceGroupShrink: 'string',
      sourceResourcesShrink: 'string',
      sourceTagShrink: 'string',
      tags: { 'type': 'array', 'itemType': CreateTemplateScratchShrinkRequestTags },
      templateScratchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84980977-22F0-5421-B30D-B201311D5DCF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateScratchResponseBody;
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
      body: CreateTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeSetRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * This parameter is required.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class DeleteChangeSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChangeSetResponseBody;
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
      body: DeleteChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiagnosticRequest extends $tea.Model {
  /**
   * @remarks
   * The report ID. You can troubleshoot issues based on the report.
   * 
   * @example
   * dr-56a0e30bf9854b00****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiagnosticResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91EF0DC1-3BB5-555E-AAA1-4F5C640D15DA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiagnosticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDiagnosticResponseBody;
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
      body: DeleteDiagnosticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackRequest extends $tea.Model {
  /**
   * @remarks
   * The options for deleting the stack.
   */
  deleteOptions?: string[];
  parallelism?: number;
  /**
   * @remarks
   * The name of the RAM role. Resource Orchestration Service (ROS) assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the role to perform operations on the stack. If you have permissions to perform operations on the stack but do not have permissions to use the RAM role, ROS still assumes the RAM role. You must make sure that the least privileges are granted to the RAM role.\\
   * If you leave this parameter empty when you call the DeleteStack operation, ROS cannot assume the existing RAM role that is associated with the stack. If you want ROS to assume a RAM role, you must specify this parameter. If no RAM roles are available, ROS uses a temporary credential that is generated from the credentials of your account.\\
   * The name of the RAM role can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to retain all resources in the stack.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The resources that you want to retain.
   * 
   * @example
   * WebServer
   */
  retainResources?: string[];
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOptions: 'DeleteOptions',
      parallelism: 'Parallelism',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOptions: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      ramRoleName: 'string',
      regionId: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class DeleteStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStackResponseBody;
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
      body: DeleteStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region to which the stack group belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique in a region.
   * 
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackGroupResponseBody extends $tea.Model {
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

export class DeleteStackGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStackGroupResponseBody;
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
      body: DeleteStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * @example
   * ["151266687691****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which you want to deploy stacks in service-managed mode.
   */
  deploymentTargets?: DeleteStackInstancesRequestDeploymentTargets;
  /**
   * @remarks
   * The description of the delete operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Delete stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the delete operation.
   * 
   * The following parameters are available:
   * 
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *     The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *     Valid values of N: 1 to 20.
   * 
   *     If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * -  {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values of N: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the number down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * -   {"RegionConcurrencyType": N}
   * 
   *     The mode that you want to use to deploy stacks across regions. Valid values:
   *     - SEQUENTIAL (default): deploys stacks in the specified regions one by one in sequence. This way, ROS deploys stacks in only one region at a time. 
   * 
   *      - PARALLEL: deploys stacks in all the specified regions in parallel. 
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * > - You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to delete the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * Specifies whether to delete the stacks.
   * 
   * Valid values:
   * 
   * *   true: retains the stacks.
   * *   false: deletes the stacks.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  retainStacks?: boolean;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      retainStacks: 'RetainStacks',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: DeleteStackInstancesRequestDeploymentTargets,
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      retainStacks: 'boolean',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * @example
   * ["151266687691****"]
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which you want to deploy stacks in service-managed mode.
   */
  deploymentTargetsShrink?: string;
  /**
   * @remarks
   * The description of the delete operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Delete stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the delete operation.
   * 
   * The following parameters are available:
   * 
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *     The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *     Valid values of N: 1 to 20.
   * 
   *     If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * -  {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values of N: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the number down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * -   {"RegionConcurrencyType": N}
   * 
   *     The mode that you want to use to deploy stacks across regions. Valid values:
   *     - SEQUENTIAL (default): deploys stacks in the specified regions one by one in sequence. This way, ROS deploys stacks in only one region at a time. 
   * 
   *      - PARALLEL: deploys stacks in all the specified regions in parallel. 
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * > - You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferencesShrink?: string;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to delete the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIdsShrink?: string;
  /**
   * @remarks
   * Specifies whether to delete the stacks.
   * 
   * Valid values:
   * 
   * *   true: retains the stacks.
   * *   false: deletes the stacks.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  retainStacks?: boolean;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      retainStacks: 'RetainStacks',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      regionId: 'string',
      regionIdsShrink: 'string',
      retainStacks: 'boolean',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
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
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStackInstancesResponseBody;
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
      body: DeleteStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the template. This parameter applies to only private templates.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8C5D90E1-66B6-496C-9371-3807F8DA80A8
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

export class DeleteTemplateScratchRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-4f83704400994409****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateScratchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1B9C6333-5904-5A1E-9845-CB17A369AFDC
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

export class DeleteTemplateScratchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateScratchResponseBody;
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
      body: DeleteTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterResourceTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. If you want to delete a version of the resource type, you must specify this parameter.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterResourceTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
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

export class DeregisterResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeregisterResourceTypeResponseBody;
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
      body: DeregisterResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values:
   * 
   * *   zh-CN (default): Chinese
   * *   en-US: English
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59F0F0A0-A637-4292-9B91-251EF5010913
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

export class DetectStackDriftRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The value can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The logical ID of resource.
   * 
   * @example
   * ScalingRule
   */
  logicalResourceId?: string[];
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the drift detection.
   * 
   * @example
   * a7044f0d-6f2e-4128-a307-4524ef88****
   */
  driftDetectionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectStackDriftResponseBody;
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
      body: DetectStackDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The value can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The operation settings, in JSON format. The following fields are supported:
   * 
   * *   FailureToleranceCount
   * 
   * The maximum number of stack group operation failures that can occur. In a stack group operation, if the total number of failures does not exceed the FailureToleranceCount value, the operation succeeds. Otherwise, the operation fails.
   * 
   * If FailureToleranceCount is not specified, the default value 0 is used. You can specify one of FailureToleranceCount or FailureTolerancePercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 0 to 20.
   * 
   * *   FailureTolerancePercentage
   * 
   * The percentage of stack group operation failures that can occur. In a stack group operation, if the percentage of failures does not exceed the FailureTolerancePercentage value, the operation succeeds. Otherwise, the operation fails.
   * 
   * You can specify one of FailureToleranceCount or FailureTolerancePercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 0 to 100.
   * 
   * *   MaxConcurrentCount
   * 
   * The maximum number of target accounts in which a drift detection operation can be performed at a time.
   * 
   * You can specify one of MaxConcurrentCount or MaxConcurrentPercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 1 to 20.
   * 
   * *   MaxConcurrentPercentage
   * 
   * The maximum percentage of target accounts in which a drift detection operation can be performed at a time.
   * 
   * You can specify one of MaxConcurrentCount or MaxConcurrentPercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](~~131035#doc-api-ROS-DescribeRegions~~ "Queries the DescribeRegions list of a region.") operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique in a region.
   * 
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationPreferences: 'OperationPreferences',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The value can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The operation settings, in JSON format. The following fields are supported:
   * 
   * *   FailureToleranceCount
   * 
   * The maximum number of stack group operation failures that can occur. In a stack group operation, if the total number of failures does not exceed the FailureToleranceCount value, the operation succeeds. Otherwise, the operation fails.
   * 
   * If FailureToleranceCount is not specified, the default value 0 is used. You can specify one of FailureToleranceCount or FailureTolerancePercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 0 to 20.
   * 
   * *   FailureTolerancePercentage
   * 
   * The percentage of stack group operation failures that can occur. In a stack group operation, if the percentage of failures does not exceed the FailureTolerancePercentage value, the operation succeeds. Otherwise, the operation fails.
   * 
   * You can specify one of FailureToleranceCount or FailureTolerancePercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 0 to 100.
   * 
   * *   MaxConcurrentCount
   * 
   * The maximum number of target accounts in which a drift detection operation can be performed at a time.
   * 
   * You can specify one of MaxConcurrentCount or MaxConcurrentPercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 1 to 20.
   * 
   * *   MaxConcurrentPercentage
   * 
   * The maximum percentage of target accounts in which a drift detection operation can be performed at a time.
   * 
   * You can specify one of MaxConcurrentCount or MaxConcurrentPercentage parameters, but you cannot specify both of them.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * {"FailureToleranceCount": 1, "MaxConcurrentCount": 2}
   */
  operationPreferencesShrink?: string;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](~~131035#doc-api-ROS-DescribeRegions~~ "Queries the DescribeRegions list of a region.") operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique in a region.
   * 
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationPreferencesShrink: 'OperationPreferences',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationPreferencesShrink: 'string',
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectStackGroupDriftResponseBody;
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
      body: DetectStackGroupDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The value can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ScalingRuleName
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftResponseBody extends $tea.Model {
  /**
   * @remarks
   * The actual JSON-formatted resource properties.
   * 
   * @example
   * {"ScalingRuleName": "test1"}
   */
  actualProperties?: string;
  /**
   * @remarks
   * The time when the resource drift detection was initiated.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The JSON-formatted resource properties that are defined in the template.
   * 
   * @example
   * {"ScalingRuleName": "test2"}
   */
  expectedProperties?: string;
  /**
   * @remarks
   * The logical ID of the resource that is defined in the template.
   * 
   * @example
   * ScalingRule
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * asr-2ze4zzc3kf9yz1kd****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The property drifts of the resource.
   */
  propertyDifferences?: DetectStackResourceDriftResponseBodyPropertyDifferences[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The drift status of the resource. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   * 
   * @example
   * MODIFIED
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ALIYUN::ESS::ScalingRule
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      actualProperties: 'ActualProperties',
      driftDetectionTime: 'DriftDetectionTime',
      expectedProperties: 'ExpectedProperties',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      propertyDifferences: 'PropertyDifferences',
      requestId: 'RequestId',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualProperties: 'string',
      driftDetectionTime: 'string',
      expectedProperties: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': DetectStackResourceDriftResponseBodyPropertyDifferences },
      requestId: 'string',
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectStackResourceDriftResponseBody;
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
      body: DetectStackResourceDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteChangeSetRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * This parameter is required.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests.
   * 
   * The token can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteChangeSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class ExecuteChangeSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteChangeSetResponseBody;
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
      body: ExecuteChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the new node.
   * 
   * @example
   * cn-hangzhou
   */
  provisionRegionId?: string;
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * For more information about how to query the IDs of resource scenarios, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the template that Resource Orchestration Service (ROS) generates. ROS can generate templates of the ROS and Terraform types. Default value: ROS.
   * 
   * @example
   * ROS
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      provisionRegionId: 'ProvisionRegionId',
      regionId: 'RegionId',
      templateScratchId: 'TemplateScratchId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionRegionId: 'string',
      regionId: 'string',
      templateScratchId: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D22C1D13-D74E-558C-AF68-1B4C05FA6F1A
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that you want to import into a stack in the resource management scenario.
   * 
   * > This parameter is returned only for a resource management scenario.
   */
  resourcesToImport?: GenerateTemplateByScratchResponseBodyResourcesToImport[];
  /**
   * @remarks
   * The template content of the resource scenario.
   * 
   * @example
   * {\\"ROSTemplateFormatVersion\\": \\"2015-09-01\\", \\"Resources\\": {\\"ECSVPC_001\\": {\\"DeletionPolicy\\": \\"Retain\\", \\"Type\\": \\"ALIYUN::ECS::VPC\\", \\"Properties\\": {\\"CidrBlock\\": \\"172.16.0.0/12\\", \\"VpcName\\": \\"MyTestVpc\\", \\"EnableIpv6\\": false}}}}
   */
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcesToImport: 'ResourcesToImport',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcesToImport: { 'type': 'array', 'itemType': GenerateTemplateByScratchResponseBodyResourcesToImport },
      templateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateTemplateByScratchResponseBody;
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
      body: GenerateTemplateByScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The type of operation N for which you want to generate the policy information.
   * 
   * Valid values:
   * 
   * *   CreateStack: creates a stack by calling the CreateStack operation.
   * *   UpdateStack: updates a stack by calling the UpdateStack operation.
   * *   DeleteStack: deletes a stack by calling the DeleteStack operation.
   * *   DetectStackDrift: detects drifts on a stack by calling the DelectStackDrift operation.
   * *   ListStackOperationRisks: lists the risks of a deletion operation on a stack by setting the OperationType parameter to DeleteStack in the ListStackOperationRisks operation.
   * *   GetTemplateEstimateCost: queries the estimated prices of resources that you want to use in the template by calling the GetTemplateEstimateCost operation.
   * *   GetTemplateParameterConstraints: queries the values of parameters in the template by calling the GetTemplateParameterConstraints operation.
   * *   ImportResourcesToStack: imports resources to a stack by setting the ChangeSetType parameter to IMPORT in the CreateChangeSet operation.
   * *   SignalResource: sends a signal to a stack.
   * 
   * >  The default value is the combination of all valid values.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length.
   * 
   * If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared templates and private templates.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * >  If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when the TemplateId parameter is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      operationTypes: 'OperationTypes',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: GenerateTemplatePolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GenerateTemplatePolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateTemplatePolicyResponseBody;
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
      body: GenerateTemplatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITaskRequest extends $tea.Model {
  /**
   * @example
   * Disabled
   */
  outputOption?: string;
  /**
   * @example
   * t-asasas*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      outputOption: 'OutputOption',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputOption: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITaskResponseBody extends $tea.Model {
  /**
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @example
   * FAILURE
   */
  status?: string;
  /**
   * @example
   * Handler execution unexpected failure
   */
  statusReason?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @example
   * "Result": {
   *     "ROSTemplateFormatVersion": "2015-09-01",
   * }
   */
  taskOutput?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      statusReason: 'StatusReason',
      success: 'Success',
      taskId: 'TaskId',
      taskOutput: 'TaskOutput',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
      statusReason: 'string',
      success: 'string',
      taskId: 'string',
      taskOutput: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAITaskResponseBody;
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
      body: GetAITaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c11658d-bd47-4dd0-ba64-727edc62****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to obtain the template. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  showTemplate?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
      showTemplate: 'ShowTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      regionId: 'string',
      showTemplate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * 4c11658d-bd47-4dd0-ba64-727edc62****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of the change set.
   * 
   * @example
   * ChangeSet_template
   */
  changeSetName?: string;
  /**
   * @remarks
   * The type of the change set.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The changes of the change set.
   */
  changes?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the change set was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-01T02:20:56
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the change set.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback was performed when the stack failed to be created or updated.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The execution status of the change set.
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string;
  /**
   * @remarks
   * The output logs of the change set.
   */
  log?: GetChangeSetResponseBodyLog;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: GetChangeSetResponseBodyParameters[];
  /**
   * @remarks
   * The region ID of the change set.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3766EE04-76DD-50F9-9C23-3AF136CD5708
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack with which the change set is associated.
   * 
   * @example
   * a486fc19-ebb7-4ce9-a70b-554a7c3d****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack with which the change set is associated.
   * 
   * @example
   * stack_2021-10-13
   */
  stackName?: string;
  /**
   * @remarks
   * The status of the change set.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the change set is in its current state.
   * 
   * @example
   * too many changes.
   */
  statusReason?: string;
  /**
   * @remarks
   * The template body of the change set.
   * 
   * > This parameter takes effect only if you set ShowTemplate to true.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The timeout period that is specified for the stack creation or update operation.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      changes: 'Changes',
      createTime: 'CreateTime',
      description: 'Description',
      disableRollback: 'DisableRollback',
      executionStatus: 'ExecutionStatus',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      requestId: 'RequestId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      templateBody: 'TemplateBody',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      changes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      createTime: 'string',
      description: 'string',
      disableRollback: 'boolean',
      executionStatus: 'string',
      log: GetChangeSetResponseBodyLog,
      parameters: { 'type': 'array', 'itemType': GetChangeSetResponseBodyParameters },
      regionId: 'string',
      requestId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      templateBody: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChangeSetResponseBody;
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
      body: GetChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosticRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-d540def087714890****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosticResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * @example
   * 0938F60C-A2CA-5A2E-9983-03EB1E6D7AE2
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The name of the diagnostic item.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The diagnosis result.
   */
  diagnosticResult?: GetDiagnosticResponseBodyDiagnosticResult;
  /**
   * @remarks
   * The time when the diagnosis was performed.
   * 
   * @example
   * 2023-03-27T03:32:03Z
   */
  diagnosticTime?: string;
  /**
   * @remarks
   * The HTTP status code
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified parameter ReportId is invalid, Can not find diagnostic report dr-5f6135782f104b0f****.
   */
  message?: string;
  /**
   * @remarks
   * The suggestion for the diagnosis.
   * 
   * @example
   * {\\"RosActionMessages\\": {\\"Reason\\": \\"Fail to delete stack (fc966920-450a-456b-983c-deeaec8e****), as deletion protection is enabled.\\", \\"Recommend\\": \\"\\"}}
   */
  recommends?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-cc80afc48c8741e9****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96A24844-9603-5E79-BDF4-EFD412FC5D4C
   */
  requestId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values:
   * 
   * *   Running: The diagnosis is in progress.
   * *   Complete: The diagnosis is complete.
   * *   Failed: The diagnosis failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The reason for the diagnosis status.
   * 
   * @example
   * Complete
   */
  statusReason?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      diagnosticResult: 'DiagnosticResult',
      diagnosticTime: 'DiagnosticTime',
      httpCode: 'HttpCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      recommends: 'Recommends',
      reportId: 'ReportId',
      requestId: 'RequestId',
      status: 'Status',
      statusReason: 'StatusReason',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      diagnosticResult: GetDiagnosticResponseBodyDiagnosticResult,
      diagnosticTime: 'string',
      httpCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      recommends: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      reportId: 'string',
      requestId: 'string',
      status: 'string',
      statusReason: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosticResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiagnosticResponseBody;
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
      body: GetDiagnosticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * The one or more features that you want to query. Valid values:
   * 
   * *   Terraform: the Terraform hosting feature.
   * *   ResourceCleaner: the resource cleaner feature. You can use ALIYUN::ROS::ResourceCleaner to create a resource cleaner.
   * *   TemplateScratch: the scenario feature.
   * *   All: all features that are supported by ROS.
   * 
   * This parameter is required.
   * 
   * @example
   * Terraform
   */
  feature?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details of the drift detection feature.
   */
  driftDetection?: GetFeatureDetailsResponseBodyDriftDetection;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBF833DA-D0E2-52BE-92E2-59CA56BE834E
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the resource cleaner feature.
   */
  resourceCleaner?: GetFeatureDetailsResponseBodyResourceCleaner;
  /**
   * @remarks
   * Details of the resource import feature.
   */
  resourceImport?: GetFeatureDetailsResponseBodyResourceImport;
  /**
   * @remarks
   * Details of the template parameter constraint feature.
   */
  templateParameterConstraints?: GetFeatureDetailsResponseBodyTemplateParameterConstraints;
  /**
   * @remarks
   * Details of the scenario feature.
   */
  templateScratch?: GetFeatureDetailsResponseBodyTemplateScratch;
  /**
   * @remarks
   * Details of the Terraform hosting feature.
   */
  terraform?: GetFeatureDetailsResponseBodyTerraform;
  static names(): { [key: string]: string } {
    return {
      driftDetection: 'DriftDetection',
      requestId: 'RequestId',
      resourceCleaner: 'ResourceCleaner',
      resourceImport: 'ResourceImport',
      templateParameterConstraints: 'TemplateParameterConstraints',
      templateScratch: 'TemplateScratch',
      terraform: 'Terraform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetection: GetFeatureDetailsResponseBodyDriftDetection,
      requestId: 'string',
      resourceCleaner: GetFeatureDetailsResponseBodyResourceCleaner,
      resourceImport: GetFeatureDetailsResponseBodyResourceImport,
      templateParameterConstraints: GetFeatureDetailsResponseBodyTemplateParameterConstraints,
      templateScratch: GetFeatureDetailsResponseBodyTemplateScratch,
      terraform: GetFeatureDetailsResponseBodyTerraform,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFeatureDetailsResponseBody;
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
      body: GetFeatureDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. If you want to query a specific version of the resource type, you must specify this parameter. If you do not specify this parameter, only the resource type is queried.
   * 
   * > This parameter is supported only for modules.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The type of the resource.
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The default version ID.
   * 
   * > This parameter is returned only if the resource type is queried.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   Resource: regular resource. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * *   DataSource: DataSource resource. For more information, see [DataSource resources](https://help.aliyun.com/document_detail/404753.html).
   * *   module: module.
   * 
   * @example
   * Resource
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is returned only if a specific version of the resource type is queried.
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The latest version ID.
   * 
   * > This parameter is returned only if the resource type is queried.
   * 
   * @example
   * v10
   */
  latestVersionId?: string;
  /**
   * @remarks
   * Indicates whether the resource supports drift detection. Default value: false. Valid values:
   * 
   * *   true: Drift detection is supported.
   * *   false: Drift detection is not supported.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS: The resource type is provided by Resource Orchestration Service (ROS).
   * *   Self: The resource type is provided by you.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The attributes of the resource.
   * 
   * @example
   * A28FBA2E-B6B3-5822-AA45-AB875EF23641
   */
  requestId?: string;
  /**
   * @remarks
   * The properties of the resource.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the resource supports scratch detection. Default value: false. Valid values:
   * 
   * *   true: Scratch detection is supported.
   * *   false: Scratch detection is not supported.
   * 
   * @example
   * false
   */
  supportDriftDetection?: boolean;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   Resource: resources other than DataSource resources. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * *   DataSource: DataSource resources.
   * 
   * @example
   * false
   */
  supportScratchDetection?: boolean;
  /**
   * @remarks
   * The template content in the module.
   * 
   * > This parameter is returned only if a specific version of the resource type is queried.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The total number of versions.
   * 
   * > This parameter is returned only if the resource type is queried.
   * 
   * @example
   * 10
   */
  totalVersionCount?: number;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      defaultVersionId: 'DefaultVersionId',
      description: 'Description',
      entityType: 'EntityType',
      isDefaultVersion: 'IsDefaultVersion',
      latestVersionId: 'LatestVersionId',
      properties: 'Properties',
      provider: 'Provider',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      supportDriftDetection: 'SupportDriftDetection',
      supportScratchDetection: 'SupportScratchDetection',
      templateBody: 'TemplateBody',
      totalVersionCount: 'TotalVersionCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      defaultVersionId: 'string',
      description: 'string',
      entityType: 'string',
      isDefaultVersion: 'boolean',
      latestVersionId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      requestId: 'string',
      resourceType: 'string',
      supportDriftDetection: 'boolean',
      supportScratchDetection: 'boolean',
      templateBody: 'string',
      totalVersionCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceTypeResponseBody;
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
      body: GetResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. If you want to query a specific version of the resource type, you must specify this parameter. If you do not specify this parameter, only the resource type is queried.
   * 
   * > This parameter is supported only for modules.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87F54B2B-AEF0-4C33-A72A-3F8856A575E9
   */
  requestId?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 51,200 bytes in length. For more information, see [Template syntax](https://help.aliyun.com/document_detail/28857.html).
   * 
   * > We recommend that use TemplateContent instead of TemplateBody.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: { [key: string]: any };
  /**
   * @remarks
   * The JSON-formatted structure of the template body. For more information, see [Template syntax](https://help.aliyun.com/document_detail/28857.html).
   * 
   * @example
   * {
   *       "ROSTemplateFormatVersion": "2015-09-01"
   * }
   */
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateBody: 'TemplateBody',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceTypeTemplateResponseBody;
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
      body: GetResourceTypeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequest extends $tea.Model {
  /**
   * @remarks
   * The parameters.
   */
  parameters?: GetServiceProvisionsRequestParameters[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: GetServiceProvisionsRequestServices[];
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and Services.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body must be 1 to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and Services.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      services: 'Services',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': GetServiceProvisionsRequestParameters },
      regionId: 'string',
      services: { 'type': 'array', 'itemType': GetServiceProvisionsRequestServices },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9938C04-26AD-5EFA-B394-EA7866842DFF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the services.
   */
  serviceProvisions?: GetServiceProvisionsResponseBodyServiceProvisions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceProvisions: 'ServiceProvisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceProvisionsResponseBody;
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
      body: GetServiceProvisionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length.\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The option for returning logs. Valid values:
   * 
   * *   None: does not return logs.
   * *   Stack (default): returns the logs of the stack.
   * *   Resource: returns the logs of resources in the stack.
   * *   All: returns all logs.
   * 
   * @example
   * Stack
   */
  logOption?: string;
  /**
   * @remarks
   * Specifies whether to return Outputs. Valid values:
   * 
   * *   Enabled (default)
   * *   Disabled
   * 
   * >  The Outputs parameter requires a long period of time to calculate. If you do not require Outputs of the stack, we recommend that you set OutputOption to Disabled to improve the response speed of the GetStack operation.
   * 
   * @example
   * Disabled
   */
  outputOption?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return information about ResourceProgress. Valid values:
   * 
   * *   Disabled (default): does not return information about ResourceProgress.
   * *   PercentageOnly: returns StackOperationProgress and StackActionProgress of ResourceProgress.
   * 
   * >  ROS and Terraform stacks are supported. Creation, resumed creation, update, deletion, import, and rollback operations on stacks are supported.
   * 
   * *   EnabledIfCreateStack (not recommend): returns \\*Count and InProgressResourceDetails of ResourceProgress only during a stack creation operation.
   * 
   * >  During a creation operation, a stack is in one of the following states: CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, CREATE_ROLLBACK_IN_PROGRESS, CREATE_ROLLBACK_COMPLETE, and CREATE_ROLLBACK_FAILED.
   * 
   * @example
   * Disabled
   */
  showResourceProgress?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logOption: 'LogOption',
      outputOption: 'OutputOption',
      regionId: 'RegionId',
      showResourceProgress: 'ShowResourceProgress',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logOption: 'string',
      outputOption: 'string',
      regionId: 'string',
      showResourceProgress: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of resources on which drift detection was performed.
   * 
   * >  This parameter is returned only if the most recent drift detection on the stack was successful.
   * 
   * @example
   * 1
   */
  checkedStackResourceCount?: number;
  /**
   * @remarks
   * The time when the stack was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-09-16T08:21:40
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the stack. Valid values:
   * 
   * *   Enabled: Deletion protection is enabled for the stack.
   * *   Disabled: Deletion protection is disabled for the stack. You can delete the stack by using the ROS console or by calling the DeleteStack operation.
   * 
   * >  Deletion protection of a nested stack is the same as deletion protection of its root stack.
   * 
   * @example
   * Disabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * Create a VPC.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled when the stack fails to be created. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack.
   * 
   * @example
   * 2020-09-16T09:21:40
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The description of the console user interface (UI).
   * 
   * @example
   * {}
   */
  interface?: string;
  /**
   * @remarks
   * The log of the stack.
   */
  log?: GetStackResponseBodyLog;
  /**
   * @remarks
   * The number of resources on which drift detection was not performed.
   * 
   * >  This parameter is returned only if the most recent drift detection on the stack was successful.
   * 
   * @example
   * 1
   */
  notCheckedStackResourceCount?: number;
  /**
   * @remarks
   * The callback URLs for receiving stack events.
   */
  notificationURLs?: string[];
  /**
   * @remarks
   * The supplementary information that is returned if an error occurs on a stack operation.
   * 
   * >  This parameter is returned together with at least one sub-parameter and only under specific conditions. For example, the supplementary information is returned when an API operation of another Alibaba Cloud service fails to be called.
   */
  operationInfo?: GetStackResponseBodyOperationInfo;
  /**
   * @remarks
   * The order IDs. This parameter is returned only if you configured manual payment when you created a subscription stack.
   */
  orderIds?: string[];
  /**
   * @remarks
   * The outputs of the stack.
   */
  outputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: GetStackResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the parent stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  parentStackId?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role. ROS assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the RAM role to perform operations on the stack. If you have permissions to perform operations on the stack, ROS assumes the RAM role even if you do not have permissions to use the RAM role. You must make sure that permissions are granted to the RAM role based on the principle of least privilege.\\
   * If this parameter is not specified, ROS uses the existing role that is associated with the stack. If no roles are available, ROS uses a temporary credential that is generated from the credentials of your account.\\
   * The RAM role name can be up to 64 characters in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource creation progress.
   */
  resourceProgress?: GetStackResponseBodyResourceProgress;
  /**
   * @remarks
   * 当资源栈状态为回滚失败时，该字段展示导致回滚的前一阶段执行失败的原因。
   * 
   * @example
   * Resource UPDATE failed: Exception: resources.FailToCreate: FailToCreate: reason
   */
  rollbackFailedRootReason?: string;
  /**
   * @remarks
   * The ID of the root stack. This parameter is returned if the specified stack is a nested stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  rootStackId?: string;
  /**
   * @remarks
   * Indicates whether the stack is a managed stack. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The name of the service to which the managed stack belongs.
   * 
   * @example
   * ACVS
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stack on which the most recent successful drift detection was performed. Valid values:
   * 
   * *   DRIFTED: The stack has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed on the stack.
   * *   IN_SYNC: The stack is being synchronized.
   * 
   * @example
   * IN_SYNC
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or letter.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The stack type. Valid values:
   * 
   * *   ROS: ROS stack. The stack is created by using a ROS template.
   * *   Terraform: Terraform stack. The stack is created by using a Terraform template.
   * 
   * @example
   * ROS
   */
  stackType?: string;
  /**
   * @remarks
   * The state of the stack. Valid values:
   * 
   * *   CREATE_IN_PROGRESS: The stack is being created.
   * *   CREATE_FAILED: The stack failed to be created.
   * *   CREATE_COMPLETE: The stack is created.
   * *   UPDATE_IN_PROGRESS: The stack is being updated.
   * *   UPDATE_FAILED: The stack failed to be updated.
   * *   UPDATE_COMPLETE: The stack is updated.
   * *   DELETE_IN_PROGRESS: The stack is being deleted.
   * *   DELETE_FAILED: The stack failed to be deleted.
   * *   CREATE_ROLLBACK_IN_PROGRESS: The resources are being rolled back after the stack failed to be created.
   * *   CREATE_ROLLBACK_FAILED: The resources failed to be rolled back after the stack failed to be created.
   * *   CREATE_ROLLBACK_COMPLETE: The resources are rolled back after the stack failed to be created.
   * *   ROLLBACK_IN_PROGRESS: The resources of the stack are being rolled back.
   * *   ROLLBACK_FAILED: The resources of the stack failed to be rolled back.
   * *   ROLLBACK_COMPLETE: The resources of the stack are rolled back.
   * *   CHECK_IN_PROGRESS: The stack is being validated.
   * *   CHECK_FAILED: The stack failed to be validated.
   * *   CHECK_COMPLETE: The stack is validated.
   * *   REVIEW_IN_PROGRESS: The stack is being reviewed.
   * *   IMPORT_CREATE_IN_PROGRESS: The stack is being created by using imported resources.
   * *   IMPORT_CREATE_FAILED: The stack failed to be created by using imported resources.
   * *   IMPORT_CREATE_COMPLETE: The stack is created by using imported resources.
   * *   IMPORT_CREATE_ROLLBACK_IN_PROGRESS: The resources are being rolled back after the stack failed to be created by using imported resources.
   * *   IMPORT_CREATE_ROLLBACK_FAILED: The resources failed to be rolled back after the stack failed to be created by using imported resources.
   * *   IMPORT_CREATE_ROLLBACK_COMPLETE: The resources are rolled back after the stack failed to be created by using imported resources.
   * *   IMPORT_UPDATE_IN_PROGRESS: The stack is being updated by using imported resources.
   * *   IMPORT_UPDATE_FAILED: The stack failed to be updated by using imported resources.
   * *   IMPORT_UPDATE_COMPLETE: The stack is updated by using imported resources.
   * *   IMPORT_UPDATE_ROLLBACK_IN_PROGRESS: The resources are being rolled back after the stack failed to be updated by using imported resources.
   * *   IMPORT_UPDATE_ROLLBACK_FAILED: The resources failed to be rolled back after the stack failed to be updated by using imported resources.
   * *   IMPORT_UPDATE_ROLLBACK_COMPLETE: The resources are rolled back after the stack failed to be updated by using imported resources.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack is in its current state.
   * 
   * @example
   * Stack CREATE completed successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the stack.
   */
  tags?: GetStackResponseBodyTags[];
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Create a VPC.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The template ID. This parameter is returned only if the current stack template is a custom template or shared template.
   * 
   * If the template is a shared template, the value of this parameter is the same as the value of TemplateARN.
   * 
   * @example
   * a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the resource scenario. This parameter is returned only if the current template of the stack is generated from a resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. This parameter is returned only if the current template of the stack is from a URL. The URL can point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter is returned only if the current stack template is a custom template or shared template.
   * 
   * If the template is a shared template, this parameter is returned only if VersionOption is set to AllVersions.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period for creating the stack. Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * The time when the stack was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-09-17T08:21:40
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      checkedStackResourceCount: 'CheckedStackResourceCount',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      disableRollback: 'DisableRollback',
      driftDetectionTime: 'DriftDetectionTime',
      interface: 'Interface',
      log: 'Log',
      notCheckedStackResourceCount: 'NotCheckedStackResourceCount',
      notificationURLs: 'NotificationURLs',
      operationInfo: 'OperationInfo',
      orderIds: 'OrderIds',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentStackId: 'ParentStackId',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceProgress: 'ResourceProgress',
      rollbackFailedRootReason: 'RollbackFailedRootReason',
      rootStackId: 'RootStackId',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
      stackName: 'StackName',
      stackType: 'StackType',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedStackResourceCount: 'number',
      createTime: 'string',
      deletionProtection: 'string',
      description: 'string',
      disableRollback: 'boolean',
      driftDetectionTime: 'string',
      interface: 'string',
      log: GetStackResponseBodyLog,
      notCheckedStackResourceCount: 'number',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      operationInfo: GetStackResponseBodyOperationInfo,
      orderIds: { 'type': 'array', 'itemType': 'string' },
      outputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameters: { 'type': 'array', 'itemType': GetStackResponseBodyParameters },
      parentStackId: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceProgress: GetStackResponseBodyResourceProgress,
      rollbackFailedRootReason: 'string',
      rootStackId: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
      stackName: 'string',
      stackType: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': GetStackResponseBodyTags },
      templateDescription: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackResponseBody;
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
      body: GetStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the drift detection operation.
   * 
   * You can call the [ListStackResourceDrifts](https://help.aliyun.com/document_detail/155098.html) operation to obtain the ID of the drift detection operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a7044f0d-6f2e-4128-a307-4524ef88****
   */
  driftDetectionId?: string;
  /**
   * @remarks
   * The region ID of the stack to be detected for drift.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the drift detection operation.
   * 
   * @example
   * a7044f0d-6f2e-4128-a307-4524ef88****
   */
  driftDetectionId?: string;
  /**
   * @remarks
   * The drift detection status. Valid values:
   * 
   * *   DETECTION_COMPLETE: The drift detection operation has been completed for all resources that support drift detection in the stack.
   * *   DETECTION_FAILED: The stack drift detection operation has failed for at least one resource in the stack.
   * *   DETECTION_IN_PROGRESS: The stack drift detection operation is in progress.
   * 
   * @example
   * DETECTION_COMPLETE
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The reason why the stack drift detection operation has its current status.
   * 
   * @example
   * Detect stack drift successfully
   */
  driftDetectionStatusReason?: string;
  /**
   * @remarks
   * The time when the stack drift detection operation was initiated.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The total number of stack resources that have drifted.
   * 
   * @example
   * 1
   */
  driftedStackResourceCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The drift status of the stack. Valid values:
   * 
   * *   DRIFTED: The actual configuration of the stack differs, or has drifted, from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The current configuration of each supported resource matches its expected template configuration. A stack with no resources that support drift detection also has a status of IN_SYNC.
   * 
   * @example
   * DRIFTED
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionStatusReason: 'DriftDetectionStatusReason',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackResourceCount: 'DriftedStackResourceCount',
      requestId: 'RequestId',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      driftDetectionStatus: 'string',
      driftDetectionStatusReason: 'string',
      driftDetectionTime: 'string',
      driftedStackResourceCount: 'number',
      requestId: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackDriftDetectionStatusResponseBody;
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
      body: GetStackDriftDetectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.
   * 
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * >  You must specify one of the StackGroupName and StackGroupId parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * >  You must specify one of the StackGroupName and StackGroupId parameters.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the stack group.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the stack group.
   */
  stackGroup?: GetStackGroupResponseBodyStackGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroup: 'StackGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroup: GetStackGroupResponseBodyStackGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackGroupResponseBody;
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
      body: GetStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationRequest extends $tea.Model {
  /**
   * @remarks
   * The operation ID. You can call the [ListStackGroupOperations](https://help.aliyun.com/document_detail/151342.html) operation to query the operation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack group operation.
   */
  stackGroupOperation?: GetStackGroupOperationResponseBodyStackGroupOperation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupOperation: 'StackGroupOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupOperation: GetStackGroupOperationResponseBodyStackGroupOperation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackGroupOperationResponseBody;
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
      body: GetStackGroupOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return the Outputs parameter. The Outputs parameter specifies the outputs of the stack. Valid values:
   * 
   * *   Enabled: returns the Outputs parameter.
   * *   Disabled (default): does not return the Outputs parameter.
   * 
   * >  The Outputs parameter requires a long period of time to calculate. If you do not require the outputs of the stack, we recommend that you set OutputOption to Disabled to improve the response speed of the API operation.
   * 
   * @example
   * Disabled
   */
  outputOption?: string;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * *   If the stack group is granted self-managed permissions, the stack belongs to an Alibaba Cloud account.
   * *   If the stack group is granted service-managed permissions, the stack belongs to a member in a resource directory.
   * 
   * > For more information about the destination account, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
   */
  stackInstanceAccountId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  stackInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      outputOption: 'OutputOption',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputOption: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8A6B693-82C8-419D-8796-DE99EC33CFF9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack.
   */
  stackInstance?: GetStackInstanceResponseBodyStackInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInstance: 'StackInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInstance: GetStackInstanceResponseBodyStackInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackInstanceResponseBody;
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
      body: GetStackInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The stack policy body must be 1 to 16,384 bytes in length.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Effect": "Allow","Principal": "*","Resource": "*"}]}
   */
  stackPolicyBody?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackPolicyBody: 'StackPolicyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackPolicyResponseBody;
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
      body: GetStackPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to query the resource properties. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of resource property N that you want to query.
   * 
   * >  Maximum value of N: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The logical ID of the resource defined in the template.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * *   CREATE_COMPLETE
   * *   CREATE_FAILED
   * *   CREATE_IN_PROGRESS
   * *   UPDATE_IN_PROGRESS
   * *   UPDATE_FAILED
   * *   UPDATE_COMPLETE
   * *   DELETE_IN_PROGRESS
   * *   DELETE_FAILED
   * *   CHECK_IN_PROGRESS
   * *   CHECK_FAILED
   * *   CHECK_COMPLETE
   * *   IMPORT_IN_PROGRESS
   * *   IMPORT_FAILED
   * *   IMPORT_COMPLETE
   */
  resourceAttributes?: string[];
  /**
   * @remarks
   * The name of resource property N that you want to query.
   * 
   * @example
   * true
   */
  showResourceAttributes?: boolean;
  /**
   * @remarks
   * The ID of the region to which the stack belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      resourceAttributes: 'ResourceAttributes',
      showResourceAttributes: 'ShowResourceAttributes',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': 'string' },
      showResourceAttributes: 'boolean',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * 2019-08-01T06:01:23
   */
  createTime?: string;
  /**
   * @remarks
   * The reason why the resource is in its current state.
   * 
   * @example
   * no description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The time when the resource was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The list of the resource properties.
   * 
   * @example
   * {"key": "value"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The information about the modules from which the resource is created. This parameter is returned only if the resource is created from modules.
   */
  moduleInfo?: GetStackResourceResponseBodyModuleInfo;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * d04af923-e6b7-4272-aeaa-47ec9777****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the resource in the last successful drift detection. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: ROS has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   */
  resourceAttributes?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the last successful drift detection was performed on the stack.
   * 
   * @example
   * IN_SYNC
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The logical ID of the resource defined in the template.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * efdf5c10-96a5-4fd7-ab89-68e7baa2****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack.
   * 
   * @example
   * test-describe-resource
   */
  stackName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  /**
   * @remarks
   * The name of the stack.
   * 
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or letter.
   * 
   * @example
   * 2019-08-01T06:01:29
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      driftDetectionTime: 'DriftDetectionTime',
      logicalResourceId: 'LogicalResourceId',
      metadata: 'Metadata',
      moduleInfo: 'ModuleInfo',
      physicalResourceId: 'PhysicalResourceId',
      requestId: 'RequestId',
      resourceAttributes: 'ResourceAttributes',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      driftDetectionTime: 'string',
      logicalResourceId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleInfo: GetStackResourceResponseBodyModuleInfo,
      physicalResourceId: 'string',
      requestId: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStackResourceResponseBody;
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
      body: GetStackResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * Specifies whether to query the shared information about the template. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * > Only the template owner can query the shared information of a template.
   * 
   * @example
   * Enabled
   */
  includePermission?: string;
  /**
   * @remarks
   * Specifies whether to query the information about tags. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * > This parameter takes effect only if you specify TemplateId.
   * 
   * @example
   * Enabled
   */
  includeTags?: string;
  /**
   * @remarks
   * The region ID of the stack or stack group that uses the template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter applies to shared and private templates. If the template is a shared template, the value of TemplateId is the same as the value of TemplateARN. You can use the template ID to query a shared template.
   * 
   * > You must specify one of the following parameters: StackId, ChangeSetId, StackGroupName, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The stage of the template. This parameter takes effect only if you specify StackId, ChangeSetId, or StackGroupName.
   * 
   * Valid values:
   * 
   * *   Processed (default): returns the processed template.
   * *   Original: returns the original template.
   * 
   * @example
   * Processed
   */
  templateStage?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only if you specify TemplateId.\\
   * If the template is a shared template, you can specify this parameter only if VersionOption is set to AllVersions. For more information, see [SetTemplatePermission](https://help.aliyun.com/document_detail/194768.html).
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      includePermission: 'IncludePermission',
      includeTags: 'IncludeTags',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      templateId: 'TemplateId',
      templateStage: 'TemplateStage',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      includePermission: 'string',
      includeTags: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      templateId: 'string',
      templateStage: 'string',
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
   * The ID of the change set. This parameter is returned only if you specify ChangeSetId.
   * 
   * @example
   * e85abe0c-6528-43fb-ae93-fdf8de22****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The time when the template was created. This parameter is returned only if you specify TemplateId.
   * 
   * > - If you specify TemplateVersion, the creation time of the template whose version is specified by TemplateVersion is returned.
   * > - If you do not specify TemplateVersion, the creation time of the template whose version is the default version is returned.
   * 
   * @example
   * 2020-11-18T08:49:26
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template. This parameter is returned only if you specify TemplateId.
   * 
   * @example
   * ROS template for create ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The description of the web UI in the ROS console.
   * 
   * @example
   * {}
   */
  interface?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the template belongs. This parameter is returned only if you specify TemplateId.
   * 
   * @example
   * 151266687691****
   */
  ownerId?: string;
  /**
   * @remarks
   * Details of the sharing status of the template. This parameter is returned only if you specify TemplateId and set IncludePermission to Enabled.
   * 
   * > - If TemplateVersion is not specified or does not take effect, the details of the sharing status of the template whose version is the default version is returned.
   * > - If TemplateVersion is specified and takes effect, the details of the sharing status of the template whose version is specified by TemplateVersion is returned.
   */
  permissions?: GetTemplateResponseBodyPermissions[];
  /**
   * @remarks
   * The region ID of the stack or stack group that uses the template. This parameter is returned only if you specify StackId, ChangeSetId, or StackGroupName.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type of the template. This parameter is returned only if you specify TemplateId.
   * 
   * Valid values:
   * 
   * *   Private: The template belongs to the template owner.
   * *   Shared: The template is shared by other users.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The name of the stack group. This parameter is returned only if you specify StackGroupName.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the stack. This parameter is returned only if you specify StackId.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The tags of the template.
   */
  tags?: GetTemplateResponseBodyTags[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the template. This parameter is returned only if you specify TemplateId.
   * 
   * @example
   * acs:ros:*:151266687691****:template/a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateARN?: string;
  /**
   * @remarks
   * The content of the template.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter is returned only if you specify TemplateId.
   * 
   * If the template is a shared template, the value of this parameter is the same as the value of TemplateARN.
   * 
   * @example
   * a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template. This parameter is returned only if you specify TemplateId.
   * 
   * > -   If you specify TemplateVersion, the name of the template whose version is specified by TemplateVersion is returned.
   * > -  If you not specify TemplateVersion, the name of the template whose version is the default version is returned.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. This parameter is returned only if you specify TemplateId.\\
   * If TemplateVersion is not specified or does not take effect, the default version is used.
   * 
   * If the template is a shared template, this parameter is returned only if you set VersionOption to AllVersions.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the template was last updated. This parameter is returned only if you specify TemplateId.
   * 
   * > - If you specify TemplateVersion, the last update time of the template whose version is specified by TemplateVersion is returned.
   * > - If you do not specify TemplateVersion, the last update time of the template whose version is the default version is returned.
   * 
   * @example
   * 2020-12-07T06:11:48
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      createTime: 'CreateTime',
      description: 'Description',
      interface: 'Interface',
      ownerId: 'OwnerId',
      permissions: 'Permissions',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      tags: 'Tags',
      templateARN: 'TemplateARN',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      createTime: 'string',
      description: 'string',
      interface: 'string',
      ownerId: 'string',
      permissions: { 'type': 'array', 'itemType': GetTemplateResponseBodyPermissions },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      tags: { 'type': 'array', 'itemType': GetTemplateResponseBodyTags },
      templateARN: 'string',
      templateBody: 'string',
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

export class GetTemplateEstimateCostRequest extends $tea.Model {
  /**
   * @remarks
   * The name of parameter N. If you do not specify the name and value of a parameter, ROS uses the default name and value that are specified in the template.
   * 
   * Maximum value of N: 200.
   * 
   * Examples:
   * 
   * *   Parameters.1.ParameterKey: `Name`
   * *   Parameters.2.ParameterKey: `Netmode`
   * 
   * >  The Parameters parameter is optional. If you want to specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of the RegionId parameter.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   */
  parameters?: GetTemplateEstimateCostRequestParameters[];
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is used to query the estimated price in a configuration change scenario.
   * 
   * Assume that the specified stack contains only one Elastic Compute Service (ECS) instance and the instance type is ecs.s6-c1m2.large. You downgrade the instance type to ecs.s6-c1m1.small and specify a new ApsaraDB RDS instance in the template that is used for the price inquiry. The queried result is the sum of the downgrade refund of the ECS instance and the price of the new ApsaraDB RDS instance.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The value of parameter N.
   * 
   * Maximum value of N: 200.
   * 
   * Examples:
   * 
   * *   Parameters.1.ParameterValue: `DemoEip`
   * *   Parameters.2.ParameterValue: `public`
   * 
   * >  The Parameters parameter is optional. If you want to specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of the RegionId parameter.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  templateScratchRegionId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests.
   * 
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * For more information about how to query the IDs of scenarios, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateEstimateCostRequestParameters },
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateEstimateCostResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6DEA36EF-C97D-5658-A4AC-4F5DB08D1A89
   */
  requestId?: string;
  /**
   * @remarks
   * The resource details.
   * 
   * @example
   * [{\\"LogicalResourceIdPattern\\": \\"wait1\\", \\"ResourceType\\": \\"time_sleep\\", \\"ResourcePath\\": \\"wait1\\"}, {\\"LogicalResourceIdPattern\\": \\"wait2\\", \\"ResourceType\\": \\"time_sleep\\", \\"ResourcePath\\": \\"wait2\\"}]
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateEstimateCostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateEstimateCostResponseBody;
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
      body: GetTemplateEstimateCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of parameter N in the template.
   */
  parameters?: GetTemplateParameterConstraintsRequestParameters[];
  /**
   * @remarks
   * The parameters whose values you want to query.
   */
  parametersKeyFilter?: string[];
  /**
   * @remarks
   * The order in which associated parameters are arranged.
   * 
   * >  By default, the order of the associated parameters specified in the `Metadata` section of the template is used.
   */
  parametersOrder?: string[];
  /**
   * @remarks
   * The region ID of the template.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * >  This parameter takes effect only if the TemplateId parameter is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      parametersKeyFilter: 'ParametersKeyFilter',
      parametersOrder: 'ParametersOrder',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsRequestParameters },
      parametersKeyFilter: { 'type': 'array', 'itemType': 'string' },
      parametersOrder: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of parameter N in the template.
   */
  parameters?: GetTemplateParameterConstraintsShrinkRequestParameters[];
  /**
   * @remarks
   * The parameters whose values you want to query.
   */
  parametersKeyFilterShrink?: string;
  /**
   * @remarks
   * The order in which associated parameters are arranged.
   * 
   * >  By default, the order of the associated parameters specified in the `Metadata` section of the template is used.
   */
  parametersOrderShrink?: string;
  /**
   * @remarks
   * The region ID of the template.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * >  This parameter takes effect only if the TemplateId parameter is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      parametersKeyFilterShrink: 'ParametersKeyFilter',
      parametersOrderShrink: 'ParametersOrder',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsShrinkRequestParameters },
      parametersKeyFilterShrink: 'string',
      parametersOrderShrink: 'string',
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The constraints of the parameters.
   */
  parameterConstraints?: GetTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9816785B-BCF8-514D-8B76-C1EC2BC954FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterConstraints: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateParameterConstraintsResponseBody;
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
      body: GetTemplateParameterConstraintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRecommendParametersRequest extends $tea.Model {
  clientToken?: string;
  parameters?: GetTemplateRecommendParametersRequestParameters[];
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateRecommendParametersRequestParameters },
      regionId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRecommendParametersResponseBody extends $tea.Model {
  recommendParameterValues?: GetTemplateRecommendParametersResponseBodyRecommendParameterValues[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recommendParameterValues: 'RecommendParameterValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendParameterValues: { 'type': 'array', 'itemType': GetTemplateRecommendParametersResponseBodyRecommendParameterValues },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRecommendParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateRecommendParametersResponseBody;
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
      body: GetTemplateRecommendParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The data display option. Valid values:
   * 
   * *   Sources: displays only the data of source nodes. This setting takes effect only when TemplateScratchType is set to ArchitectureDetection.
   * *   Source: displays only the data of the source node. This setting takes effect only when TemplateScratchType is not set to ArchitectureDetection.
   * *   Provisions: displays only the data of new nodes. This setting takes effect only when TemplateScratchType is not set to ArchitectureDetection.
   * *   All: displays all data.
   * 
   * For more information about source nodes and new nodes, see [Overview](https://help.aliyun.com/document_detail/352074.html).
   * 
   * >  If you do not specify this parameter, the node data is not displayed.
   * 
   * @example
   * Source
   */
  showDataOption?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      showDataOption: 'ShowDataOption',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      showDataOption: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8E0EF98-6FBD-5656-8298-FC8194F0F7B7
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scenario.
   */
  templateScratch?: GetTemplateScratchResponseBodyTemplateScratch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratch: 'TemplateScratch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratch: GetTemplateScratchResponseBodyTemplateScratch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateScratchResponseBody;
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
      body: GetTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters that are defined in the template.
   */
  parameters?: GetTemplateSummaryRequestParameters[];
  /**
   * @remarks
   * The region ID of the stack or stack group that uses the template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter takes effect only when one of the following parameters are specified: StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * my-stack-group
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length.\\
   * If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.\\
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * > If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateSummaryRequestParameters },
      regionId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The description of the stack template.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The metadata that is defined in the template.
   * 
   * @example
   * {"key": "value"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The declarations of the parameters in the template.
   */
  parameters?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The resource identifier summaries.\\
   * A summary describes the resource that you want to import and the properties that are used to identify the resource during the import. For example, VpcId is an identifier property of ALIYUN::ECS::VPC.
   */
  resourceIdentifierSummaries?: GetTemplateSummaryResponseBodyResourceIdentifierSummaries[];
  /**
   * @remarks
   * All resource types that are used in the template.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The version of the template.
   * 
   * @example
   * 2015-09-01
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadata: 'Metadata',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceIdentifierSummaries: 'ResourceIdentifierSummaries',
      resourceTypes: 'ResourceTypes',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceIdentifierSummaries: { 'type': 'array', 'itemType': GetTemplateSummaryResponseBodyResourceIdentifierSummaries },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateSummaryResponseBody;
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
      body: GetTemplateSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITaskEventsRequest extends $tea.Model {
  /**
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @example
   * t-asasas*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITaskEventsResponseBody extends $tea.Model {
  /**
   * @example
   * Forbidden
   */
  code?: string;
  events?: ListAITaskEventsResponseBodyEvents[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      events: 'Events',
      httpStatusCode: 'HttpStatusCode',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      events: { 'type': 'array', 'itemType': ListAITaskEventsResponseBodyEvents },
      httpStatusCode: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITaskEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAITaskEventsResponseBody;
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
      body: ListAITaskEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITasksRequest extends $tea.Model {
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * U12WEI6Ro2ol3wA54rBNS3Cltv2VJyA+7hP4GqbIOhmWU5mWU9ZE3cXLgDaH4KSMRfIYcIVrvtHaAzCoyfo7VQ==
   */
  nextToken?: string;
  /**
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITasksResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * U12WEI6Ro2ol3wA54rBNS3Cltv2VJyA+7hP4GqbIOhmWU5mWU9ZE3cXLgDaH4KSMRfIYcIVrvtHaAzCoyfo7VQ==
   */
  nextToken?: string;
  /**
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  tasks?: ListAITasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      tasks: { 'type': 'array', 'itemType': ListAITasksResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAITasksResponseBody;
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
      body: ListAITasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set. If detailed information about the change set is not required, you can use this parameter to replace the GetChangeSet operation.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of change set N. Maximum value of N: 5. You can use an asterisk (\\*) as a wildcard for fuzzy search.
   * 
   * @example
   * MyChangeSet
   */
  changeSetName?: string[];
  /**
   * @remarks
   * The execution status of change set N. Maximum value of N: 5. Valid values:
   * 
   * *   UNAVAILABLE
   * *   AVAILABLE
   * *   EXECUTE_IN_PROGRESS
   * *   EXECUTE_COMPLETE
   * *   EXECUTE_FAILED
   * *   OBSOLETE
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string[];
  /**
   * @remarks
   * The page number.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.\\
   * Valid values: 1 to 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The status of change set N. Maximum value of N: 5. Valid values:
   * 
   * *   CREATE_PENDING
   * *   CREATE_IN_PROGRESS
   * *   CREATE_COMPLETE
   * *   CREATE_FAILED
   * *   DELETE_FAILED
   * *   DELETE_COMPLETE
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      executionStatus: 'ExecutionStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: { 'type': 'array', 'itemType': 'string' },
      executionStatus: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The change sets.
   */
  changeSets?: ListChangeSetsResponseBodyChangeSets[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of change sets returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      changeSets: 'ChangeSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSets: { 'type': 'array', 'itemType': ListChangeSetsResponseBodyChangeSets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChangeSetsResponseBody;
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
      body: ListChangeSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticsRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * @example
   * 2829A772-B154-5A0A-B61B-DEE8A9EE8A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The product that is diagnosed.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The maximum number of results to be returned in a single call when NextToken is used for the query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f01****
   */
  nextToken?: string;
  /**
   * @remarks
   * The diagnosis status.
   * 
   * @example
   * Complete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      maxResults: 'string',
      nextToken: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The items that are diagnosed.
   */
  diagnostics?: ListDiagnosticsResponseBodyDiagnostics[];
  /**
   * @remarks
   * The HTTP status code returned. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f01****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1983D1C4-88EA-5D7D-90AB-467D01867A5D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      diagnostics: 'Diagnostics',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnostics: { 'type': 'array', 'itemType': ListDiagnosticsResponseBodyDiagnostics },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDiagnosticsResponseBody;
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
      body: ListDiagnosticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeRegistrationsRequest extends $tea.Model {
  /**
   * @remarks
   * The entity type. Set the value to Module.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the registration record.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  registrationId?: string;
  /**
   * @remarks
   * The resource type. The resource type can contain letters, digits, colons (:), and asterisks (\\*). You can use an asterisk (\\*) to perform a fuzzy match.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The registration state. Valid values:
   * 
   * *   IN_PROGRESS
   * *   COMPLETE
   * *   FAILED
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      registrationId: 'RegistrationId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      registrationId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeRegistrationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The registration records of the resource.
   */
  registrations?: ListResourceTypeRegistrationsResponseBodyRegistrations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of registration records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      registrations: 'Registrations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      registrations: { 'type': 'array', 'itemType': ListResourceTypeRegistrationsResponseBodyRegistrations },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeRegistrationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTypeRegistrationsResponseBody;
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
      body: ListResourceTypeRegistrationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The versions of the resource types.
   */
  resourceTypeVersions?: ListResourceTypeVersionsResponseBodyResourceTypeVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeVersions: 'ResourceTypeVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeVersions: { 'type': 'array', 'itemType': ListResourceTypeVersionsResponseBodyResourceTypeVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTypeVersionsResponseBody;
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
      body: ListResourceTypeVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesRequest extends $tea.Model {
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   All: all types of resources.
   * *   Resource (default): regular resources. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * *   DataSource: DataSource resources. For more information, see [DataSource resources](https://help.aliyun.com/document_detail/404753.html).
   * *   Module: modules.
   * 
   * @example
   * Resource
   */
  entityType?: string;
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS (default): The resource type is provided by Resource Orchestration Service (ROS).
   * *   Self: The resource type is provided by you.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The resource type. The resource type can contain letters, digits, colons (:), and asterisks (\\*). You can use an asterisk (\\*) to perform a fuzzy match.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      provider: 'Provider',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      provider: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EA00860C-ECAF-5253-A1F9-8198695A7157
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type summaries.
   */
  resourceTypeSummaries?: ListResourceTypesResponseBodyResourceTypeSummaries[];
  /**
   * @remarks
   * The array of resource types.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeSummaries: 'ResourceTypeSummaries',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeSummaries: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypeSummaries },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTypesResponseBody;
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
      body: ListResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsRequest extends $tea.Model {
  /**
   * @remarks
   * The logical IDs of the resources.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string[];
  /**
   * @remarks
   * The number of the page to return.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.\\
   * Maximum value: 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource types.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string[];
  /**
   * @remarks
   * The stack ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * CREATE_IN_PROGRESS
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceType: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The events.
   */
  events?: ListStackEventsResponseBodyEvents[];
  /**
   * @remarks
   * The page number of the returned page.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.\\
   * Maximum value: 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned events.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListStackEventsResponseBodyEvents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackEventsResponseBody;
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
      body: ListStackEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * You can call the [ListStackGroupOperations](https://help.aliyun.com/document_detail/151342.html) operation to query the operation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack group.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the results of the operation.
   */
  stackGroupOperationResults?: ListStackGroupOperationResultsResponseBodyStackGroupOperationResults[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperationResults: 'StackGroupOperationResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperationResults: { 'type': 'array', 'itemType': ListStackGroupOperationResultsResponseBodyStackGroupOperationResults },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackGroupOperationResultsResponseBody;
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
      body: ListStackGroupOperationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.
   * 
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The stack group operations.
   */
  stackGroupOperations?: ListStackGroupOperationsResponseBodyStackGroupOperations[];
  /**
   * @remarks
   * The total number of stack group operations.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperations: 'StackGroupOperations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperations: { 'type': 'array', 'itemType': ListStackGroupOperationsResponseBodyStackGroupOperations },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackGroupOperationsResponseBody;
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
      body: ListStackGroupOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, the stack groups in all the resource groups are queried.
   * 
   * > To obtain the resource group ID, go to the **Resource Group** page in the **Resource Management** console. For more information, see [View the basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmzawhxxcj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the stack group. If you do not specify this parameter, the stack groups in all states in the specified region are queried.
   * 
   * Valid values:
   * 
   * *   ACTIVE
   * *   DELETED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the stack group.
   */
  tags?: ListStackGroupsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListStackGroupsRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The stack groups.
   */
  stackGroups?: ListStackGroupsResponseBodyStackGroups[];
  /**
   * @remarks
   * The total number of stack groups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroups: 'StackGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroups: { 'type': 'array', 'itemType': ListStackGroupsResponseBodyStackGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackGroupsResponseBody;
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
      body: ListStackGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * *   If the stack group is granted self-managed permissions, the stack belongs to an Alibaba Cloud account.
   * *   If the stack group is granted service-managed permissions, the stack belongs to a member in a resource directory.
   * 
   * > For more information about the destination account, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * 156552876021****
   */
  stackInstanceAccountId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-beijing
   */
  stackInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85DE34BD-7FF9-480F-8C21-556E9DA93ACD
   */
  requestId?: string;
  /**
   * @remarks
   * The stacks.
   */
  stackInstances?: ListStackInstancesResponseBodyStackInstances[];
  /**
   * @remarks
   * The total number of stacks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackInstances: 'StackInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackInstances: { 'type': 'array', 'itemType': ListStackInstancesResponseBodyStackInstances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackInstancesResponseBody;
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
      body: ListStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the operation of which you want to detect risks. Valid values:
   * 
   * *   DeleteStack: detects high risks that may arise in resources when you delete a stack.
   * *   CreateStack: detects the missing permissions when you fail to create a stack.
   * 
   * @example
   * DeleteStack
   */
  operationType?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * *   If you specify a RAM role, ROS creates stacks based on the permissions that are granted to the RAM role and uses the credentials of the RAM role to call the API operations of Alibaba Cloud services.
   * *   If you do not specify a RAM role, ROS creates stacks based on the permissions of your Alibaba Cloud account.
   * 
   * The name of the RAM role can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to retain all resources in the stack. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * > This parameter takes effect only if you set OperationType to DeleteStack.
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The list of resources to retain.
   * 
   * > This parameter takes effect only if you set OperationType to DeleteStack.
   * 
   * @example
   * WebServer
   */
  retainResources?: string[];
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * > You must specify one of TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo and oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify RegionId in the URL, the region ID of the stack is used.
   * 
   * > You must specify one of TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template.
   * 
   * > This parameter takes effect only if you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationType: 'OperationType',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationType: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The operations on which the permissions are not granted to the Alibaba Cloud account of the caller.
   */
  missingPolicyActions?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72108E7A-E874-4A5E-B22C-A61E94AD12CD
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that are at risk.
   */
  riskResources?: ListStackOperationRisksResponseBodyRiskResources[];
  static names(): { [key: string]: string } {
    return {
      missingPolicyActions: 'MissingPolicyActions',
      requestId: 'RequestId',
      riskResources: 'RiskResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicyActions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      riskResources: { 'type': 'array', 'itemType': ListStackOperationRisksResponseBodyRiskResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackOperationRisksResponseBody;
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
      body: ListStackOperationRisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the resource drift detection operation was initiated.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource properties as defined in the template, in JSON format.
   * 
   * @example
   * MODIFIED
   */
  resourceDriftStatus?: string[];
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceDriftStatus: 'ResourceDriftStatus',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceDriftStatus: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource drifts.
   */
  resourceDrifts?: ListStackResourceDriftsResponseBodyResourceDrifts[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceDrifts: 'ResourceDrifts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceDrifts: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDrifts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackResourceDriftsResponseBody;
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
      body: ListStackResourceDriftsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the region to which the stack belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about resources.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resources?: ListStackResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListStackResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStackResourcesResponseBody;
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
      body: ListStackResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-01T15:16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  parentStackId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.\\
   * For more information about resource groups, see the "Resource Group" section of the [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html) topic.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return nested stacks. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * > If you specify ParentStackId, you must set ShowNestedStack to true.
   * 
   * @example
   * true
   */
  showNestedStack?: boolean;
  /**
   * @remarks
   * The stack ID. You can specify this parameter to query only the stack ID. If you want to query the detailed information about the stack, call the GetStack operation.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The IDs of the stacks.
   */
  stackIds?: string[];
  /**
   * @remarks
   * The names of the stacks.
   * 
   * @example
   * MyStack
   */
  stackName?: string[];
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2023-04-01T15:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the stack.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string[];
  /**
   * @remarks
   * The tags of the stack.
   */
  tag?: ListStacksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showNestedStack: 'ShowNestedStack',
      stackId: 'StackId',
      stackIds: 'StackIds',
      stackName: 'StackName',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentStackId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showNestedStack: 'boolean',
      stackId: 'string',
      stackIds: { 'type': 'array', 'itemType': 'string' },
      stackName: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListStacksRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBAC80B4-9C27-529D-BC9C-4155FA5CD7A7
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the stacks.
   */
  stacks?: ListStacksResponseBodyStacks[];
  /**
   * @remarks
   * The total number of stacks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stacks: 'Stacks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stacks: { 'type': 'array', 'itemType': ListStacksResponseBodyStacks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStacksResponseBody;
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
      body: ListStacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the tag key. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * *   templatescratch: scenario
   * 
   * This parameter is required.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C429473A-5C66-4661-B5F8-4F900CD4330A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the tag. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources.
   * 
   * @example
   * 6bc589b5-9c02-4944-8fc3-f3624234****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * *   templatescratch: scenario
   * 
   * This parameter is required.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resources. You can specify up to 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C429473A-5C66-4661-B5F8-4F900CD4330A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tags that are added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
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

export class ListTagValuesRequest extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * TagKey1
   */
  key?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the tag value. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * *   templatescratch: scenario
   * 
   * This parameter is required.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C429473A-5C66-4661-B5F8-4F900CD4330A
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListTemplateScratchesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the scenario. Valid values:
   * 
   * *   GENERATE_IN_PROGRESS: The scenario is being created.
   * *   GENERATE_COMPLETE: The scenario is created.
   * *   GENERATE_FAILED: The scenario fails to be created.
   * 
   * @example
   * ["GENERATE_COMPLETE"]
   */
  status?: string;
  /**
   * @remarks
   * The tags of the scenario.
   */
  tags?: ListTemplateScratchesRequestTags[];
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ArchitectureReplication: resource replication
   * *   ArchitectureDetection: resource detection
   * *   ResourceImport: resource management
   * *   ResourceMigration: resource migration
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplateScratchesRequestTags },
      templateScratchId: 'string',
      templateScratchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1C09606-C58B-558F-9B4E-5BF263D17D09
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scenarios.
   */
  templateScratches?: ListTemplateScratchesResponseBodyTemplateScratches[];
  /**
   * @remarks
   * The total number of scenarios.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templateScratches: 'TemplateScratches',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateScratches: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratches },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTemplateScratchesResponseBody;
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
      body: ListTemplateScratchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of results to be returned in a single call when NextToken is used for the query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The versions.
   */
  versions?: ListTemplateVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      versions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyVersions },
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
   * Specifies whether to query the tag information. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * @example
   * Enabled
   */
  includeTags?: string;
  /**
   * @remarks
   * The page number.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.\\
   * Valid values: 1 to 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.\\
   * For more information about resource groups, see the "Resource Group" section of [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type of the template.
   * 
   * Valid values:
   * 
   * *   Private (default): The template belongs to the template owner.
   * *   Shared: The template is shared with other users.
   * *   Official: The template is the shared template of the official version.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: ListTemplatesRequestTag[];
  /**
   * @remarks
   * The template name. This parameter takes effect only when ShareType is set to Private. The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or letter.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tag: 'Tag',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tag: { 'type': 'array', 'itemType': ListTemplatesRequestTag },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.\\
   * Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A8413B-1F16-4DED-AC3E-61A00718DE8A
   */
  requestId?: string;
  /**
   * @remarks
   * The templates.
   */
  templates?: ListTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalCount: 'number',
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

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource. For more information about resource groups, see the "Resource Group" section of the [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource.\\
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 4e8611cb-251e-42b7-b9cb-3496362c****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * 
   * This parameter is required.
   * 
   * @example
   * stack
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

export class MoveResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F84A05B3-7275-4C8B-8AEE-9088C639C271
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
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
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length, and can contain letters, digits, underscores (_), and hyphens (-).\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to disable rollback for the resources when the stack fails to be created. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * Specifies whether to query the parameters that you want to use in compliance precheck.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  enablePreConfig?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources. This parameter takes effect only for Terraform stacks.
   * 
   * By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0.
   * 
   * > If you set this parameter to an integer greater than 0, the integer is used. If you set this parameter to 0 or leave this parameter empty, the default value of Terraform is used. In most cases, the default value of Terraform is 10.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: PreviewStackRequestParameters[];
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID. You can use this parameter to preview a stack that you want to update.
   * 
   * 
   * 
   * > -  You must and can specify only one of StackName and StackId.
   * > - In the scenario in which you preview a stack that you want to create or update, you cannot preview the resources in its nested stacks.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name. You can use this parameter to preview the stack that you want to create. The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * > You must and can specify only one of StackName and StackId.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The stack policy body must be 1 to 16,384 bytes in length.
   * 
   * > You can specify only one of StackPolicyBody and StackPolicyURL.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the stack policy. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You can specify only one of StackPolicyBody and StackPolicyURL.
   * 
   * The URL can be up to 1,350 bytes in length.
   * 
   * @example
   * oss://ros-stack-policy/demo
   */
  stackPolicyURL?: string;
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * For more information about how to query the scenario ID, see [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html).
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The region ID of the scenario. The default value is the same as the value of RegionId.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  templateScratchRegionId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * > You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and TemplateScratchId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period for creating the stack.
   * 
   * Unit: minutes.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableRollback: 'DisableRollback',
      enablePreConfig: 'EnablePreConfig',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackId: 'StackId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableRollback: 'boolean',
      enablePreConfig: 'boolean',
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': PreviewStackRequestParameters },
      regionId: 'string',
      stackId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack that is previewed.
   */
  stack?: PreviewStackResponseBodyStack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stack: PreviewStackResponseBodyStack,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreviewStackResponseBody;
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
      body: PreviewStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterResourceTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource type. The description can be up to 512 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Set the value to Module.
   * 
   * This parameter is required.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length. The template body is used as the module content. If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * 
   * > - This parameter takes effect only when EntityType is set to Module.
   * > - You can specify only one of the TemplateBody and TemplateURL parameters.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length. The template body is used as the module content.
   * 
   * > - If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * > -  This parameter takes effect only when EntityType is set to Module.
   * > -  You can specify only one of the TemplateBody and TemplateURL parameters.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      entityType: 'EntityType',
      resourceType: 'ResourceType',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      entityType: 'string',
      resourceType: 'string',
      templateBody: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterResourceTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the registration record. You can call the [ListResourceTypeRegistrations](https://help.aliyun.com/document_detail/2330740.html) operation to query registration records.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class RegisterResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterResourceTypeResponseBody;
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
      body: RegisterResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * Indicates whether stack deletion protection is enabled. Valid values:
   * 
   * *   Enabled: enables the stack deletion protection.
   * *   Disabled (default): Resource stack deletion protection is Disabled. You can use the console or API(DeleteStack) to release the stack resources.
   * 
   * >  The deletion of nested stacks is the same as the root stack.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * The delete protection attribute of a nested stack is determined by the root stack and remains unchanged from the root stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class SetDeletionProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDeletionProtectionResponseBody;
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
      body: SetDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResourceTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the default version. You can use this parameter to specify the default version of the resource type.
   * 
   * > You can specify only one of the VersionId and DefaultVersionId parameters.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type or resource type version. The description can be up to 512 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The version ID. If you want to modify a version of the resource type, you must specify this parameter. If you do not specify this parameter, only the resource type is modified.
   * 
   * > You can specify only one of the VersionId and DefaultVersionId parameters.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersionId: 'DefaultVersionId',
      description: 'Description',
      resourceType: 'ResourceType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersionId: 'string',
      description: 'string',
      resourceType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResourceTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class SetResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetResourceTypeResponseBody;
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
      body: SetResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStackPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The stack policy body must be 1 to 16,384 bytes in length.
   * 
   * You can specify one of the StackPolicyBody and StackPolicyURL parameters, but you cannot specify both of them.
   * 
   * @example
   * {"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The URL for the file that contains the stack policy. The URL must point to a template located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. The template can be up to 16,384 bytes in length, and the URL can be up to 1,350 bytes in length.
   * 
   * >  If the region of the OSS bucket is not specified, the RegionId value is used.
   * 
   * You can specify one of the StackPolicyBody and StackPolicyURL parameters, but you cannot specify both of them.
   * 
   * @example
   * oss://ros/stack-policy/demo
   */
  stackPolicyURL?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStackPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class SetStackPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetStackPolicyResponseBody;
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
      body: SetStackPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTemplatePermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud accounts with or from which you want to share or unshare the template.\\
   * Valid values of N: 1, 2, 3, 4, and 5.
   * 
   * > - This parameter cannot be set to the ID of the Alibaba Cloud account that owns the template, or the RAM users of this Alibaba Cloud account.
   * > - When ShareOption is set to CancelSharing, you can unshare the template from all the specified Alibaba Cloud accounts by using an asterisk (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  accountIds?: string[];
  /**
   * @remarks
   * The sharing option.
   * 
   * Valid values:
   * 
   * *   ShareToAccounts: shares the template with other Alibaba Cloud accounts.
   * *   CancelSharing: unshares the template.
   * 
   * This parameter is required.
   * 
   * @example
   * ShareToAccounts
   */
  shareOption?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The version of the shared template. This parameter takes effect only if you set ShareOption to ShareToAccounts and set VersionOption to Specified.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The version option for the shared template. This parameter takes effect only if you set ShareOption to ShareToAccounts.
   * 
   * Valid values:
   * 
   * *   AllVersions (default): shares all versions of the template.
   * *   Latest: shares only the latest version of template. When the version of the template is updated, ROS updates the shared version to the latest version.
   * *   Current: shares only the current version of the template. When the version of the template is updated, ROS does not update the shared version.
   * *   Specified: shares only the specified version of the template.
   * 
   * @example
   * Specified
   */
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      shareOption: 'ShareOption',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      shareOption: 'string',
      templateId: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTemplatePermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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

export class SetTemplatePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetTemplatePermissionResponseBody;
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
      body: SetTemplatePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The token can be up to 64 characters in length and can contain letters, digits, hyphens (-) and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The logical ID of the resource as defined in the template.
   * 
   * This parameter is required.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The status of the signal. Failure signals can cause stack creation or update to fail. If all signals are warnings, the stack cannot be created or updated. Valid values:
   * 
   * *   SUCCESS
   * *   FAILURE
   * *   WARNING
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the signal. The ID must be 1 to 64 characters in length. If multiple signals are sent to a single resource, each signal must have a unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27c7347b-352a-4377-accf-63d361c1****
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
      status: 'Status',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      stackId: 'string',
      status: 'string',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
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

export class SignalResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignalResourceResponseBody;
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
      body: SignalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStackGroupOperationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * You can call the [ListStackGroupOperations](https://help.aliyun.com/document_detail/151342.html) operation to obtain the operation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStackGroupOperationResponseBody extends $tea.Model {
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

export class StopStackGroupOperationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopStackGroupOperationResponseBody;
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
      body: StopStackGroupOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the tag that you want to create. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * 7fee80e1-8c48-4c2f-8300-0f6dc40b****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * *   templatescratch: scenario
   * 
   * This parameter is required.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
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

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. This parameter takes effect when TagKey is not specified in the request. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the tag. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resource.
   * 
   * > If you set ResourceType to stackgroup, you must set ResourceId to the name of the stack group.
   * 
   * This parameter is required.
   * 
   * @example
   * 46ec7b78-9d5e-4b21-aefd-448c90aa****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   stack: stack
   * *   stackgroup: stack group
   * *   template: template
   * *   templatescratch: scenario
   * 
   * This parameter is required.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the resource. You can specify up to 20 tag keys.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B639225A0
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

export class UpdateStackRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests.
   * 
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to roll back the resources in the stack when the stack fails to be updated.
   * 
   * Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * Specifies whether only to validate the stack in the request. Default value: false. Valid values:
   * 
   * *   true: only validates the stack.
   * *   false: validates and updates the stack.
   * 
   * >  When no changes are made during the update, the following rules apply: If you set the DryRun parameter to false, the NotSupported error code is returned. If you set the DryRun parameter to true, no error is reported.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The dry run option in the list format. You can specify only one dry run option.
   * 
   * > This parameter takes effect only when DryRun is set to true.
   */
  dryRunOptions?: string[];
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources.
   * 
   * By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0.
   * 
   * > - If you set this parameter to an integer that is greater than 0, the integer is used.
   * > -  If you set this parameter to 0, no limit is imposed on Resource Orchestration Service (ROS) stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * > -  If you leave this parameter empty, the value that you specified for this parameter in the previous request is used. If you left this parameter empty in the previous request, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * > - If you set this parameter to a specific value, ROS associates the value with the stack. The value affects subsequent operations on the stack.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The parameters.
   */
  parameters?: UpdateStackRequestParameters[];
  /**
   * @remarks
   * The name of the RAM role. Resource Orchestration Service (ROS) assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.
   * 
   * ROS assumes the RAM role to perform operations on the stack. If you have permissions to perform operations on the stack but do not have permissions to use the RAM role, ROS still assumes the RAM role. You must make sure that the least privileges are granted to the RAM role.
   * 
   * If you do not specify this parameter, ROS assumes the existing RAM role that is associated with the stack. If no RAM roles are available, ROS uses a temporary credential that is generated from the credentials of your account.
   * 
   * The name of the RAM role can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the region in which the stack is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the replacement update feature. If you cannot change resource properties, you can enable the replacement update feature to replace the resource properties. If the replacement update feature is used, the existing resource is deleted and a new resource is created. The physical ID of the new resource is different from the physical ID of the deleted resource.
   * 
   * Default value: Disabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * >  Changes have higher priorities than replacement updates.
   * 
   * @example
   * Disabled
   */
  replacementOption?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The policy body must be 1 to 16,384 bytes in length.
   * 
   * >  You can specify only one of the StackPolicyBody and StackPolicyURL parameters.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The structure that contains the body of the temporary overriding stack policy. The policy body must be 1 to 16,384 bytes in length.
   * 
   * If you want to update protected resources, you must specify a temporary overriding stack policy during the update. If you do not specify a temporary overriding stack policy, the existing policy that is associated with the stack is used.
   * 
   * This parameter takes effect only when the ChangeSetType parameter is set to UPDATE. You can specify only one of the following parameters:
   * 
   * *   StackPolicyBody
   * *   StackPolicyURL
   * *   StackPolicyDuringUpdateBody
   * *   StackPolicyDuringUpdateURL
   * 
   * @example
   * {"Statement": [{"Effect": "Allow", "Action": "Update:*", "Principal": "*", "Resource": "*"}]}
   */
  stackPolicyDuringUpdateBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the temporary overriding stack policy. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length.
   * 
   * >  If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * The URL can be up to 1,350 bytes in length.
   * 
   * If you want to update protected resources, you must specify a temporary overriding stack policy during the update. If you do not specify a temporary overriding stack policy, the existing policy that is associated with the stack is used. This parameter takes effect only when the ChangeSetType parameter is set to UPDATE. You can specify only one of the following parameters:
   * 
   * *   StackPolicyBody
   * *   StackPolicyURL
   * *   StackPolicyDuringUpdateBody
   * *   StackPolicyDuringUpdateURL
   * 
   * @example
   * oss://ros-stack-policy/demo
   */
  stackPolicyDuringUpdateURL?: string;
  /**
   * @remarks
   * The URL of the file that contains the stack policy. The URL must point to a policy that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/stack-policy/demo or oss://ros/stack-policy/demo?RegionId=cn-hangzhou. The policy file can be up to 16,384 bytes in length. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You can specify only one of the StackPolicyBody and StackPolicyURL parameters.
   * 
   * The URL can be up to 1,350 bytes in length.
   * 
   * @example
   * oss://ros-stack-policy/demo
   */
  stackPolicyURL?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the template.
   */
  tags?: UpdateStackRequestTags[];
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared templates and private templates.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an OSS bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body must be 1 to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You must specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when the TemplateId parameter is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period for the update operation on the stack.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * Specifies whether to use the values specified in the previous request for the parameters that you do not specify in the current request.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  usePreviousParameters?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableRollback: 'DisableRollback',
      dryRun: 'DryRun',
      dryRunOptions: 'DryRunOptions',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      replacementOption: 'ReplacementOption',
      resourceGroupId: 'ResourceGroupId',
      stackId: 'StackId',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      stackPolicyURL: 'StackPolicyURL',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      usePreviousParameters: 'UsePreviousParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableRollback: 'boolean',
      dryRun: 'boolean',
      dryRunOptions: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': UpdateStackRequestParameters },
      ramRoleName: 'string',
      regionId: 'string',
      replacementOption: 'string',
      resourceGroupId: 'string',
      stackId: 'string',
      stackPolicyBody: 'string',
      stackPolicyDuringUpdateBody: 'string',
      stackPolicyDuringUpdateURL: 'string',
      stackPolicyURL: 'string',
      tags: { 'type': 'array', 'itemType': UpdateStackRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      usePreviousParameters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The dry run result. This parameter is returned only if DryRun is set to true.
   */
  dryRunResult?: UpdateStackResponseBodyDryRunResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: UpdateStackResponseBodyDryRunResult,
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStackResponseBody;
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
      body: UpdateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * ["12****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * The key of parameter N. If you do not specify the key and value of the parameter, ROS uses the default key and value in the template.
   * 
   * Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you set the Parameters parameter, you must set the Parameters.N.ParameterKey parameter.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The IDs of the folders in the resource directory. You can specify up to five folder IDs.
   * 
   * You can create stacks within all members in the specified folders. If you create stacks in the Root folder, the stacks are created within all members in the resource directory.
   * 
   * >  To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
   * 
   * @example
   * {"Enabled": true, "RetainStacksOnAccountRemoval": true}
   */
  autoDeployment?: UpdateStackGroupRequestAutoDeployment;
  /**
   * @remarks
   * The option for the stack group. You can specify up to one option.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * {"RdFolderIds": ["fd-4PvlVLOL8v"]}
   */
  deploymentTargets?: UpdateStackGroupRequestDeploymentTargets;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length. If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * >  You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * My Stack Group
   */
  description?: string;
  /**
   * @remarks
   * The value of parameter N.
   * 
   * Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you set the Parameters parameter, you must set the Parameters.N.ParameterValue parameter.
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify a version, the latest version is used.
   * 
   * >  This parameter takes effect only if the TemplateId parameter is set.
   * 
   * @example
   * Update stack instances in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The list of parameters.
   * 
   * @example
   * {"FailureToleranceCount": 1,"MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable automatic deployment.
   * 
   * Valid values:
   * 
   * *   true: enables automatic deployment. If you add a member to the folder to which the stack group belongs after you enable automatic deployment, the stack group deploys its stack instances within the member. If you remove a member from the folder, the stack group deletes stack instances that are deployed within the member.
   * *   false: disables automatic deployment. After you disable automatic deployment, the stack instances remain unchanged even if members in the folder change.
   */
  parameters?: UpdateStackGroupRequestParameters[];
  /**
   * @remarks
   * The folder IDs in the resource directory. You can specify a maximum of five folder IDs.
   * 
   * You must set at least one of the RdFolderIds and AccountIds parameters. The parameters are subject to the following items:
   * 
   * *   If you set only the RdFolderIds parameter, stacks are deployed within all the members in the specified folders. If you specify the Root folder, ROS deploys the stacks within all the members in the resource directory.
   * *   If you set only the AccountIds parameter, stacks are deployed within the specified members.
   * *   If you set both parameters, the accounts specified by AccountIds must be contained in the folders specified by RdFolderIds.
   * 
   * >  To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The region IDs of stack instances. You can specify a maximum of 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the operation to update the stack group.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * The region IDs of stack instances. You can specify a maximum of 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  templateBody?: string;
  /**
   * @remarks
   * The permission model.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED: the self-managed permission model. This is the default value. If you use the self-managed model for the stack group, you must create RAM roles for the administrator and execution accounts, and establish a trust relationship between the accounts to deploy stacks within the execution account.
   * *   SERVICE_MANAGED: the service-managed permission model. If you use the service-managed model for the stack group, ROS creates service-linked roles for the administrator and execution accounts, and the administrator account uses its role to deploy stacks within the execution account.
   * 
   * >- If stack instances have been created in the stack group, you cannot switch the permission mode of the stack group.
   * >- If you want to use the service-managed permission model to deploy stacks, your account must be the management account or a delegated administrator account of your resource directory and the trusted access feature is enabled for the account. For more information, see [Step 1: (Optional) Create a delegated administrator account](https://help.aliyun.com/document_detail/308253.html) and [Step 2: Enable trusted access](https://help.aliyun.com/document_detail/298229.html).
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the RAM role to be assumed by the administrator role AliyunROSStackGroupAdministrationRole. This parameter is required if you want to grant self-managed permissions to the stack group. If you do not specify a value for this parameter, the default value AliyunROSStackGroupExecutionRole is used. You can use this role in ROS to perform operations on the stacks that correspond to stack instances in the stack group.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The information about automatic deployment settings.
   * 
   * >  This parameter is required only if the PermissionModel parameter is set to SERVICE_MANAGED.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      administrationRoleName: 'AdministrationRoleName',
      autoDeployment: 'AutoDeployment',
      capabilities: 'Capabilities',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      administrationRoleName: 'string',
      autoDeployment: UpdateStackGroupRequestAutoDeployment,
      capabilities: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: UpdateStackGroupRequestDeploymentTargets,
      description: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'array', 'itemType': UpdateStackGroupRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * >  You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * ["12****"]
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The key of parameter N. If you do not specify the key and value of the parameter, ROS uses the default key and value in the template.
   * 
   * Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you set the Parameters parameter, you must set the Parameters.N.ParameterKey parameter.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The IDs of the folders in the resource directory. You can specify up to five folder IDs.
   * 
   * You can create stacks within all members in the specified folders. If you create stacks in the Root folder, the stacks are created within all members in the resource directory.
   * 
   * >  To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
   * 
   * @example
   * {"Enabled": true, "RetainStacksOnAccountRemoval": true}
   */
  autoDeploymentShrink?: string;
  /**
   * @remarks
   * The option for the stack group. You can specify up to one option.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * >  You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * {"RdFolderIds": ["fd-4PvlVLOL8v"]}
   */
  deploymentTargetsShrink?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length. If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * >  You must specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * My Stack Group
   */
  description?: string;
  /**
   * @remarks
   * The value of parameter N.
   * 
   * Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you set the Parameters parameter, you must set the Parameters.N.ParameterValue parameter.
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify a version, the latest version is used.
   * 
   * >  This parameter takes effect only if the TemplateId parameter is set.
   * 
   * @example
   * Update stack instances in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The list of parameters.
   * 
   * @example
   * {"FailureToleranceCount": 1,"MaxConcurrentCount": 2}
   */
  operationPreferencesShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic deployment.
   * 
   * Valid values:
   * 
   * *   true: enables automatic deployment. If you add a member to the folder to which the stack group belongs after you enable automatic deployment, the stack group deploys its stack instances within the member. If you remove a member from the folder, the stack group deletes stack instances that are deployed within the member.
   * *   false: disables automatic deployment. After you disable automatic deployment, the stack instances remain unchanged even if members in the folder change.
   */
  parameters?: UpdateStackGroupShrinkRequestParameters[];
  /**
   * @remarks
   * The folder IDs in the resource directory. You can specify a maximum of five folder IDs.
   * 
   * You must set at least one of the RdFolderIds and AccountIds parameters. The parameters are subject to the following items:
   * 
   * *   If you set only the RdFolderIds parameter, stacks are deployed within all the members in the specified folders. If you specify the Root folder, ROS deploys the stacks within all the members in the resource directory.
   * *   If you set only the AccountIds parameter, stacks are deployed within the specified members.
   * *   If you set both parameters, the accounts specified by AccountIds must be contained in the folders specified by RdFolderIds.
   * 
   * >  To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information of a folder](https://help.aliyun.com/document_detail/111223.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The region IDs of stack instances. You can specify a maximum of 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the operation to update the stack group.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIdsShrink?: string;
  /**
   * @remarks
   * The region IDs of stack instances. You can specify a maximum of 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  templateBody?: string;
  /**
   * @remarks
   * The permission model.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED: the self-managed permission model. This is the default value. If you use the self-managed model for the stack group, you must create RAM roles for the administrator and execution accounts, and establish a trust relationship between the accounts to deploy stacks within the execution account.
   * *   SERVICE_MANAGED: the service-managed permission model. If you use the service-managed model for the stack group, ROS creates service-linked roles for the administrator and execution accounts, and the administrator account uses its role to deploy stacks within the execution account.
   * 
   * >- If stack instances have been created in the stack group, you cannot switch the permission mode of the stack group.
   * >- If you want to use the service-managed permission model to deploy stacks, your account must be the management account or a delegated administrator account of your resource directory and the trusted access feature is enabled for the account. For more information, see [Step 1: (Optional) Create a delegated administrator account](https://help.aliyun.com/document_detail/308253.html) and [Step 2: Enable trusted access](https://help.aliyun.com/document_detail/298229.html).
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the RAM role to be assumed by the administrator role AliyunROSStackGroupAdministrationRole. This parameter is required if you want to grant self-managed permissions to the stack group. If you do not specify a value for this parameter, the default value AliyunROSStackGroupExecutionRole is used. You can use this role in ROS to perform operations on the stacks that correspond to stack instances in the stack group.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The information about automatic deployment settings.
   * 
   * >  This parameter is required only if the PermissionModel parameter is set to SERVICE_MANAGED.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      administrationRoleName: 'AdministrationRoleName',
      autoDeploymentShrink: 'AutoDeployment',
      capabilities: 'Capabilities',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      stackGroupName: 'StackGroupName',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      administrationRoleName: 'string',
      autoDeploymentShrink: 'string',
      capabilities: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      description: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateStackGroupShrinkRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      regionIdsShrink: 'string',
      stackGroupName: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
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
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStackGroupResponseBody;
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
      body: UpdateStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * > If you want to update stacks in self-managed permission mode, you must specify this parameter.
   * 
   * @example
   * ["151266687691****","141261387191****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which you want to deploy stacks in service-managed mode.
   * 
   * > If you want to update stacks in service-managed permission mode, you must specify this parameter.
   */
  deploymentTargets?: UpdateStackInstancesRequestDeploymentTargets;
  /**
   * @remarks
   * The description of the update operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Update stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the update operation.
   * 
   * The following parameters are available:
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *     The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *     Valid values of N: 1 to 20.
   * 
   *     If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * - {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * - {"RegionConcurrencyType": N}
   * 
   *   The mode that you want to use to deploy stacks across regions. Valid values:
   *   - SEQUENTIAL (default): deploys stacks in the specified regions one by one in sequence. This way, ROS deploys stacks in only one region at a time. 
   * 
   *    - PARALLEL: deploys stacks in all the specified regions in parallel. 
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * > - You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1,"MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The parameters that are used to override specific parameters.
   */
  parameterOverrides?: UpdateStackInstancesRequestParameterOverrides[];
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to update the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The timeout period for the update operation.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: UpdateStackInstancesRequestDeploymentTargets,
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesRequestParameterOverrides },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * > If you want to update stacks in self-managed permission mode, you must specify this parameter.
   * 
   * @example
   * ["151266687691****","141261387191****"]
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can contain letters, digits, hyphens (-), and underscores (_), and cannot exceed 64 characters in length.\\
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The folders in which you want to deploy stacks in service-managed mode.
   * 
   * > If you want to update stacks in service-managed permission mode, you must specify this parameter.
   */
  deploymentTargetsShrink?: string;
  /**
   * @remarks
   * The description of the update operation.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * Update stack instances in hangzhou and beijing
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preference settings of the update operation.
   * 
   * The following parameters are available:
   * -  {"FailureToleranceCount": N}
   * 
   *     The number of accounts within which stack operation failures are allowed in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region. If ROS stops the operation in one region, ROS stops the operation in other regions.
   * 
   *     Valid values of N: 0 to 20.
   * 
   *     If you do not specify FailureToleranceCount, 0 is used as the default value.
   * 
   * -  {"FailureTolerancePercentage": N}
   * 
   *     The percentage of the number of accounts within which stack operation failures are allowed to the total number of accounts in each region. If the value of this parameter is exceeded, ROS stops the operation in the region.
   * 
   *     Valid values of N: 0 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify FailureTolerancePercentage, 0 is used as the default value.
   * 
   * -  {"MaxConcurrentCount": N}
   * 
   *     The maximum number of accounts within which multiple stacks are deployed at the same time in each region.
   * 
   *     Valid values of N: 1 to 20.
   * 
   *     If you do not specify MaxConcurrentCount, 1 is used as the default value.
   * 
   * - {"MaxConcurrentPercentage": N}
   * 
   *     The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   *     Valid values: 1 to 100. If the numeric value in the percentage is not an integer, ROS rounds the value down to the nearest integer.
   * 
   *     If you do not specify MaxConcurrentPercentage, 1 is used as the default value.
   * 
   * - {"RegionConcurrencyType": N}
   * 
   *   The mode that you want to use to deploy stacks across regions. Valid values:
   *   - SEQUENTIAL (default): deploys stacks in the specified regions one by one in sequence. This way, ROS deploys stacks in only one region at a time. 
   * 
   *    - PARALLEL: deploys stacks in all the specified regions in parallel. 
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You can specify only one of the following parameters: MaxConcurrentCount and MaxConcurrentPercentage.
   * > - You can specify only one of the following parameters: FailureToleranceCount and FailureTolerancePercentage.
   * 
   * @example
   * {"FailureToleranceCount": 1,"MaxConcurrentCount": 2}
   */
  operationPreferencesShrink?: string;
  /**
   * @remarks
   * The parameters that are used to override specific parameters.
   */
  parameterOverrides?: UpdateStackInstancesShrinkRequestParameterOverrides[];
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to update the stacks. You can specify up to 20 region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIdsShrink?: string;
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The timeout period for the update operation.
   * 
   * *   Default value: 60.
   * *   Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesShrinkRequestParameterOverrides },
      regionId: 'string',
      regionIdsShrink: 'string',
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
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
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStackInstancesResponseBody;
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
      body: UpdateStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests.
   * 
   * The token can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only preview the corrected template in this request. Default value: false. Valid values:
   * 
   * *   true: returns the content of the corrected template and does not correct the template. After Resource Orchestration Service (ROS) compares the corrected template with the original template, ROS determines whether to execute the correction.
   * *   false: corrects the template to eliminate drift.
   * 
   * >  We recommend that you set the DryRun parameter to true to preview the corrected template. If the template content meets expectations, set the DryRun parameter to false to execute the correction.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The logical ID of resource.
   * 
   * @example
   * Vpc
   */
  logicalResourceId?: string[];
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The format of the returned template. Default value: JSON. Valid values:
   * 
   * *   JSON
   * *   YAML
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateFormat: 'TemplateFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
      templateFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The template content after correction.
   * 
   * @example
   * {\\"ROSTemplateFormatVersion\\": \\"2015-09-01\\", \\"Resources\\": {\\"Vpc\\": {\\"Type\\": \\"ALIYUN::ECS::VPC\\", \\"Properties\\": {\\"VpcName\\": \\"test\\", \\"CidrBlock\\": \\"192.168.0.0/16\\", \\"Description\\": \\"test2\\"}}}, \\"Outputs\\": {\\"VpcId\\": {\\"Value\\": {\\"Fn::GetAtt\\": [\\"Vpc\\", \\"VpcId\\"]}}}}
   */
  newTemplateBody?: string;
  /**
   * @remarks
   * The template content before correction.
   * 
   * @example
   * {\\"ROSTemplateFormatVersion\\": \\"2015-09-01\\", \\"Resources\\": {\\"Vpc\\": {\\"Type\\": \\"ALIYUN::ECS::VPC\\", \\"Properties\\": {\\"VpcName\\": \\"test\\", \\"CidrBlock\\": \\"192.168.0.0/16\\", \\"Description\\": \\"test1\\"}}}, \\"Outputs\\": {\\"VpcId\\": {\\"Value\\": {\\"Fn::GetAtt\\": [\\"Vpc\\", \\"VpcId\\"]}}}}
   */
  oldTemplateBody?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newTemplateBody: 'NewTemplateBody',
      oldTemplateBody: 'OldTemplateBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newTemplateBody: 'string',
      oldTemplateBody: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStackTemplateByResourcesResponseBody;
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
      body: UpdateStackTemplateByResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the template. It can be up to 256 characters in length.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared and private templates.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. The template can be up to 524,288 bytes in length, and the URL can be up to 1,024 bytes in length.
   * 
   * >  If the region of the OSS bucket is not specified, the RegionId value is used.
   * 
   * You can specify only one of the TemplateBody and TemplateURL parameters.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateName: 'string',
      templateURL: 'string',
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
   * 8C5D90E1-66B6-496C-9371-3807F8DA80A8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
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

export class UpdateTemplateScratchRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the scenario.
   * 
   * @example
   * The description of the scenario.
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Async (default)
   * *   Sync
   * 
   * > If you have a wide scope of resources, Sync takes longer. If you set ExecutionMode to Sync, we recommend that you specify ClientToken to prevent the execution timeout.
   * 
   * @example
   * Sync
   */
  executionMode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix: long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * >  If you set TemplateScratchType to ArchitectureDetection, the default value of LogicalIdStrategy is LongTypePrefixAndHashSuffix. In other cases, the default value of LogicalIdStrategy is LongTypePrefixAndIndexSuffix.
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParameters?: UpdateTemplateScratchRequestPreferenceParameters[];
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceResourceGroup?: UpdateTemplateScratchRequestSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceResources?: UpdateTemplateScratchRequestSourceResources[];
  /**
   * @remarks
   * The source tag.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceTag?: UpdateTemplateScratchRequestSourceTag;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * The valid values of the ParameterKey and ParameterValue request parameters vary based on the IDs of different types of resource scenarios. For more information, see the "Additional information about request parameters" section of this topic.
   * 
   * >  You can call the [ListTemplateScratches](https://help.aliyun.com/document_detail/610832.html) operation to query the ID of a resource scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': UpdateTemplateScratchRequestPreferenceParameters },
      regionId: 'string',
      resourceGroupId: 'string',
      sourceResourceGroup: UpdateTemplateScratchRequestSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': UpdateTemplateScratchRequestSourceResources },
      sourceTag: UpdateTemplateScratchRequestSourceTag,
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the scenario.
   * 
   * @example
   * The description of the scenario.
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   Async (default)
   * *   Sync
   * 
   * > If you have a wide scope of resources, Sync takes longer. If you set ExecutionMode to Sync, we recommend that you specify ClientToken to prevent the execution timeout.
   * 
   * @example
   * Sync
   */
  executionMode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix: long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * >  If you set TemplateScratchType to ArchitectureDetection, the default value of LogicalIdStrategy is LongTypePrefixAndHashSuffix. In other cases, the default value of LogicalIdStrategy is LongTypePrefixAndIndexSuffix.
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParametersShrink?: string;
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceResourceGroupShrink?: string;
  /**
   * @remarks
   * The source resources.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceResourcesShrink?: string;
  /**
   * @remarks
   * The source tag.
   * 
   * >  You must specify only one of the following parameters: SourceResources, SourceTag, and SourceResourceGroup.
   */
  sourceTagShrink?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * The valid values of the ParameterKey and ParameterValue request parameters vary based on the IDs of different types of resource scenarios. For more information, see the "Additional information about request parameters" section of this topic.
   * 
   * >  You can call the [ListTemplateScratches](https://help.aliyun.com/document_detail/610832.html) operation to query the ID of a resource scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParametersShrink: 'PreferenceParameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroupShrink: 'SourceResourceGroup',
      sourceResourcesShrink: 'SourceResources',
      sourceTagShrink: 'SourceTag',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceResourceGroupShrink: 'string',
      sourceResourcesShrink: 'string',
      sourceTagShrink: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 221DA822-B8CF-50DF-A9D2-BA197BF97BD5
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTemplateScratchResponseBody;
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
      body: UpdateTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  templateBody?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * > If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You can specify one of TemplateBody and TemplateURL, but not both of them. The URL can be up to 1,024 bytes in length.\\
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The options that are used to control the generation of information about the stack update. You can specify up to two options.
   */
  updateInfoOptions?: string[];
  /**
   * @remarks
   * Specifies whether to enable additional validation for the template. Valid values:
   * 
   * *   None (default): does not enable additional validation.
   * *   EnableTerraformValidation: runs the `terraform validate` command in the Terraform CLI to enable additional validation for a Terraform template.
   * *   EnableFastTerraformValidation: runs a command that is similar to the `terraform validate` command in the Terraform CLI to enable additional validation for a Terraform template.
   * 
   * > Compared with the EnableTerraformValidation method, the EnableFastTerraformValidation method validates a template at a faster speed but a lower integrity level.
   * 
   * @example
   * None
   */
  validationOption?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      updateInfoOptions: 'UpdateInfoOptions',
      validationOption: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      templateBody: 'string',
      templateURL: 'string',
      updateInfoOptions: { 'type': 'array', 'itemType': 'string' },
      validationOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The outputs of the template.
   */
  outputs?: ValidateTemplateResponseBodyOutputs[];
  /**
   * @remarks
   * The parameters that are defined in the Parameters section of the template.
   */
  parameters?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource types that are used in the template.
   */
  resourceTypes?: ValidateTemplateResponseBodyResourceTypes;
  /**
   * @remarks
   * The regular resources that are defined in the template.
   * 
   * > - For a Resource Orchestration Service (ROS) template, the resource whose definition contains `Count` is not displayed as a list.
   * > -  For a Terraform template, the resource whose definition contains `count` or `for_each` is not displayed as a list.
   */
  resources?: ValidateTemplateResponseBodyResources[];
  /**
   * @remarks
   * The information about the stack update. This parameter cannot be returned if the value of UpdateInfoOptions contains Disabled.
   */
  updateInfo?: ValidateTemplateResponseBodyUpdateInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputs: 'Outputs',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
      resources: 'Resources',
      updateInfo: 'UpdateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputs: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyOutputs },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceTypes: ValidateTemplateResponseBodyResourceTypes,
      resources: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyResources },
      updateInfo: ValidateTemplateResponseBodyUpdateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateTemplateResponseBody;
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
      body: ValidateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of template parameter N that you want to use to override a specific parameter. If you do not specify the name and value of a template parameter, ROS uses the name and value specified in the previous operation that was performed to create the stack. Maximum value of N: 200.
   * 
   * > This parameter takes effect only when Mode is set to Recreate.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of template parameter N that you want to use to override a specific parameter. Maximum value of N: 200.
   * 
   * For ROS stacks, the template parameters that you use to override specific parameters are subject to the following limits:
   * 
   * *   You cannot change the condition values in the Conditions section of a template from true to false or from false to true.
   * *   The template parameters can be referenced only by resources that ROS continues to create.
   * 
   * > This parameter takes effect only when Mode is set to Recreate.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

export class ContinueCreateStackResponseBodyDryRunResult extends $tea.Model {
  /**
   * @remarks
   * The parameters that can be modified.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified.
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

export class CreateChangeSetRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N that is defined in the template. If you do not specify the key and value of a parameter, ROS uses the default name and value that are defined in the template. Maximum value of N: 200.
   * 
   * >  Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that is defined in the template. Maximum value of N: 200.
   * 
   * >  Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

export class CreateChangeSetRequestResourcesToImport extends $tea.Model {
  /**
   * @remarks
   * The logical ID of resource N. The logical ID is the name of the resource defined in the template.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to IMPORT. ResourcesToImport is optional. If you specify ResourcesToImport, you must specify ResourcesToImport.N.LogicalResourceId.
   * 
   * @example
   * Vpc
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The key-value mapping between strings. The key-value mapping is used to identify resource N that you want to import. The key-value mapping must be a JSON string.\\
   * A key is an identifier property of a resource and a value is the property value. For example, the key of the ALIYUN::ECS::VPC resource is VpcId and the value is `vpc-2zevx9ios****`.
   * 
   * You can call the [GetTemplateSummary](https://help.aliyun.com/document_detail/172485.html) operation to query the identifier property of the resource.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to IMPORT. ResourcesToImport is optional. If you specify ResourcesToImport, you must specify ResourcesToImport.N.ResourceIdentifier.
   * 
   * @example
   * {"VpcId": "vpc-2zevx9ios******"}
   */
  resourceIdentifier?: string;
  /**
   * @remarks
   * The type of resource N. The resource type must be the same as the resource type that is defined in the template.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to IMPORT. ResourcesToImport is optional. If you specify ResourcesToImport, you must specify ResourcesToImport.N.ResourceType.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceIdentifier: 'ResourceIdentifier',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceIdentifier: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N that is defined in the template. If you do not specify the name and value of a parameter, ROS uses the default name and value that are specified in the template.
   * 
   * Maximum value of N: 200.\\
   * The name must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that is defined in the template.
   * 
   * Maximum value of N: 200.\\
   * The value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * i-xxxxxx
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

export class CreateStackRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the stack.
   * 
   * Valid values of N: 1 to 20.
   * 
   * > - The Tags parameter is optional. If you specify Tags, you must specify Tags.N.Key.
   * > -  The tag of a stack is propagated to each resource that supports the tag feature in the stack. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the stack.
   * 
   * Valid values of N: 1 to 20.
   * 
   * > The tag of a stack is propagated to each resource that supports the tag feature in the stack. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * @example
   * test
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

export class CreateStackGroupRequestAutoDeployment extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * *   true: Automatic deployment is enabled. If you add a member account to the folder to which the stack group belongs after you enable automatic deployment, ROS automatically adds the stacks in the stack group to the member account. If you remove a member account from the folder, ROS automatically deletes the stacks from the member account.
   * *   false: Automatic deployment is disabled. After you disable automatic deployment, the stacks remain unchanged when you add member accounts to or remove member accounts from the folder.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the stacks within a member account are retained when you remove the member account from the folder.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * > You must specify RetainStacksOnAccountRemoval if Enabled is set to true.
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N. If you do not specify the key and value of a parameter, ROS uses the default name and value that are defined in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N.
   * 
   * Maximum value of N: 200.
   * 
   * > Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

export class CreateStackGroupRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the stack group.
   * 
   * > Tags is optional. If you want to specify Tags, you must also specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack group.
   * 
   * @example
   * test
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

export class CreateStackGroupShrinkRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N. If you do not specify the key and value of a parameter, ROS uses the default name and value that are defined in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N.
   * 
   * Maximum value of N: 200.
   * 
   * > Parameters is optional. If you specify Parameters, you must also specify Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

export class CreateStackGroupShrinkRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the stack group.
   * 
   * > Tags is optional. If you want to specify Tags, you must also specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack group.
   * 
   * @example
   * test
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

export class CreateStackInstancesRequestDeploymentTargets extends $tea.Model {
  accountIds?: string[];
  /**
   * @remarks
   * The folder IDs of the resource directory. You can add up to five folder IDs.
   * 
   * You can create stacks within all the member accounts in the specified folders. If you create stacks in the Root folder, the stacks are created within all member accounts in the resource directory.
   * 
   * > To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information about a folder](https://help.aliyun.com/document_detail/111223.html).
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequestParameterOverrides extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the name that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * >-   ParameterOverrides is optional.
   * >-   If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the value that you specify when you create the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * >-  ParameterOverrides is optional.
   * >-  If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

export class CreateStackInstancesShrinkRequestParameterOverrides extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the name that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * >-   ParameterOverrides is optional.
   * >-   If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the value that you specify when you create the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * >-  ParameterOverrides is optional.
   * >-  If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

export class CreateTemplateRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the template.
   * 
   * > Tags is optional. If you need to specify Tags, you must also specify Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the template.
   * 
   * @example
   * test
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

export class CreateTemplateScratchRequestPreferenceParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * > 
   * 
   * *   PreferenceParameters is optional. If you specify PreferenceParameters, you must specify ParameterKey and ParameterValue.
   * 
   * *   You must set ParameterKey to DeletionPolicy when TemplateScratchType is set to ResourceImport.
   * 
   * This parameter is required.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value. The value is an assignment to the parameter key.
   * 
   * For more information about the valid values of ParameterValue, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >  PreferenceParameters is optional. If you specify PreferenceParameters, you must specify ParameterKey and ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Retain
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

export class CreateTemplateScratchRequestSourceResourceGroup extends $tea.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestSourceResources extends $tea.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * > 
   * 
   * *   This parameter takes effect only when TemplateScratchType is set to ArchitectureDetection.
   * 
   * *   The region ID of a global resource is `global`. For example, the region ID of the ALIYUN::CDN::Domain global resource is `global`.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The related resource type filters.
   */
  relatedResourceTypeFilter?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1m6fww66xbntjyc****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      relatedResourceTypeFilter: 'RelatedResourceTypeFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      relatedResourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestSourceTag extends $tea.Model {
  /**
   * @remarks
   * The source tags that consist of key-value pairs. If you want to specify only the tag key, you must leave the tag value empty. Example: `{"TagKey": ""}`.
   * 
   * You can add up to 10 source tags.
   * 
   * This parameter is required.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource scenario.
   * 
   * > Tags is optional. If you want to specify Tags, you must specify Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource scenario.
   * 
   * @example
   * test
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

export class CreateTemplateScratchShrinkRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource scenario.
   * 
   * > Tags is optional. If you want to specify Tags, you must specify Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource scenario.
   * 
   * @example
   * test
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

export class DeleteStackInstancesRequestDeploymentTargets extends $tea.Model {
  /**
   * @remarks
   * The IDs of the execution accounts within which you want to deploy stacks in self-managed mode. You can specify up to 20 execution account IDs.
   * 
   * > To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information about a folder](https://help.aliyun.com/document_detail/111223.html).
   */
  accountIds?: string[];
  /**
   * @remarks
   * The IDs of the folders in the resource directory. You can add up to five folder IDs.
   * 
   * You can create stacks within all the member accounts in the specified folders. If you create stacks in the Root folder, the stacks are created within all member accounts in the resource directory.
   * 
   * > To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information about a folder](https://help.aliyun.com/document_detail/111223.html).
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
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
   * ccn-cn-shanghai-finance-1
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * ros.aliyuncs.com
   */
  regionEndpoint?: string;
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

export class DetectStackResourceDriftResponseBodyPropertyDifferences extends $tea.Model {
  /**
   * @remarks
   * The actual value of the resource property.
   * 
   * @example
   * test1
   */
  actualValue?: string;
  /**
   * @remarks
   * The drift type of the resource property. Valid values:
   * 
   * *   ADD: The property value has been added to a resource property whose data type was Array or List.
   * *   REMOVE: The property has been deleted from the current resource configuration.
   * *   NOT_EQUAL: The current property value differs from the expected value defined in the stack template.
   * 
   * @example
   * NOT_EQUAL
   */
  differenceType?: string;
  /**
   * @remarks
   * The expected value of the resource property that is defined in the template.
   * 
   * @example
   * test2
   */
  expectedValue?: string;
  /**
   * @remarks
   * The path of the resource property.
   * 
   * @example
   * /ScalingRuleName
   */
  propertyPath?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      expectedValue: 'ExpectedValue',
      propertyPath: 'PropertyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      expectedValue: 'string',
      propertyPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchResponseBodyResourcesToImport extends $tea.Model {
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * @example
   * ECSVPC_001
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The key-value mapping between strings. The value is a JSON string that identifies the resource that you want to import into a stack.\\
   * A key is an identifier for a resource, and a value is an assignment of data to the key. For example, VpcId is a key that indicates the ID of a virtual private cloud (VPC), and `vpc-bp1m6fww66xbntjyc****"` is a value that is assigned to VpcId.
   * 
   * @example
   * {"VpcId": "vpc-bp1m6fww66xbntjyc****" }
   */
  resourceIdentifier?: { [key: string]: any };
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceIdentifier: 'ResourceIdentifier',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceIdentifier: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicyStatement extends $tea.Model {
  /**
   * @remarks
   * The operations that are performed on the specified resource.
   */
  action?: string[];
  /**
   * @remarks
   * The condition that is required for the policy to take effect.
   * 
   * @example
   * {
   *     "StringEquals": {
   *         "acs:Service": "fc.aliyuncs.com"
   *     }
   * }
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * The effect of the statement. Valid values:
   * 
   * *   Allow
   * *   Deny
   * 
   * @example
   * Allow
   */
  effect?: string;
  /**
   * @remarks
   * The objects that the statement covers. An asterisk (\\*) indicates all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      effect: 'Effect',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effect: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicy extends $tea.Model {
  /**
   * @remarks
   * The statements that are contained in the policy.
   */
  statement?: GenerateTemplatePolicyResponseBodyPolicyStatement[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      statement: 'Statement',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statement: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyStatement },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyLogTerraformLogs extends $tea.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * *   apply
   * *   plan
   * *   destroy
   * *   version
   * 
   * For more information about Terraform commands, see [Command](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content of the output stream that is returned after the command is run.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * *   stdout: standard output stream
   * *   stderr: standard error stream
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyLog extends $tea.Model {
  /**
   * @remarks
   * The Terraform logs. This parameter is returned only for change sets of Terraform stacks.
   * 
   * > This parameter is not returned for change sets that are in the Creating state. This parameter indicates the logs of the change set creation operation for Terraform stacks.
   */
  terraformLogs?: GetChangeSetResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': GetChangeSetResponseBodyLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The key of the parameter.
   * 
   * @example
   * ALIYUN::Region
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * cn-hangzhou
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

export class GetDiagnosticResponseBodyDiagnosticResult extends $tea.Model {
  /**
   * @remarks
   * The resources that failed to be diagnosed.
   */
  failedResources?: { [key: string]: any };
  /**
   * @remarks
   * The information about Resource Orchestration Service (ROS) calling.
   */
  rosActionMessages?: { [key: string]: any };
  /**
   * @remarks
   * The stack information.
   */
  stackMessages?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      rosActionMessages: 'RosActionMessages',
      stackMessages: 'StackMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rosActionMessages: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stackMessages: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyDriftDetection extends $tea.Model {
  /**
   * @remarks
   * The resource types that are supported by the drift detection feature.
   */
  supportedResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes extends $tea.Model {
  /**
   * @remarks
   * The resource type that supports the resource cleaner feature.
   * 
   * @example
   * ECS:Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The names of the side effects that may be caused by the cleanup operation performed on the resources of the specified type.
   */
  sideEffects?: string[];
  /**
   * @remarks
   * The names of the filters that are supported by the resource type.
   */
  supportedFilters?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      sideEffects: 'SideEffects',
      supportedFilters: 'SupportedFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      sideEffects: { 'type': 'array', 'itemType': 'string' },
      supportedFilters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceCleaner extends $tea.Model {
  /**
   * @remarks
   * The resource types that can be cleaned up.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes extends $tea.Model {
  /**
   * @remarks
   * The resource identifiers.
   */
  resourceIdentifiers?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Disk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIdentifiers: 'ResourceIdentifiers',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIdentifiers: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceImport extends $tea.Model {
  /**
   * @remarks
   * The resource types that are supported by the resource import feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes extends $tea.Model {
  /**
   * @remarks
   * The names of properties that are supported by the resource type.
   */
  properties?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Disk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'Properties',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateParameterConstraints extends $tea.Model {
  /**
   * @remarks
   * The resource types that support the template parameter constraint feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes extends $tea.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Disk
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source resource group. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceResourceGroupSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source resource. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceResourcesSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source tag, resource group, or resource. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source tag. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceTagSupported?: boolean;
  /**
   * @remarks
   * The scenario types that are supported.
   */
  supportedTemplateScratchTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      sourceResourceGroupSupported: 'SourceResourceGroupSupported',
      sourceResourcesSupported: 'SourceResourcesSupported',
      sourceSupported: 'SourceSupported',
      sourceTagSupported: 'SourceTagSupported',
      supportedTemplateScratchTypes: 'SupportedTemplateScratchTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      sourceResourceGroupSupported: 'boolean',
      sourceResourcesSupported: 'boolean',
      sourceSupported: 'boolean',
      sourceTagSupported: 'boolean',
      supportedTemplateScratchTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateScratch extends $tea.Model {
  /**
   * @remarks
   * The resource types that are supported by the scenario feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk extends $tea.Model {
  /**
   * @remarks
   * The resource types that support the risk check performed to detect risks caused by a stack deletion operation.
   */
  deleteStack?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteStack: 'DeleteStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteStack: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes extends $tea.Model {
  /**
   * @remarks
   * The resource types that support the custom tag feature.
   */
  customTag?: string[];
  /**
   * @remarks
   * The resource types that support the price inquiry feature.
   */
  estimateCost?: string[];
  /**
   * @remarks
   * The resource types that support the resource group feature.
   */
  resourceGroup?: string[];
  /**
   * @remarks
   * The resource type that support the risk check feature.
   */
  stackOperationRisk?: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk;
  /**
   * @remarks
   * The resource types that support the system tag `acs:ros:stackId`.
   */
  systemTag?: string[];
  static names(): { [key: string]: string } {
    return {
      customTag: 'CustomTag',
      estimateCost: 'EstimateCost',
      resourceGroup: 'ResourceGroup',
      stackOperationRisk: 'StackOperationRisk',
      systemTag: 'SystemTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTag: { 'type': 'array', 'itemType': 'string' },
      estimateCost: { 'type': 'array', 'itemType': 'string' },
      resourceGroup: { 'type': 'array', 'itemType': 'string' },
      stackOperationRisk: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk,
      systemTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions extends $tea.Model {
  /**
   * @remarks
   * The name of the provider.
   * 
   * @example
   * alicloud
   */
  providerName?: string;
  /**
   * @remarks
   * The provider versions.
   */
  supportedVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      providerName: 'ProviderName',
      supportedVersions: 'SupportedVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerName: 'string',
      supportedVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedVersions extends $tea.Model {
  /**
   * @remarks
   * The names and versions of the providers that correspond to the Terraform versions.
   */
  providerVersions?: GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions[];
  /**
   * @remarks
   * The Terraform version.
   * 
   * @example
   * 1.0.11
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The Terraform version that is supported by ROS. The parameter value is the same as the value of the Transform parameter in a Terraform template.
   * 
   * @example
   * Aliyun::Terraform-v1.0
   */
  transform?: string;
  /**
   * @remarks
   * The Terraform versions that can be updated in ROS.
   */
  updateAllowedTransforms?: string[];
  static names(): { [key: string]: string } {
    return {
      providerVersions: 'ProviderVersions',
      terraformVersion: 'TerraformVersion',
      transform: 'Transform',
      updateAllowedTransforms: 'UpdateAllowedTransforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerVersions: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions },
      terraformVersion: 'string',
      transform: 'string',
      updateAllowedTransforms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraform extends $tea.Model {
  /**
   * @remarks
   * The resource types that support the scenario feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes;
  /**
   * @remarks
   * The Terraform versions.
   */
  supportedVersions?: GetFeatureDetailsResponseBodyTerraformSupportedVersions[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
      supportedVersions: 'SupportedVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes,
      supportedVersions: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTerraformSupportedVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are specified in the template.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

export class GetServiceProvisionsRequestServices extends $tea.Model {
  /**
   * @remarks
   * The name of the service or feature. Valid values:
   * 
   * *   AHAS: Application High Availability Service
   * *   ARMS: Application Real-Time Monitoring Service (ARMS)
   * *   ApiGateway: API Gateway
   * *   BatchCompute: Batch Compute
   * *   BrainIndustrial: Industrial Brain
   * *   CloudStorageGateway: Cloud Storage Gateway (CSG)
   * *   CMS: CloudMonitor
   * *   CR: Container Registry
   * *   CS: Container Service for Kubernetes (ACK)
   * *   DCDN: Dynamic Content Delivery Network (DCDN)
   * *   DataHub: DataHub
   * *   DataWorks: DataWorks
   * *   EDAS: Enterprise Distributed Application Service (EDAS)
   * *   EHPC: E-HPC
   * *   EMAS: Enterprise Mobile Application Studio (EMAS)
   * *   FC: Function Compute
   * *   FNF: CloudFlow (SWF)
   * *   MaxCompute: MaxCompute
   * *   MNS: Message Service (MNS)
   * *   HBR: Cloud Backup
   * *   IMM: Intelligent Media Management (IMM)
   * *   IOT: IoT Platform
   * *   KMS: Key Management Service (KMS)
   * *   NAS: Apsara File Storage NAS (NAS)
   * *   NLP: Natural Language Processing (NLP)
   * *   OSS: Object Storage Service (OSS)
   * *   OTS: Tablestore
   * *   PrivateLink: PrivateLink
   * *   PrivateZone: Alibaba Cloud DNS PrivateZone
   * *   RocketMQ: ApsaraMQ for RocketMQ
   * *   SAE: Serverless App Engine (SAE)
   * *   SLS: Simple Log Service (SLS)
   * *   TrafficMirror: traffic mirroring
   * *   VS: Video Surveillance System
   * *   Xtrace: Managed Service for OpenTelemetry
   * 
   * This parameter is required.
   * 
   * @example
   * EHPC
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation extends $tea.Model {
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * CreateServiceLinkedRole
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the API operation belongs.
   * 
   * @example
   * rds
   */
  apiProductId?: string;
  /**
   * @remarks
   * The type of the API operation. Valid values:
   * 
   * *   Open: public
   * *   Inner: private
   * 
   * @example
   * Open
   */
  apiType?: string;
  /**
   * @remarks
   * The parameters of the API operation. If a parameter is a variable, use the ${Variable name} format. Only the following variable is supported: ${RegionId}.
   * 
   * @example
   * {   "ServiceLinkedRole": "AliyunServiceRoleForRdsPgsqlOnEcs",   "RegionId": "${RegionId}" }
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiProductId: 'ApiProductId',
      apiType: 'ApiType',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiProductId: 'string',
      apiType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles extends $tea.Model {
  /**
   * @remarks
   * The information about the API operation that is used to create the RAM role.
   */
  apiForCreation?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation;
  /**
   * @remarks
   * Indicates whether the RAM role is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The purpose for which the RAM role is used. Default value: Default. A value of Default indicates that the RAM role is the default role of the service.
   * 
   * @example
   * Default
   */
  function?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * AliyunServiceRoleForEHPC
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      apiForCreation: 'ApiForCreation',
      created: 'Created',
      function: 'Function',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiForCreation: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation,
      created: 'boolean',
      function: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision extends $tea.Model {
  /**
   * @remarks
   * The authorization URL of the RAM role.
   * 
   * > This parameter is returned if Created is set to false.
   * 
   * @example
   * https://ehpc.console.aliyun.com/
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The RAM roles of the service.
   */
  roles?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles[];
  static names(): { [key: string]: string } {
    return {
      authorizationURL: 'AuthorizationURL',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationURL: 'string',
      roles: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisions extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic activation for the service is defined in the template. Valid values:
   * 
   * *   true: Automatic activation for the service is defined in the template.
   * *   false: Manual activation for the service is defined in the template.
   * 
   * @example
   * false
   */
  autoEnableService?: boolean;
  /**
   * @remarks
   * The names of the services on which the service that is queried depends.
   */
  dependentServiceNames?: string[];
  /**
   * @remarks
   * The URL that points to the activation page of the service.
   * 
   * > This parameter is returned if Status is set to Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=nas
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the RAM roles of the service. If this parameter is empty, no RAM role is associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * EHPC
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the service. Valid values:
   * 
   * *   Enabled: The service is activated.
   * *   Disabled: The service is not activated.
   * *   Unknown: The activation status of the service is unknown.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The reason why the service is in the Disabled or Unknown state.
   * 
   * > This parameter is returned if Status is set to Disabled or Unknown.
   * 
   * @example
   * No permission.
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      dependentServiceNames: 'DependentServiceNames',
      enableURL: 'EnableURL',
      roleProvision: 'RoleProvision',
      serviceName: 'ServiceName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoEnableService: 'boolean',
      dependentServiceNames: { 'type': 'array', 'itemType': 'string' },
      enableURL: 'string',
      roleProvision: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision,
      serviceName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogResourceLogsLogs extends $tea.Model {
  /**
   * @remarks
   * The content of a resource log.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @remarks
   * The keywords of a resource log.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogResourceLogs extends $tea.Model {
  /**
   * @remarks
   * All the logs that are associated with the resources.
   */
  logs?: GetStackResponseBodyLogResourceLogsLogs[];
  /**
   * @remarks
   * The name of the resource that is defined in the template.
   * 
   * @example
   * MyResourceCleaner
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogsLogs },
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogTerraformLogs extends $tea.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * *   apply
   * *   plan
   * *   destroy
   * *   version
   * 
   * For more information about Terraform commands, see [Basic CLI Features](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content of the output stream that is returned after the command is run.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * *   stdout: standard output stream
   * *   stderr: standard error stream
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLog extends $tea.Model {
  /**
   * @remarks
   * The logs of resources in the stack. This parameter is returned if LogOption is set to Resource or All.
   * 
   * >  The logs are returned only for resources of specific types, such as the `ALIYUN::ROS::ResourceCleaner` type.
   */
  resourceLogs?: GetStackResponseBodyLogResourceLogs[];
  /**
   * @remarks
   * The logs generated when the Terraform stack is run. This parameter is returned only for a Terraform stack. This parameter is returned if LogOption is left empty or set to Stack or All.
   * 
   * >  This parameter is not returned for a running stack. The logs are generated from the most recent operation on the stack, such as the creation, resumed creation, update, or deletion operation.
   */
  terraformLogs?: GetStackResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      resourceLogs: 'ResourceLogs',
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogs },
      terraformLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyOperationInfo extends $tea.Model {
  /**
   * @remarks
   * The name of the API operation that belongs to another Alibaba Cloud service.
   * 
   * @example
   * DeleteSecurityGroup
   */
  action?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DependencyViolation
   */
  code?: string;
  /**
   * @remarks
   * The logical ID of the resource on which the operation error occurs.
   * 
   * @example
   * EcsSecurityGroup
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * There is still instance(s) in the specified security group.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request that is initiated to call the API operation of another Alibaba Cloud service.
   * 
   * @example
   * 071D6166-3F6B-5C7B-A1F0-0113FBB643A8
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource on which the operation error occurs.
   * 
   * @example
   * ALIYUN::ECS::SecurityGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      requestId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * ALIYUN::Region
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * cn-hangzhou
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

export class GetStackResponseBodyResourceProgressInProgressResourceDetails extends $tea.Model {
  /**
   * @remarks
   * The desired progress value of the resource.
   * 
   * @example
   * 10
   */
  progressTargetValue?: number;
  /**
   * @remarks
   * The current progress value of the resource.
   * 
   * @example
   * 5
   */
  progressValue?: number;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * WaitCondition
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ROS::WaitCondition
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      progressTargetValue: 'ProgressTargetValue',
      progressValue: 'ProgressValue',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progressTargetValue: 'number',
      progressValue: 'number',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyResourceProgress extends $tea.Model {
  /**
   * @remarks
   * The number of resources that failed to be created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 0
   */
  failedResourceCount?: number;
  /**
   * @remarks
   * The number of resources that are being created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 1
   */
  inProgressResourceCount?: number;
  /**
   * @remarks
   * The progress details of resources that are being created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   */
  inProgressResourceDetails?: GetStackResponseBodyResourceProgressInProgressResourceDetails[];
  /**
   * @remarks
   * The number of resources to be created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 0
   */
  pendingResourceCount?: number;
  /**
   * @remarks
   * The creation or rollback progress of the stack, in percentage. Valid values: 0 to 100.
   * 
   * The value progressively increases from 0 to 100 during a stack creation operation. If the stack is created, the value reaches 100. If the stack fails to be created, a rollback is started for the stack resources, and the value progressively increases from the percentage of the remaining progress (100 - Progress value generated when the stack fails to be created). The value increases to 100 when the stack resources are rolled back. This parameter indicates the creation progress during a stack creation operation and indicates the rollback progress during a stack rollback operation.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `PercentageOnly`.
   * 
   * @example
   * 100
   */
  stackActionProgress?: number;
  /**
   * @remarks
   * The overall creation progress of the stack, in percentage. Valid values: 0 to 100.
   * 
   * The value progressively increases from 0 to 100 during a stack creation operation. If the stack is created, the value reaches 100. If the stack fails to be created, a rollback is started for the stack resources, and the value progressively decreases. The value decreases to 0 when the stack resources are rolled back. This parameter indicates only the overall creation progress, regardless of whether during a stack creation or rollback operation.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `PercentageOnly`.
   * 
   * @example
   * 100
   */
  stackOperationProgress?: number;
  /**
   * @remarks
   * The number of resources that are created.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 1
   */
  successResourceCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * >  This parameter is returned only if `ShowResourceProgress` is set to `EnabledIfCreateStack`.
   * 
   * @example
   * 2
   */
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedResourceCount: 'FailedResourceCount',
      inProgressResourceCount: 'InProgressResourceCount',
      inProgressResourceDetails: 'InProgressResourceDetails',
      pendingResourceCount: 'PendingResourceCount',
      stackActionProgress: 'StackActionProgress',
      stackOperationProgress: 'StackOperationProgress',
      successResourceCount: 'SuccessResourceCount',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceCount: 'number',
      inProgressResourceCount: 'number',
      inProgressResourceDetails: { 'type': 'array', 'itemType': GetStackResponseBodyResourceProgressInProgressResourceDetails },
      pendingResourceCount: 'number',
      stackActionProgress: 'number',
      stackOperationProgress: 'number',
      successResourceCount: 'number',
      totalResourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the stack.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack.
   * 
   * @example
   * test
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

export class GetStackGroupResponseBodyStackGroupAutoDeployment extends $tea.Model {
  /**
   * @remarks
   * Indicates whether stacks in the member account are retained when the member account is deleted from the folder.
   * 
   * Valid values:
   * 
   * *   true: The stacks are retained.
   * *   false: The stacks are deleted.
   * 
   * >  This parameter is returned only when the Enabled parameter is set to true.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The folder IDs of the resource directory. This parameter is used to deploy stack instances within all the accounts in the folders.
   * 
   * >  This parameter is returned only when the PermissionModel parameter is set to SERVICE_MANAGED.
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroupParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 12
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

export class GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail extends $tea.Model {
  /**
   * @remarks
   * The number of stack instances that have drifted.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift status of the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: At least one stack instance in the stack group has drifted.
   * *   NOT_CHECKED: No drift detection is completed on the stack group.
   * *   IN_SYNC: All the stack instances in the stack group are being synchronized.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The number of stack instances.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is specified when you create the stack group.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The status of drift detection on the stack group.
   * 
   * Valid values:
   * 
   * *   COMPLETED: Drift detection is performed and completed on all stack instances.
   * *   FAILED: Drift detection is performed. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * *   PARTIAL_SUCCESS: Drift detection is performed. The number of stack instances that failed the drift detection does not exceed the specified threshold.
   * *   IN_PROGRESS: Drift detection is being performed on the stack group.
   * *   STOPPED: Drift detection is canceled for the stack group.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that were being synchronized.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances for which drift detection was canceled.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which drift detection was being performed.
   * 
   * @example
   * DRIFTED
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The number of stack instances that failed drift detection.
   * 
   * @example
   * 2
   */
  totalStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      totalStackInstancesCount: 'TotalStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      driftDetectionTime: 'string',
      driftedStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      stackGroupDriftStatus: 'string',
      totalStackInstancesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroup extends $tea.Model {
  /**
   * @remarks
   * The parameters of the stack group.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * *   true: Automatic deployment is enabled. If a member account is added to the folder to which the stack group belongs after automatic deployment is enabled, the stack group deploys its stack instances in the specified region where the added account is deployed. If the account is deleted from the folder, the stack instances in the specified region are deleted from the stack group.
   * *   false: Automatic deployment is disabled. After automatic deployment is disabled, the stack instances remain unchanged when the member account in the folder is changed.
   */
  autoDeployment?: GetStackGroupResponseBodyStackGroupAutoDeployment;
  createTime?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * StackGroup Description
   */
  description?: string;
  /**
   * @remarks
   * The template body.
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The key of the parameter.
   */
  parameters?: GetStackGroupResponseBodyStackGroupParameters[];
  /**
   * @remarks
   * The information about automatic deployment settings.
   * 
   * >  This parameter is returned only when the PermissionModel parameter is set to SERVICE_MANAGED.
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The folder IDs of the resource directory. This parameter is used to deploy stack instances within all the accounts in the folders.
   * 
   * >  This parameter is returned only when the PermissionModel parameter is set to SERVICE_MANAGED.
   */
  rdFolderIds?: string[];
  /**
   * @remarks
   * The permission model.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED: the self-managed permission model
   * *   SERVICE_MANAGED: the service-managed permission model
   * 
   * >  For more information about the permission models of stack groups, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time when drift detection was performed on the stack group.
   */
  stackGroupDriftDetectionDetail?: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail;
  /**
   * @remarks
   * The status of the stack group.
   * 
   * Valid values:
   * 
   * *   ACTIVE
   * *   DELETED
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the RAM role that is specified for the execution account when you create the self-managed stack group. The administrator role AliyunROSStackGroupAdministrationRole assumes the execution role. If this parameter is not specified, the default value AliyunROSStackGroupExecutionRole is returned.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The name of the RAM role that is specified for the administrator account in Resource Orchestration Service (ROS) when you create the self-managed stack group. If this parameter is not specified, the default value AliyunROSStackGroupAdministrationRole is returned.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The structure that contains the template body.
   * 
   * > We recommend that you use TemplateContent instead of TemplateBody.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The JSON-formatted structure that contains the template body. For more information, see [Template syntax](https://help.aliyun.com/document_detail/28857.html).
   * 
   * @example
   * {
   *       "ROSTemplateFormatVersion": "2015-09-01"
   * }
   */
  templateContent?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      administrationRoleName: 'AdministrationRoleName',
      autoDeployment: 'AutoDeployment',
      createTime: 'CreateTime',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      rdFolderIds: 'RdFolderIds',
      resourceGroupId: 'ResourceGroupId',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
      templateBody: 'TemplateBody',
      templateContent: 'TemplateContent',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrationRoleName: 'string',
      autoDeployment: GetStackGroupResponseBodyStackGroupAutoDeployment,
      createTime: 'string',
      description: 'string',
      executionRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': GetStackGroupResponseBodyStackGroupParameters },
      permissionModel: 'string',
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      stackGroupDriftDetectionDetail: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail,
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
      templateBody: 'string',
      templateContent: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets extends $tea.Model {
  /**
   * @remarks
   * The IDs of the members in the resource directory.
   * 
   * > This parameter is returned only if AccountIds is specified when the [UpdateStackInstances](https://help.aliyun.com/document_detail/151716.html) operation is called to update stack instances.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The IDs of the folders in the resource directory.
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences extends $tea.Model {
  /**
   * @remarks
   * The number of accounts within which stack operation failures are allowed to occur in each region. If the value of this parameter is exceeded in a region, Resource Orchestration Service (ROS) stops the operation in the region. If the operation is stopped in one region, the operation is no longer performed in other regions.
   * 
   * Valid values: 0 to 20.
   * 
   * > Only one of FailureToleranceCount and FailureTolerancePercentage can be returned.
   * 
   * @example
   * 1
   */
  failureToleranceCount?: number;
  /**
   * @remarks
   * The percentage of the number of accounts within which stack operation failures are allowed to occur to the total number of accounts in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region.
   * 
   * Valid values: 0 to 100.
   * 
   * > Only one of FailureToleranceCount and FailureTolerancePercentage can be returned.
   * 
   * @example
   * 10
   */
  failureTolerancePercentage?: number;
  /**
   * @remarks
   * The maximum number of accounts within which stacks are deployed at the same time in each region.
   * 
   * Valid values: 1 to 20.
   * 
   * > Only one of MaxConcurrentCount and MaxConcurrentPercentage can be returned.
   * 
   * @example
   * 1
   */
  maxConcurrentCount?: number;
  /**
   * @remarks
   * The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   * Valid values: 1 to 100.
   * 
   * > Only one of MaxConcurrentCount and MaxConcurrentPercentage can be returned.
   * 
   * @example
   * 10
   */
  maxConcurrentPercentage?: number;
  /**
   * @remarks
   * The regions in the order of operation execution.
   */
  regionIdsOrder?: string[];
  static names(): { [key: string]: string } {
    return {
      failureToleranceCount: 'FailureToleranceCount',
      failureTolerancePercentage: 'FailureTolerancePercentage',
      maxConcurrentCount: 'MaxConcurrentCount',
      maxConcurrentPercentage: 'MaxConcurrentPercentage',
      regionIdsOrder: 'RegionIdsOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureToleranceCount: 'number',
      failureTolerancePercentage: 'number',
      maxConcurrentCount: 'number',
      maxConcurrentPercentage: 'number',
      regionIdsOrder: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail extends $tea.Model {
  /**
   * @remarks
   * The number of stack instances for which drift detection was canceled.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift detection state.
   * 
   * Valid values:
   * 
   * *   COMPLETED: Drift detection is performed on the stack group and all stack instances passed the drift detection.
   * *   FAILED: Drift detection is performed on the stack group. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * *   PARTIAL_SUCCESS: Drift detection is performed on the stack group. The number of stack instances that failed the drift detection does not exceed the specified threshold.
   * *   IN_PROGRESS: Drift detection is being performed on the stack group.
   * *   STOPPED: Drift detection is canceled for the stack group.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The time when drift detection was performed.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The number of stack instances that have drifted.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that failed drift detection.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which drift detection was being performed.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that were being synchronized.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The drift state of the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: At least one stack instance in the stack group has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed in the stack group.
   * *   IN_SYNC: All the stack instances in the stack group are being synchronized.
   * 
   * @example
   * DRIFTED
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The number of stack instances.
   * 
   * @example
   * 2
   */
  totalStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      totalStackInstancesCount: 'TotalStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      driftDetectionTime: 'string',
      driftedStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      stackGroupDriftStatus: 'string',
      totalStackInstancesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperation extends $tea.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   CREATE
   * *   UPDATE
   * *   DELETE
   * *   DETECT_DRIFT
   * 
   * @example
   * DELETE
   */
  action?: string;
  /**
   * @remarks
   * The name of the RAM role that you specify for the administrator account when you create the self-managed stack group. ROS assumes the administrator role to perform operations. If this parameter is not specified, the default value AliyunROSStackGroupAdministrationRole is returned.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The time when the operation was initiated.
   * 
   * @example
   * 2020-01-20T09:22:3
   */
  createTime?: string;
  /**
   * @remarks
   * The destinations to deploy stack instances when the stack is granted service-managed permissions.
   */
  deploymentTargets?: GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets;
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 2020-01-20T09:22:4
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the RAM role that you specify for the execution account when you create the self-managed stack group. The administrator role AliyunROSStackGroupAdministrationRole assumes the execution role to perform operations. If this parameter is not specified, the default value AliyunROSStackGroupExecutionRole is returned.
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * > This parameter is returned only if OperationDescription is specified when the [CreateStackInstances](https://help.aliyun.com/document_detail/151338.html) operation is called to create stack instances.
   * 
   * @example
   * Create stack instance in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The operation settings.
   */
  operationPreferences?: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences;
  /**
   * @remarks
   * Indicates whether stacks are retained when the associated stack instances are deleted. When you delete a stack instance, you can choose to delete or retain the stack with which the stack instance is associated.
   * 
   * Valid values:
   * 
   * *   true: Stacks are retained when the associated stack instances are deleted.
   * *   false: Stacks are deleted when the associated stack instances are deleted. Proceed with caution.
   * 
   * > This parameter is returned only if you delete stack instances.
   * 
   * @example
   * true
   */
  retainStacks?: boolean;
  /**
   * @remarks
   * The information about drift detection.
   * 
   * > This parameter is returned only if drift detection is performed.
   */
  stackGroupDriftDetectionDetail?: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The state of the operation.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   SUCCEEDED
   * *   FAILED
   * *   STOPPING
   * *   STOPPED
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      administrationRoleName: 'AdministrationRoleName',
      createTime: 'CreateTime',
      deploymentTargets: 'DeploymentTargets',
      endTime: 'EndTime',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      operationPreferences: 'OperationPreferences',
      retainStacks: 'RetainStacks',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      administrationRoleName: 'string',
      createTime: 'string',
      deploymentTargets: GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets,
      endTime: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationId: 'string',
      operationPreferences: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences,
      retainStacks: 'boolean',
      stackGroupDriftDetectionDetail: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail,
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponseBodyStackInstanceParameterOverrides extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter that is used to override a specific parameter.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter that is used to override a specific parameter.
   * 
   * @example
   * 1
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

export class GetStackInstanceResponseBodyStackInstance extends $tea.Model {
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack group.
   * 
   * > This parameter is returned only if drift detection is performed on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The outputs of the stack.
   * 
   * >  This parameter is returned if OutputOption is set to Enabled.
   */
  outputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The parameters that are used to override specific parameters.
   */
  parameterOverrides?: GetStackInstanceResponseBodyStackInstanceParameterOverrides[];
  /**
   * @remarks
   * The ID of the folder in the resource directory.
   * 
   * > This parameter is returned only if the stack group is granted service-managed permissions.
   * 
   * @example
   * fd-4PvlVLOL8v
   */
  rdFolderId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the stack when the most recent successful drift detection was performed on the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: The stack has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed on the stack.
   * *   IN_SYNC: The stack is being synchronized.
   * 
   * > This parameter is returned only if drift detection is performed on the stack group.
   * 
   * @example
   * IN_SYNC
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * > This parameter is returned only if the stack is in the CURRENT state.
   * 
   * @example
   * 35ad60e3-6a92-42d8-8812-f0700d45****
   */
  stackId?: string;
  /**
   * @remarks
   * The state of the stack.
   * 
   * Valid values:
   * 
   * *   CURRENT: The stack is up-to-date with the stack group.
   * 
   * *   OUTDATED: The stack is not up-to-date with the stack group. Stacks are in the OUTDATED state due to the following possible reasons:
   * 
   *     *   When the CreateStackInstances operation is called to create stacks, the stacks fail to be created.
   *     *   When the UpdateStackInstances or UpdateStackGroup operation is called to update stacks, the stacks fail to be updated, or only specific stacks are updated.
   *     *   The creation or update operation is not complete.
   * 
   * @example
   * CURRENT
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack instance is in the OUTDATED state.
   * 
   * > This parameter is returned only if the stack instance is in the OUTDATED state.
   * 
   * @example
   * User initiated stop
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      driftDetectionTime: 'DriftDetectionTime',
      outputs: 'Outputs',
      parameterOverrides: 'ParameterOverrides',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      stackDriftStatus: 'StackDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      driftDetectionTime: 'string',
      outputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameterOverrides: { 'type': 'array', 'itemType': GetStackInstanceResponseBodyStackInstanceParameterOverrides },
      rdFolderId: 'string',
      regionId: 'string',
      stackDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponseBodyModuleInfo extends $tea.Model {
  /**
   * @remarks
   * The concatenated logical IDs of one or more modules that contain the resource. The modules are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from Module B nested within Parent Module A:
   * 
   * `moduleA/moduleB`
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * The concatenated types of one or more modules that contain the resource. The module types are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from a module of the `MODULE::ROS::Child::Example` type that is nested within a parent module of the `MODULE::ROS::Parent::Example` type:
   * 
   * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
   * 
   * @example
   * MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example
   */
  typeHierarchy?: string;
  static names(): { [key: string]: string } {
    return {
      logicalIdHierarchy: 'LogicalIdHierarchy',
      typeHierarchy: 'TypeHierarchy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalIdHierarchy: 'string',
      typeHierarchy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyPermissions extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account with which the template is shared.
   * 
   * @example
   * 142437958638****
   */
  accountId?: string;
  /**
   * @remarks
   * The sharing option.
   * 
   * The value ShareToAccounts indicates that the template is shared with one or more Alibaba Cloud accounts.
   * 
   * @example
   * ShareToAccounts
   */
  shareOption?: string;
  /**
   * @remarks
   * The service that is used for resource sharing. Valid values:
   * 
   * - ROS: Resources are shared from ROS by using the ROS console or calling the ROS API.
   * - ResourceDirectory: Resources are shared with accounts in a resource directory from Resource Management by using the resource sharing feature.
   * > -  The number of accounts with which resources are shared from ROS is independent of the number of accounts with which resources are shared from the resource directory.
   * > -  The shared resources from ROS cannot override or overwrite the shared resources from the resource directory.
   * > -  The shared resources from the resource directory can overwrite the shared resources from ROS.
   * 
   * @example
   * ROS
   */
  shareSource?: string;
  /**
   * @remarks
   * The version of the shared template. This parameter is returned only if you set ShareOption to ShareToAccounts and set VersionOption to Specified or Current.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The version option for the shared template. This parameter is returned only if you set ShareOption to ShareToAccounts.
   * 
   * Valid values:
   * 
   * *   AllVersions: All template versions are shared.
   * *   Latest: Only the latest template version is shared. When the version of the template is updated, Resource Orchestration Service (ROS) updates the shared version to the latest version.
   * *   Current: Only the latest template version is shared. When the version of the template is updated, ROS does not update the shared version.
   * *   Specified: Only the specified template version is shared.
   * 
   * @example
   * AllVersions
   */
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      shareOption: 'ShareOption',
      shareSource: 'ShareSource',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      shareOption: 'string',
      shareSource: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the template.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the template.
   * 
   * @example
   * test
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

export class GetTemplateEstimateCostRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  parameterKey?: string;
  /**
   * @remarks
   * Details of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoEip
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

export class GetTemplateParameterConstraintsRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of parameter N in the template.
   * 
   * >  The Parameters parameter is optional. If you specify the Parameters parameter, you must specify the Parameters.N.ParameterKey parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N in the template.
   * 
   * >  The Parameters parameter is optional. If you specify the Parameters parameter, you must specify the Parameters.N.ParameterValue parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
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

export class GetTemplateParameterConstraintsShrinkRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of parameter N in the template.
   * 
   * >  The Parameters parameter is optional. If you specify the Parameters parameter, you must specify the Parameters.N.ParameterKey parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N in the template.
   * 
   * >  The Parameters parameter is optional. If you specify the Parameters parameter, you must specify the Parameters.N.ParameterValue parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
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

export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources extends $tea.Model {
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * InstanceName
   */
  propertyName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      propertyName: 'PropertyName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $tea.Model {
  /**
   * @remarks
   * The values of the parameter.
   */
  allowedValues?: any[];
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * ZoneId
   */
  propertyName?: string;
  /**
   * @remarks
   * The name of the resource that is defined in the template.
   * 
   * @example
   * MyECS
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
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
      allowedValues: { 'type': 'array', 'itemType': 'any' },
      propertyName: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors extends $tea.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  errorMessage?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * MyECS
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * InstanceType is needed while query DataDisk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails extends $tea.Model {
  errorMessage?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBodyParameterConstraints extends $tea.Model {
  /**
   * @remarks
   * The values of the parameter.
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
   * *   NoLimit: No limit is imposed on the value of this parameter.
   * *   NotSupport: The value of this parameter cannot be queried.
   * *   QueryError: This parameter failed to be queried.
   * 
   * > If AllowedValues is not returned, Behavior and BehaviorReason are returned.
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
   * No resource property refer to the parameter
   */
  behaviorReason?: string;
  /**
   * @remarks
   * The values that do not conform to the parameter constraints.
   * 
   * > If AllowedValues is returned, IllegalValueByParameterConstraints and IllegalValueByRules are returned at the same time.
   */
  illegalValueByParameterConstraints?: any[];
  /**
   * @remarks
   * The values that do not match the rules in the template.
   * 
   * > If AllowedValues is returned, IllegalValueByParameterConstraints and IllegalValueByRules are returned at the same time.
   */
  illegalValueByRules?: any[];
  /**
   * @remarks
   * The unsupported resource in the template.
   */
  notSupportResources?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources[];
  /**
   * @remarks
   * The original constraint information.
   */
  originalConstraints?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The error that is returned when the request fails.
   */
  queryErrors?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors[];
  queryTimeoutDetails?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails[];
  /**
   * @remarks
   * The data type of the parameter.
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
      illegalValueByParameterConstraints: 'IllegalValueByParameterConstraints',
      illegalValueByRules: 'IllegalValueByRules',
      notSupportResources: 'NotSupportResources',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      queryErrors: 'QueryErrors',
      queryTimeoutDetails: 'QueryTimeoutDetails',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      illegalValueByParameterConstraints: { 'type': 'array', 'itemType': 'any' },
      illegalValueByRules: { 'type': 'array', 'itemType': 'any' },
      notSupportResources: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources },
      originalConstraints: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      queryErrors: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors },
      queryTimeoutDetails: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRecommendParametersRequestParameters extends $tea.Model {
  parameterCandidateValues?: string[];
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterCandidateValues: 'ParameterCandidateValues',
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterCandidateValues: { 'type': 'array', 'itemType': 'string' },
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRecommendParametersResponseBodyRecommendParameterValues extends $tea.Model {
  parameterKey?: string;
  recommendValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      recommendValue: 'RecommendValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      recommendValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * Retain
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

export class GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup extends $tea.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type filters.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchSourceResources extends $tea.Model {
  /**
   * @remarks
   * The related resource type filters.
   */
  relatedResourceTypeFilter?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-m5e7cv7e9mz69sszb****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      relatedResourceTypeFilter: 'RelatedResourceTypeFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedResourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchSourceTag extends $tea.Model {
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource type filters.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchStackProvision extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the resource is replicated by calling the [CreateStack](https://help.aliyun.com/document_detail/132086.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  creatable?: boolean;
  /**
   * @remarks
   * Indicates whether the resource is managed by calling the [CreateChangeSet](https://help.aliyun.com/document_detail/131051.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  importable?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatable: 'Creatable',
      importable: 'Importable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatable: 'boolean',
      importable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchStacks extends $tea.Model {
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 3708bf6a-3a67-44d4-9eb1-c56704b9****
   */
  stackId?: string;
  /**
   * @remarks
   * The purpose of the stack. Valid values:
   * 
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ArchitectureReplication
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      usageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratch extends $tea.Model {
  /**
   * @remarks
   * The time at which the resource scenario was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T01:49:22
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * The description of the resource scenario.
   */
  description?: string;
  /**
   * @remarks
   * The status code of the resource scenario that fails to be created.
   * 
   * > This parameter is returned only if you set Status to GENERATE_FAILED.
   * 
   * @example
   * InvalidZoneId
   */
  failedCode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix (default): long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParameters?: GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters[];
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
   * The source resource group.
   */
  sourceResourceGroup?: GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   */
  sourceResources?: GetTemplateScratchResponseBodyTemplateScratchSourceResources[];
  /**
   * @remarks
   * The source tag.
   */
  sourceTag?: GetTemplateScratchResponseBodyTemplateScratchSourceTag;
  /**
   * @remarks
   * The preset information of the stack.
   */
  stackProvision?: GetTemplateScratchResponseBodyTemplateScratchStackProvision;
  /**
   * @remarks
   * The stacks that are associated with the resource scenario.
   */
  stacks?: GetTemplateScratchResponseBodyTemplateScratchStacks[];
  /**
   * @remarks
   * The state of the resource scenario. Valid values:
   * 
   * *   GENERATE_IN_PROGRESS: The resource scenario is being created.
   * *   GENERATE_COMPLETE: The resource scenario is created.
   * *   GENERATE_FAILED: The resource scenario fails to be created.
   * 
   * @example
   * GENERATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource scenario fails to be created.
   * 
   * > This parameter is returned only if you set Status to GENERATE_FAILED.
   * 
   * @example
   * Resource ALIYUN::ECS::VPC vpc-m5eauuq80anx59v28**** could not be found for template scratch.
   */
  statusReason?: string;
  /**
   * @remarks
   * The resource scenario data.
   */
  templateScratchData?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ArchitectureReplication
   */
  templateScratchType?: string;
  /**
   * @remarks
   * The time at which the resource scenario was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T01:49:23
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      failedCode: 'FailedCode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      stackProvision: 'StackProvision',
      stacks: 'Stacks',
      status: 'Status',
      statusReason: 'StatusReason',
      templateScratchData: 'TemplateScratchData',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      failedCode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters },
      resourceGroupId: 'string',
      sourceResourceGroup: GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchSourceResources },
      sourceTag: GetTemplateScratchResponseBodyTemplateScratchSourceTag,
      stackProvision: GetTemplateScratchResponseBodyTemplateScratchStackProvision,
      stacks: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchStacks },
      status: 'string',
      statusReason: 'string',
      templateScratchData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateScratchId: 'string',
      templateScratchType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of parameter N that is defined in the template. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are defined in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * InstanceId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that is defined in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * @example
   * i-rotp2e20whfrs2****
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

export class GetTemplateSummaryResponseBodyResourceIdentifierSummaries extends $tea.Model {
  /**
   * @remarks
   * The logical IDs of all resources of the type that is specified by ResouceType in the template.
   */
  logicalResourceIds?: string[];
  /**
   * @remarks
   * The resource properties. You can use a resource property to identify the resource that you want to manage. For example, VpcId is an identifier property of ALIYUN::ECS::VPC.
   */
  resourceIdentifiers?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * > The resource import feature is supported for the resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceIds: 'LogicalResourceIds',
      resourceIdentifiers: 'ResourceIdentifiers',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceIdentifiers: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITaskEventsResponseBodyEvents extends $tea.Model {
  /**
   * @example
   * GenerateTemplateAgent
   */
  agentType?: string;
  /**
   * @example
   * 2019-08-01T04:07:39
   */
  createTime?: string;
  /**
   * @example
   * 60
   */
  estimatedProcessingTime?: string;
  /**
   * @example
   * Document template generator started.
   */
  eventData?: string;
  /**
   * @example
   * RUNNING
   */
  handlerProcessStatus?: string;
  /**
   * @example
   * ROSTemplateGenerator
   */
  handlerType?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      createTime: 'CreateTime',
      estimatedProcessingTime: 'EstimatedProcessingTime',
      eventData: 'EventData',
      handlerProcessStatus: 'HandlerProcessStatus',
      handlerType: 'HandlerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      createTime: 'string',
      estimatedProcessingTime: 'string',
      eventData: 'string',
      handlerProcessStatus: 'string',
      handlerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITasksResponseBodyTasks extends $tea.Model {
  /**
   * @example
   * 2023-03-15T03:15:53
   */
  createTime?: string;
  prompt?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * Handler execution unexpected failure
   */
  statusReason?: string;
  /**
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  /**
   * @example
   * 2023-11-20T22:00:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      prompt: 'Prompt',
      status: 'Status',
      statusReason: 'StatusReason',
      taskId: 'TaskId',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      prompt: 'string',
      status: 'string',
      statusReason: 'string',
      taskId: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponseBodyChangeSets extends $tea.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The name of the change set.
   * 
   * @example
   * MyChangeSet
   */
  changeSetName?: string;
  /**
   * @remarks
   * The type of the change set.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The time when the change set was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-01T05:16:31
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the change set.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The execution status of the change set.
   * 
   * @example
   * AVAILABLE
   */
  executionStatus?: string;
  /**
   * @remarks
   * The region ID of the change set.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack with which the change set is associated.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack with which the change set is associated.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The status of the change set.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the change set is in its current state.
   * 
   * @example
   * too many changes
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      createTime: 'CreateTime',
      description: 'Description',
      executionStatus: 'ExecutionStatus',
      regionId: 'RegionId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      createTime: 'string',
      description: 'string',
      executionStatus: 'string',
      regionId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosticsResponseBodyDiagnostics extends $tea.Model {
  /**
   * @remarks
   * The time when the diagnostic report was generated.
   * 
   * @example
   * 2022-08-01T02:23:55
   */
  createTime?: string;
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * @example
   * 047D84D9-D3EB-5DA8-87F1-9A7DD5598A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The product that is diagnosed.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-2963bfbcac834f1a****
   */
  reportId?: string;
  /**
   * @remarks
   * The diagnosis status.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      reportId: 'ReportId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      reportId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeRegistrationsResponseBodyRegistrations extends $tea.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-03-02T07:28:35
   */
  createTime?: string;
  /**
   * @remarks
   * The entity type. Only Module may be returned.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the registration record.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  registrationId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The registration state. Valid values:
   * 
   * *   IN_PROGRESS: The registration is in progress.
   * *   COMPLETE: The registration is successful.
   * *   FAILED: The registration failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason for the state.
   * 
   * @example
   * Module is created successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      entityType: 'EntityType',
      registrationId: 'RegistrationId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusReason: 'StatusReason',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      entityType: 'string',
      registrationId: 'string',
      resourceType: 'string',
      status: 'string',
      statusReason: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeVersionsResponseBodyResourceTypeVersions extends $tea.Model {
  /**
   * @remarks
   * The time when the version was created. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Only Module may be returned.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS: ROS
   * *   Self: yourself
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The time when the version was updated. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  updateTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      entityType: 'EntityType',
      isDefaultVersion: 'IsDefaultVersion',
      provider: 'Provider',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      entityType: 'string',
      isDefaultVersion: 'boolean',
      provider: 'string',
      resourceType: 'string',
      updateTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypeSummaries extends $tea.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the default version.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   Resource: regular resources.
   * *   DataSource: DataSource resources.
   * *   Module: modules.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the latest version.
   * 
   * @example
   * v10
   */
  latestVersionId?: string;
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS: The resource type is provided by ROS.
   * *   Self: The resource type is provided by you.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of versions.
   * 
   * @example
   * 10
   */
  totalVersionCount?: number;
  /**
   * @remarks
   * The update time. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultVersionId: 'DefaultVersionId',
      description: 'Description',
      entityType: 'EntityType',
      latestVersionId: 'LatestVersionId',
      provider: 'Provider',
      resourceType: 'ResourceType',
      totalVersionCount: 'TotalVersionCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultVersionId: 'string',
      description: 'string',
      entityType: 'string',
      latestVersionId: 'string',
      provider: 'string',
      resourceType: 'string',
      totalVersionCount: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponseBodyEvents extends $tea.Model {
  /**
   * @remarks
   * The time when the event was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-01T04:07:39
   */
  createTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 0086612d-77cf-4056-b0b5-ff8e94ad****
   */
  eventId?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID indicates the name of the resource that is defined in the template.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * i-m5e3tfdbinchnexh****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * StackName
   */
  stackName?: string;
  /**
   * @remarks
   * The state of the resource.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource is in the current state.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventId: 'EventId',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      eventId: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBodyStackGroupOperationResults extends $tea.Model {
  /**
   * @remarks
   * The ID of the account to which the stack instance belongs.
   * 
   * *   If the stack group has self-managed permissions, the stack instance belongs to an Alibaba Cloud account.
   * *   If the stack group has service-managed permissions, the stack instance belongs to a member account in the resource directory.
   * 
   * >  For more information about the account, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * 175458090349****
   */
  accountId?: string;
  /**
   * @remarks
   * The folder ID of the resource directory.
   * 
   * >  This parameter is returned only when the stack group is granted service-managed permissions.
   * 
   * @example
   * "fd-4PvlVLOL8v"
   */
  rdFolderId?: string;
  /**
   * @remarks
   * The region ID of the stack instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the operation.
   * 
   * Valid values:
   * 
   * *   RUNNING: The operation is being performed.
   * *   SUCCEEDED: The operation succeeded.
   * *   FAILED: The operation failed.
   * *   STOPPING: The operation is being stopped.
   * *   STOPPED: The operation is stopped.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The reason why the operation is in a specific state.
   * 
   * >  This parameter is returned only when stack instances are in the OUTDATED state.
   * 
   * @example
   * User initiated operation
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      rdFolderId: 'string',
      regionId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponseBodyStackGroupOperations extends $tea.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   CREATE
   * *   UPDATE
   * *   DELETE
   * *   DETECT_DRIFT
   * 
   * @example
   * CREATE
   */
  action?: string;
  /**
   * @remarks
   * The time when the operation was initiated.
   * 
   * @example
   * 2020-01-20T09:22:36.000000
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 2020-01-20T09:22:41.000000
   */
  endTime?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * Create stack instance in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761****
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The state of the operation.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   SUCCEEDED
   * *   FAILED
   * *   STOPPING
   * *   STOPPED
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      endTime: 'string',
      operationDescription: 'string',
      operationId: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that is added to the stack group.
   * 
   * > Tags is optional. If you specify Tags, you must specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the stack group.
   * 
   * @example
   * test
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

export class ListStackGroupsResponseBodyStackGroupsAutoDeployment extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * *   true: Automatic deployment is enabled. If you add a member to the folder to which the stack group belongs after automatic deployment is enabled, Resource Orchestration Service (ROS) automatically adds the stack instances in the stack group to the specified region of the member. If you delete the member from the folder, ROS automatically deletes the stack instances in the stack group from the specified region of the member.
   * *   false: Automatic deployment is disabled. After you disable automatic deployment, the stack instances remain unchanged when you change the member in the folder.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the stacks within a member are retained when you delete the member from the folder.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is returned only if Enabled is set to true.
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBodyStackGroupsTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that is added to the stack group.
   * 
   * @example
   * usage1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the stack group.
   * 
   * @example
   * test1
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

export class ListStackGroupsResponseBodyStackGroups extends $tea.Model {
  /**
   * @remarks
   * The information about automatic deployment settings.
   */
  autoDeployment?: ListStackGroupsResponseBodyStackGroupsAutoDeployment;
  createTime?: string;
  /**
   * @remarks
   * The description of the stack group.
   * 
   * @example
   * My Stack Group
   */
  description?: string;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The permission model of the stack group.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED
   * *   SERVICE_MANAGED
   * 
   * > For more information about the permission models of stack groups, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxcj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The drift state of the stack group on which the most recent successful drift detection was performed.
   * 
   * Valid values:
   * 
   * *   DRIFTED: The stack group has drifted.
   * *   NOT_CHECKED: No drift detection is performed on the stack group.
   * *   IN_SYNC: No drifts are detected on the stack group.
   * 
   * @example
   * IN_SYNC
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The state of the stack group.
   * 
   * Valid values:
   * 
   * *   ACTIVE
   * *   DELETED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the stack group.
   */
  tags?: ListStackGroupsResponseBodyStackGroupsTags[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeployment: 'AutoDeployment',
      createTime: 'CreateTime',
      description: 'Description',
      driftDetectionTime: 'DriftDetectionTime',
      permissionModel: 'PermissionModel',
      resourceGroupId: 'ResourceGroupId',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeployment: ListStackGroupsResponseBodyStackGroupsAutoDeployment,
      createTime: 'string',
      description: 'string',
      driftDetectionTime: 'string',
      permissionModel: 'string',
      resourceGroupId: 'string',
      stackGroupDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListStackGroupsResponseBodyStackGroupsTags },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponseBodyStackInstances extends $tea.Model {
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * @example
   * 156552876021****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the last successful drift detection was performed on the stack.
   * 
   * > This parameter is returned only if drift detection is performed on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The ID of the folder in the resource directory.
   * 
   * > This parameter is returned only if the stack group is granted service-managed permissions.
   * 
   * @example
   * fd-4PvlVLOL8v
   */
  rdFolderId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the stack when the last successful drift detection was performed on the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: The stack has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed on the stack.
   * *   IN_SYNC: The stack is being synchronized.
   * 
   * > This parameter is returned only if drift detection is performed on the stack group.
   * 
   * @example
   * IN_SYNC
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * > This parameter is returned only if the stack is in the CURRENT state.
   * 
   * @example
   * 35ad60e3-6a92-42d8-8812-f0700d45****
   */
  stackId?: string;
  /**
   * @remarks
   * The state of the stack.
   * 
   * Valid values:
   * 
   * *   CURRENT: The stack is up-to-date with the stack group.
   * 
   * *   OUTDATED: The stack is not up-to-date with the stack group. Stacks are in the OUTDATED state due to the following possible reasons:
   * 
   *     *   When the CreateStackInstances operation is called to create stacks, the stacks fail to be created.
   *     *   When the UpdateStackInstances or UpdateStackGroup operation is called to update stacks, the stacks fail to be updated, or only specific stacks are updated.
   *     *   The creation or update operation is not complete.
   * 
   * @example
   * CURRENT
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack instance is in the OUTDATED state.
   * 
   * > This parameter is returned only if the stack instance is in the OUTDATED state.
   * 
   * @example
   * User initiated stop
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      driftDetectionTime: 'DriftDetectionTime',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      stackDriftStatus: 'StackDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      driftDetectionTime: 'string',
      rdFolderId: 'string',
      regionId: 'string',
      stackDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponseBodyRiskResources extends $tea.Model {
  /**
   * @remarks
   * The error code that is returned when the risk detection fails.
   * 
   * >  This parameter is not returned if the risk detection is successful.
   * 
   * @example
   * NoPermission
   */
  code?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID is the resource name that is defined in the template.
   * 
   * @example
   * MySG
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The error message that is returned when the risk detection fails.
   * 
   * >  This parameter is not returned if the risk detection is successful.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * The physical ID of the resource. The physical ID is the actual ID of the resource.
   * 
   * @example
   * sg-bp1dpioafqphedg9****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The cause of the risk.
   * 
   * @example
   * There are some ECS instances (i-bp18el96s4wq635e****) depending on the security group.
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the request when the risk detection fails.
   * 
   * >  This parameter is not returned if the risk detection is successful.
   * 
   * @example
   * DF4296CF-F45F-4845-A72B-BE617601DB25
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ALIYUN::ECS::SecurityGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the risk. Valid values:
   * 
   * *   Referenced: The resource is referenced by other resources.
   * *   MaybeReferenced: The resource may be referenced by other resources.
   * *   AdditionalRiskCheckRequired: An additional risk detection is required for a nested stack.
   * *   OperationIgnored: The operation does not take effect for the resource.
   * 
   * @example
   * Referenced
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      physicalResourceId: 'PhysicalResourceId',
      reason: 'Reason',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      physicalResourceId: 'string',
      reason: 'string',
      requestId: 'string',
      resourceType: 'string',
      riskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo extends $tea.Model {
  /**
   * @remarks
   * The concatenated logical IDs of one or more modules that contain the resource. The modules are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from Module B nested within Parent Module A:
   * 
   * `moduleA/moduleB`
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * The concatenated types of one or more modules that contain the resource. The module types are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from a module of the `MODULE::ROS::Child::Example` type that is nested within a parent module of the `MODULE::ROS::Parent::Example` type:
   * 
   * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
   * 
   * @example
   * MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example
   */
  typeHierarchy?: string;
  static names(): { [key: string]: string } {
    return {
      logicalIdHierarchy: 'LogicalIdHierarchy',
      typeHierarchy: 'TypeHierarchy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalIdHierarchy: 'string',
      typeHierarchy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences extends $tea.Model {
  /**
   * @remarks
   * The actual value of the resource property.
   * 
   * @example
   * test1
   */
  actualValue?: string;
  /**
   * @remarks
   * The drift type of the resource property. Valid values:
   * 
   * *   ADD: The value is added to a resource property whose data type is Array or List.
   * *   REMOVE: The property is deleted from the current resource configuration.
   * *   NOT_EQUAL: The current property value differs from the expected value that is defined in the stack template.
   * 
   * @example
   * NOT_EQUAL
   */
  differenceType?: string;
  /**
   * @remarks
   * The expected value of the resource property that is defined in the template.
   * 
   * @example
   * test2
   */
  expectedValue?: string;
  /**
   * @remarks
   * The path of the resource property.
   * 
   * @example
   * /ScalingRuleName
   */
  propertyPath?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      expectedValue: 'ExpectedValue',
      propertyPath: 'PropertyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      expectedValue: 'string',
      propertyPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDrifts extends $tea.Model {
  /**
   * @remarks
   * The actual JSON-formatted resource properties.
   * 
   * @example
   * {"ScalingRuleName": "test1"}
   */
  actualProperties?: string;
  /**
   * @remarks
   * The time when the drift detection operation was performed on the resource.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The JSON-formatted resource properties that are defined in the template.
   * 
   * @example
   * {"ScalingRuleName": "test2"}
   */
  expectedProperties?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID indicates the name of the resource that is defined in the template.
   * 
   * @example
   * ScalingRule
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The information about the modules from which the resource was created. This parameter is returned only if the resource is created from modules.
   */
  moduleInfo?: ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * asr-2ze4zzc3kf9yz1kd****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The property drifts of the resource.
   */
  propertyDifferences?: ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences[];
  /**
   * @remarks
   * The drift state of the resource. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   * 
   * @example
   * MODIFIED
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ESS::ScalingRule
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      actualProperties: 'ActualProperties',
      driftDetectionTime: 'DriftDetectionTime',
      expectedProperties: 'ExpectedProperties',
      logicalResourceId: 'LogicalResourceId',
      moduleInfo: 'ModuleInfo',
      physicalResourceId: 'PhysicalResourceId',
      propertyDifferences: 'PropertyDifferences',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualProperties: 'string',
      driftDetectionTime: 'string',
      expectedProperties: 'string',
      logicalResourceId: 'string',
      moduleInfo: ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo,
      physicalResourceId: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences },
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBodyResourcesModuleInfo extends $tea.Model {
  /**
   * @remarks
   * The concatenated logical IDs of one or more modules that contain the resource. The modules are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from Module B nested within Parent Module A:
   * 
   * `moduleA/moduleB`
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * The concatenated types of one or more modules that contain the resource. The module types are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from a module of the `MODULE::ROS::Child::Example` type that is nested within a parent module of the `MODULE::ROS::Parent::Example` type:
   * 
   * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
   * 
   * @example
   * MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example
   */
  typeHierarchy?: string;
  static names(): { [key: string]: string } {
    return {
      logicalIdHierarchy: 'LogicalIdHierarchy',
      typeHierarchy: 'TypeHierarchy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalIdHierarchy: 'string',
      typeHierarchy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBodyResources extends $tea.Model {
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2019-08-01T06:01:23
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID is the resource name that is defined in the template.
   * 
   * @example
   * dummy
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The information about the modules from which the resource is created. This parameter is returned only if the resource is created from modules.
   */
  moduleInfo?: ListStackResourcesResponseBodyResourcesModuleInfo;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * d04af923-e6b7-4272-aeaa-47ec9777****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The drift state of the resource in the most recent successful drift detection. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   * 
   * @example
   * IN_SYNC
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ROS::Stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * @example
   * test-describe-resource
   */
  stackName?: string;
  /**
   * @remarks
   * The state of the resource. Valid values:
   * 
   * *   INIT_COMPLETE: The resource is pending to be created.
   * *   CREATE_COMPLETE: The resource is created.
   * *   CREATE_FAILED: The resource failed to be created.
   * *   CREATE_IN_PROGRESS: The resource is being created.
   * *   UPDATE_IN_PROGRESS: The resource is being updated.
   * *   UPDATE_FAILED: The resource failed to be updated.
   * *   UPDATE_COMPLETE: The resource is updated.
   * *   DELETE_IN_PROGRESS: The resource is being deleted.
   * *   DELETE_FAILED: The resource failed to be deleted.
   * *   DELETE_COMPLETE: The resource is deleted.
   * *   CHECK_IN_PROGRESS: The resource is being validated.
   * *   CHECK_FAILED: The resource failed to be validated.
   * *   CHECK_COMPLETE: The resource is validated.
   * *   IMPORT_IN_PROGRESS: The resource is being imported.
   * *   IMPORT_FAILED: The resource failed to be imported.
   * *   IMPORT_COMPLETE: The resource is imported.
   * 
   * @example
   * UPDATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource is in its current state.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was updated. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2019-08-01T06:01:29
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      driftDetectionTime: 'DriftDetectionTime',
      logicalResourceId: 'LogicalResourceId',
      moduleInfo: 'ModuleInfo',
      physicalResourceId: 'PhysicalResourceId',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      driftDetectionTime: 'string',
      logicalResourceId: 'string',
      moduleInfo: ListStackResourcesResponseBodyResourcesModuleInfo,
      physicalResourceId: 'string',
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.\\
   * Valid values of N: 1 to 20.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.\\
   * Valid values of N: 1 to 20.
   * 
   * @example
   * test
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

export class ListStacksResponseBodyStacksOperationInfo extends $tea.Model {
  /**
   * @remarks
   * The name of the API operation that belongs to another Alibaba Cloud service.
   * 
   * @example
   * DeleteSecurityGroup
   */
  action?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DependencyViolation
   */
  code?: string;
  /**
   * @remarks
   * The logical ID of the resource on which the operation error occurred.
   * 
   * @example
   * EcsSecurityGroup
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * There is still instance(s) in the specified security group.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request that is initiated to call the API operation of another Alibaba Cloud service.
   * 
   * @example
   * 071D6166-3F6B-5C7B-A1F0-0113FBB643A8
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource on which the operation error occurred.
   * 
   * @example
   * ALIYUN::ECS::SecurityGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      requestId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponseBodyStacksTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the stack.
   * 
   * @example
   * acs:rm:rgId
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack.
   * 
   * @example
   * rg-aek2frunvw7****
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

export class ListStacksResponseBodyStacks extends $tea.Model {
  /**
   * @remarks
   * The time when the stack was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-10T06:44:36
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the stack. Valid values:
   * 
   * *   Enabled: Deletion protection is enabled for the stack.
   * *   Disabled: Deletion protection is disabled for the stack. In this case, you can delete the stack by using the console or calling the [DeleteStack](https://help.aliyun.com/document_detail/610812.html) operation.
   * 
   * >  Deletion protection of a nested stack is the same as that of its root stack.
   * 
   * @example
   * Disabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled when the stack fails to be created. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack.
   * 
   * @example
   * 2022-03-10T06:46:36
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The supplementary information that is returned if an error occurs on a stack operation.
   * 
   * >  This parameter is returned only under specific conditions, and is returned together with at least one sub-parameter. For example, an error occurred when an API operation of another Alibaba Cloud service was called.
   */
  operationInfo?: ListStacksResponseBodyStacksOperationInfo;
  /**
   * @remarks
   * The ID of the parent stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  parentStackId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
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
   * rg-aek2frunvw7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the stack is a managed stack. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The name of the service to which the managed stack belongs.
   * 
   * @example
   * ACVS
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stack on which the most recent successful drift detection was performed. Valid values:
   * 
   * *   DRIFTED: The stack has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed on the stack.
   * *   IN_SYNC: The stack is being synchronized.
   * 
   * @example
   * IN_SYNC
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 67805444-a605-45ee-a57f-83908ff6****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The stack type. Valid values:
   * 
   * *   ROS: ROS stack. The stack is created by using a ROS template.
   * *   Terraform: Terraform stack. The stack is created by using a Terraform template.
   * 
   * @example
   * ROS
   */
  stackType?: string;
  /**
   * @remarks
   * The state of the stack.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack is in its current state.
   * 
   * @example
   * Stack CREATE completed successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the stack.
   */
  tags?: ListStacksResponseBodyStacksTags[];
  /**
   * @remarks
   * The timeout period for creating the stack. Unit: minutes.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * The time when the stack was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-10T07:44:36
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      disableRollback: 'DisableRollback',
      driftDetectionTime: 'DriftDetectionTime',
      operationInfo: 'OperationInfo',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
      stackName: 'StackName',
      stackType: 'StackType',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      timeoutInMinutes: 'TimeoutInMinutes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'string',
      disableRollback: 'boolean',
      driftDetectionTime: 'string',
      operationInfo: ListStacksResponseBodyStacksOperationInfo,
      parentStackId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
      stackName: 'string',
      stackType: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListStacksResponseBodyStacksTags },
      timeoutInMinutes: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.\\
   * The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.\\
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * FinanceJoshua
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
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * TagKey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * TayValue1
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

export class ListTemplateScratchesRequestTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the scenario.
   * 
   * > Tags is optional. If you want to specify Tags, you must specify Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the scenario.
   * 
   * @example
   * test
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

export class ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * Retain
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

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup extends $tea.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResources extends $tea.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-m5eauuq80anx59v28****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceTag extends $tea.Model {
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource scenario.
   * 
   * @example
   * usage1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource scenario.
   * 
   * @example
   * test1
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

export class ListTemplateScratchesResponseBodyTemplateScratches extends $tea.Model {
  /**
   * @remarks
   * The time when the resource scenario was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-07T08:06:44
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource scenario.
   * 
   * @example
   * The description of the scenario.
   */
  description?: string;
  /**
   * @remarks
   * The status code of the resource scenario that failed to be generated.
   * 
   * >  This parameter is returned only if the value of Status is GENERATE_FAILED.
   * 
   * @example
   * InvalidZoneId
   */
  failedCode?: string;
  /**
   * @remarks
   * The policy based on which the logical ID is generated. Valid values:
   * 
   * *   LongTypePrefixAndIndexSuffix (default): long-type prefix + index-type suffix
   * *   LongTypePrefixAndHashSuffix: long-type prefix + hash-type suffix
   * *   ShortTypePrefixAndHashSuffix: short-type prefix + hash-type suffix
   * 
   * @example
   * LongTypePrefixAndIndexSuffix
   */
  logicalIdStrategy?: string;
  /**
   * @remarks
   * The preference parameters of the resource scenario.
   */
  preferenceParameters?: ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4nxcvht4pmi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroup?: ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup;
  /**
   * @remarks
   * The source resources.
   */
  sourceResources?: ListTemplateScratchesResponseBodyTemplateScratchesSourceResources[];
  /**
   * @remarks
   * The source tag.
   */
  sourceTag?: ListTemplateScratchesResponseBodyTemplateScratchesSourceTag;
  /**
   * @remarks
   * The state of the resource scenario.
   * 
   * @example
   * GENERATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource scenario failed to be generated.
   * 
   * >  This parameter is returned only if the value of Status is GENERATE_FAILED.
   * 
   * @example
   * Resource ALIYUN::ECS::VPC vpc-m5eauuq80anx59v28**** could not be found for template scratch.
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the resource scenario.
   */
  tags?: ListTemplateScratchesResponseBodyTemplateScratchesTags[];
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-48ad85d66cca4620****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The type of the resource scenario. Valid values:
   * 
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ResourceImport
   */
  templateScratchType?: string;
  /**
   * @remarks
   * The time when the resource scenario was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-07T08:06:44
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      failedCode: 'FailedCode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      resourceGroupId: 'ResourceGroupId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      failedCode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters },
      resourceGroupId: 'string',
      sourceResourceGroup: ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesSourceResources },
      sourceTag: ListTemplateScratchesResponseBodyTemplateScratchesSourceTag,
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesTags },
      templateScratchId: 'string',
      templateScratchType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBodyVersions extends $tea.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates. For a shared template, the template ID is the same as the Alibaba Cloud Resource Name (ARN) of the template.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name that corresponds to the specified version.
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * For a shared template, this parameter is returned only if VersionOption is set to AllVersions.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the version was last updated.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
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

export class ListTemplatesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. This parameter takes effect only when ShareType is set to Private.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. This parameter takes effect only when ShareType is set to Private.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * deploy
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

export class ListTemplatesResponseBodyTemplatesTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
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

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-10-15T08:17:14.000000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the template belongs.
   * 
   * @example
   * 151266687691****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type of the template.
   * 
   * Valid values:
   * 
   * *   Private: The template belongs to the template owner.
   * *   Shared: The template is shared with other users.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tags of the template.
   */
  tags?: ListTemplatesResponseBodyTemplatesTags[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the template.
   * 
   * @example
   * acs:ros:*:151266687691****:template/a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateARN?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 4d4f5aa2-3260-4e47-863b-763fbb12****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * demo
   */
  templateName?: string;
  /**
   * @remarks
   * The latest version of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2019-10-15T08:17:14.000000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateARN: 'TemplateARN',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesTags },
      templateARN: 'string',
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

export class PreviewStackRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter N. If you do not specify the name and value of a parameter, Resource Orchestration Service (ROS) uses the default name and value that are specified in the template. Maximum value of N: 200.
   * 
   * > If you specify Parameters, you must specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::AccountId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N. Maximum value of N: 200.
   * 
   * > If you specify Parameters, you must specify Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
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

export class PreviewStackResponseBodyStackLogTerraformLogs extends $tea.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * *   apply
   * *   plan
   * *   destroy
   * *   version
   * 
   * For more information about Terraform commands, see [Basic CLI Features](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content of the output stream that is returned after the command is run.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * *   stdout: standard output stream
   * *   stderr: standard error stream
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStackLog extends $tea.Model {
  /**
   * @remarks
   * The Terraform logs. This parameter is returned only if the stack is a Terraform stack.
   * 
   * > This parameter contains the logs of previewing the stack.
   */
  terraformLogs?: PreviewStackResponseBodyStackLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStackParameters extends $tea.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ALIYUN::AccountId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 151266687691****
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

export class PreviewStackResponseBodyStackResources extends $tea.Model {
  /**
   * @remarks
   * The resource type of an Alibaba Cloud service.
   * 
   * @example
   * ACS::ECS::Instance
   */
  acsResourceType?: string;
  /**
   * @remarks
   * The action that is performed on the resource. Valid values:
   * 
   * *   Add
   * *   Modify
   * *   Remove
   * *   None
   * 
   * @example
   * Add
   */
  action?: string;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * This parameter is returned only if Action is set to Modify or Remove.
   * 
   * @example
   * i-a1b2c3***
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The resource properties.
   * 
   * @example
   * {   "DiskMappings": [     {       "Category": "cloud_ssd",       "Size": "20"     }   ],   "SystemDisk_Category": "cloud_ssd",   "InstanceChargeType": "PostPaid",   "AutoRenew": "False",   "WillReplace": true,   "ImageId": "centos_7",   "InstanceType": "ecs.g6.large",   "AllocatePublicIP": true,   "AutoRenewPeriod": 1,   "IoOptimized": "optimized",   "ZoneId": "cn-beijing-g",   "VSwitchId": "",   "SecurityGroupId": "",   "Period": 1,   "InternetChargeType": "PayByTraffic",   "SystemDiskCategory": "cloud_efficiency",   "InternetMaxBandwidthOut": 1,   "VpcId": "",   "InternetMaxBandwidthIn": 200,   "PeriodUnit": "Month" }
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether a replacement update is performed on the template. Valid values:
   * 
   * *   True: A replacement update is performed on the template.
   * *   False: A change is made on the template.
   * *   Conditional: A replacement update may be performed on the template. You can check whether a replacement update is performed when the template is in use.
   * 
   * > This parameter is returned only if Action is set to Modify.
   * 
   * @example
   * False
   */
  replacement?: string;
  /**
   * @remarks
   * The resources on which the stack depends.
   */
  requiredBy?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the nested stack. The data structure of the value is the same as the data structure of the entire response.
   * 
   * @example
   * {}
   */
  stack?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      acsResourceType: 'AcsResourceType',
      action: 'Action',
      description: 'Description',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      properties: 'Properties',
      replacement: 'Replacement',
      requiredBy: 'RequiredBy',
      resourceType: 'ResourceType',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsResourceType: 'string',
      action: 'string',
      description: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replacement: 'string',
      requiredBy: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      stack: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStack extends $tea.Model {
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * One ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled for the resources when the stack fails to be created.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The log that is generated when the stack is run.
   */
  log?: PreviewStackResponseBodyStackLog;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: PreviewStackResponseBodyStackParameters[];
  /**
   * @remarks
   * The region where the stack resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources in the stack.
   */
  resources?: PreviewStackResponseBodyStackResources[];
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body.
   * 
   * @example
   * {   "Statement": [     {       "Action": "Update:*",       "Resource": "*",       "Effect": "Allow",       "Principal": "*"     },     {       "Action": "Update:*",       "Resource": "LogicalResourceId/apple1",       "Effect": "Deny",       "Principal": "*"     }   ] }
   */
  stackPolicyBody?: { [key: string]: any };
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * One ECS instance.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The timeout period for creating the stack.
   * 
   * Unit: minutes.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disableRollback: 'DisableRollback',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resources: 'Resources',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      templateDescription: 'TemplateDescription',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableRollback: 'boolean',
      log: PreviewStackResponseBodyStackLog,
      parameters: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackParameters },
      regionId: 'string',
      resources: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackResources },
      stackName: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateDescription: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys.
   * 
   * The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceJoshua
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

export class UpdateStackRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The name of parameter N. If you do not specify the name and value of a parameter, ROS uses the default name and value in the template.
   * 
   * Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N. Maximum value of N: 200.
   * 
   * >  The Parameters parameter is optional. If you specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

export class UpdateStackRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the stack.
   * 
   * Valid values of N: 1 to 20.
   * 
   * > - The Tags parameter is optional. If you specify Tags, you must specify Tags.N.Key.
   * > - The tag of a stack is propagated to each resource that supports the tag feature in the stack. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the stack.
   * 
   * Valid values of N: 1 to 20.
   * 
   * >  The tag of a stack is propagated to each resource that supports the tag feature in the stack. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * @example
   * test
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

export class UpdateStackResponseBodyDryRunResult extends $tea.Model {
  /**
   * @remarks
   * The parameters that can be modified. If you change only values of the parameters in a stack template and use the template to update the stack, no validation errors are caused.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions.
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources.
   * 
   * > -  This parameter can be returned only if ReplacementOption is set to Enabled.
   * > -  This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions. If you change only values of the parameters in a stack template and use the template to update the stack, the new values of the parameters determine whether validation errors are caused.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under specific conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > -  This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under specific conditions.
   * 
   * > - This parameter can be returned only if ReplacementOption is set to Enabled.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified. If you change only values of the parameters in a stack template and use the template to update the stack, validation errors are caused.
   */
  parametersNotAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under uncertain conditions. If you change only values of the parameters in a stack template and use the template to update the stack, the actual running environment determines whether validation errors are caused.
   */
  parametersUncertainlyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under uncertain conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersUncertainlyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under uncertain conditions.
   * 
   * > - This parameter can be returned only if ReplacementOption is set to Enabled.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersUncertainlyCauseReplacementIfModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersCauseInterruptionIfModified: 'ParametersCauseInterruptionIfModified',
      parametersCauseReplacementIfModified: 'ParametersCauseReplacementIfModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersConditionallyCauseInterruptionIfModified: 'ParametersConditionallyCauseInterruptionIfModified',
      parametersConditionallyCauseReplacementIfModified: 'ParametersConditionallyCauseReplacementIfModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
      parametersUncertainlyAllowedToBeModified: 'ParametersUncertainlyAllowedToBeModified',
      parametersUncertainlyCauseInterruptionIfModified: 'ParametersUncertainlyCauseInterruptionIfModified',
      parametersUncertainlyCauseReplacementIfModified: 'ParametersUncertainlyCauseReplacementIfModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequestAutoDeployment extends $tea.Model {
  /**
   * @remarks
   * The IDs of the members in the resource directory. You can specify a maximum of 20 member IDs.
   * 
   * >  To view the member IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the detailed information of a member](https://help.aliyun.com/document_detail/111624.html).
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The IDs of the members in the resource directory. You can specify a maximum of 20 member IDs.
   * 
   * >  To view the member IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the detailed information of a member](https://help.aliyun.com/document_detail/111624.html).
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequestDeploymentTargets extends $tea.Model {
  /**
   * @remarks
   * The list of one or more Alibaba Cloud accounts with which you want to share or unshare the template.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The ID of the operation.
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequestParameters extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to retain stacks in a member when you remove the member from the folder.
   * 
   * Valid values:
   * 
   * *   true: retains the stacks.
   * *   false: deletes the stacks.
   * 
   * >  This parameter is required if the Enabled parameter is set to true.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The folders in which you want to use service-managed permissions to update stacks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

export class UpdateStackGroupShrinkRequestParameters extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to retain stacks in a member when you remove the member from the folder.
   * 
   * Valid values:
   * 
   * *   true: retains the stacks.
   * *   false: deletes the stacks.
   * 
   * >  This parameter is required if the Enabled parameter is set to true.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The folders in which you want to use service-managed permissions to update stacks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

export class UpdateStackInstancesRequestDeploymentTargets extends $tea.Model {
  /**
   * @remarks
   * The IDs of the member accounts in the resource directory. You can specify up to 20 member account IDs.
   * 
   * > To view the member account IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the details of a member](https://help.aliyun.com/document_detail/111624.html).
   */
  accountIds?: string[];
  /**
   * @remarks
   * The folder IDs of the resource directory.
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesRequestParameterOverrides extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the name that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * > -  ParameterOverrides is optional.
   * > - If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the value that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * > -  ParameterOverrides is optional.
   * > - If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

export class UpdateStackInstancesShrinkRequestParameterOverrides extends $tea.Model {
  /**
   * @remarks
   * The key of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the name that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * > -  ParameterOverrides is optional.
   * > - If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N that you want to use to override a specific parameter. If you do not specify this parameter, ROS uses the value that you specified when you created the stack group.
   * 
   * Maximum value of N: 200.
   * 
   * > -  ParameterOverrides is optional.
   * > - If you specify ParameterOverrides, you must specify ParameterOverrides.N.ParameterKey and ParameterOverrides.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

export class UpdateTemplateScratchRequestPreferenceParameters extends $tea.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >- PreferenceParameters is optional. If you specify PreferenceParameters, you must specify both ParameterKey and ParameterValue.
   * > - If you set TemplateScratchType to ResourceImport, you must set ParameterKey to DeletionPolicy.
   * 
   * This parameter is required.
   * 
   * @example
   * DeletionPolicy
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value. The value of ParameterValue varies based on the value of ParameterKey.
   * 
   * For more information about the valid values of ParameterKey, see the "**Additional information about request parameters**" section of this topic.
   * 
   * >  PreferenceParameters is optional. If you specify PreferenceParameters, you must specify both ParameterKey and ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * Retain
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

export class UpdateTemplateScratchRequestSourceResourceGroup extends $tea.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequestSourceResources extends $tea.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1m6fww66xbntjyc****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequestSourceTag extends $tea.Model {
  /**
   * @remarks
   * The source tags. A tag contains a tag key and a tag value.
   * 
   * If you want to specify only the tag key, you must leave the tag value empty. Example: {"TagKey": ""}.
   * 
   * If you set TemplateScratchType to ArchitectureDetection, you can add up to 5 source tags. In other cases, you can add up to 10 source tags.
   * 
   * This parameter is required.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyOutputs extends $tea.Model {
  /**
   * @remarks
   * The description of the template output.
   * 
   * @example
   * The instance ID of my ECS.
   */
  description?: string;
  /**
   * @remarks
   * The alias of the template output.
   * 
   * @example
   * Instance ID
   */
  label?: string;
  /**
   * @remarks
   * The name of the template output.
   * 
   * @example
   * instance_id
   */
  outputKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      outputKey: 'OutputKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      outputKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyResourceTypes extends $tea.Model {
  /**
   * @remarks
   * The DataSource resource types that are used in the template. The value is deduplicated.
   */
  dataSources?: string[];
  /**
   * @remarks
   * The regular resource types that are used in the template. The value is deduplicated.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': 'string' },
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyResources extends $tea.Model {
  /**
   * @remarks
   * The pattern in which the logical IDs of regular resources are formed.
   * 
   * If resources are defined in a ROS template, the following rules apply:
   * 
   * *   Resource whose definition does not contain `Count`: If the resource name defined in the template is `server`, the values of LogicalResourceIdPattern and `ResourcePath` are both `server`.``
   * *   Resource whose definition contains `Count`: If the resource name defined in the template is `server`, the value of LogicalResourceIdPattern is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * If resources and [modules](https://www.terraform.io/language/modules) are defined in a Terraform template, the following rules apply:
   * 
   * *   Resource and module whose definitions do not contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the resource name defined in the template is `server`, the values of LogicalResourceIdPattern and `ResourcePath` are both `server`.``
   * *   Resource and module whose definitions contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the resource name defined in the template is `server`, the value of LogicalResourceIdPattern is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * Examples of LogicalResourceIdPattern for resources in a Terraform template:
   * 
   * *   Valid values of LogicalResourceIdPattern if a resource belongs to the root module:
   * 
   *     *   `server`: In this case, `count` and `for_each` are not contained in the resource. The value of `ResourcePath` is `server`.
   *     *   `server[*]`: In this case, `count` or `for_each` is contained in the resource. The value of `ResourcePath` is `server`.
   * 
   * *   Valid values of LogicalResourceIdPattern if a resource belongs to a child module:
   * 
   *     *   `app.server`: In this case, `count` and `for_each` are not contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.server`.````
   *     *   `app.server[*]`: In this case, `count` or `for_each` is contained in the `server` resource, but `count` and `for_each` are not contained in the `app` module. The value of `ResourcePath` is `app.server`.
   *     *   `app[*].server`: In this case, `count` or `for_each` is contained in the `app` module, but `count` and `for_each` are not contained in the `server` resource. The value of `ResourcePath` is `app.server`.
   *     *   `app[*].server[*]`: In this case, `count` or `for_each` is contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.server`.````
   *     *   `app.app_group[*].server`: In this case, `count` or `for_each` is contained in the `app_group` module, but `count` and `for_each` are not contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.app_group.server`. The `app_group` module is a child module of the `app` module.````
   * 
   * @example
   * server
   */
  logicalResourceIdPattern?: string;
  /**
   * @remarks
   * The path of the regular resource. In most cases, the path of a regular resource is the same as the resource name.
   * 
   * @example
   * server
   */
  resourcePath?: string;
  /**
   * @remarks
   * The regular resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceIdPattern: 'LogicalResourceIdPattern',
      resourcePath: 'ResourcePath',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceIdPattern: 'string',
      resourcePath: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyUpdateInfo extends $tea.Model {
  /**
   * @remarks
   * The parameters that can be modified.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources.
   * 
   * > -  This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > -  This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under specific conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under specific conditions.
   * 
   * > - This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified.
   */
  parametersNotAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under uncertain conditions.
   */
  parametersUncertainlyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under uncertain conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersUncertainlyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under uncertain conditions.
   * 
   * > -  This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > -  This parameter is valid only for updates on ROS stacks.
   */
  parametersUncertainlyCauseReplacementIfModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersCauseInterruptionIfModified: 'ParametersCauseInterruptionIfModified',
      parametersCauseReplacementIfModified: 'ParametersCauseReplacementIfModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersConditionallyCauseInterruptionIfModified: 'ParametersConditionallyCauseInterruptionIfModified',
      parametersConditionallyCauseReplacementIfModified: 'ParametersConditionallyCauseReplacementIfModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
      parametersUncertainlyAllowedToBeModified: 'ParametersUncertainlyAllowedToBeModified',
      parametersUncertainlyCauseInterruptionIfModified: 'ParametersUncertainlyCauseInterruptionIfModified',
      parametersUncertainlyCauseReplacementIfModified: 'ParametersUncertainlyCauseReplacementIfModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ros", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels operations on a stack.
   * 
   * @param request - CancelStackOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelStackOperationResponse
   */
  async cancelStackOperationWithOptions(request: CancelStackOperationRequest, runtime: $Util.RuntimeOptions): Promise<CancelStackOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowedStackOperations)) {
      query["AllowedStackOperations"] = request.allowedStackOperations;
    }

    if (!Util.isUnset(request.cancelType)) {
      query["CancelType"] = request.cancelType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelStackOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelStackOperationResponse>(await this.callApi(params, req, runtime), new CancelStackOperationResponse({}));
  }

  /**
   * Cancels operations on a stack.
   * 
   * @param request - CancelStackOperationRequest
   * @returns CancelStackOperationResponse
   */
  async cancelStackOperation(request: CancelStackOperationRequest): Promise<CancelStackOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelStackOperationWithOptions(request, runtime);
  }

  /**
   * Cancels an update operation on a stack. You can call this operation to cancel an update operation on a stack when the stack is being updated or created.
   * 
   * @param request - CancelUpdateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelUpdateStackResponse
   */
  async cancelUpdateStackWithOptions(request: CancelUpdateStackRequest, runtime: $Util.RuntimeOptions): Promise<CancelUpdateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cancelType)) {
      query["CancelType"] = request.cancelType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelUpdateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelUpdateStackResponse>(await this.callApi(params, req, runtime), new CancelUpdateStackResponse({}));
  }

  /**
   * Cancels an update operation on a stack. You can call this operation to cancel an update operation on a stack when the stack is being updated or created.
   * 
   * @param request - CancelUpdateStackRequest
   * @returns CancelUpdateStackResponse
   */
  async cancelUpdateStack(request: CancelUpdateStackRequest): Promise<CancelUpdateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUpdateStackWithOptions(request, runtime);
  }

  /**
   * Continues to create a stack after the stack fails to be created.
   * 
   * @remarks
   * This topic provides an example on how to continue to create a stack after the stack fails to be created. In this example, the stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is created in the China (Hangzhou) region.
   * 
   * @param request - ContinueCreateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueCreateStackResponse
   */
  async continueCreateStackWithOptions(request: ContinueCreateStackRequest, runtime: $Util.RuntimeOptions): Promise<ContinueCreateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.recreatingOptions)) {
      query["RecreatingOptions"] = request.recreatingOptions;
    }

    if (!Util.isUnset(request.recreatingResources)) {
      query["RecreatingResources"] = request.recreatingResources;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "ContinueCreateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueCreateStackResponse>(await this.callApi(params, req, runtime), new ContinueCreateStackResponse({}));
  }

  /**
   * Continues to create a stack after the stack fails to be created.
   * 
   * @remarks
   * This topic provides an example on how to continue to create a stack after the stack fails to be created. In this example, the stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is created in the China (Hangzhou) region.
   * 
   * @param request - ContinueCreateStackRequest
   * @returns ContinueCreateStackResponse
   */
  async continueCreateStack(request: ContinueCreateStackRequest): Promise<ContinueCreateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueCreateStackWithOptions(request, runtime);
  }

  /**
   * 创建AI任务
   * 
   * @param request - CreateAITaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAITaskResponse
   */
  async createAITaskWithOptions(request: CreateAITaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAITaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.template)) {
      body["Template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAITask",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAITaskResponse>(await this.callApi(params, req, runtime), new CreateAITaskResponse({}));
  }

  /**
   * 创建AI任务
   * 
   * @param request - CreateAITaskRequest
   * @returns CreateAITaskResponse
   */
  async createAITask(request: CreateAITaskRequest): Promise<CreateAITaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAITaskWithOptions(request, runtime);
  }

  /**
   * Creates a change set for a stack. You can view proposed changes before you execute the change set.
   * 
   * @remarks
   * ### [](#)Scenarios
   * #### [](#)Use a change set to create a stack
   * If you want to manage a large number of cloud resources and preview the creation effect of the resources before a stack that contains the resources is created, you can create the stack by using a change set. In this case, you must set `ChangeSetType` to CREATE and configure the relevant parameters. For more information about change sets, see [Change set](https://help.aliyun.com/document_detail/155649.html).
   * #### [](#)Use a change set to update a stack
   * If you want to preview the impacts of changes to an existing stack before you update the stack resources, you can create a change set for the stack. In this case, you must set ChangeSetType to UPDATE and configure the relevant parameters. For more information about change sets, see [Change set](https://help.aliyun.com/document_detail/155649.html).
   * #### [](#)Use a change set and existing resources to create a stack
   * If you want to add existing cloud resources to a new stack for centralized management, you can use a change set to create a stack and import the resources to the stack. In this case, you must set ChangeSetType to IMPORT and configure the relevant parameters. For more information about the resource import feature, see [Overview](https://help.aliyun.com/document_detail/193454.html).
   * #### [](#)Use a change set and existing resources to update a stack
   * If you want to import existing resources to an existing stack for centralized management, you can use a change set to update the stack. In this case, you must set ChangeSetType to IMPORT and configure the relevant parameters. For more information about the resource import feature, see [Overview](https://help.aliyun.com/document_detail/193454.html).
   * ### [](#)Limits
   * *   You can use change sets to update only stacks that are in specific states. For more information, see [Use a change set to update a stack](https://help.aliyun.com/document_detail/155873.html).
   * *   A stack can have up to 20 change sets.
   * *   Change sets reflect only the changes to stacks. Change sets do not reflect whether stacks can be successfully updated.
   * *   A change set does not check if you exceed an account limit, if you update resources that cannot be updated, or if you have insufficient permissions to modify resources, all of which can cause a stack update to fail. If a stack update fails, Resource Orchestration Service (ROS) attempts to roll back your resources to their original status.
   * This topic provides an example on how to use a change set to update a stack. In this example, a change set named `MyChangeSet` is created in the `China (Hangzhou)` region. The template of a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is updated to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChangeSetResponse
   */
  async createChangeSetWithOptions(request: CreateChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetName)) {
      query["ChangeSetName"] = request.changeSetName;
    }

    if (!Util.isUnset(request.changeSetType)) {
      query["ChangeSetType"] = request.changeSetType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.notificationURLs)) {
      query["NotificationURLs"] = request.notificationURLs;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replacementOption)) {
      query["ReplacementOption"] = request.replacementOption;
    }

    if (!Util.isUnset(request.resourcesToImport)) {
      query["ResourcesToImport"] = request.resourcesToImport;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateBody)) {
      query["StackPolicyDuringUpdateBody"] = request.stackPolicyDuringUpdateBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateURL)) {
      query["StackPolicyDuringUpdateURL"] = request.stackPolicyDuringUpdateURL;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!Util.isUnset(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateChangeSetResponse>(await this.callApi(params, req, runtime), new CreateChangeSetResponse({}));
  }

  /**
   * Creates a change set for a stack. You can view proposed changes before you execute the change set.
   * 
   * @remarks
   * ### [](#)Scenarios
   * #### [](#)Use a change set to create a stack
   * If you want to manage a large number of cloud resources and preview the creation effect of the resources before a stack that contains the resources is created, you can create the stack by using a change set. In this case, you must set `ChangeSetType` to CREATE and configure the relevant parameters. For more information about change sets, see [Change set](https://help.aliyun.com/document_detail/155649.html).
   * #### [](#)Use a change set to update a stack
   * If you want to preview the impacts of changes to an existing stack before you update the stack resources, you can create a change set for the stack. In this case, you must set ChangeSetType to UPDATE and configure the relevant parameters. For more information about change sets, see [Change set](https://help.aliyun.com/document_detail/155649.html).
   * #### [](#)Use a change set and existing resources to create a stack
   * If you want to add existing cloud resources to a new stack for centralized management, you can use a change set to create a stack and import the resources to the stack. In this case, you must set ChangeSetType to IMPORT and configure the relevant parameters. For more information about the resource import feature, see [Overview](https://help.aliyun.com/document_detail/193454.html).
   * #### [](#)Use a change set and existing resources to update a stack
   * If you want to import existing resources to an existing stack for centralized management, you can use a change set to update the stack. In this case, you must set ChangeSetType to IMPORT and configure the relevant parameters. For more information about the resource import feature, see [Overview](https://help.aliyun.com/document_detail/193454.html).
   * ### [](#)Limits
   * *   You can use change sets to update only stacks that are in specific states. For more information, see [Use a change set to update a stack](https://help.aliyun.com/document_detail/155873.html).
   * *   A stack can have up to 20 change sets.
   * *   Change sets reflect only the changes to stacks. Change sets do not reflect whether stacks can be successfully updated.
   * *   A change set does not check if you exceed an account limit, if you update resources that cannot be updated, or if you have insufficient permissions to modify resources, all of which can cause a stack update to fail. If a stack update fails, Resource Orchestration Service (ROS) attempts to roll back your resources to their original status.
   * This topic provides an example on how to use a change set to update a stack. In this example, a change set named `MyChangeSet` is created in the `China (Hangzhou)` region. The template of a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is updated to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateChangeSetRequest
   * @returns CreateChangeSetResponse
   */
  async createChangeSet(request: CreateChangeSetRequest): Promise<CreateChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChangeSetWithOptions(request, runtime);
  }

  /**
   * Creates a dignosis task.
   * 
   * @param request - CreateDiagnosticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosticResponse
   */
  async createDiagnosticWithOptions(request: CreateDiagnosticRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiagnosticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diagnosticKey)) {
      query["DiagnosticKey"] = request.diagnosticKey;
    }

    if (!Util.isUnset(request.diagnosticType)) {
      query["DiagnosticType"] = request.diagnosticType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDiagnostic",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDiagnosticResponse>(await this.callApi(params, req, runtime), new CreateDiagnosticResponse({}));
  }

  /**
   * Creates a dignosis task.
   * 
   * @param request - CreateDiagnosticRequest
   * @returns CreateDiagnosticResponse
   */
  async createDiagnostic(request: CreateDiagnosticRequest): Promise<CreateDiagnosticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiagnosticWithOptions(request, runtime);
  }

  /**
   * Creates a stack that contains a collection of resources by using a Resource Orchestration Service (ROS) template.
   * 
   * @remarks
   * A stack is a collection of ROS resources that you can manage as a single unit. To create a collection of resources, you can create a stack. For more information about stacks, see [Overview](https://help.aliyun.com/document_detail/172973.html).\\
   * When you call the operation, take note of the following limits:
   * *   You can create up to 200 stacks within an Alibaba Cloud account.
   * *   You can create up to 200 resources in a stack.
   * This topic provides an example on how to create a stack named `MyStack` in the China (Hangzhou) region by using a template. In this example, `TemplateBody` is set to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackResponse
   */
  async createStackWithOptions(request: CreateStackRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createOption)) {
      query["CreateOption"] = request.createOption;
    }

    if (!Util.isUnset(request.createOptions)) {
      query["CreateOptions"] = request.createOptions;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.notificationURLs)) {
      query["NotificationURLs"] = request.notificationURLs;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStackResponse>(await this.callApi(params, req, runtime), new CreateStackResponse({}));
  }

  /**
   * Creates a stack that contains a collection of resources by using a Resource Orchestration Service (ROS) template.
   * 
   * @remarks
   * A stack is a collection of ROS resources that you can manage as a single unit. To create a collection of resources, you can create a stack. For more information about stacks, see [Overview](https://help.aliyun.com/document_detail/172973.html).\\
   * When you call the operation, take note of the following limits:
   * *   You can create up to 200 stacks within an Alibaba Cloud account.
   * *   You can create up to 200 resources in a stack.
   * This topic provides an example on how to create a stack named `MyStack` in the China (Hangzhou) region by using a template. In this example, `TemplateBody` is set to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateStackRequest
   * @returns CreateStackResponse
   */
  async createStack(request: CreateStackRequest): Promise<CreateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackWithOptions(request, runtime);
  }

  /**
   * Creates stack groups based on Resource Orchestration Service (ROS) templates. Stack groups allow you to create stacks within multiple Alibaba Cloud accounts across regions.
   * 
   * @remarks
   * A stack group is a collection of ROS stacks that you can manage as a unit. You can use an ROS template of a stack group to create stacks within Alibaba Cloud accounts across regions.
   * You can create a stack group that is granted self-managed or service-managed permissions:
   * *   If you use an Alibaba Cloud account to create a self-managed stack group, the administrator account and the execution account are Alibaba Cloud accounts.
   * *   If you enable a resource directory and use the management account or a delegated administrator account of the resource directory to create a service-managed stack group, the administrator account is the management account or delegated administrator account, and the execution account is a member account of the resource directory.
   * For more information about stack groups, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * In this topic, a stack group named `MyStackGroup` is created in the `China (Hangzhou)` region and granted the self-managed permissions. In this example, the template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is used.
   * 
   * @param tmpReq - CreateStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackGroupResponse
   */
  async createStackGroupWithOptions(tmpReq: CreateStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.autoDeployment)) {
      request.autoDeploymentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoDeployment, "AutoDeployment", "json");
    }

    let query = { };
    if (!Util.isUnset(request.administrationRoleName)) {
      query["AdministrationRoleName"] = request.administrationRoleName;
    }

    if (!Util.isUnset(request.autoDeploymentShrink)) {
      query["AutoDeployment"] = request.autoDeploymentShrink;
    }

    if (!Util.isUnset(request.capabilities)) {
      query["Capabilities"] = request.capabilities;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionRoleName)) {
      query["ExecutionRoleName"] = request.executionRoleName;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.permissionModel)) {
      query["PermissionModel"] = request.permissionModel;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStackGroupResponse>(await this.callApi(params, req, runtime), new CreateStackGroupResponse({}));
  }

  /**
   * Creates stack groups based on Resource Orchestration Service (ROS) templates. Stack groups allow you to create stacks within multiple Alibaba Cloud accounts across regions.
   * 
   * @remarks
   * A stack group is a collection of ROS stacks that you can manage as a unit. You can use an ROS template of a stack group to create stacks within Alibaba Cloud accounts across regions.
   * You can create a stack group that is granted self-managed or service-managed permissions:
   * *   If you use an Alibaba Cloud account to create a self-managed stack group, the administrator account and the execution account are Alibaba Cloud accounts.
   * *   If you enable a resource directory and use the management account or a delegated administrator account of the resource directory to create a service-managed stack group, the administrator account is the management account or delegated administrator account, and the execution account is a member account of the resource directory.
   * For more information about stack groups, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * In this topic, a stack group named `MyStackGroup` is created in the `China (Hangzhou)` region and granted the self-managed permissions. In this example, the template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is used.
   * 
   * @param request - CreateStackGroupRequest
   * @returns CreateStackGroupResponse
   */
  async createStackGroup(request: CreateStackGroupRequest): Promise<CreateStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackGroupWithOptions(request, runtime);
  }

  /**
   * Creates stack instances in the specified accounts and regions.
   * 
   * @remarks
   * Before you call this operation, make sure that a stack group is created. For more information, see [CreateStackGroup](https://help.aliyun.com/document_detail/151333.html).
   * In this topic, the stack group named `MyStackGroup` is used. The stack group is created in the China (Hangzhou) region and granted the self-managed permissions. In this example, stacks are created by using Alibaba Cloud accounts whose IDs are `151266687691****` and `141261387191****` in the China (Hangzhou) region and China (Beijing) region.
   * 
   * @param tmpReq - CreateStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackInstancesResponse
   */
  async createStackInstancesWithOptions(tmpReq: CreateStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.parameterOverrides)) {
      query["ParameterOverrides"] = request.parameterOverrides;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStackInstancesResponse>(await this.callApi(params, req, runtime), new CreateStackInstancesResponse({}));
  }

  /**
   * Creates stack instances in the specified accounts and regions.
   * 
   * @remarks
   * Before you call this operation, make sure that a stack group is created. For more information, see [CreateStackGroup](https://help.aliyun.com/document_detail/151333.html).
   * In this topic, the stack group named `MyStackGroup` is used. The stack group is created in the China (Hangzhou) region and granted the self-managed permissions. In this example, stacks are created by using Alibaba Cloud accounts whose IDs are `151266687691****` and `141261387191****` in the China (Hangzhou) region and China (Beijing) region.
   * 
   * @param request - CreateStackInstancesRequest
   * @returns CreateStackInstancesResponse
   */
  async createStackInstances(request: CreateStackInstancesRequest): Promise<CreateStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a custom template.
   * 
   * @remarks
   * In this topic, a custom template named `MyTemplate` is created in the `cn-hangzhou` region. The `TemplateBody` parameter of the template is set to `{"ROSTemplateFormatVersion": "2015-09-01"}`.
   * 
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2019-09-10",
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
   * Creates a custom template.
   * 
   * @remarks
   * In this topic, a custom template named `MyTemplate` is created in the `cn-hangzhou` region. The `TemplateBody` parameter of the template is set to `{"ROSTemplateFormatVersion": "2015-09-01"}`.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a resource scenario.
   * 
   * @remarks
   * ### [](#)Limits
   * Only specific resource types support the resource scenario feature. For more information, see [Resource types that support the scenario feature](https://help.aliyun.com/document_detail/353175.htmll).
   * ### [](#)Description
   * Resource Orchestration Service (ROS) provides the resource scenario feature that allows you to specify the scope of a collection of resources on a user interface (UI) and perform operations, such as replication and management, on the resources. This helps you manage resources in a simplified manner. For more information about resource scenarios, see [Overview](https://help.aliyun.com/document_detail/352074.html).
   * #### [](#)Resource replication scenario
   * If you want to replicate a collection of resources and dependencies between the resources, you can create a resource replication scenario. This type of resource scenario allows you to replicate all existing resources within the specified scope and generate a collection of resources that have the same architecture as the existing resources. For more information, see [Resource replication scenario](https://help.aliyun.com/document_detail/353133.html).
   * #### [](#)Resource detection scenario
   * If the relationships between resources that you want to create are complicated, you can create a resource detection scenario to preview the overall resource architecture or the architecture of a specific resource. This facilitates resource management. For more information, see [Resource detection scenario](https://help.aliyun.com/document_detail/2591901.html).
   * #### [](#)Resource management scenario
   * If you want to import a collection of existing resources to a stack and manage the resources in a centralized manner, you can create a resource management scenario. For more information, see [Resource management scenario](https://help.aliyun.com/document_detail/353163.html).
   * #### [](#)Resource migration scenario
   * If you want to migrate a collection of resources and dependencies between the resources, you can create a resource migration scenario. When you migrate the resources, ROS generates a stack. You can view the migration progress on the Stacks tab of the scenario details page. After you migrate the resources, you can delete source resources. For more information, see [Resource migration scenario](https://help.aliyun.com/document_detail/379902.html).
   * This topic provides an example on how to create a resource replication scenario in the China (Hangzhou) region to replicate a resource. In this example, a virtual private cloud (VPC) whose ID is `vpc-bp1m6fww66xbntjyc****` is replicated.
   * 
   * @param tmpReq - CreateTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateScratchResponse
   */
  async createTemplateScratchWithOptions(tmpReq: CreateTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateScratchResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateScratchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.preferenceParameters)) {
      request.preferenceParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preferenceParameters, "PreferenceParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceResourceGroup)) {
      request.sourceResourceGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResourceGroup, "SourceResourceGroup", "json");
    }

    if (!Util.isUnset(tmpReq.sourceResources)) {
      request.sourceResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResources, "SourceResources", "json");
    }

    if (!Util.isUnset(tmpReq.sourceTag)) {
      request.sourceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTag, "SourceTag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!Util.isUnset(request.logicalIdStrategy)) {
      query["LogicalIdStrategy"] = request.logicalIdStrategy;
    }

    if (!Util.isUnset(request.preferenceParametersShrink)) {
      query["PreferenceParameters"] = request.preferenceParametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceResourceGroupShrink)) {
      query["SourceResourceGroup"] = request.sourceResourceGroupShrink;
    }

    if (!Util.isUnset(request.sourceResourcesShrink)) {
      query["SourceResources"] = request.sourceResourcesShrink;
    }

    if (!Util.isUnset(request.sourceTagShrink)) {
      query["SourceTag"] = request.sourceTagShrink;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateScratchType)) {
      query["TemplateScratchType"] = request.templateScratchType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateScratchResponse>(await this.callApi(params, req, runtime), new CreateTemplateScratchResponse({}));
  }

  /**
   * Creates a resource scenario.
   * 
   * @remarks
   * ### [](#)Limits
   * Only specific resource types support the resource scenario feature. For more information, see [Resource types that support the scenario feature](https://help.aliyun.com/document_detail/353175.htmll).
   * ### [](#)Description
   * Resource Orchestration Service (ROS) provides the resource scenario feature that allows you to specify the scope of a collection of resources on a user interface (UI) and perform operations, such as replication and management, on the resources. This helps you manage resources in a simplified manner. For more information about resource scenarios, see [Overview](https://help.aliyun.com/document_detail/352074.html).
   * #### [](#)Resource replication scenario
   * If you want to replicate a collection of resources and dependencies between the resources, you can create a resource replication scenario. This type of resource scenario allows you to replicate all existing resources within the specified scope and generate a collection of resources that have the same architecture as the existing resources. For more information, see [Resource replication scenario](https://help.aliyun.com/document_detail/353133.html).
   * #### [](#)Resource detection scenario
   * If the relationships between resources that you want to create are complicated, you can create a resource detection scenario to preview the overall resource architecture or the architecture of a specific resource. This facilitates resource management. For more information, see [Resource detection scenario](https://help.aliyun.com/document_detail/2591901.html).
   * #### [](#)Resource management scenario
   * If you want to import a collection of existing resources to a stack and manage the resources in a centralized manner, you can create a resource management scenario. For more information, see [Resource management scenario](https://help.aliyun.com/document_detail/353163.html).
   * #### [](#)Resource migration scenario
   * If you want to migrate a collection of resources and dependencies between the resources, you can create a resource migration scenario. When you migrate the resources, ROS generates a stack. You can view the migration progress on the Stacks tab of the scenario details page. After you migrate the resources, you can delete source resources. For more information, see [Resource migration scenario](https://help.aliyun.com/document_detail/379902.html).
   * This topic provides an example on how to create a resource replication scenario in the China (Hangzhou) region to replicate a resource. In this example, a virtual private cloud (VPC) whose ID is `vpc-bp1m6fww66xbntjyc****` is replicated.
   * 
   * @param request - CreateTemplateScratchRequest
   * @returns CreateTemplateScratchResponse
   */
  async createTemplateScratch(request: CreateTemplateScratchRequest): Promise<CreateTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Deletes change sets.
   * 
   * @remarks
   *   Before you call this operation, make sure that the following requirements are met:
   *     *   The status of the change set is CREATE_COMPLETE, CREATE_FAILED, or DELETE_FAILED.
   *     *   The execution status is UNAVAILABLE or AVAILABLE.
   * *   After a change set is executed, other change sets associated with the same stack as this change set are also deleted.
   * *   After a stack is deleted, change sets associated with the stack are deleted.
   * *   If a change set of the CREATE type is deleted, you must delete stacks associated with the change set.
   * In this example, a change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is deleted. The change set is created in the China (Hangzhou) region.
   * 
   * @param request - DeleteChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChangeSetResponse
   */
  async deleteChangeSetWithOptions(request: DeleteChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChangeSetResponse>(await this.callApi(params, req, runtime), new DeleteChangeSetResponse({}));
  }

  /**
   * Deletes change sets.
   * 
   * @remarks
   *   Before you call this operation, make sure that the following requirements are met:
   *     *   The status of the change set is CREATE_COMPLETE, CREATE_FAILED, or DELETE_FAILED.
   *     *   The execution status is UNAVAILABLE or AVAILABLE.
   * *   After a change set is executed, other change sets associated with the same stack as this change set are also deleted.
   * *   After a stack is deleted, change sets associated with the stack are deleted.
   * *   If a change set of the CREATE type is deleted, you must delete stacks associated with the change set.
   * In this example, a change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is deleted. The change set is created in the China (Hangzhou) region.
   * 
   * @param request - DeleteChangeSetRequest
   * @returns DeleteChangeSetResponse
   */
  async deleteChangeSet(request: DeleteChangeSetRequest): Promise<DeleteChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChangeSetWithOptions(request, runtime);
  }

  /**
   * Deletes a diagnostic record.
   * 
   * @param request - DeleteDiagnosticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiagnosticResponse
   */
  async deleteDiagnosticWithOptions(request: DeleteDiagnosticRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDiagnosticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDiagnostic",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDiagnosticResponse>(await this.callApi(params, req, runtime), new DeleteDiagnosticResponse({}));
  }

  /**
   * Deletes a diagnostic record.
   * 
   * @param request - DeleteDiagnosticRequest
   * @returns DeleteDiagnosticResponse
   */
  async deleteDiagnostic(request: DeleteDiagnosticRequest): Promise<DeleteDiagnosticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiagnosticWithOptions(request, runtime);
  }

  /**
   * Deletes a stack. You can specify whether to retain resources.
   * 
   * @param request - DeleteStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackResponse
   */
  async deleteStackWithOptions(request: DeleteStackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteOptions)) {
      query["DeleteOptions"] = request.deleteOptions;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainAllResources)) {
      query["RetainAllResources"] = request.retainAllResources;
    }

    if (!Util.isUnset(request.retainResources)) {
      query["RetainResources"] = request.retainResources;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStackResponse>(await this.callApi(params, req, runtime), new DeleteStackResponse({}));
  }

  /**
   * Deletes a stack. You can specify whether to retain resources.
   * 
   * @param request - DeleteStackRequest
   * @returns DeleteStackResponse
   */
  async deleteStack(request: DeleteStackRequest): Promise<DeleteStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackWithOptions(request, runtime);
  }

  /**
   * Deletes a stack group.
   * 
   * @remarks
   * A stack group can be deleted only when the stack group does not contain stacks. You can call the [DeleteStackInstances](https://help.aliyun.com/document_detail/151715.html) operation to delete stacks.
   * This topic provides an example on how to delete a stack group. In this example, a stack group named `MyStackGroup` in the China (Hangzhou) region is deleted.
   * 
   * @param request - DeleteStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackGroupResponse
   */
  async deleteStackGroupWithOptions(request: DeleteStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStackGroupResponse>(await this.callApi(params, req, runtime), new DeleteStackGroupResponse({}));
  }

  /**
   * Deletes a stack group.
   * 
   * @remarks
   * A stack group can be deleted only when the stack group does not contain stacks. You can call the [DeleteStackInstances](https://help.aliyun.com/document_detail/151715.html) operation to delete stacks.
   * This topic provides an example on how to delete a stack group. In this example, a stack group named `MyStackGroup` in the China (Hangzhou) region is deleted.
   * 
   * @param request - DeleteStackGroupRequest
   * @returns DeleteStackGroupResponse
   */
  async deleteStackGroup(request: DeleteStackGroupRequest): Promise<DeleteStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackGroupWithOptions(request, runtime);
  }

  /**
   * Deletes stack instances in the specified accounts and regions. You can retain specific resources based on your business requirements when you call this operation.
   * 
   * @remarks
   * In this topic, the stack group named `MyStackGroup` that is created in the China (Hangzhou) region is used. In this example, the stacks of the stack group that are deployed in the China (Beijing) region by using the Alibaba Cloud account whose ID is `151266687691****` are deleted.
   * 
   * @param tmpReq - DeleteStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackInstancesResponse
   */
  async deleteStackInstancesWithOptions(tmpReq: DeleteStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.retainStacks)) {
      query["RetainStacks"] = request.retainStacks;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStackInstancesResponse>(await this.callApi(params, req, runtime), new DeleteStackInstancesResponse({}));
  }

  /**
   * Deletes stack instances in the specified accounts and regions. You can retain specific resources based on your business requirements when you call this operation.
   * 
   * @remarks
   * In this topic, the stack group named `MyStackGroup` that is created in the China (Hangzhou) region is used. In this example, the stacks of the stack group that are deployed in the China (Beijing) region by using the Alibaba Cloud account whose ID is `151266687691****` are deleted.
   * 
   * @param request - DeleteStackInstancesRequest
   * @returns DeleteStackInstancesResponse
   */
  async deleteStackInstances(request: DeleteStackInstancesRequest): Promise<DeleteStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackInstancesWithOptions(request, runtime);
  }

  /**
   * Deletes a template.
   * 
   * @remarks
   * If a template is shared with other Alibaba Cloud accounts, you must unshare the template before you delete it.
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2019-09-10",
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
   * @remarks
   * If a template is shared with other Alibaba Cloud accounts, you must unshare the template before you delete it.
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario.
   * 
   * @remarks
   * In this topic, a scenario whose ID is `ts-4f83704400994409****` is deleted in the China (Hangzhou) region.
   * 
   * @param request - DeleteTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateScratchResponse
   */
  async deleteTemplateScratchWithOptions(request: DeleteTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateScratchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateScratchResponse>(await this.callApi(params, req, runtime), new DeleteTemplateScratchResponse({}));
  }

  /**
   * Deletes a scenario.
   * 
   * @remarks
   * In this topic, a scenario whose ID is `ts-4f83704400994409****` is deleted in the China (Hangzhou) region.
   * 
   * @param request - DeleteTemplateScratchRequest
   * @returns DeleteTemplateScratchResponse
   */
  async deleteTemplateScratch(request: DeleteTemplateScratchRequest): Promise<DeleteTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Deletes a resource type or a version of a resource type.
   * 
   * @remarks
   *   If you delete a resource type, you can no longer use the resource type in Resource Orchestration Service (ROS).
   * *   If you delete a version of a resource type, you can no longer use the version in ROS.
   * *   If a resource type has only one version, you can delete the version by calling the operation. If a resource type has more than one version, you must manually delete the remaining versions.
   * *   When a resource type has more than one version, you cannot delete the default version by calling the operation.
   * *   When a resource type has only one version, you can delete the resource type and the version by calling the operation.
   * 
   * @param request - DeregisterResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeregisterResourceTypeResponse
   */
  async deregisterResourceTypeWithOptions(request: DeregisterResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<DeregisterResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeregisterResourceTypeResponse>(await this.callApi(params, req, runtime), new DeregisterResourceTypeResponse({}));
  }

  /**
   * Deletes a resource type or a version of a resource type.
   * 
   * @remarks
   *   If you delete a resource type, you can no longer use the resource type in Resource Orchestration Service (ROS).
   * *   If you delete a version of a resource type, you can no longer use the version in ROS.
   * *   If a resource type has only one version, you can delete the version by calling the operation. If a resource type has more than one version, you must manually delete the remaining versions.
   * *   When a resource type has more than one version, you cannot delete the default version by calling the operation.
   * *   When a resource type has only one version, you can delete the resource type and the version by calling the operation.
   * 
   * @param request - DeregisterResourceTypeRequest
   * @returns DeregisterResourceTypeResponse
   */
  async deregisterResourceType(request: DeregisterResourceTypeRequest): Promise<DeregisterResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deregisterResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of available regions.
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-09-10",
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
   * Queries a list of available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to detect drift on a stack.
   * 
   * @param request - DetectStackDriftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectStackDriftResponse
   */
  async detectStackDriftWithOptions(request: DetectStackDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackDriftResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectStackDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectStackDriftResponse>(await this.callApi(params, req, runtime), new DetectStackDriftResponse({}));
  }

  /**
   * You can call this operation to detect drift on a stack.
   * 
   * @param request - DetectStackDriftRequest
   * @returns DetectStackDriftResponse
   */
  async detectStackDrift(request: DetectStackDriftRequest): Promise<DetectStackDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackDriftWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - DetectStackGroupDriftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectStackGroupDriftResponse
   */
  async detectStackGroupDriftWithOptions(tmpReq: DetectStackGroupDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackGroupDriftResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectStackGroupDriftShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectStackGroupDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectStackGroupDriftResponse>(await this.callApi(params, req, runtime), new DetectStackGroupDriftResponse({}));
  }

  /**
   * @param request - DetectStackGroupDriftRequest
   * @returns DetectStackGroupDriftResponse
   */
  async detectStackGroupDrift(request: DetectStackGroupDriftRequest): Promise<DetectStackGroupDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackGroupDriftWithOptions(request, runtime);
  }

  /**
   * Performs drift detection on resources in a stack to determine whether the resources have drifted from the expected configurations.
   * 
   * @param request - DetectStackResourceDriftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectStackResourceDriftResponse
   */
  async detectStackResourceDriftWithOptions(request: DetectStackResourceDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackResourceDriftResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectStackResourceDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectStackResourceDriftResponse>(await this.callApi(params, req, runtime), new DetectStackResourceDriftResponse({}));
  }

  /**
   * Performs drift detection on resources in a stack to determine whether the resources have drifted from the expected configurations.
   * 
   * @param request - DetectStackResourceDriftRequest
   * @returns DetectStackResourceDriftResponse
   */
  async detectStackResourceDrift(request: DetectStackResourceDriftRequest): Promise<DetectStackResourceDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackResourceDriftWithOptions(request, runtime);
  }

  /**
   * Executes change sets.
   * 
   * @remarks
   * In this example, the change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is executed. The change set is created in the `China (Hangzhou)` region.
   * 
   * @param request - ExecuteChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteChangeSetResponse
   */
  async executeChangeSetWithOptions(request: ExecuteChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteChangeSetResponse>(await this.callApi(params, req, runtime), new ExecuteChangeSetResponse({}));
  }

  /**
   * Executes change sets.
   * 
   * @remarks
   * In this example, the change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is executed. The change set is created in the `China (Hangzhou)` region.
   * 
   * @param request - ExecuteChangeSetRequest
   * @returns ExecuteChangeSetResponse
   */
  async executeChangeSet(request: ExecuteChangeSetRequest): Promise<ExecuteChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeChangeSetWithOptions(request, runtime);
  }

  /**
   * Generates a template for a resource scenario.
   * 
   * @remarks
   * In this example, a template is generated for a resource management scenario that resides in the China (Hangzhou) region. The ID of the resource scenario is `ts-aa9c62feab844a6b****`.
   * >  You cannot generate a template for a resource detection scenario.
   * 
   * @param request - GenerateTemplateByScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTemplateByScratchResponse
   */
  async generateTemplateByScratchWithOptions(request: GenerateTemplateByScratchRequest, runtime: $Util.RuntimeOptions): Promise<GenerateTemplateByScratchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.provisionRegionId)) {
      query["ProvisionRegionId"] = request.provisionRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateTemplateByScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateTemplateByScratchResponse>(await this.callApi(params, req, runtime), new GenerateTemplateByScratchResponse({}));
  }

  /**
   * Generates a template for a resource scenario.
   * 
   * @remarks
   * In this example, a template is generated for a resource management scenario that resides in the China (Hangzhou) region. The ID of the resource scenario is `ts-aa9c62feab844a6b****`.
   * >  You cannot generate a template for a resource detection scenario.
   * 
   * @param request - GenerateTemplateByScratchRequest
   * @returns GenerateTemplateByScratchResponse
   */
  async generateTemplateByScratch(request: GenerateTemplateByScratchRequest): Promise<GenerateTemplateByScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateTemplateByScratchWithOptions(request, runtime);
  }

  /**
   * Generates the information about a policy that is required by a template.
   * 
   * @remarks
   * If the policy information is related to Enterprise Distributed Application Service (EDAS), you must log on to your Alibaba Cloud account and grant the required permissions to the relevant RAM users.
   * In this example, a policy is generated for a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****`.
   * 
   * @param request - GenerateTemplatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTemplatePolicyResponse
   */
  async generateTemplatePolicyWithOptions(request: GenerateTemplatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateTemplatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationTypes)) {
      query["OperationTypes"] = request.operationTypes;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "GenerateTemplatePolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateTemplatePolicyResponse>(await this.callApi(params, req, runtime), new GenerateTemplatePolicyResponse({}));
  }

  /**
   * Generates the information about a policy that is required by a template.
   * 
   * @remarks
   * If the policy information is related to Enterprise Distributed Application Service (EDAS), you must log on to your Alibaba Cloud account and grant the required permissions to the relevant RAM users.
   * In this example, a policy is generated for a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****`.
   * 
   * @param request - GenerateTemplatePolicyRequest
   * @returns GenerateTemplatePolicyResponse
   */
  async generateTemplatePolicy(request: GenerateTemplatePolicyRequest): Promise<GenerateTemplatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateTemplatePolicyWithOptions(request, runtime);
  }

  /**
   * 查询指定AI任务信息
   * 
   * @param request - GetAITaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITaskResponse
   */
  async getAITaskWithOptions(request: GetAITaskRequest, runtime: $Util.RuntimeOptions): Promise<GetAITaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAITask",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAITaskResponse>(await this.callApi(params, req, runtime), new GetAITaskResponse({}));
  }

  /**
   * 查询指定AI任务信息
   * 
   * @param request - GetAITaskRequest
   * @returns GetAITaskResponse
   */
  async getAITask(request: GetAITaskRequest): Promise<GetAITaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAITaskWithOptions(request, runtime);
  }

  /**
   * Queries change sets. You can determine whether to query the templates of change sets.
   * 
   * @remarks
   * In this example, the details of a change set whose ID is `4c11658d-bd47-4dd0-ba64-727edc62****` is queried. The change set is created in the China (Hangzhou) region.
   * 
   * @param request - GetChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChangeSetResponse
   */
  async getChangeSetWithOptions(request: GetChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<GetChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showTemplate)) {
      query["ShowTemplate"] = request.showTemplate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetChangeSetResponse>(await this.callApi(params, req, runtime), new GetChangeSetResponse({}));
  }

  /**
   * Queries change sets. You can determine whether to query the templates of change sets.
   * 
   * @remarks
   * In this example, the details of a change set whose ID is `4c11658d-bd47-4dd0-ba64-727edc62****` is queried. The change set is created in the China (Hangzhou) region.
   * 
   * @param request - GetChangeSetRequest
   * @returns GetChangeSetResponse
   */
  async getChangeSet(request: GetChangeSetRequest): Promise<GetChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChangeSetWithOptions(request, runtime);
  }

  /**
   * Obtains the diagnosis details based on a specified diagnostic report ID.
   * 
   * @param request - GetDiagnosticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiagnosticResponse
   */
  async getDiagnosticWithOptions(request: GetDiagnosticRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagnosticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnostic",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnosticResponse>(await this.callApi(params, req, runtime), new GetDiagnosticResponse({}));
  }

  /**
   * Obtains the diagnosis details based on a specified diagnostic report ID.
   * 
   * @param request - GetDiagnosticRequest
   * @returns GetDiagnosticResponse
   */
  async getDiagnostic(request: GetDiagnosticRequest): Promise<GetDiagnosticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnosticWithOptions(request, runtime);
  }

  /**
   * Queries the details of features that are supported by Resource Orchestration Service (ROS).
   * 
   * @remarks
   * You can call this operation to query the Terraform hosting, resource cleaner, and scenario features.
   * This topic provides an example on how to query the details of features supported by ROS in the China (Hangzhou) region. The details include Terraform versions, provider versions, and supported resource types.
   * >  In the Examples section, only part of the sample code is provided.
   * 
   * @param request - GetFeatureDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureDetailsResponse
   */
  async getFeatureDetailsWithOptions(request: GetFeatureDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetFeatureDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.feature)) {
      query["Feature"] = request.feature;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFeatureDetails",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureDetailsResponse>(await this.callApi(params, req, runtime), new GetFeatureDetailsResponse({}));
  }

  /**
   * Queries the details of features that are supported by Resource Orchestration Service (ROS).
   * 
   * @remarks
   * You can call this operation to query the Terraform hosting, resource cleaner, and scenario features.
   * This topic provides an example on how to query the details of features supported by ROS in the China (Hangzhou) region. The details include Terraform versions, provider versions, and supported resource types.
   * >  In the Examples section, only part of the sample code is provided.
   * 
   * @param request - GetFeatureDetailsRequest
   * @returns GetFeatureDetailsResponse
   */
  async getFeatureDetails(request: GetFeatureDetailsRequest): Promise<GetFeatureDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFeatureDetailsWithOptions(request, runtime);
  }

  /**
   * This topic provides an example on how to query the details of `ALIYUN::ROS::WaitConditionHandle`.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/131957.html).
   * 
   * @param request - GetResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeResponse
   */
  async getResourceTypeWithOptions(request: GetResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTypeResponse>(await this.callApi(params, req, runtime), new GetResourceTypeResponse({}));
  }

  /**
   * This topic provides an example on how to query the details of `ALIYUN::ROS::WaitConditionHandle`.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/131957.html).
   * 
   * @param request - GetResourceTypeRequest
   * @returns GetResourceTypeResponse
   */
  async getResourceType(request: GetResourceTypeRequest): Promise<GetResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeWithOptions(request, runtime);
  }

  /**
   * Generates a sample template based on a resource type.
   * 
   * @param request - GetResourceTypeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeTemplateResponse
   */
  async getResourceTypeTemplateWithOptions(request: GetResourceTypeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceTypeTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTypeTemplateResponse>(await this.callApi(params, req, runtime), new GetResourceTypeTemplateResponse({}));
  }

  /**
   * Generates a sample template based on a resource type.
   * 
   * @param request - GetResourceTypeTemplateRequest
   * @returns GetResourceTypeTemplateResponse
   */
  async getResourceTypeTemplate(request: GetResourceTypeTemplateRequest): Promise<GetResourceTypeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the activation status and the RAM roles of an Alibaba Cloud service.
   * 
   * @remarks
   * ### Description
   * This topic describes how to query the activation status and the RAM roles of an Alibaba Cloud service. In this example, the Elastic High Performance Computing (E-HPC) service that is deployed in the China (Hangzhou) region is queried.
   * > Make sure that you have the permissions to call the [GetRole](https://help.aliyun.com/document_detail/28711.html) operation.
   * 
   * @param request - GetServiceProvisionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisionsWithOptions(request: GetServiceProvisionsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceProvisionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.services)) {
      query["Services"] = request.services;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceProvisions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceProvisionsResponse>(await this.callApi(params, req, runtime), new GetServiceProvisionsResponse({}));
  }

  /**
   * Queries the activation status and the RAM roles of an Alibaba Cloud service.
   * 
   * @remarks
   * ### Description
   * This topic describes how to query the activation status and the RAM roles of an Alibaba Cloud service. In this example, the Elastic High Performance Computing (E-HPC) service that is deployed in the China (Hangzhou) region is queried.
   * > Make sure that you have the permissions to call the [GetRole](https://help.aliyun.com/document_detail/28711.html) operation.
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: GetServiceProvisionsRequest): Promise<GetServiceProvisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a stack in Resource Orchestration Service (ROS).
   * 
   * @remarks
   * In this example, the information about a stack whose ID is `c754d2a4-28f1-46df-b557-9586173a****` in the China (Hangzhou) region is queried.
   * 
   * @param request - GetStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResponse
   */
  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logOption)) {
      query["LogOption"] = request.logOption;
    }

    if (!Util.isUnset(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showResourceProgress)) {
      query["ShowResourceProgress"] = request.showResourceProgress;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackResponse>(await this.callApi(params, req, runtime), new GetStackResponse({}));
  }

  /**
   * Queries the information about a stack in Resource Orchestration Service (ROS).
   * 
   * @remarks
   * In this example, the information about a stack whose ID is `c754d2a4-28f1-46df-b557-9586173a****` in the China (Hangzhou) region is queried.
   * 
   * @param request - GetStackRequest
   * @returns GetStackResponse
   */
  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  /**
   * Queries the drift detection status of a stack.
   * 
   * @remarks
   * In this topic, the status of a drift detection operation whose ID is `a7044f0d-6f2e-4128-a307-4524ef88****` is queried. The operation is performed in the China (Hangzhou) region.
   * 
   * @param request - GetStackDriftDetectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackDriftDetectionStatusResponse
   */
  async getStackDriftDetectionStatusWithOptions(request: GetStackDriftDetectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetStackDriftDetectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.driftDetectionId)) {
      query["DriftDetectionId"] = request.driftDetectionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackDriftDetectionStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackDriftDetectionStatusResponse>(await this.callApi(params, req, runtime), new GetStackDriftDetectionStatusResponse({}));
  }

  /**
   * Queries the drift detection status of a stack.
   * 
   * @remarks
   * In this topic, the status of a drift detection operation whose ID is `a7044f0d-6f2e-4128-a307-4524ef88****` is queried. The operation is performed in the China (Hangzhou) region.
   * 
   * @param request - GetStackDriftDetectionStatusRequest
   * @returns GetStackDriftDetectionStatusResponse
   */
  async getStackDriftDetectionStatus(request: GetStackDriftDetectionStatusRequest): Promise<GetStackDriftDetectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackDriftDetectionStatusWithOptions(request, runtime);
  }

  /**
   * In this example, the information about a stack group named \\`MyStackGroup\\` is queried. The stack group is granted self-managed permissions and created in the China (Hangzhou) region.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/131957.html).
   * 
   * @param request - GetStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackGroupResponse
   */
  async getStackGroupWithOptions(request: GetStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetStackGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupId)) {
      query["StackGroupId"] = request.stackGroupId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackGroupResponse>(await this.callApi(params, req, runtime), new GetStackGroupResponse({}));
  }

  /**
   * In this example, the information about a stack group named \\`MyStackGroup\\` is queried. The stack group is granted self-managed permissions and created in the China (Hangzhou) region.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/131957.html).
   * 
   * @param request - GetStackGroupRequest
   * @returns GetStackGroupResponse
   */
  async getStackGroup(request: GetStackGroupRequest): Promise<GetStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about a stack group operation in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the information about the stack group operation whose ID is `6da106ca-1784-4a6f-a7e1-e723863d****` is queried. The stack group named `MyStackGroup` is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackGroupOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackGroupOperationResponse
   */
  async getStackGroupOperationWithOptions(request: GetStackGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<GetStackGroupOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackGroupOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackGroupOperationResponse>(await this.callApi(params, req, runtime), new GetStackGroupOperationResponse({}));
  }

  /**
   * Queries the information about a stack group operation in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the information about the stack group operation whose ID is `6da106ca-1784-4a6f-a7e1-e723863d****` is queried. The stack group named `MyStackGroup` is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackGroupOperationRequest
   * @returns GetStackGroupOperationResponse
   */
  async getStackGroupOperation(request: GetStackGroupOperationRequest): Promise<GetStackGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackGroupOperationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a stack instance that is associated with a stack group.
   * 
   * @remarks
   * In this example, the information about a stack instance associated with a stack group named `MyStackGroup` is queried. The stack instance is deployed in the China (Beijing) region within the `151266687691****` Alibaba Cloud account. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackInstanceResponse
   */
  async getStackInstanceWithOptions(request: GetStackInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetStackInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackInstanceAccountId)) {
      query["StackInstanceAccountId"] = request.stackInstanceAccountId;
    }

    if (!Util.isUnset(request.stackInstanceRegionId)) {
      query["StackInstanceRegionId"] = request.stackInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackInstance",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackInstanceResponse>(await this.callApi(params, req, runtime), new GetStackInstanceResponse({}));
  }

  /**
   * Queries the information about a stack instance that is associated with a stack group.
   * 
   * @remarks
   * In this example, the information about a stack instance associated with a stack group named `MyStackGroup` is queried. The stack instance is deployed in the China (Beijing) region within the `151266687691****` Alibaba Cloud account. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackInstanceRequest
   * @returns GetStackInstanceResponse
   */
  async getStackInstance(request: GetStackInstanceRequest): Promise<GetStackInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackInstanceWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query information about a stack policy.
   * 
   * @remarks
   * In this example, the stack policy of a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is queried. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackPolicyResponse
   */
  async getStackPolicyWithOptions(request: GetStackPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetStackPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackPolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackPolicyResponse>(await this.callApi(params, req, runtime), new GetStackPolicyResponse({}));
  }

  /**
   * You can call this operation to query information about a stack policy.
   * 
   * @remarks
   * In this example, the stack policy of a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is queried. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackPolicyRequest
   * @returns GetStackPolicyResponse
   */
  async getStackPolicy(request: GetStackPolicyRequest): Promise<GetStackPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackPolicyWithOptions(request, runtime);
  }

  /**
   * For more information about common request parameters, see [Common parameters]\\(~~131957~~).
   * 
   * @remarks
   * | Http status code | Error code | Error message | Description |
   * | ---------------- | ---------- | ------------- | ----------- |
   * | 404 | ResourceNotFound | The Resource ({name}) could not be found in Stack {stack}. | The error message returned because the specified resource does not exist in the stack. name indicates the resource name. stack indicates the stack name or ID. |
   * | 404 | StackNotFound | The Stack ({name}) could not be found. | The error message returned because the stack does not exist. name indicates the name or ID of the stack. |
   * 
   * @param request - GetStackResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResourceResponse
   */
  async getStackResourceWithOptions(request: GetStackResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceAttributes)) {
      query["ResourceAttributes"] = request.resourceAttributes;
    }

    if (!Util.isUnset(request.showResourceAttributes)) {
      query["ShowResourceAttributes"] = request.showResourceAttributes;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackResource",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackResourceResponse>(await this.callApi(params, req, runtime), new GetStackResourceResponse({}));
  }

  /**
   * For more information about common request parameters, see [Common parameters]\\(~~131957~~).
   * 
   * @remarks
   * | Http status code | Error code | Error message | Description |
   * | ---------------- | ---------- | ------------- | ----------- |
   * | 404 | ResourceNotFound | The Resource ({name}) could not be found in Stack {stack}. | The error message returned because the specified resource does not exist in the stack. name indicates the resource name. stack indicates the stack name or ID. |
   * | 404 | StackNotFound | The Stack ({name}) could not be found. | The error message returned because the stack does not exist. name indicates the name or ID of the stack. |
   * 
   * @param request - GetStackResourceRequest
   * @returns GetStackResourceResponse
   */
  async getStackResource(request: GetStackResourceRequest): Promise<GetStackResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackResourceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a template based on stacks, stack groups, change sets, or any custom template information.
   * 
   * @remarks
   * In this example, the details of a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is queried. The region ID of the template is `cn-hangzhou`.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.includePermission)) {
      query["IncludePermission"] = request.includePermission;
    }

    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateStage)) {
      query["TemplateStage"] = request.templateStage;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2019-09-10",
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
   * Queries the details of a template based on stacks, stack groups, change sets, or any custom template information.
   * 
   * @remarks
   * In this example, the details of a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is queried. The region ID of the template is `cn-hangzhou`.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the estimated prices of the resources in a template.
   * 
   * @remarks
   * ###
   * *   For more information about the resources that support price inquiry in Resource Orchestration Service (ROS) templates, see the "**Resource types that support price inquiry**" section of the [Estimate resource prices](https://help.aliyun.com/document_detail/203165.html) topic.
   * *   For more information about the resources that support price inquiry in Terraform templates, see the "**ROS resources supported by Terraform**" section of the [ROS features and resources supported by Terraform](https://help.aliyun.com/document_detail/184389.html) topic.
   * The following sample code provides an example on how to query the estimated price of an elastic IP address (EIP) that you want to create based on a template. In this example, the following template is used:
   *     {
   *       "ROSTemplateFormatVersion": "2015-09-01",
   *       "Parameters": {
   *         "Isp": {
   *           "Type": "String",
   *           "Default": "BGP"
   *         },
   *         "Name": {
   *           "Type": "String",
   *           "Default": "test"
   *         },
   *         "Netmode": {
   *           "Type": "String",
   *           "Default": "public"
   *         },
   *         "Bandwidth": {
   *           "Type": "Number",
   *           "Default": 5
   *         }
   *       },
   *       "Resources": {
   *         "NewEip": {
   *           "Type": "ALIYUN::VPC::EIP",
   *           "Properties": {
   *             "InstanceChargeType": "Prepaid",
   *             "PricingCycle": "Month",
   *             "Isp": {
   *               "Ref": "Isp"
   *             },
   *             "Period": 1,
   *             "DeletionProtection": false,
   *             "AutoPay": false,
   *             "Name": {
   *               "Ref": "Name"
   *             },
   *             "InternetChargeType": "PayByTraffic",
   *             "Netmode": {
   *               "Ref": "Netmode"
   *             },
   *             "Bandwidth": {
   *               "Ref": "Bandwidth"
   *             }
   *           }
   *         }
   *       }
   *     }
   * 
   * @param request - GetTemplateEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateEstimateCostResponse
   */
  async getTemplateEstimateCostWithOptions(request: GetTemplateEstimateCostRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateEstimateCostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateEstimateCost",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateEstimateCostResponse>(await this.callApi(params, req, runtime), new GetTemplateEstimateCostResponse({}));
  }

  /**
   * Queries the estimated prices of the resources in a template.
   * 
   * @remarks
   * ###
   * *   For more information about the resources that support price inquiry in Resource Orchestration Service (ROS) templates, see the "**Resource types that support price inquiry**" section of the [Estimate resource prices](https://help.aliyun.com/document_detail/203165.html) topic.
   * *   For more information about the resources that support price inquiry in Terraform templates, see the "**ROS resources supported by Terraform**" section of the [ROS features and resources supported by Terraform](https://help.aliyun.com/document_detail/184389.html) topic.
   * The following sample code provides an example on how to query the estimated price of an elastic IP address (EIP) that you want to create based on a template. In this example, the following template is used:
   *     {
   *       "ROSTemplateFormatVersion": "2015-09-01",
   *       "Parameters": {
   *         "Isp": {
   *           "Type": "String",
   *           "Default": "BGP"
   *         },
   *         "Name": {
   *           "Type": "String",
   *           "Default": "test"
   *         },
   *         "Netmode": {
   *           "Type": "String",
   *           "Default": "public"
   *         },
   *         "Bandwidth": {
   *           "Type": "Number",
   *           "Default": 5
   *         }
   *       },
   *       "Resources": {
   *         "NewEip": {
   *           "Type": "ALIYUN::VPC::EIP",
   *           "Properties": {
   *             "InstanceChargeType": "Prepaid",
   *             "PricingCycle": "Month",
   *             "Isp": {
   *               "Ref": "Isp"
   *             },
   *             "Period": 1,
   *             "DeletionProtection": false,
   *             "AutoPay": false,
   *             "Name": {
   *               "Ref": "Name"
   *             },
   *             "InternetChargeType": "PayByTraffic",
   *             "Netmode": {
   *               "Ref": "Netmode"
   *             },
   *             "Bandwidth": {
   *               "Ref": "Bandwidth"
   *             }
   *           }
   *         }
   *       }
   *     }
   * 
   * @param request - GetTemplateEstimateCostRequest
   * @returns GetTemplateEstimateCostResponse
   */
  async getTemplateEstimateCost(request: GetTemplateEstimateCostRequest): Promise<GetTemplateEstimateCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the values of one or more parameters in a template.
   * 
   * @remarks
   * This topic provides an example on how to query the values of a parameter. In this example, the values of the `ZoneInfo` parameter in a template that is created in the China (Hangzhou) region are queried. The template body is `{"Parameters":{"ZoneInfo":{"Type": "String"},"InstanceType": {"Type": "String"}},"ROSTemplateFormatVersion": "2015-09-01","Resources":{"ECS":{"Properties":{"ZoneId":{"Ref": "ZoneInfo"},"InstanceType": {"Ref": "InstanceType"}},"Type": "ALIYUN::ECS::Instance"}}}`.
   * For more information about the template parameters whose values you can query by calling this operation and the sample code of the template, see [Query the constraints of parameters](https://help.aliyun.com/document_detail/432820.html).
   * 
   * @param tmpReq - GetTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateParameterConstraintsResponse
   */
  async getTemplateParameterConstraintsWithOptions(tmpReq: GetTemplateParameterConstraintsRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateParameterConstraintsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTemplateParameterConstraintsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parametersKeyFilter)) {
      request.parametersKeyFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parametersKeyFilter, "ParametersKeyFilter", "json");
    }

    if (!Util.isUnset(tmpReq.parametersOrder)) {
      request.parametersOrderShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parametersOrder, "ParametersOrder", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.parametersKeyFilterShrink)) {
      query["ParametersKeyFilter"] = request.parametersKeyFilterShrink;
    }

    if (!Util.isUnset(request.parametersOrderShrink)) {
      query["ParametersOrder"] = request.parametersOrderShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateParameterConstraints",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new GetTemplateParameterConstraintsResponse({}));
  }

  /**
   * Queries the values of one or more parameters in a template.
   * 
   * @remarks
   * This topic provides an example on how to query the values of a parameter. In this example, the values of the `ZoneInfo` parameter in a template that is created in the China (Hangzhou) region are queried. The template body is `{"Parameters":{"ZoneInfo":{"Type": "String"},"InstanceType": {"Type": "String"}},"ROSTemplateFormatVersion": "2015-09-01","Resources":{"ECS":{"Properties":{"ZoneId":{"Ref": "ZoneInfo"},"InstanceType": {"Ref": "InstanceType"}},"Type": "ALIYUN::ECS::Instance"}}}`.
   * For more information about the template parameters whose values you can query by calling this operation and the sample code of the template, see [Query the constraints of parameters](https://help.aliyun.com/document_detail/432820.html).
   * 
   * @param request - GetTemplateParameterConstraintsRequest
   * @returns GetTemplateParameterConstraintsResponse
   */
  async getTemplateParameterConstraints(request: GetTemplateParameterConstraintsRequest): Promise<GetTemplateParameterConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * 推荐参数
   * 
   * @param request - GetTemplateRecommendParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateRecommendParametersResponse
   */
  async getTemplateRecommendParametersWithOptions(request: GetTemplateRecommendParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateRecommendParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "GetTemplateRecommendParameters",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateRecommendParametersResponse>(await this.callApi(params, req, runtime), new GetTemplateRecommendParametersResponse({}));
  }

  /**
   * 推荐参数
   * 
   * @param request - GetTemplateRecommendParametersRequest
   * @returns GetTemplateRecommendParametersResponse
   */
  async getTemplateRecommendParameters(request: GetTemplateRecommendParametersRequest): Promise<GetTemplateRecommendParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateRecommendParametersWithOptions(request, runtime);
  }

  /**
   * Queries the details of a resource scenario.
   * 
   * @remarks
   * In this example, the details of the resource scenario whose ID is `ts-7f7a704cf71c49a6****` is queried. In the response, the source node data is displayed.
   * 
   * @param request - GetTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateScratchResponse
   */
  async getTemplateScratchWithOptions(request: GetTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateScratchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showDataOption)) {
      query["ShowDataOption"] = request.showDataOption;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateScratchResponse>(await this.callApi(params, req, runtime), new GetTemplateScratchResponse({}));
  }

  /**
   * Queries the details of a resource scenario.
   * 
   * @remarks
   * In this example, the details of the resource scenario whose ID is `ts-7f7a704cf71c49a6****` is queried. In the response, the source node data is displayed.
   * 
   * @param request - GetTemplateScratchRequest
   * @returns GetTemplateScratchResponse
   */
  async getTemplateScratch(request: GetTemplateScratchRequest): Promise<GetTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Queries the information about a template resource by using the relevant template, stack, stack group, or change set.
   * 
   * @param request - GetTemplateSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateSummaryResponse
   */
  async getTemplateSummaryWithOptions(request: GetTemplateSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
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
      action: "GetTemplateSummary",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateSummaryResponse>(await this.callApi(params, req, runtime), new GetTemplateSummaryResponse({}));
  }

  /**
   * Queries the information about a template resource by using the relevant template, stack, stack group, or change set.
   * 
   * @param request - GetTemplateSummaryRequest
   * @returns GetTemplateSummaryResponse
   */
  async getTemplateSummary(request: GetTemplateSummaryRequest): Promise<GetTemplateSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateSummaryWithOptions(request, runtime);
  }

  /**
   * 获取指定AITask事件列表
   * 
   * @param request - ListAITaskEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAITaskEventsResponse
   */
  async listAITaskEventsWithOptions(request: ListAITaskEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListAITaskEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAITaskEvents",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAITaskEventsResponse>(await this.callApi(params, req, runtime), new ListAITaskEventsResponse({}));
  }

  /**
   * 获取指定AITask事件列表
   * 
   * @param request - ListAITaskEventsRequest
   * @returns ListAITaskEventsResponse
   */
  async listAITaskEvents(request: ListAITaskEventsRequest): Promise<ListAITaskEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAITaskEventsWithOptions(request, runtime);
  }

  /**
   * 查询AI任务列表
   * 
   * @param request - ListAITasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAITasksResponse
   */
  async listAITasksWithOptions(request: ListAITasksRequest, runtime: $Util.RuntimeOptions): Promise<ListAITasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAITasks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAITasksResponse>(await this.callApi(params, req, runtime), new ListAITasksResponse({}));
  }

  /**
   * 查询AI任务列表
   * 
   * @param request - ListAITasksRequest
   * @returns ListAITasksResponse
   */
  async listAITasks(request: ListAITasksRequest): Promise<ListAITasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAITasksWithOptions(request, runtime);
  }

  /**
   * Queries change sets.
   * 
   * @param request - ListChangeSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChangeSetsResponse
   */
  async listChangeSetsWithOptions(request: ListChangeSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListChangeSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.changeSetName)) {
      query["ChangeSetName"] = request.changeSetName;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChangeSets",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChangeSetsResponse>(await this.callApi(params, req, runtime), new ListChangeSetsResponse({}));
  }

  /**
   * Queries change sets.
   * 
   * @param request - ListChangeSetsRequest
   * @returns ListChangeSetsResponse
   */
  async listChangeSets(request: ListChangeSetsRequest): Promise<ListChangeSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChangeSetsWithOptions(request, runtime);
  }

  /**
   * Queries a diagnostic report.
   * 
   * @param request - ListDiagnosticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosticsResponse
   */
  async listDiagnosticsWithOptions(request: ListDiagnosticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDiagnosticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diagnosticKey)) {
      query["DiagnosticKey"] = request.diagnosticKey;
    }

    if (!Util.isUnset(request.diagnosticProduct)) {
      query["DiagnosticProduct"] = request.diagnosticProduct;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDiagnostics",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDiagnosticsResponse>(await this.callApi(params, req, runtime), new ListDiagnosticsResponse({}));
  }

  /**
   * Queries a diagnostic report.
   * 
   * @param request - ListDiagnosticsRequest
   * @returns ListDiagnosticsResponse
   */
  async listDiagnostics(request: ListDiagnosticsRequest): Promise<ListDiagnosticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDiagnosticsWithOptions(request, runtime);
  }

  /**
   * Queries the registration records of a resource.
   * 
   * @param request - ListResourceTypeRegistrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypeRegistrationsResponse
   */
  async listResourceTypeRegistrationsWithOptions(request: ListResourceTypeRegistrationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTypeRegistrationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTypeRegistrations",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypeRegistrationsResponse>(await this.callApi(params, req, runtime), new ListResourceTypeRegistrationsResponse({}));
  }

  /**
   * Queries the registration records of a resource.
   * 
   * @param request - ListResourceTypeRegistrationsRequest
   * @returns ListResourceTypeRegistrationsResponse
   */
  async listResourceTypeRegistrations(request: ListResourceTypeRegistrationsRequest): Promise<ListResourceTypeRegistrationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypeRegistrationsWithOptions(request, runtime);
  }

  /**
   * Queries the versions of resource types, including the resource types created by you and provided by Resource Orchestration Service (ROS).
   * 
   * @param request - ListResourceTypeVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypeVersionsResponse
   */
  async listResourceTypeVersionsWithOptions(request: ListResourceTypeVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTypeVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTypeVersions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypeVersionsResponse>(await this.callApi(params, req, runtime), new ListResourceTypeVersionsResponse({}));
  }

  /**
   * Queries the versions of resource types, including the resource types created by you and provided by Resource Orchestration Service (ROS).
   * 
   * @param request - ListResourceTypeVersionsRequest
   * @returns ListResourceTypeVersionsResponse
   */
  async listResourceTypeVersions(request: ListResourceTypeVersionsRequest): Promise<ListResourceTypeVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypeVersionsWithOptions(request, runtime);
  }

  /**
   * This topic provides an example on how to query the list of resource types supported by Resource Orchestration Service (ROS).
   * 
   * @remarks
   * For more information about errors common to all operations, see [Common error codes](/help/en/resource-orchestration-service/latest/common-error-codes).
   * 
   * @param request - ListResourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(request: ListResourceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTypes",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypesResponse>(await this.callApi(params, req, runtime), new ListResourceTypesResponse({}));
  }

  /**
   * This topic provides an example on how to query the list of resource types supported by Resource Orchestration Service (ROS).
   * 
   * @remarks
   * For more information about errors common to all operations, see [Common error codes](/help/en/resource-orchestration-service/latest/common-error-codes).
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(request: ListResourceTypesRequest): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries a stack and the resource events of the stack.
   * 
   * @param request - ListStackEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackEventsResponse
   */
  async listStackEventsWithOptions(request: ListStackEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackEvents",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackEventsResponse>(await this.callApi(params, req, runtime), new ListStackEventsResponse({}));
  }

  /**
   * Queries a stack and the resource events of the stack.
   * 
   * @param request - ListStackEventsRequest
   * @returns ListStackEventsResponse
   */
  async listStackEvents(request: ListStackEventsRequest): Promise<ListStackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackEventsWithOptions(request, runtime);
  }

  /**
   * Queries the results of an operation on a stack group.
   * 
   * @remarks
   * In this example, the operation ID `6da106ca-1784-4a6f-a7e1-e723863d∗∗∗∗` is set to query the results of an operation on a stack group named `MyStackGroup`. The stack group is granted self-managed permissions and created in the China (Hangzhou) region.
   * 
   * @param request - ListStackGroupOperationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackGroupOperationResultsResponse
   */
  async listStackGroupOperationResultsWithOptions(request: ListStackGroupOperationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupOperationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackGroupOperationResults",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackGroupOperationResultsResponse>(await this.callApi(params, req, runtime), new ListStackGroupOperationResultsResponse({}));
  }

  /**
   * Queries the results of an operation on a stack group.
   * 
   * @remarks
   * In this example, the operation ID `6da106ca-1784-4a6f-a7e1-e723863d∗∗∗∗` is set to query the results of an operation on a stack group named `MyStackGroup`. The stack group is granted self-managed permissions and created in the China (Hangzhou) region.
   * 
   * @param request - ListStackGroupOperationResultsRequest
   * @returns ListStackGroupOperationResultsResponse
   */
  async listStackGroupOperationResults(request: ListStackGroupOperationResultsRequest): Promise<ListStackGroupOperationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupOperationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the information about stack group operations in an Alibaba Cloud region.
   * 
   * @param request - ListStackGroupOperationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackGroupOperationsResponse
   */
  async listStackGroupOperationsWithOptions(request: ListStackGroupOperationsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupOperationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackGroupOperations",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackGroupOperationsResponse>(await this.callApi(params, req, runtime), new ListStackGroupOperationsResponse({}));
  }

  /**
   * Queries the information about stack group operations in an Alibaba Cloud region.
   * 
   * @param request - ListStackGroupOperationsRequest
   * @returns ListStackGroupOperationsResponse
   */
  async listStackGroupOperations(request: ListStackGroupOperationsRequest): Promise<ListStackGroupOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupOperationsWithOptions(request, runtime);
  }

  /**
   * Queries a list of stack groups in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the list of stack groups that are in the ACTIVE state and deployed in the China (Hangzhou) region is queried.
   * 
   * @param request - ListStackGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackGroupsResponse
   */
  async listStackGroupsWithOptions(request: ListStackGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackGroups",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackGroupsResponse>(await this.callApi(params, req, runtime), new ListStackGroupsResponse({}));
  }

  /**
   * Queries a list of stack groups in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the list of stack groups that are in the ACTIVE state and deployed in the China (Hangzhou) region is queried.
   * 
   * @param request - ListStackGroupsRequest
   * @returns ListStackGroupsResponse
   */
  async listStackGroups(request: ListStackGroupsRequest): Promise<ListStackGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the list of stack instances that are associated with a stack group in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the list of stack instances that are associated with a stack group named `MyStackGroup` is queried. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - ListStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackInstancesResponse
   */
  async listStackInstancesWithOptions(request: ListStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListStackInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackInstanceAccountId)) {
      query["StackInstanceAccountId"] = request.stackInstanceAccountId;
    }

    if (!Util.isUnset(request.stackInstanceRegionId)) {
      query["StackInstanceRegionId"] = request.stackInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackInstancesResponse>(await this.callApi(params, req, runtime), new ListStackInstancesResponse({}));
  }

  /**
   * Queries the list of stack instances that are associated with a stack group in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the list of stack instances that are associated with a stack group named `MyStackGroup` is queried. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - ListStackInstancesRequest
   * @returns ListStackInstancesResponse
   */
  async listStackInstances(request: ListStackInstancesRequest): Promise<ListStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackInstancesWithOptions(request, runtime);
  }

  /**
   * Detects stack-related operation risks and returns missing permissions and the causes of the risks.
   * 
   * @remarks
   * The ListStackOperationRisks operation is suitable for the following scenarios:
   * *   You want to detect high risks that may arise in resources when you delete a stack that contains the resources, and query the cause of each risk in a resource.
   * *   When you create a stack, the creation may fail. In this case, you can call this operation to check which types of permissions that are required to create stacks are missing.
   * 
   * @param request - ListStackOperationRisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackOperationRisksResponse
   */
  async listStackOperationRisksWithOptions(request: ListStackOperationRisksRequest, runtime: $Util.RuntimeOptions): Promise<ListStackOperationRisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainAllResources)) {
      query["RetainAllResources"] = request.retainAllResources;
    }

    if (!Util.isUnset(request.retainResources)) {
      query["RetainResources"] = request.retainResources;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListStackOperationRisks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackOperationRisksResponse>(await this.callApi(params, req, runtime), new ListStackOperationRisksResponse({}));
  }

  /**
   * Detects stack-related operation risks and returns missing permissions and the causes of the risks.
   * 
   * @remarks
   * The ListStackOperationRisks operation is suitable for the following scenarios:
   * *   You want to detect high risks that may arise in resources when you delete a stack that contains the resources, and query the cause of each risk in a resource.
   * *   When you create a stack, the creation may fail. In this case, you can call this operation to check which types of permissions that are required to create stacks are missing.
   * 
   * @param request - ListStackOperationRisksRequest
   * @returns ListStackOperationRisksResponse
   */
  async listStackOperationRisks(request: ListStackOperationRisksRequest): Promise<ListStackOperationRisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackOperationRisksWithOptions(request, runtime);
  }

  /**
   * The query token. Set this parameter to the NextToken value returned in the last API call.
   * 
   * @param request - ListStackResourceDriftsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackResourceDriftsResponse
   */
  async listStackResourceDriftsWithOptions(request: ListStackResourceDriftsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResourceDriftsResponse> {
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

    if (!Util.isUnset(request.resourceDriftStatus)) {
      query["ResourceDriftStatus"] = request.resourceDriftStatus;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackResourceDrifts",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackResourceDriftsResponse>(await this.callApi(params, req, runtime), new ListStackResourceDriftsResponse({}));
  }

  /**
   * The query token. Set this parameter to the NextToken value returned in the last API call.
   * 
   * @param request - ListStackResourceDriftsRequest
   * @returns ListStackResourceDriftsResponse
   */
  async listStackResourceDrifts(request: ListStackResourceDriftsRequest): Promise<ListStackResourceDriftsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackResourceDriftsWithOptions(request, runtime);
  }

  /**
   * This topic provides an example on how to query the resources in a specified stack. In this example, the resources in the stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region are queried.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/131957.html).
   * 
   * @param request - ListStackResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackResourcesResponse
   */
  async listStackResourcesWithOptions(request: ListStackResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackResourcesResponse>(await this.callApi(params, req, runtime), new ListStackResourcesResponse({}));
  }

  /**
   * This topic provides an example on how to query the resources in a specified stack. In this example, the resources in the stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region are queried.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/131957.html).
   * 
   * @param request - ListStackResourcesRequest
   * @returns ListStackResourcesResponse
   */
  async listStackResources(request: ListStackResourcesRequest): Promise<ListStackResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of stacks.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to query a list of stacks. In this example, the stacks that are deployed in the China (Hangzhou) region are queried.
   * 
   * @param request - ListStacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStacksResponse
   */
  async listStacksWithOptions(request: ListStacksRequest, runtime: $Util.RuntimeOptions): Promise<ListStacksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentStackId)) {
      query["ParentStackId"] = request.parentStackId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.showNestedStack)) {
      query["ShowNestedStack"] = request.showNestedStack;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackIds)) {
      query["StackIds"] = request.stackIds;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStacks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStacksResponse>(await this.callApi(params, req, runtime), new ListStacksResponse({}));
  }

  /**
   * Queries a list of stacks.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to query a list of stacks. In this example, the stacks that are deployed in the China (Hangzhou) region are queried.
   * 
   * @param request - ListStacksRequest
   * @returns ListStacksResponse
   */
  async listStacks(request: ListStacksRequest): Promise<ListStacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStacksWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the tag keys that are added to a stack in the China (Hangzhou) region are queried.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
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
      version: "2019-09-10",
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
   * Queries the tag keys that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the tag keys that are added to a stack in the China (Hangzhou) region are queried.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * ###
   * *   To specify the query object, specify ResourceId or Tag in the request. Tag consists of Key and Value.
   * *   If you specify Tag and ResourceId, ROS resources that match both the parameters are returned.
   * This topic provides an example on how to query the tags that are added to a stack. In this example, the stack ID is `6bc589b5-9c02-4944-8fc3-f3624234****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-09-10",
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
   * Queries the tags that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * ###
   * *   To specify the query object, specify ResourceId or Tag in the request. Tag consists of Key and Value.
   * *   If you specify Tag and ResourceId, ROS resources that match both the parameters are returned.
   * This topic provides an example on how to query the tags that are added to a stack. In this example, the stack ID is `6bc589b5-9c02-4944-8fc3-f3624234****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the tag values of `TagKey1` that is added to a stack in the China (Hangzhou) region are queried.
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
      version: "2019-09-10",
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
   * Queries the tag values that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the tag values of `TagKey1` that is added to a stack in the China (Hangzhou) region are queried.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries scenarios.
   * 
   * @remarks
   * In this example, the scenarios that are created in the China (Hangzhou) region are queried. In the response, a scenario of the Resource Management and a scenario of the Resource Replication type are returned.
   * 
   * @param request - ListTemplateScratchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateScratchesResponse
   */
  async listTemplateScratchesWithOptions(request: ListTemplateScratchesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplateScratchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchType)) {
      query["TemplateScratchType"] = request.templateScratchType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateScratches",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplateScratchesResponse>(await this.callApi(params, req, runtime), new ListTemplateScratchesResponse({}));
  }

  /**
   * Queries scenarios.
   * 
   * @remarks
   * In this example, the scenarios that are created in the China (Hangzhou) region are queried. In the response, a scenario of the Resource Management and a scenario of the Resource Replication type are returned.
   * 
   * @param request - ListTemplateScratchesRequest
   * @returns ListTemplateScratchesResponse
   */
  async listTemplateScratches(request: ListTemplateScratchesRequest): Promise<ListTemplateScratchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateScratchesWithOptions(request, runtime);
  }

  /**
   * Queries the list of versions of a template.
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateVersions",
      version: "2019-09-10",
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
   * Queries the list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersions(request: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of private or shared templates.
   * 
   * @param request - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2019-09-10",
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
   * Queries a list of private or shared templates.
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * Moves a resource to a specific resource group.
   * 
   * @remarks
   * In this example, a stack deployed in the `China (Hangzhou)` region is moved to a specific resource group. The ID of the stack is `4e8611cb-251e-42b7-b9cb-3496362c****` and the ID of the resource group is `rg-acfm3peow3k****`.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
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
      action: "MoveResourceGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * Moves a resource to a specific resource group.
   * 
   * @remarks
   * In this example, a stack deployed in the `China (Hangzhou)` region is moved to a specific resource group. The ID of the stack is `4e8611cb-251e-42b7-b9cb-3496362c****` and the ID of the resource group is `rg-acfm3peow3k****`.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Previews the information about a stack that you want to create based on a template. You can call this operation to verify whether the template resources are valid.
   * 
   * @remarks
   * This topic provides an example on how to create a stack named `MyStack` in the China (Hangzhou) region by using a template and preview the information about the stack. In this example, the `template body` is `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - PreviewStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewStackResponse
   */
  async previewStackWithOptions(request: PreviewStackRequest, runtime: $Util.RuntimeOptions): Promise<PreviewStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.enablePreConfig)) {
      query["EnablePreConfig"] = request.enablePreConfig;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PreviewStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreviewStackResponse>(await this.callApi(params, req, runtime), new PreviewStackResponse({}));
  }

  /**
   * Previews the information about a stack that you want to create based on a template. You can call this operation to verify whether the template resources are valid.
   * 
   * @remarks
   * This topic provides an example on how to create a stack named `MyStack` in the China (Hangzhou) region by using a template and preview the information about the stack. In this example, the `template body` is `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - PreviewStackRequest
   * @returns PreviewStackResponse
   */
  async previewStack(request: PreviewStackRequest): Promise<PreviewStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.previewStackWithOptions(request, runtime);
  }

  /**
   * Creates a new resource type, or creates a new version for an existing resource type.
   * 
   * @remarks
   *   Versions increase from v1.
   * *   If you create a new resource type, v1 is used as the default version of the resource type. You can call the SetResourceType operation to change the default version of a resource type.
   * 
   * @param request - RegisterResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterResourceTypeResponse
   */
  async registerResourceTypeWithOptions(request: RegisterResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<RegisterResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterResourceTypeResponse>(await this.callApi(params, req, runtime), new RegisterResourceTypeResponse({}));
  }

  /**
   * Creates a new resource type, or creates a new version for an existing resource type.
   * 
   * @remarks
   *   Versions increase from v1.
   * *   If you create a new resource type, v1 is used as the default version of the resource type. You can call the SetResourceType operation to change the default version of a resource type.
   * 
   * @param request - RegisterResourceTypeRequest
   * @returns RegisterResourceTypeResponse
   */
  async registerResourceType(request: RegisterResourceTypeRequest): Promise<RegisterResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerResourceTypeWithOptions(request, runtime);
  }

  /**
   * @param request - SetDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtectionWithOptions(request: SetDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDeletionProtection",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new SetDeletionProtectionResponse({}));
  }

  /**
   * @param request - SetDeletionProtectionRequest
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtection(request: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies a resource type or a version of a resource type.
   * 
   * @param request - SetResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResourceTypeResponse
   */
  async setResourceTypeWithOptions(request: SetResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<SetResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultVersionId)) {
      query["DefaultVersionId"] = request.defaultVersionId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResourceTypeResponse>(await this.callApi(params, req, runtime), new SetResourceTypeResponse({}));
  }

  /**
   * Modifies a resource type or a version of a resource type.
   * 
   * @param request - SetResourceTypeRequest
   * @returns SetResourceTypeResponse
   */
  async setResourceType(request: SetResourceTypeRequest): Promise<SetResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResourceTypeWithOptions(request, runtime);
  }

  /**
   * You can call this operation to configure a stack policy.
   * 
   * @remarks
   * In this example, a stack policy is configured for a stack deployed in the `China (Hangzhou)` region whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The URL to the stack policy body is `oss://ros/stack-policy/demo`.
   * 
   * @param request - SetStackPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetStackPolicyResponse
   */
  async setStackPolicyWithOptions(request: SetStackPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetStackPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetStackPolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetStackPolicyResponse>(await this.callApi(params, req, runtime), new SetStackPolicyResponse({}));
  }

  /**
   * You can call this operation to configure a stack policy.
   * 
   * @remarks
   * In this example, a stack policy is configured for a stack deployed in the `China (Hangzhou)` region whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The URL to the stack policy body is `oss://ros/stack-policy/demo`.
   * 
   * @param request - SetStackPolicyRequest
   * @returns SetStackPolicyResponse
   */
  async setStackPolicy(request: SetStackPolicyRequest): Promise<SetStackPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setStackPolicyWithOptions(request, runtime);
  }

  /**
   * Shares or unshares a template.
   * 
   * @remarks
   * In this example, the template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is shared with an Alibaba Cloud account. The ID of the Alibaba Cloud account is `151266687691****`.
   * > The recipient Alibaba Cloud account (ID: `151266687691****`) can authorize RAM users to use the shared template.
   * 
   * @param request - SetTemplatePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTemplatePermissionResponse
   */
  async setTemplatePermissionWithOptions(request: SetTemplatePermissionRequest, runtime: $Util.RuntimeOptions): Promise<SetTemplatePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.shareOption)) {
      query["ShareOption"] = request.shareOption;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.versionOption)) {
      query["VersionOption"] = request.versionOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTemplatePermission",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTemplatePermissionResponse>(await this.callApi(params, req, runtime), new SetTemplatePermissionResponse({}));
  }

  /**
   * Shares or unshares a template.
   * 
   * @remarks
   * In this example, the template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is shared with an Alibaba Cloud account. The ID of the Alibaba Cloud account is `151266687691****`.
   * > The recipient Alibaba Cloud account (ID: `151266687691****`) can authorize RAM users to use the shared template.
   * 
   * @param request - SetTemplatePermissionRequest
   * @returns SetTemplatePermissionResponse
   */
  async setTemplatePermission(request: SetTemplatePermissionRequest): Promise<SetTemplatePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTemplatePermissionWithOptions(request, runtime);
  }

  /**
   * Sends a signal to a resource in a stack.
   * 
   * @param request - SignalResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignalResourceResponse
   */
  async signalResourceWithOptions(request: SignalResourceRequest, runtime: $Util.RuntimeOptions): Promise<SignalResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SignalResource",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignalResourceResponse>(await this.callApi(params, req, runtime), new SignalResourceResponse({}));
  }

  /**
   * Sends a signal to a resource in a stack.
   * 
   * @param request - SignalResourceRequest
   * @returns SignalResourceResponse
   */
  async signalResource(request: SignalResourceRequest): Promise<SignalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signalResourceWithOptions(request, runtime);
  }

  /**
   * Stops a stack group operation.
   * 
   * @remarks
   * This topic provides an example on how to stop a stack group operation whose ID is `6da106ca-1784-4a6f-a7e1-e723863****` in the China (Hangzhou) region.
   * 
   * @param request - StopStackGroupOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStackGroupOperationResponse
   */
  async stopStackGroupOperationWithOptions(request: StopStackGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<StopStackGroupOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopStackGroupOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopStackGroupOperationResponse>(await this.callApi(params, req, runtime), new StopStackGroupOperationResponse({}));
  }

  /**
   * Stops a stack group operation.
   * 
   * @remarks
   * This topic provides an example on how to stop a stack group operation whose ID is `6da106ca-1784-4a6f-a7e1-e723863****` in the China (Hangzhou) region.
   * 
   * @param request - StopStackGroupOperationRequest
   * @returns StopStackGroupOperationResponse
   */
  async stopStackGroupOperation(request: StopStackGroupOperationRequest): Promise<StopStackGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStackGroupOperationWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to resources.
   * 
   * @remarks
   * This topic provides an example on how to create a tag and add the tag to a stack. In this example, the stack ID is `7fee80e1-8c48-4c2f-8300-0f6dc40b****`, the tag key is `FinanceDept`, and the tag value is `FinanceJoshua`.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-09-10",
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
   * Creates and adds tags to resources.
   * 
   * @remarks
   * This topic provides an example on how to create a tag and add the tag to a stack. In this example, the stack ID is `7fee80e1-8c48-4c2f-8300-0f6dc40b****`, the tag key is `FinanceDept`, and the tag value is `FinanceJoshua`.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources and then deletes the tags.
   * 
   * @remarks
   * This topic provides an example on how to remove all tags from a stack that is deployed in the China (Hangzhou) region. In this example, the stack ID is `46ec7b78-9d5e-4b21-aefd-448c90aa****`.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
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

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-09-10",
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
   * Removes tags from resources and then deletes the tags.
   * 
   * @remarks
   * This topic provides an example on how to remove all tags from a stack that is deployed in the China (Hangzhou) region. In this example, the stack ID is `46ec7b78-9d5e-4b21-aefd-448c90aa****`.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a stack.
   * 
   * @remarks
   * The values of parameters in the Parameters section vary based on the value that you specify for the UsePreviousParameters parameter in the request. If you do not add the parameters that are defined in the template to the Parameters section, take note of the following items:
   * *   UsePreviousParameters is set to false: If the template parameters have default values, the default values are used. Otherwise, you must specify values for the template parameters in the Parameters section.
   * *   UsePreviousParameters is set to true: If you specify values for the template parameters when you create a stack, the values are used. If you leave the template parameters empty when you create a stack but the template parameters have default values, the default values are used.
   * This topic describes how to update a stack. In this example, the template body of a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Beijing) region is updated to `{"ROSTemplateFormatVersion": "2015-09-01"}`.
   * 
   * @param request - UpdateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackResponse
   */
  async updateStackWithOptions(request: UpdateStackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.dryRunOptions)) {
      query["DryRunOptions"] = request.dryRunOptions;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replacementOption)) {
      query["ReplacementOption"] = request.replacementOption;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateBody)) {
      query["StackPolicyDuringUpdateBody"] = request.stackPolicyDuringUpdateBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateURL)) {
      query["StackPolicyDuringUpdateURL"] = request.stackPolicyDuringUpdateURL;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!Util.isUnset(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackResponse>(await this.callApi(params, req, runtime), new UpdateStackResponse({}));
  }

  /**
   * Updates a stack.
   * 
   * @remarks
   * The values of parameters in the Parameters section vary based on the value that you specify for the UsePreviousParameters parameter in the request. If you do not add the parameters that are defined in the template to the Parameters section, take note of the following items:
   * *   UsePreviousParameters is set to false: If the template parameters have default values, the default values are used. Otherwise, you must specify values for the template parameters in the Parameters section.
   * *   UsePreviousParameters is set to true: If you specify values for the template parameters when you create a stack, the values are used. If you leave the template parameters empty when you create a stack but the template parameters have default values, the default values are used.
   * This topic describes how to update a stack. In this example, the template body of a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Beijing) region is updated to `{"ROSTemplateFormatVersion": "2015-09-01"}`.
   * 
   * @param request - UpdateStackRequest
   * @returns UpdateStackResponse
   */
  async updateStack(request: UpdateStackRequest): Promise<UpdateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackWithOptions(request, runtime);
  }

  /**
   * The region ID of the stack group. You can call the [DescribeRegions]\\(~~131035~~) operation to query the latest list of Alibaba Cloud regions.
   * 
   * @remarks
   * The name of the stack group. The name must be unique within a region.
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or a letter.
   * 
   * @param tmpReq - UpdateStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackGroupResponse
   */
  async updateStackGroupWithOptions(tmpReq: UpdateStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset(tmpReq.autoDeployment)) {
      request.autoDeploymentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoDeployment, "AutoDeployment", "json");
    }

    if (!Util.isUnset(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.administrationRoleName)) {
      query["AdministrationRoleName"] = request.administrationRoleName;
    }

    if (!Util.isUnset(request.autoDeploymentShrink)) {
      query["AutoDeployment"] = request.autoDeploymentShrink;
    }

    if (!Util.isUnset(request.capabilities)) {
      query["Capabilities"] = request.capabilities;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionRoleName)) {
      query["ExecutionRoleName"] = request.executionRoleName;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.permissionModel)) {
      query["PermissionModel"] = request.permissionModel;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackGroupResponse>(await this.callApi(params, req, runtime), new UpdateStackGroupResponse({}));
  }

  /**
   * The region ID of the stack group. You can call the [DescribeRegions]\\(~~131035~~) operation to query the latest list of Alibaba Cloud regions.
   * 
   * @remarks
   * The name of the stack group. The name must be unique within a region.
   * The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or a letter.
   * 
   * @param request - UpdateStackGroupRequest
   * @returns UpdateStackGroupResponse
   */
  async updateStackGroup(request: UpdateStackGroupRequest): Promise<UpdateStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackGroupWithOptions(request, runtime);
  }

  /**
   * Updates stack instances in the specified accounts and regions.
   * 
   * @remarks
   * In this topic, the stack group named `MyStackGroup` that is created in the China (Hangzhou) region is used. The stack group is granted the self-managed permissions. In this example, stacks of the stack group are updated by using the Alibaba Cloud accounts whose IDs are `151266687691****` and `141261387191****` in the China (Hangzhou) region and China (Beijing) region.
   * 
   * @param tmpReq - UpdateStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackInstancesResponse
   */
  async updateStackInstancesWithOptions(tmpReq: UpdateStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.parameterOverrides)) {
      query["ParameterOverrides"] = request.parameterOverrides;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackInstancesResponse>(await this.callApi(params, req, runtime), new UpdateStackInstancesResponse({}));
  }

  /**
   * Updates stack instances in the specified accounts and regions.
   * 
   * @remarks
   * In this topic, the stack group named `MyStackGroup` that is created in the China (Hangzhou) region is used. The stack group is granted the self-managed permissions. In this example, stacks of the stack group are updated by using the Alibaba Cloud accounts whose IDs are `151266687691****` and `141261387191****` in the China (Hangzhou) region and China (Beijing) region.
   * 
   * @param request - UpdateStackInstancesRequest
   * @returns UpdateStackInstancesResponse
   */
  async updateStackInstances(request: UpdateStackInstancesRequest): Promise<UpdateStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackInstancesWithOptions(request, runtime);
  }

  /**
   * Corrects a template to eliminate stack drift.
   * 
   * @remarks
   * Limits: You can eliminate only drift on stacks that have drifted. You must call the [DetectStackDrift](https://help.aliyun.com/document_detail/155094.html) operation to perform drift detection on a stack, call the [GetStackDriftDetectionStatus](https://help.aliyun.com/document_detail/155097.html) operation to query the drift status of the stack to make sure that the stack has drifted, and then call the UpdateStackTemplateByResources operation to eliminate drift.
   * In this topic, drift is eliminated for a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - UpdateStackTemplateByResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackTemplateByResourcesResponse
   */
  async updateStackTemplateByResourcesWithOptions(request: UpdateStackTemplateByResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackTemplateByResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStackTemplateByResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackTemplateByResourcesResponse>(await this.callApi(params, req, runtime), new UpdateStackTemplateByResourcesResponse({}));
  }

  /**
   * Corrects a template to eliminate stack drift.
   * 
   * @remarks
   * Limits: You can eliminate only drift on stacks that have drifted. You must call the [DetectStackDrift](https://help.aliyun.com/document_detail/155094.html) operation to perform drift detection on a stack, call the [GetStackDriftDetectionStatus](https://help.aliyun.com/document_detail/155097.html) operation to query the drift status of the stack to make sure that the stack has drifted, and then call the UpdateStackTemplateByResources operation to eliminate drift.
   * In this topic, drift is eliminated for a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - UpdateStackTemplateByResourcesRequest
   * @returns UpdateStackTemplateByResourcesResponse
   */
  async updateStackTemplateByResources(request: UpdateStackTemplateByResourcesRequest): Promise<UpdateStackTemplateByResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackTemplateByResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a template by specifying the template URL or template details.
   * 
   * @remarks
   * When you update a template, take note of the following items:
   * *   If you specify TemplateBody or TemplateURL, the existing version number is automatically incremented by 1 after the template is updated. For example, the version is changed from v1 to v2.
   * *   If you do not specify TemplateBody or TemplateURL, the version number remains unchanged.
   * *   A template can have up to 100 versions. If the number of templates reaches the upper limit, the template fails to be updated. You must create another template.
   * 
   * @param request - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2019-09-10",
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
   * Updates a template by specifying the template URL or template details.
   * 
   * @remarks
   * When you update a template, take note of the following items:
   * *   If you specify TemplateBody or TemplateURL, the existing version number is automatically incremented by 1 after the template is updated. For example, the version is changed from v1 to v2.
   * *   If you do not specify TemplateBody or TemplateURL, the version number remains unchanged.
   * *   A template can have up to 100 versions. If the number of templates reaches the upper limit, the template fails to be updated. You must create another template.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * Updates a scenario.
   * 
   * @remarks
   * ### [](#)Resource replication scenario
   * Resource Orchestration Service (ROS) allows you to update a resource replication scenario. The updates that you make to a resource replication scenario do not affect the stack that is generated by using the resource scenario. You can call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource migration scenario
   * *   If you want to update a resource migration scenario in which the migrated source resources are retained, you can delete the source resources to manage the updated resource migration scenario. You can also call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   *     **
   *     **Note** Make sure that the source resources that you want to delete from a resource migration scenario are associated only with the resource scenario. Otherwise, the source resources fail to be deleted.
   * *   If you want to update a resource migration scenario in which the migrated source resources are deleted, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource management scenario
   * If you want to update a resource management scenario after you use the resource scenario to manage resources, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource detection scenario
   * After you update a resource detection scenario, ROS obtains the most recent data from Resource Center and renders the architecture diagram.
   * This topic provides an example on how to update a resource scenario. In this example, the ID of a virtual private cloud (VPC) in a resource scenario whose ID is `ts-7f7a704cf71c49a6****` is updated to `vpc-bp1m6fww66xbntjyc****`.
   * 
   * @param tmpReq - UpdateTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateScratchResponse
   */
  async updateTemplateScratchWithOptions(tmpReq: UpdateTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateScratchResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateScratchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.preferenceParameters)) {
      request.preferenceParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preferenceParameters, "PreferenceParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceResourceGroup)) {
      request.sourceResourceGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResourceGroup, "SourceResourceGroup", "json");
    }

    if (!Util.isUnset(tmpReq.sourceResources)) {
      request.sourceResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResources, "SourceResources", "json");
    }

    if (!Util.isUnset(tmpReq.sourceTag)) {
      request.sourceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTag, "SourceTag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!Util.isUnset(request.logicalIdStrategy)) {
      query["LogicalIdStrategy"] = request.logicalIdStrategy;
    }

    if (!Util.isUnset(request.preferenceParametersShrink)) {
      query["PreferenceParameters"] = request.preferenceParametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceResourceGroupShrink)) {
      query["SourceResourceGroup"] = request.sourceResourceGroupShrink;
    }

    if (!Util.isUnset(request.sourceResourcesShrink)) {
      query["SourceResources"] = request.sourceResourcesShrink;
    }

    if (!Util.isUnset(request.sourceTagShrink)) {
      query["SourceTag"] = request.sourceTagShrink;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateScratchResponse>(await this.callApi(params, req, runtime), new UpdateTemplateScratchResponse({}));
  }

  /**
   * Updates a scenario.
   * 
   * @remarks
   * ### [](#)Resource replication scenario
   * Resource Orchestration Service (ROS) allows you to update a resource replication scenario. The updates that you make to a resource replication scenario do not affect the stack that is generated by using the resource scenario. You can call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource migration scenario
   * *   If you want to update a resource migration scenario in which the migrated source resources are retained, you can delete the source resources to manage the updated resource migration scenario. You can also call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   *     **
   *     **Note** Make sure that the source resources that you want to delete from a resource migration scenario are associated only with the resource scenario. Otherwise, the source resources fail to be deleted.
   * *   If you want to update a resource migration scenario in which the migrated source resources are deleted, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource management scenario
   * If you want to update a resource management scenario after you use the resource scenario to manage resources, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource detection scenario
   * After you update a resource detection scenario, ROS obtains the most recent data from Resource Center and renders the architecture diagram.
   * This topic provides an example on how to update a resource scenario. In this example, the ID of a virtual private cloud (VPC) in a resource scenario whose ID is `ts-7f7a704cf71c49a6****` is updated to `vpc-bp1m6fww66xbntjyc****`.
   * 
   * @param request - UpdateTemplateScratchRequest
   * @returns UpdateTemplateScratchResponse
   */
  async updateTemplateScratch(request: UpdateTemplateScratchRequest): Promise<UpdateTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Validates a template by using a template URL or template body. The template is used to create a stack.
   * 
   * @remarks
   * In this example, a template that you want to use to create a stack is validated. `TemplateURL` is set to `oss://ros/template/demo`.
   * 
   * @param request - ValidateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateTemplateResponse
   */
  async validateTemplateWithOptions(request: ValidateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.updateInfoOptions)) {
      query["UpdateInfoOptions"] = request.updateInfoOptions;
    }

    if (!Util.isUnset(request.validationOption)) {
      query["ValidationOption"] = request.validationOption;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateTemplateResponse>(await this.callApi(params, req, runtime), new ValidateTemplateResponse({}));
  }

  /**
   * Validates a template by using a template URL or template body. The template is used to create a stack.
   * 
   * @remarks
   * In this example, a template that you want to use to create a stack is validated. `TemplateURL` is set to `oss://ros/template/demo`.
   * 
   * @param request - ValidateTemplateRequest
   * @returns ValidateTemplateResponse
   */
  async validateTemplate(request: ValidateTemplateRequest): Promise<ValidateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTemplateWithOptions(request, runtime);
  }

}
