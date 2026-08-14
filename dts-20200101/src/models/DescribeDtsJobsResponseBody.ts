// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * framework: DTS-31009: In process of processing data ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specification needs to be upgraded. Valid values:
   * 
   * - **true**: The specification needs to be upgraded.
   * - **false**: The specification does not need to be upgraded.
   * 
   * @example
   * false
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The task progress, in percentage.
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
   * The status of the task. For more information, see the description of the **Status** request parameter in this operation.
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
   * The error message returned when the ETL task fails.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the ETL task, in percentage.
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
   * The status of the ETL task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: running.
   * - **Failed**: execution failed.
   * - **Finished**: completed.
   * - **Catched**: no latency.
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
   * The error message returned when full data migration or initial full data synchronization fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of full data migration or initial full data synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records that have been migrated or initialized during full data migration or initial full data synchronization.
   * 
   * @example
   * 44755
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: migrating or initializing.
   * - **Failed**: migration or initialization failed.
   * - **Finished**: migration or initialization completed.
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
   * The error message returned when incremental data migration or synchronization fails.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specification needs to be upgraded. Valid values:
   * 
   * - **true**: The specification needs to be upgraded.
   * - **false**: The specification does not need to be upgraded.
   * 
   * > To upgrade the instance specification, call [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html).
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization, in percentage.
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
   * The status of incremental data migration or synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: migrating or synchronizing.
   * - **Failed**: migration or synchronization failed.
   * - **Finished**: migration or synchronization completed.
   * - **Catched**: no latency.
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
   * The name of the database to which the migration objects belong in the destination instance.
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
   * The instance ID of the destination instance.
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
   * > This parameter is returned only when **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
   * The error code.
   * 
   * @example
   * DTS-31009
   */
  errorCode?: string;
  /**
   * @remarks
   * The URL of the help documentation.
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
  /**
   * @remarks
   * Indicates whether migration switchover can be performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is used by the one-click upgrade feature of PolarDB.
   * 
   * @example
   * false
   */
  canSwitch?: boolean;
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task, in percentage.
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
   * The status of the full data verification task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Checking**: verifying.
   * - **Failed**: verification failed.
   * - **Finished**: verification completed.
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
   * The error message returned when the task fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task, in percentage.
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
   * The status of the incremental data verification task. Valid values:
   * - **Catched**: no latency.
   * - **NotStarted**: not started.
   * - **Checking**: verifying.
   * - **Failed**: verification failed.
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
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether full data validation is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  fullDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data validation is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  incDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether schema verification is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  structureDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  timeWindowCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureDataCheck: 'StructureDataCheck',
      structureInitialization: 'StructureInitialization',
      timeWindowCheck: 'TimeWindowCheck',
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
      timeWindowCheck: 'boolean',
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
   * The volume of data migrated or synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, UPDATE), and DDL statements.
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
   * The precheck item.
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
   * The check result. Valid values:
   * - **Success**: The check item passed.
   * - **Failed**: The check item did not pass.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck does not pass.
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The repair method when the precheck does not pass.
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
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
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
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
   * The precheck status. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Suspending**: paused.
   * - **Checking**: running a precheck.
   * - **Failed**: precheck failed.
   * - **Finished**: precheck completed.
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
   * The error message returned when the retry fails.
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
   * The maximum retry duration. Unit: seconds.
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
   * The ID of the help documentation for the error code.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the help documentation for the error code.
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
   * The workaround for the error.
   * 
   * @example
   * dts.retry.err.0046.workaround
   */
  migrationErrWorkaround?: string;
  /**
   * @remarks
   * The instance progress.
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
   * The retry target. Valid values:
   * 
   * - **srcDB**: the source database.
   * - **destDB**: the destination database.
   * - **inner_module**: a DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has been spent on retries. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * - **true**: Yes.
   * - **false**: No.
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
   * 43071
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: initializing.
   * - **Failed**: initialization failed.
   * - **Finished**: initialization completed.
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
   * The error message returned when incremental data synchronization fails.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specification needs to be upgraded. Valid values:
   * 
   * - **true**: The specification needs to be upgraded.
   * - **false**: The specification does not need to be upgraded.
   * 
   * > To upgrade the instance specification, call [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html).
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 20001
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data synchronization.
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
   * The name of the database to which the synchronization objects belong in the destination instance.
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
   * > This parameter is returned only when **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
   * The error code.
   * 
   * @example
   * DTS-31009
   */
  errorCode?: string;
  /**
   * @remarks
   * The URL of the help documentation.
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
  /**
   * @remarks
   * Indicates whether migration switchover can be performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is used by the one-click upgrade feature of PolarDB.
   * 
   * @example
   * false
   */
  canSwitch?: boolean;
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task, in percentage.
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
   * The status of the full data verification task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Checking**: verifying.
   * - **Failed**: verification failed.
   * - **Finished**: verification completed.
   * - **Inconsistency**: the task completed but inconsistent data exists.
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
   * The error message returned when the task fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task, in percentage.
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
   * The status of the incremental data verification task. Valid values:
   * - **Catched**: no latency.
   * - **NotStarted**: not started.
   * - **Checking**: verifying.
   * - **Failed**: verification failed.
   * - **Inconsistency**: the task completed but inconsistent data exists.
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
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether full data verification is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  fullDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data verification is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  incDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether schema verification is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  structureDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether initial schema synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  timeWindowCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureDataCheck: 'StructureDataCheck',
      structureInitialization: 'StructureInitialization',
      timeWindowCheck: 'TimeWindowCheck',
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
      timeWindowCheck: 'boolean',
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
   * The volume of data synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, UPDATE), and DDL statements.
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
   * The precheck item.
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
   * The check result. Valid values:
   * - **Success**: The check item passed.
   * - **Failed**: The check item did not pass.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck does not pass.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The repair method when the precheck does not pass.
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
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
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
   * The precheck status. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Suspending**: paused.
   * - **Checking**: running a precheck.
   * - **Failed**: precheck failed.
   * - **Finished**: precheck completed.
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
   * The name of the database to which the migration objects belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the source instance.
   * [_single.resp.200.
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
   * > This parameter is returned only when **EngineName** of the source instance is **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
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
   * The region in which the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the schema verification task, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of objects for which schema verification has been completed.
   * 
   * @example
   * 5
   */
  progress?: string;
  /**
   * @remarks
   * The status of the schema verification task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Checking**: verifying.
   * - **Failed**: verification failed.
   * - **Finished**: verification completed.
   * - **Inconsistency**: the task completed but inconsistent data exists.
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

export class DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureInitializationStatus extends $dara.Model {
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
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: initializing.
   * - **Failed**: initialization failed.
   * - **Finished**: initialization completed.
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
   * The synchronization checkpoint of incremental data synchronization, in the format of a Unix timestamp. Unit: seconds.
   * 
   * @example
   * 1616980369
   */
  checkpoint?: string;
  /**
   * @remarks
   * The current CPU utilization of the instance. Unit: %.
   * 
   * @example
   * 90
   */
  cpuUsage?: string;
  /**
   * @remarks
   * The task creation time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The schema definition of the synchronization objects in JSON format, which supports certain regular expressions. For more information and examples, see the description of migration, synchronization, or change tracking object configuration.
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster.
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
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobDestinationEndpoint;
  /**
   * @remarks
   * The instance ID of the data synchronization instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specification of the data transmission link.
   * > For more information about link specifications and performance test results, see [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. The value is fixed as **Reverse**.
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
   * The name of the synchronization task.
   * 
   * @example
   * RDS间迁移
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The DTS dedicated cluster resources that have been used. Unit: DU.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The error details.
   */
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListReverseJobErrorDetails[];
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The safe checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The expiration time of the instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is returned only when the value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status information of full data verification.
   */
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus;
  /**
   * @remarks
   * The status information of incremental data verification.
   */
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobIncDataCheckStatus;
  /**
   * @remarks
   * The maximum number of DUs for the serverless instance.
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
   * The synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs for the serverless instance.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the synchronization link.
   */
  performance?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS in JSON format. You can specify this parameter to meet special requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The status of the reverse synchronization task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying synchronization objects.
   * - **ModifyFailed**: failed to modify synchronization objects.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * @example
   * Synchronizing
   */
  status?: string;
  /**
   * @remarks
   * The status information of schema verification.
   */
  structureDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListReverseJobStructureDataCheckStatus;
  /**
   * @remarks
   * The status of initial schema synchronization.
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
   * The name of the database to which the migration objects belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the source instance.
   * [_single.resp.200.
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
   * > This parameter is returned only when **EngineName** of the source instance is **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
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
   * The region in which the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the schema verification task, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of objects for which schema verification has been completed.
   * 
   * @example
   * 5
   */
  progress?: string;
  /**
   * @remarks
   * The status of the schema verification task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Checking**: verifying.
   * - **Failed**: verification failed.
   * - **Finished**: verification completed.
   * - **Inconsistency**: the task completed but inconsistent data exists.
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

export class DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when schema migration or initial schema synchronization fails.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of schema migration or initial schema synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables for which schema migration or initial schema synchronization has been completed.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of schema migration or initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: migrating or initializing.
   * - **Failed**: migration or initialization failed.
   * - **Finished**: migration or initialization completed.
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

export class DescribeDtsJobsResponseBodyDtsJobListTimeWindowDataCheckStatus extends $dara.Model {
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

export class DescribeDtsJobsResponseBodyDtsJobList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance uses the new version of change tracking. The value **new** indicates the new version.
   * > This parameter is returned only for new-version change tracking instances.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The beginning of the timestamp range for data stored in the change tracking instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start checkpoint of incremental data migration or the synchronization checkpoint, in the format of a Unix timestamp. Unit: seconds.
   * 
   * @example
   * 1616899019
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream consumer client information, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114...:dts******
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The current CPU utilization of the instance. Unit: %.
   * 
   * @example
   * 1
   */
  cpuUsage?: string;
  /**
   * @remarks
   * The task creation time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task progress status of physical migration to the cloud.
   */
  dataCloudStatus?: DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus;
  /**
   * @remarks
   * The status of the ETL task.
   * > This parameter set is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobsResponseBodyDtsJobListDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyDtsJobListDataSynchronizationStatus;
  /**
   * @remarks
   * The objects for data migration, data synchronization, or change tracking. For more information, see [Objects for data migration, data synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster.
   * 
   * @example
   * dtscluster_ft7y3**********
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization.
   * > For data migration tasks, the unit is milliseconds. For data synchronization tasks, the unit is seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobsResponseBodyDtsJobListDestinationEndpoint;
  /**
   * @remarks
   * The environment label of the DTS instance. Valid values:
   * 
   * - **normal**: normal
   * - **online**: online
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
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
   * The specification of the data transmission link.
   * > For more information about link specifications and performance test results, see [Specifications of data migration links](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > This parameter is returned only when the topology of the data synchronization instance is two-way synchronization.
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
   * RDS间迁移
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The DU usage of the dedicated cluster task.
   * 
   * @example
   * 12.0%
   */
  duRealUsage?: string;
  /**
   * @remarks
   * The DTS dedicated cluster resources that have been used. Unit: DU.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The end of the timestamp range for data stored in the change tracking instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error details.
   */
  errorDetails?: DescribeDtsJobsResponseBodyDtsJobListErrorDetails[];
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The safe checkpoint of the ETL task.
   * 
   * @example
   * 1610540493
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The expiration time of the instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is returned only when the value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status information of full data verification.
   */
  fullDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListFullDataCheckStatus;
  /**
   * @remarks
   * The status information of incremental data verification.
   */
  incDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus;
  insightModule?: boolean;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * - **online**: data migration.
   * - **sync**: data synchronization.
   * - **subscribe**: change tracking.
   * 
   * @example
   * online
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs for the serverless instance.
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
   * The ID of the help documentation for the error code.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the help documentation for the error code.
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
   * The workaround for the error.
   * 
   * @example
   * dts.retry.err.0046.workaround
   */
  migrationErrWorkaround?: string;
  /**
   * @remarks
   * The migration type or synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobsResponseBodyDtsJobListMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs for the serverless instance.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The task source:
   * 
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS任务
   */
  originType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the data migration or synchronization link.
   */
  performance?: DescribeDtsJobsResponseBodyDtsJobListPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS in JSON format. You can specify this parameter to meet special requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
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
   * The retry state. DTS is retrying because the task encountered an exception.
   */
  retryState?: DescribeDtsJobsResponseBodyDtsJobListRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * > This parameter set is returned only when the task is a data synchronization task with a two-way synchronization topology.
   */
  reverseJob?: DescribeDtsJobsResponseBodyDtsJobListReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyDtsJobListSourceEndpoint;
  /**
   * @remarks
   * The instance status of the DTS instance. Valid values:
   * 
   * Data migration task statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Migrating**: migrating.
   * - **Suspending**: paused.
   * - **MigrationFailed**: migration failed.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Data synchronization task statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying synchronization objects.
   * - **ModifyFailed**: failed to modify synchronization objects.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Change tracking task statuses:
   * - **NotConfigured**: not configured.
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **Starting**: starting.
   * - **Normal**: normal.
   * - **Retrying**: retrying.
   * - **Abnormal**: abnormal.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The status information of schema verification.
   */
  structureDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListStructureDataCheckStatus;
  /**
   * @remarks
   * The status of schema migration or initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyDtsJobListStructureInitializationStatus;
  /**
   * @remarks
   * The tag collection.
   */
  tagList?: DescribeDtsJobsResponseBodyDtsJobListTagList[];
  timeWindowDataCheckStatus?: DescribeDtsJobsResponseBodyDtsJobListTimeWindowDataCheckStatus;
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
      insightModule: 'InsightModule',
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
      timeWindowDataCheckStatus: 'TimeWindowDataCheckStatus',
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
      insightModule: 'boolean',
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
      timeWindowDataCheckStatus: DescribeDtsJobsResponseBodyDtsJobListTimeWindowDataCheckStatus,
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
    if(this.timeWindowDataCheckStatus && typeof (this.timeWindowDataCheckStatus as any).validate === 'function') {
      (this.timeWindowDataCheckStatus as any).validate();
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
   * The error message returned when the ETL task fails.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the ETL task, in percentage.
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
   * The status of the ETL task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: running.
   * - **Failed**: execution failed.
   * - **Finished**: completed.
   * - **Catched**: no latency.
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
   * The error message returned when full data migration or initial full data synchronization fails.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of full data migration or initial full data synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records that have been migrated or initialized during full data migration or initial full data synchronization.
   * 
   * @example
   * 44755
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: migrating or initializing.
   * - **Failed**: migration or initialization failed.
   * - **Finished**: migration or initialization completed.
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
   * The error message returned when incremental data migration or synchronization fails.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specification needs to be upgraded. Valid values:
   * 
   * - **true**: The specification needs to be upgraded.
   * - **false**: The specification does not need to be upgraded.
   * 
   * > To upgrade the instance specification, call [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html).
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization, in percentage.
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
   * The status of incremental data migration or synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: migrating or synchronizing.
   * - **Failed**: migration or synchronization failed.
   * - **Finished**: migration or synchronization completed.
   * - **Catched**: no latency.
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
   * The name of the database to which the migration objects belong in the destination instance.
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
   * > This parameter is returned only when **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
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
   * The volume of data migrated or synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, UPDATE), and DDL statements.
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
   * The precheck item.
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
   * The check result. Valid values:
   * - **Success**: The check item passed.
   * - **Failed**: The check item did not pass.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck does not pass.
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The repair method when the precheck does not pass.
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
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
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
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
   * The precheck status. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Suspending**: paused.
   * - **Checking**: running a precheck.
   * - **Failed**: precheck failed.
   * - **Finished**: precheck completed.
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
   * The error message returned when the retry fails.
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
   * The maximum retry duration. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The instance progress.
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
   * The retry target. Valid values:
   * 
   * - **srcDB**: the source database.
   * - **destDB**: the destination database.
   * - **inner_module**: a DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has been spent on retries. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * - **true**: Yes.
   * - **false**: No.
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
   * 43071
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: initializing.
   * - **Failed**: initialization failed.
   * - **Finished**: initialization completed.
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
   * The error message returned when incremental data synchronization fails.
   * 
   * @example
   * 任务失败太久无法恢复
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specification needs to be upgraded. Valid values:
   * 
   * - **true**: The specification needs to be upgraded.
   * - **false**: The specification does not need to be upgraded.
   * 
   * > To upgrade the instance specification, call [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html).
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 20001
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data synchronization.
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
   * The name of the database to which the synchronization objects belong in the destination instance.
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
   * > This parameter is returned only when **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: Yes.
   * - **false**: No.
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
   * The volume of data migrated or synchronized per second. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, UPDATE), and DDL statements.
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
   * The precheck item.
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
   * The check result. Valid values:
   * - **Success**: The check item passed.
   * - **Failed**: The check item did not pass.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck does not pass.
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.XXX.XX\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The repair method when the precheck does not pass.
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
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
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errorMessage?: string;
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
   * The precheck status. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Suspending**: paused.
   * - **Checking**: running a precheck.
   * - **Failed**: precheck failed.
   * - **Finished**: precheck completed.
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
   * The name of the database to which the migration objects belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the source instance.
   * [_single.resp.200.
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
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when **EngineName** of the source instance is **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
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
   * The region in which the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: initializing.
   * - **Failed**: initialization failed.
   * - **Finished**: initialization completed.
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
   * The synchronization checkpoint of incremental data synchronization, in the format of a Unix timestamp. Unit: seconds.
   * 
   * @example
   * 1616980369
   */
  checkpoint?: string;
  /**
   * @remarks
   * The task creation time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The schema definition of the synchronization objects in JSON format, which supports certain regular expressions. For more information and examples, see [Objects for data migration, data synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
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
   * The connection information of the destination instance.
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
   * The specification of the data transmission link.
   * > For more information about link specifications and performance test results, see [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. The value is fixed as **Reverse**.
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
   * The name of the synchronization task.
   * 
   * @example
   * RDS间迁移
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The safe checkpoint of the ETL task.
   * 
   * @example
   * 161054****
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The expiration time of the instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is returned only when the value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The migration type or synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobMigrationMode;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the data migration or synchronization link.
   */
  performance?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS in JSON format. You can specify this parameter to meet special requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The status of the reverse synchronization task. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying synchronization objects.
   * - **ModifyFailed**: failed to modify synchronization objects.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * @example
   * Synchronizing
   */
  status?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
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
   * The name of the database to which the migration objects belong in the source instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine of the source instance.
   * [_single.resp.200.
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
   * > This parameter is returned only when **EngineName** of the source instance is **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
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
   * The region in which the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL is used with a CA certificate uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
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
   * The error message returned when schema migration or initial schema synchronization fails.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of schema migration or initial schema synchronization, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables for which schema migration or initial schema synchronization has been completed.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of schema migration or initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: not started.
   * - **Migrating**: migrating or initializing.
   * - **Failed**: migration or initialization failed.
   * - **Finished**: migration or initialization completed.
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
   * Indicates whether the instance uses the new version of change tracking. The value **new** indicates the new version.
   * > This parameter is returned only for new-version change tracking instances.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The beginning of the timestamp range for data stored in the change tracking instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start checkpoint of incremental data migration or the synchronization checkpoint, in the format of a Unix timestamp. Unit: seconds.
   * 
   * @example
   * 1616899019
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream consumer client information, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114...:dts******
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The task creation time in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   * > This parameter set is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus;
  /**
   * @remarks
   * The objects for data migration, data synchronization, or change tracking. For more information, see [Objects for data migration, data synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization.
   * > For data migration tasks, the unit is milliseconds. For data synchronization tasks, the unit is seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection information of the destination instance.
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
   * The specification of the data transmission link.
   * > For more information about link specifications and performance test results, see [Specifications of data migration links](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > This parameter is returned only when the topology of the data synchronization instance is two-way synchronization.
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
   * RDS间迁移
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range for data stored in the change tracking instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2021-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The safe checkpoint of the ETL task.
   * 
   * @example
   * 161054****
   */
  etlSafeCheckpoint?: string;
  /**
   * @remarks
   * The expiration time of the instance in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is returned only when the value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * - **online**: data migration.
   * - **sync**: data synchronization.
   * - **subscribe**: change tracking.
   * 
   * @example
   * online
   */
  jobType?: string;
  /**
   * @remarks
   * The migration type or synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobsResponseBodyEtlDemoListMigrationMode;
  /**
   * @remarks
   * The task source:
   * 
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS任务
   */
  originType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the data migration or synchronization link.
   */
  performance?: DescribeDtsJobsResponseBodyEtlDemoListPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobsResponseBodyEtlDemoListPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS in JSON format. You can specify this parameter to meet special requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
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
   * The retry state. DTS is retrying because the task encountered an exception.
   */
  retryState?: DescribeDtsJobsResponseBodyEtlDemoListRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * > This parameter set is returned only when the task is a data synchronization task with a two-way synchronization topology.
   */
  reverseJob?: DescribeDtsJobsResponseBodyEtlDemoListReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobsResponseBodyEtlDemoListSourceEndpoint;
  /**
   * @remarks
   * The instance status of the DTS instance. Valid values:
   * 
   * Data migration task statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Migrating**: migrating.
   * - **Suspending**: paused.
   * - **MigrationFailed**: migration failed.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Data synchronization task statuses:
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **NotConfigured**: not configured.
   * - **Initializing**: performing initial synchronization.
   * - **InitializeFailed**: initial synchronization failed.
   * - **Synchronizing**: synchronizing.
   * - **Failed**: synchronization failed.
   * - **Suspending**: paused.
   * - **Modifying**: modifying synchronization objects.
   * - **ModifyFailed**: failed to modify synchronization objects.
   * - **Finished**: completed.
   * - **Retrying**: retrying.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * Change tracking task statuses:
   * - **NotConfigured**: not configured.
   * - **NotStarted**: not started.
   * - **Prechecking**: running a precheck.
   * - **PrecheckFailed**: precheck failed.
   * - **PreCheckPass**: precheck passed.
   * - **Starting**: starting.
   * - **Normal**: normal.
   * - **Retrying**: retrying.
   * - **Abnormal**: abnormal.
   * - **Upgrade**: upgrading.
   * - **Locked**: locked.
   * - **Downgrade**: downgrading.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The status of schema migration or initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus;
  /**
   * @remarks
   * The tag collection.
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
   * The task list and execution details of each task.
   */
  dtsJobList?: DescribeDtsJobsResponseBodyDtsJobList[];
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **Type**, the request parameter **Type** is invalid.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
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
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The task list and execution details of each task.
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
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records that can be displayed on the current page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of DTS instances that meet the specified conditions.
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

