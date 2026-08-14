// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDtsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal upon expiration. Valid values:
   * - **false**: no. This is the default value.
   * - **true**: yes.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically start the task after the purchase is complete. Valid values:
   * - **false**: no. This is the default value.
   * - **true**: yes.
   * 
   * > This parameter takes effect only when **JobId** is set to a valid task ID and this parameter is set to **true**.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * The specifications of the ETL instance. Unit: compute unit (CU). 1 CU = 1 vCPU + 4 GB memory. Valid values: integers that are greater than or equal to 2.
   * <props="china">
   * > If you specify this parameter, the [ETL feature](https://help.aliyun.com/document_detail/212324.html) is enabled for data cleaning and transformation..
   * 
   * @example
   * 5
   */
  computeUnit?: number;
  /**
   * @remarks
   * The number of private custom ApsaraDB RDS instances under PolarDB-X. Default value: **1**.
   * > This parameter is required only when **SourceEndpointEngineName** is set to **drds**.
   * 
   * @example
   * 3
   */
  databaseCount?: number;
  /**
   * @remarks
   * The database engine type of the destination instance. Valid values:
   * - **MySQL**: MySQL database, including ApsaraDB RDS for MySQL and self-managed MySQL.
   * - **PolarDB**: PolarDB for MySQL.
   * - **polardb_o**: PolarDB for Oracle.
   * - **polardb_pg**: PolarDB for PostgreSQL.
   * - **Redis**: Redis database, including Tair (Redis® OSS-Compatible) and self-managed Redis.
   * - **DRDS**: cloud-native distributed database PolarDB-X 1.0 and 2.0.
   * - **PostgreSQL**: self-managed PostgreSQL.
   * - **odps**: MaxCompute.
   * - **oracle**: self-managed Oracle.
   * - **mongodb**: MongoDB database, including ApsaraDB for MongoDB and self-managed MongoDB.
   * - **tidb**: TiDB database.
   * - **ADS**: AnalyticDB for MySQL 2.0.
   * - **ADB30**: AnalyticDB for MySQL 3.0.
   * - **Greenplum**: AnalyticDB for PostgreSQL.
   * - **MSSQL**: SQL Server database, including ApsaraDB RDS for SQL Server and self-managed SQL Server.
   * - **kafka**: Kafka database, including ApsaraMQ for Kafka and self-managed Kafka.
   * - **DataHub**: Alibaba Cloud DataHub.
   * - **DB2**: self-managed Db2 for LUW.
   * - **as400**: AS/400.
   * - **Tablestore**: Tablestore.
   * 
   * > - Default value: **MySQL**.
   * - For more information about the supported source and destination database combinations, see [Databases, initial synchronization types, and synchronization topologies](https://help.aliyun.com/document_detail/130744.html) and [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * - You must specify this parameter or **JobId**.
   * 
   * @example
   * MySQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The region of the destination instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > You must specify this parameter or **JobId**.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The region to which the instance belongs. The value must be the same as the value of **RegionId**.
   * 
   * @example
   * cn-hangzhou
   */
  dtsRegion?: string;
  /**
   * @remarks
   * The number of DU resources to allocate to the DTS task on a DTS dedicated cluster. Valid values: **1** to **100**.
   * 
   * > - The value must be within the range of available DUs in the DTS dedicated cluster.
   * - For more information about DTS dedicated clusters, see [What is a DTS dedicated cluster](https://help.aliyun.com/document_detail/417481.html).
   * 
   * @example
   * 30
   */
  du?: number;
  /**
   * @remarks
   * The billing type for change tracking. Valid values: ONLY_CONFIGURATION_FEE, which indicates that only configuration fees are charged and data traffic fees are waived. CONFIGURATION_FEE_AND_DATA_FEE, which indicates that data traffic fees are additionally charged.
   * 
   * @example
   * ONLY_CONFIGURATION_FEE
   */
  feeType?: string;
  insightModule?: boolean;
  /**
   * @remarks
   * The specification of the data migration or data synchronization instance.
   * 
   * - Specifications supported by data migration instances: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
   * - Specifications supported by data synchronization instances: **large**, **medium**, **small**, and **micro**.
   * 
   * > For more information about the performance of each specification, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * xxlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The task ID (**DtsJobId**) obtained by calling the **ConfigureDtsJob** operation.
   * > If you specify this parameter, you do not need to specify **SourceRegion**, **DestinationRegion**, **Type**, **SourceEndpointEngineName**, or **DestinationEndpointEngineName**. Even if you specify these parameters, the configurations in **JobId** take precedence.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
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
  /**
   * @remarks
   * The billing method. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * > Correction: This parameter is required.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing method of the subscription instance. Valid values: **Year** and **Month**.
   * > This parameter is valid and required only when **PayType** is set to **PrePaid** (subscription).
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The number of instances to purchase.
   * > A maximum of one instance can be purchased per call.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID of the instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The database engine type of the source instance. Valid values:
   * - **MySQL**: MySQL database, including ApsaraDB RDS for MySQL and self-managed MySQL.
   * - **PolarDB**: PolarDB for MySQL.
   * - **polardb_o**: PolarDB for Oracle.
   * - **polardb_pg**: PolarDB for PostgreSQL.
   * - **Redis**: Redis database, including Tair (Redis® OSS-Compatible) and self-managed Redis.
   * - **DRDS**: cloud-native distributed database PolarDB-X 1.0 and 2.0.
   * - **PostgreSQL**: self-managed PostgreSQL.
   * - **odps**: MaxCompute.
   * - **oracle**: self-managed Oracle.
   * - **mongodb**: MongoDB database, including ApsaraDB for MongoDB and self-managed MongoDB.
   * - **tidb**: TiDB database.
   * - **ADS**: AnalyticDB for MySQL 2.0.
   * - **ADB30**: AnalyticDB for MySQL 3.0.
   * - **Greenplum**: AnalyticDB for PostgreSQL.
   * - **MSSQL**: SQL Server database, including ApsaraDB RDS for SQL Server and self-managed SQL Server.
   * - **kafka**: Kafka database, including ApsaraMQ for Kafka and self-managed Kafka.
   * - **DataHub**: Alibaba Cloud DataHub.
   * - **DB2**: self-managed Db2 for LUW.
   * - **as400**: AS/400.
   * - **Tablestore**: Tablestore.
   * - **OceanBase**: OceanBase (MySQL). Only data migration instances are supported.
   * 
   * > - Default value: **MySQL**.
   * - For more information about the supported source and destination database combinations, see [Databases, initial synchronization types, and synchronization topologies](https://help.aliyun.com/document_detail/130744.html) and [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * - You must specify this parameter or **JobId**.
   * 
   * @example
   * MySQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The region of the source instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > You must specify this parameter or **JobId**.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The synchronization topology. Valid values:
   * 
   * - **oneway**: one-way synchronization. This is the default value.
   * - **bidirectional**: two-way synchronization.
   * 
   * @example
   * oneway
   */
  syncArchitecture?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **MIGRATION**: data migration.
   * - **SYNC**: data synchronization.
   * - **SUBSCRIBE**: change tracking.
   * > You must specify this parameter or **JobId**.
   * 
   * @example
   * SYNC
   */
  type?: string;
  /**
   * @remarks
   * The subscription duration of the subscription instance.
   * - If **Period** is set to **Month**, valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * - If **Period** is set to **Year**, valid values are 1, 2, 3, and 5.
   * > - This parameter is valid and required only when **PayType** is set to **PrePaid** (subscription).
   * - You can set the billing method of the subscription instance by using the **Period** parameter.
   * 
   * @example
   * 5
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoStart: 'AutoStart',
      computeUnit: 'ComputeUnit',
      databaseCount: 'DatabaseCount',
      destinationEndpointEngineName: 'DestinationEndpointEngineName',
      destinationRegion: 'DestinationRegion',
      dtsRegion: 'DtsRegion',
      du: 'Du',
      feeType: 'FeeType',
      insightModule: 'InsightModule',
      instanceClass: 'InstanceClass',
      jobId: 'JobId',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      payType: 'PayType',
      period: 'Period',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointEngineName: 'SourceEndpointEngineName',
      sourceRegion: 'SourceRegion',
      syncArchitecture: 'SyncArchitecture',
      type: 'Type',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoStart: 'boolean',
      computeUnit: 'number',
      databaseCount: 'number',
      destinationEndpointEngineName: 'string',
      destinationRegion: 'string',
      dtsRegion: 'string',
      du: 'number',
      feeType: 'string',
      insightModule: 'boolean',
      instanceClass: 'string',
      jobId: 'string',
      maxDu: 'number',
      minDu: 'number',
      payType: 'string',
      period: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceEndpointEngineName: 'string',
      sourceRegion: 'string',
      syncArchitecture: 'string',
      type: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

