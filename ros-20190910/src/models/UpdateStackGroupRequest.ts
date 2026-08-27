// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackGroupRequestAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic deployment.
   * 
   * Valid values:
   * 
   * - true: Enables automatic deployment. If you enable automatic deployment, ROS automatically deploys stacks to the new member accounts that are added to the folder. If a member account is removed from the folder, ROS automatically deletes the stacks from the account.
   * 
   * - false: Disables automatic deployment. If you disable automatic deployment, the stacks remain unchanged when the member accounts in the folder change.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to retain the stacks in the member accounts that are removed from the folder.
   * 
   * Valid values:
   * 
   * - true: Retains the stacks.
   * 
   * - false: Deletes the stacks.
   * 
   * > This parameter is required only when \\`Enabled\\` is set to true.
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

export class UpdateStackGroupRequestDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of the member accounts in the resource directory. You can specify a maximum of 30 member account IDs.
   * 
   * > You can view the member account IDs on the **Overview** page of the **Resource Management** console. For more information, see [View the details of a member](https://help.aliyun.com/document_detail/111624.html).
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

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.rdFolderIds)) {
      $dara.Model.validateArray(this.rdFolderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the parameter. If you do not specify the key and value of a parameter, ROS uses the default name and value that are specified in the template.
   * 
   * You can specify a maximum of 200 parameters.
   * 
   * > The \\`Parameters\\` parameter is optional. If you specify \\`Parameters\\`, you must specify \\`Parameters.N.ParameterKey\\`.
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
   * You can specify a maximum of 200 parameters.
   * 
   * > The \\`Parameters\\` parameter is optional. If you specify \\`Parameters\\`, you must specify \\`Parameters.N.ParameterValue\\`.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the destination accounts in which to deploy stacks in self-managed permission mode. You can specify a maximum of 50 destination account IDs.
   * 
   * @example
   * ["12****"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * The name of the RAM administrator role that is assumed by ROS. This parameter is required when you create a stack group that has self-managed permissions. If you do not specify a value, \\`AliyunROSStackGroupAdministrationRole\\` is used as the default value. ROS assumes this role to perform operations on the stacks in the stack group. ROS uses the credentials of this role to assume the execution role (\\`AliyunROSStackGroupExecutionRole\\`).
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The automatic deployment settings.
   * 
   * > This parameter is required only when \\`PermissionModel\\` is set to \\`SERVICE_MANAGED\\`.
   * 
   * @example
   * {"Enabled": true, "RetainStacksOnAccountRemoval": true}
   */
  autoDeployment?: UpdateStackGroupRequestAutoDeployment;
  /**
   * @remarks
   * The options for the stack group. You can specify up to one option.
   */
  capabilities?: string[];
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.<br>The token can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).<br>For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment options for a stack group with service-managed permissions. You can specify up to one deployment option.
   */
  deploymentOptions?: string[];
  /**
   * @remarks
   * The deployment targets to which you want to deploy stacks in service-managed permission mode.
   * 
   * @example
   * {"RdFolderIds": ["fd-4PvlVLOL8v"]}
   */
  deploymentTargets?: UpdateStackGroupRequestDeploymentTargets;
  /**
   * @remarks
   * The description of the stack group.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * My Stack Group
   */
  description?: string;
  /**
   * @remarks
   * The name of the RAM execution role that is assumed by the administrator role (\\`AliyunROSStackGroupAdministrationRole\\`). This parameter is required when you create a stack group that has self-managed permissions. If you do not specify a value, \\`AliyunROSStackGroupExecutionRole\\` is used as the default value. ROS assumes this role to perform operations on the stacks in the stack group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The description of the operation to update the stack group.
   * 
   * @example
   * Update stack instances in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The preferences for the stack group operation.
   * 
   * The following parameters are included:
   * 
   * - FailureToleranceCount
   * 
   *   The number of accounts in each region where stack operation failures are allowed. If the number of failed operations in a region exceeds this value, Resource Orchestration Service (ROS) stops the operations in that region. If the operation is stopped in one region, the operation is not initiated in other regions.
   * 
   *   The value must be an integer from 0 to 20.
   * 
   *   If you do not specify this parameter, 0 is used as the default value.
   * 
   * - FailureTolerancePercentage
   * 
   *   The percentage of accounts in each region where stack operation failures are allowed. If the percentage of failed operations in a region exceeds this value, ROS stops the operations in that region.
   * 
   *   The value must be an integer from 0 to 100. If the percentage is not an integer, ROS rounds down the percentage to the nearest integer.
   * 
   *   If you do not specify this parameter, 0 is used as the default value.
   * 
   * - MaxConcurrentCount
   * 
   *   The maximum number of accounts in each region where stacks are deployed at the same time.
   * 
   *   The value must be an integer from 1 to 20.
   * 
   *   If you do not specify this parameter, 1 is used as the default value.
   * 
   * - MaxConcurrentPercentage
   * 
   *   The maximum percentage of accounts in each region where stacks are deployed at the same time.
   * 
   *   The value must be an integer from 1 to 100. If the percentage is not an integer, ROS rounds down the percentage to the nearest integer.
   * 
   *   If you do not specify this parameter, 1 is used as the default value.
   * 
   * - RegionConcurrencyType
   *   The concurrency type of deployment regions. Valid values:
   * 
   *   - SEQUENTIAL (default): Deploys stacks in the specified regions sequentially. At any given time, stacks are deployed in only one region.
   * 
   *   - PARALLEL: Deploys stacks in all the specified regions in parallel.
   * 
   * Separate multiple parameters with commas (,).
   * 
   * > - You can specify only one of \\`MaxConcurrentCount\\` and \\`MaxConcurrentPercentage\\`.
   * >
   * > - You can specify only one of \\`FailureToleranceCount\\` and \\`FailureTolerancePercentage\\`.
   * 
   * @example
   * {"FailureToleranceCount": 1,"MaxConcurrentCount": 2}
   */
  operationPreferences?: { [key: string]: any };
  /**
   * @remarks
   * The parameters of the stack group.
   */
  parameters?: UpdateStackGroupRequestParameters[];
  /**
   * @remarks
   * The permission model.
   * 
   * Valid values:
   * 
   * - SELF_MANAGED (default): Self-managed permissions. If you use this permission model, you must create RAM roles in the administrator and member accounts so that the accounts can be associated with each other. Then, you can deploy stacks in the member accounts.
   * 
   * - SERVICE_MANAGED: Service-managed permissions. If you use this permission model, ROS creates service-linked roles for the administrator and member accounts. The administrator account uses the service-linked roles to deploy stacks in the member accounts.
   * 
   * > * If stack instances exist in the stack group, you cannot change the permission model.
   * >
   * > * If you use the service-managed permission model to deploy stacks, the current account must be the management account or a delegated administrator account of your resource directory, and trusted access must be enabled for the account. For more information, see [Set a delegated administrator account](https://help.aliyun.com/document_detail/308253.html) and [Enable trusted access](https://help.aliyun.com/document_detail/298229.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The ID of the region where the stack group is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the regions where you want to deploy the stacks. You can specify a maximum of 20 region IDs.
   * 
   * @example
   * ["cn-hangzhou", "cn-beijing"]
   */
  regionIds?: string[];
  /**
   * @remarks
   * The name of the stack group. The name must be unique within a region.<br>The name can be up to 255 characters in length and must start with a digit or a letter. The name can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length. If the length of the template body is large, pass the parameter in the request body using the HTTP POST and Body Param method to prevent request failures caused by an excessively long URL.
   * 
   * > You can specify only one of the \\`TemplateBody\\`, \\`TemplateURL\\`, and \\`TemplateId\\` parameters.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared templates and private templates.
   * 
   * > You can specify only one of the \\`TemplateBody\\`, \\`TemplateURL\\`, and \\`TemplateId\\` parameters.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Alibaba Cloud Object Storage Service (OSS) bucket. The template body must be 1 to 524,288 bytes in length. For example, the URL of an OSS bucket can be oss\\://ros/template/demo or oss\\://ros/template/demo?RegionId=cn-hangzhou. If you do not specify the region of the OSS bucket, the value of the \\`RegionId\\` parameter is used.
   * 
   * > You can specify only one of the \\`TemplateBody\\`, \\`TemplateURL\\`, and \\`TemplateId\\` parameters.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * > \\`TemplateVersion\\` takes effect only when \\`TemplateId\\` is specified.
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
      deploymentOptions: 'DeploymentOptions',
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
      deploymentOptions: { 'type': 'array', 'itemType': 'string' },
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

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(this.autoDeployment && typeof (this.autoDeployment as any).validate === 'function') {
      (this.autoDeployment as any).validate();
    }
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    if(Array.isArray(this.deploymentOptions)) {
      $dara.Model.validateArray(this.deploymentOptions);
    }
    if(this.deploymentTargets && typeof (this.deploymentTargets as any).validate === 'function') {
      (this.deploymentTargets as any).validate();
    }
    if(this.operationPreferences) {
      $dara.Model.validateMap(this.operationPreferences);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

