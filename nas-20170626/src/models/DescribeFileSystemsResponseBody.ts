// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap extends $dara.Model {
  bindDN?: string;
  searchBase?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      bindDN: 'BindDN',
      searchBase: 'SearchBase',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDN: 'string',
      searchBase: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode extends $dara.Model {
  defaultPasswd?: string;
  ecsId?: string;
  ecsIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPasswd: 'DefaultPasswd',
      ecsId: 'EcsId',
      ecsIp: 'EcsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPasswd: 'string',
      ecsId: 'string',
      ecsIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes extends $dara.Model {
  clientMasterNode?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode[];
  static names(): { [key: string]: string } {
    return {
      clientMasterNode: 'ClientMasterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMasterNode: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode },
    };
  }

  validate() {
    if(Array.isArray(this.clientMasterNode)) {
      $dara.Model.validateArray(this.clientMasterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags extends $dara.Model {
  tag?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag },
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget extends $dara.Model {
  accessGroupName?: string;
  clientMasterNodes?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes;
  dualStackMountTargetDomain?: string;
  mountTargetDomain?: string;
  networkType?: string;
  status?: string;
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags;
  vpcId?: string;
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      clientMasterNodes: 'ClientMasterNodes',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      clientMasterNodes: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes,
      dualStackMountTargetDomain: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      tags: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags,
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    if(this.clientMasterNodes && typeof (this.clientMasterNodes as any).validate === 'function') {
      (this.clientMasterNodes as any).validate();
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets extends $dara.Model {
  mountTarget?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget[];
  static names(): { [key: string]: string } {
    return {
      mountTarget: 'MountTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTarget: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget },
    };
  }

  validate() {
    if(Array.isArray(this.mountTarget)) {
      $dara.Model.validateArray(this.mountTarget);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions extends $dara.Model {
  enableABE?: boolean;
  enableOplock?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableABE: 'EnableABE',
      enableOplock: 'EnableOplock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableABE: 'boolean',
      enableOplock: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage extends $dara.Model {
  expiredTime?: string;
  packageId?: string;
  packageType?: string;
  size?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      packageId: 'PackageId',
      packageType: 'PackageType',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      packageId: 'string',
      packageType: 'string',
      size: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages extends $dara.Model {
  package?: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage },
    };
  }

  validate() {
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemRedundancyVSwitchIds extends $dara.Model {
  redundancyVSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      redundancyVSwitchId: 'RedundancyVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redundancyVSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.redundancyVSwitchId)) {
      $dara.Model.validateArray(this.redundancyVSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures extends $dara.Model {
  supportedFeature?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedFeature: 'SupportedFeature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedFeature: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedFeature)) {
      $dara.Model.validateArray(this.supportedFeature);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemTags extends $dara.Model {
  tag?: DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag },
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds extends $dara.Model {
  vswId?: string[];
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswId)) {
      $dara.Model.validateArray(this.vswId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystem extends $dara.Model {
  accessPointCount?: string;
  autoSnapshotPolicyId?: string;
  bandwidth?: number;
  capacity?: number;
  chargeType?: string;
  createTime?: string;
  description?: string;
  encryptType?: number;
  expiredTime?: string;
  fileSystemId?: string;
  fileSystemType?: string;
  KMSKeyId?: string;
  ldap?: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap;
  meteredArchiveSize?: number;
  meteredIASize?: number;
  meteredSize?: number;
  mountTargets?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets;
  options?: DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions;
  packages?: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages;
  protocolType?: string;
  quorumVswId?: string;
  /**
   * @example
   * LRS
   */
  redundancyType?: string;
  redundancyVSwitchIds?: DescribeFileSystemsResponseBodyFileSystemsFileSystemRedundancyVSwitchIds;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  storageType?: string;
  supportedFeatures?: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures;
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags;
  version?: string;
  vpcId?: string;
  vscTarget?: string;
  vswIds?: DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointCount: 'AccessPointCount',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      encryptType: 'EncryptType',
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      KMSKeyId: 'KMSKeyId',
      ldap: 'Ldap',
      meteredArchiveSize: 'MeteredArchiveSize',
      meteredIASize: 'MeteredIASize',
      meteredSize: 'MeteredSize',
      mountTargets: 'MountTargets',
      options: 'Options',
      packages: 'Packages',
      protocolType: 'ProtocolType',
      quorumVswId: 'QuorumVswId',
      redundancyType: 'RedundancyType',
      redundancyVSwitchIds: 'RedundancyVSwitchIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageType: 'StorageType',
      supportedFeatures: 'SupportedFeatures',
      tags: 'Tags',
      version: 'Version',
      vpcId: 'VpcId',
      vscTarget: 'VscTarget',
      vswIds: 'VswIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointCount: 'string',
      autoSnapshotPolicyId: 'string',
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      encryptType: 'number',
      expiredTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      KMSKeyId: 'string',
      ldap: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap,
      meteredArchiveSize: 'number',
      meteredIASize: 'number',
      meteredSize: 'number',
      mountTargets: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets,
      options: DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions,
      packages: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages,
      protocolType: 'string',
      quorumVswId: 'string',
      redundancyType: 'string',
      redundancyVSwitchIds: DescribeFileSystemsResponseBodyFileSystemsFileSystemRedundancyVSwitchIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageType: 'string',
      supportedFeatures: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures,
      tags: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags,
      version: 'string',
      vpcId: 'string',
      vscTarget: 'string',
      vswIds: DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ldap && typeof (this.ldap as any).validate === 'function') {
      (this.ldap as any).validate();
    }
    if(this.mountTargets && typeof (this.mountTargets as any).validate === 'function') {
      (this.mountTargets as any).validate();
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    if(this.packages && typeof (this.packages as any).validate === 'function') {
      (this.packages as any).validate();
    }
    if(this.redundancyVSwitchIds && typeof (this.redundancyVSwitchIds as any).validate === 'function') {
      (this.redundancyVSwitchIds as any).validate();
    }
    if(this.supportedFeatures && typeof (this.supportedFeatures as any).validate === 'function') {
      (this.supportedFeatures as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vswIds && typeof (this.vswIds as any).validate === 'function') {
      (this.vswIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystems extends $dara.Model {
  fileSystem?: DescribeFileSystemsResponseBodyFileSystemsFileSystem[];
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystem },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystem)) {
      $dara.Model.validateArray(this.fileSystem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBody extends $dara.Model {
  fileSystems?: DescribeFileSystemsResponseBodyFileSystems;
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 035B3A3A-E514-4B41-B906-5D906CFB****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file systems.
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
      fileSystems: DescribeFileSystemsResponseBodyFileSystems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystems && typeof (this.fileSystems as any).validate === 'function') {
      (this.fileSystems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

