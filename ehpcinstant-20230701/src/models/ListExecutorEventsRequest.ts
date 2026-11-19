// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorEventsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of executor IDs. You can specify up to 100 IDs.
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
   * The level of the runtime event. Valid values:
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
   * The start time of the events. Events that occur after this time are returned. The time must be a UNIX timestamp based on the time zone of the region (UTC+8 for the Chinese site).
   * 
   * @example
   * 1703820113
   */
  timeAfter?: number;
  /**
   * @remarks
   * The end time of the events. Events that occur before this time are returned. The time must be a UNIX timestamp based on the time zone of the region (UTC+8 for the Chinese site).
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
   * The filter conditions for querying executors.
   */
  filter?: ListExecutorEventsRequestFilter;
  /**
   * @remarks
   * The page number. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Default value: 50. Maximum value: 100.
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

