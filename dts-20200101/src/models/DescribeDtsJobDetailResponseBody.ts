// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo extends $dara.Model {
  /**
   * @remarks
   * The number of partitions in the destination topic.
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
   * The region where the delivery channel is located.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The destination topic.
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
   * The error message for incremental data migration or synchronization failures.
   * 
   * @example
   * The task failed too long ago to be recovered
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
   * The number of rows and the volume of data that are incrementally migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Suspending**: The task is being suspended.
   * - **Checking**: The task is being checked.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
   * - **Catched**: No latency.
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * 1234567890123456
   */
  aliyunUid?: string;
  /**
   * @remarks
   * Indicates whether the password can be modified. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
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
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region where the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * dts-ram-role
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The error message for retry failures.
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
   * The maximum retry time, in seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance.
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
   * 
   * - **true**: yes
   * - **false**: no
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
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
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
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned when full data migration or initial full data synchronization fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization progress.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of rows and the volume of data that are incrementally migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Suspending**: The task is being suspended.
   * - **Checking**: The task is being checked.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
   * - **Catched**: No latency.
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
   * The name of the database to which the migration objects in the destination instance belong.
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
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The region where the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The volume of data that is migrated or synchronized per second, in MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements that are migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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
   * - **Success**: The item passed the check.
   * - **Failed**: The item failed the check.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the **CheckResult** parameter is set to **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The troubleshooting method for a failed precheck.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
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
   * - **Prechecking**: prechecking.
   * - **PrecheckFailed**: precheck failed.
   * - **Finished**: finished.
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
   * The maximum retry time, in seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned when full data migration or initial full data synchronization fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization progress.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of rows and the volume of data that are incrementally migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Suspending**: The task is being suspended.
   * - **Checking**: The task is being checked.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
   * - **Catched**: No latency.
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
   * The name of the database to which the migration objects in the destination instance belong.
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
   * 192.168.XX.XX
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
   * The database service port of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The volume of data that is migrated or synchronized per second, in MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements that are migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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
   * - **Success**: The check passed.
   * - **Failed**: The check failed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the **CheckResult** parameter is set to **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The troubleshooting method for a failed precheck.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
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
   * - **Prechecking**: prechecking.
   * - **PrecheckFailed**: precheck failed.
   * - **Finished**: finished.
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
   * The maximum retry time, in seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance.
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
   * The name of the database to which the migration objects in the source instance belong.
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
   * The source instance ID.
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
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The initial schema synchronization progress, in percentage.
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
   * The initial schema synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * Indicates whether the tracked data includes DDL statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the tracked data includes DML statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The private endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the subscribe node, in the format of `Address:Port number`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
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
   * The region ID of the task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the data migration, data synchronization, or change tracking task.
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
   * - **0**: public.
   * - **1**: private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * > This typically refers to the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag category. Valid values:
   * 
   * - **System**: tags created by the system.
   * - **Custom**: tags added by users.
   * 
   * > If the value is empty, publicly visible tags are returned by default.
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
   * Indicates whether the change tracking task is of the new version. Valid value: new (new version).
   * 
   * > This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or the synchronization offset. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client. The value consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   * 
   * > This parameter is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances attached to the source instance if the source instance is a PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for data migration, synchronization, or change tracking. For more information about the definition, see [Objects for data migration, synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
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
   * The latency of incremental data migration or synchronization. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the downstream consumer client. Valid values:
   * - **CLASSIC**: classic network.
   * - **VPC**: VPC.
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
   * The link specification.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > This parameter is returned only when the synchronization topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the DTS instance.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * 
   * > This parameter is returned only when the task is an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task ended. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: Migration.
   * - **SYNC**: Synchronization.
   * - **SUBSCRIBE**: Change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or initial synchronization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The source of the task. Valid values:
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS task
   */
  originType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * The reserved parameter for DTS, in JSON format. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The retry state when DTS is retrying due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * 
   * > This parameter is returned only when the task is a data synchronization task and the synchronization topology is two-way synchronization.
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
   * The status of the data migration or synchronization task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **NotConfigured**: The task is not configured.
   * - **Prechecking**: The task is being prechecked.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **Initializing**: Initial synchronization is in progress.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **synchronizing**: Synchronization is in progress.
   * - **Migrating**: Migration is in progress.
   * - **Failed**: Synchronization failed.
   * - **MigrationFailed**: Migration failed.
   * - **Suspending**: The task is being suspended.
   * - **Modifying**: The synchronization objects are being modified.
   * - **Retrying**: The task is being retried.
   * - **Upgrade**: The task is being upgraded.
   * - **Downgrade**: The task is being downgraded.
   * - **Locked**: The task is locked.
   * - **Finished**: The task is completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The initial schema synchronization status.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus;
  /**
   * @remarks
   * The topic for change tracking.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group is created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the tracked data.
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
   * - This parameter takes effect only when you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The list of tags.
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
   * The name of the database to which the migration objects in the source instance belong.
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
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The initial schema synchronization progress, in percentage.
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
   * The initial schema synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * Indicates whether the tracked data includes DDL statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the tracked data includes DML statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The private endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the subscribe node, in the format of `Address:Port number`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
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
   * The region where the task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or subscribe.
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
   * - **0**: public.
   * - **1**: private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * > This typically refers to the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag category. Valid values:
   * 
   * - **System**: tags created by the system.
   * - **Custom**: tags added by users.
   * 
   * > If the value is empty, publicly visible tags are returned by default.
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
   * Indicates whether the change tracking task is of the new version. Valid value: new (new version).
   * 
   * > This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or the synchronization offset. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client. The value consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   * 
   * > This parameter is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances attached to the source instance if the source instance is a PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for data migration, synchronization, or change tracking. For more information about the definition, see [Objects for data migration, synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  /**
   * @example
   * 190
   */
  dbObjectSize?: number;
  /**
   * @remarks
   * The latency of incremental data migration or synchronization. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the downstream consumer client. Valid values:
   * - **CLASSIC**: classic network.
   * - **VPC**: VPC.
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
   * The link specification.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > This parameter is returned only when the synchronization topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the DTS instance.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * > This parameter is returned only when the task is an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task ended. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: Migration.
   * - **SYNC**: Synchronization.
   * - **SUBSCRIBE**: Change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or initial synchronization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The source of the task. Valid values:
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS task
   */
  originType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * The reserved parameter for DTS, in JSON format. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The retry state when DTS is retrying due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * 
   * > This parameter is returned only when the task is a data synchronization task and the synchronization topology is two-way synchronization.
   */
  reverseJob?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint;
  /**
   * @remarks
   * The status of the data migration or synchronization task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **NotConfigured**: The task is not configured.
   * - **Prechecking**: The task is being prechecked.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **Initializing**: Initial synchronization is in progress.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **synchronizing**: Synchronization is in progress.
   * - **Migrating**: Migration is in progress.
   * - **Failed**: Synchronization failed.
   * - **MigrationFailed**: Migration failed.
   * - **Suspending**: The task is being suspended.
   * - **Modifying**: The synchronization objects are being modified.
   * - **Retrying**: The task is being retried.
   * - **Upgrade**: The task is being upgraded.
   * - **Downgrade**: The task is being downgraded.
   * - **Locked**: The task is locked.
   * - **Finished**: The task is completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The initial schema synchronization status.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus;
  /**
   * @remarks
   * The information about the synchronization subtask.
   */
  subSyncJob?: any[];
  /**
   * @remarks
   * The topic for change tracking.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group is created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the tracked data.
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
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - This parameter takes effect only when you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The list of tags.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned when full data migration or initial full data synchronization fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization progress.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of rows and the volume of data that are incrementally migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Suspending**: The task is being suspended.
   * - **Checking**: The task is being checked.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
   * - **Catched**: No latency.
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
   * The Alibaba Cloud account ID of the destination instance.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
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
   * 192.168.XX.XX
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
   * The database service port of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The volume of data that is migrated or synchronized per second, in MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements that are migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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
   * - **Success**: The check passed.
   * - **Failed**: The check failed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the **CheckResult** parameter is set to **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The troubleshooting method for a failed precheck.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
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
   * - **Prechecking**: prechecking.
   * - **PrecheckFailed**: precheck failed.
   * - **Finished**: finished.
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
   * The maximum retry time, in seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
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
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The status of the ETL task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned when full data migration or initial full data synchronization fails.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The full data migration or initial full data synchronization progress, in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of records for which full data migration or initial full data synchronization is completed.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization progress.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of rows and the volume of data that are incrementally migrated or synchronized to the destination table per second.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Suspending**: The task is being suspended.
   * - **Checking**: The task is being checked.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * The name of the database to which the migration objects in the destination instance belong.
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
   * 192.168.XX,XX
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
   * The database service port of the destination instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The volume of data that is migrated or synchronized per second, in MB/s.
   * 
   * @example
   * 1
   */
  flow?: string;
  /**
   * @remarks
   * The number of SQL statements that are migrated or synchronized per second, including BEGIN, COMMIT, DML statements (INSERT, DELETE, and UPDATE), and DDL statements.
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
   * - **Success**: The check passed.
   * - **Failed**: The check failed.
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned when the precheck fails.
   * 
   * > This parameter is returned only when the **CheckResult** parameter is set to **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The troubleshooting method for a failed precheck.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
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
   * - **Prechecking**: prechecking.
   * - **PrecheckFailed**: precheck failed.
   * - **Finished**: finished.
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
   * The maximum retry time, in seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance.
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
   * The name of the database to which the migration objects in the source instance belong.
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
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The initial schema synchronization progress, in percentage.
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
   * The initial schema synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * Indicates whether the tracked data includes DDL statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the tracked data includes DML statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The private endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the change tracking task, in the format of `Address:Port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
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
   * The region ID of the task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID for data migration, synchronization, and change tracking.
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
   * - **0**: public.
   * - **1**: private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * > This typically refers to the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag category. Valid values:
   * 
   * - **System**: tags created by the system.
   * - **Custom**: tags added by users.
   * 
   * > If the value is empty, publicly visible tags are returned by default.
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
   * Indicates whether the change tracking task is of the new version. Valid value: new (new version).
   * 
   * > This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or the synchronization offset. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client. The value consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   * 
   * > This parameter is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances attached to the source instance if the source instance is a PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for data migration, synchronization, or change tracking. For more information about the definition, see [Objects for data migration, synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
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
   * The latency of incremental data migration or synchronization. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the downstream consumer client. Valid values:
   * - **CLASSIC**: classic network.
   * - **VPC**: VPC.
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
   * The link specification.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > This parameter is returned only when the synchronization topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the DTS instance.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * > This parameter is returned only when the task is an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task ended. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: Migration.
   * - **SYNC**: Synchronization.
   * - **SUBSCRIBE**: Change tracking.
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
   * The source of the task. Valid values:
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS task
   */
  originType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * The reserved parameter for DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved parameter description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The retry state when DTS is retrying due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * 
   * > This parameter is returned only when the task is a data synchronization task and the synchronization topology is two-way synchronization.
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
   * The status of the data migration or synchronization task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **NotConfigured**: The task is not configured.
   * - **Prechecking**: The task is being prechecked.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **Initializing**: Initial synchronization is in progress.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **synchronizing**: Synchronization is in progress.
   * - **Migrating**: Migration is in progress.
   * - **Failed**: Synchronization failed.
   * - **MigrationFailed**: Migration failed.
   * - **Suspending**: The task is being suspended.
   * - **Modifying**: The synchronization objects are being modified.
   * - **Retrying**: The task is being retried.
   * - **Upgrade**: The task is being upgraded.
   * - **Downgrade**: The task is being downgraded.
   * - **Locked**: The task is locked.
   * - **Finished**: The task is completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The initial schema synchronization status.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus;
  /**
   * @remarks
   * The topic for change tracking.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group is created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the tracked data.
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
   * - This parameter takes effect only when you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The list of tags.
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
   * The name of the database to which the migration objects in the source instance belong.
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
   * The source instance ID.
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
   * > This parameter is returned only when the **EngineName** parameter of the destination instance is set to **Oracle** and the Oracle database is a non-RAC instance.
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
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Specifies whether to use an SSL-encrypted connection. Valid values:
   * - **DISABLE**: SSL encryption is disabled.
   * - **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled, and a CA certificate is uploaded.
   * - **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for AWS MongoDB Atlas.
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Specifies whether to display the upgrade prompt. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The initial schema synchronization progress, in percentage.
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
   * The initial schema synchronization status. Valid values:
   * - **NotStarted**: The task is not started.
   * - **Migrating**: The task is in progress.
   * - **Failed**: The task failed.
   * - **Finished**: The task is completed.
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
   * Indicates whether the tracked data includes DDL statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the tracked data includes DML statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The private endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the change tracking task, in the format of `Address:Port`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
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
   * The region ID of the task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID for data migration, synchronization, and change tracking.
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
   * - **0**: public.
   * - **1**: private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The region where the task resides.
   * 
   * > This typically refers to the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The tag category. Valid values:
   * 
   * - **System**: tags created by the system.
   * - **Custom**: tags added by users.
   * 
   * > If the value is empty, publicly visible tags are returned by default.
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
   * Indicates whether the change tracking task is of the new version. Valid value: new (new version).
   * 
   * > This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The start of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or the synchronization offset. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client. The value consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the ETL task.
   * 
   * > This parameter is returned only after an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus;
  /**
   * @remarks
   * The full data migration or initial full data synchronization status.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus;
  /**
   * @remarks
   * The incremental data migration or incremental data synchronization status.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances attached to the source instance if the source instance is a PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for data migration, synchronization, or change tracking. For more information about the definition, see [Objects for data migration, synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
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
   * The latency of incremental data migration or synchronization. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * The network type of the downstream consumer client. Valid values:
   * - **CLASSIC**: classic network.
   * - **VPC**: VPC.
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
   * The link specification.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > This parameter is returned only when the synchronization topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  dtsJobDirection?: string;
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * m06j1g92124****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the DTS instance.
   * 
   * @example
   * dtstest****
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The end of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * > This parameter is returned only when the task is an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task ended. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **online**: Migration.
   * - **SYNC**: Synchronization.
   * - **SUBSCRIBE**: Change tracking.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DUs.
   * 
   * > This parameter is supported only for serverless instances.
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
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The source of the task. Valid values:
   * - **PTS task**
   * - **DMS task**
   * - **DTS task**
   * 
   * @example
   * DTS task
   */
  originType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * The reserved parameter for DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as whether to automatically start the precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The retry state when DTS is retrying due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobRetryState;
  /**
   * @remarks
   * The execution details of the reverse synchronization task.
   * 
   * > This parameter is returned only when the task is a data synchronization task and the synchronization topology is two-way synchronization.
   */
  reverseJob?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJob;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint;
  /**
   * @remarks
   * The status of the data migration or synchronization task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **NotConfigured**: The task is not configured.
   * - **Prechecking**: The task is being prechecked.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **Initializing**: Initial synchronization is in progress.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **synchronizing**: Synchronization is in progress.
   * - **Migrating**: Migration is in progress.
   * - **Failed**: Synchronization failed.
   * - **MigrationFailed**: Migration failed.
   * - **Suspending**: The task is being suspended.
   * - **Modifying**: The synchronization objects are being modified.
   * - **Retrying**: The task is being retried.
   * - **Upgrade**: The task is being upgraded.
   * - **Downgrade**: The task is being downgraded.
   * - **Locked**: The task is locked.
   * - **Finished**: The task is completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The initial schema synchronization status.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus;
  /**
   * @remarks
   * The information about the synchronization subtask.
   */
  subSyncJob?: any[];
  /**
   * @remarks
   * The topic for change tracking.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group is created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the tracked data.
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
   * - This parameter takes effect only when you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The list of tags.
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
   * Indicates whether the tracked data includes DDL statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether the tracked data includes DML statements. Valid values:
   * - **true**: yes.
   * - **false**: no.
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
   * The private endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public network connection information of the subscribe node. The value is in the `Address:Port number` format.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking task. The value is in the `Endpoint:Port number` format.
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
   * Specifies whether the change tracking instance is of the new version. A value of new indicates a new version.
   * > This parameter is returned only for change tracking instances of the new version.
   * 
   * @example
   * new
   */
  appName?: string;
  /**
   * @remarks
   * The status of the approval process.
   * 
   * @example
   * 1
   */
  approvalProcessStatus?: number;
  /**
   * @remarks
   * The URL for the approval process details.
   * 
   * @example
   * https://example.com/approval/detail?orderId=1000
   */
  approvalProcessUrl?: string;
  /**
   * @remarks
   * The start of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
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
   * The current checkpoint.
   * 
   * @example
   * 156629109****
   */
  binlogSite?: string;
  /**
   * @remarks
   * The checkpoint range.
   * 
   * @example
   * ****
   */
  binlogTime?: string;
  /**
   * @remarks
   * The start time of the project, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2022-03-30T03:36:11.000
   */
  bootTime?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or the synchronization offset. The value is a UNIX timestamp in seconds.
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
   * The consumption checkpoint of the downstream consumer for the change tracking task. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The information about the downstream consumer client. The value consists of an IP address and a random number generated by DTS.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
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
   * The incremental data migration or incremental data synchronization status.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances attached to the source instance if the source instance is a PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects for data migration, synchronization, or change tracking. For more information about the definition, see [Objects for data migration, synchronization, or change tracking](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  dbObjectOssUrl?: string;
  dbObjectOssUrlExpireTime?: string;
  /**
   * @example
   * 505
   */
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
   * The latency of incremental data migration or synchronization. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delay?: number;
  /**
   * @remarks
   * Indicates whether the task is a subtask. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  demoJob?: boolean;
  /**
   * @remarks
   * The network type of the downstream consumer client. Valid values:
   * - **CLASSIC**: classic network.
   * - **VPC**: VPC.
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
   * - **normal**: **normal**
   * - **online**: **online**
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or subscribe instance.
   * 
   * @example
   * dtsi03e3zty16i****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The specifications of the DTS instance.
   * > For more information about the specifications and performance test results of data migration and synchronization instances, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > This parameter is returned only when the synchronization topology of the data synchronization instance is two-way.
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
   * The name of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * api_test
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The dynamic error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * > If the **ErrMessage** parameter returns **The Value of Input Parameter %s is not valid** and the **DynamicMessage** parameter returns **DtsJobId**, the specified **DtsJobId** request parameter is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The end of the timestamp range for the data stored in the change tracking instance. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
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
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * The operator information of the ETL task.
   * > This parameter is returned only when the task is an ETL task.
   * 
   * @example
   * { 	"cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 	}] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * > This parameter is returned only when the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task ended. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2023-06-16T10:34:17Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
  /**
   * @example
   * 1761955200
   */
  initCheckpoint?: string;
  insightModule?: boolean;
  /**
   * @remarks
   * Indicates the type of the task. Valid values:
   * - **sync**: synchronization task.
   * - **subSync**: subtask generated when synchronization objects are modified.
   * 
   * > This parameter is typically used together with **TaskType**.
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
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The migration type or initial synchronization type.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodyMigrationMode;
  /**
   * @remarks
   * The minimum number of DUs.
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
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
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet special requirements, such as specifying whether to automatically start a precheck. For more information, see [MigrationReserved metric description](https://help.aliyun.com/document_detail/176470.html).
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retry state when DTS is retrying due to a task exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodyRetryState;
  /**
   * @remarks
   * The connection information of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySourceEndpoint;
  /**
   * @remarks
   * The status of the data migration or synchronization task. Valid values:
   * - **NotStarted**: The task is not started.
   * - **NotConfigured**: The task is not configured.
   * - **Prechecking**: The task is being prechecked.
   * - **PrecheckFailed**: The precheck failed.
   * - **PreCheckPass**: The precheck passed.
   * - **Initializing**: Initial synchronization is in progress.
   * - **InitializeFailed**: Initial synchronization failed.
   * - **synchronizing**: Synchronization is in progress.
   * - **Migrating**: Migration is in progress.
   * - **Failed**: Synchronization failed.
   * - **MigrationFailed**: Migration failed.
   * - **Suspending**: The task is being suspended.
   * - **Modifying**: The synchronization objects are being modified.
   * - **Retrying**: The task is being retried.
   * - **Upgrade**: The task is being upgraded.
   * - **Downgrade**: The task is being downgraded.
   * - **Locked**: The task is locked.
   * - **Finished**: The task is completed.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The information about the distributed subtasks. If the main task is not a distributed task, this parameter is null.
   * > This parameter is returned only when the main task is a synchronization task. Other task types are not supported.
   */
  subDistributedJob?: DescribeDtsJobDetailResponseBodySubDistributedJob[];
  /**
   * @remarks
   * The information about the synchronization subtask.
   */
  subSyncJob?: DescribeDtsJobDetailResponseBodySubSyncJob[];
  /**
   * @remarks
   * The topic for change tracking.
   * > This parameter is returned only when the change tracking instance is of the new version and a consumer group is created by calling the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of the tracked data.
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
   * - This parameter takes effect only when you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Indicates the business type of the task.
   * > This parameter is typically used together with **JobType**.
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

