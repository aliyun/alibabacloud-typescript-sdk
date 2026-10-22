// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy extends $dara.Model {
  autoCreated?: boolean;
  bakType?: string;
  destRegion?: string;
  destType?: string;
  dumpAction?: string;
  filterKey?: string;
  filterType?: string;
  filterValue?: string;
  onlyPreserveOneEachDay?: boolean;
  onlyPreserveOneEachHour?: boolean;
  policyId?: string;
  retentionType?: string;
  retentionValue?: string;
  srcRegion?: string;
  srcType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreated: 'AutoCreated',
      bakType: 'BakType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      dumpAction: 'DumpAction',
      filterKey: 'FilterKey',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
      onlyPreserveOneEachHour: 'OnlyPreserveOneEachHour',
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
      autoCreated: 'boolean',
      bakType: 'string',
      destRegion: 'string',
      destType: 'string',
      dumpAction: 'string',
      filterKey: 'string',
      filterType: 'string',
      filterValue: 'string',
      onlyPreserveOneEachDay: 'boolean',
      onlyPreserveOneEachHour: 'boolean',
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

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  advancedDataPolicies?: DescribeBackupPolicyResponseBodyAdvancedDataPolicies;
  /**
   * @remarks
   * The advanced backup policy option. Valid values:
   * * **enable**: Advanced backup is enabled.
   * * **disable**: Advanced backup is disabled. You can enable it.
   * * **notSupport**: Advanced backup is not supported.
   * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * 
   * @example
   * disable
   */
  advancedPolicyOption?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (default): Standard backup. A backup is performed at a scheduled time every day.
   * - **2/24H**: Enhanced backup. A backup is performed every 2 hours.
   * - **3/24H**: Enhanced backup. A backup is performed every 3 hours.
   * - **4/24H**: Enhanced backup. A backup is performed every 4 hours.
   * 
   * > * After enhanced backup is enabled, all backups completed within 24 hours are retained. For backups older than 24 hours, the system retains only the first backup completed after 00:00 each day and deletes the rest.
   * >* After enhanced backup is enabled, the backup epoch **PreferredBackupPeriod** parameter is set to all days of the week (Monday to Sunday) by default.
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  /**
   * @remarks
   * The current backup policy level. Valid values:
   * * **Normal**: Standard backup.
   * * **Advanced**: Advanced backup.
   * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * 
   * @example
   * Normal
   */
  backupPolicyLevel?: string;
  /**
   * @remarks
   * Indicates whether to retain backups when the cluster is deleted. Valid values:
   * 
   * * **ALL**: Retain all backups for long-term retention (LTR).
   * * **LATEST**: Retain the latest backup for long-term retention (LTR).
   * * **NONE** (default): Do not retain backup sets.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (default): Standard backup. A backup is performed at a scheduled time every day.
   * - **2/24H**: High-frequency backup. A backup is performed every 2 hours.
   * - **3/24H**: High-frequency backup. A backup is performed every 3 hours.
   * - **4/24H**: High-frequency backup. A backup is performed every 4 hours.
   * 
   * > *  * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * >*  * If the region where your PolarDB for MySQL cluster resides does not support cross-region backup, this parameter is not supported. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >*  * After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Normal
   */
  dataLevel1BackupFrequency?: string;
  /**
   * @remarks
   * The level-1 backup cycle. Valid values: 
   * * **Monday**: Monday.
   * * **Tuesday**: Tuesday.
   * * **Wednesday**: Wednesday.
   * * **Thursday**: Thursday.
   * * **Friday**: Friday.
   * * **Saturday**: Saturday.
   * * **Sunday**: Sunday.
   * 
   * > * * You must select at least two days. Separate multiple values with commas (,).
   * >*  * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * >*  * If the region where your PolarDB for MySQL cluster resides does not support cross-region backup, this parameter is not supported. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >* * After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel1BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-1 backups. Valid values: 3 to 14. Unit: days.
   * > After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 7
   */
  dataLevel1BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backups are performed. The time is in the `hh:mmZ-hh:mmZ` format (UTC time). The specified time must be on the hour with a 1-hour interval, such as `14:00Z-15:00Z`.
   * 
   * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * >* If the region where your PolarDB for MySQL cluster resides does not support cross-region backup, this parameter is not supported. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  dataLevel1BackupTime?: string;
  /**
   * @remarks
   * The destination region for cross-region level-2 backups. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * > After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  dataLevel2BackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention epoch of level-2 cross-region backup. Valid values:
   * 
   * - **0**: Shutdown the level-2 backup feature.
   * 
   * - **30 to 7300**: The retention epoch of level-2 backups. Unit: days.
   * 
   * - **-1**: Long-term retention (LTR) of level-2 backups.
   * 
   *  >
   * >- - When a cluster is created, the default value is **0**, which means the shutdown of the level-2 cross-region backup feature.
   * >- - After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 30
   */
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The level-2 backup cycle. Valid values: 
   * * **Monday**: Monday.
   * * **Tuesday**: Tuesday.
   * * **Wednesday**: Wednesday.
   * * **Thursday**: Thursday.
   * * **Friday**: Friday.
   * * **Saturday**: Saturday.
   * * **Sunday**: Sunday.
   * 
   * > * * You must select at least two days. Separate multiple values with commas (,).
   * >*  * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
   * >* * If the region where your PolarDB for MySQL cluster resides does not support cross-region backup, this parameter is not supported. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >* * After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel2BackupPeriod?: string;
  /**
   * @remarks
   * The retention epoch of level-2 backups. Valid values:
   *  * 0: Shutdown the level-2 backup feature.
   *  * 30 to 7300: The retention epoch of level-2 backups. Unit: days.
   *  * -1: Long-term retention (LTR) of level-2 backups.
   * 
   *  >
   * >- * When a cluster is created, the default value is **0**, which means the shutdown of the level-2 backup feature.
   * >- * After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 0
   */
  dataLevel2BackupRetentionPeriod?: string;
  /**
   * @remarks
   * Indicates whether the immutable backup for cross-region backup is enabled.
   */
  enableCrossRegionImmutableBackup?: boolean;
  /**
   * @remarks
   * Indicates whether immutable backup is enabled.
   */
  enableImmutableBackup?: boolean;
  /**
   * @remarks
   * The data backup cycle. Valid values:
   * 
   * - Monday: Monday.
   * - Tuesday: Tuesday.
   * - Wednesday: Wednesday.
   * - Thursday: Thursday.
   * - Friday: Friday.
   * - Saturday: Saturday.
   * - Sunday: Sunday.
   * > After advanced backup is enabled, do not use this parameter. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period during which automatic backups are performed. The time is in the `HH:mmZ-HH:mmZ` format (UTC time).
   * 
   * @example
   * 07:00Z-08:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time of the next backup. The time is in the `YYYY-MM-DDThh:mmZ` format (UTC time).
   * 
   * @example
   * 2020-11-16T07:30Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EADFCE0F-9FB5-4685-B395-1440B******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedDataPolicies: 'AdvancedDataPolicies',
      advancedPolicyOption: 'AdvancedPolicyOption',
      backupFrequency: 'BackupFrequency',
      backupPolicyLevel: 'BackupPolicyLevel',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
      dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      dataLevel1BackupTime: 'DataLevel1BackupTime',
      dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
      dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      enableCrossRegionImmutableBackup: 'EnableCrossRegionImmutableBackup',
      enableImmutableBackup: 'EnableImmutableBackup',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDataPolicies: DescribeBackupPolicyResponseBodyAdvancedDataPolicies,
      advancedPolicyOption: 'string',
      backupFrequency: 'string',
      backupPolicyLevel: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      dataLevel1BackupFrequency: 'string',
      dataLevel1BackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      dataLevel1BackupTime: 'string',
      dataLevel2BackupAnotherRegionRegion: 'string',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
      dataLevel2BackupPeriod: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      enableCrossRegionImmutableBackup: 'boolean',
      enableImmutableBackup: 'boolean',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.advancedDataPolicies && typeof (this.advancedDataPolicies as any).validate === 'function') {
      (this.advancedDataPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

