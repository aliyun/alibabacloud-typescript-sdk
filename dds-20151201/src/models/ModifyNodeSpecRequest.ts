// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically align the primary node to the primary zone after operations such as specification changes for multi-zone instances. If you choose not to align the node, one primary/secondary switchover (transient disconnection) is avoided. Default value: true.
   */
  alignPrimaryZone?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): Automatic payment is enabled. Make sure that your account has sufficient balance.
   * - **false**: Manual payment is enabled.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The additional parameter that contains business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. Make sure that the value is unique across different requests and contains a maximum of 64 ASCII characters. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null** (default): Use a coupon.
   * - **youhuiquan_promotion_option_id_for_blank**: Do not use a coupon.
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
   * The effective period of the configuration change. Valid values: 
   * - **Immediately** (default): The configuration change takes effect immediately.
   * - **MaintainTime**: The configuration change takes effect within the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * - **OpenApi**: The request is sent from OpenAPI.
   * - **mongo_buy**: The request is sent from the console.
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specifications of the shard or mongos node. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the node ID.
   * 
   * > If the value is a shard node ID, you must also specify the **NodeStorage** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp143e1b1637****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage space of the shard node. The step size is 10 GB.
   * 
   * - For local SSDs, valid values: **10** to **2000**.
   * - For PL1 ESSDs, valid values: **20** to **16000**.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - **UPGRADE**: Upgrade.
   * - **DOWNGRADE**: Downgrade.
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
   * The time when the configuration change is executed. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > **[Deprecated]** This parameter is deprecated. Use the EffectiveTime parameter instead.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The destination hidden zone for zone migration.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * 
   * @example
   * cn-hangzhou-j
   */
  targetHiddenZoneId?: string;
  /**
   * @remarks
   * The destination secondary zone for zone migration.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * 
   * @example
   * cn-hangzhou-e
   */
  targetSecondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the destination vSwitch for zone migration.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * 
   * @example
   * vsw-xxxxxxxx
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The destination primary zone for zone migration.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * 
   * @example
   * cn-hangzhou-h
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      alignPrimaryZone: 'AlignPrimaryZone',
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
      alignPrimaryZone: 'boolean',
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

