// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * mysql.x2.medium.xc
   */
  classCode?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
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

export class DescribePriceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of RDS capacity units (RCUs) allowed for automatic scaling of the instance.
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RDS capacity units (RCUs) allowed for automatic scaling of the instance.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instance. Valid values:
   * 
   * * **bards**: pay-as-you-go primary instance (Alibaba Cloud China site)
   * * **rds** (default): subscription primary instance (Alibaba Cloud China site)
   * * **rords**: pay-as-you-go read-only instance (Alibaba Cloud China site)
   * * **rds_rordspre_public_cn**: subscription read-only instance (Alibaba Cloud China site)
   * * **bards_intl**: pay-as-you-go primary instance (Alibaba Cloud International site)
   * * **rds_intl**: subscription primary instance (Alibaba Cloud International site)
   * * **rords_intl**: pay-as-you-go read-only instance (Alibaba Cloud International site)
   * * **rds_rordspre_public_intl**: subscription read-only instance (Alibaba Cloud International site)
   * 
   * > This parameter is required when you query the pricing of a read-only instance.
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
   * Instance ID of the instance whose specifications you want to change or that you want to renew.
   * > - This parameter is required when you query the price for changing the specifications or renewing an instance.
   * > - If the instance is a read-only instance, you must specify instance ID of its primary instance.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Instance storage capacity of the instance. Unit: GB. Instance storage capacity increases in increments of 5 GB. For more information about the valid values, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
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
   * * **local_ssd**: Premium Local SSD
   * * **cloud_ssd**: standard SSD
   * * **cloud_essd**: PL1 ESSD
   * * **cloud_essd2**: PL2 ESSD
   * * **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The node information.
   * > This parameter is applicable to ApsaraDB RDS for MySQL Cluster Edition instances.
   * 
   * **if can be null:**
   * true
   */
  DBNode?: DescribePriceRequestDBNode[];
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
   * - **MySQL**: **5.5**, **5.6**, **5.7**, and **8.0**
   * - **SQL Server**: **08r2_ent_ha** (cloud disk edition, discontinued), **2008r2** (Premium Local SSD, discontinued), **2012** (Enterprise Edition Standalone), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_ent_ha**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, and **2022_web**
   * - **PostgreSQL**: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, and **15.0**
   * - **MariaDB**: **10.3**
   * 
   * 
   * 
   * <props="intl">The database engine version. Valid values:
   * - **MySQL**: **5.5**, **5.6**, **5.7**, and **8.0**
   * - **SQL Server**: **08r2_ent_ha** (cloud disk edition, discontinued), **2008r2** (Premium Local SSD, discontinued), **2012** (Enterprise Edition Standalone), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, and **2022_web**
   * - **PostgreSQL**: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, and **15.0**
   * - **MariaDB**: **10.3**
   * 
   * > For SQL Server instances, `_ent` indicates the Enterprise Cluster Edition, `_ent_ha` indicates the Enterprise Edition, `_std_ha` indicates the Standard Edition, and `_web` indicates the Web Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance role. Valid values:
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
   * The number of instances that you want to purchase. Valid values: **0** to **30**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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
   * > ApsaraDB RDS for MariaDB does not support serverless instances.
   */
  serverlessConfig?: DescribePriceRequestServerlessConfig;
  /**
   * @remarks
   * The subscription period unit. This parameter is required when the **CommodityCode** parameter is set to **rds**, **rds_rordspre_public_cn**, **rds_intl**, or **rds_rordspre_public_intl**. Valid values:
   * * **Year**: year
   * * **Month**: month
   * 
   * @example
   * Year
   */
  timeType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If the **TimeType** parameter is set to **Year**, the value ranges from **1** to **100**.
   * * If the **TimeType** parameter is set to **Month**, the value ranges from **1** to **999**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The zone ID of the primary node. You can call the DescribeRegions operation to query the zone ID.
   * 
   * > If you specify a VPC and a vSwitch, this parameter is required to match the zone of the vSwitch.
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
      DBNode: 'DBNode',
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
      serverlessConfig: 'ServerlessConfig',
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
      DBNode: { 'type': 'array', 'itemType': DescribePriceRequestDBNode },
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
      serverlessConfig: DescribePriceRequestServerlessConfig,
      timeType: 'string',
      usedTime: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

