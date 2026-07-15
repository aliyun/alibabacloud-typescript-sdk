// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The account name. The name must meet the following requirements:
   * 
   * - Starts with a lowercase letter.
   * 
   * - Consists of lowercase letters, digits, and underscores (_).
   * 
   * - Is 4 to 16 characters in length.
   * 
   * > * Keywords of ApsaraDB for MongoDB cannot be used as the account name.
   * >
   * > * The account has read-only permissions.
   * >
   * > * You must set the account name and password only when you enable a public endpoint for a shard node for the first time. These parameters are not required on subsequent requests.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password for the account. The password must meet the following requirements:
   * 
   * - Must contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Special characters include `!@#$%^&*()_+-=`.
   * 
   * - Is 8 to 32 characters in length.
   * 
   * > ApsaraDB for MongoDB does not support resetting the account password for shard nodes.
   * 
   * @example
   * 123+abc
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: (Default) Enables automatic payment. Ensure that your account has a sufficient balance.
   * 
   * <props="china">
   * 
   * - **false**: Disables automatic payment. In this case, you must manually pay for the node. To do so, log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Billing** > **Billing Management**. In the left-side navigation pane, choose **Subscription Orders** > **My Orders**. On the **Product Orders** tab, find the order and complete the payment.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **false**: Disables automatic payment. In this case, you must manually pay for the node. To do so, log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Billing** > **Billing Management**. In the left-side navigation pane, click **Order Management**. On the **Product Orders** page, find the order and complete the payment.
   * 
   * 
   * 
   * 
   * > This parameter is required for subscription instances.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Additional business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. The token must be unique across requests, contain only ASCII characters, and not exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **default** or **null**: (Default) An available coupon is automatically applied.
   * 
   * - **youhuiquan_promotion_option_id_for_blank**: No coupon is used.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11501cd7b5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance type of the shard or mongos node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * The valid values of this parameter vary based on the storage type of the instance. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * > This parameter is required when the node type is **shard**.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - **shard**: A shard node.
   * 
   * - **mongos**: A mongos node.
   * 
   * This parameter is required.
   * 
   * @example
   * shard
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in a shard node.
   * 
   * Valid values: **0** to **5**. The default value is **0**.
   * 
   * > This parameter is available only on the China site (aliyun.com).
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  searchDBInstanceClass?: string;
  searchNodeCount?: number;
  searchStorage?: number;
  /**
   * @remarks
   * Specifies whether to enable a public endpoint for the shard node. Valid values:
   * 
   * - **true**: Enables a public endpoint for the shard node.
   * 
   * - **false**: (Default) Does not enable a public endpoint for the shard node.
   * 
   * @example
   * false
   */
  shardDirect?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      nodeClass: 'NodeClass',
      nodeStorage: 'NodeStorage',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchDBInstanceClass: 'SearchDBInstanceClass',
      searchNodeCount: 'SearchNodeCount',
      searchStorage: 'SearchStorage',
      shardDirect: 'ShardDirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      nodeClass: 'string',
      nodeStorage: 'number',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchDBInstanceClass: 'string',
      searchNodeCount: 'number',
      searchStorage: 'number',
      shardDirect: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

