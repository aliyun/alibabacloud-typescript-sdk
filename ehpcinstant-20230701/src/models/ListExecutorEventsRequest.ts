// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorEventsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of executor IDs. A maximum of 100 IDs are supported.
   */
  executorIds?: string[];
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
   * The level of the running event. Valid value:
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
   * For jobs submitted after this time, the time in the region is converted into a Unix timestamp (UI8 regionfor Aliyun sites).
   * 
   * @example
   * 1703820113
   */
  timeAfter?: number;
  /**
   * @remarks
   * For jobs submitted before this time, the time in the region is converted into a Unix timestamp (UI8 regionfor Aliyun sites).
   * 
   * @example
   * 1703819914
   */
  timeBefore?: number;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      jobId: 'JobId',
      level: 'Level',
      timeAfter: 'TimeAfter',
      timeBefore: 'TimeBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      level: 'string',
      timeAfter: 'number',
      timeBefore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Queries the Executor filter conditions.
   */
  filter?: ListExecutorEventsRequestFilter;
  /**
   * @remarks
   * The current page number.\\
   * Starting value: 1\\
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListExecutorEventsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

