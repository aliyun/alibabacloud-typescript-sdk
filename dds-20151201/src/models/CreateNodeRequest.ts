// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account. The username must meet the following requirements:
   * 
   * *   The username starts with a lowercase letter.
   * *   The username can contain lowercase letters, digits, and underscores (_).
   * *   The username must be 4 to 16 characters in length.
   * 
   * > 
   * 
   * *   Keywords cannot be used as accounts.
   * 
   * *   This account is granted the read-only permissions.
   * *   The username and password need to be set if you apply for an endpoint for the shard node for the first time.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * 
   * *   The password contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   These special characters include ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password is 8 to 32 characters in length.
   * 
   * >  ApsaraDB for MongoDB does not allow you to reset the password of an account.
   * 
   * @example
   * 123+abc
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > Orders. On the **Orders** page, find the order that you want to pay for and complete the payment.
   * 
   * >  This parameter is required only when the billing method of the instance is subscription.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: **youhuiquan_promotion_option_id_for_blank**.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
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
   * The instance type of the shard or mongos node. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The disk capacity of the node. Unit: GB.
   * 
   * Valid values: **10** to **2000**. The value must be a multiple of 10.
   * 
   * >  This parameter is required only when the NodeType parameter is set to **shard**.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **shard**: shard node
   * *   **mongos**: mongos node
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
   * Valid values: **0**, 1, 2, 3, 4, and **5**. Default value: **0**.
   * 
   * >  This parameter is available only for ApsaraDB for MongoDB instances that are purchased on the China site (aliyun.com).
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to apply for an endpoint for the shard node. Valid values:
   * 
   * *   **true**: applies for an endpoint for the shard node.
   * *   **false** (default): does not apply for an endpoint for the shard node.
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

