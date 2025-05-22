// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ConfigureDtsJobAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The start offset of incremental data migration or incremental data synchronization. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1610540493
   */
  checkpoint?: string;
  /**
   * @remarks
   * The parameters for data verification, including the configurations for data verification and alerts. The value is a JSON string. For more information, see [DataCheckConfigure parameter description](https://help.aliyun.com/document_detail/459023.html).
   * 
   * @example
   * {"fullCheckModel":1,"fullCheckRatio":20,"checkMaximumHourEnable":1,"checkMaximumHour":1,"fullCheckErrorNotice":true,"fullCheckValidFailNotice":true,"fullCheckNoticeValue":8,"incrementalCheckErrorNotice":true,"incrementalCheckValidFailNotice":true,"incrementalCheckValidFailNoticeTimes":2,"incrementalCheckValidFailNoticePeriod":1,"incrementalCheckValidFailNoticeValue":1,"incrementalCheckDelayNotice":true,"incrementalCheckDelayNoticeTimes":2,"incrementalCheckDelayNoticePeriod":1,"incrementalCheckDelayNoticeValue":60,"fullDataCheck":true,"incrementalDataCheck":true,"dataCheckNoticePhone":"13126800****","dataCheckDbList":{"dts":{"name":"dts","all":true}}}
   */
  dataCheckConfigure?: string;
  /**
   * @remarks
   * Specifies whether to perform full data migration or full data synchronization. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > If **JobType** is set to **CHECK**, set this parameter to **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Specifies whether to perform incremental data migration or incremental data synchronization. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * > If **JobType** is set to **CHECK**, set this parameter to **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * The objects that you want to migrate or synchronize. The value is a JSON string. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {"dtstest":{"name":"dtstest","all":true}}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the DTS dedicated cluster on which the task runs.
   * 
   * > If this parameter is specified, the task is scheduled to the specified DTS dedicated cluster.
   * 
   * @example
   * dtscluster_atyl3b5214uk***
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * Specifies whether to monitor task latency. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  delayNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers to which latency-related alerts are sent. Separate multiple mobile phone numbers with commas (,).
   * 
   * > 
   * 
   * *   This parameter is available only for users of the China site (aliyun.com). Only mobile phone numbers in the Chinese mainland are supported. You can specify up to 10 mobile phone numbers.
   * *   Users of the international site (alibabacloud.com) cannot receive alerts by using mobile phone numbers, but can configure alert rules for DTS tasks in the CloudMonitor console. For more information, see [Configure alert rules for DTS tasks in the CloudMonitor console](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayPhone?: string;
  /**
   * @remarks
   * The threshold for latency alerts. Unit: seconds. The value must be an integer. You can set the threshold based on your business requirements. To prevent unstable latency caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
   * 
   * > If **DelayNotice** is set to **true**, this parameter is required.
   * 
   * @example
   * 10
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The path of the CA certificate that is used if the connection to the destination database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The key of the CA certificate that is used if the connection to the destination database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destCaCertificatePassword?: string;
  /**
   * @remarks
   * The path to the client certificate that is used if the connection to the destination database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientCertOssUrl?: string;
  /**
   * @remarks
   * The path to the private key of the client certificate that is used if the connection to the destination database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the private key of the client certificate that is used if the connection to the destination database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  destClientPassword?: string;
  /**
   * @remarks
   * VPCNAT destination main VSW
   * 
   * @example
   * ****
   */
  destPrimaryVswId?: string;
  /**
   * @remarks
   * VPCNAT destination backup VSW
   * 
   * @example
   * ****
   */
  destSecondaryVswId?: string;
  /**
   * @remarks
   * The name of the database to which the objects are migrated or synchronized in the destination instance.
   * 
   * > 
   * 
   * *   This parameter is valid and required only if the destination database is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, an AnalyticDB for PostgreSQL instance, a PostgreSQL database, a MaxCompute project, or a MongoDB database.
   * *   If the destination instance is a MaxCompute project, you must specify the MaxCompute project ID.
   * 
   * @example
   * dtstestdata
   */
  destinationEndpointDataBaseName?: string;
  /**
   * @remarks
   * The type of the destination database. Valid values:
   * 
   * *   **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
   * *   **MARIADB**: ApsaraDB RDS for MariaDB instance.
   * *   **PolarDB**: PolarDB for MySQL cluster.
   * *   **POLARDB_O**: PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * *   **POLARDBX10**: PolarDB-X 1.0 instance (formerly DRDS).
   * *   **POLARDBX20**: PolarDB-X 2.0 instance.
   * *   **ORACLE**: self-managed Oracle database.
   * *   **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database.
   * *   **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database.
   * *   **ADS**: AnalyticDB for MySQL V2.0 cluster.
   * *   **ADB30**: AnalyticDB for MySQL V3.0 cluster.
   * *   **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database.
   * *   **GREENPLUM**: AnalyticDB for PostgreSQL instance.
   * *   **KAFKA**: ApsaraMQ for Kafka instance or self-managed Kafka cluster.
   * *   **DATAHUB**: DataHub project.
   * *   **DB2**: self-managed Db2 for LUW database.
   * *   **AS400**: Db2 for i database.
   * *   **ODPS**: MaxCompute project.
   * *   **Tablestore**: Tablestore instance.
   * *   **ELK**: Elasticsearch cluster.
   * *   **REDIS**: ApsaraDB for Redis instance or self-managed Redis database.
   * 
   * > 
   * 
   * *   Default value: **MYSQL**.
   * *   If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in Reserve. For more information, see [Reserve parameter](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * MYSQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The IP address of the destination instance.
   * 
   * > This parameter is valid and required only if **DestinationEndpointInstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
   * 
   * @example
   * ``172.16.**.**``*
   */
  destinationEndpointIP?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * If the destination instance is an Alibaba Cloud database instance, you must specify the database instance ID. For example, if the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
   * 
   * If the destination instance is a self-managed database, the value of this parameter varies with the value of **DestinationEndpointInstanceType**.****
   * 
   * *   If DestinationEndpointInstanceType is set to **ECS**, you must specify the ECS instance ID.
   * *   If DestinationEndpointInstanceType is set to **DG**, you must specify the database gateway ID.
   * *   If DestinationEndpointInstanceType is set to **EXPRESS** or **CEN**, you must specify the ID of the VPC that is connected to the source instance.
   * 
   * > If DestinationEndpointInstanceType is set to **CEN**, you must also specify the ID of the CEN instance in Reserve. For more information, see [Reserve parameter](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * vpc-bp1opxu1zkhn00gzv****
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the destination instance. Valid values:
   * 
   * **Alibaba Cloud database instance**
   * 
   * *   **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB instance.
   * *   **PolarDB**: PolarDB for MySQL cluster.
   * *   **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 instance (formerly DRDS).
   * *   **POLARDBX20**: PolarDB-X 2.0 instance.
   * *   **REDIS**: ApsaraDB for Redis instance.
   * *   **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster.
   * *   **MONGODB**: ApsaraDB for MongoDB instance.
   * *   **GREENPLUM**: AnalyticDB for PostgreSQL instance.
   * *   **DATAHUB**: DataHub project.
   * *   **ELK**: Elasticsearch cluster.
   * *   **Tablestore**: Tablestore instance.
   * *   **ODPS**: MaxCompute project.
   * 
   * **Self-managed database**
   * 
   * *   **OTHER**: self-managed database with a public IP address.
   * *   **ECS**: self-managed database hosted on an ECS instance.
   * *   **EXPRESS**: self-managed database connected over Express Connect.
   * *   **CEN**: self-managed database connected over Cloud Enterprise Network (CEN).
   * *   **DG**: self-managed database connected over Database Gateway.
   * 
   * > 
   * 
   * *   If the destination instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you must connect the cluster to DTS as a self-managed database by using a public IP address or Express Connect and set this parameter to **OTHER** or **EXPRESS**.
   * *   If the destination instance is an ApsaraMQ for Kafka instance, you must connect the instance to DTS as a self-managed database by using ECS or Express Connect and set this parameter to **ECS** or **EXPRESS**.
   * *   For more information, see [Supported source and destination databases](https://help.aliyun.com/document_detail/176064.html).
   * *   If the destination instance is a self-managed database, you must deploy the network environment for the database. For more information, see [Preparation overview](https://help.aliyun.com/document_detail/146958.html).
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
   * 
   * > This parameter is valid and required only if **DestinationEndpointEngineName** is set to **ORACLE** and the **Oracle** database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the destination ApsaraDB RDS for MySQL instance belongs.
   * 
   * > 
   * 
   * *   This parameter is available only if the destination instance is an ApsaraDB RDS for MySQL instance.
   * *   You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **DestinationEndpointRole**.
   * 
   * @example
   * 140692647406****
   */
  destinationEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the destination database.
   * 
   * > If the destination database is a MaxCompute project, you must specify the AccessKey secret of your Alibaba Cloud account. For information about how to obtain an AccessKey pair, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * @example
   * Test123456
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The port number of the destination instance.
   * 
   * > This parameter is valid and required only if the destination instance is a self-managed database.
   * 
   * @example
   * 3306
   */
  destinationEndpointPort?: string;
  /**
   * @remarks
   * The ID of the region in which the destination instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * > If the destination instance is an Alibaba Cloud database instance, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.
   * 
   * > This parameter is required if you migrate or synchronize data across Alibaba Cloud accounts. For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account DTS tasks](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  destinationEndpointRole?: string;
  /**
   * @remarks
   * The username of the account that is used to log on to the destination database.
   * 
   * > 
   * 
   * *   In most cases, this parameter is required.
   * *   The permissions that are required for the database account vary with the migration or synchronization scenario. For more information, see [Prepare the database accounts for data migration](https://help.aliyun.com/document_detail/175878.html) or [Prepare the database accounts for data synchronization](https://help.aliyun.com/document_detail/213152.html).
   * *   If the destination database is a MaxCompute project, you must specify the AccessKey ID of your Alibaba Cloud account. For information about how to obtain an AccessKey pair, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * @example
   * dtstest
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * Specifies whether the instance is a disaster recovery instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  disasterRecoveryJob?: boolean;
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
   * The ID of the data migration or synchronization instance.
   * 
   * > You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * @example
   * dtsk2gm967v16f****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
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
   * Specifies whether to monitor task status. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  errorNotice?: boolean;
  /**
   * @remarks
   * The mobile phone numbers to which status-related alerts are sent. Separate multiple mobile phone numbers with commas (,).
   * 
   * > 
   * 
   * *   This parameter is available only for users of the China site (aliyun.com). Only mobile phone numbers in the Chinese mainland are supported. You can specify up to 10 mobile phone numbers.
   * *   Users of the international site (alibabacloud.com) cannot receive alerts by using mobile phone numbers, but can configure alert rules for DTS tasks in the CloudMonitor console. For more information, see [Configure alert rules for DTS tasks in the CloudMonitor console](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorPhone?: string;
  /**
   * @remarks
   * The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
   * 
   * @example
   * http://db-list-os-file.oss-cn-shanghai.aliyuncs.com/8e42_121852**********_79dd3aeabe2f43cdb**************
   */
  fileOssUrlObject?: Readable;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **MIGRATION**: data migration task.
   * *   **SYNC**: data synchronization task.
   * *   **CHECK**: data verification task. You must separately purchase a data verification instance.
   * 
   * > If you set this parameter to **MIGRATION** or **SYNC**, you can also enable data verification in the data migration or synchronization task.
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
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the CEN instance ID. For more information, see [Reserve parameter](https://help.aliyun.com/document_detail/273111.html).
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
   * The name of the database from which the objects are migrated or synchronized in the source instance.
   * 
   * > This parameter is valid and required only if the source instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, a PostgreSQL database, or a MongoDB database.
   * 
   * @example
   * dtstestdatabase
   */
  sourceEndpointDatabaseName?: string;
  /**
   * @remarks
   * The database type of the source instance.
   * 
   * *   **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
   * *   **MARIADB**: ApsaraDB RDS for MariaDB instance.
   * *   **PolarDB**: PolarDB for MySQL cluster.
   * *   **POLARDB_O**: PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * *   **POLARDBX10**: PolarDB-X 1.0 instance (formerly DRDS).
   * *   **POLARDBX20**: PolarDB-X 2.0 instance.
   * *   **ORACLE**: self-managed Oracle database.
   * *   **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database.
   * *   **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database.
   * *   **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database.
   * *   **DB2**: self-managed Db2 for LUW database.
   * *   **AS400**: self-managed Db2 for i database.
   * *   **DMSPOLARDB**: DMS logical database.
   * *   **HBASE**: self-managed HBase database.
   * *   **TERADATA**: Teradata database.
   * *   **TiDB**: TiDB database.
   * *   **REDIS**: ApsaraDB for Redis instance or self-managed Redis database.
   * 
   * > 
   * 
   * *   Default value: **MYSQL**.
   * *   If this parameter is set to **MONGODB**, you must also specify the architecture type of the MongoDB database in Reserve. For more information, see [Reserve parameter](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * MYSQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The IP address of the source instance.
   * 
   * > This parameter is valid and required only if **SourceEndpointInstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
   * 
   * @example
   * ``172.16.**.**``*
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * If the source instance is an Alibaba Cloud database instance, you must specify the database instance ID. For example, if the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
   * 
   * If the source instance is a self-managed database, the value of this parameter varies with the value of **SourceEndpointInstanceType**.****
   * 
   * *   If SourceEndpointInstanceType is set to **ECS**, you must specify the ECS instance ID.
   * *   If SourceEndpointInstanceType is set to **DG**, you must specify the database gateway ID.
   * *   If SourceEndpointInstanceType is set to **EXPRESS** or **CEN**, you must specify the ID of the virtual private cloud (VPC) that is connected to the source instance.
   * 
   * > If SourceEndpointInstanceType is set to **CEN**, you must also specify the ID of the CEN instance in Reserve. For more information, see [Reserve parameter](https://help.aliyun.com/document_detail/273111.html).
   * 
   * @example
   * rm-bp1imrtn6fq7h****
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * **Alibaba Cloud database instance**
   * 
   * *   **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB instance
   * *   **PolarDB**: PolarDB for MySQL cluster.
   * *   **REDIS**: ApsaraDB for Redis instance.
   * *   **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 instance (formerly DRDS).
   * *   **POLARDBX20**: PolarDB-X 2.0 instance.
   * *   **MONGODB**: ApsaraDB for MongoDB instance.
   * *   **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
   * 
   * **Self-managed database**
   * 
   * *   **OTHER**: self-managed database with a public IP address.
   * *   **ECS**: self-managed database hosted on an ECS instance.
   * *   **EXPRESS**: self-managed database connected over Express Connect.
   * *   **CEN**: self-managed database connected over Cloud Enterprise Network (CEN).
   * *   **DG**: self-managed database connected over Database Gateway.
   * 
   * > 
   * 
   * *   If the source instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, you must connect the cluster to DTS as a self-managed database by using a public IP address or Express Connect and set this parameter to **OTHER** or **EXPRESS**.
   * *   For more information, see [Supported sources and targets](https://help.aliyun.com/document_detail/176064.html).
   * *   If the source instance is a self-managed database, you must deploy the network environment for the database. For more information, see [Preparation overview](https://help.aliyun.com/document_detail/146958.html).
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
   * 
   * > This parameter is valid and required only if **SourceEndpointEngineName** is set to **ORACLE** and the **Oracle** database is deployed in a non-Real Application Cluster (RAC) architecture.
   * 
   * @example
   * testsid
   */
  sourceEndpointOracleSID?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source database belongs.
   * 
   * > You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **SourceEndpointRole**.
   * 
   * @example
   * 140692647406****
   */
  sourceEndpointOwnerID?: string;
  /**
   * @remarks
   * The password of the account that is used to log on to the source database.
   * 
   * @example
   * Test123456
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The port number of the source instance.
   * 
   * > This parameter is required only if the source instance is a self-managed database.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * > If the source instance is an Alibaba Cloud database instance, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account to which the source instance belongs.
   * 
   * > This parameter is required if you migrate or synchronize data across different Alibaba Cloud accounts. For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account DTS tasks](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  sourceEndpointRole?: string;
  /**
   * @remarks
   * The username of the account that is used to log on to the source database.
   * 
   * > 
   * 
   * *   In most cases, this parameter is required.
   * *   The permissions that are required for the database account vary with the migration or synchronization scenario. For more information, see [Prepare the database accounts for data migration](https://help.aliyun.com/document_detail/175878.html) or [Prepare the database accounts for data synchronization](https://help.aliyun.com/document_detail/213152.html).
   * 
   * @example
   * dtstest
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is used for data shipping.
   * 
   * @example
   * vsw-bp10df3mxae6lpmku****
   */
  sourceEndpointVSwitchID?: string;
  /**
   * @remarks
   * The path of the certificate authority (CA) certificate that is used if the connection to the source database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificateOssUrl?: string;
  /**
   * @remarks
   * The key of the CA certificate that is used if the connection to the source database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcCaCertificatePassword?: string;
  /**
   * @remarks
   * The path to the client certificate that is used if the connection to the source database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientCertOssUrl?: string;
  /**
   * @remarks
   * The path to the private key of the client certificate that is used if the connection to the source database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientKeyOssUrl?: string;
  /**
   * @remarks
   * The password of the private key of the client certificate that is used if the connection to the source database is encrypted by using SSL.
   * 
   * > This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * ****
   */
  srcClientPassword?: string;
  /**
   * @remarks
   * VPCNAT source end main VSW
   * 
   * @example
   * ****
   */
  srcPrimaryVswId?: string;
  /**
   * @remarks
   * VPCNAT source backup VSW
   * 
   * @example
   * ****
   */
  srcSecondaryVswId?: string;
  /**
   * @remarks
   * Specifies whether to perform schema migration or schema synchronization. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * > If **JobType** is set to **CHECK**, set this parameter to **false**.
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
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization task is two-way synchronization.
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
      fileOssUrlObject: 'FileOssUrl',
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
      fileOssUrlObject: 'Readable',
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

