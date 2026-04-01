// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The dedicated cluster ID. You can call the DescribeDedicatedHostGroups operation to query the dedicated cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dhg-4n******
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The time when you want the system to start the migration. Valid values:
   * 
   * *   **Immediately**: The system immediately starts the migration. This is the default value.
   * *   **MaintainTime**: The system starts the migration during the specified maintenance window.
   * *   **Specified**: The system starts the migration at the specified point in time.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  ownerId?: number;
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
  /**
   * @remarks
   * The point in time when you want the system to start the migration. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > This parameter must be specified when you set **EffectiveTime** to **Specified**.
   * 
   * @example
   * 2019-10-21T10:00:00Z
   */
  specifiedTime?: string;
  /**
   * @remarks
   * The ID of the host to which you want to migrate the primary instance. You can call the DescribeDedicatedHosts operation to query the host ID.
   * 
   * @example
   * i-bp******
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the host to which you want to migrate the secondary instance. You can call the DescribeDedicatedHosts operation to query the host ID.
   * 
   * @example
   * i-bp******
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The zone ID of the secondary node.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneIdForFollower?: string;
  /**
   * @remarks
   * The zone ID of the logger instance.
   * 
   * @example
   * cn-hangzhou-i
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

