// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The extended information, such as the promotion ID and business information.
   * 
   * @example
   * 000000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * Specifies the instance type by using the storage capacity of the instance. Unit: MB. This parameter applies only to instances of ApsaraDB for Redis Community Edition in the classic deployment mode. We recommend that you use the **InstanceClass** parameter to specify an exact instance type.
   * > If you specify the **InstanceClass** parameter, you do not need to specify this parameter.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PostPaid** (default): pay-as-you-go.
   * * **PrePaid**: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The coupon code. Default value: youhuiquan_promotion_option_id_for_blank, which indicates that no coupon code is used.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * <props="china">Database engine version of the Redis instance. Valid values: **2.8**, **4.0**, **5.0**, and **6.0**.
   * 
   * <props="intl">Database engine version of the Redis instance. Valid values: **2.8**, **4.0**, and **5.0**.
   * 
   * <props="partner">Database engine version of the Redis instance. Valid values: **2.8**, **4.0**, and **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to forcibly upgrade or downgrade the instance. Valid values:
   * * **false**: Yes.
   * * **true** (default): No.
   * 
   * @example
   * true
   */
  forceUpgrade?: boolean;
  /**
   * @remarks
   * Specifies the instance type by using the **InstanceClass** code. To query the **InstanceClass** code, perform the following steps:
   * 1. On the [Instance type query](https://help.aliyun.com/document_detail/26350.html) page, select the instance type as needed and click the value in the **Architecture Type** column to open the instance type documentation.
   * 2. In the instance type table of the documentation, select the required instance type and find the code in the **InstanceClass** column.
   * 
   * > For example, to query pricing for a new purchase, you must specify at least the following parameters in addition to other key parameters:
   * > * To query a classic instance: specify this parameter.
   * > * To query a cloud-native standard architecture instance: specify this parameter.
   * > * To query a cloud-native cluster architecture instance: specify this parameter and the **ShardCount** parameter.
   * > * To query a cloud-native read/write splitting architecture instance: specify this parameter and the **Instances** parameter.
   * > * To query multiple instances of different types, or to query Tair ESSD instances (with custom storage types and storage space): specify the Instances parameter. You do not need to specify this parameter.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * > This parameter is required when **OrderType** is set to **UPGRADE** or **RENEW**.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instances to query. This parameter is required when you query cloud-native read/write splitting architecture instances, Tair ESSD instances, or multiple instances of different types. The value is a JSON string. For more information, see **Supplementary description of the Instances parameter** below.
   * 
   * @example
   * [{"RegionId": "cn-hangzhou","ZoneId": "cn-hangzhou-b","ShardClass": "tair.scm.with.proxy.standard.2m.8d","ShardCount": "3","Period": "1","Quantity": "1"}]
   */
  instances?: string;
  /**
   * @remarks
   * Specifies whether to return unavailable coupons.
   */
  needUnavailableCoupon?: boolean;
  /**
   * @remarks
   * The node type. Valid values:
   * - **STAND_ALONE**: Single-replica.
   * - **MASTER_SLAVE** (default): High-availability (dual-replica).
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * Specifies whether to return the order parameters. Valid values:
   * * **false** (default): Not returned.
   * * **true**: Returned.
   * 
   * @example
   * true
   */
  orderParamOut?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * * **BUY**: New purchase.
   * * **UPGRADE**: Upgrade or downgrade.
   * * **RENEW**: Renewal.
   * * **CONVERT**: Billing method conversion.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The number of instances to purchase. Valid values: **1** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The secondary zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query available zones.
   * > The value of this parameter cannot be the same as the value of the ZoneId parameter.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of data shard nodes in the cloud-native cluster instance.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query available zones.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      couponNo: 'CouponNo',
      engineVersion: 'EngineVersion',
      forceUpgrade: 'ForceUpgrade',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instances: 'Instances',
      needUnavailableCoupon: 'NeedUnavailableCoupon',
      nodeType: 'NodeType',
      orderParamOut: 'OrderParamOut',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryZoneId: 'SecondaryZoneId',
      securityToken: 'SecurityToken',
      shardCount: 'ShardCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: 'string',
      capacity: 'number',
      chargeType: 'string',
      couponNo: 'string',
      engineVersion: 'string',
      forceUpgrade: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      instances: 'string',
      needUnavailableCoupon: 'boolean',
      nodeType: 'string',
      orderParamOut: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      quantity: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryZoneId: 'string',
      securityToken: 'string',
      shardCount: 'number',
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

