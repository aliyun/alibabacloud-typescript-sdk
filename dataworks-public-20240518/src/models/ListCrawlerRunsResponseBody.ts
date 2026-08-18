// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlerRunsResponseBodyPagingInfoCrawlerRuns extends $dara.Model {
  /**
   * @remarks
   * The run duration, in seconds.
   * 
   * @example
   * 60
   */
  duration?: number;
  /**
   * @remarks
   * The end time, in millisecond-level UNIX timestamp.
   * 
   * @example
   * 1710239065403
   */
  finishedTime?: number;
  /**
   * @remarks
   * The start time, in millisecond-level UNIX timestamp.
   * 
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @remarks
   * The run status. Valid values: WAITING, RUNNING, SUCCESS, ERROR, SHUTDOWN.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The DataWorks task instance ID associated with this run.
   * 
   * @example
   * 1234
   */
  taskInstanceId?: number;
  /**
   * @remarks
   * The total number of tables involved in this run.
   * 
   * @example
   * 42
   */
  totalTableCount?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      finishedTime: 'FinishedTime',
      startedTime: 'StartedTime',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
      totalTableCount: 'TotalTableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      finishedTime: 'number',
      startedTime: 'number',
      status: 'string',
      taskInstanceId: 'number',
      totalTableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrawlerRunsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of metadata crawler run records.
   */
  crawlerRuns?: ListCrawlerRunsResponseBodyPagingInfoCrawlerRuns[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crawlerRuns: 'CrawlerRuns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerRuns: { 'type': 'array', 'itemType': ListCrawlerRunsResponseBodyPagingInfoCrawlerRuns },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crawlerRuns)) {
      $dara.Model.validateArray(this.crawlerRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrawlerRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListCrawlerRunsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListCrawlerRunsResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

