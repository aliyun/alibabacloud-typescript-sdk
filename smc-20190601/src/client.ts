// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateCrossZoneMigrationJobRequestDisk extends $dara.Model {
  /**
   * @remarks
   * The disk category. A value of cloud_essd indicates enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp1eeplkn4j29wf7irpb
   */
  diskId?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateWorkgroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of a specified workgroup.
   * 
   * You can specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of a specified workgroup.
   * 
   * You can specify an empty string as a tag value. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeReplicationJobsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag N that is added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag key can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeSourceServersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is attached to the SMC resource. Valid values of N: 1 to 20.
   * 
   * You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is attached to the SMC resource. Valid values of N: 1 to 20.
   * 
   * You can specify an empty string as a tag key. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart extends $dara.Model {
  /**
   * @remarks
   * Indicates whether block replication is enabled for the data disk partition.
   * 
   * @example
   * false
   */
  canBlock?: boolean;
  /**
   * @remarks
   * The device ID of the data disk partition.
   * 
   * @example
   * 1_0
   */
  device?: string;
  /**
   * @remarks
   * Indicates whether the data disk partition must be selected.
   * 
   * @example
   * false
   */
  need?: boolean;
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
      canBlock: 'CanBlock',
      device: 'Device',
      need: 'Need',
      path: 'Path',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      device: 'string',
      need: 'boolean',
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts extends $dara.Model {
  part?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskPartsPart },
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDisk extends $dara.Model {
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
   * The information about the data disk partition.
   */
  parts?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts;
  /**
   * @remarks
   * The path of data disk N.
   * 
   * @example
   * /home/data
   */
  path?: string;
  /**
   * @remarks
   * The size of data disk N. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      parts: 'Parts',
      path: 'Path',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      parts: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDiskParts,
      path: 'string',
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDataDisks extends $dara.Model {
  dataDisk?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDataDisksDataDisk },
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksDataDataPartsPart extends $dara.Model {
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
  canBlock?: boolean;
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
  /**
   * @remarks
   * The type of the data disk partition. Valid values:
   * 
   * *   Normal: normal partition.
   * *   System: system partition.
   * *   Boot: boot partition.
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canBlock: 'CanBlock',
      path: 'Path',
      sizeBytes: 'SizeBytes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      path: 'string',
      sizeBytes: 'number',
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksDataDataParts extends $dara.Model {
  part?: DescribeSourceServersResponseBodySourceServersSourceServerDisksDataDataPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDisksDataDataPartsPart },
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksDataData extends $dara.Model {
  /**
   * @remarks
   * The start offset of the first partition of the data disk. Unit: bytes.
   * 
   * @example
   * 1024
   */
  offset?: number;
  /**
   * @remarks
   * The information about the data disk partition.
   */
  parts?: DescribeSourceServersResponseBodySourceServersSourceServerDisksDataDataParts;
  /**
   * @remarks
   * The data disk size of the migration source. Unit: GiB.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      parts: 'Parts',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      parts: DescribeSourceServersResponseBodySourceServersSourceServerDisksDataDataParts,
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksData extends $dara.Model {
  data?: DescribeSourceServersResponseBodySourceServersSourceServerDisksDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDisksDataData },
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksSystemPartsPart extends $dara.Model {
  /**
   * @remarks
   * Indicates whether block replication is enabled for the system disk partition. Valid values:
   * 
   * *   true: Block replication is enabled for the system disk partition.
   * *   false: Block replication is disabled for the system disk partition.
   * 
   * @example
   * false
   */
  canBlock?: boolean;
  /**
   * @remarks
   * The path of the system disk partition.
   * 
   * @example
   * /home/data
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
  /**
   * @remarks
   * The type of the system disk partition. Valid values:
   * 
   * *   Normal: normal partition.
   * *   System: system partition.
   * *   Boot: boot partition.
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canBlock: 'CanBlock',
      path: 'Path',
      sizeBytes: 'SizeBytes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      path: 'string',
      sizeBytes: 'number',
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksSystemParts extends $dara.Model {
  part?: DescribeSourceServersResponseBodySourceServersSourceServerDisksSystemPartsPart[];
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerDisksSystemPartsPart },
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisksSystem extends $dara.Model {
  /**
   * @remarks
   * The start offset of the first partition of the system disk. Unit: bytes.
   * 
   * @example
   * 1024
   */
  offset?: number;
  /**
   * @remarks
   * The information about the system disk partition.
   */
  parts?: DescribeSourceServersResponseBodySourceServersSourceServerDisksSystemParts;
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
      offset: 'Offset',
      parts: 'Parts',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      parts: DescribeSourceServersResponseBodySourceServersSourceServerDisksSystemParts,
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

export class DescribeSourceServersResponseBodySourceServersSourceServerDisks extends $dara.Model {
  /**
   * @remarks
   * The list of data disk information.
   */
  data?: DescribeSourceServersResponseBodySourceServersSourceServerDisksData;
  /**
   * @remarks
   * The information about the system disk.
   * 
   * **if can be null:**
   * false
   */
  system?: DescribeSourceServersResponseBodySourceServersSourceServerDisksSystem;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSourceServersResponseBodySourceServersSourceServerDisksData,
      system: DescribeSourceServersResponseBodySourceServersSourceServerDisksSystem,
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

export class DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskPartsSystemDiskPart extends $dara.Model {
  /**
   * @remarks
   * Indicates whether block replication is enabled for the system disk partition.
   * 
   * @example
   * true
   */
  canBlock?: boolean;
  /**
   * @remarks
   * The device ID of the system disk partition.
   * 
   * @example
   * 0_0
   */
  device?: string;
  /**
   * @remarks
   * Indicates whether the system disk partition must be selected.
   * 
   * @example
   * true
   */
  need?: boolean;
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
      canBlock: 'CanBlock',
      device: 'Device',
      need: 'Need',
      path: 'Path',
      sizeBytes: 'SizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBlock: 'boolean',
      device: 'string',
      need: 'boolean',
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

export class DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts extends $dara.Model {
  systemDiskPart?: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskPartsSystemDiskPart[];
  static names(): { [key: string]: string } {
    return {
      systemDiskPart: 'SystemDiskPart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskPart: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskPartsSystemDiskPart },
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

export class DescribeSourceServersResponseBodySourceServersSourceServerTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is attached to the SMC resource. Valid values of N: 1 to 20.
   * 
   * You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is attached to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag key can be an empty string. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeSourceServersResponseBodySourceServersSourceServerTags extends $dara.Model {
  tag?: DescribeSourceServersResponseBodySourceServersSourceServerTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServerTagsTag },
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

export class DescribeSourceServersResponseBodySourceServersSourceServer extends $dara.Model {
  /**
   * @remarks
   * The version number of the SMC client.
   * 
   * @example
   * 1.5.2.3
   */
  agentVersion?: string;
  /**
   * @remarks
   * The system architecture of the migration source.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The time when the migration source was created.
   * 
   * @example
   * 2019-06-27T02:58:09Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The data disks on the migration source.
   */
  dataDisks?: DescribeSourceServersResponseBodySourceServersSourceServerDataDisks;
  /**
   * @remarks
   * The description of the migration source.
   * 
   * @example
   * Server Source Imported By GotoAliyun.
   */
  description?: string;
  /**
   * @remarks
   * The information about the disk.
   * 
   * **if can be null:**
   * false
   */
  disks?: DescribeSourceServersResponseBodySourceServersSourceServerDisks;
  /**
   * @remarks
   * The error code of the migration source.
   * 
   * @example
   * SourceServer.Offline
   */
  errorCode?: string;
  /**
   * @remarks
   * The interval at which heartbeats are sent from the SMC client. Unit: seconds.
   * 
   * @example
   * 30
   */
  heartbeatRate?: number;
  /**
   * @remarks
   * The ID of the last migration job.
   * 
   * @example
   * j-bp19vlwm0tyigbmj****
   */
  jobId?: string;
  /**
   * @remarks
   * The kernel level of the migration source.
   * 
   * @example
   * 1
   */
  kernelLevel?: number;
  /**
   * @remarks
   * The name of the migration source.
   * 
   * @example
   * SourceServerName
   */
  name?: string;
  /**
   * @remarks
   * The operating system of the migration source.
   * 
   * @example
   * OpenSUSE
   */
  platform?: string;
  /**
   * @remarks
   * The replication driver used for migration. Default value: SMT.
   * 
   * @example
   * SMT
   */
  replicationDriver?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the migration source.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string;
  /**
   * @remarks
   * The state of the migration source.
   * 
   * @example
   * InUse
   */
  state?: string;
  /**
   * @remarks
   * The status information of the migration source. This parameter is returned if the migration source is in the Unavailable state. The value of this parameter consists of key-value pairs in the JSON format. Sample keys:
   * 
   *     error_code: The error code.
   *     error_msg: the error message.
   * 
   * @example
   * {"error_code": "S1", "error_msg": "Rsync not found. Please install rsync."}
   */
  statusInfo?: string;
  /**
   * @remarks
   * The information about the system disk partition.
   */
  systemDiskParts?: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts;
  /**
   * @remarks
   * The system disk size of the migration source. Unit: GiB
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The system information of the migration source. The parameter must be specified as key-value pairs in the JSON format. The key-value pairs are extensible and have fixed keys. Maximum value: 1 KB. Example:
   * 
   *     agent_mode: the running mode.
   *     agent_type: the type of the run.
   *     client_type: the type of the client.
   *     hostname : the hostname.
   *     ipv4:IPv4 address
   *     ipv6: IPv6 address
   *     cores: the number of CPU cores.
   *     cpu_usage: the CPU utilization.
   *     memory: the memory size.
   *     memory_usage: the memory usage.
   * 
   * @example
   * {\\"agent_mode\\":\\"daemon\\",\\"agent_type\\":\\"aliyun\\",\\"client_type\\":\\"\\",\\"cores\\":\\"2\\",\\"cpu_usage\\":\\"0.00\\",\\"hostname\\":\\"ixxxxxxxxxx\\",\\"ipv4\\":\\"10.0.0.1\\",\\"memory\\":\\"8.00\\",\\"memory_usage\\":\\"3.61\\"}
   */
  systemInfo?: string;
  /**
   * @remarks
   * The tag details.
   */
  tags?: DescribeSourceServersResponseBodySourceServersSourceServerTags;
  /**
   * @remarks
   * The workgroup ID.
   * 
   * @example
   * w-bp1ja22kdqphehlj****
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      dataDisks: 'DataDisks',
      description: 'Description',
      disks: 'Disks',
      errorCode: 'ErrorCode',
      heartbeatRate: 'HeartbeatRate',
      jobId: 'JobId',
      kernelLevel: 'KernelLevel',
      name: 'Name',
      platform: 'Platform',
      replicationDriver: 'ReplicationDriver',
      resourceGroupId: 'ResourceGroupId',
      sourceId: 'SourceId',
      state: 'State',
      statusInfo: 'StatusInfo',
      systemDiskParts: 'SystemDiskParts',
      systemDiskSize: 'SystemDiskSize',
      systemInfo: 'SystemInfo',
      tags: 'Tags',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      architecture: 'string',
      creationTime: 'string',
      dataDisks: DescribeSourceServersResponseBodySourceServersSourceServerDataDisks,
      description: 'string',
      disks: DescribeSourceServersResponseBodySourceServersSourceServerDisks,
      errorCode: 'string',
      heartbeatRate: 'number',
      jobId: 'string',
      kernelLevel: 'number',
      name: 'string',
      platform: 'string',
      replicationDriver: 'string',
      resourceGroupId: 'string',
      sourceId: 'string',
      state: 'string',
      statusInfo: 'string',
      systemDiskParts: DescribeSourceServersResponseBodySourceServersSourceServerSystemDiskParts,
      systemDiskSize: 'number',
      systemInfo: 'string',
      tags: DescribeSourceServersResponseBodySourceServersSourceServerTags,
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

export class DescribeSourceServersResponseBodySourceServers extends $dara.Model {
  sourceServer?: DescribeSourceServersResponseBodySourceServersSourceServer[];
  static names(): { [key: string]: string } {
    return {
      sourceServer: 'SourceServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceServer: { 'type': 'array', 'itemType': DescribeSourceServersResponseBodySourceServersSourceServer },
    };
  }

  validate() {
    if(Array.isArray(this.sourceServer)) {
      $dara.Model.validateArray(this.sourceServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the workgroup. Valid values of N: 1 to 20.
   * 
   * You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the workgroup. Valid values of N: 1 to 20.
   * 
   * You can specify an empty string as a tag value. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the workgroup.
   * 
   * You can specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the workgroup. Valid values of N: 1 to 20.
   * 
   * You can specify an empty string as a tag value. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTags extends $dara.Model {
  tag?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTagsTag },
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

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarningSourceIds extends $dara.Model {
  sourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarning extends $dara.Model {
  /**
   * @remarks
   * The migration sources for which alerts are generated.
   */
  sourceIds?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarningSourceIds;
  /**
   * @remarks
   * The type of the alert. Valid values:
   * 
   * *   InError: A migration job failed.
   * *   UnRelated: No migration job is created for a migration source.
   * *   NotPassed: A migration job failed to pass the migration test.
   * 
   * @example
   * InError
   */
  warningType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIds: 'SourceIds',
      warningType: 'WarningType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIds: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarningSourceIds,
      warningType: 'string',
    };
  }

  validate() {
    if(this.sourceIds && typeof (this.sourceIds as any).validate === 'function') {
      (this.sourceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarnings extends $dara.Model {
  warning?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarning[];
  static names(): { [key: string]: string } {
    return {
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warning: { 'type': 'array', 'itemType': DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarning },
    };
  }

  validate() {
    if(Array.isArray(this.warning)) {
      $dara.Model.validateArray(this.warning);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroup extends $dara.Model {
  /**
   * @remarks
   * The description of the workgroup.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the workgroup.
   * 
   * @example
   * testWorkgroupName
   */
  name?: string;
  /**
   * @remarks
   * The state of the workgroup. Valid values:
   * 
   * *   NotStarted
   * *   InProgress
   * *   Cutover
   * *   Completed
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The tag information of the workgroup.
   */
  tags?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTags;
  /**
   * @remarks
   * The alert information of the workgroup, which can contain multiple types of alerts.
   */
  warnings?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarnings;
  /**
   * @remarks
   * The workgroup ID.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      status: 'Status',
      tags: 'Tags',
      warnings: 'Warnings',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      status: 'string',
      tags: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTags,
      warnings: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarnings,
      workgroupId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.warnings && typeof (this.warnings as any).validate === 'function') {
      (this.warnings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroups extends $dara.Model {
  workgroup?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroup[];
  static names(): { [key: string]: string } {
    return {
      workgroup: 'Workgroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workgroup: { 'type': 'array', 'itemType': DescribeWorkgroupsResponseBodyWorkgroupsWorkgroup },
    };
  }

  validate() {
    if(Array.isArray(this.workgroup)) {
      $dara.Model.validateArray(this.workgroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBodyAccessTokensAccessToken extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * at-bp1akz2zp67r0k6r****
   */
  accessTokenId?: string;
  /**
   * @remarks
   * The maximum number of times that the activation code can be used. Valid values: 1 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  count?: string;
  /**
   * @remarks
   * The time when the activation code was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-09T02:35:44Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * This is an activation code
   */
  description?: string;
  /**
   * @remarks
   * The name of the activation code.
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * The number of migration sources whose information has been imported to Server Migration Center (SMC) by using the activation code.
   * 
   * @example
   * 5
   */
  registeredCount?: string;
  /**
   * @remarks
   * The status of the activation code. Valid values:
   * 
   * *   activated
   * *   unactivated
   * *   expired
   * 
   * @example
   * activated
   */
  status?: string;
  /**
   * @remarks
   * The validity period of the activation code. Unit: day. Valid values: 1 to 90. Default value: 30.
   * 
   * @example
   * 30
   */
  timeToLiveInDays?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      count: 'Count',
      creationTime: 'CreationTime',
      description: 'Description',
      name: 'Name',
      registeredCount: 'RegisteredCount',
      status: 'Status',
      timeToLiveInDays: 'TimeToLiveInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      count: 'string',
      creationTime: 'string',
      description: 'string',
      name: 'string',
      registeredCount: 'string',
      status: 'string',
      timeToLiveInDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBodyAccessTokens extends $dara.Model {
  accessToken?: ListAccessTokensResponseBodyAccessTokensAccessToken[];
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: { 'type': 'array', 'itemType': ListAccessTokensResponseBodyAccessTokensAccessToken },
    };
  }

  validate() {
    if(Array.isArray(this.accessToken)) {
      $dara.Model.validateArray(this.accessToken);
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
   * The key of tag N. The tag key must be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * Tag.N is used for exact match of SMC resources to which the tag is attached. Tag N consists of a key-value pair.
   * 
   * *   Tag keys and values are case-sensitive.
   * *   If you set only the Tag.N.Key parameter, all resources to which the specified tags are attached are returned.
   * *   If you set only the Tag.N.Value parameter, the error message InvalidParameter.TagValue is returned.
   * *   If you specify multiple tag key-value pairs at a time, only SMC resources that match all tag key-value pairs are returned.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. The value must be 1 to 64 characters in length. Valid values of N: 1 to 20.
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
   * The resource ID.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ALIYUN::SMC::SOURCESERVER
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that is attached to the resource.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is attached to the resource.
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

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to be added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length and cannot start with acs: or aliyun. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to be added to the SMC resource. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.
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

export class AssociateSourceServersRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The IDs of migration sources. You can specify up to 50 IDs.
   * 
   * This parameter is required.
   */
  sourceId?: string[];
  /**
   * @remarks
   * The ID of the workgroup.
   * 
   * This parameter is required.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      workgroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateSourceServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F59623A9
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

export class AssociateSourceServersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateSourceServersResponseBody;
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
      body: AssociateSourceServersResponseBody,
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

export class CreateAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of times that the activation code can be used to import the information of migration sources. Valid values: 1 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 10
   */
  count?: string;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * The description of the activation code.
   */
  description?: string;
  /**
   * @remarks
   * The name of the activation code. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test_name
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The validity period of the activation code. The activation code can no longer be used to import the information of migration sources after the code expires. Unit: day. Valid values: 1 to 90.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  timeToLiveInDays?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      timeToLiveInDays: 'TimeToLiveInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      timeToLiveInDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value of the activation code. The value is returned only once after the CreateAccessToken operation is called and cannot be subsequently queried. Make sure that you properly save the returned value.
   * 
   * @example
   * B57QoTXEA2Tytr0uZWoNY5Aju5Jt****
   */
  accessTokenCode?: string;
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * at-bp1akz2zp67r0k6r****
   */
  accessTokenId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB4A7EA2-6FDA-5655-B067-854532FB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenCode: 'AccessTokenCode',
      accessTokenId: 'AccessTokenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenCode: 'string',
      accessTokenId: 'string',
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

export class CreateAccessTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessTokenResponseBody;
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
      body: CreateAccessTokenResponseBody,
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

export class CreateCrossZoneMigrationJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. In this case, you must manually pay for the instance. For more information, see [Renew a subscription instance](https://help.aliyun.com/document_detail/85052.html).
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk list.
   */
  disk?: CreateCrossZoneMigrationJobRequestDisk[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1ff25rzvnul6kr****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the destination Alibaba Cloud region.
   * 
   * For example, if you want to migrate the source server to the China (Hangzhou) region, set this parameter to `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The type of the new instance.
   * 
   * @example
   * ecs.g7.large
   */
  targetInstanceType?: string;
  /**
   * @remarks
   * The vSwitch ID of the destination Elastic Compute Service (ECS) instance.
   * 
   * @example
   * vsw-bp1mxqnssl8nafltcx32e
   */
  targetVSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      disk: 'Disk',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetInstanceType: 'TargetInstanceType',
      targetVSwitchId: 'TargetVSwitchId',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      disk: { 'type': 'array', 'itemType': CreateCrossZoneMigrationJobRequestDisk },
      instanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      targetInstanceType: 'string',
      targetVSwitchId: 'string',
      targetZoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCrossZoneMigrationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration job.
   * 
   * @example
   * j-bp17bclvg344jlyt****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9DBD2F8-DE5A-5844-BA6F-957A996CBD78
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

export class CreateCrossZoneMigrationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCrossZoneMigrationJobResponseBody;
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
      body: CreateCrossZoneMigrationJobResponseBody,
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

export class CreateReplicationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration job.
   * 
   * @example
   * j-bp17bclvg344jlyt****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F59623A9
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

export class CreateReplicationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateReplicationJobResponseBody;
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
      body: CreateReplicationJobResponseBody,
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

export class CreateWorkgroupRequest extends $dara.Model {
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
   * The description of the workgroup.
   * 
   * The description must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the workgroup. The name must meet the following requirements:
   * 
   * *   The name must be unique.
   * *   The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testWorkgroupName
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The tag information of the workgroup.
   */
  tag?: CreateWorkgroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      tag: { 'type': 'array', 'itemType': CreateWorkgroupRequestTag },
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

export class CreateWorkgroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F59623A9
   */
  requestId?: string;
  /**
   * @remarks
   * The workgroup ID.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workgroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkgroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkgroupResponseBody;
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
      body: CreateWorkgroupResponseBody,
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

export class CutOverReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the incremental migration job.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bp1fnx5y3djc4cop****
   */
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * Specifies whether to migrate full data for the last time. Valid Values:
   * 
   * *   true: migrates full data for the last time.
   * *   false: does not migrate full data for the last time.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  syncData?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      syncData: 'SyncData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      syncData: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CutOverReplicationJobResponseBody extends $dara.Model {
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

export class CutOverReplicationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CutOverReplicationJobResponseBody;
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
      body: CutOverReplicationJobResponseBody,
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

export class DeleteAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * This parameter is required.
   * 
   * @example
   * at-bp1akz2zp67r0k6r****
   */
  accessTokenId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB4A7EA2-6FDA-5655-B067-854532FB****
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

export class DeleteAccessTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessTokenResponseBody;
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
      body: DeleteAccessTokenResponseBody,
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

export class DeleteReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The migration job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bp17m1vi6x21qhqk****
   */
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReplicationJobResponseBody extends $dara.Model {
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

export class DeleteReplicationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteReplicationJobResponseBody;
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
      body: DeleteReplicationJobResponseBody,
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

export class DeleteSourceServerRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the migration source. Valid values:
   * 
   * *   true: forcibly deletes the migration source and the migration job created for the migration source, and releases the intermediate resources of the migration job.
   * *   false: does not delete the migration source if a migration job is created for the migration source.
   * 
   * @example
   * true
   */
  force?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The migration source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp17m1vi6x20c6g6****
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSourceServerResponseBody extends $dara.Model {
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

export class DeleteSourceServerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSourceServerResponseBody;
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
      body: DeleteSourceServerResponseBody,
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

export class DeleteWorkgroupRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The workgroup ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      workgroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkgroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 410E6073-66D0-45D3-AB3E-4DC3F5E4****
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

export class DeleteWorkgroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkgroupResponseBody;
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
      body: DeleteWorkgroupResponseBody,
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

export class DescribeReplicationJobsRequest extends $dara.Model {
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
   * The IDs of the destination Elastic Compute Service (ECS) instances.
   */
  instanceId?: string[];
  /**
   * @remarks
   * The IDs of the migration jobs. You can specify a maximum of 50 IDs.
   * 
   * @example
   * j-bp19vlwm0tyigbmj****
   */
  jobId?: string[];
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
   * The name of the migration job.
   * 
   * @example
   * testMigrationTaskName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1.
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
   * The ID of the Alibaba Cloud region to which you want to migrate the source server.
   * 
   * For example, if you want to migrate a source server to the China (Hangzhou) region, set this parameter to `cn-hangzhou`. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The IDs of the source servers. You can specify a maximum of 50 IDs.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string[];
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
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The information about tags that are attached to the SMC resource.
   */
  tag?: DescribeReplicationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobType: 'number',
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeReplicationJobsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.jobId)) {
      $dara.Model.validateArray(this.jobId);
    }
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
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

export class DescribeReplicationJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReplicationJobsResponseBody;
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
      body: DescribeReplicationJobsResponseBody,
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

export class DescribeSourceServersRequest extends $dara.Model {
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
   * The name of the migration source. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testSourceServerName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1.
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
   * The type of migration job that is associated with the migration source.
   */
  relatedJobType?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The migration source ID. You can specify multiple IDs.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string[];
  /**
   * @remarks
   * The state of the migration source. Valid values:
   * 
   * *   Unavailable: The migration source is inactive, or an error occurs in the migration source.
   * *   Available: The migration source is active.
   * *   InUse: The migration source is being migrated.
   * *   Deleting: The migration source is being deleted from Server Migration Center (SMC).
   * 
   * @example
   * Available
   */
  state?: string;
  /**
   * @remarks
   * The tag.
   */
  tag?: DescribeSourceServersRequestTag[];
  /**
   * @remarks
   * The workgroup ID.
   * 
   * @example
   * w-bp1ja22kdqphehlj****
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relatedJobType: 'RelatedJobType',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      state: 'State',
      tag: 'Tag',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      relatedJobType: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSourceServersRequestTag },
      workgroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedJobType)) {
      $dara.Model.validateArray(this.relatedJobType);
    }
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
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

export class DescribeSourceServersResponseBody extends $dara.Model {
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
   * The number of entries returned on each page.
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
   * 410E6073-66D0-45D3-AB3E-4DC3F5E4****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the migration source.
   */
  sourceServers?: DescribeSourceServersResponseBodySourceServers;
  /**
   * @remarks
   * The total number of migration sources returned.
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
      sourceServers: 'SourceServers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sourceServers: DescribeSourceServersResponseBodySourceServers,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sourceServers && typeof (this.sourceServers as any).validate === 'function') {
      (this.sourceServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSourceServersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSourceServersResponseBody;
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
      body: DescribeSourceServersResponseBody,
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

export class DescribeWorkgroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the workgroup.
   * 
   * @example
   * test
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The state of the workgroup. Valid values:
   * 
   * *   NotStarted
   * *   InProgress
   * *   Cutover
   * *   Completed
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The list of tag information of workgroups.
   */
  tag?: DescribeWorkgroupsRequestTag[];
  /**
   * @remarks
   * The workgroup IDs. You can specify up to 50 workgroup IDs.
   */
  workgroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      status: 'Status',
      tag: 'Tag',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeWorkgroupsRequestTag },
      workgroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.workgroupId)) {
      $dara.Model.validateArray(this.workgroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBody extends $dara.Model {
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
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
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
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of workgroups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The queried workgroups.
   */
  workgroups?: DescribeWorkgroupsResponseBodyWorkgroups;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workgroups: 'Workgroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      workgroups: DescribeWorkgroupsResponseBodyWorkgroups,
    };
  }

  validate() {
    if(this.workgroups && typeof (this.workgroups as any).validate === 'function') {
      (this.workgroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWorkgroupsResponseBody;
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
      body: DescribeWorkgroupsResponseBody,
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

export class DisableAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * This parameter is required.
   * 
   * @example
   * at-bp12g5gwup0yzmce****
   */
  accessTokenId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 686BB8A6-BBA5-47E5-8A75-D2ADE433****
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

export class DisableAccessTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAccessTokenResponseBody;
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
      body: DisableAccessTokenResponseBody,
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

export class DisassociateSourceServersRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The IDs of migration sources that you want to disassociate from the workgroup. You can specify up to 50 migration sources.
   * 
   * This parameter is required.
   */
  sourceId?: string[];
  /**
   * @remarks
   * The ID of the workgroup.
   * 
   * This parameter is required.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      workgroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateSourceServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E8B9ABB-289A-44E6-942D-8AA9E493****
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

export class DisassociateSourceServersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateSourceServersResponseBody;
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
      body: DisassociateSourceServersResponseBody,
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

export class ListAccessTokensRequest extends $dara.Model {
  /**
   * @remarks
   * The information about activation codes.
   */
  accessTokenId?: string[];
  /**
   * @remarks
   * The name of the activation code.
   * 
   * @example
   * test_name
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The status of the activation code. Valid values:
   * 
   * *   activated
   * *   unactivated
   * *   expired
   * 
   * @example
   * activated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessTokenId)) {
      $dara.Model.validateArray(this.accessTokenId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation codes returned.
   */
  accessTokens?: ListAccessTokensResponseBodyAccessTokens;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   10
   * *   20
   * *   50
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
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
   * E2DA3097-79B9-53AE-B0DF-281DC54F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of migration sources returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokens: 'AccessTokens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokens: ListAccessTokensResponseBodyAccessTokens,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessTokens && typeof (this.accessTokens as any).validate === 'function') {
      (this.accessTokens as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessTokensResponseBody;
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
      body: ListAccessTokensResponseBody,
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of SMC resources. SMC resources include migration sources and migration jobs. You can specify a maximum of 50 SMC resource IDs.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the SMC resource. Valid values:
   * 
   * *   sourceserver: migration source.
   * *   replicationjob: migration job.
   * 
   * This parameter is required.
   * 
   * @example
   * sourceserver
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that are attached to SMC resources.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17743161-66F3-4E7F-B8AE-845FB28B928F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about SMC resources and tags, such as the IDs, types, and tag key-value pairs of the resources.
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

export class ModifyReplicationJobAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C488B66-B819-4D14-8711-C4EAAA13AC01
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

export class ModifyReplicationJobAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyReplicationJobAttributeResponseBody;
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
      body: ModifyReplicationJobAttributeResponseBody,
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

export class ModifySourceServerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the migration source. The description can be up to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a source server.
   */
  description?: string;
  /**
   * @remarks
   * The name of the migration source. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testSourceServerName
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The migration source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp17m1vi6x20c6g6****
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySourceServerAttributeResponseBody extends $dara.Model {
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

export class ModifySourceServerAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySourceServerAttributeResponseBody;
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
      body: ModifySourceServerAttributeResponseBody,
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

export class ModifyWorkgroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the workgroup.
   * 
   * The description must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The new name of the workgroup. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testMigrationTaskName
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The workgroup ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      workgroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWorkgroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E8B9ABB-289A-44E6-942D-8AA9E493****
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

export class ModifyWorkgroupAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyWorkgroupAttributeResponseBody;
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
      body: ModifyWorkgroupAttributeResponseBody,
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

export class StartReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The migration job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bw526m1vi6x21q****
   */
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicationJobResponseBody extends $dara.Model {
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

export class StartReplicationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartReplicationJobResponseBody;
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
      body: StartReplicationJobResponseBody,
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

export class StopReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The migration job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bw526m1vi6x21qh****
   */
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopReplicationJobResponseBody extends $dara.Model {
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

export class StopReplicationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopReplicationJobResponseBody;
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
      body: StopReplicationJobResponseBody,
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
  ownerId?: number;
  /**
   * @remarks
   * The IDs of N SMC resources. SMC resources include migration sources and jobs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bw526m1vi6x20c6g****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the SMC resource. Valid values:
   * 
   * *   sourceserver: migration source.
   * *   replicationjob: migration job.
   * 
   * This parameter is required.
   * 
   * @example
   * sourceserver
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
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
   * 3E8B9ABB-289A-44E6-942D-8AA9E493****
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

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags that are added to the specified SMC resource. This parameter is valid only if you do not set `TagKey.N`. Valid values:
   * 
   * *   true: removes all tags that are added to the specified SMC resource. If no tags are added to the specified SMC resource, no operation is performed.
   * *   false: does not remove tags that are added to the specified SMC resource.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of N SMC resources. SMC resources include migration sources and jobs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bw526m1vi6x20c6g****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The type of the SMC resource. Valid values:
   * 
   * *   sourceserver: migration source.
   * *   replicationjob: migration job.
   * 
   * This parameter is required.
   * 
   * @example
   * sourceserver
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N that is added to the SMC resource. Tag keys are case-sensitive. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
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

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
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

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("smc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Associates multiple migration sources with a workgroup.
   * 
   * @remarks
   * A migration source can be associated with only one workgroup.
   * 
   * @param request - AssociateSourceServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateSourceServersResponse
   */
  async associateSourceServersWithOptions(request: AssociateSourceServersRequest, runtime: $dara.RuntimeOptions): Promise<AssociateSourceServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssociateSourceServersResponse>(await this.callApi(params, req, runtime), new AssociateSourceServersResponse({}));
    } else {
      return $dara.cast<AssociateSourceServersResponse>(await this.execute(params, req, runtime), new AssociateSourceServersResponse({}));
    }

  }

  /**
   * Associates multiple migration sources with a workgroup.
   * 
   * @remarks
   * A migration source can be associated with only one workgroup.
   * 
   * @param request - AssociateSourceServersRequest
   * @returns AssociateSourceServersResponse
   */
  async associateSourceServers(request: AssociateSourceServersRequest): Promise<AssociateSourceServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateSourceServersWithOptions(request, runtime);
  }

  /**
   * Creates an activation code.
   * 
   * @remarks
   * If you want to import the information of migration sources by using an activation code, you can call this operation to create one.
   * 
   * @param request - CreateAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessTokenResponse
   */
  async createAccessTokenWithOptions(request: CreateAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<CreateAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.timeToLiveInDays)) {
      query["TimeToLiveInDays"] = request.timeToLiveInDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAccessTokenResponse>(await this.callApi(params, req, runtime), new CreateAccessTokenResponse({}));
    } else {
      return $dara.cast<CreateAccessTokenResponse>(await this.execute(params, req, runtime), new CreateAccessTokenResponse({}));
    }

  }

  /**
   * Creates an activation code.
   * 
   * @remarks
   * If you want to import the information of migration sources by using an activation code, you can call this operation to create one.
   * 
   * @param request - CreateAccessTokenRequest
   * @returns CreateAccessTokenResponse
   */
  async createAccessToken(request: CreateAccessTokenRequest): Promise<CreateAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessTokenWithOptions(request, runtime);
  }

  /**
   * Server Migration Center (SMC) allows you to migrate Alibaba Cloud ECS instances across zones in the same region. You can also change the instance type (vCPU and memory) within the same instance family to meet your business requirements. You can use this API to create a cross-zone migration job.
   * 
   * @remarks
   * For more information about the limits and impacts of cross-zone migration, see [Cross-zone ECS instance migration](https://help.aliyun.com/document_detail/476797.html).
   * 
   * @param request - CreateCrossZoneMigrationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCrossZoneMigrationJobResponse
   */
  async createCrossZoneMigrationJobWithOptions(request: CreateCrossZoneMigrationJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateCrossZoneMigrationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disk)) {
      query["Disk"] = request.disk;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.targetInstanceType)) {
      query["TargetInstanceType"] = request.targetInstanceType;
    }

    if (!$dara.isNull(request.targetVSwitchId)) {
      query["TargetVSwitchId"] = request.targetVSwitchId;
    }

    if (!$dara.isNull(request.targetZoneId)) {
      query["TargetZoneId"] = request.targetZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCrossZoneMigrationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCrossZoneMigrationJobResponse>(await this.callApi(params, req, runtime), new CreateCrossZoneMigrationJobResponse({}));
    } else {
      return $dara.cast<CreateCrossZoneMigrationJobResponse>(await this.execute(params, req, runtime), new CreateCrossZoneMigrationJobResponse({}));
    }

  }

  /**
   * Server Migration Center (SMC) allows you to migrate Alibaba Cloud ECS instances across zones in the same region. You can also change the instance type (vCPU and memory) within the same instance family to meet your business requirements. You can use this API to create a cross-zone migration job.
   * 
   * @remarks
   * For more information about the limits and impacts of cross-zone migration, see [Cross-zone ECS instance migration](https://help.aliyun.com/document_detail/476797.html).
   * 
   * @param request - CreateCrossZoneMigrationJobRequest
   * @returns CreateCrossZoneMigrationJobResponse
   */
  async createCrossZoneMigrationJob(request: CreateCrossZoneMigrationJobRequest): Promise<CreateCrossZoneMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCrossZoneMigrationJobWithOptions(request, runtime);
  }

  /**
   * Creates a migration job for a source server.
   * 
   * @remarks
   * ## Usage notes
   * *   You can create migration jobs only for source servers that are in the Available state.
   * *   Each source server can be associated with only one migration job that is in the Ready, Running, Stopped, Waiting, InError, or Expired state.
   * *   You can create a maximum of 1,000 migration jobs within each Alibaba Cloud account.
   * *   If you migrate a source server to an image, you must specify the ImageName, SystemDiskSize, and DataDisk parameters.
   * *   If you use a virtual private cloud (VPC) to migrate data, the VSwitchId parameter is required and the VpcId parameter is optional.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. This allows you to migrate containerized applications in a cost-effective way.
   * 
   * @param request - CreateReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReplicationJobResponse
   */
  async createReplicationJobWithOptions(request: CreateReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.containerNamespace)) {
      query["ContainerNamespace"] = request.containerNamespace;
    }

    if (!$dara.isNull(request.containerRepository)) {
      query["ContainerRepository"] = request.containerRepository;
    }

    if (!$dara.isNull(request.containerTag)) {
      query["ContainerTag"] = request.containerTag;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disks)) {
      query["Disks"] = request.disks;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRamRole)) {
      query["InstanceRamRole"] = request.instanceRamRole;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!$dara.isNull(request.maxNumberOfImageToKeep)) {
      query["MaxNumberOfImageToKeep"] = request.maxNumberOfImageToKeep;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netMode)) {
      query["NetMode"] = request.netMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicationParameters)) {
      query["ReplicationParameters"] = request.replicationParameters;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.runOnce)) {
      query["RunOnce"] = request.runOnce;
    }

    if (!$dara.isNull(request.scheduledStartTime)) {
      query["ScheduledStartTime"] = request.scheduledStartTime;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.systemDiskPart)) {
      query["SystemDiskPart"] = request.systemDiskPart;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateReplicationJobResponse>(await this.callApi(params, req, runtime), new CreateReplicationJobResponse({}));
    } else {
      return $dara.cast<CreateReplicationJobResponse>(await this.execute(params, req, runtime), new CreateReplicationJobResponse({}));
    }

  }

  /**
   * Creates a migration job for a source server.
   * 
   * @remarks
   * ## Usage notes
   * *   You can create migration jobs only for source servers that are in the Available state.
   * *   Each source server can be associated with only one migration job that is in the Ready, Running, Stopped, Waiting, InError, or Expired state.
   * *   You can create a maximum of 1,000 migration jobs within each Alibaba Cloud account.
   * *   If you migrate a source server to an image, you must specify the ImageName, SystemDiskSize, and DataDisk parameters.
   * *   If you use a virtual private cloud (VPC) to migrate data, the VSwitchId parameter is required and the VpcId parameter is optional.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. This allows you to migrate containerized applications in a cost-effective way.
   * 
   * @param request - CreateReplicationJobRequest
   * @returns CreateReplicationJobResponse
   */
  async createReplicationJob(request: CreateReplicationJobRequest): Promise<CreateReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReplicationJobWithOptions(request, runtime);
  }

  /**
   * Creates a workgroup. You can create a workgroup to manage the lifecycles of multiple migration tasks at a time. This is suitable for scenarios in which multiple servers are migrated.
   * 
   * @remarks
   *   You can create up to 50 workgroups within an Alibaba Cloud account.
   * *   A workgroup can be associated with a maximum of 50 migration sources.
   * *   A migration source can be associated with only one workgroup.
   * 
   * @param request - CreateWorkgroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkgroupResponse
   */
  async createWorkgroupWithOptions(request: CreateWorkgroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateWorkgroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkgroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWorkgroupResponse>(await this.callApi(params, req, runtime), new CreateWorkgroupResponse({}));
    } else {
      return $dara.cast<CreateWorkgroupResponse>(await this.execute(params, req, runtime), new CreateWorkgroupResponse({}));
    }

  }

  /**
   * Creates a workgroup. You can create a workgroup to manage the lifecycles of multiple migration tasks at a time. This is suitable for scenarios in which multiple servers are migrated.
   * 
   * @remarks
   *   You can create up to 50 workgroups within an Alibaba Cloud account.
   * *   A workgroup can be associated with a maximum of 50 migration sources.
   * *   A migration source can be associated with only one workgroup.
   * 
   * @param request - CreateWorkgroupRequest
   * @returns CreateWorkgroupResponse
   */
  async createWorkgroup(request: CreateWorkgroupRequest): Promise<CreateWorkgroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkgroupWithOptions(request, runtime);
  }

  /**
   * Stops an incremental migration job that periodically runs. After you call this operation to stop an incremental migration job, the migration job is complete.
   * 
   * @remarks
   * ## Usage notes
   * *   The incremental migration job must be in the Waiting state.
   * *   After you call this operation, the incremental migration job no longer periodically runs. In the meantime, Server Migration Center (SMC) determines whether to perform a full data migration for the last time based on the value of the `SyncData` parameter. If you set the SyncData parameter to `false`, SMC releases intermediate resources without data migration before the migration job is complete. If you set the SyncData parameter to `true`, SMC performs a full data migration and releases intermediate resources before the migration job is complete.
   * 
   * @param request - CutOverReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CutOverReplicationJobResponse
   */
  async cutOverReplicationJobWithOptions(request: CutOverReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<CutOverReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.syncData)) {
      query["SyncData"] = request.syncData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CutOverReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CutOverReplicationJobResponse>(await this.callApi(params, req, runtime), new CutOverReplicationJobResponse({}));
    } else {
      return $dara.cast<CutOverReplicationJobResponse>(await this.execute(params, req, runtime), new CutOverReplicationJobResponse({}));
    }

  }

  /**
   * Stops an incremental migration job that periodically runs. After you call this operation to stop an incremental migration job, the migration job is complete.
   * 
   * @remarks
   * ## Usage notes
   * *   The incremental migration job must be in the Waiting state.
   * *   After you call this operation, the incremental migration job no longer periodically runs. In the meantime, Server Migration Center (SMC) determines whether to perform a full data migration for the last time based on the value of the `SyncData` parameter. If you set the SyncData parameter to `false`, SMC releases intermediate resources without data migration before the migration job is complete. If you set the SyncData parameter to `true`, SMC performs a full data migration and releases intermediate resources before the migration job is complete.
   * 
   * @param request - CutOverReplicationJobRequest
   * @returns CutOverReplicationJobResponse
   */
  async cutOverReplicationJob(request: CutOverReplicationJobRequest): Promise<CutOverReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cutOverReplicationJobWithOptions(request, runtime);
  }

  /**
   * Deletes an activation code.
   * 
   * @remarks
   * You can call this operation to delete an activation code if you no longer need to import the information about migration sources by using the activation code or if the activation code has expired.
   * 
   * @param request - DeleteAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessTokenResponse
   */
  async deleteAccessTokenWithOptions(request: DeleteAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAccessTokenResponse>(await this.callApi(params, req, runtime), new DeleteAccessTokenResponse({}));
    } else {
      return $dara.cast<DeleteAccessTokenResponse>(await this.execute(params, req, runtime), new DeleteAccessTokenResponse({}));
    }

  }

  /**
   * Deletes an activation code.
   * 
   * @remarks
   * You can call this operation to delete an activation code if you no longer need to import the information about migration sources by using the activation code or if the activation code has expired.
   * 
   * @param request - DeleteAccessTokenRequest
   * @returns DeleteAccessTokenResponse
   */
  async deleteAccessToken(request: DeleteAccessTokenRequest): Promise<DeleteAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessTokenWithOptions(request, runtime);
  }

  /**
   * Deletes a migration job.
   * 
   * @remarks
   * ## Usage notes
   * *   Deleted migration jobs cannot be restored.
   * *   After a migration job is deleted, associated resources, such as the intermediate instance, are automatically released.
   * 
   * @param request - DeleteReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReplicationJobResponse
   */
  async deleteReplicationJobWithOptions(request: DeleteReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<DeleteReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteReplicationJobResponse>(await this.callApi(params, req, runtime), new DeleteReplicationJobResponse({}));
    } else {
      return $dara.cast<DeleteReplicationJobResponse>(await this.execute(params, req, runtime), new DeleteReplicationJobResponse({}));
    }

  }

  /**
   * Deletes a migration job.
   * 
   * @remarks
   * ## Usage notes
   * *   Deleted migration jobs cannot be restored.
   * *   After a migration job is deleted, associated resources, such as the intermediate instance, are automatically released.
   * 
   * @param request - DeleteReplicationJobRequest
   * @returns DeleteReplicationJobResponse
   */
  async deleteReplicationJob(request: DeleteReplicationJobRequest): Promise<DeleteReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReplicationJobWithOptions(request, runtime);
  }

  /**
   * Deletes a migration source.
   * 
   * @remarks
   * ## Usage notes
   * *   If a migration job is created for the migration source and the migration job is in the Running state, the migration source cannot be deleted.
   * *   If a migration job is created for the migration source but the migration job is not in the Running state, you can set the `Force` parameter to true to delete the migration source.
   * 
   * @param request - DeleteSourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceServerResponse
   */
  async deleteSourceServerWithOptions(request: DeleteSourceServerRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSourceServer",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSourceServerResponse>(await this.callApi(params, req, runtime), new DeleteSourceServerResponse({}));
    } else {
      return $dara.cast<DeleteSourceServerResponse>(await this.execute(params, req, runtime), new DeleteSourceServerResponse({}));
    }

  }

  /**
   * Deletes a migration source.
   * 
   * @remarks
   * ## Usage notes
   * *   If a migration job is created for the migration source and the migration job is in the Running state, the migration source cannot be deleted.
   * *   If a migration job is created for the migration source but the migration job is not in the Running state, you can set the `Force` parameter to true to delete the migration source.
   * 
   * @param request - DeleteSourceServerRequest
   * @returns DeleteSourceServerResponse
   */
  async deleteSourceServer(request: DeleteSourceServerRequest): Promise<DeleteSourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSourceServerWithOptions(request, runtime);
  }

  /**
   * Deletes a workgroup.
   * 
   * @remarks
   * To delete a workgroup, you must delete or dissociate the migration source that is associated with the workgroup. For more information, see [DeleteSourceServer](https://help.aliyun.com/document_detail/2402124.html).
   * 
   * @param request - DeleteWorkgroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkgroupResponse
   */
  async deleteWorkgroupWithOptions(request: DeleteWorkgroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteWorkgroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkgroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteWorkgroupResponse>(await this.callApi(params, req, runtime), new DeleteWorkgroupResponse({}));
    } else {
      return $dara.cast<DeleteWorkgroupResponse>(await this.execute(params, req, runtime), new DeleteWorkgroupResponse({}));
    }

  }

  /**
   * Deletes a workgroup.
   * 
   * @remarks
   * To delete a workgroup, you must delete or dissociate the migration source that is associated with the workgroup. For more information, see [DeleteSourceServer](https://help.aliyun.com/document_detail/2402124.html).
   * 
   * @param request - DeleteWorkgroupRequest
   * @returns DeleteWorkgroupResponse
   */
  async deleteWorkgroup(request: DeleteWorkgroupRequest): Promise<DeleteWorkgroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkgroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of migration jobs.
   * 
   * @remarks
   * ## Usage notes
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. You can use SMC to migrate containerized applications in a cost-effective way. For more information, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @param request - DescribeReplicationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicationJobsResponse
   */
  async describeReplicationJobsWithOptions(request: DescribeReplicationJobsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeReplicationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReplicationJobs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeReplicationJobsResponse>(await this.callApi(params, req, runtime), new DescribeReplicationJobsResponse({}));
    } else {
      return $dara.cast<DescribeReplicationJobsResponse>(await this.execute(params, req, runtime), new DescribeReplicationJobsResponse({}));
    }

  }

  /**
   * Queries the details of migration jobs.
   * 
   * @remarks
   * ## Usage notes
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are used as filter conditions.
   * *   Server Migration Center (SMC) allows you to migrate source servers to Docker container images. You can use SMC to migrate containerized applications in a cost-effective way. For more information, see [Terms](https://help.aliyun.com/document_detail/60744.html).
   * 
   * @param request - DescribeReplicationJobsRequest
   * @returns DescribeReplicationJobsResponse
   */
  async describeReplicationJobs(request: DescribeReplicationJobsRequest): Promise<DescribeReplicationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReplicationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more source servers.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can specify multiple request parameters to filter instances. Specified parameters have logical AND relations. Only the specified parameters are used as filter conditions.
   * 
   * @param request - DescribeSourceServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSourceServersResponse
   */
  async describeSourceServersWithOptions(request: DescribeSourceServersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSourceServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.relatedJobType)) {
      query["RelatedJobType"] = request.relatedJobType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSourceServersResponse>(await this.callApi(params, req, runtime), new DescribeSourceServersResponse({}));
    } else {
      return $dara.cast<DescribeSourceServersResponse>(await this.execute(params, req, runtime), new DescribeSourceServersResponse({}));
    }

  }

  /**
   * Queries the information about one or more source servers.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can specify multiple request parameters to filter instances. Specified parameters have logical AND relations. Only the specified parameters are used as filter conditions.
   * 
   * @param request - DescribeSourceServersRequest
   * @returns DescribeSourceServersResponse
   */
  async describeSourceServers(request: DescribeSourceServersRequest): Promise<DescribeSourceServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSourceServersWithOptions(request, runtime);
  }

  /**
   * Queries the information about workgroups. After you create a workgroup, you can query the information about the workgroup, such as the name, description, and alert information.
   * 
   * @param request - DescribeWorkgroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkgroupsResponse
   */
  async describeWorkgroupsWithOptions(request: DescribeWorkgroupsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeWorkgroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkgroups",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeWorkgroupsResponse>(await this.callApi(params, req, runtime), new DescribeWorkgroupsResponse({}));
    } else {
      return $dara.cast<DescribeWorkgroupsResponse>(await this.execute(params, req, runtime), new DescribeWorkgroupsResponse({}));
    }

  }

  /**
   * Queries the information about workgroups. After you create a workgroup, you can query the information about the workgroup, such as the name, description, and alert information.
   * 
   * @param request - DescribeWorkgroupsRequest
   * @returns DescribeWorkgroupsResponse
   */
  async describeWorkgroups(request: DescribeWorkgroupsRequest): Promise<DescribeWorkgroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWorkgroupsWithOptions(request, runtime);
  }

  /**
   * Disables an activation code.
   * 
   * @remarks
   * To prevent an activation code from being leaked, you can call this operation to disable the activation code. Disabled activation codes can no longer be used to import the information about migration sources. However, migration sources whose information has been imported are not affected.
   * 
   * @param request - DisableAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAccessTokenResponse
   */
  async disableAccessTokenWithOptions(request: DisableAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<DisableAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAccessToken",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableAccessTokenResponse>(await this.callApi(params, req, runtime), new DisableAccessTokenResponse({}));
    } else {
      return $dara.cast<DisableAccessTokenResponse>(await this.execute(params, req, runtime), new DisableAccessTokenResponse({}));
    }

  }

  /**
   * Disables an activation code.
   * 
   * @remarks
   * To prevent an activation code from being leaked, you can call this operation to disable the activation code. Disabled activation codes can no longer be used to import the information about migration sources. However, migration sources whose information has been imported are not affected.
   * 
   * @param request - DisableAccessTokenRequest
   * @returns DisableAccessTokenResponse
   */
  async disableAccessToken(request: DisableAccessTokenRequest): Promise<DisableAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAccessTokenWithOptions(request, runtime);
  }

  /**
   * Disassociates migration sources from a workgroup. If you do not need to use a workgroup to migrate migration sources, you can disassociate the migration sources from the workgroup.
   * 
   * @param request - DisassociateSourceServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateSourceServersResponse
   */
  async disassociateSourceServersWithOptions(request: DisassociateSourceServersRequest, runtime: $dara.RuntimeOptions): Promise<DisassociateSourceServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateSourceServers",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisassociateSourceServersResponse>(await this.callApi(params, req, runtime), new DisassociateSourceServersResponse({}));
    } else {
      return $dara.cast<DisassociateSourceServersResponse>(await this.execute(params, req, runtime), new DisassociateSourceServersResponse({}));
    }

  }

  /**
   * Disassociates migration sources from a workgroup. If you do not need to use a workgroup to migrate migration sources, you can disassociate the migration sources from the workgroup.
   * 
   * @param request - DisassociateSourceServersRequest
   * @returns DisassociateSourceServersResponse
   */
  async disassociateSourceServers(request: DisassociateSourceServersRequest): Promise<DisassociateSourceServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateSourceServersWithOptions(request, runtime);
  }

  /**
   * Queries activation codes and the usage details of the activation codes.
   * 
   * @remarks
   * You can call this operation to query activation codes and the usage details of the activation codes. An activation code can be in the activated, unactivated, or expired state.
   * 
   * @param request - ListAccessTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessTokensResponse
   */
  async listAccessTokensWithOptions(request: ListAccessTokensRequest, runtime: $dara.RuntimeOptions): Promise<ListAccessTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenId)) {
      query["AccessTokenId"] = request.accessTokenId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessTokens",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAccessTokensResponse>(await this.callApi(params, req, runtime), new ListAccessTokensResponse({}));
    } else {
      return $dara.cast<ListAccessTokensResponse>(await this.execute(params, req, runtime), new ListAccessTokensResponse({}));
    }

  }

  /**
   * Queries activation codes and the usage details of the activation codes.
   * 
   * @remarks
   * You can call this operation to query activation codes and the usage details of the activation codes. An activation code can be in the activated, unactivated, or expired state.
   * 
   * @param request - ListAccessTokensRequest
   * @returns ListAccessTokensResponse
   */
  async listAccessTokens(request: ListAccessTokensRequest): Promise<ListAccessTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessTokensWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are attached to Server Migration Center (SMC) resources. SMC resources include migration sources and migration jobs.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are attached to Server Migration Center (SMC) resources. SMC resources include migration sources and migration jobs.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of a migration job.
   * 
   * @remarks
   * ## Usage notes
   * Before you modify the parameters of a migration job, take note of the following information:
   * *   The `Name` and `Description` parameters can be modified during the lifecycle of the migration job.
   * *   The `Frequency` and `MaxNumberOfImageToKeep` parameters can be modified only before the migration job is executed or when the migration job is in the `Waiting` state.
   * *   Other parameters can be modified only before the migration job is executed.
   * 
   * @param request - ModifyReplicationJobAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyReplicationJobAttributeResponse
   */
  async modifyReplicationJobAttributeWithOptions(request: ModifyReplicationJobAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyReplicationJobAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerNamespace)) {
      query["ContainerNamespace"] = request.containerNamespace;
    }

    if (!$dara.isNull(request.containerRepository)) {
      query["ContainerRepository"] = request.containerRepository;
    }

    if (!$dara.isNull(request.containerTag)) {
      query["ContainerTag"] = request.containerTag;
    }

    if (!$dara.isNull(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceRamRole)) {
      query["InstanceRamRole"] = request.instanceRamRole;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.maxNumberOfImageToKeep)) {
      query["MaxNumberOfImageToKeep"] = request.maxNumberOfImageToKeep;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.netMode)) {
      query["NetMode"] = request.netMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replicationParameters)) {
      query["ReplicationParameters"] = request.replicationParameters;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scheduledStartTime)) {
      query["ScheduledStartTime"] = request.scheduledStartTime;
    }

    if (!$dara.isNull(request.systemDiskPart)) {
      query["SystemDiskPart"] = request.systemDiskPart;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyReplicationJobAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyReplicationJobAttributeResponse>(await this.callApi(params, req, runtime), new ModifyReplicationJobAttributeResponse({}));
    } else {
      return $dara.cast<ModifyReplicationJobAttributeResponse>(await this.execute(params, req, runtime), new ModifyReplicationJobAttributeResponse({}));
    }

  }

  /**
   * Modifies the parameters of a migration job.
   * 
   * @remarks
   * ## Usage notes
   * Before you modify the parameters of a migration job, take note of the following information:
   * *   The `Name` and `Description` parameters can be modified during the lifecycle of the migration job.
   * *   The `Frequency` and `MaxNumberOfImageToKeep` parameters can be modified only before the migration job is executed or when the migration job is in the `Waiting` state.
   * *   Other parameters can be modified only before the migration job is executed.
   * 
   * @param request - ModifyReplicationJobAttributeRequest
   * @returns ModifyReplicationJobAttributeResponse
   */
  async modifyReplicationJobAttribute(request: ModifyReplicationJobAttributeRequest): Promise<ModifyReplicationJobAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyReplicationJobAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a migration source.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation regardless of the status of the migration source.
   * 
   * @param request - ModifySourceServerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySourceServerAttributeResponse
   */
  async modifySourceServerAttributeWithOptions(request: ModifySourceServerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ModifySourceServerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySourceServerAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifySourceServerAttributeResponse>(await this.callApi(params, req, runtime), new ModifySourceServerAttributeResponse({}));
    } else {
      return $dara.cast<ModifySourceServerAttributeResponse>(await this.execute(params, req, runtime), new ModifySourceServerAttributeResponse({}));
    }

  }

  /**
   * Modifies the name and description of a migration source.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation regardless of the status of the migration source.
   * 
   * @param request - ModifySourceServerAttributeRequest
   * @returns ModifySourceServerAttributeResponse
   */
  async modifySourceServerAttribute(request: ModifySourceServerAttributeRequest): Promise<ModifySourceServerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySourceServerAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name and description of a workgroup.
   * 
   * @param request - ModifyWorkgroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWorkgroupAttributeResponse
   */
  async modifyWorkgroupAttributeWithOptions(request: ModifyWorkgroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyWorkgroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.workgroupId)) {
      query["WorkgroupId"] = request.workgroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWorkgroupAttribute",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyWorkgroupAttributeResponse>(await this.callApi(params, req, runtime), new ModifyWorkgroupAttributeResponse({}));
    } else {
      return $dara.cast<ModifyWorkgroupAttributeResponse>(await this.execute(params, req, runtime), new ModifyWorkgroupAttributeResponse({}));
    }

  }

  /**
   * Modifies the name and description of a workgroup.
   * 
   * @param request - ModifyWorkgroupAttributeRequest
   * @returns ModifyWorkgroupAttributeResponse
   */
  async modifyWorkgroupAttribute(request: ModifyWorkgroupAttributeRequest): Promise<ModifyWorkgroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWorkgroupAttributeWithOptions(request, runtime);
  }

  /**
   * Starts a migration job.
   * 
   * @remarks
   * ## Usage notes
   * This operation can only be used to start the migration jobs that are in the Ready, Stopped, or InError state.
   * 
   * @param request - StartReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReplicationJobResponse
   */
  async startReplicationJobWithOptions(request: StartReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<StartReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartReplicationJobResponse>(await this.callApi(params, req, runtime), new StartReplicationJobResponse({}));
    } else {
      return $dara.cast<StartReplicationJobResponse>(await this.execute(params, req, runtime), new StartReplicationJobResponse({}));
    }

  }

  /**
   * Starts a migration job.
   * 
   * @remarks
   * ## Usage notes
   * This operation can only be used to start the migration jobs that are in the Ready, Stopped, or InError state.
   * 
   * @param request - StartReplicationJobRequest
   * @returns StartReplicationJobResponse
   */
  async startReplicationJob(request: StartReplicationJobRequest): Promise<StartReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startReplicationJobWithOptions(request, runtime);
  }

  /**
   * Pauses a migration job.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to pause only a migration job whose primary status is Running and business status is Syncing.
   * 
   * @param request - StopReplicationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopReplicationJobResponse
   */
  async stopReplicationJobWithOptions(request: StopReplicationJobRequest, runtime: $dara.RuntimeOptions): Promise<StopReplicationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopReplicationJob",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopReplicationJobResponse>(await this.callApi(params, req, runtime), new StopReplicationJobResponse({}));
    } else {
      return $dara.cast<StopReplicationJobResponse>(await this.execute(params, req, runtime), new StopReplicationJobResponse({}));
    }

  }

  /**
   * Pauses a migration job.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to pause only a migration job whose primary status is Running and business status is Syncing.
   * 
   * @param request - StopReplicationJobRequest
   * @returns StopReplicationJobResponse
   */
  async stopReplicationJob(request: StopReplicationJobRequest): Promise<StopReplicationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopReplicationJobWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds them to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * ## Usage notes
   * Up to 20 tags can be added to each SMC resource.
   * Before you add tags to an SMC resource, Alibaba Cloud checks the number of the tags that have been added to the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Creates tags and adds them to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * ## Usage notes
   * Up to 20 tags can be added to each SMC resource.
   * Before you add tags to an SMC resource, Alibaba Cloud checks the number of the tags that have been added to the resource. If the maximum number is reached, an error message is returned.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags that are added to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * You can call this operation to remove tags that are added to one or more SMC resources and delete the tags if the tags are no longer used.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
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
      action: "UntagResources",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags that are added to Server Migration Center (SMC) resources. The SMC resources include migration sources and jobs.
   * 
   * @remarks
   * You can call this operation to remove tags that are added to one or more SMC resources and delete the tags if the tags are no longer used.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
