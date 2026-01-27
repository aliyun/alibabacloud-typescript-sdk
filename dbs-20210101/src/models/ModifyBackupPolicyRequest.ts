// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequestAdvanceDataPolicies extends $dara.Model {
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **CREATE**
   * *   **UPDATE**
   * *   **DELETE**
   * 
   * @example
   * UPDATE
   */
  actionType?: string;
  /**
   * @remarks
   * The region in which backup files are stored.
   * 
   * @example
   * cn-shanghai
   */
  destRegion?: string;
  /**
   * @remarks
   * The storage method of backup files. Valid values:
   * 
   * *   **db**: database.
   * *   **level1**: level-1 backup.
   * *   **level2**: level-2 backup.
   * *   **level2Cross**: level-2 cross-region backup.
   * 
   * @example
   * level1
   */
  destType?: string;
  /**
   * @remarks
   * The scheduling cycle. Valid values:
   * 
   * *   **dayOfWeek**: scheduling by week.
   * *   **dayOfMonth**: scheduling by month.
   * *   **dayOfYear**: scheduling by year.
   * *   **backupInterval**: scheduling at a specific interval.
   * 
   * >  This parameter is required only when FilterType is set to **crontab**.
   * 
   * @example
   * backupInterval
   */
  filterKey?: string;
  /**
   * @remarks
   * The scheduling mode of the advanced backup policy. Valid values:
   * 
   * *   **crontab**: periodic scheduling.
   * *   **event**: event-based scheduling.
   * 
   * @example
   * crontab
   */
  filterType?: string;
  /**
   * @remarks
   * The backup cycle.
   * 
   * @example
   * 180
   */
  filterValue?: string;
  onlyPreserveOneEachDay?: boolean;
  /**
   * @remarks
   * The ID of the advanced backup policy. You can call the [DescribeBackupPolicy](https://help.aliyun.com/document_detail/2869783.html) operation to query the ID.
   * 
   * @example
   * 6s67c7i3y8f8p72808p******
   */
  policyId?: string;
  /**
   * @remarks
   * The retention type of backup sets. Valid values:
   * 
   * *   **never**: Backup sets never expire.
   * *   **delay**: Backup sets are retained for a specific number of days.
   * 
   * @example
   * delay
   */
  retentionType?: string;
  /**
   * @remarks
   * The retention period. Unit: day.
   * 
   * @example
   * 4
   */
  retentionValue?: string;
  /**
   * @remarks
   * The region in which the data source of the backup policy resides.
   * 
   * @example
   * cn-shanghai
   */
  srcRegion?: string;
  /**
   * @remarks
   * The type of the data source of the backup policy. Valid values:
   * 
   * *   **db**: database.
   * *   **level1**: level-1 backup.
   * *   **level2**: level-2 backup.
   * *   **level2Cross**: level-2 cross-region backup.
   * 
   * @example
   * db
   */
  srcType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      filterKey: 'FilterKey',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
      policyId: 'PolicyId',
      retentionType: 'RetentionType',
      retentionValue: 'RetentionValue',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      filterKey: 'string',
      filterType: 'string',
      filterValue: 'string',
      onlyPreserveOneEachDay: 'boolean',
      policyId: 'string',
      retentionType: 'string',
      retentionValue: 'string',
      srcRegion: 'string',
      srcType: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequestAdvanceIncPolicies extends $dara.Model {
  actionType?: string;
  destRegion?: string;
  destType?: string;
  filterKey?: string;
  filterType?: string;
  filterValue?: string;
  onlyPreserveOneEachDay?: boolean;
  policyId?: string;
  retentionType?: string;
  retentionValue?: string;
  srcRegion?: string;
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      filterKey: 'FilterKey',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
      policyId: 'PolicyId',
      retentionType: 'RetentionType',
      retentionValue: 'RetentionValue',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      filterKey: 'string',
      filterType: 'string',
      filterValue: 'string',
      onlyPreserveOneEachDay: 'boolean',
      policyId: 'string',
      retentionType: 'string',
      retentionValue: 'string',
      srcRegion: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequestAdvanceLogPolicies extends $dara.Model {
  actionType?: string;
  destRegion?: string;
  destType?: string;
  enableLogBackup?: number;
  filterKey?: string;
  filterType?: string;
  filterValue?: string;
  logRetentionType?: string;
  logRetentionValue?: string;
  policyId?: string;
  srcRegion?: string;
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      enableLogBackup: 'EnableLogBackup',
      filterKey: 'FilterKey',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      logRetentionType: 'LogRetentionType',
      logRetentionValue: 'LogRetentionValue',
      policyId: 'PolicyId',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      filterKey: 'string',
      filterType: 'string',
      filterValue: 'string',
      logRetentionType: 'string',
      logRetentionValue: 'string',
      policyId: 'string',
      srcRegion: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The details of data backup policies.
   */
  advanceDataPolicies?: ModifyBackupPolicyRequestAdvanceDataPolicies[];
  advanceIncPolicies?: ModifyBackupPolicyRequestAdvanceIncPolicies[];
  advanceLogPolicies?: ModifyBackupPolicyRequestAdvanceLogPolicies[];
  backupMethod?: string;
  backupPriority?: number;
  backupRetentionPolicyOnClusterDeletion?: string;
  category?: string;
  enableIncBackup?: boolean;
  /**
   * @remarks
   * The ID of the PolarDB instance.
   * 
   * @example
   * pc-2ze3nrr64c5****
   */
  instanceName?: string;
  /**
   * @remarks
   * The start time of a basic backup.
   * 
   * @example
   * 17:00Z
   */
  preferredBackupWindowBegin?: string;
  /**
   * @remarks
   * The region in which backup sets reside.
   * 
   * @example
   * cn-shanghai
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      advanceDataPolicies: 'AdvanceDataPolicies',
      advanceIncPolicies: 'AdvanceIncPolicies',
      advanceLogPolicies: 'AdvanceLogPolicies',
      backupMethod: 'BackupMethod',
      backupPriority: 'BackupPriority',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      category: 'Category',
      enableIncBackup: 'EnableIncBackup',
      instanceName: 'InstanceName',
      preferredBackupWindowBegin: 'PreferredBackupWindowBegin',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceDataPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvanceDataPolicies },
      advanceIncPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvanceIncPolicies },
      advanceLogPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvanceLogPolicies },
      backupMethod: 'string',
      backupPriority: 'number',
      backupRetentionPolicyOnClusterDeletion: 'string',
      category: 'string',
      enableIncBackup: 'boolean',
      instanceName: 'string',
      preferredBackupWindowBegin: 'string',
      regionCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advanceDataPolicies)) {
      $dara.Model.validateArray(this.advanceDataPolicies);
    }
    if(Array.isArray(this.advanceIncPolicies)) {
      $dara.Model.validateArray(this.advanceIncPolicies);
    }
    if(Array.isArray(this.advanceLogPolicies)) {
      $dara.Model.validateArray(this.advanceLogPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

