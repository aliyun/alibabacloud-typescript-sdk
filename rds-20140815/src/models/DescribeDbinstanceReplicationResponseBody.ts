// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceReplicationResponseBodySlaveStatusList extends $dara.Model {
  /**
   * @remarks
   * The name of the replication channel.
   * 
   * @example
   * my_test_channel
   */
  channelName?: string;
  /**
   * @remarks
   * The executed GTID set.
   * 
   * @example
   * bd2a34b9-8b8d-11ef-8917-00163e1298b9:1-20567
   */
  executedGtidSet?: string;
  /**
   * @remarks
   * The last error code.
   * 
   * @example
   * 0
   */
  lastErrno?: number;
  /**
   * @remarks
   * The last error code of the I/O thread.
   * 
   * @example
   * 0
   */
  lastIoErrno?: number;
  /**
   * @remarks
   * The last error message of the I/O thread.
   * 
   * @example
   * error connecting to master \\"user@192.0.2.1:3306\\" - retry-time: 60  retries: 5
   */
  lastIoError?: string;
  /**
   * @remarks
   * The last error code of the SQL thread.
   * 
   * @example
   * 0
   */
  lastSqlErrno?: number;
  /**
   * @remarks
   * The last error message of the SQL thread.
   * 
   * @example
   * Coordinator stopped because there were error(s) in the worker(s). The most recent failure being: Worker 1 failed executing transaction \\"00000000-0000-0000-0000-000000000000:1\\" at source log mysql-bin.000001, end_log_pos 12345. See error log and/or performance_schema.replication_applier_status_by_worker table for more details about this failure or others, if any.
   */
  lastSqlError?: string;
  /**
   * @remarks
   * The address of the primary database.
   * 
   * @example
   * 192.168.10.100
   */
  masterHost?: string;
  /**
   * @remarks
   * The account of the primary database.
   * 
   * @example
   * repl_user
   */
  masterUser?: string;
  /**
   * @remarks
   * The UUID of the primary database.
   * 
   * @example
   * bd2a34b9-8b8d-11ef-8917-00163e1298b9
   */
  masterUuid?: string;
  /**
   * @remarks
   * The databases included in replication.
   * 
   * @example
   * test_db,test_db_1
   */
  replicateDoDb?: string;
  /**
   * @remarks
   * The tables included in replication.
   * 
   * @example
   * test_table,test_table_1
   */
  replicateDoTable?: string;
  /**
   * @remarks
   * The databases ignored in replication.
   * 
   * @example
   * information_schema,performance_schema
   */
  replicateIgnoreDb?: string;
  /**
   * @remarks
   * The tables ignored in replication.
   * 
   * @example
   * temp_table,temp_table_1
   */
  replicateIgnoreTable?: string;
  /**
   * @remarks
   * The tables included in replication. Wildcards are supported.
   * 
   * @example
   * test_table.%
   */
  replicateWildDoTable?: string;
  /**
   * @remarks
   * The tables ignored in replication. Wildcards are supported.
   * 
   * @example
   * temp_table.%
   */
  replicateWildIgnoreTable?: string;
  /**
   * @remarks
   * The data delay, in seconds.
   * 
   * @example
   * 0
   */
  secondsBehindMaster?: number;
  /**
   * @remarks
   * The running status of the replication I/O thread.
   * 
   * @example
   * Yes
   */
  slaveIoRunning?: string;
  /**
   * @remarks
   * The state of the replication I/O thread.
   * 
   * @example
   * Waiting for master to send event
   */
  slaveIoState?: string;
  /**
   * @remarks
   * The running status of the replication SQL thread.
   * 
   * @example
   * Yes
   */
  slaveSqlRunning?: string;
  /**
   * @remarks
   * The running status of the replication SQL thread.
   * 
   * @example
   * Slave has read all relay log; waiting for more updates
   */
  slaveSqlRunningState?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      executedGtidSet: 'ExecutedGtidSet',
      lastErrno: 'LastErrno',
      lastIoErrno: 'LastIoErrno',
      lastIoError: 'LastIoError',
      lastSqlErrno: 'LastSqlErrno',
      lastSqlError: 'LastSqlError',
      masterHost: 'MasterHost',
      masterUser: 'MasterUser',
      masterUuid: 'MasterUuid',
      replicateDoDb: 'ReplicateDoDb',
      replicateDoTable: 'ReplicateDoTable',
      replicateIgnoreDb: 'ReplicateIgnoreDb',
      replicateIgnoreTable: 'ReplicateIgnoreTable',
      replicateWildDoTable: 'ReplicateWildDoTable',
      replicateWildIgnoreTable: 'ReplicateWildIgnoreTable',
      secondsBehindMaster: 'SecondsBehindMaster',
      slaveIoRunning: 'SlaveIoRunning',
      slaveIoState: 'SlaveIoState',
      slaveSqlRunning: 'SlaveSqlRunning',
      slaveSqlRunningState: 'SlaveSqlRunningState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      executedGtidSet: 'string',
      lastErrno: 'number',
      lastIoErrno: 'number',
      lastIoError: 'string',
      lastSqlErrno: 'number',
      lastSqlError: 'string',
      masterHost: 'string',
      masterUser: 'string',
      masterUuid: 'string',
      replicateDoDb: 'string',
      replicateDoTable: 'string',
      replicateIgnoreDb: 'string',
      replicateIgnoreTable: 'string',
      replicateWildDoTable: 'string',
      replicateWildIgnoreTable: 'string',
      secondsBehindMaster: 'number',
      slaveIoRunning: 'string',
      slaveIoState: 'string',
      slaveSqlRunning: 'string',
      slaveSqlRunningState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceReplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether native replication mode is enabled. Valid values:
   * - **ON**: Enabled.
   * - **OFF**: Disabled.
   * 
   * @example
   * ON
   */
  externalReplication?: string;
  /**
   * @remarks
   * The executed global transaction identifier.
   * 
   * @example
   * bd2a34b9-8b8d-11ef-8917-00163e1298b9:1-20567
   */
  gtidExecuted?: string;
  /**
   * @remarks
   * The import status, which indicates whether full data is successfully imported.
   * 
   * @example
   * COMPLETED
   */
  importStatus?: string;
  /**
   * @remarks
   * The current replication delay, in seconds.
   * 
   * @example
   * 0
   */
  replicationDelay?: string;
  /**
   * @remarks
   * The replication error message.
   * 
   * @example
   * Got fatal error 1236 from master when reading data from binary log...
   */
  replicationErrorMessage?: string;
  /**
   * @remarks
   * The IP address of the replication endpoint.
   * 
   * @example
   * 192.168.10.x
   */
  replicationIp?: string;
  /**
   * @remarks
   * The port of the replication endpoint.
   * 
   * @example
   * 3306
   */
  replicationPort?: string;
  /**
   * @remarks
   * The replication source for native replication.
   * 
   * @example
   * 192.168.XX.XX
   */
  replicationSource?: string;
  /**
   * @remarks
   * The current replication state. Valid values:
   * 
   * - **Running**: Running.
   * - **Connecting**: Connecting.
   * - **Stopped**: Stopped.
   * - **Error**: Error.
   * 
   * @example
   * Stopped
   */
  replicationState?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  /**
   * @remarks
   * The replication status information returned by the SHOW SLAVE STATUS statement for the instance.
   * 
   * @example
   * [{"SlaveIoRunning": "Yes", "SlaveSqlRunning": "Yes", "SecondsBehindMaster": 0, "SlaveIoState": "Waiting for master to send event", "SlaveSqlRunningState": "Slave has read all relay log; waiting for more updates", "ExecutedGtidSet": "bd2a34b9-8b8d-11ef-8917-00163e1298b9:1-20567", "MasterHost": "192.168.10.100", "MasterUser": "repl_user", "MasterUuid": "bd2a34b9-8b8d-11ef-8917-00163e1298b9", "LastErrno": 0, "LastSqlErrno": 0, "LastIoErrno": 0, "LastSqlError": "", "LastIoError": "", "ChannelName": "my_test_channel", "ReplicateDoDb": "test_db,test_db_1", "ReplicateIgnoreDb": "information_schema,performance_schema", "ReplicateDoTable": "test_table,test_table_1", "ReplicateIgnoreTable": "temp_table,temp_table_1", "ReplicateWildDoTable": "test_table.%", "ReplicateWildIgnoreTable": "temp_table.%"}]
   */
  slaveStatusList?: DescribeDBInstanceReplicationResponseBodySlaveStatusList[];
  static names(): { [key: string]: string } {
    return {
      externalReplication: 'ExternalReplication',
      gtidExecuted: 'GtidExecuted',
      importStatus: 'ImportStatus',
      replicationDelay: 'ReplicationDelay',
      replicationErrorMessage: 'ReplicationErrorMessage',
      replicationIp: 'ReplicationIp',
      replicationPort: 'ReplicationPort',
      replicationSource: 'ReplicationSource',
      replicationState: 'ReplicationState',
      requestId: 'RequestId',
      slaveStatusList: 'SlaveStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalReplication: 'string',
      gtidExecuted: 'string',
      importStatus: 'string',
      replicationDelay: 'string',
      replicationErrorMessage: 'string',
      replicationIp: 'string',
      replicationPort: 'string',
      replicationSource: 'string',
      replicationState: 'string',
      requestId: 'string',
      slaveStatusList: { 'type': 'array', 'itemType': DescribeDBInstanceReplicationResponseBodySlaveStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.slaveStatusList)) {
      $dara.Model.validateArray(this.slaveStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

