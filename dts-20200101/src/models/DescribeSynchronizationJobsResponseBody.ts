// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus extends $dara.Model {
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
   * The number of records that have been synchronized during initial full data synchronization.
   * 
   * @example
   * 200001
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial full data synchronization. Valid values:
   * - **NotStarted**: not started.
   * - **Migrating**: in progress.
   * - **Failed**: failed.
   * - **Finished**: completed.
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The synchronization latency of incremental data synchronization.
   * > This parameter has been discontinued.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The error message returned when incremental data synchronization fails.
   * > This parameter has been discontinued.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of incremental data synchronization.
   * > This parameter has been discontinued.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The status of incremental data synchronization.
   * > This parameter has been discontinued.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'string',
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The database type of the destination instance.
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
   * The type of the destination instance.
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance extends $dara.Model {
  /**
   * @remarks
   * The volume of data synchronized per second, in MB/s.
   * 
   * @example
   * 1
   */
  FLOW?: string;
  /**
   * @remarks
   * The number of SQL statements synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The check result. Valid values:
   * - **Success**: passed.
   * - **Failed**: failed.
   * 
   * @example
   * Success
   */
  checkStatus?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * > This parameter is returned only when the value of the **CheckStatus** parameter is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  itemName?: string;
  /**
   * @remarks
   * The repair method when the precheck fails.
   * > This parameter is returned only when the value of the **CheckStatus** parameter is **Failed**.
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail[];
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
   * - **Success**: passed.
   * - **Failed**: failed.
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
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatusDetail },
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The database type of the source instance.
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when initial schema synchronization fails.
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
   * The number of tables for which initial schema synchronization has been completed.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
   * - **NotStarted**: not started.
   * - **Migrating**: in progress.
   * - **Failed**: failed.
   * - **Finished**: completed.
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes extends $dara.Model {
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes extends $dara.Model {
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the objects are mapped in the destination database.
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
   * The tables that are excluded from the database to be synchronized. These tables are not synchronized.
   */
  tableExcludes?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes[];
  /**
   * @remarks
   * The tables to be synchronized.
   */
  tableIncludes?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes[];
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
      tableExcludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableExcludes },
      tableIncludes: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjectsTableIncludes },
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

export class DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key.
   * 
   * @example
   * testvalue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBodySynchronizationInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the synchronization task was created, in the format of <i>yyyy-MM-dd HH:mm:ss</i>.0 (UTC+8).
   * 
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether initial full data synchronization is performed. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: string;
  /**
   * @remarks
   * The status of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   * > This parameter set and its contained parameters have been discontinued.
   */
  dataSynchronizationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus;
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
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint;
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
   * The expiration time of the synchronization instance, in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is returned only when the value of the **PayType** parameter is **PrePaid**.
   * 
   * @example
   * 2021-07-07T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the synchronization instance was created, in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-06-28T09:36:32Z
   */
  instanceCreateTime?: string;
  /**
   * @remarks
   * The time when the synchronization task was created, in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-06-28T09:34:53Z
   */
  jobCreateTime?: string;
  /**
   * @remarks
   * The billing method of the synchronization instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The overview information of the synchronization link.
   */
  performance?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint;
  /**
   * @remarks
   * The status of the synchronization instance. Valid values:
   * - **NotStarted**: not started.
   * - **Prechecking**: running the precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **Initializating**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying synchronization objects.
   * - **Finished**: completed.
   * 
   * @example
   * synchronizing
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether initial schema synchronization is performed. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  structureInitialization?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The specification of the synchronization link.
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
   * The name of the synchronization instance.
   * 
   * @example
   * MySQL同步
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The synchronization objects.
   */
  synchronizationObjects?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects[];
  /**
   * @remarks
   * The tag collection.
   */
  tags?: DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataInitialization: 'DataInitialization',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      errorMessage: 'ErrorMessage',
      expireTime: 'ExpireTime',
      instanceCreateTime: 'InstanceCreateTime',
      jobCreateTime: 'JobCreateTime',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitialization: 'StructureInitialization',
      structureInitializationStatus: 'StructureInitializationStatus',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobClass: 'SynchronizationJobClass',
      synchronizationJobId: 'SynchronizationJobId',
      synchronizationJobName: 'SynchronizationJobName',
      synchronizationObjects: 'SynchronizationObjects',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataInitialization: 'string',
      dataInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataInitializationStatus,
      dataSynchronizationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDataSynchronizationStatus,
      delay: 'string',
      destinationEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesDestinationEndpoint,
      errorMessage: 'string',
      expireTime: 'string',
      instanceCreateTime: 'string',
      jobCreateTime: 'string',
      payType: 'string',
      performance: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPerformance,
      precheckStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesPrecheckStatus,
      sourceEndpoint: DescribeSynchronizationJobsResponseBodySynchronizationInstancesSourceEndpoint,
      status: 'string',
      structureInitialization: 'string',
      structureInitializationStatus: DescribeSynchronizationJobsResponseBodySynchronizationInstancesStructureInitializationStatus,
      synchronizationDirection: 'string',
      synchronizationJobClass: 'string',
      synchronizationJobId: 'string',
      synchronizationJobName: 'string',
      synchronizationObjects: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesSynchronizationObjects },
      tags: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstancesTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynchronizationJobsResponseBody extends $dara.Model {
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
   * The maximum number of records that can be displayed on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92E1E99D-5224-4AD3-8C94-23A3516B****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of data synchronization instances and the details of each instance.
   */
  synchronizationInstances?: DescribeSynchronizationJobsResponseBodySynchronizationInstances[];
  /**
   * @remarks
   * The total number of data synchronization instances that meet the specified conditions under the Alibaba Cloud account.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      synchronizationInstances: 'SynchronizationInstances',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      synchronizationInstances: { 'type': 'array', 'itemType': DescribeSynchronizationJobsResponseBodySynchronizationInstances },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationInstances)) {
      $dara.Model.validateArray(this.synchronizationInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

