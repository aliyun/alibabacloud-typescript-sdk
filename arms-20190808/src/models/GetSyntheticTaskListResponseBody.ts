// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticTaskListResponseBodyPageInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1634005438000
   */
  createTime?: string;
  /**
   * @remarks
   * The number of detection points.
   * 
   * @example
   * 2
   */
  monitorNumber?: number;
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 2118709
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * net-test
   */
  taskName?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: The task is stopped.
   * *   **1**: The task is started.
   * *   **9**: The task is ended.
   * 
   * @example
   * 0
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * 1.  3: web page performance - IE
   * 2.  34: web page performance - Chrome
   * 3.  0: network quality
   * 4.  40: file download
   * 5.  7: API performance
   * 
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @remarks
   * The name of the task type.
   */
  taskTypeName?: string;
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * @example
   * www.example.com
   */
  url?: string;
  /**
   * @remarks
   * The availability. Only the data of the last day is counted. If no data is available for the last day, an empty value is returned.
   * 
   * @example
   * 0.80
   */
  usable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      monitorNumber: 'MonitorNumber',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskTypeName: 'TaskTypeName',
      url: 'Url',
      usable: 'Usable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      monitorNumber: 'number',
      taskId: 'string',
      taskName: 'string',
      taskStatus: 'string',
      taskType: 'number',
      taskTypeName: 'string',
      url: 'string',
      usable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticTaskListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  hasNextPage?: string;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   * 
   * @example
   * true
   */
  hasPreviousPage?: boolean;
  /**
   * @remarks
   * Indicates whether the page is the first page.
   * 
   * @example
   * true
   */
  isFirstPage?: boolean;
  /**
   * @remarks
   * Indicates whether the page is the last page.
   * 
   * @example
   * true
   */
  isLastPage?: boolean;
  /**
   * @remarks
   * The task information.
   */
  list?: GetSyntheticTaskListResponseBodyPageInfoList[];
  /**
   * @remarks
   * The first page on the navigation bar.
   * 
   * @example
   * 1
   */
  navigateFirstPage?: string;
  /**
   * @remarks
   * The last page on the navigation bar.
   * 
   * @example
   * 3
   */
  navigateLastPage?: string;
  /**
   * @remarks
   * All navigation page numbers.
   * 
   * @example
   * 1,2,3
   */
  navigatePageNums?: string;
  /**
   * @remarks
   * The next page.
   * 
   * @example
   * 3
   */
  nextPage?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 10
   */
  pages?: string;
  /**
   * @remarks
   * The previous page.
   * 
   * @example
   * 1
   */
  prepage?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasNextPage: 'HasNextPage',
      hasPreviousPage: 'HasPreviousPage',
      isFirstPage: 'IsFirstPage',
      isLastPage: 'IsLastPage',
      list: 'List',
      navigateFirstPage: 'NavigateFirstPage',
      navigateLastPage: 'NavigateLastPage',
      navigatePageNums: 'NavigatePageNums',
      nextPage: 'NextPage',
      pages: 'Pages',
      prepage: 'Prepage',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNextPage: 'string',
      hasPreviousPage: 'boolean',
      isFirstPage: 'boolean',
      isLastPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetSyntheticTaskListResponseBodyPageInfoList },
      navigateFirstPage: 'string',
      navigateLastPage: 'string',
      navigatePageNums: 'string',
      nextPage: 'string',
      pages: 'string',
      prepage: 'string',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results.
   */
  pageInfo?: GetSyntheticTaskListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: GetSyntheticTaskListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

