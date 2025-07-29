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
  enableENIMapping?: boolean;
  enableExternalIpAddress?: boolean;
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
  tagKey?: string;
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
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  level?: string;
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
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
   * @example
   * 9
   */
  indexEnd?: number;
  /**
   * @example
   * 0
   */
  indexStart?: number;
  /**
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
  arraySpec?: GetJobResponseBodyJobInfoTasksExecutorPolicyArraySpec;
  /**
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
   * @example
   * 0
   */
  arrayId?: number;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  createTime?: string;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  endTime?: string;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
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
   * @example
   * 100
   */
  size?: number;
  /**
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
   * @example
   * 1
   */
  cores?: number;
  disks?: GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks[];
  instanceTypes?: string[];
  /**
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      instanceTypes: 'InstanceTypes',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': GetJobResponseBodyJobInfoTasksTaskSpecResourceDisks },
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
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  prologScript?: string;
  /**
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  script?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      prologScript: 'string',
      script: 'string',
      userName: 'string',
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
  resource?: GetJobResponseBodyJobInfoTasksTaskSpecResource;
  retryPolicy?: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy;
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
  executorPolicy?: GetJobResponseBodyJobInfoTasksExecutorPolicy;
  executorStatus?: GetJobResponseBodyJobInfoTasksExecutorStatus[];
  /**
   * @example
   * task0
   */
  taskName?: string;
  taskSpec?: GetJobResponseBodyJobInfoTasksTaskSpec;
  /**
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
  appExtraInfo?: string;
  /**
   * @example
   * 2024-03-05 20:00:46
   */
  createTime?: string;
  dependencyPolicy?: GetJobResponseBodyJobInfoDependencyPolicy;
  deploymentPolicy?: GetJobResponseBodyJobInfoDeploymentPolicy;
  /**
   * @example
   * 2024-03-05 20:01:48
   */
  endTime?: string;
  /**
   * @example
   * Demo
   */
  jobDescription?: string;
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * testJob
   */
  jobName?: string;
  jobScheduler?: string;
  /**
   * @example
   * 2024-03-05 20:00:48
   */
  startTime?: string;
  /**
   * @example
   * Succeed
   */
  status?: string;
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
  jobInfo?: GetJobResponseBodyJobInfo;
  /**
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

