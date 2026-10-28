// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QueueInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * roleMaximumResource
   */
  code?: string;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * ConfigRule
   */
  codeType?: string;
  /**
   * @remarks
   * The task creation time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The dequeue time.
   * 
   * @example
   * "2023-06-22T00:00:00Z"
   */
  gmtDequeuedTime?: string;
  /**
   * @remarks
   * The enqueue time.
   * 
   * @example
   * “2023-06-22T00:00:00Z”
   */
  gmtEnqueuedTime?: string;
  /**
   * @remarks
   * The queue position change time.
   * 
   * @example
   * "2023-06-22T00:00:00Z"
   */
  gmtPositionModifiedTime?: string;
  /**
   * @remarks
   * The name of the underlying QueueUnit.
   * 
   * @example
   * test-label-79f5498dd-9qrzs
   */
  name?: string;
  /**
   * @remarks
   * The queue position.
   * 
   * @example
   * 10
   */
  position?: number;
  /**
   * @remarks
   * The task priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The dequeue strategy of the queue.
   * 
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @remarks
   * The quota used by the task.
   * 
   * @example
   * “quotamtl37ge7gkvdz”
   */
  quotaId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Current GPU Limit is 5, limited by Role PAI.AlgoDeveloper
   */
  reason?: string;
  /**
   * @remarks
   * The resource usage.
   */
  resource?: ResourceAmount;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Enqueued
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the task uses idle resources. Valid values:
   * - true: Used.
   * - false: Not used.
   */
  useOversoldResource?: boolean;
  /**
   * @remarks
   * The creator information.
   * 
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  userName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * dlcxxxx
   */
  workloadId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test-job
   */
  workloadName?: string;
  /**
   * @remarks
   * The specific status of DLC, DSW, or EAS.
   * 
   * @example
   * PreAllocation
   */
  workloadStatus?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @remarks
   * The workspace of the task.
   * 
   * @example
   * “432524”
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace where the task resides.
   * 
   * @example
   * pai_dlc
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeType: 'CodeType',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtDequeuedTime: 'GmtDequeuedTime',
      gmtEnqueuedTime: 'GmtEnqueuedTime',
      gmtPositionModifiedTime: 'GmtPositionModifiedTime',
      name: 'Name',
      position: 'Position',
      priority: 'Priority',
      queueStrategy: 'QueueStrategy',
      quotaId: 'QuotaId',
      reason: 'Reason',
      resource: 'Resource',
      status: 'Status',
      useOversoldResource: 'UseOversoldResource',
      userId: 'UserId',
      userName: 'UserName',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadStatus: 'WorkloadStatus',
      workloadType: 'WorkloadType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeType: 'string',
      gmtCreatedTime: 'string',
      gmtDequeuedTime: 'string',
      gmtEnqueuedTime: 'string',
      gmtPositionModifiedTime: 'string',
      name: 'string',
      position: 'number',
      priority: 'number',
      queueStrategy: 'string',
      quotaId: 'string',
      reason: 'string',
      resource: ResourceAmount,
      status: 'string',
      useOversoldResource: 'boolean',
      userId: 'string',
      userName: 'string',
      workloadId: 'string',
      workloadName: 'string',
      workloadStatus: 'string',
      workloadType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

