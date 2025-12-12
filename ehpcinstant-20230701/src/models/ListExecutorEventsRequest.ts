// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorEventsRequestFilter extends $dara.Model {
  executorIds?: string[];
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
   * 1703820113
   */
  timeAfter?: number;
  /**
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
  filter?: ListExecutorEventsRequestFilter;
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

