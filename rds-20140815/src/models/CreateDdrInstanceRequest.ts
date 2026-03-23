// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDdrInstanceRequest extends $dara.Model {
  backupSetId?: string;
  backupSetRegion?: string;
  clientToken?: string;
  connectionMode?: string;
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceNetType?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  encryptionKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engineVersion?: string;
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  payType?: string;
  period?: string;
  privateIpAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  restoreType?: string;
  roleARN?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityIPList?: string;
  sourceDBInstanceName?: string;
  sourceRegion?: string;
  systemDBCharset?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      backupSetRegion: 'BackupSetRegion',
      clientToken: 'ClientToken',
      connectionMode: 'ConnectionMode',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      roleARN: 'RoleARN',
      securityIPList: 'SecurityIPList',
      sourceDBInstanceName: 'SourceDBInstanceName',
      sourceRegion: 'SourceRegion',
      systemDBCharset: 'SystemDBCharset',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      backupSetRegion: 'string',
      clientToken: 'string',
      connectionMode: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      roleARN: 'string',
      securityIPList: 'string',
      sourceDBInstanceName: 'string',
      sourceRegion: 'string',
      systemDBCharset: 'string',
      usedTime: 'string',
      VPCId: 'string',
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

