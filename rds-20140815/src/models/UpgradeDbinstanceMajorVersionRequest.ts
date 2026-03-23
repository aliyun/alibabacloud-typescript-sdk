// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceMajorVersionRequest extends $dara.Model {
  allowDDL?: boolean;
  collectStatMode?: string;
  customExtraInfo?: string;
  DBInstanceClass?: string;
  DBInstanceId?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  instanceNetworkType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  payType?: string;
  period?: string;
  privateIpAddress?: string;
  resourceOwnerId?: number;
  switchOver?: string;
  switchTime?: string;
  switchTimeMode?: string;
  targetMajorVersion?: string;
  upgradeMode?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  zoneIdSlave1?: string;
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      allowDDL: 'AllowDDL',
      collectStatMode: 'CollectStatMode',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      instanceNetworkType: 'InstanceNetworkType',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerId: 'ResourceOwnerId',
      switchOver: 'SwitchOver',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetMajorVersion: 'TargetMajorVersion',
      upgradeMode: 'UpgradeMode',
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
      allowDDL: 'boolean',
      collectStatMode: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      instanceNetworkType: 'string',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      resourceOwnerId: 'number',
      switchOver: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetMajorVersion: 'string',
      upgradeMode: 'string',
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

