// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account. The username must meet the following requirements:
   * - The username starts with a lowercase letter. 
   * - The username contains lowercase letters, digits, and underscores (_). 
   * - The username is 4 to 16 characters in length. 
   * 
   * > - Keywords cannot be used as account usernames. 
   * > - The permissions of this account are fixed at read-only. 
   * > - The username and password are required to be set only when you apply for an endpoint for the shard node for the first time.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * - The password contains at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. 
   * - These special characters include ! @ # $ % ^ & * ( ) _ + - = 
   * - The password is 8 to 32 characters in length. 
   * > The account password of the shard node cannot be reset.
   * 
   * @example
   * 123+abc
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * - **true**: enables automatic payment. Make sure that you have sufficient balance within your account. 
   * - **false**: disables automatic payment. In this case, you must manually pay for the instance. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Orders**. On the Orders page, find the order and complete the payment.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to add nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp18b0934e70****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * - **OpenApi**: ApsaraDB for MongoDB API 
   * - **mongo_buy**: ApsaraDB for MongoDB console
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specifications of the mongos or shard node that you want to add. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). 
   * 
   * > Up to 32 mongos or shard nodes are supported for each sharded cluster instance.
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
   * Specifies whether to apply for an endpoint for the shard node. Default value: false. Valid values:
   * - **true**: applies for an endpoint for the shard node. 
   * - **false**: does not apply for an endpoint for the shard node.
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

