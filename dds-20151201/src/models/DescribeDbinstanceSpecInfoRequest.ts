// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSpecInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type. You can query this parameter by calling the [DescribeDBInstanceAttribute](https://next.api.aliyun.com/api/Dds/2015-12-01/DescribeDBInstanceAttribute) operation.
   * 
   * For instance types of different instance categories, see the following topics:
   * 
   * - [Specifications of standalone instances](https://help.aliyun.com/document_detail/311407.html)
   * 
   * - [Specifications of replica set instances](https://help.aliyun.com/document_detail/311410.html)
   * 
   * - [Specifications of sharded cluster instances](https://help.aliyun.com/document_detail/311414.html)
   * 
   * This parameter is required.
   * 
   * @example
   * mdb.shard.4x.large.d
   */
  instanceClass?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

