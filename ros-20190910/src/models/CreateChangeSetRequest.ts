// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateChangeSetRequestParameters } from "./CreateChangeSetRequestParameters";
import { CreateChangeSetRequestResourcesToImport } from "./CreateChangeSetRequestResourcesToImport";
import { CreateChangeSetRequestTags } from "./CreateChangeSetRequestTags";


export class CreateChangeSetRequest extends $dara.Model {
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
  resourceGroupId?: string;
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
  tags?: CreateChangeSetRequestTags[];
  taintResources?: string[];
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

