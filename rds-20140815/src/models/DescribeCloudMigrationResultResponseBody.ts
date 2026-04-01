// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationResultResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The details about the migration task.
   * 
   * @example
   * [Check rds empty]\\nCheck rds databases: success\\n[Check source connectivity]\\nCheck ip connectable: success\\nCheck port connectable: success\\nCheck database connectable: success\\nCheck account replication privilege: success\\nCheck account createrole privilege: success\\nCheck account monitor privilege: success\\n[Check source version]\\nCheck major version consistent: success\\n[Check source glibc version]\\nCheck source glibc version compatible: warning(warning:source glibc version is not compatible with rds pg)\\n[Check disk size]\\nCheck disk size enough: success\\n[Check wal keep size]\\nCheck wal keep size large enough: success\\n[Check spec params]\\nCheck if spec params too large: success\\n[Start RDS instance]\\n2022-02-25 17:00:29 --- Start RDS instance as slave for data replication\\n[Synchronize data]\\n2022-02-25 17:01:05 --- Synchronize data from source to RDS by streaming replication \\n
   */
  detail?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-02-25T08:53:13Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-03-01T06:39:51Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The migration phase of the migration task.
   * 
   * *   **precheck**: precheck
   * *   **basebackup**: full data backup
   * *   **startup**: link establishment
   * *   **increment**: incremental data synchronization
   * *   **switch**: cloud migration-triggered switchover
   * *   **success**: cloud migration completed
   * 
   * @example
   * switch
   */
  migrateStage?: string;
  /**
   * @remarks
   * The information about the replication link.
   * 
   * @example
   * {\\"Status\\":\\"streaming\\",\\"ReceiveStartLsn\\":\\"0/3000000\\",\\"ReceivedTli\\":\\"1\\",\\"LatestEndTime\\":\\"2022-02-25 17:03:59.3344+08\\",\\"Synced\\":\\"true\\",\\"IsSlave\\":\\"true\\",\\"ReplayTimestamp\\":\\"null\\",\\"LastMsgSendTime\\":\\"2022-03-01 14:42:57.967537+08\\",\\"Conninfo\\":\\"user=migratetest password=******** channel_binding=prefer dbname=replication host=172.16.254.203 port=5432 application_name=rds_db_instance fallback_application_name=walreceiver sslmode=prefer sslcompression=1 sslsni=1 ssl_min_protocol_version=TLSv1.2 gssencmode=prefer krbsrvname=postgres target_session_attrs=any\\",\\"LastMsgReceiptTime\\":\\"2022-03-01 14:42:57.96727+08\\",\\"LatestEndLsn\\":\\"0/3000148\\",\\"ReceivedLsn\\":\\"0/3000148\\",\\"ReplayLsn\\":\\"0/3000148\\",\\"ReceiveStartTli\\":\\"1\\",\\"ReplayLag\\":\\"0\\"}
   */
  replicationInfo?: string;
  /**
   * @remarks
   * The status of data replication.
   * 
   * *   **unstarted**
   * *   **catchup**
   * *   **streaming**
   * *   **disconnect**
   * *   **finish**
   * 
   * @example
   * streaming
   */
  replicationState?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * migratetest
   */
  sourceAccount?: string;
  /**
   * @remarks
   * The environment in which the self-managed PostgreSQL instance runs.
   * 
   * *   **idcOnVpc**: The self-managed PostgreSQL instance resides in a data center. The data center can communicate with the VPC to which the ApsaraDB RDS for PostgreSQL instance belongs.
   * *   **ecsOnVpc**: The self-managed PostgreSQL instance resides on an ECS instance.
   * 
   * @example
   * ecsonvpc
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The private IP address that is used to connect to the self-managed PostgreSQL instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * 123456
   */
  sourcePassword?: string;
  /**
   * @remarks
   * The port number that is used to connect to the self-managed PostgreSQL instance.
   * 
   * @example
   * 5432
   */
  sourcePort?: number;
  /**
   * @remarks
   * The time when the switchover was performed.
   * 
   * @example
   * 2022-03-01T06:40:51Z
   */
  switchTime?: string;
  /**
   * @remarks
   * A reserved parameter. The return value of this parameter is empty.
   * 
   * @example
   * null
   */
  targetEip?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * pgm-bp102g323jd4****
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 440437220
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 362c6c7a-4d20-4eac-898c-1495ceab374c
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      migrateStage: 'MigrateStage',
      replicationInfo: 'ReplicationInfo',
      replicationState: 'ReplicationState',
      sourceAccount: 'SourceAccount',
      sourceCategory: 'SourceCategory',
      sourceIpAddress: 'SourceIpAddress',
      sourcePassword: 'SourcePassword',
      sourcePort: 'SourcePort',
      switchTime: 'SwitchTime',
      targetEip: 'TargetEip',
      targetInstanceName: 'TargetInstanceName',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      migrateStage: 'string',
      replicationInfo: 'string',
      replicationState: 'string',
      sourceAccount: 'string',
      sourceCategory: 'string',
      sourceIpAddress: 'string',
      sourcePassword: 'string',
      sourcePort: 'number',
      switchTime: 'string',
      targetEip: 'string',
      targetInstanceName: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMigrationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the cloud migration task.
   */
  items?: DescribeCloudMigrationResultResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1B983C48-9793-5EAA-8F7F-00EAEC517675
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
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCloudMigrationResultResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
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

