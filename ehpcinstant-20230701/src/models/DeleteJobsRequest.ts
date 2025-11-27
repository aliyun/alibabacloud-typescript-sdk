// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteJobsRequestJobSpecTaskSpec extends $dara.Model {
  /**
   * @remarks
   * The list of array job indexes to be deleted.
   */
  arrayIndex?: number[];
  /**
   * @remarks
   * The name of the task to be deleted.
   * 
   * @example
   * task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrayIndex)) {
      $dara.Model.validateArray(this.arrayIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpec extends $dara.Model {
  /**
   * @remarks
   * The ID of the job to be deleted.\\
   * You can call the ListJobs operation to query job IDs.
   * 
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The task details of the job to be deleted.
   */
  taskSpec?: DeleteJobsRequestJobSpecTaskSpec[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      taskSpec: 'TaskSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      taskSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpecTaskSpec },
    };
  }

  validate() {
    if(Array.isArray(this.taskSpec)) {
      $dara.Model.validateArray(this.taskSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of executor IDs. A maximum of 100 IDs are supported.
   */
  executorIds?: string[];
  /**
   * @remarks
   * The type of the job scheduler.
   * 
   * *   HPC
   * *   K8S
   * 
   * Default value: HPC
   * 
   * @example
   * HPC
   */
  jobScheduler?: string;
  /**
   * @remarks
   * The information about the job to be deleted.
   */
  jobSpec?: DeleteJobsRequestJobSpec[];
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      jobScheduler: 'JobScheduler',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      jobScheduler: 'string',
      jobSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpec },
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(Array.isArray(this.jobSpec)) {
      $dara.Model.validateArray(this.jobSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

