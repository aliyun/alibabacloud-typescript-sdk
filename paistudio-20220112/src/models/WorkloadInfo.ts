// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueMeta } from "./QueueMeta";


export class WorkloadInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task is scheduled.
   */
  isScheduled?: string;
  /**
   * @remarks
   * The task priority.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The information about the queue where the task resides.
   */
  queueMetas?: QueueMeta[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that created the task.
   * 
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the RAM user that created the task.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The username of the task creator.
   * 
   * @example
   * test
   */
  userName?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  workloadCreatedTime?: string;
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
   * The task status.
   * 
   * @example
   * Running
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
   * The ID of the workspace where the task resides.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace where the task resides.
   * 
   * @example
   * myshellprod
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      isScheduled: 'IsScheduled',
      priority: 'Priority',
      queueMetas: 'QueueMetas',
      tenantId: 'TenantId',
      userId: 'UserId',
      userName: 'UserName',
      workloadCreatedTime: 'WorkloadCreatedTime',
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
      isScheduled: 'string',
      priority: 'number',
      queueMetas: { 'type': 'array', 'itemType': QueueMeta },
      tenantId: 'string',
      userId: 'string',
      userName: 'string',
      workloadCreatedTime: 'string',
      workloadId: 'string',
      workloadName: 'string',
      workloadStatus: 'string',
      workloadType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queueMetas)) {
      $dara.Model.validateArray(this.queueMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

