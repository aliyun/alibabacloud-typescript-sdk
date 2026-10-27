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
   * The ID of the shared cloud desktop.
   * 
   * @example
   * dg-9eeyf15b25nyl****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the shared cloud desktop.
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
   * Indicates whether operations on user directories are supported, such as adding users and deleting data.
   * 
   * @example
   * false
   */
  allowOperateUserDrive?: boolean;
  /**
   * @remarks
   * The list of cloud application delivery groups bound to the NAS file system that supports UPM.
   */
  appInstanceGroups?: DescribeNASFileSystemsResponseBodyFileSystemsAppInstanceGroups[];
  /**
   * @remarks
   * The bandwidth.
   * 
   * @example
   * 720
   */
  bandwidth?: number;
  /**
   * @remarks
   * The total capacity of the NAS file system. Unit: GiB.
   * 
   * - If the storage type is Capacity, the capacity is fixed at 10 PiB, which is 10485760 GiB.
   * - If the storage type is Performance, the capacity is fixed at 1 PiB, which is 1048576 GiB.
   * 
   * @example
   * 10485760
   */
  capacity?: number;
  /**
   * @remarks
   * The time when the NAS file system was created. The time follows the ISO 8601 standard in the UTC time zone.
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
   * The list of shared cloud desktops bound to the NAS file system that supports UPM.
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
   * The status of the NAS file system.
   * 
   * @example
   * Running
   */
  fileSystemStatus?: string;
  /**
   * @remarks
   * The type of the NAS file system. Currently, only the general-purpose type is supported, which is `standard`.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The used capacity of the NAS file system. Unit: Byte.
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
   * The status of the mount target.
   * 
   * @example
   * Active
   */
  mountTargetStatus?: string;
  /**
   * @remarks
   * **[Deprecated]** The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * **[Deprecated]** The name of the office network.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The list of office networks.
   */
  officeSites?: DescribeNASFileSystemsResponseBodyFileSystemsOfficeSites[];
  /**
   * @remarks
   * The product type of the NAS file system.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
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
   * The protocol type of the file system. Valid values:
   * 
   * - NFS: NFS protocol
   * - SMB: SMB protocol
   * 
   * @example
   * SMB
   */
  protocolType?: string;
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
   * The storage mode of the NAS file system.
   * 
   * @example
   * Upm
   */
  scene?: string;
  /**
   * @remarks
   * The capacity quota of the NAS file system.
   * 
   * @example
   * 0
   */
  sizeQuota?: number;
  /**
   * @remarks
   * The storage type of the NAS file system.
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  /**
   * @remarks
   * Indicates whether the SMB ACL feature is supported.
   * 
   * @example
   * false
   */
  supportAcl?: boolean;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowOperateUserDrive: 'AllowOperateUserDrive',
      appInstanceGroups: 'AppInstanceGroups',
      bandwidth: 'Bandwidth',
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
      productType: 'ProductType',
      profileCompatible: 'ProfileCompatible',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      scene: 'Scene',
      sizeQuota: 'SizeQuota',
      storageType: 'StorageType',
      supportAcl: 'SupportAcl',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOperateUserDrive: 'boolean',
      appInstanceGroups: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystemsAppInstanceGroups },
      bandwidth: 'number',
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
      productType: 'string',
      profileCompatible: 'boolean',
      protocolType: 'string',
      regionId: 'string',
      scene: 'string',
      sizeQuota: 'number',
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
   * The NAS file system information.
   */
  fileSystems?: DescribeNASFileSystemsResponseBodyFileSystems[];
  /**
   * @remarks
   * The pagination token for the next query. An empty NextToken indicates that no more results are available.
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

