// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackRequestParameters extends $dara.Model {
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

