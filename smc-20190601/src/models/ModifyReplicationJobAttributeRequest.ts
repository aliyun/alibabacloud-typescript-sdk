// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReplicationJobAttributeRequestDataDiskPart extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable block replication for partition N in the destination data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The ID of partition N in the destination data disk.
   * 
   * >  The partitions in the destination data disk are arranged in the same sequential order as those in the source data disk.
   * 
   * @example
   * 0_1
   */
  device?: string;
  /**
   * @remarks
   * The size of partition N in the destination data disk. Unit: bytes. The default value is equal to the corresponding size of the partition in the source data disk.
   * 
   * >  The total size of all partitions in the destination data disk cannot exceed the size of the destination data disk.
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

export class ModifyReplicationJobAttributeRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The index of data disk N on the destination ECS instance. Valid values of N: 1 to 16.
   * 
   * Data disks on a destination ECS instance are arranged in a sequential order that starts from 1.
   * 
   * >  You can create a destination data disk only for a source server that has data disks.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The information about partitions.
   */
  part?: ModifyReplicationJobAttributeRequestDataDiskPart[];
  /**
   * @remarks
   * The size of the data disk on the destination ECS instance. Unit: GiB. Valid values: 20 to 32768.
   * 
   * >  The size of a destination data disk must be greater than the size of data in the source data disk. For example, if the source data disk has 500 GiB of storage space and 100 GiB of data, you must set this parameter to a value greater than 100.
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
      part: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestDataDiskPart },
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

export class ModifyReplicationJobAttributeRequestSystemDiskPart extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable block replication for partition N in the destination system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The ID of partition N in the destination system disk.
   * 
   * >  The partitions in the destination system disk are arranged in the same sequential order as those in the source system disk.
   * 
   * @example
   * 0_1
   */
  device?: string;
  /**
   * @remarks
   * The size of partition N in the destination system disk. Unit: bytes. The default value is equal to the partition size of the source system disk.
   * 
   * >  The total size of all partitions in the destination system disk cannot exceed the size of the destination system disk.
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

export class ModifyReplicationJobAttributeRequest extends $dara.Model {
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
   * The information about the data disk.
   */
  dataDisk?: ModifyReplicationJobAttributeRequestDataDisk[];
  /**
   * @remarks
   * The description of the migration job.
   * 
   * The description must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * This_is_my_migration_task
   */
  description?: string;
  /**
   * @remarks
   * The interval at which an incremental migration job runs. Unit: hour. Valid values: 1 to 168.
   * 
   * This parameter is required if you set the `RunOnce` parameter to false.
   * 
   * @example
   * 10
   */
  frequency?: number;
  /**
   * @remarks
   * The name of the destination image. The name must meet the following requirements:
   * 
   * *   The name must be unique within an Alibaba Cloud region.
   * *   The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * >  If an image whose name is the same as that of the destination image already exists in the current region when the migration job is in progress, the system adds the migration job ID to the end of the image name by default. Example: ImageName-JobId.
   * 
   * @example
   * testAliCloudImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * @example
   * i-bp1f1dvfto1sigz5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is attached to the intermediate instance.
   * 
   * @example
   * SMCAdmin
   */
  instanceRamRole?: string;
  /**
   * @remarks
   * The type of the intermediate instance.
   * 
   * You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the ECS instance types.
   * 
   * *   If you specify this parameter, SMC creates an intermediate instance of the specified instance type. If the specified instance type is unavailable, you cannot create the migration job.
   * *   If you do not specify this parameter, SMC selects an available instance type in a specific order to create an intermediate instance. For more information,
   * 
   * see the "How does SMC create an intermediate instance?" section of the "FAQ" topic.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The migration job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bp19vlwm0tyigbmj****
   */
  jobId?: string;
  /**
   * @remarks
   * The launch template ID.
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
   * Latest
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum number of images that are retained for an incremental migration job. Valid values: 1 to 10.
   * 
   * This parameter is required if you set the `RunOnce` parameter to false.
   * 
   * @example
   * 5
   */
  maxNumberOfImageToKeep?: number;
  /**
   * @remarks
   * The name of the migration job. The name must meet the following requirements:
   * 
   * *   The name must be unique.
   * *   The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
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
   * *   2: Data is transmitted over a virtual private cloud (VPC). If you set this parameter to 2, you must specify the VSwitchId parameter. You can leave the VpcId parameter empty, the VPC ID can be queried by calling an operation.
   * 
   * @example
   * 0
   */
  netMode?: number;
  ownerId?: number;
  /**
   * @remarks
   * The parameters of the replication driver. The parameters are fixed key-value pairs of the JSON format. The value can be up to 2,048 characters in length.
   * 
   * A replication driver is a tool that is used to replicate the data of a source server to an intermediate instance. The parameters vary based on the replication driver type. If you use a Server Migration Tool (SMT) driver, you can set the following parameters:
   * 
   * *   bandwidth_limit: the maximum bandwidth for data transmission.
   * *   compress_level: the compression ratio of data to be transmitted.
   * *   checksum: specifies whether to enable checksum verification
   * 
   * For more information about the replication driver, see the response parameter `SourceServers.ReplicationDriver` of the [DescribeSourceServers](https://help.aliyun.com/document_detail/2402126.html) operation.
   * 
   * @example
   * {"bandwidth_limit":0,"compress_level":1,"checksum":true}
   */
  replicationParameters?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The time when the migration job is executed. SMC starts the migration job at the specified time.
   * 
   * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. For example, 2018-01-01T12:00:00Z indicates 20:00:00 on January 1, 2018 (UTC+8).
   * 
   * >  If ScheduledStartTime is left empty, SMC does not automatically start the migration job. In this case, you must call the [StartReplicationJob](https://help.aliyun.com/document_detail/121823.html) operation to start the migration job.
   * 
   * @example
   * 2019-06-04T13:35:00Z
   */
  scheduledStartTime?: string;
  /**
   * @remarks
   * The partition information of the system disk.
   */
  systemDiskPart?: ModifyReplicationJobAttributeRequestSystemDiskPart[];
  /**
   * @remarks
   * The system disk size of the destination ECS instance. Unit: GiB. Valid values: 20 to 500.
   * 
   * >  The size of a destination data disk must be greater than the size of data in the source data disk. For example, if the source data disk has 500 GiB of storage space and 100 GiB of data, you must set this parameter to a value greater than 100.
   * 
   * @example
   * 50
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The type of destination to which the source server is migrated. You can modify the value only before the migration job starts. Valid values:
   * 
   * *   Image: After the migration job is complete, Server Migration Center (SMC) generates a destination Elastic Compute Service (ECS) image for the source server. You can use the image to create an ECS instance.
   * *   ContainerImage: After the migration job is complete, SMC generates a container image for the source server. You can use the container image in Container Registry.
   * *   TargetInstance: After the migration job is complete, SMC migrates the source server to the destination instance. If you set this parameter to TargetInstance, you must set the `InstanceId` parameter.
   * 
   * > 
   * 
   * *   The value of this parameter is not case-sensitive.
   * 
   * *   SMC does not allow you to migrate Windows servers or servers that run operating systems on the ARM architecture to Container Registry.
   * 
   * @example
   * Image
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * @example
   * vsw-bp1ddbrxdlrcbim46****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The time when the migration job expires. You can schedule the migration job to expire 7 to 90 days after the job is created.
   * 
   * *   This parameter can be modified only if the migration job is in the Ready, Running, Stopped, InError, or Waiting state.
   * *   Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC. For example, 2018-01-01T12:00:00Z indicates 20:00:00 on January 1, 2018 (UTC+8).
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
   * The ID of the VPC for which an Express Connect circuit or VPN gateway is configured.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      dataDisk: 'DataDisk',
      description: 'Description',
      frequency: 'Frequency',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceRamRole: 'InstanceRamRole',
      instanceType: 'InstanceType',
      jobId: 'JobId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      name: 'Name',
      netMode: 'NetMode',
      ownerId: 'OwnerId',
      replicationParameters: 'ReplicationParameters',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scheduledStartTime: 'ScheduledStartTime',
      systemDiskPart: 'SystemDiskPart',
      systemDiskSize: 'SystemDiskSize',
      targetType: 'TargetType',
      vSwitchId: 'VSwitchId',
      validTime: 'ValidTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      dataDisk: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestDataDisk },
      description: 'string',
      frequency: 'number',
      imageName: 'string',
      instanceId: 'string',
      instanceRamRole: 'string',
      instanceType: 'string',
      jobId: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      maxNumberOfImageToKeep: 'number',
      name: 'string',
      netMode: 'number',
      ownerId: 'number',
      replicationParameters: 'string',
      resourceOwnerAccount: 'string',
      scheduledStartTime: 'string',
      systemDiskPart: { 'type': 'array', 'itemType': ModifyReplicationJobAttributeRequestSystemDiskPart },
      systemDiskSize: 'number',
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
    if(Array.isArray(this.systemDiskPart)) {
      $dara.Model.validateArray(this.systemDiskPart);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

