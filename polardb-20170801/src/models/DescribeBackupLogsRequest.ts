// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup region.
   * 
   * @example
   * cn-hangzhou
   */
  backupRegion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time is in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-12T15:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * The default value is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-01T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupRegion: 'BackupRegion',
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
      backupRegion: 'string',
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

