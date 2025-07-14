// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASFileSystemsResponseBodyFileSystemsAppInstanceGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-0bz55ibznu9p7****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   * 
   * @example
   * DemoDeliveryGroup
   */
  appInstanceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-9eeyf15b25nyl****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share.
   * 
   * @example
   * test_dg
   */
  desktopGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystemsOfficeSites extends $dara.Model {
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * DemoOfficeNetwork
   */
  officeSiteName?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      officeSiteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystems extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  allowOperateUserDrive?: boolean;
  /**
   * @remarks
   * The application delivery groups that are associated with the UPM-supported NAS file systems.
   */
  appInstanceGroups?: DescribeNASFileSystemsResponseBodyFileSystemsAppInstanceGroups[];
  /**
   * @remarks
   * The total capacity of the NAS file system. Unit: GiB.
   * 
   * *   The Capacity type has 10 PiB of storage, which is equal to 10,485,760 GiB.
   * *   The Performance type has 1 PiB of storage, which is equal to 1,048,576 GiB.
   * 
   * @example
   * 10485760
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the NAS file system was created.
   * 
   * @example
   * 2021-05-10T11:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the NAS file system.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The cloud computer shares that are associated with the UPM-supported NAS file systems.
   */
  desktopGroups?: DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups[];
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  encryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the NAS file system.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the NAS file system.
   * 
   * @example
   * testNAS
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The status of the NAS file system. The possible values include:
   * 
   * *   Pending: The NAS file system is being created.
   * *   Running: The NAS file system is running.
   * *   Stopped: The NAS file system is stopped.
   * *   Deleting: The NAS file system is being deleted.
   * *   Deleted: The NAS file system is deleted.
   * *   Invalid: The NAS file system is invalid.
   * 
   * @example
   * Running
   */
  fileSystemStatus?: string;
  /**
   * @remarks
   * The type of the NAS file system. The only valid value is `standard`.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The used capacity of the NAS file system. Unit: bytes.
   * 
   * @example
   * 0
   */
  meteredSize?: number;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * @example
   * 04f314****-at***.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The status of the mount target. The possible values include:
   * 
   * *   Pending: The mount target is being created.
   * *   Active: The mount target is enabled.
   * *   Inactive: The mount target is disabled.
   * *   Deleting: The mount target is being deleted.
   * *   Invalid: The mount target is invalid.
   * 
   * @example
   * Active
   */
  mountTargetStatus?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The office networks.
   */
  officeSites?: DescribeNASFileSystemsResponseBodyFileSystemsOfficeSites[];
  /**
   * @remarks
   * Indicates whether the User Profile Management (UPM) feature is supported.
   * 
   * @example
   * false
   */
  profileCompatible?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage type of the NAS file system.
   * 
   * Valid values:
   * 
   * *   Upm: the UPM-supported NAS file system.
   * *   ShareNas: the shared NAS file system.
   * 
   * @example
   * Upm
   */
  scene?: string;
  /**
   * @remarks
   * The storage type of the NAS file system. Valid values:
   * 
   * *   Capacity
   * *   Performance
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  /**
   * @remarks
   * Indicates whether the Server Message Block (SMB) access control list (ACL) feature was enabled.
   * 
   * @example
   * false
   */
  supportAcl?: boolean;
  /**
   * @remarks
   * The ID of the zone where the NAS file system resides.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowOperateUserDrive: 'AllowOperateUserDrive',
      appInstanceGroups: 'AppInstanceGroups',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      description: 'Description',
      desktopGroups: 'DesktopGroups',
      encryptionEnabled: 'EncryptionEnabled',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      fileSystemStatus: 'FileSystemStatus',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      mountTargetDomain: 'MountTargetDomain',
      mountTargetStatus: 'MountTargetStatus',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSites: 'OfficeSites',
      profileCompatible: 'ProfileCompatible',
      regionId: 'RegionId',
      scene: 'Scene',
      storageType: 'StorageType',
      supportAcl: 'SupportAcl',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOperateUserDrive: 'boolean',
      appInstanceGroups: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystemsAppInstanceGroups },
      capacity: 'number',
      createTime: 'string',
      description: 'string',
      desktopGroups: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups },
      encryptionEnabled: 'boolean',
      fileSystemId: 'string',
      fileSystemName: 'string',
      fileSystemStatus: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      mountTargetDomain: 'string',
      mountTargetStatus: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSites: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystemsOfficeSites },
      profileCompatible: 'boolean',
      regionId: 'string',
      scene: 'string',
      storageType: 'string',
      supportAcl: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroups)) {
      $dara.Model.validateArray(this.appInstanceGroups);
    }
    if(Array.isArray(this.desktopGroups)) {
      $dara.Model.validateArray(this.desktopGroups);
    }
    if(Array.isArray(this.officeSites)) {
      $dara.Model.validateArray(this.officeSites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NAS file systems.
   */
  fileSystems?: DescribeNASFileSystemsResponseBodyFileSystems[];
  /**
   * @remarks
   * The token that determines the start point of the next query. This parameter is empty if no additional results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystems },
      nextToken: 'string',
      requestId: 'string',
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

