// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFileSystemRequestTag } from "./CreateFileSystemRequestTag";


export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum throughput of the file system.
   * 
   * Unit: MB/s.
   * 
   * Specify a value based on the specifications on the buy page.
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB.
   * 
   * This parameter is valid and required if the FileSystemType parameter is set to extreme.
   * 
   * Specify a value based on the specifications on the following buy page:
   * 
   * [Extreme NAS file system (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)
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
   * *   Subscription: subscription
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
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
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the precheck, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * This parameter is valid and required only if the ChargeType parameter is set to Subscription. Unit: months.
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
   * *   1: A NAS-managed key is used to encrypt the data in the file system. This value is valid only if the FileSystemType parameter is set to standard or extreme.
   * *   2: A KMS-managed key is used to encrypt the data in the file system. This value is valid only if the FileSystemType parameter is set to standard or extreme.
   * 
   * >  *   Extreme NAS file systems: All regions except China East 1 Finance support KMS-managed keys.
   * > *   General-purpose NAS file systems: All regions support KMS-managed keys.
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
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * This parameter is required only if the EncryptType parameter is set to 2.
   * 
   * @example
   * 3c0b3885-2adf-483d-8a65-5e280689****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * *   If the FileSystemType parameter is set to standard, you can set the ProtocolType parameter to NFS or SMB.
   * *   If the FileSystemType parameter is set to extreme, you can set the ProtocolType parameter to NFS.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
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
   * >  You can create a file system from a snapshot. In this case, the version of the file system is the same as that of the source file system. For example, the source file system of the snapshot uses version 1. To create a file system of version 2, you can create File System A from the snapshot and create File System B of version 2. You can then copy the data and migrate your business from File System A to File System B.
   * 
   * @example
   * s-xxx
   */
  snapshotId?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   If the FileSystemType parameter is set to standard, you can set the StorageType parameter to Performance, Capacity, or Premium.
   * *   If the FileSystemType parameter is set to extreme, you can set the StorageType parameter to standard or advance.
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
   * This parameter is reserved and does not take effect. You do not need to configure this parameter.
   * 
   * @example
   * vsw-2ze37k6jh8ums2fw2****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is reserved and does not take effect. You do not need to configure this parameter.
   * 
   * @example
   * vpc-bp1cbv1ljve4j5hlw****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and networks.
   * 
   * This parameter is not required if the FileSystemType parameter is set to standard. By default, a random zone is selected based on the protocol type and storage type.
   * 
   * This parameter is required if the FileSystemType parameter is set to extreme.
   * 
   * > *   An Elastic Compute Service (ECS) instance and a NAS file system that reside in different zones of the same region can access each other.
   * >*   We recommend that you select the zone where the ECS instance resides. This prevents cross-zone latency between the file system and the ECS instance.
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

