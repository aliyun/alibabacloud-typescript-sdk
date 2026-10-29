// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsMountTargets extends $dara.Model {
  /**
   * @remarks
   * The mount target path.
   * 
   * @example
   * *.*.*.*:/${FileSystemName}/{MountTargetName}
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The mount target name.
   * 
   * @example
   * target1
   */
  mountTargetName?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-****
   */
  netWorkId?: string;
  /**
   * @remarks
   * The mount target status. Valid values:
   * 
   * - active: Available.
   * - inactive: Unavailable.
   * - pending: Processing a task.
   * - deleting: Being deleted.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      mountTargetName: 'MountTargetName',
      netWorkId: 'NetWorkId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      mountTargetName: 'string',
      netWorkId: 'string',
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

export class DescribeFileSystemsResponseBodyFileSystems extends $dara.Model {
  /**
   * @remarks
   * The capacity. Unit: MiB.
   * 
   * @example
   * 100000
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2022-08-31 12:00:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The file system name.
   * 
   * @example
   * FileSystem1
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The file system usage.
   * Non-real-time usage. It indicates the maximum usage in the previous hour. Unit: bytes.
   * 
   * @example
   * 102400
   */
  meteredSize?: number;
  /**
   * @remarks
   * The collection of mount target information.
   */
  mountTargets?: DescribeFileSystemsResponseBodyFileSystemsMountTargets[];
  /**
   * @remarks
   * The billing method. Valid values: PostPaid (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The file system protocol type. Valid values:
   * 
   * - NFS: NFS protocol.
   * - SMB: SMB protocol.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The file system status. Valid values:
   * 
   * - pending: The file system is processing a node.
   * - running: The file system is active. You can perform What to do next, such as creating a mount target, only when the status is running.
   * - stopped: The file system is unavailable.
   * - extending: The file system is being expanded.
   * - stopping: The file system is being stopped.
   * - deleting: The file system is being deleted.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - capacity: Storage-optimized.
   * - performance: Extreme.
   * 
   * @example
   * capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      meteredSize: 'MeteredSize',
      mountTargets: 'MountTargets',
      payType: 'PayType',
      protocolType: 'ProtocolType',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      fileSystemId: 'string',
      fileSystemName: 'string',
      meteredSize: 'number',
      mountTargets: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsMountTargets },
      payType: 'string',
      protocolType: 'string',
      status: 'string',
      storageType: 'string',
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

export class DescribeFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of file system information.
   */
  fileSystems?: DescribeFileSystemsResponseBodyFileSystems[];
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
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 762DD527-358B-1E48-8005-CCE3ED4EB9E0
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

