// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * - Regular instances
   *     - **Basic**: Basic Edition
   *     - **HighAvailability**: high-availability (active) series
   *     - **cluster**: Cluster Edition for MySQL
   *     - **AlwaysOn**: Cluster Edition for SQL Server
   *     - **Finance**: RDS Enterprise Edition
   * - Serverless instances
   *     - **serverless_basic**: Serverless Basic Edition (only applicable to MySQL and PostgreSQL)
   *     - **serverless_standard**: MySQL Serverless high-availability (active) series
   *     - **serverless_ha**: SQL Server Serverless high-availability (active) series
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The commodity code of the instance. The available resources are queried based on the specified commodity code. Valid values:
   * - **bards**: pay-as-you-go primary instances on the China site
   * - **rds**: subscription primary instances on the China site
   * - **rords**: pay-as-you-go read-only instances on the China site
   * - **rds_rordspre_public_cn**: subscription read-only instances on the China site
   * - **bards_intl**: pay-as-you-go primary instances on the international site
   * - **rds_intl**: subscription primary instances on the international site
   * - **rords_intl**: pay-as-you-go read-only instances on the international site
   * - **rds_rordspre_public_intl**: subscription read-only instances on the international site
   * - **rds_serverless_public_cn**: Serverless instances on the China site
   * - **rds_serverless_public_intl**: Serverless instances on the international site
   * 
   * @example
   * bards
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance ID of the primary instance. This parameter is used to query the available read-only instance resources under the primary instance.
   * 
   * This parameter is required when the **CommodityCode** parameter is set to one of the following values:
   * - **rords_intl**
   * - **rds_rordspre_public_intl**
   * - **rords**
   * - **rds_rordspre_public_cn**
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Specifies whether to return the list of zones that support single-zone deployment. Valid values:
   * - **1** (default): Returns the list.
   * - **0**: Does not return the list.
   * 
   * > The single-zone deployment feature allows you to deploy RDS Enterprise Edition instances in a single zone.
   * 
   * @example
   * 0
   */
  dispenseMode?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * - **MySQL**
   * - **SQLServer**
   * - **PostgreSQL**
   * - **MariaDB**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * - Regular instances
   *     - MySQL: **5.5**, **5.6**, **5.7**, and **8.0**
   *     - SQL Server: **2008r2**, **08r2_ent_ha**, **2012**, **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_std_ha**, **2017_ent**, **2019_std_ha**, and **2019_ent**
   *     - PostgreSQL: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, and **15.0**
   *     - MariaDB: **10.3**
   * - Serverless instances
   *     - MySQL: **5.7** and **8.0**
   *     - SQL Server: **2016_std_sl**, **2017_std_sl**, and **2019_std_sl**
   *     - PostgreSQL: **14.0**
   * 
   *     > ApsaraDB RDS for MariaDB does not support Serverless instances.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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
   * The zone ID. The format of a multi-zone ID is different from that of a single-zone ID and contains `MAZ`, such as `cn-hangzhou-MAZ6(b,f)` and `cn-hangzhou-MAZ5(b,e,f)`. You can call the DescribeRegions operation to query the zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      DBInstanceName: 'DBInstanceName',
      dispenseMode: 'DispenseMode',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      DBInstanceName: 'string',
      dispenseMode: 'string',
      engine: 'string',
      engineVersion: 'string',
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

