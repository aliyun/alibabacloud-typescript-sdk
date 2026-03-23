// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceTransType?: number;
  dedicatedHostGroupId?: string;
  effectiveTime?: string;
  engineVersion?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specifiedTime?: string;
  storage?: number;
  targetDBInstanceClass?: string;
  targetDedicatedHostIdForLog?: string;
  targetDedicatedHostIdForMaster?: string;
  targetDedicatedHostIdForSlave?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceTransType: 'DBInstanceTransType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specifiedTime: 'SpecifiedTime',
      storage: 'Storage',
      targetDBInstanceClass: 'TargetDBInstanceClass',
      targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceTransType: 'number',
      dedicatedHostGroupId: 'string',
      effectiveTime: 'string',
      engineVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specifiedTime: 'string',
      storage: 'number',
      targetDBInstanceClass: 'string',
      targetDedicatedHostIdForLog: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

