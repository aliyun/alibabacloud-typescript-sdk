// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateBackupPlanRequestRule extends $dara.Model {
  /**
   * @remarks
   * Backup type.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * ID of the region for offsite replication.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * Number of days to retain offsite backups.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Whether the rule is enabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Whether to enable offsite replication.
   * 
   * @example
   * true
   */
  doCopy?: boolean;
  /**
   * @remarks
   * Backup retention period.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * Backup strategy. Optional format: I|{startTime}|{interval}. This means that a backup task is executed every {interval} starting from {startTime}. Backup tasks for past times will not be executed. If the previous backup task has not been completed, the next backup task will not be triggered. For example, I|1631685600|P1D means a backup is performed every day starting from 2021-09-15 14:00:00.
   * 
   * - startTime: The start time of the backup, in UNIX time, in seconds.
   * - interval: ISO8601 time interval. For example, PT1H means an interval of one hour. P1D means an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanShrinkRequestRule extends $dara.Model {
  /**
   * @remarks
   * Backup type.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * ID of the region for offsite replication.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * Number of days to retain offsite backups.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Whether the rule is enabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Whether to enable offsite replication.
   * 
   * @example
   * true
   */
  doCopy?: boolean;
  /**
   * @remarks
   * Backup retention period.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * Backup strategy. Optional format: I|{startTime}|{interval}. This means that a backup task is executed every {interval} starting from {startTime}. Backup tasks for past times will not be executed. If the previous backup task has not been completed, the next backup task will not be triggered. For example, I|1631685600|P1D means a backup is performed every day starting from 2021-09-15 14:00:00.
   * 
   * - startTime: The start time of the backup, in UNIX time, in seconds.
   * - interval: ISO8601 time interval. For example, PT1H means an interval of one hour. P1D means an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBodyInstanceStatusesInstanceStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2zegp3cdu******uj9i
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether an HBR client can be installed on the ECS instance. Valid values:
   * 
   * *   true: An HBR client can be installed on the ECS instance.
   * *   false: An HBR client cannot be installed on the ECS instance.
   * 
   * @example
   * true
   */
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBodyInstanceStatuses extends $dara.Model {
  instanceStatus?: CreateClientsResponseBodyInstanceStatusesInstanceStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatus: { 'type': 'array', 'itemType': CreateClientsResponseBodyInstanceStatusesInstanceStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatus)) {
      $dara.Model.validateArray(this.instanceStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreatePolicyV2RequestRulesDataSourceFilters extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * The type of the data source. Valid value:
   * 
   * *   **UDM_ECS**: Elastic Compute Service (ECS) instance This type of data source is supported only if the **RuleType** parameter is set to **UDM_ECS_ONLY**.
   * *   **OSS**: Object Storage Service (OSS) bucket This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * *   **NAS**: File Storage NAS (NAS) file system This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * *   **ECS_FILE**: ECS file This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * *   **OTS**: Tablestore instance This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRulesRetentionRules extends $dara.Model {
  /**
   * @remarks
   * The type of the special retention rule. Valid values:
   * 
   * *   **DAILY**: retains daily backups
   * *   **WEEKLY**: retains weekly backups
   * *   **MONTHLY**: retains monthly backups
   * *   **YEARLY**: retains yearly backups
   * 
   * @example
   * YEARLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The special retention period of backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 730
   */
  retention?: number;
  /**
   * @remarks
   * Specifies which backup is retained based on the special retention rule. Only the first backup can be retained.
   * 
   * @example
   * 1
   */
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2RequestRulesTagFilters extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag-based matching rule. Valid values:
   * 
   * *   **EQUAL**: Both the tag key and tag value are matched.
   * *   **NOT**: The tag key is matched and the tag value is not matched.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The tag value. If you leave this parameter empty, the value is any value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class CreatePolicyV2RequestRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the data source filter rule.
   */
  dataSourceFilters?: CreatePolicyV2RequestRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is required only if the **PolicyType** parameter is set to **UDM_ECS_ONLY**. This parameter specifies whether to enable the immutable backup feature.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the feature of keeping at least one backup version. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **REPLICATION**. This parameter specifies the ID of the destination region.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TRANSITION** or **REPLICATION**.
   * 
   * *   If the **RuleType** parameter is set to **TRANSITION**, this parameter specifies the retention period of the backup data. Minimum value: 1. Maximum value: 364635. Unit: days.
   * *   If the **RuleType** parameter is set to **REPLICATION**, this parameter specifies the retention period of remote backups. Minimum value: 1. Maximum value: 364635. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the special retention rules.
   */
  retentionRules?: CreatePolicyV2RequestRulesRetentionRules[];
  /**
   * @remarks
   * The type of the rule. Each backup policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type. Valid values:
   * 
   * *   **BACKUP**: backup rule
   * *   **TRANSITION**: lifecycle rule
   * *   **REPLICATION**: replication rule
   * 
   * This parameter is required.
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup schedule settings. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of 1 hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the resource tag filter rule.
   */
  tagFilters?: CreatePolicyV2RequestRulesTagFilters[];
  /**
   * @remarks
   * This parameter is required only if the RuleType parameter is set to BACKUP. The ID of the backup vault.
   * 
   * @example
   * v-0001************aseg
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      dataSourceFilters: 'DataSourceFilters',
      immutable: 'Immutable',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleType: 'RuleType',
      schedule: 'Schedule',
      tagFilters: 'TagFilters',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      dataSourceFilters: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesDataSourceFilters },
      immutable: 'boolean',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesRetentionRules },
      ruleType: 'string',
      schedule: 'string',
      tagFilters: { 'type': 'array', 'itemType': CreatePolicyV2RequestRulesTagFilters },
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceFilters)) {
      $dara.Model.validateArray(this.dataSourceFilters);
    }
    if(Array.isArray(this.retentionRules)) {
      $dara.Model.validateArray(this.retentionRules);
    }
    if(Array.isArray(this.tagFilters)) {
      $dara.Model.validateArray(this.tagFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the backup vault. Valid values of N: 1 to 20.
   * 
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * TestKey
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
   * TestValue
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

export class DescribeBackupClientsShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the backup vault. Valid values of N: 1 to 20.
   * 
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * TestKey
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
   * TestValue
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

export class DescribeBackupClientsResponseBodyClientsSettings extends $dara.Model {
  /**
   * @remarks
   * Indicates whether alerts are generated for partially completed jobs. This parameter is valid only for on-premises file backup and ECS file backup.
   * 
   * @example
   * false
   */
  alertOnPartialComplete?: boolean;
  /**
   * @remarks
   * The type of the endpoint on the data plane. Valid values:
   * 
   * *   **PUBLIC**: Internet
   * *   **VPC**: virtual private cloud (VPC)
   * *   **CLASSIC**: classic network
   * 
   * @example
   * VPC
   */
  dataNetworkType?: string;
  /**
   * @remarks
   * The proxy configuration on the data plane. Valid values:
   * 
   * *   **DISABLE**: The proxy is not used.
   * *   **USE_CONTROL_PROXY** (default): The configuration is the same as that on the control plane.
   * *   **CUSTOM**: The configuration is customized (HTTP).
   * 
   * @example
   * USE_CONTROL_PROXY
   */
  dataProxySetting?: string;
  /**
   * @remarks
   * The number of CPU cores used by a single backup job. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxCpuCore?: string;
  /**
   * @remarks
   * The maximum memory that can be used by the client. Unit: bytes. Only V2.13.0 and later are supported.
   * 
   * @example
   * 0
   */
  maxMemory?: number;
  /**
   * @remarks
   * The number of concurrent backup jobs. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxWorker?: string;
  /**
   * @remarks
   * The custom host IP address of the proxy server on the data plane.
   * 
   * @example
   * 192.168.11.100
   */
  proxyHost?: string;
  /**
   * @remarks
   * The custom password of the proxy server on the data plane.
   * 
   * @example
   * ******
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The custom host port of the proxy server on the data plane.
   * 
   * @example
   * 3128
   */
  proxyPort?: number;
  /**
   * @remarks
   * The custom username of the proxy server on the data plane.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * Indicates whether data on the data plane is transmitted over HTTPS. Valid values:
   * 
   * *   true: Data is transmitted over HTTPS.
   * *   false: Data is transmitted over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: string;
  static names(): { [key: string]: string } {
    return {
      alertOnPartialComplete: 'AlertOnPartialComplete',
      dataNetworkType: 'DataNetworkType',
      dataProxySetting: 'DataProxySetting',
      maxCpuCore: 'MaxCpuCore',
      maxMemory: 'MaxMemory',
      maxWorker: 'MaxWorker',
      proxyHost: 'ProxyHost',
      proxyPassword: 'ProxyPassword',
      proxyPort: 'ProxyPort',
      proxyUser: 'ProxyUser',
      useHttps: 'UseHttps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOnPartialComplete: 'boolean',
      dataNetworkType: 'string',
      dataProxySetting: 'string',
      maxCpuCore: 'string',
      maxMemory: 'number',
      maxWorker: 'string',
      proxyHost: 'string',
      proxyPassword: 'string',
      proxyPort: 'number',
      proxyUser: 'string',
      useHttps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBodyClientsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the backup vault. Valid values of N: 1 to 20
   * 
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the backup vault. Valid values of N: 1 to 20
   * 
   * *   The tag value cannot start with `aliyun` or `acs:`.
   * *   The tag value cannot contain `http://` or `https://`.
   * *   The tag value cannot be an empty string.
   * 
   * @example
   * TestValue
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

export class DescribeBackupClientsResponseBodyClients extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the client is installed on an all-in-one PC that integrates hardware and monitoring program. Valid values:
   * 
   * *   true: The client is installed on an all-in-one PC that integrates hardware and monitoring program.
   * *   false: The client is not installed on an all-in-one PC that integrates hardware and monitoring program.
   * 
   * @example
   * false
   */
  appliance?: boolean;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the system architecture where the backup client resides. Valid values:
   * 
   * *   **amd64**
   * *   **386**
   * 
   * @example
   * amd64
   */
  archType?: string;
  /**
   * @remarks
   * The protection status of the backup client. Valid values:
   * 
   * *   **UNPROTECTED**: The backup client is not protected.
   * *   **PROTECTED**: The backup client is protected.
   * 
   * @example
   * PROTECTED
   */
  backupStatus?: string;
  /**
   * @remarks
   * The ID of the backup client.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The type of the backup client. Valid value: **ECS_CLIENT**, which indicates a client for ECS file backup.
   * 
   * @example
   * ECS_CLIENT
   */
  clientType?: string;
  /**
   * @remarks
   * The version number of the backup client.
   * 
   * @example
   * 2.4.5
   */
  clientVersion?: string;
  /**
   * @remarks
   * The time when the backup client was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The hostname of the backup client.
   * 
   * @example
   * hostname
   */
  hostname?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * *   If the client is used to back up ECS files, this parameter indicates the ID of an ECS instance.
   * *   If the client is used to back up on-premises files, this parameter indicates the hardware fingerprint that is generated based on the system information.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the name of the ECS instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The last heartbeat time of the backup client. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  lastHeartBeatTime?: number;
  /**
   * @remarks
   * The latest version number of the backup client.
   * 
   * @example
   * 2.4.5
   */
  maxClientVersion?: string;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the operating system type of the backup client. Valid values:
   * 
   * *   **windows**
   * *   **linux**
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the internal IP address of the ECS instance.
   * 
   * @example
   * 192.168.1.1
   */
  privateIpV4?: string;
  /**
   * @remarks
   * The configuration information of the backup client.
   */
  settings?: DescribeBackupClientsResponseBodyClientsSettings;
  /**
   * @remarks
   * The status of the backup client. Valid values:
   * 
   * *   **REGISTERED**: The backup client is registered.
   * *   **ACTIVATED**: The backup client is activated.
   * *   **DEACTIVATED**: The backup client fails to be activated.
   * *   **INSTALLING**: The backup client is being installed.
   * *   **INSTALL_FAILED**: The backup client fails to be installed.
   * *   **NOT_INSTALLED**: The backup client is not installed.
   * *   **UPGRADING**: The backup client is being upgraded.
   * *   **UPGRADE_FAILED**: The backup client fails to be upgraded.
   * *   **UNINSTALLING**: The backup client is being uninstalled.
   * *   **UNINSTALL_FAILED**: The backup client fails to be uninstalled.
   * *   **STOPPED**: The backup client is out of service.
   * *   **UNKNOWN**: The backup client is disconnected.
   * 
   * @example
   * ACTIVATED
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeBackupClientsResponseBodyClientsTags[];
  /**
   * @remarks
   * The time when the backup client was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the zone of the backup client.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appliance: 'Appliance',
      archType: 'ArchType',
      backupStatus: 'BackupStatus',
      clientId: 'ClientId',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      createdTime: 'CreatedTime',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lastHeartBeatTime: 'LastHeartBeatTime',
      maxClientVersion: 'MaxClientVersion',
      osType: 'OsType',
      privateIpV4: 'PrivateIpV4',
      settings: 'Settings',
      status: 'Status',
      tags: 'Tags',
      updatedTime: 'UpdatedTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliance: 'boolean',
      archType: 'string',
      backupStatus: 'string',
      clientId: 'string',
      clientType: 'string',
      clientVersion: 'string',
      createdTime: 'number',
      hostname: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lastHeartBeatTime: 'number',
      maxClientVersion: 'string',
      osType: 'string',
      privateIpV4: 'string',
      settings: DescribeBackupClientsResponseBodyClientsSettings,
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClientsTags },
      updatedTime: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2RequestFilters extends $dara.Model {
  /**
   * @remarks
   * The keys in the filter. Valid values:
   * 
   * *   **RegionId**: the ID of a region
   * *   **PlanId**: the ID of a backup plan
   * *   **JobId**: the ID of a backup job
   * *   **VaultId**: the ID of a backup vault
   * *   **InstanceId**: the ID of an ECS instance
   * *   **Bucket**: the name of an OSS bucket
   * *   **FileSystemId**: the ID of a file system
   * *   **Status**: the status of a backup job
   * *   **CreatedTime**: the start time of a backup job
   * *   **CompleteTime**: the end time of a backup job
   * *   **instanceName**: the name of a Tablestore instance
   * 
   * @example
   * VaultId
   */
  key?: string;
  /**
   * @remarks
   * The matching method. Default value: IN. This parameter specifies the operator that you want to use to match a key and a value in the filter. Valid values:
   * 
   * *   **EQUAL**: equal to
   * *   **NOT_EQUAL**: not equal to
   * *   **GREATER_THAN**: greater than
   * *   **GREATER_THAN_OR_EQUAL**: greater than or equal to
   * *   **LESS_THAN**: less than
   * *   **LESS_THAN_OR_EQUAL**: less than or equal to
   * *   **BETWEEN**: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,maximum value]` format.
   * *   **IN**: specifies an array as a collection. The results must fall within the collection.
   * 
   * >  If you specify **CompleteTime** as a key to query backup jobs, you cannot use the IN operator to perform a match.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * The values that you want to match in the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList extends $dara.Model {
  diskNativeSnapshotId?: string[];
  static names(): { [key: string]: string } {
    return {
      diskNativeSnapshotId: 'DiskNativeSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskNativeSnapshotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.diskNativeSnapshotId)) {
      $dara.Model.validateArray(this.diskNativeSnapshotId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail extends $dara.Model {
  /**
   * @remarks
   * The information about the remote replication failure.
   * 
   * @example
   * ECS.CreatingSnapshot
   */
  destinationNativeSnapshotErrorMessage?: string;
  /**
   * @remarks
   * The ID of the remote replication snapshot.
   * 
   * @example
   * s-******************
   */
  destinationNativeSnapshotId?: string;
  /**
   * @remarks
   * The progress of the remote replication.
   * 
   * @example
   * 85
   */
  destinationNativeSnapshotProgress?: number;
  /**
   * @remarks
   * The state of the remote replication.
   * 
   * @example
   * COMPLETE
   */
  destinationNativeSnapshotStatus?: string;
  /**
   * @remarks
   * The retention period of the remote replication backup.
   * 
   * @example
   * 30
   */
  destinationRetention?: number;
  /**
   * @remarks
   * The ID of the remote replication backup.
   * 
   * @example
   * s-******************
   */
  destinationSnapshotId?: string;
  /**
   * @remarks
   * The mapping between snapshots and disks.
   */
  diskNativeSnapshotIdList?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList;
  /**
   * @remarks
   * Indicates whether remote replication is enabled.
   * 
   * @example
   * true
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The ecs instance infos.
   */
  instanceInfos?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-******************
   */
  nativeSnapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationNativeSnapshotErrorMessage: 'DestinationNativeSnapshotErrorMessage',
      destinationNativeSnapshotId: 'DestinationNativeSnapshotId',
      destinationNativeSnapshotProgress: 'DestinationNativeSnapshotProgress',
      destinationNativeSnapshotStatus: 'DestinationNativeSnapshotStatus',
      destinationRetention: 'DestinationRetention',
      destinationSnapshotId: 'DestinationSnapshotId',
      diskNativeSnapshotIdList: 'DiskNativeSnapshotIdList',
      doCopy: 'DoCopy',
      instanceInfos: 'InstanceInfos',
      nativeSnapshotId: 'NativeSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationNativeSnapshotErrorMessage: 'string',
      destinationNativeSnapshotId: 'string',
      destinationNativeSnapshotProgress: 'number',
      destinationNativeSnapshotStatus: 'string',
      destinationRetention: 'number',
      destinationSnapshotId: 'string',
      diskNativeSnapshotIdList: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList,
      doCopy: 'boolean',
      instanceInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nativeSnapshotId: 'string',
    };
  }

  validate() {
    if(this.diskNativeSnapshotIdList && typeof (this.diskNativeSnapshotIdList as any).validate === 'function') {
      (this.diskNativeSnapshotIdList as any).validate();
    }
    if(this.instanceInfos) {
      $dara.Model.validateMap(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames extends $dara.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableName)) {
      $dara.Model.validateArray(this.tableName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail extends $dara.Model {
  /**
   * @remarks
   * The names of the destination tables in the Tablestore instance.
   */
  tableNames?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames,
    };
  }

  validate() {
    if(this.tableNames && typeof (this.tableNames as any).validate === 'function') {
      (this.tableNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJob extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data that is backed up after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: number;
  /**
   * @remarks
   * The number of files that are actually processed.
   * 
   * @example
   * 8
   */
  actualFiles?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the actual number of objects that are backed up by the backup job.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **OSS**. This parameter indicates the name of the OSS bucket that is backed up.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The actual amount of data that is generated by incremental backups. Unit: bytes.
   * 
   * @example
   * 800
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total amount of data that is backed up from the data source. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The data source details at the destination. Thisparameter is returned only for data synchronization.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the ID of the backup client.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the backup job was completed. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  completeTime?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup job was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
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
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * Destination data source details. (Required only for synchronization)
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetail?: string;
  /**
   * @remarks
   * Destination data source ID. (Required only for synchronization)
   * 
   * @example
   * ds-000cov4ufudxklj24zdk
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * Destination data source type. (Required only for synchronization)
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * The udm backup job detail.
   */
  detail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail;
  /**
   * @remarks
   * The error message that is returned for the backup job.
   * 
   * @example
   * PARTIAL_COMPLETE
   */
  errorMessage?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the paths to the files that are excluded from the backup job. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the ID of the NAS file system.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of files that have been processed.
   * 
   * @example
   * 9
   */
  filesDone?: number;
  /**
   * @remarks
   * The total number of files to be processed.
   * 
   * @example
   * 10
   */
  filesTotal?: number;
  /**
   * @remarks
   * The identifier of the container cluster. For a Container Service for Kubernetes (ACK) cluster, specify the cluster ID.
   * 
   * @example
   * c83**************************b76
   */
  identifier?: string;
  /**
   * @remarks
   * The paths to the files that are included in the backup job.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the ID of the ECS instance.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the number of objects that are backed up.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the total number of objects in the data source.
   * 
   * @example
   * 10
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-000g********w7
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the backup job.
   * 
   * @example
   * jobname
   */
  jobName?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates whether Windows VSS is used to define a backup path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before the system sets this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot back up data from multiple directories.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail;
  /**
   * @remarks
   * The backup paths.
   */
  paths?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * plan-20********35
   */
  planId?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **OSS**. This parameter indicates the prefix of objects that are backed up.
   * 
   * @example
   * example/
   */
  prefix?: string;
  /**
   * @remarks
   * The backup progress. For example, 10000 indicates that the progress is 100%.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: OSS buckets
   * *   **NAS**: NAS file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The average speed at which data is backed up. Unit: KB/s.
   * 
   * @example
   * 500
   */
  speed?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the throttling rules. Format: `{start}{end}{bandwidth}`. Multiple throttling rules are separated with vertical bars (`{start}|{end}|{bandwidth}`). A specified time range cannot overlap with another one.
   * 
   * *   **start**: the start hour
   * *   **end**: the end hour
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * The time when the backup job started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The restore job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The name of a destination table in the Tablestore instance.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the backup job was updated. This value is a UNIX timestamp. Unit: seconds.
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
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualFiles: 'ActualFiles',
      actualItems: 'ActualItems',
      backupType: 'BackupType',
      bucket: 'Bucket',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      filesDone: 'FilesDone',
      filesTotal: 'FilesTotal',
      identifier: 'Identifier',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      jobName: 'JobName',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      prefix: 'Prefix',
      progress: 'Progress',
      sourceType: 'SourceType',
      speed: 'Speed',
      speedLimit: 'SpeedLimit',
      startTime: 'StartTime',
      status: 'Status',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualFiles: 'number',
      actualItems: 'number',
      backupType: 'string',
      bucket: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      changeListPath: 'string',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail,
      errorMessage: 'string',
      exclude: 'string',
      fileSystemId: 'string',
      filesDone: 'number',
      filesTotal: 'number',
      identifier: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      jobName: 'string',
      options: 'string',
      otsDetail: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail,
      paths: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths,
      planId: 'string',
      prefix: 'string',
      progress: 'number',
      sourceType: 'string',
      speed: 'number',
      speedLimit: 'string',
      startTime: 'number',
      status: 'string',
      tableName: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobs extends $dara.Model {
  backupJob?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJob[];
  static names(): { [key: string]: string } {
    return {
      backupJob: 'BackupJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJob: { 'type': 'array', 'itemType': DescribeBackupJobs2ResponseBodyBackupJobsBackupJob },
    };
  }

  validate() {
    if(Array.isArray(this.backupJob)) {
      $dara.Model.validateArray(this.backupJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The keys in the filter. Valid values:
   * 
   * *   **regionId**: the ID of a region
   * *   **planId**: the ID of a backup plan
   * *   **sourceType**: the type of a data source
   * *   **vaultId**: the ID of a backup vault
   * *   **instanceName**: the name of an instance
   * *   **instanceId**: the ID of an instance
   * *   **planName**: the name of a backup plan
   * 
   * @example
   * vaultId
   */
  key?: string;
  /**
   * @remarks
   * The values that you want to match in the filter.
   * 
   * @example
   * ["v-*********************"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The tag-based matching rule. Valid values:
   * 
   * *   **EQUAL**: Both the tag key and tag value are matched.
   * *   **NOT**: The tag key is matched and the tag value is not matched.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags extends $dara.Model {
  hitTag?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag[];
  static names(): { [key: string]: string } {
    return {
      hitTag: 'HitTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitTag: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTagsHitTag },
    };
  }

  validate() {
    if(Array.isArray(this.hitTag)) {
      $dara.Model.validateArray(this.hitTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames extends $dara.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableName)) {
      $dara.Model.validateArray(this.tableName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail extends $dara.Model {
  /**
   * @remarks
   * The names of the tables in the Tablestore instance.
   */
  tableNames?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetailTableNames,
    };
  }

  validate() {
    if(this.tableNames && typeof (this.tableNames as any).validate === 'function') {
      (this.tableNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource extends $dara.Model {
  /**
   * @remarks
   * Additional information about the data source.
   * 
   * @example
   * {\\"doBackup\\":false,\\"diskName\\":\\"data_disk\\",\\"size\\":100,\\"type\\":\\"data\\",\\"category\\":\\"cloud_essd\\",\\"imageId\\":\\"\\",\\"device\\":\\"/dev/xvdb\\",\\"encrypted\\":false}
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * d-j6cgioir6m******lu4
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the data source. Valid value: **UDM_DISK**.
   * 
   * @example
   * UDMDISK
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      resourceId: 'ResourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      resourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources extends $dara.Model {
  resource?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the region in which the remote backup vault resides.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of the backup data in remote backup mode. Unit: days.
   * 
   * @example
   * 90
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Indicates whether the policy is disabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Indicates whether the snapshot data is backed up to the backup vault.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 90
   */
  retention?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * rule-0008i52rf0ulpni6kn6m
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Disk Golden Rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified by `{startTime}` and the subsequent backup jobs at an interval that is specified by `{interval}`. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   `startTime`: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   `interval`: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1631685600|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleId: 'string',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules extends $dara.Model {
  rule?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlanRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo extends $dara.Model {
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

export class DescribeBackupPlansResponseBodyBackupPlansBackupPlan extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source group.
   * 
   * @example
   * System-Database
   */
  backupSourceGroupId?: string;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **OSS**. This parameter indicates the name of the OSS bucket.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The configurations of the incremental file synchronization. This parameter is returned only for data synchronization.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The ID of the backup client.
   * 
   * @example
   * c-000ge4w*****1qb
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the client group.
   * 
   * @example
   * cl-000ht6o9******h
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether a backup plan is automatically created based on tags.
   * 
   * @example
   * false
   */
  createdByTag?: boolean;
  /**
   * @remarks
   * The time when the backup plan was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Indicates whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT
   * *   CROSS_ACCOUNT
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 1841642xxxxx9795
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * ds-000ht6o9*****w61
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source details at the destination. This parameter is returned only for data synchronization.
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetail?: string;
  /**
   * @remarks
   * The data source ID at the destination. This parameter is returned only for data synchronization.
   * 
   * @example
   * ds-*********************
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The data source type at the destination. This parameter is returned only for data synchronization.
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * The details about ECS instance backup.
   * 
   * @example
   * {\\"doCopy\\":true,\\"doBackup\\":false,\\"instanceName\\":\\"instance example\\",\\"appConsistent\\":false,\\"destinationRegionId\\":\\"cn-shanghai\\",\\"enableFsFreeze\\":true,\\"osNameEn\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"osName\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"diskIdList\\":[],\\"backupVaultId\\":\\"\\",\\"snapshotGroup\\":true,\\"destinationRetention\\":35,\\"platform\\":\\"Windows Server 2012\\",\\"timeoutInSeconds\\":60,\\"backupRetention\\":1,\\"osType\\":\\"windows\\",\\"preScriptPath\\":\\"\\",\\"postScriptPath\\":\\"\\",\\"enableWriters\\":true,\\"ecsDeleted\\":false}
   */
  detail?: string;
  /**
   * @remarks
   * Indicates whether the backup plan is disabled. Valid values:
   * 
   * *   true: The backup plan is disabled.
   * *   false: The backup plan is enabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the paths to the files that are excluded from the backup job.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the ID of the NAS file system.
   * 
   * @example
   * 00594
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The matched tag rules.
   */
  hitTags?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the paths to the files that are backed up.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * i-**
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the ID of the ECS instance.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the feature of keeping at least one backup version is enabled. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 0
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * The latest execution job id of plan.
   * 
   * @example
   * job-12345678
   */
  latestExecuteJobId?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates whether Windows Volume Shadow Copy Service (VSS) is used to define a source path.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail;
  /**
   * @remarks
   * The source paths. This parameter is valid only when **SourceType** is set to **ECS_FILE**.
   */
  paths?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **OSS**. This parameter indicates the prefix of the objects that are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The backup resources. This parameter is valid only for disk backup.
   */
  resources?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The backup policies. This parameter is valid only for disk backup.
   */
  rules?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified by `{startTime}` and the subsequent backup jobs at an interval that is specified by `{interval}`. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   **startTime**: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   **interval**: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: OSS buckets
   * *   **NAS**: NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **ECS_FILE**. This parameter indicates the throttling rules. Format: `{start}|{end}|{bandwidth}`. Multiple throttling rules are separated with vertical bars (`|`). A time range cannot overlap with another one.
   * 
   * *   start: the start hour.
   * *   end: the end hour.
   * *   bandwidth: the bandwidth. Unit: KB.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * The free trial information.
   */
  trialInfo?: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo;
  /**
   * @remarks
   * The time when the backup plan was updated. This value is a UNIX timestamp. Unit: seconds.
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
  static names(): { [key: string]: string } {
    return {
      backupSourceGroupId: 'BackupSourceGroupId',
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      createdByTag: 'CreatedByTag',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      hitTags: 'HitTags',
      include: 'Include',
      instanceGroupId: 'InstanceGroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      latestExecuteJobId: 'LatestExecuteJobId',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      resources: 'Resources',
      retention: 'Retention',
      rules: 'Rules',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      trialInfo: 'TrialInfo',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSourceGroupId: 'string',
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      clientId: 'string',
      clusterId: 'string',
      createTime: 'number',
      createdByTag: 'boolean',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      hitTags: DescribeBackupPlansResponseBodyBackupPlansBackupPlanHitTags,
      include: 'string',
      instanceGroupId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      latestExecuteJobId: 'string',
      options: 'string',
      otsDetail: DescribeBackupPlansResponseBodyBackupPlansBackupPlanOtsDetail,
      paths: DescribeBackupPlansResponseBodyBackupPlansBackupPlanPaths,
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      resources: DescribeBackupPlansResponseBodyBackupPlansBackupPlanResources,
      retention: 'number',
      rules: DescribeBackupPlansResponseBodyBackupPlansBackupPlanRules,
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      trialInfo: DescribeBackupPlansResponseBodyBackupPlansBackupPlanTrialInfo,
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.hitTags && typeof (this.hitTags as any).validate === 'function') {
      (this.hitTags as any).validate();
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
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

export class DescribeBackupPlansResponseBodyBackupPlans extends $dara.Model {
  backupPlan?: DescribeBackupPlansResponseBodyBackupPlansBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      backupPlan: 'BackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlan: { 'type': 'array', 'itemType': DescribeBackupPlansResponseBodyBackupPlansBackupPlan },
    };
  }

  validate() {
    if(Array.isArray(this.backupPlan)) {
      $dara.Model.validateArray(this.backupPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyClientsClient extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * @example
   * c-00062uu******2fgj
   */
  clientId?: string;
  /**
   * @remarks
   * The client name.
   * 
   * @example
   * client-20211224-101226
   */
  clientName?: string;
  /**
   * @remarks
   * The type of the Cloud Backup client. Valid value: **ECS_AGENT**, which indicates an SAP HANA backup client.
   * 
   * @example
   * ECS_AGENT
   */
  clientType?: string;
  /**
   * @remarks
   * The version number of the Cloud Backup client.
   * 
   * @example
   * 1.11.16
   */
  clientVersion?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0008c48frr******ncpk
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the Cloud Backup client was created.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9b6wya******n8yo
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * swh-hbr
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum version number of the Cloud Backup client.
   * 
   * @example
   * 1.11.23
   */
  maxVersion?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **CLASSIC**: the classic network
   * *   **VPC**: the virtual private cloud (VPC)
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the Cloud Backup client. Valid values:
   * 
   * *   **REGISTERED**: The backup client is registered.
   * *   **ACTIVATED**: The backup client is activated.
   * *   **DEACTIVATED**: The backup client fails to be activated.
   * *   **INSTALLING**: The backup client is being installed.
   * *   **INSTALL_FAILED**: The backup client fails to be installed.
   * *   **NOT_INSTALLED**: The backup client is not installed.
   * *   **UPGRADING**: The backup client is being upgraded.
   * *   **UPGRADE_FAILED**: The backup client fails to be upgraded.
   * *   **UNINSTALLING**: The backup client is being uninstalled.
   * *   **UNINSTALL_FAILED**: The backup client fails to be uninstalled.
   * *   **STOPPED**: The backup client is out of service.
   * *   **UNKNOWN**: The backup client is disconnected.
   * 
   * @example
   * ACTIVATED
   */
  status?: string;
  /**
   * @remarks
   * The status information.
   * 
   * @example
   * HANA_NOT_SUPPORT
   */
  statusMessage?: string;
  /**
   * @remarks
   * The time when the Cloud Backup client was updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * Indicates whether data is transmitted over HTTPS. Valid values:
   * 
   * *   true: Data is transmitted over HTTPS.
   * *   false: Data is transmitted over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-00029mx6o******n85lg
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxVersion: 'MaxVersion',
      networkType: 'NetworkType',
      status: 'Status',
      statusMessage: 'StatusMessage',
      updatedTime: 'UpdatedTime',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientId: 'string',
      clientName: 'string',
      clientType: 'string',
      clientVersion: 'string',
      clusterId: 'string',
      createdTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      maxVersion: 'string',
      networkType: 'string',
      status: 'string',
      statusMessage: 'string',
      updatedTime: 'number',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyClients extends $dara.Model {
  client?: DescribeClientsResponseBodyClientsClient[];
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: { 'type': 'array', 'itemType': DescribeClientsResponseBodyClientsClient },
    };
  }

  validate() {
    if(Array.isArray(this.client)) {
      $dara.Model.validateArray(this.client);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The status of the client. Valid values:
   * 
   * *   **MISS**: The client is disconnected.
   * *   **UNKNOWN**: The client is in an unknown state.
   * *   **READY**: The client is ready.
   * 
   * @example
   * READY
   */
  agentStatus?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cl-0006gwppd0jtttpmb0ri
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. Valid value: ACK, which indicates ACK clusters.
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description ack pv backup
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the cluster.
   * 
   * @example
   * c5bbd0931a30947f4ab85efd19380a72d
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ack_pv_backup_location
   */
  name?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **CLASSIC**: the classic network
   * *   **VPC**: virtual private cloud (VPC)
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The token that is used to register the Hybrid Backup Recovery (HBR) client in the cluster.
   * 
   * @example
   * eyJhY2Nvd******A/VnZpgXQC5A==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      description: 'Description',
      identifier: 'Identifier',
      name: 'Name',
      networkType: 'NetworkType',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      clusterId: 'string',
      clusterType: 'string',
      description: 'string',
      identifier: 'string',
      name: 'string',
      networkType: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount extends $dara.Model {
  /**
   * @remarks
   * The account alias. The value can be up to 32 bits in length.
   * 
   * @example
   * content
   */
  alias?: string;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1654570439
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 15897534xxxxx625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the backup type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the current account.
   * 
   * @example
   * 184164xxxxx49795
   */
  ownerId?: number;
  /**
   * @remarks
   * The time when the account information was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1640157098
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountUserId: 'CrossAccountUserId',
      id: 'Id',
      ownerId: 'OwnerId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountUserId: 'number',
      id: 'number',
      ownerId: 'number',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBodyCrossAccounts extends $dara.Model {
  crossAccount?: DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount[];
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: { 'type': 'array', 'itemType': DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount },
    };
  }

  validate() {
    if(Array.isArray(this.crossAccount)) {
      $dara.Model.validateArray(this.crossAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan extends $dara.Model {
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * COMPLETE_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   COMPLETE: full backup
   * *   INCREMENTAL: incremental backup
   * *   DIFFERENTIAL: differential backup
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0002scknka*****
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether the backup plan is disabled. Valid values:
   * 
   * *   true: The backup plan is disabled.
   * *   false: The backup plan is enabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * pl-0000tnyndg3ne5m4ubeu
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * plan-20220118-141153
   */
  planName?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000csihw82pqkd7hcjws
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      planId: 'PlanId',
      planName: 'PlanName',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      backupType: 'string',
      clusterId: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      planId: 'string',
      planName: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBodyHanaBackupPlans extends $dara.Model {
  hanaBackupPlan?: DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      hanaBackupPlan: 'HanaBackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaBackupPlan: { 'type': 'array', 'itemType': DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan },
    };
  }

  validate() {
    if(Array.isArray(this.hanaBackupPlan)) {
      $dara.Model.validateArray(this.hanaBackupPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponseBodyHanaBackupSetting extends $dara.Model {
  /**
   * @remarks
   * The configuration file for catalog backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  catalogBackupParameterFile?: string;
  /**
   * @remarks
   * Indicates whether Backint is used to back up catalogs. Valid values:
   * 
   * *   true: Backint is used to back up catalogs.
   * *   false: Backint is not used to back up catalogs.
   * 
   * @example
   * false
   */
  catalogBackupUsingBackint?: boolean;
  /**
   * @remarks
   * The configuration file for data backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  dataBackupParameterFile?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether automatic log backup is enabled. Valid values:
   * 
   * *   **true**: Automatic log backup is enabled.
   * *   **false**: Automatic log backup is disabled.
   * 
   * @example
   * true
   */
  enableAutoLogBackup?: boolean;
  /**
   * @remarks
   * The configuration file for log backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  logBackupParameterFile?: string;
  /**
   * @remarks
   * The interval at which logs are backed up. Unit: seconds.
   * 
   * @example
   * 900
   */
  logBackupTimeout?: number;
  /**
   * @remarks
   * Indicates whether Backint is used to back up logs. Valid values:
   * 
   * *   true: Backint is used to back up logs.
   * *   false: Backint is not used to back up logs.
   * 
   * @example
   * true
   */
  logBackupUsingBackint?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogBackupParameterFile: 'CatalogBackupParameterFile',
      catalogBackupUsingBackint: 'CatalogBackupUsingBackint',
      dataBackupParameterFile: 'DataBackupParameterFile',
      databaseName: 'DatabaseName',
      enableAutoLogBackup: 'EnableAutoLogBackup',
      logBackupParameterFile: 'LogBackupParameterFile',
      logBackupTimeout: 'LogBackupTimeout',
      logBackupUsingBackint: 'LogBackupUsingBackint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBackupParameterFile: 'string',
      catalogBackupUsingBackint: 'boolean',
      dataBackupParameterFile: 'string',
      databaseName: 'string',
      enableAutoLogBackup: 'boolean',
      logBackupParameterFile: 'string',
      logBackupTimeout: 'number',
      logBackupUsingBackint: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the database is started. Valid values:
   * 
   * *   **YES**: The database is started.
   * *   **NO**: The database is not started.
   * 
   * @example
   * YES
   */
  activeStatus?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The detailed information.
   * 
   * @example
   * master
   */
  detail?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * izbp1jbf3zy******antqmz
   */
  host?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * indexserver
   */
  serviceName?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 30013
   */
  sqlPort?: number;
  static names(): { [key: string]: string } {
    return {
      activeStatus: 'ActiveStatus',
      databaseName: 'DatabaseName',
      detail: 'Detail',
      host: 'Host',
      serviceName: 'ServiceName',
      sqlPort: 'SqlPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeStatus: 'string',
      databaseName: 'string',
      detail: 'string',
      host: 'string',
      serviceName: 'string',
      sqlPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBodyHanaDatabases extends $dara.Model {
  hanaDatabase?: DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase[];
  static names(): { [key: string]: string } {
    return {
      hanaDatabase: 'HanaDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaDatabase: { 'type': 'array', 'itemType': DescribeHanaDatabasesResponseBodyHanaDatabasesHanaDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.hanaDatabase)) {
      $dara.Model.validateArray(this.hanaDatabase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ace:rm:rgld
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * rg-acfmwutpyat2kwy
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

export class DescribeHanaInstancesResponseBodyHanasHanaTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ace:rm:rgld
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * rg-acfmwutpyat2kwy
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

export class DescribeHanaInstancesResponseBodyHanasHanaTags extends $dara.Model {
  tag?: DescribeHanaInstancesResponseBodyHanasHanaTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeHanaInstancesResponseBodyHanasHanaTagsTag },
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

export class DescribeHanaInstancesResponseBodyHanasHana extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0004cf6g6******0yd7y
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   **SELF_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
   * *   **CROSS_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The name of the SAP HANA instance.
   * 
   * @example
   * HANA-DEV
   */
  hanaName?: string;
  /**
   * @remarks
   * The private or internal IP address of the host where the primary node of the SAP HANA instance resides.
   * 
   * @example
   * 47.100.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The instance number of the SAP HANA system.
   * 
   * @example
   * 00
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmvnf22m7itha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the SAP HANA instance. Valid values:
   * 
   * *   INITIALIZING: The instance is being initialized.
   * *   INITIALIZED: The instance is registered.
   * *   INVALID_HANA_NODE: The instance is invalid.
   * *   INITIALIZE_FAILED: The client fails to be installed on the instance.
   * 
   * @example
   * INITIALIZED
   */
  status?: number;
  /**
   * @remarks
   * The status information.
   * 
   * @example
   * INSTALL_CLIENT_FAILED
   */
  statusMessage?: string;
  /**
   * @remarks
   * The tags of the SAP HANA instance.
   */
  tags?: DescribeHanaInstancesResponseBodyHanasHanaTags;
  /**
   * @remarks
   * Indicates whether the SAP HANA instance is connected over Secure Sockets Layer (SSL). Valid values:
   * 
   * *   true: The SAP HANA instance is connected over SSL.
   * *   false: The SAP HANA instance is not connected over SSL.
   * 
   * @example
   * true
   */
  useSsl?: boolean;
  /**
   * @remarks
   * The username of the SYSTEMDB database.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate of the SAP HANA instance is verified.
   * 
   * @example
   * false
   */
  validateCertificate?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0000s974******1hl
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      resourceGroupId: 'string',
      status: 'number',
      statusMessage: 'string',
      tags: DescribeHanaInstancesResponseBodyHanasHanaTags,
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponseBodyHanas extends $dara.Model {
  hana?: DescribeHanaInstancesResponseBodyHanasHana[];
  static names(): { [key: string]: string } {
    return {
      hana: 'Hana',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hana: { 'type': 'array', 'itemType': DescribeHanaInstancesResponseBodyHanasHana },
    };
  }

  validate() {
    if(Array.isArray(this.hana)) {
      $dara.Model.validateArray(this.hana);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 1635315505
   */
  backupID?: number;
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * INC_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * Indicates whether the differential backup and log backup are validated. Valid values:
   * 
   * *   true: Cloud Backup checks whether the required differential backup and log backup are available before the restore job starts. If the differential backup or log backup is unavailable, Cloud Backup does not start the restore job.
   * *   false: Cloud Backup does not check whether the required differential backup and log backup are available before the restore job starts.
   * 
   * @example
   * true
   */
  checkAccess?: boolean;
  /**
   * @remarks
   * Indicates whether all log entries are deleted from the log area after the log entries are restored. Valid values: true and false. If the return value is false, all log entries are deleted from the log area after the log entries are restored.
   * 
   * @example
   * true
   */
  clearLog?: boolean;
  /**
   * @remarks
   * The ID of the SAP HANA instance that is restored.
   * 
   * @example
   * cl-000923yu******p00j4
   */
  clusterId?: string;
  /**
   * @remarks
   * The current recovery phase. This value is obtained from SAP HANA.
   * 
   * @example
   * 2
   */
  currentPhase?: number;
  /**
   * @remarks
   * The current progress. This value is obtained from SAP HANA.
   * 
   * @example
   * 1
   */
  currentProgress?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * BWD
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the database recovery.
   * 
   * @example
   * 1644038961030
   */
  databaseRestoreId?: number;
  /**
   * @remarks
   * The time when the restore job ends. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1634356382
   */
  endTime?: number;
  /**
   * @remarks
   * The log position to which the database is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  logPosition?: number;
  /**
   * @remarks
   * The maximum recovery phase. This value is obtained from SAP HANA.
   * 
   * @example
   * 4
   */
  maxPhase?: number;
  /**
   * @remarks
   * The maximum progress. This value is obtained from SAP HANA.
   * 
   * @example
   * 1
   */
  maxProgress?: number;
  /**
   * @remarks
   * The details of the recovery phase.
   * 
   * @example
   * SQL Error 448 - recovery could not be completed:
   */
  message?: string;
  /**
   * @remarks
   * The recovery mode. Valid values:
   * 
   * *   **RECOVERY_TO_MOST_RECENT**: The database is restored to the recently available state to which the database has been backed up.
   * *   **RECOVERY_TO_POINT_IN_TIME**: The database is restored to a specified point in time.
   * *   **RECOVERY_TO_SPECIFIC_BACKUP**: The database is restored to a specified backup.
   * *   **RECOVERY_TO_LOG_POSITION**: The database is restored to a specified log position.
   * 
   * @example
   * RECOVERY_TO_SPECIFIC_BACKUP
   */
  mode?: string;
  /**
   * @remarks
   * The recovery phase.
   * 
   * @example
   * restart
   */
  phase?: string;
  /**
   * @remarks
   * The point in time at which the database is restored.
   * 
   * @example
   * 1635315505
   */
  reachedTime?: number;
  /**
   * @remarks
   * The point in time to which the database is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_POINT_IN_TIME**. Cloud Backup restores the database to a state closest to the specified point in time.
   * 
   * @example
   * 1649851200
   */
  recoveryPointInTime?: number;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-000c1en183ayn9sesgqh
   */
  restoreId?: string;
  /**
   * @remarks
   * The name of the source system. This parameter indicates the name of the source database that is restored. Format: `<Source database name>@SID`.
   * 
   * @example
   * PRD@H4P
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source SAP HANA instance.
   * 
   * @example
   * cl-0000g3mvy******5cj
   */
  sourceClusterId?: string;
  /**
   * @remarks
   * The time when the restore job starts. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1636970413
   */
  startTime?: number;
  /**
   * @remarks
   * The recovery status. This value is obtained from SAP HANA.
   * 
   * @example
   * successful
   */
  state?: string;
  /**
   * @remarks
   * The status of the restore job. Valid values:
   * 
   * *   **RUNNING**: The job is running.
   * *   **COMPLETE**: The job is completed.
   * *   **PARTIAL_COMPLETE**: The job is partially completed.
   * *   **FAILED**: The job failed.
   * *   **CANCELED**: The job is canceled.
   * *   **EXPIRED**: The job timed out.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the database is restored to a different instance. Valid values:
   * 
   * *   true: The database is restored to a different instance.
   * *   false: The database is restored within the same instance.
   * 
   * @example
   * true
   */
  systemCopy?: boolean;
  /**
   * @remarks
   * Indicates whether a catalog backup is used to restore the database. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_SPECIFIC_BACKUP**. If the return value is false, Cloud Backup finds the backup file based on the specified prefix and then restores the backup file.
   * 
   * @example
   * false
   */
  useCatalog?: boolean;
  /**
   * @remarks
   * Indicates whether a differential backup or an incremental backup is used to restore the database. Valid values: true and false. If the return value is true, Cloud Backup uses a differential backup or an incremental backup to restore the database. If the return value is false, Cloud Backup uses a log backup to restore the database.
   * 
   * @example
   * true
   */
  useDelta?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000g9acf******gta
   */
  vaultId?: string;
  /**
   * @remarks
   * The ID of the volume that is restored. This parameter is returned only if the value of the Mode parameter is **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupID: 'BackupID',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      currentPhase: 'CurrentPhase',
      currentProgress: 'CurrentProgress',
      databaseName: 'DatabaseName',
      databaseRestoreId: 'DatabaseRestoreId',
      endTime: 'EndTime',
      logPosition: 'LogPosition',
      maxPhase: 'MaxPhase',
      maxProgress: 'MaxProgress',
      message: 'Message',
      mode: 'Mode',
      phase: 'Phase',
      reachedTime: 'ReachedTime',
      recoveryPointInTime: 'RecoveryPointInTime',
      restoreId: 'RestoreId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupID: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      currentPhase: 'number',
      currentProgress: 'number',
      databaseName: 'string',
      databaseRestoreId: 'number',
      endTime: 'number',
      logPosition: 'number',
      maxPhase: 'number',
      maxProgress: 'number',
      message: 'string',
      mode: 'string',
      phase: 'string',
      reachedTime: 'number',
      recoveryPointInTime: 'number',
      restoreId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      startTime: 'number',
      state: 'string',
      status: 'string',
      systemCopy: 'boolean',
      useCatalog: 'boolean',
      useDelta: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBodyHanaRestore extends $dara.Model {
  hanaRestores?: DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores[];
  static names(): { [key: string]: string } {
    return {
      hanaRestores: 'HanaRestores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaRestores: { 'type': 'array', 'itemType': DescribeHanaRestoresResponseBodyHanaRestoreHanaRestores },
    };
  }

  validate() {
    if(Array.isArray(this.hanaRestores)) {
      $dara.Model.validateArray(this.hanaRestores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsRequestOtsInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the tables in the Tablestore instance.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The actual data amount of backup snapshots after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 0
   */
  actualBytes?: string;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The total amount of data. Unit: bytes.
   * 
   * @example
   * 0
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The time when the backup snapshot was completed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the Tablestore instance was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-00030j3chkt******2
   */
  jobId?: string;
  /**
   * @remarks
   * The hash value of the parent backup snapshot.
   * 
   * @example
   * f2fe..
   */
  parentSnapshotHash?: string;
  /**
   * @remarks
   * The time when the backup job ended. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642521709966
   */
  rangeEnd?: number;
  /**
   * @remarks
   * The time when the backup job started. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642492553038
   */
  rangeStart?: number;
  /**
   * @remarks
   * The retention period of the backup snapshot. Unit: days.
   * 
   * @example
   * 730
   */
  retention?: number;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-00047mxg17p26*****b
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for Elastic Compute Service (ECS) files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS file systems
   * *   **OTS_TABLE**: backup snapshots for Tablestore instances
   * 
   * @example
   * OTS_TABLE
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the backup snapshot started. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496543
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The backup job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The name of the table in the Tablestore instance.
   * 
   * @example
   * table2
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the backup snapshot was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the backup vault that stores the backup snapshot.
   * 
   * @example
   * v-00030j*******sn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      backupType: 'BackupType',
      bytesTotal: 'BytesTotal',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      instanceName: 'InstanceName',
      jobId: 'JobId',
      parentSnapshotHash: 'ParentSnapshotHash',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'string',
      backupType: 'string',
      bytesTotal: 'number',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      instanceName: 'string',
      jobId: 'string',
      parentSnapshotHash: 'string',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      tableName: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters extends $dara.Model {
  /**
   * @remarks
   * Deprecated.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * Data source type. The value range is as follows: 
   * - **UDM_ECS**: Indicates ECS server backup. 
   * - **OSS**: Indicates OSS backup. 
   * - **NAS**: Indicates Alibaba Cloud NAS backup. 
   * - **ECS_FILE**: Indicates ECS file backup. 
   * - **OTS**: Indicates Tablestore backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules extends $dara.Model {
  /**
   * @remarks
   * The type of the special retention rule. Valid values:
   * 
   * *   **WEEKLY**: weekly backups
   * *   **MONTHLY**: monthly backups
   * *   **YEARLY**: yearly backups
   * 
   * @example
   * YEARLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The special retention period of backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 730
   */
  retention?: number;
  /**
   * @remarks
   * Indicates which backup is retained based on the special retention rule. Only the first backup can be retained.
   * 
   * @example
   * 1
   */
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * Tag matching rules, supporting: - **EQUAL**: Matches both the tag key and tag value. - **NOT**: Matches the tag key but not the tag value.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class DescribePoliciesV2ResponseBodyPoliciesRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **TRANSITION**. This parameter indicates the time when data is dumped from a backup vault to an archive vault. Unit: days.
   * 
   * @example
   * 30
   */
  archiveDays?: number;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **BACKUP**. This parameter indicates the backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. It defines the data source filtering rule.
   */
  dataSourceFilters?: DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is returned only if the **PolicyType** is **UDM_ECS_ONLY**. This parameter indicates whether the immutable backup feature is enabled.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Indicates whether the feature of keeping at least one backup version is enabled. Valid values:
   * 
   * *   **0**: The feature is disabled.
   * *   **1**: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **REPLICATION**. This parameter indicates the ID of the destination region.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **TRANSITION** or **REPLICATION**.
   * 
   * *   If the value of the **RuleType** parameter is **TRANSITION**, this parameter indicates the retention period of the backup data. Minimum value: 1. Unit: days.
   * *   If the value of the **RuleType** parameter is **REPLICATION**, this parameter indicates the retention period of remote backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **TRANSITION**. This parameter indicates the special retention rules.
   */
  retentionRules?: DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * rule-000************f1e
   */
  ruleId?: string;
  /**
   * @remarks
   * The type of the rule. Each backup policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type. Valid values:
   * 
   * *   **BACKUP**: backup rule
   * *   **TRANSITION**: lifecycle rule
   * *   **REPLICATION**: replication rule
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **BACKUP**. This parameter indicates the backup schedule settings. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only when **RuleType** is set to **TAG**. It defines the resource tag filtering rule.
   */
  tagFilters?: DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters[];
  /**
   * @remarks
   * This parameter is returned only if the value of the RuleType parameter is BACKUP. The ID of the backup vault.
   * 
   * @example
   * v-000**************kgm
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDays: 'ArchiveDays',
      backupType: 'BackupType',
      dataSourceFilters: 'DataSourceFilters',
      immutable: 'Immutable',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      schedule: 'Schedule',
      tagFilters: 'TagFilters',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDays: 'number',
      backupType: 'string',
      dataSourceFilters: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesDataSourceFilters },
      immutable: 'boolean',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesRetentionRules },
      ruleId: 'string',
      ruleType: 'string',
      schedule: 'string',
      tagFilters: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRulesTagFilters },
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceFilters)) {
      $dara.Model.validateArray(this.dataSourceFilters);
    }
    if(Array.isArray(this.retentionRules)) {
      $dara.Model.validateArray(this.retentionRules);
    }
    if(Array.isArray(this.tagFilters)) {
      $dara.Model.validateArray(this.tagFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the backup policy was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1650248136
   */
  createdTime?: number;
  /**
   * @remarks
   * The number of data sources that are bound to the backup policy.
   * 
   * @example
   * 5
   */
  policyBindingCount?: number;
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************bkz
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * *   **STANDARD**: the general backup policy. This type of policy applies to backups other than Elastic Compute Service (ECS) instance backup.
   * *   **UDM_ECS_ONLY**: the ECS instance backup policy. This type of policy applies only to ECS instance backup.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rules?: DescribePoliciesV2ResponseBodyPoliciesRules[];
  /**
   * @remarks
   * The time when the backup policy was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1662080404
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      policyBindingCount: 'PolicyBindingCount',
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      rules: 'Rules',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      policyBindingCount: 'number',
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      rules: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPoliciesRules },
      updatedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Key in the query filter. Possible values include:
   * 
   * - **PolicyId**: Backup policy ID
   * - **DataSourceId**: ECS instance ID
   * - **DataSourceType**: Data source type
   * 
   * @example
   * DataSourceType
   */
  key?: string;
  /**
   * @remarks
   * Matching method. Default is IN. This refers to the matching operation (Operator) supported by the Key and Value in the filter. Possible values include:
   * 
   * - **EQUAL**: Equal to
   * - **NOT_EQUAL**: Not equal to
   * - **GREATER_THAN**: Greater than
   * - **GREATER_THAN_OR_EQUAL**: Greater than or equal to
   * - **LESS_THAN**: Less than
   * - **LESS_THAN_OR_EQUAL**: Less than or equal to
   * - **BETWEEN**: Range, where value is a JSON array `[lower_bound, upper_bound]`.
   * - **IN**: In the set, where value is an array.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * Values to be matched in the query filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsShrinkRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Key in the query filter. Possible values include:
   * 
   * - **PolicyId**: Backup policy ID
   * - **DataSourceId**: ECS instance ID
   * - **DataSourceType**: Data source type
   * 
   * @example
   * DataSourceType
   */
  key?: string;
  /**
   * @remarks
   * Matching method. Default is IN. This refers to the matching operation (Operator) supported by the Key and Value in the filter. Possible values include:
   * 
   * - **EQUAL**: Equal to
   * - **NOT_EQUAL**: Not equal to
   * - **GREATER_THAN**: Greater than
   * - **GREATER_THAN_OR_EQUAL**: Greater than or equal to
   * - **LESS_THAN**: Less than
   * - **LESS_THAN_OR_EQUAL**: Less than or equal to
   * - **BETWEEN**: Range, where value is a JSON array `[lower_bound, upper_bound]`.
   * - **IN**: In the set, where value is an array.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * Values to be matched in the query filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail extends $dara.Model {
  /**
   * @remarks
   * Backup shard size (number of files).
   * 
   * @example
   * 100000
   */
  fetchSliceSize?: number;
  /**
   * @remarks
   * Whether to switch to a full backup when an incremental backup fails. Values:
   * - **true**: Switch to full backup on failure.
   * - **false**: Do not switch to full backup on failure.
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

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail extends $dara.Model {
  /**
   * @remarks
   * Backup client ID.
   * 
   * @example
   * c-0001eg6mcvjs93f46s2d
   */
  clientId?: string;
  /**
   * @remarks
   * Client group ID.
   * 
   * @example
   * cl-000gkcofngi04j6k680a
   */
  clusterId?: string;
  /**
   * @remarks
   * Backup slice size (number of files).
   * 
   * @example
   * 100000
   */
  fetchSliceSize?: number;
  /**
   * @remarks
   * Whether to switch to a full backup when an incremental backup fails. Values:
   * - **true**: Switch to full backup on failure.
   * - **false**: Do not switch to full backup on failure.
   * 
   * @example
   * true
   */
  fullOnIncrementFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clusterId: 'ClusterId',
      fetchSliceSize: 'FetchSliceSize',
      fullOnIncrementFail: 'FullOnIncrementFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
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

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail extends $dara.Model {
  /**
   * @remarks
   * Whether to use advanced policies. Values:
   * - **true**: Use.
   * - **false**: Do not use.
   * 
   * @example
   * false
   */
  advPolicy?: boolean;
  /**
   * @remarks
   * Whether to enable VSS (Windows) functionality. Values:
   * - **true**: Enable.
   * - **false**: Disable.
   * 
   * @example
   * false
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

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail extends $dara.Model {
  /**
   * @remarks
   * Do not prompt for archive-type objects in the task statistics and failed file list.
   * 
   * @example
   * true
   */
  ignoreArchiveObject?: boolean;
  /**
   * @remarks
   * Whether to delete the inventory file after the backup. This is only effective when using an OSS inventory. Supported values:
   * - **NO_CLEANUP**: Do not delete.
   * - **DELETE_CURRENT**: Delete the current file.
   * - **DELETE_CURRENT_AND_PREVIOUS**: Delete all files.
   * 
   * @example
   * DELETE_CURRENT_AND_PREVIOUS
   */
  inventoryCleanupPolicy?: string;
  /**
   * @remarks
   * The name of the OSS inventory. If this value is not empty, the OSS inventory will be used for performance optimization.
   * - It is recommended to use an inventory for backing up more than 100 million OSS objects to improve incremental performance. Storage costs for the inventory files are charged separately by the OSS service.
   * - The generation of the OSS inventory file takes time, and the backup may fail before the inventory file is generated. You can wait for the next cycle to execute.
   * 
   * @example
   * inventory_test
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

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail extends $dara.Model {
  /**
   * @remarks
   * 是否创建应用一致性。仅云盘类型全部为ESSD时，支持创建快照应用一致性。
   * 
   * @example
   * false
   */
  appConsistent?: boolean;
  /**
   * @remarks
   * The custom KMS key ID in the destination region. When this field is not empty and cross-region replication is enabled, the specified key will be used for encrypting the cross-region replication.
   * 
   * @example
   * 4ed37b1e-da51-4187-aceb-9db4f9b7148b
   */
  destinationKmsKeyId?: string;
  /**
   * @remarks
   * List of disk IDs that need protection. This value is empty when protecting all disks.
   */
  diskIdList?: string[];
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It indicates whether to use the Linux FsFreeze mechanism to ensure the file system is in a read-only consistent state before creating an application-consistent snapshot. The default value is true.
   * 
   * @example
   * true
   */
  enableFsFreeze?: boolean;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It determines whether to set an application-consistent snapshot:
   * - **true**: Create an application-consistent snapshot
   * - **false**: Create a file system-consistent snapshot
   * 
   * The default value is true.
   * 
   * @example
   * true
   */
  enableWriters?: boolean;
  /**
   * @remarks
   * List of disk IDs that do not need protection. This parameter is ignored if DiskIdList is not empty.
   */
  excludeDiskIdList?: string[];
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the path of the unfreeze script to be executed after creating an application-consistent snapshot.
   * 
   * @example
   * /tmp/postscript.sh
   */
  postScriptPath?: string;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the path of the freeze script to be executed before creating an application-consistent snapshot.
   * 
   * @example
   * /tmp/prescript.sh
   */
  preScriptPath?: string;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the RAM role name needed for creating an application-consistent snapshot.
   * 
   * @example
   * AliyunECSInstanceForHbrRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * Indicates whether to create a snapshot consistency group. Only supported when all disk types are ESSD.
   * 
   * @example
   * true
   */
  snapshotGroup?: boolean;
  /**
   * @remarks
   * This parameter is required when **AppConsistent** is **true**. It specifies the IO freeze timeout duration. The default value is 30 seconds.
   * 
   * @example
   * 30
   */
  timeoutInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      appConsistent: 'AppConsistent',
      destinationKmsKeyId: 'DestinationKmsKeyId',
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
      destinationKmsKeyId: 'string',
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

export class DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Advanced options for large-scale file system backup.
   */
  commonFileSystemDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail;
  /**
   * @remarks
   * Advanced options for local NAS.
   */
  commonNasDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail;
  /**
   * @remarks
   * Advanced options for file backup.
   */
  fileDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail;
  /**
   * @remarks
   * Advanced options for OSS backup.
   */
  ossDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail;
  /**
   * @remarks
   * Advanced options for full machine backup.
   */
  udmDetail?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail;
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
      commonFileSystemDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonFileSystemDetail,
      commonNasDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsCommonNasDetail,
      fileDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsFileDetail,
      ossDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsOssDetail,
      udmDetail: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptionsUdmDetail,
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

export class DescribePolicyBindingsResponseBodyPolicyBindingsHitTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * Tag matching rule.
   * - **EQUAL**: Matches both the tag key and tag value.
   * - **NOT**: Matches the tag key but not the tag value.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class DescribePolicyBindingsResponseBodyPolicyBindings extends $dara.Model {
  /**
   * @remarks
   * Advanced options.
   */
  advancedOptions?: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions;
  /**
   * @remarks
   * Whether the resource is automatically associated through the backup policy resource tag.
   * 
   * @example
   * false
   */
  createdByTag?: boolean;
  /**
   * @remarks
   * Creation time. UNIX timestamp, in seconds.
   * 
   * @example
   * 1661399570
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the role created in the RAM of the original account for cross-account backup.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values: 
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the original account for cross-account backup.
   * 
   * @example
   * 1480************
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * i-8vb************5ly
   */
  dataSourceId?: string;
  /**
   * @remarks
   * 策略是否对该数据源生效。
   * - true：暂停
   * - false：未暂停
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is **ECS_FILE** or **File**. It specifies the file types that should not be backed up, and all files of these types will be excluded. Supports up to 255 characters.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * Hit tag rules.
   */
  hitTags?: DescribePolicyBindingsResponseBodyPolicyBindingsHitTags[];
  /**
   * @remarks
   * This parameter is required only when **SourceType** is **ECS_FILE** or **File**. It specifies the file types to be backed up, and all files of these types will be backed up. Supports up to 255 characters.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  include?: string;
  /**
   * @remarks
   * Bound policy description.
   * 
   * @example
   * po-000************eslc-i-uf6************y5g
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * Bound policy ID.
   * 
   * @example
   * pd-000************slc
   */
  policyBindingId?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * po-000************56y
   */
  policyId?: string;
  /**
   * @remarks
   * - When **SourceType** is **OSS**, it indicates the prefix to be backed up. If not specified, it means backing up the entire root directory of the Bucket.
   * - When **SourceType** is **ECS_FILE** or **File**, it indicates the file directory to be backed up. If not specified, it means backing up all directories.
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * Data source type, with the value range:
   * - **UDM_ECS**: indicates ECS full machine backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is **ECS_FILE** or **File**. It specifies the backup traffic control. The format is `{start}{end}{bandwidth}`. Multiple traffic control configurations are separated by commas, and the configured times must not overlap.
   * 
   * - **start**: Start hour.
   * - **end**: End hour.
   * - **bandwidth**: Limit rate, in KB/s.
   * 
   * @example
   * 0:24:10240
   */
  speedLimit?: string;
  /**
   * @remarks
   * Update time. UNIX timestamp, in seconds.
   * 
   * @example
   * 1653611573
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      createdByTag: 'CreatedByTag',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      exclude: 'Exclude',
      hitTags: 'HitTags',
      include: 'Include',
      policyBindingDescription: 'PolicyBindingDescription',
      policyBindingId: 'PolicyBindingId',
      policyId: 'PolicyId',
      source: 'Source',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: DescribePolicyBindingsResponseBodyPolicyBindingsAdvancedOptions,
      createdByTag: 'boolean',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      dataSourceId: 'string',
      disabled: 'boolean',
      exclude: 'string',
      hitTags: { 'type': 'array', 'itemType': DescribePolicyBindingsResponseBodyPolicyBindingsHitTags },
      include: 'string',
      policyBindingDescription: 'string',
      policyBindingId: 'string',
      policyId: 'string',
      source: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    if(this.advancedOptions && typeof (this.advancedOptions as any).validate === 'function') {
      (this.advancedOptions as any).validate();
    }
    if(Array.isArray(this.hitTags)) {
      $dara.Model.validateArray(this.hitTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponseBodyOtsInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the Tablestore instance that can be restored.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the tables in the Tablestore instance.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2RequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key in the filter. Valid values:
   * 
   * *   **RegionId**: the region ID
   * *   **PlanId**: the ID of a backup plan
   * *   **JobId**: the ID of a backup job
   * *   **VaultId**: the ID of a backup vault
   * *   **InstanceId**: the ID of an ECS instance
   * *   **Bucket**: the name of an OSS bucket
   * *   **FileSystemId**: the ID of a file system
   * *   **Status**: the status of a backup job
   * *   **CompleteTime**: the end time of a backup job
   * 
   * @example
   * VaultId
   */
  key?: string;
  /**
   * @remarks
   * The matching method. Default value: IN. This parameter specifies the operator that you want to use to match a key and a value in the filter. Valid values:
   * 
   * *   **EQUAL**: equal to
   * *   **NOT_EQUAL**: not equal to
   * *   **GREATER_THAN**: greater than
   * *   **GREATER_THAN_OR_EQUAL**: greater than or equal to
   * *   **LESS_THAN**: less than
   * *   **LESS_THAN_OR_EQUAL**: less than or equal to
   * *   **BETWEEN**: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,Maximum value]` format.
   * *   **IN**: specifies an array as a collection. The results must fall within the collection.
   * 
   * > If you specify the **CompleteTime** parameter as a key to query backup jobs, you cannot use the IN operator to perform a match.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * The values that you want to match in the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail extends $dara.Model {
  /**
   * @remarks
   * The number of channels processed by each Tablestore restore job.
   * 
   * @example
   * 2
   */
  batchChannelCount?: number;
  /**
   * @remarks
   * Indicates whether the existing Tablestore restore job was overwritten.
   * 
   * @example
   * false
   */
  overwriteExisting?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchChannelCount: 'BatchChannelCount',
      overwriteExisting: 'OverwriteExisting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchChannelCount: 'number',
      overwriteExisting: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport extends $dara.Model {
  /**
   * @remarks
   * The files that failed to be executed.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_failed.zip
   */
  failedFiles?: string;
  /**
   * @remarks
   * The status of the report generation.
   * 
   * @example
   * COMPLETE
   */
  reportTaskStatus?: string;
  /**
   * @remarks
   * The skipped files.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_skipped.zip
   */
  skippedFiles?: string;
  /**
   * @remarks
   * The files that are successfully executed.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_success.zip
   */
  successFiles?: string;
  /**
   * @remarks
   * The full files that are restored based on the file list.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_total.csv
   */
  totalFiles?: string;
  static names(): { [key: string]: string } {
    return {
      failedFiles: 'FailedFiles',
      reportTaskStatus: 'ReportTaskStatus',
      skippedFiles: 'SkippedFiles',
      successFiles: 'SuccessFiles',
      totalFiles: 'TotalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFiles: 'string',
      reportTaskStatus: 'string',
      skippedFiles: 'string',
      successFiles: 'string',
      totalFiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data that is restored after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: number;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the actual number of objects that are restored by the restore job.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * The amount of data that was restored. Unit: bytes.
   * 
   * @example
   * 800
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total amount of data that was backed up from the data source. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The ID of the client group used for restoration.
   * 
   * @example
   * cl-000******hp6
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the restore job was completed. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the restore job was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Indicates whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
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
   * 158975xxxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The files that failed to be restored.
   * 
   * @example
   * "test.csv"
   */
  errorFile?: string;
  /**
   * @remarks
   * The error message that is returned for the restore job.
   * 
   * @example
   * PARTIAL_COMPLETE
   */
  errorMessage?: string;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the paths to the files that are excluded from the restore job. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * The time when the restore job expires.
   * 
   * @example
   * 1634714531
   */
  expireTime?: number;
  /**
   * @remarks
   * The details about the VMware failback task.
   * 
   * @example
   * {"cpu":4,"extra":"{\\"restoreVMNamePrefix\\":\\"627-\\",\\"dataCenterName\\":\\"SDDC-Datacenter\\",\\"dataStoreId\\":\\"datastore-50\\",\\"folderId\\":\\"group-v49\\",\\"resourcePoolId\\":\\"resgroup-46\\",\\"locationName\\":\\"vcenter.pc-uf600arcwi9td3eyj641.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\\",\\"computeResourceName\\":\\"SDDC-Datacenter/Default_c-uf600arcwi9td3eyj640\\",\\"dataStoreName\\":\\"Default_c-uf600arcwi9td3eyj640/WorkloadDatastore\\",\\"networkMoReference\\":\\"DistributedVirtualPortgroup:dvportgroup-1001\\",\\"useHotAdd\\":false}","instanceId":"i-2vc357i2eannmmotcagz","memoryInMB":8192,"serverId":"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01","uefiBoot":false}
   */
  failbackDetail?: string;
  /**
   * @remarks
   * The paths to the files that are included in the restore job.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the number of restored objects.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the total number of objects in the data source.
   * 
   * @example
   * 10
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The amount of data that was restored. Unit: bytes. This parameter is valid only if the StorageClass parameter is set to ARCHIVE. The minimum billable size of the data stored at the Archive tier is 1 MB.
   * 
   * @example
   * 1048576
   */
  meteringBytesDone?: number;
  /**
   * @remarks
   * The total amount of data that was backed up from the data source. Unit: bytes. This parameter is valid only if the StorageClass parameter is set to ARCHIVE. The minimum billable size of the data stored at the Archive tier is 1 MB.
   * 
   * @example
   * 1048576
   */
  meteringBytesTotal?: number;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates whether Windows Volume Shadow Copy Service (VSS) is used to define a restoration path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before you can set this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot restore data from multiple directories.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail;
  /**
   * @remarks
   * The ID of the parent job.
   * 
   * @example
   * r-0003hd2an3x4dyv0l18b
   */
  parentId?: string;
  /**
   * @remarks
   * The progress of the restore job. Valid values: [0,10000]. For example, 10000 indicates that the progress is 100%.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * The report of the restore job.
   */
  report?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-0003*****8a
   */
  restoreId?: string;
  /**
   * @remarks
   * The type of the restore job.
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the snapshot used for restoration.
   * 
   * @example
   * s-0002******ga88
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS (NAS) file systems
   * *   **OTS_TABLE**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The average speed at which data is backed up. Unit: KB/s.
   * 
   * @example
   * 500
   */
  speed?: number;
  /**
   * @remarks
   * The time when the restore job started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the restore job. Valid values:
   * 
   * *   **COMPLETE**: The job is completed.
   * *   **PARTIAL_COMPLETE**: The job is partially completed.
   * *   **FAILED**: The job failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the backup data. Valid values:
   * 
   * *   **STANDARD**
   * *   **ARCHIVE**
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The name of the destination OSS bucket. This parameter is returned only for OSS buckets.
   * 
   * @example
   * target-bucket
   */
  targetBucket?: string;
  /**
   * @remarks
   * The ID of the destination client.
   * 
   * @example
   * c-000e*****397
   */
  targetClientId?: string;
  /**
   * @remarks
   * The time when the file system was created. This parameter is returned only for NAS file systems.
   * 
   * @example
   * 1634714531
   */
  targetCreateTime?: number;
  /**
   * @remarks
   * The ID of the destination data source.
   * 
   * @example
   * ds-000*****997
   */
  targetDataSourceId?: string;
  /**
   * @remarks
   * The ID of the destination NAS file system. This parameter is returned only for NAS file systems.
   * 
   * @example
   * 0be9****9c9
   */
  targetFileSystemId?: string;
  /**
   * @remarks
   * The ID of the destination instance for the restore job.
   * 
   * @example
   * i-2ze3m7ktcgw******cs
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the destination Tablestore instance.
   * 
   * @example
   * instancename
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The destination file path of the restore job.
   * 
   * @example
   * "D:\\\\rebk"
   */
  targetPath?: string;
  /**
   * @remarks
   * The prefix of the objects that are restored. This parameter is returned only for OSS buckets.
   * 
   * @example
   * "/target"
   */
  targetPrefix?: string;
  /**
   * @remarks
   * The name of the destination table in the Tablestore instance.
   * 
   * @example
   * tablename
   */
  targetTableName?: string;
  /**
   * @remarks
   * The time when the Tablestore instance was backed up. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642560261
   */
  targetTime?: number;
  /**
   * @remarks
   * The details about Elastic Compute Service (ECS) instance backup.
   * 
   * @example
   * {\\"doCopy\\":true,\\"doBackup\\":false,\\"instanceName\\":\\"instance example\\",\\"appConsistent\\":false,\\"destinationRegionId\\":\\"cn-shanghai\\",\\"enableFsFreeze\\":true,\\"osNameEn\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"osName\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"diskIdList\\":[],\\"backupVaultId\\":\\"\\",\\"snapshotGroup\\":true,\\"destinationRetention\\":35,\\"platform\\":\\"Windows Server 2012\\",\\"timeoutInSeconds\\":60,\\"backupRetention\\":1,\\"osType\\":\\"windows\\",\\"preScriptPath\\":\\"\\",\\"postScriptPath\\":\\"\\",\\"enableWriters\\":true,\\"ecsDeleted\\":false}
   */
  udmDetail?: string;
  /**
   * @remarks
   * The time when the restore job was updated. This value is a UNIX timestamp. Unit: seconds.
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
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clusterId: 'ClusterId',
      completeTime: 'CompleteTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      errorFile: 'ErrorFile',
      errorMessage: 'ErrorMessage',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      failbackDetail: 'FailbackDetail',
      include: 'Include',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      meteringBytesDone: 'MeteringBytesDone',
      meteringBytesTotal: 'MeteringBytesTotal',
      options: 'Options',
      otsDetail: 'OtsDetail',
      parentId: 'ParentId',
      progress: 'Progress',
      report: 'Report',
      restoreId: 'RestoreId',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      speed: 'Speed',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      targetBucket: 'TargetBucket',
      targetClientId: 'TargetClientId',
      targetCreateTime: 'TargetCreateTime',
      targetDataSourceId: 'TargetDataSourceId',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetail: 'UdmDetail',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      clusterId: 'string',
      completeTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      errorFile: 'string',
      errorMessage: 'string',
      exclude: 'string',
      expireTime: 'number',
      failbackDetail: 'string',
      include: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      meteringBytesDone: 'number',
      meteringBytesTotal: 'number',
      options: 'string',
      otsDetail: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail,
      parentId: 'string',
      progress: 'number',
      report: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport,
      restoreId: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      speed: 'number',
      startTime: 'number',
      status: 'string',
      storageClass: 'string',
      targetBucket: 'string',
      targetClientId: 'string',
      targetCreateTime: 'number',
      targetDataSourceId: 'string',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetail: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.report && typeof (this.report as any).validate === 'function') {
      (this.report as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobs extends $dara.Model {
  restoreJob?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob[];
  static names(): { [key: string]: string } {
    return {
      restoreJob: 'RestoreJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreJob: { 'type': 'array', 'itemType': DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob },
    };
  }

  validate() {
    if(Array.isArray(this.restoreJob)) {
      $dara.Model.validateArray(this.restoreJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBodySnapshotsDetail extends $dara.Model {
  /**
   * @remarks
   * The consistency level.
   * 
   * @example
   * CRASH
   */
  consistentLevel?: string;
  /**
   * @remarks
   * Indicates whether the system disk is included.
   * 
   * @example
   * true
   */
  containOsDisk?: boolean;
  /**
   * @remarks
   * The type of the source disk.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * /dev/xvdb
   */
  diskDevName?: string;
  /**
   * @remarks
   * The mapping between the device and the recovery point ID.
   * 
   * @example
   * {
   *     "/dev/xvdb":"s-0000u7y6wm3v1e7hxh5a",					 
   *     "/dev/xvda":"s-0004bl6yr5pt89jjsv5a"
   * }
   */
  diskHbrSnapshotIdWithDeviceMap?: { [key: string]: any };
  /**
   * @remarks
   * The IDs of the disks that are backed up at the recovery point.
   */
  diskIdList?: string[];
  /**
   * @remarks
   * The reason for the downgrade.
   * 
   * @example
   * HBR.NoRamRoleBound
   */
  downgradeReason?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * iZbpxxxxxxxxxxxxxxxxe2Z
   */
  hostName?: string;
  /**
   * @remarks
   * The mapping between the instance ID and the disk ID.
   * 
   * @example
   * {
   *     "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvs",					 
   *     "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvd"
   * }
   */
  instanceIdWithDiskIdListMap?: { [key: string]: any };
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * swh-hbr
   */
  instanceName?: string;
  /**
   * @remarks
   * The specifications of the source instance.
   * 
   * @example
   * ecs.c6.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the backup is created by the instant clone feature.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The list of snapshot IDs, corresponding to DiskIdList.
   */
  nativeSnapshotIdList?: string[];
  /**
   * @remarks
   * The ID of the system disk.
   * 
   * @example
   * d-bp1e6427vhd320hifvc
   */
  osDiskId?: string;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * Debian 10.10 64-bit (UEFI)
   */
  osName?: string;
  /**
   * @remarks
   * The English name of the operating system.
   * 
   * @example
   * Debian  11.1 64 bit
   */
  osNameEn?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values: linux and windows.
   * 
   * @example
   * windows
   */
  osType?: string;
  /**
   * @remarks
   * The performance level of the source disk.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The system platform.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the snapshot group.
   * 
   * @example
   * ssg-uf6856txcaq31uj***
   */
  snapshotGroupId?: string;
  /**
   * @remarks
   * Indicates whether the disk is a system disk.
   * 
   * @example
   * true
   */
  systemDisk?: boolean;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * BNSHSVR42 IPGUARD
   */
  vmName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentLevel: 'ConsistentLevel',
      containOsDisk: 'ContainOsDisk',
      diskCategory: 'DiskCategory',
      diskDevName: 'DiskDevName',
      diskHbrSnapshotIdWithDeviceMap: 'DiskHbrSnapshotIdWithDeviceMap',
      diskIdList: 'DiskIdList',
      downgradeReason: 'DowngradeReason',
      hostName: 'HostName',
      instanceIdWithDiskIdListMap: 'InstanceIdWithDiskIdListMap',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      instantAccess: 'InstantAccess',
      nativeSnapshotIdList: 'NativeSnapshotIdList',
      osDiskId: 'OsDiskId',
      osName: 'OsName',
      osNameEn: 'OsNameEn',
      osType: 'OsType',
      performanceLevel: 'PerformanceLevel',
      platform: 'Platform',
      snapshotGroupId: 'SnapshotGroupId',
      systemDisk: 'SystemDisk',
      vmName: 'VmName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentLevel: 'string',
      containOsDisk: 'boolean',
      diskCategory: 'string',
      diskDevName: 'string',
      diskHbrSnapshotIdWithDeviceMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      diskIdList: { 'type': 'array', 'itemType': 'string' },
      downgradeReason: 'string',
      hostName: 'string',
      instanceIdWithDiskIdListMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceName: 'string',
      instanceType: 'string',
      instantAccess: 'boolean',
      nativeSnapshotIdList: { 'type': 'array', 'itemType': 'string' },
      osDiskId: 'string',
      osName: 'string',
      osNameEn: 'string',
      osType: 'string',
      performanceLevel: 'string',
      platform: 'string',
      snapshotGroupId: 'string',
      systemDisk: 'boolean',
      vmName: 'string',
    };
  }

  validate() {
    if(this.diskHbrSnapshotIdWithDeviceMap) {
      $dara.Model.validateMap(this.diskHbrSnapshotIdWithDeviceMap);
    }
    if(Array.isArray(this.diskIdList)) {
      $dara.Model.validateArray(this.diskIdList);
    }
    if(this.instanceIdWithDiskIdListMap) {
      $dara.Model.validateMap(this.instanceIdWithDiskIdListMap);
    }
    if(Array.isArray(this.nativeSnapshotIdList)) {
      $dara.Model.validateArray(this.nativeSnapshotIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The size of the backup snapshot. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: string;
  /**
   * @remarks
   * The special retention type, which is valid only for special backups. Valid values:
   * 
   * *   **WEEKLY**: weekly backups
   * *   **MONTHLY**: monthly backups
   * *   **YEARLY**: yearly backups
   * 
   * @example
   * WEEKLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The total amount of data. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The time when the backup snapshot was completed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1646895666
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  createdTime?: number;
  /**
   * @remarks
   * The snapshot details.
   */
  detail?: DescribeUdmSnapshotsResponseBodySnapshotsDetail;
  /**
   * @remarks
   * The ID of the cloud disk or local disk.
   * 
   * @example
   * d-2ze86h5fga5rfwxxa8ef
   */
  diskId?: string;
  /**
   * @remarks
   * The expiration time of the backup.
   * 
   * @example
   * 1640334062
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1f0pe78dxizrsdcgxd
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-00030j3chkt******2
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-00047mg17p26x*****b
   */
  nativeSnapshotId?: string;
  /**
   * @remarks
   * The snapshot information.
   * 
   * @example
   * {
   * 					"sourceDiskId":"d-bp17misjuy636t82v7b0",
   * 					"lastModifiedTime":"2022-03-09T11:35:12Z",
   * 					"snapshotSN":"64588-429372675-857161235",
   * 					"snapshotId":"s-bp1fbtwv3e6xr6wpe9e0",
   * 					"creationTime":"2022-03-09T11:31:12Z",
   * 					"snapshotType":"user",
   * 					"usage":"none",
   * 					"description":"",
   * 					"sourceStorageType":"disk",
   * 					"tags":[
   * 						{
   * 							"tagValue":"job-0007e0wqjl0imbrtkmnm",
   * 							"tagKey":"HBR JobId"
   * 						}
   * 					],
   * 					"productCode":"",
   * 					"encrypted":false,
   * 					"sourceDiskType":"system",
   * 					"retentionDays":30,
   * 					"snapshotName":"Created-from-HBR-job:job-0007e0wqjl0imbrtkmnm",
   * 					"kMSKeyId":"",
   * 					"progress":"100%",
   * 					"category":"standard",
   * 					"sourceDiskSize":"20",
   * 					"status":"accomplished"
   * 				}
   */
  nativeSnapshotInfo?: string;
  /**
   * @remarks
   * The hash value of the parent backup snapshot.
   * 
   * @example
   * f2fe..
   */
  parentSnapshotHash?: string;
  /**
   * @remarks
   * The prefix of the backup snapshot.
   * 
   * @example
   * example/
   */
  prefix?: string;
  /**
   * @remarks
   * The timestamp of the backup snapshot. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  realSnapshotTime?: number;
  /**
   * @remarks
   * The retention period of the backup snapshot. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-00047mxg17p26*****b
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * *   **UDM_ECS_DISK**: disk backup subtask of ECS instance backup
   * *   **UDM_DISK**: disk backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The backup job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The time when the backup snapshot was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      advancedRetentionType: 'AdvancedRetentionType',
      backupType: 'BackupType',
      bytesTotal: 'BytesTotal',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      detail: 'Detail',
      diskId: 'DiskId',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      nativeSnapshotId: 'NativeSnapshotId',
      nativeSnapshotInfo: 'NativeSnapshotInfo',
      parentSnapshotHash: 'ParentSnapshotHash',
      prefix: 'Prefix',
      realSnapshotTime: 'RealSnapshotTime',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'string',
      advancedRetentionType: 'string',
      backupType: 'string',
      bytesTotal: 'number',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      detail: DescribeUdmSnapshotsResponseBodySnapshotsDetail,
      diskId: 'string',
      expireTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      nativeSnapshotId: 'string',
      nativeSnapshotInfo: 'string',
      parentSnapshotHash: 'string',
      prefix: 'string',
      realSnapshotTime: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsResponseBodyRegions extends $dara.Model {
  regionId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regionId)) {
      $dara.Model.validateArray(this.regionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The Value of the tag.
   * 
   * @example
   * value1
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

export class InstallBackupClientsResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. Valid values:
   * 
   * *   If the value is empty, the call is successful.
   * *   **InstanceNotExists**: The ECS instance does not exist.
   * *   **InstanceNotRunning**: The ECS instance is not running.
   * *   **CloudAssistNotRunningOnInstance**: Cloud Assistant is unavailable.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-0xi5w***v3j3bh2gj5
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether an HBR client can be installed on the ECS instance. Valid values:
   * 
   * *   true: An HBR client can be installed on the ECS instance.
   * *   false: An HBR client cannot be installed on the ECS instance.
   * 
   * @example
   * true
   */
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot extends $dara.Model {
  /**
   * @remarks
   * The actual data amount of backup snapshots after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: number;
  /**
   * @remarks
   * The actual number of backup snapshots.
   * 
   * >  This parameter is available only for file backup.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * Time to archive
   * 
   * @example
   * 1640334062
   */
  archiveTime?: number;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **OSS**. This parameter indicates the name of the OSS bucket.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The actual amount of data that is generated by incremental backups. Unit: bytes.
   * 
   * @example
   * 800
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total amount of data. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the ID of the HBR client.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the backup snapshot was completed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  completeTime?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the time when the file system was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The files that record the information about backup failures, including the information about partially completed backups.
   * 
   * @example
   * Item	Error Message C:\\Program Files (x86)\\Symantec\\Symantec Endpoint Protection\\14.3.558.0000.105\\Bin\\service.dat	Open: open \\\\?\\C:\\Program Files (x86)\\Symantec\\Symantec Endpoint Protection\\14.3.558.0000.105\\Bin\\service.dat: The process cannot access the file because it is being used by another process. C:\\ProgramData\\McAfee\\Agent\\data\\InstallerFiles\\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af_contrib.ini	Open: open \\\\?\\C:\\ProgramData\\McAfee\\Agent\\data\\InstallerFiles\\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af_contrib.ini: Access is denied.
   */
  errorFile?: string;
  /**
   * @remarks
   * Backup paths not included in the backup job.
   * 
   * @example
   * [\\"/test/example_cn-hangzhou_7.txt\\", \\"/test/example_cn-hangzhou_1.txt\\", \\"/test/example_cn-hangzhou_3.txt\\", \\"/test/example_cn-hangzhou_9.txt\\", \\"/test/example_cn-hangzhou_6.txt\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * The time when the snapshot expired. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1640334062
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the ID of the NAS file system.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * Backup paths included in the backup job.
   * 
   * @example
   * [\\"/test/example_cn-huhehaote_3.txt\\", \\"/test/example_cn-huhehaote_9.txt\\", \\"/test/example_cn-huhehaote_5.txt\\", \\"/test/example_cn-huhehaote_1.txt\\", \\"/test/example_cn-huhehaote_7.txt\\"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the ID of the ECS instance.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of objects that are backed up.
   * 
   * >  This parameter is available only for file backup.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * The total number of objects in the data source.
   * 
   * >  This parameter is available only for file backup.
   * 
   * @example
   * 10
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * v-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * The hash value of the parent backup snapshot.
   * 
   * @example
   * f2fe..
   */
  parentSnapshotHash?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the path to the files that are backed up.
   * 
   * @example
   * ["/home"]
   */
  path?: string;
  /**
   * @remarks
   * The source paths.
   * 
   * @example
   * "/home"
   */
  paths?: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **OSS**. This parameter indicates the prefix of objects that are backed up.
   * 
   * @example
   * example/
   */
  prefix?: string;
  /**
   * @remarks
   * The time when the backup job ended. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642521709966
   */
  rangeEnd?: number;
  /**
   * @remarks
   * The time when the backup job started. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642492553038
   */
  rangeStart?: number;
  /**
   * @remarks
   * The retention period of the backup snapshot. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-*********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * Parent snapshot HASH value before archiving.
   * 
   * @example
   * qwer***
   */
  sourceParentSnapshotHash?: string;
  /**
   * @remarks
   * Snapshot HASH value before archiving
   * 
   * @example
   * qwer***
   */
  sourceSnapshotHash?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for ECS files
   * *   **OSS**: backup snapshots for OSS buckets
   * *   **NAS**: backup snapshots for NAS file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the backup snapshot started. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The backup job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * Storage type. Values: 
   * - **Standard**: Standard. 
   * - **Archive**: Archive. 
   * - **ColdArchive**: Cold Archive.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The name of a table in the Tablestore instance.
   * 
   * @example
   * table2
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the backup snapshot was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * Whether to use local NAS.
   * 
   * @example
   * false
   */
  useCommonNas?: boolean;
  /**
   * @remarks
   * The ID of the backup vault that stores the backup snapshot.
   * 
   * @example
   * v-0003rf9m17pap3ltpqx5
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      archiveTime: 'ArchiveTime',
      backupType: 'BackupType',
      bucket: 'Bucket',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      errorFile: 'ErrorFile',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      parentSnapshotHash: 'ParentSnapshotHash',
      path: 'Path',
      paths: 'Paths',
      prefix: 'Prefix',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceParentSnapshotHash: 'SourceParentSnapshotHash',
      sourceSnapshotHash: 'SourceSnapshotHash',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      useCommonNas: 'UseCommonNas',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      archiveTime: 'number',
      backupType: 'string',
      bucket: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      errorFile: 'string',
      exclude: 'string',
      expireTime: 'number',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      parentSnapshotHash: 'string',
      path: 'string',
      paths: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshotPaths,
      prefix: 'string',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceParentSnapshotHash: 'string',
      sourceSnapshotHash: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      storageClass: 'string',
      tableName: 'string',
      updatedTime: 'number',
      useCommonNas: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBodySnapshots extends $dara.Model {
  snapshot?: SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': SearchHistoricalSnapshotsResponseBodySnapshotsSnapshot },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the value is empty, the request is successful.
   * *   **InstanceNotExists**: The ECS instance does not exist.
   * *   **InstanceNotRunning**: The ECS instance is not running.
   * *   **CloudAssistNotRunningOnInstance**: Cloud Assistant is unavailable.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-0xi5w***v3j3bh2gj5
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether a backup client can be installed on the ECS instance.
   * 
   * *   true: A backup client can be installed on the ECS instance.
   * *   false: A backup client cannot be installed on the ECS instance.
   * 
   * @example
   * true
   */
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanRequestRule extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the region where the remote backup vault resides.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Specifies whether to disable the policy.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable remote replication.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The retention period of the backup data. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Format: I|{startTime}|{interval}. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, I|1631685600|P1D specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds. interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1631685600|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanShrinkRequestRule extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the region where the remote backup vault resides.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Specifies whether to disable the policy.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable remote replication.
   * 
   * @example
   * false
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The retention period of the backup data. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * rule-test-name
   */
  ruleName?: string;
  /**
   * @remarks
   * The backup policy. Format: I|{startTime}|{interval}. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, I|1631685600|P1D specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds. interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1631685600|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequestAdvancedOptionsCommonFileSystemDetail extends $dara.Model {
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

export class UpdatePolicyBindingRequestAdvancedOptionsOssDetail extends $dara.Model {
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
   * 30663060
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

export class UpdatePolicyBindingRequestAdvancedOptionsUdmDetail extends $dara.Model {
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
   * *   true: creates application-consistent snapshots
   * *   false: creates file system-consistent snapshots
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

export class UpdatePolicyBindingRequestAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * The details about large-scale file system backup.
   */
  commonFileSystemDetail?: UpdatePolicyBindingRequestAdvancedOptionsCommonFileSystemDetail;
  /**
   * @remarks
   * The details about Object Storage Service (OSS) backup.
   */
  ossDetail?: UpdatePolicyBindingRequestAdvancedOptionsOssDetail;
  /**
   * @remarks
   * The details about Elastic Compute Service (ECS) instance backup.
   */
  udmDetail?: UpdatePolicyBindingRequestAdvancedOptionsUdmDetail;
  static names(): { [key: string]: string } {
    return {
      commonFileSystemDetail: 'CommonFileSystemDetail',
      ossDetail: 'OssDetail',
      udmDetail: 'UdmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonFileSystemDetail: UpdatePolicyBindingRequestAdvancedOptionsCommonFileSystemDetail,
      ossDetail: UpdatePolicyBindingRequestAdvancedOptionsOssDetail,
      udmDetail: UpdatePolicyBindingRequestAdvancedOptionsUdmDetail,
    };
  }

  validate() {
    if(this.commonFileSystemDetail && typeof (this.commonFileSystemDetail as any).validate === 'function') {
      (this.commonFileSystemDetail as any).validate();
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

export class UpdatePolicyV2RequestRulesDataSourceFilters extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: Elastic Compute Service (ECS) instance This type of data source is supported only if the **RuleType** parameter is set to **UDM_ECS_ONLY**.
   * *   **OSS**: Object Storage Service (OSS) bucket This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * *   **NAS**: File Storage NAS (NAS) file system This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * *   **ECS_FILE**: ECS file This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * *   **OTS**: Tablestore instance This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2RequestRulesRetentionRules extends $dara.Model {
  /**
   * @remarks
   * The type of the special retention rule. Valid values:
   * 
   * *   **WEEKLY**: retains weekly backups
   * *   **MONTHLY**: retains monthly backups
   * *   **YEARLY**: retains yearly backups
   * 
   * @example
   * YEARLY
   */
  advancedRetentionType?: string;
  /**
   * @remarks
   * The special retention period of backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 365
   */
  retention?: number;
  /**
   * @remarks
   * Specifies which backup is retained based on the special retention rule. Only the first backup can be retained.
   * 
   * @example
   * 1
   */
  whichSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      advancedRetentionType: 'AdvancedRetentionType',
      retention: 'Retention',
      whichSnapshot: 'WhichSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedRetentionType: 'string',
      retention: 'number',
      whichSnapshot: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2RequestRulesTagFilters extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag-based matching rule. Valid values:
   * 
   * *   **EQUAL**: Both the tag key and tag value are matched.
   * *   **NOT**: The tag key is matched and the tag value is not matched.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The tag value. If you leave this parameter empty, the value is any value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class UpdatePolicyV2RequestRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the time when data is dumped from a backup vault to an archive vault. Unit: days.
   * 
   * @example
   * 90
   */
  archiveDays?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the time when data is dumped from a backup vault to a cold archive vault. Unit: days.
   * 
   * @example
   * 365
   */
  coldArchiveDays?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the data source filter rule.
   */
  dataSourceFilters?: UpdatePolicyV2RequestRulesDataSourceFilters[];
  /**
   * @remarks
   * This parameter is required only if the **PolicyType** parameter is set to **UDM_ECS_ONLY**. This parameter specifies whether to enable the immutable backup feature.
   * 
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the feature of keeping at least one backup version. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **REPLICATION**. This parameter specifies the ID of the destination region.
   * 
   * @example
   * cn-shanghai
   */
  replicationRegionId?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TRANSITION** or **REPLICATION**.
   * 
   * *   If the **RuleType** parameter is set to **TRANSITION**, this parameter specifies the retention period of the backup data. Minimum value: 1. Unit: days.
   * *   If the **RuleType** parameter is set to **REPLICATION**, this parameter specifies the retention period of remote backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * This parameter is required only if the value of the **RuleType** parameter is **TRANSITION**. This parameter specifies the special retention rules.
   */
  retentionRules?: UpdatePolicyV2RequestRulesRetentionRules[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * rule-000************rof
   */
  ruleId?: string;
  /**
   * @remarks
   * The type of the rule. Each backup policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type. Valid values:
   * 
   * *   **BACKUP**: backup rule
   * *   **TRANSITION**: lifecycle rule
   * *   **REPLICATION**: replication rule
   * 
   * @example
   * BACKUP
   */
  ruleType?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup schedule settings. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of 1 hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1648647166|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the resource tag filter rule.
   */
  tagFilters?: UpdatePolicyV2RequestRulesTagFilters[];
  static names(): { [key: string]: string } {
    return {
      archiveDays: 'ArchiveDays',
      backupType: 'BackupType',
      coldArchiveDays: 'ColdArchiveDays',
      dataSourceFilters: 'DataSourceFilters',
      immutable: 'Immutable',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      replicationRegionId: 'ReplicationRegionId',
      retention: 'Retention',
      retentionRules: 'RetentionRules',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      schedule: 'Schedule',
      tagFilters: 'TagFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDays: 'number',
      backupType: 'string',
      coldArchiveDays: 'number',
      dataSourceFilters: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesDataSourceFilters },
      immutable: 'boolean',
      keepLatestSnapshots: 'number',
      replicationRegionId: 'string',
      retention: 'number',
      retentionRules: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesRetentionRules },
      ruleId: 'string',
      ruleType: 'string',
      schedule: 'string',
      tagFilters: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRulesTagFilters },
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceFilters)) {
      $dara.Model.validateArray(this.dataSourceFilters);
    }
    if(Array.isArray(this.retentionRules)) {
      $dara.Model.validateArray(this.retentionRules);
    }
    if(Array.isArray(this.tagFilters)) {
      $dara.Model.validateArray(this.tagFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. Valid values:
   * 
   * *   If the value is empty, the call is successful.
   * *   **InstanceNotExists**: The ECS instance does not exist.
   * *   **InstanceNotRunning**: The ECS instance is not running.
   * *   **CloudAssistNotRunningOnInstance**: Cloud Assistant is unavailable.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-0xi5w***v3j3bh2gj5
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether an HBR client can be installed on the ECS instance. Valid values:
   * 
   * *   true: An HBR client can be installed on the ECS instance.
   * *   false: An HBR client cannot be installed on the ECS instance.
   * 
   * @example
   * true
   */
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OtsDetail extends $dara.Model {
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OtsTableRestoreDetail extends $dara.Model {
  batchChannelCount?: number;
  indexNameSuffix?: string;
  overwriteExisting?: boolean;
  reGenerateAutoIncrementPK?: boolean;
  restoreIndex?: boolean;
  restoreSearchIndex?: boolean;
  searchIndexNameSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      batchChannelCount: 'BatchChannelCount',
      indexNameSuffix: 'IndexNameSuffix',
      overwriteExisting: 'OverwriteExisting',
      reGenerateAutoIncrementPK: 'ReGenerateAutoIncrementPK',
      restoreIndex: 'RestoreIndex',
      restoreSearchIndex: 'RestoreSearchIndex',
      searchIndexNameSuffix: 'SearchIndexNameSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchChannelCount: 'number',
      indexNameSuffix: 'string',
      overwriteExisting: 'boolean',
      reGenerateAutoIncrementPK: 'boolean',
      restoreIndex: 'boolean',
      restoreSearchIndex: 'boolean',
      searchIndexNameSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Report extends $dara.Model {
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_failed.csv
   */
  failedFiles?: string;
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_skipped.csv
   */
  skippedFiles?: string;
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_success.csv
   */
  successFiles?: string;
  /**
   * @example
   * temp/report/r-0000dnz7p4pk31u6madf_total.csv
   */
  totalFiles?: string;
  static names(): { [key: string]: string } {
    return {
      failedFiles: 'FailedFiles',
      skippedFiles: 'SkippedFiles',
      successFiles: 'SuccessFiles',
      totalFiles: 'TotalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFiles: 'string',
      skippedFiles: 'string',
      successFiles: 'string',
      totalFiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Rule extends $dara.Model {
  backupType?: string;
  destinationRegionId?: string;
  destinationRetention?: number;
  disabled?: boolean;
  doCopy?: boolean;
  retention?: number;
  ruleName?: string;
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the cluster. Only Container Service for Kubernetes (ACK) clusters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * description ack pv backup
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cluster that you want to register.
   * 
   * This parameter is required.
   * 
   * @example
   * cca8f35f0e0d84540b49d994511c2c87a
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ack_pv_backup_location
   */
  name?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **CLASSIC**: the classic network
   * *   **VPC**: a virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      description: 'Description',
      identifier: 'Identifier',
      name: 'Name',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      description: 'string',
      identifier: 'string',
      name: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cc-00049slr9iuvvv6pp134
   */
  clusterId?: string;
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FCBC078-FFCB-542A-8555-566477679720
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The token that is used to register the Hybrid Backup Recovery (HBR) client in the cluster.
   * 
   * @example
   * eyJhY2NvdW*****VnZpgXQC5A==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddContainerClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddContainerClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBackupJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * This parameter is required.
   * 
   * @example
   * j-******************************
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*****************************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBackupJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBackupJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelBackupJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelBackupJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRestoreJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * This parameter is required.
   * 
   * @example
   * r-*********************
   */
  restoreId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      restoreId: 'RestoreId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRestoreJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRestoreJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRestoreJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelRestoreJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group. You can view the available resource groups in the Resource Management console.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource. The value of this parameter varies with the resource type. For example, if the ResourceType parameter is set to vault, the ResourceId parameter specifies the ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0002vido6j5zyh5k****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **vault**: backup vault
   * *   **client**: backup client
   * *   **hanainstance**: SAP HANA instance
   * 
   * This parameter is required.
   * 
   * @example
   * vault
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C438054F-9088-5D1B-AED0-0EA86D9C65F4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * *   EcsRole: a role with the permissions to access Elastic Compute Service (ECS) resources
   * *   CsgRole: a role with the permissions to perform Cloud Storage Gateway (CSG) backup
   * *   NasRole: a role with the permissions to perform NAS backup
   * *   OssRole: a role with the permissions to perform Object Storage Service (OSS) backup
   * *   UdmRole: a role with the permissions to perform ECS instance backup
   * *   VMwareLocalRole: a role with the permissions to back up on-premises VMware virtual machines (VMs)
   * *   VMwareCloudRole: a role with the permissions to back up VMs deployed on Alibaba Cloud VMware Service (ACVS)
   * *   EcsBackupRole: a role with the permissions to perform ECS backup
   * *   OtsRole: a role with the permissions to perform Tablestore backup
   * *   CrossAccountRole: a role with the permissions to perform cross-account backup
   * 
   * @example
   * OssRole
   */
  checkRoleType?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      checkRoleType: 'CheckRoleType',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRoleType: 'string',
      crossAccountRoleName: 'string',
      crossAccountUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F63CA9B-744E-51C0-A638-27882BB03078
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. This parameter is required only if you set the SourceType parameter to UDM_ECS.
   * 
   * *   **COMPLETE**: full backup
   * 
   * @example
   * INCREMENTAL
   */
  backupType?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * cl-00068btz******oku
   */
  clusterId?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * cc-000xxxxxxxxxxxxxxi00
   */
  containerClusterId?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * [{\\"resourceType\\":\\"PV\\",\\"backupMethod\\":\\"FILE\\",\\"resourceId\\":\\"674dac6d-74cd-47e9-a675-09e2f10d2c45\\",\\"resourceInfo\\":\\"{\\\\\\"pv_name\\\\\\":\\\\\\"nas-650dac6d-74cd-47e9-a675-09e2f10d2c45\\\\\\",\\\\\\"pv_size\\\\\\":\\\\\\"8Gi\\\\\\",\\\\\\"storage_class\\\\\\":\\\\\\"alibabacloud-cnfs-nas\\\\\\",\\\\\\"pvc_name\\\\\\":\\\\\\"data-postgresql-default-0\\\\\\",\\\\\\"namespace\\\\\\":\\\\\\"database\\\\\\"}\\",\\"host\\":\\"cn-huhehaote.192.168.13.133\\",\\"hostPrefix\\":\\"6f5e758e-8d35-4584-b9ce-8333adfc7547/volumes/kubernetes.io~csi/nas-670dac6d-74cd-47e9-a675-09e2f10d2c45/mount\\",\\"pvPath\\":\\"/\\"}]
   */
  containerResources?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
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
   * 158975xxxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **UDM_ECS**. The value is a JSON string. Valid values:
   * 
   * *   doCopy: specifies whether to enable remote replication.
   * 
   * *   destinationRegionId: the destination region for remote replication.
   * 
   * *   destinationRetention: the retention period of the backup point for remote replication.
   * 
   * *   diskIdList: the IDs of the disks that are to be backed up. If this parameter is left empty, all disks are backed up.
   * 
   * *   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are Enterprise SSDs (ESSDs).
   * 
   * *   appConsistent: specifies whether to use the application-consistent backup feature. This parameter must be used with the preScriptPath and postScriptPath parameters.
   * 
   * *   preScriptPath: the path to the pre-freeze scripts.
   * 
   * *   postScriptPath: the path to the post-thaw scripts.
   * 
   * *   enableWriters: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to create application-consistent snapshots.
   * 
   *     *   true: creates application-consistent snapshots.
   *     *   false: creates file system-consistent snapshots.
   * 
   * *   enableFsFreeze: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to enable Linux fsfreeze to put file systems into the read-only state before application-consistent snapshots are created. Default value: true.
   * 
   * *   timeoutSeconds: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the I/O freeze timeout period. Default value: 30. Unit: seconds.
   * 
   * @example
   * {
   *     "doCopy": false,
   *     "destinationRegionId": "",
   *     "destinationRetention": null,
   *     "diskIdList": [],
   *     "snapshotGroup": false,
   *     "appConsistent": false,
   *     "enableWriters": true,
   *     "preScriptPath": "",
   *     "postScriptPath": "",
   *     "enableFsFreeze": true,
   *     "timeoutInSeconds": 60
   * }
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the paths to the files that are excluded from the backup job. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the paths to the files that are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * false or left empty
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the ID of the ECS instance.
   * 
   * @example
   * i-bp1xxxxxxxxxxxxxxysm
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the backup job.
   * 
   * @example
   * k8s-backup-infra-20220131150046-hbr
   */
  jobName?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 15
   */
  retention?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: Elastic Compute Service (ECS) instance
   * 
   * This parameter is required.
   * 
   * @example
   * CONTAINER
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the throttling rules. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.
   * 
   * *   **start**: the start hour.
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:NaN
   */
  speedLimit?: string;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is not required if you set the SourceType parameter to UDM_ECS.
   * 
   * @example
   * v-000xxxxxxxxxxxxxxy1v
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      containerClusterId: 'ContainerClusterId',
      containerResources: 'ContainerResources',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      detail: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      options: 'Options',
      retention: 'Retention',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      clusterId: 'string',
      containerClusterId: 'string',
      containerResources: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      exclude: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      instanceId: 'string',
      jobName: 'string',
      options: 'string',
      retention: 'number',
      sourceType: 'string',
      speedLimit: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. This parameter is required only if you set the SourceType parameter to UDM_ECS.
   * 
   * *   **COMPLETE**: full backup
   * 
   * @example
   * INCREMENTAL
   */
  backupType?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * cl-00068btz******oku
   */
  clusterId?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * cc-000xxxxxxxxxxxxxxi00
   */
  containerClusterId?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * [{\\"resourceType\\":\\"PV\\",\\"backupMethod\\":\\"FILE\\",\\"resourceId\\":\\"674dac6d-74cd-47e9-a675-09e2f10d2c45\\",\\"resourceInfo\\":\\"{\\\\\\"pv_name\\\\\\":\\\\\\"nas-650dac6d-74cd-47e9-a675-09e2f10d2c45\\\\\\",\\\\\\"pv_size\\\\\\":\\\\\\"8Gi\\\\\\",\\\\\\"storage_class\\\\\\":\\\\\\"alibabacloud-cnfs-nas\\\\\\",\\\\\\"pvc_name\\\\\\":\\\\\\"data-postgresql-default-0\\\\\\",\\\\\\"namespace\\\\\\":\\\\\\"database\\\\\\"}\\",\\"host\\":\\"cn-huhehaote.192.168.13.133\\",\\"hostPrefix\\":\\"6f5e758e-8d35-4584-b9ce-8333adfc7547/volumes/kubernetes.io~csi/nas-670dac6d-74cd-47e9-a675-09e2f10d2c45/mount\\",\\"pvPath\\":\\"/\\"}]
   */
  containerResources?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
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
   * 158975xxxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **UDM_ECS**. The value is a JSON string. Valid values:
   * 
   * *   doCopy: specifies whether to enable remote replication.
   * 
   * *   destinationRegionId: the destination region for remote replication.
   * 
   * *   destinationRetention: the retention period of the backup point for remote replication.
   * 
   * *   diskIdList: the IDs of the disks that are to be backed up. If this parameter is left empty, all disks are backed up.
   * 
   * *   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are Enterprise SSDs (ESSDs).
   * 
   * *   appConsistent: specifies whether to use the application-consistent backup feature. This parameter must be used with the preScriptPath and postScriptPath parameters.
   * 
   * *   preScriptPath: the path to the pre-freeze scripts.
   * 
   * *   postScriptPath: the path to the post-thaw scripts.
   * 
   * *   enableWriters: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to create application-consistent snapshots.
   * 
   *     *   true: creates application-consistent snapshots.
   *     *   false: creates file system-consistent snapshots.
   * 
   * *   enableFsFreeze: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to enable Linux fsfreeze to put file systems into the read-only state before application-consistent snapshots are created. Default value: true.
   * 
   * *   timeoutSeconds: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the I/O freeze timeout period. Default value: 30. Unit: seconds.
   * 
   * @example
   * {
   *     "doCopy": false,
   *     "destinationRegionId": "",
   *     "destinationRetention": null,
   *     "diskIdList": [],
   *     "snapshotGroup": false,
   *     "appConsistent": false,
   *     "enableWriters": true,
   *     "preScriptPath": "",
   *     "postScriptPath": "",
   *     "enableFsFreeze": true,
   *     "timeoutInSeconds": 60
   * }
   */
  detailShrink?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the paths to the files that are excluded from the backup job. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the paths to the files that are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * false or left empty
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the ID of the ECS instance.
   * 
   * @example
   * i-bp1xxxxxxxxxxxxxxysm
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the backup job.
   * 
   * @example
   * k8s-backup-infra-20220131150046-hbr
   */
  jobName?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 15
   */
  retention?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: Elastic Compute Service (ECS) instance
   * 
   * This parameter is required.
   * 
   * @example
   * CONTAINER
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the throttling rules. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.
   * 
   * *   **start**: the start hour.
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:NaN
   */
  speedLimit?: string;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is not required if you set the SourceType parameter to UDM_ECS.
   * 
   * @example
   * v-000xxxxxxxxxxxxxxy1v
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      containerClusterId: 'ContainerClusterId',
      containerResources: 'ContainerResources',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      detailShrink: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      options: 'Options',
      retention: 'Retention',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      clusterId: 'string',
      containerClusterId: 'string',
      containerResources: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      detailShrink: 'string',
      exclude: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      instanceId: 'string',
      jobName: 'string',
      options: 'string',
      retention: 'number',
      sourceType: 'string',
      speedLimit: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-000csy09q50a2jdcbwbo
   */
  jobId?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25F49E7B-7E39-542E-83AD-62E6E7F73786
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBackupJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Backup type. Value: **COMPLETE**, indicating a full backup.
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **OSS**. It represents the OSS bucket name.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * Configuration for the incremental file synchronization list. (Required only for synchronization)
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **NAS**. It represents the creation time of the file system, in UNIX timestamp, in seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The role name created in the RAM of the original account for cross-account backup.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values:
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The original account ID used for cross-account backup.
   * 
   * @example
   * 15897534xxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * Destination data source details. (Required only for synchronization)
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetail?: { [key: string]: any };
  /**
   * @remarks
   * Destination data source ID. (Required only for synchronization)
   * 
   * @example
   * ds-*********************
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * Destination data source type. (Required only for synchronization)
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * Details of the whole machine backup, in JSON string format.
   * 
   * * snapshotGroup: Whether to use a consistent snapshot group (only valid if all instance disks are ESSD).
   * * appConsistent: Whether to use application consistency (requires the use of preScriptPath and postScriptPath parameters).
   * * preScriptPath: Path to the freeze script.
   * * postScriptPath: Path to the thaw script.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * Is the plan disabled by default
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. It specifies the path that should not be backed up, meaning all files under this path will not be included in the backup. The maximum length is 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **NAS**. It represents the file system ID.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the path to be backed up, and all files under this path will be backed up. Supports up to 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the ECS instance ID.
   * 
   * @example
   * i-m5e*****6q
   */
  instanceId?: string;
  /**
   * @remarks
   * Table store instance name.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * Whether to enable retaining at least one backup version.
   * - 0 - Do not retain
   * - 1 - Retain
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It indicates whether to use the Windows system VSS to define the backup path.
   * 
   * - This feature only supports Windows type ECS instances.
   * - If there are data changes in the backup source and you need to ensure consistency between the backup data and the source data, you can configure it as `["UseVSS":true]`.
   * - After choosing to use VSS, multiple file directories cannot be backed up simultaneously.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * Table store instance details.
   */
  otsDetail?: OtsDetail;
  /**
   * @remarks
   * Backup paths.
   */
  path?: string[];
  /**
   * @remarks
   * Name of the backup plan. 1 to 64 characters. The name must be unique for each data source type within a single backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **OSS**. It represents the backup prefix. When specified, only objects matching the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * Number of days to retain the backup, with a minimum value of 1, in days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * Backup plan rules.
   */
  rule?: CreateBackupPlanRequestRule[];
  /**
   * @remarks
   * Backup policy. Optional format: `I|{startTime}|{interval}`. This indicates that a backup task will be executed every `{interval}` starting from `{startTime}`. It does not compensate for missed backup tasks due to past time. If the previous backup task has not been completed, the next backup task will not be triggered. For example, `I|1631685600|P1D` means a backup is performed every day starting from 2021-09-15 14:00:00.
   * 
   * - **startTime**: Start time of the backup, in UNIX timestamp, in seconds.
   * - **interval**: ISO8601 time interval. For example, PT1H indicates an interval of one hour, and P1D indicates an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * Data source type, with the following options:
   * 
   * - **ECS_FILE**: Backs up ECS files
   * - **OSS**: Backs up Alibaba Cloud OSS
   * - **NAS**: Backs up Alibaba Cloud NAS
   * - **OTS**: Backs up Alibaba Cloud OTS
   * - **UDM_ECS**: Backs up the entire ECS instance
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the backup traffic control. Format: `{start}:{end}:{bandwidth}`. Multiple traffic control configurations are separated by |, and the configured times should not overlap.
   * 
   * - **start**: Start hour.
   * - **end**: End hour.
   * - **bandwidth**: Limit rate, in KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Region where the whole machine backup instance is located.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * Backup vault ID.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetail: 'OtsDetail',
      path: 'Path',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      createTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetail: OtsDetail,
      path: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': CreateBackupPlanRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.destDataSourceDetail) {
      $dara.Model.validateMap(this.destDataSourceDetail);
    }
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Backup type. Value: **COMPLETE**, indicating a full backup.
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **OSS**. It represents the OSS bucket name.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * Configuration for the incremental file synchronization list. (Required only for synchronization)
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **NAS**. It represents the creation time of the file system, in UNIX timestamp, in seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The role name created in the RAM of the original account for cross-account backup.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values:
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The original account ID used for cross-account backup.
   * 
   * @example
   * 15897534xxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * Destination data source details. (Required only for synchronization)
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetailShrink?: string;
  /**
   * @remarks
   * Destination data source ID. (Required only for synchronization)
   * 
   * @example
   * ds-*********************
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * Destination data source type. (Required only for synchronization)
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * Details of the whole machine backup, in JSON string format.
   * 
   * * snapshotGroup: Whether to use a consistent snapshot group (only valid if all instance disks are ESSD).
   * * appConsistent: Whether to use application consistency (requires the use of preScriptPath and postScriptPath parameters).
   * * preScriptPath: Path to the freeze script.
   * * postScriptPath: Path to the thaw script.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detailShrink?: string;
  /**
   * @remarks
   * Is the plan disabled by default
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only when **SourceType** is set to **ECS_FILE**. It specifies the path that should not be backed up, meaning all files under this path will not be included in the backup. The maximum length is 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **NAS**. It represents the file system ID.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the path to be backed up, and all files under this path will be backed up. Supports up to 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the ECS instance ID.
   * 
   * @example
   * i-m5e*****6q
   */
  instanceId?: string;
  /**
   * @remarks
   * Table store instance name.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * Whether to enable retaining at least one backup version.
   * - 0 - Do not retain
   * - 1 - Retain
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It indicates whether to use the Windows system VSS to define the backup path.
   * 
   * - This feature only supports Windows type ECS instances.
   * - If there are data changes in the backup source and you need to ensure consistency between the backup data and the source data, you can configure it as `["UseVSS":true]`.
   * - After choosing to use VSS, multiple file directories cannot be backed up simultaneously.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * Table store instance details.
   */
  otsDetailShrink?: string;
  /**
   * @remarks
   * Backup paths.
   */
  path?: string[];
  /**
   * @remarks
   * Name of the backup plan. 1 to 64 characters. The name must be unique for each data source type within a single backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **OSS**. It represents the backup prefix. When specified, only objects matching the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * Number of days to retain the backup, with a minimum value of 1, in days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * Backup plan rules.
   */
  rule?: CreateBackupPlanShrinkRequestRule[];
  /**
   * @remarks
   * Backup policy. Optional format: `I|{startTime}|{interval}`. This indicates that a backup task will be executed every `{interval}` starting from `{startTime}`. It does not compensate for missed backup tasks due to past time. If the previous backup task has not been completed, the next backup task will not be triggered. For example, `I|1631685600|P1D` means a backup is performed every day starting from 2021-09-15 14:00:00.
   * 
   * - **startTime**: Start time of the backup, in UNIX timestamp, in seconds.
   * - **interval**: ISO8601 time interval. For example, PT1H indicates an interval of one hour, and P1D indicates an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * Data source type, with the following options:
   * 
   * - **ECS_FILE**: Backs up ECS files
   * - **OSS**: Backs up Alibaba Cloud OSS
   * - **NAS**: Backs up Alibaba Cloud NAS
   * - **OTS**: Backs up Alibaba Cloud OTS
   * - **UDM_ECS**: Backs up the entire ECS instance
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required when **SourceType** is set to **ECS_FILE**. It represents the backup traffic control. Format: `{start}:{end}:{bandwidth}`. Multiple traffic control configurations are separated by |, and the configured times should not overlap.
   * 
   * - **start**: Start hour.
   * - **end**: End hour.
   * - **bandwidth**: Limit rate, in KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Region where the whole machine backup instance is located.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * Backup vault ID.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      bucket: 'Bucket',
      changeListPath: 'ChangeListPath',
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetailShrink: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detailShrink: 'Detail',
      disabled: 'Disabled',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      path: 'Path',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      bucket: 'string',
      changeListPath: 'string',
      createTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetailShrink: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detailShrink: 'string',
      disabled: 'boolean',
      exclude: 'string',
      fileSystemId: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetailShrink: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': CreateBackupPlanShrinkRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Description of the return message, usually returns \\"successful\\" upon success, and corresponding error messages in case of failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Backup plan ID.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
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
   * 
   * - true: Success.
   * - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the HBR client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The installation information of the HBR clients.
   * 
   * @example
   * [  {    "instanceId": "i-bp116lr******te9q2",    "accessKeyId": "",    "accessKeySecret": "",    "clusterId": "cl-000csy09q******9rfz9",    "sourceTypes": [      "HANA"    ]  },  {    "instanceId": "i-bp116lrux******hte9q4",    "accessKeyId": "",    "accessKeySecret": "",    "clusterId": "cl-000csy09q5094vw9rfz9",    "sourceTypes": [      "HANA"    ]  }]
   */
  clientInfo?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **SELF_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
   * - **CROSS_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzvx7d3c4kpny
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to transmit data over HTTPS. Valid values:
   * 
   * *   true: transmits data over HTTPS.
   * *   false: transmits data over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0001ufe******kgm
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientInfo: 'ClientInfo',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      resourceGroupId: 'ResourceGroupId',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientInfo: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      resourceGroupId: 'string',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBody extends $dara.Model {
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
   * The status of the ECS instance. If you specify more than one instance IDs in the request and the status of an ECS instance does not meet the requirements to install an HBR client, an error message is returned based on the value of this parameter.
   */
  instanceStatuses?: CreateClientsResponseBodyInstanceStatuses;
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
   * The ID of the request.
   * 
   * @example
   * 4A8A9AE4-F798-5E6D-853E-10F9F5A1BD4E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-000h9x5t02vhyksf1x7k
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: CreateClientsResponseBodyInstanceStatuses,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(this.instanceStatuses && typeof (this.instanceStatuses as any).validate === 'function') {
      (this.instanceStatuses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * DIFF_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   COMPLETE: full backup
   * *   INCREMENTAL: incremental backup
   * *   DIFFERENTIAL: differential backup
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00024vyjj9******v
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-20220110-113108
   */
  planName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvnf22m7itha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0002pcwhdn******wmi
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      planName: 'PlanName',
      resourceGroupId: 'ResourceGroupId',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      backupType: 'string',
      clusterId: 'string',
      databaseName: 'string',
      planName: 'string',
      resourceGroupId: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * pl-000756jdlk2zmqig2nea
   */
  planId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33AA3AAE-89E1-5D3A-A51D-0C0A80850F68
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHanaBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHanaBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **SELF_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
   * - **CROSS_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of the ECS instances that host the SAP HANA instance to be registered. Cloud Backup installs backup clients on the specified ECS instances.
   * 
   * @example
   * [\\"i-uf6ir9y******hvisj\\"]
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the SAP HANA instance.
   * 
   * @example
   * HANA-DEV
   */
  hanaName?: string;
  /**
   * @remarks
   * The private or internal IP address of the host where the primary node of the SAP HANA instance resides.
   * 
   * @example
   * 47.100.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The instance number of the SAP HANA system.
   * 
   * @example
   * 00
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The password that is used to connect with the SAP HANA database.
   * 
   * @example
   * ************
   */
  password?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4ebtpkzx7zy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security identifier (SID) of the SAP HANA database. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?spm=a2c4g.11186623.0.0.55c34b4ftZeXNK).
   * 
   * @example
   * HXE
   */
  sid?: string;
  /**
   * @remarks
   * Specifies whether to connect with the SAP HANA database over Secure Sockets Layer (SSL).
   * 
   * @example
   * true
   */
  useSsl?: boolean;
  /**
   * @remarks
   * The username of the SYSTEMDB database.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * Specifies whether to verify the SSL certificate of the SAP HANA database.
   * 
   * @example
   * false
   */
  validateCertificate?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0003v4a******gfv2
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      ecsInstanceId: 'EcsInstanceId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      ecsInstanceId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      password: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-000dp1sz******6hn
   */
  clusterId?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB526A5D-1FE2-51C1-B790-1732C1DBA969
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHanaInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHanaInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaRestoreRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * 1645628400235
   */
  backupId?: number;
  /**
   * @remarks
   * The backup prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE_DATA_BACKUP_2022_05_02_15_39
   */
  backupPrefix?: string;
  /**
   * @remarks
   * Specifies whether to validate the differential backup and log backup. Valid values: true and false. If you set the value to true, HBR checks whether the required differential backup and log backup are available before the restore job starts. If the differential backup or log backup is unavailable, HBR does not start the restore job.
   * 
   * @example
   * false
   */
  checkAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to delete all log entries from the log area after the log entries are restored. Valid values: true and false. If you set the value to false, all log entries are deleted from the log area after the log entries are restored.
   * 
   * @example
   * false
   */
  clearLog?: boolean;
  /**
   * @remarks
   * The ID of the SAP HANA instance that you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000fbrs5******ka9w
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the database that you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * TS2
   */
  databaseName?: string;
  /**
   * @remarks
   * The log position to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  logPosition?: number;
  /**
   * @remarks
   * The ID of the client where the primary node of the SAP HANA resides.
   * 
   * @example
   * c-000ii8tzv**********
   */
  masterClientId?: string;
  /**
   * @remarks
   * The recovery mode. Valid values:
   * 
   * *   **RECOVERY_TO_MOST_RECENT**: restores the database to the recently available state to which the database has been backed up.
   * *   **RECOVERY_TO_POINT_IN_TIME**: restores the database to a specified point in time.
   * *   **RECOVERY_TO_SPECIFIC_BACKUP**: restores the database to a specified backup.
   * *   **RECOVERY_TO_LOG_POSITION**: restores the database to a specified log position.
   * 
   * This parameter is required.
   * 
   * @example
   * RECOVERY_TO_POINT_IN_TIME
   */
  mode?: string;
  /**
   * @remarks
   * The point in time to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_POINT_IN_TIME**. HBR restores the database to a state closest to the specified point in time.
   * 
   * @example
   * 1635315505
   */
  recoveryPointInTime?: number;
  /**
   * @remarks
   * The SID admin account that is created by SAP HANA.
   * 
   * @example
   * DB
   */
  sidAdmin?: string;
  /**
   * @remarks
   * The name of the source system. This parameter specifies the name of the source database that you want to restore. You must set the parameter in the `<Source database name>@SID` format.
   * 
   * @example
   * HNP@HNP
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source SAP HANA instance.
   * 
   * @example
   * cl-000ii8tzv******xm0t
   */
  sourceClusterId?: string;
  /**
   * @remarks
   * Specifies whether to restore the database to a different instance.
   * 
   * @example
   * false
   */
  systemCopy?: boolean;
  /**
   * @remarks
   * Specifies whether to use a catalog backup to restore the database. This parameter is required only if you set the Mode parameter to **RECOVERY_TO_SPECIFIC_BACKUP**. If you turn off Use Catalog, you must specify the prefix of a backup file. Then, Cloud Backup finds the backup file based on the specified prefix and restores the backup file.
   * 
   * @example
   * false
   */
  useCatalog?: boolean;
  /**
   * @remarks
   * Specifies whether to use a differential backup or an incremental backup to restore the database. Valid values: true and false. If you want to use a differential backup or an incremental backup to restore the database, set the value to true. If you set the value to false, HBR uses a log backup to restore the database.
   * 
   * @example
   * true
   */
  useDelta?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000************yqr
   */
  vaultId?: string;
  /**
   * @remarks
   * The ID of the volume that you want to restore. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupPrefix: 'BackupPrefix',
      checkAccess: 'CheckAccess',
      clearLog: 'ClearLog',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      logPosition: 'LogPosition',
      masterClientId: 'MasterClientId',
      mode: 'Mode',
      recoveryPointInTime: 'RecoveryPointInTime',
      sidAdmin: 'SidAdmin',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      systemCopy: 'SystemCopy',
      useCatalog: 'UseCatalog',
      useDelta: 'UseDelta',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      backupPrefix: 'string',
      checkAccess: 'boolean',
      clearLog: 'boolean',
      clusterId: 'string',
      databaseName: 'string',
      logPosition: 'number',
      masterClientId: 'string',
      mode: 'string',
      recoveryPointInTime: 'number',
      sidAdmin: 'string',
      source: 'string',
      sourceClusterId: 'string',
      systemCopy: 'boolean',
      useCatalog: 'boolean',
      useDelta: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaRestoreResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * hr-000fb9bz190p1rse6jwv
   */
  restoreId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      restoreId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHanaRestoreResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHanaRestoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHanaRestoreResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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

export class CreatePolicyBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data sources that you want to bind to the backup policy.
   */
  policyBindingListShrink?: string;
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
      policyBindingListShrink: 'PolicyBindingList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBindingListShrink: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 82CC5B6C-72F7-5D39-92F6-67887DF9AD46
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyBindingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyBindingsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * *   **STANDARD**: the general backup policy. This type of policy applies to backups other than Elastic Compute Service (ECS) instance backup.
   * *   **UDM_ECS_ONLY**: This type of policy applies only to ECS instance backup.
   * 
   * If the policy type is not specified, Cloud Backup automatically sets the policy type based on whether the backup vault is specified in the rules of the policy:
   * 
   * *   If the backup vault is specified, Cloud Backup sets the policy type to **STANDARD**.
   * *   If the backup vault is not specified, Cloud Backup sets the policy type to **UDM_ECS_ONLY**.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rules?: CreatePolicyV2RequestRules[];
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      rules: { 'type': 'array', 'itemType': CreatePolicyV2RequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * *   **STANDARD**: the general backup policy. This type of policy applies to backups other than Elastic Compute Service (ECS) instance backup.
   * *   **UDM_ECS_ONLY**: This type of policy applies only to ECS instance backup.
   * 
   * If the policy type is not specified, Cloud Backup automatically sets the policy type based on whether the backup vault is specified in the rules of the policy:
   * 
   * *   If the backup vault is specified, Cloud Backup sets the policy type to **STANDARD**.
   * *   If the backup vault is not specified, Cloud Backup sets the policy type to **UDM_ECS_ONLY**.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      policyType: 'string',
      rulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2ResponseBody extends $dara.Model {
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
   * The ID of the backup policy.
   * 
   * @example
   * po-000000zemnuyx2li3y9y
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      policyId: 'PolicyId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      policyId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup vault. The description must be 0 to 255 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
   * 
   * *   **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
   * *   **KMS**: The source data is encrypted by using Key Management Service (KMS).
   * 
   * @example
   * HBR_PRIVATE
   */
  encryptType?: string;
  /**
   * @remarks
   * The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
   * 
   * @example
   * alias/test
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The data redundancy type of the backup vault. Valid values:
   * 
   * *   LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies of each object on multiple devices of different facilities in the same zone. This way, Cloud Backup ensures data durability and availability even if hardware failures occur.
   * *   ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
   * 
   * @example
   * LRS
   */
  redundancyType?: string;
  /**
   * @remarks
   * The ID of the region where the source vault resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  replicationSourceRegionId?: string;
  /**
   * @remarks
   * The ID of the source vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  replicationSourceVaultId?: string;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mirrorvaultname
   */
  vaultName?: string;
  /**
   * @remarks
   * The ID of the region where the backup vault resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
   * 
   * @example
   * STANDARD
   */
  vaultStorageClass?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      kmsKeyId: 'KmsKeyId',
      redundancyType: 'RedundancyType',
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStorageClass: 'VaultStorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      kmsKeyId: 'string',
      redundancyType: 'string',
      replicationSourceRegionId: 'string',
      replicationSourceVaultId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStorageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationVaultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the job that is used to initialize the backup vault. You can call the DescribeTask operation to query the job status.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReplicationVaultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateReplicationVaultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateReplicationVaultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the role created in the RAM of the original account for cross-account backup managed by the current account.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values:
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The original account ID managed by the current account for cross-account backup.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The path not to be restored. All documents under this path will not be restored. Maximum length is 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * Details of restoring to the local environment.
   */
  failbackDetail?: { [key: string]: any };
  /**
   * @remarks
   * The path to be restored. All documents under this path will be restored. Maximum length is 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Indicates whether it is called by the container service. Default is false.
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * Parameters for the restore job.
   * 
   * @example
   * {\\"includes\\":[],\\"excludes\\":[],\\"conflictPolicy\\":\\"OVERWRITE_EXISTING\\"}
   */
  options?: string;
  /**
   * @remarks
   * Details of the Table Store instance.
   */
  otsDetail?: OtsTableRestoreDetail;
  /**
   * @remarks
   * The type of the restore destination data source. Possible values:
   *   - **ECS_FILE**: Restore to ECS file.
   *   - **OSS**: Restore to Alibaba Cloud OSS.
   *   - **NAS**: Restore to Alibaba Cloud NAS.
   *   - **OTS_TABLE**: Restore to Alibaba Cloud OTS.
   *   - **UDM_ECS_ROLLBACK**: Restore to Alibaba Cloud ECS whole machine.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The HASH value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Possible values:
   *   - **ECS_FILE**: Restore ECS file.
   *   - **OSS**: Restore Alibaba Cloud OSS.
   *   - **NAS**: Restore Alibaba Cloud NAS.
   *   - **OTS_TABLE**: Restore to Alibaba Cloud OTS.
   *   - **UDM_ECS**: Restore to Alibaba Cloud ECS whole machine.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **OSS**. Indicates the name of the OSS bucket at the restore destination.
   * 
   * @example
   * hbr-backup-oss
   */
  targetBucket?: string;
  /**
   * @remarks
   * Details of the target container.
   * 
   * @example
   * {\\"host\\":\\"k8s-node1\\",\\"hostPrefix\\":\\"/var/lib/kubelet/pods/4acb31fe-8577-40ff-bc8c-eccabd835f73/volumes/kubernetes.io~csi/pvc-b050b00e-ef17-4792-aab1-1642355cf1f4/mount\\",\\"pvPath\\":\\"/\\"}
   */
  targetContainer?: string;
  /**
   * @remarks
   * The ID of the target container cluster.
   * 
   * @example
   * cc-000amjsc7o1h9506oob7
   */
  targetContainerClusterId?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **NAS**. Indicates the creation time of the file system at the restore destination.
   * 
   * @example
   * 1554347313
   */
  targetCreateTime?: number;
  /**
   * @remarks
   * Valid only when **RestoreType** is **NAS**. Indicates the ID of the file system at the restore destination.
   * 
   * @example
   * 005494
   */
  targetFileSystemId?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **ECS_FILE**. Indicates the ECS instance ID at the restore destination.
   * 
   * @example
   * i-*********************
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the target Table Store instance.
   * 
   * @example
   * instancename
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **ECS_FILE**. Indicates the file path at the restore destination.
   * 
   * @example
   * C:\\
   */
  targetPath?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **OSS**. Indicates the object prefix at the restore destination.
   * 
   * @example
   * hbr
   */
  targetPrefix?: string;
  /**
   * @remarks
   * The name of the data table in the target Table Store.
   * 
   * @example
   * tablename
   */
  targetTableName?: string;
  /**
   * @remarks
   * The time of the Table Store to be restored. UNIX timestamp, in seconds.
   * 
   * @example
   * 1642496881
   */
  targetTime?: number;
  /**
   * @remarks
   * Details of the whole machine backup.
   * 
   * @example
   * {\\"sourceInstanceId\\":\\"i-uf62te6pm3iwsyxyz66q\\",\\"bootAfterRestore\\":false}
   */
  udmDetail?: { [key: string]: any };
  /**
   * @remarks
   * Valid only when **SourceType** is **UDM_ECS**. Indicates the target region for the restore.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * The ID of the backup vault that the snapshot belongs to.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      exclude: 'Exclude',
      failbackDetail: 'FailbackDetail',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      options: 'Options',
      otsDetail: 'OtsDetail',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      targetBucket: 'TargetBucket',
      targetContainer: 'TargetContainer',
      targetContainerClusterId: 'TargetContainerClusterId',
      targetCreateTime: 'TargetCreateTime',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetail: 'UdmDetail',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      exclude: 'string',
      failbackDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      include: 'string',
      initiatedByAck: 'boolean',
      options: 'string',
      otsDetail: OtsTableRestoreDetail,
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      targetBucket: 'string',
      targetContainer: 'string',
      targetContainerClusterId: 'string',
      targetCreateTime: 'number',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.failbackDetail) {
      $dara.Model.validateMap(this.failbackDetail);
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.udmDetail) {
      $dara.Model.validateMap(this.udmDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the role created in the RAM of the original account for cross-account backup managed by the current account.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values:
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The original account ID managed by the current account for cross-account backup.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The path not to be restored. All documents under this path will not be restored. Maximum length is 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * Details of restoring to the local environment.
   */
  failbackDetailShrink?: string;
  /**
   * @remarks
   * The path to be restored. All documents under this path will be restored. Maximum length is 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Indicates whether it is called by the container service. Default is false.
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * Parameters for the restore job.
   * 
   * @example
   * {\\"includes\\":[],\\"excludes\\":[],\\"conflictPolicy\\":\\"OVERWRITE_EXISTING\\"}
   */
  options?: string;
  /**
   * @remarks
   * Details of the Table Store instance.
   */
  otsDetailShrink?: string;
  /**
   * @remarks
   * The type of the restore destination data source. Possible values:
   *   - **ECS_FILE**: Restore to ECS file.
   *   - **OSS**: Restore to Alibaba Cloud OSS.
   *   - **NAS**: Restore to Alibaba Cloud NAS.
   *   - **OTS_TABLE**: Restore to Alibaba Cloud OTS.
   *   - **UDM_ECS_ROLLBACK**: Restore to Alibaba Cloud ECS whole machine.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The HASH value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Possible values:
   *   - **ECS_FILE**: Restore ECS file.
   *   - **OSS**: Restore Alibaba Cloud OSS.
   *   - **NAS**: Restore Alibaba Cloud NAS.
   *   - **OTS_TABLE**: Restore to Alibaba Cloud OTS.
   *   - **UDM_ECS**: Restore to Alibaba Cloud ECS whole machine.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **OSS**. Indicates the name of the OSS bucket at the restore destination.
   * 
   * @example
   * hbr-backup-oss
   */
  targetBucket?: string;
  /**
   * @remarks
   * Details of the target container.
   * 
   * @example
   * {\\"host\\":\\"k8s-node1\\",\\"hostPrefix\\":\\"/var/lib/kubelet/pods/4acb31fe-8577-40ff-bc8c-eccabd835f73/volumes/kubernetes.io~csi/pvc-b050b00e-ef17-4792-aab1-1642355cf1f4/mount\\",\\"pvPath\\":\\"/\\"}
   */
  targetContainer?: string;
  /**
   * @remarks
   * The ID of the target container cluster.
   * 
   * @example
   * cc-000amjsc7o1h9506oob7
   */
  targetContainerClusterId?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **NAS**. Indicates the creation time of the file system at the restore destination.
   * 
   * @example
   * 1554347313
   */
  targetCreateTime?: number;
  /**
   * @remarks
   * Valid only when **RestoreType** is **NAS**. Indicates the ID of the file system at the restore destination.
   * 
   * @example
   * 005494
   */
  targetFileSystemId?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **ECS_FILE**. Indicates the ECS instance ID at the restore destination.
   * 
   * @example
   * i-*********************
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the target Table Store instance.
   * 
   * @example
   * instancename
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **ECS_FILE**. Indicates the file path at the restore destination.
   * 
   * @example
   * C:\\
   */
  targetPath?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **OSS**. Indicates the object prefix at the restore destination.
   * 
   * @example
   * hbr
   */
  targetPrefix?: string;
  /**
   * @remarks
   * The name of the data table in the target Table Store.
   * 
   * @example
   * tablename
   */
  targetTableName?: string;
  /**
   * @remarks
   * The time of the Table Store to be restored. UNIX timestamp, in seconds.
   * 
   * @example
   * 1642496881
   */
  targetTime?: number;
  /**
   * @remarks
   * Details of the whole machine backup.
   * 
   * @example
   * {\\"sourceInstanceId\\":\\"i-uf62te6pm3iwsyxyz66q\\",\\"bootAfterRestore\\":false}
   */
  udmDetailShrink?: string;
  /**
   * @remarks
   * Valid only when **SourceType** is **UDM_ECS**. Indicates the target region for the restore.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * The ID of the backup vault that the snapshot belongs to.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      exclude: 'Exclude',
      failbackDetailShrink: 'FailbackDetail',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      targetBucket: 'TargetBucket',
      targetContainer: 'TargetContainer',
      targetContainerClusterId: 'TargetContainerClusterId',
      targetCreateTime: 'TargetCreateTime',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetailShrink: 'UdmDetail',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      exclude: 'string',
      failbackDetailShrink: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      options: 'string',
      otsDetailShrink: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      targetBucket: 'string',
      targetContainer: 'string',
      targetContainerClusterId: 'string',
      targetCreateTime: 'number',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetailShrink: 'string',
      udmRegionId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Description of the return message, usually \\"successful\\" when successful, and corresponding error messages when there is an error.
   * 
   * @example
   * successful
   */
  message?: string;
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
   * Restore job ID.
   * 
   * @example
   * r-*********************
   */
  restoreId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   *   - true: Success
   *   - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      restoreId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRestoreJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRestoreJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempFileUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file to be uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * file-list.txt
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempFileUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to which the file is uploaded.
   * 
   * @example
   * hbr-temp-bucket
   */
  bucketName?: string;
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
   * The endpoint that is used to upload the file to OSS.
   * 
   * @example
   * oss-cn-shenzhen.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the signature that is used to upload the file to OSS. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1654326678
   */
  expireTime?: number;
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
   * The AccessKey ID that is used to upload the file to OSS.
   * 
   * @example
   * LTAI****Up
   */
  ossAccessKeyId?: string;
  /**
   * @remarks
   * The policy that is used to upload the file to OSS.
   * 
   * @example
   * eyJleH****V19
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F4EEB401-DD21-588D-AE3B-1E835C7655E1
   */
  requestId?: string;
  /**
   * @remarks
   * The signature that is used to upload the file to OSS.
   * 
   * @example
   * RmhI****0A=
   */
  signature?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The key that is used to upload the file to OSS.
   * 
   * @example
   * temp/1440155109798732/upload/2022-07-29/49bed34c-b430-4e7e-89b1-4be2b734f95c/iaclone.diff
   */
  tempFileKey?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      code: 'Code',
      endpoint: 'Endpoint',
      expireTime: 'ExpireTime',
      message: 'Message',
      ossAccessKeyId: 'OssAccessKeyId',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
      tempFileKey: 'TempFileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      code: 'string',
      endpoint: 'string',
      expireTime: 'number',
      message: 'string',
      ossAccessKeyId: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
      tempFileKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempFileUploadUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTempFileUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTempFileUploadUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup vault. The description must be 0 to 255 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
   * 
   * *   **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
   * *   **KMS**: The source data is encrypted by using Key Management Service (KMS).
   * 
   * @example
   * KMS
   */
  encryptType?: string;
  /**
   * @remarks
   * The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
   * 
   * @example
   * alias/yzs-hhht
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * backupvaultname
   */
  vaultName?: string;
  /**
   * @remarks
   * The ID of the region where the backup vault resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
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
   * The type of the backup vault. Valid values:
   * 
   * *   **STANDARD**: standard backup vault
   * *   **OTS_BACKUP**: backup vault for Tablestore
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  wormEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      kmsKeyId: 'KmsKeyId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStorageClass: 'VaultStorageClass',
      vaultType: 'VaultType',
      wormEnabled: 'WormEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      kmsKeyId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStorageClass: 'string',
      vaultType: 'string',
      wormEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVaultResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the initialization task used to initialize the backup vault. You can call the DescribeTask operation to query the status of an initialization task.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVaultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVaultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVaultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAirEcsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-uf6ir9y******hvisj
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The data sources for which the client needs to be uninstalled.
   */
  uninstallClientSourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      uninstallClientSourceTypes: 'UninstallClientSourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      uninstallClientSourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uninstallClientSourceTypes)) {
      $dara.Model.validateArray(this.uninstallClientSourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAirEcsInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-uf6ir9y******hvisj
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The data sources for which the client needs to be uninstalled.
   */
  uninstallClientSourceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      uninstallClientSourceTypesShrink: 'UninstallClientSourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      uninstallClientSourceTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAirEcsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 33AA3AAE-89E1-5D3A-A51D-0C0A80850F68
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAirEcsInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAirEcsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAirEcsInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * This parameter is required.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBackupClientResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of HBR clients. The value can be a JSON array that consists of up to 100 client IDs. Separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["c-0007kyu045r0********", "c-000b6818umvo********"]
   */
  clientIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.clientIds) {
      $dara.Model.validateMap(this.clientIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of HBR clients. The value can be a JSON array that consists of up to 100 client IDs. Separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["c-0007kyu045r0********", "c-000b6818umvo********"]
   */
  clientIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupClientResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupClientResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBackupClientResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * Specifies whether no running jobs are required.
   * 
   * @example
   * false
   */
  requireNoRunningJobs?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **UDM_ECS**: ECS instances
   * *   **OTS**: Tablestore instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is required if the SourceType parameter is not set to UDM_ECS.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      requireNoRunningJobs: 'RequireNoRunningJobs',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      requireNoRunningJobs: 'boolean',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client.
   * 
   * @example
   * c-000************f3h
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acf************kwy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000************gs3
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * C51A9094-64B7-5DC0-B9FE-5FC1AC7E081D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClientResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000br3******0ooy2
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-00035lc8pwp1azdf3qku
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4ebtpkzx7zy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0007o******1ssno
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      planId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 071E4789-6256-526B-B22E-2A9CDDB9EB21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHanaBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHanaBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000g4z09******9cfc
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmwutpyat2kwy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security identifier (SID) of the SAP HANA database. You must specify a valid SID. The SID must be three characters in length and start with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
   * 
   * This parameter is required.
   * 
   * @example
   * HXE
   */
  sid?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0008n2******ax3
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 28EAF89A-E0D8-5C04-9A1D-B373B29BCFB9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHanaInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHanaInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHanaInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the data sources that you want to disassociate from the backup policy.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************hgp
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the data sources that you want to disassociate from the backup policy.
   */
  dataSourceIdsShrink?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************hgp
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 3E961A5E-C5C6-566D-BFC3-0362A6A52EBA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyBindingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyBindingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************2l6
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyV2ResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 33AA3AAE-89E1-5D3A-A51D-0C0A80850F68
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client. If you delete a backup snapshot for Elastic Compute Service (ECS) instances, you must specify one of the ClientId and **InstanceId** parameters.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly delete the most recent backup snapshot. Valid values:
   * 
   * *   true: The system forcibly deletes the most recent backup snapshot.
   * *   false (default): The system does not forcibly delete the most recent backup snapshot.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the ECS instance. If you delete a backup snapshot for ECS instances, you must specify one of the InstanceId and **ClientId** parameters.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * s-*********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the backup source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for ECS files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS (NAS) file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The token that you want to delete.
   * 
   * @example
   * 02WJDOE7
   */
  token?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      force: 'Force',
      instanceId: 'InstanceId',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      force: 'boolean',
      instanceId: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      token: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdmDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp15************xy70
   */
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdmDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdmDiskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUdmDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUdmDiskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdmEcsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zed************tlrm
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdmEcsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0497C0D3-82B5-56B2-8D64-D62E61B90E95
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdmEcsInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUdmEcsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUdmEcsInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmoiyerpacj4q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The token.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a*
   */
  token?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      token: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVaultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVaultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVaultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVaultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of HBR clients.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIds?: string[];
  /**
   * @remarks
   * The type of the HBR client. Valid values:
   * 
   * *   **ECS_CLIENT**: HBR client for Elastic Compute Service (ECS) file backup
   * *   **CONTAINER_CLIENT**: HBR client for container backup
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_CLIENT
   */
  clientType?: string;
  /**
   * @remarks
   * The ID of the cluster for the backup.
   * 
   * @example
   * cl-000ge4wa61b4d337xblq
   */
  clusterId?: string;
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
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 129374672382xxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of ECS instances.
   * 
   * @example
   * ["i-*********************"]
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * 33738719#
   */
  tag?: DescribeBackupClientsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeBackupClientsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.clientIds)) {
      $dara.Model.validateArray(this.clientIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
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

export class DescribeBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of HBR clients.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIdsShrink?: string;
  /**
   * @remarks
   * The type of the HBR client. Valid values:
   * 
   * *   **ECS_CLIENT**: HBR client for Elastic Compute Service (ECS) file backup
   * *   **CONTAINER_CLIENT**: HBR client for container backup
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_CLIENT
   */
  clientType?: string;
  /**
   * @remarks
   * The ID of the cluster for the backup.
   * 
   * @example
   * cl-000ge4wa61b4d337xblq
   */
  clusterId?: string;
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
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 129374672382xxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of ECS instances.
   * 
   * @example
   * ["i-*********************"]
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * 33738719#
   */
  tag?: DescribeBackupClientsShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      clientType: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeBackupClientsShrinkRequestTag },
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

export class DescribeBackupClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried backup clients.
   * 
   * @example
   * {\\"Client\\": []}
   */
  clients?: DescribeBackupClientsResponseBodyClients[];
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
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned HBR clients that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClients },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2Request extends $dara.Model {
  /**
   * @remarks
   * The keys that you want to match in the filter.
   */
  filters?: DescribeBackupJobs2RequestFilters[];
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **ASCEND**: sorts the results in ascending order
   * *   **DESCEND** (default value): sorts the results in descending order
   * 
   * @example
   * DESCEND
   */
  sortDirection?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * *   **UDM_ECS_DISK**: ECS disks
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortDirection: 'SortDirection',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeBackupJobs2RequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sortDirection: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned backup jobs that meet the specified conditions.
   */
  backupJobs?: DescribeBackupJobs2ResponseBodyBackupJobs;
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
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned backup jobs that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupJobs: 'BackupJobs',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobs: DescribeBackupJobs2ResponseBodyBackupJobs,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.backupJobs && typeof (this.backupJobs as any).validate === 'function') {
      (this.backupJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupJobs2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupJobs2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filters?: DescribeBackupPlansRequestFilters[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeBackupPlansRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried backup plans.
   */
  backupPlans?: DescribeBackupPlansResponseBodyBackupPlans;
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
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned backup plans that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlans: 'BackupPlans',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlans: DescribeBackupPlansResponseBodyBackupPlans,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.backupPlans && typeof (this.backupPlans as any).validate === 'function') {
      (this.backupPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlansResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupPlansResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * @example
   * c-000ed600******6b0
   */
  clientId?: string;
  /**
   * @remarks
   * The type of the Cloud Backup client. Valid value: **ECS_AGENT**, which indicates an SAP HANA backup client.
   * 
   * @example
   * ECS_AGENT
   */
  clientType?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0005ni1******2l87
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw6bxl7o5qyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the data source. Valid value:**HANA**, which indicates SAP HANA backup.
   * 
   * @example
   * HANA
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0001vk0z******xdyr
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Cloud Backup clients.
   */
  clients?: DescribeClientsResponseBodyClients;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17189276-465D-5EF3-8FFD-0FF51B5A41A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: DescribeClientsResponseBodyClients,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clients && typeof (this.clients as any).validate === 'function') {
      (this.clients as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-000*************hg9
   */
  clusterId?: string;
  /**
   * @remarks
   * The identifier of the container cluster. For a Container Service for Kubernetes (ACK) cluster, specify the cluster ID.
   * 
   * @example
   * cca*******************************87a
   */
  identifier?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      identifier: 'Identifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      identifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of clusters.
   */
  clusters?: DescribeContainerClusterResponseBodyClusters[];
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
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC94B755-C3C2-5B9D-BD77-E0FE819A4DB2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeContainerClusterResponseBodyClusters },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the accounts used in cross-account backup.
   */
  crossAccounts?: DescribeCrossAccountsResponseBodyCrossAccounts;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      crossAccounts: 'CrossAccounts',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      crossAccounts: DescribeCrossAccountsResponseBodyCrossAccounts,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.crossAccounts && typeof (this.crossAccounts as any).validate === 'function') {
      (this.crossAccounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCrossAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCrossAccountsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000chxz******lz7bk
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvywqfey5njq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000i4lg4kz******ahl
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the backup plan.
   */
  hanaBackupPlans?: DescribeHanaBackupPlansResponseBodyHanaBackupPlans;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F029C1C7-26B6-5ADD-A73E-D85CCD7C73A9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaBackupPlans: 'HanaBackupPlans',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaBackupPlans: DescribeHanaBackupPlansResponseBodyHanaBackupPlans,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaBackupPlans && typeof (this.hanaBackupPlans as any).validate === 'function') {
      (this.hanaBackupPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaBackupPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaBackupPlansResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00068btz******oku
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000css******za5uyqr
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponseBody extends $dara.Model {
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
   * The backup settings.
   */
  hanaBackupSetting?: DescribeHanaBackupSettingResponseBodyHanaBackupSetting;
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
   * The ID of the request.
   * 
   * @example
   * 9D0DB5BC-5071-5ADF-BCD1-14EBB0C17C54
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaBackupSetting: 'HanaBackupSetting',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaBackupSetting: DescribeHanaBackupSettingResponseBodyHanaBackupSetting,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.hanaBackupSetting && typeof (this.hanaBackupSetting as any).validate === 'function') {
      (this.hanaBackupSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaBackupSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaBackupSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupsAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00098******yuqvu
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * BPD
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to include differential backups in the query results. Valid values:
   * 
   * *   true: includes differential backups.
   * *   false: excludes differential backups.
   * 
   * @example
   * false
   */
  includeDifferential?: boolean;
  /**
   * @remarks
   * Specifies whether to include incremental backups in the query results. Valid values:
   * 
   * *   true: includes incremental backups.
   * *   false: excludes incremental backups.
   * 
   * @example
   * true
   */
  includeIncremental?: boolean;
  /**
   * @remarks
   * Specifies whether to include log backups in the query results. Valid values:
   * 
   * *   true: includes log backups.
   * *   false: excludes log backups.
   * 
   * @example
   * true
   */
  includeLog?: boolean;
  /**
   * @remarks
   * The log position to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  logPosition?: number;
  /**
   * @remarks
   * The recovery mode. Valid values:
   * 
   * *   **RECOVERY_TO_MOST_RECENT**: restores the database to the recently available state to which the database has been backed up.
   * *   **RECOVERY_TO_POINT_IN_TIME**: restores the database to a specified point in time.
   * *   **RECOVERY_TO_SPECIFIC_BACKUP**: restores the database to a specified backup.
   * *   **RECOVERY_TO_LOG_POSITION**: restores the database to a specified log position.
   * 
   * @example
   * RECOVERY_TO_SPECIFIC_BACKUP
   */
  mode?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The point in time to which you want to restore the database. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_POINT_IN_TIME**. Cloud Backup restores the database to a state closest to the specified point in time.
   * 
   * @example
   * 1649851200
   */
  recoveryPointInTime?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmz7mced2ldhy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the source system. This parameter specifies the name of the source database that you want to restore. You must set the parameter in the `<Source database name>@SID` format.
   * 
   * @example
   * P01@HP1
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source SAP HANA instance.
   * 
   * @example
   * cl-0000g3m******5cj
   */
  sourceClusterId?: string;
  /**
   * @remarks
   * Specifies whether to restore the database to a different instance.
   * 
   * *   true: restores the database to a different instance.
   * *   false: restores the database within the same instance.
   * 
   * @example
   * true
   */
  systemCopy?: boolean;
  /**
   * @remarks
   * Specifies whether Backint is used. Valid values:
   * 
   * *   true: Backint is used.
   * *   false: Backint is not used.
   * 
   * @example
   * false
   */
  useBackint?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000270c******pi81
   */
  vaultId?: string;
  /**
   * @remarks
   * The ID of the volume that you want to restore. This parameter is valid only if you set the Mode parameter to **RECOVERY_TO_LOG_POSITION**.
   * 
   * @example
   * 0
   */
  volumeId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      includeDifferential: 'IncludeDifferential',
      includeIncremental: 'IncludeIncremental',
      includeLog: 'IncludeLog',
      logPosition: 'LogPosition',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPointInTime: 'RecoveryPointInTime',
      resourceGroupId: 'ResourceGroupId',
      source: 'Source',
      sourceClusterId: 'SourceClusterId',
      systemCopy: 'SystemCopy',
      useBackint: 'UseBackint',
      vaultId: 'VaultId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      includeDifferential: 'boolean',
      includeIncremental: 'boolean',
      includeLog: 'boolean',
      logPosition: 'number',
      mode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPointInTime: 'number',
      resourceGroupId: 'string',
      source: 'string',
      sourceClusterId: 'string',
      systemCopy: 'boolean',
      useBackint: 'boolean',
      vaultId: 'string',
      volumeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupsAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31F97233-8563-563D-8880-914B00EEA928
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-0006xmbplrqebt9dhkth
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupsAsyncResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaBackupsAsyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaBackupsAsyncResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000hpc******uv14x
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw2azsegupmi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-00063fq******8xjr
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about SAP HANA databases.
   */
  hanaDatabases?: DescribeHanaDatabasesResponseBodyHanaDatabases;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DAAB6A29-34EB-5F56-962F-D5BDBFE8A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaDatabases: 'HanaDatabases',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaDatabases: DescribeHanaDatabasesResponseBodyHanaDatabases,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaDatabases && typeof (this.hanaDatabases as any).validate === 'function') {
      (this.hanaDatabases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaDatabasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaDatabasesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0001zfc******50pr3
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekz24ikcjyqjkq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the SAP HANA instance.
   */
  tag?: DescribeHanaInstancesRequestTag[];
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000b0ov******6zs
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeHanaInstancesRequestTag },
      vaultId: 'string',
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

export class DescribeHanaInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the SAP HANA instances.
   */
  hanas?: DescribeHanaInstancesResponseBodyHanas;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4003DD68-3C3C-5071-B4FC-631A6C1BAC1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanas: 'Hanas',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanas: DescribeHanaInstancesResponseBodyHanas,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanas && typeof (this.hanas as any).validate === 'function') {
      (this.hanas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 1632754800158
   */
  backupId?: number;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000b******soejg
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.\\`
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4ebtpkzx7zy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-0007o3vqfukfe92hvf13
   */
  restoreId?: string;
  /**
   * @remarks
   * The status of the restore job. Valid values:
   * 
   * *   **RUNNING**: The job is running.
   * *   **COMPLETE**: The job is completed.
   * *   **PARTIAL_COMPLETE**: The job is partially completed.
   * *   **FAILED**: The job failed.
   * *   **CANCELED**: The job is canceled.
   * *   **EXPIRED**: The job timed out.
   * 
   * @example
   * COMPLETE
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000au6bq******mpu
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      restoreId: 'RestoreId',
      restoreStatus: 'RestoreStatus',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      clusterId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      restoreId: 'string',
      restoreStatus: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about restore jobs.
   */
  hanaRestore?: DescribeHanaRestoresResponseBodyHanaRestore;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7DEFC897-8F05-5C05-912C-C9A9510FBFF1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaRestore: 'HanaRestore',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaRestore: DescribeHanaRestoresResponseBodyHanaRestore,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaRestore && typeof (this.hanaRestore as any).validate === 'function') {
      (this.hanaRestore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRestoresResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaRestoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaRestoresResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRetentionSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-0002ys1i******wwtf
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * C4P
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-000ii8t******ntrt2
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRetentionSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0003jyv******fsku5m
   */
  clusterId?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * Q01
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether the backup is permanently retained. Valid values:
   * 
   * *   true: The backup is permanently retained.
   * *   false: The backup is retained for the specified number of days.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 280DD872-EE25-52E8-9CB4-491067173DD0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of days for which the backup is retained. If the value of the Disabled parameter is false, the backup is retained for the number of days specified by this parameter.
   * 
   * @example
   * 3650
   */
  retentionDays?: number;
  /**
   * @remarks
   * The policy to update the retention period. Format: `I|{startTime}|{interval}`, which indicates that the retention period is updated at an interval of {interval} starting from {startTime}.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|0|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0006wkn7******zkn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      message: 'Message',
      requestId: 'RequestId',
      retentionDays: 'RetentionDays',
      schedule: 'Schedule',
      success: 'Success',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      message: 'string',
      requestId: 'string',
      retentionDays: 'number',
      schedule: 'string',
      success: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaRetentionSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHanaRetentionSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHanaRetentionSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The UID of the source account used for cross-account backup.
   * 
   * @example
   * 144015xxxxx98732
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The end time of the backup. The value must be a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652068250881
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of rows that you want the current query to return.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The Tablestore instances that are backed up.
   */
  otsInstances?: DescribeOtsTableSnapshotsRequestOtsInstances[];
  /**
   * @remarks
   * The snapshot IDs.
   */
  snapshotIds?: string[];
  /**
   * @remarks
   * The start time of the backup. The value must be a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611109271630
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      endTime: 'EndTime',
      limit: 'Limit',
      nextToken: 'NextToken',
      otsInstances: 'OtsInstances',
      snapshotIds: 'SnapshotIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      endTime: 'number',
      limit: 'number',
      nextToken: 'string',
      otsInstances: { 'type': 'array', 'itemType': DescribeOtsTableSnapshotsRequestOtsInstances },
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.otsInstances)) {
      $dara.Model.validateArray(this.otsInstances);
    }
    if(Array.isArray(this.snapshotIds)) {
      $dara.Model.validateArray(this.snapshotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of backup snapshots that are displayed on the current page.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09376812-6290-5E36-B504-E8010D72D1F0
   */
  requestId?: string;
  /**
   * @remarks
   * The backup snapshots.
   */
  snapshots?: DescribeOtsTableSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      limit: 'Limit',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      limit: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeOtsTableSnapshotsResponseBodySnapshots },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOtsTableSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOtsTableSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2Request extends $dara.Model {
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to obtain the next page of backup policies.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************2l6
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2ResponseBody extends $dara.Model {
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
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
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
   * The token that is used to obtain the next page of backup policies.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The backup policies.
   */
  policies?: DescribePoliciesV2ResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': DescribePoliciesV2ResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePoliciesV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePoliciesV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePoliciesV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * List of data source IDs.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * Query filters.
   */
  filters?: DescribePolicyBindingsRequestFilters[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token required to fetch the next page of policy and data source associations.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * po-000************hky
   */
  policyId?: string;
  /**
   * @remarks
   * Data source type. Possible values:
   * * **UDM_ECS**: Indicates ECS full machine backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      filters: { 'type': 'array', 'itemType': DescribePolicyBindingsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of data source IDs.
   */
  dataSourceIdsShrink?: string;
  /**
   * @remarks
   * Query filters.
   */
  filters?: DescribePolicyBindingsShrinkRequestFilters[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token required to fetch the next page of policy and data source associations.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * po-000************hky
   */
  policyId?: string;
  /**
   * @remarks
   * Data source type. Possible values:
   * * **UDM_ECS**: Indicates ECS full machine backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      filters: { 'type': 'array', 'itemType': DescribePolicyBindingsShrinkRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of results per query.
   * 
   * Range: 10~100. Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Description of the return message. A successful response usually returns \\"successful\\", while an error will return a corresponding error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token required to fetch the next page of policy and data source bindings.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * List of bound policies.
   */
  policyBindings?: DescribePolicyBindingsResponseBodyPolicyBindings[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5225929A-4EBD-55EE-9FE1-4A130E582A76
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 38
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      policyBindings: 'PolicyBindings',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      policyBindings: { 'type': 'array', 'itemType': DescribePolicyBindingsResponseBodyPolicyBindings },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyBindings)) {
      $dara.Model.validateArray(this.policyBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyBindingsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 1440155109798732
   */
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The list of Tablestore instances that can be restored and the tables in the instances.
   */
  otsInstances?: DescribeRecoverableOtsInstancesResponseBodyOtsInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14DC089E-5DD3-5028-AEDB-93D78E11DB2A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      otsInstances: 'OtsInstances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      otsInstances: { 'type': 'array', 'itemType': DescribeRecoverableOtsInstancesResponseBodyOtsInstances },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.otsInstances)) {
      $dara.Model.validateArray(this.otsInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecoverableOtsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecoverableOtsInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The regions returned.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3395EC6-7A4A-5282-A9AB-7A442F2CFC90
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2Request extends $dara.Model {
  /**
   * @remarks
   * The keys in the filter.
   */
  filters?: DescribeRestoreJobs2RequestFilters[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS_TABLE**: Tablestore instances
   * *   **UDM_ECS_ROLLBACK**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeRestoreJobs2RequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      restoreType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The queried restore jobs.
   * 
   * @example
   * {\\"RestoreJob\\": []}
   */
  restoreJobs?: DescribeRestoreJobs2ResponseBodyRestoreJobs;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      restoreJobs: 'RestoreJobs',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      restoreJobs: DescribeRestoreJobs2ResponseBodyRestoreJobs,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.restoreJobs && typeof (this.restoreJobs as any).validate === 'function') {
      (this.restoreJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreJobs2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRestoreJobs2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvywqfey5njq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 01W3ZZOQ
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * HttpCode
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The time when the task was complete. The time is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615607706
   */
  completedTime?: number;
  /**
   * @remarks
   * The time when the job was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615607706
   */
  createdTime?: number;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **created**: The job is created.
   * *   **expired**: The job expires.
   * *   **completed**: The job is completed.
   * *   **cancelled**: The job is canceled.
   * 
   * @example
   * completed
   */
  description?: string;
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
   * The name of the job.
   * 
   * @example
   * InstallBackupClientsTask
   */
  name?: string;
  /**
   * @remarks
   * The progress of the job. Valid values: 0 to 100. Unit: percentage (%). If the job fails, the value -1 is returned.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the job.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the job was updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615607706
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTime: 'CompletedTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      message: 'Message',
      name: 'Name',
      progress: 'Progress',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTime: 'number',
      createdTime: 'number',
      description: 'string',
      message: 'string',
      name: 'string',
      progress: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1560750pclffpzxy70
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1643092168
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp18x2k7sw925ir7ofh8
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * The list of backup snapshots.
   * 
   * @example
   * [\\"s-000e3vhhu62xsm6v92r0\\"]
   */
  snapshotIds?: { [key: string]: any };
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * *   **UDM_ECS_DISK**: disk backup subtask of ECS instance backup
   * *   **UDM_DISK**: disk backup
   * 
   * This parameter is required.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642057551
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the region where the ECS instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  udmRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      snapshotIds: 'SnapshotIds',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      udmRegionId: 'UdmRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      snapshotIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      startTime: 'number',
      udmRegionId: 'string',
    };
  }

  validate() {
    if(this.snapshotIds) {
      $dara.Model.validateMap(this.snapshotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1560750pclffpzxy70
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1643092168
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp18x2k7sw925ir7ofh8
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * The list of backup snapshots.
   * 
   * @example
   * [\\"s-000e3vhhu62xsm6v92r0\\"]
   */
  snapshotIdsShrink?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * *   **UDM_ECS_DISK**: disk backup subtask of ECS instance backup
   * *   **UDM_DISK**: disk backup
   * 
   * This parameter is required.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642057551
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the region where the ECS instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  udmRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      snapshotIdsShrink: 'SnapshotIds',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      udmRegionId: 'UdmRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      snapshotIdsShrink: 'string',
      sourceType: 'string',
      startTime: 'number',
      udmRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 51CDEECB-7001-51CC-94AC-2A0F2A4B71D2
   */
  requestId?: string;
  /**
   * @remarks
   * The details about snapshots.
   */
  snapshots?: DescribeUdmSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of backup snapshots.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeUdmSnapshotsResponseBodySnapshots },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUdmSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUdmSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUdmSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 01W3ZZOQ
   */
  token?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * v-00030j3c******sn
   * 
   * @deprecated
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsResponseBody extends $dara.Model {
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
   * The regions that support cross-region replication.
   */
  regions?: DescribeVaultReplicationRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F4EEB401-DD21-588D-AE3B-1E835C7655E1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      regions: DescribeVaultReplicationRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultReplicationRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVaultReplicationRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVaultReplicationRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVaultsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
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
   * Tag information. Supports up to 20 tags.
   * 
   * @example
   * 6a745bceffb042959b3b5206d6f12ad1
   */
  tag?: DescribeVaultsRequestTag[];
  /**
   * @remarks
   * Backup vault ID.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  /**
   * @remarks
   * The region ID to which the backup vault belongs.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * Backup repository type. The values are as follows: 
   * - **STANDARD**: Represents a standard repository, which can be used for ECS file backups, OSS backups, NAS backups, etc. 
   * - **OTS_BACKUP**: Represents a TableStore repository, which is only used for TableStore backups, and TableStore must use this type of repository.
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vaultId: 'VaultId',
      vaultRegionId: 'VaultRegionId',
      vaultType: 'VaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVaultsRequestTag },
      vaultId: 'string',
      vaultRegionId: 'string',
      vaultType: 'string',
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

export class DescribeVaultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVaultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVaultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNasFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the file system was created. The value must be a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1607436917
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up and restored within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up and restored within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up and restored across Alibaba Cloud accounts.
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNasFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of the asynchronous job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNasFileSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachNasFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachNasFileSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS (NAS) file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-0003tu******y5oc
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-0006o11ectqr650ceoct
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3erpwweavki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-000f9z******vilrr
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      planId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHanaBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FFC87EC8-8126-5967-9C4D-82715F8DFC97
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHanaBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableHanaBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableHanaBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS (NAS) file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-0001zfcn******0pr3
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4ebtpkzx7zy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-00030j3c******sn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      planId: 'PlanId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      planId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHanaBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHanaBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHanaBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableHanaBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the backup rule.
   * 
   * @example
   * rule-0002*****ux8
   */
  ruleId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS (NAS) file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      ruleId: 'RuleId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      ruleId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * i-bp1************dtv
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************hky
   */
  policyId?: string;
  /**
   * @remarks
   * Rule ID, limited to executing rules of **RuleType** **BACKUP**.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-0002*****ux8
   */
  ruleId?: string;
  /**
   * @remarks
   * Data source type, with the value range as follows:
   * 
   * - **UDM_ECS**: Represents ECS full machine backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      policyId: 'PolicyId',
      ruleId: 'RuleId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      policyId: 'string',
      ruleId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePolicyV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Backup job ID.
   * 
   * @example
   * job-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * Description of the return message, usually returns \\"successful\\" on success, and corresponding error messages on failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F4EEB401-DD21-588D-AE3B-1E835C7655E1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecutePolicyV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecutePolicyV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecutePolicyV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRamPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of policy that you want to generate. Valid values:
   * 
   * *   BACKUP: the permission to back up data to a backup vault
   * *   RESTORE: the permission to restore data from a backup vault
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  actionType?: string;
  /**
   * @remarks
   * Specifies whether to generate the policy based on an existing instance-specific rule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  requireBasePolicy?: boolean;
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
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0007al3m******7ao
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      requireBasePolicy: 'RequireBasePolicy',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      requireBasePolicy: 'boolean',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRamPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * {     "Version": "1",     "Statement": [         {             "Effect": "Deny",             "Action": [                 "hbr:CreateRestore",                 "hbr:CreateRestoreJob",                 "hbr:CreateHanaRestore",                 "hbr:CreateUniRestorePlan",                 "hbr:CreateSqlServerRestore"             ],             "Resource": [                 "acs:hbr:*:1178******531:vault/v-000******blx06",                 "acs:hbr:*:1178******531:vault/v-000******blx06/client/*"             ]         }     ] }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      policyDocument: 'PolicyDocument',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      policyDocument: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRamPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateRamPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateRamPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTempFileDownloadLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key that is used to download a file.
   * 
   * This parameter is required.
   * 
   * @example
   * temp/1797733170015112/report/r-000jdzknbp39cnf9hs99/r-000jdzknbp39cnf9hs99-total.csv
   */
  tempFileKey?: string;
  static names(): { [key: string]: string } {
    return {
      tempFileKey: 'TempFileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tempFileKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTempFileDownloadLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * @example
   * https://a-hbr-temp-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/job-0007yg2i0m6705wdhgb6_0.csv?Expires=1649406469&OSSAccessKeyId=LTAIjGotF8wX****&Signature=26%2BgjegCrRmMDCpS5jzyG4ivKU8%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTempFileDownloadLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTempFileDownloadLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTempFileDownloadLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 16392782xxxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of the ECS instances. You can specify up to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-0xi5wj5*****v3j3bh2gj5"]
   */
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.instanceIds) {
      $dara.Model.validateMap(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 16392782xxxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of the ECS instances. You can specify up to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-0xi5wj5*****v3j3bh2gj5"]
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsResponseBody extends $dara.Model {
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
   * The status of the ECS instance.
   */
  instanceStatuses?: InstallBackupClientsResponseBodyInstanceStatuses[];
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': InstallBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatuses)) {
      $dara.Model.validateArray(this.instanceStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallBackupClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallBackupClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHbrServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 215463686160696
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F4A1D5F4-5055-549A-8B25-6DD23311E299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHbrServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenHbrServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenHbrServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows that you want the current query to return. To query only the number of matched rows without the need to return specific data, you can set the Limit parameter to `0`. Then, the operation returns only the number of matched rows.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ordering mode. Valid values:
   * 
   * *   ASC (default): ascending order
   * *   DESC: descending order
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The query conditions. Example:
   * 
   *     [
   *       {
   *         "field": "VaultId",
   *         "value": "v-0003rf9m*****qx5",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "InstanceId",
   *         "value": "i-bp1i20zq2*****e9368m",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "PlanId",
   *         "value": "plan-0005vk*****gkd1iu4f",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "CompleteTime",
   *         "value": "1626769913",
   *         "operation": "GREATER_THAN_OR_EQUAL"
   *       }
   *     ]
   * 
   * *   The following fields are supported:
   * 
   *     *   VaultId: specifies the ID of the backup vault. This field is required.
   *     *   InstanceId: specifies the ID of the Elastic Compute Service (ECS) instance. If the SourceType parameter is set to ECS_FILE, this field is required.
   *     *   Bucket: specifies the name of the Object Storage Service (OSS) bucket. If the SourceType parameter is set to OSS, this field is required.
   *     *   FileSystemId: specifies the ID of the File Storage NAS (NAS) file system. If the SourceType parameter is set to NAS, this field is required.
   *     *   CreateTime: specifies the time when the NAS file system was created. If the SourceType parameter is set to NAS, this field is required.
   *     *   CompleteTime: specifies the time when the backup snapshot was completed.
   *     *   PlanId: the ID of a backup plan.
   * 
   * *   The following operations are supported:
   * 
   *     *   MATCH_TERM: exact match.
   *     *   GREATER_THAN: greater than.
   *     *   GREATER_THAN_OR_EQUAL: greater than or equal to.
   *     *   LESS_THAN: less than.
   *     *   LESS_THAN_OR_EQUAL: less than or equal to.
   *     *   BETWEEN: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,Maximum value]` format.
   *     *   IN: specifies an array as a collection. The results must fall within the collection.
   *     *   NOT_IN: specifies an array as a collection. The results cannot fall within the collection.
   * 
   * @example
   * [   {     "field": "VaultId",     "value": "v-0003rf9m17pap3ltpqx5",     "operation": "MATCH_TERM"   },   {     "field": "InstanceId",     "value": "i-bp1i20zq2wuzdie9368m",     "operation": "MATCH_TERM"   },   {     "field": "PlanId",     "value": "plan-0005vkqhpesqgkd1iu4f",     "operation": "MATCH_TERM"   },   {     "field": "CompleteTime",     "value": 1626769913,     "operation": "GREATER_THAN_OR_EQUAL"   } ]
   */
  query?: any[];
  /**
   * @remarks
   * The field that is used to sort data.
   * 
   * @example
   * CreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for Elastic Compute Service (ECS) files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      order: 'Order',
      query: 'Query',
      sortBy: 'SortBy',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      order: 'string',
      query: { 'type': 'array', 'itemType': 'any' },
      sortBy: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.query)) {
      $dara.Model.validateArray(this.query);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows that you want the current query to return. To query only the number of matched rows without the need to return specific data, you can set the Limit parameter to `0`. Then, the operation returns only the number of matched rows.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ordering mode. Valid values:
   * 
   * *   ASC (default): ascending order
   * *   DESC: descending order
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The query conditions. Example:
   * 
   *     [
   *       {
   *         "field": "VaultId",
   *         "value": "v-0003rf9m*****qx5",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "InstanceId",
   *         "value": "i-bp1i20zq2*****e9368m",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "PlanId",
   *         "value": "plan-0005vk*****gkd1iu4f",
   *         "operation": "MATCH_TERM"
   *       },
   *       {
   *         "field": "CompleteTime",
   *         "value": "1626769913",
   *         "operation": "GREATER_THAN_OR_EQUAL"
   *       }
   *     ]
   * 
   * *   The following fields are supported:
   * 
   *     *   VaultId: specifies the ID of the backup vault. This field is required.
   *     *   InstanceId: specifies the ID of the Elastic Compute Service (ECS) instance. If the SourceType parameter is set to ECS_FILE, this field is required.
   *     *   Bucket: specifies the name of the Object Storage Service (OSS) bucket. If the SourceType parameter is set to OSS, this field is required.
   *     *   FileSystemId: specifies the ID of the File Storage NAS (NAS) file system. If the SourceType parameter is set to NAS, this field is required.
   *     *   CreateTime: specifies the time when the NAS file system was created. If the SourceType parameter is set to NAS, this field is required.
   *     *   CompleteTime: specifies the time when the backup snapshot was completed.
   *     *   PlanId: the ID of a backup plan.
   * 
   * *   The following operations are supported:
   * 
   *     *   MATCH_TERM: exact match.
   *     *   GREATER_THAN: greater than.
   *     *   GREATER_THAN_OR_EQUAL: greater than or equal to.
   *     *   LESS_THAN: less than.
   *     *   LESS_THAN_OR_EQUAL: less than or equal to.
   *     *   BETWEEN: specifies a JSON array as a range. The results must fall within the range in the `[Minimum value,Maximum value]` format.
   *     *   IN: specifies an array as a collection. The results must fall within the collection.
   *     *   NOT_IN: specifies an array as a collection. The results cannot fall within the collection.
   * 
   * @example
   * [   {     "field": "VaultId",     "value": "v-0003rf9m17pap3ltpqx5",     "operation": "MATCH_TERM"   },   {     "field": "InstanceId",     "value": "i-bp1i20zq2wuzdie9368m",     "operation": "MATCH_TERM"   },   {     "field": "PlanId",     "value": "plan-0005vkqhpesqgkd1iu4f",     "operation": "MATCH_TERM"   },   {     "field": "CompleteTime",     "value": 1626769913,     "operation": "GREATER_THAN_OR_EQUAL"   } ]
   */
  queryShrink?: string;
  /**
   * @remarks
   * The field that is used to sort data.
   * 
   * @example
   * CreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for Elastic Compute Service (ECS) files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      order: 'Order',
      queryShrink: 'Query',
      sortBy: 'SortBy',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      order: 'string',
      queryShrink: 'string',
      sortBy: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponseBody extends $dara.Model {
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
   * The number of historical backup snapshots that are displayed on the current page.
   * 
   * @example
   * 10
   */
  limit?: number;
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
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * BE
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The historical backup snapshots.
   */
  snapshots?: SearchHistoricalSnapshotsResponseBodySnapshots;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned backup snapshots that meet the specified conditions.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      limit: 'Limit',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      limit: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: SearchHistoricalSnapshotsResponseBodySnapshots,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHistoricalSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchHistoricalSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchHistoricalSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHanaDatabaseAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000a9ipe******sme
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * HXE
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0000hrh******vhr3i
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHanaDatabaseAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the job that is used to initialize the backup vault. You can call the DescribeTask operation to query the job status.
   * 
   * @example
   * t-000bjt479yefheij1o0x
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHanaDatabaseAsyncResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartHanaDatabaseAsyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartHanaDatabaseAsyncResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHanaDatabaseAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000dw******45ijer
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * BWP
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0006wkn******gzkn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHanaDatabaseAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD8B903B-DE8F-5969-9414-B2C634D504D9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-0007o3vqfukgd3y5bxxr
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopHanaDatabaseAsyncResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopHanaDatabaseAsyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopHanaDatabaseAsyncResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Cloud Backup clients. The sum of the number of Cloud Backup client IDs and the number of ECS instance IDs cannot exceed 20. Otherwise, an error occurs.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIds?: { [key: string]: any };
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up and restored within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up and restored within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up and restored across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * 129349237xxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of Elastic Compute Service (ECS) instances. You can specify a maximum of 20 ECS instances.
   * 
   * @example
   * ["i-0xi5wj5*****v3j3bh2gj5"]
   */
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.clientIds) {
      $dara.Model.validateMap(this.clientIds);
    }
    if(this.instanceIds) {
      $dara.Model.validateMap(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Cloud Backup clients. The sum of the number of Cloud Backup client IDs and the number of ECS instance IDs cannot exceed 20. Otherwise, an error occurs.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIdsShrink?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up and restored within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up and restored within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up and restored across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up and restore data across Alibaba Cloud accounts.
   * 
   * @example
   * 129349237xxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of Elastic Compute Service (ECS) instances. You can specify a maximum of 20 ECS instances.
   * 
   * @example
   * ["i-0xi5wj5*****v3j3bh2gj5"]
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the ECS instance.
   */
  instanceStatuses?: UninstallBackupClientsResponseBodyInstanceStatuses[];
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of the asynchronous job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': UninstallBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatuses)) {
      $dara.Model.validateArray(this.instanceStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallBackupClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UninstallBackupClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HBR client.
   * 
   * This parameter is required.
   * 
   * @example
   * c-000iuqo******zi3rn
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3erpwweavki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0008n2q******ax3
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallClientResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 048A2164-3732-5DF5-88B5-F97FA56DAEB1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-0009qs5qcnvuvqrl2mxl
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallClientResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UninstallClientResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the incremental file synchronization. This parameter is required for data synchronization only.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The details about ECS instance backup. The value is a JSON string.
   * 
   * *   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are enhanced SSDs (ESSDs).
   * *   appConsistent: specifies whether to enable application consistency. If you set this parameter to true, you must also specify the preScriptPath and postScriptPath parameters.
   * *   preScriptPath: the path to the pre-freeze scripts.
   * *   postScriptPath: the path to the post-thaw scripts.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the paths to the files that are excluded from the backup job. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the paths to the files that you want to back up. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature of keeping at least one backup version. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies whether to use Windows Volume Shadow Copy Service (VSS) to define a source path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before you can set this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot back up data from multiple directories.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: OtsDetail;
  /**
   * @remarks
   * The source paths.
   */
  path?: string[];
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-20211***735
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **OSS**. This parameter specifies the prefix of objects that you want to back up. After a prefix is specified, only objects whose names start with the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The retention period of the backup data. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The rule of the backup plan.
   */
  rule?: UpdateBackupPlanRequestRule[];
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the `{startTime}` parameter and the subsequent backup jobs at an interval that is specified in the `{interval}` parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   **startTime**: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   **interval**: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the throttling rules. To ensure business continuity, you can limit the bandwidth that is used for file backup during peak hours. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.
   * 
   * *   **start**: the start hour
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Specifies whether to update the source path if the backup source is empty. Valid values:
   * 
   * *   true: The system replaces the original source path with the specified source path.
   * *   false: The system does not update the original source path. The system backs up data based on the source path that you specified when you created the backup plan.
   * 
   * @example
   * false
   */
  updatePaths?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      changeListPath: 'ChangeListPath',
      detail: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetail: 'OtsDetail',
      path: 'Path',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatePaths: 'UpdatePaths',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeListPath: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      exclude: 'string',
      include: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetail: OtsDetail,
      path: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': UpdateBackupPlanRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatePaths: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the incremental file synchronization. This parameter is required for data synchronization only.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * The details about ECS instance backup. The value is a JSON string.
   * 
   * *   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are enhanced SSDs (ESSDs).
   * *   appConsistent: specifies whether to enable application consistency. If you set this parameter to true, you must also specify the preScriptPath and postScriptPath parameters.
   * *   preScriptPath: the path to the pre-freeze scripts.
   * *   postScriptPath: the path to the post-thaw scripts.
   * 
   * @example
   * {\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}
   */
  detailShrink?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the paths to the files that are excluded from the backup job. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the paths to the files that you want to back up. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature of keeping at least one backup version. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is enabled.
   * 
   * @example
   * 1
   */
  keepLatestSnapshots?: number;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies whether to use Windows Volume Shadow Copy Service (VSS) to define a source path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before you can set this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot back up data from multiple directories.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetailShrink?: string;
  /**
   * @remarks
   * The source paths.
   */
  path?: string[];
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-20211***735
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * planname
   */
  planName?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **OSS**. This parameter specifies the prefix of objects that you want to back up. After a prefix is specified, only objects whose names start with the prefix are backed up.
   * 
   * @example
   * oss-prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The retention period of the backup data. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The rule of the backup plan.
   */
  rule?: UpdateBackupPlanShrinkRequestRule[];
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the `{startTime}` parameter and the subsequent backup jobs at an interval that is specified in the `{interval}` parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   **startTime**: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   **interval**: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS file systems
   * *   **OTS**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required only if the **SourceType** parameter is set to **ECS_FILE**. This parameter specifies the throttling rules. To ensure business continuity, you can limit the bandwidth that is used for file backup during peak hours. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.
   * 
   * *   **start**: the start hour
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * Specifies whether to update the source path if the backup source is empty. Valid values:
   * 
   * *   true: The system replaces the original source path with the specified source path.
   * *   false: The system does not update the original source path. The system backs up data based on the source path that you specified when you created the backup plan.
   * 
   * @example
   * false
   */
  updatePaths?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0006******q
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      changeListPath: 'ChangeListPath',
      detailShrink: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      keepLatestSnapshots: 'KeepLatestSnapshots',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      path: 'Path',
      planId: 'PlanId',
      planName: 'PlanName',
      prefix: 'Prefix',
      retention: 'Retention',
      rule: 'Rule',
      schedule: 'Schedule',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      updatePaths: 'UpdatePaths',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeListPath: 'string',
      detailShrink: 'string',
      exclude: 'string',
      include: 'string',
      keepLatestSnapshots: 'number',
      options: 'string',
      otsDetailShrink: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      planName: 'string',
      prefix: 'string',
      retention: 'number',
      rule: { 'type': 'array', 'itemType': UpdateBackupPlanShrinkRequestRule },
      schedule: 'string',
      sourceType: 'string',
      speedLimit: 'string',
      updatePaths: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate alert for partially completed jobs. This parameter is valid only for on-premises file backup and ECS file backup.
   * 
   * @example
   * false
   */
  alertOnPartialComplete?: boolean;
  /**
   * @remarks
   * The ID of the HBR client.
   * 
   * This parameter is required.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The type of the endpoint on the data plane. Valid values:
   * 
   * *   **PUBLIC**: Internet
   * *   **VPC**: virtual private cloud (VPC)
   * *   **CLASSIC**: classic network
   * 
   * @example
   * VPC
   */
  dataNetworkType?: string;
  /**
   * @remarks
   * The proxy configuration on the data plane. Valid values:
   * 
   * *   **DISABLE**: The proxy is not used.
   * *   **USE_CONTROL_PROXY** (default): The configuration is the same as that on the control plane.
   * *   **CUSTOM**: The configuration is customized (HTTP).
   * 
   * @example
   * USE_CONTROL_PROXY
   */
  dataProxySetting?: string;
  /**
   * @remarks
   * The number of CPU cores used by a single backup job. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxCpuCore?: number;
  /**
   * @remarks
   * The maximum memory that can be used by the client. Unit: bytes. Only V2.13.0 and later are supported.
   * 
   * @example
   * 4096
   */
  maxMemory?: number;
  /**
   * @remarks
   * The number of concurrent backup jobs. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxWorker?: number;
  /**
   * @remarks
   * The custom host IP address of the proxy server on the data plane.
   * 
   * @example
   * 192.168.11.100
   */
  proxyHost?: string;
  /**
   * @remarks
   * The custom password of the proxy server on the data plane.
   * 
   * @example
   * ******
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The custom host port of the proxy server on the data plane.
   * 
   * @example
   * 3128
   */
  proxyPort?: number;
  /**
   * @remarks
   * The custom username of the proxy server on the data plane.
   * 
   * @example
   * user
   */
  proxyUser?: string;
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
   * Specifies whether to transmit the data on the data plane over HTTPS. Valid values:
   * 
   * *   true: Data is transmitted over HTTPS.
   * *   false: Data is transmitted over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is required for the old HBR client.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertOnPartialComplete: 'AlertOnPartialComplete',
      clientId: 'ClientId',
      dataNetworkType: 'DataNetworkType',
      dataProxySetting: 'DataProxySetting',
      maxCpuCore: 'MaxCpuCore',
      maxMemory: 'MaxMemory',
      maxWorker: 'MaxWorker',
      proxyHost: 'ProxyHost',
      proxyPassword: 'ProxyPassword',
      proxyPort: 'ProxyPort',
      proxyUser: 'ProxyUser',
      resourceGroupId: 'ResourceGroupId',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOnPartialComplete: 'boolean',
      clientId: 'string',
      dataNetworkType: 'string',
      dataProxySetting: 'string',
      maxCpuCore: 'number',
      maxMemory: 'number',
      maxWorker: 'number',
      proxyHost: 'string',
      proxyPassword: 'string',
      proxyPort: 'number',
      proxyUser: 'string',
      resourceGroupId: 'string',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientSettingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientSettingsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-000**************134
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster description.
   * 
   * @example
   * description ack pv backup
   */
  description?: string;
  /**
   * @remarks
   * Cluster name.
   * 
   * @example
   * ack_pv_backup_location
   */
  name?: string;
  /**
   * @remarks
   * Network type, with possible values including:
   * * **CLASSIC**: Classic Network.
   * * **VPC**: Virtual Private Cloud.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Whether to regenerate the token.
   * 
   * @example
   * false
   */
  renewToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      name: 'Name',
      networkType: 'NetworkType',
      renewToken: 'RenewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      name: 'string',
      networkType: 'string',
      renewToken: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return information.
   * 
   * @example
   * successful
   */
  message?: string;
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
   * Indicates if the request was successful.
   * 
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Cluster token, used for registering HBR clients within the cluster.
   * 
   * @example
   * eyJhY2NvdW*****VnZpgXQC5A==
   */
  token?: string;
  /**
   * @remarks
   * Indicates whether the cluster token has been updated.
   * 
   * @example
   * false
   */
  tokenUpdated?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
      tokenUpdated: 'TokenUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
      tokenUpdated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateContainerClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateContainerClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * COMPLETE_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-0005dhe******f38
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-000br3cm4dqvmtph7cul
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * plan-20211109-162411
   */
  planName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmze36euddwjq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0000rcw******5c6
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      clusterId: 'ClusterId',
      planId: 'PlanId',
      planName: 'PlanName',
      resourceGroupId: 'ResourceGroupId',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      clusterId: 'string',
      planId: 'string',
      planName: 'string',
      resourceGroupId: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F23BCC67-09B4-582C-AE70-C813C8548DCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHanaBackupPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration file for catalog backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  catalogBackupParameterFile?: string;
  /**
   * @remarks
   * Specifies whether to use Backint to back up catalogs. Valid values:
   * 
   * *   true: Backint is used to back up catalogs.
   * *   false: Backint is not used to back up catalogs.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  catalogBackupUsingBackint?: boolean;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000ezvg******8znz
   */
  clusterId?: string;
  /**
   * @remarks
   * The configuration file for data backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  dataBackupParameterFile?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic log backup. Valid values:
   * 
   * *   **true**: enables automatic log backup.
   * *   **false**: disables automatic log backup.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableAutoLogBackup?: boolean;
  /**
   * @remarks
   * The configuration file for log backup.
   * 
   * @example
   * /usr/sap/SID/SYS/global/hdb/opt/hdbconfig/param
   */
  logBackupParameterFile?: string;
  /**
   * @remarks
   * The interval at which logs are backed up. Unit: seconds.
   * 
   * @example
   * 900
   */
  logBackupTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use Backint to back up logs. Valid values:
   * 
   * *   true: Backint is used to back up logs.
   * *   false: Backint is not used to back up logs.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logBackupUsingBackint?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0005n******rluw5
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogBackupParameterFile: 'CatalogBackupParameterFile',
      catalogBackupUsingBackint: 'CatalogBackupUsingBackint',
      clusterId: 'ClusterId',
      dataBackupParameterFile: 'DataBackupParameterFile',
      databaseName: 'DatabaseName',
      enableAutoLogBackup: 'EnableAutoLogBackup',
      logBackupParameterFile: 'LogBackupParameterFile',
      logBackupTimeout: 'LogBackupTimeout',
      logBackupUsingBackint: 'LogBackupUsingBackint',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBackupParameterFile: 'string',
      catalogBackupUsingBackint: 'boolean',
      clusterId: 'string',
      dataBackupParameterFile: 'string',
      databaseName: 'string',
      enableAutoLogBackup: 'boolean',
      logBackupParameterFile: 'string',
      logBackupTimeout: 'number',
      logBackupUsingBackint: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupSettingResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 4892D474-9A4A-5298-BCD3-E46112A1EFD0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaBackupSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaBackupSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHanaBackupSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-000axjt******c6j8
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the SAP HANA instance.
   * 
   * @example
   * SAP-HANA-DEV
   */
  hanaName?: string;
  /**
   * @remarks
   * The private or internal IP address of the host where the primary node of the SAP HANA instance resides.
   * 
   * @example
   * 47.100.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The instance number of the SAP HANA system.
   * 
   * This parameter is required.
   * 
   * @example
   * 00
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The password that is used to connect with the SAP HANA database.
   * 
   * @example
   * **********
   */
  password?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzvx7d3c4kpny
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to connect with the SAP HANA database over Secure Sockets Layer (SSL). Valid values:
   * 
   * *   true: The SAP HANA database is connected over SSL.
   * *   false: The SAP HANA database is not connected over SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useSsl?: boolean;
  /**
   * @remarks
   * The username of the SYSTEMDB database.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * Specifies whether to verify the SSL certificate of the SAP HANA database. Valid values:
   * 
   * *   true: The SSL certificate of the SAP HANA database is verified.
   * *   false: The SSL certificate of the SAP HANA database is not verified.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  validateCertificate?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0003v4ah******9xp
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clusterId: 'ClusterId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clusterId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      password: 'string',
      resourceGroupId: 'string',
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6AB6D5A-9D21-5529-9335-A894FB045ED6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHanaInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaRetentionSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00024vyjj******srrq
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to permanently retain the backup. Valid values:
   * 
   * *   true: The backup is permanently retained.
   * *   false: The backup is retained for the specified number of days.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days. If you set the Disabled parameter to false, the backup is retained for the number of days specified by this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  retentionDays?: number;
  /**
   * @remarks
   * The policy to update the retention period. Format: `I|{startTime}|{interval}`. The retention period is updated at an interval of {interval} starting from {startTime}.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour, and P1D indicates an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|0|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-000fb0v2ly******k6
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      retentionDays: 'RetentionDays',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      retentionDays: 'number',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaRetentionSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BEE26EB-8EE3-57A0-A9DE-5FD700165DE5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHanaRetentionSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHanaRetentionSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHanaRetentionSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced options.
   */
  advancedOptions?: UpdatePolicyBindingRequestAdvancedOptions;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1************dtv
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
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the type of files that do not need to be backed up. No files of the specified type are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the type of files to be backed up. All files of the specified type are backed up. The value can be up to 255 characters in length.
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
   * po-000************5xx-i-2ze************nw4
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************ky9
   */
  policyId?: string;
  /**
   * @remarks
   * *   If the SourceType parameter is set to **OSS**, set the Source parameter to the prefix of the path to the folder that you want to back up. If you do not specify the Source parameter, the entire bucket (root directory) is backed up.
   * *   If the SourceType parameter is set to **ECS_FILE** or **File**, set the Source parameter to the path to the files that you want to back up. If you do not specify the Source parameter, all paths backed up.
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * 
   * This parameter is required.
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
   * 0:24:5120
   */
  speedLimit?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptions: 'AdvancedOptions',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      exclude: 'Exclude',
      include: 'Include',
      policyBindingDescription: 'PolicyBindingDescription',
      policyId: 'PolicyId',
      source: 'Source',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptions: UpdatePolicyBindingRequestAdvancedOptions,
      dataSourceId: 'string',
      disabled: 'boolean',
      exclude: 'string',
      include: 'string',
      policyBindingDescription: 'string',
      policyId: 'string',
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

export class UpdatePolicyBindingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced options.
   */
  advancedOptionsShrink?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1************dtv
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
  disabled?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the type of files that do not need to be backed up. No files of the specified type are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * [\\"*.doc\\",\\"*.xltm\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **ECS_FILE** or **File**. This parameter specifies the type of files to be backed up. All files of the specified type are backed up. The value can be up to 255 characters in length.
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
   * po-000************5xx-i-2ze************nw4
   */
  policyBindingDescription?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************ky9
   */
  policyId?: string;
  /**
   * @remarks
   * *   If the SourceType parameter is set to **OSS**, set the Source parameter to the prefix of the path to the folder that you want to back up. If you do not specify the Source parameter, the entire bucket (root directory) is backed up.
   * *   If the SourceType parameter is set to **ECS_FILE** or **File**, set the Source parameter to the path to the files that you want to back up. If you do not specify the Source parameter, all paths backed up.
   * 
   * @example
   * backup/
   */
  source?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * 
   * This parameter is required.
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
   * 0:24:5120
   */
  speedLimit?: string;
  static names(): { [key: string]: string } {
    return {
      advancedOptionsShrink: 'AdvancedOptions',
      dataSourceId: 'DataSourceId',
      disabled: 'Disabled',
      exclude: 'Exclude',
      include: 'Include',
      policyBindingDescription: 'PolicyBindingDescription',
      policyId: 'PolicyId',
      source: 'Source',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedOptionsShrink: 'string',
      dataSourceId: 'string',
      disabled: 'boolean',
      exclude: 'string',
      include: 'string',
      policyBindingDescription: 'string',
      policyId: 'string',
      source: 'string',
      sourceType: 'string',
      speedLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6F24C46-54B9-519B-9AB8-A8988D705E67
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyBindingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePolicyBindingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2Request extends $dara.Model {
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************viy
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rules?: UpdatePolicyV2RequestRules[];
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      rules: { 'type': 'array', 'itemType': UpdatePolicyV2RequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup policy.
   * 
   * @example
   * Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************viy
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the backup policy.
   * 
   * @example
   * Daily Local Backup + Remote Backup
   */
  policyName?: string;
  /**
   * @remarks
   * The rules in the backup policy.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'PolicyDescription',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyId: 'string',
      policyName: 'string',
      rulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2ResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePolicyV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup vault. The description must be 0 to 255 characters in length.
   * 
   * @example
   * vault description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm2fa2xeiebyy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * @example
   * vaultname
   */
  vaultName?: string;
  wormEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
      vaultName: 'VaultName',
      wormEnabled: 'WormEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
      vaultName: 'string',
      wormEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVaultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVaultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVaultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVaultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Cloud Backup clients. The total number of Cloud Backup client IDs and ECS instance IDs cannot exceed 100.
   * 
   * @example
   * ["i-0xi5wj******3j3bh2gj5"]
   */
  clientIds?: { [key: string]: any };
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
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 1283948272xxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of Elastic Compute Service (ECS) instances. The total number of ECS instance IDs and Cloud Backup client IDs cannot exceed 100.
   * 
   * @example
   * ["c-*********************"]
   */
  instanceIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.clientIds) {
      $dara.Model.validateMap(this.clientIds);
    }
    if(this.instanceIds) {
      $dara.Model.validateMap(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Cloud Backup clients. The total number of Cloud Backup client IDs and ECS instance IDs cannot exceed 100.
   * 
   * @example
   * ["i-0xi5wj******3j3bh2gj5"]
   */
  clientIdsShrink?: string;
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
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 1283948272xxxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of Elastic Compute Service (ECS) instances. The total number of ECS instance IDs and Cloud Backup client IDs cannot exceed 100.
   * 
   * @example
   * ["c-*********************"]
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      instanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsResponseBody extends $dara.Model {
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
   * The status of the ECS instance. If the status of an ECS instance cannot meet the requirements to install an HBR client and the value of the InstanceIds parameter is greater than 1, an error message is returned based on the value of this parameter.
   */
  instanceStatuses?: UpgradeBackupClientsResponseBodyInstanceStatuses[];
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: { 'type': 'array', 'itemType': UpgradeBackupClientsResponseBodyInstanceStatuses },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatuses)) {
      $dara.Model.validateArray(this.instanceStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeBackupClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeBackupClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * @example
   * c-000boklw******63a9
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy6uja5wyc2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000djw8ci******3ic
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceGroupId: 'ResourceGroupId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceGroupId: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22D97921-16BD-547C-B175-1DC25B1DCD73
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-000i97jujk0z58a2ignf
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClientResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "hbr.aliyuncs.com",
      'cn-beijing-finance-pop': "hbr.aliyuncs.com",
      'cn-beijing-gov-1': "hbr.aliyuncs.com",
      'cn-beijing-nu16-b01': "hbr.aliyuncs.com",
      'cn-edge-1': "hbr.aliyuncs.com",
      'cn-fujian': "hbr.aliyuncs.com",
      'cn-haidian-cm12-c01': "hbr.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hbr.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hbr.aliyuncs.com",
      'cn-hangzhou-test-306': "hbr.aliyuncs.com",
      'cn-hongkong-finance-pop': "hbr.aliyuncs.com",
      'cn-huhehaote-nebula-1': "hbr.aliyuncs.com",
      'cn-qingdao-nebula': "hbr.aliyuncs.com",
      'cn-shanghai-et15-b01': "hbr.aliyuncs.com",
      'cn-shanghai-et2-b01': "hbr.aliyuncs.com",
      'cn-shanghai-inner': "hbr.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hbr.aliyuncs.com",
      'cn-shenzhen-inner': "hbr.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hbr.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hbr.aliyuncs.com",
      'cn-wuhan': "hbr.aliyuncs.com",
      'cn-yushanfang': "hbr.aliyuncs.com",
      'cn-zhangbei': "hbr.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hbr.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hbr.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hbr.aliyuncs.com",
      'eu-west-1-oxs': "hbr.aliyuncs.com",
      'rus-west-1-pop': "hbr.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hbr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Registers a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - AddContainerClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddContainerClusterResponse
   */
  async addContainerClusterWithOptions(request: AddContainerClusterRequest, runtime: $dara.RuntimeOptions): Promise<AddContainerClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddContainerClusterResponse>(await this.callApi(params, req, runtime), new AddContainerClusterResponse({}));
    } else {
      return $dara.cast<AddContainerClusterResponse>(await this.execute(params, req, runtime), new AddContainerClusterResponse({}));
    }

  }

  /**
   * Registers a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - AddContainerClusterRequest
   * @returns AddContainerClusterResponse
   */
  async addContainerCluster(request: AddContainerClusterRequest): Promise<AddContainerClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addContainerClusterWithOptions(request, runtime);
  }

  /**
   * Cancels a backup job.
   * 
   * @param request - CancelBackupJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelBackupJobResponse
   */
  async cancelBackupJobWithOptions(request: CancelBackupJobRequest, runtime: $dara.RuntimeOptions): Promise<CancelBackupJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelBackupJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelBackupJobResponse>(await this.callApi(params, req, runtime), new CancelBackupJobResponse({}));
    } else {
      return $dara.cast<CancelBackupJobResponse>(await this.execute(params, req, runtime), new CancelBackupJobResponse({}));
    }

  }

  /**
   * Cancels a backup job.
   * 
   * @param request - CancelBackupJobRequest
   * @returns CancelBackupJobResponse
   */
  async cancelBackupJob(request: CancelBackupJobRequest): Promise<CancelBackupJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelBackupJobWithOptions(request, runtime);
  }

  /**
   * Cancels a restore job.
   * 
   * @param request - CancelRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRestoreJobResponse
   */
  async cancelRestoreJobWithOptions(request: CancelRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<CancelRestoreJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.restoreId)) {
      query["RestoreId"] = request.restoreId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRestoreJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelRestoreJobResponse>(await this.callApi(params, req, runtime), new CancelRestoreJobResponse({}));
    } else {
      return $dara.cast<CancelRestoreJobResponse>(await this.execute(params, req, runtime), new CancelRestoreJobResponse({}));
    }

  }

  /**
   * Cancels a restore job.
   * 
   * @param request - CancelRestoreJobRequest
   * @returns CancelRestoreJobResponse
   */
  async cancelRestoreJob(request: CancelRestoreJobRequest): Promise<CancelRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRestoreJobWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @remarks
   *   In the Cloud Backup console, you can use resource groups to manage resources such as backup vaults, Cloud Backup clients, and SAP HANA instances.
   * *   A resource is a cloud service entity that you create on Alibaba Cloud, such as an Elastic Compute Service (ECS) instance, a backup vault, or an SAP HANA instance.
   * *   You can sort resources owned by your Alibaba Cloud account into various resource groups. Resource groups facilitate resource management among multiple projects or applications within your Alibaba Cloud account and simplify permission management.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @remarks
   *   In the Cloud Backup console, you can use resource groups to manage resources such as backup vaults, Cloud Backup clients, and SAP HANA instances.
   * *   A resource is a cloud service entity that you create on Alibaba Cloud, such as an Elastic Compute Service (ECS) instance, a backup vault, or an SAP HANA instance.
   * *   You can sort resources owned by your Alibaba Cloud account into various resource groups. Resource groups facilitate resource management among multiple projects or applications within your Alibaba Cloud account and simplify permission management.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Checks whether the user has permissions to access the current resource or page.
   * 
   * @param request - CheckRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRoleResponse
   */
  async checkRoleWithOptions(request: CheckRoleRequest, runtime: $dara.RuntimeOptions): Promise<CheckRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkRoleType)) {
      query["CheckRoleType"] = request.checkRoleType;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckRole",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckRoleResponse>(await this.callApi(params, req, runtime), new CheckRoleResponse({}));
    } else {
      return $dara.cast<CheckRoleResponse>(await this.execute(params, req, runtime), new CheckRoleResponse({}));
    }

  }

  /**
   * Checks whether the user has permissions to access the current resource or page.
   * 
   * @param request - CheckRoleRequest
   * @returns CheckRoleResponse
   */
  async checkRole(request: CheckRoleRequest): Promise<CheckRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkRoleWithOptions(request, runtime);
  }

  /**
   * Creates a backup job.
   * 
   * @param tmpReq - CreateBackupJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupJobResponse
   */
  async createBackupJobWithOptions(tmpReq: CreateBackupJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateBackupJobResponse> {
    tmpReq.validate();
    let request = new CreateBackupJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.containerClusterId)) {
      query["ContainerClusterId"] = request.containerClusterId;
    }

    if (!$dara.isNull(request.containerResources)) {
      query["ContainerResources"] = request.containerResources;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!$dara.isNull(request.exclude)) {
      query["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      query["Include"] = request.include;
    }

    if (!$dara.isNull(request.initiatedByAck)) {
      query["InitiatedByAck"] = request.initiatedByAck;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateBackupJobResponse>(await this.callApi(params, req, runtime), new CreateBackupJobResponse({}));
    } else {
      return $dara.cast<CreateBackupJobResponse>(await this.execute(params, req, runtime), new CreateBackupJobResponse({}));
    }

  }

  /**
   * Creates a backup job.
   * 
   * @param request - CreateBackupJobRequest
   * @returns CreateBackupJobResponse
   */
  async createBackupJob(request: CreateBackupJobRequest): Promise<CreateBackupJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupJobWithOptions(request, runtime);
  }

  /**
   * Create a backup plan.
   * 
   * @remarks
   * - A backup plan associates data sources with backup policies and other necessary information for backups. After the execution of a backup plan, it generates a backup task that records the progress and results of the backup. If the backup task is successful, a backup snapshot is created. You can use the backup snapshot to create a recovery task.
   * - A backup plan supports only one type of data source.
   * - A backup plan supports only a single fixed interval backup cycle strategy.
   * - A backup plan can back up to only one backup vault.
   * 
   * @param tmpReq - CreateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlanWithOptions(tmpReq: CreateBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    tmpReq.validate();
    let request = new CreateBackupPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destDataSourceDetail)) {
      request.destDataSourceDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destDataSourceDetail, "DestDataSourceDetail", "json");
    }

    if (!$dara.isNull(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    if (!$dara.isNull(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.changeListPath)) {
      query["ChangeListPath"] = request.changeListPath;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.destDataSourceDetailShrink)) {
      query["DestDataSourceDetail"] = request.destDataSourceDetailShrink;
    }

    if (!$dara.isNull(request.destDataSourceId)) {
      query["DestDataSourceId"] = request.destDataSourceId;
    }

    if (!$dara.isNull(request.destSourceType)) {
      query["DestSourceType"] = request.destSourceType;
    }

    if (!$dara.isNull(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.keepLatestSnapshots)) {
      query["KeepLatestSnapshots"] = request.keepLatestSnapshots;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      body["Include"] = request.include;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.rule)) {
      body["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.speedLimit)) {
      body["SpeedLimit"] = request.speedLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateBackupPlanResponse>(await this.callApi(params, req, runtime), new CreateBackupPlanResponse({}));
    } else {
      return $dara.cast<CreateBackupPlanResponse>(await this.execute(params, req, runtime), new CreateBackupPlanResponse({}));
    }

  }

  /**
   * Create a backup plan.
   * 
   * @remarks
   * - A backup plan associates data sources with backup policies and other necessary information for backups. After the execution of a backup plan, it generates a backup task that records the progress and results of the backup. If the backup task is successful, a backup snapshot is created. You can use the backup snapshot to create a recovery task.
   * - A backup plan supports only one type of data source.
   * - A backup plan supports only a single fixed interval backup cycle strategy.
   * - A backup plan can back up to only one backup vault.
   * 
   * @param request - CreateBackupPlanRequest
   * @returns CreateBackupPlanResponse
   */
  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  /**
   * Installs one or more Cloud Backup clients on specified instances.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of Cloud Backup. For more information, see [Billing methods and billable items](https://help.aliyun.com/document_detail/89062.html).
   * 
   * @param request - CreateClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientsResponse
   */
  async createClientsWithOptions(request: CreateClientsRequest, runtime: $dara.RuntimeOptions): Promise<CreateClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!$dara.isNull(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.useHttps)) {
      query["UseHttps"] = request.useHttps;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateClientsResponse>(await this.callApi(params, req, runtime), new CreateClientsResponse({}));
    } else {
      return $dara.cast<CreateClientsResponse>(await this.execute(params, req, runtime), new CreateClientsResponse({}));
    }

  }

  /**
   * Installs one or more Cloud Backup clients on specified instances.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and pricing of Cloud Backup. For more information, see [Billing methods and billable items](https://help.aliyun.com/document_detail/89062.html).
   * 
   * @param request - CreateClientsRequest
   * @returns CreateClientsResponse
   */
  async createClients(request: CreateClientsRequest): Promise<CreateClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientsWithOptions(request, runtime);
  }

  /**
   * Creates a backup plan for an SAP HANA instance.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - CreateHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHanaBackupPlanResponse
   */
  async createHanaBackupPlanWithOptions(request: CreateHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<CreateHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!$dara.isNull(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new CreateHanaBackupPlanResponse({}));
    } else {
      return $dara.cast<CreateHanaBackupPlanResponse>(await this.execute(params, req, runtime), new CreateHanaBackupPlanResponse({}));
    }

  }

  /**
   * Creates a backup plan for an SAP HANA instance.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - CreateHanaBackupPlanRequest
   * @returns CreateHanaBackupPlanResponse
   */
  async createHanaBackupPlan(request: CreateHanaBackupPlanRequest): Promise<CreateHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Registers an SAP HANA instance.
   * 
   * @remarks
   * To register an SAP HANA instance, you must configure the SAP HANA connection information. After the SAP HANA instance is registered, Cloud Backup installs a backup client on the node of the SAP HANA instance.
   * 
   * @param request - CreateHanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHanaInstanceResponse
   */
  async createHanaInstanceWithOptions(request: CreateHanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateHanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.hanaName)) {
      query["HanaName"] = request.hanaName;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceNumber)) {
      query["InstanceNumber"] = request.instanceNumber;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.validateCertificate)) {
      query["ValidateCertificate"] = request.validateCertificate;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHanaInstanceResponse>(await this.callApi(params, req, runtime), new CreateHanaInstanceResponse({}));
    } else {
      return $dara.cast<CreateHanaInstanceResponse>(await this.execute(params, req, runtime), new CreateHanaInstanceResponse({}));
    }

  }

  /**
   * Registers an SAP HANA instance.
   * 
   * @remarks
   * To register an SAP HANA instance, you must configure the SAP HANA connection information. After the SAP HANA instance is registered, Cloud Backup installs a backup client on the node of the SAP HANA instance.
   * 
   * @param request - CreateHanaInstanceRequest
   * @returns CreateHanaInstanceResponse
   */
  async createHanaInstance(request: CreateHanaInstanceRequest): Promise<CreateHanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHanaInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a restore job for an SAP HANA database.
   * 
   * @remarks
   * If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](https://help.aliyun.com/document_detail/101178.html).
   * 
   * @param request - CreateHanaRestoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHanaRestoreResponse
   */
  async createHanaRestoreWithOptions(request: CreateHanaRestoreRequest, runtime: $dara.RuntimeOptions): Promise<CreateHanaRestoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!$dara.isNull(request.checkAccess)) {
      query["CheckAccess"] = request.checkAccess;
    }

    if (!$dara.isNull(request.clearLog)) {
      query["ClearLog"] = request.clearLog;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.logPosition)) {
      query["LogPosition"] = request.logPosition;
    }

    if (!$dara.isNull(request.masterClientId)) {
      query["MasterClientId"] = request.masterClientId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.recoveryPointInTime)) {
      query["RecoveryPointInTime"] = request.recoveryPointInTime;
    }

    if (!$dara.isNull(request.sidAdmin)) {
      query["SidAdmin"] = request.sidAdmin;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceClusterId)) {
      query["SourceClusterId"] = request.sourceClusterId;
    }

    if (!$dara.isNull(request.systemCopy)) {
      query["SystemCopy"] = request.systemCopy;
    }

    if (!$dara.isNull(request.useCatalog)) {
      query["UseCatalog"] = request.useCatalog;
    }

    if (!$dara.isNull(request.useDelta)) {
      query["UseDelta"] = request.useDelta;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHanaRestore",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHanaRestoreResponse>(await this.callApi(params, req, runtime), new CreateHanaRestoreResponse({}));
    } else {
      return $dara.cast<CreateHanaRestoreResponse>(await this.execute(params, req, runtime), new CreateHanaRestoreResponse({}));
    }

  }

  /**
   * Creates a restore job for an SAP HANA database.
   * 
   * @remarks
   * If you call this operation to restore a database, the database is restored to a specified state. Proceed with caution. For more information, see [Restore databases to an SAP HANA instance](https://help.aliyun.com/document_detail/101178.html).
   * 
   * @param request - CreateHanaRestoreRequest
   * @returns CreateHanaRestoreResponse
   */
  async createHanaRestore(request: CreateHanaRestoreRequest): Promise<CreateHanaRestoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHanaRestoreWithOptions(request, runtime);
  }

  /**
   * Binds one or more data sources to a backup policy.
   * 
   * @remarks
   *   You can bind data sources to only one policy in each request.
   * *   Elastic Compute Service (ECS) instances can be bound to only one policy.
   * 
   * @param tmpReq - CreatePolicyBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyBindingsResponse
   */
  async createPolicyBindingsWithOptions(tmpReq: CreatePolicyBindingsRequest, runtime: $dara.RuntimeOptions): Promise<CreatePolicyBindingsResponse> {
    tmpReq.validate();
    let request = new CreatePolicyBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.policyBindingList)) {
      request.policyBindingListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policyBindingList, "PolicyBindingList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyBindingListShrink)) {
      query["PolicyBindingList"] = request.policyBindingListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyBindings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyBindingsResponse>(await this.callApi(params, req, runtime), new CreatePolicyBindingsResponse({}));
    } else {
      return $dara.cast<CreatePolicyBindingsResponse>(await this.execute(params, req, runtime), new CreatePolicyBindingsResponse({}));
    }

  }

  /**
   * Binds one or more data sources to a backup policy.
   * 
   * @remarks
   *   You can bind data sources to only one policy in each request.
   * *   Elastic Compute Service (ECS) instances can be bound to only one policy.
   * 
   * @param request - CreatePolicyBindingsRequest
   * @returns CreatePolicyBindingsResponse
   */
  async createPolicyBindings(request: CreatePolicyBindingsRequest): Promise<CreatePolicyBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyBindingsWithOptions(request, runtime);
  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * A backup policy records the information required for backup. After you execute a backup policy, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   A backup policy supports multiple data sources. The data sources can be only Elastic Compute Service (ECS) instances.
   * *   You can specify only one interval as a backup cycle in a backup policy.
   * *   Each backup policy allows you to back up data to only one backup vault.
   * 
   * @param tmpReq - CreatePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyV2Response
   */
  async createPolicyV2WithOptions(tmpReq: CreatePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<CreatePolicyV2Response> {
    tmpReq.validate();
    let request = new CreatePolicyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyDescription)) {
      body["PolicyDescription"] = request.policyDescription;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyV2Response>(await this.callApi(params, req, runtime), new CreatePolicyV2Response({}));
    } else {
      return $dara.cast<CreatePolicyV2Response>(await this.execute(params, req, runtime), new CreatePolicyV2Response({}));
    }

  }

  /**
   * Creates a backup policy.
   * 
   * @remarks
   * A backup policy records the information required for backup. After you execute a backup policy, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   A backup policy supports multiple data sources. The data sources can be only Elastic Compute Service (ECS) instances.
   * *   You can specify only one interval as a backup cycle in a backup policy.
   * *   Each backup policy allows you to back up data to only one backup vault.
   * 
   * @param request - CreatePolicyV2Request
   * @returns CreatePolicyV2Response
   */
  async createPolicyV2(request: CreatePolicyV2Request): Promise<CreatePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyV2WithOptions(request, runtime);
  }

  /**
   * Creates a mirror vault.
   * 
   * @remarks
   * After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.Call this operation in the region where the mirror vault resides, which is specified by the VaultRegionId parameter.
   * 
   * @param request - CreateReplicationVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReplicationVaultResponse
   */
  async createReplicationVaultWithOptions(request: CreateReplicationVaultRequest, runtime: $dara.RuntimeOptions): Promise<CreateReplicationVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.redundancyType)) {
      query["RedundancyType"] = request.redundancyType;
    }

    if (!$dara.isNull(request.replicationSourceRegionId)) {
      query["ReplicationSourceRegionId"] = request.replicationSourceRegionId;
    }

    if (!$dara.isNull(request.replicationSourceVaultId)) {
      query["ReplicationSourceVaultId"] = request.replicationSourceVaultId;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!$dara.isNull(request.vaultStorageClass)) {
      query["VaultStorageClass"] = request.vaultStorageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReplicationVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateReplicationVaultResponse>(await this.callApi(params, req, runtime), new CreateReplicationVaultResponse({}));
    } else {
      return $dara.cast<CreateReplicationVaultResponse>(await this.execute(params, req, runtime), new CreateReplicationVaultResponse({}));
    }

  }

  /**
   * Creates a mirror vault.
   * 
   * @remarks
   * After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.Call this operation in the region where the mirror vault resides, which is specified by the VaultRegionId parameter.
   * 
   * @param request - CreateReplicationVaultRequest
   * @returns CreateReplicationVaultResponse
   */
  async createReplicationVault(request: CreateReplicationVaultRequest): Promise<CreateReplicationVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReplicationVaultWithOptions(request, runtime);
  }

  /**
   * Create a restore job.
   * 
   * @remarks
   * - Create a restore job based on the selected snapshot and the restore destination.
   * - Currently, the data source type must match the restore destination data source type.
   * 
   * @param tmpReq - CreateRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRestoreJobResponse
   */
  async createRestoreJobWithOptions(tmpReq: CreateRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateRestoreJobResponse> {
    tmpReq.validate();
    let request = new CreateRestoreJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.failbackDetail)) {
      request.failbackDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.failbackDetail, "FailbackDetail", "json");
    }

    if (!$dara.isNull(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    if (!$dara.isNull(tmpReq.udmDetail)) {
      request.udmDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.udmDetail, "UdmDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.failbackDetailShrink)) {
      query["FailbackDetail"] = request.failbackDetailShrink;
    }

    if (!$dara.isNull(request.initiatedByAck)) {
      query["InitiatedByAck"] = request.initiatedByAck;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.snapshotHash)) {
      query["SnapshotHash"] = request.snapshotHash;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.targetBucket)) {
      query["TargetBucket"] = request.targetBucket;
    }

    if (!$dara.isNull(request.targetContainer)) {
      query["TargetContainer"] = request.targetContainer;
    }

    if (!$dara.isNull(request.targetContainerClusterId)) {
      query["TargetContainerClusterId"] = request.targetContainerClusterId;
    }

    if (!$dara.isNull(request.targetCreateTime)) {
      query["TargetCreateTime"] = request.targetCreateTime;
    }

    if (!$dara.isNull(request.targetFileSystemId)) {
      query["TargetFileSystemId"] = request.targetFileSystemId;
    }

    if (!$dara.isNull(request.targetInstanceName)) {
      query["TargetInstanceName"] = request.targetInstanceName;
    }

    if (!$dara.isNull(request.targetPrefix)) {
      query["TargetPrefix"] = request.targetPrefix;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!$dara.isNull(request.targetTime)) {
      query["TargetTime"] = request.targetTime;
    }

    if (!$dara.isNull(request.udmDetailShrink)) {
      query["UdmDetail"] = request.udmDetailShrink;
    }

    if (!$dara.isNull(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      body["Include"] = request.include;
    }

    if (!$dara.isNull(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      body["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetPath)) {
      body["TargetPath"] = request.targetPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRestoreJob",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRestoreJobResponse>(await this.callApi(params, req, runtime), new CreateRestoreJobResponse({}));
    } else {
      return $dara.cast<CreateRestoreJobResponse>(await this.execute(params, req, runtime), new CreateRestoreJobResponse({}));
    }

  }

  /**
   * Create a restore job.
   * 
   * @remarks
   * - Create a restore job based on the selected snapshot and the restore destination.
   * - Currently, the data source type must match the restore destination data source type.
   * 
   * @param request - CreateRestoreJobRequest
   * @returns CreateRestoreJobResponse
   */
  async createRestoreJob(request: CreateRestoreJobRequest): Promise<CreateRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRestoreJobWithOptions(request, runtime);
  }

  /**
   * Generates the parameters and signature required for a file upload URL.
   * 
   * @remarks
   * 1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
   * 2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
   * 3.  The system periodically deletes files that are uploaded to OSS.
   * 
   * @param request - CreateTempFileUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTempFileUploadUrlResponse
   */
  async createTempFileUploadUrlWithOptions(request: CreateTempFileUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<CreateTempFileUploadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTempFileUploadUrl",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTempFileUploadUrlResponse>(await this.callApi(params, req, runtime), new CreateTempFileUploadUrlResponse({}));
    } else {
      return $dara.cast<CreateTempFileUploadUrlResponse>(await this.execute(params, req, runtime), new CreateTempFileUploadUrlResponse({}));
    }

  }

  /**
   * Generates the parameters and signature required for a file upload URL.
   * 
   * @remarks
   * 1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
   * 2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
   * 3.  The system periodically deletes files that are uploaded to OSS.
   * 
   * @param request - CreateTempFileUploadUrlRequest
   * @returns CreateTempFileUploadUrlResponse
   */
  async createTempFileUploadUrl(request: CreateTempFileUploadUrlRequest): Promise<CreateTempFileUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTempFileUploadUrlWithOptions(request, runtime);
  }

  /**
   * Creates a backup vault.
   * 
   * @remarks
   *   Each Alibaba Cloud account can create up to 100 backup vaults.
   * *   After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state. A backup job can use a backup vault to store backup data only if the backup vault is in the CREATED state.
   *     **
   *     **Note** Before you call this operation, make sure that you fully understand the billing of Cloud Backup.
   * 
   * @param request - CreateVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVaultResponse
   */
  async createVaultWithOptions(request: CreateVaultRequest, runtime: $dara.RuntimeOptions): Promise<CreateVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!$dara.isNull(request.vaultStorageClass)) {
      query["VaultStorageClass"] = request.vaultStorageClass;
    }

    if (!$dara.isNull(request.vaultType)) {
      query["VaultType"] = request.vaultType;
    }

    if (!$dara.isNull(request.wormEnabled)) {
      query["WormEnabled"] = request.wormEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVaultResponse>(await this.callApi(params, req, runtime), new CreateVaultResponse({}));
    } else {
      return $dara.cast<CreateVaultResponse>(await this.execute(params, req, runtime), new CreateVaultResponse({}));
    }

  }

  /**
   * Creates a backup vault.
   * 
   * @remarks
   *   Each Alibaba Cloud account can create up to 100 backup vaults.
   * *   After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state. A backup job can use a backup vault to store backup data only if the backup vault is in the CREATED state.
   *     **
   *     **Note** Before you call this operation, make sure that you fully understand the billing of Cloud Backup.
   * 
   * @param request - CreateVaultRequest
   * @returns CreateVaultResponse
   */
  async createVault(request: CreateVaultRequest): Promise<CreateVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVaultWithOptions(request, runtime);
  }

  /**
   * Removes the Elastic Compute Service (ECS) instance that is used for restoration only in ECS Backup Essential Edition.
   * 
   * @param tmpReq - DeleteAirEcsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAirEcsInstanceResponse
   */
  async deleteAirEcsInstanceWithOptions(tmpReq: DeleteAirEcsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAirEcsInstanceResponse> {
    tmpReq.validate();
    let request = new DeleteAirEcsInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.uninstallClientSourceTypes)) {
      request.uninstallClientSourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uninstallClientSourceTypes, "UninstallClientSourceTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.uninstallClientSourceTypesShrink)) {
      query["UninstallClientSourceTypes"] = request.uninstallClientSourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAirEcsInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAirEcsInstanceResponse>(await this.callApi(params, req, runtime), new DeleteAirEcsInstanceResponse({}));
    } else {
      return $dara.cast<DeleteAirEcsInstanceResponse>(await this.execute(params, req, runtime), new DeleteAirEcsInstanceResponse({}));
    }

  }

  /**
   * Removes the Elastic Compute Service (ECS) instance that is used for restoration only in ECS Backup Essential Edition.
   * 
   * @param request - DeleteAirEcsInstanceRequest
   * @returns DeleteAirEcsInstanceResponse
   */
  async deleteAirEcsInstance(request: DeleteAirEcsInstanceRequest): Promise<DeleteAirEcsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAirEcsInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Cloud Backup client.
   * 
   * @remarks
   *   You cannot delete the active Cloud Backup clients that receive heartbeat packets within 1 hour. You can call the UninstallBackupClients operation to uninstall a Cloud Backup client. Then, the client becomes inactive.
   * *   When you perform this operation, resources that are associated with the client are also deleted, including:
   *     *   Backup plans
   *     *   Backup jobs
   *     *   Snapshots
   * 
   * @param request - DeleteBackupClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupClientResponse
   */
  async deleteBackupClientWithOptions(request: DeleteBackupClientRequest, runtime: $dara.RuntimeOptions): Promise<DeleteBackupClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteBackupClientResponse>(await this.callApi(params, req, runtime), new DeleteBackupClientResponse({}));
    } else {
      return $dara.cast<DeleteBackupClientResponse>(await this.execute(params, req, runtime), new DeleteBackupClientResponse({}));
    }

  }

  /**
   * Deletes a Cloud Backup client.
   * 
   * @remarks
   *   You cannot delete the active Cloud Backup clients that receive heartbeat packets within 1 hour. You can call the UninstallBackupClients operation to uninstall a Cloud Backup client. Then, the client becomes inactive.
   * *   When you perform this operation, resources that are associated with the client are also deleted, including:
   *     *   Backup plans
   *     *   Backup jobs
   *     *   Snapshots
   * 
   * @param request - DeleteBackupClientRequest
   * @returns DeleteBackupClientResponse
   */
  async deleteBackupClient(request: DeleteBackupClientRequest): Promise<DeleteBackupClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupClientWithOptions(request, runtime);
  }

  /**
   * Deletes the resources that are related to one or more HBR clients.
   * 
   * @remarks
   * This operation deletes only the resources that are related to HBR clients. The resources include backup plans, backup jobs, and backup snapshots. The operation does not delete HBR clients.
   * 
   * @param tmpReq - DeleteBackupClientResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupClientResourceResponse
   */
  async deleteBackupClientResourceWithOptions(tmpReq: DeleteBackupClientResourceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteBackupClientResourceResponse> {
    tmpReq.validate();
    let request = new DeleteBackupClientResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupClientResource",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteBackupClientResourceResponse>(await this.callApi(params, req, runtime), new DeleteBackupClientResourceResponse({}));
    } else {
      return $dara.cast<DeleteBackupClientResourceResponse>(await this.execute(params, req, runtime), new DeleteBackupClientResourceResponse({}));
    }

  }

  /**
   * Deletes the resources that are related to one or more HBR clients.
   * 
   * @remarks
   * This operation deletes only the resources that are related to HBR clients. The resources include backup plans, backup jobs, and backup snapshots. The operation does not delete HBR clients.
   * 
   * @param request - DeleteBackupClientResourceRequest
   * @returns DeleteBackupClientResourceResponse
   */
  async deleteBackupClientResource(request: DeleteBackupClientResourceRequest): Promise<DeleteBackupClientResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupClientResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a backup plan.
   * 
   * @remarks
   *   If you delete a backup plan, the backup jobs are also deleted.
   * *   If you delete a backup plan, the created snapshot files are not deleted.
   * 
   * @param request - DeleteBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupPlanResponse
   */
  async deleteBackupPlanWithOptions(request: DeleteBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<DeleteBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.requireNoRunningJobs)) {
      query["RequireNoRunningJobs"] = request.requireNoRunningJobs;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteBackupPlanResponse>(await this.callApi(params, req, runtime), new DeleteBackupPlanResponse({}));
    } else {
      return $dara.cast<DeleteBackupPlanResponse>(await this.execute(params, req, runtime), new DeleteBackupPlanResponse({}));
    }

  }

  /**
   * Deletes a backup plan.
   * 
   * @remarks
   *   If you delete a backup plan, the backup jobs are also deleted.
   * *   If you delete a backup plan, the created snapshot files are not deleted.
   * 
   * @param request - DeleteBackupPlanRequest
   * @returns DeleteBackupPlanResponse
   */
  async deleteBackupPlan(request: DeleteBackupPlanRequest): Promise<DeleteBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupPlanWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientResponse
   */
  async deleteClientWithOptions(request: DeleteClientRequest, runtime: $dara.RuntimeOptions): Promise<DeleteClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteClientResponse>(await this.callApi(params, req, runtime), new DeleteClientResponse({}));
    } else {
      return $dara.cast<DeleteClientResponse>(await this.execute(params, req, runtime), new DeleteClientResponse({}));
    }

  }

  /**
   * @param request - DeleteClientRequest
   * @returns DeleteClientResponse
   */
  async deleteClient(request: DeleteClientRequest): Promise<DeleteClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientWithOptions(request, runtime);
  }

  /**
   * Deletes an SAP HANA backup plan.
   * 
   * @param request - DeleteHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHanaBackupPlanResponse
   */
  async deleteHanaBackupPlanWithOptions(request: DeleteHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<DeleteHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new DeleteHanaBackupPlanResponse({}));
    } else {
      return $dara.cast<DeleteHanaBackupPlanResponse>(await this.execute(params, req, runtime), new DeleteHanaBackupPlanResponse({}));
    }

  }

  /**
   * Deletes an SAP HANA backup plan.
   * 
   * @param request - DeleteHanaBackupPlanRequest
   * @returns DeleteHanaBackupPlanResponse
   */
  async deleteHanaBackupPlan(request: DeleteHanaBackupPlanRequest): Promise<DeleteHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Deletes an SAP HANA instance.
   * 
   * @remarks
   * If you delete an SAP HANA instance, the existing backup data is also deleted and the running backup and restore jobs fail to be completed. Before you delete the SAP HANA instance, make sure that you no longer need the backup data of the instance and no backup or restore jobs are running for the instance. To delete an SAP HANA instance, you must specify the security identifier (SID) of the instance. The SID is three characters in length and starts with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
   * 
   * @param request - DeleteHanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHanaInstanceResponse
   */
  async deleteHanaInstanceWithOptions(request: DeleteHanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteHanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHanaInstanceResponse>(await this.callApi(params, req, runtime), new DeleteHanaInstanceResponse({}));
    } else {
      return $dara.cast<DeleteHanaInstanceResponse>(await this.execute(params, req, runtime), new DeleteHanaInstanceResponse({}));
    }

  }

  /**
   * Deletes an SAP HANA instance.
   * 
   * @remarks
   * If you delete an SAP HANA instance, the existing backup data is also deleted and the running backup and restore jobs fail to be completed. Before you delete the SAP HANA instance, make sure that you no longer need the backup data of the instance and no backup or restore jobs are running for the instance. To delete an SAP HANA instance, you must specify the security identifier (SID) of the instance. The SID is three characters in length and starts with a letter. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?)
   * 
   * @param request - DeleteHanaInstanceRequest
   * @returns DeleteHanaInstanceResponse
   */
  async deleteHanaInstance(request: DeleteHanaInstanceRequest): Promise<DeleteHanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHanaInstanceWithOptions(request, runtime);
  }

  /**
   * Disassociates one or more data sources from a backup policy. After you disassociate the data sources from the backup policy, the backup policy no longer protects the data sources. Proceed with caution.
   * 
   * @param tmpReq - DeletePolicyBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyBindingResponse
   */
  async deletePolicyBindingWithOptions(tmpReq: DeletePolicyBindingRequest, runtime: $dara.RuntimeOptions): Promise<DeletePolicyBindingResponse> {
    tmpReq.validate();
    let request = new DeletePolicyBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyBinding",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyBindingResponse>(await this.callApi(params, req, runtime), new DeletePolicyBindingResponse({}));
    } else {
      return $dara.cast<DeletePolicyBindingResponse>(await this.execute(params, req, runtime), new DeletePolicyBindingResponse({}));
    }

  }

  /**
   * Disassociates one or more data sources from a backup policy. After you disassociate the data sources from the backup policy, the backup policy no longer protects the data sources. Proceed with caution.
   * 
   * @param request - DeletePolicyBindingRequest
   * @returns DeletePolicyBindingResponse
   */
  async deletePolicyBinding(request: DeletePolicyBindingRequest): Promise<DeletePolicyBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyBindingWithOptions(request, runtime);
  }

  /**
   * Deletes a backup policy.
   * 
   * @remarks
   * If you delete a backup policy, the backup policy is disassociated with all data sources. Proceed with caution.
   * 
   * @param request - DeletePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyV2Response
   */
  async deletePolicyV2WithOptions(request: DeletePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<DeletePolicyV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyV2Response>(await this.callApi(params, req, runtime), new DeletePolicyV2Response({}));
    } else {
      return $dara.cast<DeletePolicyV2Response>(await this.execute(params, req, runtime), new DeletePolicyV2Response({}));
    }

  }

  /**
   * Deletes a backup policy.
   * 
   * @remarks
   * If you delete a backup policy, the backup policy is disassociated with all data sources. Proceed with caution.
   * 
   * @param request - DeletePolicyV2Request
   * @returns DeletePolicyV2Response
   */
  async deletePolicyV2(request: DeletePolicyV2Request): Promise<DeletePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyV2WithOptions(request, runtime);
  }

  /**
   * Deletes a backup snapshot.
   * 
   * @remarks
   * If you delete the most recent backup snapshot for a data source, you must set the Force parameter to `true`. Otherwise, an error occurs.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
    } else {
      return $dara.cast<DeleteSnapshotResponse>(await this.execute(params, req, runtime), new DeleteSnapshotResponse({}));
    }

  }

  /**
   * Deletes a backup snapshot.
   * 
   * @remarks
   * If you delete the most recent backup snapshot for a data source, you must set the Force parameter to `true`. Otherwise, an error occurs.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Cancels a protected disk.
   * 
   * @param request - DeleteUdmDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdmDiskResponse
   */
  async deleteUdmDiskWithOptions(request: DeleteUdmDiskRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUdmDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdmDisk",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUdmDiskResponse>(await this.callApi(params, req, runtime), new DeleteUdmDiskResponse({}));
    } else {
      return $dara.cast<DeleteUdmDiskResponse>(await this.execute(params, req, runtime), new DeleteUdmDiskResponse({}));
    }

  }

  /**
   * Cancels a protected disk.
   * 
   * @param request - DeleteUdmDiskRequest
   * @returns DeleteUdmDiskResponse
   */
  async deleteUdmDisk(request: DeleteUdmDiskRequest): Promise<DeleteUdmDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUdmDiskWithOptions(request, runtime);
  }

  /**
   * Stops protection for Elastic Compute Service (ECS) instance backup.
   * 
   * @param request - DeleteUdmEcsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdmEcsInstanceResponse
   */
  async deleteUdmEcsInstanceWithOptions(request: DeleteUdmEcsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUdmEcsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdmEcsInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteUdmEcsInstanceResponse>(await this.callApi(params, req, runtime), new DeleteUdmEcsInstanceResponse({}));
    } else {
      return $dara.cast<DeleteUdmEcsInstanceResponse>(await this.execute(params, req, runtime), new DeleteUdmEcsInstanceResponse({}));
    }

  }

  /**
   * Stops protection for Elastic Compute Service (ECS) instance backup.
   * 
   * @param request - DeleteUdmEcsInstanceRequest
   * @returns DeleteUdmEcsInstanceResponse
   */
  async deleteUdmEcsInstance(request: DeleteUdmEcsInstanceRequest): Promise<DeleteUdmEcsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUdmEcsInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a backup vault.
   * 
   * @remarks
   *   You cannot delete a backup vault within 2 hours after the backup vault is created or a backup vault that is in the INITIALIZING state.
   * *   After you delete a backup vault, all resources that are associated with the backup vault are deleted. The resources include the Cloud Backup client of the old version, backup plans, backup jobs, snapshots, and restore jobs.
   * 
   * @param request - DeleteVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVaultResponse
   */
  async deleteVaultWithOptions(request: DeleteVaultRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVaultResponse>(await this.callApi(params, req, runtime), new DeleteVaultResponse({}));
    } else {
      return $dara.cast<DeleteVaultResponse>(await this.execute(params, req, runtime), new DeleteVaultResponse({}));
    }

  }

  /**
   * Deletes a backup vault.
   * 
   * @remarks
   *   You cannot delete a backup vault within 2 hours after the backup vault is created or a backup vault that is in the INITIALIZING state.
   * *   After you delete a backup vault, all resources that are associated with the backup vault are deleted. The resources include the Cloud Backup client of the old version, backup plans, backup jobs, snapshots, and restore jobs.
   * 
   * @param request - DeleteVaultRequest
   * @returns DeleteVaultResponse
   */
  async deleteVault(request: DeleteVaultRequest): Promise<DeleteVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVaultWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more HBR clients that meet the specified conditions.
   * 
   * @param tmpReq - DescribeBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupClientsResponse
   */
  async describeBackupClientsWithOptions(tmpReq: DescribeBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupClientsResponse> {
    tmpReq.validate();
    let request = new DescribeBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      body["ClientIds"] = request.clientIdsShrink;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      body["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupClientsResponse>(await this.callApi(params, req, runtime), new DescribeBackupClientsResponse({}));
    } else {
      return $dara.cast<DescribeBackupClientsResponse>(await this.execute(params, req, runtime), new DescribeBackupClientsResponse({}));
    }

  }

  /**
   * Queries the information about one or more HBR clients that meet the specified conditions.
   * 
   * @param request - DescribeBackupClientsRequest
   * @returns DescribeBackupClientsResponse
   */
  async describeBackupClients(request: DescribeBackupClientsRequest): Promise<DescribeBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupClientsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more backup jobs that meet the specified conditions.
   * 
   * @param request - DescribeBackupJobs2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupJobs2Response
   */
  async describeBackupJobs2WithOptions(request: DescribeBackupJobs2Request, runtime: $dara.RuntimeOptions): Promise<DescribeBackupJobs2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupJobs2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupJobs2Response>(await this.callApi(params, req, runtime), new DescribeBackupJobs2Response({}));
    } else {
      return $dara.cast<DescribeBackupJobs2Response>(await this.execute(params, req, runtime), new DescribeBackupJobs2Response({}));
    }

  }

  /**
   * Queries the information about one or more backup jobs that meet the specified conditions.
   * 
   * @param request - DescribeBackupJobs2Request
   * @returns DescribeBackupJobs2Response
   */
  async describeBackupJobs2(request: DescribeBackupJobs2Request): Promise<DescribeBackupJobs2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupJobs2WithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more backup plans that meet the specified conditions.
   * 
   * @param request - DescribeBackupPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPlansResponse
   */
  async describeBackupPlansWithOptions(request: DescribeBackupPlansRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPlans",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupPlansResponse>(await this.callApi(params, req, runtime), new DescribeBackupPlansResponse({}));
    } else {
      return $dara.cast<DescribeBackupPlansResponse>(await this.execute(params, req, runtime), new DescribeBackupPlansResponse({}));
    }

  }

  /**
   * Queries the information about one or more backup plans that meet the specified conditions.
   * 
   * @param request - DescribeBackupPlansRequest
   * @returns DescribeBackupPlansResponse
   */
  async describeBackupPlans(request: DescribeBackupPlansRequest): Promise<DescribeBackupPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPlansWithOptions(request, runtime);
  }

  /**
   * Queries one or more Cloud Backup clients that meet the specified conditions.
   * 
   * @remarks
   * This operation is applicable only to SAP HANA backup. For Cloud Backup clients of other data sources, call the DescribeBackupClients operation.
   * 
   * @param request - DescribeClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientsResponse
   */
  async describeClientsWithOptions(request: DescribeClientsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeClientsResponse>(await this.callApi(params, req, runtime), new DescribeClientsResponse({}));
    } else {
      return $dara.cast<DescribeClientsResponse>(await this.execute(params, req, runtime), new DescribeClientsResponse({}));
    }

  }

  /**
   * Queries one or more Cloud Backup clients that meet the specified conditions.
   * 
   * @remarks
   * This operation is applicable only to SAP HANA backup. For Cloud Backup clients of other data sources, call the DescribeBackupClients operation.
   * 
   * @param request - DescribeClientsRequest
   * @returns DescribeClientsResponse
   */
  async describeClients(request: DescribeClientsRequest): Promise<DescribeClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientsWithOptions(request, runtime);
  }

  /**
   * Queries one or more container clusters that meet the specified conditions.
   * 
   * @remarks
   * You can call this operation to query only Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - DescribeContainerClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerClusterResponse
   */
  async describeContainerClusterWithOptions(request: DescribeContainerClusterRequest, runtime: $dara.RuntimeOptions): Promise<DescribeContainerClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeContainerClusterResponse>(await this.callApi(params, req, runtime), new DescribeContainerClusterResponse({}));
    } else {
      return $dara.cast<DescribeContainerClusterResponse>(await this.execute(params, req, runtime), new DescribeContainerClusterResponse({}));
    }

  }

  /**
   * Queries one or more container clusters that meet the specified conditions.
   * 
   * @remarks
   * You can call this operation to query only Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - DescribeContainerClusterRequest
   * @returns DescribeContainerClusterResponse
   */
  async describeContainerCluster(request: DescribeContainerClusterRequest): Promise<DescribeContainerClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerClusterWithOptions(request, runtime);
  }

  /**
   * Queries the information about the accounts used in cross-account backup.
   * 
   * @param request - DescribeCrossAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrossAccountsResponse
   */
  async describeCrossAccountsWithOptions(request: DescribeCrossAccountsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCrossAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCrossAccounts",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCrossAccountsResponse>(await this.callApi(params, req, runtime), new DescribeCrossAccountsResponse({}));
    } else {
      return $dara.cast<DescribeCrossAccountsResponse>(await this.execute(params, req, runtime), new DescribeCrossAccountsResponse({}));
    }

  }

  /**
   * Queries the information about the accounts used in cross-account backup.
   * 
   * @param request - DescribeCrossAccountsRequest
   * @returns DescribeCrossAccountsResponse
   */
  async describeCrossAccounts(request: DescribeCrossAccountsRequest): Promise<DescribeCrossAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrossAccountsWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA backup plans that meet the specified conditions.
   * 
   * @param request - DescribeHanaBackupPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaBackupPlansResponse
   */
  async describeHanaBackupPlansWithOptions(request: DescribeHanaBackupPlansRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaBackupPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaBackupPlans",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaBackupPlansResponse>(await this.callApi(params, req, runtime), new DescribeHanaBackupPlansResponse({}));
    } else {
      return $dara.cast<DescribeHanaBackupPlansResponse>(await this.execute(params, req, runtime), new DescribeHanaBackupPlansResponse({}));
    }

  }

  /**
   * Queries one or more SAP HANA backup plans that meet the specified conditions.
   * 
   * @param request - DescribeHanaBackupPlansRequest
   * @returns DescribeHanaBackupPlansResponse
   */
  async describeHanaBackupPlans(request: DescribeHanaBackupPlansRequest): Promise<DescribeHanaBackupPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaBackupPlansWithOptions(request, runtime);
  }

  /**
   * Queries the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * If you want to query the backup retention period of a database, you can call the DescribeHanaRetentionSetting operation.
   * 
   * @param request - DescribeHanaBackupSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaBackupSettingResponse
   */
  async describeHanaBackupSettingWithOptions(request: DescribeHanaBackupSettingRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaBackupSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaBackupSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaBackupSettingResponse>(await this.callApi(params, req, runtime), new DescribeHanaBackupSettingResponse({}));
    } else {
      return $dara.cast<DescribeHanaBackupSettingResponse>(await this.execute(params, req, runtime), new DescribeHanaBackupSettingResponse({}));
    }

  }

  /**
   * Queries the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * If you want to query the backup retention period of a database, you can call the DescribeHanaRetentionSetting operation.
   * 
   * @param request - DescribeHanaBackupSettingRequest
   * @returns DescribeHanaBackupSettingResponse
   */
  async describeHanaBackupSetting(request: DescribeHanaBackupSettingRequest): Promise<DescribeHanaBackupSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaBackupSettingWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA backups that meet the specified conditions.
   * 
   * @remarks
   * After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the final result.
   * 
   * @param request - DescribeHanaBackupsAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaBackupsAsyncResponse
   */
  async describeHanaBackupsAsyncWithOptions(request: DescribeHanaBackupsAsyncRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaBackupsAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.includeDifferential)) {
      query["IncludeDifferential"] = request.includeDifferential;
    }

    if (!$dara.isNull(request.includeIncremental)) {
      query["IncludeIncremental"] = request.includeIncremental;
    }

    if (!$dara.isNull(request.includeLog)) {
      query["IncludeLog"] = request.includeLog;
    }

    if (!$dara.isNull(request.logPosition)) {
      query["LogPosition"] = request.logPosition;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recoveryPointInTime)) {
      query["RecoveryPointInTime"] = request.recoveryPointInTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceClusterId)) {
      query["SourceClusterId"] = request.sourceClusterId;
    }

    if (!$dara.isNull(request.systemCopy)) {
      query["SystemCopy"] = request.systemCopy;
    }

    if (!$dara.isNull(request.useBackint)) {
      query["UseBackint"] = request.useBackint;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.volumeId)) {
      query["VolumeId"] = request.volumeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaBackupsAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaBackupsAsyncResponse>(await this.callApi(params, req, runtime), new DescribeHanaBackupsAsyncResponse({}));
    } else {
      return $dara.cast<DescribeHanaBackupsAsyncResponse>(await this.execute(params, req, runtime), new DescribeHanaBackupsAsyncResponse({}));
    }

  }

  /**
   * Queries one or more SAP HANA backups that meet the specified conditions.
   * 
   * @remarks
   * After you call the DescribeHanaBackupsAsync operation to query the SAP HANA backups that meet the specified conditions, call the DescribeTask operation to query the final result.
   * 
   * @param request - DescribeHanaBackupsAsyncRequest
   * @returns DescribeHanaBackupsAsyncResponse
   */
  async describeHanaBackupsAsync(request: DescribeHanaBackupsAsyncRequest): Promise<DescribeHanaBackupsAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaBackupsAsyncWithOptions(request, runtime);
  }

  /**
   * Queries the information about SAP HANA databases.
   * 
   * @remarks
   * After you register an SAP HANA instance and install a Cloud Backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.
   * 
   * @param request - DescribeHanaDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaDatabasesResponse
   */
  async describeHanaDatabasesWithOptions(request: DescribeHanaDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaDatabases",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaDatabasesResponse>(await this.callApi(params, req, runtime), new DescribeHanaDatabasesResponse({}));
    } else {
      return $dara.cast<DescribeHanaDatabasesResponse>(await this.execute(params, req, runtime), new DescribeHanaDatabasesResponse({}));
    }

  }

  /**
   * Queries the information about SAP HANA databases.
   * 
   * @remarks
   * After you register an SAP HANA instance and install a Cloud Backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.
   * 
   * @param request - DescribeHanaDatabasesRequest
   * @returns DescribeHanaDatabasesResponse
   */
  async describeHanaDatabases(request: DescribeHanaDatabasesRequest): Promise<DescribeHanaDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA instances that meet the specified conditions.
   * 
   * @param request - DescribeHanaInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaInstancesResponse
   */
  async describeHanaInstancesWithOptions(request: DescribeHanaInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaInstances",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaInstancesResponse>(await this.callApi(params, req, runtime), new DescribeHanaInstancesResponse({}));
    } else {
      return $dara.cast<DescribeHanaInstancesResponse>(await this.execute(params, req, runtime), new DescribeHanaInstancesResponse({}));
    }

  }

  /**
   * Queries one or more SAP HANA instances that meet the specified conditions.
   * 
   * @param request - DescribeHanaInstancesRequest
   * @returns DescribeHanaInstancesResponse
   */
  async describeHanaInstances(request: DescribeHanaInstancesRequest): Promise<DescribeHanaInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaInstancesWithOptions(request, runtime);
  }

  /**
   * Queries one or more SAP HANA restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeHanaRestoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaRestoresResponse
   */
  async describeHanaRestoresWithOptions(request: DescribeHanaRestoresRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaRestoresResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.restoreId)) {
      query["RestoreId"] = request.restoreId;
    }

    if (!$dara.isNull(request.restoreStatus)) {
      query["RestoreStatus"] = request.restoreStatus;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaRestores",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaRestoresResponse>(await this.callApi(params, req, runtime), new DescribeHanaRestoresResponse({}));
    } else {
      return $dara.cast<DescribeHanaRestoresResponse>(await this.execute(params, req, runtime), new DescribeHanaRestoresResponse({}));
    }

  }

  /**
   * Queries one or more SAP HANA restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeHanaRestoresRequest
   * @returns DescribeHanaRestoresResponse
   */
  async describeHanaRestores(request: DescribeHanaRestoresRequest): Promise<DescribeHanaRestoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaRestoresWithOptions(request, runtime);
  }

  /**
   * Queries the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - DescribeHanaRetentionSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHanaRetentionSettingResponse
   */
  async describeHanaRetentionSettingWithOptions(request: DescribeHanaRetentionSettingRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHanaRetentionSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHanaRetentionSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHanaRetentionSettingResponse>(await this.callApi(params, req, runtime), new DescribeHanaRetentionSettingResponse({}));
    } else {
      return $dara.cast<DescribeHanaRetentionSettingResponse>(await this.execute(params, req, runtime), new DescribeHanaRetentionSettingResponse({}));
    }

  }

  /**
   * Queries the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to query the backup parameters of a database, you can call the DescribeHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - DescribeHanaRetentionSettingRequest
   * @returns DescribeHanaRetentionSettingResponse
   */
  async describeHanaRetentionSetting(request: DescribeHanaRetentionSettingRequest): Promise<DescribeHanaRetentionSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHanaRetentionSettingWithOptions(request, runtime);
  }

  /**
   * Queries the details about Tablestore instances that are backed up.
   * 
   * @param request - DescribeOtsTableSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOtsTableSnapshotsResponse
   */
  async describeOtsTableSnapshotsWithOptions(request: DescribeOtsTableSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOtsTableSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.otsInstances)) {
      bodyFlat["OtsInstances"] = request.otsInstances;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      bodyFlat["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOtsTableSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeOtsTableSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeOtsTableSnapshotsResponse({}));
    } else {
      return $dara.cast<DescribeOtsTableSnapshotsResponse>(await this.execute(params, req, runtime), new DescribeOtsTableSnapshotsResponse({}));
    }

  }

  /**
   * Queries the details about Tablestore instances that are backed up.
   * 
   * @param request - DescribeOtsTableSnapshotsRequest
   * @returns DescribeOtsTableSnapshotsResponse
   */
  async describeOtsTableSnapshots(request: DescribeOtsTableSnapshotsRequest): Promise<DescribeOtsTableSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOtsTableSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries one or more backup policies.
   * 
   * @param request - DescribePoliciesV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePoliciesV2Response
   */
  async describePoliciesV2WithOptions(request: DescribePoliciesV2Request, runtime: $dara.RuntimeOptions): Promise<DescribePoliciesV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePoliciesV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePoliciesV2Response>(await this.callApi(params, req, runtime), new DescribePoliciesV2Response({}));
    } else {
      return $dara.cast<DescribePoliciesV2Response>(await this.execute(params, req, runtime), new DescribePoliciesV2Response({}));
    }

  }

  /**
   * Queries one or more backup policies.
   * 
   * @param request - DescribePoliciesV2Request
   * @returns DescribePoliciesV2Response
   */
  async describePoliciesV2(request: DescribePoliciesV2Request): Promise<DescribePoliciesV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePoliciesV2WithOptions(request, runtime);
  }

  /**
   * Query one or more data sources bound to a policy, or query one or more policies bound to a data source.
   * 
   * @param tmpReq - DescribePolicyBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyBindingsResponse
   */
  async describePolicyBindingsWithOptions(tmpReq: DescribePolicyBindingsRequest, runtime: $dara.RuntimeOptions): Promise<DescribePolicyBindingsResponse> {
    tmpReq.validate();
    let request = new DescribePolicyBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyBindings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePolicyBindingsResponse>(await this.callApi(params, req, runtime), new DescribePolicyBindingsResponse({}));
    } else {
      return $dara.cast<DescribePolicyBindingsResponse>(await this.execute(params, req, runtime), new DescribePolicyBindingsResponse({}));
    }

  }

  /**
   * Query one or more data sources bound to a policy, or query one or more policies bound to a data source.
   * 
   * @param request - DescribePolicyBindingsRequest
   * @returns DescribePolicyBindingsResponse
   */
  async describePolicyBindings(request: DescribePolicyBindingsRequest): Promise<DescribePolicyBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolicyBindingsWithOptions(request, runtime);
  }

  /**
   * Queries the tables of a restorable Tablestore instance.
   * 
   * @param request - DescribeRecoverableOtsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecoverableOtsInstancesResponse
   */
  async describeRecoverableOtsInstancesWithOptions(request: DescribeRecoverableOtsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecoverableOtsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecoverableOtsInstances",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRecoverableOtsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeRecoverableOtsInstancesResponse({}));
    } else {
      return $dara.cast<DescribeRecoverableOtsInstancesResponse>(await this.execute(params, req, runtime), new DescribeRecoverableOtsInstancesResponse({}));
    }

  }

  /**
   * Queries the tables of a restorable Tablestore instance.
   * 
   * @param request - DescribeRecoverableOtsInstancesRequest
   * @returns DescribeRecoverableOtsInstancesResponse
   */
  async describeRecoverableOtsInstances(request: DescribeRecoverableOtsInstancesRequest): Promise<DescribeRecoverableOtsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecoverableOtsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries available regions.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Queries one or more restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeRestoreJobs2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreJobs2Response
   */
  async describeRestoreJobs2WithOptions(request: DescribeRestoreJobs2Request, runtime: $dara.RuntimeOptions): Promise<DescribeRestoreJobs2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreJobs2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRestoreJobs2Response>(await this.callApi(params, req, runtime), new DescribeRestoreJobs2Response({}));
    } else {
      return $dara.cast<DescribeRestoreJobs2Response>(await this.execute(params, req, runtime), new DescribeRestoreJobs2Response({}));
    }

  }

  /**
   * Queries one or more restore jobs that meet the specified conditions.
   * 
   * @param request - DescribeRestoreJobs2Request
   * @returns DescribeRestoreJobs2Response
   */
  async describeRestoreJobs2(request: DescribeRestoreJobs2Request): Promise<DescribeRestoreJobs2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreJobs2WithOptions(request, runtime);
  }

  /**
   * Queries an asynchronous job.
   * 
   * @param request - DescribeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(request: DescribeTaskRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTask",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTaskResponse>(await this.callApi(params, req, runtime), new DescribeTaskResponse({}));
    } else {
      return $dara.cast<DescribeTaskResponse>(await this.execute(params, req, runtime), new DescribeTaskResponse({}));
    }

  }

  /**
   * Queries an asynchronous job.
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(request: DescribeTaskRequest): Promise<DescribeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the backup snapshots of an Elastic Compute Service (ECS) instance.
   * 
   * @param tmpReq - DescribeUdmSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUdmSnapshotsResponse
   */
  async describeUdmSnapshotsWithOptions(tmpReq: DescribeUdmSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUdmSnapshotsResponse> {
    tmpReq.validate();
    let request = new DescribeUdmSnapshotsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.snapshotIds)) {
      request.snapshotIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.snapshotIds, "SnapshotIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.udmRegionId)) {
      query["UdmRegionId"] = request.udmRegionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.snapshotIdsShrink)) {
      body["SnapshotIds"] = request.snapshotIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUdmSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUdmSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeUdmSnapshotsResponse({}));
    } else {
      return $dara.cast<DescribeUdmSnapshotsResponse>(await this.execute(params, req, runtime), new DescribeUdmSnapshotsResponse({}));
    }

  }

  /**
   * Queries the backup snapshots of an Elastic Compute Service (ECS) instance.
   * 
   * @param request - DescribeUdmSnapshotsRequest
   * @returns DescribeUdmSnapshotsResponse
   */
  async describeUdmSnapshots(request: DescribeUdmSnapshotsRequest): Promise<DescribeUdmSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUdmSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the regions that support cross-region replication.
   * 
   * @param request - DescribeVaultReplicationRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVaultReplicationRegionsResponse
   */
  async describeVaultReplicationRegionsWithOptions(request: DescribeVaultReplicationRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVaultReplicationRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVaultReplicationRegions",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVaultReplicationRegionsResponse>(await this.callApi(params, req, runtime), new DescribeVaultReplicationRegionsResponse({}));
    } else {
      return $dara.cast<DescribeVaultReplicationRegionsResponse>(await this.execute(params, req, runtime), new DescribeVaultReplicationRegionsResponse({}));
    }

  }

  /**
   * Queries the regions that support cross-region replication.
   * 
   * @param request - DescribeVaultReplicationRegionsRequest
   * @returns DescribeVaultReplicationRegionsResponse
   */
  async describeVaultReplicationRegions(request: DescribeVaultReplicationRegionsRequest): Promise<DescribeVaultReplicationRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVaultReplicationRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more backup vaults that meet the specified conditions.
   * 
   * @param request - DescribeVaultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVaultsResponse
   */
  async describeVaultsWithOptions(request: DescribeVaultsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVaultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.vaultRegionId)) {
      query["VaultRegionId"] = request.vaultRegionId;
    }

    if (!$dara.isNull(request.vaultType)) {
      query["VaultType"] = request.vaultType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVaults",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVaultsResponse>(await this.callApi(params, req, runtime), new DescribeVaultsResponse({}));
    } else {
      return $dara.cast<DescribeVaultsResponse>(await this.execute(params, req, runtime), new DescribeVaultsResponse({}));
    }

  }

  /**
   * Queries the information about one or more backup vaults that meet the specified conditions.
   * 
   * @param request - DescribeVaultsRequest
   * @returns DescribeVaultsResponse
   */
  async describeVaults(request: DescribeVaultsRequest): Promise<DescribeVaultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVaultsWithOptions(request, runtime);
  }

  /**
   * Deletes an internal mount target created by Cloud Backup.
   * 
   * @remarks
   *   If the request is successful, the mount target is deleted.
   * *   After you create a backup plan for an Apsara File Storage NAS file system, HBR automatically creates a mount target for the file system. You can call this operation to delete the mount target. In the **Status** column of the mount target of the NAS file system, the following information is displayed: **This mount target is created by an Alibaba Cloud internal service and cannot be operated. Service name: HBR**.
   * 
   * @param request - DetachNasFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachNasFileSystemResponse
   */
  async detachNasFileSystemWithOptions(request: DetachNasFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<DetachNasFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachNasFileSystem",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachNasFileSystemResponse>(await this.callApi(params, req, runtime), new DetachNasFileSystemResponse({}));
    } else {
      return $dara.cast<DetachNasFileSystemResponse>(await this.execute(params, req, runtime), new DetachNasFileSystemResponse({}));
    }

  }

  /**
   * Deletes an internal mount target created by Cloud Backup.
   * 
   * @remarks
   *   If the request is successful, the mount target is deleted.
   * *   After you create a backup plan for an Apsara File Storage NAS file system, HBR automatically creates a mount target for the file system. You can call this operation to delete the mount target. In the **Status** column of the mount target of the NAS file system, the following information is displayed: **This mount target is created by an Alibaba Cloud internal service and cannot be operated. Service name: HBR**.
   * 
   * @param request - DetachNasFileSystemRequest
   * @returns DetachNasFileSystemResponse
   */
  async detachNasFileSystem(request: DetachNasFileSystemRequest): Promise<DetachNasFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachNasFileSystemWithOptions(request, runtime);
  }

  /**
   * Disables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is suspended. In the DescribeBackupPlans operation, the Disabled parameter is set to true.
   * 
   * @param request - DisableBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableBackupPlanResponse
   */
  async disableBackupPlanWithOptions(request: DisableBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<DisableBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableBackupPlanResponse>(await this.callApi(params, req, runtime), new DisableBackupPlanResponse({}));
    } else {
      return $dara.cast<DisableBackupPlanResponse>(await this.execute(params, req, runtime), new DisableBackupPlanResponse({}));
    }

  }

  /**
   * Disables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is suspended. In the DescribeBackupPlans operation, the Disabled parameter is set to true.
   * 
   * @param request - DisableBackupPlanRequest
   * @returns DisableBackupPlanResponse
   */
  async disableBackupPlan(request: DisableBackupPlanRequest): Promise<DisableBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableBackupPlanWithOptions(request, runtime);
  }

  /**
   * Disables an SAP HANA backup plan.
   * 
   * @remarks
   * To enable the backup plan again, call the EnableHanaBackupPlan operation.
   * 
   * @param request - DisableHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableHanaBackupPlanResponse
   */
  async disableHanaBackupPlanWithOptions(request: DisableHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<DisableHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new DisableHanaBackupPlanResponse({}));
    } else {
      return $dara.cast<DisableHanaBackupPlanResponse>(await this.execute(params, req, runtime), new DisableHanaBackupPlanResponse({}));
    }

  }

  /**
   * Disables an SAP HANA backup plan.
   * 
   * @remarks
   * To enable the backup plan again, call the EnableHanaBackupPlan operation.
   * 
   * @param request - DisableHanaBackupPlanRequest
   * @returns DisableHanaBackupPlanResponse
   */
  async disableHanaBackupPlan(request: DisableHanaBackupPlanRequest): Promise<DisableHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Enables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is restarted (Disabled is set to false in the DescribeBackupPlans operation). Cloud Backup continues to perform backups based on the policy specified in the backup plan.
   * 
   * @param request - EnableBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBackupPlanResponse
   */
  async enableBackupPlanWithOptions(request: EnableBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<EnableBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableBackupPlanResponse>(await this.callApi(params, req, runtime), new EnableBackupPlanResponse({}));
    } else {
      return $dara.cast<EnableBackupPlanResponse>(await this.execute(params, req, runtime), new EnableBackupPlanResponse({}));
    }

  }

  /**
   * Enables a backup plan.
   * 
   * @remarks
   * After you call this operation, the backup plan is restarted (Disabled is set to false in the DescribeBackupPlans operation). Cloud Backup continues to perform backups based on the policy specified in the backup plan.
   * 
   * @param request - EnableBackupPlanRequest
   * @returns EnableBackupPlanResponse
   */
  async enableBackupPlan(request: EnableBackupPlanRequest): Promise<EnableBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableBackupPlanWithOptions(request, runtime);
  }

  /**
   * Enables an SAP HANA backup plan.
   * 
   * @remarks
   * To disable the backup plan again, call the DisableHanaBackupPlan operation.
   * 
   * @param request - EnableHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHanaBackupPlanResponse
   */
  async enableHanaBackupPlanWithOptions(request: EnableHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<EnableHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new EnableHanaBackupPlanResponse({}));
    } else {
      return $dara.cast<EnableHanaBackupPlanResponse>(await this.execute(params, req, runtime), new EnableHanaBackupPlanResponse({}));
    }

  }

  /**
   * Enables an SAP HANA backup plan.
   * 
   * @remarks
   * To disable the backup plan again, call the DisableHanaBackupPlan operation.
   * 
   * @param request - EnableHanaBackupPlanRequest
   * @returns EnableHanaBackupPlanResponse
   */
  async enableHanaBackupPlan(request: EnableHanaBackupPlanRequest): Promise<EnableHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Executes a backup plan.
   * 
   * @param request - ExecuteBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteBackupPlanResponse
   */
  async executeBackupPlanWithOptions(request: ExecuteBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<ExecuteBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteBackupPlanResponse>(await this.callApi(params, req, runtime), new ExecuteBackupPlanResponse({}));
    } else {
      return $dara.cast<ExecuteBackupPlanResponse>(await this.execute(params, req, runtime), new ExecuteBackupPlanResponse({}));
    }

  }

  /**
   * Executes a backup plan.
   * 
   * @param request - ExecuteBackupPlanRequest
   * @returns ExecuteBackupPlanResponse
   */
  async executeBackupPlan(request: ExecuteBackupPlanRequest): Promise<ExecuteBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeBackupPlanWithOptions(request, runtime);
  }

  /**
   * Execute a policy for one or all bound data sources.
   * 
   * @param request - ExecutePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecutePolicyV2Response
   */
  async executePolicyV2WithOptions(request: ExecutePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<ExecutePolicyV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecutePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecutePolicyV2Response>(await this.callApi(params, req, runtime), new ExecutePolicyV2Response({}));
    } else {
      return $dara.cast<ExecutePolicyV2Response>(await this.execute(params, req, runtime), new ExecutePolicyV2Response({}));
    }

  }

  /**
   * Execute a policy for one or all bound data sources.
   * 
   * @param request - ExecutePolicyV2Request
   * @returns ExecutePolicyV2Response
   */
  async executePolicyV2(request: ExecutePolicyV2Request): Promise<ExecutePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executePolicyV2WithOptions(request, runtime);
  }

  /**
   * Generates a Resource Access Management (RAM) policy.
   * 
   * @param request - GenerateRamPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateRamPolicyResponse
   */
  async generateRamPolicyWithOptions(request: GenerateRamPolicyRequest, runtime: $dara.RuntimeOptions): Promise<GenerateRamPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.requireBasePolicy)) {
      query["RequireBasePolicy"] = request.requireBasePolicy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateRamPolicy",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateRamPolicyResponse>(await this.callApi(params, req, runtime), new GenerateRamPolicyResponse({}));
    } else {
      return $dara.cast<GenerateRamPolicyResponse>(await this.execute(params, req, runtime), new GenerateRamPolicyResponse({}));
    }

  }

  /**
   * Generates a Resource Access Management (RAM) policy.
   * 
   * @param request - GenerateRamPolicyRequest
   * @returns GenerateRamPolicyResponse
   */
  async generateRamPolicy(request: GenerateRamPolicyRequest): Promise<GenerateRamPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateRamPolicyWithOptions(request, runtime);
  }

  /**
   * Obtains download links of files such as job reports.
   * 
   * @param request - GetTempFileDownloadLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTempFileDownloadLinkResponse
   */
  async getTempFileDownloadLinkWithOptions(request: GetTempFileDownloadLinkRequest, runtime: $dara.RuntimeOptions): Promise<GetTempFileDownloadLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tempFileKey)) {
      query["TempFileKey"] = request.tempFileKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTempFileDownloadLink",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTempFileDownloadLinkResponse>(await this.callApi(params, req, runtime), new GetTempFileDownloadLinkResponse({}));
    } else {
      return $dara.cast<GetTempFileDownloadLinkResponse>(await this.execute(params, req, runtime), new GetTempFileDownloadLinkResponse({}));
    }

  }

  /**
   * Obtains download links of files such as job reports.
   * 
   * @param request - GetTempFileDownloadLinkRequest
   * @returns GetTempFileDownloadLinkResponse
   */
  async getTempFileDownloadLink(request: GetTempFileDownloadLinkRequest): Promise<GetTempFileDownloadLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTempFileDownloadLinkWithOptions(request, runtime);
  }

  /**
   * Installs an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to install an HBR client on an ECS instance.
   * *   You can call the [DescribeTask](https://help.aliyun.com/document_detail/431265.html) operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 60 seconds after you call the InstallBackupClients operation to install HBR clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param tmpReq - InstallBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallBackupClientsResponse
   */
  async installBackupClientsWithOptions(tmpReq: InstallBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<InstallBackupClientsResponse> {
    tmpReq.validate();
    let request = new InstallBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallBackupClientsResponse>(await this.callApi(params, req, runtime), new InstallBackupClientsResponse({}));
    } else {
      return $dara.cast<InstallBackupClientsResponse>(await this.execute(params, req, runtime), new InstallBackupClientsResponse({}));
    }

  }

  /**
   * Installs an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to install an HBR client on an ECS instance.
   * *   You can call the [DescribeTask](https://help.aliyun.com/document_detail/431265.html) operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 60 seconds after you call the InstallBackupClients operation to install HBR clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param request - InstallBackupClientsRequest
   * @returns InstallBackupClientsResponse
   */
  async installBackupClients(request: InstallBackupClientsRequest): Promise<InstallBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installBackupClientsWithOptions(request, runtime);
  }

  /**
   * Activates Cloud Backup.
   * 
   * @param request - OpenHbrServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenHbrServiceResponse
   */
  async openHbrServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<OpenHbrServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenHbrService",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenHbrServiceResponse>(await this.callApi(params, req, runtime), new OpenHbrServiceResponse({}));
    } else {
      return $dara.cast<OpenHbrServiceResponse>(await this.execute(params, req, runtime), new OpenHbrServiceResponse({}));
    }

  }

  /**
   * Activates Cloud Backup.
   * @returns OpenHbrServiceResponse
   */
  async openHbrService(): Promise<OpenHbrServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openHbrServiceWithOptions(runtime);
  }

  /**
   * Queries the information about one or more backup snapshots that meet the specified conditions.
   * 
   * @param tmpReq - SearchHistoricalSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchHistoricalSnapshotsResponse
   */
  async searchHistoricalSnapshotsWithOptions(tmpReq: SearchHistoricalSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<SearchHistoricalSnapshotsResponse> {
    tmpReq.validate();
    let request = new SearchHistoricalSnapshotsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchHistoricalSnapshots",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SearchHistoricalSnapshotsResponse>(await this.callApi(params, req, runtime), new SearchHistoricalSnapshotsResponse({}));
    } else {
      return $dara.cast<SearchHistoricalSnapshotsResponse>(await this.execute(params, req, runtime), new SearchHistoricalSnapshotsResponse({}));
    }

  }

  /**
   * Queries the information about one or more backup snapshots that meet the specified conditions.
   * 
   * @param request - SearchHistoricalSnapshotsRequest
   * @returns SearchHistoricalSnapshotsResponse
   */
  async searchHistoricalSnapshots(request: SearchHistoricalSnapshotsRequest): Promise<SearchHistoricalSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchHistoricalSnapshotsWithOptions(request, runtime);
  }

  /**
   * Starts an SAP HANA database.
   * 
   * @remarks
   * To stop the database again, call the StopHanaDatabaseAsync operation.
   * 
   * @param request - StartHanaDatabaseAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartHanaDatabaseAsyncResponse
   */
  async startHanaDatabaseAsyncWithOptions(request: StartHanaDatabaseAsyncRequest, runtime: $dara.RuntimeOptions): Promise<StartHanaDatabaseAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartHanaDatabaseAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartHanaDatabaseAsyncResponse>(await this.callApi(params, req, runtime), new StartHanaDatabaseAsyncResponse({}));
    } else {
      return $dara.cast<StartHanaDatabaseAsyncResponse>(await this.execute(params, req, runtime), new StartHanaDatabaseAsyncResponse({}));
    }

  }

  /**
   * Starts an SAP HANA database.
   * 
   * @remarks
   * To stop the database again, call the StopHanaDatabaseAsync operation.
   * 
   * @param request - StartHanaDatabaseAsyncRequest
   * @returns StartHanaDatabaseAsyncResponse
   */
  async startHanaDatabaseAsync(request: StartHanaDatabaseAsyncRequest): Promise<StartHanaDatabaseAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startHanaDatabaseAsyncWithOptions(request, runtime);
  }

  /**
   * Stops an SAP HANA database.
   * 
   * @remarks
   * To start the database again, call the StartHanaDatabaseAsync operation.
   * 
   * @param request - StopHanaDatabaseAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopHanaDatabaseAsyncResponse
   */
  async stopHanaDatabaseAsyncWithOptions(request: StopHanaDatabaseAsyncRequest, runtime: $dara.RuntimeOptions): Promise<StopHanaDatabaseAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopHanaDatabaseAsync",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopHanaDatabaseAsyncResponse>(await this.callApi(params, req, runtime), new StopHanaDatabaseAsyncResponse({}));
    } else {
      return $dara.cast<StopHanaDatabaseAsyncResponse>(await this.execute(params, req, runtime), new StopHanaDatabaseAsyncResponse({}));
    }

  }

  /**
   * Stops an SAP HANA database.
   * 
   * @remarks
   * To start the database again, call the StartHanaDatabaseAsync operation.
   * 
   * @param request - StopHanaDatabaseAsyncRequest
   * @returns StopHanaDatabaseAsyncResponse
   */
  async stopHanaDatabaseAsync(request: StopHanaDatabaseAsyncRequest): Promise<StopHanaDatabaseAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopHanaDatabaseAsyncWithOptions(request, runtime);
  }

  /**
   * Uninstalls a Cloud Backup client from one or more Elastic Compute Service (ECS) instance.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to uninstall a backup client from an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 30 seconds after you call the UninstallBackupClients operation to uninstall backup clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param tmpReq - UninstallBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallBackupClientsResponse
   */
  async uninstallBackupClientsWithOptions(tmpReq: UninstallBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<UninstallBackupClientsResponse> {
    tmpReq.validate();
    let request = new UninstallBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallBackupClientsResponse>(await this.callApi(params, req, runtime), new UninstallBackupClientsResponse({}));
    } else {
      return $dara.cast<UninstallBackupClientsResponse>(await this.execute(params, req, runtime), new UninstallBackupClientsResponse({}));
    }

  }

  /**
   * Uninstalls a Cloud Backup client from one or more Elastic Compute Service (ECS) instance.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to uninstall a backup client from an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes. We recommend that you call the DescribeTask operation to run the first query 30 seconds after you call the UninstallBackupClients operation to uninstall backup clients. Then, run the next queries at an interval of 30 seconds.
   * 
   * @param request - UninstallBackupClientsRequest
   * @returns UninstallBackupClientsResponse
   */
  async uninstallBackupClients(request: UninstallBackupClientsRequest): Promise<UninstallBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallBackupClientsWithOptions(request, runtime);
  }

  /**
   * Uninstalls an HBR client.
   * 
   * @remarks
   * If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.
   * 
   * @param request - UninstallClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallClientResponse
   */
  async uninstallClientWithOptions(request: UninstallClientRequest, runtime: $dara.RuntimeOptions): Promise<UninstallClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallClientResponse>(await this.callApi(params, req, runtime), new UninstallClientResponse({}));
    } else {
      return $dara.cast<UninstallClientResponse>(await this.execute(params, req, runtime), new UninstallClientResponse({}));
    }

  }

  /**
   * Uninstalls an HBR client.
   * 
   * @remarks
   * If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.
   * 
   * @param request - UninstallClientRequest
   * @returns UninstallClientResponse
   */
  async uninstallClient(request: UninstallClientRequest): Promise<UninstallClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallClientWithOptions(request, runtime);
  }

  /**
   * Updates a backup plan.
   * 
   * @param tmpReq - UpdateBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupPlanResponse
   */
  async updateBackupPlanWithOptions(tmpReq: UpdateBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<UpdateBackupPlanResponse> {
    tmpReq.validate();
    let request = new UpdateBackupPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detail)) {
      request.detailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detail, "Detail", "json");
    }

    if (!$dara.isNull(tmpReq.otsDetail)) {
      request.otsDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otsDetail, "OtsDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.changeListPath)) {
      query["ChangeListPath"] = request.changeListPath;
    }

    if (!$dara.isNull(request.detailShrink)) {
      query["Detail"] = request.detailShrink;
    }

    if (!$dara.isNull(request.keepLatestSnapshots)) {
      query["KeepLatestSnapshots"] = request.keepLatestSnapshots;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    if (!$dara.isNull(request.updatePaths)) {
      query["UpdatePaths"] = request.updatePaths;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exclude)) {
      body["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      body["Include"] = request.include;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.otsDetailShrink)) {
      body["OtsDetail"] = request.otsDetailShrink;
    }

    if (!$dara.isNull(request.rule)) {
      body["Rule"] = request.rule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateBackupPlanResponse>(await this.callApi(params, req, runtime), new UpdateBackupPlanResponse({}));
    } else {
      return $dara.cast<UpdateBackupPlanResponse>(await this.execute(params, req, runtime), new UpdateBackupPlanResponse({}));
    }

  }

  /**
   * Updates a backup plan.
   * 
   * @param request - UpdateBackupPlanRequest
   * @returns UpdateBackupPlanResponse
   */
  async updateBackupPlan(request: UpdateBackupPlanRequest): Promise<UpdateBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBackupPlanWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of an HBR client.
   * 
   * @remarks
   * You can call this operation to update the configurations of both the old and new HBR clients.
   * 
   * @param request - UpdateClientSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientSettingsResponse
   */
  async updateClientSettingsWithOptions(request: UpdateClientSettingsRequest, runtime: $dara.RuntimeOptions): Promise<UpdateClientSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertOnPartialComplete)) {
      query["AlertOnPartialComplete"] = request.alertOnPartialComplete;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataNetworkType)) {
      query["DataNetworkType"] = request.dataNetworkType;
    }

    if (!$dara.isNull(request.dataProxySetting)) {
      query["DataProxySetting"] = request.dataProxySetting;
    }

    if (!$dara.isNull(request.maxCpuCore)) {
      query["MaxCpuCore"] = request.maxCpuCore;
    }

    if (!$dara.isNull(request.maxMemory)) {
      query["MaxMemory"] = request.maxMemory;
    }

    if (!$dara.isNull(request.maxWorker)) {
      query["MaxWorker"] = request.maxWorker;
    }

    if (!$dara.isNull(request.proxyHost)) {
      query["ProxyHost"] = request.proxyHost;
    }

    if (!$dara.isNull(request.proxyPassword)) {
      query["ProxyPassword"] = request.proxyPassword;
    }

    if (!$dara.isNull(request.proxyPort)) {
      query["ProxyPort"] = request.proxyPort;
    }

    if (!$dara.isNull(request.proxyUser)) {
      query["ProxyUser"] = request.proxyUser;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.useHttps)) {
      query["UseHttps"] = request.useHttps;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientSettings",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateClientSettingsResponse>(await this.callApi(params, req, runtime), new UpdateClientSettingsResponse({}));
    } else {
      return $dara.cast<UpdateClientSettingsResponse>(await this.execute(params, req, runtime), new UpdateClientSettingsResponse({}));
    }

  }

  /**
   * Updates the configurations of an HBR client.
   * 
   * @remarks
   * You can call this operation to update the configurations of both the old and new HBR clients.
   * 
   * @param request - UpdateClientSettingsRequest
   * @returns UpdateClientSettingsResponse
   */
  async updateClientSettings(request: UpdateClientSettingsRequest): Promise<UpdateClientSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientSettingsWithOptions(request, runtime);
  }

  /**
   * Update container cluster information, including the container cluster name, network type, etc.
   * 
   * @param request - UpdateContainerClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContainerClusterResponse
   */
  async updateContainerClusterWithOptions(request: UpdateContainerClusterRequest, runtime: $dara.RuntimeOptions): Promise<UpdateContainerClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.renewToken)) {
      query["RenewToken"] = request.renewToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContainerCluster",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateContainerClusterResponse>(await this.callApi(params, req, runtime), new UpdateContainerClusterResponse({}));
    } else {
      return $dara.cast<UpdateContainerClusterResponse>(await this.execute(params, req, runtime), new UpdateContainerClusterResponse({}));
    }

  }

  /**
   * Update container cluster information, including the container cluster name, network type, etc.
   * 
   * @param request - UpdateContainerClusterRequest
   * @returns UpdateContainerClusterResponse
   */
  async updateContainerCluster(request: UpdateContainerClusterRequest): Promise<UpdateContainerClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContainerClusterWithOptions(request, runtime);
  }

  /**
   * Updates an SAP HANA backup plan.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - UpdateHanaBackupPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaBackupPlanResponse
   */
  async updateHanaBackupPlanWithOptions(request: UpdateHanaBackupPlanRequest, runtime: $dara.RuntimeOptions): Promise<UpdateHanaBackupPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupPrefix)) {
      query["BackupPrefix"] = request.backupPrefix;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaBackupPlan",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHanaBackupPlanResponse>(await this.callApi(params, req, runtime), new UpdateHanaBackupPlanResponse({}));
    } else {
      return $dara.cast<UpdateHanaBackupPlanResponse>(await this.execute(params, req, runtime), new UpdateHanaBackupPlanResponse({}));
    }

  }

  /**
   * Updates an SAP HANA backup plan.
   * 
   * @remarks
   *   A backup plan defines the data source, backup policy, and other configurations. After you execute a backup plan, a backup job is generated to record the backup progress and the backup result. If a backup job is completed, a backup snapshot is generated. You can use a backup snapshot to create a restore job.
   * *   You can specify only one type of data source in a backup plan.
   * *   You can specify only one interval as a backup cycle in a backup plan.
   * *   Each backup plan allows you to back up data to only one backup vault.
   * 
   * @param request - UpdateHanaBackupPlanRequest
   * @returns UpdateHanaBackupPlanResponse
   */
  async updateHanaBackupPlan(request: UpdateHanaBackupPlanRequest): Promise<UpdateHanaBackupPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaBackupPlanWithOptions(request, runtime);
  }

  /**
   * Updates the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.
   * 
   * @param request - UpdateHanaBackupSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaBackupSettingResponse
   */
  async updateHanaBackupSettingWithOptions(request: UpdateHanaBackupSettingRequest, runtime: $dara.RuntimeOptions): Promise<UpdateHanaBackupSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogBackupParameterFile)) {
      query["CatalogBackupParameterFile"] = request.catalogBackupParameterFile;
    }

    if (!$dara.isNull(request.catalogBackupUsingBackint)) {
      query["CatalogBackupUsingBackint"] = request.catalogBackupUsingBackint;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataBackupParameterFile)) {
      query["DataBackupParameterFile"] = request.dataBackupParameterFile;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.enableAutoLogBackup)) {
      query["EnableAutoLogBackup"] = request.enableAutoLogBackup;
    }

    if (!$dara.isNull(request.logBackupParameterFile)) {
      query["LogBackupParameterFile"] = request.logBackupParameterFile;
    }

    if (!$dara.isNull(request.logBackupTimeout)) {
      query["LogBackupTimeout"] = request.logBackupTimeout;
    }

    if (!$dara.isNull(request.logBackupUsingBackint)) {
      query["LogBackupUsingBackint"] = request.logBackupUsingBackint;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaBackupSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHanaBackupSettingResponse>(await this.callApi(params, req, runtime), new UpdateHanaBackupSettingResponse({}));
    } else {
      return $dara.cast<UpdateHanaBackupSettingResponse>(await this.execute(params, req, runtime), new UpdateHanaBackupSettingResponse({}));
    }

  }

  /**
   * Updates the backup parameters of an SAP HANA database.
   * 
   * @remarks
   * You can call the UpdateHanaRetentionSetting operation to update the backup retention period of a database.
   * 
   * @param request - UpdateHanaBackupSettingRequest
   * @returns UpdateHanaBackupSettingResponse
   */
  async updateHanaBackupSetting(request: UpdateHanaBackupSettingRequest): Promise<UpdateHanaBackupSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaBackupSettingWithOptions(request, runtime);
  }

  /**
   * Updates an SAP HANA instance.
   * 
   * @param request - UpdateHanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaInstanceResponse
   */
  async updateHanaInstanceWithOptions(request: UpdateHanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<UpdateHanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertSetting)) {
      query["AlertSetting"] = request.alertSetting;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hanaName)) {
      query["HanaName"] = request.hanaName;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceNumber)) {
      query["InstanceNumber"] = request.instanceNumber;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.useSsl)) {
      query["UseSsl"] = request.useSsl;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.validateCertificate)) {
      query["ValidateCertificate"] = request.validateCertificate;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaInstance",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHanaInstanceResponse>(await this.callApi(params, req, runtime), new UpdateHanaInstanceResponse({}));
    } else {
      return $dara.cast<UpdateHanaInstanceResponse>(await this.execute(params, req, runtime), new UpdateHanaInstanceResponse({}));
    }

  }

  /**
   * Updates an SAP HANA instance.
   * 
   * @param request - UpdateHanaInstanceRequest
   * @returns UpdateHanaInstanceResponse
   */
  async updateHanaInstance(request: UpdateHanaInstanceRequest): Promise<UpdateHanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to update the backup parameters of a database, you can call the UpdateHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - UpdateHanaRetentionSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHanaRetentionSettingResponse
   */
  async updateHanaRetentionSettingWithOptions(request: UpdateHanaRetentionSettingRequest, runtime: $dara.RuntimeOptions): Promise<UpdateHanaRetentionSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.schedule)) {
      query["Schedule"] = request.schedule;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHanaRetentionSetting",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHanaRetentionSettingResponse>(await this.callApi(params, req, runtime), new UpdateHanaRetentionSettingResponse({}));
    } else {
      return $dara.cast<UpdateHanaRetentionSettingResponse>(await this.execute(params, req, runtime), new UpdateHanaRetentionSettingResponse({}));
    }

  }

  /**
   * Updates the backup retention period of an SAP HANA database.
   * 
   * @remarks
   *   If you want to update the backup parameters of a database, you can call the UpdateHanaBackupSetting operation.
   * *   Cloud Backup deletes the expired catalogs and data that are related to Backint and file backup. The deleted catalogs and data cannot be restored. We recommend that you set the retention period based on your business requirements.
   * 
   * @param request - UpdateHanaRetentionSettingRequest
   * @returns UpdateHanaRetentionSettingResponse
   */
  async updateHanaRetentionSetting(request: UpdateHanaRetentionSettingRequest): Promise<UpdateHanaRetentionSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHanaRetentionSettingWithOptions(request, runtime);
  }

  /**
   * Modifies the association between a backup policy and a data source.
   * 
   * @param tmpReq - UpdatePolicyBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyBindingResponse
   */
  async updatePolicyBindingWithOptions(tmpReq: UpdatePolicyBindingRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePolicyBindingResponse> {
    tmpReq.validate();
    let request = new UpdatePolicyBindingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advancedOptions)) {
      request.advancedOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedOptions, "AdvancedOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.advancedOptionsShrink)) {
      query["AdvancedOptions"] = request.advancedOptionsShrink;
    }

    if (!$dara.isNull(request.disabled)) {
      query["Disabled"] = request.disabled;
    }

    if (!$dara.isNull(request.exclude)) {
      query["Exclude"] = request.exclude;
    }

    if (!$dara.isNull(request.include)) {
      query["Include"] = request.include;
    }

    if (!$dara.isNull(request.policyBindingDescription)) {
      query["PolicyBindingDescription"] = request.policyBindingDescription;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.speedLimit)) {
      query["SpeedLimit"] = request.speedLimit;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicyBinding",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePolicyBindingResponse>(await this.callApi(params, req, runtime), new UpdatePolicyBindingResponse({}));
    } else {
      return $dara.cast<UpdatePolicyBindingResponse>(await this.execute(params, req, runtime), new UpdatePolicyBindingResponse({}));
    }

  }

  /**
   * Modifies the association between a backup policy and a data source.
   * 
   * @param request - UpdatePolicyBindingRequest
   * @returns UpdatePolicyBindingResponse
   */
  async updatePolicyBinding(request: UpdatePolicyBindingRequest): Promise<UpdatePolicyBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyBindingWithOptions(request, runtime);
  }

  /**
   * Modifies a backup policy.
   * 
   * @remarks
   * If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.
   * 
   * @param tmpReq - UpdatePolicyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyV2Response
   */
  async updatePolicyV2WithOptions(tmpReq: UpdatePolicyV2Request, runtime: $dara.RuntimeOptions): Promise<UpdatePolicyV2Response> {
    tmpReq.validate();
    let request = new UpdatePolicyV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyDescription)) {
      body["PolicyDescription"] = request.policyDescription;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicyV2",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePolicyV2Response>(await this.callApi(params, req, runtime), new UpdatePolicyV2Response({}));
    } else {
      return $dara.cast<UpdatePolicyV2Response>(await this.execute(params, req, runtime), new UpdatePolicyV2Response({}));
    }

  }

  /**
   * Modifies a backup policy.
   * 
   * @remarks
   * If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.
   * 
   * @param request - UpdatePolicyV2Request
   * @returns UpdatePolicyV2Response
   */
  async updatePolicyV2(request: UpdatePolicyV2Request): Promise<UpdatePolicyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyV2WithOptions(request, runtime);
  }

  /**
   * Updates the configuration information about the backup vault.
   * 
   * @param request - UpdateVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVaultResponse
   */
  async updateVaultWithOptions(request: UpdateVaultRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVaultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    if (!$dara.isNull(request.vaultName)) {
      query["VaultName"] = request.vaultName;
    }

    if (!$dara.isNull(request.wormEnabled)) {
      query["WormEnabled"] = request.wormEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVault",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVaultResponse>(await this.callApi(params, req, runtime), new UpdateVaultResponse({}));
    } else {
      return $dara.cast<UpdateVaultResponse>(await this.execute(params, req, runtime), new UpdateVaultResponse({}));
    }

  }

  /**
   * Updates the configuration information about the backup vault.
   * 
   * @param request - UpdateVaultRequest
   * @returns UpdateVaultResponse
   */
  async updateVault(request: UpdateVaultRequest): Promise<UpdateVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVaultWithOptions(request, runtime);
  }

  /**
   * Upgrades an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes.
   * 
   * @param tmpReq - UpgradeBackupClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeBackupClientsResponse
   */
  async upgradeBackupClientsWithOptions(tmpReq: UpgradeBackupClientsRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeBackupClientsResponse> {
    tmpReq.validate();
    let request = new UpgradeBackupClientsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIds)) {
      request.clientIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIds, "ClientIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientIdsShrink)) {
      query["ClientIds"] = request.clientIdsShrink;
    }

    if (!$dara.isNull(request.crossAccountRoleName)) {
      query["CrossAccountRoleName"] = request.crossAccountRoleName;
    }

    if (!$dara.isNull(request.crossAccountType)) {
      query["CrossAccountType"] = request.crossAccountType;
    }

    if (!$dara.isNull(request.crossAccountUserId)) {
      query["CrossAccountUserId"] = request.crossAccountUserId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeBackupClients",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeBackupClientsResponse>(await this.callApi(params, req, runtime), new UpgradeBackupClientsResponse({}));
    } else {
      return $dara.cast<UpgradeBackupClientsResponse>(await this.execute(params, req, runtime), new UpgradeBackupClientsResponse({}));
    }

  }

  /**
   * Upgrades an HBR client on one or more Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   *   This operation creates an asynchronous job at the backend and calls Cloud Assistant to upgrade an HBR client that is installed on an ECS instance.
   * *   You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * *   The timeout period of an asynchronous job is 15 minutes.
   * 
   * @param request - UpgradeBackupClientsRequest
   * @returns UpgradeBackupClientsResponse
   */
  async upgradeBackupClients(request: UpgradeBackupClientsRequest): Promise<UpgradeBackupClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeBackupClientsWithOptions(request, runtime);
  }

  /**
   * Upgrades the Cloud Backup client.
   * 
   * @remarks
   * You can call this operation to upgrade a Cloud Backup client to the latest version. After the Cloud Backup client is upgraded, the version of the client cannot be rolled back.
   * 
   * @param request - UpgradeClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClientResponse
   */
  async upgradeClientWithOptions(request: UpgradeClientRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vaultId)) {
      query["VaultId"] = request.vaultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeClient",
      version: "2017-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeClientResponse>(await this.callApi(params, req, runtime), new UpgradeClientResponse({}));
    } else {
      return $dara.cast<UpgradeClientResponse>(await this.execute(params, req, runtime), new UpgradeClientResponse({}));
    }

  }

  /**
   * Upgrades the Cloud Backup client.
   * 
   * @remarks
   * You can call this operation to upgrade a Cloud Backup client to the latest version. After the Cloud Backup client is upgraded, the version of the client cannot be rolled back.
   * 
   * @param request - UpgradeClientRequest
   * @returns UpgradeClientResponse
   */
  async upgradeClient(request: UpgradeClientRequest): Promise<UpgradeClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

}
