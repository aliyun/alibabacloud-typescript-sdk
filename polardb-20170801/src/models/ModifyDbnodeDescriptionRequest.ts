// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view information about all clusters in the destination region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the node. The name must meet the following requirements:
   * 
   * - It cannot start with http\\:// or https\\://.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * NodeDescriptionTest
   */
  DBNodeDescription?: string;
  /**
   * @remarks
   * The ID of the cluster node.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/185342.html) operation to view the details of all clusters that belong to your account, including node IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-*****************
   */
  DBNodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
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

