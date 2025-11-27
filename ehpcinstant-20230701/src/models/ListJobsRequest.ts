// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The job name. Fuzzy search is supported.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Pending
   * *   initing
   * *   Succeed
   * *   Failed
   * *   Running
   * *   Exception
   * *   Retrying
   * *   Expired
   * *   Suspended
   * *   Restarting
   * *   Deleted
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * For jobs submitted after this time, the time in the region is converted into a UNIX timestamp (UI8).
   * 
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @remarks
   * For jobs submitted before this time, the time in the region is converted into a Unix timestamp (for domestic sites, the UI8 region).
   * 
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      status: 'string',
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestSortBy extends $dara.Model {
  /**
   * @remarks
   * The sorting label. Valid values:
   * 
   * *   time_start
   * *   job_name
   * 
   * @example
   * time_start
   */
  label?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   ASC (default): ascending order
   * *   DESC: descending order
   * 
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Queries job filter conditions.
   */
  filter?: ListJobsRequestFilter;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
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
  /**
   * @remarks
   * The sorting method.
   */
  sortBy?: ListJobsRequestSortBy;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListJobsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: ListJobsRequestSortBy,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.sortBy && typeof (this.sortBy as any).validate === 'function') {
      (this.sortBy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

