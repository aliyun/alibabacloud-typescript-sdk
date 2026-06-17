// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinueDBClusterMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in the destination region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-k2ju1lnl5i4ohv501
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to skip the current error. Valid values:
   * 
   * **true**: Skips the error.
   * 
   * **false**: Does not skip the error.
   * 
   * @example
   * false
   */
  forceSwitch?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * > For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/98041.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      forceSwitch: 'ForceSwitch',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      forceSwitch: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

