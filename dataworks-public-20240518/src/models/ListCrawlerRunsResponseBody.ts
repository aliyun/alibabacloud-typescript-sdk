// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlerRunsResponseBodyPagingInfoCrawlerRuns extends $dara.Model {
  /**
   * @example
   * 60
   */
  duration?: number;
  /**
   * @example
   * 1710239065403
   */
  finishedTime?: number;
  /**
   * @example
   * 1710239005403
   */
  startedTime?: number;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 1234
   */
  taskInstanceId?: number;
  /**
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
  crawlerRuns?: ListCrawlerRunsResponseBodyPagingInfoCrawlerRuns[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  pagingInfo?: ListCrawlerRunsResponseBodyPagingInfo;
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
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

