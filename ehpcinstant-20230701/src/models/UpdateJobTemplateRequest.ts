// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicyNetwork extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to assign a public IP address to the job. Default value: false.
   * 
   * @example
   * false
   */
  enableExternalIpAddress?: boolean;
  /**
   * @remarks
   * The vSwitches.
   * 
   * @example
   * vsw-xxxx
   */
  vswitch?: string[];
  static names(): { [key: string]: string } {
    return {
      enableExternalIpAddress: 'EnableExternalIpAddress',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicyTags extends $dara.Model {
  /**
   * @remarks
   * The job tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The job tag value.
   * 
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

export class UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicy extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The computing power level. This parameter is valid only when the resource type is economy. Valid values: General: general-purpose. Performance: performance-enhanced.
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The network configuration.
   */
  network?: UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicyNetwork;
  /**
   * @remarks
   * The job resource pool.
   * 
   * @example
   * my-pool
   */
  pool?: string;
  /**
   * @remarks
   * The job priority. A larger value indicates a higher scheduling priority for the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The job tags.
   */
  tags?: UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicyTags[];
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
      network: UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicyNetwork,
      pool: 'string',
      priority: 'number',
      tags: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicyTags },
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

export class UpdateJobTemplateRequestJobTemplateConfigSecurityPolicySecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The security group IDs.
   * 
   * @example
   * sg-xxxx
   */
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

export class UpdateJobTemplateRequestJobTemplateConfigSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * The security group.
   */
  securityGroup?: UpdateJobTemplateRequestJobTemplateConfigSecurityPolicySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: UpdateJobTemplateRequestJobTemplateConfigSecurityPolicySecurityGroup,
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksExecutorPolicyArraySpec extends $dara.Model {
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
   * The start value of the array job index. Valid values: 0 to 4999.
   * 
   * @example
   * 0
   */
  indexStart?: number;
  /**
   * @remarks
   * The step size of the array job index.
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksExecutorPolicy extends $dara.Model {
  /**
   * @remarks
   * The array job details.
   */
  arraySpec?: UpdateJobTemplateRequestJobTemplateConfigTasksExecutorPolicyArraySpec;
  /**
   * @remarks
   * The maximum number of nodes for job execution.
   * 
   * @example
   * 1
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
      arraySpec: UpdateJobTemplateRequestJobTemplateConfigTasksExecutorPolicyArraySpec,
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecResourceDisks extends $dara.Model {
  /**
   * @remarks
   * The size of the cloud disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The type of the cloud disk.
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecResource extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs in the runtime environment.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The cloud disk array.
   */
  disks?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecResourceDisks[];
  /**
   * @remarks
   * Specifies whether hyper-threading is enabled in the runtime environment.
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The hostname prefix of the runtime environment.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The instance types of the runtime environment.
   * 
   * @example
   * ecs.c7a.8xlarge
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The memory size of the runtime environment. Unit: GiB.
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
      disks: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecResourceDisks },
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicyExitCodeActions extends $dara.Model {
  /**
   * @remarks
   * The next action of the task. Valid values:
   * - Retry: Retries the task.
   * - Exit: Exits the task.
   * 
   * @example
   * Retry
   */
  action?: string;
  /**
   * @remarks
   * The task exit code. This parameter is used together with Action to form the job retry rule. Valid values: 0 to 255.
   * 
   * @example
   * 1
   */
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The retry rules.
   */
  exitCodeActions?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicyExitCodeActions[];
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 5
   */
  retryCount?: number;
  static names(): { [key: string]: string } {
    return {
      exitCodeActions: 'ExitCodeActions',
      retryCount: 'RetryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exitCodeActions: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicyExitCodeActions },
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainerEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * /usr/local/bin
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainer extends $dara.Model {
  /**
   * @remarks
   * The ID of the container application.
   * 
   * @example
   * ci-vm-32k6LXAi3cOG
   */
  appId?: string;
  /**
   * @remarks
   * The arguments for the container startup command.
   * 
   * @example
   * 60s
   */
  arg?: string[];
  /**
   * @remarks
   * The list of container startup commands.
   * 
   * @example
   * sleep
   */
  command?: string[];
  /**
   * @remarks
   * The environment variables of the container.
   */
  environmentVars?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainerEnvironmentVars[];
  /**
   * @remarks
   * The GPU driver version.
   * 
   * @example
   * tesla=535
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc/hpl:latest
   */
  image?: string;
  /**
   * @remarks
   * The list of mount parameters for the self-managed image repository. The parameters are in key-value pair format and passed in JSON.
   * 
   * @example
   * {}
   */
  imageRegistryOptions?: string;
  /**
   * @remarks
   * Specifies whether the container runs in privileged mode. Default value: false.
   * 
   * @example
   * true
   */
  privileged?: boolean;
  /**
   * @remarks
   * The working directory of the container.
   * 
   * @example
   * /usr/local/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      arg: 'Arg',
      command: 'Command',
      environmentVars: 'EnvironmentVars',
      gpuDriverVersion: 'GpuDriverVersion',
      image: 'Image',
      imageRegistryOptions: 'ImageRegistryOptions',
      privileged: 'Privileged',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      environmentVars: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainerEnvironmentVars },
      gpuDriverVersion: 'string',
      image: 'string',
      imageRegistryOptions: 'string',
      privileged: 'boolean',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arg)) {
      $dara.Model.validateArray(this.arg);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorVM extends $dara.Model {
  /**
   * @remarks
   * The ID of the virtual machine application.
   * 
   * @example
   * ci-vm-9jc58Pm5Leky
   */
  appId?: string;
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
   * The logon password for the virtual machine environment.
   * 
   * @example
   * EHPC@1234
   */
  password?: string;
  /**
   * @remarks
   * The preprocessing script. The script must be Base64-encoded.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  prologScript?: string;
  /**
   * @remarks
   * The job execution script. The script must be Base64-encoded.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      image: 'Image',
      password: 'Password',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      image: 'string',
      password: 'string',
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutor extends $dara.Model {
  /**
   * @remarks
   * The container environment.
   */
  container?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainer;
  /**
   * @remarks
   * The virtual machine environment.
   */
  VM?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainer,
      VM: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorVM,
    };
  }

  validate() {
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.VM && typeof (this.VM as any).validate === 'function') {
      (this.VM as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The list of mount options for the data volume. The options are passed as key-value pairs in JSON format.
   * 
   * @example
   * {"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   */
  mountOptions?: string;
  /**
   * @remarks
   * The directory where the data volume is mounted for the task.
   * 
   * @example
   * /mnt
   */
  mountPath?: string;
  /**
   * @remarks
   * Specifies whether the data volume is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The supported data volume type.
   * 
   * @example
   * alicloud/nas
   */
  volumeDriver?: string;
  static names(): { [key: string]: string } {
    return {
      mountOptions: 'MountOptions',
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      volumeDriver: 'VolumeDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountOptions: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
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

export class UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpec extends $dara.Model {
  /**
   * @remarks
   * The resource information of the runtime environment.
   */
  resource?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecResource;
  /**
   * @remarks
   * The task retry policy.
   */
  retryPolicy?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicy;
  /**
   * @remarks
   * The task execution configuration.
   */
  taskExecutor?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutor[];
  /**
   * @remarks
   * The list of data volumes mounted to the task. You can mount up to 10 data volumes.
   */
  volumeMount?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecVolumeMount[];
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
      resource: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecResource,
      retryPolicy: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicy,
      taskExecutor: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpecVolumeMount },
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

export class UpdateJobTemplateRequestJobTemplateConfigTasks extends $dara.Model {
  /**
   * @remarks
   * The task execution policy.
   */
  executorPolicy?: UpdateJobTemplateRequestJobTemplateConfigTasksExecutorPolicy;
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
  taskSpec?: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpec;
  /**
   * @remarks
   * Specifies whether the job is long-running. Valid values: true: Background service job. false: Batch job. Default value: false.
   * 
   * @example
   * false
   */
  taskSustainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      executorPolicy: 'ExecutorPolicy',
      taskName: 'TaskName',
      taskSpec: 'TaskSpec',
      taskSustainable: 'TaskSustainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorPolicy: UpdateJobTemplateRequestJobTemplateConfigTasksExecutorPolicy,
      taskName: 'string',
      taskSpec: UpdateJobTemplateRequestJobTemplateConfigTasksTaskSpec,
      taskSustainable: 'boolean',
    };
  }

  validate() {
    if(this.executorPolicy && typeof (this.executorPolicy as any).validate === 'function') {
      (this.executorPolicy as any).validate();
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

export class UpdateJobTemplateRequestJobTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicy?: UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicy;
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
   * The job name.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The job scheduler type.
   * 
   * @example
   * HPC
   */
  jobScheduler?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: UpdateJobTemplateRequestJobTemplateConfigSecurityPolicy;
  /**
   * @remarks
   * The task list. A maximum of five tasks are supported.
   */
  tasks?: UpdateJobTemplateRequestJobTemplateConfigTasks[];
  static names(): { [key: string]: string } {
    return {
      deploymentPolicy: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      securityPolicy: 'SecurityPolicy',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPolicy: UpdateJobTemplateRequestJobTemplateConfigDeploymentPolicy,
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      securityPolicy: UpdateJobTemplateRequestJobTemplateConfigSecurityPolicy,
      tasks: { 'type': 'array', 'itemType': UpdateJobTemplateRequestJobTemplateConfigTasks },
    };
  }

  validate() {
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

export class UpdateJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template configuration.
   */
  jobTemplateConfig?: UpdateJobTemplateRequestJobTemplateConfig;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Demo
   */
  jobTemplateDescription?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my-template
   */
  jobTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      jobTemplateConfig: 'JobTemplateConfig',
      jobTemplateDescription: 'JobTemplateDescription',
      jobTemplateId: 'JobTemplateId',
      jobTemplateName: 'JobTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplateConfig: UpdateJobTemplateRequestJobTemplateConfig,
      jobTemplateDescription: 'string',
      jobTemplateId: 'string',
      jobTemplateName: 'string',
    };
  }

  validate() {
    if(this.jobTemplateConfig && typeof (this.jobTemplateConfig as any).validate === 'function') {
      (this.jobTemplateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

