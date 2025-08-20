// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of the members in the resource directory.
   * 
   * > This parameter is returned only if AccountIds is specified when the [UpdateStackInstances](https://help.aliyun.com/document_detail/151716.html) operation is called to update stack instances.
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

export class GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences extends $dara.Model {
  /**
   * @remarks
   * The number of accounts within which stack operation failures are allowed to occur in each region. If the value of this parameter is exceeded in a region, Resource Orchestration Service (ROS) stops the operation in the region. If the operation is stopped in one region, the operation is no longer performed in other regions.
   * 
   * Valid values: 0 to 20.
   * 
   * > Only one of FailureToleranceCount and FailureTolerancePercentage can be returned.
   * 
   * @example
   * 1
   */
  failureToleranceCount?: number;
  /**
   * @remarks
   * The percentage of the number of accounts within which stack operation failures are allowed to occur to the total number of accounts in each region. If the value of this parameter is exceeded in a region, ROS stops the operation in the region.
   * 
   * Valid values: 0 to 100.
   * 
   * > Only one of FailureToleranceCount and FailureTolerancePercentage can be returned.
   * 
   * @example
   * 10
   */
  failureTolerancePercentage?: number;
  /**
   * @remarks
   * The maximum number of accounts within which stacks are deployed at the same time in each region.
   * 
   * Valid values: 1 to 20.
   * 
   * > Only one of MaxConcurrentCount and MaxConcurrentPercentage can be returned.
   * 
   * @example
   * 1
   */
  maxConcurrentCount?: number;
  /**
   * @remarks
   * The percentage of the maximum number of accounts within which stacks are deployed at the same time to the total number of accounts in each region.
   * 
   * Valid values: 1 to 100.
   * 
   * > Only one of MaxConcurrentCount and MaxConcurrentPercentage can be returned.
   * 
   * @example
   * 10
   */
  maxConcurrentPercentage?: number;
  /**
   * @remarks
   * The regions in the order of operation execution.
   */
  regionIdsOrder?: string[];
  static names(): { [key: string]: string } {
    return {
      failureToleranceCount: 'FailureToleranceCount',
      failureTolerancePercentage: 'FailureTolerancePercentage',
      maxConcurrentCount: 'MaxConcurrentCount',
      maxConcurrentPercentage: 'MaxConcurrentPercentage',
      regionIdsOrder: 'RegionIdsOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureToleranceCount: 'number',
      failureTolerancePercentage: 'number',
      maxConcurrentCount: 'number',
      maxConcurrentPercentage: 'number',
      regionIdsOrder: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regionIdsOrder)) {
      $dara.Model.validateArray(this.regionIdsOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail extends $dara.Model {
  /**
   * @remarks
   * The number of stack instances for which drift detection was canceled.
   * 
   * @example
   * 0
   */
  cancelledStackInstancesCount?: number;
  /**
   * @remarks
   * The drift detection state.
   * 
   * Valid values:
   * 
   * *   COMPLETED: Drift detection is performed on the stack group and all stack instances passed the drift detection.
   * *   FAILED: Drift detection is performed on the stack group. The number of stack instances that failed the drift detection exceeds the specified threshold.
   * *   PARTIAL_SUCCESS: Drift detection is performed on the stack group. The number of stack instances that failed the drift detection does not exceed the specified threshold.
   * *   IN_PROGRESS: Drift detection is being performed on the stack group.
   * *   STOPPED: Drift detection is canceled for the stack group.
   * 
   * @example
   * COMPLETED
   */
  driftDetectionStatus?: string;
  /**
   * @remarks
   * The time when drift detection was performed.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The number of stack instances that have drifted.
   * 
   * @example
   * 1
   */
  driftedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that failed drift detection.
   * 
   * @example
   * 0
   */
  failedStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances on which drift detection was being performed.
   * 
   * @example
   * 0
   */
  inProgressStackInstancesCount?: number;
  /**
   * @remarks
   * The number of stack instances that were being synchronized.
   * 
   * @example
   * 1
   */
  inSyncStackInstancesCount?: number;
  /**
   * @remarks
   * The drift state of the stack group.
   * 
   * Valid values:
   * 
   * *   DRIFTED: At least one stack instance in the stack group has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed in the stack group.
   * *   IN_SYNC: All the stack instances in the stack group are being synchronized.
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

export class GetStackGroupOperationResponseBodyStackGroupOperation extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   CREATE
   * *   UPDATE
   * *   DELETE
   * *   DETECT_DRIFT
   * 
   * @example
   * DELETE
   */
  action?: string;
  /**
   * @remarks
   * The name of the RAM role that you specify for the administrator account when you create the self-managed stack group. ROS assumes the administrator role to perform operations. If this parameter is not specified, the default value AliyunROSStackGroupAdministrationRole is returned.
   * 
   * @example
   * AliyunROSStackGroupAdministrationRole
   */
  administrationRoleName?: string;
  /**
   * @remarks
   * The time when the operation was initiated.
   * 
   * @example
   * 2020-01-20T09:22:3
   */
  createTime?: string;
  /**
   * @remarks
   * The destinations to deploy stack instances when the stack is granted service-managed permissions.
   */
  deploymentTargets?: GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets;
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 2020-01-20T09:22:4
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the RAM role that you specify for the execution account when you create the self-managed stack group. The administrator role AliyunROSStackGroupAdministrationRole assumes the execution role to perform operations. If this parameter is not specified, the default value AliyunROSStackGroupExecutionRole is returned.
   * 
   * @example
   * AliyunROSStackGroupExecutionRole
   */
  executionRoleName?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * > This parameter is returned only if OperationDescription is specified when the [CreateStackInstances](https://help.aliyun.com/document_detail/151338.html) operation is called to create stack instances.
   * 
   * @example
   * Create stack instance in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * 6da106ca-1784-4a6f-a7e1-e723863d****
   */
  operationId?: string;
  /**
   * @remarks
   * The operation settings.
   */
  operationPreferences?: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences;
  /**
   * @remarks
   * Indicates whether stacks are retained when the associated stack instances are deleted. When you delete a stack instance, you can choose to delete or retain the stack with which the stack instance is associated.
   * 
   * Valid values:
   * 
   * *   true: Stacks are retained when the associated stack instances are deleted.
   * *   false: Stacks are deleted when the associated stack instances are deleted. Proceed with caution.
   * 
   * > This parameter is returned only if you delete stack instances.
   * 
   * @example
   * true
   */
  retainStacks?: boolean;
  /**
   * @remarks
   * The information about drift detection.
   * 
   * > This parameter is returned only if drift detection is performed.
   */
  stackGroupDriftDetectionDetail?: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail;
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
   * The state of the operation.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   SUCCEEDED
   * *   FAILED
   * *   STOPPING
   * *   STOPPED
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      administrationRoleName: 'AdministrationRoleName',
      createTime: 'CreateTime',
      deploymentTargets: 'DeploymentTargets',
      endTime: 'EndTime',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      operationPreferences: 'OperationPreferences',
      retainStacks: 'RetainStacks',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      administrationRoleName: 'string',
      createTime: 'string',
      deploymentTargets: GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets,
      endTime: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationId: 'string',
      operationPreferences: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences,
      retainStacks: 'boolean',
      stackGroupDriftDetectionDetail: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail,
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.deploymentTargets && typeof (this.deploymentTargets as any).validate === 'function') {
      (this.deploymentTargets as any).validate();
    }
    if(this.operationPreferences && typeof (this.operationPreferences as any).validate === 'function') {
      (this.operationPreferences as any).validate();
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

export class GetStackGroupOperationResponseBody extends $dara.Model {
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
   * The information about the stack group operation.
   */
  stackGroupOperation?: GetStackGroupOperationResponseBodyStackGroupOperation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupOperation: 'StackGroupOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupOperation: GetStackGroupOperationResponseBodyStackGroupOperation,
    };
  }

  validate() {
    if(this.stackGroupOperation && typeof (this.stackGroupOperation as any).validate === 'function') {
      (this.stackGroupOperation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

