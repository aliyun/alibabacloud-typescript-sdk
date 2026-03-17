// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics extends $dara.Model {
  archive?: number;
  commonFileSystem?: number;
  commonNas?: number;
  csg?: number;
  ecsFile?: number;
  ecsHana?: number;
  isilon?: number;
  localFile?: number;
  localVm?: number;
  mySql?: number;
  nas?: number;
  oracle?: number;
  oss?: number;
  ots?: number;
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
  historicalReplicationProgress?: number;
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

export class DescribeVaultsResponseBodyVaultsVaultRsTargetAccountIds extends $dara.Model {
  rsTargetAccountId?: number[];
  static names(): { [key: string]: string } {
    return {
      rsTargetAccountId: 'RsTargetAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rsTargetAccountId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.rsTargetAccountId)) {
      $dara.Model.validateArray(this.rsTargetAccountId);
    }
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
  key?: string;
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
  keepAfterTrialExpiration?: boolean;
  trialExpireTime?: number;
  trialStartTime?: number;
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
  archiveBytesDone?: number;
  archiveStorageSize?: number;
  backupPlanStatistics?: DescribeVaultsResponseBodyVaultsVaultBackupPlanStatistics;
  bucketName?: string;
  bytesDone?: number;
  chargeType?: string;
  chargedStorageSize?: number;
  compressionAlgorithm?: string;
  createdTime?: number;
  dedup?: boolean;
  description?: string;
  encryptType?: string;
  indexAvailable?: boolean;
  indexLevel?: string;
  indexUpdateTime?: number;
  kmsKeyId?: string;
  latestReplicationTime?: number;
  redundancyType?: string;
  replication?: boolean;
  replicationProgress?: DescribeVaultsResponseBodyVaultsVaultReplicationProgress;
  replicationSourceOwnerId?: number;
  replicationSourceRegionId?: string;
  replicationSourceVault?: boolean;
  replicationSourceVaultId?: string;
  replicationStatus?: string;
  replicationTargetOwnerId?: number;
  replicationTargetRegionId?: string;
  replicationTargetVaultId?: string;
  resourceGroupId?: string;
  retention?: number;
  rsTargetAccountIds?: DescribeVaultsResponseBodyVaultsVaultRsTargetAccountIds;
  searchEnabled?: boolean;
  snapshotCount?: number;
  sourceTypes?: DescribeVaultsResponseBodyVaultsVaultSourceTypes;
  status?: string;
  storageSize?: number;
  tags?: DescribeVaultsResponseBodyVaultsVaultTags;
  trialInfo?: DescribeVaultsResponseBodyVaultsVaultTrialInfo;
  updatedTime?: number;
  vaultId?: string;
  vaultName?: string;
  vaultOwnerId?: number;
  vaultRegionId?: string;
  vaultStatusMessage?: string;
  vaultStorageClass?: string;
  vaultType?: string;
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
      replicationSourceOwnerId: 'ReplicationSourceOwnerId',
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVault: 'ReplicationSourceVault',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      replicationStatus: 'ReplicationStatus',
      replicationTargetOwnerId: 'ReplicationTargetOwnerId',
      replicationTargetRegionId: 'ReplicationTargetRegionId',
      replicationTargetVaultId: 'ReplicationTargetVaultId',
      resourceGroupId: 'ResourceGroupId',
      retention: 'Retention',
      rsTargetAccountIds: 'RsTargetAccountIds',
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
      vaultOwnerId: 'VaultOwnerId',
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
      replicationSourceOwnerId: 'number',
      replicationSourceRegionId: 'string',
      replicationSourceVault: 'boolean',
      replicationSourceVaultId: 'string',
      replicationStatus: 'string',
      replicationTargetOwnerId: 'number',
      replicationTargetRegionId: 'string',
      replicationTargetVaultId: 'string',
      resourceGroupId: 'string',
      retention: 'number',
      rsTargetAccountIds: DescribeVaultsResponseBodyVaultsVaultRsTargetAccountIds,
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
      vaultOwnerId: 'number',
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
    if(this.rsTargetAccountIds && typeof (this.rsTargetAccountIds as any).validate === 'function') {
      (this.rsTargetAccountIds as any).validate();
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

