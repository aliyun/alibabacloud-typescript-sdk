// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLinksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster for which you want to query the database links.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query PolarDB clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-a*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database link. If you leave this parameter empty, the system returns all the database links.
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

