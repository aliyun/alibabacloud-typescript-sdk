// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The dedicated cluster ID. You can call the DescribeDedicatedHostGroups operation to query the dedicated cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dhg-4nxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The ID of the host on which the system rebuilds the secondary instance.
   * 
   * >  If you do not specify this parameter, the system preferentially rebuilds the secondary instance on the original host on which the secondary instance resides. If the remaining storage of the original host is insufficient, the system rebuilds the secondary instance on a host on which the primary instance does not reside. If no suitable hosts are found, the system reports an error that indicates insufficient storage.
   * 
   * @example
   * i-bpxxxxxxx
   */
  dedicatedHostId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The role of the secondary instance that you want to rebuild. Valid values:
   * 
   * *   **FOLLOWER**: secondary instance
   * *   **LOG**: logger instance
   * 
   * @example
   * FOLLOWER
   */
  rebuildNodeType?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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

