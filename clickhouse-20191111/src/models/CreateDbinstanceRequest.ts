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
   * >This parameter takes effect only when PayType is set to Prepaid.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The backup set ID. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/360339.html) operation to query the backup set ID.
   * >This parameter is required when you restore data for an ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * b-12af23adsf
   */
  backupSetID?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value is a string that contains up to 64 ASCII characters.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The replica configuration. Valid values:
   * - **Basic**: single-replica edition.
   * - **HighAvailability**: double-replica edition.
   * 
   * This parameter is required.
   * 
   * @example
   * Basic
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The cluster specifications.
   * <props="china">
   * 
   * - Single-replica edition. Valid values:
   *     - **LS20**: large storage, 20 cores, 88 GB.
   *     - **LS40**: large storage, 40 cores, 176 GB.
   *     - **LS80**: large storage, 80 cores, 352 GB.
   *     - **S8**: standard, 8 cores, 32 GB.
   *     - **S16**: standard, 16 cores, 64 GB.
   *     - **S32**: standard, 32 cores, 128 GB.
   *     - **S64**: standard, 64 cores, 256 GB.
   *     - **S80**: standard, 80 cores, 384 GB.
   *     - **S104**: standard, 104 cores, 384 GB.
   * - Double-replica edition. Valid values:
   *     - **LC20**: large storage, 20 cores, 88 GB.
   *     - **LC40**: large storage, 40 cores, 176 GB.
   *     - **LC80**: large storage, 80 cores, 352 GB.
   *     - **C8**: standard, 8 cores, 32 GB.
   *     - **C16**: standard, 16 cores, 64 GB.
   *     - **C32**: standard, 32 cores, 128 GB.
   *     - **C64**: standard, 64 cores, 256 GB.
   *     - **C80**: standard, 80 cores, 384 GB.
   *     - **C104**: standard, 104 cores, 384 GB.
   * 
   * 
   * <props="intl">
   * 
   * - Single-replica edition. Valid values:    
   *   - **S8**: 8 cores, 32 GB.
   *   - **S16**: 16 cores, 64 GB.    
   *   - **S32**: 32 cores, 128 GB.
   *   - **S64**: 64 cores, 256 GB.
   *   - **S104**: 104 cores, 384 GB.
   * - Double-replica edition. Valid values:
   *   - **C8**: 8 cores, 32 GB.
   *   - **C16**: 16 cores, 64 GB.
   *   - **C32**: 32 cores, 128 GB.
   *   - **C64**: 64 cores, 256 GB.
   *   - **C104**: 104 cores, 384 GB.
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
   * The network type. Only VPC is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The kernel version. Valid values:
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
   * - Single-replica edition: valid values: 1 to 48.
   * - Double-replica edition: valid values: 1 to 24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity per node. Valid values: 100 to 32000. Unit: GB.
   * 
   * >The step size is 100 GB.
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
   * <props="china">- **CloudESSD_PL0**: PL0 ESSD.
   * - **CloudESSD**: PL1 ESSD.
   * - **CloudESSD_PL2**: PL2 ESSD.
   * - **CloudESSD_PL3**: PL3 ESSD.
   * - **CloudEfficiency**: ultra cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudESSD_PL2
   */
  dbNodeStorageType?: string;
  /**
   * @remarks
   * The ID of the key used for cloud disk encryption. This parameter is required when EncryptionType is set to CloudDisk.
   * 
   * You can view the key ID in the Key Management Service (KMS) console or create a key.
   * >If EncryptionType is not specified, you do not need to specify this parameter.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Only cloud disk encryption is supported. Set the value to **CloudDisk**.
   * >If this parameter is not specified, data is not encrypted.
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
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * >Notice: This parameter takes effect and is required only when PayType is set to Prepaid.				
   * - **Year**: subscription on a yearly basis.
   * - **Month**: subscription on a monthly basis.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query the cluster ID.
   * >This parameter is required when you restore data for an ApsaraDB for ClickHouse cluster.
   * 
   * @example
   * cc-bp1lxbo89u950****
   */
  sourceDBClusterId?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: CreateDBInstanceRequestTags[];
  /**
   * @remarks
   * The subscription duration of the subscription cluster.
   * >Notice: This parameter takes effect and is required only when PayType is set to Prepaid.
   * - If Period is set to Year, valid values: 1 to 3 (integer).
   * - If Period is set to Month, valid values: 1 to 9 (integer).
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  VPCId?: string;
  /**
   * @remarks
   * The secondary vSwitch.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak?: string;
  /**
   * @remarks
   * The secondary vSwitch 2.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak2?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The secondary zone 2.
   * 
   * @example
   * cn-hangzhou-j
   */
  zondIdBak2?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The secondary zone.
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

