// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dedicatedHostGroupId?: string;
  effectiveTime?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specifiedTime?: string;
  targetDedicatedHostIdForMaster?: string;
  targetDedicatedHostIdForSlave?: string;
  zoneIdForFollower?: string;
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

