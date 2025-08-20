// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackRequestParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackRequestTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackRequest extends $dara.Model {
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
  taintResources?: string[];
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
      taintResources: 'TaintResources',
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
      taintResources: { 'type': 'array', 'itemType': 'string' },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      usePreviousParameters: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dryRunOptions)) {
      $dara.Model.validateArray(this.dryRunOptions);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taintResources)) {
      $dara.Model.validateArray(this.taintResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

