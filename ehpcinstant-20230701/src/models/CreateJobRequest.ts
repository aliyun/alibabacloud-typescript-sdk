// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestDependencyPolicyJobDependency extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-bjxxxxxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The dependency type. Valid values:
   * 
   * @example
   * AfterSucceeded
   */
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

export class CreateJobRequestDependencyPolicy extends $dara.Model {
  /**
   * @remarks
   * The job dependencies. A maximum of 10 groups are supported.
   */
  jobDependency?: CreateJobRequestDependencyPolicyJobDependency[];
  static names(): { [key: string]: string } {
    return {
      jobDependency: 'JobDependency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDependency: { 'type': 'array', 'itemType': CreateJobRequestDependencyPolicyJobDependency },
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

export class CreateJobRequestDeploymentPolicyNetwork extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create a public IP address for the job.
   * 
   * @example
   * true
   */
  enableExternalIpAddress?: boolean;
  /**
   * @remarks
   * The vSwitch array.
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

export class CreateJobRequestDeploymentPolicyTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the job. If you specify this parameter, the value cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the job. If you specify this parameter, the value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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

export class CreateJobRequestDeploymentPolicy extends $dara.Model {
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
   * The computing power level. This parameter takes effect only when the resource type is economy. Valid values:
   * 
   * - General: general-purpose.
   * - Performance: compute-optimized instance.
   * 
   * Default value: General
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The network configuration.
   */
  network?: CreateJobRequestDeploymentPolicyNetwork;
  /**
   * @remarks
   * The job resource pool.
   * 
   * @example
   * compute
   */
  pool?: string;
  /**
   * @remarks
   * The job priority. A larger value indicates a higher scheduling priority. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The job tag information. A maximum of 20 tags are supported.
   */
  tag?: CreateJobRequestDeploymentPolicyTag[];
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      level: 'Level',
      network: 'Network',
      pool: 'Pool',
      priority: 'Priority',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      level: 'string',
      network: CreateJobRequestDeploymentPolicyNetwork,
      pool: 'string',
      priority: 'number',
      tag: { 'type': 'array', 'itemType': CreateJobRequestDeploymentPolicyTag },
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestSecurityPolicySecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The security group ID array.
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

export class CreateJobRequestSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * The security group.
   */
  securityGroup?: CreateJobRequestSecurityPolicySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: CreateJobRequestSecurityPolicySecurityGroup,
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

export class CreateJobRequestTasksExecutorPolicyArraySpec extends $dara.Model {
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
   * The step size of the array job index.
   * > If the array job properties are IndexStart=1, IndexEnd=5, and IndexStep=2, the array job contains three child jobs with index values of 1, 3, and 5. Your application can access these values through environment variables.
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

export class CreateJobRequestTasksExecutorPolicy extends $dara.Model {
  /**
   * @remarks
   * The details of the array job. The sub-job index values are passed to the runtime environment through environment variables, which can be referenced by user applications. The environment variables include:
   * - EHPC_JOB_NAME: The job name, corresponding to the JobName parameter.
   * - EHPC_JOB_ID: The job ID.
   * - EHPC_TASK_NAME: The task name, corresponding to the TaskName parameter.
   * - EHPC_EXECUTOR_ID: The executor ID.
   * - EHPC_ARRAY_TASK_ID: The sub-job index value.
   * - EHPC_ARRAY_TASK_COUNT: The total number of sub-jobs.
   * - EHPC_ARRAY_TASK_MAX: The maximum sub-job index value, corresponding to the IndexStart parameter.
   * - EHPC_ARRAY_TASK_MIN: The minimum sub-job index value, corresponding to the IndexEnd parameter.
   * - EHPC_ARRAY_TASK_STEP: The sub-job index step, corresponding to the IndexStep parameter.
   */
  arraySpec?: CreateJobRequestTasksExecutorPolicyArraySpec;
  /**
   * @remarks
   * The maximum number of nodes for the job.
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
      arraySpec: CreateJobRequestTasksExecutorPolicyArraySpec,
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

export class CreateJobRequestTasksTaskSpecResourceDisks extends $dara.Model {
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The cloud disk type. Currently, only System is supported, which indicates a system cloud disk.
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

export class CreateJobRequestTasksTaskSpecResource extends $dara.Model {
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
  disks?: CreateJobRequestTasksTaskSpecResourceDisks[];
  /**
   * @remarks
   * Specifies whether hyper-threading is enabled in the runtime environment. Default value: true.
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The hostname prefix of the runtime environment. The following limits apply:
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The instance types of the runtime environment. A maximum of 5 instance types are supported.
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
      disks: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecResourceDisks },
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

export class CreateJobRequestTasksTaskSpecRetryPolicyExitCodeActions extends $dara.Model {
  /**
   * @remarks
   * The next action for the task.
   * 
   * This parameter is required.
   * 
   * @example
   * Retry
   */
  action?: string;
  /**
   * @remarks
   * The task exit code, which is used together with Action to form a job retry rule. Valid values: 0 to 255.
   * 
   * This parameter is required.
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

export class CreateJobRequestTasksTaskSpecRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The retry rules. A maximum of 10 rules are supported.
   */
  exitCodeActions?: CreateJobRequestTasksTaskSpecRetryPolicyExitCodeActions[];
  /**
   * @remarks
   * The number of retries. Valid values: 1 to 10. Default value: 3.
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
      exitCodeActions: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecRetryPolicyExitCodeActions },
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

export class CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * The environment variable name. The name must be 1 to 128 characters in length. The format is [0-9a-zA-Z] and underscores. The name cannot start with a digit.
   * 
   * @example
   * PATH
   */
  name?: string;
  /**
   * @remarks
   * The environment variable value. The value can be 0 to 256 characters in length.
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

export class CreateJobRequestTasksTaskSpecTaskExecutorContainer extends $dara.Model {
  /**
   * @remarks
   * The container application ID.
   * 
   * @example
   * ci-vm-32k6LXAi3cOG
   */
  appId?: string;
  /**
   * @remarks
   * The arguments for the container startup command. A maximum of 10 arguments are supported.
   */
  arg?: string[];
  /**
   * @remarks
   * The list of container startup commands. A maximum of 20 commands are supported, and each command can be up to 256 characters in length.
   */
  command?: string[];
  /**
   * @remarks
   * The environment variables of the container. A maximum of 20 environment variables are supported.
   */
  environmentVars?: CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars[];
  /**
   * @remarks
   * The container image.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc/hpl:latest
   */
  image?: string;
  /**
   * @remarks
   * The list of mount parameters for a self-managed image registry. The parameters are in key-value format and passed as JSON.
   * 
   * - Reference format: {"ImageRegistryType":"https","ImageRegistryServer":"xxx","ImageRegistryUserName":"xxx","ImageRegistryPassword":"xxx"}
   * 
   * @example
   * {"ImageRegistryType":"https","ImageRegistryServer":"xxx","ImageRegistryUserName":"xxx","ImageRegistryPassword":"xxx"}
   */
  imageRegistryOptions?: string;
  /**
   * @remarks
   * The container working directory.
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
      image: 'Image',
      imageRegistryOptions: 'ImageRegistryOptions',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      environmentVars: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars },
      image: 'string',
      imageRegistryOptions: 'string',
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

export class CreateJobRequestTasksTaskSpecTaskExecutorVMEnvironmentVars extends $dara.Model {
  name?: string;
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

export class CreateJobRequestTasksTaskSpecTaskExecutorVM extends $dara.Model {
  /**
   * @remarks
   * The virtual machine application ID.
   * 
   * @example
   * ci-vm-9jc58Pm5Leky
   */
  appId?: string;
  environmentVars?: CreateJobRequestTasksTaskSpecTaskExecutorVMEnvironmentVars[];
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @remarks
   * The logon password for the virtual machine environment. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * 
   * For Windows environments, the password cannot start with a forward slash (/).
   * 
   * > If you specify the Password parameter, use HTTPS to send the request to avoid password leaks.
   * 
   * @example
   * EHPC@1234
   */
  password?: string;
  /**
   * @remarks
   * The pre-processing script. The script must be Base64-encoded.
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
      environmentVars: 'EnvironmentVars',
      image: 'Image',
      password: 'Password',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      environmentVars: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutorVMEnvironmentVars },
      image: 'string',
      password: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestTasksTaskSpecTaskExecutor extends $dara.Model {
  /**
   * @remarks
   * The container environment settings.
   */
  container?: CreateJobRequestTasksTaskSpecTaskExecutorContainer;
  /**
   * @remarks
   * The virtual machine environment settings.
   */
  VM?: CreateJobRequestTasksTaskSpecTaskExecutorVM;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      VM: 'VM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateJobRequestTasksTaskSpecTaskExecutorContainer,
      VM: CreateJobRequestTasksTaskSpecTaskExecutorVM,
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

export class CreateJobRequestTasksTaskSpecVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The list of volume mount parameters. Specified in key-value format and passed as JSON.
   * - Reference format for mounting NAS: {"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   * > server specifies the mount point address of the NAS file system. path specifies a subdirectory under the NAS path, which must start with / and the directory must already exist. vers specifies the NFS protocol version for mounting NAS. Version 3 is recommended. options specifies custom parameters for mounting NAS, in the format "xxx,xxx,xxx".
   * 
   * - Reference format for mounting OSS: {"bucket":"xxxxx", "url":"oss-cn-heyuan-internal.aliyuncs.com","path":"/data","akId":"xxxxx","akSecret":"xxxxx"}
   * > bucket specifies the name of the OSS bucket. url specifies the endpoint of the OSS bucket. You can obtain this value from the overview page of the target bucket in the OSS console. path specifies the directory structure relative to the bucket root for mounting. The default value is /. The directory must already exist. akId specifies the AccessKey ID used for direct AccessKey authorization. akSecret specifies the AccessKey Secret used for direct AccessKey authorization.
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
   * Specifies whether the data volume is read-only. Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The supported volume type. Valid values:
   * - alicloud/nas: mounts a NAS file system.
   * - alicloud/oss: mounts an OSS bucket.
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

export class CreateJobRequestTasksTaskSpec extends $dara.Model {
  /**
   * @remarks
   * The runtime environment resource information.
   */
  resource?: CreateJobRequestTasksTaskSpecResource;
  /**
   * @remarks
   * The task retry policy.
   */
  retryPolicy?: CreateJobRequestTasksTaskSpecRetryPolicy;
  /**
   * @remarks
   * The task execution configuration.
   * 
   * This parameter is required.
   */
  taskExecutor?: CreateJobRequestTasksTaskSpecTaskExecutor[];
  /**
   * @remarks
   * The list of data volumes mounted to the task. A maximum of 10 volumes are supported.
   */
  volumeMount?: CreateJobRequestTasksTaskSpecVolumeMount[];
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
      resource: CreateJobRequestTasksTaskSpecResource,
      retryPolicy: CreateJobRequestTasksTaskSpecRetryPolicy,
      taskExecutor: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecTaskExecutor },
      volumeMount: { 'type': 'array', 'itemType': CreateJobRequestTasksTaskSpecVolumeMount },
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

export class CreateJobRequestTasks extends $dara.Model {
  /**
   * @remarks
   * The task execution policy.
   */
  executorPolicy?: CreateJobRequestTasksExecutorPolicy;
  /**
   * @remarks
   * The task name. The name must be 2 to 32 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * task0
   */
  taskName?: string;
  /**
   * @remarks
   * The task specification details.
   */
  taskSpec?: CreateJobRequestTasksTaskSpec;
  /**
   * @remarks
   * Specifies whether the job is long-running. Valid values:
   * 
   * - true: The job is a backend service job.
   * - false: The job is a batch job.
   * 
   * Default value: false.
   * 
   * @example
   * true
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
      executorPolicy: CreateJobRequestTasksExecutorPolicy,
      taskName: 'string',
      taskSpec: CreateJobRequestTasksTaskSpec,
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

export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The dependency policy.
   */
  dependencyPolicy?: CreateJobRequestDependencyPolicy;
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicy?: CreateJobRequestDeploymentPolicy;
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
   * The job name. The name must be 2 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  jobScheduler?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: CreateJobRequestSecurityPolicy;
  /**
   * @remarks
   * The task list. Currently, only one task is supported.
   * 
   * This parameter is required.
   */
  tasks?: CreateJobRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      dependencyPolicy: 'DependencyPolicy',
      deploymentPolicy: 'DeploymentPolicy',
      jobDescription: 'JobDescription',
      jobName: 'JobName',
      jobScheduler: 'JobScheduler',
      jobTemplateId: 'JobTemplateId',
      securityPolicy: 'SecurityPolicy',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyPolicy: CreateJobRequestDependencyPolicy,
      deploymentPolicy: CreateJobRequestDeploymentPolicy,
      jobDescription: 'string',
      jobName: 'string',
      jobScheduler: 'string',
      jobTemplateId: 'string',
      securityPolicy: CreateJobRequestSecurityPolicy,
      tasks: { 'type': 'array', 'itemType': CreateJobRequestTasks },
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

