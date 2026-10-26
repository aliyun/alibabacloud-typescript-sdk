// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user backup.
   * 
   * @example
   * 603524****
   */
  backupId?: number;
  /**
   * @remarks
   * The ID of the cross-region backup file.
   * >You must specify either **CrossBackupId** or the start and end time parameters (**StartTime** and **EndTime**).
   * 
   * @example
   * 14562
   */
  crossBackupId?: number;
  /**
   * @remarks
   * The ID of the destination region for cross-region backup.
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
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > If the time zone is not UTC+0, you must subtract 8 hours from the actual time.
   * 
   * @example
   * 2024-03-05T02:24:37Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: any integer greater than 0 and less than or equal to the maximum value of the Integer type.
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
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > If the time zone is not UTC+0, you must subtract 8 hours from the actual time.
   * 
   * @example
   * 2024-03-05T02:21:00Z
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

