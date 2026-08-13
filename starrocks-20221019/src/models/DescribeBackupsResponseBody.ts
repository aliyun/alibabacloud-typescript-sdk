// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyDataInstanceSnapshotNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The compute group type. Includes the following values:
   * 
   * - FE
   * 
   * - BE
   * 
   * - CN
   * 
   * - OBSERVER
   * 
   * - AGENT
   * 
   * @example
   * FE
   */
  componentType?: string;
  /**
   * @remarks
   * The number of CUs. A CU (Compute Unit) is the basic unit of measurement for the service. 1 CU equals 1 CPU core + 4 GiB memory. If SpecType is memory-enhanced instance family, 1 CU equals 1 CPU core + 8 GiB memory.
   * 
   * @example
   * 4
   */
  cu?: number;
  /**
   * @remarks
   * The number of disks.
   * 
   * @example
   * 2
   */
  diskNumber?: string;
  /**
   * @remarks
   * The node group\\"s local SSD instance type. This value is only meaningful for ECS instances where SpecType is local SSD or large-capacity storage.
   * 
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  residentNodeNumber?: string;
  /**
   * @remarks
   * The compute group specification type. Includes the following types:
   * 
   * - standard: Standard Edition.
   * 
   * - localSSD: Local SSD.
   * 
   * - bigData: Large-capacity storage.
   * 
   * - ramEnhanced: Memory-enhanced instance family.
   * 
   * - networkEnhanced: Network-enhanced.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. Includes the following values:
   * 
   * - pl0: Maximum random read/write IOPS of 10,000 per disk.
   * 
   * - pl1: Maximum random read/write IOPS of 50,000 per disk.
   * 
   * - pl2: Maximum random read/write IOPS of 100,000 per disk.
   * 
   * - pl3: Maximum random read/write IOPS of 1,000,000 per disk.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage size in GiB.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      cu: 'Cu',
      diskNumber: 'DiskNumber',
      localStorageInstanceType: 'LocalStorageInstanceType',
      residentNodeNumber: 'ResidentNodeNumber',
      specType: 'SpecType',
      storagePerformanceLevel: 'StoragePerformanceLevel',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      cu: 'number',
      diskNumber: 'string',
      localStorageInstanceType: 'string',
      residentNodeNumber: 'string',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyDataInstanceSnapshotTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * bk-time
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1747708000
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

export class DescribeBackupsResponseBodyDataInstanceSnapshot extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * c-37708ec80b5****
   */
  instanceName?: string;
  /**
   * @remarks
   * The minor version number.
   * 
   * @example
   * 3.3.13-1.0-1.7.2
   */
  minorVersion?: string;
  /**
   * @remarks
   * The compute group information.
   */
  nodeGroups?: DescribeBackupsResponseBodyDataInstanceSnapshotNodeGroups[];
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzd7frphchx3a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cluster\\"s running mode:
   * 
   * - Shared-nothing.
   * 
   * - Shared-data.
   * 
   * @example
   * shared_data
   */
  runMode?: string;
  /**
   * @remarks
   * The compute group specification type. Includes the following types:
   * 
   * - standard: Standard Edition.
   * 
   * - localSSD: Local SSD.
   * 
   * - bigData: Large-capacity storage.
   * 
   * - ramEnhanced: Memory-enhanced instance family.
   * 
   * - networkEnhanced: Network-enhanced.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeBackupsResponseBodyDataInstanceSnapshotTags[];
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 3.3
   */
  version?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2ze0cez8106f2n85c2d7i
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      minorVersion: 'MinorVersion',
      nodeGroups: 'NodeGroups',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runMode: 'RunMode',
      specType: 'SpecType',
      tags: 'Tags',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      minorVersion: 'string',
      nodeGroups: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyDataInstanceSnapshotNodeGroups },
      regionId: 'string',
      resourceGroupId: 'string',
      runMode: 'string',
      specType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyDataInstanceSnapshotTags },
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
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

export class DescribeBackupsResponseBodyDataSubTasks extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test1
   */
  dataBase?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * []
   */
  detail?: string;
  /**
   * @remarks
   * The task end time.
   * 
   * @example
   * 1747718190
   */
  finishedTime?: number;
  /**
   * @remarks
   * The data size in GiB.
   * 
   * @example
   * 1
   */
  size?: number;
  /**
   * @remarks
   * The snapshot name.
   * 
   * @example
   * 2025-02-10_backup
   */
  snapshotName?: string;
  /**
   * @remarks
   * The task start date.
   * 
   * @example
   * 1747708190
   */
  startTime?: number;
  /**
   * @remarks
   * The backup job status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The data table name.
   * 
   * @example
   * cdc_ods_t2030_lcpf_api_topic_msg
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataBase: 'DataBase',
      detail: 'Detail',
      finishedTime: 'FinishedTime',
      size: 'Size',
      snapshotName: 'SnapshotName',
      startTime: 'StartTime',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBase: 'string',
      detail: 'string',
      finishedTime: 'number',
      size: 'number',
      snapshotName: 'string',
      startTime: 'number',
      status: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of this backup.
   * 
   * @example
   * 1742179028000
   */
  backupFinishedTime?: number;
  /**
   * @remarks
   * The start time of this backup.
   * 
   * @example
   * 1742179018000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The backup task ID.
   * 
   * @example
   * bt-12sui21312dd
   */
  backupTaskId?: string;
  /**
   * @remarks
   * The backup type:
   * 
   * - **0**: Fast backup.
   * 
   * - **1**: Consistent backup.
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * 任务描述
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the backup data.
   * 
   * @example
   * 1742189008000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-d4be777ff5e8cXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The backup instance information.
   */
  instanceSnapshot?: DescribeBackupsResponseBodyDataInstanceSnapshot;
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
   * The cloud disk size in GiB.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The backup job status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The list of backup subtasks.
   */
  subTasks?: DescribeBackupsResponseBodyDataSubTasks[];
  static names(): { [key: string]: string } {
    return {
      backupFinishedTime: 'BackupFinishedTime',
      backupStartTime: 'BackupStartTime',
      backupTaskId: 'BackupTaskId',
      backupType: 'BackupType',
      description: 'Description',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceSnapshot: 'InstanceSnapshot',
      regionId: 'RegionId',
      size: 'Size',
      status: 'Status',
      subTasks: 'SubTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFinishedTime: 'number',
      backupStartTime: 'number',
      backupTaskId: 'string',
      backupType: 'string',
      description: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceSnapshot: DescribeBackupsResponseBodyDataInstanceSnapshot,
      regionId: 'string',
      size: 'number',
      status: 'string',
      subTasks: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyDataSubTasks },
    };
  }

  validate() {
    if(this.instanceSnapshot && typeof (this.instanceSnapshot as any).validate === 'function') {
      (this.instanceSnapshot as any).validate();
    }
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeBackupsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP request status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

