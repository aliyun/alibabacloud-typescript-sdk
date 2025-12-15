// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList extends $dara.Model {
  /**
   * @remarks
   * The address of the mount target.
   * 
   * @example
   * c0967****.cn-hangzhou.cpfs.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid values: Valid values:
   * 
   * *   vpc
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The state of the mount target. Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being mounted.
   * *   Deleting: The mount target is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze0c41hwu7lc29ris***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-8vbvb34rtyh6xb3zrehs1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBodyFileSystemList extends $dara.Model {
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2024-7-29 15:43:53
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 2fa0248***
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system. Valid values:
   * 
   * *   standard: general-purpose network-attached storage (NAS) file system
   * *   extreme: extreme NAS file system
   * 
   * @example
   * cpfs
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The mount targets of the file system.
   */
  mountTargetList?: ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList[];
  /**
   * @remarks
   * The protocol type of the file system. Valid values:
   * 
   * *   nfs
   * *   smb
   * *   cpfs
   * 
   * @example
   * cpfs
   */
  protocolType?: string;
  /**
   * @remarks
   * The state of the file system. Valid values:
   * 
   * *   Pending: The file system is processing a task.
   * *   Running: The file system is available. You can perform subsequent operations, such as creating a mount target, only when the file system is in the Running state.
   * *   Stopped: The file system is unavailable.
   * *   Extending: The file system is being scaled out.
   * *   Stopping: The file system is being stopped.
   * *   Deleting: The file system is being deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage type of the file system.
   * 
   * *   Valid values if FileSystemType is set to standard: Capacity and Performance.
   * *   Valid values if FileSystemType is set to extreme: standard and advance.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp132kgui8n0targb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      mountTargetList: 'MountTargetList',
      protocolType: 'ProtocolType',
      status: 'Status',
      storageType: 'StorageType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      mountTargetList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList },
      protocolType: 'string',
      status: 'string',
      storageType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mountTargetList)) {
      $dara.Model.validateArray(this.mountTargetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file systems.
   */
  fileSystemList?: ListAvailableFileSystemsResponseBodyFileSystemList[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF4E8AB1-02A3-5ECF-87CC-3AB7BE98**
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 65
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemList: 'FileSystemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemList)) {
      $dara.Model.validateArray(this.fileSystemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

