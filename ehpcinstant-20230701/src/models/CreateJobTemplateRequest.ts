// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobTemplateRequestJobTemplateConfigDeploymentPolicyNetwork extends $dara.Model {
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

export class CreateJobTemplateRequestJobTemplateConfigDeploymentPolicyTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class CreateJobTemplateRequestJobTemplateConfigDeploymentPolicy extends $dara.Model {
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
   * The computing power level. This parameter is valid only when the resource type is economy. Valid values:
   * - General: general-purpose.
   * - Performance: performance-enhanced.
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The network configuration.
   */
  network?: CreateJobTemplateRequestJobTemplateConfigDeploymentPolicyNetwork;
  /**
   * @remarks
   * The resource pool of the job.
   * 
   * @example
   * my-pool
   */
  pool?: string;
  /**
   * @remarks
   * The priority of the job. A larger value indicates a higher scheduling priority for the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The tags of the job.
   */
  tags?: CreateJobTemplateRequestJobTemplateConfigDeploymentPolicyTags[];
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
      network: CreateJobTemplateRequestJobTemplateConfigDeploymentPolicyNetwork,
      pool: 'string',
      priority: 'number',
      tags: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigDeploymentPolicyTags },
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

export class CreateJobTemplateRequestJobTemplateConfigSecurityPolicySecurityGroup extends $dara.Model {
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

export class CreateJobTemplateRequestJobTemplateConfigSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * The security group.
   */
  securityGroup?: CreateJobTemplateRequestJobTemplateConfigSecurityPolicySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: CreateJobTemplateRequestJobTemplateConfigSecurityPolicySecurityGroup,
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

export class CreateJobTemplateRequestJobTemplateConfigTasksExecutorPolicyArraySpec extends $dara.Model {
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

export class CreateJobTemplateRequestJobTemplateConfigTasksExecutorPolicy extends $dara.Model {
  /**
   * @remarks
   * The details of the array job.
   */
  arraySpec?: CreateJobTemplateRequestJobTemplateConfigTasksExecutorPolicyArraySpec;
  /**
   * @remarks
   * The maximum number of nodes on which the job can run.
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
      arraySpec: CreateJobTemplateRequestJobTemplateConfigTasksExecutorPolicyArraySpec,
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecResourceDisks extends $dara.Model {
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecResource extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores in the runtime environment.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The array of cloud disks.
   */
  disks?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecResourceDisks[];
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
      disks: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecResourceDisks },
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicyExitCodeActions extends $dara.Model {
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
   * The exit code of the task. This code is used together with the Action parameter to form the retry rules for the job. Valid values: 0 to 255.
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The retry rules.
   */
  exitCodeActions?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicyExitCodeActions[];
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
      exitCodeActions: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicyExitCodeActions },
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainerEnvironmentVars extends $dara.Model {
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainer extends $dara.Model {
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
   * The arguments for the container startup commands.
   * 
   * @example
   * 60s
   */
  arg?: string[];
  /**
   * @remarks
   * The list of startup commands for the container.
   * 
   * @example
   * sleep
   */
  command?: string[];
  /**
   * @remarks
   * The environment variables of the container.
   */
  environmentVars?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainerEnvironmentVars[];
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
   * The list of mount parameters for the custom image registry. The parameters are in key-value pair format and passed in JSON.
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
      environmentVars: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainerEnvironmentVars },
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorVM extends $dara.Model {
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
   * The prolog script. The script must be Base64-encoded.
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutor extends $dara.Model {
  /**
   * @remarks
   * The container environment configuration.
   */
  container?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainer;
  /**
   * @remarks
   * The virtual machine environment configuration.
   */
  VM?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorContainer,
      VM: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutorVM,
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The list of mount parameters for the data volume. The parameters are in key-value pair format and passed in JSON.
   * 
   * @example
   * {"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   */
  mountOptions?: string;
  /**
   * @remarks
   * The directory where the data volume is mounted to the task.
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
   * The type of the data volume.
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

export class CreateJobTemplateRequestJobTemplateConfigTasksTaskSpec extends $dara.Model {
  /**
   * @remarks
   * The resource information of the runtime environment.
   */
  resource?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecResource;
  /**
   * @remarks
   * The retry policy of the task.
   */
  retryPolicy?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicy;
  /**
   * @remarks
   * The execution configuration of the task.
   */
  taskExecutor?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutor[];
  /**
   * @remarks
   * The list of data volumes mounted to the task. A maximum of 10 data volumes are supported.
   */
  volumeMount?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecVolumeMount[];
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
      resource: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecResource,
      retryPolicy: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecRetryPolicy,
      taskExecutor: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigTasksTaskSpecVolumeMount },
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

export class CreateJobTemplateRequestJobTemplateConfigTasks extends $dara.Model {
  /**
   * @remarks
   * The task execution policy.
   */
  executorPolicy?: CreateJobTemplateRequestJobTemplateConfigTasksExecutorPolicy;
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
   * The specification details of the task.
   */
  taskSpec?: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpec;
  /**
   * @remarks
   * Specifies whether the job is a long-running job. Valid values:
   * - true: The job is a background service job.
   * - false: The job is a batch job.
   * Default value: false.
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
      executorPolicy: CreateJobTemplateRequestJobTemplateConfigTasksExecutorPolicy,
      taskName: 'string',
      taskSpec: CreateJobTemplateRequestJobTemplateConfigTasksTaskSpec,
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

export class CreateJobTemplateRequestJobTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicy?: CreateJobTemplateRequestJobTemplateConfigDeploymentPolicy;
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
   * The name of the job.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * HPC
   */
  jobScheduler?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: CreateJobTemplateRequestJobTemplateConfigSecurityPolicy;
  /**
   * @remarks
   * The list of tasks. A maximum of 5 tasks are supported.
   */
  tasks?: CreateJobTemplateRequestJobTemplateConfigTasks[];
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
      deploymentPolicy: CreateJobTemplateRequestJobTemplateConfigDeploymentPolicy,
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      securityPolicy: CreateJobTemplateRequestJobTemplateConfigSecurityPolicy,
      tasks: { 'type': 'array', 'itemType': CreateJobTemplateRequestJobTemplateConfigTasks },
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

export class CreateJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the template.
   */
  jobTemplateConfig?: CreateJobTemplateRequestJobTemplateConfig;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Demo
   */
  jobTemplateDescription?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * my-template
   */
  jobTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      jobTemplateConfig: 'JobTemplateConfig',
      jobTemplateDescription: 'JobTemplateDescription',
      jobTemplateName: 'JobTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplateConfig: CreateJobTemplateRequestJobTemplateConfig,
      jobTemplateDescription: 'string',
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

