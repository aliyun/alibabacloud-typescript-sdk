// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceForRebuildRequest extends $dara.Model {
  clientToken?: string;
  DBInstanceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  DBInstanceNetType?: string;
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  payType?: string;
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityIPList?: string;
  securityToken?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  zoneIdSlave1?: string;
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      securityToken: 'SecurityToken',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceNetType: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      securityToken: 'string',
      usedTime: 'string',
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

