// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * - The tag key cannot be empty.
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
   * The tag value.
   * 
   * Limits:
   * - The tag value cannot be empty.
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
   * The maximum throughput of the file system.
   * 
   * Unit: MB/s.
   * 
   * For available specification values, see the actual specifications on the buy page.
   * 
   * <props="china">
   * 
   * [Parallel file system CPFS pay-as-you-go buy page](https://common-buy.aliyun.com/?commodityCode=nas_cpfs_post#/buy)
   * 
   * 
   * 
   * <props="intl">
   * 
   * [Parallel file system CPFS pay-as-you-go buy page](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui&commodityCode=nas_cpfspost_public_intl#/buy)
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB.
   * This parameter is required and takes effect only when FileSystemType is set to extreme, cpfs, or cpfsse.
   * 
   * For available values, see the actual specifications on the buy page:
   * 
   * <props="china">
   * 
   * -  [Extreme NAS pay-as-you-go buy page](https://common-buy.aliyun.com/?commodityCode=nas_extreme_post#/buy)
   * - [Parallel file system CPFS pay-as-you-go buy page](https://common-buy.aliyun.com/?commodityCode=nas_cpfs_post#/buy)
   * 
   * 
   * 
   * <props="intl">
   * 
   * - [Extreme NAS pay-as-you-go buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)
   * 
   * - [Parallel file system CPFS pay-as-you-go buy page](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui&commodityCode=nas_cpfspost_public_intl#/buy)
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
   * - PayAsYouGo (default): Pay-as-you-go.
   * - Subscription: Subscription.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a unique parameter value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * 此文件系统的描述。
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating the instance or incurring charges.
   * 
   * Valid values:  
   * - true: Sends a dry run request without creating the instance. The check items include required parameters, request format, service limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but FileSystemId is empty.  
   * - false (default): Sends a normal request. After the check succeeds, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * Unit: months. This parameter is required and takes effect only when ChargeType is set to Subscription.
   * 
   * If a subscription instance is not renewed upon expiration, the instance is automatically released.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to encrypt the file system.
   * 
   * Uses keys managed by Key Management Service (KMS) to encrypt data stored on the file system. No decryption is required when reading or writing encrypted data.
   * 
   * Valid values:
   * 
   * - 0 (default): Not encrypted.
   * - 1: NAS-managed key. Supported when FileSystemType is set to standard or extreme.
   * - 2: Custom Key (KMS). Supported when FileSystemType is set to standard or extreme.
   * 
   * > - Extreme NAS: The Custom Key (KMS) feature is supported in all regions except China (Hangzhou) Finance Cloud.
   * > - General-purpose NAS: The Custom Key (KMS) feature is supported in all regions.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * - standard (default): General-purpose NAS file system.
   * - extreme: Extreme NAS file system.
   * - cpfs: Cloud Parallel File Storage (CPFS) (locally redundant).
   * - cpfsse: Cloud Parallel File Storage (CPFS) SE (zone-redundant).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The KMS key ID.
   * 
   * This parameter is required only when EncryptType is set to 2.
   * 
   * @example
   * fcbd****-62**-4a**-b605-c58cc1d5****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The file transfer protocol type.
   * 
   * - If FileSystemType is set to standard, valid values: NFS and SMB.
   * - If FileSystemType is set to extreme, valid values: NFS.
   * - If FileSystemType is set to cpfs, valid values: cpfs.
   * - If FileSystemType is set to cpfsse, valid values: cpfs.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage redundancy type. This parameter takes effect only for CPFS SE.
   * Valid values: ZRS.
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
   * The list of zone-redundant vSwitch IDs.
   * If RedundancyType is set to ZRS, this parameter is required. You must specify three vSwitch IDs, each from a different zone.
   * 
   * **if can be null:**
   * true
   */
  redundancyVSwitchIds?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can view resource group IDs in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?).
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is supported only for Extreme NAS file systems with the Advanced storage type.
   * > A file system created from a snapshot has the same version as the source file system of the snapshot. For example, if the source file system version is 1 and you want to create a version 2 file system, first create file system A from the snapshot, then create file system B that meets the version 2 configuration. Copy the data from file system A to file system B, and migrate your workloads to file system B after the copy is complete.
   * 
   * @example
   * s-extreme-snapsho****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * - If FileSystemType is set to standard, valid values: Performance, Capacity, and Premium.
   * - If FileSystemType is set to extreme, valid values: standard and advance.
   * - If FileSystemType is set to cpfs, valid values: advance_100 (100 MB/s/TiB baseline), advance_200 (200 MB/s/TiB baseline), and economic.
   * - If FileSystemType is set to cpfsse, valid values: advance_100 (100 MB/s/TiB baseline).
   * 
   * This parameter is required.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * Array length: 1 to 20. If the array contains multiple tag objects, the tag key (Key) must be unique.
   */
  tag?: CreateFileSystemRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * - If FileSystemType is set to cpfs, this parameter is required.
   * - If FileSystemType is not set to cpfs, this parameter is reserved and does not take effect. You do not need to configure it.
   * 
   * @example
   * vsw-bp131dkqilvw5pnlt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * - If FileSystemType is set to cpfs or cpfsse, this parameter is required.
   * - If FileSystemType is set to standard or extreme, this parameter is reserved and does not take effect. You do not need to configure it.
   * 
   * @example
   * vpc-bp18cx9a7zoh0h9b4****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * A zone is an independent physical area within a region that has its own power supply and network.
   * 
   * If FileSystemType is set to standard, this parameter is optional. By default, an active zone that matches the conditional ProtocolType and StorageType is randomly selected.
   * 
   * If FileSystemType is set to extreme or cpfs, this parameter is required.
   * 
   * >  - File systems and Elastic Computing Service (ECS) instances in different zones of the same region can communicate with each other.
   * >  - Place the file system and the ECS server in the same zone to avoid cross-zone latency.
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

