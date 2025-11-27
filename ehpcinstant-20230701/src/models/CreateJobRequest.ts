// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestDependencyPolicyJobDependency extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-bjxxxxxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The type of the dependency. Valid values:
   * 
   * *   AfterSucceeded: **All subtasks** of the dependent job or array job succeed. The exit code is 0.
   * *   AfterFailed: **All subtasks** of the dependent job or array job fail. The exit code is not 0.
   * *   AfterAny: The dependent job completes (succeeds or fails).
   * *   AfterCorresponding: The subtask corresponding to the dependent array job succeeds. The exit code is 0.
   * 
   * Default value: AfterSucceeded.
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
   * The job dependency. A maximum of 10 groups.
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
   * Whether the job creates a public IP address.
   * 
   * *   true: creates a public IP address.
   * *   false: does not create a public IP address.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableExternalIpAddress?: boolean;
  /**
   * @remarks
   * The VSwitch array.
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
   * The key of the job tag. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the job tag. You can specify empty strings as tag values. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * The resource type,
   * 
   * *   Standard
   * *   Dedicated: You must enable a whitelist for use.
   * *   Economic: You must enable a whitelist for use.
   * 
   * @example
   * Dedicated
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The computing power level. This value is valid only when the resource type is Economic. The following disk categories are supported:
   * 
   * *   General
   * *   Performance
   * 
   * Default value: General.
   * 
   * @example
   * General
   */
  level?: string;
  /**
   * @remarks
   * The network configuration information.
   */
  network?: CreateJobRequestDeploymentPolicyNetwork;
  /**
   * @remarks
   * The resource pool of the job.
   * 
   * @example
   * compute
   */
  pool?: string;
  /**
   * @remarks
   * The priorities of the jobs. A larger value indicates a higher job scheduling priority. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The tag information of the job. A maximum of 20 groups.
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
   * The array of security group IDs.
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
   * The security group ID.
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
   * > If the array job property is IndexStart=1,IndexEnd=5, and IndexStep=2, the array job contains three sub-jobs. The index values of the sub-jobs are 1,3, and 5. You can access the sub-jobs by using environment variables.
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
   * The details of the array job. The index value of the sub-job is passed to the running environment through environment variables to support user business program reference. Environment variables include:
   * 
   * *   EHPC_JOB_NAME: the name of the job. This parameter corresponds to the JobName parameter.
   * *   EHPC_JOB_ID: The ID of the job.
   * *   EHPC_TASK_NAME: the name of the task. This parameter corresponds to the TaskName parameter.
   * *   EHPC_EXECUTOR_ID: The ID of the execution unit.
   * *   EHPC_ARRAY_TASK_ID: the sub-job index value.
   * *   EHPC_ARRAY_TASK_COUNT: the total number of sub-jobs.
   * *   EHPC_ARRAY_TASK_MAX: the maximum sub-job index, which corresponds to the IndexStart parameter.
   * *   EHPC_ARRAY_TASK_MIN: the minimum value of the sub-job index, which corresponds to the IndexEnd parameter.
   * *   EHPC_ARRAY_TASK_STEP: the index step size of the sub-job, which corresponds to the IndexStep parameter.
   */
  arraySpec?: CreateJobRequestTasksExecutorPolicyArraySpec;
  /**
   * @remarks
   * The maximum number of nodes to run the job.
   * 
   * > Follow the calculation formula: `MaxCount = (IndexEnd - IndexStart) / IndexStep +1`
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
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The type of the disk. Currently, only System is supported, which indicates the system disk.
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
   * The number of CPUs in the running environment.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The array of the disks.
   */
  disks?: CreateJobRequestTasksTaskSpecResourceDisks[];
  enableHT?: boolean;
  hostNamePrefix?: string;
  /**
   * @remarks
   * The instance type of the running environment. A maximum of 5 groups.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The memory size of the running environment. Unit: GiB.
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
   * The next step behavior of the task.
   * 
   * *   Retry: The job starts a retry when a specific exit code is hit.
   * *   Exit: The job exits when a specific exit code is hit.
   * 
   * This parameter is required.
   * 
   * @example
   * Retry
   */
  action?: string;
  /**
   * @remarks
   * The task exit code, which is used together with the action to form a job retry rule. Valid values: 0 to 255.
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
   * The retry rule. A maximum of 10 groups.
   */
  exitCodeActions?: CreateJobRequestTasksTaskSpecRetryPolicyExitCodeActions[];
  /**
   * @remarks
   * The maximum number of retries. Valid values: 1 to 10. Default value: 3.
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
   * The name of the environment variable for the container. It can be 1 to 128 characters in length. Format requirement: [0-9a-zA-Z], and underscores, cannot start with a number.
   * 
   * @example
   * PATH
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable for the container. The value must be 0 to 256 bits in length.
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
   * The application ID.
   * 
   * @example
   * ci-vm-32k6LXAi3cOG
   */
  appId?: string;
  /**
   * @remarks
   * The startup argument of the init container. A maximum of 10 groups.
   */
  arg?: string[];
  /**
   * @remarks
   * The container startup commands. You can specify up to 20 commands. Each command can be up to 256 characters in length.
   * 
   * > 
   * 
   * *   If the start command contains spaces (for example, `sleep 60s` ), the input JSON format parameter is `["sleep", "60s"]`.
   * 
   * *   If the startup command is complex, the parameter format may be a combination of `Command: ["/bin/bash"]` and `Arg:["-c", "<customized command>"]`. The `<customized command>` is a user-defined combination of commands and can contain characters such as spaces.
   */
  command?: string[];
  /**
   * @remarks
   * The environment variables of the container. A maximum of 20 groups.
   */
  environmentVars?: CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars[];
  /**
   * @remarks
   * The image of the container.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc/hpl:latest
   */
  image?: string;
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
      image: 'Image',
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

export class CreateJobRequestTasksTaskSpecTaskExecutorVM extends $dara.Model {
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
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @remarks
   * The logon password of the virtual machine environment. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * ()\\`~!@#$%^&\\*-_+=|{}[]:;\\"<>,.?/ In Windows, the password cannot contain a forward slash (/) as the first character.
   * 
   * > We recommend that you use HTTPS to send requests if you specify Password to avoid password leakage.
   * 
   * @example
   * EHPC@1234
   */
  password?: string;
  /**
   * @remarks
   * The pre-processing script. Base64 encoding is required.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  prologScript?: string;
  /**
   * @remarks
   * The running-job script. Base64 encoding is required.
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

export class CreateJobRequestTasksTaskSpecTaskExecutor extends $dara.Model {
  /**
   * @remarks
   * Use the container environment.
   */
  container?: CreateJobRequestTasksTaskSpecTaskExecutorContainer;
  /**
   * @remarks
   * Use a virtual machine environment.
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
   * The list of data volume mount parameters. Each option is a key-value pair in a JSON string.
   * 
   * *   Format for mounting a NAS file system:{"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   * 
   * > server indicates the address of the mount point of the NAS file system. path indicates the subdirectory of the NAS file system. The subdirectory must start with a (/) and must already exist. vers indicates the version number of the NFS protocol used to mount the file system. We recommend that you use v3. options indicates the custom parameters in the format of "xxx,xxx,xxx".
   * 
   * *   OSS mount format:{"bucket":"xxxxx", "url":"oss-cn-heyuan-internal.aliyuncs.com","path":"/data","akId":"xxxxx","akSecret":"xxxxx"}
   * 
   * > bucket indicates the name of the OSS bucket. url indicates the endpoint of the OSS bucket. You can log on to the OSS console and obtain the endpoint on the Overview page of the destination bucket. path indicates the directory structure of the root file of the bucket. The default value is /, which requires that the directory already exists. akId indicates the AccessKey ID. akSecret indicates the AccessKey secret.
   * 
   * @example
   * {"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   */
  mountOptions?: string;
  /**
   * @remarks
   * The directory where the task mounts the data volume.
   * 
   * > The content of the mounted directory is overwritten by the content of the volume. Exercise caution when you use the directory.
   * 
   * @example
   * /mnt
   */
  mountPath?: string;
  /**
   * @remarks
   * Specifies whether the volume is read-only. Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Currently supported data volume types.
   * 
   * *   alicloud/nas: mounts NAS.
   * *   alicloud/oss: mounts OSS.
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
   * The resource information of the running environment.
   */
  resource?: CreateJobRequestTasksTaskSpecResource;
  /**
   * @remarks
   * Task retry policy.
   */
  retryPolicy?: CreateJobRequestTasksTaskSpecRetryPolicy;
  /**
   * @remarks
   * The task execution configurations.
   * 
   * This parameter is required.
   */
  taskExecutor?: CreateJobRequestTasksTaskSpecTaskExecutor[];
  /**
   * @remarks
   * The list of data volumes mounted to the task. A maximum of 10 groups.
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
   * The job name. It must be 2 to 32 characters in length and can contain letters, digits, and Chinese characters. It can contain hyphens (-) and underscores (_).
   * 
   * @example
   * task0
   */
  taskName?: string;
  /**
   * @remarks
   * The details of the task specification.
   */
  taskSpec?: CreateJobRequestTasksTaskSpec;
  /**
   * @remarks
   * Indicate whether the job is a long-running job.
   * 
   * *   true: background service the job.
   * *   false: batch jobs.
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
   * Dependency policy.
   */
  dependencyPolicy?: CreateJobRequestDependencyPolicy;
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicy?: CreateJobRequestDeploymentPolicy;
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
   * The job name. The name must be 2 to 64 characters in length and can contain letters, digits, and Chinese characters. It can contain hyphens (-) and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
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
   * The security policy.
   */
  securityPolicy?: CreateJobRequestSecurityPolicy;
  /**
   * @remarks
   * The list of tasks. Only one task is supported.
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

