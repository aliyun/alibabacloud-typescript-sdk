// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy extends $dara.Model {
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

export class DescribeBackupPolicyResponseBodyAdvancedDataPolicies extends $dara.Model {
  advancedDataPolicy?: DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy[];
  static names(): { [key: string]: string } {
    return {
      advancedDataPolicy: 'AdvancedDataPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDataPolicy: { 'type': 'array', 'itemType': DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.advancedDataPolicy)) {
      $dara.Model.validateArray(this.advancedDataPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy extends $dara.Model {
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

export class DescribeBackupPolicyResponseBodyAdvancedLogPolicies extends $dara.Model {
  advancedLogPolicy?: DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy[];
  static names(): { [key: string]: string } {
    return {
      advancedLogPolicy: 'AdvancedLogPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedLogPolicy: { 'type': 'array', 'itemType': DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.advancedLogPolicy)) {
      $dara.Model.validateArray(this.advancedLogPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  advancedBackupPolicyEnabled?: boolean;
  advancedDataPolicies?: DescribeBackupPolicyResponseBodyAdvancedDataPolicies;
  advancedLogPolicies?: DescribeBackupPolicyResponseBodyAdvancedLogPolicies;
  archiveBackupKeepCount?: string;
  archiveBackupKeepPolicy?: string;
  archiveBackupRetentionPeriod?: string;
  backupInterval?: string;
  backupLog?: string;
  backupMethod?: string;
  backupPriority?: number;
  backupRetentionPeriod?: number;
  category?: string;
  compressType?: string;
  enableBackupLog?: string;
  enableIncrementDataBackup?: boolean;
  enablePitrProtection?: boolean;
  highSpaceUsageProtection?: string;
  localLogRetentionHours?: number;
  localLogRetentionSpace?: string;
  logBackupFrequency?: string;
  logBackupLocalRetentionNumber?: number;
  logBackupRetentionPeriod?: number;
  pitrRetentionPeriod?: number;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  preferredNextBackupTime?: string;
  releasedKeepPolicy?: string;
  requestId?: string;
  supportModifyBackupPriority?: boolean;
  supportReleasedKeep?: number;
  supportVolumeShadowCopy?: number;
  supportsHighFrequencyBackup?: number;
  static names(): { [key: string]: string } {
    return {
      advancedBackupPolicyEnabled: 'AdvancedBackupPolicyEnabled',
      advancedDataPolicies: 'AdvancedDataPolicies',
      advancedLogPolicies: 'AdvancedLogPolicies',
      archiveBackupKeepCount: 'ArchiveBackupKeepCount',
      archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
      archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
      backupInterval: 'BackupInterval',
      backupLog: 'BackupLog',
      backupMethod: 'BackupMethod',
      backupPriority: 'BackupPriority',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      category: 'Category',
      compressType: 'CompressType',
      enableBackupLog: 'EnableBackupLog',
      enableIncrementDataBackup: 'EnableIncrementDataBackup',
      enablePitrProtection: 'EnablePitrProtection',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupFrequency: 'LogBackupFrequency',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      pitrRetentionPeriod: 'PitrRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      requestId: 'RequestId',
      supportModifyBackupPriority: 'SupportModifyBackupPriority',
      supportReleasedKeep: 'SupportReleasedKeep',
      supportVolumeShadowCopy: 'SupportVolumeShadowCopy',
      supportsHighFrequencyBackup: 'SupportsHighFrequencyBackup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedBackupPolicyEnabled: 'boolean',
      advancedDataPolicies: DescribeBackupPolicyResponseBodyAdvancedDataPolicies,
      advancedLogPolicies: DescribeBackupPolicyResponseBodyAdvancedLogPolicies,
      archiveBackupKeepCount: 'string',
      archiveBackupKeepPolicy: 'string',
      archiveBackupRetentionPeriod: 'string',
      backupInterval: 'string',
      backupLog: 'string',
      backupMethod: 'string',
      backupPriority: 'number',
      backupRetentionPeriod: 'number',
      category: 'string',
      compressType: 'string',
      enableBackupLog: 'string',
      enableIncrementDataBackup: 'boolean',
      enablePitrProtection: 'boolean',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'string',
      logBackupFrequency: 'string',
      logBackupLocalRetentionNumber: 'number',
      logBackupRetentionPeriod: 'number',
      pitrRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      releasedKeepPolicy: 'string',
      requestId: 'string',
      supportModifyBackupPriority: 'boolean',
      supportReleasedKeep: 'number',
      supportVolumeShadowCopy: 'number',
      supportsHighFrequencyBackup: 'number',
    };
  }

  validate() {
    if(this.advancedDataPolicies && typeof (this.advancedDataPolicies as any).validate === 'function') {
      (this.advancedDataPolicies as any).validate();
    }
    if(this.advancedLogPolicies && typeof (this.advancedLogPolicies as any).validate === 'function') {
      (this.advancedLogPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

