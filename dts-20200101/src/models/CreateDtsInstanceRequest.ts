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
   * Specifies whether to automatically start the task after the purchase is completed. Valid values:
   * - **false**: no. This is the default value.
   * - **true**: yes.
   * 
   * > This parameter takes effect only when a valid task ID is specified for the **JobId** parameter and this parameter is set to **true**.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * The specifications of the ETL node. Unit: compute unit (CU). 1 CU equals 1 vCPU and 4 GB of memory. The value must be an integer greater than or equal to 2.
   * <props="china">
   * > If you specify this parameter, the [ETL feature](https://help.aliyun.com/document_detail/212324.html) is enabled to perform data cleaning and transformation.
   * 
   * @example
   * 5
   */
  computeUnit?: number;
  /**
   * @remarks
   * The number of private custom ApsaraDB RDS instances in PolarDB-X. Default value: **1**.
   * > This parameter is required only when the **SourceEndpointEngineName** parameter is set to **drds**.
   * 
   * @example
   * 3
   */
  databaseCount?: number;
  /**
   * @remarks
   * The database engine type of the destination instance. Valid values:
   * - **MySQL**: MySQL database, including ApsaraDB RDS for MySQL and self-managed MySQL databases.
   * - **PolarDB**: PolarDB for MySQL.
   * - **polardb_o**: PolarDB O DPI engine.
   * - **polardb_pg**: PolarDB for PostgreSQL.
   * - **Redis**: Redis database, including Tair (Redis OSS-Compatible) and self-managed Redis databases.
   * - **DRDS**: cloud-native distributed database PolarDB-X 1.0 and 2.0.
   * - **PostgreSQL**: self-managed PostgreSQL database.
   * - **odps**: MaxCompute.
   * - **oracle**: self-managed Oracle database.
   * - **mongodb**: MongoDB database, including ApsaraDB for MongoDB and self-managed MongoDB databases.
   * - **tidb**: TiDB database.
   * - **ADS**: cloud-native data warehouse AnalyticDB MySQL 2.0.
   * - **ADB30**: cloud-native data warehouse AnalyticDB MySQL 3.0.
   * - **Greenplum**: cloud-native data warehouse AnalyticDB PostgreSQL.
   * - **MSSQL**: SQL Server database, including ApsaraDB RDS for SQL Server and self-managed SQL Server databases.
   * - **kafka**: Kafka database, including MSMQ Kafka Edition and self-managed Kafka clusters.
   * - **DataHub**: DataHub.
   * - **DB2**: self-managed Db2 for LUW database.
   * - **as400**: AS/400.
   * - **Tablestore**: Tablestore.
   * 
   * > - Default value: **MySQL**.
   * - For more information about the supported source and destination databases, see [Supported databases, initial synchronization types, and synchronization topology](https://help.aliyun.com/document_detail/130744.html) and [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * - You must specify this parameter or the **JobId** parameter.
   * 
   * @example
   * MySQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The region of the destination instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > You must specify this parameter or the **JobId** parameter.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The region to which the instance belongs. The value must be the same as the value of the **RegionId** parameter.
   * 
   * @example
   * cn-hangzhou
   */
  dtsRegion?: string;
  /**
   * @remarks
   * The number of DUs allocated to the DTS task in the dedicated DTS cluster. Valid values: **1** to **100**.
   * 
   * >- The specified value must not exceed the number of available DUs in the dedicated DTS cluster.
   * - For more information about dedicated DTS clusters, see [What is a dedicated DTS cluster?](https://help.aliyun.com/document_detail/417481.html).
   * 
   * @example
   * 30
   */
  du?: number;
  /**
   * @remarks
   * The billing type for change tracking. Valid values:
   * - **ONLY_CONFIGURATION_FEE**: Only configuration fees are charged, and data traffic fees are waived.
   * - **CONFIGURATION_FEE_AND_DATA_FEE**: Data traffic fees are charged in addition to configuration fees.
   * 
   * @example
   * ONLY_CONFIGURATION_FEE
   */
  feeType?: string;
  insightModule?: boolean;
  /**
   * @remarks
   * The specifications of the data migration or data synchronization instance.
   * 
   * - Valid values for data migration instances: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
   * - Valid values for data synchronization instances: **large**, **medium**, **small**, and **micro**.
   * 
   * > For more information about the performance of different specifications, see [Specifications of data migration links](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * xxlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The task ID (**DtsJobId**) returned by the **ConfigureDtsJob** operation.
   * > If you specify this parameter, you do not need to specify the **SourceRegion**, **DestinationRegion**, **Type**, **SourceEndpointEngineName**, or **DestinationEndpointEngineName** parameters. Even if you specify them, the configurations in the **JobId** parameter prevail.
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
   * > Note: This parameter is required.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing method for a subscription instance. Valid values: **Year** and **Month**.
   * > This parameter is valid and required only when the **PayType** parameter is set to **PrePaid** (upfront).
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The number of instances that you want to purchase.
   * > You can purchase only one instance in a single call.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region of the instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The database engine type of the source instance. Valid values:
   * - **MySQL**: MySQL database, including ApsaraDB RDS for MySQL and self-managed MySQL databases.
   * - **PolarDB**: PolarDB for MySQL.
   * - **polardb_o**: PolarDB O DPI engine.
   * - **polardb_pg**: PolarDB for PostgreSQL.
   * - **Redis**: Redis database, including Tair (Redis OSS-Compatible) and self-managed Redis databases.
   * - **DRDS**: cloud-native distributed database PolarDB-X 1.0 and 2.0.
   * - **PostgreSQL**: self-managed PostgreSQL database.
   * - **odps**: MaxCompute.
   * - **oracle**: self-managed Oracle database.
   * - **mongodb**: MongoDB database, including ApsaraDB for MongoDB and self-managed MongoDB databases.
   * - **tidb**: TiDB database.
   * - **ADS**: cloud-native data warehouse AnalyticDB MySQL 2.0.
   * - **ADB30**: cloud-native data warehouse AnalyticDB MySQL 3.0.
   * - **Greenplum**: cloud-native data warehouse AnalyticDB PostgreSQL.
   * - **MSSQL**: SQL Server database, including ApsaraDB RDS for SQL Server and self-managed SQL Server databases.
   * - **kafka**: Kafka database, including MSMQ Kafka Edition and self-managed Kafka clusters.
   * - **DataHub**: DataHub.
   * - **DB2**: self-managed Db2 for LUW database.
   * - **as400**: AS/400.
   * - **Tablestore**: Tablestore.
   * - **OceanBase**: OceanBase (MySQL mode). Only data migration instances are supported.
   * 
   * > - Default value: **MySQL**.
   * - For more information about the supported source and destination databases, see [Supported databases, initial synchronization types, and synchronization topology](https://help.aliyun.com/document_detail/130744.html) and [Supported databases and migration types](https://help.aliyun.com/document_detail/26618.html).
   * - You must specify this parameter or the **JobId** parameter.
   * 
   * @example
   * MySQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The region of the source instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > You must specify this parameter or the **JobId** parameter.
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
   * > You must specify this parameter or the **JobId** parameter.
   * 
   * @example
   * SYNC
   */
  type?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * - Valid values when the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * - Valid values when the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
   * > - This parameter is valid and required only when the **PayType** parameter is set to **PrePaid** (upfront).
   * - You can specify the billing method for the subscription instance in the **Period** parameter.
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

