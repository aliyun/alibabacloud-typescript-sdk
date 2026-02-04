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
   * The storage capacity of the instance. Unit: MB. This parameter is used only to query Redis Open-Source Edition instances that are deployed in classic mode. We recommend that you use the **InstanceClass** parameter to specify an exact instance type.
   * 
   * >  If you specify the **InstanceClass** parameter, you do not need to specify the Capacity parameter.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PostPaid** (default): pay-as-you-go
   * *   **PrePaid**: subscription
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The coupon code. Default value: youhuiquan_promotion_option_id_for_blank. This value indicates that no coupon code is available.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The engine version of the instance. Valid values: **2.8**, **4.0**, and **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to forcefully change the configurations of the instance. Valid values:
   * 
   * *   **false**: forcefully changes the configurations.
   * *   **true** (default): does not forcefully change the configurations.
   * 
   * @example
   * true
   */
  forceUpgrade?: boolean;
  /**
   * @remarks
   * The instance type.**** **To view the instance type, perform the following steps:**
   * 
   * 1.  In the [Instance specifications](https://help.aliyun.com/document_detail/26350.html) topic, click the link in the **References for instance specifications** column corresponding to the instance type that you want to view.
   * 2.  In the instance type table of the specification documentation, find the instance type in the **InstanceClass** column.
   * 
   * >  If you want to query new instances, in addition to key parameters, you must also specify at least the following parameters:
   * 
   * *   To query a classic instance, specify this parameter.
   * 
   * *   To query a cloud-native standard instance, specify this parameter.
   * 
   * *   To query a cloud-native cluster instance, specify this parameter and the **ShardCount** parameter.
   * 
   * *   To query a cloud-native read/write splitting instance, specify this parameter and the **Instances** parameter.
   * 
   * *   To query multiple instances of different specifications or to query a Tair ESSD-based instance that has a custom storage type and storage capacity, specify the Instances parameter. In this case, you do not need to specify the InstanceClass parameter.
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  This parameter is required when the **OrderType** parameter is set to **UPGRADE** or **RENEW**.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * If you want to query cloud-native read/write splitting instances, Tair ESSD-based instances, or instances of different specifications, you must specify this parameter as a JSON string. For more information, see the **Additional description of the Instances parameter** section.
   * 
   * @example
   * Instances=[{"RegionId": "cn-hangzhou","ZoneId": "cn-hangzhou-b","InstanceClass": "redis.master.small.default","Period": "1","Quantity": "1","Capacity": "4096"}]
   */
  instances?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **STAND_ALONE**: standalone
   * *   **MASTER_SLAVE** (default): high availability (master-replica)
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * Specifies whether to return parameters related to the order. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * true
   */
  orderParamOut?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **BUY**: specifies the orders that are used to purchase instances.
   * *   **UPGRADE**: specifies the orders that are used to change the configurations of instances.
   * *   **RENEW**: specifies the orders that are used to renew instances.
   * *   **CONVERT**: specifies the orders that are used to change the billing methods of instances.
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
   * The subscription duration. Unit: month. Valid values: **1**, 2, 3, 4, 5, 6, 7, 8, **9**, **12**, **24**, and **36**.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The number of instances that you want to purchase. Valid values: **1** to **30**. Default value: **1**.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of data shards in the cloud-native cluster instance.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the zone ID.
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

