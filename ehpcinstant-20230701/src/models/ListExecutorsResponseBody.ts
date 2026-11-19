// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorsResponseBodyExecutorsResourceDisks extends $dara.Model {
  /**
   * @remarks
   * The cloud disk size.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The cloud disk type. Valid values:
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

export class ListExecutorsResponseBodyExecutorsResource extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 1
   */
  cores?: number;
  /**
   * @remarks
   * The array of cloud disks.
   */
  disks?: ListExecutorsResponseBodyExecutorsResourceDisks[];
  /**
   * @remarks
   * The instance type of the runtime environment.
   * 
   * @example
   * ecs.c7a.8xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The total memory resources. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      instanceType: 'InstanceType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutorsResourceDisks },
      instanceType: 'string',
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBodyExecutorsTags extends $dara.Model {
  /**
   * @remarks
   * The executor tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The executor tag value.
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

export class ListExecutorsResponseBodyExecutors extends $dara.Model {
  /**
   * @remarks
   * The resource type. Valid values:
   * - Standard: Standard.
   * - Dedicated: Dedicated. A whitelist is required.
   * - Economic: Economic. A whitelist is required.
   * 
   * @example
   * Standard
   */
  allocationSpec?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Alphafold3
   */
  appName?: string;
  /**
   * @remarks
   * The executor index.
   * 
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @remarks
   * The retention period of compute resources.
   * 
   * @example
   * 24
   */
  blockDuration?: number;
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-02-20 10:04:10
   */
  createTime?: string;
  /**
   * @remarks
   * The end time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-02-20 10:04:18
   */
  endTime?: string;
  /**
   * @remarks
   * The executor ID. The format is JobId-TaskName-ArrayIndex.
   * 
   * @example
   * job-xxxx-Task0-1
   */
  executorId?: string;
  /**
   * @remarks
   * The expiration time. The time is returned in the YYYY-MM-DD HH:mm:ss format based on the UTC+8 time zone.
   * 
   * @example
   * 202******:00
   */
  expirationTime?: string;
  /**
   * @remarks
   * The list of public IP addresses of the node.
   */
  externalIpAddress?: string[];
  /**
   * @remarks
   * The list of hostnames.
   */
  hostName?: string[];
  /**
   * @remarks
   * The executor image.
   * 
   * @example
   * m-f8z0dfa96luxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The list of internal IP addresses.
   */
  ipAddress?: string[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-hy1nggvyukuvkr******
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
  /**
   * @remarks
   * Indicates whether the execution instance is preemptible.
   */
  preemptible?: boolean;
  /**
   * @remarks
   * The resource information.
   */
  resource?: ListExecutorsResponseBodyExecutorsResource;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ECI
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-02-20 10:04:13
   */
  startTime?: string;
  /**
   * @remarks
   * The executor status. Valid values:
   * - Pending: Queued.
   * - Initing: Initializing.
   * - Succeeded: Succeeded.
   * - Failed: Failed.
   * - Running: Running.
   * - Exception: Scheduling exception.
   * - Retrying: Retrying.
   * - Expired: Timed out.
   * - Suspended: Job suspended.
   * - Restarting: Job restarting.
   * - Deleted: Deleted.
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
   * ExecutorReady
   */
  statusReason?: string;
  /**
   * @remarks
   * The list of executor tags.
   */
  tags?: ListExecutorsResponseBodyExecutorsTags[];
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Task0
   */
  taskName?: string;
  /**
   * @remarks
   * Indicates whether the job is a long-running job.
   * 
   * @example
   * true
   */
  taskSustainable?: boolean;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationSpec: 'AllocationSpec',
      appName: 'AppName',
      arrayIndex: 'ArrayIndex',
      blockDuration: 'BlockDuration',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      executorId: 'ExecutorId',
      expirationTime: 'ExpirationTime',
      externalIpAddress: 'ExternalIpAddress',
      hostName: 'HostName',
      image: 'Image',
      ipAddress: 'IpAddress',
      jobId: 'JobId',
      jobName: 'JobName',
      preemptible: 'Preemptible',
      resource: 'Resource',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      taskName: 'TaskName',
      taskSustainable: 'TaskSustainable',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationSpec: 'string',
      appName: 'string',
      arrayIndex: 'number',
      blockDuration: 'number',
      createTime: 'string',
      endTime: 'string',
      executorId: 'string',
      expirationTime: 'string',
      externalIpAddress: { 'type': 'array', 'itemType': 'string' },
      hostName: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      ipAddress: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      jobName: 'string',
      preemptible: 'boolean',
      resource: ListExecutorsResponseBodyExecutorsResource,
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutorsTags },
      taskName: 'string',
      taskSustainable: 'boolean',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.externalIpAddress)) {
      $dara.Model.validateArray(this.externalIpAddress);
    }
    if(Array.isArray(this.hostName)) {
      $dara.Model.validateArray(this.hostName);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
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

export class ListExecutorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of executors.
   */
  executors?: ListExecutorsResponseBodyExecutors[];
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
   * The number of entries per page in the paging Settings for a paged query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 40
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executors: 'Executors',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executors: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutors },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executors)) {
      $dara.Model.validateArray(this.executors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

