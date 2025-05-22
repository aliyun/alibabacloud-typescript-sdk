// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackGroupResponseBodyStackGroupAutoDeployment } from "./GetStackGroupResponseBodyStackGroupAutoDeployment";
import { GetStackGroupResponseBodyStackGroupParameters } from "./GetStackGroupResponseBodyStackGroupParameters";
import { GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail } from "./GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail";


export class GetStackGroupResponseBodyStackGroup extends $dara.Model {
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

  validate() {
    if(this.autoDeployment && typeof (this.autoDeployment as any).validate === 'function') {
      (this.autoDeployment as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.rdFolderIds)) {
      $dara.Model.validateArray(this.rdFolderIds);
    }
    if(this.stackGroupDriftDetectionDetail && typeof (this.stackGroupDriftDetectionDetail as any).validate === 'function') {
      (this.stackGroupDriftDetectionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

