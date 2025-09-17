// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

