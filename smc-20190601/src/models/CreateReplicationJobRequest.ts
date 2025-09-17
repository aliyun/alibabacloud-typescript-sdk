// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationJobRequestDataDiskPart extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable block replication for partition N in the destination data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The device ID of partition N in the destination data disk. The partitions in the destination data disk are arranged in the same sequential order as those in the source data disk.
   * 
   * >  You must set both the DataDisk.N.Part.N.Device and `DataDisk.N.Part.N.SizeBytes` parameters or leave both parameters empty.
   * 
   * @example
   * 0_1
   */
  device?: string;
  /**
   * @remarks
   * The size of partition N in the destination data disk. Unit: bytes. The default value is equal to the corresponding partition size of the source data disk.
   * 
   * > 
   * 
   * *   The total size of all partitions in a destination data disk cannot exceed the size of the destination data disk.
   * 
   * *   You must set both the `DataDisk.N.Part.N.Device` and DataDisk.N.Part.N.SizeBytes parameters or leave both parameters empty.
   * 
   * @example
   * 254803968
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The index of data disk N on the destination ECS instance. Data disks on a destination ECS instance are arranged in a sequential order that starts from 1. Valid values: 1 to 16.
   * 
   * >  To create a destination data disk for a source server, make sure that the source server has data disks.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The data disk partitions.
   */
  part?: CreateReplicationJobRequestDataDiskPart[];
  /**
   * @remarks
   * The size of the data disk on the destination ECS instance. Unit: GiB. Valid values: 20 to 32768.
   * 
   * >  The size of a destination data disk must be larger than the size of data in the source data disk. For example, if the size of the source data disk is 500 GiB and the used space is 100 GiB, you must set this parameter to a value greater than 100.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      part: 'Part',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      part: { 'type': 'array', 'itemType': CreateReplicationJobRequestDataDiskPart },
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.part)) {
      $dara.Model.validateArray(this.part);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDisksDataPart extends $dara.Model {
  /**
   * @remarks
   * Whether block replication is enabled for the data disk partition. Valid values:
   * 
   * *   true: Block replication is enabled for the data disk partition.
   * *   false: Block replication is disabled for the data disk partition.
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The path of the data disk partition.
   * 
   * @example
   * /home/date
   */
  path?: string;
  /**
   * @remarks
   * The size of the data disk partition. Unit: bytes.
   * 
   * @example
   * 21474836480
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      path: 'Path',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      path: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDisksData extends $dara.Model {
  /**
   * @remarks
   * The ID of the data disk.
   * 
   * @example
   * d-2ze8hyowhdgd6ou2m5z6
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether the data disk uses LVM. Valid values:
   * 
   * *   true: Use LVM.
   * *   false: Not use LVM.
   */
  LVM?: boolean;
  /**
   * @remarks
   * The information about the data disk partition.
   */
  part?: CreateReplicationJobRequestDisksDataPart[];
  /**
   * @remarks
   * The size of the data disk of the migration source. Unit: GiB.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      LVM: 'LVM',
      part: 'Part',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      LVM: 'boolean',
      part: { 'type': 'array', 'itemType': CreateReplicationJobRequestDisksDataPart },
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.part)) {
      $dara.Model.validateArray(this.part);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDisksSystemPart extends $dara.Model {
  /**
   * @remarks
   * Specifies whether block replication is enabled for the system disk partition.
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The path of the system disk partition.
   * 
   * @example
   * /boot
   */
  path?: string;
  /**
   * @remarks
   * The size of the system disk partition. Unit: bytes.
   * 
   * @example
   * 254803968
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      path: 'Path',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      path: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDisksSystem extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use LVM. Valid values:
   * 
   * *   true: Use LVM.
   * *   false: Not use LVM.
   * 
   * LVM is not supported:
   * 
   * *   If your source server runs Windows, LVM is not supported.
   * *   The system disk does not have a boot partition, and LVM is not supported.
   * 
   * After LVM is enabled, this feature does not take effect in the following scenarios:
   * 
   * *   LVM2 is not supported on your source server and the software package is not installed.
   * *   Your source server runs Debian with a kernel version of 3.x or earlier and XFS file systems are mounted.
   * 
   * @example
   * true
   */
  LVM?: boolean;
  /**
   * @remarks
   * The information about the system disk partition.
   */
  part?: CreateReplicationJobRequestDisksSystemPart[];
  /**
   * @remarks
   * The size of the source system disk. Unit: GiB. Valid values: 20 to 32768.
   * 
   * >  The parameter value must be greater than the actual used space of the data disk on the source server. For example, if the size of the source disk is 500 GiB but the actual used space is 100 GiB, you must set this parameter to a value greater than 100 GiB.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      LVM: 'LVM',
      part: 'Part',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      LVM: 'boolean',
      part: { 'type': 'array', 'itemType': CreateReplicationJobRequestDisksSystemPart },
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.part)) {
      $dara.Model.validateArray(this.part);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestDisks extends $dara.Model {
  /**
   * @remarks
   * The information about the data disk partition.
   */
  data?: CreateReplicationJobRequestDisksData[];
  /**
   * @remarks
   * The information about the system disk.
   */
  system?: CreateReplicationJobRequestDisksSystem;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': CreateReplicationJobRequestDisksData },
      system: CreateReplicationJobRequestDisksSystem,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.system && typeof (this.system as any).validate === 'function') {
      (this.system as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestSystemDiskPart extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable block replication for partition N in the destination system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The ID of partition N in the destination system disk. The partitions in the destination system disk are arranged in the same sequential order as those in the source system disk.
   * 
   * >  You must set both the SystemDiskPart.N.Device and `SystemDiskPart.N.SizeBytes` parameters or leave both parameters empty.
   * 
   * @example
   * 0_1
   */
  device?: string;
  /**
   * @remarks
   * The size of the partition N in the destination system disk. Unit: bytes. The default value is equal to the partition size of the source system disk.
   * 
   * > 
   * 
   * *   The total size of all partitions in the destination system disk cannot exceed the size of the destination system disk.
   * 
   * *   You must set both the `SystemDiskPart.N.Device` and SystemDiskPart.N.SizeBytes parameters or leave both parameters empty.
   * 
   * @example
   * 254803968
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      device: 'Device',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'boolean',
      device: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationJobRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag for the migration job. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag for the migration job. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
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

export class CreateReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The namespace of the destination Docker container image. For more information about Docker container images, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @example
   * testNamespace
   */
  containerNamespace?: string;
  /**
   * @remarks
   * The repository that stores the destination Docker container image. For more information about Docker container images, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @example
   * testRepository
   */
  containerRepository?: string;
  /**
   * @remarks
   * The tag of the destination Docker container image. For more information about Docker container images, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @example
   * CentOS:v1
   */
  containerTag?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: CreateReplicationJobRequestDataDisk[];
  /**
   * @remarks
   * The description of the migration job.
   * 
   * The description must be 2 to 128 characters in length, and can contain digits, colons (:), underscores (_), and hyphens (-). The description must start with a letter, but cannot start with `http://` or `https://`.
   * 
   * @example
   * This_is_a_migration_task
   */
  description?: string;
  /**
   * @remarks
   * The information about the disk.
   */
  disks?: CreateReplicationJobRequestDisks;
  /**
   * @remarks
   * The interval at which SMC synchronizes incremental data to Alibaba Cloud. Unit: hour. Valid values: 1 to 168.
   * 
   * This parameter is required if you set the `RunOnce` parameter to false.
   * 
   * By default, this parameter is empty.
   * 
   * @example
   * 12
   */
  frequency?: number;
  /**
   * @remarks
   * The name of the destination image. The name must meet the following requirements:
   * 
   * *   The name must be unique within an Alibaba Cloud region.
   * *   The name must be 2 to 128 characters in length, and can contain digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter, but cannot start with `http://` or `https://`.
   * 
   * >  If you specify an image name that already exists in the destination region, the migration job ID is appended to the image name as a suffix. Example: ImageName_j-2zexxxxxxxxxxxxx.
   * 
   * @example
   * testAliCloudImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the destination ECS instance.
   * 
   * @example
   * i-bp1f1dvfto1sigz5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is assigned to the instance.
   * 
   * @example
   * SMCAdmin
   */
  instanceRamRole?: string;
  /**
   * @remarks
   * The type of the intermediate instance.
   * 
   * You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to obtain the ECS instance types.
   * 
   * *   If you specify this parameter, SMC creates an intermediate instance of the specified instance type. If the specified instance type is unavailable, you cannot create the migration job.
   * *   If you do not specify this parameter, SMC selects an available instance type in a specific order to create an intermediate instance. For more information, see [SMC FAQ](https://help.aliyun.com/document_detail/121707.html).
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The type of the migration job. Valid values:
   * 
   * *   0: server migration.
   * *   1: operating system migration.
   * *   2: cross-zone migration.
   * *   3: agentless migration for a VMware VM.
   * 
   * @example
   * 0
   */
  jobType?: number;
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * @example
   * lt-bp16jovvln1cgaaq****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version number of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The license type. Valid values:
   * 
   * *   An empty value specifies no license.
   * *   A value of BYOL specifies Bring Your Own License (BYOL).
   * 
   * For more information, see [SMC FAQ](https://help.aliyun.com/document_detail/121707.html).
   * 
   * @example
   * BYOL
   */
  licenseType?: string;
  /**
   * @remarks
   * The maximum number of images retained for the incremental migration job. Valid values: 1 to 10.
   * 
   * This parameter is required if you set the `RunOnce` parameter to false.
   * 
   * By default, this parameter is empty.
   * 
   * @example
   * 10
   */
  maxNumberOfImageToKeep?: number;
  /**
   * @remarks
   * The name of the migration job. The name must meet the following requirements:
   * 
   * *   The name must be unique.
   * *   The name must be 2 to 128 characters in length, and can contain digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter, but cannot start with `http://` or `https://`.
   * 
   * @example
   * testMigrationTaskName
   */
  name?: string;
  /**
   * @remarks
   * The network mode for data transmission. Valid values:
   * 
   * *   0: Data is transmitted over the Internet. Make sure that the source server can access the Internet.
   * *   2: Data is transmitted over a VPC. If you specify this value, you must specify the VSwitchId parameter. You do not need to specify the VpcId parameter because the value of the VpcId parameter can be retrieved based on the value of the VSwitchId parameter.
   * 
   * Default value: 0
   * 
   * @example
   * 0
   */
  netMode?: number;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud region to which you want to migrate the source server.
   * 
   * For example, if you want to migrate the source server to the China (Hangzhou) region, set this parameter to `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The parameters of the replication driver. The parameters must be specified as key-value pairs in the JSON format. The keys are fixed for each type of replication driver. The JSON string can be up to 2,048 characters in length.
   * 
   * A replication driver is a tool that is used to migrate a source server to an intermediate instance. The parameters vary based on the replication driver type. If you use a Server Migration Tool (SMT) driver, you can specify the following parameters:
   * 
   * *   bandwidth_limit: the maximum bandwidth for data transmission.
   * *   compress_level: the compression ratio of data to be transmitted.
   * *   checksum: specifies whether to enable checksum verification.
   * 
   * For more information about replication drivers, see the response parameter `SourceServers.ReplicationDriver` of the [DescribeSourceServers](https://help.aliyun.com/document_detail/121818.html) operation.
   * 
   * @example
   * {"bandwidth_limit":0,"compress_level":1,"checksum":true}
   */
  replicationParameters?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * Specifies whether to disable incremental migration for the source server. Valid values:
   * 
   * *   true: creates a migration job that runs only once. This is the default value. Incremental data of the source server is not synchronized.
   * *   false: creates an incremental migration job. In this case, you must specify the `Frequency` parameter. SMC synchronizes incremental data of the source server to Alibaba Cloud at the specified frequency. You can use an incremental migration job to synchronize incremental data from the source server to Alibaba Cloud without the need to interrupt your business. A full data image is generated for the source server when the job is running.
   * 
   * >  You can specify this parameter only when you create a migration job. The parameter value cannot be changed after the migration job is created.
   * 
   * @example
   * true
   */
  runOnce?: boolean;
  /**
   * @remarks
   * The time when you want to run the migration job. The time must meet the following requirements:
   * 
   * *   The time must be specified in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. For example, 2018-01-01T12:00:00Z specifies 20:00:00 on January 1, 2018 (UTC+8).
   * *   The value must be within 30 days after the current time.
   * 
   * >  If you do not specify this parameter, you must manually start the migration job after the job is created. You can call the [StartReplicationJob](https://help.aliyun.com/document_detail/121823.html) operation to start the migration job.
   * 
   * @example
   * 2019-06-04T13:35:00Z
   */
  scheduledStartTime?: string;
  /**
   * @remarks
   * The ID of the source server.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string;
  /**
   * @remarks
   * The information about system disk partitions.
   */
  systemDiskPart?: CreateReplicationJobRequestSystemDiskPart[];
  /**
   * @remarks
   * The system disk size of the destination ECS instance. Unit: GiB. Valid values: 20 to 2048.
   * 
   * >  The value must be greater than the used space of the system disk on the source server. For example, if the total size of the source disk is 500 GiB and the used space is 100 GiB, the value of this parameter must be greater than 100 GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateReplicationJobRequestTag[];
  /**
   * @remarks
   * The type of destination to which you want to migrate the source server. Valid values:
   * 
   * *   Image: After the migration job is complete, SMC generates an Elastic Compute Service (ECS) image for the source server.
   * *   ContainerImage: After the migration job is complete, SMC generates a Docker container image for the source server.
   * *   TargetInstance: After the migration job is completed, SMC migrates the source server to the destination instance. If you set this parameter to TargetInstance, you must set the `InstanceId` parameter.
   * 
   * @example
   * Image
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the specified VPC.
   * 
   * You must set this parameter if you use a VPC to migrate data.
   * 
   * @example
   * vsw-bp1ddbrxdlrcbim46****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The time when the migration job expires. You can schedule the migration job to expire 7 to 90 days after the job is created.
   * 
   * *   The time must be specified in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. For example, 2018-01-01T12:00:00Z specifies 20:00:00 on January 1, 2018 (UTC+8).
   * *   If you do not specify this parameter, the migration job does not expire.
   * *   After a migration job expires, the job state changes to Expired. SMC retains the migration job for seven days after the job expires. After the job is retained for seven days, SMC deletes the migration job.
   * 
   * By default, a migration job is valid for 30 days after it is created.
   * 
   * @example
   * 2019-06-04T13:35:00Z
   */
  validTime?: string;
  /**
   * @remarks
   * The ID of a VPC for which you have configured an Express Connect circuit or a VPN gateway.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      dataDisk: 'DataDisk',
      description: 'Description',
      disks: 'Disks',
      frequency: 'Frequency',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceRamRole: 'InstanceRamRole',
      instanceType: 'InstanceType',
      jobType: 'JobType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      licenseType: 'LicenseType',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      name: 'Name',
      netMode: 'NetMode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      replicationParameters: 'ReplicationParameters',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      runOnce: 'RunOnce',
      scheduledStartTime: 'ScheduledStartTime',
      sourceId: 'SourceId',
      systemDiskPart: 'SystemDiskPart',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      targetType: 'TargetType',
      vSwitchId: 'VSwitchId',
      validTime: 'ValidTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateReplicationJobRequestDataDisk },
      description: 'string',
      disks: CreateReplicationJobRequestDisks,
      frequency: 'number',
      imageName: 'string',
      instanceId: 'string',
      instanceRamRole: 'string',
      instanceType: 'string',
      jobType: 'number',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      licenseType: 'string',
      maxNumberOfImageToKeep: 'number',
      name: 'string',
      netMode: 'number',
      ownerId: 'number',
      regionId: 'string',
      replicationParameters: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      runOnce: 'boolean',
      scheduledStartTime: 'string',
      sourceId: 'string',
      systemDiskPart: { 'type': 'array', 'itemType': CreateReplicationJobRequestSystemDiskPart },
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateReplicationJobRequestTag },
      targetType: 'string',
      vSwitchId: 'string',
      validTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    if(Array.isArray(this.systemDiskPart)) {
      $dara.Model.validateArray(this.systemDiskPart);
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

