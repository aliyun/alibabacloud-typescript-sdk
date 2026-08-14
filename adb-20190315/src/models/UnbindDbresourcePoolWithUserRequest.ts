// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDBResourcePoolWithUserRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Make sure that the client token is unique for each request. The token can be up to 64 ASCII characters in length and is case-sensitive.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Data Warehouse Edition (V3.0) cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all Data Warehouse Edition (V3.0) clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  poolName?: string;
  /**
   * @remarks
   * The database account to detach.
   * 
   * This parameter is required.
   * 
   * @example
   * accout
   */
  poolUser?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      poolUser: 'PoolUser',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      poolUser: 'string',
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

