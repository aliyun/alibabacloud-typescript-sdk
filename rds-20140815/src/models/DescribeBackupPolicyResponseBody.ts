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
  /**
   * @remarks
   * Indicates whether the advanced backup policy is enabled.
   */
  advancedBackupPolicyEnabled?: boolean;
  advancedDataPolicies?: DescribeBackupPolicyResponseBodyAdvancedDataPolicies;
  advancedLogPolicies?: DescribeBackupPolicyResponseBodyAdvancedLogPolicies;
  /**
   * @remarks
   * The number of archived backups retained for a **MySQL** instance.
   * 
   * @example
   * 1
   */
  archiveBackupKeepCount?: string;
  /**
   * @remarks
   * The retention period for archived backups of a **MySQL** instance.
   * 
   * @example
   * ByMonth
   */
  archiveBackupKeepPolicy?: string;
  /**
   * @remarks
   * The number of days for which archived backups of a **MySQL** instance are retained.
   * 
   * @example
   * 365
   */
  archiveBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup interval. Unit: minutes.
   * * For MySQL instances: the [snapshot backup frequency](https://help.aliyun.com/document_detail/98818.html), not the snapshot backup cycle.
   * * For SQL Server instances: the log backup frequency.
   * 
   * @example
   * 30
   */
  backupInterval?: string;
  /**
   * @remarks
   * Indicates whether log backup is enabled. Valid values:
   * * **Enable**: yes
   * * **Disabled**: no
   * 
   * **For SQL Server instances:**
   * 
   * - **Enable** is returned only when instance log backup frequency is **every 5 minutes**.
   * - **Disabled** is returned when instance log backup frequency is **every 30 minutes** or **the same as the data backup frequency**. **Refer to the BackupInterval parameter for the actual frequency**.
   * 
   * @example
   * Enable
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup method for **SQL Server instances with cloud disks**. Valid values:
   * * **Physical**: physical backup
   * * **Snapshot**: snapshot backup
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The secondary node backup setting for **SQL Server Enterprise Cluster Edition** instances. Valid values:
   * - **1**: prefer secondary node
   * - **2**: force primary node
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
   * Indicates whether backup within seconds is enabled for **MySQL** and **PostgreSQL** instances. Valid values:
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
   * * **4**: quicklz compression with database and table restoration enabled
   * * **8**: quicklz compression without database and table restoration supported
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
   * - **0** is returned when instance log backup frequency is **every 30 minutes** or **the same as the data backup frequency**. **Refer to the BackupInterval parameter for the actual frequency**.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Indicates whether incremental backup is enabled for **SQL Server** instances. Valid values:
   * * **True**: yes
   * * **False**: no
   * 
   * @example
   * True
   */
  enableIncrementDataBackup?: boolean;
  /**
   * @remarks
   * Indicates whether point-in-time recovery (PITR) is enabled for **MySQL** instances. PITR is an upgraded version of log backup. Valid values:
   * - **True**: yes
   * - **False**: no
   * 
   * > For more information, see [Configure a point-in-time recovery policy](https://help.aliyun.com/document_detail/2666046.html).
   * 
   * @example
   * True
   */
  enablePitrProtection?: boolean;
  /**
   * @remarks
   * Indicates whether binary logs are forcibly deleted when the storage usage of a **MySQL** instance exceeds 80% or the remaining storage is less than 5 GB. Valid values:
   * 
   * * **Disable**: does not delete binary logs
   * * **Enable**: deletes binary logs
   * 
   * @example
   * Enable
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The interval for high-frequency incremental backups. Unit: minutes. Valid values: 60, 120, 240, 360, and 720.
   * 
   * @example
   * 120
   */
  incBackupInterval?: number;
  /**
   * @remarks
   * The number of hours for which binary log backups of a **MySQL** instance are retained.
   * 
   * @example
   * 0
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum storage usage for binary logs of a **MySQL** instance.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The log backup frequency for **SQL Server** instances. Valid values:
   * 
   * * **LogInterval**: every 30 minutes
   * * Default: the same as the data backup cycle specified by **PreferredBackupPeriod**
   * 
   * @example
   * LogInterval
   */
  logBackupFrequency?: string;
  /**
   * @remarks
   * The number of local binary logs retained for a **MySQL** instance.
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
   * The number of days for which point-in-time recovery is available for a **MySQL** instance.
   * 
   * @example
   * 7
   */
  pitrRetentionPeriod?: number;
  /**
   * @remarks
   * The data backup cycle. Separate multiple values with commas (,). Valid values:
   * * **Monday**: Monday
   * * **Tuesday**: Tuesday
   * * **Wednesday**: Wednesday
   * * **Thursday**: Thursday
   * * **Friday**: Friday
   * * **Saturday**: Saturday
   * * **Sunday**: Sunday
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
   * The time of the next backup. Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC).
   * 
   * @example
   * 2018-01-19T15:15Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The data retention policy for archived backups of deleted **MySQL** instances. Valid values:
   * * **None**: no retention
   * * **Lastest**: retains the last backup
   * * **All**: retains all backups
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
   * Indicates whether the secondary node backup option can be modified for **SQL Server** instances. Valid values:
   * 
   * - **True**: yes
   * - **False**: no
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
   * Indicates whether snapshot backup is supported for **SQL Server** instances. Valid values:
   * 
   * - **1**: yes
   * - **0**: no
   * 
   * @example
   * 1
   */
  supportVolumeShadowCopy?: number;
  /**
   * @remarks
   * Indicates whether the [5-minute log backup feature](https://help.aliyun.com/document_detail/95717.html) is supported for **SQL Server** instances. Valid values:
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

