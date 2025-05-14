// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * *   The maximum time range that can be specified is one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-02T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The number of results to return each time. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The sorting order. Default value: asc.
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
   * This parameter is required.
   * 
   * @example
   * 2022-02-02T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobId: 'JobId',
      limit: 'Limit',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobId: 'string',
      limit: 'number',
      sortBy: 'string',
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

