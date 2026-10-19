// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The extended information such as the promotional event ID and business information.
   * 
   * @example
   * 000000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The storage capacity used to specify the instance type, in MB. This parameter is used only to query Redis Community Edition instances in classic deployment mode. We recommend that you use the **InstanceClass** parameter to specify an exact instance type.
   * > After you specify the **InstanceClass** parameter, you do not need to specify this parameter.
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
   * Specifies whether to forcibly change the configuration. Valid values:
   * * **false**: yes.
   * * **true** (default): no.
   * 
   * @example
   * true
   */
  forceUpgrade?: boolean;
  /**
   * @remarks
   * The instance type specified by using the **InstanceClass** code. To find the **InstanceClass** code:
   * 1. In the [instance type navigation](https://help.aliyun.com/document_detail/26350.html), select the desired instance type and click the value in the **Architecture** column to open the specification document.
   * 2. In the instance type table of the specification document, find the desired instance type and locate the code in the **InstanceClass** column.
   * 
   * > The following example describes the parameters required for querying the price of a new instance. In addition to other key parameters, specify at least the following parameters:
   * > * Classic Edition instance: specify this parameter.
   * > * Cloud-native Edition standard architecture instance: specify this parameter.
   * > * Cloud-native Edition cluster architecture instance: specify this parameter and the **ShardCount** parameter.
   * > * Cloud-native Edition read/write splitting architecture instance: specify this parameter and the **Instances** parameter.
   * > * Multiple instances of different types, or Tair ESSD-based instances (custom storage type and storage capacity): specify the Instances parameter (this parameter is not required).
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
   * If you want to query the price of cloud-native read/write splitting architecture instances, Tair ESSD-based instances, or multiple instances of different types, specify this parameter. The value is a JSON-formatted string. For more information, see **Additional description of the Instances parameter** below.
   * 
   * @example
   * [{"RegionId": "cn-hangzhou","ZoneId": "cn-hangzhou-b","ShardClass": "tair.scm.with.proxy.standard.2m.8d","ShardCount": "3","Period": "1","Quantity": "1"}]
   */
  instances?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **STAND_ALONE**: standalone (single replica).
   * - **MASTER_SLAVE** (default): high availability (dual replicas).
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * Specifies whether to return order parameters. Valid values:
   * * **false** (default): does not return order parameters.
   * * **true**: returns order parameters.
   * 
   * @example
   * true
   */
  orderParamOut?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * * **BUY**: new purchase.
   * * **UPGRADE**: configuration change.
   * * **RENEW**: renewal.
   * * **CONVERT**: billing method conversion.
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
   * The subscription duration, in months. Valid values: **1** to **9**, **12**, **24**, and **36**.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The secondary zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/473764.html) to query available zones.
   * > The value of this parameter must be different from the value of the ZoneId parameter.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of data shard nodes in a cloud-native cluster instance.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/473764.html) to query available zones.
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

