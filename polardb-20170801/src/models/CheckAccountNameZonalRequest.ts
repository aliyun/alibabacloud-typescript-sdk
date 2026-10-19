// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAccountNameZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_acc
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Note: This parameter accepts only edge cluster IDs, which you can obtain by calling the DescribeDBClustersZonal operation. For common PolarDB clusters, use the CheckAccountName operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
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

