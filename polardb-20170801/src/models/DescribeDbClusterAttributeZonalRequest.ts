// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbClusterAttributeZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge cluster. You can first call the DescribeDBClustersZonal operation to list available edge clusters, and then use the returned DBClusterId to query the properties. The IDs of common clusters are not applicable. If you do not have an edge cluster, you can call the CreateDBCluster operation and specify CloudProvider=ENS and EnsRegionId to create one. If you do not have an edge cluster, you can call the CreateDBCluster operation and specify the CloudProvider=ENS and EnsRegionId parameters to create one.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to retrieve AI-related node information.
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

