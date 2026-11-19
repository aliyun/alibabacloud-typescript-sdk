// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoDependencyPolicyJobDependency extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-bjxxxxxxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The dependency type. Valid values:
   * 
   * - AfterSucceeded: All subtasks of the dependent job or array job run successfully (the exit code is 0).
   * - AfterFailed: Any subtask of the dependent job or array job fails (the exit code is not 0).
   * - AfterAny: The dependent job finishes running, regardless of success or failure.
   * - AfterCorresponding: The corresponding subtask of the dependent array job runs successfully (the exit code is 0).
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

export class GetJobResponseBodyJobInfoDependencyPolicy extends $dara.Model {
  /**
   * @remarks
   * The job dependencies. A maximum of 10 dependencies are supported.
   */
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
   * Specifies whether the resource is created in the zone corresponding to the specified vSwitch parameter. Valid values:
   * 
   * - true: The resource is created in the zone corresponding to the specified vSwitch parameter.
   * 
   * - false: The resource is created in any zone with available resources.
   * 
   * @example
   * false
   */
  enableENIMapping?: boolean;
  /**
   * @remarks
   * Specifies whether to create a public IP address.
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
   * - General: General-purpose.
   * - Performance: Performance-optimized.
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
  network?: GetJobResponseBodyJobInfoDeploymentPolicyNetwork;
  /**
   * @remarks
   * The resource pool.
   * 
   * @example
   * testpool
   */
  pool?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
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

export class GetJobResponseBodyJobInfoSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * The security group.
   */
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
   * > If the array job attributes are IndexStart=1, IndexEnd=5, and IndexStep=2, the array job contains three subtasks with indexes 1, 3, and 5.
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
   * The maximum number of nodes for job execution.
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
   * The sub-job ID.
   * 
   * @example
   * 0
   */
  arrayId?: number;
  /**
   * @remarks
   * The time when the job was created. The example uses the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job ended. The example uses the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-02-04 13:54:10
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the job started. The example uses the YYYY-MM-DD HH:mm:ss format.
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
   * The description of the status reason.
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
   * - System: System cloud disk.
   * - Data: Data cloud disk.
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
  /**
   * @remarks
   * Specifies whether to enable hyper-threading for the runtime environment. Default value: true.
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The hostname prefix of the runtime environment. The limits are as follows:
   * 
   * - A period (.) and a hyphen (-) cannot be used as the first or last character, and cannot be used consecutively.
   * - Windows environment: The length cannot exceed 10 characters. Periods (.) are not supported, and the name cannot contain only digits. Uppercase and lowercase letters, digits, and hyphens (-) are allowed.
   * - Linux environment: The length cannot exceed 32 characters. Multiple periods (.) are supported. The string between periods is considered a segment, and each segment can contain uppercase and lowercase letters, digits, and hyphens (-).
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
  /**
   * @remarks
   * The next action for the task. Valid values:
   * 
   * - Retry: The job starts a new retry when a specific exit code is matched.
   * 
   * - Exit: The job exits when a specific exit code is matched.
   * 
   * @example
   * Exit
   */
  action?: string;
  /**
   * @remarks
   * The task exit code, which is used together with Action to form a job retry rule. Valid values: 0 to 255.
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

export class GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The retry rules. A maximum of 10 rules are supported.
   */
  exitCodeActions?: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicyExitCodeActions[];
  /**
   * @remarks
   * The number of retries. Valid values: 1 to 10. Default value: 3.
   * 
   * @example
   * 3
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
   * The script used to run the job. Base64 encoding is required.
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
   * The ECS instance used.
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
  /**
   * @remarks
   * The list of mount parameters for the data volume. The parameters are key-value pairs in JSON format.
   * - Format for mounting a NAS file system: {"server":"xxxxx-xxxxx.cn-heyuan.nas.aliyuncs.com","vers":"3","path":"/data","options":"nolock,tcp,noresvport"}
   * > server specifies the mount target address of the NAS file system. path specifies the subdirectory under the NAS path, which must start with / and must already exist. vers specifies the NFS protocol version used to mount the NAS file system. Use v3. options specifies the custom parameters used when mounting the NAS file system, in the format of "xxx,xxx,xxx".
   * 
   * - Format for mounting an OSS bucket: {"bucket":"xxxxx", "url":"oss-cn-heyuan-internal.aliyuncs.com","path":"/data","akId":"xxxxx","akSecret":"xxxxx"}
   * > bucket specifies the name of the OSS bucket. url specifies the endpoint of the OSS bucket. You can log on to the OSS console and obtain the endpoint on the Overview page of the bucket. path specifies the directory structure relative to the root directory of the bucket when mounting. The default value is /, and the directory must already exist. akId specifies the AccessKey ID used for direct authorization with an AccessKey pair. akSecret specifies the AccessKey secret used for direct authorization with an AccessKey pair.
   * 
   * @example
   * {"bucket":"demo-bucket","otherOpts":"-o allow_other","url":"oss-cn-hangzhou.aliyuncs.com"}
   */
  mountOptions?: string;
  /**
   * @remarks
   * The directory where the data volume is mounted to the task.
   * 
   * > The content in the mount directory will be directly overwritten by the content of the volume. Use this parameter with caution.
   * 
   * @example
   * /cromwell_inputs/1234abcd
   */
  mountPath?: string;
  /**
   * @remarks
   * The supported data volume types. Valid values:
   * - alicloud/nas: Mount a NAS file system.
   * - alicloud/oss: Mount an OSS bucket.
   * 
   * @example
   * alicloud/nas
   */
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
  /**
   * @remarks
   * The task retry policy.
   */
  retryPolicy?: GetJobResponseBodyJobInfoTasksTaskSpecRetryPolicy;
  /**
   * @remarks
   * The task execution configuration.
   */
  taskExecutor?: GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutor[];
  /**
   * @remarks
   * The list of data volumes mounted to the task. A maximum of 10 data volumes are supported.
   */
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
   * Specifies whether the job is a long-running job.
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
   * The additional application information.
   * 
   * @example
   * {\\"xxx\\": \\"xxxxx\\"}
   */
  appExtraInfo?: string;
  /**
   * @remarks
   * The time when the job was submitted. The example uses the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-03-05 20:00:46
   */
  createTime?: string;
  /**
   * @remarks
   * The dependency policy.
   */
  dependencyPolicy?: GetJobResponseBodyJobInfoDependencyPolicy;
  /**
   * @remarks
   * The resource deployment policy.
   */
  deploymentPolicy?: GetJobResponseBodyJobInfoDeploymentPolicy;
  /**
   * @remarks
   * The time when the job ended. The example uses the YYYY-MM-DD HH:mm:ss format.
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
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: GetJobResponseBodyJobInfoSecurityPolicy;
  /**
   * @remarks
   * The time when the job started. The example uses the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-03-05 20:00:48
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Pending: The job is queued.
   * - Initing: The job is being initialized.
   * - Succeed: The job ran successfully.
   * - Failed: The job failed to run.
   * - Running: The job is running.
   * - Exception: A scheduling exception occurred.
   * - Retrying: The job is being retried.
   * - Expired: The job timed out.
   * - Deleted: The job is deleted.
   * - Suspended: The job is hibernated.
   * - Restarting: The job is being restarted.
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

