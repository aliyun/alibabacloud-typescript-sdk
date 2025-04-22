// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CredentialConfigConfigsRolesUserInfo extends $dara.Model {
  /**
   * @example
   * LT********
   */
  accessKeyId?: string;
  /**
   * @example
   * 456******
   */
  id?: string;
  /**
   * @example
   * ********
   */
  securityToken?: string;
  /**
   * @example
   * S
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
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

export class CredentialConfigConfigsRoles extends $dara.Model {
  /**
   * @example
   * 123******
   */
  assumeRoleFor?: string;
  /**
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123******:role/****
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service
   */
  roleType?: string;
  userInfo?: CredentialConfigConfigsRolesUserInfo;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      policy: 'string',
      roleArn: 'string',
      roleType: 'string',
      userInfo: CredentialConfigConfigsRolesUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigConfigs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  key?: string;
  roles?: CredentialConfigConfigsRoles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Role
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': CredentialConfigConfigsRoles },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfoInternet extends $dara.Model {
  /**
   * @example
   * 47.111.119.114
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfoIntranet extends $dara.Model {
  /**
   * @example
   * dsw-notebook-22-urz3u6cnu0uts7ej9r.dsw-5cc6083084818f60.dsw.pai.alibaba.com
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfo extends $dara.Model {
  internet?: ForwardInfoResponseConnectInfoInternet;
  intranet?: ForwardInfoResponseConnectInfoIntranet;
  /**
   * @example
   * DNAT and privateZone are both ready.
   */
  message?: string;
  /**
   * @example
   * Ready
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      intranet: 'Intranet',
      message: 'Message',
      phase: 'Phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: ForwardInfoResponseConnectInfoInternet,
      intranet: ForwardInfoResponseConnectInfoIntranet,
      message: 'string',
      phase: 'string',
    };
  }

  validate() {
    if(this.internet && typeof (this.internet as any).validate === 'function') {
      (this.internet as any).validate();
    }
    if(this.intranet && typeof (this.intranet as any).validate === 'function') {
      (this.intranet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestAffinityCPU extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the CPU affinity feature.
   * 
   * *   false
   * *   true
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

export class CreateInstanceRequestAffinity extends $dara.Model {
  /**
   * @remarks
   * The CPU affinity configuration. Only subscription instances that use general-purpose computing resources support CPU affinity configuration.
   */
  CPU?: CreateInstanceRequestAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: CreateInstanceRequestAffinityCPU,
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

export class CreateInstanceRequestCloudDisksStatus extends $dara.Model {
  /**
   * @remarks
   * The available capacity. Unit: bytes.
   * 
   * @example
   * 31841058816
   */
  available?: number;
  /**
   * @remarks
   * The capacity. Unit: bytes.
   * 
   * @example
   * 32212254720
   */
  capacity?: number;
  /**
   * @remarks
   * The used capacity. Unit: bytes.
   * 
   * @example
   * 371195904
   */
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

export class CreateInstanceRequestCloudDisks extends $dara.Model {
  /**
   * @remarks
   * If **Resource Type** is **Public Resource** or if **Resource Quota** is subscription-based general-purpose computing resources (CPU cores ≥ 2 and memory ≥ 4 GB, or configured with GPU):
   * 
   * Each instance has a free system disk of 100 GiB for persistent storage. **If the DSW instance is stopped and not launched for more than 15 days, the disk is cleared**. The disk can be expanded. For specific pricing, refer to the console.
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
   * The mount path of the cloud disk.
   * 
   * @example
   * /mnt/systemDisk
   */
  mountPath?: string;
  /**
   * @remarks
   * The subpath of the cloud disk that is mounted to the instance.
   * 
   * @example
   * workspace
   */
  path?: string;
  /**
   * @remarks
   * The disk or snapshot usage.
   */
  status?: CreateInstanceRequestCloudDisksStatus;
  /**
   * @remarks
   * The cloud disk type.
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
      status: CreateInstanceRequestCloudDisksStatus,
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

export class CreateInstanceRequestDatasets extends $dara.Model {
  /**
   * @remarks
   * The dataset ID. If the dataset is read-only, you cannot change the dataset permission from read-only to read and write by using MountAccess.
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
   * Specifies whether to enable dynamic mounting. Default value: false.
   * 
   * *   Currently, only instances using general-purpose computing resources are supported.
   * *   Currently, only OSS datasets are supported. The mounted datasets are read-only.
   * *   The mount path of the dynamically mounted dataset must be a subpath of the root path. Example: /mnt/dynamic/data1/
   * *   A dynamically mounted dataset must be after non-dynamic datasets.
   * 
   * @example
   * true
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
   * The mount type. You cannot specify Options at the same time. This is deprecated, and you can use Options instead.
   * 
   * @example
   * ReadOnly
   * 
   * @deprecated
   */
  optionType?: string;
  /**
   * @remarks
   * The custom dataset mount options. Only OSS is supported. You cannot specify OptionType at the same time. For more information, see [DSW mount configurations](https://help.aliyun.com/zh/pai/user-guide/read-and-write-dataset-data).
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

export class CreateInstanceRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The custom label key.
   * 
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @remarks
   * The custom label value.
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

export class CreateInstanceRequestRequestedResource extends $dara.Model {
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
   * The GPU memory type. Valid values:
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
   * The size of the shared memory. Unit: GB.
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

export class CreateInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class CreateInstanceRequestUserVpc extends $dara.Model {
  bandwidthLimit?: BandwidthLimit;
  /**
   * @remarks
   * The default route. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s elastic network interface (ENI) is used to access the Internet through the private gateway. For more information about the configuration method, see [Enable Internet access for a DSW instance by using a private Internet NAT gateway](https://help.aliyun.com/document_detail/2525343.html).
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * 
   * *   If you leave the SwitchId and ExtendedCIDRs parameters empty, the system automatically obtains all CIDR blocks in a VPC.
   * *   If you configure the SwitchId and ExtendedCIDRs parameters, we recommend that you specify all CIDR blocks in a VPC.
   * 
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The forward information.
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

export class CreateInstanceSnapshotRequestLabels extends $dara.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
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
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
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
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfoResponse },
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

export class GetInstanceMetricsResponseBodyPodMetricsMetrics extends $dara.Model {
  /**
   * @remarks
   * The timestamp corresponding to the metric.
   * 
   * @example
   * 1670890560
   */
  time?: number;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 25.901031
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBodyPodMetrics extends $dara.Model {
  /**
   * @remarks
   * The metrics of the pod that corresponds to the instance.
   */
  metrics?: GetInstanceMetricsResponseBodyPodMetricsMetrics[];
  /**
   * @remarks
   * The ID of the pod that corresponds to the instance.
   * 
   * @example
   * dsw-15870-695f44c5bc-hd6xm
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetricsMetrics },
      podId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponseBodyLabels extends $dara.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
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

export class GetLifecycleResponseBodyLifecycle extends $dara.Model {
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Creating
   * *   SaveFailed: The instance image failed to be saved.
   * *   Stopped
   * *   Failed
   * *   ResourceAllocating
   * *   Stopping
   * *   Updating
   * *   Saving
   * *   Starting
   * *   Running
   * *   Saved
   * *   EnvPreparing: Preparing environment.
   * *   ArrearStopping: The service is being stopped due to overdue payments.
   * *   Arrearge: The service is stopped due to overdue payments.
   * *   Queuing
   * *   Recovering
   * 
   * @example
   * Starting
   */
  status?: string;
  /**
   * @remarks
   * The reason code that corresponds to an event.
   * 
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @remarks
   * The reason message that corresponds to an event.
   * 
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The time the status was created, specifically the time the instance transitioned to this status (in GMT).
   * 
   * @example
   * 2022-10-21T07:27:44Z
   */
  gmtCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      gmtCreateTime: 'GmtCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      gmtCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBodyFreeTier extends $dara.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 个
   */
  initBaseUnit?: string;
  /**
   * @example
   * 5000
   */
  initBaseValue?: number;
  /**
   * @example
   * 个
   */
  initShowUnit?: string;
  /**
   * @example
   * 5000
   */
  initShowValue?: string;
  /**
   * @example
   * true
   */
  isFreeTierUser?: boolean;
  /**
   * @example
   * 个
   */
  periodBaseUnit?: string;
  /**
   * @example
   * 3000
   */
  periodBaseValue?: number;
  /**
   * @example
   * 个
   */
  periodShowUnit?: string;
  /**
   * @example
   * 3000
   */
  periodShowValue?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      initBaseUnit: 'InitBaseUnit',
      initBaseValue: 'InitBaseValue',
      initShowUnit: 'InitShowUnit',
      initShowValue: 'InitShowValue',
      isFreeTierUser: 'IsFreeTierUser',
      periodBaseUnit: 'PeriodBaseUnit',
      periodBaseValue: 'PeriodBaseValue',
      periodShowUnit: 'PeriodShowUnit',
      periodShowValue: 'PeriodShowValue',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      initBaseUnit: 'string',
      initBaseValue: 'number',
      initShowUnit: 'string',
      initShowValue: 'string',
      isFreeTierUser: 'boolean',
      periodBaseUnit: 'string',
      periodBaseValue: 'number',
      periodShowUnit: 'string',
      periodShowValue: 'string',
      startTime: 'string',
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

export class ListEcsSpecsResponseBodyEcsSpecsLabels extends $dara.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
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

export class ListEcsSpecsResponseBodyEcsSpecs extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 4
   */
  GPU?: number;
  GPUMemorySize?: number;
  /**
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @example
   * 5120000
   */
  instanceBandwidthRx?: number;
  /**
   * @example
   * ecs.gn5-c28g1.7xlarge
   */
  instanceType?: string;
  /**
   * @example
   * True
   */
  isAvailable?: boolean;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListEcsSpecsResponseBodyEcsSpecsLabels[];
  /**
   * @example
   * 32
   */
  memory?: number;
  /**
   * @example
   * 22.8
   */
  price?: number;
  spotStockStatus?: string;
  /**
   * @example
   * 500
   */
  systemDiskCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      currency: 'Currency',
      GPU: 'GPU',
      GPUMemorySize: 'GPUMemorySize',
      GPUType: 'GPUType',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      labels: 'Labels',
      memory: 'Memory',
      price: 'Price',
      spotStockStatus: 'SpotStockStatus',
      systemDiskCapacity: 'SystemDiskCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'number',
      currency: 'string',
      GPU: 'number',
      GPUMemorySize: 'number',
      GPUType: 'string',
      instanceBandwidthRx: 'number',
      instanceType: 'string',
      isAvailable: 'boolean',
      labels: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecsLabels },
      memory: 'number',
      price: 'number',
      spotStockStatus: 'string',
      systemDiskCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotResponseBodySnapshotsLabels extends $dara.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
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

export class ListInstanceSnapshotResponseBodySnapshots extends $dara.Model {
  /**
   * @example
   * ["/path1","/path2"]
   */
  excludePaths?: string[];
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListInstanceSnapshotResponseBodySnapshotsLabels[];
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * training_data_env
   */
  snapshotName?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': ListInstanceSnapshotResponseBodySnapshotsLabels },
      reasonCode: 'string',
      reasonMessage: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludePaths)) {
      $dara.Model.validateArray(this.excludePaths);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class ListInstancesResponseBodyInstancesAffinityCPU extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CPU affinity feature was enabled.
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

export class ListInstancesResponseBodyInstancesAffinity extends $dara.Model {
  /**
   * @remarks
   * The CPU affinity configuration. Only subscription instances that use general-purpose computing resources support CPU affinity configuration.
   */
  CPU?: ListInstancesResponseBodyInstancesAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: ListInstancesResponseBodyInstancesAffinityCPU,
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

export class ListInstancesResponseBodyInstancesCloudDisks extends $dara.Model {
  /**
   * @remarks
   * The cloud disk capacity.
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
  /**
   * @remarks
   * The cloud disk type. The value rootfs indicates that the cloud disk is used as the root file system (rootfs).
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
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
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

export class ListInstancesResponseBodyInstancesDatasets extends $dara.Model {
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
   * Indicates whether dynamic mounting was enabled. Default value: false.
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
   * The type of the mount option.
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

export class ListInstancesResponseBodyInstancesIdleInstanceCuller extends $dara.Model {
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
   * The time duration for which the instance is idle. Unit: minutes.
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

export class ListInstancesResponseBodyInstancesInstanceShutdownTimer extends $dara.Model {
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
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was modified.
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
   * The remaining time before the instance is stopped.
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

export class ListInstancesResponseBodyInstancesInstanceSnapshotList extends $dara.Model {
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
   * The URL of the image repository.
   * 
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * The status of the instance snapshot.
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

export class ListInstancesResponseBodyInstancesLabels extends $dara.Model {
  /**
   * @remarks
   * The custom label key.
   * 
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @remarks
   * The custom label value.
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

export class ListInstancesResponseBodyInstancesLatestSnapshot extends $dara.Model {
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
   * The URL of the image repository.
   * 
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * The status of the instance snapshot.
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

export class ListInstancesResponseBodyInstancesRequestedResource extends $dara.Model {
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
   * The GPU memory type.
   * 
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 32
   */
  memory?: string;
  /**
   * @remarks
   * The size of the shared memory.
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

export class ListInstancesResponseBodyInstancesTags extends $dara.Model {
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

export class ListInstancesResponseBodyInstancesUserVpc extends $dara.Model {
  bandwidthLimit?: BandwidthLimit;
  /**
   * @remarks
   * The default route.
   * 
   * @example
   * eth0 | eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
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
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfoResponse },
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

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The accelerator type of the instance. Valid values:
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
   * *   PRIVATE (default): The instances are accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The instances are accessible only to all members in the workspace.
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
  affinity?: ListInstancesResponseBodyInstancesAffinity;
  /**
   * @remarks
   * The cloud disks of the instance.
   * 
   * @example
   * []
   */
  cloudDisks?: ListInstancesResponseBodyInstancesCloudDisks[];
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: ListInstancesResponseBodyInstancesDatasets[];
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
   * The dynamic mount configurations.
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
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was modified.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The rule for stopping idle instances.
   * 
   * @example
   * {"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}
   */
  idleInstanceCuller?: ListInstancesResponseBodyInstancesIdleInstanceCuller;
  /**
   * @remarks
   * The Base64-encoded account and password for the user\\"s private image. The password will be hidden.
   * 
   * @example
   * aGFyYm9yYWlAeGltYWxheWE6KioqKioq
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
   * The scheduled stop task.
   */
  instanceShutdownTimer?: ListInstancesResponseBodyInstancesInstanceShutdownTimer;
  /**
   * @remarks
   * The instance snapshots.
   * 
   * @example
   * []
   */
  instanceSnapshotList?: ListInstancesResponseBodyInstancesInstanceSnapshotList[];
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
   * The custom labels.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListInstancesResponseBodyInstancesLabels[];
  /**
   * @remarks
   * The user image that was latest saved.
   */
  latestSnapshot?: ListInstancesResponseBodyInstancesLatestSnapshot;
  oversoldInfo?: string;
  oversoldType?: string;
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
  /**
   * @remarks
   * The priority based on which resources are allocated to instances. Resources are preferentially allocated to instances with higher priorities.
   * 
   * @example
   * 1
   */
  priority?: number;
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
   * The resource configurations.
   * 
   * @example
   * {"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}
   */
  requestedResource?: ListInstancesResponseBodyInstancesRequestedResource;
  /**
   * @remarks
   * The resource ID. This parameter is valid only if you set PaymentType to Subscription.
   * 
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The specifications.
   * 
   * *   In pay-as-you-go scenarios, the value is the specifications of the purchased ECS instance type.
   * *   In subscription scenarios, the value is the requested number of CPU cores and memory size.
   * 
   * @example
   * resource_group
   */
  resourceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListInstancesResponseBodyInstancesTags[];
  /**
   * @remarks
   * The terminal URL.
   * 
   * @example
   * https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/
   */
  terminalUrl?: string;
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
  userVpc?: ListInstancesResponseBodyInstancesUserVpc;
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
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
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
      oversoldInfo: 'OversoldInfo',
      oversoldType: 'OversoldType',
      paymentType: 'PaymentType',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      tags: 'Tags',
      terminalUrl: 'TerminalUrl',
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
      affinity: ListInstancesResponseBodyInstancesAffinity,
      cloudDisks: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesCloudDisks },
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDatasets },
      driver: 'string',
      dynamicMount: DynamicMount,
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      idleInstanceCuller: ListInstancesResponseBodyInstancesIdleInstanceCuller,
      imageAuth: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: ListInstancesResponseBodyInstancesInstanceShutdownTimer,
      instanceSnapshotList: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesInstanceSnapshotList },
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      labels: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesLabels },
      latestSnapshot: ListInstancesResponseBodyInstancesLatestSnapshot,
      oversoldInfo: 'string',
      oversoldType: 'string',
      paymentType: 'string',
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestedResource: ListInstancesResponseBodyInstancesRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesTags },
      terminalUrl: 'string',
      userId: 'string',
      userName: 'string',
      userVpc: ListInstancesResponseBodyInstancesUserVpc,
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
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
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
   * The custom dataset mount options. Only OSS is supported. You cannot specify OptionType at the same time. For more information, see [DSW mount configurations](https://help.aliyun.com/zh/pai/user-guide/read-and-write-dataset-data).
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

export class UpdateInstanceLabelsRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the custom tag.
   * 
   * This parameter is required.
   * 
   * @example
   * customLabelKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom tag.
   * 
   * This parameter is required.
   * 
   * @example
   * labelValue
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

export class BandwidthLimit extends $dara.Model {
  egressRate?: string;
  egressWhitelists?: string[];
  ingressRate?: string;
  ingressWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      egressRate: 'EgressRate',
      egressWhitelists: 'EgressWhitelists',
      ingressRate: 'IngressRate',
      ingressWhitelists: 'IngressWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressRate: 'string',
      egressWhitelists: { 'type': 'array', 'itemType': 'string' },
      ingressRate: 'string',
      ingressWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.egressWhitelists)) {
      $dara.Model.validateArray(this.egressWhitelists);
    }
    if(Array.isArray(this.ingressWhitelists)) {
      $dara.Model.validateArray(this.ingressWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  aliyunEnvRoleKey?: string;
  configs?: CredentialConfigConfigs[];
  /**
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      configs: 'Configs',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      configs: { 'type': 'array', 'itemType': CredentialConfigConfigs },
      enable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DemoCategory extends $dara.Model {
  /**
   * @example
   * sdk
   */
  categoryCode?: string;
  /**
   * @example
   * SDK Usage
   */
  categoryName?: string;
  /**
   * @example
   * 12
   */
  order?: number;
  subCategories?: DemoCategory[];
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      categoryName: 'CategoryName',
      order: 'Order',
      subCategories: 'SubCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
      order: 'number',
      subCategories: { 'type': 'array', 'itemType': DemoCategory },
    };
  }

  validate() {
    if(Array.isArray(this.subCategories)) {
      $dara.Model.validateArray(this.subCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DynamicMount extends $dara.Model {
  enable?: boolean;
  mountPoints?: DynamicMountPoint[];
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      mountPoints: 'MountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      mountPoints: { 'type': 'array', 'itemType': DynamicMountPoint },
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DynamicMountPoint extends $dara.Model {
  options?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rootPath?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      rootPath: 'RootPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: 'string',
      rootPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfo extends $dara.Model {
  accessType?: string[];
  /**
   * @example
   * dsw-notebook
   */
  containerName?: string;
  /**
   * @example
   * eip-25877c70gddh****
   */
  eipAllocationId?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 10086
   */
  externalPort?: string;
  /**
   * @example
   * 22
   */
  forwardPort?: string;
  /**
   * @example
   * ssh
   */
  name?: string;
  /**
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  SSHPublicKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      containerName: 'ContainerName',
      eipAllocationId: 'EipAllocationId',
      enable: 'Enable',
      externalPort: 'ExternalPort',
      forwardPort: 'ForwardPort',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      SSHPublicKey: 'SSHPublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: { 'type': 'array', 'itemType': 'string' },
      containerName: 'string',
      eipAllocationId: 'string',
      enable: 'boolean',
      externalPort: 'string',
      forwardPort: 'string',
      name: 'string',
      natGatewayId: 'string',
      SSHPublicKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessType)) {
      $dara.Model.validateArray(this.accessType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponse extends $dara.Model {
  accessType?: string[];
  connectInfo?: ForwardInfoResponseConnectInfo;
  /**
   * @example
   * dsw-notebook
   */
  containerName?: string;
  /**
   * @example
   * eip-25877c70gddh****
   */
  eipAllocationId?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 1024
   */
  externalPort?: string;
  /**
   * @example
   * 22
   */
  forwardPort?: string;
  /**
   * @example
   * ssh
   */
  name?: string;
  /**
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  SSHPublicKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      connectInfo: 'ConnectInfo',
      containerName: 'ContainerName',
      eipAllocationId: 'EipAllocationId',
      enable: 'Enable',
      externalPort: 'ExternalPort',
      forwardPort: 'ForwardPort',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      SSHPublicKey: 'SSHPublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: { 'type': 'array', 'itemType': 'string' },
      connectInfo: ForwardInfoResponseConnectInfo,
      containerName: 'string',
      eipAllocationId: 'string',
      enable: 'boolean',
      externalPort: 'string',
      forwardPort: 'string',
      name: 'string',
      natGatewayId: 'string',
      SSHPublicKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessType)) {
      $dara.Model.validateArray(this.accessType);
    }
    if(this.connectInfo && typeof (this.connectInfo as any).validate === 'function') {
      (this.connectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdleInstanceCullerRequest extends $dara.Model {
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
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
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

export class CreateIdleInstanceCullerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
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
   * The error message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdleInstanceCullerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIdleInstanceCullerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIdleInstanceCullerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance accessibility.
   * 
   * Valid values:
   * 
   * *   PUBLIC: The instances are accessible to all members in the workspace.
   * *   PRIVATE: The instances are accessible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The affinity configuration.
   */
  affinity?: CreateInstanceRequestAffinity;
  /**
   * @remarks
   * The cloud disks.
   * 
   * @example
   * []
   */
  cloudDisks?: CreateInstanceRequestCloudDisks[];
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The datasets.
   */
  datasets?: CreateInstanceRequestDatasets[];
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
   * The Base64-encoded account and password for the user\\"s private image. The password will be hidden.
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
   * The instance name. The name must meet the following requirements:
   * 
   * *   The name can contain only letters, digits, and underscores (_).
   * *   The name can be up to 27 characters in length.
   * 
   * @example
   * training_data
   */
  instanceName?: string;
  /**
   * @remarks
   * The custom labels.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: CreateInstanceRequestLabels[];
  /**
   * @remarks
   * The priority based on which resources are allocated to instances. Valid values: 1 to 9.
   * 
   * *   1: the lowest priority.
   * *   9: the highest priority.
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
  requestedResource?: CreateInstanceRequestRequestedResource;
  /**
   * @remarks
   * The ID of the resource group. This parameter is configured during prepayment. For information about how to create a dedicated resource group, see [Create a dedicated resource group and purchase general computing resources](https://help.aliyun.com/document_detail/202827.html).
   * 
   * @example
   * dsw-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the instance owner. Valid values: Alibaba Cloud account and RAM user.
   * 
   * @example
   * 161228528250****
   */
  userId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) configurations.
   */
  userVpc?: CreateInstanceRequestUserVpc;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  /**
   * @remarks
   * The storage corresponding to the working directory. You can mount disks or datasets to /mnt/workspace at the same time. OSS datasets and dynamically mounted datasets are not supported.
   * 
   * Valid values:
   * 
   * *   rootfsCloudDisk: Mount the disk to the working directory.
   * *   Mount path of the dataset, such as /mnt/data: Datasets in URI format only support this method.
   * *   Dataset ID, such as d-vsqjvs\\*\\*\\*\\*rp5l206u: If a single dataset is mounted to multiple paths, the first path is selected. We recommend that you do not use this method, use the mount path instead.
   * 
   * If you leave this parameter empty:
   * 
   * *   If the instance uses cloud disks, cloud disks are selected by default.
   * *   if no cloud disks are available, the first NAS or CPFS dataset is selected as the working directory.
   * *   If no cloud disks, and NAS or CPFS datasets are available, the host space is used.
   * 
   * @example
   * rootfsCloudDisk
   */
  workspaceSource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      affinity: 'Affinity',
      cloudDisks: 'CloudDisks',
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      labels: 'Labels',
      priority: 'Priority',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      tag: 'Tag',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      affinity: CreateInstanceRequestAffinity,
      cloudDisks: { 'type': 'array', 'itemType': CreateInstanceRequestCloudDisks },
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': CreateInstanceRequestDatasets },
      driver: 'string',
      dynamicMount: DynamicMount,
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      imageAuth: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      labels: { 'type': 'array', 'itemType': CreateInstanceRequestLabels },
      priority: 'number',
      requestedResource: CreateInstanceRequestRequestedResource,
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      userId: 'string',
      userVpc: CreateInstanceRequestUserVpc,
      workspaceId: 'string',
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
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * *   200
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
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
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerRequest extends $dara.Model {
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
   * The time duration before the instance is stopped. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
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

export class CreateInstanceShutdownTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
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
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceShutdownTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceShutdownTimerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotRequest extends $dara.Model {
  excludePaths?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: CreateInstanceSnapshotRequestLabels[];
  overwrite?: boolean;
  /**
   * @example
   * training_data_env
   */
  snapshotDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * training_data_env
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
      overwrite: 'Overwrite',
      snapshotDescription: 'SnapshotDescription',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      imageUrl: 'string',
      labels: { 'type': 'array', 'itemType': CreateInstanceSnapshotRequestLabels },
      overwrite: 'boolean',
      snapshotDescription: 'string',
      snapshotName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludePaths)) {
      $dara.Model.validateArray(this.excludePaths);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      snapshotId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdleInstanceCullerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * ValidationError
   */
  code?: string;
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
   * The response message.
   * 
   * *   If the request is successful, null is returned.
   * *   If the request fails, the failure cause is returned.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdleInstanceCullerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIdleInstanceCullerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIdleInstanceCullerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * *   200
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
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
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The keys of the tags that you want to delete. Separate multiple tags with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * labelKey1,labelKey2,labelKey3
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceShutdownTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
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
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceShutdownTimerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceShutdownTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceShutdownTimerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      snapshotId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdleInstanceCullerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * ValidationError
   */
  code?: string;
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
   * The time duration for which the instance is idle. Unit: minutes.
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
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdleInstanceCullerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIdleInstanceCullerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIdleInstanceCullerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The sharing token information.
   * 
   * @example
   * WUzWCMr325LV0bH2JH4C4HoDaKIU6C4S
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
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
      nodeErrorRecovery: 'NodeErrorRecovery',
      paymentType: 'PaymentType',
      priority: 'Priority',
      proxyPath: 'ProxyPath',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      requestedResource: 'RequestedResource',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      success: 'Success',
      tags: 'Tags',
      terminalUrl: 'TerminalUrl',
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
      nodeErrorRecovery: GetInstanceResponseBodyNodeErrorRecovery,
      paymentType: 'string',
      priority: 'number',
      proxyPath: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      requestedResource: GetInstanceResponseBodyRequestedResource,
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      success: 'boolean',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyTags },
      terminalUrl: 'string',
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
    if(this.nodeErrorRecovery && typeof (this.nodeErrorRecovery as any).validate === 'function') {
      (this.nodeErrorRecovery as any).validate();
    }
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
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

export class GetInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of events. Default value: 2000.
   * 
   * @example
   * 2000
   */
  maxEventsNum?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The token used to share the URL.
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      startTime: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * None
   */
  code?: string;
  /**
   * @remarks
   * The events.
   */
  events?: string[];
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400: One or more parameters are invalid.
   * *   404: The instance does not exist.
   * *   200: The request is normal.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * The response message.
   * 
   * @example
   * XXX
   */
  message?: string;
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
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      events: 'Events',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * *   GpuCoreUsage: the GPU utilization.
   * *   GpuMemoryUsage: the GPU memory utilization.
   * *   CpuCoreUsage: the CPU utilization.
   * *   MemoryUsage: the memory utilization.
   * *   NetworkInputRate: the network ingress rate.
   * *   NetworkOutputRate: the network egress rate.
   * *   DiskReadRate: the disk read rate.
   * *   DiskWriteRate: the disk write rate.
   * 
   * This parameter is required.
   * 
   * @example
   * GpuCoreUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The interval at which metrics are returned. Unit: minutes.
   * 
   * @example
   * 15m
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
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
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The information about the metrics of the pod that corresponds to the instance.
   */
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
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
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      podMetrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetrics },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.podMetrics)) {
      $dara.Model.validateArray(this.podMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      remainingTimeInMs: 'RemainingTimeInMs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      remainingTimeInMs: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceShutdownTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceShutdownTimerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  excludePaths?: string[];
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * {\"foo\": \"bar\"}
   */
  labels?: GetInstanceSnapshotResponseBodyLabels[];
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * training_data_env
   */
  snapshotName?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      excludePaths: 'ExcludePaths',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      labels: 'Labels',
      message: 'Message',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': GetInstanceSnapshotResponseBodyLabels },
      message: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.excludePaths)) {
      $dara.Model.validateArray(this.excludePaths);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of sessions to query.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The sorting order of the results. Valid values:
   * 
   * *   ASC: sorted by time in ascending order.
   * *   DESC: sorted by time in descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * A session refers to the process of an instance from startup to failure or shutdown. The sessionNumber indicates the offset value for the instance\\"s session sequence.
   * 
   * @example
   * 1
   */
  sessionNumber?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The token used to share the URL.
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      order: 'Order',
      sessionNumber: 'SessionNumber',
      startTime: 'StartTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      order: 'string',
      sessionNumber: 'number',
      startTime: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleResponseBody extends $dara.Model {
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
   * The lifecycle details.
   * 
   * @example
   * [[{"Status":"Creating","GmtCreateTime":"2022-09-19T22:38:00Z","Reason":"","ReasonCode":""}]]
   */
  lifecycle?: GetLifecycleResponseBodyLifecycle[][];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * The total number of queried sessions.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lifecycle: 'Lifecycle',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lifecycle: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetLifecycleResponseBodyLifecycle } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycle)) {
      $dara.Model.validateArray(this.lifecycle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLifecycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLifecycleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsRequest extends $dara.Model {
  /**
   * @example
   * {"userId":"16122852825*****","jobId":"dsw-328d2bbf605*****","regionId":"cn-wulanchabu","pod":"dsw-45680-76766f8778-95gxh"}
   */
  dimensions?: string;
  /**
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  length?: string;
  /**
   * @example
   * INSTANCE_SPEC_MEMORY_SWAP
   */
  metricName?: string;
  /**
   * @example
   * acs_pai_dsw
   */
  namespace?: string;
  /**
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  datapoints?: string;
  /**
   * @example
   * Succeed
   */
  message?: string;
  /**
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27218,34956
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      resourceId: 'string',
      startTime: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statistics: 'Statistics',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      success: 'boolean',
    };
  }

  validate() {
    if(this.statistics) {
      $dara.Model.validateMap(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period. Unit: seconds.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: All errors, except for parameter validation errors, are internal errors.
   * *   ValidationError: A parameter validation error.
   * 
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * The temporary authentication information of the DSW instance.
   * 
   * @example
   * *******
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  accountSufficient?: boolean;
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * true
   */
  enableEciDisk?: boolean;
  freeTier?: GetUserConfigResponseBodyFreeTier;
  /**
   * @example
   * true
   */
  freeTierSpecAvailable?: boolean;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "Access denied"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountSufficient: 'AccountSufficient',
      code: 'Code',
      enableEciDisk: 'EnableEciDisk',
      freeTier: 'FreeTier',
      freeTierSpecAvailable: 'FreeTierSpecAvailable',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSufficient: 'boolean',
      code: 'string',
      enableEciDisk: 'boolean',
      freeTier: GetUserConfigResponseBodyFreeTier,
      freeTierSpecAvailable: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.freeTier && typeof (this.freeTier as any).validate === 'function') {
      (this.freeTier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  acceleratorType?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * gmtCreate
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  ecsSpecs?: ListEcsSpecsResponseBodyEcsSpecs[];
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecsSpecs: 'EcsSpecs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ecsSpecs: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecs },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEcsSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEcsSpecsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotRequest extends $dara.Model {
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * gmtCreate
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  snapshots?: ListInstanceSnapshotResponseBodySnapshots[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListInstanceSnapshotResponseBodySnapshots },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27218,34956
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statistics: 'Statistics',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      success: 'boolean',
    };
  }

  validate() {
    if(this.statistics) {
      $dara.Model.validateMap(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * *   CPU: Only CPU computing is used.
   * *   GPU: GPUs are used to accelerate computing.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PRIVATE (default): The instances are accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The instances are accessible only to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 12345*****67890
   */
  createUserId?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA A10
   */
  gpuType?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * modelscope:1.9.4-pytorch2.0.1tensorflow2.13.0-cpu-py38-ubuntu20.04
   */
  imageName?: string;
  /**
   * @remarks
   * The instance ID. You can call [ListInstances](https://help.aliyun.com/document_detail/470439.html) to obtain the instance ID.
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
   * The labels. A maximum of four labels are supported.
   * 
   * @example
   * {
   *   "key1": "value1",
   *   "key2": "value2",
   *   "key3": "value3"
   * }
   */
  labels?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of CPUs. Unit: 0.001 CPU. The value 1000 indicates one CPU.
   * 
   * @example
   * 30000
   */
  maxCpu?: string;
  /**
   * @remarks
   * The maximum number of GPUs. Unit: 0.001 GPU. The value 1000 indicates one GPU.
   * 
   * @example
   * 8000
   */
  maxGpu?: string;
  /**
   * @remarks
   * The maximum memory size per GPU card. Unit: GB.
   * 
   * @example
   * 16
   */
  maxGpuMemory?: string;
  /**
   * @remarks
   * The maximum memory size. Unit: GB.
   * 
   * @example
   * 48
   */
  maxMemory?: string;
  /**
   * @remarks
   * The minimum number of CPUs. Unit: 0.001 CPU. The value 1000 indicates one CPU.
   * 
   * @example
   * 2000
   */
  minCpu?: string;
  /**
   * @remarks
   * The minimum number of GPUs. Unit: 0.001 GPU. The value 1000 indicates one GPU.
   * 
   * @example
   * 100
   */
  minGpu?: string;
  /**
   * @remarks
   * The minimum memory size per GPU card. Unit: GB.
   * 
   * @example
   * 8
   */
  minGpuMemory?: string;
  /**
   * @remarks
   * The minimum memory size. Unit: GB.
   * 
   * @example
   * 4
   */
  minMemory?: string;
  /**
   * @remarks
   * The order that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  oversoldInfo?: string;
  oversoldType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource group ID. If you leave this parameter empty, the instances in the pay-as-you-go resource group are queried. If you set this parameter to ALL, all instances are queried.
   * 
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   Priority
   * *   GmtCreateTime
   * *   GmtModifiedTime
   * 
   * @example
   * gmtCreate
   */
  sortBy?: string;
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
   * The tags.
   */
  tag?: ListInstancesRequestTag[];
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      createUserId: 'CreateUserId',
      gpuType: 'GpuType',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      labels: 'Labels',
      maxCpu: 'MaxCpu',
      maxGpu: 'MaxGpu',
      maxGpuMemory: 'MaxGpuMemory',
      maxMemory: 'MaxMemory',
      minCpu: 'MinCpu',
      minGpu: 'MinGpu',
      minGpuMemory: 'MinGpuMemory',
      minMemory: 'MinMemory',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      oversoldType: 'OversoldType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      resourceId: 'ResourceId',
      sortBy: 'SortBy',
      status: 'Status',
      tag: 'Tag',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      createUserId: 'string',
      gpuType: 'string',
      imageName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxCpu: 'string',
      maxGpu: 'string',
      maxGpuMemory: 'string',
      maxMemory: 'string',
      minCpu: 'string',
      minGpu: 'string',
      minGpuMemory: 'string',
      minMemory: 'string',
      order: 'string',
      oversoldInfo: 'string',
      oversoldType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      resourceId: 'string',
      sortBy: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
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

export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * *   CPU: Only CPU computing is used.
   * *   GPU: GPUs are used to accelerate computing.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PRIVATE (default): The instances are accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The instances are accessible only to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 12345*****67890
   */
  createUserId?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA A10
   */
  gpuType?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * modelscope:1.9.4-pytorch2.0.1tensorflow2.13.0-cpu-py38-ubuntu20.04
   */
  imageName?: string;
  /**
   * @remarks
   * The instance ID. You can call [ListInstances](https://help.aliyun.com/document_detail/470439.html) to obtain the instance ID.
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
   * The labels. A maximum of four labels are supported.
   * 
   * @example
   * {
   *   "key1": "value1",
   *   "key2": "value2",
   *   "key3": "value3"
   * }
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The maximum number of CPUs. Unit: 0.001 CPU. The value 1000 indicates one CPU.
   * 
   * @example
   * 30000
   */
  maxCpu?: string;
  /**
   * @remarks
   * The maximum number of GPUs. Unit: 0.001 GPU. The value 1000 indicates one GPU.
   * 
   * @example
   * 8000
   */
  maxGpu?: string;
  /**
   * @remarks
   * The maximum memory size per GPU card. Unit: GB.
   * 
   * @example
   * 16
   */
  maxGpuMemory?: string;
  /**
   * @remarks
   * The maximum memory size. Unit: GB.
   * 
   * @example
   * 48
   */
  maxMemory?: string;
  /**
   * @remarks
   * The minimum number of CPUs. Unit: 0.001 CPU. The value 1000 indicates one CPU.
   * 
   * @example
   * 2000
   */
  minCpu?: string;
  /**
   * @remarks
   * The minimum number of GPUs. Unit: 0.001 GPU. The value 1000 indicates one GPU.
   * 
   * @example
   * 100
   */
  minGpu?: string;
  /**
   * @remarks
   * The minimum memory size per GPU card. Unit: GB.
   * 
   * @example
   * 8
   */
  minGpuMemory?: string;
  /**
   * @remarks
   * The minimum memory size. Unit: GB.
   * 
   * @example
   * 4
   */
  minMemory?: string;
  /**
   * @remarks
   * The order that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  oversoldInfo?: string;
  oversoldType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The resource group ID. If you leave this parameter empty, the instances in the pay-as-you-go resource group are queried. If you set this parameter to ALL, all instances are queried.
   * 
   * @example
   * rg-123456789
   */
  resourceId?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   Priority
   * *   GmtCreateTime
   * *   GmtModifiedTime
   * 
   * @example
   * gmtCreate
   */
  sortBy?: string;
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
   * The tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 40823
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      createUserId: 'CreateUserId',
      gpuType: 'GpuType',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      labelsShrink: 'Labels',
      maxCpu: 'MaxCpu',
      maxGpu: 'MaxGpu',
      maxGpuMemory: 'MaxGpuMemory',
      maxMemory: 'MaxMemory',
      minCpu: 'MinCpu',
      minGpu: 'MinGpu',
      minGpuMemory: 'MinGpuMemory',
      minMemory: 'MinMemory',
      order: 'Order',
      oversoldInfo: 'OversoldInfo',
      oversoldType: 'OversoldType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      resourceId: 'ResourceId',
      sortBy: 'SortBy',
      status: 'Status',
      tagShrink: 'Tag',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      createUserId: 'string',
      gpuType: 'string',
      imageName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      labelsShrink: 'string',
      maxCpu: 'string',
      maxGpu: 'string',
      maxGpuMemory: 'string',
      maxMemory: 'string',
      minCpu: 'string',
      minGpu: 'string',
      minGpuMemory: 'string',
      minMemory: 'string',
      order: 'string',
      oversoldInfo: 'string',
      oversoldType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      resourceId: 'string',
      sortBy: 'string',
      status: 'string',
      tagShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
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
   * The instances returned on this page.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful.
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
   * The total number of instances.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  saveImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      saveImage: 'SaveImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saveImage: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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
  /**
   * @remarks
   * Specifies whether to delete the associated forward information.
   * 
   * @example
   * false
   */
  disassociateForwardInfos?: boolean;
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
      cloudDisks: 'CloudDisks',
      credentialConfig: 'CredentialConfig',
      datasets: 'Datasets',
      disassociateCredential: 'DisassociateCredential',
      disassociateDatasets: 'DisassociateDatasets',
      disassociateDriver: 'DisassociateDriver',
      disassociateForwardInfos: 'DisassociateForwardInfos',
      disassociateVpc: 'DisassociateVpc',
      driver: 'Driver',
      dynamicMount: 'DynamicMount',
      ecsSpec: 'EcsSpec',
      imageAuth: 'ImageAuth',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      priority: 'Priority',
      requestedResource: 'RequestedResource',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceSource: 'WorkspaceSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      affinity: UpdateInstanceRequestAffinity,
      cloudDisks: { 'type': 'array', 'itemType': UpdateInstanceRequestCloudDisks },
      credentialConfig: CredentialConfig,
      datasets: { 'type': 'array', 'itemType': UpdateInstanceRequestDatasets },
      disassociateCredential: 'boolean',
      disassociateDatasets: 'boolean',
      disassociateDriver: 'boolean',
      disassociateForwardInfos: 'boolean',
      disassociateVpc: 'boolean',
      driver: 'string',
      dynamicMount: DynamicMount,
      ecsSpec: 'string',
      imageAuth: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      priority: 'number',
      requestedResource: UpdateInstanceRequestRequestedResource,
      userId: 'string',
      userVpc: UpdateInstanceRequestUserVpc,
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
    if(this.requestedResource && typeof (this.requestedResource as any).validate === 'function') {
      (this.requestedResource as any).validate();
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

export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
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
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tags that you want to update.
   * 
   * This parameter is required.
   */
  labels?: UpdateInstanceLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateInstanceLabelsRequestLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pai-dsw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates an automatic stop policy for a specific Data Science Workshop (DSW) instance. When the conditions are met, the instance is automatically stopped. You can create only one automatic stop policy for an idle DSW instance. If the specific instance has an automatic stop policy, call DeleteIdleInstanceCuller to delete it first.
   * 
   * @param request - CreateIdleInstanceCullerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdleInstanceCullerResponse
   */
  async createIdleInstanceCullerWithOptions(InstanceId: string, request: CreateIdleInstanceCullerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateIdleInstanceCullerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpuPercentThreshold)) {
      body["CpuPercentThreshold"] = request.cpuPercentThreshold;
    }

    if (!$dara.isNull(request.gpuPercentThreshold)) {
      body["GpuPercentThreshold"] = request.gpuPercentThreshold;
    }

    if (!$dara.isNull(request.maxIdleTimeInMinutes)) {
      body["MaxIdleTimeInMinutes"] = request.maxIdleTimeInMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/idleinstanceculler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new CreateIdleInstanceCullerResponse({}));
  }

  /**
   * Creates an automatic stop policy for a specific Data Science Workshop (DSW) instance. When the conditions are met, the instance is automatically stopped. You can create only one automatic stop policy for an idle DSW instance. If the specific instance has an automatic stop policy, call DeleteIdleInstanceCuller to delete it first.
   * 
   * @param request - CreateIdleInstanceCullerRequest
   * @returns CreateIdleInstanceCullerResponse
   */
  async createIdleInstanceCuller(InstanceId: string, request: CreateIdleInstanceCullerRequest): Promise<CreateIdleInstanceCullerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdleInstanceCullerWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Creates a Data Science Workshop (DSW) instance.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.affinity)) {
      body["Affinity"] = request.affinity;
    }

    if (!$dara.isNull(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
    }

    if (!$dara.isNull(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!$dara.isNull(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!$dara.isNull(request.driver)) {
      body["Driver"] = request.driver;
    }

    if (!$dara.isNull(request.dynamicMount)) {
      body["DynamicMount"] = request.dynamicMount;
    }

    if (!$dara.isNull(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!$dara.isNull(request.environmentVariables)) {
      body["EnvironmentVariables"] = request.environmentVariables;
    }

    if (!$dara.isNull(request.imageAuth)) {
      body["ImageAuth"] = request.imageAuth;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.requestedResource)) {
      body["RequestedResource"] = request.requestedResource;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceSource)) {
      body["WorkspaceSource"] = request.workspaceSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates a Data Science Workshop (DSW) instance.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a scheduled stop task for an instance.
   * 
   * @param request - CreateInstanceShutdownTimerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceShutdownTimerResponse
   */
  async createInstanceShutdownTimerWithOptions(InstanceId: string, request: CreateInstanceShutdownTimerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceShutdownTimerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dueTime)) {
      body["DueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.remainingTimeInMs)) {
      body["RemainingTimeInMs"] = request.remainingTimeInMs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/shutdowntimer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new CreateInstanceShutdownTimerResponse({}));
  }

  /**
   * Creates a scheduled stop task for an instance.
   * 
   * @param request - CreateInstanceShutdownTimerRequest
   * @returns CreateInstanceShutdownTimerResponse
   */
  async createInstanceShutdownTimer(InstanceId: string, request: CreateInstanceShutdownTimerRequest): Promise<CreateInstanceShutdownTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceShutdownTimerWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建实例快照
   * 
   * @param request - CreateInstanceSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceSnapshotResponse
   */
  async createInstanceSnapshotWithOptions(InstanceId: string, request: CreateInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceSnapshotResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludePaths)) {
      body["ExcludePaths"] = request.excludePaths;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.snapshotDescription)) {
      body["SnapshotDescription"] = request.snapshotDescription;
    }

    if (!$dara.isNull(request.snapshotName)) {
      body["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new CreateInstanceSnapshotResponse({}));
  }

  /**
   * 创建实例快照
   * 
   * @param request - CreateInstanceSnapshotRequest
   * @returns CreateInstanceSnapshotResponse
   */
  async createInstanceSnapshot(InstanceId: string, request: CreateInstanceSnapshotRequest): Promise<CreateInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes the automatic stop policy of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdleInstanceCullerResponse
   */
  async deleteIdleInstanceCullerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteIdleInstanceCullerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/idleinstanceculler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new DeleteIdleInstanceCullerResponse({}));
  }

  /**
   * Deletes the automatic stop policy of an instance.
   * @returns DeleteIdleInstanceCullerResponse
   */
  async deleteIdleInstanceCuller(InstanceId: string): Promise<DeleteIdleInstanceCullerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Deletes a specific instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * Deletes a specific instance.
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(InstanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Delete tags from a Data Science Workshop (DSW) instance.
   * 
   * @param request - DeleteInstanceLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceLabelsResponse
   */
  async deleteInstanceLabelsWithOptions(InstanceId: string, request: DeleteInstanceLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceLabels",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteInstanceLabelsResponse>(await this.callApi(params, req, runtime), new DeleteInstanceLabelsResponse({}));
  }

  /**
   * Delete tags from a Data Science Workshop (DSW) instance.
   * 
   * @param request - DeleteInstanceLabelsRequest
   * @returns DeleteInstanceLabelsResponse
   */
  async deleteInstanceLabels(InstanceId: string, request: DeleteInstanceLabelsRequest): Promise<DeleteInstanceLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceLabelsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes a scheduled stop task of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceShutdownTimerResponse
   */
  async deleteInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceShutdownTimerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/shutdowntimer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new DeleteInstanceShutdownTimerResponse({}));
  }

  /**
   * Deletes a scheduled stop task of an instance.
   * @returns DeleteInstanceShutdownTimerResponse
   */
  async deleteInstanceShutdownTimer(InstanceId: string): Promise<DeleteInstanceShutdownTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例快照详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceSnapshotResponse
   */
  async deleteInstanceSnapshotWithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots/${$dara.URL.percentEncode(SnapshotId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteInstanceSnapshotResponse({}));
  }

  /**
   * 获取实例快照详情
   * @returns DeleteInstanceSnapshotResponse
   */
  async deleteInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<DeleteInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  /**
   * Queries the information about an auto stop policy for a specific idle instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdleInstanceCullerResponse
   */
  async getIdleInstanceCullerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIdleInstanceCullerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/idleinstanceculler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new GetIdleInstanceCullerResponse({}));
  }

  /**
   * Queries the information about an auto stop policy for a specific idle instance.
   * @returns GetIdleInstanceCullerResponse
   */
  async getIdleInstanceCuller(InstanceId: string): Promise<GetIdleInstanceCullerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the details of a DSW instance.
   * 
   * @param request - GetInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, request: GetInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * Queries the details of a DSW instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string, request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries a list of system events for a Data Science Workshop (DSW) instance.
   * 
   * @param request - GetInstanceEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceEventsResponse
   */
  async getInstanceEventsWithOptions(InstanceId: string, request: GetInstanceEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceEvents",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceEventsResponse>(await this.callApi(params, req, runtime), new GetInstanceEventsResponse({}));
  }

  /**
   * Queries a list of system events for a Data Science Workshop (DSW) instance.
   * 
   * @param request - GetInstanceEventsRequest
   * @returns GetInstanceEventsResponse
   */
  async getInstanceEvents(InstanceId: string, request: GetInstanceEventsRequest): Promise<GetInstanceEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceEventsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the resource metrics of an instance.
   * 
   * @param request - GetInstanceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetricsWithOptions(InstanceId: string, request: GetInstanceMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceMetrics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instance/${$dara.URL.percentEncode(InstanceId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceMetricsResponse>(await this.callApi(params, req, runtime), new GetInstanceMetricsResponse({}));
  }

  /**
   * Queries the resource metrics of an instance.
   * 
   * @param request - GetInstanceMetricsRequest
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetrics(InstanceId: string, request: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取定时关机任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceShutdownTimerResponse
   */
  async getInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceShutdownTimerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/shutdowntimer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new GetInstanceShutdownTimerResponse({}));
  }

  /**
   * 获取定时关机任务
   * @returns GetInstanceShutdownTimerResponse
   */
  async getInstanceShutdownTimer(InstanceId: string): Promise<GetInstanceShutdownTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例快照详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSnapshotResponse
   */
  async getInstanceSnapshotWithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstanceSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots/${$dara.URL.percentEncode(SnapshotId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new GetInstanceSnapshotResponse({}));
  }

  /**
   * 获取实例快照详情
   * @returns GetInstanceSnapshotResponse
   */
  async getInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<GetInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  /**
   * Obtains the lifecycle of an instance
   * 
   * @remarks
   * Obtains the lifecycle transition information for an instance, including details on the status an instance transitions to at a specific point in time.
   * 
   * @param request - GetLifecycleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLifecycleResponse
   */
  async getLifecycleWithOptions(InstanceId: string, request: GetLifecycleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLifecycleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.sessionNumber)) {
      query["SessionNumber"] = request.sessionNumber;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLifecycle",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/lifecycle`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetLifecycleResponse>(await this.callApi(params, req, runtime), new GetLifecycleResponse({}));
  }

  /**
   * Obtains the lifecycle of an instance
   * 
   * @remarks
   * Obtains the lifecycle transition information for an instance, including details on the status an instance transitions to at a specific point in time.
   * 
   * @param request - GetLifecycleRequest
   * @returns GetLifecycleResponse
   */
  async getLifecycle(InstanceId: string, request: GetLifecycleRequest): Promise<GetLifecycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLifecycleWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取metrics数据
   * 
   * @param request - GetMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetricsResponse
   */
  async getMetricsWithOptions(InstanceId: string, request: GetMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetrics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instance/${$dara.URL.percentEncode(InstanceId)}/cms/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetMetricsResponse>(await this.callApi(params, req, runtime), new GetMetricsResponse({}));
  }

  /**
   * 获取metrics数据
   * 
   * @param request - GetMetricsRequest
   * @returns GetMetricsResponse
   */
  async getMetrics(InstanceId: string, request: GetMetricsRequest): Promise<GetMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - GetResourceGroupStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupStatisticsResponse
   */
  async getResourceGroupStatisticsWithOptions(request: GetResourceGroupStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceGroupStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupStatistics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resourcegroupstatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetResourceGroupStatisticsResponse>(await this.callApi(params, req, runtime), new GetResourceGroupStatisticsResponse({}));
  }

  /**
   * @param request - GetResourceGroupStatisticsRequest
   * @returns GetResourceGroupStatisticsResponse
   */
  async getResourceGroupStatistics(request: GetResourceGroupStatisticsRequest): Promise<GetResourceGroupStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the temporary authentication information of a DSW instance.
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * Obtains the temporary authentication information of a DSW instance.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserConfigResponse
   */
  async getUserConfigWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetUserConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/userconfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetUserConfigResponse>(await this.callApi(params, req, runtime), new GetUserConfigResponse({}));
  }

  /**
   * 获取用户配置
   * @returns GetUserConfigResponse
   */
  async getUserConfig(): Promise<GetUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserConfigWithOptions(headers, runtime);
  }

  /**
   * 获取ECS规格列表
   * 
   * @param request - ListEcsSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecsWithOptions(request: ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEcsSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcsSpecs",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/ecsspecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new ListEcsSpecsResponse({}));
  }

  /**
   * 获取ECS规格列表
   * 
   * @param request - ListEcsSpecsRequest
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecs(request: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  /**
   * 查询实例快照列表
   * 
   * @param request - ListInstanceSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceSnapshotResponse
   */
  async listInstanceSnapshotWithOptions(InstanceId: string, request: ListInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceSnapshotResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new ListInstanceSnapshotResponse({}));
  }

  /**
   * 查询实例快照列表
   * 
   * @param request - ListInstanceSnapshotRequest
   * @returns ListInstanceSnapshotResponse
   */
  async listInstanceSnapshot(InstanceId: string, request: ListInstanceSnapshotRequest): Promise<ListInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取实例统计信息
   * 
   * @param request - ListInstanceStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatisticsResponse
   */
  async listInstanceStatisticsWithOptions(request: ListInstanceStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceStatistics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instancestatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new ListInstanceStatisticsResponse({}));
  }

  /**
   * 获取实例统计信息
   * 
   * @param request - ListInstanceStatisticsRequest
   * @returns ListInstanceStatisticsResponse
   */
  async listInstanceStatistics(request: ListInstanceStatisticsRequest): Promise<ListInstanceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of Data Science Workshop (DSW) instances.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    tmpReq.validate();
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.createUserId)) {
      query["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.gpuType)) {
      query["GpuType"] = request.gpuType;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.maxCpu)) {
      query["MaxCpu"] = request.maxCpu;
    }

    if (!$dara.isNull(request.maxGpu)) {
      query["MaxGpu"] = request.maxGpu;
    }

    if (!$dara.isNull(request.maxGpuMemory)) {
      query["MaxGpuMemory"] = request.maxGpuMemory;
    }

    if (!$dara.isNull(request.maxMemory)) {
      query["MaxMemory"] = request.maxMemory;
    }

    if (!$dara.isNull(request.minCpu)) {
      query["MinCpu"] = request.minCpu;
    }

    if (!$dara.isNull(request.minGpu)) {
      query["MinGpu"] = request.minGpu;
    }

    if (!$dara.isNull(request.minGpuMemory)) {
      query["MinGpuMemory"] = request.minGpuMemory;
    }

    if (!$dara.isNull(request.minMemory)) {
      query["MinMemory"] = request.minMemory;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.oversoldInfo)) {
      query["OversoldInfo"] = request.oversoldInfo;
    }

    if (!$dara.isNull(request.oversoldType)) {
      query["OversoldType"] = request.oversoldType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * Queries a list of Data Science Workshop (DSW) instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 启动实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  /**
   * 启动实例
   * @returns StartInstanceResponse
   */
  async startInstance(InstanceId: string): Promise<StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 停止实例
   * 
   * @param request - StopInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(InstanceId: string, request: StopInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.saveImage)) {
      query["SaveImage"] = request.saveImage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  /**
   * 停止实例
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(InstanceId: string, request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the properties of a DSW instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(InstanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.affinity)) {
      body["Affinity"] = request.affinity;
    }

    if (!$dara.isNull(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
    }

    if (!$dara.isNull(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!$dara.isNull(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!$dara.isNull(request.disassociateCredential)) {
      body["DisassociateCredential"] = request.disassociateCredential;
    }

    if (!$dara.isNull(request.disassociateDatasets)) {
      body["DisassociateDatasets"] = request.disassociateDatasets;
    }

    if (!$dara.isNull(request.disassociateDriver)) {
      body["DisassociateDriver"] = request.disassociateDriver;
    }

    if (!$dara.isNull(request.disassociateForwardInfos)) {
      body["DisassociateForwardInfos"] = request.disassociateForwardInfos;
    }

    if (!$dara.isNull(request.disassociateVpc)) {
      body["DisassociateVpc"] = request.disassociateVpc;
    }

    if (!$dara.isNull(request.driver)) {
      body["Driver"] = request.driver;
    }

    if (!$dara.isNull(request.dynamicMount)) {
      body["DynamicMount"] = request.dynamicMount;
    }

    if (!$dara.isNull(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!$dara.isNull(request.imageAuth)) {
      body["ImageAuth"] = request.imageAuth;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.requestedResource)) {
      body["RequestedResource"] = request.requestedResource;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceSource)) {
      body["WorkspaceSource"] = request.workspaceSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  /**
   * Updates the properties of a DSW instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(InstanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the tags of a Data Science Workshop (DSW) instance. If the tags do not exist, the system adds tags.
   * 
   * @param request - UpdateInstanceLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceLabelsResponse
   */
  async updateInstanceLabelsWithOptions(InstanceId: string, request: UpdateInstanceLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceLabels",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/labels`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateInstanceLabelsResponse>(await this.callApi(params, req, runtime), new UpdateInstanceLabelsResponse({}));
  }

  /**
   * Updates the tags of a Data Science Workshop (DSW) instance. If the tags do not exist, the system adds tags.
   * 
   * @param request - UpdateInstanceLabelsRequest
   * @returns UpdateInstanceLabelsResponse
   */
  async updateInstanceLabels(InstanceId: string, request: UpdateInstanceLabelsRequest): Promise<UpdateInstanceLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceLabelsWithOptions(InstanceId, request, headers, runtime);
  }

}
