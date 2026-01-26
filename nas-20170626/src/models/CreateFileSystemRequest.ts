// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * *   Cannot be null or an empty string.
   * *   Can be up to 128 characters in length.
   * *   Cannot start with `aliyun` or `acs:`.
   * *   Cannot contain `http://` or `https://`.
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
   * 
   * *   Cannot be null or an empty string.
   * *   Can be up to 128 characters in length.
   * *   Cannot contain `http://` or `https://`.
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
   * Specify a value based on the specifications on the buy page.
   * 
   * [CPFS (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui\\&commodityCode=nas_cpfspost_public_intl#/buy)
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * Specify the capacity of the file system. Unit: GiB. This parameter is required and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
   * 
   * Specify a value based on the specifications on the following buy page:
   * 
   * *   [Extreme NAS (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)
   * *   [CPFS (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui\\&commodityCode=nas_cpfspost_public_intl#/buy)
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
   * *   PayAsYouGo (default): pay-as-you-go
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. ClientToken only supports ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
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
   * *   Must be 2 to 128 characters in length.
   * *   Must start with a letter but cannot start with `http://` or `https://`.
   * *   Can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether to precheck the creation request.
   * 
   * The precheck operation helps you check the validity of parameters and verify inventory. It does not actually create instances and does not incur fees.
   * 
   * Valid values:
   * 
   * *   true: Checks the request without creating an instance. The system checks the required parameters, request syntax, service limits, and available NAS resources. If the request fails to pass the check, an error message is returned. If the request passes the check, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): Sends the request. If the request passes the check, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * This parameter is valid and required if ChargeType is set to Subscription. Unit: months.
   * 
   * If you do not renew a subscription file system when the file system expires, the file system is automatically released.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to encrypt data in the file system.
   * 
   * You can use the keys that are managed by Key Management Service (KMS) to encrypt data in a file system. When you read and write the encrypted data, the data is automatically decrypted.
   * 
   * Valid values:
   * 
   * *   0 (default): The data in the file system is not encrypted.
   * *   1: A NAS-managed key is used to encrypt the data in the file system. This value is valid if FileSystemType is set to standard or extreme.
   * *   2: A KMS-managed key is used to encrypt the data in the file system. This value is valid if the FileSystemType parameter is set to standard or extreme.
   * 
   * > 
   * 
   * *   Extreme NAS: All regions except China East 1 Finance support KMS-managed keys.
   * 
   * *   General-purpose NAS: All regions support KMS-managed keys.
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
   * The ID of the KMS key.
   * 
   * This parameter is required if EncryptType is set to 2.
   * 
   * @example
   * 3c0b3885-2adf-483d-8a65-5e280689****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specify the protocol type.
   * 
   * *   If FileSystemType is set to standard, set this parameter to NFS or SMB.
   * *   If FileSystemType is set to extreme, set this parameter to NFS.
   * *   If FileSystemType is set to cpfs, set this parameter to cpfs.
   * *   If FileSystemType is set to cpfsse, set this parameter to cpfs.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * Storage redundancy type. Only available for CPFS SE.
   * 
   * Valid values:
   * 
   * *   ZRS
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
   * A list of IDs for the zone-redundant vSwitches. This parameter is required if RedundancyType is set to ZRS. You must enter three vSwitch IDs from three different zones.
   * 
   * **if can be null:**
   * true
   */
  redundancyVSwitchIds?: string[];
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
   * The snapshot ID.
   * 
   * This parameter is available only for advanced Extreme NAS file systems.
   * 
   * > You can create a file system from a snapshot. The version of the file system is the same as that of the source file system. For example, the source file system of the snapshot uses version 1. To create a file system of version 2, create File System A from the snapshot and create File System B of version 2. Then copy the data and migrate your business from File System A to File System B.
   * 
   * @example
   * s-xxx
   */
  snapshotId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   If FileSystemType is set to standard, set this parameter to Performance, Capacity, or Premium.
   * *   If FileSystemType is set to extreme, set this parameter to standard or advance.
   * *   If FileSystemType is set to cpfs, set this parameter to advance_100 (100 MB/s/TiB Baseline), advance_200 (200 MB/s/TiB Baseline), or economic.
   * *   If FileSystemType is set to cpfsse, set this parameter to advance_100 (100 MB/s/TiB Baseline).
   * 
   * This parameter is required.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * An array of tags.
   * 
   * You can specify up to 20 tags. If you specify multiple tags, each tag key must be unique.
   */
  tag?: CreateFileSystemRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * *   This parameter is required if FileSystemType is set to cpfs.
   * *   If FileSystemType is not set to cpfs, this parameter is reserved and not required.
   * 
   * @example
   * vsw-2ze37k6jh8ums2fw2****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
   * *   This parameter is reserved and not required if FileSystemType is set to standard or extreme.
   * 
   * @example
   * vpc-bp1cbv1ljve4j5hlw****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and network.
   * 
   * This parameter is not required if FileSystemType is set to standard. By default, a random zone is selected based on the protocol type and storage type.
   * 
   * This parameter is required if FileSystemType is set to extreme or cpfs.
   * 
   * > 
   * 
   * *   An Elastic Compute Service (ECS) instance and a file system that reside in different zones of the same region can access each other.
   * 
   * *   We recommend that you select the zone where the ECS instance resides. This prevents cross-zone latency between the file system and the ECS instance.
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

