// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instance. Valid values:
   * 
   * * **bards**: pay-as-you-go primary instance (China site)
   * * **rds** (default): subscription primary instance (China site)
   * * **rords**: pay-as-you-go read-only instance (China site)
   * * **rds_rordspre_public_cn**: subscription read-only instance (China site)
   * * **bards_intl**: pay-as-you-go primary instance (international site)
   * * **rds_intl**: subscription primary instance (international site)
   * * **rords_intl**: pay-as-you-go read-only instance (international site)
   * * **rds_rordspre_public_intl**: subscription read-only instance (international site)
   * 
   * > This parameter is required when you query the price of a read-only instance.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.x2.medium.xc
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * Instance ID of the instance for which you want to change the specifications or renew.
   * > - This parameter is required when you query the price for a specification change or renewal.
   * > - If the instance is a read-only instance, specify instance ID of its primary instance.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance storage space. Unit: GB. The value increases in increments of 5 GB. For more information about the value range, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * * **general_essd**: Premium ESSD
   * * **local_ssd**: Premium Local SSDs
   * * **cloud_ssd**: standard SSD
   * * **cloud_essd**: PL1 ESSD cloud disk
   * * **cloud_essd2**: PL2 ESSD cloud disk
   * * **cloud_essd3**: PL3 ESSD cloud disk
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The node information.
   * > This parameter is used for ApsaraDB RDS for MySQL instances in the cluster edition.
   * 
   * **if can be null:**
   * true
   */
  DBNodeShrink?: string;
  /**
   * @remarks
   * The database engine. Valid values:
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
   * <props="china">The database engine version. Valid values:
   * - **MySQL**: **5.5**, **5.6**, **5.7**, **8.0**
   * - **SQL Server**: **08r2_ent_ha** (cloud disk, discontinued), **2008r2** (Premium Local SSDs, discontinued), **2012** (Enterprise Edition Basic), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_ent_ha**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, **2022_web**
   * - **PostgreSQL**: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, **15.0**
   * - **MariaDB**: **10.3**
   * 
   * 
   * 
   * <props="intl">The database engine version. Valid values:
   * - **MySQL**: **5.5**, **5.6**, **5.7**, **8.0**
   * - **SQL Server**: **08r2_ent_ha** (cloud disk, discontinued), **2008r2** (Premium Local SSDs, discontinued), **2012** (Enterprise Edition Basic), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_ent_ha**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, **2022_web**
   * - **PostgreSQL**: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, **15.0**
   * - **MariaDB**: **10.3**
   * 
   * > For SQL Server instances, `_ent` indicates Enterprise Edition (Cluster), `_ent_ha` indicates Enterprise Edition, `_std_ha` indicates Standard Edition, and `_web` indicates Web Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * * **0**: primary instance
   * * **3**: read-only instance
   * 
   * @example
   * 0
   */
  instanceUsedType?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * * **BUY**: purchase
   * * **RENEW**: renewal
   * * **UPGRADE**: upgrade
   * * **DOWNGRADE**: downgrade
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * * **Prepaid**: subscription
   * * **Postpaid**: pay-as-you-go
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The number of instances to purchase. Valid values: **0 to 30**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The settings of the serverless ApsaraDB RDS instance.
   * > MariaDB does not support serverless instances.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The subscription type. This parameter is required when **CommodityCode** is set to **rds**, **rds_rordspre_public_cn**, **rds_intl**, or **rds_rordspre_public_intl**. Valid values:
   * * **Year**: yearly subscription
   * * **Month**: monthly subscription
   * 
   * @example
   * Year
   */
  timeType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **TimeType** is set to **Year**, the value of UsedTime ranges from **1 to 100**.
   * * If **TimeType** is set to **Month**, the value of UsedTime ranges from **1 to 999**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The zone ID of the primary node. You can call DescribeRegions to query the most recent zone list.
   * 
   * > If you specify a VPC and a vSwitch, this parameter is required to match the zone of the specified vSwitch.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNodeShrink: 'DBNode',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceUsedType: 'InstanceUsedType',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverlessConfigShrink: 'ServerlessConfig',
      timeType: 'TimeType',
      usedTime: 'UsedTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBNodeShrink: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceUsedType: 'number',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverlessConfigShrink: 'string',
      timeType: 'string',
      usedTime: 'number',
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

