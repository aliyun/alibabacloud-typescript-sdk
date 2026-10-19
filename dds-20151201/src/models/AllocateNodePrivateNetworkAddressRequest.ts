// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateNodePrivateNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The username.
   * 
   * > - The username must start with a lowercase letter and be 4 to 16 characters in length. It can contain lowercase letters, digits, and underscores (_).
   * > - You need to set the username and password only when you apply for an endpoint for a shard or Configserver node for the first time. All shard and Configserver nodes use the username and password set during the first application.
   * > - The account has fixed read-only permissions.
   * 
   * @example
   * shardcsaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The password.
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `!#$%^&*()_+-=`.
   * - The password must be 8 to 32 characters in length.
   * 
   * @example
   * Test123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The instance ID of the sharded cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fa5efaa93****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or Configserver node.
   * 
   * > You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the ID of the shard or Configserver node.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp124beeb0ac****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * > You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

