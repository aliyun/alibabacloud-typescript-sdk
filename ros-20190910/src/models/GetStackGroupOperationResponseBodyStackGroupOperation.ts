// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets } from "./GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets";
import { GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences } from "./GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences";
import { GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail } from "./GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail";


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

