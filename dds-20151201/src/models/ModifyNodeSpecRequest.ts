// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. In this case, you must manually pay for the instance.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1c0b990184****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the changed configurations take effect. Valid values:
   * 
   * *   **Immediately** (default): The new configurations immediately take effect
   * *   **MaintainTime**: The new configurations take effect during the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * 
   * *   **OpenApi**: the ApsaraDB for MongoDB API
   * *   **mongo_buy**: the ApsaraDB for MongoDB console
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specifications of the shard or mongos node. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the node ID.
   * 
   * > If you set this parameter to the ID of the shard node, you must also specify the **NodeStorage** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp143e1b1637****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the shard node. Unit: GB.
   * 
   * *   Valid values are **10** to **2000** if the instance uses local SSDs.
   * *   Valid values are **20** to **16000** if the instance uses enhanced SSDs (ESSDs) at PL1.
   * 
   * > The value must be a multiple of 10.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
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
   * Valid values: **0** to **5**. The value must be an integer. Default value: **0**.
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The execution time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  switchTime?: string;
  targetHiddenZoneId?: string;
  targetSecondaryZoneId?: string;
  targetVswitchId?: string;
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

