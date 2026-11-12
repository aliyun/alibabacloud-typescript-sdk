// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLinksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster for which you want to query DBLink information.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query the list of PolarDB clusters.
   * 
   * > Use only the ID of a supported PolarDB for PostgreSQL (Compatible with Oracle) cluster. Unsupported engines or versions return InvalidEngine.Unsupported.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-a*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the DBLink. If you do not specify this parameter, all DBLinks are returned.
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

