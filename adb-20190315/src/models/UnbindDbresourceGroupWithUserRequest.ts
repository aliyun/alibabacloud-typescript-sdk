// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDBResourceGroupWithUserRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates this value to make sure that the value is unique among different requests. The token is case-sensitive and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Data Warehouse Edition cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all Data Warehouse Edition clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The database account to detach.
   * 
   * This parameter is required.
   * 
   * @example
   * accout
   */
  groupUser?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupUser: 'GroupUser',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      groupName: 'string',
      groupUser: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

