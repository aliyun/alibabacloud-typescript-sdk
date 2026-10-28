// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The start offset for incremental data migration or the synchronization checkpoint, in UNIX timestamp format. Unit: seconds.
   * 
   * > If you specify the **Checkpoint** parameter, you must ensure that no other running DTS instances use the same source database as the destination DTS instance.
   * 
   * @example
   * 1610540493
   */
  checkpoint?: string;
  /**
   * @remarks
   * The parameters for the data validation task, in JSON character string format, such as parameter limits and alert configuration. For more information, see [DataCheckConfigure metric description](https://help.aliyun.com/document_detail/459023.html).
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
   * > If **JobType** is set to **CHECK**, you can only set this parameter to **false**.
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
   * > If **JobType** is set to **CHECK**, you can only set this parameter to **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * The objects to be migrated or synchronized, in JSON format. For more information, see [Object definitions for migration, synchronization, and change tracking](https://help.aliyun.com/document_detail/209545.html).
   * 
   * - The DbList parameter supports up to 1 MB of data.
   * - If DbList contains filter conditions, the total length of DbList including the filter conditions can be up to 1 MB.
   * - For distributed tasks such as migration or synchronization tasks where the source is PolarDB-X 1.0, DbList is split based on physical table shards to generate multiple subtasks. The DbList of each subtask supports up to 1 MB of data.
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the dedicated DTS cluster.
   * 
   * > When the ID of a dedicated cluster is specified, the task is scheduled to the corresponding cluster.
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
   * The mobile phone numbers of the contacts to receive latency alerts. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the China site and supports only mobile phone numbers in the Chinese mainland. You can specify up to 10 mobile phone numbers.
   * - The international site does not support mobile phone alerts. You can only [set alert rules for DTS tasks through CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayPhone?: string;
  /**
   * @remarks
   * The threshold for triggering latency alerts. Unit: seconds. The value must be an integer. You can set the threshold based on your business requirements. We recommend that you set the threshold to more than 10 seconds to avoid latency fluctuations caused by network or database loads.
   * > This parameter is required when **DelayNotice** is set to **true**.
   * 
   * @example
   * 10
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The path of the CA certificate when the destination database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The password of the CA certificate when the destination database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destCaCertificatePassword?: string;
  /**
   * @remarks
   * The path of the client certificate when the destination database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientCertOssUrl?: string;
  /**
   * @remarks
   * The path of the client certificate private key when the destination database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the client certificate private key when the destination database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientPassword?: string;
  /**
   * @remarks
   * The primary vSwitch at the destination end of the VPC NAT gateway.
   * 
   * @example
   * ****
   */
  destPrimaryVswId?: string;
  /**
   * @remarks
   * The secondary vSwitch at the destination end of the VPC NAT gateway.
   * 
   * @example
   * ****
   */
  destSecondaryVswId?: string;
  /**
   * @remarks
   * The name of the database to which the migration objects belong in the destination instance.
   * > - This parameter is available and required only when the destination instance or the database engine of the destination instance is PolarDB for PostgreSQL (Compatible with Oracle), AnalyticDB for PostgreSQL, PostgreSQL, MaxCompute, or MongoDB.
   * - If the destination database is MaxCompute, you must specify the name of the MaxCompute project.
   * 
   * @example
   * dtstestdata
   */
  destinationEndpointDataBaseName?: string;
  /**
   * @remarks
   * The database type of the destination instance. Valid values:
   * - **MYSQL**: MySQL database, including ApsaraDB RDS for MySQL and self-managed MySQL.
   * - **MARIADB**: ApsaraDB RDS for MariaDB.
   * - **PolarDB**: PolarDB for MySQL.
   * - **POLARDB_O**: PolarDB for PostgreSQL (Compatible with Oracle).
   * - **POLARDBX10**: PolarDB-X 1.0 (formerly DRDS).
   * - **POLARDBX20**: cloud-native distributed database PolarDB-X 2.0.
   * - **ORACLE**: Self-managed Oracle database.
   * - **PostgreSQL**: PostgreSQL database, including ApsaraDB RDS for PostgreSQL and self-managed PostgreSQL.
   * - **MSSQL**: SQL Server database, including ApsaraDB RDS for SQL Server and self-managed SQL Server.
   * - **ADS**: AnalyticDB for MySQL V2.0.
   * - **ADB30**: AnalyticDB for MySQL V3.0.
   * - **MONGODB**: MongoDB database, including self-managed MongoDB and ApsaraDB for MongoDB.
   * - **ROCKETMQ**: MSMQ RocketMQ.
   * - **GREENPLUM**: AnalyticDB for PostgreSQL.
   * - **KAFKA**: Kafka database, including MSMQ for Kafka and self-managed Kafka.
   * - **DATAHUB**: DataHub.
   * - **DB2**: Self-managed Db2 for LUW database.
   * - **AS400**: Self-managed Db2 for i database.
   * - **ODPS**: MaxCompute.
   * - **Tablestore**: Tablestore.
   * - **ELK**: Alibaba Cloud retrieve and analysis service Elasticsearch.
   * - **REDIS**: Redis database, including self-managed Redis and Tair (Redis OSS-Compatible).
   * - **LINDORM**: cloud-native multi-model database Lindorm.
   * 
   * > - Default value: **MYSQL**.
   * - If the database type of the destination instance is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify some information in the reserved parameter Reserve. For more information about the configuration method, see [Reserve metric description](https://help.aliyun.com/document_detail/273111.html).
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
   * The instance ID of the destination instance.
   * 
   * If the destination instance is an ApsaraDB database such as ApsaraDB RDS for MySQL, you must specify the instance ID of the ApsaraDB database.
   * 
   * If the destination instance is a self-managed database, the value of this parameter varies based on the value of **DestinationEndpointInstanceType**. For example:
   * 
   * - If **DestinationEndpointInstanceType** is set to **ECS**, specify the instance ID of the ECS instance.
   * - If **DestinationEndpointInstanceType** is set to **DG**, specify the instance ID of the database gateway.
   * - If **DestinationEndpointInstanceType** is set to **EXPRESS** or **CEN**, specify the instance ID of the VPC that is connected to the source database.
   * 
   * > If the value is **CEN**, you must also specify the instance ID of the CEN instance in the reserved parameter Reserve. For more information about the configuration method, see [Reserve metric description](https://help.aliyun.com/document_detail/273111.html).
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
   * - **REDIS**: Tair (Redis OSS-Compatible).
   * - **ADS**: AnalyticDB for MySQL V2.0 or V3.0.
   * - **MONGODB**: ApsaraDB for MongoDB.
   * - **ROCKETMQ**: ApsaraDB for RocketMQ.
   * - **GREENPLUM**: AnalyticDB for PostgreSQL.
   * - **DATAHUB**: DataHub, the Alibaba Cloud streaming data processing platform.
   * - **ELK**: Alibaba Cloud retrieve and analysis service Elasticsearch.
   * - **Tablestore**: Tablestore.
   * - **ODPS**: MaxCompute.
   * - **LINDORM**: cloud-native multi-model database Lindorm.
   * 
   * **Self-managed databases**
   * - **OTHER**: Self-managed database with a public IP address.
   * - **ECS**: Self-managed database hosted on ECS.
   * - **EXPRESS**: Self-managed database connected over Express Connect.
   * - **CEN**: Self-managed database connected over CEN.
   * - **DG**: Self-managed database connected over Database Gateway.
   * 
   * > - If the destination instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you must set this parameter to **OTHER** or **EXPRESS** to treat it as a self-managed database and connect it over a public IP address or Express Connect.
   * - If the destination instance is MSMQ for Kafka, you must set this parameter to **ECS** or **EXPRESS** to treat it as a self-managed database and connect it over ECS or Express Connect.
   * - For more information about the supported source and destination databases, see <props="china">[Supported databases](https://help.aliyun.com/document_detail/131497.html)<props="intl">[Supported source and destination databases](https://help.aliyun.com/document_detail/176064.html).
   * - If the destination instance is a self-managed database, you must execute the corresponding preparations. For more information, see [Preparations overview](https://help.aliyun.com/document_detail/146958.html).
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
   * > This parameter is available and required only when **DestinationEndpointEngineName** is set to **Oracle** and the **Oracle** database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the destination ApsaraDB RDS for MySQL instance belongs.
   * > - This parameter can be configured only when the destination instance is ApsaraDB RDS for MySQL.
   * - Specifying this parameter indicates that you execute cross-Alibaba Cloud account data migration or synchronization. You must also specify the **DestinationEndpointRole** parameter.
   * 
   * @example
   * 140692647406****
   */
  destinationEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the database account of the destination database.
   * > If the destination database is MaxCompute, you must specify the AccessKey secret of the Alibaba Cloud account. For more information about how to obtain an AccessKey secret, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
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
   * The area of the destination instance. For details, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > This parameter is required if the destination instance is an ApsaraDB database.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the destination instance belongs.
   * > This parameter is required when you migrate or synchronize data across Alibaba Cloud accounts. For more information about the permissions required for the role and the authorization method, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  destinationEndpointRole?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * > - In most cases, you must specify the database account of the destination database.
   * - The permissions required for migrating or synchronizing data vary based on the database. For more information about the permission requirements, see [Prepare database accounts for data migration](https://help.aliyun.com/document_detail/175878.html) and [Prepare database accounts for data synchronization](https://help.aliyun.com/document_detail/213152.html).
   * - If the destination database is MaxCompute, you must specify the AccessKey ID of the Alibaba Cloud account. For more information about how to obtain an AccessKey ID, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * @example
   * dtstest
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * Specifies whether the instance is a disaster recovery instance. Valid values:
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
   * The ID of the data migration or synchronization instance.
   * > You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * @example
   * dtsk2gm967v16f****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * > You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
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
   * Specifies whether to monitor the exception status. Valid values:
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
   * The mobile phone numbers of the contacts to receive exception alerts. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the China site and supports only mobile phone numbers in the Chinese mainland. You can specify up to 10 mobile phone numbers.
   * - The international site does not support mobile phone alerts. You can only [set alert rules for DTS tasks through CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
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
   * The node type. Valid values:
   * 
   * - **MIGRATION**: data migration.
   * - **SYNC**: data synchronization.
   * - **CHECK**: data validation (purchased separately).
   * 
   * > - If the value is **MIGRATION** or **SYNC**, you can also configure a data validation node in the migration or synchronization instance.
   * - To configure a data validation node, you must also configure the **DataCheckConfigure** parameter.
   * 
   * This parameter is required.
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
   * The minimum number of DUs.
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
   * The region of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameter of DTS, in JSON character string format. You can specify this parameter to supplement the information about the source and destination databases, such as the data storage format of the destination Kafka database, the instance ID of the CEN instance, and the ETL feature configuration. For more information, see [Reserve metric description](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * {      "srcInstanceId": "cen-9kqshqum*******"  }
   */
  reserve?: string;
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
   * The name of the database to which the migration objects belong in the source instance.
   * > This parameter is available and required only when the source instance or the database engine of the source instance is PolarDB for PostgreSQL (Compatible with Oracle), PostgreSQL, or MongoDB.
   * 
   * @example
   * dtstestdatabase
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database type of the source instance. Valid values:
   * - **MYSQL**: MySQL database, including ApsaraDB RDS for MySQL and self-managed MySQL.
   * - **MARIADB**: ApsaraDB RDS for MariaDB.
   * - **PolarDB**: PolarDB for MySQL.
   * - **POLARDB_O**: PolarDB for PostgreSQL (Compatible with Oracle).
   * - **POLARDBX10**: PolarDB-X 1.0 (formerly DRDS).
   * - **POLARDBX20**: cloud-native distributed database PolarDB-X 2.0.
   * - **ADB30**: AnalyticDB for MySQL V3.0.
   * - **ORACLE**: Self-managed Oracle database.
   * - **POSTGRESQL**: PostgreSQL database, including ApsaraDB RDS for PostgreSQL and self-managed PostgreSQL.
   * - **MSSQL**: SQL Server database, including ApsaraDB RDS for SQL Server and self-managed SQL Server.
   * - **MONGODB**: MongoDB database, including self-managed MongoDB and ApsaraDB for MongoDB.
   * - **DB2**: Self-managed Db2 for LUW database.
   * - **AS400**: Self-managed Db2 for i database.
   * - **DMSPOLARDB**: DMS logical database.
   * - **HBASE**: Self-managed HBase database.
   * - **TERADATA**: Teradata database.
   * - **TiDB**: TiDB database.
   * - **REDIS**: Redis database, including self-managed Redis and Tair (Redis OSS-Compatible).
   * - **LINDORM**: cloud-native multi-model database Lindorm.
   * 
   * 
   * > - Default value: **MYSQL**.
   * - If the database type of the source instance is set to **MONGODB**, you must also specify some information in the reserved parameter Reserve. For more information about the configuration method, see [Reserve metric description](https://help.aliyun.com/document_detail/273111.html).
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
   * The instance ID of the source instance.
   * 
   * If the source instance is an ApsaraDB database such as ApsaraDB RDS for MySQL, you must specify the instance ID of the ApsaraDB database.
   * 
   * If the source instance is a self-managed database, the value of this parameter varies based on the value of **SourceEndpointInstanceType**. For example:
   * 
   * - If **SourceEndpointInstanceType** is set to **ECS**, specify the instance ID of the ECS instance.
   * - If **SourceEndpointInstanceType** is set to **DG**, specify the instance ID of the database gateway.
   * - If **SourceEndpointInstanceType** is set to **EXPRESS** or **CEN**, specify the instance ID of the VPC that is connected to the source database.
   * 
   * > If the value is **CEN**, you must also specify the instance ID of the CEN instance in the reserved parameter Reserve. For more information about the configuration method, see [Reserve metric description](https://help.aliyun.com/document_detail/273111.html).
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
   * - **OTHER**: A self-managed database with a public IP address.
   * - **ECS**: A self-managed database hosted on an ECS instance.
   * - **EXPRESS**: A self-managed database connected over an Express Connect circuit.
   * - **CEN**: A self-managed database connected over a Cloud Enterprise Network (CEN) instance.
   * - **DG**: A self-managed database connected over a database gateway.
   * 
   * 
   * > - If the source instance is a PolarDB for PostgreSQL (Oracle-Compatible) cluster, set this parameter to **OTHER** or **EXPRESS**. The cluster is treated as a self-managed database and is connected by using a public IP address or an Express Connect circuit.
   * - For more information about the supported source and destination databases, see [Supported databases](https://help.aliyun.com/document_detail/131497.html).
   * - If the source instance is a self-managed database, you must also complete the corresponding preparations. For more information, see [Preparations overview](https://help.aliyun.com/document_detail/130607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  sourceEndpointInstanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * > This parameter is available and required only when **SourceEndpointEngineName** is set to **Oracle** and the **Oracle** database is a non-RAC instance.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the source instance belongs.
   * > Specifying this parameter indicates that you execute cross-Alibaba Cloud account data migration or synchronization. You must also specify the **SourceEndpointRole** parameter.
   * 
   * @example
   * 140692647406****
   */
  sourceEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the database account of the source database.
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
   * The area of the source instance. For details, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > This parameter is required if the source instance is an ApsaraDB database.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The name of the role configured for the Alibaba Cloud account to which the source instance belongs.
   * > This parameter is required when you migrate or synchronize data across Alibaba Cloud accounts. For more information about the permissions required for the role and the authorization method, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  sourceEndpointRole?: string;
  /**
   * @remarks
   * The database account of the source database.
   * > - In most cases, you must specify the database account of the source database.
   * - The permissions required for migrating or synchronizing data vary based on the database. For more information about the permission requirements, see [Prepare database accounts for data migration](https://help.aliyun.com/document_detail/175878.html) and [Prepare database accounts for data synchronization](https://help.aliyun.com/document_detail/213152.html).
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The instance ID of the vSwitch for the data delivery link.
   * 
   * @example
   * vsw-bp10df3mxae6lpmku****
   */
  sourceEndpointVSwitchID?: string;
  /**
   * @remarks
   * The path of the CA certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The password of the CA certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificatePassword?: string;
  /**
   * @remarks
   * The path of the client certificate when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientCertOssUrl?: string;
  /**
   * @remarks
   * The path of the client certificate private key when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the client certificate private key when the source database is connected over SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientPassword?: string;
  /**
   * @remarks
   * The primary vSwitch at the source end of the VPC NAT gateway.
   * 
   * @example
   * ****
   */
  srcPrimaryVswId?: string;
  /**
   * @remarks
   * The secondary vSwitch at the source end of the VPC NAT gateway.
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
   * > If **JobType** is set to **CHECK**, you can only set this parameter to **false**.
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
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
   * 
   * > - Default value: **Forward**.
   * - This parameter takes effect only when the synchronization topology of the synchronization task is two-way and this parameter is set to **Reverse**.
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

