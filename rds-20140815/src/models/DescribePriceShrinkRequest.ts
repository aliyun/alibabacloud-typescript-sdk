// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instance. Valid values:
   * 
   * *   **bards**: The instance is a pay-as-you-go primary instance. This value is available at the China site (aliyun.com).
   * *   **rds** (default): The instance is a subscription primary instance. This value is available at the China site (aliyun.com).
   * *   **rords**: The instance is a pay-as-you-go read-only instance. This value is available at the China site (aliyun.com).
   * *   **rds_rordspre_public_cn**: The instance is a subscription read-only instance. This value is available at the China site (aliyun.com).
   * *   **bards_intl**: The instance is a pay-as-you-go primary instance. This value is available at the international site (alibabacloud.com).
   * *   **rds_intl**: The instance is a subscription primary instance. This value is available at the international site (alibabacloud.com).
   * *   **rords_intl**: The instance is a pay-as-you-go read-only instance. This value is available at the international site (alibabacloud.com).
   * *   **rds_rordspre_public_intl**: The instance is a subscription read-only instance. This value is available at the international site (alibabacloud.com).
   * 
   * >  If you want to query the price of a read-only instance, you must specify this parameter.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance type of the instance. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rds.mysql.s1.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to change the specifications or the instance that you want to renew.
   * 
   * > *   If you want to query the price of a specification change order or a renewal order, you must specify this parameter.
   * > *   If the instance is a read-only instance, you must set this parameter to the ID of its primary instance.
   * 
   * @example
   * rm-*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB. You can increase the storage capacity at a step size of 5 GB. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the new instance. Valid values:
   * 
   * *   **general_essd**: premium Enterprise SSD (ESSD)
   * *   **local_ssd**: premium local SSD
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: performance level 1 (PL1) ESSD
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The information about the node.
   * 
   * >  This parameter is supported for ApsaraDB RDS for MySQL instances that run RDS Cluster Edition.
   * 
   * **if can be null:**
   * true
   */
  DBNodeShrink?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **MariaDB**
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
   * *   Valid values if you set Engine to **MySQL**: **5.5**, **5.6**, **5.7**, and **8.0**
   * *   Valid values if you set Engine to **SQL Server**: **08r2_ent_ha**(cloud disks, discontinued), **2008r2**(high-performance local disks, discontinued), **2012** (SQL Server EE Basic)**2012_ent_ha**, **2012_std_ha**, **2012_web**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, and **2022_web**
   * *   Valid values if you set Engine to **PostgreSQL**: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, and **15.0**
   * *   Valid value if you set Engine to **MariaDB**: **10.3**
   * 
   * >  The following information describes the valid values when you set Engine to SQLServer: `_ent` specifies SQL Server EE on RDS Cluster Edition, `_ent_ha` specifies SQL Server EE, `_std_ha` specifies SQL Server SE, and `_web` specifies SQL Server Web.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **0**: primary instance
   * *   **3**: read-only instance
   * 
   * @example
   * 0
   */
  instanceUsedType?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **BUY**
   * *   **RENEW**
   * *   **UPGRADE**
   * *   **DOWNGRADE**
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
   * 
   * *   **Prepaid**: subscription
   * *   **Postpaid**: pay-as-you-go
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The number of instances that you want to purchase. Valid values: **0 to 30**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The settings of the serverless instance.
   * 
   * > ApsaraDB RDS for MariaDB does not support serverless instances.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * The billing cycle of the subscription instance. This parameter is required when **CommodityCode** is set to **rds**, **rds_rordspre_public_cn**, **rds_intl**, or **rds_rordspre_public_intl**. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  timeType?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   If you set the **TimeType** parameter to **Year**, the value of the UsedTime parameter ranges from **1 to 100**.
   * *   If you set the **TimeType** parameter to **Month**, the value of the UsedTime parameter ranges from **1 to 999**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The zone ID of the primary instance. You can call the DescribeRegions operation to query the most recent zone list.
   * 
   * >  If you specify a virtual private cloud (VPC) and a vSwitch, this parameter is required to identify the zone for the vSwitch.
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

