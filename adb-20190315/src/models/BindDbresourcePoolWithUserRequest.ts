// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindDBResourcePoolWithUserRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique among different requests. It is case-sensitive and must not exceed 64 ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Data Warehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all Data Warehouse Edition clusters in the destination region.
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
   * The database account to attach. You can attach either a standard account or a privileged account.
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

