// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * 603524***
   */
  backupId?: number;
  /**
   * @remarks
   * The ID of the cross-region data backup file.
   * 
   * >  You must specify the **CrossBackupId** parameter. Alternatively, you must specify the **StartTime** and **EndTime** parameters.
   * 
   * @example
   * 14562
   */
  crossBackupId?: number;
  /**
   * @remarks
   * The ID of the region in which the cross-region data backup file is stored.
   * 
   * @example
   * cn-shanghai
   */
  crossBackupRegion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2019-06-15T12:10:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: any non-zero positive integer.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2019-05-30T12:10:00Z
   */
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

