// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveRecordJobsResponseBodyLiveRecordJobs } from "./ListLiveRecordJobsResponseBodyLiveRecordJobs";


export class ListLiveRecordJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of live stream recording jobs.
   */
  liveRecordJobs?: ListLiveRecordJobsResponseBodyLiveRecordJobs[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A27DFFA4-F272-5563-8363-CB0BC42740BA
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 180
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      liveRecordJobs: 'LiveRecordJobs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordJobs: { 'type': 'array', 'itemType': ListLiveRecordJobsResponseBodyLiveRecordJobs },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.liveRecordJobs)) {
      $dara.Model.validateArray(this.liveRecordJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

