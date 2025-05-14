// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The maximum time range to query is four days. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of job IDs.
   */
  jobIds?: string[];
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 5 to 30. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The format of the recording file. Valid values:
   * 
   * M3U8, FLV, and MP4
   * 
   * @example
   * m3u8
   */
  recordFormat?: string;
  /**
   * @remarks
   * The sorting order of the index files by creation time. Valid values:
   * 
   * asc: The query results are displayed in ascending order. This is the default value.
   * 
   * desc: The query results are displayed in descending order.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T08:00:01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobIds: 'JobIds',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      recordFormat: 'RecordFormat',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      recordFormat: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

