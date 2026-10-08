// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceReplicationResponseBodySlaveStatusList extends $dara.Model {
  /**
   * @example
   * my_test_channel
   */
  channelName?: string;
  /**
   * @example
   * bd2a34b9-8b8d-11ef-8917-00163e1298b9:1-20567
   */
  executedGtidSet?: string;
  /**
   * @remarks
   * A value of 0 indicates no error. Other values indicate specific error codes.
   * 
   * @example
   * 0
   */
  lastErrno?: number;
  /**
   * @remarks
   * A value of 0 indicates no error. Other values indicate error codes of the I/O thread.
   * 
   * @example
   * 0
   */
  lastIoErrno?: number;
  /**
   * @remarks
   * The error message description of the I/O thread.
   */
  lastIoError?: string;
  /**
   * @remarks
   * A value of 0 indicates no error. Other values indicate error codes of the SQL thread.
   * 
   * @example
   * 0
   */
  lastSqlErrno?: number;
  /**
   * @remarks
   * The error message description of the SQL thread.
   */
  lastSqlError?: string;
  /**
   * @example
   * 192.168.10.100
   */
  masterHost?: string;
  /**
   * @example
   * repl_user
   */
  masterUser?: string;
  /**
   * @example
   * bd2a34b9-8b8d-11ef-8917-00163e1298b9
   */
  masterUuid?: string;
  /**
   * @example
   * test_db,test_db_1
   */
  replicateDoDb?: string;
  /**
   * @example
   * test_table,test_table_1
   */
  replicateDoTable?: string;
  /**
   * @example
   * information_schema,performance_schema
   */
  replicateIgnoreDb?: string;
  /**
   * @example
   * temp_table,temp_table_1
   */
  replicateIgnoreTable?: string;
  /**
   * @example
   * test_table.%
   */
  replicateWildDoTable?: string;
  /**
   * @example
   * temp_table.%
   */
  replicateWildIgnoreTable?: string;
  /**
   * @example
   * 0
   */
  secondsBehindMaster?: number;
  /**
   * @remarks
   * Valid values: Yes (running) and No (stopped).
   * 
   * @example
   * Yes
   */
  slaveIoRunning?: string;
  /**
   * @example
   * Waiting for master to send event
   */
  slaveIoState?: string;
  /**
   * @remarks
   * Valid values: Yes (running) and No (stopped).
   * 
   * @example
   * Yes
   */
  slaveSqlRunning?: string;
  /**
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
   * The replication source of native replication.
   * 
   * @example
   * 192.168.XX.XX
   */
  replicationSource?: string;
  /**
   * @remarks
   * The current replication status. Valid values:
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

