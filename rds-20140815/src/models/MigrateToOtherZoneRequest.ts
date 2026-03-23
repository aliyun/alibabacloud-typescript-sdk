// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  category?: string;
  customExtraInfo?: string;
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  effectiveTime?: string;
  ioAccelerationEnabled?: string;
  isModifySpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  switchTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  zoneIdSlave1?: string;
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      effectiveTime: 'EffectiveTime',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      isModifySpec: 'IsModifySpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      effectiveTime: 'string',
      ioAccelerationEnabled: 'string',
      isModifySpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

