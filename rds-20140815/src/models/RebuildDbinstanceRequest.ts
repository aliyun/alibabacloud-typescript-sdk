// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID in the dedicated cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The dedicated cluster ID. You can call DescribeDedicatedHostGroups to query the dedicated cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dhg-4nxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The ID of the host on which the secondary instance is to be rebuilt.
   * >If you do not specify this parameter, the secondary instance is preferentially rebuilt on the original host. If the original host does not have sufficient space, the system selects a host that does not contain the primary instance. If no host with sufficient space is found, an insufficient space error is returned.
   * 
   * @example
   * i-bpxxxxxxx
   */
  dedicatedHostId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of secondary instance to rebuild. Valid values:
   * * **FOLLOWER**: secondary node.
   * * **LOG**: log node.
   * 
   * @example
   * FOLLOWER
   */
  rebuildNodeType?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      ownerId: 'OwnerId',
      rebuildNodeType: 'RebuildNodeType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      ownerId: 'number',
      rebuildNodeType: 'string',
      regionId: 'string',
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

