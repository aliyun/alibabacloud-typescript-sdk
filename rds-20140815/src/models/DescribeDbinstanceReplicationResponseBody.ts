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
   * 0表示无错误，其他值表示具体的错误代码
   * 
   * @example
   * 0
   */
  lastErrno?: number;
  /**
   * @remarks
   * 0表示无错误，其他值表示IO线程的错误代码
   * 
   * @example
   * 0
   */
  lastIoErrno?: number;
  /**
   * @remarks
   * IO线程的错误信息描述
   */
  lastIoError?: string;
  /**
   * @remarks
   * 0表示无错误，其他值表示SQL线程的错误代码
   * 
   * @example
   * 0
   */
  lastSqlErrno?: number;
  /**
   * @remarks
   * SQL线程的错误信息描述
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
   * Yes: 运行中，No: 已停止
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
   * Yes: 运行中，No: 已停止
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
   * Indicates whether the native replication mods is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * ON
   */
  externalReplication?: string;
  /**
   * @example
   * bd2a34b9-8b8d-11ef-8917-00163e1298b9:1-20567
   */
  gtidExecuted?: string;
  /**
   * @remarks
   * COMPLETED: 导入完成，INIT: 初始化，IMPORTING: 正在导入
   * 
   * @example
   * COMPLETED
   */
  importStatus?: string;
  /**
   * @remarks
   * The replication latency. Unit: seconds.
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
   * @example
   * 192.168.10.x
   */
  replicationIp?: string;
  /**
   * @example
   * 3306
   */
  replicationPort?: string;
  /**
   * @remarks
   * The source of the native replication.
   * 
   * @example
   * 192.168.x.x
   */
  replicationSource?: string;
  /**
   * @remarks
   * The current replication status. Valid values:
   * 
   * *   **Running**
   * *   **Connecting**
   * *   **Stopped**
   * *   **Error**
   * 
   * @example
   * Running
   * Connecting
   * Stopped
   * Error
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

