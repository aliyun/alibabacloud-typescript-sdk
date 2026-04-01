// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   Regular instance
   * 
   *     *   **Basic**: RDS Basic Edition
   *     *   **HighAvailability**: RDS High-availability Edition
   *     *   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL
   *     *   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
   *     *   **Finance**: RDS Enterprise Edition
   * 
   * *   Serverless instance
   * 
   *     *   **serverless_basic**: RDS Basic Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
   *     *   **serverless_standard**: RDS High-availability Edition for ApsaraDB RDS for MySQL.
   *     *   **serverless_ha**: RDS High-availability Edition for ApsaraDB RDS for SQL Server.
   * 
   *     > If you create a serverless instance, you must specify this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The commodity code of the instance. Valid values:
   * 
   * *   **bards**: The instance is a pay-as-you-go primary instance. This value is available at the China site (aliyun.com).
   * *   **rds**: The instance is a subscription primary instance. This value is available at the China site (aliyun.com).
   * *   **rords**: The instance is a pay-as-you-go read-only instance. This value is available at the China site (aliyun.com).
   * *   **rds_rordspre_public_cn**: The instance is a subscription read-only instance. This value is available at the China site (aliyun.com).
   * *   **bards_intl**: The instance is a pay-as-you-go primary instance. This value is available at the International site (alibabacloud.com).
   * *   **rds_intl**: The instance is a subscription primary instance. This value is available at the International site (alibabacloud.com).
   * *   **rords_intl**: The instance is a pay-as-you-go read-only instance. This value is available at the International site (alibabacloud.com).
   * *   **rds_rordspre_public_intl**: The instance is a subscription read-only instance. This value is available at the International site (alibabacloud.com).
   * *   **rds_serverless_public_cn**: The instance is a serverless instance. This value is available at the China site (aliyun.com).
   * *   **rds_serverless_public_intl**: The instance is a serverless instance. This value is available at the International site (alibabacloud.com).
   * 
   * > If you want to query the price of a read-only instance, you must specify this parameter.
   * 
   * @example
   * bards
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd**: local SSD. This is the recommended storage type.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_essd**: performance level 1 (PL1) Enterprise SSD (ESSD)
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * 
   * >  Serverless instances use only PL1 ESSDs. If you want to create a serverless instance, you must set this parameter to **cloud_essd**.
   * 
   * This parameter is required.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The database engine that is run by the instance. Valid values:
   * 
   * * **MySQL**
   * * **SQLServer**
   * * **PostgreSQL**
   * * **MariaDB**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   Regular instance
   * 
   *     *   Valid values if you set Engine to MySQL: **5.5, 5.6, 5.7, and 8.0**
   *     *   Valid values if you set Engine to SQLServer: **2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent**
   *     *   Valid values if you set Engine to PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**
   *     *   Valid value when you set Engine to MariaDB: **10.3**
   * 
   * *   Serverless instance
   * 
   *     *   Valid values if you set Engine to MySQL: **5.7** and **8.0**
   *     *   Valid values if you set Engine to SQLServer: **2016_std_sl**, **2017_std_sl**, and **2019_std_sl**
   *     *   Valid value if you set Engine to PostgreSQL: **14.0**
   * 
   *     > ApsaraDB RDS for MariaDB does not support serverless instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Prepaid**: subscription
   * *   **Postpaid**: pay-as-you-go
   * *   **Serverless**: serverless
   * 
   * > ApsaraDB RDS for MariaDB does not support serverless instances.
   * 
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The type of order. Set the value to **BUY**
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeDBInstanceAttribute operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID of the instance. You can call the DescribeDBInstanceAttribute operation to query the zone ID of the instance.
   * 
   * >  If the DescribeDBInstanceAttribute operation returns multiple zones, you must specify only one of the returned zones. For example, if the DescribeDBInstanceAttribute operation returns `cn-hangzhou-MAZ9(g,h)`, you can set this parameter to `cn-hangzhou-g` or `cn-hangzhou-h`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorageType: 'DBInstanceStorageType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceChargeType: 'InstanceChargeType',
      orderType: 'OrderType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      DBInstanceId: 'string',
      DBInstanceStorageType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceChargeType: 'string',
      orderType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

