// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyDataInstanceSnapshotNodeGroups extends $dara.Model {
  /**
   * @example
   * FE
   */
  componentType?: string;
  /**
   * @example
   * 4
   */
  cu?: number;
  /**
   * @example
   * 2
   */
  diskNumber?: string;
  /**
   * @example
   * null
   */
  localStorageInstanceType?: string;
  /**
   * @example
   * 3
   */
  residentNodeNumber?: string;
  /**
   * @example
   * standard
   */
  specType?: string;
  /**
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
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
   * @example
   * bk-time
   */
  key?: string;
  /**
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
   * @example
   * c-37708ec80b5****
   */
  instanceName?: string;
  /**
   * @example
   * 3.3.13-1.0-1.7.2
   */
  minorVersion?: string;
  nodeGroups?: DescribeBackupsResponseBodyDataInstanceSnapshotNodeGroups[];
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-aekzd7frphchx3a
   */
  resourceGroupId?: string;
  /**
   * @example
   * shared_data
   */
  runMode?: string;
  /**
   * @example
   * standard
   */
  specType?: string;
  tags?: DescribeBackupsResponseBodyDataInstanceSnapshotTags[];
  /**
   * @example
   * 3.3
   */
  version?: string;
  /**
   * @remarks
   * VPC ID。
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
   * @example
   * test1
   */
  dataBase?: string;
  /**
   * @example
   * []
   */
  detail?: string;
  /**
   * @example
   * 1747718190
   */
  finishedTime?: number;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 2025-02-10_backup
   */
  snapshotName?: string;
  /**
   * @example
   * 1747708190
   */
  startTime?: number;
  /**
   * @example
   * success
   */
  status?: string;
  /**
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
   * @example
   * 1742179028000
   */
  backupFinishedTime?: number;
  /**
   * @example
   * 1742179018000
   */
  backupStartTime?: number;
  /**
   * @example
   * bt-12sui21312dd
   */
  backupTaskId?: string;
  /**
   * @example
   * FullBackup
   */
  backupType?: string;
  description?: string;
  /**
   * @example
   * 1742189008000
   */
  expireTime?: number;
  /**
   * @example
   * c-d4be777ff5e8cXXX
   */
  instanceId?: string;
  instanceSnapshot?: DescribeBackupsResponseBodyDataInstanceSnapshot;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 100
   */
  size?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
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
  data?: DescribeBackupsResponseBodyData[];
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
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

