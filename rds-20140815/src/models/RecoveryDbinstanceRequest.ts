// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryDBInstanceRequest extends $dara.Model {
  backupId?: string;
  DBInstanceClass?: string;
  DBInstanceId?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbNames?: string;
  instanceNetworkType?: string;
  payType?: string;
  period?: string;
  privateIpAddress?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  targetDBInstanceId?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dbNames: 'DbNames',
      instanceNetworkType: 'InstanceNetworkType',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      targetDBInstanceId: 'TargetDBInstanceId',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dbNames: 'string',
      instanceNetworkType: 'string',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      targetDBInstanceId: 'string',
      usedTime: 'string',
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

