// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobStatusResponseBodyDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the full data migration fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data migration. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which the initial full data synchronization is complete.
   * 
   * @example
   * 200001
   */
  progress?: string;
  /**
   * @remarks
   * The status of the full data migration. Valid values:
   * 
   * - **NotStarted**: The migration is not started.
   * - **Migrating**: The migration is in progress.
   * - **Failed**: The migration failed.
   * - **Finished**: The migration is complete.
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

export class DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the latest incremental data record migrated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1571040679
   */
  checkpoint?: string;
  /**
   * @remarks
   * The migration latency of the incremental data migration. Unit: seconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The error message returned if the incremental data migration fails.
   * 
   * @example
   * The task has failed for too long and cannot be recovered
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data migration. Unit: %.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The status of the incremental data migration. Valid values:
   * 
   * - **NotStarted**: The migration is not started.
   * - **Migrating**: The migration is in progress.
   * - **Failed**: The migration failed.
   * - **Finished**: The migration is complete.
   * - **Catched**: No latency.
   * 
   * @example
   * Catched
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
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

export class DescribeMigrationJobStatusResponseBodyDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration objects in the destination instance belong.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * rm-bpxxxxxxxx
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
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * > This parameter is returned only when the database type of the destination instance is **Oracle**.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to migrate full data. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to migrate incremental data. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * **false**。
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform schema migration. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * **false**。
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'dataInitialization',
      dataSynchronization: 'dataSynchronization',
      structureInitialization: 'structureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem extends $dara.Model {
  checkStatus?: string;
  errorMessage?: string;
  itemName?: string;
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

export class DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail extends $dara.Model {
  checkItem?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem[];
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: { 'type': 'array', 'itemType': DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem },
    };
  }

  validate() {
    if(Array.isArray(this.checkItem)) {
      $dara.Model.validateArray(this.checkItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyPrecheckStatus extends $dara.Model {
  detail?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail;
  /**
   * @remarks
   * The overall progress of the precheck. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The status of the precheck. Valid values:
   * 
   * - **NotStarted**: The precheck is not started.
   * - **Checking**: The precheck is in progress.
   * - **Failed**: The precheck failed.
   * - **Finished**: The precheck is complete.
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
      detail: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail,
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodySourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration objects in the source instance belong.
   * 
   * @example
   * dtstestdatabase
   */
  databaseName?: string;
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
   * The type of the source instance. Valid values:
   * 
   * - **RDS**: An ApsaraDB RDS instance.
   * - **ECS**: A self-managed database hosted on an ECS instance.
   * - **LocalInstance**: A self-managed database with a public IP address.
   * - **Express**: A self-managed database connected over an Express Connect circuit, a VPN gateway, or a Smart Access Gateway (SAG).
   * - **MongoDB**: An ApsaraDB for MongoDB instance.
   * - **POLARDB**: A PolarDB for MySQL cluster. This value is available only on the Alibaba Cloud China site.
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
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the database type of the source instance is Oracle.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobStatusResponseBodyStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the schema migration fails.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the schema migration. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables for which the schema migration is complete.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of the schema migration. Valid values:
   * 
   * - **NotStarted**: The migration is not started.
   * - **Migrating**: The migration is in progress.
   * - **Failed**: The migration failed.
   * - **Finished**: The migration is complete.
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

export class DescribeMigrationJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the full data migration.
   */
  dataInitializationStatus?: DescribeMigrationJobStatusResponseBodyDataInitializationStatus;
  /**
   * @remarks
   * The status of the incremental data migration.
   */
  dataSynchronizationStatus?: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeMigrationJobStatusResponseBodyDestinationEndpoint;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The specifications of the data migration instance. Valid values: **small**, **medium**, **large**, **xlarge**, and **2xlarge**. For more information, see [Specifications of data migration links](https://help.aliyun.com/document_detail/26606.html).
   * 
   * @example
   * 2xlarge
   */
  migrationJobClass?: string;
  /**
   * @remarks
   * The instance ID of the data migration instance.
   * 
   * @example
   * dtsxxxxxxxx
   */
  migrationJobId?: string;
  /**
   * @remarks
   * The name of the data migration instance.
   * 
   * @example
   * MySQL migration
   */
  migrationJobName?: string;
  /**
   * @remarks
   * The status of the data migration task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Prechecking**: The precheck is in progress.
   * - **PrecheckFailed**: The precheck failed.
   * - **Migrating**: The migration is in progress.
   * - **Suspending**: The task is being suspended.
   * - **MigrationFailed**: The migration failed.
   * - **Finished**: The migration is complete.
   * 
   * @example
   * Migrating
   */
  migrationJobStatus?: string;
  /**
   * @remarks
   * The migration types.
   */
  migrationMode?: DescribeMigrationJobStatusResponseBodyMigrationMode;
  /**
   * @remarks
   * The migration objects.
   * 
   * @example
   * [{\\"DBName\\":\\"dtstestdata\\",\\"TableIncludes\\":[{\\"TableName\\":\\"customer\\"}]}]
   */
  migrationObject?: string;
  /**
   * @remarks
   * The billing method of the data migration task. The value is fixed to **PostPaid** (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeMigrationJobStatusResponseBodyPrecheckStatus;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A032E3B4-929B-48E9-97B9-37587CBF****
   */
  requestId?: string;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeMigrationJobStatusResponseBodySourceEndpoint;
  /**
   * @remarks
   * The status of the schema migration.
   */
  structureInitializationStatus?: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus;
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
   * The ID of the data migration task.
   * 
   * @example
   * z2v12jfo309****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      destinationEndpoint: 'DestinationEndpoint',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      migrationJobClass: 'MigrationJobClass',
      migrationJobId: 'MigrationJobId',
      migrationJobName: 'MigrationJobName',
      migrationJobStatus: 'MigrationJobStatus',
      migrationMode: 'MigrationMode',
      migrationObject: 'MigrationObject',
      payType: 'PayType',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      sourceEndpoint: 'SourceEndpoint',
      structureInitializationStatus: 'StructureInitializationStatus',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationStatus: DescribeMigrationJobStatusResponseBodyDataInitializationStatus,
      dataSynchronizationStatus: DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus,
      destinationEndpoint: DescribeMigrationJobStatusResponseBodyDestinationEndpoint,
      errCode: 'string',
      errMessage: 'string',
      migrationJobClass: 'string',
      migrationJobId: 'string',
      migrationJobName: 'string',
      migrationJobStatus: 'string',
      migrationMode: DescribeMigrationJobStatusResponseBodyMigrationMode,
      migrationObject: 'string',
      payType: 'string',
      precheckStatus: DescribeMigrationJobStatusResponseBodyPrecheckStatus,
      requestId: 'string',
      sourceEndpoint: DescribeMigrationJobStatusResponseBodySourceEndpoint,
      structureInitializationStatus: DescribeMigrationJobStatusResponseBodyStructureInitializationStatus,
      success: 'string',
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
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

