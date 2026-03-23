// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationLinkLogsResponseBodyItems extends $dara.Model {
  detail?: string;
  gmtCreated?: string;
  gmtModified?: string;
  replicationInfo?: string;
  replicationState?: string;
  replicatorAccount?: string;
  replicatorPassword?: string;
  sourceAddress?: string;
  sourceCategory?: string;
  sourcePort?: number;
  targetInstanceId?: string;
  taskId?: number;
  taskName?: string;
  taskStage?: string;
  taskStatus?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      replicationInfo: 'ReplicationInfo',
      replicationState: 'ReplicationState',
      replicatorAccount: 'ReplicatorAccount',
      replicatorPassword: 'ReplicatorPassword',
      sourceAddress: 'SourceAddress',
      sourceCategory: 'SourceCategory',
      sourcePort: 'SourcePort',
      targetInstanceId: 'TargetInstanceId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStage: 'TaskStage',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      replicationInfo: 'string',
      replicationState: 'string',
      replicatorAccount: 'string',
      replicatorPassword: 'string',
      sourceAddress: 'string',
      sourceCategory: 'string',
      sourcePort: 'number',
      targetInstanceId: 'string',
      taskId: 'number',
      taskName: 'string',
      taskStage: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationLinkLogsResponseBody extends $dara.Model {
  DBInstanceId?: string;
  items?: DescribeReplicationLinkLogsResponseBodyItems[];
  requestId?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      requestId: 'RequestId',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: { 'type': 'array', 'itemType': DescribeReplicationLinkLogsResponseBodyItems },
      requestId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

