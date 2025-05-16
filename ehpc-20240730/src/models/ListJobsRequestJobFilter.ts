// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsRequestJobFilterDiagnosis } from "./ListJobsRequestJobFilterDiagnosis";
import { ListJobsRequestJobFilterSortBy } from "./ListJobsRequestJobFilterSortBy";


export class ListJobsRequestJobFilter extends $dara.Model {
  /**
   * @remarks
   * The time when the job was last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since 1970-01-01T00:00:00Z.
   * 
   * @example
   * 1724123085
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The time when the job started. The value is a UNIX timestamp representing the number of seconds that have elapsed since 1970-01-01T00:00:00Z.
   * 
   * @example
   * 1724122486
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Job diagnosis and analysis list.
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
   * 
   * *   all: returns all jobs.
   * *   finished: returns completed jobs.
   * *   notfinish: returns uncompleted jobs.
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  jobStatus?: string;
  /**
   * @remarks
   * The compute nodes that run the jobs.
   */
  nodes?: string[];
  /**
   * @remarks
   * The queues to which the jobs belong.
   */
  queues?: string[];
  /**
   * @remarks
   * The result sorting configurations.
   */
  sortBy?: ListJobsRequestJobFilterSortBy;
  /**
   * @remarks
   * The users that run the jobs.
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

