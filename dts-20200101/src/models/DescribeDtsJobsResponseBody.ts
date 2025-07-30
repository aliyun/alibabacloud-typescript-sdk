// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * framework: DTS-31009: In process of processing data ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * - **true** 
   * - **false**
   * 
   * @example
   * false
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of the task. Unit: percentage.
   * 
   * @example
   * 85
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have been migrated.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The state of the task. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Migrating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the ETL task.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of records that have been processed by the ETL task.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The state of the ETL task. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task is not delayed.
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

export class DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if full data synchronization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of full data synchronization. This is expressed as a percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records that have been synchronized during full data synchronization.
   * 
   * @example
   * 44755
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if incremental data migration or synchronization failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  To upgrade a DTS instance, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of records that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task is not delayed.
   * 
   * @example
   * Catched
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration object in the destination instance belongs.
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
   * The ID of the destination instance.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  instanceID?: string;
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
   * The endpoint of the destination instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * >  This parameter is returned only if the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
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
   * The ID of the region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListErrorDetails extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * DTS-31009
   */
  errorCode?: string;
  /**
   * @remarks
   * The URL of the documentation.
   * 
   * @example
   * https://**.ali**.com/**
   */
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus extends $dara.Model {
  canSwitch?: boolean;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The progress of the full data verification task.
   * 
   * @example
   * 1 rows/s (row: 5/5, table: 1/1)
   */
  progress?: string;
  /**
   * @remarks
   * The state of the full data verification task. Valid values:
   * 
   * - **NotStarted**: The verification is not started. 
   * - **Checking**: The verification is in progress. 
   * - **Failed**: The verification failed. 
   * - **Finished**: The verification is complete.
   * 
   * @example
   * Checking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      canSwitch: 'CanSwitch',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSwitch: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task.
   * 
   * @example
   * 1 rows/s (row: 5/5, table: 1/1)
   */
  progress?: string;
  /**
   * @remarks
   * The state of the incremental data verification task. Valid values:
   * 
   * - **Catched**: The verification is delayed. 
   * - **NotStarted**: The verification is not started. 
   * - **Checking**: The verification is in progress. 
   * - **Failed**: The verification failed.
   * 
   * @example
   * Checking
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

export class DescribeDtsJobsResponseBodyDtsJobListMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether full data migration or synchronization is performed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether full data verification is performed. Valid values:
   * -  **true**: yes
   * -  **false**: no
   * 
   * @example
   * true
   */
  fullDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data verification is performed. Valid values:
   * -  **true**: yes
   * -  **false**: no
   * 
   * @example
   * true
   */
  incDataCheck?: boolean;
  structureDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or schema synchronization is performed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureDataCheck: 'StructureDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
      structureDataCheck: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListPerformance extends $dara.Model {
  /**
   * @remarks
   * The size of data that is migrated or synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.
   * 
   * @example
   * 100
   */
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  checkItem?: string;
  /**
   * @remarks
   * The description of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  checkItemDescription?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned if the task failed to pass the precheck.
   * 
   * >  This parameter is returned only if the value of the **CheckResult** parameter is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method to fix the precheck failure.
   * 
   * >  This parameter is returned only if the value of the **CheckResult** parameter is **Failed**.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail[];
  /**
   * @remarks
   * The cause of the precheck failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck progress. This is expressed as a percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
   * 
   * *   **NotStarted**
   * *   **Suspending**:
   * *   **Checking**
   * *   **Failed**
   * *   **Finished**
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail },
      errorMessage: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message returned if these retries failed.
   * 
   * @example
   * Unexpected error
   */
  errMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * dts.retry.err.0046
   */
  migrationErrCode?: string;
  /**
   * @remarks
   * The ID of the error code-related documentation.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the error code-related documentation.
   * 
   * @example
   * DTS-RETRY-ERR-0046
   */
  migrationErrHelpDocKey?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * dts.retry.err.0046.msg
   */
  migrationErrMsg?: string;
  /**
   * @remarks
   * The type of the error code.
   * 
   * @example
   * ForeignKey
   */
  migrationErrType?: string;
  /**
   * @remarks
   * The solution to the error.
   * 
   * @example
   * dts.retry.err.0046.workaround
   */
  migrationErrWorkaround?: string;
  /**
   * @remarks
   * The progress of the instance when DTS retries.
   * 
   * @example
   * 03
   */
  module?: string;
  /**
   * @remarks
   * The number of retries that have been performed.
   * 
   * @example
   * 5
   */
  retryCount?: number;
  /**
   * @remarks
   * The object on which these retries are performed. Valid values:
   * 
   * - **srcDB**: the source database 
   * - **destDB**: the destination database 
   * - **inner_module**: an internal module of DTS
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * false
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      migrationErrCode: 'MigrationErrCode',
      migrationErrHelpDocId: 'MigrationErrHelpDocId',
      migrationErrHelpDocKey: 'MigrationErrHelpDocKey',
      migrationErrMsg: 'MigrationErrMsg',
      migrationErrType: 'MigrationErrType',
      migrationErrWorkaround: 'MigrationErrWorkaround',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      migrationErrCode: 'string',
      migrationErrHelpDocId: 'string',
      migrationErrHelpDocKey: 'string',
      migrationErrMsg: 'string',
      migrationErrType: 'string',
      migrationErrWorkaround: 'string',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if initial full data synchronization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial full data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been synchronized during initial full data synchronization.
   * 
   * @example
   * 43071
   */
  progress?: string;
  /**
   * @remarks
   * The state of initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if incremental data synchronization failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * > To upgrade a DTS instance, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 20001
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data synchronization.
   * 
   * @example
   * Migrating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the synchronized objects in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the destination instance.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
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
   * The endpoint of the destination instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * DTS-31009
   */
  errorCode?: string;
  /**
   * @remarks
   * The URL of the documentation.
   * 
   * @example
   * https://**.ali**.com/**
   */
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus extends $dara.Model {
  canSwitch?: boolean;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The progress of the full data verification task.
   * 
   * @example
   * 1 rows/s (row: 5/5, table: 1/1)
   */
  progress?: string;
  /**
   * @remarks
   * The state of the full data verification task. Valid values:
   * 
   * - **NotStarted**: The verification is not started. 
   * - **Checking**: The verification is in progress. 
   * - **Failed**: The verification failed. 
   * - **Finished**: The verification is complete.
   * 
   * @example
   * Checking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      canSwitch: 'CanSwitch',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSwitch: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task.
   * 
   * @example
   * 1 rows/s (row: 5/5, table: 1/1)
   */
  progress?: string;
  /**
   * @remarks
   * The state of the incremental data verification task. Valid values:
   * 
   * - **Catched**: The verification is delayed. 
   * - **NotStarted**: The verification is not started. 
   * - **Checking**: The verification is in progress. 
   * - **Failed**: The verification failed.
   * 
   * @example
   * Checking
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether initial full data synchronization is performed. Valid values:
   * 
   * -  **true**
   * -  **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data synchronization is performed. Valid values:
   * -  **true**
   * -  **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether full data verification is performed. Valid values:
   * -  **true**: yes
   * -  **false**: no
   * 
   * @example
   * true
   */
  fullDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data verification is performed. Valid values:
   * -  **true**: yes
   * -  **false**: no
   * 
   * @example
   * true
   */
  incDataCheck?: boolean;
  structureDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether initial schema synchronization is performed. Valid values:
   * -  **true**
   * -  **false**
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureDataCheck: 'StructureDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
      structureDataCheck: 'boolean',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The size of data that is synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of times that SQL statements are synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.
   * 
   * @example
   * 100
   */
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  checkItem?: string;
  /**
   * @remarks
   * The description of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  checkItemDescription?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * - **Success**
   * - **Failed**
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned if the task failed to pass the precheck.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method to fix a precheck failure.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the precheck failed.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck state. Valid values:
   * 
   * - **NotStarted**: The precheck is not started. 
   * - **Suspending**: The precheck is paused. 
   * - **Checking**: The precheck is in progress. 
   * - **Failed**: The precheck failed. 
   * - **Finished**: The precheck is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the objects to be migrated from the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  instanceID?: string;
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
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus extends $dara.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if initial schema synchronization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial schema synchronization. Unit: percentage.
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
   * The state of initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJob extends $dara.Model {
  /**
   * @remarks
   * The start offset of incremental data synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1616980369
   */
  checkpoint?: string;
  /**
   * @remarks
   * The CPU utilization of the instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  cpuUsage?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The schema of the objects that you want to synchronize. The value is a JSON string and can contain regular expressions. For more information, see Objects of DTS tasks.
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster on which a DTS task runs.
   * 
   * @example
   * dtscluster_dpwl3**********
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency of incremental data synchronization. Unit: seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint;
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The instance class. 
   * 
   * > For more information about the test performance of each instance class, see [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. **Reverse** is returned.
   * 
   * @example
   * Reverse
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The number of DUs that have been used.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The error message returned.
   */
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC. 
   * 
   * > This parameter is returned only if the returned value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The state information about the full data verification task.
   */
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus;
  /**
   * @remarks
   * The state information about the incremental data verification task.
   */
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus;
  /**
   * @remarks
   * Upper limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The memory that has been used. Unit: MB.
   * 
   * @example
   * 500
   */
  memUsage?: string;
  /**
   * @remarks
   * The initial synchronization types.
   */
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode;
  /**
   * @remarks
   * Lower limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method of the DTS instance. Valid values:
   * 
   * - **PrePaid**: subscription
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data synchronization instance.
   */
  performance?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The state of the DTS instance. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Synchronizing
   */
  status?: string;
  structureDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus;
  /**
   * @remarks
   * The state of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      cpuUsage: 'CpuUsage',
      createTime: 'CreateTime',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      duUsage: 'DuUsage',
      errorDetails: 'ErrorDetails',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      fullDataCheckStatus: 'FullDataCheckStatus',
      incDataCheckStatus: 'IncDataCheckStatus',
      maxDu: 'MaxDu',
      memUsage: 'MemUsage',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureDataCheckStatus: 'StructureDataCheckStatus',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      cpuUsage: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duUsage: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus,
      incDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus,
      maxDu: 'number',
      memUsage: 'string',
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode,
      minDu: 'number',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint,
      status: 'string',
      structureDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus,
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus,
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
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    if(this.fullDataCheckStatus && typeof (this.fullDataCheckStatus as any).validate === 'function') {
      (this.fullDataCheckStatus as any).validate();
    }
    if(this.incDataCheckStatus && typeof (this.incDataCheckStatus as any).validate === 'function') {
      (this.incDataCheckStatus as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
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
    if(this.structureDataCheckStatus && typeof (this.structureDataCheckStatus as any).validate === 'function') {
      (this.structureDataCheckStatus as any).validate();
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

export class DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the objects to be migrated from the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
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
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICAT**E: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyDtsJobListStructureDataCheckStatus extends $dara.Model {
  errorMessage?: string;
  percent?: string;
  progress?: string;
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

export class DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if schema migration or initial schema synchronization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of schema migration or initial schema synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have been migrated or synchronized during schema migration or initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The state of schema migration or initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyDtsJobListTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testkey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testvalue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyDtsJobList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the **new** change tracking feature is used.
   * 
   * >  This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data synchronization. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1616899019
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information, in the following format: \\<IP address of the downstream client>:\\<Random ID generated by DTS>.
   * 
   * @example
   * 114...:dts******
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The CPU utilization of the instance. Unit: percentage.
   * 
   * @example
   * 1
   */
  cpuUsage?: string;
  /**
   * @remarks
   * The point in time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of the physical gateway-based migration task.
   */
  dataCloudStatus?: DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus;
  /**
   * @remarks
   * The state of the extract, transform, and load (ETL) task. Valid values:
   * 
   * >  This parameter collection is returned only if an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus;
  /**
   * @remarks
   * The state of full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus;
  /**
   * @remarks
   * The objects that you want to synchronize. The value is a JSON string and can contain regular expressions. For more information, see "Objects of DTS tasks".
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster on which a DTS task runs.
   * 
   * @example
   * dtscluster_ft7y3**********
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency of incremental data synchronization. Unit: seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint;
  /**
   * @remarks
   * The environment tag of the DTS instance. Valid values:
   * 
   * - **normal**
   * - **online**
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The instance class.
   * 
   * >  For more information about the test performance of each instance class, see [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. The value is **Reverse**.
   * 
   * @example
   * Forward
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the data synchronization task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The DTS Units (DUs) usage of a task in a DTS dedicated cluster.
   * 
   * @example
   * 12.0%
   */
  duRealUsage?: string;
  /**
   * @remarks
   * The number of DUs that have been used.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned.
   */
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListErrorDetails[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The point in time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * >  This parameter is returned only if the value of the **PayType** parameter is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The state information about the full data verification task.
   */
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus;
  /**
   * @remarks
   * The state information about the incremental data verification task.
   */
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * - **MIGRATION**: data migration task 
   * - **SYNC**: data synchronization task 
   * - **SUBSCRIBE**: change tracking task
   * 
   * @example
   * MIGRATION
   */
  jobType?: string;
  /**
   * @remarks
   * Upper limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The memory that has been used. Unit: MB.
   * 
   * @example
   * 500
   */
  memUsage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * dts.retry.err.0046
   */
  migrationErrCode?: string;
  /**
   * @remarks
   * The ID of the error code-related documentation.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the error code-related documentation.
   * 
   * @example
   * DTS-RETRY-ERR-0046
   */
  migrationErrHelpDocKey?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * dts.retry.err.0046.msg
   */
  migrationErrMsg?: string;
  /**
   * @remarks
   * The type of the error code.
   * 
   * @example
   * ForeignKey
   */
  migrationErrType?: string;
  /**
   * @remarks
   * The solution to the error.
   * 
   * @example
   * dts.retry.err.0046.workaround
   */
  migrationErrWorkaround?: string;
  /**
   * @remarks
   * The migration or synchronization modes.
   */
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListMigrationMode;
  /**
   * @remarks
   * Lower limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The source of the task. Valid values:
   * 
   * *   **PTS**
   * *   **DMS**
   * *   **DTS**
   * 
   * @example
   * DTS
   */
  originType?: string;
  /**
   * @remarks
   * The billing method of the DTS instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobsResponseBodyDtsJobListPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * default resource group
   */
  resourceGroupDisplayName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the retries performed by DTS due to an exception.
   */
  retryState?: DescribeDtsJobsResponseBodyDtsJobListRetryState;
  /**
   * @remarks
   * The details of the data synchronization task in the reverse direction. 
   * 
   * > This parameter is returned only for two-way data synchronization tasks.
   */
  reverseJob?: DescribeDtsJobsResponseBodyDtsJobListReverseJob;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint;
  /**
   * @remarks
   * The state of the DTS instance. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Migrating
   */
  status?: string;
  structureDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListStructureDataCheckStatus;
  /**
   * @remarks
   * The state of schema migration or initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus;
  /**
   * @remarks
   * The tags of the task.
   */
  tagList?: DescribeDtsJobsResponseBodyDtsJobListTagList[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      cpuUsage: 'CpuUsage',
      createTime: 'CreateTime',
      dataCloudStatus: 'DataCloudStatus',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      duRealUsage: 'DuRealUsage',
      duUsage: 'DuUsage',
      endTimestamp: 'EndTimestamp',
      errorDetails: 'ErrorDetails',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      fullDataCheckStatus: 'FullDataCheckStatus',
      incDataCheckStatus: 'IncDataCheckStatus',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      memUsage: 'MemUsage',
      migrationErrCode: 'MigrationErrCode',
      migrationErrHelpDocId: 'MigrationErrHelpDocId',
      migrationErrHelpDocKey: 'MigrationErrHelpDocKey',
      migrationErrMsg: 'MigrationErrMsg',
      migrationErrType: 'MigrationErrType',
      migrationErrWorkaround: 'MigrationErrWorkaround',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureDataCheckStatus: 'StructureDataCheckStatus',
      structureInitializationStatus: 'StructureInitializationStatus',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      cpuUsage: 'string',
      createTime: 'string',
      dataCloudStatus: DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus,
      dataEtlStatus: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint,
      dtsBisLabel: 'string',
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duRealUsage: 'string',
      duUsage: 'number',
      endTimestamp: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus,
      incDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus,
      jobType: 'string',
      maxDu: 'number',
      memUsage: 'string',
      migrationErrCode: 'string',
      migrationErrHelpDocId: 'string',
      migrationErrHelpDocKey: 'string',
      migrationErrMsg: 'string',
      migrationErrType: 'string',
      migrationErrWorkaround: 'string',
      migrationMode: DescribeDtsJobsResponseBodyDtsJobListMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyDtsJobListPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus,
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeDtsJobsResponseBodyDtsJobListRetryState,
      reverseJob: DescribeDtsJobsResponseBodyDtsJobListReverseJob,
      sourceEndpoint: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint,
      status: 'string',
      structureDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListStructureDataCheckStatus,
      structureInitializationStatus: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus,
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListTagList },
    };
  }

  validate() {
    if(this.dataCloudStatus && typeof (this.dataCloudStatus as any).validate === 'function') {
      (this.dataCloudStatus as any).validate();
    }
    if(this.dataEtlStatus && typeof (this.dataEtlStatus as any).validate === 'function') {
      (this.dataEtlStatus as any).validate();
    }
    if(this.dataInitializationStatus && typeof (this.dataInitializationStatus as any).validate === 'function') {
      (this.dataInitializationStatus as any).validate();
    }
    if(this.dataSynchronizationStatus && typeof (this.dataSynchronizationStatus as any).validate === 'function') {
      (this.dataSynchronizationStatus as any).validate();
    }
    if(this.destinationEndpoint && typeof (this.destinationEndpoint as any).validate === 'function') {
      (this.destinationEndpoint as any).validate();
    }
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    if(this.fullDataCheckStatus && typeof (this.fullDataCheckStatus as any).validate === 'function') {
      (this.fullDataCheckStatus as any).validate();
    }
    if(this.incDataCheckStatus && typeof (this.incDataCheckStatus as any).validate === 'function') {
      (this.incDataCheckStatus as any).validate();
    }
    if(this.migrationMode && typeof (this.migrationMode as any).validate === 'function') {
      (this.migrationMode as any).validate();
    }
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.retryState && typeof (this.retryState as any).validate === 'function') {
      (this.retryState as any).validate();
    }
    if(this.reverseJob && typeof (this.reverseJob as any).validate === 'function') {
      (this.reverseJob as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureDataCheckStatus && typeof (this.structureDataCheckStatus as any).validate === 'function') {
      (this.structureDataCheckStatus as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the ETL task failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the ETL task. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been processed by the ETL task.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The state of the ETL task. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete. 
   * - **Catched**: The task is not delayed.
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

export class DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if full data migration or initial full data synchronization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of full data migration or initial full data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 44755
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if incremental data migration or synchronization failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * > To upgrade a DTS instance, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete. 
   * - **Catched**: The task is not delayed.
   * 
   * @example
   * Catched
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
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

export class DescribeDtsJobsResponseBodyEtlDemoListDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the migrated objects in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the destination instance.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  instanceID?: string;
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
   * The endpoint of the destination instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
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

export class DescribeDtsJobsResponseBodyEtlDemoListPerformance extends $dara.Model {
  /**
   * @remarks
   * The size of data that is migrated or synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.
   * 
   * @example
   * 100
   */
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  checkItem?: string;
  /**
   * @remarks
   * The description of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  checkItemDescription?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * - **Success**
   * - **Failed**
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned if the task failed to pass the precheck. 
   * 
   * > This parameter is returned only if the returned value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method to fix a precheck failure. 
   * 
   * > This parameter is returned only if the returned value of **CheckResult** is **Failed**.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the precheck failed.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck state. Valid values:
   * 
   * - **NotStarted**: The precheck is not started. 
   * - **Suspending**: The precheck is paused. 
   * - **Checking**: The precheck is in progress. 
   * - **Failed**: The precheck failed. 
   * - **Finished**: The precheck is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail },
      errorMessage: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message returned if these retries failed.
   * 
   * @example
   * Unexpected error
   */
  errMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance when DTS retries.
   * 
   * @example
   * 03
   */
  module?: string;
  /**
   * @remarks
   * The number of retries that have been performed.
   * 
   * @example
   * 5
   */
  retryCount?: number;
  /**
   * @remarks
   * The object on which these retries are performed. Valid values:
   * 
   * - **srcDB**: the source database 
   * - **destDB**: the destination database 
   * - **inner_module**: an internal module of DTS
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * false
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobId: 'JobId',
      maxRetryTime: 'MaxRetryTime',
      module: 'Module',
      retryCount: 'RetryCount',
      retryTarget: 'RetryTarget',
      retryTime: 'RetryTime',
      retrying: 'Retrying',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobId: 'string',
      maxRetryTime: 'number',
      module: 'string',
      retryCount: 'number',
      retryTarget: 'string',
      retryTime: 'number',
      retrying: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if initial full data synchronization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial full data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been synchronized during initial full data synchronization.
   * 
   * @example
   * 43071
   */
  progress?: string;
  /**
   * @remarks
   * The state of initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if incremental data synchronization failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * > To upgrade a DTS instance, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 20001
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data synchronization.
   * 
   * @example
   * Migrating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the synchronized objects in the destination instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the destination instance.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
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
   * The endpoint of the destination instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The size of data that is migrated or synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.
   * 
   * @example
   * 100
   */
  rps?: string;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      rps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  checkItem?: string;
  /**
   * @remarks
   * The description of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  checkItemDescription?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * - **Success**
   * - **Failed**
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned if the task failed to pass the precheck. 
   * 
   * > This parameter is returned only if the returned value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method to fix a precheck failure. 
   * 
   * > This parameter is returned only if the returned value of **CheckResult** is **Failed**.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the precheck failed.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck state. Valid values:
   * 
   * - **NotStarted**: The precheck is not started. 
   * - **Suspending**: The precheck is paused. 
   * - **Checking**: The precheck is in progress. 
   * - **Failed**: The precheck failed. 
   * - **Finished**: The precheck is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the objects to be migrated from the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  instanceID?: string;
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
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if initial schema synchronization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial schema synchronization. Unit: percentage.
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
   * The state of initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyEtlDemoListReverseJob extends $dara.Model {
  /**
   * @remarks
   * The start offset of incremental data synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1616980369
   */
  checkpoint?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The schema of the objects that you want to synchronize. The value is a JSON string and can contain regular expressions. For more information, see Objects of DTS tasks.
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The latency of incremental data synchronization. Unit: seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint;
  /**
   * @remarks
   * The ID of the data synchronization instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The instance class. 
   * 
   * > For more information about the test performance of each instance class, see [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. **Reverse** is returned.
   * 
   * @example
   * Reverse
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the data synchronization task.
   * 
   * @example
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the* yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC. 
   * 
   * > This parameter is returned only if the returned value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The migration types or initial synchronization types.
   */
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode;
  /**
   * @remarks
   * The billing method of the DTS instance. Valid values:
   * 
   * - **PrePaid**: subscription
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The state of the DTS instance. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Synchronizing
   */
  status?: string;
  /**
   * @remarks
   * The state of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      createTime: 'CreateTime',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      migrationMode: 'MigrationMode',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      migrationMode: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode,
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListReverseJobStructureInitializationStatus,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the objects to be migrated from the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
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
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
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
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database. 
   * 
   * > This parameter is returned only if the returned value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The port number of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **DISABLE**: SSL encryption is disabled. 
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded. 
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection with an AWS MongoDB Altas database. 
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection with a Kafka cluster.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
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
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      sslSolutionEnum: 'string',
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

export class DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if schema migration or initial schema synchronization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of schema migration or initial schema synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have been migrated or synchronized during schema migration or initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The state of schema migration or initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
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

export class DescribeDtsJobsResponseBodyEtlDemoListTagList extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testkey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testvalue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBodyEtlDemoList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the **new** change tracking feature is used. 
   * 
   * > This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1616899019
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information in the following format: <IP address of the downstream client>:<Random ID generated by DTS>.
   * 
   * @example
   * 114...:dts******
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:s*sZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of the ETL task. 
   * 
   * > This parameter collection is returned only if an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus;
  /**
   * @remarks
   * The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization. 
   * 
   * > If you query data migration tasks, the unit of this parameter is milliseconds. If you query data synchronization tasks, the unit of this parameter is seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListDestinationEndpoint;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The instance class. 
   * 
   * > For more information about the test performance of each instance class, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - **Forward**
   * - **Reverse**
   * 
   * > This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * RDS_TO_RDS_MIGRATION
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > This parameter is returned only if the returned value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * - **MIGRATION**: data migration task 
   * - **SYNC**: data synchronization task 
   * - **SUBSCRIBE**: change tracking task
   * 
   * @example
   * MIGRATION
   */
  jobType?: string;
  /**
   * @remarks
   * The migration types or initial synchronization types.
   */
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListMigrationMode;
  /**
   * @remarks
   * The source of the task.
   * - **PTS**
   * - **DMS**
   * - **DTS**
   * 
   * @example
   * DTS
   */
  originType?: string;
  /**
   * @remarks
   * The billing method of the DTS instance. Valid values:
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
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobsResponseBodyEtlDemoListPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, for example, whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * default resource group
   */
  resourceGroupDisplayName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the retries performed by DTS due to an exception.
   */
  retryState?: DescribeDtsJobsResponseBodyEtlDemoListRetryState;
  /**
   * @remarks
   * The details of the data synchronization task in the reverse direction. 
   * 
   * > This parameter is returned only for two-way data synchronization tasks.
   */
  reverseJob?: DescribeDtsJobsResponseBodyEtlDemoListReverseJob;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint;
  /**
   * @remarks
   * The state of the DTS instance. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The state of schema migration or initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus;
  /**
   * @remarks
   * The tags of the task.
   */
  tagList?: DescribeDtsJobsResponseBodyEtlDemoListTagList[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTimestamp: 'BeginTimestamp',
      checkpoint: 'Checkpoint',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataEtlStatus: 'DataEtlStatus',
      dataInitializationStatus: 'DataInitializationStatus',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      dbObject: 'DbObject',
      delay: 'Delay',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlSafeCheckpoint: 'EtlSafeCheckpoint',
      expireTime: 'ExpireTime',
      jobType: 'JobType',
      migrationMode: 'MigrationMode',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTimestamp: 'string',
      checkpoint: 'string',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataEtlStatus: DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus,
      dbObject: 'string',
      delay: 'number',
      destinationEndpoint: DescribeDtsJobsResponseBodyEtlDemoListDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      jobType: 'string',
      migrationMode: DescribeDtsJobsResponseBodyEtlDemoListMigrationMode,
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobsResponseBodyEtlDemoListPerformance,
      precheckStatus: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus,
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeDtsJobsResponseBodyEtlDemoListRetryState,
      reverseJob: DescribeDtsJobsResponseBodyEtlDemoListReverseJob,
      sourceEndpoint: DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus,
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoListTagList },
    };
  }

  validate() {
    if(this.dataEtlStatus && typeof (this.dataEtlStatus as any).validate === 'function') {
      (this.dataEtlStatus as any).validate();
    }
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
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    if(this.precheckStatus && typeof (this.precheckStatus as any).validate === 'function') {
      (this.precheckStatus as any).validate();
    }
    if(this.retryState && typeof (this.retryState as any).validate === 'function') {
      (this.retryState as any).validate();
    }
    if(this.reverseJob && typeof (this.reverseJob as any).validate === 'function') {
      (this.reverseJob as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Data Transmission Service (DTS) tasks and the details of each task.
   */
  dtsJobList?: DescribeDtsJobsResponseBodyDtsJobList[];
  /**
   * @remarks
   * The dynamic error code. This parameter will be removed in the future.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. The value of this parameter is used to replace the **%s** variable in the value of the **ErrMessage** parameter.
   * 
   * >  For example, if the value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the value of the **DynamicMessage** parameter is **Type**, the specified **Type** parameter is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The DTS tasks and the details of each task.
   */
  etlDemoList?: DescribeDtsJobsResponseBodyEtlDemoList[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of DTS tasks that meet the query condition.
   * 
   * @example
   * 15
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dtsJobList: 'DtsJobList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      etlDemoList: 'EtlDemoList',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      etlDemoList: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyEtlDemoList },
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dtsJobList)) {
      $dara.Model.validateArray(this.dtsJobList);
    }
    if(Array.isArray(this.etlDemoList)) {
      $dara.Model.validateArray(this.etlDemoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

