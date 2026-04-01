// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationLinkLogsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The details of the task.
   * 
   * @example
   * [Check rds empty]\\nCheck rds databases: success\\n[Check source connectivity]\\nCheck ip connectable: success\\nCheck port connectable: success\\nCheck database connectable: success\\nCheck account replication privilege: success\\nCheck account createrole privilege: success\\nCheck account monitor privilege: success\\n[Check source version]\\nCheck major version consistent: success\\n[Check source glibc version]\\nCheck source glibc version compatible: warning(warning:source glibc version is not compatible with rds pg)\\n[Check disk size]\\nCheck disk size enough: success\\n[Check wal keep size]\\nCheck wal keep size large enough: success\\n[Check spec params]\\nCheck if spec params too large: success\\n [Check triggers]\\nCheck triggers compatible: success\\n[Check user functions]\\nCheck user functions compatible: success\\n*Migrate check success*
   */
  detail?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2022-02-25T06:57:41Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-01T06:39:51Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The synchronization information. This parameter is a reserved parameter.
   * 
   * @example
   * None
   */
  replicationInfo?: string;
  /**
   * @remarks
   * The status of the synchronization. Valid values:
   * 
   * *   **steaming**: The synchronization is in progress.
   * *   **finish**: The synchronization is complete.
   * *   **disconnect**: The synchronization is disconnected.
   * 
   * @example
   * finish
   */
  replicationState?: string;
  /**
   * @remarks
   * The account of the database that is used for data synchronization.
   * 
   * @example
   * testdbuser
   */
  replicatorAccount?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * @example
   * testpassword
   */
  replicatorPassword?: string;
  /**
   * @remarks
   * The endpoint of the source instance.
   * 
   * @example
   * pgm-****.pg.rds.aliyuncs.com
   */
  sourceAddress?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   other: other instances
   * *   aliyunRDS: an ApsaraDB RDS instance
   * 
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The port number of the source instance.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * @example
   * pgm-bp1l4dutw453****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 8413252
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test01
   */
  taskName?: string;
  /**
   * @remarks
   * The stage of the task. Valid values:
   * 
   * *   **precheck**: the precheck stage.
   * *   **basebackup**: the basic backup stage.
   * *   **startup**: the startup stage.
   * *   **increment**: the incremental synchronization stage.
   * 
   * @example
   * increment
   */
  taskStage?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **success**
   * *   **failure**
   * *   **running**
   * 
   * @example
   * success
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **create**: creates a synchronization link.
   * *   **create-dryrun**: performs a precheck before a synchronization link is created.
   * 
   * @example
   * create
   */
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
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * pgm-bp1trqb4p1xd****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The items.
   */
  items?: DescribeReplicationLinkLogsResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16C62438-491B-5C02-9B49-BA924A1372A2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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

