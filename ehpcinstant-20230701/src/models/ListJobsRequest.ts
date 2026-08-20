// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequestFilterTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * job-xxxx
   */
  jobId?: string;
  jobIds?: string[];
  /**
   * @remarks
   * The name of the job. Fuzzy search is supported.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @example
   * MyPool
   */
  poolName?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * - Pending: The job is in the queue.
   * 
   * - Initing: The job is initializing.
   * 
   * - Succeeded: The job was successful.
   * 
   * - Failed: The job failed.
   * 
   * - Running: The job is running.
   * 
   * - Exception: A scheduling exception occurred.
   * 
   * - Retrying: The job is being retried.
   * 
   * - Expired: The job timed out.
   * 
   * - Suspended: The job is in hibernation.
   * 
   * - Restarting: The job is restarting.
   * 
   * - Deleted: The job is deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  tag?: ListJobsRequestFilterTag[];
  /**
   * @remarks
   * The time after which the jobs were submitted. This is a UNIX timestamp based on the local time of the region. For sites in the Chinese mainland, the time zone is UTC+8.
   * 
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @remarks
   * The time before which the jobs were submitted. This is a UNIX timestamp based on the local time of the region. For sites in the Chinese mainland, the time zone is UTC+8.
   * 
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobIds: 'JobIds',
      jobName: 'JobName',
      jobTemplateId: 'JobTemplateId',
      poolName: 'PoolName',
      status: 'Status',
      tag: 'Tag',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
      jobName: 'string',
      jobTemplateId: 'string',
      poolName: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListJobsRequestFilterTag },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestSortBy extends $dara.Model {
  /**
   * @remarks
   * The field to sort by. Valid values:
   * 
   * - time_start
   * 
   * - job_name
   * 
   * @example
   * time_start
   */
  label?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC (default): Ascending
   * 
   * - DESC: Descending
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
   * The filter conditions for querying jobs.
   */
  filter?: ListJobsRequestFilter;
  /**
   * @remarks
   * The current page number.
   * 
   * Start value: 1
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 50. The maximum value is 100.
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

