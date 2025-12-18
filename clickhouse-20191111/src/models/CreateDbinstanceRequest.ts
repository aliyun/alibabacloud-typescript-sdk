// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestTags extends $dara.Model {
  /**
   * @example
   * user123
   */
  key?: string;
  /**
   * @example
   * 示例字符串
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
   * >  This parameter is valid only if the value of PayType is set to Prepaid.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/360339.html) operation to query the backup sets.
   * 
   * >  If you want to restore the data of an ApsaraDB for ClickHouse cluster, this parameter is required.
   * 
   * @example
   * b-12af23adsf
   */
  backupSetID?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value is a string and can be up to 64 ASCII characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Basic**: Single-replica Edition
   * *   **HighAvailability**: Double-replica Edition
   * 
   * This parameter is required.
   * 
   * @example
   * Basic
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The specifications of the cluster.
   * 
   * *   Valid values for a Single-replica Edition cluster:
   * 
   *     *   **S8**: 8 cores and 32 GB of memory
   *     *   **S16**: 16 cores and 64 GB of memory
   *     *   **S32**: 32 cores and 128 GB of memory
   *     *   **S64**: 64 cores and 256 GB of memory
   *     *   **S104**: 104 cores and 384 GB of memory
   * 
   * *   Valid values for a Double-replica Edition cluster:
   * 
   *     *   **C8**: 8 cores and 32 GB of memory
   *     *   **C16**: 16 cores and 64 GB of memory
   *     *   **C32**: 32 cores and 128 GB of memory
   *     *   **C64**: 64 cores and 256 GB of memory
   *     *   **C104**: 104 cores and 384 GB of memory
   * 
   * This parameter is required.
   * 
   * @example
   * S8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Only Virtual Private Cloud (VPC) is supported.
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
   * *   **21.8.10.19**
   * *   **22.8.5.29**
   * 
   * This parameter is required.
   * 
   * @example
   * 21.8.10.19
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * *   Valid values when the cluster is of Single-replica Edition: 1 to 48.
   * *   Valid values when the cluster is of Double-replica Edition: 1 to 24.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
   * 
   * >  This value is a multiple of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   **CloudESSD**: The cluster uses an enhanced SSD (ESSD) of performance level 1 (PL1).
   * *   **CloudESSD_PL2**: The cluster uses an ESSD of PL2.
   * *   **CloudESSD_PL3**: The cluster uses an ESSD of PL3.
   * *   **CloudEfficiency**: The cluster uses an ultra disk.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudESSD_PL2
   */
  dbNodeStorageType?: string;
  /**
   * @remarks
   * You must specify this parameter when EncryptionType is set to CloudDisk.
   * 
   * The ID of the key that is used to encrypt data on disks. You can obtain the ID of the key from the Key Management Service (KMS) console. You can also create a key.
   * 
   * >  If EncryptionType is empty, you do not need to specify this parameter.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Set the value to **CloudDisk**, which indicates that only disk encryption is supported.
   * 
   * >  If this parameter is not specified, data is not encrypted.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: The cluster uses the pay-as-you-go billing method.
   * *   **Prepaid**: The cluster uses the subscription billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration for the cluster. Valid values:
   * 
   * >  This parameter is required only when PayType is set to Prepaid.
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
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
   * The ID of the source cluster. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query backup set IDs.
   * 
   * >  If you want to restore the data of an ApsaraDB for ClickHouse cluster, this parameter is required.
   * 
   * @example
   * cc-bp1lxbo89u950****
   */
  sourceDBClusterId?: string;
  tags?: CreateDBInstanceRequestTags[];
  /**
   * @remarks
   * The subscription duration of the subscription cluster.
   * 
   * >  This parameter is required only when PayType is set to Prepaid.
   * 
   * *   Valid values when Period is set to Year: 1 to 3 (integer)
   * *   Valid values when Period is set to Month: 1 to 9 (integer)
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
   * The vSwitch in the secondary zone for the VPC.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchBak?: string;
  /**
   * @remarks
   * The vSwitch in secondary zone 2 for the VPC.
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
   * The secondary zone 2 of the instance.
   * 
   * @example
   * cn-hangzhou-j
   */
  zondIdBak2?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent zone list.
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

