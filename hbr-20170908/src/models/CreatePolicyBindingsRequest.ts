// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonFileSystemDetail extends $dara.Model {
  /**
   * @remarks
   * The size of backup shards (the number of files).
   * 
   * @example
   * 100000
   */
  fetchSliceSize?: number;
  /**
   * @remarks
   * Specifies whether the system performs full backup if incremental backup fails. Valid values:
   * 
   * *   **true**: The system performs full backup if incremental backup fails.
   * *   **false**: The system does not perform full backup if incremental backup fails.
   * 
   * @example
   * true
   */
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonNasDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup client group. When you perform on-premises NAS backup, Cloud Backup selects clients from the specified backup client group.
   * 
   * @example
   * cl-000**************ggu
   */
  clusterId?: string;
  /**
   * @remarks
   * The size of backup shards (the number of files).
   * 
   * @example
   * 100000
   */
  fetchSliceSize?: number;
  /**
   * @remarks
   * Specifies whether the system performs full backup if incremental backup fails. Valid values:
   * 
   * *   **true**: The system performs full backup if incremental backup fails.
   * *   **false**: The system does not perform full backup if incremental backup fails.
   * 
   * @example
   * true
   */
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fetchSliceSize: 'number',
      fullOnIncrementFail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsFileDetail extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use an advanced policy. Valid values:
   * 
   * *   **true**: uses the advanced policy.
   * *   **false**: does not use the advanced policy.
   * 
   * @example
   * true
   */
  advPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Volume Shadow Copy Service (VSS) feature. Valid values:
   * 
   * *   **true**: enables the feature.
   * *   **false**: disables the feature.
   * 
   * @example
   * true
   */
  useVSS?: boolean;
  static names(): { [key: string]: string } {
    return {
      advPolicy: 'AdvPolicy',
      useVSS: 'UseVSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advPolicy: 'boolean',
      useVSS: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsOssDetail extends $dara.Model {
  /**
   * @remarks
   * Do not prompt for archival type objects in task statistics and failed file lists.
   * 
   * @example
   * true
   */
  ignoreArchiveObject?: boolean;
  /**
   * @remarks
   * Specifies whether the system deletes the inventory lists when a backup is completed. This parameter is valid only when OSS inventories are used. Valid values:
   * 
   * *   **NO_CLEANUP**: does not delete inventory lists.
   * *   **DELETE_CURRENT**: deletes the current inventory list.
   * *   **DELETE_CURRENT_AND_PREVIOUS**: deletes all inventory lists.
   * 
   * @example
   * NO_CLEANUP
   */
  inventoryCleanupPolicy?: string;
  /**
   * @remarks
   * The name of the OSS inventory. If this parameter is not empty, the OSS inventory is used for performance optimization.
   * 
   * *   If you want to back up more than 100 million OSS objects, we recommend that you use inventory lists to accelerate incremental backup. Storage fees for inventory lists are included into your OSS bills.
   * *   A certain amount of time is required for OSS to generate inventory lists. Before inventory lists are generated, OSS objects may fail to be backed up. In this case, you can back up the OSS objects in the next backup cycle.
   * 
   * @example
   * oss-inventory-default
   */
  inventoryId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreArchiveObject: 'IgnoreArchiveObject',
      inventoryCleanupPolicy: 'InventoryCleanupPolicy',
      inventoryId: 'InventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreArchiveObject: 'boolean',
      inventoryCleanupPolicy: 'string',
      inventoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsUdmDetail extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable application consistency. You can enable application consistency only if all disks are ESSDs.
   * 
   * @example
   * false
   */
  appConsistent?: boolean;
  /**
   * @remarks
   * The IDs of the disks that need to be protected. If all disks need to be protected, this parameter is empty.
   */
  diskIdList?: string[];
  /**
   * @remarks
   * This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to enable Linux fsfreeze to put file systems into the read-only state before application-consistent snapshots are created. Default value: true.
   * 
   * @example
   * true
   */
  enableFsFreeze?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to create application-consistent snapshots. Valid values:
   * 
   * *   true: creates application-consistent snapshots.
   * *   false: creates file system-consistent snapshots.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableWriters?: boolean;
  /**
   * @remarks
   * The IDs of the disks that do not need to be protected. If the DiskIdList parameter is not empty, this parameter is ignored.
   */
  excludeDiskIdList?: string[];
  /**
   * @remarks
   * This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the path of the post-thaw scripts that are executed after application-consistent snapshots are created.
   * 
   * @example
   * /tmp/postscript.sh
   */
  postScriptPath?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the path of the pre-freeze scripts that are executed before application-consistent snapshots are created.
   * 
   * @example
   * /tmp/prescript.sh
   */
  preScriptPath?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the name of the Resource Access Management (RAM) role that is required to create application-consistent snapshots.
   * 
   * @example
   * AliyunECSInstanceForHbrRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * Specifies whether to create a snapshot-consistent group. You can create a snapshot-consistent group only if all disks are Enterprise SSDs (ESSDs).
   * 
   * @example
   * true
   */
  snapshotGroup?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the I/O freeze timeout period. Default value: 30. Unit: seconds.
   * 
   * @example
   * 30
   */
  timeoutInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appConsistent: 'AppConsistent',
      diskIdList: 'DiskIdList',
      enableFsFreeze: 'EnableFsFreeze',
      enableWriters: 'EnableWriters',
      excludeDiskIdList: 'ExcludeDiskIdList',
      postScriptPath: 'PostScriptPath',
      preScriptPath: 'PreScriptPath',
      ramRoleName: 'RamRoleName',
      snapshotGroup: 'SnapshotGroup',
      timeoutInSeconds: 'TimeoutInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConsistent: 'boolean',
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      enableFsFreeze: 'boolean',
      enableWriters: 'boolean',
      excludeDiskIdList: { 'type': 'array', 'itemType': 'string' },
      postScriptPath: 'string',
      preScriptPath: 'string',
      ramRoleName: 'string',
      snapshotGroup: 'boolean',
      timeoutInSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskIdList)) {
      $dara.Model.validateArray(this.diskIdList);
    }
    if(Array.isArray(this.excludeDiskIdList)) {
      $dara.Model.validateArray(this.excludeDiskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingListAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * The advanced options for CPFS backup.
   */
  commonFileSystemDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonFileSystemDetail;
  /**
   * @remarks
   * The advanced options for on-premises NAS backup.
   */
  commonNasDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonNasDetail;
  /**
   * @remarks
   * The advanced options for file backup.
   */
  fileDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsFileDetail;
  /**
   * @remarks
   * The advanced options for Object Storage Service (OSS) backup.
   */
  ossDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsOssDetail;
  /**
   * @remarks
   * The advanced options for ECS instance backup.
   */
  udmDetail?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsUdmDetail;
  static names(): { [key: string]: string } {
    return {
      commonFileSystemDetail: 'CommonFileSystemDetail',
      commonNasDetail: 'CommonNasDetail',
      fileDetail: 'FileDetail',
      ossDetail: 'OssDetail',
      udmDetail: 'UdmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFileSystemDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonFileSystemDetail,
      commonNasDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsCommonNasDetail,
      fileDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsFileDetail,
      ossDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsOssDetail,
      udmDetail: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptionsUdmDetail,
    };
  }

  validate() {
    if(this.commonFileSystemDetail && typeof (this.commonFileSystemDetail as any).validate === 'function') {
      (this.commonFileSystemDetail as any).validate();
    }
    if(this.commonNasDetail && typeof (this.commonNasDetail as any).validate === 'function') {
      (this.commonNasDetail as any).validate();
    }
    if(this.fileDetail && typeof (this.fileDetail as any).validate === 'function') {
      (this.fileDetail as any).validate();
    }
    if(this.ossDetail && typeof (this.ossDetail as any).validate === 'function') {
      (this.ossDetail as any).validate();
    }
    if(this.udmDetail && typeof (this.udmDetail as any).validate === 'function') {
      (this.udmDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequestPolicyBindingList extends $dara.Model {
  /**
   * @remarks
   * The advanced options.
   */
  advancedOptions?: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptions;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether to back up and restore data within the same Alibaba Cloud account or across Alibaba Cloud accounts. Default value: SELF_ACCOUNT. Valid values:
   * 
   * *   **SELF_ACCOUNT**: backs up data within the same Alibaba Cloud account.
   * *   **CROSS_ACCOUNT**: backs up data across Alibaba Cloud accounts.
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 144**********732
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the data source. The meaning of this parameter depends on the **SourceType** parameter. Valid values:
   * 
   * *   **UDM_ECS**: the ID of the Elastic Compute Service (ECS) instance
   * *   **OSS**: the name of the Object Storage Service (OSS) bucket
   * *   **NAS**: the ID of the File Storage NAS (NAS) file system
   * *   **COMMON_NAS**: the ID of the on-premises NAS file system
   * *   **ECS_FILE**: the ID of the ECS instance
   * *   **File**: the ID of the Cloud Backup client
   * *   **COMMON_FILE_SYSTEM**: the ID of the Cloud Parallel File Storage (CPFS) backup data source
   * 
   * @example
   * i-bp1************dl8
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Specifies whether to disable the backup policy for the data source. Valid values:
   * 
   * *   true: disables the backup policy for the data source
   * *   false: enables the backup policy for the data source
   * 
   * @example
   * true
   */
  disabled?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE**, **File**, **NAS**, **COMMON_NAS**, or **COMMON_FILE_SYSTEM**. This parameter specifies the type of files that do not need to be backed up. No files of the specified type are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE**, **File**, **NAS**, **COMMON_NAS**, or **COMMON_FILE_SYSTEM**. This parameter specifies the type of files to be backed up. All files of the specified type are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  include?: string;
  /**
   * @remarks
   * The description of the association.
   * 
   * @example
   * Bind data sources to a backup policy
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * *   If the SourceType parameter is set to **OSS**, set the Source parameter to the prefix of the path to the folder that you want to back up. If you do not specify the Source parameter, the entire bucket (root directory) is backed up.
   * *   If the SourceType parameter is set to **ECS_FILE** or **File**, set the Source parameter to the path to the files that you want to back up. If you do not specify the Source parameter, all paths are backed up.
   * *   This parameter is required if the SourceType parameter is set to **COMMON_FILE_SYSTEM**. This parameter specifies the path to be backed up. To back up the /src path, enter ["/src"]. To back up the root path, enter ["/"].
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance
   * *   **OSS**: OSS bucket
   * *   **NAS**: NAS file system
   * *   **COMMON_NAS**: on-premises NAS file system
   * *   **ECS_FILE**: ECS file
   * *   **File**: on-premises file
   * *   **COMMON_FILE_SYSTEM**: CPFS file system
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the throttling rules. Format: `{start}{end}{bandwidth}`. Separate multiple throttling rules with vertical bars (|). The time ranges of the throttling rules cannot overlap.
   * 
   * *   **start**: the start hour.
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:1024
   */
  speedLimit?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      exclude: 'Exclude',
      include: 'Include',
      policyBindingDescription: 'PolicyBindingDescription',
      source: 'Source',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: CreatePolicyBindingsRequestPolicyBindingListAdvancedOptions,
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      disabled: 'string',
      exclude: 'string',
      include: 'string',
      policyBindingDescription: 'string',
      source: 'string',
      sourceType: 'string',
      speedLimit: 'string',
    };
  }

  validate() {
    if(this.advancedOptions && typeof (this.advancedOptions as any).validate === 'function') {
      (this.advancedOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The data sources that you want to bind to the backup policy.
   */
  policyBindingList?: CreatePolicyBindingsRequestPolicyBindingList[];
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************8ep
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyBindingList: 'PolicyBindingList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBindingList: { 'type': 'array', 'itemType': CreatePolicyBindingsRequestPolicyBindingList },
      policyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyBindingList)) {
      $dara.Model.validateArray(this.policyBindingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

