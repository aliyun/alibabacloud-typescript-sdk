// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddExistedNodesRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The Nth node ID. N starts from 1. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp16mxn6mt3t7ftk****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesRequestDataDisks extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: SSD
   * *   cloud_essd: ESSD
   * *   cloud: basic disk
   * 
   * Default value: cloud_efficiency.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * cloud_efficiency
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * Specifies whether the data disk is released when the node is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * true
   */
  dataDiskDeleteWithInstance?: boolean;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * false
   */
  dataDiskEncrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID of the data disk.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  dataDiskKMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the data disk. The parameter only takes effect only when the DataDisks.N.DataDiskCategory parameter is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * PL1
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The permission group of the new user. Valid values:
   * 
   * *   users: ordinary permissions, which are suitable for ordinary users that need only to submit and debug jobs.
   * *   wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The username of the new user. The username must be 6 to 30 characters in length, and can contain letters, digits and periods (.). The username must start with a letter.
   * 
   * @example
   * user1
   */
  name?: string;
  /**
   * @remarks
   * The password of the new user. The password must be 8 to 30 characters in length and must contain at least three of the following character types:
   * 
   * *   Uppercase letter
   * *   Lowercase letter
   * *   Digit
   * *   Special character: `()~!@#$%^&*-_+=|{}[]:;\\"/<>,.?/`
   * 
   * >  We recommend that you use HTTPS to call this operation to avoid password leaks.
   * 
   * @example
   * 1@a2****
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestInstanceTypeModel extends $dara.Model {
  /**
   * @remarks
   * The instance type of the compute node. The default value is the instance type that was specified when you created the cluster or the last time you added compute nodes.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price that you can pay for the preemptible node. The value is a floating-point number that supports up to three decimal places.
   * 
   * The parameter takes effect only when ComputeSpotStrategy is set to SpotWithPriceLimit.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * 0.034
   */
  maxPrice?: number;
  /**
   * @remarks
   * The image ID of the compute node. You must select a Windows image.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * win2016_1607_x64_dtc_zh-cn_40G_alibase_20210516.vhd
   */
  targetImageId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      targetImageId: 'TargetImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      targetImageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot start with acs: or contain http:// or https://.
   * 
   * Valid values of N: 1 to 20.
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

export class ApplyNodesRequestZoneInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch. Valid values of N: 1 to 10.
   * 
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone to which the node belongs. Valid values of N: 1 to 10.
   * 
   * >  Each zone ID must be unique.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderCompute extends $dara.Model {
  /**
   * @remarks
   * The number of compute nodes in the cluster. Valid values: 0 to 99.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the compute nodes.
   * 
   * You can call the [ListPreferredEcsTypes](https://help.aliyun.com/document_detail/188592.html) operation to query the recommended instance types.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderLogin extends $dara.Model {
  /**
   * @remarks
   * The number of the logon nodes. Valid value: 1.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the logon nodes.
   * 
   * You can call the [ListPreferredEcsTypes](https://help.aliyun.com/document_detail/188592.html) operation to query the recommended instance types.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderManager extends $dara.Model {
  /**
   * @remarks
   * The number of the management nodes. Valid values: 1 and 2.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the management nodes.
   * 
   * You can call the [ListPreferredEcsTypes](https://help.aliyun.com/document_detail/188592.html) operation to query the recommended instance types.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrder extends $dara.Model {
  compute?: CreateClusterRequestEcsOrderCompute;
  login?: CreateClusterRequestEcsOrderLogin;
  manager?: CreateClusterRequestEcsOrderManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateClusterRequestEcsOrderCompute,
      login: CreateClusterRequestEcsOrderLogin,
      manager: CreateClusterRequestEcsOrderManager,
    };
  }

  validate() {
    if(this.compute && typeof (this.compute as any).validate === 'function') {
      (this.compute as any).validate();
    }
    if(this.login && typeof (this.login as any).validate === 'function') {
      (this.login as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAddOns extends $dara.Model {
  /**
   * @remarks
   * The path to the configuration file.
   * 
   * @example
   * /usr/local/addon/cromwell/cromwell.conf
   */
  configFile?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values: Mysql, and null.
   * 
   * @example
   * Mysql
   */
  DBType?: string;
  /**
   * @remarks
   * Indicates whether to auto-start the custom component. Valid values: true and false.
   * 
   * @example
   * true
   */
  defaultStart?: boolean;
  /**
   * @remarks
   * The deployment mode. Valid values: local and ecs.
   * 
   * @example
   * local
   */
  deployMode?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * cromwell
   */
  name?: string;
  /**
   * @remarks
   * The access port of the custom component.
   * 
   * @example
   * 10000
   */
  port?: number;
  /**
   * @remarks
   * The version number of the component.
   * 
   * @example
   * 85
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configFile: 'ConfigFile',
      DBType: 'DBType',
      defaultStart: 'DefaultStart',
      deployMode: 'DeployMode',
      name: 'Name',
      port: 'Port',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFile: 'string',
      DBType: 'string',
      defaultStart: 'boolean',
      deployMode: 'string',
      name: 'string',
      port: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalVolumesRoles extends $dara.Model {
  /**
   * @remarks
   * The type of the nodes to which the NAS file system is attached.
   * 
   * Valid values of N in AdditionalVolumes.N.Roles: 1 to 10
   * 
   * Valid values of N in Roles.N.Name: 0 to 8.
   * 
   * @example
   * ["Compute"]
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalVolumes extends $dara.Model {
  /**
   * @remarks
   * The queue of the nodes to which the NAS file system is attached.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * high
   */
  jobQueue?: string;
  /**
   * @remarks
   * The local directory on which the NAS file system is mounted.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * /ff
   */
  localDirectory?: string;
  /**
   * @remarks
   * The type of the E-HPC cluster. Set the value to PublicCloud.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The remote directory to which the NAS file system is mounted.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * /test
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The node information to which the NAS file system is attached.
   */
  roles?: CreateClusterRequestAdditionalVolumesRoles[];
  /**
   * @remarks
   * The ID of the NAS file system.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * extreme-00b88****
   */
  volumeId?: string;
  /**
   * @remarks
   * The mount options of the NAS file system.
   * 
   * You can specify 1 to 10 vCPUs.
   * 
   * @example
   * -t nfs -o vers=4.0
   */
  volumeMountOption?: string;
  /**
   * @remarks
   * The mount target of the NAS file system.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * 0088****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The type of the protocol that is used by the NAS file system. Valid value:
   * 
   * *   NFS
   * *   SMB
   * 
   * Valid values of N: 1 to 10.
   * 
   * Default value: NFS.
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the additional shared storage. Only NAS file systems are supported.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * nas
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      remoteDirectory: 'RemoteDirectory',
      roles: 'Roles',
      volumeId: 'VolumeId',
      volumeMountOption: 'VolumeMountOption',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      remoteDirectory: 'string',
      roles: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalVolumesRoles },
      volumeId: 'string',
      volumeMountOption: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
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

export class CreateClusterRequestApplication extends $dara.Model {
  /**
   * @remarks
   * The tag of the software.
   * 
   * Valid values of N: 0 to 100.
   * 
   * You can call the [ListSoftwares](https://help.aliyun.com/document_detail/87216.html) operation to query the tag of the software.
   * 
   * @example
   * OpenMPI_11.1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestPostInstallScript extends $dara.Model {
  /**
   * @remarks
   * The parameter that is used to run the script after the cluster is created.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * bashfile.sh
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the script after the E-HPC cluster is created.
   * 
   * Valid values of N: 0 to 16
   * 
   * @example
   * /opt/job.sh
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class CreateHybridClusterRequestEcsOrderCompute extends $dara.Model {
  /**
   * @remarks
   * The instance type of the compute nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestEcsOrderManager extends $dara.Model {
  /**
   * @remarks
   * The instance type of the management node. Only Proxy Mode is supported.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestEcsOrder extends $dara.Model {
  compute?: CreateHybridClusterRequestEcsOrderCompute;
  manager?: CreateHybridClusterRequestEcsOrderManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateHybridClusterRequestEcsOrderCompute,
      manager: CreateHybridClusterRequestEcsOrderManager,
    };
  }

  validate() {
    if(this.compute && typeof (this.compute as any).validate === 'function') {
      (this.compute as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestApplication extends $dara.Model {
  /**
   * @remarks
   * The tag of the software.
   * 
   * @example
   * OpenMPI_11.1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestNodes extends $dara.Model {
  /**
   * @remarks
   * The service type of the domain account to which the on-premises node in the cluster belongs. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * Default value: nis.
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The directory of the on-premises node in the cluster.
   * 
   * @example
   * /opt/sge/default/
   */
  dir?: string;
  /**
   * @remarks
   * The hostname of the on-premises node in the cluster.
   * 
   * @example
   * test1
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the on-premises node in the cluster.
   * 
   * @example
   * 00b648b****
   */
  ipAddress?: string;
  /**
   * @remarks
   * The role of the on-premises node in the cluster. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * @example
   * Compute
   */
  role?: string;
  /**
   * @remarks
   * The scheduler type of the on-premises node in the cluster. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * Default value: pbs.
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      dir: 'Dir',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      role: 'Role',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      dir: 'string',
      hostName: 'string',
      ipAddress: 'string',
      role: 'string',
      schedulerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestOpenldapPar extends $dara.Model {
  /**
   * @remarks
   * The BaseDN of the LDAP server.
   * 
   * @example
   * ehpctest
   */
  baseDn?: string;
  /**
   * @remarks
   * The home directory of the Linux server.
   * 
   * @example
   * /home
   */
  fallbackHomeDir?: string;
  /**
   * @remarks
   * The IP address of the LDAP server.
   * 
   * @example
   * 192.168.1.2
   */
  ldapServerIp?: string;
  static names(): { [key: string]: string } {
    return {
      baseDn: 'BaseDn',
      fallbackHomeDir: 'FallbackHomeDir',
      ldapServerIp: 'LdapServerIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseDn: 'string',
      fallbackHomeDir: 'string',
      ldapServerIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestPostInstallScript extends $dara.Model {
  /**
   * @remarks
   * The parameter that is used to run the script after the cluster is created.
   * 
   * @example
   * bash file.sh
   */
  args?: string;
  /**
   * @remarks
   * The full path of the post-installation script.
   * 
   * @example
   * /opt/job.sh
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestWinAdPar extends $dara.Model {
  /**
   * @remarks
   * The name of the AD domain.
   * 
   * @example
   * ad-hybrid001.ehpcad.com
   */
  adDc?: string;
  /**
   * @remarks
   * The IP address of the AD domain.
   * 
   * @example
   * 192.168.1.2
   */
  adIp?: string;
  /**
   * @remarks
   * The AD user.
   * 
   * @example
   * Administrator
   */
  adUser?: string;
  /**
   * @remarks
   * The password of the AD user.
   * 
   * @example
   * xxxxxx
   */
  adUserPasswd?: string;
  static names(): { [key: string]: string } {
    return {
      adDc: 'AdDc',
      adIp: 'AdIp',
      adUser: 'AdUser',
      adUserPasswd: 'AdUserPasswd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDc: 'string',
      adIp: 'string',
      adUser: 'string',
      adUserPasswd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute node that you want to delete. Valid values of N: 1 to 100.
   * 
   * You can call the [DescribeCluster](https://help.aliyun.com/document_detail/87126.html) operation to query the IDs of the nodes in the cluster.
   * 
   * @example
   * i-bp13p7vlcb1uihfv****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The name of the user N that you want to delete. Valid values of N: 1 to 100.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the users of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoAddOnsInfoAddOnsInfo extends $dara.Model {
  /**
   * @remarks
   * The deployment mode of the custom component. Valid values:
   * 
   * *   local
   * *   ecs
   * 
   * @example
   * local
   */
  deployMode?: string;
  /**
   * @remarks
   * The TCP port number of the custom component.
   * 
   * @example
   * 10000
   */
  port?: number;
  /**
   * @remarks
   * The software ID of the component.
   * 
   * @example
   * CROMWELL_85
   */
  softwareId?: string;
  /**
   * @remarks
   * The running status of the custom component. Valid values:
   * 
   * *   running
   * *   stopped
   * *   exception
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The URL of the custom component service.
   * 
   * @example
   * http://172.16.10.12:10000/
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      deployMode: 'DeployMode',
      port: 'Port',
      softwareId: 'SoftwareId',
      status: 'Status',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMode: 'string',
      port: 'number',
      softwareId: 'string',
      status: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoAddOnsInfo extends $dara.Model {
  addOnsInfo?: DescribeClusterResponseBodyClusterInfoAddOnsInfoAddOnsInfo[];
  static names(): { [key: string]: string } {
    return {
      addOnsInfo: 'AddOnsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addOnsInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoAddOnsInfoAddOnsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.addOnsInfo)) {
      $dara.Model.validateArray(this.addOnsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * openmpi
   */
  name?: string;
  /**
   * @remarks
   * The tag of the software.
   * 
   * @example
   * OpenMPI_1.8.7
   */
  tag?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 1.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tag: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplications extends $dara.Model {
  applicationInfo?: DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo },
    };
  }

  validate() {
    if(Array.isArray(this.applicationInfo)) {
      $dara.Model.validateArray(this.applicationInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoCompute extends $dara.Model {
  /**
   * @remarks
   * The number of compute nodes in the cluster.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the compute nodes.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoLogin extends $dara.Model {
  /**
   * @remarks
   * The number of logon nodes in the cluster.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the logon nodes.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoManager extends $dara.Model {
  /**
   * @remarks
   * The number of management nodes.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the management nodes.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoProxyMgr extends $dara.Model {
  /**
   * @remarks
   * The number of proxy nodes.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance type of the proxy node.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfo extends $dara.Model {
  /**
   * @remarks
   * The list of compute nodes.
   */
  compute?: DescribeClusterResponseBodyClusterInfoEcsInfoCompute;
  /**
   * @remarks
   * The list of logon nodes.
   */
  login?: DescribeClusterResponseBodyClusterInfoEcsInfoLogin;
  /**
   * @remarks
   * The information of management nodes.
   */
  manager?: DescribeClusterResponseBodyClusterInfoEcsInfoManager;
  /**
   * @remarks
   * The list of proxy nodes on the cloud.
   * 
   * This parameter is returned only when the cluster is deployed across hybrid environments and the hybrid-cloud proxy mode is enabled for the cluster.
   */
  proxyMgr?: DescribeClusterResponseBodyClusterInfoEcsInfoProxyMgr;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
      proxyMgr: 'ProxyMgr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: DescribeClusterResponseBodyClusterInfoEcsInfoCompute,
      login: DescribeClusterResponseBodyClusterInfoEcsInfoLogin,
      manager: DescribeClusterResponseBodyClusterInfoEcsInfoManager,
      proxyMgr: DescribeClusterResponseBodyClusterInfoEcsInfoProxyMgr,
    };
  }

  validate() {
    if(this.compute && typeof (this.compute as any).validate === 'function') {
      (this.compute as any).validate();
    }
    if(this.login && typeof (this.login as any).validate === 'function') {
      (this.login as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.proxyMgr && typeof (this.proxyMgr as any).validate === 'function') {
      (this.proxyMgr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoInitialImage extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_6_x64_20G_alibase_20211130.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * An array of OS images that are supported by E-HPC.
   * 
   * @example
   * CentOS_7.6_64
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageOwnerAlias: 'string',
      osTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoNodesNodesInfo extends $dara.Model {
  /**
   * @remarks
   * The service type of the domain account to which the node in the on-premises cluster belongs. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * Default value: nis.
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The directory of the node in the on-premises cluster.
   * 
   * @example
   * /opt/sge/default/
   */
  dir?: string;
  /**
   * @remarks
   * The hostname of the node in the on-premises cluster.
   * 
   * @example
   * compute000
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the node in the on-premises cluster.
   * 
   * @example
   * 192.168.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The role of the node in the on-premises cluster. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * @example
   * Compute
   */
  role?: string;
  /**
   * @remarks
   * The scheduler type of the node in the on-premises cluster. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * Default value: pbs.
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      dir: 'Dir',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      role: 'Role',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      dir: 'string',
      hostName: 'string',
      ipAddress: 'string',
      role: 'string',
      schedulerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoNodes extends $dara.Model {
  nodesInfo?: DescribeClusterResponseBodyClusterInfoNodesNodesInfo[];
  static names(): { [key: string]: string } {
    return {
      nodesInfo: 'NodesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodesInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoNodesNodesInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodesInfo)) {
      $dara.Model.validateArray(this.nodesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoOnPremiseInfoOnPremiseInfo extends $dara.Model {
  /**
   * @remarks
   * The hostname of the management node in the on-premises cluster.
   * 
   * @example
   * testecs
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address of the management node in the on-premises cluster.
   * 
   * @example
   * 192.168.*.*
   */
  IP?: string;
  /**
   * @remarks
   * The type of the management node in the on-premises cluster. Valid values:
   * 
   * *   scheduler
   * *   account
   * *   account, scheduler
   * 
   * @example
   * scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      IP: 'IP',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      IP: 'string',
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

export class DescribeClusterResponseBodyClusterInfoOnPremiseInfo extends $dara.Model {
  onPremiseInfo?: DescribeClusterResponseBodyClusterInfoOnPremiseInfoOnPremiseInfo[];
  static names(): { [key: string]: string } {
    return {
      onPremiseInfo: 'OnPremiseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onPremiseInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoOnPremiseInfoOnPremiseInfo },
    };
  }

  validate() {
    if(Array.isArray(this.onPremiseInfo)) {
      $dara.Model.validateArray(this.onPremiseInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo extends $dara.Model {
  /**
   * @remarks
   * The parameter used to run the script.
   * 
   * @example
   * bash file.sh
   */
  args?: string;
  /**
   * @remarks
   * The URL used to download the script.
   * 
   * @example
   * example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoPostInstallScripts extends $dara.Model {
  postInstallScriptInfo?: DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo[];
  static names(): { [key: string]: string } {
    return {
      postInstallScriptInfo: 'PostInstallScriptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postInstallScriptInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo },
    };
  }

  validate() {
    if(Array.isArray(this.postInstallScriptInfo)) {
      $dara.Model.validateArray(this.postInstallScriptInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfo extends $dara.Model {
  /**
   * @remarks
   * The server type of the account. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The information about the custom component service.
   */
  addOnsInfo?: DescribeClusterResponseBodyClusterInfoAddOnsInfo;
  /**
   * @remarks
   * The array of the software in the cluster. The array contains the name and version of the software.
   */
  applications?: DescribeClusterResponseBodyClusterInfoApplications;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. The parameter takes effect only when EcsChargeType is set to PrePaid. Valid values:
   * 
   * *   true: enables auto-renewal.
   * *   false: disables auto-renewal.
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period of the subscription compute nodes. The parameter takes effect when AutoRenew is set to true.
   * 
   * *   If PeriodUnit is set to Week, the valid values of the AutoRenewPeriod parameter are 1, 2, and 3.
   * *   If PeriodUnit is set to Month, the valid values of the AutoRenewPeriod parameter are 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @remarks
   * The image of the cluster.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The version of the E-HPC client.
   * 
   * @example
   * 1.0.1
   */
  clientVersion?: string;
  /**
   * @remarks
   * The version of the E-HPC cluster.
   * 
   * @example
   * 1.0
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. A maximum of three decimal places can be used in the value of the parameter. The parameter is valid only when the ComputeSpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.56
   */
  computeSpotPriceLimit?: string;
  /**
   * @remarks
   * The bidding method of the compute node. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * NoSpot
   */
  computeSpotStrategy?: string;
  /**
   * @remarks
   * The time at which the instance is created.
   * 
   * @example
   * 2020-12-24T03:18:23.000Z
   */
  createTime?: string;
  /**
   * @remarks
   * The mode in which the cluster is deployed. Valid values:
   * 
   * *   Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
   * *   Advanced: Two high availability (HA) account nodes, two HA scheduler nodes, one logon node, and multiple compute nodes are separately deployed.
   * *   Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
   * *   Tiny: The account node, scheduling node, and logon node are deployed on one node. The compute node is separately deployed.
   * 
   * @example
   * Simple
   */
  deployMode?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * cluster
   */
  description?: string;
  /**
   * @remarks
   * The domain name of the on-premises E-HPC cluster.
   * 
   * This parameter takes effect only when the AccoutType parameter is set to Idap.
   * 
   * @example
   * ldap
   */
  domain?: string;
  /**
   * @remarks
   * The billing method of the nodes in the cluster. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  ecsChargeType?: string;
  /**
   * @remarks
   * The list of ECS instance specifications and quantity.
   */
  ecsInfo?: DescribeClusterResponseBodyClusterInfoEcsInfo;
  /**
   * @remarks
   * Specifies whether to enable the high availability feature.
   * 
   * >  If high availability is enabled, each management role in the cluster uses both primary and secondary instances.
   * 
   * @example
   * false
   */
  haEnable?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp15de54eet1c43f****
   */
  id?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_02_64_20G_alibase_20170818****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * test_for_Image
   */
  imageName?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The image information of the operating systems.
   */
  initialImage?: DescribeClusterResponseBodyClusterInfoInitialImage;
  /**
   * @remarks
   * The name of the AccessKey pair.
   * 
   * @example
   * test
   */
  keyPairName?: string;
  /**
   * @remarks
   * The location where the cluster is deployed. Valid values:
   * 
   * *   OnPremise: The node is deployed on a hybrid cloud.
   * *   PublicCloud: The cluster is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster
   */
  name?: string;
  /**
   * @remarks
   * The information of the on-premises node in the cluster.
   */
  nodes?: DescribeClusterResponseBodyClusterInfoNodes;
  /**
   * @remarks
   * The list of on-premises management nodes.
   * 
   * This parameter is returned only when the cluster is deployed across hybrid environments and the hybrid-cloud proxy mode is enabled for the cluster.
   */
  onPremiseInfo?: DescribeClusterResponseBodyClusterInfoOnPremiseInfo;
  /**
   * @remarks
   * The parameter that is used to connect to the OpenLDAP server.
   * 
   * @example
   * {
   * 	"LdapServerIp": "192.168.XX.XX",
   * 	"BaseDn": "ehpctest",
   * 	"FallbackHomeDir": "/home"
   * }
   */
  openldapPar?: string;
  /**
   * @remarks
   * The operating system tag of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The duration of the subscription. The unit of the duration is specified by the `PeriodUnit` parameter.
   * 
   * *   If you set PriceUnit to Year, the valid values of the Period parameter are 1, 2, and 3.
   * *   If you set PriceUnit to Month, the valid values of the Period parameter are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   If you set PriceUnit to Hour, the valid value of the Period parameter is 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid value:
   * 
   * *   Year
   * *   Month
   * *   Hour
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The mode configurations of the plug-in. This parameter takes effect only when the SchedulerType parameter is set to custom.
   * 
   * The value must be a JSON string. The parameter contains the following parameters: pluginMod, pluginLocalPath, and pluginOssPath.
   * 
   * *   pluginMod: the mode of the plug-in. The following modes are supported:
   * 
   *     *   oss: The plug-in is downloaded and decompressed from OSS to a local path that is specified by the pluginLocalPath parameter.
   *     *   image: By default, the plug-in is stored in a pre-defined local path that is specified by the pluginLocalPath parameter.
   * 
   * *   pluginLocalPath: the local path where the plug-in is stored. We recommend that you select a shared directory in the oss mode and a non-shared directory in the image mode.
   * 
   * *   pluginOssPath: the remote path where the plug-in is stored in OSS. This parameter takes effect only if you set the pluginMod parameter to oss.
   * 
   * @example
   * {\\"pluginMod\\":\\"image\\",\\"pluginLocalPath\\":\\"/opt/plugin\\"}
   */
  plugin?: string;
  /**
   * @remarks
   * The list of post-installation scripts
   */
  postInstallScripts?: DescribeClusterResponseBodyClusterInfoPostInstallScripts;
  /**
   * @remarks
   * The node type details of the instance RAM role.
   * 
   * @example
   * ["manager", "compute"]
   */
  ramNodeTypes?: string;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role.
   * 
   * @example
   * AliyunEHPCFullAccess
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remote directory on which the file system is mounted.
   * 
   * @example
   * NasMountpoint:/RemoteDirectory
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek23szz5i2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the Super Computing Cluster (SCC) instance. If the cluster is not an SCC instance, a null string is returned.
   * 
   * @example
   * 00b648b****
   */
  sccClusterId?: string;
  /**
   * @remarks
   * Specifies whether the scheduler is preinstalled for the image. Valid values:
   * 
   * *   true: The scheduler is preinstalled. When you create a node or scale out a cluster, you do not need to install the scheduler.
   * *   false: The scheduler is not preinstalled. When you create or add a cluster, you must install the scheduler.
   * 
   * @example
   * true
   */
  schedulerPreInstall?: number;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  /**
   * @remarks
   * The version of the scheduler.
   * 
   * @example
   * 18.1.1
   */
  schedulerVersion?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1asugr34gzn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   uninit: The cluster is not initialized.
   * *   creating: The cluster is being created.
   * *   init: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   exception: The cluster encounters an exception.
   * *   releasing: The cluster is being released.
   * 
   * @example
   * creating
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID. E-HPC can be deployed only in VPCs.
   * 
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the File Storage NAS file system. NAS file systems cannot be automatically created.
   * 
   * @example
   * 008b64****
   */
  volumeId?: string;
  /**
   * @remarks
   * The mount target of the NAS file system. The mount target is of the VPC type. Mount targets cannot be automatically created for NAS file systems.
   * 
   * @example
   * 008b648bcb-s****.cn-hangzhou.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The type of the protocol that is used by the file system. Valid values:
   * 
   * *   nfs
   * *   smb
   * 
   * @example
   * nfs
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the network shared storage. Valid value: NAS.
   * 
   * @example
   * NAS
   */
  volumeType?: string;
  /**
   * @remarks
   * The VPC ID of the node.
   * 
   * @example
   * vpc-bp1pxkcvmmz53ki89****
   */
  vpcId?: string;
  /**
   * @remarks
   * The parameter that is used to connect to the Windows AD server.
   * 
   * @example
   * {	"AdUser": "Administrator",	"AdUserPasswd": "xxxxxx",	"AdDc": "ad-hybrid001.ehpcad.com",	"AdIp": "192.168.XX.XX"}
   */
  winAdPar?: string;
  /**
   * @remarks
   * Specifies whether to not install the agent.
   * 
   * @example
   * false
   */
  withoutAgent?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      addOnsInfo: 'AddOnsInfo',
      applications: 'Applications',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      baseOsTag: 'BaseOsTag',
      clientVersion: 'ClientVersion',
      clusterVersion: 'ClusterVersion',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      description: 'Description',
      domain: 'Domain',
      ecsChargeType: 'EcsChargeType',
      ecsInfo: 'EcsInfo',
      haEnable: 'HaEnable',
      id: 'Id',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      initialImage: 'InitialImage',
      keyPairName: 'KeyPairName',
      location: 'Location',
      name: 'Name',
      nodes: 'Nodes',
      onPremiseInfo: 'OnPremiseInfo',
      openldapPar: 'OpenldapPar',
      osTag: 'OsTag',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      plugin: 'Plugin',
      postInstallScripts: 'PostInstallScripts',
      ramNodeTypes: 'RamNodeTypes',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      remoteDirectory: 'RemoteDirectory',
      resourceGroupId: 'ResourceGroupId',
      sccClusterId: 'SccClusterId',
      schedulerPreInstall: 'SchedulerPreInstall',
      schedulerType: 'SchedulerType',
      schedulerVersion: 'SchedulerVersion',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
      winAdPar: 'WinAdPar',
      withoutAgent: 'WithoutAgent',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      addOnsInfo: DescribeClusterResponseBodyClusterInfoAddOnsInfo,
      applications: DescribeClusterResponseBodyClusterInfoApplications,
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      baseOsTag: 'string',
      clientVersion: 'string',
      clusterVersion: 'string',
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      createTime: 'string',
      deployMode: 'string',
      description: 'string',
      domain: 'string',
      ecsChargeType: 'string',
      ecsInfo: DescribeClusterResponseBodyClusterInfoEcsInfo,
      haEnable: 'boolean',
      id: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      initialImage: DescribeClusterResponseBodyClusterInfoInitialImage,
      keyPairName: 'string',
      location: 'string',
      name: 'string',
      nodes: DescribeClusterResponseBodyClusterInfoNodes,
      onPremiseInfo: DescribeClusterResponseBodyClusterInfoOnPremiseInfo,
      openldapPar: 'string',
      osTag: 'string',
      period: 'string',
      periodUnit: 'string',
      plugin: 'string',
      postInstallScripts: DescribeClusterResponseBodyClusterInfoPostInstallScripts,
      ramNodeTypes: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      remoteDirectory: 'string',
      resourceGroupId: 'string',
      sccClusterId: 'string',
      schedulerPreInstall: 'number',
      schedulerType: 'string',
      schedulerVersion: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
      winAdPar: 'string',
      withoutAgent: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.addOnsInfo && typeof (this.addOnsInfo as any).validate === 'function') {
      (this.addOnsInfo as any).validate();
    }
    if(this.applications && typeof (this.applications as any).validate === 'function') {
      (this.applications as any).validate();
    }
    if(this.ecsInfo && typeof (this.ecsInfo as any).validate === 'function') {
      (this.ecsInfo as any).validate();
    }
    if(this.initialImage && typeof (this.initialImage as any).validate === 'function') {
      (this.initialImage as any).validate();
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    if(this.onPremiseInfo && typeof (this.onPremiseInfo as any).validate === 'function') {
      (this.onPremiseInfo as any).validate();
    }
    if(this.postInstallScripts && typeof (this.postInstallScripts as any).validate === 'function') {
      (this.postInstallScripts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEstackImageResponseBodyImageListImageListInfo extends $dara.Model {
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * tensorflow-21.09-tf1-py3.sif
   */
  imageName?: string;
  /**
   * @remarks
   * The size of the image.
   * 
   * @example
   * 65535 GiB
   */
  imageSize?: number;
  /**
   * @remarks
   * The type of the image.
   * 
   * @example
   * singularity
   */
  imageType?: string;
  /**
   * @remarks
   * The download URL of the image.
   * 
   * @example
   * http://xxxx.oss-cn-hangzhou.aliyuncs.com/eStackPackage/singularity/tensorflow-21.09-tf1-py3.sif
   */
  imageUrl?: string;
  /**
   * @remarks
   * The time when the image was last modified.
   * 
   * @example
   * 2022-05-05T07:10:55.000Z
   */
  recentUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      imageName: 'ImageName',
      imageSize: 'ImageSize',
      imageType: 'ImageType',
      imageUrl: 'ImageUrl',
      recentUpdateTime: 'RecentUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageName: 'string',
      imageSize: 'number',
      imageType: 'string',
      imageUrl: 'string',
      recentUpdateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEstackImageResponseBodyImageList extends $dara.Model {
  imageListInfo?: DescribeEstackImageResponseBodyImageListImageListInfo[];
  static names(): { [key: string]: string } {
    return {
      imageListInfo: 'ImageListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageListInfo: { 'type': 'array', 'itemType': DescribeEstackImageResponseBodyImageListImageListInfo },
    };
  }

  validate() {
    if(Array.isArray(this.imageListInfo)) {
      $dara.Model.validateArray(this.imageListInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyMessage extends $dara.Model {
  /**
   * @remarks
   * The details of the job.
   * 
   * @example
   * {"2.scheduler": {"egroup": "users","Stageout_status": 1,"Keep_Files": "n","server": "scheduler","queue": "workq"}}
   */
  jobInfo?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestCommoditiesDataDisks extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * *   cloud: basic disk
   * 
   * Default value: cloud_efficiency.
   * 
   * Valid values of N: 0 to 4.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether the data disk is released when the node is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * Valid values of N: 0 to 4.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * *   true: encrypts the data disk.
   * *   false: does not encrypt the data disk.
   * 
   * Default value: false.
   * 
   * Valid values of N: 0 to 4.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The performance level of the ESSD used as the data disk. This parameter takes effect only when the Commodities.N.DataDisks.N.category parameter is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * Valid values of N: 0 to 4.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * Valid values of N: 0 to 4.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      deleteWithInstance: 'deleteWithInstance',
      encrypted: 'encrypted',
      performanceLevel: 'performanceLevel',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'boolean',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestCommodities extends $dara.Model {
  /**
   * @remarks
   * The node quantity of the type. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * Valid values of N: 1 to 10
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisks?: DescribePriceRequestCommoditiesDataDisks[];
  /**
   * @remarks
   * The instance type of the node.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The EIP billing method of the node. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth of the node. Unit: Mbit/s.
   * 
   * Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * 100
   */
  internetMaxBandWidthOut?: number;
  /**
   * @remarks
   * The network type of the node. Valid value: VPC.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   Compute: compute node
   * *   Manager: management node
   * *   Login: logon node
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * Compute
   */
  nodeType?: string;
  /**
   * @remarks
   * The subscription duration of the node. Valid values:
   * 
   * *   If PriceUnit is set to Year, the valid values of the Period parameter are 1, 2, and 3.
   * *   If PriceUnit is set to Month, the valid values of the Period parameter are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   If PriceUnit is set to Hour, the valid value of the Period parameter is 1.
   * 
   * Default value: 1.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The system disk type of the node. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * *   cloud: basic disk
   * 
   * Default value: cloud_efficiency
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the system disk. This parameter takes effect only when the Commodities.N.SystemDiskCategory parameter is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * Valid values of N: 1 to 10
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The system disk size of the node. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      dataDisks: 'DataDisks',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      period: 'Period',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      dataDisks: { 'type': 'array', 'itemType': DescribePriceRequestCommoditiesDataDisks },
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandWidthOut: 'number',
      networkType: 'string',
      nodeType: 'string',
      period: 'number',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPricesPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The currency that is used to measure the price. Valid values:
   * 
   * USD
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * @example
   * Compute
   */
  nodeType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * Unit: USD.
   * 
   * @example
   * 1258
   */
  originalPrice?: number;
  /**
   * @remarks
   * The final price.
   * 
   * Unit: USD.
   * 
   * @example
   * 1258
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPrices extends $dara.Model {
  priceInfo?: DescribePriceResponseBodyPricesPriceInfo[];
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: { 'type': 'array', 'itemType': DescribePriceResponseBodyPricesPriceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.priceInfo)) {
      $dara.Model.validateArray(this.priceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosArrayProperties extends $dara.Model {
  /**
   * @remarks
   * The end value of the array job index.
   * 
   * @example
   * 5
   */
  indexEnd?: number;
  /**
   * @remarks
   * The starting value of the array job index.
   * 
   * @example
   * 1
   */
  indexStart?: number;
  /**
   * @remarks
   * The interval of the array job index.
   * 
   * @example
   * 2
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

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersCurrentState extends $dara.Model {
  /**
   * @remarks
   * The details of the container status.
   * 
   * @example
   * working
   */
  detailStatus?: string;
  /**
   * @remarks
   * The exit code of the container.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the container stopped running.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the container status.
   * 
   * @example
   * Back-off 5m0s restarting failed container=test pod=test_eci-xxx(xxx)
   */
  message?: string;
  /**
   * @remarks
   * The reason why the container is in this state.
   * 
   * @example
   * Started
   */
  reason?: string;
  /**
   * @remarks
   * The code of the container status.
   * 
   * @example
   * 1
   */
  signal?: number;
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2019-12-19T12:05:02Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Terminated
   * 
   * @example
   * Terminated
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVarsValueFromFieldRef extends $dara.Model {
  /**
   * @remarks
   * The path of the field.
   * 
   * @example
   * status.podIP
   */
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVarsValueFrom extends $dara.Model {
  /**
   * @remarks
   * The specified field.
   */
  fieldRef?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVarsValueFromFieldRef;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVarsValueFromFieldRef,
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * /usr/bin/
   */
  value?: string;
  /**
   * @remarks
   * The source of the environment variable value. This parameter can be used only when the variable value is not specified.
   */
  valueFrom?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVarsValueFrom;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueFrom: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVarsValueFrom,
    };
  }

  validate() {
    if(this.valueFrom && typeof (this.valueFrom as any).validate === 'function') {
      (this.valueFrom as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path to which HTTP GET requests are sent.
   * 
   * @example
   * /usr/nginx/
   */
  path?: string;
  /**
   * @remarks
   * The port to which HTTP GET requests are sent.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET requests.
   * 
   * @example
   * HTTP
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * 1.2.3.4
   */
  host?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbe extends $dara.Model {
  /**
   * @remarks
   * The commands that are run.
   */
  execs?: string[];
  /**
   * @remarks
   * The minimum number of consecutive failures that must occur for the probe to be considered as failed. Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The HTTP GET method that is used to check the container.
   */
  httpGet?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds after the container is started and before a liveness probe is initiated.
   * 
   * @example
   * 10
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the probe is run. Unit: seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum number of consecutive successes that must occur for the check to be considered successful. Default value: 1. Set the value to 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The TCP socket method that is used to check the container.
   */
  tcpSocket?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period of the check. Default value: 1. Minimum value: 1.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      execs: 'Execs',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execs: { 'type': 'array', 'itemType': 'string' },
      failureThreshold: 'number',
      httpGet: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.execs)) {
      $dara.Model.validateArray(this.execs);
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersPreviousState extends $dara.Model {
  /**
   * @remarks
   * The details of the container status.
   * 
   * @example
   * working
   */
  detailStatus?: string;
  /**
   * @remarks
   * The exit code of the container.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the container stopped running.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The message about the container status.
   * 
   * @example
   * Back-off 5m0s restarting failed container=test pod=test_eci-xxx(xxx)
   */
  message?: string;
  /**
   * @remarks
   * The reason why the container is in this state.
   * 
   * @example
   * Completed
   */
  reason?: string;
  /**
   * @remarks
   * The code of the container status.
   * 
   * @example
   * 1
   */
  signal?: number;
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the container. Valid values:
   * 
   * *   Waiting: The container is being started.
   * *   Running: The container is running.
   * *   Terminated: The container terminates running.
   * 
   * @example
   * Terminated
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path to which HTTP GET requests are sent.
   * 
   * @example
   * /usr/local
   */
  path?: string;
  /**
   * @remarks
   * The port to which the system sends an HTTP GET request for a health check.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET requests.
   * 
   * @example
   * HTTP
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The IP address of the host.
   * 
   * @example
   * 1.2.3.4
   */
  host?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8888
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbe extends $dara.Model {
  /**
   * @remarks
   * The commands that are run in the container when you use the command line interface (CLI) to perform health checks.
   */
  execs?: string[];
  /**
   * @remarks
   * The minimum number of consecutive failures that must occur for the check to be considered as failed. Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The HTTP GET method that is used to check the container.
   */
  httpGet?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds after the container is started and before a liveness probe is initiated.
   * 
   * @example
   * 10
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the container is checked. Unit: seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum number of consecutive successes for a failed liveness probe to be considered successful. Default value: 1. Set the value to 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The TCP socket method that is used to check the container.
   */
  tcpSocket?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period of the check. Default value: 1. Minimum value: 1.
   * 
   * @example
   * 1
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      execs: 'Execs',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execs: { 'type': 'array', 'itemType': 'string' },
      failureThreshold: 'number',
      httpGet: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.execs)) {
      $dara.Model.validateArray(this.execs);
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  adds?: string[];
  static names(): { [key: string]: string } {
    return {
      adds: 'Adds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.adds)) {
      $dara.Model.validateArray(this.adds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersSecurityContext extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  capability?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersSecurityContextCapability;
  /**
   * @remarks
   * Indicates whether the root file system is set to the read-only mode. The only valid value is true.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID (UID) that is used to run the entry point of the container process.
   * 
   * @example
   * 1558
   */
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  validate() {
    if(this.capability && typeof (this.capability as any).validate === 'function') {
      (this.capability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory to which the volume is mounted. Data under this directory is overwritten by the data on the volume.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation allows you to share volumes that are mounted on a container with other containers in the same pod or other pods on the same node. Valid values:
   * 
   * *   None: The volume mount does not receive subsequent mounts that are mounted to the volume or the subdirectories of the volume.
   * *   HostToCotainer: The volume mount receives all subsequent mounts that are mounted to the volume or the subdirectories of the volume.
   * *   Bidirectional: This value is similar to HostToCotainer. The volume mount receives all subsequent mounts that are mounted to the volume or the subdirectories of the volume. All volume mounts that are mounted by the container are propagated back to the instance and all containers of all pods that use the same volume.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the volumes are read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory of the volume. This parameter specifies different subdirectories of the same volume that the instance can mount to different subdirectories of containers.
   * 
   * @example
   * /usr/sub
   */
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainers extends $dara.Model {
  /**
   * @remarks
   * The startup parameter of the container.
   */
  args?: string[];
  /**
   * @remarks
   * The startup command of the container.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The current status of the container.
   */
  currentState?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersCurrentState;
  /**
   * @remarks
   * The environment variables.
   */
  environmentVars?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVars[];
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The image of the container.
   * 
   * @example
   * HPL
   */
  image?: string;
  /**
   * @remarks
   * The policy to pull images. Valid values:
   * 
   * *   Always: Each time instances are created, image pulling is performed.
   * *   IfNotPresent: On-premises images are preferentially used. If no on-premises images are available, image pulling is performed.
   * *   Never: On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The liveness probe of the container.
   */
  livenessProbe?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbe;
  /**
   * @remarks
   * The memory size of the instance. Unit: GiB.
   * 
   * @example
   * 4.0
   */
  memory?: number;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * HPL
   */
  name?: string;
  /**
   * @remarks
   * The exposed ports and protocols of the container.
   */
  ports?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersPorts[];
  /**
   * @remarks
   * The previous status of the container.
   */
  previousState?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersPreviousState;
  /**
   * @remarks
   * The readiness probe that is used to check whether the container is ready to serve a request.
   */
  readinessProbe?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbe;
  /**
   * @remarks
   * Indicates whether the container passed the readiness probe.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times that the instance worker restarted.
   * 
   * @example
   * 5
   */
  restartCount?: number;
  /**
   * @remarks
   * The security context of the container.
   */
  securityContext?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersSecurityContext;
  /**
   * @remarks
   * Indicates whether the container allocates buffer resources to standard input streams when the container runs. If you do not specify this parameter, an end-of-file (EOF) error may occur when standard input streams in the container are read. Default value: false.
   * 
   * @example
   * true
   */
  stdin?: boolean;
  /**
   * @remarks
   * Indicates whether the container runtime closes the stdin channel after the stdin channel has been opened by a single attach session. If stdin is true, the stdin stream remains open across multiple attach sessions. If StdinOnce is set to true, stdin is opened on container start, but remains empty until the first client attaches to stdin, and then remains open and receives data until the client disconnects. When the client disconnects, stdin is closed and remains closed until the container is restarted.
   * 
   * @example
   * true
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Indicates whether interaction is enabled. Default value: false. If the value of the Command parameter is /bin/bash, the value of this parameter must be set to true.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * Information about the mounted volumes.
   */
  volumeMounts?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory.
   * 
   * @example
   * /usr/local/nginx
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      livenessProbe: 'LivenessProbe',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      previousState: 'PreviousState',
      readinessProbe: 'ReadinessProbe',
      ready: 'Ready',
      restartCount: 'RestartCount',
      securityContext: 'SecurityContext',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      currentState: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersCurrentState,
      environmentVars: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      livenessProbe: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersLivenessProbe,
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersPorts },
      previousState: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersPreviousState,
      readinessProbe: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersReadinessProbe,
      ready: 'boolean',
      restartCount: 'number',
      securityContext: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersSecurityContext,
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(this.currentState && typeof (this.currentState as any).validate === 'function') {
      (this.currentState as any).validate();
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    if(this.livenessProbe && typeof (this.livenessProbe as any).validate === 'function') {
      (this.livenessProbe as any).validate();
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(this.previousState && typeof (this.previousState as any).validate === 'function') {
      (this.previousState as any).validate();
    }
    if(this.readinessProbe && typeof (this.readinessProbe as any).validate === 'function') {
      (this.readinessProbe as any).validate();
    }
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.volumeMounts)) {
      $dara.Model.validateArray(this.volumeMounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsDnsConfigOptions extends $dara.Model {
  /**
   * @remarks
   * The variable name of the option.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the option.
   * 
   * @example
   * value
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

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of DNS servers.
   */
  nameServers?: string[];
  /**
   * @remarks
   * The options. Each option is a name-value pair. The value in the name-value pair is optional.
   */
  options?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of the DNS server.
   */
  searches?: string[];
  static names(): { [key: string]: string } {
    return {
      nameServers: 'NameServers',
      options: 'Options',
      searches: 'Searches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServers: { 'type': 'array', 'itemType': 'string' },
      options: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsDnsConfigOptions },
      searches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nameServers)) {
      $dara.Model.validateArray(this.nameServers);
    }
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    if(Array.isArray(this.searches)) {
      $dara.Model.validateArray(this.searches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEciSecurityContextSysctls extends $dara.Model {
  /**
   * @remarks
   * The name of the Sysctl parameter.
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The value of the Sysctl parameter.
   * 
   * @example
   * 65536
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

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEciSecurityContext extends $dara.Model {
  /**
   * @remarks
   * The Sysctl parameters.
   */
  sysctls?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEciSecurityContextSysctls[];
  static names(): { [key: string]: string } {
    return {
      sysctls: 'Sysctls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctls: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEciSecurityContextSysctls },
    };
  }

  validate() {
    if(Array.isArray(this.sysctls)) {
      $dara.Model.validateArray(this.sysctls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEvents extends $dara.Model {
  /**
   * @remarks
   * The number of the events.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The time when the event started.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The time when the event ended.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Started container
   */
  message?: string;
  /**
   * @remarks
   * The name of the category to which the event belongs.
   * 
   * @example
   * test-xxx
   */
  name?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Created
   */
  reason?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
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

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsHostAliases extends $dara.Model {
  /**
   * @remarks
   * The information about the host.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersCurrentState extends $dara.Model {
  /**
   * @remarks
   * The details of the container status.
   * 
   * @example
   * working
   */
  detailStatus?: string;
  /**
   * @remarks
   * The exit code of the container.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the container stopped running.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Created container
   */
  message?: string;
  /**
   * @remarks
   * The reason why the container is in this state.
   * 
   * @example
   * Started
   */
  reason?: string;
  /**
   * @remarks
   * The code of the container status.
   * 
   * @example
   * 1
   */
  signal?: number;
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the container. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Terminated
   * 
   * @example
   * Running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef extends $dara.Model {
  /**
   * @remarks
   * The path of the field in the specified version. Set the value to `status.podIP`.
   * 
   * @example
   * status.podIP
   */
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVarsValueFrom extends $dara.Model {
  /**
   * @remarks
   * The specified field.
   */
  fieldRef?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef,
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * /usr/local/bin
   */
  value?: string;
  /**
   * @remarks
   * The source of the environment variable value. This parameter can be used only when the variable value is not specified.
   */
  valueFrom?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVarsValueFrom;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueFrom: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVarsValueFrom,
    };
  }

  validate() {
    if(this.valueFrom && typeof (this.valueFrom as any).validate === 'function') {
      (this.valueFrom as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 8888
   */
  port?: number;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersPreviousState extends $dara.Model {
  /**
   * @remarks
   * The details of the container status.
   * 
   * @example
   * working
   */
  detailStatus?: string;
  /**
   * @remarks
   * The exit code of the container.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the container stopped running.
   * 
   * @example
   * 2019-12-24T05:35:44Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The message about the container status.
   * 
   * @example
   * Started container
   */
  message?: string;
  /**
   * @remarks
   * The reason why the container is in this state.
   * 
   * @example
   * completed
   */
  reason?: string;
  /**
   * @remarks
   * The code of the container status.
   * 
   * @example
   * 1
   */
  signal?: number;
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2019-12-24T05:35:44Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the container. Valid values: Waiting, Running, and Terminated.
   * 
   * @example
   * Terminated
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  adds?: string[];
  static names(): { [key: string]: string } {
    return {
      adds: 'Adds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.adds)) {
      $dara.Model.validateArray(this.adds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersSecurityContext extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  capability?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersSecurityContextCapability;
  /**
   * @remarks
   * Indicates whether the root file system is set to the read-only mode. The only valid value is true.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The UID that is used to run the entry point of the container process.
   * 
   * @example
   * 1557
   */
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  validate() {
    if(this.capability && typeof (this.capability as any).validate === 'function') {
      (this.capability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory to which the volume is mounted. Data under this directory is overwritten by the data on the volume.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation allows you to share volumes that are mounted on a container with other containers in the same pod or other pods on the same node. Valid values:
   * 
   * *   None: The volume mount does not receive subsequent mounts that are mounted to the volume or the subdirectories of the volume.
   * *   HostToCotainer: The volume mount receives all subsequent mounts that are mounted to the volume or the subdirectories of the volume.
   * *   Bidirectional: This value is similar to HostToCotainer. The volume mount receives all subsequent mounts that are mounted to the volume or the subdirectories of the volume. All volume mounts that are mounted by the container are propagated back to the instance and all containers of all pods that use the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume. The name is the same as the volume you selected when you purchased the container.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Default value: False.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainers extends $dara.Model {
  /**
   * @remarks
   * The startup parameters.
   */
  args?: string[];
  /**
   * @remarks
   * The startup command.
   */
  command?: string[];
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The current status of the container.
   */
  currentState?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersCurrentState;
  /**
   * @remarks
   * The environment variables.
   */
  environmentVars?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVars[];
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The image.
   * 
   * @example
   * nginx
   */
  image?: string;
  /**
   * @remarks
   * The policy to pull images.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The size of memory that is allocated to the init container. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * Init-xxx
   */
  name?: string;
  /**
   * @remarks
   * The exposed ports and protocols of the container.
   */
  ports?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersPorts[];
  /**
   * @remarks
   * The previous status of the container.
   */
  previousState?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersPreviousState;
  /**
   * @remarks
   * Indicates whether the container passed the readiness probe.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times that the instance worker restarted.
   * 
   * @example
   * 5
   */
  restartCount?: number;
  /**
   * @remarks
   * The security context of the container.
   */
  securityContext?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersSecurityContext;
  /**
   * @remarks
   * The information about the volumes that are mounted to the init container.
   */
  volumeMounts?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory.
   * 
   * @example
   * /usr/test
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      previousState: 'PreviousState',
      ready: 'Ready',
      restartCount: 'RestartCount',
      securityContext: 'SecurityContext',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      currentState: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersCurrentState,
      environmentVars: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersPorts },
      previousState: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersPreviousState,
      ready: 'boolean',
      restartCount: 'number',
      securityContext: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersSecurityContext,
      volumeMounts: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(this.currentState && typeof (this.currentState as any).validate === 'function') {
      (this.currentState as any).validate();
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(this.previousState && typeof (this.previousState as any).validate === 'function') {
      (this.previousState as any).validate();
    }
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.volumeMounts)) {
      $dara.Model.validateArray(this.volumeMounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-xh
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

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsVolumesConfigFileVolumeConfigFileToPaths extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file. Maximum size: 32 KB.
   * 
   * @example
   * hello world
   */
  content?: string;
  /**
   * @remarks
   * The relative path to the configuration file.
   * 
   * @example
   * /usr/bin/
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroupsVolumes extends $dara.Model {
  /**
   * @remarks
   * The paths to configuration files.
   */
  configFileVolumeConfigFileToPaths?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsVolumesConfigFileVolumeConfigFileToPaths[];
  /**
   * @remarks
   * The ID of the disk volume if you set Type to DiskVolume.
   * 
   * @example
   * d-xxxx
   */
  diskVolumeDiskId?: string;
  /**
   * @remarks
   * The type of the volume.
   * 
   * @example
   * xfs
   */
  diskVolumeFsType?: string;
  /**
   * @remarks
   * The storage media for the emptyDir volume. This parameter is empty by default, which indicates that the node file system is used as the storage media. Valid values:
   * 
   * *   Memory: uses memory as the storage media.
   * *   LocalRaid0: forms local disks into RAID 0. This value is valid only if an elastic container instance that has local disks mounted is created. For more information, see [Create an elastic container instance that has local disks mounted](https://help.aliyun.com/document_detail/114664.html).
   * 
   * @example
   * Memory
   */
  emptyDirVolumeMedium?: string;
  /**
   * @remarks
   * The storage size of the emptyDir volume. If you specify this parameter, include the unit in the value. We recommend that you use Gi or Mi.
   * 
   * @example
   * 256Mi
   */
  emptyDirVolumeSizeLimit?: string;
  /**
   * @remarks
   * The name of the driver when you set the Type parameter to FlexVolume.
   * 
   * @example
   * flexvolume
   */
  flexVolumeDriver?: string;
  /**
   * @remarks
   * The file system type when you set the Type parameter to FlexVolume. The default value is determined by the script of the FlexVolume plug-in.
   * 
   * @example
   * ntfs
   */
  flexVolumeFsType?: string;
  /**
   * @remarks
   * The FlexVolume options.
   * 
   * @example
   * [nolock,tcp,noresvport]
   */
  flexVolumeOptions?: string;
  /**
   * @remarks
   * The path of the Network File System (NFS) volume.
   * 
   * @example
   * /eci
   */
  NFSVolumePath?: string;
  /**
   * @remarks
   * Indicates whether the NFS volume is read-only.
   * 
   * @example
   * false
   */
  NFSVolumeReadOnly?: boolean;
  /**
   * @remarks
   * The endpoint of the server if you set Type to NFSVolume.
   * 
   * @example
   * 0eafxxxxx-xxxxx.cn-hangzhou.nas.aliyuncs.com
   */
  NFSVolumeServer?: string;
  /**
   * @remarks
   * The name of the volume.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * The type of the volume. Valid values:
   * 
   * *   EmptyDirVolume
   * *   NFSVolume
   * *   ConfigFileVolume
   * *   FlexVolume
   * 
   * @example
   * EmptyDirVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      diskVolumeFsType: 'DiskVolumeFsType',
      emptyDirVolumeMedium: 'EmptyDirVolumeMedium',
      emptyDirVolumeSizeLimit: 'EmptyDirVolumeSizeLimit',
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      NFSVolumePath: 'NFSVolumePath',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      NFSVolumeServer: 'NFSVolumeServer',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsVolumesConfigFileVolumeConfigFileToPaths },
      diskVolumeDiskId: 'string',
      diskVolumeFsType: 'string',
      emptyDirVolumeMedium: 'string',
      emptyDirVolumeSizeLimit: 'string',
      flexVolumeDriver: 'string',
      flexVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      NFSVolumePath: 'string',
      NFSVolumeReadOnly: 'boolean',
      NFSVolumeServer: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configFileVolumeConfigFileToPaths)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfosContainerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the container group.
   * 
   * @example
   * eci-bp1jrgfqqy54kg5hc****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The name of the container group.
   * 
   * @example
   * test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The list of containers in the container group.
   */
  containers?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainers[];
  /**
   * @remarks
   * The number of vCPUs that are allocated to the container.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the instance is created. The time follows the RFC 3339 standard and must be in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 9
   */
  discount?: number;
  /**
   * @remarks
   * The Domain Name System (DNS) settings.
   */
  dnsConfig?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsDnsConfig;
  /**
   * @remarks
   * The security context of the container group.
   */
  eciSecurityContext?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEciSecurityContext;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp14rzqi6fd8satm****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The event information. Up to 50 events can be returned.
   */
  events?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEvents[];
  /**
   * @remarks
   * The time when the instance failed to run due to overdue payments. The time follows the RFC 3339 standard and must be in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the instance failed to run. The time follows the RFC 3339 standard and must be in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  failedTime?: string;
  /**
   * @remarks
   * The hostname mapping of a container in the elastic container instance.
   */
  hostAliases?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsHostAliases[];
  /**
   * @remarks
   * The init containers.
   */
  initContainers?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainers[];
  /**
   * @remarks
   * The instance type of the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IPv6 address.
   * 
   * @example
   * 2001:XXXX:4:4:4:4:4:4
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The memory size of the elastic container instance. Unit: GiB.
   * 
   * @example
   * 4.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the instance RAM role. You can use an instance RAM role to access both elastic container instances and ECS instances. For more information, see [Use the instance RAM role by calling APIs](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * ram:PassRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs. If you do not specify a resource group when you create an elastic container instance, the system automatically adds the instance to the default resource group in your account.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance restart policy. Valid values:
   * 
   * *   Always: Always restarts the instance if a container in the instance exits upon termination.
   * *   Never: Never restarts the instance if a container in the instance exits upon termination.
   * *   OnFailure: Restarts the instance when the last start failed.
   * 
   * @example
   * Never
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp12ujq5zpxuyjfo3o8r
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The maximum hourly price for the preemptible instance.
   * 
   * This parameter is returned only if you set the SpotStrategy parameter to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy of the instance. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Pending: The instance is being started.
   * *   Running: The instance is running.
   * *   Succeeded: The instance runs successfully.
   * *   Failed: The instance fails to run.
   * *   Scheduling: The instance is being created.
   * *   ScheduleFailed: The instance fails to be created.
   * *   Restarting: The instance is being restarted.
   * *   Updating: The instance is being updated.
   * *   Terminating: The instance is being terminated.
   * *   Expired: The instance expires.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when all containers exited on success. The time follows the RFC 3339 standard and must be in UTC.
   * 
   * @example
   * 2019-12-11T04:33:42Z
   */
  succeededTime?: string;
  /**
   * @remarks
   * The tags of the instances.
   */
  tags?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsTags[];
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * i-xxx
   */
  tenantEniInstanceId?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 10.10.XX.XX
   */
  tenantEniIp?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * sg-xxx
   */
  tenantSecurityGroupId?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * vsw-xxx
   */
  tenantVSwitchId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1vzjjflab6wvjox****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The information about volumes.
   */
  volumes?: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsVolumes[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the elastic container instance belongs.
   * 
   * @example
   * vpc-1vzjjflab6wvjox****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the elastic container instance is deployed.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      discount: 'Discount',
      dnsConfig: 'DnsConfig',
      eciSecurityContext: 'EciSecurityContext',
      eniInstanceId: 'EniInstanceId',
      ephemeralStorage: 'EphemeralStorage',
      events: 'Events',
      expiredTime: 'ExpiredTime',
      failedTime: 'FailedTime',
      hostAliases: 'HostAliases',
      initContainers: 'InitContainers',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ipv6Address: 'Ipv6Address',
      memory: 'Memory',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restartPolicy: 'RestartPolicy',
      securityGroupId: 'SecurityGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      succeededTime: 'SucceededTime',
      tags: 'Tags',
      tenantEniInstanceId: 'TenantEniInstanceId',
      tenantEniIp: 'TenantEniIp',
      tenantSecurityGroupId: 'TenantSecurityGroupId',
      tenantVSwitchId: 'TenantVSwitchId',
      vSwitchId: 'VSwitchId',
      volumes: 'Volumes',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsContainers },
      cpu: 'number',
      creationTime: 'string',
      discount: 'number',
      dnsConfig: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsDnsConfig,
      eciSecurityContext: DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEciSecurityContext,
      eniInstanceId: 'string',
      ephemeralStorage: 'number',
      events: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsEvents },
      expiredTime: 'string',
      failedTime: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsHostAliases },
      initContainers: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsInitContainers },
      instanceType: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ipv6Address: 'string',
      memory: 'number',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restartPolicy: 'string',
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      status: 'string',
      succeededTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsTags },
      tenantEniInstanceId: 'string',
      tenantEniIp: 'string',
      tenantSecurityGroupId: 'string',
      tenantVSwitchId: 'string',
      vSwitchId: 'string',
      volumes: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroupsVolumes },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(this.dnsConfig && typeof (this.dnsConfig as any).validate === 'function') {
      (this.dnsConfig as any).validate();
    }
    if(this.eciSecurityContext && typeof (this.eciSecurityContext as any).validate === 'function') {
      (this.eciSecurityContext as any).validate();
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    if(Array.isArray(this.initContainers)) {
      $dara.Model.validateArray(this.initContainers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBodyJobInfos extends $dara.Model {
  /**
   * @remarks
   * The properties of the array job.
   */
  arrayProperties?: DescribeServerlessJobsResponseBodyJobInfosArrayProperties;
  /**
   * @remarks
   * The information of the container groups that are used to run the serverless job.
   */
  containerGroups?: DescribeServerlessJobsResponseBodyJobInfosContainerGroups[];
  /**
   * @remarks
   * The time when the serverless job ended.
   * 
   * @example
   * 1662016121
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the job is an array job.
   * 
   * @example
   * false
   */
  isArrayJob?: boolean;
  /**
   * @remarks
   * The ID of the serverless job or the subtask (array job).
   * 
   * @example
   * 5
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the serverless job.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The time when the serverless job is last modified.
   * 
   * @example
   * 1663831441000
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The scheduling priority of the serverless job.
   * 
   * @example
   * 9
   */
  priority?: number;
  /**
   * @remarks
   * The name of the queue in which the serverless job is run.
   * 
   * @example
   * comp
   */
  queue?: string;
  /**
   * @remarks
   * The time when the serverless job started.
   * 
   * @example
   * 1647427667
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the serverless job. Valid values:
   * 
   * *   Pending
   * *   Initing
   * *   Running
   * *   Succeeded
   * *   Canceled
   * *   Failed
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The time when the serverless job is submitted.
   * 
   * @example
   * 1647423718
   */
  submitTime?: number;
  /**
   * @remarks
   * The username that is used to run the serverless job.
   * 
   * @example
   * testuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      arrayProperties: 'ArrayProperties',
      containerGroups: 'ContainerGroups',
      endTime: 'EndTime',
      isArrayJob: 'IsArrayJob',
      jobId: 'JobId',
      jobName: 'JobName',
      lastModifyTime: 'LastModifyTime',
      priority: 'Priority',
      queue: 'Queue',
      startTime: 'StartTime',
      state: 'State',
      submitTime: 'SubmitTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayProperties: DescribeServerlessJobsResponseBodyJobInfosArrayProperties,
      containerGroups: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfosContainerGroups },
      endTime: 'number',
      isArrayJob: 'boolean',
      jobId: 'string',
      jobName: 'string',
      lastModifyTime: 'number',
      priority: 'number',
      queue: 'string',
      startTime: 'number',
      state: 'string',
      submitTime: 'number',
      user: 'string',
    };
  }

  validate() {
    if(this.arrayProperties && typeof (this.arrayProperties as any).validate === 'function') {
      (this.arrayProperties as any).validate();
    }
    if(Array.isArray(this.containerGroups)) {
      $dara.Model.validateArray(this.containerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponseBodyData extends $dara.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisksDataDisksInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   * *   cloud: basic disk.
   * 
   * @example
   * cloud_efficiency
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * Indicates whether the data disk is released when the node is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dataDiskDeleteWithInstance?: boolean;
  /**
   * @remarks
   * Indicates whether the data disk is encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  dataDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key that is used by the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  dataDiskKMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the data disk. The parameter is returned only when the DataDisks.N.DataDiskCategory parameter is set to cloud_essd. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The capacity of the data disk. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisks extends $dara.Model {
  dataDisksInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisksDataDisksInfo[];
  static names(): { [key: string]: string } {
    return {
      dataDisksInfo: 'DataDisksInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisksInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisksDataDisksInfo },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisksInfo)) {
      $dara.Model.validateArray(this.dataDisksInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo extends $dara.Model {
  /**
   * @remarks
   * The prefix of the hostname. You can query compute nodes that have a specified prefix.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The instance type of the compute nodes.
   * 
   * @example
   * ecs.sn1ne.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Valid values: 0 to 1. Default value: 1. A value of 0 means no protection period is specified.
   * 
   * @example
   * 0
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption event of the preemptible instance. The value can only be Terminate, which specifies that the instance is released.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding method of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      hostNamePrefix: 'HostNamePrefix',
      instanceType: 'InstanceType',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostNamePrefix: 'string',
      instanceType: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes extends $dara.Model {
  instanceTypeInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeInfo: 'InstanceTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeInfo)) {
      $dara.Model.validateArray(this.instanceTypeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the minimum node number for each scale-out is automatically set. If this parameter is set to true, the minimum number of nodes for each scale-out is equal to the number of nodes required by the job. The maximum number is 99.
   * 
   * @example
   * false
   */
  autoMinNodesPerCycle?: boolean;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisks?: GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisks;
  /**
   * @remarks
   * Indicates whether the queue enabled the auto scale-out. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableAutoGrow?: boolean;
  /**
   * @remarks
   * Indicates whether the queue enabled the auto scale-in. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableAutoShrink?: boolean;
  /**
   * @remarks
   * The prefix of the queue name. You can query queues that have a specified prefix.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The suffix of the queue name. You can query queues that have a specified suffix.
   * 
   * @example
   * 000
   */
  hostNameSuffix?: string;
  /**
   * @remarks
   * The instance type of the compute nodes that are automatically added to the queue.
   * 
   * @example
   * ecs.sn1ne.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The specification information of the compute nodes.
   */
  instanceTypes?: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes;
  /**
   * @remarks
   * The maximum number of compute nodes that can be added to a queue. Valid values: 0 to 500.
   * 
   * @example
   * 100
   */
  maxNodesInQueue?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that can be added in each round of scale-out. Valid values: 0 to 99.
   * 
   * Default value: 0.
   * 
   * @example
   * 20
   */
  maxNodesPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that can be retained in a queue. Valid values: 0 to 50.
   * 
   * @example
   * 10
   */
  minNodesInQueue?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that can be added in each round of scale-out. Valid values: 1 to 99
   * 
   * Default value: 1.
   * 
   * If the compute nodes that you want to add in a round is less than the minimum compute nodes that can be added, the value of this parameter is automatically changed to the number of compute nodes that you want to add. This ensures that compute nodes can be added as expected.
   * 
   * >  The configuration takes effect only for the minimum compute nodes that can be added in the current round.
   * 
   * @example
   * 5
   */
  minNodesPerCycle?: number;
  /**
   * @remarks
   * The image ID of the compute node in the queue.
   * 
   * @example
   * centos_7_06_64_20G_alibase_2019071****
   */
  queueImageId?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * workq
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the compute nodes belong.
   * 
   * @example
   * rg-acfmxp7uc24****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the instances are unordered. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  If this parameter is set to true, the system selects instance types in descending order based on the number of instances in stock during auto scaling.
   * 
   * @example
   * false
   */
  sortedByInventory?: boolean;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: enhanced SSD (ESSD).
   * *   cloud: basic disk.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system disk. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  systemDiskLevel?: string;
  /**
   * @remarks
   * The system disk size. Unit: GB. Valid values: 40 to 500.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoMinNodesPerCycle: 'AutoMinNodesPerCycle',
      dataDisks: 'DataDisks',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      instanceType: 'InstanceType',
      instanceTypes: 'InstanceTypes',
      maxNodesInQueue: 'MaxNodesInQueue',
      maxNodesPerCycle: 'MaxNodesPerCycle',
      minNodesInQueue: 'MinNodesInQueue',
      minNodesPerCycle: 'MinNodesPerCycle',
      queueImageId: 'QueueImageId',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
      sortedByInventory: 'SortedByInventory',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMinNodesPerCycle: 'boolean',
      dataDisks: GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisks,
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      instanceType: 'string',
      instanceTypes: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes,
      maxNodesInQueue: 'number',
      maxNodesPerCycle: 'number',
      minNodesInQueue: 'number',
      minNodesPerCycle: 'number',
      queueImageId: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
      sortedByInventory: 'boolean',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(this.dataDisks && typeof (this.dataDisks as any).validate === 'function') {
      (this.dataDisks as any).validate();
    }
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueues extends $dara.Model {
  queueInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfo[];
  static names(): { [key: string]: string } {
    return {
      queueInfo: 'QueueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfo },
    };
  }

  validate() {
    if(Array.isArray(this.queueInfo)) {
      $dara.Model.validateArray(this.queueInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBodyMetricLogsMetricLog extends $dara.Model {
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * vda1
   */
  diskDevice?: string;
  /**
   * @remarks
   * The hostname of the node.
   * 
   * @example
   * compute000
   */
  hostname?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp132g97g7zwnvta****
   */
  instanceId?: string;
  /**
   * @remarks
   * A JSON-formatted serialized string that contains performance metric data of multiple categories.
   * 
   * @example
   * {\\"process|cpusage\\":0,\\"process|cpuser\\":0,\\"process|cpusys\\":0,******}
   */
  metricData?: string;
  /**
   * @remarks
   * The name of the network interface.
   * 
   * @example
   * eth1
   */
  networkInterface?: string;
  /**
   * @remarks
   * The timestamp of the log. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1583907780
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      diskDevice: 'DiskDevice',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      metricData: 'MetricData',
      networkInterface: 'NetworkInterface',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDevice: 'string',
      hostname: 'string',
      instanceId: 'string',
      metricData: 'string',
      networkInterface: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBodyMetricLogs extends $dara.Model {
  metricLog?: GetCloudMetricLogsResponseBodyMetricLogsMetricLog[];
  static names(): { [key: string]: string } {
    return {
      metricLog: 'MetricLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricLog: { 'type': 'array', 'itemType': GetCloudMetricLogsResponseBodyMetricLogsMetricLog },
    };
  }

  validate() {
    if(Array.isArray(this.metricLog)) {
      $dara.Model.validateArray(this.metricLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the SVG file that contains the profiling results.
   * 
   * @example
   * ehpc-hz-faRavbPf6b_i-bdrftgyh890654****_21687_2019-09-09-02-37-40.bottomup.svg
   */
  name?: string;
  /**
   * @remarks
   * The size of the SVG file. Unit: bytes.
   * 
   * @example
   * 648
   */
  size?: number;
  /**
   * @remarks
   * The type of the SVG file.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The URL of the Object Storage Service (OSS) bucket where the scalable vector graphics (SVG) file is stored.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBodySvgUrls extends $dara.Model {
  svgInfo?: GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo[];
  static names(): { [key: string]: string } {
    return {
      svgInfo: 'SvgInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      svgInfo: { 'type': 'array', 'itemType': GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo },
    };
  }

  validate() {
    if(Array.isArray(this.svgInfo)) {
      $dara.Model.validateArray(this.svgInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the node on which the file system is mounted. Valid values:
   * 
   * *   Compute: compute node
   * *   Manager: management node
   * *   Login: logon node
   * 
   * @example
   * Compute
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfoRoles extends $dara.Model {
  roleInfo?: GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'RoleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: { 'type': 'array', 'itemType': GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.roleInfo)) {
      $dara.Model.validateArray(this.roleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfo extends $dara.Model {
  /**
   * @remarks
   * The queue of the job.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /ehpcdata
   */
  localDirectory?: string;
  /**
   * @remarks
   * The type of cluster. Valid values:
   * 
   * *   OnPremise: The cluster is deployed on a hybrid cloud.
   * *   PublicCloud: The cluster is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * Indicates whether the resource can be unmounted.
   * 
   * @example
   * true
   */
  mustKeep?: boolean;
  /**
   * @remarks
   * The remote mount directory.
   * 
   * @example
   * /test
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The array of the node on which the file system is mounted.
   */
  roles?: GetClusterVolumesResponseBodyVolumesVolumeInfoRoles;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 0e754****
   */
  volumeId?: string;
  /**
   * @remarks
   * The address of the mount target.
   * 
   * @example
   * 0e754****-kal90.cn-hangzhou.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The storage protocol type of the file system. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the file system. Valid values:
   * 
   * *   NAS
   * 
   * @example
   * NAS
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      mustKeep: 'MustKeep',
      remoteDirectory: 'RemoteDirectory',
      roles: 'Roles',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      mustKeep: 'boolean',
      remoteDirectory: 'string',
      roles: GetClusterVolumesResponseBodyVolumesVolumeInfoRoles,
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumes extends $dara.Model {
  volumeInfo?: GetClusterVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': GetClusterVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.volumeInfo)) {
      $dara.Model.validateArray(this.volumeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsResponseBodyPostInstallScripts extends $dara.Model {
  /**
   * @remarks
   * The parameter that is used to run the post-installation script.
   * 
   * @example
   * -h
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the post-installation script.
   * 
   * @example
   * https://bucket.oss-cn-shanghai.aliyuncs.com/postscript_examples.sh
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoRequestScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler name. Valid values:
   * 
   * *   pbs
   * *   pbs19
   * *   slurm
   * *   slurm19
   * *   slurm20
   * 
   * Valid values of N: 0 to 100.
   * 
   * @example
   * pbs
   */
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponseBodySchedInfo extends $dara.Model {
  /**
   * @remarks
   * The detailed settings of the scheduler.
   * 
   * @example
   * {"AclInfo":[{"AclEnable": false,"UntrackUser": [],"User": [],"QueueName": "workq"}],"JobHistory": "","SchedIteration": "60","QueueResource": [{"UntrackUser": [],"User": [],"QueueName": "workq"}]}
   */
  configuration?: string;
  /**
   * @remarks
   * The type of the scheduler.
   * 
   * @example
   * pbs
   */
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      schedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the Nth node instance on which the command is run.
   * 
   * > This parameter specifies the node on which the command is run. If it is not specified, the command will be run on all nodes of the cluster.
   * 
   * @example
   * i-bp1in9hmw3ur52x0****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds extends $dara.Model {
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zoneId)) {
      $dara.Model.validateArray(this.zoneId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of elastic network interfaces (ENIs) that can be bound to an ECS instance.
   * 
   * @example
   * 2
   */
  eniQuantity?: number;
  /**
   * @remarks
   * The number of GPUs of an ECS instance.
   * 
   * @example
   * 2
   */
  GPUAmount?: number;
  /**
   * @remarks
   * The GPU type of the ECS instance.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * The maximum inbound internal bandwidth. Unit: Kbit/s.
   * 
   * @example
   * 10240000
   */
  instanceBandwidthRx?: number;
  /**
   * @remarks
   * The maximum outbound internal bandwidth. Unit: Kbit/s.
   * 
   * @example
   * 10240000
   */
  instanceBandwidthTx?: number;
  /**
   * @remarks
   * The inbound packet forwarding rate over the internal network. Unit: pps.
   * 
   * @example
   * 9000000
   */
  instancePpsRx?: number;
  /**
   * @remarks
   * The outbound packet forwarding rate over the internal network. Unit: pps.
   * 
   * @example
   * 9000000
   */
  instancePpsTx?: number;
  /**
   * @remarks
   * The ID of the ECS instance type.
   * 
   * @example
   * ecs.n4.xlarge
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The memory size of the ECS instance. Unit: GiB.
   * 
   * @example
   * 8
   */
  memorySize?: number;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   SoldOut
   * *   Available
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of zone IDs.
   */
  zoneIds?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      eniQuantity: 'EniQuantity',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      instanceTypeId: 'InstanceTypeId',
      memorySize: 'MemorySize',
      status: 'Status',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      eniQuantity: 'number',
      GPUAmount: 'number',
      GPUSpec: 'string',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      instanceTypeId: 'string',
      memorySize: 'number',
      status: 'string',
      zoneIds: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds,
    };
  }

  validate() {
    if(this.zoneIds && typeof (this.zoneIds as any).validate === 'function') {
      (this.zoneIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes extends $dara.Model {
  typesInfo?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo[];
  static names(): { [key: string]: string } {
    return {
      typesInfo: 'TypesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typesInfo: { 'type': 'array', 'itemType': ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo },
    };
  }

  validate() {
    if(Array.isArray(this.typesInfo)) {
      $dara.Model.validateArray(this.typesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo extends $dara.Model {
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecs-3
   */
  generation?: string;
  /**
   * @remarks
   * The ID of the instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.n4
   */
  instanceTypeFamilyId?: string;
  /**
   * @remarks
   * The list of instance types.
   */
  types?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      instanceTypeFamilyId: 'InstanceTypeFamilyId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'string',
      instanceTypeFamilyId: 'string',
      types: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes,
    };
  }

  validate() {
    if(this.types && typeof (this.types as any).validate === 'function') {
      (this.types as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamilies extends $dara.Model {
  instanceTypeFamilyInfo?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilyInfo: 'InstanceTypeFamilyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilyInfo: { 'type': 'array', 'itemType': ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeFamilyInfo)) {
      $dara.Model.validateArray(this.instanceTypeFamilyInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo extends $dara.Model {
  /**
   * @remarks
   * The duration of the profiling process. Unit: seconds.
   * 
   * Valid values: 10 to 300.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The frequency of the profiling process. Unit: Hz.
   * 
   * Valid values: 1 to 2000
   * 
   * @example
   * 2000
   */
  freq?: number;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * compute5
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1j76z8dlukzqgl0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The progress ID.
   * 
   * @example
   * 21687
   */
  pid?: number;
  /**
   * @remarks
   * The ID of the profiling process.
   * 
   * @example
   * ehpc-hz-i-bplukzqgl****_21687_2019-09-09-02-37-40
   */
  profilingId?: string;
  /**
   * @remarks
   * The time when the profiling was triggered.
   * 
   * @example
   * 2019-09-09 02:37:40
   */
  triggerTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      freq: 'Freq',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      pid: 'Pid',
      profilingId: 'ProfilingId',
      triggerTime: 'TriggerTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      freq: 'number',
      hostName: 'string',
      instanceId: 'string',
      pid: 'number',
      profilingId: 'string',
      triggerTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBodyProfilings extends $dara.Model {
  profilingInfo?: ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo[];
  static names(): { [key: string]: string } {
    return {
      profilingInfo: 'ProfilingInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profilingInfo: { 'type': 'array', 'itemType': ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo },
    };
  }

  validate() {
    if(Array.isArray(this.profilingInfo)) {
      $dara.Model.validateArray(this.profilingInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogsLogInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the log was created.
   * 
   * @example
   * 2019-09-18T13:24:13.000
   */
  createTime?: string;
  /**
   * @remarks
   * The level of the log entry. Valid values:
   * 
   * *   warn
   * *   error
   * *   info
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * Begin to create cluster
   */
  message?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   CreateCluster
   * *   StartCluster
   * *   StopCluster
   * *   DeleteCluster
   * *   AddNodes
   * *   StartNodes
   * *   ResetNodes
   * *   StopNodes
   * *   DeleteNodes
   * 
   * @example
   * CreateCluster
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      level: 'Level',
      message: 'Message',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      level: 'string',
      message: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogs extends $dara.Model {
  logInfo?: ListClusterLogsResponseBodyLogsLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': ListClusterLogsResponseBodyLogsLogInfo },
    };
  }

  validate() {
    if(Array.isArray(this.logInfo)) {
      $dara.Model.validateArray(this.logInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleComputes extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal nodes.
   * 
   * @example
   * 0
   */
  exceptionCount?: number;
  /**
   * @remarks
   * The number of normal nodes.
   * 
   * @example
   * 1
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of nodes that are being used in the queue. This includes those that are being initialized, installed, or released.
   * 
   * @example
   * 1
   */
  operatingCount?: number;
  /**
   * @remarks
   * The number of stopped nodes.
   * 
   * @example
   * 0
   */
  stoppedCount?: number;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      normalCount: 'NormalCount',
      operatingCount: 'OperatingCount',
      stoppedCount: 'StoppedCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      normalCount: 'number',
      operatingCount: 'number',
      stoppedCount: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleManagers extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal nodes.
   * 
   * @example
   * 0
   */
  exceptionCount?: number;
  /**
   * @remarks
   * The number of normal nodes.
   * 
   * @example
   * 1
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of nodes that are being used in the queue. This includes those that are being initialized, installed, or released.
   * 
   * @example
   * 1
   */
  operatingCount?: number;
  /**
   * @remarks
   * The number of stopped nodes.
   * 
   * @example
   * 0
   */
  stoppedCount?: number;
  /**
   * @remarks
   * The total number of management nodes.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      normalCount: 'NormalCount',
      operatingCount: 'OperatingCount',
      stoppedCount: 'StoppedCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      normalCount: 'number',
      operatingCount: 'number',
      stoppedCount: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleTotalResources extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. Unit: cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPU cards. Unit: cards.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleUsedResources extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. Unit: cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPU cards. Unit: cards.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimple extends $dara.Model {
  /**
   * @remarks
   * The server type of the account. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The operating system tag of the base image. The tag was used only by the management node.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The version of the client.
   * 
   * @example
   * 1.0.64
   */
  clientVersion?: string;
  /**
   * @remarks
   * The maximum hourly price for the ECS instance under the compute node. The return value can be accurate to three decimal places.
   * 
   * @example
   * 0.034
   */
  computeSpotPriceLimit?: number;
  /**
   * @remarks
   * The bidding method of the compute nodes. Valid values:
   * 
   * *   NoSpot: The instances of the compute node are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances of the compute node are preemptible instances. These types of instances have a specified maximum hourly price.
   * *   SpotAsPriceGo: The instances of the compute node are preemptible instances. The price of these instances is based on the current market price.
   * 
   * @example
   * NoSpot
   */
  computeSpotStrategy?: string;
  /**
   * @remarks
   * The information about compute nodes.
   */
  computes?: ListClustersResponseBodyClustersClusterInfoSimpleComputes;
  /**
   * @remarks
   * The number of compute nodes in the cluster.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-10-30T07:39:20.000Z
   */
  createTime?: string;
  /**
   * @remarks
   * The mode in which the cluster was deployed. Valid values:
   * 
   * *   Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
   * *   Advanced: Two high availability (HA) account nodes, two HA scheduler nodes, one logon node, and multiple compute nodes are separately deployed.
   * *   Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
   * *   Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
   * 
   * @example
   * Standard
   */
  deployMode?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * clusterdescription
   */
  description?: string;
  /**
   * @remarks
   * The version of E-HPC.
   * 
   * @example
   * 1.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Indicates whether plug-ins were used in the cluster. Valid values:
   * 
   * *   true: Plug-ins are used.
   * *   false: Plug-ins are not used.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  hasPlugin?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * wi_1607_x64_dtc_zh_40G_alibase****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The billing method of the nodes in the cluster. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type of the compute nodes.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether a scaling group was enabled. Valid values:
   * 
   * *   true: A scaling group is enabled.
   * *   false: No scaling group is enabled.
   * 
   * @example
   * false
   */
  isComputeEss?: boolean;
  /**
   * @remarks
   * The location where the cluster was deployed. Valid values:
   * 
   * *   OnPremise: The cluster is deployed on a hybrid cloud.
   * *   PublicCloud: The cluster is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The list of logon nodes.
   * 
   * @example
   * {"Id": "i-bp13x4is8pvdhws7e****"}
   */
  loginNodes?: string;
  /**
   * @remarks
   * The list of management nodes.
   */
  managers?: ListClustersResponseBodyClustersClusterInfoSimpleManagers;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The prefix of the node.
   * 
   * @example
   * test
   */
  nodePrefix?: string;
  /**
   * @remarks
   * The suffix of the node.
   * 
   * @example
   * name
   */
  nodeSuffix?: string;
  /**
   * @remarks
   * The operating system tag of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.You can call the ListResourceGroups operation to query the IDs of resource groups.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   uninit: The cluster is not initialized.
   * *   creating: The cluster is being created.
   * *   init: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   exception: The cluster encounters an exception.
   * *   releasing: The cluster is being released.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The statistics of all resources in the cluster.
   */
  totalResources?: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources;
  /**
   * @remarks
   * The number of consumed resources in the cluster.
   */
  usedResources?: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-b3f3edefefeep0760yju****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      baseOsTag: 'BaseOsTag',
      clientVersion: 'ClientVersion',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      computes: 'Computes',
      count: 'Count',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      description: 'Description',
      ehpcVersion: 'EhpcVersion',
      hasPlugin: 'HasPlugin',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      isComputeEss: 'IsComputeEss',
      location: 'Location',
      loginNodes: 'LoginNodes',
      managers: 'Managers',
      name: 'Name',
      nodePrefix: 'NodePrefix',
      nodeSuffix: 'NodeSuffix',
      osTag: 'OsTag',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      baseOsTag: 'string',
      clientVersion: 'string',
      computeSpotPriceLimit: 'number',
      computeSpotStrategy: 'string',
      computes: ListClustersResponseBodyClustersClusterInfoSimpleComputes,
      count: 'number',
      createTime: 'string',
      deployMode: 'string',
      description: 'string',
      ehpcVersion: 'string',
      hasPlugin: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      isComputeEss: 'boolean',
      location: 'string',
      loginNodes: 'string',
      managers: ListClustersResponseBodyClustersClusterInfoSimpleManagers,
      name: 'string',
      nodePrefix: 'string',
      nodeSuffix: 'string',
      osTag: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      schedulerType: 'string',
      status: 'string',
      totalResources: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources,
      usedResources: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.computes && typeof (this.computes as any).validate === 'function') {
      (this.computes as any).validate();
    }
    if(this.managers && typeof (this.managers as any).validate === 'function') {
      (this.managers as any).validate();
    }
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    if(this.usedResources && typeof (this.usedResources as any).validate === 'function') {
      (this.usedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $dara.Model {
  clusterInfoSimple?: ListClustersResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoSimple },
    };
  }

  validate() {
    if(Array.isArray(this.clusterInfoSimple)) {
      $dara.Model.validateArray(this.clusterInfoSimple);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBodyClustersClusterInfoSimple extends $dara.Model {
  /**
   * @remarks
   * The server type of the account. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The version of the client.
   * 
   * @example
   * 1.0.64
   */
  clientVersion?: string;
  /**
   * @remarks
   * The mode in which the cluster is deployed. Valid values:
   * 
   * *   Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
   * *   Advanced: Two high availability (HA) account nodes, two HA scheduler nodes, one logon node, and multiple compute nodes are separately deployed.
   * *   Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
   * *   Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
   * 
   * @example
   * Standard
   */
  deployMode?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * clusterdescription
   */
  description?: string;
  /**
   * @remarks
   * The version of E-HPC.
   * 
   * @example
   * 1.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Indicates whether the cluster uses a plug-in. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  hasPlugin?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether a scaling group is enabled. Valid values:
   * 
   * *   true: A scaling group is enabled.
   * *   false: No scaling group is enabled.
   * 
   * @example
   * false
   */
  isComputeEss?: boolean;
  /**
   * @remarks
   * The location where the cluster is deployed. Valid values:
   * 
   * *   OnPremise: The cluster is deployed on a hybrid cloud.
   * *   PublicCloud: The cluster is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster1
   */
  name?: string;
  /**
   * @remarks
   * The image tag of the operating system.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   uninit: The cluster is not initialized.
   * *   creating: The cluster is being created.
   * *   init: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   exception: The cluster encounters an exception.
   * *   releasing: The cluster is being released.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-b3f3edefefeep0760yju****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      clientVersion: 'ClientVersion',
      deployMode: 'DeployMode',
      description: 'Description',
      ehpcVersion: 'EhpcVersion',
      hasPlugin: 'HasPlugin',
      id: 'Id',
      isComputeEss: 'IsComputeEss',
      location: 'Location',
      name: 'Name',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      clientVersion: 'string',
      deployMode: 'string',
      description: 'string',
      ehpcVersion: 'string',
      hasPlugin: 'boolean',
      id: 'string',
      isComputeEss: 'boolean',
      location: 'string',
      name: 'string',
      osTag: 'string',
      schedulerType: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBodyClusters extends $dara.Model {
  clusterInfoSimple?: ListClustersMetaResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersMetaResponseBodyClustersClusterInfoSimple },
    };
  }

  validate() {
    if(Array.isArray(this.clusterInfoSimple)) {
      $dara.Model.validateArray(this.clusterInfoSimple);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBodyCommandsCommand extends $dara.Model {
  /**
   * @remarks
   * The content of the command.
   * 
   * @example
   * echo "hello world"
   */
  commandContent?: string;
  /**
   * @remarks
   * The ID of the command.
   * 
   * @example
   * c-hz01v8vudql****
   */
  commandId?: string;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: string;
  /**
   * @remarks
   * The working directory of the command.
   * 
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandId: 'string',
      timeout: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBodyCommands extends $dara.Model {
  command?: ListCommandsResponseBodyCommandsCommand[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': ListCommandsResponseBodyCommandsCommand },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommunityImagesResponseBodyImagesImageInfoBaseOsTag extends $dara.Model {
  /**
   * @remarks
   * The architecture of the operating system. Valid values:
   * 
   * *   i386
   * *   x86_64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The operating system tag of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The distribution of the operating system. Valid values:
   * 
   * *   CentOS
   * *   Ubuntu
   * *   SUSE
   * *   OpenSUSE
   * *   Debian
   * *   CoreOS
   * *   Aliyun
   * *   Windows Server 2003
   * *   Windows Server 2008
   * *   Windows Server 2012
   * *   Others Linux
   * *   Customized Linux
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 7.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommunityImagesResponseBodyImagesImageInfoOsTag extends $dara.Model {
  /**
   * @remarks
   * The architecture of the operating system. Valid values:
   * 
   * *   i386
   * *   x86_64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The tag of the BOS image.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The operating system tag of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The OS.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 7.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      baseOsTag: 'BaseOsTag',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      baseOsTag: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommunityImagesResponseBodyImagesImageInfo extends $dara.Model {
  /**
   * @remarks
   * The tag of the BOS image.
   */
  baseOsTag?: ListCommunityImagesResponseBodyImagesImageInfoBaseOsTag;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * ExampleDescription
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-bp181x855551ww5yq****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * linux_CentOS7.2_OceanBase_OBD_1ECS-3OB_3.0
   */
  imageName?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * *   self: custom image
   * *   others: shared image
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * An array of OS images that are supported by E-HPC.
   */
  osTag?: ListCommunityImagesResponseBodyImagesImageInfoOsTag;
  /**
   * @remarks
   * The script that is run after the image is installed.
   * 
   * @example
   * example.sh
   */
  postInstallScript?: string;
  /**
   * @remarks
   * The billing unit of the image. Valid values:
   * 
   * *   Hour
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The product code in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj028279
   */
  productCode?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The stock keeping unit (SKU) of the image. Valid values:
   * 
   * *   ECS: pay-as-you-go
   * *   package: subscription
   * 
   * @example
   * ECS
   */
  skuCode?: string;
  /**
   * @remarks
   * The state of the image. Valid values:
   * 
   * *   UnAvailable
   * *   Available
   * *   Creating
   * *   CreateFailed
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The owner of the image.
   * 
   * @example
   * 127****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      postInstallScript: 'PostInstallScript',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      size: 'Size',
      skuCode: 'SkuCode',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: ListCommunityImagesResponseBodyImagesImageInfoBaseOsTag,
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      osTag: ListCommunityImagesResponseBodyImagesImageInfoOsTag,
      postInstallScript: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      size: 'number',
      skuCode: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.baseOsTag && typeof (this.baseOsTag as any).validate === 'function') {
      (this.baseOsTag as any).validate();
    }
    if(this.osTag && typeof (this.osTag as any).validate === 'function') {
      (this.osTag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommunityImagesResponseBodyImages extends $dara.Model {
  imageInfo?: ListCommunityImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': ListCommunityImagesResponseBodyImagesImageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.imageInfo)) {
      $dara.Model.validateArray(this.imageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets extends $dara.Model {
  /**
   * @remarks
   * The domain in which the mount target resides.
   * 
   * @example
   * c0967****.cn-hangzhou.cpfs.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the mount target. Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being mounted.
   * *   Deleting: The mount target is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-8vbvb34rtyh6xb3zrehs1****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb34rtyh6xb3zrehs1****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList extends $dara.Model {
  mountTargets?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets[];
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets },
    };
  }

  validate() {
    if(Array.isArray(this.mountTargets)) {
      $dara.Model.validateArray(this.mountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystems extends $dara.Model {
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB
   * 
   * @example
   * 5120
   */
  capacity?: string;
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2018-07-26 16:36:27
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * FilsDestription
   */
  destription?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 096751****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The mount targets of the file systems.
   */
  mountTargetList?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList;
  /**
   * @remarks
   * The protocol type that is applied to the mounted file system. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      createTime: 'CreateTime',
      destription: 'Destription',
      fileSystemId: 'FileSystemId',
      mountTargetList: 'MountTargetList',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      createTime: 'string',
      destription: 'string',
      fileSystemId: 'string',
      mountTargetList: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList,
      protocolType: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.mountTargetList && typeof (this.mountTargetList as any).validate === 'function') {
      (this.mountTargetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemList extends $dara.Model {
  fileSystems?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystems[];
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListCpfsFileSystemsResponseBodyFileSystemListFileSystems },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystems)) {
      $dara.Model.validateArray(this.fileSystems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoBaseOsTag extends $dara.Model {
  /**
   * @remarks
   * The architecture of the operating system. Valid values:
   * 
   * *   i386
   * *   x86_64
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * The tags of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The OS. Valid values:
   * 
   * *   CentOS
   * *   windows
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 7.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoOsTag extends $dara.Model {
  /**
   * @remarks
   * The architecture of the operating system. Valid values:
   * 
   * *   i386
   * *   x86_64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag of the operating system.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The OS.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 7.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      baseOsTag: 'BaseOsTag',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      baseOsTag: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfo extends $dara.Model {
  /**
   * @remarks
   * The image tag of the operating system.
   */
  baseOsTag?: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * ExampleDescription
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-bp181x855551ww5yq****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * CHESS5V5.0.27
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   self: custom image
   * *   others: shared image
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * An array of system images that are supported by E-HPC.
   */
  osTag?: ListCustomImagesResponseBodyImagesImageInfoOsTag;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * example.sh
   */
  postInstallScript?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * cmjj028279
   */
  productCode?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * ECS
   */
  skuCode?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 127****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      postInstallScript: 'PostInstallScript',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      size: 'Size',
      skuCode: 'SkuCode',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag,
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      osTag: ListCustomImagesResponseBodyImagesImageInfoOsTag,
      postInstallScript: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      size: 'number',
      skuCode: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.baseOsTag && typeof (this.baseOsTag as any).validate === 'function') {
      (this.baseOsTag as any).validate();
    }
    if(this.osTag && typeof (this.osTag as any).validate === 'function') {
      (this.osTag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImages extends $dara.Model {
  imageInfo?: ListCustomImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyImagesImageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.imageInfo)) {
      $dara.Model.validateArray(this.imageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the permission group is the default permission group of the user.
   * 
   * Valid values:
   * 
   * *   true: The permission group is the default permission group. In this case, all IP addresses are allowed to access the permission group, and the user cannot delete the permission group and permission rules in the permission group.
   * *   false: The permission group is not the default permission group.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The domain in which the mount target resides.
   * 
   * @example
   * 088b****-lj2.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   vpc
   * *   classic
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the mount target. Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being created or modified.
   * *   Deleting: The mount target is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-8vbvb34rtyh6xb3zrehs1****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb34rtyh6xb3zrehs1****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList extends $dara.Model {
  mountTargets?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets[];
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets },
    };
  }

  validate() {
    if(Array.isArray(this.mountTargets)) {
      $dara.Model.validateArray(this.mountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages extends $dara.Model {
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-0be9c4b624-37****
   */
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList extends $dara.Model {
  packages?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages[];
  static names(): { [key: string]: string } {
    return {
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packages: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages },
    };
  }

  validate() {
    if(Array.isArray(this.packages)) {
      $dara.Model.validateArray(this.packages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the file system. Unit: Mbit/s.
   * 
   * @example
   * 150
   */
  bandWidth?: number;
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB.
   * 
   * @example
   * 5120
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2018-07-26 16:36:27
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * FilesDescription
   */
  destription?: string;
  /**
   * @remarks
   * Indicates whether data in the file system is encrypted.
   * 
   * You can use keys that are managed by Key Management Service (KMS) to encrypt the data in a file system. When you read and write the encrypted data, the data is automatically decrypted.
   * 
   * Default value: 0. Valid values:
   * 
   * *   0: The data in the file system is not encrypted.
   * *   1: The data in the file system is encrypted by using a NAS-managed key. This parameter is valid if FileSystemType is set to standard or extreme.
   * *   2: The data in the file system is encrypted by using a KMS-managed key. This parameter is valid only if FileSystemType is set to extreme.
   * 
   * @example
   * 0
   */
  encryptType?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 088b****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system. Valid value:
   * 
   * *   standard: general-purpose network-attached storage (NAS) file systems.
   * *   extreme: extreme NAS file systems.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The used capacity of the NAS file system. Unit: bytes.
   * 
   * @example
   * 1216816455
   */
  meteredSize?: number;
  /**
   * @remarks
   * The list of mount targets.
   */
  mountTargetList?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList;
  /**
   * @remarks
   * The list of storage plans.
   */
  packageList?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList;
  /**
   * @remarks
   * The protocol type of the file system. Valid values:
   * 
   * *   NFS- SMB
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the file system. Valid values:
   * 
   * *   Pending: The file system is being created or modified.
   * *   Running: The file system is available.
   * *   Stopped: The file system is unavailable.
   * *   Extending: The file system is being scaled up.
   * *   Stopping: The file system is being disabled.
   * *   Deleting: The file system is being deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage type of the file system.
   * 
   * *   Valid values if FileSystemType is set to standard: Capacity and Performance.
   * *   Valid values if FileSystemType is set to extreme: standard and advance.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp132kgui8n0targbn1cm
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      destription: 'Destription',
      encryptType: 'EncryptType',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      mountTargetList: 'MountTargetList',
      packageList: 'PackageList',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      storageType: 'StorageType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      capacity: 'number',
      createTime: 'string',
      destription: 'string',
      encryptType: 'number',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      mountTargetList: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList,
      packageList: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList,
      protocolType: 'string',
      regionId: 'string',
      status: 'string',
      storageType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.mountTargetList && typeof (this.mountTargetList as any).validate === 'function') {
      (this.mountTargetList as any).validate();
    }
    if(this.packageList && typeof (this.packageList as any).validate === 'function') {
      (this.packageList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemList extends $dara.Model {
  fileSystems?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems[];
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystems)) {
      $dara.Model.validateArray(this.fileSystems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTagsOsInfo extends $dara.Model {
  /**
   * @remarks
   * The architecture of the operating system. Valid values:
   * 
   * *   i386
   * *   x86_64
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag of the operating system. The tag is used only for management nodes.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-bp1h8aoe73p71iow****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  OSName?: string;
  /**
   * @remarks
   * The name of the image in English.
   * 
   * @example
   * CentOS_7.2_64
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The tag that is added to the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The operating system. Valid values:
   * 
   * *   CentOS
   * *   windows
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 7.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      baseOsTag: 'BaseOsTag',
      imageId: 'ImageId',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      baseOsTag: 'string',
      imageId: 'string',
      OSName: 'string',
      OSNameEn: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTags extends $dara.Model {
  osInfo?: ListImagesResponseBodyOsTagsOsInfo[];
  static names(): { [key: string]: string } {
    return {
      osInfo: 'OsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osInfo: { 'type': 'array', 'itemType': ListImagesResponseBodyOsTagsOsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.osInfo)) {
      $dara.Model.validateArray(this.osInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBodySoftwareListSoftwareList extends $dara.Model {
  /**
   * @remarks
   * The software ID.
   * 
   * @example
   * MPICH_3.2
   */
  softwareId?: string;
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * mpich
   */
  softwareName?: string;
  /**
   * @remarks
   * The status of the software. Valid values:
   * 
   * *   Installing: The software is being installed.
   * *   Installed: The software is installed.
   * 
   * @example
   * Installing
   */
  softwareStatus?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 3.2
   */
  softwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      softwareId: 'SoftwareId',
      softwareName: 'SoftwareName',
      softwareStatus: 'SoftwareStatus',
      softwareVersion: 'SoftwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareId: 'string',
      softwareName: 'string',
      softwareStatus: 'string',
      softwareVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBodySoftwareList extends $dara.Model {
  softwareList?: ListInstalledSoftwareResponseBodySoftwareListSoftwareList[];
  static names(): { [key: string]: string } {
    return {
      softwareList: 'SoftwareList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareList: { 'type': 'array', 'itemType': ListInstalledSoftwareResponseBodySoftwareListSoftwareList },
    };
  }

  validate() {
    if(Array.isArray(this.softwareList)) {
      $dara.Model.validateArray(this.softwareList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the node on which the command is run.
   * 
   * >  The Instance.N.Id parameter specifies the node on which the command is run. If it is not specified, the command is run on all nodes of the cluster.
   * 
   * @example
   * i-uf65bh2113hlqvyr****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBodyInvocationResultsInvocationResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the command.
   * 
   * @example
   * c-hz01v8x80o3****
   */
  commandId?: string;
  /**
   * @remarks
   * The exit code.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time at which the command entered the Finished state.
   * 
   * @example
   * 2021-09-06T09:14:56Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The ID of the node on which the command was run.
   * 
   * @example
   * i-uf65bh2113hlqvyr****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the command. Valid values:
   * 
   * *   Finished
   * *   Running
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Finished
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The output result.
   * 
   * @example
   * hello world
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the command was run and its result was obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invokeRecordStatus: 'InvokeRecordStatus',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invokeRecordStatus: 'string',
      message: 'string',
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

export class ListInvocationResultsResponseBodyInvocationResults extends $dara.Model {
  invocationResult?: ListInvocationResultsResponseBodyInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': ListInvocationResultsResponseBodyInvocationResultsInvocationResult },
    };
  }

  validate() {
    if(Array.isArray(this.invocationResult)) {
      $dara.Model.validateArray(this.invocationResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * i-uf6abz34m2714bp4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   Finished: The running of the node finished.
   * *   Running: The node is running.
   * *   Failed: The node failed to run.
   * *   Stopped: The running of the node stopped.
   * 
   * @example
   * Finished
   */
  instanceInvokeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceInvokeStatus: 'InstanceInvokeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceInvokeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBodyInvokeInstances extends $dara.Model {
  invokeInstance?: ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance },
    };
  }

  validate() {
    if(Array.isArray(this.invokeInstance)) {
      $dara.Model.validateArray(this.invokeInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplatesJobTemplates extends $dara.Model {
  /**
   * @remarks
   * The queue of the job.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 2-7:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The maximum running time of the job. Valid formats:
   * 
   * *   hh:mm:ss
   * *   mm:ss
   * *   ss
   * 
   * @example
   * 12:00:00
   */
  clockTime?: string;
  /**
   * @remarks
   * The command that is used to run the job.
   * 
   * @example
   * ./LammpsTest/lammps.pbs
   */
  commandLine?: string;
  /**
   * @remarks
   * The maximum GPU usage for individual compute nodes. Valid values: 1 to 8.
   * 
   * The parameter takes effect only when the cluster uses PBS and a compute node is a GPU-accelerated instance.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * ehpc-job-tmpl-6RxO5y****
   */
  id?: string;
  /**
   * @remarks
   * The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
   * 
   * @example
   * https://test.oss-cn-beijing.aliyuncs.com/test.py
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The maximum memory usage of a single compute node. The unit can be GB, MB, or KB, and is case-insensitive.
   * 
   * @example
   * 1GB
   */
  mem?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes. Valid values: 1 to 500.
   * 
   * @example
   * 2
   */
  node?: number;
  /**
   * @remarks
   * The path that is used to run the job.
   * 
   * @example
   * ./jobfolder
   */
  packagePath?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The queue of the job.
   * 
   * @example
   * workq
   */
  queue?: string;
  /**
   * @remarks
   * Specifies whether the job can be rerun. Valid values:
   * 
   * *   true: The job can be rerun.
   * *   false: The job cannot be rerun.
   * 
   * @example
   * false
   */
  reRunable?: boolean;
  /**
   * @remarks
   * The name of the user that runs the job.
   * 
   * @example
   * user1
   */
  runasUser?: string;
  /**
   * @remarks
   * The output file path of stderr.
   * 
   * @example
   * ./LammpsTest
   */
  stderrRedirectPath?: string;
  /**
   * @remarks
   * The output file path of stdout.
   * 
   * @example
   * ./Lammps
   */
  stdoutRedirectPath?: string;
  /**
   * @remarks
   * The number of tasks required by a single compute node. Valid values: 1 to 1000.
   * 
   * @example
   * 2
   */
  task?: number;
  /**
   * @remarks
   * The number of threads required by a single task. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  thread?: number;
  /**
   * @remarks
   * The command that is used to decompress the job files downloaded from an OSS bucket. The parameter takes effect only when WithUnzipCmd is set to true. Valid values:
   * 
   * *   tar xzf: decompresses GZIP files.
   * *   tar xf: decompresses TAR files.
   * *   unzip: decompresses ZIP files.
   * 
   * @example
   * tar xzf
   */
  unzipCmd?: string;
  /**
   * @remarks
   * The environment variables of the job.
   * 
   * @example
   * [{Name:,Value:},{Name:,Value:}]
   */
  variables?: string;
  /**
   * @remarks
   * Specifies whether to decompress the job files downloaded from an OSS bucket. Valid value:
   * 
   * *   true: decompresses the job file.
   * *   false: does not decompress the job file.
   * 
   * @example
   * true
   */
  withUnzipCmd?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      commandLine: 'CommandLine',
      gpu: 'Gpu',
      id: 'Id',
      inputFileUrl: 'InputFileUrl',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      priority: 'Priority',
      queue: 'Queue',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
      withUnzipCmd: 'WithUnzipCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      commandLine: 'string',
      gpu: 'number',
      id: 'string',
      inputFileUrl: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      priority: 'number',
      queue: 'string',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
      withUnzipCmd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplates extends $dara.Model {
  jobTemplates?: ListJobTemplatesResponseBodyTemplatesJobTemplates[];
  static names(): { [key: string]: string } {
    return {
      jobTemplates: 'JobTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplates: { 'type': 'array', 'itemType': ListJobTemplatesResponseBodyTemplatesJobTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.jobTemplates)) {
      $dara.Model.validateArray(this.jobTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfoResources extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs that were used to run the job.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of nodes that were used to run the job.
   * 
   * @example
   * 0
   */
  nodes?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      nodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfo extends $dara.Model {
  /**
   * @remarks
   * The job array. If the job is not in a queue, the output is empty.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-10:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * jobDescription
   */
  comment?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 0.manager
   */
  id?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2018-07-18T17:46:48
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The list of compute nodes that were used to run the job.
   * 
   * @example
   * [\\"compute2\\", \\"compute3\\"]
   */
  nodeList?: string;
  /**
   * @remarks
   * The name of the user that ran the job.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 0 to 9. A large value indicates a higher priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The resources that were used to run the job.
   */
  resources?: ListJobsResponseBodyJobsJobInfoResources;
  /**
   * @remarks
   * The path that was used to run the job.
   * 
   * @example
   * ./Temp
   */
  shellPath?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2018-07-18T17:46:48
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   FINISHED: The job is completed
   * *   RUNNING: The job connector is running.
   * *   QUEUED: The job is pending in a queue.
   * 
   * @example
   * FINISHED
   */
  state?: string;
  /**
   * @remarks
   * The output file path of stderr.
   * 
   * @example
   * ./Temp
   */
  stderr?: string;
  /**
   * @remarks
   * The output file path of stdout.
   * 
   * @example
   * ./Temp
   */
  stdout?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 2018-07-18T17:46:47
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      lastModifyTime: 'LastModifyTime',
      name: 'Name',
      nodeList: 'NodeList',
      owner: 'Owner',
      priority: 'Priority',
      resources: 'Resources',
      shellPath: 'ShellPath',
      startTime: 'StartTime',
      state: 'State',
      stderr: 'Stderr',
      stdout: 'Stdout',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      lastModifyTime: 'string',
      name: 'string',
      nodeList: 'string',
      owner: 'string',
      priority: 'string',
      resources: ListJobsResponseBodyJobsJobInfoResources,
      shellPath: 'string',
      startTime: 'string',
      state: 'string',
      stderr: 'string',
      stdout: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $dara.Model {
  jobInfo?: ListJobsResponseBodyJobsJobInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsJobInfo },
    };
  }

  validate() {
    if(Array.isArray(this.jobInfo)) {
      $dara.Model.validateArray(this.jobInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponseBodyJobsResources extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs that were used to run the job.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of nodes that were used to run the job.
   * 
   * @example
   * 0
   */
  nodes?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      nodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The job array. If the job is not in a queue, the output is empty.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-10:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * jobDescription
   */
  comment?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 8.scheduler
   */
  id?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 1647428667
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The list of compute nodes that were used to run the job.
   * 
   * @example
   * [\\"compute2\\", \\"compute3\\"]
   */
  nodeList?: string;
  /**
   * @remarks
   * The name of the user that ran the job.
   * 
   * @example
   * test2@scheduler
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The number of queues that ran the job.
   * 
   * @example
   * 2
   */
  queue?: string;
  /**
   * @remarks
   * Indicates whether the job can be run again. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * true
   */
  rerunable?: boolean;
  /**
   * @remarks
   * The resources that were used to run the job.
   */
  resources?: ListJobsWithFiltersResponseBodyJobsResources;
  /**
   * @remarks
   * The path that was used to run the job.
   * 
   * @example
   * ./Temp
   */
  shellPath?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 1647427667
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the job. Valid value:
   * 
   * *   FINISHED: The job is completed.
   * *   RUNNING: The job is running.
   * *   QUEUED: The job is pending in a queue.
   * 
   * @example
   * FINISHED
   */
  state?: string;
  /**
   * @remarks
   * The output file path of stderr.
   * 
   * @example
   * ./Temp
   */
  stderr?: string;
  /**
   * @remarks
   * The output file path of stdout.
   * 
   * @example
   * ./Temp
   */
  stdout?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1647423718
   */
  submitTime?: string;
  /**
   * @remarks
   * The list of variables of the job.
   * 
   * @example
   * {"PBS_O_SHELL":"/bin/bash", 	"PBS_O_HOST":"manager", 	"PBS_O_SYSTEM":"Linux", 	"PBS_O_LANG":"en_US.UTF-8", 	"PBS_O_QUEUE":"workq"}
   */
  variableList?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      lastModifyTime: 'LastModifyTime',
      name: 'Name',
      nodeList: 'NodeList',
      owner: 'Owner',
      priority: 'Priority',
      queue: 'Queue',
      rerunable: 'Rerunable',
      resources: 'Resources',
      shellPath: 'ShellPath',
      startTime: 'StartTime',
      state: 'State',
      stderr: 'Stderr',
      stdout: 'Stdout',
      submitTime: 'SubmitTime',
      variableList: 'VariableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      lastModifyTime: 'string',
      name: 'string',
      nodeList: 'string',
      owner: 'string',
      priority: 'string',
      queue: 'string',
      rerunable: 'boolean',
      resources: ListJobsWithFiltersResponseBodyJobsResources,
      shellPath: 'string',
      startTime: 'string',
      state: 'string',
      stderr: 'string',
      stdout: 'string',
      submitTime: 'string',
      variableList: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoRoles extends $dara.Model {
  role?: string[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoTotalResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The memory capacity. Unit: GB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoUsedResources extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The memory capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the node is added to the cluster.
   * 
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  addTime?: string;
  /**
   * @remarks
   * The mode in which the compute nodes are added. Valid values:
   * 
   * *   manual: The node is manually added.
   * *   autoscale: The node is automatically added.
   * 
   * @example
   * manual
   */
  createMode?: string;
  /**
   * @remarks
   * Indicates whether the node is created by using E-HPC.
   * 
   * *   true: The node is created by using E-HPC.
   * *   false: The node is not created by using E-HPC.
   * 
   * @example
   * true
   */
  createdByEhpc?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription node expired. For a pay-as-you-go node, false is returned.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The time when the subscription node expires. For a pay-as-you-go node, a null value is returned.
   * 
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the task node.
   * 
   * @example
   * test-HostName
   */
  hostName?: string;
  /**
   * @remarks
   * Indicates whether hyper-threading is enabled.
   * 
   * @example
   * true
   */
  htEnabled?: boolean;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp15707mys2rsy0j****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The instance types of the node.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * ``172.16.**.**``
   */
  ipAddress?: string;
  /**
   * @remarks
   * The location where the node is deployed. Valid values:
   * 
   * *   OnPremise: The node is deployed on your data center.
   * *   PublicCloud: The node is deployed on the public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The reason why the node is locked. Valid values:
   * 
   * *   financial: The instance is locked due to overdue payments.
   * *   security: The node is locked for security reasons.
   * *   recycling: The preemptible instance is locked and pending release.
   * *   dedicatedhostfinancial: The ECS instance is locked due to overdue payments of the dedicated host.
   * 
   * By default, an empty string is returned.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * ``172.16.**.**``
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   Scheduler: primary scheduling node
   * *   SchedulerBackup: secondary scheduling node
   * *   Account: primary domain server node
   * *   AccountBackup: secondary domain server node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * Scheduling nodes and domain server nodes are management nodes.
   */
  roles?: ListNodesResponseBodyNodesNodeInfoRoles;
  /**
   * @remarks
   * The bidding method of the compute nodes.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the node displayed on the scheduler. The status varies with the scheduler.
   * 
   * @example
   * active
   */
  stateInSched?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   uninit: The node is being installed.
   * *   exception: An exception occurred on the node.
   * *   running: The node is running.
   * *   initing: The node is being initialized.
   * *   releasing: The node is being released.
   * *   untracking: The node is not added to the cluster.
   * *   stopped: The node is stopped.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The statistics of the resources used by the node.
   */
  totalResources?: ListNodesResponseBodyNodesNodeInfoTotalResources;
  /**
   * @remarks
   * The usage of the compute nodes in the cluster. For other types of nodes, an empty value is returned.
   */
  usedResources?: ListNodesResponseBodyNodesNodeInfoUsedResources;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The version of the client that is used for the cluster.
   * 
   * @example
   * 1.0.78
   */
  version?: string;
  /**
   * @remarks
   * The VPC ID of the node.
   * 
   * @example
   * vpc-bp1gnu8br4ay7beb2w****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      createMode: 'CreateMode',
      createdByEhpc: 'CreatedByEhpc',
      expired: 'Expired',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      location: 'Location',
      lockReason: 'LockReason',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      roles: 'Roles',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      createMode: 'string',
      createdByEhpc: 'boolean',
      expired: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      location: 'string',
      lockReason: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      roles: ListNodesResponseBodyNodesNodeInfoRoles,
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesResponseBodyNodesNodeInfoUsedResources,
      vSwitchId: 'string',
      version: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    if(this.usedResources && typeof (this.usedResources as any).validate === 'function') {
      (this.usedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $dara.Model {
  nodeInfo?: ListNodesResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesResponseBodyNodesNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfoTotalResources extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. Unit: cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The total number of GPU cards. Unit: cards.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The memory capacity. Unit: GB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfoUsedResources extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores. Unit: cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The total number of GPU cards. Unit: cards.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The memory capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the node was added to the cluster.
   * 
   * @example
   * 2019-09-18T13:24:29.000Z
   */
  addTime?: string;
  /**
   * @remarks
   * The mode in which the node is created. Valid values:
   * 
   * *   manual: The node is manually added.
   * *   autoscale: The node is automatically added.
   * 
   * @example
   * manual
   */
  createMode?: string;
  /**
   * @remarks
   * Indicates whether the node was created by using E-HPC.
   * 
   * @example
   * true
   */
  createdByEhpc?: boolean;
  /**
   * @remarks
   * Indicates whether the subscription node has expired. If the node is a pay-as-you-go node, false is returned.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The time when the subscription instance expires. If the node is a pay-as-you-go node, a null value is returned.
   * 
   * @example
   * 2020-09-18T13:24:29.000Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * compute0
   */
  hostName?: string;
  /**
   * @remarks
   * Indicates whether Hyper-Threading (HT) is enabled.
   * 
   * @example
   * true
   */
  htEnabled?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp13p7vlcb1uihfv****
   */
  id?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_02_64_20G_alibase_20170818****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The private IP address of the node.
   * 
   * @example
   * ``172.168.**.**``
   */
  ipAddress?: string;
  /**
   * @remarks
   * The location where the node is deployed. Valid values:
   * 
   * *   OnPremise: The cluster is deployed on a hybrid cloud.
   * *   PublicCloud: The cluster is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The reason why the node is locked. Valid values:
   * 
   * *   financial: The instance is locked due to overdue payments.
   * *   security: The node is locked for security reasons.
   * *   recycling: The preemptible instance is locked and pending release.
   * *   dedicatedhostfinancial: The ECS instance is locked due to overdue payments of the dedicated host.
   * 
   * By default, an empty string is returned.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The public IP address of the node.
   * 
   * @example
   * ``10.34.**.**``
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The preemption policy of the instance. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the node displayed on the scheduler. The status varies with the scheduler.
   * 
   * @example
   * active
   */
  stateInSched?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   uninit: The node is not initialized.
   * *   init: The node is being initialized.
   * *   ready: The node is ready.
   * *   running: The cluster is running.
   * *   exception: An exception occurred on the node.
   * *   untracking: The node is not added to the cluster.
   * 
   * @example
   * untracking
   */
  status?: string;
  /**
   * @remarks
   * The number of all resources in the cluster.
   */
  totalResources?: ListNodesByQueueResponseBodyNodesNodeInfoTotalResources;
  /**
   * @remarks
   * The usage of the compute nodes in the cluster. For other types of nodes, an empty value is returned.
   */
  usedResources?: ListNodesByQueueResponseBodyNodesNodeInfoUsedResources;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The version of the E-HPC client.
   * 
   * @example
   * 1.0.64
   */
  version?: string;
  /**
   * @remarks
   * The VPC ID of the node.
   * 
   * @example
   * vpc-bp1gnu8br4ay7beb2w****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      createMode: 'CreateMode',
      createdByEhpc: 'CreatedByEhpc',
      expired: 'Expired',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      ipAddress: 'IpAddress',
      location: 'Location',
      lockReason: 'LockReason',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      createMode: 'string',
      createdByEhpc: 'boolean',
      expired: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      ipAddress: 'string',
      location: 'string',
      lockReason: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesByQueueResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesByQueueResponseBodyNodesNodeInfoUsedResources,
      vSwitchId: 'string',
      version: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    if(this.usedResources && typeof (this.usedResources as any).validate === 'function') {
      (this.usedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodes extends $dara.Model {
  nodeInfo?: ListNodesByQueueResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesByQueueResponseBodyNodesNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodesNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * compute0
   */
  hostName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp13p7vlcb1uihfv****
   */
  id?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_02_64_20G_alibase_20170818****
   */
  imageId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   uninit: The node is being installed.
   * *   exception: An exception occurred on the node.
   * *   running: The node is running.
   * *   initing: The node is being initialized.
   * *   releasing: The node is being released.
   * *   untracking: The node is not added to the cluster.
   * *   stopped: The node is stopped.
   * 
   * @example
   * untracking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      id: 'Id',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      id: 'string',
      imageId: 'string',
      instanceType: 'string',
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

export class ListNodesNoPagingResponseBodyNodes extends $dara.Model {
  nodeInfo?: ListNodesNoPagingResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesNoPagingResponseBodyNodesNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute extends $dara.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeId)) {
      $dara.Model.validateArray(this.instanceTypeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin extends $dara.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeId)) {
      $dara.Model.validateArray(this.instanceTypeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager extends $dara.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeId)) {
      $dara.Model.validateArray(this.instanceTypeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles extends $dara.Model {
  /**
   * @remarks
   * The list of recommended ECS instance types for compute nodes.
   */
  compute?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute;
  /**
   * @remarks
   * The list of recommended ECS instance types for logon nodes.
   */
  login?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin;
  /**
   * @remarks
   * The list of recommended ECS instance types for management nodes.
   */
  manager?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute,
      login: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin,
      manager: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager,
    };
  }

  validate() {
    if(this.compute && typeof (this.compute as any).validate === 'function') {
      (this.compute as any).validate();
    }
    if(this.login && typeof (this.login as any).validate === 'function') {
      (this.login as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfo extends $dara.Model {
  /**
   * @remarks
   * Recommended instance types for nodes in an E-HPC cluser.
   */
  roles?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles;
  /**
   * @remarks
   * The ID of the ECS instance series. Valid values:
   * 
   * *   HighCompute: compute-optimized instance families
   * *   HighMem: memory-optimized instance families
   * *   GPU: GPU-accelerated instance families
   * *   All: all instance families
   * 
   * @example
   * All
   */
  seriesId?: string;
  /**
   * @remarks
   * The name of the instance series. Valid values:
   * 
   * *   SeriesHighCompute
   * *   SeriesHighMem
   * *   SeriesGPU
   * *   SeriesAll
   * 
   * @example
   * SeriesAll
   */
  seriesName?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      seriesId: 'SeriesId',
      seriesName: 'SeriesName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles,
      seriesId: 'string',
      seriesName: 'string',
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeries extends $dara.Model {
  seriesInfo?: ListPreferredEcsTypesResponseBodySeriesSeriesInfo[];
  static names(): { [key: string]: string } {
    return {
      seriesInfo: 'SeriesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesInfo: { 'type': 'array', 'itemType': ListPreferredEcsTypesResponseBodySeriesSeriesInfo },
    };
  }

  validate() {
    if(Array.isArray(this.seriesInfo)) {
      $dara.Model.validateArray(this.seriesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType extends $dara.Model {
  instanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance extends $dara.Model {
  /**
   * @remarks
   * The instance type of the preemptible instance.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. The price can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes extends $dara.Model {
  instance?: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfo extends $dara.Model {
  /**
   * @remarks
   * The instance type of the compute nodes.
   */
  computeInstanceType?: ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType;
  /**
   * @remarks
   * The ID of the deployment set to which to deploy the instance. You can call the [DescribeDeploymentSets](https://help.aliyun.com/document_detail/91313.html) operation to query the deployment set ID. Only the deployment sets that use low latency policies are supported.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pzq****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableAutoGrow?: boolean;
  /**
   * @remarks
   * The prefix of the hostname.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The suffix of the hostname.
   * 
   * @example
   * 01
   */
  hostNameSuffix?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The communication mode of the elastic network interface (ENI). Valid values:
   * 
   * *   Standard: The TCP communication mode is used.
   * *   HighPerformance: The Elastic RDMA Interface (ERI) is enabled and the remote direct memory access (RDMA) communication mode is used.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * workq
   */
  queueName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the queue belongs.
   * 
   * @example
   * rg-acfmxp7uc24****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the preemptible instance.
   */
  spotInstanceTypes?: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes;
  /**
   * @remarks
   * The preemption policy of the compute nodes. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance for which you specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The type of queue. Valid values:
   * 
   * *   Execution: Queues in which jobs can be executed.
   * *   Router: Queues in which jobs cannot be executed. The received jobs in the queues must be forwarded to the bound Execution queues for execution.
   * 
   * @example
   * Execution
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to use scaling groups of Auto Scaling.
   * 
   * @example
   * false
   */
  useESS?: boolean;
  static names(): { [key: string]: string } {
    return {
      computeInstanceType: 'ComputeInstanceType',
      deploymentSetId: 'DeploymentSetId',
      enableAutoGrow: 'EnableAutoGrow',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
      spotInstanceTypes: 'SpotInstanceTypes',
      spotStrategy: 'SpotStrategy',
      type: 'Type',
      useESS: 'UseESS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeInstanceType: ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType,
      deploymentSetId: 'string',
      enableAutoGrow: 'boolean',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      networkInterfaceTrafficMode: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
      spotInstanceTypes: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes,
      spotStrategy: 'string',
      type: 'string',
      useESS: 'boolean',
    };
  }

  validate() {
    if(this.computeInstanceType && typeof (this.computeInstanceType as any).validate === 'function') {
      (this.computeInstanceType as any).validate();
    }
    if(this.spotInstanceTypes && typeof (this.spotInstanceTypes as any).validate === 'function') {
      (this.spotInstanceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueues extends $dara.Model {
  queueInfo?: ListQueuesResponseBodyQueuesQueueInfo[];
  static names(): { [key: string]: string } {
    return {
      queueInfo: 'QueueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueInfo: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueuesQueueInfo },
    };
  }

  validate() {
    if(Array.isArray(this.queueInfo)) {
      $dara.Model.validateArray(this.queueInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegionsRegionInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China East 1 (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $dara.Model {
  regionInfo?: ListRegionsResponseBodyRegionsRegionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionInfo: 'RegionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionInfo: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionsRegionInfo },
    };
  }

  validate() {
    if(Array.isArray(this.regionInfo)) {
      $dara.Model.validateArray(this.regionInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  securityGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroup)) {
      $dara.Model.validateArray(this.securityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The time at which the serverless job ended.
   * 
   * @example
   * 1682128871
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the job is an array job. Valid values:
   * 
   * *   True: yes
   * *   False: no
   * 
   * @example
   * True
   */
  isArrayJob?: boolean;
  /**
   * @remarks
   * The ID of the serverless job or the subtask (array job).
   * 
   * @example
   * 5
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the serverless job.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The scheduling priority of the serverless job. Valid values are 0 to 999. A greater value indicates a higher priority.
   * 
   * @example
   * 9
   */
  priority?: string;
  /**
   * @remarks
   * The name of the queue in which the serverless job is run.
   * 
   * @example
   * comp
   */
  queue?: string;
  /**
   * @remarks
   * The time at which the serverless job started.
   * 
   * @example
   * 1647427667
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the serverless job. Valid values:
   * 
   * *   Pending
   * *   Initing
   * *   Running
   * *   Succeeded
   * *   Canceled
   * *   Failed
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The time at which the serverless job is submitted.
   * 
   * @example
   * 1647423718
   */
  submitTime?: string;
  /**
   * @remarks
   * The username that is used to run the serverless job.
   * 
   * @example
   * testuser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isArrayJob: 'IsArrayJob',
      jobId: 'JobId',
      jobName: 'JobName',
      priority: 'Priority',
      queue: 'Queue',
      startTime: 'StartTime',
      state: 'State',
      submitTime: 'SubmitTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      isArrayJob: 'boolean',
      jobId: 'string',
      jobName: 'string',
      priority: 'string',
      queue: 'string',
      startTime: 'string',
      state: 'string',
      submitTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * cudnnt
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the software is required. Valid values:
   * 
   * *   false: optional
   * *   true: required
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * The tag of the software.
   * 
   * @example
   * CUDNN_9.0
   */
  tag?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 9.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
      tag: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications extends $dara.Model {
  applicationInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo },
    };
  }

  validate() {
    if(Array.isArray(this.applicationInfo)) {
      $dara.Model.validateArray(this.applicationInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfo extends $dara.Model {
  /**
   * @remarks
   * The service type of the domain account. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The version of the domain account service.
   * 
   * @example
   * 2.31
   */
  accountVersion?: string;
  /**
   * @remarks
   * The list of the software in the cluster.
   */
  applications?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications;
  /**
   * @remarks
   * The version of the E-HPC client.
   * 
   * @example
   * 1.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The image tag of the cluster.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   pbs19
   * *   slurm
   * *   slurm19
   * *   slurm20
   * *   opengridscheduler
   * *   deadline
   * *   gridengine
   * *   cube
   * *   custom
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  /**
   * @remarks
   * The version of the scheduler.
   * 
   * @example
   * 18.1.1
   */
  schedulerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accountVersion: 'AccountVersion',
      applications: 'Applications',
      ehpcVersion: 'EhpcVersion',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
      schedulerVersion: 'SchedulerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accountVersion: 'string',
      applications: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications,
      ehpcVersion: 'string',
      osTag: 'string',
      schedulerType: 'string',
      schedulerVersion: 'string',
    };
  }

  validate() {
    if(this.applications && typeof (this.applications as any).validate === 'function') {
      (this.applications as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwares extends $dara.Model {
  softwareInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfo[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfo },
    };
  }

  validate() {
    if(Array.isArray(this.softwareInfo)) {
      $dara.Model.validateArray(this.softwareInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The resource ID. Set the value to the ID of the cluster.
   * 
   * @example
   * ehpc-hz-xxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource whose tags are queried. Set the value to cluster, which indicates E-HPC clusters.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The current step of the task.
   * 
   * @example
   * 16
   */
  currentStep?: number;
  /**
   * @remarks
   * The error messages returned for the task.
   * 
   * You can view the error messages and the corresponding solutions in the [Error Center](https://error-center.alibabacloud.com/status/product/EHPC).
   * 
   * @example
   * []
   */
  errors?: string;
  /**
   * @remarks
   * The request parameters of the task. The value is a JSON string.
   * 
   * @example
   * {\\"requestId\\":\\"0A6CA33E-BFBF-4F92-BDAE-4E8860DA****\\",\\"uid\\":\\"160998252992****\\",\\"bid\\":\\"268**\\",\\"clusterId\\":\\"ehpc-hz-ysQtcZ****\\"}
   */
  request?: string;
  /**
   * @remarks
   * The result of the task. Valid values:
   * 
   * *   If you set TaskType to CreateCluster or AddComputes, the value of this parameter is in the `{\\"Instances\\":[]}` format. The value indicates the information about the nodes that are added to the cluster.
   * *   If you set TaskType to a value other than CreateCluster and AddComputes, the value of this parameter is in the `{}` format.
   * 
   * @example
   * {\\"Instances\\":[{\\"InstanceId\\":\\"i-bp1inb1j2xz8pnoi****\\",\\"Ip\\":\\"192.168.*.*\\",\\"Hostname\\":\\"login0\\",\\"role\\":\\"login\\"}]}
   */
  result?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   Processing: The task is running.
   * *   Success: The task succeeded.
   * *   Failed: The task failed.
   * *   PartialFail: The task partially failed.
   * 
   * @example
   * Processing
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   CreateCluster: creates a cluster by calling the [CreateCluster](https://help.aliyun.com/document_detail/87100.html) operation.
   * *   StartCluster: starts a cluster by calling the [StartCluster](https://help.aliyun.com/document_detail/200345.html) operation.
   * *   StopCluster: stops a cluster by calling the [StopCluster](https://help.aliyun.com/document_detail/200346.html) operation.
   * *   DeleteCluster: releases a cluster by calling the [DeleteCluster](https://help.aliyun.com/document_detail/87110.html) operation.
   * *   AddComputes: adds nodes to a cluster by calling the [AddNodes](https://help.aliyun.com/document_detail/87147.html) operation.
   * *   StartComputes: starts nodes by calling the [StartNodes](https://help.aliyun.com/document_detail/87159.html) operation.
   * *   ResetCompute: resets nodes by calling the [ResetNodes](https://help.aliyun.com/document_detail/87158.html) operation.
   * *   StopComputes: stops nodes by calling the [StopNodes](https://help.aliyun.com/document_detail/87160.html) operation.
   * *   DeleteComputes: deletes nodes by calling the [DeleteNodes](https://help.aliyun.com/document_detail/87155.html) operation.
   * 
   * @example
   * StopCluster
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of steps of the task.
   * 
   * @example
   * 35
   */
  totalSteps?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentStep: 'CurrentStep',
      errors: 'Errors',
      request: 'Request',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      totalSteps: 'TotalSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentStep: 'number',
      errors: 'string',
      request: 'string',
      result: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      totalSteps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpgradeClientsResponseBodyClientRecords extends $dara.Model {
  /**
   * @remarks
   * The version of ehpcutil after the update.
   * 
   * @example
   * 1.2.21
   */
  newVersion?: string;
  /**
   * @remarks
   * The version of ehpcutil before the update.
   * 
   * @example
   * 1.2.16
   */
  oldVersion?: string;
  /**
   * @remarks
   * The user ID (UID) whose ehpcutil is updated.
   * 
   * @example
   * 129******84
   */
  subUid?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-08-26T06:26:57.000Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      newVersion: 'NewVersion',
      oldVersion: 'OldVersion',
      subUid: 'SubUid',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newVersion: 'string',
      oldVersion: 'string',
      subUid: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2018-07-18T17:46:47
   */
  addTime?: string;
  /**
   * @remarks
   * The name of the permission group. Valid values:
   * 
   * *   users: an ordinary permission group. It is applicable to ordinary users that need only to submit and debug jobs.
   * *   wheel: a sudo permission group. It is applicable to the administrator who needs to manage the cluster. In addition to submitting and debugging jobs, users who have sudo permissions can run sudo commands to install software and restart nodes.
   * 
   * @example
   * wheel
   */
  group?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * user1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $dara.Model {
  userInfo?: ListUsersResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserInfo },
    };
  }

  validate() {
    if(Array.isArray(this.userInfo)) {
      $dara.Model.validateArray(this.userInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersAsyncResponseBodyUsersUserInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2022-09-28T09:05:26.000Z
   */
  addTime?: string;
  /**
   * @remarks
   * The user groups.
   * 
   * @example
   * wheel
   */
  group?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 10
   */
  groupId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * testuser
   */
  name?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1000
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      groupId: 'GroupId',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      groupId: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersAsyncResponseBodyUsers extends $dara.Model {
  userInfo?: ListUsersAsyncResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': ListUsersAsyncResponseBodyUsersUserInfo },
    };
  }

  validate() {
    if(Array.isArray(this.userInfo)) {
      $dara.Model.validateArray(this.userInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo extends $dara.Model {
  /**
   * @remarks
   * The queue to which the job belongs.
   * 
   * @example
   * all.q
   */
  jobQueue?: string;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /testopt
   */
  localDirectory?: string;
  /**
   * @remarks
   * The location where the cluster is deployed. Valid values:
   * 
   * *   OnPremise: The node is deployed on a hybrid cloud.
   * *   PublicCloud: The cluster is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The remote directory on which the file system is mounted.
   * 
   * @example
   * /test
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The type of the node on which the file system is mounted. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * @example
   * Compute
   */
  role?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 86y3****
   */
  volumeId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * @example
   * 86y3****-rgd51.cn-hangzhou.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The type of the storage protocol. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the additional file system. Only NAS is supported.
   * 
   * @example
   * NAS
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      remoteDirectory: 'RemoteDirectory',
      role: 'Role',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      remoteDirectory: 'string',
      role: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes extends $dara.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.volumeInfo)) {
      $dara.Model.validateArray(this.volumeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfo extends $dara.Model {
  /**
   * @remarks
   * The information of additional file systems mounted on E-HPC clusters.
   */
  additionalVolumes?: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * cluster1
   */
  clusterName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remote directory on which the file system is mounted.
   * 
   * @example
   * /test1
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * bc8a****
   */
  volumeId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * @example
   * bc8a****-rgd51.cn-hangzhou.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The type of the storage protocol. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the file system that is mounted on the cluster. Only NAS is supported.
   * 
   * @example
   * NAS
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVolumes: 'AdditionalVolumes',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
      remoteDirectory: 'RemoteDirectory',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVolumes: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes,
      clusterId: 'string',
      clusterName: 'string',
      regionId: 'string',
      remoteDirectory: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  validate() {
    if(this.additionalVolumes && typeof (this.additionalVolumes as any).validate === 'function') {
      (this.additionalVolumes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumes extends $dara.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.volumeInfo)) {
      $dara.Model.validateArray(this.volumeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesRequestWinAdPar extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Windows AD server.
   * 
   * @example
   * ehpcad.com
   */
  adDc?: string;
  /**
   * @remarks
   * The IP address of the Windows AD server.
   * 
   * @example
   * 192.168.1.2
   */
  adIp?: string;
  /**
   * @remarks
   * The Windows AD server administrator.
   * 
   * @example
   * administrator
   */
  adUser?: string;
  /**
   * @remarks
   * The administrator password of the Windows AD server.
   * 
   * @example
   * xxxxxxx
   */
  adUserPasswd?: string;
  /**
   * @remarks
   * The home directory of the Linux server.
   * 
   * @example
   * /home
   */
  fallbackHomeDir?: string;
  static names(): { [key: string]: string } {
    return {
      adDc: 'AdDc',
      adIp: 'AdIp',
      adUser: 'AdUser',
      adUserPasswd: 'AdUserPasswd',
      fallbackHomeDir: 'FallbackHomeDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDc: 'string',
      adIp: 'string',
      adUser: 'string',
      adUserPasswd: 'string',
      fallbackHomeDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequestUser extends $dara.Model {
  /**
   * @remarks
   * The user group to be changed. Valid values:
   * 
   * *   users: ordinary permissions, which are suitable for ordinary users that need only to submit and debug jobs.
   * *   wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The username.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the usernames in the cluster.
   * 
   * @example
   * user11
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequestUser extends $dara.Model {
  /**
   * @remarks
   * The username of the user whose password you want to change.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the usernames in the cluster.
   * 
   * @example
   * user1
   */
  name?: string;
  /**
   * @remarks
   * The new password for the user. The password must be 8 to 30 characters in length and contain at least three of the following character types:
   * 
   * *   Uppercase letter
   * *   Lowercase letter
   * *   Digit
   * *   Special character: `()~!@#$%^&*-_+=|{}[]:;\\"/<>,.?/`
   * 
   * >  We recommend that you use HTTPS to call this operation to avoid password leaks.
   * 
   * @example
   * 1@a****
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBodyServicePackServicePackInfo extends $dara.Model {
  /**
   * @example
   * 2000
   */
  capacity?: number;
  /**
   * @example
   * 1612705988
   */
  endTime?: number;
  /**
   * @example
   * EHPCBAG-cn-78v12vbme0****
   */
  instanceName?: string;
  /**
   * @example
   * 1610027588
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      endTime: 'number',
      instanceName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBodyServicePack extends $dara.Model {
  servicePackInfo?: QueryServicePackAndPriceResponseBodyServicePackServicePackInfo[];
  static names(): { [key: string]: string } {
    return {
      servicePackInfo: 'ServicePackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicePackInfo: { 'type': 'array', 'itemType': QueryServicePackAndPriceResponseBodyServicePackServicePackInfo },
    };
  }

  validate() {
    if(Array.isArray(this.servicePackInfo)) {
      $dara.Model.validateArray(this.servicePackInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute node that you want to reset. Valid values of N: 1 to 100
   * 
   * You can call the [ListNodes](https://help.aliyun.com/document_detail/87161.html) operation to query the IDs of the compute nodes.
   * 
   * @example
   * i-bp13p7vlcb1uihfv****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueuesDataDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   * *   cloud: basic disk.
   * 
   * Default value: cloud_efficiency.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * cloud_efficiency
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * Specifies whether the data disk is released when the node is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * true
   */
  dataDiskDeleteWithInstance?: boolean;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * false
   */
  dataDiskEncrypted?: boolean;
  /**
   * @remarks
   * The Key Management Service (KMS) key ID of the data disk.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  dataDiskKMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD used as the data disk. The parameter takes effect only when the Queues.N.DataDisks.N.DataDiskCategory parameter is set to cloud_essd. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * PL1
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * Valid values of N: 0 to 16.
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueuesInstanceTypes extends $dara.Model {
  /**
   * @remarks
   * The instance type of the compute nodes that are automatically added to the queue.
   * 
   * You can specify the specification for 1 to 8 nodes.
   * 
   * The instance types of N compute nodes in the queue can be set at the same time when auto scaling is performed in the queue. Valid values of N: 0 to 500.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Valid values: 0 to 1. A value of 0 means that no protection period is specified. Default value: 1.
   * 
   * @example
   * 0
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance. The value can only be Terminate, which indicates that the instance is released.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes that are automatically added to the queue. The value can be accurate to three decimal places. The parameter takes effect only when `Queues.N.InstanceTypes.N.SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * You can specify the maximum hourly price for 1 to 8 compute nodes.
   * 
   * The maximum hourly prices of N compute nodes in the queue can be set at the same time when auto scaling is performed in the queue. Valid values of N: 0 to 500.
   * 
   * @example
   * 0.660
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy for the compute node that is automatically added to the queue. Valid values:
   * 
   * *   NoSpot: The compute node is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The compute node is created as a preemptible instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute node is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * You can specify the preemption policy for 1 to 8 compute nodes.
   * 
   * The preemption policies of N compute nodes in the queue can be set at the same time when auto scaling is performed in the queue. Valid values of N: 0 to 500.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The vSwitch ID of the compute nodes that are automatically added to the queue.
   * 
   * You can specify 1 to 8 IDs.
   * 
   * The vSwitch IDs of N compute nodes in the queue can be set at the same time when auto scaling is performed in the queue. Valid values of N: 0 to 500.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone that compute nodes automatically added to the queue belong.
   * 
   * You can specify 1 to 8 IDs.
   * 
   * The zone IDs of N compute nodes in the queue can be set at the same time when auto scaling is performed in the queue. Valid values of N: 0 to 500.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueues extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically specify the minimum number of compute nodes that can be added in each round of scale-out. If you set this parameter to true, the minimum number of nodes for each scale-out is equal to the number of nodes required by the job. The maximum number is 99.
   * 
   * @example
   * false
   */
  autoMinNodesPerCycle?: boolean;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisks?: SetAutoScaleConfigRequestQueuesDataDisks[];
  /**
   * @remarks
   * Specifies whether the queue enables auto scale-out. Valid values:
   * 
   * *   true: enables auto scale-out.
   * *   false: disables auto scale-out.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutoGrow?: boolean;
  /**
   * @remarks
   * Specifies whether the queue enables auto scale-in. Valid values:
   * 
   * *   true: enables auto scale-in.
   * *   false: disables auto scale-in.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutoShrink?: boolean;
  /**
   * @remarks
   * The hostname prefix of the host that is used to perform scale-out for the queue. You can manage compute nodes that have a specified hostname prefix.
   * 
   * Valid values of N: 1 to 8.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the host that is used to perform scale-out for the queue. You can manage nodes that have a specified hostname suffix.
   * 
   * Valid values of N: 1 to 8.
   * 
   * @example
   * 000
   */
  hostNameSuffix?: string;
  /**
   * @remarks
   * The instance type of the compute nodes that are automatically added to the queue. Valid values of N: 1 to 8.
   * 
   * @example
   * ecs.n1.medium
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance types of the nodes in the queue.
   */
  instanceTypes?: SetAutoScaleConfigRequestQueuesInstanceTypes[];
  /**
   * @remarks
   * The maximum number of compute nodes that can be added to the queue. Valid values: 0 to 500.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: 100.
   * 
   * @example
   * 30
   */
  maxNodesInQueue?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that can be added in each round of scale-out. Valid values: 0 to 99.
   * 
   * Default value: 0.
   * 
   * @example
   * 20
   */
  maxNodesPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that can be removed from the queue. Valid values: 0 to 50.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  minNodesInQueue?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that can be added in each round of scale-out. Valid values: 1 to 99
   * 
   * Default value: 1.
   * 
   * If the number of compute nodes that you want to add in a round is less than the value of this property, the system automatically changes the value of this property to the number of compute nodes that you want to add in a round. This helps ensure that compute nodes can be added as expected.
   * 
   * >  The configuration takes effect only for the minimum compute nodes that can be added in the current round.
   * 
   * @example
   * 5
   */
  minNodesPerCycle?: number;
  /**
   * @remarks
   * The image ID of the queue where the scale-out is performed. Valid values of N: 1 to 8.
   * 
   * > 
   * 
   * *   If you set both `Queues.N.QueueImageId` and `ImageId`, `Queues.N.QueueImageId` prevails.
   * 
   * *   If you set `Queues.N.QueueImageId` or `ImageId`, the parameter that you set takes effect.
   * *   If you leave both `Queues.N.QueueImageId` and `ImageId` empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
   * 
   * @example
   * centos_7_03_64_20G_alibase_201708****
   */
  queueImageId?: string;
  /**
   * @remarks
   * The name of the queue. You can specify 1 to 8 names.
   * 
   * @example
   * cluster1
   */
  queueName?: string;
  /**
   * @remarks
   * Specifies whether the instances are unordered. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  If you set this parameter to true, the system selects instance types in descending order of the number of instances in stock during auto scaling.
   * 
   * @example
   * false
   */
  sortedByInventory?: boolean;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes that are automatically added to the queue. The value can be accurate to three decimal places. The parameter takes effect only when `Queues.N.SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * Valid values of N: 1 to 8.
   * 
   * @example
   * 0.662
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the compute node that is automatically added to the queue. Valid values of N: 1 to 8.
   * 
   * Valid values:
   * 
   * *   NoSpot: The compute node is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The compute node is created as a preemptible instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute node is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The category of the system disk specified for the compute nodes that are added to the queue. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: enhanced SSD (ESSD).
   * *   cloud: basic disk. Disks of this type are retired.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: cloud_efficiency.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system disk specified for the compute nodes that are added to the queue. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL1
   */
  systemDiskLevel?: string;
  /**
   * @remarks
   * The size of the system disk specified for the compute nodes that are added to the queue. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Valid values of N: 1 to 8.
   * 
   * Default value: 40.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoMinNodesPerCycle: 'AutoMinNodesPerCycle',
      dataDisks: 'DataDisks',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      instanceType: 'InstanceType',
      instanceTypes: 'InstanceTypes',
      maxNodesInQueue: 'MaxNodesInQueue',
      maxNodesPerCycle: 'MaxNodesPerCycle',
      minNodesInQueue: 'MinNodesInQueue',
      minNodesPerCycle: 'MinNodesPerCycle',
      queueImageId: 'QueueImageId',
      queueName: 'QueueName',
      sortedByInventory: 'SortedByInventory',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMinNodesPerCycle: 'boolean',
      dataDisks: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueuesDataDisks },
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      instanceType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueuesInstanceTypes },
      maxNodesInQueue: 'number',
      maxNodesPerCycle: 'number',
      minNodesInQueue: 'number',
      minNodesPerCycle: 'number',
      queueImageId: 'string',
      queueName: 'string',
      sortedByInventory: 'boolean',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
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

export class SetPostScriptsRequestPostInstallScripts extends $dara.Model {
  /**
   * @remarks
   * The parameter that is used to run the post-processing script.
   * 
   * @example
   * -h
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the post-processing script.
   * 
   * @example
   * https://bucket.oss-cn-shanghai.aliyuncs.com/postscript_examples.sh
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueRequestNode extends $dara.Model {
  /**
   * @remarks
   * The name of the compute node that you want to move. Valid values of N: 1 to 100.
   * 
   * You can call the [ListNodes](https://help.aliyun.com/document_detail/87161.html) operation to query the names of the compute nodes.
   * 
   * @example
   * compute1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfoAclLimit extends $dara.Model {
  /**
   * @remarks
   * The user that can use the queue. Separate multiple users with commas (`,`).
   * 
   * If you specify users, you must specify the PbsInfo.N.AclLimit.N.Queue parameter.
   * 
   * @example
   * user1,user2
   */
  aclUsers?: string;
  /**
   * @remarks
   * AclLimit specifies the queue that has limits when it is used. Valid values of N: 0 to 100.
   * 
   * If you set `PbsInfo.N.AclLimit.N.Queue` to `workq` and `PbsInfo.N.AclLimit.N.AclUsers` to `user1,user2`, workq can be used only by user1 and user2.
   * 
   * @example
   * workq
   */
  queue?: string;
  static names(): { [key: string]: string } {
    return {
      aclUsers: 'AclUsers',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUsers: 'string',
      queue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfoResourceLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum number of vCPUs that can be used for nodes in a queue.
   * 
   * @example
   * 2
   */
  cpus?: number;
  /**
   * @remarks
   * The maximum number of jobs that can be submitted to the cluster. If the total number of running jobs and queuing jobs exceeds the value, no more jobs can be submitted.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * The maximum memory resources that can be used in a queue. Units:
   * 
   * *   gb
   * *   mb
   * *   kb
   * 
   * @example
   * 2gb
   */
  mem?: string;
  /**
   * @remarks
   * The maximum number of nodes that can be used in a queue.
   * 
   * @example
   * 2
   */
  nodes?: number;
  /**
   * @remarks
   * PbsInfo specifies the number of PBS schedulers that can be configured in the cluster. Valid values of N: 0 to 100.
   * 
   * ResourceLimit specifies the maximum number of queue resources that can be used. Valid values of N: 0 to 100.
   * 
   * Queue specifies the name of the queue that is used to run jobs.
   * 
   * If one of the User, Cpus, Nodes, and Mem parameters is set in ResourceLimit, you must specify the Queue parameter.
   * 
   * @example
   * workq
   */
  queue?: string;
  /**
   * @remarks
   * The name of the user that runs jobs.
   * 
   * @example
   * user1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      cpus: 'Cpus',
      maxJobs: 'MaxJobs',
      mem: 'Mem',
      nodes: 'Nodes',
      queue: 'Queue',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpus: 'number',
      maxJobs: 'number',
      mem: 'string',
      nodes: 'number',
      queue: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfo extends $dara.Model {
  /**
   * @remarks
   * The information about limits on the queue.
   */
  aclLimit?: SetSchedulerInfoRequestPbsInfoAclLimit[];
  /**
   * @remarks
   * The retention period of jobs. After the retention period is exceeded, job data is deleted. Unit: days.\\
   * Valid values: 1 to 30.\\
   * Default value: 14.
   * 
   * @example
   * 14
   */
  jobHistoryDuration?: number;
  /**
   * @remarks
   * The information about the nodes that are used by cluster users.
   */
  resourceLimit?: SetSchedulerInfoRequestPbsInfoResourceLimit[];
  /**
   * @remarks
   * PbsInfo specifies the number of PBS schedulers that can be configured in the cluster. Valid values of N: 0 to 100.
   * 
   * SchedInterval specifies the scheduling period. Unit: seconds.
   * 
   * A scheduling period is the interval between two consecutive running jobs. If you set SchedInterval to 60, another job can be run 60 seconds after a job starts running.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  schedInterval?: number;
  /**
   * @remarks
   * The maximum number of jobs that can be scheduled in the cluster. If the total number of running jobs and queuing jobs exceeds the value, no more jobs can be submitted. Default value: 20000.
   * 
   * @example
   * 20000
   */
  schedMaxJobs?: number;
  /**
   * @remarks
   * The maximum number of queuing jobs that can be scheduled in the cluster. If the number of queuing jobs exceeds the value, no more jobs can be submitted. Default value: 10000.
   * 
   * @example
   * 10000
   */
  schedMaxQueuedJobs?: number;
  static names(): { [key: string]: string } {
    return {
      aclLimit: 'AclLimit',
      jobHistoryDuration: 'JobHistoryDuration',
      resourceLimit: 'ResourceLimit',
      schedInterval: 'SchedInterval',
      schedMaxJobs: 'SchedMaxJobs',
      schedMaxQueuedJobs: 'SchedMaxQueuedJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclLimit: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfoAclLimit },
      jobHistoryDuration: 'number',
      resourceLimit: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfoResourceLimit },
      schedInterval: 'number',
      schedMaxJobs: 'number',
      schedMaxQueuedJobs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aclLimit)) {
      $dara.Model.validateArray(this.aclLimit);
    }
    if(Array.isArray(this.resourceLimit)) {
      $dara.Model.validateArray(this.resourceLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestScheduler extends $dara.Model {
  /**
   * @remarks
   * The name of the scheduler. Valid values:
   * 
   * *   pbs
   * *   pbs19
   * *   slurm
   * *   slurm19
   * *   slurm20
   * 
   * >  If you set Scheduler.N.SchedName to pbs or pbs19, you must specify at least one of the PbsInfo.N.SchedInterval, PbsInfo.N.JobHistoryDuration, PbsInfo.N.ResourceLimit, and PbsInfo.N.AclLimit parameters. If you set Scheduler.N.SchedName to slurm, slurm19, or slurm20, you must specify at least one of the SlurmInfo.N.SchedInterval and SlurmInfo.N.BackfillInterval parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * pbs
   */
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestSlurmInfo extends $dara.Model {
  /**
   * @remarks
   * The backfill scheduling period. Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  backfillInterval?: number;
  /**
   * @remarks
   * SlurmInfo specifies the number of Slurm schedulers that can be configured in the cluster. Valid values of N: 0 to 100.
   * 
   * SchedInterval specifies the scheduling period. Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  schedInterval?: number;
  static names(): { [key: string]: string } {
    return {
      backfillInterval: 'BackfillInterval',
      schedInterval: 'SchedInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backfillInterval: 'number',
      schedInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the Nth node. Valid values of N: 1 to 100.
   * 
   * Make sure that the node is in the Stopped state. You can call the [ListNodes](https://help.aliyun.com/document_detail/87161.html) operation to query the status of the node.
   * 
   * @example
   * i-bp13p7vlcb1uihfv****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesRequestInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the Nth node that you want to stop. Valid values of N: 1 to 100
   * 
   * You can call the [ListNodes](https://help.aliyun.com/document_detail/87161.html) operation to query the IDs of the compute nodes.
   * 
   * @example
   * i-bp13p7vlcb1uihf****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobRequestJobRetry extends $dara.Model {
  /**
   * @remarks
   * The number of retries for the job. Valid values: 1 to 10. You can only retry jobs that are run on the PBS clusters.
   * 
   * >  If this parameter is left empty, the JobRetry.Priority and JobRetry.OnExitCode parameters do not take effect.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The retry condition of the job. If the exit code is the value of the parameter, the job retry is triggered.
   * 
   * >  If this parameter is left empty, the job retry is triggered when the exit code is not 0.
   * 
   * @example
   * 1
   */
  onExitCode?: number;
  /**
   * @remarks
   * The priority of the job retry. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * >  If this parameter is left empty, the priority of the job retry is min {Priority of the original job +1, 9}.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      onExitCode: 'OnExitCode',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      onExitCode: 'number',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitServerlessJobRequestArrayProperties extends $dara.Model {
  /**
   * @remarks
   * The end value of the array job index. Valid values: 0 to 4999. The value must be greater than or equal to the value of IndexStart.
   * 
   * @example
   * 5
   */
  indexEnd?: number;
  /**
   * @remarks
   * The starting value of the array job index. Valid values: 0 to 4999.
   * 
   * @example
   * 1
   */
  indexStart?: number;
  /**
   * @remarks
   * The interval of the array job index.
   * 
   * >  If the array job property is IndexStart=1,IndexEnd=5, and IndexStep=2, the array job contains three subtasks. The values of the subtask indexes are 1,3, and 5.
   * 
   * @example
   * 2
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

export class SubmitServerlessJobRequestContainerEnvironmentVar extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable for the container. The name can be 1 to 128 characters in length and can contain letters, digits, and underscores (_). The name cannot start with a digit. Specify the name in the [0-9a-zA-Z] format.
   * 
   * @example
   * PATH
   */
  key?: string;
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

export class SubmitServerlessJobRequestContainerVolumeMount extends $dara.Model {
  /**
   * @remarks
   * The driver type when you use the FlexVolume plug-in to mount a volume. Valid values:
   * 
   * *   alicloud/nas: a NAS driver.
   * *   alicloud/oss: an OSS driver.
   * 
   * @example
   * alicloud/oss
   */
  flexVolumeDriver?: string;
  /**
   * @remarks
   * The options of the FlexVolume object. Each option is a key-value pair in a JSON string.
   * 
   * @example
   * {"bucket":"hpctest","url": "oss-cn-hangzhou-internal.aliyuncs.com
   * ","path":"/data","ramRole":"AliyunECSInstanceForEHPCRole"}
   */
  flexVolumeOptions?: string;
  /**
   * @remarks
   * The directory to which the volume is mounted.
   * 
   * >  The data stored in this directory is overwritten by the data on the volume. Exercise caution when you specify this parameter.
   * 
   * @example
   * /data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeOptions: 'FlexVolumeOptions',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flexVolumeDriver: 'string',
      flexVolumeOptions: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitServerlessJobRequestContainer extends $dara.Model {
  /**
   * @remarks
   * The arguments of the container startup command. You can specify up to 10 arguments.
   */
  arg?: string[];
  /**
   * @remarks
   * The container startup commands.
   */
  command?: string[];
  /**
   * @remarks
   * The value of the environment variable for the container.
   */
  environmentVar?: SubmitServerlessJobRequestContainerEnvironmentVar[];
  /**
   * @remarks
   * The number of GPUs used by the container.
   * 
   * @example
   * 1
   */
  gpu?: number;
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
   * The data volumes that are mounted to the container.
   */
  volumeMount?: SubmitServerlessJobRequestContainerVolumeMount[];
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
      arg: 'Arg',
      command: 'Command',
      environmentVar: 'EnvironmentVar',
      gpu: 'Gpu',
      image: 'Image',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      environmentVar: { 'type': 'array', 'itemType': SubmitServerlessJobRequestContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      volumeMount: { 'type': 'array', 'itemType': SubmitServerlessJobRequestContainerVolumeMount },
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
    if(Array.isArray(this.environmentVar)) {
      $dara.Model.validateArray(this.environmentVar);
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

export class SubmitServerlessJobRequestDependsOn extends $dara.Model {
  /**
   * @remarks
   * The ID of the dependent job.
   * 
   * @example
   * 10
   */
  jobId?: string;
  /**
   * @remarks
   * The dependency type. Valid values:
   * 
   * *   AfterSucceeded: **All subtasks** of the dependent job or array job succeed. The exit code is 0.
   * *   AfterFailed: **All subtasks** of the dependent job or array job fail. The exit code is not 0.
   * *   AfterAny: The dependent job completes (succeeds or fails).
   * *   AfterCorresponding: The subtask corresponding to the dependent array job succeeds. The exit code is 0.
   * 
   * Default value: AfterSucceeded.
   * 
   * @example
   * AfterAny
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

export class SubmitServerlessJobRequestRetryStrategyEvaluateOnExit extends $dara.Model {
  /**
   * @remarks
   * The job action. Valid values:
   * 
   * *   Retry: The job starts a retry when a specific exit code is hit.
   * *   Exit: The job exits when a specific exit code is hit.
   * 
   * @example
   * Retry
   */
  action?: string;
  /**
   * @remarks
   * The job exit code, which is used together with Action to form a job retry rule. Valid values: 0 to 255.
   * 
   * @example
   * 10
   */
  onExitCode?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      onExitCode: 'OnExitCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      onExitCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitServerlessJobRequestRetryStrategy extends $dara.Model {
  /**
   * @remarks
   * The number of retries for the serverless job. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  attempts?: number;
  /**
   * @remarks
   * The retry rules for the serverless job. You can specify up to 10 rules.
   */
  evaluateOnExit?: SubmitServerlessJobRequestRetryStrategyEvaluateOnExit[];
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      evaluateOnExit: 'EvaluateOnExit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      evaluateOnExit: { 'type': 'array', 'itemType': SubmitServerlessJobRequestRetryStrategyEvaluateOnExit },
    };
  }

  validate() {
    if(Array.isArray(this.evaluateOnExit)) {
      $dara.Model.validateArray(this.evaluateOnExit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value cannot be an empty string. It can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
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

export class UpdateClusterVolumesRequestAdditionalVolumesRoles extends $dara.Model {
  /**
   * @remarks
   * The type of the node to which the file system is mounted. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * @example
   * ["Compute"]
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequestAdditionalVolumes extends $dara.Model {
  /**
   * @remarks
   * The queue name of the file system to be mounted.
   * 
   * @example
   * work
   */
  jobQueue?: string;
  /**
   * @remarks
   * The on-premises mount directory of the file system to be mounted.
   * 
   * @example
   * /ff
   */
  localDirectory?: string;
  /**
   * @remarks
   * The storage location of the file system to be mounted. Valid values:
   * 
   * *   OnPremise: The file system is stored in a hybrid cloud.
   * *   PublicCloud: The file system cluster is stored in a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The remote directory to which the file system is mounted.
   * 
   * @example
   * /test
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The array of the nodes to which the file system is mounted.
   */
  roles?: UpdateClusterVolumesRequestAdditionalVolumesRoles[];
  /**
   * @remarks
   * The ID of the file system to be mounted.
   * 
   * @example
   * extreme-00b88****
   */
  volumeId?: string;
  /**
   * @remarks
   * The mount option of the file system to be mounted.
   * 
   * @example
   * -t nfs -o vers=3,nolock,noresvport
   */
  volumeMountOption?: string;
  /**
   * @remarks
   * The endpoint of the mount target of the file system.
   * 
   * @example
   * 0088****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The protocol type of the file system to be mounted. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the file system to be mounted. Set the value to NAS.
   * 
   * @example
   * NAS
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      remoteDirectory: 'RemoteDirectory',
      roles: 'Roles',
      volumeId: 'VolumeId',
      volumeMountOption: 'VolumeMountOption',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      remoteDirectory: 'string',
      roles: { 'type': 'array', 'itemType': UpdateClusterVolumesRequestAdditionalVolumesRoles },
      volumeId: 'string',
      volumeMountOption: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
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

export class AddExistedNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the image that is specified for the compute nodes. The image must meet the following requirements:
   * 
   * *   The operating system that is specified for the image must be the same as that of the existing cluster nodes. For example, if the operating system of the cluster nodes is CentOS, you can select only a CentOS image.
   * 
   * >  If you add nodes to a hybrid cloud cluster that supports multiple operating systems, you can select a Windows Server image or a CentOS image when the operating system of the cluster nodes is Windows.
   * 
   * *   The major version of the image specified for the compute nodes that you want to add must be the same as that of the image of the cluster. For example, if the version of the cluster image is CentOS 7.x, the version of the image specified for the compute nodes must be CentOS 7.x.
   * 
   * You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) and [ListCustomImages](https://help.aliyun.com/document_detail/87215.html) operations to query the image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the images. Valid values:
   * 
   * *   system: public image.
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * Default value: system.
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The information about the node that you want to add.
   * 
   * This parameter is required.
   */
  instance?: AddExistedNodesRequestInstance[];
  /**
   * @remarks
   * The queue in the cluster to which the node is to be added.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instance: 'Instance',
      jobQueue: 'JobQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instance: { 'type': 'array', 'itemType': AddExistedNodesRequestInstance },
      jobQueue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddExistedNodesResponseBody;
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
      body: AddExistedNodesResponseBody,
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

export class AddLocalNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information of the local node. A JSON string that contains the HostName, IpAddress, CpuCores, and Memory (Unit: MB) of the local node.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"HostName":"test-HostName","IpAddress":"``192.168.**.**``"},{"CpuCores":2,"Memory":1024}]
   */
  nodes?: string;
  /**
   * @remarks
   * The queue to which to add the local node.
   * 
   * @example
   * test.q
   */
  queue?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodes: 'Nodes',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodes: 'string',
      queue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The local nodes in the cluster.
   */
  instanceIds?: AddLocalNodesResponseBodyInstanceIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: AddLocalNodesResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddLocalNodesResponseBody;
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
      body: AddLocalNodesResponseBody,
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

export class AddNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allocate a public IP address to the compute nodes. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  allocatePublicAddress?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. The parameter takes effect only when EcsChargeType is set to PrePaid. Valid values:
   * 
   * *   true: enables auto-renewal
   * *   false: disables auto-renewal
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period of the subscription compute nodes. The parameter takes effect when AutoRenew is set to true.
   * 
   * *   Valid values when PeriodUnit is set to Week: 1, 2, and 3.
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable hyper-threading for the compute node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  computeEnableHt?: boolean;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Valid values: 0 and 1. A value of 0 indicates that the preemptible instance has no protection period.
   * 
   * @example
   * 1
   */
  computeSpotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate, which indicates that the instance is released.
   * 
   * @example
   * Terminate
   */
  computeSpotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter only takes effect when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.68
   */
  computeSpotPriceLimit?: string;
  /**
   * @remarks
   * The preemption policy of the compute nodes. The parameter only takes effect when EcsChargeType is set to PostPaid. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The policy applies to preemptible instances for which a maximum hourly price is specified.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  computeSpotStrategy?: string;
  /**
   * @remarks
   * The number of compute nodes that you want to add. Valid values: 1 to 99. The value of this parameter is greater than that of the MinCount parameter.
   * 
   * *   If the number of available ECS instances is less than the value of the MinCount parameter, the compute nodes cannot be added.
   * *   If the number of available ECS instances is greater than the value of the MinCount parameter and less than that of the Count parameter, the compute nodes are added based on the value of the MinCount parameter.
   * *   If the number of available ECS instances is greater than the value of the Count parameter, the compute nodes are added based on the value of the Count parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The mode in which the compute nodes are added. Valid values:
   * 
   * *   manual: The compute nodes are manually added.
   * *   autoscale: The compute nodes are automatically added.
   * 
   * Default value: manual.
   * 
   * @example
   * manual
   */
  createMode?: string;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisks?: AddNodesRequestDataDisks[];
  /**
   * @remarks
   * The information about Domain Name System (DNS) settings.
   * 
   * @example
   * "{\\"DnsType\\":\\"PrivateZone\\",\\"DnsName\\":\\"xxxxx\\"}"
   */
  dnsConfig?: string;
  /**
   * @remarks
   * The billing method of the compute nodes. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * Default value: PostPaid.
   * 
   * If the parameter is set to PrePaid, auto-renewal is enabled by default. After the E-HPC cluster is released, auto-renewal is disabled.
   * 
   * @example
   * PostPaid
   */
  ecsChargeType?: string;
  /**
   * @remarks
   * The prefix of the hostname. You can specify the parameter to manage the compute nodes in an efficient manner.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The suffix of the hostname. You can specify the parameter to manage the compute nodes in an efficient manner.
   * 
   * @example
   * 01
   */
  hostNameSuffix?: string;
  /**
   * @remarks
   * The ID of the image that is specified for the compute nodes. The image must meet the following requirements:
   * 
   * *   The operating system that is specified by the image must be the same as that of the existing cluster nodes. For example, if the operating system of the cluster nodes is CentOS, you can select only a CentOS image.
   * 
   * > If you add nodes to a hybrid cloud cluster that supports multiple operating systems, you can select a Windows Server image or a CentOS image when the operating system of nodes is Windows.
   * 
   * *   The major version of the image specified for the compute nodes that you want to add is the same as that of the image of the cluster. For example, if the version of the cluster image is CentOS 7.x, the version of the image specified for the compute nodes must be CentOS 7.x.
   * 
   * You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) and [ListCustomImages](https://help.aliyun.com/document_detail/87215.html) operations to query the image ID.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * Default value: system.
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The instance type of the compute nodes. The default value is the instance type that was specified when you created the E-HPC cluster or the last time when you added compute nodes.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method of the elastic IP address (EIP). Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of the parameter are 1 to 10 and the default value is 10.
   * *   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the amount of the outbound bandwidth that is purchased.
   * 
   * @example
   * 10
   */
  internetMaxBandWidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 10
   */
  internetMaxBandWidthOut?: number;
  /**
   * @remarks
   * The queue to which the compute nodes are added.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The minimum number of the compute nodes that you want to add. Valid values: 1 to 99. The value of the parameter is less than that of the Count parameter.
   * 
   * *   If the number of available ECS instances is less than the value of the MinCount parameter, the compute nodes cannot be added.
   * *   If the number of available ECS instances is greater than the value of the MinCount parameter and less than that of the Count parameter, the compute nodes are added based on the value of the MinCount parameter.
   * *   If the number of available ECS instances is greater than the value of the Count parameter, the compute nodes are added based on the value of the Count parameter.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  minCount?: number;
  /**
   * @remarks
   * The communication mode of the ENI. Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The duration of the subscription. The unit of the duration is specified by the PeriodUnit parameter. The parameter only takes effect when InstanceChargeType is set to PrePaid. Valid values:
   * 
   * *   Valid values when PeriodUnit is set to Week: 1, 2, 3, and 4.
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period of the resource. Valid values:
   * 
   * *   Week
   * *   Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Specifies whether to set this operation as a synchronous operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  sync?: boolean;
  /**
   * @remarks
   * The performance level of the ESSD to be used as the system disk. Default value: PL1. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information about ESSD performance parameters, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  systemDiskLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * *   cloud: basic disk. Disks of this type are retired.
   * 
   * Default value: cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocatePublicAddress: 'AllocatePublicAddress',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      computeEnableHt: 'ComputeEnableHt',
      computeSpotDuration: 'ComputeSpotDuration',
      computeSpotInterruptionBehavior: 'ComputeSpotInterruptionBehavior',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      count: 'Count',
      createMode: 'CreateMode',
      dataDisks: 'DataDisks',
      dnsConfig: 'DnsConfig',
      ecsChargeType: 'EcsChargeType',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthIn: 'InternetMaxBandWidthIn',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      jobQueue: 'JobQueue',
      minCount: 'MinCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      sync: 'Sync',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
      systemDiskType: 'SystemDiskType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePublicAddress: 'boolean',
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterId: 'string',
      computeEnableHt: 'boolean',
      computeSpotDuration: 'number',
      computeSpotInterruptionBehavior: 'string',
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      count: 'number',
      createMode: 'string',
      dataDisks: { 'type': 'array', 'itemType': AddNodesRequestDataDisks },
      dnsConfig: 'string',
      ecsChargeType: 'string',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandWidthIn: 'number',
      internetMaxBandWidthOut: 'number',
      jobQueue: 'string',
      minCount: 'number',
      networkInterfaceTrafficMode: 'string',
      period: 'number',
      periodUnit: 'string',
      sync: 'boolean',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
      systemDiskType: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: AddNodesResponseBodyInstanceIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: AddNodesResponseBodyInstanceIds,
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddNodesResponseBody;
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
      body: AddNodesResponseBody,
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

export class AddQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment set ID. You can obtain the deployment set ID by calling the [DescribeDeploymentSets](https://help.aliyun.com/document_detail/91313.html) operation. Only the deployment sets that use low latency policy are supported.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pzq****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The communication mode of the elastic network interface (ENI). Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The name of the queue. The name must be 1 to 63 characters in length and start with a letter. It can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @remarks
   * Specifies whether to use scaling groups of Auto Scaling.
   * 
   * @example
   * false
   */
  useESS?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      deploymentSetId: 'DeploymentSetId',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      queueName: 'QueueName',
      useESS: 'UseESS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      deploymentSetId: 'string',
      networkInterfaceTrafficMode: 'string',
      queueName: 'string',
      useESS: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ABFF29F-BD9C-4663-AD5D-E620FA48****
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

export class AddQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddQueueResponseBody;
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
      body: AddQueueResponseBody,
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

export class AddSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but make sure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The security group ID of the instance.
   * 
   * You can call the [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) operation to query available security groups in the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class AddSecurityGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSecurityGroupResponseBody;
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
      body: AddSecurityGroupResponseBody,
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

export class AddUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use asynchronous message links to add the users.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users. You can specify 1 to 100 users.
   * 
   * This parameter is required.
   */
  user?: AddUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': AddUsersRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class AddUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUsersResponseBody;
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
      body: AddUsersResponseBody,
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

export class ApplyNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allocate a public IP address to the compute nodes. Valid values:
   * 
   * *   true: A public IP address is allocated to the compute nodes.
   * *   false: A public IP address is not allocated to the compute nodes.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  allocatePublicAddress?: boolean;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87126.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. The value is a floating-point number that supports up to three decimal places. The parameter takes effect only when ComputeSpotStrategy is set to SpotWithPriceLimit.
   * 
   * If ComputeSpotPriceLimit and InstanceTypeModel.N.MaxPrice are specified at the same time, compute nodes are created based on the smaller value of the two parameters.
   * 
   * @example
   * 0.68
   */
  computeSpotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  computeSpotStrategy?: string;
  /**
   * @remarks
   * The number of vCPUs. The parameter is required when the ResourceAmountType parameter is set to Cores.
   * 
   * You can set vCPU and Memory to query node specifications. For example, you can query the available compute nodes that have 2 vCPUs and 16 GB of memory by setting vCPU to 2 and Memory to 16. You can also query compute nodes by node specification and zone. Query results are sorted by price. The nodes that have the lowest price are created.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The prefix of the hostname. You can specify the parameter to manage the compute nodes in an efficient manner.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The suffix of the hostname. You can specify the parameter to manage the compute nodes in an efficient manner.
   * 
   * @example
   * 01
   */
  hostNameSuffix?: string;
  /**
   * @remarks
   * The image ID of the compute nodes to be added. The parameter takes effect only when the TargetImageId parameter is not specified.
   * 
   * You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) and [ListCustomImages](https://help.aliyun.com/document_detail/87215.html) operations to query the image ID.
   * 
   * >  If you add multiple compute nodes, the TargetImageId parameter takes effect only on the nodes for which the TargetImageId parameter is specified.
   * 
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The level of the instance family. The parameter takes effect only when Cores and Memory are specified. Valid values:
   * 
   * *   EntryLevel
   * *   EnterpriseLevel
   * *   CreditEntryLevel For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * Default value: EnterpriseLevel.
   * 
   * @example
   * EntryLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The information about the preemptible instance.
   */
  instanceTypeModel?: ApplyNodesRequestInstanceTypeModel[];
  /**
   * @remarks
   * The billing method of the elastic IP address (EIP). Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of the parameter are 1 to 10 and the default value is 10.
   * *   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the amount of the outbound bandwidth that is purchased. The default value is the value of the InternetMaxBandWidthOut parameter.
   * 
   * @example
   * 10
   */
  internetMaxBandWidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 10
   */
  internetMaxBandWidthOut?: number;
  /**
   * @remarks
   * The interval between two consecutive batches. Valid values: 60 to 600. Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The queue to which the compute nodes are added.
   * 
   * You can call the [ListQueues](https://help.aliyun.com/document_detail/92176.html) operation to query the queue name.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The memory capacity. The parameter is required when the ResourceAmountType parameter is set to Cores. Unit: GB.
   * 
   * You can set vCPU and Memory to query node specifications. For example, you can query the available compute nodes that have 2 vCPUs and 16 GB of memory by setting vCPU to 2 and Memory to 16. You can also query compute nodes by node specification and zone. Query results are sorted by price. The nodes that have the lowest price are created.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The application policy of the preemptible nodes. Valid values:
   * 
   * *   LowPriceResourcePlanning: Preemptible nodes are created based on the unit prices of vCPUs in ascending order. Preemptible nodes are created first when multiple preemptible instance types are specified.
   * *   CapacityOptResourcePlanning: Preemptible nodes are created based on the prices and release rates in ascending order.
   * *   CustomizedResourcePlanning: Nodes are added based on the predefined value of the ZoneIds.N parameter. Instances of a zone that has a higher priority are used first.
   * 
   * @example
   * LowPriceResourcePlanning
   */
  priorityStrategy?: string;
  /**
   * @remarks
   * The type of the resource that you want to add. Valid values:
   * 
   * *   Instances: the ECS instances that are used as compute nodes
   * *   Cores: vCPU and memory
   * 
   * Default value: Instances.
   * 
   * @example
   * Instances
   */
  resourceAmountType?: string;
  /**
   * @remarks
   * The total number of batches to create nodes. Valid values: 1 to 10.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  round?: number;
  /**
   * @remarks
   * Specifies whether to strictly meet the requirements of the TargetCapacity parameter. The parameter takes effect only when StrictSatisfiedTargetCapacity is set to true. Valid values:
   * 
   * *   true: Check the inventory of the resources. Compute nodes are created based on the value of the TargetCapacity parameter only when the available resources are sufficient. Otherwise, no compute nodes are created.
   * *   false: Check the inventory of the resources. Compute nodes are created only when the available resources are sufficient. However, some compute nodes may fail to be created because resources become insufficient after the inventory query.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  strictResourceProvision?: boolean;
  /**
   * @remarks
   * Specifies whether to meet the requirements of the TargetCapacity parameter. Valid values:
   * 
   * *   true: If the available resources are fewer than the resources that you want to add, no compute nodes are created and an error is returned. If the available resources are more than the resources that you want to add, the following cases may occur:
   * 
   *     *   If StrictResourceProvision is set to true, check the inventory of the resources. Compute nodes are created based on the value of the TargetCapacity parameter only when the available resources are sufficient. Otherwise, no compute nodes are created.
   *     *   If StrictResourceProvision is set to false, check the inventory of the resources. Compute nodes are created only when the available resources are sufficient. However, some compute nodes may fail to be created because resources become insufficient after the inventory query.
   * 
   * *   false: If the available resources are insufficient, compute nodes are created based on the inventory of the resources.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  strictSatisfiedTargetCapacity?: boolean;
  /**
   * @remarks
   * The performance level of the ESSD that you want to use as the system disk. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL0. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  systemDiskLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * *   cloud: basic disk. Disks of this type are retired.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskType?: string;
  /**
   * @remarks
   * The details about the tags that are added to the nodes.
   */
  tag?: ApplyNodesRequestTag[];
  /**
   * @remarks
   * The amount of the resource that you want to add. The specific number depends on the value of the ResourceAmountType parameter:
   * 
   * *   If ResourceAmountType is set to Instance, the value range of TargetCapacity is 1 to 200.
   * *   If ResourceAmountType is set to Cores, the value range of TargetCapacity is 1 to 1,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  targetCapacity?: number;
  /**
   * @remarks
   * The user data of the instance. The user data must be Base64-encoded. The raw data can be up to 16 KB in size. Linux operating systems support shell scripts. Windows operating systems support bat and Powershell scripts. Before you perform Base64 encoding, make sure that the content to be encoded includes [bat] or [powershell] as the first row.
   * 
   * >  We recommend that you do not pass in confidential information, such as passwords or private keys, in plaintext as user data. This is because the system does not encrypt UserData values when API requests are transmitted. If you must pass in confidential information, we recommend that you encrypt and encode the information in Base64, and then decode and decrypt the information in the same way inside the instance.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The details of the zones. You can specify up to 10 zones.
   * 
   * This parameter is required.
   */
  zoneInfos?: ApplyNodesRequestZoneInfos[];
  static names(): { [key: string]: string } {
    return {
      allocatePublicAddress: 'AllocatePublicAddress',
      clusterId: 'ClusterId',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      cores: 'Cores',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeModel: 'InstanceTypeModel',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthIn: 'InternetMaxBandWidthIn',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      interval: 'Interval',
      jobQueue: 'JobQueue',
      memory: 'Memory',
      priorityStrategy: 'PriorityStrategy',
      resourceAmountType: 'ResourceAmountType',
      round: 'Round',
      strictResourceProvision: 'StrictResourceProvision',
      strictSatisfiedTargetCapacity: 'StrictSatisfiedTargetCapacity',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
      systemDiskType: 'SystemDiskType',
      tag: 'Tag',
      targetCapacity: 'TargetCapacity',
      userData: 'UserData',
      zoneInfos: 'ZoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePublicAddress: 'boolean',
      clusterId: 'string',
      computeSpotPriceLimit: 'number',
      computeSpotStrategy: 'string',
      cores: 'number',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      instanceFamilyLevel: 'string',
      instanceTypeModel: { 'type': 'array', 'itemType': ApplyNodesRequestInstanceTypeModel },
      internetChargeType: 'string',
      internetMaxBandWidthIn: 'number',
      internetMaxBandWidthOut: 'number',
      interval: 'number',
      jobQueue: 'string',
      memory: 'number',
      priorityStrategy: 'string',
      resourceAmountType: 'string',
      round: 'number',
      strictResourceProvision: 'boolean',
      strictSatisfiedTargetCapacity: 'boolean',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
      systemDiskType: 'string',
      tag: { 'type': 'array', 'itemType': ApplyNodesRequestTag },
      targetCapacity: 'number',
      userData: 'string',
      zoneInfos: { 'type': 'array', 'itemType': ApplyNodesRequestZoneInfos },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeModel)) {
      $dara.Model.validateArray(this.instanceTypeModel);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zoneInfos)) {
      $dara.Model.validateArray(this.zoneInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed result of the request.
   * 
   * @example
   * Resources Application is satisfied. Creating...
   */
  detail?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * >  AddNodes is an asynchronous API operation. If a request succeeds, a response is immediately generated before ECS instances are created. Therefore, the value of this parameter is null. You can call the [ListNodes](https://help.aliyun.com/document_detail/87161.html) operation to query the IDs of the ECS instances.
   */
  instanceIds?: ApplyNodesResponseBodyInstanceIds;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of the compute nodes that are created.
   * 
   * @example
   * 10
   */
  satisfiedAmount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      satisfiedAmount: 'SatisfiedAmount',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceIds: ApplyNodesResponseBodyInstanceIds,
      requestId: 'string',
      satisfiedAmount: 'number',
      taskId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyNodesResponseBody;
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
      body: ApplyNodesResponseBody,
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

export class CreateClusterRequest extends $dara.Model {
  ecsOrder?: CreateClusterRequestEcsOrder;
  /**
   * @remarks
   * The type of the domain account service. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * Default value: nis.
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The custom component service.
   */
  addOns?: CreateClusterRequestAddOns[];
  /**
   * @remarks
   * The information of the NAS file system.
   */
  additionalVolumes?: CreateClusterRequestAdditionalVolumes[];
  /**
   * @remarks
   * The application information.
   */
  application?: CreateClusterRequestApplication[];
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period of the subscription compute nodes. The parameter takes effect when AutoRenew is set to true.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but make sure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The version of the E-HPC client. By default, the parameter is set to the latest version number.
   * 
   * You can call the [ListCurrentClientVersion](https://help.aliyun.com/document_detail/87223.html) operation to query the latest version of the E-HPC client.
   * 
   * @example
   * 1.0.64
   */
  clientVersion?: string;
  /**
   * @remarks
   * The version of the E-HPC cluster.
   * 
   * Default value: 1.0.
   * 
   * @example
   * 1.0
   */
  clusterVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable hyper-threading for the compute node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  computeEnableHt?: boolean;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. A maximum of three decimal places can be used in the value of the parameter. The parameter is valid only when the ComputeSpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.034
   */
  computeSpotPriceLimit?: string;
  /**
   * @remarks
   * The bidding method of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  computeSpotStrategy?: string;
  /**
   * @remarks
   * The mode in which the E-HPC cluster is deployed. Valid values:
   * 
   * *   Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
   * *   Simple: A management node, which consists of an account node and a scheduling node, is deployed, while a logon node and multiple compute nodes are separately deployed.
   * *   Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
   * 
   * Default value: Standard.
   * 
   * @example
   * Simple
   */
  deployMode?: string;
  /**
   * @remarks
   * The ID of the deployment set in which to deploy the instance. You can obtain the deployment set ID by calling the [DescribeDeploymentSets](https://help.aliyun.com/document_detail/91313.html) operation. Only the deployment sets that use low latency policy are supported.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pzq****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The description of the E-HPC cluster. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The domain name of the on-premises E-HPC cluster.
   * 
   * This parameter takes effect only when the AccountType parameter is set to Idap.
   * 
   * @example
   * ldap
   */
  domain?: string;
  /**
   * @remarks
   * The billing method of the nodes. Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * If you set the parameter to PrePaid, auto-renewal is enabled by default.
   * 
   * @example
   * PostPaid
   */
  ecsChargeType?: string;
  /**
   * @remarks
   * The version of E-HPC. By default, the parameter is set to the latest version number.
   * 
   * @example
   * 1.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable the high availability feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * > If high availability is enabled, a primary management node and a secondary management node are used.
   * 
   * @example
   * true
   */
  haEnable?: boolean;
  /**
   * @remarks
   * The image IDs.
   * 
   * You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) and [ListCustomImages](https://help.aliyun.com/document_detail/87215.html) operations to query the images that are supported by E-HPC.
   * 
   * @example
   * centos_7_02_64_20G_alibase_20170818****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * 
   * Default value: system.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The URL of the job file that is uploaded to an Object Storage Service (OSS) bucket.
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scaling. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isComputeEss?: boolean;
  /**
   * @remarks
   * The queue to which the compute nodes are added.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * > For more information, see [Create an SSH key pair](https://help.aliyun.com/document_detail/51793.html).
   * 
   * @example
   * test
   */
  keyPairName?: string;
  /**
   * @remarks
   * The name of the E-HPC cluster. The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The communication model of the ENI. Valid values:
   * 
   * *   Standard: The TCP communication mode is used.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with the Elastic RDMA Interface (ERI) enabled.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The operating system tag of the image.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The root password of the logon node. The password must be 8 to 30 characters in length and contain at least three of the following items: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   * `( ) ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ‘ < > , . ? /`
   * 
   * You must specify either Password or KeyPairName. If both are specified, the Password parameter prevails.
   * 
   * > We recommend that you use HTTPS to call the API operation to prevent password leakage.
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The duration of the subscription. The unit of the duration is specified by the `PeriodUnit` parameter.
   * 
   * *   Valid values if PriceUnit is set to Year: 1, 2, and 3.
   * *   Valid values if PriceUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   Valid value if PriceUnit is set to Hour: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Year
   * *   Month
   * *   Hour
   * 
   * Default value: Month.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The mode configurations of the plug-in. This parameter takes effect only when the SchedulerType parameter is set to custom.
   * 
   * The value must be a JSON string. The parameter contains the following parameters: pluginMod, pluginLocalPath, and pluginOssPath.
   * 
   * *   pluginMod: the plug-in mode. The following modes are supported:
   * 
   *     *   oss: The plug-in is downloaded and decompressed from OSS to a local path that is specified by the pluginLocalPath parameter.
   *     *   image: By default, the plug-in is stored in a pre-defined local path that is specified by the pluginLocalPath parameter.
   * 
   * *   pluginLocalPath: the local path where the plug-in is stored. We recommend that you select a shared directory in oss mode and a non-shared directory in image mode.
   * 
   * *   pluginOssPath: the remote path where the plug-in is stored in OSS. This parameter takes effect only when the pluginMod parameter is set to oss.
   * 
   * @example
   * {"pluginMod": "oss","pluginLocalPath": "/opt/plugin","pluginOssPath": "https://bucket.oss-cn-hangzhou.aliyuncs.com/plugin/plugin.tgz"}
   */
  plugin?: string;
  /**
   * @remarks
   * The information of the post-installation script.
   */
  postInstallScript?: CreateClusterRequestPostInstallScript[];
  /**
   * @remarks
   * The node of the RAM role.
   * 
   * @example
   * Standard
   */
  ramNodeTypes?: string[];
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role.
   * 
   * You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation provided by RAM to query the instance RAM roles that you created.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The remote directory to which the NAS file system is mounted.
   * 
   * @example
   * NasMountpoint:/RemoteDirectory
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * Specifies whether to enable Virtual Network Computing (VNC). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  remoteVisEnable?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Super Computing Cluster (SCC) instance ID.
   * 
   * If you specify the parameter, the SCC instance is moved to a new SCC cluster.
   * 
   * @example
   * 00b648b****
   */
  sccClusterId?: string;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * Default value: pbs.
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  /**
   * @remarks
   * The ID of the security group to which the E-HPC cluster belongs.
   * 
   * You can call the [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) operation to query available security groups in the current region.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * If you do not use an existing security group, set the parameter to the name of a new security group. A default policy is applied to the new security group.
   * 
   * @example
   * ehpc-SecurityGroup
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The performance level of the ESSD to be used as the system disk. Default value: PL1. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  systemDiskLevel?: string;
  /**
   * @remarks
   * The system disk size. Unit: GB.
   * 
   * Valid values: 40 to 500.
   * 
   * Default value: 40.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * *   cloud: basic disk. Disks of this type are retired.
   * 
   * Default value: cloud_ssd.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskType?: string;
  /**
   * @remarks
   * The array of the tags.
   * 
   * @example
   * Standard
   */
  tag?: CreateClusterRequestTag[];
  /**
   * @remarks
   * The vSwitch ID. E-HPC supports only VPC networks.
   * 
   * You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query available vSwitches.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the NAS file system. If you leave the parameter empty, a Performance NAS file system is created by default.
   * 
   * You can call the [ListFileSystemWithMountTargets](https://help.aliyun.com/document_detail/204364.html) operation to query available mount targets.
   * 
   * @example
   * 008b64****
   */
  volumeId?: string;
  /**
   * @remarks
   * The mount options of the NFS file system that you want to mount by running the mount command.
   * 
   * For more information, see [Mount an NFS file system on a Linux ECS instance](https://www.alibabacloud.com/help/en/nas/latest/mount-an-nfs-file-system-on-a-linux-ecs-instance#section-jyi-hyd-hbr).
   * 
   * @example
   * -t nfs -o vers=4
   */
  volumeMountOption?: string;
  /**
   * @remarks
   * The mount target of the NAS file system. The mount target is of the VPC type. Take note of the following information:
   * 
   * *   If the VolumeId parameter is not specified, you can leave the VolumeMountpoint parameter empty. In this case, a mount target is created by default.
   * *   When the VolumeId parameter is specified, the VolumeMountpoint parameter is required. You can call the [ListFileSystemWithMountTargets](https://help.aliyun.com/document_detail/204364.html) operation to query available mount targets.
   * 
   * @example
   * 008b648bcb-s****.cn-hangzhou.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The type of the protocol that is used by the NAS file system. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * Default value: NFS.
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the shared storage. Set the value to `nas`, which indicates NAS file system.
   * 
   * @example
   * nas
   */
  volumeType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query available VPCs.
   * 
   * @example
   * vpc-b3f3edefefeep0760yju****
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies whether not to install the agent.
   * 
   * *   true: does not install the agent.
   * *   false: installs the agent.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  withoutAgent?: boolean;
  /**
   * @remarks
   * Specifies whether the logon node uses an elastic IP address (EIP). Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  withoutElasticIp?: boolean;
  /**
   * @remarks
   * Indicates whether to use NAS as a shared storage. Valid values:
   * 
   * *   true: does not use NAS.
   * *   false: use NAS.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  withoutNas?: boolean;
  /**
   * @remarks
   * The ID of the zone in which the resource resides.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) and [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operations to query the IDs of the zones where E-HPC is supported.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      accountType: 'AccountType',
      addOns: 'AddOns',
      additionalVolumes: 'AdditionalVolumes',
      application: 'Application',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      clusterVersion: 'ClusterVersion',
      computeEnableHt: 'ComputeEnableHt',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      deployMode: 'DeployMode',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      domain: 'Domain',
      ecsChargeType: 'EcsChargeType',
      ehpcVersion: 'EhpcVersion',
      haEnable: 'HaEnable',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      inputFileUrl: 'InputFileUrl',
      isComputeEss: 'IsComputeEss',
      jobQueue: 'JobQueue',
      keyPairName: 'KeyPairName',
      name: 'Name',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      osTag: 'OsTag',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      plugin: 'Plugin',
      postInstallScript: 'PostInstallScript',
      ramNodeTypes: 'RamNodeTypes',
      ramRoleName: 'RamRoleName',
      remoteDirectory: 'RemoteDirectory',
      remoteVisEnable: 'RemoteVisEnable',
      resourceGroupId: 'ResourceGroupId',
      sccClusterId: 'SccClusterId',
      schedulerType: 'SchedulerType',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
      systemDiskType: 'SystemDiskType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountOption: 'VolumeMountOption',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
      withoutAgent: 'WithoutAgent',
      withoutElasticIp: 'WithoutElasticIp',
      withoutNas: 'WithoutNas',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateClusterRequestEcsOrder,
      accountType: 'string',
      addOns: { 'type': 'array', 'itemType': CreateClusterRequestAddOns },
      additionalVolumes: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalVolumes },
      application: { 'type': 'array', 'itemType': CreateClusterRequestApplication },
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clientVersion: 'string',
      clusterVersion: 'string',
      computeEnableHt: 'boolean',
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      deployMode: 'string',
      deploymentSetId: 'string',
      description: 'string',
      domain: 'string',
      ecsChargeType: 'string',
      ehpcVersion: 'string',
      haEnable: 'boolean',
      imageId: 'string',
      imageOwnerAlias: 'string',
      inputFileUrl: 'string',
      isComputeEss: 'boolean',
      jobQueue: 'string',
      keyPairName: 'string',
      name: 'string',
      networkInterfaceTrafficMode: 'string',
      osTag: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      plugin: 'string',
      postInstallScript: { 'type': 'array', 'itemType': CreateClusterRequestPostInstallScript },
      ramNodeTypes: { 'type': 'array', 'itemType': 'string' },
      ramRoleName: 'string',
      remoteDirectory: 'string',
      remoteVisEnable: 'string',
      resourceGroupId: 'string',
      sccClusterId: 'string',
      schedulerType: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
      systemDiskType: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterRequestTag },
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountOption: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
      withoutAgent: 'boolean',
      withoutElasticIp: 'boolean',
      withoutNas: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ecsOrder && typeof (this.ecsOrder as any).validate === 'function') {
      (this.ecsOrder as any).validate();
    }
    if(Array.isArray(this.addOns)) {
      $dara.Model.validateArray(this.addOns);
    }
    if(Array.isArray(this.additionalVolumes)) {
      $dara.Model.validateArray(this.additionalVolumes);
    }
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    if(Array.isArray(this.postInstallScript)) {
      $dara.Model.validateArray(this.postInstallScript);
    }
    if(Array.isArray(this.ramNodeTypes)) {
      $dara.Model.validateArray(this.ramNodeTypes);
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

export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C084****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * >  CreateCluster is an asynchronous operation. A response is returned if the request succeeds. However, this does not mean that a cluster is created. You can call the [ListTasks](https://help.aliyun.com/document_detail/268225.html) operation to query the result of the task.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C084****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
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
      body: CreateClusterResponseBody,
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

export class CreateHybridClusterRequest extends $dara.Model {
  ecsOrder?: CreateHybridClusterRequestEcsOrder;
  /**
   * @remarks
   * An array that consists of the information about the software.
   */
  application?: CreateHybridClusterRequestApplication[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The version of the client. By default, the latest version is used.
   * 
   * @example
   * 1.0.64
   */
  clientVersion?: string;
  /**
   * @remarks
   * The maximum hourly price for the ECS instance under the compute node. A maximum of three decimal places can be used in the value of the parameter. The parameter is valid only when the ComputeSpotStrategy parameter is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.034
   */
  computeSpotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  computeSpotStrategy?: string;
  /**
   * @remarks
   * The description of the E-HPC cluster. The description must be 2 to 256 characters in length and cannot start with `http://` or` https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The type of the domain account service. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * Default value: nis.
   * 
   * @example
   * nis
   */
  domain?: string;
  /**
   * @remarks
   * The version of E-HPC. By default, the latest version is used.
   * 
   * @example
   * 1.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The mode in which the proxy node manages the offline nodes. Valid values:
   * 
   * *   SSH: indicates management via SSH logon.
   * *   CA: indicates management through Cloud Assistant.
   * 
   * @example
   * SSH
   */
  hybridClusterOpMode?: string;
  /**
   * @remarks
   * The IDs of the images.
   * 
   * @example
   * wi_1607_x64_dtc_zh_40G_alibase****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The default queue of the scale-out nodes.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.[](http://https://。、（:）、（_）（-）。)
   * 
   * > To use an SSH key pair, see [Create an SSH key pair](https://help.aliyun.com/document_detail/51793.html).
   * 
   * @example
   * test
   */
  keyPairName?: string;
  /**
   * @remarks
   * The location where the cluster resides. Set the value to OnPremise.
   * 
   * @example
   * OnPremise
   */
  location?: string;
  /**
   * @remarks
   * Specifies whether the cluster supports multiple operating systems. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  multiOs?: boolean;
  /**
   * @remarks
   * The name of the cluster. The name must be 2 to 64 characters in length, and can contain only letters, digits, hyphens (-), and underscores (_). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * hybridcluster
   */
  name?: string;
  /**
   * @remarks
   * The information about the nodes in the local cluster.
   */
  nodes?: CreateHybridClusterRequestNodes[];
  /**
   * @remarks
   * The path in which the on-premises file system is mounted on the nodes on the cloud.
   * 
   * @example
   * /OnCloudDirectory
   */
  onPremiseVolumeLocalPath?: string;
  /**
   * @remarks
   * The mount target of the on-premises file system.
   * 
   * @example
   * RemoteNasDomain.com
   */
  onPremiseVolumeMountPoint?: string;
  /**
   * @remarks
   * The type of the protocol that is used by the on-premises file system. Only NFS is supported.
   * 
   * @example
   * NFS
   */
  onPremiseVolumeProtocol?: string;
  /**
   * @remarks
   * The mount path of the on-premises file system.
   * 
   * @example
   * /RemoteDirectory
   */
  onPremiseVolumeRemotePath?: string;
  /**
   * @remarks
   * The parameter that is used to connect to the OpenLDAP server.
   */
  openldapPar?: CreateHybridClusterRequestOpenldapPar;
  /**
   * @remarks
   * The image tag of the operating system. You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) operation to query the image tag.
   * 
   * This parameter is required.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The root password of the logon node. The password must be 8 to 30 characters in length and contain at least three of the following items: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: `() ~ ! @ # $ % ^ & * - = + | { } [ ] : ; ‘ < > , . ? /`
   * 
   * > We recommend that you use HTTPS to call the API operation to prevent password leakage.
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The mode configurations of the plug-in. This parameter takes effect only when the SchedulerType parameter is set to custom.
   * 
   * The value must be a JSON string. The parameter contains the following parameters: pluginMod, pluginLocalPath, and pluginOssPath.
   * 
   * *   pluginMod: the mode of the plug-in. The following modes are supported:
   * 
   *     *   oss: The plug-in is downloaded and decompressed from OSS to a local path. The local path is specified by the pluginLocalPath parameter.
   *     *   image: By default, the plug-in is stored in a pre-defined local path. The local path is specified by the pluginLocalPath parameter.
   * 
   * *   pluginLocalPath: the local path where the plug-in is stored. We recommend that you select a shared directory in oss mode and a non-shared directory in image mode.
   * 
   * *   pluginOssPath: the remote path where the plug-in is stored in OSS. This parameter takes effect only when the pluginMod parameter is set to oss.
   * 
   * @example
   * {"pluginMod": "oss","pluginLocalPath": "/opt/plugin","pluginOssPath": "https://bucket.oss-cn-hangzhou.aliyuncs.com/plugin/plugin.tgz"}
   */
  plugin?: string;
  /**
   * @remarks
   * The list of post-installation script information.
   */
  postInstallScript?: CreateHybridClusterRequestPostInstallScript[];
  /**
   * @remarks
   * The remote directory to which the file system is mounted.
   * 
   * @example
   * /RemoteDirectory
   */
  remoteDirectory?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether the scheduler is preinstalled for the image. Valid values:
   * 
   * *   true: The scheduler is preinstalled. When you create or add a node, you do not need to install the scheduler.
   * *   false: The scheduler is not preinstalled. When you create or add a cluster, you must install the scheduler.
   * 
   * @example
   * true
   */
  schedulerPreInstall?: boolean;
  /**
   * @remarks
   * You can select an existing security group by its ID.
   * 
   * > If you specify this parameter, you cannot specify the `SecurityGroupName`  parameter.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * If you do not use an existing security group, set the parameter to the name of a new security group. A default policy is applied to the new security group.
   * 
   * > If you specify this parameter, you cannot specify the `SecurityGroupId` parameter.
   * 
   * @example
   * ehpc-SecurityGroup
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance connects to.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the file system. NAS file systems cannot be automatically created.
   * 
   * @example
   * 008b64****
   */
  volumeId?: string;
  /**
   * @remarks
   * The mount target of the NAS file system. The mount target is of the VPC type. Mount targets cannot be automatically created for NAS file systems.
   * 
   * @example
   * 008b648bcb-s****.cn-hangzhou.nas.aliyuncs.com
   */
  volumeMountpoint?: string;
  /**
   * @remarks
   * The type of the protocol that is used by the NAS file system. Only NFS is supported.
   * 
   * @example
   * NFS
   */
  volumeProtocol?: string;
  /**
   * @remarks
   * The type of the file system. Only NAS file systems are supported.
   * 
   * @example
   * NAS
   */
  volumeType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-b3f3edefefeep0760yju****
   */
  vpcId?: string;
  /**
   * @remarks
   * The parameter that is used to connect to the Windows AD server.
   */
  winAdPar?: CreateHybridClusterRequestWinAdPar;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      application: 'Application',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      description: 'Description',
      domain: 'Domain',
      ehpcVersion: 'EhpcVersion',
      hybridClusterOpMode: 'HybridClusterOpMode',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      jobQueue: 'JobQueue',
      keyPairName: 'KeyPairName',
      location: 'Location',
      multiOs: 'MultiOs',
      name: 'Name',
      nodes: 'Nodes',
      onPremiseVolumeLocalPath: 'OnPremiseVolumeLocalPath',
      onPremiseVolumeMountPoint: 'OnPremiseVolumeMountPoint',
      onPremiseVolumeProtocol: 'OnPremiseVolumeProtocol',
      onPremiseVolumeRemotePath: 'OnPremiseVolumeRemotePath',
      openldapPar: 'OpenldapPar',
      osTag: 'OsTag',
      password: 'Password',
      plugin: 'Plugin',
      postInstallScript: 'PostInstallScript',
      remoteDirectory: 'RemoteDirectory',
      resourceGroupId: 'ResourceGroupId',
      schedulerPreInstall: 'SchedulerPreInstall',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
      winAdPar: 'WinAdPar',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateHybridClusterRequestEcsOrder,
      application: { 'type': 'array', 'itemType': CreateHybridClusterRequestApplication },
      clientToken: 'string',
      clientVersion: 'string',
      computeSpotPriceLimit: 'number',
      computeSpotStrategy: 'string',
      description: 'string',
      domain: 'string',
      ehpcVersion: 'string',
      hybridClusterOpMode: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      jobQueue: 'string',
      keyPairName: 'string',
      location: 'string',
      multiOs: 'boolean',
      name: 'string',
      nodes: { 'type': 'array', 'itemType': CreateHybridClusterRequestNodes },
      onPremiseVolumeLocalPath: 'string',
      onPremiseVolumeMountPoint: 'string',
      onPremiseVolumeProtocol: 'string',
      onPremiseVolumeRemotePath: 'string',
      openldapPar: CreateHybridClusterRequestOpenldapPar,
      osTag: 'string',
      password: 'string',
      plugin: 'string',
      postInstallScript: { 'type': 'array', 'itemType': CreateHybridClusterRequestPostInstallScript },
      remoteDirectory: 'string',
      resourceGroupId: 'string',
      schedulerPreInstall: 'boolean',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
      winAdPar: CreateHybridClusterRequestWinAdPar,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ecsOrder && typeof (this.ecsOrder as any).validate === 'function') {
      (this.ecsOrder as any).validate();
    }
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.openldapPar && typeof (this.openldapPar as any).validate === 'function') {
      (this.openldapPar as any).validate();
    }
    if(Array.isArray(this.postInstallScript)) {
      $dara.Model.validateArray(this.postInstallScript);
    }
    if(this.winAdPar && typeof (this.winAdPar as any).validate === 'function') {
      (this.winAdPar as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0842122
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0842122
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHybridClusterResponseBody;
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
      body: CreateHybridClusterResponseBody,
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

export class CreateJobFileRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to use an asynchronous link to submit job files.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The content of the job file. The content is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * c2xlZXAgMzA=
   */
  content?: string;
  /**
   * @remarks
   * The user to which the job file belongs.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the users of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser1
   */
  runasUser?: string;
  /**
   * @remarks
   * The user password.
   * 
   * @example
   * !QAZ****
   */
  runasUserPassword?: string;
  /**
   * @remarks
   * The name of the job file.
   * 
   * This parameter is required.
   * 
   * @example
   * lammps.pbs
   */
  targetFile?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      content: 'Content',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      targetFile: 'TargetFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      content: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
      targetFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class CreateJobFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobFileResponseBody;
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
      body: CreateJobFileResponseBody,
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

export class CreateJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The job array.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-10:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The maximum running time of the job. Valid formats:
   * 
   * *   hh:mm:ss
   * *   mm:ss
   * *   ss
   * 
   * We recommend that you use the hh:mm:ss format. If the maximum running time is 12 hours, set the value to 12:00:00.
   * 
   * @example
   * 12:00:00
   */
  clockTime?: string;
  /**
   * @remarks
   * The command that is used to run the job.
   * 
   * This parameter is required.
   * 
   * @example
   * ./LammpsTest/lammps.pbs
   */
  commandLine?: string;
  /**
   * @remarks
   * The maximum GPU usage required by a single compute node. Valid values: 1 to 8.
   * 
   * The parameter takes effect only when the cluster uses PBS and a compute node is a GPU-accelerated instance.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
   * 
   * @example
   * https://test.oss-cn-beijing.aliyuncs.com/test.py
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The maximum memory usage required by a single compute node. Unit: GB, MB, or KB. The unit is case-insensitive.
   * 
   * @example
   * 1GB
   */
  mem?: string;
  /**
   * @remarks
   * The name of the job template. The name must be 2 to 64 characters in length. It must start with a letter and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * jobtemplate1
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes. Valid values: 1 to 500.
   * 
   * >  If you do not specify this parameter, the Task, Thread, Mem, or GPU parameters do not take effect.
   * 
   * @example
   * 2
   */
  node?: number;
  /**
   * @remarks
   * The path that is used to run the job.
   * 
   * @example
   * ./jobfolder
   */
  packagePath?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The name of the queue in which the job is run.
   * 
   * You can call the [ListQueues](https://help.aliyun.com/document_detail/92176.html) operation to query the name of the queue.
   * 
   * @example
   * workq
   */
  queue?: string;
  /**
   * @remarks
   * Specifies whether to automatically rerun the job after the job fails. Valid value:
   * 
   * *   true: reruns the job.
   * *   false: does not rerun the job.
   * 
   * @example
   * false
   */
  reRunable?: boolean;
  /**
   * @remarks
   * The name of the user that runs the job.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the users of the cluster.
   * 
   * @example
   * user1
   */
  runasUser?: string;
  /**
   * @remarks
   * The output file path of stderr.
   * 
   * @example
   * ./LammpsTest
   */
  stderrRedirectPath?: string;
  /**
   * @remarks
   * The output file path of stdout.
   * 
   * @example
   * ./LammpsTest
   */
  stdoutRedirectPath?: string;
  /**
   * @remarks
   * The number of tasks required by a single compute node. Valid values: 1 to 1000.
   * 
   * @example
   * 2
   */
  task?: number;
  /**
   * @remarks
   * The number of threads required by a single compute node. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  thread?: number;
  /**
   * @remarks
   * The command that is used to decompress the job files downloaded from an OSS bucket. The parameter takes effect only when WithUnzipCmd is set to true. Valid values:
   * 
   * *   tar xzf: decompresses GZIP files.
   * *   tar xf: decompresses TAR files.
   * *   unzip: decompresses ZIP files.
   * 
   * @example
   * tar xzf
   */
  unzipCmd?: string;
  /**
   * @remarks
   * The runtime variables passed to the job. They can be accessed by using environment variables in the executable file.
   * 
   * @example
   * [{Name:,Value:},{Name:,Value:}]
   */
  variables?: string;
  /**
   * @remarks
   * Specifies whether to decompress the job files downloaded from an OSS bucket. Valid values:
   * 
   * *   true: decompresses the job file.
   * *   false: does not decompress the job file.
   * 
   * @example
   * true
   */
  withUnzipCmd?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      commandLine: 'CommandLine',
      gpu: 'Gpu',
      inputFileUrl: 'InputFileUrl',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      priority: 'Priority',
      queue: 'Queue',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
      withUnzipCmd: 'WithUnzipCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      commandLine: 'string',
      gpu: 'number',
      inputFileUrl: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      priority: 'number',
      queue: 'string',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
      withUnzipCmd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * ehpc-job-tmpl-6RxO5y****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobTemplateResponseBody;
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
      body: CreateJobTemplateResponseBody,
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

export class DeleteClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-QKKVqO****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to release Elastic Compute Service (ECS) instances that are created by using Elastic High Performance Computing (E-HPC).
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  releaseInstance?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseInstance: 'ReleaseInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseInstance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1AB6D8D-E185-4D94-859C-7CE7B8B7****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * F1AB6D8D-E185-4D94-859C-7CE7B8B7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
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
      body: DeleteClusterResponseBody,
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

export class DeleteJobTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the job templates that you want to delete. You can specify a maximum of 20 job template IDs.
   * 
   * Format of job template IDs: `[{"Id": "0.sched****"},{"Id": "1.sched****"}]`. Separate multiple job template IDs with commas (,).
   * 
   * You can call the [ListJobTemplates](https://help.aliyun.com/document_detail/87248.html) operation to query job template IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Id":"ehpc-job-tmpl-6RVcMK****"},{"Id": "ehpc-job-tmpl-6RxO5y****"}]
   */
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class DeleteJobTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobTemplatesResponseBody;
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
      body: DeleteJobTemplatesResponseBody,
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

export class DeleteJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use an asynchronous link to delete the jobs.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of jobs that you want to delete. Maximum number of jobs: 100. Minimum number of jobs: 1.
   * 
   * Format: `[{"Id": "0.sched****"},{"Id": "1.sched****"}]`. Separate multiple jobs with commas (,).
   * 
   * You can call the [ListJobs](https://help.aliyun.com/document_detail/87251.html) operation to query the job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Id": "0.sched****"},{"Id": "1.sched****"}]
   */
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      jobs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class DeleteJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobsResponseBody;
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
      body: DeleteJobsResponseBody,
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

export class DeleteNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instance?: DeleteNodesRequestInstance[];
  /**
   * @remarks
   * Specifies whether to release the instances that are created by using E-HPC.
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  releaseInstance?: boolean;
  /**
   * @remarks
   * Specifies whether to directly delete the node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  sync?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      releaseInstance: 'ReleaseInstance',
      sync: 'Sync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': DeleteNodesRequestInstance },
      releaseInstance: 'boolean',
      sync: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * *   If you set the Sync parameter to true, the DeleteNodes operation is synchronous. Valid value: Not Available.
   * *   If you set the Sync parameter to false, the DeleteNodes operation is asynchronous. You can call the [ListTasks](https://help.aliyun.com/document_detail/268225.html) operation to query the result of the task.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodesResponseBody;
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
      body: DeleteNodesResponseBody,
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

export class DeleteQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the queue that you want to delete.
   * 
   * You can call the [ListQueues](https://help.aliyun.com/document_detail/92176.html) operation to query the name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * workq
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
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

export class DeleteQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQueueResponseBody;
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
      body: DeleteQueueResponseBody,
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

export class DeleteSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The security group ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class DeleteSecurityGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecurityGroupResponseBody;
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
      body: DeleteSecurityGroupResponseBody,
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

export class DeleteUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the asynchronous mode for this request.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the user.
   * 
   * This parameter is required.
   */
  user?: DeleteUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': DeleteUsersRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE****
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

export class DeleteUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUsersResponseBody;
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
      body: DeleteUsersResponseBody,
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

export class DescribeAutoScaleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScaleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated cluster.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * @example
   * slurm
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scale-out.
   * 
   * @example
   * true
   */
  enableAutoGrow?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-in.
   * 
   * @example
   * true
   */
  enableAutoShrink?: boolean;
  /**
   * @remarks
   * The list of nodes on which auto scaling is not enabled.
   * 
   * @example
   * i-bp19lgqwxb4206t5****,i-bp1g4hvzs9pywrhb****
   */
  excludeNodes?: string;
  /**
   * @remarks
   * The percentage of extra compute nodes. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  extraNodesGrowRatio?: number;
  /**
   * @remarks
   * The interval between two consecutive rounds of scale-in. Valid values: 2 to 10.
   * 
   * @example
   * 10
   */
  growIntervalInMinutes?: number;
  /**
   * @remarks
   * The percentage of each round of scale-out. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  growRatio?: number;
  /**
   * @remarks
   * The timeout period before the scale-out nodes were started. Valid values: 10 to 60.
   * 
   * @example
   * 20
   */
  growTimeoutInMinutes?: number;
  /**
   * @remarks
   * The maximum number of compute nodes in the cluster. This parameter indicates the largest number of nodes that can be added to the cluster.
   * 
   * @example
   * 100
   */
  maxNodesInCluster?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73
   */
  requestId?: string;
  /**
   * @remarks
   * The number of consecutive idle times of a node during the resource shrink check. Valid values: 2 to 5.
   * 
   * @example
   * 3
   */
  shrinkIdleTimes?: number;
  /**
   * @remarks
   * The interval between two consecutive rounds of scale-out. Valid values: 2 to 10.
   * 
   * @example
   * 2
   */
  shrinkIntervalInMinutes?: number;
  /**
   * @remarks
   * The maximum hourly price of the new ECS instance. The value is accurate to three decimal places. It takes effect only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: string;
  /**
   * @remarks
   * The bidding method of the compute nodes. Valid values:
   * 
   * *   NoSpot: The instances of the compute node are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * testu****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      maxNodesInCluster: 'MaxNodesInCluster',
      requestId: 'RequestId',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      maxNodesInCluster: 'number',
      requestId: 'string',
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'string',
      spotStrategy: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScaleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoScaleConfigResponseBody;
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
      body: DescribeAutoScaleConfigResponseBody,
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

export class DescribeClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the list of clusters in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-QKKVqO****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the cluster.
   */
  clusterInfo?: DescribeClusterResponseBodyClusterInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResponseBody;
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
      body: DescribeClusterResponseBody,
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

export class DescribeEstackImageRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
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
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEstackImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of base images.
   */
  imageList?: DescribeEstackImageResponseBodyImageList;
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: DescribeEstackImageResponseBodyImageList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imageList && typeof (this.imageList as any).validate === 'function') {
      (this.imageList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEstackImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEstackImageResponseBody;
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
      body: DescribeEstackImageResponseBody,
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

export class DescribeImagePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of images that you want to purchase. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The ID of an image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp198jigq7l1ga11****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the order. The order can be set only as a purchase order. Valid value: INSTANCE-BUY.
   * 
   * @example
   * INSTANCE-BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The subscription duration of the read-only instance. Valid values:
   * 
   * *   If PriceUnit is set to Day, the valid values of the Period parameter are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, and 30.
   * *   If PriceUnit is set to Month, the valid values of the Period parameter are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   If PriceUnit is set to Year, the valid values of the Period parameter are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Day
   * *   Month
   * *   Year
   * 
   * Default value: Day.
   * 
   * This parameter is required.
   * 
   * @example
   * Day
   */
  priceUnit?: string;
  /**
   * @remarks
   * The stock keeping unit (SKU) of the image. Valid value: package.
   * 
   * This parameter is required.
   * 
   * @example
   * package
   */
  skuCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      imageId: 'ImageId',
      orderType: 'OrderType',
      period: 'Period',
      priceUnit: 'PriceUnit',
      skuCode: 'SkuCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      imageId: 'string',
      orderType: 'string',
      period: 'number',
      priceUnit: 'string',
      skuCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are purchased.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-bp198jigq7l1ga11****
   */
  imageId?: string;
  /**
   * @remarks
   * The original price of the image.
   * 
   * @example
   * 0.8
   */
  originalPrice?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 47ca3ac4-2a03-48f1-8bf2-ba6de0f3****
   */
  requestId?: string;
  /**
   * @remarks
   * The final price of the image.
   * 
   * @example
   * 0.8
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      discountPrice: 'DiscountPrice',
      imageId: 'ImageId',
      originalPrice: 'OriginalPrice',
      requestId: 'RequestId',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      discountPrice: 'number',
      imageId: 'string',
      originalPrice: 'number',
      requestId: 'string',
      tradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImagePriceResponseBody;
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
      body: DescribeImagePriceResponseBody,
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

export class DescribeJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use an asynchronous link to stop the job.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * You can call the [ListJobs](https://help.aliyun.com/document_detail/87251.html) operation to obtain the job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.scheduler****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned job information.
   */
  message?: DescribeJobResponseBodyMessage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9697AD8D-56FA-4C8E-B46C-00AC9***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: DescribeJobResponseBodyMessage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobResponseBody;
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
      body: DescribeJobResponseBody,
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

export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the ECS instances. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The information about the service.
   * 
   * This parameter is required.
   */
  commodities?: DescribePriceRequestCommodities[];
  /**
   * @remarks
   * The type of the order. The order can be set only as a purchase order. Valid value: INSTANCE-BUY.
   * 
   * @example
   * INSTANCE-BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The billing cycle of the Elastic Compute Service (ECS) instances. This parameter takes effect only when the ChargeType parameter is set to PrePaid. Valid values:
   * 
   * *   Month: pay-by-month
   * *   Year: pay-by-year
   * *   Hour: pay-by-hour
   * 
   * Default value: Hour.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  priceUnit?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodities: 'Commodities',
      orderType: 'OrderType',
      priceUnit: 'PriceUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodities: { 'type': 'array', 'itemType': DescribePriceRequestCommodities },
      orderType: 'string',
      priceUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commodities)) {
      $dara.Model.validateArray(this.commodities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of cluster prices. If you query the prices of multiple nodes in the cluster, the sequence of the prices in the returned value of PriceInfo is the same as the sequence of the nodes in the request parameters. For example, the first price in the value of PriceInfo is the price of the first node specified in the request parameters.
   */
  prices?: DescribePriceResponseBodyPrices;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54FF9025-2C2F-42EB-870D-0DF5B0ACF24E
   */
  requestId?: string;
  /**
   * @remarks
   * The total price.
   * 
   * Unit: USD.
   * 
   * @example
   * 1258
   */
  totalTradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      prices: 'Prices',
      requestId: 'RequestId',
      totalTradePrice: 'TotalTradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prices: DescribePriceResponseBodyPrices,
      requestId: 'string',
      totalTradePrice: 'number',
    };
  }

  validate() {
    if(this.prices && typeof (this.prices as any).validate === 'function') {
      (this.prices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceResponseBody;
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
      body: DescribePriceResponseBody,
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

export class DescribeServerlessJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of serverless job IDs or the subtask IDs (array jobs).
   * 
   * > 
   * 
   * *   If the serverless job is an array job, you can specify only the subtask ID. Specify the subtask ID in the format of \\<array job ID>_< subtask index>. For example, 10_3 indicates the subtask whose index is 3 in the array job whose ID is 10.
   * 
   * *   You can specify only a single ID in one request.
   * 
   * This parameter is required.
   */
  jobIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of detailed information about the serverless job.
   */
  jobInfos?: DescribeServerlessJobsResponseBodyJobInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfos: 'JobInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfos: { 'type': 'array', 'itemType': DescribeServerlessJobsResponseBodyJobInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfos)) {
      $dara.Model.validateArray(this.jobInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerlessJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServerlessJobsResponseBody;
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
      body: DescribeServerlessJobsResponseBody,
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

export class EditJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The job array.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-10:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The maximum running time of the job. Valid formats:
   * 
   * *   hh:mm:ss
   * *   mm:ss
   * *   ss
   * 
   * We recommend that you use the hh:mm:ss format. If the maximum running time is 12 hours, set the value to 12:00:00.
   * 
   * @example
   * 12:00:00
   */
  clockTime?: string;
  /**
   * @remarks
   * The command that is used to run the job.
   * 
   * This parameter is required.
   * 
   * @example
   * ./LammpsTest/lammps.pbs
   */
  commandLine?: string;
  /**
   * @remarks
   * The maximum GPU usage required by a single compute node. Valid values: 1 to 8.
   * 
   * The parameter takes effect only when the cluster uses PBS and a compute node is a GPU-accelerated instance.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
   * 
   * @example
   * https://test.oss-cn-beijing.aliyuncs.com/test.py
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The maximum memory usage required by a single compute node. Unit: GB, MB, or KB. The unit is case-insensitive.
   * 
   * @example
   * 1GB
   */
  mem?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * You can call the [ListJobTemplates](https://help.aliyun.com/document_detail/87248.html) operation to obtain the job template name.
   * 
   * This parameter is required.
   * 
   * @example
   * jobTemapleteName
   */
  name?: string;
  /**
   * @remarks
   * The number of the compute nodes. Valid values: 1 to 500.
   * 
   * >  If the parameter is not specified, the Task, Thread, Mem, and Gpu parameters become invalid.
   * 
   * @example
   * 2
   */
  node?: number;
  /**
   * @remarks
   * The path that is used to run the job.
   * 
   * @example
   * ./packageFolder
   */
  packagePath?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 0 to 9. A large value indicates a high priority.
   * 
   * Default value: 0
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * workq
   */
  queue?: string;
  /**
   * @remarks
   * Specifies whether the job can be rerun. Valid values:
   * 
   * *   true: The job can be rerun.
   * *   false: The job cannot be rerun.
   * 
   * @example
   * false
   */
  reRunable?: boolean;
  /**
   * @remarks
   * The name of the user that runs the job.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the users of the cluster.
   * 
   * @example
   * user
   */
  runasUser?: string;
  /**
   * @remarks
   * The output file path of stderr.
   * 
   * @example
   * ./Lammps
   */
  stderrRedirectPath?: string;
  /**
   * @remarks
   * The output file path of stdout.
   * 
   * @example
   * ./LammpsTest
   */
  stdoutRedirectPath?: string;
  /**
   * @remarks
   * The number of tasks required by a single compute node. Valid values: 1 to 1000.
   * 
   * @example
   * 2
   */
  task?: number;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * You can call the [ListJobTemplates](https://help.aliyun.com/document_detail/87248.html) operation to obtain the job template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-job-tmpl-6RxO5y****
   */
  templateId?: string;
  /**
   * @remarks
   * The number of threads required by a single compute node. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  thread?: number;
  /**
   * @remarks
   * The command that is used to decompress the job files downloaded from an OSS bucket. The parameter takes effect only when WithUnzipCmd is set to true. Valid values:
   * 
   * *   tar xzf: decompresses GZIP files.
   * *   tar xf: decompresses TAR files.
   * *   unzip: decompresses ZIP files.
   * 
   * @example
   * tar xzf
   */
  unzipCmd?: string;
  /**
   * @remarks
   * The runtime variables passed to the job. They can be accessed by using environment variables in the executable file.
   * 
   * @example
   * [{Name:,Value:},{Name:,Value:}]
   */
  variables?: string;
  /**
   * @remarks
   * Specifies whether to decompress the job files downloaded from an OSS bucket. Valid values:
   * 
   * *   true: The job files are decompressed.
   * *   false: The job files are not decompressed.
   * 
   * @example
   * true
   */
  withUnzipCmd?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      commandLine: 'CommandLine',
      gpu: 'Gpu',
      inputFileUrl: 'InputFileUrl',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      priority: 'Priority',
      queue: 'Queue',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      templateId: 'TemplateId',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
      withUnzipCmd: 'WithUnzipCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      commandLine: 'string',
      gpu: 'number',
      inputFileUrl: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      priority: 'number',
      queue: 'string',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      templateId: 'string',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
      withUnzipCmd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * ehpc-job-tmpl-6RxO5y****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditJobTemplateResponseBody;
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
      body: EditJobTemplateResponseBody,
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

export class GetAccountingReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The layers at which you want to query the bandwidth and traffic data. Valid values:
   * 
   * *   user: Query by user.
   * *   queue: Query by queue.
   * *   instance: Query by instance.
   * 
   * @example
   * user
   */
  dim?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1577441873
   */
  endTime?: number;
  /**
   * @remarks
   * The actual name of the dimension to be queried. Valid values:
   * 
   * *   If you set the value of the parameter Dim to user, the value of FilterValue is the name of the specified user.
   * *   If you set the value of the parameter Dim to queue, the value of FilterValue is the name of the specified queue.
   * *   If you set the value of the parameter Dim to instance, the value of FilterValue is the instance name.
   * 
   * @example
   * userNo1
   */
  filterValue?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * [{Id: 1.scheduler}]
   */
  jobId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   total_report: Queries the number of CPU cores in different dimensions.
   * *   job_report: Collects the historical node data of a node.
   * *   number_report: Queries job information in different dimensions.
   * 
   * This parameter is required.
   * 
   * @example
   * job_report
   */
  reportType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1576922873
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dim: 'Dim',
      endTime: 'EndTime',
      filterValue: 'FilterValue',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportType: 'ReportType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dim: 'string',
      endTime: 'number',
      filterValue: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportType: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list serialized in the JSON format. The list contains multiple records.
   */
  data?: GetAccountingReportResponseBodyData;
  /**
   * @remarks
   * The list serialized in the JSON format. The list contains the column names of each record in the Data.
   * 
   * @example
   * [\\"user\\",\\"coreTime\\",\\"usedMem\\"]
   */
  metrics?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B1DCB399-9333-4B38-A35A-0BDFABC71881
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of CPU cores in the queried cluster.
   * 
   * @example
   * 261300
   */
  totalCoreTime?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metrics: 'Metrics',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCoreTime: 'TotalCoreTime',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAccountingReportResponseBodyData,
      metrics: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCoreTime: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountingReportResponseBody;
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
      body: GetAccountingReportResponseBody,
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

export class GetAutoScaleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The prefix of the queue name. You can query queues that have a specified prefix.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pbs
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies whether to enable hyper-threading for the ECS instance that is used as the compute node.
   * 
   * >  You can only disable hyper-threading for some instance types. The hyper-threading is enabled for ECS instances by default. For more information, see [Specify and view CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * true
   */
  computeEnableHt?: boolean;
  /**
   * @remarks
   * The configurations of DNS.
   * 
   * @example
   * "{\\"DnsType\\":\\"PrivateZone\\",\\"DnsName\\":\\"xxxxx\\"}"
   */
  dnsConfig?: string;
  /**
   * @remarks
   * The percentage of each round of scale-out. Valid values: 1 to 100.
   * 
   * If you set GrowRatio to 50, the scale-out has two rounds. Each round completes half of the scale-out.
   * 
   * @example
   * true
   */
  enableAutoGrow?: boolean;
  /**
   * @remarks
   * The number of consecutive times that a compute node is idle during the resource scale-in check. Valid values: 2 to 5.
   * 
   * If the parameter is set to 3, a compute node is idle for more than three consecutive times. In this case, the node is released.
   * 
   * @example
   * true
   */
  enableAutoShrink?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * i-bp19lgqwxb4206t5****,i-bp1g4hvzs9pywrhb****
   */
  excludeNodes?: string;
  /**
   * @remarks
   * The instance type of the compute nodes that were automatically added in the queue.
   * 
   * @example
   * 2
   */
  extraNodesGrowRatio?: number;
  /**
   * @remarks
   * The image ID of the compute nodes in the queue.
   * 
   * @example
   * 2
   */
  growIntervalInMinutes?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that can be retained in a queue. Valid values: 0 to 50.
   * 
   * @example
   * 100
   */
  growRatio?: number;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 20
   */
  growTimeoutInMinutes?: number;
  /**
   * @remarks
   * The preemption policy of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * m-bp10txryr4mhrrt1****
   */
  imageId?: string;
  /**
   * @remarks
   * The interval between two consecutive rounds of scale-in. Unit: minutes. Valid values: 2 to 10.
   * 
   * >  An interval may exist during multiple rounds of a scale-out task or between two consecutive scale-out tasks.
   * 
   * @example
   * 300
   */
  maxNodesInCluster?: number;
  /**
   * @remarks
   * The auto scaling configuration of the queue.
   * 
   * >  If auto scaling is enabled for the cluster and queue at the same time, the queue settings prevail.
   */
  queues?: GetAutoScaleConfigResponseBodyQueues;
  /**
   * @remarks
   * The image ID of the compute nodes in the queue.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The suffix of the queue name. You can query queues that have a specified suffix.
   * 
   * @example
   * 3
   */
  shrinkIdleTimes?: number;
  /**
   * @remarks
   * The auto scaling configuration of the queue.
   * 
   * >  If auto scaling is enabled for the cluster and queue at the same time, the queue settings prevail.
   * 
   * @example
   * 2
   */
  shrinkIntervalInMinutes?: number;
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: SSD
   * *   cloud_essd: ESSD
   * *   cloud: basic disk
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The percentage of extra compute nodes. Valid values: 0 to 100.
   * 
   * If you need to add 100 compute nodes and the value of the ExtraNodesGrowRatio parameter is 2, 102 compute nodes are added.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB. Valid values: 40 to 500.
   * 
   * @example
   * 129845258050****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      computeEnableHt: 'ComputeEnableHt',
      dnsConfig: 'DnsConfig',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      imageId: 'ImageId',
      maxNodesInCluster: 'MaxNodesInCluster',
      queues: 'Queues',
      requestId: 'RequestId',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      computeEnableHt: 'boolean',
      dnsConfig: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      imageId: 'string',
      maxNodesInCluster: 'number',
      queues: GetAutoScaleConfigResponseBodyQueues,
      requestId: 'string',
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.queues && typeof (this.queues as any).validate === 'function') {
      (this.queues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoScaleConfigResponseBody;
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
      body: GetAutoScaleConfigResponseBody,
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

export class GetCloudMetricLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The data aggregation interval. Unit: seconds.
   * 
   * Valid values: 1, 10, 60, 600, and 3600.
   * 
   * Default value: 1.
   * 
   * @example
   * 10
   */
  aggregationInterval?: number;
  /**
   * @remarks
   * The data aggregation type. Valid values:
   * 
   * *   sum: the sum of the data
   * *   avg: the average value
   * *   max: the maximum value
   * *   min: the minimum value
   * 
   * Aggregation is disabled by default.
   * 
   * @example
   * avg
   */
  aggregationType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The filter conditions. A JSON-formatted string that contains several key-value pairs. Valid values of the key:
   * 
   * *   InstanceId: the ID of the node
   * *   Hostname: the hostname of the node
   * *   NetworkInterface: the name of the network interface
   * *   DiskDevice: the name of the disk
   * 
   * @example
   * {"Hostname":"compute000"}
   */
  filter?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1583907780
   */
  from?: number;
  /**
   * @remarks
   * The category of the output performance metrics. Separate multiple metrics with commas (,). Valid values:
   * 
   * *   cpu
   * *   memory
   * 
   * @example
   * cpu
   */
  metricCategories?: string;
  /**
   * @remarks
   * The dimensions of the performance metric. Valid values:
   * 
   * *   machine
   * *   process
   * *   network
   * *   disk
   * 
   * @example
   * network
   */
  metricScope?: string;
  /**
   * @remarks
   * Specifies whether to return logs in reverse order of timestamps. Default value: false.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The end of the time range to query. The time is a timestamp. This value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1583907790
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationInterval: 'AggregationInterval',
      aggregationType: 'AggregationType',
      clusterId: 'ClusterId',
      filter: 'Filter',
      from: 'From',
      metricCategories: 'MetricCategories',
      metricScope: 'MetricScope',
      reverse: 'Reverse',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationInterval: 'number',
      aggregationType: 'string',
      clusterId: 'string',
      filter: 'string',
      from: 'number',
      metricCategories: 'string',
      metricScope: 'string',
      reverse: 'boolean',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried performance metric data.
   */
  metricLogs?: GetCloudMetricLogsResponseBodyMetricLogs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 015C2C4D-1884-4EB7-BCD3-C5BB8D7E56DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricLogs: 'MetricLogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricLogs: GetCloudMetricLogsResponseBodyMetricLogs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metricLogs && typeof (this.metricLogs as any).validate === 'function') {
      (this.metricLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudMetricLogsResponseBody;
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
      body: GetCloudMetricLogsResponseBody,
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

export class GetCloudMetricProfilingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The profiling ID. You can call the [ListCloudMetricProfilings](https://help.aliyun.com/document_detail/188711.html) operation to obtain the profiling ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-i-bplukzqgl****_21687_2019-09-09-02-37-40
   */
  profilingId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      profilingId: 'ProfilingId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      profilingId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0DD6F715-85EE-4EA6-BDC4-48A75B719068
   */
  requestId?: string;
  /**
   * @remarks
   * The list of profiling results.
   */
  svgUrls?: GetCloudMetricProfilingResponseBodySvgUrls;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      svgUrls: 'SvgUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      svgUrls: GetCloudMetricProfilingResponseBodySvgUrls,
    };
  }

  validate() {
    if(this.svgUrls && typeof (this.svgUrls as any).validate === 'function') {
      (this.svgUrls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudMetricProfilingResponseBody;
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
      body: GetCloudMetricProfilingResponseBody,
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

export class GetClusterVolumesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-gh5WKb****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8BCFD52E-0336-4490-AE7D-F560F106****
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the file system mounted to the E-HPC cluster.
   */
  volumes?: GetClusterVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      volumes: GetClusterVolumesResponseBodyVolumes,
    };
  }

  validate() {
    if(this.volumes && typeof (this.volumes as any).validate === 'function') {
      (this.volumes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterVolumesResponseBody;
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
      body: GetClusterVolumesResponseBody,
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

export class GetHybridClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the on-premises compute node. You can call this operation to query the configurations of the on-premises compute node.
   * 
   * By default, the operation queries the configurations of a cluster.
   * 
   * @example
   * testNode
   */
  node?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      node: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations returned.
   * 
   * *   If the parameter Node is null, you can obtain the configurations of the hybrid cloud cluster.
   * *   If the parameter Node is a specified on-premises compute node, you can obtain the configurations of the on-premises compute node.
   * 
   * This parameter is returned in the ini format. You can use this parameter to configure on-premises cluster nodes.
   * 
   * @example
   * ClNjaGcyI6W119Cg****
   */
  clusterConfig?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'ClusterConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
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

export class GetHybridClusterConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHybridClusterConfigResponseBody;
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
      body: GetHybridClusterConfigResponseBody,
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

export class GetIfEcsTypeSupportHtConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Hyper-Threading is enabled by default. Valid values:
   * 
   * *   true: Hyper-Threading is enabled by default.
   * *   false: Hyper-Threading is disabled by default.
   * 
   * >  By default, Hyper-Threading is not enabled for Super Computing Cluster (SCC) instance families but is enabled for other instance families.
   * 
   * @example
   * true
   */
  defaultHtEnabled?: boolean;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 80CA7A93-7291-4402-B63D-86DF334E0A1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether hyper-threading is supported. Valid values:
   * 
   * *   true: Hyper-threading is supported.
   * *   false: Hyper-threading is not supported.
   * 
   * @example
   * true
   */
  supportHtConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultHtEnabled: 'DefaultHtEnabled',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      supportHtConfig: 'SupportHtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultHtEnabled: 'boolean',
      instanceType: 'string',
      requestId: 'string',
      supportHtConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIfEcsTypeSupportHtConfigResponseBody;
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
      body: GetIfEcsTypeSupportHtConfigResponseBody,
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

export class GetJobLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The node on which the job runs.
   * 
   * *   If the job is completed, you do not need to specify the parameter.
   * *   If the job is running, you must specify the parameter.
   * 
   * @example
   * compute000
   */
  execHost?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.scheduler****
   */
  jobId?: string;
  /**
   * @remarks
   * The position where logs start to be read.
   * 
   * Unit: bits
   * 
   * Default value: 0
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The maximum size of logs that you can read in a single request.
   * 
   * Unit: bits
   * 
   * Default value: 1024
   * 
   * @example
   * 1024
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      execHost: 'ExecHost',
      jobId: 'JobId',
      offset: 'Offset',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      execHost: 'string',
      jobId: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the error logs. The content is encoded in Base64.
   * 
   * @example
   * c2xlZXAgMzA=
   */
  errorLog?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 1.scheduler****
   */
  jobId?: string;
  /**
   * @remarks
   * The content of the output logs. The content is encoded in Base64.
   * 
   * @example
   * c2xlZXAgMzA=
   */
  outputLog?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorLog: 'ErrorLog',
      jobId: 'JobId',
      outputLog: 'OutputLog',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLog: 'string',
      jobId: 'string',
      outputLog: 'string',
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

export class GetJobLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobLogResponseBody;
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
      body: GetJobLogResponseBody,
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

export class GetPostScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-sh-EnjshUxn
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the region where the cluster resides.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The post-installation scripts.
   */
  postInstallScripts?: GetPostScriptsResponseBodyPostInstallScripts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      postInstallScripts: 'PostInstallScripts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postInstallScripts: { 'type': 'array', 'itemType': GetPostScriptsResponseBodyPostInstallScripts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.postInstallScripts)) {
      $dara.Model.validateArray(this.postInstallScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPostScriptsResponseBody;
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
      body: GetPostScriptsResponseBody,
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

export class GetSchedulerInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The detailed settings of the scheduler.
   * 
   * This parameter is required.
   */
  scheduler?: GetSchedulerInfoRequestScheduler[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      scheduler: { 'type': 'array', 'itemType': GetSchedulerInfoRequestScheduler },
    };
  }

  validate() {
    if(Array.isArray(this.scheduler)) {
      $dara.Model.validateArray(this.scheduler);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF****
   */
  requestId?: string;
  /**
   * @remarks
   * The settings of the scheduler.
   */
  schedInfo?: GetSchedulerInfoResponseBodySchedInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schedInfo: 'SchedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedInfo: { 'type': 'array', 'itemType': GetSchedulerInfoResponseBodySchedInfo },
    };
  }

  validate() {
    if(Array.isArray(this.schedInfo)) {
      $dara.Model.validateArray(this.schedInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSchedulerInfoResponseBody;
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
      body: GetSchedulerInfoResponseBody,
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

export class GetVisualServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVisualServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * inactive (dead) , ws service is not running.
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class GetVisualServiceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVisualServiceStatusResponseBody;
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
      body: GetVisualServiceStatusResponseBody,
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

export class InitializeEHPCRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the service-linked role is created.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to obtain the IDs of regions supported by E-HPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the service for which you must create a service-linked role. Valid values:
   * 
   * *   E-HPC: You must create the AliyunServiceRoleForEHPC service-linked role.
   * *   E-HPC Instant: You must create the AliyunServiceRoleForEHPCManagedNetwork service-linked role.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * E-HPC
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeEHPCResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class InitializeEHPCResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitializeEHPCResponseBody;
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
      body: InitializeEHPCResponseBody,
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

export class InstallSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the software that you want to install.
   * 
   * You can call the [ListSoftwares](https://help.aliyun.com/document_detail/87216.html) operation to query the software that can be installed.
   * 
   * This parameter is required.
   * 
   * @example
   * ABYSS_2.1.5
   */
  application?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwareResponseBody extends $dara.Model {
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

export class InstallSoftwareResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallSoftwareResponseBody;
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
      body: InstallSoftwareResponseBody,
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

export class InvokeShellCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The content of the command. The content must be 2 to 2,048 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * echo "hello world"
   */
  command?: string;
  /**
   * @remarks
   * The information of nodes on which the command is run.
   */
  instance?: InvokeShellCommandRequestInstance[];
  /**
   * @remarks
   * The timeout period. If a command times out, the command process will be terminated. Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The working directory of the command. Default value: `/root`.
   * 
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      command: 'Command',
      instance: 'Instance',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      command: 'string',
      instance: { 'type': 'array', 'itemType': InvokeShellCommandRequestInstance },
      timeout: 'number',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the command. It is used to query the execution status of the command.
   * 
   * @example
   * c-hz01v8vudql****
   */
  commandId?: string;
  /**
   * @remarks
   * The list of IDs of the instances on which you want to run the command.
   */
  instanceIds?: InvokeShellCommandResponseBodyInstanceIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: InvokeShellCommandResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeShellCommandResponseBody;
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
      body: InvokeShellCommandResponseBody,
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

export class ListAvailableEcsTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the ECS instances. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * Specifies whether the ECS instances are sold out. Valid values:
   * 
   * *   false: available
   * *   true: sold out
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  showSoldOut?: boolean;
  /**
   * @remarks
   * The preemption policy of the ECS instances. Valid values:
   * 
   * *   NoSpot: The ECS instances are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The ECS instances are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      showSoldOut: 'ShowSoldOut',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      showSoldOut: 'boolean',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance family to which the instance type belongs.
   */
  instanceTypeFamilies?: ListAvailableEcsTypesResponseBodyInstanceTypeFamilies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9DD3AF8-1F91-4075-8669-55D10E45****
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether preemptible instances are supported. Valid values:
   * 
   * *   false: not supported
   * *   true: supported
   * 
   * @example
   * false
   */
  supportSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilies: 'InstanceTypeFamilies',
      requestId: 'RequestId',
      supportSpotInstance: 'SupportSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilies: ListAvailableEcsTypesResponseBodyInstanceTypeFamilies,
      requestId: 'string',
      supportSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.instanceTypeFamilies && typeof (this.instanceTypeFamilies as any).validate === 'function') {
      (this.instanceTypeFamilies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableEcsTypesResponseBody;
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
      body: ListAvailableEcsTypesResponseBody,
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

export class ListCloudMetricProfilingsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The profiling information of the cluster.
   */
  profilings?: ListCloudMetricProfilingsResponseBodyProfilings;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A05F620-ED46-4A57-95F1-C67D6D3C5DD2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      profilings: 'Profilings',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      profilings: ListCloudMetricProfilingsResponseBodyProfilings,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.profilings && typeof (this.profilings as any).validate === 'function') {
      (this.profilings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudMetricProfilingsResponseBody;
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
      body: ListCloudMetricProfilingsResponseBody,
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

export class ListClusterLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queried operations logs.
   */
  logs?: ListClusterLogsResponseBodyLogs;
  /**
   * @remarks
   * The page number.
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF6667
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      logs: ListClusterLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.logs && typeof (this.logs as any).validate === 'function') {
      (this.logs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterLogsResponseBody;
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
      body: ListClusterLogsResponseBody,
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

export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  clusters?: ListClustersResponseBodyClusters;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: ListClustersResponseBodyClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clusters && typeof (this.clusters as any).validate === 'function') {
      (this.clusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
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
      body: ListClustersResponseBody,
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

export class ListClustersMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  clusters?: ListClustersMetaResponseBodyClusters;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DD517102-B314-4665-BDAC-A32DE7834D02
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: ListClustersMetaResponseBodyClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clusters && typeof (this.clusters as any).validate === 'function') {
      (this.clusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersMetaResponseBody;
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
      body: ListClustersMetaResponseBody,
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

export class ListCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the command.
   * 
   * @example
   * c-hz01v8vudql****
   */
  commandId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Page number starts from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.\\
   * Valid values: 1 to 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of commands.
   */
  commands?: ListCommandsResponseBodyCommands;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: ListCommandsResponseBodyCommands,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.commands && typeof (this.commands as any).validate === 'function') {
      (this.commands as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCommandsResponseBody;
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
      body: ListCommandsResponseBody,
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

export class ListCommunityImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The tag of the base operating system (BOS).
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The ID of the cluster. If the cluster supports multiple operating systems, all community images in the region where the cluster resides are queried.
   * 
   * If you do not specify the cluster ID, the community images that are supported by all clusters are queried.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance. If you do not specify the instance type, the community images that are supported by all instance types are queried.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      clusterId: 'ClusterId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      clusterId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommunityImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom images and shared images that are supported by the E-HPC.
   */
  images?: ListCommunityImagesResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: ListCommunityImagesResponseBodyImages,
      requestId: 'string',
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommunityImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCommunityImagesResponseBody;
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
      body: ListCommunityImagesResponseBody,
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

export class ListCpfsFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * By default, the information about all CPFSs and their mount targets within your account are queried.
   * 
   * @example
   * 096751****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried file systems.
   */
  fileSystemList?: ListCpfsFileSystemsResponseBodyFileSystemList;
  /**
   * @remarks
   * The page number.
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
   * The request ID.
   * 
   * @example
   * 2B900AFE-C938-4551-86E9-97E231BBC876
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemList: 'FileSystemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemList: ListCpfsFileSystemsResponseBodyFileSystemList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystemList && typeof (this.fileSystemList as any).validate === 'function') {
      (this.fileSystemList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCpfsFileSystemsResponseBody;
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
      body: ListCpfsFileSystemsResponseBody,
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

export class ListCurrentClientVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The latest version number of ehpcutil.
   * 
   * @example
   * 1.1.1
   */
  clientVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
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

export class ListCurrentClientVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCurrentClientVersionResponseBody;
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
      body: ListCurrentClientVersionResponseBody,
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

export class ListCustomImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The image tag of the operating system. The tag is used only for management nodes.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * *   If you specify a value for this parameter, all community images in the region where the cluster resides are queried.
   * *   If you do not specify a value for this parameter, the community images that are supported by all clusters are queried.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   self: custom image
   * *   others: shared image
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The instance type of the Elastic Compute Service (ECS) instance. If you do not specify the instance type, the community images that are supported by all instance types are queried.
   * 
   * @example
   * ecs.n1.tiny
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      clusterId: 'ClusterId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      clusterId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of community images, including custom images and shared images.
   */
  images?: ListCustomImagesResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: ListCustomImagesResponseBodyImages,
      requestId: 'string',
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomImagesResponseBody;
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
      body: ListCustomImagesResponseBody,
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

export class ListFileSystemWithMountTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried file systems.
   */
  fileSystemList?: ListFileSystemWithMountTargetsResponseBodyFileSystemList;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25638B77-2F19-5DC5-B578-7790CE92052B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemList: 'FileSystemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemList: ListFileSystemWithMountTargetsResponseBodyFileSystemList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystemList && typeof (this.fileSystemList as any).validate === 'function') {
      (this.fileSystemList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFileSystemWithMountTargetsResponseBody;
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
      body: ListFileSystemWithMountTargetsResponseBody,
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

export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The image tag of the operating system. The tag is used only for management nodes.
   * 
   * @example
   * CentOS_7.2_64
   */
  baseOsTag?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * *   If a value is passed to the parameter, the list of images that are supported by the specified instance type is queried.
   * *   If no value is passed to the parameter, the list of images that are supported by all instance types is queried.
   * 
   * @example
   * ecs.n1.medium
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of images that are supported by E-HPC.
   */
  osTags?: ListImagesResponseBodyOsTags;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      osTags: 'OsTags',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osTags: ListImagesResponseBodyOsTags,
      requestId: 'string',
    };
  }

  validate() {
    if(this.osTags && typeof (this.osTags as any).validate === 'function') {
      (this.osTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
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
      body: ListImagesResponseBody,
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

export class ListInstalledSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DDCA0E7B-03E7-430D-810C-0D508539****
   */
  requestId?: string;
  /**
   * @remarks
   * The installed software.
   */
  softwareList?: ListInstalledSoftwareResponseBodySoftwareList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwareList: 'SoftwareList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwareList: ListInstalledSoftwareResponseBodySoftwareList,
    };
  }

  validate() {
    if(this.softwareList && typeof (this.softwareList as any).validate === 'function') {
      (this.softwareList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstalledSoftwareResponseBody;
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
      body: ListInstalledSoftwareResponseBody,
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

export class ListInvocationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the command.
   * 
   * You can call the [ListCommands](https://help.aliyun.com/document_detail/87388.html) operation to query the command ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-hz01v8x80o3****
   */
  commandId?: string;
  /**
   * @remarks
   * The information of nodes on which the command is run.
   */
  instance?: ListInvocationResultsRequestInstance[];
  /**
   * @remarks
   * The status of the command that you want to query. Valid values:
   * 
   * *   Finished
   * *   Running
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Finished
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Page numbers start from 1.
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
      instance: 'Instance',
      invokeRecordStatus: 'InvokeRecordStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
      instance: { 'type': 'array', 'itemType': ListInvocationResultsRequestInstance },
      invokeRecordStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the command.
   */
  invocationResults?: ListInvocationResultsResponseBodyInvocationResults;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocationResults: 'InvocationResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResults: ListInvocationResultsResponseBodyInvocationResults,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.invocationResults && typeof (this.invocationResults as any).validate === 'function') {
      (this.invocationResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInvocationResultsResponseBody;
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
      body: ListInvocationResultsResponseBody,
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

export class ListInvocationStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The command ID.
   * 
   * You can call the [ListCommands](https://help.aliyun.com/document_detail/87388.html) operation to query the command ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-hz01v8x80o3****
   */
  commandId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-hz01v8x80o3****
   */
  commandId?: string;
  /**
   * @remarks
   * An array of execution statuses. An entry is returned for each node.
   */
  invokeInstances?: ListInvocationStatusResponseBodyInvokeInstances;
  /**
   * @remarks
   * The status of the command. Valid values:
   * 
   * *   Finished: The execution of the command finished.
   * *   Running: The command is being executed.
   * *   Failed: The command failed to be executed.
   * *   Stopped: The execution of the command stopped.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      invokeInstances: 'InvokeInstances',
      invokeStatus: 'InvokeStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      invokeInstances: ListInvocationStatusResponseBodyInvokeInstances,
      invokeStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.invokeInstances && typeof (this.invokeInstances as any).validate === 'function') {
      (this.invokeInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInvocationStatusResponseBody;
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
      body: ListInvocationStatusResponseBody,
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

export class ListJobTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the job template.
   * 
   * You can call the [ListJobTemplates](https://help.aliyun.com/document_detail/87248.html) operation to obtain the job template name.
   * 
   * @example
   * jobtemplateName
   */
  name?: string;
  /**
   * @remarks
   * The page number to return. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of job templates.
   */
  templates?: ListJobTemplatesResponseBodyTemplates;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: ListJobTemplatesResponseBodyTemplates,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobTemplatesResponseBody;
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
      body: ListJobTemplatesResponseBody,
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

export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the user that runs the job.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the users in the cluster.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the job can be rerun. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  rerunable?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   all
   * *   finished
   * *   notfinish
   * 
   * @example
   * finished
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rerunable: 'Rerunable',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rerunable: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: ListJobsResponseBodyJobs;
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: ListJobsResponseBodyJobs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.jobs && typeof (this.jobs as any).validate === 'function') {
      (this.jobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
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

export class ListJobsWithFiltersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable asynchronous query.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The latest time when a job is submitted. The value is a UNIX timestamp, which represents the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1647428667
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The earliest time when a job is submitted. The value is a UNIX timestamp, which represents the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1647427667
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The order in which jobs are sorted based on the execution time. Valid values:
   * 
   * *   asc: ascending order
   * *   desc: descending order
   * 
   * @example
   * asc
   */
  executeOrder?: string;
  /**
   * @remarks
   * The name of the job. Fuzzy search is supported.
   * 
   * @example
   * job1
   */
  jobName?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   all
   * *   finished
   * *   notfinish
   * 
   * Default value: all.
   * 
   * @example
   * finished
   */
  jobStatus?: string;
  /**
   * @remarks
   * The information about the computing nodes that are used to run the job.
   */
  nodes?: string[];
  /**
   * @remarks
   * The page number to return.
   * 
   * Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The order in which jobs are sorted based on the time when they queue. Valid values:
   * 
   * *   asc: ascending order
   * *   desc: descending order
   * 
   * @example
   * desc
   */
  pendOrder?: string;
  /**
   * @remarks
   * The information about the queues in which the job is run.
   */
  queues?: string[];
  /**
   * @remarks
   * The ID of the region. You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to query the list of regions where E-HPC is supported.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The order in which jobs are sorted based on the time when they are submitted. Valid values:
   * 
   * *   asc: ascending order
   * *   desc: descending order
   * 
   * @example
   * asc
   */
  submitOrder?: string;
  /**
   * @remarks
   * The users that run the job.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      executeOrder: 'ExecuteOrder',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pendOrder: 'PendOrder',
      queues: 'Queues',
      regionId: 'RegionId',
      submitOrder: 'SubmitOrder',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      executeOrder: 'string',
      jobName: 'string',
      jobStatus: 'string',
      nodes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      pendOrder: 'string',
      queues: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      submitOrder: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  jobs?: ListJobsWithFiltersResponseBodyJobs[];
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsWithFiltersResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsWithFiltersResponseBody;
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
      body: ListJobsWithFiltersResponseBody,
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

export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The filter options of the node list.
   * 
   * Format: {"status":"node_status"}. Replace node_status with the node status. Valid values of node_status:
   * 
   * *   uninit: The node is being installed.
   * *   exception: An exception occurred on the node.
   * *   running: The node is running.
   * *   initing: The node is being initialized.
   * *   releasing: The node is being released.
   * *   untracking: The node is not added to the cluster.
   * *   stopped: The node is stopped.
   * 
   * @example
   * {"status":"running"}
   */
  filter?: string;
  /**
   * @remarks
   * The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
   * 
   * @example
   * test-HostName
   */
  hostName?: string;
  /**
   * @remarks
   * The prefix of the hostname. You can query nodes that have a specified prefix.
   * 
   * @example
   * compute
   */
  hostNamePrefix?: string;
  /**
   * @remarks
   * The suffix of the hostname. You can query nodes that have a specified suffix.
   * 
   * @example
   * 01
   */
  hostNameSuffix?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP address of the node.
   * 
   * @example
   * ``172.16.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * @example
   * Manager
   */
  role?: string;
  /**
   * @remarks
   * The sorting method of the node list. Valid values:
   * 
   * *   Forward: sorts the nodes in chronological order.
   * *   Backward: sorts the nodes in reverse chronological order.
   * 
   * Default value: Forward.
   * 
   * >  This parameter is used together with the SortBy parameter. If you set SortBy to AddedTime and set Sequence to Forward, nodes are queried in ascending order of time that they are added.
   * 
   * @example
   * Forward
   */
  sequence?: string;
  /**
   * @remarks
   * The sorting method of the node list. Valid values:
   * 
   * *   AddedTime: sorts the nodes by the time that they are added.
   * *   HostName: sorts the nodes by their host names.
   * 
   * @example
   * AddedTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      filter: 'Filter',
      hostName: 'HostName',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddress: 'PrivateIpAddress',
      role: 'Role',
      sequence: 'Sequence',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      filter: 'string',
      hostName: 'string',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddress: 'string',
      role: 'string',
      sequence: 'string',
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

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: ListNodesResponseBodyNodes;
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89A1AC0F-4A6C-4F3D-98F9-BEF9A823****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: ListNodesResponseBodyNodes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
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
      body: ListNodesResponseBody,
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

export class ListNodesByQueueRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable asynchronous query.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * workq
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: ListNodesByQueueResponseBodyNodes;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B405FF19-2D5F-4489-A84C-BC15CC1B24BD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: ListNodesByQueueResponseBodyNodes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesByQueueResponseBody;
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
      body: ListNodesByQueueResponseBody,
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

export class ListNodesNoPagingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
   * 
   * @example
   * Compute0
   */
  hostName?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * Default value: Compute.
   * 
   * @example
   * Compute
   */
  role?: string;
  /**
   * @remarks
   * The sorting method of the node list. Valid values:
   * 
   * *   Forward: sorts the nodes in chronological order.
   * *   Backward: sorts the nodes in reverse chronological order.
   * 
   * Default value: Forward.
   * 
   * @example
   * Forward
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostName: 'HostName',
      role: 'Role',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostName: 'string',
      role: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: ListNodesNoPagingResponseBodyNodes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: ListNodesNoPagingResponseBodyNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesNoPagingResponseBody;
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
      body: ListNodesNoPagingResponseBody,
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

export class ListPreferredEcsTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the ECS instances. Valid values:
   * 
   * *   PostPaid
   * *   PrePaid
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The bidding policy of the ECS instance. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The list of recommended ECS instances. Each SeriesInfo element contains the recommended ECS instance types for various nodes in the E-HPC cluster.
   */
  series?: ListPreferredEcsTypesResponseBodySeries;
  /**
   * @remarks
   * Indicates whether preemptible instances are supported.
   * 
   * @example
   * true
   */
  supportSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      series: 'Series',
      supportSpotInstance: 'SupportSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      series: ListPreferredEcsTypesResponseBodySeries,
      supportSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.series && typeof (this.series as any).validate === 'function') {
      (this.series as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPreferredEcsTypesResponseBody;
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
      body: ListPreferredEcsTypesResponseBody,
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

export class ListQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable asynchronous query.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried cluster queues.
   */
  queues?: ListQueuesResponseBodyQueues;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C6E5005C-00B0-4F27-98BB-95AB88016C22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queues: 'Queues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queues: ListQueuesResponseBodyQueues,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queues && typeof (this.queues as any).validate === 'function') {
      (this.queues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueuesResponseBody;
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
      body: ListQueuesResponseBody,
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

export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of regions.
   */
  regions?: ListRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: ListRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
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

export class ListSecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D9A3378-61CA-4415-BEB0-1168C2A15975
   */
  requestId?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroups?: ListSecurityGroupsResponseBodySecurityGroups;
  /**
   * @remarks
   * The total number of security groups that are assigned to the E-HPC cluster.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroups: ListSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.securityGroups && typeof (this.securityGroups as any).validate === 'function') {
      (this.securityGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecurityGroupsResponseBody;
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
      body: ListSecurityGroupsResponseBody,
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

export class ListServerlessJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of serverless job IDs or subtask IDs (array jobs).
   */
  jobIds?: string[];
  /**
   * @remarks
   * The names of the serverless jobs.
   */
  jobNames?: string[];
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
   * The number of entries per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to query the list of regions where E-HPC is supported.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to sort the serverless jobs by the job start time. Valid values:
   * 
   * *   Asc: ascending order.
   * *   Desc: descending order.
   * 
   * @example
   * Asc
   */
  startOrder?: string;
  /**
   * @remarks
   * The status of the serverless job. Valid values:
   * 
   * *   All
   * *   Pending
   * *   Running
   * *   Succeeded
   * *   Canceled
   * *   Failed
   * 
   * Default value: All.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * Specifies whether to sort the serverless jobs by the job submission time. Valid values:
   * 
   * *   Asc: ascending order.
   * *   Desc: descending order.
   * 
   * @example
   * asc
   */
  submitOrder?: string;
  /**
   * @remarks
   * The latest time at which the job is submitted.
   * 
   * >  You can use this parameter to query the job list based on the job submission time.
   * 
   * @example
   * 1659521430
   */
  submitTimeEnd?: string;
  /**
   * @remarks
   * The earliest time at which the job is submitted.
   * 
   * >  You can use this parameter to query the job list based on the job submission time.
   * 
   * @example
   * 1647427667
   */
  submitTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
      jobNames: 'JobNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startOrder: 'StartOrder',
      state: 'State',
      submitOrder: 'SubmitOrder',
      submitTimeEnd: 'SubmitTimeEnd',
      submitTimeStart: 'SubmitTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
      jobNames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startOrder: 'string',
      state: 'string',
      submitOrder: 'string',
      submitTimeEnd: 'string',
      submitTimeStart: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    if(Array.isArray(this.jobNames)) {
      $dara.Model.validateArray(this.jobNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of serverless jobs.
   */
  jobs?: ListServerlessJobsResponseBodyJobs[];
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListServerlessJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServerlessJobsResponseBody;
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
      body: ListServerlessJobsResponseBody,
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

export class ListSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the E-HPC client.
   * 
   * You can call the [ListCurrentClientVersion](https://help.aliyun.com/document_detail/87223.html) operation to query the E-HPC client version.
   * 
   * @example
   * 1.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The image tag of the cluster.
   * 
   * You can use the [ListImages](https://help.aliyun.com/document_detail/87213.html) to query the image tag of the cluster.
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      ehpcVersion: 'EhpcVersion',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ehpcVersion: 'string',
      osTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of the information about the software installed in the cluster.
   */
  softwares?: ListSoftwaresResponseBodySoftwares;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwares: ListSoftwaresResponseBodySoftwares,
    };
  }

  validate() {
    if(this.softwares && typeof (this.softwares as any).validate === 'function') {
      (this.softwares as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSoftwaresResponseBody;
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
      body: ListSoftwaresResponseBody,
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0axxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to cluster, which indicates E-HPC clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is required for the next query. If the NextToken parameter is empty, no subsequent query is available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0axxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 484256DA-D816-44D2-9D86-B6EE4D5BA78C
   */
  requestId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
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

export class ListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the response history of the asynchronous API operation. Valid values:
   * 
   * *   true: displays the current response and response history of the asynchronous API operation.
   * *   false: displays only the current response of the asynchronous API operation. If no tasks are running, `[]` is returned.
   * 
   * Default value: false.
   * 
   * >  If you specify the TaskId parameter, the Archived parameter is invalid.
   * 
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Valid values: 1 to 999.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task ID. You can call the following asynchronous API operations to obtain the task ID.
   * 
   * *   [CreateCluster](https://help.aliyun.com/document_detail/87100.html)
   * *   [StartCluster](https://help.aliyun.com/document_detail/200345.html)
   * *   [StopCluster](https://help.aliyun.com/document_detail/200346.html)
   * *   [DeleteCluster](https://help.aliyun.com/document_detail/87110.html)
   * *   [AddNodes](https://help.aliyun.com/document_detail/87147.html)
   * *   [StartNodes](https://help.aliyun.com/document_detail/87159.html)
   * *   [ResetNodes](https://help.aliyun.com/document_detail/87158.html)
   * *   [StopNodes](https://help.aliyun.com/document_detail/87160.html)
   * *   [DeleteNodes](https://help.aliyun.com/document_detail/87155.html)
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      archived: 'Archived',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * The request ID.
   * 
   * @example
   * 89A1AC0F-4A6C-4F3D-98F9-BEF9A823****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tasks.
   */
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
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
      body: ListTasksResponseBody,
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

export class ListUpgradeClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpgradeClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The update records of ehpcutil in the cluster.
   */
  clientRecords?: ListUpgradeClientsResponseBodyClientRecords[];
  /**
   * @remarks
   * The current version of ehpcutil in the cluster.
   * 
   * @example
   * 1.2.21
   */
  currentVersion?: string;
  /**
   * @remarks
   * The latest version of ehpcutil that is released.
   * 
   * @example
   * 1.2.22
   */
  latestVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89A1AC0F-4A6C-4F3D-98F9-BEF9A823****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientRecords: 'ClientRecords',
      currentVersion: 'CurrentVersion',
      latestVersion: 'LatestVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientRecords: { 'type': 'array', 'itemType': ListUpgradeClientsResponseBodyClientRecords },
      currentVersion: 'string',
      latestVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientRecords)) {
      $dara.Model.validateArray(this.clientRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpgradeClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUpgradeClientsResponseBody;
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
      body: ListUpgradeClientsResponseBody,
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

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users.
   */
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: ListUsersResponseBodyUsers,
    };
  }

  validate() {
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
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

export class ListUsersAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * t-hz02xltxaex1q80
   */
  asyncId?: string;
  /**
   * @remarks
   * The ID of the E-HPC cluster. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-vu7c2WkVGx
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.\\
   * Valid values: 1 to 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      asyncId: 'AsyncId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * t-sh03egi3mls****
   */
  asyncId?: string;
  /**
   * @remarks
   * The status of the asynchronous task.
   * 
   * @example
   * Success
   */
  asyncStatus?: string;
  /**
   * @remarks
   * The number of the page returned. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A05F620-ED46-4A57-95F1-C67D6D3C5DD2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of users.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users.
   */
  users?: ListUsersAsyncResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      asyncId: 'AsyncId',
      asyncStatus: 'AsyncStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncId: 'string',
      asyncStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: ListUsersAsyncResponseBodyUsers,
    };
  }

  validate() {
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersAsyncResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersAsyncResponseBody;
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
      body: ListUsersAsyncResponseBody,
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

export class ListVolumesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information of file systems that are mounted on E-HPC clusters.
   */
  volumes?: ListVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      volumes: ListVolumesResponseBodyVolumes,
    };
  }

  validate() {
    if(this.volumes && typeof (this.volumes as any).validate === 'function') {
      (this.volumes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVolumesResponseBody;
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
      body: ListVolumesResponseBody,
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

export class ModifyClusterAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The new cluster description.
   * 
   * @example
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the images.
   * 
   * @example
   * centos_7_06_64_20G_alibase_2019071****
   */
  imageId?: string;
  /**
   * @remarks
   * The new image type of the cluster. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * *   marketplace: Alibaba Cloud Marketplace image
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The new cluster name.
   * 
   * @example
   * cluster1
   */
  name?: string;
  /**
   * @remarks
   * The type of the node to which you want to bind the RAM role.
   */
  ramNodeTypes?: string[];
  /**
   * @remarks
   * The name of the instance RAM role.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The parameters that are used to connect to the Windows AD server.
   */
  winAdPar?: ModifyClusterAttributesRequestWinAdPar;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      name: 'Name',
      ramNodeTypes: 'RamNodeTypes',
      ramRoleName: 'RamRoleName',
      winAdPar: 'WinAdPar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      name: 'string',
      ramNodeTypes: { 'type': 'array', 'itemType': 'string' },
      ramRoleName: 'string',
      winAdPar: ModifyClusterAttributesRequestWinAdPar,
    };
  }

  validate() {
    if(Array.isArray(this.ramNodeTypes)) {
      $dara.Model.validateArray(this.ramNodeTypes);
    }
    if(this.winAdPar && typeof (this.winAdPar as any).validate === 'function') {
      (this.winAdPar as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7336
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

export class ModifyClusterAttributesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterAttributesResponseBody;
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
      body: ModifyClusterAttributesResponseBody,
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

export class ModifyUserGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use asynchronous message links to change the user group.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users. You can specify 1 to 100 users.
   * 
   * This parameter is required.
   */
  user?: ModifyUserGroupsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserGroupsRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class ModifyUserGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserGroupsResponseBody;
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
      body: ModifyUserGroupsResponseBody,
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

export class ModifyUserPasswordsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the asynchronous mode for this request.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users. You can specify 1 to 100 users.
   * 
   * This parameter is required.
   */
  user?: ModifyUserPasswordsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserPasswordsRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class ModifyUserPasswordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserPasswordsResponseBody;
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
      body: ModifyUserPasswordsResponseBody,
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

export class ModifyVisualServicePasswdRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The password that you can use to remotely connect to the visualization service over the VNC. The password must be 6 characters in length and must contain letters and digits.
   * 
   * >  You must call the API operation over HTTPS to ensure that the password remains confidential.
   * 
   * This parameter is required.
   * 
   * @example
   * 1254****
   */
  passwd?: string;
  /**
   * @remarks
   * The username of the cluster. Set the value to root.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  runasUser?: string;
  /**
   * @remarks
   * The password that corresponds to the username specified by RunasUser.
   * 
   * This parameter is required.
   * 
   * @example
   * 2145****
   */
  runasUserPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      passwd: 'Passwd',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      passwd: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service started.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE6880
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class ModifyVisualServicePasswdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyVisualServicePasswdResponseBody;
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
      body: ModifyVisualServicePasswdResponseBody,
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

export class PullImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-nkKsP3****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the image. Default value: shifter.
   * 
   * @example
   * shifter
   */
  containerType?: string;
  /**
   * @remarks
   * The tag of the image. Default value: latest.
   * 
   * @example
   * latest
   */
  imageTag?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * centos
   */
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerType: 'ContainerType',
      imageTag: 'ImageTag',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerType: 'string',
      imageTag: 'string',
      repository: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 29d3d9Ee-8eCB-5013-A1c2-1CeD19C6CfFe
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

export class PullImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PullImageResponseBody;
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
      body: PullImageResponseBody,
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

export class QueryServicePackAndPriceResponseBody extends $dara.Model {
  /**
   * @example
   * 167
   */
  chargeAmount?: number;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0.418
   */
  discountPrice?: number;
  /**
   * @example
   * 3191
   */
  originalAmount?: number;
  /**
   * @example
   * 3.34
   */
  originalPrice?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3B2E8108-7068-413E-BCA7-CAAB25D46408
   */
  requestId?: string;
  servicePack?: QueryServicePackAndPriceResponseBodyServicePack;
  /**
   * @example
   * 2.922
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      chargeAmount: 'ChargeAmount',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalAmount: 'OriginalAmount',
      originalPrice: 'OriginalPrice',
      regionId: 'RegionId',
      requestId: 'RequestId',
      servicePack: 'ServicePack',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeAmount: 'number',
      currency: 'string',
      discountPrice: 'number',
      originalAmount: 'number',
      originalPrice: 'number',
      regionId: 'string',
      requestId: 'string',
      servicePack: QueryServicePackAndPriceResponseBodyServicePack,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.servicePack && typeof (this.servicePack as any).validate === 'function') {
      (this.servicePack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryServicePackAndPriceResponseBody;
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
      body: QueryServicePackAndPriceResponseBody,
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

export class RecoverClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The service type of the domain account. Valid values:
   * 
   * *   nis
   * *   ldap
   * 
   * Default value: nis.
   * 
   * @example
   * nis
   */
  accountType?: string;
  /**
   * @remarks
   * The version of the E-HPC client. The default value is the latest version of the client.
   * 
   * You can call the [ListCurrentClientVersion](https://help.aliyun.com/document_detail/87223.html) operation to query the latest version of the E-HPC client.
   * 
   * @example
   * 1.0.76
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster ID. The cluster must be in the Exception state.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the ID and status of a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) and [ListCustomImages](https://help.aliyun.com/document_detail/87215.html) operations to query the images that are supported by E-HPC.
   * 
   * @example
   * m-bp18133n0335yq****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system: public image
   * *   self: custom image
   * *   others: shared image
   * 
   * Default value: system.
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The tag of the system image.
   * 
   * You can call the [ListImages](https://help.aliyun.com/document_detail/87213.html) and [ListCustomImages](https://help.aliyun.com/document_detail/87215.html) operations to query the image tags supported by Elastic High Performance Computing (E-HPC).
   * 
   * @example
   * CentOS_7.2_64
   */
  osTag?: string;
  /**
   * @remarks
   * The type of the scheduler. Valid values:
   * 
   * *   pbs
   * *   slurm
   * *   opengridscheduler
   * *   deadline
   * 
   * Default value: pbs.
   * 
   * @example
   * pbs
   */
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      clientVersion: 'string',
      clusterId: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      osTag: 'string',
      schedulerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18FB21E3-F423-4B84-BB63-D8887A29****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 18FB21E3-F423-4B84-BB63-D8887A29****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoverClusterResponseBody;
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
      body: RecoverClusterResponseBody,
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

export class RerunJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use an asynchronous link to rerun the job.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-sh-3VeFyR****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of jobs that you want to run. Maximum number of jobs: 100. Minimum number of jobs: 1.
   * 
   * Format: `[{"Id": "0.sched****"},{"Id": "1.sched****"}]`. Separate multiple jobs with commas (,).
   * 
   * You can call the [ListJobs](https://help.aliyun.com/document_detail/87251.html) operation to query the job ID.
   * 
   * >  You can rerun only jobs that are in the RUNNING or QUEUED state.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Id":"1.scheduler"}]
   */
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      jobs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class RerunJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RerunJobsResponseBody;
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
      body: RerunJobsResponseBody,
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

export class ResetNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instance?: ResetNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': ResetNodesRequestInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetNodesResponseBody;
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
      body: ResetNodesResponseBody,
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

export class RunCloudMetricProfilingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The duration of the profiling process. Unit: seconds.
   * 
   * Value values: 10 to 300.
   * 
   * Default value: 30.
   * 
   * @example
   * 300
   */
  duration?: number;
  /**
   * @remarks
   * The sampling frequency. Unit: Hz. Valid values: 1 to 2000.
   * 
   * Default value: 2000.
   * 
   * @example
   * 2000
   */
  freq?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * This parameter is required.
   * 
   * @example
   * compute0
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the profiling process.
   * 
   * This parameter is required.
   * 
   * @example
   * 29075
   */
  processId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      freq: 'Freq',
      hostName: 'HostName',
      processId: 'ProcessId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      freq: 'number',
      hostName: 'string',
      processId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudMetricProfilingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8442AF35-875B-4FC0-8B7AAFDC339335D5
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

export class RunCloudMetricProfilingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCloudMetricProfilingResponseBody;
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
      body: RunCloudMetricProfilingResponseBody,
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

export class SetAutoScaleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable hyper-threading for the ECS instance that is used as the compute node.
   * 
   * >  You can only disable hyper-threading for some instance types. The hyper-threading is enabled for ECS instances by default. For more information, see [Specify and view CPU options](https://help.aliyun.com/document_detail/145895.html).
   * 
   * @example
   * true
   */
  computeEnableHt?: boolean;
  /**
   * @remarks
   * The configurations of DNS.
   * 
   * @example
   * "{\\"DnsType\\":\\"PrivateZone\\",\\"DnsName\\":\\"xxxxx\\"}"
   */
  dnsConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable auto scale-out. Valid values:
   * 
   * *   true: enables auto scale-out.
   * *   false: disables auto scale-out.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutoGrow?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto scale-in. Valid values:
   * 
   * *   true: enables auto scale-in.
   * *   false: disables auto scale-in.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutoShrink?: boolean;
  /**
   * @remarks
   * The compute nodes that are excluded from auto scaling tasks. Separate multiple compute nodes with commas (,).
   * 
   * If you want to retain a compute node, you can specify the node as an additional node to retain the node when it is idle.
   * 
   * @example
   * i-bp19lgqwxb4206t5****,i-bp1g4hvzs9pywrhb****
   */
  excludeNodes?: string;
  /**
   * @remarks
   * The percentage of extra compute nodes. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * If you need to add 100 compute nodes and the value of the ExtraNodesGrowRatio parameter is 2, 102 compute nodes are added.
   * 
   * @example
   * 0
   */
  extraNodesGrowRatio?: number;
  /**
   * @remarks
   * The interval between two consecutive rounds of scale-out. Unit: minutes.
   * 
   * Valid values: 2 to 10.
   * 
   * Default value: 2.
   * 
   * > An interval may exist during multiple rounds of a scale-out task or between two consecutive scale-out tasks.
   * 
   * @example
   * 2
   */
  growIntervalInMinutes?: number;
  /**
   * @remarks
   * The percentage of each round of a scale-out task. Valid values: 1 to 100.
   * 
   * Default value: 100.
   * 
   * If you set GrowRatio to 50, the scale-out has two rounds. Each round completes half of the scale-out.
   * 
   * @example
   * 50
   */
  growRatio?: number;
  /**
   * @remarks
   * The scale-out timeout period. Unit: minutes.
   * 
   * Valid values: 10 to 60.
   * 
   * Default value: 20.
   * 
   * If the scale-out timeout period has been reached but the scale-out nodes still do not reach the Running state, the system releases them.
   * 
   * @example
   * 20
   */
  growTimeoutInMinutes?: number;
  /**
   * @remarks
   * The IDs of the images.
   * 
   * > 
   * 
   * *   If both `Queues.N.QueueImageId` and `ImageId` are specified, `Queues.N.QueueImageId` prevails.
   * 
   * *   If you set `Queues.N.QueueImageId` or `ImageId`, the parameter that you set takes effect.
   * *   If you leave both `Queues.N.QueueImageId` and `ImageId` empty, the image that was specified when you created the cluster or the last time you scaled out the cluster is used by default.
   * 
   * @example
   * centos_7_03_64_20G_alibase_201708****
   */
  imageId?: string;
  /**
   * @remarks
   * The maximum number of compute nodes that can be added to the cluster. Valid values: 0 to 500.
   * 
   * Default value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  maxNodesInCluster?: number;
  /**
   * @remarks
   * The information about the queue.
   * 
   * **if can be null:**
   * false
   */
  queues?: SetAutoScaleConfigRequestQueues[];
  /**
   * @remarks
   * The number of consecutive times that a compute node is idle during the resource scale-in check.
   * 
   * Valid values: 2 to 5.
   * 
   * Default value: 3.
   * 
   * If the parameter is set to 3, a compute node is idle more than three consecutive times. In this case, the node is released. If a compute node is idle for longer than 6 minutes continuously, it is released by default. This is because the default value of the ShrinkIntervalInMinutes parameter is 2.
   * 
   * @example
   * 3
   */
  shrinkIdleTimes?: number;
  /**
   * @remarks
   * The interval between two consecutive rounds of scale-in. Unit: minutes.
   * 
   * Valid values: 2 to 10.
   * 
   * Default value: 2.
   * 
   * @example
   * 2
   */
  shrinkIntervalInMinutes?: number;
  /**
   * @remarks
   * The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the compute nodes. Valid values:
   * 
   * *   NoSpot: The compute nodes are pay-as-you-go instances.
   * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeEnableHt: 'ComputeEnableHt',
      dnsConfig: 'DnsConfig',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      imageId: 'ImageId',
      maxNodesInCluster: 'MaxNodesInCluster',
      queues: 'Queues',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeEnableHt: 'boolean',
      dnsConfig: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      imageId: 'string',
      maxNodesInCluster: 'number',
      queues: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueues },
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-13358736C-A1D7-6C044FE7****
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

export class SetAutoScaleConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAutoScaleConfigResponseBody;
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
      body: SetAutoScaleConfigResponseBody,
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

export class SetPostScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-sh-EnjshUxn
   */
  clusterId?: string;
  /**
   * @remarks
   * The post-processing scripts.
   */
  postInstallScripts?: SetPostScriptsRequestPostInstallScripts[];
  /**
   * @remarks
   * The ID of the region where the cluster resides. You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      postInstallScripts: 'PostInstallScripts',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      postInstallScripts: { 'type': 'array', 'itemType': SetPostScriptsRequestPostInstallScripts },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.postInstallScripts)) {
      $dara.Model.validateArray(this.postInstallScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPostScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
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

export class SetPostScriptsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPostScriptsResponseBody;
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
      body: SetPostScriptsResponseBody,
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

export class SetQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  node?: SetQueueRequestNode[];
  /**
   * @remarks
   * The name of the destination queue.
   * 
   * You can call the [ListQueues](https://help.aliyun.com/document_detail/92176.html) operation to query the queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      node: 'Node',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      node: { 'type': 'array', 'itemType': SetQueueRequestNode },
      queueName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DFC3EAA9-F11F-4ED0-836F-4FFCB279E700
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

export class SetQueueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetQueueResponseBody;
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
      body: SetQueueResponseBody,
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

export class SetSchedulerInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about PBS schedulers.
   */
  pbsInfo?: SetSchedulerInfoRequestPbsInfo[];
  /**
   * @remarks
   * The region ID.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to obtain the IDs of regions supported by Elastic High Performance Computing (E-HPC).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduler information.
   * 
   * This parameter is required.
   */
  scheduler?: SetSchedulerInfoRequestScheduler[];
  /**
   * @remarks
   * The information about Slurm schedulers.
   */
  slurmInfo?: SetSchedulerInfoRequestSlurmInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pbsInfo: 'PbsInfo',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
      slurmInfo: 'SlurmInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pbsInfo: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfo },
      regionId: 'string',
      scheduler: { 'type': 'array', 'itemType': SetSchedulerInfoRequestScheduler },
      slurmInfo: { 'type': 'array', 'itemType': SetSchedulerInfoRequestSlurmInfo },
    };
  }

  validate() {
    if(Array.isArray(this.pbsInfo)) {
      $dara.Model.validateArray(this.pbsInfo);
    }
    if(Array.isArray(this.scheduler)) {
      $dara.Model.validateArray(this.scheduler);
    }
    if(Array.isArray(this.slurmInfo)) {
      $dara.Model.validateArray(this.slurmInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * pbs: scheduler setting successfully.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class SetSchedulerInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSchedulerInfoResponseBody;
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
      body: SetSchedulerInfoResponseBody,
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

export class StartClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to start.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 76E1ADE7-D15A-457F-AAFD-06C5A5F052D0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 76E1ADE7-D15A-457F-AAFD-06C5A5F052D0
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartClusterResponseBody;
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
      body: StartClusterResponseBody,
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

export class StartNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instance?: StartNodesRequestInstance[];
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * Default value: Compute
   * 
   * @example
   * Compute
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': StartNodesRequestInstance },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartNodesResponseBody;
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
      body: StartNodesResponseBody,
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

export class StartVisualServiceRequest extends $dara.Model {
  /**
   * @remarks
   * A public IP address of logon nodes in the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ``190.100.**.**``
   */
  cidrIp?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The fixed port. Set the value to 12016
   * 
   * This parameter is required.
   * 
   * @example
   * 12016
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      clusterId: 'ClusterId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      clusterId: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the VNC Remote visualization service. Valid values:
   * 
   * *   Service started
   * *   Service stopped
   * 
   * @example
   * Service started
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE6880
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class StartVisualServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartVisualServiceResponseBody;
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
      body: StartVisualServiceResponseBody,
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

export class StopClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the list of clusters in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopClusterResponseBody;
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
      body: StopClusterResponseBody,
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

export class StopJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use an asynchronous link to stop the job.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of jobs that you want to stop. Maximum number of jobs: 100. Minimum number of jobs: 1.
   * 
   * Format: `[{"Id": "0.sched****"},{"Id": "1.sched****"}]`. Separate multiple jobs with commas (,).
   * 
   * You can call the [ListJobs](https://help.aliyun.com/document_detail/87251.html) operation to query the job ID.
   * 
   * >  You can stop only jobs that are in the RUNNING or QUEUED state.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Id":"1.sched****"},{"Id":"0.sched****"}]
   */
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clusterId: 'string',
      jobs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class StopJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopJobsResponseBody;
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
      body: StopJobsResponseBody,
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

export class StopNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instance?: StopNodesRequestInstance[];
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   Manager: management node
   * *   Login: logon node
   * *   Compute: compute node
   * 
   * Default value: Compute
   * 
   * @example
   * Compute
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': StopNodesRequestInstance },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopNodesResponseBody;
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
      body: StopNodesResponseBody,
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

export class StopServerlessJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The serverless job IDs or subtask IDs (array jobs).
   * 
   * *   If you specify the job ID of an array job, all subtasks under the array job are stopped.
   * *   If you specify the ID of a subtask of an array job, only the subtask is stopped.
   * 
   * This parameter is required.
   */
  jobIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServerlessJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class StopServerlessJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServerlessJobsResponseBody;
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
      body: StopServerlessJobsResponseBody,
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

export class StopVisualServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block or IP address that is allowed to access the VNC service. This parameter is used to assign a security group to the E-HPC cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ``100.168.**.**``
   */
  cidrIp?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The fixed port. Set the value to 12016.
   * 
   * This parameter is required.
   * 
   * @example
   * 12016
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      clusterId: 'ClusterId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      clusterId: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service stopped
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE6880
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class StopVisualServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopVisualServiceResponseBody;
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
      body: StopVisualServiceResponseBody,
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

export class SubmitJobRequest extends $dara.Model {
  jobRetry?: SubmitJobRequestJobRetry;
  /**
   * @remarks
   * The job array.
   * 
   * Format: X-Y:Z. The minimum index value X is the first index. The maximum index value Y is the last index. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-10:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * Specifies whether to use an asynchronous link to submit the job.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The maximum running time of the job. Valid formats:
   * 
   * *   hh:mm:ss
   * *   mm:ss
   * *   ss
   * 
   * We recommend that you use the hh:mm:ss format. If the maximum running time is 12 hours, set the value to 12:00:00.
   * 
   * @example
   * 12:00:00
   */
  clockTime?: string;
  /**
   * @remarks
   * The command that is used to run the job.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the user that runs the job.
   * 
   * You can call the [ListUsers](https://help.aliyun.com/document_detail/188572.html) operation to query the users of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ./LammpsTest/lammps.pbs
   */
  commandLine?: string;
  /**
   * @remarks
   * The number of CPU cores required by a single compute node.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The maximum GPU usage required by a single compute node.
   * 
   * The parameter takes effect only when the cluster uses PBS and a compute node is a GPU-accelerated instance.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The URL of the job file that is uploaded to an Object Storage Service (OSS) bucket.
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The name of the queue in which the job is run.
   * 
   * You can call the [ListQueues](https://help.aliyun.com/document_detail/92176.html) operation to query the name of the queue.
   * 
   * @example
   * workq
   */
  jobQueue?: string;
  /**
   * @remarks
   * The maximum memory usage required by a single compute node. Unit: GB, MB, or KB. The unit is case-insensitive.
   * 
   * @example
   * 1GB
   */
  mem?: string;
  /**
   * @remarks
   * job1
   * 
   * @example
   * jobtest
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes required to run the job.
   * 
   * > If the parameter is not specified, the Cpu, Task, Thread, Mem, and Gpu parameters become invalid.
   * 
   * @example
   * 2
   */
  node?: number;
  /**
   * @remarks
   * The path that is used to run the job.
   * 
   * @example
   * ./Tem
   */
  packagePath?: string;
  /**
   * @remarks
   * The command to perform on the job after the job is submitted.
   * 
   * @example
   * example.sh
   */
  postCmdLine?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * Specifies whether the job can be rerun. Valid values:
   * 
   * *   true: The job can be rerun.
   * *   false: The job cannot be rerun.
   * 
   * @example
   * false
   */
  reRunable?: boolean;
  /**
   * @remarks
   * The password that corresponds to the username.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  runasUser?: string;
  /**
   * @remarks
   * The name of the job. The name must be 6 to 30 characters in length and start with a letter. It can contain letters, digits, and periods (.).
   * 
   * @example
   * 12****
   */
  runasUserPassword?: string;
  /**
   * @remarks
   * The output file path of stderr.
   * 
   * @example
   * ./LammpsTest
   */
  stderrRedirectPath?: string;
  /**
   * @remarks
   * The output file path of stdout.
   * 
   * @example
   * ./LammpsTest
   */
  stdoutRedirectPath?: string;
  /**
   * @remarks
   * The number of processes created for a single compute node.
   * 
   * The parameter is applicable to Message Passing Interface (MPI) jobs.
   * 
   * @example
   * 2
   */
  task?: number;
  /**
   * @remarks
   * The number of threads created for a single compute node.
   * 
   * The parameter is applicable to OpenMP jobs.
   * 
   * @example
   * 1
   */
  thread?: number;
  /**
   * @remarks
   * The command for file decompression. The command that is used to decompress the job files downloaded from an OSS bucket. Valid values:
   * 
   * *   tar xzf: Decompresses GZIP files.
   * *   tar xf: Decompresses TAR files.
   * *   unzip: Decompresses ZIP files.
   * 
   * @example
   * tar xzf
   */
  unzipCmd?: string;
  /**
   * @remarks
   * The runtime variables passed to the job. They can be accessed by using environment variables in the executable file.
   * 
   * @example
   * [{Name:test1,Value:value1},{Name:test2,Value:value2}]
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      jobRetry: 'JobRetry',
      arrayRequest: 'ArrayRequest',
      async: 'Async',
      clockTime: 'ClockTime',
      clusterId: 'ClusterId',
      commandLine: 'CommandLine',
      cpu: 'Cpu',
      gpu: 'Gpu',
      inputFileUrl: 'InputFileUrl',
      jobQueue: 'JobQueue',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      postCmdLine: 'PostCmdLine',
      priority: 'Priority',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRetry: SubmitJobRequestJobRetry,
      arrayRequest: 'string',
      async: 'boolean',
      clockTime: 'string',
      clusterId: 'string',
      commandLine: 'string',
      cpu: 'number',
      gpu: 'number',
      inputFileUrl: 'string',
      jobQueue: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      postCmdLine: 'string',
      priority: 'number',
      reRunable: 'boolean',
      runasUser: 'string',
      runasUserPassword: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
    };
  }

  validate() {
    if(this.jobRetry && typeof (this.jobRetry as any).validate === 'function') {
      (this.jobRetry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

export class SubmitJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitJobResponseBody;
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
      body: SubmitJobResponseBody,
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

export class SubmitServerlessJobRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the array job.
   * 
   * >  The value of an array job index is passed to a serverless job container through the environment variable `EHPC_ARRAY_TASK_ID`. Users can access the container from business programs.
   */
  arrayProperties?: SubmitServerlessJobRequestArrayProperties;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The properties of the Serverless job container.
   * 
   * This parameter is required.
   */
  container?: SubmitServerlessJobRequestContainer;
  /**
   * @remarks
   * The vCPU size of the serverless job container. Unit: cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The dependencies of the serverless job.
   */
  dependsOn?: SubmitServerlessJobRequestDependsOn[];
  /**
   * @remarks
   * The size of the temporary storage space added to the serverless job container. Unit: GiB.
   * 
   * >  By default, a space of 30 GiB is provided free of charge. If you require a larger space, you can pass this parameter to specify your required space size.
   * 
   * @example
   * 200
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instance types used by the serverless job container.
   */
  instanceType?: string[];
  /**
   * @remarks
   * The name of the serverless job.
   * 
   * >  The name can contain lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The scheduling priority of the serverless job. Valid values: 0 to 999. A greater value indicates a higher priority.
   * 
   * @example
   * 10
   */
  jobPriority?: number;
  /**
   * @remarks
   * The memory size of the serverless job container. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The Resource Access Manamement (RAM) role that is associated with the Serverless job container.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The retry policy of the serverless job.
   */
  retryStrategy?: SubmitServerlessJobRequestRetryStrategy;
  /**
   * @remarks
   * The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places.
   * 
   * If you set SpotStrategy to SpotWithPriceLimit, you must specify the SpotPriceLimit parameter.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy of the ECS instances. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The validity period of the serverless job. After the validity period expires, the job is forcibly terminated. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The IDs of the vSwitches to which the serverless job container belongs.
   */
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      arrayProperties: 'ArrayProperties',
      clusterId: 'ClusterId',
      container: 'Container',
      cpu: 'Cpu',
      dependsOn: 'DependsOn',
      ephemeralStorage: 'EphemeralStorage',
      instanceType: 'InstanceType',
      jobName: 'JobName',
      jobPriority: 'JobPriority',
      memory: 'Memory',
      ramRoleName: 'RamRoleName',
      retryStrategy: 'RetryStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      timeout: 'Timeout',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayProperties: SubmitServerlessJobRequestArrayProperties,
      clusterId: 'string',
      container: SubmitServerlessJobRequestContainer,
      cpu: 'number',
      dependsOn: { 'type': 'array', 'itemType': SubmitServerlessJobRequestDependsOn },
      ephemeralStorage: 'number',
      instanceType: { 'type': 'array', 'itemType': 'string' },
      jobName: 'string',
      jobPriority: 'number',
      memory: 'number',
      ramRoleName: 'string',
      retryStrategy: SubmitServerlessJobRequestRetryStrategy,
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      timeout: 'number',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.arrayProperties && typeof (this.arrayProperties as any).validate === 'function') {
      (this.arrayProperties as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(Array.isArray(this.dependsOn)) {
      $dara.Model.validateArray(this.dependsOn);
    }
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    if(this.retryStrategy && typeof (this.retryStrategy as any).validate === 'function') {
      (this.retryStrategy as any).validate();
    }
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitServerlessJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the array job.
   * 
   * >  The value of an array job index is passed to a serverless job container through the environment variable `EHPC_ARRAY_TASK_ID`. Users can access the container from business programs.
   */
  arrayPropertiesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The properties of the Serverless job container.
   * 
   * This parameter is required.
   */
  containerShrink?: string;
  /**
   * @remarks
   * The vCPU size of the serverless job container. Unit: cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The dependencies of the serverless job.
   */
  dependsOnShrink?: string;
  /**
   * @remarks
   * The size of the temporary storage space added to the serverless job container. Unit: GiB.
   * 
   * >  By default, a space of 30 GiB is provided free of charge. If you require a larger space, you can pass this parameter to specify your required space size.
   * 
   * @example
   * 200
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instance types used by the serverless job container.
   */
  instanceTypeShrink?: string;
  /**
   * @remarks
   * The name of the serverless job.
   * 
   * >  The name can contain lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * testjob
   */
  jobName?: string;
  /**
   * @remarks
   * The scheduling priority of the serverless job. Valid values: 0 to 999. A greater value indicates a higher priority.
   * 
   * @example
   * 10
   */
  jobPriority?: number;
  /**
   * @remarks
   * The memory size of the serverless job container. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The Resource Access Manamement (RAM) role that is associated with the Serverless job container.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The retry policy of the serverless job.
   */
  retryStrategyShrink?: string;
  /**
   * @remarks
   * The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places.
   * 
   * If you set SpotStrategy to SpotWithPriceLimit, you must specify the SpotPriceLimit parameter.
   * 
   * @example
   * 0.062
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy of the ECS instances. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The validity period of the serverless job. After the validity period expires, the job is forcibly terminated. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The IDs of the vSwitches to which the serverless job container belongs.
   */
  vSwitchIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      arrayPropertiesShrink: 'ArrayProperties',
      clusterId: 'ClusterId',
      containerShrink: 'Container',
      cpu: 'Cpu',
      dependsOnShrink: 'DependsOn',
      ephemeralStorage: 'EphemeralStorage',
      instanceTypeShrink: 'InstanceType',
      jobName: 'JobName',
      jobPriority: 'JobPriority',
      memory: 'Memory',
      ramRoleName: 'RamRoleName',
      retryStrategyShrink: 'RetryStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      timeout: 'Timeout',
      vSwitchIdShrink: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayPropertiesShrink: 'string',
      clusterId: 'string',
      containerShrink: 'string',
      cpu: 'number',
      dependsOnShrink: 'string',
      ephemeralStorage: 'number',
      instanceTypeShrink: 'string',
      jobName: 'string',
      jobPriority: 'number',
      memory: 'number',
      ramRoleName: 'string',
      retryStrategyShrink: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      timeout: 'number',
      vSwitchIdShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitServerlessJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the serverless job.
   * 
   * @example
   * 10
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

export class SubmitServerlessJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitServerlessJobResponseBody;
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
      body: SubmitServerlessJobResponseBody,
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

export class SyncUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the list of E-HPC clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-gh5WKb****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/188593.html) operation to query the list of regions where E-HPC is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
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

export class SyncUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncUsersResponseBody;
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
      body: SyncUsersResponseBody,
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to cluster, which indicates E-HPC clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
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

export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. This parameter is valid only when the TagKey.N parameter is not specified. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to remove tags. Set the value to cluster, which indicates E-HPC clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class UnTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnTagResourcesResponseBody;
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
      body: UnTagResourcesResponseBody,
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

export class UninstallSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the software that you want to uninstall.
   * 
   * You can call the [ListInstalledSoftware](https://help.aliyun.com/document_detail/188591.html) operation to query the software that is installed in the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ABYSS_2.1.5
   */
  application?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C84FB8EF-5580-4B82-9BDE-6657814C****
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

export class UninstallSoftwareResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallSoftwareResponseBody;
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
      body: UninstallSoftwareResponseBody,
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

export class UpdateClusterVolumesRequest extends $dara.Model {
  /**
   * @remarks
   * The file systems that you want to mount.
   */
  additionalVolumes?: UpdateClusterVolumesRequestAdditionalVolumes[];
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVolumes: 'AdditionalVolumes',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVolumes: { 'type': 'array', 'itemType': UpdateClusterVolumesRequestAdditionalVolumes },
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalVolumes)) {
      $dara.Model.validateArray(this.additionalVolumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0842122
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

export class UpdateClusterVolumesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterVolumesResponseBody;
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
      body: UpdateClusterVolumesResponseBody,
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

export class UpdateQueueConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-HPC cluster.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance type of the node.
   * 
   * You can call the [ListPreferredEcsTypes](https://help.aliyun.com/document_detail/188592.html) operation to query the recommended instance types.
   * 
   * @example
   * ecs.n1.tiny
   */
  computeInstanceType?: string;
  /**
   * @remarks
   * The ID of the deployment set. You can obtain the deployment set ID by calling the [DescribeDeploymentSets](https://help.aliyun.com/document_detail/91313.html) operation. Only the deployment sets that use low latency policy are supported.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pzq****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The communication mode of the elastic network interface (ENI). Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * workq
   */
  queueName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the IDs of resource groups.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeInstanceType: 'ComputeInstanceType',
      deploymentSetId: 'DeploymentSetId',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeInstanceType: 'string',
      deploymentSetId: 'string',
      networkInterfaceTrafficMode: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5198C3E8-85F5-4280-8547-687C1710****
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

export class UpdateQueueConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQueueConfigResponseBody;
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
      body: UpdateQueueConfigResponseBody,
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

export class UpgradeClientRequest extends $dara.Model {
  /**
   * @remarks
   * The version to which you want to update ehpcutil. By default, ehpcutil is updated to the latest version. You can call the [ListCurrentClientVersion](https://help.aliyun.com/document_detail/87223.html) to query the latest ehpcutil version.
   * 
   * @example
   * 2.0.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4994fbcd-2a09-4045-b2b2-2c3bee8e9296
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

export class UpgradeClientResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClientResponseBody;
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
      body: UpgradeClientResponseBody,
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
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ehpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds one or more existing ECS instances as compute nodes to a specified cluster.
   * 
   * @remarks
   *   The compute nodes to be added are in the Stopped state.
   * *   After the compute nodes are added to the cluster, the operating systems of the nodes are replaced with the operating system specified by the ImageId parameter.
   * *   The hosts of the compute nodes must be different from those of the existing compute nodes in the cluster. Otherwise, the add operation fails.
   * 
   * @param request - AddExistedNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddExistedNodesResponse
   */
  async addExistedNodesWithOptions(request: AddExistedNodesRequest, runtime: $dara.RuntimeOptions): Promise<AddExistedNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddExistedNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddExistedNodesResponse>(await this.callApi(params, req, runtime), new AddExistedNodesResponse({}));
  }

  /**
   * Adds one or more existing ECS instances as compute nodes to a specified cluster.
   * 
   * @remarks
   *   The compute nodes to be added are in the Stopped state.
   * *   After the compute nodes are added to the cluster, the operating systems of the nodes are replaced with the operating system specified by the ImageId parameter.
   * *   The hosts of the compute nodes must be different from those of the existing compute nodes in the cluster. Otherwise, the add operation fails.
   * 
   * @param request - AddExistedNodesRequest
   * @returns AddExistedNodesResponse
   */
  async addExistedNodes(request: AddExistedNodesRequest): Promise<AddExistedNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addExistedNodesWithOptions(request, runtime);
  }

  /**
   * @param request - AddLocalNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLocalNodesResponse
   */
  async addLocalNodesWithOptions(request: AddLocalNodesRequest, runtime: $dara.RuntimeOptions): Promise<AddLocalNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLocalNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddLocalNodesResponse>(await this.callApi(params, req, runtime), new AddLocalNodesResponse({}));
  }

  /**
   * @param request - AddLocalNodesRequest
   * @returns AddLocalNodesResponse
   */
  async addLocalNodes(request: AddLocalNodesRequest): Promise<AddLocalNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLocalNodesWithOptions(request, runtime);
  }

  /**
   * Adds one or more compute nodes to an E-HPC cluster.
   * 
   * @param request - AddNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddNodesResponse
   */
  async addNodesWithOptions(request: AddNodesRequest, runtime: $dara.RuntimeOptions): Promise<AddNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddNodesResponse>(await this.callApi(params, req, runtime), new AddNodesResponse({}));
  }

  /**
   * Adds one or more compute nodes to an E-HPC cluster.
   * 
   * @param request - AddNodesRequest
   * @returns AddNodesResponse
   */
  async addNodes(request: AddNodesRequest): Promise<AddNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addNodesWithOptions(request, runtime);
  }

  /**
   * Creates a queue for a cluster.
   * 
   * @param request - AddQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddQueueResponse
   */
  async addQueueWithOptions(request: AddQueueRequest, runtime: $dara.RuntimeOptions): Promise<AddQueueResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddQueueResponse>(await this.callApi(params, req, runtime), new AddQueueResponse({}));
  }

  /**
   * Creates a queue for a cluster.
   * 
   * @param request - AddQueueRequest
   * @returns AddQueueResponse
   */
  async addQueue(request: AddQueueRequest): Promise<AddQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addQueueWithOptions(request, runtime);
  }

  /**
   * Adds a cluster to a security group.
   * 
   * @param request - AddSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSecurityGroupResponse
   */
  async addSecurityGroupWithOptions(request: AddSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<AddSecurityGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSecurityGroup",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddSecurityGroupResponse>(await this.callApi(params, req, runtime), new AddSecurityGroupResponse({}));
  }

  /**
   * Adds a cluster to a security group.
   * 
   * @param request - AddSecurityGroupRequest
   * @returns AddSecurityGroupResponse
   */
  async addSecurityGroup(request: AddSecurityGroupRequest): Promise<AddSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Adds users to a cluster.
   * 
   * @param request - AddUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersResponse
   */
  async addUsersWithOptions(request: AddUsersRequest, runtime: $dara.RuntimeOptions): Promise<AddUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsers",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddUsersResponse>(await this.callApi(params, req, runtime), new AddUsersResponse({}));
  }

  /**
   * Adds users to a cluster.
   * 
   * @param request - AddUsersRequest
   * @returns AddUsersResponse
   */
  async addUsers(request: AddUsersRequest): Promise<AddUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUsersWithOptions(request, runtime);
  }

  /**
   * Adds pay-as-you-go or preemptible compute nodes to a cluster.
   * 
   * @remarks
   * ## [](#)Description
   * You can call the ApplyNodes operation to specify the number of compute nodes, the number of vCPUs, and the memory size when you add nodes to a cluster.
   * 
   * @param request - ApplyNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyNodesResponse
   */
  async applyNodesWithOptions(request: ApplyNodesRequest, runtime: $dara.RuntimeOptions): Promise<ApplyNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ApplyNodesResponse>(await this.callApi(params, req, runtime), new ApplyNodesResponse({}));
  }

  /**
   * Adds pay-as-you-go or preemptible compute nodes to a cluster.
   * 
   * @remarks
   * ## [](#)Description
   * You can call the ApplyNodes operation to specify the number of compute nodes, the number of vCPUs, and the memory size when you add nodes to a cluster.
   * 
   * @param request - ApplyNodesRequest
   * @returns ApplyNodesResponse
   */
  async applyNodes(request: ApplyNodesRequest): Promise<ApplyNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyNodesWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription E-HPC cluster.
   * 
   * @remarks
   * After you create an Elastic High Performance Computing (E-HPC) cluster, you are charged for the cluster resources that you use. We recommend that you learn about the billing methods of E-HPC in advance. For more information, see [Billing overview](https://help.aliyun.com/document_detail/57844.html).
   * 
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<CreateClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * Creates a pay-as-you-go or subscription E-HPC cluster.
   * 
   * @remarks
   * After you create an Elastic High Performance Computing (E-HPC) cluster, you are charged for the cluster resources that you use. We recommend that you learn about the billing methods of E-HPC in advance. For more information, see [Billing overview](https://help.aliyun.com/document_detail/57844.html).
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Creates a hybrid cloud cluster.
   * 
   * @param request - CreateHybridClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridClusterResponse
   */
  async createHybridClusterWithOptions(request: CreateHybridClusterRequest, runtime: $dara.RuntimeOptions): Promise<CreateHybridClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateHybridClusterResponse>(await this.callApi(params, req, runtime), new CreateHybridClusterResponse({}));
  }

  /**
   * Creates a hybrid cloud cluster.
   * 
   * @param request - CreateHybridClusterRequest
   * @returns CreateHybridClusterResponse
   */
  async createHybridCluster(request: CreateHybridClusterRequest): Promise<CreateHybridClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridClusterWithOptions(request, runtime);
  }

  /**
   * Creates a job file.
   * 
   * @param request - CreateJobFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobFileResponse
   */
  async createJobFileWithOptions(request: CreateJobFileRequest, runtime: $dara.RuntimeOptions): Promise<CreateJobFileResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobFile",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateJobFileResponse>(await this.callApi(params, req, runtime), new CreateJobFileResponse({}));
  }

  /**
   * Creates a job file.
   * 
   * @param request - CreateJobFileRequest
   * @returns CreateJobFileResponse
   */
  async createJobFile(request: CreateJobFileRequest): Promise<CreateJobFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobFileWithOptions(request, runtime);
  }

  /**
   * Creates a job template.
   * 
   * @param request - CreateJobTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobTemplateResponse
   */
  async createJobTemplateWithOptions(request: CreateJobTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateJobTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobTemplate",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateJobTemplateResponse>(await this.callApi(params, req, runtime), new CreateJobTemplateResponse({}));
  }

  /**
   * Creates a job template.
   * 
   * @param request - CreateJobTemplateRequest
   * @returns CreateJobTemplateResponse
   */
  async createJobTemplate(request: CreateJobTemplateRequest): Promise<CreateJobTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobTemplateWithOptions(request, runtime);
  }

  /**
   * Releases a cluster.
   * 
   * @remarks
   * After a cluster is released, the pay-as-you-go nodes and the subscription nodes that are expired are automatically released. The subscription nodes that are expired are retained. If you need to release subscription nodes that are not expired, change the billing method to pay-as-you-go. Before you release a cluster, make sure that you no longer use the cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<DeleteClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * Releases a cluster.
   * 
   * @remarks
   * After a cluster is released, the pay-as-you-go nodes and the subscription nodes that are expired are automatically released. The subscription nodes that are expired are retained. If you need to release subscription nodes that are not expired, change the billing method to pay-as-you-go. Before you release a cluster, make sure that you no longer use the cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Deletes job templates.
   * 
   * @param request - DeleteJobTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobTemplatesResponse
   */
  async deleteJobTemplatesWithOptions(request: DeleteJobTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteJobTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobTemplates",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteJobTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteJobTemplatesResponse({}));
  }

  /**
   * Deletes job templates.
   * 
   * @param request - DeleteJobTemplatesRequest
   * @returns DeleteJobTemplatesResponse
   */
  async deleteJobTemplates(request: DeleteJobTemplatesRequest): Promise<DeleteJobTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobTemplatesWithOptions(request, runtime);
  }

  /**
   * Deletes jobs from a cluster.
   * 
   * @param request - DeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobsResponse
   */
  async deleteJobsWithOptions(request: DeleteJobsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  /**
   * Deletes jobs from a cluster.
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - DeleteNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodesResponse
   */
  async deleteNodesWithOptions(request: DeleteNodesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteNodesResponse>(await this.callApi(params, req, runtime), new DeleteNodesResponse({}));
  }

  /**
   * @remarks
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - DeleteNodesRequest
   * @returns DeleteNodesResponse
   */
  async deleteNodes(request: DeleteNodesRequest): Promise<DeleteNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueueResponse
   */
  async deleteQueueWithOptions(request: DeleteQueueRequest, runtime: $dara.RuntimeOptions): Promise<DeleteQueueResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteQueueResponse>(await this.callApi(params, req, runtime), new DeleteQueueResponse({}));
  }

  /**
   * @param request - DeleteQueueRequest
   * @returns DeleteQueueResponse
   */
  async deleteQueue(request: DeleteQueueRequest): Promise<DeleteQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  /**
   * Removes a cluster from a specified security group.
   * 
   * @param request - DeleteSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityGroupResponse
   */
  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityGroup",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteSecurityGroupResponse>(await this.callApi(params, req, runtime), new DeleteSecurityGroupResponse({}));
  }

  /**
   * Removes a cluster from a specified security group.
   * 
   * @param request - DeleteSecurityGroupRequest
   * @returns DeleteSecurityGroupResponse
   */
  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Deletes users from a cluster.
   * 
   * @remarks
   * If you delete a user, only its information is deleted. The files stored in the /home directory for the user are retained. For example, if you delete a user named user1, the files in the `/home/user1/` directory of the cluster are not deleted. However, a deleted user cannot be recovered. Even if you create another user that has the same name, the data retained for the deleted user is not reused.
   * 
   * @param request - DeleteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsersResponse
   */
  async deleteUsersWithOptions(request: DeleteUsersRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUsers",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteUsersResponse>(await this.callApi(params, req, runtime), new DeleteUsersResponse({}));
  }

  /**
   * Deletes users from a cluster.
   * 
   * @remarks
   * If you delete a user, only its information is deleted. The files stored in the /home directory for the user are retained. For example, if you delete a user named user1, the files in the `/home/user1/` directory of the cluster are not deleted. However, a deleted user cannot be recovered. Even if you create another user that has the same name, the data retained for the deleted user is not reused.
   * 
   * @param request - DeleteUsersRequest
   * @returns DeleteUsersResponse
   */
  async deleteUsers(request: DeleteUsersRequest): Promise<DeleteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  /**
   * Queries the auto scaling settings of a cluster.
   * 
   * @param request - DescribeAutoScaleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoScaleConfigResponse
   */
  async describeAutoScaleConfigWithOptions(request: DescribeAutoScaleConfigRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAutoScaleConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoScaleConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new DescribeAutoScaleConfigResponse({}));
  }

  /**
   * Queries the auto scaling settings of a cluster.
   * 
   * @param request - DescribeAutoScaleConfigRequest
   * @returns DescribeAutoScaleConfigResponse
   */
  async describeAutoScaleConfig(request: DescribeAutoScaleConfigRequest): Promise<DescribeAutoScaleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoScaleConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of a cluster.
   * 
   * @param request - DescribeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResponse
   */
  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $dara.RuntimeOptions): Promise<DescribeClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  /**
   * Queries the details of a cluster.
   * 
   * @param request - DescribeClusterRequest
   * @returns DescribeClusterResponse
   */
  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * Queries the base images of Elastic High Performance Computing (E-HPC).
   * 
   * @param request - DescribeEstackImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEstackImageResponse
   */
  async describeEstackImageWithOptions(request: DescribeEstackImageRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEstackImageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEstackImage",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeEstackImageResponse>(await this.callApi(params, req, runtime), new DescribeEstackImageResponse({}));
  }

  /**
   * Queries the base images of Elastic High Performance Computing (E-HPC).
   * 
   * @param request - DescribeEstackImageRequest
   * @returns DescribeEstackImageResponse
   */
  async describeEstackImage(request: DescribeEstackImageRequest): Promise<DescribeEstackImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEstackImageWithOptions(request, runtime);
  }

  /**
   * Queries the price of an Alibaba Cloud Marketplace image.
   * 
   * @param request - DescribeImagePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImagePriceResponse
   */
  async describeImagePriceWithOptions(request: DescribeImagePriceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeImagePriceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImagePrice",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeImagePriceResponse>(await this.callApi(params, req, runtime), new DescribeImagePriceResponse({}));
  }

  /**
   * Queries the price of an Alibaba Cloud Marketplace image.
   * 
   * @param request - DescribeImagePriceRequest
   * @returns DescribeImagePriceResponse
   */
  async describeImagePrice(request: DescribeImagePriceRequest): Promise<DescribeImagePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImagePriceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a job in an E-HPC cluster.
   * 
   * @param request - DescribeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobResponse
   */
  async describeJobWithOptions(request: DescribeJobRequest, runtime: $dara.RuntimeOptions): Promise<DescribeJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJob",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeJobResponse>(await this.callApi(params, req, runtime), new DescribeJobResponse({}));
  }

  /**
   * Queries the information about a job in an E-HPC cluster.
   * 
   * @param request - DescribeJobRequest
   * @returns DescribeJobResponse
   */
  async describeJob(request: DescribeJobRequest): Promise<DescribeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobWithOptions(request, runtime);
  }

  /**
   * Queries the pricing information of a cluster.
   * 
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<DescribePriceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
  }

  /**
   * Queries the pricing information of a cluster.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a serverless job by job ID or subtask ID (array job). You can specify only a single job ID or a single subtask ID at a time.
   * 
   * @param request - DescribeServerlessJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServerlessJobsResponse
   */
  async describeServerlessJobsWithOptions(request: DescribeServerlessJobsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeServerlessJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServerlessJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeServerlessJobsResponse>(await this.callApi(params, req, runtime), new DescribeServerlessJobsResponse({}));
  }

  /**
   * Queries the details of a serverless job by job ID or subtask ID (array job). You can specify only a single job ID or a single subtask ID at a time.
   * 
   * @param request - DescribeServerlessJobsRequest
   * @returns DescribeServerlessJobsResponse
   */
  async describeServerlessJobs(request: DescribeServerlessJobsRequest): Promise<DescribeServerlessJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServerlessJobsWithOptions(request, runtime);
  }

  /**
   * @param request - EditJobTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditJobTemplateResponse
   */
  async editJobTemplateWithOptions(request: EditJobTemplateRequest, runtime: $dara.RuntimeOptions): Promise<EditJobTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditJobTemplate",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EditJobTemplateResponse>(await this.callApi(params, req, runtime), new EditJobTemplateResponse({}));
  }

  /**
   * @param request - EditJobTemplateRequest
   * @returns EditJobTemplateResponse
   */
  async editJobTemplate(request: EditJobTemplateRequest): Promise<EditJobTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editJobTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - GetAccountingReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountingReportResponse
   */
  async getAccountingReportWithOptions(request: GetAccountingReportRequest, runtime: $dara.RuntimeOptions): Promise<GetAccountingReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountingReport",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAccountingReportResponse>(await this.callApi(params, req, runtime), new GetAccountingReportResponse({}));
  }

  /**
   * @param request - GetAccountingReportRequest
   * @returns GetAccountingReportResponse
   */
  async getAccountingReport(request: GetAccountingReportRequest): Promise<GetAccountingReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountingReportWithOptions(request, runtime);
  }

  /**
   * Obtains the auto scaling settings of a cluster.
   * 
   * @param request - GetAutoScaleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScaleConfigResponse
   */
  async getAutoScaleConfigWithOptions(request: GetAutoScaleConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetAutoScaleConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoScaleConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new GetAutoScaleConfigResponse({}));
  }

  /**
   * Obtains the auto scaling settings of a cluster.
   * 
   * @param request - GetAutoScaleConfigRequest
   * @returns GetAutoScaleConfigResponse
   */
  async getAutoScaleConfig(request: GetAutoScaleConfigRequest): Promise<GetAutoScaleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScaleConfigWithOptions(request, runtime);
  }

  /**
   * Reads performance metrics (CloudMetrics) logs of E-HPC.
   * 
   * @param request - GetCloudMetricLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudMetricLogsResponse
   */
  async getCloudMetricLogsWithOptions(request: GetCloudMetricLogsRequest, runtime: $dara.RuntimeOptions): Promise<GetCloudMetricLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudMetricLogs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCloudMetricLogsResponse>(await this.callApi(params, req, runtime), new GetCloudMetricLogsResponse({}));
  }

  /**
   * Reads performance metrics (CloudMetrics) logs of E-HPC.
   * 
   * @param request - GetCloudMetricLogsRequest
   * @returns GetCloudMetricLogsResponse
   */
  async getCloudMetricLogs(request: GetCloudMetricLogsRequest): Promise<GetCloudMetricLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudMetricLogsWithOptions(request, runtime);
  }

  /**
   * @param request - GetCloudMetricProfilingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudMetricProfilingResponse
   */
  async getCloudMetricProfilingWithOptions(request: GetCloudMetricProfilingRequest, runtime: $dara.RuntimeOptions): Promise<GetCloudMetricProfilingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudMetricProfiling",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCloudMetricProfilingResponse>(await this.callApi(params, req, runtime), new GetCloudMetricProfilingResponse({}));
  }

  /**
   * @param request - GetCloudMetricProfilingRequest
   * @returns GetCloudMetricProfilingResponse
   */
  async getCloudMetricProfiling(request: GetCloudMetricProfilingRequest): Promise<GetCloudMetricProfilingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudMetricProfilingWithOptions(request, runtime);
  }

  /**
   * Queries the information of the NAS file system mounted to a specified cluster.
   * 
   * @param request - GetClusterVolumesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterVolumesResponse
   */
  async getClusterVolumesWithOptions(request: GetClusterVolumesRequest, runtime: $dara.RuntimeOptions): Promise<GetClusterVolumesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterVolumes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetClusterVolumesResponse>(await this.callApi(params, req, runtime), new GetClusterVolumesResponse({}));
  }

  /**
   * Queries the information of the NAS file system mounted to a specified cluster.
   * 
   * @param request - GetClusterVolumesRequest
   * @returns GetClusterVolumesResponse
   */
  async getClusterVolumes(request: GetClusterVolumesRequest): Promise<GetClusterVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterVolumesWithOptions(request, runtime);
  }

  /**
   * @param request - GetHybridClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHybridClusterConfigResponse
   */
  async getHybridClusterConfigWithOptions(request: GetHybridClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetHybridClusterConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHybridClusterConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHybridClusterConfigResponse>(await this.callApi(params, req, runtime), new GetHybridClusterConfigResponse({}));
  }

  /**
   * @param request - GetHybridClusterConfigRequest
   * @returns GetHybridClusterConfigResponse
   */
  async getHybridClusterConfig(request: GetHybridClusterConfigRequest): Promise<GetHybridClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHybridClusterConfigWithOptions(request, runtime);
  }

  /**
   * Queries whether hyper-threading can be enabled or disabled for an instance type.
   * 
   * @param request - GetIfEcsTypeSupportHtConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIfEcsTypeSupportHtConfigResponse
   */
  async getIfEcsTypeSupportHtConfigWithOptions(request: GetIfEcsTypeSupportHtConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetIfEcsTypeSupportHtConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIfEcsTypeSupportHtConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetIfEcsTypeSupportHtConfigResponse>(await this.callApi(params, req, runtime), new GetIfEcsTypeSupportHtConfigResponse({}));
  }

  /**
   * Queries whether hyper-threading can be enabled or disabled for an instance type.
   * 
   * @param request - GetIfEcsTypeSupportHtConfigRequest
   * @returns GetIfEcsTypeSupportHtConfigResponse
   */
  async getIfEcsTypeSupportHtConfig(request: GetIfEcsTypeSupportHtConfigRequest): Promise<GetIfEcsTypeSupportHtConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIfEcsTypeSupportHtConfigWithOptions(request, runtime);
  }

  /**
   * 实时查询任务的输出日志
   * 
   * @param request - GetJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobLogResponse
   */
  async getJobLogWithOptions(request: GetJobLogRequest, runtime: $dara.RuntimeOptions): Promise<GetJobLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobLog",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetJobLogResponse>(await this.callApi(params, req, runtime), new GetJobLogResponse({}));
  }

  /**
   * 实时查询任务的输出日志
   * 
   * @param request - GetJobLogRequest
   * @returns GetJobLogResponse
   */
  async getJobLog(request: GetJobLogRequest): Promise<GetJobLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobLogWithOptions(request, runtime);
  }

  /**
   * Queries the post-processing scripts of a cluster.
   * 
   * @param request - GetPostScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPostScriptsResponse
   */
  async getPostScriptsWithOptions(request: GetPostScriptsRequest, runtime: $dara.RuntimeOptions): Promise<GetPostScriptsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPostScripts",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetPostScriptsResponse>(await this.callApi(params, req, runtime), new GetPostScriptsResponse({}));
  }

  /**
   * Queries the post-processing scripts of a cluster.
   * 
   * @param request - GetPostScriptsRequest
   * @returns GetPostScriptsResponse
   */
  async getPostScripts(request: GetPostScriptsRequest): Promise<GetPostScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPostScriptsWithOptions(request, runtime);
  }

  /**
   * Queries the scheduler settings of a cluster.
   * 
   * @param request - GetSchedulerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSchedulerInfoResponse
   */
  async getSchedulerInfoWithOptions(request: GetSchedulerInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetSchedulerInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSchedulerInfo",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSchedulerInfoResponse>(await this.callApi(params, req, runtime), new GetSchedulerInfoResponse({}));
  }

  /**
   * Queries the scheduler settings of a cluster.
   * 
   * @param request - GetSchedulerInfoRequest
   * @returns GetSchedulerInfoResponse
   */
  async getSchedulerInfo(request: GetSchedulerInfoRequest): Promise<GetSchedulerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchedulerInfoWithOptions(request, runtime);
  }

  /**
   * Queries the status of the VNC service in a cluster.
   * 
   * @param request - GetVisualServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVisualServiceStatusResponse
   */
  async getVisualServiceStatusWithOptions(request: GetVisualServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetVisualServiceStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVisualServiceStatus",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetVisualServiceStatusResponse>(await this.callApi(params, req, runtime), new GetVisualServiceStatusResponse({}));
  }

  /**
   * Queries the status of the VNC service in a cluster.
   * 
   * @param request - GetVisualServiceStatusRequest
   * @returns GetVisualServiceStatusResponse
   */
  async getVisualServiceStatus(request: GetVisualServiceStatusRequest): Promise<GetVisualServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVisualServiceStatusWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role for Elastic High Performance Computing (E-HPC). A service-linked role is required for you to use E-HPC.
   * 
   * @param request - InitializeEHPCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeEHPCResponse
   */
  async initializeEHPCWithOptions(request: InitializeEHPCRequest, runtime: $dara.RuntimeOptions): Promise<InitializeEHPCResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeEHPC",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InitializeEHPCResponse>(await this.callApi(params, req, runtime), new InitializeEHPCResponse({}));
  }

  /**
   * Creates a service-linked role for Elastic High Performance Computing (E-HPC). A service-linked role is required for you to use E-HPC.
   * 
   * @param request - InitializeEHPCRequest
   * @returns InitializeEHPCResponse
   */
  async initializeEHPC(request: InitializeEHPCRequest): Promise<InitializeEHPCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeEHPCWithOptions(request, runtime);
  }

  /**
   * Installs software in a cluster.
   * 
   * @param request - InstallSoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallSoftwareResponse
   */
  async installSoftwareWithOptions(request: InstallSoftwareRequest, runtime: $dara.RuntimeOptions): Promise<InstallSoftwareResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallSoftware",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InstallSoftwareResponse>(await this.callApi(params, req, runtime), new InstallSoftwareResponse({}));
  }

  /**
   * Installs software in a cluster.
   * 
   * @param request - InstallSoftwareRequest
   * @returns InstallSoftwareResponse
   */
  async installSoftware(request: InstallSoftwareRequest): Promise<InstallSoftwareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installSoftwareWithOptions(request, runtime);
  }

  /**
   * Runs interactive commands in a cluster node.
   * 
   * @param request - InvokeShellCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeShellCommandResponse
   */
  async invokeShellCommandWithOptions(request: InvokeShellCommandRequest, runtime: $dara.RuntimeOptions): Promise<InvokeShellCommandResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeShellCommand",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InvokeShellCommandResponse>(await this.callApi(params, req, runtime), new InvokeShellCommandResponse({}));
  }

  /**
   * Runs interactive commands in a cluster node.
   * 
   * @param request - InvokeShellCommandRequest
   * @returns InvokeShellCommandResponse
   */
  async invokeShellCommand(request: InvokeShellCommandRequest): Promise<InvokeShellCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invokeShellCommandWithOptions(request, runtime);
  }

  /**
   * Queries available Elastic Compute Service (ECS) instance types.
   * 
   * @param request - ListAvailableEcsTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableEcsTypesResponse
   */
  async listAvailableEcsTypesWithOptions(request: ListAvailableEcsTypesRequest, runtime: $dara.RuntimeOptions): Promise<ListAvailableEcsTypesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableEcsTypes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAvailableEcsTypesResponse>(await this.callApi(params, req, runtime), new ListAvailableEcsTypesResponse({}));
  }

  /**
   * Queries available Elastic Compute Service (ECS) instance types.
   * 
   * @param request - ListAvailableEcsTypesRequest
   * @returns ListAvailableEcsTypesResponse
   */
  async listAvailableEcsTypes(request: ListAvailableEcsTypesRequest): Promise<ListAvailableEcsTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableEcsTypesWithOptions(request, runtime);
  }

  /**
   * Queries the profiling history of a cluster.
   * 
   * @param request - ListCloudMetricProfilingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudMetricProfilingsResponse
   */
  async listCloudMetricProfilingsWithOptions(request: ListCloudMetricProfilingsRequest, runtime: $dara.RuntimeOptions): Promise<ListCloudMetricProfilingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudMetricProfilings",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListCloudMetricProfilingsResponse>(await this.callApi(params, req, runtime), new ListCloudMetricProfilingsResponse({}));
  }

  /**
   * Queries the profiling history of a cluster.
   * 
   * @param request - ListCloudMetricProfilingsRequest
   * @returns ListCloudMetricProfilingsResponse
   */
  async listCloudMetricProfilings(request: ListCloudMetricProfilingsRequest): Promise<ListCloudMetricProfilingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudMetricProfilingsWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of a cluster within the last three days.
   * 
   * @param request - ListClusterLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterLogsResponse
   */
  async listClusterLogsWithOptions(request: ListClusterLogsRequest, runtime: $dara.RuntimeOptions): Promise<ListClusterLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterLogs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListClusterLogsResponse>(await this.callApi(params, req, runtime), new ListClusterLogsResponse({}));
  }

  /**
   * Queries the operation logs of a cluster within the last three days.
   * 
   * @param request - ListClusterLogsRequest
   * @returns ListClusterLogsResponse
   */
  async listClusterLogs(request: ListClusterLogsRequest): Promise<ListClusterLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterLogsWithOptions(request, runtime);
  }

  /**
   * Queries the list of clusters in all regions within an account.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<ListClustersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * Queries the list of clusters in all regions within an account.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Queries the list of cluster metadata.
   * 
   * @param request - ListClustersMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersMetaResponse
   */
  async listClustersMetaWithOptions(request: ListClustersMetaRequest, runtime: $dara.RuntimeOptions): Promise<ListClustersMetaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClustersMeta",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListClustersMetaResponse>(await this.callApi(params, req, runtime), new ListClustersMetaResponse({}));
  }

  /**
   * Queries the list of cluster metadata.
   * 
   * @param request - ListClustersMetaRequest
   * @returns ListClustersMetaResponse
   */
  async listClustersMeta(request: ListClustersMetaRequest): Promise<ListClustersMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersMetaWithOptions(request, runtime);
  }

  /**
   * Queries the interactive commands in a specified cluster.
   * 
   * @param request - ListCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommandsResponse
   */
  async listCommandsWithOptions(request: ListCommandsRequest, runtime: $dara.RuntimeOptions): Promise<ListCommandsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommands",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListCommandsResponse>(await this.callApi(params, req, runtime), new ListCommandsResponse({}));
  }

  /**
   * Queries the interactive commands in a specified cluster.
   * 
   * @param request - ListCommandsRequest
   * @returns ListCommandsResponse
   */
  async listCommands(request: ListCommandsRequest): Promise<ListCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommandsWithOptions(request, runtime);
  }

  /**
   * Queries a list of community images.
   * 
   * @param request - ListCommunityImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommunityImagesResponse
   */
  async listCommunityImagesWithOptions(request: ListCommunityImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListCommunityImagesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommunityImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListCommunityImagesResponse>(await this.callApi(params, req, runtime), new ListCommunityImagesResponse({}));
  }

  /**
   * Queries a list of community images.
   * 
   * @param request - ListCommunityImagesRequest
   * @returns ListCommunityImagesResponse
   */
  async listCommunityImages(request: ListCommunityImagesRequest): Promise<ListCommunityImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommunityImagesWithOptions(request, runtime);
  }

  /**
   * Queries the information about Cloud Paralleled File System (CPFS) and its mount targets.
   * 
   * @param request - ListCpfsFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCpfsFileSystemsResponse
   */
  async listCpfsFileSystemsWithOptions(request: ListCpfsFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<ListCpfsFileSystemsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCpfsFileSystems",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListCpfsFileSystemsResponse>(await this.callApi(params, req, runtime), new ListCpfsFileSystemsResponse({}));
  }

  /**
   * Queries the information about Cloud Paralleled File System (CPFS) and its mount targets.
   * 
   * @param request - ListCpfsFileSystemsRequest
   * @returns ListCpfsFileSystemsResponse
   */
  async listCpfsFileSystems(request: ListCpfsFileSystemsRequest): Promise<ListCpfsFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCpfsFileSystemsWithOptions(request, runtime);
  }

  /**
   * Query the latest version number of the cluster client (ehpcutil).
   * 
   * @param request - ListCurrentClientVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCurrentClientVersionResponse
   */
  async listCurrentClientVersionWithOptions(runtime: $dara.RuntimeOptions): Promise<ListCurrentClientVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListCurrentClientVersion",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListCurrentClientVersionResponse>(await this.callApi(params, req, runtime), new ListCurrentClientVersionResponse({}));
  }

  /**
   * Query the latest version number of the cluster client (ehpcutil).
   * @returns ListCurrentClientVersionResponse
   */
  async listCurrentClientVersion(): Promise<ListCurrentClientVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCurrentClientVersionWithOptions(runtime);
  }

  /**
   * Queries custom images and shared images supported by Elastic High Performance Computing (E-HPC).
   * 
   * @param request - ListCustomImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomImagesResponse
   */
  async listCustomImagesWithOptions(request: ListCustomImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListCustomImagesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListCustomImagesResponse>(await this.callApi(params, req, runtime), new ListCustomImagesResponse({}));
  }

  /**
   * Queries custom images and shared images supported by Elastic High Performance Computing (E-HPC).
   * 
   * @param request - ListCustomImagesRequest
   * @returns ListCustomImagesResponse
   */
  async listCustomImages(request: ListCustomImagesRequest): Promise<ListCustomImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  /**
   * Queries file systems and mount targets.
   * 
   * @param request - ListFileSystemWithMountTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileSystemWithMountTargetsResponse
   */
  async listFileSystemWithMountTargetsWithOptions(request: ListFileSystemWithMountTargetsRequest, runtime: $dara.RuntimeOptions): Promise<ListFileSystemWithMountTargetsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFileSystemWithMountTargets",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListFileSystemWithMountTargetsResponse>(await this.callApi(params, req, runtime), new ListFileSystemWithMountTargetsResponse({}));
  }

  /**
   * Queries file systems and mount targets.
   * 
   * @param request - ListFileSystemWithMountTargetsRequest
   * @returns ListFileSystemWithMountTargetsResponse
   */
  async listFileSystemWithMountTargets(request: ListFileSystemWithMountTargetsRequest): Promise<ListFileSystemWithMountTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFileSystemWithMountTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the list of images that can be installed in a cluster.
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListImagesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
   * Queries the list of images that can be installed in a cluster.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Queries the software that is installed in a cluster.
   * 
   * @param request - ListInstalledSoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstalledSoftwareResponse
   */
  async listInstalledSoftwareWithOptions(request: ListInstalledSoftwareRequest, runtime: $dara.RuntimeOptions): Promise<ListInstalledSoftwareResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstalledSoftware",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListInstalledSoftwareResponse>(await this.callApi(params, req, runtime), new ListInstalledSoftwareResponse({}));
  }

  /**
   * Queries the software that is installed in a cluster.
   * 
   * @param request - ListInstalledSoftwareRequest
   * @returns ListInstalledSoftwareResponse
   */
  async listInstalledSoftware(request: ListInstalledSoftwareRequest): Promise<ListInstalledSoftwareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstalledSoftwareWithOptions(request, runtime);
  }

  /**
   * Queries the result of an interactive command in a cluster.
   * 
   * @param request - ListInvocationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInvocationResultsResponse
   */
  async listInvocationResultsWithOptions(request: ListInvocationResultsRequest, runtime: $dara.RuntimeOptions): Promise<ListInvocationResultsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInvocationResults",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListInvocationResultsResponse>(await this.callApi(params, req, runtime), new ListInvocationResultsResponse({}));
  }

  /**
   * Queries the result of an interactive command in a cluster.
   * 
   * @param request - ListInvocationResultsRequest
   * @returns ListInvocationResultsResponse
   */
  async listInvocationResults(request: ListInvocationResultsRequest): Promise<ListInvocationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInvocationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the status of an interactive command.
   * 
   * @param request - ListInvocationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInvocationStatusResponse
   */
  async listInvocationStatusWithOptions(request: ListInvocationStatusRequest, runtime: $dara.RuntimeOptions): Promise<ListInvocationStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInvocationStatus",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListInvocationStatusResponse>(await this.callApi(params, req, runtime), new ListInvocationStatusResponse({}));
  }

  /**
   * Queries the status of an interactive command.
   * 
   * @param request - ListInvocationStatusRequest
   * @returns ListInvocationStatusResponse
   */
  async listInvocationStatus(request: ListInvocationStatusRequest): Promise<ListInvocationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInvocationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the list of job templates.
   * 
   * @param request - ListJobTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobTemplatesResponse
   */
  async listJobTemplatesWithOptions(request: ListJobTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<ListJobTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobTemplates",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListJobTemplatesResponse>(await this.callApi(params, req, runtime), new ListJobTemplatesResponse({}));
  }

  /**
   * Queries the list of job templates.
   * 
   * @param request - ListJobTemplatesRequest
   * @returns ListJobTemplatesResponse
   */
  async listJobTemplates(request: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the list of jobs in a cluster.
   * 
   * @param request - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * Queries the list of jobs in a cluster.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified job.
   * 
   * @param request - ListJobsWithFiltersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsWithFiltersResponse
   */
  async listJobsWithFiltersWithOptions(request: ListJobsWithFiltersRequest, runtime: $dara.RuntimeOptions): Promise<ListJobsWithFiltersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobsWithFilters",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListJobsWithFiltersResponse>(await this.callApi(params, req, runtime), new ListJobsWithFiltersResponse({}));
  }

  /**
   * Queries the details of a specified job.
   * 
   * @param request - ListJobsWithFiltersRequest
   * @returns ListJobsWithFiltersResponse
   */
  async listJobsWithFilters(request: ListJobsWithFiltersRequest): Promise<ListJobsWithFiltersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithFiltersWithOptions(request, runtime);
  }

  /**
   * Queries the list of nodes in a cluster.
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<ListNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * Queries the list of nodes in a cluster.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries the node information of a single cluster within an Alibaba Cloud account by queue.
   * 
   * @param request - ListNodesByQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesByQueueResponse
   */
  async listNodesByQueueWithOptions(request: ListNodesByQueueRequest, runtime: $dara.RuntimeOptions): Promise<ListNodesByQueueResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodesByQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNodesByQueueResponse>(await this.callApi(params, req, runtime), new ListNodesByQueueResponse({}));
  }

  /**
   * Queries the node information of a single cluster within an Alibaba Cloud account by queue.
   * 
   * @param request - ListNodesByQueueRequest
   * @returns ListNodesByQueueResponse
   */
  async listNodesByQueue(request: ListNodesByQueueRequest): Promise<ListNodesByQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesByQueueWithOptions(request, runtime);
  }

  /**
   * Queries the information of all nodes in a specified cluster on one page.
   * 
   * @param request - ListNodesNoPagingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesNoPagingResponse
   */
  async listNodesNoPagingWithOptions(request: ListNodesNoPagingRequest, runtime: $dara.RuntimeOptions): Promise<ListNodesNoPagingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodesNoPaging",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNodesNoPagingResponse>(await this.callApi(params, req, runtime), new ListNodesNoPagingResponse({}));
  }

  /**
   * Queries the information of all nodes in a specified cluster on one page.
   * 
   * @param request - ListNodesNoPagingRequest
   * @returns ListNodesNoPagingResponse
   */
  async listNodesNoPaging(request: ListNodesNoPagingRequest): Promise<ListNodesNoPagingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesNoPagingWithOptions(request, runtime);
  }

  /**
   * Queries the Elastic Compute Service (ECS) instance types recommended by Elastic High Performance Computing (E-HPC).
   * 
   * @param request - ListPreferredEcsTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPreferredEcsTypesResponse
   */
  async listPreferredEcsTypesWithOptions(request: ListPreferredEcsTypesRequest, runtime: $dara.RuntimeOptions): Promise<ListPreferredEcsTypesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPreferredEcsTypes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListPreferredEcsTypesResponse>(await this.callApi(params, req, runtime), new ListPreferredEcsTypesResponse({}));
  }

  /**
   * Queries the Elastic Compute Service (ECS) instance types recommended by Elastic High Performance Computing (E-HPC).
   * 
   * @param request - ListPreferredEcsTypesRequest
   * @returns ListPreferredEcsTypesResponse
   */
  async listPreferredEcsTypes(request: ListPreferredEcsTypesRequest): Promise<ListPreferredEcsTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPreferredEcsTypesWithOptions(request, runtime);
  }

  /**
   * Queries the queues of a specified cluster.
   * 
   * @param request - ListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueuesResponse
   */
  async listQueuesWithOptions(request: ListQueuesRequest, runtime: $dara.RuntimeOptions): Promise<ListQueuesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueues",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListQueuesResponse>(await this.callApi(params, req, runtime), new ListQueuesResponse({}));
  }

  /**
   * Queries the queues of a specified cluster.
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions where Elastic High Performance Computing (E-HPC) is supported.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  /**
   * Queries a list of regions where Elastic High Performance Computing (E-HPC) is supported.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * Queries the security groups that are assigned to an E-HPC cluster.
   * 
   * @param request - ListSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityGroupsResponse
   */
  async listSecurityGroupsWithOptions(request: ListSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListSecurityGroupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecurityGroups",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListSecurityGroupsResponse>(await this.callApi(params, req, runtime), new ListSecurityGroupsResponse({}));
  }

  /**
   * Queries the security groups that are assigned to an E-HPC cluster.
   * 
   * @param request - ListSecurityGroupsRequest
   * @returns ListSecurityGroupsResponse
   */
  async listSecurityGroups(request: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the list of serverless jobs based on filter conditions.
   * 
   * @param request - ListServerlessJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerlessJobsResponse
   */
  async listServerlessJobsWithOptions(request: ListServerlessJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListServerlessJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.jobNames)) {
      query["JobNames"] = request.jobNames;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startOrder)) {
      query["StartOrder"] = request.startOrder;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.submitOrder)) {
      query["SubmitOrder"] = request.submitOrder;
    }

    if (!$dara.isNull(request.submitTimeEnd)) {
      query["SubmitTimeEnd"] = request.submitTimeEnd;
    }

    if (!$dara.isNull(request.submitTimeStart)) {
      query["SubmitTimeStart"] = request.submitTimeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServerlessJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServerlessJobsResponse>(await this.callApi(params, req, runtime), new ListServerlessJobsResponse({}));
  }

  /**
   * Queries the list of serverless jobs based on filter conditions.
   * 
   * @param request - ListServerlessJobsRequest
   * @returns ListServerlessJobsResponse
   */
  async listServerlessJobs(request: ListServerlessJobsRequest): Promise<ListServerlessJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServerlessJobsWithOptions(request, runtime);
  }

  /**
   * Queries the list of software that can be installed in a cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwaresResponse
   */
  async listSoftwaresWithOptions(request: ListSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<ListSoftwaresResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSoftwares",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListSoftwaresResponse>(await this.callApi(params, req, runtime), new ListSoftwaresResponse({}));
  }

  /**
   * Queries the list of software that can be installed in a cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @returns ListSoftwaresResponse
   */
  async listSoftwares(request: ListSoftwaresRequest): Promise<ListSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the response of an asynchronous API operation for a cluster.
   * 
   * @remarks
   * For some asynchronous API operations such as AddNodes, the system immediately returns a result without waiting for the node to be created if the request succeeds. In this case, you can use the TaskId returned by the asynchronous API operation to query the result of the task.
   * 
   * @param request - ListTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(request: ListTasksRequest, runtime: $dara.RuntimeOptions): Promise<ListTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
   * Queries the response of an asynchronous API operation for a cluster.
   * 
   * @remarks
   * For some asynchronous API operations such as AddNodes, the system immediately returns a result without waiting for the node to be created if the request succeeds. In this case, you can use the TaskId returned by the asynchronous API operation to query the result of the task.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
   * Queries the latest version to which the client (ehpcutil) in a cluster can be updated and historical update records of the client.
   * 
   * @param request - ListUpgradeClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUpgradeClientsResponse
   */
  async listUpgradeClientsWithOptions(request: ListUpgradeClientsRequest, runtime: $dara.RuntimeOptions): Promise<ListUpgradeClientsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUpgradeClients",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUpgradeClientsResponse>(await this.callApi(params, req, runtime), new ListUpgradeClientsResponse({}));
  }

  /**
   * Queries the latest version to which the client (ehpcutil) in a cluster can be updated and historical update records of the client.
   * 
   * @param request - ListUpgradeClientsRequest
   * @returns ListUpgradeClientsResponse
   */
  async listUpgradeClients(request: ListUpgradeClientsRequest): Promise<ListUpgradeClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUpgradeClientsWithOptions(request, runtime);
  }

  /**
   * Queries all users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
   * Queries all users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries the users in a cluster.
   * 
   * @param request - ListUsersAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersAsyncResponse
   */
  async listUsersAsyncWithOptions(request: ListUsersAsyncRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersAsyncResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersAsync",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUsersAsyncResponse>(await this.callApi(params, req, runtime), new ListUsersAsyncResponse({}));
  }

  /**
   * Queries the users in a cluster.
   * 
   * @param request - ListUsersAsyncRequest
   * @returns ListUsersAsyncResponse
   */
  async listUsersAsync(request: ListUsersAsyncRequest): Promise<ListUsersAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersAsyncWithOptions(request, runtime);
  }

  /**
   * Queries the file systems mounted on Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @param request - ListVolumesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVolumesResponse
   */
  async listVolumesWithOptions(request: ListVolumesRequest, runtime: $dara.RuntimeOptions): Promise<ListVolumesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVolumes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListVolumesResponse>(await this.callApi(params, req, runtime), new ListVolumesResponse({}));
  }

  /**
   * Queries the file systems mounted on Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @param request - ListVolumesRequest
   * @returns ListVolumesResponse
   */
  async listVolumes(request: ListVolumesRequest): Promise<ListVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVolumesWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information of a cluster, including the name, description, and image.
   * 
   * @remarks
   * ## Usage notes
   * Before you call this operation, you can call the [DescribeCluster](https://help.aliyun.com/document_detail/87126.html) operation to query details of the selected cluster.
   * 
   * @param request - ModifyClusterAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterAttributesResponse
   */
  async modifyClusterAttributesWithOptions(request: ModifyClusterAttributesRequest, runtime: $dara.RuntimeOptions): Promise<ModifyClusterAttributesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterAttributes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyClusterAttributesResponse>(await this.callApi(params, req, runtime), new ModifyClusterAttributesResponse({}));
  }

  /**
   * Modifies the basic information of a cluster, including the name, description, and image.
   * 
   * @remarks
   * ## Usage notes
   * Before you call this operation, you can call the [DescribeCluster](https://help.aliyun.com/document_detail/87126.html) operation to query details of the selected cluster.
   * 
   * @param request - ModifyClusterAttributesRequest
   * @returns ModifyClusterAttributesResponse
   */
  async modifyClusterAttributes(request: ModifyClusterAttributesRequest): Promise<ModifyClusterAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterAttributesWithOptions(request, runtime);
  }

  /**
   * Changes the user group to which users belong.
   * 
   * @param request - ModifyUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserGroupsResponse
   */
  async modifyUserGroupsWithOptions(request: ModifyUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ModifyUserGroupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserGroups",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyUserGroupsResponse>(await this.callApi(params, req, runtime), new ModifyUserGroupsResponse({}));
  }

  /**
   * Changes the user group to which users belong.
   * 
   * @param request - ModifyUserGroupsRequest
   * @returns ModifyUserGroupsResponse
   */
  async modifyUserGroups(request: ModifyUserGroupsRequest): Promise<ModifyUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserGroupsWithOptions(request, runtime);
  }

  /**
   * Changes the passwords of users.
   * 
   * @param request - ModifyUserPasswordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserPasswordsResponse
   */
  async modifyUserPasswordsWithOptions(request: ModifyUserPasswordsRequest, runtime: $dara.RuntimeOptions): Promise<ModifyUserPasswordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserPasswords",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyUserPasswordsResponse>(await this.callApi(params, req, runtime), new ModifyUserPasswordsResponse({}));
  }

  /**
   * Changes the passwords of users.
   * 
   * @param request - ModifyUserPasswordsRequest
   * @returns ModifyUserPasswordsResponse
   */
  async modifyUserPasswords(request: ModifyUserPasswordsRequest): Promise<ModifyUserPasswordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserPasswordsWithOptions(request, runtime);
  }

  /**
   * Sets a password that you can use to remotely connect to a visualization service in a cluster over the virtual network console (VNC).
   * 
   * @param request - ModifyVisualServicePasswdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVisualServicePasswdResponse
   */
  async modifyVisualServicePasswdWithOptions(request: ModifyVisualServicePasswdRequest, runtime: $dara.RuntimeOptions): Promise<ModifyVisualServicePasswdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVisualServicePasswd",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyVisualServicePasswdResponse>(await this.callApi(params, req, runtime), new ModifyVisualServicePasswdResponse({}));
  }

  /**
   * Sets a password that you can use to remotely connect to a visualization service in a cluster over the virtual network console (VNC).
   * 
   * @param request - ModifyVisualServicePasswdRequest
   * @returns ModifyVisualServicePasswdResponse
   */
  async modifyVisualServicePasswd(request: ModifyVisualServicePasswdRequest): Promise<ModifyVisualServicePasswdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVisualServicePasswdWithOptions(request, runtime);
  }

  /**
   * @param request - PullImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullImageResponse
   */
  async pullImageWithOptions(request: PullImageRequest, runtime: $dara.RuntimeOptions): Promise<PullImageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PullImage",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<PullImageResponse>(await this.callApi(params, req, runtime), new PullImageResponse({}));
  }

  /**
   * @param request - PullImageRequest
   * @returns PullImageResponse
   */
  async pullImage(request: PullImageRequest): Promise<PullImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pullImageWithOptions(request, runtime);
  }

  /**
   * @param request - QueryServicePackAndPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryServicePackAndPriceResponse
   */
  async queryServicePackAndPriceWithOptions(runtime: $dara.RuntimeOptions): Promise<QueryServicePackAndPriceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryServicePackAndPrice",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryServicePackAndPriceResponse>(await this.callApi(params, req, runtime), new QueryServicePackAndPriceResponse({}));
  }

  /**
   * @returns QueryServicePackAndPriceResponse
   */
  async queryServicePackAndPrice(): Promise<QueryServicePackAndPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryServicePackAndPriceWithOptions(runtime);
  }

  /**
   * Resets and restores a cluster.
   * 
   * @remarks
   * You can call the operation to reset and restore a cluster only when the cluster is in the Exception state. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the ID and status of a cluster. We recommend that you export all job data before you restore a cluster. When you reset and restore a cluster, take note of the following impacts:
   * *   The system disks of all nodes are changed. By default, new system disks are configured based on the settings that you specified when the cluster was created.
   * *   The data on the system disks and data disks of all cluster nodes is lost. The data includes user information, job information, scheduler queue information, and configuration data of auto-scaling queues. However, the data on File Storage NAS file systems is retained.
   * *   The self-managed queues in the cluster are deleted. All nodes are retained and migrated to the default queue of the cluster.
   * 
   * @param request - RecoverClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverClusterResponse
   */
  async recoverClusterWithOptions(request: RecoverClusterRequest, runtime: $dara.RuntimeOptions): Promise<RecoverClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RecoverClusterResponse>(await this.callApi(params, req, runtime), new RecoverClusterResponse({}));
  }

  /**
   * Resets and restores a cluster.
   * 
   * @remarks
   * You can call the operation to reset and restore a cluster only when the cluster is in the Exception state. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the ID and status of a cluster. We recommend that you export all job data before you restore a cluster. When you reset and restore a cluster, take note of the following impacts:
   * *   The system disks of all nodes are changed. By default, new system disks are configured based on the settings that you specified when the cluster was created.
   * *   The data on the system disks and data disks of all cluster nodes is lost. The data includes user information, job information, scheduler queue information, and configuration data of auto-scaling queues. However, the data on File Storage NAS file systems is retained.
   * *   The self-managed queues in the cluster are deleted. All nodes are retained and migrated to the default queue of the cluster.
   * 
   * @param request - RecoverClusterRequest
   * @returns RecoverClusterResponse
   */
  async recoverCluster(request: RecoverClusterRequest): Promise<RecoverClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverClusterWithOptions(request, runtime);
  }

  /**
   * @param request - RerunJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RerunJobsResponse
   */
  async rerunJobsWithOptions(request: RerunJobsRequest, runtime: $dara.RuntimeOptions): Promise<RerunJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RerunJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RerunJobsResponse>(await this.callApi(params, req, runtime), new RerunJobsResponse({}));
  }

  /**
   * @param request - RerunJobsRequest
   * @returns RerunJobsResponse
   */
  async rerunJobs(request: RerunJobsRequest): Promise<RerunJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rerunJobsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * After a node is reset, the operating system and software return to their initial states. To ensure that jobs run as expected, we recommend that you do not reset running nodes unless you need to perform crash recovery.
   * 
   * @param request - ResetNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetNodesResponse
   */
  async resetNodesWithOptions(request: ResetNodesRequest, runtime: $dara.RuntimeOptions): Promise<ResetNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ResetNodesResponse>(await this.callApi(params, req, runtime), new ResetNodesResponse({}));
  }

  /**
   * @remarks
   * After a node is reset, the operating system and software return to their initial states. To ensure that jobs run as expected, we recommend that you do not reset running nodes unless you need to perform crash recovery.
   * 
   * @param request - ResetNodesRequest
   * @returns ResetNodesResponse
   */
  async resetNodes(request: ResetNodesRequest): Promise<ResetNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetNodesWithOptions(request, runtime);
  }

  /**
   * Starts the profiling process of a cluster.
   * 
   * @param request - RunCloudMetricProfilingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCloudMetricProfilingResponse
   */
  async runCloudMetricProfilingWithOptions(request: RunCloudMetricProfilingRequest, runtime: $dara.RuntimeOptions): Promise<RunCloudMetricProfilingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCloudMetricProfiling",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunCloudMetricProfilingResponse>(await this.callApi(params, req, runtime), new RunCloudMetricProfilingResponse({}));
  }

  /**
   * Starts the profiling process of a cluster.
   * 
   * @param request - RunCloudMetricProfilingRequest
   * @returns RunCloudMetricProfilingResponse
   */
  async runCloudMetricProfiling(request: RunCloudMetricProfilingRequest): Promise<RunCloudMetricProfilingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCloudMetricProfilingWithOptions(request, runtime);
  }

  /**
   * Configures the auto scaling settings of a cluster.
   * 
   * @remarks
   * ## Usage notes
   * If the settings in the Queue Configuration section are different from the settings in the Global Configurations section, the former prevails.
   * 
   * @param request - SetAutoScaleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAutoScaleConfigResponse
   */
  async setAutoScaleConfigWithOptions(request: SetAutoScaleConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetAutoScaleConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAutoScaleConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new SetAutoScaleConfigResponse({}));
  }

  /**
   * Configures the auto scaling settings of a cluster.
   * 
   * @remarks
   * ## Usage notes
   * If the settings in the Queue Configuration section are different from the settings in the Global Configurations section, the former prevails.
   * 
   * @param request - SetAutoScaleConfigRequest
   * @returns SetAutoScaleConfigResponse
   */
  async setAutoScaleConfig(request: SetAutoScaleConfigRequest): Promise<SetAutoScaleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAutoScaleConfigWithOptions(request, runtime);
  }

  /**
   * Configures the post-processing scripts of a cluster.
   * 
   * @param request - SetPostScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPostScriptsResponse
   */
  async setPostScriptsWithOptions(request: SetPostScriptsRequest, runtime: $dara.RuntimeOptions): Promise<SetPostScriptsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPostScripts",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetPostScriptsResponse>(await this.callApi(params, req, runtime), new SetPostScriptsResponse({}));
  }

  /**
   * Configures the post-processing scripts of a cluster.
   * 
   * @param request - SetPostScriptsRequest
   * @returns SetPostScriptsResponse
   */
  async setPostScripts(request: SetPostScriptsRequest): Promise<SetPostScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPostScriptsWithOptions(request, runtime);
  }

  /**
   * @param request - SetQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetQueueResponse
   */
  async setQueueWithOptions(request: SetQueueRequest, runtime: $dara.RuntimeOptions): Promise<SetQueueResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetQueueResponse>(await this.callApi(params, req, runtime), new SetQueueResponse({}));
  }

  /**
   * @param request - SetQueueRequest
   * @returns SetQueueResponse
   */
  async setQueue(request: SetQueueRequest): Promise<SetQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setQueueWithOptions(request, runtime);
  }

  /**
   * Configures the scheduler settings of a cluster.
   * 
   * @param request - SetSchedulerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSchedulerInfoResponse
   */
  async setSchedulerInfoWithOptions(request: SetSchedulerInfoRequest, runtime: $dara.RuntimeOptions): Promise<SetSchedulerInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSchedulerInfo",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetSchedulerInfoResponse>(await this.callApi(params, req, runtime), new SetSchedulerInfoResponse({}));
  }

  /**
   * Configures the scheduler settings of a cluster.
   * 
   * @param request - SetSchedulerInfoRequest
   * @returns SetSchedulerInfoResponse
   */
  async setSchedulerInfo(request: SetSchedulerInfoRequest): Promise<SetSchedulerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSchedulerInfoWithOptions(request, runtime);
  }

  /**
   * @param request - StartClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartClusterResponse
   */
  async startClusterWithOptions(request: StartClusterRequest, runtime: $dara.RuntimeOptions): Promise<StartClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartClusterResponse>(await this.callApi(params, req, runtime), new StartClusterResponse({}));
  }

  /**
   * @param request - StartClusterRequest
   * @returns StartClusterResponse
   */
  async startCluster(request: StartClusterRequest): Promise<StartClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startClusterWithOptions(request, runtime);
  }

  /**
   * @param request - StartNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartNodesResponse
   */
  async startNodesWithOptions(request: StartNodesRequest, runtime: $dara.RuntimeOptions): Promise<StartNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartNodesResponse>(await this.callApi(params, req, runtime), new StartNodesResponse({}));
  }

  /**
   * @param request - StartNodesRequest
   * @returns StartNodesResponse
   */
  async startNodes(request: StartNodesRequest): Promise<StartNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startNodesWithOptions(request, runtime);
  }

  /**
   * Starts the Virtual Network Console (VNC) Remote visualization service in a specified cluster.
   * 
   * @param request - StartVisualServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartVisualServiceResponse
   */
  async startVisualServiceWithOptions(request: StartVisualServiceRequest, runtime: $dara.RuntimeOptions): Promise<StartVisualServiceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartVisualService",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartVisualServiceResponse>(await this.callApi(params, req, runtime), new StartVisualServiceResponse({}));
  }

  /**
   * Starts the Virtual Network Console (VNC) Remote visualization service in a specified cluster.
   * 
   * @param request - StartVisualServiceRequest
   * @returns StartVisualServiceResponse
   */
  async startVisualService(request: StartVisualServiceRequest): Promise<StartVisualServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startVisualServiceWithOptions(request, runtime);
  }

  /**
   * Stops a cluster.
   * 
   * @remarks
   * If you stop a subscription compute node, its billing is not affected. If you stop a pay-as-you-go compute node for which you have enabled the *economical mode*, you are no longer charged for its computing resources. For more information, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * @param request - StopClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopClusterResponse
   */
  async stopClusterWithOptions(request: StopClusterRequest, runtime: $dara.RuntimeOptions): Promise<StopClusterResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopClusterResponse>(await this.callApi(params, req, runtime), new StopClusterResponse({}));
  }

  /**
   * Stops a cluster.
   * 
   * @remarks
   * If you stop a subscription compute node, its billing is not affected. If you stop a pay-as-you-go compute node for which you have enabled the *economical mode*, you are no longer charged for its computing resources. For more information, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * @param request - StopClusterRequest
   * @returns StopClusterResponse
   */
  async stopCluster(request: StopClusterRequest): Promise<StopClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopClusterWithOptions(request, runtime);
  }

  /**
   * @param request - StopJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobsResponse
   */
  async stopJobsWithOptions(request: StopJobsRequest, runtime: $dara.RuntimeOptions): Promise<StopJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopJobsResponse>(await this.callApi(params, req, runtime), new StopJobsResponse({}));
  }

  /**
   * @param request - StopJobsRequest
   * @returns StopJobsResponse
   */
  async stopJobs(request: StopJobsRequest): Promise<StopJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopJobsWithOptions(request, runtime);
  }

  /**
   * @param request - StopNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopNodesResponse
   */
  async stopNodesWithOptions(request: StopNodesRequest, runtime: $dara.RuntimeOptions): Promise<StopNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopNodesResponse>(await this.callApi(params, req, runtime), new StopNodesResponse({}));
  }

  /**
   * @param request - StopNodesRequest
   * @returns StopNodesResponse
   */
  async stopNodes(request: StopNodesRequest): Promise<StopNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopNodesWithOptions(request, runtime);
  }

  /**
   * Stops Serverless jobs in a cluster based on job IDs or subtask IDs (array jobs). If you specify the job ID of an array job, all subtasks in the job are stopped.
   * 
   * @param request - StopServerlessJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServerlessJobsResponse
   */
  async stopServerlessJobsWithOptions(request: StopServerlessJobsRequest, runtime: $dara.RuntimeOptions): Promise<StopServerlessJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopServerlessJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopServerlessJobsResponse>(await this.callApi(params, req, runtime), new StopServerlessJobsResponse({}));
  }

  /**
   * Stops Serverless jobs in a cluster based on job IDs or subtask IDs (array jobs). If you specify the job ID of an array job, all subtasks in the job are stopped.
   * 
   * @param request - StopServerlessJobsRequest
   * @returns StopServerlessJobsResponse
   */
  async stopServerlessJobs(request: StopServerlessJobsRequest): Promise<StopServerlessJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopServerlessJobsWithOptions(request, runtime);
  }

  /**
   * Stops the remote visualization service of Virtual Network Console (VNC) in a cluster.
   * 
   * @param request - StopVisualServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopVisualServiceResponse
   */
  async stopVisualServiceWithOptions(request: StopVisualServiceRequest, runtime: $dara.RuntimeOptions): Promise<StopVisualServiceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopVisualService",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopVisualServiceResponse>(await this.callApi(params, req, runtime), new StopVisualServiceResponse({}));
  }

  /**
   * Stops the remote visualization service of Virtual Network Console (VNC) in a cluster.
   * 
   * @param request - StopVisualServiceRequest
   * @returns StopVisualServiceResponse
   */
  async stopVisualService(request: StopVisualServiceRequest): Promise<StopVisualServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopVisualServiceWithOptions(request, runtime);
  }

  /**
   * Submits a job in a cluster.
   * 
   * @remarks
   * The ID of the request.
   * 
   * @param request - SubmitJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitJobResponse
   */
  async submitJobWithOptions(request: SubmitJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitJob",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SubmitJobResponse>(await this.callApi(params, req, runtime), new SubmitJobResponse({}));
  }

  /**
   * Submits a job in a cluster.
   * 
   * @remarks
   * The ID of the request.
   * 
   * @param request - SubmitJobRequest
   * @returns SubmitJobResponse
   */
  async submitJob(request: SubmitJobRequest): Promise<SubmitJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitJobWithOptions(request, runtime);
  }

  /**
   * Submits a serverless job to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - SubmitServerlessJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitServerlessJobResponse
   */
  async submitServerlessJobWithOptions(tmpReq: SubmitServerlessJobRequest, runtime: $dara.RuntimeOptions): Promise<SubmitServerlessJobResponse> {
    tmpReq.validate();
    let request = new SubmitServerlessJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.arrayProperties)) {
      request.arrayPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arrayProperties, "ArrayProperties", "json");
    }

    if (!$dara.isNull(tmpReq.container)) {
      request.containerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.container, "Container", "json");
    }

    if (!$dara.isNull(tmpReq.dependsOn)) {
      request.dependsOnShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependsOn, "DependsOn", "json");
    }

    if (!$dara.isNull(tmpReq.instanceType)) {
      request.instanceTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceType, "InstanceType", "json");
    }

    if (!$dara.isNull(tmpReq.retryStrategy)) {
      request.retryStrategyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retryStrategy, "RetryStrategy", "json");
    }

    if (!$dara.isNull(tmpReq.vSwitchId)) {
      request.vSwitchIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vSwitchId, "VSwitchId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.arrayPropertiesShrink)) {
      query["ArrayProperties"] = request.arrayPropertiesShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.containerShrink)) {
      query["Container"] = request.containerShrink;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.dependsOnShrink)) {
      query["DependsOn"] = request.dependsOnShrink;
    }

    if (!$dara.isNull(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!$dara.isNull(request.instanceTypeShrink)) {
      query["InstanceType"] = request.instanceTypeShrink;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.jobPriority)) {
      query["JobPriority"] = request.jobPriority;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.retryStrategyShrink)) {
      query["RetryStrategy"] = request.retryStrategyShrink;
    }

    if (!$dara.isNull(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.vSwitchIdShrink)) {
      query["VSwitchId"] = request.vSwitchIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitServerlessJob",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SubmitServerlessJobResponse>(await this.callApi(params, req, runtime), new SubmitServerlessJobResponse({}));
  }

  /**
   * Submits a serverless job to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - SubmitServerlessJobRequest
   * @returns SubmitServerlessJobResponse
   */
  async submitServerlessJob(request: SubmitServerlessJobRequest): Promise<SubmitServerlessJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitServerlessJobWithOptions(request, runtime);
  }

  /**
   * Synchronizes local cluster users to a hybrid cloud cluster in hybrid-cloud proxy mode.
   * 
   * @param request - SyncUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncUsersResponse
   */
  async syncUsersWithOptions(request: SyncUsersRequest, runtime: $dara.RuntimeOptions): Promise<SyncUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncUsers",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SyncUsersResponse>(await this.callApi(params, req, runtime), new SyncUsersResponse({}));
  }

  /**
   * Synchronizes local cluster users to a hybrid cloud cluster in hybrid-cloud proxy mode.
   * 
   * @param request - SyncUsersRequest
   * @returns SyncUsersResponse
   */
  async syncUsers(request: SyncUsersRequest): Promise<SyncUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncUsersWithOptions(request, runtime);
  }

  /**
   * Creates tags and attach the tags to a specified resource.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Creates tags and attach the tags to a specified resource.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a specified resource.
   * 
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UnTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
  }

  /**
   * Removes tags from a specified resource.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Uninstalls software from a cluster.
   * 
   * @param request - UninstallSoftwareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallSoftwareResponse
   */
  async uninstallSoftwareWithOptions(request: UninstallSoftwareRequest, runtime: $dara.RuntimeOptions): Promise<UninstallSoftwareResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallSoftware",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UninstallSoftwareResponse>(await this.callApi(params, req, runtime), new UninstallSoftwareResponse({}));
  }

  /**
   * Uninstalls software from a cluster.
   * 
   * @param request - UninstallSoftwareRequest
   * @returns UninstallSoftwareResponse
   */
  async uninstallSoftware(request: UninstallSoftwareRequest): Promise<UninstallSoftwareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallSoftwareWithOptions(request, runtime);
  }

  /**
   * Mount new storage resources to a cluster.
   * 
   * @param request - UpdateClusterVolumesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterVolumesResponse
   */
  async updateClusterVolumesWithOptions(request: UpdateClusterVolumesRequest, runtime: $dara.RuntimeOptions): Promise<UpdateClusterVolumesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClusterVolumes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateClusterVolumesResponse>(await this.callApi(params, req, runtime), new UpdateClusterVolumesResponse({}));
  }

  /**
   * Mount new storage resources to a cluster.
   * 
   * @param request - UpdateClusterVolumesRequest
   * @returns UpdateClusterVolumesResponse
   */
  async updateClusterVolumes(request: UpdateClusterVolumesRequest): Promise<UpdateClusterVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterVolumesWithOptions(request, runtime);
  }

  /**
   * Updates the resource group information and the instance types of compute nodes for a queue of a cluster.
   * 
   * @remarks
   * After you update the resource group, the nodes that you add by scaling out the cluster are automatically included in the resource group.
   * 
   * @param request - UpdateQueueConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQueueConfigResponse
   */
  async updateQueueConfigWithOptions(request: UpdateQueueConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateQueueConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQueueConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateQueueConfigResponse>(await this.callApi(params, req, runtime), new UpdateQueueConfigResponse({}));
  }

  /**
   * Updates the resource group information and the instance types of compute nodes for a queue of a cluster.
   * 
   * @remarks
   * After you update the resource group, the nodes that you add by scaling out the cluster are automatically included in the resource group.
   * 
   * @param request - UpdateQueueConfigRequest
   * @returns UpdateQueueConfigResponse
   */
  async updateQueueConfig(request: UpdateQueueConfigRequest): Promise<UpdateQueueConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQueueConfigWithOptions(request, runtime);
  }

  /**
   * Updates the client (ehpcutil) in a cluster to a new version.
   * 
   * @param request - UpgradeClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClientResponse
   */
  async upgradeClientWithOptions(request: UpgradeClientRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeClientResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeClient",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpgradeClientResponse>(await this.callApi(params, req, runtime), new UpgradeClientResponse({}));
  }

  /**
   * Updates the client (ehpcutil) in a cluster to a new version.
   * 
   * @param request - UpgradeClientRequest
   * @returns UpgradeClientResponse
   */
  async upgradeClient(request: UpgradeClientRequest): Promise<UpgradeClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

}
