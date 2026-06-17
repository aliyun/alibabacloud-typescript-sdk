// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source cluster that contains the DBLink you want to delete.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to view the list of PolarDB clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the DBLink to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * dblink_test
   */
  DBLinkName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBLinkName: 'string',
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

