// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. The token is case-sensitive.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a42***********
   */
  clientToken?: string;
  /**
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The IDs of the nodes.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/185342.html) operation to query the details of all clusters that belong to your Alibaba Cloud account, such as the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-************
   */
  DBNodeId?: string[];
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   RO
   * *   STANDBY
   * *   DLNode
   * 
   * Enumerated values:
   * 
   * *   DLNode: AI node
   * *   STANDBY: standby node
   * *   RO: read-only node
   * 
   * @example
   * RO
   */
  DBNodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cloudProvider: 'CloudProvider',
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      DBNodeType: 'DBNodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cloudProvider: 'string',
      DBClusterId: 'string',
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
      DBNodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeId)) {
      $dara.Model.validateArray(this.DBNodeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

