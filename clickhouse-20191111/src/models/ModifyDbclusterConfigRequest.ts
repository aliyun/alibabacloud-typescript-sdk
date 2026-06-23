// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all clusters in a specific region. This information includes the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1t9lbb7a4z7****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The reason for the modification.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent list of regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The configuration parameters to modify.
   * 
   * > You can modify a single configuration parameter. Parameters that are not specified in the request are not affected.
   * 
   * This parameter is required.
   * 
   * @example
   * {"keep_alive_timeout":"301"}
   */
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      reason: 'Reason',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      reason: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

