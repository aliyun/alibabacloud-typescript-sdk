// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStackGroupRequestAutoDeployment } from "./UpdateStackGroupRequestAutoDeployment";
import { UpdateStackGroupRequestDeploymentTargets } from "./UpdateStackGroupRequestDeploymentTargets";
import { UpdateStackGroupRequestParameters } from "./UpdateStackGroupRequestParameters";


export class UpdateStackGroupRequest extends $dara.Model {
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
  deploymentOptions?: string[];
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

