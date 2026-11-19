// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The username. Valid values:
   * 
   * - The username must start with a lowercase letter.
   * - The username can contain lowercase letters, digits, and underscores (_).
   * - The username must be 4 to 16 characters in length.
   * 
   * > - ApsaraDB for MongoDB does not support keywords as usernames.
   * > - The permissions of the account are fixed to read-only.
   * > - When you apply for a direct connection endpoint for the shard node for the first time, you must set the username and password. You do not need to set them again for subsequent applications.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password. Valid values:
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include !@#$%^&*()_+-=.
   * - The password must be 8 to 32 characters in length.
   * 
   * > ApsaraDB for MongoDB does not support resetting the password for the shard node account.
   * 
   * @example
   * 123+abc
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): enables automatic payment. Make sure that your account has sufficient balance.
   * <props="china">- **false**: disables automatic payment. You can log on to the ApsaraDB for MongoDB console, choose **Expenses** > **Expenses and Costs** in the upper-right corner, choose **Subscription Orders** > **My Orders** in the left-side navigation pane, and then pay for the order on the **Orders** tab.
   * <props="intl">- **false**: disables automatic payment. You can log on to the ApsaraDB for MongoDB console, choose **Expenses** > **Expenses and Costs** in the upper-right corner, click **Order Management** in the left-side navigation pane, and then pay for the order on the **Orders** page.
   * 
   * > This parameter is required when the billing method is subscription.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The additional parameter for business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The value can contain a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null** (default): uses a coupon.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID of the sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11501cd7b5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: performs a dry run without calling the operation. The system checks the request parameters, request format, service limits, and available resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false (default): sends the request. If the request passes the dry run, the operation is performed.
   */
  dryRun?: boolean;
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
   * The disk space of the node. Unit: GB.
   * 
   * The valid values vary based on the storage type. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
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
   * - **shard**: shard node.
   * - **mongos**: mongos node.
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
   * The number of read-only nodes in the shard node.
   * 
   * Valid values: **0** to **5**. Default value: **0**.
   * > This parameter is supported only on the China site.
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance type of the search node to be added.
   * 
   * @example
   * mdb.shard.4x.large.d
   */
  searchDBInstanceClass?: string;
  /**
   * @remarks
   * The number of search nodes to be added.
   * 
   * @example
   * 2
   */
  searchNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of the search node to be added.
   * 
   * @example
   * 20
   */
  searchStorage?: number;
  /**
   * @remarks
   * Specifies whether to apply for a direct connection endpoint for the shard node. Valid values:
   * 
   * - **true**: applies for a direct connection endpoint for the shard node.
   * - **false** (default): does not apply for a direct connection endpoint for the shard node.
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
      dryRun: 'DryRun',
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
      dryRun: 'boolean',
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

