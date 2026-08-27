// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChangeSetRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that is defined in the template. If you do not specify the name and value of a parameter, ROS uses the default name and value that are specified in the template. The value of N can be up to 200.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must also specify Parameters.N.ParameterKey.
   * 
   * This parameter is required.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter that is defined in the template. The value of N can be up to 200.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must also specify Parameters.N.ParameterValue.
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

export class CreateChangeSetRequestResourcesToImport extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the resource. The logical ID is the resource name that is defined in the template.
   * 
   * > This parameter takes effect only when ChangeSetType is set to IMPORT. The ResourcesToImport parameter is optional. If you specify ResourcesToImport, you must also specify ResourcesToImport.N.LogicalResourceId.
   * 
   * @example
   * Vpc
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * A key-value mapping between strings. The value is a JSON string that is used to identify the resource to be imported. The key is the identifier property of the resource, such as the VpcId of an ALIYUN::ECS::VPC resource. The value is the value of the property, such as `vpc-2zevx9ios****`.
   * 
   * Call [GetTemplateSummary](https://help.aliyun.com/document_detail/172485.html) to query resource identifier properties.
   * 
   * > This parameter takes effect only when ChangeSetType is set to IMPORT. The ResourcesToImport parameter is optional. If you specify ResourcesToImport, you must also specify ResourcesToImport.N.ResourceIdentifier.
   * 
   * @example
   * {"VpcId": "vpc-2zevx9ios******"}
   */
  resourceIdentifier?: string;
  /**
   * @remarks
   * The type of the resource. The resource type must be the same as the resource type that is defined in the template.
   * 
   * > This parameter takes effect only when ChangeSetType is set to IMPORT. The ResourcesToImport parameter is optional. If you specify ResourcesToImport, you must also specify ResourcesToImport.N.ResourceType.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack.
   * 
   * The value of N can be from 1 to 20.
   * 
   * > - The Tags parameter is optional. If you specify Tags, you must also specify Tags.N.Key.
   * >
   * > - The tag is propagated to each stack resource that supports tags. [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack.
   * 
   * The value of N can be from 1 to 20.
   * 
   * > The tag is propagated to each stack resource that supports tags. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
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

export class CreateChangeSetRequest extends $dara.Model {
  /**
   * @remarks
   * The change set name. Maximum length: 255 characters. The name can contain digits, letters, hyphens (-), and underscores (_), and must start with a digit or letter.
   * 
   * > The name of the change set must be unique within the stack.
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
   * - CREATE: creates a change set for a new stack.
   * 
   * - UPDATE (default): creates a change set for an existing stack.
   * 
   * - IMPORT: creates a change set for a new stack or an existing stack to import resources that are not managed by ROS.
   * 
   * If you set the value of ChangeSetType to CREATE, ROS creates a new stack. The stack is in the `REVIEW_IN_PROGRESS` state until you execute the change set.
   * 
   * > - You cannot use the UPDATE type to create a change set for a new stack or the CREATE type to create a change set for an existing stack.
   * >
   * > - You cannot set a stack policy for a change set of the IMPORT type. You can set a stack policy when you create or update a stack.
   * 
   * @example
   * UPDATE
   */
  changeSetType?: string;
  /**
   * @remarks
   * The client token used to ensure request idempotence. The token must be unique across requests and can be up to 64 characters in length, containing letters, digits, hyphens (-), and underscores (_). [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
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
   * Specifies whether to disable rollback on stack creation failure. Valid values:
   * 
   * - true: disables rollback on creation failure.
   * 
   * - false (default): enables rollback on creation failure.
   * 
   * > This parameter takes effect only when ChangeSetType is set to CREATE or IMPORT.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The list of webhook addresses for receiving stack event notifications.
   * 
   * @example
   * http://my-site.com/ros-notify
   */
  notificationURLs?: string[];
  /**
   * @remarks
   * The maximum number of concurrent resource operations. By default, this value is empty. Once set, the value is associated with the stack and affects subsequent operations.
   * 
   * This parameter takes effect only when ChangeSetType is set to CREATE or UPDATE. Valid values:
   * 
   * - If ChangeSetType is set to CREATE
   * 
   *   - If you set this parameter to an integer that is greater than 0, the integer is used.
   * 
   *   - If you set this parameter to 0 or do not set this parameter, no limit is imposed on ROS stacks. For Terraform stacks, the default value of Terraform is used, which is 10.
   * 
   * - If ChangeSetType is set to UPDATE
   * 
   *   - If you set this parameter to an integer that is greater than 0, the integer is used.
   * 
   *   - If you set this parameter to 0, no limit is imposed on ROS stacks. For Terraform stacks, the default value of Terraform is used, which is 10.
   * 
   *   - If you do not set this parameter, the value that you specified in the previous operation is used. If you did not set this parameter in the previous operation, no limit is imposed on ROS stacks. For Terraform stacks, the default value of Terraform is used, which is 10.
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
   * The RAM role name. ROS assumes this role to call Alibaba Cloud service APIs and always uses it for all stack operations. If you lack the required permissions, ROS assumes the role specified by RamRoleName. If unspecified, ROS uses the existing stack role. If no role is available, ROS uses a temporary credential from your account. Maximum length: 64 bytes.
   * 
   * [Stack roles](https://help.aliyun.com/document_detail/2568025.html).
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the change set.
   * 
   * Call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable replacement update when a resource property change does not support modification updates. A replacement update deletes the existing resource and creates a new one with a new physical ID. Valid values:
   * 
   * - Enabled: enables replacement update.
   * 
   * - Disabled (default): disables replacement update.
   * 
   * > Modification updates are preferentially used. This parameter takes effect only when ChangeSetType is set to UPDATE.
   * 
   * @example
   * Disabled
   */
  replacementOption?: string;
  /**
   * @remarks
   * The resource group ID. If unspecified, the stack is added to the default resource group. [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resources to be imported.
   */
  resourcesToImport?: CreateChangeSetRequestResourcesToImport[];
  /**
   * @remarks
   * The stack ID. ROS compares the stack information with the submitted changes, such as a modified template or different parameter values, to generate the change set. Call [ListStacks](https://help.aliyun.com/document_detail/610818.html) to query stack IDs.
   * 
   * > This parameter takes effect only when ChangeSetType is set to UPDATE or IMPORT.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name. Maximum length: 255 characters. The name can contain digits, letters, hyphens (-), and underscores (_), and must start with a digit or letter.
   * 
   * > This parameter takes effect only when ChangeSetType is set to CREATE or IMPORT.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure of the stack policy. The policy body must be 1 to 16,384 bytes in length.
   * 
   * When ChangeSetType is set to **CREATE**, you can specify only one of the StackPolicyBody and StackPolicyURL parameters.
   * 
   * When ChangeSetType is set to **UPDATE**, you can specify only one of the following parameters:
   * 
   * - StackPolicyBody
   * 
   * - StackPolicyURL
   * 
   * - StackPolicyDuringUpdateBody
   * 
   * - StackPolicyDuringUpdateURL
   * 
   * @example
   * {"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The temporary overriding stack policy body. Length: 1 to 16,384 bytes. To update protected resources, specify a temporary overriding policy. If unspecified, the current stack policy applies. This parameter takes effect only when ChangeSetType is set to UPDATE. You can specify only one of the following parameters:
   * 
   * - StackPolicyBody
   * 
   * - StackPolicyURL
   * 
   * - StackPolicyDuringUpdateBody
   * 
   * - StackPolicyDuringUpdateURL
   * 
   * @example
   * {"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}
   */
  stackPolicyDuringUpdateBody?: string;
  /**
   * @remarks
   * The URL of the temporary overriding stack policy file. The URL must point to a policy on a web server (HTTP or HTTPS) or in an OSS bucket, such as oss\\://ros/stack-policy/demo or oss\\://ros/stack-policy/demo?RegionId=cn-hangzhou. Maximum policy file size: 16,384 bytes.
   * 
   * > If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * Maximum URL length: 1,350 bytes. To update protected resources, specify a temporary overriding stack policy. If unspecified, the current stack policy applies. This parameter takes effect only when ChangeSetType is set to UPDATE. You can specify only one of the following parameters:
   * 
   * - StackPolicyBody
   * 
   * - StackPolicyURL
   * 
   * - StackPolicyDuringUpdateBody
   * 
   * - StackPolicyDuringUpdateURL
   * 
   * @example
   * oss://ros/stack-policy/demo
   */
  stackPolicyDuringUpdateURL?: string;
  /**
   * @remarks
   * The URL of the stack policy file. The URL must point to a policy on a web server (HTTP or HTTPS) or in an OSS bucket, such as oss\\://ros/stack-policy/demo or oss\\://ros/stack-policy/demo?RegionId=cn-hangzhou. Maximum policy file size: 16,384 bytes.
   * 
   * Maximum URL length: 1,350 bytes.
   * 
   * > If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * When ChangeSetType is set to **CREATE**, you can specify only one of the StackPolicyBody and StackPolicyURL parameters.
   * 
   * When ChangeSetType is set to **UPDATE**, you can specify only one of the following parameters:
   * 
   * - StackPolicyBody
   * 
   * - StackPolicyURL
   * 
   * - StackPolicyDuringUpdateBody
   * 
   * - StackPolicyDuringUpdateURL
   * 
   * @example
   * oss://ros/stack-policy/demo
   */
  stackPolicyURL?: string;
  /**
   * @remarks
   * The tags of the change set.
   */
  tags?: CreateChangeSetRequestTags[];
  /**
   * @remarks
   * The list of resources to be marked as dirty.
   */
  taintResources?: string[];
  /**
   * @remarks
   * The template body. Length: 1 to 524,288 bytes. For large templates, use HTTP POST with a body parameter to avoid URL length limits.
   * 
   * > You can specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared templates and private templates.
   * 
   * Call [ListTemplates](https://help.aliyun.com/document_detail/610842.html) to query template IDs.
   * 
   * > You can specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The resource scenario ID, which is the resource management scenario ID.
   * 
   * This parameter takes effect only when ChangeSetType is set to IMPORT. This parameter supports only the creation of new stacks for resource import.
   * 
   * If you want to import resources in a resource management scenario, specify only this parameter. Do not specify parameters related to templates.
   * 
   * Call [ListTemplateScratches](https://help.aliyun.com/document_detail/610832.html) to query scenario IDs.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The URL of the template file. The URL must point to a template on a web server (HTTP or HTTPS) or in an OSS bucket, such as oss\\://ros/template/demo or oss\\://ros/template/demo?RegionId=cn-hangzhou. Maximum template body size: 524,288 bytes.
   * 
   * > If you do not specify the region of the OSS bucket, the value of RegionId is used.
   * 
   * You can specify only one of the TemplateBody, TemplateURL, and TemplateId parameters.
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
   * > This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period before the stack enters CREATE_FAILED or UPDATE_FAILED state. Required when ChangeSetType is CREATE. Optional when ChangeSetType is UPDATE.
   * 
   * - Unit: minutes.
   * 
   * - Valid values: 10 to 1440.
   * 
   * - Default value: 60.
   * 
   * @example
   * 12
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * Specifies whether to use the values of parameters that were last used. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * > This parameter takes effect only when ChangeSetType is set to UPDATE or IMPORT.
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
      resourceGroupId: 'ResourceGroupId',
      resourcesToImport: 'ResourcesToImport',
      stackId: 'StackId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      stackPolicyURL: 'StackPolicyURL',
      tags: 'Tags',
      taintResources: 'TaintResources',
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
      resourceGroupId: 'string',
      resourcesToImport: { 'type': 'array', 'itemType': CreateChangeSetRequestResourcesToImport },
      stackId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyDuringUpdateBody: 'string',
      stackPolicyDuringUpdateURL: 'string',
      stackPolicyURL: 'string',
      tags: { 'type': 'array', 'itemType': CreateChangeSetRequestTags },
      taintResources: { 'type': 'array', 'itemType': 'string' },
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      usePreviousParameters: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.notificationURLs)) {
      $dara.Model.validateArray(this.notificationURLs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.resourcesToImport)) {
      $dara.Model.validateArray(this.resourcesToImport);
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

