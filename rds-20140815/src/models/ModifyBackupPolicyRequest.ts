// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequestAdvancedDataPolicies extends $dara.Model {
  actionType?: string;
  bakType?: string;
  destRegion?: string;
  destType?: string;
  filterKey?: string;
  filterType?: string;
  filterValue?: string;
  onlyPreserveOneEachDay?: boolean;
  onlyPreserveOneEachHour?: boolean;
  retentionType?: string;
  retentionValue?: number;
  srcRegion?: string;
  srcType?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      bakType: 'BakType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      filterKey: 'FilterKey',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
      onlyPreserveOneEachHour: 'OnlyPreserveOneEachHour',
      retentionType: 'RetentionType',
      retentionValue: 'RetentionValue',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      bakType: 'string',
      destRegion: 'string',
      destType: 'string',
      filterKey: 'string',
      filterType: 'string',
      filterValue: 'string',
      onlyPreserveOneEachDay: 'boolean',
      onlyPreserveOneEachHour: 'boolean',
      retentionType: 'string',
      retentionValue: 'number',
      srcRegion: 'string',
      srcType: 'string',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequestAdvancedLogPolicies extends $dara.Model {
  actionType?: string;
  destRegion?: string;
  destType?: string;
  enableLogBackup?: number;
  filterKey?: string;
  filterValue?: string;
  logRetentionType?: string;
  logRetentionValue?: number;
  srcRegion?: string;
  srcType?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      enableLogBackup: 'EnableLogBackup',
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      logRetentionType: 'LogRetentionType',
      logRetentionValue: 'LogRetentionValue',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      filterKey: 'string',
      filterValue: 'string',
      logRetentionType: 'string',
      logRetentionValue: 'number',
      srcRegion: 'string',
      srcType: 'string',
      strategyId: 'string',
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
  advancedDataPolicies?: ModifyBackupPolicyRequestAdvancedDataPolicies[];
  advancedLogPolicies?: ModifyBackupPolicyRequestAdvancedLogPolicies[];
  archiveBackupKeepCount?: number;
  archiveBackupKeepPolicy?: string;
  archiveBackupRetentionPeriod?: string;
  backupInterval?: string;
  backupLog?: string;
  backupMethod?: string;
  backupPolicyMode?: string;
  backupPriority?: number;
  backupRetentionPeriod?: string;
  category?: string;
  compressType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  enableAdvancedBackupPolicy?: number;
  enableBackupLog?: string;
  enableIncrementDataBackup?: boolean;
  highSpaceUsageProtection?: string;
  localLogRetentionHours?: string;
  localLogRetentionSpace?: string;
  logBackupFrequency?: string;
  logBackupLocalRetentionNumber?: number;
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  releasedKeepPolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      advancedDataPolicies: 'AdvancedDataPolicies',
      advancedLogPolicies: 'AdvancedLogPolicies',
      archiveBackupKeepCount: 'ArchiveBackupKeepCount',
      archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
      archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
      backupInterval: 'BackupInterval',
      backupLog: 'BackupLog',
      backupMethod: 'BackupMethod',
      backupPolicyMode: 'BackupPolicyMode',
      backupPriority: 'BackupPriority',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      category: 'Category',
      compressType: 'CompressType',
      DBInstanceId: 'DBInstanceId',
      enableAdvancedBackupPolicy: 'EnableAdvancedBackupPolicy',
      enableBackupLog: 'EnableBackupLog',
      enableIncrementDataBackup: 'EnableIncrementDataBackup',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupFrequency: 'LogBackupFrequency',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDataPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedDataPolicies },
      advancedLogPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedLogPolicies },
      archiveBackupKeepCount: 'number',
      archiveBackupKeepPolicy: 'string',
      archiveBackupRetentionPeriod: 'string',
      backupInterval: 'string',
      backupLog: 'string',
      backupMethod: 'string',
      backupPolicyMode: 'string',
      backupPriority: 'number',
      backupRetentionPeriod: 'string',
      category: 'string',
      compressType: 'string',
      DBInstanceId: 'string',
      enableAdvancedBackupPolicy: 'number',
      enableBackupLog: 'string',
      enableIncrementDataBackup: 'boolean',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
      logBackupFrequency: 'string',
      logBackupLocalRetentionNumber: 'number',
      logBackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      releasedKeepPolicy: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.advancedDataPolicies)) {
      $dara.Model.validateArray(this.advancedDataPolicies);
    }
    if(Array.isArray(this.advancedLogPolicies)) {
      $dara.Model.validateArray(this.advancedLogPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

