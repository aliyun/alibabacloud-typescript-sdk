// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 11111111
   */
  backupId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - **Automated**: System automatic backup.
   * 
   * - **Manual**: Manual backup.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The destination region for cross-region backup.
   * 
   * > This parameter is supported only for PolarDB for MySQL.
   * 
   * @example
   * cn-hangzhou
   */
  backupRegion?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * - **Success**: The backup is complete.
   * 
   * - **Failed**: The backup failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in `YYYY-MM-DDThh:mmZ` format (UTC time).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-16T00:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0 and no greater than the maximum value of the Integer type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in `YYYY-MM-DDThh:mmZ` format (UTC time).
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-14T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupRegion: 'BackupRegion',
      backupStatus: 'BackupStatus',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupRegion: 'string',
      backupStatus: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

