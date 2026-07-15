// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true** (default): Enables automatic payment. Make sure that your account has a sufficient balance.
   * 
   * - **false**: Disables automatic payment. You must manually pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **default** or **null** (default): A coupon is used.
   * 
   * - **youhuiquan_promotion_option_id_for_blank**: A coupon is not used.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1c0b990184****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The effective time of the configuration change. Valid values:
   * 
   * - **Immediately** (default): The change takes effect immediately.
   * 
   * - **MaintainTime**: The change takes effect during the O\\&M window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * 
   * - **OpenApi**: The request is from OpenAPI.
   * 
   * - **mongo_buy**: The request is from the console.
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The instance type of the shard or Mongos node. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The ID of the shard or Mongos node in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the node ID.
   * 
   * > If you set this parameter to the ID of a shard node, you must also specify the **NodeStorage** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp143e1b1637****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage space of the shard node. The step size is 10. Unit: GB.
   * 
   * - SSD local disk: **10** to **2000**.
   * 
   * - ESSD PL1 disk: **20** to **16000**.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * - **UPGRADE**: upgrades the instance configuration.
   * 
   * - **DOWNGRADE**: downgrades the instance configuration.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node.
   * 
   * Valid values: **0** to **5**. The value must be an integer.
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when the configuration change takes effect. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > This parameter is deprecated. Use the EffectiveTime parameter instead.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The hidden zone to which you want to migrate the instance.
   * 
   * >Notice: 
   * 
   * This parameter is applicable only to instances that use disks.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetHiddenZoneId?: string;
  /**
   * @remarks
   * The secondary zone to which you want to migrate the instance.
   * 
   * >Notice: 
   * 
   * This parameter is applicable only to instances that use disks.
   * 
   * @example
   * cn-hangzhou-e
   */
  targetSecondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * >Notice: 
   * 
   * This parameter is applicable only to instances that use disks.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The primary zone to which you want to migrate the instance.
   * 
   * >Notice: 
   * 
   * This parameter is applicable only to instances that use disks.
   * 
   * @example
   * cn-hangzhou-h
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      fromApp: 'FromApp',
      nodeClass: 'NodeClass',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      targetHiddenZoneId: 'TargetHiddenZoneId',
      targetSecondaryZoneId: 'TargetSecondaryZoneId',
      targetVswitchId: 'TargetVswitchId',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      effectiveTime: 'string',
      fromApp: 'string',
      nodeClass: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      targetHiddenZoneId: 'string',
      targetSecondaryZoneId: 'string',
      targetVswitchId: 'string',
      targetZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

