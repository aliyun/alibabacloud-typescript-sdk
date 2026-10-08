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
  /**
   * @remarks
   * The number of archived backups retained for the **MySQL** instance.
   * 
   * @example
   * 1
   */
  archiveBackupKeepCount?: string;
  /**
   * @remarks
   * The retention cycle of archived backups for the **MySQL** instance.
   * 
   * @example
   * ByMonth
   */
  archiveBackupKeepPolicy?: string;
  /**
   * @remarks
   * The number of days for which archived backups are retained for the **MySQL** instance.
   * 
   * @example
   * 365
   */
  archiveBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup interval. Unit: minutes.
   * * For MySQL instances: the [snapshot backup frequency](https://help.aliyun.com/document_detail/98818.html) (not the snapshot backup cycle).
   * * For SQL Server instances: the log backup frequency.
   * 
   * @example
   * 30
   */
  backupInterval?: string;
  /**
   * @remarks
   * Indicates whether log backup is enabled. Valid values:
   * * **Enable**: enabled
   * * **Disabled**: disabled
   * 
   * **For SQL Server instances:**
   * 
   * - **Enable** is returned only when instance log backup frequency is **every 5 minutes**.
   * - When instance log backup frequency is **every 30 minutes** or **consistent with the data backup cycle**, this parameter returns **Disabled**. **Use the value of BackupInterval as the reference**.
   * 
   * @example
   * Enable
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup method of the **SQL Server instance with cloud disks**. Valid values:
   * * **Physical**: physical backup
   * * **Snapshot**: snapshot backup
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup settings for the secondary instance of an **SQL Server Enterprise Cluster Edition** instance. Valid values:
   * - **1**: The secondary instance is preferred.
   * - **2**: The primary instance is forced.
   * 
   * > This parameter is returned only when SupportModifyBackupPriority is True.
   * 
   * @example
   * 2
   */
  backupPriority?: number;
  /**
   * @remarks
   * The number of days for which data backups are retained.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether backup within seconds is enabled for the **MySQL** or **PostgreSQL** instance. Valid values:
   * 
   * - **Flash**: enabled
   * - **Standard**: disabled
   * 
   * > This parameter takes effect only when the **BackupPolicyMode** parameter is set to **DataBackupPolicy**.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The backup compression method. Valid values:
   * * **0**: no compression
   * * **1**: zlib compression
   * * **2**: parallel zlib compression
   * * **4**: QuickLZ compression with fast restoration for individual databases and tables enabled
   * * **8**: QuickLZ compression without fast restoration for individual databases and tables supported
   * 
   * @example
   * 1
   */
  compressType?: string;
  /**
   * @remarks
   * Indicates whether log backup is enabled. Valid values:
   * * **1**: enabled
   * * **0**: disabled
   * 
   * **For SQL Server instances:**
   * - **1** is returned only when instance log backup frequency is **every 5 minutes**.
   * - When instance log backup frequency is **every 30 minutes** or **consistent with the data backup cycle**, this parameter returns **0**. **Use the value of BackupInterval as the reference**.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Indicates whether incremental backup is enabled for the **SQL Server** instance. Valid values:
   * * **True**: enabled
   * * **False**: disabled
   * 
   * @example
   * True
   */
  enableIncrementDataBackup?: boolean;
  /**
   * @remarks
   * Indicates whether point-in-time recovery (PITR) is enabled for the **MySQL** instance. PITR is an upgraded version of log backup. Valid values:
   * - **True**: enabled
   * - **False**: disabled
   * 
   * > For more information, see [Configure a point-in-time recovery policy](https://help.aliyun.com/document_detail/2666046.html).
   * 
   * @example
   * True
   */
  enablePitrProtection?: boolean;
  /**
   * @remarks
   * Indicates whether binary logs are forcibly deleted when the storage usage of the **MySQL** instance exceeds 80% or the remaining storage is less than 5 GB. Valid values:
   * 
   * * **Disable**: Binary logs are not deleted.
   * * **Enable**: Binary logs are deleted.
   * 
   * @example
   * Enable
   */
  highSpaceUsageProtection?: string;
  incBackupInterval?: number;
  /**
   * @remarks
   * The number of hours for which binary logs are retained on the **MySQL** instance.
   * 
   * @example
   * 0
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum storage usage of binary logs on the **MySQL** instance, in percentage.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The log backup frequency of the **SQL Server** instance. Valid values:
   * 
   * * **LogInterval**: every 30 minutes.
   * * Default: consistent with the data backup cycle specified by **PreferredBackupPeriod**.
   * 
   * @example
   * LogInterval
   */
  logBackupFrequency?: string;
  /**
   * @remarks
   * The number of binary logs retained on the **MySQL** instance.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The number of days for which log backups are retained.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The number of days for which point-in-time recovery is supported for the **MySQL** instance.
   * 
   * @example
   * 7
   */
  pitrRetentionPeriod?: number;
  /**
   * @remarks
   * The data backup cycle. Multiple values are separated by commas (,). Valid values:
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The data backup time. Format: <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The next backup time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC).
   * 
   * @example
   * 2018-01-19T15:15Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The archived backup data retention policy for deleted **MySQL** instances. Valid values:
   * * **None**: No archived backups are retained.
   * * **Lastest**: Only the last archived backup is retained.
   * * **All**: All archived backups are retained.
   * 
   * @example
   * None
   */
  releasedKeepPolicy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B87E2AB3-B7C9-4394-9160-7F639F732031
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the secondary instance backup option can be modified for the **SQL Server** instance. Valid values:
   * 
   * - **True**: The option can be modified.
   * - **False**: The option cannot be modified.
   * 
   * @example
   * False
   */
  supportModifyBackupPriority?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  supportReleasedKeep?: number;
  /**
   * @remarks
   * Indicates whether snapshot backup is supported for the **SQL Server** instance. Valid values:
   * 
   * - **1**: supported
   * - **0**: not supported
   * 
   * @example
   * 1
   */
  supportVolumeShadowCopy?: number;
  /**
   * @remarks
   * Indicates whether the [5-minute log backup feature](https://help.aliyun.com/document_detail/95717.html) is supported for the **SQL Server** instance. Valid values:
   * - **0**: not supported
   * - **1**: supported
   * 
   * @example
   * 0
   */
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
      incBackupInterval: 'IncBackupInterval',
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
      incBackupInterval: 'number',
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

