// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequestJobFilterDiagnosis extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the job diagnostic threshold.
   * 
   * @example
   * greater
   */
  operator?: string;
  /**
   * @remarks
   * The job diagnostic analysis metric.
   * 
   * @example
   * run_duration
   */
  option?: string;
  /**
   * @remarks
   * The job diagnostic threshold.
   * 
   * @example
   * 24
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      option: 'Option',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      option: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestJobFilterSortBy extends $dara.Model {
  /**
   * @remarks
   * Sorts jobs by execution time. Valid values:
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * asc
   */
  executeOrder?: string;
  /**
   * @remarks
   * Sorts jobs by queue wait time. Valid values:
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * desc
   */
  pendOrder?: string;
  /**
   * @remarks
   * Sorts jobs by submission time. Valid values:
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * Default value: desc.
   * 
   * @example
   * asc
   */
  submitOrder?: string;
  static names(): { [key: string]: string } {
    return {
      executeOrder: 'ExecuteOrder',
      pendOrder: 'PendOrder',
      submitOrder: 'SubmitOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeOrder: 'string',
      pendOrder: 'string',
      submitOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequestJobFilter extends $dara.Model {
  /**
   * @remarks
   * The last update time of the job. The value is a UNIX timestamp representing the number of seconds that have elapsed since 1970-01-01T00:00:00Z.
   * 
   * @example
   * 1724123085
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time of the job. The value is a UNIX timestamp representing the number of seconds that have elapsed since 1970-01-01T00:00:00Z.
   * 
   * @example
   * 1724122486
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The job diagnostic analysis list.
   */
  diagnosis?: ListJobsRequestJobFilterDiagnosis[];
  /**
   * @remarks
   * The job name. Fuzzy match is supported.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * - all: all statuses.
   * - finished: completed.
   * - notfinish: not completed.
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  jobStatus?: string;
  /**
   * @remarks
   * The list of compute nodes that run the jobs.
   */
  nodes?: string[];
  /**
   * @remarks
   * The list of queues that run the jobs.
   */
  queues?: string[];
  /**
   * @remarks
   * The sorting configuration for the job list.
   */
  sortBy?: ListJobsRequestJobFilterSortBy;
  /**
   * @remarks
   * The list of users who run the jobs.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      diagnosis: 'Diagnosis',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      nodes: 'Nodes',
      queues: 'Queues',
      sortBy: 'SortBy',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      diagnosis: { 'type': 'array', 'itemType': ListJobsRequestJobFilterDiagnosis },
      jobName: 'string',
      jobStatus: 'string',
      nodes: { 'type': 'array', 'itemType': 'string' },
      queues: { 'type': 'array', 'itemType': 'string' },
      sortBy: ListJobsRequestJobFilterSortBy,
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.diagnosis)) {
      $dara.Model.validateArray(this.diagnosis);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    if(this.sortBy && typeof (this.sortBy as any).validate === 'function') {
      (this.sortBy as any).validate();
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call [ListClusters](https://help.aliyun.com/document_detail/87116.html) to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-csbua72***
   */
  clusterId?: string;
  /**
   * @remarks
   * The job filter information.
   */
  jobFilter?: ListJobsRequestJobFilter;
  /**
   * @remarks
   * The page number of the list.
   * - Minimum value: 1.
   * - Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page when using paged query. Paging is applied to the results.
   * - Maximum value: 50.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobFilter: 'JobFilter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobFilter: ListJobsRequestJobFilter,
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    if(this.jobFilter && typeof (this.jobFilter as any).validate === 'function') {
      (this.jobFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

