// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemsResponseBodyFileSystemsMountTargets } from "./DescribeFileSystemsResponseBodyFileSystemsMountTargets";


export class DescribeFileSystemsResponseBodyFileSystems extends $dara.Model {
  /**
   * @remarks
   * The capacity of the file system. Unit: MiB.
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
  description?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the file system.
   * 
   * @example
   * FileSystem1
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The storage usage of the file system. The value of this parameter is the maximum storage usage of the file system over the last hour. Unit: bytes.
   * 
   * @example
   * 102400
   */
  meteredSize?: number;
  /**
   * @remarks
   * The information about mount targets.
   */
  mountTargets?: DescribeFileSystemsResponseBodyFileSystemsMountTargets[];
  /**
   * @remarks
   * The billing method. PostPaid is returned. PostPaid indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The protocol type of the file system. Valid values:
   * 
   * *   NFS: Network File System (NFS)
   * *   SMB: Server Message Block (SMB)
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the file system. Valid values:
   * 
   * *   pending: The file system is being created or modified.
   * *   running: The file system is available. Before you create a mount target for the file system, make sure that the file system is in the running state.
   * *   stopped: The file system is unavailable.
   * *   extending: The file system is being scaled out.
   * *   stopping: The file system is being disabled.
   * *   deleting: The file system is being deleted.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   capacity: Capacity NAS file systems
   * *   performance: Performance NAS file systems
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

