// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of archive plans.
   * 
   * @example
   * 1
   */
  archive?: number;
  /**
   * @remarks
   * The number of Cloud Parallel File Storage (CPFS) backup plans.
   * 
   * @example
   * 1
   */
  commonFileSystem?: number;
  /**
   * @remarks
   * The number of backup plans for General-purpose NAS file systems.
   * 
   * @example
   * 1
   */
  commonNas?: number;
  /**
   * @remarks
   * The number of backup plans for Cloud Storage Gateway (CSG) gateways.
   * 
   * @example
   * 1
   */
  csg?: number;
  /**
   * @remarks
   * The number of backup plans for ECS files.
   * 
   * @example
   * 1
   */
  ecsFile?: number;
  /**
   * @remarks
   * The number of backup plans for SAP HANA instances.
   * 
   * @example
   * 1
   */
  ecsHana?: number;
  /**
   * @remarks
   * The number of backup plans for Isilon storage systems.
   * 
   * @example
   * 1
   */
  isilon?: number;
  /**
   * @remarks
   * The number of backup plans for on-premises servers.
   * 
   * @example
   * 1
   */
  localFile?: number;
  /**
   * @remarks
   * The number of backup plans for on-premises virtual machines (VMs).
   * 
   * @example
   * 1
   */
  localVm?: number;
  /**
   * @remarks
   * The number of backup plans for MySQL databases.
   * 
   * @example
   * 1
   */
  mySql?: number;
  /**
   * @remarks
   * The number of backup plans for NAS file systems.
   * 
   * @example
   * 1
   */
  nas?: number;
  /**
   * @remarks
   * The number of backup plans for Oracle databases.
   * 
   * @example
   * 1
   */
  oracle?: number;
  /**
   * @remarks
   * The number of backup plans for OSS buckets.
   * 
   * @example
   * 1
   */
  oss?: number;
  /**
   * @remarks
   * The number of backup plans for Tablestore instances.
   * 
   * @example
   * 1
   */
  ots?: number;
  /**
   * @remarks
   * The number of backup plans for SQL Server databases.
   * 
   * @example
   * 1
   */
  sqlServer?: number;
  static names(): { [key: string]: string } {
    return {
      archive: 'Archive',
      commonFileSystem: 'CommonFileSystem',
      commonNas: 'CommonNas',
      csg: 'Csg',
      ecsFile: 'EcsFile',
      ecsHana: 'EcsHana',
      isilon: 'Isilon',
      localFile: 'LocalFile',
      localVm: 'LocalVm',
      mySql: 'MySql',
      nas: 'Nas',
      oracle: 'Oracle',
      oss: 'Oss',
      ots: 'Ots',
      sqlServer: 'SqlServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archive: 'number',
      commonFileSystem: 'number',
      commonNas: 'number',
      csg: 'number',
      ecsFile: 'number',
      ecsHana: 'number',
      isilon: 'number',
      localFile: 'number',
      localVm: 'number',
      mySql: 'number',
      nas: 'number',
      oracle: 'number',
      oss: 'number',
      ots: 'number',
      sqlServer: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultReplicationProgress extends $dara.Model {
  /**
   * @remarks
   * The progress of historical data synchronization from the backup vault to the mirror vault. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  historicalReplicationProgress?: number;
  /**
   * @remarks
   * The latest synchronization time of incremental data in the mirror vault.
   * 
   * @example
   * 1579413159
   */
  newReplicationProgress?: number;
  static names(): { [key: string]: string } {
    return {
      historicalReplicationProgress: 'HistoricalReplicationProgress',
      newReplicationProgress: 'NewReplicationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalReplicationProgress: 'number',
      newReplicationProgress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultSourceTypes extends $dara.Model {
  sourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceType)) {
      $dara.Model.validateArray(this.sourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVaultTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the backup vault. Valid values of N: 1 to 20.
   * 
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the backup vault. Valid values of N: 1 to 20.
   * 
   * *   The tag value cannot start with `aliyun` or `acs:`.
   * *   The tag value cannot contain `http://` or `https://`.
   * *   The tag value cannot be an empty string.
   * 
   * @example
   * a1
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

export class DescribeVaultsResponseBodyVaultsVaultTags extends $dara.Model {
  tag?: DescribeVaultsResponseBodyVaultsVaultTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVaultsResponseBodyVaultsVaultTagsTag },
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

export class DescribeVaultsResponseBodyVaultsVaultTrialInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you are billed based on the pay-as-you-go method after the free trial ends.
   * 
   * @example
   * true
   */
  keepAfterTrialExpiration?: boolean;
  /**
   * @remarks
   * The expiration time of the free trial.
   * 
   * @example
   * 1584597600
   */
  trialExpireTime?: number;
  /**
   * @remarks
   * The start time of the free trial.
   * 
   * @example
   * 1579413159
   */
  trialStartTime?: number;
  /**
   * @remarks
   * The time when the free-trial backup vault is released.
   * 
   * @example
   * 1594965600
   */
  trialVaultReleaseTime?: number;
  static names(): { [key: string]: string } {
    return {
      keepAfterTrialExpiration: 'KeepAfterTrialExpiration',
      trialExpireTime: 'TrialExpireTime',
      trialStartTime: 'TrialStartTime',
      trialVaultReleaseTime: 'TrialVaultReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepAfterTrialExpiration: 'boolean',
      trialExpireTime: 'number',
      trialStartTime: 'number',
      trialVaultReleaseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaultsVault extends $dara.Model {
  /**
   * @remarks
   * Archival tier backup data volume. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  archiveBytesDone?: number;
  /**
   * @remarks
   * The billable storage usage of the Archive tier. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  archiveStorageSize?: number;
  /**
   * @remarks
   * The statistics of backup plans that use the backup vault.
   */
  backupPlanStatistics?: DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics;
  /**
   * @remarks
   * The name of the OSS bucket used by the backup vault.
   * 
   * @example
   * hbr-0005i51******t58
   */
  bucketName?: string;
  /**
   * @remarks
   * The amount of data that is backed up. Unit: bytes.
   * 
   * @example
   * 20
   */
  bytesDone?: number;
  /**
   * @remarks
   * The billing method of the backup vault.
   * 
   * @example
   * FREE
   */
  chargeType?: string;
  /**
   * @remarks
   * The billable storage usage of the archive vault. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  chargedStorageSize?: number;
  /**
   * @remarks
   * The encryption algorithm used to compress the backup vault. Valid values:
   * 
   * *   DISABLED: The backup vault is not compressed.
   * *   SNAPPY: The backup vault is compressed by using the SNAPPY encryption algorithm.
   * *   ZSTD: The backup vault is compressed by using Zstandard, a fast lossless compression algorithm.
   * 
   * @example
   * ZSTD
   */
  compressionAlgorithm?: string;
  /**
   * @remarks
   * The time when the backup vault was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * Indicates whether the deduplication feature is enabled.
   * 
   * @example
   * true
   */
  dedup?: boolean;
  /**
   * @remarks
   * The description of the backup vault.
   * 
   * @example
   * vault description
   */
  description?: string;
  /**
   * @remarks
   * The encryption type of the backup vault. Valid values:
   * 
   * *   NONE: The backup vault is not encrypted.
   * *   HBR_PRIVATE (default): The backup vault is encrypted by using a key provided by Cloud Backup.
   * *   KMS: The backup vault is encrypted by using a custom master key (CMK) created in Key Management Service (KMS).
   * 
   * @example
   * HBR_PRIVATE
   */
  encryptType?: string;
  /**
   * @remarks
   * Indicates whether indexes are available. Indexes are available when they are not being updated.
   * 
   * @example
   * true
   */
  indexAvailable?: boolean;
  /**
   * @remarks
   * The index level.
   * 
   * *   OFF: No indexes are created.
   * *   META: Metadata indexes are created.
   * *   ALL: Full-text indexes are created.
   * 
   * @example
   * OFF
   */
  indexLevel?: string;
  /**
   * @remarks
   * The time when the index was updated.
   * 
   * @example
   * 1639645628
   */
  indexUpdateTime?: number;
  /**
   * @remarks
   * The ID or alias of the CMK created in KMS. This parameter is returned only when EncryptType is set to KMS.
   * 
   * @example
   * alias/acs/acm
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  latestReplicationTime?: number;
  /**
   * @remarks
   * The data redundancy type of the backup vault. Valid values:
   * 
   * *   LRS: Locally redundant storage (LRS) is enabled for the backup vault. Cloud Backup stores the copies of each object on multiple devices of different facilities in the same zone. This way, Cloud Backup ensures data durability and availability even if hardware failures occur.
   * *   ZRS: Zone-redundant storage (ZRS) is enabled for the backup vault. Cloud Backup uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
   * 
   * @example
   * LRS
   */
  redundancyType?: string;
  /**
   * @remarks
   * Indicates whether the backup vault is a remote backup vault. Valid values:
   * 
   * *   true: The backup vault is a remote backup vault.
   * *   false: The backup vault is a local backup vault.
   * 
   * @example
   * false
   */
  replication?: boolean;
  /**
   * @remarks
   * The progress of data synchronization from the backup vault to the mirror vault.
   */
  replicationProgress?: DescribeVaultsResponseBodyVaultsVaultReplicationProgress;
  /**
   * @remarks
   * The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
   * 
   * @example
   * v-*********************
   */
  replicationSourceRegionId?: string;
  /**
   * @remarks
   * Indicate whether the backup vault is the source vault that corresponds to the remote backup vault. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  replicationSourceVault?: boolean;
  /**
   * @remarks
   * The ID of the source vault that corresponds to the remote backup vault.
   * 
   * @example
   * v-*********************
   */
  replicationSourceVaultId?: string;
  /**
   * @remarks
   * Target region for remote backup repository.
   * 
   * @example
   * cn-shanghai
   */
  replicationTargetRegionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention period of the backup vault. Unit: days.
   * 
   * @example
   * 2
   */
  retention?: number;
  /**
   * @remarks
   * Indicates whether the backup search feature is enabled.
   * 
   * @example
   * true
   */
  searchEnabled?: boolean;
  /**
   * @remarks
   * The number of snapshots in the backup vault.
   * 
   * @example
   * 0
   */
  snapshotCount?: number;
  /**
   * @remarks
   * The data source types of the backup vault.
   */
  sourceTypes?: DescribeVaultsResponseBodyVaultsVaultSourceTypes;
  /**
   * @remarks
   * The status of the backup vault. Valid values:
   * 
   * *   **UNKNOWN**: The backup vault is in an unknown state.
   * *   **INITIALIZING**: The backup vault is being initialized.
   * *   **CREATED**: The backup vault is created.
   * *   **ERROR**: An error occurs on the backup vault.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The usage of the backup vault. Unit: bytes.
   * 
   * @example
   * 10
   */
  storageSize?: number;
  /**
   * @remarks
   * The tags of the backup vault.
   */
  tags?: DescribeVaultsResponseBodyVaultsVaultTags;
  /**
   * @remarks
   * The free trial information.
   */
  trialInfo?: DescribeVaultsResponseBodyVaultsVaultTrialInfo;
  /**
   * @remarks
   * The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  /**
   * @remarks
   * The name of the backup vault.
   * 
   * @example
   * vaultname
   */
  vaultName?: string;
  /**
   * @remarks
   * The ID of the region in which the backup vault resides.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults. Valid values:
   * 
   * *   **UNKNOWN_ERROR**: An unknown error occurs.
   * *   **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
   * 
   * @example
   * SOURCE_VAULT_ALREADY_HAS_REPLICATION
   */
  vaultStatusMessage?: string;
  /**
   * @remarks
   * The storage class of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
   * 
   * @example
   * STANDARD
   */
  vaultStorageClass?: string;
  /**
   * @remarks
   * The type of the backup vault. Valid value: **STANDARD**, which indicates a standard backup vault.
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  /**
   * @remarks
   * Indicates whether the immutable backup feature is enabled.
   * 
   * @example
   * true
   */
  wormEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      archiveBytesDone: 'ArchiveBytesDone',
      archiveStorageSize: 'ArchiveStorageSize',
      backupPlanStatistics: 'BackupPlanStatistics',
      bucketName: 'BucketName',
      bytesDone: 'BytesDone',
      chargeType: 'ChargeType',
      chargedStorageSize: 'ChargedStorageSize',
      compressionAlgorithm: 'CompressionAlgorithm',
      createdTime: 'CreatedTime',
      dedup: 'Dedup',
      description: 'Description',
      encryptType: 'EncryptType',
      indexAvailable: 'IndexAvailable',
      indexLevel: 'IndexLevel',
      indexUpdateTime: 'IndexUpdateTime',
      kmsKeyId: 'KmsKeyId',
      latestReplicationTime: 'LatestReplicationTime',
      redundancyType: 'RedundancyType',
      replication: 'Replication',
      replicationProgress: 'ReplicationProgress',
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVault: 'ReplicationSourceVault',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      replicationTargetRegionId: 'ReplicationTargetRegionId',
      resourceGroupId: 'ResourceGroupId',
      retention: 'Retention',
      searchEnabled: 'SearchEnabled',
      snapshotCount: 'SnapshotCount',
      sourceTypes: 'SourceTypes',
      status: 'Status',
      storageSize: 'StorageSize',
      tags: 'Tags',
      trialInfo: 'TrialInfo',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStatusMessage: 'VaultStatusMessage',
      vaultStorageClass: 'VaultStorageClass',
      vaultType: 'VaultType',
      wormEnabled: 'WormEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveBytesDone: 'number',
      archiveStorageSize: 'number',
      backupPlanStatistics: DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics,
      bucketName: 'string',
      bytesDone: 'number',
      chargeType: 'string',
      chargedStorageSize: 'number',
      compressionAlgorithm: 'string',
      createdTime: 'number',
      dedup: 'boolean',
      description: 'string',
      encryptType: 'string',
      indexAvailable: 'boolean',
      indexLevel: 'string',
      indexUpdateTime: 'number',
      kmsKeyId: 'string',
      latestReplicationTime: 'number',
      redundancyType: 'string',
      replication: 'boolean',
      replicationProgress: DescribeVaultsResponseBodyVaultsVaultReplicationProgress,
      replicationSourceRegionId: 'string',
      replicationSourceVault: 'boolean',
      replicationSourceVaultId: 'string',
      replicationTargetRegionId: 'string',
      resourceGroupId: 'string',
      retention: 'number',
      searchEnabled: 'boolean',
      snapshotCount: 'number',
      sourceTypes: DescribeVaultsResponseBodyVaultsVaultSourceTypes,
      status: 'string',
      storageSize: 'number',
      tags: DescribeVaultsResponseBodyVaultsVaultTags,
      trialInfo: DescribeVaultsResponseBodyVaultsVaultTrialInfo,
      updatedTime: 'number',
      vaultId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStatusMessage: 'string',
      vaultStorageClass: 'string',
      vaultType: 'string',
      wormEnabled: 'boolean',
    };
  }

  validate() {
    if(this.backupPlanStatistics && typeof (this.backupPlanStatistics as any).validate === 'function') {
      (this.backupPlanStatistics as any).validate();
    }
    if(this.replicationProgress && typeof (this.replicationProgress as any).validate === 'function') {
      (this.replicationProgress as any).validate();
    }
    if(this.sourceTypes && typeof (this.sourceTypes as any).validate === 'function') {
      (this.sourceTypes as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.trialInfo && typeof (this.trialInfo as any).validate === 'function') {
      (this.trialInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBodyVaults extends $dara.Model {
  vault?: DescribeVaultsResponseBodyVaultsVault[];
  static names(): { [key: string]: string } {
    return {
      vault: 'Vault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vault: { 'type': 'array', 'itemType': DescribeVaultsResponseBodyVaultsVault },
    };
  }

  validate() {
    if(Array.isArray(this.vault)) {
      $dara.Model.validateArray(this.vault);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Page number for pagination, starting from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, with a minimum value of 1, a maximum value of 99, and a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * - true: Success - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Returns the total number of backup repositories.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  /**
   * @remarks
   * The backup vaults.
   * 
   * @example
   * {\\"Vault\\": []}
   */
  vaults?: DescribeVaultsResponseBodyVaults;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      vaults: 'Vaults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      vaults: DescribeVaultsResponseBodyVaults,
    };
  }

  validate() {
    if(this.vaults && typeof (this.vaults as any).validate === 'function') {
      (this.vaults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

