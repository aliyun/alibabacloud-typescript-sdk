// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * user123
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Example string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * > This parameter applies only when `PayType` is set to `Prepaid`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/360339.html) API to query backup set IDs.
   * 
   * > This parameter is required when restoring data to an ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * b-12af23adsf
   */
  backupSetID?: string;
  /**
   * @remarks
   * A client token used to ensure request idempotence. The value must be a string of no more than 64 ASCII characters.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The replica configuration. Valid values:
   * 
   * - **Basic**: single-replica
   * 
   * - **HighAvailability**: high availability (dual-replica)
   * 
   * This parameter is required.
   * 
   * @example
   * Basic
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The instance type.<props="china">
   * 
   * - For single-replica clusters, valid values are:
   * 
   *   - **LS20**: Large-storage, 20 cores, 88 GB
   * 
   *   - **LS40**: Large-storage, 40 cores, 176 GB
   * 
   *   - **LS80**: Large-storage, 80 cores, 352 GB
   * 
   *   - **S8**: Standard, 8 cores, 32 GB
   * 
   *   - **S16**: Standard, 16 cores, 64 GB
   * 
   *   - **S32**: Standard, 32 cores, 128 GB
   * 
   *   - **S64**: Standard, 64 cores, 256 GB
   * 
   *   - **S80**: Standard, 80 cores, 384 GB
   * 
   *   - **S104**: Standard, 104 cores, 384 GB
   * 
   * - For high availability clusters, valid values are:
   * 
   *   - **LC20**: Large-storage, 20 cores, 88 GB
   * 
   *   - **LC40**: Large-storage, 40 cores, 176 GB
   * 
   *   - **LC80**: Large-storage, 80 cores, 352 GB
   * 
   *   - **C8**: Standard, 8 cores, 32 GB
   * 
   *   - **C16**: Standard, 16 cores, 64 GB
   * 
   *   - **C32**: Standard, 32 cores, 128 GB
   * 
   *   - **C64**: Standard, 64 cores, 256 GB
   * 
   *   - **C80**: Standard, 80 cores, 384 GB
   * 
   *   - **C104**: Standard, 104 cores, 384 GB
   * 
   * <props="intl">
   * 
   * - For single-replica clusters, valid values are:
   * 
   *   - **S8**: 8 cores, 32 GB
   * 
   *   - **S16**: 16 cores, 64 GB
   * 
   *   - **S32**: 32 cores, 128 GB
   * 
   *   - **S64**: 64 cores, 256 GB
   * 
   *   - **S104**: 104 cores, 384 GB
   * 
   * - For high availability clusters, valid values are:
   * 
   *   - **C8**: 8 cores, 32 GB
   * 
   *   - **C16**: 16 cores, 64 GB
   * 
   *   - **C32**: 32 cores, 128 GB
   * 
   *   - **C64**: 64 cores, 256 GB
   * 
   *   - **C104**: 104 cores, 384 GB
   * 
   * This parameter is required.
   * 
   * @example
   * S8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type. Currently, only VPC is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The engine version. Valid values:
   * 
   * - **21.8.10.19**
   * 
   * - **22.8.5.29**
   * 
   * This parameter is required.
   * 
   * @example
   * 22.8.5.29
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * - For single-replica clusters, the valid range is 1–48.
   * 
   * - For high availability clusters, the valid range is 1–24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity per node, in GB. The valid range is 100–32,000.
   * 
   * > The value must be a multiple of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * <props="china">
   * 
   * - **CloudESSD_PL0**: ESSD PL0 cloud disk
   * 
   * 
   * 
   * 
   * - **CloudESSD**: ESSD PL1 cloud disk
   * 
   * - **CloudESSD_PL2**: ESSD PL2 cloud disk
   * 
   * - **CloudESSD_PL3**: ESSD PL3 cloud disk
   * 
   * - **CloudEfficiency**: Ultra Disk
   * 
   * This parameter is required.
   * 
   * @example
   * CloudESSD_PL2
   */
  dbNodeStorageType?: string;
  /**
   * @remarks
   * This parameter is required when `EncryptionType` is set to `CloudDisk`.
   * 
   * The ID of the cloud disk encryption key. You can create and manage keys in the Key Management Service console.
   * 
   * > If `EncryptionType` is not specified, you do not need to specify this parameter.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Only cloud disk encryption is supported. Set this value to **CloudDisk**.
   * 
   * > If you do not specify this parameter, encryption is disabled.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription duration unit.
   * >Notice: This parameter is required only when `PayType` is set to `Prepaid`.
   * 
   * - **Year**: Measured in years.
   * 
   * - **Month**: Measured in months.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) API to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group that contains the cluster.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the source cluster. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) API to query cluster IDs.
   * 
   * > This parameter is required when restoring data to an ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * cc-bp1lxbo89u950****
   */
  sourceDBClusterId?: string;
  /**
   * @remarks
   * The tags to add to the cluster.
   */
  tags?: CreateDBInstanceRequestTags[];
  /**
   * @remarks
   * The subscription duration.
   * >Notice: This parameter is required only when `PayType` is set to `Prepaid`.
   * 
   * - If `Period` is `Year`, the valid range is 1–3.
   * 
   * - If `Period` is `Month`, the valid range is 1–9.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the secondary VSwitch.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak?: string;
  /**
   * @remarks
   * The ID of the second standby VSwitch.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak2?: string;
  /**
   * @remarks
   * The VSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the second standby availability zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  zondIdBak2?: string;
  /**
   * @remarks
   * The availability zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) API to query the latest availability zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The ID of the secondary availability zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneIdBak?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      backupSetID: 'BackupSetID',
      clientToken: 'ClientToken',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      dbNodeStorageType: 'DbNodeStorageType',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBClusterId: 'SourceDBClusterId',
      tags: 'Tags',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchBak: 'VSwitchBak',
      vSwitchBak2: 'VSwitchBak2',
      vSwitchId: 'VSwitchId',
      zondIdBak2: 'ZondIdBak2',
      zoneId: 'ZoneId',
      zoneIdBak: 'ZoneIdBak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      backupSetID: 'string',
      clientToken: 'string',
      DBClusterCategory: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      dbNodeStorageType: 'string',
      encryptionKey: 'string',
      encryptionType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBClusterId: 'string',
      tags: { 'type': 'array', 'itemType': CreateDBInstanceRequestTags },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchBak: 'string',
      vSwitchBak2: 'string',
      vSwitchId: 'string',
      zondIdBak2: 'string',
      zoneId: 'string',
      zoneIdBak: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

