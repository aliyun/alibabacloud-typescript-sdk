// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo extends $dara.Model {
  /**
   * @remarks
   * The number of partitions for the delivery topic.
   * 
   * @example
   * 3
   */
  partitionNum?: number;
  /**
   * @remarks
   * The public endpoint of the delivery channel.
   * 
   * @example
   * dts-****.aliyuncs.com:18***
   */
  publicDproxyUrl?: string;
  /**
   * @remarks
   * The region where the delivery channel resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The destination topic for delivery.
   * 
   * @example
   * cn_hangzhou_******_data_delivery_version2
   */
  topic?: string;
  /**
   * @remarks
   * The VPC endpoint of the delivery channel.
   * 
   * @example
   * dts-****.aliyuncs.com:18***
   */
  vpcDproxyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      partitionNum: 'PartitionNum',
      publicDproxyUrl: 'PublicDproxyUrl',
      region: 'Region',
      topic: 'Topic',
      vpcDproxyUrl: 'VpcDproxyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionNum: 'number',
      publicDproxyUrl: 'string',
      region: 'string',
      topic: 'string',
      vpcDproxyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodyDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when incremental data migration or synchronization fails.
   * 
   * @example
   * The task has failed for too long to recover
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether to display the option to upgrade the instance type. Valid values:
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
   * The number of data rows and data volume migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data migration or synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodyDestinationEndpoint extends $dara.Model {
  aliyunUid?: string;
  /**
   * @remarks
   * Indicates whether the password can be modified. Valid values:
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
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
   * The destination instance type.
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
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  roleName?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL connection is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL connection is used, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL connection is used to connect to AWS MongoDB Atlas.
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
      aliyunUid: 'AliyunUid',
      canModifyPassword: 'CanModifyPassword',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      canModifyPassword: 'boolean',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodyMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data transformation is performed. Valid values:
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExtractTransformLoad: 'DataExtractTransformLoad',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExtractTransformLoad: 'boolean',
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

export class DescribeDtsJobDetailResponseBodyRetryState extends $dara.Model {
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
   * The maximum retry time. Unit: seconds.
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
   * - **srcDB**: source database.
   * - **destDB**: destination database.
   * - **inner_module**: DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The elapsed retry time. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
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

export class DescribeDtsJobDetailResponseBodySourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * Indicates whether the password can be modified. Valid values:
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
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
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
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
   * > This parameter is returned only when the **EngineName** of the source instance is set to **Oracle** and the Oracle database is a non-Real Application Cluster instance.
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
   * The region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: SSL connection is not used.
   * - **ENABLE_WITH_CERTIFICATE**: SSL connection is used, and the CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL connection is used to connect to AWS MongoDB Atlas.
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
      aliyunUid: 'AliyunUid',
      canModifyPassword: 'CanModifyPassword',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      canModifyPassword: 'boolean',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: Running.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
   * - **Catched**: No latency.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
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
   * The number of data rows and data volume migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data migration or synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * rm-bp1f9guj5rhzq****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-Real Application Cluster (RAC) instance.
   * 
   * @example
   * testid
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
   * The region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: An SSL connection is not used.
   * - **ENABLE_WITH_CERTIFICATE**: An SSL connection is used, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: An SSL connection is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: A SCRAM-SHA-256 connection is used to connect to Kafka.
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data transformation is performed. Valid values:
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
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
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExtractTransformLoad: 'DataExtractTransformLoad',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExtractTransformLoad: 'boolean',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The volume of data migrated or synchronized per second, in MB/s.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail extends $dara.Model {
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
   * - **Success**: The check item is passed.
   * - **Failed**: The check item is not passed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method to fix the precheck failure.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The overall precheck progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
   * - **NotStarted**: Not started.
   * - **Prechecking**: Prechecking.
   * - **PrecheckFailed**: Precheck failed.
   * - **Finished**: Finished.
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
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail },
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ta7w132u12h****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum retry time. Unit: seconds.
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
   * - **srcDB**: source database.
   * - **destDB**: destination database.
   * - **inner_module**: DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The elapsed retry time. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * @example
   * true
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
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
      errMsg: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: Running.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
   * - **Catched**: No latency.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
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
   * The number of data rows and data volume migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data migration or synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * rm-bp1f9guj5rhzq****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL is used for the connection. Valid values:
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data transformation is performed. Valid values:
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
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
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExtractTransformLoad: 'DataExtractTransformLoad',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExtractTransformLoad: 'boolean',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The volume of data migrated or synchronized per second, in MB/s.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail extends $dara.Model {
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
   * - **Success**: The check is passed.
   * - **Failed**: The check is not passed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The repair method for the failed precheck item.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The overall precheck progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
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
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail },
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ta7w132u12h****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum retry time. Unit: seconds.
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
   * - **srcDB**: source database.
   * - **destDB**: destination database.
   * - **inner_module**: DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The elapsed retry time. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * @example
   * true
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
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
      errMsg: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * @example
   * rm-bp2f3huj5rhzq****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL is used for the connection. Valid values:
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of tables that have completed initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscription data includes DDL statements. Valid values:
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription data includes DML statements. Valid values:
   * 
   * @example
   * true
   */
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the subscribe node. The format is `Address:Port number`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobTagList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 191448876515****
   */
  aliUid?: number;
  /**
   * @remarks
   * The tag operator.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The visibility of the tag. Valid values:
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag type. Valid values:
   * 
   * - **System**: A tag created by the system.
   * - **Custom**: A tag added by the user.
   * 
   * > If this parameter is empty, tags that can be publicly displayed are returned by default.
   * 
   * @example
   * System
   */
  tagCategory?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance uses the new version of change tracking. The value "new" indicates the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset or synchronization offset of incremental data migration. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * If the source instance is a PolarDB-X 1.0 instance, specify the number of ApsaraDB RDS for MySQL instances attached to it.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for migration, synchronization, or change tracking. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  dbObjectSize?: number;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization, in milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the consumer client. Valid values:
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDestinationEndpoint;
  /**
   * @remarks
   * The DTS instance ID.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specification of the data transmission link.
   * 
   * @example
   * xlarge
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
   * The DTS task ID.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The DTS instance name.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the value of the **PayType** parameter is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The task source:
   * 
   * @example
   * DTS node
   */
  originType?: string;
  /**
   * @remarks
   * The payment type:
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the migration or synchronization task.
   */
  performance?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * DTS is retrying the task due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState;
  /**
   * @remarks
   * The details of the reverse synchronization task.
   * 
   * @example
   * ****
   */
  reverseJob?: any;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint;
  /**
   * @remarks
   * The status of the migration or synchronization task. Valid values:
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus;
  /**
   * @remarks
   * The subscription topic.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group has been created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the subscription data.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking task.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tag collection.
   */
  tagList?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobTagList[];
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * rds
   */
  taskType?: string;
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
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      dbObjectOssUrl: 'DbObjectOssUrl',
      dbObjectOssUrlExpireTime: 'DbObjectOssUrlExpireTime',
      dbObjectSize: 'DbObjectSize',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
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
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      dbObjectOssUrl: 'string',
      dbObjectOssUrlExpireTime: 'string',
      dbObjectSize: 'number',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState,
      reverseJob: 'any',
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus,
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobTagList },
      taskType: 'string',
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
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionHost && typeof (this.subscriptionHost as any).validate === 'function') {
      (this.subscriptionHost as any).validate();
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * @example
   * dtsnjuc14kp12u****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether an SSL connection is used. Valid values:
   * 
   * - **DISABLE**: An SSL connection is not used.
   * - **ENABLE_WITH_CERTIFICATE**: An SSL connection is used, and the CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: An SSL connection is used to connect to AWS MongoDB Atlas.
   * - **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: A SCRAM-SHA-256 connection is used to connect to Kafka.
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of tables that have completed initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscription data includes DDL statements. Valid values:
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription data includes DML statements. Valid values:
   * 
   * @example
   * true
   */
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the subscribe node. The format is `Address:Port number`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubDistributedJobTagList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 191448876515****
   */
  aliUid?: number;
  /**
   * @remarks
   * The tag operator.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The region in which the task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The visibility of the tag. Valid values:
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag type. Valid values:
   * 
   * - **System**: A tag created by the system.
   * - **Custom**: A tag added by the user.
   * 
   * > If this value is empty, publicly visible tags are returned by default.
   * 
   * @example
   * System
   */
  tagCategory?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
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

export class DescribeDtsJobDetailResponseBodySubDistributedJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance uses the new version of change tracking. The value "new" indicates the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset or synchronization offset of incremental data migration. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus;
  /**
   * @remarks
   * If the source instance is a PolarDB-X 1.0 instance, specify the number of ApsaraDB RDS for MySQL instances attached to it.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for migration, synchronization, or change tracking. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  dbObjectSize?: number;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization, in milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the consumer client. Valid values:
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobDestinationEndpoint;
  /**
   * @remarks
   * The DTS instance ID.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specification of the data transmission link.
   * 
   * @example
   * xlarge
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
   * The DTS task ID.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The DTS instance name.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > This parameter is returned only when the value of the **PayType** parameter is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: data migration.
   * - **SYNC**: data synchronization.
   * - **SUBSCRIBE**: change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The task source:
   * 
   * @example
   * DTS node
   */
  originType?: string;
  /**
   * @remarks
   * The payment type:
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the migration or synchronization task.
   */
  performance?: DescribeDtsJobDetailResponseBodySubDistributedJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * DTS is retrying the task due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobRetryState;
  /**
   * @remarks
   * The details of the reverse synchronization task.
   */
  reverseJob?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint;
  /**
   * @remarks
   * The status of the migration or synchronization task. Valid values:
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus;
  /**
   * @remarks
   * The information about the synchronization subtask.
   */
  subSyncJob?: any[];
  /**
   * @remarks
   * The subscribed topics.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group has been created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the subscription data.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking task.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tag collection.
   */
  tagList?: DescribeDtsJobDetailResponseBodySubDistributedJobTagList[];
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * rds
   */
  taskType?: string;
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
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      dbObjectOssUrl: 'DbObjectOssUrl',
      dbObjectOssUrlExpireTime: 'DbObjectOssUrlExpireTime',
      dbObjectSize: 'DbObjectSize',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subSyncJob: 'SubSyncJob',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
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
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      dbObjectOssUrl: 'string',
      dbObjectOssUrlExpireTime: 'string',
      dbObjectSize: 'number',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubDistributedJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubDistributedJobRetryState,
      reverseJob: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob,
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus,
      subSyncJob: { 'type': 'array', 'itemType': 'any' },
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobTagList },
      taskType: 'string',
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
    if(Array.isArray(this.subSyncJob)) {
      $dara.Model.validateArray(this.subSyncJob);
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionHost && typeof (this.subscriptionHost as any).validate === 'function') {
      (this.subscriptionHost as any).validate();
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

export class DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The ETL task status. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: Running.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
   * - **Catched**: No latency.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
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
   * The number of data rows and data volume migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data migration or synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubSyncJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * rm-bp1f9guj5rhzq****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL is used for the connection. Valid values:
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data transformation is performed. Valid values:
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
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
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExtractTransformLoad: 'DataExtractTransformLoad',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExtractTransformLoad: 'boolean',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The volume of data migrated or synchronized per second, in MB/s.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail extends $dara.Model {
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
   * - **Success**: The check is passed.
   * - **Failed**: The check is not passed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The repair method for a failed precheck item.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The overall precheck progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
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
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail },
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

export class DescribeDtsJobDetailResponseBodySubSyncJobRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ta7w132u12h****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum retry time. Unit: seconds.
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
   * - **srcDB**: source database.
   * - **destDB**: destination database.
   * - **inner_module**: DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The elapsed retry time. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * @example
   * true
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
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
      errMsg: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether to display the option to upgrade the instance type. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of records that have completed full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
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
   * The number of data rows and data volume migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The status of incremental data migration or synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * The destination instance ID.
   * 
   * @example
   * rm-bp1f9guj5rhzq****
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
   * 192.168.XX,XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when **EngineName** of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL is used for the connection. Valid values:
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether data transformation is performed. Valid values:
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
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
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExtractTransformLoad: 'DataExtractTransformLoad',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExtractTransformLoad: 'boolean',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance extends $dara.Model {
  /**
   * @remarks
   * The volume of data migrated or synchronized per second, in MB/s.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail extends $dara.Model {
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
   * - **Success**: The check is passed.
   * - **Failed**: The check is not passed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method to fix the precheck failure.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution details of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The overall precheck progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
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
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail },
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ
   */
  errMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ta7w132u12h****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum retry time. Unit: seconds.
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
   * - **srcDB**: source database.
   * - **destDB**: destination database.
   * - **inner_module**: DTS internal module.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The elapsed retry time. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * @example
   * true
   */
  retrying?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
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
      errMsg: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * rm-bp2f3huj5rhzq****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL is used for the connection. Valid values:
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of tables that have completed initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
   * - **NotStarted**: Not started.
   * - **Migrating**: In progress.
   * - **Failed**: Failed.
   * - **Finished**: Completed.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscription data includes DDL statements. Valid values:
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription data includes DML statements. Valid values:
   * 
   * @example
   * true
   */
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 191448876515****
   */
  aliUid?: number;
  /**
   * @remarks
   * The tag operator.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The visibility of the tag. Valid values:
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag type. Valid values:
   * 
   * - **System**: A tag created by the system.
   * - **Custom**: A tag added by the user.
   * 
   * > If this value is empty, publicly visible tags are returned by default.
   * 
   * @example
   * System
   */
  tagCategory?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance uses the new version of change tracking. The value "new" indicates the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset or synchronization offset of incremental data migration. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * If the source instance is a PolarDB-X 1.0 instance, specify the number of ApsaraDB RDS for MySQL instances attached to it.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for migration, synchronization, or change tracking. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  dbObjectSize?: number;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization, in milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the consumer client. Valid values:
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint;
  /**
   * @remarks
   * The DTS instance ID.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specification of the data transmission link.
   * 
   * @example
   * xlarge
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
   * The DTS task ID.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The DTS instance name.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: migration.
   * - **SYNC**: synchronization.
   * - **SUBSCRIBE**: change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The migration type or initial synchronization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode;
  /**
   * @remarks
   * The task source:
   * 
   * @example
   * DTS node
   */
  originType?: string;
  /**
   * @remarks
   * The payment type:
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the migration or synchronization task.
   */
  performance?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * DTS is retrying the task due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState;
  /**
   * @remarks
   * The details of the reverse synchronization task.
   * 
   * @example
   * ****
   */
  reverseJob?: any;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint;
  /**
   * @remarks
   * The status of the migration or synchronization task. Valid values:
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus;
  /**
   * @remarks
   * The subscribed topic.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group has been created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the subscription data.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking task.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tag collection.
   */
  tagList?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList[];
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * rds
   */
  taskType?: string;
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
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      dbObjectOssUrl: 'DbObjectOssUrl',
      dbObjectOssUrlExpireTime: 'DbObjectOssUrlExpireTime',
      dbObjectSize: 'DbObjectSize',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      migrationMode: 'MigrationMode',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
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
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      dbObjectOssUrl: 'string',
      dbObjectOssUrlExpireTime: 'string',
      dbObjectSize: 'number',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      migrationMode: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode,
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState,
      reverseJob: 'any',
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus,
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList },
      taskType: 'string',
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
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.structureInitializationStatus && typeof (this.structureInitializationStatus as any).validate === 'function') {
      (this.structureInitializationStatus as any).validate();
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionHost && typeof (this.subscriptionHost as any).validate === 'function') {
      (this.subscriptionHost as any).validate();
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

export class DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * 
   * @example
   * rm-bp2f3huj5rhzq****
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is returned only when the **EngineName** of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL is used for the connection. Valid values:
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
      aliyunUid: 'AliyunUid',
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      ip: 'Ip',
      oracleSID: 'OracleSID',
      port: 'Port',
      region: 'Region',
      roleName: 'RoleName',
      sslSolutionEnum: 'SslSolutionEnum',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      databaseName: 'string',
      engineName: 'string',
      instanceID: 'string',
      instanceType: 'string',
      ip: 'string',
      oracleSID: 'string',
      port: 'string',
      region: 'string',
      roleName: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the upgrade prompt is displayed. Valid values:
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of tables that have completed initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of initial schema synchronization. Valid values:
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

export class DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscription data includes DDL statements. Valid values:
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription data includes DML statements. Valid values:
   * 
   * @example
   * true
   */
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the change tracking task. The format is `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubSyncJobTagList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 191448876515****
   */
  aliUid?: number;
  /**
   * @remarks
   * The tag operator.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The visibility of the tag. Valid values:
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag type. Valid values:
   * 
   * - **System**: A tag created by the system.
   * - **Custom**: A tag added by the user.
   * 
   * > If this value is empty, publicly visible tags are returned by default.
   * 
   * @example
   * System
   */
  tagCategory?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
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

export class DescribeDtsJobDetailResponseBodySubSyncJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance uses the new version of change tracking. The value "new" indicates the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset or synchronization offset of incremental data migration. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus;
  /**
   * @remarks
   * The status of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus;
  /**
   * @remarks
   * If the source instance is a PolarDB-X 1.0 instance, specify the number of ApsaraDB RDS for MySQL instances attached to it.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for migration, synchronization, or change tracking. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  dbObjectSize?: number;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization, in milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the consumer client. Valid values:
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobDestinationEndpoint;
  /**
   * @remarks
   * The DTS instance ID.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specification of the data transmission link.
   * 
   * @example
   * xlarge
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
   * The DTS task ID.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The DTS instance name.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the value of the **PayType** parameter is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: data migration.
   * - **SYNC**: data synchronization.
   * - **SUBSCRIBE**: change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or initial synchronization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubSyncJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The task source:
   * 
   * @example
   * DTS node
   */
  originType?: string;
  /**
   * @remarks
   * The payment type:
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance information of the migration or synchronization task.
   */
  performance?: DescribeDtsJobDetailResponseBodySubSyncJobPerformance;
  /**
   * @remarks
   * The precheck status.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * DTS is retrying the task due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobRetryState;
  /**
   * @remarks
   * The details of the reverse synchronization task.
   */
  reverseJob?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint;
  /**
   * @remarks
   * The status of the migration or synchronization task. Valid values:
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The status of initial schema synchronization.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus;
  /**
   * @remarks
   * The information about the synchronization subtask.
   */
  subSyncJob?: any[];
  /**
   * @remarks
   * The subscribed topic.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group has been created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the subscription data.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking task.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tag collection.
   */
  tagList?: DescribeDtsJobDetailResponseBodySubSyncJobTagList[];
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * rds
   */
  taskType?: string;
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
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      dbObjectOssUrl: 'DbObjectOssUrl',
      dbObjectOssUrlExpireTime: 'DbObjectOssUrlExpireTime',
      dbObjectSize: 'DbObjectSize',
      delay: 'Delay',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      endTimestamp: 'EndTimestamp',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      isDemoJob: 'IsDemoJob',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      originType: 'OriginType',
      payType: 'PayType',
      performance: 'Performance',
      precheckStatus: 'PrecheckStatus',
      reserved: 'Reserved',
      retryState: 'RetryState',
      reverseJob: 'ReverseJob',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      structureInitializationStatus: 'StructureInitializationStatus',
      subSyncJob: 'SubSyncJob',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      synchronizationDirection: 'SynchronizationDirection',
      tagList: 'TagList',
      taskType: 'TaskType',
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
      dataEtlStatus: DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus,
      dataInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      dbObjectOssUrl: 'string',
      dbObjectOssUrlExpireTime: 'string',
      dbObjectSize: 'number',
      delay: 'number',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobDestinationEndpoint,
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      endTimestamp: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      isDemoJob: 'boolean',
      jobType: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodySubSyncJobMigrationMode,
      minDu: 'number',
      originType: 'string',
      payType: 'string',
      performance: DescribeDtsJobDetailResponseBodySubSyncJobPerformance,
      precheckStatus: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus,
      reserved: 'string',
      retryState: DescribeDtsJobDetailResponseBodySubSyncJobRetryState,
      reverseJob: DescribeDtsJobDetailResponseBodySubSyncJobReverseJob,
      sourceEndpoint: DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint,
      status: 'string',
      structureInitializationStatus: DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus,
      subSyncJob: { 'type': 'array', 'itemType': 'any' },
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost,
      synchronizationDirection: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJobTagList },
      taskType: 'string',
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
    if(Array.isArray(this.subSyncJob)) {
      $dara.Model.validateArray(this.subSyncJob);
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionHost && typeof (this.subscriptionHost as any).validate === 'function') {
      (this.subscriptionHost as any).validate();
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

export class DescribeDtsJobDetailResponseBodySubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the subscription data includes DDL statements. Valid values:
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription data includes DML statements. Valid values:
   * 
   * @example
   * true
   */
  dml?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddl: 'Ddl',
      dml: 'Dml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'boolean',
      dml: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBodySubscriptionHost extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the subscribe node, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) endpoint of the change tracking task, in the format of `address:port`.
   * 
   * @example
   * dts-cn-****-vpc.aliyuncs.com:18003
   */
  vpcHost?: string;
  static names(): { [key: string]: string } {
    return {
      privateHost: 'PrivateHost',
      publicHost: 'PublicHost',
      vpcHost: 'VpcHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateHost: 'string',
      publicHost: 'string',
      vpcHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance uses the new version of change tracking. The value "new" indicates the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  approvalProcessStatus?: number;
  approvalProcessUrl?: string;
  /**
   * @remarks
   * The start of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The binlog information.
   * 
   * @example
   * ****
   */
  binlog?: string;
  /**
   * @remarks
   * The current position.
   * 
   * @example
   * 156629109****
   */
  binlogSite?: string;
  /**
   * @remarks
   * The position range.
   * 
   * @example
   * ****
   */
  binlogTime?: string;
  /**
   * @remarks
   * The start time of the specific project, in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-30T03:36:11.000
   */
  bootTime?: string;
  /**
   * @remarks
   * The start offset or synchronization offset of incremental data migration. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: number;
  /**
   * @remarks
   * The error code. This parameter will be deprecated.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client, which consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The data delivery channel information.
   */
  dataDeliveryChannelInfo?: DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo;
  /**
   * @remarks
   * The status of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * If the source instance is a PolarDB-X 1.0 instance, specify the number of ApsaraDB RDS for MySQL instances attached to it.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for migration, synchronization, or change tracking. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  dbObjectSize?: number;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * @example
   * dtsxxxxx
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization, in milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * 
   * @example
   * false
   */
  demoJob?: boolean;
  /**
   * @remarks
   * The network type of the consumer client. Valid values:
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection information of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobDetailResponseBodyDestinationEndpoint;
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
   * The instance ID of the migration, synchronization, or subscribe instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specification of the DTS task link.
   * > For more information about the specifications and performance test results of each link specification, see [Data migration link specifications](https://help.aliyun.com/document_detail/26606.html) and [Data synchronization link specifications](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * xlarge
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
   * The name of the migration, synchronization, or change tracking task.
   * 
   * @example
   * api_test
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The dynamic error message that is used to replace the **%s** variable in the **ErrMessage** response parameter.
   * > For example, if the **ErrMessage** parameter returns **The Value of Input Parameter %s is not valid** and the **DynamicMessage** parameter returns **DtsJobId**, the request parameter **DtsJobId** that you specify is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The end of the timestamp range of data retained in the change tracking instance. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
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
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * 
   * @example
   * { 	"cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 	}] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time follows the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is returned only when the value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  initCheckpoint?: string;
  insightModule?: boolean;
  /**
   * @remarks
   * The type of the task. Valid values:
   * - **sync**: synchronization task.
   * - **subSync**: subtask generated by modifying synchronization objects.
   * 
   * > Generally used together with **TaskType**.
   * 
   * @example
   * sync
   */
  jobType?: string;
  /**
   * @remarks
   * The timestamp of the last update.
   * 
   * @example
   * 156629109****
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or synchronization initialization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodyMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29207299-7C41-493A-BA4F-2FAC5DE4****
   */
  requestId?: string;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
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
   * DTS is retrying the task due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodyRetryState;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySourceEndpoint;
  /**
   * @remarks
   * The status of the migration or synchronization task. Valid values:
   * 
   * - **NotStarted**: Not started.
   * - **NotConfigured**: Not configured.
   * - **Prechecking**: Running the precheck.
   * - **PrecheckFailed**: Precheck failed.
   * - **PreCheckPass**: Precheck passed.
   * - **Initializing**: Running initial synchronization.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **synchronizing**: Synchronizing.
   * - **Migrating**: Migrating.
   * - **Failed**: Synchronization failed.
   * - **MigrationFailed**: Migration failed.
   * - **Suspending**: Suspending.
   * - **Modifying**: Modifying synchronization objects.
   * - **Retrying**: Retrying.
   * - **Upgrade**: Upgrading.
   * - **Downgrade**: Downgrading.
   * - **Locked**: Locked.
   * - **Finished**: Completed.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The information about the distributed subtask. This parameter is null if the parent task is not a distributed task.
   * > Currently, this parameter is available only when the parent task is a data synchronization task. Other task types are not supported.
   */
  subDistributedJob?: DescribeDtsJobDetailResponseBodySubDistributedJob[];
  /**
   * @remarks
   * The information about the synchronization subtask.
   */
  subSyncJob?: DescribeDtsJobDetailResponseBodySubSyncJob[];
  /**
   * @remarks
   * The subscribed topic.
   * > This parameter is returned only when the subscription instance is of the new version and a consumer group has been created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the subscription data.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking task.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubscriptionHost;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The business type of the task.
   * 
   * @example
   * Distributed_xxx
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      approvalProcessStatus: 'ApprovalProcessStatus',
      approvalProcessUrl: 'ApprovalProcessUrl',
      beginTimestamp: 'BeginTimestamp',
      binlog: 'Binlog',
      binlogSite: 'BinlogSite',
      binlogTime: 'BinlogTime',
      bootTime: 'BootTime',
      checkpoint: 'Checkpoint',
      code: 'Code',
      consumptionCheckpoint: 'ConsumptionCheckpoint',
      consumptionClient: 'ConsumptionClient',
      createTime: 'CreateTime',
      dataDeliveryChannelInfo: 'DataDeliveryChannelInfo',
      dataSynchronizationStatus: 'DataSynchronizationStatus',
      databaseCount: 'DatabaseCount',
      dbObject: 'DbObject',
      dbObjectOssUrl: 'DbObjectOssUrl',
      dbObjectOssUrlExpireTime: 'DbObjectOssUrlExpireTime',
      dbObjectSize: 'DbObjectSize',
      dedicatedClusterId: 'DedicatedClusterId',
      delay: 'Delay',
      demoJob: 'DemoJob',
      destNetType: 'DestNetType',
      destinationEndpoint: 'DestinationEndpoint',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobClass: 'DtsJobClass',
      dtsJobDirection: 'DtsJobDirection',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      dynamicMessage: 'DynamicMessage',
      endTimestamp: 'EndTimestamp',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      errorMessage: 'ErrorMessage',
      etlCalculator: 'EtlCalculator',
      expireTime: 'ExpireTime',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      initCheckpoint: 'InitCheckpoint',
      insightModule: 'InsightModule',
      jobType: 'JobType',
      lastUpdateTime: 'LastUpdateTime',
      maxDu: 'MaxDu',
      migrationMode: 'MigrationMode',
      minDu: 'MinDu',
      payType: 'PayType',
      requestId: 'RequestId',
      reserved: 'Reserved',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      retryState: 'RetryState',
      sourceEndpoint: 'SourceEndpoint',
      status: 'Status',
      subDistributedJob: 'SubDistributedJob',
      subSyncJob: 'SubSyncJob',
      subscribeTopic: 'SubscribeTopic',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionHost: 'SubscriptionHost',
      success: 'Success',
      synchronizationDirection: 'SynchronizationDirection',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      approvalProcessStatus: 'number',
      approvalProcessUrl: 'string',
      beginTimestamp: 'string',
      binlog: 'string',
      binlogSite: 'string',
      binlogTime: 'string',
      bootTime: 'string',
      checkpoint: 'number',
      code: 'number',
      consumptionCheckpoint: 'string',
      consumptionClient: 'string',
      createTime: 'string',
      dataDeliveryChannelInfo: DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo,
      dataSynchronizationStatus: DescribeDtsJobDetailResponseBodyDataSynchronizationStatus,
      databaseCount: 'number',
      dbObject: 'string',
      dbObjectOssUrl: 'string',
      dbObjectOssUrlExpireTime: 'string',
      dbObjectSize: 'number',
      dedicatedClusterId: 'string',
      delay: 'number',
      demoJob: 'boolean',
      destNetType: 'string',
      destinationEndpoint: DescribeDtsJobDetailResponseBodyDestinationEndpoint,
      dtsBisLabel: 'string',
      dtsInstanceID: 'string',
      dtsJobClass: 'string',
      dtsJobDirection: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      dynamicMessage: 'string',
      endTimestamp: 'string',
      errCode: 'string',
      errMessage: 'string',
      errorMessage: 'string',
      etlCalculator: 'string',
      expireTime: 'string',
      finishTime: 'string',
      groupId: 'string',
      httpStatusCode: 'number',
      initCheckpoint: 'string',
      insightModule: 'boolean',
      jobType: 'string',
      lastUpdateTime: 'string',
      maxDu: 'number',
      migrationMode: DescribeDtsJobDetailResponseBodyMigrationMode,
      minDu: 'number',
      payType: 'string',
      requestId: 'string',
      reserved: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      retryState: DescribeDtsJobDetailResponseBodyRetryState,
      sourceEndpoint: DescribeDtsJobDetailResponseBodySourceEndpoint,
      status: 'string',
      subDistributedJob: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJob },
      subSyncJob: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubSyncJob },
      subscribeTopic: 'string',
      subscriptionDataType: DescribeDtsJobDetailResponseBodySubscriptionDataType,
      subscriptionHost: DescribeDtsJobDetailResponseBodySubscriptionHost,
      success: 'boolean',
      synchronizationDirection: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.dataDeliveryChannelInfo && typeof (this.dataDeliveryChannelInfo as any).validate === 'function') {
      (this.dataDeliveryChannelInfo as any).validate();
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
    if(this.retryState && typeof (this.retryState as any).validate === 'function') {
      (this.retryState as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(Array.isArray(this.subDistributedJob)) {
      $dara.Model.validateArray(this.subDistributedJob);
    }
    if(Array.isArray(this.subSyncJob)) {
      $dara.Model.validateArray(this.subSyncJob);
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionHost && typeof (this.subscriptionHost as any).validate === 'function') {
      (this.subscriptionHost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

