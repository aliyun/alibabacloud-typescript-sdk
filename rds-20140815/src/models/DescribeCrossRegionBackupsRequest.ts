// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionBackupsRequest extends $dara.Model {
  backupId?: number;
  crossBackupId?: number;
  crossBackupRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      crossBackupId: 'CrossBackupId',
      crossBackupRegion: 'CrossBackupRegion',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      crossBackupId: 'number',
      crossBackupRegion: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

