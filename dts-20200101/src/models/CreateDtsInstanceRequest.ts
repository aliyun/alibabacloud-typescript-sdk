// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDtsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically renew the DTS instance when it expires. Valid values:
   * 
   * *   **false**: does not automatically renew the DTS instance when it expires. This is the default value.
   * *   **true**: automatically renews the DTS instance when it expires.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * >  This parameter can be set to **true** and take effect only if you specify a valid value for **JobId**.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * The specification of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
   * 
   * @example
   * 5
   */
  computeUnit?: number;
  /**
   * @remarks
   * The number of custom ApsaraDB RDS instances in the PolarDB-X instance. Default value: **1**.
   * 
   * >  This parameter is required only if **SourceEndpointEngineName** is set to **drds**.
   * 
   * @example
   * 3
   */
  databaseCount?: number;
  /**
   * @remarks
   * The database engine of the destination instance.
   * 
   * *   **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
   * *   **PolarDB**: PolarDB for MySQL cluster
   * *   **polardb_o**: PolarDB for Oracle cluster
   * *   **polardb_pg**: PolarDB for PostgreSQL cluster
   * *   **Redis**: ApsaraDB for Redis instance or self-managed Redis database
   * *   **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
   * *   **PostgreSQL**: self-managed PostgreSQL database
   * *   **odps**: MaxCompute project
   * *   **oracle**: self-managed Oracle database
   * *   **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
   * *   **tidb**: TiDB database
   * *   **ADS**: AnalyticDB for MySQL V2.0 cluster
   * *   **ADB30**: AnalyticDB for MySQL V3.0 cluster
   * *   **Greenplum**: AnalyticDB for PostgreSQL instance
   * *   **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
   * *   **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
   * *   **DataHub**: DataHub project
   * *   **DB2**: self-managed Db2 for LUW database
   * *   **as400**: AS/400
   * *   **Tablestore**: Tablestore instance
   * 
   * > 
   * *   The default value is **MySQL**.
   * *   For more information about the supported source and destination databases, see [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/130744.html) and [Overview of data migration scenarios](https://help.aliyun.com/document_detail/26618.html).
   * *   You must specify one of this parameter and the **JobId** parameter.
   * 
   * @example
   * MySQL
   */
  destinationEndpointEngineName?: string;
  /**
   * @remarks
   * The ID of the region in which the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  You must specify one of this parameter and the **JobId** parameter.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. Set this parameter to the value of **RegionId**.
   * 
   * @example
   * cn-hangzhou
   */
  dtsRegion?: string;
  /**
   * @remarks
   * The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
   * 
   * > 
   * *   The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
   * 
   * @example
   * 30
   */
  du?: number;
  /**
   * @remarks
   * The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE. ONLY_CONFIGURATION_FEE: charges only configuration fees. CONFIGURATION_FEE_AND_DATA_FEE: charges configuration fees and data traffic fees.
   * 
   * @example
   * ONLY_CONFIGURATION_FEE
   */
  feeType?: string;
  insightModule?: boolean;
  /**
   * @remarks
   * The instance class.
   * 
   * *   DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
   * *   DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
   * 
   * >  For more information about the test performance of each instance class, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * xxlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the task. You can call the **ConfigureDtsJob** operation to obtain the task ID from the **DtsJobId** parameter.
   * 
   * >  If this parameter is specified, you do not need to specify the **SourceRegion**, **DestinationRegion**, **Type**, **SourceEndpointEngineName**, or **DestinationEndpointEngineName** parameter. Even if these parameters are specified, the value of the **JobId** parameter takes precedence.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
  /**
   * @remarks
   * Upper limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * Lower limit of DU.
   * 
   * > Only supported by Serverless instances.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * >  This parameter must be specified.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values: **Year** and **Month**.
   * 
   * >  You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The number of DTS instances that you want to purchase.
   * 
   * >  You can purchase only one DTS instance each time you call this operation.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The database engine of the source instance.
   * 
   * *   **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
   * *   **PolarDB**: PolarDB for MySQL cluster
   * *   **polardb_o**: PolarDB for Oracle cluster
   * *   **polardb_pg**: PolarDB for PostgreSQL cluster
   * *   **Redis**: ApsaraDB for Redis instance or self-managed Redis database
   * *   **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
   * *   **PostgreSQL**: self-managed PostgreSQL database
   * *   **odps**: MaxCompute project
   * *   **oracle**: self-managed Oracle database
   * *   **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
   * *   **tidb**: TiDB database
   * *   **ADS**: AnalyticDB for MySQL V2.0 cluster
   * *   **ADB30**: AnalyticDB for MySQL V3.0 cluster
   * *   **Greenplum**: AnalyticDB for PostgreSQL instance
   * *   **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
   * *   **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
   * *   **DataHub**: DataHub project
   * *   **DB2**: self-managed Db2 for LUW database
   * *   **as400**: AS/400
   * *   **Tablestore**: Tablestore instance
   * 
   * > 
   * *   The default value is **MySQL**.
   * *   For more information about the supported source and destination databases, see [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/130744.html) and [Overview of data migration scenarios](https://help.aliyun.com/document_detail/26618.html).
   * *   You must specify one of this parameter and the **JobId** parameter.
   * 
   * @example
   * MYSQL
   */
  sourceEndpointEngineName?: string;
  /**
   * @remarks
   * The ID of the region in which the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  You must specify one of this parameter and the **JobId** parameter.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The synchronization topology. Valid values:
   * 
   * *   **oneway**: one-way synchronization. This is the default value.
   * *   **bidirectional**: two-way synchronization.
   * 
   * @example
   * oneway
   */
  syncArchitecture?: string;
  /**
   * @remarks
   * The type of the DTS instance. Valid values:
   * 
   * *   **MIGRATION**: data migration instance
   * 
   * *   **SYNC**: data synchronization instance
   * 
   * *   **SUBSCRIBE**: change tracking instance
   * 
   * > You must specify one of this parameter and the **JobId** parameter.
   * 
   * @example
   * SYNC
   */
  type?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   Valid values if **Period** is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   Valid values if **Period** is set to **Year**: 1, 2, 3, and 5.
   * 
   * > 
   * 
   * *   This parameter is valid and required only if **PayType** is set to **PrePaid**.
   * 
   * *   You can configure **Period** to specify the unit of the subscription duration.
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

