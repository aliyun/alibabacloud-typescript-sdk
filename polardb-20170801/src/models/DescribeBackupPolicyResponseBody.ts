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
   * 
   * - **enable**: Advanced backup is enabled.
   * 
   * - **disable**: Advanced backup is disabled. You can enable it.
   * 
   * - **notSupport**: Advanced backup is not supported.
   * 
   * > * This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * 
   * @example
   * disable
   */
  advancedPolicyOption?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (Default): Standard backup. A backup is performed once a day.
   * 
   * - **2/24H**: Enhanced backup. A backup is performed every 2 hours.
   * 
   * - **3/24H**: Enhanced backup. A backup is performed every 3 hours.
   * 
   * - **4/24H**: Enhanced backup. A backup is performed every 4 hours.
   * 
   * > * If you enable enhanced backup, all backups that are completed within 24 hours are retained. For backups that are completed more than 24 hours ago, the system retains only the first backup that is completed after 00:00 every day. Other backups are deleted.
   * >
   * > * If you enable enhanced backup, the **PreferredBackupPeriod** parameter is automatically set to all days of the week (Monday to Sunday).
   * 
   * @example
   * Normal
   */
  backupFrequency?: string;
  /**
   * @remarks
   * The level of the backup policy. Valid values:
   * 
   * - **Normal**: standard backup
   * 
   * - **Advanced**: advanced backup
   * 
   * > * This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * 
   * @example
   * Normal
   */
  backupPolicyLevel?: string;
  /**
   * @remarks
   * The policy to retain backups when you delete a cluster:
   * 
   * - **ALL**: Retains all backups permanently.
   * 
   * - **LATEST**: Retains the last backup permanently.
   * 
   * - **NONE** (Default): Does not retain backup sets.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The backup frequency. Valid values:
   * 
   * - **Normal** (Default): Standard backup. A backup is performed once a day.
   * 
   * - **2/24H**: High-frequency backup. A backup is performed every 2 hours.
   * 
   * - **3/24H**: High-frequency backup. A backup is performed every 3 hours.
   * 
   * - **4/24H**: High-frequency backup. A backup is performed every 4 hours.
   * 
   * > * * This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Normal
   */
  dataLevel1BackupFrequency?: string;
  /**
   * @remarks
   * The cycle of a level-1 backup. Valid values:
   * 
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * > * * Select at least two days. Separate multiple values with commas (,).
   * >
   * > * - This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel1BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-1 backups. Valid values: 3 to 14. Unit: days.
   * 
   * > This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 7
   */
  dataLevel1BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The time range when an automatic backup is performed. The time is in the `hh:mmZ-hh:mmZ` format and is displayed in UTC. The specified time range must be a 1-hour interval on the hour, such as `14:00Z-15:00Z`.
   * 
   * > - This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > - This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * 15:00Z-16:00Z
   */
  dataLevel1BackupTime?: string;
  /**
   * @remarks
   * The destination region of the cross-region level-2 backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * > This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * cn-hangzhou
   */
  dataLevel2BackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region level-2 backups. Valid values:
   * 
   * - **0**: The level-2 backup feature is disabled.
   * 
   * - **30 to 7300**: The retention period of level-2 backups in days.
   * 
   * - **-1**: The level-2 backups are permanently retained.
   * 
   * > * * When you create a cluster, the default value is **0**. This means the cross-region backup feature for level-2 backups is disabled.
   * >
   * > * - This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 30
   */
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The cycle of a level-2 backup. Valid values:
   * 
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * > * * Select at least two days. Separate multiple values with commas (,).
   * >
   * > * - This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
   * >
   * > * - This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * >
   * > * - This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday
   */
  dataLevel2BackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-2 backups. Valid values:
   * 
   * - 0: The level-2 backup feature is disabled.
   * 
   * - 30 to 7300: The retention period of level-2 backups in days.
   * 
   * - -1: The level-2 backups are permanently retained.
   * 
   * > * * When you create a cluster, the default value is **0**. This means the level-2 backup feature is disabled.
   * >
   * > * - This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * 0
   */
  dataLevel2BackupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * - Monday
   * 
   * - Tuesday
   * 
   * - Wednesday
   * 
   * - Thursday
   * 
   * - Friday
   * 
   * - Saturday
   * 
   * - Sunday
   * 
   * > This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range when an automatic backup is performed. The time is in the `HH:mmZ-HH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 07:00Z-08:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time of the next backup. The time is in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
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

