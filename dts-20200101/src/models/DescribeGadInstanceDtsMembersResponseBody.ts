// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataCloudStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specifications need to be upgraded. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The task progress. Unit: %.
   * 
   * @example
   * 100
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
   * The status of the physical migration to the cloud task.
   * 
   * @example
   * Finished
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for a failed ETL task.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ETL task progress. Unit: %.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which the ETL task is completed.
   * 
   * @example
   * 75
   */
  progress?: string;
  /**
   * @remarks
   * The log level of the log information. Multiple statuses are separated by commas (,). Valid values:
   * 
   * - **NORMAL**: Normal.
   * - **WARN**: Warning.
   * - **ERROR**: Error.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for failed full data migration or initial data synchronization.
   * 
   * @example
   * The deviceName is empty.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of full data migration or initial data synchronization. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial data synchronization is completed.
   * 
   * @example
   * 35
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial data synchronization.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for failed incremental data migration or synchronization.
   * 
   * @example
   * The deviceName format is incorrect.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specifications need to be upgraded. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > To upgrade the instance specifications, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization. Unit: %.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which incremental data migration or synchronization is completed.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The log level of the log information. Multiple statuses are separated by commas (,). Valid values:
   * 
   * - **NORMAL**: Normal.
   * - **WARN**: Warning.
   * - **ERROR**: Error.
   * 
   * @example
   * Finished
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration objects in the instance belong.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine type of the instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The database service port of the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL-secured connection is used. Valid values:
   * 
   * - **DISABLE**: SSL-secured connections are not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL-secured connections are used, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL-secured connections to AWS MongoDB Atlas are used.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * dts
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListErrorDetails extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The URL of the help document.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListFullDataCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * device status is offline
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The completion progress of the full data verification task.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The status information of full data verification.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListIncDataCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * voice intercom existed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task. Unit: %.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The completion progress of the incremental data verification task.
   * 
   * @example
   * 5
   */
  progress?: string;
  /**
   * @remarks
   * The status information of incremental data verification.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListMigrationMode extends $dara.Model {
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
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListPerformance extends $dara.Model {
  /**
   * @remarks
   * The data migration or synchronization traffic per second, in MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListPrecheckStatusDetail extends $dara.Model {
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
   * - **Success**: The item passed the check.
   * - **Failed**: The item failed the check.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message for the failed precheck.
   * > This parameter is returned only when the **CheckResult** parameter is set to **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The solution for the failed precheck.
   * > This parameter is returned only when the **CheckResult** parameter is set to **Failed**.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  detail?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message for the precheck failure.
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
   * The precheck status.
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
      detail: { 'type': 'array', 'itemType': DescribeGadInstanceDtsMembersResponseBodyDtsJobListPrecheckStatusDetail },
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message returned when a call error occurs.
   * 
   * @example
   * The request processing has failed due to some unknown error.
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
   * The maximum retry time, in seconds.
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
   * The ID of the help document for the error code.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the help document for the error code.
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
   * The error workaround.
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
   * The number of retries.
   * 
   * @example
   * 5
   */
  retryCount?: number;
  /**
   * @remarks
   * The retry target. Valid values:
   * 
   * - **srcDB**: The source database.
   * - **destDB**: The destination database.
   * - **inner_module**: The internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The elapsed retry time, in seconds.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for the initial full data synchronization failure.
   * 
   * @example
   * The deviceName format is incorrect.
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
   * The number of records for which initial full data synchronization is completed.
   * 
   * @example
   * 43071
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial full data synchronization.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for the incremental data synchronization failure.
   * 
   * @example
   * Instance not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance specifications need to be upgraded. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > To upgrade the instance specifications, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
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
   * The number of records for which incremental data migration or synchronization is completed.
   * 
   * @example
   * 31
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data synchronization.
   * 
   * @example
   * Finished
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the synchronized objects belong in the instance.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The database engine type of the instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The database service port of the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL-secured connection is used. Valid values:
   * 
   * - **DISABLE**: SSL-secured connections are not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL-secured connections are used, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL-secured connections to AWS MongoDB Atlas are used.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * dts
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobErrorDetails extends $dara.Model {
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
   * The URL of the help document.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobFullDataCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The completion progress of the full data verification task.
   * 
   * @example
   * 35
   */
  progress?: string;
  /**
   * @remarks
   * The status information of full data verification.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobIncDataCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task. Unit: %.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The completion progress of the incremental data verification task.
   * 
   * @example
   * 35
   */
  progress?: string;
  /**
   * @remarks
   * The status information of incremental data verification.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform initial full data synchronization. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform incremental data synchronization. Valid values:
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
   * Specifies whether to perform initial schema synchronization. Valid values:
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
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The data synchronization traffic per second, in MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPrecheckStatusDetail extends $dara.Model {
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
   * The precheck result. Valid values:
   * - **Success**: The item passed the precheck.
   * - **Failed**: The item failed the precheck.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The solution provided when the precheck fails.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  detail?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message for the precheck failure.
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
   * The precheck status.
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
      detail: { 'type': 'array', 'itemType': DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPrecheckStatusDetail },
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration objects in the instance belong.
   * 
   * @example
   * dtstestdata
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
   * The source instance ID.
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
   * The endpoint of the instance.
   * 
   * @example
   * 172.16.88.***
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** parameter of the source instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL-secured connection is used. Valid values:
   * 
   * - **DISABLE**: SSL-secured connections are not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL-secured connections are used, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL-secured connections to AWS MongoDB Atlas are used.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * dts
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobStructureInitializationStatus extends $dara.Model {
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
   * The number of tables for which initial schema synchronization is completed.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJob extends $dara.Model {
  /**
   * @remarks
   * The checkpoint for incremental data synchronization. The value is a UNIX timestamp, in seconds.
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
   * The task creation time, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is in UTC.
   * 
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: string;
  /**
   * @remarks
   * The status of initial full data synchronization.
   */
  dataInitializationStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data synchronization.
   */
  dataSynchronizationStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The schema definition of the synchronized objects. The value is a JSON string and supports specific regular expressions. For more information and examples, see the object configuration instructions for migration, synchronization, or change tracking.
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the dedicated DTS cluster.
   * 
   * @example
   * dtscluster_dpwl3**********
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency, in seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDestinationEndpoint;
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
   * The specifications of the synchronization link.
   * > For more information about the specifications and performance test results of each link, see [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The description of the DTS task.
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
   * The name of the DTS task.
   * 
   * @example
   * test2
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The used resources of the dedicated DTS cluster. Unit: DU.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The error details.
   */
  errorDetails?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobErrorDetails[];
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * Instance not found.
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
   * The expiration time of the instance, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2023-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status information of full data verification.
   */
  fullDataCheckStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobFullDataCheckStatus;
  /**
   * @remarks
   * The status information of incremental data verification.
   */
  incDataCheckStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobIncDataCheckStatus;
  /**
   * @remarks
   * The DU upper limit of the serverless instance.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The amount of used memory, in MB.
   * 
   * @example
   * 500
   */
  memUsage?: string;
  /**
   * @remarks
   * The type of initial synchronization.
   */
  migrationMode?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobMigrationMode;
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
   * - **PrePaid**: Subscription.
   * - **PostPaid**: Pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the synchronization link.
   */
  performance?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameters of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as specifying whether to automatically start the precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobSourceEndpoint;
  /**
   * @remarks
   * The status of the reverse synchronization task.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobStructureInitializationStatus;
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
      structureInitializationStatus: 'StructureInitializationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      cpuUsage: 'string',
      createTime: 'string',
      dataInitializationStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duUsage: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobFullDataCheckStatus,
      incDataCheckStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobIncDataCheckStatus,
      maxDu: 'number',
      memUsage: 'string',
      migrationMode: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobMigrationMode,
      minDu: 'number',
      payType: 'string',
      performance: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPerformance,
      precheckStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobPrecheckStatus,
      reserved: 'string',
      sourceEndpoint: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJobStructureInitializationStatus,
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
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration objects in the source instance belong.
   * 
   * @example
   * dtstestdata
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
   * The source instance ID.
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
   * > This parameter is returned only when the **EngineName** parameter of the source instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region where the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether an SSL-secured connection is used. Valid values:
   * 
   * - **DISABLE**: SSL-secured connections are not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL-secured connections are used, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL-secured connections to AWS MongoDB Atlas are used.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to connect to Kafka.
   * 
   * @example
   * DISABLE
   */
  sslSolutionEnum?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * dts
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListStructureInitializationStatus extends $dara.Model {
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
   * The number of tables for which schema migration or initial schema synchronization is completed.
   * 
   * @example
   * 35
   */
  progress?: string;
  /**
   * @remarks
   * The status of schema migration or initial schema synchronization.
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobListTagList extends $dara.Model {
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

export class DescribeGadInstanceDtsMembersResponseBodyDtsJobList extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start time of the timestamp range saved in the change tracking instance, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is in UTC.
   * 
   * @example
   * 2021-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The checkpoint.
   * 
   * @example
   * 1616899019
   */
  checkpoint?: string;
  /**
   * @remarks
   * The downstream consumption checkpoint of the change tracking instance, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is in UTC.
   * 
   * @example
   * 2021-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream consumption client information, which consists of the IP address and a random number generated by DTS.
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
   * The task creation time, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is in UTC.
   * 
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the physical migration to the cloud task.
   */
  dataCloudStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataCloudStatus;
  /**
   * @remarks
   * The status of the ETL task.
   * > This parameter collection is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial data synchronization.
   */
  dataInitializationStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataSynchronizationStatus;
  /**
   * @remarks
   * The migration, synchronization, or change tracking objects. For more information about the definitions, see [Description of migration, synchronization, or change tracking objects](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {"dtstestdata": { "name": "dtstestdata", "all": true }}
   */
  dbObject?: string;
  /**
   * @remarks
   * The ID of the dedicated DTS cluster.
   * 
   * @example
   * dtscluster_ft7y3**********
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization.
   * > If you query a data migration task, the unit of this parameter is milliseconds. If you query a data synchronization task, the unit of this parameter is seconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDestinationEndpoint;
  /**
   * @remarks
   * The environment tag of the DTS instance. Valid values:
   * 
   * - **normal**: Normal.
   * - **online**: Online.
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or subscribe instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The link specifications.
   * > For more information about the specifications and performance tests of each link, see [Specifications for data migration links](https://help.aliyun.com/document_detail/26606.html) and [Specifications for data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * large
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
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
   * The name of the DTS task.
   * 
   * @example
   * TestNg_polardb_cn-beijing_cn-beijing_polardb
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The used resources of the dedicated DTS cluster. Unit: DU.
   * 
   * @example
   * 15
   */
  duUsage?: number;
  /**
   * @remarks
   * The end backup timestamp.
   * 
   * @example
   * 2021-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error details.
   */
  errorDetails?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListErrorDetails[];
  /**
   * @remarks
   * The error message for a failed task.
   * 
   * @example
   * The deviceName is empty.
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
   * The expiration time of the instance, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status information of full data verification.
   */
  fullDataCheckStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListFullDataCheckStatus;
  /**
   * @remarks
   * The status information of incremental data verification.
   */
  incDataCheckStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListIncDataCheckStatus;
  /**
   * @remarks
   * The DTS task type.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The DU upper limit of the serverless instance.
   * 
   * @example
   * 4.0
   */
  maxDu?: number;
  /**
   * @remarks
   * The used memory. Unit: MB.
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
   * The ID of the help document for the error code.
   * 
   * @example
   * 462133
   */
  migrationErrHelpDocId?: string;
  /**
   * @remarks
   * The key of the help document for the error code.
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
   * The error workaround.
   * 
   * @example
   * dts.retry.err.0046.workaround
   */
  migrationErrWorkaround?: string;
  /**
   * @remarks
   * The migration type or initial synchronization type.
   */
  migrationMode?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListMigrationMode;
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
   * The source of the task. Valid values:
   * 
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS
   */
  originType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: Subscription.
   * - **PostPaid**: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the migration or synchronization link.
   */
  performance?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter for DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
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
   * The retry state of DTS due to a task exception.
   */
  retryState?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * > This parameter collection is returned only when the task is a data synchronization task and the topology type is two-way.
   */
  reverseJob?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListSourceEndpoint;
  /**
   * @remarks
   * The DTS instance status. Valid values:
   * 
   * Status of a data migration node:
   * - **NotStarted**: The node is not started.
   * - **Prechecking**: The precheck is in progress.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **NotConfigured**: The node is not configured.
   * - **Migrating**: The migration is in progress.
   * - **Suspending**: The node is being paused.
   * - **MigrationFailed**: The migration failed.
   * - **Finished**: The node is completed.
   * - **Retrying**: The node is being retried.
   * - **Upgrade**: The node is being upgraded.
   * - **Locked**: The node is locked.
   * - **Downgrade**: The node is being downgraded.
   * 
   * Status of a data synchronization node:
   * - **NotStarted**: The node is not started.
   * - **Prechecking**: The precheck is in progress.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **NotConfigured**: The node is not configured.
   * - **Initializing**: Initial synchronization is in progress.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **Synchronizing**: Data synchronization is in progress.
   * - **Failed**: The synchronization failed.
   * - **Suspending**: The node is being paused.
   * - **Modifying**: The synchronization objects are being modified.
   * - **Finished**: The node is completed.
   * - **Retrying**: The node is being retried.
   * - **Upgrade**: The node is being upgraded.
   * - **Locked**: The node is locked.
   * - **Downgrade**: The node is being downgraded.
   * 
   * Status of a subscribe node:
   * - **NotConfigured**: The node is not configured.
   * - **NotStarted**: The node is not started.
   * - **Prechecking**: The precheck is in progress.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **Starting**: The node is being started.
   * - **Normal**: The node is running normally.
   * - **Retrying**: The node is being retried.
   * - **Abnormal**: The node is abnormal.
   * - **Upgrade**: The node is being upgraded.
   * - **Locked**: The node is locked.
   * - **Downgrade**: The node is being downgraded.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of schema migration or initial schema synchronization.
   */
  structureInitializationStatus?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListStructureInitializationStatus;
  /**
   * @remarks
   * The list of tags.
   */
  tagList?: DescribeGadInstanceDtsMembersResponseBodyDtsJobListTagList[];
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
      dataCloudStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataCloudStatus,
      dataEtlStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataEtlStatus,
      dataInitializationStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataInitializationStatus,
      dataSynchronizationStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDataSynchronizationStatus,
      dbObject: 'string',
      dedicatedClusterId: 'string',
      delay: 'number',
      destinationEndpoint: DescribeGadInstanceDtsMembersResponseBodyDtsJobListDestinationEndpoint,
      dtsBisLabel: 'string',
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      duUsage: 'number',
      endTimestamp: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeGadInstanceDtsMembersResponseBodyDtsJobListErrorDetails },
      errorMessage: 'string',
      etlSafeCheckpoint: 'string',
      expireTime: 'string',
      fullDataCheckStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListFullDataCheckStatus,
      incDataCheckStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListIncDataCheckStatus,
      jobType: 'string',
      maxDu: 'number',
      memUsage: 'string',
      migrationErrCode: 'string',
      migrationErrHelpDocId: 'string',
      migrationErrHelpDocKey: 'string',
      migrationErrMsg: 'string',
      migrationErrType: 'string',
      migrationErrWorkaround: 'string',
      migrationMode: DescribeGadInstanceDtsMembersResponseBodyDtsJobListMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeGadInstanceDtsMembersResponseBodyDtsJobListPerformance,
      precheckStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListPrecheckStatus,
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeGadInstanceDtsMembersResponseBodyDtsJobListRetryState,
      reverseJob: DescribeGadInstanceDtsMembersResponseBodyDtsJobListReverseJob,
      sourceEndpoint: DescribeGadInstanceDtsMembersResponseBodyDtsJobListSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeGadInstanceDtsMembersResponseBodyDtsJobListStructureInitializationStatus,
      tagList: { 'type': 'array', 'itemType': DescribeGadInstanceDtsMembersResponseBodyDtsJobListTagList },
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

export class DescribeGadInstanceDtsMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: number;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MySQL
   */
  dbEngineType?: string;
  /**
   * @remarks
   * The list of tasks and the execution details of each task.
   */
  dtsJobList?: DescribeGadInstanceDtsMembersResponseBodyDtsJobList[];
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated soon.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the **%s** in the **ErrMessage** response parameter.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified request parameter **DtsJobId** is invalid.
   * 
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
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
   * The error message returned when a call error occurs.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the active-active instance group.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the active-active instance group.
   * 
   * @example
   * test
   */
  instanceName?: string;
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
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The region ID of the instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C166D79D-436B-45F0-B5A5-25E1959F****
   */
  requestId?: string;
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
   * The status of the active geo-redundancy instance group.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbEngineType: 'DbEngineType',
      dtsJobList: 'DtsJobList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dbEngineType: 'string',
      dtsJobList: { 'type': 'array', 'itemType': DescribeGadInstanceDtsMembersResponseBodyDtsJobList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dtsJobList)) {
      $dara.Model.validateArray(this.dtsJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

