// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account. The name must meet the following requirements:
   * 
   * - The name must start with a lowercase letter.
   * - The name can contain lowercase letters, digits, and underscores (_).
   * - The name must be 4 to 16 characters in length.
   * 
   * > - ApsaraDB for MongoDB does not support using keywords as account names.
   * > - The permissions of the account are fixed to read-only.
   * > - When you apply for a direct connection endpoint for a shard node for the first time, you must set the account name and password. You do not need to set them again for subsequent applications.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include !@#$%^&*()_+-=.
   * - The password must be 8 to 32 characters in length.
   * 
   * > ApsaraDB for MongoDB does not support resetting the password of the account for a shard node.
   * 
   * @example
   * PassWord123
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Enables automatic payment. Make sure that your account has sufficient balance. This is the default value.
   * - **false**: Disables automatic payment. You must manually pay the order. For more information, see [Manually renew a subscription instance](https://help.aliyun.com/document_detail/85052.html).
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
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. It cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null**: Uses a coupon. This is the default value.
   * - **youhuiquan_promotion_option_id_for_blank**: Does not use a coupon.
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
   * dds-bp18b0934e70****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: Performs a dry run without calling the operation. The system checks items such as request parameters, request format, service limits, and inventory. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false: Sends the request. If the check succeeds, the operation is performed. This is the default value.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The source of the request. Valid values:
   * - **OpenApi**: The request is sent from OpenAPI Explorer.
   * - **mongo_buy**: The request is sent from the console.
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specifications of the Mongos or shard nodes to be added. For more information about the specifications, see [Instance specifications](https://help.aliyun.com/document_detail/57141.html).
   * 
   * > By default, a sharded cluster instance supports up to 32 Mongos nodes and 32 shard nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Shards":[{"DBInstanceClass":"mdb.shard.4x.large.d","Storage":20}]}
   */
  nodesInfo?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to apply for a direct connection endpoint for the shard node. Valid values:
   * 
   * - **true**: Applies for a direct connection endpoint for the shard node.
   * - **false**: Does not apply for a direct connection endpoint for the shard node. This is the default value.
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
      fromApp: 'FromApp',
      nodesInfo: 'NodesInfo',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
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
      dryRun: 'boolean',
      fromApp: 'string',
      nodesInfo: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

