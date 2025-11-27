// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoDependencyPolicyJobDependency extends $dara.Model {
  jobId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDependencyPolicy extends $dara.Model {
  jobDependency?: GetJobResponseBodyJobInfoDependencyPolicyJobDependency[];
  static names(): { [key: string]: string } {
    return {
      jobDependency: 'JobDependency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDependency: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoDependencyPolicyJobDependency },
    };
  }

  validate() {
    if(Array.isArray(this.jobDependency)) {
      $dara.Model.validateArray(this.jobDependency);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicyNetwork extends $dara.Model {
  /**
   * @remarks
   * Whether the resource is created in the zone corresponding to the passed-in VSwitch parameter.
   * 
   * *   true: The resource is created in the zone corresponding to the passed-in VSwitch parameter.
   * *   false: The resource is created in any zone that has resources.
   * 
   * @example
   * false
   */
  enableENIMapping?: boolean;
  /**
   * @remarks
   * Whether to create a public IP address.
   * 
   * Valid values:
   * 
   * *   false: false.
   * *   true: true.
   * 
   * @example
   * false
   */
  enableExternalIpAddress?: boolean;
  /**
   * @remarks
   * The VSwitch array.
   */
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      enableENIMapping: 'EnableENIMapping',
      enableExternalIpAddress: 'EnableExternalIpAddress',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableENIMapping: 'boolean',
      enableExternalIpAddress: 'boolean',
      vswitch: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitch)) {
      $dara.Model.validateArray(this.vswitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicyTags extends $dara.Model {
  /**
   * @remarks
   * The key of the job tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the job tag.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoDeploymentPolicy extends $dara.Model {
  /**
   * @remarks
   * The type of the resource. Only Dedicated is supported. You must enable a whitelist.
   * 
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The computing power level. The following disk categories are supported:
   * 
   * *   General
   * *   Performance
   * 
   * Default value: General
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The network configuration information.
   */
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
  /**
   * @remarks
   * The list of job tags.
   */
  tags?: GetJobResponseBodyJobInfoDeploymentPolicyTags[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      level: 'Level',
      network: 'Network',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      level: 'string',
      network: GetJobResponseBodyJobInfoDeploymentPolicyNetwork,
      tags: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoDeploymentPolicyTags },
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec extends $dara.Model {
  /**
   * @remarks
   * The end value of the array job index. Valid values: 0 to 4999. The value must be greater than or equal to the value of IndexStart.
   * 
   * @example
   * 9
   */
  indexEnd?: number;
  /**
   * @remarks
   * The starting value of the array job index. Valid values: 0 to 4999.
   * 
   * @example
   * 0
   */
  indexStart?: number;
  /**
   * @remarks
   * The interval of the array job index.
   * 
   * > If the array job property is IndexStart=1,IndexEnd=5, and IndexStep=2, the array job contains three subtasks. The values of the subtask indexes are 1,3, and 5.
   * 
   * @example
   * 1
   */
  indexStep?: number;
  static names(): { [key: string]: string } {
    return {
      indexEnd: 'IndexEnd',
      indexStart: 'IndexStart',
      indexStep: 'IndexStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexEnd: 'number',
      indexStart: 'number',
      indexStep: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorPolicy extends $dara.Model {
  /**
   * @remarks
   * The details of the array job.
   */
  arraySpec?: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec;
  /**
   * @remarks
   * The maximum number of nodes to run the job.
   * 
   * @example
   * 10
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      arraySpec: 'ArraySpec',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arraySpec: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec,
      maxCount: 'number',
    };
  }

  validate() {
    if(this.arraySpec && typeof (this.arraySpec as any).validate === 'function') {
      (this.arraySpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksExecutorStatus extends $dara.Model {
  /**
   * @remarks
   * Sub-job ID
   * 
   * @example
   * 0
   */
  arrayId?: number;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the scaling plan job.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the scaling plan job.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack instance is in the OUTDATED state.
   * 
   * @example
   * Creating executor
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      arrayId: 'ArrayId',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayId: 'number',
      createTime: 'string',
      endTime: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks extends $dara.Model {
  /**
   * @remarks
   * The size of the disk.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The type of the disk. The following disk categories are supported:
   * 
   * *   System: system disk.
   * *   Data: data disk.
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecResource extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs on which the job is run.
   * 
   * @example
   * 1
   */
  cores?: number;
  /**
   * @remarks
   * The array of the disks.
   */
  disks?: GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks[];
  enableHT?: boolean;
  hostNamePrefix?: string;
  instanceTypes?: string[];
  /**
   * @remarks
   * The memory capacity. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      enableHT: 'EnableHT',
      hostNamePrefix: 'HostNamePrefix',
      instanceTypes: 'InstanceTypes',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks },
      enableHT: 'boolean',
      hostNamePrefix: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicyExitCodeActions extends $dara.Model {
  action?: string;
  exitCode?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      exitCode: 'ExitCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      exitCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy extends $dara.Model {
  exitCodeActions?: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicyExitCodeActions[];
  retryCount?: number;
  static names(): { [key: string]: string } {
    return {
      exitCodeActions: 'ExitCodeActions',
      retryCount: 'RetryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exitCodeActions: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicyExitCodeActions },
      retryCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exitCodeActions)) {
      $dara.Model.validateArray(this.exitCodeActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @remarks
   * The pre-processing script. Base64 encoding is required.
   * 
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  prologScript?: string;
  /**
   * @remarks
   * The running-job script. Base64 encoding is required.
   * 
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor extends $dara.Model {
  /**
   * @remarks
   * Use ECS instances.
   */
  VM?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VM: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM,
    };
  }

  validate() {
    if(this.VM && typeof (this.VM as any).validate === 'function') {
      (this.VM as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasksTaskSpec extends $dara.Model {
  /**
   * @remarks
   * The resource information.
   */
  resource?: GetJobResponseBodyJobInfoTasksTaskSpecResource;
  retryPolicy?: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy;
  /**
   * @remarks
   * The task execution configurations.
   */
  taskExecutor?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      retryPolicy: 'RetryPolicy',
      taskExecutor: 'TaskExecutor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: GetJobResponseBodyJobInfoTasksTaskSpecResource,
      retryPolicy: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy,
      taskExecutor: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor },
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.retryPolicy && typeof (this.retryPolicy as any).validate === 'function') {
      (this.retryPolicy as any).validate();
    }
    if(Array.isArray(this.taskExecutor)) {
      $dara.Model.validateArray(this.taskExecutor);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoTasks extends $dara.Model {
  /**
   * @remarks
   * The task execution policy.
   */
  executorPolicy?: GetJobResponseBodyJobInfoTasksExecutorPolicy;
  /**
   * @remarks
   * The execution status of the task.
   */
  executorStatus?: GetJobResponseBodyJobInfoTasksExecutorStatus[];
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * task0
   */
  taskName?: string;
  /**
   * @remarks
   * The details of the task specification.
   */
  taskSpec?: GetJobResponseBodyJobInfoTasksTaskSpec;
  /**
   * @remarks
   * Indicate whether the job is a long-running job.
   * 
   * @example
   * true
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      executorStatus: 'ExecutorStatus',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: GetJobResponseBodyJobInfoTasksExecutorPolicy,
      executorStatus: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksExecutorStatus },
      taskName: 'string',
      taskSpec: GetJobResponseBodyJobInfoTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(this.executorPolicy && typeof (this.executorPolicy as any).validate === 'function') {
      (this.executorPolicy as any).validate();
    }
    if(Array.isArray(this.executorStatus)) {
      $dara.Model.validateArray(this.executorStatus);
    }
    if(this.taskSpec && typeof (this.taskSpec as any).validate === 'function') {
      (this.taskSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfo extends $dara.Model {
  /**
   * @remarks
   * The additional information about the application.
   * 
   * @example
   * {\\"xxx\\": \\"xxxxx\\"}
   */
  appExtraInfo?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2024-03-05 20:00:46
   */
  createTime?: string;
  dependencyPolicy?: GetJobResponseBodyJobInfoDependencyPolicy;
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicy?: GetJobResponseBodyJobInfoDeploymentPolicy;
  /**
   * @remarks
   * The time when the job is complete.
   * 
   * @example
   * 2024-03-05 20:01:48
   */
  endTime?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * Demo
   */
  jobDescription?: string;
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
   * The job name.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The type of the job scheduler.
   * 
   * @example
   * HPC
   */
  jobScheduler?: string;
  /**
   * @remarks
   * The time when the job started.
   * 
   * @example
   * 2024-03-05 20:00:48
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Pending: The job is being queued.
   * *   Initing: The job is being initialized.
   * *   Succeed: The job is successfully run.
   * *   Failed: The job failed to run.
   * *   Running: The job is running.
   * *   Exception: scheduling exception
   * *   Retrying: The job is being retried.
   * *   Expired: The job timed out.
   * *   Deleted: The job is deleted.
   * *   Suspended: job hibernation
   * *   Restarting: The job is being restarted.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The list of tasks. Only one task is supported.
   */
  tasks?: GetJobResponseBodyJobInfoTasks[];
  static names(): { [key: string]: string } {
    return {
      appExtraInfo: 'AppExtraInfo',
      createTime: 'CreateTime',
      dependencyPolicy: 'DependencyPolicy',
      deploymentPolicy: 'DeploymentPolicy',
      endTime: 'EndTime',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      startTime: 'StartTime',
      status: 'Status',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appExtraInfo: 'string',
      createTime: 'string',
      dependencyPolicy: GetJobResponseBodyJobInfoDependencyPolicy,
      deploymentPolicy: GetJobResponseBodyJobInfoDeploymentPolicy,
      endTime: 'string',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      startTime: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasks },
    };
  }

  validate() {
    if(this.dependencyPolicy && typeof (this.dependencyPolicy as any).validate === 'function') {
      (this.dependencyPolicy as any).validate();
    }
    if(this.deploymentPolicy && typeof (this.deploymentPolicy as any).validate === 'function') {
      (this.deploymentPolicy as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
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
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
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

