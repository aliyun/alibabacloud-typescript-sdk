// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupabaseDataBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. You can obtain the ID from the BackupSetId parameter returned by the ListSupabaseDataBackups operation.
   * 
   * @example
   * 327329803
   */
  backupId?: string;
  /**
   * @remarks
   * The backup pattern. Valid values: Automated: automatic backup. Manual: manual backup.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The status of the backup set. Valid values: Success: the backup is successful; Failed: the backup fails.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values: DATA: full backup; RESTOREPOI: restorable point.
   * 
   * @example
   * DATA
   */
  dataType?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Format: yyyy-MM-ddTHH:mmZ (UTC).
   * 
   * @example
   * 2011-06-01T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return for the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token for paged query. Do not specify this parameter for the first request. For subsequent requests, specify the NextToken value returned by the previous response.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of an integer. Default value: 1.
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
   * Instance ID of the Supabase instance. You can obtain instance ID from the Supabase page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-263****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Format: yyyy-MM-ddTHH:mmZ (UTC).
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
      dataType: 'DataType',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      dataType: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
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

