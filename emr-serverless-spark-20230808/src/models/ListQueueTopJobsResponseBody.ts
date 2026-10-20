// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueTopJobsResponseBodyQueueTopJobsJobs extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores requested by the job.
   * 
   * @example
   * 8
   */
  cpuCores?: string;
  /**
   * @remarks
   * The number of CUs consumed by the job.
   * 
   * @example
   * 8
   */
  cu?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-1234abcd
   */
  jobId?: string;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * spark-batch
   */
  jobType?: string;
  /**
   * @remarks
   * The amount of memory requested by the job.
   * 
   * @example
   * 32
   */
  memoryGiB?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      cu: 'cu',
      jobId: 'jobId',
      jobType: 'jobType',
      memoryGiB: 'memoryGiB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      cu: 'string',
      jobId: 'string',
      jobType: 'string',
      memoryGiB: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueTopJobsResponseBodyQueueTopJobs extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: ListQueueTopJobsResponseBodyQueueTopJobsJobs[];
  /**
   * @remarks
   * The maximum number of records returned in a single request.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * dev_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The total number of CUs consumed by the queue.
   * 
   * @example
   * 128
   */
  totalCu?: string;
  /**
   * @remarks
   * The total number of jobs in the queue.
   * 
   * @example
   * 25
   */
  totalJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      maxResults: 'maxResults',
      queueName: 'queueName',
      totalCu: 'totalCu',
      totalJobCount: 'totalJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListQueueTopJobsResponseBodyQueueTopJobsJobs },
      maxResults: 'string',
      queueName: 'string',
      totalCu: 'string',
      totalJobCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueTopJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details.
   */
  queueTopJobs?: ListQueueTopJobsResponseBodyQueueTopJobs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queueTopJobs: 'queueTopJobs',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueTopJobs: ListQueueTopJobsResponseBodyQueueTopJobs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queueTopJobs && typeof (this.queueTopJobs as any).validate === 'function') {
      (this.queueTopJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

