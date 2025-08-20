// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupResponseBodyStackGroupAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether stacks in the member account are retained when the member account is deleted from the folder.
   * 
   * Valid values:
   * 
   * *   true: The stacks are retained.
   * *   false: The stacks are deleted.
   * 
   * >  This parameter is returned only when the Enabled parameter is set to true.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The folder IDs of the resource directory. This parameter is used to deploy stack instances within all the accounts in the folders.
   * 
   * >  This parameter is returned only when the PermissionModel parameter is set to SERVICE_MANAGED.
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
   * The number of stack instances that have drifted.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift status of the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: At least one stack instance in the stack group has drifted.
   * *   NOT_CHECKED: No drift detection is completed on the stack group.
   * *   IN_SYNC: All the stack instances in the stack group are being synchronized.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The number of stack instances.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is specified when you create the stack group.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The status of drift detection on the stack group.
   * 
   * Valid values:
   * 
   * *   COMPLETED: Drift detection is performed and completed on all stack instances.
   * *   FAILED: Drift detection is performed. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * *   PARTIAL_SUCCESS: Drift detection is performed. The number of stack instances that failed the drift detection does not exceed the specified threshold.
   * *   IN_PROGRESS: Drift detection is being performed on the stack group.
   * *   STOPPED: Drift detection is canceled for the stack group.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that were being synchronized.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances for which drift detection was canceled.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which drift detection was being performed.
   * 
   * @example
   * DRIFTED
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The number of stack instances that failed drift detection.
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

export class GetStackGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the stack group.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the stack group.
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

