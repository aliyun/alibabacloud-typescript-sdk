// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Limits:
   * - The tag key cannot be empty or an empty string.
   * - The tag key can be up to 128 characters in length.
   * - The tag key cannot start with `aliyun` or `acs:`.
   * - The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * nastest
   * 
   * **if can be null:**
   * false
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Limits:
   * - The tag value cannot be empty or an empty string.
   * - The tag value can be up to 128 characters in length.
   * - The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
   * 
   * **if can be null:**
   * false
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

export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum throughput of the file system. Unit: MB/s. For available values, refer to the specifications on the buy page.
   * <props="china">
   * [Buy page for pay-as-you-go Parallel file systems](https://common-buy.aliyun.com/?commodityCode=nas_cpfs_post#/buy)
   * 
   * <props="intl">
   * [Buy page for pay-as-you-go Parallel file systems](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui&commodityCode=nas_cpfspost_public_intl#/buy)
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB. This parameter is required and valid only when FileSystemType is set to extreme, cpfs, or cpfsse. For available values, refer to the specifications on the buy page:
   * <props="china">
   * - [Buy page for pay-as-you-go Extreme NAS file systems](https://common-buy.aliyun.com/?commodityCode=nas_extreme_post#/buy)
   * - [Buy page for pay-as-you-go Parallel file systems](https://common-buy.aliyun.com/?commodityCode=nas_cpfs_post#/buy)
   * 
   * <props="intl">
   * - [Buy page for pay-as-you-go Extreme NAS file systems](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)
   * - [Buy page for pay-as-you-go Parallel file systems](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui&commodityCode=nas_cpfspost_public_intl#/buy)
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PayAsYouGo: pay-as-you-go. This is the default value.
   * - Subscription: subscription.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the file system. Limits:
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * The description of this file system
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request. A dry run helps you check parameter validity and inventory, but does not actually create the instance or incur fees. Valid values:
   * - true: performs a dry run without creating the instance. The system checks whether required parameters are specified, the request format, business limits, and NAS inventory. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the HTTP status code 200 is returned and FileSystemId is empty.
   * - false: performs a normal request and creates the instance directly after the request passes the check. This is the default value.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration. Unit: months. This parameter is required and valid only when ChargeType is set to Subscription. When a subscription instance expires and is not renewed, the instance is automatically released.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to encrypt the file system. Key Management Service (KMS) is used to manage keys and encrypt data at rest in the file system. You do not need to decrypt the data when you read or write the encrypted data. Valid values:
   * - 0: not encrypted. This is the default value.
   * - 1: NAS-managed key. NAS-managed keys are supported when FileSystemType is set to standard or extreme.
   * - 2: custom key. Custom keys are supported when FileSystemType is set to standard or extreme.
   * > - Extreme NAS file systems: The custom key (KMS) feature is supported in all regions except China East 1 Finance.
   * > - General-purpose NAS file systems: The custom key (KMS) feature is supported in all regions.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The file system type. Valid values:
   * - standard: General-purpose NAS file system. This is the default value.
   * - extreme: Extreme NAS file system.
   * - cpfs: Cloud Parallel File Storage (locally redundant version).
   * - cpfsse: Cloud Parallel File Storage SE (zone-redundant version).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The cluster ID in the high-performance network zone. This parameter is required when FileSystemType is set to bmcpfs and cannot be modified after creation. You can call the DescribeSpecifications operation to query available values. Example: B1.
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The ID of the KMS key. This parameter is required only when EncryptType is set to 2.
   * 
   * @example
   * fcbd****-62**-4a**-b605-c58cc1d5****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The file transfer protocol type. Valid values:
   * - When FileSystemType is set to standard: NFS or SMB.
   * - When FileSystemType is set to extreme: NFS.
   * - When FileSystemType is set to cpfs: cpfs.
   * - When FileSystemType is set to cpfsse: cpfs.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage redundancy type. This parameter takes effect only for CPFS with ZRS. Valid value: ZRS.
   * 
   * @example
   * ZRS
   * 
   * **if can be null:**
   * true
   */
  redundancyType?: string;
  /**
   * @remarks
   * The zone-redundant vSwitch IDs. When RedundancyType is set to ZRS, this parameter is required. You must specify three vSwitch IDs, and the vSwitches must reside in three different zones.
   * 
   * **if can be null:**
   * true
   */
  redundancyVSwitchIds?: string[];
  /**
   * @remarks
   * The resource group ID. You can view the resource group ID in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?).
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot ID. This parameter is supported only for Extreme NAS file systems with the Premium storage type.
   * > When you create a file system from a snapshot, the version of the created file system is the same as the version of the source file system of the snapshot. For example, if the source file system of the snapshot is of version 1 and you want to create a file system of version 2, you can first create File System A from the snapshot, and then create File System B that meets the version 2 configurations. After you copy the data from File System A to File System B, migrate your workloads to File System B.
   * 
   * @example
   * s-extreme-snapsho****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * - If FileSystemType is set to standard: Performance (performance type), Capacity (capacity type), Premium (premium type), and Agentic (AgenticFS).
   * - If FileSystemType is set to extreme: standard (standard type) and advance (advanced type).
   * - If FileSystemType is set to cpfs: advance_100 (100 MB/s/TiB baseline), advance_200 (200 MB/s/TiB baseline), and economic (economy type).
   * - If FileSystemType is set to cpfsse: advance_100 (100 MB/s/TiB baseline).
   * 
   * This parameter is required.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The tags. The array length is 1 to 20. If the array contains multiple tag objects, the tag keys must be unique.
   */
  tag?: CreateFileSystemRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * - When FileSystemType is set to cpfs, this parameter is required.
   * - When FileSystemType is not set to cpfs, this parameter is reserved and does not take effect. You do not need to configure this parameter.
   * 
   * @example
   * vsw-bp131dkqilvw5pnlt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * - When FileSystemType is set to cpfs or cpfsse, this parameter is required.
   * - When FileSystemType is set to standard or extreme, this parameter is reserved and does not take effect. You do not need to configure this parameter.
   * 
   * @example
   * vpc-bp18cx9a7zoh0h9b4****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. A zone is a physical area with independent power grids and networks within a region. When FileSystemType is set to standard, this parameter is optional. By default, an active zone that meets the conditional requirements is randomly selected based on the ProtocolType and StorageType settings. When FileSystemType is set to extreme or cpfs, this parameter is required.
   * > - File systems and Elastic Computing Service (ECS) servers in different zones of the same region can communicate with each other.
   * > - Deploy the file system and the ECS server in the same zone to avoid cross-zone latency.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      duration: 'Duration',
      encryptType: 'EncryptType',
      fileSystemType: 'FileSystemType',
      hpnZone: 'HpnZone',
      kmsKeyId: 'KmsKeyId',
      protocolType: 'ProtocolType',
      redundancyType: 'RedundancyType',
      redundancyVSwitchIds: 'RedundancyVSwitchIds',
      resourceGroupId: 'ResourceGroupId',
      snapshotId: 'SnapshotId',
      storageType: 'StorageType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      duration: 'number',
      encryptType: 'number',
      fileSystemType: 'string',
      hpnZone: 'string',
      kmsKeyId: 'string',
      protocolType: 'string',
      redundancyType: 'string',
      redundancyVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      snapshotId: 'string',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateFileSystemRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.redundancyVSwitchIds)) {
      $dara.Model.validateArray(this.redundancyVSwitchIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

