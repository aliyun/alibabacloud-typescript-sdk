// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyJobsJobSpecResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs that were used to run the job.
   * 
   * @example
   * 6
   */
  cores?: string;
  /**
   * @remarks
   * The number of GPUs that were used to run the job.
   * 
   * @example
   * 0
   */
  gpus?: string;
  /**
   * @remarks
   * The size of memory that was used to run the job.
   * 
   * @example
   * 1536MB
   */
  memory?: string;
  /**
   * @remarks
   * The number of compute nodes that were used to run the job.
   * 
   * @example
   * 3
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      gpus: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobSpecResourcesActualOccupied extends $dara.Model {
  /**
   * @remarks
   * Number of CPU cores.
   * 
   * @example
   * 4
   */
  cores?: string;
  /**
   * @remarks
   * Number of CPUs
   * 
   * @example
   * 0
   */
  gpus?: string;
  /**
   * @remarks
   * Number of memory.
   * 
   * @example
   * 982MB
   */
  memory?: string;
  /**
   * @remarks
   * Number of compute nodes.
   * 
   * @example
   * 2
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpus: 'Gpus',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      gpus: 'string',
      memory: 'string',
      nodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobSpec extends $dara.Model {
  /**
   * @remarks
   * The array job ID.
   * 
   * @example
   * 4
   */
  arrayJobId?: string;
  /**
   * @remarks
   * The ID of the job in the array.
   * 
   * @example
   * 1
   */
  arrayJobSubId?: string;
  /**
   * @remarks
   * The queue format of the job.
   * 
   * *   If the job is not in a queue, the output is empty.
   * *   The format is X-Y:Z. X indicates the first index, Y indicates the final index, and Z indicates the step size. For example, 2-7:2 indicates three sub-jobs numbered 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * jobDescription
   */
  comment?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * comp
   */
  jobQueue?: string;
  /**
   * @remarks
   * The time when the job was last updated.
   * 
   * @example
   * 1724123085
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The compute nodes that were used to run the job.
   * 
   * @example
   * compute[002,005,003]
   */
  nodeList?: string;
  /**
   * @remarks
   * The job priority. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The information about the resources required to run the job.
   */
  resources?: ListJobsResponseBodyJobsJobSpecResources;
  /**
   * @remarks
   * Actual resource usage of the job program
   */
  resourcesActualOccupied?: ListJobsResponseBodyJobsJobSpecResourcesActualOccupied;
  /**
   * @remarks
   * The user that ran the job.
   * 
   * @example
   * testuser1
   */
  runasUser?: string;
  /**
   * @remarks
   * Job start time.
   * 
   * @example
   * 1724122486
   */
  startTime?: string;
  /**
   * @remarks
   * The job state. Valid values: (PBS cluster and Slurm cluster)
   * 
   * *   FINISHED/Completed
   * *   RUNNING/Running
   * *   QUEUED/Pending
   * *   FAILED/Failed
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The error output path.
   * 
   * @example
   * ./Temp
   */
  stderrPath?: string;
  /**
   * @remarks
   * The standard output path.
   * 
   * @example
   * ./Temp
   */
  stdoutPath?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1724122486
   */
  submitTime?: string;
  /**
   * @remarks
   * The variables of the job.
   * 
   * @example
   * {"PBS_O_SHELL":"/bin/bash", 	"PBS_O_HOST":"manager", 	"PBS_O_SYSTEM":"Linux", 	"PBS_O_LANG":"en_US.UTF-8", 	"PBS_O_QUEUE":"workq"}
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayJobId: 'ArrayJobId',
      arrayJobSubId: 'ArrayJobSubId',
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      jobQueue: 'JobQueue',
      lastModifyTime: 'LastModifyTime',
      nodeList: 'NodeList',
      priority: 'Priority',
      resources: 'Resources',
      resourcesActualOccupied: 'ResourcesActualOccupied',
      runasUser: 'RunasUser',
      startTime: 'StartTime',
      state: 'State',
      stderrPath: 'StderrPath',
      stdoutPath: 'StdoutPath',
      submitTime: 'SubmitTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayJobId: 'string',
      arrayJobSubId: 'string',
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      jobQueue: 'string',
      lastModifyTime: 'string',
      nodeList: 'string',
      priority: 'string',
      resources: ListJobsResponseBodyJobsJobSpecResources,
      resourcesActualOccupied: ListJobsResponseBodyJobsJobSpecResourcesActualOccupied,
      runasUser: 'string',
      startTime: 'string',
      state: 'string',
      stderrPath: 'string',
      stdoutPath: 'string',
      submitTime: 'string',
      variables: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.resourcesActualOccupied && typeof (this.resourcesActualOccupied as any).validate === 'function') {
      (this.resourcesActualOccupied as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The job configurations.
   */
  jobSpec?: ListJobsResponseBodyJobsJobSpec;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      jobSpec: ListJobsResponseBodyJobsJobSpec,
    };
  }

  validate() {
    if(this.jobSpec && typeof (this.jobSpec as any).validate === 'function') {
      (this.jobSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The jobs.
   */
  jobs?: ListJobsResponseBodyJobs[];
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EABFBD93-58BE-53F3-BBFE-8654BB2E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

