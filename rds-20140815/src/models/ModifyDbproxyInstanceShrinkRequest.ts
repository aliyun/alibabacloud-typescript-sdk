// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBProxyEngineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBProxyInstanceType?: string;
  DBProxyNodesShrink?: string;
  effectiveSpecificTime?: string;
  effectiveTime?: string;
  migrateAZShrink?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchIds?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyNodesShrink: 'DBProxyNodes',
      effectiveSpecificTime: 'EffectiveSpecificTime',
      effectiveTime: 'EffectiveTime',
      migrateAZShrink: 'MigrateAZ',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      DBProxyInstanceNum: 'string',
      DBProxyInstanceType: 'string',
      DBProxyNodesShrink: 'string',
      effectiveSpecificTime: 'string',
      effectiveTime: 'string',
      migrateAZShrink: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

