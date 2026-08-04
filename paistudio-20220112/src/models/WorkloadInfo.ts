// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueMeta } from "./QueueMeta";


export class WorkloadInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the workload is scheduled. Valid values are `true` and `false`.
   */
  isScheduled?: string;
  /**
   * @remarks
   * The scheduling priority of the workload. A higher value indicates a higher priority.
   */
  priority?: number;
  /**
   * @remarks
   * A list of metadata for the queues associated with the workload.
   */
  queueMetas?: QueueMeta[];
  /**
   * @remarks
   * The ID of the tenant that contains the workload.
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user who created the workload.
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user who created the workload.
   */
  userName?: string;
  /**
   * @remarks
   * The creation time of the workload, in UTC format.
   */
  workloadCreatedTime?: string;
  /**
   * @remarks
   * The unique, system-generated ID for the workload.
   */
  workloadId?: string;
  /**
   * @remarks
   * The user-defined name of the workload.
   */
  workloadName?: string;
  /**
   * @remarks
   * The current status of the workload. Possible values include `Pending`, `Running`, `Succeeded`, and `Failed`.
   */
  workloadStatus?: string;
  /**
   * @remarks
   * The type of the workload.
   */
  workloadType?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the workload.
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace that contains the workload.
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

