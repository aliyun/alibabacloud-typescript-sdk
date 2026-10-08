// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationLinkLogsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * [Check rds empty]\\nCheck rds databases: success\\n[Check source connectivity]\\nCheck ip connectable: success\\nCheck port connectable: success\\nCheck database connectable: success\\nCheck account replication privilege: success\\nCheck account createrole privilege: success\\nCheck account monitor privilege: success\\n[Check source version]\\nCheck major version consistent: success\\n[Check source glibc version]\\nCheck source glibc version compatible: warning(warning:source glibc version is not compatible with rds pg)\\n[Check disk size]\\nCheck disk size enough: success\\n[Check wal keep size]\\nCheck wal keep size large enough: success\\n[Check spec params]\\nCheck if spec params too large: success\\n [Check triggers]\\nCheck triggers compatible: success\\n[Check user functions]\\nCheck user functions compatible: success\\n*Migrate check success*
   */
  detail?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2022-02-25T06:57:41Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2022-03-01T06:39:51Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The synchronization information. This is a reserved field.
   * 
   * @example
   * None
   */
  replicationInfo?: string;
  /**
   * @remarks
   * The synchronization status. Valid values:
   * 
   * - **steaming**: Synchronizing.
   * - **finish**: Completed.
   * - **disconnect**: Disconnected.
   * 
   * @example
   * finish
   */
  replicationState?: string;
  /**
   * @remarks
   * The database account used for data synchronization.
   * 
   * @example
   * testdbuser
   */
  replicatorAccount?: string;
  /**
   * @remarks
   * The password of the synchronization account.
   * 
   * @example
   * testpassword
   */
  replicatorPassword?: string;
  /**
   * @remarks
   * The address of the source instance.
   * 
   * @example
   * pgm-****.pg.rds.aliyuncs.com
   */
  sourceAddress?: string;
  /**
   * @remarks
   * The category of the source instance. Valid values:
   * 
   * - other: Other.
   * - aliyunRDS: ApsaraDB RDS instance.
   * 
   * @example
   * aliyunRDS
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The port of the source instance.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The ID of the target instance.
   * 
   * @example
   * pgm-bp1l4dutw453****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8413252
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test01
   */
  taskName?: string;
  /**
   * @remarks
   * The task stage. Valid values:
   * 
   * - **precheck**: Dry run.
   * - **basebackup**: Basic backup.
   * - **startup**: Startup.
   * - **increment**: Incremental synchronization.
   * 
   * @example
   * increment
   */
  taskStage?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **success**: Succeeded.
   * - **failure**: Failed.
   * - **running**: Running.
   * 
   * @example
   * success
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **create**: Create a replication link.
   * - **create-dryrun**: Dry run for creating a replication link.
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
   * The instance ID.
   * 
   * @example
   * pgm-bp1trqb4p1xd****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The records.
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
   * The total number of records.
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

