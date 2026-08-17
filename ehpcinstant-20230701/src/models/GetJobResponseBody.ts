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
   * Indicates whether resources are created in the zone that corresponds to the specified vSwitch.
   * 
   * - true: Resources are created in the zone that corresponds to the specified vSwitch.
   * 
   * - false: Resources are created in any zone that has available resources.
   * 
   * @example
   * false
   */
  enableENIMapping?: boolean;
  /**
   * @remarks
   * Indicates whether a public IP address is created.
   * 
   * @example
   * false
   */
  enableExternalIpAddress?: boolean;
  /**
   * @remarks
   * The vSwitch array.
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
   * The job tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The job tag value.
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
   * The resource type. Currently, only Dedicated is supported. You must be added to the whitelist to use this feature.
   * 
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The computing power level. Valid values:
   * - General: general-purpose.
   * - Performance: compute-optimized.
   * 
   * Default value: General.
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The network configuration.
   */
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
  /**
   * @example
   * testpool
   */
  pool?: string;
  priority?: number;
  /**
   * @remarks
   * The job tag list.
   */
  tags?: GetJobResponseBodyJobInfoDeploymentPolicyTags[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      level: 'Level',
      network: 'Network',
      pool: 'Pool',
      priority: 'Priority',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      level: 'string',
      network: GetJobResponseBodyJobInfoDeploymentPolicyNetwork,
      pool: 'string',
      priority: 'number',
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

export class GetJobResponseBodyJobInfoSecurityPolicySecurityGroup extends $dara.Model {
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobInfoSecurityPolicy extends $dara.Model {
  securityGroup?: GetJobResponseBodyJobInfoSecurityPolicySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: GetJobResponseBodyJobInfoSecurityPolicySecurityGroup,
    };
  }

  validate() {
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
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
   * The end value of the array job index. Valid values: 0 to 4999. The value must be greater than or equal to IndexStart.
   * 
   * @example
   * 9
   */
  indexEnd?: number;
  /**
   * @remarks
   * The start value of the array job index. Valid values: 0 to 4999.
   * 
   * @example
   * 0
   */
  indexStart?: number;
  /**
   * @remarks
   * The interval of the array job index.
   * > If the array job properties are IndexStart=1, IndexEnd=5, and IndexStep=2, the array job contains three subtasks with indexes 1, 3, and 5.
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
   * The array job details.
   */
  arraySpec?: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec;
  /**
   * @remarks
   * The maximum number of nodes for running the job.
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
   * The subtask ID.
   * 
   * @example
   * 0
   */
  arrayId?: number;
  /**
   * @remarks
   * The job creation time.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  createTime?: string;
  /**
   * @remarks
   * The job end time.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  endTime?: string;
  /**
   * @remarks
   * The job start time.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  startTime?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The status reason description.
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
   * The cloud disk size.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   * - System: system cloud disk.
   * - Data: data cloud disk.
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
   * The number of CPUs used to run the job.
   * 
   * @example
   * 1
   */
  cores?: number;
  /**
   * @remarks
   * The cloud disk array.
   */
  disks?: GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks[];
  enableHT?: boolean;
  hostNamePrefix?: string;
  instanceTypes?: string[];
  /**
   * @remarks
   * The total amount of memory resources. Unit: GiB.
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
   * The preprocessing script. The script must be Base64-encoded.
   * 
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  prologScript?: string;
  /**
   * @remarks
   * The job execution script. The script must be Base64-encoded.
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
   * The ECS instance configuration.
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

export class GetJobResponseBodyJobInfoTasksTaskSpecVolumeMount extends $dara.Model {
  mountOptions?: string;
  mountPath?: string;
  volumeDriver?: string;
  static names(): { [key: string]: string } {
    return {
      mountOptions: 'MountOptions',
      mountPath: 'MountPath',
      volumeDriver: 'VolumeDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountOptions: 'string',
      mountPath: 'string',
      volumeDriver: 'string',
    };
  }

  validate() {
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
   * The task execution configuration.
   */
  taskExecutor?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor[];
  volumeMount?: GetJobResponseBodyJobInfoTasksTaskSpecVolumeMount[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      retryPolicy: 'RetryPolicy',
      taskExecutor: 'TaskExecutor',
      volumeMount: 'VolumeMount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: GetJobResponseBodyJobInfoTasksTaskSpecResource,
      retryPolicy: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy,
      taskExecutor: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecVolumeMount },
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
    if(Array.isArray(this.volumeMount)) {
      $dara.Model.validateArray(this.volumeMount);
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
   * The task execution status.
   */
  executorStatus?: GetJobResponseBodyJobInfoTasksExecutorStatus[];
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * task0
   */
  taskName?: string;
  /**
   * @remarks
   * The task specification details.
   */
  taskSpec?: GetJobResponseBodyJobInfoTasksTaskSpec;
  /**
   * @remarks
   * Indicates whether the job is long-running.
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
   * The application additional information.
   * 
   * @example
   * {\\"xxx\\": \\"xxxxx\\"}
   */
  appExtraInfo?: string;
  /**
   * @remarks
   * The job submission time.
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
   * The job end time.
   * 
   * @example
   * 2024-03-05 20:01:48
   */
  endTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Demo
   */
  jobDescription?: string;
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
   * The job name.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  jobScheduler?: string;
  securityPolicy?: GetJobResponseBodyJobInfoSecurityPolicy;
  /**
   * @remarks
   * The job start time.
   * 
   * @example
   * 2024-03-05 20:00:48
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Pending: the job is queued.
   * - Initing: the job is being initialized.
   * - Succeed: the job succeeded.
   * - Failed: the job failed.
   * - Running: the job is running.
   * - Exception: a scheduling exception occurred.
   * - Retrying: the job is being retried.
   * - Expired: the job timed out.
   * - Deleted: the job is deleted.
   * - Suspended: the job is suspended.
   * - Restarting: the job is being restarted.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The task list. Currently, only one task is supported.
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
      securityPolicy: 'SecurityPolicy',
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
      securityPolicy: GetJobResponseBodyJobInfoSecurityPolicy,
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
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
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

