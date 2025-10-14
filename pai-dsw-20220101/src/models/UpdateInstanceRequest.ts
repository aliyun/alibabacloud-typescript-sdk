// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { DynamicMount } from "./DynamicMount";
import { BandwidthLimit } from "./BandwidthLimit";
import { ForwardInfo } from "./ForwardInfo";


export class UpdateInstanceRequestAffinityCPU extends $dara.Model {
  /**
   * @remarks
   * Specifies whether CPU affinity is enabled.
   * 
   * *   true
   * *   false
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

export class UpdateInstanceRequestAffinity extends $dara.Model {
  /**
   * @remarks
   * The CPU affinity configuration. Only subscription instances that use general-purpose computing resources support CPU affinity configuration.
   */
  CPU?: UpdateInstanceRequestAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: UpdateInstanceRequestAffinityCPU,
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

export class UpdateInstanceRequestAssignNodeSpec extends $dara.Model {
  /**
   * @example
   * node-b
   */
  antiAffinityNodeNames?: string;
  /**
   * @example
   * node-a
   */
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      antiAffinityNodeNames: 'AntiAffinityNodeNames',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiAffinityNodeNames: 'string',
      nodeNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestCloudDisks extends $dara.Model {
  /**
   * @remarks
   * If **Resource Type** is **Public Resource** or if **Resource Quota** is subscription-based general-purpose computing resources (CPU cores ≥ 2 and memory ≥ 4 GB, or configured with GPU):
   * 
   * Each instance has a free system disk quota of 100 GiB for persistent storage. **If the DSW instance is stopped and not launched for more than 15 days, the disk is cleared**. The disk can be expanded. For specific pricing, refer to the console.
   * 
   * **
   * 
   * **Warning**
   * 
   * *   After the expansion, you cannot reduce the storage space. Proceed with caution.
   * 
   * *   After the expansion, the disk is not cleared if the instance is stopped for more than 15 days. However, it will continue to incur fees.
   * 
   * *   If you delete the instance, the system disk is also released and the data stored in the disk is deleted. Make sure that you have backed up your data before you delete the instance.
   * 
   * If you need persistent storage, you can **mount a dataset** or add the OSS, NAS, or CPFS path to the **storage path**.
   * 
   * @example
   * 100Gi
   */
  capacity?: string;
  /**
   * @remarks
   * Disk type:
   * 
   * *   rootfs: Mounts the disk as a system disk. The system environment is stored on the disk.
   * 
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestDatasets extends $dara.Model {
  /**
   * @remarks
   * The dataset ID. If the dataset is read-only, you cannot change the dataset pemission from read-only to read and write by using MountAccess.
   * 
   * You can call [ListDatasets](https://help.aliyun.com/document_detail/457222.html) to obtain the dataset ID. If you configure the dataset ID, you cannot configure the dataset URI.
   * 
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version. You must also configure DatasetId. If you leave this parameter empty, the value v1 is used by default.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * Specifies whether dynamic mounting is enabled. Default value: false.
   * 
   * *   Currently, only instances using general-purpose computing resources are supported.
   * *   Currently, only OSS datasets are supported. The mounted datasets are read-only.
   * *   The MountPath of the dynamically mounted dataset must be a subpath of the root path. Example: /mnt/dynamic/data1/
   * *   A dynamically mounted dataset must be after non-dynamic datasets.
   * 
   * @example
   * false
   */
  dynamic?: boolean;
  /**
   * @remarks
   * The read and write permissions of the dataset. If the dataset is read-only, it cannot be changed to read and write.
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The mount path of the dataset.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount type. You cannot specify Options at the same time. This is deprecated, you can use Options instead.
   * 
   * @example
   * ReadOnly
   * 
   * @deprecated
   */
  optionType?: string;
  /**
   * @remarks
   * The custom dataset mount options. Only OSS is supported. You cannot specify OptionType at the same time. For more information, see [DSW mount configurations](https://www.alibabacloud.com/help/en/pai/user-guide/read-and-write-dataset-data).
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
   * The URI of the storage service directory, which can be directly mounted. This parameter is mutually exclusive with DatasetId.
   * 
   * URI formats of different types of storage:
   * 
   * *   OSS: oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/
   * *   NAS: nas://29\\*\\*d-b12\\*\\*\\*\\*446.cn-hangzhou.nas.aliyuncs.com/data/path/
   * *   Extreme NAS: nas://29\\*\\*\\*\\*123-y\\*\\*r.cn-hangzhou.extreme.nas.aliyuncs.com/data/path/
   * *   CPFS: cpfs://cpfs-213\\*\\*\\*\\*87.cn-wulanchabu/ptc-292\\*\\*\\*\\*\\*cbb/exp-290\\*\\*\\*\\*\\*\\*\\*\\*03e/data/path/
   * *   Lingjun CPFS: bmcpfs://cpfs-290\\*\\*\\*\\*\\*\\*foflh-vpc-x\\*\\*\\*\\*8r.cn-wulanchabu.cpfs.aliyuncs.com/data/path/
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

export class UpdateInstanceRequestRequestedResource extends $dara.Model {
  /**
   * @remarks
   * The number of vCPU cores.
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
   * The GPU type.
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

export class UpdateInstanceRequestSpotSpec extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  spotDiscountLimit?: string;
  /**
   * @example
   * 0
   */
  spotDuration?: string;
  /**
   * @example
   * 0.12
   */
  spotPriceLimit?: string;
  /**
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      spotDiscountLimit: 'SpotDiscountLimit',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotDiscountLimit: 'string',
      spotDuration: 'string',
      spotPriceLimit: 'string',
      spotStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestUserCommandOnStart extends $dara.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestUserCommand extends $dara.Model {
  onStart?: UpdateInstanceRequestUserCommandOnStart;
  static names(): { [key: string]: string } {
    return {
      onStart: 'OnStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onStart: UpdateInstanceRequestUserCommandOnStart,
    };
  }

  validate() {
    if(this.onStart && typeof (this.onStart as any).validate === 'function') {
      (this.onStart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestUserVpc extends $dara.Model {
  bandwidthLimit?: BandwidthLimit;
  /**
   * @remarks
   * The default route. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s Elastic Network Interface is used to access the Internet through the private gateway.
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
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
   * The forward configuration of the instance.
   */
  forwardInfos?: ForwardInfo[];
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
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfo },
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

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the instance.
   * 
   * Valid values:
   * 
   * *   PUBLIC: Accessible to all members in the workspace.
   * *   PRIVATE: Accessible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The affinity configuration.
   */
  affinity?: UpdateInstanceRequestAffinity;
  assignNodeSpec?: UpdateInstanceRequestAssignNodeSpec;
  /**
   * @remarks
   * The cloud disks.
   * 
   * @example
   * []
   */
  cloudDisks?: UpdateInstanceRequestCloudDisks[];
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: UpdateInstanceRequestDatasets[];
  disassociateAssignNode?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the credential injection information.
   * 
   * @example
   * false
   */
  disassociateCredential?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated datasets.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  disassociateDatasets?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the NVIDIA driver configuration.
   * 
   * @example
   * false
   */
  disassociateDriver?: boolean;
  disassociateEnvironmentVariables?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated forward information.
   * 
   * @example
   * false
   */
  disassociateForwardInfos?: boolean;
  disassociateSpot?: boolean;
  disassociateUserCommand?: boolean;
  /**
   * @remarks
   * Specifies whether to delete the associated user VPC.
   * 
   * @example
   * false
   */
  disassociateVpc?: boolean;
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
   * The ECS instance type of the instance. You can call [ListEcsSpecs](https://help.aliyun.com/document_detail/470423.html) to obtain the ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  environmentVariables?: { [key: string]: any };
  /**
   * @remarks
   * The Base64-encoded account and password for the user‘s private image. The password will be hidden.
   * 
   * @example
   * ****
   */
  imageAuth?: string;
  /**
   * @remarks
   * The image ID. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image address. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image address.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The instance name. Format requirements:
   * 
   * *   The name can contain only letters, digits, and underscores (_).
   * *   The name can be up to 27 characters in length.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  oversoldType?: string;
  /**
   * @remarks
   * The priority based on which resources are allocated to instances. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9 is the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The resource configurations.
   * 
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: UpdateInstanceRequestRequestedResource;
  spotSpec?: UpdateInstanceRequestSpotSpec;
  startInstance?: boolean;
  userCommand?: UpdateInstanceRequestUserCommand;
  /**
   * @remarks
   * the User ID of the instance.
   * 
   * @example
   * 16122**********
   */
  userId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configurations.
   */
  userVpc?: UpdateInstanceRequestUserVpc;
  /**
   * @remarks
   * Specifies the storage corresponding to the working directory. You can mount disks or datasets to /mnt/workspace at the same time. OSS datasets and dynamically mounted datasets are not supported.
   * 
   * Valid values:
   * 
   * *   rootfsCloudDisk: Mount disk to the working directory.
   * *   Mount path of the dataset, such as /mnt/data: Datasets in URI format only support this method.
   * *   Dataset ID, such as d-vsqjvs\\*\\*\\*\\*rp5l206u: If a single dataset is mounted to multiple paths, the first path is selected. We recommend that you do not use this method, use the mount path instead.
   * 
   * If you leave this parameter empty:
   * 
   * *   If the instance uses cloud disks, cloud disks are selected by default.
   * *   if no disks are available, the first NAS or CPFS dataset is selected as the working directory.
   * *   If no disk, NAS, or CPFS datasets is available, the host space is used.
   * 
   * @example
   * /mnt/data
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      affinity: 'Affinity',
      assignNodeSpec: 'AssignNodeSpec',
      cloudDisks: 'CloudDisks',
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      disassociateAssignNode: 'DisassociateAssignNode',
      disassociateCredential: 'DisassociateCredential',
      disassociateDatasets: 'DisassociateDatasets',
      disassociateDriver: 'DisassociateDriver',
      disassociateEnvironmentVariables: 'DisassociateEnvironmentVariables',
      disassociateForwardInfos: 'DisassociateForwardInfos',
      disassociateSpot: 'DisassociateSpot',
      disassociateUserCommand: 'DisassociateUserCommand',
      disassociateVpc: 'DisassociateVpc',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      oversoldType: 'OversoldType',
      priority: 'Priority',
      requestedResource: 'RequestedResource',
      spotSpec: 'SpotSpec',
      startInstance: 'StartInstance',
      userCommand: 'UserCommand',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      affinity: UpdateInstanceRequestAffinity,
      assignNodeSpec: UpdateInstanceRequestAssignNodeSpec,
      cloudDisks: { 'type': 'array', 'itemType': UpdateInstanceRequestCloudDisks },
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': UpdateInstanceRequestDatasets },
      disassociateAssignNode: 'boolean',
      disassociateCredential: 'boolean',
      disassociateDatasets: 'boolean',
      disassociateDriver: 'boolean',
      disassociateEnvironmentVariables: 'boolean',
      disassociateForwardInfos: 'boolean',
      disassociateSpot: 'boolean',
      disassociateUserCommand: 'boolean',
      disassociateVpc: 'boolean',
      driver: 'string',
      dynamicMount: DynamicMount,
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      imageAuth: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      oversoldType: 'string',
      priority: 'number',
      requestedResource: UpdateInstanceRequestRequestedResource,
      spotSpec: UpdateInstanceRequestSpotSpec,
      startInstance: 'boolean',
      userCommand: UpdateInstanceRequestUserCommand,
      userId: 'string',
      userVpc: UpdateInstanceRequestUserVpc,
      workspaceSource: 'string',
    };
  }

  validate() {
    if(this.affinity && typeof (this.affinity as any).validate === 'function') {
      (this.affinity as any).validate();
    }
    if(this.assignNodeSpec && typeof (this.assignNodeSpec as any).validate === 'function') {
      (this.assignNodeSpec as any).validate();
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
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
    }
    if(this.spotSpec && typeof (this.spotSpec as any).validate === 'function') {
      (this.spotSpec as any).validate();
    }
    if(this.userCommand && typeof (this.userCommand as any).validate === 'function') {
      (this.userCommand as any).validate();
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

