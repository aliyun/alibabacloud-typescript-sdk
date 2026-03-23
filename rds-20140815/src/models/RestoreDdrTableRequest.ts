// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDdrTableRequest extends $dara.Model {
  backupId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerId?: number;
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
  /**
   * @remarks
   * This parameter is required.
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      sourceRegion: 'SourceRegion',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      sourceRegion: 'string',
      tableMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

