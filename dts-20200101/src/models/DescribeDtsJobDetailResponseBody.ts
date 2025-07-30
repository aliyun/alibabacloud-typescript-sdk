// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo extends $dara.Model {
  /**
   * @remarks
   * The number of partitions of the destination topic.
   * 
   * @example
   * 3
   */
  partitionNum?: number;
  /**
   * @remarks
   * The public endpoint of the data shipping channel.
   * 
   * @example
   * dts-****.aliyuncs.com:18***
   */
  publicDproxyUrl?: string;
  /**
   * @remarks
   * The region in which the data shipping channel resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The destination topic of the data shipping instance.
   * 
   * @example
   * cn_hangzhou_******_data_delivery_version2
   */
  topic?: string;
  /**
   * @remarks
   * The VPC endpoint of the data shipping channel.
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
   * The error message returned if incremental data migration or synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **Checking**: The task is in precheck.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task has no latency.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
  /**
   * @remarks
   * The name of the database to which the objects are migrated in the destination instance.
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
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The progress of the instance when DTS performs retries.
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
   * The object on which the retries are performed. Valid values:
   * 
   * *   **srcDB**: the source database.
   * *   **destDB**: the destination database.
   * *   **inner_module**: an internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the point in time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * Indicates whether the password can be modified. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canModifyPassword?: boolean;
  /**
   * @remarks
   * The name of the database from which the objects are migrated in the source instance.
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
   * The system ID (SID) of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-Real Application Cluster (RAC) architecture.
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
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
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
   * *   **Catched**: The task has no latency.
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
   * The error message returned if full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization. Valid values:
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **Checking**: The task is in precheck.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task has no latency.
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
   * The ID of the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database to which the objects are migrated in the destination instance.
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The size of data that is migrated or synchronized per second. Unit: Mbit/s.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail extends $dara.Model {
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
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method used to fix the precheck failure.
   * 
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
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
   * The result of each precheck item.
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
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Finished**: The task is complete.
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
   * The error message returned.
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
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance when DTS performs retries.
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
   * The object on which the retries are performed. Valid values:
   * 
   * *   **srcDB**: the source database.
   * *   **destDB**: the destination database.
   * *   **inner_module**: an internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the point in time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
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
   * *   **Catched**: The task has no latency.
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
   * The error message returned if full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization. Valid values:
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **Checking**: The task is in precheck.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task has no latency.
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
   * The ID of the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database to which the objects are migrated in the destination instance.
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The size of data that is migrated or synchronized per second. Unit: Mbit/s.
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

export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail extends $dara.Model {
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
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method used to fix the precheck failure.
   * 
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
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
   * The result of each precheck item.
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
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Finished**: The task is complete.
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
   * The error message returned.
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
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance when DTS performs retries.
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
   * The object on which the retries are performed. Valid values:
   * 
   * *   **srcDB**: the source database.
   * *   **destDB**: the destination database.
   * *   **inner_module**: an internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the point in time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database from which the objects are migrated in the source instance.
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
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
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
   * Error message indicating task failure.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Whether to display upgrade specifications, return value:
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * Initialization progress of library table structure, measured in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have completed library table structure initialization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The initialization status of the library table structure includes:
   * - NotStarted: Not started.
   * - Migration: In the process of initialization.
   * - Failed: Initialization failed.
   * - Finished: Initialization completed.
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
   * Indicates whether DDL statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether DML statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
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
   * The operator of the tag.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key of the table.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
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
   * Indicates whether the tag is visible. Valid values:
   * 
   * *   **0**: The tag is public.
   * *   **1**: The tag is private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS task resides.
   * 
   * > In most cases, the ID of the region in which the destination instance resides is returned.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **System**: The tag was created by the system.
   * *   **Custom**: The tag was created by a user.
   * 
   * > By default, if the parameter is left empty, custom tags and system tags are returned.
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
   * Indicates whether the new change tracking feature is used.
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
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information in the following format: \\<IP address of the downstream client>:\\<Random ID generated by DTS>.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of the ETL task.
   * 
   * > This parameter collection is returned only if an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataEtlStatus;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
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
   * The network type of the consumer client. Valid values:
   * 
   * *   **CLASSIC**: classic network.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection settings of the destination instance.
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
   * The instance class.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.
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
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * > This parameter is returned only if you query the details of an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > This parameter is returned only if the return value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **online**: data migration task.
   * *   **SYNC**: data synchronization task.
   * *   **SUBSCRIBE**: change tracking task.
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
   * The migration types or initial synchronization types.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobMigrationMode;
  /**
   * @remarks
   * The minimum number of DTS Units (DUs).
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
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The information about the retries performed by DTS due to an exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobRetryState;
  /**
   * @remarks
   * The details of the data synchronization task in the reverse direction.
   * 
   * > This parameter is returned only for two-way data synchronization tasks.
   * 
   * @example
   * ****
   */
  reverseJob?: any;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSourceEndpoint;
  /**
   * @remarks
   * The state of initial schema synchronization. Valid values:
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
  /**
   * @remarks
   * Initialization status of library table structure.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobStructureInitializationStatus;
  /**
   * @remarks
   * The topic of the change tracking instance.
   * 
   * > This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation to create a consumer group.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of data for change tracking.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking instance.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tags of the task.
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
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database from which the objects are migrated in the source instance.
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
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
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
   * Error message.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Whether to display upgrade specifications, return value:
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * Initialization progress of library table structure, measured in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have completed library table structure initialization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The initialization status of the library table structure includes:
   * - NotStarted: Not started.
   * - Migration: In the process of initialization.
   * - Failed: Initialization failed.
   * - Finished: Initialization completed.
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
   * Indicates whether DDL statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether DML statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
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
   * The operator of the tag.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key of the table.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
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
   * Indicates whether the tag is visible. Valid values:
   * 
   * *   **0**: The tag is public.
   * *   **1**: The tag is private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS task resides.
   * 
   * > In most cases, the ID of the region in which the destination instance resides is returned.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **System**: The tag was created by the system.
   * *   **Custom**: The tag was created by a user.
   * 
   * > By default, if the parameter is left empty, custom tags and system tags are returned.
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
   * Indicates whether the new change tracking feature is used.
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
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information in the following format: \\<IP address of the downstream client>:\\<Random ID generated by DTS>.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of the ETL task.
   * 
   * > This parameter collection is returned only if an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataEtlStatus;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
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
   * The network type of the consumer client. Valid values:
   * 
   * *   **CLASSIC**: classic network.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection settings of the destination instance.
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
   * The instance class.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.
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
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * > This parameter is returned only if you query the details of an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > This parameter is returned only if the return value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **online**: data migration task.
   * *   **SYNC**: data synchronization task.
   * *   **SUBSCRIBE**: change tracking task.
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
   * The migration types or initial synchronization types.
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
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobDetailResponseBodySubDistributedJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The information about the retries performed by DTS due to an exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubDistributedJobRetryState;
  /**
   * @remarks
   * The details of the data synchronization task in the reverse direction.
   * 
   * > This parameter is returned only for two-way data synchronization tasks.
   */
  reverseJob?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJob;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubDistributedJobSourceEndpoint;
  /**
   * @remarks
   * The state of initial schema synchronization. Valid values:
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
  /**
   * @remarks
   * Initialization status of library table structure.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubDistributedJobStructureInitializationStatus;
  /**
   * @remarks
   * The information about the subtasks in the current data synchronization task.
   */
  subSyncJob?: any[];
  /**
   * @remarks
   * The topic of the change tracking instance.
   * 
   * > This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation to create a consumer group.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of data for change tracking.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking instance.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubDistributedJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tags of the task.
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
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
   * *   **Catched**: The task has no latency.
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
   * The error message returned if full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization. Valid values:
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **Checking**: The task is in precheck.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task has no latency.
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
   * The ID of the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database to which the objects are migrated in the destination instance.
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
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The size of data that is migrated or synchronized per second. Unit: Mbit/s.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatusDetail extends $dara.Model {
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
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method used to fix the precheck failure.
   * 
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
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
   * The result of each precheck item.
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
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Finished**: The task is complete.
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
   * The error message returned.
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
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance when DTS performs retries.
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
   * The object on which the retries are performed. Valid values:
   * 
   * *   **srcDB**: the source database.
   * *   **destDB**: the destination database.
   * *   **inner_module**: an internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the point in time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
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
   * *   **Catched**: The task has no latency.
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
   * The error message returned if full data migration or initial full data synchronization failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
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
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization. Valid values:
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
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **Checking**: The task is in precheck.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task has no latency.
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
   * The ID of the Alibaba Cloud account to which the destination instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database to which the objects are migrated in the destination instance.
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
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dataExtractTransformLoad?: boolean;
  /**
   * @remarks
   * Indicates whether full data migration or initial full data synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data migration or synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether schema migration or initial schema synchronization is performed. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The size of data that is migrated or synchronized per second. Unit: Mbit/s.
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

export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatusDetail extends $dara.Model {
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
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method used to fix the precheck failure.
   * 
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
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
   * The result of each precheck item.
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
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Finished**: The task is complete.
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
   * The error message returned.
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
   * The maximum duration of a retry. Unit: seconds.
   * 
   * @example
   * 7200
   */
  maxRetryTime?: number;
  /**
   * @remarks
   * The progress of the instance when DTS performs retries.
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
   * The object on which the retries are performed. Valid values:
   * 
   * *   **srcDB**: the source database.
   * *   **destDB**: the destination database.
   * *   **inner_module**: an internal module of DTS.
   * 
   * @example
   * srcDB
   */
  retryTarget?: string;
  /**
   * @remarks
   * The time that has elapsed from the point in time when the first retry starts. Unit: seconds.
   * 
   * @example
   * 3600
   */
  retryTime?: number;
  /**
   * @remarks
   * Indicates whether the task is being retried. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database from which the objects are migrated in the source instance.
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
   * The DTS instance ID.
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
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
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
   * Error message indicating task failure.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Whether to display upgrade specifications, return value:
   * 
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * Initialization progress of library table structure, measured in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have completed library table structure initialization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The initialization status of the library table structure includes:
   * 
   * - NotStarted: Not started.
   * - Migration: In the process of initialization.
   * - Failed: Initialization failed.
   * - Finished: Initialization completed.
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
   * Indicates whether DDL statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether DML statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
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
   * The operator of the tag.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key of the table.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
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
   * Indicates whether the tag is visible. Valid values:
   * 
   * *   **0**: The tag is public.
   * *   **1**: The tag is private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS task resides.
   * 
   * > In most cases, the ID of the region in which the destination instance resides is returned.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **System**: The tag was created by the system.
   * *   **Custom**: The tag was created by a user.
   * 
   * > By default, if the parameter is left empty, custom tags and system tags are returned.
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
   * Indicates whether the new change tracking feature is used.
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
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information in the following format: \\<IP address of the downstream client>:\\<Random ID generated by DTS>.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of the ETL task.
   * 
   * > This parameter collection is returned only if an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataEtlStatus;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
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
   * The network type of the consumer client. Valid values:
   * 
   * *   **CLASSIC**: classic network.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection settings of the destination instance.
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
   * The instance class.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.
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
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * > This parameter is returned only if you query the details of an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > This parameter is returned only if the return value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **online**: data migration task.
   * *   **SYNC**: data synchronization task.
   * *   **SUBSCRIBE**: change tracking task.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The migration types or initial synchronization types.
   */
  migrationMode?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobMigrationMode;
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
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The information about the retries performed by DTS due to an exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobRetryState;
  /**
   * @remarks
   * The details of the data synchronization task in the reverse direction.
   * 
   * > This parameter is returned only for two-way data synchronization tasks.
   * 
   * @example
   * ****
   */
  reverseJob?: any;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSourceEndpoint;
  /**
   * @remarks
   * The state of initial schema synchronization. Valid values:
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
  /**
   * @remarks
   * Initialization status of library table structure.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus;
  /**
   * @remarks
   * The topic of the change tracking instance.
   * 
   * > This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation to create a consumer group.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of data for change tracking.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking instance.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tags of the task.
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
   * The ID of the Alibaba Cloud account to which the source instance belongs.
   * 
   * @example
   * 140692647406****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the database from which the objects are migrated in the source instance.
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
   * 
   * > This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.
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
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **DISABLE**: SSL encryption is disabled.
   * *   **ENABLE_WITH_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
   * *   **ENABLE_ONLY_4_MONGODB_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
   * *   **ENABLE_ONLY_4_KAFKA_SCRAM_SHA_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.
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
   * Error message indicating task failure.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Whether to display upgrade specifications, return value:
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * Initialization progress of library table structure, measured in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have completed library table structure initialization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The initialization status of the library table structure includes:
   * - NotStarted: Not started.
   * - Migration: In the process of initialization.
   * - Failed: Initialization failed.
   * - Finished: Initialization completed.
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
   * Indicates whether DDL statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether DML statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
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
   * The operator of the tag.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key of the table.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
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
   * Indicates whether the tag is visible. Valid values:
   * 
   * *   **0**: The tag is public.
   * *   **1**: The tag is private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS task resides.
   * 
   * > In most cases, the ID of the region in which the destination instance resides is returned.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **System**: The tag was created by the system.
   * *   **Custom**: The tag was created by a user.
   * 
   * > By default, if the parameter is left empty, custom tags and system tags are returned.
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
   * Indicates whether the new change tracking feature is used.
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
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: string;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information in the following format: \\<IP address of the downstream client>:\\<Random ID generated by DTS>.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-12T08:34:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The state of the ETL task.
   * 
   * > This parameter collection is returned only if an ETL task is configured.
   */
  dataEtlStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataEtlStatus;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization.
   */
  dataInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataInitializationStatus;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
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
   * The network type of the consumer client. Valid values:
   * 
   * *   **CLASSIC**: classic network.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection settings of the destination instance.
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
   * The instance class.
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.
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
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * > This parameter is returned only if you query the details of an ETL task.
   * 
   * @example
   * { "cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > This parameter is returned only if the return value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isDemoJob?: boolean;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **online**: data migration task.
   * *   **SYNC**: data synchronization task.
   * *   **SUBSCRIBE**: change tracking task.
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
   * The migration types or initial synchronization types.
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
   * 
   * *   **PTS**
   * *   **DMS**
   * *   **DTS**
   * 
   * @example
   * PTS
   */
  originType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The performance of the data migration or synchronization instance.
   */
  performance?: DescribeDtsJobDetailResponseBodySubSyncJobPerformance;
  /**
   * @remarks
   * The precheck state.
   */
  precheckStatus?: DescribeDtsJobDetailResponseBodySubSyncJobPrecheckStatus;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The information about the retries performed by DTS due to an exception.
   */
  retryState?: DescribeDtsJobDetailResponseBodySubSyncJobRetryState;
  /**
   * @remarks
   * The details of the data synchronization task in the reverse direction.
   * 
   * > This parameter is returned only for two-way data synchronization tasks.
   */
  reverseJob?: DescribeDtsJobDetailResponseBodySubSyncJobReverseJob;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySubSyncJobSourceEndpoint;
  /**
   * @remarks
   * The state of initial schema synchronization. Valid values:
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
  /**
   * @remarks
   * Initialization status of library table structure.
   */
  structureInitializationStatus?: DescribeDtsJobDetailResponseBodySubSyncJobStructureInitializationStatus;
  /**
   * @remarks
   * The information about the subtasks in the current data synchronization task.
   */
  subSyncJob?: any[];
  /**
   * @remarks
   * The topic of the change tracking instance.
   * 
   * > This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation to create a consumer group.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of data for change tracking.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking instance.
   */
  subscriptionHost?: DescribeDtsJobDetailResponseBodySubSyncJobSubscriptionHost;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The tags of the task.
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
   * Indicates whether DDL statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ddl?: boolean;
  /**
   * @remarks
   * Indicates whether DML statements are tracked. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****-internal.aliyuncs.com:18002
   */
  privateHost?: string;
  /**
   * @remarks
   * The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
   * 
   * @example
   * dts-cn-****.aliyuncs.com:18001
   */
  publicHost?: string;
  /**
   * @remarks
   * The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.
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
   * Indicates whether the new change tracking feature is used.
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
   * 2022-03-15T08:25:34Z
   */
  beginTimestamp?: string;
  /**
   * @remarks
   * The binary logs.
   * 
   * @example
   * ****
   */
  binlog?: string;
  /**
   * @remarks
   * The current offset.
   * 
   * @example
   * 156629109****
   */
  binlogSite?: string;
  /**
   * @remarks
   * The offset range.
   * 
   * @example
   * ****
   */
  binlogTime?: string;
  /**
   * @remarks
   * The time when the task was started. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-30T03:36:11.000
   */
  bootTime?: string;
  /**
   * @remarks
   * The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1616405159
   */
  checkpoint?: number;
  /**
   * @remarks
   * The error code. This parameter will be removed in the future.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-23T07:30:31Z
   */
  consumptionCheckpoint?: string;
  /**
   * @remarks
   * The downstream client information in the following format: \\<IP address of the downstream client>:\\<Random ID generated by DTS>.
   * 
   * @example
   * 114.***.***.**:dts********
   */
  consumptionClient?: string;
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
   * The information about the data shipping channel.
   */
  dataDeliveryChannelInfo?: DescribeDtsJobDetailResponseBodyDataDeliveryChannelInfo;
  /**
   * @remarks
   * The state of incremental data migration or synchronization.
   */
  dataSynchronizationStatus?: DescribeDtsJobDetailResponseBodyDataSynchronizationStatus;
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.
   * 
   * @example
   * 2
   */
  databaseCount?: number;
  /**
   * @remarks
   * The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}
   */
  dbObject?: string;
  /**
   * @remarks
   * The dedicated cluster ID.
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
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  demoJob?: boolean;
  /**
   * @remarks
   * The network type of the consumer client. Valid values:
   * 
   * *   **CLASSIC**: classic network.
   * *   **VPC**: virtual private cloud (VPC).
   * 
   * @example
   * VPC
   */
  destNetType?: string;
  /**
   * @remarks
   * The connection settings of the destination instance.
   */
  destinationEndpoint?: DescribeDtsJobDetailResponseBodyDestinationEndpoint;
  /**
   * @remarks
   * The environment tag of the DTS instance. Valid values:
   * 
   * *   **normal******
   * *   **online******
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
   * The instance class.
   * 
   * > For more information about the description and test performance of each instance class, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * xlarge
   */
  dtsJobClass?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
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
   * api_test
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The dynamic part in the error message. The value of this parameter is used to replace **%s** in the value of **ErrMessage**.
   * 
   * > For example, if the return value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsJobId**, the specified value of **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The end of the time range for change tracking. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-26T14:03:21Z
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * 
   * > This parameter is returned only if you query the details of an ETL task.
   * 
   * @example
   * { 	"cells ": [{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442****\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e****\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924****\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 	}] }
   */
  etlCalculator?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > This parameter is returned only if the return value of **PayType** is **PrePaid**.
   * 
   * @example
   * 2023-06-16T08:01:19Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The type of the DTS task. Valid values:
   * 
   * *   **sync**: a data synchronization task.
   * *   **subSync**: a subtask generated when the objects to be synchronized are modified.
   * 
   * > In most cases, this parameter is returned together with **TaskType**.
   * 
   * @example
   * sync
   */
  jobType?: string;
  /**
   * @remarks
   * The timestamp when the task was last updated.
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
   * The migration types or initial synchronization types.
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
   * The billing method of the DTS instance. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
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
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](https://help.aliyun.com/document_detail/176470.html).
   * 
   * @example
   * {\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1**.**:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1**.**:11077\\",\\"useJobTask\\":\\"1\\"}
   */
  reserved?: string;
  /**
   * @remarks
   * The resource group name.
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
  retryState?: DescribeDtsJobDetailResponseBodyRetryState;
  /**
   * @remarks
   * The connection settings of the source instance.
   */
  sourceEndpoint?: DescribeDtsJobDetailResponseBodySourceEndpoint;
  /**
   * @remarks
   * The state of the data migration or synchronization task. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **NotConfigured**: The task is not configured.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **PreCheckPass**: The task passed the precheck.
   * *   **Initializing**: Initial data synchronization is in progress.
   * *   **InitializeFailed**: Initial data synchronization failed.
   * *   **synchronizing**: Data synchronization is in progress.
   * *   **Migrating**: Data migration is in progress.
   * *   **Failed**: Data synchronization failed.
   * *   **MigrationFailed**: Data migration failed.
   * *   **Suspending**: The task is paused.
   * *   **Modifying**: The objects of the task are being modified.
   * *   **Retrying**: The task is being retried.
   * *   **Upgrade**: The task is being upgraded.
   * *   **Downgrade**: The task is being downgraded.
   * *   **Locked**: The task is locked.
   * *   **Finished**: The task is complete.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The information about the subtasks in the current distributed task. If the DTS task is not a distributed task, the value of this parameter is null.
   * 
   * > This parameter is available only if the DTS task is a data synchronization task.
   */
  subDistributedJob?: DescribeDtsJobDetailResponseBodySubDistributedJob[];
  /**
   * @remarks
   * The information about the subtasks in the current data synchronization task.
   */
  subSyncJob?: DescribeDtsJobDetailResponseBodySubSyncJob[];
  /**
   * @remarks
   * The topic of the change tracking instance.
   * 
   * > This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](https://help.aliyun.com/document_detail/122863.html) operation to create a consumer group.
   * 
   * @example
   * cn_hangzhou_rm_bp1162kryivb8****_dtstest_version2
   */
  subscribeTopic?: string;
  /**
   * @remarks
   * The type of data for change tracking.
   */
  subscriptionDataType?: DescribeDtsJobDetailResponseBodySubscriptionDataType;
  /**
   * @remarks
   * The endpoint of the change tracking instance.
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
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * > In most cases, this parameter is returned together with **JobType**.
   * 
   * @example
   * Distributed_xxx
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
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

