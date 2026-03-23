// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreateDdrDBInstanceRequest extends $dara.Model {
  backupSetId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceStorage?: number;
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
  ownerId?: number;
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
  sourceDBInstanceName?: string;
  sourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      sourceRegion: 'SourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      engine: 'string',
      engineVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      sourceRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

