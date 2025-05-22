// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateStackGroupRequestAutoDeployment } from "./CreateStackGroupRequestAutoDeployment";
import { CreateStackGroupRequestParameters } from "./CreateStackGroupRequestParameters";
import { CreateStackGroupRequestTags } from "./CreateStackGroupRequestTags";


export class CreateStackGroupRequest extends $dara.Model {
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
  stackArn?: string;
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
      stackArn: 'StackArn',
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
      stackArn: 'string',
      stackGroupName: 'string',
      tags: { 'type': 'array', 'itemType': CreateStackGroupRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(this.autoDeployment && typeof (this.autoDeployment as any).validate === 'function') {
      (this.autoDeployment as any).validate();
    }
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
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

