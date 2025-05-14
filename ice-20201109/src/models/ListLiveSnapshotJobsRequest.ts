// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * *   By default, EndTime is seven days later than StartTime.
   * *   The time range specified by the StartTime and EndTime parameters cannot exceed 30 days.
   * 
   * @example
   * 2022-02-02T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Valid values: [1,n). Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword. You can use the job ID or name as the keyword to search for jobs. If you search for jobs by name, fuzzy match is supported.
   * 
   * *   It cannot exceed 128 characters in length.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   asc: sorts the query results by creation time in ascending order.
   * *   desc: sorts the query results by creation time in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * *   The default value is seven days ago.
   * *   The time range specified by the StartTime and EndTime parameters cannot exceed 30 days.
   * 
   * @example
   * 2022-02-02T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job state filter. By default, all jobs are queried.
   * 
   * Valid values:
   * 
   * *   init: The job is not started.
   * *   paused: The job is paused.
   * *   started: The job is in progress.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchKeyWord: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

