// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that your Alibaba Cloud account has a sufficient balance.
   * *   **false**: disables automatic payment. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **User Center**. In the left-side navigation pane, choose **Order Management** > **Order**. On the **Orders for Services** tab, find the order and pay for the order.
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
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to view instance types.
   * 
   * > You must specify at least one of the DBInstanceClass and **DBInstanceStorage** parameters.
   * 
   * @example
   * dds.sn4.xlarge.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1ea17b41ab****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Valid values: 10 to 3000. The value must be a multiple of 10. Unit: GB. The values that can be specified for this parameter are subject to the instance types. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * > 
   * 
   * *   You must specify at least one of the DBInstanceStorage and **DBInstanceClass** parameters.
   * 
   * *   Storage capacity can be scaled down only for pay-as-you-go replica set instances. The new storage capacity you specify must be greater than the used storage capacity.
   * 
   * @example
   * 50
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * The time when the changed configurations take effect. Valid values:
   * 
   * *   **Immediately** (default): The configurations immediately take effect.
   * *   **MaintainTime**: The configurations take effect during the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The additional parameter.
   * 
   * Valid values:
   * 
   * *   async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   sync
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE** (default)
   * 
   * >  This parameter can be configured only when the billing method of the instance is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes. Valid values: **0** to **5**.
   * 
   * If your instance has only **Classic Network** and **VPC** endpoints, you must apply for a public endpoint or release the classic network endpoint for the instance before you can change the **Read-only Nodes** value.
   * 
   * > You can go to the **Database Connections** page to view the types of networks that are enabled.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * *   Valid values for replica set instances: **3**, **5**, and **7**
   * *   Valid values for standalone instances: **1**
   * 
   * >  This parameter is not required for a serverless instance which is only available on the China site (aliyun.com).
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * mdb.shard.2x.xlarge.d
   */
  searchNodeClass?: string;
  /**
   * @example
   * 2
   */
  searchNodeCount?: number;
  /**
   * @example
   * 20
   */
  searchNodeStorage?: number;
  targetHiddenZoneId?: string;
  targetSecondaryZoneId?: string;
  targetVswitchId?: string;
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      effectiveTime: 'EffectiveTime',
      extraParam: 'ExtraParam',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      replicationFactor: 'ReplicationFactor',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchNodeClass: 'SearchNodeClass',
      searchNodeCount: 'SearchNodeCount',
      searchNodeStorage: 'SearchNodeStorage',
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
      couponNo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      effectiveTime: 'string',
      extraParam: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'string',
      replicationFactor: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchNodeClass: 'string',
      searchNodeCount: 'number',
      searchNodeStorage: 'number',
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

