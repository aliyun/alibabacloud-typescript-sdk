// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorEventsResponseBodyExecutorEventList extends $dara.Model {
  /**
   * @remarks
   * The content of the running event.
   * 
   * @example
   * Executor created successfully
   */
  content?: string;
  /**
   * @remarks
   * The ID of the executor. The format is JobId-TaskName-ArrayIndex.
   * 
   * @example
   * job-xxxx-Task0-1
   */
  executorId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The level of the running event. Valid values:
   * 
   * *   Normal
   * *   Warning
   * *   Error
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * The event of the running event.
   * 
   * @example
   * 2024-02-20 10:04:13
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      executorId: 'ExecutorId',
      jobId: 'JobId',
      level: 'Level',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      executorId: 'string',
      jobId: 'string',
      level: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the running event.
   */
  executorEventList?: ListExecutorEventsResponseBodyExecutorEventList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      executorEventList: 'ExecutorEventList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorEventList: { 'type': 'array', 'itemType': ListExecutorEventsResponseBodyExecutorEventList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executorEventList)) {
      $dara.Model.validateArray(this.executorEventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

