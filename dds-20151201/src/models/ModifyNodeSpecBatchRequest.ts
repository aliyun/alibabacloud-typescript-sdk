// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecBatchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, click **Expenses** to go to the **Billing Management** console. In the left-side navigation pane, click **Orders**. On the **Orders** page, find the order and complete the payment.
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information.
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
   * The ID of the instance whose configurations you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1337621e8f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the changed configurations take effect. Valid values:
   * 
   * *   **Immediately**: The configurations immediately take effect.
   * *   **MaintainTime**: The configurations take effect during the maintenance window of the instance.
   * 
   * > 
   * 
   * *   You can call the [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/62008.html) operation to modify the maintenance window of an instance.
   * 
   * *   You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the maintenance window of an instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The configuration information of the mongos nodes or shard nodes whose configurations you want to change. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Shards":[{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp14ae4572fd****","Storage":20},{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp19f4f92dc5****","Storage":30}]}
   */
  nodesInfo?: string;
  /**
   * @remarks
   * The type of configuration changes. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
   * 
   * > This parameter is only applicable to instances whose billing method is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      nodesInfo: 'NodesInfo',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      nodesInfo: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

