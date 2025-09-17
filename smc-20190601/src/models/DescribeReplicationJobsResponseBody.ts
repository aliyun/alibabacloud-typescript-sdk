// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart extends $dara.Model {
  /**
   * @remarks
   * Indicates whether block replication is enabled for the data disk partition.
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The device ID of the data disk partition.
   * 
   * @example
   * 0_1
   */
  device?: string;
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts extends $dara.Model {
  part?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskPartsPart },
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDisk extends $dara.Model {
  /**
   * @remarks
   * The index number of the data disk.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The data disk partitions.
   */
  parts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      parts: 'Parts',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      parts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDiskParts,
      size: 'number',
    };
  }

  validate() {
    if(this.parts && typeof (this.parts as any).validate === 'function') {
      (this.parts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks extends $dara.Model {
  dataDisk?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisksDataDisk },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataDataPartsPart extends $dara.Model {
  /**
   * @remarks
   * Whether block replication is enabled for the data disk partition. Valid values:
   * 
   * *   true: Block replication is enabled for the data disk partition.
   * *   false: Block replication is disabled for the data disk partition.
   * 
   * @example
   * false
   */
  block?: boolean;
  /**
   * @remarks
   * The path of the data disk partition.
   * 
   * @example
   * /home/data
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataDataParts extends $dara.Model {
  part?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataDataPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataDataPartsPart },
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataData extends $dara.Model {
  /**
   * @remarks
   * The ID of the data disk.
   * 
   * @example
   * d-2zeh4twm100qskw7z41z
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to use LVM. Valid values:
   * 
   * *   true: Use LVM.
   * *   false: Not use LVM.
   * 
   * @example
   * false
   */
  LVM?: boolean;
  /**
   * @remarks
   * The information about the data disk partition.
   */
  parts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataDataParts;
  /**
   * @remarks
   * The size of a data disk on the destination ECS instance. Unit: GiB. Valid values: 20 to 32768.
   * 
   * >  The size of a destination data disk must be larger than the size of data in the corresponding source data disk. For example, if the size of the source disk is 500 GiB but the actual used space is 100 GiB, you must set this parameter to a value greater than 100 GiB.
   * 
   * @example
   * 22548578304
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      LVM: 'LVM',
      parts: 'Parts',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      LVM: 'boolean',
      parts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataDataParts,
      size: 'number',
    };
  }

  validate() {
    if(this.parts && typeof (this.parts as any).validate === 'function') {
      (this.parts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksData extends $dara.Model {
  data?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksDataData },
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystemPartsPart extends $dara.Model {
  /**
   * @remarks
   * Specifies whether block replication is enabled for the system disk partition. Valid values:
   * 
   * *   true: Block replication is enabled for the system disk partition.
   * *   false: Block replication is disabled for the system disk partition.
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystemParts extends $dara.Model {
  part?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystemPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystemPartsPart },
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystem extends $dara.Model {
  /**
   * @remarks
   * The ID of the system disk.
   * 
   * @example
   * d-2zeh4twm100qskw7z41z
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to use LVM. Valid values:
   * 
   * *   true: Use LVM.
   * *   false: Not use LVM.
   * 
   * @example
   * false
   */
  LVM?: boolean;
  /**
   * @remarks
   * The information about the system disk partition.
   */
  parts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystemParts;
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
      diskId: 'DiskId',
      LVM: 'LVM',
      parts: 'Parts',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      LVM: 'boolean',
      parts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystemParts,
      size: 'number',
    };
  }

  validate() {
    if(this.parts && typeof (this.parts as any).validate === 'function') {
      (this.parts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisks extends $dara.Model {
  /**
   * @remarks
   * The information about the data disk.
   */
  data?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksData;
  /**
   * @remarks
   * The information about the system disk.
   */
  system?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystem;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksData,
      system: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisksSystem,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun extends $dara.Model {
  /**
   * @remarks
   * The time when the migration job ended. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the SMC console is in the format of UTC+8.
   * 
   * @example
   * 2019-10-04T13:35:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the destination image.
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  imageId?: string;
  /**
   * @remarks
   * The time when the migration job was started. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the SMC console is in the format of UTC+8.
   * 
   * @example
   * 2019-10-01T13:35:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The method used to run the migration job. Valid values:
   * 
   * *   Manual: The migration job was manually started.
   * *   Schedule: The migration job was started at a scheduled time or at a specific interval.
   * 
   * @example
   * Schedule
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      imageId: 'ImageId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      imageId: 'string',
      startTime: 'string',
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns extends $dara.Model {
  replicationJobRun?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun[];
  static names(): { [key: string]: string } {
    return {
      replicationJobRun: 'ReplicationJobRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicationJobRun: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRunsReplicationJobRun },
    };
  }

  validate() {
    if(Array.isArray(this.replicationJobRun)) {
      $dara.Model.validateArray(this.replicationJobRun);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart extends $dara.Model {
  /**
   * @remarks
   * Indicates whether block replication is enabled for the system disk partition.
   * 
   * @example
   * true
   */
  block?: boolean;
  /**
   * @remarks
   * The device ID of the system disk partition.
   * 
   * @example
   * 0_1
   */
  device?: string;
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts extends $dara.Model {
  systemDiskPart?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart[];
  static names(): { [key: string]: string } {
    return {
      systemDiskPart: 'SystemDiskPart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskPart: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskPartsSystemDiskPart },
    };
  }

  validate() {
    if(Array.isArray(this.systemDiskPart)) {
      $dara.Model.validateArray(this.systemDiskPart);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag N that is added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag key can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.[](http://https://。)
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.[](http://https://。)
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

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTags extends $dara.Model {
  tag?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob extends $dara.Model {
  /**
   * @remarks
   * The business status of the migration job. Valid values:
   * 
   * *   Preparing: The migration is being prepared.
   * *   Syncing: Data is being synchronized.
   * *   Processing: The migration is in progress.
   * *   Cleaning: Intermediate resources are being released.
   * 
   * @example
   * Preparing
   */
  businessStatus?: string;
  /**
   * @remarks
   * The namespace of the destination Docker container image.
   * 
   * @example
   * testNamespace
   */
  containerNamespace?: string;
  /**
   * @remarks
   * The repository that stores the destination Docker container image.
   * 
   * @example
   * testRepository
   */
  containerRepository?: string;
  /**
   * @remarks
   * The tag of the destination Docker container image.
   * 
   * @example
   * CentOS:v1
   */
  containerTag?: string;
  /**
   * @remarks
   * The time when the migration job was created.
   * 
   * @example
   * 2014-07-24T13:00:52Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The data disks on the destination ECS instance.
   */
  dataDisks?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks;
  /**
   * @remarks
   * The description of the migration job.
   * 
   * @example
   * This is my migration task.
   */
  description?: string;
  /**
   * @remarks
   * The information about the disk.
   */
  disks?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisks;
  /**
   * @remarks
   * The time when the migration job was complete. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the SMC console is in the format of UTC+8.
   * 
   * @example
   * 2019-06-04T16:00:52Z
   */
  endTime?: string;
  /**
   * @remarks
   * The error code returned if an error occurred in the migration job.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
  /**
   * @remarks
   * The interval at which the incremental migration job runs. Unit: hour. Valid values: 1 to 168.
   * 
   * @example
   * 15
   */
  frequency?: number;
  /**
   * @remarks
   * The ID of the destination image.
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the destination image.
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
   * i-bp1ff25rzvnul6kr****
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
   * The instance type of the intermediate instance.
   * 
   * @example
   * ecs.sn1ne.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the migration job.
   * 
   * @example
   * j-bp19vlwm0tyigbmj****
   */
  jobId?: string;
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
   * lt-launchtemplateid
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The versions of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The type of license for the migration job. Valid values:
   * 
   * *   An empty value indicates no license.
   * *   A value of BYOL indicates Bring Your Own License (BYOL).
   * 
   * @example
   * BYOL
   */
  licenseType?: string;
  /**
   * @remarks
   * The maximum number of images retained for the incremental migration job. Valid values: 1 to 10.
   * 
   * @example
   * 8
   */
  maxNumberOfImageToKeep?: number;
  /**
   * @remarks
   * The name of the migration job.
   * 
   * @example
   * testMigrationTaskName
   */
  name?: string;
  /**
   * @remarks
   * The type of network used for the migration.
   * 
   * @example
   * 0
   */
  netMode?: number;
  /**
   * @remarks
   * The progress of the migration job.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud region to which the source server is migrated.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution records of the migration job.
   */
  replicationJobRuns?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns;
  /**
   * @remarks
   * The string of key-value pairs configured for the replication driver.
   * 
   * @example
   * BandWidthLimit:0
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
  /**
   * @remarks
   * Indicates whether incremental migration is disabled for the source server. Valid values:
   * 
   * *   true: Incremental migration is disabled. A migration job runs only once after the job is created.
   * *   false: Incremental migration is enabled. For an incremental migration job, SMC synchronizes incremental data to Alibaba Cloud at the interval specified by the `Frequency` parameter.
   * 
   * @example
   * true
   */
  runOnce?: boolean;
  /**
   * @remarks
   * The time when the migration job is scheduled to run. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. The time must meet the following requirements:
   * 
   * *   The value must be within 30 days after the current time.
   * *   If you do not specify this parameter, you must manually start the migration job after the migration job is created. You can call the [StartReplicationJob](https://help.aliyun.com/document_detail/121823.html) operation to start the migration job.
   * 
   * @example
   * 2019-06-04T13:35:00Z
   */
  scheduledStartTime?: string;
  /**
   * @remarks
   * The ID of the source server.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string;
  /**
   * @remarks
   * The time when the migration job was started. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the SMC console is in the format of UTC+8.
   * 
   * @example
   * 2019-06-04T14:40:52Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the migration job. Valid values:
   * 
   * *   Ready: The migration job is not started.
   * *   Running: The migration job is running.
   * *   Stopped: The migration job is paused.
   * *   InError: An error occurs in the migration job.
   * *   Finished: The migration job is complete.
   * *   Waiting: The migration job is waiting to run.
   * *   Expired: The migration job has expired.
   * *   Deleting: The migration job is being deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The status information about the migration job.
   * 
   * @example
   * statusinfo
   */
  statusInfo?: string;
  /**
   * @remarks
   * The system disk partitions.
   */
  systemDiskParts?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts;
  /**
   * @remarks
   * The size of the system disk of the destination ECS instance.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The information about tags that are attached to the SMC resource.
   */
  tags?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTags;
  /**
   * @remarks
   * The type of destination to which the source server is migrated. Valid values:
   * 
   * *   Image: After the migration job is complete, SMC generates an ECS image for the source server.
   * *   ContainerImage: After the migration job is complete, SMC generates a Docker container image for the source server.
   * *   TargetInstance: After the migration job is complete, SMC migrates the source server to the destination instance. If you set this parameter to TargetInstance, you must set the InstanceId parameter.
   * 
   * @example
   * Image
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the intermediate instance.
   * 
   * @example
   * i-bp1ff25rzvnul6kr****
   */
  transitionInstanceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the specified VPC.
   * 
   * @example
   * vsw-bp1ddbrxdlrcbim46****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The time when the migration job expired. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the SMC console is in the format of UTC+8.
   * 
   * @example
   * 2019-06-08T14:40:52Z
   */
  validTime?: string;
  /**
   * @remarks
   * The ID of a virtual private cloud (VPC) for which you have configured an Express Connect circuit or a VPN gateway.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      containerNamespace: 'ContainerNamespace',
      containerRepository: 'ContainerRepository',
      containerTag: 'ContainerTag',
      creationTime: 'CreationTime',
      dataDisks: 'DataDisks',
      description: 'Description',
      disks: 'Disks',
      endTime: 'EndTime',
      errorCode: 'ErrorCode',
      frequency: 'Frequency',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceRamRole: 'InstanceRamRole',
      instanceType: 'InstanceType',
      jobId: 'JobId',
      jobType: 'JobType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      licenseType: 'LicenseType',
      maxNumberOfImageToKeep: 'MaxNumberOfImageToKeep',
      name: 'Name',
      netMode: 'NetMode',
      progress: 'Progress',
      regionId: 'RegionId',
      replicationJobRuns: 'ReplicationJobRuns',
      replicationParameters: 'ReplicationParameters',
      resourceGroupId: 'ResourceGroupId',
      runOnce: 'RunOnce',
      scheduledStartTime: 'ScheduledStartTime',
      sourceId: 'SourceId',
      startTime: 'StartTime',
      status: 'Status',
      statusInfo: 'StatusInfo',
      systemDiskParts: 'SystemDiskParts',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      targetType: 'TargetType',
      transitionInstanceId: 'TransitionInstanceId',
      vSwitchId: 'VSwitchId',
      validTime: 'ValidTime',
      vpcId: 'VpcId',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      containerNamespace: 'string',
      containerRepository: 'string',
      containerTag: 'string',
      creationTime: 'string',
      dataDisks: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDataDisks,
      description: 'string',
      disks: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobDisks,
      endTime: 'string',
      errorCode: 'string',
      frequency: 'number',
      imageId: 'string',
      imageName: 'string',
      instanceId: 'string',
      instanceRamRole: 'string',
      instanceType: 'string',
      jobId: 'string',
      jobType: 'number',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      licenseType: 'string',
      maxNumberOfImageToKeep: 'number',
      name: 'string',
      netMode: 'number',
      progress: 'number',
      regionId: 'string',
      replicationJobRuns: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobReplicationJobRuns,
      replicationParameters: 'string',
      resourceGroupId: 'string',
      runOnce: 'boolean',
      scheduledStartTime: 'string',
      sourceId: 'string',
      startTime: 'string',
      status: 'string',
      statusInfo: 'string',
      systemDiskParts: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobSystemDiskParts,
      systemDiskSize: 'number',
      tags: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJobTags,
      targetType: 'string',
      transitionInstanceId: 'string',
      vSwitchId: 'string',
      validTime: 'string',
      vpcId: 'string',
      workgroupId: 'string',
    };
  }

  validate() {
    if(this.dataDisks && typeof (this.dataDisks as any).validate === 'function') {
      (this.dataDisks as any).validate();
    }
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    if(this.replicationJobRuns && typeof (this.replicationJobRuns as any).validate === 'function') {
      (this.replicationJobRuns as any).validate();
    }
    if(this.systemDiskParts && typeof (this.systemDiskParts as any).validate === 'function') {
      (this.systemDiskParts as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBodyReplicationJobs extends $dara.Model {
  replicationJob?: DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob[];
  static names(): { [key: string]: string } {
    return {
      replicationJob: 'ReplicationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicationJob: { 'type': 'array', 'itemType': DescribeReplicationJobsResponseBodyReplicationJobsReplicationJob },
    };
  }

  validate() {
    if(Array.isArray(this.replicationJob)) {
      $dara.Model.validateArray(this.replicationJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicationJobsResponseBody extends $dara.Model {
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
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of migration jobs.
   */
  replicationJobs?: DescribeReplicationJobsResponseBodyReplicationJobs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E1187E8-843A-4850-B97E-2F17F00D48F7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of migration jobs returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replicationJobs: 'ReplicationJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      replicationJobs: DescribeReplicationJobsResponseBodyReplicationJobs,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.replicationJobs && typeof (this.replicationJobs as any).validate === 'function') {
      (this.replicationJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

