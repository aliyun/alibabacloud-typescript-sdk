// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupResponseBodyStackGroupAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled or disabled.
   * 
   * Valid values:
   * 
   * - true: Automatic deployment is enabled. If you add a new member account to the folder, the stack group automatically deploys stack instances in the specified region of the new account. If you remove a member account from the folder, the stack group automatically deletes stack instances from the specified region of the account.
   * 
   * - false: Automatic deployment is disabled. After automatic deployment is disabled, the stack instances remain unchanged when the member accounts in the folder change.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether to retain the stacks in the member account when the member account is removed from the folder.
   * 
   * Valid values:
   * 
   * - true: retains the stacks.
   * 
   * - false: deletes the stacks.
   * 
   * > This parameter is returned only if Enabled is set to true.
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

export class GetStackGroupResponseBodyStackGroupParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * Amount
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
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

export class GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail extends $dara.Model {
  /**
   * @remarks
   * The number of stack instances for which the drift detection operation was canceled.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift detection status of the stack group.
   * 
   * Valid values:
   * 
   * - COMPLETED: The drift detection operation is completed for the stack group. All stack instances have been successfully drift-detected.
   * 
   * - FAILED: The drift detection operation is completed for the stack group. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * 
   * - PARTIAL_SUCCESS: The drift detection operation is completed for the stack group. The drift detection operation failed for some stack instances, but the number of failures did not exceed the threshold.
   * 
   * - IN_PROGRESS: The drift detection operation is in progress for the stack group.
   * 
   * - STOPPED: The drift detection operation on the stack group was canceled.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The time when the drift detection operation was performed on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The number of stack instances that are in the DRIFTED state.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances for which the drift detection operation failed.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which a drift detection operation is in progress.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that are in the IN_SYNC state.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The drift status of the stack group.
   * 
   * Valid values:
   * 
   * - DRIFTED: At least one stack instance has drifted.
   * 
   * - NOT_CHECKED: No successful drift detection has been performed on the stack group.
   * 
   * - IN_SYNC: All stack instances are in the IN_SYNC state.
   * 
   * @example
   * DRIFTED
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The number of stack instances.
   * 
   * @example
   * 2
   */
  totalStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      totalStackInstancesCount: 'TotalStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      driftDetectionTime: 'string',
      driftedStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      stackGroupDriftStatus: 'string',
      totalStackInstancesCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM administrator role that is assumed by ROS. This parameter is specified when you create a stack group in self-managed permission mode. If you do not specify this parameter, the default value AliyunROSStackGroupAdministrationRole is returned.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The information about automatic deployment settings.
   * 
   * > This parameter is returned only if PermissionModel is set to SERVICE_MANAGED.
   */
  autoDeployment?: GetStackGroupResponseBodyStackGroupAutoDeployment;
  /**
   * @remarks
   * The time when the stack group was created.
   * 
   * @example
   * 2024-06-14T02:13:50
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the stack group.
   * 
   * @example
   * StackGroup Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the RAM execution role that is assumed by the administrator role AliyunROSStackGroupAdministrationRole. This parameter is specified when you create a stack group in self-managed permission mode. If you do not specify this parameter, the default value AliyunROSStackGroupExecutionRole is returned.
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The list of the parameters of the stack group.
   */
  parameters?: GetStackGroupResponseBodyStackGroupParameters[];
  /**
   * @remarks
   * The permission model.
   * 
   * Valid values:
   * 
   * - SELF_MANAGED: self-managed permissions.
   * 
   * - SERVICE_MANAGED: service-managed permissions.
   * 
   * > For more information about the permission models of stack groups, refer to [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The IDs of the folders in the resource directory. Stack instances are deployed in all the accounts in the folders.
   * 
   * > This parameter is returned only if PermissionModel is set to SERVICE_MANAGED.
   */
  rdFolderIds?: string[];
  /**
   * @remarks
   * The ID of the resource group. This value is determined by the resource group ID that you specify when you create the stack group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details of the last successful drift detection operation on the stack group.
   */
  stackGroupDriftDetectionDetail?: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The status of the stack group.
   * 
   * Valid values:
   * 
   * - ACTIVE: The stack group is active.
   * 
   * - DELETED: The stack group is deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The structure of the template body.
   * 
   * > We recommend that you do not use this parameter. Use TemplateContent instead.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The structure of the template body. The structure is in the JSON format. For more information, refer to [Template syntax](https://help.aliyun.com/document_detail/28857.html).
   * 
   * @example
   * {
   *       "ROSTemplateFormatVersion": "2015-09-01"
   * }
   */
  templateContent?: string;
  /**
   * @remarks
   * The time when the stack group was updated.
   * 
   * @example
   * 2024-06-15T02:01:00
   */
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

export class GetStackGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the stack group.
   */
  stackGroup?: GetStackGroupResponseBodyStackGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroup: 'StackGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroup: GetStackGroupResponseBodyStackGroup,
    };
  }

  validate() {
    if(this.stackGroup && typeof (this.stackGroup as any).validate === 'function') {
      (this.stackGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

