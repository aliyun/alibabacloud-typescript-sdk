// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorEventsResponseBodyExecutorEventList extends $dara.Model {
  /**
   * @example
   * Executor created successfully
   */
  content?: string;
  /**
   * @example
   * job-xxxx-Task0-1
   */
  executorId?: string;
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * Normal
   */
  level?: string;
  /**
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
  executorEventList?: ListExecutorEventsResponseBodyExecutorEventList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
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

