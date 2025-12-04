// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateSingleZoneToMultiZoneRequest extends $dara.Model {
  arbitraryVSwitchId?: string;
  arbitraryZoneId?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  standbyVSwitchId?: string;
  standbyZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      arbitraryVSwitchId: 'ArbitraryVSwitchId',
      arbitraryZoneId: 'ArbitraryZoneId',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbitraryVSwitchId: 'string',
      arbitraryZoneId: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

