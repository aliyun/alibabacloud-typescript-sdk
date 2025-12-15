// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs used by the job on each node.
   * 
   * @example
   * 2
   */
  cores?: string;
  /**
   * @remarks
   * The number of GPUs used by the job on each node.
   * 
   * @example
   * 1
   */
  gpus?: string;
  /**
   * @remarks
   * The memory size used by the job on each node.
   * 
   * @example
   * 1gb
   */
  memory?: string;
  /**
   * @remarks
   * The number of nodes that are used to run the job.
   * 
   * @example
   * 1
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

export class GetJobResponseBodyJobInfoResourcesUsed extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs used by the job on each node.
   * 
   * @example
   * 2
   */
  cores?: string;
  /**
   * @remarks
   * The memory size used by the job on each node.
   * 
   * @example
   * 512mb
   */
  memory?: string;
  /**
   * @remarks
   * The number of nodes that are used to run the job.
   * 
   * @example
   * 2
   */
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      memory: 'Memory',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
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

export class GetJobResponseBodyJobInfoVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * ProxyIP
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * 10.x.x.x
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetJobResponseBodyJobInfo extends $dara.Model {
  /**
   * @remarks
   * The parent job ID. If the return value is a non-empty string, the job is an array job.
   * 
   * @example
   * 1
   */
  arrayJobId?: string;
  /**
   * @remarks
   * The sub-job ID. This parameter is valid when the ArrayJobId parameter is a non-empty string.
   * 
   * @example
   * 3
   */
  arrayJobSubId?: string;
  /**
   * @remarks
   * The job queue. If the job is not in a queue, the output is empty.
   * 
   * The format is X-Y:Z. X indicates the first index, Y indicates the final index, and Z indicates the step size. For example, 2-7:2 indicates three sub-jobs numbered 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The command that is used to run the job.
   * 
   * @example
   * /home/huangsf/ehpc/job_meta.pbs
   */
  commandLine?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2024-08-16T10:52:48
   */
  createTime?: string;
  /**
   * @remarks
   * The error log file of the job.
   * 
   * @example
   * /home/xxx/STDIN.e1
   */
  errorLog?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * {}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The queue to which the job belongs.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2024-08-16T10:52:48
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The compute nodes that are used to run the job.
   * 
   * @example
   * compute000
   */
  nodeList?: string;
  /**
   * @remarks
   * The standard output log file of the job.
   * 
   * @example
   * /home/xxx/STDIN.o1
   */
  outputLog?: string;
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The resources that were requested when the job was submitted.
   */
  resources?: GetJobResponseBodyJobInfoResources;
  /**
   * @remarks
   * The resources that are actually used by the job.
   */
  resourcesUsed?: GetJobResponseBodyJobInfoResourcesUsed;
  /**
   * @remarks
   * The user to which the job belongs or that is used to submit the job. This user is a cluster-side user.
   * 
   * @example
   * testuser
   */
  runasUser?: string;
  /**
   * @remarks
   * The time when the job was started.
   * 
   * @example
   * 2024-08-16T10:52:48
   */
  startTime?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The variables of the job.
   */
  variables?: GetJobResponseBodyJobInfoVariables[];
  static names(): { [key: string]: string } {
    return {
      arrayJobId: 'ArrayJobId',
      arrayJobSubId: 'ArrayJobSubId',
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      createTime: 'CreateTime',
      errorLog: 'ErrorLog',
      extraInfo: 'ExtraInfo',
      jobId: 'JobId',
      jobName: 'JobName',
      jobQueue: 'JobQueue',
      lastModifyTime: 'LastModifyTime',
      nodeList: 'NodeList',
      outputLog: 'OutputLog',
      priority: 'Priority',
      resources: 'Resources',
      resourcesUsed: 'ResourcesUsed',
      runasUser: 'RunasUser',
      startTime: 'StartTime',
      state: 'State',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayJobId: 'string',
      arrayJobSubId: 'string',
      arrayRequest: 'string',
      commandLine: 'string',
      createTime: 'string',
      errorLog: 'string',
      extraInfo: 'string',
      jobId: 'string',
      jobName: 'string',
      jobQueue: 'string',
      lastModifyTime: 'string',
      nodeList: 'string',
      outputLog: 'string',
      priority: 'string',
      resources: GetJobResponseBodyJobInfoResources,
      resourcesUsed: GetJobResponseBodyJobInfoResourcesUsed,
      runasUser: 'string',
      startTime: 'string',
      state: 'string',
      variables: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoVariables },
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.resourcesUsed && typeof (this.resourcesUsed as any).validate === 'function') {
      (this.resourcesUsed as any).validate();
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details.
   */
  jobInfo?: GetJobResponseBodyJobInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0****-1335-****-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.jobInfo && typeof (this.jobInfo as any).validate === 'function') {
      (this.jobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

