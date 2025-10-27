// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateClusterPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix must contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * *   By default, the cluster name is used as the prefix of the public endpoint.
   * 
   * @example
   * am-bp278jg9****.ads.aliyuncs.com
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The Data Warehouse Edition Cluster ID of AnalyticDB for MySQL. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to retrieve all Data Warehouse Edition cluster IDs within the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp278jg9****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
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

