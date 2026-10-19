// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Note: Only edge cluster (Zonal) IDs are supported. Regular PolarDB cluster IDs are not supported. You can call DescribeDBClustersZonal to retrieve the list of edge clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The cluster endpoint ID.
   * 
   * @example
   * pe-*************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * Specifies whether to return AI node information.
   * 
   * @example
   * AI
   */
  describeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      describeType: 'DescribeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
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

