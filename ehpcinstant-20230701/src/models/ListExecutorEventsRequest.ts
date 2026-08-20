// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorEventsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of Executor IDs. A maximum of 100 entries are supported.
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
   * The runtime event level. Valid values:
   * - Normal
   * - Warning
   * - Error
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * Events that occurred after this time. The value is a UNIX timestamp converted from the local time of the region (UTC+8 for Chinese mainland regions).
   * 
   * @example
   * 1703820113
   */
  timeAfter?: number;
  /**
   * @remarks
   * Events that occurred before this time. The value is a UNIX timestamp converted from the local time of the region (UTC+8 for Chinese mainland regions).
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
   * The filter conditions for querying Executors.
   */
  filter?: ListExecutorEventsRequestFilter;
  /**
   * @remarks
   * The page number.    
   * Minimum value: 1.    
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: 50. Maximum value: 100.
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

