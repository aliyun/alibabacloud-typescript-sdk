// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * * Regular instances
   *     * **Basic**: Basic Edition
   *     * **HighAvailability**: high availability series
   *     * **cluster**: Cluster Edition (only applicable to MySQL and PostgreSQL)
   *     * **AlwaysOn**: AlwaysOn
   *     * **Finance**: RDS Enterprise Edition
   * * Serverless instances
   *     * **serverless_basic**: Serverless Basic Edition (only applicable to MySQL and PostgreSQL)
   *     * **serverless_standard**: Serverless high availability series (only applicable to MySQL and PostgreSQL)
   *     * **serverless_ha**: SQL Server Serverless high availability series
   * 
   *     > This parameter is required when you create a serverless instance.
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
   * - **bards**: pay-as-you-go primary instances on the China site
   * - **rds**: subscription primary instances on the China site
   * - **rords**: pay-as-you-go read-only instances on the China site
   * - **rds_rordspre_public_cn**: subscription read-only instances on the China site
   * - **bards_intl**: pay-as-you-go primary instances on the international site
   * - **rds_intl**: subscription primary instances on the international site
   * - **rords_intl**: pay-as-you-go read-only instances on the international site
   * - **rds_rordspre_public_intl**: subscription read-only instances on the international site
   * - **rds_serverless_public_cn**: serverless instances on the China site
   * - **rds_serverless_public_intl**: serverless instances on the international site
   * 
   * > This parameter is required when you query read-only instances.
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
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * * **general_essd**: Premium ESSD
   * * **local_ssd**: premium local SSD
   * * **cloud_ssd**: standard SSD
   * * **cloud_essd0**: PL0 ESSD
   * * **cloud_essd**: PL1 ESSD
   * * **cloud_essd2**: PL2 ESSD
   * * **cloud_essd3**: PL3 ESSD
   * 
   * > Serverless instances support only PL1 ESSDs. You must set this parameter to **cloud_essd**.
   * 
   * This parameter is required.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
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
   * - Regular instances
   *     - MySQL: **5.5, 5.6, 5.7, and 8.0**
   *     - SQL Server: **2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent**
   *     - PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, and 17.0**
   *     - MariaDB: **10.3**
   * - Serverless instances
   *     - MySQL: **5.7** and **8.0**
   *     - SQL Server: **2016_std_sl**, **2017_std_sl**, and **2019_std_sl**
   *     - PostgreSQL: **14.0, 15.0, 16.0, and 17.0**
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
   * * **Prepaid**: subscription
   * * **Postpaid**: pay-as-you-go
   * * **Serverless**: serverless
   * 
   * > ApsaraDB RDS for MariaDB does not support serverless instances.
   * 
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The order type. Set the value to **BUY**.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeDBInstanceAttribute operation to query the region ID.
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
   * The zone ID of the instance. You can call the DescribeDBInstanceAttribute operation to query the zone ID.
   * > If the DescribeDBInstanceAttribute operation returns multiple zones (for example, `cn-hangzhou-MAZ9(g,h)`), specify a single zone. Example: `cn-hangzhou-g` or `cn-hangzhou-j`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-j
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

