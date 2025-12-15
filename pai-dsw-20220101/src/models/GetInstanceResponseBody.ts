// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { DynamicMount } from "./DynamicMount";
import { PodIp } from "./PodIp";
import { ServiceConfig } from "./ServiceConfig";
import { BandwidthLimit } from "./BandwidthLimit";
import { ForwardInfoResponse } from "./ForwardInfoResponse";


export class GetInstanceResponseBodyAffinityCPU extends $dara.Model {
  /**
   * @remarks
   * Indicates whether CPU affinity is enabled.
   * 
   * true false
   * 
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyAffinity extends $dara.Model {
  /**
   * @remarks
   * The CPU affinity configuration. Only subscription instances that use general-purpose computing resources support CPU affinity configuration.
   */
  CPU?: GetInstanceResponseBodyAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: GetInstanceResponseBodyAffinityCPU,
    };
  }

  validate() {
    if(this.CPU && typeof (this.CPU as any).validate === 'function') {
      (this.CPU as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyCloudDisksStatus extends $dara.Model {
  available?: number;
  capacity?: number;
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      capacity: 'Capacity',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'number',
      capacity: 'number',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyCloudDisks extends $dara.Model {
  /**
   * @remarks
   * Disk Capacity
   * 
   * @example
   * 30Gi
   */
  capacity?: string;
  /**
   * @remarks
   * The mount path of the cloud disk in the container.
   * 
   * @example
   * /mmt/workspace
   */
  mountPath?: string;
  /**
   * @remarks
   * The directory on the cloud disk that is mounted to the container.
   * 
   * @example
   * /workspace
   */
  path?: string;
  status?: GetInstanceResponseBodyCloudDisksStatus;
  /**
   * @remarks
   * The usage mode of the cloud disk. The value rootfs indicates that the cloud disk is used as the root file system.
   * 
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountPath: 'MountPath',
      path: 'Path',
      status: 'Status',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
      status: GetInstanceResponseBodyCloudDisksStatus,
      subType: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDatasets extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * Indicates whether dynamic mounting is enabled. Default value: false.
   * 
   * @example
   * false
   */
  dynamic?: boolean;
  /**
   * @remarks
   * The read and write permissions. Valid values: RW and RO.
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The mount path in the container.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount type of the dataset (deprecated).
   * 
   * @example
   * FastReadWrite
   */
  optionType?: string;
  /**
   * @remarks
   * The mount type of the dataset.
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The dataset URI.
   * 
   * @example
   * oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      dynamic: 'Dynamic',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetVersion: 'string',
      dynamic: 'boolean',
      mountAccess: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyIdleInstanceCuller extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization threshold. Unit: percentage. Valid values: 1 to 100. If the CPU utilization of the instance is lower than this threshold, the instance is considered idle.
   * 
   * @example
   * 20
   */
  cpuPercentThreshold?: number;
  /**
   * @remarks
   * The GPU utilization threshold. Unit: percentage. Valid values: 1 to 100. This parameter takes effect only if the instance is of the GPU instance type. If both CPU and GPU utilization is lower than the thresholds, the instance is considered idle.
   * 
   * @example
   * 10
   */
  gpuPercentThreshold?: number;
  /**
   * @remarks
   * The current time duration for which the instance is idle. Unit: minutes.
   * 
   * @example
   * 30
   */
  idleTimeInMinutes?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum time duration for which the instance is idle. Unit: minutes. If the time duration for which the instance is idle exceeds this value, the system automatically stops the instance.
   * 
   * @example
   * 60
   */
  maxIdleTimeInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceShutdownTimer extends $dara.Model {
  /**
   * @remarks
   * The scheduled stop time.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modified time.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The remaining time before the instance is stopped. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceSnapshotList extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the snapshot was modified.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The error code of the instance snapshot.
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error message of the instance snapshot.
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The image repository URL.
   * 
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * The instance snapshot status.
   * 
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 123xxxxxxxx
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

export class GetInstanceResponseBodyLatestSnapshot extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the snapshot was modified.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The error code of the instance snapshot.
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error message of the instance snapshot.
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The image repository URL.
   * 
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * The instance snapshot status.
   * 
   * Valid values:
   * 
   * *   Committing
   * *   Pushing
   * *   Failed
   * *   Saved
   * 
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyNodeErrorRecovery extends $dara.Model {
  /**
   * @remarks
   * The number of seconds to wait before automatic switchover.
   * 
   * @example
   * 30
   */
  autoSwitchCountdownSeconds?: number;
  /**
   * @remarks
   * Indicates whether to enable automatic switchover when a node error occurs.
   * 
   * @example
   * true
   */
  enableAutoSwitchOnNodeError?: boolean;
  /**
   * @remarks
   * Indicates whether the node has an error.
   * 
   * @example
   * false
   */
  hasNodeError?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoSwitchCountdownSeconds: 'autoSwitchCountdownSeconds',
      enableAutoSwitchOnNodeError: 'enableAutoSwitchOnNodeError',
      hasNodeError: 'hasNodeError',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitchCountdownSeconds: 'number',
      enableAutoSwitchOnNodeError: 'boolean',
      hasNodeError: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyRequestedResource extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU type. Valid values:
   * 
   * *   V100
   * *   A100
   * *   T4
   * *   A10
   * *   P100
   * 
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  memory?: string;
  /**
   * @remarks
   * The shared memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class GetInstanceResponseBodyUserVpc extends $dara.Model {
  bandwidthLimit?: BandwidthLimit;
  /**
   * @remarks
   * Default Route
   * 
   * @example
   * eth0 | eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block.
   * 
   * *   If you leave VSwitchId empty, this parameter is not required and the system automatically obtains all CIDR blocks in the VPC.
   * *   If VSwitchId is not empty, this parameter is required. Specify all CIDR blocks in the VPC.
   * 
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The forward information.
   */
  forwardInfos?: ForwardInfoResponse[];
  ip?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      forwardInfos: 'ForwardInfos',
      ip: 'Ip',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: BandwidthLimit,
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfoResponse },
      ip: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.bandwidthLimit && typeof (this.bandwidthLimit as any).validate === 'function') {
      (this.bandwidthLimit as any).validate();
    }
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    if(Array.isArray(this.forwardInfos)) {
      $dara.Model.validateArray(this.forwardInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerator type of the instance.
   * 
   * Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PRIVATE: Accessible only to you and the administrator of the workspace.
   * *   PUBLIC: Accessible to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The accumulated running duration. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  accumulatedRunningTimeInMs?: number;
  /**
   * @remarks
   * The affinity configuration.
   */
  affinity?: GetInstanceResponseBodyAffinity;
  /**
   * @remarks
   * The cloud disks of the instance.
   * 
   * @example
   * []
   */
  cloudDisks?: GetInstanceResponseBodyCloudDisks[];
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: All errors, except for parameter validation errors, are internal errors.
   * *   ValidationError: A parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The credential injection configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: GetInstanceResponseBodyDatasets[];
  /**
   * @remarks
   * The NVIDIA driver configuration.
   * 
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @remarks
   * The dynamic mount configuration.
   */
  dynamicMount?: DynamicMount;
  /**
   * @remarks
   * The ECS instance type of the instance.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * {userName: "Chris"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The creation time of the instance.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time of the instance.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The automatic shutdown settings.
   * 
   * @example
   * {"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}
   */
  idleInstanceCuller?: GetInstanceResponseBodyIdleInstanceCuller;
  /**
   * @remarks
   * The Base64-encoded account and password for the user‘s private image. The password will be hidden.
   * 
   * @example
   * YWxpeXVuNjUzMzM5MjIwMzoqKioqKio=
   */
  imageAuth?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @remarks
   * The image address.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @remarks
   * The scheduled stop tasks.
   */
  instanceShutdownTimer?: GetInstanceResponseBodyInstanceShutdownTimer;
  /**
   * @remarks
   * The instance snapshots.
   * 
   * @example
   * []
   */
  instanceSnapshotList?: GetInstanceResponseBodyInstanceSnapshotList[];
  /**
   * @remarks
   * The instance URL.
   * 
   * @example
   * https://dsw-cn-shanghai.data.aliyun.com/notebook.htm?instance=39772#/
   */
  instanceUrl?: string;
  /**
   * @remarks
   * The JupyterLab URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/lab/
   */
  jupyterlabUrl?: string;
  /**
   * @remarks
   * The custom tags.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: GetInstanceResponseBodyLabels[];
  /**
   * @remarks
   * The latest user image saved.
   */
  latestSnapshot?: GetInstanceResponseBodyLatestSnapshot;
  /**
   * @remarks
   * The error message. Valid values:
   * 
   * *   If the request is successful, null is returned.
   * *   If the request fails, the cause for the failure is returned.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  migrationOptions?: { [key: string]: any };
  /**
   * @remarks
   * The error recovery configuration of the node.
   */
  nodeErrorRecovery?: GetInstanceResponseBodyNodeErrorRecovery;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  podIps?: PodIp[];
  /**
   * @remarks
   * The priority based on which resources are allocated to instances.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The proxy path.
   * 
   * @example
   * dsw-170197/proxy/
   */
  proxyPath?: string;
  /**
   * @remarks
   * The error code of the instance.
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * The cause of the instance error.
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * The resource configurations in subscription scenarios.
   * 
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: GetInstanceResponseBodyRequestedResource;
  /**
   * @remarks
   * The resource ID. This parameter is available if the billing method is subscription.
   * 
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * *   For subscription, this is the requested CPU and memory size.
   * *   For pay-as-you-go, this is the selected ECS instance type.
   * 
   * @example
   * ecs.g7.xlarge
   */
  resourceName?: string;
  serviceConfig?: ServiceConfig;
  /**
   * @remarks
   * The instance status.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   SaveFailed
   * *   Stopped
   * *   Failed
   * *   ResourceAllocating
   * *   Stopping
   * *   Updating
   * *   Saving
   * *   Queuing
   * *   Recovering
   * *   Starting
   * *   Running
   * *   Saved
   * *   Deleting
   * *   EnvPreparing
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetInstanceResponseBodyTags[];
  /**
   * @remarks
   * The terminal URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/
   */
  terminalUrl?: string;
  userCommandId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 测试用户
   */
  userName?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configurations.
   */
  userVpc?: GetInstanceResponseBodyUserVpc;
  /**
   * @remarks
   * The Web IDE URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/ide/
   */
  webIDEUrl?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * training_data
   */
  workspaceName?: string;
  /**
   * @remarks
   * The storage for the workspace. If you leave this parameter empty, the workspace uses File Storage NAS (NAS) storage, cloud disks, or local disks in sequence.
   * 
   * @example
   * d-123456789
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      affinity: 'Affinity',
      cloudDisks: 'CloudDisks',
      code: 'Code',
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      idleInstanceCuller: 'IdleInstanceCuller',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceSnapshotList: 'InstanceSnapshotList',
      instanceUrl: 'InstanceUrl',
      jupyterlabUrl: 'JupyterlabUrl',
      labels: 'Labels',
      latestSnapshot: 'LatestSnapshot',
      message: 'Message',
      migrationOptions: 'MigrationOptions',
      nodeErrorRecovery: 'NodeErrorRecovery',
      paymentType: 'PaymentType',
      podIps: 'PodIps',
      priority: 'Priority',
      proxyPath: 'ProxyPath',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      serviceConfig: 'ServiceConfig',
      status: 'Status',
      success: 'Success',
      tags: 'Tags',
      terminalUrl: 'TerminalUrl',
      userCommandId: 'UserCommandId',
      userId: 'UserId',
      userName: 'UserName',
      userVpc: 'UserVpc',
      webIDEUrl: 'WebIDEUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      accumulatedRunningTimeInMs: 'number',
      affinity: GetInstanceResponseBodyAffinity,
      cloudDisks: { 'type': 'array', 'itemType': GetInstanceResponseBodyCloudDisks },
      code: 'string',
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': GetInstanceResponseBodyDatasets },
      driver: 'string',
      dynamicMount: DynamicMount,
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      idleInstanceCuller: GetInstanceResponseBodyIdleInstanceCuller,
      imageAuth: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: GetInstanceResponseBodyInstanceShutdownTimer,
      instanceSnapshotList: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceSnapshotList },
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      labels: { 'type': 'array', 'itemType': GetInstanceResponseBodyLabels },
      latestSnapshot: GetInstanceResponseBodyLatestSnapshot,
      message: 'string',
      migrationOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeErrorRecovery: GetInstanceResponseBodyNodeErrorRecovery,
      paymentType: 'string',
      podIps: { 'type': 'array', 'itemType': PodIp },
      priority: 'number',
      proxyPath: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      requestedResource: GetInstanceResponseBodyRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      serviceConfig: ServiceConfig,
      status: 'string',
      success: 'boolean',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyTags },
      terminalUrl: 'string',
      userCommandId: 'string',
      userId: 'string',
      userName: 'string',
      userVpc: GetInstanceResponseBodyUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceSource: 'string',
    };
  }

  validate() {
    if(this.affinity && typeof (this.affinity as any).validate === 'function') {
      (this.affinity as any).validate();
    }
    if(Array.isArray(this.cloudDisks)) {
      $dara.Model.validateArray(this.cloudDisks);
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    if(this.dynamicMount && typeof (this.dynamicMount as any).validate === 'function') {
      (this.dynamicMount as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.idleInstanceCuller && typeof (this.idleInstanceCuller as any).validate === 'function') {
      (this.idleInstanceCuller as any).validate();
    }
    if(this.instanceShutdownTimer && typeof (this.instanceShutdownTimer as any).validate === 'function') {
      (this.instanceShutdownTimer as any).validate();
    }
    if(Array.isArray(this.instanceSnapshotList)) {
      $dara.Model.validateArray(this.instanceSnapshotList);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestSnapshot && typeof (this.latestSnapshot as any).validate === 'function') {
      (this.latestSnapshot as any).validate();
    }
    if(this.migrationOptions) {
      $dara.Model.validateMap(this.migrationOptions);
    }
    if(this.nodeErrorRecovery && typeof (this.nodeErrorRecovery as any).validate === 'function') {
      (this.nodeErrorRecovery as any).validate();
    }
    if(Array.isArray(this.podIps)) {
      $dara.Model.validateArray(this.podIps);
    }
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
    }
    if(this.serviceConfig && typeof (this.serviceConfig as any).validate === 'function') {
      (this.serviceConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

