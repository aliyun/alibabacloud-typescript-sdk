// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceRequest extends $dara.Model {
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
   * The time when the migration takes effect. Valid values:
   * * **Immediately**: The migration takes effect immediately. This is the default value.
   * * **MaintainTime**: The migration takes effect within the maintenance window.
   * * **Specified**: The migration takes effect at a specified time.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specified time for the migration. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is required when **EffectiveTime** is set to **Specified**.
   * 
   * @example
   * 2019-10-21T10:00:00Z
   */
  specifiedTime?: string;
  /**
   * @remarks
   * The ID of the destination host to which the primary instance is to be migrated. You can call the DescribeDedicatedHosts operation to query the host ID.
   * 
   * @example
   * i-bpxxxxxxx1
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the destination host to which the secondary instance is to be migrated. You can call the DescribeDedicatedHosts operation to query the host ID.
   * 
   * @example
   * i-bpxxxxxxx2
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The zone ID of the secondary node.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneIdForFollower?: string;
  /**
   * @remarks
   * The zone ID of the logger node.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneIdForLog?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      effectiveTime: 'EffectiveTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specifiedTime: 'SpecifiedTime',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      zoneIdForFollower: 'ZoneIdForFollower',
      zoneIdForLog: 'ZoneIdForLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      effectiveTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specifiedTime: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      zoneIdForFollower: 'string',
      zoneIdForLog: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

