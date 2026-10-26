// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDetachedBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 327****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - **Automated**: automatic backup
   * - **Manual**: manual backup
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * - **Success**: The backup is completed.
   * - **Failed**: The backup failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time.
   * 
   * Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC time).
   * 
   * @example
   * 2021-03-15T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Valid values: any integer greater than 0 and less than or equal to the maximum integer value.
   * 
   * > Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30**
   * - **50**
   * - **100**
   * 
   * > Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query.
   * 
   * Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC time).
   * 
   * @example
   * 2021-03-01T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
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

