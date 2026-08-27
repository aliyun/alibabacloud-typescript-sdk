// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of parameter N defined in the template. If you do not specify the name and value of a parameter, ROS uses the default value in the template.
   * 
   * The maximum value of N is 200. The name must be 1 to 128 characters and cannot start with `aliyun` or `acs:`. The name cannot contain `http://` or `https://`.
   * 
   * > Parameters is an optional parameter. To specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceId
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of parameter N defined in the template.
   * 
   * The maximum value of N is 200. The value must be 0 to 128 characters and cannot start with `aliyun` or `acs:`. The value cannot contain `http://` or `https://`.
   * 
   * > Parameters is an optional parameter. To specify Parameters, you must specify both Parameters.N.ParameterKey and Parameters.N.ParameterValue.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the stack.
   * 
   * Valid values: 1 to 20.
   * 
   * > - Tags is an optional parameter. To specify Tags, you must specify Tags.N.Key.
   * >
   * > - Stack tags propagate to each resource that supports tagging. [Tag propagation](https://help.aliyun.com/document_detail/201421.html).
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the stack.
   * 
   * Valid values: 1 to 20.
   * 
   * > Stack tags propagate to taggable resources. [Tag propagation](https://help.aliyun.com/document_detail/201421.html).
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures request idempotency. Must be client-generated and globally unique. Maximum length: 64 characters. Can contain **letters**, **digits**,**&#x20;hyphens (-)**, an&#x64;**&#x20;underscores (_)**.
   * 
   * [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The post-creation behavior for the stack. Valid values:
   * 
   * - KeepStackOnCreationComplete (default): retains the stack and resources after creation. Counts toward the stack quota.
   * 
   * - AbandonStackOnCreationComplete: deletes the stack but retains resources after creation. Does not count toward the stack quota. The stack is retained if creation fails.
   * 
   * - AbandonStackOnCreationRollbackComplete: deletes the stack after a creation rollback. Does not count toward the stack quota. The stack is retained in other rollback scenarios.
   * 
   * - ManuallyPay: requires manual payment for subscription resources during stack creation. Supported resource types: `ALIYUN::ECS::InstanceGroup`, `ALIYUN::RDS::DBInstance`, `ALIYUN::SLB::LoadBalancer`, `ALIYUN::VPC::EIP`, and `ALIYUN::VPC::VpnGateway`.
   * 
   * - RetryOnNoStock: automatically retries resource creation on insufficient inventory. Supported resource type: `ALIYUN::RDS::DBInstance`.
   * 
   * > You can specify only one of the following parameters: CreateOption or CreateOptions.
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
   * Specifies whether to enable deletion protection on the stack. Valid values:
   * 
   * - Enabled: enables deletion protection.
   * 
   * - Disabled (default): allows stack deletion via the ROS console or the DeleteStack API.
   * 
   * > The deletion protection of a nested stack is the same as that of its root stack.
   * 
   * @example
   * Enabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * Specifies whether to disable rollback when stack creation fails.
   * 
   * Valid values:
   * 
   * - true: disables rollback.
   * 
   * - false (default): enables rollback.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The callback URL for stack events. Valid values:
   * 
   * - HTTP POST URL. Maximum length: 1,024 bytes.
   * 
   * - EventBridge receives stack status change notifications. View events in the [EventBridge console](https://eventbridge.console.aliyun.com).
   * 
   * > Supported regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Hong Kong), and China (Zhangjiakou).
   * 
   * Maximum value of N: 5. ROS sends notifications on stack status changes, except for IN_PROGRESS events. With rollback enabled, CREATE_ROLLBACK and ROLLBACK events replace CREATE_FAILED and UPDATE_FAILED notifications. Notifications always include Outputs. Example notification:
   * 
   * ```
   * {
   *    "Outputs": [
   *        {
   *            "Description": "No description given",
   *            "OutputKey": "InstanceId",
   *            "OutputValue": "i-xxx"
   *        }
   *    ],
   *    "StackId": "80bd6b6c-e888-4573-ae3b-93d29113****",
   *    "StackName": "test-notification-url",
   *    "Status": "CREATE_COMPLETE"
   * }
   * ```
   * 
   * @example
   * http://my-site.com/ros-event
   */
  notificationURLs?: string[];
  /**
   * @remarks
   * The maximum number of concurrent operations on resources.
   * 
   * Default: empty. Accepts integers greater than or equal to 0.
   * 
   * > - If greater than 0, the specified value is used. If 0 or empty, no limit applies to ROS stacks; Terraform stacks use the Terraform default (typically 10).
   * >
   * > - The specified value persists with the stack and affects subsequent operations such as updates.
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
   * The RAM role name. ROS assumes this role for all stack API calls, even when the user has direct permissions, ensuring least-privilege access. [Use a stack role](https://help.aliyun.com/document_detail/2568025.html).
   * 
   * If not specified, ROS uses the role associated with the stack, or a temporary credential from your account if no role exists.
   * 
   * Maximum length: 64 characters.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. Call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If not specified, the stack is added to the default resource group.
   * 
   * [What is a resource group](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The stack name. Maximum length: 255 characters. Must start with a **letter** and can contain **letters**, **digits**, **hyphens (-)**, and **underscores (_)**.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The stack policy body. Length: 1 to 16,384 bytes.
   * 
   * > You can specify only one of the following parameters: StackPolicyBody or StackPolicyURL.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The URL of the stack policy file. Supports HTTP, HTTPS, and OSS URLs (for example, oss\\://ros/stack-policy/demo or oss\\://ros/stack-policy/demo?RegionId=cn-hangzhou). Maximum file size: 16,384 bytes. If no OSS region is specified, the RegionId value is used.
   * 
   * > You can specify only one of the following parameters: StackPolicyBody or StackPolicyURL.
   * 
   * Maximum URL length: 1,350 bytes.
   * 
   * @example
   * oss://ros-stack-policy/demo
   */
  stackPolicyURL?: string;
  /**
   * @remarks
   * The tags of the stack.
   */
  tags?: CreateStackRequestTags[];
  /**
   * @remarks
   * The template body. Length: **1 to 524,288 bytes**. Use **HTTP POST** with **Body parameters** for large content to avoid URL length limits.
   * 
   * > You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, or TemplateScratchId.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * > You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, or TemplateScratchId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * Call [ListTemplateScratches](https://help.aliyun.com/document_detail/363050.html) to query resource scenario IDs.
   * 
   * > You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, or TemplateScratchId.
   * 
   * @example
   * ts-aa9c62feab844a6b****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The region ID of the resource scenario. Default value: the value of RegionId.
   * 
   * Call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  templateScratchRegionId?: string;
  /**
   * @remarks
   * The URL of the template file. Supports HTTP, HTTPS, and OSS URLs (for example, oss\\://ros/stack-policy/demo or oss\\://ros/stack-policy/demo?RegionId=cn-hangzhou). Maximum template size: 524,288 bytes. If no OSS region is specified, the RegionId value is used.
   * 
   * > You must specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, or TemplateScratchId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when you specify TemplateId.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The stack creation timeout. Unit: minutes.
   * 
   * - Default value: 60.
   * 
   * - Valid values: 10 to 1440.
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

  validate() {
    if(Array.isArray(this.createOptions)) {
      $dara.Model.validateArray(this.createOptions);
    }
    if(Array.isArray(this.notificationURLs)) {
      $dara.Model.validateArray(this.notificationURLs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
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

