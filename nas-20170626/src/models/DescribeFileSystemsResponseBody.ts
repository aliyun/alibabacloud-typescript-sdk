// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap extends $dara.Model {
  /**
   * @remarks
   * An LDAP entry.
   * 
   * @example
   * cn=alibaba,dc=com
   */
  bindDN?: string;
  /**
   * @remarks
   * An LDAP search base.
   * 
   * @example
   * dc=example
   */
  searchBase?: string;
  /**
   * @remarks
   * An LDAP URI.
   * 
   * @example
   * ldap://ldap.example.example
   */
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
  /**
   * @remarks
   * The default logon password of the ECS instance on the client management node.
   * 
   * @example
   * 123456
   */
  defaultPasswd?: string;
  /**
   * @remarks
   * The ID of the ECS instance on the client management node.
   * 
   * @example
   * i-hp3i3odi5ory1buo****
   */
  ecsId?: string;
  /**
   * @remarks
   * The IP address of the ECS instance on the client management node.
   * 
   * @example
   * 192.168.1.0
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-value
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
  /**
   * @remarks
   * The name of the permission group that is attached to the mount target.
   * 
   * @example
   * test-001
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The information about client management nodes.
   * 
   * This parameter is available only for CPFS file systems.
   */
  clientMasterNodes?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes;
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * > Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * @example
   * 109c042666-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid value: vpc.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * Valid values:
   * 
   * *   Active
   * *   Inactive
   * *   Pending
   * *   Deleting
   * *   Hibernating
   * *   Hibernated
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags that are attached to the mount target.
   */
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1sevsgtqvk5gxbl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1omfzsszekkvaxn****
   */
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
  /**
   * @remarks
   * Specifies whether to enable the oplock feature. Valid values:
   * 
   * *   true: enables the feature.
   * *   false: disables the feature.
   * 
   * >  Only Server Message Block (SMB) file systems support this feature.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The end time of the validity period for the storage plan.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-0be9c4b624-37****
   */
  packageId?: string;
  /**
   * @remarks
   * The type of the storage plan.
   * 
   * Valid values:
   * 
   * *   ssd: The storage plan for Performance NAS file systems.
   * *   hybrid: The storage plan for Capacity NAS file systems.
   * 
   * @example
   * hybrid
   */
  packageType?: string;
  /**
   * @remarks
   * The capacity of the storage plan. Unit: bytes.
   * 
   * @example
   * 107374182400
   */
  size?: number;
  /**
   * @remarks
   * The start time of the validity period for the storage plan.
   * 
   * @example
   * 2019-12-05T01:40:56Z
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-value
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
  /**
   * @remarks
   * Number of access points.
   * 
   * @example
   * 1
   */
  accessPointCount?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The bandwidth of the file system.
   * 
   * Unit: MB/s. This parameter is unavailable for General-purpose NAS file systems.
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * The capacity of the file system.
   * 
   * Unit: GiB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   Subscription
   * *   PayAsYouGo
   * *   Package: storage plan
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the data in the file system is encrypted.
   * 
   * Valid values:
   * 
   * *   0: The data in the file system is not encrypted.
   * *   1: A NAS-managed key is used to encrypt the data in the file system.
   * *   2: A KMS-managed key is used to encrypt the data in the file system.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The time when the file system expires.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 109c04****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The file system type.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose NAS
   * *   extreme: Extreme NAS
   * *   cpfs: CPFS (locally redundant storage)
   * *   cpfsse: CPFS SE (zone-redundant storage)
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The ID of the key that is managed by Key Management Service (KMS).
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The Lightweight Directory Access Protocol (LDAP) configurations.
   * 
   * This parameter is available only for CPFS file systems.
   */
  ldap?: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap;
  /**
   * @remarks
   * Archive storage usage.
   * 
   * Unit: Byte.
   * 
   * @example
   * 1611661312
   */
  meteredArchiveSize?: number;
  /**
   * @remarks
   * The storage usage of the Infrequent Access (IA) storage medium.
   * 
   * Unit: bytes.
   * 
   * @example
   * 362832
   */
  meteredIASize?: number;
  /**
   * @remarks
   * The storage usage of the file system.
   * 
   * The value of this parameter is the maximum storage usage of the file system over the last hour. Unit: bytes.
   * 
   * @example
   * 1611661312
   */
  meteredSize?: number;
  /**
   * @remarks
   * The queried mount targets.
   */
  mountTargets?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets;
  /**
   * @remarks
   * The options.
   */
  options?: DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions;
  /**
   * @remarks
   * The information about storage plans.
   */
  packages?: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages;
  /**
   * @remarks
   * The protocol type of the file system.
   * 
   * Valid values:
   * 
   * *   NFS: Network File System.
   * *   SMB: Server Message Block.
   * *   cpfs: The protocol type supported by the CPFS file system.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze37k6jh8ums2fw2****
   */
  quorumVswId?: string;
  /**
   * @remarks
   * Storage redundancy type. Returned only for CPFS SE.
   * 
   * @example
   * LRS
   */
  redundancyType?: string;
  /**
   * @remarks
   * A list of IDs for the zone-redundant vSwitches.
   */
  redundancyVSwitchIds?: DescribeFileSystemsResponseBodyFileSystemsFileSystemRedundancyVSwitchIds;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the file system. Valid values:
   * - Pending: The file system is being created or modified.
   * - Running: The file system is available. Before you create a mount target for the file system, make sure that the file system is in the Running state.
   * - Stopped: The file system is unavailable.
   * - Extending: The file system is being scaled up.
   * - Stopping: The file system is being stopped.
   * - Deleting: The file system is being deleted.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * Valid values:
   * 
   * *   General-purpose NAS: Capacity, Performance, Premium
   * *   Extreme NAS: standard, advance
   * *   CPFS: advance_100 (100 MB/s/TiB Baseline), advance_200 (200 MB/s/TiB Baseline), economic
   * *   CPFS SE: advance_100 (100 MB/s/TiB Baseline)
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The features that are supported by the file system.
   */
  supportedFeatures?: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures;
  /**
   * @remarks
   * The tags that are attached to the file system.
   */
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags;
  /**
   * @remarks
   * The version number of the file system.
   * 
   * This parameter is available only for Extreme NAS file systems and CPFS file systems.
   * 
   * @example
   * 2.3.4
   */
  version?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1cbv1ljve4j5hlw****
   */
  vpcId?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * cpfs-370y1tv921vpuj4****-000001.cn-wulanchabu.cpfs.aliyuncs.com
   */
  vscTarget?: string;
  /**
   * @remarks
   * The information about vSwitch.
   */
  vswIds?: DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds;
  /**
   * @remarks
   * The ID of the zone where the file system resides.
   * 
   * @example
   * cn-hangzhou-b
   */
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
  /**
   * @remarks
   * The file system list.
   */
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

