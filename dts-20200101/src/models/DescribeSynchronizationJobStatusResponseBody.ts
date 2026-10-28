// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when initial full data synchronization fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial full data synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of data records that have been synchronized during initial full data synchronization.
   * 
   * @example
   * 200001
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial full data synchronization. Valid values:
   * - **NotStarted**: not started
   * - **Migrating**: initializing
   * - **Failed**: initialization failed
   * - **Finished**: initialization completed
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the latest data record is synchronized. The value is a UNIX timestamp.
   * 
   * @example
   * 1610709865
   */
  checkpoint?: string;
  /**
   * @remarks
   * The incremental data synchronization latency, in seconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The incremental data synchronization latency, in milliseconds.
   * 
   * @example
   * 856
   */
  delayMillis?: number;
  /**
   * @remarks
   * The error message returned when incremental data synchronization fails.
   * 
   * @example
   * The task has failed for too long and cannot be recovered
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of incremental data synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The status of incremental data synchronization. Valid values:
   * 
   * - **NotStarted**: not started
   * - **Migrating**: synchronizing
   * - **Failed**: synchronization failed
   * - **Finished**: synchronization completed
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      delayMillis: 'DelayMillis',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      delay: 'string',
      delayMillis: 'number',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The database engine of the destination instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The endpoint of the destination instance.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The instance ID of the destination instance.
   * 
   * @example
   * rm-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @remarks
   * The destination instance type.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The database service port of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The database account of the destination instance.
   * 
   * @example
   * dtstest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyPerformance extends $dara.Model {
  /**
   * @remarks
   * The amount of data synchronized per second, in MB/s.
   * 
   * @example
   * 1
   */
  FLOW?: string;
  /**
   * @remarks
   * The number of SQL statements synchronized per second, including BEGIN, COMMIT, DML (INSERT, DELETE, and UPDATE), and DDL statements.
   * 
   * @example
   * 100
   */
  RPS?: string;
  static names(): { [key: string]: string } {
    return {
      FLOW: 'FLOW',
      RPS: 'RPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FLOW: 'string',
      RPS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The check result. Valid values:
   * - **Success**: The check item passed.
   * - **Failed**: The check item failed.
   * 
   * @example
   * Success
   */
  checkStatus?: string;
  /**
   * @remarks
   * The error message returned when a precheck item fails.
   * > This parameter is returned only when the **CheckStatus** parameter is set to **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  itemName?: string;
  /**
   * @remarks
   * The solution for a failed precheck item.
   * > This parameter is returned only when the **CheckStatus** parameter is set to **Failed**.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail[];
  /**
   * @remarks
   * The overall progress of the precheck, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * - **Success**: The check item passed.
   * - **Failed**: The check item failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail },
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The database engine of the source instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source instance.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The database service port of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The database account of the source instance.
   * 
   * @example
   * dtstest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when an exception occurs during initial schema synchronization.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial schema synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have been synchronized during initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
   * - **NotStarted**: not started
   * - **Migrating**: initializing
   * - **Failed**: initialization failed
   * - **Finished**: initialization completed
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes extends $dara.Model {
  /**
   * @remarks
   * The name of the excluded table.
   * 
   * @example
   * order
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes extends $dara.Model {
  /**
   * @remarks
   * The name of the table to be synchronized.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBodySynchronizationObjects extends $dara.Model {
  /**
   * @remarks
   * The mapped name of the database to be synchronized in the destination database.
   * 
   * @example
   * newdtstestdatabase
   */
  newSchemaName?: string;
  /**
   * @remarks
   * The name of the database to be synchronized.
   * 
   * @example
   * dtstestdatabase
   */
  schemaName?: string;
  /**
   * @remarks
   * The tables excluded from the database to be synchronized. These tables are not synchronized.
   */
  tableExcludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes[];
  /**
   * @remarks
   * The tables to be synchronized.
   */
  tableIncludes?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes[];
  static names(): { [key: string]: string } {
    return {
      newSchemaName: 'NewSchemaName',
      schemaName: 'SchemaName',
      tableExcludes: 'TableExcludes',
      tableIncludes: 'TableIncludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newSchemaName: 'string',
      schemaName: 'string',
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableExcludes },
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjectsTableIncludes },
    };
  }

  validate() {
    if(Array.isArray(this.tableExcludes)) {
      $dara.Model.validateArray(this.tableExcludes);
    }
    if(Array.isArray(this.tableIncludes)) {
      $dara.Model.validateArray(this.tableIncludes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the latest data record is synchronized. The value is a UNIX timestamp.
   * 
   * > You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1610616144
   */
  checkpoint?: string;
  /**
   * @remarks
   * Specifies whether to perform initial full data synchronization. Valid values:
   * 
   * - **true**: yes
   * - **false**: no
   * 
   * @example
   * true
   */
  dataInitialization?: string;
  /**
   * @remarks
   * The status of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * The synchronization latency, in seconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The synchronization latency, in milliseconds.
   * 
   * @example
   * 506
   */
  delayMillis?: number;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned when data synchronization fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The expiration time of the data synchronization instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2021-03-07T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing method of the data synchronization instance. Valid values:
   * 
   * - **PrePaid**: subscription
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance overview of the synchronization task.
   */
  performance?: DescribeSynchronizationJobStatusResponseBodyPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DACDF659-AFC6-4DC8-ADB8-4569419A4****
   */
  requestId?: string;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeSynchronizationJobStatusResponseBodySourceEndpoint;
  /**
   * @remarks
   * The status of the data synchronization instance. Valid values:
   * 
   * - **notStarted**: not started.
   * - **prechecking**: precheck in progress.
   * - **precheckFailed**: precheck failed.
   * - **initializating**: synchronization initialization in progress.
   * - **initializeFailed**: synchronization initialization failed.
   * - **synchronizing**: synchronizing.
   * - **failed**: synchronization failed.
   * - **suspending**: pausing.
   * - **modifying**: modifying synchronization objects.
   * - **finished**: finished.
   * 
   * @example
   * synchronizing
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to perform initial schema synchronization. Valid values:
   * 
   * - **true**: yes
   * - **false**: no
   * 
   * @example
   * true
   */
  structureInitialization?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward
   * - **Reverse**: reverse
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The specifications of the synchronization task.
   * 
   * @example
   * large
   */
  synchronizationJobClass?: string;
  /**
   * @remarks
   * The instance ID of the data synchronization instance.
   * 
   * @example
   * dtsexjk1alb116****
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization instance.
   * 
   * @example
   * MySQL synchronization
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The synchronization objects.
   */
  synchronizationObjects?: DescribeSynchronizationJobStatusResponseBodySynchronizationObjects[];
  /**
   * @remarks
   * The ID of the data synchronization task.
   * 
   * @example
   * exjk1alb116****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      delayMillis: 'DelayMillis',
      destinationEndpoint: 'DestinationEndpoint',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobStatusResponseBodyDataSynchronizationStatus,
      delay: 'string',
      delayMillis: 'number',
      destinationEndpoint: DescribeSynchronizationJobStatusResponseBodyDestinationEndpoint,
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      expireTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobStatusResponseBodyPerformance,
      precheckStatus: DescribeSynchronizationJobStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      sourceEndpoint: DescribeSynchronizationJobStatusResponseBodySourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobStatusResponseBodyStructureInitializationStatus,
      success: 'string',
      synchronizationDirection: 'string',
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodySynchronizationObjects },
      taskId: 'string',
    };
  }

  validate() {
    if(this.dataInitializationStatus && typeof (this.dataInitializationStatus as any).validate === 'function') {
      (this.dataInitializationStatus as any).validate();
    }
    if(this.dataSynchronizationStatus && typeof (this.dataSynchronizationStatus as any).validate === 'function') {
      (this.dataSynchronizationStatus as any).validate();
    }
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    if(Array.isArray(this.synchronizationObjects)) {
      $dara.Model.validateArray(this.synchronizationObjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

