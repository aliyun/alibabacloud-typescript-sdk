// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. If this parameter is specified, the details of the backup set are queried.
   * 
   * > You can invoke the [DescribeDataBackups](https://help.aliyun.com/document_detail/210093.html) operation to query the information about all backup sets of the target instance, including the backup set IDs.
   * 
   * @example
   * 327329803
   */
  backupId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - Automated: automatic backup.
   * - Manual: manual backup.
   * 
   * If you do not specify this parameter, all backup modes are returned.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * - Success: The backup is completed.
   * - Failed: The backup failed.
   * 
   * If you do not specify this parameter, backup sets in all states are returned.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **DATA**: full backup.
   * - **RESTOREPOI**: restorable point.
   * 
   * If you do not specify this parameter, full backup sets are returned by default.
   * 
   * @example
   * DATA
   */
  dataType?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2011-06-01T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - 30
   * - 50
   * - 100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2011-06-01T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      DBInstanceId: 'DBInstanceId',
      dataType: 'DataType',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      DBInstanceId: 'string',
      dataType: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

