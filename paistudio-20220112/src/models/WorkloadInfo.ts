// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueMeta } from "./QueueMeta";


export class WorkloadInfo extends $dara.Model {
  isScheduled?: string;
  priority?: number;
  queueMetas?: QueueMeta[];
  tenantId?: string;
  userId?: string;
  userName?: string;
  workloadCreatedTime?: string;
  workloadId?: string;
  workloadName?: string;
  workloadStatus?: string;
  workloadType?: string;
  workspaceId?: string;
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

