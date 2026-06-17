// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to find the IDs of all clusters in your account.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the cluster endpoint.
   * 
   * @example
   * pe-*************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * Specifies whether to return information about AI nodes.
   * 
   * @example
   * AI
   */
  describeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the PolarFS instance.
   * 
   * @example
   * pfs-test*****
   */
  polarFsInstanceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      describeType: 'DescribeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      polarFsInstanceId: 'PolarFsInstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      describeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      polarFsInstanceId: 'string',
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

