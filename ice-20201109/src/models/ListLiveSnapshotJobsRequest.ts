// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`. The time must be in UTC.
   * 
   * - If this parameter is not specified, the default is the current time.
   * 
   * -
   * 
   * @example
   * 2022-02-02T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number to return. The value must be an integer greater than or equal to 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of jobs to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword. You can search by Job ID or Job Name. Fuzzy search is supported for Job Name.
   * 
   * - The maximum length is 128 characters.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * The sort order. The results are sorted by `CreateTime`. Default: `desc` (Descending).
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`. The time must be in UTC.
   * 
   * - If this parameter is not specified, the default is 7 days ago.
   * 
   * - The interval between `StartTime` and `EndTime` cannot exceed 30 days.
   * 
   * @example
   * 2022-02-02T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status to filter by. If omitted, jobs of all statuses are returned.
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

