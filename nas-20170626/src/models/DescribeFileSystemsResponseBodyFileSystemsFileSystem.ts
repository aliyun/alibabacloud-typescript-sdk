// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap";
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets";
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions";
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages";
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures";
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemTags } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemTags";
import { DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds } from "./DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds";


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
   * - Subscription: The subscription billing method is used.
   * - PayAsYouGo: The pay-as-you-go billing method is used.
   * - Package: A storage plan is attached to the file system.
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
   * The encryption type.
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
   * The type of the file system.
   * 
   * Valid values:
   * - standard: General-purpose NAS file system
   * - extreme: Extreme NAS file system
   * - cpfs: CPFS file system
   * > CPFS file systems are available only on the China site (aliyun.com).
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
   * The information about mount targets.
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
   * *   NFS: Network File System (NFS)
   * *   SMB: Server Message Block (SMB)
   * *   cpfs: the protocol type supported by the CPFS file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2ze37k6jh8ums2fw2****
   */
  quorumVswId?: string;
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
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?) to view resource group IDs.
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
   * - Valid values for General-purpose NAS file systems: Capacity,Premium and Performance.
   * - Valid values for Extreme NAS file systems: standard and advance.
   * - Valid values for CPFS file systems: advance_100 (100 MB/s/TiB baseline) and advance_200 (200 MB/s/TiB baseline).
   *  > CPFS file systems are available only on the China site (aliyun.com).
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
  vscTarget?: string;
  /**
   * @remarks
   * A collection of vSwitch IDs.
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

