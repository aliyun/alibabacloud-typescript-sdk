// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The start position for incremental data migration or the synchronization checkpoint, in the format of a UNIX timestamp. Unit: seconds.
   * 
   * > If you specify the **Checkpoint** parameter, make sure that no other running DTS instance has the same source database as the destination DTS instance.
   * 
   * @example
   * 1610540493
   */
  checkpoint?: string;
  /**
   * @remarks
   * The parameters of the data validation node, in JSON character string format, such as parameter limits and alert configuration. For more information, see [DataCheckConfigure parameter description](https://help.aliyun.com/document_detail/459023.html).
   * 
   * @example
   * {"fullCheckModel":1,"fullCheckRatio":20,"checkMaximumHourEnable":1,"checkMaximumHour":1,"fullCheckErrorNotice":true,"fullCheckValidFailNotice":true,"fullCheckNoticeValue":8,"incrementalCheckErrorNotice":true,"incrementalCheckValidFailNotice":true,"incrementalCheckValidFailNoticeTimes":2,"incrementalCheckValidFailNoticePeriod":1,"incrementalCheckValidFailNoticeValue":1,"incrementalCheckDelayNotice":true,"incrementalCheckDelayNoticeTimes":2,"incrementalCheckDelayNoticePeriod":1,"incrementalCheckDelayNoticeValue":60,"fullDataCheck":true,"incrementalDataCheck":true,"dataCheckNoticePhone":"13126800****","dataCheckDbList":{"dts":{"name":"dts","all":true}}}
   */
  dataCheckConfigure?: string;
  /**
   * @remarks
   * Specifies whether to perform full data migration or initial full data synchronization. Valid values:
   * 
   * - **true**: Yes. This is the default value.
   * - **false**: No.
   * 
   * > If **JobType** is set to **CHECK**, this parameter can only be set to **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform incremental data migration or synchronization. Valid values:
   * 
   * - **false**: No. This is the default value.
   * - **true**: Yes.
   * 
   * > If **JobType** is set to **CHECK**, this parameter can only be set to **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * The objects to be migrated or synchronized, in JSON format. For more information, see [Objects of migration, synchronization, or change tracking tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * - The maximum size of the DbList value is 1 MB.
   * - If DbList contains filter conditions, the total length of DbList (including filter conditions) cannot exceed 1 MB.
   * - For distributed tasks (such as migration or synchronization tasks with PolarDB-X 1.0 as the source), DbList is split based on physical shards and multiple subtasks are generated. The maximum size of DbList for each subtask is 1 MB.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster.
   * 
   * > If you specify the ID of a dedicated cluster, the task is scheduled to the corresponding cluster.
   * 
   * @example
   * dtscluster_atyl3b5214uk***
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * Specifies whether to monitor the latency status. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  delayNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers for latency alerting of the contact. Separate multiple phone numbers with commas (,).
   * > - This parameter is supported only on the China site. Only the Chinese mainland phone numbers are supported, and a maximum of 10 phone numbers can be specified.
   * - The international site does not support phone alerting. You can only [configure alert rules for DTS tasks through the CloudMonitor platform to set alert rules](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayPhone?: string;
  /**
   * @remarks
   * The threshold for triggering latency alerts. Unit: seconds. The value must be an integer. Set the threshold based on your business requirements. To avoid alert fluctuations caused by network conditions or database loads, set the threshold to 10 seconds or more.
   * > This parameter is required when **DelayNotice** is set to **true**.
   * 
   * @example
   * 10
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The path of the CA certificate for SSL connection to the destination database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The password of the CA certificate for SSL connection to the destination database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destCaCertificatePassword?: string;
  /**
   * @remarks
   * The path of the client certificate for SSL connection to the destination database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientCertOssUrl?: string;
  /**
   * @remarks
   * The path of the client certificate private key for SSL connection to the destination database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the client certificate private key for SSL connection to the destination database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientPassword?: string;
  /**
   * @remarks
   * The primary vSwitch of the VPC NAT gateway on the destination side.
   * 
   * @example
   * ****
   */
  destPrimaryVswId?: string;
  /**
   * @remarks
   * The secondary vSwitch of the VPC NAT gateway on the destination side.
   * 
   * @example
   * ****
   */
  destSecondaryVswId?: string;
  /**
   * @remarks
   * The name of the database to which the objects to be migrated belong in the destination instance.
   * > - This parameter is available and required only when the destination instance or destination database type is PolarDB for PostgreSQL (Compatible with Oracle), AnalyticDB for PostgreSQL, PostgreSQL, MaxCompute, or MongoDB.
   * - If the destination database is MaxCompute, specify the project of the MaxCompute instance.
   * 
   * @example
   * dtstestdata
   */
  destinationEndpointDataBaseName?: string;
  /**
   * @remarks
   * The database type of the destination instance. Valid values:
   * - **MYSQL**: MySQL database (including ApsaraDB RDS for MySQL and self-managed MySQL).
   * - **MARIADB**: ApsaraDB RDS for MariaDB.
   * - **PolarDB**: PolarDB for MySQL.
   * - **POLARDB_O**: PolarDB for PostgreSQL (Compatible with Oracle).
   * - **POLARDBX10**: PolarDB-X 1.0 (formerly DRDS).
   * - **POLARDBX20**: cloud-native distributed database PolarDB-X 2.0.
   * - **ORACLE**: self-managed Oracle.
   * - **PostgreSQL**: PostgreSQL database (including ApsaraDB RDS for PostgreSQL and self-managed PostgreSQL).
   * - **MSSQL**: SQL Server database (including ApsaraDB RDS for SQL Server and self-managed SQL Server).
   * - **ADS**: AnalyticDB for MySQL 2.0.
   * - **ADB30**: AnalyticDB for MySQL 3.0.
   * - **MONGODB**: MongoDB database (including self-managed MongoDB and ApsaraDB for MongoDB).
   * - **ROCKETMQ**: ApsaraMQ for RocketMQ.
   * - **GREENPLUM**: AnalyticDB for PostgreSQL.
   * - **KAFKA**: Kafka database (including MSMQ for Apache Kafka and self-managed Kafka).
   * - **DATAHUB**: Alibaba Cloud DataHub.
   * - **DB2**: self-managed Db2 for LUW.
   * - **AS400**: Db2 for i.
   * - **ODPS**: MaxCompute.
   * - **Tablestore**: Tablestore.
   * - **ELK**: Alibaba Cloud Elasticsearch.
   * - **REDIS**: Redis database, including self-managed Redis and Tair (Redis® OSS-Compatible).
   * - **LINDORM**: cloud-native multi-model database Lindorm.
   * 
   * > - Default value: **MYSQL**.
   * - If the database type of the destination instance is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify additional information in the Reserve parameter. For the metric description, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * MYSQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The IP address of the destination instance.
   * > This parameter is available and required only when **DestinationEndpointInstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
   * 
   * @example
   * ``172.16.**.**``*
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   *  If the destination instance is an Alibaba Cloud database (such as ApsaraDB RDS for MySQL), specify the ID of the Alibaba Cloud database instance (such as the ApsaraDB RDS for MySQL instance ID).
   * 
   *  If the destination instance is a self-managed database, the value of this parameter varies based on the value of **DestinationEndpointInstanceType**. Example:
   * 
   * 
   * - **ECS**: Specify the ID of the ECS instance.
   * - **DG**: Specify the ID of the database gateway.
   * - **EXPRESS** or **CEN**: Specify the ID of the VPC that is connected to the source database.
   * 
   * > If the value is **CEN**, you must also specify the CEN instance ID in the Reserve parameter. For the metric description, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * vpc-bp1opxu1zkhn00gzv****
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The target instance type. Valid values:
   * 
   * **Alibaba Cloud databases**
   * - **RDS**: ApsaraDB RDS for MySQL, ApsaraDB RDS for SQL Server, ApsaraDB RDS for PostgreSQL, or ApsaraDB RDS for MariaDB.
   * - **PolarDB**: PolarDB for MySQL.
   * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS).
   * - **POLARDBX20**: PolarDB-X 2.0.
   * - **REDIS**: Tair (Redis® OSS-Compatible).
   * - **ADS**: AnalyticDB for MySQL 2.0 or 3.0.
   * - **MONGODB**: ApsaraDB for MongoDB.
   * - **ROCKETMQ**: ApsaraMQ for RocketMQ.
   * - **GREENPLUM**: AnalyticDB for PostgreSQL.
   * - **DATAHUB**: Alibaba Cloud DataHub platform.
   * - **ELK**: Alibaba Cloud Elasticsearch.
   * - **Tablestore**: Tablestore.
   * - **ODPS**: MaxCompute.
   * - **LINDORM**: cloud-native multi-model database Lindorm.
   * 
   * **Self-managed databases**
   * - **OTHER**: self-managed database with a public IP address.
   * - **ECS**: self-managed database hosted on ECS.
   * - **EXPRESS**: self-managed database connected over Express Connect.
   * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN).
   * - **DG**: self-managed database connected over Database Gateway.
   * 
   * > - If the destination instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, set this parameter to **OTHER** or **EXPRESS** to connect the cluster as a self-managed database over a public IP address or Express Connect.
   * - If the destination instance is MSMQ for Apache Kafka, set this parameter to **ECS** or **EXPRESS** to connect the instance as a self-managed database over ECS or Express Connect.
   * - For information about supported source and destination database combinations, see <props="china">[Supported databases](https://help.aliyun.com/document_detail/131497.html)<props="intl">[Supported source and destination databases](https://help.aliyun.com/document_detail/176064.html).
   * - If the destination instance is a self-managed database, you must also execute the required preparations. For more information, see [Preparations overview](https://help.aliyun.com/document_detail/146958.html).
   * 
   * This parameter is required.
   * 
   * @example
   * EXPRESS
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is available and required only when **DestinationEndpointEngineName** is set to **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the destination ApsaraDB RDS for MySQL instance belongs.
   * > - This parameter can be configured only when the destination instance is ApsaraDB RDS for MySQL.
   * - Specifying this parameter indicates you execute a cross-account data migration or synchronization. You must also specify the **DestinationEndpointRole** parameter.
   * 
   * @example
   * 140692647406****
   */
  destinationEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the destination database account.
   * > If the destination database is MaxCompute, specify the AccessKey secret of the Alibaba Cloud account. For more information about how to obtain the AccessKey secret, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * @example
   * Test123456
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The database service port of the destination instance.
   * > This parameter is available and required only when the destination instance is a self-managed database.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: string;
  /**
   * @remarks
   * The region of the destination instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the destination instance is an Alibaba Cloud database, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * > This parameter is required for cross-account data migration or synchronization. For information about the permissions and authorization method required for this role, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  destinationEndpointRole?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * > - In most cases, you must specify the database account of the destination database.
   * - The required permissions vary depending on the database being migrated or synchronized. For more information, see [Prepare database accounts for data migration](https://help.aliyun.com/document_detail/175878.html) and [Prepare database accounts for data synchronization](https://help.aliyun.com/document_detail/213152.html).
   * - If the destination database is MaxCompute, specify the AccessKey ID of the Alibaba Cloud account. For more information about how to obtain the AccessKey ID, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * @example
   * dtstest
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * Specifies whether this is a disaster recovery instance. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  disasterRecoveryJob?: boolean;
  /**
   * @remarks
   * The environment label of the DTS instance. Valid values:
   * 
   * - **normal**: normal
   * - **online**: online.
   * 
   * @example
   * normal
   */
  dtsBisLabel?: string;
  /**
   * @remarks
   * The ID of the migration or synchronization instance.
   * > You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the instance ID.
   * 
   * @example
   * dtsk2gm967v16f****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the migration or synchronization task.
   * > You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * @example
   * k2gm967v16f****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the DTS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rdsmysql_to_mysql
   */
  dtsJobName?: string;
  /**
   * @remarks
   * Specifies whether to monitor the error status. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  errorNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers for error alerting of the contact. Separate multiple phone numbers with commas (,).
   * > - This parameter is supported only on the China site. Only the Chinese mainland phone numbers are supported, and a maximum of 10 phone numbers can be specified.
   * - The international site does not support phone alerting. You can only [configure alert rules for DTS tasks through the CloudMonitor platform to set alert rules](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorPhone?: string;
  /**
   * @remarks
   * The OSS URL of the task file.
   * 
   * @example
   * http://db-list-os-file.oss-cn-shanghai.aliyuncs.com/8e42_121852**********_79dd3aeabe2f43cdb**************
   */
  fileOssUrl?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * - **MIGRATION**: data migration.
   * - **SYNC**: data synchronization.
   * - **CHECK**: data validation (purchased separately).
   * 
   * > - If the value is **MIGRATION** or **SYNC**, you can also configure a data validation node within the migration or synchronization instance.
   * - To configure a data validation node, you must also specify the **DataCheckConfigure** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of DTS Units (DUs).
   * 
   * > This parameter is supported only for serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
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
  ownerId?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameter of DTS, in JSON character string format. You can specify this parameter to add information about the source and destination databases (such as the data storage format of the destination Kafka database, the CEN instance ID, and ETL feature configurations). For more information, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * {      "srcInstanceId": "cen-9kqshqum*******"  }
   */
  reserve?: string;
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
   * The name of the database to which the objects to be migrated belong in the source instance.
   * > This parameter is available and required only when the source instance or its database type is PolarDB for PostgreSQL (Compatible with Oracle), PostgreSQL, or MongoDB.
   * 
   * @example
   * dtstestdatabase
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database type of the source instance. Valid values:
   * - **MYSQL**: MySQL database (including ApsaraDB RDS for MySQL and self-managed MySQL).
   * - **MARIADB**: ApsaraDB RDS for MariaDB.
   * - **PolarDB**: PolarDB for MySQL.
   * - **POLARDB_O**: PolarDB for PostgreSQL (Compatible with Oracle).
   * - **POLARDBX10**: PolarDB-X 1.0 (formerly DRDS).
   * - **POLARDBX20**: cloud-native distributed database PolarDB-X 2.0.
   * - **ADB30**: AnalyticDB for MySQL 3.0.
   * - **ORACLE**: self-managed Oracle.
   * - **POSTGRESQL**: PostgreSQL database (including ApsaraDB RDS for PostgreSQL and self-managed PostgreSQL).
   * - **MSSQL**: SQL Server database (including ApsaraDB RDS for SQL Server and self-managed SQL Server).
   * - **MONGODB**: MongoDB database (including self-managed MongoDB and ApsaraDB for MongoDB).
   * - **DB2**: self-managed Db2 for LUW.
   * - **AS400**: self-managed Db2 for i.
   * - **DMSPOLARDB**: Data Management (DMS) logical database.
   * - **HBASE**: self-managed HBase database.
   * - **TERADATA**: Teradata database.
   * - **TiDB**: TiDB database.
   * - **REDIS**: Redis database, including self-managed Redis and Tair (Redis® OSS-Compatible).
   * - **LINDORM**: Lindorm.
   * 
   * 
   * > - Default value: **MYSQL**.
   *  - If the database type of the source instance is set to **MONGODB**, you must also specify additional information in the Reserve parameter. For the metric description, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * MYSQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The IP address of the source instance.
   * > This parameter is available and required only when **SourceEndpointInstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
   * 
   * @example
   * ``172.16.**.**``*
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * If the source instance is an Alibaba Cloud database (such as ApsaraDB RDS for MySQL), specify the ID of the Alibaba Cloud database instance (such as the ApsaraDB RDS for MySQL instance ID).
   * 
   * If the source instance is a self-managed database, the value of this parameter varies based on the value of **SourceEndpointInstanceType**. Example:
   * 
   * - **ECS**: Specify the ID of the ECS instance.
   * - **DG**: Specify the ID of the database gateway.
   * - **EXPRESS** or **CEN**: Specify the ID of the VPC that is connected to the source database.
   * 
   * > If the value is **CEN**, you must also specify the CEN instance ID in the Reserve parameter. For the metric description, see [Reserve parameter description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * **Alibaba Cloud databases**
   * 
   * - **RDS**: ApsaraDB RDS for MySQL, ApsaraDB RDS for SQL Server, ApsaraDB RDS for PostgreSQL, or ApsaraDB RDS for MariaDB.
   * - **PolarDB**: PolarDB for MySQL.
   * - **ADS**: AnalyticDB for MySQL.
   * - **REDIS**: Tair (Redis® OSS-Compatible).
   * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS).
   * - **POLARDBX20**: PolarDB-X 2.0.
   * - **MONGODB**: ApsaraDB for MongoDB.
   * - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database.
   * - **LINDORM**: Lindorm.
   * 
   * **Self-managed databases**
   * - **OTHER**: self-managed database with a public IP address.
   * - **ECS**: self-managed database hosted on ECS.
   * - **EXPRESS**: self-managed database connected over Express Connect.
   * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN).
   * - **DG**: self-managed database connected over Database Gateway.
   * 
   * 
   * > - If the source instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, set this parameter to **OTHER** or **EXPRESS** to connect the cluster as a self-managed database over a public IP address or Express Connect.
   * - For information about supported source and destination database combinations, see [Supported databases](https://help.aliyun.com/document_detail/131497.html).
   * - If the source instance is a self-managed database, you must complete the required preparations. For more information, see [Preparations overview](https://help.aliyun.com/document_detail/130607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * > This parameter is available and required only when **SourceEndpointEngineName** is set to **Oracle** and the Oracle database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * > Specifying this parameter indicates you execute a cross-account data migration or synchronization. You must also specify the **SourceEndpointRole** parameter.
   * 
   * @example
   * 140692647406****
   */
  sourceEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the source database account.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The database service port of the source instance.
   * > This parameter is available and required only when the source instance is a self-managed database.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The region of the source instance. For details, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the source instance is an Alibaba Cloud database, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.
   * > This parameter is required for cross-account data migration or synchronization. For information about the permissions and authorization method required for this role, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  sourceEndpointRole?: string;
  /**
   * @remarks
   * The database account of the source database.
   * > - In most cases, you must specify the database account of the source database.
   * - The required permissions vary depending on the database being migrated or synchronized. For more information, see [Prepare database accounts for data migration](https://help.aliyun.com/document_detail/175878.html) and [Prepare database accounts for data synchronization](https://help.aliyun.com/document_detail/213152.html).
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The vSwitch instance ID for the data delivery link.
   * 
   * @example
   * vsw-bp10df3mxae6lpmku****
   */
  sourceEndpointVSwitchID?: string;
  /**
   * @remarks
   * The path of the CA certificate for SSL connection to the source database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The password of the CA certificate for SSL connection to the source database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificatePassword?: string;
  /**
   * @remarks
   * The path of the client certificate for SSL connection to the source database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientCertOssUrl?: string;
  /**
   * @remarks
   * The path of the client certificate private key for SSL connection to the source database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the client certificate private key for SSL connection to the source database.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientPassword?: string;
  /**
   * @remarks
   * The primary vSwitch of the VPC NAT gateway on the source side.
   * 
   * @example
   * ****
   */
  srcPrimaryVswId?: string;
  /**
   * @remarks
   * The secondary vSwitch of the VPC NAT gateway on the source side.
   * 
   * @example
   * ****
   */
  srcSecondaryVswId?: string;
  /**
   * @remarks
   * Specifies whether to perform schema migration or initial schema synchronization. Valid values:
   * 
   * - **true**: Yes. This is the default value.
   * - **false**: No.
   * 
   * > If **JobType** is set to **CHECK**, this parameter can only be set to **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the synchronization task is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      dataCheckConfigure: 'DataCheckConfigure',
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      dbList: 'DbList',
      dedicatedClusterId: 'DedicatedClusterId',
      delayNotice: 'DelayNotice',
      delayPhone: 'DelayPhone',
      delayRuleTime: 'DelayRuleTime',
      destCaCertificateOssUrl: 'DestCaCertificateOssUrl',
      destCaCertificatePassword: 'DestCaCertificatePassword',
      destClientCertOssUrl: 'DestClientCertOssUrl',
      destClientKeyOssUrl: 'DestClientKeyOssUrl',
      destClientPassword: 'DestClientPassword',
      destPrimaryVswId: 'DestPrimaryVswId',
      destSecondaryVswId: 'DestSecondaryVswId',
      destinationEndpointDataBaseName: 'DestinationEndpointDataBaseName',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationEndpointIP: 'DestinationEndpointIP',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointOwnerID: 'DestinationEndpointOwnerID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointPort: 'DestinationEndpointPort',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointRole: 'DestinationEndpointRole',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      disasterRecoveryJob: 'DisasterRecoveryJob',
      dtsBisLabel: 'DtsBisLabel',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      errorNotice: 'ErrorNotice',
      errorPhone: 'ErrorPhone',
      fileOssUrl: 'FileOssUrl',
      jobType: 'JobType',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reserve: 'Reserve',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointDatabaseName: 'SourceEndpointDatabaseName',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointInstanceType: 'SourceEndpointInstanceType',
      sourceEndpointOracleSID: 'SourceEndpointOracleSID',
      sourceEndpointOwnerID: 'SourceEndpointOwnerID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointRole: 'SourceEndpointRole',
      sourceEndpointUserName: 'SourceEndpointUserName',
      sourceEndpointVSwitchID: 'SourceEndpointVSwitchID',
      srcCaCertificateOssUrl: 'SrcCaCertificateOssUrl',
      srcCaCertificatePassword: 'SrcCaCertificatePassword',
      srcClientCertOssUrl: 'SrcClientCertOssUrl',
      srcClientKeyOssUrl: 'SrcClientKeyOssUrl',
      srcClientPassword: 'SrcClientPassword',
      srcPrimaryVswId: 'SrcPrimaryVswId',
      srcSecondaryVswId: 'SrcSecondaryVswId',
      structureInitialization: 'StructureInitialization',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      dataCheckConfigure: 'string',
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      dbList: 'string',
      dedicatedClusterId: 'string',
      delayNotice: 'boolean',
      delayPhone: 'string',
      delayRuleTime: 'number',
      destCaCertificateOssUrl: 'string',
      destCaCertificatePassword: 'string',
      destClientCertOssUrl: 'string',
      destClientKeyOssUrl: 'string',
      destClientPassword: 'string',
      destPrimaryVswId: 'string',
      destSecondaryVswId: 'string',
      destinationEndpointDataBaseName: 'string',
      destinationEndpointEngineName: 'string',
      destinationEndpointIP: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointOwnerID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointPort: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointRole: 'string',
      destinationEndpointUserName: 'string',
      disasterRecoveryJob: 'boolean',
      dtsBisLabel: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      errorNotice: 'boolean',
      errorPhone: 'string',
      fileOssUrl: 'string',
      jobType: 'string',
      maxDu: 'number',
      minDu: 'number',
      ownerId: 'string',
      regionId: 'string',
      reserve: 'string',
      resourceGroupId: 'string',
      sourceEndpointDatabaseName: 'string',
      sourceEndpointEngineName: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointInstanceType: 'string',
      sourceEndpointOracleSID: 'string',
      sourceEndpointOwnerID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointPort: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointRole: 'string',
      sourceEndpointUserName: 'string',
      sourceEndpointVSwitchID: 'string',
      srcCaCertificateOssUrl: 'string',
      srcCaCertificatePassword: 'string',
      srcClientCertOssUrl: 'string',
      srcClientKeyOssUrl: 'string',
      srcClientPassword: 'string',
      srcPrimaryVswId: 'string',
      srcSecondaryVswId: 'string',
      structureInitialization: 'boolean',
      synchronizationDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

