// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceNetworkTypeRequest extends $dara.Model {
  classicExpiredDays?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  privateIpAddress?: string;
  readWriteSplittingClassicExpiredDays?: number;
  readWriteSplittingPrivateIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retainClassic?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      DBInstanceId: 'DBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      readWriteSplittingClassicExpiredDays: 'ReadWriteSplittingClassicExpiredDays',
      readWriteSplittingPrivateIpAddress: 'ReadWriteSplittingPrivateIpAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retainClassic: 'RetainClassic',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'string',
      DBInstanceId: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: 'string',
      readWriteSplittingClassicExpiredDays: 'number',
      readWriteSplittingPrivateIpAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retainClassic: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

