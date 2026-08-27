// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackGroupRequestAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * - true: ROS automatically creates stacks for new member accounts added to the folder and deletes stacks for removed accounts.
   * 
   * - false: Stacks remain unchanged when member accounts are added to or removed from the folder.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Whether to retain stacks when a member account is removed from the folder.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > You must specify RetainStacksOnAccountRemoval if Enabled is true.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The key of parameter N. If not specified, ROS uses the default name and value defined in the template.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequestTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The RAM role for the administrator account in a self-managed stack group. ROS assumes this role to perform operations. Default: AliyunROSStackGroupAdministrationRole.
   * 
   * 1 to 64 characters. Can contain letters, digits, and hyphens (-).
   * 
   * > This parameter is required when PermissionModel is set to SELF_MANAGED.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The automatic deployment settings.
   * 
   * > You must specify this parameter if PermissionModel is set to SERVICE_MANAGED.
   * 
   * @example
   * {"Enabled": true, "RetainStacksOnAccountRemoval": true}
   */
  autoDeployment?: CreateStackGroupRequestAutoDeployment;
  /**
   * @remarks
   * The options for the stack group. Maximum: one option.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The client token for idempotency. Must be unique across requests. Can contain letters, digits, underscores (_), and hyphens (-), up to 64 characters. [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The stack group description. 1 to 256 characters.
   * 
   * @example
   * StackGroup Description
   */
  description?: string;
  /**
   * @remarks
   * The RAM role for the execution account in a self-managed stack group. The administrator role assumes this role to perform stack operations. Default: AliyunROSStackGroupExecutionRole.
   * 
   * 1 to 64 characters. Can contain letters, digits, and hyphens (-).
   * 
   * > This parameter is required when PermissionModel is set to SELF_MANAGED.
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
   * - SELF_MANAGED (default): Create RAM roles for the administrator and execution accounts and establish a trust relationship between them.
   * 
   * - SERVICE_MANAGED: ROS automatically creates service-linked roles for the administrator and execution accounts.
   * 
   * > To use SERVICE_MANAGED, your account must be the management account or a delegated administrator account of a resource directory with trusted access enabled. [Manage a delegated administrator account](https://help.aliyun.com/document_detail/308253.html) and [Enable trusted access](https://help.aliyun.com/document_detail/298229.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The region ID of the stack group. Call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. Defaults to the default resource group. [Resource groups](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The stack ARN in the format acs:ros:${RegionId}:${AccountId}:stack/${StackId}. The stack group uses the template and parameters of this stack.
   * 
   * > - Only supported in self-managed permission mode.
   * >
   * > - If StackArn is specified, Parameters must not be specified.
   * >
   * > - You must specify **only one** of TemplateBody, TemplateURL, TemplateId, or StackArn.
   * 
   * @example
   * acs:ros:cn-hangzhou:175458000000****:stack/4a65f506-c3cc-43b6-af06-3f000000****
   */
  stackArn?: string;
  /**
   * @remarks
   * The stack group name. Must be unique within a region. 1 to 255 characters. Can contain letters, digits, hyphens (-), and underscores (_). Must start with a letter or digit.
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
  /**
   * @remarks
   * The template body. 1 to 524,288 bytes. For large templates, pass the body in the HTTP POST request body to avoid URL length limits.
   * 
   * > Specify exactly one of TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. Applies to shared and private templates.
   * 
   * > Specify exactly one of TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the template file. Supports HTTP, HTTPS, and OSS URLs. 1 to 524,288 bytes. Examples: oss\\://ros/template/demo, oss\\://ros/template/demo?RegionId=cn-hangzhou. If no region ID is specified for the OSS bucket, the RegionId value applies.
   * 
   * > Specify exactly one of TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The template version. Defaults to the latest version.
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

